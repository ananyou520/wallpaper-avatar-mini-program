(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesB/detail/qwdetail" ], {
    "839b": function(e, n, t) {
        var a = t("cba9");
        t.n(a).a;
    },
    "97db": function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), a(t("66fd"));
            var n = a(t("f057"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    bd32: function(e, n, t) {
        t.r(n);
        var a = t("c368"), r = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = r.a;
    },
    c368: function(e, n, t) {
        (function(e, a) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function o(e, n, t, a, r, o, u) {
                try {
                    var i = e[o](u), s = i.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                i.done ? n(s) : Promise.resolve(s).then(a, r);
            }
            function u(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(a, r) {
                        var u = e.apply(n, t);
                        function i(e) {
                            o(u, a, r, i, s, "next", e);
                        }
                        function s(e) {
                            o(u, a, r, i, s, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var i, s = null, c = e.getSystemInfoSync().windowWidth, d = e.getSystemInfoSync().windowHeight;
            i = e.getMenuButtonBoundingClientRect();
            var l = {
                components: {
                    models: function() {
                        t.e("components/model/model").then(function() {
                            return resolve(t("37f2"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        menuButtonInfo: i,
                        loadFlag: !0,
                        loginShow: !1,
                        detail: {},
                        time: "",
                        date: "",
                        adIntegral: 0,
                        downShow: !1,
                        downIntegral: 0,
                        downTitle: "",
                        downBtn: "",
                        adShow: !1,
                        cssTran: !1,
                        indexCurrent: 1,
                        activeCurrent: 0,
                        signShow: !1,
                        signTitle: "",
                        w: c,
                        h: d
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    return u(r.default.mark(function t() {
                        var a, o, u;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return a = e.detail, o = e.index, u = n, t.next = 4, u.getDate();

                              case 4:
                                return u.indexCurrent = parseInt(o) + 1, u.activeCurrent = parseInt(o), a && (u.detail = JSON.parse(a)), 
                                u.loadFlag = !1, u.vuex_user && u.getUser(), t.next = 11, u.getConfig();

                              case 11:
                                u.adLoad();

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    getDate: function() {
                        var e = this;
                        return u(r.default.mark(function n() {
                            var t, a, o, u, i, s, c;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    (t = new Date()).getFullYear(), a = t.getMonth() + 1, o = t.getDate(), u = t.getHours(), 
                                    i = t.getMinutes(), t.getSeconds(), s = a + "月" + o + "日", c = [ u, i ].map(e.formatNumber).join(":"), 
                                    console.log(s), console.log(c), e.setData({
                                        date: s,
                                        time: c
                                    });

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    formatNumber: function(e) {
                        return (e = e.toString())[1] ? e : "0" + e;
                    },
                    getConfig: function() {
                        var e = this;
                        return u(r.default.mark(function n() {
                            var t, o;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, a.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "downIntegral", "adIntegral" ]
                                        }
                                    });

                                  case 3:
                                    (o = n.sent).result.success && (t.downIntegral = parseInt(o.result.data[0]), t.adIntegral = parseInt(o.result.data[1]));

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    winClick: function() {
                        var n = this;
                        return u(r.default.mark(function t() {
                            var o, u, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ((o = n).vuex_user) {
                                        t.next = 4;
                                        break;
                                    }
                                    return o.loginShow = !0, t.abrupt("return");

                                  case 4:
                                    if (!(o.downIntegral > 0)) {
                                        t.next = 18;
                                        break;
                                    }
                                    if (!((u = o.vuex_user.integral) < o.downIntegral)) {
                                        t.next = 10;
                                        break;
                                    }
                                    return o.downShow = !0, o.downTitle = "<p style='font-weight: 550;font-size: 16px;'>下载需要 " + o.downIntegral + " 能量</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>" + u + "</span>能量，无法下载当前作品，快去赚能量吧~</p>", 
                                    t.abrupt("return");

                                  case 10:
                                    return e.showLoading({
                                        mask: !0,
                                        title: "保存中..."
                                    }), t.next = 13, a.callFunction({
                                        name: "place_other",
                                        data: {
                                            userId: o.vuex_user._id
                                        }
                                    });

                                  case 13:
                                    i = t.sent, console.log("query", i), i.result.success ? (o.getUser(), o.downloadTap()) : e.showToast({
                                        mask: !0,
                                        icon: "none",
                                        title: i.result.msg,
                                        duration: 1e3
                                    }), t.next = 19;
                                    break;

                                  case 18:
                                    o.downloadTap();

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
                                            content: "您未授予我们使用相册的权限，无法保存，请前往允许使用相册",
                                            confirmText: "去允许",
                                            confirmColor: "red",
                                            success: function(n) {
                                                n.confirm && e.openSetting({});
                                            }
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
                            url: n.detail.image_group[n.indexCurrent - 1].img_url.replace("http", "https").replace("_home-image-1080", ""),
                            success: function(t) {
                                200 === t.statusCode && e.saveImageToPhotosAlbum({
                                    filePath: t.tempFilePath,
                                    success: function(t) {
                                        e.hideLoading(), n.adShow = !0;
                                    },
                                    fail: function(n) {
                                        e.hideLoading();
                                    }
                                });
                            }
                        });
                    },
                    backClick: function() {
                        e.navigateBack();
                    },
                    homeClick: function() {
                        e.switchTab({
                            url: "/pages/index/index"
                        });
                    },
                    cssClick: function() {
                        this.cssTran = !this.cssTran;
                    },
                    swiperChange: function(e) {
                        this.indexCurrent = e.detail.current + 1;
                    },
                    addView: function(e) {
                        return u(r.default.mark(function n() {
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, a.callFunction({
                                        name: "view_raise",
                                        data: {
                                            coverId: e
                                        }
                                    });

                                  case 2:
                                    n.sent;

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    adClick: function() {
                        this.vuex_user ? s && s.show().catch(function(e) {
                            s.load().then(function() {
                                return s.show();
                            });
                        }) : this.loginShow = !0;
                    },
                    adLoad: function() {
                        var e = this;
                        wx.createRewardedVideoAd && ((s = wx.createRewardedVideoAd({
                            adUnitId: n.vuex_awardAd
                        })).onError(function(e) {
                            console.log("videoAd onError", res);
                        }), s.onClose(function(n) {
                            e.downShow = !1, n && n.isEnded || void 0 === n ? e.vuex_user && e.userIntegral() : console.log("中途退出");
                        }));
                    },
                    userIntegral: function() {
                        var n = this;
                        return u(r.default.mark(function t() {
                            var o, u;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return o = n, e.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), t.next = 4, a.callFunction({
                                        name: "user_integral",
                                        data: {
                                            userId: o.vuex_user._id
                                        }
                                    });

                                  case 4:
                                    u = t.sent, e.hideLoading(), u.result.success && (o.getUser(), o.signTitle = "<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + u.result.integral + "</span>能量</p>", 
                                    o.signShow = !0);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getUser: function() {
                        var e = this;
                        return u(r.default.mark(function n() {
                            var t, o;
                            return r.default.wrap(function(n) {
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
                                    o = n.sent, t.$u.vuex("vuex_user", o.result);

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
                        return u(r.default.mark(function t() {
                            var a;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    a = n, e.showLoading({
                                        title: "登录中..."
                                    }), e.login({
                                        provider: "weixin",
                                        success: function(e) {
                                            var n = e.code;
                                            a.wxloginres(n);
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
                        return u(r.default.mark(function o() {
                            var u, i, s;
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return u = t, i = e.getStorageSync("userId"), "wx", r.next = 5, a.callFunction({
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
                                    (s = r.sent).result.success ? (u.$u.vuex("vuex_user", s.result.data), e.showToast({
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
                                    return r.stop();
                                }
                            }, o);
                        }))();
                    }
                },
                onShareAppMessage: function(e) {
                    var n = this;
                    return setTimeout(function() {
                        n.adShow = !1;
                    }, 2e3), {
                        title: "送你一张超级好看的壁纸~",
                        imageUrl: n.detail.image_group[n.indexCurrent - 1].img_url,
                        path: "/pages/index/index?userId=" + n.vuex_user._id + "&detailId=" + n.detail._id + "&index=" + (n.indexCurrent - 1)
                    };
                },
                onShareTimeline: function(e) {
                    return {
                        title: "表，我的聊天背景都是在这找的~",
                        path: "/pages/index/index",
                        imageUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ed8ec0e-de90-4ed2-8830-c36512ae8fc0/793331ab-9a2a-4236-a7d4-1d19bdff6ae8.png"
                    };
                }
            };
            n.default = l;
        }).call(this, t("543d").default, t("a9ff").default);
    },
    cba9: function(e, n, t) {},
    d0b4: function(e, n, t) {
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {
            return a;
        });
        var a = {
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
            }
        }, r = function() {
            var e = this, n = (e.$createElement, e._self._c, e.$u.timeFormat(e.detail.time, "yyyy年mm月dd日"));
            e._isMounted || (e.e0 = function(n) {
                e.loginShow = !1;
            }, e.e1 = function(n) {
                e.downShow = !1;
            }, e.e2 = function(n) {
                e.signShow = !1;
            }, e.e3 = function(n) {
                e.adShow = !1;
            }, e.e4 = function(n) {
                e.adShow = !1;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    g0: n
                }
            });
        }, o = [];
    },
    f057: function(e, n, t) {
        t.r(n);
        var a = t("d0b4"), r = t("bd32");
        for (var o in r) "default" !== o && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(o);
        t("839b");
        var u = t("f0c5"), i = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = i.exports;
    }
}, [ [ "97db", "common/runtime", "common/vendor" ] ] ]);