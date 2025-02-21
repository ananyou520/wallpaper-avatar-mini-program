(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/user" ], {
    "07b3": function(e, n, t) {
        (function(e, r) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function i(e, n, t, r, a, i, u) {
                try {
                    var o = e[i](u), s = o.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                o.done ? n(s) : Promise.resolve(s).then(r, a);
            }
            function u(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(r, a) {
                        var u = e.apply(n, t);
                        function o(e) {
                            i(u, r, a, o, s, "next", e);
                        }
                        function s(e) {
                            i(u, r, a, o, s, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o, s = null;
            o = e.getMenuButtonBoundingClientRect();
            var c = {
                components: {
                    fooBar: function() {
                        t.e("components/fooBar/fooBar").then(function() {
                            return resolve(t("795e"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    models: function() {
                        t.e("components/model/model").then(function() {
                            return resolve(t("37f2"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        menuButtonInfo: o,
                        loadShow: !0,
                        isSign: !1,
                        signShow: !1,
                        signTitle: "",
                        signIntegral: 0,
                        inviteIntegral: 0,
                        adIntegral: 0,
                        writeShow: !1,
                        wxCheck: !1,
                        wxNotice: !1,
                        loginShow: !1
                    };
                },
                onLoad: function() {
                    var n = this;
                    return u(a.default.mark(function t() {
                        var r;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e.hideTabBar(), r = n, t.next = 4, r.getConfig();

                              case 4:
                                r.vuex_user && r.getUser(), r.loadShow = !1, r.adLoad();

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onShow: function() {
                    var e = this;
                    return u(a.default.mark(function n() {
                        var t;
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                (t = e).vuex_user && t.getSign();

                              case 2:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    toIndex: function(n) {
                        var t = this;
                        return u(a.default.mark(function r() {
                            return a.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    t.index = n, 0 == n ? e.switchTab({
                                        url: "/pages/index/index"
                                    }) : 1 == n ? e.switchTab({
                                        url: "/pages/center/center"
                                    }) : 2 == n && e.switchTab({
                                        url: "/pages/find/find"
                                    });

                                  case 3:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    loginClick: function() {
                        this.vuex_user ? e.navigateTo({
                            url: "/pages/user/userinfo/userinfo"
                        }) : this.loginShow = !0;
                    },
                    signClick: function() {
                        var n = this;
                        return u(a.default.mark(function t() {
                            var i, u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ((i = n).vuex_user) {
                                        t.next = 4;
                                        break;
                                    }
                                    return i.loginShow = !0, t.abrupt("return");

                                  case 4:
                                    if (!i.isSign) {
                                        t.next = 6;
                                        break;
                                    }
                                    return e.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: "今日已签到",
                                        duration: 1500
                                      }), t.abrupt("return");

                                  case 6:
                                    return e.showLoading({
                                        mask: !0,
                                        title: "签到中..."
                                    }), t.next = 9, r.callFunction({
                                        name: "sign_add",
                                        data: {
                                            userId: i.vuex_user._id
                                        }
                                    });

                                  case 9:
                                    u = t.sent, e.hideLoading(), u.result.success ? (i.getUser(), i.signTitle = "<p style='font-weight: 550;font-size: 16px;'>签到成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + u.result.integral + "</span>能量</p>", 
                                    i.signShow = !0, i.isSign = !0) : e.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: u.result.msg,
                                        duration: 1500
                                    });

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    recordClick: function() {
                        this.vuex_user ? e.navigateTo({
                            url: "/pages/user/integral/record"
                        }) : this.loginShow = !0;
                    },
                    gonggaoClick: function() {
                        e.navigateTo({
                            url: "/pages/user/about/notice"
                        });
                    },
                    gzhClick: function() {
                        e.navigateTo({
                            url: "/pages/user/about/agreement"
                        });
                    },
                    taskClick: function() {
                        this.vuex_user ? e.navigateTo({
                            url: "/pages/user/integral/task"
                        }) : this.loginShow = !0;
                    },
                    paihangClick: function() {
                        this.vuex_user ? e.navigateTo({
                            url: "/pagesA/list/list?type=ranking&pid=&id=hot"
                        }) : this.loginShow = !0;
                    },
                    modelSave: function() {
                        this.vuex_user ? this.modelShow = !1 : this.loginShow = !0;
                    },
                    collectClick: function() {
                        this.vuex_user ? e.navigateTo({
                            url: "/pages/user/order/collect"
                        }) : this.loginShow = !0;
                    },
                    orderClick: function() {
                        this.vuex_user ? e.navigateTo({
                            url: "/pages/user/order/order"
                        }) : this.loginShow = !0;
                    },
                    writeClick: function() {
                        this.vuex_user ? e.navigateTo({
                            url: "/pages/user/write/write"
                        }) : this.loginShow = !0;
                    },
                    exitClick: function() {
                        var n = this;
                        e.showModal({
                            title: "温馨提示",
                            content: "确定退出当前登录账户？",
                            confirmText: "退出",
                            confirmColor: "#ff0000",
                            success: function() {
                                var e = u(a.default.mark(function e(t) {
                                    return a.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            t.confirm && (n.$u.vuex("vuex_user", ""), n.isSign = !1);

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                return function(n) {
                                    return e.apply(this, arguments);
                                };
                            }()
                        });
                    },
                    cacheClick: function() {
                        var n = this;
                        e.showModal({
                            title: "温馨提示",
                            content: "清除缓存后请重新登录！",
                            confirmText: "确定",
                            confirmColor: "#ff0000",
                            success: function() {
                                var e = u(a.default.mark(function e(t) {
                                    return a.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            t.confirm && (n.$u.vuex("vuex_user", ""), n.isSign = !1);

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                return function(n) {
                                    return e.apply(this, arguments);
                                };
                            }()
                        });
                    },
                    aboutClick: function() {
                        e.navigateTo({
                            url: "/pages/user/about/about"
                        });
                    },
                    feedClick: function() {
                        this.vuex_user ? e.navigateTo({
                            url: "/pages/user/about/feed"
                        }) : this.loginShow = !0;
                    },
                    systemClick: function() {
                        e.navigateTo({
                            url: "/pagesA/system/system"
                        });
                    },
                    webClick: function() {
                        e.navigateTo({
                            url: "/pages/user/about/agreement"
                        });
                    },
                 
                    getUser: function() {
                        var e = this;
                        return u(a.default.mark(function n() {
                            var t, i;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, r.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_user",
                                            id: t.vuex_user._id
                                        }
                                    });

                                  case 3:
                                    i = n.sent, t.$u.vuex("vuex_user", i.result);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getSign: function() {
                        var e = this;
                        return u(a.default.mark(function n() {
                            var t, i, u;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, i = new Date(new Date().toLocaleDateString()).getTime(), u = new Date(new Date().toLocaleDateString()).getTime() + 864e5 - 1, 
                                    n.next = 5, r.callFunction({
                                        name: "sign_flag",
                                        data: {
                                            dbName: "app_sign",
                                            userId: t.vuex_user._id,
                                            startTime: i,
                                            endTime: u
                                        }
                                    });

                                  case 5:
                                    n.sent.result.success ? t.isSign = !0 : t.isSign = !1;

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getConfig: function() {
                        var e = this;
                        return u(a.default.mark(function n() {
                            var t, i;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, r.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "signIntegral", "inviteIntegral", "adIntegral", "writeShow", "wxCheck", "wxNotice" ]
                                        }
                                    });

                                  case 3:
                                    (i = n.sent).result.success && (t.signIntegral = parseInt(i.result.data[0]), t.inviteIntegral = parseInt(i.result.data[1]), 
                                    t.adIntegral = parseInt(i.result.data[2]), t.writeShow = i.result.data[3], t.wxCheck = i.result.data[4], 
                                    t.wxNotice = i.result.data[5]);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    addelete(){
                        wx.showModal({
                          title: '提示',
                          content: '看广告获得积分',
                          success (res) {
                            if (res.confirm) {
                              console.log('用户点击确定')
                            } else if (res.cancel) {
                              console.log('用户点击取消')
                            }
                          }
                        })
                    },
                    adClick: function() {
                        this.vuex_user ? s && s.show().catch(function(e) {
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
                        var n = this;
                        return u(a.default.mark(function t() {
                            var i, u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return i = n, e.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), t.next = 4, r.callFunction({
                                        name: "user_integral",
                                        data: {
                                            userId: i.vuex_user._id
                                        }
                                    });

                                  case 4:
                                    u = t.sent, e.hideLoading(), u.result.success && (i.getUser(), i.signTitle = "<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + u.result.integral + "</span>能量</p>", 
                                    i.signShow = !0);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
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
                        return u(a.default.mark(function t() {
                            var r;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    r = n, e.showLoading({
                                        title: "登录中..."
                                    }), e.login({
                                        provider: "weixin",
                                        success: function(e) {
                                            var n = e.code;
                                            r.wxloginres(n);
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
                        return u(a.default.mark(function i() {
                            var u, o, s;
                            return a.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return u = t, o = e.getStorageSync("userId"), "wx", a.next = 5, r.callFunction({
                                        name: "user_authorize",
                                        data: {
                                            name: u.name,
                                            avatar: u.avatar,
                                            mptype: "wx",
                                            code: n,
                                            userId: o
                                        }
                                    });

                                  case 5:
                                    if (!(s = a.sent).result.success) {
                                        a.next = 15;
                                        break;
                                    }
                                    return u.$u.vuex("vuex_user", s.result.data), u.getUser(), a.next = 11, u.getSign();

                                  case 11:
                                    e.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: "登录成功",
                                        duration: 1500
                                    }), e.removeStorageSync("userId"), a.next = 16;
                                    break;

                                  case 15:
                                    e.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: s.result.msg,
                                        duration: 1500
                                    });

                                  case 16:
                                    u.loginShow = !1;

                                  case 17:
                                  case "end":
                                    return a.stop();
                                }
                            }, i);
                        }))();
                    },
                    getLoginShow: function() {
                        this.loginShow = !0;
                    }
                },
                onShareAppMessage: function(e) {
                    return {
                        title: "我等风也等你，近听水无声~",
                        path: "/pages/index/index?userId=" + this.vuex_user._id
                    };
                },
                onShareTimeline: function(e) {
                    return {
                        title: "我等风也等你，近听水无声~",
                        path: "/pages/index/index"
                    };
                }
            };
            n.default = c;
        }).call(this, t("543d").default, t("a9ff").default);
    },
    "2aa5": function(e, n, t) {
        t.r(n);
        var r = t("c206"), a = t("fa38");
        for (var i in a) "default" !== i && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        t("fa51");
        var u = t("f0c5"), o = Object(u.a)(a.default, r.b, r.c, !1, null, "3cb1df36", null, !1, r.a, void 0);
        n.default = o.exports;
    },
    3815: function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), r(t("66fd"));
            var n = r(t("2aa5"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    ac91: function(e, n, t) {},
    c206: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return i;
        }), t.d(n, "a", function() {
            return r;
        });
        var r = {
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
            }
        }, a = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(n) {
                e.loginShow = !1;
            }, e.e1 = function(n) {
                e.signShow = !1;
            });
        }, i = [];
    },
    fa38: function(e, n, t) {
        t.r(n);
        var r = t("07b3"), a = t.n(r);
        for (var i in r) "default" !== i && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(i);
        n.default = a.a;
    },
    fa51: function(e, n, t) {
        var r = t("ac91");
        t.n(r).a;
    }
}, [ [ "3815", "common/runtime", "common/vendor" ] ] ]);