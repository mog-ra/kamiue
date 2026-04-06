// =============================================
// 外部ライブラリ読み込み
// ※ HTMLの <head> または <body> 末尾に以下を記述してください
// <script src="https://cdn.tailwindcss.com"></script>
// =============================================

// --- DL_PDF_DATA (全6ファイル対応) ---
const DL_PDF_DATA = [
    { filename: "01_shugyo_kisoku.pdf",      title: "就業規則 作成テンプレート集",         emoji: "📋", url: "./files/01_shugyo_kisoku.pdf" },
    { filename: "02_36_kyotei_manual.pdf",   title: "36協定 届出マニュアル",               emoji: "📄", url: "./files/02_36_kyotei_manual.pdf" },
    { filename: "03_joseikin_guide.pdf",     title: "【最新版】助成金活用ガイドブック",     emoji: "💡", url: "./files/03_joseikin_guide.pdf" },
    { filename: "04_koyo_keiyaku_sample.pdf",title: "雇用契約書・労働条件通知書サンプル",  emoji: "📝", url: "./files/04_koyo_keiyaku_sample.pdf" },
    { filename: "05_telework_kitei.pdf",     title: "テレワーク導入・運用規定案",          emoji: "💻", url: "./files/05_telework_kitei.pdf" },
    { filename: "06_stress_check_guide.pdf", title: "メンタルヘルス実施ガイド",            emoji: "🧠", url: "./files/06_stress_check_guide.pdf" }
];

// ダウンロード関数（チャットボット等から直接呼び出す用）
function downloadPDF(index) {
    const item = DL_PDF_DATA[index];
    if (!item) {
        console.error("指定されたインデックスのデータが見つかりません:", index);
        return;
    }
    console.log("ダウンロード開始:", item.title, "パス:", item.url);
    const link = document.createElement('a');
    link.href = item.url;
    link.download = item.filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    try {
        link.click();
        console.log("クリックイベントを実行しました");
    } catch (e) {
        console.error("クリックイベント中にエラーが発生しました:", e);
    }
    document.body.removeChild(link);
    if (typeof addMessage === 'function') {
        addMessage('assistant', `「${item.title}」のダウンロードを開始します。\n※開始されない場合は、ブラウザのポップアップブロックを確認してください。`);
    }
}


// =============================================
// 無料資料ダウンロード モーダル制御
// =============================================

// HTMLカードの表示順（index 0〜5）と対応するPDFファイル
// ※ HTMLの dlOpenModal(N) のN番号と順番を一致させること
const DL_MODAL_ITEMS = [
    { emoji: '📋', title: '就業規則 作成テンプレート集',              filename: '01_shugyo_kisoku.pdf',       url: './files/01_shugyo_kisoku.pdf' },
    { emoji: '💰', title: '助成金申請 完全マニュアル',                filename: '03_joseikin_guide.pdf',      url: './files/03_joseikin_guide.pdf' },
    { emoji: '⚖️', title: '労務リスク 50項目チェックリスト',         filename: '02_36_kyotei_manual.pdf',    url: './files/02_36_kyotei_manual.pdf' },
    { emoji: '📊', title: '社会保険料 早見表 2025年度版',             filename: '04_koyo_keiyaku_sample.pdf', url: './files/04_koyo_keiyaku_sample.pdf' },
    { emoji: '🏢', title: 'はじめて社員を雇う時の手続き完全ガイド',  filename: '05_telework_kitei.pdf',      url: './files/05_telework_kitei.pdf' },
    { emoji: '🕐', title: '36協定 作成・届出 実務ガイドブック',       filename: '06_stress_check_guide.pdf',  url: './files/06_stress_check_guide.pdf' },
];

let _dlCurrentIndex = 0;

