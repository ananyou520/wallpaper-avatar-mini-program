(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-tag/u-tag" ], {
    "3b4b": function(t, o, e) {
        var n = e("69a6");
        e.n(n).a;
    },
    "42ec": function(t, o, e) {
        e.r(o);
        var n = e("42f6"), i = e.n(n);
        for (var r in n) "default" !== r && function(t) {
            e.d(o, t, function() {
                return n[t];
            });
        }(r);
        o.default = i.a;
    },
    "42f6": function(t, o, e) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var n = {
            name: "u-tag",
            props: {
                type: {
                    type: String,
                    default: "primary"
                },
                disabled: {
                    type: [ Boolean, String ],
                    default: !1
                },
                size: {
                    type: String,
                    default: "default"
                },
                shape: {
                    type: String,
                    default: "square"
                },
                text: {
                    type: [ String, Number ],
                    default: ""
                },
                bgColor: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: ""
                },
                borderColor: {
                    type: String,
                    default: ""
                },
                closeColor: {
                    type: String,
                    default: ""
                },
                index: {
                    type: [ Number, String ],
                    default: ""
                },
                mode: {
                    type: String,
                    default: "light"
                },
                closeable: {
                    type: Boolean,
                    default: !1
                },
                show: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {};
            },
            computed: {
                customStyle: function() {
                    var t = {};
                    return this.color && (t.color = this.color), this.bgColor && (t.backgroundColor = this.bgColor), 
                    "plain" == this.mode && this.color && !this.borderColor ? t.borderColor = this.color : t.borderColor = this.borderColor, 
                    t;
                },
                iconStyle: function() {
                    if (this.closeable) {
                        var t = {};
                        return "mini" == this.size ? t.fontSize = "20rpx" : t.fontSize = "22rpx", "plain" == this.mode || "light" == this.mode ? t.color = this.type : "dark" == this.mode && (t.color = "#ffffff"), 
                        this.closeColor && (t.color = this.closeColor), t;
                    }
                },
                closeIconColor: function() {
                    return this.closeColor ? this.closeColor : this.color ? this.color : "dark" == this.mode ? "#ffffff" : this.type;
                }
            },
            methods: {
                clickTag: function() {
                    this.disabled || this.$emit("click", this.index);
                },
                close: function() {
                    this.$emit("close", this.index);
                }
            }
        };
        o.default = n;
    },
    "5a7d": function(t, o, e) {
        e.d(o, "b", function() {
            return i;
        }), e.d(o, "c", function() {
            return r;
        }), e.d(o, "a", function() {
            return n;
        });
        var n = {
            uIcon: function() {
                return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null, "b287"));
            }
        }, i = function() {
            var t = this, o = (t.$createElement, t._self._c, t.show ? t.__get_style([ t.customStyle ]) : null), e = t.show && t.closeable ? t.__get_style([ t.iconStyle ]) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: o,
                    s1: e
                }
            });
        }, r = [];
    },
    "69a6": function(t, o, e) {},
    8603: function(t, o, e) {
        e.r(o);
        var n = e("5a7d"), i = e("42ec");
        for (var r in i) "default" !== r && function(t) {
            e.d(o, t, function() {
                return i[t];
            });
        }(r);
        e("3b4b");
        var l = e("f0c5"), u = Object(l.a)(i.default, n.b, n.c, !1, null, "1b36ed12", null, !1, n.a, void 0);
        o.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-tag/u-tag-create-component", {
    "uview-ui/components/u-tag/u-tag-create-component": function(t, o, e) {
        e("543d").createComponent(e("8603"));
    }
}, [ [ "uview-ui/components/u-tag/u-tag-create-component" ] ] ]);