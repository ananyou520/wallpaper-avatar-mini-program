(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/search/search" ], {
    "0cf0": function(e, t, n) {
        var r = n("7d0a");
        n.n(r).a;
    },
    "0d1a": function(e, t, n) {
        n.r(t);
        var r = n("76b7"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    "14be": function(e, t, n) {
        n.r(t);
        var r = n("2ee6"), a = n("0d1a");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("0cf0");
        var c = n("f0c5"), i = Object(c.a)(a.default, r.b, r.c, !1, null, "3713b6a4", null, !1, r.a, void 0);
        t.default = i.exports;
    },
    "2ee6": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "76b7": function(e, t, n) {
        (function(e) {
            function n(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0, o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: o
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var c, i = !0, s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e;
                    },
                    e: function(e) {
                        s = !0, c = e;
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return();
                        } finally {
                            if (s) throw c;
                        }
                    }
                };
            }
            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
                }
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                name: "search",
                props: {
                    isFocus: {
                        type: Boolean,
                        default: !1
                    },
                    theme: {
                        type: String,
                        default: "block"
                    },
                    showWant: {
                        type: Boolean,
                        default: !1
                    },
                    hotList: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    speechEngine: {
                        type: String,
                        default: "baidu"
                    }
                },
                data: function() {
                    return {
                        searchText: "",
                        hList: e.getStorageSync("search_cache")
                    };
                },
                methods: {
                    searchStart: function() {
                        var t = this;
                        "" == t.searchText ? e.showToast({
                            title: "请输入关键字",
                            icon: "none",
                            duration: 1e3
                        }) : (t.$emit("getSearchText", t.searchText), e.getStorage({
                            key: "search_cache",
                            success: function(r) {
                                var a = r.data;
                                if (a.length > 5) {
                                    var o, c = n(a);
                                    try {
                                        for (c.s(); !(o = c.n()).done; ) {
                                            if (o.value == t.searchText) return;
                                        }
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        c.e(e);
                                    } finally {
                                        c.f();
                                    }
                                    a.pop(), a.unshift(t.searchText);
                                } else {
                                    var i, s = n(a);
                                    try {
                                        for (s.s(); !(i = s.n()).done; ) {
                                            if (i.value == t.searchText) return;
                                        }
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        s.e(e);
                                    } finally {
                                        s.f();
                                    }
                                    a.unshift(t.searchText);
                                }
                                t.hList = a, e.setStorage({
                                    key: "search_cache",
                                    data: t.hList
                                });
                            },
                            fail: function() {
                                t.hList = [], t.hList.push(t.searchText), e.setStorage({
                                    key: "search_cache",
                                    data: t.hList
                                }), t.$emit("getSearchText", t.searchText);
                            }
                        }));
                    },
                    keywordsClick: function(e) {
                        this.searchText = e, this.searchStart();
                    },
                    delhistory: function() {
                        this.hList = [], e.setStorage({
                            key: "search_cache",
                            data: []
                        });
                    },
                    startRecognize: function() {
                        var e = this, t = {};
                        t.engine = e.speechEngine, t.punctuation = !1, t.timeout = 1e4, plus.speech.startRecognize(t, function(t) {
                            e.searchText = e.searchText + t;
                        });
                    }
                }
            };
            t.default = o;
        }).call(this, n("543d").default);
    },
    "7d0a": function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/search/search-create-component", {
    "components/search/search-create-component": function(e, t, n) {
        n("543d").createComponent(n("14be"));
    }
}, [ [ "components/search/search-create-component" ] ] ]);