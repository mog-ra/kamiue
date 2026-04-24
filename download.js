/**
 * 無料資料ダウンロード機能 ロジック
 */

let selectedDlIndex = null;

/**
 * ダウンロードモーダルを開く
 */
function dlOpenModal(index) {
    selectedDlIndex = index;
    const data = SITE_CONFIG.DOCUMENTS[index];
    
    // モーダル内の情報を更新
    document.getElementById('dl-modal-title').textContent = data.title;
    document.getElementById('dl-modal-emoji').textContent = data.emoji;
    
    // フォームを初期化
    document.getElementById('dl-form-area').style.display = 'block';
    document.getElementById('dl-success-area').style.display = 'none';
    document.getElementById('dl-form-error').classList.add('hidden');
    
    // モーダルを表示
    document.getElementById('dl-modal-overlay').style.display = 'flex';
}

/**
 * モーダルを閉じる
 */
function dlCloseModal() {
    document.getElementById('dl-modal-overlay').style.display = 'none';
}

/**
 * 背景クリックで閉じる
 */
function dlOverlayClick(e) {
    if (e.target.id === 'dl-modal-overlay') dlCloseModal();
}

/**
 * フォーム送信処理
 */
function dlSubmit() {
    const name = document.getElementById('dl-name').value.trim();
    const email = document.getElementById('dl-email').value.trim();
    
    if (!name || !email) {
        document.getElementById('dl-form-error').classList.remove('hidden');
        return;
    }

    const item = SITE_CONFIG.DOCUMENTS[selectedDlIndex];
    const btn = document.getElementById('dl-submit-btn');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = '送信中...';

    // Formspreeへ送信（config.jsの設定を利用）
    const endpoint = SITE_CONFIG.FORMSPREE.BASE_URL + SITE_CONFIG.FORMSPREE.ID;
    const payload = {
        _subject: `【資料請求】${item.title}`,
        種別: "資料ダウンロード（個別）",
        資料名: item.title,
        お名前: name,
        メールアドレス: email,
        会社名: document.getElementById('dl-company').value.trim(),
        メルマガ希望: document.getElementById('dl-newsletter').checked ? "はい" : "いいえ"
    };

    fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        document.getElementById('dl-form-area').style.display = 'none';
        document.getElementById('dl-success-area').style.display = 'block';
        setTimeout(() => {
            dlCloseModal();
            showDlThankYou(selectedDlIndex);
        }, 2000);
    })
    .catch(err => {
        console.error('送信エラー:', err);
        alert('送信に失敗しました。時間をおいて再度お試しください。');
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
    });
}

/**
 * サンクスページの表示とデータ流し込み
 */
function showDlThankYou(index) {
    const data = SITE_CONFIG.DOCUMENTS[index];
    // 共通のAppオブジェクトがあれば利用、なければ直接操作
    if (typeof App !== 'undefined' && App.showPage) {
        App.showPage('dl-thankyou');
    } else {
        // フォールバック
        document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
        document.getElementById('page-dl-thankyou').classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    document.getElementById('dl-ty-heading').textContent = 'ご登録ありがとうございます！';
    document.getElementById('dl-ty-subtext').textContent = '以下のボタンから資料をダウンロードしてください。';

    document.getElementById('dl-ty-title').textContent = data.title;
    document.getElementById('dl-ty-emoji').textContent = data.emoji;
    document.getElementById('dl-ty-single').classList.remove('hidden');
    document.getElementById('dl-ty-all').classList.add('hidden');
    
    // 他の資料のリストを生成
    const grid = document.getElementById('dl-ty-others-grid');
    grid.innerHTML = '';
    SITE_CONFIG.DOCUMENTS.forEach((item, i) => {
        if (i === index) return;
        const btn = document.createElement('button');
        btn.className = 'text-left p-4 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-200 transition text-sm flex items-center gap-3';
        btn.onclick = () => showDlThankYou(i);
        btn.innerHTML = `<span>${item.emoji}</span> <span class="font-bold text-blue-900">${item.title}</span>`;
        grid.appendChild(btn);
    });
}

/**
 * まとめてダウンロード（バナー用）の登録処理
 */
function dlBannerRegister() {
    const email = document.getElementById('dl-banner-email').value.trim();
    
    if (!email || !email.includes('@')) {
        alert('有効なメールアドレスを入力してください。');
        return;
    }

    const btn = document.querySelector('#dl-banner-form button');
    btn.disabled = true;

    const endpoint = SITE_CONFIG.FORMSPREE.BASE_URL + SITE_CONFIG.FORMSPREE.ID;
    const payload = {
        _subject: "【資料請求】全資料一括ダウンロード",
        種別: "資料ダウンロード（一括）",
        メールアドレス: email
    };

    fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        document.getElementById('dl-banner-form').classList.add('hidden');
        document.getElementById('dl-banner-done').classList.remove('hidden');
        setTimeout(() => {
            showDlThankYouAll();
        }, 2000);
    })
    .catch(err => {
        console.error('送信エラー:', err);
        alert('送信に失敗しました。');
    })
    .finally(() => {
        btn.disabled = false;
    });
}

/**
 * 全資料一括ダウンロードページの表示
 */
function showDlThankYouAll() {
    if (typeof App !== 'undefined' && App.showPage) {
        App.showPage('dl-thankyou');
    } else {
        document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
        document.getElementById('page-dl-thankyou').classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    document.getElementById('dl-ty-heading').textContent = '資料請求ありがとうございます！';
    document.getElementById('dl-ty-subtext').textContent = 'すべての資料が以下からダウンロード可能です。';
    
    document.getElementById('dl-ty-single').classList.add('hidden');
    document.getElementById('dl-ty-all').classList.remove('hidden');
    
    const grid = document.getElementById('dl-ty-all-grid');
    grid.innerHTML = '';
    SITE_CONFIG.DOCUMENTS.forEach((item) => {
        const btn = document.createElement('button');
        btn.className = 'text-left p-5 bg-gray-50 hover:bg-indigo-50 rounded-2xl border border-gray-200 transition flex items-center gap-4 group';
        btn.onclick = () => window.open(item.url, '_blank');
        btn.innerHTML = `
            <span class="text-3xl">${item.emoji}</span>
            <div class="flex-1">
                <p class="font-bold text-blue-900 group-hover:text-indigo-700">${item.title}</p>
                <p class="text-xs text-gray-400 mt-1">PDF形式をダウンロード</p>
            </div>
            <svg class="w-5 h-5 text-gray-300 group-hover:text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        `;
        grid.appendChild(btn);
    });
}

/**
 * 単一ファイルのダウンロード実行
 */
function dlTyDownloadSingle() {
    const data = SITE_CONFIG.DOCUMENTS[selectedDlIndex];
    // 実際にはここでファイルのパスへ遷移またはダウンロード実行
    window.open(data.url, '_blank');
}