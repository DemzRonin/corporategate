/* ============================================================
   Corporategate Limited — shared site behaviour
   Loads AFTER assets/data.js and the lucide UMD script.
   Each page sets <body data-page="services"> to mark active nav.
   ============================================================ */
(function () {
  var C = (window.CG && window.CG.contact) || {};
  var PAGE = document.body.getAttribute('data-page') || 'home';

  var NAV = [
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'services', label: 'Services', href: 'services.html' },
    { id: 'industries', label: 'Industries', href: 'industries.html' },
    { id: 'insights', label: 'Insights', href: 'insights.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' }
  ];

  /* ---------- Header ---------- */
  function buildHeader() {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '" class="' + (n.id === PAGE ? 'active' : '') + '">' + n.label + '</a>';
    }).join('');
    var mlinks = NAV.map(function (n) {
      return '<a href="' + n.href + '" class="' + (n.id === PAGE ? 'active' : '') + '">' + n.label + '</a>';
    }).join('');
    return '' +
      '<header class="site">' +
        '<div class="wrap header-inner">' +
          '<a class="brand" href="index.html" aria-label="Corporategate Limited home">' +
            '<span class="brand-mark"><i data-lucide="building-2"></i></span>' +
            '<span><h1>Corporategate</h1><span class="sub">Limited</span></span>' +
          '</a>' +
          '<nav class="primary" aria-label="Primary">' + links + '</nav>' +
          '<div class="header-actions">' +
            '<a href="contact.html" class="btn btn-primary">Request Quote <i data-lucide="chevron-right"></i></a>' +
            '<button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false"><i data-lucide="menu" style="width:28px;height:28px"></i></button>' +
          '</div>' +
        '</div>' +
        '<div class="mobile-menu" id="mobileMenu">' + mlinks +
          '<a href="contact.html" class="btn btn-accent">Request a Quote</a>' +
        '</div>' +
      '</header>';
  }

  /* ---------- Footer ---------- */
  function buildFooter() {
    var svc = CG.services.slice(0, 6).map(function (s) {
      return '<li><a href="service.html?s=' + s.slug + '">' + s.title.replace(' & ', ' &amp; ') + '</a></li>';
    }).join('');
    return '' +
      '<footer class="site">' +
        '<div class="wrap">' +
          '<div class="footer-grid">' +
            '<div class="footer-brand">' +
              '<div class="row"><span class="mk"><i data-lucide="building-2"></i></span><span class="nm">Corporategate</span></div>' +
              '<p>Nigerian multi-service gateway for contracting, procurement, ICT, logistics and project delivery.</p>' +
            '</div>' +
            '<div class="footer-col"><h5>Services</h5><ul>' + svc + '</ul></div>' +
            '<div class="footer-col"><h5>Company</h5><ul>' +
              '<li><a href="about.html">About Us</a></li>' +
              '<li><a href="about.html#leadership">Leadership</a></li>' +
              '<li><a href="insights.html">Insights</a></li>' +
              '<li><a href="contact.html">Contact</a></li>' +
            '</ul></div>' +
            '<div class="footer-col"><h5>Resources</h5><ul>' +
              '<li><a href="about.html#profile">Company Profile</a></li>' +
              '<li><a href="contact.html">Request Quote</a></li>' +
              '<li><a href="contact.html#vendor">Vendor Enquiry</a></li>' +
            '</ul></div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<p>&copy; 2026 Corporategate Limited. Nigerian private company limited by shares. Incorporated 2007.</p>' +
            '<div class="footer-legal">' +
              '<a href="privacy.html">Privacy Policy</a>' +
              '<a href="terms.html">Terms of Service</a>' +
              '<a href="contact.html">Contact</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  /* ---------- Floating contact button ---------- */
  function buildFab() {
    return '<a class="fab" href="contact.html"><i data-lucide="message-circle"></i><span>Talk to us</span></a>';
  }

  /* ---------- Inject chrome ---------- */
  var headerSlot = document.getElementById('site-header');
  var footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = buildHeader();
  if (footerSlot) footerSlot.outerHTML = buildFooter();
  if (!document.querySelector('.fab')) document.body.insertAdjacentHTML('beforeend', buildFab());

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('menuToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('#mobileMenu a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
    });
  }

  /* ---------- Tabs ---------- */
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var tabs = group.querySelectorAll('.tab');
    var panels = group.querySelectorAll('.tab-panel');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-tab');
        tabs.forEach(function (t) { t.classList.toggle('active', t === tab); });
        panels.forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-panel') === target); });
      });
    });
  });

  /* ---------- Accordion ---------- */
  document.querySelectorAll('.accordion').forEach(function (acc) {
    acc.querySelectorAll('.acc-head').forEach(function (head) {
      head.addEventListener('click', function () {
        var item = head.closest('.acc-item');
        var body = item.querySelector('.acc-body');
        var open = item.classList.toggle('open');
        body.style.maxHeight = open ? (body.scrollHeight + 'px') : '0px';
      });
    });
  });

  /* ---------- Filters ---------- */
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var chips = group.querySelectorAll('.chip');
    var targetSel = group.getAttribute('data-target');
    var items = document.querySelectorAll(targetSel + ' [data-tags]');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        chips.forEach(function (c) { c.classList.toggle('active', c === chip); });
        items.forEach(function (it) {
          var tags = it.getAttribute('data-tags') || '';
          it.style.display = (f === 'all' || tags.indexOf(f) !== -1) ? '' : 'none';
        });
      });
    });
  });

  /* ---------- Forms ---------- */
  function emailValid(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }
  document.querySelectorAll('form[data-cgform]').forEach(function (form) {
    function clearErr(el) { var f = el.closest('[data-field]'); if (f) f.classList.remove('error'); }
    form.querySelectorAll('input, select, textarea').forEach(function (el) {
      el.addEventListener('input', function () { clearErr(el); });
      el.addEventListener('change', function () { clearErr(el); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll('[data-field]').forEach(function (field) {
        var input = field.querySelector('input, select, textarea');
        if (!input) return;
        var required = input.hasAttribute('required');
        var val = (input.value || '').trim();
        var bad = false;
        if (required && val === '') bad = true;
        if (input.type === 'email' && val !== '' && !emailValid(val)) bad = true;
        field.classList.toggle('error', bad);
        if (bad) ok = false;
      });
      if (ok) {
        form.classList.add('sent');
        if (window.lucide) lucide.createIcons();
        form.scrollIntoView ? null : null; // intentionally no scrollIntoView
      }
    });
  });

  /* ---------- Scroll reveal ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el, i) {
    el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
    io.observe(el);
  });

  /* ---------- Icons ---------- */
  if (window.lucide) lucide.createIcons();
})();
