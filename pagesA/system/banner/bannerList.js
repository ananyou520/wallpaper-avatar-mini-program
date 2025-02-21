(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/banner/bannerList" ], {
    "04ac": function(n, t, e) {
        (function(n, a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("a34a"));
            function u(n, t, e, a, r, u, o) {
                try {
                    var i = n[u](o), c = i.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void e(n);
                }
                i.done ? t(c) : Promise.resolve(c).then(a, r);
            }
            function o(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(a, r) {
                        var o = n.apply(t, e);
                        function i(n) {
                            u(o, a, r, i, c, "next", n);
                        }
                        function c(n) {
                            u(o, a, r, i, c, "throw", n);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        sheetList: [ {
                            text: "编辑"
                        }, {
                            text: "删除"
                        } ],
                        bannerId: "-1",
                        sheetShow: !1,
                        bannerList: [],
                        noData: !1
                    };
                },
                onLoad: function() {
                    this.getConfigList();
                },
                onShow: function() {
                    var t = this;
                    return o(r.default.mark(function e() {
                        var a;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                a = t, n.getStorageSync("update_flag") && (a.getConfigList(), n.removeStorageSync("update_flag"));

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                methods: {
                    getConfigList: function() {
                        var n = this;
                        return o(r.default.mark(function t() {
                            var e, u;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = n, t.next = 3, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_banner",
                                            pageIndex: 1,
                                            pageSize: 10,
                                            order: {
                                                name: "sort",
                                                type: "desc"
                                            }
                                        }
                                    });

                                  case 3:
                                    (u = t.sent).result.hasMore ? e.loadStatus = "loadmore" : e.loadStatus = "nomore", 
                                    e.bannerList = u.result.data, 0 == e.bannerList.length ? e.noData = !0 : e.noData = !1;

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    sheetClick: function(n, t) {
                        this.bannerId = n, this.sheetShow = !0;
                    },
                    addClick: function() {
                        n.navigateTo({
                            url: "/pagesA/system/banner/bannerEdit?id=-1"
                        });
                    },
                    sheetChange: function(t) {
                        var e = this;
                        return o(r.default.mark(function u() {
                            var i;
                            return r.default.wrap(function(u) {
                                for (;;) switch (u.prev = u.next) {
                                  case 0:
                                    "编辑" === (i = e).sheetList[t].text ? n.navigateTo({
                                        url: "/pagesA/system/banner/bannerEdit?id=" + i.bannerId
                                    }) : "删除" === i.sheetList[t].text && n.showModal({
                                        title: "删除提示",
                                        content: "确定删除当前轮播图吗？",
                                        confirmText: "删除",
                                        confirmColor: "#ff0000",
                                        success: function() {
                                            var t = o(r.default.mark(function t(e) {
                                                var u;
                                                return r.default.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                      case 0:
                                                        if (!e.confirm) {
                                                            t.next = 7;
                                                            break;
                                                        }
                                                        return n.showLoading({
                                                            mask: !0,
                                                            title: "删除中..."
                                                        }), t.next = 4, a.callFunction({
                                                            name: "query_del",
                                                            data: {
                                                                dbName: "app_banner",
                                                                filter: {
                                                                    _id: i.bannerId
                                                                }
                                                            }
                                                        });

                                                      case 4:
                                                        (u = t.sent).result.success && i.getConfigList(), n.showToast({
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
                                            return function(n) {
                                                return t.apply(this, arguments);
                                            };
                                        }()
                                    });

                                  case 2:
                                  case "end":
                                    return u.stop();
                                }
                            }, u);
                        }))();
                    }
                }
            };
            t.default = i;
        }).call(this, e("543d").default, e("a9ff").default);
    },
    "3a03": function(n, t, e) {
        (function(n) {
            e("1073"), e("a9ff"), a(e("66fd"));
            var t = a(e("dfe4"));
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    "3a24": function(n, t, e) {
        e.r(t);
        var a = e("04ac"), r = e.n(a);
        for (var u in a) "default" !== u && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(u);
        t.default = r.a;
    },
    "9bff": function(n, t, e) {
        var a = e("cb41");
        e.n(a).a;
    },
    bdd9: function(n, t, e) {
        e.d(t, "b", function() {
            return r;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return a;
        });
        var a = {
            uNavbar: function() {
                return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null, "8954"));
            },
            uActionSheet: function() {
                return e.e("uview-ui/components/u-action-sheet/u-action-sheet").then(e.bind(null, "a6b1"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    cb41: function(n, t, e) {},
    dfe4: function(n, t, e) {
        e.r(t);
        var a = e("bdd9"), r = e("3a24");
        for (var u in r) "default" !== u && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(u);
        e("9bff");
        var o = e("f0c5"), i = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = i.exports;
    }
}, [ [ "3a03", "common/runtime", "common/vendor" ] ] ]);