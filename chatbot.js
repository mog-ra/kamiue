// =============================================
// チャットボット ロジック
// =============================================
(function() {
    let chatIsOpen = false;
    let typingTimer = null;

    const FLOWS = {
        welcome: {
            msg: "こんにちは！カミウエ社会保険労務士事務所のAIアシスタントです😊\n\nどのようなことでお困りですか？下記からお選びください👇",
            options: [
                { label: "💰 助成金・補助金について",           next: "subsidy"  },
                { label: "💼 給与計算を外注したい",             next: "payroll"  },
                { label: "⚖️ 労務トラブルの相談",               next: "trouble"  },
                { label: "🚀 創業・会社設立サポート",           next: "startup"  },
                { label: "💻 クラウド勤怠・労務DX",             next: "it"       },
                { label: "❓ その他のご相談",                   next: "other"    },
            ]
        },
        subsidy: {
            msg: "助成金・補助金のご相談ですね！\n\n現在、以下の助成金が特に注目されています：\n\n✅ **キャリアアップ助成金**（正社員化コース）\n✅ **業務改善助成金**（賃上げ支援）\n✅ **両立支援等助成金**（育児・介護対応）\n\nお客様の状況に合った助成金を無料で診断します！",
            options: [
                { label: "📋 助成金の詳細を教えてほしい",   next: "subsidy_detail" },
                { label: "🔍 自社が使える助成金を診断したい", next: "subsidy_diag" },
                { label: "📅 無料相談を予約したい",           next: "cta_final"    },
            ]
        },
        subsidy_detail: {
            msg: "助成金は要件を満たせば**返済不要**でもらえる公的資金です。\n\n当事務所では申請から受給まで完全サポート。\n成功報酬型なので初期費用ゼロで始められます。\n\n昨年度の実績：支給総額 約2,800万円（顧問先合計）",
            cta: true
        },
        subsidy_diag: {
            msg: "助成金の簡易診断を行います。\n\n以下をお聞かせください：",
            options: [
                { label: "👥 従業員を正社員にしたい（パート→正社員）", next: "subsidy_career" },
                { label: "📈 賃金を上げたい・最低賃金対応",             next: "subsidy_wage"   },
                { label: "👶 育児・介護で休む従業員への対応",           next: "subsidy_care"   },
                { label: "🤝 障害者・高齢者の雇用を考えている",         next: "subsidy_hire"   },
            ]
        },
        subsidy_career: {
            msg: "**キャリアアップ助成金（正社員化コース）**が適用できる可能性があります。\n\n支給額：1人あたり最大**80万円**（中小企業）\n\n有期雇用→正規雇用転換が条件です。\n詳細は無料相談でご確認いただけます。",
            cta: true
        },
        subsidy_wage: {
            msg: "**業務改善助成金**が適用できる可能性があります。\n\n最低賃金引上げ＋設備投資で最大**600万円**支給！\n\n生産性向上につながる設備・システム導入が対象です。",
            cta: true
        },
        subsidy_care: {
            msg: "**両立支援等助成金**が適用できる可能性があります。\n\n育児休業・介護休業制度の整備で最大**185万円**支給！\n\n就業規則の整備も合わせてサポートします。",
            cta: true
        },
        subsidy_hire: {
            msg: "**特定求職者雇用開発助成金**や**障害者雇用納付金制度**の活用が考えられます。\n\n支給額は最大**240万円**（重度障害者等）。\n\n詳しい要件は無料相談でご確認ください。",
            cta: true
        },
        payroll: {
            msg: "給与計算の外注・アウトソーシングをお考えですね！\n\n毎月の給与計算、社会保険の手続き、年末調整…これらをまるごとお任せいただけます。\n\n**顧問契約（月25,000円〜）**に含まれる給与計算サービス：",
            options: [
                { label: "📊 給与計算サービスの詳細",     next: "payroll_detail" },
                { label: "💰 料金・プランを確認したい",   next: "payroll_price"  },
                { label: "📅 無料相談を予約したい",       next: "cta_final"      },
            ]
        },
        payroll_detail: {
            msg: "給与計算サービスでは以下をすべて対応します：\n\n✅ 毎月の給与・賞与計算\n✅ 社会保険・雇用保険の手続き\n✅ 住民税の特別徴収対応\n✅ 年末調整・法定調書作成\n✅ 給与明細の電子配信\n\nクラウドシステムを活用し、正確・迅速に対応します。",
            cta: true
        },
        payroll_price: {
            msg: "給与計算の料金目安：\n\n👥 〜5名：月額 **15,000円〜**\n👥 6〜10名：月額 **20,000円〜**\n👥 11〜20名：月額 **28,000円〜**\n\n※顧問契約の場合、労務相談・各種手続きも含まれます。\n詳細はお気軽にご相談ください。",
            cta: true
        },
        trouble: {
            msg: "労務トラブルのご相談ですね。\n\nどのような状況でしょうか？",
            options: [
                { label: "😡 残業代・未払い賃金のトラブル",         next: "trouble_wage"      },
                { label: "👋 解雇・退職勧奨に関するトラブル",       next: "trouble_dismiss"   },
                { label: "😰 ハラスメント問題",                     next: "trouble_harass"    },
                { label: "📋 就業規則を見直したい",                 next: "trouble_rules"     },
            ]
        },
        trouble_wage: {
            msg: "未払い残業代・賃金トラブルは早急な対応が重要です。\n\n時効は**2年〜3年**で、放置すると遡及請求リスクが高まります。\n\n労働基準監督署の調査が入る前に、専門家に相談することをお勧めします。\n\n初回60分の無料相談で状況を確認します。",
            cta: true
        },
        trouble_dismiss: {
            msg: "解雇・退職勧奨は手続きを誤ると**不当解雇**として訴訟リスクがあります。\n\n✅ 解雇の4要件の確認\n✅ 解雇予告・解雇予告手当の計算\n✅ 退職合意書の作成\n\n弁護士と連携したサポートも可能です。今すぐご相談ください。",
            cta: true
        },
        trouble_harass: {
            msg: "ハラスメント問題は2022年より**中小企業も義務化**されています。\n\n✅ ハラスメント防止規程の整備\n✅ 相談窓口の設置支援\n✅ 管理職向け研修の実施\n✅ 問題発生時の対応フロー作成\n\n義務違反は社会的信用の損失にも繋がります。早めのご対応を！",
            cta: true
        },
        trouble_rules: {
            msg: "就業規則は10人以上の事業場では**作成・届出が義務**です。\n\n古い就業規則は法改正に対応できておらず、トラブル時に会社が守れないことも。\n\n**スポット作成：80,000円〜**\n\n現在の規則の無料診断も行っています！",
            options: [
                { label: "📋 就業規則の無料診断を受けたい",   next: "cta_final"       },
                { label: "💰 就業規則作成の料金詳細",         next: "rules_price"     },
            ]
        },
        rules_price: {
            msg: "就業規則の作成・見直し料金：\n\n📋 新規作成：**80,000円〜**\n🔄 改訂・見直し：**50,000円〜**\n📑 付属規程（育児・介護等）：**30,000円〜/本**\n\n顧問契約のお客様は割引あり。\n法改正対応も含めて年1回の見直しをお勧めします。",
            cta: true
        },
        startup: {
            msg: "創業・会社設立サポートですね！\n\n創業期の労務手続きは複雑です。当事務所の**創業まるごとサポートパック（180,000円〜）**では：\n\n✅ 社会保険・労働保険の新規適用\n✅ 就業規則・雇用契約書の作成\n✅ 給与体系の設計\n✅ 創業時に使える助成金診断",
            options: [
                { label: "📋 サポートパックの詳細を見たい", next: "startup_detail" },
                { label: "💰 使える助成金を診断したい",    next: "subsidy_diag"   },
                { label: "📅 無料相談を予約したい",         next: "cta_final"      },
            ]
        },
        startup_detail: {
            msg: "創業・成長期まるごとサポートパックは、会社設立後1年目の企業様向けの特別プランです。\n\n初期費用込み・6ヶ月契約（180,000円〜）で、労務管理の土台を完全整備します。\n\n6ヶ月後は通常の顧問契約（月25,000円〜）に移行可能です。",
            cta: true
        },
        it: {
            msg: "クラウド勤怠・労務DXのご支援ですね！\n\nタイムカード集計に毎月何時間もかかっていませんか？\n\n**顧問契約特典：出退勤アプリを完全無料でご提供！**\n\n当事務所は以下のツール導入が得意です：",
            options: [
                { label: "📱 ジョブカン勤怠管理",              next: "it_jobcan"   },
                { label: "💻 マネーフォワード クラウド勤怠",   next: "it_mf"       },
                { label: "⏱️ KING OF TIME",                    next: "it_king"     },
                { label: "🔍 どのツールが良いか相談したい",    next: "cta_final"   },
            ]
        },
        it_jobcan: {
            msg: "ジョブカン勤怠管理は**月額200円/人〜**、無料プラン（10名まで）もあり中小企業に人気です。\n\nシフト管理が特に強く、飲食・小売・サービス業に最適。\n初期設定から従業員レクチャーまで丁寧にサポートします。",
            cta: true
        },
        it_mf: {
            msg: "マネーフォワード クラウド勤怠は給与計算・会計との連携が最強のツールです。\n\nITベンチャーやバックオフィス効率化を重視する企業様に特におすすめです。\n\n当事務所では**マネーフォワード給与計算との連携設定**も対応しています。",
            cta: true
        },
        it_king: {
            msg: "KING OF TIMEは**国内導入No.1**の実績を持つ、信頼性の高い勤怠管理ツールです。\n\n生体認証・ICカード打刻など多様な打刻方法に対応。\n製造業・建設業など現場系の企業様に特に適しています。",
            cta: true
        },
        other: {
            msg: "その他のご相談ですね。当事務所では以下のサービスを提供しています：\n\n📋 顧問契約（月25,000円〜）\n🚀 フルサポート契約（月37,000円〜）\n💼 スポット対応（就業規則作成等）\n📋 入退社手続きスポット依頼",
            options: [
                { label: "💼 サービス・料金を詳しく見る",   next: "services_page" },
                { label: "📋 入退社手続きを今すぐ依頼",     next: "spot_page"     },
                { label: "❓ よくある質問を見る",            next: "faq_page"      },
                { label: "📅 無料相談を予約する",            next: "cta_final"     },
            ]
        },
        services_page: { msg: "サービス・料金ページへ移動します。",    redirect: "services" },
        spot_page:     { msg: "スポット手続き依頼ページへ移動します。", redirect: "spot"     },
        faq_page:      { msg: "よくある質問ページへ移動します。",       redirect: "faq"      },
        cta_final: {
            msg: "初回60分の無料相談では、貴社の状況をじっくりヒアリングし、最適な解決策をご提案します。\n\nお気軽にどうぞ！",
            cta: true, final: true
        }
    };

    window.chatOpen = function() {
        chatIsOpen = !chatIsOpen;
        const win        = document.getElementById('chat-window');
        const iconBubble = document.getElementById('chat-icon-bubble');
        const iconClose  = document.getElementById('chat-icon-close');
        const badge      = document.getElementById('chat-unread-badge');

        if (chatIsOpen) {
            win.classList.remove('chat-window-hidden');
            win.classList.add('chat-window-visible');
            iconBubble.style.display = 'none';
            iconClose.style.display  = 'block';
            badge.style.display = 'none';
            if (document.getElementById('chat-messages').childElementCount === 0) {
                setTimeout(() => startFlow('welcome'), 200);
            }
        } else {
            chatClose();
        }
    };

    window.chatClose = function() {
        chatIsOpen = false;
        const win        = document.getElementById('chat-window');
        const iconBubble = document.getElementById('chat-icon-bubble');
        const iconClose  = document.getElementById('chat-icon-close');
        win.classList.remove('chat-window-visible');
        win.classList.add('chat-window-hidden');
        iconBubble.style.display = 'block';
        iconClose.style.display  = 'none';
    };

    // 3秒後に未読バッジを表示
    setTimeout(() => {
        if (!chatIsOpen) {
            document.getElementById('chat-unread-badge').style.display = 'flex';
        }
    }, 3000);

    function addMsg(type, content) {
        const area = document.getElementById('chat-messages');
        const wrap = document.createElement('div');
        wrap.className = 'chat-msg chat-msg-' + type;
        if (type === 'bot') {
            wrap.innerHTML = `
                <div class="chat-msg-avatar">
                    <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <div class="chat-bubble chat-bubble-bot">${content.replace(/\n/g,'<br>').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</div>
            `;
        } else {
            wrap.innerHTML = `<div class="chat-bubble chat-bubble-user">${content}</div>`;
        }
        area.appendChild(wrap);
        area.scrollTop = area.scrollHeight;
    }

    function addOptions(options) {
        const area = document.getElementById('chat-messages');
        const wrap = document.createElement('div');
        wrap.className = 'chat-options';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chat-opt-btn';
            btn.innerHTML = opt.label;
            btn.onclick = function() {
                wrap.querySelectorAll('.chat-opt-btn').forEach(b => b.disabled = true);
                btn.style.background   = '#eff6ff';
                btn.style.borderColor  = '#3b82f6';
                addMsg('user', opt.label);
                setTimeout(() => handleFlow(opt.next), 400);
            };
            wrap.appendChild(btn);
        });
        area.appendChild(wrap);
        area.scrollTop = area.scrollHeight;
    }

    function addTyping() {
        const area = document.getElementById('chat-messages');
        const wrap = document.createElement('div');
        wrap.className = 'chat-typing';
        wrap.id = 'chat-typing-indicator';
        wrap.innerHTML = `
            <div class="chat-msg-avatar">
                <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <div class="chat-typing-dots">
                <span></span><span></span><span></span>
            </div>
        `;
        area.appendChild(wrap);
        area.scrollTop = area.scrollHeight;
    }

    function removeTyping() {
        const t = document.getElementById('chat-typing-indicator');
        if (t) t.remove();
    }

    function addCTA() {
        const area = document.getElementById('chat-messages');
        const wrap = document.createElement('div');
        wrap.style.paddingLeft = '36px';
        wrap.style.animation   = 'msgSlideIn 0.35s ease-out';
        wrap.innerHTML = `
            <div class="chat-highlight">💡 初回60分の相談は完全無料です</div>
            <button class="chat-cta-btn" onclick="chatGoContact()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                無料相談を申し込む
            </button>
            <div style="text-align:center;margin-top:6px;font-size:0.72rem;color:#94a3b8;">
                📞 070-1047-1625（平日9〜17時）
            </div>
        `;
        area.appendChild(wrap);
        area.scrollTop = area.scrollHeight;
    }

    function addSpecialBtn(btn) {
        const area = document.getElementById('chat-messages');
        const wrap = document.createElement('div');
        wrap.style.paddingLeft = '36px';
        wrap.style.animation   = 'msgSlideIn 0.35s ease-out';
        const b = document.createElement('button');
        b.className  = 'chat-cta-btn';
        b.style.background  = 'linear-gradient(135deg, #1e3a8a, #2563eb)';
        b.style.boxShadow   = '0 4px 16px rgba(30,58,138,0.35)';
        b.textContent = btn.label;
        b.onclick = function() {
            chatClose();
            showPage(btn.action);
        };
        wrap.appendChild(b);
        area.appendChild(wrap);
        area.scrollTop = area.scrollHeight;
    }

    window.chatGoContact = function() {
        chatClose();
        showPage('contact');
    };

    function startFlow(key) {
        addTyping();
        typingTimer = setTimeout(() => {
            removeTyping();
            const flow = FLOWS[key];
            if (!flow) return;
            addMsg('bot', flow.msg);
            setTimeout(() => {
                if (flow.redirect) {
                    setTimeout(() => { chatClose(); showPage(flow.redirect); }, 600);
                    return;
                }
                if (flow.special_btn) addSpecialBtn(flow.special_btn);
                if (flow.options)     addOptions(flow.options);
                if (flow.cta)        addCTA();
            }, 200);
        }, 800);
    }

    function handleFlow(key) {
        addTyping();
        typingTimer = setTimeout(() => {
            removeTyping();
            const flow = FLOWS[key];
            if (!flow) return;
            addMsg('bot', flow.msg);
            setTimeout(() => {
                if (flow.redirect) {
                    setTimeout(() => { chatClose(); showPage(flow.redirect); }, 600);
                    return;
                }
                if (flow.special_btn) addSpecialBtn(flow.special_btn);
                if (flow.options)     addOptions(flow.options);
                if (flow.cta)        addCTA();
            }, 200);
        }, 700 + Math.random() * 400);
    }

    window.chatSend = function() {
        const input = document.getElementById('chat-input');
        const text  = input.value.trim();
        if (!text) return;
        input.value = '';
        addMsg('user', text);
        const lower = text.toLowerCase();
        let nextKey = 'cta_final';
        if (/(助成金|補助金|給付金)/.test(text))                            nextKey = 'subsidy';
        else if (/(給与|給料|計算|外注|アウト)/.test(text))                  nextKey = 'payroll';
        else if (/(就業規則|残業|トラブル|解雇|ハラスメント)/.test(text))    nextKey = 'trouble';
        else if (/(創業|設立|スタートアップ|起業)/.test(text))               nextKey = 'startup';
        else if (/(勤怠|タイムカード|クラウド|システム|DX)/.test(text))      nextKey = 'it';
        else if (/(料金|費用|価格|いくら)/.test(text))                       nextKey = 'other';
        else if (/(相談|問い合わせ|連絡|電話)/.test(text))                   nextKey = 'cta_final';
        addTyping();
        setTimeout(() => {
            removeTyping();
            const flow = FLOWS[nextKey];
            addMsg('bot', flow.msg);
            setTimeout(() => {
                if (flow.special_btn) addSpecialBtn(flow.special_btn);
                if (flow.options)     addOptions(flow.options);
                if (flow.cta)        addCTA();
            }, 200);
        }, 800);
    };
})();
