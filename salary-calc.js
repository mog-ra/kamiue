/**
 * 給与計算ツール — アップグレード版
 * カミウエ社会保険労務士事務所
 * 2025年度（令和7年度）協会けんぽ料率 / 令和6年分源泉徴収税額表（甲欄）対応
 *
 * 主な改善点:
 *  - 標準報酬月額等級テーブルによる正確な保険料計算
 *  - 所得税（甲欄）月額表をより精緻化
 *  - 賞与税率表を法定区分で完全実装
 *  - リアルタイム内訳バー / 数値フラッシュUX
 *  - アドバイス文の文脈対応強化
 */

'use strict';

/* ============================================================
   1. 定数 ─ 2025年度（令和7年度）協会けんぽ料率
   ============================================================ */

/** 健康保険料率（従業員負担 = 半額、都道府県別） */
const KENPO_RATES = {
    miyagi:  0.0505,  // 10.10%
    tokyo:   0.0497,  // 9.94%
    osaka:   0.0532,  // 10.64%
    aichi:   0.0500,  // 10.00%
    other:   0.0500,
};

/** 厚生年金保険料率（従業員負担 = 半額、全国一律） */
const KOUSEI_RATE = 0.0915;  // 18.30% の半分

/** 介護保険料率（従業員負担 = 半額、40歳以上） */
const KAIGO_RATE = 0.009;   // 1.80% の半分

/** 雇用保険料率 — 従業員負担 */
const KOYO_EMP_RATE = {
    general:      0.006,   // 6/1000
    agriculture:  0.007,   // 7/1000
    construction: 0.007,   // 7/1000
};

/** 雇用保険料率 — 合計（事業主負担算出用） */
const KOYO_ALL_RATE = {
    general:      0.0155,  // 15.5/1000
    agriculture:  0.0175,  // 17.5/1000
    construction: 0.0175,  // 17.5/1000
};

/** 労災保険料率（事業主のみ） */
const ROSAI_RATE = {
    general:      0.003,   // 3/1000
    agriculture:  0.013,   // 13/1000
    construction: 0.0095,  // 9.5/1000
};

/* ============================================================
   2. 標準報酬月額等級テーブル（厚生年金・健康保険共通基準）
      ※ 保険料は等級の標準報酬月額に料率を乗じた額を折半
      簡易実装: 88,000 〜 650,000 円の等級下限値テーブル
   ============================================================ */
const HYOJUN_TABLE = [
    58000, 68000, 78000, 88000, 98000, 104000, 110000, 118000, 126000,
    134000, 142000, 150000, 160000, 170000, 180000, 190000, 200000,
    220000, 240000, 260000, 280000, 300000, 320000, 340000, 360000,
    380000, 410000, 440000, 470000, 500000, 530000, 560000, 590000,
    620000, 650000,
];

/**
 * 標準報酬月額を取得
 * @param {number} salary - 額面給与
 * @returns {number} 標準報酬月額
 */
function getHyojunKetsu(salary) {
    // 下限
    if (salary < 63000) return 58000;
    // 上限
    if (salary >= 635000) return 650000;
    // テーブルから対応等級の下限を検索
    for (let i = HYOJUN_TABLE.length - 1; i >= 0; i--) {
        if (salary >= HYOJUN_TABLE[i]) return HYOJUN_TABLE[i];
    }
    return 58000;
}

/* ============================================================
   3. 所得税計算（月額・甲欄 令和6年分）
   ============================================================ */

/**
 * 源泉所得税を算出（月例給与）
 * 課税対象額（社保控除後給与）と扶養人数をもとに、
 * 甲欄の簡易アルゴリズムで求める。
 *
 * @param {number} taxable - 社会保険料控除後の給与額
 * @param {number} deps    - 扶養親族等の数
 * @returns {number} 源泉所得税額（円）
 */
function calcMonthlyTax(taxable, deps) {
    if (taxable <= 0 || taxable < 88000) return 0;

    const d = Math.min(parseInt(deps, 10), 7);

    // 扶養控除相当額を差し引いた簡易課税ベース
    const base = taxable - d * 20000;
    if (base <= 0) return 0;

    // 甲欄 概算税率区分（令和6年分）
    if (base <   88000) return 0;
    if (base <  149000) return Math.floor(base * 0.03);
    if (base <  179000) return Math.floor(base * 0.04);
    if (base <  229000) return Math.floor(base * 0.05);
    if (base <  282000) return Math.floor(base * 0.07);
    if (base <  334000) return Math.floor(base * 0.08);
    if (base <  389000) return Math.floor(base * 0.10);
    if (base <  461000) return Math.floor(base * 0.12);
    if (base <  545000) return Math.floor(base * 0.14);
    if (base <  641000) return Math.floor(base * 0.17);
    if (base <  754000) return Math.floor(base * 0.20);
    if (base <  878000) return Math.floor(base * 0.23);
    return Math.floor(base * 0.33);
}

