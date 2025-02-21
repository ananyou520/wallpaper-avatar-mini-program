(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/indexmenu/menuEdit" ], {
    "0179": function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), u(n("66fd"));
            var t = u(n("587c"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "587c": function(e, t, n) {
        n.r(t);
        var u = n("c5ae"), r = n("ed56");
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        n("a61f");
        var i = n("f0c5"), o = Object(i.a)(r.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = o.exports;
    },
    "67b8": function(e, t, n) {},
    a61f: function(e, t, n) {
        var u = n("67b8");
        n.n(u).a;
    },
    c5ae: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
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
            uUpload: function() {
                return n.e("uview-ui/components/u-upload/u-upload").then(n.bind(null, "b5c8"));
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
        }, a = [];
    },
    cdb9: function(e, t, n) {
        (function(e, u) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function a(e, t, n, u, r, a, i) {
                try {
                    var o = e[a](i), s = o.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                o.done ? t(s) : Promise.resolve(s).then(u, r);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(u, r) {
                        var i = e.apply(t, n);
                        function o(e) {
                            a(i, u, r, o, s, "next", e);
                        }
                        function s(e) {
                            a(i, u, r, o, s, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        menuId: "",
                        menu: {},
                        newmenu: {},
                        imgList: []
                    };
                },
                onLoad: function(e) {
                    var t = this;
                    return i(r.default.mark(function n() {
                        var u, a;
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                u = e.id, (a = t).menuId = u, "-1" != u && a.getmenu(u);

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    getmenu: function(t) {
                        var n = this;
                        return i(r.default.mark(function u() {
                            var a;
                            return r.default.wrap(function(u) {
                                for (;;) switch (u.prev = u.next) {
                                  case 0:
                                    return u.next = 2, e.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_index",
                                            id: t
                                        }
                                    });

                                  case 2:
                                    a = u.sent, n.imgList.push({
                                        url: a.result.image
                                    }), delete a.result._id, n.menu = a.result, n.newmenu = JSON.stringify(a.result);

                                  case 7:
                                  case "end":
                                    return u.stop();
                                }
                            }, u);
                        }))();
                    },
                    submit: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a, o, s, c, l, f, d, m, p, g, v, h, b, w;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (0 !== (o = (a = t).$refs.uUpload.lists).length) {
                                        n.next = 5;
                                        break;
                                    }
                                    return a.$u.toast("请上传菜单图标"), n.abrupt("return");

                                  case 5:
                                    if (a.menu.name) {
                                        n.next = 8;
                                        break;
                                    }
                                    return a.$u.toast("请填写标题"), n.abrupt("return");

                                  case 8:
                                    if (a.menu.sort) {
                                        n.next = 11;
                                        break;
                                    }
                                    return a.$u.toast("请填写菜单排序"), n.abrupt("return");

                                  case 11:
                                    if ("-1" == a.menuId || !a.imgList[0] || o[0].url !== a.imgList[0].url || JSON.stringify(a.menu) !== a.newmenu) {
                                        n.next = 14;
                                        break;
                                    }
                                    return a.$u.toast("请修改内容后再提交"), n.abrupt("return");

                                  case 14:
                                    if (u.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), !("-1" == a.menuId || o.length > 0 && a.imgList[0] && o[0].url != a.imgList[0].url)) {
                                        n.next = 29;
                                        break;
                                    }
                                    return s = o[0].url, c = s.substring(s.lastIndexOf(".") + 1), l = String(1e5 * Math.random()).split(".")[0], 
                                    f = new Date(), d = f.getFullYear(), m = f.getMonth() + 1 < 10 ? "0" + (f.getMonth() + 1) : f.getMonth() + 1, 
                                    p = f.getDate() < 10 ? "0" + f.getDate() : f.getDate(), g = f.getHours() < 10 ? "0" + f.getHours() : f.getHours(), 
                                    v = f.getMinutes() < 10 ? "0" + f.getMinutes() : f.getMinutes(), h = f.getSeconds() < 10 ? "0" + f.getSeconds() : f.getSeconds(), 
                                    b = "menu_" + d + m + p + g + v + h + "_" + l + "." + c, n.next = 29, e.uploadFile({
                                        filePath: s,
                                        cloudPath: b
                                    }).then(function() {
                                        var t = i(r.default.mark(function t(n) {
                                            return r.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    return console.log(n), t.next = 3, e.getTempFileURL({
                                                        fileList: [ n.fileID ]
                                                    }).then(function(e) {
                                                        console.log(e), e.fileList.length > 0 ? a.menu.image = e.fileList[0].tempFileURL : a.$u.toast("图片上传失败");
                                                    });

                                                  case 3:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }());

                                  case 29:
                                    return a.menu.name = a.menu.name, a.menu.sort = parseInt(a.menu.sort), n.next = 33, 
                                    e.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_index",
                                            filter: {
                                                _id: a.menuId
                                            },
                                            addData: a.menu,
                                            upData: a.menu
                                        }
                                    });

                                  case 33:
                                    (w = n.sent).result.success && (setTimeout(function() {
                                        u.navigateBack();
                                    }, 1e3), u.setStorageSync("update_flag", 1)), u.showToast({
                                        icon: "none",
                                        title: w.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 36:
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
                    }
                }
            };
            t.default = o;
        }).call(this, n("a9ff").default, n("543d").default);
    },
    ed56: function(e, t, n) {
        n.r(t);
        var u = n("cdb9"), r = n.n(u);
        for (var a in u) "default" !== a && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(a);
        t.default = r.a;
    }
}, [ [ "0179", "common/runtime", "common/vendor" ] ] ]);