(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/userinfo/userinfo" ], {
    3039: function(t, e, n) {
        (function(t, u) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a, r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a"));
            function i(t, e, n, u, a, r, i) {
                try {
                    var o = t[r](i), s = o.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void n(t);
                }
                o.done ? e(s) : Promise.resolve(s).then(u, a);
            }
            function o(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(u, a) {
                        var r = t.apply(e, n);
                        function o(t) {
                            i(r, u, a, o, s, "next", t);
                        }
                        function s(t) {
                            i(r, u, a, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        avatarUrl: "",
                        inputValue: "",
                        userInfo: {}
                    };
                },
                onLoad: function() {
                    a = this, this.avatarUrl = this.vuex_user.avatar, this.inputValue = this.vuex_user.name, 
                    this.userInfo = this.vuex_user;
                },
                methods: {
                    tapTo: function() {
                        this.avatarUrl ? this.inputValue ? this.submit() : this.$u.toast("请输入昵称~") : this.$u.toast("请上传用户头像~");
                    },
                    onChooseAvatar: function(e) {
                        return o(r.default.mark(function n() {
                            var u, i, s, f, c, l, d, v, h, p, g;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return u = e.detail.avatarUrl, i = u.substring(u.lastIndexOf(".") + 1), s = String(1e5 * Math.random()).split(".")[0], 
                                    f = new Date(), c = f.getFullYear(), l = f.getMonth() + 1 < 10 ? "0" + (f.getMonth() + 1) : f.getMonth() + 1, 
                                    d = f.getDate() < 10 ? "0" + f.getDate() : f.getDate(), v = f.getHours() < 10 ? "0" + f.getHours() : f.getHours(), 
                                    h = f.getMinutes() < 10 ? "0" + f.getMinutes() : f.getMinutes(), p = f.getSeconds() < 10 ? "0" + f.getSeconds() : f.getSeconds(), 
                                    g = "avatar_" + c + l + d + v + h + p + "_" + s + "." + i, n.next = 13, t.uploadFile({
                                        filePath: u,
                                        cloudPath: g
                                    }).then(function() {
                                        var e = o(r.default.mark(function e(n) {
                                            return r.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, t.getTempFileURL({
                                                        fileList: [ n.fileID ]
                                                    }).then(function(t) {
                                                        t.fileList.length > 0 ? a.avatarUrl = t.fileList[0].tempFileURL : a.$u.toast("图片上传失败");
                                                    });

                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }());

                                  case 13:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getInput: function(t) {
                        this.inputValue = t.detail.value;
                    },
                    submit: function() {
                        var e = this;
                        return o(r.default.mark(function n() {
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.callFunction({
                                        name: "name",
                                        data: {
                                            name: a.inputValue,
                                            avatar: a.avatarUrl,
                                            openid: a.vuex_user.openid
                                        },
                                        success: function(t) {
                                            t.result.success && (e.userInfo.avatar = e.avatarUrl, e.userInfo.name = e.inputValue, 
                                            a.$u.vuex("name", e.userInfo), u.showToast({
                                                title: t.result.msg
                                            }), setTimeout(function() {
                                                u.navigateBack();
                                            }, 500));
                                        }
                                    });

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = s;
        }).call(this, n("a9ff").default, n("543d").default);
    },
    3570: function(t, e, n) {
        n.r(e);
        var u = n("3039"), a = n.n(u);
        for (var r in u) "default" !== r && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(r);
        e.default = a.a;
    },
    "374e": function(t, e, n) {
        var u = n("95a2");
        n.n(u).a;
    },
    "95a2": function(t, e, n) {},
    e3660: function(t, e, n) {
        (function(t) {
            n("1073"), n("a9ff"), u(n("66fd"));
            var e = u(n("fcb1"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    fbce: function(t, e, n) {
        n.d(e, "b", function() {
            return u;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var u = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    fcb1: function(t, e, n) {
        n.r(e);
        var u = n("fbce"), a = n("3570");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("374e");
        var i = n("f0c5"), o = Object(i.a)(a.default, u.b, u.c, !1, null, "3fc7e54b", null, !1, u.a, void 0);
        e.default = o.exports;
    }
}, [ [ "e3660", "common/runtime", "common/vendor" ] ] ]);