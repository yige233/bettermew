const sth = {
    settings: {
        leftsidewidth: 20,
        rightsidewidth: 20,
        totalreverse: false,
        last50atmsg: [],
        autorefresh: true,
        imgwidth: 50,
    },
    datas: {
        ver: 0.43,
        whatsnew: [
            "当前脚本版本:" + sth.datas.ver,
            "更新内容：1、图片大小现在可通过左下方的滑动条调节，范围为0%-100%。",
            "2、脚本现在可以自动更新。脚本目前已上传至github，当github有更新时，脚本就会同步更新。更新后可能要刷新浏览器缓存才能看到效果。"
        ],
        defaultavatar: "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
        searchicon: '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256" style="transform: rotate(360deg);width:40px;"><path d="M232.477 215.516l-40.678-40.678a96.108 96.108 0 1 0-16.972 16.97l40.679 40.678a12 12 0 1 0 16.97-16.97zM43.997 116a72 72 0 1 1 72 72a72.081 72.081 0 0 1-72-72z" fill="currentColor"></path></svg>'
    },
    marks: {
        autorefresh_state: false,
        intv1: null
    },
    savesettings: function () {
        localStorage.setItem('settings', JSON.stringify(sth.settings));
    },
    vsrsioncheck: function () {
        if (!sth.settings.ver || sth.settings.ver != sth.datas.ver) {
            alert("感谢下载并使用mew增强脚本" + sth.settings.ver + "版！按下f12键打开控制台，以查看详细更新信息。");
            console.clear();
            for (leti = 0; i < sth.datas.whatsnew.length; i++) {
                console.log("%c" + sth.datas.whatsnew[i], "color: rgb(18 71 158);font-size:16px");
            }
            sth.settings.ver = sth.datas.ver;
            sth.savesettings();
            return true;
        }
        return false;
    },
    urlclickable: function () {
        const subf = function (el) {
            var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
            for (let i = 0; i < el.length; i++) {
                if (el[i].className.indexOf("url-turned") == -1) {
                    var txt = el[i].innerText;
                    var s = txt.match(reg);
                    if (s) {
                        for (let x = 0; x < s.length; x++) {
                            var url = "<a href=" + s[x] + " target=\"_blank\">" + s[x] + "</a>";
                            txt = txt.replace(s[x], url);
                        }
                        el[i].classList.add("url-turned");
                        el[i].innerHTML = txt;
                    };
                };
            };
            reg = null
        };
        if (document.querySelector(".MuiPaper-elevation16")) {
            for (let i = 0; i < document.querySelectorAll(".MuiPaper-elevation16").length; i++) {
                var root = document.querySelectorAll(".MuiPaper-root")[i];
                subf(root.querySelectorAll("p"));
                subf(root.querySelectorAll("h3"));
                subf(root.querySelectorAll("h2"));
                root = null;
            };
        };
        subf(document.querySelectorAll(".message-text_content-wrap__hZPyw"));
    },
    autorefresh: function () {
        sth.marks.intv1 = setInterval(() => {
            if (document.querySelector(".MuiSwitch-input.PrivateSwitchBase-input.css-mraihx")) {
                var switcher = document.querySelector(".MuiSwitch-input.PrivateSwitchBase-input.css-mraihx");
                if (sth.settings.autorefresh != switcher.checked) {
                    sth.settings.autorefresh = switcher.checked;
                    sth.savesettings();
                };
                switcher = null;
            };
        }, 1000);
        if (!sth.settings.autorefresh && !sth.marks.autorefresh_checked) {
            document.querySelector(".MuiSwitch-input.PrivateSwitchBase-input.css-mraihx").click();
        };
        sth.marks.autorefresh_checked = true;
    },
    calluser: function () {
        if (document.querySelector(".card_name__3yGhB")) {
            const toat = function (el) {
                el.setAttribute("id", "called");
                var a = document.createElement("a");
                a.href = "#called";
                a.click();
                el.removeAttribute("id");
                a = null;
            };
            const writeatmsg = function (user, msg) {
                if (sth.settings.last50atmsg.length >= 50) {
                    sth.settings.last50atmsg.shift();
                };
                sth.settings.last50atmsg.push({
                    user: user,
                    msg: msg
                });
                sth.savesettings();
            };
            const atexist = function (user, msg) {
                return sth.settings.last50atmsg.some(i => {
                    if (i.user == user && i.msg == msg) { return true };
                });
            };
            var usernames = Array.from(document.querySelectorAll(".truncate.message-text_name__ygn9j")).concat(Array.from(document.querySelectorAll(".truncate.message-image_name__PClbf")));
            var msgs = document.querySelectorAll(".message-text_content-wrap__hZPyw");
            var atmsg = "@" + document.querySelector(".card_name__3yGhB").innerText;
            for (let i = 0; i < usernames.length; i++) {
                usernames[i].style = "cursor:pointer";
                if (usernames[i].className.indexOf("call-enabled") == -1) {
                    usernames[i].addEventListener("click", (e) => {
                        var cp = document.createElement("textarea");
                        cp.innerText = "@" + e.target.innerText + "; ";
                        cp.id = "copy-area";
                        cp.style = "opacity: 0;z-index: -999;";
                        document.body.appendChild(cp);
                        document.querySelector("#copy-area").select();
                        document.execCommand("copy");
                        document.body.removeChild(cp);
                        document.querySelectorAll(".message-container_textarea-bar__ZvlXz")[0].focus();
                        cp = null;
                    });
                    usernames[i].classList.add("call-enabled");
                };
            };
            for (let x = 0; x < msgs.length; x++) {
                if (msgs[x] && msgs[x].className.indexOf("called-checked") == -1 && msgs[x].innerText.indexOf(atmsg) != -1) {
                    var msg = msgs[x].innerText;
                    var user = msgs[x].parentNode.querySelectorAll(".truncate.message-text_name__ygn9j")[0].innerText;
                    if (!atexist(user, msg)) {
                        alert(user + " @了你");
                        toat(msgs[x].parentNode.parentNode.parentNode);
                        writeatmsg(user, msg)
                        msgs[x].classList.add("called-checked");
                    }
                };
            }
            usernames = msgs = atmsg = null;
        };
    },
    GUIadjust: function () {
        const subf1 = function (e, side, min, max) {
            switch (e.target.value) {
                case min:
                case "" + min:
                    if (e.deltaY < 0) {
                        sth.settings[side]++;
                        e.target.value++;
                    };
                    break;
                case max:
                case "" + max:
                    if (e.deltaY > 0) {
                        sth.settings[side]--;
                        e.target.value--;
                    };
                    break;
                default:
                    if (e.deltaY < 0) {
                        sth.settings[side]++;
                        e.target.value++;
                    } else {
                        sth.settings[side]--;
                        e.target.value--;
                    };
                    break;
            };
            sth.savesettings();
        };
        const subf2 = function (opt) {
            var sidebar = document.querySelector(".sidebar_root__6Jp7C");
            if (!document.querySelector("#" + opt.id)) {
                var el = document.createElement("input");
                el.style = "width: 100%;";
                el.type = opt.type;
                el.max = opt.max;
                el.min = opt.min;
                el.step = 1;
                el.id = opt.id;
                el.title = opt.title;
                el.value = sth.settings[opt.setting];
                for (let i = 0; i < opt.events.length; i++) {
                    opt.events[i](el);
                };
                sidebar.append(el);
                opt.extra(el);
            };
        };
        if (document.querySelector(".sidebar_root__6Jp7C")) {
            subf2({
                max: 50,
                min: 0,
                type: "range",
                id: "adjust-bar-l",
                title: "调整想法栏宽度",
                setting: "leftsidewidth",
                events: [
                    (el) => {
                        el.addEventListener("change", (e) => {
                            e.target.title = "想法栏宽度:" + e.target.value + "%";
                            sth.settings.leftsidewidth = e.target.value;
                            sth.savesettings();
                        });
                    },
                    (el) => {
                        el.addEventListener('wheel', (e) => {
                            e.target.title = "想法栏宽度:" + e.target.value + "%";
                            e.preventDefault();
                            subf1(e, "leftsidewidth", 0, 50);
                        });
                    }
                ],
                extra: () => { return false }
            });
            subf2({
                max: 50,
                min: 0,
                type: "range",
                id: "adjust-bar-r",
                title: "调整右侧信息栏宽度",
                setting: "rightsidewidth",
                events: [
                    (el) => {
                        el.addEventListener("change", (e) => {
                            e.target.title = "信息栏宽度:" + e.target.value + "%";
                            sth.settings.rightsidewidth = e.target.value;
                            sth.savesettings();
                        });
                    },
                    (el) => {
                        el.addEventListener('wheel', (e) => {
                            e.target.title = "信息栏宽度:" + e.target.value + "%";
                            e.preventDefault();
                            subf1(e, "rightsidewidth", 0, 50);
                        });
                    }
                ],
                extra: () => { return false }
            });
            subf2({
                max: 100,
                min: 0,
                type: "range",
                id: "adjust-bar-imgw",
                title: "调整贴内图片大小",
                setting: "imgwidth",
                events: [
                    (el) => {
                        el.addEventListener("change", (e) => {
                            e.target.title = "图片大小:" + e.target.value + "%";
                            sth.settings.imgwidth = e.target.value;
                            sth.savesettings();
                        });
                    },
                    (el) => {
                        el.addEventListener('wheel', (e) => {
                            e.target.title = "图片大小:" + e.target.value + "%";
                            e.preventDefault();
                            subf1(e, "imgwidth", 0, 10);
                        });
                    }
                ],
                extra: () => { return false }
            });
            subf2({
                max: null,
                min: null,
                type: "checkbox",
                id: "reverse-desktop",
                title: "反转桌面布局",
                setting: null,
                events: [
                    (el) => {
                        el.addEventListener("change", (e) => {
                            if (e.target.checked) {
                                document.querySelector(".desktop_root__3KNh_").style = "flex-direction: row-reverse;";
                                sth.settings.totalreverse = true;
                            } else {
                                document.querySelector(".desktop_root__3KNh_").style = "flex-direction: row;";
                                sth.settings.totalreverse = false;
                            };
                            sth.savesettings();
                        });
                    },
                ],
                extra: (el) => {
                    if (sth.settings.totalreverse) {
                        el.click();
                    };
                }
            });
        };
        document.body.style.setProperty("--leftsidewidth", sth.settings.leftsidewidth + "%");
        document.body.style.setProperty("--rightsidewidth", sth.settings.rightsidewidth + "%");
        document.body.style.setProperty("--imgwidth", sth.settings.imgwidth + "%");
        document.body.style.setProperty("--imgleft", ((100 - sth.settings.imgwidth) / 2) + "%");
    },
    imgdl: function () {
        var dlicon = document.createElement("div");
        dlicon.innerText = "下载";
        dlicon.id = "newdl";
        if (!document.querySelector("#newdl") && document.querySelectorAll(".image_button__1Pu4L").length > 0) {
            document.querySelectorAll(".image_button__1Pu4L")[1].parentNode.append(dlicon);
            document.querySelector("#newdl").addEventListener("click", () => {
                if (document.querySelectorAll("img.pswp__img")[1]) {
                    window.open(document.querySelectorAll("img.pswp__img")[1].src);
                } else {
                    window.open(document.querySelector("img.pswp__img").src);
                };
            });
        };
        dlicon = null;
    },
    search: function () {
        const subf1 = function (_avatar, _nickname, _content, _date, data_id) {
            var item = document.createElement("div");
            item.className = "searchitem";
            item.innerHTML = '<div class="poster"><img><div style="display: flex;flex-direction: column;align-items: flex-start;padding: 0 0 0 5px;"><span class="nickname"></span><span class="date"></span></div></div><p class="content"></p>';
            var avatar = item.querySelector("img");
            avatar.src = _avatar;
            var nick = item.querySelector(".nickname");
            nick.className = "nickname";
            nick.innerText = _nickname;
            var date = item.querySelector(".date");
            date.className = "date";
            if (_date) {
                date.innerText = "发表于 " + new Date(_date).toLocaleString();
            };
            var content = item.querySelector(".content");
            if (_content) {
                content.innerText = _content;
            } else {
                content.innerText = "该想法没有文字OwO 但您仍可点击这段文字了解该想法的详情";
            };
            content.setAttribute("data-id", data_id);
            content.addEventListener("click", (e) => {
                if (e.target.tagName == "A") { return false };
                var data_id = e.target.getAttribute("data-id");
                if (data_id) {
                    window.open("https://mew.fun/Recouper/thoughts/" + data_id);
                } else {
                    alert("无法打开该想法的链接！");
                };
            });
            document.querySelector("#searchres").appendChild(item);
            item = date = content = avatar = nick = null;
        };
        const subf2 = function (query) {
            var xhr = new XMLHttpRequest();
            var node = window.location.pathname.slice(3);
            xhr.open("get", "https://api.mew.fun/api/v1/nodes/" + node + "/search-thoughts?keyword=" + query + "&limit=100", true);
            xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OTA3MzY2NTM5OTgwODAwIiwiaWF0IjoxNjIzNjg2MjQ2fQ.0cN11hX3KGfdPoEwMnIffODjvnYy9Rt6EbHBdgg282c");
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) {
                    document.querySelector("#searchres").innerHTML = "";
                    subf1(sth.datas.defaultavatar, "提示", "正在努力搜索中！")
                }
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.querySelector("#searchres").innerHTML = "";
                    var jsonstr = JSON.parse(xhr.responseText);
                    if (jsonstr.entries.length == 0) {
                        subf1(sth.datas.defaultavatar, "提示", "没有搜索到任何信息！", null, null)
                        return false;
                    };
                    for (let i = 0; i < jsonstr.entries.length; i++) {
                        var poster = jsonstr.objects.users[jsonstr.entries[i].author_id];
                        var avatar = sth.datas.defaultavatar;
                        if (poster.avatar) {
                            avatar = jsonstr.objects.media[poster.avatar].url + "~tplv-c226mjqywu-size:96.image";
                        };
                        subf1(avatar, poster.name, jsonstr.entries[i].status, jsonstr.entries[i].created_at, jsonstr.entries[i].id)
                    };
                    if (jsonstr.entries.length == 100) {
                        subf1(sth.datas.defaultavatar, "提示", "最多只能展示100条结果哦！", null, null)
                    };
                };
            };
            xhr.send();
        };
        if (!document.querySelector("#searchicon")) {
            var searchicon = document.createElement("div");
            searchicon.id = "searchicon";
            searchicon.addEventListener("click", () => {
                var s = document.createElement("div");
                s.className = "searchroot";
                s.innerHTML = '<div aria-hidden="true" class="blackback" onclick="this.parentNode.remove()"></div><div class="MuiPaper-root MuiPaper-elevation16 searchdisplay"><div class="form"><input type="text" placeholder="请输入您要搜索的内容..."><button>' + sth.datas.searchicon + '</button><div><span>倒序浏览</span><input type="checkbox"></div></div><div id="searchres"></div></div>';
                s.querySelector("div.searchdisplay > div.form > button").addEventListener("click", () => {
                    subf2(document.querySelector("div.searchdisplay > div.form > button").parentNode.children[0].value);
                });
                s.querySelector("div.searchdisplay > div.form > div > input").addEventListener("change", (e) => {
                    if (e.target.checked) {
                        document.querySelector("#searchres").style = "flex-direction: column-reverse";
                    } else {
                        document.querySelector("#searchres").style = "";
                    };
                });
                document.body.appendChild(s);
                s = null;
            });
            searchicon.innerHTML = sth.datas.searchicon;
            document.querySelector(".sidebar_logo__WsdlD").after(searchicon);
            searchicon = null;
        };
    },
    act: function () {
        if (localStorage.settings) {
            sth.settings = JSON.parse(localStorage.settings);
        } else {
            sth.savesettings();
        };
        var e = document.createElement("link");
        e.rel = "stylesheet";
        e.type = "text/css";
        e.href = "https://cdn.jsdelivr.net/gh/yige233/bettermew/mew.css";
        document.head.appendChild(e);
        var options = {
            'childList': true,
            'arrtibutes': true,
            'subtree': true
        };
        var observer = new MutationObserver(function () {
            try {
                sth.urlclickable();
                sth.imgdl();
                sth.GUIadjust();
                sth.calluser();
                sth.autorefresh();
                sth.search();
            }
            catch (err) {
                console.log(err);
                return false;
            };
        });
        observer.observe(document, options);
        sth.vsrsioncheck();
        options = e = null;
    }
};
sth.act();

