/**
 * カミウエ社会保険労務士事務所 メインアプリケーション
 */
const App = {
    // 内部状態
    state: {
        dlCurrentIndex: 0,
        validPages: [
            'home','services','about','links','faq','contact','solutions','blog',
            'checkup','subsidy-sim','salary-calc','download','dl-thankyou',
            'price-sim','article-detail','youtube','campaign'
        ],
        solutions: {
            'subsidy':    { icon: '💰', title: '助成金を活用したい',           description: '返済不要の助成金は、企業の成長を加速させる貴重な財源です。雇用維持、設備投資、教育訓練など、最新の2025年度改正に対応した最適な制度をご提案。煩雑な申請プロセスをプロに任せることで、受給可能性を最大化します。', image: './subsidy.webp', steps: [{title:'精密無料診断',desc:'ヒアリングに基づき、キャリアアップ助成金や業務改善助成金など、受給可能な制度を網羅的にリストアップします。'},{title:'戦略的計画策定',desc:'「いつ、誰を、どう雇用するか」など、受給要件を満たすための社内規定の整備や事業計画を専門家が立案します。'},{title:'完全代行申請',desc:'労働局やハローワークへの膨大な提出書類作成と窓口対応を全て代行。不備による不支給リスクを徹底排除します。'},{title:'継続的フォロー',desc:'受給後の実施報告や、年度ごとに変わる最新の助成金情報の提供を行い、中長期的な資金活用をサポートします。'}], point: '弊所は完全成功報酬型を採用。着手金不要で、受給が確定するまで費用は一切発生しません。攻めの経営をバックアップします。' },
            'payroll':    { icon: '📊', title: '給与計算を外注したい',           description: '給与計算は「間違えて当然」ではなく「間違えてはいけない」業務です。法改正による社会保険料率の変更や所得税計算、年末調整までを完全自動化。属人化を排除し、コスト削減とコンプライアンス強化を同時に実現します。', image: './payroll.webp', steps: [{title:'業務フロー構築',desc:'現行の計算方法を精査し、クラウドツール等を活用したミスが起きない最適な運用フローをゼロから設計します。'},{title:'精緻な計算実行',desc:'定昇・賞与・残業代、さらに複雑な社会保険料の随時改定（月変）まで、専門知識に基づき正確に算出します。'},{title:'WEB明細・データ連携',desc:'全従業員への WEB明細発行に加え、銀行振込データの作成、会計ソフトへの仕訳連携まで対応し、事務作業を極小化します。'},{title:'年末調整・算定業務',desc:'年に一度の重要業務である年末調整や社会保険の算定基礎届もパッケージ。一年を通じて一貫した管理を行います。'}], point: '経営リソースを給与計算という「管理業務」から、売上を作る「本業」へ。弊所が貴社の給与計算部として機能します。' },
            'trouble':    { icon: '⚖️', title: '従業員とのトラブルを防ぎたい', description: '解雇、残業代未払い、ハラスメントなど、ひとたびトラブルが発生すれば多大な賠償金や企業イメージの低下を招きます。弊所は「起きてから解決する」のではなく「起きない仕組みを作る」予防労務を徹底しています。', image: './trouble.webp', steps: [{title:'労務リスク監査',desc:'現状の雇用契約、勤怠管理、賃金体系をプロの視点で総点検し、将来的に訴訟や労働局調査の火種となる箇所を特定します。'},{title:'防御力の高い規程整備',desc:'判例に基づき、会社を守るための条文を盛り込んだ就業規則や労使協定（36協定等）をオーダーメイドで整備します。'},{title:'相談窓口の外注化',desc:'社内では言いづらいハラスメント等の相談窓口を弊所が代行。早期発見により、問題の深刻化を未然に防ぎます。'},{title:'管理職マネジメント教育',desc:'トラブルの多くは現場の不適切な言動から。最新の法知識とマネジメント手法を伝える研修を通じ、組織の質を高めます。'}], point: '労働基準監督署の臨検（調査）対策も万全。調査官の視点を熟知した社労士が、貴社の盾となり伴走します。' },
            'startup':    { icon: '🏢', title: '会社を設立したばかり',           description: '創業期は「売上」に集中すべき時期。しかし、最初の1人の雇用で発生する法的義務は膨大です。社会保険の新規適用から、助成金の獲得、最小限のコストで構築する労務基盤まで、スタートアップ特有の課題を解決します。', image: './startup.webp', steps: [{title:'スピード新規適用',desc:'健康保険・厚生年金・雇用保険の立ち上げ手続きを迅速に代行。従業員が安心して働ける環境を即座に構築します。'},{title:'創業助成金セット',desc:'創業時にしか申請できない助成金や、新規雇用で使える支援金を提案。キャッシュフローの改善に寄与します。'},{title:'ミニマム就業規則',desc:'まずは「これだけは必要」というコアな規則と雇用契約書を整備。成長に合わせて拡張できる柔軟な基盤を作ります。'},{title:'給与・評価の型作り',desc:'今後の採用競争力を左右する初任給の設定や、シンプルな評価基準の設計など、成長に向けた人事をサポートします。'}], point: '宮城県内のスタートアップ支援実績多数。融資や税務についても、提携する他士業（税理士・司法書士等）と連携可能です。' },
            'it':         { icon: '💻', title: 'クラウド勤怠・労務DXを導入したい', description: 'Excelや紙の管理はもう限界。マネーフォワードやジョブカン、KING OF TIMEなどの最新ITツールを導入し、バックオフィスをデジタル化。リアルタイムでの労働時間把握により、生産性向上と残業代適正化を推進します。', image: './it.webp', steps: [{title:'IT適正ツール診断',desc:'企業規模、勤務体系（シフト制・フレックス等）、ご予算に合わせて、数あるクラウドサービスから最適なものを選定します。'},{title:'社労士マスター設定',desc:'「システムを入れたが設定が間違っていた」という失敗を防ぐため、就業規則に基づいた法的根拠ある初期設定を行います。'},{title:'操作定着支援',desc:'管理者はもちろん、従業員がスマホでスムーズに打刻・申請できるよう、説明会やマニュアル提供で現場への定着を支援します。'},{title:'データ活用コンサル',desc:'集まったデータを分析し、過重労働の予兆検知や、人件費の最適化など、データに基づく経営判断をサポートします。'}], point: 'ITに強い社労士事務所として、単なるツール導入で終わらせません。業務が「本当に楽になる」まで責任を持って支援します。' },
            'employment': { icon: '📝', title: '就業規則を整備したい',           description: '就業規則は「形だけあればいい」ものではありません。2025年4月の育児介護休業法改正など、頻繁な法改正への対応は必須。貴社の独自の風土を守りつつ、法的リスクを最小化する最強の「会社の憲法」をオーダーメイドで作成します。', image: './employment.webp', steps: [{title:'現行規則の無料診断',desc:'お手元の就業規則が最新の法律に適合しているか、逆に会社にとって不利な規定がないか、スコアリング形式で診断します。'},{title:'経営理念の反映',desc:'単なる法律のコピペではなく、会社が従業員に期待することや、独自の表彰制度などを盛り込み、組織を強くする内容にします。'},{title:'付属規程の充実',desc:'テレワーク規程、ハラスメント防止規定、慶弔見舞金規定など、実務で必要となる各種細則まで網羅的に整備します。'},{title:'法改正ウォッチング',desc:'一度作って終わりにせず、法改正のたびに最新状態をキープするための継続的なアップデートをご提案します。'}], point: '就業規則は「作って終わり」ではありません。法改正に応じて定期的な見直しが必要です。' }
        }
    },

    // =============================================
    // ページ表示制御・ルーティング
    // =============================================
    showPage(pageId, tabIdx, skipHashUpdate = false) {
        // 外部ファイル（新しい手続き依頼フォーム）への遷移対応
        if (pageId === 'tetsuzuki_v2' || pageId === 'spot') {
            window.location.href = 'tetsuzuki_v2.html' + (tabIdx ? '?tab=' + tabIdx : '');
            return;
        }

        if (!this.state.validPages.includes(pageId)) pageId = 'home';

        if (!skipHashUpdate && pageId) {
            const newHash = '#' + pageId;
            if (window.location.hash !== newHash) window.location.hash = newHash;
        }

        // ページ固有の初期化
        this.initPageContent(pageId, tabIdx);

        // セクションの表示・非表示切り替え
        this.state.validPages.forEach(id => {
            const section = document.getElementById('page-' + id);
            if (section) section.classList.add('hidden');
            const navBtn = document.getElementById('nav-' + id);
            if (navBtn) navBtn.classList.remove('active-tab');
        });

        const activeSection = document.getElementById('page-' + pageId);
        if (activeSection) activeSection.classList.remove('hidden');
        const activeNav = document.getElementById('nav-' + pageId);
        if (activeNav) activeNav.classList.add('active-tab');

        // 共通CTAの制御
        const hideCTAOn = ['contact', 'solutions'];
        const ctaElement = document.getElementById('common-cta');
        if (ctaElement) {
            ctaElement.classList.toggle('hidden', hideCTAOn.includes(pageId));
        }

        this.closeMobileMenu();
        window.scrollTo(0, 0);
    },

    initPageContent(pageId, tabIdx) {
        if (pageId === 'price-sim' && typeof simCalc === 'function') {
            setTimeout(() => { simCalc(); simSpotCalc(); updateSliderColor(); }, 50);
        }
        if (pageId === 'home' && typeof renderHomeColumns === 'function') {
            setTimeout(() => {
                renderHomeColumns();
                if (typeof loadHomeYT === 'function') {
                    loadHomeYT();
                }
            }, 50);
        }
        if (pageId === 'salary-calc' && typeof sCalc === 'function') {
            setTimeout(() => {
                const dateEl = document.getElementById('current-date');
                if (dateEl) dateEl.textContent = new Date().toLocaleDateString('ja-JP') + ' 現在';
                sCalc();
            }, 50);
        }
        if (pageId === 'blog' && typeof renderBlogGrid === 'function') {
            renderBlogGrid('all');
            setTimeout(() => { if (typeof initSearch === 'function') initSearch(); }, 0);
        }
        if (pageId === 'youtube' && typeof loadYouTubePage === 'function') {
            loadYouTubePage();
        }
        if (pageId === 'subsidy-sim' && typeof initSubsidyDiagnosis === 'function') {
            setTimeout(() => initSubsidyDiagnosis(), 50);
        }
    },

    triggerSubsidyDiagnosis() {
        const fn = window.runSubsidyDiagnosis;
        if (typeof fn === 'function') {
            fn();
        } else {
            alert('診断プログラムを準備中です。ページを再読み込みするか、しばらく経ってから再度お試しください。');
            console.error('runSubsidyDiagnosis function not found in global scope or App object.');
        }
    },

    // =============================================
    // UI 制御
    // =============================================
    /**
     * トースト通知を表示する
     * @param {string} message - 表示するメッセージ
     * @param {'success'|'error'|'info'|'warning'} type - 通知の種類
     */
    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        const colorClasses = {
            success: 'bg-green-600',
            error: 'bg-red-600',
            info: 'bg-blue-600',
            warning: 'bg-orange-500'
        };

        toast.className = `flex items-center gap-3 px-6 py-4 rounded-xl text-white shadow-2xl transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-auto ${colorClasses[type] || colorClasses.success}`;
        
        const icons = {
            success: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>',
            error: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>',
            info: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
        };

        toast.innerHTML = `${icons[type] || ''} <span class="font-bold text-sm">${message}</span>`;
        container.appendChild(toast);

        // アニメーション開始
        setTimeout(() => toast.classList.remove('translate-y-10', 'opacity-0'), 10);

        // 4秒後に自動消去
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-x-10');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    },

    toggleMobileMenu() {
        const mm = document.getElementById('mobile-menu');
        if (mm) mm.classList.toggle('hidden');
    },
    closeMobileMenu() {
        const mm = document.getElementById('mobile-menu');
        if (mm) mm.classList.add('hidden');
    },
    toggleFaq(id) {
        const ans = document.getElementById(`faq-ans-${id}`);
        const icon = document.getElementById(`faq-icon-${id}`);
        if (ans && icon) {
            const isHidden = ans.classList.toggle('hidden');
            icon.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    },

    // =============================================
    // ソリューション・資料ダウンロード
    // =============================================
    showSolution(key) {
        const data = this.state.solutions[key];
        if (!data) return;

        const tmpl = document.getElementById('tmpl-solution');
        const stepTmpl = document.getElementById('tmpl-solution-step');
        if (!tmpl || !stepTmpl) return;

        // メインテンプレートのクローン
        const clone = tmpl.content.cloneNode(true);

        clone.querySelector('.js-icon').textContent = data.icon;
        clone.querySelector('.js-title').textContent = data.title;
        clone.querySelector('.js-description').textContent = data.description;
        clone.querySelector('.js-point').textContent = data.point;
        
        const imgEl = clone.querySelector('.js-image');
        if (imgEl && data.image) {
            // 画像が読み込めなかった場合、枠だけが残らないように透明度を戻すか代替処理をする
            imgEl.onerror = function() {
                this.classList.remove('opacity-0');
                this.src = 'https://placehold.jp/24/1e3a8a/ffffff/800x350.png?text=' + encodeURIComponent(data.title);
            };
            imgEl.src = data.image;
            imgEl.alt = data.title;
        }

        // ステップ（グリッドアイテム）の生成
        const stepsContainer = clone.querySelector('.js-steps-container');
        data.steps.forEach((step, i) => {
            const sClone = stepTmpl.content.cloneNode(true);
            sClone.querySelector('.js-step-number').textContent = i + 1;
            sClone.querySelector('.js-step-title').textContent = step.title;
            sClone.querySelector('.js-step-desc').textContent = step.desc;
            stepsContainer.appendChild(sClone);
        });

        // 描画エリアの更新
        const container = document.getElementById('solution-content');
        container.innerHTML = '';
        container.appendChild(clone);

        this.showPage('solutions');
    },

    dlOpenModal(index) {
        this.state.dlCurrentIndex = index;
        const item = SITE_CONFIG.DOCUMENTS[index];
        if (!item) return;

        document.getElementById('dl-modal-emoji').textContent = item.emoji;
        document.getElementById('dl-modal-title').textContent = item.title;
        
        // フォームリセット
        ['dl-name', 'dl-email', 'dl-company'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
        document.getElementById('dl-form-error').classList.add('hidden');
        document.getElementById('dl-form-area').classList.remove('hidden');
        document.getElementById('dl-success-area').classList.add('hidden');

        const overlay = document.getElementById('dl-modal-overlay');
        overlay.style.display = 'flex';
        document.body.classList.add('modal-open');
    },

    dlCloseModal() {
        document.getElementById('dl-modal-overlay').style.display = 'none';
        document.body.classList.remove('modal-open');
    },

    dlSubmit() {
        const name = document.getElementById('dl-name')?.value.trim();
        const email = document.getElementById('dl-email')?.value.trim();
        if (!name || !email) {
            document.getElementById('dl-form-error').classList.remove('hidden');
            return;
        }

        const item = SITE_CONFIG.DOCUMENTS[this.state.dlCurrentIndex];
        if (item) {
            const link = document.createElement('a');
            link.href = item.url;
            link.download = item.filename;
            link.click();
            this.showToast(`${item.title}をダウンロードしました`, 'success');
        }

        document.getElementById('dl-form-area').classList.add('hidden');
        document.getElementById('dl-success-area').classList.remove('hidden');
    }
};

// =============================================
// グローバルイベントリスナー
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.location.hash.replace('#', '') || 'home';
    App.showPage(initialPage);
});

window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.replace('#', '') || 'home';
    App.showPage(pageId, null, true);
});
