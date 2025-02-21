(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesB/detail/tpdetail" ], {
    "0567": function(e, n, t) {
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return u;
        }), t.d(n, "a", function() {
            return a;
        });
        var a = {
            uLoadmore: function() {
                return t.e("uview-ui/components/u-loadmore/u-loadmore").then(t.bind(null, "98b0"));
            },
            uIcon: function() {
                return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
            }
        }, r = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(n) {
                e.loginShow = !1;
            });
        }, u = [];
    },
    "0795": function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), a(t("66fd"));
            var n = a(t("4ec6"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    "134a": function(e, n, t) {
        t.r(n);
        var a = t("5d94"), r = t.n(a);
        for (var u in a) "default" !== u && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(u);
        n.default = r.a;
    },
    "441b": function(e, n, t) {},
    "4ec6": function(e, n, t) {
        t.r(n);
        var a = t("0567"), r = t("134a");
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        t("6abd");
        var i = t("f0c5"), o = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = o.exports;
    },
    "5d94": function(e, n, t) {
        (function(e, a) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function u(e, n, t, a, r, u, i) {
                try {
                    var o = e[u](i), s = o.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                o.done ? n(s) : Promise.resolve(s).then(a, r);
            }
            function i(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(a, r) {
                        var i = e.apply(n, t);
                        function o(e) {
                            u(i, a, r, o, s, "next", e);
                        }
                        function s(e) {
                            u(i, a, r, o, s, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = e.getSystemInfoSync().windowWidth, s = e.getSystemInfoSync().windowHeight, c = {
                components: {
                    models: function() {
                        t.e("components/model/model").then(function() {
                            return resolve(t("37f2"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        loadFlag: !0,
                        loginShow: !1,
                        wxCheck: !1,
                        dbname: "",
                        detail: {},
                        zan_length: "",
                        tags: {},
                        isZan: !1,
                        zanStatus: !0,
                        indexCurrent: 1,
                        activeCurrent: 0,
                        signShow: !1,
                        signTitle: "",
                        w: o,
                        h: s
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    return i(r.default.mark(function t() {
                        var a, u, i;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return a = e.id, u = n, t.next = 4, u.getConfig();

                              case 4:
                                if (0 == u.wxCheck ? u.dbname = "app_cover" : u.dbname = "app_gallery", !a) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 8, u.getDetail(a);

                              case 8:
                                u.loadFlag = !1, u.alldetail && (i = u.alldetail.tags.split(","), u.tags = i), u.vuex_user && (u.getIsZan(), 
                                u.getUser());

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    goDetail: function(n, t, a) {
                        var r = JSON.stringify(a);
                        e.navigateTo({
                            url: "/pagesB/detail/detail?id=" + n + "&index=" + t + "&images=" + r
                        });
                    },
                    formatNumber: function(e) {
                        return (e = e.toString())[1] ? e : "0" + e;
                    },
                    getDetail: function(n) {
                        var t = this;
                        return i(r.default.mark(function u() {
                            var i, o;
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return i = t, r.next = 3, a.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: i.vuex_isShenHe ? "app_cover_shenhe" : i.dbname,
                                            id: n
                                        }
                                    });

                                  case 3:
                                    if (o = r.sent, i.detail = o.result, i.detail && (i.zan_length = i.detail.zan.length), 
                                    i.detail) {
                                        r.next = 10;
                                        break;
                                    }
                                    return e.showToast({
                                        title: "壁纸不存在",
                                        icon: "none",
                                        duration: 1500
                                    }), setTimeout(function() {
                                        e.navigateBack();
                                    }, 1500), r.abrupt("return");

                                  case 10:
                                    i.addView(n);

                                  case 11:
                                  case "end":
                                    return r.stop();
                                }
                            }, u);
                        }))();
                    },
                    getConfig: function() {
                        var e = this;
                        return i(r.default.mark(function n() {
                            var t, u;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, a.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "downIntegral", "adIntegral", "wxCheck" ]
                                        }
                                    });

                                  case 3:
                                    (u = n.sent).result.success && (t.downIntegral = parseInt(u.result.data[0]), t.adIntegral = parseInt(u.result.data[1]), 
                                    t.wxCheck = u.result.data[2]);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getIsZan: function() {
                        var e = this;
                        return i(r.default.mark(function n() {
                            var t, u;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, a.callFunction({
                                        name: "query_count",
                                        data: {
                                            dbName: t.vuex_isShenHe ? "app_cover_shenhe" : t.dbname,
                                            filter: {
                                                _id: t.detail._id,
                                                "zan.user_id": t.vuex_user._id
                                            }
                                        }
                                    });

                                  case 3:
                                    u = n.sent, t.zanStatus = !1, u.result > 0 && (t.isZan = !0);

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    backClick: function() {
                        e.switchTab({
                            url: "/pages/index/index"
                        });
                    },
                    zanClick: function(n) {
                        var t = this;
                        return i(r.default.mark(function u() {
                            var i, o;
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if ((i = t).vuex_user) {
                                        r.next = 4;
                                        break;
                                    }
                                    return i.loginShow = !0, r.abrupt("return");

                                  case 4:
                                    if (new Date().getTime(), !n) {
                                        r.next = 9;
                                        break;
                                    }
                                    e.showToast({
                                        icon: "none",
                                        title: "你已经点过赞啦~",
                                        mask: !0,
                                        duration: 1e3
                                    }), r.next = 19;
                                    break;

                                  case 9:
                                    if (!i.zanStatus) {
                                        r.next = 12;
                                        break;
                                    }
                                    return e.showToast({
                                        icon: "none",
                                        title: "太快啦，歇一会再试试",
                                        mask: !0,
                                        duration: 1e3
                                    }), r.abrupt("return");

                                  case 12:
                                    return i.zanStatus = !0, i.isZan = !i.isZan, r.next = 16, a.callFunction({
                                        name: "zan_and_coll",
                                        data: {
                                            dbName: i.vuex_isShenHe ? "app_cover_shenhe" : i.dbname,
                                            type: "zan",
                                            userId: i.vuex_user._id,
                                            filter: {
                                                _id: i.detail._id,
                                                "zan.user_id": i.vuex_user._id
                                            }
                                        }
                                    });

                                  case 16:
                                    (o = r.sent).result.success && (i.zan_length = i.zan_length + 1, console.log(i.zan_length)), 
                                    o.result.success || (e.showToast({
                                        mask: !0,
                                        icon: "none",
                                        title: o.result.msg,
                                        duration: 2e3
                                    }), i.isZan = !i.isZan);

                                  case 19:
                                    setTimeout(function() {
                                        i.zanStatus = !1;
                                    }, 5e3);

                                  case 20:
                                  case "end":
                                    return r.stop();
                                }
                            }, u);
                        }))();
                    },
                    swiperChange: function(e) {
                        this.indexCurrent = e.detail.current + 1;
                    },
                    addView: function(e) {
                        return i(r.default.mark(function n() {
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
                    getUser: function() {
                        var e = this;
                        return i(r.default.mark(function n() {
                            var t, u;
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
                                    u = n.sent, t.$u.vuex("vuex_user", u.result);

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
                        return i(r.default.mark(function t() {
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
                        return i(r.default.mark(function u() {
                            var i, o, s;
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return i = t, o = e.getStorageSync("userId"), "wx", r.next = 5, a.callFunction({
                                        name: "user_authorize",
                                        data: {
                                            name: i.name,
                                            avatar: i.avatar,
                                            mptype: "wx",
                                            code: n,
                                            userId: o
                                        }
                                    });

                                  case 5:
                                    (s = r.sent).result.success ? (i.$u.vuex("vuex_user", s.result.data), i.getIsZan(), 
                                    e.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: "登录成功",
                                        duration: 1500
                                    }), e.removeStorageSync("userId")) : e.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: s.result.msg,
                                        duration: 1500
                                    }), i.loginShow = !1;

                                  case 8:
                                  case "end":
                                    return r.stop();
                                }
                            }, u);
                        }))();
                    }
                },
                onShareAppMessage: function(e) {
                    var n = this;
                    return setTimeout(function() {
                        n.adShow = !1;
                    }, 2e3), {
                        title: "这里面的壁纸很有意思~",
                        imageUrl: n.alldetail.image,
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
            n.default = c;
        }).call(this, t("543d").default, t("a9ff").default);
    },
    "6abd": function(e, n, t) {
        var a = t("441b");
        t.n(a).a;
    }
}, [ [ "0795", "common/runtime", "common/vendor" ] ] ]);