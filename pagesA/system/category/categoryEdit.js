(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/category/categoryEdit" ], {
    "0402": function(t, e, n) {
        n.r(e);
        var r = n("f20b"), a = n("b0d1");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("7b6b");
        var o = n("f0c5"), i = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = i.exports;
    },
    "628a": function(t, e, n) {
        (function(t, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a"));
            function u(t, e, n, r, a, u, o) {
                try {
                    var i = t[u](o), c = i.value;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return void n(t);
                }
                i.done ? e(c) : Promise.resolve(c).then(r, a);
            }
            function o(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = t.apply(e, n);
                        function i(t) {
                            u(o, r, a, i, c, "next", t);
                        }
                        function c(t) {
                            u(o, r, a, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        categoryId: "",
                        imgList: [],
                        category: {},
                        newCategory: {},
                        current: 0
                    };
                },
                computed: {
                    option: function() {
                        return [ {
                            mode: 0,
                            name: "壁纸",
                            checked: !0
                        }, {
                            mode: 1,
                            name: "头像"
                        }, {
                            mode: 3,
                            name: "电脑"
                        } ];
                    }
                },
                created: function() {
                    var e = this;
                    t.$on("uAvatarCropper", function(t) {
                        e.imgPath = t;
                    });
                },
                onLoad: function(t) {
                    var e = this;
                    return o(a.default.mark(function n() {
                        var r, u;
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                r = t.id, (u = e).categoryId = r, "-1" != r && u.getCategory(r);

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                methods: {
                    radioChange: function(t) {
                        for (var e = 0; e < this.option.length; e++) if (this.option[e].mode == t.detail.value) {
                            this.current = e;
                            break;
                        }
                    },
                    getCategory: function(t) {
                        var e = this;
                        return o(a.default.mark(function n() {
                            var u;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, r.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_category",
                                            id: t
                                        }
                                    });

                                  case 2:
                                    u = n.sent, e.imgList.push({
                                        url: u.result.image
                                    }), delete u.result._id, e.category = u.result, e.newCategory = JSON.stringify(u.result), 
                                    e.current = u.result.mode || 0;

                                  case 8:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    submit: function() {
                        var e = this;
                        return o(a.default.mark(function n() {
                            var u, i, c, s, f, l, d, g, m, p, h, v, b, y;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (0 !== (i = (u = e).$refs.uUpload.lists).length) {
                                        n.next = 5;
                                        break;
                                    }
                                    return u.$u.toast("请上传分类封面"), n.abrupt("return");

                                  case 5:
                                    if (u.category.name) {
                                        n.next = 8;
                                        break;
                                    }
                                    return u.$u.toast("请填写分类名称"), n.abrupt("return");

                                  case 8:
                                    if (u.category.sort) {
                                        n.next = 11;
                                        break;
                                    }
                                    return u.$u.toast("请填写分类排序"), n.abrupt("return");

                                  case 11:
                                    if ("-1" == u.categoryId || i[0].url !== u.imgList[0].url || JSON.stringify(u.category) !== u.newCategory || e.category.mode !== e.option[e.current].mode) {
                                        n.next = 14;
                                        break;
                                    }
                                    return u.$u.toast("请修改内容后再提交"), n.abrupt("return");

                                  case 14:
                                    if (t.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), !("-1" == u.categoryId || i.length > 0 && i[0].url != u.imgList[0].url)) {
                                        n.next = 29;
                                        break;
                                    }
                                    return c = i[0].url, s = c.substring(c.lastIndexOf(".") + 1), f = String(1e5 * Math.random()).split(".")[0], 
                                    l = new Date(), d = l.getFullYear(), g = l.getMonth() + 1 < 10 ? "0" + (l.getMonth() + 1) : l.getMonth() + 1, 
                                    m = l.getDate() < 10 ? "0" + l.getDate() : l.getDate(), p = l.getHours() < 10 ? "0" + l.getHours() : l.getHours(), 
                                    h = l.getMinutes() < 10 ? "0" + l.getMinutes() : l.getMinutes(), v = l.getSeconds() < 10 ? "0" + l.getSeconds() : l.getSeconds(), 
                                    b = "category_" + d + g + m + p + h + v + "_" + f + "." + s, n.next = 29, r.uploadFile({
                                        filePath: c,
                                        cloudPath: b
                                    }).then(function() {
                                        var t = o(a.default.mark(function t(e) {
                                            return a.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                  case 0:
                                                    return t.next = 2, r.getTempFileURL({
                                                        fileList: [ e.fileID ]
                                                    }).then(function(t) {
                                                        t.fileList.length > 0 ? u.category.image = t.fileList[0].tempFileURL : u.$u.toast("图片上传失败");
                                                    });

                                                  case 2:
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
                                    return u.category.sort = parseInt(u.category.sort), console.log(u.option[e.current].mode), 
                                    u.category.mode = parseInt(u.option[e.current].mode), n.next = 34, r.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_category",
                                            filter: {
                                                _id: u.categoryId
                                            },
                                            addData: u.category,
                                            upData: u.category
                                        }
                                    });

                                  case 34:
                                    (y = n.sent).result.success && (setTimeout(function() {
                                        t.navigateBack();
                                    }, 1e3), t.setStorageSync("update_flag", 1)), t.showToast({
                                        icon: "none",
                                        title: y.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 37:
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
                                rectHeight: 175,
                                destWidth: 350,
                                destHeight: 175,
                                fileType: "jpg"
                            }
                        });
                    },
                    delImage: function(t) {
                        this.imgPath = "";
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d").default, n("a9ff").default);
    },
    "7b6b": function(t, e, n) {
        var r = n("8eb9");
        n.n(r).a;
    },
    "8eb9": function(t, e, n) {},
    b0d1: function(t, e, n) {
        n.r(e);
        var r = n("628a"), a = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e.default = a.a;
    },
    f20b: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return r;
        });
        var r = {
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
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    f6a7: function(t, e, n) {
        (function(t) {
            n("1073"), n("a9ff"), r(n("66fd"));
            var e = r(n("0402"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "f6a7", "common/runtime", "common/vendor" ] ] ]);