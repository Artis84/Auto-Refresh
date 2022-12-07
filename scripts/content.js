document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        chrome.runtime.connect().onDisconnect.addListener(function () {
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

            // First the function wait for the promise then we set a timeout of 60 seconds so the adblocker
            // can block ads whitout the page refreshing because the delay is too high.
            // Finally i check every 5 seconds if the delay is less than the delaythrehhold.
            const showDelay = () => {
                console.log("%c[Auto Refresh Stream]", "color: purple", "Initialize extension");
                const $setingPlayerButton = document.querySelector(
                    "#channel-player > div > div.Layout-sc-1xcs6mc-0.lfucH.player-controls__right-control-group > div:nth-child(1) > div:nth-child(2) > div > button > div > div > div"
                );
                while ($setingPlayerButton.click()) {
                    $setingPlayerButton.click();
                }
                document
                    .querySelector(
                        "#root > div > div.Layout-sc-1xcs6mc-0.kBprba > div > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-1i43xsx-0.persistent-player > div > div.Layout-sc-1xcs6mc-0.video-player > div.Layout-sc-1xcs6mc-0.kUDtlR.video-player__container.video-player__container--resize-calc > div.ScReactModalBase-sc-26ijes-0.kXkHnj.tw-dialog-layer.tw-root--theme-dark > div > div > div > div > div > div > div > div > div:nth-child(4) > button"
                    )
                    .click();
                document
                    .querySelector(
                        "#root > div > div.Layout-sc-1xcs6mc-0.kBprba > div > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-1i43xsx-0.persistent-player > div > div.Layout-sc-1xcs6mc-0.video-player > div.Layout-sc-1xcs6mc-0.kUDtlR.video-player__container.video-player__container--resize-calc > div.ScReactModalBase-sc-26ijes-0.kXkHnj.tw-dialog-layer.tw-root--theme-dark > div > div > div > div > div > div > div > div > div:nth-child(6) > div > div > label"
                    )
                    .click();
                document
                    .querySelector("#channel-player > div > div.Layout-sc-1xcs6mc-0.lfucH.player-controls__right-control-group > div:nth-child(1) > div:nth-child(2) > div > button > div > div > div")
                    .click();
                document.querySelector(
                    "#root > div > div.Layout-sc-1xcs6mc-0.kBprba > div > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-1i43xsx-0.persistent-player > div > div.Layout-sc-1xcs6mc-0.video-player > div.Layout-sc-1xcs6mc-0.kUDtlR.video-player__container.video-player__container--resize-calc > div.Layout-sc-1xcs6mc-0.video-ref > div > div > div.tw-root--theme-dark.tw-root--hover > div > div.simplebar-scroll-content"
                ).style.display = "none";
            };

            const checkStreamDelay = async (delay) => {
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

            showDelay();
            console.log("%c[Auto Refresh Stream]", "color: purple", "Done !");
            setInterval(() => {
                const $delay = document.querySelector(
                    "#root > div > div.Layout-sc-1xcs6mc-0.kBprba > div > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-1i43xsx-0.persistent-player > div > div.Layout-sc-1xcs6mc-0.video-player > div.Layout-sc-1xcs6mc-0.kUDtlR.video-player__container.video-player__container--resize-calc > div.Layout-sc-1xcs6mc-0.video-ref > div > div > div.tw-root--theme-dark.tw-root--hover > div > div.simplebar-scroll-content > div > div > table > tbody > tr:nth-child(6) > td:nth-child(2) > p"
                );
                setTimeout(() => {
                    let delay = parseInt($delay.textContent);
                    checkStreamDelay(delay);
                }, 60000);
            }, 5000);
        });
    }
};
