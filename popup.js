function formatSeconds(milliseconds) {
  if (!Number.isFinite(milliseconds)) {
    return "-- s";
  }

  return (milliseconds / 1000).toFixed(2) + " s";
}

function showResult(result) {
  if (!result) {
    return;
  }

  document.getElementById("mainTime").textContent =
    formatSeconds(result.totalMs);

  document.getElementById("status").textContent =
    "页面加载完成";

  document.getElementById("dns").textContent =
    formatSeconds(result.dnsMs);

  document.getElementById("connection").textContent =
    formatSeconds(result.connectionMs);

  document.getElementById("download").textContent =
    formatSeconds(result.downloadMs);

  document.getElementById("complete").textContent =
    formatSeconds(result.totalMs);
}

chrome.storage.local.get(["latestResult"], (data) => {
  showResult(data.latestResult);
});
