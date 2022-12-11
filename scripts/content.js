document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        // Watch for changes to the user's delayThreshhold & apply them
        chrome.storage.onChanged.addListener((changes, area) => {
            if (area === "sync" && changes.options.delayThreshhold) {
                let newDelayThreshhold = changes.options.delayThreshhold;
                console.log("%c[Auto Refresh Stream]\n", "color: purple", "Set delayThreshhold: ", newDelayThreshhold);
            }
        });

        chrome.storage.onChanged.addListener((changes, area) => {
            if (area === "sync" && changes.options.delayThreshhold) {
                let newDelayInterval = changes.options.delayThreshhold;
                console.log("%c[Auto Refresh Stream]\n", "color: purple", "Set delayThreshhold: ", newDelayInterval);
            }
        });

        // const getOptions = async () => {
        //     if (typeof chrome.app.isInstalled !== "undefined") {
        //         return await chrome.storage.sync.get("options");
        //     }
        // };

        // First the function wait for the promise then we set a timeout of 60 seconds so the adblocker
        // can block ads whitout the page refreshing because the delay is too high.
        // Finally i check every 5 seconds if the delay is less than the delaythrehhold.
        const showDelay = () => {
            console.log("%c[Auto Refresh Stream]", "color: purple", "Initialize extension");
            document
                .querySelector("#channel-player > div > div.Layout-sc-1xcs6mc-0.lfucH.player-controls__right-control-group > div:nth-child(1) > div:nth-child(2) > div > button > div > div > div")
                .click();
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
                "#root > div > div.Layout-sc-1xcs6mc-0.kBprba > div > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-1i43xsx-0.persistent-player > div > div.Layout-sc-1xcs6mc-0.video-player > div > div.Layout-sc-1xcs6mc-0.video-ref > div > div > div.tw-root--theme-dark.tw-root--hover > div > div.simplebar-scroll-content > div > div > div > button"
            ).style.display = "none";
        };

        const getDisplayMenuValue = () => {
            const attribute = document.createAttribute("id");
            attribute.value = "menu";
            document
                .querySelector(
                    "#root > div > div.Layout-sc-1xcs6mc-0.kBprba > div > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-1i43xsx-0.persistent-player > div > div.Layout-sc-1xcs6mc-0.video-player > div.Layout-sc-1xcs6mc-0.kUDtlR.video-player__container.video-player__container--resize-calc > div.Layout-sc-1xcs6mc-0.video-ref > div > div > div.tw-root--theme-dark.tw-root--hover > div > div.simplebar-scroll-content"
                )
                .setAttributeNode(attribute);
            const $menu = document.getElementById("menu");
            const displayMenuValue = getComputedStyle($menu, null).display;
            if (displayMenuValue !== "none") {
                console.log("%c[Auto Refresh Stream]", "color: purple", "Advanced menu was hide");
                $menu.style.display = "none";
            }
        };

        const checkStreamDelay = async () => {
            const options = {};
            const data = await chrome.storage.sync.get("options");
            Object.assign(options, data.options);
            const $playButton = document.querySelector(
                "#channel-player > div > div.Layout-sc-1xcs6mc-0.kEHWUU.player-controls__left-control-group > div.Layout-sc-1xcs6mc-0.ScAttachedTooltipWrapper-sc-1ems1ts-0.deuUPa > button"
            );
            const $delay = document.querySelector(
                "#root > div > div.Layout-sc-1xcs6mc-0.kBprba > div > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-1i43xsx-0.persistent-player > div > div.Layout-sc-1xcs6mc-0.video-player > div.Layout-sc-1xcs6mc-0.kUDtlR.video-player__container.video-player__container--resize-calc > div.Layout-sc-1xcs6mc-0.video-ref > div > div > div.tw-root--theme-dark.tw-root--hover > div > div.simplebar-scroll-content > div > div > table > tbody > tr:nth-child(6) > td:nth-child(2)"
            ).textContent;
            let delay = parseInt($delay);
            delayInterval = parseInt(options.delayInterval);
            if (delay > options.delayThreshhold) {
                console.log("%c[Auto Refresh Stream]", "color: purple", "Refresh the stream");
                $playButton.click();
                $playButton.click();
            }
        };

        const waitForElm = (selector) => {
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
        };

        console.log("%c[Auto Refresh Stream]", "color: purple", "Waiting for the setting button to show up");

        let delayInterval;
        waitForElm("#channel-player > div > div.Layout-sc-1xcs6mc-0.lfucH.player-controls__right-control-group > div:nth-child(1) > div:nth-child(2) > div > button > div > div > div").then(() => {
            console.log("%c[Auto Refresh Stream]", "color: purple", "Setting button is here !");
            delayInterval = 5000;

            try {
                showDelay();
            } catch (error) {
                console.error("%c[Auto Refresh Stream]", "color: purple", "Error during initialization: ", error.message);
                location.reload();
            }

            setInterval(() => {
                waitForElm("#channel-player > div > div.Layout-sc-1xcs6mc-0.lfucH.player-controls__right-control-group > div:nth-child(1) > div:nth-child(2) > div > button > div > div > div").then(
                    () => {
                        getDisplayMenuValue();
                    }
                );
            }, 1000);

            (function ticker() {
                waitForElm(
                    "#root > div > div.Layout-sc-1xcs6mc-0.kBprba > div > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-1i43xsx-0.persistent-player > div > div.Layout-sc-1xcs6mc-0.video-player > div.Layout-sc-1xcs6mc-0.kUDtlR.video-player__container.video-player__container--resize-calc > div.Layout-sc-1xcs6mc-0.video-ref > div > div > div.tw-root--theme-dark.tw-root--hover > div > div.simplebar-scroll-content"
                ).then(() => {
                    checkStreamDelay();
                    setTimeout(ticker, delayInterval);
                });
            })();

            console.log("%c[Auto Refresh Stream]", "color: purple", "Done !");
        });
    }
};
