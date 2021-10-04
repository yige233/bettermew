class mew {
    constructor() {
        let defaultsetting = {
            noti_denied: false,
            left_width: 20,
            right_width: 20,
            img_width: 50,
            activefunc: [],
            bl: [],
            at_msgs: [],
            custom_css: ""
        };
        this.settings = (localStorage.settings) ? Object.assign(defaultsetting, JSON.parse(localStorage.settings)) : defaultsetting;
        this.savsetting();
        mew.loadcss(this.settings.custom_css);
        this.vsrsioncheck();
    };
    static dom(str) {
        let body = new DOMParser().parseFromString(str, 'text/html').body.children[0];
        return (body) ? body : new DOMParser().parseFromString(str, 'text/html').head.children[0];
    };
    static loadcss(css) {
        document.head.append(mew.dom(`<style>${css}</style>`));
    };
    noti(title, msg, onclickfunc) {
        if (!("Notification" in window)) {
            alert(msg);
            return;
        }
        Notification.requestPermission((status) => {
            switch (status) {
                case "denied":
                    alert(msg);
                    if (!this.settings.noti_denied) {
                        alert("您禁用了通知提醒，因此收到了此弹窗。请同意通知授权来获得更好的通知体验。此条提示将不会再次出现。");
                        this.savsetting("noti_denied", true);
                    };
                    break;
                default:
                    var noti = new Notification(title, {
                        body: msg,
                        icon: 'https://mew.fun/favicon.png'
                    });
                    noti.onclick = (onclickfunc) ? onclickfunc : () => { return false };
            };
        });
    };
    savsetting(key, value) {
        if (key) {
            value = (value) ? value : "";
            this.settings[key] = value;
        };
        localStorage.setItem("settings", JSON.stringify(this.settings));
    };
    blacklist() {
        if (!this.settings.activefunc.includes("blacklist")) { return false };
        if (!document.querySelector("[class^='card_name__']")) { return false };
        var usernames = Array.from(document.querySelectorAll("[class^='truncate message-text_name__']")).concat(Array.from(document.querySelectorAll("[class^='truncate message-image_name__']")));
        for (let i = 0; i < usernames.length; i++) {
            let el = usernames[i];
            if (el && el.className.indexOf("inblacklist") == -1) {
                if (this.settings.bl.includes(el.innerText)) {
                    el.offsetParent.offsetParent.style = "z-index:-999";
                    el.classList.add("inblacklist");
                };
            };
        };
    };
    search() {
        if (!this.settings.activefunc.includes("search")) { return false };
        if (document.querySelector("#searchicon") || !document.querySelector("[class^='sidebar_logo__']")) {
            return false
        };
        const search = new class {
            constructor() {};
            loadres(_avatar, _nickname, _content, _date, data_id) {
                var item = mew.dom(`
                <div class="searchitem">
                    <div class="poster">
                        <img src="${_avatar}">
                        <div style="display: flex;flex-direction: column;align-items: flex-start;padding: 0 0 0 5px;">
                            <span class="nickname">${_nickname}</span>
                            <span class="date">${(_date)?"发表于 " + new Date(_date).toLocaleString():""}</span>
                        </div>
                    </div>
                    <p class="content" data-id="${data_id}">${(_content)?_content:"该想法没有文字OwO 但您仍可点击这段文字了解该想法的详情"}</p>
                </div>`);
                var content = item.querySelector(".content");
                content.addEventListener("click", (e) => {
                    if (e.target.tagName == "A") {
                        return false;
                    }
                    var data_id = e.target.getAttribute("data-id");
                    if (data_id) {
                        window.open("https://mew.fun/Recouper/thoughts/" + data_id);
                    } else {
                        alert("无法打开该想法的链接！");
                    };
                });
                document.querySelector("#searchres").append(item);
                item = null;
            };
            getcookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i].trim();
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return "";
            };
            search(str) {
                document.querySelector("#searchres").innerHTML = "";
                this.loadres(mew.data.defaultavatar, "提示", "正在努力搜索中！");
                fetch(`https://api.mew.fun/api/v1/nodes/${window.location.pathname.slice(3)}/search-thoughts?keyword=${str}&limit=100`, {
                        headers: {
                            Authorization: this.getcookie("tomon_community_token")
                        }
                    }).then(res => res.json())
                    .then(res => {
                        document.querySelector("#searchres").innerHTML = "";
                        if (res.entries.length == 0) {
                            this.loadres(mew.data.defaultavatar, "提示", "没有搜索到任何信息！");
                            return false;
                        };
                        for (let i = 0; i < res.entries.length; i++) {
                            let poster = res.objects.users[res.entries[i].author_id],
                                avatar = (poster.avatar) ? res.objects.media[poster.avatar].url + "~tplv-c226mjqywu-size:96.image" : mew.data.defaultavatar;
                            this.loadres(avatar, poster.name, res.entries[i].status, res.entries[i].created_at, res.entries[i].id);
                        };
                        if (res.entries.length == 100) {
                            this.loadres(mew.data.defaultavatar, "提示", "最多只能展示100条结果哦！");
                        };
                    });
            };
            serachpage() {
                var s = mew.dom(`
                <div class="custompage_root">
                    <div aria-hidden="true" class="blackback" onclick="this.parentNode.remove()"></div>
                    <div class="MuiPaper-root MuiPaper-elevation16 pagedisplay searchpage">
                        <div class="form"><input type="text" placeholder="请输入您要搜索的内容..." \\>
                            <button>${mew.data.searchicon}</button>
                            <div>
                                <span>倒序浏览</span>
                                <input type="checkbox">
                            </div>
                        </div>
                        <div id="searchres"></div>
                    </div>
                </div>`);
                s.querySelector("div.pagedisplay > div.form > button").addEventListener("click", () => {
                    this.search(document.querySelector("div.pagedisplay > div.form > button").parentNode.children[0].value);
                });
                s.querySelector("div.pagedisplay > div.form > div > input").addEventListener("change", (e) => {
                    if (e.target.checked) {
                        document.querySelector("#searchres").style = "flex-direction: column-reverse";
                    } else {
                        document.querySelector("#searchres").style = "";
                    };
                });
                document.body.append(s);
                s = null;
            };
        };
        mew.loadcss(mew.data.css_search);
        var searchicon = mew.dom(`<div id="searchicon">${mew.data.searchicon}</div>`);
        searchicon.addEventListener("click", () => {
            search.serachpage();
        });
        document.querySelector("[class^='sidebar_logo__']").after(searchicon);
        searchicon = null;
    };
    desktop_once() {
        if (!this.settings.activefunc.includes("desktop")) { return false };
        mew.loadcss(mew.data.css_desktop);
    };
    desktop_loop() {
        if (!this.settings.activefunc.includes("desktop")) { return false };
        document.body.style.setProperty("--left-width", this.settings.left_width + "%");
        document.body.style.setProperty("--right-width", this.settings.right_width + "%");
        document.body.style.setProperty("--img-width", this.settings.img_width + "%");
        document.body.style.setProperty("--img-left", (100 - this.settings.img_width) / 2 + "%");
    };
    img_size_once() {
        if (!this.settings.activefunc.includes("img_size")) { return false };
        mew.loadcss(mew.data.css_img_size);
    };
    img_size_loop() {
        if (!this.settings.activefunc.includes("img_size")) { return false };
        document.body.style.setProperty("--img-width", this.settings.img_width + "%");
        document.body.style.setProperty("--img-left", (100 - this.settings.img_width) / 2 + "%");
    };
    thought_widget_once() {
        if (!this.settings.activefunc.includes("thought_widget")) { return false };
        mew.loadcss(mew.data.css_thought_widget);
    }
    thought_widget_loop() {
        if (!this.settings.activefunc.includes("thought_widget")) { return false };
        if (!document.querySelector("#comments")) { return false };
        var root = document.querySelectorAll("#comments");
        if (root[root.length - 1].querySelector(".thought-widget")) { return false };
        let div = mew.dom(`<div class="thought-widget"><div title="回到顶部" class="to-top">${mew.data.totopicon}</div></div>`);
        div.addEventListener("click", (e) => {
            var target = e.target;
            if (e.target.tagName == "path") {
                target = e.target.parentNode.parentNode;
            }
            if (e.target.tagName == "svg") {
                target = e.target.parentNode;
            }
            target.parentNode.parentNode.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            target = null;
        });
        root[root.length - 1].append(div);
    };
    darkmode() {
        if (!this.settings.activefunc.includes("darkmode")) { return false };
        mew.loadcss(mew.data.css_darkmode);
    };
    thought_in_middle() {
        if (!this.settings.activefunc.includes("thought_in_middle")) { return false };
        mew.loadcss(mew.data.css_thought_in_middle);
    };
    hide_image() {
        if (!this.settings.activefunc.includes("hide_image")) { return false };
        mew.loadcss(mew.data.css_hide_image);
    };
    topic_list() {
        if (!this.settings.activefunc.includes("topic_list")) { return false };
        mew.loadcss(mew.data.css_topic_list);
    };
    vsrsioncheck() {
        if (!this.settings.ver || this.settings.ver != mew.data.ver) {
            this.noti("脚本已更新", `感谢下载并使用mew增强脚本${mew.data.ver}版！按下f12键打开控制台，以查看详细更新信息。`);
            console.clear();
            for (let i = 0; i < mew.data.whatsnew.length; i++) {
                console.log(`%c${mew.data.whatsnew[i]}`, "color: rgb(125 125 125);font-size:16px");
            };
            this.savsetting("ver", mew.data.ver);
            return true;
        }
        return false;
    };
    urlclickable_once() {
        if (!this.settings.activefunc.includes("text2url")) { return false };
        mew.loadcss(mew.data.css_text2url);
    };
    urlclickable_loop() {
        if (!this.settings.activefunc.includes("text2url")) { return false };
        if (!document.querySelector(".MuiPaper-elevation16")) { return false };
        const text2url = function(el) {
            var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
            for (let i = 0; i < el.length; i++) {
                if (el[i].className.indexOf("url-turned") == -1) {
                    var txt = el[i].innerText;
                    var s = txt.match(reg);
                    if (s) {
                        for (let x = 0; x < s.length; x++) {
                            var url = "<a href=" + s[x] + ' target="_blank">' + s[x] + "</a>";
                            txt = txt.replace(s[x], url);
                        }
                        el[i].classList.add("url-turned");
                        el[i].innerHTML = txt;
                    };
                };
            };
            reg = null;
        };
        for (let i = 0; i < document.querySelectorAll(".MuiPaper-elevation16").length; i++) {
            var root = document.querySelectorAll(".MuiPaper-root")[i];
            text2url(root.querySelectorAll("p"));
            text2url(root.querySelectorAll("h3"));
            text2url(root.querySelectorAll("h2"));
            root = null;
        };
        text2url(document.querySelectorAll("[class^='message-text_content-wrap__']"));
    };
    fake_at() {
        if (!this.settings.activefunc.includes("fake_at")) { return false };
        if (!document.querySelector("[class^='card_name__']")) { return false };
        let writeatmsg = (user, msg) => {
                let newarr = this.settings.at_msgs;
                if (newarr.length >= 50) {
                    newarr.shift();
                }
                newarr.push({
                    user: user,
                    msg: msg,
                });
                this.savsetting("at_msgs", newarr);
            },
            atexist = (user, msg) => {
                return this.settings.at_msgs.some((i) => {
                    if (i.user == user && i.msg == msg) {
                        return true;
                    };
                });
            },
            usernames = Array.from(document.querySelectorAll("[class^='truncate message-text_name__']")).concat(Array.from(document.querySelectorAll("[class^='truncate message-image_name__']"))),
            msgs = document.querySelectorAll("[class^='message-text_content-wrap__']"),
            atmsg = "@" + document.querySelector("[class^='card_name__']").innerText;
        for (let i = 0; i < usernames.length; i++) {
            usernames[i].style = "cursor:pointer";
            if (usernames[i].className.indexOf("called") == -1) {
                usernames[i].addEventListener("click", (e) => {
                    var cp = mew.dom(`<textarea style="opacity: 0;z-index: -999;">@${e.target.innerText} </textarea>`);
                    document.body.append(cp);
                    cp.select();
                    document.execCommand("copy");
                    cp.remove();
                    document.querySelectorAll("[class^='message-container_textarea-bar__']")[0].focus();
                    cp = null;
                });
                usernames[i].classList.add("called");
            };
        };
        for (let x = 0; x < msgs.length; x++) {
            if (msgs[x] && msgs[x].className.indexOf("called-checked") == -1 && msgs[x].innerText.indexOf(atmsg) != -1) {
                let msg = msgs[x].innerText,
                    user = msgs[x].parentNode.querySelectorAll("[class^='truncate message-text_name__']")[0].innerText;
                if (!atexist(user, msg)) {
                    writeatmsg(user, msg);
                    msgs[x].classList.add("called-checked");
                    this.noti(user + " @了你，快去看看吧！", msg, () => {
                        return false;
                    });
                };
            };
        };
        usernames = msgs = atmsg = null;
    };
    basic() {
        if (!document.querySelector("[class^='sidebar_logo__']") || document.querySelector("#settingicon")) { return false };
        const setting = new class {
            constructor(root) {
                this.root = root;
            };
            page() {
                let page = mew.dom(`
                <div class="custompage_root">
                    <div aria-hidden="true" class="blackback" onclick="this.parentNode.remove()"></div>
                    <div class="MuiPaper-root MuiPaper-elevation16 pagedisplay">
                        <div class="title">这里可以尽脚本所能地，客制化Mew Web端。刷新页面以应用更改。</div>
                        <ul></ul>
                    </div>
                </div>`),
                    ul = page.querySelector("ul");
                for (let i in mew.data.funclist) {
                    let func = mew.data.funclist[i],
                        li = mew.dom(`
                        <li>
                            <span>${func[1]}</span>
                            <div>
                                <input type="checkbox" id="control_${func[0]}" title="${func[1]}" ${(this.root.settings.activefunc.includes(func[0]))?"checked":""} class="switcher" style="display: none;">
                                <label for="control_${func[0]}" title="${func[1]}" class="switcher-label"></label>
                            </div>
                        </li>`);
                    li.querySelector(`#control_${func[0]}`).addEventListener("click", (e) => {
                        this.activefunc(e, func[0])
                    });
                    ul.append(li);
                };
                ul.append(mew.dom(`<li><hr style="width:100%" /></li>`));
                for (let i in mew.data.munber_input) {
                    let item = mew.data.munber_input[i],
                        li = mew.dom(`
                        <li>
                            <span>${item[2]}</span>
                            <div><input type="range" id="control_${item[1]}" title="${item[2]}${this.root.settings[item[1]]}%" value="${this.root.settings[item[1]]}" max="${item[3]}" ${(this.root.settings.activefunc.includes(item[0]))?"":"disabled"} min="0" step="1" style="width: 300px;"></div>
                        </li>`);
                    li.querySelector(`#control_${item[1]}`).addEventListener("change", (e) => {
                        e.target.title = `${item[2]}${e.target.value}%`;
                        this.root.savsetting(item[1], Number(e.target.value));
                    });
                    li.querySelector(`#control_${item[1]}`).addEventListener("wheel", (e) => {
                        if (e.target.disabled) { return false };
                        e.target.title = `${item[2]}${e.target.value}%`;
                        switch (e.target.value) {
                            case "0":
                                if (e.deltaY < 0) {
                                    e.target.value++;
                                };
                                break;
                            case `${item[3]}`:
                                if (e.deltaY > 0) {
                                    e.target.value--;
                                };
                                break;
                            default:
                                if (e.deltaY < 0) {
                                    e.target.value++;
                                } else {
                                    e.target.value--;
                                };
                                break;
                        };
                        this.root.savsetting(item[1], Number(e.target.value));
                    });
                    ul.append(li);
                };
                ul.append(mew.dom(`<li><hr style="width:100%" /></li>`));
                let bl = "";
                for (let nick in this.root.settings.bl) {
                    bl += this.root.settings.bl[nick] + "\n";
                };
                let bltextarea = mew.dom(`
                    <li style="flex-wrap: wrap;">
                        <span>下方的文本框用于填写黑名单。填写昵称，每行一个。</span>
                        <textarea class="mytextarea" vlaue="${bl}" ${(this.root.settings.activefunc.includes("blacklist"))?"":"disabled"}>${bl}</textarea>
                    </li>`);
                bltextarea.addEventListener("input", (e) => {
                    let bl = e.target.value;
                    this.savsetting("bl", bl.split("\n").filter((i) => {
                        return i;
                    }));
                });
                ul.append(bltextarea);
                ul.append(mew.dom(`<li><hr style="width:100%" /></li>`));
                let customcss = mew.dom(`
                    <li style="flex-wrap: wrap;">
                        <span>下方的文本框可以用于加载自定义css样式。</span>
                        <textarea class="mytextarea">${(this.root.settings.custom_css)?this.root.settings.custom_css:""}</textarea>
                    </li>`),
                    textarea = customcss.querySelector("textarea");
                textarea.addEventListener("input", (e) => {
                    this.root.savsetting("custom_css", e.target.value);
                });
                ul.append(customcss);
                document.body.append(page);
                page = null;
            };
            activefunc(e, func) {
                let list = this.root.settings.activefunc;
                if (e.target.checked) {
                    list.push(func);
                } else {
                    list.splice(list.indexOf(func), 1)
                };
                this.root.savsetting("activefunc", list);
            };
        }(this);
        mew.loadcss(mew.data.css_basic);
        var icon = mew.dom(`<div id="settingicon">${mew.data.settingicon}</div>`);
        icon.addEventListener("click", () => {
            setting.page();
        });
        document.querySelector("[class^='sidebar_logo__']").after(icon);
        icon = null;
    };
};
mew.data = {
    ver: 0.6,
    whatsnew: [
        "当前脚本版本:0.6",
        "更新内容：",
        "1、重写了部分代码，现在可更加深度地定制mew Web端。",
        "2、现在可以添加自定义css样式表。",
        "3、由于看不懂自己写的代码，“只看Ta”功能在此次更新中被移除了。"
    ],
    funclist: [
        ["darkmode", "深色模式：mew将根据浏览器偏好，在浏览器选择深色模式时自动切换为深色模式。"],
        ["desktop", "桌面布局更改：可以通过下方的调整条，分别调整想法栏和主页栏的宽度。"],
        ["thought_in_middle", "想法全文居中展示：点开想法全文后，想法不再靠边显示而是居中显示。"],
        ["img_size", "调整想法全文内图片大小：可以通过下方的调整条，来调整想法内图片的显示大小。"],
        ["hide_image", "紧凑想法列表：隐藏左侧想法栏图片，仅显示部分信息，使想法列表更加紧凑。"],
        ["topic_list", "更好的话题栏：鼠标置于话题栏上时，将会展开所有话题Tag，移出则收起。"],
        ["blacklist", "黑名单：下方有一个黑名单文本框，黑名单内用户的发言将不会显示于讨论区。"],
        ["search", "PC端想法搜索：左侧据点列表上方新增一个搜索按钮，点击后可搜索据点内想法。"],
        ["text2url", "Url变为可点击：将想法内及讨论区内不可点击的链接转换为可点击。"],
        ["thought_widget", "在想法全文内增加一个“回到顶部”按钮。"],
        ["fake_at", "并不存在的@功能：点击讨论区某用户的昵称，即可复制“@xxx”的字样；若讨论区内有“@{你的昵称}”字样的信息，会弹窗提醒。"]
    ],
    munber_input: [
        ["desktop", "left_width", "调整想法栏宽度：", 50],
        ["desktop", "right_width", "调整主页栏宽度：", 50],
        ["img_size", "img_width", "调整想法全文内图片大小：", 100]
    ],
    defaultavatar: "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
    settingicon: `<svg t="1633357352154" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1249" width="32" height="32"><path d="M919.6 405.6l-57.2-8c-12.7-1.8-23-10.4-28-22.1-11.3-26.7-25.7-51.7-42.9-74.5-7.7-10.2-10-23.5-5.2-35.3l21.7-53.5c6.7-16.4 0.2-35.3-15.2-44.1L669.1 96.6c-15.4-8.9-34.9-5.1-45.8 8.9l-35.4 45.3c-7.9 10.2-20.7 14.9-33.5 13.3-14-1.8-28.3-2.8-42.8-2.8-14.5 0-28.8 1-42.8 2.8-12.8 1.6-25.6-3.1-33.5-13.3l-35.4-45.3c-10.9-14-30.4-17.8-45.8-8.9L230.4 168c-15.4 8.9-21.8 27.7-15.2 44.1l21.7 53.5c4.8 11.9 2.5 25.1-5.2 35.3-17.2 22.8-31.7 47.8-42.9 74.5-5 11.8-15.3 20.4-28 22.1l-57.2 8C86 408 72.9 423 72.9 440.8v142.9c0 17.7 13.1 32.7 30.6 35.2l57.2 8c12.7 1.8 23 10.4 28 22.1 11.3 26.7 25.7 51.7 42.9 74.5 7.7 10.2 10 23.5 5.2 35.3l-21.7 53.5c-6.7 16.4-0.2 35.3 15.2 44.1L354 927.8c15.4 8.9 34.9 5.1 45.8-8.9l35.4-45.3c7.9-10.2 20.7-14.9 33.5-13.3 14 1.8 28.3 2.8 42.8 2.8 14.5 0 28.8-1 42.8-2.8 12.8-1.6 25.6 3.1 33.5 13.3l35.4 45.3c10.9 14 30.4 17.8 45.8 8.9l123.7-71.4c15.4-8.9 21.8-27.7 15.2-44.1l-21.7-53.5c-4.8-11.8-2.5-25.1 5.2-35.3 17.2-22.8 31.7-47.8 42.9-74.5 5-11.8 15.3-20.4 28-22.1l57.2-8c17.6-2.5 30.6-17.5 30.6-35.2V440.8c0.2-17.8-12.9-32.8-30.5-35.2z m-408 245.5c-76.7 0-138.9-62.2-138.9-138.9s62.2-138.9 138.9-138.9 138.9 62.2 138.9 138.9-62.2 138.9-138.9 138.9z" fill="#345bac" p-id="1250"></path></svg>`,
    totopicon: '<svg t="1624339130920" source="https://www.iconfont.cn" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1179" width="40" height="40"><path d="M708.85376 416.19456c0 2.0992-0.65536 4.1984-1.9968 5.96992-2.68288 3.56352-7.424 4.89472-11.5712 3.24608L571.52512 376.5248l0 286.52544c0 5.4784-4.44416 9.92256-9.9328 9.92256l-99.18464 0c-5.46816 0-9.91232-4.44416-9.91232-9.92256L452.49536 376.5248l-123.78112 48.88576c-4.13696 1.6384-8.87808 0.3072-11.56096-3.24608-2.69312-3.56352-2.68288-8.47872 0.06144-12.01152L504.13568 167.0144c1.88416-2.44736 4.78208-3.87072 7.86432-3.87072s5.9904 1.4336 7.86432 3.87072l186.9312 243.13856C708.15744 411.92448 708.85376 414.0544 708.85376 416.19456zM512 726.51776c-46.32576 0-83.88608 37.55008-83.88608 83.88608 0 46.336 37.56032 83.88608 83.88608 83.88608s83.89632-37.55008 83.89632-83.88608C595.89632 764.07808 558.32576 726.51776 512 726.51776z" p-id="1180" fill="#bfbfbf"></path></svg>',
    searchicon: '<svg t="1627976673096" source="https://www.iconfont.cn" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7438" width="20" height="20"><path d="M222.6944 222.7968A323.1488 323.1488 0 0 0 133.6832 512c19.2512-87.3728 64.512-172.7488 135.0144-243.3024C339.2512 198.1184 424.6272 152.8832 512 133.632c-101.632-19.1488-210.688 10.5216-289.3056 89.1648z" fill="#7294da" p-id="7439"></path><path d="M989.44 822.1184l-121.7024-121.7024a118.016 118.016 0 0 0-92.8-34.1248c114.4576-165.5552 97.92-394.3936-49.4848-541.824-165.9392-165.9904-435.0464-165.9904-601.0368 0-165.9392 165.9904-165.9392 435.1232 0 601.1136 147.4048 147.4304 376.064 163.84 541.7216 49.3824-2.56 33.28 8.8576 67.5328 34.1248 92.8l121.7024 121.728c46.08 45.9776 121.3696 45.9776 167.3472 0 46.208-45.9776 46.208-121.2928 0.128-167.3728zM676.096 676.096c-138.6752 138.6752-363.392 138.6752-502.016 0-138.6752-138.6752-138.6752-363.4432 0-502.1184 138.624-138.6752 363.3408-138.6752 502.016 0 138.6496 138.5728 138.6496 363.4432 0 502.1184z" fill="#7294da" p-id="7440"></path></svg>',
    css_basic: `
    .custompage_root {
        position: fixed;
        inset: 0px;
        z-index: 10;
    }
    .blackback {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        inset: 0px;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 1;
        z-index: 10;
    }
    .pagedisplay {
        color: rgba(0, 0, 0, 0.87);
        background-color: rgb(var(--colors-background-regular));
        box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        flex: 1 0 auto;
        z-index: 1200;
        position: fixed;
        top: 0px;
    }
    input.switcher+label {
        margin: 0 0 5px 0;
        width: 40px;
        height: 20px;
        background-color: #dddddd;
        border-radius: 20px;
        display: block;
        position: relative;
        cursor: pointer;
        outline: none;
        user-select: none;
    }
    input.switcher+label:before,
    input.switcher+label:after {
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        content: "";
    }
    input.switcher+label:before {
        right: 0px;
        background-color: #f1f1f1;
        border-radius: 20px;
        transition: background 0.4s;
    }
    input.switcher+label:after {
        width: 20px;
        background-color: #fff;
        border-radius: 100%;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transition: margin 0.4s;
    }
    input.switcher:checked+label:before {
        background-color: rgb(114 148 218);
    }
    input.switcher:checked+label:after {
        margin-left: 20px;
    }
    input[type="range"] {
        cursor: pointer;
    }
    .mytextarea:disabled,
    input[type="range"]:disabled {
        cursor: not-allowed;
    }
    .mytextarea {
        background-color: rgb(var(--colors-background-hover));
        color: rgb(var(--colors-msg));
        border: 2px solid rgb(52, 91, 172);
        width:100%;
        height:200px;
    }
    .title {
        color: rgb(var(--colors-msg));
        margin: 20px auto;
        font-size: 20px;
    }
    .pagedisplay ul>li>span {
        color: rgb(var(--colors-msg));
        margin: 0 20px 0 0;
    }
    .pagedisplay ul>li {
        display: flex;
        justify-content: space-between;
        margin: 10px 20px;
        align-items: center;
    }
    .pagedisplay ul {
        margin: 20px 10% 0 10%;
        border: 2px solid rgb(52, 91, 172);
        border-radius: 20px;
    }`,
    css_topic_list: `
    [class^='topic-selector_root__']:hover {
        height: unset
    }
    [class^='topic-selector_root__'] button {
        height: 30px;
        margin: 5px 5px 0px 0px;
    }
    [class^='topic-selector_root__'] {
        height: 43px;
        flex-wrap: wrap;
    }`,
    css_desktop: `
    [class^='desktop_right-container__'] {
        flex-basis: var(--right-width) !important
    }
    [class^='desktop_left-container__'] {
        flex-basis: var(--left-width) !important
    }
    [class^='thought-v2_content__'] p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    `,
    css_thought_in_middle: `
    .MuiPaper-elevation16 {
        width: 50% !important;
        right: 25%;
    }`,
    css_hide_image: `
    [class^='post-preview_cover__'],
    [class^='v2_frame-wrapper__'],
    [class^='thought-v2_img-wrapper__'] {
        display: none;
    }`,
    css_search: `
    .searchpage div.form {
        position: relative;
        width: 300px;
        margin: 40px auto
    }
    .searchpage div.form div {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .searchpage div.form div input {
        width: 24px;
        height: 24px;
    }
    .searchpage div.form svg {
        margin: 0 0 0 10px;
    }
    .searchpage input {
        border: 2px solid rgb(52, 91, 172);
        border-radius: 10px;
        background: rgb(249, 240, 218);
        color: rgb(158, 156, 156);
        width: 100%;
        height: 42px;
        padding-left: 13px;
        outline: none
    }
    .searchpage button {
        top: 0;
        right: 0;
        background: rgb(52, 91, 172);
        border-radius: 0 10px 10px 0;
        height: 42px;
        width: 42px;
        cursor: pointer;
        position: absolute;
        border: none;
        outline: none;
        color: rgb(255, 255, 255)
    }
    #searchres {
        display: flex;
        flex-direction: column
    }
    .searchitem {
        width: 90%;
        margin: 5px auto;
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    }
    .searchitem .content,
    #searchicon {
        cursor: pointer;
    }
    .searchitem div,
    .searchitem p {
        padding: 0px 10px 10px 10px;
    }
    .searchitem div.poster {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 5px;
    }
    .searchitem div.poster img {
        width: 36px;
        height: 36px;
        border-radius: 5px;
    }
    .searchitem div.poster .nickname {
        font-weight: bold
    }
    .searchitem div.poster .date {
        font-size: 10px;
    }
    .searchpage div.form div {
        color: rgb(var(--colors-receive-msg));
    }
    .searchitem,
    .searchpage input {
        background-color: rgb(var(--colors-background-receive-msg));
        color: rgb(var(--colors-receive-msg));
    }`,
    css_darkmode: `
    @media (prefers-color-scheme: dark) {
        body#app {
            --colors-background-regular: 33 33 33;
            --colors-background-lighter: 43 43 43;
            --colors-background-morelighter: 55 55 55;
            --colors-background-gray: 60 60 60;
            --colors-emphasis: 230 230 230;
            --colors-background-receive-msg: 80 80 80;
            --colors-msg: 235 235 235;
            --colors-receive-msg: 255 255 255;
            --colors-background-sent-msg: 120 120 120;
            --colors-background-darker: 25 25 25;
            --colors-primary: 114 148 218;
            --colors-primary-darker: 154 178 228;
            --colors-gray-200: 140 140 140;
            --colors-gray-100: 110 110 110;
            --colors-background-msg: 100 100 100;
            --colors-caption: 235 235 235;
            --colors-background-comment: 60 60 60;
            --colors-background-reply: 80 80 80;
            --colors-body: 255 255 255;
            --colors-gray-50: 60 60 60;
            --colors-background-light: 45 45 45;
            --colors-background-selected-comment: 100 100 100;
            --colors-gray-500: 250 250 250;
            --colors-gray-400: 240 240 240;
            --colors-background-dialog: 55 55 55;
            --colors-background-heading: 45 45 45;
            --colors-gray-900: 255 255 255;
            --colors-gray-700: 245 245 245;
            --colors-background-hover:43 43 43;
        }
        [class^='thought-view_post-content__']>div p,
        h1,
        h2,
        h3 {
            color: rgb(var(--colors-emphasis)) !important;
        }
        [class^='message-container_list__']>div,
        [class^='message-container_list__'],
        [class^='v2_bili-root__'],
        [class^='message-stamp_bubble__'],
        div[data-embed-type],
        div[data-embed-type=link]>div,
        [class^='containers_middle-root__'] {
            background-color: rgb(var(--colors-background-lighter));
        }
        [class^='containers_chat-header__'],
        [class^='message-container_reply-bar__'] {
            background-color: rgb(var(--colors-background-darker)) !important;
        }
        .MuiIconButton-sizeSmall {
            color: white;
        }
        .MuiIconButton-sizeSmall:hover,
        [class^='base_root__'] {
            background-color: rgb(var(--colors-gray-200));
        }
        textarea,
        [class^='pin-list_root__'],
        [class^='comments_title-bar__'] {
            background: rgb(var(--colors-background-lighter)) !important;
        }
        div.w-full.flex.justify-center.absolute.top-0.z-10.bg-background-regular.h-14.items-center {
            background-color: rgb(var(--colors-background-regular)) !important;
        }
        [class^='comment-item_name__'],
        [class^='comment-item_action-btn__'],
        .text-sm.truncate,
        [class^='card_name__'],
        .text-black {
            color: rgb(var(--colors-msg));
        }
        [class^='containers_selector__'] {
            background-color: rgb(var(--colors-background-regular));
        }
        [class^='card_root__'],
        [class^='v2_root__'],
        [class^='button_reaction-btn__'],
        [class^='search-bar_input__'] {
            background-color: rgb(var(--colors-background-receive-msg));
        }
        [class^='card_content__'],
        [class^='item-in-list_header__'],
        [class^='thought_quote-bar__'],
        .font-medium,
        .text-md.truncate,
        .text-3xl,
        .text-xl,
        .my-4,
        [class^='wiki-item_header__'],
        .text-2xl,
        div.MuiDialogContent-root>p,
        [class^='user-setting-dialog_header__'],
        [class^='right_white-btn__'],
        .ProseMirror{
            color: rgb(var(--colors-receive-msg));
        }
        .MuiPaper-elevation16,
        .MuiPaper-elevation {
            background-color: rgb(var(--colors-background-regular));
        }
        [class^='base_no-outline__'],
        [class^='base_no-outline__']:active,
        [class^='card_action-btn__'] {
            background-color: rgb(var(--colors-background-receive-msg));
            color: rgb(var(--colors-receive-msg));
        }
        [class^='card_identity-card-root-desktop__'] [class^='card_action-btn__'],
        [class^='text-field_input__'],
        [class^='text-field_root__']{
            background-color: rgb(var(--colors-background-receive-msg));
            color: rgb(var(--colors-receive-msg));
        }
        [class^='message-container_reaction-panel__'],
        [class^='drawer_dialog__'],
        [class^='plain-input_compose-textarea-wrapper__'] {
            background-color: rgb(var(--colors-background-morelighter));
        }
    }`,
    css_text2url: `
    .url-turned a {
        text-decoration: none;
        color: rgb(255 70 175);
    }`,
    css_img_size: `
    [class^='thought-view-v2_img-wrapper__'] {
        width: var(--img-width);
        margin: 0 0 0 var(--img-left);
    }
    [class^='thought-view-v2_post-content__'] div.w-full.bg-center.bg-cover {
        width: var(--img-width);
    }`,
    css_thought_widget: `
    .thought-widget {
        z-index: 10;
        position: absolute;
        width: 40px;
        bottom: 20%;
        right: 5%;
        display: flex;
        flex-direction: column;
        background-color: rgb(70 70 70 / 80%);
        cursor: pointer;
        border-radius: 20px;
    }`
};

(() => {
    let myMew = new mew();
    //以下为单次运行的函数
    myMew.darkmode();
    myMew.desktop_once();
    myMew.thought_in_middle();
    myMew.hide_image();
    myMew.topic_list();
    myMew.urlclickable_once();
    myMew.img_size_once();
    myMew.thought_widget_once();
    //单次运行函数结束
    var observer = new MutationObserver(() => {
        try {
            myMew.basic(); //基本函数，加载设置页
            //循环运行函数
            myMew.blacklist();
            myMew.search();
            myMew.desktop_loop();
            myMew.urlclickable_loop();
            myMew.img_size_loop();
            myMew.thought_widget_loop();
            myMew.fake_at();
            //循环运行函数结束
        } catch (err) {
            console.log(err);
            return false;
        };
    });
    observer.observe(document, {
        childList: true,
        arrtibutes: true,
        subtree: true,
    });
})();