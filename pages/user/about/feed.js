(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/about/feed" ], {
    "155b": function(n, e, t) {
        t.r(e);
        var u = t("9abd"), o = t.n(u);
        for (var r in u) "default" !== r && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(r);
        e.default = o.a;
    },
    "9abd": function(n, e, t) {
        (function(n, u) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("a34a"));
            function r(n, e, t, u, o, r, a) {
                try {
                    var i = n[r](a), f = i.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                i.done ? e(f) : Promise.resolve(f).then(u, o);
            }
            var a = {
                data: function() {
                    return {
                        feed: {
                            opinion: "",
                            name: "",
                            phone: "",
                            code: "",
                            user_id: ""
                        }
                    };
                },
                methods: {
                    submit: function() {
                        var e = this;
                        return function(n) {
                            return function() {
                                var e = this, t = arguments;
                                return new Promise(function(u, o) {
                                    var a = n.apply(e, t);
                                    function i(n) {
                                        r(a, u, o, i, f, "next", n);
                                    }
                                    function f(n) {
                                        r(a, u, o, i, f, "throw", n);
                                    }
                                    i(void 0);
                                });
                            };
                        }(o.default.mark(function t() {
                            var r, a;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ((r = e).feed.opinion) {
                                        t.next = 4;
                                        break;
                                    }
                                    return r.$u.toast("请填写意见或者建议"), t.abrupt("return");

                                  case 4:
                                    return n.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), r.feed.user_id = r.vuex_user._id, r.feed.user_name = r.vuex_user.name, t.next = 9, 
                                    u.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_feed",
                                            filter: {
                                                _id: "-1"
                                            },
                                            addData: r.feed
                                        }
                                    });

                                  case 9:
                                    a = t.sent, n.hideLoading(), a.result.success ? (n.showToast({
                                        icon: "none",
                                        title: "反馈成功！",
                                        mask: !0,
                                        duration: 2e3
                                    }), setTimeout(function() {
                                        n.navigateBack();
                                    }, 2e3)) : n.showToast({
                                        icon: "none",
                                        title: a.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            e.default = a;
        }).call(this, t("543d").default, t("a9ff").default);
    },
    a61a: function(n, e, t) {},
    b025: function(n, e, t) {
        var u = t("a61a");
        t.n(u).a;
    },
    c361: function(n, e, t) {
        t.r(e);
        var u = t("e56d"), o = t("155b");
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        t("b025");
        var a = t("f0c5"), i = Object(a.a)(o.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = i.exports;
    },
    e56d: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return r;
        }), t.d(e, "a", function() {
            return u;
        });
        var u = {
            uNavbar: function() {
                return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null, "8954"));
            },
            uForm: function() {
                return t.e("uview-ui/components/u-form/u-form").then(t.bind(null, "1476"));
            },
            uInput: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-input/u-input") ]).then(t.bind(null, "2abb"));
            },
            uFormItem: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-form-item/u-form-item") ]).then(t.bind(null, "88f9"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    f042: function(n, e, t) {
        (function(n) {
            t("1073"), t("a9ff"), u(t("66fd"));
            var e = u(t("c361"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "f042", "common/runtime", "common/vendor" ] ] ]);