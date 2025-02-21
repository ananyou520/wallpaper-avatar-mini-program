(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/order/order" ], {
    "0390": function(e, a, n) {
        (function(e) {
            n("1073"), n("a9ff"), t(n("66fd"));
            var a = t(n("20ce"));
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default);
        }).call(this, n("543d").createPage);
    },
    "06ec": function(e, a, n) {},
    "20ce": function(e, a, n) {
        n.r(a);
        var t = n("612f"), f = n("a285");
        for (var u in f) "default" !== u && function(e) {
            n.d(a, e, function() {
                return f[e];
            });
        }(u);
        n("833b");
        var c = n("f0c5"), r = Object(c.a)(f.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        a.default = r.exports;
    },
    "612f": function(e, a, n) {
        n.d(a, "b", function() {
            return f;
        }), n.d(a, "c", function() {
            return u;
        }), n.d(a, "a", function() {
            return t;
        });
        var t = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uLoadmore: function() {
                return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "98b0"));
            },
            uSkeleton: function() {
                return n.e("uview-ui/components/u-skeleton/u-skeleton").then(n.bind(null, "7409"));
            }
        }, f = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    "833b": function(e, a, n) {
        var t = n("06ec");
        n.n(t).a;
    },
    "8a19": function(e, a, n) {
        (function(e, t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var f = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function u(e, a, n, t, f, u, c) {
                try {
                    var r = e[u](c), d = r.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                r.done ? a(d) : Promise.resolve(d).then(t, f);
            }
            function c(e) {
                return function() {
                    var a = this, n = arguments;
                    return new Promise(function(t, f) {
                        var c = e.apply(a, n);
                        function r(e) {
                            u(c, t, f, r, d, "next", e);
                        }
                        function d(e) {
                            u(c, t, f, r, d, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var r = {
                data: function() {
                    return {
                        wxCheck: !1,
                        dbname: "",
                        skeletonLoad: !0,
                        navbarTop: 0,
                        orderList: [ {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        } ],
                        noData: !1,
                        pageIndex: 0,
                        loadStatus: "loadmore",
                        userId: "",
                        authorId: ""
                    };
                },
                onLoad: function(e) {
                    var a = this;
                    return c(f.default.mark(function n() {
                        var t, u, c;
                        return f.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t = e.userId, u = e.authorId, c = a, n.next = 4, c.getConfig();

                              case 4:
                                return 0 == c.wxCheck ? c.dbname = "app_order" : c.dbname = "app_gallery", t && (c.userId = t), 
                                u && (c.authorId = u), n.next = 9, c.getOrderList(1);

                              case 9:
                                c.skeletonLoad = !1;

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    getConfig: function() {
                        var a = this;
                        return c(f.default.mark(function n() {
                            var t, u;
                            return f.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = a, n.next = 3, e.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "wxCheck" ]
                                        }
                                    });

                                  case 3:
                                    (u = n.sent).result.success && (t.wxCheck = u.result.data[0]);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getOrderList: function(a) {
                        var n = this;
                        return c(f.default.mark(function t() {
                            var u, c, r, d;
                            return f.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return c = (u = n).orderList, 1 == a && (u.orderList = [], c = [], u.pageIndex = 0), 
                                    u.pageIndex = u.pageIndex + 1, u.noData = !1, u.loadStatus = "loading", r = {}, 
                                    u.userId ? r.user_id = u.userId : u.authorId ? r.author_id = u.authorId : r.user_id = u.vuex_user._id, 
                                    t.next = 10, e.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: u.dbname,
                                            filter: r,
                                            order: {
                                                name: "time",
                                                type: "desc"
                                            },
                                            pageIndex: u.pageIndex,
                                            pageSize: 18
                                        }
                                    });

                                  case 10:
                                    (d = t.sent).result.hasMore ? u.loadStatus = "loadmore" : u.loadStatus = "nomore", 
                                    c = c.concat(d.result.data), u.orderList = c, 0 == u.orderList.length ? u.noData = !0 : u.noData = !1;

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    detailClick: function(e) {
                        t.navigateTo({
                            url: "/pages/user/order/detail?id=" + e
                        });
                    }
                },
                onReachBottom: function() {
                    "nomore" != this.loadStatus && this.getOrderList();
                }
            };
            a.default = r;
        }).call(this, n("a9ff").default, n("543d").default);
    },
    a285: function(e, a, n) {
        n.r(a);
        var t = n("8a19"), f = n.n(t);
        for (var u in t) "default" !== u && function(e) {
            n.d(a, e, function() {
                return t[e];
            });
        }(u);
        a.default = f.a;
    }
}, [ [ "0390", "common/runtime", "common/vendor" ] ] ]);