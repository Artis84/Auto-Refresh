document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        const editChat = () => {
            let nullCount = 0;
            const primaryCOlor = "#260c5a";
            const secondaryCOlor = "#9147ff";

            console.log("%c[BKTV]", "color: green", "Initialize extension");
            document.querySelector("#app > div.main-html.flex.h-screen.w-screen.flex-col.overflow-hidden > div > div > nav").style.backgroundColor = primaryCOlor;
            document.querySelector("#chatroom-footer > div > div > div").style.backgroundColor = "#493375";

            document.querySelector("#main-view > div > div > div.flex.h-full.w-full.grow.items-stretch.overflow-hidden > div > div.livestream-fold > div:nth-child(2)").style.backgroundColor =
                primaryCOlor;
            document.querySelector("#app > div.main-html.flex.h-screen.w-screen.flex-col.overflow-hidden > div > div > div > div:nth-child(1) > div").style.backgroundColor = primaryCOlor;
            document.querySelector("#app > div > div > div > nav > div > div > div > div > div > form > div > div").style.backgroundColor = "#493375";
            if (document.querySelector("#headlessui-popover-button-8")) {
                document.querySelector("#headlessui-popover-button-8").style.borderRadius = "4px";
                document.querySelector("#headlessui-popover-button-8 > div > button").style.backgroundColor = secondaryCOlor;
                document.querySelector("#headlessui-popover-button-5 > div > button").style.backgroundColor = "#53535f61";
            } else if (document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(1) > button") !== null) {
                document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(1) > button").style.backgroundColor =
                    secondaryCOlor;
                document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(1) > button > div").style.color = "white";
            } else document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > button").style.backgroundColor = secondaryCOlor;

            if (document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(1) > button") !== null)
                document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(1) > button").style.backgroundColor =
                    secondaryCOlor;
            else nullCount++;
            document.querySelectorAll(".category-tag-component").forEach((element) => (element.style.backgroundColor = "#53535f61"));

            document
                .querySelectorAll("#app > div > div > div > div > div:nth-child(1) > div > div:nth-child(3) > div:nth-child(2) > a")
                .forEach((element) => (element.style.backgroundColor = primaryCOlor));

            document.querySelector("#main-view > div > div > div:nth-child(2) > div").style.width = "437px";
            document.querySelector("#main-view > div > div > div > div > div:nth-child(2) > div").style.backgroundColor = primaryCOlor;
            document.querySelector("#main-view > div > div > div > div > div:nth-child(2)").style.backgroundColor = primaryCOlor;
            if (document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > button:nth-child(3)"))
                document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > button:nth-child(3)").style.backgroundColor =
                    secondaryCOlor;
            else nullCount++;
            document.querySelectorAll("#app > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > a").forEach((element) => (element.style.backgroundColor = primaryCOlor));
            document.querySelector("#chatroom-top > div").style.backgroundColor = primaryCOlor;
            if (document.querySelector(".quick-emotes-holder") !== null) document.querySelector(".quick-emotes-holder").remove();
            else nullCount++;
            document.querySelector("#chatroom > div:nth-child(even)").style.backgroundColor = primaryCOlor;
            document.getElementById("chatroom-footer").style.backgroundColor = primaryCOlor;
            document.querySelector("#chatroom-footer > div > div > div").style.backgroundColor = "#493375";
            document.querySelector("#chatroom-footer > div > div > button").style.backgroundColor = secondaryCOlor;
            document.querySelector("#app > div > div > div > div > div:nth-child(1) > div > div > div > div").click();
            console.log("%c[BKTV]", "color: green", `Elements not present: ${nullCount}`);
            console.log("%c[BKTV]", "color: green", "Initialization over");
        };

        const bigEmotes = () => {
            const messages = document.querySelectorAll(".chat-entry > div > *");

            // Process each img element within the sub-element
            for (const message of messages) {
                const kickEmote = message.querySelector(".chat-emote-container");
                if (kickEmote) {
                    kickEmote.style.setProperty("width", "50px");
                    kickEmote.style.setProperty("height", "50px");
                }
            }
            const seventvContainers = document.querySelectorAll("#chatroom > div > div > * > div > div > span:nth-child(3) > seventv-container:nth-child(2) > span > div ");
            for (const seventvContainer of seventvContainers) {
                seventvContainer.style.display = "inline-grid";
                seventvContainer.style.verticalAlign = "middle";
                seventvContainer.style.marginLeft = "0";
                seventvContainer.style.marginRight = "0";
                seventvContainer.classList.remove("seventv-emote-token");
            }

            const seventvEmotes = document.querySelectorAll("#chatroom > div > div > * > div > div > span:nth-child(3) > seventv-container:nth-child(2) > span > div > img");
            for (const seventvEmote of seventvEmotes) {
                seventvEmote.style.setProperty("min-width", "50px");
                seventvEmote.style.setProperty("height", "50px");
            }

            requestAnimationFrame(() => {
                bigEmotes();
            });
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

        try {
            waitForElm("#main-view > div > div > div > div > div:nth-child(even) > div > div > div > div > div").then(() => {
                console.log("%c[BKTV]", "color: green", "Chat is here !");
                editChat();
                bigEmotes();
            });
        } catch (error) {
            console.error("%c[BKTV]", "color: green", "Error during initialization: ", error.message);
            location.reload();
        }
    }
};