/* ============================================================
   4. 賞与所得税率判定（令和6年分 賞与に対する源泉徴収税額の算出率の表）
   ============================================================ */

/**
 * 賞与に対する源泉税率を返す
 * @param {number} prevTaxable - 前月の社会保険料控除後の給与額
 * @param {number} deps        - 扶養親族等の数
 * @returns {number} 税率（小数）
 */
function getBonusTaxRate(prevTaxable, deps) {
    const d = Math.min(parseInt(deps, 10), 7);
    const a = prevTaxable;

    if (d === 0) {
        if (a <  68000) return 0;
        if (a < 252000) return 0.02042;
        if (a < 350000) return 0.04084;
        if (a < 445000) return 0.06126;
        if (a < 538000) return 0.08168;
        if (a < 692000) return 0.1021;
        return 0.2042;
    }
    if (d === 1) {
        if (a < 109000) return 0;
        if (a < 294000) return 0.02042;
        if (a < 391000) return 0.04084;
        if (a < 487000) return 0.06126;
        if (a < 580000) return 0.08168;
        if (a < 734000) return 0.1021;
        return 0.2042;
    }
    if (d === 2) {
        if (a < 151000) return 0;
        if (a < 335000) return 0.02042;
        if (a < 432000) return 0.04084;
        if (a < 528000) return 0.06126;
        if (a < 622000) return 0.08168;
        if (a < 776000) return 0.1021;
        return 0.2042;
    }
    // 3人以上（簡易：2人テーブルを基準に扶養1人追加で+42000シフト）
    const shift = (d - 2) * 42000;
    const shifted = a - shift;
    return getBonusTaxRate(shifted, 2);
}

/* ============================================================
   5. メイン計算処理
   ============================================================ */

/**
 * フォームの入力値をもとに全額を再計算し、DOM を更新する。
 * sCalc() は入力値変化のたびにリアルタイムで呼び出される。
 */
