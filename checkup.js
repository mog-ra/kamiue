// checkup.js
window.checkupQuestions = [
    { q: "就業規則を作成し、最新の法改正に合わせて内容を更新していますか？", cat: "規定整備", impact: 3 },
    { q: "36協定を締結し、毎年漏れなく労働基準監督署に届出していますか？", cat: "労使協定", impact: 3 },
    { q: "管理職に対しても、深夜割増賃金（22時以降）を適正に支払っていますか？", cat: "賃金管理", impact: 3 },
    { q: "残業代計算から「役職手当」などを不当に除外せず計算していますか？", cat: "賃金管理", impact: 3 },
    { q: "客観的な記録（打刻等）に基づき、労働時間を1分単位で把握していますか？", cat: "労働時間", impact: 2 },
    { q: "有給休暇を年5日、対象者全員に確実に取得させていますか？", cat: "労働時間", impact: 3 },
    { q: "ハラスメント相談窓口を設置し、従業員に周知していますか？", cat: "コンプラ", impact: 2 },
    { q: "雇用契約書を、入社時に必ず書面または電子で交付していますか？", cat: "雇用管理", impact: 3 },
    { q: "社会保険の加入条件を満たすパート・アルバイトを正しく加入させていますか？", cat: "雇用管理", impact: 3 },
    { q: "同一労働同一賃金に基づき、正社員と非正規の待遇差を説明できますか？", cat: "コンプラ", impact: 2 }
];

let currentAnswers = [];

window.startCheckup = function() {
    currentAnswers = [];
    document.getElementById('checkup-intro').style.display = 'none';
    document.getElementById('checkup-questions').style.display = 'block';
    renderQuestion(0);
};

function renderQuestion(index) {
    const q = window.checkupQuestions[index];
    const progress = ((index + 1) / window.checkupQuestions.length) * 100;
    const container = document.getElementById('checkup-questions');
    
    container.innerHTML = `
        <div class="mb-8">
            <div class="flex justify-between text-xs font-bold mb-2 text-blue-600 tracking-widest uppercase">
                <span>Question ${index + 1} / ${window.checkupQuestions.length}</span>
                <span>${Math.round(progress)}% Complete</span>
            </div>
            <div class="w-full bg-gray-100 rounded-full h-1.5">
                <div class="bg-blue-600 h-1.5 rounded-full transition-all duration-500" style="width: ${progress}%"></div>
            </div>
        </div>
        <div class="py-10">
            <span class="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-6 italic">Category: ${q.cat}</span>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-12">${q.q}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                <button onclick="answerQuestion(${index}, true)" class="group relative py-5 px-6 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">はい</button>
                <button onclick="answerQuestion(${index}, false)" class="group relative py-5 px-6 bg-white border-2 border-red-500 text-red-500 font-bold rounded-2xl hover:bg-red-50 transition-all duration-300">いいえ / 不安</button>
            </div>
        </div>
    `;
}

window.answerQuestion = function(index, isYes) {
    currentAnswers.push({ ...window.checkupQuestions[index], answer: isYes });
    if (index + 1 < window.checkupQuestions.length) {
        renderQuestion(index + 1);
    } else {
        showResults();
    }
};

function showResults() {
    const container = document.getElementById('checkup-questions');
    const resultDiv = document.getElementById('checkup-result');
    
    // カテゴリー別スコア計算
    const categories = [...new Set(window.checkupQuestions.map(q => q.cat))];
    const catScores = categories.map(cat => {
        const catQs = currentAnswers.filter(a => a.cat === cat);
        const yesCount = catQs.filter(a => a.answer).length;
        return (yesCount / catQs.length) * 100;
    });

    const score = Math.round((currentAnswers.filter(a => a.answer).length / currentAnswers.length) * 100);
    const noAnswers = currentAnswers.filter(a => !a.answer);

    container.style.display = 'none';
    resultDiv.innerHTML = `
        <div class="text-center mb-10">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">労務健全性分析レポート</h3>
            <div class="flex flex-col md:flex-row items-center justify-around gap-8">
                <div class="w-full md:w-1/2 max-w-[300px]">
                    <canvas id="riskChart"></canvas>
                </div>
                <div class="text-center">
                    <p class="text-sm font-bold text-gray-500 mb-1">総合スコア</p>
                    <div class="text-7xl font-black ${score < 70 ? 'text-red-500' : 'text-blue-600'} mb-2">${score}</div>
                    <div class="px-6 py-2 rounded-full font-bold inline-block ${score < 70 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}">
                        ${score < 70 ? '要改善（警告）' : '良好（健全）'}
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 class="font-bold text-gray-700 mb-4 flex items-center">
                    <span class="mr-2 text-red-500">🚩</span>重点改善が必要なポイント
                </h4>
                <ul class="space-y-3">
                    ${noAnswers.slice(0, 3).map(a => `<li class="text-sm text-gray-600 flex items-start"><span class="text-red-400 mr-2">•</span>${a.q}</li>`).join('')}
                </ul>
            </div>
            <div class="bg-blue-900 p-6 rounded-2xl text-white">
                <h4 class="font-bold mb-3 flex items-center"><span class="mr-2">💡</span>社労士のアドバイス</h4>
                <p class="text-xs leading-relaxed opacity-90">
                    現在のスコアに基づくと、${score < 70 ? '潜在的な労働紛争リスクが高い状態です。特に未払い賃金や協定の不備は、行政調査の対象となりやすいため、早期の整備を推奨します。' : '基礎的な整備は進んでいますが、運用の形骸化に注意が必要です。より高度な規程整備で、従業員のエンゲージメント向上を目指せます。'}
                </p>
            </div>
        </div>

        <button onclick="showPage('contact')" class="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition shadow-lg text-xl mb-4">
            詳細な診断結果と改善案を請求する（無料）
        </button>
        <div class="text-center">
            <button onclick="window.resetCheckup()" class="text-gray-400 hover:text-blue-600 text-sm">テストをやり直す</button>
        </div>
    `;
    resultDiv.style.display = 'block';

    // グラフの描画
    const ctx = document.getElementById('riskChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: categories,
            datasets: [{
                label: '健全度',
                data: catScores,
                fill: true,
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: 'rgb(37, 99, 235)',
                pointBackgroundColor: 'rgb(37, 99, 235)',
                pointBorderColor: '#fff',
            }]
        },
        options: {
            scales: {
                r: {
                    min: 0, max: 100,
                    ticks: { display: false },
                    grid: { color: '#e5e7eb' },
                    angleLines: { color: '#e5e7eb' },
                    pointLabels: { font: { size: 10, weight: 'bold' } }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    window.scrollTo({ top: document.getElementById('checkup').offsetTop - 50, behavior: 'smooth' });
}

window.resetCheckup = function() {
    document.getElementById('checkup-intro').style.display = 'block';
    document.getElementById('checkup-questions').style.display = 'none';
    document.getElementById('checkup-result').style.display = 'none';
};