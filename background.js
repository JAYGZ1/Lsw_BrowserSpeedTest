chrome.runtime.onMessage.addListener((message) => {
  if (!message || message.type !== "PAGE_SPEED_RESULT") {
    return;
  }

  const totalSeconds = Number(message.totalSeconds || 0);
  const badgeText = totalSeconds.toFixed(2);

  chrome.storage.local.set({
    latestResult: message
  });

  chrome.action.setBadgeText({
    text: badgeText
  });

  chrome.action.setBadgeBackgroundColor({
    color: "#555555"
  });
});
