(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/write/write" ], {
    2615: function(e, t, n) {
        var o = n("a0cb");
        n.n(o).a;
    },
    "31b6": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uLoadmore: function() {
                return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "98b0"));
            },
            uActionSheet: function() {
                return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null, "a6b1"));
            }
        }, a = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                e.modelShow = !1;
            });
        }, r = [];
    },
    5307: function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), o(n("66fd"));
            var t = o(n("d3ad"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "78cd": function(e, t, n) {
        (function(e, o) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function r(e, t, n, o, a, r, u) {
                try {
                    var i = e[r](u), c = i.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                i.done ? t(c) : Promise.resolve(c).then(o, a);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, a) {
                        var u = e.apply(t, n);
                        function i(e) {
                            r(u, o, a, i, c, "next", e);
                        }
                        function c(e) {
                            r(u, o, a, i, c, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        wxCheck: !1,
                        dbname: "",
                        orderStatus: 0,
                        navbarTop: 0,
                        coverList: [],
                        sheetList: [ {
                            text: "删除",
                            color: "#ff0000",
                            fontSize: "32"
                        } ],
                        sheetShow: !1,
                        coverId: "",
                        modelShow: !1,
                        noData: !1,
                        pageIndex: 0,
                        loadStatus: "loadmore"
                    };
                },
                components: {
                    models: function() {
                        n.e("components/model/model").then(function() {
                            return resolve(n("37f2"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                onShow: function() {
                    var e = this;
                    return u(a.default.mark(function t() {
                        var n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e, t.next = 3, n.getConfig();

                              case 3:
                                0 == n.wxCheck ? n.dbname = "app_cover" : n.dbname = "app_gallery", n.pageIndex = 0, 
                                n.coverList = [], n.getCoverList();

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    getConfig: function() {
                        var t = this;
                        return u(a.default.mark(function n() {
                            var o, r;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return o = t, n.next = 3, e.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "wxCheck" ]
                                        }
                                    });

                                  case 3:
                                    (r = n.sent).result.success && (o.wxCheck = r.result.data[0]);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getCoverList: function() {
                        var t = this;
                        return u(a.default.mark(function n() {
                            var o, r, u;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return r = (o = t).coverList, o.pageIndex = o.pageIndex + 1, o.noData = !1, o.loadStatus = "loading", 
                                    n.next = 7, e.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: o.dbname,
                                            order: {
                                                name: "time",
                                                type: "desc"
                                            },
                                            filter: {
                                                user_id: o.vuex_user._id
                                            },
                                            pageIndex: o.pageIndex,
                                            pageSize: 12
                                        }
                                    });

                                  case 7:
                                    (u = n.sent).result.hasMore ? o.loadStatus = "loadmore" : o.loadStatus = "nomore", 
                                    r = r.concat(u.result.data), o.coverList = r, 0 == o.coverList.length ? o.noData = !0 : o.noData = !1;

                                  case 12:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    moreClick: function(e, t) {
                        this.coverId = e, this.sheetShow = !0;
                    },
                    sheetClick: function(e) {
                        var t = this.sheetList[e].text;
                        "删除" == t ? this.modelShow = !0 : "下架" == t && console.log("下架");
                    },
                    delClick: function() {
                        var t = this;
                        return u(a.default.mark(function n() {
                            var r, u;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return (r = t).modelShow = !1, o.showLoading({
                                        mask: !0,
                                        title: "删除中..."
                                    }), n.next = 5, e.callFunction({
                                        name: "query_del",
                                        data: {
                                            dbName: "app_cover",
                                            filter: {
                                                _id: r.coverId
                                            },
                                            dbToName: "app_cdkey",
                                            toFilter: {
                                                cover_id: r.coverId
                                            }
                                        }
                                    });

                                  case 5:
                                    (u = n.sent).result.success && (r.pageIndex = 0, r.coverList = [], r.getCoverList()), 
                                    o.showToast({
                                        icon: "none",
                                        title: u.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 8:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    editClick: function(e) {
                        o.navigateTo({
                            url: "/pages/user/write/edit"
                        });
                    },
                    detail: function(e) {
                        o.navigateTo({
                            url: "/pagesB/detail/detail?id=" + e + "&index=0"
                        });
                    }
                },
                onReachBottom: function() {
                    "nomore" != this.loadStatus && this.getCoverList();
                }
            };
            t.default = i;
        }).call(this, n("a9ff").default, n("543d").default);
    },
    a0cb: function(e, t, n) {},
    d3ad: function(e, t, n) {
        n.r(t);
        var o = n("31b6"), a = n("e366");
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        n("2615");
        var u = n("f0c5"), i = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = i.exports;
    },
    e366: function(e, t, n) {
        n.r(t);
        var o = n("78cd"), a = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = a.a;
    }
}, [ [ "5307", "common/runtime", "common/vendor" ] ] ]);