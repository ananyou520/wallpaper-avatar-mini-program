(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-section/u-section" ], {
    "0568": function(e, t, n) {
        var o = n("0ce9");
        n.n(o).a;
    },
    "0ce9": function(e, t, n) {},
    5601: function(e, t, n) {
        n.r(t);
        var o = n("8375"), u = n("de46");
        for (var i in u) "default" !== i && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(i);
        n("0568");
        var c = n("f0c5"), l = Object(c.a)(u.default, o.b, o.c, !1, null, "fd044562", null, !1, o.a, void 0);
        t.default = l.exports;
    },
    8375: function(e, t, n) {
        n.d(t, "b", function() {
            return u;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "b287"));
            }
        }, u = function() {
            var e = this, t = (e.$createElement, e._self._c, e.showLine ? e.__get_style([ e.lineStyle ]) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    s0: t
                }
            });
        }, i = [];
    },
    de46: function(e, t, n) {
        n.r(t);
        var o = n("e67b"), u = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = u.a;
    },
    e67b: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "u-section",
            props: {
                title: {
                    type: String,
                    default: ""
                },
                subTitle: {
                    type: String,
                    default: "更多"
                },
                right: {
                    type: Boolean,
                    default: !0
                },
                fontSize: {
                    type: [ Number, String ],
                    default: 28
                },
                bold: {
                    type: Boolean,
                    default: !0
                },
                color: {
                    type: String,
                    default: ""
                },
                subColor: {
                    type: String,
                    default: "#909399"
                },
                showLine: {
                    type: Boolean,
                    default: !0
                },
                lineColor: {
                    type: String,
                    default: ""
                },
                arrow: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                lineStyle: function() {
                    return {
                        left: -.9 * Number(this.fontSize) + "rpx",
                        top: -Number(this.fontSize) * ("ios" == this.$u.os() ? .14 : .15) + "rpx"
                    };
                }
            },
            methods: {
                rightClick: function() {
                    this.$emit("click");
                }
            }
        };
        t.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-section/u-section-create-component", {
    "uview-ui/components/u-section/u-section-create-component": function(e, t, n) {
        n("543d").createComponent(n("5601"));
    }
}, [ [ "uview-ui/components/u-section/u-section-create-component" ] ] ]);