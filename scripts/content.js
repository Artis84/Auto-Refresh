document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        const editChat = () => {
            let nullCount = 0;
            const primaryCOlor = "#260c5a";
            const secondaryCOlor = "#9147ff";
            const TertiaryColor = "#493375";

            //------------------------------------------------------------------------------------------------------------------------------

            const topNavigationBar = document.querySelector("#app > div.main-html.flex.h-screen.w-screen.flex-col.overflow-hidden > div > div > nav");
            const signUpButton = document.querySelector("#signup-button");
            const bottomChannel = document.querySelector("#main-view > div > div > div.flex.h-full.w-full.grow.items-stretch.overflow-hidden > div > div.livestream-fold > div:nth-child(2)");
            const sideChannem = document.querySelector("#app > div.main-html.flex.h-screen.w-screen.flex-col.overflow-hidden > div > div > div > div:nth-child(1) > div");
            const searchBox = document.querySelector("#app > div > div > div > nav > div > div > div > div > div > form > div > div");
            const followButton = document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > button");

            const subButton = document.querySelector("#headlessui-popover-button-8");
            const gifSubButtonLogin = document.querySelector("#headlessui-popover-button-5 > div > button");

            const channelTags = document.querySelectorAll(".category-tag-component");
            const recommandedChannels = document.querySelectorAll("#app > div > div > div > div > div:nth-child(1) > div > div:nth-child(3) > div:nth-child(2) > a");
            const followChannels = document.querySelectorAll("#app > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > a");
            const chatContainer = document.querySelector("#main-view > div > div > div:nth-child(2) > div");
            const channelPresentation = document.querySelector("#main-view > div > div > div > div > div:nth-child(2)");
            const topChat = document.querySelector("#chatroom-top > div");
            const shitShortcutEmotesMenu = document.querySelector(".quick-emotes-holder");
            const chat = document.querySelector("#chatroom > div:nth-child(even)");
            const chatFooter = document.querySelector("#chatroom-footer");
            const minimizeSideChannelMenu = document.querySelector("#app > div > div > div > div > div:nth-child(1) > div > div > div > div");
            const notificationButton = document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(1) > button");
            const unfollowButton = document.querySelector("#main-view > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > button:nth-child(3)");

            //------------------------------------------------------------------------------------------------------------------------------

            console.log("%c[BKTV]", "color: green", "Initialize extension");

            // Top Navigation bar
            topNavigationBar.style.backgroundColor = primaryCOlor;

            // Sign up button
            if (signUpButton) signUpButton.style.backgroundColor = secondaryCOlor;

            // Search box
            searchBox.style.backgroundColor = TertiaryColor;

            // Side channels navigtion bar
            sideChannem.style.backgroundColor = primaryCOlor;

            // Side Recommanded channels
            recommandedChannels.forEach((element) => (element.style.backgroundColor = primaryCOlor));

            // Side follow channels
            followChannels.forEach((element) => (element.style.backgroundColor = primaryCOlor));

            // bottom channel navigation bar
            bottomChannel.style.backgroundColor = primaryCOlor;

            // follow channel button
            followButton.style.backgroundColor = secondaryCOlor;
            if (subButton) {
                // Sub channel button
                subButton.style.borderRadius = "4px";
                subButton.querySelector("div > button").style.backgroundColor = secondaryCOlor;
                // Gift sub button
                gifSubButtonLogin.style.backgroundColor = "#53535f61";
            }

            // Notification button
            if (notificationButton) notificationButton.style.backgroundColor = secondaryCOlor;
            else nullCount++;

            // Unfollow button
            if (unfollowButton) unfollowButton.style.backgroundColor = secondaryCOlor;
            else nullCount++;

            // Channel Tags
            channelTags.forEach((element) => (element.style.backgroundColor = "#53535f61"));

            // Channel presentation
            channelPresentation.style.backgroundColor = primaryCOlor;
            channelPresentation.querySelector("div").style.backgroundColor = primaryCOlor;

            // Chat container
            chatContainer.style.width = "437px";

            // Top chat
            topChat.style.backgroundColor = primaryCOlor;
            if (shitShortcutEmotesMenu !== null) shitShortcutEmotesMenu.remove();
            else nullCount++;

            //Chat
            chat.style.backgroundColor = primaryCOlor;

            chatFooter.style.backgroundColor = primaryCOlor;
            chatFooter.querySelector("div > div.chat-mode.text-mode > div").style.backgroundColor = TertiaryColor;
            chatFooter.querySelector("div > div.send-row > button").style.backgroundColor = secondaryCOlor;

            minimizeSideChannelMenu.click();

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
                seventvEmote.style.minWidth = "50px";
                seventvEmote.style.height = "50px";
            }

            const seventvEmojis = document.querySelectorAll("#chatroom > div > div > * > div > div > span:nth-child(3) > seventv-container:nth-child(2) > span > div > svg");
            for (const seventvEmoji of seventvEmojis) {
                seventvEmoji.style.width = "50px";
                seventvEmoji.style.height = "50px";
            }

            requestAnimationFrame(() => {
                const pageNotModified = document.querySelector("#chatroom-footer > div > div.send-row > button");

                if (pageNotModified && !pageNotModified.style.backgroundColor) {
                    location.reload();
                    return;
                }
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
