(window.webpackJsonp = window.webpackJsonp || []).push([
    [16, 5], {
        337: function(t, e, n) {
            var content = n(366);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(20).default)("0614c5a0", content, !0, {
                sourceMap: !1
            })
        },
        365: function(t, e, n) {
            "use strict";
            n(337)
        },
        366: function(t, e, n) {
            var o = n(19),
                r = n(194),
                c = n(367),
                l = o(!1),
                f = r(c);
            l.push([t.i, ".hero-citation[data-v-52681436]{position:absolute;color:#9896ae;font-weight:200;font-size:1.8rem;max-width:85%;text-align:center}@media(min-width:600px){.hero-citation[data-v-52681436]{width:auto}}.hero-citation__citation-glow[data-v-52681436]{background-image:url(" + f + ");background-size:contain;background-position:50%;background-repeat:no-repeat;width:calc(100vw - 50px);height:300px;position:absolute;left:20%;top:40%;transform:translate(-50%,-50%);opacity:.85}.hero-citation__citation-text-container[data-v-52681436]{position:relative;overflow:hidden;width:0;height:1.5em;transition:width 2s ease 1s}.hero-citation__citation-text[data-v-52681436]{max-width:100%;height:1.5em;overflow:hidden;position:relative;font-size:.6em;white-space:nowrap;text-align:center;vertical-align:middle}@media(min-width:600px){.hero-citation__citation-text[data-v-52681436]{font-size:.75em}}@media(min-width:960px){.hero-citation__citation-text[data-v-52681436]{font-size:1em}}.hero-citation__citation-tab[data-v-52681436]{position:absolute;border:1px solid #9896ae;width:16px;height:16px;opacity:.7}.hero-citation__citation-tab_left[data-v-52681436]{left:-16px;bottom:-8px;border-top:0;border-right:0}.hero-citation__citation-tab_right[data-v-52681436]{right:-16px;top:-6px;border-bottom:0;border-left:0}", ""]), t.exports = l
        },
        367: function(t, e, n) {
            t.exports = n.p + "img/home-hero-citation-glow.ca9926b.png"
        },
        379: function(t, e, n) {
            t.exports = n.p + "img/rune-circle-background.9f9d16c.png"
        },
        410: function(t, e, n) {
            "use strict";
            n.r(e);
            n(27);
            var o = n(5),
                r = n(15),
                c = n(12),
                l = n(13),
                f = n(3),
                d = n(4),
                m = n(2);

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(f.a)(t);
                    if (e) {
                        var r = Object(f.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var v = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (r < 3 ? o(c) : r > 3 ? o(e, n, c) : o(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c
                },
                _ = function(t) {
                    Object(c.a)(n, t);
                    var e = h(n);

                    function n() {
                        return Object(o.a)(this, n), e.apply(this, arguments)
                    }
                    return Object(r.a)(n, [{
                        key: "mounted",
                        value: function() {
                            var t = this.$refs.citationContainer;
                            if (t) {
                                var e = t.scrollWidth;
                                t.style.width = "".concat(e + 20, "px")
                            }
                        }
                    }]), n
                }(m.c),
                y = _ = v([m.a], _),
                j = (n(365), n(8)),
                component = Object(j.a)(y, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "hero-citation"
                    }, [n("div", {
                        staticClass: "hero-citation__citation-glow"
                    }), t._v(" "), n("div", {
                        ref: "citationContainer",
                        staticClass: "hero-citation__citation-text-container"
                    }, [n("span", {
                        staticClass: "hero-citation__citation-text"
                    }, [t._t("default")], 2)]), t._v(" "), n("div", {
                        staticClass: "hero-citation__citation-tab hero-citation__citation-tab_left"
                    }), t._v(" "), n("div", {
                        staticClass: "hero-citation__citation-tab hero-citation__citation-tab_right"
                    })])
                }), [], !1, null, "52681436", null);
            e.default = component.exports
        },
        460: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return _
            }));
            n(78), n(80), n(16), n(61), n(45);
            var o = n(11),
                r = n(5),
                c = n(15),
                l = n(12),
                f = n(13),
                d = n(3),
                m = n(57),
                h = n.n(m);

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(d.a)(t);
                    if (e) {
                        var r = Object(d.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(f.a)(this, n)
                }
            }
            var _ = function(t) {
                Object(l.a)(d, t);
                var e, n, f = v(d);

                function d() {
                    return Object(r.a)(this, d), f.call(this, {
                        baseUrl: "https://boards-api.greenhouse.io/v1/boards/hypixelstudios",
                        withCredentials: !1,
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                    })
                }
                return Object(c.a)(d, [{
                    key: "getList",
                    value: function() {
                        return this.get("/jobs?content=true").then((function(t) {
                            return t.data
                        })).catch((function(t) {
                            return Promise.reject(t)
                        }))
                    }
                }, {
                    key: "getListByDepartment",
                    value: (n = Object(o.a)(regeneratorRuntime.mark((function t() {
                        var e, n, o;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.getList();
                                case 2:
                                    return e = t.sent, n = {}, e.jobs.forEach((function(t) {
                                        var e = t.departments[0].name;
                                        n[e] || (n[e] = []), n[e].push(t)
                                    })), o = {}, "All" in n && (o.All = n.All), Object.keys(n).sort().forEach((function(t) {
                                        t in o || (o[t] = n[t])
                                    })), t.abrupt("return", o);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "getJob",
                    value: (e = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.get("/jobs/".concat(e)).then((function(t) {
                                        return t.data
                                    })).catch((function(t) {
                                        return Promise.reject(t)
                                    })));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) {
                        return e.apply(this, arguments)
                    })
                }]), d
            }(function() {
                function t(e) {
                    Object(r.a)(this, t), this.http = h.a.create({
                        baseURL: e.baseUrl,
                        withCredentials: e.withCredentials || !1,
                        headers: e.headers || {}
                    })
                }
                return Object(c.a)(t, [{
                    key: "get",
                    value: function(t) {
                        return this.http.get(t)
                    }
                }]), t
            }())
        },
        469: function(t, e, n) {
            var content = n(589);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(20).default)("580c45a1", content, !0, {
                sourceMap: !1
            })
        },
        470: function(t, e, n) {
            var content = n(592);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(20).default)("76850909", content, !0, {
                sourceMap: !1
            })
        },
        471: function(t, e, n) {
            var content = n(594);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(20).default)("6fb47cf4", content, !0, {
                sourceMap: !1
            })
        },
        472: function(t, e, n) {
            var content = n(597);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(20).default)("78062775", content, !0, {
                sourceMap: !1
            })
        },
        473: function(t, e, n) {
            var content = n(602);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(20).default)("80266dd2", content, !0, {
                sourceMap: !1
            })
        },
        474: function(t, e, n) {
            var content = n(605);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(20).default)("337b856a", content, !0, {
                sourceMap: !1
            })
        },
        475: function(t, e, n) {
            var content = n(608);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(20).default)("481a73f8", content, !0, {
                sourceMap: !1
            })
        },
        476: function(t, e, n) {
            var content = n(610);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(20).default)("74ca09ba", content, !0, {
                sourceMap: !1
            })
        },
        588: function(t, e, n) {
            "use strict";
            n(469)
        },
        589: function(t, e, n) {
            var o = n(19),
                r = n(194),
                c = n(590),
                l = o(!1),
                f = r(c);
            l.push([t.i, ".jobs-hero-banner[data-v-2df45bb2]{background-color:#111;min-height:350px;background-size:cover;position:relative;overflow:hidden;background-image:url(" + f + ");background-repeat:no-repeat;background-position:50%}@media(min-width:960px){.jobs-hero-banner[data-v-2df45bb2]{min-height:550px}}.jobs-hero-banner__title-container[data-v-2df45bb2]{position:absolute;top:calc(50% - 50px);left:50%;transform:translate(-50%,-50%)}@media(min-width:960px){.jobs-hero-banner__title-container[data-v-2df45bb2]{top:calc(50% - 20px)}}.jobs-hero-banner__title[data-v-2df45bb2]{text-transform:uppercase;font-size:4rem;padding:.1em;font-weight:800;color:#c1bed1;position:relative;background:linear-gradient(#dee5ed,#78899e);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;background-repeat:no-repeat;background-size:100% 98%;background-position:50%}.jobs-hero-banner__title[data-v-2df45bb2]:before{content:attr(data-text);z-index:-1;position:absolute;top:0;left:50%;width:100%;background:none;transform:translateX(-50%)}@media(min-width:960px){.jobs-hero-banner__title[data-v-2df45bb2]{font-size:6rem}}.jobs-hero-banner__citation[data-v-2df45bb2]{position:absolute;left:50%;transform:translate(-50%,-50%);top:auto;bottom:95px}@media(min-width:960px){.jobs-hero-banner__citation[data-v-2df45bb2]{bottom:130px}}.jobs-hero-banner__section-links[data-v-2df45bb2]{position:absolute;display:flex;flex-wrap:wrap;justify-content:center;left:50%;transform:translateX(-50%);bottom:.6em;width:100%}@media(min-width:960px){.jobs-hero-banner__section-links[data-v-2df45bb2]{bottom:2em}}.jobs-hero-banner__section-link[data-v-2df45bb2]{transition:all .3s ease;background-color:rgba(152,150,174,.2);padding:.5em 1em;border-radius:1em;color:#cacaca;margin:.3em 1em;opacity:.9;font-size:.8em}@media(min-width:960px){.jobs-hero-banner__section-link[data-v-2df45bb2]{font-size:1em}}.jobs-hero-banner__section-link[data-v-2df45bb2]:hover{background-color:rgba(152,150,174,.5)}", ""]), t.exports = l
        },
        590: function(t, e, n) {
            t.exports = n.p + "img/jobs-header.450bc50.jpg"
        },
        591: function(t, e, n) {
            "use strict";
            n(470)
        },
        592: function(t, e, n) {
            var o = n(19)(!1);
            o.push([t.i, ".current-jobs[data-v-02f49350]{width:100%;margin:0;text-align:center;position:relative;display:flex;justify-content:center}.current-jobs__title[data-v-02f49350]{margin-top:0}.current-jobs__container[data-v-02f49350]{max-width:1264px;width:100%}@media(min-width:960px){.current-jobs__container[data-v-02f49350]{padding:0 1em}}.current-jobs__list[data-v-02f49350]{padding-top:1em}.current-jobs__job[data-v-02f49350]{padding:1.5em 1em;width:100%;text-align:left;color:#2b2a29;transition:background .3s ease;display:flex;justify-content:space-between;align-items:center;flex-direction:column;flex-direction:row}.current-jobs__job[data-v-02f49350]:nth-child(2n){background-color:rgba(0,0,0,.06)}.current-jobs__departments[data-v-02f49350]{margin-top:2em}.current-jobs__departments[data-v-02f49350]:first-child{margin-top:0}.current-jobs__department-name[data-v-02f49350]{text-transform:uppercase;text-align:left;color:#7a7463;font-size:1.4em;display:flex;align-items:center}.current-jobs__department-name img[data-v-02f49350]{height:1em;margin-right:.3em}.current-jobs__details[data-v-02f49350]{width:100%;flex:1;display:flex;flex-direction:column}.current-jobs__job-location[data-v-02f49350],.current-jobs__job-title[data-v-02f49350]{padding:0 2px}.current-jobs__job-location[data-v-02f49350]{text-align:left}.current-jobs__job-title[data-v-02f49350]{text-transform:uppercase;font-weight:700;flex:2;width:100%;color:#2b2a29}.current-jobs__job-title[data-v-02f49350]:hover{text-decoration:underline}.current-jobs__apply-btn-container[data-v-02f49350]{justify-content:flex-end}.current-jobs__apply-btn[data-v-02f49350]{color:#7a7463;text-decoration:underline;font-weight:800;font-size:1.05em;padding:0 1em}", ""]), t.exports = o
        },
        593: function(t, e, n) {
            "use strict";
            n(471)
        },
        594: function(t, e, n) {
            var o = n(19),
                r = n(194),
                c = n(595),
                l = n(379),
                f = o(!1),
                d = r(c),
                m = r(l);
            f.push([t.i, "p[data-v-4f3ff98b]{line-height:160%;letter-spacing:.02em;font-size:1.05em;font-weight:400;margin:.8em 0}em[data-v-4f3ff98b]{font-size:.8em;opacity:.9}.hy-title[data-v-4f3ff98b]{color:#7a7463;font-size:2em;text-align:center;text-transform:uppercase;font-weight:800;margin-top:3rem;margin-bottom:3rem}@media(min-width:960px){.hy-title[data-v-4f3ff98b]{font-size:2.8em}}.hy-sub-title[data-v-4f3ff98b]{color:#7a7463;font-size:1.8em;text-align:center;text-transform:uppercase;font-weight:800}@media(min-width:960px){.hy-sub-title[data-v-4f3ff98b]{font-size:2.5em}}.hy-heading-2[data-v-4f3ff98b]{font-size:1.4em}.hy-heading-2[data-v-4f3ff98b],.hy-heading-3[data-v-4f3ff98b]{text-align:left;color:#7a7463;text-transform:uppercase;font-weight:800;margin-top:2em;margin-bottom:1em}.hy-heading-3[data-v-4f3ff98b],.hy-heading-4[data-v-4f3ff98b]{font-size:1.3em}.hy-heading-4[data-v-4f3ff98b]{color:#7a7463;text-align:left;font-weight:600;margin:1em 0}.hy-text[data-v-4f3ff98b],.job-testimonial__content[data-v-4f3ff98b] p{color:#2b2a29;max-width:960px;text-align:left;font-size:1rem;margin-top:4px;margin-bottom:10px}@media(min-width:960px){.hy-text[data-v-4f3ff98b],.job-testimonial__content[data-v-4f3ff98b] p{font-size:1.14rem}}.hy-text_center[data-v-4f3ff98b]{text-align:center;max-width:100%}.hy-text a[data-v-4f3ff98b],.job-testimonial__content[data-v-4f3ff98b] p a{color:#7a7463;text-decoration:underline}.hy-text b[data-v-4f3ff98b],.hy-text strong[data-v-4f3ff98b],.job-testimonial__content[data-v-4f3ff98b] p b,.job-testimonial__content[data-v-4f3ff98b] p strong{color:#7a7463}.job-testimonial[data-v-4f3ff98b]{display:flex;flex-direction:column;margin-bottom:1em;align-items:center}@media(min-width:960px){.job-testimonial[data-v-4f3ff98b]{margin-bottom:3em;align-items:stretch;flex-direction:row}.job-testimonial_reverse[data-v-4f3ff98b]{flex-direction:row-reverse}.job-testimonial_reverse .job-testimonial__content[data-v-4f3ff98b]{margin-right:1.5em;margin-left:0}}.job-testimonial__card[data-v-4f3ff98b]{position:relative;display:flex;overflow:hidden;flex-shrink:0;background-size:cover;box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);width:240px;height:360px;margin-bottom:1em}@media(min-width:960px){.job-testimonial__card[data-v-4f3ff98b]{margin-bottom:0;width:300px;height:450px}}.job-testimonial__card-frame[data-v-4f3ff98b]{position:absolute;top:0;right:0;bottom:0;left:0;background:url(" + d + ');background-size:cover}.job-testimonial__card-label[data-v-4f3ff98b]{position:absolute;bottom:0;left:0;right:0;padding:1.6em;background:linear-gradient(0deg,rgba(26,31,43,.9),rgba(26,31,43,.8),rgba(26,31,43,.5),rgba(26,31,43,0));text-align:center}.job-testimonial__name[data-v-4f3ff98b]{text-transform:uppercase;font-size:1.4em;font-weight:800;margin:.3em;color:#dee5ed;position:relative;background:linear-gradient(#ffe98d,#e19f27);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;background-repeat:no-repeat;background-size:100% 98%;background-position:50%}.job-testimonial__name[data-v-4f3ff98b]:before{content:attr(data-text);z-index:-1;position:absolute;top:0;left:50%;width:100%;background:none;transform:translateX(-50%)}.job-testimonial__job-title[data-v-4f3ff98b]{text-transform:uppercase;font-size:.9em;color:#cacaca;margin:.2em}.job-testimonial__content[data-v-4f3ff98b]{padding:1em 2em;border-radius:5px;position:relative}.job-testimonial__content[data-v-4f3ff98b]:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-image:url(' + m + ");background-size:45%;background-position:50%;background-repeat:no-repeat;opacity:.06}.job-testimonial__content[data-v-4f3ff98b] p{margin-top:0;position:relative;font-style:italic}", ""]), t.exports = f
        },
        595: function(t, e, n) {
            t.exports = n.p + "img/portrait-frame.8437601.png"
        },
        596: function(t, e, n) {
            "use strict";
            n(472)
        },
        597: function(t, e, n) {
            var o = n(19)(!1);
            o.push([t.i, ".job-testimonials[data-v-a91e8816]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.job-testimonials__from-the-team-text[data-v-a91e8816]{margin-top:0;margin-bottom:1.5em}.job-testimonials__list[data-v-a91e8816]{max-width:960px;position:relative}", ""]), t.exports = o
        },
        598: function(t, e, n) {
            t.exports = n.p + "img/kweeb-icon-paint.0f5aa8c.png"
        },
        599: function(t, e, n) {
            t.exports = n.p + "img/kweeb-icon-sleep.9e3eea4.png"
        },
        600: function(t, e, n) {
            t.exports = n.p + "img/kweeb-icon-trophy.d7e7ec8.png"
        },
        601: function(t, e, n) {
            "use strict";
            n(473)
        },
        602: function(t, e, n) {
            var o = n(19)(!1);
            o.push([t.i, ".jobs-some-tips[data-v-9b173326],.jobs-some-tips__content[data-v-9b173326]{width:100%;position:relative}.jobs-some-tips__content[data-v-9b173326]{background-color:#eae9e8;height:100%;display:flex;flex-direction:column;align-items:center;padding-left:3em;padding-right:3em}.jobs-some-tips__list[data-v-9b173326]{max-width:1264px;display:flex;justify-content:space-between;margin-bottom:3em;flex-direction:column}@media(min-width:960px){.jobs-some-tips__list[data-v-9b173326]{flex-direction:row}}.jobs-some-tips__title[data-v-9b173326]{margin-top:0}.jobs-some-tips__tip[data-v-9b173326]{width:100%;padding:1em 0;margin:0;font-size:.9em;display:flex;flex-direction:column;justify-content:flex-start}@media(min-width:960px){.jobs-some-tips__tip[data-v-9b173326]{width:25%}}.jobs-some-tips__icon-container[data-v-9b173326]{width:100%;text-align:center}.jobs-some-tips__icon[data-v-9b173326]{height:130px;margin-bottom:1em}.jobs-some-tips__tip-text[data-v-9b173326]{margin:1em 0 0}", ""]), t.exports = o
        },
        603: function(t, e, n) {
            t.exports = n.p + "img/mage-warrior.7ac9fa4.png"
        },
        604: function(t, e, n) {
            "use strict";
            n(474)
        },
        605: function(t, e, n) {
            var o = n(19),
                r = n(194),
                c = n(197),
                l = o(!1),
                f = r(c);
            l.push([t.i, 'p[data-v-0741fd04]{line-height:160%;letter-spacing:.02em;font-size:1.05em;font-weight:400;margin:.8em 0}em[data-v-0741fd04]{font-size:.8em;opacity:.9}.hy-title[data-v-0741fd04]{color:#7a7463;font-size:2em;text-align:center;text-transform:uppercase;font-weight:800;margin-top:3rem;margin-bottom:3rem}@media(min-width:960px){.hy-title[data-v-0741fd04]{font-size:2.8em}}.hy-sub-title[data-v-0741fd04]{color:#7a7463;font-size:1.8em;text-align:center;text-transform:uppercase;font-weight:800}@media(min-width:960px){.hy-sub-title[data-v-0741fd04]{font-size:2.5em}}.hy-heading-2[data-v-0741fd04]{font-size:1.4em}.hy-heading-2[data-v-0741fd04],.hy-heading-3[data-v-0741fd04]{text-align:left;color:#7a7463;text-transform:uppercase;font-weight:800;margin-top:2em;margin-bottom:1em}.hy-heading-3[data-v-0741fd04],.hy-heading-4[data-v-0741fd04]{font-size:1.3em}.hy-heading-4[data-v-0741fd04]{color:#7a7463;text-align:left;font-weight:600;margin:1em 0}.hy-text[data-v-0741fd04],.jobs-description__list[data-v-0741fd04]{color:#2b2a29;max-width:960px;text-align:left;font-size:1rem;margin-top:4px;margin-bottom:10px}@media(min-width:960px){.hy-text[data-v-0741fd04],.jobs-description__list[data-v-0741fd04]{font-size:1.14rem}}.hy-text_center[data-v-0741fd04]{text-align:center;max-width:100%}.hy-text a[data-v-0741fd04],.jobs-description__list a[data-v-0741fd04]{color:#7a7463;text-decoration:underline}.hy-text b[data-v-0741fd04],.hy-text strong[data-v-0741fd04],.jobs-description__list b[data-v-0741fd04],.jobs-description__list strong[data-v-0741fd04]{color:#7a7463}.jobs-description[data-v-0741fd04]{display:flex;justify-content:center;flex-direction:column;max-width:100%}@media(min-width:960px){.jobs-description[data-v-0741fd04]{max-width:1264px;width:100%;flex-direction:row}}.jobs-description__text[data-v-0741fd04]{display:flex;flex-direction:column;justify-content:center}@media(min-width:960px){.jobs-description__text[data-v-0741fd04]{padding:0 2em}}.jobs-description__text p[data-v-0741fd04]{text-align:left}.jobs-description__list[data-v-0741fd04]{list-style:none;padding:0;margin:1em 0}.jobs-description__item[data-v-0741fd04]{margin:.5em 0}.jobs-description__item[data-v-0741fd04]:before{content:"";display:inline-block;width:16px;height:16px;margin-right:.6em;background:url(' + f + ") 0 0 no-repeat;background-size:contain;vertical-align:middle}.jobs-description__page-description-image[data-v-0741fd04]{text-align:center}.jobs-description__page-description-image img[data-v-0741fd04]{max-width:100%;width:auto;height:auto}@media(min-width:960px){.jobs-description__page-description-image img[data-v-0741fd04]{margin-top:2em}}", ""]), t.exports = l
        },
        606: function(t, e, n) {
            t.exports = n.p + "img/application-process-2022-thumb.3aae756.jpg"
        },
        607: function(t, e, n) {
            "use strict";
            n(475)
        },
        608: function(t, e, n) {
            var o = n(19),
                r = n(194),
                c = n(379),
                l = o(!1),
                f = r(c);
            l.push([t.i, '.jobs-our-process[data-v-49665dbb]{width:100%;display:flex;flex-direction:column;align-items:center}.jobs-our-process__our-process-description[data-v-49665dbb]{text-align:center}.jobs-our-process__container[data-v-49665dbb]{margin:0;display:flex;flex-direction:column;justify-content:center}@media(min-width:960px){.jobs-our-process__container[data-v-49665dbb]{margin-top:2em;flex-direction:row;max-width:960px}}.jobs-our-process__application-process-icon-container[data-v-49665dbb]{margin:auto}.jobs-our-process__application-process-icon[data-v-49665dbb]{height:60px;width:auto}.jobs-our-process__title[data-v-49665dbb]{margin-top:0}.jobs-our-process__text[data-v-49665dbb]{display:flex;flex-direction:column;justify-content:flex-start;margin-right:1em;position:relative}.jobs-our-process__text[data-v-49665dbb]:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-image:url(' + f + ");background-size:40%;background-position:50%;background-repeat:no-repeat;opacity:.05}.jobs-our-process__link[data-v-49665dbb]{flex-shrink:0;margin-left:1em;text-align:center}.jobs-our-process__application-process-img[data-v-49665dbb]{max-width:100%;height:300px;flex-shrink:0;margin-top:2em}@media(min-width:960px){.jobs-our-process__application-process-img[data-v-49665dbb]{margin-top:0}}.jobs-our-process__application-process-img[data-v-49665dbb]{margin-bottom:1em;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}", ""]), t.exports = l
        },
        609: function(t, e, n) {
            "use strict";
            n(476)
        },
        610: function(t, e, n) {
            var o = n(19)(!1);
            o.push([t.i, ".jobs-view__container[data-v-086d0faf]{padding-bottom:3em;background-size:100%;background-color:#f3f3f3}.jobs-view__content[data-v-086d0faf]{margin:auto;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 1em}@media(min-width:960px){.jobs-view__content[data-v-086d0faf]{padding:0}}.jobs-view__divider[data-v-086d0faf]{max-width:1264px;opacity:.6}@media(min-width:960px){.jobs-view__divider[data-v-086d0faf]{width:calc(100% - 4em)}}", ""]), t.exports = o
        },
        872: function(t, e, n) {
            "use strict";
            n.r(e);
            n(27), n(45);
            var o = n(11),
                r = n(5),
                c = n(12),
                l = n(13),
                f = n(3),
                d = n(4),
                m = n(2),
                h = n(460),
                v = n(112),
                _ = n(15),
                y = n(410);

            function j(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(f.a)(t);
                    if (e) {
                        var r = Object(f.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var w = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (r < 3 ? o(c) : r > 3 ? o(e, n, c) : o(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c
                },
                x = function(t) {
                    Object(c.a)(n, t);
                    var e = j(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return Object(_.a)(n, [{
                        key: "scrollIntoView",
                        value: function(t, e) {
                            e.preventDefault();
                            var n = document.querySelector(t);
                            n && n.scrollIntoView && n.scrollIntoView({
                                behavior: "smooth"
                            })
                        }
                    }]), n
                }(m.c),
                k = x = w([Object(m.a)({
                    components: {
                        HeroCitation: y.default
                    }
                })], x),
                O = (n(588), n(8)),
                C = Object(O.a)(k, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "jobs-hero-banner"
                    }, [t._m(0), t._v(" "), n("hero-citation", {
                        staticClass: "jobs-hero-banner__citation"
                    }, [t._v("\n    Help us inspire generations of gamers\n  ")]), t._v(" "), n("div", {
                        staticClass: "jobs-hero-banner__section-links"
                    }, [n("a", {
                        staticClass: "jobs-hero-banner__section-link",
                        attrs: {
                            href: "#our-process"
                        },
                        on: {
                            click: function(e) {
                                return t.scrollIntoView("#our-process", e)
                            }
                        }
                    }, [t._v("Our process")]), t._v(" "), n("a", {
                        staticClass: "jobs-hero-banner__section-link",
                        attrs: {
                            href: "#current-openings"
                        },
                        on: {
                            click: function(e) {
                                return t.scrollIntoView("#current-openings", e)
                            }
                        }
                    }, [t._v("Current job openings")]), t._v(" "), n("a", {
                        staticClass: "jobs-hero-banner__section-link",
                        attrs: {
                            href: "#from-the-team"
                        },
                        on: {
                            click: function(e) {
                                return t.scrollIntoView("#from-the-team", e)
                            }
                        }
                    }, [t._v("From the team")])])], 1)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "jobs-hero-banner__title-container"
                    }, [n("h1", {
                        staticClass: "jobs-hero-banner__title",
                        attrs: {
                            "data-text": "Jobs"
                        }
                    }, [t._v("\n      Jobs\n    ")])])
                }], !1, null, "2df45bb2", null).exports;
            n(78), n(80);

            function R(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(f.a)(t);
                    if (e) {
                        var r = Object(f.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var I = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (r < 3 ? o(c) : r > 3 ? o(e, n, c) : o(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c
                },
                z = function(t) {
                    Object(c.a)(n, t);
                    var e = R(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return Object(_.a)(n, [{
                        key: "hasJobs",
                        get: function() {
                            return !!this.departments && !!Object.keys(this.departments).length
                        }
                    }, {
                        key: "getDepartment",
                        value: function(t) {
                            var e;
                            return null === (e = t.departments[0]) || void 0 === e ? void 0 : e.name
                        }
                    }]), n
                }(m.c);
            I([Object(m.b)({
                type: Object
            })], z.prototype, "departments", void 0), I([Object(m.b)({
                type: Boolean,
                default: !1
            })], z.prototype, "error", void 0);
            var P = z = I([m.a], z),
                B = (n(591), Object(O.a)(P, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "current-jobs hy-pad-t-5 hy-pad-b-5"
                    }, [o("div", {
                        staticClass: "current-jobs__container"
                    }, [t._m(0), t._v(" "), t.error ? o("div", [o("h3", [t._v("Thank you for your interest!")]), t._v(" "), o("p", [t._v("Unfortunately, we are having some trouble fetching the jobs list.")]), t._v(" "), o("p", [t._v("Please try again later.")])]) : t.hasJobs ? o("div", {
                        staticClass: "current-jobs__list"
                    }, t._l(t.departments, (function(e, r) {
                        return o("div", {
                            key: r,
                            staticClass: "current-jobs__departments"
                        }, [o("h3", {
                            staticClass: "current-jobs__department-name"
                        }, [o("img", {
                            attrs: {
                                src: n(197),
                                alt: ""
                            }
                        }), t._v("\n          " + t._s(r) + "\n        ")]), t._v(" "), t._l(e, (function(e) {
                            return o("div", {
                                key: e.id,
                                staticClass: "current-jobs__job"
                            }, [o("div", {
                                staticClass: "current-jobs__details"
                            }, [o("nuxt-link", {
                                staticClass: "current-jobs__job-title",
                                attrs: {
                                    to: {
                                        name: "jobs-job",
                                        params: {
                                            job: e.id
                                        }
                                    }
                                }
                            }, [t._v("\n              " + t._s(e.title) + "\n            ")]), t._v(" "), o("span", {
                                staticClass: "current-jobs__job-location"
                            }, [t._v("\n              " + t._s(e.location.name) + "\n            ")])], 1), t._v(" "), o("div", {
                                staticClass: "current-jobs__actions current-jobs__apply-btn-container"
                            }, [o("nuxt-link", {
                                staticClass: "current-jobs__apply-btn",
                                attrs: {
                                    to: {
                                        name: "jobs-job",
                                        params: {
                                            job: e.id
                                        }
                                    }
                                }
                            }, [t._v("Apply")])], 1)])
                        }))], 2)
                    })), 0) : o("div", [o("h3", [t._v("Thank you for your interest!")]), t._v(" "), t._m(1), t._v(" "), o("p", [t._v("Please check back as we will most certainly be looking for great people to join our team in the future.")])])])])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("h2", {
                        staticClass: "hy-sub-title current-jobs__title"
                    }, [n("a", {
                        staticClass: "offset-anchor",
                        attrs: {
                            id: "current-openings"
                        }
                    }), t._v("\n      Current job openings\n    ")])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("p", [n("strong", [t._v("Unfortunately, we are not hiring at this time.")])])
                }], !1, null, "02f49350", null).exports);

            function E(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(f.a)(t);
                    if (e) {
                        var r = Object(f.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var D = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (r < 3 ? o(c) : r > 3 ? o(e, n, c) : o(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c
                },
                S = function(t) {
                    Object(c.a)(n, t);
                    var e = E(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(m.c);
            D([Object(m.b)({
                required: !0,
                type: String
            })], S.prototype, "name", void 0), D([Object(m.b)({
                required: !0,
                type: String
            })], S.prototype, "role", void 0), D([Object(m.b)({
                default: !1,
                type: Boolean
            })], S.prototype, "reverseLayout", void 0);
            var M = S = D([m.a], S),
                H = (n(593), Object(O.a)(M, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "job-testimonial",
                        class: {
                            "job-testimonial_reverse": t.reverseLayout
                        }
                    }, [n("div", {
                        staticClass: "job-testimonial__card",
                        style: {
                            backgroundImage: "url(/imgs/testimonials/portrait-" + t.name.toLowerCase() + ".jpg)"
                        }
                    }, [n("div", {
                        staticClass: "job-testimonial__card-label"
                    }, [n("h3", {
                        staticClass: "job-testimonial__name",
                        attrs: {
                            "data-text": "Buddhacat"
                        }
                    }, [t._v("\n        " + t._s(t.name) + "\n      ")]), t._v(" "), n("h3", {
                        staticClass: "job-testimonial__job-title"
                    }, [t._v("\n        " + t._s(t.role) + "\n      ")])]), t._v(" "), n("div", {
                        staticClass: "job-testimonial__card-frame"
                    })]), t._v(" "), n("div", {
                        staticClass: "job-testimonial__content"
                    }, [t._t("default")], 2)])
                }), [], !1, null, "4f3ff98b", null).exports);

            function A(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(f.a)(t);
                    if (e) {
                        var r = Object(f.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var T = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (r < 3 ? o(c) : r > 3 ? o(e, n, c) : o(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c
                },
                W = function(t) {
                    Object(c.a)(n, t);
                    var e = A(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(m.c),
                $ = W = T([Object(m.a)({
                    components: {
                        JobTestimonial: H
                    }
                })], W),
                J = (n(596), Object(O.a)($, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "job-testimonials hy-mar-b-1"
                    }, [t._m(0), t._v(" "), n("div", {
                        staticClass: "job-testimonials__list"
                    }, [n("job-testimonial", {
                        staticClass: "job-testimonials__testimonial",
                        attrs: {
                            "reverse-layout": !1,
                            name: "Buddhacat",
                            role: "Social Media Manager"
                        }
                    }, [n("p", [t._v("“Working for Hypixel Studios has been life changing. I'm working on something I'm incredibly proud of alongside some of the most talented and passionate people I've met to date.")]), t._v(" "), n("p", [t._v("Throughout my experience working here, I've found the leadership to be exceptional - they truly go above and beyond for everyone working here. I couldn't ask for a better company to work for.”")])]), t._v(" "), n("job-testimonial", {
                        staticClass: "job-testimonials__testimonial",
                        attrs: {
                            "reverse-layout": !0,
                            name: "Darkace",
                            role: "Assist. Producer - Adventure Team"
                        }
                    }, [n("p", [t._v("\n        “Games have always been a big part of my life since spilling ribenna juice on my PlayStation... 3 times on different PlayStations in fact, at the age of 3 playing Lego Island 2: The Brickset's Revenge. Dad also challenged me so that I had to complete 2 hours of past papers in order to play 1 hour of The Elder Scrolls IV: Oblivion. Much of my childhood has been surrounded in playing games, with friends, family or just losing myself in a world.\n      ")]), t._v(" "), n("p", [t._v("\n        It was always a dream of mine to work in the games industry but Hypixel Studios solidified that dream into reality by taking me on as a 'Minecraft Grad'. I haven't looked back and can't ask for a better team to work with. Everyone here has a joy for playing games, a passion for making fun in game experiences, and a mandate for delivaryng the best games possible for the community we serve.”\n      ")])]), t._v(" "), n("job-testimonial", {
                        attrs: {
                            name: "Polina",
                            role: "VFX Artist",
                            "reverse-layout": !1
                        }
                    }, [n("p", [t._v("“I am working in Hypixel as an artist for almost 5 years now, I went through the team being just a handful of people who were doing something crazy and weird together to 50 mil views of the trailer video.")]), t._v(" "), n("p", [t._v("So, what do I like the most? I think, the project itself. It's really unique to work on, and it's a chance to produce something really amazing.")]), t._v(" "), n("p", [t._v("Secondly, I really enjoy the way we are working, we were full remote from day 1, and it works great for us, it works great for me! I like the option to set up periods of time when I am fully concentrated on my work, without any disturbance and periods, when I am actively communicating. We have all kinds of people from all around the world, someone more chatty, someone more introverted, but somehow the company creates the environment where we can all thrive and be the most effective ourselves.")]), t._v(" "), n("p", [t._v("I could also write how everyone is the team is 100% awesome, but, come on, it's selbstverständlich”")])]), t._v(" "), n("job-testimonial", {
                        attrs: {
                            "reverse-layout": !0,
                            name: "Otium",
                            role: "Technical Artist & Designer"
                        }
                    }, [n("p", [t._v("“I've been working on Hytale for four years now. It's been one of the most amazing, exhausting and rewarding things I've ever worked on. I'm really proud of the work we do.")]), t._v(" "), n("p", [t._v("I'm here. I'm queer, and I've never been discriminated against by my co-workers. It's been incredible to work somewhere where I can be my authentic self. Where everyone accepts me and respects my pronouns - something that is difficult to find, especially when looking to progress in your career. I went from basic level designing to integrations and design work, achieved through mentoring and growth opportunities, which has been amazing.")]), t._v(" "), n("p", [t._v("We've gained so many views on our trailer and have ended up as such a high profile project with a supportive and talented community. I am so thankful every day to be a part of this project.”")])]), t._v(" "), n("job-testimonial", {
                        attrs: {
                            name: "Slikey",
                            role: "Engine Programmer"
                        }
                    }, [n("p", [t._v("“I've started at Hypixel before I finished school and now I am standing side by side in an amazing team working on a game for millions of players.\n      ")]), n("p", [t._v("When I started at Hypixel we were the underdog in a landscape of Minecraft servers. It was the wild west and we let no time pass to become #1. When times were hard, we worked harder, when times were prosperous, we leveled up.")]), t._v(" "), n("p", [t._v("The next level we want to reach is shipping the game and as an engineer, there is no more challenging task than running a sandbox game with limitless possibilities on unknown hardware. The company clears every barrier we encounter as a team and allows us to focus on what matters. Making the greatest and technically difficult game in the genre.")]), t._v(" "), n("p", [t._v("Working at Hypixel doesn't feel like work. It feels like bridging the things you enjoy in your personal life with productive hours at work. Not having to commute or get ready for a day in the office makes working incredibly natural for me and allows me to live a very flexible life, while still having a secure job.”")])]), t._v(" "), n("job-testimonial", {
                        attrs: {
                            "reverse-layout": !0,
                            name: "Cosmo",
                            role: "Talent Acquisition"
                        }
                    }, [n("p", [t._v("“As someone who is born and bred in Derry I love to see new and different opportunities arise locally, which is exactly what Hypixel Studios has achieved with creating a games studio in the heart of the city, a vortex I quickly became absorbed in! I am not strictly from a gaming background, I enjoyed dabbling in gaming when I was younger, but never went further than being a novice player! Around 15 years down the line I have a son of my own, PS4 in hand and a Minecraft maniac who is hyped to play Hytale (brownie points for Mum when I work for Hypixel Studios). However, not coming from the gaming background has not made an impact on the welcoming I have received from the team here. An inclusive bunch, strong willed, passionate, talented and a lot of fun to work alongside. Coming from a corporate background, I would go as far to say this is the most passionate team I have ever worked within, every day is different, a new opportunity to learn and grow alongside a project which is evolving with us.”")])]), t._v(" "), n("job-testimonial", {
                        attrs: {
                            name: "Eric",
                            role: "NPC Developer"
                        }
                    }, [n("p", [t._v("“I have worked on a few games and software projects before but nothing has come close to the rewarding experience of my four years on Hytale. It’s great to be part of a team of diverse and talented people spread out all over the world, focused on getting a genre-defining title done. If you would rather spend your day with office politics or in an endless stream of needless meetings then this is definitely the wrong place for you.\n      ")]), n("p", [t._v("I like the daily challenges of my job as a software engineer and enjoy learning something new every day. Everyone on the team is willing to help and I’ve learned a lot from other team members.\n      ")]), n("p", [t._v("Remote work is an important part of our culture. My daily plans can be flexible and I can make use of the time that would normally be wasted on commuting.\n      ")]), n("p", [t._v("Finally there is the game itself. I would guess it’s a labour of love for all of us, and you can get a glimpse of that whenever you check our blog. We are in the really lucky situation of being able to shape the game ourselves without a publisher constantly breathing down our neck while having secure jobs at the same time.”")])])], 1)])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "job-testimonials__from-the-team"
                    }, [n("h2", {
                        staticClass: "hy-sub-title job-testimonials__title hy-mar-t-5 hy-mar-b-3"
                    }, [n("a", {
                        staticClass: "offset-anchor",
                        attrs: {
                            id: "from-the-team"
                        }
                    }), t._v("\n      From the team\n    ")]), t._v(" "), n("p", {
                        staticClass: "hy-text job-testimonials__from-the-team-text"
                    }, [t._v("\n      Messages from some of the team :)\n    ")])])
                }], !1, null, "a91e8816", null).exports),
                L = [function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "jobs-some-tips"
                    }, [o("div", {
                        staticClass: "jobs-some-tips__content hy-pad-t-5 hy-pad-b-5"
                    }, [o("h3", {
                        staticClass: "hy-sub-title jobs-some-tips__title hy-mar-b-5"
                    }, [t._v("\n      Some tips before applying\n    ")]), t._v(" "), o("div", {
                        staticClass: "jobs-some-tips__list"
                    }, [o("div", {
                        staticClass: "jobs-some-tips__tip"
                    }, [o("div", {
                        staticClass: "jobs-some-tips__icon-container"
                    }, [o("img", {
                        staticClass: "jobs-some-tips__icon",
                        attrs: {
                            src: n(598),
                            alt: ""
                        }
                    })]), t._v(" "), o("p", {
                        staticClass: "jobs-view__text jobs-some-tips__tip-text"
                    }, [t._v("\n          Show us what you’ve done relevant to the area in which you are applying. You can do this via YouTube videos, screenshots, websites, links to GitHub, etc. We will not compile and run any code examples for initial review of applicants.\n        ")])]), t._v(" "), o("div", {
                        staticClass: "jobs-some-tips__tip"
                    }, [o("div", {
                        staticClass: "jobs-some-tips__icon-container"
                    }, [o("img", {
                        staticClass: "jobs-some-tips__icon",
                        attrs: {
                            src: n(599),
                            alt: ""
                        }
                    })]), t._v(" "), o("p", {
                        staticClass: "jobs-view__text jobs-some-tips__tip-text"
                    }, [t._v("\n          Failing to get a response unfortunately means we are not interested in pursuing this application. Due to the high volume of applicants we can’t reply to each by hand.\n        ")])]), t._v(" "), o("div", {
                        staticClass: "jobs-some-tips__tip"
                    }, [o("div", {
                        staticClass: "jobs-some-tips__icon-container"
                    }, [o("img", {
                        staticClass: "jobs-some-tips__icon",
                        attrs: {
                            src: n(600),
                            alt: ""
                        }
                    })]), t._v(" "), o("p", {
                        staticClass: "jobs-view__text jobs-some-tips__tip-text"
                    }, [t._v("\n          Think of an application like an elevator pitch for yourself: keep it short, snappy and provide the wow factor up front! An example of a bad application is where you say “contact me if you’d like to see examples of my work.”\n        ")])])]), t._v(" "), o("p", {
                        staticClass: "hy-text hy-pad-t-2"
                    }, [o("strong", [t._v("\n        Please be aware that you need to be at least 18 years old to apply.\n      ")])])])])
                }];

            function V(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(f.a)(t);
                    if (e) {
                        var r = Object(f.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var F = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (r < 3 ? o(c) : r > 3 ? o(e, n, c) : o(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c
                },
                G = function(t) {
                    Object(c.a)(n, t);
                    var e = V(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(m.c),
                U = G = F([m.a], G),
                X = (n(601), Object(O.a)(U, (function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                }), L, !1, null, "9b173326", null).exports),
                N = [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "jobs-description__page-description-image"
                    }, [e("img", {
                        staticClass: "jobs-description__page-description",
                        attrs: {
                            src: n(603),
                            alt: "Hytale Mage and Warrior"
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("ul", {
                        staticClass: "jobs-description__list"
                    }, [n("li", {
                        staticClass: "jobs-description__item"
                    }, [t._v("Skilled and self-driven.")]), t._v(" "), n("li", {
                        staticClass: "jobs-description__item"
                    }, [t._v("Has a history of doing cool stuff.")]), t._v(" "), n("li", {
                        staticClass: "jobs-description__item"
                    }, [t._v("Puts players first.")])])
                }];

            function Y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(f.a)(t);
                    if (e) {
                        var r = Object(f.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var K = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (r < 3 ? o(c) : r > 3 ? o(e, n, c) : o(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c
                },
                Q = function(t) {
                    Object(c.a)(n, t);
                    var e = Y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(m.c),
                Z = Q = K([m.a], Q),
                tt = (n(604), Object(O.a)(Z, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "jobs-description hy-pad-t-5 hy-pad-b-5"
                    }, [t._m(0), t._v(" "), n("div", {
                        staticClass: "jobs-description__text"
                    }, [n("p", {
                        staticClass: "hy-text"
                    }, [t._v("\n      Hypixel Studios consists of a team that contribute and collaborate remotely from around the world, with members ranging from games industry newcomers to 15+ year veterans. Our staff have a diverse set of backgrounds, but share a common passion for games and ensuring that our players are happy.\n    ")]), t._v(" "), n("p", {
                        staticClass: "hy-text"
                    }, [t._v("\n      We are currently 60+ strong, and we cover all of the traditional roles of game development. Art, programming, production, design, and so on. The three key qualities we look for in applicants are:\n    ")]), t._v(" "), t._m(1), t._v(" "), n("p", {
                        staticClass: "hy-text"
                    }, [t._v("\n      We strongly recommend that all applicants read the "), n("nuxt-link", {
                        attrs: {
                            to: {
                                name: "who-we-are"
                            }
                        }
                    }, [t._v("Who We Are")]), t._v(" and "), n("nuxt-link", {
                        attrs: {
                            to: {
                                name: "hytale"
                            }
                        }
                    }, [t._v("Hytale")]), t._v(" pages to get a full sense of who we are, what we’re making, and why. Please note that the company’s official communication overlap hours span GMT-8 to GMT+1. We welcome applicants from all over the world, but availability during the company’s active hours is required. If you have any questions or concerns regarding this, please make note of them in your cover letter or raise them during the interview process.\n    ")], 1)])])
                }), N, !1, null, "0741fd04", null).exports),
                et = [function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "jobs-our-process hy-mar-t-5 hy-mar-b-5"
                    }, [o("h2", {
                        staticClass: "hy-sub-title jobs-our-process__title hy-mar-b-3",
                        attrs: {
                            "data-text": "Our Application Process"
                        }
                    }, [o("a", {
                        staticClass: "offset-anchor",
                        attrs: {
                            id: "our-process"
                        }
                    }), t._v("\n    Our Application Process\n  ")]), t._v(" "), o("div", {
                        staticClass: "jobs-our-process__container"
                    }, [o("div", {
                        staticClass: "jobs-our-process__text"
                    }, [o("p", {
                        staticClass: "hy-text"
                    }, [t._v("\n        We understand that applying for positions in the game industry can be frustrating, sometimes even a bit scary - especially for your first position. We've all been through that procedure.\n      ")]), t._v(" "), o("p", {
                        staticClass: "hy-text"
                    }, [t._v("\n        We've decided to publicize our recruitment process in order to be transparent and give our prospective candidates insight into the way we work.\n        "), o("strong", [t._v("\n          (Click on the image to open)\n        ")])])]), t._v(" "), o("a", {
                        staticClass: "jobs-our-process__link",
                        attrs: {
                            href: "/imgs/application-process-2022.png",
                            target: "__blank"
                        }
                    }, [o("img", {
                        staticClass: "jobs-our-process__application-process-img",
                        attrs: {
                            src: n(606),
                            alt: "Hypixel Studios application process"
                        }
                    })])])])
                }];

            function at(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(f.a)(t);
                    if (e) {
                        var r = Object(f.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var nt = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (r < 3 ? o(c) : r > 3 ? o(e, n, c) : o(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c
                },
                ot = function(t) {
                    Object(c.a)(n, t);
                    var e = at(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(m.c),
                it = ot = nt([m.a], ot),
                st = (n(607), Object(O.a)(it, (function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                }), et, !1, null, "49665dbb", null).exports);

            function ct(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(f.a)(t);
                    if (e) {
                        var r = Object(f.a)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.a)(this, n)
                }
            }
            var lt = function(t, e, n, desc) {
                    var o, r = arguments.length,
                        c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, n) : desc;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, desc);
                    else
                        for (var i = t.length - 1; i >= 0; i--)(o = t[i]) && (c = (r < 3 ? o(c) : r > 3 ? o(e, n, c) : o(e, n)) || c);
                    return r > 3 && c && Object.defineProperty(e, n, c), c
                },
                ft = function(t) {
                    Object(c.a)(n, t);
                    var e = ct(n);

                    function n() {
                        var t;
                        return Object(r.a)(this, n), (t = e.apply(this, arguments)).jobs = null, t.jobsError = !1, t
                    }
                    return n
                }(m.c),
                ut = ft = lt([Object(m.a)({
                    components: {
                        JobsHeroBanner: C,
                        CurrentJobs: B,
                        ItemDivider: v.default,
                        JobTestimonials: J,
                        JobsSomeTips: X,
                        JobsDescription: tt,
                        JobsOurProcess: st
                    },
                    head: {
                        title: "Jobs",
                        meta: [{
                            hid: "og:title",
                            property: "og:title",
                            content: "Jobs"
                        }, {
                            hid: "twitter:title",
                            property: "twitter:title",
                            content: "Jobs"
                        }]
                    },
                    asyncData: function() {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var e;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e = new h.a, t.abrupt("return", e.getListByDepartment().then((function(t) {
                                            return {
                                                jobs: t
                                            }
                                        })).catch((function() {
                                            return console.error("Failed getting jobs"), {
                                                jobs: {},
                                                jobsError: !0
                                            }
                                        })));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                })], ft),
                pt = (n(609), Object(O.a)(ut, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "jobs-view"
                    }, [n("jobs-hero-banner"), t._v(" "), n("div", {
                        staticClass: "jobs-view__container"
                    }, [n("div", {
                        staticClass: "jobs-view__content"
                    }, [n("jobs-description"), t._v(" "), n("item-divider", {
                        staticClass: "jobs-view__divider"
                    }), t._v(" "), n("jobs-our-process"), t._v(" "), n("jobs-some-tips"), t._v(" "), n("current-jobs", {
                        attrs: {
                            departments: t.jobs,
                            error: t.jobsError
                        }
                    }), t._v(" "), n("item-divider", {
                        staticClass: "jobs-view__divider"
                    }), t._v(" "), n("job-testimonials"), t._v(" "), t._m(0), t._v(" "), n("p", {
                        staticClass: "hy-text"
                    }, [t._v("\n        See our\n        "), n("nuxt-link", {
                        attrs: {
                            to: {
                                name: "jobs-data-protection-statement"
                            }
                        }
                    }, [t._v("\n          Job Applicant Data Protection Statement\n        ")]), t._v("\n        to learn how we use your data in the job application process.\n      ")], 1)], 1)])], 1)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("p", {
                        staticClass: "hy-text"
                    }, [n("strong", [t._v("\n          Data Protection\n        ")])])
                }], !1, null, "086d0faf", null));
            e.default = pt.exports
        }
    }
]);