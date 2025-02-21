(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/cover/coverList" ], {
    "1e07": function(e, t, n) {
        n.r(t);
        var a = n("d732"), o = n("b8de");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("fbe9");
        var i = n("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, "bd61e21a", null, !1, a.a, void 0);
        t.default = u.exports;
    },
    2065: function(e, t, n) {},
    "441e": function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), a(n("66fd"));
            var t = a(n("1e07"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    b8de: function(e, t, n) {
        n.r(t);
        var a = n("d81a"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    d732: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uTabs: function() {
                return n.e("uview-ui/components/u-tabs/u-tabs").then(n.bind(null, "21a0"));
            },
            uGap: function() {
                return n.e("uview-ui/components/u-gap/u-gap").then(n.bind(null, "0f2a"));
            },
            uLoadmore: function() {
                return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "98b0"));
            },
            uModal: function() {
                return n.e("uview-ui/components/u-modal/u-modal").then(n.bind(null, "03d9"));
            },
            uInput: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-input/u-input") ]).then(n.bind(null, "2abb"));
            },
            uActionSheet: function() {
                return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null, "a6b1"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    d81a: function(e, t, n) {
        (function(e, a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function r(e, t, n, a, o, r, i) {
                try {
                    var u = e[r](i), c = u.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                u.done ? t(c) : Promise.resolve(c).then(a, o);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, o) {
                        var i = e.apply(t, n);
                        function u(e) {
                            r(i, a, o, u, c, "next", e);
                        }
                        function c(e) {
                            r(i, a, o, u, c, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var u = {
                data: function() {
                    return {
                        tagCurrent: 0,
                        tagList: [ {
                            name: "全部"
                        }, {
                            name: "待审核"
                        }, {
                            name: "已驳回"
                        }, {
                            name: "专辑"
                        } ],
                        navbarTop: 0,
                        coverList: [],
                        sheetList: [ {
                            text: "删除"
                        } ],
                        sheetShow: !1,
                        noData: !1,
                        pageIndex: 0,
                        loadStatus: "loadmore",
                        examine: "",
                        coverId: "",
                        userId: "",
                        coverStatus: "",
                        coverTopic: "",
                        yunTopic: "",
                        detail: "",
                        editShow: !1,
                        editTopicShow: !1
                    };
                },
                components: {
                    models: function() {
                        n.e("components/model/model").then(function() {
                            return resolve(n("37f2"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                onLoad: function(e) {
                    var t = e.userId, n = this;
                    t && (n.userId = t), n.getCoverList(n.tagCurrent, 1);
                },
                onShow: function() {
                    var t = this;
                    return i(o.default.mark(function n() {
                        var a;
                        return o.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                a = t, e.getStorageSync("update_flag") && (a.getCoverList(a.orderStatus, 1), e.removeStorageSync("update_flag"));

                              case 2:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    cateClick: function(e) {
                        e != this.tagCurrent && (this.tagCurrent = e, this.getCoverList(e, 1));
                    },
                    getCoverList: function(e, t) {
                        var n = this;
                        return i(o.default.mark(function r() {
                            var i, u, c, s;
                            return o.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return u = (i = n).coverList, 1 == t && (i.coverList = [], u = [], i.pageIndex = 0), 
                                    i.pageIndex = i.pageIndex + 1, i.noData = !1, i.loadStatus = "loading", c = {}, 
                                    1 == e ? c = {
                                        status: 0
                                    } : 2 == e ? c = {
                                        status: 2
                                    } : 3 == e && (c = {
                                        topic: 1
                                    }), i.userId && (c.user_id = i.userId), o.next = 11, a.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_cover",
                                            filter: c,
                                            order: {
                                                name: "time",
                                                type: "desc"
                                            },
                                            pageIndex: i.pageIndex,
                                            pageSize: 10
                                        }
                                    });

                                  case 11:
                                    (s = o.sent).result.hasMore ? i.loadStatus = "loadmore" : i.loadStatus = "nomore", 
                                    u = u.concat(s.result.data), i.coverList = u, 0 == i.coverList.length ? i.noData = !0 : i.noData = !1;

                                  case 16:
                                  case "end":
                                    return o.stop();
                                }
                            }, r);
                        }))();
                    },
                    delClick: function(t) {
                        var n = this;
                        e.showModal({
                            title: "删除提示",
                            content: "确定删除当前作品吗？",
                            confirmText: "删除",
                            confirmColor: "#ff0000",
                            success: function() {
                                var r = i(o.default.mark(function r(i) {
                                    var u;
                                    return o.default.wrap(function(o) {
                                        for (;;) switch (o.prev = o.next) {
                                          case 0:
                                            if (!i.confirm) {
                                                o.next = 7;
                                                break;
                                            }
                                            return e.showLoading({
                                                mask: !0,
                                                title: "删除中..."
                                            }), o.next = 4, a.callFunction({
                                                name: "query_del",
                                                data: {
                                                    dbName: "app_cover",
                                                    filter: {
                                                        _id: t
                                                    }
                                                }
                                            });

                                          case 4:
                                            (u = o.sent).result.success && n.getCoverList(n.tagCurrent, 1), e.showToast({
                                                icon: "none",
                                                title: u.result.msg,
                                                mask: !0,
                                                duration: 1e3
                                            });

                                          case 7:
                                          case "end":
                                            return o.stop();
                                        }
                                    }, r);
                                }));
                                return function(e) {
                                    return r.apply(this, arguments);
                                };
                            }()
                        });
                    },
                    editChange: function(e, t) {
                        var n = this;
                        if (e && t) n.coverId = e, n.coverStatus = t, 1 === t || 3 === t ? n.examineClick() : n.editShow = !0; else {
                            if (!n.examine) return n.$refs.uModal.clearLoading(), void n.$u.toast("请填写拒绝原因");
                            var a = n.examine;
                            n.examine = "", n.editShow = !1, n.examineClick(a);
                        }
                    },
                    examineClick: function(t) {
                        var n = this, r = "确定审核通过吗？";
                        2 === n.coverStatus && (r = "确定驳回吗？"), 3 === n.coverStatus && (r = "确定下架吗？"), e.showModal({
                            title: "审核提示",
                            content: r,
                            confirmColor: "#ff0000",
                            success: function() {
                                var r = i(o.default.mark(function r(i) {
                                    var u, c;
                                    return o.default.wrap(function(o) {
                                        for (;;) switch (o.prev = o.next) {
                                          case 0:
                                            if (!i.confirm) {
                                                o.next = 15;
                                                break;
                                            }
                                            return e.showLoading({
                                                mask: !0,
                                                title: "正在拼命加载中..."
                                            }), o.next = 4, a.callFunction({
                                                name: "query_edit",
                                                data: {
                                                    dbName: "app_cover",
                                                    filter: {
                                                        _id: n.coverId
                                                    },
                                                    upData: {
                                                        status: n.coverStatus,
                                                        examine: t
                                                    }
                                                }
                                            });

                                          case 4:
                                            if (!(u = o.sent).result.success) {
                                                o.next = 14;
                                                break;
                                            }
                                            return n.getCoverList(n.tagCurrent, 1), e.showToast({
                                                icon: "none",
                                                title: "审核成功",
                                                mask: !0,
                                                duration: 1e3
                                            }), o.next = 10, a.callFunction({
                                                name: "template_send",
                                                data: {
                                                    coverId: n.coverId
                                                }
                                            });

                                          case 10:
                                            (c = o.sent).result.success || e.showToast({
                                                icon: "none",
                                                title: c.result.msg,
                                                mask: !0,
                                                duration: 5e3
                                            }), o.next = 15;
                                            break;

                                          case 14:
                                            e.showToast({
                                                icon: "none",
                                                title: u.result.msg,
                                                mask: !0,
                                                duration: 1e3
                                            });

                                          case 15:
                                          case "end":
                                            return o.stop();
                                        }
                                    }, r);
                                }));
                                return function(e) {
                                    return r.apply(this, arguments);
                                };
                            }()
                        });
                    },
                    niceClick: function(t, n) {
                        var r = this;
                        return i(o.default.mark(function i() {
                            var u, c;
                            return o.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return u = r, e.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), o.next = 4, a.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_cover",
                                            filter: {
                                                _id: t
                                            },
                                            upData: {
                                                cover_nice: n
                                            }
                                        }
                                    });

                                  case 4:
                                    (c = o.sent).result.success && u.getCoverList(u.tagCurrent, 1), e.showToast({
                                        icon: "none",
                                        title: c.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 7:
                                  case "end":
                                    return o.stop();
                                }
                            }, i);
                        }))();
                    },
                    topicChange: function(e, t) {
                        var n = this;
                        if (e && t) n.coverId = e, n.coverTopic = t, 2 === n.coverTopic ? n.topicClick() : n.editTopicShow = !0; else {
                            if (!n.detail) return n.$refs.uModal.clearLoading(), void n.$u.toast("请填写专辑介绍");
                            var a = n.detail;
                            n.detail = "", n.editTopicShow = !1, n.topicClick(a);
                        }
                    },
                    topicClick: function(t) {
                        var n = this, r = "";
                        1 === n.coverTopic && (r = "确定设为专辑吗？"), 2 === n.coverTopic && (r = "确定取消专辑吗？"), 
                        e.showModal({
                            title: "专辑提示",
                            content: r,
                            confirmColor: "#ff0000",
                            success: function() {
                                var r = i(o.default.mark(function r(i) {
                                    var u, c;
                                    return o.default.wrap(function(o) {
                                        for (;;) switch (o.prev = o.next) {
                                          case 0:
                                            if (!i.confirm) {
                                                o.next = 15;
                                                break;
                                            }
                                            return e.showLoading({
                                                mask: !0,
                                                title: "正在拼命加载中..."
                                            }), o.next = 4, a.callFunction({
                                                name: "query_edit",
                                                data: {
                                                    dbName: "app_cover",
                                                    filter: {
                                                        _id: n.coverId
                                                    },
                                                    upData: {
                                                        topic: n.coverTopic,
                                                        detail: t
                                                    }
                                                }
                                            });

                                          case 4:
                                            if (!(u = o.sent).result.success) {
                                                o.next = 14;
                                                break;
                                            }
                                            return n.getCoverList(n.tagCurrent, 1), e.showToast({
                                                icon: "none",
                                                title: "设为专辑成功",
                                                mask: !0,
                                                duration: 1e3
                                            }), o.next = 10, a.callFunction({
                                                name: "template_send",
                                                data: {
                                                    coverId: n.coverId
                                                }
                                            });

                                          case 10:
                                            (c = o.sent).result.success || e.showToast({
                                                icon: "none",
                                                title: c.result.msg,
                                                mask: !0,
                                                duration: 5e3
                                            }), o.next = 15;
                                            break;

                                          case 14:
                                            e.showToast({
                                                icon: "none",
                                                title: u.result.msg,
                                                mask: !0,
                                                duration: 1e3
                                            });

                                          case 15:
                                          case "end":
                                            return o.stop();
                                        }
                                    }, r);
                                }));
                                return function(e) {
                                    return r.apply(this, arguments);
                                };
                            }()
                        });
                    },
                    editTopic: function(t, n, r) {
                        var u = this;
                        u.coverId = t, u.coverTopic = n, u.detail = r;
                        e.showModal({
                            title: "专辑提示",
                            content: "确定设为专辑吗？",
                            confirmColor: "#ff0000",
                            success: function() {
                                var t = i(o.default.mark(function t(n) {
                                    var i, c;
                                    return o.default.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            if (!n.confirm) {
                                                t.next = 15;
                                                break;
                                            }
                                            return e.showLoading({
                                                mask: !0,
                                                title: "正在拼命加载中..."
                                            }), t.next = 4, a.callFunction({
                                                name: "query_edit",
                                                data: {
                                                    dbName: "app_cover",
                                                    filter: {
                                                        _id: u.coverId
                                                    },
                                                    upData: {
                                                        topic: u.coverTopic,
                                                        detail: r
                                                    }
                                                }
                                            });

                                          case 4:
                                            if (!(i = t.sent).result.success) {
                                                t.next = 14;
                                                break;
                                            }
                                            return u.getCoverList(u.tagCurrent, 1), e.showToast({
                                                icon: "none",
                                                title: "设为专辑成功",
                                                mask: !0,
                                                duration: 1e3
                                            }), t.next = 10, a.callFunction({
                                                name: "template_send",
                                                data: {
                                                    coverId: u.coverId
                                                }
                                            });

                                          case 10:
                                            (c = t.sent).result.success || e.showToast({
                                                icon: "none",
                                                title: c.result.msg,
                                                mask: !0,
                                                duration: 5e3
                                            }), t.next = 15;
                                            break;

                                          case 14:
                                            e.showToast({
                                                icon: "none",
                                                title: i.result.msg,
                                                mask: !0,
                                                duration: 1e3
                                            });

                                          case 15:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                }));
                                return function(e) {
                                    return t.apply(this, arguments);
                                };
                            }()
                        });
                    },
                    detailClick: function(t) {
                        e.navigateTo({
                            url: "/pagesB/detail/detail?id=" + t + "&index=0"
                        });
                    },
                    editClick: function(t) {
                        e.navigateTo({
                            url: "/pages/write/edit?id=" + t
                        });
                    },
                    stockClick: function(t) {
                        e.navigateTo({
                            url: "/pages/write/stock?id=" + t
                        });
                    }
                },
                onReachBottom: function() {
                    var e = this;
                    "nomore" != e.loadStatus && e.getCoverList(e.tagCurrent);
                }
            };
            t.default = u;
        }).call(this, n("543d").default, n("a9ff").default);
    },
    fbe9: function(e, t, n) {
        var a = n("2065");
        n.n(a).a;
    }
}, [ [ "441e", "common/runtime", "common/vendor" ] ] ]);