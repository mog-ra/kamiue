(function () {
  var TIMEOUT_MS = 8000; // 8秒でタイムアウト

  var _cache = null;

  function fmtDate(iso) {
    var d = new Date(iso);
    return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
  }

  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // タイムアウト付きfetch
  function apiFetch(url) {
    var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = controller
      ? setTimeout(function(){ controller.abort(); }, TIMEOUT_MS)
      : null;
    var opts = {
      referrerPolicy: 'origin',
      signal: controller ? controller.signal : undefined
    };
    return fetch(url, opts)
      .then(function(r) {
        if (timer) clearTimeout(timer);
        if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + r.statusText);
        return r.json();
      })
      .catch(function(err) {
        if (timer) clearTimeout(timer);
        throw err;
      });
  }

  function buildCard(item) {
    var sn    = item.snippet;
    var vid   = sn.resourceId.videoId;
    var thumb = (sn.thumbnails.maxres||sn.thumbnails.high||sn.thumbnails.medium||sn.thumbnails.default||{}).url||'';
    var title = esc(sn.title);
    var date  = fmtDate(sn.publishedAt);
    return '<a href="https://www.youtube.com/watch?v='+esc(vid)+'" target="_blank" rel="noopener noreferrer"'+
      ' class="block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">'+
      '<div class="relative w-full overflow-hidden" style="aspect-ratio:16/9;background:#0f0f0f;">'+
        '<img src="'+esc(thumb)+'" alt="'+title+'" loading="lazy" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">'+
        '<div class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-200">'+
          '<div class="w-12 h-12 bg-red-600/85 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200">'+
            '<svg class="w-5 h-5 text-white ml-1" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="p-4">'+
        '<p class="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 min-h-[2.8em]">'+title+'</p>'+
        '<p class="text-xs text-gray-400 mt-2">'+date+'</p>'+
      '</div>'+
    '</a>';
  }

  function errHTML() {
    var channelId = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.YOUTUBE) 
                    ? SITE_CONFIG.YOUTUBE.CHANNEL_ID 
                    : '';
    var CHANNEL_URL = 'https://www.youtube.com/channel/' + channelId;
    return '<div style="grid-column:1/-1" class="text-center py-10 text-gray-400 text-sm">'+
      '動画の読み込みに失敗しました。<br>'+
      '<a href="'+esc(CHANNEL_URL)+'" target="_blank" rel="noopener" class="text-red-600 font-semibold hover:underline mt-2 inline-block">YouTubeチャンネルを直接ご覧ください →</a>'+
    '</div>';
  }

  function fetchVideos() {
    if (_cache) return Promise.resolve(_cache);
    
    if (typeof SITE_CONFIG === 'undefined' || !SITE_CONFIG.YOUTUBE) {
      return Promise.reject(new Error('SITE_CONFIG が読み込まれていません。config.jsのパスを確認してください。'));
    }

    var API_KEY = SITE_CONFIG.YOUTUBE.API_KEY;
    var CHANNEL_ID = SITE_CONFIG.YOUTUBE.CHANNEL_ID;

    return apiFetch(
      'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id='+CHANNEL_ID+'&key='+API_KEY
    ).then(function(d) {
      if (!d.items || !d.items.length) throw new Error('チャンネルが見つかりません');
      var uploadsId = d.items[0].contentDetails.relatedPlaylists.uploads;
      return apiFetch(
        'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='+uploadsId+'&maxResults=50&key='+API_KEY
      );
    }).then(function(d) {
      _cache = d.items || [];
      return _cache;
    });
  }

  function renderGrid(grid, items, max) {
    var slice = items.slice(0, max);
    if (!slice.length) {
      grid.innerHTML = '<div style="grid-column:1/-1" class="text-center py-8 text-gray-400 text-sm">現在、公開動画はありません。</div>';
      return;
    }
    grid.innerHTML = slice.map(buildCard).join('');
  }

  function loadHomeYT() {
    if (typeof SITE_CONFIG === 'undefined' || !SITE_CONFIG.YOUTUBE || !SITE_CONFIG.YOUTUBE.API_KEY) {
      return;
    }
    var grid = document.getElementById('home-yt-grid');
    if (!grid) return;
    fetchVideos()
      .then(function(items) { renderGrid(grid, items, 6); })
      .catch(function(err) {
        console.warn('[YT-home]', err.name, err.message);
        grid.innerHTML = errHTML();
      });
  }

  // 外部から呼び出せるように公開
  window.loadHomeYT = loadHomeYT;

  var _pageLoaded = false;
  window.loadYouTubePage = function() {
    var grid = document.getElementById('yt-grid-page');
    if (!grid || _pageLoaded) return;
    _pageLoaded = true;
    fetchVideos().then(function(items) { renderGrid(grid, items, 12); }).catch(function() { _pageLoaded = false; grid.innerHTML = errHTML(); });
  };

  document.addEventListener('DOMContentLoaded', loadHomeYT);
})();