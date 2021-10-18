// ==UserScript==
// @name         Mew enchantment AutoUpdate ver.
// @namespace    http://tampermonkey.net/
//@homepage     https://github.com/yige233/bettermew
// @version      0.3
// @description  个人向脚本，随着网页的更新，可能会失效。主要功能：https://mew.fun/Dove_yige/thoughts/69082567613583360
// @author       破损的鞘翅
// @updateURL    https://pc.doveyige.top/mew/tampermonkey.js
// @match        https://mew.fun/n/*
// @match        https://mew.fun/sector-explore
// @icon         https://mew.fun/favicon.png
// @supportURL   https://github.com/yige233/bettermew/issues
// @grant        GM.registerMenuCommand
// @grant        GM.getValue
// @grant        GM.setValue
// ==/UserScript==

(function () {
    'use strict';
    //该脚本为使用cdn自动更新的脚本，有更新会自动实装。脚本仓库：https://github.com/yige233/bettermew
    window.onload = async function () {
        let is_bata = await GM.getValue("is_bata", false),
            script_url = (is_bata) ? "https://pc.doveyige.top/mew/mew.js" : "https://cdn.jsdelivr.net/gh/yige233/bettermew@latest/mew.js",
            bate_notice = (is_bata) ? "使用正式版" : "体验Beta版",
            script = document.createElement("script");
        script.src = script_url;
        document.head.appendChild(script);
        GM.registerMenuCommand("清除所有设置", () => {
            localStorage.setItem("settings", "");
            alert("已经清除所有设置！")
        });
        GM.registerMenuCommand("刷新cdn缓存-仅正式版", async () => {
            let path = "/gh/yige233/bettermew@latest/mew.js";
            let res = await fetch(`https://purge.jsdelivr.net${path}`).then(res => res.json()).then(json => {
                if (json.status != "finished") return "刷新未完成！";
                if (json.paths[path].throttled) return `刷新冷却中，剩余时间：${json.paths[path].throttlingReset}秒`;
                alert(`刷新完成，完成于${new Date(json.timestamp).toLocaleString("chinese", {hour12: false})}`);
                return "如果仍然无法更新到新版本，请等待cdn自然刷新。这最多需要24小时。";
            });
            alert(res);
            window.location.reload(true);
        });
        GM.registerMenuCommand(bate_notice, () => {
            (is_bata) ? GM.setValue("is_bata", false): GM.setValue("is_bata", true);
            window.location.reload(true);
        });
    };
})();