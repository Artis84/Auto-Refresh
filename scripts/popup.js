const options = {};
const $delayThreshhold = document.getElementById("delay");
const $delayInterval = document.getElementById("interval");
const $link = document.getElementById("link");

// Persist every changes on the delayThreshhold object.
$delayThreshhold.addEventListener("change", function () {
    options.delayThreshhold = this.value;
    chrome.storage.sync.set({ options });
});

// Persist every changes on the delayInterval object.
$delayInterval.addEventListener("change", function () {
    options.delayInterval = this.value;
    chrome.storage.sync.set({ options });
});

$link.addEventListener("click", function () {
    chrome.tabs.create({ url: "https://github.com/Artis84/Auto-Refresh-Stream" });
});

// Set the value input with the delayThreshhold get from the chrome storage sync
const data = await chrome.storage.sync.get("options");
Object.assign(options, data.options);
$delayThreshhold.value = options.delayThreshhold;
$delayInterval.value = options.delayInterval;
