let activeTabUrl = null;
let startTime = Date.now();

function getCategory(url) {
  if (url.includes("leetcode") || url.includes("github")) return "Productive";
  if (url.includes("youtube") || url.includes("instagram")) return "Unproductive";
  return "Neutral";
}

async function trackTime(newTab) {
  const endTime = Date.now();
  const duration = Math.floor((endTime - startTime) / 1000); // seconds

  if (activeTabUrl) {
    await fetch("http://localhost:3000/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: activeTabUrl,
        duration: duration,
        category: getCategory(activeTabUrl)
      })
    });
  }

  activeTabUrl = newTab.url;
  startTime = Date.now();
}

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const newTab = await chrome.tabs.get(activeInfo.tabId);
  if (newTab.url.startsWith("http")) {
    trackTime(newTab);
  }
});

chrome.runtime.onStartup.addListener(() => {
  activeTabUrl = null;
  startTime = Date.now();
});
