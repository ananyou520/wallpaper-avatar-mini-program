(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/find/photo/photo" ], {
    "11a3": function(n, e, t) {
        t.r(e);
        var o = t("a8c9"), a = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    "2e83": function(n, e, t) {
        t.r(e);
        var o = t("5748"), a = t("11a3");
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("8847");
        var u = t("f0c5"), s = Object(u.a)(a.default, o.b, o.c, !1, null, "5c6eb4fa", null, !1, o.a, void 0);
        e.default = s.exports;
    },
    5748: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
            }
        }, a = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(e) {
                n.loginShow = !1;
            }, n.e1 = function(e) {
                n.downShow = !1;
            }, n.e2 = function(e) {
                n.signShow = !1;
            }, n.e3 = function(e) {
                n.adShow = !1;
            }, n.e4 = function(e) {
                n.adShow = !1;
            });
        }, c = [];
    },
    8847: function(n, e, t) {
        var o = t("985b");
        t.n(o).a;
    },
    "985b": function(n, e, t) {},
    a457: function(n, e, t) {
        (function(n) {
            t("1073"), t("a9ff"), o(t("66fd"));
            var e = o(t("2e83"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    a8c9: function(n, e, t) {
        (function(n, o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("a34a"));
            function c(n, e, t, o, a, c, u) {
                try {
                    var s = n[c](u), i = s.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                s.done ? e(i) : Promise.resolve(i).then(o, a);
            }
            function u(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(o, a) {
                        var u = n.apply(e, t);
                        function s(n) {
                            c(u, o, a, s, i, "next", n);
                        }
                        function i(n) {
                            c(u, o, a, s, i, "throw", n);
                        }
                        s(void 0);
                    });
                };
            }
            var s = null, i = {
                data: function() {
                    return {
                        loadFlag: !0,
                        loginShow: !1,
                        adIntegral: 0,
                        downShow: !1,
                        downIntegral: 0,
                        downTitle: "",
                        adShow: !1,
                        signShow: !1,
                        signTitle: "",
                        cssTran: !1,
                        src: null,
                        item: null,
                        gglist: []
                    };
                },
                components: {
                    models: function() {
                        t.e("components/model/model").then(function() {
                            return resolve(t("37f2"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                props: {},
                onLoad: function(n) {
                    var e = this;
                    return u(a.default.mark(function t() {
                        var o, c, u;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return o = e, null != (c = n.src) && e.setData({
                                    src: decodeURIComponent(c)
                                }), null != n.item && (u = JSON.parse(n.item), e.setData({
                                    item: u
                                })), t.next = 5, o.getConfig();

                              case 5:
                                o.loadFlag = !1, o.adLoad();

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {
                    var n = null != this.src ? {
                        title: "你觉得这个头像怎么样？",
                        path: "/pages/photo/photo?src=" + encodeURIComponent(this.src),
                        imageUrl: this.src
                    } : null != this.item ? {
                        title: "【" + this.item.name + "】" + this.item.memo,
                        path: "/pages/photo/photo?item=" + JSON.stringify(this.item)
                    } : void 0;
                    return console.log(n), n;
                },
                methods: {
                    getConfig: function() {
                        var e = this;
                        return u(a.default.mark(function t() {
                            var o, c;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return o = e, t.next = 3, n.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "downIntegral", "adIntegral" ]
                                        }
                                    });

                                  case 3:
                                    (c = t.sent).result.success && (o.downIntegral = parseInt(c.result.data[0]), o.adIntegral = parseInt(c.result.data[1]));

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    fh: function() {
                        o.navigateBack();
                    },
                    backClick: function() {
                        o.navigateBack();
                    },
                    winClick: function() {
                        var e = this;
                        return u(a.default.mark(function t() {
                            var c, u, s;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ((c = e).vuex_user) {
                                        t.next = 4;
                                        break;
                                    }
                                    return c.loginShow = !0, t.abrupt("return");

                                  case 4:
                                    if (!(c.downIntegral > 0)) {
                                        t.next = 18;
                                        break;
                                    }
                                    if (!((u = c.vuex_user.integral) < c.downIntegral)) {
                                        t.next = 10;
                                        break;
                                    }
                                    return c.downShow = !0, c.downTitle = "<p style='font-weight: 550;font-size: 16px;'>下载需要 " + c.downIntegral + " 能量</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>" + u + "</span>能量，无法下载当前作品，快去赚能量吧~</p>", 
                                    t.abrupt("return");

                                  case 10:
                                    return o.showLoading({
                                        mask: !0,
                                        title: "保存中..."
                                    }), t.next = 13, n.callFunction({
                                        name: "place_other",
                                        data: {
                                            userId: c.vuex_user._id
                                        }
                                    });

                                  case 13:
                                    s = t.sent, console.log("query", s), s.result.success ? (c.getUser(), c.saveImg()) : o.showToast({
                                        mask: !0,
                                        icon: "none",
                                        title: s.result.msg,
                                        duration: 1e3
                                    }), t.next = 19;
                                    break;

                                  case 18:
                                    c.saveImg();

                                  case 19:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    saveImg: function() {
                        var n = this, e = n.item ? n.item.avatar : null, t = n.item ? n.item.card : null, a = n.src;
                        console.log(e, t, a), null != e && (e = e.replace("http", "https")), null != t && (t = t.replace("http", "https")), 
                        null != a && (a = a.replace("http", "https")), o.getSetting({
                            success: function(c) {
                                c.authSetting["scope.writePhotosAlbum"] ? (null != e && null != t && (o.getImageInfo({
                                    src: e,
                                    success: function(e) {
                                        o.saveImageToPhotosAlbum({
                                            filePath: e.path,
                                            success: function(e) {
                                                n.adShow = !0, o.showToast({
                                                    title: "下载成功",
                                                    icon: "success",
                                                    image: "",
                                                    duration: 1e3,
                                                    mask: !0,
                                                    success: function(n) {},
                                                    fail: function(n) {},
                                                    complete: function(n) {}
                                                });
                                            },
                                            fail: function(n) {},
                                            complete: function(n) {}
                                        });
                                    },
                                    fail: function(n) {},
                                    complete: function(n) {}
                                }), o.getImageInfo({
                                    src: t,
                                    success: function(e) {
                                        o.saveImageToPhotosAlbum({
                                            filePath: e.path,
                                            success: function(e) {
                                                n.adShow = !0, o.showToast({
                                                    title: "下载成功",
                                                    icon: "success",
                                                    image: "",
                                                    duration: 1e3,
                                                    mask: !0,
                                                    success: function(n) {},
                                                    fail: function(n) {},
                                                    complete: function(n) {}
                                                });
                                            },
                                            fail: function(n) {},
                                            complete: function(n) {}
                                        });
                                    },
                                    fail: function(n) {},
                                    complete: function(n) {}
                                })), null != a && o.getImageInfo({
                                    src: a,
                                    success: function(e) {
                                        o.saveImageToPhotosAlbum({
                                            filePath: e.path,
                                            success: function(e) {
                                                n.adShow = !0, o.showToast({
                                                    title: "下载成功",
                                                    icon: "success",
                                                    image: "",
                                                    duration: 1e3,
                                                    mask: !0,
                                                    success: function(n) {},
                                                    fail: function(n) {},
                                                    complete: function(n) {}
                                                });
                                            },
                                            fail: function(n) {},
                                            complete: function(n) {}
                                        });
                                    },
                                    fail: function(n) {},
                                    complete: function(n) {}
                                })) : o.authorize({
                                    scope: "scope.writePhotosAlbum",
                                    success: function() {
                                        null != e && null != t && (o.getImageInfo({
                                            src: e,
                                            success: function(e) {
                                                o.saveImageToPhotosAlbum({
                                                    filePath: e.path,
                                                    success: function(e) {
                                                        n.adShow = !0, o.showToast({
                                                            title: "下载成功",
                                                            icon: "success",
                                                            image: "",
                                                            duration: 1e3,
                                                            mask: !0,
                                                            success: function(n) {},
                                                            fail: function(n) {},
                                                            complete: function(n) {}
                                                        });
                                                    },
                                                    fail: function(n) {},
                                                    complete: function(n) {}
                                                });
                                            },
                                            fail: function(n) {},
                                            complete: function(n) {}
                                        }), o.getImageInfo({
                                            src: t,
                                            success: function(e) {
                                                o.saveImageToPhotosAlbum({
                                                    filePath: e.path,
                                                    success: function(e) {
                                                        n.adShow = !0, o.showToast({
                                                            title: "下载成功",
                                                            icon: "success",
                                                            image: "",
                                                            duration: 1e3,
                                                            mask: !0,
                                                            success: function(n) {},
                                                            fail: function(n) {},
                                                            complete: function(n) {}
                                                        });
                                                    },
                                                    fail: function(n) {},
                                                    complete: function(n) {}
                                                });
                                            },
                                            fail: function(n) {},
                                            complete: function(n) {}
                                        })), null != a && o.getImageInfo({
                                            src: a,
                                            success: function(e) {
                                                o.saveImageToPhotosAlbum({
                                                    filePath: e.path,
                                                    success: function(e) {
                                                        n.adShow = !0, o.showToast({
                                                            title: "下载成功",
                                                            icon: "success",
                                                            image: "",
                                                            duration: 1e3,
                                                            mask: !0,
                                                            success: function(n) {},
                                                            fail: function(n) {},
                                                            complete: function(n) {}
                                                        });
                                                    },
                                                    fail: function(n) {},
                                                    complete: function(n) {}
                                                });
                                            },
                                            fail: function(n) {},
                                            complete: function(n) {}
                                        });
                                    },
                                    fail: function() {
                                        o.showModal({
                                            title: "未授权",
                                            content: "请授权",
                                            showCancel: !0,
                                            cancelText: "取消",
                                            cancelColor: "",
                                            confirmText: "确定",
                                            confirmColor: "",
                                            success: function(n) {},
                                            fail: function(n) {},
                                            complete: function(n) {}
                                        });
                                    }
                                });
                            }
                        });
                    },
                    adClick: function() {
                        this.vuex_user ? s && s.show().catch(function(n) {
                            s.load().then(function() {
                                return s.show();
                            });
                        }) : this.loginShow = !0;
                    },
                    adLoad: function() {
                        var n = this;
                        wx.createRewardedVideoAd && ((s = wx.createRewardedVideoAd({
                            adUnitId: n.vuex_awardAd
                        })).onError(function(n) {
                            console.log("videoAd onError", res);
                        }), s.onClose(function(e) {
                            n.downShow = !1, e && e.isEnded || void 0 === e ? n.vuex_user && n.userIntegral() : console.log("中途退出");
                        }));
                    },
                    userIntegral: function() {
                        var e = this;
                        return u(a.default.mark(function t() {
                            var c, u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return c = e, o.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), t.next = 4, n.callFunction({
                                        name: "user_integral",
                                        data: {
                                            userId: c.vuex_user._id
                                        }
                                    });

                                  case 4:
                                    u = t.sent, o.hideLoading(), u.result.success && (c.getUser(), c.signTitle = "<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + u.result.integral + "</span>能量</p>", 
                                    c.signShow = !0);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getUser: function() {
                        var e = this;
                        return u(a.default.mark(function t() {
                            var o, c;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return o = e, t.next = 3, n.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_user",
                                            id: o.vuex_user._id
                                        }
                                    });

                                  case 3:
                                    c = t.sent, o.$u.vuex("vuex_user", c.result);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getUserInfo: function() {
                        var n = this;
                        o.getUserProfile({
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
                        return u(a.default.mark(function e() {
                            var t;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t = n, o.showLoading({
                                        title: "登录中..."
                                    }), o.login({
                                        provider: "weixin",
                                        success: function(n) {
                                            var e = n.code;
                                            t.wxloginres(e);
                                        }
                                    });

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    wxloginres: function(e) {
                        var t = this;
                        return u(a.default.mark(function c() {
                            var u, s, i;
                            return a.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return u = t, s = o.getStorageSync("userId"), "wx", a.next = 5, n.callFunction({
                                        name: "user_authorize",
                                        data: {
                                            name: u.name,
                                            avatar: u.avatar,
                                            mptype: "wx",
                                            code: e,
                                            userId: s
                                        }
                                    });

                                  case 5:
                                    (i = a.sent).result.success ? (u.$u.vuex("vuex_user", i.result.data), o.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: "登录成功",
                                        duration: 1500
                                    }), o.removeStorageSync("userId")) : o.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: i.result.msg,
                                        duration: 1500
                                    }), u.loginShow = !1;

                                  case 8:
                                  case "end":
                                    return a.stop();
                                }
                            }, c);
                        }))();
                    },
                    copy: function(n) {
                        o.setClipboardData({
                            data: n,
                            success: function(n) {
                                o.showToast({
                                    title: "复制完成",
                                    icon: "success",
                                    image: "",
                                    duration: 1e3,
                                    mask: !0,
                                    success: function(n) {},
                                    fail: function(n) {},
                                    complete: function(n) {}
                                });
                            },
                            fail: function(n) {},
                            complete: function(n) {}
                        });
                    }
                }
            };
            e.default = i;
        }).call(this, t("a9ff").default, t("543d").default);
    }
}, [ [ "a457", "common/runtime", "common/vendor" ] ] ]);