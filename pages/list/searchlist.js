(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/list/searchlist" ], {
    "1e09": function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), a(t("66fd"));
            var n = a(t("96b4"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    "2e07": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {
            return a;
        });
        var a = {
            uNavbar: function() {
                return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null, "8954"));
            },
            uLoadmore: function() {
                return t.e("uview-ui/components/u-loadmore/u-loadmore").then(t.bind(null, "98b0"));
            },
            uSkeleton: function() {
                return t.e("uview-ui/components/u-skeleton/u-skeleton").then(t.bind(null, "7409"));
            }
        }, o = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(n) {
                e.moreShow = !1;
            });
        }, r = [];
    },
    "43af": function(e, n, t) {
        var a = t("599b");
        t.n(a).a;
    },
    "599b": function(e, n, t) {},
    "6f6b": function(e, n, t) {
        (function(e, a) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function r(e, n, t, a, o, r, c) {
                try {
                    var u = e[r](c), i = u.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                u.done ? n(i) : Promise.resolve(i).then(a, o);
            }
            function c(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(a, o) {
                        var c = e.apply(n, t);
                        function u(e) {
                            r(c, a, o, u, i, "next", e);
                        }
                        function i(e) {
                            r(c, a, o, u, i, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var u = t("7938"), i = {
                components: {
                    models: function() {
                        t.e("components/model/model").then(function() {
                            return resolve(t("37f2"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        noData: !1,
                        skeletonLoad: !0,
                        wxCheck: !1,
                        dbname: "",
                        title: "",
                        modelType: "",
                        modelPid: 0,
                        modelId: 0,
                        navbarTop: 0,
                        coverList: [ {
                            images: [ "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png", "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4627c4f0-1508-4f93-8efa-5f692ca5a1d6/b69ffbcf-daf1-4dfc-bd2f-8294049089f7.png" ]
                        } ],
                        categoryList: [],
                        pageIndex: 0,
                        loadStatus: "loadmore",
                        rolldistance: "",
                        adFlag: !0,
                        backShow: !1,
                        moreShow: !1,
                        moreTitle: "",
                        imgs: []
                    };
                },
                onLoad: function(n) {
                    var t = this;
                    return c(o.default.mark(function a() {
                        var r, c, u, i;
                        return o.default.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return r = n.type, c = n.pid, u = n.id, i = t, a.next = 4, i.getConfig();

                              case 4:
                                return 0 == i.wxCheck ? i.dbname = "app_cover" : i.dbname = "app_gallery", i.modelType = r, 
                                i.modelPid = c, i.modelId = u, ("search" == r || "tags" == r) && (i.title = u), 
                                a.next = 11, i.getList(r, u, 2);

                              case 11:
                                e.createSelectorQuery().in(i).select(".query").boundingClientRect(function(e) {
                                    i.navbarTop = e.top;
                                }).exec(), setTimeout(function() {
                                    i.skeletonLoad = !1;
                                }, 200);

                              case 14:
                              case "end":
                                return a.stop();
                            }
                        }, a);
                    }))();
                },
                methods: {
                    getConfig: function() {
                        var e = this;
                        return c(o.default.mark(function n() {
                            var t, r;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, a.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "wxCheck" ]
                                        }
                                    });

                                  case 3:
                                    (r = n.sent).result.success && (t.wxCheck = r.result.data[0]);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    detail: function(n, t, a) {
                        var o = JSON.stringify(a);
                        e.navigateTo({
                            url: "/pagesB/detail/detail?id=" + n + "&index=" + t + "&images=" + o
                        });
                    },
                    getList: function(e, n, t) {
                        var r = this;
                        return c(o.default.mark(function c() {
                            var u, i, s;
                            return o.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    if (i = (u = r).coverList, 1 == t && (u.coverList = [], i = [], u.pageIndex = 0), 
                                    u.pageIndex = u.pageIndex + 1, u.loadStatus = "loading", s = {}, "search" != e) {
                                        o.next = 12;
                                        break;
                                    }
                                    return o.next = 9, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: u.dbname,
                                            search: n,
                                            pageIndex: u.pageIndex,
                                            pageSize: 5
                                        }
                                    });

                                  case 9:
                                    s = o.sent, o.next = 16;
                                    break;

                                  case 12:
                                    if ("tags" != e) {
                                        o.next = 16;
                                        break;
                                    }
                                    return o.next = 15, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: u.dbname,
                                            tags: n,
                                            pageIndex: u.pageIndex,
                                            pageSize: 5
                                        }
                                    });

                                  case 15:
                                    s = o.sent;

                                  case 16:
                                    s.result.hasMore ? u.loadStatus = "loadmore" : 0 == u.wxCheck ? u.qwsearch(n, u.pageIndex) : u.loadStatus = "nomore", 
                                    2 == t && (i = []), i = i.concat(s.result.data), u.coverList = i, 0 == u.coverList.length ? 0 == u.wxCheck ? u.qwsearch(n, u.pageIndex) : u.noData = !0 : u.noData = !1;

                                  case 21:
                                  case "end":
                                    return o.stop();
                                }
                            }, c);
                        }))();
                    },
                    adLoad: function() {
                        this.adFlag = !0;
                    },
                    adError: function(e) {
                        this.adFlag = !1;
                    },
                    adClose: function() {
                        this.adFlag = !1;
                    },
                    qwsearch: function(n, t) {
                        var a = this;
                        u.getSearchImg(n, t, function(n) {
                            console.log(n);
                            var o = a.imgs;
                            if (1 == t) {
                                if (0 == n.length) return void e.showToast({
                                    title: "暂无结果",
                                    icon: "error"
                                });
                                o = [], a.setData({
                                    imgs: o,
                                    scrollTop: 0
                                });
                            }
                            for (var r = 0; r < n.length; r++) "1" != n[r].is_ads && o.push(n[r]);
                            a.setData({
                                imgs: o
                            });
                        }, function(e) {});
                    },
                    preview: function(n) {
                        console.log(n);
                        var t = JSON.stringify(n);
                        console.log(t), e.navigateTo({
                            url: "/pagesB/detail/qwdetail?detail=" + t + "&index=0"
                        });
                    },
                    search: function() {
                        e.navigateTo({
                            url: "/pages/search/search"
                        });
                    },
                    backTop: function() {
                        e.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        });
                    }
                },
                onPageScroll: function(e) {
                    e.scrollTop > 50 ? this.backShow = !0 : this.backShow = !1;
                },
                onReachBottom: function() {
                    var e = this;
                    return c(o.default.mark(function n() {
                        var t;
                        return o.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if ("nomore" != (t = e).loadStatus) {
                                    n.next = 3;
                                    break;
                                }
                                return n.abrupt("return");

                              case 3:
                                return n.next = 5, t.getList(t.modelType, t.modelId);

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                }
            };
            n.default = i;
        }).call(this, t("543d").default, t("a9ff").default);
    },
    "96b4": function(e, n, t) {
        t.r(n);
        var a = t("2e07"), o = t("a8e9");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("43af");
        var c = t("f0c5"), u = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    a8e9: function(e, n, t) {
        t.r(n);
        var a = t("6f6b"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    }
}, [ [ "1e09", "common/runtime", "common/vendor" ] ] ]);