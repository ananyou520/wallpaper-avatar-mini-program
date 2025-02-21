(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-switch/u-switch" ], {
    "1e37": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "u-switch",
                props: {
                    loading: {
                        type: Boolean,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    size: {
                        type: [ Number, String ],
                        default: 50
                    },
                    activeColor: {
                        type: String,
                        default: ""
                    },
                    inactiveColor: {
                        type: String,
                        default: "#ffffff"
                    },
                    value: {
                        type: Boolean,
                        default: !1
                    },
                    vibrateShort: {
                        type: Boolean,
                        default: !1
                    },
                    activeValue: {
                        type: [ Number, String, Boolean ],
                        default: !0
                    },
                    inactiveValue: {
                        type: [ Number, String, Boolean ],
                        default: !1
                    }
                },
                data: function() {
                    return {};
                },
                computed: {
                    switchStyle: function() {
                        var t = {};
                        return t.fontSize = this.size + "rpx", t.backgroundColor = this.value ? this.activeColor : this.inactiveColor, 
                        t;
                    },
                    loadingColor: function() {
                        return this.value ? this.activeColor : null;
                    }
                },
                methods: {
                    onClick: function() {
                        var e = this;
                        this.disabled || this.loading || (this.vibrateShort && t.vibrateShort(), this.$emit("input", !this.value), 
                        this.$nextTick(function() {
                            e.$emit("change", e.value ? e.activeValue : e.inactiveValue);
                        }));
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    "3e94": function(t, e, n) {
        n.r(e);
        var i = n("dea2"), o = n("776be");
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        n("b090");
        var a = n("f0c5"), c = Object(a.a)(o.default, i.b, i.c, !1, null, "cb2f05ee", null, !1, i.a, void 0);
        e.default = c.exports;
    },
    "776be": function(t, e, n) {
        n.r(e);
        var i = n("1e37"), o = n.n(i);
        for (var u in i) "default" !== u && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(u);
        e.default = o.a;
    },
    b090: function(t, e, n) {
        var i = n("e9cf");
        n.n(i).a;
    },
    dea2: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return i;
        });
        var i = {
            uLoading: function() {
                return n.e("uview-ui/components/u-loading/u-loading").then(n.bind(null, "c767"));
            }
        }, o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__get_style([ t.switchStyle ])), n = t.$u.addUnit(this.size), i = t.$u.addUnit(this.size);
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: e,
                    g0: n,
                    g1: i
                }
            });
        }, u = [];
    },
    e9cf: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-switch/u-switch-create-component", {
    "uview-ui/components/u-switch/u-switch-create-component": function(t, e, n) {
        n("543d").createComponent(n("3e94"));
    }
}, [ [ "uview-ui/components/u-switch/u-switch-create-component" ] ] ]);