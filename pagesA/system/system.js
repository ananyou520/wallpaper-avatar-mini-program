(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/system" ], {
    3342: function(n, e, t) {
        var u = t("e272");
        t.n(u).a;
    },
    "5af0": function(n, e, t) {
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
                    var i = n[r](o), c = i.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                i.done ? e(c) : Promise.resolve(c).then(u, a);
            }
            function o(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(u, a) {
                        var o = n.apply(e, t);
                        function i(n) {
                            r(o, u, a, i, c, "next", n);
                        }
                        function c(n) {
                            r(o, u, a, i, c, "throw", n);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        userCount: 0,
                        coverCount: 0,
                        orderCount: 0
                    };
                },
                onLoad: function() {
                    this.getUserCount(), this.getCoverCount(), this.getOrderCount();
                },
                methods: {
                    getUserCount: function() {
                        var e = this;
                        return o(a.default.mark(function t() {
                            var u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, n.callFunction({
                                        name: "query_count",
                                        data: {
                                            dbName: "app_user"
                                        }
                                    });

                                  case 2:
                                    u = t.sent, e.userCount = u.result;

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getCoverCount: function() {
                        var e = this;
                        return o(a.default.mark(function t() {
                            var u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, n.callFunction({
                                        name: "query_count",
                                        data: {
                                            dbName: "app_cover"
                                        }
                                    });

                                  case 2:
                                    u = t.sent, e.coverCount = u.result;

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getOrderCount: function() {
                        var e = this;
                        return o(a.default.mark(function t() {
                            var u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, n.callFunction({
                                        name: "query_count",
                                        data: {
                                            dbName: "app_order"
                                        }
                                    });

                                  case 2:
                                    u = t.sent, e.orderCount = u.result;

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    configClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/config/configList"
                        });
                    },
         
                    homeClick: function() {
                        u.navigateBack();
                    },
                    noticeClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/notice/notice"
                        });
                    },
            
              
                    bannerClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/banner/bannerList"
                        });
                    },
                    indexClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/indexmenu/indexmenu"
                        });
                    },
                    findClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/findlist/findList"
                        });
                    },
                    categoryClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/category/categoryList"
                        });
                    },
                    userClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/user/userList"
                        });
                    },
                    coverClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/cover/coverList"
                        });
                    },
                    cashClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/cash/cashList"
                        });
                    },
                    tagsClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/tags/tagsList"
                        });
                    },
                    colorClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/color/color"
                        });
                    },
                    designClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/design/designList"
                        });
                    },
                    advertiClick: function() {
                        u.navigateTo({
                            url: "/pagesA/system/adverti/advertiList"
                        });
                    },
                    designClick1: function() {
                        u.navigateTo({
                            url: "/pages/user/write/caiji"
                        });
                    }
                }
            };
            e.default = i;
        }).call(this, t("a9ff").default, t("543d").default);
    },
    "776b": function(n, e, t) {
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
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "88db": function(n, e, t) {
        t.r(e);
        var u = t("5af0"), a = t.n(u);
        for (var r in u) "default" !== r && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(r);
        e.default = a.a;
    },
    e140: function(n, e, t) {
        (function(n) {
            t("1073"), t("a9ff"), u(t("66fd"));
            var e = u(t("f20d"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    e272: function(n, e, t) {},
    f20d: function(n, e, t) {
        t.r(e);
        var u = t("776b"), a = t("88db");
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("3342");
        var o = t("f0c5"), i = Object(o.a)(a.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = i.exports;
    }
}, [ [ "e140", "common/runtime", "common/vendor" ] ] ]);