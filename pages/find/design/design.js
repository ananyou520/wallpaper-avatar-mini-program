(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/find/design/design" ], {
    "19d3": function(e, n, t) {},
    "445f": function(e, n, t) {
        (function(e, a) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function r(e, n, t, a, i, r, s) {
                try {
                    var o = e[r](s), u = o.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                o.done ? n(u) : Promise.resolve(u).then(a, i);
            }
            function s(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(a, i) {
                        var s = e.apply(n, t);
                        function o(e) {
                            r(s, a, i, o, u, "next", e);
                        }
                        function u(e) {
                            r(s, a, i, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = null, u = null, c = e.getSystemInfoSync(), d = {
                components: {
                    models: function() {
                        t.e("components/model/model").then(function() {
                            return resolve(t("37f2"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        w: c.screenWidth,
                        h: c.screenHeight,
                        loadShow: !0,
                        adIntegral: 0,
                        signShow: !1,
                        signTitle: "",
                        designIntegral: 0,
                        designShow: !1,
                        designTitle: "",
                        adShow: !1,
                        canvasUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7883b0be-568b-405c-83d4-6d4fe8b4df7d/9e2eacac-e3b0-4ac8-8752-d864f1d19ae9.jpg",
                        saveUrl: "",
                        designList: [],
                        designCurrent: 0,
                        viewShow: !1
                    };
                },
                onReady: function() {
                    (u = e.createCanvasContext("firstCanvas")).width = 2 * this.w, u.height = 2 * this.h;
                },
                onLoad: function() {
                    var e = this;
                    return s(i.default.mark(function n() {
                        var t;
                        return i.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t = e, n.next = 3, t.getDesign();

                              case 3:
                                return n.next = 5, t.getConfig();

                              case 5:
                                t.adLoad(), t.loadShow = !1;

                              case 7:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    getDesign: function() {
                        var e = this;
                        return s(i.default.mark(function n() {
                            var t, r;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_design",
                                            order: {
                                                name: "time",
                                                type: "asc"
                                            },
                                            pageIndex: 1,
                                            pageSize: 200
                                        }
                                    });

                                  case 3:
                                    r = n.sent, t.designList = r.result.data;

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getConfig: function() {
                        var e = this;
                        return s(i.default.mark(function n() {
                            var t, r;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, a.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "designIntegral", "adIntegral" ]
                                        }
                                    });

                                  case 3:
                                    (r = n.sent).result.success && (t.designIntegral = parseInt(r.result.data[0]), t.adIntegral = parseInt(r.result.data[1]));

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    cheekClick: function(e) {
                        this.designCurrent !== e && (this.designCurrent = e);
                    },
                    chooseClick: function() {
                        var n = this;
                        e.chooseImage({
                            count: 1,
                            sizeType: [ "original" ],
                            sourceType: [ "album" ],
                            success: function(e) {
                                console.log(e), n.canvasUrl = e.tempFilePaths[0];
                            }
                        });
                    },
                    canvasCont: function() {
                        var n = this;
                        return s(i.default.mark(function t() {
                            var r, s, o;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!((r = n).designIntegral > 0 && 1 === r.designList[r.designCurrent].mode)) {
                                        t.next = 15;
                                        break;
                                    }
                                    if (!((s = r.vuex_user.integral) < r.designIntegral)) {
                                        t.next = 7;
                                        break;
                                    }
                                    return r.designShow = !0, r.designTitle = "<p style='font-weight: 550;font-size: 16px;'>下载需要 " + r.designIntegral + " 能量</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>" + s + "</span>能量，不足以下载当前刘海壁纸~</p>", 
                                    t.abrupt("return");

                                  case 7:
                                    return e.showLoading({
                                        mask: !0,
                                        title: "保存中..."
                                    }), t.next = 10, a.callFunction({
                                        name: "place_design",
                                        data: {
                                            userId: r.vuex_user._id
                                        }
                                    });

                                  case 10:
                                    if ((o = t.sent).result.success) {
                                        t.next = 14;
                                        break;
                                    }
                                    return e.showToast({
                                        mask: !0,
                                        icon: "none",
                                        title: o.result.msg,
                                        duration: 1e3
                                    }), t.abrupt("return");

                                  case 14:
                                    r.getUser();

                                  case 15:
                                    e.showLoading({
                                        mask: !0,
                                        title: "保存中..."
                                    }), e.getImageInfo({
                                        src: r.canvasUrl,
                                        success: function(n) {
                                            var t = r.imageUtil(n.width, n.height), a = n.path;
                                            e.downloadFile({
                                                url: r.designList[r.designCurrent].image,
                                                success: function(n) {
                                                    var i = n.tempFilePath;
                                                    u.drawImage(a, 2 * t.x, 2 * t.y, 2 * t.width, 2 * t.height), u.drawImage(i, 0, 0, 2 * r.w, 2 * r.w), 
                                                    u.draw(), setTimeout(function() {
                                                        e.canvasToTempFilePath({
                                                            fileType: "jpg",
                                                            canvasId: "firstCanvas",
                                                            success: function(e) {
                                                                r.saveImage(e.tempFilePath);
                                                            }
                                                        });
                                                    }, 300);
                                                }
                                            });
                                        }
                                    });

                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    saveImage: function(n) {
                        var t = this;
                        e.saveImageToPhotosAlbum({
                            filePath: n,
                            success: function(n) {
                                e.hideLoading(), t.adShow = !0;
                            },
                            fail: function(n) {
                                n.errMsg && e.showModal({
                                    title: "提示",
                                    content: "无权限，请打开下载权限后再试！",
                                    showCancel: !1,
                                    success: function(n) {
                                        n.confirm && e.openSetting({
                                            success: function(n) {
                                                n.authSetting["scope.writePhotosAlbum"] ? e.saveImageToPhotosAlbum({
                                                    filePath: t.saveUrl,
                                                    success: function(n) {
                                                        e.hideLoading(), t.adShow = !0;
                                                    }
                                                }) : e.showModal({
                                                    title: "温馨提示",
                                                    content: "授权失败，请稍后重新获取",
                                                    showCancel: !1
                                                });
                                            }
                                        });
                                    }
                                }), e.hideLoading();
                            }
                        });
                    },
                    adClick: function() {
                        o && o.show().catch(function(e) {
                            o.load().then(function() {
                                return o.show();
                            });
                        });
                    },
                    adLoad: function() {
                        var e = this;
                        wx.createRewardedVideoAd && ((o = wx.createRewardedVideoAd({
                            adUnitId: n.vuex_awardAd
                        })).onError(function(e) {
                            console.log("videoAd onError", res);
                        }), o.onClose(function(n) {
                            e.designShow = !1, n && n.isEnded || void 0 === n ? e.vuex_user && e.userIntegral() : console.log("中途退出");
                        }));
                    },
                    userIntegral: function() {
                        var n = this;
                        return s(i.default.mark(function t() {
                            var r, s;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return r = n, e.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), t.next = 4, a.callFunction({
                                        name: "user_integral",
                                        data: {
                                            userId: r.vuex_user._id
                                        }
                                    });

                                  case 4:
                                    s = t.sent, e.hideLoading(), s.result.success && (r.getUser(), r.signTitle = "<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + s.result.integral + "</span>能量</p>", 
                                    r.signShow = !0);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getUser: function() {
                        var e = this;
                        return s(i.default.mark(function n() {
                            var t, r;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, a.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_user",
                                            id: t.vuex_user._id
                                        }
                                    });

                                  case 3:
                                    r = n.sent, t.$u.vuex("vuex_user", r.result);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    backClick: function() {
                        e.navigateBack();
                    },
                    viewCont: function() {
                        this.viewShow = !this.viewShow;
                    },
                    imageUtil: function(e, n) {
                        var t = this, a = 0, i = 0, r = {}, s = 0, o = 0;
                        return n / e < t.h / t.w ? (i = t.h, a = t.h * e / n) : (a = t.w, i = t.w * n / e), 
                        a > t.w ? (s = 0 - (s = (a - t.w) / 2), o = 0) : (o = 0 - (o = (i - t.h) / 2), s = 0), 
                        r.x = s, r.y = o, r.width = a, r.height = i, r;
                    }
                },
                onShareAppMessage: function(e) {
                    return this.adShow = !1, {
                        title: "快来看看我设计的刘海壁纸~",
                        path: "/pages/find/find?userId=" + this.vuex_user._id
                    };
                },
                onShareTimeline: function(e) {
                    return {
                        title: "我等风也等你，近听水无声~",
                        path: "/pages/index/index"
                    };
                }
            };
            n.default = d;
        }).call(this, t("543d").default, t("a9ff").default);
    },
    "741f": function(e, n, t) {
        t.r(n);
        var a = t("d95d"), i = t("fb10");
        for (var r in i) "default" !== r && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(r);
        t("d4ed");
        var s = t("f0c5"), o = Object(s.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = o.exports;
    },
    cf22: function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), a(t("66fd"));
            var n = a(t("741f"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    d4ed: function(e, n, t) {
        var a = t("19d3");
        t.n(a).a;
    },
    d95d: function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {
            return a;
        });
        var a = {
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
            }
        }, i = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(n) {
                e.designShow = !1;
            }, e.e1 = function(n) {
                e.signShow = !1;
            }, e.e2 = function(n) {
                e.adShow = !1;
            }, e.e3 = function(n) {
                e.adShow = !1;
            });
        }, r = [];
    },
    fb10: function(e, n, t) {
        t.r(n);
        var a = t("445f"), i = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = i.a;
    }
}, [ [ "cf22", "common/runtime", "common/vendor" ] ] ]);