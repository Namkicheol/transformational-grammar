(function () {
  'use strict';
  if (!window.location || !document.querySelectorAll) return;
  var here = new URL(window.location.href);
  var param = 'studyNoteReturn';
  var tokenParam = 'studyNoteRestore';
  function noteUrl(value) {
    try {
      var url = new URL(value);
      if (url.protocol !== 'https:' || url.username || url.password) return null;
      if (url.origin !== 'https://etwiki.net' && url.origin !== 'https://namkicheol.github.io') return null;
      if (!/^\/(?:englisheducation|linguistics|phonetics-phonology|transformational-grammar)\/[^/]+(?:_study|_concepts)\.html$/.test(url.pathname)) return null;
      return url;
    } catch (_) { return null; }
  }
  function isDestination(url) {
    return url.protocol === 'https:' && !url.username && !url.password
      && ((url.origin === 'https://etwiki.net' && /^\/(?:(?:index|concept)\.html)?$/.test(url.pathname))
      || (url.origin === 'https://namkicheol.github.io' && /^\/testmaster\/(?:(?:index|concept)\.html)?$/.test(url.pathname)));
  }
  function read(key) {
    try { var shared = window.localStorage.getItem(key); if (shared) return JSON.parse(shared); } catch (_) {}
    try { return JSON.parse(window.sessionStorage.getItem(key)); } catch (_) { return null; }
  }
  function write(key, value) {
    try {
      var storage = window.localStorage;
      var records = [];
      for (var i = 0; i < storage.length; i++) {
        var existingKey = storage.key(i);
        if (existingKey && existingKey.indexOf('etwiki.study-note-view.v1:') === 0) {
          try { records.push({key: existingKey, time: JSON.parse(storage.getItem(existingKey)).time || 0}); }
          catch (_) { records.push({key: existingKey, time: 0}); }
        }
      }
      records.sort(function (a, b) { return b.time - a.time; });
      records.forEach(function (record, index) {
        if (index >= 79 || Date.now() - record.time >= 86400000) storage.removeItem(record.key);
      });
      storage.setItem(key, JSON.stringify(value)); return;
    } catch (_) {}
    try { window.sessionStorage.setItem(key, JSON.stringify(value)); } catch (_) {}
  }
  var source = noteUrl(here.href);
  var returnUrl = noteUrl(here.searchParams.get(param));
  var storageKey = 'etwiki.study-note-view.v1:' + here.pathname;
  var initialToken = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  var initialSaved = false;
  var gestures = new WeakMap();
  function controls() { return Array.from(document.querySelectorAll('details, .sec, .section')); }
  function sectionParts(node) {
    var header = node.querySelector && node.querySelector('.sec-header, [aria-controls]');
    var id = header && header.getAttribute('aria-controls');
    return {header: header, body: id && document.getElementById(id)};
  }
  function isOpen(node) {
    if (node.tagName === 'DETAILS') return node.open;
    if (node.classList.contains('sec')) return node.classList.contains('open');
    var parts = sectionParts(node);
    return parts.body ? !parts.body.hidden : node.classList.contains('open');
  }
  function save(token) {
    write(storageKey + ':' + token, {token: token, url: here.origin + here.pathname,
      y: window.scrollY, time: Date.now(),
      open: controls().map(isOpen)});
  }
  if (source) {
    var restoreToken = here.searchParams.get(tokenParam);
    var saved = restoreToken && read(storageKey + ':' + restoreToken);
    if (restoreToken && saved && saved.token === restoreToken && saved.url === here.origin + here.pathname
        && Array.isArray(saved.open) && Number.isFinite(saved.time)
        && Date.now() - saved.time >= 0 && Date.now() - saved.time < 86400000) {
      function restoreControls() { controls().forEach(function (node, i) {
        if (typeof saved.open[i] !== 'boolean') return;
        if (node.tagName === 'DETAILS') node.open = saved.open[i];
        else {
          node.classList.toggle('open', saved.open[i]);
          var parts = sectionParts(node);
          if (parts.header) parts.header.setAttribute('aria-expanded', String(saved.open[i]));
          if (parts.body && !node.classList.contains('sec')) parts.body.hidden = !saved.open[i];
        }
      }); }
      restoreControls();
      var cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete(tokenParam);
      try { window.history.replaceState(window.history.state, '', cleanUrl.href); } catch (_) {}
      var cancelled = false;
      ['touchstart', 'wheel', 'pointerdown', 'keydown'].forEach(function (type) {
        window.addEventListener(type, function () { cancelled = true; }, {once: true, passive: true});
      });
      function restore() { if (!cancelled) { restoreControls(); window.scrollTo(0, Math.max(0, Number(saved.y) || 0)); } }
      requestAnimationFrame(restore);
      document.addEventListener('DOMContentLoaded', function () { requestAnimationFrame(restore); }, {once: true});
      window.addEventListener('load', function () { requestAnimationFrame(restore); }, {once: true});
      // Run after the legacy hash reveal handler so it cannot overwrite the reading position.
      window.addEventListener('pageshow', function () { requestAnimationFrame(restore); }, {once: true});
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(restore);
    }
  }
  if (!source && returnUrl && isDestination(here) && !document.getElementById('study-note-return')) {
    var nav = document.createElement('nav');
    nav.id = 'study-note-return';
    nav.setAttribute('aria-label', '공부하던 노트로 돌아가기');
    nav.className = 'study-note-return';
    var button = document.createElement('a');
    button.href = returnUrl.href;
    button.textContent = '← 공부하던 노트로';
    button.className = 'study-note-return-link';
    nav.appendChild(button);
    document.body.insertBefore(nav, document.body.firstChild);
  }
  function decorate(anchor, clicked, phase) {
    if (!anchor || anchor.hasAttribute('download') || anchor.closest('#study-note-return')) return;
    var url;
    try { url = new URL(anchor.getAttribute('href'), window.location.href); } catch (_) { return; }
    if (!isDestination(url)) return;
    if (source) {
      var gesture = gestures.get(anchor);
      var token = clicked ? (phase !== 'pointerdown' && gesture && Date.now() - gesture.time < 1500 ? gesture.token
        : Date.now().toString(36) + Math.random().toString(36).slice(2, 8)) : initialToken;
      if (clicked) {
        if (phase === 'click' || phase === 'auxclick') gestures.delete(anchor);
        else gestures.set(anchor, {token: token, time: Date.now()});
      }
      var origin = new URL(here);
      origin.searchParams.delete(param);
      origin.searchParams.set(tokenParam, token);
      if (clicked || !initialSaved) { save(token); initialSaved = true; }
      url.searchParams.set(param, origin.href);
      anchor.removeAttribute('target');
    } else if (returnUrl) url.searchParams.set(param, returnUrl.href);
    else return;
    anchor.href = url.href;
  }
  if (source || returnUrl) {
    document.querySelectorAll('a[href]').forEach(function (a) { decorate(a, false); });
    document.addEventListener('click', function (event) {
      if (event.defaultPrevented) return;
      decorate(event.target.closest && event.target.closest('a[href]'), true, 'click');
    }, true);
    document.addEventListener('auxclick', function (event) {
      decorate(event.target.closest && event.target.closest('a[href]'), true, 'auxclick');
    }, true);
    ['pointerdown', 'contextmenu'].forEach(function (type) {
      document.addEventListener(type, function (event) {
        decorate(event.target.closest && event.target.closest('a[href]'), true, type);
      }, true);
    });
  }
})();
