/**
 * 助成金診断シミュレーター ロジック
 */
(function() {
    'use strict';

    // 診断実行関数をグローバルに公開
    window.runSubsidyDiagnosis = function() {
        const form = document.getElementById('subsidy-diagnostic-form');
        if (!form) return;

        // チェックされた項目を取得
        const selectedPlans = Array.from(form.querySelectorAll('input[name="plan"]:checked')).map(el => el.value);

        if (selectedPlans.length === 0) {
            alert('検討中の計画・取り組みを1つ以上選択してください。');
            return;
        }

        const resultDiv = document.getElementById('subsidy-result');
        const formDiv = document.getElementById('subsidy-form');
        
        // 診断結果データ
        let results = [];
        
        if (selectedPlans.includes('regular')) {
            results.push({
                title: 'キャリアアップ助成金（正社員化コース）',
                amount: '1人あたり最大80万円',
                desc: '有期雇用労働者等を正社員化した場合に受給できます。2025年度も拡充が続いています。'
            });
        }
        if (selectedPlans.includes('wage')) {
            results.push({
                title: '業務改善助成金',
                amount: '最大600万円',
                desc: '事業場内最低賃金を引き上げ、設備投資（機械やシステム導入）を行った場合に費用の一部が助成されます。'
            });
        }
        if (selectedPlans.includes('training')) {
            results.push({
                title: '人材開発支援助成金',
                amount: '経費の最大75% + 賃金助成',
                desc: '従業員に専門的な訓練（外部研修やOJT）を実施した場合に、訓練経費や訓練期間中の賃金が助成されます。'
            });
        }
        if (selectedPlans.includes('worklife')) {
            results.push({
                title: '両立支援等助成金',
                amount: '最大100万円以上',
                desc: '育児休業の取得促進や、介護離職防止のための柔軟な働き方制度を導入した場合に受給できます。'
            });
        }
        if (selectedPlans.includes('hiring')) {
            results.push({
                title: '特定求職者雇用開発助成金',
                amount: '最大240万円',
                desc: '高年齢者、障害者、母子家庭の母などの就職困難者を雇い入れる場合に受給できます。'
            });
        }

        // 結果表示のHTML生成
        let html = `
            <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mt-10 animate-fade-in">
                <h3 class="text-2xl md:text-3xl font-black text-blue-900 mb-8 text-center">診断結果：受給可能性のある助成金</h3>
                <div class="space-y-6 mb-10">
        `;

        results.forEach(res => {
            html += `
                <div class="border-2 border-blue-50 bg-blue-50/30 rounded-2xl p-6 hover:border-blue-200 transition">
                    <div class="flex justify-between items-start flex-wrap gap-2 mb-3">
                        <h4 class="text-xl font-bold text-blue-900">${res.title}</h4>
                        <span class="bg-orange-500 text-white text-sm font-black px-4 py-1 rounded-full shadow-sm">${res.amount}</span>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed">${res.desc}</p>
                </div>
            `;
        });

        html += `
                </div>
                <div class="bg-blue-900 rounded-2xl p-8 text-white mb-8 text-center">
                    <p class="font-bold text-lg mb-2">正確な受給額を詳しく知りませんか？</p>
                    <p class="text-sm opacity-90 leading-relaxed">受給には細かい要件があります。当事務所では無料の精密診断を行っています。</p>
                </div>
                <div class="flex flex-col md:flex-row gap-4">
                    <button onclick="App.showPage('contact')" class="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black py-5 rounded-xl shadow-xl transition transform hover:scale-105 text-lg">
                        無料相談を予約する
                    </button>
                    <button onclick="window.initSubsidyDiagnosis()" class="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-5 px-8 rounded-xl transition">
                        診断をやり直す
                    </button>
                </div>
            </div>
        `;

        formDiv.classList.add('hidden');
        resultDiv.innerHTML = html;
        resultDiv.classList.remove('hidden');
        window.scrollTo({ top: resultDiv.offsetTop - 100, behavior: 'smooth' });
    };

    // 初期化関数
    window.initSubsidyDiagnosis = function() {
        const form = document.getElementById('subsidy-diagnostic-form');
        if (form) form.reset();
        const resultDiv = document.getElementById('subsidy-result');
        const formDiv = document.getElementById('subsidy-form');
        if (resultDiv) resultDiv.classList.add('hidden');
        if (formDiv) formDiv.classList.remove('hidden');
    };
})();