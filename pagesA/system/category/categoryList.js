(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/category/categoryList" ], {
    1985: function(t, e, n) {
        var a = n("c8b7");
        n.n(a).a;
    },
    "4cd5": function(t, e, n) {
        (function(t) {
            n("1073"), n("a9ff"), a(n("66fd"));
            var e = a(n("f70e"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    "59e3": function(t, e, n) {
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uActionSheet: function() {
                return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null, "a6b1"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    abcb: function(t, e, n) {
        (function(t, a) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a"));
            function o(t, e, n, a, r, o, u) {
                try {
                    var c = t[o](u), i = c.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void n(t);
                }
                c.done ? e(i) : Promise.resolve(i).then(a, r);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var u = t.apply(e, n);
                        function c(t) {
                            o(u, a, r, c, i, "next", t);
                        }
                        function i(t) {
                            o(u, a, r, c, i, "throw", t);
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
                        categoryId: "-1",
                        sheetShow: !1,
                        categoryList: [],
                        noData: !1
                    };
                },
                onLoad: function() {
                    this.getCategoryList();
                },
                onShow: function() {
                    var e = this;
                    return u(r.default.mark(function n() {
                        var a;
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                a = e, t.getStorageSync("update_flag") && (a.getCategoryList(), t.removeStorageSync("update_flag"));

                              case 2:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    getCategoryList: function() {
                        var t = this;
                        return u(r.default.mark(function e() {
                            var n, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = t, e.next = 3, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_category",
                                            order: {
                                                name: "sort",
                                                type: "desc"
                                            },
                                            pageIndex: 1,
                                            pageSize: 100
                                        }
                                    });

                                  case 3:
                                    (o = e.sent).result.hasMore ? n.loadStatus = "loadmore" : n.loadStatus = "nomore", 
                                    n.categoryList = o.result.data, 0 == n.categoryList.length ? n.noData = !0 : n.noData = !1;

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    sheetClick: function(t, e) {
                        this.categoryId = t, this.sheetShow = !0;
                    },
                    addClick: function() {
                        t.navigateTo({
                            url: "/pagesA/system/category/categoryEdit?id=-1"
                        });
                    },
                    sheetChange: function(e) {
                        var n = this;
                        return u(r.default.mark(function o() {
                            var c;
                            return r.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    "编辑" === (c = n).sheetList[e].text ? t.navigateTo({
                                        url: "/pagesA/system/category/categoryEdit?id=" + c.categoryId
                                    }) : "删除" === c.sheetList[e].text && t.showModal({
                                        title: "删除提示",
                                        content: "确定删除当前分类吗？",
                                        confirmText: "删除",
                                        confirmColor: "#ff0000",
                                        success: function() {
                                            var e = u(r.default.mark(function e(n) {
                                                var o;
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
                                                        }), e.next = 4, a.callFunction({
                                                            name: "query_del",
                                                            data: {
                                                                dbName: "app_category",
                                                                filter: {
                                                                    _id: c.categoryId
                                                                },
                                                                dbToName: "app_category",
                                                                toFilter: {
                                                                    parent_id: c.categoryId
                                                                }
                                                            }
                                                        });

                                                      case 4:
                                                        (o = e.sent).result.success && c.getCategoryList(), t.showToast({
                                                            icon: "none",
                                                            title: o.result.msg,
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
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default, n("a9ff").default);
    },
    b4c9: function(t, e, n) {
        n.r(e);
        var a = n("abcb"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    },
    c8b7: function(t, e, n) {},
    f70e: function(t, e, n) {
        n.r(e);
        var a = n("59e3"), r = n("b4c9");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("1985");
        var u = n("f0c5"), c = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    }
}, [ [ "4cd5", "common/runtime", "common/vendor" ] ] ]);