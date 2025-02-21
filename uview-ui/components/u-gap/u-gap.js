(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-gap/u-gap" ], {
    "0f2a": function(t, n, e) {
        e.r(n);
        var a = e("2af4"), o = e("29ac");
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        e("946f");
        var r = e("f0c5"), i = Object(r.a)(o.default, a.b, a.c, !1, null, "100f4740", null, !1, a.a, void 0);
        n.default = i.exports;
    },
    "29ac": function(t, n, e) {
        e.r(n);
        var a = e("a344"), o = e.n(a);
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        n.default = o.a;
    },
    "2af4": function(t, n, e) {
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var a = function() {
            var t = this, n = (t.$createElement, t._self._c, t.__get_style([ t.gapStyle ]));
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: n
                }
            });
        }, o = [];
    },
    "946f": function(t, n, e) {
        var a = e("f16e");
        e.n(a).a;
    },
    a344: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            name: "u-gap",
            props: {
                bgColor: {
                    type: String,
                    default: "transparent "
                },
                height: {
                    type: [ String, Number ],
                    default: 30
                },
                marginTop: {
                    type: [ String, Number ],
                    default: 0
                },
                marginBottom: {
                    type: [ String, Number ],
                    default: 0
                }
            },
            computed: {
                gapStyle: function() {
                    return {
                        backgroundColor: this.bgColor,
                        height: this.height + "rpx",
                        marginTop: this.marginTop + "rpx",
                        marginBottom: this.marginBottom + "rpx"
                    };
                }
            }
        };
        n.default = a;
    },
    f16e: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-gap/u-gap-create-component", {
    "uview-ui/components/u-gap/u-gap-create-component": function(t, n, e) {
        e("543d").createComponent(e("0f2a"));
    }
}, [ [ "uview-ui/components/u-gap/u-gap-create-component" ] ] ]);