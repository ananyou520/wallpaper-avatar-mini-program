(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/notice/noticeEdit" ], {
    "104b": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return u;
        });
        var u = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            },
            uForm: function() {
                return n.e("uview-ui/components/u-form/u-form").then(n.bind(null, "1476"));
            },
            uFormItem: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-form-item/u-form-item") ]).then(n.bind(null, "88f9"));
            },
            uInput: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-input/u-input") ]).then(n.bind(null, "2abb"));
            }
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "596c": function(e, t, n) {
        n.r(t);
        var u = n("104b"), r = n("91d4");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("c003");
        var i = n("f0c5"), a = Object(i.a)(r.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = a.exports;
    },
    "5ad8": function(e, t, n) {},
    "91ac": function(e, t, n) {
        (function(e, u) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function o(e, t, n, u, r, o, i) {
                try {
                    var a = e[o](i), c = a.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                a.done ? t(c) : Promise.resolve(c).then(u, r);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(u, r) {
                        var i = e.apply(t, n);
                        function a(e) {
                            o(i, u, r, a, c, "next", e);
                        }
                        function c(e) {
                            o(i, u, r, a, c, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            var a = {
                data: function() {
                    return {
                        noticeId: "",
                        noticeType: 0,
                        notice: {},
                        newnotice: {}
                    };
                },
                onLoad: function(e) {
                    var t = this;
                    return i(r.default.mark(function n() {
                        var u, o;
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                u = e.id, (o = t).noticeId = u, "-1" != u && o.getnotice(u);

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    getnotice: function(t) {
                        var n = this;
                        return i(r.default.mark(function u() {
                            var o;
                            return r.default.wrap(function(u) {
                                for (;;) switch (u.prev = u.next) {
                                  case 0:
                                    return u.next = 2, e.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_notice",
                                            id: t
                                        }
                                    });

                                  case 2:
                                    delete (o = u.sent).result._id, n.notice = o.result, n.noticeType = o.result.type ? o.result.type : 0, 
                                    console.log(n.noticeType), n.newnotice = JSON.stringify(o.result);

                                  case 8:
                                  case "end":
                                    return u.stop();
                                }
                            }, u);
                        }))();
                    },
                    submit: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var o, i;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (1 !== (o = t).noticeType || o.notice.url) {
                                        n.next = 4;
                                        break;
                                    }
                                    return o.$u.toast("请填写跳转路径"), n.abrupt("return");

                                  case 4:
                                    if ("-1" == o.noticeId || JSON.stringify(o.notice) !== o.newnotice) {
                                        n.next = 7;
                                        break;
                                    }
                                    return o.$u.toast("请修改内容后再提交"), n.abrupt("return");

                                  case 7:
                                    return u.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), o.notice.name = o.notice.name, o.notice.type = parseInt(o.noticeType), n.next = 12, 
                                    e.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_notice",
                                            filter: {
                                                _id: o.noticeId
                                            },
                                            addData: o.notice,
                                            upData: o.notice
                                        }
                                    });

                                  case 12:
                                    (i = n.sent).result.success && (setTimeout(function() {
                                        u.navigateBack();
                                    }, 1e3), u.setStorageSync("update_flag", 1)), u.showToast({
                                        icon: "none",
                                        title: i.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 15:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    chooseImage: function() {
                        this.$u.route({
                            url: "/uview-ui/components/u-avatar-cropper/u-avatar-cropper",
                            params: {
                                rectWidth: 350,
                                rectHeight: 146,
                                destWidth: 700,
                                destHeight: 294,
                                fileType: "jpg"
                            }
                        });
                    },
                    delImage: function(e) {
                        this.imgPath = "";
                    },
                    radioGroupChange: function(e) {
                        this.noticeType = parseInt(e);
                    }
                }
            };
            t.default = a;
        }).call(this, n("a9ff").default, n("543d").default);
    },
    "91d4": function(e, t, n) {
        n.r(t);
        var u = n("91ac"), r = n.n(u);
        for (var o in u) "default" !== o && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(o);
        t.default = r.a;
    },
    b146: function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), u(n("66fd"));
            var t = u(n("596c"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    c003: function(e, t, n) {
        var u = n("5ad8");
        n.n(u).a;
    }
}, [ [ "b146", "common/runtime", "common/vendor" ] ] ]);