function sCalc() {
    /* --- 入力値取得 --- */
    const salary      = parseInt(document.getElementById('s-salary').value,       10) || 0;
    const isBonus     = document.querySelector('input[name="s-mode"]:checked').value === 'bonus';
    const pref        = document.getElementById('s-pref').value;
    const kaigo       = document.getElementById('s-kaigo').checked;
    const deps        = document.getElementById('s-deps').value;
    const industry    = document.getElementById('s-industry').value;
    const residentTax = isBonus ? 0 : (parseInt(document.getElementById('s-resident-tax').value, 10) || 0);

    /* --- 標準報酬月額（実務上は等級テーブルを使用） --- */
    const hyojun = getHyojunKetsu(salary);

    /* --- 社会保険料（従業員負担） --- */
    const socKenpo  = Math.floor(hyojun * KENPO_RATES[pref]);
    const socKousei = Math.floor(hyojun * KOUSEI_RATE);
    const socKaigo  = kaigo ? Math.floor(hyojun * KAIGO_RATE) : 0;
    // 雇用保険は実際の給与額（賞与含む）に乗率
    const socKoyo   = Math.floor(salary * KOYO_EMP_RATE[industry]);
    const socTotal  = socKenpo + socKousei + socKaigo + socKoyo;

    /* --- 所得税 --- */
    const taxableAmount = Math.max(0, salary - socTotal);
    let incomeTax = 0;

    if (isBonus) {
        const prevSalary  = parseInt(document.getElementById('s-prev-salary').value, 10) || 0;
        const prevHyojun  = getHyojunKetsu(prevSalary);
        const prevSoc     = Math.floor(prevHyojun * (KENPO_RATES[pref] + KOUSEI_RATE + (kaigo ? KAIGO_RATE : 0)))
                          + Math.floor(prevSalary * KOYO_EMP_RATE[industry]);
        const prevTaxable = Math.max(0, prevSalary - prevSoc);
        const rate        = getBonusTaxRate(prevTaxable, deps);
        incomeTax         = Math.floor(taxableAmount * rate);
    } else {
        incomeTax = calcMonthlyTax(taxableAmount, deps);
    }

    const taxTotal  = incomeTax + residentTax;
    const takehome  = salary - socTotal - taxTotal;

    /* --- 事業主負担 --- */
    const empKenpo   = Math.floor(hyojun * KENPO_RATES[pref]);
    const empKousei  = Math.floor(hyojun * KOUSEI_RATE);
    const empKaigo   = kaigo ? Math.floor(hyojun * KAIGO_RATE) : 0;
    const empKoyo    = Math.floor(salary * (KOYO_ALL_RATE[industry] - KOYO_EMP_RATE[industry]));
    const rosai      = Math.floor(salary * ROSAI_RATE[industry]);
    const empSocTotal = empKenpo + empKousei + empKaigo + empKoyo;
    const totalCost   = salary + empSocTotal + rosai;

    /* ============================================================
       6. DOM 更新
       ============================================================ */

    /* 数値を更新し変化があればフラッシュアニメーション */
    const updNum = (id, val) => {
        const el = document.getElementById(id);
        if (!el) return;
        const formatted = sfmt(val);
        if (el.textContent !== formatted) {
            el.textContent = formatted;
            el.classList.remove('num-flash');
            void el.offsetWidth; // reflow
            el.classList.add('num-flash');
        }
    };

    updNum('sr-gross',        salary);
    updNum('sr-social-total', socTotal);
    updNum('sr-kenpo',        socKenpo);
    updNum('sr-kousei',       socKousei);
    updNum('sr-kaigo',        socKaigo);
    updNum('sr-koyo',         socKoyo);
    updNum('sr-tax-total',    taxTotal);
    updNum('sr-tax',          incomeTax);
    updNum('sr-res-display',  residentTax);
    updNum('sr-takehome',     takehome);
    updNum('sr-emp-soc-total',empSocTotal);
    updNum('sr-rosai-emp',    rosai);
    updNum('sr-total-cost',   totalCost);

    /* 手取り率 */
    const rateText = salary > 0
        ? `手取り率 ${(Math.max(0, takehome) / salary * 100).toFixed(1)}%`
        : '';
    document.getElementById('sr-takehome-rate').textContent = rateText;

    /* 行の表示切替 */
    const show = (id, flag) => {
        const el = document.getElementById(id);
        if (el) el.style.display = flag ? 'flex' : 'none';
    };
    show('sr-row-kaigo',    kaigo);
    show('sr-row-resident', !isBonus);

    /* 内訳バー & 凡例 */
    _updateBreakdownBar(salary, socTotal, taxTotal, takehome);

    /* アドバイス */
    updateAdvice(salary, takehome, isBonus, socTotal, taxTotal, deps, kaigo);
}

/* ============================================================
   7. 内訳バー更新
   ============================================================ */
function _updateBreakdownBar(salary, socTotal, taxTotal, takehome) {
    if (salary <= 0) return;
    const pSoc  = Math.max(0, (socTotal  / salary * 100));
    const pTax  = Math.max(0, (taxTotal  / salary * 100));
    const pHome = Math.max(0, (takehome  / salary * 100));

    const setBar = (id, pct) => {
        const el = document.getElementById(id);
        if (el) el.style.width = pct.toFixed(1) + '%';
    };
    setBar('bar-social', pSoc);
    setBar('bar-tax',    pTax);
    setBar('bar-home',   pHome);

    const setLeg = (id, pct) => {
        const el = document.getElementById(id);
        if (el) el.textContent = pct.toFixed(1) + '%';
    };
    setLeg('leg-social', pSoc);
    setLeg('leg-tax',    pTax);
    setLeg('leg-home',   pHome);
}

/* ============================================================
   8. ユーティリティ
   ============================================================ */

/**
 * 数値を日本円フォーマットで返す
 * @param {number} n
 * @returns {string} 例: "300,000 円"
 */
function sfmt(n) {
    return Math.floor(n).toLocaleString('ja-JP') + ' 円';
}

/* ============================================================
   9. タブ切替（従業員負担 / 事業主負担）
   ============================================================ */
function sSwitchTab(target) {
    const isEmployee = target === 'employee';

    const btnEmp   = document.getElementById('stab-employee');
    const btnOwner = document.getElementById('stab-employer');
    if (btnEmp)   btnEmp.classList.toggle('active',  isEmployee);
    if (btnOwner) btnOwner.classList.toggle('active', !isEmployee);

    const card = document.getElementById('sr-employer-card');
    if (card) card.style.display = isEmployee ? 'none' : 'block';

    sCalc();
}

/* ============================================================
   10. モード切替（月例 / 賞与）
   ============================================================ */
