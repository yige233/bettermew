import { MewTool, MewPlugin, mew } from "https://cdn.jsdelivr.net/gh/yige233/bettermew@6010ae6/mew.frame.js";
let resources = {
    icon_totop: 'https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/icon/totop.svg',
    icon_search: 'https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/icon/search.svg',
    css_topic_list: "https://cdn.jsdelivr.net/gh/yige233/bettermew@7d288a8/css/topic_list.css",
    css_desktop: "https://cdn.jsdelivr.net/gh/yige233/bettermew@ce63961/css/desktop.css",
    css_thought_in_middle: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/thought_in_middle.css",
    css_whisper_in_middle: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/whisper_in_middle.css",
    css_desktop_reverse: "https://cdn.jsdelivr.net/gh/yige233/bettermew@ce63961/css/desktop_reverse.css",
    css_compact_thought_hide_img: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/compact_thought_hide_img.css",
    css_compact_thought_hide_text: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/compact_thought_hide_text.css",
    css_compact_thought_more_node: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/compact_thought_more_node.css",
    css_search: "https://cdn.jsdelivr.net/gh/yige233/bettermew@a29d7cf/css/search.css",
    css_darkmode: "https://cdn.jsdelivr.net/gh/yige233/bettermew@47b4c42/css/darkmode.css",
    css_text2url: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/text2url.css",
    css_img_size: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/img_size.css",
    css_thought_widget: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/thought_widget.css",
    css_only_this_mewer: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/css/only_this_mewer.css",
    css_custom_stamp: "https://cdn.jsdelivr.net/gh/yige233/bettermew@47b4c42/css/custom_stamp.css",
    icon_node_manage: "https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/icon/node_manage.svg",
    css_node_manage: "https://cdn.jsdelivr.net/gh/yige233/bettermew@47b4c42/css/node_manage.css"
};
mew.load(new MewPlugin("desktop", {
    short_desc: "桌面布局更改",
    long_desc: "可以通滑动条分别调整想法栏和主页栏的宽度。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_desktop));
    },
    func_loop: function () {
        document.body.style.setProperty("--left-width", this.configs.get("left_width").value + "%");
        document.body.style.setProperty("--right-width", this.configs.get("right_width").value + "%");
    }
}).addConf("left_width", {
    type: "number",
    desc: "调整想法栏宽度(%)：",
    default: 26,
    max: 50
}).addConf("right_width", {
    type: "number",
    default: 17,
    desc: "调整主页栏宽度(%)：",
    max: 50
}));
mew.load(new MewPlugin("thought_in_middle", {
    short_desc: "想法全文居中",
    long_desc: "点开想法全文后，想法不再靠边显示而是居中显示。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_thought_in_middle));
    }
}));
mew.load(new MewPlugin("whisper_in_middle", {
    short_desc: "私聊窗口居中",
    long_desc: "点开私聊窗口后，窗口不再靠边显示而是居中显示。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_whisper_in_middle));
    }
}));
mew.load(new MewPlugin("desktop_reverse", {
    short_desc: "调换想法栏和主页栏",
    long_desc: "实际上是将整个桌面的排列顺序进行了反转。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_desktop_reverse));
    },
}));
mew.load(new MewPlugin("img_size", {
    short_desc: "调整想法全文内图片大小",
    long_desc: "可以通过滑动条来调整想法内图片的显示大小。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_img_size))
    },
    func_loop: function () {
        let width = this.configs.get("img_width").value;
        document.body.style.setProperty("--img-width", width + "%");
        document.body.style.setProperty("--img-left", (100 - width) / 2 + "%");
    }
}).addConf("img_width", {
    type: "number",
    default: 50,
    desc: "调整想法全文内图片大小(%)：",
    max: 100
}));
mew.load(new MewPlugin("compact_thought_hide_img", {
    short_desc: "隐藏图片",
    long_desc: "隐藏左侧想法栏图片。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_compact_thought_hide_img));
    }
}));
mew.load(new MewPlugin("compact_thought_hide_text", {
    short_desc: "缩减文字",
    long_desc: "缩减左侧想法栏文字高度。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_compact_thought_hide_text));
    }
}));
mew.load(new MewPlugin("compact_thought_more_node", {
    short_desc: "更多据点",
    long_desc: "左侧据点栏可显示四个据点。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_compact_thought_more_node));
    }
}));
mew.load(new MewPlugin("topic_list", {
    short_desc: "更好的话题栏",
    long_desc: "鼠标置于话题栏上时，将会展开所有话题Tag，移出则收起。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_topic_list));
    },
}));
mew.load(new MewPlugin("thought_widget", {
    short_desc: "回到顶部",
    long_desc: "在想法全文内增加一个“回到顶部”按钮。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_thought_widget));
    },
    func_loop: function () {
        if (!document.querySelector("#comments")) return false;
        var root = document.querySelectorAll("#comments");
        if (root[root.length - 1].querySelector(".thought-widget")) return false;
        let div = MewTool.dom(`<div class="thought-widget"><div title="回到顶部" class="to-top" style="height: 40px;width: 40px;cursor: pointer;background: url('${resources.icon_totop}') center center no-repeat;"></div></div>`);
        div.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
        root[root.length - 1].append(div);
    }
}));
mew.load(new MewPlugin("only_this_mewer", {
    short_desc: "“只看Ta”",
    long_desc: "点击想法长文内的“只看作者”按钮，会弹出一个提示框；提示框内输入用户昵称，即可查看该用户在本想法的发言。同时该功能会隐藏被删除的评论。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_only_this_mewer));
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
                    })(res, this.configs.get("only_this_mewer").value);
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
        let btn = root[root.length - 1].querySelectorAll("[class^='comments_right-btn__']")[0];
        btn.addEventListener("click", (e) => {
            if (e.target.innerText == "只看作者") {
                var nick = prompt("打算只看谁的评论呢？填入Ta的昵称：", e.target.getAttribute("data-author"));
                if (!nick) return e.stopPropagation();
                this.configs.set("only_this_mewer", nick);
            };
        });
        btn.setAttribute("data-author", root[root.length - 1].querySelector("[class^='thought_name__']").innerText);
        btn.classList.add("onlyauthor-hook");
    }
}).addConf("only_this_mewer", {}));
mew.load(new MewPlugin("search", {
    id: "search",
    short_desc: "PC端想法搜索",
    long_desc: "左侧据点列表上方新增一个搜索按钮，点击后可搜索据点内想法。",
    func_loop: function () {
        if (document.querySelector("#icon_search") || !document.querySelector("[class^='sidebar_logo__']")) return false;
        var icon_search = MewTool.dom(`<div id="icon_search" style="background-image:url(${resources.icon_search});width:40px;height:40px;background-repeat: round;"></div>`);
        icon_search.addEventListener("click", () => {
            this.func_once_result.render();
        });
        document.querySelector("[class^='sidebar_logo__']").after(icon_search);
    },
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_search));
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter" && document.querySelector(".search_btn")) document.querySelector(".search_btn").click();
        });
        return new class {
            rendcard(options) {
                let option = {
                    avatar: (options.avatar) ? options.avatar + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    nick: (options.nick) ? options.nick : "Result Card",
                    content: (options.content) ? options.content : "该想法没有文字OwO 但您仍可点击这段文字了解该想法的详情",
                    date: (options.date) ? "发表于：" + new Date(options.date).toLocaleString("chinese", {
                        hour12: false
                    }) : new Date().toLocaleString("chinese", {
                        hour12: false
                    }),
                    data_id: (options.data_id) ? options.data_id : "",
                };
                let card = MewTool.dom(`
                <div class="searchitem">
                    <div class="poster">
                        <img src="${option.avatar}">
                        <div>
                            <span class="nickname">${option.nick}</span>
                            <span class="date">${option.date}</span>
                        </div>
                        ${(option.data_id) ? `<div class="shareto">分享想法至讨论</div>` : ""}
                    </div>
                    <p class="content">${option.content}</p>
                </div>`);
                card.querySelector(".content").addEventListener("click", () => {
                    if (option.data_id) window.open("https://mew.fun/betterMew/thoughts/" + option.data_id);
                });
                option.data_id && card.querySelector(".shareto").addEventListener("click", () => {
                    this.sharepage(option.data_id);
                });
                return card;
            };
            async sharepage(thought_id) {
                let json = await MewTool.mynodes();
                if (json.message) return mew.noticece("获取您的据点列表失败！", json.message);
                let page = MewTool.stdpage(`<div class="sharepage_root"><ul></ul></div>`);
                let ul = page.querySelector(".sharepage_root").querySelector("ul");
                for (let n of json.entries) {
                    for (let t of n.topics) {
                        let li = MewTool.dom(`<li>分享至：${n.name} 的 ${t.name}</li>`);
                        li.addEventListener("click", () => {
                            fetch(`https://api.mew.fun/api/v1/topics/${t.id}/messages`, {
                                headers: {
                                    Authorization: MewTool.getcookie("tomon_community_token"),
                                    "Content-type": "application/json; charset=utf-8"
                                },
                                body: JSON.stringify({
                                    type: 2,
                                    thought: thought_id
                                }),
                                method: "POST"
                            }).then(async res => {
                                if (res.ok) return mew.notice("分享成功！", "分享成功！", () => {
                                    window.open(`https://mew.fun/n/${n.node_name}?topicId=${t.id}`);
                                });
                                let json = res.json();
                                return mew.notice("分享失败！", json.message);
                            })
                        });
                        ul.append(li);
                    };
                };
                page.apply();
            }
            async getsearchres(keyword, pagination) {
                let base_url = `https://api.mew.fun/api/v1/nodes/${window.location.pathname.slice(3)}/search-thoughts?keyword=${keyword}&limit=100`;
                let url = (pagination) ? `${base_url}&pagination=${pagination}` : base_url;
                let res = await fetch(url, {
                    headers: {
                        Authorization: MewTool.getcookie("tomon_community_token")
                    }
                });
                return await res.json();
            };
            async search(keyword, pagination) {
                let container = document.querySelector("#searchres");
                let searching = this.rendcard({
                    nick: "提示",
                    content: "正在努力搜索中！"
                });
                container.append(searching);
                let res = await this.getsearchres(keyword, (pagination) ? pagination : null);
                searching.remove();
                if (res.message) {
                    container.append(this.rendcard({
                        nick: "提示",
                        content: res.message
                    }));
                };
                if (res.entries.length == 0) return container.append(this.rendcard({
                    nick: "提示",
                    content: "没有搜索到任何信息！"
                }));
                for (let e of res.entries) {
                    let poster = res.objects.users[e.author_id],
                        avatar = (poster.avatar) ? res.objects.media[poster.avatar].url : null;
                    container.append(this.rendcard({
                        avatar: avatar,
                        nick: poster.name,
                        content: e.status,
                        date: e.created_at,
                        data_id: e.id
                    }));
                };
                if (res.entries.length == 100) {
                    let next = this.rendcard({
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
            render() {
                let s = MewTool.stdpage(`<div class="form"><input class="search_input" type="text" placeholder="请输入您要搜索的内容..." ><button class="search_btn"></button></div><div><span>倒序浏览</span><input id="sort" class="sort switcher" type="checkbox"><label for="sort"></label></div><div id="searchres"></div>`);
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
                s.apply();
            };
        };
    }
}));
let plugin_custom_stamps = new MewPlugin("custom_stamp", {
    short_desc: "自定义表情",
    long_desc: "可在“发送表情”按钮中使用自定义表情。在表情管理页中管理自定义表情。",
    func_loop: async function () {
        let nonce_gen = (len) => {
            let nonce = [];
            for (let i = 0; i < len; i++) {
                nonce.push(Math.floor(Math.random() * 10))
            };
            return nonce.join("");
        };
        let stamps = this.configs.get("stamps").value;
        if (!document.querySelector("[class^='reaction-panel_stamp-list__']") || document.querySelector(".custom_stamps")) return false;
        document.querySelector("[class^='reaction-panel_stamp-list__']").classList.add("custom_stamps");
        let topicid = (document.querySelector("[class*='panel_list__']")) ?
            document.querySelector("[class*='panel_list__']").querySelector("[class*='sidebar_selected__']").parentNode.getAttribute("data-id") :
            (MewTool.getreact(document.querySelector("div[class*='message-container_widget__']")).children[0].props.children.props.topicId) ? MewTool.getreact(document.querySelector("div[class*='message-container_widget__']")).children[0].props.children.props.topicId : 0
        if (topicid == 0) return false;
        for (let s of stamps) {
            let [id, hash, desc] = s.split("$"),
                the_desc = (desc) ? desc : "木有说明(っ °Д °;)っ",
                mystamp = MewTool.dom(`
                <button class="reaction-panel_stamp__8qpSD" title="${the_desc}">
                    <picture class="reaction-panel_image__2FjNq">
                        <source srcset="https://image.mew.fun/${hash}~tplv-c226mjqywu-size:96.image" type="image/png">
                        <img src="https://image.mew.fun/${hash}~tplv-c226mjqywu-size:96.image" alt="${the_desc}">
                    </picture>
                </button>`),
                send = (e) => {
                    fetch(`https://api.mew.fun/api/v1/topics/${topicid}/messages`, {
                        headers: {
                            Authorization: MewTool.getcookie("tomon_community_token"),
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            nonce: nonce_gen(18),
                            media: [id]
                        }),
                        method: "POST",
                    });
                };
            mystamp.addEventListener("click", send);
            mystamp.addEventListener('contextmenu', e => {
                e.preventDefault();
                MewTool.contextmenu(e, new Map([
                    ["发送", send],
                    ["查看完整图片", (e) => {
                        if (document.querySelector("#preview_stamp")) {
                            document.querySelector("#preview_stamp").src = `https://image.mew.fun/${hash}`;
                            document.querySelector("#preview_stamp").setAttribute("disapper-count", 5);
                            return;
                        };
                        let preview = MewTool.stdpage(`<div style="margin:20% auto;"><img id="preview_stamp" src="https://image.mew.fun/${hash}" disapper-count="5"/></div>`);
                        let timer_el = preview.querySelector("#preview_stamp");
                        preview.apply();
                        let timer = setInterval(() => {
                            let left_time = Number(timer_el.getAttribute("disapper-count"));
                            if (left_time == 0) {
                                preview.remove();
                                clearInterval(timer);
                            } else {
                                timer_el.setAttribute("disapper-count", left_time - 1);
                            };
                        }, 1000);
                    }]
                ]));
            });
            document.querySelector(".custom_stamps").append(mystamp);
        };
    },
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_custom_stamp));
        return class {
            flag_delete = false;
            constructor(self) {
                this.configs = self.configs;
                this.page = MewTool.stdpage(`<div class="title">在此处管理你的自定义表情：右键单击图片或图标激活菜单。更改将会自动保存。</div><ul class="stamp_manage" ></ul>`);
                let ul = this.page.querySelector("ul");
                let add = MewTool.dom(`<button class="reaction-panel_stamp__8qpSD add_stamp_card"><img src="https://image.mew.fun/57cd627312954aa7a9d98fa4b1d91148~tplv-c226mjqywu-size:96.image" /></button>`)
                add.addEventListener("contextmenu", (e) => {
                    e.preventDefault();
                    MewTool.contextmenu(e, new Map([
                        ["添加表情", async () => {
                            let url = prompt("填入想存为表情的Mew图片链接：");
                            if (!url) return false;
                            let [id, hash] = await MewTool.imgurl2id(url);
                            if (!id) return mew.notice("提示", "不正确的图片链接！");
                            let desc = prompt("添加关于该图片的说明：");
                            desc = (desc) ? desc : "";
                            let stamp = `${id}$${hash}$${desc}`;
                            this.page.querySelector(".add_stamp_card").before(this.rend_stamp_card(stamp));
                            this.save();
                        }],
                        ["从url批量导入表情", async (e) => {
                            let url = prompt("填入含有表情代码的链接：");
                            if (!url) return false;
                            await MewTool.fetchres(url).then(text => this.add_batch(text));
                        }],
                        ["批量导入本地表情", (e) => {
                            let input = MewTool.dom(`<input type="file" style="display:none" accept=".txt" \\>`);
                            input.addEventListener("change", (e) => {
                                let reader = new FileReader(); //读入文件
                                reader.onload = () => {
                                    this.add_batch(reader.result);
                                };
                                reader.readAsText(input.files[0]);
                                input.remove();
                            });
                            document.body.append(input);
                            input.click();
                        }],
                        ["导出表情", (e) => {
                            let fname = prompt("欲导出的文件名：", "我的Mew表情");
                            let a = document.createElement('a');
                            a.download = `${(fname) ? fname : "我的Mew表情"}.txt`;
                            let blob = new Blob([this.configs.get("stamps").value.join("\n")]);
                            a.href = URL.createObjectURL(blob);
                            a.click();
                            a = null;
                        }],
                        ["快速删除表情", (e) => {
                            if (!this.flag_delete) {
                                this.flag_delete = true;
                                mew.notice("提示", "已进入快速删除模式，单击表情图标来删除它。再次选择此选项离开快速删除模式。")
                                return this.flag_delete;
                            };
                            this.flag_delete = false;
                            mew.notice("提示", "已离开快速删除表情模式。")
                        }],
                        ["删除所有表情", (e) => {
                            this.configs.set("stamps");
                            let stamps = this.page.querySelectorAll(".stamp_card");
                            for (let e of stamps) e.remove();
                            mew.notice("提示", "已删除全部表情");
                        }]
                    ]));
                });
                let list = this.configs.get("stamps").value;
                for (let i in list) ul.append(this.rend_stamp_card(list[i]));
                ul.append(add);
            };
            rend_stamp_card(stamp) {
                let [id, hash, desc] = stamp.split("$");
                let card = MewTool.dom(`<button class="reaction-panel_stamp__8qpSD stamp_card" data="${stamp}" title="${(desc) ? desc : "木有说明(っ °Д °;)っ"}"><img src="https://image.mew.fun/${hash}~tplv-c226mjqywu-size:96.image" /></button>`);
                card.addEventListener("contextmenu", (e) => {
                    e.preventDefault();
                    MewTool.contextmenu(e, new Map([
                        ["置顶", (e) => {
                            this.page.querySelector(".stamp_manage").prepend(card);
                            this.save();
                        }],
                        ["上移", (e) => {
                            card.previousElementSibling && card.previousElementSibling.before(card);
                            this.save();
                        }],
                        ["下移", (e) => {
                            card.nextElementSibling && card.nextElementSibling.after(card);
                            this.save();
                        }],
                        ["编辑表情说明", (e) => {
                            let new_desc = prompt("添加关于该图片的说明：", desc);
                            if (!new_desc) return false;
                            card.setAttribute("data", `${id}$${hash}$${new_desc}`);
                            card.title = new_desc;
                            this.save();
                        }],
                        ["新标签页中打开图片", (e) => {
                            window.open(`https://image.mew.fun/${hash}`);
                        }],
                        ["删除", (e) => {
                            card.remove();
                            this.save();
                        }]
                    ]));
                });
                card.addEventListener("click", (e) => {
                    if (!this.flag_delete) return false;
                    card.remove();
                    this.save();
                })
                return card;
            };
            save() {
                let e_stamps = this.page.querySelectorAll(".stamp_card");
                let stamps = [];
                for (let e of e_stamps) stamps.push(e.getAttribute("data"));
                this.configs.set("stamps", stamps);

            };
            add_batch(stamps_text) {
                let arr = stamps_text.split(/\n|\r|\r\n/).filter(i => i);
                for (let i of arr) {
                    if (i.slice(0, 1) == "#") continue;
                    let [id, hash, desc] = i.split("$");
                    if (!/[0-9]{17,18}/.test(id)) continue;
                    let stamp = `${id}$${hash}$${(desc) ? desc : ""}`;
                    this.page.querySelector(".add_stamp_card").before(this.rend_stamp_card(stamp));
                    this.save();
                };
            }
        };
    }
}).addConf("stamps", {
    type: "button",
    desc: "打开表情管理页",
    default: [],
    click: function () {
        new this.func_once_result(this).page.apply();
    }
});
mew.load(plugin_custom_stamps);
mew.load(new MewPlugin("node_manage", {
    short_desc: "PC端据点管理",
    long_desc: "允许据点管理员在PC端管理据点。非管理员无法保存设置。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_node_manage));
        return new class {
            header = {
                Authorization: MewTool.getcookie("tomon_community_token"),
                "Content-type": "application/json; charset=utf-8"
            };
            api = "https://api.mew.fun/api/v1/nodes/";
            constructor(templates) {
                this.templates = templates;
            };
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
                    if (body.length == 2 && !["DELETE", "GET", "PUT", "PATCH"].includes(option.method)) {
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
                        if (option.alert) mew.notice(option.onsuccess, option.onsuccess);
                        resolve(json);
                        return;
                    };
                    if (option.alert) mew.notice(option.onfail, json.message);
                    reject(json);
                })
            };
            async page_render() {
                await fetch(this.api + window.location.pathname.slice(3), {
                    headers: this.header
                }).then(res => res.json()).then(async json => {
                    this.node_basic = json;
                    this.page = this.load_basic(json);
                    this.load_topics_switch();
                    this.load_member_switch();
                    this.load_joinreq_switch();
                    this.load_speakreq_switch();
                    await this.load_shelf();
                    this.page.apply();
                });
            };
            load_basic(json) {
                let manage = MewTool.template(this.templates[0], {
                    node_name: json.name,
                    node_super_modrator: json.objects.users[json.super_moderator].username,
                    node_id: json.node_name,
                    node_desc: (json.description) ? json.description : "",
                    node_icon: (json.icon) ? json.icon : "",
                    searchable: (json.searchable) ? "checked" : "",
                    node_tags: (json.tags.length >= 1) ? json.tags.join("\n") : "",
                    enable_speak_question: (json.enable_speak_question) ? "checked" : "",
                    disable_speak_question: (!json.enable_speak_question) ? "disabled" : "",
                    speak_question: (json.speak_questions.length > 0 && json.enable_speak_question) ? json.speak_questions[0].content : "",
                    enable_join_question: (json.enable_join_question) ? "checked" : "",
                    disable_join_question: (!json.enable_join_question) ? "disabled" : "",
                    join_question: (json.join_questions.length > 0 && json.enable_join_question) ? json.join_questions[0].content : "",
                });
                let s = MewTool.stdpage(manage);
                s.querySelector(`#node_basic`).parentNode.querySelector("button").addEventListener("click", async () => {
                    let inputs = s.querySelector(`#node_basic`).parentNode.querySelectorAll(".container__input");
                    let icon = null;
                    if (this.node_basic.icon) {
                        if (this.node_basic.icon != inputs[4].value) icon = inputs[4].value;
                    } else {
                        if (inputs[4].value) icon = inputs[4].value;
                    };
                    let new_data = {
                        name: (this.node_basic.name != inputs[0].value) ? inputs[0].value : null,
                        node_name: (this.node_basic.node_name != inputs[2].value) ? inputs[2].value : null,
                        description: (this.node_basic.description != inputs[3].value) ? inputs[3].value : null,
                        icon: icon,
                    };
                    await this.fetchdata(this.api + this.node_basic.id, {
                        data: new_data
                    }).then(json => this.node_basic = json);
                });
                s.querySelector(`#node_speech`).parentNode.querySelector("button").addEventListener("click", async () => {
                    let inputs = s.querySelector(`#node_speech`).parentNode.querySelectorAll(".container__input");
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
                });
                return s;
            };
            load_topics_switch() {
                let root = this.page.querySelector(`#node_topic`).parentNode;
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
            load_topics_tab1(json) {
                let content = this.page.querySelector(`#node_topic`).parentNode.querySelector(".content");
                if (json.topics == 0 | !json.topics) return content.append(this.load_textcard("没有话题或者无权限查看话题列表！"));
                for (let t of json.topics) {
                    let card = MewTool.dom(MewTool.template(this.templates[2], {
                        id: t.id,
                        title: t.name,
                        desc_text: (t.description) ? t.description : "",
                        desc_media: t.media.join("\n")
                    }));
                    card.querySelectorAll("button")[0].addEventListener("click", () => {
                        let del_confirm = confirm(`防手滑二次确认：真的要删除话题：${t.name} 吗？`);
                        if (!del_confirm) return false;
                        this.fetchdata(`https://api.mew.fun/api/v1/topics/${t.id}`, {
                            method: "DELETE",
                            onsuccess: "删除话题成功！",
                            onfail: "删除话题失败！"
                        });
                    });
                    card.querySelectorAll("button")[1].addEventListener("click", () => {
                        let inputs = this.page.querySelector(`#topic_list_${t.id}`).parentNode.querySelectorAll(".container__input");
                        let new_data = {
                            name: inputs[0].value,
                            description: (!t.description && inputs[1].value.length >= 1) ? inputs[1].value : null,
                            media: (t.media.join("\n") != inputs[2].value) ? inputs[2].value.split("\n").filter(i => i) : null,
                        };
                        this.fetchdata(`https://api.mew.fun/api/v1/topics/${t.id}`, {
                            data: new_data
                        });
                    });
                    content.append(card);
                };
            };
            load_topics_tab2(json) {
                let content = this.page.querySelector(`#node_topic`).parentNode.querySelector(".content");
                if (json.topics == 0 || !json.topics) return content.append(this.load_textcard("没有话题或者无权限查看话题列表！"));
                let btn = MewTool.dom(this.templates[4]);
                for (let t of json.topics) {
                    let topic = MewTool.dom(MewTool.template(this.templates[3], {
                        id: t.id,
                        title: t.name
                    }));
                    topic.querySelectorAll("button")[0].addEventListener("click", (e) => {
                        let root = e.target.parentNode.parentNode;
                        if (!root.previousSibling) return false;
                        if (!root.previousSibling.previousSibling) return content.prepend(topic);
                        root.previousSibling.previousSibling.after(topic);
                    });
                    topic.querySelectorAll("button")[1].addEventListener("click", (e) => {
                        let root = e.target.parentNode.parentNode;
                        if (!root.nextElementSibling.id) return false;
                        root.nextElementSibling.after(topic);
                    });
                    content.append(topic);
                };
                btn.addEventListener("click", () => {
                    let inputs = this.page.querySelector(`#node_topic`).parentNode.querySelectorAll(".input_container");
                    let positions = [];
                    for (let i = 0; i < inputs.length - 1; i++) {
                        positions.push({
                            id: inputs[i].id.slice(11),
                            position: i + 1,
                        });
                    };
                    this.fetchdata(`${this.api + json.id}/topics/position`, {
                        data: {
                            positions: positions
                        }
                    });
                });
                content.append(btn);
            };
            load_topics_tab3(json) {
                let content = this.page.querySelector(`#node_topic`).parentNode.querySelector(".content");
                let template = MewTool.dom(this.templates[5]);
                template.querySelector("button").addEventListener("click", () => {
                    if (this.node_basic.topics.length >= 10) {
                        let _confirm = confirm(`话题数量已经达到10个，确定继续添加话题？`);
                        if (!_confirm) return false;
                    };
                    let inputs = this.page.querySelector(`#node_topic`).parentNode.querySelectorAll(".container__input");
                    let new_data = {
                        name: (inputs[0].value) ? inputs[0].value : null,
                        description: (inputs[1].value) ? inputs[1].value : null,
                        media: (inputs[2].value) ? inputs[2].value.split("\n").filter(i => i) : null,
                    };
                    this.fetchdata(`${this.api + json.id}/topics`, {
                        method: "POST",
                        onsuccess: "话题创建成功！",
                        onfail: "话题创建失败！",
                        data: new_data
                    }).catch(err => err);
                });
                content.append(template);
            };
            load_member_switch() {
                let root = this.page.querySelector(`#node_member`).parentNode;
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
            };
            load_joinreq_switch() {
                let root = this.page.querySelector(`#node_join`).parentNode;
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
            };
            load_speakreq_switch() {
                let root = this.page.querySelector(`#node_speak`).parentNode;
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
            };
            async load_member_card(content, base_url, after, type) {
                let members = await this.fetchdata((after) ? `${base_url}&after=${after}` : base_url, {
                    alert: false,
                    method: "GET"
                }).catch(err => {
                    content.append(this.load_textcard("加载成员列表时发生错误：" + err.message));
                });
                if (!members) return false;
                if (members.entries.length == 0) return content.append(this.load_textcard("啥也没有(っ °Д °;)っ"));
                for (let user of members.entries) {
                    if (after) {
                        if (user.is_super_moderator || user.is_moderator) continue;
                    };
                    switch (type) {
                        case "ban":
                            content.append(await this.load_ban_card(members, user, this.templates[7]));
                            break;
                        case "req_pending_join":
                            content.append(this.load_req_pending_card(members, user, this.templates[8], "join"));
                            break;
                        case "req_pending_speak":
                            content.append(this.load_req_pending_card(members, user, this.templates[8], "speak"));
                            break;
                        case "req_approved":
                            content.append(this.load_req_approved_card(members, user, this.templates[9]));
                            break;
                        case "req_rejected_join":
                            content.append(this.load_req_rejected_card(members, user, this.templates[10], "join"));
                            break;
                        case "req_rejected_speak":
                            content.append(this.load_req_rejected_card(members, user, this.templates[10], "speak"));
                            break;
                        default:
                            content.append(this.load_member_normal_card(members, user, this.templates[6]));
                            break;
                    };
                };
                if (members.entries.length == 50) {
                    let loadmore = this.load_textcard("点击加载更多");
                    loadmore.style.cursor = "pointer";
                    loadmore.querySelector(".accordion__header").addEventListener("click", async () => {
                        await this.load_member_card(content, base_url, members.next_cursor);
                        loadmore.remove();
                    });
                    content.append(loadmore);
                };
            };
            load_member_normal_card(json, user, template) {
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    class: (user.is_super_moderator) ? "领主" : (user.is_moderator) ? "管理员" : "成员",
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    P_moderator: (user.is_moderator) ? "checked" : "",
                    P_thought: ([32, 32 + 16, 32 + 64, 16 + 32 + 64].includes(user.permissions_deny)) ? "" : "checked",
                    P_talk: ([16, 16 + 32, 16 + 64, 16 + 32 + 64].includes(user.permissions_deny)) ? "" : "checked",
                    P_comment: ([64, 64 + 32, 64 + 16, 16 + 32 + 64].includes(user.permissions_deny)) ? "" : "checked",
                }));
                card.querySelectorAll("button")[0].addEventListener("click", () => {
                    let _confirm = confirm(`确定将领主身份转移给 ${json.objects.users[user.user_id].name} 吗？你将不再拥有该据点和该据点的管理权限。`);
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
                    this.ban_someone(user.user_id, json.objects.users[user.user_id].name);
                });
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    let _confirm = confirm(`${json.objects.users[user.user_id].name} 将被移出据点，但可重新加入。确定将Ta移出据点吗？`);
                    if (!_confirm) return false;
                    this.fetchdata(`${this.api + user.node_id}/members/${user.user_id}`, {
                        method: "DELETE",
                        onsuccess: "移出据点操作成功！",
                        onfail: "移出据点操作失败！"
                    });
                });
                card.querySelectorAll("button")[3].addEventListener("click", () => {
                    let inputs = document.querySelector(`#member_${json.objects.users[user.user_id].username}`).parentNode.querySelectorAll("input.container__input");
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
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    type: type,
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
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
                        onsuccess: "成功通过该申请！",
                        onfail: "通过该申请失败！"
                    });
                });
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    this.fetchdata(`${this.api + user.node_id}/applications/${type}/${user.user_id}`, {
                        data: {
                            state: "rejected"
                        },
                        onsuccess: "成功拒绝该申请！",
                        onfail: "拒绝该申请失败！"
                    });
                });
                return card;
            };
            load_req_approved_card(json, user, template) {
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    date: new Date(user.applied_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    awnser: user.answers[0].content
                }));
                return card;
            };
            load_req_rejected_card(json, user, template, type) {
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    date: new Date(user.applied_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    awnser: user.answers[0].content
                }));
                card.querySelectorAll("button")[1].addEventListener("click", () => {
                    this.ban_someone(user.user_id, json.objects.users[user.user_id].name);
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
                let avatar_id = json.objects.users[user.user_id].avatar;
                let card = MewTool.dom(MewTool.template(template, {
                    username: json.objects.users[user.user_id].username,
                    name: json.objects.users[user.user_id].name,
                    avatar: (avatar_id) ? json.objects.media[avatar_id].url + "~tplv-c226mjqywu-size:96.image" : "/_next/static/images/default-avatar-1-d21d3e0c70ccc333b797212fed6be0c9.png",
                    date: new Date(user.banned_at).toLocaleString("chinese", {
                        hour12: false
                    }),
                    op_username: await fetch("https://api.mew.fun/api/v1/users/" + user.operator_id).then(res => res.json()).then(json => json.username),
                }));
                card.querySelectorAll("button")[2].addEventListener("click", () => {
                    let _confirm = confirm(`${json.objects.users[user.user_id].name} 将被移出黑名单，并可以重新加入据点。确定将Ta移出黑名单吗？`);
                    if (!_confirm) return false;
                    this.fetchdata(`${this.api + user.node_id}/bans/${user.user_id}`, {
                        method: "DELETE",
                        onsuccess: "移出黑名单成功！",
                        onfail: "移出黑名单失败！"
                    });
                });
                return card;
            };
            ban_someone(id, name) {
                let _confirm = confirm(`${name} 将被移出据点，且无法重新加入。确定将Ta加入黑名单吗？`);
                if (!_confirm) return false;
                this.fetchdata(`${this.api + this.node_basic.id}/bans/${id}`, {
                    method: "PUT",
                    onsuccess: "加入黑名单成功！",
                    onfail: "加入黑名单失败！"
                });
            };
            load_member_search(content, node_id, query, type) {
                query = (query) ? query : [];
                type = (type) ? type : null;
                let search = MewTool.dom(this.templates[11]);
                let input = search.querySelector(".accordion__content").querySelectorAll("input")[0];
                search.querySelector("button").addEventListener("click", async () => {
                    let params = [`keyword=${input.value}`];
                    for (let i of query) params.push(i);
                    content.innerHTML = "";
                    this.load_member_search(content, node_id, query);
                    await this.load_member_card(content, `${this.api + node_id}/members/search?${params.join("&")}`, null, type);
                });
                content.append(search);
            };
            load_textcard(text) {
                let card = MewTool.dom(MewTool.template(this.templates[1], {
                    text: text
                }));
                return card;
            };
            async load_shelf() {
                let content = this.page.querySelector("#node_library").parentNode.querySelector(".accordion__content");
                let template_addshelf = MewTool.dom(this.templates[14]);
                let lib = await this.fetchdata(`${this.api + this.node_basic.id}/libraries`, {
                    alert: false,
                    method: "GET"
                }).catch(err => {
                    content.append(this.load_textcard("加载书架列表时发生错误：" + err.message));
                });
                if (!lib) return false;
                for (let e of lib.entries) {
                    if (e.parent_id) {
                        let shelf_entry = this.load_shelf_entry(e, this.templates[13]);
                        content.querySelector(`#shelf_${e.parent_id}`).parentNode.querySelectorAll(".input_container")[1].append(shelf_entry);
                        continue;
                    };
                    let shelf = this.load_shelf_bookshelf(e, this.templates[12], this.templates[15]);
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
                let shelf_entry = MewTool.dom(MewTool.template(template_entry, {
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
                let shelf = MewTool.dom(MewTool.template(template_bookshelf, {
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
                let addentry = MewTool.dom(MewTool.template(template_addentry, {
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
        }(await Promise.all([
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@2582b68/template/node_manage.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_member_text_card.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@c882444/template/node_manage_topic_tab1.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_topic_tab2_card.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_topic_tab2_btn.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_topic_tab3.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@2582b68/template/node_manage_member_normal_card.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@2582b68/template/node_manage_member_ban_card.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@0f5e462/template/node_manage_req_pending_card.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@2582b68/template/node_manage_req_approved_card.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@2582b68/template/node_manage_req_rejected_card.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_member_search_card.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@4cbcef5/template/node_manage_shelf.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@c882444/template/node_manage_shelf_entry.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@c882444/template/node_manage_shelf_addshelf.html"),
            MewTool.fetchres("https://cdn.jsdelivr.net/gh/yige233/bettermew@c882444/template/node_manage_shelf_addentry.html")
        ]).catch(err => console.log(err)))
    }
}).addConf("btn", {
    type: "button",
    desc: "打开据点管理页",
    click: function () {
        this.func_once_result.page_render()
    }
}));
mew.load(new MewPlugin("darkmode", {
    short_desc: "深色模式",
    long_desc: "mew将根据浏览器偏好，在浏览器选择深色模式时自动切换为深色模式。",
    func_once: async function () {
        MewTool.loadcss(await MewTool.fetchres(resources.css_darkmode));
    },
}));
mew.load(new MewPlugin("msg_edit", {
    short_desc: "修改消息",
    long_desc: "右键已在聊天中发送的消息，对其撤回进行修改后再发送。仅可修改二分钟内发出的消息。",
    func_loop: function () {
        let nonce_gen = (len) => {
            let nonce = [];
            for (let i = 0; i < len; i++) {
                nonce.push(Math.floor(Math.random() * 10))
            };
            return nonce.join("");
        };
        if (document.querySelectorAll('div[class*="message-text_sent__"]').length == 0) return false;
        let messages = document.querySelectorAll('div[class*="message-text_sent__"]');
        for (let el of messages) {
            if (el.className.indexOf("mark_mewmsg_edit") != -1 || el.className.indexOf("message-text_bubble__") == -1) continue;
            el.parentNode.addEventListener("contextmenu", async e => {
                e.preventDefault();
                let message_id = MewTool.getreact(e.currentTarget).children[0].props.id;
                let message_content = MewTool.getreact(e.currentTarget.children[0]).children[1].props.children.props.children;
                let topicid = (document.querySelector("[class*='panel_list__']")) ?
                    document.querySelector("[class*='panel_list__']").querySelector("[class*='sidebar_selected__']").parentNode.getAttribute("data-id") :
                    (MewTool.getreact(document.querySelector("div[class*='message-container_widget__']")).children[0].props.children.props.topicId) ? MewTool.getreact(document.querySelector("div[class*='message-container_widget__']")).children[0].props.children.props.topicId : 0
                if (topicid == 0) return false;
                MewTool.contextmenu(e, new Map([
                    ["重新发送", async (e) => {
                        let message_info = await this.func_once_result(message_id, message_content);
                        if (!message_info.created_at || Math.floor(new Date() / 1000) - Math.floor(new Date(message_info.created_at) / 1000) >= 120) return mew.notice("提示", "该消息已发出超过2分钟！");
                        let new_content = prompt("编辑新的信息。旧的信息将会被撤回。", message_content);
                        if (new_content && new_content != message_content) {
                            this.func_once_result(message_id, null, "DELETE");
                            fetch(`https://api.mew.fun/api/v1/topics/${topicid}/messages`, {
                                headers: {
                                    Authorization: MewTool.getcookie("tomon_community_token"),
                                    "Content-type": "application/json",
                                },
                                body: JSON.stringify({
                                    nonce: nonce_gen(18),
                                    content: new_content
                                }),
                                method: "POST",
                            });
                        };
                    }]
                ]));
            });
            el.classList.add("mark_mewmsg_edit");
        };
    },
    func_once: function () {
        return async function (id, content, method) {
            let res = await fetch(`https://api.mew.fun/api/v1/messages/${id}`, {
                headers: {
                    Authorization: MewTool.getcookie("tomon_community_token"),
                    "Content-Type": "application/json; charset=utf-8"
                },
                method: (method) ? method : "PATCH",
                body: (content) ? JSON.stringify({
                    content: content
                }) : null
            });
            if (!method && res.ok) return await res.json();
            return {};
        };
    }
}));
mew.load(new MewPlugin("at", {
    short_desc: "@功能",
    long_desc: "在有人提及您的时候为您弹窗通知；点击用户名可快速复制用户昵称，并将光标置于消息编辑栏。@消息需要符合一定的格式。",
    func_once: async function () {
        mew.ws.on("message_create", (data) => {
            let author = data.objects.users[data.author_id].name,
                ats = Object.assign({}, this.configs.get("ats").value),
                keyword = [...this.configs.get("keywords").value],
                blocks = Object.assign({}, this.configs.get("ats").value),
                detected = false,
                msg = data.content;
            if (!msg) return false;
            for (let i of keyword) {
                let special = i.match(/[\$|\(|\)|\*|\+|\.|\[|\]|\?|\\|\^|\{|\}|\|]{1}/g);
                let user = ats["u" + data.author_id];
                if (special) for (let s of special) i = i.replace(s, "\\" + s);
                if (!new RegExp(`@${i}+[,|，|。|？|?|!|：|:|;|：|！|\\s]{1}`).test(msg) && !new RegExp(`@${i}$`).test(msg)) continue;
                detected = true;
                if (blocks["u" + data.author_id]) {
                    if (blocks["u" + data.author_id] - Math.floor(new Date() / 1000) > 0) return false;
                    delete blocks["u" + data.author_id];
                };
                if (user) {
                    user.push(Math.floor(new Date() / 1000));
                    if (user.length == 8) user.shift();
                    if (user.length == 7 && user[6] - user[0] <= 180) {
                        blocks["u" + data.author_id] = Math.floor(new Date() / 1000) + 900;
                        detected = false;
                    };
                } else {
                    ats["u" + data.author_id] = [Math.floor(new Date() / 1000)];
                };
                this.configs.set("ats", ats);
                this.configs.set("block", blocks);
                if (detected) break;

            };
            if (!detected) return false;
            if (data.node_id) {
                for (let i of this.func_once_result.entries) {
                    if (i.id == data.node_id) {
                        for (let x of i.topics) {
                            if (x.id == data.topic_id) return mew.notice(`${author} 在 ${i.name} 的 ${x.name} @了你！`, msg, () => {
                                window.open(`https://mew.fun/n/${i.node_name}?topicId=${x.id}`);
                            });
                        };
                    };
                };
            };
            mew.notice(`${author} 在私信中@了你！`, msg);
        });
        return await fetch(`https://api.mew.fun/api/v1/users/@me/mynodes`, {
            headers: {
                Authorization: MewTool.getcookie("tomon_community_token")
            }
        }).then(res => res.json());
    },
    func_loop: function () {
        let users = Array.from(document.querySelectorAll("[class*='message-text_name__']")).concat(Array.from(document.querySelectorAll("[class*='message-image_name__']")));
        for (let user of users) {
            user.style = "cursor:pointer";
            if (user.className.indexOf("called") == -1) {
                user.addEventListener("click", async (e) => {
                    if (!navigator.clipboard) return mew.notice("提示", "您的浏览器不支持剪贴板API！");
                    await navigator.clipboard.writeText("@" + e.target.innerText).catch(() => { mew.notice("提示", "可能没有权限写入剪贴板！") });
                    document.querySelectorAll("[class^='message-container_textarea-bar__']")[0].focus();
                });
                user.classList.add("called");
            };
        };
    }
}).addConf("keywords", {
    type: "text",
    desc: "可以在下方的文本框中添加能触发@提醒的关键词，每行一个。",
    default: [],
    get: function () {
        return this.configs.get("keywords").value.join("\n");
    },
    set: function (e) {
        return e.target.value.split("\n").filter(i => i);
    }
}).addConf("ats", {
    default: {}
}).addConf("block", {
    default: {}
}));
mew.load(new MewPlugin("tool_avatar", {
    hide: true,
    always: true
}).addConf("btn", {
    type: "button",
    desc: "通过Mew图片链接直接设置头像",
    short_desc: "输入图片url",
    click: async function () {
        let url = prompt("输入Mew图片url。注意：请不要使用过于花里胡哨的gif，这可能会招致反感。");
        if (!url) return false;
        let [id] = await MewTool.imgurl2id(url);
        if (!id) return mew.notice("提示", "不正确的图片链接！");
        await fetch(`https://api.mew.fun/api/v1/users/@me`, {
            headers: {
                Authorization: MewTool.getcookie("tomon_community_token"),
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                avatar: id.match(/[0-9]{18}?/g)[0],
            }),
            method: "PATCH"
        }).then(async res => {
            let json = await res.json();
            mew.notice("提示", `新头像id为：${json.avatar}，刷新网页以查看新头像。`);
        }).catch(err => {
            mew.notice("提示", "新头像设置失败！");
            console.warn(err)
        });
    }
}));
mew.load(new MewPlugin("custom_css", {
    short_desc: "自定义css",
    long_desc: "加载自定义css样式。",
    func_once: function () {
        MewTool.loadcss(this.configs.get("custom_css").value);
    }
}).addConf("custom_css", {
    type: "text",
    desc: "填入自定义css。",
    get: function () {
        return this.configs.get("custom_css").value;
    },
    set: function (e) {
        return e.target.value;
    }
}));
mew.load(new MewPlugin("fix_img_menu", {
    long_desc: "点击打开原图时，部分浏览器有没法右键另存为的问题。该插件为原图增加了右键菜单，提供新标签页中打开图片的选项。",
    short_desc: "修复保存不了图片",
    func_loop: function () {
        for (let el of document.querySelectorAll(".pswp__zoom-wrap")) {
            if (el.className.indexOf("pswp__zoom-wrap-marked") != -1) return false;
            el.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                let url = el.querySelector("img").src;
                let options = new Map([
                    ["新标签页中打开图片", (e) => {
                        window.open(url);
                    }],
                    ["保存图片", async () => {
                        let mime_type_ext = new Map([
                            ["image/gif", "gif"],
                            ["image/x-icon", "ico"],
                            ["image/svg+xml", "svg"],
                            ["image/jpeg", "jpg"],
                            ["image/tiff", "tiff"],
                            ["image/png", "png"],
                            ["image/webp", "webp"]
                        ]);
                        let blob = await fetch(url).then(res => res.blob());
                        let a = document.createElement('a');
                        let fname = prompt("将图片保存为：", `${url.match(/[0-9a-f]{32}?/g)[0]}.${mime_type_ext.get(blob.type) || blob.type}`);
                        if (!fname) return false;
                        a.download = fname;
                        a.href = URL.createObjectURL(blob);
                        a.click();
                        a = null;
                    }],
                    ["复制图片到剪贴板", async () => {
                        if (!navigator.clipboard) return mew.notice("提示", "您的浏览器不支持剪贴板API！");
                        let blob = await fetch(url + "~tplv-c226mjqywu-size:999999.png").then(res => res.blob());
                        await navigator.clipboard.write([
                            new ClipboardItem({
                                [blob.type]: blob
                            })
                        ]).catch(() => { mew.notice("提示", "可能没有权限写入剪贴板！") });
                    }],
                    ["复制图片链接", async () => {
                        if (!navigator.clipboard) return mew.notice("提示", "您的浏览器不支持剪贴板API！");
                        await navigator.clipboard.writeText(url).catch(() => { mew.notice("提示", "可能没有权限写入剪贴板！") });
                    }]
                ]);
                mew.isActive(plugin_custom_stamps.id) && options.set("保存为自定义表情", async () => {
                    let [id, hash] = await MewTool.imgurl2id(url);
                    let desc = prompt("添加关于该图片的说明：");
                    desc = (desc) ? desc : "";
                    let stamps = plugin_custom_stamps.configs.get("stamps").value;
                    stamps.push(`${id}$${hash}$${desc}`);
                    plugin_custom_stamps.configs.set("stamps", stamps);
                });
                MewTool.contextmenu(e, options);
            });
            el.classList.add("pswp__zoom-wrap-marked");
        }
    }
}));