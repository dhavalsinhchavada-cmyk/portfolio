/* Portfolio interactions. Content comes from data/data.js (window.PORTFOLIO). */
(function () {
  "use strict";
  var D = window.PORTFOLIO;
  if (!D) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var icon = {
    download: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m-5-5 5 5 5-5M5 20h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4zM4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 9.5v8M6.5 6.5v.01M10.5 17.5v-8m0 3.5c0-2 1.3-3.6 3.2-3.6s2.8 1.3 2.8 3.4v4.7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 9.5c.3 2 2.2 4.2 4.6 4.8l1.2-1.1 1.6.9c-.3 1-1.2 1.6-2.2 1.5C11.4 15.3 8.6 12.5 8.4 9.7c-.1-1 .5-1.9 1.5-2.2l.9 1.6Z" fill="currentColor"/></svg>',
    arrow: '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    image: '<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3 16l5-5 4 4 3-3 6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    person: '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    screen: '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 20h8M12 16v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    cast: '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M4 12a8 8 0 0 1 8 8M4 16a4 4 0 0 1 4 4M4 20h.01" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
  };
  var C = D.contact || {};

  /* Run once when an element scrolls into view; the element is already complete at rest. */
  function onView(el, fn, threshold) {
    if (!el) return;
    if (reduce || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { fn(el); io.disconnect(); } });
    }, { threshold: threshold || 0.3 });
    io.observe(el);
  }

  /* ---------------- HERO ---------------- */
  var ci = 0;
  $("heroName").innerHTML = D.name.split(" ").map(function (word) {
    return '<span class="word">' + word.split("").map(function (ch) {
      return '<span class="ch" style="animation-delay:' + (reduce ? 0 : (ci++) * 32) + 'ms">' + esc(ch) + "</span>";
    }).join("") + "</span>";
  }).join(" ");
  $("heroName").setAttribute("aria-label", D.name);
  $("heroHeadline").textContent = D.headline;
  $("heroIntro").textContent = D.intro;
  $("availText").textContent = D.availability;
  $("heroChips").innerHTML = D.chips.map(function (c, i) {
    return '<li style="animation-delay:' + (300 + i * 80) + 'ms">' + esc(c) + "</li>";
  }).join("");

  var ctas = [];
  if (C.resume) ctas.push('<a class="btn primary pulse" href="' + esc(C.resume) + '" target="_blank" rel="noopener">' + icon.download + "Download resume</a>");
  ctas.push('<a class="btn" href="#contact">' + icon.mail + "Contact me</a>");
  if (C.linkedin) ctas.push('<a class="btn" href="' + esc(C.linkedin) + '" target="_blank" rel="noopener">' + icon.linkedin + "LinkedIn</a>");
  if (C.whatsapp) ctas.push('<a class="btn" href="https://wa.me/' + esc(C.whatsapp) + '" target="_blank" rel="noopener">' + icon.whatsapp + "WhatsApp</a>");
  $("heroCtas").innerHTML = ctas.join("");

  function fmt(v, dec) {
    return dec ? v.toFixed(dec) : Math.round(v).toLocaleString("en-IN");
  }
  $("counters").innerHTML = D.counters.map(function (c, i) {
    return '<div class="counter"><b data-i="' + i + '">' + fmt(c.value, c.decimals) + "<small>" + esc(c.suffix) + "</small></b><span>" + esc(c.label) + "</span></div>";
  }).join("");
  if (!reduce) {
    var start = null, dur = 1500, nodes = $("counters").querySelectorAll("b");
    var tick = function (t) {
      if (!start) start = t;
      var p = Math.min(1, (t - start) / dur), e = 1 - Math.pow(1 - p, 3);
      nodes.forEach(function (n) {
        var c = D.counters[+n.dataset.i];
        n.firstChild.nodeValue = fmt(c.value * e, c.decimals);
      });
      if (p < 1) requestAnimationFrame(tick);
    };
    setTimeout(function () { requestAnimationFrame(tick); }, 250);
  }

  /* Typewriter role line */
  (function () {
    var el = $("typed"), roles = D.roles, r = 0, i = roles[0].length, del = true;
    el.textContent = roles[0];
    if (reduce) { el.textContent = roles.join(" · "); return; }
    function step() {
      var word = roles[r];
      if (del) {
        i--; el.textContent = word.slice(0, i);
        if (i <= 0) { del = false; r = (r + 1) % roles.length; setTimeout(step, 300); return; }
        setTimeout(step, 38);
      } else {
        word = roles[r]; i++; el.textContent = word.slice(0, i);
        if (i >= word.length) { del = true; setTimeout(step, 1700); return; }
        setTimeout(step, 70);
      }
    }
    setTimeout(step, 2200);
  })();

  /* Hero background: slow drifting data points joined by faint lines (desktop only) */
  (function () {
    var cv = $("heroCanvas");
    if (!cv || reduce || window.innerWidth < 900 || !cv.getContext) return;
    var ctx = cv.getContext("2d"), pts = [], w, h, dpr = Math.min(2, window.devicePixelRatio || 1), running = true;
    function size() {
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    for (var k = 0; k < 46; k++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 });
    function color() { return getComputedStyle(document.documentElement).getPropertyValue("--teal").trim() || "#0b7377"; }
    var col = color();
    new MutationObserver(function () { col = color(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () { col = color(); });
    window.addEventListener("resize", size);
    new IntersectionObserver(function (e) { running = e[0].isIntersecting; if (running) requestAnimationFrame(draw); }).observe(cv);
    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = col; ctx.strokeStyle = col;
      for (var a = 0; a < pts.length; a++) {
        var p = pts[a];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.globalAlpha = .35; ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 6.283); ctx.fill();
        for (var b = a + 1; b < pts.length; b++) {
          var q = pts[b], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
          if (d < 15000) { ctx.globalAlpha = .12 * (1 - d / 15000); ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  })();

  /* ---------------- ABOUT ---------------- */
  $("aboutStory").innerHTML = D.about.story.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("flipCards").innerHTML = D.about.cards.map(function (c, i) {
    return '<button class="flip reveal" type="button" aria-label="' + esc(c.title + ": " + c.back) + '"><div class="flip-inner">' +
      '<div class="face front"><span class="num">0' + (i + 1) + '</span><h3>' + esc(c.title) + "</h3><p>" + esc(c.front) + '</p><span class="hint">Hover or tap for proof</span></div>' +
      '<div class="face back"><h3>' + esc(c.title) + "</h3><p>" + esc(c.back) + '</p><span class="hint">Tap to flip back</span></div></div></button>';
  }).join("");
  $("flipCards").addEventListener("click", function (e) {
    var b = e.target.closest(".flip"); if (b) b.classList.toggle("flipped");
  });

  /* ---------------- IMPACT: tile map ---------------- */
  var TILES = [
    ["JK", "Jammu & Kashmir", 3, 0], ["LA", "Ladakh", 4, 0],
    ["PB", "Punjab", 2, 1], ["HP", "Himachal Pradesh", 3, 1], ["UK", "Uttarakhand", 4, 1],
    ["RJ", "Rajasthan", 1, 2], ["HR", "Haryana", 2, 2], ["DL", "Delhi", 3, 2], ["UP", "Uttar Pradesh", 4, 2], ["BR", "Bihar", 5, 2], ["SK", "Sikkim", 6, 2], ["AR", "Arunachal Pradesh", 8, 2],
    ["GJ", "Gujarat", 1, 3], ["MP", "Madhya Pradesh", 2, 3], ["CG", "Chhattisgarh", 3, 3], ["JH", "Jharkhand", 4, 3], ["WB", "West Bengal", 5, 3], ["AS", "Assam", 7, 3], ["NL", "Nagaland", 8, 3],
    ["MH", "Maharashtra", 2, 4], ["TS", "Telangana", 3, 4], ["OD", "Odisha", 4, 4], ["ML", "Meghalaya", 7, 4], ["MN", "Manipur", 8, 4],
    ["GA", "Goa", 1, 5], ["KA", "Karnataka", 2, 5], ["AP", "Andhra Pradesh", 3, 5], ["TR", "Tripura", 7, 5], ["MZ", "Mizoram", 8, 5],
    ["KL", "Kerala", 2, 6], ["TN", "Tamil Nadu", 3, 6]
  ];
  var on = {}; D.states.forEach(function (s, i) { on[s] = i; });
  var S = 52, G = 6, svg = '<svg viewBox="0 0 ' + (9 * (S + G) + G) + " " + (7 * (S + G) + G) + '" role="group" aria-label="Tile map of Indian states; ' + D.states.length + ' programme states highlighted">';
  TILES.forEach(function (t) {
    var x = G + t[2] * (S + G), y = G + t[3] * (S + G), isOn = t[0] in on;
    svg += '<g class="tile' + (isOn ? " on" : "") + '" tabindex="0" role="button" data-name="' + esc(t[1]) + '" data-on="' + (isOn ? 1 : 0) + '" style="--i:' + (isOn ? on[t[0]] : 0) + '" aria-label="' + esc(t[1]) + (isOn ? ", programme state" : "") + '">' +
      '<rect x="' + x + '" y="' + y + '" width="' + S + '" height="' + S + '" rx="9"/>' +
      '<text x="' + (x + S / 2) + '" y="' + (y + S / 2 + 4) + '" text-anchor="middle">' + t[0] + "</text></g>";
  });
  svg += "</svg>";
  var map = $("tileMap");
  map.innerHTML = svg;
  function pickTile(g) {
    map.querySelectorAll(".tile.sel").forEach(function (x) { x.classList.remove("sel"); });
    g.classList.add("sel");
    $("mapCaption").innerHTML = "<strong>" + esc(g.dataset.name) + "</strong> · " + (g.dataset.on === "1" ? "programme state" : "not a programme state");
  }
  map.addEventListener("click", function (e) { var g = e.target.closest(".tile"); if (g) pickTile(g); });
  map.addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && e.target.closest(".tile")) { e.preventDefault(); pickTile(e.target.closest(".tile")); } });
  onView(map, function (el) { el.classList.add("play"); }, 0.35);

  $("footprint").innerHTML = D.footprint.map(function (f) {
    return '<div class="fp-step"><b>' + esc(f.value) + "</b><span>" + esc(f.label) + "</span></div>";
  }).join("");

  var total = D.careerYears.reduce(function (a, b) { return a + b.years; }, 0);
  var shades = ["var(--teal)", "var(--saffron)", "color-mix(in srgb, var(--teal) 45%, var(--surface-2))", "color-mix(in srgb, var(--muted) 55%, var(--surface-2))"];
  $("yearsBar").innerHTML = D.careerYears.map(function (c, i) {
    return '<i style="width:' + (c.years / total * 100).toFixed(2) + "%;background:" + shades[i % shades.length] + ";--i:" + i + '" title="' + esc(c.label + ": " + c.years + " years") + '"></i>';
  }).join("");
  $("yearsBar").setAttribute("aria-label", D.careerYears.map(function (c) { return c.label + " " + c.years + " years"; }).join(", "));
  $("yearsLegend").innerHTML = D.careerYears.map(function (c, i) {
    return '<li><span class="sw" style="background:' + shades[i % shades.length] + '"></span><span>' + esc(c.label) + "<small>" + esc(c.note) + "</small></span><b>" + c.years.toFixed(1) + " yrs</b></li>";
  }).join("");
  onView($("yearsBar"), function (el) { el.classList.add("play"); }, 0.6);

  /* ---------------- CAREER ---------------- */
  $("ladder").innerHTML = D.ladder.map(function (s, i) {
    return '<div class="step' + (i === D.ladder.length - 1 ? " top" : "") + '" style="--i:' + i + '"><b>' + (i === 0 ? "2012" : i === D.ladder.length - 1 ? "Now" : "Step " + (i + 1)) + "</b><span>" + esc(s) + "</span></div>";
  }).join("");
  onView($("ladder"), function (el) { el.classList.add("play"); }, 0.4);

  $("timeline").innerHTML = D.timeline.map(function (t) {
    return '<li class="tl-item reveal' + (t.current ? " current" : "") + '"><details' + (t.current ? " open" : "") + "><summary>" +
      '<span class="tl-role">' + esc(t.role) + '</span><span class="tl-dates">' + esc(t.dates) + '</span><span class="tl-org">' + esc(t.org) + "</span></summary>" +
      "<ul>" + t.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></details></li>";
  }).join("");

  /* ---------------- PROJECTS ---------------- */
  $("filters").innerHTML = D.projectFilters.map(function (f, i) {
    return '<button class="filter" type="button" aria-pressed="' + (i === 0) + '" data-f="' + esc(f) + '">' + esc(f) + "</button>";
  }).join("");
  $("projectGrid").classList.add("all");
  $("projectGrid").innerHTML = D.projects.map(function (p, i) {
    return '<button class="p-card" type="button" data-i="' + i + '" data-tag="' + esc(p.tag) + '">' +
      '<span class="p-tag">' + esc(p.tag) + "</span><h3>" + esc(p.title) + "</h3><p class=\"muted\">" + esc(p.problem.split(". ")[0].replace(/\.$/, "")) + ".</p>" +
      '<ul class="chips p-tools">' + p.tools.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
      '<div class="p-result"><b>' + esc(p.result) + "</b><span>" + esc(p.resultLabel) + '</span></div><span class="p-more">Read the case study ' + icon.arrow + "</span></button>";
  }).join("");
  $("filters").addEventListener("click", function (e) {
    var b = e.target.closest(".filter"); if (!b) return;
    $("filters").querySelectorAll(".filter").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
    var f = b.dataset.f, n = 0;
    $("projectGrid").classList.toggle("all", f === "All");
    $("projectGrid").querySelectorAll(".p-card").forEach(function (c) {
      var show = f === "All" || c.dataset.tag === f;
      c.classList.toggle("hide", !show);
      c.classList.remove("enter");
      if (show) { void c.offsetWidth; c.style.setProperty("--i", n++); c.classList.add("enter"); }
    });
  });

  var modal = $("modal"), lastFocus = null;
  function openProject(i) {
    var p = D.projects[i];
    $("modalBody").innerHTML =
      '<div class="modal-top"><div><span class="p-tag">' + esc(p.tag) + '</span><h3 id="modalTitle">' + esc(p.title) + '</h3></div>' +
      '<button class="icon-btn" type="button" data-close aria-label="Close">' + icon.close + "</button></div>" +
      '<div class="m-result"><b>' + esc(p.result) + "</b><span>" + esc(p.resultLabel) + "</span></div>" +
      '<div class="m-block"><h4>Problem</h4><p>' + esc(p.problem) + "</p></div>" +
      '<div class="m-block"><h4>My role</h4><p>' + esc(p.role) + "</p></div>" +
      '<div class="m-block"><h4>Approach</h4><ul>' + p.approach.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="m-block"><h4>Tools</h4><ul class="chips">' + p.tools.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div>";
    lastFocus = document.activeElement;
    if (modal.showModal) modal.showModal(); else modal.setAttribute("open", "");
  }
  function closeModal() { if (modal.close) modal.close(); else modal.removeAttribute("open"); }
  modal.addEventListener("close", function () { if (lastFocus) lastFocus.focus(); });
  modal.addEventListener("click", function (e) { if (e.target === modal || e.target.closest("[data-close]")) closeModal(); });
  (function () { // swipe down to close on touch screens
    var y0 = null;
    modal.addEventListener("touchstart", function (e) { y0 = e.touches[0].clientY; }, { passive: true });
    modal.addEventListener("touchend", function (e) { if (y0 !== null && e.changedTouches[0].clientY - y0 > 110 && modal.scrollTop <= 0) closeModal(); y0 = null; });
  })();
  $("projectGrid").addEventListener("click", function (e) { var c = e.target.closest(".p-card"); if (c) openProject(+c.dataset.i); });

  // Gentle tilt on cards for mouse users
  if (!reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    $("projectGrid").addEventListener("mousemove", function (e) {
      var c = e.target.closest(".p-card"); if (!c) return;
      var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.style.transform = "perspective(800px) rotateX(" + (-y * 5).toFixed(2) + "deg) rotateY(" + (x * 6).toFixed(2) + "deg) translateY(-3px)";
    });
    $("projectGrid").addEventListener("mouseout", function (e) {
      var c = e.target.closest(".p-card"); if (c && !c.contains(e.relatedTarget)) c.style.transform = "";
    });
  }

  /* ---------------- DASHBOARDS ---------------- */
  $("dashTools").textContent = D.dashboards.tools + ". Pick a sales level to see what it tracks.";
  function shot(d) {
    return d.image
      ? '<div class="shot"><img src="' + esc(d.image) + '" alt="' + esc(d.name + " for " + d.level) + '" loading="lazy"></div>'
      : '<div class="shot"><div>' + icon.image + "<br>Screenshot with masked data coming soon</div></div>";
  }
  function panel(d) {
    return '<span class="who">' + esc(d.level) + "</span><h3>" + esc(d.name) + "</h3>" +
      '<ul class="track-list">' + d.tracks.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" + shot(d);
  }
  $("dashTree").innerHTML = D.dashboards.sales.map(function (d, i) {
    return '<button class="dash-node" type="button" role="tab" id="dn' + i + '" aria-controls="dashPanel" aria-selected="' + (i === 0) + '" data-i="' + i + '"><span><b>Level ' + (i + 1) + "</b><br><span>" + esc(d.level) + "</span></span></button>";
  }).join("");
  $("dashTree").insertAdjacentHTML("beforeend", '<p class="dash-hint">Each level sees the same measures for its own team, zone or region.</p>');
  $("dashPanel").innerHTML = panel(D.dashboards.sales[0]);
  $("dashTree").addEventListener("click", function (e) {
    var b = e.target.closest(".dash-node"); if (!b) return;
    $("dashTree").querySelectorAll(".dash-node").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
    var p = $("dashPanel");
    p.innerHTML = panel(D.dashboards.sales[+b.dataset.i]);
    p.classList.remove("swap"); void p.offsetWidth; p.classList.add("swap");
  });
  $("dashOthers").innerHTML = D.dashboards.other.map(function (d) {
    return '<article class="dash-card reveal">' + panel(d) + "</article>";
  }).join("");
  document.addEventListener("click", function (e) { // simple lightbox for real screenshots
    var img = e.target.closest(".shot img"); if (!img) return;
    $("modalBody").innerHTML = '<div class="modal-top"><h3 id="modalTitle">' + esc(img.alt) + '</h3><button class="icon-btn" type="button" data-close aria-label="Close">' + icon.close + '</button></div><img src="' + esc(img.src) + '" alt="' + esc(img.alt) + '">';
    lastFocus = img; modal.showModal();
  });

  /* ---------------- SKILLS ---------------- */
  var lvl = ["", "Learning", "Proficient", "Advanced"], k = 0;
  $("skillGrid").innerHTML = D.skills.map(function (g) {
    return '<div class="skill-card reveal"><h3>' + esc(g.group) + "</h3>" + g.items.map(function (it) {
      var bars = ""; for (var j = 1; j <= 3; j++) bars += '<i class="' + (j <= it[1] ? "on" : "") + '" style="--i:' + (k++ % 9) + '"></i>';
      return '<div class="skill-row"><span>' + esc(it[0]) + (it[1] === 1 ? '<span class="learning-tag">learning</span>' : "") + '</span><span class="meter" role="img" aria-label="' + lvl[it[1]] + '">' + bars + "</span></div>";
    }).join("") + "</div>";
  }).join("") + '<div class="skill-card reveal"><h3>Also strong in</h3><ul class="chips">' +
    D.softSkills.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div>";
  onView($("skillGrid"), function (el) { el.classList.add("play"); }, 0.2);

  /* ---------------- TRAINING ---------------- */
  $("trainStats").innerHTML = D.training.stats.map(function (s) {
    return '<div class="t-stat"><b>' + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div>";
  }).join("");
  var modeIcons = [icon.person, icon.screen, icon.cast];
  $("trainModes").innerHTML = D.training.modes.map(function (m, i) { return "<li>" + modeIcons[i % 3] + esc(m) + "</li>"; }).join("");
  $("trainAudience").innerHTML = D.training.audiences.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");

  /* ---------------- TESTIMONIALS (hidden until quotes are added) ---------------- */
  if (D.testimonials && D.testimonials.length) {
    $("testimonials").hidden = false;
    $("quotes").innerHTML = D.testimonials.map(function (q) {
      return '<figure class="quote"><p>“' + esc(q.quote) + '”</p><cite>' + esc(q.name) + " · " + esc(q.title) + "</cite></figure>";
    }).join("");
    if (!reduce && D.testimonials.length > 1) {
      var track = $("quotes"), paused = false;
      track.addEventListener("mouseenter", function () { paused = true; });
      track.addEventListener("mouseleave", function () { paused = false; });
      setInterval(function () {
        if (paused) return;
        var max = track.scrollWidth - track.clientWidth;
        track.scrollTo({ left: track.scrollLeft >= max - 4 ? 0 : track.scrollLeft + track.clientWidth * 0.9, behavior: "smooth" });
      }, 5000);
    }
  }

  /* ---------------- EDUCATION ---------------- */
  $("eduGrid").innerHTML = D.education.map(function (e) {
    return '<article class="edu-card reveal">' + (e.year ? '<span class="yr' + (e.year === "Learning" ? " learn" : "") + '">' + esc(e.year) + "</span>" : "") +
      "<h3>" + esc(e.title) + '</h3><p class="muted">' + esc(e.detail) + "</p></article>";
  }).join("");
  $("languages").innerHTML = D.languages.map(function (l) { return '<span class="lang">' + esc(l) + "</span>"; }).join("");

  /* ---------------- CONTACT ---------------- */
  var rows = [];
  rows.push('<li><span class="lbl">Email</span><span class="val" id="emailVal">' + esc(C.email) + '</span><button class="copy-btn" type="button" id="copyEmail">Copy</button></li>');
  if (C.phone) rows.push('<li><span class="lbl">Phone</span><span class="val">' + esc(C.phone) + "</span>" + (C.whatsapp ? '<a href="https://wa.me/' + esc(C.whatsapp) + '" target="_blank" rel="noopener">WhatsApp</a>' : "") + "</li>");
  if (C.linkedin) rows.push('<li><span class="lbl">LinkedIn</span><a href="' + esc(C.linkedin) + '" target="_blank" rel="noopener">' + esc(C.linkedin.replace(/^https?:\/\/(www\.)?/, "")) + "</a></li>");
  if (C.github) rows.push('<li><span class="lbl">GitHub</span><a href="' + esc(C.github) + '" target="_blank" rel="noopener">' + esc(C.github.replace(/^https?:\/\//, "")) + "</a></li>");
  rows.push('<li><span class="lbl">Based in</span><span class="val">' + esc(C.location) + "</span></li>");
  if (C.resume) rows.push('<li><a class="btn primary" href="' + esc(C.resume) + '" target="_blank" rel="noopener">' + icon.download + "Download resume (PDF)</a></li>");
  $("contactList").innerHTML = rows.join("");
  $("copyEmail").addEventListener("click", function () {
    var b = this;
    var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 1800); };
    try {
      navigator.clipboard.writeText(C.email).then(done, function () { selectText($("emailVal")); });
    } catch (err) { selectText($("emailVal")); }
  });
  function selectText(el) { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }

  var tickSvg = '<svg class="check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  $("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = this, note = $("formNote"), name = $("cfName").value.trim(), from = $("cfEmail").value.trim(), msg = $("cfMsg").value.trim();
    note.className = "form-note";
    if (!name || !/^\S+@\S+\.\S+$/.test(from) || !msg) { note.textContent = "Please add your name, a valid email and a message."; return; }
    if (C.formspreeId) {
      $("cfSubmit").disabled = true; note.textContent = "Sending…";
      fetch("https://formspree.io/f/" + encodeURIComponent(C.formspreeId), {
        method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: from, message: msg })
      }).then(function (r) {
        if (!r.ok) throw new Error();
        note.className = "form-note ok"; note.innerHTML = tickSvg + "Thanks, " + esc(name) + ". Your message is on its way."; f.reset();
      }).catch(function () {
        note.textContent = "The message could not be sent. Please email " + C.email + " directly.";
      }).finally(function () { $("cfSubmit").disabled = false; });
    } else {
      var body = msg + "\n\n— " + name + " (" + from + ")";
      window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Portfolio enquiry from " + name) + "&body=" + encodeURIComponent(body);
      note.className = "form-note ok";
      note.innerHTML = tickSvg + "Your email app should open with the message ready. If it doesn't, write to " + esc(C.email) + ".";
    }
  });

  /* ---------------- NAV, PROGRESS, THEME ---------------- */
  var bar = $("progressBar"), topbar = $("topbar"), toTop = $("toTop");
  function onScroll() {
    var h = document.documentElement, max = h.scrollHeight - h.clientHeight, y = h.scrollTop || document.body.scrollTop;
    bar.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    topbar.classList.toggle("scrolled", y > 8);
    toTop.classList.toggle("show", y > window.innerHeight * 0.8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  if ("IntersectionObserver" in window) {
    var secIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navLinks.forEach(function (a) { var s = document.querySelector(a.getAttribute("href")); if (s) secIO.observe(s); });
  }
  var nav = $("nav"), menuBtn = $("menuBtn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });

  var root = document.documentElement;
  try { var saved = localStorage.getItem("dc-theme"); if (saved) root.setAttribute("data-theme", saved); } catch (err) {}
  $("themeBtn").addEventListener("click", function () {
    var cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("dc-theme", next); } catch (err) {}
  });

  var yr = $("year"); if (yr) yr.textContent = new Date().getFullYear();
})();