// モーダルを開く
function dlOpenModal(index) {
    _dlCurrentIndex = index;
    const item = DL_MODAL_ITEMS[index];
    if (!item) {
        console.error("dlOpenModal: 該当する資料が見つかりません index =", index);
        return;
    }

    // ヘッダー内容を更新
    const emojiEl = document.getElementById('dl-modal-emoji');
    const titleEl = document.getElementById('dl-modal-title');
    if (emojiEl) emojiEl.textContent = item.emoji;
    if (titleEl) titleEl.textContent = item.title;

    // フォームをリセット
    const nameEl    = document.getElementById('dl-name');
    const emailEl   = document.getElementById('dl-email');
    const companyEl = document.getElementById('dl-company');
    const newsEl    = document.getElementById('dl-newsletter');
    const errorEl   = document.getElementById('dl-form-error');
    if (nameEl)    nameEl.value = '';
    if (emailEl)   emailEl.value = '';
    if (companyEl) companyEl.value = '';
    if (newsEl)    newsEl.checked = true;
    if (errorEl)   errorEl.classList.add('hidden');

    // フォームエリアを表示、完了エリアを非表示
    const formArea    = document.getElementById('dl-form-area');
    const successArea = document.getElementById('dl-success-area');
    if (formArea)    formArea.classList.remove('hidden');
    if (successArea) successArea.classList.add('hidden');

    // オーバーレイを表示（display:flex に切り替え）
    const overlay = document.getElementById('dl-modal-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// モーダルを閉じる
function dlCloseModal() {
    const overlay = document.getElementById('dl-modal-overlay');
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = '';
}

// オーバーレイ背景クリックで閉じる
function dlOverlayClick(event) {
    if (event.target === document.getElementById('dl-modal-overlay')) {
        dlCloseModal();
    }
}

// フォーム送信・ダウンロード実行
function dlSubmit() {
    const name    = (document.getElementById('dl-name')?.value  || '').trim();
    const email   = (document.getElementById('dl-email')?.value || '').trim();
    const errorEl = document.getElementById('dl-form-error');

    // バリデーション
    if (!name || !email) {
        if (errorEl) errorEl.classList.remove('hidden');
        return;
    }
    if (errorEl) errorEl.classList.add('hidden');

    const item = DL_MODAL_ITEMS[_dlCurrentIndex];
    if (!item) return;

    // ① ファイルを即ダウンロード
    const link = document.createElement('a');
    link.href = item.url;
    link.download = item.filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    try {
        link.click();
    } catch (e) {
        console.error("ダウンロードエラー:", e);
    }
    document.body.removeChild(link);

    // ② Formspree でリード情報をメール通知（任意）
    //    https://formspree.io/ で無料アカウントを作成し、
    //    フォームIDを取得して YOUR_FORM_ID を置き換えてコメントを外してください。
    // -------------------------------------------------------
    // const company    = (document.getElementById('dl-company')?.value || '').trim();
    // const newsletter = document.getElementById('dl-newsletter')?.checked ?? true;
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, company, newsletter, document: item.title }),
    // }).catch(err => console.warn('Formspree送信エラー:', err));
    // -------------------------------------------------------

    // ③ 完了画面に切り替え
    const formArea    = document.getElementById('dl-form-area');
    const successArea = document.getElementById('dl-success-area');
    if (formArea)    formArea.classList.add('hidden');
    if (successArea) successArea.classList.remove('hidden');
}


// =============================================
// ダウンロードページ バナー一括登録
// ※ 「まとめて受け取る」ボタン (dlBannerRegister) から呼ばれる
// =============================================
function dlBannerRegister() {
    const emailEl    = document.getElementById('dl-banner-email');
    const bannerForm = document.getElementById('dl-banner-form');
    const bannerDone = document.getElementById('dl-banner-done');
    const email      = (emailEl?.value || '').trim();

    // メールアドレス簡易バリデーション
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (emailEl) {
            emailEl.style.border       = '2px solid #ef4444';
            emailEl.style.background   = '#fff5f5';
            emailEl.placeholder        = '正しいメールアドレスを入力してください';
        }
        return;
    }
    if (emailEl) {
        emailEl.style.border     = '';
        emailEl.style.background = '';
    }

    // 全6資料を0.8秒ずつずらして連続ダウンロード
    DL_MODAL_ITEMS.forEach(function(item, i) {
        setTimeout(function() {
            const link = document.createElement('a');
            link.href = item.url;
            link.download = item.filename;
            link.style.display = 'none';
            document.body.appendChild(link);
            try { link.click(); } catch(e) { console.error('DL error:', item.filename, e); }
            document.body.removeChild(link);
        }, i * 800);
    });

    // Formspree でリード情報をメール通知（任意）
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, type: '一括登録' }),
    // }).catch(err => console.warn('Formspree送信エラー:', err));

    // 完了表示に切り替え
    if (bannerForm) bannerForm.classList.add('hidden');
    if (bannerDone) bannerDone.classList.remove('hidden');
}


