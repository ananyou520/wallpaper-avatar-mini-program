(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/color/colorEdit" ], {
    "02af": function(n, t, e) {
        var r = e("f7d4");
        e.n(r).a;
    },
    "13f8": function(n, t, e) {
        e.r(t);
        var r = e("9a6f"), o = e("6cea");
        for (var u in o) "default" !== u && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        e("02af");
        var a = e("f0c5"), c = Object(a.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    },
    2170: function(n, t, e) {
        (function(n, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("a34a"));
            function u(n, t, e, r, o, u, a) {
                try {
                    var c = n[u](a), i = c.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void e(n);
                }
                c.done ? t(i) : Promise.resolve(i).then(r, o);
            }
            function a(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(r, o) {
                        var a = n.apply(t, e);
                        function c(n) {
                            u(a, r, o, c, i, "next", n);
                        }
                        function i(n) {
                            u(a, r, o, c, i, "throw", n);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        colorId: "",
                        imgList: [],
                        color: {},
                        newcolor: {}
                    };
                },
                created: function() {
                    var t = this;
                    n.$on("uAvatarCropper", function(n) {
                        t.imgPath = n;
                    });
                },
                onLoad: function(n) {
                    var t = this;
                    return a(o.default.mark(function e() {
                        var r, u;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                r = n.id, (u = t).colorId = r, "-1" != r && u.getcolor(r);

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                methods: {
                    getcolor: function(n) {
                        var t = this;
                        return a(o.default.mark(function e() {
                            var u;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_color",
                                            id: n
                                        }
                                    });

                                  case 2:
                                    delete (u = e.sent).result._id, t.color = u.result, t.newcolor = JSON.stringify(u.result);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    submit: function() {
                        var t = this;
                        return a(o.default.mark(function e() {
                            var u, a;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ((u = t).color.color) {
                                        e.next = 4;
                                        break;
                                    }
                                    return u.$u.toast("请填写颜色名称"), e.abrupt("return");

                                  case 4:
                                    if (u.color.name) {
                                        e.next = 7;
                                        break;
                                    }
                                    return u.$u.toast("请填写颜色名称"), e.abrupt("return");

                                  case 7:
                                    if (u.color.sort) {
                                        e.next = 10;
                                        break;
                                    }
                                    return u.$u.toast("请填写颜色排序"), e.abrupt("return");

                                  case 10:
                                    if ("-1" == u.colorId || JSON.stringify(u.color) !== u.newcolor) {
                                        e.next = 13;
                                        break;
                                    }
                                    return u.$u.toast("请修改内容后再提交"), e.abrupt("return");

                                  case 13:
                                    return n.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), e.next = 16, r.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_color",
                                            filter: {
                                                _id: u.colorId
                                            },
                                            addData: u.color,
                                            upData: u.color
                                        }
                                    });

                                  case 16:
                                    (a = e.sent).result.success && (setTimeout(function() {
                                        n.navigateBack();
                                    }, 1e3), n.setStorageSync("update_flag", 1)), n.showToast({
                                        icon: "none",
                                        title: a.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 19:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                }
            };
            t.default = c;
        }).call(this, e("543d").default, e("a9ff").default);
    },
    "6cea": function(n, t, e) {
        e.r(t);
        var r = e("2170"), o = e.n(r);
        for (var u in r) "default" !== u && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(u);
        t.default = o.a;
    },
    "8f47": function(n, t, e) {
        (function(n) {
            e("1073"), e("a9ff"), r(e("66fd"));
            var t = r(e("13f8"));
            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    "9a6f": function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return r;
        });
        var r = {
            uNavbar: function() {
                return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null, "8954"));
            },
            uForm: function() {
                return e.e("uview-ui/components/u-form/u-form").then(e.bind(null, "1476"));
            },
            uFormItem: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uview-ui/components/u-form-item/u-form-item") ]).then(e.bind(null, "88f9"));
            },
            uInput: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uview-ui/components/u-input/u-input") ]).then(e.bind(null, "2abb"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    f7d4: function(n, t, e) {}
}, [ [ "8f47", "common/runtime", "common/vendor" ] ] ]);