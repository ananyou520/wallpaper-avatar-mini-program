(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/find/headimg/headimg" ], {
    3021: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            }
        }, i = function() {
            var e = this, t = (e.$createElement, e._self._c, e.showSwitch(-1)), n = e.showSwitch(1);
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: t,
                    m1: n
                }
            });
        }, r = [];
    },
    "7ead": function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), a(n("66fd"));
            var t = a(n("dcde"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "7f7b": function(e, t, n) {
        var a = n("9de1");
        n.n(a).a;
    },
    "9de1": function(e, t, n) {},
    c7a7: function(e, t, n) {
        (function(e, a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n("a34a")), r = o(n("9410")), s = n("50fb");
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t, n, a, i, r, s) {
                try {
                    var o = e[r](s), c = o.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                o.done ? t(c) : Promise.resolve(c).then(a, i);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, i) {
                        var r = e.apply(t, n);
                        function s(e) {
                            c(r, a, i, s, o, "next", e);
                        }
                        function o(e) {
                            c(r, a, i, s, o, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var f = {
                data: function() {
                    return {
                        poster: {},
                        posterImage: "",
                        canvasId: "default_PosterCanvasId",
                        userInfo: "",
                        code: "",
                        avatarImage: e.getStorageSync("avatar_image"),
                        currentImage: {},
                        currentIndex: 0,
                        imageList: [],
                        categoriesList: []
                    };
                },
                onLoad: function() {
                    this.init(), this.getCategoriesList();
                },
                onShareAppMessage: function() {},
                onShareTimeline: function() {},
                methods: {
                    getCategoriesList: function() {
                        var t = this;
                        e.showLoading({
                            title: "加载中",
                            mask: !0
                        }), a.callFunction({
                            name: "headcate",
                            data: {
                                type: "mpweixin"
                            }
                        }).then(function(e) {
                            t.categoriesList = e.result.data, t.categoriesList.length > 0 && (t.$set(t.categoriesList[0], "selected", !0), 
                            t.getImagesList(t.categoriesList[0]._id));
                        }).catch(function(t) {
                            e.showModal({
                                content: t.message || "请求服务失败",
                                showCancel: !1
                            });
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    getImagesList: function(t, n) {
                        var i = this;
                        e.showLoading({
                            title: "加载中",
                            mask: !0
                        }), a.callFunction({
                            name: "headimg",
                            data: {
                                type: "mpweixin",
                                categoryId: t
                            }
                        }).then(function(e) {
                            i.imageList = e.result.data, i.imageList && i.imageList.length > 0 && (i.currentImage = n < 0 ? i.imageList[i.imageList.length - 1] : i.imageList[0]);
                        }).catch(function(t) {
                            e.showModal({
                                content: t.message || "请求服务失败",
                                showCancel: !1
                            });
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    init: function() {
                        var e = this;
                        return u(i.default.mark(function t() {
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    e.userInfo = e.vuex_user;

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    switchCategory: function(e, t) {
                        var n = this.categoriesList.filter(function(e) {
                            return e.selected;
                        });
                        n && n.length > 0 && (n[0].selected = !1), this.$set(e, "selected", !0), this.getImagesList(e._id, t);
                    },
                    switchAvatar: function(e) {
                        var t = this, n = this.imageList.findIndex(function(e) {
                            return e._id === t.currentImage._id;
                        });
                        if (e > 0 && n < this.imageList.length - 1 || e < 0 && n > 0) n += e, this.currentImage = this.imageList[n]; else {
                            var a = this.categoriesList.findIndex(function(e) {
                                return e.selected;
                            });
                            a += e, this.categoriesList[a] && this.categoriesList[a]._id && this.switchCategory(this.categoriesList[a], e);
                        }
                    },
                    imageClick: function(e) {
                        this.currentImage = e;
                    },
                    showSwitch: function(e) {
                        var t = this, n = this.categoriesList.findIndex(function(e) {
                            return e.selected;
                        }), a = this.imageList.findIndex(function(e) {
                            return e._id === t.currentImage._id;
                        });
                        return !(e < 0 && n <= 0 && a <= 0 || e > 0 && n >= this.categoriesList.length - 1 && a >= this.imageList.length - 1);
                    },
                    shareFc: function() {
                        var t = this;
                        return u(i.default.mark(function n() {
                            var a;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (t.avatarImage) {
                                        n.next = 3;
                                        break;
                                    }
                                    return e.showToast({
                                        title: "请先获取头像",
                                        icon: "none"
                                    }), n.abrupt("return");

                                  case 3:
                                    return n.prev = 3, e.showLoading({
                                        title: "加载中",
                                        mask: !0
                                    }), r.default.log("准备生成:" + new Date()), n.next = 8, (0, s.getSharePoster)({
                                        _this: t,
                                        type: "testShareType",
                                        formData: {},
                                        backgroundImage: t.avatarImage,
                                        posterCanvasId: t.canvasId,
                                        delayTimeScale: 20,
                                        drawArray: function(e) {
                                            var n = e.bgObj;
                                            return e.type, e.bgScale, new Promise(function(e, a) {
                                                e([ {
                                                    type: "image",
                                                    url: t.currentImage.image_url,
                                                    dx: 0,
                                                    dy: 0,
                                                    infoCallBack: function(e) {
                                                        return {
                                                            dWidth: n.width,
                                                            dHeight: n.height
                                                        };
                                                    }
                                                } ]);
                                            });
                                        },
                                        setCanvasWH: function(e) {
                                            var n = e.bgObj;
                                            e.type, e.bgScale, t.poster = n;
                                        }
                                    });

                                  case 8:
                                    a = n.sent, r.default.log("海报生成成功, 时间:" + new Date() + "， 临时路径: " + a.poster.tempFilePath), 
                                    t.posterImage = a.poster.tempFilePath, t.savefile(), n.next = 19;
                                    break;

                                  case 14:
                                    n.prev = 14, n.t0 = n.catch(3), e.hideLoading(), r.default.hideLoading(), r.default.showToast(JSON.stringify(n.t0));

                                  case 19:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, null, [ [ 3, 14 ] ]);
                        }))();
                    },
                    savefile: function() {
                        var t = this;
                        e.getSetting({
                            success: function(n) {
                                n.authSetting["scope.writePhotosAlbum"] ? t.saveImgToLocal() : e.authorize({
                                    scope: "scope.writePhotosAlbum",
                                    success: function() {
                                        t.saveImgToLocal();
                                    },
                                    fail: function(t) {
                                        e.hideLoading(), wx.showModal({
                                            content: "检测到您没打开下载图片功能权限，是否去设置打开？",
                                            confirmText: "确认",
                                            cancelText: "取消",
                                            success: function(e) {
                                                e.confirm && wx.openSetting();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    saveImgToLocal: function(t) {
                        var n = this;
                        e.saveImageToPhotosAlbum({
                            filePath: n.posterImage,
                            success: function() {
                                n.saveImageInfo(), e.setStorageSync("currentImage", n.posterImage);
                            },
                            fail: function() {
                                e.hideLoading(), e.showToast({
                                    title: "保存失败",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    saveImageInfo: function() {
                        a.callFunction({
                            name: "headimg",
                            data: {
                                imageInfo: this.currentImage
                            }
                        }).then(function(t) {
                            e.hideLoading(), e.navigateTo({
                                url: "/pages/find/headimg/saved"
                            });
                        });
                    },
                    getUserProfile: function(t) {
                        var n = this;
                        return u(i.default.mark(function a() {
                            var r;
                            return i.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    r = n, e.getUserProfile({
                                        desc: "获取您的头像信息",
                                        success: function(n) {
                                            var a = {
                                                code: r.code,
                                                signature: n.signature,
                                                encrypted_data: n.encryptedData,
                                                iv: n.iv,
                                                userInfo: n.userInfo
                                            }.userInfo.avatarUrl;
                                            "createImages" === t && (r.avatarImage = a.substring(0, a.lastIndexOf("/") + 1) + "0", 
                                            e.setStorageSync("avatar_image", r.avatarImage)), r.postUserInfo(n.userInfo.nickName, t);
                                        },
                                        fail: function(e) {}
                                    });

                                  case 2:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    }
                }
            };
            t.default = f;
        }).call(this, n("543d").default, n("a9ff").default);
    },
    dcde: function(e, t, n) {
        n.r(t);
        var a = n("3021"), i = n("ef56");
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        n("7f7b");
        var s = n("f0c5"), o = Object(s.a)(i.default, a.b, a.c, !1, null, "29fef08e", null, !1, a.a, void 0);
        t.default = o.exports;
    },
    ef56: function(e, t, n) {
        n.r(t);
        var a = n("c7a7"), i = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = i.a;
    }
}, [ [ "7ead", "common/runtime", "common/vendor" ] ] ]);