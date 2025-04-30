chrome.action.onClicked.addListener(async (tab) => {
  if (!tab || !tab.id) return;

  const tabId = tab.id;

  // Move the tab into a new window
  chrome.windows.create({ tabId: tabId });
});