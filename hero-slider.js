// =============================================
// ヒーロースライダー（再設計版）
// カミウエ社会保険労務士事務所
// =============================================
// 設計方針:
//   - 各スライドの <img class="hero-slide-img"> が画像を直接保持
//   - data-img 属性はファイル名管理用（将来の動的生成対応）
//   - 背景画像の切り替えは行わず、スライド内 img で完結
//   - CSS で2カラム（PC）/ 1カラム（スマホ）を制御
//   - ナビゲーション: ドットインジケーター（スライダー上に配置）
// =============================================

(function () {
    'use strict';

    var INTERVAL = 8000;

    // タブナビゲーション用メタ情報
    var SLIDE_META = [
        { icon: '📍', title: '地域密着パートナー' },
        { icon: '💰', title: '助成金サポート'     },
        { icon: '📋', title: 'スポット依頼'       },
        { icon: '📱', title: '出退勤アプリ'       },
        { icon: '📝', title: '労務コラム'         },
        { icon: '▶',  title: 'YouTube'            },
    ];

    var current  = 0;
    var timer    = null;
    var slides   = [];
    var tabs     = [];   // タブナビ各ボタン
    var tabBars  = [];   // タブ内プログレスバー
    var section  = null;
    var progress = null;

    // ---- 初期化 ----
    function init() {
        slides   = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
        section  = document.getElementById('hero-slider-section');
        progress = document.getElementById('hero-progress');

        if (!slides.length || !section) return;

        var dotsWrap = document.getElementById('hero-dots');
        if (dotsWrap) {
            dotsWrap.style.display = 'flex'; // ドットナビを表示
            tabs = Array.prototype.slice.call(dotsWrap.querySelectorAll('.hero-dot'));
            tabs.forEach(function (btn, i) {
                btn.addEventListener('click', function () { goTo(i); });
            });
        }
        // buildTabNav(); // タブ型ナビゲーションの自動生成を停止

        var prevBtn = document.getElementById('hero-prev');
        var nextBtn = document.getElementById('hero-next');
        if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
        if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });

        section.addEventListener('mouseenter', function () { clearInterval(timer); stopProgress(); });
        section.addEventListener('mouseleave', startTimer);

        var tx = 0, ty = 0;
        section.addEventListener('touchstart', function (e) {
            tx = e.touches[0].clientX;
            ty = e.touches[0].clientY;
        }, { passive: true });
        section.addEventListener('touchend', function (e) {
            var dx = tx - e.changedTouches[0].clientX;
            var dy = Math.abs(ty - e.changedTouches[0].clientY);
            if (Math.abs(dx) > 48 && Math.abs(dx) > dy) {
                goTo(current + (dx > 0 ? 1 : -1));
            }
        }, { passive: true });

        section.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft')  goTo(current - 1);
            if (e.key === 'ArrowRight') goTo(current + 1);
        });

        setActive(0, false);
        startTimer();
        injectLatestColumn();
    }

    // ---- タブナビ生成（section 直後に挿入） ----
    function buildTabNav() {
        var nav = document.createElement('div');
        nav.id = 'hero-tab-nav';
        nav.setAttribute('role', 'tablist');
        nav.setAttribute('aria-label', 'スライドナビゲーション');

        slides.forEach(function (slide, i) {
            var meta = SLIDE_META[i] || { icon: '●', title: 'スライド ' + (i + 1) };

            var btn = document.createElement('button');
            btn.className = 'hero-tab' + (i === 0 ? ' active' : '');
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
            btn.setAttribute('aria-label', 'スライド ' + (i + 1) + ': ' + meta.title);
            btn.setAttribute('type', 'button');

            var bar = document.createElement('span');
            bar.className = 'hero-tab-bar';

            btn.innerHTML =
                '<span class="hero-tab-icon">' + meta.icon + '</span>' +
                '<span class="hero-tab-title">' + meta.title + '</span>';
            btn.appendChild(bar);

            (function (idx) {
                btn.addEventListener('click', function () { goTo(idx); });
            }(i));

            nav.appendChild(btn);
            tabs.push(btn);
            tabBars.push(bar);
        });

        section.insertAdjacentElement('afterend', nav);
    }

    // ---- スライド切り替え ----
    function goTo(index) {
        var len  = slides.length;
        var next = ((index % len) + len) % len;
        if (next === current) return;
        setActive(next, true);
    }

    function setActive(next, animate) {
        if (slides[current]) slides[current].classList.remove('active');
        if (tabs[current]) {
            tabs[current].classList.remove('active');
            tabs[current].setAttribute('aria-selected', 'false');
        }

        current = next;

        slides[current].classList.add('active');
        if (animate) {
            slides[current].style.animation = 'none';
            void slides[current].offsetHeight;
            slides[current].style.animation = '';
        }
        if (tabs[current]) {
            tabs[current].classList.add('active');
            tabs[current].setAttribute('aria-selected', 'true');
            // tabs[current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); // ドットナビでは不要
        }

        clearInterval(timer);
        stopProgress();
        startTimer();
    }

    // ---- タイマー ----
    function startTimer() {
        timer = setInterval(function () { goTo(current + 1); }, INTERVAL);
        startProgress();
    }

    // ---- プログレスバー ----
    function startProgress() {
        if (progress) {
            progress.style.transition = 'none';
            progress.style.width = '0%';
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    progress.style.transition = 'width ' + INTERVAL + 'ms linear';
                    progress.style.width = '100%';
                });
            });
        }
        // 全タブバーをリセットし、アクティブのみ開始
        tabBars.forEach(function (bar) {
            bar.style.transition = 'none';
            bar.style.width = '0%';
        });
        var activeBar = tabBars[current];
        if (activeBar) {
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    activeBar.style.transition = 'width ' + INTERVAL + 'ms linear';
                    activeBar.style.width = '100%';
                });
            });
        }
    }

    function stopProgress() {
        if (progress) {
            var w = window.getComputedStyle(progress).width;
            progress.style.transition = 'none';
            progress.style.width = w;
        }
        tabBars.forEach(function (bar) {
            var bw = window.getComputedStyle(bar).width;
            bar.style.transition = 'none';
            bar.style.width = bw;
        });
    }

    // ---- コラム最新情報注入（スライド5用） ----
    function injectLatestColumn() {
        if (typeof COLUMNS === 'undefined' || !COLUMNS || !COLUMNS.length) return;
        var latest  = COLUMNS[0];
        var titleEl = document.getElementById('hero-col-title');
        var labelEl = document.getElementById('hero-col-label');
        var catsEl  = document.getElementById('hero-col-cats');
        if (titleEl && latest.title) titleEl.textContent = latest.title;
        if (labelEl && latest.date)  labelEl.textContent = latest.date + ' 公開';
        if (catsEl  && latest.cat) {
            var badge = document.createElement('span');
            badge.className = 'cat-badge-' + latest.cat + ' text-xs font-bold px-3 py-1 rounded-full';
            badge.textContent = latest.cat;
            catsEl.appendChild(badge);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());
