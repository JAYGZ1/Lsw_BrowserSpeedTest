(function () {
  let reported = false;

  function sendResult() {
    if (reported) {
      return;
    }

    const navigation = performance.getEntriesByType("navigation")[0];

    if (!navigation) {
      return;
    }

    const start = navigation.startTime;

    const dns =
      navigation.domainLookupEnd > 0
        ? navigation.domainLookupEnd - navigation.domainLookupStart
        : 0;

    const connection =
      navigation.connectEnd > 0
        ? navigation.connectEnd - navigation.connectStart
        : 0;

    const download =
      navigation.responseEnd > 0
        ? navigation.responseEnd - navigation.responseStart
        : 0;

    const complete =
      navigation.loadEventEnd > 0
        ? navigation.loadEventEnd - start
        : performance.now() - start;

    const result = {
      type: "PAGE_SPEED_RESULT",
      url: location.href,
      timestamp: Date.now(),
      dnsMs: Math.max(0, dns),
      connectionMs: Math.max(0, connection),
      downloadMs: Math.max(0, download),
      totalMs: Math.max(0, complete),
      totalSeconds: Math.max(0, complete) / 1000
    };

    reported = true;

    chrome.runtime.sendMessage(result).catch(() => {});
  }

  if (document.readyState === "complete") {
    setTimeout(sendResult, 0);
  } else {
    window.addEventListener("load", () => {
      setTimeout(sendResult, 0);
    }, { once: true });
  }
})();
