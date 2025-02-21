(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-loading/u-loading" ], {
    "3a3b": function(e, n, o) {
        var t = o("a973");
        o.n(t).a;
    },
    "516c": function(e, n, o) {
        o.r(n);
        var t = o("7570"), c = o.n(t);
        for (var a in t) "default" !== a && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(a);
        n.default = c.a;
    },
    "6d3b": function(e, n, o) {
        o.d(n, "b", function() {
            return t;
        }), o.d(n, "c", function() {
            return c;
        }), o.d(n, "a", function() {});
        var t = function() {
            var e = this, n = (e.$createElement, e._self._c, e.show ? e.__get_style([ e.cricleStyle ]) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    s0: n
                }
            });
        }, c = [];
    },
    7570: function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            name: "u-loading",
            props: {
                mode: {
                    type: String,
                    default: "circle"
                },
                color: {
                    type: String,
                    default: "#c7c7c7"
                },
                size: {
                    type: [ String, Number ],
                    default: "34"
                },
                show: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                cricleStyle: function() {
                    var e = {};
                    return e.width = this.size + "rpx", e.height = this.size + "rpx", "circle" == this.mode && (e.borderColor = "#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color ? this.color : "#c7c7c7")), 
                    e;
                }
            }
        };
        n.default = t;
    },
    a973: function(e, n, o) {},
    c767: function(e, n, o) {
        o.r(n);
        var t = o("6d3b"), c = o("516c");
        for (var a in c) "default" !== a && function(e) {
            o.d(n, e, function() {
                return c[e];
            });
        }(a);
        o("3a3b");
        var u = o("f0c5"), i = Object(u.a)(c.default, t.b, t.c, !1, null, "1983c2a8", null, !1, t.a, void 0);
        n.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-loading/u-loading-create-component", {
    "uview-ui/components/u-loading/u-loading-create-component": function(e, n, o) {
        o("543d").createComponent(o("c767"));
    }
}, [ [ "uview-ui/components/u-loading/u-loading-create-component" ] ] ]);