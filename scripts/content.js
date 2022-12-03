console.log("%c[Auto Refresh Stream]", "color: purple", "Waiting for the stat count to show up");

// const $resetBtn = document.querySelector(
//     "#channel-player > div > div.Layout-sc-1xcs6mc-0.lfucH.player-controls__right-control-group > div.ffz--player-reset.tw-inline-flex.tw-relative.ffz-il-tooltip__container > button > div > div > figure"
// );

waitForElm("button:nth-child(4) > div > span.ffz-stat-text").then((elm) => {
    console.log("%c[Auto Refresh Stream]", "color: purple", "the stat count is here!");
    setInterval(() => {
        let $delay = parseFloat(elm.textContent);
        console.log("%c[Auto Refresh Stream]", "color: purple", $delay);
        setTimeout((delay) => {
            if (delay > 5) {
                console.log("%c[Auto Refresh Stream]", "color: purple", $delay);
                console.warn("%c[Auto Refresh Stream]", "color: purple", "Refresh the stream");
                location.reload();
            }
        }, 120000);
    }, 5000);
});

function waitForElm(selector) {
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