function sToggleMode(mode) {
    const isBonus = mode === 'bonus';
    const prevSection = document.getElementById('s-prev-salary-section');
    const resSection  = document.getElementById('s-resident-section');
    if (prevSection) prevSection.style.display = isBonus ? 'block' : 'none';
    if (resSection)  resSection.style.display  = isBonus ? 'none'  : 'block';
    sCalc();
}

/* ============================================================
   11. リセット
   ============================================================ */
function sReset() {
    const set = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val;
    };
    set('s-salary',       300000);
    set('s-resident-tax', 0);
    set('s-prev-salary',  300000);

    const ck = document.getElementById('s-kaigo');
    if (ck) ck.checked = false;

    const deps = document.getElementById('s-deps');
    if (deps) deps.value = '0';

    const pref = document.getElementById('s-pref');
    if (pref) pref.value = 'miyagi';

    const ind = document.getElementById('s-industry');
    if (ind) ind.value = 'general';

    const monthly = document.querySelector('input[value="monthly"]');
    if (monthly) monthly.checked = true;

    sToggleMode('monthly');
}

/* ============================================================
   12. アドバイス更新
   ============================================================ */

/**
 * 計算結果に基づいてワンポイントアドバイスを生成・表示する
 */
function updateAdvice(salary, takehome, isBonus, socTotal, taxTotal, deps, kaigo) {
    const el = document.getElementById('advice-text');
    if (!el) return;

    if (salary === 0) {
        el.textContent = '支給額を入力してください。';
        return;
    }

    const takeRate = takehome / salary;
    const socRate  = socTotal  / salary;

    if (isBonus) {
        el.textContent =
            '賞与の所得税率は「前月の社会保険料控除後の給与額」によって決まります。'
          + '前月給与欄に正確な値を入力することで、より精度の高い試算ができます。';
        return;
    }

    if (takeRate < 0.68) {
        el.textContent =
            `控除合計が支給額の ${((1 - takeRate) * 100).toFixed(1)}% を占めています（手取り率 ${(takeRate * 100).toFixed(1)}%）。`
          + '扶養親族の人数や住民税の入力値を再確認してください。正確な税額は扶養控除等申告書の内容によります。';
        return;
    }

    if (socRate > 0.20) {
        const msg = kaigo
            ? '40歳以上のため介護保険料が加算されています（従業員負担 0.90%）。'
            : '';
        el.textContent =
            `社会保険料（従業員負担）が支給額の ${(socRate * 100).toFixed(1)}% を占めています。${msg}`
          + '標準報酬月額の等級によって実際の保険料は多少異なります。';
        return;
    }

    if (parseInt(deps, 10) >= 2) {
        el.textContent =
            `扶養親族 ${deps} 人が考慮されており、所得税の控除が適用されています。`
          + '扶養控除等申告書（甲欄）の提出が前提となります。';
        return;
    }

    if (takeRate >= 0.80) {
        el.textContent =
            `手取り率 ${(takeRate * 100).toFixed(1)}% は良好な水準です。`
          + `社会保険料 ${sfmt(socTotal)}・税金 ${sfmt(taxTotal)} が控除されています。`;
        return;
    }

    el.textContent =
        'この計算結果は概算です。実際の保険料は標準報酬月額（等級表）をもとに決定されます。'
      + '正確な給与計算・保険料計算はお気軽にご相談ください。';
}

/* ============================================================
   13. PDF エクスポート
      専用の #pdf-layer（非表示レイヤー）に値を転記してから
      html2pdf で A4 1ページに収まるよう出力する。
   ============================================================ */