// =============================================
// ページ切り替え・ソリューション表示
// =============================================
const solutions = {
    'subsidy':    { icon: '💰', title: '助成金を活用したい',           description: '国や自治体の助成金制度を活用することで、採用コスト削減や職場環境改善を実質負担ゼロで実現できます。', steps: [{title:'助成金診断',desc:'貴社の状況に合致する助成金を洗い出し、受給可能性を診断します。'},{title:'計画書作成',desc:'申請に必要な計画書や添付書類を社労士が作成・準備します。'},{title:'申請代行',desc:'労働局やハローワークへの申請手続きを全て代行いたします。'},{title:'フォローアップ',desc:'受給後の報告書作成や、次回申請に向けたアドバイスも行います。'}], point: '助成金は「成功報酬型」なので、受給できなければ費用は発生しません。まずはお気軽にご相談ください。' },
    'payroll':    { icon: '📊', title: '給与計算を外注したい',           description: '複雑化する給与計算業務。法改正対応や年末調整まで、全てお任せいただけます。', steps: [{title:'勤怠データ受領',desc:'タイムカードやクラウド勤怠データをお預かりします。'},{title:'給与計算実施',desc:'社会保険料、税金、各種手当を正確に計算いたします。'},{title:'明細発行',desc:'WEB給与明細システムで従業員様へ直接配信します。'},{title:'振込データ作成',desc:'金融機関への振込データも作成し、お渡しいたします。'}], point: '給与計算のアウトソーシングで、経営者様の時間を本業に集中していただけます。' },
    'trouble':    { icon: '⚖️', title: '従業員とのトラブルを防ぎたい', description: '労務トラブルは事前の対策が最も重要です。就業規則の整備や相談体制の構築をサポートします。', steps: [{title:'就業規則見直し',desc:'最新の法令に適合した就業規則を作成・改定します。'},{title:'労使協定整備',desc:'36協定など必要な労使協定を漏れなく整備します。'},{title:'相談窓口設置',desc:'従業員からの相談を受け付ける体制を構築します。'},{title:'研修実施',desc:'ハラスメント防止研修など、予防的な取り組みを支援します。'}], point: 'トラブルが起きてからでは遅いのです。予防的な労務管理が、企業を守ります。' },
    'startup':    { icon: '🏢', title: '会社を設立したばかり',           description: '創業期の労務手続きは複雑です。社会保険の加入から就業規則作成まで、ワンストップでサポートします。', steps: [{title:'社会保険新規適用',desc:'法人設立後の社会保険・労働保険の加入手続きを代行します。'},{title:'就業規則作成',desc:'10名未満でも作成をお勧めします。トラブル予防の要です。'},{title:'雇用契約書整備',desc:'労働条件通知書や雇用契約書のひな形を作成します。'},{title:'給与体系設計',desc:'採用活動に活かせる、競争力のある給与体系を設計します。'}], point: '創業期こそ、労務の「仕組み化」が重要です。後から修正するのは大変です。' },
    'it':         { icon: '💻', title: 'クラウド勤怠・労務管理を導入したい', description: 'タイムカードでの管理は集計ミスの温床です。ITの力で効率化し、法改正にも対応しやすい体制を構築しましょう。', steps: [{title:'ツール選定',desc:'マネーフォワード、ジョブカン等から、貴社に最適なツールを選定します。'},{title:'初期設定',desc:'複雑な就業設定、休日設定などを社労士の視点で正確に設定します。'},{title:'運用レクチャー',desc:'従業員への説明や、管理者画面の使い方を丁寧にサポートします。'},{title:'データ連携',desc:'勤怠データと給与計算をスムーズに連携させ、手入力を最小限にします。'}], point: 'ITに詳しくない経営者様でも安心してください。設定から運用まで、私たちが伴走します。' },
    'employment': { icon: '📝', title: '就業規則を整備したい',           description: '就業規則は会社のルールブックであり、労務トラブルを防ぐ最重要文書です。法令に適合した就業規則を整備しましょう。', steps: [{title:'現状分析',desc:'現在の就業規則（ある場合）と実態を確認し、課題を洗い出します。'},{title:'法令適合チェック',desc:'最新の労働基準法、働き方改革関連法に適合しているか確認します。'},{title:'規則作成・改定',desc:'貴社の実情に合わせた、実用的な就業規則を作成・改定します。'},{title:'届出・周知',desc:'労働基準監督署への届出、従業員への周知まで完全サポートします。'}], point: '就業規則は「作って終わり」ではありません。法改正に応じて定期的な見直しが必要です。' }
};

