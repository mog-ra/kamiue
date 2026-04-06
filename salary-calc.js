/**
 * 給与計算ツール プログラム
 * カミウエ社会保険労務士事務所
 */

// --- 1. 定数定義 ---
const KENPO_RATES = { miyagi: 0.0505, tokyo: 0.0497, osaka: 0.0532, other: 0.0500 };
const KOYO_EMP_RATE = { general: 0.006, construction: 0.007 }; // 従業員負担
const KOYO_ALL_RATE = { general: 0.0155, construction: 0.0175 }; // 合計
const ROSAI_RATE = { general: 0.003, construction: 0.0095 };
const KOUSEI_RATE = 0.0915; // 従業員負担（18.3%の半分）
const KAIGO_RATE = 0.009;   // 従業員負担（1.8%の半分）

// --- 2. 所得税計算ロジック（月例） ---
function sCalcTax(taxable, deps) {
    if (taxable <= 0) return 0;
    // 令和6年分 源泉徴収税額表（簡易アルゴリズム）
    const d = parseInt(deps);
    if (taxable < 88000) return 0;
    
    // 扶養人数による控除（簡易計算用境界値）
    const threshold = taxable - (d * 20000);
    if (threshold < 100000) return Math.floor(threshold * 0.03);
    if (threshold < 200000) return Math.floor(threshold * 0.05);
    if (threshold < 300000) return Math.floor(threshold * 0.10);
    return Math.floor(threshold * 0.20); // 30万超の概算
}

// --- 3. 賞与所得税率の判定（前月の社会保険料控除後給与に基づく） ---
function getBonusTaxRate(prevTaxable, deps) {
    const d = parseInt(deps);
    const amount = prevTaxable;
    
    // 令和6年 賞与に対する源泉徴収税額の算出率の表（抜粋）
    if (d === 0) {
        if (amount < 68000) return 0;
        if (amount < 252000) return 0.02042;
        if (amount < 350000) return 0.04084;
        if (amount < 445000) return 0.06126;
        return 0.1021;
    } else if (d === 1) {
        if (amount < 109000) return 0;
        if (amount < 294000) return 0.02042;
        if (amount < 391000) return 0.04084;
        return 0.06126;
    } else {
        if (amount < 151000) return 0;
        if (amount < 335000) return 0.02042;
        return 0.04084;
    }
}

