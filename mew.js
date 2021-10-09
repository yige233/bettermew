class Mew {
    _defaultsetting = {
        noti_denied: false,
        mainfunc: [],
        childfunc: [],
        ver: ""
    };
    _data = {
        ver: 0.62,
        whatsnew: [
            "当前脚本版本:0.62",
            "更新内容：",
            "1、更好的实现功能与框架的分离。"
        ],
        settingicon: `<svg t="1633357352154" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1249" width="32" height="32"><path d="M919.6 405.6l-57.2-8c-12.7-1.8-23-10.4-28-22.1-11.3-26.7-25.7-51.7-42.9-74.5-7.7-10.2-10-23.5-5.2-35.3l21.7-53.5c6.7-16.4 0.2-35.3-15.2-44.1L669.1 96.6c-15.4-8.9-34.9-5.1-45.8 8.9l-35.4 45.3c-7.9 10.2-20.7 14.9-33.5 13.3-14-1.8-28.3-2.8-42.8-2.8-14.5 0-28.8 1-42.8 2.8-12.8 1.6-25.6-3.1-33.5-13.3l-35.4-45.3c-10.9-14-30.4-17.8-45.8-8.9L230.4 168c-15.4 8.9-21.8 27.7-15.2 44.1l21.7 53.5c4.8 11.9 2.5 25.1-5.2 35.3-17.2 22.8-31.7 47.8-42.9 74.5-5 11.8-15.3 20.4-28 22.1l-57.2 8C86 408 72.9 423 72.9 440.8v142.9c0 17.7 13.1 32.7 30.6 35.2l57.2 8c12.7 1.8 23 10.4 28 22.1 11.3 26.7 25.7 51.7 42.9 74.5 7.7 10.2 10 23.5 5.2 35.3l-21.7 53.5c-6.7 16.4-0.2 35.3 15.2 44.1L354 927.8c15.4 8.9 34.9 5.1 45.8-8.9l35.4-45.3c7.9-10.2 20.7-14.9 33.5-13.3 14 1.8 28.3 2.8 42.8 2.8 14.5 0 28.8-1 42.8-2.8 12.8-1.6 25.6 3.1 33.5 13.3l35.4 45.3c10.9 14 30.4 17.8 45.8 8.9l123.7-71.4c15.4-8.9 21.8-27.7 15.2-44.1l-21.7-53.5c-4.8-11.8-2.5-25.1 5.2-35.3 17.2-22.8 31.7-47.8 42.9-74.5 5-11.8 15.3-20.4 28-22.1l57.2-8c17.6-2.5 30.6-17.5 30.6-35.2V440.8c0.2-17.8-12.9-32.8-30.5-35.2z m-408 245.5c-76.7 0-138.9-62.2-138.9-138.9s62.2-138.9 138.9-138.9 138.9 62.2 138.9 138.9-62.2 138.9-138.9 138.9z" fill="#345bac" p-id="1250"></path></svg>`,
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
    }
    .title {
        color: rgb(var(--colors-msg));
        margin: 20px auto;
        font-size: 20px;
        padding: 0px 7%;
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
        padding: 20px 0 20px 0;
        margin: 20px 10% 20px 10%;
        border: 2px solid rgb(52, 91, 172);
        border-radius: 20px;
    }
    #settingicon {
        cursor: pointer;
        padding: 10% 10%;
    }
    .childoption {
        padding: 0 0 0 2em;
    }`,
    };
    _config = [];
    _config_extra = [];
    constructor() {
        this._settings = localStorage.settings ? Object.assign({}, this._defaultsetting, JSON.parse(localStorage.settings)) : this._defaultsetting;
        localStorage.setItem("settings", JSON.stringify(this._settings));
        this.vsrsioncheck();
    };
    static dom(str) {
        let body = new DOMParser().parseFromString(str, 'text/html').body.children[0];
        return body ? body : new DOMParser().parseFromString(str, 'text/html').head.children[0];
    };
    static loadcss(css) {
        let el = Mew.dom(`<style>${css}</style>`);
        document.head.append(el);
        return el;
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
                for (let k in conf) { if (conf[k] === null || conf[k] === undefined) delete conf[k] };
                config.push(conf);
            },
            mode = ["once", "loop"];
        pushconfig(options, this._config);
        if (options.child_funcs) { for (let i in options.child_funcs) { pushconfig(Object.assign(options.child_funcs[i], { parent: options.id }), this._config) } };
        if (options.always && !this._settings.mainfunc.includes(options.id)) {
            let list = this._settings.mainfunc;
            list.push(options.id);
            this.savsetting("mainfunc", list);
        };
        if (options.config_extra) {
            for (let i in options.config_extra) {
                this._defaultsetting[options.config_extra[i].id] = options.config_extra[i].default;
                if (!this._settings[options.config_extra[i].id]) this.savsetting(options.config_extra[i].id);
                pushconfig(Object.assign(options.config_extra[i], { parent: options.id }), this._config_extra);
            };
        };
        for (let x in mode) {
            let m = mode[x];
            this[`func_${m}_${options.id}`] = () => {
                if (!this._settings.mainfunc.includes(options.id)) return false;
                if (options[`func_${m}`]) options[`func_${m}`].bind(this)();
                for (let i in options.child_funcs) { if (this._settings.childfunc.includes(options.child_funcs[i].id) && options.child_funcs[i][`func_${m}`]) options.child_funcs[i][`func_${m}`].bind(this)() };
            };
        };
    };
    noti(title, msg, onclickfunc) {
        if (!("Notification" in window)) {
            alert(msg);
            return;
        };
        Notification.requestPermission((status) => {
            if (status == "denied") {
                alert(msg);
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
            noti.onclick = (onclickfunc) ? onclickfunc : () => { return false };
        });
    };
    savsetting(key, value) {
        if (this._settings.hasOwnProperty(key)) { this._settings[key] = (value) ? value : this._defaultsetting[key] } else { return false };
        localStorage.setItem("settings", JSON.stringify(this._settings));
        return this._settings[key];
    };
    vsrsioncheck() {
        if (!this._settings.ver || this._settings.ver != this._data.ver) {
            this.noti("脚本已更新", `感谢下载并使用mew增强脚本${this._data.ver}版！按下f12键打开控制台，以查看详细更新信息。`);
            console.clear();
            for (let i in this._data.whatsnew) { console.log(`%c${this._data.whatsnew[i]}`, "color: rgb(125 125 125);font-size:16px") };
            this.savsetting("ver", this._data.ver);
        };
        return this._settings.ver;
    };
    basic() {
        if (!document.querySelector("[class^='sidebar_root__']") || document.querySelector("#settingicon")) return false;
        const setting = {
            activatefunc: (e, func, path) => {
                let list = this._settings[path];
                if (e.target.checked) { list.push(func) } else { list.splice(list.indexOf(func), 1) };
                this.savsetting(path, list);
            },
            switcher: (ul) => {
                for (let i in this._config) {
                    let func = this._config[i];
                    if (func.hide) continue;
                    let funcpath = (func.parent) ? "childfunc" : "mainfunc",
                        li = Mew.dom(`
                        <li ${(func.parent)?"class='childoption'":""}>
                            <span>${func.short_desc}：${func.long_desc}</span>
                            <div>
                                <input type="checkbox" id="control_${func.id}" title="${func.short_desc}" ${(this._settings[funcpath].includes(func.id))?"checked":"" } ${(func.parent==null || this._settings.mainfunc.includes(func.parent))?"":"disabled"} class="switcher" style="display: none;">
                                <label for="control_${func.id}" title="${func.short_desc}" class="switcher-label"></label>
                            </div>
                        </li>`);
                    li.querySelector(`#control_${func.id}`).addEventListener("click", (e) => {
                        setting.activatefunc(e, func.id, funcpath)
                    });
                    ul.append(li);
                };
            },
            config_item: (item) => {
                if (item.type == "text") {
                    let li = Mew.dom(`
                        <li style="flex-wrap: wrap;">
                            <span>${item.long_desc}</span>
                            <textarea class="mytextarea" ${(this._settings.mainfunc.includes(item.parent))?"":"disabled"}>${(item.value)?item.value.bind(this)():""}</textarea>
                        </li>`);
                    li.querySelector("textarea").addEventListener("input", (e) => { this.savsetting(item.id, item.save.bind(this)(e)) });
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
                                if (e.deltaY < 0) e.target.value++;;
                                break;
                            case `${item.max}`:
                                if (e.deltaY > 0) e.target.value--;;
                                break;
                            default:
                                if (e.deltaY < 0) { e.target.value++; } else { e.target.value--; };
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
            page: () => {
                let page = Mew.dom(`
                <div class="custompage_root">
                    <div aria-hidden="true" class="blackback" onclick="this.parentNode.remove()"></div>
                    <div class="MuiPaper-root MuiPaper-elevation16 pagedisplay">
                        <div class="title">这里可以尽脚本所能地，客制化Mew Web端。一般情况下，请刷新页面以应用更改。部分更改可立即或重载设置页生效。</div>
                        <ul></ul>
                    </div>
                </div>`),
                    ul = page.querySelector("ul");
                setting.switcher(ul);
                ul.append(Mew.dom(`<li><hr style="width:100%" /></li>`));
                for (let i in this._config_extra) {
                    let li = setting.config_item(this._config_extra[i]);
                    if (li) ul.append(li);
                };
                document.body.append(page);
            }
        };
        Mew.loadcss(this._data.css_basic);
        var icon = Mew.dom(`<div id="settingicon">${this._data.settingicon}</div>`);
        icon.addEventListener("click", () => { setting.page() });
        document.querySelector("[class^='sidebar_root__']").append(icon);
    };
    run() {
        for (let i in this._config) { if (this._config[i].func_once && !this._config[i].parent) { this[`func_once_${this._config[i].id}`]() } };
        var observer = new MutationObserver(() => {
            try {
                this.basic(); //基本函数，加载设置页
                for (let i in this._config) { if (this._config[i].func_loop && !this._config[i].parent) { this[`func_loop_${this._config[i].id}`]() } };
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
let datas = {
    defaultavatar: "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
    totopicon: '<svg t="1624339130920" source="https://www.iconfont.cn" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1179" width="40" height="40"><path d="M708.85376 416.19456c0 2.0992-0.65536 4.1984-1.9968 5.96992-2.68288 3.56352-7.424 4.89472-11.5712 3.24608L571.52512 376.5248l0 286.52544c0 5.4784-4.44416 9.92256-9.9328 9.92256l-99.18464 0c-5.46816 0-9.91232-4.44416-9.91232-9.92256L452.49536 376.5248l-123.78112 48.88576c-4.13696 1.6384-8.87808 0.3072-11.56096-3.24608-2.69312-3.56352-2.68288-8.47872 0.06144-12.01152L504.13568 167.0144c1.88416-2.44736 4.78208-3.87072 7.86432-3.87072s5.9904 1.4336 7.86432 3.87072l186.9312 243.13856C708.15744 411.92448 708.85376 414.0544 708.85376 416.19456zM512 726.51776c-46.32576 0-83.88608 37.55008-83.88608 83.88608 0 46.336 37.56032 83.88608 83.88608 83.88608s83.89632-37.55008 83.89632-83.88608C595.89632 764.07808 558.32576 726.51776 512 726.51776z" p-id="1180" fill="#bfbfbf"></path></svg>',
    searchicon: '<svg t="1627976673096" source="https://www.iconfont.cn" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7438" width="30" height="30"><path d="M222.6944 222.7968A323.1488 323.1488 0 0 0 133.6832 512c19.2512-87.3728 64.512-172.7488 135.0144-243.3024C339.2512 198.1184 424.6272 152.8832 512 133.632c-101.632-19.1488-210.688 10.5216-289.3056 89.1648z" fill="#7294da" p-id="7439"></path><path d="M989.44 822.1184l-121.7024-121.7024a118.016 118.016 0 0 0-92.8-34.1248c114.4576-165.5552 97.92-394.3936-49.4848-541.824-165.9392-165.9904-435.0464-165.9904-601.0368 0-165.9392 165.9904-165.9392 435.1232 0 601.1136 147.4048 147.4304 376.064 163.84 541.7216 49.3824-2.56 33.28 8.8576 67.5328 34.1248 92.8l121.7024 121.728c46.08 45.9776 121.3696 45.9776 167.3472 0 46.208-45.9776 46.208-121.2928 0.128-167.3728zM676.096 676.096c-138.6752 138.6752-363.392 138.6752-502.016 0-138.6752-138.6752-138.6752-363.4432 0-502.1184 138.624-138.6752 363.3408-138.6752 502.016 0 138.6496 138.5728 138.6496 363.4432 0 502.1184z" fill="#7294da" p-id="7440"></path></svg>',
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
    }`,
    css_thought_in_middle: `
    .MuiPaper-elevation16 {
        width: 50% !important;
        right: 25%;
    }
    [class^='compact-tabbar_tabbar-root__'],
    [class^='relationships_user-item__'],
    [class^='relationships_header__'] {
        background-color: rgb(var(--colors-background-regular));
        width: unset;
    }
    [class^='relationships_info__'] {
        max-width: 60% !important;
    }
    [class^='compact-tabbar_tabbar-item__'],
    [class^='relationships_name-center__'],
    [class^='relationships_name__'] {
        color: rgb(var(--colors-receive-msg)) !important;
    }
    [class^='comment-item_root__'] {
        content-visibility: auto;
    }
    [class^='comments_modal-out__'] {
        max-width:40%;
    }`,
    css_compact_thought_hide_img: `
    [class^='thought-v2_root__'] [class^='post-preview_cover__'],
    [class^='v2_frame-wrapper__'],
    [class^='thought-v2_img-wrapper__'] {
        display: none;
    }`,
    css_compact_thought_hide_text: `
    [class^='thought-v2_content__']>p {
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block !important;
    }`,
    css_compact_thought_more_node: `
    .h-\\\[12rem\\\] {
        height: unset;
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
        .MuiIconButton-sizeSmall,
        .MuiButtonBase-root {
            color: white;
        }
        .Mui-selected {
            color: wheat !important;
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
        [class^='thought-v2_quote-bar__'],
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
    }`,
    css_only_this_mewer: `
    [class*='comment-item_deleted__'] {
        display: none;
    }`
};
let mew = new Mew();
mew.conf({
    id: "darkmode",
    short_desc: "深色模式",
    long_desc: "mew将根据浏览器偏好，在浏览器选择深色模式时自动切换为深色模式。",
    func_once: function() { Mew.loadcss(datas.css_darkmode) },
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
    func_once: function() { Mew.loadcss(datas.css_desktop) },
    func_loop: function() {
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
    func_once: function() { Mew.loadcss(datas.css_thought_in_middle) },
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
    func_once: function() { Mew.loadcss(datas.css_img_size) },
    func_loop: function() {
        document.body.style.setProperty("--img-width", this._settings.img_width + "%");
        document.body.style.setProperty("--img-left", (100 - this._settings.img_width) / 2 + "%");
    }
});
mew.conf({
    id: "compact_thought",
    short_desc: "紧凑想法列表",
    long_desc: "隐藏左侧想法栏图片；仅显示部分信息，使想法列表更加紧凑；左侧据点栏可显示四个据点。",
    func_once: function() { return true },
    child_funcs: [{
            id: "compact_thought_hide_img",
            short_desc: "隐藏图片",
            long_desc: "隐藏左侧想法栏图片。",
            func_once: function() { Mew.loadcss(datas.css_compact_thought_hide_img) }
        },
        {
            id: "compact_thought_hide_text",
            short_desc: "缩减文字",
            long_desc: "缩减左侧想法栏文字高度。",
            func_once: function() { Mew.loadcss(datas.css_compact_thought_hide_text) }
        },
        {
            id: "compact_thought_more_node",
            short_desc: "更多据点",
            long_desc: "左侧据点栏可显示四个据点。",
            func_once: function() { Mew.loadcss(datas.css_compact_thought_more_node) }
        }
    ]
});
mew.conf({
    id: "topic_list",
    short_desc: "更好的话题栏",
    long_desc: "鼠标置于话题栏上时，将会展开所有话题Tag，移出则收起。",
    func_once: function() { Mew.loadcss(datas.css_topic_list) },
});
mew.conf({
    id: "blacklist",
    short_desc: "黑名单",
    long_desc: "下方有一个黑名单文本框，黑名单内用户的发言将不会显示于讨论区。",
    config_extra: [{
        id: "bl",
        type: "text",
        default: [],
        long_desc: "[立即生效][自动保存]下方的文本框用于填写黑名单。填写昵称，每行一个。",
        value: function() { return this._settings.bl.join("\n") },
        save: function(e) { return e.target.value.split("\n").filter((i) => { return i; }) }
    }],
    func_loop: function() {
        if (!document.querySelector("[class^='card_name__']")) return false;
        var usernames = Array.from(document.querySelectorAll("[class*='message-text_name__']")).concat(Array.from(document.querySelectorAll("[class*='message-image_name__']")));
        for (let i in usernames) {
            let el = usernames[i];
            if (el && el.className.indexOf("inblacklist") == -1) {
                if (this._settings.bl.includes(el.innerText)) {
                    el.offsetParent.offsetParent.style = "z-index:-999";
                    el.classList.add("inblacklist");
                };
            };
        };
    }
});
mew.conf({
    id: "search",
    short_desc: "PC端想法搜索",
    long_desc: "左侧据点列表上方新增一个搜索按钮，点击后可搜索据点内想法。",
    func_loop: function() {
        if (document.querySelector("#searchicon") || !document.querySelector("[class^='sidebar_logo__']")) return false;
        const search = new class {
            loadres(_avatar, _nickname, _content, _date, data_id) {
                let item = Mew.dom(`
                <div class="searchitem">
                    <div class="poster">
                        <img src="${_avatar}">
                        <div style="display: flex;flex-direction: column;align-items: flex-start;padding: 0 0 0 5px;">
                            <span class="nickname">${_nickname}</span>
                            <span class="date">${(_date)?"发表于 " + new Date(_date).toLocaleString():""}</span>
                        </div>
                    </div>
                    <p class="content" data-id="${(data_id)?data_id:""}">${(_content)?_content:"该想法没有文字OwO 但您仍可点击这段文字了解该想法的详情"}</p>
                </div>`),
                    content = item.querySelector(".content");
                content.addEventListener("click", (e) => {
                    if (e.target.tagName == "A") return false;
                    var data_id = e.target.getAttribute("data-id");
                    if (data_id) { window.open("https://mew.fun/Recouper/thoughts/" + data_id) } else { return false };
                });
                document.querySelector("#searchres").append(item);
            };
            getcookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (let i in ca) {
                    var c = ca[i].trim();
                    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                };
                return "";
            };
            search(str) {
                document.querySelector("#searchres").innerHTML = "";
                this.loadres(datas.defaultavatar, "提示", "正在努力搜索中！");
                fetch(`https://api.mew.fun/api/v1/nodes/${window.location.pathname.slice(3)}/search-thoughts?keyword=${str}&limit=100`, {
                    headers: {
                        Authorization: this.getcookie("tomon_community_token")
                    }
                }).then(res => {
                    if (res.status < 200 || res.status > 300) {
                        var error = new Error(res.statusText);
                        error.res = res;
                        throw error;
                    };
                    return res;
                }).then(res => res.json()).then(res => {
                    document.querySelector("#searchres").innerHTML = "";
                    if (res.entries.length == 0) {
                        this.loadres(datas.defaultavatar, "提示", "没有搜索到任何信息！");
                        return false;
                    };
                    for (let i in res.entries) {
                        let poster = res.objects.users[res.entries[i].author_id],
                            avatar = (poster.avatar) ? res.objects.media[poster.avatar].url : datas.defaultavatar;
                        this.loadres(avatar, poster.name, res.entries[i].status, res.entries[i].created_at, res.entries[i].id);
                    };
                    if (res.entries.length == 100) { this.loadres(datas.defaultavatar, "提示", "最多只能展示100条结果哦！") };
                }).catch(err => {
                    document.querySelector("#searchres").innerHTML = "";
                    this.loadres(datas.defaultavatar, "提示", err);
                });
            };
            serachpage() {
                let s = Mew.dom(`
                <div class="custompage_root">
                    <div aria-hidden="true" class="blackback" onclick="this.parentNode.remove()"></div>
                    <div class="MuiPaper-root MuiPaper-elevation16 pagedisplay searchpage">
                        <div class="form"><input type="text" placeholder="请输入您要搜索的内容..." \\>
                            <button>${datas.searchicon}</button>
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
                    if (e.target.checked) { document.querySelector("#searchres").style = "flex-direction: column-reverse" } else { document.querySelector("#searchres").style = "" };
                });
                document.body.append(s);
            };
        };
        Mew.loadcss(datas.css_search);
        var searchicon = Mew.dom(`<div id="searchicon">${datas.searchicon}</div>`);
        searchicon.addEventListener("click", () => { search.serachpage() });
        document.querySelector("[class^='sidebar_logo__']").after(searchicon);
    },
});
mew.conf({
    id: "text2url",
    short_desc: "Url变为可点击",
    long_desc: "将讨论区内不可点击的链接转换为可点击。",
    func_once: function() { Mew.loadcss(datas.css_text2url) },
    func_loop: function() {
        const text2url = function(el) {
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
    func_once: function() { Mew.loadcss(datas.css_thought_widget) },
    func_loop: function() {
        if (!document.querySelector("#comments")) return false;
        var root = document.querySelectorAll("#comments");
        if (root[root.length - 1].querySelector(".thought-widget")) return false;
        let div = Mew.dom(`<div class="thought-widget"><div title="回到顶部" class="to-top">${datas.totopicon}</div></div>`);
        div.addEventListener("click", (e) => {
            var target = e.currentTarget;
            if (e.target.tagName == "path") { target = e.target.parentNode.parentNode };
            if (e.target.tagName == "svg") { target = e.target.parentNode };
            target.parentNode.parentNode.scrollTo({
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
    func_loop: function() {
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
                    this.noti(user + " @了你，快去看看吧！", msg, () => { return false; });
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
    func_once: function() {
        Mew.loadcss(datas.css_only_this_mewer);
        let lib = document.createElement("script"),
            hook = async(response) => {
                if (response.config.url.indexOf("authorOnly=1") == -1) return false;
                let url = response.config.url.replace("&authorOnly=1", "");
                response.response = await fetch(url).then(res => res.json()).then(res => {
                    let res_filted = ((obj, name) => {
                        const res = { entries: [], objects: {} };
                        if (obj.entries.length == 0) {
                            for (let x = 0; x < 1; x++) { res.entries.push({ id: 0 }) };
                        } else {
                            for (let x = 0; x < 20; x++) {
                                res.entries.push({ id: obj.entries[obj.entries.length - 1].id, deleted: true });
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
                onResponse: async(response, handler) => {
                    let res = await hook(response);
                    if (res) response = res;
                    handler.next(response);
                },
            });
        };
        document.head.append(lib);
    },
    func_loop: function() {
        if (!document.querySelector("#comments")) return false;
        var root = document.querySelectorAll("#comments");
        if (root[root.length - 1].querySelector(".onlyauthor-hook")) return false;
        let btn = root[root.length - 1].querySelectorAll("[class^='comments_right-btn__']")[0],
            callback = (e) => {
                if (e.target.innerText == "只看作者") {
                    var nick = prompt("打算只看谁的评论呢？填入Ta的昵称：", e.target.getAttribute("data-author"));
                    if (!nick) { e.stopPropagation(); return false; } else { this._settings.only_this_mewer = nick };
                };
            };
        btn.addEventListener("click", callback);
        btn.setAttribute("data-author", root[root.length - 1].querySelector("[class^='thought-v2_name__']").innerText);
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
        long_desc: "[自动保存]下方的文本框可以用于加载自定义css样式。",
        value: function() { return this._settings.custom_css },
        save: function(e) { return e.target.value }
    }],
    func_once: function() { Mew.loadcss(this._settings.custom_css) }
});
mew.run();