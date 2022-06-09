(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [function(e, t, n) {
        "use strict";
        n.d(t, "k", (function() {
            return x
        })), n.d(t, "m", (function() {
            return _
        })), n.d(t, "l", (function() {
            return w
        })), n.d(t, "e", (function() {
            return k
        })), n.d(t, "b", (function() {
            return j
        })), n.d(t, "s", (function() {
            return O
        })), n.d(t, "g", (function() {
            return C
        })), n.d(t, "h", (function() {
            return M
        })), n.d(t, "d", (function() {
            return R
        })), n.d(t, "r", (function() {
            return $
        })), n.d(t, "j", (function() {
            return P
        })), n.d(t, "t", (function() {
            return E
        })), n.d(t, "o", (function() {
            return z
        })), n.d(t, "q", (function() {
            return S
        })), n.d(t, "f", (function() {
            return I
        })), n.d(t, "c", (function() {
            return L
        })), n.d(t, "i", (function() {
            return D
        })), n.d(t, "p", (function() {
            return N
        })), n.d(t, "a", (function() {
            return V
        })), n.d(t, "u", (function() {
            return Q
        })), n.d(t, "n", (function() {
            return G
        }));
        n(43), n(53), n(62), n(111), n(40), n(113), n(78), n(226), n(80), n(16), n(196), n(38), n(74), n(88), n(51), n(228), n(60), n(130), n(124), n(49);
        var r = n(4),
            o = (n(45), n(11)),
            c = n(28),
            l = n(24),
            f = n(1),
            d = n(31);

        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function m(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function v(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return y(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return c = e.done, e
                },
                e: function(e) {
                    l = !0, o = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }

        function x(e) {
            f.a.config.errorHandler && f.a.config.errorHandler(e)
        }

        function _(e) {
            return e.then((function(e) {
                return e.default || e
            }))
        }

        function w(e) {
            return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
        }

        function k(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                r = e.$children || [],
                o = v(r);
            try {
                for (o.s(); !(t = o.n()).done;) {
                    var c = t.value;
                    c.$fetch ? n.push(c) : c.$children && k(c, n)
                }
            } catch (e) {
                o.e(e)
            } finally {
                o.f()
            }
            return n
        }

        function j(e, t) {
            if (t || !e.options.__hasNuxtData) {
                var n = e.options._originDataFn || e.options.data || function() {
                    return {}
                };
                e.options._originDataFn = n, e.options.data = function() {
                    var data = n.call(this, this);
                    return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), m(m({}, data), t)
                }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
            }
        }

        function O(e) {
            return e.options && e._Ctor === e || (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = f.a.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file)), e
        }

        function C(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], e.matched.map((function(e, r) {
                return Object.keys(e[n]).map((function(o) {
                    return t && t.push(r), e[n][o]
                }))
            })))
        }

        function M(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return C(e, t, "instances")
        }

        function R(e, t) {
            return Array.prototype.concat.apply([], e.matched.map((function(e, n) {
                return Object.keys(e.components).reduce((function(r, o) {
                    return e.components[o] ? r.push(t(e.components[o], e.instances[o], e, o, n)) : delete e.components[o], r
                }), [])
            })))
        }

        function $(e, t) {
            return Promise.all(R(e, function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(n, r, o, c) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("function" != typeof n || n.options) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 3, n();
                            case 3:
                                n = e.sent;
                            case 4:
                                return o.components[c] = n = O(n), e.abrupt("return", "function" == typeof t ? t(n, r, o, c) : n);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, n, r, o) {
                    return e.apply(this, arguments)
                }
            }()))
        }

        function P(e) {
            return A.apply(this, arguments)
        }

        function A() {
            return (A = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4, $(t);
                        case 4:
                            return e.abrupt("return", m(m({}, t), {}, {
                                meta: C(t).map((function(e, n) {
                                    return m(m({}, e.options.meta), (t.matched[n] || {}).meta)
                                }))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function E(e, t) {
            return T.apply(this, arguments)
        }

        function T() {
            return (T = Object(o.a)(regeneratorRuntime.mark((function e(t, n) {
                var o, c, f, h;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t.context || (t.context = {
                                isStatic: !1,
                                isDev: !1,
                                isHMR: !1,
                                app: t,
                                store: t.store,
                                payload: n.payload,
                                error: n.error,
                                base: t.router.options.base,
                                env: {}
                            }, n.req && (t.context.req = n.req), n.res && (t.context.res = n.res), n.ssrContext && (t.context.ssrContext = n.ssrContext), t.context.redirect = function(e, path, n) {
                                if (e) {
                                    t.context._redirected = !0;
                                    var o = Object(r.a)(path);
                                    if ("number" == typeof e || "undefined" !== o && "object" !== o || (n = path || {}, path = e, o = Object(r.a)(path), e = 302), "object" === o && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(d.d)(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                    t.context.next({
                                        path: path,
                                        query: n,
                                        status: e
                                    })
                                }
                            }, t.context.nuxtState = window.__NUXT__), e.next = 3, Promise.all([P(n.route), P(n.from)]);
                        case 3:
                            o = e.sent, c = Object(l.a)(o, 2), f = c[0], h = c[1], n.route && (t.context.route = f), n.from && (t.context.from = h), t.context.next = n.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function z(e, t) {
            return !e.length || t._redirected || t._errored ? Promise.resolve() : S(e[0], t).then((function() {
                return z(e.slice(1), t)
            }))
        }

        function S(e, t) {
            var n;
            return (n = 2 === e.length ? new Promise((function(n) {
                e(t, (function(e, data) {
                    e && t.error(e), n(data = data || {})
                }))
            })) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
        }

        function I(base, e) {
            if ("hash" === e) return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var t = (path || "/") + window.location.search + window.location.hash;
            return Object(d.c)(t)
        }

        function L(e, t) {
            return function(e, t) {
                for (var n = new Array(e.length), i = 0; i < e.length; i++) "object" === Object(r.a)(e[i]) && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", F(t)));
                return function(t, r) {
                    for (var path = "", data = t || {}, o = (r || {}).pretty ? H : encodeURIComponent, c = 0; c < e.length; c++) {
                        var l = e[c];
                        if ("string" != typeof l) {
                            var f = data[l.name || "pathMatch"],
                                d = void 0;
                            if (null == f) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(f)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                                if (0 === f.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var h = 0; h < f.length; h++) {
                                    if (d = o(f[h]), !n[c].test(d)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(d) + "`");
                                    path += (0 === h ? l.prefix : l.delimiter) + d
                                }
                            } else {
                                if (d = l.asterisk ? U(f) : o(f), !n[c].test(d)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
                                path += l.prefix + d
                            }
                        } else path += l
                    }
                    return path
                }
            }(function(e, t) {
                var n, r = [],
                    o = 0,
                    c = 0,
                    path = "",
                    l = t && t.delimiter || "/";
                for (; null != (n = B.exec(e));) {
                    var f = n[0],
                        d = n[1],
                        h = n.index;
                    if (path += e.slice(c, h), c = h + f.length, d) path += d[1];
                    else {
                        var m = e[c],
                            v = n[2],
                            y = n[3],
                            x = n[4],
                            _ = n[5],
                            w = n[6],
                            k = n[7];
                        path && (r.push(path), path = "");
                        var j = null != v && null != m && m !== v,
                            O = "+" === w || "*" === w,
                            C = "?" === w || "*" === w,
                            M = n[2] || l,
                            pattern = x || _;
                        r.push({
                            name: y || o++,
                            prefix: v || "",
                            delimiter: M,
                            optional: C,
                            repeat: O,
                            partial: j,
                            asterisk: Boolean(k),
                            pattern: pattern ? Z(pattern) : k ? ".*" : "[^" + W(M) + "]+?"
                        })
                    }
                }
                c < e.length && (path += e.substr(c));
                path && r.push(path);
                return r
            }(e, t), t)
        }

        function D(e, t) {
            var n = {},
                r = m(m({}, e), t);
            for (var o in r) String(e[o]) !== String(t[o]) && (n[o] = !0);
            return n
        }

        function N(e) {
            var t;
            if (e.message || "string" == typeof e) t = e.message || e;
            else try {
                t = JSON.stringify(e, null, 2)
            } catch (n) {
                t = "[".concat(e.constructor.name, "]")
            }
            return m(m({}, e), {}, {
                message: t,
                statusCode: e.statusCode || e.status || e.response && e.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = function(e) {
            window.onNuxtReadyCbs.push(e)
        };
        var B = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function H(e, t) {
            var n = t ? /[?#]/g : /[/?#]/g;
            return encodeURI(e).replace(n, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function U(e) {
            return H(e, !0)
        }

        function W(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function Z(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }

        function F(e) {
            return e && e.sensitive ? "" : "i"
        }

        function V(e, t, n) {
            e.$options[t] || (e.$options[t] = []), e.$options[t].includes(n) || e.$options[t].push(n)
        }
        var Q = d.b,
            G = (d.e, d.a)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n(43), n(53), n(40), n(38), n(75), n(201);
        var r = n(5),
            o = n(15),
            c = function() {
                function e() {
                    Object(r.a)(this, e), this.cookieName = "cookieManager", this.currentCookieVersion = "v1.1"
                }
                return Object(o.a)(e, [{
                    key: "setCookie",
                    value: function(e, t, n) {
                        var r = new Date;
                        r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
                        var o = "expires=".concat(r.toUTCString());
                        document.cookie = "".concat(e, "=").concat(t, ";path=/; ").concat(o)
                    }
                }, {
                    key: "getCookie",
                    value: function(e) {
                        var t = e.length + 1;
                        return document.cookie.split(";").map((function(e) {
                            return e.trim()
                        })).filter((function(n) {
                            return n.substring(0, t) === "".concat(e, "=")
                        })).map((function(e) {
                            return decodeURIComponent(e.substring(t))
                        }))[0] || null
                    }
                }, {
                    key: "setPreference",
                    value: function(e) {
                        e.essential = !0;
                        var t = {
                                timestamp: (new Date).toISOString(),
                                version: this.currentCookieVersion,
                                purposes: e
                            },
                            n = JSON.stringify(t);
                        this.setCookie(this.cookieName, n, 365), window.location.reload()
                    }
                }, {
                    key: "acceptAllCookies",
                    value: function() {
                        this.setPreference({
                            essential: !0,
                            performance: {
                                matomo: !0
                            }
                        })
                    }
                }, {
                    key: "rejectAllCookies",
                    value: function() {
                        this.setPreference({
                            essential: !0,
                            performance: {
                                matomo: !1
                            }
                        })
                    }
                }, {
                    key: "areCookiesAcknowledged",
                    value: function() {
                        return !!this.getCookie(this.cookieName) && this.validateCookie()
                    }
                }, {
                    key: "getParsedCookies",
                    value: function() {
                        var e = this.getCookie(this.cookieName);
                        return e ? JSON.parse(e) : null
                    }
                }, {
                    key: "isMatomoAccepted",
                    value: function() {
                        if (!this.areCookiesAcknowledged()) return !1;
                        var e = this.getParsedCookies();
                        return !!e && e.purposes.performance.matomo
                    }
                }, {
                    key: "validateCookie",
                    value: function() {
                        var e, t = this.getCookie(this.cookieName);
                        if (!t) return this.invalidateCookie(), !1;
                        try {
                            e = JSON.parse(t)
                        } catch (e) {
                            return this.invalidateCookie(), !1
                        }
                        return e.version !== this.currentCookieVersion ? (console.info("Cookie version mismatch"), this.setCookie(this.cookieName, "", -1e3), !1) : !!this.validateCookieProperties(e) || (this.invalidateCookie(), !1)
                    }
                }, {
                    key: "validateCookieProperties",
                    value: function(e) {
                        if (!this.checkOwnProperty(e, "version")) return !1;
                        if (!this.checkOwnProperty(e, "timestamp")) return !1;
                        if (!this.checkOwnProperty(e, "purposes")) return !1;
                        var t = e.purposes;
                        if (!this.checkOwnProperty(t, "essential")) return !1;
                        if (!this.checkOwnProperty(t, "performance")) return !1;
                        var n = t.performance;
                        return !!this.checkOwnProperty(n, "matomo")
                    }
                }, {
                    key: "checkOwnProperty",
                    value: function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                }, {
                    key: "invalidateCookie",
                    value: function() {
                        console.error("COOKIE INVALID!"), this.setCookie(this.cookieName, "", -1e3), window.location.reload()
                    }
                }]), e
            }();
        t.a = new c
    }, function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return We
        })), n.d(t, "a", (function() {
            return U
        }));
        n(40), n(78), n(16), n(45);
        var r = n(11),
            o = n(28),
            c = n(1),
            l = n(58),
            f = n(173),
            d = n(108),
            h = n.n(d),
            m = n(48),
            v = n.n(m),
            y = n(109),
            x = n(31),
            _ = n(0);
        n(42);

        function w() {
            return (w = Object(r.a)(regeneratorRuntime.mark((function e(t, n, o) {
                var c, l;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!o) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", o);
                        case 2:
                            if (c = function() {
                                    var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                                        var n, r = arguments;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return n = r.length > 1 && void 0 !== r[1] ? r[1] : 0, e.abrupt("return", document.querySelector(t) || new Promise((function(e) {
                                                        if (n > 50) return e(document.querySelector("#app"));
                                                        setTimeout((function() {
                                                            e(c(t, ++n || 1))
                                                        }), 100)
                                                    })));
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(), !t.hash) {
                                e.next = 10;
                                break
                            }
                            return e.next = 6, c(t.hash);
                        case 6:
                            if (l = e.sent) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return", {
                                x: 0,
                                y: 0
                            });
                        case 9:
                            return e.abrupt("return", window.scrollTo(0, window.scrollY + l.getBoundingClientRect().top));
                        case 10:
                            return e.abrupt("return", {
                                x: 0,
                                y: 0
                            });
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function k(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function j(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? k(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : k(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var O = function() {};
        c.a.use(y.a);
        var C = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(e, t, n) {
                return w.apply(this, arguments)
            },
            routes: [{
                path: "/404",
                component: function() {
                    return Object(_.m)(n.e(8).then(n.bind(null, 878)))
                },
                name: "404"
            }, {
                path: "/contact",
                component: function() {
                    return Object(_.m)(n.e(9).then(n.bind(null, 879)))
                },
                name: "contact"
            }, {
                path: "/cookie-policy",
                component: function() {
                    return Object(_.m)(n.e(10).then(n.bind(null, 880)))
                },
                name: "cookie-policy"
            }, {
                path: "/hytale",
                component: function() {
                    return Object(_.m)(n.e(11).then(n.bind(null, 874)))
                },
                name: "hytale"
            }, {
                path: "/jobs",
                component: function() {
                    return Object(_.m)(n.e(15).then(n.bind(null, 888)))
                },
                children: [{
                    path: "",
                    component: function() {
                        return Object(_.m)(n.e(16).then(n.bind(null, 872)))
                    },
                    name: "jobs-index"
                }]
            }, {
                path: "/legal",
                component: function() {
                    return Object(_.m)(n.e(18).then(n.bind(null, 889)))
                },
                children: [{
                    path: "",
                    component: function() {
                        return Object(_.m)(n.e(19).then(n.bind(null, 881)))
                    },
                    name: "legal-index"
                }]
            }, {
                path: "/our-team",
                component: function() {
                    return Object(_.m)(Promise.all([n.e(3), n.e(28), n.e(20)]).then(n.bind(null, 873)))
                },
                name: "our-team"
            }, {
                path: "/press",
                component: function() {
                    return Object(_.m)(n.e(21).then(n.bind(null, 882)))
                },
                name: "press"
            }, {
                path: "/privacy",
                component: function() {
                    return Object(_.m)(n.e(22).then(n.bind(null, 883)))
                },
                name: "privacy"
            }, {
                path: "/security",
                component: function() {
                    return Object(_.m)(n.e(23).then(n.bind(null, 884)))
                },
                name: "security"
            }, {
                path: "/who-we-are",
                component: function() {
                    return Object(_.m)(n.e(24).then(n.bind(null, 876)))
                },
                name: "who-we-are"
            }, {
                path: "/jobs/data-protection-statement",
                component: function() {
                    return Object(_.m)(n.e(14).then(n.bind(null, 885)))
                },
                name: "jobs-data-protection-statement"
            }, {
                path: "/legal/corporate-governance",
                component: function() {
                    return Object(_.m)(n.e(17).then(n.bind(null, 886)))
                },
                name: "legal-corporate-governance"
            }, {
                path: "/jobs/:job",
                component: function() {
                    return Object(_.m)(n.e(13).then(n.bind(null, 877)))
                },
                name: "jobs-job"
            }, {
                path: "/",
                component: function() {
                    return Object(_.m)(n.e(12).then(n.bind(null, 875)))
                },
                name: "index"
            }],
            fallback: !1
        };

        function M(e, t) {
            var base = t.app && t.app.basePath || C.base,
                n = new y.a(j(j({}, C), {}, {
                    base: base
                })),
                r = n.push;
            n.push = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return r.call(this, e, t, n)
            };
            var o = n.resolve.bind(n);
            return n.resolve = function(e, t, n) {
                return "string" == typeof e && (e = Object(x.c)(e)), o(e, t, n)
            }, n
        }
        n(61);
        var R = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render: function(e, t) {
                    var n = t.parent,
                        data = t.data,
                        r = t.props,
                        o = n.$createElement;
                    data.nuxtChild = !0;
                    for (var c = n, l = n.$nuxt.nuxt.transitions, f = n.$nuxt.nuxt.defaultTransition, d = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && d++, n = n.$parent;
                    data.nuxtChildDepth = d;
                    var h = l[d] || f,
                        m = {};
                    $.forEach((function(e) {
                        void 0 !== h[e] && (m[e] = h[e])
                    }));
                    var v = {};
                    P.forEach((function(e) {
                        "function" == typeof h[e] && (v[e] = h[e].bind(c))
                    }));
                    var y = v.beforeEnter;
                    if (v.beforeEnter = function(e) {
                            if (window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), y) return y.call(c, e)
                        }, !1 === h.css) {
                        var x = v.leave;
                        (!x || x.length < 2) && (v.leave = function(e, t) {
                            x && x.call(c, e), c.$nextTick(t)
                        })
                    }
                    var _ = o("routerView", data);
                    return r.keepAlive && (_ = o("keep-alive", {
                        props: r.keepAliveProps
                    }, [_])), o("transition", {
                        props: m,
                        on: v
                    }, [_])
                }
            },
            $ = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            P = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            A = (n(27), n(5)),
            E = n(12),
            T = n(13),
            z = n(3),
            S = n(4),
            I = n(2);

        function L(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(z.a)(e);
                if (t) {
                    var o = Object(z.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(T.a)(this, n)
            }
        }
        var D = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(S.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            N = function(e) {
                Object(E.a)(n, e);
                var t = L(n);

                function n() {
                    return Object(A.a)(this, n), t.apply(this, arguments)
                }
                return n
            }(I.c);
        D([Object(I.b)({
            type: Object
        })], N.prototype, "error", void 0);
        var B = N = D([Object(I.a)({
                head: {
                    title: "404"
                }
            })], N),
            H = (n(237), n(8)),
            U = Object(H.a)(B, (function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    staticClass: "view-error hy-content-page hy-content-page_text"
                }, [r("div", {
                    staticClass: "hy-content-page__background-image hy-content-page__background-image_grasslands"
                }), e._v(" "), r("div", {
                    staticClass: "hy-content-page__content"
                }, [r("h1", [e._v("Error " + e._s(e.error.statusCode))]), e._v(" "), r("item-divider"), e._v(" "), r("div", {
                    staticClass: "view-error__content hy-mar-t-4"
                }, [404 === e.error.statusCode ? r("p", {}, [e._v("\n        Whoops! It seems that we’re not able to find what you are looking for. Please try again later or "), r("nuxt-link", {
                    attrs: {
                        to: {
                            name: "index"
                        }
                    }
                }, [e._v("return to the homepage")]), e._v(".\n      ")], 1) : r("p", [e._v("\n        Whoops! An error occurred.\n      ")]), e._v(" "), r("img", {
                    staticClass: "hy-pad-t-3 view-error__404-image",
                    attrs: {
                        src: n(213),
                        alt: "kweebec sunbath"
                    }
                })])], 1)])
            }), [], !1, null, "42df1dcc", null).exports,
            W = (n(38), n(74), n(60), n(24)),
            Z = {
                name: "Nuxt",
                components: {
                    NuxtChild: R,
                    NuxtError: U
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured: function(e) {
                    this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(_.c)(this.$route.matched[0].path)(this.$route.params);
                        var e = Object(W.a)(this.$route.matched, 1)[0];
                        if (!e) return this.$route.path;
                        var t = e.components.default;
                        if (t && t.options) {
                            var n = t.options;
                            if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                        }
                        return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function() {
                    c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function(e) {
                    var t = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                        return t.errorFromNuxtError = !1
                    })), e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                        return t.displayingNuxtError = !1
                    })), e(U, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : e("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            },
            F = (n(51), n(49), {
                name: "NuxtLoading",
                data: function() {
                    return {
                        percent: 0,
                        show: !1,
                        canSucceed: !0,
                        reversed: !1,
                        skipTimerCount: 0,
                        rtl: !1,
                        throttle: 200,
                        duration: 5e3,
                        continuous: !1
                    }
                },
                computed: {
                    left: function() {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                },
                beforeDestroy: function() {
                    this.clear()
                },
                methods: {
                    clear: function() {
                        clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                    },
                    start: function() {
                        var e = this;
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                            return e.startTimer()
                        }), this.throttle) : this.startTimer(), this
                    },
                    set: function(e) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(e))), this
                    },
                    get: function() {
                        return this.percent
                    },
                    increase: function(e) {
                        return this.percent = Math.min(100, Math.floor(this.percent + e)), this
                    },
                    decrease: function(e) {
                        return this.percent = Math.max(0, Math.floor(this.percent - e)), this
                    },
                    pause: function() {
                        return clearInterval(this._timer), this
                    },
                    resume: function() {
                        return this.startTimer(), this
                    },
                    finish: function() {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    },
                    hide: function() {
                        var e = this;
                        return this.clear(), setTimeout((function() {
                            e.show = !1, e.$nextTick((function() {
                                e.percent = 0, e.reversed = !1
                            }))
                        }), 500), this
                    },
                    fail: function(e) {
                        return this.canSucceed = !1, this
                    },
                    startTimer: function() {
                        var e = this;
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                            e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut), e.continuous && (e.percent >= 100 || e.percent <= 0) && (e.skipTimerCount = 1, e.reversed = !e.reversed))
                        }), 100)
                    }
                },
                render: function(e) {
                    var t = e(!1);
                    return this.show && (t = e("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {
                            width: this.percent + "%",
                            left: this.left
                        }
                    })), t
                }
            }),
            V = (n(239), Object(H.a)(F, undefined, undefined, !1, null, null, null).exports),
            Q = (n(241), n(43), n(15)),
            G = n(185),
            J = n(187),
            X = n(188),
            K = n(189),
            Y = n(181),
            ee = n.n(Y);

        function te(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(z.a)(e);
                if (t) {
                    var o = Object(z.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(T.a)(this, n)
            }
        }
        var ne = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(S.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            re = function(e) {
                Object(E.a)(n, e);
                var t = te(n);

                function n() {
                    var e;
                    return Object(A.a)(this, n), (e = t.apply(this, arguments)).mobileMenuOpened = !1, e.activatingVaryn = !1, e
                }
                return Object(Q.a)(n, [{
                    key: "varyn",
                    get: function() {
                        return this.$store.state["konami-code"].varyn || !1
                    }
                }, {
                    key: "toggleMobileMenu",
                    value: function() {
                        this.mobileMenuOpened = !this.mobileMenuOpened
                    }
                }, {
                    key: "mounted",
                    value: function() {
                        var e = this;
                        ee()((function() {
                            e.activatingVaryn = !0, setTimeout((function() {
                                e.$store.commit("konami-code/toggleVaryn"), e.$router.push({
                                    name: "index"
                                }), window.scrollTo(0, 0), setTimeout((function() {
                                    e.activatingVaryn = !1
                                }), 100)
                            }), 1500)
                        }))
                    }
                }]), n
            }(I.c),
            oe = re = ne([Object(I.a)({
                components: {
                    AppHeader: G.default,
                    AppFooter: J.default,
                    MobileMenu: X.default,
                    CookieBar: K.default
                },
                scrollToTop: !0,
                head: function() {
                    return {
                        title: "",
                        titleTemplate: function(e) {
                            var t = "Hypixel Studios";
                            return e ? "".concat(e, " – ").concat(t) : t
                        },
                        link: [{
                            rel: "canonical",
                            href: "https://hypixelstudios.com" + this.$route.path
                        }],
                        meta: [{
                            hid: "twitter:site",
                            property: "twitter:site",
                            content: "hypixel"
                        }, {
                            hid: "twitter:card",
                            property: "twitter:card",
                            content: "summary"
                        }, {
                            hid: "og:locale",
                            property: "og:locale",
                            content: "en_US"
                        }, {
                            hid: "og:site_name",
                            property: "og:site_name",
                            content: "Hypixel Studios"
                        }, {
                            hid: "og:type",
                            property: "og:type",
                            content: "website"
                        }, {
                            hid: "og:url",
                            property: "og:url",
                            content: "https://hypixelstudios.com" + this.$route.path
                        }, {
                            hid: "description",
                            name: "description",
                            content: "Hypixel Studios is the developer of Hytale. Our mission is to empower gaming communities - find out more and view the latest job openings here."
                        }, {
                            hid: "og:description",
                            name: "og:description",
                            content: "Hypixel Studios is the developer of Hytale. Our mission is to empower gaming communities - find out more and view the latest job openings here."
                        }, {
                            hid: "og:image",
                            property: "og:image",
                            content: "https://hypixelstudios.com/imgs/hypixel-logo-square-black.jpg"
                        }, {
                            hid: "twitter:image",
                            name: "twitter:image",
                            content: "https://hypixelstudios.com/imgs/hypixel-logo-square-black.jpg"
                        }]
                    }
                }
            })], re),
            ie = (n(261), Object(H.a)(oe, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "hypixel-app",
                    class: {
                        "hypixel-app_varyn": e.varyn
                    },
                    attrs: {
                        id: "app"
                    }
                }, [n("app-header", {
                    on: {
                        "toggle-mobile-menu": e.toggleMobileMenu
                    }
                }), e._v(" "), n("mobile-menu", {
                    model: {
                        value: e.mobileMenuOpened,
                        callback: function(t) {
                            e.mobileMenuOpened = t
                        },
                        expression: "mobileMenuOpened"
                    }
                }), e._v(" "), n("nuxt", {
                    staticClass: "hypixel-app__view"
                }), e._v(" "), n("app-footer"), e._v(" "), n("client-only", [n("cookie-bar")], 1), e._v(" "), n("transition", {
                    attrs: {
                        name: "fade-varyn"
                    }
                }, [e.activatingVaryn ? n("div", {
                    staticClass: "hypixel-app__varyn-overlay"
                }) : e._e()])], 1)
            }), [], !1, null, null, null).exports);

        function ae(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return ce(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return c = e.done, e
                },
                e: function(e) {
                    l = !0, o = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function ce(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        var se = {
                _default: Object(_.s)(ie)
            },
            ue = {
                render: function(e, t) {
                    var n = e("NuxtLoading", {
                            ref: "loading"
                        }),
                        r = e(this.layout || "nuxt"),
                        o = e("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [r]),
                        c = e("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter: function(e) {
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [o]);
                    return e("div", {
                        domProps: {
                            id: "__nuxt"
                        }
                    }, [n, c])
                },
                data: function() {
                    return {
                        isOnline: !0,
                        layout: null,
                        layoutName: "",
                        nbFetching: 0
                    }
                },
                beforeCreate: function() {
                    c.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created: function() {
                    this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                mounted: function() {
                    var e = this;
                    return Object(r.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.$loading = e.$refs.loading;
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                watch: {
                    "nuxt.err": "errorChanged"
                },
                computed: {
                    isOffline: function() {
                        return !this.isOnline
                    },
                    isFetching: function() {
                        return this.nbFetching > 0
                    }
                },
                methods: {
                    refreshOnlineStatus: function() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh: function() {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ((n = Object(_.h)(e.$route)).length) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return e.$loading.start(), r = n.map((function(t) {
                                            var p = [];
                                            if (t.$options.fetch && t.$options.fetch.length && p.push(Object(_.q)(t.$options.fetch, e.context)), t.$fetch) p.push(t.$fetch());
                                            else {
                                                var n, r = ae(Object(_.e)(t.$vnode.componentInstance));
                                                try {
                                                    for (r.s(); !(n = r.n()).done;) {
                                                        var component = n.value;
                                                        p.push(component.$fetch())
                                                    }
                                                } catch (e) {
                                                    r.e(e)
                                                } finally {
                                                    r.f()
                                                }
                                            }
                                            return t.$options.asyncData && p.push(Object(_.q)(t.$options.asyncData, e.context).then((function(e) {
                                                for (var n in e) c.a.set(t.$data, n, e[n])
                                            }))), Promise.all(p)
                                        })), t.prev = 5, t.next = 8, Promise.all(r);
                                    case 8:
                                        t.next = 15;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t.catch(5), e.$loading.fail(t.t0), Object(_.k)(t.t0), e.error(t.t0);
                                    case 15:
                                        e.$loading.finish();
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [5, 10]
                            ])
                        })))()
                    },
                    errorChanged: function() {
                        if (this.nuxt.err) {
                            this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                            var e = (U.options || U).layout;
                            "function" == typeof e && (e = e(this.context)), this.setLayout(e)
                        }
                    },
                    setLayout: function(e) {
                        return e && se["_" + e] || (e = "default"), this.layoutName = e, this.layout = se["_" + e], this.layout
                    },
                    loadLayout: function(e) {
                        return e && se["_" + e] || (e = "default"), Promise.resolve(se["_" + e])
                    }
                },
                components: {
                    NuxtLoading: V
                }
            };
        n(62), n(75);

        function le(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return pe(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pe(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return c = e.done, e
                },
                e: function(e) {
                    l = !0, o = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function pe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        c.a.use(l.a);
        var fe = ["state", "getters", "actions", "mutations"],
            de = {};
        de.modules = de.modules || {},
            function(e, t) {
                e = e.default || e;
                var n = t.replace(/\.(js|mjs|ts)$/, "").split("/"),
                    r = n[n.length - 1],
                    o = "store/".concat(t);
                if (e = "state" === r ? function(e, t) {
                        if ("function" != typeof e) {
                            console.warn("".concat(t, " should export a method that returns an object"));
                            var n = Object.assign({}, e);
                            return function() {
                                return n
                            }
                        }
                        return me(e, t)
                    }(e, o) : me(e, o), fe.includes(r)) {
                    var c = r;
                    ge(be(de, n, {
                        isProperty: !0
                    }), e, c)
                } else {
                    "index" === r && (n.pop(), r = n[n.length - 1]);
                    var l, f = be(de, n),
                        d = le(fe);
                    try {
                        for (d.s(); !(l = d.n()).done;) {
                            var h = l.value;
                            ge(f, e[h], h)
                        }
                    } catch (e) {
                        d.e(e)
                    } finally {
                        d.f()
                    }!1 === e.namespaced && delete f.namespaced
                }
            }(n(263), "konami-code.ts");
        var he = de instanceof Function ? de : function() {
            return new l.a.Store(Object.assign({
                strict: !1
            }, de))
        };

        function me(e, t) {
            if (e.state && "function" != typeof e.state) {
                console.warn("'state' should be a method that returns an object in ".concat(t));
                var n = Object.assign({}, e.state);
                e = Object.assign({}, e, {
                    state: function() {
                        return n
                    }
                })
            }
            return e
        }

        function be(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = n.isProperty,
                o = void 0 !== r && r;
            if (!t.length || o && 1 === t.length) return e;
            var c = t.shift();
            return e.modules[c] = e.modules[c] || {}, e.modules[c].namespaced = !0, e.modules[c].modules = e.modules[c].modules || {}, be(e.modules[c], t, {
                isProperty: o
            })
        }

        function ge(e, t, n) {
            t && ("state" === n ? e.state = t || e.state : e[n] = Object.assign({}, e[n], t))
        }
        var ve = {
            AbstractViewComponent: function() {
                return n.e(4).then(n.bind(null, 887)).then((function(e) {
                    return e.default || e
                }))
            },
            CookieBarComponent: function() {
                return Promise.resolve().then(n.bind(null, 189)).then((function(e) {
                    return e.default || e
                }))
            },
            CookieManagerModalComponent: function() {
                return Promise.resolve().then(n.bind(null, 190)).then((function(e) {
                    return e.default || e
                }))
            },
            HeroCitationComponent: function() {
                return n.e(5).then(n.bind(null, 410)).then((function(e) {
                    return e.default || e
                }))
            },
            HyCheckboxComponent: function() {
                return Promise.resolve().then(n.bind(null, 191)).then((function(e) {
                    return e.default || e
                }))
            },
            ItemDividerComponent: function() {
                return Promise.resolve().then(n.bind(null, 112)).then((function(e) {
                    return e.default || e
                }))
            },
            TextSectionComponent: function() {
                return n.e(6).then(n.bind(null, 408)).then((function(e) {
                    return e.default || e
                }))
            },
            ValuesSectionComponent: function() {
                return n.e(7).then(n.bind(null, 409)).then((function(e) {
                    return e.default || e
                }))
            },
            FooterAppFooterComponent: function() {
                return Promise.resolve().then(n.bind(null, 187)).then((function(e) {
                    return e.default || e
                }))
            },
            HeaderAppHeaderComponent: function() {
                return Promise.resolve().then(n.bind(null, 185)).then((function(e) {
                    return e.default || e
                }))
            },
            HeaderMenus: function() {
                return Promise.resolve().then(n.bind(null, 72)).then((function(e) {
                    return e.default || e
                }))
            },
            HeaderMobileMenuComponent: function() {
                return Promise.resolve().then(n.bind(null, 188)).then((function(e) {
                    return e.default || e
                }))
            },
            IconsHamburgerMenu: function() {
                return Promise.resolve().then(n.bind(null, 186)).then((function(e) {
                    return e.default || e
                }))
            }
        };
        for (var ye in ve) c.a.component(ye, ve[ye]), c.a.component("Lazy" + ye, ve[ye]);
        var xe = n(57),
            _e = n.n(xe),
            we = n(182),
            ke = n.n(we);

        function je(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function Oe(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? je(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : je(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function Ce(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return Me(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Me(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return c = e.done, e
                },
                e: function(e) {
                    l = !0, o = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function Me(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        for (var Re = {
                setBaseURL: function(e) {
                    this.defaults.baseURL = e
                },
                setHeader: function(e, t) {
                    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        o = Ce(Array.isArray(r) ? r : [r]);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var c = n.value;
                            if (!t) return void delete this.defaults.headers[c][e];
                            this.defaults.headers[c][e] = t
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                },
                setToken: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        r = e ? (t ? t + " " : "") + e : null;
                    this.setHeader("Authorization", r, n)
                },
                onRequest: function(e) {
                    this.interceptors.request.use((function(t) {
                        return e(t) || t
                    }))
                },
                onResponse: function(e) {
                    this.interceptors.response.use((function(t) {
                        return e(t) || t
                    }))
                },
                onRequestError: function(e) {
                    this.interceptors.request.use(void 0, (function(t) {
                        return e(t) || Promise.reject(t)
                    }))
                },
                onResponseError: function(e) {
                    this.interceptors.response.use(void 0, (function(t) {
                        return e(t) || Promise.reject(t)
                    }))
                },
                onError: function(e) {
                    this.onRequestError(e), this.onResponseError(e)
                },
                create: function(e) {
                    return Ee(ke()(e, this.defaults))
                }
            }, $e = function() {
                var e = Ae[Pe];
                Re["$" + e] = function() {
                    return this[e].apply(this, arguments).then((function(e) {
                        return e && e.data
                    }))
                }
            }, Pe = 0, Ae = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Pe < Ae.length; Pe++) $e();
        var Ee = function(e) {
                var t = _e.a.create(e);
                return t.CancelToken = _e.a.CancelToken, t.isCancel = _e.a.isCancel,
                    function(e) {
                        for (var t in Re) e[t] = Re[t].bind(e)
                    }(t), t.onRequest((function(e) {
                        e.headers = Oe(Oe({}, t.defaults.headers.common), e.headers)
                    })), Te(t), t
            },
            Te = function(e) {
                var t = {
                        finish: function() {},
                        start: function() {},
                        fail: function() {},
                        set: function() {}
                    },
                    n = function() {
                        var e = "undefined" != typeof window && window.$nuxt;
                        return e && e.$loading && e.$loading.set ? e.$loading : t
                    },
                    r = 0;
                e.onRequest((function(e) {
                    e && !1 === e.progress || r++
                })), e.onResponse((function(e) {
                    e && e.config && !1 === e.config.progress || --r <= 0 && (r = 0, n().finish())
                })), e.onError((function(e) {
                    e && e.config && !1 === e.config.progress || (r--, _e.a.isCancel(e) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
                }));
                var o = function(e) {
                    if (r && e.total) {
                        var progress = 100 * e.loaded / (e.total * r);
                        n().set(Math.min(100, progress))
                    }
                };
                e.defaults.onUploadProgress = o, e.defaults.onDownloadProgress = o
            },
            ze = function(e, t) {
                var n = e.$config && e.$config.axios || {},
                    r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "http://localhost:3000/";
                var o = Ee({
                    baseURL: r,
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                });
                e.$axios = o, t("axios", o)
            },
            Se = n(112);
        c.a.component("item-divider", Se.default);
        var Ie = n(183),
            Le = n.n(Ie),
            De = function(e) {
                var t = e.app;
                c.a.use(Le.a, {
                    host: "https://analytics.hytale.com",
                    siteId: 3,
                    router: t.router,
                    requireConsent: !0,
                    cookieDomain: "*.hypixelstudios.com",
                    debug: !0,
                    enableHeartBeatTimer: !0,
                    preInitActions: [
                        ["setSecureCookie", !0]
                    ]
                })
            };

        function Ne(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function Be(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Ne(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Ne(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        c.a.component(h.a.name, h.a), c.a.component(v.a.name, Be(Be({}, v.a), {}, {
            render: function(e, t) {
                return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(e, t)
            }
        })), c.a.component(R.name, R), c.a.component("NChild", R), c.a.component(Z.name, Z), Object.defineProperty(c.a.prototype, "$nuxt", {
            get: function() {
                return this.$root.$options.$nuxt
            },
            configurable: !0
        }), c.a.use(f.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var He = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            },
            Ue = l.a.Store.prototype.registerModule;

        function qe(path, e) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = Array.isArray(path) ? !!path.reduce((function(e, path) {
                    return e && e[path]
                }), this.state) : path in this.state;
            return Ue.call(this, path, e, Be({
                preserveState: n
            }, t))
        }

        function We(e) {
            return Ze.apply(this, arguments)
        }

        function Ze() {
            return (Ze = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                var n, r, o, l, f, d, path, h, m = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return h = function(e, t) {
                                if (!e) throw new Error("inject(key, value) has no key provided");
                                if (void 0 === t) throw new Error("inject('".concat(e, "', value) has no value provided"));
                                l[e = "$" + e] = t, l.context[e] || (l.context[e] = t), o[e] = l[e];
                                var n = "__nuxt_" + e + "_installed__";
                                c.a[n] || (c.a[n] = !0, c.a.use((function() {
                                    Object.prototype.hasOwnProperty.call(c.a.prototype, e) || Object.defineProperty(c.a.prototype, e, {
                                        get: function() {
                                            return this.$root.$options[e]
                                        }
                                    })
                                })))
                            }, n = m.length > 1 && void 0 !== m[1] ? m[1] : {}, e.next = 4, M(0, n);
                        case 4:
                            return r = e.sent, (o = he(t)).$router = r, o.registerModule = qe, l = Be({
                                head: {
                                    title: "nuxt-test",
                                    htmlAttrs: {
                                        lang: "en"
                                    },
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1"
                                    }, {
                                        hid: "description",
                                        name: "description",
                                        content: ""
                                    }],
                                    link: [{
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "/favicon.ico"
                                    }],
                                    style: [],
                                    script: []
                                },
                                store: o,
                                router: r,
                                nuxt: {
                                    defaultTransition: He,
                                    transitions: [He],
                                    setTransitions: function(e) {
                                        return Array.isArray(e) || (e = [e]), e = e.map((function(e) {
                                            return e = e ? "string" == typeof e ? Object.assign({}, He, {
                                                name: e
                                            }) : Object.assign({}, He, e) : He
                                        })), this.$options.nuxt.transitions = e, e
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(e) {
                                        e = e || null, l.context._errored = Boolean(e), e = e ? Object(_.p)(e) : null;
                                        var n = l.nuxt;
                                        return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = e, t && (t.nuxt.error = e), e
                                    }
                                }
                            }, ue), o.app = l, f = t ? t.next : function(e) {
                                return l.router.push(e)
                            }, t ? d = r.resolve(t.url).route : (path = Object(_.f)(r.options.base, r.options.mode), d = r.resolve(path).route), e.next = 14, Object(_.t)(l, {
                                store: o,
                                route: d,
                                next: f,
                                error: l.nuxt.error.bind(l),
                                payload: t ? t.payload : void 0,
                                req: t ? t.req : void 0,
                                res: t ? t.res : void 0,
                                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                ssrContext: t
                            });
                        case 14:
                            h("config", n), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), e.next = 20;
                            break;
                        case 20:
                            return e.next = 23, ze(l.context, h);
                        case 23:
                            e.next = 26;
                            break;
                        case 26:
                            return e.next = 29, De(l.context);
                        case 29:
                            0, e.next = 33;
                            break;
                        case 33:
                            return e.abrupt("return", {
                                store: o,
                                app: l,
                                router: r
                            });
                        case 34:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t), t.default = [{
            label: "Who we are",
            to: {
                name: "who-we-are"
            },
            exact: !1
        }, {
            label: "Hytale",
            to: {
                name: "hytale"
            },
            exact: !1
        }, {
            label: "Our Team",
            to: {
                name: "our-team"
            },
            exact: !1
        }, {
            label: "jobs",
            to: {
                name: "jobs-index"
            },
            exact: !1
        }]
    }, function(e, t, n) {
        "use strict";
        n(53), n(62), n(40), n(16), n(88), n(61), n(42);
        var r = n(1);

        function o(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, l = !0,
                f = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return l = e.done, e
                },
                e: function(e) {
                    f = !0, o = e
                },
                f: function() {
                    try {
                        l || null == n.return || n.return()
                    } finally {
                        if (f) throw o
                    }
                }
            }
        }

        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
            return n
        }
        var l = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout((function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }), 1)
            },
            f = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            },
            d = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    var t = e.intersectionRatio,
                        link = e.target;
                    t <= 0 || !link.__prefetch || link.__prefetch()
                }))
            }));
        t.a = {
            name: "NuxtLink",
            extends: r.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                f(this.handleId), this.__observed && (d.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    d && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), d.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var e = navigator.connection;
                    return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                        return e.components.default
                    })).filter((function(e) {
                        return "function" == typeof e && !e.options && !e.__prefetched
                    }))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        d.unobserve(this.$el);
                        var e, t = o(this.getPrefetchComponents());
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value,
                                    r = n();
                                r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        t.a = {}
    }, , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        n(27);
        var r = n(5),
            o = n(12),
            c = n(13),
            l = n(3),
            f = n(4),
            d = n(2);

        function h(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(l.a)(e);
                if (t) {
                    var o = Object(l.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(c.a)(this, n)
            }
        }
        var m = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            v = function(e) {
                Object(o.a)(n, e);
                var t = h(n);

                function n() {
                    return Object(r.a)(this, n), t.apply(this, arguments)
                }
                return n
            }(d.c),
            y = v = m([d.a], v),
            x = (n(281), n(8)),
            component = Object(x.a)(y, (function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    staticClass: "item-divider"
                })
            }), [], !1, null, "7f1a103e", null);
        t.default = component.exports
    }, , , , , , , , , , , , , , , , , , , function(e, t, n) {
        e.exports = n.p + "img/hypixel-logo.76bfe0a.png"
    }, , , , , , , , , , , , , , , , , , function(e, t, n) {
        var content = n(238);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("2fbc35d3", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(240);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("7e56e4e3", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(246);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("71ca462f", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(248);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("57cd2fb8", content, !0, {
            sourceMap: !1
        })
    }, , function(e, t, n) {
        var content = n(251);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("58429e38", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(253);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("3b3b78cc", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(256);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("53ab1faa", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(258);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("13c0cb3e", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(260);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("045010aa", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(262);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("b80d392e", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , function(e, t, n) {
        var content = n(282);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("1bb91b13", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , , , function(e, t, n) {
        var r;
        n(16), n(49);
        var o = function(e) {
            var t = {
                addEvent: function(e, t, n, r) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && (e["e" + t + n] = n, e[t + n] = function() {
                        e["e" + t + n](window.event, r)
                    }, e.attachEvent("on" + t, e[t + n]))
                },
                removeEvent: function(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n) : e.attachEvent && e.detachEvent(t)
                },
                input: "",
                pattern: "38384040373937396665",
                keydownHandler: function(e, n) {
                    if (n && (t = n), t.input += e ? e.keyCode : event.keyCode, t.input.length > t.pattern.length && (t.input = t.input.substr(t.input.length - t.pattern.length)), t.input === t.pattern) return t.code(t._currentLink), t.input = "", e.preventDefault(), !1
                },
                load: function(link) {
                    this._currentLink = link, this.addEvent(document, "keydown", this.keydownHandler, this), this.iphone.load(link)
                },
                unload: function() {
                    this.removeEvent(document, "keydown", this.keydownHandler), this.iphone.unload()
                },
                code: function(link) {
                    window.location = link
                },
                iphone: {
                    start_x: 0,
                    start_y: 0,
                    stop_x: 0,
                    stop_y: 0,
                    tap: !1,
                    capture: !1,
                    orig_keys: "",
                    keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
                    input: [],
                    code: function(link) {
                        t.code(link)
                    },
                    touchmoveHandler: function(e) {
                        if (1 === e.touches.length && !0 === t.iphone.capture) {
                            var n = e.touches[0];
                            t.iphone.stop_x = n.pageX, t.iphone.stop_y = n.pageY, t.iphone.tap = !1, t.iphone.capture = !1, t.iphone.check_direction()
                        }
                    },
                    touchendHandler: function() {
                        if (t.iphone.input.push(t.iphone.check_direction()), t.iphone.input.length > t.iphone.keys.length && t.iphone.input.shift(), t.iphone.input.length === t.iphone.keys.length) {
                            for (var e = !0, i = 0; i < t.iphone.keys.length; i++) t.iphone.input[i] !== t.iphone.keys[i] && (e = !1);
                            e && t.iphone.code(t._currentLink)
                        }
                    },
                    touchstartHandler: function(e) {
                        t.iphone.start_x = e.changedTouches[0].pageX, t.iphone.start_y = e.changedTouches[0].pageY, t.iphone.tap = !0, t.iphone.capture = !0
                    },
                    load: function(link) {
                        this.orig_keys = this.keys, t.addEvent(document, "touchmove", this.touchmoveHandler), t.addEvent(document, "touchend", this.touchendHandler, !1), t.addEvent(document, "touchstart", this.touchstartHandler)
                    },
                    unload: function() {
                        t.removeEvent(document, "touchmove", this.touchmoveHandler), t.removeEvent(document, "touchend", this.touchendHandler), t.removeEvent(document, "touchstart", this.touchstartHandler)
                    },
                    check_direction: function() {
                        return x_magnitude = Math.abs(this.start_x - this.stop_x), y_magnitude = Math.abs(this.start_y - this.stop_y), x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT", y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP", result = x_magnitude > y_magnitude ? x : y, result = !0 === this.tap ? "TAP" : result, result
                    }
                }
            };
            return "string" == typeof e && t.load(e), "function" == typeof e && (t.code = e, t.load()), t
        };
        void 0 !== e.exports ? e.exports = o : void 0 === (r = function() {
            return o
        }.apply(t, [])) || (e.exports = r)
    }, , , function(e, t, n) {
        "use strict";
        n(16), n(42), n(45);
        var r = n(11),
            o = n(1),
            c = n(0),
            l = window.__NUXT__;

        function f() {
            if (!this._hydrated) return this.$fetch()
        }

        function d() {
            if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                var e;
                this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = l.fetch[this._fetchKey];
                if (data && data._error) this.$fetchState.error = data._error;
                else
                    for (var t in data) o.a.set(this.$data, t, data[t])
            }
        }

        function h() {
            var e = this;
            return this._fetchPromise || (this._fetchPromise = m.call(this).then((function() {
                delete e._fetchPromise
            }))), this._fetchPromise
        }

        function m() {
            return v.apply(this, arguments)
        }

        function v() {
            return (v = Object(r.a)(regeneratorRuntime.mark((function e() {
                var t, n, r, o = this;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, t = null, n = Date.now(), e.prev = 6, e.next = 9, this.$options.fetch.call(this);
                        case 9:
                            e.next = 15;
                            break;
                        case 11:
                            e.prev = 11, e.t0 = e.catch(6), t = Object(c.p)(e.t0);
                        case 15:
                            if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                e.next = 19;
                                break
                            }
                            return e.next = 19, new Promise((function(e) {
                                return setTimeout(e, r)
                            }));
                        case 19:
                            this.$fetchState.error = t, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                return o.$nuxt.nbFetching--
                            }));
                        case 23:
                        case "end":
                            return e.stop()
                    }
                }), e, this, [
                    [6, 11]
                ])
            })))).apply(this, arguments)
        }
        t.a = {
            beforeCreate: function() {
                Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.a.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }), this.$fetch = h.bind(this), Object(c.a)(this, "created", d), Object(c.a)(this, "beforeMount", f))
            }
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(27);
        var r = n(5),
            o = n(15),
            c = n(12),
            l = n(13),
            f = n(3),
            d = n(4),
            h = n(2),
            m = n(186),
            v = n(72);

        function y(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(f.a)(e);
                if (t) {
                    var o = Object(f.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(l.a)(this, n)
            }
        }
        var x = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            _ = function(e) {
                Object(c.a)(n, e);
                var t = y(n);

                function n() {
                    var e;
                    return Object(r.a)(this, n), (e = t.apply(this, arguments)).menus = v.default, e
                }
                return Object(o.a)(n, [{
                    key: "toggleMobileMenu",
                    value: function() {
                        this.$emit("toggle-mobile-menu")
                    }
                }]), n
            }(h.c),
            w = _ = x([Object(h.a)({
                components: {
                    HamburgerMenu: m.default
                }
            })], _),
            k = (n(247), n(8)),
            component = Object(k.a)(w, (function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    staticClass: "app-header"
                }, [r("div", {
                    staticClass: "app-header__wrapper"
                }, [r("div", {
                    staticClass: "app-header__content"
                }, [r("div", {
                    staticClass: "app-header__logo-container"
                }, [r("nuxt-link", {
                    attrs: {
                        to: {
                            name: "index"
                        }
                    }
                }, [r("img", {
                    staticClass: "app-header__logo",
                    attrs: {
                        src: n(131),
                        alt: "Hypixel Studios Logo"
                    }
                })])], 1), e._v(" "), r("nav", {
                    staticClass: "app-header__links"
                }, [r("ul", {
                    staticClass: "app-header__links-list"
                }, e._l(e.menus, (function(menu) {
                    return r("li", {
                        key: menu.label,
                        staticClass: "app-header__link-list-item"
                    }, [r("nuxt-link", {
                        staticClass: "app-header__link",
                        attrs: {
                            to: menu.to,
                            exact: menu.exact
                        }
                    }, [e._v(e._s(menu.label))])], 1)
                })), 0)])])]), e._v(" "), r("div", {
                    staticClass: "app-header__hamburger-menu-container",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.toggleMobileMenu
                    }
                }, [r("hamburger-menu")], 1)])
            }), [], !1, null, "b5311664", null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(27);
        var r = n(5),
            o = n(12),
            c = n(13),
            l = n(3),
            f = n(4),
            d = n(2);

        function h(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(l.a)(e);
                if (t) {
                    var o = Object(l.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(c.a)(this, n)
            }
        }
        var m = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            v = function(e) {
                Object(o.a)(n, e);
                var t = h(n);

                function n() {
                    return Object(r.a)(this, n), t.apply(this, arguments)
                }
                return n
            }(d.c),
            y = v = m([d.a], v),
            x = (n(245), n(8)),
            component = Object(x.a)(y, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("span", {
                    staticClass: "hamburger-menu"
                }, [t("svg", {
                    staticClass: "svg-inline--fa fa-bars fa-w-14",
                    attrs: {
                        "aria-hidden": "true",
                        "data-prefix": "fas",
                        "data-icon": "bars",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 448 512"
                    }
                }, [t("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    }
                })])])
            }), [], !1, null, "0537b7fb", null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(27);
        var r = n(5),
            o = n(15),
            c = n(12),
            l = n(13),
            f = n(3),
            d = n(4),
            h = n(32),
            m = n(2);

        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(f.a)(e);
                if (t) {
                    var o = Object(f.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(l.a)(this, n)
            }
        }
        var y = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            x = function(e) {
                Object(c.a)(n, e);
                var t = v(n);

                function n() {
                    var e;
                    return Object(r.a)(this, n), (e = t.apply(this, arguments)).hasCookieBar = !1, e
                }
                return Object(o.a)(n, [{
                    key: "mounted",
                    value: function() {
                        this.hasCookieBar = !h.a.areCookiesAcknowledged()
                    }
                }]), n
            }(m.c),
            _ = x = y([m.a], x),
            w = (n(250), n(8)),
            component = Object(w.a)(_, (function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("footer", {
                    staticClass: "app-footer",
                    class: {
                        "app-footer_cookie-bar": e.hasCookieBar
                    }
                }, [r("div", {
                    staticClass: "app-footer__content-container"
                }, [r("img", {
                    staticClass: "app-footer__logo",
                    attrs: {
                        src: n(131),
                        alt: "Hypixel Studios Logo"
                    }
                }), e._v(" "), r("div", {
                    staticClass: "app-footer__links"
                }, [r("nuxt-link", {
                    staticClass: "app-footer__link",
                    attrs: {
                        to: {
                            name: "contact"
                        }
                    }
                }, [e._v("Contact")]), e._v(" "), r("nuxt-link", {
                    staticClass: "app-footer__link",
                    attrs: {
                        to: {
                            name: "cookie-policy"
                        }
                    }
                }, [e._v("Cookie Policy")]), e._v(" "), r("nuxt-link", {
                    staticClass: "app-footer__link",
                    attrs: {
                        to: {
                            name: "privacy"
                        }
                    }
                }, [e._v("Privacy")]), e._v(" "), r("nuxt-link", {
                    staticClass: "app-footer__link",
                    attrs: {
                        to: {
                            name: "security"
                        }
                    }
                }, [e._v("Security")]), e._v(" "), r("nuxt-link", {
                    staticClass: "app-footer__link",
                    attrs: {
                        to: {
                            name: "legal-index"
                        }
                    }
                }, [e._v("Legal")]), e._v(" "), r("nuxt-link", {
                    staticClass: "app-footer__link",
                    attrs: {
                        to: {
                            name: "press"
                        }
                    }
                }, [e._v("Press")])], 1)])])
            }), [], !1, null, "b64086d8", null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(27);
        var r = n(5),
            o = n(15),
            c = n(12),
            l = n(13),
            f = n(3),
            d = n(4),
            h = n(2),
            m = n(72);

        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(f.a)(e);
                if (t) {
                    var o = Object(f.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(l.a)(this, n)
            }
        }
        var y = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            x = function(e) {
                Object(c.a)(n, e);
                var t = v(n);

                function n() {
                    var e;
                    return Object(r.a)(this, n), (e = t.apply(this, arguments)).menus = m.default, e
                }
                return Object(o.a)(n, [{
                    key: "close",
                    value: function() {
                        this.$emit("input", !1)
                    }
                }]), n
            }(h.c);
        y([Object(h.b)({
            required: !0,
            type: Boolean
        })], x.prototype, "value", void 0);
        var _ = x = y([h.a], x),
            w = (n(252), n(8)),
            component = Object(w.a)(_, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "slide-fade"
                    }
                }, [e.value ? n("div", {
                    staticClass: "mobile-menu",
                    class: {
                        "mobile-menu_active_": e.value
                    }
                }, [n("nav", {
                    staticClass: "mobile-menu__nav"
                }, [n("ul", {
                    staticClass: "mobile-menu__list"
                }, e._l(e.menus, (function(menu) {
                    return n("li", {
                        key: menu.label,
                        staticClass: "mobile-menu__item"
                    }, [n("nuxt-link", {
                        staticClass: "mobile-menu__link",
                        attrs: {
                            to: menu.to,
                            exact: menu.exact
                        },
                        nativeOn: {
                            click: function(t) {
                                return e.close(t)
                            }
                        }
                    }, [e._v("\n          " + e._s(menu.label) + "\n        ")])], 1)
                })), 0)])]) : e._e()])
            }), [], !1, null, "192882fb", null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(27);
        var r = n(5),
            o = n(15),
            c = n(12),
            l = n(13),
            f = n(3),
            d = n(4),
            h = n(2),
            m = n(190),
            v = n(32);

        function y(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(f.a)(e);
                if (t) {
                    var o = Object(f.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(l.a)(this, n)
            }
        }
        var x = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            _ = function(e) {
                Object(c.a)(n, e);
                var t = y(n);

                function n() {
                    var e;
                    return Object(r.a)(this, n), (e = t.apply(this, arguments)).showCookieManagerModal = !1, e.cookiesAcknowledged = !1, e
                }
                return Object(o.a)(n, [{
                    key: "customizeCookies",
                    value: function(e) {
                        e.preventDefault(), this.showCookieManagerModal = !0
                    }
                }, {
                    key: "acceptCookies",
                    value: function(e) {
                        e.preventDefault(), v.a.acceptAllCookies()
                    }
                }, {
                    key: "rejectCookies",
                    value: function(e) {
                        e.preventDefault(), v.a.rejectAllCookies()
                    }
                }, {
                    key: "mounted",
                    value: function() {
                        this.cookiesAcknowledged = v.a.areCookiesAcknowledged(), window._paq && (v.a.isMatomoAccepted() ? window._paq.push(["setConsentGiven"]) : window._paq.push(["disableCookies"]))
                    }
                }]), n
            }(h.c),
            w = _ = x([Object(h.a)({
                components: {
                    CookieManagerModal: m.default
                }
            })], _),
            k = (n(259), n(8)),
            component = Object(k.a)(w, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "cookie-bar"
                }, [e.cookiesAcknowledged ? e._e() : n("div", {
                    staticClass: "cookie-bar__wrapper"
                }, [n("div", {
                    staticClass: "cookie-bar__container"
                }, [n("div", {
                    staticClass: "cookie-bar__text"
                }, [e._v("\n        We use cookies to provide and improve services on this site.\n        "), n("div", {
                    staticClass: "cookie-bar__link-details-container"
                }, [n("nuxt-link", {
                    attrs: {
                        to: {
                            name: "privacy"
                        }
                    }
                }, [e._v("Learn more")]), e._v(" "), n("span", {
                    staticClass: "cookie-bar__item-divider"
                }), e._v(" "), n("nuxt-link", {
                    attrs: {
                        to: {
                            name: "cookie-policy"
                        }
                    }
                }, [e._v("Cookie policy")])], 1)]), e._v(" "), n("div", {
                    staticClass: "cookie-bar__options"
                }, [n("a", {
                    staticClass: "cookie-bar__action",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: e.customizeCookies
                    }
                }, [e._v("Customize cookies")]), e._v(" "), n("span", {
                    staticClass: "cookie-bar__item-divider"
                }), e._v(" "), n("a", {
                    staticClass: "cookie-bar__action",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: e.rejectCookies
                    }
                }, [e._v("Reject cookies")]), e._v(" "), n("span", {
                    staticClass: "cookie-bar__item-divider"
                }), e._v(" "), n("a", {
                    staticClass: "cookie-bar__action",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: e.acceptCookies
                    }
                }, [e._v("Accept cookies")])])])]), e._v(" "), n("cookie-manager-modal", {
                    model: {
                        value: e.showCookieManagerModal,
                        callback: function(t) {
                            e.showCookieManagerModal = t
                        },
                        expression: "showCookieManagerModal"
                    }
                })], 1)
            }), [], !1, null, "59111a60", null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(27);
        var r = n(5),
            o = n(15),
            c = n(12),
            l = n(13),
            f = n(3),
            d = n(4),
            h = n(2),
            m = n(32),
            v = n(191);

        function y(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(f.a)(e);
                if (t) {
                    var o = Object(f.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(l.a)(this, n)
            }
        }
        var x = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            _ = function(e) {
                Object(c.a)(n, e);
                var t = y(n);

                function n() {
                    var e;
                    return Object(r.a)(this, n), (e = t.apply(this, arguments)).purposes = {
                        essential: !0,
                        performance: {
                            matomo: !1
                        }
                    }, e
                }
                return Object(o.a)(n, [{
                    key: "hasPerformanceCookies",
                    get: function() {
                        return this.purposes.performance.matomo
                    }
                }, {
                    key: "closeModal",
                    value: function() {
                        this.$emit("input", !1)
                    }
                }, {
                    key: "performanceCookieChanged",
                    value: function(e) {
                        if (e && e.target) {
                            var t = e.target.checked;
                            this.purposes.performance.matomo = t
                        }
                    }
                }, {
                    key: "savePreferences",
                    value: function() {
                        m.a.setPreference(this.purposes)
                    }
                }]), n
            }(h.c);
        x([Object(h.b)({
            type: Boolean,
            required: !0
        })], _.prototype, "value", void 0);
        var w = _ = x([Object(h.a)({
                components: {
                    HyCheckbox: v.default
                }
            })], _),
            k = (n(257), n(8)),
            component = Object(k.a)(w, (function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [e.value ? r("div", {
                    staticClass: "cookie-manager-modal"
                }, [r("div", {
                    staticClass: "cookie-manager-modal__overlay"
                }), e._v(" "), r("div", {
                    staticClass: "cookie-manager-modal__container hy-content-page hy-content-page_text"
                }, [r("div", {
                    staticClass: "hy-content-page__background-image"
                }), e._v(" "), r("h1", {
                    staticClass: "cookie-manager-modal__title",
                    attrs: {
                        "data-text": "Cookie Manager"
                    }
                }, [e._v("\n        Cookie Manager\n      ")]), e._v(" "), r("div", {
                    staticClass: "cookie-manager-modal__close-btn-container",
                    attrs: {
                        role: "button"
                    },
                    on: {
                        click: e.closeModal
                    }
                }, [r("img", {
                    staticClass: "cookie-manager-modal__close-btn",
                    attrs: {
                        src: n(254),
                        icon: "times"
                    }
                })]), e._v(" "), r("div", {
                    staticClass: "cookie-manager-modal__description"
                }, [r("item-divider", {
                    staticClass: "hy-mar-b-3"
                }), e._v(" "), r("p", [e._v("\n          We use cookies to recognize visitors, remember your preferences, analyze site traffic, as well as protect the website from unwanted visitors (those pesky bots)\n        ")]), e._v(" "), r("p", [e._v("\n          Select the types of trackers you consent to, both by us, and third parties.\n        ")])], 1), e._v(" "), r("div", {
                    staticClass: "cookie-manager-modal__options"
                }, [r("div", {
                    staticClass: "hy-checkbox cookie-manager-modal__required-input"
                }, [r("input", {
                    staticClass: "cookie-manager-modal__required-input",
                    attrs: {
                        id: "essential",
                        type: "checkbox"
                    },
                    domProps: {
                        checked: e.purposes.essential
                    }
                }), e._v(" "), r("label", {
                    attrs: {
                        for: "essential"
                    }
                }, [e._v("\n            Essential\n          ")])]), e._v(" "), r("p", {
                    staticClass: "cookie-manager-modal__cookie-description"
                }, [e._v("\n          Required for the site's core functionality, the site cannot function properly without these cookies. They can only be disabled by changing your browser preferences.\n        ")]), e._v(" "), r("div", {
                    staticClass: "hy-checkbox hy-mar-t-1"
                }, [r("input", {
                    attrs: {
                        id: "tracking",
                        type: "checkbox"
                    },
                    domProps: {
                        checked: e.hasPerformanceCookies
                    },
                    on: {
                        change: e.performanceCookieChanged
                    }
                }), e._v(" "), r("label", {
                    attrs: {
                        for: "tracking"
                    }
                }, [e._v("Tracking")])]), e._v(" "), r("p", {
                    staticClass: "cookie-manager-modal__cookie-description"
                }, [e._v("\n          Collects information on site usage, for example, which pages are most frequently visited allow us to further optimize the experience across our platforms.\n        ")]), e._v(" "), e.hasPerformanceCookies ? r("div", {
                    staticClass: "cookie-manager-modal__sub-option"
                }, [r("div", {
                    staticClass: "hy-checkbox"
                }, [r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.purposes.performance.matomo,
                        expression: "purposes.performance.matomo"
                    }],
                    attrs: {
                        type: "checkbox",
                        id: "matomo"
                    },
                    domProps: {
                        checked: Array.isArray(e.purposes.performance.matomo) ? e._i(e.purposes.performance.matomo, null) > -1 : e.purposes.performance.matomo
                    },
                    on: {
                        change: function(t) {
                            var n = e.purposes.performance.matomo,
                                r = t.target,
                                o = !!r.checked;
                            if (Array.isArray(n)) {
                                var c = e._i(n, null);
                                r.checked ? c < 0 && e.$set(e.purposes.performance, "matomo", n.concat([null])) : c > -1 && e.$set(e.purposes.performance, "matomo", n.slice(0, c).concat(n.slice(c + 1)))
                            } else e.$set(e.purposes.performance, "matomo", o)
                        }
                    }
                }), e._v(" "), r("label", {
                    attrs: {
                        for: "matomo"
                    }
                }, [e._v("Matomo - A web analytics and conversion optimization tool.")])])]) : e._e()]), e._v(" "), r("div", {
                    staticClass: "cookie-manager-modal__actions hy-mar-t-1"
                }, [r("button", {
                    staticClass: "hy-button",
                    on: {
                        click: e.savePreferences
                    }
                }, [e._v("Save preferences")])])])]) : e._e()])
            }), [], !1, null, null, null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(43), n(27);
        var r = n(192),
            o = n(5),
            c = n(15),
            l = n(12),
            f = n(13),
            d = n(3),
            h = n(4),
            m = n(2);

        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Object(f.a)(this, n)
            }
        }
        var y = function(e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(h.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc);
                else
                    for (var i = e.length - 1; i >= 0; i--)(r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            },
            x = function(e) {
                Object(l.a)(n, e);
                var t = v(n);

                function n() {
                    var e;
                    return Object(o.a)(this, n), (e = t.apply(this, arguments)).id = null, e
                }
                return Object(c.a)(n, [{
                    key: "mounted",
                    value: function() {
                        this.id = this._uid
                    }
                }, {
                    key: "inputChanged",
                    value: function(e) {
                        e && e.target && this.$emit("input", e.target.checked)
                    }
                }, {
                    key: "classesCompiled",
                    get: function() {
                        var base = ["inputCheckbox"];
                        return this.errors && base.push("inputCheckbox--error"), [].concat(Object(r.a)(this.classes), base)
                    }
                }]), n
            }(m.c);
        y([Object(m.b)(String)], x.prototype, "label", void 0), y([Object(m.b)({
            type: Array,
            default: function() {
                return []
            }
        })], x.prototype, "classes", void 0), y([Object(m.b)({
            type: Array,
            default: function() {
                return []
            }
        })], x.prototype, "errors", void 0), y([Object(m.b)({
            type: Boolean,
            required: !0
        })], x.prototype, "value", void 0);
        var _ = x = y([m.a], x),
            w = (n(255), n(8)),
            component = Object(w.a)(_, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "inputWrapper inputWrapper--checkbox"
                }, [n("div", {
                    staticClass: "inputWrapper__inner"
                }, [n("div", {
                    class: e.classesCompiled
                }, [n("input", {
                    attrs: {
                        id: "checkbox-" + e.id,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: e.value
                    },
                    on: {
                        change: e.inputChanged
                    }
                }), e._v(" "), n("label", {
                    attrs: {
                        for: "checkbox-" + e.id
                    }
                })]), e._v(" "), e.label ? n("label", {
                    staticClass: "inputCheckboxLabel",
                    attrs: {
                        for: "checkbox-" + e.id
                    }
                }, [e._v(e._s(e.label))]) : e._e()]), e._v(" "), n("transition-group", {
                    attrs: {
                        name: "fade"
                    }
                }, e._l(e.errors, (function(t) {
                    return n("div", {
                        key: t,
                        staticClass: "inputError"
                    }, [e._v(e._s(t))])
                })), 0)], 1)
            }), [], !1, null, null, null);
        t.default = component.exports
    }, , , , , , function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjOTA3MjM4OwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IkZvcm1lXzUzNV9jb3BpZV8yIiBkYXRhLW5hbWU9IkZvcm1lIDUzNSBjb3BpZSAyIiBjbGFzcz0iY2xzLTEiIGQ9Ik0yNjIwLjIsMTI5NjEuMmwtMTEuMTksMTEuMi0wLjItLjJoMGwtNi40My02LjQsMC4wMi0uMS0xLjUzLTEuNSw4LjE3LTguMSwyLjYzLDIuNi01LjY3LDUuNiwzLjAxLDMuMSw4LjY3LTguNy04LjY4LTguNy0xNSwxNSwxNSwxNSwxNS0xNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNTk0IC0xMjk1MCkiLz4KPC9zdmc+Cg=="
    }, , , , , , , , , , , , , , , , function(e, t, n) {
        e.exports = n.p + "img/kweebec.269afc6.png"
    }, function(e, t, n) {
        n(215), e.exports = n(216)
    }, , function(e, t, n) {
        "use strict";
        n.r(t),
            function(e) {
                n(43), n(53), n(62), n(40), n(78), n(80), n(16), n(38), n(88), n(51), n(110), n(61), n(49), n(42);
                var t = n(4),
                    r = (n(45), n(11)),
                    o = (n(89), n(209), n(224), n(225), n(1)),
                    c = n(169),
                    l = n(107),
                    f = n(0),
                    d = n(33),
                    h = n(184),
                    m = n(73);

                function v(e, t) {
                    var n;
                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return y(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var i = 0,
                                r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return i >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[i++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, c = !0,
                        l = !1;
                    return {
                        s: function() {
                            n = e[Symbol.iterator]()
                        },
                        n: function() {
                            var e = n.next();
                            return c = e.done, e
                        },
                        e: function(e) {
                            l = !0, o = e
                        },
                        f: function() {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                    }
                }

                function y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n
                }
                o.a.__nuxt__fetch__mixin__ || (o.a.mixin(h.a), o.a.__nuxt__fetch__mixin__ = !0), o.a.component(m.a.name, m.a), o.a.component("NLink", m.a), e.fetch || (e.fetch = c.a);
                var x, _, w = [],
                    k = window.__NUXT__ || {},
                    j = k.config || {};
                j.app && (n.p = Object(f.u)(j.app.cdnURL, j.app.assetsPath)), Object.assign(o.a.config, {
                    silent: !0,
                    performance: !1
                });
                var O = o.a.config.errorHandler || console.error;

                function C(e, t, n) {
                    for (var r = function(component) {
                            var e = function(component, e) {
                                if (!component || !component.options || !component.options[e]) return {};
                                var option = component.options[e];
                                if ("function" == typeof option) {
                                    for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++) n[r - 2] = arguments[r];
                                    return option.apply(void 0, n)
                                }
                                return option
                            }(component, "transition", t, n) || {};
                            return "string" == typeof e ? {
                                name: e
                            } : e
                        }, o = n ? Object(f.g)(n) : [], c = Math.max(e.length, o.length), l = [], d = function(i) {
                            var t = Object.assign({}, r(e[i])),
                                n = Object.assign({}, r(o[i]));
                            Object.keys(t).filter((function(e) {
                                return void 0 !== t[e] && !e.toLowerCase().includes("leave")
                            })).forEach((function(e) {
                                n[e] = t[e]
                            })), l.push(n)
                        }, i = 0; i < c; i++) d(i);
                    return l
                }

                function M(e, t, n) {
                    return R.apply(this, arguments)
                }

                function R() {
                    return (R = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r) {
                        var o, c, l, d, h = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this._routeChanged = Boolean(x.nuxt.err) || n.name !== t.name, this._paramChanged = !this._routeChanged && n.path !== t.path, this._queryChanged = !this._paramChanged && n.fullPath !== t.fullPath, this._diffQuery = this._queryChanged ? Object(f.i)(t.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), e.prev = 5, !this._queryChanged) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 9, Object(f.r)(t, (function(e, t) {
                                        return {
                                            Component: e,
                                            instance: t
                                        }
                                    }));
                                case 9:
                                    o = e.sent, o.some((function(e) {
                                        var r = e.Component,
                                            o = e.instance,
                                            c = r.options.watchQuery;
                                        return !0 === c || (Array.isArray(c) ? c.some((function(e) {
                                            return h._diffQuery[e]
                                        })) : "function" == typeof c && c.apply(o, [t.query, n.query]))
                                    })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                case 12:
                                    r(), e.next = 26;
                                    break;
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(5), c = e.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, d = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(d)) {
                                        e.next = 23;
                                        break
                                    }
                                    return window.location.reload(!0), e.abrupt("return");
                                case 23:
                                    this.error({
                                        statusCode: l,
                                        message: d
                                    }), this.$nuxt.$emit("routeChanged", t, n, c), r();
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [5, 15]
                        ])
                    })))).apply(this, arguments)
                }

                function $(e, t) {
                    return k.serverRendered && t && Object(f.b)(e, t), e._Ctor = e, e
                }

                function P(e) {
                    var path = Object(f.f)(e.options.base, e.options.mode);
                    return Object(f.d)(e.match(path), function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r, o, c) {
                            var l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("function" != typeof t || t.options) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, t();
                                    case 3:
                                        t = e.sent;
                                    case 4:
                                        return l = $(Object(f.s)(t), k.data ? k.data[c] : null), r.components[o] = l, e.abrupt("return", l);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r, o, c) {
                            return e.apply(this, arguments)
                        }
                    }())
                }

                function A(e, t, n) {
                    var r = this,
                        o = [],
                        c = !1;
                    if (void 0 !== n && (o = [], (n = Object(f.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), e.forEach((function(e) {
                            e.options.middleware && (o = o.concat(e.options.middleware))
                        }))), o = o.map((function(e) {
                            return "function" == typeof e ? e : ("function" != typeof l.a[e] && (c = !0, r.error({
                                statusCode: 500,
                                message: "Unknown middleware " + e
                            })), l.a[e])
                        })), !c) return Object(f.o)(o, t)
                }

                function E(e, t, n) {
                    return T.apply(this, arguments)
                }

                function T() {
                    return (T = Object(r.a)(regeneratorRuntime.mark((function e(t, n, o) {
                        var c, l, h, m, y, _, k, j, O, M, R, $, P, E, T, z = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", o());
                                case 2:
                                    return !1, t === n ? (w = [], !0) : (c = [], w = Object(f.g)(n, c).map((function(e, i) {
                                        return Object(f.c)(n.matched[c[i]].path)(n.params)
                                    }))), l = !1, h = function(path) {
                                        n.path === path.path && z.$loading.finish && z.$loading.finish(), n.path !== path.path && z.$loading.pause && z.$loading.pause(), l || (l = !0, o(path))
                                    }, e.next = 8, Object(f.t)(x, {
                                        route: t,
                                        from: n,
                                        next: h.bind(this)
                                    });
                                case 8:
                                    if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), m = [], (y = Object(f.g)(t, m)).length) {
                                        e.next = 27;
                                        break
                                    }
                                    return e.next = 15, A.call(this, y, x.context);
                                case 15:
                                    if (!l) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 17:
                                    return _ = (d.a.options || d.a).layout, e.next = 20, this.loadLayout("function" == typeof _ ? _.call(d.a, x.context) : _);
                                case 20:
                                    return k = e.sent, e.next = 23, A.call(this, y, x.context, k);
                                case 23:
                                    if (!l) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 25:
                                    return x.context.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", o());
                                case 27:
                                    return y.forEach((function(e) {
                                        e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                                    })), this.setTransitions(C(y, t, n)), e.prev = 29, e.next = 32, A.call(this, y, x.context);
                                case 32:
                                    if (!l) {
                                        e.next = 34;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 34:
                                    if (!x.context._errored) {
                                        e.next = 36;
                                        break
                                    }
                                    return e.abrupt("return", o());
                                case 36:
                                    return "function" == typeof(j = y[0].options.layout) && (j = j(x.context)), e.next = 40, this.loadLayout(j);
                                case 40:
                                    return j = e.sent, e.next = 43, A.call(this, y, x.context, j);
                                case 43:
                                    if (!l) {
                                        e.next = 45;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 45:
                                    if (!x.context._errored) {
                                        e.next = 47;
                                        break
                                    }
                                    return e.abrupt("return", o());
                                case 47:
                                    O = !0, e.prev = 48, M = v(y), e.prev = 50, M.s();
                                case 52:
                                    if ((R = M.n()).done) {
                                        e.next = 63;
                                        break
                                    }
                                    if ("function" == typeof($ = R.value).options.validate) {
                                        e.next = 56;
                                        break
                                    }
                                    return e.abrupt("continue", 61);
                                case 56:
                                    return e.next = 58, $.options.validate(x.context);
                                case 58:
                                    if (O = e.sent) {
                                        e.next = 61;
                                        break
                                    }
                                    return e.abrupt("break", 63);
                                case 61:
                                    e.next = 52;
                                    break;
                                case 63:
                                    e.next = 68;
                                    break;
                                case 65:
                                    e.prev = 65, e.t0 = e.catch(50), M.e(e.t0);
                                case 68:
                                    return e.prev = 68, M.f(), e.finish(68);
                                case 71:
                                    e.next = 77;
                                    break;
                                case 73:
                                    return e.prev = 73, e.t1 = e.catch(48), this.error({
                                        statusCode: e.t1.statusCode || "500",
                                        message: e.t1.message
                                    }), e.abrupt("return", o());
                                case 77:
                                    if (O) {
                                        e.next = 80;
                                        break
                                    }
                                    return this.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", o());
                                case 80:
                                    return e.next = 82, Promise.all(y.map(function() {
                                        var e = Object(r.a)(regeneratorRuntime.mark((function e(r, i) {
                                            var o, c, l, d, h, v, y, _, p;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (r._path = Object(f.c)(t.matched[m[i]].path)(t.params), r._dataRefresh = !1, o = r._path !== w[i], z._routeChanged && o ? r._dataRefresh = !0 : z._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : z._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(e) {
                                                                return z._diffQuery[e]
                                                            })) : "function" == typeof l && (P || (P = Object(f.h)(t)), r._dataRefresh = l.apply(P[i], [t.query, n.query]))), z._hadError || !z._isMounted || r._dataRefresh) {
                                                            e.next = 6;
                                                            break
                                                        }
                                                        return e.abrupt("return");
                                                    case 6:
                                                        return d = [], h = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, y = h && v ? 30 : 45, h && ((_ = Object(f.q)(r.options.asyncData, x.context)).then((function(e) {
                                                            Object(f.b)(r, e), z.$loading.increase && z.$loading.increase(y)
                                                        })), d.push(_)), z.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(x.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(e) {
                                                            z.$loading.increase && z.$loading.increase(y)
                                                        })), d.push(p)), e.abrupt("return", Promise.all(d));
                                                    case 14:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 82:
                                    l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), e.next = 99;
                                    break;
                                case 85:
                                    if (e.prev = 85, e.t2 = e.catch(29), "ERR_REDIRECT" !== (E = e.t2 || {}).message) {
                                        e.next = 90;
                                        break
                                    }
                                    return e.abrupt("return", this.$nuxt.$emit("routeChanged", t, n, E));
                                case 90:
                                    return w = [], Object(f.k)(E), "function" == typeof(T = (d.a.options || d.a).layout) && (T = T(x.context)), e.next = 96, this.loadLayout(T);
                                case 96:
                                    this.error(E), this.$nuxt.$emit("routeChanged", t, n, E), o();
                                case 99:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [29, 85],
                            [48, 73],
                            [50, 65, 68, 71]
                        ])
                    })))).apply(this, arguments)
                }

                function z(e, n) {
                    Object(f.d)(e, (function(e, n, r, c) {
                        return "object" !== Object(t.a)(e) || e.options || ((e = o.a.extend(e))._Ctor = e, r.components[c] = e), e
                    }))
                }

                function S(e) {
                    var t = Boolean(this.$options.nuxt.err);
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
                    var n = t ? (d.a.options || d.a).layout : e.matched[0].components.default.options.layout;
                    "function" == typeof n && (n = n(x.context)), this.setLayout(n)
                }

                function I(e) {
                    e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
                }

                function L(e, t) {
                    var n = this;
                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                        var r = Object(f.h)(e),
                            c = Object(f.g)(e),
                            l = !1;
                        o.a.nextTick((function() {
                            r.forEach((function(e, i) {
                                if (e && !e._isDestroyed && e.constructor._dataRefresh && c[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                    var t = e.constructor.options.data.call(e);
                                    for (var n in t) o.a.set(e.$data, n, t[n]);
                                    l = !0
                                }
                            })), l && window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            })), I(n)
                        }))
                    }
                }

                function D(e) {
                    window.onNuxtReadyCbs.forEach((function(t) {
                        "function" == typeof t && t(e)
                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e), _.afterEach((function(t, n) {
                        o.a.nextTick((function() {
                            return e.$nuxt.$emit("routeChanged", t, n)
                        }))
                    }))
                }

                function N() {
                    return (N = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                        var n, r, c, l, d;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return x = t.app, _ = t.router, t.store, n = new o.a(x), r = k.layout || "default", e.next = 7, n.loadLayout(r);
                                case 7:
                                    return n.setLayout(r), c = function() {
                                        n.$mount("#__nuxt"), _.afterEach(z), _.afterEach(S.bind(n)), _.afterEach(L.bind(n)), o.a.nextTick((function() {
                                            D(n)
                                        }))
                                    }, e.next = 11, Promise.all(P(_));
                                case 11:
                                    if (l = e.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), l.length && (n.setTransitions(C(l, _.currentRoute)), w = _.currentRoute.matched.map((function(e) {
                                            return Object(f.c)(e.path)(_.currentRoute.params)
                                        }))), n.$loading = {}, k.error && n.error(k.error), _.beforeEach(M.bind(n)), _.beforeEach(E.bind(n)), !k.serverRendered || !Object(f.n)(k.routePath, n.context.route.path)) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.abrupt("return", c());
                                case 20:
                                    return d = function() {
                                        z(_.currentRoute, _.currentRoute), S.call(n, _.currentRoute), I(n), c()
                                    }, e.next = 23, new Promise((function(e) {
                                        return setTimeout(e, 0)
                                    }));
                                case 23:
                                    E.call(n, _.currentRoute, _.currentRoute, (function(path) {
                                        if (path) {
                                            var e = _.afterEach((function(t, n) {
                                                e(), d()
                                            }));
                                            _.push(path, void 0, (function(e) {
                                                e && O(e)
                                            }))
                                        } else d()
                                    }));
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                Object(d.b)(null, k.config).then((function(e) {
                    return N.apply(this, arguments)
                })).catch(O)
            }.call(this, n(35))
    }, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n(149)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, ".view-error__content[data-v-42df1dcc]{display:flex;flex-direction:column;justify-content:center;align-items:center}.view-error__404-image[data-v-42df1dcc]{width:300px;max-width:100%}@media(min-width:960px){.view-error__404-image[data-v-42df1dcc]{width:auto}}", ""]), e.exports = r
    }, function(e, t, n) {
        "use strict";
        n(150)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), e.exports = r
    }, function(e, t, n) {
        var content = n(242);
        "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(20).default)("1a7ca69e", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var r = n(19),
            o = n(194),
            c = n(243),
            l = n(244),
            f = n(197),
            d = r(!1),
            h = o(c),
            m = o(l),
            v = o(f);
        d.push([e.i, '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;overflow:hidden;width:auto!important;height:auto!important;z-index:0}.simplebar-mask,.simplebar-offset{position:absolute;padding:0;margin:0;left:0;top:0;bottom:0;right:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:" ";display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;z-index:-1}.simplebar-height-auto-observer,.simplebar-track{position:absolute;overflow:hidden;pointer-events:none}.simplebar-track{z-index:1;right:0;bottom:0}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:"";background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition:opacity 0s linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}html{font-size:14px;font-family:"Open Sans",sans-serif}#__layout,#__nuxt,body,html{height:100%;width:100%}body{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;background-color:#fafafa;overflow:auto}*{box-sizing:border-box}a{text-decoration:none;cursor:pointer}.hy-pad-t-1{padding-top:1rem}.hy-pad-b-1{padding-bottom:1rem}.hy-mar-t-1{margin-top:1rem}.hy-mar-b-1{margin-bottom:1rem}.hy-pad-t-2{padding-top:2rem}.hy-pad-b-2{padding-bottom:2rem}.hy-mar-t-2{margin-top:2rem}.hy-mar-b-2{margin-bottom:2rem}.hy-pad-t-3{padding-top:3rem}.hy-pad-b-3{padding-bottom:3rem}.hy-mar-t-3{margin-top:3rem}.hy-mar-b-3{margin-bottom:3rem}.hy-pad-t-4{padding-top:4rem}.hy-pad-b-4{padding-bottom:4rem}.hy-mar-t-4{margin-top:4rem}.hy-mar-b-4{margin-bottom:4rem}.hy-pad-t-5{padding-top:5rem}.hy-pad-b-5{padding-bottom:5rem}.hy-mar-t-5{margin-top:5rem}.hy-mar-b-5{margin-bottom:5rem}.hy-pad-t-6{padding-top:6rem}.hy-pad-b-6{padding-bottom:6rem}.hy-mar-t-6{margin-top:6rem}.hy-mar-b-6{margin-bottom:6rem}.hy-checkbox{margin-bottom:.5em}.hy-checkbox input{margin-right:1em}.hy-checkbox label{font-size:1.2em}.line-through{text-decoration:line-through}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.fade-fast-enter-active,.fade-fast-leave-active{transition:opacity .2s}.fade-fast-enter,.fade-fast-leave-to{opacity:0}.fade-varyn-enter-active,.fade-varyn-leave-active{transition:opacity 1s}.fade-varyn-enter,.fade-varyn-leave-to{opacity:0}.hy-button{background-color:#1a62ff;padding:.7em 2em;border-radius:.35em;color:#f7f7f7;font-weight:800;font-size:1.05em;border:0;cursor:pointer}.hy-button_gold{transition:all .3s ease;background-color:rgba(122,116,99,0);color:#7a7463}.hy-button_gold:active,.hy-button_gold:focus,.hy-button_gold:hover{background-color:#7a7463;color:#f7f7f7}.offset-anchor{display:block;position:relative;top:-50px;visibility:hidden}@media(min-width:960px){.offset-anchor{top:-70px}}p{line-height:160%;letter-spacing:.02em;font-size:1.05em;font-weight:400;margin:.8em 0}em{font-size:.8em;opacity:.9}.hy-content-page_text h1,.hy-title{color:#7a7463;font-size:2em;text-align:center;text-transform:uppercase;font-weight:800;margin-top:3rem;margin-bottom:3rem}@media(min-width:960px){.hy-content-page_text h1,.hy-title{font-size:2.8em}}.hy-sub-title{color:#7a7463;font-size:1.8em;text-align:center;text-transform:uppercase;font-weight:800}@media(min-width:960px){.hy-sub-title{font-size:2.5em}}.hy-content-page_text h2,.hy-heading-2{font-size:1.4em}.hy-content-page_text h2,.hy-content-page_text h3,.hy-heading-2,.hy-heading-3{text-align:left;color:#7a7463;text-transform:uppercase;font-weight:800;margin-top:2em;margin-bottom:1em}.hy-content-page_text h3,.hy-heading-3{font-size:1.3em}.hy-content-page_text h4,.hy-heading-4{color:#7a7463;font-size:1.3em;text-align:left;font-weight:600;margin:1em 0}.hy-content-page_text li,.hy-content-page_text p,.hy-text{color:#2b2a29;max-width:960px;text-align:left;font-size:1rem;margin-top:4px;margin-bottom:10px}@media(min-width:960px){.hy-content-page_text li,.hy-content-page_text p,.hy-text{font-size:1.14rem}}.hy-text_center{text-align:center;max-width:100%}.hy-content-page_text li a,.hy-content-page_text p a,.hy-text a{color:#7a7463;text-decoration:underline}.hy-content-page_text li b,.hy-content-page_text li strong,.hy-content-page_text p b,.hy-content-page_text p strong,.hy-text b,.hy-text strong{color:#7a7463}.hy-content-page{display:flex;padding-bottom:4rem;justify-content:flex-start;flex-direction:column;align-items:center;background-color:#fafafa}.hy-content-page__background-image{position:absolute;left:0;top:0;right:0;height:800px;max-height:100vh;z-index:0;pointer-events:none}.hy-content-page__background-image~div{z-index:1}.hy-content-page__background-image:before{content:"";position:absolute;left:0;top:0;right:0;height:100%;background-image:url(' + h + ');background-repeat:no-repeat;opacity:.1;background-size:cover;background-position:bottom;filter:saturate(.3);z-index:0}.hy-content-page__background-image:after{z-index:0;content:"";position:absolute;left:0;right:0;bottom:0;height:300px;background:linear-gradient(0deg,#fafafa,hsla(0,0%,98%,0) 100%)}.hy-content-page__background-image_grasslands:before{background-image:url(' + m + ');background-position:50%}.hy-content-page_text ul{list-style:none}.hy-content-page_text li{position:relative;line-height:150%;letter-spacing:.02em}.hy-content-page_text li ul{margin-top:.7em}.hy-content-page_text li:before{content:"";position:absolute;align-items:center;top:.3em;left:-1.4em;display:inline-block;width:14px;height:14px;background:url(' + v + ") 0 0 no-repeat;background-size:contain;vertical-align:middle}.hy-content-page__content{padding-left:1em;padding-right:1em;width:100%;position:relative}@media(min-width:960px){.hy-content-page__content{padding-left:0;padding-right:0;max-width:1264px}}@media(min-width:960px){.hy-content-page__content_md{max-width:960px}}#app.hypixel-app_varyn .app-header__link:after,#app.hypixel-app_varyn .hy-button{background-color:#60b83c}#app.hypixel-app_varyn .selection-box__bottom:after,#app.hypixel-app_varyn .selection-box__bottom:before,#app.hypixel-app_varyn .selection-box__top:after,#app.hypixel-app_varyn .selection-box__top:before{border-color:#60b83c}#app.hypixel-app_varyn .hero-citation__citation-text{color:#60b83c}#app.hypixel-app_varyn .hero-citation__citation-tab{border-color:#60b83c}", ""]), e.exports = d
    }, function(e, t, n) {
        e.exports = n.p + "img/zone2-sandstorm-low.c0e2696.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/zone1-grasslands-low.4c71715.jpg"
    }, function(e, t, n) {
        "use strict";
        n(151)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, ".hamburger-menu[data-v-0537b7fb]{width:1em;color:#cacaca}", ""]), e.exports = r
    }, function(e, t, n) {
        "use strict";
        n(152)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, '.app-header[data-v-b5311664]{background-color:#0a0b14;height:50px;position:fixed;top:0;left:0;width:100%;z-index:1000;display:flex;justify-content:center;align-items:center}@media(min-width:960px){.app-header[data-v-b5311664]{height:70px}}.app-header__wrapper[data-v-b5311664]{display:flex;height:100%;width:100%;max-width:1920px}.app-header__content[data-v-b5311664]{height:100%;width:100%;position:relative}@media(min-width:960px){.app-header__content[data-v-b5311664]{margin:0 14.3em}}.app-header__hamburger-menu-container[data-v-b5311664]{left:1em;top:50%;transform:translateY(-50%);position:absolute;display:flex;width:1em;flex-shrink:0;justify-content:center}@media(min-width:960px){.app-header__hamburger-menu-container[data-v-b5311664]{display:none}}.app-header__logo-container[data-v-b5311664]{position:absolute;display:flex;justify-content:center;align-items:center;left:50%;top:50%;transform:translate(-50%,-50%)}@media(min-width:960px){.app-header__logo-container[data-v-b5311664]{left:-4em;transform:translate(-100%,-50%)}}.app-header__logo[data-v-b5311664]{position:relative;height:2.5em}@media(min-width:960px){.app-header__logo[data-v-b5311664]{height:3em}}.app-header__links[data-v-b5311664]{list-style:none;width:100%;height:100%;display:none}@media(min-width:960px){.app-header__links[data-v-b5311664]{display:flex}}.app-header__links-list[data-v-b5311664]{margin:0;padding:0;display:flex;list-style:none;height:100%}.app-header__link-list-item[data-v-b5311664]{height:100%;margin:0 15px}.app-header__link-list-item[data-v-b5311664]:first-child{margin-left:0}.app-header__link[data-v-b5311664]{font-size:1.1em;letter-spacing:.05em;color:#cacaca;text-transform:uppercase;font-weight:bolder;position:relative;padding:0 15px;width:100%;height:100%;display:flex;justify-content:center;align-items:center;transition:background .3s ease}.app-header__link[data-v-b5311664]:hover{background:#15151b}.app-header__link[data-v-b5311664]:after{content:"";transition:height .3s ease;width:100%;background-color:#1a62ff;position:absolute;bottom:0;left:0;height:0}.app-header__link.nuxt-link-active[data-v-b5311664]:after{height:4px}', ""]), e.exports = r
    }, , function(e, t, n) {
        "use strict";
        n(154)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, '.app-footer[data-v-b64086d8]{background:radial-gradient(circle,#19162b 0,#19162b 14%,#0c0818 50%);position:relative}@media(min-width:960px){.app-footer[data-v-b64086d8]{height:350px}}@media(max-width:599px){.app-footer_cookie-bar .app-footer__content-container[data-v-b64086d8]{padding-bottom:150px}}@media(min-width:600px)and (max-width:959px){.app-footer_cookie-bar .app-footer__content-container[data-v-b64086d8]{padding-bottom:120px}}.app-footer[data-v-b64086d8]:before{content:"";position:absolute;top:10px;left:0;width:100%;height:1px;background-color:#322d45}.app-footer__content-container[data-v-b64086d8]{display:flex;flex-direction:column;align-items:center;height:100%;padding:40px}.app-footer__logo[data-v-b64086d8]{margin-top:15px;width:150px;filter:drop-shadow(0 6px 10px rgba(0,0,0,.12)) drop-shadow(0 1px 18px rgba(0,0,0,.14)) drop-shadow(0 3px 5px rgba(0,0,0,.12)) drop-shadow(0 -2px 3px rgba(0,0,0,.1))}@media(min-width:960px){.app-footer__logo[data-v-b64086d8]{margin-top:40px;width:200px}}.app-footer__links[data-v-b64086d8]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:15px}@media(min-width:960px){.app-footer__links[data-v-b64086d8]{margin-top:35px}}.app-footer__link[data-v-b64086d8]{color:#9896ae;margin-top:10px;padding:0 .8em;font-weight:200;text-transform:uppercase;font-size:.9em;border-right:1px solid #9896ae}.app-footer__link[data-v-b64086d8]:last-child{border-right:0}@media(min-width:960px){.app-footer__link[data-v-b64086d8]{padding:0 20px;font-size:1.3em}}', ""]), e.exports = r
    }, function(e, t, n) {
        "use strict";
        n(155)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, '.mobile-menu[data-v-192882fb]{position:fixed;left:0;top:50px;right:0;bottom:0;z-index:1001;background-color:#0a0b14}@media(min-width:960px){.mobile-menu[data-v-192882fb]{display:none}}.mobile-menu__list[data-v-192882fb]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}.mobile-menu__item[data-v-192882fb]{padding:1.5em 1em;border-bottom:1px solid rgba(152,150,174,.3)}.mobile-menu__item[data-v-192882fb]:first-child{border-top:1px solid rgba(152,150,174,.3)}.mobile-menu__link[data-v-192882fb]{color:#cacaca;font-size:1em;letter-spacing:.05em;text-transform:uppercase;font-weight:bolder;display:flex;justify-content:flex-start;align-items:center}.mobile-menu__link.nuxt-link-active[data-v-192882fb]:before{background:rgba(152,150,174,.8)}.mobile-menu__link[data-v-192882fb]:before{content:"";width:6px;height:6px;margin-right:1em;border:1px solid rgba(152,150,174,.4);background:rgba(152,150,174,.2);transform:rotate(45deg)}.slide-fade-enter-active[data-v-192882fb],.slide-fade-leave-active[data-v-192882fb]{transition:all .3s ease}.slide-fade-enter[data-v-192882fb],.slide-fade-leave-to[data-v-192882fb]{transform:translateX(-10px);opacity:0}', ""]), e.exports = r
    }, function(e, t) {
        e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAgNTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMyMzFGMjAiIGQ9Ik05LjAxNiw0MC44MzdjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTIsMC43MDcsMC4yOTJjMC4yNTYsMCwwLjUxMi0wLjA5OCwwLjcwOC0wLjI5M2wxNC4yOTItMTQuMzA5DQoJbDE0LjI5MiwxNC4zMDljMC4xOTUsMC4xOTYsMC40NTEsMC4yOTMsMC43MDgsMC4yOTNjMC4yNTYsMCwwLjUxMi0wLjA5OCwwLjcwNy0wLjI5MmMwLjM5MS0wLjM5LDAuMzkxLTEuMDIzLDAuMDAxLTEuNDE0DQoJTDI2LjE1MywyNS4xMjlMNDAuNDMsMTAuODM2YzAuMzktMC4zOTEsMC4zOS0xLjAyNC0wLjAwMS0xLjQxNGMtMC4zOTItMC4zOTEtMS4wMjQtMC4zOTEtMS40MTQsMC4wMDFMMjQuNzIyLDIzLjczMkwxMC40Myw5LjQyMw0KCWMtMC4zOTEtMC4zOTEtMS4wMjQtMC4zOTEtMS40MTQtMC4wMDFjLTAuMzkxLDAuMzktMC4zOTEsMS4wMjMtMC4wMDEsMS40MTRsMTQuMjc2LDE0LjI5M0w5LjAxNSwzOS40MjMNCglDOC42MjUsMzkuODEzLDguNjI1LDQwLjQ0Nyw5LjAxNiw0MC44Mzd6Ii8+DQo8L3N2Zz4NCg=="
    }, function(e, t, n) {
        "use strict";
        n(156)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, '.inputWrapper--checkbox .inputWrapper__inner{display:flex}.inputWrapper .inputCheckbox{position:relative;display:inline-block;width:1.2em}.inputWrapper .inputCheckbox label{width:1.2em;height:1.2em;cursor:pointer;position:absolute;top:0;left:0;border:2px solid #79602f;background:#0f1a2b;border-radius:4px}.inputWrapper .inputCheckbox label:after{content:"";width:9px;height:5px;position:absolute;top:2px;left:2px;border:3px solid #c6aa67;border-top:none;border-right:none;background:transparent;opacity:0;transform:rotate(-45deg)}.inputWrapper .inputCheckbox label:hover:after{opacity:.3}.inputWrapper .inputCheckbox input[type=checkbox]{visibility:hidden}.inputWrapper .inputCheckbox input[type=checkbox]:checked+label:after{opacity:1}.inputWrapper .inputCheckboxLabel{display:inline-block;margin-left:1em;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}', ""]), e.exports = r
    }, function(e, t, n) {
        "use strict";
        n(157)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, ".cookie-manager-modal{position:fixed;left:0;top:0;width:100%;height:100%;z-index:1000}.cookie-manager-modal__overlay{left:0;top:0;width:100%;height:100%;position:absolute;background-color:rgba(0,0,0,.5)}.cookie-manager-modal__container{left:50%;top:50%;transform:translate(-50%,-50%);position:absolute;border-width:1px;border-radius:5px;width:96%;max-height:96%;overflow:auto;box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}@media(min-width:600px){.cookie-manager-modal__container{width:75%}}@media(min-width:960px){.cookie-manager-modal__container{width:800px;height:auto}}.cookie-manager-modal .hy-content-page__background-image{max-height:100%;z-index:-1}.cookie-manager-modal__close-btn-container{width:1.5em;height:1.5em;display:flex;justify-content:center;align-items:center;position:absolute;right:1em;top:1em;cursor:pointer}.cookie-manager-modal__close-btn{width:1.5em;height:1.5em}.cookie-manager-modal__title{text-align:center}.cookie-manager-modal__description{margin:0 2em;padding-bottom:.8em;flex-shrink:0}.cookie-manager-modal__options{padding:1em 2em;flex-shrink:0}.cookie-manager-modal__required-input{filter:grayscale(1)}.cookie-manager-modal__sub-option{margin-left:2em;margin-bottom:1.5em}.cookie-manager-modal__actions{flex-shrink:0;text-align:center;box-sizing:border-box}.cookie-manager-modal__required-input{pointer-events:none}.cookie-manager-modal label{font-weight:700;color:#1d0e47}.cookie-manager-modal__cookie-description{margin-left:2em;margin-bottom:1.3em}", ""]), e.exports = r
    }, function(e, t, n) {
        "use strict";
        n(158)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, ".cookie-bar__wrapper[data-v-59111a60]{position:fixed;bottom:0;left:0;right:0;flex-direction:row;z-index:1000;border-top:1px solid #322d45;background:#0a0b14;color:#cacaca}.cookie-bar__container[data-v-59111a60]{margin:auto;display:flex;padding:1em;flex-direction:column;max-width:1264px}@media(min-width:960px){.cookie-bar__container[data-v-59111a60]{flex-direction:row}}.cookie-bar__container a[data-v-59111a60]{display:inline-block}.cookie-bar__text[data-v-59111a60]{flex:1;font-size:.95em;text-align:center}.cookie-bar__link-details-container[data-v-59111a60]{margin:0 1em;display:inline-block}.cookie-bar__link-details-container a[data-v-59111a60]{color:#9896ae}.cookie-bar__options[data-v-59111a60]{margin-top:1em;display:flex;font-size:.95em;flex:1;align-items:center;justify-content:space-around}@media(min-width:960px){.cookie-bar__options[data-v-59111a60]{margin-top:0;justify-content:flex-end}}.cookie-bar__item-divider[data-v-59111a60]{display:inline-block;height:1.2em;width:1px;margin:0 .8em;background:#9896ae}@media(min-width:600px){.cookie-bar__item-divider[data-v-59111a60]{vertical-align:middle;align-self:stretch;height:auto}}.cookie-bar__action[data-v-59111a60]{color:#9896ae}@media(min-width:600px){.cookie-bar__action[data-v-59111a60]{flex:1;text-align:center}}@media(min-width:960px){.cookie-bar__action[data-v-59111a60]{white-space:nowrap}}@media(min-width:600px){.cookie-bar__action[data-v-59111a60]{flex:0}}", ""]), e.exports = r
    }, function(e, t, n) {
        "use strict";
        n(159)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, ".hypixel-app{padding-top:50px;display:flex;flex-direction:column;min-height:100%}.hypixel-app__view{flex:1}.hypixel-app__varyn-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#0a0b14;z-index:90001}@media(min-width:960px){.hypixel-app{padding-top:70px}}", ""]), e.exports = r
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "state", (function() {
            return r
        })), n.d(t, "mutations", (function() {
            return o
        }));
        var r = function() {
                return {
                    varyn: !1
                }
            },
            o = {
                toggleVaryn: function(e) {
                    e.varyn = !e.varyn
                }
            }
    }, , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n(168)
    }, function(e, t, n) {
        var r = n(19)(!1);
        r.push([e.i, '.item-divider[data-v-7f1a103e]{background:#969285;height:1px;width:calc(100% - 14px);margin-left:6px;position:relative}.item-divider[data-v-7f1a103e]:after,.item-divider[data-v-7f1a103e]:before{position:absolute;content:"";width:5px;height:5px;border:1px solid #969285;transform:rotate(45deg);top:-3px}.item-divider[data-v-7f1a103e]:after{right:-7px}.item-divider[data-v-7f1a103e]:before{left:-7px}', ""]), e.exports = r
    }],
    [
        [214, 25, 1, 26]
    ]
]);