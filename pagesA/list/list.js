(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/list/list" ], {
    "0343": function(e, t, n) {
        n.r(t);
        var a = n("136d"), r = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = r.a;
    },
    "136d": function(e, t, n) {
        (function(e, a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function o(e, t, n, a, r, o, c) {
                try {
                    var u = e[o](c), i = u.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                u.done ? t(i) : Promise.resolve(i).then(a, r);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, r) {
                        var c = e.apply(t, n);
                        function u(e) {
                            o(c, a, r, u, i, "next", e);
                        }
                        function i(e) {
                            o(c, a, r, u, i, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var u = {
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
                        modeFilter: 0,
                        navbarTop: 0,
                        coverList: [],
                        categoryList: [],
                        pageIndex: 0,
                        loadStatus: "loadmore",
                        rolldistance: "",
                        adFlag: !0,
                        backShow: !1
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    return c(r.default.mark(function a() {
                        var o, c, u, i, d;
                        return r.default.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return o = t.type, c = t.pid, u = t.id, i = t.mode, d = n, a.next = 4, d.getConfig();

                              case 4:
                                return 0 == d.wxCheck ? d.dbname = "app_cover" : d.dbname = "app_gallery", d.modelType = o, 
                                d.modelPid = c, d.modelId = u, d.modeFilter = i, "ranking" == o ? d.title = "排行榜" : "category" == o ? (d.title = "分类", 
                                d.getCategory()) : "color" == o ? (d.title = "颜色分类", d.getColor()) : ("search" == o || "tags" == o) && (d.title = u), 
                                a.next = 12, d.getList(o, u, 2, i);

                              case 12:
                                e.createSelectorQuery().in(d).select(".query").boundingClientRect(function(e) {
                                    d.navbarTop = e.top;
                                }).exec(), setTimeout(function() {
                                    d.skeletonLoad = !1;
                                }, 200);

                              case 15:
                              case "end":
                                return a.stop();
                            }
                        }, a);
                    }))();
                },
                methods: {
                    getConfig: function() {
                        var e = this;
                        return c(r.default.mark(function t() {
                            var n, o;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, a.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "wxCheck" ]
                                        }
                                    });

                                  case 3:
                                    (o = t.sent).result.success && (n.wxCheck = o.result.data[0]);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    detail: function(t, n, a) {
                        var r = JSON.stringify(a);
                        e.navigateTo({
                            url: "/pagesB/detail/detail?id=" + t + "&index=" + n + "&images=" + r
                        });
                    },
                    cateClick: function(e, t, n) {
                        var a = this;
                        t != a.modelId && (n && (a.rolldistance = n), a.noData = !1, a.modelId = t, a.getList(e, t, 1, a.modeFilter));
                    },
                    getList: function(e, t, n, o) {
                        var u = this;
                        return c(r.default.mark(function c() {
                            var i, d, s, l, f;
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if (d = (i = u).coverList, 1 == n && (i.coverList = [], d = [], i.pageIndex = 0), 
                                    i.pageIndex = i.pageIndex + 1, i.loadStatus = "loading", s = {}, "search" != e) {
                                        r.next = 12;
                                        break;
                                    }
                                    return r.next = 9, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: i.dbname,
                                            search: t,
                                            pageIndex: i.pageIndex,
                                            pageSize: 5
                                        }
                                    });

                                  case 9:
                                    s = r.sent, r.next = 40;
                                    break;

                                  case 12:
                                    if ("ranking" != e) {
                                        r.next = 20;
                                        break;
                                    }
                                    return l = {
                                        status: 1
                                    }, f = {}, "hot" == t ? f = {
                                        name: "view",
                                        type: "desc"
                                    } : "zan" == t ? f = {
                                        name: "zan",
                                        type: "desc"
                                    } : "coll" == t && (f = {
                                        name: "coll",
                                        type: "desc"
                                    }), r.next = 17, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: i.dbname,
                                            filter: l,
                                            order: f,
                                            pageIndex: i.pageIndex,
                                            pageSize: 5
                                        }
                                    });

                                  case 17:
                                    s = r.sent, r.next = 40;
                                    break;

                                  case 20:
                                    if ("category" != e) {
                                        r.next = 28;
                                        break;
                                    }
                                    return l = {
                                        status: 1,
                                        mode: Number(o)
                                    }, f = {
                                        name: "time",
                                        type: "desc"
                                    }, -1 == t ? f = {
                                        name: "time",
                                        type: "desc"
                                    } : -2 == t ? f = {
                                        name: "view",
                                        type: "desc"
                                    } : l = {
                                        category_id: t,
                                        status: 1,
                                      
                                    }, r.next = 25, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: i.dbname,
                                            filter: l,
                                            order: f,
                                            pageIndex: i.pageIndex,
                                            pageSize: 5
                                        }
                                    });

                                  case 25:
                                    s = r.sent, r.next = 40;
                                    break;

                                  case 28:
                                    if ("color" != e) {
                                        r.next = 36;
                                        break;
                                    }
                                    return l = {
                                        status: 1
                                    }, f = {
                                        name: "time",
                                        type: "desc"
                                    }, -1 == t ? f = {
                                        name: "time",
                                        type: "desc"
                                    } : -2 == t ? f = {
                                        name: "view",
                                        type: "desc"
                                    } : l = {
                                        color_id: t,
                                        status: 1
                                    }, r.next = 33, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: i.dbname,
                                            filter: l,
                                            order: f,
                                            pageIndex: i.pageIndex,
                                            pageSize: 5
                                        }
                                    });

                                  case 33:
                                    s = r.sent, r.next = 40;
                                    break;

                                  case 36:
                                    if ("tags" != e) {
                                        r.next = 40;
                                        break;
                                    }
                                    return r.next = 39, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: i.dbname,
                                            tags: t,
                                            pageIndex: i.pageIndex,
                                            pageSize: 5
                                        }
                                    });

                                  case 39:
                                    s = r.sent;

                                  case 40:
                                    s.result.hasMore ? i.loadStatus = "loadmore" : i.loadStatus = "nomore", 2 == n && (d = []), 
                                    d = d.concat(s.result.data), i.coverList = d, 0 == i.coverList.length ? i.noData = !0 : i.noData = !1;

                                  case 45:
                                  case "end":
                                    return r.stop();
                                }
                            }, c);
                        }))();
                    },
                    getCategory: function() {
                        var e = this;
                        return c(r.default.mark(function t() {
                            var n, o;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_category",
                                            order: {
                                                name: "sort",
                                                type: "desc"
                                            },
                                            filter: {
                                                mode: Number(e.modeFilter)
                                            },
                                            pageIndex: 1,
                                            pageSize: 20
                                        }
                                    });

                                  case 3:
                                    o = t.sent, n.categoryList = o.result.data, n.rolldistance = "akun" + (parseInt(n.modelPid) + 2);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getColor: function() {
                        var e = this;
                        return c(r.default.mark(function t() {
                            var n, o;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_color",
                                            order: {
                                                name: "sort",
                                                type: "desc"
                                            },
                                            pageIndex: 1,
                                            pageSize: 20
                                        }
                                    });

                                  case 3:
                                    o = t.sent, n.categoryList = o.result.data, n.rolldistance = "akun" + (parseInt(n.modelPid) + 2), 
                                    console.log(n.rolldistance);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }, 
                    onShareAppMessage: function(e) {
                        return {
                            title: "给你的手机挑一张精美壁纸！",
                            path: "/pages/index/index",
                        };
                    },
                    onShareTimeline: function(e) {
                        return {
                            title: "给你的手机挑一张精美壁纸！",
                            path: "/pages/index/index"
                        };
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
                    qwsearch: function() {
                        e.navigateTo({
                            url: "/pages/search/searchimg"
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
                    return c(r.default.mark(function t() {
                        var n;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if ("nomore" != (n = e).loadStatus) {
                                    t.next = 3;
                                    break;
                                }
                                return t.abrupt("return");

                              case 3:
                                return t.next = 5, n.getList(n.modelType, n.modelId);

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            };
            t.default = u;
        }).call(this, n("543d").default, n("a9ff").default);
    },
    "23e4": function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), a(n("66fd"));
            var t = a(n("f0f9"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "780d": function(e, t, n) {
        var a = n("78a7");
        n.n(a).a;
    },
    "78a7": function(e, t, n) {},
    d10b: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uLoadmore: function() {
                return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "98b0"));
            },
            uSkeleton: function() {
                return n.e("uview-ui/components/u-skeleton/u-skeleton").then(n.bind(null, "7409"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    f0f9: function(e, t, n) {
        n.r(t);
        var a = n("d10b"), r = n("0343");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("780d");
        var c = n("f0c5"), u = Object(c.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    }
}, [ [ "23e4", "common/runtime", "common/vendor" ] ] ]);