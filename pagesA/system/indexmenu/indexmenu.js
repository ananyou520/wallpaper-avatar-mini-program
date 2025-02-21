(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/indexmenu/indexmenu" ], {
    "134a6": function(e, n, t) {},
    "3ace": function(e, n, t) {
        var a = t("134a6");
        t.n(a).a;
    },
    "3c19": function(e, n, t) {
        t.r(n);
        var a = t("8e2d"), u = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = u.a;
    },
    5770: function(e, n, t) {
        t.r(n);
        var a = t("fa9e"), u = t("3c19");
        for (var r in u) "default" !== r && function(e) {
            t.d(n, e, function() {
                return u[e];
            });
        }(r);
        t("3ace");
        var i = t("f0c5"), o = Object(i.a)(u.default, a.b, a.c, !1, null, "2965c258", null, !1, a.a, void 0);
        n.default = o.exports;
    },
    "8e2d": function(e, n, t) {
        (function(e, a) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var u = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function r(e, n, t, a, u, r, i) {
                try {
                    var o = e[r](i), s = o.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                o.done ? n(s) : Promise.resolve(s).then(a, u);
            }
            function i(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(a, u) {
                        var i = e.apply(n, t);
                        function o(e) {
                            r(i, a, u, o, s, "next", e);
                        }
                        function s(e) {
                            r(i, a, u, o, s, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        sheetList: [ {
                            text: "编辑"
                        }, {
                            text: "删除"
                        } ],
                        menuId: "-1",
                        sheetShow: !1,
                        indexMenu: [],
                        noData: !1
                    };
                },
                onLoad: function() {
                    this.getConfigList();
                },
                onShow: function() {
                    var n = this;
                    return i(u.default.mark(function t() {
                        var a;
                        return u.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                a = n, e.getStorageSync("update_flag") && (a.getConfigList(), e.removeStorageSync("update_flag"));

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    getConfigList: function() {
                        var e = this;
                        return i(u.default.mark(function n() {
                            var t, r;
                            return u.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_index",
                                            pageIndex: 1,
                                            pageSize: 10,
                                            order: {
                                                name: "sort",
                                                type: "desc"
                                            }
                                        }
                                    });

                                  case 3:
                                    (r = n.sent).result.hasMore ? t.loadStatus = "loadmore" : t.loadStatus = "nomore", 
                                    t.indexMenu = r.result.data, 0 == t.indexMenu.length ? t.noData = !0 : t.noData = !1;

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    sheetClick: function(e, n) {
                        this.menuId = e, this.sheetShow = !0;
                    },
                    addClick: function() {
                        e.navigateTo({
                            url: "/pagesA/system/indexmenu/menuEdit?id=-1"
                        });
                    },
                    sheetChange: function(n) {
                        var t = this;
                        return i(u.default.mark(function r() {
                            var o;
                            return u.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    "编辑" === (o = t).sheetList[n].text ? e.navigateTo({
                                        url: "/pagesA/system/indexmenu/menuEdit?id=" + o.menuId
                                    }) : "删除" === o.sheetList[n].text && e.showModal({
                                        title: "删除提示",
                                        content: "确定删除当前轮播图吗？",
                                        confirmText: "删除",
                                        confirmColor: "#ff0000",
                                        success: function() {
                                            var n = i(u.default.mark(function n(t) {
                                                var r;
                                                return u.default.wrap(function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                      case 0:
                                                        if (!t.confirm) {
                                                            n.next = 7;
                                                            break;
                                                        }
                                                        return e.showLoading({
                                                            mask: !0,
                                                            title: "删除中..."
                                                        }), n.next = 4, a.callFunction({
                                                            name: "query_del",
                                                            data: {
                                                                dbName: "app_index",
                                                                filter: {
                                                                    _id: o.menuId
                                                                }
                                                            }
                                                        });

                                                      case 4:
                                                        (r = n.sent).result.success && o.getConfigList(), e.showToast({
                                                            icon: "none",
                                                            title: r.result.msg,
                                                            mask: !0,
                                                            duration: 1e3
                                                        });

                                                      case 7:
                                                      case "end":
                                                        return n.stop();
                                                    }
                                                }, n);
                                            }));
                                            return function(e) {
                                                return n.apply(this, arguments);
                                            };
                                        }()
                                    });

                                  case 2:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    switchChange: function(n, t) {
                        var r = this;
                        return i(u.default.mark(function i() {
                            var o, s;
                            return u.default.wrap(function(u) {
                                for (;;) switch (u.prev = u.next) {
                                  case 0:
                                    return r.menuId = n, o = r.indexMenu[t].show, e.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), "true" == o ? o = !0 : "false" == o && (o = !1), u.next = 6, a.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_index",
                                            filter: {
                                                _id: r.menuId
                                            },
                                            upData: {
                                                show: o
                                            }
                                        }
                                    });

                                  case 6:
                                    (s = u.sent).result.success || (r.indexMenu[t].show = !r.indexMenu[t].show), e.showToast({
                                        icon: "none",
                                        title: s.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 9:
                                  case "end":
                                    return u.stop();
                                }
                            }, i);
                        }))();
                    }
                }
            };
            n.default = o;
        }).call(this, t("543d").default, t("a9ff").default);
    },
    ae4d: function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), a(t("66fd"));
            var n = a(t("5770"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    fa9e: function(e, n, t) {
        t.d(n, "b", function() {
            return u;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {
            return a;
        });
        var a = {
            uNavbar: function() {
                return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null, "8954"));
            },
            uSwitch: function() {
                return t.e("uview-ui/components/u-switch/u-switch").then(t.bind(null, "3e94"));
            },
            uActionSheet: function() {
                return t.e("uview-ui/components/u-action-sheet/u-action-sheet").then(t.bind(null, "a6b1"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    }
}, [ [ "ae4d", "common/runtime", "common/vendor" ] ] ]);