(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/about/about" ], {
    "46ba": function(n, e, t) {
        (function(n, u) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("a34a"));
            function r(n, e, t, u, a, r, o) {
                try {
                    var c = n[r](o), i = c.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                c.done ? e(i) : Promise.resolve(i).then(u, a);
            }
            function o(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(u, a) {
                        var o = n.apply(e, t);
                        function c(n) {
                            r(o, u, a, c, i, "next", n);
                        }
                        function i(n) {
                            r(o, u, a, c, i, "throw", n);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        adunitId: ""
                    };
                },
                onLoad: function() {
                    var e = this;
                    return o(a.default.mark(function t() {
                        var u;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n.hideTabBar(), u = e, t.next = 4, u.getConfig();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    getConfig: function() {
                        var n = this;
                        return o(a.default.mark(function e() {
                            var t, r;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t = n, e.next = 3, u.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "videoId" ]
                                        }
                                    });

                                  case 3:
                                    (r = e.sent).result.success && (t.adunitId = r.result.data[0]);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    agreementClick: function() {
                        n.navigateTo({
                            url: "/pages/user/about/agreement"
                        });
                    },
                    gengxinClick: function() {
                        n.navigateTo({
                            url: "/pages/user/about/gengxin"
                        });
                    },
                    policyClick: function() {
                        n.navigateTo({
                            url: "/pages/user/about/policy"
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, t("543d").default, t("a9ff").default);
    },
    "581e": function(n, e, t) {
        var u = t("e3dc");
        t.n(u).a;
    },
    "70c2": function(n, e, t) {
        t.r(e);
        var u = t("e6c6"), a = t("dbbd");
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("581e");
        var o = t("f0c5"), c = Object(o.a)(a.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = c.exports;
    },
    7266: function(n, e, t) {
        (function(n) {
            t("1073"), t("a9ff"), u(t("66fd"));
            var e = u(t("70c2"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    dbbd: function(n, e, t) {
        t.r(e);
        var u = t("46ba"), a = t.n(u);
        for (var r in u) "default" !== r && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(r);
        e.default = a.a;
    },
    e3dc: function(n, e, t) {},
    e6c6: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return r;
        }), t.d(e, "a", function() {
            return u;
        });
        var u = {
            uNavbar: function() {
                return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null, "8954"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    }
}, [ [ "7266", "common/runtime", "common/vendor" ] ] ]);