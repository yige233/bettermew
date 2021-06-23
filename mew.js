const sth = {
    settings: {
        likecountorder: false,
        reverseorder: false,
        leftsidewidth: 20,
        rightsidewidth: 20,
        totalreverse: false,
        last50atmsg: [],
        autorefresh: true,
        imgwidth: 50,
    },
    datas: {
        ver: 0.51,
        whatsnew: [
            "当前脚本版本:0.51",
            "更新内容：",
            "1、评论按喜欢数量排序功能。启用后帖子的评论将在正序排列的基础上按喜欢数量排列。需要先启用正序排列功能。",
            "2、贴内临时反转评论顺序按钮。点击可临时将正序排列的评论反转。需要先启用正序排列功能，不与热评排序功能兼容。",
            "3、只看Ta功能。贴内点击后输入Ta的昵称，即可只看Ta的评论。默认为楼主。需要先启用正序排列功能。",
            "4、0.51紧急修复了想法自动刷新按钮出现的bug。"
        ],
        replys: [],
        cssmd5: "0595fc08ad6b1b5e4cc4f1a4177e5f44",
        defaultavatar: "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
        searchicon: '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256" style="transform: rotate(360deg);width:40px;"><path d="M232.477 215.516l-40.678-40.678a96.108 96.108 0 1 0-16.972 16.97l40.679 40.678a12 12 0 1 0 16.97-16.97zM43.997 116a72 72 0 1 1 72 72a72.081 72.081 0 0 1-72-72z" fill="currentColor"></path></svg>',
        tempreverseicon: '<svg t="1624433224331" source="https://www.iconfont.cn" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2193" width="40" height="40"><path d="M543 389.9H312.3c-13.8 0-25-11.2-25-25s11.2-25 25-25H543c13.8 0 25 11.2 25 25s-11.2 25-25 25zM543 539.8H312.3c-13.8 0-25-11.2-25-25s11.2-25 25-25H543c13.8 0 25 11.2 25 25-0.1 13.8-11.2 25-25 25zM543 689.6H312.3c-13.8 0-25-11.2-25-25s11.2-25 25-25H543c13.8 0 25 11.2 25 25s-11.2 25-25 25zM645.3 712c-4.1 0-8.3-1-12-3.1-8-4.4-12.9-12.8-12.9-21.9V342.1c0-13.8 11.2-25 25-25s25 11.2 25 25v299.6l30.9-19.5c11.6-7.3 27.1-3.9 34.5 7.8 7.4 11.7 3.9 27.1-7.8 34.5l-69.2 43.7c-4.2 2.5-8.9 3.8-13.5 3.8z" fill="#bfbfbf" p-id="2194"></path></svg>',
        totopicon: '<svg t="1624339130920" source="https://www.iconfont.cn" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1179" width="40" height="40"><path d="M708.85376 416.19456c0 2.0992-0.65536 4.1984-1.9968 5.96992-2.68288 3.56352-7.424 4.89472-11.5712 3.24608L571.52512 376.5248l0 286.52544c0 5.4784-4.44416 9.92256-9.9328 9.92256l-99.18464 0c-5.46816 0-9.91232-4.44416-9.91232-9.92256L452.49536 376.5248l-123.78112 48.88576c-4.13696 1.6384-8.87808 0.3072-11.56096-3.24608-2.69312-3.56352-2.68288-8.47872 0.06144-12.01152L504.13568 167.0144c1.88416-2.44736 4.78208-3.87072 7.86432-3.87072s5.9904 1.4336 7.86432 3.87072l186.9312 243.13856C708.15744 411.92448 708.85376 414.0544 708.85376 416.19456zM512 726.51776c-46.32576 0-83.88608 37.55008-83.88608 83.88608 0 46.336 37.56032 83.88608 83.88608 83.88608s83.89632-37.55008 83.89632-83.88608C595.89632 764.07808 558.32576 726.51776 512 726.51776z" p-id="1180" fill="#bfbfbf"></path></svg>',
        onlyauthoricon: '<svg t="1624444386877" source="https://www.iconfont.cn" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2588" width="40" height="40"><path d="M1024.039909 845.534376c-55.238069 105.918331-167.732166 178.465624-297.440319 178.465624-129.71634 0-242.209414-72.548316-297.446459-178.465624 39.740096-76.241428 109.401666-134.661979 193.549158-161.710009-39.850613-20.031219-83.607186-33.416064-130.040728-38.236859-8.760524 0.698918-17.516956 1.323135-26.462698 1.323135-12.550851 0-24.913413-0.859577-37.134759-2.218528C248.203942 655.891178 101.8292 793.08584 76.455299 969.623555l-3.837398 20.231787c-2.958378 18.650779-15.306614 34.143635-35.9467 33.933857-19.519566-0.198521-35.322483-15.245216-35.322483-34.043351l-0.325411-3.160993c0-6.29538 2.789533-16.962324 2.789533-16.962324C29.467125 800.966321 147.699923 662.434198 305.858036 605.360318 206.120474 549.951357 138.66106 444.673615 138.66106 323.710636c0-178.490184 146.654105-323.189773 327.537801-323.189773 180.90314 0 327.558267 144.69959 327.558267 323.189773 0 120.927163-67.435878 226.173183-167.102832 281.5934 42.615587 15.360849 82.141812 36.833907 117.9299 63.010079C866.561271 674.737408 971.383642 744.591359 1024.039909 845.534376zM714.977901 321.94441c0-137.972375-111.909789-249.815649-249.945609-249.815649-138.052193 0-249.963005 111.844298-249.963005 249.815649 0 137.962142 111.910812 249.804393 249.963005 249.804393C603.068112 571.748802 714.977901 459.905528 714.977901 321.94441zM715.045439 738.454592c-68.339458 0-130.406049 39.398312-130.406049 39.398312s-62.559824 41.913599-84.049255 70.167083c21.48943 28.256554 50.169633 52.261271 84.001159 70.15378 42.527582 22.540366 91.651396 34.440393 142.007271 34.440393 0.044002 0 0.090051-0.023536 0.140193-0.023536-59.074444-0.070608-106.915032-47.960315-106.915032-107.056248 0-57.848523 45.939285-104.675014 103.288434-106.692974C720.348212 738.770793 717.930139 738.454592 715.045439 738.454592zM690.995697 845.534376c0 19.707854 15.965623 35.693944 35.669384 35.693944 19.730367 0 35.691897-15.986089 35.691897-35.693944 0-19.705807-15.96153-35.69292-35.691897-35.69292C706.96132 809.841455 690.995697 825.828568 690.995697 845.534376zM833.981249 845.534376c0 58.932204-47.637973 106.71037-106.499569 107.009176 50.028417-0.115634 98.828866-11.965519 141.098575-34.369785 33.834596-17.891486 62.531172-41.896202 84.051301-70.15378-21.519106-28.234041-84.051301-70.167083-84.051301-70.167083s-44.287669-33.157167-131.291209-38.352493C791.478226 744.800114 833.981249 789.948383 833.981249 845.534376z" p-id="2589" fill="#bfbfbf"></path></svg>'
    },
    marks: {
        scriptloaded: false,
        autorefresh_checked:false,
        intv1: null
    },
    savesettings: function () {
        localStorage.setItem('settings', JSON.stringify(sth.settings));
    },
    vsrsioncheck: function () {
        if (!sth.settings.ver || sth.settings.ver != sth.datas.ver) {
            alert("感谢下载并使用mew增强脚本" + sth.datas.ver + "版！按下f12键打开控制台，以查看详细更新信息。");
            console.clear();
            for (let i = 0; i < sth.datas.whatsnew.length; i++) {
                console.log("%c" + sth.datas.whatsnew[i], "color: rgb(125 125 125);font-size:16px");
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
            reg = null;
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
        if (!sth.marks.autorefresh_checked) {
            if (!sth.settings.autorefresh) {
                document.querySelector(".MuiSwitch-input.PrivateSwitchBase-input.css-mraihx").click();
            };
            sth.marks.intv1 = setInterval(() => {
                if (document.querySelector(".MuiSwitch-input.PrivateSwitchBase-input.css-mraihx")) {
                    var switcher = document.querySelector(".MuiSwitch-input.PrivateSwitchBase-input.css-mraihx");
                    if (sth.settings.autorefresh != switcher.checked) {
                        sth.settings.autorefresh = switcher.checked;
                        sth.savesettings();
                    };
                    switcher = null;
                };
                console.log(1)
            }, 1000);
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
    GUIadjust: {
        subf1: function (e, setting, min, max) {
            switch (e.target.value) {
                case min:
                case "" + min:
                    if (e.deltaY < 0) {
                        sth.settings[setting]++;
                        e.target.value++;
                    };
                    break;
                case max:
                case "" + max:
                    if (e.deltaY > 0) {
                        sth.settings[setting]--;
                        e.target.value--;
                    };
                    break;
                default:
                    if (e.deltaY < 0) {
                        sth.settings[setting]++;
                        e.target.value++;
                    } else {
                        sth.settings[setting]--;
                        e.target.value--;
                    };
                    break;
            };
            sth.savesettings();
        },
        subf2: function (opt) {
            var sidebar = document.querySelector(".sidebar_root__6Jp7C");
            if (!document.querySelector("#" + opt.id)) {
                var outerdiv = document.createElement("div");
                outerdiv.id = opt.id + "-outerdiv";
                var el = document.createElement("input");
                el.type = opt.type;
                el.id = opt.id;
                el.title = opt.title;
                if (opt.type == "range") {
                    el.style = "width: 100%;";
                    el.max = opt.max;
                    el.min = opt.min;
                    el.step = 1;
                    el.value = sth.settings[opt.setting];
                }
                if (opt.type == "checkbox") {
                    el.style = "display:none";
                    el.className = "switcher";
                    var label = document.createElement("label");
                    label.setAttribute("for", opt.id);
                    label.title = opt.title;
                    label.className = "switcher-label";
                    outerdiv.append(label);
                    label = null;
                }
                for (let i = 0; i < opt.events.length; i++) {
                    opt.events[i](el);
                };
                outerdiv.prepend(el);
                sidebar.append(outerdiv);
                if (opt.extra) {
                    opt.extra(el);
                };
            };
        },
        subf3: function (outerdiv, opt) {
            if (!outerdiv.querySelector("." + opt.id)) {
                var el = document.createElement("div");
                el.innerHTML = opt.icon;
                el.title = opt.title;
                el.classList.add(opt.id);
                if (opt.style) {
                    el.style = opt.style;
                };
                for (let i = 0; i < opt.events.length; i++) {
                    opt.events[i](el);
                };
                if (opt.extra) {
                    opt.extra(el);
                };
                return el;
            };
            return null;
        },
        main: function () {
            if (document.querySelector(".sidebar_root__6Jp7C")) {
                sth.GUIadjust.subf2({
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
                                sth.GUIadjust.subf1(e, "leftsidewidth", 0, 50);
                            });
                        }
                    ]
                });
                sth.GUIadjust.subf2({
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
                                sth.GUIadjust.subf1(e, "rightsidewidth", 0, 50);
                            });
                        }
                    ]
                });
                sth.GUIadjust.subf2({
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
                                sth.GUIadjust.subf1(e, "imgwidth", 0, 100);
                            });
                        }
                    ],
                });
                sth.GUIadjust.subf2({
                    type: "checkbox",
                    id: "reverse-desktop",
                    title: "反转桌面布局",
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
                sth.GUIadjust.subf2({
                    type: "checkbox",
                    id: "reverse-order",
                    title: "想法评论正序排列",
                    events: [
                        (el) => {
                            el.addEventListener("change", (e) => {
                                if (e.target.checked) {
                                    sth.settings.reverseorder = true;
                                    sth.threadorder.setajaxhook(true);
                                } else {
                                    sth.settings.reverseorder = false;
                                    sth.threadorder.setajaxhook(false);
                                };
                                sth.savesettings();
                            });
                        },
                    ],
                    extra: (el) => {
                        var script = document.createElement("script");
                        script.onload = function () {
                            sth.marks.scriptloaded = true;
                            if (sth.settings.reverseorder) {
                                el.click();
                            };
                        };
                        script.src = "https://unpkg.com/ajax-hook@2.0.3/dist/ajaxhook.min.js";//https://github.com/wendux/Ajax-hook
                        document.head.appendChild(script);
                    }
                });
                if (sth.settings.reverseorder) {
                    sth.GUIadjust.subf2({
                        type: "checkbox",
                        id: "likecount-order",
                        title: "想法评论按喜欢数量排列",
                        events: [
                            (el) => {
                                el.addEventListener("change", (e) => {
                                    if (e.target.checked) {
                                        sth.settings.likecountorder = true;
                                    } else {
                                        sth.settings.likecountorder = false;
                                    };
                                    sth.savesettings();
                                });
                            },
                        ],
                        extra: (el) => {
                            if (sth.settings.likecountorder) {
                                el.click();
                            };
                        }
                    });
                } else if (document.querySelector("#likecount-order-outerdiv")) {
                    document.querySelector("#likecount-order-outerdiv").remove();
                }
            };
            if (document.querySelector("#comments")) {
                var root = document.querySelectorAll("#comments");
                if (!root[root.length - 1].querySelector(".thought-widget")) {
                    for (let i = 0; i < root.length; i++) {
                        var outerdiv = document.createElement("div");
                        outerdiv.className = "thought-widget";
                        root[i].appendChild(outerdiv);
                        outerdiv.appendChild(sth.GUIadjust.subf3(outerdiv, {
                            id: "to-top",
                            icon: sth.datas.totopicon,
                            title: "回到顶部",
                            events: [(el) => {
                                el.addEventListener("click", (e) => {
                                    var target = e.target;
                                    if (e.target.tagName == "path") { target = e.target.parentNode.parentNode };
                                    if (e.target.tagName == "svg") { target = e.target.parentNode };
                                    target.parentNode.parentNode.scrollTo({ top: 0, behavior: "smooth" });
                                    target = null;
                                });
                            }]
                        }));
                        if (sth.settings.reverseorder && !sth.settings.likecountorder) {
                            outerdiv.appendChild(sth.GUIadjust.subf3(outerdiv, {
                                id: "reverse-temp",
                                title: "临时反转评论顺序",
                                icon: sth.datas.tempreverseicon,
                                events: [(el) => {
                                    el.addEventListener("click", (e) => {
                                        var target = e.target;
                                        if (e.target.tagName == "path") { target = e.target.parentNode.parentNode };
                                        if (e.target.tagName == "svg") { target = e.target.parentNode };
                                        var svg = target.querySelector("svg");
                                        target = target.parentNode.parentNode.querySelector(".infinite-scroll-component");
                                        if (target.className.indexOf("reversed") == -1) {
                                            target.classList.add("reversed");
                                            svg.style = "transform:rotateX(180deg)";
                                        } else {
                                            target.classList.remove("reversed");
                                            svg.style = "transform:rotateX(0deg)";
                                        };
                                        target = null;
                                    });
                                }],
                                extra: () => { return false }
                            }));
                        };
                    };
                };
                root = null;
            };
            document.body.style.setProperty("--leftsidewidth", sth.settings.leftsidewidth + "%");
            document.body.style.setProperty("--rightsidewidth", sth.settings.rightsidewidth + "%");
            document.body.style.setProperty("--imgwidth", sth.settings.imgwidth + "%");
            document.body.style.setProperty("--imgleft", ((100 - sth.settings.imgwidth) / 2) + "%");
        },
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
    threadorder: {
        getcomment: function (url, before) {
            var xhr = new XMLHttpRequest();
            xhr.open("get", url + "?limit=100&before=" + before, false);
            xhr.setRequestHeader("mark", true)
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var res = JSON.parse(xhr.responseText);
                    if (res.entries.length > 0) {
                        sth.datas.replys.push(res);
                    }
                };
            };
            return xhr.send();
        },
        sortbylike: function (arr) {
            function compare(property) {
                return function (a, b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    return value2 - value1;
                };
            };
            if (sth.settings.likecountorder) {
                return arr.sort(compare('like_count'));
            }
            return arr;
        },
        onlyauthor: function (arr) {
            const replyname = [];
            for (let x = 0; x < arr.entries.length; x++) {
                if (arr.entries[x].author_id) {
                    replyname.push(arr.objects.users[[arr.entries[x].author_id]].name);
                };
            };
            var outerdiv = document.querySelectorAll(".thought-widget");
            var root = document.querySelectorAll("#comments");
            outerdiv[outerdiv.length - 1].appendChild(sth.GUIadjust.subf3(outerdiv[outerdiv.length - 1], {
                title: "只看Ta",
                id: "only-author",
                icon: sth.datas.onlyauthoricon,
                style: "transform: scale(0.7);",
                events: [(el) => {
                    el.addEventListener("click", (e) => {
                        var target = e.target;
                        if (e.target.tagName == "path") { target = e.target.parentNode.parentNode };
                        if (e.target.tagName == "svg") { target = e.target.parentNode };
                        var svg = target.querySelector("svg");
                        var comments = root[root.length - 1].querySelectorAll(".comment-item_name__3XDYe");
                        var names = JSON.parse(target.querySelector("textarea").value);
                        if (target.getAttribute("data-onlysb") == "true") {
                            var onlysb = prompt("打算只看谁的评论呢？填入Ta的昵称：", target.getAttribute("data-author"));
                            if (onlysb == null) {
                                return false;
                            };
                            for (let i = 0; i < comments.length; i++) {
                                if (names[i] != onlysb) {
                                    comments[i].parentNode.parentNode.parentNode.style = "display:none";
                                };
                            };
                            svg.children[0].setAttribute("fill", "#7294da");
                            target.setAttribute("data-onlysb", false);
                        } else {
                            for (let i = 0; i < comments.length; i++) {
                                comments[i].parentNode.parentNode.parentNode.style = "display:block";
                            };
                            target.setAttribute("data-onlysb", true);
                            svg.children[0].setAttribute("fill", "#bfbfbf");
                        };
                    });
                }],
                extra: (el) => {
                    el.setAttribute("data-author", root[root.length - 1].querySelector(".thought_name__1SmAb").innerText)
                    el.setAttribute("data-onlysb", true);
                    var data = document.createElement("textarea");
                    data.style = "display:none";
                    data.value = JSON.stringify(replyname);
                    data.innerText = JSON.stringify(replyname);
                    el.appendChild(data);
                }
            }));;
            outerdiv = null;
        },
        buildjson: function () {
            const res = { entries: [], objects: { comments: {}, media: {}, users: {} } };
            for (let i = 0; i < sth.datas.replys.length; i++) {
                sth.datas.replys[i].entries.reverse();
                for (let x = 0; x < sth.datas.replys[i].entries.length; x++) {
                    res.entries.push(sth.datas.replys[i].entries[x]);
                };
                res.entries = sth.threadorder.sortbylike(res.entries);
                Object.assign(res.objects.comments, sth.datas.replys[i].objects.comments);
                Object.assign(res.objects.users, sth.datas.replys[i].objects.users);
                Object.assign(res.objects.media, sth.datas.replys[i].objects.media);
            };
            sth.threadorder.onlyauthor(res);
            return JSON.stringify(res);
        },
        setajaxhook: function (switcher) {
            if (ah) {
                if (switcher) {
                    ah.proxy({
                        onRequest: (config, handler) => {
                            handler.next(config);
                        },
                        onError: (err, handler) => {
                            handler.next(err);
                        },
                        onResponse: (response, handler) => {
                            if (response.config.url.match(/(comments)/i) && response.config.url.match(/(limit)/i)) {
                                var t = JSON.parse(response.response);
                                if (!response.config.headers.mark && t.entries.length >= 20) {
                                    sth.threadorder.getcomment(response.config.url.split("?")[0], "9999999999999999999999");
                                    response.response = sth.threadorder.buildjson();
                                    sth.datas.replys.length = 0;
                                };
                                if (!response.config.headers.mark && t.entries.length < 20) {
                                    t.entries.reverse();
                                    t.entries = sth.threadorder.sortbylike(t.entries);
                                    sth.threadorder.onlyauthor(t);
                                    response.response = JSON.stringify(t);
                                };
                                if (response.config.headers.mark && t.entries.length == 100) {
                                    sth.threadorder.getcomment(response.config.url.split("?")[0], t.entries[t.entries.length - 1].id);
                                };
                            };
                            handler.next(response);
                        }
                    });
                } else {
                    ah.unProxy();
                };
            };
        }
    },
    act: function () {
        if (localStorage.settings) {
            sth.settings = JSON.parse(localStorage.settings);
        } else {
            sth.savesettings();
        };
        (() => {
            var e = document.createElement("link");
            e.rel = "stylesheet";
            e.type = "text/css";
            e.href = "https://cdn.jsdelivr.net/gh/yige233/bettermew/mew.css?md5="+sth.datas.cssmd5;
            document.head.appendChild(e);
            e = null;
        })();
        var observer = new MutationObserver(function () {
            try {
                sth.urlclickable();
                sth.imgdl();
                sth.GUIadjust.main();
                sth.calluser();
                sth.autorefresh();
                sth.search();
            }
            catch (err) {
                console.log(err);
                return false;
            };
        });
        observer.observe(document, {
            'childList': true,
            'arrtibutes': true,
            'subtree': true
        });
        sth.vsrsioncheck();
    }
};
sth.act();

