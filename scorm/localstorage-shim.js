/**
 * localStorage shim — IPAG Onboarding Handbook (bản SCORM)
 * Một số LMS nhúng nội dung trong iframe sandbox -> localStorage ném lỗi,
 * làm trắng trang. Script này kiểm tra trước; nếu không dùng được thì thay
 * bằng bộ nhớ tạm trong RAM để handbook vẫn chạy (đóng tab thì quên lựa chọn SBU).
 * PHẢI nạp TRƯỚC content.js.
 */
(function () {
  "use strict";
  var usable = false;
  try {
    var k = "__ipag_probe__";
    window.localStorage.setItem(k, "1");
    window.localStorage.removeItem(k);
    usable = true;
  } catch (e) { usable = false; }
  if (usable) return;
  console.warn("[SCORM] localStorage bị chặn — chuyển sang bộ nhớ tạm.");
  var mem = {};
  var shim = {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null; },
    setItem: function (k, v) { mem[k] = String(v); },
    removeItem: function (k) { delete mem[k]; },
    clear: function () { mem = {}; },
    key: function (i) { var ks = Object.keys(mem); return i < ks.length ? ks[i] : null; },
    get length() { return Object.keys(mem).length; }
  };
  try {
    Object.defineProperty(window, "localStorage", { value: shim, configurable: true, writable: true });
  } catch (e) {
    try { window.localStorage = shim; } catch (e2) { console.error("[SCORM] Không thay được localStorage:", e2); }
  }
})();
