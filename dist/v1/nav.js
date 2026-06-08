// AI Trends — 共享导航栏
// 用法：在页面 <body> 开头插入 <script src="nav.js"></script>
(function() {
  var pages = [
    { href: 'index.html',           label: '首页',         id: 'home' },
    { href: 'github-ai-top25.html', label: 'GitHub AI 项目', id: 'github' },
    { href: 'llm-top25.html',       label: '大模型排行',    id: 'llm' }
  ];

  // 自动检测当前页面
  var path = location.pathname.split('/').pop() || 'index.html';
  var current = 'home';
  for (var i = 0; i < pages.length; i++) {
    if (pages[i].href === path) { current = pages[i].id; break; }
  }

  // 生成链接
  var links = '';
  for (var i = 0; i < pages.length; i++) {
    var p = pages[i];
    var cls = p.id === current ? ' active' : '';
    links += '<a href="' + p.href + '" class="' + cls + '">' + p.label + '</a>';
  }

  // 注入 CSS
  var css = document.createElement('style');
  css.textContent =
    '.nav{background:#161b22;border-bottom:1px solid #21262d;padding:0 24px;display:flex;align-items:center;height:52px;position:sticky;top:0;z-index:100}' +
    '.nav-brand{font-size:16px;font-weight:700;color:#58a6ff;text-decoration:none;margin-right:32px;white-space:nowrap}' +
    '.nav-brand span{color:#8b949e;font-weight:400}' +
    '.nav-links{display:flex;gap:4px}' +
    '.nav-links a{color:#8b949e;text-decoration:none;font-size:14px;padding:6px 14px;border-radius:6px;transition:all .15s}' +
    '.nav-links a:hover{color:#c9d1d9;background:#21262d}' +
    '.nav-links a.active{color:#c9d1d9;background:#21262d;font-weight:600}';
  document.head.appendChild(css);

  // 注入 HTML
  var nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML =
    '<a class="nav-brand" href="index.html">AI Trends <span>数据看板</span></a>' +
    '<div class="nav-links">' + links + '</div>';

  var body = document.body;
  body.insertBefore(nav, body.firstChild);
})();
