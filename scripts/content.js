chrome.runtime.connect().onDisconnect.addListener(function () {
    console.log("%c[Auto Refresh Stream]", "color: purple", "Waiting for the stat count to show up");
    let delay;
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

    const checkStreamDelay = async () => {
        const $playButton = document.querySelector(
            "#channel-player > div > div.Layout-sc-1xcs6mc-0.kEHWUU.player-controls__left-control-group > div.Layout-sc-1xcs6mc-0.ScAttachedTooltipWrapper-sc-1ems1ts-0.deuUPa > button"
        );
        const delayThreshholValue = {};
        const data = await getDelayThreshhol();
        Object.assign(delayThreshholValue, data.delayThreshhold);
        $playButton.addEventListener("click", function () {
            console.log("Click");
        });
        if (delay > delayThreshholValue.value) {
            console.log("%c[Auto Refresh Stream]", "color: purple", "Refresh the stream");
            $playButton.click();
            $playButton.click();
        }
    };

    // First the function wait for the promise then we set a timeout of 60 seconds so the adblocker
    // can block ads whitout the page refreshing because the delay is too high.
    // Finally i check every 5 seconds if the delay is less than the delaythrehhold.
    waitForElement("button:nth-child(4)").then((element) => {
        console.log("%c[Auto Refresh Stream]", "color: purple", "the delay count is here!");
        setInterval(() => {
            // console.log("%c[Auto Refresh Stream]", "color: purple", $delay);
            setTimeout(() => {
                delay = parseInt(element.textContent);
                checkStreamDelay();
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
});
