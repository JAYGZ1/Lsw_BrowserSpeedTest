const LANGUAGES = {
  zh: {
    statusWaiting: "等待页面加载完成",
    statusComplete: "页面加载完成",
    dns: "DNS解析",
    connection: "建立连接",
    download: "接收数据",
    complete: "页面完成"
  },

  en: {
    statusWaiting: "Waiting for page load",
    statusComplete: "Page load complete",
    dns: "DNS Lookup",
    connection: "Connection",
    download: "Data Transfer",
    complete: "Page Complete"
  }
};

let currentLanguage = "zh";

function formatSeconds(milliseconds) {
  if (!Number.isFinite(milliseconds)) {
    return "-- s";
  }

  return (milliseconds / 1000).toFixed(2) + " s";
}

function updateLanguageUI() {
  const language = LANGUAGES[currentLanguage];

  document.getElementById("status").textContent =
    language.statusWaiting;

  document.querySelector(".row:nth-child(1) span:first-child").textContent =
    language.dns;

  document.querySelector(".row:nth-child(2) span:first-child").textContent =
    language.connection;

  document.querySelector(".row:nth-child(3) span:first-child").textContent =
    language.download;

  document.querySelector(".row:nth-child(4) span:first-child").textContent =
    language.complete;

  document.getElementById("langZh").classList.toggle(
    "active",
    currentLanguage === "zh"
  );

  document.getElementById("langEn").classList.toggle(
    "active",
    currentLanguage === "en"
  );

  document.documentElement.lang =
    currentLanguage === "zh" ? "zh-CN" : "en";
}

function showResult(result) {
  if (!result) {
    return;
  }

  document.getElementById("mainTime").textContent =
    formatSeconds(result.totalMs);

  document.getElementById("status").textContent =
    LANGUAGES[currentLanguage].statusComplete;

  document.getElementById("dns").textContent =
    formatSeconds(result.dnsMs);

  document.getElementById("connection").textContent =
    formatSeconds(result.connectionMs);

  document.getElementById("download").textContent =
    formatSeconds(result.downloadMs);

  document.getElementById("complete").textContent =
    formatSeconds(result.totalMs);
}

function setLanguage(language) {
  if (language !== "zh" && language !== "en") {
    return;
  }

  currentLanguage = language;

  chrome.storage.local.set({
    language: currentLanguage
  });

  updateLanguageUI();

  chrome.storage.local.get(["latestResult"], (data) => {
    showResult(data.latestResult);
  });
}

document.getElementById("langZh").addEventListener("click", () => {
  setLanguage("zh");
});

document.getElementById("langEn").addEventListener("click", () => {
  setLanguage("en");
});

chrome.storage.local.get(["language", "latestResult"], (data) => {
  if (data.language === "en") {
    currentLanguage = "en";
  } else {
    currentLanguage = "zh";
  }

  updateLanguageUI();
  showResult(data.latestResult);
});