const delayThreshhold = {};
const $delay = document.getElementById("delay");

// Persist every changes on the delayThreshhold object.
$delay.addEventListener("change", function () {
    delayThreshhold.value = this.value;
    chrome.storage.sync.set({ delayThreshhold });
});

// Set the value input with the delayThreshhold get from the chrome storage sync
const data = await chrome.storage.sync.get("delayThreshhold");
Object.assign(delayThreshhold, data.delayThreshhold);
$delay.value = delayThreshhold.value;
