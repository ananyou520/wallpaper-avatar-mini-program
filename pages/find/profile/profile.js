(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/find/profile/profile" ], {
    "0565": function(t, n, e) {
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {
            return o;
        });
        var o = {
            uNavbar: function() {
                return e.e("uview-ui/components/u-navbar/u-navbar").then(e.bind(null, "8954"));
            },
            uIcon: function() {
                return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null, "b287"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "2bc8": function(t, n, e) {
        e.r(n);
        var o = e("0565"), a = e("cca1");
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        e("ef49");
        var c = e("f0c5"), u = Object(c.a)(a.default, o.b, o.c, !1, null, "6f2121d7", null, !1, o.a, void 0);
        n.default = u.exports;
    },
    "5aa3": function(t, n, e) {},
    cca1: function(t, n, e) {
        e.r(n);
        var o = e("d08b"), a = e.n(o);
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        n.default = a.a;
    },
    d08b: function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = e("05f7"), a = o(e("595c")), r = o(e("bc57")), c = e("fabb"), u = {
                data: function() {
                    return {
                        TabCur: 1,
                        categoryList: [],
                        photos: [],
                        nextStart: 0,
                        src: "",
                        gglist: [],
                        backShow: !1
                    };
                },
                components: {},
                props: {},
                onLoad: function(t) {
                    var n = this;
                    this.getCategory().then(function(t) {
                        var e = t.categoryList;
                        n.setData({
                            categoryList: e
                        });
                    }).catch(function(t) {
                        console.error(t);
                    }), this.prepareData();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {
                    this.setData({
                        nextStart: 0
                    }), this.prepareData();
                },
                onReachBottom: function() {
                    var t = this, n = this.TabCur, e = this.nextStart;
                    this.getPhotos(n, e).then(function(n) {
                        t.setData({
                            nextStart: n.nextStart,
                            photos: t.photos.concat(n.list)
                        });
                    }).catch(function(t) {
                        console.error(t);
                    });
                },
               
                onPageScroll: function(t) {
                    this.scrollTop = t.scrollTop, t.scrollTop > 50 ? this.backShow = !0 : this.backShow = !1;
                },
                methods: {
                    fh: function() {
                        t.navigateBack();
                    },
                    prepareData: function() {
                        var n = this, e = this.TabCur, o = this.nextStart;
                        this.getPhotos(e, o).then(function(e) {
                            console.log(e.list), n.setData({
                                nextStart: e.nextStart,
                                photos: e.list
                            }), t.stopPullDownRefresh();
                        }).catch(function(n) {
                            console.error(n), t.stopPullDownRefresh();
                        });
                    },
                    getCategory: function() {
                        var t = (0, r.default)(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, new Promise(function(t, n) {
                                        c.request("https://spare.maibaapp.com/bbs/newUgc/category/list/0").then(function(e) {
                                            200 == e.statusCode && "request:ok" == e.errMsg && 0 == e.data.code && "success" == e.data.msg ? t(e.data.data) : n("获取分类失败");
                                        }).catch(function(t) {
                                            n("获取分类失败");
                                        });
                                    });

                                  case 2:
                                    return t.abrupt("return", t.sent);

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    onShareAppMessage: function(e) {
                        return {
                            title: "给你的手机挑一张精美壁纸！",
                            path: "/pages/index/index",
                        };
                    },
                    onShareTimeline: function(e) {
                        return {
                            title: "给你的手机挑一张精美壁纸！",
                            path: "/pages/index/index"
                        };
                    },
                    getPhotos: function() {
                        var t = (0, r.default)(a.default.mark(function t(n, e) {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, new Promise(function(t, o) {
                                        c.request("https://spare.maibaapp.com/bbs/newUgc/category/info/0/" + n + "/" + e + "/" + (e + 17)).then(function(n) {
                                            200 == n.statusCode && "request:ok" == n.errMsg && 0 == n.data.code && "success" == n.data.msg ? t(n.data.data) : o("获取图片列表失败");
                                        }).catch(function(t) {
                                            o("获取图片列表失败");
                                        });
                                    });

                                  case 2:
                                    return t.abrupt("return", t.sent);

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(n, e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    refresh: function() {
                        t.showLoading({
                            title: "加载中"
                        }), this.prepareData(), t.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        }), console.log("刷新"), setTimeout(function() {
                            t.hideLoading(), t.showToast({
                                title: "加载完成"
                            });
                        }, 2e3);
                    },
                    backTop: function() {
                        t.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        });
                    },
                    tabSelect: function(t) {
                        var n = t.currentTarget.dataset.cid;
                        this.setData({
                            TabCur: n,
                            nextStart: 0
                        }), this.prepareData();
                    },
                    info: function(n) {
                        var e = n.currentTarget.dataset.src;
                        t.navigateTo({
                            url: "../photo/photo?src=" + e,
                            success: function(t) {},
                            fail: function(t) {},
                            complete: function(t) {}
                        });
                    }
                }
            };
            n.default = u;
        }).call(this, e("543d").default);
    },
    ec6b: function(t, n, e) {
        (function(t) {
            e("1073"), e("a9ff"), o(e("66fd"));
            var n = o(e("2bc8"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    ef49: function(t, n, e) {
        var o = e("5aa3");
        e.n(o).a;
    }
}, [ [ "ec6b", "common/runtime", "common/vendor" ] ] ]);