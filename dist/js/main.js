"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//loading image
$(window).load(function () {
  $('.loader').fadeOut('slow');
}); //Are you 18? if not why are you here?

var birthday = document.querySelector('#birthday-please');
var radioBtns = document.querySelectorAll('input[type="radio"]');

var _iterator = _createForOfIteratorHelper(radioBtns),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var button = _step.value;
    button.addEventListener('click', function () {
      if (this.value === 'no') {
        birthday.style.visibility = 'hidden';
      } else {
        birthday.style.visibility = '';
      }
    });
  } //birthday dropdown

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var dayDrop = document.querySelector('#day');
var d = 1;

while (d <= 31) {
  var days = document.createElement('option');
  days.setAttribute('value', d);
  days.setAttribute('placeholder', d); // days.setAttribute('required', '');
  // days.setAttribute('aria-required', 'true');

  days.setAttribute('aria-placeholder', d);
  dayDrop.appendChild(days);
  days.innerText = d;
  d++;
}

var yearDrop = document.querySelector('#year');
var y = 2002;

while (y >= 1920) {
  var years = document.createElement('option');
  years.setAttribute('value', y);
  years.setAttribute('placeholder', y); // years.setAttribute('required', '');
  // years.setAttribute('aria-required', 'true');

  years.setAttribute('aria-placeholder', y);
  yearDrop.appendChild(years);
  years.innerText = y;
  y--;
}

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthDrop = document.querySelector('#month');

for (var m in months) {
  var month = document.createElement('option');
  month.setAttribute('value', months[m]);
  month.setAttribute('placeholder', months[m]);
  month.setAttribute('aria-placeholder', months[m]); // month.setAttribute('required', '');
  // month.setAttribute('aria-required', 'true');

  monthDrop.appendChild(month);
  month.innerText = months[m];
}
//# sourceMappingURL=main.js.map
