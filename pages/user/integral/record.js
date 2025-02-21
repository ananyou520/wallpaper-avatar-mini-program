(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/integral/record" ], {
    "19b3": function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), r(t("66fd"));
            var n = r(t("6409"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    "229e": function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function a(e, n, t, r, a, o, u) {
                try {
                    var c = e[o](u), i = c.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                c.done ? n(i) : Promise.resolve(i).then(r, a);
            }
            function o(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(r, o) {
                        var u = e.apply(n, t);
                        function c(e) {
                            a(u, r, o, c, i, "next", e);
                        }
                        function i(e) {
                            a(u, r, o, c, i, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            var u = {
                data: function() {
                    return {
                        recordList: [],
                        noData: !1,
                        pageIndex: 0,
                        loadStatus: "loadmore",
                        userId: ""
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    return o(r.default.mark(function t() {
                        var a;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return a = e.userId, n.userId = a || n.vuex_user._id, t.next = 4, n.getIntegralRecord();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    getIntegralRecord: function() {
                        var n = this;
                        return o(r.default.mark(function t() {
                            var a, o, u;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return o = (a = n).recordList, a.pageIndex = a.pageIndex + 1, a.noData = !1, a.loadStatus = "loading", 
                                    t.next = 7, e.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_record",
                                            filter: {
                                                user_id: a.userId
                                            },
                                            order: {
                                                name: "time",
                                                type: "desc"
                                            },
                                            pageIndex: a.pageIndex,
                                            pageSize: 10
                                        }
                                    });

                                  case 7:
                                    (u = t.sent).result.hasMore ? a.loadStatus = "loadmore" : a.loadStatus = "nomore", 
                                    o = o.concat(u.result.data), a.recordList = o, 0 == a.recordList.length ? a.noData = !0 : a.noData = !1;

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                },
                onReachBottom: function() {
                    "nomore" != this.loadStatus && this.getIntegralRecord();
                }
            };
            n.default = u;
        }).call(this, t("a9ff").default);
    },
    6409: function(e, n, t) {
        t.r(n);
        var r = t("914e"), a = t("c106");
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        t("c85c");
        var u = t("f0c5"), c = Object(u.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = c.exports;
    },
    "90da": function(e, n, t) {},
    "914e": function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {
            return r;
        });
        var r = {
            uNavbar: function() {
                return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null, "8954"));
            },
            uLoadmore: function() {
                return t.e("uview-ui/components/u-loadmore/u-loadmore").then(t.bind(null, "98b0"));
            }
        }, a = function() {
            var e = this, n = (e.$createElement, e._self._c, e.__map(e.recordList, function(n, t) {
                return {
                    $orig: e.__get_orig(n),
                    g0: e.$u.timeFormat(n.time, "yyyy-mm-dd hh:MM:ss")
                };
            }));
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, o = [];
    },
    c106: function(e, n, t) {
        t.r(n);
        var r = t("229e"), a = t.n(r);
        for (var o in r) "default" !== o && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(o);
        n.default = a.a;
    },
    c85c: function(e, n, t) {
        var r = t("90da");
        t.n(r).a;
    }
}, [ [ "19b3", "common/runtime", "common/vendor" ] ] ]);