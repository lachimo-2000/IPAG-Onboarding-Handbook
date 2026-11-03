/**
 * SCORM 1.2 Wrapper — IPAG Onboarding Handbook
 * Compatible: TalentLMS (primary), Moodle
 * Encoding: UTF-8
 *
 * Completion logic: "XEM ĐỦ CÁC MODULE CHÍNH".
 * Người học mở đủ các module trong REQUIRED_MODULES -> lesson_status = "completed".
 * Tiến độ được lưu vào cmi.suspend_data nên không mất khi thoát ra vào lại.
 */

var ScormWrapper = (function () {
  var API = null;
  var initialized = false;
  var completionSent = false;
  var viewed = {}; // tập module đã xem { id: true }

  // ── CẤU HÌNH: các module tính vào "hoàn thành" ──────────────
  // Sửa danh sách này nếu muốn đổi định nghĩa "module chính".
  // (Bỏ nguon-luc / glossary / faq vì là mục tra cứu, không bắt buộc xem hết.)
  var REQUIRED_MODULES = [
    "dan-nhap",
    "phan-1",
    "phan-2",
    "phan-3",
    "lo-trinh",
    "dao-tao",
    "quy-dinh"
  ];

  // ── Tìm SCORM API (dò lên các frame cha + opener) ───────────
  function findAPI(win) {
    var n = 0;
    while (win.API == null && win.parent != null && win.parent != win) {
      if (++n > 10) return null;
      win = win.parent;
    }
    return win.API;
  }
  function getAPI() {
    var api = findAPI(window);
    if (api == null && window.opener != null) api = findAPI(window.opener);
    return api;
  }

  function allViewed() {
    for (var i = 0; i < REQUIRED_MODULES.length; i++) {
      if (!viewed[REQUIRED_MODULES[i]]) return false;
    }
    return true;
  }

  function saveProgress() {
    if (!initialized || API == null) return;
    try {
      API.LMSSetValue("cmi.suspend_data", JSON.stringify({ v: Object.keys(viewed) }));
      API.LMSCommit("");
    } catch (e) {}
  }

  // ── Init ────────────────────────────────────────────────────
  function init() {
    API = getAPI();
    if (API == null) {
      console.warn("[SCORM] API not found — chạy standalone (ngoài LMS). Bình thường khi mở trực tiếp.");
      return false;
    }
    var ok = API.LMSInitialize("");
    if (ok !== "true" && ok !== true) {
      console.warn("[SCORM] LMSInitialize thất bại");
      return false;
    }
    initialized = true;

    // Khôi phục tiến độ đã lưu
    try {
      var raw = API.LMSGetValue("cmi.suspend_data");
      if (raw) {
        var data = JSON.parse(raw);
        if (data && data.v) data.v.forEach(function (id) { viewed[id] = true; });
      }
    } catch (e) {}

    var status = API.LMSGetValue("cmi.core.lesson_status");
    if (status === "completed" || status === "passed") {
      completionSent = true;
    } else {
      API.LMSSetValue("cmi.core.lesson_status", "incomplete");
    }
    API.LMSCommit("");
    console.log("[SCORM] Initialized. Đã xem:", Object.keys(viewed));

    // Nếu (nhờ tiến độ cũ) đã đủ -> chốt hoàn thành luôn
    if (allViewed()) setComplete();
    return true;
  }

  // ── Đánh dấu 1 module đã xem ───────────────────────────────
  function markViewed(id) {
    if (!id) return;
    viewed[id] = true;         // luôn ghi nhận (kể cả trước khi init xong)
    saveProgress();
    if (allViewed()) setComplete();
  }

  // ── Chốt hoàn thành ────────────────────────────────────────
  function setComplete() {
    if (completionSent || !initialized || API == null) return;
    API.LMSSetValue("cmi.core.lesson_status", "completed");
    API.LMSCommit("");
    completionSent = true;
    console.log("[SCORM] Đã gửi hoàn thành (completed).");
    var el = document.getElementById("completion-indicator");
    if (el) el.style.display = "block";
  }

  // ── Thoát ──────────────────────────────────────────────────
  function suspend() {
    if (!initialized || API == null) return;
    API.LMSSetValue("cmi.core.exit", completionSent ? "" : "suspend");
    API.LMSCommit("");
    API.LMSFinish("");
  }

  return {
    init: init,
    markViewed: markViewed,
    setComplete: setComplete,
    suspend: suspend,
    _required: REQUIRED_MODULES
  };
})();

window.addEventListener("load", function () { ScormWrapper.init(); });
window.addEventListener("beforeunload", function () { ScormWrapper.suspend(); });

// Alias ngắn để index.html gọi: SCORM.markViewed(moduleId)
window.SCORM = ScormWrapper;
