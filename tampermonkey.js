// ==UserScript==
// @name         Mew enchantment AutoUpdate ver.
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/yige233/bettermew
// @version      0.36
// @description  个人向脚本，随着网页的更新，可能会失效。主要功能：https://mew.fun/Dove_yige/thoughts/69082567613583360
// @author       破损的鞘翅
// @match        https://*.mew.fun/n/*
// @match        https://*.mew.fun/home*
// @match        https://*.mew.fun/sector-explore*
// @icon         https://mew.fun/favicon.png
// @supportURL   https://github.com/yige233/bettermew/issues
// @updateURL    https://cdn.jsdelivr.net/gh/yige233/bettermew@latest/tampermonkey.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/yige233/bettermew@latest/tampermonkey.user.js
// @grant        GM.registerMenuCommand
// @grant        GM.getValue
// @grant        GM.setValue
// ==/UserScript==

(function () {
    'use strict';
    //该脚本为使用cdn自动更新的脚本，有更新会自动实装。脚本仓库：https://github.com/yige233/bettermew
    window.onload = async function () {
        let is_bata = await GM.getValue("is_bata", false),
            update_url = `https://api.mew.fun/api/v1/users/68907366539980800`,
            announce = await fetch(update_url).then(res => res.json()).then(text => JSON.parse(text.description.split("\n")[1])),
            script_url = (is_bata) ? "https://pc.doveyige.top/mew/mew.body.js" : `https://cdn.jsdelivr.net/gh/yige233/bettermew@${announce.hash}/mew.body.js`,
            beta_notice = (is_bata) ? "使用正式版" : "体验Beta版",
            script = document.createElement("script");
        script.src = script_url;
        script.type = "module";
        document.head.append(script);
        let whatsnew = [`当前脚本版本：${announce.ver}`, "更新内容：", ...announce.whatsnew];
        if (await GM.getValue("version") != announce.ver) {
            console.clear();
            GM.setValue("version", announce.ver);
            for (let i in whatsnew) {
                console.log(`%c${whatsnew[i]}`, "color: rgb(125 125 125);font-size:16px")
            };
        };
        GM.registerMenuCommand("清除所有设置", () => {
            localStorage.setItem("bettermew", "{}");
            alert("已经清除所有设置！");
        });
        GM.registerMenuCommand(beta_notice, () => {
            (is_bata) ? GM.setValue("is_bata", false) : GM.setValue("is_bata", true);
            window.location.reload(true);
        });
    };
})();
