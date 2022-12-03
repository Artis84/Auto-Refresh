document.getElementById("delay").addEventListener("change", function () {
    console.log("hit");
    const $delayThreshhold = this.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { data: $delayThreshhold });
        console.log("%c[Auto Refresh Stream]", "color: purple", $delayThreshhold);
    });
});
