(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/write/tags" ], {
    6294: function(t, n, e) {
        var a = e("b0e6");
        e.n(a).a;
    },
    "62db": function(t, n, e) {
        e.r(n);
        var a = e("d02e"), u = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = u.a;
    },
    a857: function(t, n, e) {
        e.r(n);
        var a = e("b45b"), u = e("62db");
        for (var r in u) "default" !== r && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(r);
        e("6294");
        var i = e("f0c5"), o = Object(i.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = o.exports;
    },
    b0e6: function(t, n, e) {},
    b45b: function(t, n, e) {
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
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    d02e: function(t, n, e) {
        (function(t, a) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var u = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("a34a"));
            function r(t, n, e, a, u, r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void e(t);
                }
                o.done ? n(s) : Promise.resolve(s).then(a, u);
            }
            var i = {
                data: function() {
                    return {
                        tagsList: [],
                        tag: "",
                        tags: []
                    };
                },
                onLoad: function() {
                    this.getTagsList();
                },
                methods: {
                    getTagsList: function() {
                        var n = this;
                        return function(t) {
                            return function() {
                                var n = this, e = arguments;
                                return new Promise(function(a, u) {
                                    var i = t.apply(n, e);
                                    function o(t) {
                                        r(i, a, u, o, s, "next", t);
                                    }
                                    function s(t) {
                                        r(i, a, u, o, s, "throw", t);
                                    }
                                    o(void 0);
                                });
                            };
                        }(u.default.mark(function e() {
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
                                    0 === (r = e.sent).result.data.length && (n.noData = !0), a.tagsList = r.result.data;

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    tagsClick: function(t) {
                        this.tags.length < 3 ? -1 == this.tags.indexOf(t) ? this.tags.push(t) : this.$u.toast("该标签已选择") : this.$u.toast("最多设置3个标签");
                    },
                    removeClick: function(t) {
                        for (var n = [], e = 0; e < this.tags.length; e++) this.tags[e] != t && n.push(this.tags[e]);
                        this.tags = n;
                    },
                    submit: function() {
                        a.setStorageSync("tags", this.tags), a.navigateBack();
                    }
                }
            };
            n.default = i;
        }).call(this, e("a9ff").default, e("543d").default);
    },
    d947: function(t, n, e) {
        (function(t) {
            e("1073"), e("a9ff"), a(e("66fd"));
            var n = a(e("a857"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "d947", "common/runtime", "common/vendor" ] ] ]);