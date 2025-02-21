(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesB/detail/detail" ], {
    "31b5": function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), a(n("66fd"));
            var t = a(n("5434"));
            function a(e) {
                return e && e.__esModule ? e : {
                  goDetaildefault: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "41a1": function(e, t, n) {},
    5434: function(e, t, n) {
        n.r(t);
        var a = n("605d"), r = n("d6dc");
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        n("5945");
        var o = n("f0c5"), u = Object(o.a)(r.default, a.b, a.c, !1, null, "69b24e2f", null, !1, a.a, void 0);
        t.default = u.exports;
    },
    5945: function(e, t, n) {
        var a = n("41a1");
        n.n(a).a;
    },
    "605d": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            uSection: function() {
                return n.e("uview-ui/components/u-section/u-section").then(n.bind(null, "5601"));
            },
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "b287"));
            }
        }, r = function() {
            var e = this, t = (e.$createElement, e._self._c, e.$u.timeFormat(e.detail.time, "yyyy年mm月dd日"));
            e._isMounted || (e.e0 = function(t) {
                e.loginShow = !1;
            }, e.e1 = function(t) {
                e.downShow = !1;
            }, e.e2 = function(t) {
                e.signShow = !1;
            }, e.e3 = function(t) {
                e.adShow = !1;
            }, e.e4 = function(t) {
                e.adShow = !1;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t
                }
            });
        }, i = [];
    },
    c9a4: function(e, t, n) {
        (function(e, a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function i(e, t, n, a, r, i, o) {
                try {
                    var u = e[i](o), s = u.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                u.done ? t(s) : Promise.resolve(s).then(a, r);
            }
            function o(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = e.apply(t, n);
                        function u(e) {
                            i(o, a, r, u, s, "next", e);
                        }
                        function s(e) {
                            i(o, a, r, u, s, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var u, s = null, c = e.getSystemInfoSync().windowWidth, d = e.getSystemInfoSync().windowHeight;
            u = e.getMenuButtonBoundingClientRect();
            var l = {
                components: {
                    models: function() {
                        n.e("components/model/model").then(function() {
                            return resolve(n("37f2"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        menuButtonInfo: u,
                        loadFlag: !0,
                        loginShow: !1,
                        wxCheck: !1,
                        dbname: "",
                        detail: {},
                        imgs_id: "",
                        randomList: {},
                        updetail: {},
                        tags: {},
                        time: "",
                        date: "",
                        adIntegral: 0,
                        downShow: !1,
                        downIntegral: 0,
                        downTitle: "",
                        downBtn: "",
                        adShow: !1,
                        isColl: !1,
                        isZan: !1,
                        zanStatus: !0,
                        collStatus: !0,
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
                    var t = this;
                    return o(r.default.mark(function n() {
                        var a, i, o, u, s, c;
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return a = e.id, i = e.index, o = t, n.next = 4, o.getDate();

                              case 4:
                                return o.indexCurrent = parseInt(i) + 1, o.activeCurrent = parseInt(i), n.next = 8, 
                                o.getConfig();

                              case 8:
                                if (0 == o.wxCheck ? o.dbname = "app_cover" : o.dbname = "app_gallery", !a) {
                                    n.next = 12;
                                    break;
                                }
                                return n.next = 12, o.getDetail(a);

                              case 12:
                                if (o.loadFlag = !1, !o.detail) {
                                    n.next = 22;
                                    break;
                                }
                                return u = o.detail.tags.split(","), o.tags = u, s = o.detail.category_id, n.next = 19, 
                                o.getRandomList(s);

                              case 19:
                                return c = o.detail.user_id, n.next = 22, o.getUpdetail(c);

                              case 22:
                                o.vuex_user && (o.getIsZan(), o.getIsColl(), o.getUser()), o.adLoad();

                              case 24:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    getDate: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n, a, i, o, u, s, c;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    (n = new Date()).getFullYear(), a = n.getMonth() + 1, i = n.getDate(), o = n.getHours(), 
                                    u = n.getMinutes(), n.getSeconds(), s = a + "月" + i + "日", c = [ o, u ].map(e.formatNumber).join(":"), 
                                    console.log(s), console.log(c), e.setData({
                                        date: s,
                                        time: c
                                    });

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    formatNumber: function(e) {
                        return (e = e.toString())[1] ? e : "0" + e;
                    },
                    getDetail: function(t) {
                        var n = this;
                        return o(r.default.mark(function i() {
                            var o, u;
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return o = n, r.next = 3, a.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: o.vuex_isShenHe ? "app_cover_shenhe" : o.dbname,
                                            id: t
                                        }
                                    });

                                  case 3:
                                    if (u = r.sent, o.detail = u.result, console.log(o.detail), o.detail) {
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
                                    o.addView(t);

                                  case 11:
                                  case "end":
                                    return r.stop();
                                }
                            }, i);
                        }))();
                    },
                    getRandomList: function(e) {
                        var t = this;
                        return o(r.default.mark(function n() {
                            var i, o, u, s;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return i = t, n.next = 3, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: i.dbname,
                                            filter: {
                                                status: 1,
                                                category_id: e
                                            },
                                            order: {
                                                name: "time",
                                                type: "desc"
                                            },
                                            pageIndex: 1,
                                            pageSize: 10
                                        }
                                    });

                                  case 3:
                                    o = n.sent, u = o.result.data, s = u.filter(function(e) {
                                        return e._id !== i.detail._id;
                                    }), i.randomList = s[Math.floor(Math.random() * s.length)];

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getUpdetail: function(e) {
                        var t = this;
                        return o(r.default.mark(function n() {
                            var i, o;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return i = t, n.next = 3, a.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_user",
                                            id: e
                                        }
                                    });

                                  case 3:
                                    o = n.sent, i.updetail = o.result;

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getConfig: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, a.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "downIntegral", "adIntegral", "wxCheck" ]
                                        }
                                    });

                                  case 3:
                                    (i = t.sent).result.success && (n.downIntegral = parseInt(i.result.data[0]), n.adIntegral = parseInt(i.result.data[1]), 
                                    n.wxCheck = i.result.data[2]);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getIsZan: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, a.callFunction({
                                        name: "query_count",
                                        data: {
                                            dbName: n.vuex_isShenHe ? "app_cover_shenhe" : n.dbname,
                                            filter: {
                                                _id: n.detail._id,
                                                "zan.user_id": n.vuex_user._id
                                            }
                                        }
                                    });

                                  case 3:
                                    i = t.sent, n.zanStatus = !1, i.result > 0 && (n.isZan = !0);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getIsColl: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, a.callFunction({
                                        name: "query_count",
                                        data: {
                                            dbName: n.vuex_isShenHe ? "app_cover_shenhe" : n.dbname,
                                            filter: {
                                                _id: n.detail._id,
                                                "coll.user_id": n.vuex_user._id
                                            }
                                        }
                                    });

                                  case 3:
                                    i = t.sent, n.collStatus = !1, i.result > 0 && (n.isColl = !0);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    winClick: function() {
                        var t = this;
                        return o(r.default.mark(function n() {
                            var i, o, u, s, c, d, l;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if ((i = t).vuex_user) {
                                        n.next = 4;
                                        break;
                                    }
                                    return i.loginShow = !0, n.abrupt("return");

                                  case 4:
                                    if (!(i.downIntegral > 0)) {
                                        n.next = 18;
                                        break;
                                    }
                                    if (!((o = i.vuex_user.integral) < i.downIntegral)) {
                                        n.next = 10;
                                        break;
                                    }
                                    return i.downShow = !0, i.downTitle = "<p style='font-weight: 550;font-size: 16px;'>下载需要 " + i.downIntegral + " 能量</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>" + o + "</span>能量，无法下载当前作品，快去赚能量吧~</p>", 
                                    n.abrupt("return");

                                  case 10:
                                    return e.showLoading({
                                        mask: !0,
                                        title: "保存中..."
                                    }), n.next = 13, a.callFunction({
                                        name: "place_order",
                                        data: {
                                            userId: i.vuex_user._id,
                                            coverId: i.detail._id,
                                            integral: i.downIntegral,
                                            index: i.indexCurrent - 1
                                        }
                                    });

                                  case 13:
                                    u = n.sent, console.log("query", u), u.result.success ? (i.getUser(), s = i.detail.images[i.indexCurrent - 1], 
                                    c = s.substring(s.lastIndexOf(".") + 1), d = new Date().valueOf(), e.downloadFile({
                                        url: s,
                                        filePath: wx.env.USER_DATA_PATH + "/" + d + "." + c,
                                        success: function(t) {
                                            var n = t.filePath;
                                            e.saveImageToPhotosAlbum({
                                                filePath: n,
                                                success: function(t) {
                                                    e.hideLoading(), i.adShow = !0;
                                                },
                                                fail: function(t) {
                                                    t.errMsg && e.showModal({
                                                        title: "提示",
                                                        content: "无权限，请打开下载权限后再试！",
                                                        showCancel: !1,
                                                        success: function(t) {
                                                            t.confirm && e.openSetting({
                                                                success: function(t) {
                                                                    t.authSetting["scope.writePhotosAlbum"] ? e.saveImageToPhotosAlbum({
                                                                        filePath: n,
                                                                        success: function(t) {
                                                                            e.hideLoading(), i.adShow = !0;
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
                                        fail: function(e) {
                                            console.log(e);
                                        }
                                    })) : e.showToast({
                                        mask: !0,
                                        icon: "none",
                                        title: u.result.msg,
                                        duration: 1e3
                                    }), n.next = 22;
                                    break;

                                  case 18:
                                    s = i.detail.images[i.indexCurrent - 1], c = s.substring(s.lastIndexOf(".") + 1), 
                                    l = new Date().valueOf(), e.downloadFile({
                                        url: s,
                                        filePath: wx.env.USER_DATA_PATH + "/" + l + "." + c,
                                        success: function(t) {
                                            var n = t.filePath;
                                            e.saveImageToPhotosAlbum({
                                                filePath: n,
                                                success: function(t) {
                                                    e.hideLoading(), i.adShow = !0;
                                                },
                                                fail: function(t) {
                                                    t.errMsg && e.showModal({
                                                        title: "提示",
                                                        content: "无权限，请打开下载权限后再试！",
                                                        showCancel: !1,
                                                        success: function(t) {
                                                            t.confirm && e.openSetting({
                                                                success: function(t) {
                                                                    t.authSetting["scope.writePhotosAlbum"] ? e.saveImageToPhotosAlbum({
                                                                        filePath: n,
                                                                        success: function(t) {
                                                                            e.hideLoading(), i.adShow = !0;
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
                                        fail: function(e) {
                                            console.log(e);
                                        }
                                    });

                                  case 22:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    backClick: function() {
                        e.navigateBack();
                    },
                    collectClick: function() {
                        var t = this;
                        return o(r.default.mark(function n() {
                            var i, o;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if ((i = t).vuex_user) {
                                        n.next = 4;
                                        break;
                                    }
                                    return i.loginShow = !0, n.abrupt("return");

                                  case 4:
                                    if (!i.collStatus) {
                                        n.next = 7;
                                        break;
                                    }
                                    return e.showToast({
                                        icon: "none",
                                        title: "太快啦，歇一会再试试",
                                        mask: !0,
                                        duration: 1e3
                                    }), n.abrupt("return");

                                  case 7:
                                    return i.collStatus = !0, i.isColl = !i.isColl, n.next = 11, a.callFunction({
                                        name: "zan_and_coll",
                                        data: {
                                            dbName: i.vuex_isShenHe ? "app_cover_shenhe" : i.dbname,
                                            type: "coll",
                                            userId: i.vuex_user._id,
                                            filter: {
                                                _id: i.detail._id,
                                                "coll.user_id": i.vuex_user._id
                                            }
                                        }
                                    });

                                  case 11:
                                    (o = n.sent).result.success || (e.showToast({
                                        mask: !0,
                                        icon: "none",
                                        title: o.result.msg,
                                        duration: 2e3
                                    }), i.isColl = !i.isColl), setTimeout(function() {
                                        i.collStatus = !1;
                                    }, 5e3);

                                  case 14:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    zanClick: function(t) {
                        var n = this;
                        return o(r.default.mark(function i() {
                            var o, u;
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if ((o = n).vuex_user) {
                                        r.next = 4;
                                        break;
                                    }
                                    return o.loginShow = !0, r.abrupt("return");

                                  case 4:
                                    if (new Date().getTime(), !t) {
                                        r.next = 9;
                                        break;
                                    }
                                    e.showToast({
                                        icon: "none",
                                        title: "你已经点过赞啦~",
                                        mask: !0,
                                        duration: 1e3
                                    }), r.next = 18;
                                    break;

                                  case 9:
                                    if (!o.zanStatus) {
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
                                    return o.zanStatus = !0, o.isZan = !o.isZan, r.next = 16, a.callFunction({
                                        name: "zan_and_coll",
                                        data: {
                                            dbName: o.vuex_isShenHe ? "app_cover_shenhe" : o.dbname,
                                            type: "zan",
                                            userId: o.vuex_user._id,
                                            filter: {
                                                _id: o.detail._id,
                                                "zan.user_id": o.vuex_user._id
                                            }
                                        }
                                    });

                                  case 16:
                                    (u = r.sent).result.success || (e.showToast({
                                        mask: !0,
                                        icon: "none",
                                        title: u.result.msg,
                                        duration: 2e3
                                    }), o.isZan = !o.isZan);

                                  case 18:
                                    setTimeout(function() {
                                        o.zanStatus = !1;
                                    }, 5e3);

                                  case 19:
                                  case "end":
                                    return r.stop();
                                }
                            }, i);
                        }))();
                    },
                    goDetail: function(t, n, a) {
                        var r = JSON.stringify(a);
                        e.navigateTo({
                            url: "/pagesB/detail/detail?id=" + t + "&index=" + n + "&images=" + r
                        });
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
                        return o(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.callFunction({
                                        name: "view_raise",
                                        data: {
                                            coverId: e
                                        }
                                    });

                                  case 2:
                                    t.sent;

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
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
                        var t = this;
                        return o(r.default.mark(function n() {
                            var i, o;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return i = t, e.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), n.next = 4, a.callFunction({
                                        name: "user_integral",
                                        data: {
                                            userId: i.vuex_user._id
                                        }
                                    });

                                  case 4:
                                    o = n.sent, e.hideLoading(), o.result.success && (i.getUser(), i.signTitle = "<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + o.result.integral + "</span>能量</p>", 
                                    i.signShow = !0);

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getUser: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, a.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_user",
                                            id: n.vuex_user._id
                                        }
                                    });

                                  case 3:
                                    i = t.sent, n.$u.vuex("vuex_user", i.result);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getUserInfo: function() {
                        var t = this;
                        e.getUserProfile({
                            desc: "个人登录，记录数据",
                            success: function(e) {
                                console.log(e), t.name = e.userInfo.nickName, t.avatar = e.userInfo.avatarUrl, t.wxlogin();
                            },
                            fail: function() {
                                console.log("获取用户信息失败");
                            }
                        });
                    },
                    wxlogin: function() {
                        var t = this;
                        return o(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    a = t, e.showLoading({
                                        title: "登录中..."
                                    }), e.login({
                                        provider: "weixin",
                                        success: function(e) {
                                            var t = e.code;
                                            a.wxloginres(t);
                                        }
                                    });

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    wxloginres: function(t) {
                        var n = this;
                        return o(r.default.mark(function i() {
                            var o, u, s;
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return o = n, u = e.getStorageSync("userId"), "wx", r.next = 5, a.callFunction({
                                        name: "user_authorize",
                                        data: {
                                            name: o.name,
                                            avatar: o.avatar,
                                            mptype: "wx",
                                            code: t,
                                            userId: u
                                        }
                                    });

                                  case 5:
                                    (s = r.sent).result.success ? (o.$u.vuex("vuex_user", s.result.data), o.getIsZan(), 
                                    o.getIsColl(), e.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: "登录成功",
                                        duration: 1500
                                    }), e.removeStorageSync("userId")) : e.showToast({
                                        icon: "none",
                                        mask: !0,
                                        title: s.result.msg,
                                        duration: 1500
                                    }), o.loginShow = !1;

                                  case 8:
                                  case "end":
                                    return r.stop();
                                }
                            }, i);
                        }))();
                    }
                },
                onShareAppMessage: function(e) {
                    var t = this;
                    return setTimeout(function() {
                        t.adShow = !1;
                    }, 2e3), {
                        title: "送你一张超级好看的壁纸~",
                        imageUrl: t.detail.images[t.indexCurrent - 1],
                        path: "/pages/index/index?userId=" + t.vuex_user._id + "&detailId=" + t.detail._id + "&index=" + (t.indexCurrent - 1)
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
            t.default = l;
        }).call(this, n("543d").default, n("a9ff").default);
    },
    d6dc: function(e, t, n) {
        n.r(t);
        var a = n("c9a4"), r = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = r.a;
    }
}, [ [ "31b5", "common/runtime", "common/vendor" ] ] ]);