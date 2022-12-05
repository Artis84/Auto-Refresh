console.log("%c[Auto Refresh Stream]", "color: purple", "Waiting for the stat count to show up");

// Watch for changes to the user's delayThreshhold & apply them
let delayThreshhold;
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes.delayThreshhold?.newValue) {
        delayThreshhold = changes.delayThreshhold.newValue.value;
        console.log("%c[Auto Refresh Stream]\n", "color: purple", "Set delayThreshhold: ", delayThreshhold);
    }
});

// First the function wait for the promise then we set a timeout of 60 seconds so the adblocker i use can block ads whitout the page refreshing because the delay is too high.
// Finally i check every 5 seconds if the delay is less than the delaythrehhold.
waitForElement("button:nth-child(4) > div > span.ffz-stat-text").then((element) => {
    console.log("%c[Auto Refresh Stream]", "color: purple", "the delay count is here!");
    setInterval(() => {
        // console.log("%c[Auto Refresh Stream]", "color: purple", $delay);
        setTimeout((delay) => {
            let delayValue = parseFloat(element.textContent);
            delay = delayValue;
            if (delay > delayThreshhold) {
                // console.log("%c[Auto Refresh Stream]", "color: purple", $delay);
                console.warn("%c[Auto Refresh Stream]", "color: purple", "Refresh the stream");
                location.reload();
            }
        }, 60000);
    }, 5000);
});

/**
 *
 * @param {*} selector
 * @returns A promise containing the element wanted
 */
function waitForElement(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}
