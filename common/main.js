(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    1284: function(e, t, n) {},
    "60d9": function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff");
            var t = i(n("66fd")), r = i(n("7c6d")), u = i(n("b16a")), a = i(n("aed0")), o = i(n("a9d0")), c = i(n("64cb"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t.default.config.productionTip = !1, t.default.mixin(u.default), 
            t.default.config.productionTip = !1, r.default.mpType = "app";
            var l = n("db76");
            t.default.mixin(l), t.default.use(o.default);
            var s = new t.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach(function(t) {
                        f(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({
                store: a.default
            }, r.default));
            t.default.use(c.default, s), e(s).$mount();
        }).call(this, n("543d").createApp);
    },
    "7c6d": function(e, t, n) {
        n.r(t);
        var r = n("7dc8");
        for (var u in r) "default" !== u && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(u);
        n("beab");
        var a = n("f0c5"), o = Object(a.a)(r.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = o.exports;
    },
    "7dc8": function(e, t, n) {
        n.r(t);
        var r = n("b086"), u = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = u.a;
    },
    b086: function(e, t, n) {
        (function(e, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var u = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function a(e, t, n, r, u, a, o) {
                try {
                    var c = e[a](o), i = c.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                c.done ? t(i) : Promise.resolve(i).then(r, u);
            }
            var o = {
                onLaunch: function() {
                    var t = function(e) {
                        return function() {
                            var t = this, n = arguments;
                            return new Promise(function(r, u) {
                                var o = e.apply(t, n);
                                function c(e) {
                                    a(o, r, u, c, i, "next", e);
                                }
                                function i(e) {
                                    a(o, r, u, c, i, "throw", e);
                                }
                                c(void 0);
                            });
                        };
                    }(u.default.mark(function t(n) {
                        var a, o;
                        return u.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return console.log("App Launch"), e.hideTabBar({}), a = this, t.next = 5, r.callFunction({
                                    name: "config_map",
                                    data: {
                                        keys: [ "writeShow", "bannerAd", "gridAd", "sgridAd", "awardAd", "plaqueAd","hfAd","adAd" ]
                                    }
                                });

                              case 5:
                                (o = t.sent).result.success && (console.log(o.result.data), a.$u.vuex("vuex_writeShow", o.result.data[0]), 
                                a.$u.vuex("vuex_bannerAd", o.result.data[1]), a.$u.vuex("vuex_gridAd", o.result.data[2]), 
                                a.$u.vuex("vuex_sgridAd", o.result.data[3]), a.$u.vuex("vuex_awardAd", o.result.data[4]), 
                                a.$u.vuex("vuex_plaqueAd", o.result.data[5]),a.$u.vuex("vuex_hfAd", o.result.data[6]),
                                a.$u.vuex("vuex_adAd", o.result.data[7]));

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                onShow: function() {
                    console.log("App Show");
                },
                onHide: function() {
                    console.log("App Hide");
                }
            };
            t.default = o;
        }).call(this, n("543d").default, n("a9ff").default);
    },
    beab: function(e, t, n) {
        var r = n("1284");
        n.n(r).a;
    }
}, [ [ "60d9", "common/runtime", "common/vendor" ] ] ]);