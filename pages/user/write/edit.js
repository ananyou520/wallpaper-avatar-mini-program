(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/write/edit" ], {
    "1a18": function(e, t, n) {
        n.r(t);
        var r = n("96d3"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    "41cc": function(e, t, n) {},
    "8fad": function(e, t, n) {
        n.r(t);
        var r = n("f10b"), o = n("1a18");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("d518");
        var u = n("f0c5"), c = Object(u.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    },
    "96d3": function(e, t, n) {
        (function(e, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function a(e, t, n, r, o, a, u) {
                try {
                    var c = e[a](u), i = c.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                c.done ? t(i) : Promise.resolve(i).then(r, o);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var u = e.apply(t, n);
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
            var c = {
                data: function() {
                    return {
                        iconStyle: {
                            fontSize: "12px",
                            color: "#D8D8D8"
                        },
                        cover: {
                            mode: 0,
                            category_id: "",
                            category_name: "",
                            color_id: "",
                            color_name: "",
                            tags: ""
                        },
                        writeExam: !0,
                        templateId: "",
                        writeShow: !1
                    };
                },
                onLoad: function() {
                    var e = this;
                    return u(o.default.mark(function t() {
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, e.getConfig();

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onShow: function() {
                    var t = this, n = e.getStorageSync("categoryId"), r = e.getStorageSync("categoryName"), o = e.getStorageSync("colorId"), a = e.getStorageSync("colorName"), u = e.getStorageSync("tags");
                    n && r && (t.cover.category_id = n, t.cover.category_name = r, e.removeStorageSync("categoryId"), 
                    e.removeStorageSync("categoryName")), o && a && (t.cover.color_id = o, t.cover.color_name = a, 
                    e.removeStorageSync("colorId"), e.removeStorageSync("colorName")), u && (t.cover.tags = u.join(","), 
                    e.removeStorageSync("tags"));
                },
                methods: {
                    getConfig: function() {
                        var e = this;
                        return u(o.default.mark(function t() {
                            var n, a;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, r.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "writeExam", "templateId" ]
                                        }
                                    });

                                  case 3:
                                    (a = t.sent).result.success && (n.writeExam = a.result.data[0], n.templateId = a.result.data[1]);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    submit: function() {
                        var t = this;
                        return u(o.default.mark(function n() {
                            var a, c, i, s, l, d, f, m, v, g, p, h, b, w, _, S;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (0 != (c = (a = t).$refs.uUpload.lists).length) {
                                        n.next = 5;
                                        break;
                                    }
                                    return a.$u.toast("请上传图片"), n.abrupt("return");

                                  case 5:
                                    if (a.cover.name) {
                                        n.next = 8;
                                        break;
                                    }
                                    return a.$u.toast("请填写主题"), n.abrupt("return");

                                  case 8:
                                    if (a.cover.category_id && a.cover.category_name) {
                                        n.next = 11;
                                        break;
                                    }
                                    return a.$u.toast("请选择分类"), n.abrupt("return");

                                  case 11:
                                    if (!a.writeExam || !a.templateId) {
                                        n.next = 15;
                                        break;
                                    }
                                    return n.next = 14, e.requestSubscribeMessage({
                                        tmplIds: [ a.templateId ]
                                    });

                                  case 14:
                                    n.sent;

                                  case 15:
                                    e.showLoading({
                                        mask: !0,
                                        title: "加载中..."
                                    }), i = [], s = 0;

                                  case 18:
                                    if (!(s < c.length)) {
                                        n.next = 35;
                                        break;
                                    }
                                    return l = c[s].url, d = l.substring(l.lastIndexOf(".") + 1), f = String(1e5 * Math.random()).split(".")[0], 
                                    m = new Date(), v = m.getFullYear(), g = m.getMonth() + 1 < 10 ? "0" + (m.getMonth() + 1) : m.getMonth() + 1, 
                                    p = m.getDate() < 10 ? "0" + m.getDate() : m.getDate(), h = m.getHours() < 10 ? "0" + m.getHours() : m.getHours(), 
                                    b = m.getMinutes() < 10 ? "0" + m.getMinutes() : m.getMinutes(), w = m.getSeconds() < 10 ? "0" + m.getSeconds() : m.getSeconds(), 
                                    _ = (0 == t.cover.mode ? "wall" : 1 == t.cover.mode ? "avatar" : 3 == t.cover.mode ? "desktop" : "") + "/" + v + "/" + g + "/" + p + "/" + h + b + w + "_" + f + "." + d, 
                                    n.next = 32, r.uploadFile({
                                        filePath: l,
                                        cloudPath: _
                                    }).then(function() {
                                        var e = u(o.default.mark(function e(t) {
                                            return o.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, r.getTempFileURL({
                                                        fileList: [ t.fileID ]
                                                    }).then(function(e) {
                                                        e.fileList.length > 0 ? i.push(e.fileList[0].tempFileURL) : a.$u.toast("图片上传失败");
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

                                  case 32:
                                    s++, n.next = 18;
                                    break;

                                  case 35:
                                    return a.cover.images = i, a.cover.image = i[0], a.cover.coll = [], a.cover.zan = [], 
                                    a.cover.view = 0, a.writeExam ? a.cover.status = 0 : a.cover.status = 1, a.cover.topic = 0, 
                                    a.cover.user_id = a.vuex_user._id, n.next = 45, r.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_cover",
                                            filter: {
                                                _id: "-1"
                                            },
                                            addData: a.cover
                                        }
                                    });

                                  case 45:
                                    S = n.sent, e.hideLoading(), S.result.success && setTimeout(function() {
                                        e.navigateBack();
                                    }, 1e3), e.showToast({
                                        icon: "none",
                                        title: S.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 49:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    cateClick: function() {
                        e.navigateTo({
                            url: "/pages/user/write/cate?mode=" + this.cover.mode
                        });
                    },
                    colorClick: function() {
                        e.navigateTo({
                            url: "/pages/user/write/color"
                        });
                    },
                    tagsClick: function() {
                        e.navigateTo({
                            url: "/pages/user/write/tags"
                        });
                    },
                    radioGroupChange: function(e) {
                        this.cover.mode = parseInt(e);
                    }
                }
            };
            t.default = c;
        }).call(this, n("543d").default, n("a9ff").default);
    },
    d518: function(e, t, n) {
        var r = n("41cc");
        n.n(r).a;
    },
    dbb4: function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), r(n("66fd"));
            var t = r(n("8fad"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    f10b: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
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
            },
            uRadioGroup: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uview-ui/components/u-radio-group/u-radio-group") ]).then(n.bind(null, "3486"));
            },
            uRadio: function() {
                return n.e("uview-ui/components/u-radio/u-radio").then(n.bind(null, "adff"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
}, [ [ "dbb4", "common/runtime", "common/vendor" ] ] ]);