function showSolution(key) {
    const data = solutions[key];
    const html = `
        <div class="flex items-center gap-4 mb-8">
            <div class="text-5xl md:text-6xl">${data.icon}</div>
            <h2 class="text-2xl md:text-4xl font-bold text-blue-900">${data.title}</h2>
        </div>
        <p class="text-lg text-gray-700 mb-12 leading-relaxed">${data.description}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            ${data.steps.map((step, i) => `
                <div class="flex gap-4 p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                    <div class="flex-shrink-0 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">${i + 1}</div>
                    <div>
                        <h4 class="font-bold text-blue-900 mb-2 text-lg">${step.title}</h4>
                        <p class="text-sm text-gray-600 leading-relaxed">${step.desc}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="bg-gradient-to-r from-blue-50 to-orange-50 border-l-4 border-blue-900 p-8 md:p-10 rounded-r-2xl">
            <h4 class="font-bold text-blue-900 mb-3 flex items-center gap-2 text-lg"><span>💡</span> 神植からのアドバイス</h4>
            <p class="text-gray-700 leading-relaxed">${data.point}</p>
        </div>
    `;
    document.getElementById('solution-content').innerHTML = html;
    showPage('solutions');
}


// =============================================
// ページ表示制御
// =============================================
function showPage(pageId, tabIdx) {
    if (pageId === 'price-sim') {
        setTimeout(function() {
            if (typeof simCalc === 'function') simCalc();
            if (typeof simSpotCalc === 'function') simSpotCalc();
            if (typeof updateSliderColor === 'function') updateSliderColor();
        }, 50);
    }
    if (pageId === 'salary-calc') {
        setTimeout(function() {
            const dateEl = document.getElementById('current-date');
            if (dateEl && !dateEl.textContent) {
                const d = new Date();
                dateEl.textContent = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 実施`;
            }
            if (typeof sCalc === 'function') sCalc();
        }, 50);
    }
    if (pageId === 'spot') {
        setTimeout(function() {
            const idx = (typeof tabIdx !== 'undefined' && tabIdx !== null) ? parseInt(tabIdx) : 0;
            if (typeof spotSwitchTab === 'function') spotSwitchTab(idx);
            for (let i = 0; i < 4; i++) {
                (function(fi) {
                    const form = document.getElementById('spot-form-data-' + fi);
                    if (form && !form.dataset.listenerAttached) {
                        form.addEventListener('submit', function(e) {
                            e.preventDefault();
                            spotSubmitForm(fi);
                        });
                        form.dataset.listenerAttached = 'true';
                    }
                })(i);
            }
        }, 50);
    }
    const pages = ['home','services','about','links','faq','contact','solutions','blog','checkup','subsidy-sim','salary-calc','download','dl-thankyou','price-sim','spot','article-detail'];
    pages.forEach(id => {
        const section = document.getElementById('page-' + id);
        if (section) section.classList.add('hidden');
        const navBtn = document.getElementById('nav-' + id);
        if (navBtn) navBtn.classList.remove('active-tab');
    });
    const activeSection = document.getElementById('page-' + pageId);
    if (activeSection) activeSection.classList.remove('hidden');
    const activeNav = document.getElementById('nav-' + pageId);
    if (activeNav) activeNav.classList.add('active-tab');
    const hideCTAOn = ['contact', 'solutions'];
    const ctaElement = document.getElementById('common-cta');
    if (ctaElement) {
        if (hideCTAOn.includes(pageId)) ctaElement.classList.add('hidden');
        else ctaElement.classList.remove('hidden');
    }
    document.getElementById('mobile-menu').classList.add('hidden');
    window.scrollTo(0, 0);

    if (pageId === 'blog') {
        if (typeof renderBlogGrid === 'function') {
            renderBlogGrid('all');
            document.querySelectorAll('.blog-filter-btn').forEach(btn => {
                btn.classList.toggle('active-filter', btn.dataset.cat === 'all');
            });
        }
    }
    if (pageId === 'home') {
        if (typeof renderHomeColumns === 'function') renderHomeColumns();
    }
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}


