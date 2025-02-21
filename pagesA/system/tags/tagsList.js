(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/tags/tagsList" ], {
    "064c": function(t, n, e) {},
    4626: function(t, n, e) {
        (function(t) {
            e("1073"), e("a9ff"), a(e("66fd"));
            var n = a(e("7f0d"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    "5bf6": function(t, n, e) {
        var a = e("064c");
        e.n(a).a;
    },
    "5c9e": function(t, n, e) {
        (function(t, a) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var u = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("a34a"));
            function r(t, n, e, a, u, r, o) {
                try {
                    var i = t[r](o), s = i.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void e(t);
                }
                i.done ? n(s) : Promise.resolve(s).then(a, u);
            }
            function o(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(a, u) {
                        var o = t.apply(n, e);
                        function i(t) {
                            r(o, a, u, i, s, "next", t);
                        }
                        function s(t) {
                            r(o, a, u, i, s, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        tagsList: [],
                        noData: !1,
                        tagsShow: !1,
                        tagsName: ""
                    };
                },
                onLoad: function() {
                    this.getTagsList();
                },
                methods: {
                    getTagsList: function() {
                        var n = this;
                        return o(u.default.mark(function e() {
                            var a, r;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return a = n, e.next = 3, t.callFunction({
                                        name: "query_list",
                                        data: {
                                            dbName: "app_tags",
                                            order: {
                                                name: "time",
                                                type: "asc"
                                            },
                                            pageIndex: 1,
                                            pageSize: 100
                                        }
                                    });

                                  case 3:
                                    0 === (r = e.sent).result.data.length ? a.noData = !0 : a.noData = !1, a.tagsList = r.result.data;

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    addClick: function() {
                        this.tagsShow = !0;
                    },
                    tagsChange: function() {
                        var n = this;
                        return o(u.default.mark(function e() {
                            var r, o, i;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (o = (r = n).tagsName, r.tagsName = "", o) {
                                        e.next = 7;
                                        break;
                                    }
                                    return r.$refs.uModal.clearLoading(), r.$u.toast("请填写标签名称"), e.abrupt("return");

                                  case 7:
                                    return a.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), e.next = 10, t.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_tags",
                                            filter: {
                                                _id: "-1"
                                            },
                                            addData: {
                                                name: o
                                            }
                                        }
                                    });

                                  case 10:
                                    i = e.sent, r.tagsShow = !1, i.result.success && r.getTagsList(), a.showToast({
                                        icon: "none",
                                        title: i.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    removeClick: function(n) {
                        var e = this;
                        a.showModal({
                            title: "删除提示",
                            content: "确定删除当前标签吗？",
                            confirmText: "删除",
                            confirmColor: "#ff0000",
                            success: function() {
                                var r = o(u.default.mark(function r(o) {
                                    var i;
                                    return u.default.wrap(function(u) {
                                        for (;;) switch (u.prev = u.next) {
                                          case 0:
                                            if (!o.confirm) {
                                                u.next = 7;
                                                break;
                                            }
                                            return a.showLoading({
                                                mask: !0,
                                                title: "删除中..."
                                            }), u.next = 4, t.callFunction({
                                                name: "query_del",
                                                data: {
                                                    dbName: "app_tags",
                                                    filter: {
                                                        _id: n
                                                    }
                                                }
                                            });

                                          case 4:
                                            (i = u.sent).result.success && e.getTagsList(), a.showToast({
                                                icon: "none",
                                                title: i.result.msg,
                                                mask: !0,
                                                duration: 1e3
                                            });

                                          case 7:
                                          case "end":
                                            return u.stop();
                                        }
                                    }, r);
                                }));
                                return function(t) {
                                    return r.apply(this, arguments);
                                };
                            }()
                        });
                    }
                }
            };
            n.default = i;
        }).call(this, e("a9ff").default, e("543d").default);
    },
    "7acd": function(t, n, e) {
        e.r(n);
        var a = e("5c9e"), u = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = u.a;
    },
    "7f0d": function(t, n, e) {
        e.r(n);
        var a = e("8934"), u = e("7acd");
        for (var r in u) "default" !== r && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(r);
        e("5bf6");
        var o = e("f0c5"), i = Object(o.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = i.exports;
    },
    8934: function(t, n, e) {
        e.d(n, "b", function() {
            return u;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {
            return a;
        });
        var a = {
            uNavbar: function() {
                return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null, "8954"));
            },
            uTag: function() {
                return e.e("uview-ui/components/u-tag/u-tag").then(e.bind(null, "8603"));
            },
            uModal: function() {
                return e.e("uview-ui/components/u-modal/u-modal").then(e.bind(null, "03d9"));
            },
            uInput: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uview-ui/components/u-input/u-input") ]).then(e.bind(null, "2abb"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    }
}, [ [ "4626", "common/runtime", "common/vendor" ] ] ]);