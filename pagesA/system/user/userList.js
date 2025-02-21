(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/user/userList" ], {
    "589d": function(e, t, n) {
        (function(e, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function u(e, t, n, r, a, u, o) {
                try {
                    var s = e[u](o), i = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                s.done ? t(i) : Promise.resolve(i).then(r, a);
            }
            function o(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = e.apply(t, n);
                        function s(e) {
                            u(o, r, a, s, i, "next", e);
                        }
                        function i(e) {
                            u(o, r, a, s, i, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        tagCurrent: 0,
                        tagList: [ {
                            name: "正常"
                        }, {
                            name: "封禁"
                        } ],
                        sheetList: [],
                        userId: "",
                        userList: [],
                        sheetShow: !1,
                        noData: !1,
                        pageIndex: 0,
                        loadStatus: "loadmore"
                    };
                },
                onLoad: function() {
                    var e = this;
                    return o(a.default.mark(function t() {
                        var n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e, t.next = 3, n.getUserList(1);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    getUserList: function(t) {
                        var n = this;
                        return o(a.default.mark(function r() {
                            var u, o, s, i;
                            return a.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return (u = n).loadStatus = "loading", o = u.userList, 1 == t && (u.userList = [], 
                                    o = [], u.pageIndex = 0), u.pageIndex = u.pageIndex + 1, {}, s = 1 == u.tagCurrent ? {
                                        status: 2
                                    } : {
                                        status: 1
                                    }, r.next = 9, e.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_user",
                                            filter: s,
                                            order: {
                                                name: "time",
                                                type: "desc"
                                            },
                                            pageIndex: u.pageIndex,
                                            pageSize: 15
                                        }
                                    });

                                  case 9:
                                    (i = r.sent).result.hasMore ? u.loadStatus = "loadmore" : u.loadStatus = "nomore", 
                                    o = o.concat(i.result.data), u.userList = o, 0 == u.userList.length ? u.noData = !0 : u.noData = !1;

                                  case 14:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    cateClick: function(e) {
                        e != this.tagCurrent && (this.tagCurrent = e, this.getUserList(1));
                    },
                    moreClick: function(e, t) {
                        var n = this;
                        n.userId = e, 1 === t && (n.sheetList = [ {
                            text: "他的作品"
                        }, {
                            text: "他的下载"
                        }, {
                            text: "他的出售"
                        }, {
                            text: "他的能量"
                        }, {
                            text: "封禁账户"
                        } ]), 2 === t && (n.sheetList = [ {
                            text: "他的作品"
                        }, {
                            text: "他的订单"
                        }, {
                            text: "他的出售"
                        }, {
                            text: "他的能量"
                        }, {
                            text: "解除封禁"
                        } ]), n.sheetShow = !0;
                    },
                    sheetClick: function(t) {
                        var n = this;
                        return o(a.default.mark(function u() {
                            var s, i, c, d;
                            return a.default.wrap(function(u) {
                                for (;;) switch (u.prev = u.next) {
                                  case 0:
                                    "封禁账户" === (i = (s = n).sheetList[t].text) || "解除封禁" === i ? (c = 1, d = "确定解除封禁状态吗？", 
                                    "封禁账户" === i && (c = 2, d = "确定封禁当前账户吗？"), r.showModal({
                                        title: "封禁提示",
                                        content: d,
                                        confirmText: "封禁",
                                        confirmColor: "#ff0000",
                                        success: function() {
                                            var t = o(a.default.mark(function t(n) {
                                                var u;
                                                return a.default.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                      case 0:
                                                        if (!n.confirm) {
                                                            t.next = 7;
                                                            break;
                                                        }
                                                        return r.showLoading({
                                                            mask: !0,
                                                            title: "正在拼命加载中..."
                                                        }), t.next = 4, e.callFunction({
                                                            name: "query_edit",
                                                            data: {
                                                                dbName: "app_user",
                                                                filter: {
                                                                    _id: s.userId
                                                                },
                                                                upData: {
                                                                    status: c
                                                                }
                                                            }
                                                        });

                                                      case 4:
                                                        (u = t.sent).result.success && s.getUserList(1), r.showToast({
                                                            icon: "none",
                                                            title: u.result.msg,
                                                            mask: !0,
                                                            duration: 1e3
                                                        });

                                                      case 7:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                }, t);
                                            }));
                                            return function(e) {
                                                return t.apply(this, arguments);
                                            };
                                        }()
                                    })) : "他的作品" === i ? r.navigateTo({
                                        url: "/pagesA/system/cover/coverList?userId=" + s.userId
                                    }) : "他的下载" === i || "他的订单" === i ? r.navigateTo({
                                        url: "/pages/user/order/order?userId=" + s.userId
                                    }) : "他的出售" === i ? r.navigateTo({
                                        url: "/pages/user/order/order?authorId=" + s.userId
                                    }) : "他的能量" === i && r.navigateTo({
                                        url: "/pages/user/integral/record?userId=" + s.userId
                                    });

                                  case 3:
                                  case "end":
                                    return u.stop();
                                }
                            }, u);
                        }))();
                    }
                },
                onReachBottom: function() {
                    "nomore" != this.loadStatus && this.getUserList();
                }
            };
            t.default = s;
        }).call(this, n("a9ff").default, n("543d").default);
    },
    "62f7": function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), r(n("66fd"));
            var t = r(n("eb96"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "6a28": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {
            return r;
        });
        var r = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uTabs: function() {
                return n.e("uview-ui/components/u-tabs/u-tabs").then(n.bind(null, "21a0"));
            },
            uLoadmore: function() {
                return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "98b0"));
            },
            uActionSheet: function() {
                return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null, "a6b1"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    7761: function(e, t, n) {},
    "7d85": function(e, t, n) {
        n.r(t);
        var r = n("589d"), a = n.n(r);
        for (var u in r) "default" !== u && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(u);
        t.default = a.a;
    },
    d88f: function(e, t, n) {
        var r = n("7761");
        n.n(r).a;
    },
    eb96: function(e, t, n) {
        n.r(t);
        var r = n("6a28"), a = n("7d85");
        for (var u in a) "default" !== u && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(u);
        n("d88f");
        var o = n("f0c5"), s = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = s.exports;
    }
}, [ [ "62f7", "common/runtime", "common/vendor" ] ] ]);