!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t),
        i.loaded = !0,
        i.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "",
    t(0)
}([function(e, t, n) {
    e.exports = n(4)
}
, , , , function(e, t, n) {
    "use strict";
    !function(e, t) {
        function r() {
            m.isGrowthWap && (window.group_id && h.extend(!0, m, {
                id: window.group_id,
                type: "detail",
                isNewVideo: window.isNewVideoPage
            }),
            window.ttGTM && ttGTM.ready(function() {
                o.getGTMValue("bannerTitle") && y.find(".banner-label .tb").text(o.getGTMValue("bannerTitle"))
            }))
        }
        function i() {
            h("head").append("<style>" + b.confusedSTYLE + "</style>"),
            y.find(".banner-label .tb").text(m.title),
            y.find(".banner-label .title-sub").text(m.subTitle),
            y.find(".open").text(m.btnText),
            h("body").prepend(y),
            o.initScrollEvents(y, b.map),
            "function" == typeof m.callback && m.callback.call({
                _el: y
            })
        }
        var o = n(5)
          , a = n(43)
          , s = n(44)
          , u = n(45)
          , l = n(47)
          , c = n(67)
          , f = n(71)
          , p = n(72)
          , d = n(73)
          , h = n(74);
        n(75);
        var m = {
            show: !0,
            pos: "top",
            bannerCls: "",
            title: "今日头条",
            subTitle: "7亿用户的选择",
            btnText: "立即打开",
            isGrowthWap: !1,
            callback: function() {},
            addScheme: !1
        };
        window.ttBannerConf && h.extend(!0, m, window.ttBannerConf);
        var g = l(m)
          , v = ["pageletBanner", "banner-" + m.pos, "banner-pannel", "pannel-" + m.pos, "show-" + m.pos + "-pannel", "hide-" + m.pos + "-pannel"]
          , b = o.confused(g, u[0][1], v)
          , y = h(b.confusedTMPL);
        r();
        var x = {
            init: function() {
                s.browser.toutiao || "topbuzz_video_cn" !== a.request("app") && (i(),
                y.on("click", ".close", function(e) {
                    x.onCloseClick(e)
                }),
                window.ttGTM && ttGTM.ready(function() {
                    o.getGTMValue("hide" + a.capitalizeFirstLetter(m.pos) + "Banner") && y.hide(),
                    o.getGTMValue("bannerSubTitle")
                }),
                x.downloadHook(m))
            },
            onCloseClick: function(e) {
                e.preventDefault(),
                y.remove(),
                a.cookie(m.pos + "-banner-hide-status", !0, {
                    path: "/"
                })
            },
            downloadHook: function(e) {
                y.on("click", ".download", function(t) {
                    t.preventDefault(),
                    p(e)
                })
            }
        };
        m.show && !a.cookie(m.pos + "-banner-hide-status") && x.init(),
        m.addScheme && d(),
        e.ttGrowth = {
            ttWap2App: f,
            ttAppDownload: c,
            ttActivate: p
        }
    }(window, document)
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i() {
        var e = navigator.userAgent.toLowerCase()
          , t = w.parseQuery("debug");
        return "weixin" == t || "micromessenger" == e.match(/MicroMessenger/i)
    }
    function o() {
        if (!i())
            return !1;
        var e = w.parseQuery("isappinstalled") - 0
          , t = w.parseQuery("wxshare_count");
        return !(!e || t && !(t < 2))
    }
    function a(e, t) {
        if (t = "undefined" != typeof t && t,
        window.ttGTM) {
            var n = null;
            return n = window.isListPage ? ttGTM.list : i() ? ttGTM.weixin : ttGTM.detail,
            n = n || {},
            e in n ? n[e] : t
        }
        return t
    }
    function s(e) {
        var t, n = {
            joke_essay: 5,
            news_article: 14,
            news_article_social: 20,
            joke_essay_social: 21,
            saying_essay_social: 22,
            explore_article: 25,
            joke_zone: 27,
            topbuzz_video_cn: 116
        }, r = e.app || w.parseQuery("app") || "news_article", i = 1;
        return _.os.android && (i = 3),
        r.length ? (t = n[r] || n.news_article,
        21 != t && 24 != t || (t = 5),
        22 == t && (t = 9),
        20 == t && 3 == i && (t = 14),
        "snssdk" + t + i + "://") : ""
    }
    function u(e) {
        function t(e, t) {
            var n = null;
            return t && t.isNewVideo && (n = 64),
            n && (e += "&flags=" + n),
            e
        }
        var n = "click_" + (i() ? "weixin" : "wap") + "_sdk"
          , r = s(e)
          , o = e.type || "home"
          , a = e.group_id
          , u = e.item_id
          , l = "";
        switch (o) {
        case "detail":
            l = r + "detail?groupid=" + a + "&gd_label=" + n,
            l = t(l, e),
            u && (l += "&aggr_type=2&item_id=" + u);
            break;
        default:
            l = r + "home/news?gd_ext_json=" + (0,
            x.default)({
                event: "home",
                label: n
            })
        }
        return l
    }
    function l(e, t, n) {
        var r = function(e) {
            for (var t = [], n = 0; n < e; n++) {
                var r = String.fromCharCode(Math.floor(26 * Math.random()) + 65)
                  , i = Math.ceil(10 * Math.random());
                i % 2 === 1 && (r = r.toLowerCase()),
                t.push(r)
            }
            return t.join("")
        }
          , i = function() {
            return Math.ceil(15 * Math.random())
        }
          , o = {}
          , a = e
          , s = t;
        return n.forEach(function(e) {
            var t = r(i()) + r(i());
            a = a.replace(new RegExp(e,"ig"), t),
            s = s.replace(new RegExp(e,"ig"), t),
            o[e] = t
        }),
        {
            confusedTMPL: a,
            confusedSTYLE: s,
            map: o
        }
    }
    function c(e, t) {
        function n(e) {
            var n = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            a && n > i && n > o ? (a = !1,
            r.find("." + t["show-top-pannel"]).length && r.find("." + t["show-top-pannel"]).removeClass(t["show-top-pannel"]).addClass(t["hide-top-pannel"])) : !a && n <= o && (a = !0,
            r.find("." + t["hide-top-pannel"]).length && r.find("." + t["hide-top-pannel"]).removeClass(t["hide-top-pannel"]).addClass(t["show-top-pannel"])),
            o = n
        }
        var r = e
          , i = 100 * (window.responsive || {
            dpr: 1
        }).dpr
          , o = 0
          , a = !0;
        $(window).on("scroll", n)
    }
    function f(e) {
        setTimeout(function() {
            location.href = e
        }, 100)
    }
    function p(e) {
        return w.cookie(e) || w.parseQuery(e) || ""
    }
    function d() {
        return {
            __type__: "app_track",
            resolution: window.screen.availWidth * window.devicePixelRatio + "*" + window.screen.availHeight * window.devicePixelRatio,
            webid: w.cookie("tt_webid") || "",
            utm_source: p("utm_source")
        }
    }
    function h(e) {
        var t = "sslocal://"
          , n = e.type || "home"
          , r = e.group_id
          , i = "";
        switch (n) {
        case "detail":
            i = t + "detail?groupid=" + r;
            break;
        case "comment":
            i = t + "detail?groupid=" + r + "&showcomment=1";
            break;
        case "mediaProfile":
            i = t + "media_account?media_id=" + r;
            break;
        case "home":
            i = t + "home/news"
        }
        return i
    }
    function m(e, t) {
        for (var n = e.substring(e.indexOf("?") + 1, e.length).split("&"), r = {}, i = 0, o = n.length; i < o; i++) {
            var a = n[i].split("=");
            r[a[0]] = decodeURIComponent(a[1])
        }
        return t ? r[t] : r
    }
    function g(e, t) {
        if (!t)
            return e;
        var n, r = (0,
        b.default)(t).reduce(function(e, n) {
            return e = e + (e ? "&" : "") + n + "=" + encodeURIComponent(t[n])
        }, ""), i = document.createElement("a");
        return i.href = e,
        n = i.search ? i.search + "&" + r : "?" + r,
        i.protocol + "//" + i.host + i.pathname + n + i.hash
    }
    var v = n(6)
      , b = r(v)
      , y = n(41)
      , x = r(y)
      , w = n(43)
      , _ = n(44);
    e.exports = {
        isWeixin: i,
        isAppInstalled: o,
        getGTMValue: a,
        getScheme: s,
        getNativeLink: u,
        confused: l,
        initScrollEvents: c,
        gotoSurlDownload: f,
        getUTMValue: p,
        getAppTrackData: d,
        getOpenUrl: h,
        parseQuery: m,
        appendQuery: g
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(7),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(8),
    e.exports = n(28).Object.keys
}
, function(e, t, n) {
    var r = n(9)
      , i = n(11);
    n(26)("keys", function() {
        return function(e) {
            return i(r(e))
        }
    })
}
, function(e, t, n) {
    var r = n(10);
    e.exports = function(e) {
        return Object(r(e))
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t, n) {
    var r = n(12)
      , i = n(25);
    e.exports = Object.keys || function(e) {
        return r(e, i)
    }
}
, function(e, t, n) {
    var r = n(13)
      , i = n(14)
      , o = n(17)(!1)
      , a = n(21)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = i(e), u = 0, l = [];
        for (n in s)
            n != a && r(s, n) && l.push(n);
        for (; t.length > u; )
            r(s, n = t[u++]) && (~o(l, n) || l.push(n));
        return l
    }
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t, n) {
    var r = n(15)
      , i = n(10);
    e.exports = function(e) {
        return r(i(e))
    }
}
, function(e, t, n) {
    var r = n(16);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t, n) {
    var r = n(14)
      , i = n(18)
      , o = n(20);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, u = r(t), l = i(u.length), c = o(a, l);
            if (e && n != n) {
                for (; l > c; )
                    if (s = u[c++],
                    s != s)
                        return !0
            } else
                for (; l > c; c++)
                    if ((e || c in u) && u[c] === n)
                        return e || c || 0;
            return !e && -1
        }
    }
}
, function(e, t, n) {
    var r = n(19)
      , i = Math.min;
    e.exports = function(e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}
, function(e, t, n) {
    var r = n(19)
      , i = Math.max
      , o = Math.min;
    e.exports = function(e, t) {
        return e = r(e),
        e < 0 ? i(e + t, 0) : o(e, t)
    }
}
, function(e, t, n) {
    var r = n(22)("keys")
      , i = n(24);
    e.exports = function(e) {
        return r[e] || (r[e] = i(e))
    }
}
, function(e, t, n) {
    var r = n(23)
      , i = "__core-js_shared__"
      , o = r[i] || (r[i] = {});
    e.exports = function(e) {
        return o[e] || (o[e] = {})
    }
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t) {
    var n = 0
      , r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t, n) {
    var r = n(27)
      , i = n(28)
      , o = n(37);
    e.exports = function(e, t) {
        var n = (i.Object || {})[e] || Object[e]
          , a = {};
        a[e] = t(n),
        r(r.S + r.F * o(function() {
            n(1)
        }), "Object", a)
    }
}
, function(e, t, n) {
    var r = n(23)
      , i = n(28)
      , o = n(29)
      , a = n(31)
      , s = "prototype"
      , u = function(e, t, n) {
        var l, c, f, p = e & u.F, d = e & u.G, h = e & u.S, m = e & u.P, g = e & u.B, v = e & u.W, b = d ? i : i[t] || (i[t] = {}), y = b[s], x = d ? r : h ? r[t] : (r[t] || {})[s];
        d && (n = t);
        for (l in n)
            c = !p && x && void 0 !== x[l],
            c && l in b || (f = c ? x[l] : n[l],
            b[l] = d && "function" != typeof x[l] ? n[l] : g && c ? o(f, r) : v && x[l] == f ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t,n)
                        }
                        return new e(t,n,r)
                    }
                    return e.apply(this, arguments)
                };
                return t[s] = e[s],
                t
            }(f) : m && "function" == typeof f ? o(Function.call, f) : f,
            m && ((b.virtual || (b.virtual = {}))[l] = f,
            e & u.R && y && !y[l] && a(y, l, f)))
    };
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    e.exports = u
}
, function(e, t) {
    var n = e.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t, n) {
    var r = n(30);
    e.exports = function(e, t, n) {
        if (r(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, i) {
                return e.call(t, n, r, i)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, n) {
    var r = n(32)
      , i = n(40);
    e.exports = n(36) ? function(e, t, n) {
        return r.f(e, t, i(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var r = n(33)
      , i = n(35)
      , o = n(39)
      , a = Object.defineProperty;
    t.f = n(36) ? Object.defineProperty : function(e, t, n) {
        if (r(e),
        t = o(t, !0),
        r(n),
        i)
            try {
                return a(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    var r = n(34);
    e.exports = function(e) {
        if (!r(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, n) {
    e.exports = !n(36) && !n(37)(function() {
        return 7 != Object.defineProperty(n(38)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t, n) {
    e.exports = !n(37)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, n) {
    var r = n(34)
      , i = n(23).document
      , o = r(i) && r(i.createElement);
    e.exports = function(e) {
        return o ? i.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(34);
    e.exports = function(e, t) {
        if (!r(e))
            return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
            return i;
        if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e)))
            return i;
        if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
            return i;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(42),
        __esModule: !0
    }
}
, function(e, t, n) {
    var r = n(28)
      , i = r.JSON || (r.JSON = {
        stringify: JSON.stringify
    });
    e.exports = function(e) {
        return i.stringify.apply(i, arguments)
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e) {
        for (var t = location.search, n = t.substring(t.indexOf("?") + 1, t.length).split("&"), r = {}, i = 0, o = n.length; i < o; i++) {
            var a = n[i];
            a && (r[a.substring(0, a.indexOf("=")).toLowerCase()] = a.substring(a.indexOf("=") + 1, a.length))
        }
        var s = r[e.toLowerCase()];
        return s ? s.trim() : ""
    }
    function o(e) {
        return (0,
        c.default)(e).map(function(t) {
            return [t, e[t]].join("=")
        }).join("&")
    }
    function a(e) {
        if (!e)
            return e;
        var e = e.toString();
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function s(e, t) {
        var n, r;
        return t ? (r = document.createElement("a"),
        r.href = e,
        n = r.search ? r.search + "&" + t : "?" + t,
        r.protocol + "//" + r.host + r.pathname + n + r.hash) : e
    }
    function u(e) {
        for (var t = location.search, n = t.substring(1).split("&"), r = {}, i = 0, o = n.length; i < o; i++) {
            var a = n[i];
            a && (r[a.substring(0, a.indexOf("=")).toLowerCase()] = a.substring(a.indexOf("=") + 1, a.length))
        }
        if (!e)
            return r;
        var s = r[e.toLowerCase()];
        return s ? s.trim() : ""
    }
    var l = n(6)
      , c = r(l)
      , f = function e(t, n, r) {
        if ("undefined" == typeof n) {
            var i = null;
            if (document.cookie && "" != document.cookie)
                for (var o = document.cookie.split(";"), a = 0; a < o.length; a++) {
                    var e = (window.jQuery || window.Zepto).trim(o[a]);
                    if (e.substring(0, t.length + 1) == t + "=") {
                        i = decodeURIComponent(e.substring(t.length + 1));
                        break
                    }
                }
            return i
        }
        r = r || {},
        null === n && (n = "",
        r.expires = -1);
        var s = "";
        if (r.expires && ("number" == typeof r.expires || r.expires.toUTCString)) {
            var u;
            "number" == typeof r.expires ? (u = new Date,
            u.setTime(u.getTime() + r.expires)) : u = r.expires,
            s = "; expires=" + u.toUTCString()
        }
        var l = r.path ? "; path=" + r.path : ""
          , c = r.domain ? "; domain=" + r.domain : ""
          , f = r.secure ? "; secure" : "";
        document.cookie = [t, "=", encodeURIComponent(n), s, l, c, f].join("")
    }
      , p = {
        vendor: function() {
            for (var e = ["O", "ms", "Moz", "Khtml", "Webkit", "webkit", ""], t = document.createElement("div"), n = e.length; n--; ) {
                var r = e[n]
                  , i = r ? r + "Transform" : "transform";
                if (i in t.style)
                    return r
            }
            return null
        },
        prefix: function(e, t) {
            if (null !== p.vendor()) {
                var n = p.vendor() ? "-" + p.vendor().toLowerCase() + "-" : ""
                  , r = p.vendor() || "";
                if (t) {
                    var i = e.replace(/([A-Z])/g, function(e, t) {
                        return "-" + e.toLowerCase()
                    });
                    return n + i
                }
                var o = "" !== p.vendor() ? e.charAt(0).toUpperCase() + e.substr(1) : e
                  , a = o.replace(/(-[a-z])/g, function(e, t) {
                    return e.charAt(1).toUpperCase()
                });
                return r + a
            }
        },
        canRun2d: function() {
            return null !== p.vendor()
        },
        canRun3d: function() {
            var e = document.createElement("div");
            if (!canRun2d() || !window.getComputedStyle)
                return !1;
            var t = p.prefix("transform");
            document.body.appendChild(e),
            e.style[t] = "translate3d(1px,1px,1px)";
            var n = window.getComputedStyle(e)[t] || "";
            return document.body.removeChild(e),
            !!/^matrix3d\((.*)\)$/.exec(n)
        },
        canRunCanvas: function() {
            var e;
            try {
                return e = document.createElement("canvas"),
                e.getContext("2d"),
                !0
            } catch (e) {
                return !1
            }
        },
        canRunWebgl: function() {
            var e, t, n;
            try {
                return e = document.createElement("canvas"),
                t = e.getContext("webgl") || e.getContext("experimental-webgl"),
                n = t.getSupportedExtensions(),
                !0
            } catch (e) {
                return !1
            }
        },
        canUsePageVisibility: function() {
            return null !== p.vendor() && void 0 !== document[p.prefix("hidden")]
        }
    }
      , d = function() {
        return p.canUsePageVisibility() ? document[p.prefix("hidden")] ? "hidden" : "visible" : "unknown"
    };
    e.exports = {
        cookie: f,
        support: p,
        pageVisible: d,
        parseQuery: i,
        toQuery: o,
        capitalizeFirstLetter: a,
        appendQuery: s,
        request: u
    }
}
, function(e, t) {
    "use strict";
    var n = navigator.userAgent
      , r = navigator.platform
      , i = {}
      , o = {}
      , a = n.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
      , s = n.match(/(Android);?[\s\/]+([\d.]+)?/)
      , u = !!n.match(/\(Macintosh\; Intel /)
      , l = n.match(/(iPad).*OS\s([\d_]+)/)
      , c = n.match(/(iPod)(.*OS\s([\d_]+))?/)
      , f = !l && n.match(/(iPhone\sOS)\s([\d_]+)/)
      , p = n.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
      , d = /Win\d{2}|Windows/.test(r)
      , h = n.match(/Windows Phone ([\d.]+)/)
      , m = p && n.match(/TouchPad/)
      , g = n.match(/Kindle\/([\d.]+)/)
      , v = n.match(/Silk\/([\d._]+)/)
      , b = n.match(/(BlackBerry).*Version\/([\d.]+)/)
      , y = n.match(/(BB10).*Version\/([\d.]+)/)
      , x = n.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
      , w = n.match(/PlayBook/)
      , _ = n.match(/Chrome\/([\d.]+)/) || n.match(/CriOS\/([\d.]+)/)
      , k = n.match(/Firefox\/([\d.]+)/)
      , E = n.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/)
      , T = n.match(/MSIE\s([\d.]+)/) || n.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
      , M = !_ && n.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
      , S = M || n.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    (o.webkit = !!a) && (o.version = a[1]),
    s && (i.android = !0,
    i.version = s[2]),
    f && !c && (i.ios = i.iphone = !0,
    i.version = f[2].replace(/_/g, ".")),
    l && (i.ios = i.ipad = !0,
    i.version = l[2].replace(/_/g, ".")),
    c && (i.ios = i.ipod = !0,
    i.version = c[3] ? c[3].replace(/_/g, ".") : null),
    h && (i.wp = !0,
    i.version = h[1]),
    p && (i.webos = !0,
    i.version = p[2]),
    m && (i.touchpad = !0),
    b && (i.blackberry = !0,
    i.version = b[2]),
    y && (i.bb10 = !0,
    i.version = y[2]),
    x && (i.rimtabletos = !0,
    i.version = x[2]),
    w && (o.playbook = !0),
    g && (i.kindle = !0,
    i.version = g[1]),
    v && (o.silk = !0,
    o.version = v[1]),
    !v && i.android && n.match(/Kindle Fire/) && (o.silk = !0),
    _ && (o.chrome = !0,
    o.version = _[1]),
    k && (o.firefox = !0,
    o.version = k[1]),
    E && (i.firefoxos = !0,
    i.version = E[1]),
    T && (o.ie = !0,
    o.version = T[1]),
    S && (u || i.ios || d) && (o.safari = !0,
    i.ios || (o.version = S[1])),
    M && (o.webview = !0),
    i.version = parseFloat(i.version),
    o.ucbrowser = !!n.match(/ucbrowser/gi),
    o.toutiao = "http://nativeapp.toutiao.com" == document.referrer || /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(n),
    o.toutiaoSDK = /(ArticleStreamSdk)( |\/)(\d+)/i.test(n),
    o.qqbrowser = !!n.match(/qqbrowser/gi),
    i.tablet = !!(l || w || s && !n.match(/Mobile/) || k && n.match(/Tablet/) || T && !n.match(/Phone/) && n.match(/Touch/)),
    i.phone = !(i.tablet || i.ipod || !(s || f || p || b || y || _ && n.match(/Android/) || _ && n.match(/CriOS\/([\d.]+)/) || k && n.match(/Mobile/) || T && n.match(/Touch/))),
    e.exports = {
        os: i,
        browser: o
    }
}
, function(e, t, n) {
    t = e.exports = n(46)(),
    t.push([e.id, 'a,blockquote,body,button,code,dd,div,dl,dt,em,fieldset,form,h1,h2,h3,h4,h5,h6,html,iframe,img,input,label,li,object,ol,p,q,small,span,strong,table,tbody,td,th,tr,ul{margin:0;padding:0;border:0}#pageletBanner{font-family:STHeiti,Microsoft YaHei,Helvetica,Arial,sans-serif;-webkit-text-size-adjust:none;word-break:break-word;width:100%;height:50px;z-index:5000}[data-dpr="2"] #pageletBanner{height:100px}[data-dpr="3"] #pageletBanner{height:150px}#pageletBanner.banner-top{position:relative}#pageletBanner.banner-bottom{position:fixed;bottom:0}#pageletBanner .banner-pannel{position:fixed;width:100%;height:50px;background:rgba(0,0,0,.7);background-repeat:no-repeat;background-position:bottom;background-size:100% 100%;color:#fff}[data-dpr="2"] #pageletBanner .banner-pannel{height:100px}[data-dpr="3"] #pageletBanner .banner-pannel{height:150px}#pageletBanner .pannel-top{top:0}#pageletBanner .pannel-bottom{bottom:0}#pageletBanner .show-top-pannel{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:all .5s cubic-bezier(.19,1,.22,1);transition:all .5s cubic-bezier(.19,1,.22,1)}#pageletBanner .hide-top-pannel{-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:all .3s cubic-bezier(.55,.055,.675,.19);transition:all .3s cubic-bezier(.55,.055,.675,.19)}#pageletBanner .banner-label,#pageletBanner .close,#pageletBanner .logo,#pageletBanner .open{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}#pageletBanner .logo{height:30px;width:30px;left:15px;background:url(//s3a.pstatp.com/resource/growth/mobile_detail/static/image/banner_toutiao_icon_6814ad9.png) no-repeat;overflow:hidden;background-size:30px}[data-dpr="2"] #pageletBanner .logo{height:60px}[data-dpr="3"] #pageletBanner .logo{height:90px}[data-dpr="2"] #pageletBanner .logo{width:60px}[data-dpr="3"] #pageletBanner .logo{width:90px}[data-dpr="2"] #pageletBanner .logo{left:30px}[data-dpr="3"] #pageletBanner .logo{left:45px}[data-dpr="2"] #pageletBanner .logo{background-size:60px}[data-dpr="3"] #pageletBanner .logo{background-size:90px}#pageletBanner .logo .mask{height:20px;background:hsla(0,0%,100%,.6);width:0;margin-top:10px;margin-left:10px;-webkit-animation-delay:3s;-webkit-box-shadow:0 0 20px 4px #fff;-webkit-transform:rotate(15deg);-webkit-animation:ani-mask 1s;-webkit-animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite}[data-dpr="2"] #pageletBanner .logo .mask{height:40px}[data-dpr="3"] #pageletBanner .logo .mask{height:60px}[data-dpr="2"] #pageletBanner .logo .mask{margin-top:20px}[data-dpr="3"] #pageletBanner .logo .mask{margin-top:30px}[data-dpr="2"] #pageletBanner .logo .mask{margin-left:20px}[data-dpr="3"] #pageletBanner .logo .mask{margin-left:30px}.mask{display:none}#pageletBanner .banner-label{left:50px}[data-dpr="2"] #pageletBanner .banner-label{left:100px}[data-dpr="3"] #pageletBanner .banner-label{left:150px}#pageletBanner .banner-label p{color:#fff;font-size:12px;line-height:15px}[data-dpr="2"] #pageletBanner .banner-label p{font-size:24px}[data-dpr="3"] #pageletBanner .banner-label p{font-size:36px}[data-dpr="2"] #pageletBanner .banner-label p{line-height:30px}[data-dpr="3"] #pageletBanner .banner-label p{line-height:45px}#pageletBanner .banner-label .tb{font-size:15px}[data-dpr="2"] #pageletBanner .banner-label .tb{font-size:30px}[data-dpr="3"] #pageletBanner .banner-label .tb{font-size:45px}#pageletBanner .close{height:40px;width:20px;padding:5px;position:absolute;right:0;background:url(//s3a.pstatp.com/resource/growth/mobile_detail/static/image/banner_ic_close_6951b35.png) no-repeat 50%;background-size:14px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}[data-dpr="2"] #pageletBanner .close{height:80px}[data-dpr="3"] #pageletBanner .close{height:120px}[data-dpr="2"] #pageletBanner .close{width:40px}[data-dpr="3"] #pageletBanner .close{width:60px}[data-dpr="2"] #pageletBanner .close{padding:10px}[data-dpr="3"] #pageletBanner .close{padding:15px}[data-dpr="2"] #pageletBanner .close{background-size:28px}[data-dpr="3"] #pageletBanner .close{background-size:42px}#pageletBanner .open{right:40px;width:60px;font-size:13px;line-height:30px;padding:0 10px;border-radius:6px;background:#ff424b;display:inline-block;color:#fff;text-align:center}[data-dpr="2"] #pageletBanner .open{right:80px}[data-dpr="3"] #pageletBanner .open{right:120px}[data-dpr="2"] #pageletBanner .open{width:120px}[data-dpr="3"] #pageletBanner .open{width:180px}[data-dpr="2"] #pageletBanner .open{font-size:26px}[data-dpr="3"] #pageletBanner .open{font-size:39px}[data-dpr="2"] #pageletBanner .open{line-height:60px}[data-dpr="3"] #pageletBanner .open{line-height:90px}[data-dpr="2"] #pageletBanner .open{padding:0 20px}[data-dpr="3"] #pageletBanner .open{padding:0 30px}[data-dpr="2"] #pageletBanner .open{border-radius:12px}[data-dpr="3"] #pageletBanner .open{border-radius:18px}#pageletBanner,#pageletBanner *,#pageletBanner:after,#pageletBanner :after,#pageletBanner:before,#pageletBanner :before{box-sizing:content-box}', ""])
}
, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }
        ,
        e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < t.length; i++) {
                var a = t[i];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                e.push(a))
            }
        }
        ,
        e
    }
}
, function(e, t, n) {
    var r = n(48);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"],
        main: function(e, t, n, r, i) {
            var o, a = null != t ? t : {}, s = n.helperMissing, u = "function", l = e.escapeExpression;
            return '<div id="pageletBanner" class="banner-' + l((o = null != (o = n.pos || (null != t ? t.pos : t)) ? o : s,
            typeof o === u ? o.call(a, {
                name: "pos",
                hash: {},
                data: i
            }) : o)) + " " + l((o = null != (o = n.bannerCls || (null != t ? t.bannerCls : t)) ? o : s,
            typeof o === u ? o.call(a, {
                name: "bannerCls",
                hash: {},
                data: i
            }) : o)) + '"> \n    <div class="banner-pannel pannel-' + l((o = null != (o = n.pos || (null != t ? t.pos : t)) ? o : s,
            typeof o === u ? o.call(a, {
                name: "pos",
                hash: {},
                data: i
            }) : o)) + " show-" + l((o = null != (o = n.pos || (null != t ? t.pos : t)) ? o : s,
            typeof o === u ? o.call(a, {
                name: "pos",
                hash: {},
                data: i
            }) : o)) + '-pannel" style="display: block !important;"> \n        <a href="javascript:void(0)" class="close"></a> \n        <a href="' + l((o = null != (o = n.downloadLink || (null != t ? t.downloadLink : t)) ? o : s,
            typeof o === u ? o.call(a, {
                name: "downloadLink",
                hash: {},
                data: i
            }) : o)) + '" target="_self" class="download" rel="nofollow">  \n            <div class="logo"></div> \n            <div class="banner-label">\n                <p class="tb" data-node="appName"></p> \n                <p class="title-sub"></p> \n            </div> \n            <div class="open"></div> \n        </a> \n    </div> \n</div>\n'
        },
        useData: !0
    })
}
, function(e, t, n) {
    e.exports = n(49).default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }
    function o() {
        var e = new s.HandlebarsEnvironment;
        return d.extend(e, s),
        e.SafeString = l.default,
        e.Exception = f.default,
        e.Utils = d,
        e.escapeExpression = d.escapeExpression,
        e.VM = m,
        e.template = function(t) {
            return m.template(t, e)
        }
        ,
        e
    }
    t.__esModule = !0;
    var a = n(50)
      , s = i(a)
      , u = n(64)
      , l = r(u)
      , c = n(52)
      , f = r(c)
      , p = n(51)
      , d = i(p)
      , h = n(65)
      , m = i(h)
      , g = n(66)
      , v = r(g)
      , b = o();
    b.create = o,
    v.default(b),
    b.default = b,
    t.default = b,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e, t, n) {
        this.helpers = e || {},
        this.partials = t || {},
        this.decorators = n || {},
        u.registerDefaultHelpers(this),
        l.registerDefaultDecorators(this)
    }
    t.__esModule = !0,
    t.HandlebarsEnvironment = i;
    var o = n(51)
      , a = n(52)
      , s = r(a)
      , u = n(53)
      , l = n(61)
      , c = n(63)
      , f = r(c)
      , p = "4.0.5";
    t.VERSION = p;
    var d = 7;
    t.COMPILER_REVISION = d;
    var h = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0"
    };
    t.REVISION_CHANGES = h;
    var m = "[object Object]";
    i.prototype = {
        constructor: i,
        logger: f.default,
        log: f.default.log,
        registerHelper: function(e, t) {
            if (o.toString.call(e) === m) {
                if (t)
                    throw new s.default("Arg not supported with multiple helpers");
                o.extend(this.helpers, e)
            } else
                this.helpers[e] = t
        },
        unregisterHelper: function(e) {
            delete this.helpers[e]
        },
        registerPartial: function(e, t) {
            if (o.toString.call(e) === m)
                o.extend(this.partials, e);
            else {
                if ("undefined" == typeof t)
                    throw new s.default('Attempting to register a partial called "' + e + '" as undefined');
                this.partials[e] = t
            }
        },
        unregisterPartial: function(e) {
            delete this.partials[e]
        },
        registerDecorator: function(e, t) {
            if (o.toString.call(e) === m) {
                if (t)
                    throw new s.default("Arg not supported with multiple decorators");
                o.extend(this.decorators, e)
            } else
                this.decorators[e] = t
        },
        unregisterDecorator: function(e) {
            delete this.decorators[e]
        }
    };
    var g = f.default.log;
    t.log = g,
    t.createFrame = o.createFrame,
    t.logger = f.default
}
, function(e, t) {
    "use strict";
    function n(e) {
        return c[e]
    }
    function r(e) {
        for (var t = 1; t < arguments.length; t++)
            for (var n in arguments[t])
                Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
        return e
    }
    function i(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t)
                return n;
        return -1
    }
    function o(e) {
        if ("string" != typeof e) {
            if (e && e.toHTML)
                return e.toHTML();
            if (null == e)
                return "";
            if (!e)
                return e + "";
            e = "" + e
        }
        return p.test(e) ? e.replace(f, n) : e
    }
    function a(e) {
        return !e && 0 !== e || !(!m(e) || 0 !== e.length)
    }
    function s(e) {
        var t = r({}, e);
        return t._parent = e,
        t
    }
    function u(e, t) {
        return e.path = t,
        e
    }
    function l(e, t) {
        return (e ? e + "." : "") + t
    }
    t.__esModule = !0,
    t.extend = r,
    t.indexOf = i,
    t.escapeExpression = o,
    t.isEmpty = a,
    t.createFrame = s,
    t.blockParams = u,
    t.appendContextPath = l;
    var c = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
        "=": "&#x3D;"
    }
      , f = /[&<>"'`=]/g
      , p = /[&<>"'`=]/
      , d = Object.prototype.toString;
    t.toString = d;
    var h = function(e) {
        return "function" == typeof e
    };
    h(/x/) && (t.isFunction = h = function(e) {
        return "function" == typeof e && "[object Function]" === d.call(e)
    }
    ),
    t.isFunction = h;
    var m = Array.isArray || function(e) {
        return !(!e || "object" != typeof e) && "[object Array]" === d.call(e)
    }
    ;
    t.isArray = m
}
, function(e, t) {
    "use strict";
    function n(e, t) {
        var i = t && t.loc
          , o = void 0
          , a = void 0;
        i && (o = i.start.line,
        a = i.start.column,
        e += " - " + o + ":" + a);
        for (var s = Error.prototype.constructor.call(this, e), u = 0; u < r.length; u++)
            this[r[u]] = s[r[u]];
        Error.captureStackTrace && Error.captureStackTrace(this, n);
        try {
            i && (this.lineNumber = o,
            Object.defineProperty ? Object.defineProperty(this, "column", {
                value: a
            }) : this.column = a)
        } catch (e) {}
    }
    t.__esModule = !0;
    var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    n.prototype = new Error,
    t.default = n,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e) {
        a.default(e),
        u.default(e),
        c.default(e),
        p.default(e),
        h.default(e),
        g.default(e),
        b.default(e)
    }
    t.__esModule = !0,
    t.registerDefaultHelpers = i;
    var o = n(54)
      , a = r(o)
      , s = n(55)
      , u = r(s)
      , l = n(56)
      , c = r(l)
      , f = n(57)
      , p = r(f)
      , d = n(58)
      , h = r(d)
      , m = n(59)
      , g = r(m)
      , v = n(60)
      , b = r(v)
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(51);
    t.default = function(e) {
        e.registerHelper("blockHelperMissing", function(t, n) {
            var i = n.inverse
              , o = n.fn;
            if (t === !0)
                return o(this);
            if (t === !1 || null == t)
                return i(this);
            if (r.isArray(t))
                return t.length > 0 ? (n.ids && (n.ids = [n.name]),
                e.helpers.each(t, n)) : i(this);
            if (n.data && n.ids) {
                var a = r.createFrame(n.data);
                a.contextPath = r.appendContextPath(n.data.contextPath, n.name),
                n = {
                    data: a
                }
            }
            return o(t, n)
        })
    }
    ,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(51)
      , o = n(52)
      , a = r(o);
    t.default = function(e) {
        e.registerHelper("each", function(e, t) {
            function n(t, n, o) {
                l && (l.key = t,
                l.index = n,
                l.first = 0 === n,
                l.last = !!o,
                c && (l.contextPath = c + t)),
                u += r(e[t], {
                    data: l,
                    blockParams: i.blockParams([e[t], t], [c + t, null])
                })
            }
            if (!t)
                throw new a.default("Must pass iterator to #each");
            var r = t.fn
              , o = t.inverse
              , s = 0
              , u = ""
              , l = void 0
              , c = void 0;
            if (t.data && t.ids && (c = i.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
            i.isFunction(e) && (e = e.call(this)),
            t.data && (l = i.createFrame(t.data)),
            e && "object" == typeof e)
                if (i.isArray(e))
                    for (var f = e.length; s < f; s++)
                        s in e && n(s, s, s === e.length - 1);
                else {
                    var p = void 0;
                    for (var d in e)
                        e.hasOwnProperty(d) && (void 0 !== p && n(p, s - 1),
                        p = d,
                        s++);
                    void 0 !== p && n(p, s - 1, !0)
                }
            return 0 === s && (u = o(this)),
            u
        })
    }
    ,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = n(52)
      , o = r(i);
    t.default = function(e) {
        e.registerHelper("helperMissing", function() {
            if (1 !== arguments.length)
                throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
        })
    }
    ,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(51);
    t.default = function(e) {
        e.registerHelper("if", function(e, t) {
            return r.isFunction(e) && (e = e.call(this)),
            !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
        }),
        e.registerHelper("unless", function(t, n) {
            return e.helpers.if.call(this, t, {
                fn: n.inverse,
                inverse: n.fn,
                hash: n.hash
            })
        })
    }
    ,
    e.exports = t.default
}
, function(e, t) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e) {
        e.registerHelper("log", function() {
            for (var t = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++)
                t.push(arguments[r]);
            var i = 1;
            null != n.hash.level ? i = n.hash.level : n.data && null != n.data.level && (i = n.data.level),
            t[0] = i,
            e.log.apply(e, t)
        })
    }
    ,
    e.exports = t.default
}
, function(e, t) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e) {
        e.registerHelper("lookup", function(e, t) {
            return e && e[t]
        })
    }
    ,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(51);
    t.default = function(e) {
        e.registerHelper("with", function(e, t) {
            r.isFunction(e) && (e = e.call(this));
            var n = t.fn;
            if (r.isEmpty(e))
                return t.inverse(this);
            var i = t.data;
            return t.data && t.ids && (i = r.createFrame(t.data),
            i.contextPath = r.appendContextPath(t.data.contextPath, t.ids[0])),
            n(e, {
                data: i,
                blockParams: r.blockParams([e], [i && i.contextPath])
            })
        })
    }
    ,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e) {
        a.default(e)
    }
    t.__esModule = !0,
    t.registerDefaultDecorators = i;
    var o = n(62)
      , a = r(o)
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(51);
    t.default = function(e) {
        e.registerDecorator("inline", function(e, t, n, i) {
            var o = e;
            return t.partials || (t.partials = {},
            o = function(i, o) {
                var a = n.partials;
                n.partials = r.extend({}, a, t.partials);
                var s = e(i, o);
                return n.partials = a,
                s
            }
            ),
            t.partials[i.args[0]] = i.fn,
            o
        })
    }
    ,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(51)
      , i = {
        methodMap: ["debug", "info", "warn", "error"],
        level: "info",
        lookupLevel: function(e) {
            if ("string" == typeof e) {
                var t = r.indexOf(i.methodMap, e.toLowerCase());
                e = t >= 0 ? t : parseInt(e, 10)
            }
            return e
        },
        log: function(e) {
            if (e = i.lookupLevel(e),
            "undefined" != typeof console && i.lookupLevel(i.level) <= e) {
                var t = i.methodMap[e];
                console[t] || (t = "log");
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                    r[o - 1] = arguments[o];
                console[t].apply(console, r)
            }
        }
    };
    t.default = i,
    e.exports = t.default
}
, function(e, t) {
    "use strict";
    function n(e) {
        this.string = e
    }
    t.__esModule = !0,
    n.prototype.toString = n.prototype.toHTML = function() {
        return "" + this.string
    }
    ,
    t.default = n,
    e.exports = t.default
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }
    function o(e) {
        var t = e && e[0] || 1
          , n = v.COMPILER_REVISION;
        if (t !== n) {
            if (t < n) {
                var r = v.REVISION_CHANGES[n]
                  , i = v.REVISION_CHANGES[t];
                throw new g.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").");
            }
            throw new g.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }
    }
    function a(e, t) {
        function n(n, r, i) {
            i.hash && (r = h.extend({}, r, i.hash),
            i.ids && (i.ids[0] = !0)),
            n = t.VM.resolvePartial.call(this, n, r, i);
            var o = t.VM.invokePartial.call(this, n, r, i);
            if (null == o && t.compile && (i.partials[i.name] = t.compile(n, e.compilerOptions, t),
            o = i.partials[i.name](r, i)),
            null != o) {
                if (i.indent) {
                    for (var a = o.split("\n"), s = 0, u = a.length; s < u && (a[s] || s + 1 !== u); s++)
                        a[s] = i.indent + a[s];
                    o = a.join("\n")
                }
                return o
            }
            throw new g.default("The partial " + i.name + " could not be compiled when running in runtime-only mode")
        }
        function r(t) {
            function n(t) {
                return "" + e.main(i, t, i.helpers, i.partials, a, u, s)
            }
            var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
              , a = o.data;
            r._setup(o),
            !o.partial && e.useData && (a = f(t, a));
            var s = void 0
              , u = e.useBlockParams ? [] : void 0;
            return e.useDepths && (s = o.depths ? t != o.depths[0] ? [t].concat(o.depths) : o.depths : [t]),
            (n = p(e.main, n, i, o.depths || [], a, u))(t, o)
        }
        if (!t)
            throw new g.default("No environment passed to template");
        if (!e || !e.main)
            throw new g.default("Unknown template object: " + typeof e);
        e.main.decorator = e.main_d,
        t.VM.checkRevision(e.compiler);
        var i = {
            strict: function(e, t) {
                if (!(t in e))
                    throw new g.default('"' + t + '" not defined in ' + e);
                return e[t]
            },
            lookup: function(e, t) {
                for (var n = e.length, r = 0; r < n; r++)
                    if (e[r] && null != e[r][t])
                        return e[r][t]
            },
            lambda: function(e, t) {
                return "function" == typeof e ? e.call(t) : e
            },
            escapeExpression: h.escapeExpression,
            invokePartial: n,
            fn: function(t) {
                var n = e[t];
                return n.decorator = e[t + "_d"],
                n
            },
            programs: [],
            program: function(e, t, n, r, i) {
                var o = this.programs[e]
                  , a = this.fn(e);
                return t || i || r || n ? o = s(this, e, a, t, n, r, i) : o || (o = this.programs[e] = s(this, e, a)),
                o
            },
            data: function(e, t) {
                for (; e && t--; )
                    e = e._parent;
                return e
            },
            merge: function(e, t) {
                var n = e || t;
                return e && t && e !== t && (n = h.extend({}, t, e)),
                n
            },
            noop: t.VM.noop,
            compilerInfo: e.compiler
        };
        return r.isTop = !0,
        r._setup = function(n) {
            n.partial ? (i.helpers = n.helpers,
            i.partials = n.partials,
            i.decorators = n.decorators) : (i.helpers = i.merge(n.helpers, t.helpers),
            e.usePartial && (i.partials = i.merge(n.partials, t.partials)),
            (e.usePartial || e.useDecorators) && (i.decorators = i.merge(n.decorators, t.decorators)))
        }
        ,
        r._child = function(t, n, r, o) {
            if (e.useBlockParams && !r)
                throw new g.default("must pass block params");
            if (e.useDepths && !o)
                throw new g.default("must pass parent depths");
            return s(i, t, e[t], n, 0, r, o)
        }
        ,
        r
    }
    function s(e, t, n, r, i, o, a) {
        function s(t) {
            var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
              , s = a;
            return a && t != a[0] && (s = [t].concat(a)),
            n(e, t, e.helpers, e.partials, i.data || r, o && [i.blockParams].concat(o), s)
        }
        return s = p(n, s, e, a, r, o),
        s.program = t,
        s.depth = a ? a.length : 0,
        s.blockParams = i || 0,
        s
    }
    function u(e, t, n) {
        if (e)
            e.call || n.name || (n.name = e,
            e = n.partials[e]);
        else if ("@partial-block" === n.name) {
            for (var r = n.data; r["partial-block"] === c; )
                r = r._parent;
            e = r["partial-block"],
            r["partial-block"] = c
        } else
            e = n.partials[n.name];
        return e
    }
    function l(e, t, n) {
        n.partial = !0,
        n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
        var r = void 0;
        if (n.fn && n.fn !== c && (n.data = v.createFrame(n.data),
        r = n.data["partial-block"] = n.fn,
        r.partials && (n.partials = h.extend({}, n.partials, r.partials))),
        void 0 === e && r && (e = r),
        void 0 === e)
            throw new g.default("The partial " + n.name + " could not be found");
        if (e instanceof Function)
            return e(t, n)
    }
    function c() {
        return ""
    }
    function f(e, t) {
        return t && "root"in t || (t = t ? v.createFrame(t) : {},
        t.root = e),
        t
    }
    function p(e, t, n, r, i, o) {
        if (e.decorator) {
            var a = {};
            t = e.decorator(t, a, n, r && r[0], i, o, r),
            h.extend(t, a)
        }
        return t
    }
    t.__esModule = !0,
    t.checkRevision = o,
    t.template = a,
    t.wrapProgram = s,
    t.resolvePartial = u,
    t.invokePartial = l,
    t.noop = c;
    var d = n(51)
      , h = i(d)
      , m = n(52)
      , g = r(m)
      , v = n(50)
}
, function(e, t) {
    (function(n) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e) {
            var t = "undefined" != typeof n ? n : window
              , r = t.Handlebars;
            e.noConflict = function() {
                return t.Handlebars === e && (t.Handlebars = r),
                e
            }
        }
        ,
        e.exports = t.default
    }
    ).call(t, function() {
        return this
    }())
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e) {
        var e = e || {}
          , t = {
            downloadLink: "http://d.toutiao.com/e6jY/",
            yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
            nativeLink: p.default.getNativeLink(e),
            universalLink: "",
            openUrl: p.default.getOpenUrl(e)
        };
        if (e.isGrowthWap && window.ttGTM) {
            var n = p.default.getGTMValue("yybSurl");
            Array.isArray(n) && $.extend(!0, e, {
                yybLink: n[0],
                downloadLink: n[1]
            }),
            p.default.getGTMValue("listbottombannerSurl") && (e.downloadLink = p.default.getGTMValue("listbottombannerSurl")),
            p.default.getGTMValue("topbannerSurl") && (e.downloadLink = p.default.getGTMValue("topbannerSurl"))
        }
        return $.extend(!0, {}, t, e)
    }
    function o(e) {
        setTimeout(function() {
            location.href = e
        }, 100)
    }
    function a(e) {
        var t = e.downloadLink
          , n = {
            openurl: e.openUrl,
            postdata: [e.postData || p.default.getAppTrackData()]
        }
          , r = g.default.appendQuery(t, "append=" + encodeURIComponent((0,
        c.default)(n)))
          , i = document.createElement("a");
        i.href = t;
        var o = b.default.parse(i.search.slice(1));
        return o.append && (r = t),
        r
    }
    function s(e) {
        setTimeout(function() {
            $("body").append("<iframe id='app_dl_iframe' src='" + e.yybHref + "' style='display:none'></iframe>"),
            setTimeout(function() {
                $("iframe#app_dl_iframe").remove(),
                location.href = e.fallback
            }, 1500)
        }, 100)
    }
    function u(e) {
        if (e = e || {},
        !e.forbidDownload) {
            var t = i(e);
            if (h.default.os.android)
                if (p.default.isWeixin()) {
                    var n = encodeURIComponent(p.default.getNativeLink(t));
                    o(g.default.appendQuery(t.downloadLink, "android_scheme=" + n))
                } else
                    s({
                        yybHref: t.yybLink,
                        fallback: a(t)
                    });
            else
                o(t.downloadLink)
        }
    }
    var l = n(41)
      , c = r(l)
      , f = n(5)
      , p = r(f)
      , d = n(44)
      , h = r(d)
      , m = n(43)
      , g = r(m)
      , v = n(68)
      , b = r(v);
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(69),
    t.encode = t.stringify = n(70)
}
, function(e, t) {
    "use strict";
    function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, r, i) {
        t = t || "&",
        r = r || "=";
        var o = {};
        if ("string" != typeof e || 0 === e.length)
            return o;
        var a = /\+/g;
        e = e.split(t);
        var s = 1e3;
        i && "number" == typeof i.maxKeys && (s = i.maxKeys);
        var u = e.length;
        s > 0 && u > s && (u = s);
        for (var l = 0; l < u; ++l) {
            var c, f, p, d, h = e[l].replace(a, "%20"), m = h.indexOf(r);
            m >= 0 ? (c = h.substr(0, m),
            f = h.substr(m + 1)) : (c = h,
            f = ""),
            p = decodeURIComponent(c),
            d = decodeURIComponent(f),
            n(o, p) ? Array.isArray(o[p]) ? o[p].push(d) : o[p] = [o[p], d] : o[p] = d
        }
        return o
    }
}
, function(e, t) {
    "use strict";
    var n = function(e) {
        switch (typeof e) {
        case "string":
            return e;
        case "boolean":
            return e ? "true" : "false";
        case "number":
            return isFinite(e) ? e : "";
        default:
            return ""
        }
    };
    e.exports = function(e, t, r, i) {
        return t = t || "&",
        r = r || "=",
        null === e && (e = void 0),
        "object" == typeof e ? Object.keys(e).map(function(i) {
            var o = encodeURIComponent(n(i)) + r;
            return Array.isArray(e[i]) ? e[i].map(function(e) {
                return o + encodeURIComponent(n(e))
            }).join(t) : o + encodeURIComponent(n(e[i]))
        }).join(t) : i ? encodeURIComponent(n(i)) + r + encodeURIComponent(n(e)) : ""
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var e = e || {}
          , t = {
            downloadLink: "http://d.toutiao.com/e6jY/",
            yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
            nativeLink: o.getNativeLink(e),
            universalLink: "",
            openUrl: o.getOpenUrl(e)
        };
        return $.extend(!0, {}, t, e)
    }
    var i = n(44)
      , o = n(5)
      , a = n(43)
      , s = function(e) {
        $("#app_iframe").remove(),
        $("body").append("<iframe id='app_iframe' src='" + e + "' style='display:none'></iframe>")
    }
      , u = function(e) {
        if (e = e || {},
        !e.forbidInvoke) {
            var t = r(e)
              , n = o.isWeixin()
              , a = i.os.ios && i.os.version >= 9;
            return !(n && !a) && void (i.os.ios ? c(t) : l(t))
        }
    }
      , l = function(e) {
        s(e.nativeLink)
    }
      , c = function(e) {
        var t = location.href
          , n = i.os.version;
        if (n >= 9 && !i.browser.qqbrowser) {
            var r = "//toutiao.com/m/detail/?"
              , u = "click_" + (o.isWeixin() ? "weixin" : "wap") + "_ios_deeplink"
              , l = e.nativeLink.replace(/gd_label=(\w+)/, "gd_label=" + u);
            l.indexOf("gd_label") === -1 && (l += "&gd_label=" + u);
            var c = {
                group_id: e.group_id,
                item_id: "",
                scheme: encodeURIComponent(l)
            };
            r += a.toQuery(c),
            location.href = e.universalLink || r
        } else if (n >= 9) {
            var f = i.browser.safari
              , p = f ? 2e3 : 1300;
            setTimeout(function() {
                location.href = e.nativeLink,
                setTimeout(function() {
                    "hidden" === a.pageVisible() && (location.href = t)
                }, p)
            }, 10)
        } else
            s(e.nativeLink)
    };
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        e = e || {},
        s.os.ios ? a.isWeixin() ? (o(e),
        setTimeout(function() {
            i(e)
        }, 1e3)) : (i(e),
        setTimeout(function() {
            o(e)
        }, 1e3)) : (o(e),
        i(e))
    }
    var i = n(67)
      , o = n(71)
      , a = n(5)
      , s = (n(43),
    n(44));
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = n(5)
      , o = r(i)
      , a = n(44)
      , s = r(a);
    e.exports = function() {
        $(document).on("click", "a", function(e) {
            var t = e.currentTarget.href
              , n = document.createElement("a");
            if (n.href = t,
            !o.default.parseQuery(n.href, "scheme")) {
                var r = ["toutiao.com", "www.toutiao.com", "m.toutiao.com", "m.pstatp.com", "m.365yg.com"];
                if (r.indexOf(n.hostname) !== -1 && s.default.os.ios) {
                    var i = [/\/group\/(\d+)/, /\/a(\d+)/, /\/item\/(\d+)/, /\/i(\d+)/];
                    i.some(function(r) {
                        var i = n.pathname.match(r);
                        return !!i && (t = o.default.appendQuery(t, {
                            scheme: "snssdk141://detail?groupid=" + i[1]
                        }),
                        e.currentTarget.href = t,
                        !0)
                    })
                }
            }
        })
    }
}
, function(e, t, n) {
    var r = function() {
        function e(e) {
            return null == e ? String(e) : W[q.call(e)] || "object"
        }
        function t(t) {
            return "function" == e(t)
        }
        function n(e) {
            return null != e && e == e.window
        }
        function r(e) {
            return null != e && e.nodeType == e.DOCUMENT_NODE
        }
        function i(t) {
            return "object" == e(t)
        }
        function o(e) {
            return i(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype
        }
        function a(e) {
            return "number" == typeof e.length
        }
        function s(e) {
            return O.call(e, function(e) {
                return null != e
            })
        }
        function u(e) {
            return e.length > 0 ? k.fn.concat.apply([], e) : e
        }
        function l(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        function c(e) {
            return e in B ? B[e] : B[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
        }
        function f(e, t) {
            return "number" != typeof t || L[l(e)] ? t : t + "px"
        }
        function p(e) {
            var t, n;
            return P[e] || (t = j.createElement(e),
            j.body.appendChild(t),
            n = getComputedStyle(t, "").getPropertyValue("display"),
            t.parentNode.removeChild(t),
            "none" == n && (n = "block"),
            P[e] = n),
            P[e]
        }
        function d(e) {
            return "children"in e ? C.call(e.children) : k.map(e.childNodes, function(e) {
                if (1 == e.nodeType)
                    return e
            })
        }
        function h(e, t, n) {
            for (_ in t)
                n && (o(t[_]) || J(t[_])) ? (o(t[_]) && !o(e[_]) && (e[_] = {}),
                J(t[_]) && !J(e[_]) && (e[_] = []),
                h(e[_], t[_], n)) : t[_] !== w && (e[_] = t[_])
        }
        function m(e, t) {
            return null == t ? k(e) : k(e).filter(t)
        }
        function g(e, n, r, i) {
            return t(n) ? n.call(e, r, i) : n
        }
        function v(e, t, n) {
            null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
        }
        function b(e, t) {
            var n = e.className || ""
              , r = n && n.baseVal !== w;
            return t === w ? r ? n.baseVal : n : void (r ? n.baseVal = t : e.className = t)
        }
        function y(e) {
            try {
                return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? k.parseJSON(e) : e) : e
            } catch (t) {
                return e
            }
        }
        function x(e, t) {
            t(e);
            for (var n = 0, r = e.childNodes.length; n < r; n++)
                x(e.childNodes[n], t)
        }
        var w, _, k, E, T, M, S = [], C = S.slice, O = S.filter, j = window.document, P = {}, B = {}, L = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, N = /^\s*<(\w+|!)[^>]*>/, A = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, D = /^(?:body|html)$/i, z = /([A-Z])/g, I = ["val", "css", "html", "text", "data", "width", "height", "offset"], H = ["after", "prepend", "before", "append"], F = j.createElement("table"), V = j.createElement("tr"), U = {
            tr: j.createElement("tbody"),
            tbody: F,
            thead: F,
            tfoot: F,
            td: V,
            th: V,
            "*": j.createElement("div")
        }, G = /complete|loaded|interactive/, $ = /^[\w-]*$/, W = {}, q = W.toString, Y = {}, Z = j.createElement("div"), Q = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, J = Array.isArray || function(e) {
            return e instanceof Array
        }
        ;
        return Y.matches = function(e, t) {
            if (!t || !e || 1 !== e.nodeType)
                return !1;
            var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (n)
                return n.call(e, t);
            var r, i = e.parentNode, o = !i;
            return o && (i = Z).appendChild(e),
            r = ~Y.qsa(i, t).indexOf(e),
            o && Z.removeChild(e),
            r
        }
        ,
        T = function(e) {
            return e.replace(/-+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : ""
            })
        }
        ,
        M = function(e) {
            return O.call(e, function(t, n) {
                return e.indexOf(t) == n
            })
        }
        ,
        Y.fragment = function(e, t, n) {
            var r, i, a;
            return A.test(e) && (r = k(j.createElement(RegExp.$1))),
            r || (e.replace && (e = e.replace(R, "<$1></$2>")),
            t === w && (t = N.test(e) && RegExp.$1),
            t in U || (t = "*"),
            a = U[t],
            a.innerHTML = "" + e,
            r = k.each(C.call(a.childNodes), function() {
                a.removeChild(this)
            })),
            o(n) && (i = k(r),
            k.each(n, function(e, t) {
                I.indexOf(e) > -1 ? i[e](t) : i.attr(e, t)
            })),
            r
        }
        ,
        Y.Z = function(e, t) {
            return e = e || [],
            e.__proto__ = k.fn,
            e.selector = t || "",
            e
        }
        ,
        Y.isZ = function(e) {
            return e instanceof Y.Z
        }
        ,
        Y.init = function(e, n) {
            var r;
            if (!e)
                return Y.Z();
            if ("string" == typeof e)
                if (e = e.trim(),
                "<" == e[0] && N.test(e))
                    r = Y.fragment(e, RegExp.$1, n),
                    e = null;
                else {
                    if (n !== w)
                        return k(n).find(e);
                    r = Y.qsa(j, e)
                }
            else {
                if (t(e))
                    return k(j).ready(e);
                if (Y.isZ(e))
                    return e;
                if (J(e))
                    r = s(e);
                else if (i(e))
                    r = [e],
                    e = null;
                else if (N.test(e))
                    r = Y.fragment(e.trim(), RegExp.$1, n),
                    e = null;
                else {
                    if (n !== w)
                        return k(n).find(e);
                    r = Y.qsa(j, e)
                }
            }
            return Y.Z(r, e)
        }
        ,
        k = function(e, t) {
            return Y.init(e, t)
        }
        ,
        k.extend = function(e) {
            var t, n = C.call(arguments, 1);
            return "boolean" == typeof e && (t = e,
            e = n.shift()),
            n.forEach(function(n) {
                h(e, n, t)
            }),
            e
        }
        ,
        Y.qsa = function(e, t) {
            var n, i = "#" == t[0], o = !i && "." == t[0], a = i || o ? t.slice(1) : t, s = $.test(a);
            return r(e) && s && i ? (n = e.getElementById(a)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType ? [] : C.call(s && !i ? o ? e.getElementsByClassName(a) : e.getElementsByTagName(t) : e.querySelectorAll(t))
        }
        ,
        k.contains = j.documentElement.contains ? function(e, t) {
            return e !== t && e.contains(t)
        }
        : function(e, t) {
            for (; t && (t = t.parentNode); )
                if (t === e)
                    return !0;
            return !1
        }
        ,
        k.type = e,
        k.isFunction = t,
        k.isWindow = n,
        k.isArray = J,
        k.isPlainObject = o,
        k.isEmptyObject = function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        }
        ,
        k.inArray = function(e, t, n) {
            return S.indexOf.call(t, e, n)
        }
        ,
        k.camelCase = T,
        k.trim = function(e) {
            return null == e ? "" : String.prototype.trim.call(e)
        }
        ,
        k.uuid = 0,
        k.support = {},
        k.expr = {},
        k.map = function(e, t) {
            var n, r, i, o = [];
            if (a(e))
                for (r = 0; r < e.length; r++)
                    n = t(e[r], r),
                    null != n && o.push(n);
            else
                for (i in e)
                    n = t(e[i], i),
                    null != n && o.push(n);
            return u(o)
        }
        ,
        k.each = function(e, t) {
            var n, r;
            if (a(e)) {
                for (n = 0; n < e.length; n++)
                    if (t.call(e[n], n, e[n]) === !1)
                        return e
            } else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1)
                        return e;
            return e
        }
        ,
        k.grep = function(e, t) {
            return O.call(e, t)
        }
        ,
        window.JSON && (k.parseJSON = JSON.parse),
        k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            W["[object " + t + "]"] = t.toLowerCase()
        }),
        k.fn = {
            forEach: S.forEach,
            reduce: S.reduce,
            push: S.push,
            sort: S.sort,
            indexOf: S.indexOf,
            concat: S.concat,
            map: function(e) {
                return k(k.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return k(C.apply(this, arguments))
            },
            ready: function(e) {
                return G.test(j.readyState) && j.body ? e(k) : j.addEventListener("DOMContentLoaded", function() {
                    e(k)
                }, !1),
                this
            },
            get: function(e) {
                return e === w ? C.call(this) : this[e >= 0 ? e : e + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(e) {
                return S.every.call(this, function(t, n) {
                    return e.call(t, n, t) !== !1
                }),
                this
            },
            filter: function(e) {
                return t(e) ? this.not(this.not(e)) : k(O.call(this, function(t) {
                    return Y.matches(t, e)
                }))
            },
            add: function(e, t) {
                return k(M(this.concat(k(e, t))))
            },
            is: function(e) {
                return this.length > 0 && Y.matches(this[0], e)
            },
            not: function(e) {
                var n = [];
                if (t(e) && e.call !== w)
                    this.each(function(t) {
                        e.call(this, t) || n.push(this)
                    });
                else {
                    var r = "string" == typeof e ? this.filter(e) : a(e) && t(e.item) ? C.call(e) : k(e);
                    this.forEach(function(e) {
                        r.indexOf(e) < 0 && n.push(e)
                    })
                }
                return k(n)
            },
            has: function(e) {
                return this.filter(function() {
                    return i(e) ? k.contains(this, e) : k(this).find(e).size()
                })
            },
            eq: function(e) {
                return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function() {
                var e = this[0];
                return e && !i(e) ? e : k(e)
            },
            last: function() {
                var e = this[this.length - 1];
                return e && !i(e) ? e : k(e)
            },
            find: function(e) {
                var t, n = this;
                return t = e ? "object" == typeof e ? k(e).filter(function() {
                    var e = this;
                    return S.some.call(n, function(t) {
                        return k.contains(t, e)
                    })
                }) : 1 == this.length ? k(Y.qsa(this[0], e)) : this.map(function() {
                    return Y.qsa(this, e)
                }) : k()
            },
            closest: function(e, t) {
                var n = this[0]
                  , i = !1;
                for ("object" == typeof e && (i = k(e)); n && !(i ? i.indexOf(n) >= 0 : Y.matches(n, e)); )
                    n = n !== t && !r(n) && n.parentNode;
                return k(n)
            },
            parents: function(e) {
                for (var t = [], n = this; n.length > 0; )
                    n = k.map(n, function(e) {
                        if ((e = e.parentNode) && !r(e) && t.indexOf(e) < 0)
                            return t.push(e),
                            e
                    });
                return m(t, e)
            },
            parent: function(e) {
                return m(M(this.pluck("parentNode")), e)
            },
            children: function(e) {
                return m(this.map(function() {
                    return d(this)
                }), e)
            },
            contents: function() {
                return this.map(function() {
                    return C.call(this.childNodes)
                })
            },
            siblings: function(e) {
                return m(this.map(function(e, t) {
                    return O.call(d(t.parentNode), function(e) {
                        return e !== t
                    })
                }), e)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(e) {
                return k.map(this, function(t) {
                    return t[e]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = ""),
                    "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
                })
            },
            replaceWith: function(e) {
                return this.before(e).remove()
            },
            wrap: function(e) {
                var n = t(e);
                if (this[0] && !n)
                    var r = k(e).get(0)
                      , i = r.parentNode || this.length > 1;
                return this.each(function(t) {
                    k(this).wrapAll(n ? e.call(this, t) : i ? r.cloneNode(!0) : r)
                })
            },
            wrapAll: function(e) {
                if (this[0]) {
                    k(this[0]).before(e = k(e));
                    for (var t; (t = e.children()).length; )
                        e = t.first();
                    k(e).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                var n = t(e);
                return this.each(function(t) {
                    var r = k(this)
                      , i = r.contents()
                      , o = n ? e.call(this, t) : e;
                    i.length ? i.wrapAll(o) : r.append(o)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    k(this).replaceWith(k(this).children())
                }),
                this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(e) {
                return this.each(function() {
                    var t = k(this);
                    (e === w ? "none" == t.css("display") : e) ? t.show() : t.hide()
                })
            },
            prev: function(e) {
                return k(this.pluck("previousElementSibling")).filter(e || "*")
            },
            next: function(e) {
                return k(this.pluck("nextElementSibling")).filter(e || "*")
            },
            html: function(e) {
                return 0 in arguments ? this.each(function(t) {
                    var n = this.innerHTML;
                    k(this).empty().append(g(this, e, t, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function(e) {
                return 0 in arguments ? this.each(function(t) {
                    var n = g(this, e, t, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this[0].textContent : null
            },
            attr: function(e, t) {
                var n;
                return "string" != typeof e || 1 in arguments ? this.each(function(n) {
                    if (1 === this.nodeType)
                        if (i(e))
                            for (_ in e)
                                v(this, _, e[_]);
                        else
                            v(this, e, g(this, t, n, this.getAttribute(e)))
                }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : n : w
            },
            removeAttr: function(e) {
                return this.each(function() {
                    1 === this.nodeType && e.split(" ").forEach(function(e) {
                        v(this, e)
                    }, this)
                })
            },
            prop: function(e, t) {
                return e = Q[e] || e,
                1 in arguments ? this.each(function(n) {
                    this[e] = g(this, t, n, this[e])
                }) : this[0] && this[0][e]
            },
            data: function(e, t) {
                var n = "data-" + e.replace(z, "-$1").toLowerCase()
                  , r = 1 in arguments ? this.attr(n, t) : this.attr(n);
                return null !== r ? y(r) : w
            },
            val: function(e) {
                return 0 in arguments ? this.each(function(t) {
                    this.value = g(this, e, t, this.value)
                }) : this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function() {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function(e) {
                if (e)
                    return this.each(function(t) {
                        var n = k(this)
                          , r = g(this, e, t, n.offset())
                          , i = n.offsetParent().offset()
                          , o = {
                            top: r.top - i.top,
                            left: r.left - i.left
                        };
                        "static" == n.css("position") && (o.position = "relative"),
                        n.css(o)
                    });
                if (!this.length)
                    return null;
                var t = this[0].getBoundingClientRect();
                return {
                    left: t.left + window.pageXOffset,
                    top: t.top + window.pageYOffset,
                    width: Math.round(t.width),
                    height: Math.round(t.height)
                }
            },
            css: function(t, n) {
                if (arguments.length < 2) {
                    var r, i = this[0];
                    if (!i)
                        return;
                    if (r = getComputedStyle(i, ""),
                    "string" == typeof t)
                        return i.style[T(t)] || r.getPropertyValue(t);
                    if (J(t)) {
                        var o = {};
                        return k.each(t, function(e, t) {
                            o[t] = i.style[T(t)] || r.getPropertyValue(t)
                        }),
                        o
                    }
                }
                var a = "";
                if ("string" == e(t))
                    n || 0 === n ? a = l(t) + ":" + f(t, n) : this.each(function() {
                        this.style.removeProperty(l(t))
                    });
                else
                    for (_ in t)
                        t[_] || 0 === t[_] ? a += l(_) + ":" + f(_, t[_]) + ";" : this.each(function() {
                            this.style.removeProperty(l(_))
                        });
                return this.each(function() {
                    this.style.cssText += ";" + a
                })
            },
            index: function(e) {
                return e ? this.indexOf(k(e)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(e) {
                return !!e && S.some.call(this, function(e) {
                    return this.test(b(e))
                }, c(e))
            },
            addClass: function(e) {
                return e ? this.each(function(t) {
                    if ("className"in this) {
                        E = [];
                        var n = b(this)
                          , r = g(this, e, t, n);
                        r.split(/\s+/g).forEach(function(e) {
                            k(this).hasClass(e) || E.push(e)
                        }, this),
                        E.length && b(this, n + (n ? " " : "") + E.join(" "))
                    }
                }) : this
            },
            removeClass: function(e) {
                return this.each(function(t) {
                    if ("className"in this) {
                        if (e === w)
                            return b(this, "");
                        E = b(this),
                        g(this, e, t, E).split(/\s+/g).forEach(function(e) {
                            E = E.replace(c(e), " ")
                        }),
                        b(this, E.trim())
                    }
                })
            },
            toggleClass: function(e, t) {
                return e ? this.each(function(n) {
                    var r = k(this)
                      , i = g(this, e, n, b(this));
                    i.split(/\s+/g).forEach(function(e) {
                        (t === w ? !r.hasClass(e) : t) ? r.addClass(e) : r.removeClass(e)
                    })
                }) : this
            },
            scrollTop: function(e) {
                if (this.length) {
                    var t = "scrollTop"in this[0];
                    return e === w ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
                        this.scrollTop = e
                    }
                    : function() {
                        this.scrollTo(this.scrollX, e)
                    }
                    )
                }
            },
            scrollLeft: function(e) {
                if (this.length) {
                    var t = "scrollLeft"in this[0];
                    return e === w ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
                        this.scrollLeft = e
                    }
                    : function() {
                        this.scrollTo(e, this.scrollY)
                    }
                    )
                }
            },
            position: function() {
                if (this.length) {
                    var e = this[0]
                      , t = this.offsetParent()
                      , n = this.offset()
                      , r = D.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                    return n.top -= parseFloat(k(e).css("margin-top")) || 0,
                    n.left -= parseFloat(k(e).css("margin-left")) || 0,
                    r.top += parseFloat(k(t[0]).css("border-top-width")) || 0,
                    r.left += parseFloat(k(t[0]).css("border-left-width")) || 0,
                    {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || j.body; e && !D.test(e.nodeName) && "static" == k(e).css("position"); )
                        e = e.offsetParent;
                    return e
                })
            }
        },
        k.fn.detach = k.fn.remove,
        ["width", "height"].forEach(function(e) {
            var t = e.replace(/./, function(e) {
                return e[0].toUpperCase()
            });
            k.fn[e] = function(i) {
                var o, a = this[0];
                return i === w ? n(a) ? a["inner" + t] : r(a) ? a.documentElement["scroll" + t] : (o = this.offset()) && o[e] : this.each(function(t) {
                    a = k(this),
                    a.css(e, g(this, i, t, a[e]()))
                })
            }
        }),
        H.forEach(function(t, n) {
            var r = n % 2;
            k.fn[t] = function() {
                var t, i, o = k.map(arguments, function(n) {
                    return t = e(n),
                    "object" == t || "array" == t || null == n ? n : Y.fragment(n)
                }), a = this.length > 1;
                return o.length < 1 ? this : this.each(function(e, t) {
                    i = r ? t : t.parentNode,
                    t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null;
                    var s = k.contains(j.documentElement, i);
                    o.forEach(function(e) {
                        if (a)
                            e = e.cloneNode(!0);
                        else if (!i)
                            return k(e).remove();
                        i.insertBefore(e, t),
                        s && x(e, function(e) {
                            null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                        })
                    })
                })
            }
            ,
            k.fn[r ? t + "To" : "insert" + (n ? "Before" : "After")] = function(e) {
                return k(e)[t](this),
                this
            }
        }),
        Y.Z.prototype = k.fn,
        Y.uniq = M,
        Y.deserializeValue = y,
        k.zepto = Y,
        k
    }();
    window.Zepto = r,
    void 0 === window.$ && (window.$ = r),
    function(e) {
        function t(e) {
            return e._zid || (e._zid = p++)
        }
        function n(e, n, o, a) {
            if (n = r(n),
            n.ns)
                var s = i(n.ns);
            return (g[t(e)] || []).filter(function(e) {
                return e && (!n.e || e.e == n.e) && (!n.ns || s.test(e.ns)) && (!o || t(e.fn) === t(o)) && (!a || e.sel == a)
            })
        }
        function r(e) {
            var t = ("" + e).split(".");
            return {
                e: t[0],
                ns: t.slice(1).sort().join(" ")
            }
        }
        function i(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
        }
        function o(e, t) {
            return e.del && !b && e.e in y || !!t
        }
        function a(e) {
            return x[e] || b && y[e] || e
        }
        function s(n, i, s, u, c, p, d) {
            var h = t(n)
              , m = g[h] || (g[h] = []);
            i.split(/\s/).forEach(function(t) {
                if ("ready" == t)
                    return e(document).ready(s);
                var i = r(t);
                i.fn = s,
                i.sel = c,
                i.e in x && (s = function(t) {
                    var n = t.relatedTarget;
                    if (!n || n !== this && !e.contains(this, n))
                        return i.fn.apply(this, arguments)
                }
                ),
                i.del = p;
                var h = p || s;
                i.proxy = function(e) {
                    if (e = l(e),
                    !e.isImmediatePropagationStopped()) {
                        e.data = u;
                        var t = h.apply(n, e._args == f ? [e] : [e].concat(e._args));
                        return t === !1 && (e.preventDefault(),
                        e.stopPropagation()),
                        t
                    }
                }
                ,
                i.i = m.length,
                m.push(i),
                "addEventListener"in n && n.addEventListener(a(i.e), i.proxy, o(i, d))
            })
        }
        function u(e, r, i, s, u) {
            var l = t(e);
            (r || "").split(/\s/).forEach(function(t) {
                n(e, t, i, s).forEach(function(t) {
                    delete g[l][t.i],
                    "removeEventListener"in e && e.removeEventListener(a(t.e), t.proxy, o(t, u))
                })
            })
        }
        function l(t, n) {
            return !n && t.isDefaultPrevented || (n || (n = t),
            e.each(E, function(e, r) {
                var i = n[e];
                t[e] = function() {
                    return this[r] = w,
                    i && i.apply(n, arguments)
                }
                ,
                t[r] = _
            }),
            (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue"in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = w)),
            t
        }
        function c(e) {
            var t, n = {
                originalEvent: e
            };
            for (t in e)
                k.test(t) || e[t] === f || (n[t] = e[t]);
            return l(n, e)
        }
        var f, p = 1, d = Array.prototype.slice, h = e.isFunction, m = function(e) {
            return "string" == typeof e
        }, g = {}, v = {}, b = "onfocusin"in window, y = {
            focus: "focusin",
            blur: "focusout"
        }, x = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents",
        e.event = {
            add: s,
            remove: u
        },
        e.proxy = function(n, r) {
            var i = 2 in arguments && d.call(arguments, 2);
            if (h(n)) {
                var o = function() {
                    return n.apply(r, i ? i.concat(d.call(arguments)) : arguments)
                };
                return o._zid = t(n),
                o
            }
            if (m(r))
                return i ? (i.unshift(n[r], n),
                e.proxy.apply(null, i)) : e.proxy(n[r], n);
            throw new TypeError("expected function")
        }
        ,
        e.fn.bind = function(e, t, n) {
            return this.on(e, t, n)
        }
        ,
        e.fn.unbind = function(e, t) {
            return this.off(e, t)
        }
        ,
        e.fn.one = function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }
        ;
        var w = function() {
            return !0
        }
          , _ = function() {
            return !1
        }
          , k = /^([A-Z]|returnValue$|layer[XY]$)/
          , E = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        e.fn.delegate = function(e, t, n) {
            return this.on(t, e, n)
        }
        ,
        e.fn.undelegate = function(e, t, n) {
            return this.off(t, e, n)
        }
        ,
        e.fn.live = function(t, n) {
            return e(document.body).delegate(this.selector, t, n),
            this
        }
        ,
        e.fn.die = function(t, n) {
            return e(document.body).undelegate(this.selector, t, n),
            this
        }
        ,
        e.fn.on = function(t, n, r, i, o) {
            var a, l, p = this;
            return t && !m(t) ? (e.each(t, function(e, t) {
                p.on(e, n, r, t, o)
            }),
            p) : (m(n) || h(i) || i === !1 || (i = r,
            r = n,
            n = f),
            (h(r) || r === !1) && (i = r,
            r = f),
            i === !1 && (i = _),
            p.each(function(f, p) {
                o && (a = function(e) {
                    return u(p, e.type, i),
                    i.apply(this, arguments)
                }
                ),
                n && (l = function(t) {
                    var r, o = e(t.target).closest(n, p).get(0);
                    if (o && o !== p)
                        return r = e.extend(c(t), {
                            currentTarget: o,
                            liveFired: p
                        }),
                        (a || i).apply(o, [r].concat(d.call(arguments, 1)))
                }
                ),
                s(p, t, i, r, n, l || a)
            }))
        }
        ,
        e.fn.off = function(t, n, r) {
            var i = this;
            return t && !m(t) ? (e.each(t, function(e, t) {
                i.off(e, n, t)
            }),
            i) : (m(n) || h(r) || r === !1 || (r = n,
            n = f),
            r === !1 && (r = _),
            i.each(function() {
                u(this, t, r, n)
            }))
        }
        ,
        e.fn.trigger = function(t, n) {
            return t = m(t) || e.isPlainObject(t) ? e.Event(t) : l(t),
            t._args = n,
            this.each(function() {
                t.type in y && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent"in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
            })
        }
        ,
        e.fn.triggerHandler = function(t, r) {
            var i, o;
            return this.each(function(a, s) {
                i = c(m(t) ? e.Event(t) : t),
                i._args = r,
                i.target = s,
                e.each(n(s, t.type || t), function(e, t) {
                    if (o = t.proxy(i),
                    i.isImmediatePropagationStopped())
                        return !1
                })
            }),
            o
        }
        ,
        "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
            e.fn[t] = function(e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t)
            }
        }),
        e.Event = function(e, t) {
            m(e) || (t = e,
            e = t.type);
            var n = document.createEvent(v[e] || "Events")
              , r = !0;
            if (t)
                for (var i in t)
                    "bubbles" == i ? r = !!t[i] : n[i] = t[i];
            return n.initEvent(e, r, !0),
            l(n)
        }
    }(r),
    function(e) {
        function t(t, n, r) {
            var i = e.Event(n);
            return e(t).trigger(i, r),
            !i.isDefaultPrevented()
        }
        function n(e, n, r, i) {
            if (e.global)
                return t(n || b, r, i)
        }
        function r(t) {
            t.global && 0 === e.active++ && n(t, null, "ajaxStart")
        }
        function i(t) {
            t.global && !--e.active && n(t, null, "ajaxStop")
        }
        function o(e, t) {
            var r = t.context;
            return t.beforeSend.call(r, e, t) !== !1 && n(t, r, "ajaxBeforeSend", [e, t]) !== !1 && void n(t, r, "ajaxSend", [e, t])
        }
        function a(e, t, r, i) {
            var o = r.context
              , a = "success";
            r.success.call(o, e, a, t),
            i && i.resolveWith(o, [e, a, t]),
            n(r, o, "ajaxSuccess", [t, r, e]),
            u(a, t, r)
        }
        function s(e, t, r, i, o) {
            var a = i.context;
            i.error.call(a, r, t, e),
            o && o.rejectWith(a, [r, t, e]),
            n(i, a, "ajaxError", [r, i, e || t]),
            u(t, r, i)
        }
        function u(e, t, r) {
            var o = r.context;
            r.complete.call(o, t, e),
            n(r, o, "ajaxComplete", [t, r]),
            i(r)
        }
        function l() {}
        function c(e) {
            return e && (e = e.split(";", 2)[0]),
            e && (e == k ? "html" : e == _ ? "json" : x.test(e) ? "script" : w.test(e) && "xml") || "text"
        }
        function f(e, t) {
            return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }
        function p(t) {
            t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)),
            !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = f(t.url, t.data),
            t.data = void 0)
        }
        function d(t, n, r, i) {
            return e.isFunction(n) && (i = r,
            r = n,
            n = void 0),
            e.isFunction(r) || (i = r,
            r = void 0),
            {
                url: t,
                data: n,
                success: r,
                dataType: i
            }
        }
        function h(t, n, r, i) {
            var o, a = e.isArray(n), s = e.isPlainObject(n);
            e.each(n, function(n, u) {
                o = e.type(u),
                i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"),
                !i && a ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? h(t, u, r, n) : t.add(n, u)
            })
        }
        var m, g, v = 0, b = window.document, y = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, x = /^(?:text|application)\/javascript/i, w = /^(?:text|application)\/xml/i, _ = "application/json", k = "text/html", E = /^\s*$/, T = b.createElement("a");
        T.href = window.location.href,
        e.active = 0,
        e.ajaxJSONP = function(t, n) {
            if (!("type"in t))
                return e.ajax(t);
            var r, i, u = t.jsonpCallback, l = (e.isFunction(u) ? u() : u) || "jsonp" + ++v, c = b.createElement("script"), f = window[l], p = function(t) {
                e(c).triggerHandler("error", t || "abort")
            }, d = {
                abort: p
            };
            return n && n.promise(d),
            e(c).on("load error", function(o, u) {
                clearTimeout(i),
                e(c).off().remove(),
                "error" != o.type && r ? a(r[0], d, t, n) : s(null, u || "error", d, t, n),
                window[l] = f,
                r && e.isFunction(f) && f(r[0]),
                f = r = void 0
            }),
            o(d, t) === !1 ? (p("abort"),
            d) : (window[l] = function() {
                r = arguments
            }
            ,
            c.src = t.url.replace(/\?(.+)=\?/, "?$1=" + l),
            b.head.appendChild(c),
            t.timeout > 0 && (i = setTimeout(function() {
                p("timeout")
            }, t.timeout)),
            d)
        }
        ,
        e.ajaxSettings = {
            type: "GET",
            beforeSend: l,
            success: l,
            error: l,
            complete: l,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: _,
                xml: "application/xml, text/xml",
                html: k,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        },
        e.ajax = function(t) {
            var n, i = e.extend({}, t || {}), u = e.Deferred && e.Deferred();
            for (m in e.ajaxSettings)
                void 0 === i[m] && (i[m] = e.ajaxSettings[m]);
            r(i),
            i.crossDomain || (n = b.createElement("a"),
            n.href = i.url,
            n.href = n.href,
            i.crossDomain = T.protocol + "//" + T.host != n.protocol + "//" + n.host),
            i.url || (i.url = window.location.toString()),
            p(i);
            var d = i.dataType
              , h = /\?.+=\?/.test(i.url);
            if (h && (d = "jsonp"),
            i.cache !== !1 && (t && t.cache === !0 || "script" != d && "jsonp" != d) || (i.url = f(i.url, "_=" + Date.now())),
            "jsonp" == d)
                return h || (i.url = f(i.url, i.jsonp ? i.jsonp + "=?" : i.jsonp === !1 ? "" : "callback=?")),
                e.ajaxJSONP(i, u);
            var v, y = i.accepts[d], x = {}, w = function(e, t) {
                x[e.toLowerCase()] = [e, t]
            }, _ = /^([\w-]+:)\/\//.test(i.url) ? RegExp.$1 : window.location.protocol, k = i.xhr(), M = k.setRequestHeader;
            if (u && u.promise(k),
            i.crossDomain || w("X-Requested-With", "XMLHttpRequest"),
            w("Accept", y || "*/*"),
            (y = i.mimeType || y) && (y.indexOf(",") > -1 && (y = y.split(",", 2)[0]),
            k.overrideMimeType && k.overrideMimeType(y)),
            (i.contentType || i.contentType !== !1 && i.data && "GET" != i.type.toUpperCase()) && w("Content-Type", i.contentType || "application/x-www-form-urlencoded"),
            i.headers)
                for (g in i.headers)
                    w(g, i.headers[g]);
            if (k.setRequestHeader = w,
            k.onreadystatechange = function() {
                if (4 == k.readyState) {
                    k.onreadystatechange = l,
                    clearTimeout(v);
                    var t, n = !1;
                    if (k.status >= 200 && k.status < 300 || 304 == k.status || 0 == k.status && "file:" == _) {
                        d = d || c(i.mimeType || k.getResponseHeader("content-type")),
                        t = k.responseText;
                        try {
                            "script" == d ? (0,
                            eval)(t) : "xml" == d ? t = k.responseXML : "json" == d && (t = E.test(t) ? null : e.parseJSON(t))
                        } catch (e) {
                            n = e
                        }
                        n ? s(n, "parsererror", k, i, u) : a(t, k, i, u)
                    } else
                        s(k.statusText || null, k.status ? "error" : "abort", k, i, u)
                }
            }
            ,
            o(k, i) === !1)
                return k.abort(),
                s(null, "abort", k, i, u),
                k;
            if (i.xhrFields)
                for (g in i.xhrFields)
                    k[g] = i.xhrFields[g];
            var S = !("async"in i) || i.async;
            k.open(i.type, i.url, S, i.username, i.password);
            for (g in x)
                M.apply(k, x[g]);
            return i.timeout > 0 && (v = setTimeout(function() {
                k.onreadystatechange = l,
                k.abort(),
                s(null, "timeout", k, i, u)
            }, i.timeout)),
            k.send(i.data ? i.data : null),
            k
        }
        ,
        e.get = function() {
            return e.ajax(d.apply(null, arguments))
        }
        ,
        e.post = function() {
            var t = d.apply(null, arguments);
            return t.type = "POST",
            e.ajax(t)
        }
        ,
        e.getJSON = function() {
            var t = d.apply(null, arguments);
            return t.dataType = "json",
            e.ajax(t)
        }
        ,
        e.fn.load = function(t, n, r) {
            if (!this.length)
                return this;
            var i, o = this, a = t.split(/\s/), s = d(t, n, r), u = s.success;
            return a.length > 1 && (s.url = a[0],
            i = a[1]),
            s.success = function(t) {
                o.html(i ? e("<div>").html(t.replace(y, "")).find(i) : t),
                u && u.apply(o, arguments)
            }
            ,
            e.ajax(s),
            this
        }
        ;
        var M = encodeURIComponent;
        e.param = function(t, n) {
            var r = [];
            return r.add = function(t, n) {
                e.isFunction(n) && (n = n()),
                null == n && (n = ""),
                this.push(M(t) + "=" + M(n))
            }
            ,
            h(r, t, n),
            r.join("&").replace(/%20/g, "+")
        }
    }(r),
    function(e) {
        e.fn.serializeArray = function() {
            var t, n, r = [], i = function(e) {
                return e.forEach ? e.forEach(i) : void r.push({
                    name: t,
                    value: e
                })
            };
            return this[0] && e.each(this[0].elements, function(r, o) {
                n = o.type,
                t = o.name,
                t && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(e(o).val())
            }),
            r
        }
        ,
        e.fn.serialize = function() {
            var e = [];
            return this.serializeArray().forEach(function(t) {
                e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
            }),
            e.join("&")
        }
        ,
        e.fn.submit = function(t) {
            if (0 in arguments)
                this.bind("submit", t);
            else if (this.length) {
                var n = e.Event("submit");
                this.eq(0).trigger(n),
                n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(r),
    function(e) {
        "__proto__"in {} || e.extend(e.zepto, {
            Z: function(t, n) {
                return t = t || [],
                e.extend(t, e.fn),
                t.selector = n || "",
                t.__Z = !0,
                t
            },
            isZ: function(t) {
                return "array" === e.type(t) && "__Z"in t
            }
        });
        try {
            getComputedStyle(void 0)
        } catch (e) {
            var t = getComputedStyle;
            window.getComputedStyle = function(e) {
                try {
                    return t(e)
                } catch (e) {
                    return null
                }
            }
        }
    }(r),
    e.exports = r
}
, function(e, t) {
    "use strict";
    !function(e, t, n, r, i) {
        window.ttGTM = function() {
            function e() {
                for (t = !0; r.length; ) {
                    var e = r.shift();
                    "function" == typeof e && e()
                }
            }
            var t = !1
              , n = {
                atOnce: !1
            }
              , r = [];
            return {
                ready: function(e, i) {
                    i = $.extend({}, n, i),
                    t || i.atOnce ? "function" == typeof e && e() : r.push(e)
                },
                gtmDownReady: e
            }
        }(),
        e[r] = e[r] || [],
        e[r].push({
            "gtm.start": (new Date).getTime(),
            event: "gtm.js"
        });
        var o = t.getElementsByTagName(n)[0]
          , a = t.createElement(n)
          , s = "dataLayer" != r ? "&l=" + r : "";
        a.async = !0,
        a.src = "//www.googletagmanager.com/gtm.js?id=" + i + s,
        a.onload = function() {
            setTimeout(function() {
                ttGTM.gtmDownReady()
            }, 0)
        }
        ,
        o.parentNode.insertBefore(a, o)
    }(window, document, "script", "dataLayer", "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ? "GTM-K9DDWQ" : "GTM-NRPFDC")
}
]);
