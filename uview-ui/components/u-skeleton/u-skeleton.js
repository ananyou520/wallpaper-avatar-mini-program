(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-skeleton/u-skeleton" ], {
    "1ea5": function(e, t, n) {
        n.r(t);
        var o = n("be60"), i = n.n(o);
        for (var l in o) "default" !== l && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(l);
        t.default = i.a;
    },
    6876: function(e, t, n) {
        var o = n("c1c3");
        n.n(o).a;
    },
    7409: function(e, t, n) {
        n.r(t);
        var o = n("f206"), i = n("1ea5");
        for (var l in i) "default" !== l && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(l);
        n("6876");
        var c = n("f0c5"), u = Object(c.a)(i.default, o.b, o.c, !1, null, "aab1fbea", null, !1, o.a, void 0);
        t.default = u.exports;
    },
    be60: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                name: "u-skeleton",
                props: {
                    elColor: {
                        type: String,
                        default: ""
                    },
                    bgColor: {
                        type: String,
                        default: ""
                    },
                    animation: {
                        type: Boolean,
                        default: !1
                    },
                    borderRadius: {
                        type: [ String, Number ],
                        default: "10"
                    },
                    loading: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        windowWinth: 750,
                        windowHeight: 1500,
                        filletNodes: [],
                        circleNodes: [],
                        RectNodes: [],
                        top: 0,
                        left: 0
                    };
                },
                methods: {
                    selecterQueryInfo: function() {
                        var t = this;
                        e.createSelectorQuery().in(this.$parent).selectAll(".u-skeleton").boundingClientRect().exec(function(e) {
                            t.windowHeight = e[0][0].height, t.windowWinth = e[0][0].width, t.top = e[0][0].bottom - e[0][0].height, 
                            t.left = e[0][0].left;
                        }), this.getRectEls(), this.getCircleEls(), this.getFilletEls();
                    },
                    getRectEls: function() {
                        var t = this;
                        e.createSelectorQuery().in(this.$parent).selectAll(".u-skeleton-rect").boundingClientRect().exec(function(e) {
                            t.RectNodes = e[0];
                        });
                    },
                    getFilletEls: function() {
                        var t = this;
                        e.createSelectorQuery().in(this.$parent).selectAll(".u-skeleton-fillet").boundingClientRect().exec(function(e) {
                            t.filletNodes = e[0];
                        });
                    },
                    getCircleEls: function() {
                        var t = this;
                        e.createSelectorQuery().in(this.$parent).selectAll(".u-skeleton-circle").boundingClientRect().exec(function(e) {
                            t.circleNodes = e[0];
                        });
                    }
                },
                mounted: function() {
                    var t = e.getSystemInfoSync();
                    this.windowHeight = t.windowHeight, this.windowWinth = t.windowWidth, this.selecterQueryInfo();
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    c1c3: function(e, t, n) {},
    f206: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.$u.guid()), n = e.$u.guid(), o = e.$u.guid();
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    g1: n,
                    g2: o
                }
            });
        }, i = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-skeleton/u-skeleton-create-component", {
    "uview-ui/components/u-skeleton/u-skeleton-create-component": function(e, t, n) {
        n("543d").createComponent(n("7409"));
    }
}, [ [ "uview-ui/components/u-skeleton/u-skeleton-create-component" ] ] ]);