/**
 * hero-slider.js
 * ヒーロースライダー制御
 * - 切り替え間隔: 8秒
 * - 切り替え順序: スライド番号順（1→2→3→4→5→6→1→…）
 * - スライド数:   6
 */
(function () {
  'use strict';

  /* ======================================================
     定数
  ====================================================== */
  var INTERVAL_MS  = 8000;   // 自動切り替え間隔（8秒）
  var PROGRESS_MS  = INTERVAL_MS; // プログレスバーが同じ時間で満ちる

  /* ======================================================
     DOM 参照
  ====================================================== */
  var slides   = document.querySelectorAll('.hero-slide');
  var dots     = document.querySelectorAll('.hero-dot');
  var prevBtn  = document.getElementById('hero-prev');
  var nextBtn  = document.getElementById('hero-next');
  var progress = document.getElementById('hero-progress');

  if (!slides.length) return; // スライダーが存在しない場合は何もしない

  var total   = slides.length;
  var current = 0;
  var timer   = null;
  var progAnim = null;

  /* ======================================================
     スライド切り替え
  ====================================================== */
  function goTo(index) {
    // 範囲クランプ（循環）
    index = ((index % total) + total) % total;

    // 現在スライドを非アクティブに
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-selected', 'false');

    current = index;

    // 新スライドをアクティブに
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-selected', 'true');

    // プログレスバーをリセット→再開始
    resetProgress();
  }

  function goNext() { goTo(current + 1); }
  function goPrev() { goTo(current - 1); }

  /* ======================================================
     自動再生
  ====================================================== */
  function startAuto() {
    stopAuto();
    timer = setInterval(goNext, INTERVAL_MS);
  }

  function stopAuto() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  /* ======================================================
     プログレスバー
  ====================================================== */
  function resetProgress() {
    if (!progress) return;
    // アニメーションをリセット
    if (progAnim) { progAnim.cancel(); progAnim = null; }
    if (typeof progress.animate === 'function') {
      progAnim = progress.animate(
        [{ width: '0%' }, { width: '100%' }],
        { duration: PROGRESS_MS, easing: 'linear', fill: 'forwards' }
      );
    } else {
      // Web Animations API 非対応の場合は CSS transition でフォールバック
      progress.style.transition = 'none';
      progress.style.width = '0%';
      // 強制リフロー
      void progress.offsetWidth;
      progress.style.transition = 'width ' + (PROGRESS_MS / 1000) + 's linear';
      progress.style.width = '100%';
    }
  }

  /* ======================================================
     イベント登録
  ====================================================== */
  // 前後ボタン
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      goPrev();
      startAuto(); // クリック後タイマーをリセット
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      goNext();
      startAuto();
    });
  }

  // ドットナビゲーション
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goTo(i);
      startAuto();
    });
  });

  // ホバー中は自動再生を一時停止
  var section = document.getElementById('hero-slider-section');
  if (section) {
    section.addEventListener('mouseenter', function () {
      stopAuto();
      if (progAnim) { try { progAnim.pause(); } catch(e){} }
    });
    section.addEventListener('mouseleave', function () {
      startAuto();
      if (progAnim) { try { progAnim.play();  } catch(e){} }
    });
  }

  // タッチスワイプ（スマホ対応）
  var touchStartX = 0;
  var touchStartY = 0;
  var SWIPE_THRESHOLD = 50;
  if (section) {
    section.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    section.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
        if (dx < 0) { goNext(); } else { goPrev(); }
        startAuto();
      }
    }, { passive: true });
  }

  // キーボード操作（フォーカス時）
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  { goPrev(); startAuto(); }
    if (e.key === 'ArrowRight') { goNext(); startAuto(); }
  });

  /* ======================================================
     初期化
  ====================================================== */
  resetProgress();
  startAuto();

}());
