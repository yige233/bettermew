class Mew {
    _defaultsetting = {
        noti_denied: false,
        mainfunc: [],
        childfunc: []
    };
    _data = {
        icon_setting: `<svg t="1633357352154" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1249" width="32" height="32"><path d="M919.6 405.6l-57.2-8c-12.7-1.8-23-10.4-28-22.1-11.3-26.7-25.7-51.7-42.9-74.5-7.7-10.2-10-23.5-5.2-35.3l21.7-53.5c6.7-16.4 0.2-35.3-15.2-44.1L669.1 96.6c-15.4-8.9-34.9-5.1-45.8 8.9l-35.4 45.3c-7.9 10.2-20.7 14.9-33.5 13.3-14-1.8-28.3-2.8-42.8-2.8-14.5 0-28.8 1-42.8 2.8-12.8 1.6-25.6-3.1-33.5-13.3l-35.4-45.3c-10.9-14-30.4-17.8-45.8-8.9L230.4 168c-15.4 8.9-21.8 27.7-15.2 44.1l21.7 53.5c4.8 11.9 2.5 25.1-5.2 35.3-17.2 22.8-31.7 47.8-42.9 74.5-5 11.8-15.3 20.4-28 22.1l-57.2 8C86 408 72.9 423 72.9 440.8v142.9c0 17.7 13.1 32.7 30.6 35.2l57.2 8c12.7 1.8 23 10.4 28 22.1 11.3 26.7 25.7 51.7 42.9 74.5 7.7 10.2 10 23.5 5.2 35.3l-21.7 53.5c-6.7 16.4-0.2 35.3 15.2 44.1L354 927.8c15.4 8.9 34.9 5.1 45.8-8.9l35.4-45.3c7.9-10.2 20.7-14.9 33.5-13.3 14 1.8 28.3 2.8 42.8 2.8 14.5 0 28.8-1 42.8-2.8 12.8-1.6 25.6 3.1 33.5 13.3l35.4 45.3c10.9 14 30.4 17.8 45.8 8.9l123.7-71.4c15.4-8.9 21.8-27.7 15.2-44.1l-21.7-53.5c-4.8-11.8-2.5-25.1 5.2-35.3 17.2-22.8 31.7-47.8 42.9-74.5 5-11.8 15.3-20.4 28-22.1l57.2-8c17.6-2.5 30.6-17.5 30.6-35.2V440.8c0.2-17.8-12.9-32.8-30.5-35.2z m-408 245.5c-76.7 0-138.9-62.2-138.9-138.9s62.2-138.9 138.9-138.9 138.9 62.2 138.9 138.9-62.2 138.9-138.9 138.9z" fill="#345bac" p-id="1250"></path></svg>`,
        css_basic: `
    @keyframes appear{
        from{
            left: 100%;
        }
        to{
            left: 25%;
        }
    }
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
    .stdpage {
        width: 50%;
        left: 25%;
        color: rgba(0, 0, 0, 0.87);
        background-color: rgb(var(--colors-background-regular));
        box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        max-width:90%;
        flex: 1 0 auto;
        z-index: 12;
        position: fixed;
        top: 0px;
    }
    input.switcher {
        display: none;
    }
    input.switcher+label {
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
    input.switcher:disabled+label,
    input[type="range"]:disabled {
        cursor: not-allowed;
    }
    .mytextarea {
        background-color: rgb(var(--colors-background-hover));
        color: rgb(var(--colors-msg));
        border: 2px solid rgb(52, 91, 172);
        width:100%;
        min-height:100px;
        white-space: nowrap;
    }
    .title {
        color: rgb(var(--colors-msg));
        margin: 20px auto;
        font-size: 20px;
        padding: 0px 7%;
    }
    .stdpage ul>li>span {
        color: rgb(var(--colors-msg));
        margin: 0 20px 0 0;
    }
    .stdpage ul>li {
        display: flex;
        justify-content: space-between;
        margin: 5px 20px;
        align-items: center;
    }
    .stdpage ul {
        padding: 20px 0 20px 0;
        margin: 20px 10% 20px 10%;
        border: 2px solid rgb(52, 91, 172);
        border-radius: 20px;
    }
    #icon_setting {
        cursor: pointer;
        padding: 10% 10%;
    }
    .childoption {
        padding: 0 0 0 2em;
    }`,
    };
    _config = [];
    _config_extra = [];
    _settings = {};
    constructor() {
        Mew.loadcss(this._data.css_basic);
        this._settings = localStorage.settings ? Object.assign({}, this._defaultsetting, JSON.parse(localStorage.settings)) : this._defaultsetting;
        localStorage.setItem("settings", JSON.stringify(this._settings));
    };
    static dom(str) {
        let body = new DOMParser().parseFromString(str, 'text/html').body.children[0];
        return body ? body : new DOMParser().parseFromString(str, 'text/html').head.children[0];
    };
    static loadcss(css) {
        let el = Mew.dom(`<style type="text/css">${css}</style>`);
        document.head.append(el);
        return el;
    };
    static getcookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (let i in ca) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        };
        return "";
    };
    static stdpage(el) {
        let page = Mew.dom(`<div class="custompage_root"><div aria-hidden="true" class="blackback"></div><div class="MuiPaper-root MuiPaper-elevation16 stdpage" style="animation: appear 0.5s ease 0s 1 normal;">${el}</div</div>`);
        page.querySelector(".stdpage").addEventListener("animationend", (e) => {
            let stdpage = e.target;
            stdpage.removeAttribute("style");
            if (stdpage.className.indexOf("disapper") != -1) {
                stdpage.parentNode.remove();
            };
            page.querySelector(".blackback").addEventListener("click", () => {
                stdpage.classList.add("disapper");
                stdpage.setAttribute("style", "animation: appear 0.5s ease 0s 1 reverse;");
            });
        });
        return page;
    };
    static async fetchres(url) {
        const res = await fetch(url, {
            cache: "force-cache"
        });
        return await res.text();
    };
    static template(str, data) {
        if (!str) return false;
        for (let i in data) {
            if (typeof (data[i]) == "function") continue;
            let reg = new RegExp(`{{\\s*\\$${i}\\s*}}`, "g");
            str = str.replace(reg, data[i]);
        };
        return str;
    };
    conf(options) {
        let pushconfig = (obj, config) => {
                let conf = {
                    id: obj.id,
                    parent: obj.parent ? obj.parent : null,
                    max: obj.max ? obj.max : null,
                    short_desc: obj.short_desc,
                    long_desc: obj.long_desc,
                    func_once: obj.func_once ? true : false,
                    func_loop: obj.func_loop ? true : false,
                    type: obj.type ? obj.type : null,
                    value: obj.value ? obj.value : null,
                    save: obj.save ? obj.save : null,
                    hide: obj.hide ? obj.hide : null,
                };
                for (let k in conf) {
                    if (conf[k] === null || conf[k] === undefined) delete conf[k];
                };
                config.push(conf);
            },
            mode = ["once", "loop"];
        pushconfig(options, this._config);
        if (options.child_funcs) {
            for (let i in options.child_funcs) {
                pushconfig(Object.assign(options.child_funcs[i], {
                    parent: options.id
                }), this._config);
            };
        };
        if (options.always && !this._settings.mainfunc.includes(options.id)) {
            let list = this._settings.mainfunc;
            list.push(options.id);
            this.savsetting("mainfunc", list);
        };
        if (options.config_extra) {
            for (let i in options.config_extra) {
                this._defaultsetting[options.config_extra[i].id] = options.config_extra[i].default;
                if (!this._settings[options.config_extra[i].id]) this.savsetting(options.config_extra[i].id);
                pushconfig(Object.assign(options.config_extra[i], {
                    parent: options.id
                }), this._config_extra);
            };
        };
        for (let x in mode) {
            let m = mode[x];
            this[`func_${m}_${options.id}`] = () => {
                if (!this._settings.mainfunc.includes(options.id)) return false;
                if (options[`func_${m}`]) options[`func_${m}`].bind(this)();
                for (let i in options.child_funcs) {
                    if (this._settings.childfunc.includes(options.child_funcs[i].id) && options.child_funcs[i][`func_${m}`]) options.child_funcs[i][`func_${m}`].bind(this)();
                };
            };
        };
    };
    noti(title, msg, onclickfunc) {
        if (!("Notification" in window)) {
            alert(title + msg);
            onclickfunc();
            return;
        };
        Notification.requestPermission((status) => {
            if (status == "denied") {
                alert(title + msg);
                onclickfunc();
                if (!this._settings.noti_denied) {
                    alert("您禁用了通知提醒，因此收到了此弹窗。请同意通知授权来获得更好的通知体验。此条提示将不会再次出现。");
                    this.savsetting("noti_denied", true);
                };
                return;
            }
            var noti = new Notification(title, {
                body: msg,
                icon: 'https://mew.fun/favicon.png'
            });
            noti.onclick = (onclickfunc) ? onclickfunc : () => {
                return false
            };
        });
    };
    savsetting(key, value) {
        if (this._settings.hasOwnProperty(key) || this._defaultsetting.hasOwnProperty(key)) {
            this._settings[key] = (value) ? value : this._defaultsetting[key]
        } else {
            return false;
        };
        localStorage.setItem("settings", JSON.stringify(this._settings));
        return this._settings[key];
    };
    basic() {
        if (!document.querySelector("[class^='sidebar_root__']") || document.querySelector("#icon_setting")) return false;
        const setting = {
            activatefunc: (e, func, path) => {
                let list = this._settings[path];
                if (e.target.checked) {
                    list.push(func)
                } else {
                    list.splice(list.indexOf(func), 1)
                };
                this.savsetting(path, list);
            },
            switcher: async (item) => {
                if (item.hide) return false;
                let funcpath = (item.parent) ? "childfunc" : "mainfunc",
                    li = Mew.dom(`
                    <li ${(item.parent)?"class='childoption'":""}>
                        <span>${item.short_desc}：${item.long_desc}</span>
                        <div>
                            <input type="checkbox" id="control_${item.id}" title="${item.short_desc}" ${(this._settings[funcpath].includes(item.id))?"checked":"" } ${(item.parent==null || this._settings.mainfunc.includes(item.parent))?"":"disabled"} class="switcher">
                            <label for="control_${item.id}" title="${item.short_desc}" class="switcher-label"></label>
                        </div>
                    </li>`);
                li.querySelector(`#control_${item.id}`).addEventListener("click", (e) => {
                    setting.activatefunc(e, item.id, funcpath)
                });
                return li;
            },
            config_item: async (item) => {
                if (item.type == "text") {
                    let li = Mew.dom(`
                        <li style="flex-wrap: wrap;">
                            <span>${item.long_desc}</span>
                            <textarea class="mytextarea" ${(this._settings.mainfunc.includes(item.parent))?"":"disabled"}>${(item.value)? await item.value.bind(this)():""}</textarea>
                        </li>`);
                    li.querySelector("textarea").addEventListener("input", async (e) => {
                        let value = await item.save.bind(this)(e);
                        this.savsetting(item.id, value);
                    });
                    return li;
                };
                if (item.type == "number") {
                    let li = Mew.dom(`
                <li>
                    <span>${item.long_desc}</span>
                    <span class="value">${this._settings[item.id]}</span>
                    <div><input type="range" id="control_${item.id}" title="${item.long_desc}${this._settings[item.id]}" value="${this._settings[item.id]}" max="${item.max}" ${(this._settings.mainfunc.includes(item.parent))?"":"disabled"} min="0" step="1" style="width: 300px;"></div>
                </li>`);
                    li.querySelector(`#control_${item.id}`).addEventListener("change", (e) => {
                        e.target.title = `${item.long_desc}${e.target.value}`;
                        e.currentTarget.parentNode.parentNode.querySelector(".value").innerText = `${e.target.value}`;
                        this.savsetting(item.id, Number(e.target.value));
                    });
                    li.querySelector(`#control_${item.id}`).addEventListener("wheel", (e) => {
                        e.preventDefault();
                        if (e.target.disabled) return false;
                        switch (e.target.value) {
                            case "0":
                                if (e.deltaY < 0) e.target.value++;
                                break;
                            case `${item.max}`:
                                if (e.deltaY > 0) e.target.value--;
                                break;
                            default:
                                if (e.deltaY < 0) {
                                    e.target.value++;
                                } else {
                                    e.target.value--;
                                };
                                break;
                        };
                        e.target.title = `${item.long_desc}${e.target.value}`;
                        e.currentTarget.parentNode.parentNode.querySelector(".value").innerText = `${e.target.value}`;
                        this.savsetting(item.id, Number(e.target.value));
                    });
                    return li;
                };
                return false;
            },
            page: async () => {
                let page = Mew.stdpage(`<div class="title">这里可以尽脚本所能地，客制化Mew Web端。一般情况下，请刷新页面以应用更改。部分更改可立即或重载设置页生效。</div><ul></ul>`),
                    ul = page.querySelector("ul");
                for (let i in this._config) {
                    let li = await setting.switcher(this._config[i]);
                    if (li) ul.append(li);
                };
                ul.append(Mew.dom(`<li><hr style="width:100%" /></li>`));
                for (let i in this._config_extra) {
                    let li = await setting.config_item(this._config_extra[i]);
                    if (li) ul.append(li);
                };
                document.body.append(page);
            }
        };
        var icon = Mew.dom(`<div id="icon_setting">${this._data.icon_setting}</div>`);
        icon.addEventListener("click", () => {
            setting.page();
        });
        document.querySelector("[class^='sidebar_root__']").append(icon);
    };
    run() {
        for (let i in this._config) {
            if (this._config[i].func_once && !this._config[i].parent) {
                this[`func_once_${this._config[i].id}`]();
            };
        };
        var observer = new MutationObserver(() => {
            try {
                this.basic();
                for (let i in this._config) {
                    if (this._config[i].func_loop && !this._config[i].parent) {
                        this[`func_loop_${this._config[i].id}`]();
                    };
                };
            } catch (err) {
                console.warn(err);
                return false;
            };
        });
        observer.observe(document, {
            childList: true,
            arrtibutes: true,
            subtree: true,
        });
    };
};
let resources = {
    icon_totop: 'https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/icon/totop.svg',
    icon_search: 'https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/icon/search.svg',
    css_topic_list: "https://cdn.jsdelivr.net/gh/yige233/bettermew@7d288a8/css/topic_list.css",
    css_desktop: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/desktop.css",
    css_thought_in_middle: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/thought_in_middle.css",
    css_whisper_in_middle: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/whisper_in_middle.css",
    css_desktop_reverse: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/desktop_reverse.css",
    css_compact_thought_hide_img: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/compact_thought_hide_img.css",
    css_compact_thought_hide_text: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/compact_thought_hide_text.css",
    css_compact_thought_more_node: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/compact_thought_more_node.css",
    css_search: "https://cdn.jsdelivr.net/gh/yige233/bettermew@be3fa4e/css/search.css",
    css_darkmode: "https://cdn.jsdelivr.net/gh/yige233/bettermew@e68d47c/css/darkmode.css",
    css_text2url: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/text2url.css",
    css_img_size: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/img_size.css",
    css_thought_widget: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/thought_widget.css",
    css_only_this_mewer: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/only_this_mewer.css",
    css_custom_stamp: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/custom_stamp.css",
    icon_node_manage: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/icon/node_manage.svg",
    css_node_manage: "https://cdn.jsdelivr.net/gh/yige233/bettermew@e68d47c/css/node_manage.css",
    template_node_mng: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage.html",
    template_node_mng_text_card: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_member_text_card.html",
    template_node_mng_topic_tab1: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_topic_tab1.html",
    template_node_mng_topic_tab2_card: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_topic_tab2_card.html",
    template_node_mng_topic_tab2_btn: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_topic_tab2_btn.html",
    template_node_mng_topic_tab3: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_topic_tab3.html",
    template_node_mng_member_normal_card: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_member_normal_card.html",
    template_node_mng_member_ban_card: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_member_ban_card.html",
    template_node_mng_member_search_card: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_member_search_card.html",
    template_node_mng_req_pending_card: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_req_pending_card.html",
    template_node_mng_req_approved_card: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_req_approved_card.html",
    template_node_mng_req_rejected_card: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_req_rejected_card.html",
    template_node_mng_shelf: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_shelf.html",
    template_node_mng_shelf_entry: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_shelf_entry.html",
    template_node_mng_shelf_addshelf: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_shelf_addshelf.html",
    template_node_mng_shelf_addentry: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_shelf_addentry.html",
};
let mew = new Mew();
mew.conf({
    id: "darkmode",
    short_desc: "深色模式",
    long_desc: "mew将根据浏览器偏好，在浏览器选择深色模式时自动切换为深色模式。",
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_darkmode));
    },
});
mew.conf({
    id: "desktop",
    short_desc: "桌面布局更改",
    long_desc: "可以通过下方的滑动条，分别调整想法栏和主页栏的宽度。",
    config_extra: [{
        id: "left_width",
        type: "number",
        long_desc: "[立即生效]调整想法栏宽度(%)：",
        default: 26,
        max: 50
    }, {
        id: "right_width",
        type: "number",
        default: 17,
        long_desc: "[立即生效]调整主页栏宽度(%)：",
        max: 50
    }],
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_desktop));
    },
    func_loop: function () {
        document.body.style.setProperty("--left-width", this._settings.left_width + "%");
        document.body.style.setProperty("--right-width", this._settings.right_width + "%");
        document.body.style.setProperty("--img-width", this._settings.img_width + "%");
        document.body.style.setProperty("--img-left", (100 - this._settings.img_width) / 2 + "%");
    }
});
mew.conf({
    id: "thought_in_middle",
    short_desc: "想法全文居中",
    long_desc: "点开想法全文后，想法不再靠边显示而是居中显示。",
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_thought_in_middle));
    },
});
mew.conf({
    id: "whisper_in_middle",
    short_desc: "私聊窗口居中",
    long_desc: "点开私聊窗口后，窗口不再靠边显示而是居中显示。",
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_whisper_in_middle));
    },
});
mew.conf({
    id: "desktop_reverse",
    short_desc: "调换想法栏和主页栏",
    long_desc: "实际上是将整个桌面的排列顺序进行了反转。",
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_desktop_reverse));
    },
});
mew.conf({
    id: "img_size",
    short_desc: "调整想法全文内图片大小",
    long_desc: "可以通过下方的滑动条，来调整想法内图片的显示大小。",
    config_extra: [{
        id: "img_width",
        type: "number",
        default: 50,
        long_desc: "[立即生效]调整想法全文内图片大小(%)：",
        max: 100
    }],
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_img_size))
    },
    func_loop: function () {
        document.body.style.setProperty("--img-width", this._settings.img_width + "%");
        document.body.style.setProperty("--img-left", (100 - this._settings.img_width) / 2 + "%");
    }
});
mew.conf({
    id: "compact_thought",
    short_desc: "紧凑想法列表",
    long_desc: "隐藏左侧想法栏图片；仅显示部分信息，使想法列表更加紧凑；左侧据点栏可显示四个据点。",
    func_once: function () {
        return true
    },
    child_funcs: [{
            id: "compact_thought_hide_img",
            short_desc: "隐藏图片",
            long_desc: "隐藏左侧想法栏图片。",
            func_once: async function () {
                Mew.loadcss(await Mew.fetchres(resources.css_compact_thought_hide_img));
            }
        },
        {
            id: "compact_thought_hide_text",
            short_desc: "缩减文字",
            long_desc: "缩减左侧想法栏文字高度。",
            func_once: async function () {
                Mew.loadcss(await Mew.fetchres(resources.css_compact_thought_hide_text));
            }
        },
        {
            id: "compact_thought_more_node",
            short_desc: "更多据点",
            long_desc: "左侧据点栏可显示四个据点。",
            func_once: async function () {
                Mew.loadcss(await Mew.fetchres(resources.css_compact_thought_more_node));
            }
        }
    ]
});
mew.conf({
    id: "topic_list",
    short_desc: "更好的话题栏",
    long_desc: "鼠标置于话题栏上时，将会展开所有话题Tag，移出则收起。",
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_topic_list));
    },
});
mew.conf({
    id: "search",
    short_desc: "PC端想法搜索",
    long_desc: "左侧据点列表上方新增一个搜索按钮，点击后可搜索据点内想法。",
    func_loop: function () {
        if (document.querySelector("#icon_search") || !document.querySelector("[class^='sidebar_logo__']")) return false;
        const search = new class {
            buildcard(options) {
                let option = {
                    avatar: (options.avatar) ? options.avatar : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    nick: (options.nick) ? options.nick : "Result Card",
                    content: (options.content) ? options.content : "该想法没有文字OwO 但您仍可点击这段文字了解该想法的详情",
                    date: (options.date) ? "发表于：" + new Date(options.date).toLocaleString("chinese", {
                        hour12: false
                    }) : new Date().toLocaleString("chinese", {
                        hour12: false
                    }),
                    data_id: (options.data_id) ? options.data_id : "",
                };
                let item = Mew.dom(`
                <div class="searchitem">
                    <div class="poster">
                        <img src="${option.avatar}">
                        <div style="display: flex;flex-direction: column;align-items: flex-start;padding: 0 0 0 5px;">
                            <span class="nickname">${option.nick}</span>
                            <span class="date">${option.date}</span>
                        </div>
                    </div>
                    <p class="content" data-id="${option.data_id}">${option.content}</p>
                </div>`),
                    content = item.querySelector(".content");
                content.addEventListener("click", (e) => {
                    if (e.target.tagName == "A") return false;
                    var data_id = e.target.getAttribute("data-id");
                    if (data_id) {
                        window.open("https://mew.fun/betterMew/thoughts/" + data_id)
                    } else {
                        return false
                    };
                });
                return item;
            };
            async getsearchres(keyword, pagination) {
                let base_url = `https://api.mew.fun/api/v1/nodes/${window.location.pathname.slice(3)}/search-thoughts?keyword=${keyword}&limit=100`;
                let url = (pagination) ? `${base_url}&pagination=${pagination}` : base_url;
                let res = await fetch(url, {
                    headers: {
                        Authorization: Mew.getcookie("tomon_community_token")
                    }
                });
                return await res.json();
            };
            async search(keyword, pagination) {
                let container = document.querySelector("#searchres");
                let searching = this.buildcard({
                    nick: "提示",
                    content: "正在努力搜索中！"
                });
                container.append(searching);
                let res = await this.getsearchres(keyword, (pagination) ? pagination : null);
                searching.remove();
                if (res.message) {
                    container.append(this.buildcard({
                        nick: "提示",
                        content: res.message
                    }));
                };
                if (res.entries.length == 0) {
                    container.append(this.buildcard({
                        nick: "提示",
                        content: "没有搜索到任何信息！"
                    }));
                    return false;
                };
                for (let i in res.entries) {
                    let poster = res.objects.users[res.entries[i].author_id],
                        avatar = (poster.avatar) ? res.objects.media[poster.avatar].url : null;
                    container.append(this.buildcard({
                        avatar: avatar,
                        nick: poster.name,
                        content: res.entries[i].status,
                        date: res.entries[i].created_at,
                        data_id: res.entries[i].id
                    }));
                };
                if (res.entries.length == 100) {
                    let next = this.buildcard({
                        nick: "提示",
                        content: "点击我加载更多结果(ง •_•)ง"
                    });
                    next.addEventListener("click", async () => {
                        await this.search(keyword, res.pagination);
                        next.remove();
                    });
                    container.append(next);
                };
            };
            serachpage() {
                let s = Mew.stdpage(`<div class="form"><input class="search_input" type="text" placeholder="请输入您要搜索的内容..." ><button class="search_btn"></button></div><div><span>倒序浏览</span><input id="sort" class="sort switcher" type="checkbox"><label for="sort"></label></div><div id="searchres"></div>`);
                s.querySelector("button").addEventListener("click", () => {
                    let container = document.querySelector("#searchres");
                    container.innerHTML = "";
                    this.search(document.querySelector(".search_input").value);
                });
                s.querySelector(".sort").addEventListener("change", (e) => {
                    if (e.target.checked) {
                        document.querySelector("#searchres").style = "flex-direction: column-reverse"
                    } else {
                        document.querySelector("#searchres").style = ""
                    };
                });
                document.body.append(s);
            };
        };
        var icon_search = Mew.dom(`<div id="icon_search" style="background-image:url(${resources.icon_search});width:40px;height:40px;background-repeat: round;"></div>`);
        icon_search.addEventListener("click", () => {
            search.serachpage();
        });
        document.querySelector("[class^='sidebar_logo__']").after(icon_search);
    },
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_search));
    }
});
mew.conf({
    id: "text2url",
    short_desc: "Url变为可点击",
    long_desc: "将讨论区内不可点击的链接转换为可点击。",
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_text2url));
    },
    func_loop: function () {
        const text2url = function (el) {
            if (el.className.indexOf("url-turned") != -1) return false;
            var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,
                txt = el.innerText,
                s = txt.match(reg);
            if (s) {
                for (let x in s) {
                    var url = `<a href="${s[x]}" target="_blank">${s[x]}</a>`;
                    txt = txt.replace(s[x], url);
                };
                el.classList.add("url-turned");
                el.style = "display:block;";
                el.innerHTML = txt;
            };
        };
        for (let i = 0; i < document.querySelectorAll("[class^='message-text_content-wrap__']").length; i++) {
            text2url(document.querySelectorAll("[class^='message-text_content-wrap__']")[i]);
        };
    }
});
mew.conf({
    id: "thought_widget",
    short_desc: "回到顶部",
    long_desc: "在想法全文内增加一个“回到顶部”按钮。",
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_thought_widget));
    },
    func_loop: function () {
        if (!document.querySelector("#comments")) return false;
        var root = document.querySelectorAll("#comments");
        if (root[root.length - 1].querySelector(".thought-widget")) return false;
        let div = Mew.dom(`<div class="thought-widget"><div title="回到顶部" class="to-top" style="height: 40px;width: 40px;cursor: pointer;background: url('${resources.icon_totop}') center center no-repeat;"></div></div>`);
        div.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
        root[root.length - 1].append(div);
    }
});
mew.conf({
    id: "fake_at",
    short_desc: "并不存在的@功能",
    long_desc: "点击讨论区某用户的昵称，即可复制“@xxx”的字样；若讨论区内有“@{你的昵称}”字样的信息，会弹窗提醒。",
    config_extra: [{
        id: "at_msgs",
        default: [],
    }],
    func_loop: function () {
        if (!document.querySelector("[class^='card_name__']")) return false;
        let writeatmsg = (user, msg) => {
                let newarr = this._settings.at_msgs;
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
                return this._settings.at_msgs.some((i) => {
                    if (i.user == user && i.msg == msg) return true;
                });
            },
            copy = (e) => {
                var cp = Mew.dom(`<textarea style="opacity: 0;z-index: -999;">@${e.target.innerText} </textarea>`);
                document.body.append(cp);
                cp.select();
                document.execCommand("copy");
                cp.remove();
                document.querySelectorAll("[class^='message-container_textarea-bar__']")[0].focus();
                cp = null;
            },
            usernames = Array.from(document.querySelectorAll("[class*='message-text_name__']")).concat(Array.from(document.querySelectorAll("[class*='message-image_name__']"))),
            msgs = document.querySelectorAll("[class^='message-text_content-wrap__']"),
            atmsg = "@" + document.querySelector("[class^='card_name__']").innerText;
        for (let i in usernames) {
            usernames[i].style = "cursor:pointer";
            if (usernames[i].className.indexOf("called") == -1) {
                usernames[i].addEventListener("click", copy);
                usernames[i].classList.add("called");
            };
        };
        for (let x = 0; x < msgs.length; x++) {
            if (msgs[x] && msgs[x].className.indexOf("called-checked") == -1 && msgs[x].innerText.indexOf(atmsg) != -1) {
                let msg = msgs[x].innerText,
                    user = msgs[x].parentNode.querySelectorAll("[class*='message-text_name__']")[0].innerText;
                if (!atexist(user, msg)) {
                    writeatmsg(user, msg);
                    msgs[x].classList.add("called-checked");
                    this.noti(user + " @了你，快去看看吧！", msg, () => {
                        return false;
                    });
                };
            };
        };
    }
});
mew.conf({
    id: "only_this_mewer",
    short_desc: "“只看Ta”",
    long_desc: "点击想法长文内的“只看作者”按钮，会弹出一个提示框；提示框内输入用户昵称，即可查看该用户在本想法的发言。同时该功能会隐藏被删除的评论。",
    config_extra: [{
        id: "only_this_mewer",
        default: "",
    }],
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_only_this_mewer));
        let lib = document.createElement("script"),
            hook = async (response) => {
                if (response.config.url.indexOf("authorOnly=1") == -1) return false;
                let url = response.config.url.replace("&authorOnly=1", "");
                response.response = await fetch(url).then(res => res.json()).then(res => {
                    let res_filted = ((obj, name) => {
                        const res = {
                            entries: [],
                            objects: {}
                        };
                        if (obj.entries.length == 0) {
                            for (let x = 0; x < 1; x++) {
                                res.entries.push({
                                    id: 0
                                })
                            };
                        } else {
                            for (let x = 0; x < 20; x++) {
                                res.entries.push({
                                    id: obj.entries[obj.entries.length - 1].id,
                                    deleted: true
                                });
                            };
                        };
                        Object.assign(res.objects, obj.objects);
                        var s = new Set(obj.entries);
                        s.forEach((i) => {
                            if (i.author_id && obj.objects.users[i.author_id].name == name) {
                                res.entries.push(i);
                                res.entries.shift();
                            };
                        });
                        return res;
                    })(res, this._settings.only_this_mewer);
                    return JSON.stringify(res_filted);
                });
                return response;
            };
        lib.src = "https://unpkg.com/ajax-hook@2.0.3/dist/ajaxhook.min.js";
        lib.onload = () => {
            ah.proxy({
                onRequest: (config, handler) => {
                    handler.next(config);
                },
                onError: (err, handler) => {
                    handler.next(err);
                },
                onResponse: async (response, handler) => {
                    let res = await hook(response);
                    if (res) response = res;
                    handler.next(response);
                },
            });
        };
        document.head.append(lib);
    },
    func_loop: function () {
        if (!document.querySelector("#comments")) return false;
        var root = document.querySelectorAll("#comments");
        if (root[root.length - 1].querySelector(".onlyauthor-hook")) return false;
        let btn = root[root.length - 1].querySelectorAll("[class^='comments_right-btn__']")[0],
            callback = (e) => {
                if (e.target.innerText == "只看作者") {
                    var nick = prompt("打算只看谁的评论呢？填入Ta的昵称：", e.target.getAttribute("data-author"));
                    if (!nick) {
                        e.stopPropagation();
                        return false;
                    } else {
                        this._settings.only_this_mewer = nick
                    };
                };
            };
        btn.addEventListener("click", callback);
        btn.setAttribute("data-author", root[root.length - 1].querySelector("[class^='thought_name__']").innerText);
        btn.classList.add("onlyauthor-hook");
    }
});
mew.conf({
    id: "custom_css",
    hide: true,
    always: true,
    config_extra: [{
        type: "text",
        id: "custom_css",
        default: "",
        long_desc: "下方的文本框可以用于加载自定义css样式。",
        value: function () {
            return this._settings.custom_css;
        },
        save: function (e) {
            return e.target.value;
        }
    }],
    func_once: function () {
        Mew.loadcss(this._settings.custom_css);
    }
});
mew.conf({
    id: "thought_time",
    hide: true,
    always: true,
    config_extra: [{
        type: "text",
        id: "thought_time",
        default: "",
        long_desc: "[小工具]输入想法id，获取想法的发表时间。",
        value: function () {
            return "";
        },
        save: async function (e) {
            let input = e.target.value.split("\n").filter(i => i),
                result = await fetch(`https://api.mew.fun/api/v1/thoughts/${input[0]}`).then((res) => res.json()).then((json) => {
                    if (json.message) {
                        return `错误：${json.message}`;
                    };
                    let short_title = json.status.replace(/\n/g, " ").substring(0, 20);
                    if (short_title.length > 20) short_title = short_title + "...";
                    return `想法： ${short_title} 的发表时间是：${new Date(json.created_at).toLocaleString("chinese", { hour12: false })}`;
                });
            e.target.value = [input[0], result].join("\n");
            return "";
        },
    }]
});
mew.conf({
    id: "tool_img_id",
    hide: true,
    always: true,
    config_extra: [{
        type: "text",
        id: "tool_img_id",
        default: "",
        long_desc: "[小工具]输入Mew图片链接，获取适用于自定义表情功能的神秘代码。",
        value: function () {
            return "";
        },
        save: async function (e) {
            let input = e.target.value.split("\n").filter(i => i);
            let url_handle = async (input) => {
                if (!/[0-9a-f]{32}?/.test(input)) return input;
                let hash = input.match(/[0-9a-f]{32}?/g);
                let id = await fetch(`https://api.mew.fun/api/v1/medias/image/${hash}`, {
                    headers: {
                        Authorization: Mew.getcookie("tomon_community_token"),
                    },
                    method: "POST"
                }).then(async res => {
                    if (!res.ok) return 0;
                    let json = await res.json();
                    if (json.status) return 0
                    return json.id;
                });
                if (id == 0) return "请检查链接是否正确：" + input;
                return `${id}$${hash}$`;
            };
            e.target.value = await url_handle(input[0]);
            return "";
        },
    }]
});
mew.conf({
    id: "custom_stamp",
    short_desc: "自定义表情",
    long_desc: "在下方的文本框内填入神秘代码(见下方文本框说明)，即可在“发送表情”按钮中使用自定义表情。",
    config_extra: [{
        type: "text",
        id: "custom_stamp_list",
        default: [],
        long_desc: "按格式填入用于自定义表情功能的神秘代码。也可以填入包含神秘代码的订阅链接。每行一条。神秘代码格式：{图片id}${[可选]图片hash}${[可选]图片说明}。示例：116188135487934464$e6a9f2dd09c74cc5abcb59af95d3e2d2$[M酱]生气",
        value: function () {
            return this._settings.custom_stamp_list.join("\n");
        },
        save: async function (e) {
            return e.target.value.split("\n").filter(i => i);
        }
    }],
    func_loop: async function () {
        let nonce_gen = (len) => {
            let nonce = [];
            for (let i = 0; i < len; i++) {
                nonce.push(Math.floor(Math.random() * 10))
            };
            return nonce.join("");
        };
        let header = {
            Authorization: Mew.getcookie("tomon_community_token")
        };
        if (!document.querySelector("[class^='reaction-panel_stamp-list__']") || document.querySelector(".custom_stamps") || this._settings.custom_stamp_list.length == 0) return false;
        document.querySelector("[class^='reaction-panel_stamp-list__']").classList.add("custom_stamps");
        let topicid = (document.querySelector("[class^='node-chat_list__']")) ?
            document.querySelector("[class^='node-chat_list__']").querySelector("span.text-primary").parentNode.previousSibling.children[0].getAttribute("data-id") :
            await fetch(`https://api.mew.fun/api/v1/nodes/${window.location.pathname.slice(3)}`, {
                headers: header
            }).then(res => res.json()).then(json => {
                if (!json.topics) return 0;
                for (let i in json.topics) {
                    if (document.querySelector("[class^='containers_chat-header__']").textContent.indexOf(json.topics[i].name) != -1) {
                        return json.topics[i].id;
                    };
                };
            });
        if (topicid == 0) return false;
        let stamps = [];
        for (let i in this._settings.custom_stamp_list) {
            if (!/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(this._settings.custom_stamp_list[i])) {
                stamps.push(this._settings.custom_stamp_list[i]);
                continue;
            };
            await Mew.fetchres(this._settings.custom_stamp_list[i]).then(text => text.split("\n").filter(i => i)).then(arr => {
                for (let i in arr) {
                    stamps.push(arr[i]);
                };
            }).catch(() => []);
        };
        for (let i in stamps) {
            if (stamps[i].slice(0, 1) == "#") continue;
            let data = stamps[i].split("$");
            if (!/[0-9]{17,18}/.test(data[0])) continue;
            let hash = (data[1] && data[1].match(/[0-9a-f]{32}/g)) ? data[1] : "2c7b5e16155b442a9ff0cce985f6ad93",
                desc = (data[2]) ? data[2] : "木有说明(っ °Д °;)っ",
                insertel = Mew.dom(`
                <button class="reaction-panel_stamp__8qpSD" title="${desc}">
                    <picture class="reaction-panel_image__2FjNq">
                        <source srcset="https://image.mew.fun/${hash}~tplv-c226mjqywu-size:96.image" type="image/png">
                        <img src="https://image.mew.fun/${hash}~tplv-c226mjqywu-size:96.image" alt="${desc}">
                    </picture>
                </button>`);
            insertel.addEventListener("click", () => {
                fetch(`https://api.mew.fun/api/v1/topics/${topicid}/messages`, {
                    headers: {
                        Authorization: Mew.getcookie("tomon_community_token"),
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        nonce: nonce_gen(18),
                        media: [data[0]]
                    }),
                    method: "POST",
                });
            });
            document.querySelector(".custom_stamps").append(insertel);
        };
    },
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_custom_stamp));
    }
});
mew.conf({
    id: "node_manage",
    short_desc: "PC端据点管理",
    long_desc: "允许据点管理员在PC端管理据点。非管理员无法保存设置。",
    func_loop: async function () {
        if (document.querySelector("#icon_node_manage") || !document.querySelector("[class^='sidebar_logo__']")) return false;
        const manage = new class {
            header = {
                Authorization: Mew.getcookie("tomon_community_token"),
                "Content-Type": "application/json; charset=utf-8"
            };
            api = "https://api.mew.fun/api/v1/nodes/";
            async fetchdata(url, options) {
                let option = {
                    alert: (options.alert == false) ? false : true,
                    method: (options.method) ? options.method : "PATCH",
                    data: (options.data) ? options.data : {},
                    onsuccess: (options.onsuccess) ? options.onsuccess : "据点信息保存成功！",
                    onfail: (options.onfail) ? options.onfail : "据点信息保存失败！",
                };
                for (let k in option.data) {
                    if (option.data[k] === null) delete option.data[k];
                };
                let body = JSON.stringify(option.data);
                let fetch_option = {
                    headers: this.header,
                    method: option.method,
                    body: body
                };
                if (option.method == "GET") delete fetch_option.body;
                return new Promise(async (resolve, reject) => {
                    if (body.length == 2 && !["DELETE", "GET", "PUT"].includes(option.method)) {
                        reject({
                            message: "没有改动任何数据！"
                        });
                        return;
                    };
                    let result = await fetch(url, fetch_option);
                    let json = (result.status == 204) ? {
                        message: "204 No Content"
                    } : await result.json();
                    if (result.ok) {
                        if (option.alert) mew.noti(option.onsuccess, option.onsuccess);
                        resolve(json);
                        return;
                    };
                    if (option.alert) mew.noti(option.onfail, json.message);
                    reject(json);
                })
            };
            async page_render() {
                let s = Mew.stdpage(await Mew.fetchres(resources.template_node_mng));
                s.querySelector(`#node_basic`).parentNode.querySelector("button").addEventListener("click", () => {
                    this.save_basic();
                });
                s.querySelector(`#node_speech`).parentNode.querySelector("button").addEventListener("click", () => {
                    this.save_speech();
                });
                document.body.append(s);
                await fetch(this.api + window.location.pathname.slice(3), {
                    headers: this.header
                }).then(res => res.json()).then(json => {
                    this.node_basic = json;
                    this.load_basic(json);
                    this.load_speech(json);
                    this.load_topics_switch();
                    this.load_member_switch();
                    this.load_joinreq_switch();
                    this.load_speakreq_switch();
                    this.load_shelf();
                });
                this.textcard = await Mew.fetchres(resources.template_node_mng_text_card);
            };
            load_basic(json) {
                let inputs = document.querySelector(`#node_basic`).parentNode.querySelectorAll(".container__input");
                inputs[0].value = json.name;
                inputs[1].value = json.objects.users[json.super_moderator].username;
                inputs[2].value = json.node_name;
                inputs[3].value = (json.description) ? json.description : "";
                inputs[4].value = (json.icon) ? json.icon : "";
            };
            async save_basic() {
                let inputs = document.querySelector(`#node_basic`).parentNode.querySelectorAll(".container__input");
                let new_data = {
                    name: (this.node_basic.name != inputs[0].value) ? inputs[0].value : null,
                    node_name: (this.node_basic.node_name != inputs[2].value) ? inputs[2].value : null,
                    description: (this.node_basic.description != inputs[3].value) ? inputs[3].value : null,
                    icon: (this.node_basic.icon != inputs[4].value) ? inputs[4].value : null,
                };
                await this.fetchdata(this.api + this.node_basic.id, {
                    data: new_data
                }).then(json => this.node_basic = json);
            };
            load_speech(json) {
                let inputs = document.querySelector(`#node_speech`).parentNode.querySelectorAll(".container__input");
                inputs[0].checked = json.searchable;
                if (json.searchable) inputs[0].checked = "checked";
                inputs[1].value = (json.tags.length >= 1) ? json.tags.join("\n") : "";
                inputs[2].checked = json.enable_speak_question;
                inputs[4].checked = json.enable_join_question;
                if (json.speak_questions.length == 0 || !json.enable_speak_question) {
                    inputs[3].setAttribute("disabled", "disabled")
                } else {
                    inputs[3].value = json.speak_questions[0].content;
                };
                if (json.join_questions.length == 0 || !json.enable_join_question) {
                    inputs[5].setAttribute("disabled", "disabled")
                } else {
                    inputs[5].value = json.join_questions[0].content;
                };
            };
            async save_speech() {
                let inputs = document.querySelector(`#node_speech`).parentNode.querySelectorAll(".container__input");
                let new_data = {
                    searchable: (this.node_basic.searchable != inputs[0].checked) ? inputs[0].checked : null,
                    tags: (this.node_basic.tags.join("\n") != inputs[1].value) ? inputs[1].value.split("\n").filter(i => i) : null,
                    enableSpeakQuestion: (this.node_basic.enable_speak_question != inputs[2].checked) ? inputs[2].checked : null,
                    enableJoinQuestion: (this.node_basic.enable_join_question != inputs[4].checked) ? inputs[4].checked : null,
                };
                if (this.node_basic.enable_speak_question && this.node_basic.speak_questions[0].content != inputs[3].value) {
                    this.fetchdata(`${this.api + this.node_basic.id}/questions/${this.node_basic.speak_questions[0].id}`, {
                        data: {
                            content: inputs[3].value
                        }
                    });
                };
                if (this.node_basic.enable_join_question && this.node_basic.join_questions[0].content != inputs[5].value) {
                    this.fetchdata(`${this.api + this.node_basic.id}/questions/${this.node_basic.join_questions[0].id}`, {
                        data: {
                            content: inputs[5].value
                        }
                    });
                };
                await this.fetchdata(this.api + this.node_basic.id, {
                    data: new_data
                }).then(json => this.node_basic = json);
            };
            load_topics_switch() {
                let root = document.querySelector(`#node_topic`).parentNode;
                let content = root.querySelector(".content");
                root.querySelector(".tab1").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_topics_tab1(this.node_basic);
                });
                root.querySelector(".tab2").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_topics_tab2(this.node_basic);
                });
                root.querySelector(".tab3").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_topics_tab3(this.node_basic);
                });
                root.querySelector(".tab1").click();
            };
            async load_topics_tab1(json) {
                let content = document.querySelector(`#node_topic`).parentNode.querySelector(".content");
                let template = await Mew.fetchres(resources.template_node_mng_topic_tab1);
                if (json.topics == 0) {
                    content.append(this.load_textcard("还没有话题！"));
                    return false;
                };
                for (let i in json.topics) {
                    let card = Mew.dom(Mew.template(template, {
                        id: json.topics[i].id,
                        title: json.topics[i].name,
                        desc_text: (json.topics[i].description) ? json.topics[i].description : "",
                        desc_media: json.topics[i].media.join("\n")
                    }));
                    card.querySelectorAll("button")[0].addEventListener("click", () => {
                        this.del_topics_tab1(json.topics[i]);
                    });
                    card.querySelectorAll("button")[1].addEventListener("click", () => {
                        this.save_topics_tab1(json.topics[i]);
                    });
                    content.append(card);
                };
            };
            save_topics_tab1(topic) {
                let inputs = document.querySelector(`#_${topic.id}`).parentNode.querySelectorAll(".container__input");
                let new_data = {
                    name: inputs[0].value,
                    description: (!topic.description && inputs[1].value.length >= 1) ? inputs[1].value : null,
                    media: (topic.media.join("\n") != inputs[2].value) ? inputs[2].value.split("\n").filter(i => i) : null,
                };
                this.fetchdata(`https://api.mew.fun/api/v1/topics/${topic.id}`, {
                    data: new_data
                });
            };
            del_topics_tab1(topic) {
                let del_confirm = confirm(`防手滑二次确认：真的要删除话题：${topic.name} 吗？`);
                if (!del_confirm) return false;
                this.fetchdata(`https://api.mew.fun/api/v1/topics/${topic.id}`, {
                    method: "DELETE",
                    onsuccess: "删除话题成功！",
                    onfail: "删除话题失败！"
                });
            };
            async load_topics_tab2(json) {
                let content = document.querySelector(`#node_topic`).parentNode.querySelector(".content");
                let template_card = await Mew.fetchres(resources.template_node_mng_topic_tab2_card);
                if (json.topics == 0) {
                    content.append(this.load_textcard("还没有话题！"));
                    return false;
                };
                let btn = Mew.dom(await Mew.fetchres(resources.template_node_mng_topic_tab2_btn));
                for (let i in json.topics) {
                    let topic = Mew.dom(Mew.template(template_card, {
                        id: json.topics[i].id,
                        title: json.topics[i].name
                    }));
                    topic.querySelectorAll("button")[0].addEventListener("click", (e) => {
                        let root = e.target.parentNode.parentNode;
                        if (!root.previousSibling) {
                            return false
                        };
                        if (!root.previousSibling.previousSibling) {
                            content.prepend(topic);
                            return false
                        };
                        root.previousSibling.previousSibling.after(topic);
                    });
                    topic.querySelectorAll("button")[1].addEventListener("click", (e) => {
                        let root = e.target.parentNode.parentNode;
                        if (!root.nextElementSibling.id) {
                            return false
                        };
                        root.nextElementSibling.after(topic);
                    });
                    content.append(topic);
                };
                btn.addEventListener("click", () => {
                    this.save_topics_tab2(json.id);
                });
                content.append(btn);
            };
            save_topics_tab2(node_id) {
                let inputs = document.querySelector(`#node_topic`).parentNode.querySelectorAll(".input_container");
                let positions = [];
                for (let i = 0; i < inputs.length - 1; i++) {
                    positions.push({
                        id: inputs[i].id.slice(11),
                        position: i + 1,
                    });
                };
                this.fetchdata(`${this.api + node_id}/topics/position`, {
                    data: {
                        positions: positions
                    }
                });
            };
            async load_topics_tab3(json) {
                let content = document.querySelector(`#node_topic`).parentNode.querySelector(".content");
                let template = Mew.dom(await Mew.fetchres(template_node_mng_topic_tab3));
                template.querySelector("button").addEventListener("click", () => {
                    this.save_topics_tab3(json.id);
                });
                content.append(template);
            };
            save_topics_tab3(node_id) {
                if (this.node_basic.topics.length >= 10) {
                    let _confirm = confirm(`话题数量已经达到10个，确定继续添加话题？`);
                    if (!_confirm) return false;
                };
                let inputs = document.querySelector(`#node_topic`).parentNode.querySelectorAll(".container__input");
                let new_data = {
                    name: (inputs[0].value) ? inputs[0].value : null,
                    description: (inputs[1].value) ? inputs[1].value : null,
                    media: (inputs[2].value) ? inputs[2].value.split("\n").filter(i => i) : null,
                };
                this.fetchdata(`${this.api + node_id}/topics`, {
                    method: "POST",
                    onsuccess: "话题创建成功！",
                    onfail: "话题创建失败！",
                    data: new_data
                }).catch(err => err);
            };
            load_member_switch() {
                let root = document.querySelector(`#node_member`).parentNode;
                let content = root.querySelector(".content");
                root.querySelector(".tab1").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_search(content, this.node_basic.id);
                    this.load_member_card(content, `${this.api + this.node_basic.id}/members?limit=50`);
                });
                root.querySelector(".tab2").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_search(content, this.node_basic.id, ["type=restricted"]);
                    this.load_member_card(content, `${this.api + this.node_basic.id}/members?limit=50&type=restricted`);
                });
                root.querySelector(".tab3").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_search(content, this.node_basic.id, ["type=blocked"], "ban");
                    this.load_member_card(content, `${this.api + this.node_basic.id}/bans?limit=50`, null, "ban");
                });
                root.querySelector(".tab1").click();
            };
            load_joinreq_switch() {
                let root = document.querySelector(`#node_join`).parentNode;
                let content = root.querySelector(".content");
                root.querySelector(".tab1").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api + this.node_basic.id}/applications?type=join&state=pending&limit=50`, null, "req_pending_join");
                });
                root.querySelector(".tab2").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api + this.node_basic.id}/applications?type=join&state=approved&limit=50`, null, "req_approved");
                });
                root.querySelector(".tab3").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api + this.node_basic.id}/applications?type=join&state=rejected&limit=50`, null, "req_rejected_join");
                });
                root.querySelector(".tab1").click();
            };
            load_speakreq_switch() {
                let root = document.querySelector(`#node_speak`).parentNode;
                let content = root.querySelector(".content");
                root.querySelector(".tab1").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api + this.node_basic.id}/applications?type=speak&state=pending&limit=50`, null, "req_pending_speak");
                });
                root.querySelector(".tab2").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api + this.node_basic.id}/applications?type=speak&state=approved&limit=50`, null, "req_approved");
                });
                root.querySelector(".tab3").addEventListener("click", () => {
                    content.innerHTML = "";
                    this.load_member_card(content, `${this.api + this.node_basic.id}/applications?type=speak&state=rejected&limit=50`, null, "req_rejected_speak");
                });
                root.querySelector(".tab1").click();
            };
            async load_member_card(content, base_url, after, type) {
                let template = await Mew.fetchres(resources.template_node_mng_member_normal_card);
                let template_ban = await Mew.fetchres(resources.template_node_mng_member_ban_card);
                let template_req_pending = await Mew.fetchres(resources.template_node_mng_req_pending_card);
                let template_req_approved = await Mew.fetchres(resources.template_node_mng_req_approved_card);
                let template_req_rejected = await Mew.fetchres(resources.template_node_mng_req_rejected_card);
                let members = await this.fetchdata((after) ? `${base_url}&after=${after}` : base_url, {
                    alert: false,
                    method: "GET"
                }).catch(err => {
                    content.append(this.load_textcard("加载成员列表时发生错误：" + err.message));
                });
                if (!members) return false;
                if (members.entries.length == 0) {
                    content.append(this.load_textcard("啥也没有(っ °Д °;)っ"));
                    return false;
                };
                for (let i in members.entries) {
                    let user = members.entries[i];
                    if (after) {
                        if (user.is_super_moderator || user.is_moderator) continue;
                    };
                    switch (type) {
                        case "ban":
                            content.append(await this.load_ban_card(members, user, template_ban));
                            break;
                        case "req_pending_join":
                            content.append(this.load_req_pending_card(members, user, template_req_pending, "join"));
                            break;
                        case "req_pending_speak":
                            content.append(this.load_req_pending_card(members, user, template_req_pending, "speak"));
                            break;
                        case "req_approved":
                            content.append(this.load_req_approved_card(members, user, template_req_approved));
                            break;
                        case "req_rejected_join":
                            content.append(this.load_req_rejected_card(members, user, template_req_rejected, "join"));
                            break;
                        case "req_rejected_speak":
                            content.append(this.load_req_rejected_card(members, user, template_req_rejected, "speak"));
                            break;
                        default:
                            content.append(this.load_member_normal_card(members, user, template));
                            break;
                    };
                };
                if (members.entries.length == 50) {
                    let loadmore = this.load_textcard("点击加载更多");
                    loadmore.querySelector(".accordion__header").addEventListener("click", async () => {
                        await this.load_member_card(content, base_url, members.next_cursor);
                        loadmore.remove();
                    });
                    content.append(loadmore);
                };
            };
            load_member_normal_card(json, user, template) {
                let card = Mew.dom(Mew.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    class: (user.is_super_moderator) ? "领主" : (user.is_moderator) ? "管理员" : "成员",
                    P_moderator: (user.is_moderator) ? "checked" : "",
                    P_thought: ([32, 32 + 16, 32 + 64, 16 + 32 + 64].includes(user.permissions_deny)) ? "" : "checked",
                    P_talk: ([16, 16 + 32, 16 + 64, 16 + 32 + 64].includes(user.permissions_deny)) ? "" : "checked",
                    P_comment: ([64, 64 + 32, 64 + 16, 16 + 32 + 64].includes(user.permissions_deny)) ? "" : "checked",
                }));
                card.querySelectorAll("button")[0].addEventListener("click", () => {
                    let _confirm = confirm("确定将领主身份转移给Ta吗？你将不再拥有该据点和该据点的管理权限。");
                    if (!_confirm) return false;
                    this.fetchdata(this.api + user.node_id, {
                        data: {
                            superModerator: user.user_id
                        },
                        onsuccess: "领主转移成功！",
                        onfail: "领主转移失败！"
                    });
                });
                card.querySelectorAll("button")[1].addEventListener("click", () => {
                    this.ban_someone(user.user_id);
                });
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    let _confirm = confirm("成员将被移出据点，但可重新加入。确定将该成员移出据点吗？");
                    if (!_confirm) return false;
                    this.fetchdata(`${this.api + user.node_id}/members/${user.user_id}`, {
                        method: "DELETE",
                        onsuccess: "移出据点成功！",
                        onfail: "移出据点失败！"
                    });
                });
                card.querySelectorAll("button")[3].addEventListener("click", () => {
                    let inputs = document.querySelector(`#${json.objects.users[user.user_id].username}`).parentNode.querySelectorAll("input.container__input");
                    let P_thought = (inputs[0].checked) ? 0 : 32,
                        P_talk = (inputs[1].checked) ? 0 : 16,
                        P_comment = (inputs[2].checked) ? 0 : 64;
                    let data = {
                        isModerator: inputs[3].checked,
                        permissionsDeny: P_comment + P_talk + P_thought
                    };
                    this.fetchdata(`${this.api + user.node_id}/members/${user.user_id}`, {
                        data: data
                    });
                });
                return card;
            };
            load_req_pending_card(json, user, template, type) {
                if (!["join", "speak"].includes(type)) return false;
                let card = Mew.dom(Mew.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    date: new Date(user.applied_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    awnser: user.answers[0].content
                }));
                card.querySelectorAll("button")[1].addEventListener("click", () => {
                    this.fetchdata(`${this.api + user.node_id}/applications/${type}/${user.user_id}`, {
                        data: {
                            state: "approved"
                        },
                        onsuccess: "成功通过申请！",
                        onfail: "通过申请失败！"
                    });
                });
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    this.fetchdata(`${this.api + user.node_id}/applications/${type}/${user.user_id}`, {
                        data: {
                            state: "rejected"
                        },
                        onsuccess: "成功拒绝申请！",
                        onfail: "拒绝申请失败！"
                    });
                });
                return card;
            };
            load_req_approved_card(json, user, template) {
                let card = Mew.dom(Mew.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    date: new Date(user.applied_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    awnser: user.answers[0].content
                }));
                return card;
            };
            load_req_rejected_card(json, user, template, type) {
                if (!["join", "speak"].includes(type)) return false;
                let card = Mew.dom(Mew.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    date: new Date(user.applied_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    awnser: user.answers[0].content
                }));
                card.querySelectorAll("button")[1].addEventListener("click", () => {
                    this.ban_someone(user.user_id);
                });
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    this.fetchdata(`${this.api + user.node_id}/applications/${type}/${user.user_id}`, {
                        data: {
                            state: "pending"
                        },
                        onsuccess: "恢复申请成功！",
                        onfail: "恢复申请失败！"
                    });
                });
                return card;
            };
            async load_ban_card(json, user, template) {
                let card = Mew.dom(Mew.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    date: new Date(user.banned_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    op_username: await fetch("https://api.mew.fun/api/v1/users/" + user.operator_id).then(res => res.json()).then(json => json.username),
                }));
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    let _confirm = confirm("成员将被移出黑名单，并可以重新加入据点。确定将该成员移出黑名单吗？");
                    if (!_confirm) return false;
                    this.fetchdata(`${this.api + user.node_id}/bans/${user.user_id}`, {
                        method: "DELETE",
                        onsuccess: "移出黑名单成功！",
                        onfail: "移出黑名单失败！"
                    });
                });
                return card;
            };
            ban_someone(id) {
                let _confirm = confirm("成员将被移出据点，且无法重新加入。确定将该成员加入黑名单吗？");
                if (!_confirm) return false;
                this.fetchdata(`${this.api + this.node_basic,id}/bans/${id}`, {
                    method: "PUT",
                    onsuccess: "加入黑名单成功！",
                    onfail: "加入黑名单失败！"
                });
            };
            async load_member_search(content, node_id, query, type) {
                query = (query) ? query : [];
                type = (type) ? type : null;
                let search = Mew.dom(await Mew.fetchres(resources.template_node_mng_member_search_card));
                let input = search.querySelector(".accordion__content").querySelectorAll("input")[0];
                search.querySelector("button").addEventListener("click", async () => {
                    let params = [`keyword=${input.value}`];
                    for (let i in query) {
                        params.push(query[i])
                    };
                    content.innerHTML = "";
                    await this.load_member_search(content, node_id, query);
                    await this.load_member_card(content, `${this.api + node_id}/members/search?${params.join("&")}`, null, type);
                });
                content.append(search);
            };
            load_textcard(text) {
                let card = Mew.dom(Mew.template(this.textcard, {
                    text: text
                }));
                return card;
            };
            async load_shelf() {
                let content = document.querySelector("#node_library").parentNode.querySelector(".accordion__content");
                let template = await Mew.fetchres(resources.template_node_mng_shelf);
                let template_entry = await Mew.fetchres(resources.template_node_mng_shelf_entry);
                let template_addshelf = Mew.dom(await Mew.fetchres(resources.template_node_mng_shelf_addshelf));
                let template_addentry = await Mew.fetchres(resources.template_node_mng_shelf_addentry);
                let lib = await this.fetchdata(`${this.api + this.node_basic.id}/libraries`, {
                    alert: false,
                    method: "GET"
                });
                for (let i in lib.entries) {
                    let entry = lib.entries[i];
                    if (entry.parent_id) {
                        let shelf_entry = this.load_shelf_entry(entry, template_entry);
                        content.querySelector(`#shelf_${entry.parent_id}`).parentNode.querySelectorAll(".input_container")[1].append(shelf_entry);
                        continue;
                    };
                    let shelf = this.load_shelf_bookshelf(entry, template, template_addentry);
                    content.append(shelf);
                };
                template_addshelf.querySelector("button").addEventListener("click", () => {
                    let name = template_addshelf.querySelector("input.container__input").value;
                    let data = {
                        name: (name) ? name : null,
                    };
                    this.fetchdata(`${this.api + this.node_basic.id}/libraries`, {
                        method: "POST",
                        data: data,
                        onsuccess: "创建书架成功！",
                        onfail: "创建书架失败！"
                    }).catch(err => err);
                });
                content.append(template_addshelf);
            };
            load_shelf_entry(entry, template_entry) {
                let shelf_entry = Mew.dom(Mew.template(template_entry, {
                    id: entry.id,
                    title: entry.name,
                    desc_text: (entry.description) ? entry.description : entry.name,
                    desc_image: (entry.icon) ? entry.icon : ""
                }));
                shelf_entry.querySelectorAll("button")[0].addEventListener("click", () => {
                    let del_confirm = confirm(`防手滑二次确认：真的要删除词条：${entry.name} 吗？`);
                    if (!del_confirm) return false;
                    this.fetchdata(`${this.api + this.node_basic.id}/libraries/${entry.id}`, {
                        method: "DELETE",
                        onsuccess: "删除词条成功！",
                        onfail: "删除词条失败！",
                    });
                });
                shelf_entry.querySelectorAll("button")[1].addEventListener("click", () => {
                    let inputs = shelf_entry.querySelectorAll(".container__input");
                    let data = {
                        name: (inputs[0].value) ? inputs[0].value : null,
                        description: (inputs[1].value) ? inputs[1].value : null,
                        icon: (inputs[2].value) ? inputs[2].value : null,
                        parentId: entry.id,
                    };
                    this.fetchdata(`${this.api + this.node_basic.id}/libraries/${entry.id}`, {
                        data: data
                    });
                });
                return shelf_entry;
            };
            load_shelf_bookshelf(entry, template_bookshelf, template_addentry) {
                let shelf = Mew.dom(Mew.template(template_bookshelf, {
                    id: entry.id,
                    title: entry.name
                }));
                shelf.querySelectorAll("button")[0].addEventListener("click", () => {
                    let del_confirm = confirm(`防手滑二次确认：真的要删除书架：${entry.name} 吗？`);
                    if (!del_confirm) return false;
                    this.fetchdata(`${this.api + this.node_basic.id}/libraries/${entry.id}`, {
                        method: "DELETE",
                        onsuccess: "删除书架成功！",
                        onfail: "删除书架失败！",
                    });
                });
                shelf.querySelectorAll("button")[1].addEventListener("click", () => {
                    let inputs = shelf.querySelectorAll(".container__input");
                    let data = {
                        name: (inputs[0].value) ? inputs[0].value : null,
                    };
                    this.fetchdata(`${this.api + this.node_basic.id}/libraries/${entry.id}`, {
                        data: data
                    });
                });
                let addentry = Mew.dom(Mew.template(template_addentry, {
                    parent_id: entry.id
                }));
                addentry.querySelector("button").addEventListener("click", () => {
                    let inputs = addentry.querySelectorAll(".container__input");
                    let data = {
                        name: (inputs[0].value) ? inputs[0].value : null,
                        description: (inputs[1].value) ? inputs[1].value : null,
                        icon: (inputs[2].value) ? inputs[2].value : null,
                        parentId: entry.id,
                    }
                    this.fetchdata(`${this.api + this.node_basic.id}/libraries`, {
                        method: "POST",
                        data: data,
                        onsuccess: "添加词条成功！",
                        onfail: "添加词条失败！"
                    }).catch(err => err);
                });
                shelf.querySelectorAll(".input_container")[1].append(addentry);
                return shelf;
            };
        };
        var icon_node_manage = Mew.dom(`<div id="icon_node_manage" style="background-image:url(${resources.icon_node_manage});background-repeat: round;width:40px;height:40px"></div>`);
        icon_node_manage.addEventListener("click", () => {
            manage.page_render();
        });
        document.querySelector("[class^='sidebar_logo__']").after(icon_node_manage);
    },
    func_once: async function () {
        Mew.loadcss(await Mew.fetchres(resources.css_node_manage));
    }
});
mew.conf({
    id: "ver_check",
    hide: true,
    always: true,
    config_extra: [{
        id: "ver",
        default: 0
    }],
    func_once: async function () {
        let update_url = `https://api.mew.fun/api/v1/users/68907366539980800`;
        let announce = await fetch(update_url).then(res => res.json()).then(text => JSON.parse(text.description.split("\n")[1]));
        if (this._settings.ver != announce.ver) {
            this.noti("脚本有新版本", `最新版本${announce.ver}，请按下F12打开控制台以查看更新内容。`, () => {
                window.open(`https://www.doveyige.top/bettermewupdate.html#latest`);
            });
            let whatsnew = [`当前脚本版本：${announce.ver}`, "更新内容：", ...announce.whatsnew];
            console.clear();
            for (let i in whatsnew) {
                console.log(`%c${whatsnew[i]}`, "color: rgb(125 125 125);font-size:16px")
            };
            this.savsetting("ver", announce.ver);
        };
        return announce.ver;
    }
});
mew.run();