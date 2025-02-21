(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/write/caiji" ], {
    "0e6d": function(e, t, n) {
        (function(e, a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function o(e, t, n, a, r, o, u) {
                try {
                    var i = e[o](u), c = i.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                i.done ? t(c) : Promise.resolve(c).then(a, r);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, r) {
                        var u = e.apply(t, n);
                        function i(e) {
                            o(u, a, r, i, c, "next", e);
                        }
                        function c(e) {
                            o(u, a, r, i, c, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
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
                            tags: "",
                            url: ""
                        },
                        writeExam: !0,
                        templateId: "",
                        writeShow: !1,
                        caijiyuming: "",
                        imgs: [],
                        data: {},
                        imgs2: []
                    };
                },
                onLoad: function() {
                    var e = this;
                    return u(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
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
                    var t = this;
                    e.getClipboardData({
                        success: function(e) {
                            console.log(e), t.cover.url = e.data;
                        }
                    });
                    var n = e.getStorageSync("categoryId"), a = e.getStorageSync("categoryName"), r = e.getStorageSync("tags");
                    n && a && (t.cover.category_id = n, t.cover.category_name = a, e.removeStorageSync("categoryId"), 
                    e.removeStorageSync("categoryName")), r && (t.cover.tags = r.join(","), e.removeStorageSync("tags"));
                },
                methods: {
                    getConfig: function() {
                        var e = this;
                        return u(r.default.mark(function t() {
                            var n, o;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, a.callFunction({
                                        name: "config_map",
                                        data: {
                                            keys: [ "writeExam", "templateId", "caijiyuming" ]
                                        }
                                    });

                                  case 3:
                                    (o = t.sent).result.success && (n.writeExam = o.result.data[0], n.templateId = o.result.data[1], 
                                    n.caijiyuming = o.result.data[2]);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    qingkong: function() {
                        var e = this;
                        return u(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    e.cover.url = "", e.$refs.uUpload.lists = [], e.cover = {
                                        mode: 0,
                                        category_id: "",
                                        category_name: "",
                                        tags: "",
                                        url: "",
                                        name: ""
                                    }, console.log("清空");

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    zhantie: function() {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    a = t, e.getClipboardData({
                                        success: function(e) {
                                            console.log(e), a.cover.url = e.data;
                                        }
                                    });

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    caiji: function() {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    a = t, e.showLoading({
                                        title: "采集中..."
                                    }), e.request({
                                        header: {
                                            "Content-type": "application/x-www-form-urlencoded"
                                        },
                                        url: a.caijiyuming + "/bzcj/cj",
                                        method: "POST",
                                        dataType: "json",
                                        data: {
                                            wurl: a.cover.url,
                                            category_id: a.cover.category_id,
                                            category_name: a.cover.category_name,
                                            tags: a.cover.tags
                                        },
                                        success: function(t) {
                                            if (null != t.data.name) {
                                                var n = 0;
                                                a.data = t.data, a.cover.name = t.data.name, a.cover.view = t.data.view;
                                                for (var r = 0; r < a.data.images.length; r++) e.getImageInfo({
                                                    src: t.data.images[r],
                                                    success: function(t) {
                                                        n++, a.imgs.push(t.path), a.$refs.uUpload.lists.push({
                                                            error: !1,
                                                            file: "a",
                                                            progress: 0,
                                                            url: t.path
                                                        }), n == a.data.images.length && (console.log("采集完毕"), e.hideLoading());
                                                    },
                                                    fail: function() {
                                                        e.showToast({
                                                            icon: "loading",
                                                            title: "失败"
                                                        });
                                                    }
                                                });
                                            } else console.log("失败了哈哈哈"), a.$u.toast("内部错误");
                                        },
                                        fail: function() {
                                            e.showToast({
                                                icon: "loading",
                                                title: "网络请求失败"
                                            });
                                        }
                                    });

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    submit: function() {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var o, i, c, s, l, d, f, g, m, v, p, h, w, b, _, y;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (0 != (i = (o = t).$refs.uUpload.lists).length) {
                                        n.next = 5;
                                        break;
                                    }
                                    return o.$u.toast("请上传图片"), n.abrupt("return");

                                  case 5:
                                    if (o.cover.name) {
                                        n.next = 8;
                                        break;
                                    }
                                    return o.$u.toast("请填写主题"), n.abrupt("return");

                                  case 8:
                                    if (o.cover.category_id && o.cover.category_name) {
                                        n.next = 11;
                                        break;
                                    }
                                    return o.$u.toast("请选择分类"), n.abrupt("return");

                                  case 11:
                                    if (!o.writeExam || !o.templateId) {
                                        n.next = 15;
                                        break;
                                    }
                                    return n.next = 14, e.requestSubscribeMessage({
                                        tmplIds: [ o.templateId ]
                                    });

                                  case 14:
                                    n.sent;

                                  case 15:
                                    c = [], s = 0;

                                  case 17:
                                    if (!(s < i.length)) {
                                        n.next = 35;
                                        break;
                                    }
                                    return e.showLoading({
                                        mask: !0,
                                        title: "上传中" + i.length + "/" + (s + 1) + "..."
                                    }), l = i[s].url, d = l.substring(l.lastIndexOf(".") + 1), f = String(1e5 * Math.random()).split(".")[0], 
                                    g = new Date(), m = g.getFullYear(), v = g.getMonth() + 1 < 10 ? "0" + (g.getMonth() + 1) : g.getMonth() + 1, 
                                    p = g.getDate() < 10 ? "0" + g.getDate() : g.getDate(), h = g.getHours() < 10 ? "0" + g.getHours() : g.getHours(), 
                                    w = g.getMinutes() < 10 ? "0" + g.getMinutes() : g.getMinutes(), b = g.getSeconds() < 10 ? "0" + g.getSeconds() : g.getSeconds(), 
                                    _ = "wall/" + m + "/" + v + "/" + p + "/" + h + w + b + "_" + f + "." + d, n.next = 32, 
                                    a.uploadFile({
                                        filePath: l,
                                        cloudPath: _
                                    }).then(function() {
                                        var e = u(r.default.mark(function e(t) {
                                            return r.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, a.getTempFileURL({
                                                        fileList: [ t.fileID ]
                                                    }).then(function(e) {
                                                        e.fileList.length > 0 ? c.push(e.fileList[0].tempFileURL) : o.$u.toast("图片上传失败");
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
                                    s++, n.next = 17;
                                    break;

                                  case 35:
                                    return o.cover.images = c, o.cover.image = c[0], o.cover.coll = [], o.cover.zan = [], 
                                    o.cover.view = 0, o.writeExam, o.cover.status = 1, o.cover.user_id = o.vuex_user._id, 
                                    n.next = 44, a.callFunction({
                                        name: "query_edit",
                                        data: {
                                            dbName: "app_cover",
                                            filter: {
                                                _id: "-1"
                                            },
                                            addData: o.cover
                                        }
                                    });

                                  case 44:
                                    y = n.sent, e.request({
                                        header: {},
                                        url: o.caijiyuming + "/bzapi/rk",
                                        method: "POST",
                                        dataType: "json",
                                        data: {
                                            cover: o.cover,
                                            userid: o.vuex_user.openid,
                                            username: o.vuex_user.name,
                                            useravatar: o.vuex_user.avatar
                                        },
                                        success: function(e) {
                                            e.data;
                                        },
                                        fail: function() {}
                                    }), e.hideLoading(), y.result.success && setTimeout(function() {
                                        e.navigateBack();
                                    }, 1e3), e.showToast({
                                        icon: "none",
                                        title: y.result.msg,
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
                    baocun: function() {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var a, o, u, i, c;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    for (o = (a = t).$refs.uUpload.lists, e.showLoading({
                                        title: "保存中..."
                                    }), u = 0, i = 0; i < o.length; i++) c = o[i].url, e.saveImageToPhotosAlbum({
                                        filePath: c,
                                        success: function(t) {
                                            u++, console.log(u), u == o.length && (e.hideLoading(), a.$u.toast("图片保存成功"));
                                        },
                                        fail: function(t) {
                                            t.errMsg && e.showModal({
                                                title: "提示",
                                                content: "无权限，请打开下载权限后再试！",
                                                showCancel: !1,
                                                success: function(t) {
                                                    t.confirm && e.openSetting({
                                                        success: function(t) {
                                                            t.authSetting["scope.writePhotosAlbum"] ? e.saveImageToPhotosAlbum({
                                                                filePath: c,
                                                                success: function(t) {
                                                                    u == o.length && e.hideLoading(), e.hideLoading();
                                                                }
                                                            }) : e.showModal({
                                                                title: "温馨提示",
                                                                content: "授权失败，请稍后重新获取",
                                                                showCancel: !1
                                                            });
                                                        }
                                                    });
                                                }
                                            }), e.hideLoading();
                                        }
                                    });

                                  case 5:
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
            t.default = i;
        }).call(this, n("543d").default, n("a9ff").default);
    },
    4439: function(e, t, n) {
        var a = n("fa82");
        n.n(a).a;
    },
    4582: function(e, t, n) {
        n.r(t);
        var a = n("0e6d"), r = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = r.a;
    },
    "79d1": function(e, t, n) {
        n.r(t);
        var a = n("8941"), r = n("4582");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("4439");
        var u = n("f0c5"), i = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = i.exports;
    },
    8941: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
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
        }, r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    e812: function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), a(n("66fd"));
            var t = a(n("79d1"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    fa82: function(e, t, n) {}
}, [ [ "e812", "common/runtime", "common/vendor" ] ] ]);