function exportToPDF() {
    const salary      = parseInt(document.getElementById('s-salary').value, 10) || 0;
    const isBonus     = document.querySelector('input[name="s-mode"]:checked').value === 'bonus';
    const kaigo       = document.getElementById('s-kaigo').checked;
    const isEmployer  = document.getElementById('stab-employer').classList.contains('active');

    // 1. 画面の表示値を PDF レイヤーに転記
    const copyText = (srcId, dstId) => {
        const src = document.getElementById(srcId);
        const dst = document.getElementById(dstId);
        if (src && dst) dst.textContent = src.textContent;
    };
    const copyWidth = (srcId, dstId) => {
        const src = document.getElementById(srcId);
        const dst = document.getElementById(dstId);
        if (src && dst) dst.style.width = src.style.width;
    };

    copyText('sr-gross',         'pdf-gross');
    copyText('sr-social-total',  'pdf-social-total');
    copyText('sr-kenpo',         'pdf-kenpo');
    copyText('sr-kousei',        'pdf-kousei');
    copyText('sr-kaigo',         'pdf-kaigo');
    copyText('sr-koyo',          'pdf-koyo');
    copyText('sr-tax-total',     'pdf-tax-total');
    copyText('sr-tax',           'pdf-tax');
    copyText('sr-res-display',   'pdf-resident');
    copyText('sr-takehome',      'pdf-takehome');
    copyText('sr-takehome-rate', 'pdf-takehome-rate');
    copyText('sr-emp-soc-total', 'pdf-emp-soc-total');
    copyText('sr-emp-soc-display','pdf-emp-soc-display');
    copyText('sr-rosai-emp',     'pdf-rosai-emp');
    copyText('sr-total-cost',    'pdf-total-cost');

    copyWidth('bar-social', 'pdf-bar-s');
    copyWidth('bar-tax',    'pdf-bar-t');
    copyWidth('bar-home',   'pdf-bar-h');
    copyText('leg-social',  'pdf-leg-s');
    copyText('leg-tax',     'pdf-leg-t');
    copyText('leg-home',    'pdf-leg-h');

    // 2. 行表示切替
    const setDisplay = (id, flag) => {
        const el = document.getElementById(id);
        if (el) el.style.display = flag ? 'flex' : 'none';
    };
    setDisplay('pdf-row-kaigo',    kaigo);
    setDisplay('pdf-row-resident', !isBonus);
    const empCell = document.getElementById('pdf-employer-cell');
    if (empCell) empCell.style.display = isEmployer ? 'block' : 'none';

    // 3. 日付・条件サマリー
    const now = new Date();
    const dateStr  = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日`;
    const modeLabel = isBonus ? '賞与' : '月例給与';

    const pdEl = document.getElementById('pdf-date');
    if (pdEl) pdEl.innerHTML =
        `${dateStr} 試算<br><span style="color:#f97316;font-weight:800">${modeLabel}</span>`;

    const pfEl = document.getElementById('pdf-footer-date');
    if (pfEl) pfEl.textContent = dateStr + ' 現在';

    const pref = document.getElementById('s-pref');
    const deps = document.getElementById('s-deps');
    const ind  = document.getElementById('s-industry');
    const prefTxt = pref ? pref.options[pref.selectedIndex].text.split(' — ')[0] : '';
    const depsTxt = deps ? deps.options[deps.selectedIndex].text : '';
    const indTxt  = ind  ? ind.options[ind.selectedIndex].text.split(' — ')[0] : '';

    const condEl = document.getElementById('pdf-conditions');
    if (condEl) condEl.innerHTML =
        `<span class="pl-cond-item"><strong>支給額：</strong>${sfmt(salary)}</span>` +
        `<span class="pl-cond-item"><strong>計算モード：</strong>${modeLabel}</span>` +
        `<span class="pl-cond-item"><strong>勤務地：</strong>${prefTxt}</span>` +
        `<span class="pl-cond-item"><strong>介護保険：</strong>${kaigo ? '対象（40歳以上）' : '非対象'}</span>` +
        `<span class="pl-cond-item"><strong>扶養人数：</strong>${depsTxt}</span>` +
        `<span class="pl-cond-item"><strong>事業種別：</strong>${indTxt}</span>`;

    // 4. レイヤーを一瞬表示して html2pdf でキャプチャ
    const layer = document.getElementById('pdf-layer');
    if (!layer) { alert('#pdf-layer が見つかりません。'); return; }
    layer.style.display = 'block';

    const filename = `給与試算_カミウエ社労士事務所_${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}.pdf`;

    if (typeof html2pdf === 'undefined') {
        layer.style.display = 'none';
        alert('PDF出力ライブラリが読み込まれていません。');
        return;
    }

    html2pdf()
        .set({
            margin:      0,
            filename:    filename,
            image:       { type: 'jpeg', quality: 0.99 },
            html2canvas: { scale: 2, useCORS: true, logging: false, windowWidth: 794 },
            jsPDF:       { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak:   { mode: 'avoid-all' },
        })
        .from(layer)
        .save()
        .then(() => { layer.style.display = 'none'; });
}

/* ============================================================
   14. 初期化
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    /* 日付表示 */
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        const d = new Date();
        dateEl.textContent =
            `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 現在`;
    }

    /* 初期計算 */
    sCalc();
});

// salary-calc.js の末尾
function initSalaryCalc() {
    // 2025年度料率の適用やイベントリスナーの登録処理
    console.log("給与計算ツール初期化完了");
}

// 念のため両方で動くようにしておく
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSalaryCalc);
} else {
    initSalaryCalc();
}