(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/search/searchvideo" ], {
    "0df3": function(o, e, n) {},
    "243d0": function(o, e, n) {
        (function(o) {
            n("1073"), n("a9ff"), t(n("66fd"));
            var e = t(n("749d"));
            function t(o) {
                return o && o.__esModule ? o : {
                    default: o
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, o(e.default);
        }).call(this, n("543d").createPage);
    },
    "4eb5": function(o, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return t;
        });
        var t = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "749d": function(o, e, n) {
        n.r(e);
        var t = n("4eb5"), a = n("e85f");
        for (var i in a) "default" !== i && function(o) {
            n.d(e, o, function() {
                return a[o];
            });
        }(i);
        n("c50f");
        var r = n("f0c5"), c = Object(r.a)(a.default, t.b, t.c, !1, null, "3b73e478", null, !1, t.a, void 0);
        e.default = c.exports;
    },
    "92e0": function(o, e, n) {
        (function(o) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t, a = n("7938"), i = {
                data: function() {
                    return {
                        keyword: "",
                        videos: [],
                        scrollTop: 0,
                        backShow: !1
                    };
                },
                components: {},
                props: {},
                onLoad: function(o) {},
                onShareAppMessage: function() {
                    return {
                        title: "精选高清手机壁纸，动态壁纸，头像",
                        path: "pages/dynamic/dynamic"
                    };
                },
                onPageScroll: function(o) {
                    this.scrollTop = o.scrollTop, o.scrollTop > 50 ? this.backShow = !0 : this.backShow = !1;
                },
                methods: {
                    search: function() {
                        if (this.keyword) {
                            var e = this;
                            a.getSearchVideo(this.keyword, t, function(n) {
                                console.log(n);
                                var a = e.videos;
                                if (1 == t) {
                                    if (0 == n.length) return void o.showToast({
                                        title: "暂无结果",
                                        icon: "error"
                                    });
                                    a = [], e.setData({
                                        videos: a,
                                        scrollTop: 0
                                    });
                                }
                                for (var i = 0; i < n.length; i++) "1" != n[i].is_ads && a.push(n[i]);
                                e.setData({
                                    videos: a
                                });
                            }, function(o) {});
                        }
                    },
                    preview: function(e) {
                        var n = e.currentTarget.dataset.url;
                        o.navigateTo({
                            url: "../../pagesB/detail/dynamicdetail?url=" + encodeURIComponent(n)
                        });
                    },
                    refresh: function() {
                        o.showLoading({
                            title: "加载中"
                        }), this.search(), o.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        }), console.log("刷新"), setTimeout(function() {
                            o.hideLoading(), o.showToast({
                                title: "加载完成"
                            });
                        }, 2e3);
                    },
                    backTop: function() {
                        o.pageScrollTo({
                            scrollTop: 0,
                            duration: 300
                        });
                    },
                    onReachBottom: function(o) {
                        t += 1, this.search();
                    },
                    handleConfirm: function(e) {
                        this.setData({
                            keyword: e.detail.value
                        }), this.keyword && (o.showLoading({
                            title: "搜索中..."
                        }), t = 1, this.search());
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d").default);
    },
    c50f: function(o, e, n) {
        var t = n("0df3");
        n.n(t).a;
    },
    e85f: function(o, e, n) {
        n.r(e);
        var t = n("92e0"), a = n.n(t);
        for (var i in t) "default" !== i && function(o) {
            n.d(e, o, function() {
                return t[o];
            });
        }(i);
        e.default = a.a;
    }
}, [ [ "243d0", "common/runtime", "common/vendor" ] ] ]);