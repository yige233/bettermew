let frame_version = 0.74;
let data = {
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
.child_config {
    padding: 0 0 0 2em;
}
.myButton {
    box-shadow:inset 0px 1px 0px 0px #ffffff;
    background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
    background-color:#f9f9f9;
    border-radius:6px;
    border:1px solid #9e9c9e;
    display:inline-block;
    cursor:pointer;
    color:#666666;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #ffffff;
}
.myButton:hover {
    background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
    background-color:#e9e9e9;
}
.myButton:active {
    position:relative;
    top:1px;
}`
};
let data_mw_events = new Map([
    ["user_update", []],
    ["user_typing", []],
    ["user_relationship_update", []],
    ["node_create", []],
    ["node_update", []],
    ["node_delete", []],
    ["node_position", []],
    ["node_topic_space_position_change", []],
    ["topic_create", []],
    ["topic_update", []],
    ["topic_delete", []],
    ["topic_position", []],
    ["role_create", []],
    ["role_update", []],
    ["role_delete", []],
    ["role_position", []],
    ["node_member_add", []],
    ["node_member_update", []],
    ["node_member_remove", []],
    ["node_member_ban", []],
    ["node_member_activity_change", []],
    ["message_create", []],
    ["message_update", []],
    ["message_delete", []],
    ["message_acknowledge", []],
    ["thought_create", []],
    ["thought_update", []],
    ["thought_delete", []],
    ["thought_engagement", []],
    ["comment_engagement", []],
    ["comment_create", []],
    ["comment_update", []],
    ["comment_delete", []],
    ["notification", []],
    ["thought_pin", []],
    ["thought_unpin", []],
    ["app_update", []],
    ["default", [(data) => console.log(data.event_name)]]
]);
const bm_data = Symbol("mew_data"),
    bm_plugins = Symbol("bm_plugins"),
    bm_loop = Symbol("bm_loop"),
    bm_bettermew = Symbol("bm_bettermew"),
    bm_ws = Symbol("bm_ws"),
    mw_events = Symbol("mw_events"),
    mw_ws = Symbol("mw_WebSocket"),
    mw_reconnect = Symbol("mw_reconnect"),
    mw_user = Symbol("mw_user"),
    mp_func_once_result = Symbol("mp_func_once_result"),
    mp_configs = Symbol("mp_configs");
class Mew_ws {
    constructor() {
        this[mw_events] = data_mw_events;
        this.connect();
    };
    get token() {
        return localStorage.getItem("mew-token").replace(/"/g, "")
    };
    get readyState() {
        return this[mw_ws].readyState
    };
    get user() {
        return this[mw_user] || {}
    };
    get url() {
        return "wss://gateway.mew.fun/socket.io/?EIO=4&transport=websocket"
    };
    on(event, fn) {
        if (!this[mw_events].has(event) || event == "default") return false;
        this[mw_events].get(event).push(fn);
    };
    remove(event, fn) {
        if (!this[mw_events].has(event) || event == "default") return false;
        this[mw_events].set(event, this[mw_events].get(event).filter(e => e != fn));
    };
    connect() {
        this[mw_reconnect] = true;
        let ws = new WebSocket(this.url);
        ws.onmessage = async (e) => {
            let code = e.data.match(/[0-9]{1,2}/).toString();
            if (code == "0") ws.send("40");
            if (code == "2") ws.send("3");
            if (code == "40") ws.send("420" + JSON.stringify(["identity", JSON.stringify({
                token: this.token,
                platform: "web",
                active: true
            })]));
            if (code == "42") {
                let [type, data] = JSON.parse(e.data.slice(2));
                let message = JSON.parse(data);
                if (type == "identity") this[mw_user] = message.user;
                if (type == "dispatch") {
                    message.data.event_name = message.event;
                    let actions = this[mw_events].get(message.event) || this[mw_events].get("default");
                    for (let action of actions) action(message.data);
                };
            };
            if (!this.token) this.close(false);
        };
        ws.onerror = () => this.connect();
        ws.onclose = () => this[mw_reconnect] && this.connect();
        this[mw_ws] = ws;
    };
    close(reconnect) {
        this[mw_reconnect] = (reconnect == false) ? false : true;
        this[mw_ws].close();
    };
}
class BetterMew {
    constructor() {
        this[bm_loop] = [];
        this[bm_ws] = new Mew_ws();
        this[bm_plugins] = new Map();
        this[bm_data] = data;
        MewTool.loadcss(this[bm_data].css_basic);
        if (localStorage.getItem("bettermew") == null) localStorage.setItem("bettermew", "{}");
        this.load(new MewPlugin("bettermew", {
            hide: true,
            always: true,
        }).addConf("active_plugins", {
            type: "none",
            default: []
        }).addConf("notification", {
            type: "none",
            default: true
        }));
        this[bm_bettermew] = this[bm_plugins].get("bettermew").configs;
        new MutationObserver(() => {
            this.render();
            for (let i of this[bm_loop]) {
                try {
                    this[bm_plugins].get(i).func_loop();
                } catch (err) {
                    console.error(`插件 ${plugin.id} 出现错误：`, err)
                };
            };
        }).observe(document, {
            childList: true,
            arrtibutes: true,
            subtree: true,
        });
    };
    get ws() {
        return this[bm_ws]
    };
    get version() {
        return frame_version
    };
    notice(title, msg, onclickfunc) {
        if (!("Notification" in window)) {
            let click = confirm(title + msg);
            if (click) onclick();
            return;
        };
        Notification.requestPermission((status) => {
            if (status == "denied") {
                let click = confirm(title + msg);
                if (click) onclick();
                if (this[bm_bettermew].get("notification").value) {
                    alert("您禁用了通知提醒，因此收到了此弹窗。请同意通知授权来获得更好的通知体验。此条提示将不会再次出现。");
                    this[bm_bettermew].set("notification", false)
                };
                return;
            };
            this[bm_bettermew].set("notification", true);
            var noti = new Notification(title, {
                body: msg,
                icon: 'https://mew.fun/favicon.png'
            });
            noti.onclick = () => {
                if (onclickfunc) onclickfunc();
                noti.close();
            };
            noti.onshow = () => {
                setTimeout(() => {
                    noti.close()
                }, 5000);
            };
        });
        return true;
    };
    load(plugin) {
        if (this[bm_plugins].has(plugin.id)) throw new Error("重复的插件id：" + plugin.id);
        this[bm_plugins].set(plugin.id, plugin);
        let active = (this[bm_bettermew]) ? this[bm_bettermew].get("active_plugins").value : [];
        if (plugin.always && !active.includes(plugin.id)) active.push(plugin.id);
        if (!active.includes("bettermew")) active.push("bettermew");
        if (this[bm_bettermew]) this[bm_bettermew].set("active_plugins", active);
        if (active.includes(plugin.id)) {
            try {
                plugin.func_once();
            } catch (err) {
                console.error(`插件 ${plugin.id} 出现错误：`, err)
            };
            this[bm_loop].push(plugin.id);
        };
    };
    render() {
        if (!document.querySelector("[class^='sidebar_root__']") || document.querySelector("#icon_setting")) return false;
        let active = this[bm_bettermew].get("active_plugins").value;
        let rendPlugin = async (ul, plugin) => {
            let li = MewTool.dom(`
                <li>
                    <span>${plugin.short_desc}：${plugin.long_desc}</span>
                    <div>
                        <input type="checkbox" id="control_${plugin.id}" ${(active.includes(plugin.id)) ? "checked" : ""} class="switcher">
                        <label for="control_${plugin.id}" title="${plugin.short_desc}" class="switcher-label"></label>
                    </div>
                </li>`);
            li.querySelector(`#control_${plugin.id}`).addEventListener("click", (e) => {
                (e.target.checked) ? active.push(plugin.id): active.splice(active.indexOf(plugin.id), 1)
                this[bm_bettermew].set("active_plugins", active);
            });
            if (!plugin.hide) ul.append(li);
            for (let i of plugin.configs) {
                let element = await rendPluginConf(plugin, i[0]);
                if (element) ul.append(element)
            };
            return ul;
        };
        let rendPluginConf = async (plugin, confid) => {
            let config = plugin.configs.get(confid);
            var li;
            if (!active.includes(config.parent)) return false;
            switch (config.type) {
                case "text":
                    li = MewTool.dom(`
                    <li style="flex-wrap: wrap;">
                        <span>${config.desc}</span>
                        <textarea class="mytextarea">${(config.value) ? await config.get.call(plugin) : ""}</textarea>
                    </li>`);
                    li.querySelector("textarea").addEventListener("input", async (e) => {
                        let value = await config.set(e);
                        plugin.configs.set(confid, value)
                    });
                    return li;
                case "button":
                    li = MewTool.dom(`
                    <li style="flex-wrap: wrap;">
                        <span>${config.desc}</span>
                        <button class="myButton">${config.short_desc}</button>
                    </li>`);
                    li.querySelector("button").addEventListener("click", async (e) => {
                        await config.click.call(plugin, e);
                    });
                    return li;
                case "number":
                    li = MewTool.dom(`
                    <li>
                        <span>${config.desc}</span>
                        <span class="value">${config.value}</span>
                        <div><input type="range" id="control_${config.parent}_${confid}" title="${config.desc}${config.value}" value="${config.value}" max="${config.max}" min="0" step="1" style="width: 300px;"></div>
                    </li>`);
                    li.querySelector(`#control_${config.parent}_${confid}`).addEventListener("change", (e) => {
                        e.target.title = `${config.desc}${e.target.value}`;
                        e.currentTarget.parentNode.parentNode.querySelector(".value").innerText = `${e.target.value}`;
                        plugin.configs.set(confid, Number(e.target.value));
                    });
                    li.querySelector(`#control_${config.parent}_${confid}`).addEventListener("wheel", (e) => {
                        e.preventDefault();
                        if (e.target.disabled) return false;
                        switch (e.target.value) {
                            case "0":
                                if (e.deltaY < 0) e.target.value++;
                                break;
                            case `${config.max}`:
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
                        e.target.title = `${config.desc}${e.target.value}`;
                        e.currentTarget.parentNode.parentNode.querySelector(".value").innerText = `${e.target.value}`;
                        plugin.configs.set(confid, Number(e.target.value));
                    });
                    return li;
                case "switch":
                    li = MewTool.dom(`
                    <li>
                        <span>${config.desc}</span>
                        <div>
                            <input type="checkbox" id="control_config_${config.id}" ${(config.value) ? "checked" : ""} class="switcher">
                            <label for="control_config_${config.id}" title="${config.desc}" class="switcher-label"></label>
                        </div>
                    </li>`);
                    li.querySelector(`#control_config_${config.id}`).addEventListener("click", (e) => {
                        plugin.configs.set(confid, e.target.checked);
                    });
                    return li;
                default:
                    break;
            }
            return false;
        };
        var icon = MewTool.dom(`<div id="icon_setting">${this[bm_data].icon_setting}</div>`);
        document.querySelector("[class^='sidebar_root__']").append(icon);
        icon.addEventListener("click", async () => {
            let page = MewTool.stdpage(`<div class="title">这里可以尽脚本所能地，客制化Mew Web端。一般情况下，请刷新页面以应用更改。部分更改可立即或重载设置页生效。</div><ul></ul>`),
                ul = page.querySelector("ul");
            for (let i of this[bm_plugins]) {
                ul = await rendPlugin(ul, i[1]);
                ul.append(document.createElement("hr"));
            };
            page.apply();
        });
    };
    isActive(id) {
        return this[bm_bettermew].get("active_plugins").value.includes(id);
    };
};
class class_mp_configs extends Map {
    set(id, value) {
        super.get(id).value = (typeof (value) != "undefined") ? value : super.get(id).default;
        let storage = JSON.parse(localStorage.getItem("bettermew"));
        storage[super.get(id).parent][id] = super.get(id).value;
        localStorage.setItem("bettermew", JSON.stringify(storage));
    };
    superset(id, config) {
        super.set(id, config);
        this.set(id, config.value);
    };
};
class MewPlugin {
    get func_once_result() {
        return this[mp_func_once_result] || null
    };
    get configs() {
        return this[mp_configs]
    };
    constructor(id, body) {
        this[mp_configs] = new class_mp_configs();
        if (!id) throw new Error("必须为插件定义一个id！");
        body = (typeof (body) != "undefined") ? body : {};
        this.id = id;
        this.hide = body.hide || false;
        this.always = body.always || false;
        this.short_desc = body.short_desc || "";
        this.long_desc = body.long_desc || "";
        this.func_loop = (body.func_loop) ? (async () => {
            await body.func_loop.call(this);
        }) : () => 0;
        this.func_once = (body.func_once) ? (async () => {
            this[mp_func_once_result] = await body.func_once.call(this);
        }) : () => 0;
    };
    addConf(id, config) {
        if (this.configs.has(id)) throw new Error("重复的设置项id：" + id);
        config = (typeof (config) != "undefined") ? config : {};
        let storage = JSON.parse(localStorage.getItem("bettermew"));
        if (!storage[this.id]) storage[this.id] = {};
        localStorage.setItem("bettermew", JSON.stringify(storage));
        config.parent = this.id;
        config.desc = (typeof (config.desc) != "undefined") ? config.desc : "";
        config.default = (typeof (config.default) != "undefined") ? config.default : "";
        config.type = (["text", "number", "button", "switch"].includes(config.type)) ? config.type : "none";
        switch (config.type) {
            case "text":
                config.get = config.get || function () {
                    return ""
                };
                config.set = config.set || function (e) {
                    return ""
                };
                break;
            case "number":
                config.max = config.max || 100;
                break;
            case "button":
                config.click = config.click || function (e) {
                    return ""
                };
                config.short_desc = config.short_desc || config.desc;
                break;
            case "switch":
                config.default = (typeof (config.default) == "boolean") ? config.default : false;
                break;
            default:
                break;
        };
        config.value = (typeof (storage[this.id][id]) != "undefined") ? storage[this.id][id] : config.default;
        this.configs.superset(id, config);
        return this;
    };
};
class MewTool {
    static dom(str) {
        let body = new DOMParser().parseFromString(str, 'text/html').body.children[0];
        return body || new DOMParser().parseFromString(str, 'text/html').head.children[0];
    };
    static getreact(el) {
        let e = /__reactProps\$/;
        for (let i in el) {
            if (e.test(i)) return el[i];
        };
        return {};
    };
    static loadcss(css, id) {
        let el = MewTool.dom(`<style type="text/css" ${(id) ? "id=" + id : ""}>${css}</style>`);
        document.head.append(el);
        return el;
    };
    static getcookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (let i of ca) {
            var c = i.trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        };
        return null;
    };
    static stdpage(el) {
        let page = MewTool.dom(`<div class="custompage_root"><div aria-hidden="true" class="blackback"></div><div class="MuiPaper-root MuiPaper-elevation16 stdpage" style="animation: appear 0.5s ease 0s 1 normal;">${el}</div</div>`);
        page.querySelector(".stdpage").addEventListener("animationend", (e) => {
            let stdpage = e.target;
            stdpage.removeAttribute("style");
            (stdpage.className.indexOf("disapper") != -1) && stdpage.parentNode.remove();
            page.querySelector(".blackback").addEventListener("click", () => {
                stdpage.classList.add("disapper");
                stdpage.setAttribute("style", "animation: appear 0.5s ease 0s 1 reverse;");
            });
        });
        page.apply = () => {
            document.body.append(page);
        };
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
    static contextmenu(e, optionsMap) {
        !document.querySelector("#css_bettermew_menu") && MewTool.loadcss(`
        #mew_menu {
            position:fixed;
            z-index:9999;
            width:200px;
        }
        #mew_menu>li {
            cursor: pointer;
            color: rgb(var(--colors-receive-msg));
            padding: 5px 10px;
            background-color: rgb(var(--colors-background-dialog));
            transition: .2s ease;
        }
        #mew_menu>li:first-child {
            border-radius: 10px 10px 0px 0px;
        }
        #mew_menu>li:last-child {
            border-radius: 0px 0px 10px 10px;
        }
        #mew_menu>li:hover {
            background-color: rgb(var(--colors-gray-200));
        }
        `, "css_bettermew_menu");
        document.querySelector("#mew_menu") && document.querySelector("#mew_menu").remove();
        optionsMap = optionsMap || new Map();
        if (!optionsMap.size) return false;
        let ul = MewTool.dom(`<ul id="mew_menu"></ul>`);
        for (let i of optionsMap) {
            let text = (typeof (i[0]) == "object" && i[0].text) ? i[0].text : i[0];
            let li = MewTool.dom(`<li ${(optionsMap.size <= 1) ? "style='border-radius: 10px;'" : ""}><span>${text}</span></li>`);
            li.addEventListener("click", (e) => {
                i[1](e);
                ul.remove();
            });
            ul.append(li);
            ul.append(document.createElement("hr"));
        };
        ul.removeChild(ul.children[ul.children.length - 1]);
        let fn = (e) => {
            !ul.contains(e.target) && ul.remove();
            window.removeEventListener("click", fn);
        };
        document.body.append(ul);
        ul.style = `left:${e.clientX}px;top:${((e.clientY + ul.clientHeight) > document.body.clientHeight) ? document.body.clientHeight - ul.clientHeight : e.clientY}px;`;
        setTimeout(() => {
            window.addEventListener("click", fn);
        }, 10);
    };
    static async imgurl2id(url) {
        if (!url || !/[0-9a-f]{32}?/.test(url)) return [0, 0];
        let hash = url.match(/[0-9a-f]{32}?/g)[0];
        let id = await fetch(`https://api.mew.fun/api/v1/medias/image/${hash}`, {
            headers: {
                Authorization: localStorage.getItem("mew-token").replace(/"/g, ""),
            },
            method: "POST"
        }).then(async res => {
            if (!res.ok) return 0;
            let json = await res.json();
            if (json.status) return 0
            return json.id;
        });
        return [id, (id != 0) ? hash : 0];
    };
};
const mew = new BetterMew();
export {
    MewTool,
    MewPlugin,
    mew
}