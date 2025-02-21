(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/order/detail" ], {
    "1da5": function(n, e, t) {
        var o = t("8b22");
        t.n(o).a;
    },
    "31ac": function(n, e, t) {
        (function(n) {
            t("1073"), t("a9ff"), o(t("66fd"));
            var e = o(t("9ce3"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    4007: function(n, e, t) {
        t.r(e);
        var o = t("a6a7"), a = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    "43ce": function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return r;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            uNavbar: function() {
                return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null, "8954"));
            },
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
            }
        }, a = function() {
            var n = this, e = (n.$createElement, n._self._c, n.$u.timeFormat(n.order.time, "yyyy-mm-dd hh:MM:ss"));
            n._isMounted || (n.e0 = function(e) {
                n.adShow = !1;
            }, n.e1 = function(e) {
                n.adShow = !1;
            }), n.$mp.data = Object.assign({}, {
                $root: {
                    g0: e
                }
            });
        }, r = [];
    },
    "8b22": function(n, e, t) {},
    "9ce3": function(n, e, t) {
        t.r(e);
        var o = t("43ce"), a = t("4007");
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("1da5");
        var u = t("f0c5"), i = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    },
    a6a7: function(n, e, t) {
        (function(n, o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("a34a"));
            function r(n, e, t, o, a, r, u) {
                try {
                    var i = n[r](u), c = i.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                i.done ? e(c) : Promise.resolve(c).then(o, a);
            }
            var u = {
                components: {
                    models: function() {
                        t.e("components/model/model").then(function() {
                            return resolve(t("37f2"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        navbarBackground: {
                            background: "rgba(0,0,0,0)"
                        },
                        order: {},
                        adShow: !1
                    };
                },
                onLoad: function(n) {
                    var e = n.id;
                    this.getOrder(e);
                },
                methods: {
                    getOrder: function(e) {
                        var t = this;
                        return function(n) {
                            return function() {
                                var e = this, t = arguments;
                                return new Promise(function(o, a) {
                                    var u = n.apply(e, t);
                                    function i(n) {
                                        r(u, o, a, i, c, "next", n);
                                    }
                                    function c(n) {
                                        r(u, o, a, i, c, "throw", n);
                                    }
                                    i(void 0);
                                });
                            };
                        }(a.default.mark(function o() {
                            var r;
                            return a.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, n.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_order",
                                            id: e
                                        }
                                    });

                                  case 2:
                                    r = o.sent, t.order = r.result;

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    previewImage: function(n) {
                        o.previewImage({
                            current: n,
                            urls: [ n ]
                        });
                    },
                    downClick: function(n) {
                        var e = this, t = n.substring(n.lastIndexOf(".") + 1), a = new Date().valueOf();
                        o.downloadFile({
                            url: n,
                            filePath: wx.env.USER_DATA_PATH + "/" + a + "." + t,
                            success: function(n) {
                                var t = n.filePath;
                                o.saveImageToPhotosAlbum({
                                    filePath: t,
                                    success: function(n) {
                                        o.hideLoading(), e.adShow = !0;
                                    },
                                    fail: function(n) {
                                        n.errMsg && o.showModal({
                                            title: "提示",
                                            content: "无权限，请打开下载权限后再试！",
                                            showCancel: !1,
                                            success: function(n) {
                                                n.confirm && o.openSetting({
                                                    success: function(n) {
                                                        n.authSetting["scope.writePhotosAlbum"] ? o.saveImageToPhotosAlbum({
                                                            filePath: t,
                                                            success: function(n) {
                                                                o.hideLoading(), e.adShow = !0;
                                                            }
                                                        }) : o.showModal({
                                                            title: "温馨提示",
                                                            content: "授权失败，请稍后重新获取",
                                                            showCancel: !1
                                                        });
                                                    }
                                                });
                                            }
                                        }), o.hideLoading();
                                    }
                                });
                            },
                            fail: function(n) {
                                console.log(n);
                            }
                        });
                    }
                },
                onShareAppMessage: function(n) {
                    var e = this;
                    return setTimeout(function() {
                        e.adShow = !1;
                    }, 2e3), {
                        title: "送你一张超级好看的壁纸~",
                        imageUrl: e.order.image,
                        path: "/pages/index/index?userId=" + e.vuex_user._id + "&detailId=" + e.order.cover_id + "&index=" + e.order.current
                    };
                }
            };
            e.default = u;
        }).call(this, t("a9ff").default, t("543d").default);
    }
}, [ [ "31ac", "common/runtime", "common/vendor" ] ] ]);