// =============================================
// ヒーロー画像フェード処理
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    var img1 = document.getElementById('hero-img-1');
    var img2 = document.getElementById('hero-img-2');
    if (!img1 || !img2) return;
    img1.style.transition = 'opacity 1.5s ease-in-out';
    img1.style.opacity    = '0.52';
    img2.style.transition = 'opacity 1.5s ease-in-out';
    img2.style.opacity    = '0';
    var current  = 1;
    var INTERVAL = 15000;
    setInterval(function() {
        if (current === 1) {
            img1.style.opacity = '0';
            img2.style.opacity = '0.52';
            current = 2;
        } else {
            img2.style.opacity = '0';
            img1.style.opacity = '0.52';
            current = 1;
        }
    }, INTERVAL);
});


// =============================================
// 給与計算ツール
// =============================================
// ※ ロジックはすべて salary-calc.js に移行済み。


// =============================================
// 労務リスク診断
// =============================================
window.checkupQuestions = [
    { q: "就業規則を作成し、労働基準監督署に届出していますか？",                            cat: "規則" },
    { q: "就業規則を従業員に周知していますか？",                                            cat: "規則" },
    { q: "36協定（時間外労働・休日労働に関する協定）を締結し、届出していますか？",          cat: "労使協定" },
    { q: "36協定は毎年更新していますか？",                                                  cat: "労使協定" },
    { q: "過半数代表者を適切な方法で選出していますか？",                                    cat: "労使協定" },
    { q: "時間外労働の上限規制（月45時間・年360時間）を遵守していますか？",                 cat: "労働時間" },
    { q: "労働時間を適切に管理（記録）していますか？",                                      cat: "労働時間" },
    { q: "残業代を正確に計算し、支払っていますか？",                                        cat: "賃金" },
    { q: "固定残業代制度を採用している場合、適切に運用していますか？",                      cat: "賃金" },
    { q: "最低賃金を遵守していますか？",                                                    cat: "賃金" },
    { q: "有給休暇を年5日取得させていますか？",                                             cat: "休暇" },
    { q: "有給休暇の管理簿を作成していますか？",                                            cat: "休暇" },
    { q: "雇用契約書（労働条件通知書）を全従業員と締結していますか？",                      cat: "契約" },
    { q: "社会保険（健康保険・厚生年金）に加入していますか？",                              cat: "保険" },
    { q: "雇用保険・労災保険に加入していますか？",                                          cat: "保険" },
    { q: "ハラスメント防止措置を講じていますか？",                                          cat: "ハラスメント" },
    { q: "育児・介護休業規程を整備していますか？",                                          cat: "両立支援" },
    { q: "定期健康診断を実施していますか？",                                                cat: "安全衛生" },
    { q: "労働者名簿を作成していますか？",                                                  cat: "帳簿" },
    { q: "賃金台帳を作成していますか？",                                                    cat: "帳簿" }
];

