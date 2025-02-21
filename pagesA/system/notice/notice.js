(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/notice/notice" ], {
    "1e33": function(t, e, n) {
        (function(t, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a"));
            function o(t, e, n, i, a, o, c) {
                try {
                    var u = t[o](c), r = u.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void n(t);
                }
                u.done ? e(r) : Promise.resolve(r).then(i, a);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, a) {
                        var c = t.apply(e, n);
                        function u(t) {
                            o(c, i, a, u, r, "next", t);
                        }
                        function r(t) {
                            o(c, i, a, u, r, "throw", t);
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
                            name: "快捷开关"
                        }, {
                            name: "内容配置"
                        } ],
                        sheetList: [ {
                            text: "编辑"
                        } ],
                        dbname: "",
                        noticeId: "-1",
                        sheetShow: !1,
                        noticeList: [],
                        noData: !1,
                        editShow: !1,
                        notice: {
                            name: "",
                            key: "",
                            val: "",
                            mode: ""
                        }
                    };
                },
                onLoad: function() {
                    this.getNoticeList(this.tagCurrent, 1);
                },
                methods: function(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }({
                    cateClick: function(t) {
                        t != this.tagCurrent && (this.tagCurrent = t, this.getNoticeList(t, 1));
                    },
                    getNoticeList: function(e, n) {
                        var i = this;
                        return c(a.default.mark(function o() {
                            var c, u, r;
                            return a.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return (c = i).noticeList, 1 == n && (c.noticeList = [], c.pageIndex = 0), c.pageIndex = c.pageIndex + 1, 
                                    c.noData = !1, c.loadStatus = "loading", u = {}, 0 == e ? (c.dbname = "app_config", 
                                    u = {
                                        mode: 5
                                    }) : 1 == e && (c.dbname = "app_notice"), a.next = 10, t.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: c.dbname,
                                            filter: u,
                                            pageIndex: 1,
                                            pageSize: 100
                                        }
                                    });

                                  case 10:
                                    (r = a.sent).result.hasMore ? c.loadStatus = "loadmore" : c.loadStatus = "nomore", 
                                    c.noticeList = r.result.data, 0 == c.noticeList.length ? c.noData = !0 : c.noData = !1;

                                  case 14:
                                  case "end":
                                    return a.stop();
                                }
                            }, o);
                        }))();
                    },
                    sheetClick: function(t, e) {
                        this.noticeId = t, this.notice.name = this.noticeList[e].name, this.notice.key = this.noticeList[e].key, 
                        this.notice.val = this.noticeList[e].val, this.notice.mode = this.noticeList[e].mode, 
                        this.sheetShow = !0;
                    },
                    addClick: function() {
                        this.notice = {
                            name: "",
                            key: "",
                            val: ""
                        }, this.noticeId = "-1", this.editShow = !0;
                    },
                    sheetChange: function(t) {
                        var e = this;
                        return c(a.default.mark(function n() {
                            var o;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    "编辑" === (o = e).sheetList[t].text && i.navigateTo({
                                        url: "/pagesA/system/notice/noticeEdit?id=" + o.noticeId
                                    });

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    editChange: function() {
                        var e = this;
                        return c(a.default.mark(function n() {
                            var o, c;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if ((o = e).notice.name) {
                                        n.next = 6;
                                        break;
                                    }
                                    return o.$u.toast("请填写配置的说明"), n.abrupt("return");

                                  case 6:
                                    if (o.notice.name) {
                                        n.next = 11;
                                        break;
                                    }
                                    return o.$u.toast("请填写配置的键"), n.abrupt("return");

                                  case 11:
                                    if (o.notice.name) {
                                        n.next = 16;
                                        break;
                                    }
                                    return o.$u.toast("请填写配置的值"), n.abrupt("return");

                                  case 16:
                                    return i.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), "true" == o.notice.val ? o.notice.val = !0 : "false" == o.notice.val && (o.notice.val = !1), 
                                    n.next = 20, t.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_notice",
                                            filter: {
                                                _id: o.noticeId
                                            },
                                            upData: o.notice,
                                            addData: o.notice
                                        }
                                    });

                                  case 20:
                                    (c = n.sent).result.success && o.getNoticeList(o.tagCurrent, 1), i.showToast({
                                        icon: "none",
                                        title: c.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 23:
                                    o.editShow = !1;

                                  case 24:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    switchChange: function(e, n) {
                        var o = this;
                        return c(a.default.mark(function c() {
                            var u;
                            return a.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return o.noticeId = e, o.notice.name = o.noticeList[n].name, o.notice.key = o.noticeList[n].key, 
                                    o.notice.val = o.noticeList[n].val, o.notice.mode = o.noticeList[n].mode, i.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), "true" == o.notice.val ? o.notice.val = !0 : "false" == o.notice.val && (o.notice.val = !1), 
                                    a.next = 9, t.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_config",
                                            filter: {
                                                _id: o.noticeId
                                            },
                                            upData: o.notice
                                        }
                                    });

                                  case 9:
                                    (u = a.sent).result.success || (o.noticeList[n].val = !o.noticeList[n].val), i.showToast({
                                        icon: "none",
                                        title: u.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 12:
                                  case "end":
                                    return a.stop();
                                }
                            }, c);
                        }))();
                    }
                }, "addClick", function() {
                    i.navigateTo({
                        url: "/pagesA/system/notice/noticeEdit?id=-1"
                    });
                })
            };
            e.default = u;
        }).call(this, n("a9ff").default, n("543d").default);
    },
    "28f6": function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return i;
        });
        var i = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uTabs: function() {
                return n.e("uview-ui/components/u-tabs/u-tabs").then(n.bind(null, "21a0"));
            },
            uSwitch: function() {
                return n.e("uview-ui/components/u-switch/u-switch").then(n.bind(null, "3e94"));
            },
            uActionSheet: function() {
                return n.e("uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null, "a6b1"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    6753: function(t, e, n) {
        (function(t) {
            n("1073"), n("a9ff"), i(n("66fd"));
            var e = i(n("8223"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    7207: function(t, e, n) {
        n.r(e);
        var i = n("1e33"), a = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
    },
    8223: function(t, e, n) {
        n.r(e);
        var i = n("28f6"), a = n("7207");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("aa72");
        var c = n("f0c5"), u = Object(c.a)(a.default, i.b, i.c, !1, null, "823b09a6", null, !1, i.a, void 0);
        e.default = u.exports;
    },
    aa72: function(t, e, n) {
        var i = n("eda8");
        n.n(i).a;
    },
    eda8: function(t, e, n) {}
}, [ [ "6753", "common/runtime", "common/vendor" ] ] ]);