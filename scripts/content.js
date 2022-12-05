console.log("%c[Auto Refresh Stream]", "color: purple", "Waiting for the stat count to show up");
// Watch for changes to the user's delayThreshhold & apply them
chrome.storage.onChanged.addListener((changes, area) => {
    let newDelayThreshhold;
    if (area === "sync" && changes.delayThreshhold?.newValue) {
        newDelayThreshhold = changes.delayThreshhold.newValue.value;
        console.log("%c[Auto Refresh Stream]\n", "color: purple", "Set delayThreshhold: ", newDelayThreshhold);
    }
});

const getDelayThreshhol = async () => {
    return await chrome.storage.sync.get("delayThreshhold");
};

const checkStreamDelay = async (delay) => {
    const $resetButton = document.querySelector(
        "#root > div > div.Layout-sc-1xcs6mc-0.kBprba > nav > div > div.Layout-sc-1xcs6mc-0.dhONRu > div:nth-child(3) > div > div:nth-child(1) > div.Layout-sc-1xcs6mc-0.kcpvcV > a > div > div.Layout-sc-1xcs6mc-0.hpiroE > div.Layout-sc-1xcs6mc-0.fQKmDn > p"
    );
    const delayThreshholValue = {};
    const data = await getDelayThreshhol();
    Object.assign(delayThreshholValue, data.delayThreshhold);
    $resetButton.addEventListener("dblclick", function () {
        this.style.color = "red";
        console.log("Mouse Clicked");
    });
    if (delay > delayThreshholValue.value) {
        // console.log("%c[Auto Refresh Stream]", "color: purple", $delay);
        console.warn("%c[Auto Refresh Stream]", "color: purple", "Refresh the stream");
        const doubleClickEvent = new Event("dblclick");
        $resetButton.dispatchEvent(doubleClickEvent);
    }
};

// First the function wait for the promise then we set a timeout of 60 seconds so the adblocker
// can block ads whitout the page refreshing because the delay is too high.
// Finally i check every 5 seconds if the delay is less than the delaythrehhold.
waitForElement(".ffz-stat-text").then((element) => {
    console.log("%c[Auto Refresh Stream]", "color: purple", "the delay count is here!");
    setInterval(() => {
        // console.log("%c[Auto Refresh Stream]", "color: purple", $delay);
        setTimeout(() => {
            let delay = parseFloat(element.textContent);
            checkStreamDelay(delay);
        }, 1000);
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
