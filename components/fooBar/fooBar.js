(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/fooBar/fooBar" ], {
    4969: function(n, o, e) {
        e.r(o);
        var t = e("a3f3"), a = e.n(t);
        for (var c in t) "default" !== c && function(n) {
            e.d(o, n, function() {
                return t[n];
            });
        }(c);
        o.default = a.a;
    },
    "795e": function(n, o, e) {
        e.r(o);
        var t = e("ed74"), a = e("4969");
        for (var c in a) "default" !== c && function(n) {
            e.d(o, n, function() {
                return a[n];
            });
        }(c);
        e("a1b4");
        var u = e("f0c5"), r = Object(u.a)(a.default, t.b, t.c, !1, null, "497bd8ed", null, !1, t.a, void 0);
        o.default = r.exports;
    },
    a1b4: function(n, o, e) {
        var t = e("b152");
        e.n(t).a;
    },
    a3f3: function(n, o, e) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        o.default = {
            components: {},
            data: function() {
                return {};
            },
            props: [ "home" ],
            methods: {
                toIndex: function(n) {
                    this.$emit("toIndex", n);
                }
            }
        };
    },
    b152: function(n, o, e) {},
    ed74: function(n, o, e) {
        e.d(o, "b", function() {
            return a;
        }), e.d(o, "c", function() {
            return c;
        }), e.d(o, "a", function() {
            return t;
        });
        var t = {
            uIcon: function() {
                return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null, "b287"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/fooBar/fooBar-create-component", {
    "components/fooBar/fooBar-create-component": function(n, o, e) {
        e("543d").createComponent(e("795e"));
    }
}, [ [ "components/fooBar/fooBar-create-component" ] ] ]);