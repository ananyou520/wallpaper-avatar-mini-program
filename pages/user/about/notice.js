(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/about/notice" ], {
    "3ef6": function(n, e, t) {
        var u = t("67d0");
        t.n(u).a;
    },
    "5b2a": function(n, e, t) {
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
            },
            uCollapse: function() {
                return t.e("uview-ui/components/u-collapse/u-collapse").then(t.bind(null, "9642"));
            },
            uCollapseItem: function() {
                return t.e("uview-ui/components/u-collapse-item/u-collapse-item").then(t.bind(null, "c3c1"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "67d0": function(n, e, t) {},
    "79cb": function(n, e, t) {
        (function(n) {
            t("1073"), t("a9ff"), u(t("66fd"));
            var e = u(t("fbfa"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    "93f2": function(n, e, t) {
        t.r(e);
        var u = t("fef4"), a = t.n(u);
        for (var r in u) "default" !== r && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(r);
        e.default = a.a;
    },
    fbfa: function(n, e, t) {
        t.r(e);
        var u = t("5b2a"), a = t("93f2");
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("3ef6");
        var o = t("f0c5"), i = Object(o.a)(a.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = i.exports;
    },
    fef4: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("a34a"));
            function a(n, e, t, u, a, r, o) {
                try {
                    var i = n[r](o), c = i.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                i.done ? e(c) : Promise.resolve(c).then(u, a);
            }
            var r = {
                data: function() {
                    return {
                        remind: [],
                        html: "<div>Hello World!</div>"
                    };
                },
                onLoad: function() {
                    this.getRemind();
                },
                methods: {
                    getRemind: function() {
                        var e = this;
                        return function(n) {
                            return function() {
                                var e = this, t = arguments;
                                return new Promise(function(u, r) {
                                    var o = n.apply(e, t);
                                    function i(n) {
                                        a(o, u, r, i, c, "next", n);
                                    }
                                    function c(n) {
                                        a(o, u, r, i, c, "throw", n);
                                    }
                                    i(void 0);
                                });
                            };
                        }(u.default.mark(function t() {
                            var a, r;
                            return u.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return a = e, t.next = 3, n.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_notice",
                                            pageIndex: 1,
                                            pageSize: 10,
                                            order: {
                                                name: "sort",
                                                type: "desc"
                                            },
                                            filter: {
                                                type: 0
                                            }
                                        }
                                    });

                                  case 3:
                                    r = t.sent, a.remind = r.result.data;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            e.default = r;
        }).call(this, t("a9ff").default);
    }
}, [ [ "79cb", "common/runtime", "common/vendor" ] ] ]);