(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/color/color" ], {
    "24a5": function(t, e, n) {
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return o;
        });
        var o = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uActionSheet: function() {
                return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null, "a6b1"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    3856: function(t, e, n) {
        n.r(e);
        var o = n("24a5"), r = n("cc9f");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("a472");
        var u = n("f0c5"), c = Object(u.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    7089: function(t, e, n) {
        (function(t) {
            n("1073"), n("a9ff"), o(n("66fd"));
            var e = o(n("3856"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    a472: function(t, e, n) {
        var o = n("bfc3");
        n.n(o).a;
    },
    bfc3: function(t, e, n) {},
    cc9f: function(t, e, n) {
        n.r(e);
        var o = n("d841"), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    d841: function(t, e, n) {
        (function(t, o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a"));
            function a(t, e, n, o, r, a, u) {
                try {
                    var c = t[a](u), i = c.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void n(t);
                }
                c.done ? e(i) : Promise.resolve(i).then(o, r);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, r) {
                        var u = t.apply(e, n);
                        function c(t) {
                            a(u, o, r, c, i, "next", t);
                        }
                        function i(t) {
                            a(u, o, r, c, i, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        sheetList: [ {
                            text: "编辑"
                        }, {
                            text: "删除"
                        } ],
                        colorId: "-1",
                        sheetShow: !1,
                        colorList: [],
                        noData: !1
                    };
                },
                onLoad: function() {
                    this.getcolorList();
                },
                onShow: function() {
                    var e = this;
                    return u(r.default.mark(function n() {
                        var o;
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                o = e, t.getStorageSync("update_flag") && (o.getcolorList(), t.removeStorageSync("update_flag"));

                              case 2:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    getcolorList: function() {
                        var t = this;
                        return u(r.default.mark(function e() {
                            var n, a;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = t, e.next = 3, o.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_color",
                                            order: {
                                                name: "sort",
                                                type: "desc"
                                            },
                                            pageIndex: 1,
                                            pageSize: 100
                                        }
                                    });

                                  case 3:
                                    (a = e.sent).result.hasMore ? n.loadStatus = "loadmore" : n.loadStatus = "nomore", 
                                    n.colorList = a.result.data, 0 == n.colorList.length ? n.noData = !0 : n.noData = !1;

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    sheetClick: function(t, e) {
                        this.colorId = t, this.sheetShow = !0;
                    },
                    addClick: function() {
                        t.navigateTo({
                            url: "/pagesA/system/color/colorEdit?id=-1"
                        });
                    },
                    sheetChange: function(e) {
                        var n = this;
                        return u(r.default.mark(function a() {
                            var c;
                            return r.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    "编辑" === (c = n).sheetList[e].text ? t.navigateTo({
                                        url: "/pagesA/system/color/colorEdit?id=" + c.colorId
                                    }) : "删除" === c.sheetList[e].text && t.showModal({
                                        title: "删除提示",
                                        content: "确定删除当前分类吗？",
                                        confirmText: "删除",
                                        confirmColor: "#ff0000",
                                        success: function() {
                                            var e = u(r.default.mark(function e(n) {
                                                var a;
                                                return r.default.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                      case 0:
                                                        if (!n.confirm) {
                                                            e.next = 7;
                                                            break;
                                                        }
                                                        return t.showLoading({
                                                            mask: !0,
                                                            title: "删除中..."
                                                        }), e.next = 4, o.callFunction({
                                                            name: "query_del",
                                                            data: {
                                                                dbName: "app_color",
                                                                filter: {
                                                                    _id: c.colorId
                                                                },
                                                                dbToName: "app_color",
                                                                toFilter: {
                                                                    parent_id: c.colorId
                                                                }
                                                            }
                                                        });

                                                      case 4:
                                                        (a = e.sent).result.success && c.getcolorList(), t.showToast({
                                                            icon: "none",
                                                            title: a.result.msg,
                                                            mask: !0,
                                                            duration: 1e3
                                                        });

                                                      case 7:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments);
                                            };
                                        }()
                                    });

                                  case 2:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default, n("a9ff").default);
    }
}, [ [ "7089", "common/runtime", "common/vendor" ] ] ]);