// --- 4. メイン計算処理 ---
function sCalc() {
    // 入力値取得
    const salary = parseInt(document.getElementById('s-salary').value) || 0;
    const isBonus = document.querySelector('input[name="s-mode"]:checked').value === 'bonus';
    const pref = document.getElementById('s-pref').value;
    const kaigo = document.getElementById('s-kaigo').checked;
    const deps = document.getElementById('s-deps').value;
    const industry = document.getElementById('s-industry').value;
    const residentTax = isBonus ? 0 : (parseInt(document.getElementById('s-resident-tax').value) || 0);

    // 社会保険料（標準報酬月額の等級は簡易化し、額面に直接乗算）
    const socKenpo = Math.floor(salary * KENPO_RATES[pref]);
    const socKousei = Math.floor(salary * KOUSEI_RATE);
    const socKaigo = kaigo ? Math.floor(salary * KAIGO_RATE) : 0;
    const socKoyo = Math.floor(salary * KOYO_EMP_RATE[industry]);
    const socTotal = socKenpo + socKousei + socKaigo + socKoyo;

    // 所得税
    let incomeTax = 0;
    const taxableAmount = Math.max(0, salary - socTotal);

    if (isBonus) {
        const prevSalary = parseInt(document.getElementById('s-prev-salary').value) || 0;
        // 前月の社保控除後額を概算
        const prevSoc = Math.floor(prevSalary * (KENPO_RATES[pref] + KOUSEI_RATE + (kaigo ? KAIGO_RATE : 0) + KOYO_EMP_RATE[industry]));
        const prevTaxable = Math.max(0, prevSalary - prevSoc);
        const bonusRate = getBonusTaxRate(prevTaxable, deps);
        incomeTax = Math.floor(taxableAmount * bonusRate);
    } else {
        incomeTax = sCalcTax(taxableAmount, deps);
    }

    const taxTotal = incomeTax + residentTax;
    const takehome = salary - socTotal - taxTotal;

    // 表示更新
    document.getElementById('sr-gross').textContent = sfmt(salary);
    document.getElementById('sr-social-total').textContent = sfmt(socTotal);
    document.getElementById('sr-kenpo').textContent = sfmt(socKenpo);
    document.getElementById('sr-kousei').textContent = sfmt(socKousei);
    document.getElementById('sr-row-kaigo').style.display = kaigo ? 'flex' : 'none';
    document.getElementById('sr-kaigo').textContent = sfmt(socKaigo);
    document.getElementById('sr-koyo').textContent = sfmt(socKoyo);
    
    document.getElementById('sr-tax-total').textContent = sfmt(taxTotal);
    document.getElementById('sr-tax').textContent = sfmt(incomeTax);
    document.getElementById('sr-res-display').textContent = sfmt(residentTax);
    document.getElementById('sr-row-resident').style.display = isBonus ? 'none' : 'flex';
    
    document.getElementById('sr-takehome').textContent = sfmt(takehome);
    const rateText = salary > 0 ? `手取り率: ${(takehome / salary * 100).toFixed(1)}%` : "";
    document.getElementById('sr-takehome-rate').textContent = rateText;

    // 事業主負担計算
    const empSocTotal = socTotal + Math.floor(salary * (KOYO_ALL_RATE[industry] - KOYO_EMP_RATE[industry]));
    const rosai = Math.floor(salary * ROSAI_RATE[industry]);
    document.getElementById('sr-emp-soc-total').textContent = sfmt(empSocTotal);
    document.getElementById('sr-rosai-emp').textContent = sfmt(rosai);
    document.getElementById('sr-total-cost').textContent = sfmt(salary + empSocTotal + rosai);

    // アドバイス更新
    updateAdvice(salary, takehome, isBonus);
}

// --- 5. ユーティリティ ---
function sfmt(n) { return Math.floor(n).toLocaleString() + " 円"; }

function sSwitchTab(target) {
    const isEmp = target === 'employee';
    document.getElementById('stab-employee').classList.toggle('active', isEmp);
    document.getElementById('stab-employer').classList.toggle('active', !isEmp);
    document.getElementById('sr-employer-card').style.display = isEmp ? 'none' : 'block';
}

function sToggleMode(mode) {
    const isBonus = mode === 'bonus';
    document.getElementById('s-prev-salary-section').style.display = isBonus ? 'block' : 'none';
    document.getElementById('s-resident-section').style.display = isBonus ? 'none' : 'block';
    sCalc();
}

function sReset() {
    document.getElementById('s-salary').value = 300000;
    document.querySelector('input[value="monthly"]').checked = true;
    document.getElementById('s-kaigo').checked = false;
    document.getElementById('s-deps').value = 0;
    document.getElementById('s-resident-tax').value = 0;
    sToggleMode('monthly');
    sCalc();
}

function updateAdvice(salary, takehome, isBonus) {
    const el = document.getElementById('advice-text');
    if (salary === 0) { el.textContent = "金額を入力してください。"; return; }
    
    let text = "この計算結果は概算です。正確な税額は扶養控除等申告書の内容に基づきます。";
    if (isBonus) {
        text = "賞与の所得税率は、前月の給与額（社会保険料控除後）によって決まります。";
    } else if (takehome / salary < 0.7) {
        text = "社会保険料や税金の合計が支給額の30%を超えています。手取り額の確認をお勧めします。";
    }
    el.textContent = text;
}

function exportToPDF() {
    const element = document.getElementById('pdf-content');
    const opt = {
        margin: [10, 10],
        filename: '給与試算_カミウエ社労士事務所.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

// 初期化
// ※ index.html 内に埋め込まれるため window.onload ではなく
//    DOMContentLoaded を使用（他スクリプトとの競合を回避）
document.addEventListener('DOMContentLoaded', () => {
    const d = new Date();
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        dateEl.textContent = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 実施`;
    }
    sCalc();
});