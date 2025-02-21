(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/system/banner/bannerEdit" ], {
    7020: function(e, n, t) {},
    9552: function(e, n, t) {
        (function(e, r) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var u = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a34a"));
            function a(e, n, t, r, u, a, i) {
                try {
                    var o = e[a](i), s = o.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void t(e);
                }
                o.done ? n(s) : Promise.resolve(s).then(r, u);
            }
            function i(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(r, u) {
                        var i = e.apply(n, t);
                        function o(e) {
                            a(i, r, u, o, s, "next", e);
                        }
                        function s(e) {
                            a(i, r, u, o, s, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        bannerId: "",
                        bannerType: 0,
                        banner: {},
                        newBanner: {},
                        imgList: []
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    return i(u.default.mark(function t() {
                        var r, a;
                        return u.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                r = e.id, (a = n).bannerId = r, "-1" != r && a.getBanner(r);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    getBanner: function(n) {
                        var t = this;
                        return i(u.default.mark(function r() {
                            var a;
                            return u.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, e.callFunction({
                                        name: "query_map",
                                        data: {
                                            dbName: "app_banner",
                                            id: n
                                        }
                                    });

                                  case 2:
                                    a = r.sent, t.imgList.push({
                                        url: a.result.image
                                    }), delete a.result._id, t.banner = a.result, t.bannerType = a.result.type ? a.result.type : 0, 
                                    console.log(t.bannerType), t.newBanner = JSON.stringify(a.result);

                                  case 9:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    submit: function() {
                        var n = this;
                        return i(u.default.mark(function t() {
                            var a, o, s, c, l, f, d, p, b, m, g, h, v, w;
                            return u.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (0 !== (o = (a = n).$refs.uUpload.lists).length) {
                                        t.next = 5;
                                        break;
                                    }
                                    return a.$u.toast("请上传轮播图"), t.abrupt("return");

                                  case 5:
                                    if (0 !== a.bannerType || a.banner.url) {
                                        t.next = 8;
                                        break;
                                    }
                                    return a.$u.toast("请填写跳转路径"), t.abrupt("return");

                                  case 8:
                                    if (!(1 === a.bannerType && !a.banner.appid | !a.banner.path)) {
                                        t.next = 11;
                                        break;
                                    }
                                    return a.$u.toast("请填写完整小程序跳转路径"), t.abrupt("return");

                                  case 11:
                                    if (a.banner.sort) {
                                        t.next = 14;
                                        break;
                                    }
                                    return a.$u.toast("请填写轮播图排序"), t.abrupt("return");

                                  case 14:
                                    if ("-1" == a.bannerId || !a.imgList[0] || o[0].url !== a.imgList[0].url || JSON.stringify(a.banner) !== a.newBanner) {
                                        t.next = 17;
                                        break;
                                    }
                                    return a.$u.toast("请修改内容后再提交"), t.abrupt("return");

                                  case 17:
                                    if (r.showLoading({
                                        mask: !0,
                                        title: "正在拼命加载中..."
                                    }), !("-1" == a.bannerId || o.length > 0 && a.imgList[0] && o[0].url != a.imgList[0].url)) {
                                        t.next = 32;
                                        break;
                                    }
                                    return s = o[0].url, c = s.substring(s.lastIndexOf(".") + 1), l = String(1e5 * Math.random()).split(".")[0], 
                                    f = new Date(), d = f.getFullYear(), p = f.getMonth() + 1 < 10 ? "0" + (f.getMonth() + 1) : f.getMonth() + 1, 
                                    b = f.getDate() < 10 ? "0" + f.getDate() : f.getDate(), m = f.getHours() < 10 ? "0" + f.getHours() : f.getHours(), 
                                    g = f.getMinutes() < 10 ? "0" + f.getMinutes() : f.getMinutes(), h = f.getSeconds() < 10 ? "0" + f.getSeconds() : f.getSeconds(), 
                                    v = "banner_" + d + p + b + m + g + h + "_" + l + "." + c, t.next = 32, e.uploadFile({
                                        filePath: s,
                                        cloudPath: v
                                    }).then(function() {
                                        var n = i(u.default.mark(function n(t) {
                                            return u.default.wrap(function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                  case 0:
                                                    return console.log(t), n.next = 3, e.getTempFileURL({
                                                        fileList: [ t.fileID ]
                                                    }).then(function(e) {
                                                        console.log(e), e.fileList.length > 0 ? a.banner.image = e.fileList[0].tempFileURL : a.$u.toast("图片上传失败");
                                                    });

                                                  case 3:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            }, n);
                                        }));
                                        return function(e) {
                                            return n.apply(this, arguments);
                                        };
                                    }());

                                  case 32:
                                    return a.banner.sort = parseInt(a.banner.sort), a.banner.type = parseInt(a.bannerType), 
                                    t.next = 36, e.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_banner",
                                            filter: {
                                                _id: a.bannerId
                                            },
                                            addData: a.banner,
                                            upData: a.banner
                                        }
                                    });

                                  case 36:
                                    (w = t.sent).result.success && (setTimeout(function() {
                                        r.navigateBack();
                                    }, 1e3), r.setStorageSync("update_flag", 1)), r.showToast({
                                        icon: "none",
                                        title: w.result.msg,
                                        mask: !0,
                                        duration: 1e3
                                    });

                                  case 39:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
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
                        this.bannerType = parseInt(e);
                    }
                }
            };
            n.default = o;
        }).call(this, t("a9ff").default, t("543d").default);
    },
    9619: function(e, n, t) {
        var r = t("7020");
        t.n(r).a;
    },
    d364: function(e, n, t) {
        t.r(n);
        var r = t("9552"), u = t.n(r);
        for (var a in r) "default" !== a && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        n.default = u.a;
    },
    e5fb: function(e, n, t) {
        t.d(n, "b", function() {
            return u;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {
            return r;
        });
        var r = {
            uNavbar: function() {
                return t.e("uview-ui/components/u-navbar/u-navbar").then(t.bind(null, "8954"));
            },
            uForm: function() {
                return t.e("uview-ui/components/u-form/u-form").then(t.bind(null, "1476"));
            },
            uUpload: function() {
                return t.e("uview-ui/components/u-upload/u-upload").then(t.bind(null, "b5c8"));
            },
            uFormItem: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-form-item/u-form-item") ]).then(t.bind(null, "88f9"));
            },
            uRadioGroup: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-radio-group/u-radio-group") ]).then(t.bind(null, "3486"));
            },
            uRadio: function() {
                return t.e("uview-ui/components/u-radio/u-radio").then(t.bind(null, "adff"));
            },
            uInput: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uview-ui/components/u-input/u-input") ]).then(t.bind(null, "2abb"));
            }
        }, u = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    f13c: function(e, n, t) {
        t.r(n);
        var r = t("e5fb"), u = t("d364");
        for (var a in u) "default" !== a && function(e) {
            t.d(n, e, function() {
                return u[e];
            });
        }(a);
        t("9619");
        var i = t("f0c5"), o = Object(i.a)(u.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = o.exports;
    },
    f6ca: function(e, n, t) {
        (function(e) {
            t("1073"), t("a9ff"), r(t("66fd"));
            var n = r(t("f13c"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "f6ca", "common/runtime", "common/vendor" ] ] ]);