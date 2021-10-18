// ==UserScript==
// @name         Mew enchantment AutoUpdate ver.
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/yige233/bettermew
// @version      0.2.1
// @description  个人向脚本，随着网页的更新，可能会失效。主要功能：https://mew.fun/Dove_yige/thoughts/69082567613583360
// @author       破损的鞘翅
// @match        https://mew.fun/n/*
// @include      https://mew.fun/sector-explore
// @icon         https://mew.fun/favicon.png
// @supportURL   https://github.com/yige233/bettermew/issues
// @require      https://cdn.jsdelivr.net/gh/yige233/bettermew@latest/mew.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //该脚本为使用cdn自动更新的脚本，有更新会自动实装。脚本仓库：https://github.com/yige233/bettermew
    window.onload = function () {
        var script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/yige233/bettermew@latest/mew.js";
        document.head.appendChild(script);
    };

})();