window.startCheckup = function() {
    const intro     = document.getElementById('checkup-intro');
    const questions = document.getElementById('checkup-questions');
    if (intro) intro.style.display = 'none';
    let html = '<form id="checkup-form" class="space-y-4">';
    window.checkupQuestions.forEach((item, index) => {
        html += `<div class="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition"><div class="flex items-start gap-3"><span class="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">${index + 1}</span><div class="flex-1"><p class="text-gray-800 font-medium mb-3">${item.q}</p><div class="flex gap-4 flex-wrap"><label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q${index}" value="yes" class="w-4 h-4" required><span class="text-sm text-green-600 font-medium">はい</span></label><label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q${index}" value="no" class="w-4 h-4"><span class="text-sm text-red-600 font-medium">いいえ</span></label><label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="q${index}" value="unknown" class="w-4 h-4"><span class="text-sm text-gray-500 font-medium">わからない</span></label></div></div></div></div>`;
    });
    html += `<div class="text-center pt-8"><button type="submit" class="bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold py-5 px-12 rounded-xl hover:from-blue-800 hover:to-blue-600 transition shadow-lg text-lg">診断結果を見る</button></div></form>`;
    if (questions) {
        questions.innerHTML = html;
        questions.style.display = 'block';
        const form = document.getElementById('checkup-form');
        if (form) form.addEventListener('submit', function(e) { e.preventDefault(); window.showCheckupResult(); });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.showCheckupResult = function() {
    const form      = document.getElementById('checkup-form');
    const questions = document.getElementById('checkup-questions');
    const result    = document.getElementById('checkup-result');
    const formData  = new FormData(form);
    let yesCount = 0, noCount = 0, unknownCount = 0;
    const issues = [];
    window.checkupQuestions.forEach((item, index) => {
        const answer = formData.get(`q${index}`);
        if (answer === 'yes') yesCount++;
        else if (answer === 'no')      { noCount++;      issues.push({ q: item.q, cat: item.cat }); }
        else if (answer === 'unknown') { unknownCount++; issues.push({ q: item.q, cat: item.cat }); }
    });
    const score = Math.round((yesCount / window.checkupQuestions.length) * 100);
    let riskLevel, riskColor, riskBg, riskMessage;
    if      (score >= 90) { riskLevel = "優良";   riskColor = "text-green-600";  riskBg = "bg-green-50";  riskMessage = "労務管理が非常に良好です。引き続き、法改正への対応を継続してください。"; }
    else if (score >= 70) { riskLevel = "良好";   riskColor = "text-blue-600";   riskBg = "bg-blue-50";   riskMessage = "基本的な労務管理はできていますが、いくつか改善の余地があります。"; }
    else if (score >= 50) { riskLevel = "要注意"; riskColor = "text-orange-600"; riskBg = "bg-orange-50"; riskMessage = "労務リスクがあります。早めの対策をおすすめします。"; }
    else                  { riskLevel = "危険";   riskColor = "text-red-600";    riskBg = "bg-red-50";    riskMessage = "重大な労務リスクがあります。至急、専門家にご相談ください。"; }

    const resultHtml = `
        <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-blue-900 mb-6">診断結果</h3>
            <div class="${riskBg} rounded-2xl p-8 mb-6">
                <p class="text-lg text-gray-600 mb-4">労務管理レベル</p>
                <div class="text-6xl font-black ${riskColor} mb-4">${score}点</div>
                <p class="text-2xl font-bold ${riskColor}">${riskLevel}</p>
            </div>
            <p class="text-gray-700 leading-relaxed">${riskMessage}</p>
        </div>
        <div class="mb-8">
            <h4 class="text-xl font-bold text-blue-900 mb-4">診断内訳</h4>
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-green-50 rounded-xl p-4 text-center"><p class="text-sm text-gray-600 mb-2">遵守できている</p><p class="text-3xl font-bold text-green-600">${yesCount}</p></div>
                <div class="bg-red-50 rounded-xl p-4 text-center"><p class="text-sm text-gray-600 mb-2">未対応</p><p class="text-3xl font-bold text-red-600">${noCount}</p></div>
                <div class="bg-gray-50 rounded-xl p-4 text-center"><p class="text-sm text-gray-600 mb-2">不明</p><p class="text-3xl font-bold text-gray-600">${unknownCount}</p></div>
            </div>
        </div>
        ${issues.length > 0 ? `<div class="mb-8"><h4 class="text-xl font-bold text-blue-900 mb-4">改善が必要な項目</h4><div class="space-y-3">${issues.map(issue => `<div class="flex items-start gap-3 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded"><svg class="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg><div class="flex-1"><span class="text-xs font-bold text-yellow-700">[${issue.cat}]</span><p class="text-sm text-gray-700">${issue.q}</p></div></div>`).join('')}</div></div>` : ''}
        <div class="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h4 class="text-2xl font-bold mb-4">専門家による無料相談を承ります</h4>
            <p class="mb-6 opacity-90">診断結果を基に、貴社に最適な改善プランをご提案いたします</p>
            <button onclick="showPage('contact')" class="bg-white text-blue-900 font-bold py-4 px-10 rounded-xl hover:bg-blue-50 transition shadow-lg">今すぐ無料相談を申し込む</button>
        </div>
        <div class="text-center mt-8"><button onclick="window.resetCheckup()" class="text-blue-600 hover:text-blue-800 font-medium underline">もう一度診断する</button></div>
    `;
    if (questions) questions.style.display = 'none';
    if (result)    { result.innerHTML = resultHtml; result.style.display = 'block'; }
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.resetCheckup = function() {
    const intro     = document.getElementById('checkup-intro');
    const questions = document.getElementById('checkup-questions');
    const result    = document.getElementById('checkup-result');
    if (questions) { questions.innerHTML = ''; questions.style.display = 'none'; }
    if (result)    { result.innerHTML = '';    result.style.display = 'none'; }
    if (intro)     intro.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


// =============================================
// 助成金診断
// =============================================
function initializeSubsidySimulator() {
    const form = document.getElementById('subsidy-diagnostic-form');
    if (form) form.addEventListener('submit', function(e) { e.preventDefault(); showSubsidyResult(); });
}

function showSubsidyResult() {
    const form     = document.getElementById('subsidy-diagnostic-form');
    const formData = new FormData(form);
    const plans    = formData.getAll('plan');
    const subsidies = [];

    if (plans.includes('regular'))
        subsidies.push({ name: 'キャリアアップ助成金（正社員化コース）', amount: '最大80万円/人', detail: '有期雇用労働者等を正規雇用労働者に転換した場合に助成', requirements: ['6ヶ月以上の有期契約労働者がいる','正社員化後6ヶ月の賃金が転換前より5%以上増額'], level: 'high' });
    if (plans.includes('wage') && plans.includes('equipment'))
        subsidies.push({ name: '業務改善助成金', amount: '最大600万円', detail: '事業場内最低賃金を引き上げ、設備投資等を行った場合に助成', requirements: ['事業場内最低賃金と地域別最低賃金の差額が50円以内','生産性向上に資する設備投資を実施'], level: 'high' });
    if (plans.includes('training'))
        subsidies.push({ name: '人材開発支援助成金', amount: '最大100万円', detail: '従業員の職業訓練を実施した場合の訓練経費や賃金を助成', requirements: ['訓練実施計画を作成し提出','10時間以上の訓練を実施'], level: 'medium' });
    if (plans.includes('worklife'))
        subsidies.push({ name: '両立支援等助成金（育児休業等支援コース）', amount: '最大72万円', detail: '育児休業の円滑な取得・職場復帰のための取組を実施した場合に助成', requirements: ['育児休業取得者がいる','育児休業復帰支援プランを作成'], level: 'medium' });
    if (plans.includes('hiring'))
        subsidies.push({ name: '特定求職者雇用開発助成金', amount: '最大240万円', detail: '高年齢者や障害者等の就職困難者を雇い入れた場合に助成', requirements: ['ハローワーク等の紹介により雇い入れ','60歳以上や障害者等を雇用'], level: 'medium' });
    if (subsidies.length === 0)
        subsidies.push({ name: '雇用調整助成金', amount: '変動', detail: '経済上の理由により事業活動の縮小を余儀なくされた場合の雇用維持を支援', requirements: ['売上高等が減少','休業を実施'], level: 'low' });

    const totalAmount = subsidies.reduce((sum, s) => {
        const match = s.amount.match(/(\d+)/);
        return sum + (match ? parseInt(match[1]) : 0);
    }, 0);

    const resultHtml = `
        <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-blue-900 mb-6">診断結果</h3>
            <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white mb-6">
                <p class="text-lg mb-4">申請可能な助成金</p>
                <div class="text-5xl font-black mb-4">${subsidies.length}件</div>
                <p class="text-xl">受給見込額 最大 <span class="font-bold">${totalAmount.toLocaleString()}万円</span></p>
            </div>
        </div>
        <div class="space-y-4 mb-8">
            ${subsidies.map(s => `<div class="border-2 ${s.level === 'high' ? 'border-orange-300 bg-orange-50' : s.level === 'medium' ? 'border-blue-300 bg-blue-50' : 'border-gray-300 bg-gray-50'} rounded-2xl p-6"><div class="flex items-start justify-between mb-3"><h4 class="text-lg font-bold text-blue-900 flex-1">${s.name}</h4><span class="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold ml-4">${s.amount}</span></div><p class="text-gray-700 mb-4">${s.detail}</p><div class="bg-white rounded-xl p-4"><p class="text-xs font-bold text-gray-600 mb-2">主な要件</p><ul class="space-y-1">${s.requirements.map(req => `<li class="text-sm text-gray-700 flex items-start gap-2"><span class="text-orange-600 mt-0.5">✓</span><span>${req}</span></li>`).join('')}</ul></div></div>`).join('')}
        </div>
        <div class="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white text-center mb-6">
            <h4 class="text-2xl font-bold mb-4">助成金申請をサポートいたします</h4>
            <p class="mb-6 opacity-90">成功報酬型なので、受給できなければ費用は発生しません</p>
            <button onclick="showPage('contact')" class="bg-white text-blue-900 font-bold py-4 px-10 rounded-xl hover:bg-blue-50 transition shadow-lg">助成金申請サポートを依頼</button>
        </div>
        <div class="text-center"><button onclick="location.reload()" class="text-blue-600 hover:text-blue-800 font-medium">もう一度診断する</button></div>
    `;
    document.getElementById('subsidy-form').classList.add('hidden');
    document.getElementById('subsidy-result').innerHTML = resultHtml;
    document.getElementById('subsidy-result').classList.remove('hidden');
}


// =============================================
// 初期化（DOMContentLoaded）
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    if (typeof renderHomeColumns === 'function') renderHomeColumns();
    if (typeof renderBlogGrid === 'function') renderBlogGrid('all');
    if (typeof initializeSubsidySimulator === 'function') initializeSubsidySimulator();
    if (typeof sCalc === 'function' && document.getElementById('s-salary')) sCalc();
    showPage('home');
});


// =============================================
// FAQの開閉制御
// =============================================
function toggleFaq(id) {
    const ans  = document.getElementById(`faq-ans-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);
    if (ans && icon) {
        const isHidden = ans.classList.contains('hidden');
        if (isHidden) {
            ans.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            ans.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    }
}


// =============================================
// 労務コラム機能スクリプト（分離）
// コラムデータ・描画関数はすべて columns-data.js に移動済み。
// 読み込み順: columns-data.js → script.js
// =============================================


// =============================================
// スポット手続き依頼フォーム
// =============================================
function spotSwitchTab(idx) {
    for (let i = 0; i < 4; i++) {
        const tab  = document.getElementById('spot-tab-' + i);
        const form = document.getElementById('spot-form-' + i);
        if (!tab || !form) continue;
        if (i === idx) {
            tab.classList.add('active');
            tab.style.borderBottomColor = '#1e40af';
            tab.style.color             = '#1e40af';
            tab.style.backgroundColor   = '#eff6ff';
            form.classList.remove('hidden');
        } else {
            tab.classList.remove('active');
            tab.style.borderBottomColor = 'transparent';
            tab.style.color             = '#6b7280';
            tab.style.backgroundColor   = '';
            form.classList.add('hidden');
        }
    }
    const success = document.getElementById('spot-success');
    if (success) success.classList.add('hidden');
}

function spotReset() {
    for (let i = 0; i < 4; i++) {
        const form = document.getElementById('spot-form-data-' + i);
        if (form) form.reset();
    }
    const success = document.getElementById('spot-success');
    if (success) success.classList.add('hidden');
    spotSwitchTab(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateRikokuhyoFee() {
    const val = document.querySelector('input[name="rikokuhyo"]:checked')?.value;
    const el  = document.getElementById('rikokuhyo-fee');
    if (el) el.textContent = val === 'ari' ? '10,000円〜' : '5,000円〜';
}

function spotSubmitForm(formIdx) {
    const form = document.getElementById('spot-form-data-' + formIdx);
    if (!form) return;
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const data      = new FormData(form);
    const formNames = [
        '雇用保険被保険者資格取得届',
        '雇用保険被保険者資格喪失届・離職票',
        '健康保険・厚生年金保険被保険者資格取得届',
        '健康保険・厚生年金保険被保険者資格喪失届'
    ];
    let subject = encodeURIComponent('【スポット手続き依頼】' + formNames[formIdx]);
    let body    = '【依頼手続き種別】\n' + formNames[formIdx] + '\n\n【入力内容】\n';
    for (let [key, value] of data.entries()) {
        if (value && value.toString().trim()) body += key + '：' + value + '\n';
    }
    body += '\n\n※このメールはカミウエ社会保険労務士事務所のWebサイトより自動生成されました。';

    window.location.href = 'mailto:sr.kamiue@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(body);

    setTimeout(function() {
        for (let i = 0; i < 4; i++) {
            const f = document.getElementById('spot-form-' + i);
            if (f) f.classList.add('hidden');
        }
        const success = document.getElementById('spot-success');
        if (success) success.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
}

// 資料ダウンロードフォームの送信処理
function dlSubmitForm() {
    const form = document.getElementById('dl-form-data');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // 入力情報の取得（必要に応じて送信処理を追加）
    const formData = new FormData(form);
    console.log("ダウンロードフォーム送信:", Object.fromEntries(formData));

    // 現在選択されている資料のインデックスを使用してダウンロードを実行
    downloadPDF(_dlCurrentIndex);

    // 完了メッセージを表示してモーダルを閉じる
    alert("ダウンロードを開始します。");
    dlCloseModal();
}