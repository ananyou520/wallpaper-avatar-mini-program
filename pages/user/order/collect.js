(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/order/collect" ], {
    "1f0d": function(e, f, n) {
        n.r(f);
        var t = n("f978"), a = n("5489");
        for (var c in a) "default" !== c && function(e) {
            n.d(f, e, function() {
                return a[e];
            });
        }(c);
        n("f57a");
        var u = n("f0c5"), o = Object(u.a)(a.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        f.default = o.exports;
    },
    5489: function(e, f, n) {
        n.r(f);
        var t = n("61bf"), a = n.n(t);
        for (var c in t) "default" !== c && function(e) {
            n.d(f, e, function() {
                return t[e];
            });
        }(c);
        f.default = a.a;
    },
    "549f": function(e, f, n) {
        (function(e) {
            n("1073"), n("a9ff"), t(n("66fd"));
            var f = t(n("1f0d"));
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(f.default);
        }).call(this, n("543d").createPage);
    },
    "61bf": function(e, f, n) {
        (function(e, t) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function c(e, f, n, t, a, c, u) {
                try {
                    var o = e[c](u), r = o.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                o.done ? f(r) : Promise.resolve(r).then(t, a);
            }
            function u(e) {
                return function() {
                    var f = this, n = arguments;
                    return new Promise(function(t, a) {
                        var u = e.apply(f, n);
                        function o(e) {
                            c(u, t, a, o, r, "next", e);
                        }
                        function r(e) {
                            c(u, t, a, o, r, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        wxCheck: !1,
                        dbname: "",
                        skeletonLoad: !0,
                        coverList: [ {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        }, {
                            cover_img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png"
                        } ],
                        noData: !1,
                        pageIndex: 1,
                        loadStatus: "loadmore"
                    };
                },
                onShow: function() {
                    var e = this;
                    return u(a.default.mark(function f() {
                        var n;
                        return a.default.wrap(function(f) {
                            for (;;) switch (f.prev = f.next) {
                              case 0:
                                return n = e, f.next = 3, n.getConfig();

                              case 3:
                                return 0 == n.wxCheck ? n.dbname = "app_cover" : n.dbname = "app_gallery", f.next = 6, 
                                n.getColl(1);

                              case 6:
                                n.skeletonLoad = !1;

                              case 7:
                              case "end":
                                return f.stop();
                            }
                        }, f);
                    }))();
                },
                methods: {
                    getConfig: function() {
                        var f = this;
                        return u(a.default.mark(function n() {
                            var t, c;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = f, n.next = 3, e.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "wxCheck" ]
                                        }
                                    });

                                  case 3:
                                    (c = n.sent).result.success && (t.wxCheck = c.result.data[0]);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getColl: function(f) {
                        var n = this;
                        return u(a.default.mark(function t() {
                            var c, u, o;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return u = (c = n).recordList, c.loadStatus = "loading", t.next = 5, e.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: c.dbname,
                                            filter: {
                                                "coll.user_id": c.vuex_user._id,
                                                status: 1
                                            },
                                            order: {
                                                name: "time",
                                                type: "desc"
                                            },
                                            pageIndex: c.pageIndex,
                                            pageSize: 15
                                        }
                                    });

                                  case 5:
                                    o = t.sent, 1 == f && (u = []), o.result.hasMore ? c.loadStatus = "loadmore" : c.loadStatus = "nomore", 
                                    u = u.concat(o.result.data), c.recordList = u, 0 == c.recordList.length && (c.noData = !0), 
                                    c.coverList = o.result.data;

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    cateClick: function(e) {
                        this.modelId = e;
                    },
                    detail: function(e) {
                        t.navigateTo({
                            url: "/pagesB/detail/detail?id=" + e + "&index=0"
                        });
                    }
                },
                onReachBottom: function() {
                    var e = this;
                    "nomore" != e.loadStatus && (e.pageIndex = e.pageIndex + 1, e.getColl());
                }
            };
            f.default = o;
        }).call(this, n("a9ff").default, n("543d").default);
    },
    6829: function(e, f, n) {},
    f57a: function(e, f, n) {
        var t = n("6829");
        n.n(t).a;
    },
    f978: function(e, f, n) {
        n.d(f, "b", function() {
            return a;
        }), n.d(f, "c", function() {
            return c;
        }), n.d(f, "a", function() {
            return t;
        });
        var t = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uSkeleton: function() {
                return n.e("uview-ui/components/u-skeleton/u-skeleton").then(n.bind(null, "7409"));
            },
            uLoadmore: function() {
                return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "98b0"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    }
}, [ [ "549f", "common/runtime", "common/vendor" ] ] ]);