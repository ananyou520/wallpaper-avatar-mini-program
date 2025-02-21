(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-swiper/u-swiper" ], {
    "1c81": function(t, e, n) {
        n.r(e);
        var i = n("d1e4"), o = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    },
    4363: function(t, e, n) {
        var i = n("590a");
        n.n(i).a;
    },
    "590a": function(t, e, n) {},
    "666c": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.list, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    s0: t.title && e.title ? t.__get_style([ {
                        "padding-bottom": t.titlePaddingBottom
                    }, t.titleStyle ]) : null
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, o = [];
    },
    "731d": function(t, e, n) {
        n.r(e);
        var i = n("666c"), o = n("1c81");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("4363");
        var u = n("f0c5"), a = Object(u.a)(o.default, i.b, i.c, !1, null, "fcdbfc5e", null, !1, i.a, void 0);
        e.default = a.exports;
    },
    d1e4: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            name: "u-swiper",
            props: {
                list: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                title: {
                    type: Boolean,
                    default: !1
                },
                indicator: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                borderRadius: {
                    type: [ Number, String ],
                    default: 8
                },
                interval: {
                    type: [ String, Number ],
                    default: 3e3
                },
                mode: {
                    type: String,
                    default: "round"
                },
                height: {
                    type: [ Number, String ],
                    default: 250
                },
                indicatorPos: {
                    type: String,
                    default: "bottomCenter"
                },
                effect3d: {
                    type: Boolean,
                    default: !1
                },
                effect3dPreviousMargin: {
                    type: [ Number, String ],
                    default: 50
                },
                autoplay: {
                    type: Boolean,
                    default: !0
                },
                duration: {
                    type: [ Number, String ],
                    default: 500
                },
                circular: {
                    type: Boolean,
                    default: !0
                },
                imgMode: {
                    type: String,
                    default: "aspectFill"
                },
                name: {
                    type: String,
                    default: "image"
                },
                bgColor: {
                    type: String,
                    default: "#fff"
                },
                current: {
                    type: [ Number, String ],
                    default: 0
                },
                titleStyle: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            watch: {
                list: function(t, e) {
                    t.length !== e.length && (this.uCurrent = 0);
                },
                current: function(t) {
                    this.uCurrent = t;
                }
            },
            data: function() {
                return {
                    uCurrent: this.current
                };
            },
            computed: {
                justifyContent: function() {
                    return "topLeft" == this.indicatorPos || "bottomLeft" == this.indicatorPos ? "flex-start" : "topCenter" == this.indicatorPos || "bottomCenter" == this.indicatorPos ? "center" : "topRight" == this.indicatorPos || "bottomRight" == this.indicatorPos ? "flex-end" : void 0;
                },
                titlePaddingBottom: function() {
                    return "none" == this.mode ? "12rpx" : [ "bottomLeft", "bottomCenter", "bottomRight" ].indexOf(this.indicatorPos) >= 0 && "number" == this.mode ? "60rpx" : [ "bottomLeft", "bottomCenter", "bottomRight" ].indexOf(this.indicatorPos) >= 0 && "number" != this.mode ? "40rpx" : "12rpx";
                },
                elCurrent: function() {
                    return Number(this.current);
                }
            },
            methods: {
                listClick: function(t) {
                    this.$emit("click", t);
                },
                change: function(t) {
                    var e = t.detail.current;
                    this.uCurrent = e, this.$emit("change", e);
                },
                animationfinish: function(t) {}
            }
        };
        e.default = i;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-swiper/u-swiper-create-component", {
    "uview-ui/components/u-swiper/u-swiper-create-component": function(t, e, n) {
        n("543d").createComponent(n("731d"));
    }
}, [ [ "uview-ui/components/u-swiper/u-swiper-create-component" ] ] ]);