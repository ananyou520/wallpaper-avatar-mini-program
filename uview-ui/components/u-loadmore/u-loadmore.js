(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-loadmore/u-loadmore" ], {
    "054e": function(e, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = {
            name: "u-loadmore",
            props: {
                bgColor: {
                    type: String,
                    default: "transparent"
                },
                icon: {
                    type: Boolean,
                    default: !0
                },
                fontSize: {
                    type: String,
                    default: "28"
                },
                color: {
                    type: String,
                    default: "#606266"
                },
                status: {
                    type: String,
                    default: "loadmore"
                },
                iconType: {
                    type: String,
                    default: "circle"
                },
                loadText: {
                    type: Object,
                    default: function() {
                        return {
                            loadmore: "加载更多",
                            loading: "正在加载...",
                            nomore: "进入主页查看 · 更多精美壁纸"
                        };
                    }
                },
                isDot: {
                    type: Boolean,
                    default: !1
                },
                iconColor: {
                    type: String,
                    default: "#b7b7b7"
                },
                marginTop: {
                    type: [ String, Number ],
                    default: 0
                },
                marginBottom: {
                    type: [ String, Number ],
                    default: 0
                },
                height: {
                    type: [ String, Number ],
                    default: "auto"
                }
            },
            data: function() {
                return {
                    dotText: "●"
                };
            },
            computed: {
                loadTextStyle: function() {
                    return {
                        color: this.color,
                        fontSize: this.fontSize + "rpx",
                        position: "relative",
                        zIndex: 1,
                        backgroundColor: this.bgColor
                    };
                },
                cricleStyle: function() {
                    return {
                        borderColor: "#e5e5e5 #e5e5e5 #e5e5e5 ".concat(this.circleColor)
                    };
                },
                flowerStyle: function() {
                    return {};
                },
                showText: function() {
                    return "loadmore" == this.status ? this.loadText.loadmore : "loading" == this.status ? this.loadText.loading : "nomore" == this.status && this.isDot ? this.dotText : this.loadText.nomore;
                }
            },
            methods: {
                loadMore: function() {
                    "loadmore" == this.status && this.$emit("loadmore");
                }
            }
        };
        t.default = n;
    },
    6202: function(e, t, o) {
        o.r(t);
        var n = o("054e"), u = o.n(n);
        for (var r in n) "default" !== r && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(r);
        t.default = u.a;
    },
    "746d": function(e, t, o) {
        var n = o("e592");
        o.n(n).a;
    },
    "98b0": function(e, t, o) {
        o.r(t);
        var n = o("ae9f"), u = o("6202");
        for (var r in u) "default" !== r && function(e) {
            o.d(t, e, function() {
                return u[e];
            });
        }(r);
        o("746d");
        var a = o("f0c5"), i = Object(a.a)(u.default, n.b, n.c, !1, null, "f8168008", null, !1, n.a, void 0);
        t.default = i.exports;
    },
    ae9f: function(e, t, o) {
        o.d(t, "b", function() {
            return u;
        }), o.d(t, "c", function() {
            return r;
        }), o.d(t, "a", function() {
            return n;
        });
        var n = {
            uLine: function() {
                return o.e("uview-ui/components/u-line/u-line").then(o.bind(null, "2805"));
            },
            uLoading: function() {
                return o.e("uview-ui/components/u-loading/u-loading").then(o.bind(null, "c767"));
            }
        }, u = function() {
            var e = this, t = (e.$createElement, e._self._c, e.$u.addUnit(e.height)), o = e.__get_style([ e.loadTextStyle ]);
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    s0: o
                }
            });
        }, r = [];
    },
    e592: function(e, t, o) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-loadmore/u-loadmore-create-component", {
    "uview-ui/components/u-loadmore/u-loadmore-create-component": function(e, t, o) {
        o("543d").createComponent(o("98b0"));
    }
}, [ [ "uview-ui/components/u-loadmore/u-loadmore-create-component" ] ] ]);