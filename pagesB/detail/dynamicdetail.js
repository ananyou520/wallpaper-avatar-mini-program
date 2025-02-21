(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesB/detail/dynamicdetail" ], {
    "2ec1": function(e, n, t) {
        t.r(n);
        var o = t("f997"), a = t("ff0d");
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        t("525c");
        var u = t("f0c5"), i = Object(u.a)(a.default, o.b, o.c, !1, null, "0ab02c13", null, !1, o.a, void 0);
        n.default = i.exports;
    },
    "32b2": function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), o(t("66fd"));
            var n = o(t("2ec1"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    "525c": function(e, n, t) {
        var o = t("da95");
        t.n(o).a;
    },
    da95: function(e, n, t) {},
    e06a: function(e, n, t) {
        (function(e, o) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a, r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function u(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e;
            }
            function i(e, n, t, o, a, r, u) {
                try {
                    var i = e[r](u), s = i.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                i.done ? n(s) : Promise.resolve(s).then(o, a);
            }
            function s(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(o, a) {
                        var r = e.apply(n, t);
                        function u(e) {
                            i(r, o, a, u, s, "next", e);
                        }
                        function s(e) {
                            i(r, o, a, u, s, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var c, d = null;
            c = e.getMenuButtonBoundingClientRect();
            var l = (u(a = {
                components: {
                    models: function() {
                        t.e("components/model/model").then(function() {
                            return resolve(t("37f2"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        menuButtonInfo: c,
                        loginShow: !1,
                        adIntegral: 0,
                        downShow: !1,
                        downIntegral: 0,
                        downTitle: "",
                        adShow: !1,
                        signShow: !1,
                        signTitle: "",
                        videoSrc: "",
                        hideBtn: !1
                    };
                }
            }, "components", {}), u(a, "props", {}), u(a, "onLoad", function(e) {
                var n = this;
                return s(r.default.mark(function t() {
                    var o, a;
                    return r.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return o = n, a = decodeURIComponent(e.url), console.log(a), o.videoSrc = a, t.next = 6, 
                            o.getConfig();

                          case 6:
                            o.adLoad();

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            }), u(a, "onShareAppMessage", function() {
                return {
                    title: "这个动态壁纸好好看~",
                    path: "pagesB/detail/dynamicdetail?url=" + this.videoSrc
                };
            }), u(a, "methods", {
                getConfig: function() {
                    var e = this;
                    return s(r.default.mark(function n() {
                        var t, a;
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t = e, n.next = 3, o.callFunction({
                                    name: "config_map",
                                    data: {
                                        keys: [ "downIntegral", "adIntegral" ]
                                    }
                                });

                              case 3:
                                (a = n.sent).result.success && (t.downIntegral = parseInt(a.result.data[0]), t.adIntegral = parseInt(a.result.data[1]));

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                backTap: function(n) {
                    e.navigateBack({
                        delta: 1
                    });
                },
                videoTap: function(e) {
                    this.setData({
                        hideBtn: !this.hideBtn
                    });
                },
                winClick: function() {
                    var n = this;
                    return s(r.default.mark(function t() {
                        var a, u, i;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if ((a = n).vuex_user) {
                                    t.next = 4;
                                    break;
                                }
                                return a.loginShow = !0, t.abrupt("return");

                              case 4:
                                if (!(a.downIntegral > 0)) {
                                    t.next = 18;
                                    break;
                                }
                                if (!((u = a.vuex_user.integral) < a.downIntegral)) {
                                    t.next = 10;
                                    break;
                                }
                                return a.downShow = !0, a.downTitle = "<p style='font-weight: 550;font-size: 16px;'>下载需要 " + a.downIntegral + " 能量</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>" + u + "</span>能量，无法下载当前作品，快去赚能量吧~</p>", 
                                t.abrupt("return");

                              case 10:
                                return e.showLoading({
                                    mask: !0,
                                    title: "保存中..."
                                }), t.next = 13, o.callFunction({
                                    name: "place_other",
                                    data: {
                                        userId: a.vuex_user._id
                                    }
                                });

                              case 13:
                                i = t.sent, console.log("query", i), i.result.success ? (a.getUser(), a.downloadTap()) : e.showToast({
                                    mask: !0,
                                    icon: "none",
                                    title: i.result.msg,
                                    duration: 1e3
                                }), t.next = 19;
                                break;

                              case 18:
                                a.downloadTap();

                              case 19:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                downloadTap: function(n) {
                    var t = this;
                    e.getSetting({
                        success: function(n) {
                            n.authSetting["scope.writePhotosAlbum"] ? t.save() : e.authorize({
                                scope: "scope.writePhotosAlbum",
                                success: function() {
                                    t.save();
                                },
                                fail: function() {
                                    e.showModal({
                                        title: "温馨提示",
                                        content: "您未授权访问相册的权限，无法保存，请允许访问相册",
                                        showCancel: !1
                                    });
                                }
                            });
                        }
                    });
                },
                save: function() {
                    var n = this;
                    e.showLoading({
                        title: "下载中"
                    }), e.downloadFile({
                        url: n.videoSrc.replace("http", "https"),
                        success: function(t) {
                            200 === t.statusCode && e.saveVideoToPhotosAlbum({
                                filePath: t.tempFilePath,
                                success: function(t) {
                                    e.hideLoading(), n.adShow = !0;
                                },
                                fail: function(n) {
                                    e.hideLoading(), e.showModal({
                                        title: "温馨提示",
                                        content: "授权失败，请稍后重新获取",
                                        showCancel: !1
                                    });
                                }
                            });
                        }
                    });
                },
                getDate: function() {
                    var e = new Date(), n = (e.getFullYear(), e.getMonth() + 1), t = e.getDate(), o = e.getHours(), a = e.getMinutes(), r = (e.getSeconds(), 
                    n + "月" + t + "日"), u = [ o, a ].map(this.formatNumber).join(":");
                    console.log(r), console.log(u), this.setData({
                        date: r,
                        time: u
                    });
                },
                formatNumber: function(e) {
                    return (e = e.toString())[1] ? e : "0" + e;
                },
                adClick: function() {
                    this.vuex_user ? d && d.show().catch(function(e) {
                        d.load().then(function() {
                            return d.show();
                        });
                    }) : this.loginShow = !0;
                },
                adLoad: function() {
                    var e = this;
                    wx.createRewardedVideoAd && ((d = wx.createRewardedVideoAd({
                        adUnitId: n.vuex_awardAd
                    })).onError(function(e) {
                        console.log("videoAd onError", res);
                    }), d.onClose(function(n) {
                        e.downShow = !1, n && n.isEnded || void 0 === n ? e.vuex_user && e.userIntegral() : console.log("中途退出");
                    }));
                },
                userIntegral: function() {
                    var n = this;
                    return s(r.default.mark(function t() {
                        var a, u;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return a = n, e.showLoading({
                                    mask: !0,
                                    title: "正在拼命加载中..."
                                }), t.next = 4, o.callFunction({
                                    name: "user_integral",
                                    data: {
                                        userId: a.vuex_user._id
                                    }
                                });

                              case 4:
                                u = t.sent, e.hideLoading(), u.result.success && (a.getUser(), a.signTitle = "<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + u.result.integral + "</span>能量</p>", 
                                a.signShow = !0);

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getUser: function() {
                    var e = this;
                    return s(r.default.mark(function n() {
                        var t, a;
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t = e, n.next = 3, o.callFunction({
                                    name: "query_map",
                                    data: {
                                        dbName: "app_user",
                                        id: t.vuex_user._id
                                    }
                                });

                              case 3:
                                a = n.sent, t.$u.vuex("vuex_user", a.result);

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                getUserInfo: function() {
                    var n = this;
                    e.getUserProfile({
                        desc: "个人登录，记录数据",
                        success: function(e) {
                            console.log(e), n.name = e.userInfo.nickName, n.avatar = e.userInfo.avatarUrl, n.wxlogin();
                        },
                        fail: function() {
                            console.log("获取用户信息失败");
                        }
                    });
                },
                wxlogin: function() {
                    var n = this;
                    return s(r.default.mark(function t() {
                        var o;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o = n, e.showLoading({
                                    title: "登录中..."
                                }), e.login({
                                    provider: "weixin",
                                    success: function(e) {
                                        var n = e.code;
                                        o.wxloginres(n);
                                    }
                                });

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                wxloginres: function(n) {
                    var t = this;
                    return s(r.default.mark(function a() {
                        var u, i, s;
                        return r.default.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return u = t, i = e.getStorageSync("userId"), "wx", a.next = 5, o.callFunction({
                                    name: "user_authorize",
                                    data: {
                                        name: u.name,
                                        avatar: u.avatar,
                                        mptype: "wx",
                                        code: n,
                                        userId: i
                                    }
                                });

                              case 5:
                                (s = a.sent).result.success ? (u.$u.vuex("vuex_user", s.result.data), e.showToast({
                                    icon: "none",
                                    mask: !0,
                                    title: "登录成功",
                                    duration: 1500
                                }), e.removeStorageSync("userId")) : e.showToast({
                                    icon: "none",
                                    mask: !0,
                                    title: s.result.msg,
                                    duration: 1500
                                }), u.loginShow = !1;

                              case 8:
                              case "end":
                                return a.stop();
                            }
                        }, a);
                    }))();
                }
            }), a);
            n.default = l;
        }).call(this, t("543d").default, t("a9ff").default);
    },
    f997: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {
            return o;
        });
        var o = {
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
            }
        }, a = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(n) {
                e.loginShow = !1;
            }, e.e1 = function(n) {
                e.downShow = !1;
            }, e.e2 = function(n) {
                e.signShow = !1;
            }, e.e3 = function(n) {
                e.adShow = !1;
            }, e.e4 = function(n) {
                e.adShow = !1;
            });
        }, r = [];
    },
    ff0d: function(e, n, t) {
        t.r(n);
        var o = t("e06a"), a = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        n.default = a.a;
    }
}, [ [ "32b2", "common/runtime", "common/vendor" ] ] ]);