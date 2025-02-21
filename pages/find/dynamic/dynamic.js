(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/find/dynamic/dynamic" ], {
    "0c49": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function a(e, t, n, o, a, i, r) {
                try {
                    var c = e[i](r), u = c.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                c.done ? t(u) : Promise.resolve(u).then(o, a);
            }
            var i, r = n("7938"), c = (getApp(), null), u = "", s = {
                data: function() {
                    return {
                        videos: [],
                        refreshStatus: !1,
                        scrollTop: 0,
                        hideGuide: !0,
                        scrollH: "81%",
                        backShow: !1
                    };
                },
                components: {},
                props: {},
                onLoad: function() {
                    e.showLoading({
                        title: "加载中..."
                    }), u = this.vuex_isShenHe ? "情侣壁纸" : "星空", i = 5, this.getSearchVideo();
                },
                onReachBottom: function() {
                    var e = this;
                    return function(e) {
                        return function() {
                            var t = this, n = arguments;
                            return new Promise(function(o, i) {
                                var r = e.apply(t, n);
                                function c(e) {
                                    a(r, o, i, c, u, "next", e);
                                }
                                function u(e) {
                                    a(r, o, i, c, u, "throw", e);
                                }
                                c(void 0);
                            });
                        };
                    }(o.default.mark(function t() {
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                console.log("翻页", i), i += 1, e.getSearchVideo(), 3 == i && c && c.show().catch(function(e) {
                                    console.error(e);
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onShareAppMessage: function() {
                    return {
                        title: "海量高清手机壁纸，动态壁纸，情侣头像",
                        path: "pages/dynamic/dynamic"
                    };
                },
                onPageScroll: function(e) {
                    this.scrollTop = e.scrollTop, e.scrollTop > 50 ? this.backShow = !0 : this.backShow = !1;
                },
                methods: {
                    getSearchVideo: function() {
                        var t = this, n = this.videos;
                        e.showLoading({
                            title: "加载中..."
                        }), r.getSearchVideo(u, i, function(o) {
                            1 == i && (n = [], t.setData({
                                scrollTop: 0
                            }));
                            for (var a = 0; a < o.length; a++) "1" != o[a].is_ads && n.push(o[a]);
                            t.setData({
                                videos: n,
                                refreshStatus: !1
                            }), e.stopPullDownRefresh(), e.hideLoading();
                        }, function(t) {
                            e.stopPullDownRefresh(), e.hideLoading();
                        });
                    },
                    preview: function(t) {
                        var n = t.currentTarget.dataset.item.video_preview_url, o = t.currentTarget.dataset.item.thumb_img;
                        e.navigateTo({
                            url: "/pagesB/detail/dynamicdetail?url=" + encodeURIComponent(n) + "&imgSrc=" + encodeURIComponent(o)
                        });
                    },
                    refresh: function(t) {
                        console.log("刷新", i), i = 1, this.getSearchVideo(), this.setData({
                            refreshStatus: !0
                        }), e.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        });
                    },
                    backTop: function() {
                        e.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        });
                    },
                    onScrollToLower: function(e) {
                        console.log("翻页", i), i += 1, this.getSearchVideo(), 3 == i && c && c.show().catch(function(e) {
                            console.error(e);
                        });
                    },
                    searchTap: function(t) {
                        e.navigateTo({
                            url: "/pages/search/searchvideo"
                        });
                    },
                    dayTap: function(t) {
                        e.showLoading({
                            title: "加载中..."
                        }), u = "精选", i = 1, this.getSearchVideo();
                    },
                    chaoQingTap: function(t) {
                        e.showLoading({
                            title: "加载中..."
                        }), u = "超清", i = 1, this.getSearchVideo();
                    },
                    QLTap: function(t) {
                        e.showLoading({
                            title: "加载中..."
                        }), u = "情侣壁纸", i = 1, this.getSearchVideo();
                    },
                    initHideGuide: function() {
                        var t = this;
                        e.getStorage({
                            key: "hideGuide",
                            success: function(e) {
                                t.setData({
                                    hideGuide: e.data
                                }), t.hideGuide ? t.setData({
                                    scrollH: "88%"
                                }) : t.setData({
                                    scrollH: "81%"
                                });
                            },
                            fail: function(e) {
                                t.setData({
                                    hideGuide: !1,
                                    scrollH: "81%"
                                });
                            }
                        });
                    },
                    onShareTimeline: function() {
                        return {
                            title: "海量高清手机壁纸，动态壁纸，情侣头像"
                        };
                    }
                }
            };
            t.default = s;
        }).call(this, n("543d").default);
    },
    "69de": function(e, t, n) {},
    7069: function(e, t, n) {
        var o = n("69de");
        n.n(o).a;
    },
    "7a7c": function(e, t, n) {
        (function(e) {
            n("1073"), n("a9ff"), o(n("66fd"));
            var t = o(n("ab36"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    ab36: function(e, t, n) {
        n.r(t);
        var o = n("ecf3"), a = n("f6c0");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("7069");
        var r = n("f0c5"), c = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    ecf3: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    f6c0: function(e, t, n) {
        n.r(t);
        var o = n("0c49"), a = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = a.a;
    }
}, [ [ "7a7c", "common/runtime", "common/vendor" ] ] ]);