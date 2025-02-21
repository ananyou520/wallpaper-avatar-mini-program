(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/integral/task" ], {
    "308f": function(e, n, t) {},
    "4fd2": function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), r(t("66fd"));
            var n = r(t("a814"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    "501c": function(e, n, t) {
        t.r(n);
        var r = t("71d5"), a = t.n(r);
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        n.default = a.a;
    },
    "71d5": function(e, n, t) {
        (function(e, r) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function u(e, n, t, r, a, u, i) {
                try {
                    var o = e[u](i), s = o.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                o.done ? n(s) : Promise.resolve(s).then(r, a);
            }
            function i(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(r, a) {
                        var i = e.apply(n, t);
                        function o(e) {
                            u(i, r, a, o, s, "next", e);
                        }
                        function s(e) {
                            u(i, r, a, o, s, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        userIntegral: 0,
                        signIntegral: 0,
                        inviteIntegral: 0,
                        adIntegral: 0,
                        chargeShow: !1,
                        cashShow: !1,
                        loadShow: !0
                    };
                },
                onLoad: function() {
                    var e = this;
                    return i(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, e.getConfig();

                              case 2:
                                e.loadShow = !1;

                              case 3:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                onShow: function() {
                    var e = this;
                    return i(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                e.getUser();

                              case 1:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: function(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e;
                }({
                    getUser: function() {
                        var n = this;
                        return i(a.default.mark(function t() {
                            var r, u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return r = n, t.next = 3, e.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_user",
                                            id: r.vuex_user._id
                                        }
                                    });

                                  case 3:
                                    u = t.sent, r.userIntegral = u.result.integral;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getConfig: function() {
                        var n = this;
                        return i(a.default.mark(function t() {
                            var r, u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return r = n, u = {}, t.next = 4, e.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "signIntegral", "inviteIntegral", "adIntegral", "chargeShow", "adUnitId" ]
                                        }
                                    });

                                  case 4:
                                    (u = t.sent).result.success && (r.signIntegral = parseInt(u.result.data[0]), r.inviteIntegral = parseInt(u.result.data[1]), 
                                    r.adIntegral = parseInt(u.result.data[2]), r.chargeShow = u.result.data[3], r.adUnitId = u.result.data[4]);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    signClick: function() {
                        var n = this;
                        return i(a.default.mark(function t() {
                            var u, i;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ((u = n).vuex_user) {
                                        t.next = 4;
                                        break;
                                    }
                                    return u.loginShow = !0, t.abrupt("return");

                                  case 4:
                                    if (!u.isSign) {
                                        t.next = 6;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 6:
                                    return r.showLoading({
                                        mask: !0,
                                        title: "签到中..."
                                    }), t.next = 9, e.callFunction({
                                        name: "sign_add",
                                        data: {
                                            userId: u.vuex_user._id
                                        }
                                    });

                                  case 9:
                                    i = t.sent, r.hideLoading(), i.result.success ? (u.getUser(), u.signTitle = "<p style='font-weight: 550;font-size: 16px;'>签到成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + i.result.integral + "</span>能量</p>", 
                                    u.signShow = !0, u.isSign = !0) : r.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: i.result.msg,
                                        duration: 1500
                                    });

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    adClick: function() {
                        this.vuex_user ? videoAd && videoAd.show().catch(function(e) {
                            videoAd.load().then(function() {
                                return videoAd.show();
                            });
                        }) : this.loginShow = !0;
                    },
                    adLoad: function() {
                        var e = this;
                        wx.createRewardedVideoAd && (videoAd = wx.createRewardedVideoAd({
                            adUnitId: n.vuex_awardAd
                        }), videoAd.onError(function(e) {
                            console.log("videoAd onError", e);
                        }), videoAd.onClose(function(n) {
                            n && n.isEnded || void 0 === n ? e.vuex_user && e.userIntegral() : console.log("中途退出");
                        }));
                    },
                    charge: function() {
                        r.navigateTo({
                            url: "/pages/user/integral/charge"
                        });
                    },
                    cash: function() {
                        r.navigateTo({
                            url: "/pages/user/integral/cash"
                        });
                    }
                }, "adClick", function() {
                    var e = null;
                    wx.createRewardedVideoAd && ((e = wx.createRewardedVideoAd({
                        adUnitId: this.adUnitId
                    })).onError(function(e) {
                        console.log("videoAd onError", res);
                    }), e.onClose(function(e) {
                        e && e.isEnded;
                    }));
                }),
                onShareAppMessage: function(e) {
                    return {
                        title: "我等风也等你，近听水无声~",
                        path: "/pages/index/index?userId=" + this.vuex_user._id
                    };
                }
            };
            n.default = o;
        }).call(this, t("a9ff").default, t("543d").default);
    },
    "75fe": function(e, n, t) {
        var r = t("308f");
        t.n(r).a;
    },
    a814: function(e, n, t) {
        t.r(n);
        var r = t("f225"), a = t("501c");
        for (var u in a) "default" !== u && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(u);
        t("75fe");
        var i = t("f0c5"), o = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = o.exports;
    },
    f225: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return u;
        }), t.d(n, "a", function() {
            return r;
        });
        var r = {
            uNavbar: function() {
                return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null, "8954"));
            },
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    }
}, [ [ "4fd2", "common/runtime", "common/vendor" ] ] ]);