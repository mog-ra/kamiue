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
    if (!item) return;
    
    const link = document.createElement('a');
    link.href = item.url;
    link.download = item.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        // iOS Safari対応：position:fixedでbody固定し、スクロール位置を保持
        const scrollY = window.scrollY;
        document.body.style.top = '-' + scrollY + 'px';
        document.body.classList.add('modal-open');
        document.body.dataset.scrollY = scrollY;
    }
}

// モーダルを閉じる
function dlCloseModal() {
    const overlay = document.getElementById('dl-modal-overlay');
    if (overlay) overlay.style.display = 'none';
    // iOS Safari対応：スクロール位置を復元してからbody固定を解除
    const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
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
            var dateEl = document.getElementById('current-date');
            if (dateEl) {
                var d = new Date();
                dateEl.textContent = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日 現在';
            }
            if (typeof sCalc === 'function' && document.getElementById('s-salary')) sCalc();
        }, 50);
    }
    if (pageId === 'subsidy-sim') {
        setTimeout(function() {
            if (typeof initializeSubsidySimulator === 'function') initializeSubsidySimulator();
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
    const pages = ['home','services','about','links','faq','contact','solutions','blog','checkup','subsidy-sim','salary-calc','download','dl-thankyou','price-sim','spot','article-detail','youtube'];
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
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
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
    if (pageId === 'youtube') {
        if (typeof loadYouTubePage === 'function') loadYouTubePage();
    }
}

function toggleMobileMenu() {
    var mm = document.getElementById('mobile-menu');
    if (mm) mm.classList.toggle('hidden');
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

// =============================================
// 助成金診断
// =============================================


// =============================================
// 初期化（DOMContentLoaded）
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    if (typeof renderHomeColumns === 'function') renderHomeColumns();
    if (typeof renderBlogGrid === 'function') renderBlogGrid('all');
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

    // ---- ボタンをローディング状態に ----
    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> 送信中...';
    }

    // ---- メール本文組み立て ----
    let bodyText = '【依頼手続き種別】\n' + formNames[formIdx] + '\n\n【入力内容】\n';
    for (let [key, value] of data.entries()) {
        if (value && value.toString().trim()) bodyText += key + '：' + value + '\n';
    }
    bodyText += '\n\n※このメッセージはカミウエ社会保険労務士事務所のWebサイトより自動送信されました。';

    // ---- Formspree fetch送信 ----
    // ▼ Formspree (https://formspree.io) で無料アカウントを作成後、
    //   YOUR_FORMSPREE_ID を実際のフォームIDに置き換えてください。
    //   例: https://formspree.io/f/xpzgkdlr
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
    const USE_FORMSPREE = FORMSPREE_ENDPOINT.indexOf('YOUR_FORMSPREE_ID') === -1;

    const sendData = {
        _subject: '【スポット手続き依頼】' + formNames[formIdx],
        手続き種別: formNames[formIdx],
        内容: bodyText,
    };
    // フォームの各フィールドも追加
    for (let [key, value] of data.entries()) {
        if (value && value.toString().trim()) sendData[key] = value.toString();
    }

    if (USE_FORMSPREE) {
        // --- Formspree が設定済みの場合：fetch送信 ---
        fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(sendData),
        })
        .then(function(res) {
            if (res.ok) {
                spotShowSuccess();
            } else {
                return res.json().then(function(d) { throw new Error(d.error || '送信エラー'); });
            }
        })
        .catch(function(err) {
            console.error('送信エラー:', err);
            // フォールバック：mailtoで開く
            spotFallbackMailto(formNames[formIdx], bodyText);
        })
        .finally(function() {
            if (btn) { btn.disabled = false; btn.innerHTML = originalHTML; }
        });
    } else {
        // --- Formspree 未設定の場合：従来の mailto フォールバック ---
        if (btn) { btn.disabled = false; btn.innerHTML = originalHTML; }
        spotFallbackMailto(formNames[formIdx], bodyText);
    }
}

function spotFallbackMailto(formName, bodyText) {
    var subject = encodeURIComponent('【スポット手続き依頼】' + formName);
    window.location.href = 'mailto:sr.kamiue@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(bodyText);
    setTimeout(spotShowSuccess, 800);
}

function spotShowSuccess() {
    for (let i = 0; i < 4; i++) {
        const f = document.getElementById('spot-form-' + i);
        if (f) f.classList.add('hidden');
    }
    const success = document.getElementById('spot-success');
    if (success) success.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
