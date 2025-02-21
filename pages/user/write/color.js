(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/write/color" ], {
    2934: function(n, t, e) {
        (function(n, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("a34a"));
            function u(n, t, e, r, a, u, o) {
                try {
                    var c = n[u](o), f = c.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void e(n);
                }
                c.done ? t(f) : Promise.resolve(f).then(r, a);
            }
            function o(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(r, a) {
                        var o = n.apply(t, e);
                        function c(n) {
                            u(o, r, a, c, f, "next", n);
                        }
                        function f(n) {
                            u(o, r, a, c, f, "throw", n);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        colorList: []
                    };
                },
                onLoad: function() {
                    var n = this;
                    return o(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, n.getColorList();

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    getColorList: function() {
                        var t = this;
                        return o(a.default.mark(function e() {
                            var r, u;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return r = t, e.next = 3, n.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_color",
                                            pageIndex: 1,
                                            pageSize: 50
                                        }
                                    });

                                  case 3:
                                    u = e.sent, r.colorList = u.result.data;

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    colorClick: function(n, t) {
                        r.setStorageSync("colorId", n), r.setStorageSync("colorName", t), r.navigateBack();
                    }
                }
            };
            t.default = c;
        }).call(this, e("a9ff").default, e("543d").default);
    },
    "313d": function(n, t, e) {
        e.r(t);
        var r = e("2934"), a = e.n(r);
        for (var u in r) "default" !== u && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(u);
        t.default = a.a;
    },
    "7b9f": function(n, t, e) {
        var r = e("f6ef");
        e.n(r).a;
    },
    b053: function(n, t, e) {
        e.r(t);
        var r = e("cfa3"), a = e("313d");
        for (var u in a) "default" !== u && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(u);
        e("7b9f");
        var o = e("f0c5"), c = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    },
    baed: function(n, t, e) {
        (function(n) {
            e("1073"), e("a9ff"), r(e("66fd"));
            var t = r(e("b053"));
            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    cfa3: function(n, t, e) {
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return r;
        });
        var r = {
            uNavbar: function() {
                return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null, "8954"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    f6ef: function(n, t, e) {}
}, [ [ "baed", "common/runtime", "common/vendor" ] ] ]);