require("../@babel/runtime/helpers/Arrayincludes");

var t = require("../@babel/runtime/helpers/typeof");

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/vendor" ], {
    "0249": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return e.sort(function() {
                return Math.random() - .5;
            });
        };
        t.default = r;
    },
    "047d": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, String.prototype.padStart || (String.prototype.padStart = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
            if ("[object String]" !== Object.prototype.toString.call(t)) throw new TypeError("fillString must be String");
            var n = this;
            if (n.length >= e) return String(n);
            for (var r = e - n.length, o = Math.ceil(r / t.length); o >>= 1; ) t += t, 1 === o && (t += t);
            return t.slice(0, r) + n;
        });
        var r = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
            e || (e = Number(new Date())), 10 == e.toString().length && (e *= 1e3);
            var n, r = new Date(e), o = {
                "y+": r.getFullYear().toString(),
                "m+": (r.getMonth() + 1).toString(),
                "d+": r.getDate().toString(),
                "h+": r.getHours().toString(),
                "M+": r.getMinutes().toString(),
                "s+": r.getSeconds().toString()
            };
            for (var i in o) (n = new RegExp("(" + i + ")").exec(t)) && (t = t.replace(n[1], 1 == n[1].length ? o[i] : o[i].padStart(n[1].length, "0")));
            return t;
        };
        t.default = r;
    },
    "05f7": function(e, t) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        };
    },
    1073: function(e, t) {},
    "1c23": function(e, n, r) {
        function o(e) {
            switch (t(e)) {
              case "undefined":
                return !0;

              case "string":
                if (0 == e.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length) return !0;
                break;

              case "boolean":
                if (!e) return !0;
                break;

              case "number":
                if (0 === e || isNaN(e)) return !0;
                break;

              case "object":
                if (null === e || 0 === e.length) return !0;
                for (var n in e) return !1;
                return !0;
            }
            return !1;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            email: function(e) {
                return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e);
            },
            mobile: function(e) {
                return /^1[23456789]\d{9}$/.test(e);
            },
            url: function(e) {
                return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(e);
            },
            date: function(e) {
                return !/Invalid|NaN/.test(new Date(e).toString());
            },
            dateISO: function(e) {
                return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
            },
            number: function(e) {
                return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
            },
            digits: function(e) {
                return /^\d+$/.test(e);
            },
            idCard: function(e) {
                return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e);
            },
            carNo: function(e) {
                return 7 === e.length ? /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/.test(e) : 8 === e.length && /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/.test(e);
            },
            amount: function(e) {
                return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(e);
            },
            chinese: function(e) {
                return /^[\u4e00-\u9fa5]+$/gi.test(e);
            },
            letter: function(e) {
                return /^[a-zA-Z]*$/.test(e);
            },
            enOrNum: function(e) {
                return /^[0-9a-zA-Z]*$/g.test(e);
            },
            contains: function(e, t) {
                return e.indexOf(t) >= 0;
            },
            range: function(e, t) {
                return e >= t[0] && e <= t[1];
            },
            rangeLength: function(e, t) {
                return e.length >= t[0] && e.length <= t[1];
            },
            empty: o,
            isEmpty: o,
            jsonString: function(e) {
                if ("string" == typeof e) try {
                    var n = JSON.parse(e);
                    return !("object" != t(n) || !n);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
                return !1;
            },
            landline: function(e) {
                return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(e);
            },
            object: function(e) {
                return "[object Object]" === Object.prototype.toString.call(e);
            },
            array: function(e) {
                return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
            },
            code: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
                return new RegExp("^\\d{".concat(t, "}$")).test(e);
            }
        };
        n.default = i;
    },
    "26cb": function(e, n, r) {
        (function(n) {
            var r = ("undefined" != typeof window ? window : void 0 !== n ? n : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;
            function o(e) {
                r && (e._devtoolHook = r, r.emit("vuex:init", e), r.on("vuex:travel-to-state", function(t) {
                    e.replaceState(t);
                }), e.subscribe(function(e, t) {
                    r.emit("vuex:mutation", e, t);
                }, {
                    prepend: !0
                }), e.subscribeAction(function(e, t) {
                    r.emit("vuex:action", e, t);
                }, {
                    prepend: !0
                }));
            }
            function i(e, n) {
                if (void 0 === n && (n = []), null === e || "object" !== t(e)) return e;
                var r = function(e, t) {
                    return e.filter(t)[0];
                }(n, function(t) {
                    return t.original === e;
                });
                if (r) return r.copy;
                var o = Array.isArray(e) ? [] : {};
                return n.push({
                    original: e,
                    copy: o
                }), Object.keys(e).forEach(function(t) {
                    o[t] = i(e[t], n);
                }), o;
            }
            function a(e, t) {
                Object.keys(e).forEach(function(n) {
                    return t(e[n], n);
                });
            }
            function s(e) {
                return null !== e && "object" === t(e);
            }
            var u = function(e, t) {
                this.runtime = t, this._children = Object.create(null), this._rawModule = e;
                var n = e.state;
                this.state = ("function" == typeof n ? n() : n) || {};
            }, c = {
                namespaced: {
                    configurable: !0
                }
            };
            c.namespaced.get = function() {
                return !!this._rawModule.namespaced;
            }, u.prototype.addChild = function(e, t) {
                this._children[e] = t;
            }, u.prototype.removeChild = function(e) {
                delete this._children[e];
            }, u.prototype.getChild = function(e) {
                return this._children[e];
            }, u.prototype.hasChild = function(e) {
                return e in this._children;
            }, u.prototype.update = function(e) {
                this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), 
                e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters);
            }, u.prototype.forEachChild = function(e) {
                a(this._children, e);
            }, u.prototype.forEachGetter = function(e) {
                this._rawModule.getters && a(this._rawModule.getters, e);
            }, u.prototype.forEachAction = function(e) {
                this._rawModule.actions && a(this._rawModule.actions, e);
            }, u.prototype.forEachMutation = function(e) {
                this._rawModule.mutations && a(this._rawModule.mutations, e);
            }, Object.defineProperties(u.prototype, c);
            var f, l = function(e) {
                this.register([], e, !1);
            };
            l.prototype.get = function(e) {
                return e.reduce(function(e, t) {
                    return e.getChild(t);
                }, this.root);
            }, l.prototype.getNamespace = function(e) {
                var t = this.root;
                return e.reduce(function(e, n) {
                    return e + ((t = t.getChild(n)).namespaced ? n + "/" : "");
                }, "");
            }, l.prototype.update = function(e) {
                !function e(t, n, r) {
                    if (n.update(r), r.modules) for (var o in r.modules) {
                        if (!n.getChild(o)) return;
                        e(t.concat(o), n.getChild(o), r.modules[o]);
                    }
                }([], this.root, e);
            }, l.prototype.register = function(e, t, n) {
                var r = this;
                void 0 === n && (n = !0);
                var o = new u(t, n);
                0 === e.length ? this.root = o : this.get(e.slice(0, -1)).addChild(e[e.length - 1], o);
                t.modules && a(t.modules, function(t, o) {
                    r.register(e.concat(o), t, n);
                });
            }, l.prototype.unregister = function(e) {
                var t = this.get(e.slice(0, -1)), n = e[e.length - 1], r = t.getChild(n);
                r && r.runtime && t.removeChild(n);
            }, l.prototype.isRegistered = function(e) {
                var t = this.get(e.slice(0, -1)), n = e[e.length - 1];
                return !!t && t.hasChild(n);
            };
            var d = function(e) {
                var t = this;
                void 0 === e && (e = {}), !f && "undefined" != typeof window && window.Vue && _(window.Vue);
                var n = e.plugins;
                void 0 === n && (n = []);
                var r = e.strict;
                void 0 === r && (r = !1), this._committing = !1, this._actions = Object.create(null), 
                this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), 
                this._modules = new l(e), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], 
                this._watcherVM = new f(), this._makeLocalGettersCache = Object.create(null);
                var i = this, a = this.dispatch, s = this.commit;
                this.dispatch = function(e, t) {
                    return a.call(i, e, t);
                }, this.commit = function(e, t, n) {
                    return s.call(i, e, t, n);
                }, this.strict = r;
                var u = this._modules.root.state;
                y(this, u, [], this._modules.root), g(this, u), n.forEach(function(e) {
                    return e(t);
                }), (void 0 !== e.devtools ? e.devtools : f.config.devtools) && o(this);
            }, h = {
                state: {
                    configurable: !0
                }
            };
            function p(e, t, n) {
                return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)), function() {
                    var n = t.indexOf(e);
                    n > -1 && t.splice(n, 1);
                };
            }
            function v(e, t) {
                e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), 
                e._modulesNamespaceMap = Object.create(null);
                var n = e.state;
                y(e, n, [], e._modules.root, !0), g(e, n, t);
            }
            function g(e, t, n) {
                var r = e._vm;
                e.getters = {}, e._makeLocalGettersCache = Object.create(null);
                var o = e._wrappedGetters, i = {};
                a(o, function(t, n) {
                    i[n] = function(e, t) {
                        return function() {
                            return e(t);
                        };
                    }(t, e), Object.defineProperty(e.getters, n, {
                        get: function() {
                            return e._vm[n];
                        },
                        enumerable: !0
                    });
                });
                var s = f.config.silent;
                f.config.silent = !0, e._vm = new f({
                    data: {
                        $$state: t
                    },
                    computed: i
                }), f.config.silent = s, e.strict && function(e) {
                    e._vm.$watch(function() {
                        return this._data.$$state;
                    }, function() {}, {
                        deep: !0,
                        sync: !0
                    });
                }(e), r && (n && e._withCommit(function() {
                    r._data.$$state = null;
                }), f.nextTick(function() {
                    return r.$destroy();
                }));
            }
            function y(e, t, n, r, o) {
                var i = !n.length, a = e._modules.getNamespace(n);
                if (r.namespaced && (e._modulesNamespaceMap[a], e._modulesNamespaceMap[a] = r), 
                !i && !o) {
                    var s = m(t, n.slice(0, -1)), u = n[n.length - 1];
                    e._withCommit(function() {
                        f.set(s, u, r.state);
                    });
                }
                var c = r.context = function(e, t, n) {
                    var r = "" === t, o = {
                        dispatch: r ? e.dispatch : function(n, r, o) {
                            var i = b(n, r, o), a = i.payload, s = i.options, u = i.type;
                            return s && s.root || (u = t + u), e.dispatch(u, a);
                        },
                        commit: r ? e.commit : function(n, r, o) {
                            var i = b(n, r, o), a = i.payload, s = i.options, u = i.type;
                            s && s.root || (u = t + u), e.commit(u, a, s);
                        }
                    };
                    return Object.defineProperties(o, {
                        getters: {
                            get: r ? function() {
                                return e.getters;
                            } : function() {
                                return function(e, t) {
                                    if (!e._makeLocalGettersCache[t]) {
                                        var n = {}, r = t.length;
                                        Object.keys(e.getters).forEach(function(o) {
                                            if (o.slice(0, r) === t) {
                                                var i = o.slice(r);
                                                Object.defineProperty(n, i, {
                                                    get: function() {
                                                        return e.getters[o];
                                                    },
                                                    enumerable: !0
                                                });
                                            }
                                        }), e._makeLocalGettersCache[t] = n;
                                    }
                                    return e._makeLocalGettersCache[t];
                                }(e, t);
                            }
                        },
                        state: {
                            get: function() {
                                return m(e.state, n);
                            }
                        }
                    }), o;
                }(e, a, n);
                r.forEachMutation(function(t, n) {
                    !function(e, t, n, r) {
                        (e._mutations[t] || (e._mutations[t] = [])).push(function(t) {
                            n.call(e, r.state, t);
                        });
                    }(e, a + n, t, c);
                }), r.forEachAction(function(t, n) {
                    var r = t.root ? n : a + n, o = t.handler || t;
                    !function(e, t, n, r) {
                        (e._actions[t] || (e._actions[t] = [])).push(function(t) {
                            var o = n.call(e, {
                                dispatch: r.dispatch,
                                commit: r.commit,
                                getters: r.getters,
                                state: r.state,
                                rootGetters: e.getters,
                                rootState: e.state
                            }, t);
                            return function(e) {
                                return e && "function" == typeof e.then;
                            }(o) || (o = Promise.resolve(o)), e._devtoolHook ? o.catch(function(t) {
                                throw e._devtoolHook.emit("vuex:error", t), t;
                            }) : o;
                        });
                    }(e, r, o, c);
                }), r.forEachGetter(function(t, n) {
                    !function(e, t, n, r) {
                        e._wrappedGetters[t] || (e._wrappedGetters[t] = function(e) {
                            return n(r.state, r.getters, e.state, e.getters);
                        });
                    }(e, a + n, t, c);
                }), r.forEachChild(function(r, i) {
                    y(e, t, n.concat(i), r, o);
                });
            }
            function m(e, t) {
                return t.reduce(function(e, t) {
                    return e[t];
                }, e);
            }
            function b(e, t, n) {
                return s(e) && e.type && (n = t, t = e, e = e.type), {
                    type: e,
                    payload: t,
                    options: n
                };
            }
            function _(e) {
                f && e === f || function(e) {
                    if (Number(e.version.split(".")[0]) >= 2) e.mixin({
                        beforeCreate: n
                    }); else {
                        var t = e.prototype._init;
                        e.prototype._init = function(e) {
                            void 0 === e && (e = {}), e.init = e.init ? [ n ].concat(e.init) : n, t.call(this, e);
                        };
                    }
                    function n() {
                        var e = this.$options;
                        e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store);
                    }
                }(f = e);
            }
            h.state.get = function() {
                return this._vm._data.$$state;
            }, h.state.set = function(e) {}, d.prototype.commit = function(e, t, n) {
                var r = this, o = b(e, t, n), i = o.type, a = o.payload, s = (o.options, {
                    type: i,
                    payload: a
                }), u = this._mutations[i];
                u && (this._withCommit(function() {
                    u.forEach(function(e) {
                        e(a);
                    });
                }), this._subscribers.slice().forEach(function(e) {
                    return e(s, r.state);
                }));
            }, d.prototype.dispatch = function(e, t) {
                var n = this, r = b(e, t), o = r.type, i = r.payload, a = {
                    type: o,
                    payload: i
                }, s = this._actions[o];
                if (s) {
                    try {
                        this._actionSubscribers.slice().filter(function(e) {
                            return e.before;
                        }).forEach(function(e) {
                            return e.before(a, n.state);
                        });
                    } catch (e) {}
                    var u = s.length > 1 ? Promise.all(s.map(function(e) {
                        return e(i);
                    })) : s[0](i);
                    return new Promise(function(e, t) {
                        u.then(function(t) {
                            try {
                                n._actionSubscribers.filter(function(e) {
                                    return e.after;
                                }).forEach(function(e) {
                                    return e.after(a, n.state);
                                });
                            } catch (e) {}
                            e(t);
                        }, function(e) {
                            try {
                                n._actionSubscribers.filter(function(e) {
                                    return e.error;
                                }).forEach(function(t) {
                                    return t.error(a, n.state, e);
                                });
                            } catch (e) {}
                            t(e);
                        });
                    });
                }
            }, d.prototype.subscribe = function(e, t) {
                return p(e, this._subscribers, t);
            }, d.prototype.subscribeAction = function(e, t) {
                return p("function" == typeof e ? {
                    before: e
                } : e, this._actionSubscribers, t);
            }, d.prototype.watch = function(e, t, n) {
                var r = this;
                return this._watcherVM.$watch(function() {
                    return e(r.state, r.getters);
                }, t, n);
            }, d.prototype.replaceState = function(e) {
                var t = this;
                this._withCommit(function() {
                    t._vm._data.$$state = e;
                });
            }, d.prototype.registerModule = function(e, t, n) {
                void 0 === n && (n = {}), "string" == typeof e && (e = [ e ]), this._modules.register(e, t), 
                y(this, this.state, e, this._modules.get(e), n.preserveState), g(this, this.state);
            }, d.prototype.unregisterModule = function(e) {
                var t = this;
                "string" == typeof e && (e = [ e ]), this._modules.unregister(e), this._withCommit(function() {
                    var n = m(t.state, e.slice(0, -1));
                    f.delete(n, e[e.length - 1]);
                }), v(this);
            }, d.prototype.hasModule = function(e) {
                return "string" == typeof e && (e = [ e ]), this._modules.isRegistered(e);
            }, d.prototype[[ 104, 111, 116, 85, 112, 100, 97, 116, 101 ].map(function(e) {
                return String.fromCharCode(e);
            }).join("")] = function(e) {
                this._modules.update(e), v(this, !0);
            }, d.prototype._withCommit = function(e) {
                var t = this._committing;
                this._committing = !0, e(), this._committing = t;
            }, Object.defineProperties(d.prototype, h);
            var w = A(function(e, t) {
                var n = {};
                return O(t).forEach(function(t) {
                    var r = t.key, o = t.val;
                    n[r] = function() {
                        var t = this.$store.state, n = this.$store.getters;
                        if (e) {
                            var r = P(this.$store, "mapState", e);
                            if (!r) return;
                            t = r.context.state, n = r.context.getters;
                        }
                        return "function" == typeof o ? o.call(this, t, n) : t[o];
                    }, n[r].vuex = !0;
                }), n;
            }), x = A(function(e, t) {
                var n = {};
                return O(t).forEach(function(t) {
                    var r = t.key, o = t.val;
                    n[r] = function() {
                        for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                        var r = this.$store.commit;
                        if (e) {
                            var i = P(this.$store, "mapMutations", e);
                            if (!i) return;
                            r = i.context.commit;
                        }
                        return "function" == typeof o ? o.apply(this, [ r ].concat(t)) : r.apply(this.$store, [ o ].concat(t));
                    };
                }), n;
            }), k = A(function(e, t) {
                var n = {};
                return O(t).forEach(function(t) {
                    var r = t.key, o = t.val;
                    o = e + o, n[r] = function() {
                        if (!e || P(this.$store, "mapGetters", e)) return this.$store.getters[o];
                    }, n[r].vuex = !0;
                }), n;
            }), S = A(function(e, t) {
                var n = {};
                return O(t).forEach(function(t) {
                    var r = t.key, o = t.val;
                    n[r] = function() {
                        for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
                        var r = this.$store.dispatch;
                        if (e) {
                            var i = P(this.$store, "mapActions", e);
                            if (!i) return;
                            r = i.context.dispatch;
                        }
                        return "function" == typeof o ? o.apply(this, [ r ].concat(t)) : r.apply(this.$store, [ o ].concat(t));
                    };
                }), n;
            });
            function O(e) {
                return function(e) {
                    return Array.isArray(e) || s(e);
                }(e) ? Array.isArray(e) ? e.map(function(e) {
                    return {
                        key: e,
                        val: e
                    };
                }) : Object.keys(e).map(function(t) {
                    return {
                        key: t,
                        val: e[t]
                    };
                }) : [];
            }
            function A(e) {
                return function(t, n) {
                    return "string" != typeof t ? (n = t, t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"), 
                    e(t, n);
                };
            }
            function P(e, t, n) {
                return e._modulesNamespaceMap[n];
            }
            function T(e, t, n) {
                var r = n ? e.groupCollapsed : e.group;
                try {
                    r.call(e, t);
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    e.log(t);
                }
            }
            function E(e) {
                try {
                    e.groupEnd();
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    e.log("—— log end ——");
                }
            }
            function j() {
                var e = new Date();
                return " @ " + C(e.getHours(), 2) + ":" + C(e.getMinutes(), 2) + ":" + C(e.getSeconds(), 2) + "." + C(e.getMilliseconds(), 3);
            }
            function C(e, t) {
                return function(e, t) {
                    return new Array(t + 1).join(e);
                }("0", t - e.toString().length) + e;
            }
            var I = {
                Store: d,
                install: _,
                version: "3.6.2",
                mapState: w,
                mapMutations: x,
                mapGetters: k,
                mapActions: S,
                createNamespacedHelpers: function(e) {
                    return {
                        mapState: w.bind(null, e),
                        mapGetters: k.bind(null, e),
                        mapMutations: x.bind(null, e),
                        mapActions: S.bind(null, e)
                    };
                },
                createLogger: function(e) {
                    void 0 === e && (e = {});
                    var t = e.collapsed;
                    void 0 === t && (t = !0);
                    var n = e.filter;
                    void 0 === n && (n = function(e, t, n) {
                        return !0;
                    });
                    var r = e.transformer;
                    void 0 === r && (r = function(e) {
                        return e;
                    });
                    var o = e.mutationTransformer;
                    void 0 === o && (o = function(e) {
                        return e;
                    });
                    var a = e.actionFilter;
                    void 0 === a && (a = function(e, t) {
                        return !0;
                    });
                    var s = e.actionTransformer;
                    void 0 === s && (s = function(e) {
                        return e;
                    });
                    var u = e.logMutations;
                    void 0 === u && (u = !0);
                    var c = e.logActions;
                    void 0 === c && (c = !0);
                    var f = e.logger;
                    return void 0 === f && (f = console), function(e) {
                        var l = i(e.state);
                        void 0 !== f && (u && e.subscribe(function(e, a) {
                            var s = i(a);
                            if (n(e, l, s)) {
                                var u = j(), c = o(e), d = "mutation " + e.type + u;
                                T(f, d, t), f.log("%c prev state", "color: #9E9E9E; font-weight: bold", r(l)), f.log("%c mutation", "color: #03A9F4; font-weight: bold", c), 
                                f.log("%c next state", "color: #4CAF50; font-weight: bold", r(s)), E(f);
                            }
                            l = s;
                        }), c && e.subscribeAction(function(e, n) {
                            if (a(e, n)) {
                                var r = j(), o = s(e), i = "action " + e.type + r;
                                T(f, i, t), f.log("%c action", "color: #03A9F4; font-weight: bold", o), E(f);
                            }
                        }));
                    };
                }
            };
            e.exports = I;
        }).call(this, r("c8ba"));
    },
    "2c02": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a"));
            function o(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a), u = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            var a = new (function() {
                function t() {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t), this.config = {
                        type: "navigateTo",
                        url: "",
                        delta: 1,
                        params: {},
                        animationType: "pop-in",
                        animationDuration: 300,
                        intercept: !1
                    }, this.route = this.route.bind(this);
                }
                return function(e, t, n) {
                    t && i(e.prototype, t), n && i(e, n);
                }(t, [ {
                    key: "addRootPath",
                    value: function(e) {
                        return "/" === e[0] ? e : "/".concat(e);
                    }
                }, {
                    key: "mixinParam",
                    value: function(t, n) {
                        t = t && this.addRootPath(t);
                        return /.*\/.*\?.*=.*/.test(t) ? t + "&" + e.$u.queryParams(n, !1) : t + e.$u.queryParams(n);
                    }
                }, {
                    key: "route",
                    value: function() {
                        var t = function(e) {
                            return function() {
                                var t = this, n = arguments;
                                return new Promise(function(r, i) {
                                    var a = e.apply(t, n);
                                    function s(e) {
                                        o(a, r, i, s, u, "next", e);
                                    }
                                    function u(e) {
                                        o(a, r, i, s, u, "throw", e);
                                    }
                                    s(void 0);
                                });
                            };
                        }(r.default.mark(function t() {
                            var n, o, i, a = arguments;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = a.length > 0 && void 0 !== a[0] ? a[0] : {}, o = a.length > 1 && void 0 !== a[1] ? a[1] : {}, 
                                    i = {}, "string" == typeof n ? (i.url = this.mixinParam(n, o), i.type = "navigateTo") : (i = e.$u.deepClone(n, this.config)).url = this.mixinParam(n.url, n.params), 
                                    o.intercept && (this.config.intercept = o.intercept), i.params = o, i = e.$u.deepMerge(this.config, i), 
                                    "function" != typeof e.$u.routeIntercept) {
                                        t.next = 14;
                                        break;
                                    }
                                    return t.next = 10, new Promise(function(t, n) {
                                        e.$u.routeIntercept(i, t);
                                    });

                                  case 10:
                                    t.sent && this.openPage(i), t.next = 15;
                                    break;

                                  case 14:
                                    this.openPage(i);

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "openPage",
                    value: function(t) {
                        var n = t.url, r = (t.type, t.delta), o = t.animationType, i = t.animationDuration;
                        "navigateTo" != t.type && "to" != t.type || e.navigateTo({
                            url: n,
                            animationType: o,
                            animationDuration: i
                        }), "redirectTo" != t.type && "redirect" != t.type || e.redirectTo({
                            url: n
                        }), "switchTab" != t.type && "tab" != t.type || e.switchTab({
                            url: n
                        }), "reLaunch" != t.type && "launch" != t.type || e.reLaunch({
                            url: n
                        }), "navigateBack" != t.type && "back" != t.type || e.navigateBack({
                            delta: r
                        });
                    }
                } ]), t;
            }())().route;
            t.default = a;
        }).call(this, n("543d").default);
    },
    "32db": function(n, r, o) {
        (function(n, o) {
            var i, a, s, u = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                return t(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
            };
            !function(e, t) {
                "object" == u(r) && "object" == u(o) ? o.exports = t() : (a = [], void 0 === (s = "function" == typeof (i = t) ? i.apply(r, a) : i) || (o.exports = s));
            }("undefined" != typeof self && self, function() {
                return function(e) {
                    function t(r) {
                        if (n[r]) return n[r].exports;
                        var o = n[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.d = function(e, n, r) {
                        t.o(e, n) || Object.defineProperty(e, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        });
                    }, t.n = function(e) {
                        var n = e && e.__esModule ? function() {
                            return e.default;
                        } : function() {
                            return e;
                        };
                        return t.d(n, "a", n), n;
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, t.p = "", t(t.s = 81);
                }([ function(e, t) {
                    var n = e.exports = {
                        version: "2.6.8"
                    };
                    "number" == typeof __e && (__e = n);
                }, function(e, t, n) {
                    (function(t) {
                        var r = n(28), o = t.Bmob || {};
                        o.utils = r, o._config = r.getConfig(), o.initialize = function(e, t, n) {
                            t.length > 6 && console.warn("Bmob初始化失败，2.0以上版本SDK请使用API安全码初始化，文档地址：https://bmob.github.io/hydrogen-js-sdk/#/?id=初始化"), 
                            o._config.secretKey = e, o._config.securityCode = t, o._config.applicationMasterKey = n;
                        }, o.debug = function(e) {
                            o._config.deBug = e, o._config = r.getConfig(e);
                        }, e.exports = o;
                    }).call(t, n(53));
                }, function(e, t) {
                    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = n);
                }, function(e, t, n) {
                    var r = n(44)("wks"), o = n(31), i = n(2).Symbol, a = "function" == typeof i;
                    (e.exports = function(e) {
                        return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e));
                    }).store = r;
                }, function(e, t, n) {
                    e.exports = {
                        default: n(112),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    function r(e) {
                        return "[object Array]" === l.call(e);
                    }
                    function o(e) {
                        return null !== e && "object" === (void 0 === e ? "undefined" : (0, u.default)(e));
                    }
                    function i(e) {
                        return "[object Function]" === l.call(e);
                    }
                    function a(e, t) {
                        if (null != e) if ("object" !== (void 0 === e ? "undefined" : (0, u.default)(e)) && (e = [ e ]), 
                        r(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
                    }
                    var s, u = (s = n(27)) && s.__esModule ? s : {
                        default: s
                    }, c = n(74), f = n(130), l = Object.prototype.toString;
                    e.exports = {
                        isArray: r,
                        isArrayBuffer: function(e) {
                            return "[object ArrayBuffer]" === l.call(e);
                        },
                        isBuffer: f,
                        isFormData: function(e) {
                            return "undefined" != typeof FormData && e instanceof FormData;
                        },
                        isArrayBufferView: function(e) {
                            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
                        },
                        isString: function(e) {
                            return "string" == typeof e;
                        },
                        isNumber: function(e) {
                            return "number" == typeof e;
                        },
                        isObject: o,
                        isUndefined: function(e) {
                            return void 0 === e;
                        },
                        isDate: function(e) {
                            return "[object Date]" === l.call(e);
                        },
                        isFile: function(e) {
                            return "[object File]" === l.call(e);
                        },
                        isBlob: function(e) {
                            return "[object Blob]" === l.call(e);
                        },
                        isFunction: i,
                        isStream: function(e) {
                            return o(e) && i(e.pipe);
                        },
                        isURLSearchParams: function(e) {
                            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
                        },
                        isStandardBrowserEnv: function() {
                            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
                        },
                        forEach: a,
                        merge: function e() {
                            for (var t = {}, n = 0, r = arguments.length; n < r; n++) a(arguments[n], function(n, r) {
                                "object" === (0, u.default)(t[r]) && "object" === (void 0 === n ? "undefined" : (0, 
                                u.default)(n)) ? t[r] = e(t[r], n) : t[r] = n;
                            });
                            return t;
                        },
                        extend: function(e, t, n) {
                            return a(t, function(t, r) {
                                e[r] = n && "function" == typeof t ? c(t, n) : t;
                            }), e;
                        },
                        trim: function(e) {
                            return e.replace(/^\s*/, "").replace(/\s*$/, "");
                        }
                    };
                }, function(e, t, n) {
                    var r = n(2), o = n(0), i = n(22), a = n(16), s = n(17), u = function e(t, n, u) {
                        var c, f, l, d = t & e.F, h = t & e.G, p = t & e.S, v = t & e.P, g = t & e.B, y = t & e.W, m = h ? o : o[n] || (o[n] = {}), b = m.prototype, _ = h ? r : p ? r[n] : (r[n] || {}).prototype;
                        for (c in h && (u = n), u) (f = !d && _ && void 0 !== _[c]) && s(m, c) || (l = f ? _[c] : u[c], 
                        m[c] = h && "function" != typeof _[c] ? u[c] : g && f ? i(l, r) : y && _[c] == l ? function(e) {
                            var t = function(t, n, r) {
                                if (this instanceof e) {
                                    switch (arguments.length) {
                                      case 0:
                                        return new e();

                                      case 1:
                                        return new e(t);

                                      case 2:
                                        return new e(t, n);
                                    }
                                    return new e(t, n, r);
                                }
                                return e.apply(this, arguments);
                            };
                            return t.prototype = e.prototype, t;
                        }(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((m.virtual || (m.virtual = {}))[c] = l, 
                        t & e.R && b && !b[c] && a(b, c, l)));
                    };
                    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u;
                }, function(e, t, n) {
                    var r = n(15);
                    e.exports = function(e) {
                        if (!r(e)) throw TypeError(e + " is not an object!");
                        return e;
                    };
                }, function(e, t, n) {
                    e.exports = {
                        isObject: function(e) {
                            return "[object Object]" === Object.prototype.toString.call(e);
                        },
                        isNumber: function(e) {
                            return "[object Number]" === Object.prototype.toString.call(e);
                        },
                        isString: function(e) {
                            return "[object String]" === Object.prototype.toString.call(e);
                        },
                        isUndefined: function(e) {
                            return "[object Undefined]" === Object.prototype.toString.call(e);
                        },
                        isBoolean: function(e) {
                            return "[object Boolean]" === Object.prototype.toString.call(e);
                        },
                        isArray: function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e);
                        },
                        isFunction: function(e) {
                            return "[object Function]" === Object.prototype.toString.call(e);
                        }
                    };
                }, function(e, t, n) {
                    e.exports = {
                        default: n(90),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    e.exports = !n(19)(function() {
                        return 7 != Object.defineProperty({}, "a", {
                            get: function() {
                                return 7;
                            }
                        }).a;
                    });
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var o = r(n(12)), i = r(n(13)), a = function() {
                        function e(t, n) {
                            (0, o.default)(this, e);
                            var r = new Error();
                            return r.code = t, r.message = n ? "Bmob.Error:{code:" + t + ", message:" + n + "}" : "Bmob.Error:{code:" + t + ", message:" + this.errorMsg(t) + "}", 
                            r;
                        }
                        return (0, i.default)(e, [ {
                            key: "errorMsg",
                            value: function(e) {
                                switch (e) {
                                  case 415:
                                    return "incorrect parameter type.";

                                  case 416:
                                    return "Parameter is null.";

                                  case 417:
                                    return "There is no upload content.";

                                  case 418:
                                    return "Log in failure.";

                                  case 419:
                                    return "Bmob.GeoPoint location error.";

                                  default:
                                    return "unknown error";
                                }
                            }
                        } ]), e;
                    }();
                    e.exports = a;
                }, function(e, t, n) {
                    t.__esModule = !0, t.default = function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    };
                }, function(e, t, n) {
                    t.__esModule = !0;
                    var r, o = (r = n(86)) && r.__esModule ? r : {
                        default: r
                    };
                    t.default = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                                (0, o.default)(e, r.key, r);
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    }();
                }, function(e, t, n) {
                    var r = n(7), o = n(54), i = n(40), a = Object.defineProperty;
                    t.f = n(10) ? Object.defineProperty : function(e, t, n) {
                        if (r(e), t = i(t, !0), r(n), o) try {
                            return a(e, t, n);
                        } catch (e) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                        return "value" in n && (e[t] = n.value), e;
                    };
                }, function(e, t) {
                    e.exports = function(e) {
                        return "object" == (void 0 === e ? "undefined" : u(e)) ? null !== e : "function" == typeof e;
                    };
                }, function(e, t, n) {
                    var r = n(14), o = n(30);
                    e.exports = n(10) ? function(e, t, n) {
                        return r.f(e, t, o(1, n));
                    } : function(e, t, n) {
                        return e[t] = n, e;
                    };
                }, function(e, t) {
                    var n = {}.hasOwnProperty;
                    e.exports = function(e, t) {
                        return n.call(e, t);
                    };
                }, function(e, t, n) {
                    var r = void 0, o = n(28).getAppType();
                    "h5" === o ? r = n(73) : "wx" === o ? r = n(147) : "hap" === o ? r = n(148) : "nodejs" === o && (r = n(73)), 
                    e.exports = r;
                }, function(e, t) {
                    e.exports = function(e) {
                        try {
                            return !!e();
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return !0;
                        }
                    };
                }, function(e, t, n) {
                    var r = n(58), o = n(41);
                    e.exports = function(e) {
                        return r(o(e));
                    };
                }, function(e, t) {
                    e.exports = {};
                }, function(e, t, n) {
                    var r = n(29);
                    e.exports = function(e, t, n) {
                        if (r(e), void 0 === t) return e;
                        switch (n) {
                          case 1:
                            return function(n) {
                                return e.call(t, n);
                            };

                          case 2:
                            return function(n, r) {
                                return e.call(t, n, r);
                            };

                          case 3:
                            return function(n, r, o) {
                                return e.call(t, n, r, o);
                            };
                        }
                        return function() {
                            return e.apply(t, arguments);
                        };
                    };
                }, function(e, t, n) {
                    var r = n(41);
                    e.exports = function(e) {
                        return Object(r(e));
                    };
                }, function(e, t, n) {
                    var r = n(57), o = n(45);
                    e.exports = Object.keys || function(e) {
                        return r(e, o);
                    };
                }, function(e, t) {
                    var n = {}.toString;
                    e.exports = function(e) {
                        return n.call(e).slice(8, -1);
                    };
                }, function(e, t) {
                    e.exports = !0;
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    t.__esModule = !0;
                    var o = r(n(95)), i = r(n(103)), a = "function" == typeof i.default && "symbol" == u(o.default) ? function(e) {
                        return void 0 === e ? "undefined" : u(e);
                    } : function(e) {
                        return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : u(e);
                    };
                    t.default = "function" == typeof i.default && "symbol" === a(o.default) ? function(e) {
                        return void 0 === e ? "undefined" : a(e);
                    } : function(e) {
                        return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
                    };
                }, function(e, t, n) {
                    (function(t) {
                        var r = void 0;
                        r = n(82);
                        var o = function() {
                            return !0 === (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && (r.host = n(84).host), 
                            r;
                        };
                        e.exports = {
                            randomString: function() {
                                for (var e = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ], t = "", n = 0; n < 16; n++) t += e[parseInt(61 * Math.random())];
                                return t;
                            },
                            getConfig: o,
                            getAppType: function() {
                                var e = o(), n = void 0;
                                return "undefined" != typeof wx && (n = "wx"), "undefined" != typeof window && "string" != typeof n && (n = "h5"), 
                                void 0 !== t && "string" != typeof n && (n = "nodejs"), 3 === e.type && "string" != typeof n && (n = "hap"), 
                                n;
                            }
                        };
                    }).call(t, n(38));
                }, function(e, t) {
                    e.exports = function(e) {
                        if ("function" != typeof e) throw TypeError(e + " is not a function!");
                        return e;
                    };
                }, function(e, t) {
                    e.exports = function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        };
                    };
                }, function(e, t) {
                    var n = 0, r = Math.random();
                    e.exports = function(e) {
                        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
                    };
                }, function(e, t, n) {
                    var r = n(97)(!0);
                    n(61)(String, "String", function(e) {
                        this._t = String(e), this._i = 0;
                    }, function() {
                        var e, t = this._t, n = this._i;
                        return n >= t.length ? {
                            value: void 0,
                            done: !0
                        } : (e = r(t, n), this._i += e.length, {
                            value: e,
                            done: !1
                        });
                    });
                }, function(e, t, n) {
                    var r = n(14).f, o = n(17), i = n(3)("toStringTag");
                    e.exports = function(e, t, n) {
                        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                            configurable: !0,
                            value: t
                        });
                    };
                }, function(e, t, n) {
                    n(100);
                    for (var r = n(2), o = n(16), i = n(21), a = n(3)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
                        var c = s[u], f = r[c], l = f && f.prototype;
                        l && !l[a] && o(l, a, c), i[c] = i.Array;
                    }
                }, function(e, t) {
                    t.f = {}.propertyIsEnumerable;
                }, function(e, t, n) {
                    e.exports = {
                        default: n(126),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    function r(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
                    }
                    function o(e, t, n, o, i, a) {
                        return r((s = r(r(t, e), r(o, a))) << (u = i) | s >>> 32 - u, n);
                        var s, u;
                    }
                    function i(e, t, n, r, i, a, s) {
                        return o(t & n | ~t & r, e, t, i, a, s);
                    }
                    function a(e, t, n, r, i, a, s) {
                        return o(t & r | n & ~r, e, t, i, a, s);
                    }
                    function s(e, t, n, r, i, a, s) {
                        return o(t ^ n ^ r, e, t, i, a, s);
                    }
                    function u(e, t, n, r, i, a, s) {
                        return o(n ^ (t | ~r), e, t, i, a, s);
                    }
                    function c(e) {
                        for (var t = 1732584193, n = -271733879, o = -1732584194, c = 271733878, f = 0; f < e.length; f += 16) {
                            var l = t, d = n, h = o, p = c;
                            n = u(n = u(n = u(n = u(n = s(n = s(n = s(n = s(n = a(n = a(n = a(n = a(n = i(n = i(n = i(n = i(n, o = i(o, c = i(c, t = i(t, n, o, c, e[f + 0], 7, -680876936), n, o, e[f + 1], 12, -389564586), t, n, e[f + 2], 17, 606105819), c, t, e[f + 3], 22, -1044525330), o = i(o, c = i(c, t = i(t, n, o, c, e[f + 4], 7, -176418897), n, o, e[f + 5], 12, 1200080426), t, n, e[f + 6], 17, -1473231341), c, t, e[f + 7], 22, -45705983), o = i(o, c = i(c, t = i(t, n, o, c, e[f + 8], 7, 1770035416), n, o, e[f + 9], 12, -1958414417), t, n, e[f + 10], 17, -42063), c, t, e[f + 11], 22, -1990404162), o = i(o, c = i(c, t = i(t, n, o, c, e[f + 12], 7, 1804603682), n, o, e[f + 13], 12, -40341101), t, n, e[f + 14], 17, -1502002290), c, t, e[f + 15], 22, 1236535329), o = a(o, c = a(c, t = a(t, n, o, c, e[f + 1], 5, -165796510), n, o, e[f + 6], 9, -1069501632), t, n, e[f + 11], 14, 643717713), c, t, e[f + 0], 20, -373897302), o = a(o, c = a(c, t = a(t, n, o, c, e[f + 5], 5, -701558691), n, o, e[f + 10], 9, 38016083), t, n, e[f + 15], 14, -660478335), c, t, e[f + 4], 20, -405537848), o = a(o, c = a(c, t = a(t, n, o, c, e[f + 9], 5, 568446438), n, o, e[f + 14], 9, -1019803690), t, n, e[f + 3], 14, -187363961), c, t, e[f + 8], 20, 1163531501), o = a(o, c = a(c, t = a(t, n, o, c, e[f + 13], 5, -1444681467), n, o, e[f + 2], 9, -51403784), t, n, e[f + 7], 14, 1735328473), c, t, e[f + 12], 20, -1926607734), o = s(o, c = s(c, t = s(t, n, o, c, e[f + 5], 4, -378558), n, o, e[f + 8], 11, -2022574463), t, n, e[f + 11], 16, 1839030562), c, t, e[f + 14], 23, -35309556), o = s(o, c = s(c, t = s(t, n, o, c, e[f + 1], 4, -1530992060), n, o, e[f + 4], 11, 1272893353), t, n, e[f + 7], 16, -155497632), c, t, e[f + 10], 23, -1094730640), o = s(o, c = s(c, t = s(t, n, o, c, e[f + 13], 4, 681279174), n, o, e[f + 0], 11, -358537222), t, n, e[f + 3], 16, -722521979), c, t, e[f + 6], 23, 76029189), o = s(o, c = s(c, t = s(t, n, o, c, e[f + 9], 4, -640364487), n, o, e[f + 12], 11, -421815835), t, n, e[f + 15], 16, 530742520), c, t, e[f + 2], 23, -995338651), o = u(o, c = u(c, t = u(t, n, o, c, e[f + 0], 6, -198630844), n, o, e[f + 7], 10, 1126891415), t, n, e[f + 14], 15, -1416354905), c, t, e[f + 5], 21, -57434055), o = u(o, c = u(c, t = u(t, n, o, c, e[f + 12], 6, 1700485571), n, o, e[f + 3], 10, -1894986606), t, n, e[f + 10], 15, -1051523), c, t, e[f + 1], 21, -2054922799), o = u(o, c = u(c, t = u(t, n, o, c, e[f + 8], 6, 1873313359), n, o, e[f + 15], 10, -30611744), t, n, e[f + 6], 15, -1560198380), c, t, e[f + 13], 21, 1309151649), o = u(o, c = u(c, t = u(t, n, o, c, e[f + 4], 6, -145523070), n, o, e[f + 11], 10, -1120210379), t, n, e[f + 2], 15, 718787259), c, t, e[f + 9], 21, -343485551), 
                            t = r(t, l), n = r(n, d), o = r(o, h), c = r(c, p);
                        }
                        return [ t, n, o, c ];
                    }
                    function f(e) {
                        for (var t = "", n = 0; n < 4 * e.length; n++) t += "0123456789abcdef".charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(e[n >> 2] >> n % 4 * 8 & 15);
                        return t;
                    }
                    e.exports = {
                        hexMD5: function(e) {
                            return f(c(function(e) {
                                for (var t = 1 + (e.length + 8 >> 6), n = new Array(16 * t), r = 0; r < 16 * t; r++) n[r] = 0;
                                for (var o = 0; o < e.length; o++) n[o >> 2] |= (255 & e.charCodeAt(o)) << o % 4 * 8;
                                return n[o >> 2] |= 128 << o % 4 * 8, n[16 * t - 2] = 8 * e.length, n;
                            }(e)));
                        },
                        utf8MD5: function(e) {
                            return f(c(function(e) {
                                "string" == typeof e && (e = function(e) {
                                    e = unescape(encodeURIComponent(e));
                                    for (var t = [], n = 0; n < e.length; n++) t.push(e[n].charCodeAt(0));
                                    return new Uint8Array(t);
                                }(e));
                                for (var t = 1 + (e.length + 8 >> 6), n = new Array(16 * t), r = 0; r < 16 * t; r++) n[r] = 0;
                                for (var o = 0; o < e.length; o++) n[o >> 2] |= (255 & e[o]) << o % 4 * 8;
                                return n[o >> 2] |= 128 << o % 4 * 8, n[16 * t - 2] = 8 * e.length, n;
                            }(e)));
                        }
                    };
                }, function(e, t) {
                    function n() {
                        throw new Error("setTimeout has not been defined");
                    }
                    function r() {
                        throw new Error("clearTimeout has not been defined");
                    }
                    function o(e) {
                        if (c === setTimeout) return setTimeout(e, 0);
                        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
                        try {
                            return c(e, 0);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            try {
                                return c.call(null, e, 0);
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                return c.call(this, e, 0);
                            }
                        }
                    }
                    function i() {
                        p && d && (p = !1, d.length ? h = d.concat(h) : v = -1, h.length && a());
                    }
                    function a() {
                        if (!p) {
                            var e = o(i);
                            p = !0;
                            for (var t = h.length; t; ) {
                                for (d = h, h = []; ++v < t; ) d && d[v].run();
                                v = -1, t = h.length;
                            }
                            d = null, p = !1, function(e) {
                                if (f === clearTimeout) return clearTimeout(e);
                                if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
                                try {
                                    f(e);
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    try {
                                        return f.call(null, e);
                                    } catch (t) {
                                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                        return f.call(this, e);
                                    }
                                }
                            }(e);
                        }
                    }
                    function s(e, t) {
                        this.fun = e, this.array = t;
                    }
                    function u() {}
                    var c, f, l = e.exports = {};
                    !function() {
                        try {
                            c = "function" == typeof setTimeout ? setTimeout : n;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            c = n;
                        }
                        try {
                            f = "function" == typeof clearTimeout ? clearTimeout : r;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            f = r;
                        }
                    }();
                    var d, h = [], p = !1, v = -1;
                    l.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        h.push(new s(e, t)), 1 !== h.length || p || o(a);
                    }, s.prototype.run = function() {
                        this.fun.apply(null, this.array);
                    }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", 
                    l.versions = {}, l.on = u, l.addListener = u, l.once = u, l.off = u, l.removeListener = u, 
                    l.removeAllListeners = u, l.emit = u, l.prependListener = u, l.prependOnceListener = u, 
                    l.listeners = function(e) {
                        return [];
                    }, l.binding = function(e) {
                        throw new Error("process.binding is not supported");
                    }, l.cwd = function() {
                        return "/";
                    }, l.chdir = function(e) {
                        throw new Error("process.chdir is not supported");
                    }, l.umask = function() {
                        return 0;
                    };
                }, function(e, t, n) {
                    var r = n(15), o = n(2).document, i = r(o) && r(o.createElement);
                    e.exports = function(e) {
                        return i ? o.createElement(e) : {};
                    };
                }, function(e, t, n) {
                    var r = n(15);
                    e.exports = function(e, t) {
                        if (!r(e)) return e;
                        var n, o;
                        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
                        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
                        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
                        throw TypeError("Can't convert object to primitive value");
                    };
                }, function(e, t) {
                    e.exports = function(e) {
                        if (null == e) throw TypeError("Can't call method on  " + e);
                        return e;
                    };
                }, function(e, t) {
                    var n = Math.ceil, r = Math.floor;
                    e.exports = function(e) {
                        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e);
                    };
                }, function(e, t, n) {
                    var r = n(44)("keys"), o = n(31);
                    e.exports = function(e) {
                        return r[e] || (r[e] = o(e));
                    };
                }, function(e, t, n) {
                    var r = n(0), o = n(2), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
                    (e.exports = function(e, t) {
                        return i[e] || (i[e] = void 0 !== t ? t : {});
                    })("versions", []).push({
                        version: r.version,
                        mode: n(26) ? "pure" : "global",
                        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                    });
                }, function(e, t) {
                    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
                }, function(e, t, n) {
                    var r = n(7), o = n(99), i = n(45), a = n(43)("IE_PROTO"), s = function() {}, u = function() {
                        var e, t = n(39)("iframe"), r = i.length;
                        for (t.style.display = "none", n(63).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), 
                        e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--; ) delete u.prototype[i[r]];
                        return u();
                    };
                    e.exports = Object.create || function(e, t) {
                        var n;
                        return null !== e ? (s.prototype = r(e), n = new s(), s.prototype = null, n[a] = e) : n = u(), 
                        void 0 === t ? n : o(n, t);
                    };
                }, function(e, t, n) {
                    t.f = n(3);
                }, function(e, t, n) {
                    var r = n(2), o = n(0), i = n(26), a = n(47), s = n(14).f;
                    e.exports = function(e) {
                        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                        "_" == e.charAt(0) || e in t || s(t, e, {
                            value: a.f(e)
                        });
                    };
                }, function(e, t) {
                    t.f = Object.getOwnPropertySymbols;
                }, function(e, t, n) {
                    var r = n(25), o = n(3)("toStringTag"), i = "Arguments" == r(function() {
                        return arguments;
                    }());
                    e.exports = function(e) {
                        var t, n, a;
                        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                            try {
                                return e[t];
                            } catch (e) {}
                        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a;
                    };
                }, function(e, t, n) {
                    var r = n(29);
                    e.exports.f = function(e) {
                        return new function(e) {
                            var t, n;
                            this.promise = new e(function(e, r) {
                                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                                t = e, n = r;
                            }), this.resolve = r(t), this.reject = r(n);
                        }(e);
                    };
                }, function(e, t, n) {
                    (function(t) {
                        function r(e, t) {
                            !s.isUndefined(e) && s.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
                        }
                        var o, i, a = (o = n(9)) && o.__esModule ? o : {
                            default: o
                        }, s = n(5), u = n(132), c = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }, f = {
                            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t) && (i = n(75)), 
                            i),
                            transformRequest: [ function(e, t) {
                                return u(t, "Content-Type"), s.isFormData(e) || s.isArrayBuffer(e) || s.isBuffer(e) || s.isStream(e) || s.isFile(e) || s.isBlob(e) ? e : s.isArrayBufferView(e) ? e.buffer : s.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), 
                                e.toString()) : s.isObject(e) ? (r(t, "application/json;charset=utf-8"), (0, a.default)(e)) : e;
                            } ],
                            transformResponse: [ function(e) {
                                if ("string" == typeof e) try {
                                    e = JSON.parse(e);
                                } catch (e) {}
                                return e;
                            } ],
                            timeout: 0,
                            xsrfCookieName: "XSRF-TOKEN",
                            xsrfHeaderName: "X-XSRF-TOKEN",
                            maxContentLength: -1,
                            validateStatus: function(e) {
                                return e >= 200 && e < 300;
                            },
                            headers: {
                                common: {
                                    Accept: "application/json, text/plain, */*"
                                }
                            }
                        };
                        s.forEach([ "delete", "get", "head" ], function(e) {
                            f.headers[e] = {};
                        }), s.forEach([ "post", "put", "patch" ], function(e) {
                            f.headers[e] = s.merge(c);
                        }), e.exports = f;
                    }).call(t, n(38));
                }, function(e, t) {
                    var n;
                    n = function() {
                        return this;
                    }();
                    try {
                        n = n || Function("return this")() || (0, eval)("this");
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        "object" == ("undefined" == typeof window ? "undefined" : u(window)) && (n = window);
                    }
                    e.exports = n;
                }, function(e, t, n) {
                    e.exports = !n(10) && !n(19)(function() {
                        return 7 != Object.defineProperty(n(39)("div"), "a", {
                            get: function() {
                                return 7;
                            }
                        }).a;
                    });
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    function o(e, t, n) {
                        var r = {}, o = {};
                        o[t] = n, r[e] = o;
                        var i = r;
                        return (0, a.default)(this.queryData).length ? m(this.queryData.$and) ? this.queryData = {
                            $and: [ this.queryData, i ]
                        } : this.queryData.$and.push(i) : this.queryData = i, i;
                    }
                    var i = r(n(9)), a = r(n(56)), s = r(n(27)), u = r(n(4)), c = r(n(36)), f = r(n(12)), l = r(n(13)), d = n(1), h = n(18), p = n(8), v = p.isObject, g = p.isString, y = p.isNumber, m = p.isUndefined, b = p.isArray, _ = n(11), w = n(79), x = function() {
                        function e(t) {
                            (0, f.default)(this, e), this.tableName = d._config.parameters.QUERY + "/" + t, 
                            this.className = t, this.init(), this.addArray = {}, this.setData = {};
                        }
                        return (0, l.default)(e, [ {
                            key: "init",
                            value: function() {
                                this.queryData = {}, this.location = {}, this.andData = {}, this.orData = {}, this.stat = {}, 
                                this.limitNum = 100, this.skipNum = 0, this.includes = "", this.queryReilation = {}, 
                                this.orders = null, this.keys = null;
                            }
                        }, {
                            key: "get",
                            value: function(e) {
                                var t = this;
                                if (!g(e)) throw new _(415);
                                var n = {}, r = {}, o = {}, i = {}, a = function(e, t) {
                                    if (!g(e) || !b(t)) throw new _(415);
                                    i[e] = {
                                        __op: "Add",
                                        objects: t
                                    };
                                }, s = function(e, t) {
                                    if (!g(e) || !b(t)) throw new _(415);
                                    i[e] = {
                                        __op: "AddUnique",
                                        objects: t
                                    };
                                }, f = function(e, t) {
                                    if (!g(e) || !b(t)) throw new _(415);
                                    i[e] = {
                                        __op: "Remove",
                                        objects: t
                                    };
                                }, l = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                                    if (!g(e) || !y(t)) throw new _(415);
                                    r[e] = {
                                        __op: "Increment",
                                        amount: t
                                    };
                                }, d = function(t) {
                                    if (!g(e)) throw new _(415);
                                    o[t] = {
                                        __op: "Delete"
                                    };
                                }, p = function(e, t) {
                                    if (!g(e) || m(t)) throw new _(415);
                                    var r = t.filename, o = t.cdn, i = t.url;
                                    m(r) || m(o) || m(i) ? n[e] = t : n[e] = {
                                        __type: "File",
                                        group: o,
                                        filename: r,
                                        url: i
                                    };
                                }, v = function() {
                                    var a = (0, c.default)(o, n, r, i);
                                    return "_User" === t.className ? new u.default(function(n, r) {
                                        h(t.tableName + "/" + e, "put", a).then(function(e) {
                                            var r = t.current(), o = (0, c.default)(r, a);
                                            w.save("bmob", o), n(e);
                                        }).catch(function(e) {
                                            r(e);
                                        });
                                    }) : h(t.tableName + "/" + e, "put", a);
                                }, x = {};
                                return "" !== this.includes && (x.include = this.includes), new u.default(function(n, r) {
                                    h(t.tableName + "/" + e, "get", x).then(function(r) {
                                        Object.defineProperty(r, "set", {
                                            value: p
                                        }), Object.defineProperty(r, "unset", {
                                            value: d
                                        }), Object.defineProperty(r, "save", {
                                            value: v
                                        }), Object.defineProperty(r, "increment", {
                                            value: l
                                        }), Object.defineProperty(r, "add", {
                                            value: a
                                        }), Object.defineProperty(r, "remove", {
                                            value: f
                                        }), Object.defineProperty(r, "addUnique", {
                                            value: s
                                        }), Object.defineProperty(r, "destroy", {
                                            value: function() {
                                                return t.destroy(e);
                                            }
                                        }), n(r);
                                    }).catch(function(e) {
                                        r(e);
                                    });
                                });
                            }
                        }, {
                            key: "destroy",
                            value: function(e) {
                                if (!g(e)) throw new _(415);
                                return h(this.tableName + "/" + e, "delete");
                            }
                        }, {
                            key: "set",
                            value: function(e, t) {
                                if (!g(e) || m(t)) throw new _(415, e + "字段参数,类型不正确");
                                var n = t.filename, r = t.cdn, o = t.url;
                                m(n) || m(r) || m(o) ? this.setData[e] = t : this.setData[e] = {
                                    __type: "File",
                                    group: r,
                                    filename: n,
                                    url: o
                                };
                            }
                        }, {
                            key: "add",
                            value: function(e, t) {
                                if (!g(e) || !b(t)) throw new _(415);
                                this.addArray[e] = {
                                    __op: "Add",
                                    objects: t
                                };
                            }
                        }, {
                            key: "addUnique",
                            value: function(e, t) {
                                if (!g(e) || !b(t)) throw new _(415);
                                this.addArray[e] = {
                                    __op: "AddUnique",
                                    objects: t
                                };
                            }
                        }, {
                            key: "current",
                            value: function() {
                                if ("hap" !== d.type) {
                                    var e = w.fetch("bmob");
                                    return "object" === (void 0 === e ? "undefined" : (0, s.default)(e)) ? e : JSON.parse(e);
                                }
                                return new u.default(function(e, t) {
                                    return w.fetch("bmob").then(function(t) {
                                        e(t);
                                    }).catch(function(e) {
                                        t(e);
                                    });
                                });
                            }
                        }, {
                            key: "updateStorage",
                            value: function(e) {
                                var t = this;
                                if (!g(e)) throw new _(415);
                                return new u.default(function(n, r) {
                                    var o = t.current();
                                    if (!o) throw new _(415);
                                    t.get(e).then(function(e) {
                                        var t = (0, c.default)(o, e);
                                        w.save("bmob", t), n(e);
                                    }).catch(function(e) {
                                        console.log(e), r(e);
                                    });
                                });
                            }
                        }, {
                            key: "save",
                            value: function() {
                                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (!v(t)) throw new _(415);
                                var n = this.setData.id ? "PUT" : "POST", r = this.setData.id ? this.setData.id : "";
                                delete this.setData.id;
                                var o = (0, c.default)(t, this.setData, this.addArray);
                                return new u.default(function(t, i) {
                                    h(e.tableName + "/" + r, n, o).then(function(n) {
                                        if (e.addArray = {}, e.setData = {}, "_User" === e.className) {
                                            var r = e.current(), i = (0, c.default)(r, o);
                                            w.save("bmob", i);
                                        }
                                        t(n);
                                    }).catch(function(e) {
                                        i(e);
                                    });
                                });
                            }
                        }, {
                            key: "saveAll",
                            value: function(e) {
                                var t = this;
                                if (!b(e)) throw new _(415);
                                if (e.length < 1) throw new _(416);
                                var n = void 0, r = void 0, o = "put", i = [];
                                e.map(function(e) {
                                    return "/undefined" == (n = "/" + e.objectId) && (n = "", o = "post"), r = {
                                        method: o,
                                        path: "" + t.tableName + n,
                                        body: e.setData
                                    }, i.push(r), e;
                                });
                                var a = {
                                    requests: i
                                }, s = d._config.parameters.BATCH;
                                return h(s, "POST", a);
                            }
                        }, {
                            key: "withinKilometers",
                            value: function(e, t) {
                                var n = t.latitude, r = t.longitude, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, i = {};
                                return i[e] = {
                                    $nearSphere: {
                                        __type: "GeoPoint",
                                        latitude: n,
                                        longitude: r
                                    },
                                    $maxDistanceInKilometers: o
                                }, this.location = i, i;
                            }
                        }, {
                            key: "withinGeoBox",
                            value: function(e, t, n) {
                                var r = t.latitude, o = t.longitude, i = {};
                                return i[e] = {
                                    $within: {
                                        $box: [ {
                                            __type: "GeoPoint",
                                            latitude: r,
                                            longitude: o
                                        }, {
                                            __type: "GeoPoint",
                                            latitude: n.latitude,
                                            longitude: n.longitude
                                        } ]
                                    }
                                }, this.location = i, i;
                            }
                        }, {
                            key: "statTo",
                            value: function(e, t) {
                                if (!g(e)) throw new _(415);
                                return this.stat[e] = t, this.stat;
                            }
                        }, {
                            key: "equalTo",
                            value: function(e, t, n) {
                                if (!g(e)) throw new _(415);
                                var r = function(e, t, n) {
                                    var r, o = {};
                                    switch (r = "createdAt" === e || "updateAt" === e ? {
                                        __type: "Date",
                                        iso: n
                                    } : n, t) {
                                      case "==":
                                      case "===":
                                        o[e] = r;
                                        break;

                                      case "!=":
                                        o[e] = {
                                            $ne: r
                                        };
                                        break;

                                      case "<":
                                        o[e] = {
                                            $lt: r
                                        };
                                        break;

                                      case "<=":
                                        o[e] = {
                                            $lte: r
                                        };
                                        break;

                                      case ">":
                                        o[e] = {
                                            $gt: r
                                        };
                                        break;

                                      case ">=":
                                        o[e] = {
                                            $gte: r
                                        };
                                        break;

                                      default:
                                        throw new _(415);
                                    }
                                    return o;
                                }(e, t, n);
                                return (0, a.default)(this.queryData).length ? m(this.queryData.$and) ? this.queryData = {
                                    $and: [ this.queryData, r ]
                                } : this.queryData.$and.push(r) : this.queryData = r, r;
                            }
                        }, {
                            key: "containedIn",
                            value: function(e, t) {
                                if (!g(e) || !b(t)) throw new _(415);
                                return o.call(this, e, "$in", t);
                            }
                        }, {
                            key: "notContainedIn",
                            value: function(e, t) {
                                if (!g(e) || !b(t)) throw new _(415);
                                return o.call(this, e, "$nin", t);
                            }
                        }, {
                            key: "exists",
                            value: function(e) {
                                if (!g(e)) throw new _(415);
                                return o.call(this, e, "$exists", !0);
                            }
                        }, {
                            key: "doesNotExist",
                            value: function(e) {
                                if (!g(e)) throw new _(415);
                                return o.call(this, e, "$exists", !1);
                            }
                        }, {
                            key: "or",
                            value: function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                t.map(function(e, t) {
                                    if (!v(e)) throw new _(415);
                                });
                                var r = this.queryData.$and;
                                if (!m(r)) {
                                    for (var o = 0; o < r.length; o++) for (var a = 0; a < t.length; a++) (0, i.default)(r[o]) === (0, 
                                    i.default)(t[a]) && this.queryData.$and.splice(o, 1);
                                    r.length || delete this.queryData.$and;
                                }
                                this.orData = {
                                    $or: t
                                };
                            }
                        }, {
                            key: "and",
                            value: function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                t.map(function(e, t) {
                                    if (!v(e)) throw new _(415);
                                }), this.andData = {
                                    $and: t
                                };
                            }
                        }, {
                            key: "limit",
                            value: function(e) {
                                if (!y(e)) throw new _(415);
                                e > 1e3 && (e = 1e3), this.limitNum = e;
                            }
                        }, {
                            key: "skip",
                            value: function(e) {
                                if (!y(e)) throw new _(415);
                                this.skipNum = e;
                            }
                        }, {
                            key: "order",
                            value: function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                t.map(function(e) {
                                    if (!g(e)) throw new _(415);
                                }), this.orders = t.join(",");
                            }
                        }, {
                            key: "include",
                            value: function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                t.map(function(e) {
                                    if (!g(e)) throw new _(415);
                                }), this.includes = t.join(",");
                            }
                        }, {
                            key: "select",
                            value: function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                t.map(function(e) {
                                    if (!g(e)) throw new _(415);
                                }), this.keys = t.join(",");
                            }
                        }, {
                            key: "field",
                            value: function(e, t) {
                                if (!g(e) || !g(t)) throw new _(415);
                                this.queryReilation.where = {
                                    $relatedTo: {
                                        object: {
                                            __type: "Pointer",
                                            className: this.className,
                                            objectId: t
                                        },
                                        key: e
                                    }
                                };
                            }
                        }, {
                            key: "relation",
                            value: function(e) {
                                if (!g(e)) throw new _(415);
                                e = "_User" === e ? "users" : "classes/" + e, this.queryReilation.count = 1;
                                var t = (0, c.default)(this.getParams(), this.queryReilation);
                                return new u.default(function(n, r) {
                                    h("/1/" + e, "get", t).then(function(e) {
                                        n(e);
                                    }).catch(function(e) {
                                        r(e);
                                    });
                                });
                            }
                        }, {
                            key: "getParams",
                            value: function() {
                                var e = {};
                                for (var t in (0, a.default)(this.queryData).length && (e.where = this.queryData), 
                                (0, a.default)(this.location).length && (e.where = (0, c.default)(this.location, this.queryData)), 
                                (0, a.default)(this.andData).length && (e.where = (0, c.default)(this.andData, this.queryData)), 
                                (0, a.default)(this.orData).length && (e.where = (0, c.default)(this.orData, this.queryData)), 
                                e.limit = this.limitNum, e.skip = this.skipNum, e.include = this.includes, e.order = this.orders, 
                                e.keys = this.keys, (0, a.default)(this.stat).length && (e = (0, c.default)(e, this.stat)), 
                                e) (e.hasOwnProperty(t) && null === e[t] || 0 === e[t] || "" === e[t]) && delete e[t];
                                return e;
                            }
                        }, {
                            key: "find",
                            value: function() {
                                var e = this, t = {}, n = {}, r = this.getParams(), o = function(e, n) {
                                    if (!e || m(n)) throw new _(415);
                                    t[e] = n;
                                }, i = function() {
                                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "updata";
                                    if (console.log(r), n.length < 1) throw new _(416);
                                    var o = void 0, i = void 0, a = "put", s = [];
                                    n.map(function(n) {
                                        return "/undefined" == (o = "/" + n.objectId) && (o = "", a = "post"), i = {
                                            method: a,
                                            path: "" + e.tableName + o,
                                            body: t
                                        }, "delete" === r && (i = {
                                            method: "DELETE",
                                            path: "" + e.tableName + o
                                        }), s.push(i), n;
                                    });
                                    var u = {
                                        requests: s
                                    }, c = d._config.parameters.BATCH;
                                    return h(c, "POST", u);
                                };
                                return new u.default(function(t, a) {
                                    h("" + e.tableName, "get", r).then(function(a) {
                                        var s = a.results;
                                        r.hasOwnProperty("count") && (s = a), e.init(), Object.defineProperty(s, "set", {
                                            value: o
                                        }), Object.defineProperty(s, "saveAll", {
                                            value: function() {
                                                return i();
                                            }
                                        }), Object.defineProperty(s, "destroyAll", {
                                            value: function() {
                                                return i("delete");
                                            }
                                        }), n = s, t(s);
                                    }).catch(function(e) {
                                        a(e);
                                    });
                                });
                            }
                        }, {
                            key: "count",
                            value: function() {
                                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = {};
                                return (0, a.default)(this.queryData).length && (n.where = this.queryData), (0, 
                                a.default)(this.andData).length && (n.where = (0, c.default)(this.andData, this.queryData)), 
                                (0, a.default)(this.orData).length && (n.where = (0, c.default)(this.orData, this.queryData)), 
                                n.count = 1, n.limit = t, new u.default(function(t, r) {
                                    h(e.tableName, "get", n).then(function(e) {
                                        var n = e.count;
                                        t(n);
                                    }).catch(function(e) {
                                        r(e);
                                    });
                                });
                            }
                        } ]), e;
                    }();
                    e.exports = x;
                }, function(e, t, n) {
                    e.exports = {
                        default: n(91),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    var r = n(17), o = n(20), i = n(93)(!1), a = n(43)("IE_PROTO");
                    e.exports = function(e, t) {
                        var n, s = o(e), u = 0, c = [];
                        for (n in s) n != a && r(s, n) && c.push(n);
                        for (;t.length > u; ) r(s, n = t[u++]) && (~i(c, n) || c.push(n));
                        return c;
                    };
                }, function(e, t, n) {
                    var r = n(25);
                    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                        return "String" == r(e) ? e.split("") : Object(e);
                    };
                }, function(e, t, n) {
                    var r = n(42), o = Math.min;
                    e.exports = function(e) {
                        return e > 0 ? o(r(e), 9007199254740991) : 0;
                    };
                }, function(e, t, n) {
                    var r = n(6), o = n(0), i = n(19);
                    e.exports = function(e, t) {
                        var n = (o.Object || {})[e] || Object[e], a = {};
                        a[e] = t(n), r(r.S + r.F * i(function() {
                            n(1);
                        }), "Object", a);
                    };
                }, function(e, t, n) {
                    var r = n(26), o = n(6), i = n(62), a = n(16), s = n(21), u = n(98), c = n(33), f = n(64), l = n(3)("iterator"), d = !([].keys && "next" in [].keys()), h = function() {
                        return this;
                    };
                    e.exports = function(e, t, n, p, v, g, y) {
                        u(n, t, p);
                        var m, b, _, w = function(e) {
                            if (!d && e in O) return O[e];
                            switch (e) {
                              case "keys":
                              case "values":
                                return function() {
                                    return new n(this, e);
                                };
                            }
                            return function() {
                                return new n(this, e);
                            };
                        }, x = t + " Iterator", k = "values" == v, S = !1, O = e.prototype, A = O[l] || O["@@iterator"] || v && O[v], P = A || w(v), T = v ? k ? w("entries") : P : void 0, E = "Array" == t && O.entries || A;
                        if (E && (_ = f(E.call(new e()))) !== Object.prototype && _.next && (c(_, x, !0), 
                        r || "function" == typeof _[l] || a(_, l, h)), k && A && "values" !== A.name && (S = !0, 
                        P = function() {
                            return A.call(this);
                        }), r && !y || !d && !S && O[l] || a(O, l, P), s[t] = P, s[x] = h, v) if (m = {
                            values: k ? P : w("values"),
                            keys: g ? P : w("keys"),
                            entries: T
                        }, y) for (b in m) b in O || i(O, b, m[b]); else o(o.P + o.F * (d || S), t, m);
                        return m;
                    };
                }, function(e, t, n) {
                    e.exports = n(16);
                }, function(e, t, n) {
                    var r = n(2).document;
                    e.exports = r && r.documentElement;
                }, function(e, t, n) {
                    var r = n(17), o = n(23), i = n(43)("IE_PROTO"), a = Object.prototype;
                    e.exports = Object.getPrototypeOf || function(e) {
                        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
                    };
                }, function(e, t, n) {
                    var r = n(57), o = n(45).concat("length", "prototype");
                    t.f = Object.getOwnPropertyNames || function(e) {
                        return r(e, o);
                    };
                }, function(e, t, n) {
                    var r = n(35), o = n(30), i = n(20), a = n(40), s = n(17), u = n(54), c = Object.getOwnPropertyDescriptor;
                    t.f = n(10) ? c : function(e, t) {
                        if (e = i(e), t = a(t, !0), u) try {
                            return c(e, t);
                        } catch (e) {}
                        if (s(e, t)) return o(!r.f.call(e, t), e[t]);
                    };
                }, function(e, t) {}, function(e, t, n) {
                    var r = n(50), o = n(3)("iterator"), i = n(21);
                    e.exports = n(0).getIteratorMethod = function(e) {
                        if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
                    };
                }, function(e, t, n) {
                    var r = n(7), o = n(29), i = n(3)("species");
                    e.exports = function(e, t) {
                        var n, a = r(e).constructor;
                        return void 0 === a || null == (n = r(a)[i]) ? t : o(n);
                    };
                }, function(e, t, n) {
                    var r, o, i, a = n(22), s = n(118), u = n(63), c = n(39), f = n(2), l = f.process, d = f.setImmediate, h = f.clearImmediate, p = f.MessageChannel, v = f.Dispatch, g = 0, y = {}, m = function() {
                        var e = +this;
                        if (y.hasOwnProperty(e)) {
                            var t = y[e];
                            delete y[e], t();
                        }
                    }, b = function(e) {
                        m.call(e.data);
                    };
                    d && h || (d = function(e) {
                        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
                        return y[++g] = function() {
                            s("function" == typeof e ? e : Function(e), t);
                        }, r(g), g;
                    }, h = function(e) {
                        delete y[e];
                    }, "process" == n(25)(l) ? r = function(e) {
                        l.nextTick(a(m, e, 1));
                    } : v && v.now ? r = function(e) {
                        v.now(a(m, e, 1));
                    } : p ? (i = (o = new p()).port2, o.port1.onmessage = b, r = a(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(e) {
                        f.postMessage(e + "", "*");
                    }, f.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function(e) {
                        u.appendChild(c("script")).onreadystatechange = function() {
                            u.removeChild(this), m.call(e);
                        };
                    } : function(e) {
                        setTimeout(a(m, e, 1), 0);
                    }), e.exports = {
                        set: d,
                        clear: h
                    };
                }, function(e, t) {
                    e.exports = function(e) {
                        try {
                            return {
                                e: !1,
                                v: e()
                            };
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return {
                                e: !0,
                                v: e
                            };
                        }
                    };
                }, function(e, t, n) {
                    var r = n(7), o = n(15), i = n(51);
                    e.exports = function(e, t) {
                        if (r(e), o(t) && t.constructor === e) return t;
                        var n = i.f(e);
                        return (0, n.resolve)(t), n.promise;
                    };
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var o = r(n(4)), i = r(n(9)), a = n(129), s = n(1), u = n(37);
                    e.exports = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "get", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return new o.default(function(o, c) {
                            void 0 === s.User && (s = n(1));
                            var f = function(e, t, n, r) {
                                var o = "wechatApp";
                                "nodejs" === s.type && (o = "nodejs");
                                var a = Math.round(new Date().getTime() / 1e3), c = "get" === n || "delete" === n ? "" : (0, 
                                i.default)(r), f = s.utils.randomString(), l = {
                                    "content-type": "application/json",
                                    "X-Bmob-SDK-Type": o,
                                    "X-Bmob-Safe-Sign": u.utf8MD5(t + a + e.securityCode + f + c + e.serverVersion),
                                    "X-Bmob-Safe-Timestamp": a,
                                    "X-Bmob-Noncestr-Key": f,
                                    "X-Bmob-SDK-Version": e.serverVersion,
                                    "X-Bmob-Secret-Key": e.secretKey
                                };
                                return e.applicationMasterKey && (l["X-Bmob-Master-Key"] = e.applicationMasterKey), 
                                l;
                            }(s._config, e, t, r), l = s.User.current();
                            l && (f["X-Bmob-Session-Token"] = l.sessionToken);
                            var d = a.create({
                                baseURL: s._config.host,
                                headers: f,
                                validateStatus: function(e) {
                                    return e < 500;
                                }
                            }), h = {
                                url: e,
                                method: t
                            };
                            "get" === h.method ? h.params = r : h.data = r, !0 === s._config.deBug && (console.log("host:", s._config.host), 
                            console.log("parma:", r)), d(h).then(function(e) {
                                var t = e.data;
                                (t.code && t.error || t.error) && c(t), o(t);
                            }).catch(function(e) {
                                c(e);
                            });
                        });
                    };
                }, function(e, t, n) {
                    e.exports = function(e, t) {
                        return function() {
                            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                            return e.apply(t, n);
                        };
                    };
                }, function(e, t, n) {
                    (function(t) {
                        var r, o = (r = n(4)) && r.__esModule ? r : {
                            default: r
                        }, i = n(5), a = n(133), s = n(135), u = n(136), c = n(137), f = n(76), l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(138);
                        e.exports = function(e) {
                            return new o.default(function(r, o) {
                                var d = e.data, h = e.headers;
                                i.isFormData(d) && delete h["Content-Type"];
                                var p = new XMLHttpRequest(), v = "onreadystatechange", g = !1;
                                if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || c(e.url) || (p = new window.XDomainRequest(), 
                                v = "onload", g = !0, p.onprogress = function() {}, p.ontimeout = function() {}), 
                                e.auth) {
                                    var y = e.auth.username || "", m = e.auth.password || "";
                                    h.Authorization = "Basic " + l(y + ":" + m);
                                }
                                if (p.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), 
                                p.timeout = e.timeout, p[v] = function() {
                                    if (p && (4 === p.readyState || g) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                                        var t = "getAllResponseHeaders" in p ? u(p.getAllResponseHeaders()) : null, n = {
                                            data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                            status: 1223 === p.status ? 204 : p.status,
                                            statusText: 1223 === p.status ? "No Content" : p.statusText,
                                            headers: t,
                                            config: e,
                                            request: p
                                        };
                                        a(r, o, n), p = null;
                                    }
                                }, p.onerror = function() {
                                    o(f("Network Error", e, null, p)), p = null;
                                }, p.ontimeout = function() {
                                    o(f("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null;
                                }, i.isStandardBrowserEnv()) {
                                    var b = n(139), _ = (e.withCredentials || c(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
                                    _ && (h[e.xsrfHeaderName] = _);
                                }
                                if ("setRequestHeader" in p && i.forEach(h, function(e, t) {
                                    void 0 === d && "content-type" === t.toLowerCase() ? delete h[t] : p.setRequestHeader(t, e);
                                }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                                    p.responseType = e.responseType;
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    if ("json" !== e.responseType) throw t;
                                }
                                "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), 
                                "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), 
                                e.cancelToken && e.cancelToken.promise.then(function(e) {
                                    p && (p.abort(), o(e), p = null);
                                }), void 0 === d && (d = null), p.send(d);
                            });
                        };
                    }).call(t, n(38));
                }, function(e, t, n) {
                    var r = n(134);
                    e.exports = function(e, t, n, o, i) {
                        var a = new Error(e);
                        return r(a, t, n, o, i);
                    };
                }, function(e, t, n) {
                    e.exports = function(e) {
                        return !(!e || !e.__CANCEL__);
                    };
                }, function(e, t, n) {
                    function r(e) {
                        this.message = e;
                    }
                    r.prototype.toString = function() {
                        return "Cancel" + (this.message ? ": " + this.message : "");
                    }, r.prototype.__CANCEL__ = !0, e.exports = r;
                }, function(e, t, n) {
                    var r = void 0, o = n(28).getAppType();
                    "h5" === o ? r = n(149) : "wx" === o ? r = n(150) : "hap" === o ? r = n(151) : "nodejs" === o && (r = n(152)), 
                    e.exports = r;
                }, function(e, t, n) {
                    e.exports = {
                        default: n(167),
                        __esModule: !0
                    };
                }, function(e, t, r) {
                    (function(t) {
                        var o = r(1), i = r(85), a = r(89), s = r(55), u = r(153), c = r(166), f = r(169), l = r(170), d = r(175), h = d.generateCode, p = d.getAccessToken, v = d.sendWeAppMessage, g = d.refund, y = d.notifyMsg, m = d.functions, b = d.timestamp, _ = d.requestPasswordReset, w = d.resetPasswordBySmsCode, x = d.updateUserPassword, k = d.geoPoint, S = d.checkMsg, O = d.push, A = r(176), P = A.requestSmsCode, T = A.verifySmsCode;
                        o.GeoPoint = k, o.generateCode = h, o.getAccessToken = p, o.sendWeAppMessage = v, 
                        o.refund = g, o.checkMsg = S, o.notifyMsg = y, o.requestSmsCode = P, o.verifySmsCode = T, 
                        o.run = o.functions = m, o.timestamp = b, o.requestPasswordReset = _, o.resetPasswordBySmsCode = w, 
                        o.updateUserPassword = x, o.push = O, o.Pay = new f(), o.User = new u(), o.Socket = function(e) {
                            return new l(e);
                        }, o.Query = function(e) {
                            return new s(e);
                        }, o.File = function(e, t) {
                            return new c(e, t);
                        }, o.request = r(18), o.type = o.utils.getAppType(), o.Pointer = function(e) {
                            return new i(e);
                        }, o.Relation = function(e) {
                            return new a(e);
                        }, "wx" === o.type ? "undefined" != typeof tt ? tt.Bmob = o : n.Bmob = o : "h5" === o.type ? window.Bmob = o : ("hap" === o.type || "nodejs" === o.type) && (t.Bmob = o), 
                        e.exports = o;
                    }).call(t, r(53));
                }, function(e, t, n) {
                    var r = void 0;
                    try {
                        r = "v" + n(83).version;
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        r = "v1.0.0";
                    }
                    e.exports = {
                        host: "https://api.bmobcloud.com",
                        secretKey: "",
                        securityCode: "",
                        applicationMasterKey: "",
                        parameters: {
                            GENERATECODE: "/1/wechatApp/qr/generatecode",
                            GETACCESSTOKEN: "/1/wechatApp/getAccessToken",
                            SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage",
                            NOTIFYMSG: "/1/wechatApp/notifyMsg",
                            REFUND: "/1/pay/refund",
                            REQUESTSMSCODE: "/1/requestSmsCode",
                            VERIFYSMSCODE: "/1/verifySmsCode",
                            FUNCTIONS: "/1/functions",
                            REQUESTPASSWORDRESET: "/1/requestPasswordReset",
                            RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode",
                            UPDATEUSERPASSWORD: "/1/updateUserPassword",
                            PUSH: "/1/push",
                            FILES: "/2/files",
                            FILESCHECK: "/1/wechatApp/checkImg",
                            DELFILES: "/2/cdnBatchDelete",
                            TIMESTAMP: "/1/timestamp",
                            LOGIN: "/1/login",
                            REGISTER: "/1/users",
                            REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify",
                            USERS: "/1/users",
                            PAY: "/1/pay",
                            WECHAT_APP: "/1/wechatApp/",
                            BATCH: "/1/batch",
                            CHECK_MSG: "/1/wechatApp/checkMsg",
                            DECRYPTION: "/1/wechatApp/decryption",
                            QUERY: "/1/classes"
                        },
                        version: r,
                        serverVersion: 10,
                        deBug: !1,
                        type: 3
                    };
                }, function(e, t) {
                    e.exports = {
                        name: "hydrogen-js-sdk",
                        version: "2.2.5",
                        description: "Bmob SDK",
                        main: "./index.js",
                        typings: "./index.d.ts",
                        scripts: {
                            test: 'echo "Error: no test specified" && exit 1',
                            build: "webpack --config config/prod.env.js",
                            watch: "webpack --watch --config config/prod.env.js",
                            dev: "webpack-dev-server --config config/dev.env.js"
                        },
                        repository: {
                            type: "git",
                            url: "git+https://github.com/bmob/hydrogen-js-sdk.git"
                        },
                        author: "Bmob",
                        license: "ISC",
                        bugs: {
                            url: "https://github.com/bmob/hydrogen-js-sdk/issues"
                        },
                        homepage: "https://github.com/bmob/hydrogen-js-sdk#readme",
                        dependencies: {
                            "babel-runtime": "^6.26.0",
                            "node.extend": "^2.0.0",
                            webpack: "^3.12.0"
                        },
                        devDependencies: {
                            "babel-core": "^6.26.3",
                            "babel-loader": "^7.1.5",
                            "babel-plugin-transform-runtime": "^6.23.0",
                            "babel-preset-es2015": "^6.24.1",
                            "clean-webpack-plugin": "^0.1.19",
                            eslint: "^4.19.1",
                            "eslint-config-standard": "^11.0.0",
                            "eslint-friendly-formatter": "^4.0.1",
                            "eslint-loader": "^2.0.0",
                            "eslint-plugin-import": "^2.12.0",
                            "eslint-plugin-node": "^6.0.1",
                            "eslint-plugin-promise": "^3.7.0",
                            "eslint-plugin-standard": "^3.1.0",
                            "html-webpack-plugin": "^2.30.1",
                            "uglifyjs-webpack-plugin": "^1.2.5",
                            "webpack-dev-server": "^2.11.2"
                        },
                        directories: {
                            doc: "docs"
                        },
                        keywords: [ "Bmob" ]
                    };
                }, function(e, t, n) {
                    e.exports = {
                        host: "https://apitest.bmob.cn",
                        applicationId: "",
                        applicationKey: "",
                        parameters: {
                            GENERATECODE: "/1/wechatApp/qr/generatecode",
                            GETACCESSTOKEN: "/1/wechatApp/getAccessToken",
                            SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage",
                            NOTIFYMSG: "/1/wechatApp/notifyMsg",
                            REFUND: "/1/pay/refund",
                            REQUESTSMSCODE: "/1/requestSmsCode",
                            VERIFYSMSCODE: "/1/verifySmsCode",
                            FUNCTIONS: "/1/functions",
                            REQUESTPASSWORDRESET: "/1/requestPasswordReset",
                            RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode",
                            UPDATEUSERPASSWORD: "/1/updateUserPassword",
                            PUSH: "/1/push",
                            FILES: "/2/files",
                            FILESCHECK: "/1/wechatApp/checkImg",
                            DELFILES: "/2/cdnBatchDelete",
                            TIMESTAMP: "/1/timestamp",
                            LOGIN: "/1/login",
                            REGISTER: "/1/users",
                            REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify",
                            USERS: "/1/users",
                            PAY: "/1/pay",
                            WECHAT_APP: "/1/wechatApp/",
                            BATCH: "/1/batch",
                            CHECK_MSG: "/1/wechatApp/checkMsg",
                            DECRYPTION: "/1/wechatApp/decryption",
                            QUERY: "/1/classes"
                        },
                        version: 1,
                        serverVersion: 10,
                        deBug: !1,
                        type: 1
                    };
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var o = r(n(12)), i = r(n(13)), a = n(8).isString, s = n(11), u = function() {
                        function e(t) {
                            if ((0, o.default)(this, e), !a(t)) throw new s(415);
                            this.tableName = t;
                        }
                        return (0, i.default)(e, [ {
                            key: "set",
                            value: function(e) {
                                if (!a(e)) throw new s(415);
                                return {
                                    __type: "Pointer",
                                    className: this.tableName,
                                    objectId: e
                                };
                            }
                        } ]), e;
                    }();
                    e.exports = u;
                }, function(e, t, n) {
                    e.exports = {
                        default: n(87),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    n(88);
                    var r = n(0).Object;
                    e.exports = function(e, t, n) {
                        return r.defineProperty(e, t, n);
                    };
                }, function(e, t, n) {
                    var r = n(6);
                    r(r.S + r.F * !n(10), "Object", {
                        defineProperty: n(14).f
                    });
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    function o(e, t) {
                        var n = this;
                        if (u(e)) return {
                            __op: t,
                            objects: [ {
                                __type: "Pointer",
                                className: this.tableName,
                                objectId: e
                            } ]
                        };
                        if (c(e)) {
                            var r = [];
                            return e.map(function(e) {
                                if (!u(e)) throw new f(415);
                                r.push({
                                    __type: "Pointer",
                                    className: n.tableName,
                                    objectId: e
                                });
                            }), {
                                __op: t,
                                objects: r
                            };
                        }
                        throw new f(415);
                    }
                    var i = r(n(12)), a = r(n(13)), s = n(8), u = s.isString, c = s.isArray, f = n(11), l = function() {
                        function e(t) {
                            if ((0, i.default)(this, e), !u(t)) throw new f(415);
                            this.tableName = t;
                        }
                        return (0, a.default)(e, [ {
                            key: "add",
                            value: function(e) {
                                return o.call(this, e, "AddRelation");
                            }
                        }, {
                            key: "remove",
                            value: function(e) {
                                return o.call(this, e, "RemoveRelation");
                            }
                        } ]), e;
                    }();
                    e.exports = l;
                }, function(e, t, n) {
                    var r = n(0), o = r.JSON || (r.JSON = {
                        stringify: JSON.stringify
                    });
                    e.exports = function(e) {
                        return o.stringify.apply(o, arguments);
                    };
                }, function(e, t, n) {
                    n(92), e.exports = n(0).Object.keys;
                }, function(e, t, n) {
                    var r = n(23), o = n(24);
                    n(60)("keys", function() {
                        return function(e) {
                            return o(r(e));
                        };
                    });
                }, function(e, t, n) {
                    var r = n(20), o = n(59), i = n(94);
                    e.exports = function(e) {
                        return function(t, n, a) {
                            var s, u = r(t), c = o(u.length), f = i(a, c);
                            if (e && n != n) {
                                for (;c > f; ) if ((s = u[f++]) != s) return !0;
                            } else for (;c > f; f++) if ((e || f in u) && u[f] === n) return e || f || 0;
                            return !e && -1;
                        };
                    };
                }, function(e, t, n) {
                    var r = n(42), o = Math.max, i = Math.min;
                    e.exports = function(e, t) {
                        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
                    };
                }, function(e, t, n) {
                    e.exports = {
                        default: n(96),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    n(32), n(34), e.exports = n(47).f("iterator");
                }, function(e, t, n) {
                    var r = n(42), o = n(41);
                    e.exports = function(e) {
                        return function(t, n) {
                            var i, a, s = String(o(t)), u = r(n), c = s.length;
                            return u < 0 || u >= c ? e ? "" : void 0 : (i = s.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : i : e ? s.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536;
                        };
                    };
                }, function(e, t, n) {
                    var r = n(46), o = n(30), i = n(33), a = {};
                    n(16)(a, n(3)("iterator"), function() {
                        return this;
                    }), e.exports = function(e, t, n) {
                        e.prototype = r(a, {
                            next: o(1, n)
                        }), i(e, t + " Iterator");
                    };
                }, function(e, t, n) {
                    var r = n(14), o = n(7), i = n(24);
                    e.exports = n(10) ? Object.defineProperties : function(e, t) {
                        o(e);
                        for (var n, a = i(t), s = a.length, u = 0; s > u; ) r.f(e, n = a[u++], t[n]);
                        return e;
                    };
                }, function(e, t, n) {
                    var r = n(101), o = n(102), i = n(21), a = n(20);
                    e.exports = n(61)(Array, "Array", function(e, t) {
                        this._t = a(e), this._i = 0, this._k = t;
                    }, function() {
                        var e = this._t, t = this._k, n = this._i++;
                        return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [ n, e[n] ]);
                    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
                }, function(e, t) {
                    e.exports = function() {};
                }, function(e, t) {
                    e.exports = function(e, t) {
                        return {
                            value: t,
                            done: !!e
                        };
                    };
                }, function(e, t, n) {
                    e.exports = {
                        default: n(104),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    n(105), n(67), n(110), n(111), e.exports = n(0).Symbol;
                }, function(e, t, n) {
                    var r = n(2), o = n(17), i = n(10), a = n(6), s = n(62), c = n(106).KEY, f = n(19), l = n(44), d = n(33), h = n(31), p = n(3), v = n(47), g = n(48), y = n(107), m = n(108), b = n(7), _ = n(15), w = n(23), x = n(20), k = n(40), S = n(30), O = n(46), A = n(109), P = n(66), T = n(49), E = n(14), j = n(24), C = P.f, I = E.f, D = A.f, L = r.Symbol, N = r.JSON, R = N && N.stringify, $ = p("_hidden"), M = p("toPrimitive"), F = {}.propertyIsEnumerable, B = l("symbol-registry"), U = l("symbols"), q = l("op-symbols"), H = Object.prototype, V = "function" == typeof L && !!T.f, K = r.QObject, z = !K || !K.prototype || !K.prototype.findChild, W = i && f(function() {
                        return 7 != O(I({}, "a", {
                            get: function() {
                                return I(this, "a", {
                                    value: 7
                                }).a;
                            }
                        })).a;
                    }) ? function(e, t, n) {
                        var r = C(H, t);
                        r && delete H[t], I(e, t, n), r && e !== H && I(H, t, r);
                    } : I, G = function(e) {
                        var t = U[e] = O(L.prototype);
                        return t._k = e, t;
                    }, J = V && "symbol" == u(L.iterator) ? function(e) {
                        return "symbol" == (void 0 === e ? "undefined" : u(e));
                    } : function(e) {
                        return e instanceof L;
                    }, X = function e(t, n, r) {
                        return t === H && e(q, n, r), b(t), n = k(n, !0), b(r), o(U, n) ? (r.enumerable ? (o(t, $) && t[$][n] && (t[$][n] = !1), 
                        r = O(r, {
                            enumerable: S(0, !1)
                        })) : (o(t, $) || I(t, $, S(1, {})), t[$][n] = !0), W(t, n, r)) : I(t, n, r);
                    }, Y = function(e, t) {
                        b(e);
                        for (var n, r = y(t = x(t)), o = 0, i = r.length; i > o; ) X(e, n = r[o++], t[n]);
                        return e;
                    }, Q = function(e) {
                        var t = F.call(this, e = k(e, !0));
                        return !(this === H && o(U, e) && !o(q, e)) && (!(t || !o(this, e) || !o(U, e) || o(this, $) && this[$][e]) || t);
                    }, Z = function(e, t) {
                        if (e = x(e), t = k(t, !0), e !== H || !o(U, t) || o(q, t)) {
                            var n = C(e, t);
                            return !n || !o(U, t) || o(e, $) && e[$][t] || (n.enumerable = !0), n;
                        }
                    }, ee = function(e) {
                        for (var t, n = D(x(e)), r = [], i = 0; n.length > i; ) o(U, t = n[i++]) || t == $ || t == c || r.push(t);
                        return r;
                    }, te = function(e) {
                        for (var t, n = e === H, r = D(n ? q : x(e)), i = [], a = 0; r.length > a; ) !o(U, t = r[a++]) || n && !o(H, t) || i.push(U[t]);
                        return i;
                    };
                    V || (s((L = function() {
                        if (this instanceof L) throw TypeError("Symbol is not a constructor!");
                        var e = h(arguments.length > 0 ? arguments[0] : void 0);
                        return i && z && W(H, e, {
                            configurable: !0,
                            set: function t(n) {
                                this === H && t.call(q, n), o(this, $) && o(this[$], e) && (this[$][e] = !1), W(this, e, S(1, n));
                            }
                        }), G(e);
                    }).prototype, "toString", function() {
                        return this._k;
                    }), P.f = Z, E.f = X, n(65).f = A.f = ee, n(35).f = Q, T.f = te, i && !n(26) && s(H, "propertyIsEnumerable", Q, !0), 
                    v.f = function(e) {
                        return G(p(e));
                    }), a(a.G + a.W + a.F * !V, {
                        Symbol: L
                    });
                    for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; ne.length > re; ) p(ne[re++]);
                    for (var oe = j(p.store), ie = 0; oe.length > ie; ) g(oe[ie++]);
                    a(a.S + a.F * !V, "Symbol", {
                        for: function(e) {
                            return o(B, e += "") ? B[e] : B[e] = L(e);
                        },
                        keyFor: function(e) {
                            if (!J(e)) throw TypeError(e + " is not a symbol!");
                            for (var t in B) if (B[t] === e) return t;
                        },
                        useSetter: function() {
                            z = !0;
                        },
                        useSimple: function() {
                            z = !1;
                        }
                    }), a(a.S + a.F * !V, "Object", {
                        create: function(e, t) {
                            return void 0 === t ? O(e) : Y(O(e), t);
                        },
                        defineProperty: X,
                        defineProperties: Y,
                        getOwnPropertyDescriptor: Z,
                        getOwnPropertyNames: ee,
                        getOwnPropertySymbols: te
                    });
                    var ae = f(function() {
                        T.f(1);
                    });
                    a(a.S + a.F * ae, "Object", {
                        getOwnPropertySymbols: function(e) {
                            return T.f(w(e));
                        }
                    }), N && a(a.S + a.F * (!V || f(function() {
                        var e = L();
                        return "[null]" != R([ e ]) || "{}" != R({
                            a: e
                        }) || "{}" != R(Object(e));
                    })), "JSON", {
                        stringify: function(e) {
                            for (var t, n, r = [ e ], o = 1; arguments.length > o; ) r.push(arguments[o++]);
                            if (n = t = r[1], (_(t) || void 0 !== e) && !J(e)) return m(t) || (t = function(e, t) {
                                if ("function" == typeof n && (t = n.call(this, e, t)), !J(t)) return t;
                            }), r[1] = t, R.apply(N, r);
                        }
                    }), L.prototype[M] || n(16)(L.prototype, M, L.prototype.valueOf), d(L, "Symbol"), 
                    d(Math, "Math", !0), d(r.JSON, "JSON", !0);
                }, function(e, t, n) {
                    var r = n(31)("meta"), o = n(15), i = n(17), a = n(14).f, s = 0, c = Object.isExtensible || function() {
                        return !0;
                    }, f = !n(19)(function() {
                        return c(Object.preventExtensions({}));
                    }), l = function(e) {
                        a(e, r, {
                            value: {
                                i: "O" + ++s,
                                w: {}
                            }
                        });
                    }, d = e.exports = {
                        KEY: r,
                        NEED: !1,
                        fastKey: function(e, t) {
                            if (!o(e)) return "symbol" == (void 0 === e ? "undefined" : u(e)) ? e : ("string" == typeof e ? "S" : "P") + e;
                            if (!i(e, r)) {
                                if (!c(e)) return "F";
                                if (!t) return "E";
                                l(e);
                            }
                            return e[r].i;
                        },
                        getWeak: function(e, t) {
                            if (!i(e, r)) {
                                if (!c(e)) return !0;
                                if (!t) return !1;
                                l(e);
                            }
                            return e[r].w;
                        },
                        onFreeze: function(e) {
                            return f && d.NEED && c(e) && !i(e, r) && l(e), e;
                        }
                    };
                }, function(e, t, n) {
                    var r = n(24), o = n(49), i = n(35);
                    e.exports = function(e) {
                        var t = r(e), n = o.f;
                        if (n) for (var a, s = n(e), u = i.f, c = 0; s.length > c; ) u.call(e, a = s[c++]) && t.push(a);
                        return t;
                    };
                }, function(e, t, n) {
                    var r = n(25);
                    e.exports = Array.isArray || function(e) {
                        return "Array" == r(e);
                    };
                }, function(e, t, n) {
                    var r = n(20), o = n(65).f, i = {}.toString, a = "object" == ("undefined" == typeof window ? "undefined" : u(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                    e.exports.f = function(e) {
                        return a && "[object Window]" == i.call(e) ? function(e) {
                            try {
                                return o(e);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                return a.slice();
                            }
                        }(e) : o(r(e));
                    };
                }, function(e, t, n) {
                    n(48)("asyncIterator");
                }, function(e, t, n) {
                    n(48)("observable");
                }, function(e, t, n) {
                    n(67), n(32), n(34), n(113), n(124), n(125), e.exports = n(0).Promise;
                }, function(e, t, n) {
                    var r, o, i, a, s = n(26), u = n(2), c = n(22), f = n(50), l = n(6), d = n(15), h = n(29), p = n(114), v = n(115), g = n(69), y = n(70).set, m = n(119)(), b = n(51), _ = n(71), w = n(120), x = n(72), k = u.TypeError, S = u.process, O = S && S.versions, A = O && O.v8 || "", P = u.Promise, T = "process" == f(S), E = function() {}, j = o = b.f, C = !!function() {
                        try {
                            var e = P.resolve(1), t = (e.constructor = {})[n(3)("species")] = function(e) {
                                e(E, E);
                            };
                            return (T || "function" == typeof PromiseRejectionEvent) && e.then(E) instanceof t && 0 !== A.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
                        } catch (e) {}
                    }(), I = function(e) {
                        var t;
                        return !(!d(e) || "function" != typeof (t = e.then)) && t;
                    }, D = function(e, t) {
                        if (!e._n) {
                            e._n = !0;
                            var n = e._c;
                            m(function() {
                                for (var r = e._v, o = 1 == e._s, i = 0; n.length > i; ) !function(t) {
                                    var n, i, a, s = o ? t.ok : t.fail, u = t.resolve, c = t.reject, f = t.domain;
                                    try {
                                        s ? (o || (2 == e._h && R(e), e._h = 1), !0 === s ? n = r : (f && f.enter(), n = s(r), 
                                        f && (f.exit(), a = !0)), n === t.promise ? c(k("Promise-chain cycle")) : (i = I(n)) ? i.call(n, u, c) : u(n)) : c(r);
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        f && !a && f.exit(), c(e);
                                    }
                                }(n[i++]);
                                e._c = [], e._n = !1, t && !e._h && L(e);
                            });
                        }
                    }, L = function(e) {
                        y.call(u, function() {
                            var t, n, r, o = e._v, i = N(e);
                            if (i && (t = _(function() {
                                T ? S.emit("unhandledRejection", o, e) : (n = u.onunhandledrejection) ? n({
                                    promise: e,
                                    reason: o
                                }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o);
                            }), e._h = T || N(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v;
                        });
                    }, N = function(e) {
                        return 1 !== e._h && 0 === (e._a || e._c).length;
                    }, R = function(e) {
                        y.call(u, function() {
                            var t;
                            T ? S.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                                promise: e,
                                reason: e._v
                            });
                        });
                    }, $ = function(e) {
                        var t = this;
                        t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), 
                        D(t, !0));
                    }, M = function e(t) {
                        var n, r = this;
                        if (!r._d) {
                            r._d = !0, r = r._w || r;
                            try {
                                if (r === t) throw k("Promise can't be resolved itself");
                                (n = I(t)) ? m(function() {
                                    var o = {
                                        _w: r,
                                        _d: !1
                                    };
                                    try {
                                        n.call(t, c(e, o, 1), c($, o, 1));
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        $.call(o, e);
                                    }
                                }) : (r._v = t, r._s = 1, D(r, !1));
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                $.call({
                                    _w: r,
                                    _d: !1
                                }, t);
                            }
                        }
                    };
                    C || (P = function(e) {
                        p(this, P, "Promise", "_h"), h(e), r.call(this);
                        try {
                            e(c(M, this, 1), c($, this, 1));
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            $.call(this, e);
                        }
                    }, (r = function(e) {
                        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
                        this._n = !1;
                    }).prototype = n(121)(P.prototype, {
                        then: function(e, t) {
                            var n = j(g(this, P));
                            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, 
                            n.domain = T ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && D(this, !1), 
                            n.promise;
                        },
                        catch: function(e) {
                            return this.then(void 0, e);
                        }
                    }), i = function() {
                        var e = new r();
                        this.promise = e, this.resolve = c(M, e, 1), this.reject = c($, e, 1);
                    }, b.f = j = function(e) {
                        return e === P || e === a ? new i(e) : o(e);
                    }), l(l.G + l.W + l.F * !C, {
                        Promise: P
                    }), n(33)(P, "Promise"), n(122)("Promise"), a = n(0).Promise, l(l.S + l.F * !C, "Promise", {
                        reject: function(e) {
                            var t = j(this);
                            return (0, t.reject)(e), t.promise;
                        }
                    }), l(l.S + l.F * (s || !C), "Promise", {
                        resolve: function(e) {
                            return x(s && this === a ? P : this, e);
                        }
                    }), l(l.S + l.F * !(C && n(123)(function(e) {
                        P.all(e).catch(E);
                    })), "Promise", {
                        all: function(e) {
                            var t = this, n = j(t), r = n.resolve, o = n.reject, i = _(function() {
                                var n = [], i = 0, a = 1;
                                v(e, !1, function(e) {
                                    var s = i++, u = !1;
                                    n.push(void 0), a++, t.resolve(e).then(function(e) {
                                        u || (u = !0, n[s] = e, --a || r(n));
                                    }, o);
                                }), --a || r(n);
                            });
                            return i.e && o(i.v), n.promise;
                        },
                        race: function(e) {
                            var t = this, n = j(t), r = n.reject, o = _(function() {
                                v(e, !1, function(e) {
                                    t.resolve(e).then(n.resolve, r);
                                });
                            });
                            return o.e && r(o.v), n.promise;
                        }
                    });
                }, function(e, t) {
                    e.exports = function(e, t, n, r) {
                        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
                        return e;
                    };
                }, function(e, t, n) {
                    var r = n(22), o = n(116), i = n(117), a = n(7), s = n(59), u = n(68), c = {}, f = {};
                    (t = e.exports = function(e, t, n, l, d) {
                        var h, p, v, g, y = d ? function() {
                            return e;
                        } : u(e), m = r(n, l, t ? 2 : 1), b = 0;
                        if ("function" != typeof y) throw TypeError(e + " is not iterable!");
                        if (i(y)) {
                            for (h = s(e.length); h > b; b++) if ((g = t ? m(a(p = e[b])[0], p[1]) : m(e[b])) === c || g === f) return g;
                        } else for (v = y.call(e); !(p = v.next()).done; ) if ((g = o(v, m, p.value, t)) === c || g === f) return g;
                    }).BREAK = c, t.RETURN = f;
                }, function(e, t, n) {
                    var r = n(7);
                    e.exports = function(e, t, n, o) {
                        try {
                            return o ? t(r(n)[0], n[1]) : t(n);
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            var i = e.return;
                            throw void 0 !== i && r(i.call(e)), t;
                        }
                    };
                }, function(e, t, n) {
                    var r = n(21), o = n(3)("iterator"), i = Array.prototype;
                    e.exports = function(e) {
                        return void 0 !== e && (r.Array === e || i[o] === e);
                    };
                }, function(e, t) {
                    e.exports = function(e, t, n) {
                        var r = void 0 === n;
                        switch (t.length) {
                          case 0:
                            return r ? e() : e.call(n);

                          case 1:
                            return r ? e(t[0]) : e.call(n, t[0]);

                          case 2:
                            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

                          case 3:
                            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

                          case 4:
                            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
                        }
                        return e.apply(n, t);
                    };
                }, function(e, t, n) {
                    var r = n(2), o = n(70).set, i = r.MutationObserver || r.WebKitMutationObserver, a = r.process, s = r.Promise, u = "process" == n(25)(a);
                    e.exports = function() {
                        var e, t, n, c = function() {
                            var r, o;
                            for (u && (r = a.domain) && r.exit(); e; ) {
                                o = e.fn, e = e.next;
                                try {
                                    o();
                                } catch (r) {
                                    r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                                    throw e ? n() : t = void 0, r;
                                }
                            }
                            t = void 0, r && r.enter();
                        };
                        if (u) n = function() {
                            a.nextTick(c);
                        }; else if (!i || r.navigator && r.navigator.standalone) if (s && s.resolve) {
                            var f = s.resolve(void 0);
                            n = function() {
                                f.then(c);
                            };
                        } else n = function() {
                            o.call(r, c);
                        }; else {
                            var l = !0, d = document.createTextNode("");
                            new i(c).observe(d, {
                                characterData: !0
                            }), n = function() {
                                d.data = l = !l;
                            };
                        }
                        return function(r) {
                            var o = {
                                fn: r,
                                next: void 0
                            };
                            t && (t.next = o), e || (e = o, n()), t = o;
                        };
                    };
                }, function(e, t, n) {
                    var r = n(2).navigator;
                    e.exports = r && r.userAgent || "";
                }, function(e, t, n) {
                    var r = n(16);
                    e.exports = function(e, t, n) {
                        for (var o in t) n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
                        return e;
                    };
                }, function(e, t, n) {
                    var r = n(2), o = n(0), i = n(14), a = n(10), s = n(3)("species");
                    e.exports = function(e) {
                        var t = "function" == typeof o[e] ? o[e] : r[e];
                        a && t && !t[s] && i.f(t, s, {
                            configurable: !0,
                            get: function() {
                                return this;
                            }
                        });
                    };
                }, function(e, t, n) {
                    var r = n(3)("iterator"), o = !1;
                    try {
                        var i = [ 7 ][r]();
                        i.return = function() {
                            o = !0;
                        }, Array.from(i, function() {
                            throw 2;
                        });
                    } catch (e) {}
                    e.exports = function(e, t) {
                        if (!t && !o) return !1;
                        var n = !1;
                        try {
                            var i = [ 7 ], a = i[r]();
                            a.next = function() {
                                return {
                                    done: n = !0
                                };
                            }, i[r] = function() {
                                return a;
                            }, e(i);
                        } catch (e) {}
                        return n;
                    };
                }, function(e, t, n) {
                    var r = n(6), o = n(0), i = n(2), a = n(69), s = n(72);
                    r(r.P + r.R, "Promise", {
                        finally: function(e) {
                            var t = a(this, o.Promise || i.Promise), n = "function" == typeof e;
                            return this.then(n ? function(n) {
                                return s(t, e()).then(function() {
                                    return n;
                                });
                            } : e, n ? function(n) {
                                return s(t, e()).then(function() {
                                    throw n;
                                });
                            } : e);
                        }
                    });
                }, function(e, t, n) {
                    var r = n(6), o = n(51), i = n(71);
                    r(r.S, "Promise", {
                        try: function(e) {
                            var t = o.f(this), n = i(e);
                            return (n.e ? t.reject : t.resolve)(n.v), t.promise;
                        }
                    });
                }, function(e, t, n) {
                    n(127), e.exports = n(0).Object.assign;
                }, function(e, t, n) {
                    var r = n(6);
                    r(r.S + r.F, "Object", {
                        assign: n(128)
                    });
                }, function(e, t, n) {
                    var r = n(10), o = n(24), i = n(49), a = n(35), s = n(23), u = n(58), c = Object.assign;
                    e.exports = !c || n(19)(function() {
                        var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
                        return e[n] = 7, r.split("").forEach(function(e) {
                            t[e] = e;
                        }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r;
                    }) ? function(e, t) {
                        for (var n = s(e), c = arguments.length, f = 1, l = i.f, d = a.f; c > f; ) for (var h, p = u(arguments[f++]), v = l ? o(p).concat(l(p)) : o(p), g = v.length, y = 0; g > y; ) h = v[y++], 
                        r && !d.call(p, h) || (n[h] = p[h]);
                        return n;
                    } : c;
                }, function(e, t, n) {
                    function r(e) {
                        var t = new u(e), n = s(u.prototype.request, t);
                        return a.extend(n, u.prototype, t), a.extend(n, t), n;
                    }
                    var o, i = (o = n(4)) && o.__esModule ? o : {
                        default: o
                    }, a = n(5), s = n(74), u = n(131), c = n(52), f = r(c);
                    f.Axios = u, f.create = function(e) {
                        return r(a.merge(c, e));
                    }, f.Cancel = n(78), f.CancelToken = n(145), f.isCancel = n(77), f.all = function(e) {
                        return i.default.all(e);
                    }, f.spread = n(146), e.exports = f, e.exports.default = f;
                }, function(e, t, n) {
                    function r(e) {
                        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
                    }
                    e.exports = function(e) {
                        return null != e && (r(e) || function(e) {
                            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0));
                        }(e) || !!e._isBuffer);
                    };
                }, function(e, t, n) {
                    function r(e) {
                        this.defaults = e, this.interceptors = {
                            request: new u(),
                            response: new u()
                        };
                    }
                    var o, i = (o = n(4)) && o.__esModule ? o : {
                        default: o
                    }, a = n(52), s = n(5), u = n(140), c = n(141);
                    r.prototype.request = function(e) {
                        "string" == typeof e && (e = s.merge({
                            url: arguments[0]
                        }, arguments[1])), (e = s.merge(a, {
                            method: "get"
                        }, this.defaults, e)).method = e.method.toLowerCase();
                        var t = [ c, void 0 ], n = i.default.resolve(e);
                        for (this.interceptors.request.forEach(function(e) {
                            t.unshift(e.fulfilled, e.rejected);
                        }), this.interceptors.response.forEach(function(e) {
                            t.push(e.fulfilled, e.rejected);
                        }); t.length; ) n = n.then(t.shift(), t.shift());
                        return n;
                    }, s.forEach([ "delete", "get", "head", "options" ], function(e) {
                        r.prototype[e] = function(t, n) {
                            return this.request(s.merge(n || {}, {
                                method: e,
                                url: t
                            }));
                        };
                    }), s.forEach([ "post", "put", "patch" ], function(e) {
                        r.prototype[e] = function(t, n, r) {
                            return this.request(s.merge(r || {}, {
                                method: e,
                                url: t,
                                data: n
                            }));
                        };
                    }), e.exports = r;
                }, function(e, t, n) {
                    var r = n(5);
                    e.exports = function(e, t) {
                        r.forEach(e, function(n, r) {
                            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
                        });
                    };
                }, function(e, t, n) {
                    var r = n(76);
                    e.exports = function(e, t, n) {
                        var o = n.config.validateStatus;
                        n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
                    };
                }, function(e, t, n) {
                    e.exports = function(e, t, n, r, o) {
                        return e.config = t, n && (e.code = n), e.request = r, e.response = o, e;
                    };
                }, function(e, t, n) {
                    function r(e) {
                        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                    }
                    var o, i = (o = n(9)) && o.__esModule ? o : {
                        default: o
                    }, a = n(5);
                    e.exports = function(e, t, n) {
                        if (!t) return e;
                        var o;
                        if (n) o = n(t); else if (a.isURLSearchParams(t)) o = t.toString(); else {
                            var s = [];
                            a.forEach(t, function(e, t) {
                                null != e && (a.isArray(e) ? t += "[]" : e = [ e ], a.forEach(e, function(e) {
                                    a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = (0, i.default)(e)), s.push(r(t) + "=" + r(e));
                                }));
                            }), o = s.join("&");
                        }
                        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e;
                    };
                }, function(e, t, n) {
                    var r = n(5), o = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
                    e.exports = function(e) {
                        var t, n, i, a = {};
                        return e ? (r.forEach(e.split("\n"), function(e) {
                            if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), 
                            t) {
                                if (a[t] && o.indexOf(t) >= 0) return;
                                a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([ n ]) : a[t] ? a[t] + ", " + n : n;
                            }
                        }), a) : a;
                    };
                }, function(e, t, n) {
                    var r = n(5);
                    e.exports = r.isStandardBrowserEnv() ? function() {
                        function e(e) {
                            var t = e;
                            return n && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), 
                            {
                                href: o.href,
                                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                                host: o.host,
                                search: o.search ? o.search.replace(/^\?/, "") : "",
                                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                                hostname: o.hostname,
                                port: o.port,
                                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                            };
                        }
                        var t, n = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
                        return t = e(window.location.href), function(n) {
                            var o = r.isString(n) ? e(n) : n;
                            return o.protocol === t.protocol && o.host === t.host;
                        };
                    }() : function() {
                        return !0;
                    };
                }, function(e, t, n) {
                    function r() {
                        this.message = "String contains an invalid character";
                    }
                    (r.prototype = new Error()).code = 5, r.prototype.name = "InvalidCharacterError", 
                    e.exports = function(e) {
                        for (var t, n, o = String(e), i = "", a = 0, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; o.charAt(0 | a) || (s = "=", 
                        a % 1); i += s.charAt(63 & t >> 8 - a % 1 * 8)) {
                            if ((n = o.charCodeAt(a += .75)) > 255) throw new r();
                            t = t << 8 | n;
                        }
                        return i;
                    };
                }, function(e, t, n) {
                    var r = n(5);
                    e.exports = r.isStandardBrowserEnv() ? {
                        write: function(e, t, n, o, i, a) {
                            var s = [];
                            s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), 
                            r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), 
                            document.cookie = s.join("; ");
                        },
                        read: function(e) {
                            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                            return t ? decodeURIComponent(t[3]) : null;
                        },
                        remove: function(e) {
                            this.write(e, "", Date.now() - 864e5);
                        }
                    } : {
                        write: function() {},
                        read: function() {
                            return null;
                        },
                        remove: function() {}
                    };
                }, function(e, t, n) {
                    function r() {
                        this.handlers = [];
                    }
                    var o = n(5);
                    r.prototype.use = function(e, t) {
                        return this.handlers.push({
                            fulfilled: e,
                            rejected: t
                        }), this.handlers.length - 1;
                    }, r.prototype.eject = function(e) {
                        this.handlers[e] && (this.handlers[e] = null);
                    }, r.prototype.forEach = function(e) {
                        o.forEach(this.handlers, function(t) {
                            null !== t && e(t);
                        });
                    }, e.exports = r;
                }, function(e, t, n) {
                    function r(e) {
                        e.cancelToken && e.cancelToken.throwIfRequested();
                    }
                    var o, i = (o = n(4)) && o.__esModule ? o : {
                        default: o
                    }, a = n(5), s = n(142), u = n(77), c = n(52), f = n(143), l = n(144);
                    e.exports = function(e) {
                        return r(e), e.baseURL && !f(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, 
                        e.data = s(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), 
                        a.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
                            delete e.headers[t];
                        }), (e.adapter || c.adapter)(e).then(function(t) {
                            return r(e), t.data = s(t.data, t.headers, e.transformResponse), t;
                        }, function(t) {
                            return u(t) || (r(e), t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))), 
                            i.default.reject(t);
                        });
                    };
                }, function(e, t, n) {
                    var r = n(5);
                    e.exports = function(e, t, n) {
                        return r.forEach(n, function(n) {
                            e = n(e, t);
                        }), e;
                    };
                }, function(e, t, n) {
                    e.exports = function(e) {
                        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
                    };
                }, function(e, t, n) {
                    e.exports = function(e, t) {
                        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
                    };
                }, function(e, t, n) {
                    function r(e) {
                        if ("function" != typeof e) throw new TypeError("executor must be a function.");
                        var t;
                        this.promise = new i.default(function(e) {
                            t = e;
                        });
                        var n = this;
                        e(function(e) {
                            n.reason || (n.reason = new a(e), t(n.reason));
                        });
                    }
                    var o, i = (o = n(4)) && o.__esModule ? o : {
                        default: o
                    }, a = n(78);
                    r.prototype.throwIfRequested = function() {
                        if (this.reason) throw this.reason;
                    }, r.source = function() {
                        var e;
                        return {
                            token: new r(function(t) {
                                e = t;
                            }),
                            cancel: e
                        };
                    }, e.exports = r;
                }, function(e, t, n) {
                    e.exports = function(e) {
                        return function(t) {
                            return e.apply(null, t);
                        };
                    };
                }, function(e, t, r) {
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var i = o(r(4)), a = o(r(9)), s = r(1), u = r(37), c = "wechatApp";
                    "undefined" != typeof tt ? c = "toutiao" : "undefined" != typeof qq && (c = "qqApp"), 
                    e.exports = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "get", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return new i.default(function(i, f) {
                            var l = function(e, t, n, r) {
                                var o = Math.round(new Date().getTime() / 1e3), i = s.utils.randomString(), f = "get" === n || "delete" === n ? "" : (0, 
                                a.default)(r), l = u.utf8MD5(t + o + e.securityCode + i + f + e.serverVersion), d = {
                                    "content-type": "application/json",
                                    "X-Bmob-SDK-Type": c,
                                    "X-Bmob-Safe-Sign": l,
                                    "X-Bmob-Safe-Timestamp": o,
                                    "X-Bmob-Noncestr-Key": i,
                                    "X-Bmob-SDK-Version": e.serverVersion,
                                    "X-Bmob-Secret-Key": e.secretKey
                                };
                                return e.applicationMasterKey && (d["X-Bmob-Master-Key"] = e.applicationMasterKey), 
                                d;
                            }(s._config, e, t, o);
                            void 0 === s.User && (s = r(1));
                            var d = s.User.current();
                            d && (l["X-Bmob-Session-Token"] = d.sessionToken), !0 === s._config.deBug && (console.log("host:", s._config.host), 
                            console.log("parma:", o)), n.request({
                                url: s._config.host + e,
                                method: t,
                                data: o,
                                header: l,
                                success: function(e) {
                                    (e.data.code && e.data.error || e.data.error) && f(e.data), i(e.data);
                                },
                                fail: function(e) {
                                    console.log(e), f(e);
                                }
                            });
                        });
                    };
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var o = r(n(27)), i = r(n(4)), a = r(n(9)), s = n(1), u = n(37);
                    e.exports = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "get", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return new i.default(function(i, c) {
                            var f = function(e, t, n, r) {
                                var o = Math.round(new Date().getTime() / 1e3), i = s.utils.randomString(), c = "get" === n || "delete" === n ? "" : (0, 
                                a.default)(r), f = {
                                    "content-type": "application/json",
                                    "X-Bmob-SDK-Type": "wechatApp",
                                    "X-Bmob-Safe-Sign": u.utf8MD5(t + o + e.securityCode + i + c + e.serverVersion),
                                    "X-Bmob-Safe-Timestamp": o,
                                    "X-Bmob-Noncestr-Key": i,
                                    "X-Bmob-SDK-Version": e.serverVersion,
                                    "X-Bmob-Secret-Key": e.secretKey
                                };
                                return e.applicationMasterKey && (f["X-Bmob-Master-Key"] = e.applicationMasterKey), 
                                f;
                            }(s._config, e, t, r);
                            void 0 === s.User && (s = n(1));
                            var l = s.User.current();
                            l && (f["X-Bmob-Session-Token"] = l.sessionToken), "object" === (void 0 === r ? "undefined" : (0, 
                            o.default)(r)) && (r = (0, a.default)(r)), "require('@system.fetch')".fetch({
                                url: s._config.host + e,
                                header: f,
                                method: t,
                                data: r,
                                success: function(e) {
                                    var t = JSON.parse(e.data);
                                    t.code && c(t), i(t);
                                },
                                fail: function(e, t) {
                                    console.log("handling fail, code = " + t), c(e);
                                }
                            });
                        });
                    };
                }, function(e, t, n) {
                    var r, o = (r = n(9)) && r.__esModule ? r : {
                        default: r
                    }, i = n(8).isString, a = void 0;
                    a = "undefined" != typeof cc ? cc.sys.localStorage : localStorage;
                    var s = {
                        save: function(e, t) {
                            if (!i(e) || !t) throw new Error(415);
                            a.setItem(e, (0, o.default)(t));
                        },
                        fetch: function(e) {
                            if (!i(e)) throw new Error(415);
                            return JSON.parse(a.getItem(e)) || null;
                        },
                        remove: function(e) {
                            if (!i(e)) throw new Error(415);
                            a.removeItem(e);
                        },
                        clear: function() {
                            a.clear();
                        }
                    };
                    e.exports = s;
                }, function(e, t, r) {
                    var o, i = (o = r(9)) && o.__esModule ? o : {
                        default: o
                    }, a = r(8), s = a.isString, u = a.isObject, c = {
                        save: function(e, t) {
                            if (!s(e) || !t) throw new Error(415);
                            return t = u(t) ? (0, i.default)(t) : t, n.setStorageSync(e, t);
                        },
                        fetch: function(e) {
                            if (!s(e)) throw new Error(415);
                            return n.getStorageSync(e) || null;
                        },
                        remove: function(e) {
                            if (!s(e)) throw new Error(415);
                            return n.removeStorageSync(e);
                        },
                        clear: function() {
                            return n.clearStorageSync();
                        }
                    };
                    e.exports = c;
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var o = r(n(4)), i = r(n(9)), a = n(8).isString, s = "xxrequire('@system.storage')xx", u = {
                        save: function(e, t) {
                            if (!a(e) || !t) throw new Error(415);
                            s.set({
                                key: e,
                                value: (0, i.default)(t),
                                success: function(e) {
                                    return console.log("handling success"), e;
                                },
                                fail: function(e, t) {
                                    console.log("handling fail, code = " + t);
                                }
                            });
                        },
                        fetch: function(e) {
                            if (!a(e)) throw new Error(415);
                            return new o.default(function(t, n) {
                                return s.get({
                                    key: e,
                                    success: function(e) {
                                        t(e || null);
                                    },
                                    fail: function(e, t) {
                                        console.log("handling fail, code = " + t), n(e);
                                    }
                                });
                            });
                        },
                        remove: function(e) {
                            if (!a(e)) throw new Error(415);
                            s.delete({
                                key: e,
                                success: function(e) {
                                    console.log("handling success");
                                },
                                fail: function(e, t) {
                                    console.log("handling fail, code = " + t);
                                }
                            });
                        },
                        clear: function() {
                            s.clear({
                                success: function(e) {
                                    console.log("handling success");
                                },
                                fail: function(e, t) {
                                    console.log("handling fail, code = " + t);
                                }
                            });
                        }
                    };
                    e.exports = u;
                }, function(e, t, n) {
                    e.exports = {
                        save: function(e, t) {},
                        fetch: function(e) {
                            return null;
                        },
                        remove: function(e) {},
                        clear: function() {}
                    };
                }, function(e, t, r) {
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var i = o(r(4)), a = o(r(36)), s = o(r(154)), u = o(r(12)), c = o(r(13)), f = o(r(157)), l = o(r(158)), d = r(18), h = r(79), p = r(55), v = r(1), g = r(11), y = r(8), m = y.isObject, b = y.isString, _ = y.isNumber, w = function(e) {
                        function t() {
                            return (0, u.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, "_User"));
                        }
                        return (0, l.default)(t, e), (0, c.default)(t, [ {
                            key: "set",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                b(e) && (this.setData[e] = t);
                            }
                        }, {
                            key: "requestEmailVerify",
                            value: function(e) {
                                if (!b(e)) throw new g(415);
                                this.setData = (0, a.default)({}, {
                                    email: e
                                }), console.log(this.setData);
                                var t = v._config.parameters.REQUEST_EMAIL_VERIFY;
                                return d(t, "post", this.setData);
                            }
                        }, {
                            key: "register",
                            value: function(e) {
                                if (!m(e)) throw new g(415);
                                this.setData = (0, a.default)({}, e);
                                var t = v._config.parameters.REGISTER;
                                return d(t, "post", this.setData);
                            }
                        }, {
                            key: "login",
                            value: function(e, t) {
                                var n = this;
                                if (!b(e) || !b(t)) throw new g(415);
                                this.setData = (0, a.default)({}, {
                                    username: e,
                                    password: t
                                });
                                var r = v._config.parameters.LOGIN;
                                return new i.default(function(e, t) {
                                    d(r, "get", n.setData).then(function(t) {
                                        h.save("bmob", t), e(t);
                                    }).catch(function(e) {
                                        t(e);
                                    });
                                });
                            }
                        }, {
                            key: "logout",
                            value: function() {
                                h.clear();
                            }
                        }, {
                            key: "users",
                            value: function() {
                                var e = v._config.parameters.USERS;
                                return d(e, "get");
                            }
                        }, {
                            key: "decryption",
                            value: function(e) {
                                var t = this;
                                return new i.default(function(n, r) {
                                    var o = e.iv ? e.iv : e.detail.iv, i = e.encryptedData ? e.encryptedData : e.detail.encryptedData, a = t.current(), s = {
                                        sessionKey: "undefined" != typeof tt ? a.authData.toutiao.session_key : "undefined" != typeof qq ? a.authData.qqapp.session_key : a.authData.weapp.session_key,
                                        encryptedData: i,
                                        iv: o
                                    }, u = v._config.parameters.DECRYPTION;
                                    d(u, "POST", s).then(function(e) {
                                        n(e);
                                    }).catch(function(e) {
                                        r(e);
                                    });
                                });
                            }
                        }, {
                            key: "signOrLoginByMobilePhone",
                            value: function(e, t) {
                                if (!_(e) || !_(t)) throw new g(415);
                                this.setData = (0, a.default)({}, {
                                    mobilePhoneNumber: e,
                                    smsCode: t
                                });
                                var n = v._config.parameters.LOGIN;
                                return d(n, "get", this.setData);
                            }
                        }, {
                            key: "requestOpenId",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = v._config.parameters.WECHAT_APP;
                                return d(n + e, "POST", {
                                    anonymous_code: t
                                });
                            }
                        }, {
                            key: "linkWith",
                            value: function(e) {
                                var t = {
                                    authData: e
                                }, n = v._config.parameters.USERS;
                                return d(n, "POST", t);
                            }
                        }, {
                            key: "loginWithWeapp",
                            value: function(e) {
                                var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = arguments[2];
                                return new i.default(function(o, i) {
                                    t.requestOpenId(e, n).then(function(e) {
                                        var n = {
                                            weapp: e
                                        };
                                        if ("undefined" != typeof tt && (delete e.error, n = {
                                            toutiao: e
                                        }), "undefined" != typeof qq && (delete e.errcode, delete e.errmsg, n = {
                                            qqapp: e
                                        }), "openid" === r) o(e); else {
                                            var i = t.linkWith(n);
                                            o(i);
                                        }
                                    }).catch(function(e) {
                                        i(e);
                                    });
                                });
                            }
                        }, {
                            key: "upInfo",
                            value: function(e) {
                                var t = this;
                                if (!m(e)) throw new g(415);
                                return new i.default(function(n, r) {
                                    var o = e.nickName, i = e.avatarUrl, a = t.current();
                                    if (!a) throw new g(415);
                                    var s = h.fetch("openid");
                                    t.get(a.objectId).then(function(e) {
                                        e.set("nickName", o), e.set("userPic", i), e.set("openid", s), e.save().then(function(e) {
                                            n(e);
                                        }).catch(function(e) {
                                            console.log(e), r(e);
                                        });
                                    }).catch(function(e) {
                                        console.log(e), r(e);
                                    });
                                });
                            }
                        }, {
                            key: "openId",
                            value: function() {
                                this.auth("openid");
                            }
                        }, {
                            key: "auth",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = this;
                                return new i.default(function(r, o) {
                                    var i = function() {
                                        n.login({
                                            success: function(n) {
                                                var i = "";
                                                "undefined" != typeof tt && (i = n.anonymousCode), t.loginWithWeapp(n.code, i, e).then(function(e) {
                                                    if (e.error) throw new g(415);
                                                    var t;
                                                    t = "undefined" != typeof tt ? e.authData.toutiao.openid : "undefined" != typeof qq ? e.authData.qqapp.openid : e.authData.weapp.openid, 
                                                    h.save("openid", t), h.save("bmob", e), r(e);
                                                }, function(e) {
                                                    o(e);
                                                });
                                            }
                                        });
                                    };
                                    n.checkSession({
                                        success: function() {
                                            var e = t.current();
                                            null === e && o("登陆错误，请在Bmob后台填写小程序AppSecret。"), r(e), i();
                                        },
                                        fail: function() {
                                            i();
                                        }
                                    });
                                });
                            }
                        } ]), t;
                    }(p);
                    e.exports = w;
                }, function(e, t, n) {
                    e.exports = {
                        default: n(155),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    n(156), e.exports = n(0).Object.getPrototypeOf;
                }, function(e, t, n) {
                    var r = n(23), o = n(64);
                    n(60)("getPrototypeOf", function() {
                        return function(e) {
                            return o(r(e));
                        };
                    });
                }, function(e, t, n) {
                    t.__esModule = !0;
                    var r, o = (r = n(27)) && r.__esModule ? r : {
                        default: r
                    };
                    t.default = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (void 0 === t ? "undefined" : (0, o.default)(t)) && "function" != typeof t ? e : t;
                    };
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    t.__esModule = !0;
                    var o = r(n(159)), i = r(n(163)), a = r(n(27));
                    t.default = function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, 
                        a.default)(t)));
                        e.prototype = (0, i.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t);
                    };
                }, function(e, t, n) {
                    e.exports = {
                        default: n(160),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    n(161), e.exports = n(0).Object.setPrototypeOf;
                }, function(e, t, n) {
                    var r = n(6);
                    r(r.S, "Object", {
                        setPrototypeOf: n(162).set
                    });
                }, function(e, t, n) {
                    var r = n(15), o = n(7), i = function(e, t) {
                        if (o(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
                    };
                    e.exports = {
                        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
                            try {
                                (r = n(22)(Function.call, n(66).f(Object.prototype, "__proto__").set, 2))(e, []), 
                                t = !(e instanceof Array);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                t = !0;
                            }
                            return function(e, n) {
                                return i(e, n), t ? e.__proto__ = n : r(e, n), e;
                            };
                        }({}, !1) : void 0),
                        check: i
                    };
                }, function(e, t, n) {
                    e.exports = {
                        default: n(164),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    n(165);
                    var r = n(0).Object;
                    e.exports = function(e, t) {
                        return r.create(e, t);
                    };
                }, function(e, t, n) {
                    var r = n(6);
                    r(r.S, "Object", {
                        create: n(46)
                    });
                }, function(e, t, r) {
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var i = o(r(80)), a = o(r(36)), s = o(r(4)), u = o(r(12)), c = o(r(13)), f = r(18), l = r(1), d = r(11), h = r(28), p = r(37), v = r(8), g = v.isString, y = v.isArray, m = [], b = function() {
                        function e(t, n) {
                            if ((0, u.default)(this, e), t && n) {
                                if (!g(t)) throw new d(415);
                                var r = t.substring(t.lastIndexOf(".") + 1);
                                m.push({
                                    name: t,
                                    route: l._config.parameters.FILES + "/" + l._config.secretKey + "." + r,
                                    data: n
                                });
                            }
                        }
                        return (0, c.default)(e, [ {
                            key: "fileUpload",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = this;
                                return new s.default(function(o, s) {
                                    void 0 === l.User && (l = r(1));
                                    var u = "bmob", c = l.User.current();
                                    c && (u = c.sessionToken);
                                    var f = [], d = Math.round(new Date().getTime() / 1e3), h = l.utils.randomString(), v = m[0].route;
                                    "wxc" === e && (v = v.replace(l._config.parameters.FILES, l._config.parameters.FILESCHECK));
                                    var g = {
                                        "content-type": "application/json",
                                        "X-Bmob-SDK-Type": "wechatApp",
                                        "X-Bmob-Safe-Sign": p.utf8MD5(v + d + l._config.securityCode + h),
                                        "X-Bmob-Safe-Timestamp": d,
                                        "X-Bmob-Noncestr-Key": h,
                                        "X-Bmob-Session-Token": u,
                                        "X-Bmob-Secret-Key": l._config.secretKey
                                    }, y = (0, a.default)({
                                        _ContentType: "text/plain",
                                        mime_type: "text/plain",
                                        category: "wechatApp",
                                        _ClientVersion: "js3.6.1",
                                        _InstallationId: "bmob"
                                    }, g), b = !0, _ = !1, w = void 0;
                                    try {
                                        for (var x, k = (0, i.default)(m); !(b = (x = k.next()).done); b = !0) {
                                            var S = x.value, O = S.route;
                                            "wxc" === e && (O = S.route.replace(l._config.parameters.FILES, l._config.parameters.FILESCHECK)), 
                                            console.log(S.route, l._config.parameters.FILESCHECK, "ror"), n.uploadFile({
                                                url: l._config.host + O,
                                                filePath: S.data,
                                                name: "file",
                                                header: g,
                                                formData: y,
                                                success: function(n) {
                                                    var r = JSON.parse(n.data);
                                                    "wxc" === e ? "ok" === r.msg ? o(t.fileUpload()) : s(r) : (f.push(r), f.length === m.length && (m = [], 
                                                    o(f), s(f)));
                                                },
                                                fail: function(e) {
                                                    f.push(e);
                                                }
                                            });
                                        }
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        _ = !0, w = e;
                                    } finally {
                                        try {
                                            !b && k.return && k.return();
                                        } finally {
                                            if (_) throw w;
                                        }
                                    }
                                });
                            }
                        }, {
                            key: "imgSecCheck",
                            value: function() {
                                if (!m.length) throw new d(417);
                                return this.fileUpload("wxc");
                            }
                        }, {
                            key: "save",
                            value: function() {
                                if (!m.length) throw new d(417);
                                var e = void 0, t = h.getAppType();
                                if ("h5" === t || "nodejs" === t) e = new s.default(function(e, t) {
                                    var n = [], r = !0, o = !1, a = void 0;
                                    try {
                                        for (var s, u = (0, i.default)(m); !(r = (s = u.next()).done); r = !0) {
                                            var c = s.value;
                                            f(c.route, "post", c.data).then(function(r) {
                                                n.push(r), n.length === m.length && (m = [], e(n), t(n));
                                            }).catch(function(e) {
                                                n.push(e);
                                            });
                                        }
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        o = !0, a = e;
                                    } finally {
                                        try {
                                            !r && u.return && u.return();
                                        } finally {
                                            if (o) throw a;
                                        }
                                    }
                                }); else {
                                    if ("wx" === t) {
                                        if (!m.length) throw new d(417);
                                        return this.fileUpload("wx");
                                    }
                                    "hap" === t && (e = new s.default(function(e, t) {
                                        void 0 === l.User && (l = r(1));
                                        var n = "bmob", o = l.User.current();
                                        o && (n = o.sessionToken);
                                        var s = [], u = Math.round(new Date().getTime() / 1e3), c = l.utils.randomString(), f = m[0].route;
                                        console.log("rand", c, l, f);
                                        var d = {
                                            "content-type": "application/json",
                                            "X-Bmob-SDK-Type": "wechatApp",
                                            "X-Bmob-Safe-Sign": p.utf8MD5(f + u + l._config.securityCode + c),
                                            "X-Bmob-Safe-Timestamp": u,
                                            "X-Bmob-Noncestr-Key": c,
                                            "X-Bmob-Session-Token": n,
                                            "X-Bmob-Secret-Key": l._config.secretKey
                                        }, h = (0, a.default)({
                                            _ContentType: "text/plain",
                                            mime_type: "text/plain",
                                            category: "wechatApp",
                                            _ClientVersion: "js3.6.1",
                                            _InstallationId: "bmob"
                                        }, d), v = !0, g = !1, y = void 0;
                                        try {
                                            for (var b, _ = (0, i.default)(m); !(v = (b = _.next()).done); v = !0) {
                                                var w = b.value;
                                                "xxrequire('@system.request')xx".upload({
                                                    url: l._config.host + w.route,
                                                    files: [ {
                                                        uri: w.data,
                                                        name: "file",
                                                        filename: w.name
                                                    } ],
                                                    header: {
                                                        "X-Bmob-SDK-Type": "wechatApp"
                                                    },
                                                    data: h,
                                                    success: function(n) {
                                                        console.log("handling success" + s);
                                                        var r = n.data;
                                                        s.push(r), s.length === m.length && (m = [], e(s), t(s));
                                                    },
                                                    fail: function(e, t) {
                                                        console.log("handling fail, code = " + t);
                                                    }
                                                });
                                            }
                                        } catch (e) {
                                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                            g = !0, y = e;
                                        } finally {
                                            try {
                                                !v && _.return && _.return();
                                            } finally {
                                                if (g) throw y;
                                            }
                                        }
                                    }));
                                }
                                return e;
                            }
                        }, {
                            key: "destroy",
                            value: function(e) {
                                if (g(e)) return f(l._config.parameters.FILES + "/upyun/" + e.split(".com/")[1], "delete");
                                if (y(e)) {
                                    var t = [];
                                    return e.map(function(e) {
                                        t.push(e.split(".com/")[1]);
                                    }), f(l._config.parameters.DELFILES, "post", {
                                        upyun: t
                                    });
                                }
                                throw new d(415);
                            }
                        } ]), e;
                    }();
                    e.exports = b;
                }, function(e, t, n) {
                    n(34), n(32), e.exports = n(168);
                }, function(e, t, n) {
                    var r = n(7), o = n(68);
                    e.exports = n(0).getIterator = function(e) {
                        var t = o(e);
                        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
                        return r(t.call(e));
                    };
                }, function(e, t, r) {
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var i = o(r(12)), a = o(r(13)), s = r(18), u = r(1), c = r(11), f = function() {
                        function e() {
                            (0, i.default)(this, e);
                        }
                        return (0, a.default)(e, [ {
                            key: "weApp",
                            value: function(e, t, r) {
                                var o = n.getStorageSync("openid");
                                if (!(e && t && r && o)) throw new c(416);
                                var i = {
                                    order_price: e,
                                    product_name: t,
                                    body: r,
                                    open_id: o,
                                    pay_type: 4
                                }, a = u._config.parameters.PAY;
                                return s(a, "post", i);
                            }
                        } ]), e;
                    }();
                    e.exports = f;
                }, function(t, r, o) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var a = i(o(56)), s = i(o(4)), u = i(o(9)), c = i(o(12)), f = i(o(13)), l = i(o(171)), d = i(o(36)), h = o(11), p = function(e) {
                        var t = [];
                        (0, d.default)(e, {
                            on: function(e, n) {
                                "function" == typeof n && t.push([ e, n ]);
                            },
                            emit: function(e) {
                                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                t.forEach(function(t) {
                                    var n = (0, l.default)(t, 2), o = n[0], i = n[1];
                                    return e === o && i.apply(void 0, r);
                                });
                            },
                            removeAllListeners: function() {
                                t = [];
                            }
                        });
                    };
                    t.exports = function() {
                        function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            if ((0, c.default)(this, t), "" === e) throw new h(415);
                            this.config = {
                                host: "wss.bmobcloud.com"
                            }, p(this.emitter = {}), this.applicationId = e, this.initialize();
                        }
                        return (0, f.default)(t, [ {
                            key: "handshake",
                            value: function() {
                                var t = "https://" + this.config.host + "/socket.io/1/?t=" + new Date().getTime(), r = (0, 
                                u.default)({});
                                return new s.default(function(o, i) {
                                    n.request({
                                        method: "GET",
                                        url: t,
                                        data: r,
                                        header: {
                                            "content-type": "text/plain"
                                        },
                                        success: function(t) {
                                            return t.data && t.data.statusCode || 200 !== t.statusCode ? o("request error", e) : o(function(e) {
                                                if (!(e instanceof h)) return e.split(":")[0];
                                                self.connecting = !1, self.onError(e.message);
                                            }(t.data));
                                        },
                                        fail: function(e) {
                                            return o("request error", e);
                                        }
                                    });
                                });
                            }
                        }, {
                            key: "initialize",
                            value: function() {
                                var e = this;
                                return this.emitter.removeAllListeners(), this.handshake().then(function(t) {
                                    try {
                                        var n = e.connect("wss://" + e.config.host + "/socket.io/1/websocket/" + t, {});
                                        console.log(n, "connectObj"), n.then(function(e) {
                                            console.log(e, "res-res");
                                        });
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        throw console.error({
                                            connectError: e
                                        }), e;
                                    }
                                }), this.on("close", function() {
                                    console.log("连接已中断"), setTimeout(function() {
                                        return e.initialize();
                                    }, 5e3);
                                }), new s.default(function(t, n) {
                                    e.on("server_pub", function(t) {
                                        switch (t.action) {
                                          case "updateTable":
                                            e.onUpdateTable(t.tableName, t.data);
                                            break;

                                          case "updateRow":
                                            e.onUpdateRow(t.tableName, t.objectId, t.data);
                                            break;

                                          case "deleteTable":
                                            e.onDeleteTable(t.tableName, t.data);
                                            break;

                                          case "deleteRow":
                                            e.onDeleteRow(t.tableName, t.objectId, t.data);
                                        }
                                    }), e.on("client_send_data", function(t) {
                                        e.onInitListen();
                                    });
                                });
                            }
                        }, {
                            key: "onInitListen",
                            value: function() {}
                        }, {
                            key: "connect",
                            value: function(e, t) {
                                var r = this, o = (0, a.default)(t).map(function(e) {
                                    return e + "=" + encodeURIComponent(t[e]);
                                }).join("&"), i = e.indexOf("?") > -1 ? "&" : "?";
                                return e = [ e, o ].join(i), new s.default(function(o, i) {
                                    n.onSocketOpen(o), n.onSocketError(i), n.onSocketMessage(function(e) {
                                        try {
                                            var t = e.data;
                                            if ("2:::" === t.slice(0, 4) && r.emit(!1, !0), null === (t = t.slice(4)) || "" === t) return;
                                            var n = function(e) {
                                                var t = JSON.parse(e);
                                                return {
                                                    name: t.name,
                                                    args: t.args
                                                };
                                            }(t), o = n.name, i = n.args, a = null == i ? "" : JSON.parse(i[0]);
                                            r.emitter.emit(o, a);
                                        } catch (t) {
                                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                            console.log("Handle packet failed: " + e.data, t);
                                        }
                                    }), n.onSocketClose(function() {
                                        return r.emitter.emit("close");
                                    }), n.connectSocket({
                                        url: e,
                                        header: t
                                    });
                                });
                            }
                        }, {
                            key: "on",
                            value: function(e, t) {
                                this.emitter.on(e, t);
                            }
                        }, {
                            key: "emit",
                            value: function(e, t) {
                                t = void 0 === t ? "5:::" : "2:::", e = e ? (0, u.default)(e) : "", n.sendSocketMessage({
                                    data: t + e
                                });
                            }
                        }, {
                            key: "emitData",
                            value: function(e, t) {
                                return {
                                    name: e,
                                    args: [ t = (0, u.default)(t) ]
                                };
                            }
                        }, {
                            key: "updateTable",
                            value: function(e) {
                                var t = {
                                    appKey: this.applicationId,
                                    tableName: e,
                                    objectId: "",
                                    action: "updateTable"
                                };
                                t = this.emitData("client_sub", t), this.emit(t);
                            }
                        }, {
                            key: "unsubUpdateTable",
                            value: function(e) {
                                var t = {
                                    appKey: this.applicationId,
                                    tableName: e,
                                    objectId: "",
                                    action: "unsub_updateTable"
                                };
                                t = this.emitData("client_sub", t), this.emit(t);
                            }
                        }, {
                            key: "updateRow",
                            value: function(e, t) {
                                var n = {
                                    appKey: this.applicationId,
                                    tableName: e,
                                    objectId: t,
                                    action: "updateRow"
                                };
                                n = this.emitData("client_sub", n), this.emit(n);
                            }
                        }, {
                            key: "unsubUpdateRow",
                            value: function(e, t) {
                                var n = {
                                    appKey: this.applicationId,
                                    tableName: e,
                                    objectId: t,
                                    action: "unsub_updateRow"
                                };
                                n = this.emitData("client_sub", n), this.emit(n);
                            }
                        }, {
                            key: "deleteTable",
                            value: function(e) {
                                var t = {
                                    appKey: this.applicationId,
                                    tableName: e,
                                    objectId: "",
                                    action: "deleteTable"
                                };
                                t = this.emitData("client_sub", t), this.emit(t);
                            }
                        }, {
                            key: "unsubDeleteTable",
                            value: function(e) {
                                var t = {
                                    appKey: this.applicationId,
                                    tableName: e,
                                    objectId: "",
                                    action: "unsub_deleteTable"
                                };
                                t = this.emitData("client_sub", t), this.emit(t);
                            }
                        }, {
                            key: "deleteRow",
                            value: function(e, t) {
                                var n = {
                                    appKey: this.applicationId,
                                    tableName: e,
                                    objectId: t,
                                    action: "deleteRow"
                                };
                                n = this.emitData("client_sub", n), this.emit(n);
                            }
                        }, {
                            key: "unsubDeleteRow",
                            value: function(e, t) {
                                var n = {
                                    appKey: this.applicationId,
                                    tableName: e,
                                    objectId: t,
                                    action: "unsub_deleteRow"
                                };
                                n = this.emitData("client_sub", n), this.emit(n);
                            }
                        }, {
                            key: "onUpdateTable",
                            value: function(e, t) {}
                        }, {
                            key: "onUpdateRow",
                            value: function(e, t, n) {}
                        }, {
                            key: "onDeleteTable",
                            value: function(e, t) {}
                        }, {
                            key: "onDeleteRow",
                            value: function(e, t, n) {}
                        } ]), t;
                    }();
                }, function(e, t, n) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    t.__esModule = !0;
                    var o = r(n(172)), i = r(n(80));
                    t.default = function(e, t) {
                        if (Array.isArray(e)) return e;
                        if ((0, o.default)(Object(e))) return function(e, t) {
                            var n = [], r = !0, o = !1, a = void 0;
                            try {
                                for (var s, u = (0, i.default)(e); !(r = (s = u.next()).done) && (n.push(s.value), 
                                !t || n.length !== t); r = !0) ;
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                o = !0, a = e;
                            } finally {
                                try {
                                    !r && u.return && u.return();
                                } finally {
                                    if (o) throw a;
                                }
                            }
                            return n;
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    };
                }, function(e, t, n) {
                    e.exports = {
                        default: n(173),
                        __esModule: !0
                    };
                }, function(e, t, n) {
                    n(34), n(32), e.exports = n(174);
                }, function(e, t, n) {
                    var r = n(50), o = n(3)("iterator"), i = n(21);
                    e.exports = n(0).isIterable = function(e) {
                        var t = Object(e);
                        return void 0 !== t[o] || "@@iterator" in t || i.hasOwnProperty(r(t));
                    };
                }, function(e, t, n) {
                    var r, o = (r = n(4)) && r.__esModule ? r : {
                        default: r
                    }, i = n(18), a = n(1), s = n(11), u = n(8), c = u.isObject, f = u.isString;
                    e.exports = {
                        generateCode: function(e) {
                            if (!c(e)) throw new s(415);
                            var t = a._config.parameters.GENERATECODE;
                            return i(t, "post", e);
                        },
                        getAccessToken: function() {
                            var e = a._config.parameters.GETACCESSTOKEN;
                            return i(e, "get");
                        },
                        sendWeAppMessage: function(e) {
                            if (!c(e)) throw new s(415);
                            var t = a._config.parameters.SENDWEAPPMESSAGE;
                            return i(t, "post", e);
                        },
                        refund: function(e) {
                            if (!c(e)) throw new s(415);
                            var t = a._config.parameters.REFUND;
                            return i(t, "post", e);
                        },
                        notifyMsg: function(e) {
                            if (!c(e)) throw new s(415);
                            var t = a._config.parameters.NOTIFYMSG;
                            return i(t, "post", e);
                        },
                        functions: function(e, t) {
                            if (t || (t = {}), !f(e)) throw new s(415);
                            var n = a._config.parameters.FUNCTIONS + "/" + e;
                            return new o.default(function(e, r) {
                                i(n, "post", t).then(function(t) {
                                    var n = t.result;
                                    try {
                                        e(JSON.parse(n));
                                    } catch (t) {
                                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                        e(n);
                                    }
                                }).catch(function(e) {
                                    r(e);
                                });
                            });
                        },
                        timestamp: function() {
                            var e = a._config.parameters.TIMESTAMP;
                            return i(e, "get");
                        },
                        requestPasswordReset: function(e) {
                            if (!c(e)) throw new s(415);
                            var t = a._config.parameters.REQUESTPASSWORDRESET;
                            return i(t, "post", e);
                        },
                        resetPasswordBySmsCode: function(e, t) {
                            if (!f(e)) throw new s(415);
                            var n = a._config.parameters.RESETPASSWORDBYSMSCODE + "/" + e;
                            return i(n, "put", t);
                        },
                        updateUserPassword: function(e, t) {
                            if (!c(t) || !f(e)) throw new s(415);
                            var n = a._config.parameters.UPDATEUSERPASSWORD + "/" + e;
                            return i(n, "put", t);
                        },
                        geoPoint: function(e) {
                            var t = e.latitude, n = e.longitude;
                            return function(e, t) {
                                if (e < -90) throw new s(419);
                                if (e > 90) throw new s(419);
                                if (t < -180) throw new s(419);
                                if (t > 180) throw new s(419);
                            }(t, n), {
                                __type: "GeoPoint",
                                latitude: t,
                                longitude: n
                            };
                        },
                        checkMsg: function(e) {
                            if (!f(e)) throw new s(415);
                            var t = "" + a._config.parameters.CHECK_MSG;
                            return i(t, "post", {
                                content: e
                            });
                        },
                        push: function(e) {
                            if (!c(e)) throw new s(415);
                            var t = a._config.parameters.PUSH;
                            return i(t, "post", e);
                        }
                    };
                }, function(e, t, n) {
                    var r = n(18), o = n(1), i = n(11), a = n(8), s = a.isObject, u = a.isString;
                    e.exports = {
                        requestSmsCode: function(e, t) {
                            if (!s(e)) throw new i(415);
                            var n = o._config.parameters.REQUESTSMSCODE;
                            return r(n, "post", e);
                        },
                        verifySmsCode: function(e, t, n) {
                            if (!u(e)) throw new i(415);
                            if (!s(t)) throw new i(415);
                            var a = o._config.parameters.VERIFYSMSCODE + "/" + e;
                            return r(a, "post", t);
                        }
                    };
                } ]);
            });
        }).call(this, o("543d").default, o("62e4")(n));
    },
    3787: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
            if (n = n || r.length, e) for (var i = 0; i < e; i++) o[i] = r[0 | Math.random() * n]; else {
                var a;
                o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4";
                for (var s = 0; s < 36; s++) o[s] || (a = 0 | 16 * Math.random(), o[s] = r[19 == s ? 3 & a | 8 : a]);
            }
            return t ? (o.shift(), "u" + o.join("")) : o.join("");
        };
        t.default = r;
    },
    "37dc": function(e, n, r) {
        (function(e, r) {
            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], r = !0, o = !1, i = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                            !t || n.length !== t); r = !0) ;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            o = !0, i = e;
                        } finally {
                            try {
                                r || null == s.return || s.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return n;
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function u(e, t, n) {
                return t && s(e.prototype, t), n && s(e, n), e;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.compileI18nJsonStr = function(e, t) {
                var n = t.locale, r = t.locales, o = t.delimiters;
                if (!E(e, o)) return e;
                P || (P = new d());
                var i = [];
                Object.keys(r).forEach(function(e) {
                    e !== n && i.push({
                        locale: e,
                        values: r[e]
                    });
                }), i.unshift({
                    locale: n,
                    values: r[n]
                });
                try {
                    return JSON.stringify(C(JSON.parse(e), i, o), null, 2);
                } catch (e) {}
                return e;
            }, n.hasI18nJson = function e(t, n) {
                return P || (P = new d()), I(t, function(t, r) {
                    var o = t[r];
                    return T(o) ? !!E(o, n) || void 0 : e(o, n);
                });
            }, n.initVueI18n = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0;
                if ("string" != typeof e) {
                    var o = [ t, e ];
                    e = o[0], t = o[1];
                }
                "string" != typeof e && (e = A()), "string" != typeof n && (n = "undefined" != typeof __uniConfig && __uniConfig.fallbackLocale || b);
                var i = new S({
                    locale: e,
                    fallbackLocale: n,
                    messages: t,
                    watcher: r
                }), a = function(e, t) {
                    if ("function" != typeof getApp) a = function(e, t) {
                        return i.t(e, t);
                    }; else {
                        var n = !1;
                        a = function(e, t) {
                            var r = getApp().$vm;
                            return r && (r.$locale, n || (n = !0, O(r, i))), i.t(e, t);
                        };
                    }
                    return a(e, t);
                };
                return {
                    i18n: i,
                    f: function(e, t, n) {
                        return i.f(e, t, n);
                    },
                    t: function(e, t) {
                        return a(e, t);
                    },
                    add: function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        return i.add(e, t, n);
                    },
                    watch: function(e) {
                        return i.watchLocale(e);
                    },
                    getLocale: function() {
                        return i.getLocale();
                    },
                    setLocale: function(e) {
                        return i.setLocale(e);
                    }
                };
            }, n.isI18nStr = E, n.normalizeLocale = k, n.parseI18nJson = function e(t, n, r) {
                return P || (P = new d()), I(t, function(t, o) {
                    var i = t[o];
                    T(i) ? E(i, r) && (t[o] = j(i, n, r)) : e(i, n, r);
                }), t;
            }, n.resolveLocale = function(e) {
                return function(t) {
                    return t ? function(e) {
                        var t = [], n = e.split("-");
                        for (;n.length; ) t.push(n.join("-")), n.pop();
                        return t;
                    }(t = k(t) || t).find(function(t) {
                        return e.indexOf(t) > -1;
                    }) : t;
                };
            }, n.isString = n.LOCALE_ZH_HANT = n.LOCALE_ZH_HANS = n.LOCALE_FR = n.LOCALE_ES = n.LOCALE_EN = n.I18n = n.Formatter = void 0;
            var c = Array.isArray, f = function(e) {
                return null !== e && "object" === t(e);
            }, l = [ "{", "}" ], d = function() {
                function e() {
                    a(this, e), this._caches = Object.create(null);
                }
                return u(e, [ {
                    key: "interpolate",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l;
                        if (!t) return [ e ];
                        var r = this._caches[e];
                        return r || (r = v(e, n), this._caches[e] = r), g(r, t);
                    }
                } ]), e;
            }();
            n.Formatter = d;
            var h = /^(?:\d)+/, p = /^(?:\w)+/;
            function v(e, t) {
                for (var n = o(t, 2), r = n[0], i = n[1], a = [], s = 0, u = ""; s < e.length; ) {
                    var c = e[s++];
                    if (c === r) {
                        u && a.push({
                            type: "text",
                            value: u
                        }), u = "";
                        var f = "";
                        for (c = e[s++]; void 0 !== c && c !== i; ) f += c, c = e[s++];
                        var l = c === i, d = h.test(f) ? "list" : l && p.test(f) ? "named" : "unknown";
                        a.push({
                            value: f,
                            type: d
                        });
                    } else u += c;
                }
                return u && a.push({
                    type: "text",
                    value: u
                }), a;
            }
            function g(e, t) {
                var n = [], r = 0, o = c(t) ? "list" : f(t) ? "named" : "unknown";
                if ("unknown" === o) return n;
                for (;r < e.length; ) {
                    var i = e[r];
                    switch (i.type) {
                      case "text":
                        n.push(i.value);
                        break;

                      case "list":
                        n.push(t[parseInt(i.value, 10)]);
                        break;

                      case "named":
                        "named" === o && n.push(t[i.value]);
                    }
                    r++;
                }
                return n;
            }
            var y = "zh-Hans";
            n.LOCALE_ZH_HANS = y;
            var m = "zh-Hant";
            n.LOCALE_ZH_HANT = m;
            var b = "en";
            n.LOCALE_EN = b;
            n.LOCALE_FR = "fr";
            n.LOCALE_ES = "es";
            var _ = Object.prototype.hasOwnProperty, w = function(e, t) {
                return _.call(e, t);
            }, x = new d();
            function k(e, t) {
                if (e) return e = e.trim().replace(/_/g, "-"), t && t[e] ? e : 0 === (e = e.toLowerCase()).indexOf("zh") ? e.indexOf("-hans") > -1 ? y : e.indexOf("-hant") > -1 || function(e, t) {
                    return !!t.find(function(t) {
                        return -1 !== e.indexOf(t);
                    });
                }(e, [ "-tw", "-hk", "-mo", "-cht" ]) ? m : y : function(e, t) {
                    return t.find(function(t) {
                        return 0 === e.indexOf(t);
                    });
                }(e, [ b, "fr", "es" ]) || void 0;
            }
            var S = function() {
                function e(t) {
                    var n = t.locale, r = t.fallbackLocale, o = t.messages, i = t.watcher, s = t.formater;
                    a(this, e), this.locale = b, this.fallbackLocale = b, this.message = {}, this.messages = {}, 
                    this.watchers = [], r && (this.fallbackLocale = r), this.formater = s || x, this.messages = o || {}, 
                    this.setLocale(n || b), i && this.watchLocale(i);
                }
                return u(e, [ {
                    key: "setLocale",
                    value: function(e) {
                        var t = this, n = this.locale;
                        this.locale = k(e, this.messages) || this.fallbackLocale, this.messages[this.locale] || (this.messages[this.locale] = {}), 
                        this.message = this.messages[this.locale], n !== this.locale && this.watchers.forEach(function(e) {
                            e(t.locale, n);
                        });
                    }
                }, {
                    key: "getLocale",
                    value: function() {
                        return this.locale;
                    }
                }, {
                    key: "watchLocale",
                    value: function(e) {
                        var t = this, n = this.watchers.push(e) - 1;
                        return function() {
                            t.watchers.splice(n, 1);
                        };
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = this.messages[e];
                        r ? n ? Object.assign(r, t) : Object.keys(t).forEach(function(e) {
                            w(r, e) || (r[e] = t[e]);
                        }) : this.messages[e] = t;
                    }
                }, {
                    key: "f",
                    value: function(e, t, n) {
                        return this.formater.interpolate(e, t, n).join("");
                    }
                }, {
                    key: "t",
                    value: function(e, t, n) {
                        var r = this.message;
                        return "string" == typeof t ? (t = k(t, this.messages)) && (r = this.messages[t]) : n = t, 
                        w(r, e) ? this.formater.interpolate(r[e], n).join("") : (console.warn("Cannot translate the value of keypath ".concat(e, ". Use the value of keypath as default.")), 
                        e);
                    }
                } ]), e;
            }();
            function O(e, t) {
                e.$watchLocale ? e.$watchLocale(function(e) {
                    t.setLocale(e);
                }) : e.$watch(function() {
                    return e.$locale;
                }, function(e) {
                    t.setLocale(e);
                });
            }
            function A() {
                return void 0 !== e && e.getLocale ? e.getLocale() : void 0 !== r && r.getLocale ? r.getLocale() : b;
            }
            n.I18n = S;
            var P, T = function(e) {
                return "string" == typeof e;
            };
            function E(e, t) {
                return e.indexOf(t[0]) > -1;
            }
            function j(e, t, n) {
                return P.interpolate(e, t, n).join("");
            }
            function C(e, t, n) {
                return I(e, function(e, r) {
                    !function(e, t, n, r) {
                        var o = e[t];
                        if (T(o)) {
                            if (E(o, r) && (e[t] = j(o, n[0].values, r), n.length > 1)) {
                                var i = e[t + "Locales"] = {};
                                n.forEach(function(e) {
                                    i[e.locale] = j(o, e.values, r);
                                });
                            }
                        } else C(o, n, r);
                    }(e, r, t, n);
                }), e;
            }
            function I(e, t) {
                if (c(e)) {
                    for (var n = 0; n < e.length; n++) if (t(e, n)) return !0;
                } else if (f(e)) for (var r in e) if (t(e, r)) return !0;
                return !1;
            }
            n.isString = T;
        }).call(this, r("543d").default, r("c8ba"));
    },
    "3db2": function(e, t, n) {
        (function(t) {
            e.exports = {
                data: function() {
                    return {};
                },
                onLoad: function() {
                    this.$u.getRect = this.$uGetRect;
                },
                methods: {
                    $uGetRect: function(e, n) {
                        var r = this;
                        return new Promise(function(o) {
                            t.createSelectorQuery().in(r)[n ? "selectAll" : "select"](e).boundingClientRect(function(e) {
                                n && Array.isArray(e) && e.length && o(e), !n && e && o(e);
                            }).exec();
                        });
                    },
                    getParentData: function() {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        this.parent || (this.parent = !1), this.parent = this.$u.$parent.call(this, t), 
                        this.parent && Object.keys(this.parentData).map(function(t) {
                            e.parentData[t] = e.parent[t];
                        });
                    },
                    preventEvent: function(e) {
                        e && e.stopPropagation && e.stopPropagation();
                    }
                },
                onReachBottom: function() {
                    t.$emit("uOnReachBottom");
                },
                beforeDestroy: function() {
                    var e = this;
                    if (this.parent && t.$u.test.array(this.parent.children)) {
                        var n = this.parent.children;
                        n.map(function(t, r) {
                            t === e && n.splice(r, 1);
                        });
                    }
                }
            };
        }).call(this, n("543d").default);
    },
    "3f6d": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        t.default = {
            easycom: {
                "^u-(.*)": "@/uview-ui/components/u-$1/u-$1.vue"
            },
            pages: [ {
                path: "pages/index/index",
                style: {
                    navigationBarTitleText: "",
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/center/center",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/user",
                style: {
                    navigationBarTitleText: "我的",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesB/detail/detail",
                style: {
                    navigationBarTitleText: "详情",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/search/search",
                style: {
                    navigationBarTitleText: "搜索",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesA/list/list",
                style: {
                    navigationBarTitleText: "列表",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesA/list/topic",
                style: {
                    navigationBarTitleText: "壁纸专辑",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/integral/task",
                style: {
                    navigationBarTitleText: "能量任务",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/integral/record",
                style: {
                    navigationBarTitleText: "能量明细",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/order/collect",
                style: {
                    navigationBarTitleText: "收藏",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/order/order",
                style: {
                    navigationBarTitleText: "下载",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/order/detail",
                style: {
                    navigationBarTitleText: "下载详情",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/write/write",
                style: {
                    navigationBarTitleText: "投稿",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/write/edit",
                style: {
                    navigationBarTitleText: "编辑",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/about/about",
                style: {
                    navigationBarTitleText: "关于我们",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/about/agreement",
                style: {
                    navigationBarTitleText: "用户协议",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/about/gonggao",
                style: {
                    navigationBarTitleText: "重要公告",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/about/gengxin",
                style: {
                    navigationBarTitleText: "更新记录",
                    enablePullDownRefresh: !1,
                    navigationBarTextStyle: "black"
                }
            }, {
                path: "pages/user/about/policy",
                style: {
                    navigationBarTitleText: "隐私政策",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/write/cate",
                style: {
                    navigationBarTitleText: "选择分类",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/write/tags",
                style: {
                    navigationBarTitleText: "选择标签",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/integral/charge",
                style: {
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "充值能量",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/system",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "管理后台",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/user/userList",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "用户管理",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/config/configList",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "系统管理",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/cover/coverList",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "作品管理",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/category/categoryList",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "分类管理",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/category/categoryEdit",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "更新分类",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/banner/bannerList",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "轮播图管理",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/banner/bannerEdit",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "更新轮播图",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/findlist/findList",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "发现页管理",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pages/user/write/caiji",
                style: {
                    navigationBarTitleText: "壁纸采集",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesA/system/findlist/findEdit",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "更新发现页",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/tags/tagsList",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "标签管理",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pages/user/about/feed",
                style: {
                    navigationBarTitleText: "意见反馈",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/find/find",
                style: {
                    navigationBarTitleText: "发现",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/find/design/design",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "刘海壁纸",
                    enablePullDownRefresh: !1,
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d",
                    disableScroll: !0
                }
            }, {
                path: "pages/find/gallery/gallery",
                style: {
                    navigationBarTitleText: "头像签名套图",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/find/dynamic/dynamic",
                style: {
                    navigationBarTitleText: "动态壁纸",
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/find/profile/profile",
                style: {
                    navigationBarTitleText: "精品头像",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/find/photo/photo",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white"
                }
            }, {
                path: "pagesB/detail/dynamicdetail",
                style: {
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white"
                }
            }, {
                path: "pages/search/searchvideo",
                style: {
                    navigationBarTitleText: "动态壁纸搜索",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesA/system/design/designList",
                style: {
                    navigationStyle: "custom",
                    navigationBarTitleText: "刘海管理",
                    enablePullDownRefresh: !1,
                    navigationBarTextStyle: "white",
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/design/designEdit",
                style: {
                    navigationStyle: "custom",
                    navigationBarTitleText: "刘海设计",
                    enablePullDownRefresh: !1,
                    navigationBarTextStyle: "white",
                    navigationBarBackgroundColor: "#1d1d1d",
                    backgroundColor: "#1d1d1d"
                }
            }, {
                path: "pagesA/system/color/color",
                style: {
                    navigationStyle: "custom",
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pagesA/system/color/colorEdit",
                style: {
                    navigationStyle: "custom",
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/write/color",
                style: {
                    navigationBarTitleText: "选择颜色",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesB/detail/tpdetail",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesB/detail/qwdetail",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesA/system/indexmenu/indexmenu",
                style: {
                    navigationStyle: "custom",
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pagesA/system/indexmenu/menuEdit",
                style: {
                    navigationStyle: "custom",
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/find/headimg/headimg",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/find/headimg/saved",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/list/searchlist",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesA/system/notice/notice",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pagesA/system/notice/noticeEdit",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/about/notice",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1,
                    navigationStyle: "custom"
                }
            }, {
                path: "pages/user/userinfo/userinfo",
                style: {
                    navigationBarTitleText: "更新资料",
                    navigationBarBackgroundColor: "#ffffff",
                    navigationBarTextStyle: "black"
                }
            } ],
            globalStyle: {
                navigationBarTextStyle: "white",
                navigationBarTitleText: "态空壁纸",
                navigationBarBackgroundColor: "#1d1d1d",
                backgroundColor: "#1d1d1d",
                backgroundTextStyle: "dark",
                enablePullDownRefresh: !1
            },
            tabBar: {
                color: "#1d1d1d",
                selectedColor: "#1d1d1d",
                borderStyle: "black",
                backgroundColor: "#1d1d1d",
                list: [ {
                    pagePath: "pages/index/index",
                    iconPath: "/static/tabbar/bgcolor.png",
                    selectedIconPath: "/static/tabbar/bgcolor.png",
                    text: "首页"
                }, {
                    pagePath: "pages/center/center",
                    iconPath: "/static/tabbar/bgcolor.png",
                    selectedIconPath: "/static/tabbar/bgcolor.png",
                    text: "分类"
                }, {
                    pagePath: "pages/find/find",
                    iconPath: "/static/tabbar/bgcolor.png",
                    selectedIconPath: "/static/tabbar/bgcolor.png",
                    text: "发现"
                }, {
                    pagePath: "pages/user/user",
                    iconPath: "/static/tabbar/bgcolor.png",
                    selectedIconPath: "/static/tabbar/bgcolor.png",
                    text: "我的"
                } ]
            },
            condition: {
                current: 0,
                list: [ {
                    name: "个人中心",
                    path: "/pages/user/user",
                    query: ""
                }, {
                    name: "后台",
                    path: "pagesA/system/system",
                    query: ""
                }, {
                    name: "关于我们",
                    path: "pages/user/about/about",
                    query: ""
                }, {
                    name: "分类",
                    path: "pages/center/center",
                    query: ""
                }, {
                    name: "壁纸专辑",
                    path: "pagesA/list/topic",
                    query: ""
                }, {
                    name: "详情",
                    path: "pagesB/detail/detail",
                    query: ""
                }, {
                    name: "头像",
                    path: "pages/find/headimg/headimg",
                    query: ""
                } ]
            }
        };
    },
    4068: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("047d"));
        var o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-mm-dd";
            e || (e = Number(new Date())), 10 == e.toString().length && (e *= 1e3);
            var n = +new Date(Number(e)), o = (Number(new Date()) - n) / 1e3, i = "";
            switch (!0) {
              case o < 300:
                i = "刚刚";
                break;

              case o >= 300 && o < 3600:
                i = parseInt(o / 60) + "分钟前";
                break;

              case o >= 3600 && o < 86400:
                i = parseInt(o / 3600) + "小时前";
                break;

              case o >= 86400 && o < 2592e3:
                i = parseInt(o / 86400) + "天前";
                break;

              default:
                i = !1 === t ? o >= 2592e3 && o < 31536e3 ? parseInt(o / 2592e3) + "个月前" : parseInt(o / 31536e3) + "年前" : (0, 
                r.default)(n, t);
            }
            return i;
        };
        t.default = o;
    },
    4362: function(e, t, n) {
        t.nextTick = function(e) {
            var t = Array.prototype.slice.call(arguments);
            t.shift(), setTimeout(function() {
                e.apply(null, t);
            }, 0);
        }, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, 
        t.env = {}, t.argv = [], t.binding = function(e) {
            throw new Error("No such module. (Possibly not yet loaded)");
        }, function() {
            var e, r = "/";
            t.cwd = function() {
                return r;
            }, t.chdir = function(t) {
                e || (e = n("df7c")), r = e.resolve(t, r);
            };
        }(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}, 
        t.features = {};
    },
    4717: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "both";
            return "both" == t ? e.replace(/^\s+|\s+$/g, "") : "left" == t ? e.replace(/^\s*/, "") : "right" == t ? e.replace(/(\s*$)/g, "") : "all" == t ? e.replace(/\s+/g, "") : e;
        };
        t.default = r;
    },
    "49bf": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        t.default = {
            toast: 10090,
            noNetwork: 10080,
            popup: 10075,
            mask: 10070,
            navbar: 980,
            topTips: 975,
            sticky: 970,
            indexListSticky: 965
        };
    },
    "50fb": function(e, n, r) {
        (function(n) {
            var o = u(r("a34a")), i = u(r("9410")), a = u(r("6a71")), s = r("978e");
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        h(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function p(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a), u = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function v(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            p(i, r, o, a, s, "next", e);
                        }
                        function s(e) {
                            p(i, r, o, a, s, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            var g = "QSSHAREPOSTER_IDKEY";
            function y(e) {
                var t = e.Context, r = e.type, o = e.posterCanvasId, a = e.reserve, s = e.bgObj, u = e.drawArray, c = e.textArray, f = e.qrCodeArray, l = e.imagesArray, h = e.setCanvasToTempFilePath, p = e.setDraw, v = e.bgScale, g = e._this, y = e.delayTimeScale, x = e.drawDelayTime, k = e.canvas2image, S = e.draw, O = {
                    Context: t,
                    bgObj: s,
                    type: r,
                    bgScale: v
                };
                return y = void 0 !== y ? y : 15, x = void 0 !== x ? x : 100, new Promise(function(e, v) {
                    try {
                        if (i.default.showLoading("正在绘制海报"), i.default.log("背景对象:" + JSON.stringify(s)), 
                        s && s.path ? (i.default.log("背景有图片路径"), t.drawImage(s.path, 0, 0, s.width, s.height)) : (i.default.log("背景没有图片路径"), 
                        s.backgroundColor ? (i.default.log("背景有背景颜色:" + s.backgroundColor), t.setFillStyle(s.backgroundColor), 
                        t.fillRect(0, 0, s.width, s.height)) : i.default.log("背景没有背景颜色")), i.default.showLoading("绘制图片"), 
                        l && l.length > 0 && I(t, l), i.default.showLoading("绘制自定义内容"), p && "function" == typeof p && p(O), 
                        i.default.showLoading("绘制文本"), c && c.length > 0 && j(t, c, s), i.default.showLoading("绘制二维码"), 
                        f && f.length > 0) for (var A = 0; A < f.length; A++) R(t, f[A]);
                        if (i.default.showLoading("绘制可控层级序列"), u && u.length > 0) for (var P = 0; P < u.length; P++) {
                            var T = u[P];
                            switch (i.default.log("绘制可控层级序列, drawArrayItem:" + JSON.stringify(T)), T.type) {
                              case "image":
                                i.default.log("绘制可控层级序列, 绘制图片"), I(t, T);
                                break;

                              case "text":
                                i.default.log("绘制可控层级序列, 绘制文本"), j(t, T, s);
                                break;

                              case "qrcode":
                                i.default.log("绘制可控层级序列, 绘制二维码"), R(t, T);
                                break;

                              case "custom":
                                i.default.log("绘制可控层级序列, 绘制自定义内容"), T.setDraw && "function" == typeof T.setDraw && T.setDraw(t);
                                break;

                              case "fillRect":
                                i.default.log("绘制可控层级序列, 绘制填充直角矩形"), m(t, T);
                                break;

                              case "strokeRect":
                                i.default.log("绘制可控层级序列, 绘制线条直角矩形"), b(t, T);
                                break;

                              case "roundStrokeRect":
                                i.default.log("绘制可控层级序列, 绘制线条圆角矩形"), _(t, T);
                                break;

                              case "roundFillRect":
                                i.default.log("绘制可控层级序列, 绘制填充圆角矩形"), w(t, T);
                                break;

                              default:
                                i.default.log("未识别的类型");
                            }
                        }
                        if (i.default.showLoading("绘制中"), i.default.log("准备执行draw方法"), i.default.log("Context:", t), 
                        !1 === S) return i.default.log("draw属性为false，请自行调用canvas实例的draw方法"), void e();
                        t.draw("boolean" == typeof a && a, setTimeout(function() {
                            var t, a = h || {};
                            a && "function" == typeof a && (a = h(s, r)), n.getSystemInfoSync().pixelRatio;
                            var p = d(d({
                                quality: 1,
                                fileType: "jpg"
                            }, a), {}, {
                                canvasId: o
                            });
                            if (!1 === k) return i.default.hideLoading(), e({
                                setCanvasToTempFilePath: p
                            });
                            i.default.showLoading("正在输出图片"), i.default.log("canvasToTempFilePath的data对象:" + JSON.stringify(p)), 
                            t = function() {
                                var t = d(d({}, p), {}, {
                                    success: function(t) {
                                        i.default.hideLoading(), e(d(d({}, t), {}, {
                                            setCanvasToTempFilePath: p
                                        }));
                                    },
                                    fail: function(e) {
                                        i.default.hideLoading(), i.default.log("输出图片失败"), i.default.log("输出图片失败:" + JSON.stringify(e)), 
                                        v("输出图片失败:" + JSON.stringify(e));
                                    }
                                });
                                n.canvasToTempFilePath(t, g || null);
                            };
                            var m = 0;
                            f && f.forEach(function(e) {
                                e.text && (m += Number(e.text.length));
                            }), l && l.forEach(function() {
                                m += y;
                            }), c && c.forEach(function() {
                                m += y;
                            }), u && u.forEach(function(e) {
                                switch (e.type) {
                                  case "text":
                                    e.text && (m += e.text.length);
                                    break;

                                  case "qrcode":
                                    e.text && (m += 2 * e.text.length);
                                    break;

                                  default:
                                    m += y;
                                }
                            }), i.default.log("延时系数:" + y), i.default.log("总计延时:" + m), setTimeout(t, m);
                        }, x));
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        i.default.hideLoading(), v(e);
                    }
                });
            }
            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i.default.log("进入绘制填充直角矩形方法, drawArrayItem:" + JSON.stringify(t)), e.setFillStyle(t.backgroundColor || "black"), 
                e.setGlobalAlpha(t.alpha || 1), e.fillRect(t.dx || 0, t.dy || 0, t.width || 0, t.height || 0), 
                e.setGlobalAlpha(1);
            }
            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.setStrokeStyle(t.color || "black"), e.setLineWidth(t.lineWidth || 1), e.strokeRect(t.dx, t.dy, t.width, t.height);
            }
            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.dx, r = t.dy, o = t.width, i = t.height, a = t.r, s = t.lineWidth, u = t.color;
                o < 2 * (a = a || .1 * o) && (a = o / 2), o < 2 * a && (a = o / 2), e.beginPath(), 
                e.arc(n + a, r + a, a, 1 * Math.PI, 1.5 * Math.PI), e.lineTo(n + o - a, r), e.arc(n + o - a, r + a, a, 1.5 * Math.PI, 0), 
                e.lineTo(n + o, r + i - a), e.arc(n + o - a, r + i - a, a, 0, .5 * Math.PI), e.lineTo(n + a, r + i), 
                e.arc(n + a, r + i - a, a, .5 * Math.PI, 1 * Math.PI), e.lineTo(n, r + a), e.closePath(), 
                e.setLineWidth(s || 1), e.setStrokeStyle(u || "black"), e.stroke();
            }
            function w(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.dx, r = t.dy, o = t.width, i = t.height, a = t.r, s = t.backgroundColor;
                o < 2 * (a = a || .1 * o) && (a = o / 2), o < 2 * a && (a = o / 2), e.beginPath(), 
                e.arc(n + a, r + a, a, 1 * Math.PI, 1.5 * Math.PI), e.lineTo(n + o - a, r), e.arc(n + o - a, r + a, a, 1.5 * Math.PI, 0), 
                e.lineTo(n + o, r + i - a), e.arc(n + o - a, r + i - a, a, 0, .5 * Math.PI), e.lineTo(n + a, r + i), 
                e.arc(n + a, r + i - a, a, .5 * Math.PI, 1 * Math.PI), e.lineTo(n, r + a), e.closePath(), 
                e.setFillStyle(s), e.fill();
            }
            function x(e, t, n) {
                if (i.default.log("进入设置文字方法, texts:" + JSON.stringify(t)), !t || !i.default.isArray(t)) return i.default.log("texts是对象"), 
                t = k(e, t, n), i.default.log("返回texts:" + JSON.stringify(t)), t;
                if (i.default.log("texts是数组"), t.length > 0) for (var r = 0; r < t.length; r++) i.default.log("字符串信息-初始化之前:" + JSON.stringify(t[r])), 
                t[r] = k(e, t[r], n);
            }
            function k(e, t, n) {
                if (i.default.log("进入设置文字方法, textItem:" + JSON.stringify(t)), i.default.isNotNull_string(t.text)) {
                    t.text = String(t.text), t.alpha = void 0 !== t.alpha ? Number(t.alpha) : 1, t.color = t.color || "black", 
                    t.size = void 0 !== t.size ? Number(t.size) : 10, t.textAlign = t.textAlign || "left", 
                    t.textBaseline = t.textBaseline || "middle", t.dx = Number(t.dx) || 0, t.dy = Number(t.dy) || 0, 
                    t.size = Math.ceil(Number(t.size)), i.default.log("字符串信息-初始化默认值后:" + JSON.stringify(t));
                    var r = O(e, {
                        text: t.text,
                        size: t.size
                    });
                    i.default.log("字符串信息-初始化时的文本长度:" + r);
                    var o = {};
                    t.infoCallBack && "function" == typeof t.infoCallBack && (o = t.infoCallBack(r)), 
                    o.size && (r = O(e, {
                        text: t.text,
                        size: t.size
                    })), t = d(d(d({}, t), o), {}, {
                        textLength: r
                    }), i.default.log("字符串信息-infoCallBack后:" + JSON.stringify(t));
                }
                return t;
            }
            function S(e, t, n) {
                if (t.text && t.lineFeed) {
                    i.default.log("设置换行");
                    var r, o = -1, a = n.width, s = t.size, u = t.dx;
                    if (i.default.isObject(t.lineFeed)) {
                        var c = t.lineFeed;
                        o = void 0 !== c.lineNum && "number" == typeof c.lineNum && c.lineNum >= 0 ? c.lineNum : o, 
                        a = void 0 !== c.maxWidth && "number" == typeof c.maxWidth ? c.maxWidth : a, r = void 0 !== c.lastLineMaxWidth && "number" == typeof c.lastLineMaxWidth ? c.lastLineMaxWidth : a, 
                        s = void 0 !== c.lineHeight && "number" == typeof c.lineHeight ? c.lineHeight : s, 
                        u = void 0 !== c.dx && "number" == typeof c.dx ? c.dx : u;
                    }
                    i.default.lineFeedTags.forEach(function(e) {
                        t.text = t.text.split(e).join(i.default.tagetLineFeedTag);
                    });
                    for (var f = t.text.split(""), l = "", h = [], p = 0, v = f.length; p < v; p++) f[p] !== i.default.tagetLineFeedTag ? O(e, {
                        text: l,
                        size: t.size
                    }) <= a && O(e, {
                        text: l + f[p],
                        size: t.size
                    }) <= a ? (l += f[p], p == f.length - 1 && h.push(l)) : (h.push(l), l = f[p], p == f.length - 1 && h.push(f[p])) : (h.push(l), 
                    l = f[++p]);
                    i.default.log("循环出的文本数组:" + JSON.stringify(h));
                    for (var g = o >= 0 && o < h.length ? o : h.length, y = [], m = 0; m < g; m++) {
                        var b = h[m];
                        if (m == g - 1 && g < h.length && h.length > 1) {
                            for (var _ = b.split(""), w = "", x = 0, k = _.length; x < k; x++) O(e, {
                                text: w,
                                size: t.size
                            }) <= r && O(e, {
                                text: w + _[x],
                                size: t.size
                            }) <= r && (w += _[x]);
                            O(e, {
                                text: b = w,
                                size: t.size
                            }) > .9 * (r - t.size) && (b = b.substring(0, b.length - 1) + "...");
                        }
                        var S = d(d({}, t), {}, {
                            text: b,
                            dx: 0 === m ? t.dx : u >= 0 ? u : t.dx,
                            dy: t.dy + m * s,
                            textLength: O(e, {
                                text: b,
                                size: t.size
                            })
                        });
                        i.default.log("重新组成的文本对象:" + JSON.stringify(S)), y.push(S);
                    }
                    return i.default.log("newArr: -----", JSON.stringify(y)), y.length > 1 ? y : y[0];
                }
                return t;
            }
            function O(e, t) {
                i.default.log("计算文字长度, obj:" + JSON.stringify(t));
                var n, r = t.text, o = t.size;
                e.setFontSize(o);
                try {
                    n = e.measureText(r);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n = {};
                }
                if (i.default.log("measureText计算文字长度, textLength:" + JSON.stringify(n)), !(n = n && n.width ? n.width : 0)) {
                    for (var a = 0, s = 0; s < r.length; s++) {
                        var u = A(r.substr(s, 1));
                        i.default.log("计算文字宽度系数:" + u), a += u;
                    }
                    i.default.log("文字宽度总系数:" + a), n = a * o;
                }
                return n;
            }
            function A(e) {
                return /a/.test(e) ? .552734375 : /b/.test(e) ? .638671875 : /c/.test(e) ? .50146484375 : /d/.test(e) ? .6396484375 : /e/.test(e) ? .5673828125 : /f/.test(e) ? .3466796875 : /g/.test(e) ? .6396484375 : /h/.test(e) ? .61572265625 : /i/.test(e) ? .26611328125 : /j/.test(e) ? .26708984375 : /k/.test(e) ? .54443359375 : /l/.test(e) ? .26611328125 : /m/.test(e) ? .93701171875 : /n/.test(e) ? .6162109375 : /o/.test(e) ? .6357421875 : /p/.test(e) ? .638671875 : /q/.test(e) ? .6396484375 : /r/.test(e) ? .3818359375 : /s/.test(e) ? .462890625 : /t/.test(e) ? .37255859375 : /u/.test(e) ? .6162109375 : /v/.test(e) ? .52490234375 : /w/.test(e) ? .78955078125 : /x/.test(e) ? .5068359375 : /y/.test(e) ? .529296875 : /z/.test(e) ? .49169921875 : /A/.test(e) ? .70361328125 : /B/.test(e) ? .62744140625 : /C/.test(e) ? .6689453125 : /D/.test(e) ? .76171875 : /E/.test(e) ? .5498046875 : /F/.test(e) ? .53125 : /G/.test(e) ? .74365234375 : /H/.test(e) ? .7734375 : /I/.test(e) ? .2939453125 : /J/.test(e) ? .39599609375 : /K/.test(e) ? .634765625 : /L/.test(e) ? .51318359375 : /M/.test(e) ? .97705078125 : /N/.test(e) ? .81298828125 : /O/.test(e) ? .81494140625 : /P/.test(e) ? .61181640625 : /Q/.test(e) ? .81494140625 : /R/.test(e) ? .65283203125 : /S/.test(e) ? .5771484375 : /T/.test(e) ? .5732421875 : /U/.test(e) ? .74658203125 : /V/.test(e) ? .67626953125 : /W/.test(e) ? 1.017578125 : /X/.test(e) ? .64501953125 : /Y/.test(e) ? .603515625 : /Z/.test(e) ? .6201171875 : /[0-9]/.test(e) ? .58642578125 : /[\u4e00-\u9fa5]/.test(e) ? 1 : / /.test(e) ? .2958984375 : /\`/.test(e) ? .294921875 : /\~/.test(e) ? .74169921875 : /\!/.test(e) ? .3125 : /\@/.test(e) ? 1.03125 : /\#/.test(e) ? .63818359375 : /\$/.test(e) ? .58642578125 : /\%/.test(e) ? .8896484375 : /\^/.test(e) ? .74169921875 : /\&/.test(e) ? .8701171875 : /\*/.test(e) ? .455078125 : /\(/.test(e) || /\)/.test(e) ? .333984375 : /\_/.test(e) ? .4482421875 : /\-/.test(e) ? .4326171875 : /\+/.test(e) || /\=/.test(e) ? .74169921875 : /\|/.test(e) ? .26904296875 : /\\/.test(e) ? .416015625 : /\[/.test(e) || /\]/.test(e) ? .333984375 : /\;/.test(e) ? .24072265625 : /\'/.test(e) ? .25634765625 : /\,/.test(e) || /\./.test(e) ? .24072265625 : /\//.test(e) ? .42724609375 : /\{/.test(e) || /\}/.test(e) ? .333984375 : /\:/.test(e) ? .24072265625 : /\"/.test(e) ? .435546875 : /\</.test(e) || /\>/.test(e) ? .74169921875 : /\?/.test(e) ? .48291015625 : 1;
            }
            function P(e) {
                return i.default.log("进入设置图片数据方法"), new Promise(function() {
                    var t = v(o.default.mark(function t(n, r) {
                        var a;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.prev = 0, !e || !i.default.isArray(e)) {
                                    t.next = 14;
                                    break;
                                }
                                i.default.log("images是一个数组"), a = 0;

                              case 4:
                                if (!(a < e.length)) {
                                    t.next = 12;
                                    break;
                                }
                                return i.default.log("设置图片数据循环中:" + a), t.next = 8, E(e[a]);

                              case 8:
                                e[a] = t.sent;

                              case 9:
                                a++, t.next = 4;
                                break;

                              case 12:
                                t.next = 18;
                                break;

                              case 14:
                                return i.default.log("images是一个对象"), t.next = 17, E(e);

                              case 17:
                                e = t.sent;

                              case 18:
                                n(e), t.next = 24;
                                break;

                              case 21:
                                t.prev = 21, t.t0 = t.catch(0), r(t.t0);

                              case 24:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 21 ] ]);
                    }));
                    return function(e, n) {
                        return t.apply(this, arguments);
                    };
                }());
            }
            function T(e) {
                return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i.test(e) ? (0, 
                s.base64ToPath)(e) : Promise.resolve(e);
            }
            function E(e) {
                return new Promise(function() {
                    var t = v(o.default.mark(function t(n, r) {
                        var a, s, u, c;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!e.url) {
                                    t.next = 21;
                                    break;
                                }
                                return t.next = 3, T(e.url);

                              case 3:
                                return e.url = t.sent, a = e.url, s = a, t.next = 8, i.default.downloadFile_PromiseFc(a);

                              case 8:
                                return a = t.sent, e.url = a, u = e.infoCallBack && "function" == typeof e.infoCallBack, 
                                c = {}, t.next = 14, i.default.getImageInfo_PromiseFc(s);

                              case 14:
                                c = t.sent, u && (e = d(d({}, e), e.infoCallBack(c))), e.dx = Number(e.dx) || 0, 
                                e.dy = Number(e.dy) || 0, e.dWidth = Number(e.dWidth || c.width), e.dHeight = Number(e.dHeight || c.height), 
                                e = d(d({}, e), {}, {
                                    imageInfo: c
                                });

                              case 21:
                                n(e);

                              case 22:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }));
                    return function(e, n) {
                        return t.apply(this, arguments);
                    };
                }());
            }
            function j(e, t, n) {
                i.default.isArray(t) ? i.default.log("遍历文本方法, 是数组") : (i.default.log("遍历文本方法, 不是数组"), 
                t = [ t ]), i.default.log("遍历文本方法, textArray:" + JSON.stringify(t));
                var r = t;
                i.default.log("绘制文本新数组:" + JSON.stringify(r)), function(e, t) {
                    if (i.default.log("准备绘制文本方法, texts:" + JSON.stringify(t)), t && i.default.isArray(t)) {
                        if (i.default.log("准备绘制文本方法, 是数组"), t.length > 0) for (var n = 0; n < t.length; n++) C(e, t[n]);
                    } else i.default.log("准备绘制文本方法, 不是数组"), C(e, t);
                }(e, r);
            }
            function C(e, t) {
                if (i.default.log("进入绘制文本方法, textItem:" + JSON.stringify(t)), t && i.default.isObject(t) && t.text) {
                    if (e.font = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (e.font && "string" == typeof e.font) return i.default.log(e.font), e.font;
                        var t = "normal", n = "normal", r = "normal", o = e.size || 10, a = "sans-serif";
                        return o = Math.ceil(Number(o)), e.fontStyle && "string" == typeof e.fontStyle && (t = e.fontStyle.trim()), 
                        e.fontVariant && "string" == typeof e.fontVariant && (n = e.fontVariant.trim()), 
                        !e.fontWeight || "string" != typeof e.fontWeight && "number" != typeof e.fontWeight || (r = e.fontWeight.trim()), 
                        e.fontFamily && "string" == typeof e.fontFamily && (a = e.fontFamily.trim()), t + " " + n + " " + r + " " + o + "px " + a;
                    }(t), e.setFillStyle(t.color), e.setGlobalAlpha(t.alpha), e.setTextAlign(t.textAlign), 
                    e.setTextBaseline(t.textBaseline), e.fillText(t.text, t.dx, t.dy), t.lineThrough && i.default.isObject(t.lineThrough)) {
                        i.default.log("有删除线");
                        var n, r, o = t.lineThrough;
                        switch (o.alpha = void 0 !== o.alpha ? o.alpha : t.alpha, o.style = o.style || t.color, 
                        o.width = void 0 !== o.width ? o.width : t.size / 10, o.cap = void 0 !== o.cap ? o.cap : "butt", 
                        i.default.log("删除线对象:" + JSON.stringify(o)), e.setGlobalAlpha(o.alpha), e.setStrokeStyle(o.style), 
                        e.setLineWidth(o.width), e.setLineCap(o.cap), t.textAlign) {
                          case "left":
                            n = t.dx;
                            break;

                          case "center":
                            n = t.dx - t.textLength / 2;
                            break;

                          default:
                            n = t.dx - t.textLength;
                        }
                        switch (t.textBaseline) {
                          case "top":
                            r = t.dy + .5 * t.size;
                            break;

                          case "middle":
                            r = t.dy;
                            break;

                          default:
                            r = t.dy - .5 * t.size;
                        }
                        e.beginPath(), e.moveTo(n, r), e.lineTo(n + t.textLength, r), e.stroke(), e.closePath(), 
                        i.default.log("删除线完毕");
                    }
                    e.setGlobalAlpha(1), e.font = "10px sans-serif";
                }
            }
            function I(e, t) {
                if (i.default.log("判断图片数据类型:" + JSON.stringify(t)), t && i.default.isArray(t)) {
                    if (t.length > 0) for (var n = 0; n < t.length; n++) D(e, t[n]);
                } else D(e, t);
            }
            function D(e, n) {
                i.default.log("判断绘制图片形状, img:" + JSON.stringify(n)), n.url && (n.circleSet ? function(e, n) {
                    i.default.log("进入绘制圆形图片方法, obj:" + JSON.stringify(n));
                    var r, o, a, s = n.dx, u = n.dy, c = n.dWidth, f = n.dHeight, l = n.circleSet;
                    n.imageInfo, "object" === t(l) && (r = l.x, o = l.y, a = l.r), a || (a = (c > f ? f : c) / 2), 
                    r = r ? s + r : (s || 0) + a, o = o ? u + o : (u || 0) + a, e.save(), e.beginPath(), 
                    e.arc(r, o, a, 0, 2 * Math.PI, !1), e.closePath(), e.setGlobalAlpha(0), e.fillStyle = "#FFFFFF", 
                    e.fill(), e.setGlobalAlpha(1), e.clip(), N(e, n), i.default.log("默认图片绘制完毕"), e.restore();
                }(e, n) : n.roundRectSet ? function(e, n) {
                    i.default.log("进入绘制矩形图片方法, obj:" + JSON.stringify(n)), e.save();
                    var r, o = n.dx, a = n.dy, s = n.dWidth, u = n.dHeight, c = n.roundRectSet;
                    n.imageInfo, "object" === t(c) && (r = c.r), s < 2 * (r = r || .1 * s) && (r = s / 2), 
                    u < 2 * r && (r = u / 2), e.beginPath(), e.arc(o + r, a + r, r, 1 * Math.PI, 1.5 * Math.PI), 
                    e.lineTo(o + s - r, a), e.arc(o + s - r, a + r, r, 1.5 * Math.PI, 0), e.lineTo(o + s, a + u - r), 
                    e.arc(o + s - r, a + u - r, r, 0, .5 * Math.PI), e.lineTo(o + r, a + u), e.arc(o + r, a + u - r, r, .5 * Math.PI, 1 * Math.PI), 
                    e.lineTo(o, a + r), e.closePath(), e.setGlobalAlpha(0), e.fillStyle = "#FFFFFF", 
                    e.fill(), e.setGlobalAlpha(1), e.clip(), N(e, n), e.restore(), i.default.log("进入绘制矩形图片方法, 绘制完毕");
                }(e, n) : N(e, n));
            }
            var L = {
                scaleToFill: function(e, t) {
                    i.default.log("准备绘制mode为scaleToFill的图片"), e.drawImage(t.url, Number(t.dx || 0), Number(t.dy || 0), Number(t.dWidth) || !1, Number(t.dHeight) || !1), 
                    i.default.log("mode为scaleToFill的图片绘制完毕");
                },
                aspectFit: function(e, t) {
                    i.default.log("准备绘制mode为aspectFit的图片");
                    var n = t.imageInfo, r = t.dWidth, o = t.dHeight, a = n.height, s = n.width, u = r, c = a / s * u;
                    if (c < o) {
                        var f = (Number(o) - Number(c)) / Number(o) * a;
                        t.dy = Number(t.dy) + f / 2;
                    } else {
                        u = s / a * (c = o);
                        var l = (Number(r) - Number(u)) / Number(r) * s;
                        t.dx = Number(t.dx) + l / 2;
                    }
                    e.drawImage(t.url, 0, 0, s, a, t.dx, t.dy, u, c), i.default.log("mode为aspectFit的图片绘制完毕");
                },
                aspectFill: function(e, t) {
                    n.getSystemInfoSync().pixelRatio, i.default.log("准备绘制mode为aspectFill的图片");
                    var r = t.imageInfo, o = t.dWidth, a = t.dHeight, s = r.height, u = r.width, c = 0, f = 0, l = u, d = s, h = o, p = s / u * h;
                    if (p < a) {
                        i.default.log("绘制高度 小于 预定高度"), h = u / s * (p = a);
                        var v = (Number(h) - Number(o)) / Number(h) * u;
                        c = v / 2, l = u - v;
                    } else {
                        var g = (Number(p) - Number(a)) / Number(p) * s;
                        f = g / 2, d = s - g;
                    }
                    i.default.log("aspectFill 最终绘制: sx: ".concat(c, ", sy: ").concat(f, ", sWidth: ").concat(l, ", sHeight: ").concat(d, ", dx: ").concat(t.dx, ", dy: ").concat(t.dy, ", dWidth: ").concat(o, ", dHeight: ").concat(a)), 
                    e.drawImage(t.url, c, f, l, d, t.dx, t.dy, o, a), i.default.log("mode为aspectFill的图片绘制完毕");
                }
            };
            function N(e, t) {
                if (i.default.log("进入绘制默认图片方法, img:" + JSON.stringify(t)), t.url) {
                    var n = !i.default.isUndef(t.alpha);
                    t.alpha = Number(i.default.isUndef(t.alpha) ? 1 : t.alpha), e.setGlobalAlpha(t.alpha), 
                    i.default.log("绘制默认图片方法, 有url"), void 0 === t.dHeight && (t.dHeight = t.imageInfo.height), 
                    void 0 === t.dWidth && (t.dWidth = t.imageInfo.width);
                    var r = L[t.mode];
                    r ? r(e, t) : t.dWidth && t.dHeight && t.sx && t.sy && t.sWidth && t.sHeight ? (i.default.log("绘制默认图片方法, 绘制第一种方案"), 
                    e.drawImage(t.url, Number(t.sx) || !1, Number(t.sy) || !1, Number(t.sWidth) || !1, Number(t.sHeight) || !1, Number(t.dx || 0), Number(t.dy || 0), Number(t.dWidth) || !1, Number(t.dHeight) || !1)) : t.dWidth && t.dHeight ? (i.default.log("绘制默认图片方法, 绘制第二种方案"), 
                    e.drawImage(t.url, Number(t.dx || 0), Number(t.dy || 0), Number(t.dWidth) || !1, Number(t.dHeight) || !1)) : (i.default.log("绘制默认图片方法, 绘制第三种方案"), 
                    e.drawImage(t.url, Number(t.dx || 0), Number(t.dy || 0))), n && e.setGlobalAlpha(1);
                }
                i.default.log("绘制默认图片方法, 绘制完毕");
            }
            function R(e, t) {
                i.default.log("进入绘制二维码方法"), i.default.showLoading("正在生成二维码");
                for (var n = [], r = {
                    text: String(t.text || "") || "",
                    size: Number(t.size || 0) || 200,
                    background: String(t.background || "") || "#ffffff",
                    foreground: String(t.foreground || "") || "#000000",
                    pdground: String(t.pdground || "") || "#000000",
                    correctLevel: Number(t.correctLevel || 0) || 3,
                    image: String(t.image || "") || "",
                    imageSize: Number(t.imageSize || 0) || 40,
                    dx: Number(t.dx || 0) || 0,
                    dy: Number(t.dy || 0) || 0
                }, o = null, s = 0, u = 0, c = n.length; u < c; u++) if (s = u, n[u].text == r.text && n[u].text.correctLevel == r.correctLevel) {
                    o = n[u].obj;
                    break;
                }
                s == c && (o = new a.default(r.text, r.correctLevel), n.push({
                    text: r.text,
                    correctLevel: r.correctLevel,
                    obj: o
                }));
                for (var f = function(e) {
                    var t = e.options;
                    return t.pdground && (e.row > 1 && e.row < 5 && e.col > 1 && e.col < 5 || e.row > e.count - 6 && e.row < e.count - 2 && e.col > 1 && e.col < 5 || e.row > 1 && e.row < 5 && e.col > e.count - 6 && e.col < e.count - 2) ? t.pdground : t.foreground;
                }, l = o.getModuleCount(), d = r.size, h = r.imageSize, p = (d / l).toPrecision(4), v = (d / l).toPrecision(4), g = 0; g < l; g++) for (var y = 0; y < l; y++) {
                    var m = Math.ceil((y + 1) * p) - Math.floor(y * p), b = Math.ceil((g + 1) * p) - Math.floor(g * p), _ = f({
                        row: g,
                        col: y,
                        count: l,
                        options: r
                    });
                    e.setFillStyle(o.modules[g][y] ? _ : r.background), e.fillRect(r.dx + Math.round(y * p), r.dy + Math.round(g * v), m, b);
                }
                if (r.image) {
                    var w = r.dx + Number(((d - h) / 2).toFixed(2)), x = r.dy + Number(((d - h) / 2).toFixed(2));
                    (function(e, t, n, o, i, a, s, u, c) {
                        e.setLineWidth(s), e.setFillStyle(r.background), e.setStrokeStyle(r.background), 
                        e.beginPath(), e.moveTo(t + a, n), e.arcTo(t + o, n, t + o, n + a, a), e.arcTo(t + o, n + i, t + o - a, n + i, a), 
                        e.arcTo(t, n + i, t, n + i - a, a), e.arcTo(t, n, t + a, n, a), e.closePath(), u && e.fill(), 
                        c && e.stroke();
                    })(e, w, x, h, h, 2, 6, !0, !0), e.drawImage(r.image, w, x, h, h);
                }
                i.default.log("进入绘制二维码方法完毕"), i.default.hideLoading();
            }
            function $(e) {
                return e.backgroundImage, e.type, new Promise(function() {
                    var t = v(o.default.mark(function t(n, r) {
                        var a;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, i.default.showLoading("正在获取海报背景图"), t.next = 4, F(e);

                              case 4:
                                a = t.sent, i.default.hideLoading(), n(a), t.next = 15;
                                break;

                              case 9:
                                t.prev = 9, t.t0 = t.catch(0), i.default.hideLoading(), i.default.showToast("获取分享用户背景图失败:" + JSON.stringify(t.t0)), 
                                i.default.log(JSON.stringify(t.t0)), r(t.t0);

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 9 ] ]);
                    }));
                    return function(e, n) {
                        return t.apply(this, arguments);
                    };
                }());
            }
            function M(e, t) {
                i.default.setStorage(function(e) {
                    return "ShrePosterBackground_" + (e || "default");
                }(e), t);
            }
            function F(e, t) {
                var n = e.backgroundImage, r = e.type;
                return i.default.log("获取分享背景图, 尝试清空本地数据"), new Promise(function() {
                    var t = v(o.default.mark(function t(a, s) {
                        var u, c, f, l;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.prev = 0, i.default.showLoading("正在下载海报背景图"), i.default.log("没有从后端获取的背景图片路径, 尝试从后端获取背景图片路径"), 
                                !n) {
                                    t.next = 7;
                                    break;
                                }
                                t.t0 = n, t.next = 10;
                                break;

                              case 7:
                                return t.next = 9, i.default.getPosterUrl(e);

                              case 9:
                                t.t0 = t.sent;

                              case 10:
                                return u = t.t0, t.next = 13, T(u);

                              case 13:
                                return u = t.sent, i.default.log("尝试下载并保存背景图:" + u), t.next = 17, i.default.downLoadAndSaveFile_PromiseFc(u);

                              case 17:
                                if (!(c = t.sent)) {
                                    t.next = 32;
                                    break;
                                }
                                return i.default.log("下载并保存背景图成功:" + c), t.next = 22, i.default.getImageInfo_PromiseFc(u);

                              case 22:
                                f = t.sent, i.default.log("获取图片信息成功"), l = {
                                    path: c,
                                    width: f.width,
                                    height: f.height,
                                    name: i.default.fileNameInPath(u)
                                }, i.default.log("拼接背景图信息对象成功:" + JSON.stringify(l)), M(r, d({}, l)), i.default.hideLoading(), 
                                i.default.log("返回背景图信息对象"), a(d({}, l)), t.next = 34;
                                break;

                              case 32:
                                i.default.hideLoading(), s("not find savedFilePath");

                              case 34:
                                t.next = 39;
                                break;

                              case 36:
                                t.prev = 36, t.t1 = t.catch(0), s(t.t1);

                              case 39:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 36 ] ]);
                    }));
                    return function(e, n) {
                        return t.apply(this, arguments);
                    };
                }());
            }
            e.exports = {
                getSharePoster: function(e) {
                    var t = e.type, r = e.formData, a = e.background, s = e.posterCanvasId, u = e.backgroundImage, f = e.reserve, l = e.textArray, h = e.drawArray, p = e.qrCodeArray, m = e.imagesArray, b = e.setCanvasWH, _ = e.setCanvasToTempFilePath, w = e.canvas2image, k = e.setDraw, A = e.bgScale, T = e.Context, E = e._this, j = e.delayTimeScale, C = e.drawDelayTime, I = e.draw;
                    return new Promise(function() {
                        var e = v(o.default.mark(function e(v, D) {
                            var L, N, R, M, F, B, U, q, H, V, K;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (e.prev = 0, i.default.showLoading("正在准备海报数据"), T || (i.default.log("没有画布对象,创建画布对象"), 
                                    T = n.createCanvasContext(s, E || null)), !(a && a.width && a.height)) {
                                        e.next = 7;
                                        break;
                                    }
                                    L = a, e.next = 10;
                                    break;

                                  case 7:
                                    return e.next = 9, $({
                                        backgroundImage: u,
                                        type: t,
                                        formData: r
                                    });

                                  case 9:
                                    L = e.sent;

                                  case 10:
                                    if (A = A || 1, L.width = L.width * A, L.height = L.height * A, i.default.log("获取背景图信息对象成功:" + JSON.stringify(L)), 
                                    N = {
                                        bgObj: L,
                                        type: t,
                                        bgScale: A,
                                        getBgObj: function() {
                                            return N.bgObj;
                                        },
                                        setBgObj: function(e) {
                                            var t = d(d({}, N.bgObj), e);
                                            N.bgObj = t, L = t;
                                        }
                                    }, !m) {
                                        e.next = 23;
                                        break;
                                    }
                                    return "function" == typeof m && (m = m(N)), i.default.showLoading("正在生成需绘制图片的临时路径"), 
                                    i.default.log("准备设置图片"), e.next = 21, P(m);

                                  case 21:
                                    m = e.sent, i.default.hideLoading();

                                  case 23:
                                    if (l && ("function" == typeof l && (l = l(N)), l = x(T, l)), !p) {
                                        e.next = 38;
                                        break;
                                    }
                                    "function" == typeof p && (p = p(N)), i.default.showLoading("正在生成需绘制图片的临时路径"), R = 0;

                                  case 28:
                                    if (!(R < p.length)) {
                                        e.next = 37;
                                        break;
                                    }
                                    if (i.default.log(R), !p[R].image) {
                                        e.next = 34;
                                        break;
                                    }
                                    return e.next = 33, i.default.downloadFile_PromiseFc(p[R].image);

                                  case 33:
                                    p[R].image = e.sent;

                                  case 34:
                                    R++, e.next = 28;
                                    break;

                                  case 37:
                                    i.default.hideLoading();

                                  case 38:
                                    if (!h) {
                                        e.next = 96;
                                        break;
                                    }
                                    if ("function" == typeof h && (h = h(N)), !i.default.isPromise(h)) {
                                        e.next = 44;
                                        break;
                                    }
                                    return e.next = 43, h;

                                  case 43:
                                    h = e.sent;

                                  case 44:
                                    if (!(i.default.isArray(h) && h.length > 0)) {
                                        e.next = 96;
                                        break;
                                    }
                                    M = 0;

                                  case 47:
                                    if (!(M < h.length)) {
                                        e.next = 79;
                                        break;
                                    }
                                    (F = h[M])[g] = M, B = void 0, U = !1, e.t0 = F.type, e.next = "image" === e.t0 ? 55 : "text" === e.t0 ? 59 : "qrcode" === e.t0 ? 61 : "custom" === e.t0 ? 67 : "fillrect" === e.t0 ? 68 : "strokeRect" === e.t0 ? 69 : "roundStrokeRect" === e.t0 ? 70 : "roundFillRect" === e.t0 ? 71 : 72;
                                    break;

                                  case 55:
                                    return e.next = 57, P(F);

                                  case 57:
                                    return B = e.sent, e.abrupt("break", 74);

                                  case 59:
                                    return B = x(T, F, N.bgObj), e.abrupt("break", 74);

                                  case 61:
                                    if (!F.image) {
                                        e.next = 66;
                                        break;
                                    }
                                    return e.next = 64, i.default.downloadFile_PromiseFc(F.image);

                                  case 64:
                                    e.t1 = e.sent, B = {
                                        image: e.t1
                                    };

                                  case 66:
                                  case 67:
                                  case 68:
                                  case 69:
                                  case 70:
                                  case 71:
                                    return e.abrupt("break", 74);

                                  case 72:
                                    return i.default.log("未识别的类型"), e.abrupt("break", 74);

                                  case 74:
                                    !U && B && i.default.isObject(B) && (h[M] = d(d({}, F), B));

                                  case 76:
                                    M++, e.next = 47;
                                    break;

                                  case 79:
                                    i.default.log("AllInfoCallback之前", JSON.stringify(h)), i.default.log("----------------hasAllInfoCallback----------------"), 
                                    (q = c(h)).sort(function(e, t) {
                                        return (i.default.isUndef(e.serialNum) || i.default.isNull(e.serialNum) ? Number.NEGATIVE_INFINITY : Number(e.serialNum)) - (i.default.isUndef(t.serialNum) || i.default.isNull(t.serialNum) ? Number.NEGATIVE_INFINITY : Number(t.serialNum));
                                    }), i.default.log("开始for循环"), H = o.default.mark(function e(t) {
                                        var n, r, a, s, u, f, l;
                                        return o.default.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                if (n = d({}, q[t]), r = n[g], i.default.log("item_idKey", r), a = h.findIndex(function(e) {
                                                    return e[g] == r;
                                                }), i.default.log("ind", a), -1 != a) {
                                                    e.next = 7;
                                                    break;
                                                }
                                                return e.abrupt("return", "break");

                                              case 7:
                                                if (!i.default.isFn(n.allInfoCallback)) {
                                                    e.next = 16;
                                                    break;
                                                }
                                                if (s = n.allInfoCallback({
                                                    drawArray: h
                                                }), i.default.log("newData", JSON.stringify(s)), !i.default.isPromise(s)) {
                                                    e.next = 14;
                                                    break;
                                                }
                                                return e.next = 13, s;

                                              case 13:
                                                s = e.sent;

                                              case 14:
                                                "text" === h[a].type && s.size && (u = O(T, {
                                                    text: s.text || h[a].text,
                                                    size: s.size
                                                }), s.textLength = u), h[a] = d(d({}, n), s);

                                              case 16:
                                                i.default.log("drawArray[ind]", JSON.stringify(h[a])), "text" === h[a].type && (f = S(T, h[a], N.bgObj), 
                                                i.default.isArray(f) ? (f.forEach(function(e, t) {
                                                    e[g] = h.length + t, e.allInfoCallback = null;
                                                }), (l = h).splice.apply(l, [ a, 1 ].concat(c(f)))) : h.splice(a, 1, f));

                                              case 18:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                    }), V = 0;

                                  case 86:
                                    if (!(V < q.length)) {
                                        e.next = 94;
                                        break;
                                    }
                                    return e.delegateYield(H(V), "t2", 88);

                                  case 88:
                                    if ("break" !== e.t2) {
                                        e.next = 91;
                                        break;
                                    }
                                    return e.abrupt("break", 94);

                                  case 91:
                                    V++, e.next = 86;
                                    break;

                                  case 94:
                                    i.default.log("for循环结束"), i.default.log("allInfocallback结束", JSON.stringify(h));

                                  case 96:
                                    if (h.sort(function(e, t) {
                                        return (i.default.isUndef(e.zIndex) || i.default.isNull(e.zIndex) ? Number.NEGATIVE_INFINITY : Number(e.zIndex)) - (i.default.isUndef(t.zIndex) || i.default.isNull(t.zIndex) ? Number.NEGATIVE_INFINITY : Number(t.zIndex));
                                    }), i.default.log("params:" + JSON.stringify(N)), !b || "function" != typeof b) {
                                        e.next = 101;
                                        break;
                                    }
                                    return e.next = 101, new Promise(function(e, t) {
                                        b(N), setTimeout(function() {
                                            e();
                                        }, 50);
                                    });

                                  case 101:
                                    return e.next = 103, y({
                                        Context: T,
                                        type: t,
                                        posterCanvasId: s,
                                        reserve: f,
                                        drawArray: h,
                                        textArray: l,
                                        imagesArray: m,
                                        bgObj: L,
                                        qrCodeArray: p,
                                        setCanvasToTempFilePath: _,
                                        setDraw: k,
                                        bgScale: A,
                                        _this: E,
                                        delayTimeScale: j,
                                        drawDelayTime: C,
                                        canvas2image: w,
                                        draw: I
                                    });

                                  case 103:
                                    K = e.sent, i.default.hideLoading(), v({
                                        bgObj: L,
                                        poster: K,
                                        type: t
                                    }), e.next = 111;
                                    break;

                                  case 108:
                                    e.prev = 108, e.t3 = e.catch(0), D(e.t3);

                                  case 111:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 0, 108 ] ]);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }());
                },
                setText: x,
                setImage: P,
                drawText: j,
                drawImage: I,
                drawQrCode: R,
                drawFillRect: m,
                drawStrokeRect: b,
                drawRoundStrokeRect: _,
                drawRoundFillRect: w
            };
        }).call(this, r("543d").default);
    },
    "51fd": function(e, t, n) {
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            n ? r || (r = !0, "function" == typeof e && e(), setTimeout(function() {
                r = !1;
            }, t)) : r || (r = !0, setTimeout(function() {
                r = !1, "function" == typeof e && e();
            }, t));
        };
        t.default = o;
    },
    "543d": function(e, n, r) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createApp = wt, n.createComponent = Ct, n.createPage = jt, n.createPlugin = Dt, 
            n.createSubpackageApp = It, n.default = void 0;
            var o, i = r("37dc"), a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(r("66fd"));
            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        f(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], r = !0, o = !1, i = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                            !t || n.length !== t); r = !0) ;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            o = !0, i = e;
                        } finally {
                            try {
                                r || null == s.return || s.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return n;
                    }
                }(e, t) || d(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || d(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function d(e, t) {
                if (e) {
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0;
                }
            }
            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", v = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
            function g() {
                var e, t = wx.getStorageSync("uni_id_token") || "", n = t.split(".");
                if (!t || 3 !== n.length) return {
                    uid: null,
                    role: [],
                    permission: [],
                    tokenExpired: 0
                };
                try {
                    e = JSON.parse(function(e) {
                        return decodeURIComponent(o(e).split("").map(function(e) {
                            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                        }).join(""));
                    }(n[1]));
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
                }
                return e.tokenExpired = 1e3 * e.exp, delete e.exp, delete e.iat, e;
            }
            o = "function" != typeof atob ? function(e) {
                if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !v.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
                var t;
                e += "==".slice(2 - (3 & e.length));
                for (var n, r, o = "", i = 0; i < e.length; ) t = p.indexOf(e.charAt(i++)) << 18 | p.indexOf(e.charAt(i++)) << 12 | (n = p.indexOf(e.charAt(i++))) << 6 | (r = p.indexOf(e.charAt(i++))), 
                o += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
                return o;
            } : atob;
            var y = Object.prototype.toString, m = Object.prototype.hasOwnProperty;
            function b(e) {
                return "function" == typeof e;
            }
            function _(e) {
                return "string" == typeof e;
            }
            function w(e) {
                return "[object Object]" === y.call(e);
            }
            function x(e, t) {
                return m.call(e, t);
            }
            function k() {}
            function S(e) {
                var t = Object.create(null);
                return function(n) {
                    return t[n] || (t[n] = e(n));
                };
            }
            var O = /-(\w)/g, A = S(function(e) {
                return e.replace(O, function(e, t) {
                    return t ? t.toUpperCase() : "";
                });
            });
            function P(e) {
                var t = {};
                return w(e) && Object.keys(e).sort().forEach(function(n) {
                    t[n] = e[n];
                }), Object.keys(t) ? t : e;
            }
            var T = [ "invoke", "success", "fail", "complete", "returnValue" ], E = {}, j = {};
            function C(e, t) {
                Object.keys(t).forEach(function(n) {
                    -1 !== T.indexOf(n) && b(t[n]) && (e[n] = function(e, t) {
                        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
                        return n ? function(e) {
                            for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                            return t;
                        }(n) : n;
                    }(e[n], t[n]));
                });
            }
            function I(e, t) {
                e && t && Object.keys(t).forEach(function(n) {
                    -1 !== T.indexOf(n) && b(t[n]) && function(e, t) {
                        var n = e.indexOf(t);
                        -1 !== n && e.splice(n, 1);
                    }(e[n], t[n]);
                });
            }
            function D(e) {
                return function(t) {
                    return e(t) || t;
                };
            }
            function L(e) {
                return !!e && ("object" === t(e) || "function" == typeof e) && "function" == typeof e.then;
            }
            function N(e, t) {
                for (var n = !1, r = 0; r < e.length; r++) {
                    var o = e[r];
                    if (n) n = Promise.resolve(D(o)); else {
                        var i = o(t);
                        if (L(i) && (n = Promise.resolve(i)), !1 === i) return {
                            then: function() {}
                        };
                    }
                }
                return n || {
                    then: function(e) {
                        return e(t);
                    }
                };
            }
            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return [ "success", "fail", "complete" ].forEach(function(n) {
                    if (Array.isArray(e[n])) {
                        var r = t[n];
                        t[n] = function(t) {
                            N(e[n], t).then(function(e) {
                                return b(r) && r(e) || e;
                            });
                        };
                    }
                }), t;
            }
            function $(e, t) {
                var n = [];
                Array.isArray(E.returnValue) && n.push.apply(n, l(E.returnValue));
                var r = j[e];
                return r && Array.isArray(r.returnValue) && n.push.apply(n, l(r.returnValue)), n.forEach(function(e) {
                    t = e(t) || t;
                }), t;
            }
            function M(e) {
                var t = Object.create(null);
                Object.keys(E).forEach(function(e) {
                    "returnValue" !== e && (t[e] = E[e].slice());
                });
                var n = j[e];
                return n && Object.keys(n).forEach(function(e) {
                    "returnValue" !== e && (t[e] = (t[e] || []).concat(n[e]));
                }), t;
            }
            function F(e, t, n) {
                for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
                var a = M(e);
                if (a && Object.keys(a).length) {
                    if (Array.isArray(a.invoke)) {
                        var s = N(a.invoke, n);
                        return s.then(function(e) {
                            return t.apply(void 0, [ R(a, e) ].concat(o));
                        });
                    }
                    return t.apply(void 0, [ R(a, n) ].concat(o));
                }
                return t.apply(void 0, [ n ].concat(o));
            }
            var B = {
                returnValue: function(e) {
                    return L(e) ? new Promise(function(t, n) {
                        e.then(function(e) {
                            e[0] ? n(e[0]) : t(e[1]);
                        });
                    }) : e;
                }
            }, U = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting/, q = /^create|Manager$/, H = [ "createBLEConnection" ], V = [ "createBLEConnection", "createPushMessage" ], K = /^on|^off/;
            function z(e) {
                return q.test(e) && -1 === H.indexOf(e);
            }
            function W(e) {
                return U.test(e) && -1 === V.indexOf(e);
            }
            function G(e) {
                return e.then(function(e) {
                    return [ null, e ];
                }).catch(function(e) {
                    return [ e ];
                });
            }
            function J(e) {
                return !(z(e) || W(e) || function(e) {
                    return K.test(e) && "onPush" !== e;
                }(e));
            }
            function X(e, t) {
                return J(e) ? function() {
                    for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                    return b(n.success) || b(n.fail) || b(n.complete) ? $(e, F.apply(void 0, [ e, t, n ].concat(o))) : $(e, G(new Promise(function(r, i) {
                        F.apply(void 0, [ e, t, Object.assign({}, n, {
                            success: r,
                            fail: i
                        }) ].concat(o));
                    })));
                } : t;
            }
            Promise.prototype.finally || (Promise.prototype.finally = function(e) {
                var t = this.constructor;
                return this.then(function(n) {
                    return t.resolve(e()).then(function() {
                        return n;
                    });
                }, function(n) {
                    return t.resolve(e()).then(function() {
                        throw n;
                    });
                });
            });
            var Y = !1, Q = 0, Z = 0;
            var ee, te = "zh-Hans", ne = {};
            ee = ie(wx.getSystemInfoSync().language) || "en", function() {
                if ("undefined" != typeof __uniConfig && __uniConfig.locales && Object.keys(__uniConfig.locales).length) {
                    var e = Object.keys(__uniConfig.locales);
                    e.length && e.forEach(function(e) {
                        var t = ne[e], n = __uniConfig.locales[e];
                        t ? Object.assign(t, n) : ne[e] = n;
                    });
                }
            }();
            var re = (0, i.initVueI18n)(ee, {}), oe = re.t;
            function ie(e, t) {
                if (e) return e = e.trim().replace(/_/g, "-"), t && t[e] ? e : "chinese" === (e = e.toLowerCase()) ? te : 0 === e.indexOf("zh") ? e.indexOf("-hans") > -1 ? te : e.indexOf("-hant") > -1 || function(e, t) {
                    return !!t.find(function(t) {
                        return -1 !== e.indexOf(t);
                    });
                }(e, [ "-tw", "-hk", "-mo", "-cht" ]) ? "zh-Hant" : te : function(e, t) {
                    return t.find(function(t) {
                        return 0 === e.indexOf(t);
                    });
                }(e, [ "en", "fr", "es" ]) || void 0;
            }
            function ae() {
                var e = getApp({
                    allowDefault: !0
                });
                return e && e.$vm ? e.$vm.$locale : ie(wx.getSystemInfoSync().language) || "en";
            }
            re.mixin = {
                beforeCreate: function() {
                    var e = this, t = re.i18n.watchLocale(function() {
                        e.$forceUpdate();
                    });
                    this.$once("hook:beforeDestroy", function() {
                        t();
                    });
                },
                methods: {
                    $$t: function(e, t) {
                        return oe(e, t);
                    }
                }
            }, re.setLocale, re.getLocale;
            var se = [];
            void 0 !== e && (e.getLocale = ae);
            var ue = {
                promiseInterceptor: B
            }, ce = Object.freeze({
                __proto__: null,
                upx2px: function(e, t) {
                    if (0 === Q && function() {
                        var e = wx.getSystemInfoSync(), t = e.platform, n = e.pixelRatio, r = e.windowWidth;
                        Q = r, Z = n, Y = "ios" === t;
                    }(), 0 === (e = Number(e))) return 0;
                    var n = e / 750 * (t || Q);
                    return n < 0 && (n = -n), 0 === (n = Math.floor(n + 1e-4)) && (n = 1 !== Z && Y ? .5 : 1), 
                    e < 0 ? -n : n;
                },
                getLocale: ae,
                setLocale: function(e) {
                    var t = getApp();
                    return !!t && (t.$vm.$locale !== e && (t.$vm.$locale = e, se.forEach(function(t) {
                        return t({
                            locale: e
                        });
                    }), !0));
                },
                onLocaleChange: function(e) {
                    -1 === se.indexOf(e) && se.push(e);
                },
                addInterceptor: function(e, t) {
                    "string" == typeof e && w(t) ? C(j[e] || (j[e] = {}), t) : w(e) && C(E, e);
                },
                removeInterceptor: function(e, t) {
                    "string" == typeof e ? w(t) ? I(j[e], t) : delete j[e] : w(e) && I(E, e);
                },
                interceptors: ue
            });
            var fe, le = "__DC_STAT_UUID";
            function de(e) {
                (fe = fe || wx.getStorageSync(le)) || (fe = Date.now() + "" + Math.floor(1e7 * Math.random()), 
                wx.setStorage({
                    key: le,
                    data: fe
                })), e.deviceId = fe;
            }
            function he(e) {
                if (e.safeArea) {
                    var t = e.safeArea;
                    e.safeAreaInsets = {
                        top: t.top,
                        left: t.left,
                        right: e.windowWidth - t.right,
                        bottom: e.screenHeight - t.bottom
                    };
                }
            }
            function pe(e, t) {
                for (var n = e.deviceType || "phone", r = {
                    ipad: "pad",
                    windows: "pc",
                    mac: "pc"
                }, o = Object.keys(r), i = t.toLocaleLowerCase(), a = 0; a < o.length; a++) {
                    var s = o[a];
                    if (-1 !== i.indexOf(s)) {
                        n = r[s];
                        break;
                    }
                }
                return n;
            }
            function ve(e) {
                var t = e;
                return t && (t = e.toLocaleLowerCase()), t;
            }
            function ge(e) {
                return ae ? ae() : e;
            }
            function ye(e) {
                var t = e.hostName || "WeChat";
                return e.environment ? t = e.environment : e.host && e.host.env && (t = e.host.env), 
                t;
            }
            var me = {
                returnValue: function(e) {
                    de(e), he(e), function(e) {
                        var t, n = e.brand, r = void 0 === n ? "" : n, o = e.model, i = void 0 === o ? "" : o, a = e.system, s = void 0 === a ? "" : a, u = e.language, c = void 0 === u ? "" : u, f = e.theme, l = e.version, d = (e.platform, 
                        e.fontSizeSetting), h = e.SDKVersion, p = e.pixelRatio, v = e.deviceOrientation, g = "";
                        g = s.split(" ")[0] || "", t = s.split(" ")[1] || "";
                        var y = l, m = pe(e, i), b = ve(r), _ = ye(e), w = v, x = p, k = h, S = c.replace(/_/g, "-"), O = {
                            appId: "__UNI__CB0ABD3",
                            appName: "图纸投稿1",
                            appVersion: "2.4.0",
                            appVersionCode: "100",
                            appLanguage: ge(S),
                            uniCompileVersion: "3.6.5",
                            uniRuntimeVersion: "3.6.5",
                            uniPlatform: "mp-weixin",
                            deviceBrand: b,
                            deviceModel: i,
                            deviceType: m,
                            devicePixelRatio: x,
                            deviceOrientation: w,
                            osName: g.toLocaleLowerCase(),
                            osVersion: t,
                            hostTheme: f,
                            hostVersion: y,
                            hostLanguage: S,
                            hostName: _,
                            hostSDKVersion: k,
                            hostFontSizeSetting: d,
                            windowTop: 0,
                            windowBottom: 0,
                            osLanguage: void 0,
                            osTheme: void 0,
                            ua: void 0,
                            hostPackageName: void 0,
                            browserName: void 0,
                            browserVersion: void 0
                        };
                        Object.assign(e, O);
                    }(e);
                }
            }, be = {
                redirectTo: {
                    name: function(e) {
                        return "back" === e.exists && e.delta ? "navigateBack" : "redirectTo";
                    },
                    args: function(e) {
                        if ("back" === e.exists && e.url) {
                            var t = function(e) {
                                for (var t = getCurrentPages(), n = t.length; n--; ) {
                                    var r = t[n];
                                    if (r.$page && r.$page.fullPath === e) return n;
                                }
                                return -1;
                            }(e.url);
                            if (-1 !== t) {
                                var n = getCurrentPages().length - 1 - t;
                                n > 0 && (e.delta = n);
                            }
                        }
                    }
                },
                previewImage: {
                    args: function(e) {
                        var t = parseInt(e.current);
                        if (!isNaN(t)) {
                            var n = e.urls;
                            if (Array.isArray(n)) {
                                var r = n.length;
                                if (r) return t < 0 ? t = 0 : t >= r && (t = r - 1), t > 0 ? (e.current = n[t], 
                                e.urls = n.filter(function(e, r) {
                                    return !(r < t) || e !== n[t];
                                })) : e.current = n[0], {
                                    indicator: !1,
                                    loop: !1
                                };
                            }
                        }
                    }
                },
                getSystemInfo: me,
                getSystemInfoSync: me,
                showActionSheet: {
                    args: function(e) {
                        "object" === t(e) && (e.alertText = e.title);
                    }
                },
                getAppBaseInfo: {
                    returnValue: function(e) {
                        var t = e, n = t.version, r = t.language, o = t.SDKVersion, i = t.theme, a = ye(e), s = r.replace("_", "-");
                        e = P(Object.assign(e, {
                            appId: "__UNI__CB0ABD3",
                            appName: "图纸投稿1",
                            appVersion: "2.4.0",
                            appVersionCode: "100",
                            appLanguage: ge(s),
                            hostVersion: n,
                            hostLanguage: s,
                            hostName: a,
                            hostSDKVersion: o,
                            hostTheme: i
                        }));
                    }
                },
                getDeviceInfo: {
                    returnValue: function(e) {
                        var t = e, n = t.brand, r = t.model, o = pe(e, r), i = ve(n);
                        de(e), e = P(Object.assign(e, {
                            deviceType: o,
                            deviceBrand: i,
                            deviceModel: r
                        }));
                    }
                },
                getWindowInfo: {
                    returnValue: function(e) {
                        he(e), e = P(Object.assign(e, {
                            windowTop: 0,
                            windowBottom: 0
                        }));
                    }
                },
                getAppAuthorizeSetting: {
                    returnValue: function(e) {
                        var t = e.locationReducedAccuracy;
                        e.locationAccuracy = "unsupported", !0 === t ? e.locationAccuracy = "reduced" : !1 === t && (e.locationAccuracy = "full");
                    }
                }
            }, _e = [ "success", "fail", "cancel", "complete" ];
            function we(e, t, n) {
                return function(r) {
                    return t(ke(e, r, n));
                };
            }
            function xe(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (w(t)) {
                    var i = !0 === o ? t : {};
                    for (var a in b(n) && (n = n(t, i) || {}), t) if (x(n, a)) {
                        var s = n[a];
                        b(s) && (s = s(t[a], t, i)), s ? _(s) ? i[s] = t[a] : w(s) && (i[s.name ? s.name : a] = s.value) : console.warn("The '".concat(e, "' method of platform '微信小程序' does not support option '").concat(a, "'"));
                    } else -1 !== _e.indexOf(a) ? b(t[a]) && (i[a] = we(e, t[a], r)) : o || (i[a] = t[a]);
                    return i;
                }
                return b(t) && (t = we(e, t, r)), t;
            }
            function ke(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return b(be.returnValue) && (t = be.returnValue(e, t)), xe(e, t, n, {}, r);
            }
            function Se(e, t) {
                if (x(be, e)) {
                    var n = be[e];
                    return n ? function(t, r) {
                        var o = n;
                        b(n) && (o = n(t));
                        var i = [ t = xe(e, t, o.args, o.returnValue) ];
                        void 0 !== r && i.push(r), b(o.name) ? e = o.name(t) : _(o.name) && (e = o.name);
                        var a = wx[e].apply(wx, i);
                        return W(e) ? ke(e, a, o.returnValue, z(e)) : a;
                    } : function() {
                        console.error("Platform '微信小程序' does not support '".concat(e, "'."));
                    };
                }
                return t;
            }
            var Oe = Object.create(null);
            [ "onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share" ].forEach(function(e) {
                Oe[e] = function(e) {
                    return function(t) {
                        var n = t.fail, r = t.complete, o = {
                            errMsg: "".concat(e, ":fail method '").concat(e, "' not supported")
                        };
                        b(n) && n(o), b(r) && r(o);
                    };
                }(e);
            });
            var Ae = {
                oauth: [ "weixin" ],
                share: [ "weixin" ],
                payment: [ "wxpay" ],
                push: [ "weixin" ]
            };
            var Pe = Object.freeze({
                __proto__: null,
                getProvider: function(e) {
                    var t = e.service, n = e.success, r = e.fail, o = e.complete, i = !1;
                    Ae[t] ? (i = {
                        errMsg: "getProvider:ok",
                        service: t,
                        provider: Ae[t]
                    }, b(n) && n(i)) : (i = {
                        errMsg: "getProvider:fail service not found"
                    }, b(r) && r(i)), b(o) && o(i);
                }
            }), Te = function() {
                var e;
                return function() {
                    return e || (e = new a.default()), e;
                };
            }();
            function Ee(e, t, n) {
                return e[t].apply(e, n);
            }
            var je, Ce, Ie, De = Object.freeze({
                __proto__: null,
                $on: function() {
                    return Ee(Te(), "$on", Array.prototype.slice.call(arguments));
                },
                $off: function() {
                    return Ee(Te(), "$off", Array.prototype.slice.call(arguments));
                },
                $once: function() {
                    return Ee(Te(), "$once", Array.prototype.slice.call(arguments));
                },
                $emit: function() {
                    return Ee(Te(), "$emit", Array.prototype.slice.call(arguments));
                }
            });
            function Le(e) {
                return function() {
                    try {
                        return e.apply(e, arguments);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error(e);
                    }
                };
            }
            function Ne(e) {
                try {
                    return JSON.parse(e);
                } catch (e) {}
                return e;
            }
            var Re = [];
            function $e(e, t) {
                Re.forEach(function(n) {
                    n(e, t);
                }), Re.length = 0;
            }
            var Me = [], Fe = Object.freeze({
                __proto__: null,
                getPushClientId: function(e) {
                    w(e) || (e = {});
                    var t = function(e) {
                        var t = {};
                        for (var n in e) {
                            var r = e[n];
                            b(r) && (t[n] = Le(r), delete e[n]);
                        }
                        return t;
                    }(e), n = t.success, r = t.fail, o = t.complete, i = b(n), a = b(r), s = b(o);
                    Promise.resolve().then(function() {
                        void 0 === Ie && (Ie = !1, je = "", Ce = "uniPush is not enabled"), Re.push(function(e, t) {
                            var u;
                            e ? (u = {
                                errMsg: "getPushClientId:ok",
                                cid: e
                            }, i && n(u)) : (u = {
                                errMsg: "getPushClientId:fail" + (t ? " " + t : "")
                            }, a && r(u)), s && o(u);
                        }), void 0 !== je && $e(je, Ce);
                    });
                },
                onPushMessage: function(e) {
                    -1 === Me.indexOf(e) && Me.push(e);
                },
                offPushMessage: function(e) {
                    if (e) {
                        var t = Me.indexOf(e);
                        t > -1 && Me.splice(t, 1);
                    } else Me.length = 0;
                },
                invokePushCallback: function(e) {
                    if ("enabled" === e.type) Ie = !0; else if ("clientId" === e.type) je = e.cid, Ce = e.errMsg, 
                    $e(je, e.errMsg); else if ("pushMsg" === e.type) for (var t = {
                        type: "receive",
                        data: Ne(e.message)
                    }, n = 0; n < Me.length; n++) {
                        if ((0, Me[n])(t), t.stopped) break;
                    } else "click" === e.type && Me.forEach(function(t) {
                        t({
                            type: "click",
                            data: Ne(e.message)
                        });
                    });
                }
            }), Be = Page, Ue = Component, qe = /:/g, He = S(function(e) {
                return A(e.replace(qe, "-"));
            });
            function Ve(e) {
                var t = e.triggerEvent, n = function(e) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    if (this.$vm || this.dataset && this.dataset.comType) e = He(e); else {
                        var i = He(e);
                        i !== e && t.apply(this, [ i ].concat(r));
                    }
                    return t.apply(this, [ e ].concat(r));
                };
                try {
                    e.triggerEvent = n;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    e._triggerEvent = n;
                }
            }
            function Ke(e, t, n) {
                var r = t[e];
                t[e] = r ? function() {
                    Ve(this);
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return r.apply(this, t);
                } : function() {
                    Ve(this);
                };
            }
            Be.__$wrappered || (Be.__$wrappered = !0, Page = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Ke("onLoad", e), Be(e);
            }, Page.after = Be.after, Component = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Ke("created", e), Ue(e);
            });
            function ze(e, t, n) {
                t.forEach(function(t) {
                    (function e(t, n) {
                        if (!n) return !0;
                        if (a.default.options && Array.isArray(a.default.options[t])) return !0;
                        if (b(n = n.default || n)) return !!b(n.extendOptions[t]) || !!(n.super && n.super.options && Array.isArray(n.super.options[t]));
                        if (b(n[t])) return !0;
                        var r = n.mixins;
                        return Array.isArray(r) ? !!r.find(function(n) {
                            return e(t, n);
                        }) : void 0;
                    })(t, n) && (e[t] = function(e) {
                        return this.$vm && this.$vm.__call_hook(t, e);
                    });
                });
            }
            function We(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                Ge(t).forEach(function(t) {
                    return Je(e, t, n);
                });
            }
            function Ge(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e && Object.keys(e).forEach(function(n) {
                    0 === n.indexOf("on") && b(e[n]) && t.push(n);
                }), t;
            }
            function Je(e, t, n) {
                -1 !== n.indexOf(t) || x(e, t) || (e[t] = function(e) {
                    return this.$vm && this.$vm.__call_hook(t, e);
                });
            }
            function Xe(e, t) {
                var n;
                return [ n = b(t = t.default || t) ? t : e.extend(t), t = n.options ];
            }
            function Ye(e, t) {
                if (Array.isArray(t) && t.length) {
                    var n = Object.create(null);
                    t.forEach(function(e) {
                        n[e] = !0;
                    }), e.$scopedSlots = e.$slots = n;
                }
            }
            function Qe(e, t) {
                var n = (e = (e || "").split(",")).length;
                1 === n ? t._$vueId = e[0] : 2 === n && (t._$vueId = e[0], t._$vuePid = e[1]);
            }
            function Ze(e, t) {
                var n = e.data || {}, r = e.methods || {};
                if ("function" == typeof n) try {
                    n = n.call(t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    Object({
                        VUE_APP_NAME: "图纸投稿1",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", n);
                } else try {
                    n = JSON.parse(JSON.stringify(n));
                } catch (e) {}
                return w(n) || (n = {}), Object.keys(r).forEach(function(e) {
                    -1 !== t.__lifecycle_hooks__.indexOf(e) || x(n, e) || (n[e] = r[e]);
                }), n;
            }
            var et = [ String, Number, Boolean, Object, Array, null ];
            function tt(e) {
                return function(t, n) {
                    this.$vm && (this.$vm[e] = t);
                };
            }
            function nt(e, t) {
                var n = e.behaviors, r = e.extends, o = e.mixins, i = e.props;
                i || (e.props = i = []);
                var a = [];
                return Array.isArray(n) && n.forEach(function(e) {
                    a.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(i) ? (i.push("name"), 
                    i.push("value")) : (i.name = {
                        type: String,
                        default: ""
                    }, i.value = {
                        type: [ String, Number, Boolean, Array, Object, Date ],
                        default: ""
                    }));
                }), w(r) && r.props && a.push(t({
                    properties: ot(r.props, !0)
                })), Array.isArray(o) && o.forEach(function(e) {
                    w(e) && e.props && a.push(t({
                        properties: ot(e.props, !0)
                    }));
                }), a;
            }
            function rt(e, t, n, r) {
                return Array.isArray(t) && 1 === t.length ? t[0] : t;
            }
            function ot(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 3 ? arguments[3] : void 0, r = {};
                return t || (r.vueId = {
                    type: String,
                    value: ""
                }, n.virtualHost && (r.virtualHostStyle = {
                    type: null,
                    value: ""
                }, r.virtualHostClass = {
                    type: null,
                    value: ""
                }), r.scopedSlotsCompiler = {
                    type: String,
                    value: ""
                }, r.vueSlots = {
                    type: null,
                    value: [],
                    observer: function(e, t) {
                        var n = Object.create(null);
                        e.forEach(function(e) {
                            n[e] = !0;
                        }), this.setData({
                            $slots: n
                        });
                    }
                }), Array.isArray(e) ? e.forEach(function(e) {
                    r[e] = {
                        type: null,
                        observer: tt(e)
                    };
                }) : w(e) && Object.keys(e).forEach(function(t) {
                    var n = e[t];
                    if (w(n)) {
                        var o = n.default;
                        b(o) && (o = o()), n.type = rt(0, n.type), r[t] = {
                            type: -1 !== et.indexOf(n.type) ? n.type : null,
                            value: o,
                            observer: tt(t)
                        };
                    } else {
                        var i = rt(0, n);
                        r[t] = {
                            type: -1 !== et.indexOf(i) ? i : null,
                            observer: tt(t)
                        };
                    }
                }), r;
            }
            function it(e, t, n, r) {
                var o = {};
                return Array.isArray(t) && t.length && t.forEach(function(t, i) {
                    "string" == typeof t ? t ? "$event" === t ? o["$" + i] = n : "arguments" === t ? o["$" + i] = n.detail && n.detail.__args__ || r : 0 === t.indexOf("$event.") ? o["$" + i] = e.__get_value(t.replace("$event.", ""), n) : o["$" + i] = e.__get_value(t) : o["$" + i] = e : o["$" + i] = function(e, t) {
                        var n = e;
                        return t.forEach(function(t) {
                            var r = t[0], o = t[2];
                            if (r || void 0 !== o) {
                                var i, a = t[1], s = t[3];
                                Number.isInteger(r) ? i = r : r ? "string" == typeof r && r && (i = 0 === r.indexOf("#s#") ? r.substr(3) : e.__get_value(r, n)) : i = n, 
                                Number.isInteger(i) ? n = o : a ? Array.isArray(i) ? n = i.find(function(t) {
                                    return e.__get_value(a, t) === o;
                                }) : w(i) ? n = Object.keys(i).find(function(t) {
                                    return e.__get_value(a, i[t]) === o;
                                }) : console.error("v-for 暂不支持循环数据：", i) : n = i[o], s && (n = e.__get_value(s, n));
                            }
                        }), n;
                    }(e, t);
                }), o;
            }
            function at(e) {
                for (var t = {}, n = 1; n < e.length; n++) {
                    var r = e[n];
                    t[r[0]] = r[1];
                }
                return t;
            }
            function st(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], o = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, a = !1, s = w(t.detail) && t.detail.__args__ || [ t.detail ];
                if (o && (a = t.currentTarget && t.currentTarget.dataset && "wx" === t.currentTarget.dataset.comType, 
                !n.length)) return a ? [ t ] : s;
                var u = it(e, r, t, s), c = [];
                return n.forEach(function(e) {
                    "$event" === e ? "__set_model" !== i || o ? o && !a ? c.push(s[0]) : c.push(t) : c.push(t.target.value) : Array.isArray(e) && "o" === e[0] ? c.push(at(e)) : "string" == typeof e && x(u, e) ? c.push(u[e]) : c.push(e);
                }), c;
            }
            function ut(e) {
                var n = this, r = ((e = function(e) {
                    try {
                        e.mp = JSON.parse(JSON.stringify(e));
                    } catch (e) {}
                    return e.stopPropagation = k, e.preventDefault = k, e.target = e.target || {}, x(e, "detail") || (e.detail = {}), 
                    x(e, "markerId") && (e.detail = "object" === t(e.detail) ? e.detail : {}, e.detail.markerId = e.markerId), 
                    w(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e;
                }(e)).currentTarget || e.target).dataset;
                if (!r) return console.warn("事件信息不存在");
                var o = r.eventOpts || r["event-opts"];
                if (!o) return console.warn("事件信息不存在");
                var i = e.type, a = [];
                return o.forEach(function(t) {
                    var r = t[0], o = t[1], s = "^" === r.charAt(0), u = "~" === (r = s ? r.slice(1) : r).charAt(0);
                    r = u ? r.slice(1) : r, o && function(e, t) {
                        return e === t || "regionchange" === t && ("begin" === e || "end" === e);
                    }(i, r) && o.forEach(function(t) {
                        var r = t[0];
                        if (r) {
                            var o = n.$vm;
                            if (o.$options.generic && (o = function(e) {
                                for (var t = e.$parent; t && t.$parent && (t.$options.generic || t.$parent.$options.generic || t.$scope._$vuePid); ) t = t.$parent;
                                return t && t.$parent;
                            }(o) || o), "$emit" === r) return void o.$emit.apply(o, st(n.$vm, e, t[1], t[2], s, r));
                            var i = o[r];
                            if (!b(i)) {
                                var c = "page" === n.$vm.mpType ? "Page" : "Component", f = n.route || n.is;
                                throw new Error("".concat(c, ' "').concat(f, '" does not have a method "').concat(r, '"'));
                            }
                            if (u) {
                                if (i.once) return;
                                i.once = !0;
                            }
                            var l = st(n.$vm, e, t[1], t[2], s, r);
                            l = Array.isArray(l) ? l : [], /=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(i.toString()) && (l = l.concat([ , , , , , , , , , , e ])), 
                            a.push(i.apply(o, l));
                        }
                    });
                }), "input" === i && 1 === a.length && void 0 !== a[0] ? a[0] : void 0;
            }
            var ct = {}, ft = [];
            var lt = [ "onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection" ];
            function dt() {
                a.default.prototype.getOpenerEventChannel = function() {
                    return this.$scope.getOpenerEventChannel();
                };
                var e = a.default.prototype.__call_hook;
                a.default.prototype.__call_hook = function(t, n) {
                    return "onLoad" === t && n && n.__id__ && (this.__eventChannel__ = function(e) {
                        if (e) {
                            var t = ct[e];
                            return delete ct[e], t;
                        }
                        return ft.shift();
                    }(n.__id__), delete n.__id__), e.call(this, t, n);
                };
            }
            function ht(e, t) {
                var n = t.mocks, r = t.initRefs;
                dt(), function() {
                    var e = {}, t = {};
                    a.default.prototype.$hasScopedSlotsParams = function(n) {
                        var r = e[n];
                        return r || (t[n] = this, this.$on("hook:destroyed", function() {
                            delete t[n];
                        })), r;
                    }, a.default.prototype.$getScopedSlotsParams = function(n, r, o) {
                        var i = e[n];
                        if (i) {
                            var a = i[r] || {};
                            return o ? a[o] : a;
                        }
                        t[n] = this, this.$on("hook:destroyed", function() {
                            delete t[n];
                        });
                    }, a.default.prototype.$setScopedSlotsParams = function(n, r) {
                        var o = this.$options.propsData.vueId;
                        if (o) {
                            var i = o.split(",")[0];
                            (e[i] = e[i] || {})[n] = r, t[i] && t[i].$forceUpdate();
                        }
                    }, a.default.mixin({
                        destroyed: function() {
                            var n = this.$options.propsData, r = n && n.vueId;
                            r && (delete e[r], delete t[r]);
                        }
                    });
                }(), e.$options.store && (a.default.prototype.$store = e.$options.store), function(e) {
                    e.prototype.uniIDHasRole = function(e) {
                        return g().role.indexOf(e) > -1;
                    }, e.prototype.uniIDHasPermission = function(e) {
                        var t = g().permission;
                        return this.uniIDHasRole("admin") || t.indexOf(e) > -1;
                    }, e.prototype.uniIDTokenValid = function() {
                        return g().tokenExpired > Date.now();
                    };
                }(a.default), a.default.prototype.mpHost = "mp-weixin", a.default.mixin({
                    beforeCreate: function() {
                        if (this.$options.mpType) {
                            if (this.mpType = this.$options.mpType, this.$mp = f({
                                data: {}
                            }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, 
                            delete this.$options.mpType, delete this.$options.mpInstance, "page" === this.mpType && "function" == typeof getApp) {
                                var e = getApp();
                                e.$vm && e.$vm.$i18n && (this._i18n = e.$vm.$i18n);
                            }
                            "app" !== this.mpType && (r(this), function(e, t) {
                                var n = e.$mp[e.mpType];
                                t.forEach(function(t) {
                                    x(n, t) && (e[t] = n[t]);
                                });
                            }(this, n));
                        }
                    }
                });
                var o = {
                    onLaunch: function(t) {
                        this.$vm || (wx.canIUse && !wx.canIUse("nextTick") && console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), 
                        this.$vm = e, this.$vm.$mp = {
                            app: this
                        }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, 
                        this.$vm.__call_hook("mounted", t), this.$vm.__call_hook("onLaunch", t));
                    }
                };
                o.globalData = e.$options.globalData || {};
                var i = e.$options.methods;
                return i && Object.keys(i).forEach(function(e) {
                    o[e] = i[e];
                }), function(e, t, n) {
                    var r = e.observable({
                        locale: n || re.getLocale()
                    }), o = [];
                    t.$watchLocale = function(e) {
                        o.push(e);
                    }, Object.defineProperty(t, "$locale", {
                        get: function() {
                            return r.locale;
                        },
                        set: function(e) {
                            r.locale = e, o.forEach(function(t) {
                                return t(e);
                            });
                        }
                    });
                }(a.default, e, ie(wx.getSystemInfoSync().language) || "en"), ze(o, lt), We(o, e.$options), 
                o;
            }
            var pt = [ "__route__", "__wxExparserNodeId__", "__wxWebviewId__" ];
            function vt(e) {
                return Behavior(e);
            }
            function gt() {
                return !!this.route;
            }
            function yt(e) {
                this.triggerEvent("__l", e);
            }
            function mt(e) {
                var t = e.$scope;
                Object.defineProperty(e, "$refs", {
                    get: function() {
                        var e = {};
                        return function e(t, n, r) {
                            t.selectAllComponents(n).forEach(function(t) {
                                var o = t.dataset.ref;
                                r[o] = t.$vm || t, "scoped" === t.dataset.vueGeneric && t.selectAllComponents(".scoped-ref").forEach(function(t) {
                                    e(t, n, r);
                                });
                            });
                        }(t, ".vue-ref", e), t.selectAllComponents(".vue-ref-in-for").forEach(function(t) {
                            var n = t.dataset.ref;
                            e[n] || (e[n] = []), e[n].push(t.$vm || t);
                        }), e;
                    }
                });
            }
            function bt(e) {
                var t, n = e.detail || e.value, r = n.vuePid, o = n.vueOptions;
                r && (t = function e(t, n) {
                    for (var r, o = t.$children, i = o.length - 1; i >= 0; i--) {
                        var a = o[i];
                        if (a.$scope._$vueId === n) return a;
                    }
                    for (var s = o.length - 1; s >= 0; s--) if (r = e(o[s], n)) return r;
                }(this.$vm, r)), t || (t = this.$vm), o.parent = t;
            }
            function _t(e) {
                return ht(e, {
                    mocks: pt,
                    initRefs: mt
                });
            }
            function wt(e) {
                return App(_t(e)), e;
            }
            var xt = /[!'()*]/g, kt = function(e) {
                return "%" + e.charCodeAt(0).toString(16);
            }, St = /%2C/g, Ot = function(e) {
                return encodeURIComponent(e).replace(xt, kt).replace(St, ",");
            };
            function At(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ot, n = e ? Object.keys(e).map(function(n) {
                    var r = e[n];
                    if (void 0 === r) return "";
                    if (null === r) return t(n);
                    if (Array.isArray(r)) {
                        var o = [];
                        return r.forEach(function(e) {
                            void 0 !== e && (null === e ? o.push(t(n)) : o.push(t(n) + "=" + t(e)));
                        }), o.join("&");
                    }
                    return t(n) + "=" + t(r);
                }).filter(function(e) {
                    return e.length > 0;
                }).join("&") : null;
                return n ? "?".concat(n) : "";
            }
            function Pt(e) {
                return function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.isPage, r = t.initRelation, o = Xe(a.default, e), i = c(o, 2), s = i[0], f = i[1], l = u({
                        multipleSlots: !0,
                        addGlobalClass: !0
                    }, f.options || {});
                    f["mp-weixin"] && f["mp-weixin"].options && Object.assign(l, f["mp-weixin"].options);
                    var d = {
                        options: l,
                        data: Ze(f, a.default.prototype),
                        behaviors: nt(f, vt),
                        properties: ot(f.props, !1, f.__file, l),
                        lifetimes: {
                            attached: function() {
                                var e = this.properties, t = {
                                    mpType: n.call(this) ? "page" : "component",
                                    mpInstance: this,
                                    propsData: e
                                };
                                Qe(e.vueId, this), r.call(this, {
                                    vuePid: this._$vuePid,
                                    vueOptions: t
                                }), this.$vm = new s(t), Ye(this.$vm, e.vueSlots), this.$vm.$mount();
                            },
                            ready: function() {
                                this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"));
                            },
                            detached: function() {
                                this.$vm && this.$vm.$destroy();
                            }
                        },
                        pageLifetimes: {
                            show: function(e) {
                                this.$vm && this.$vm.__call_hook("onPageShow", e);
                            },
                            hide: function() {
                                this.$vm && this.$vm.__call_hook("onPageHide");
                            },
                            resize: function(e) {
                                this.$vm && this.$vm.__call_hook("onPageResize", e);
                            }
                        },
                        methods: {
                            __l: bt,
                            __e: ut
                        }
                    };
                    return f.externalClasses && (d.externalClasses = f.externalClasses), Array.isArray(f.wxsCallMethods) && f.wxsCallMethods.forEach(function(e) {
                        d.methods[e] = function(t) {
                            return this.$vm[e](t);
                        };
                    }), n ? d : [ d, s ];
                }(e, {
                    isPage: gt,
                    initRelation: yt
                });
            }
            var Tt = [ "onShow", "onHide", "onUnload" ];
            function Et(e) {
                return function(e, t) {
                    t.isPage, t.initRelation;
                    var n = Pt(e);
                    return ze(n.methods, Tt, e), n.methods.onLoad = function(e) {
                        this.options = e;
                        var t = Object.assign({}, e);
                        delete t.__id__, this.$page = {
                            fullPath: "/" + (this.route || this.is) + At(t)
                        }, this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e);
                    }, We(n.methods, e, [ "onReady" ]), n;
                }(e, {
                    isPage: gt,
                    initRelation: yt
                });
            }
            function jt(e) {
                return Component(Et(e));
            }
            function Ct(e) {
                return Component(Pt(e));
            }
            function It(e) {
                var t = _t(e), n = getApp({
                    allowDefault: !0
                });
                e.$scope = n;
                var r = n.globalData;
                if (r && Object.keys(t.globalData).forEach(function(e) {
                    x(r, e) || (r[e] = t.globalData[e]);
                }), Object.keys(t).forEach(function(e) {
                    x(n, e) || (n[e] = t[e]);
                }), b(t.onShow) && wx.onAppShow && wx.onAppShow(function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e.__call_hook("onShow", n);
                }), b(t.onHide) && wx.onAppHide && wx.onAppHide(function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e.__call_hook("onHide", n);
                }), b(t.onLaunch)) {
                    var o = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
                    e.__call_hook("onLaunch", o);
                }
                return e;
            }
            function Dt(e) {
                var t = _t(e);
                if (b(t.onShow) && wx.onAppShow && wx.onAppShow(function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e.__call_hook("onShow", n);
                }), b(t.onHide) && wx.onAppHide && wx.onAppHide(function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e.__call_hook("onHide", n);
                }), b(t.onLaunch)) {
                    var n = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
                    e.__call_hook("onLaunch", n);
                }
                return e;
            }
            Tt.push.apply(Tt, [ "onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap" ]), 
            [ "vibrate", "preloadPage", "unPreloadPage", "loadSubPackage" ].forEach(function(e) {
                be[e] = !1;
            }), [].forEach(function(e) {
                var t = be[e] && be[e].name ? be[e].name : e;
                wx.canIUse(t) || (be[e] = !1);
            });
            var Lt = {};
            "undefined" != typeof Proxy ? Lt = new Proxy({}, {
                get: function(e, t) {
                    return x(e, t) ? e[t] : ce[t] ? ce[t] : Fe[t] ? X(t, Fe[t]) : Pe[t] ? X(t, Pe[t]) : Oe[t] ? X(t, Oe[t]) : De[t] ? De[t] : x(wx, t) || x(be, t) ? X(t, Se(t, wx[t])) : void 0;
                },
                set: function(e, t, n) {
                    return e[t] = n, !0;
                }
            }) : (Object.keys(ce).forEach(function(e) {
                Lt[e] = ce[e];
            }), Object.keys(Oe).forEach(function(e) {
                Lt[e] = X(e, Oe[e]);
            }), Object.keys(Pe).forEach(function(e) {
                Lt[e] = X(e, Oe[e]);
            }), Object.keys(De).forEach(function(e) {
                Lt[e] = De[e];
            }), Object.keys(Fe).forEach(function(e) {
                Lt[e] = X(e, Fe[e]);
            }), Object.keys(wx).forEach(function(e) {
                (x(wx, e) || x(be, e)) && (Lt[e] = X(e, Se(e, wx[e])));
            })), wx.createApp = wt, wx.createPage = jt, wx.createComponent = Ct, wx.createSubpackageApp = It, 
            wx.createPlugin = Dt;
            var Nt = Lt;
            n.default = Nt;
        }).call(this, r("c8ba"));
    },
    "595c": function(e, n, r) {
        (function(e) {
            var n = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                return t(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
            }, r = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : n(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : n(e);
            }, o = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : r(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
            };
            !function(t) {
                function n(e, t, n, o) {
                    var a = t && t.prototype instanceof i ? t : i, s = Object.create(a.prototype), u = new h(o || []);
                    return s._invoke = function(e, t, n) {
                        var o = O;
                        return function(i, a) {
                            if (o === P) throw new Error("Generator is already running");
                            if (o === T) {
                                if ("throw" === i) throw a;
                                return v();
                            }
                            for (n.method = i, n.arg = a; ;) {
                                var s = n.delegate;
                                if (s) {
                                    var u = f(s, n);
                                    if (u) {
                                        if (u === E) continue;
                                        return u;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                    if (o === O) throw o = T, n.arg;
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = P;
                                var c = r(e, t, n);
                                if ("normal" === c.type) {
                                    if (o = n.done ? T : A, c.arg === E) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    };
                                }
                                "throw" === c.type && (o = T, n.method = "throw", n.arg = c.arg);
                            }
                        };
                    }(e, n, u), s;
                }
                function r(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        };
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return {
                            type: "throw",
                            arg: e
                        };
                    }
                }
                function i() {}
                function a() {}
                function s() {}
                function u(e) {
                    [ "next", "throw", "return" ].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e);
                        };
                    });
                }
                function c(e) {
                    var t;
                    this._invoke = function(n, i) {
                        function a() {
                            return new Promise(function(t, a) {
                                !function t(n, i, a, s) {
                                    var u = r(e[n], e, i);
                                    if ("throw" !== u.type) {
                                        var c = u.arg, f = c.value;
                                        return f && "object" == (void 0 === f ? "undefined" : o(f)) && m.call(f, "__await") ? Promise.resolve(f.__await).then(function(e) {
                                            t("next", e, a, s);
                                        }, function(e) {
                                            t("throw", e, a, s);
                                        }) : Promise.resolve(f).then(function(e) {
                                            c.value = e, a(c);
                                        }, function(e) {
                                            return t("throw", e, a, s);
                                        });
                                    }
                                    s(u.arg);
                                }(n, i, t, a);
                            });
                        }
                        return t = t ? t.then(a, a) : a();
                    };
                }
                function f(e, t) {
                    var n = e.iterator[t.method];
                    if (n === g) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = g, f(e, t), "throw" === t.method)) return E;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return E;
                    }
                    var o = r(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                    E;
                    var i = o.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                    t.arg = g), t.delegate = null, E) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                    t.delegate = null, E);
                }
                function l(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                    this.tryEntries.push(t);
                }
                function d(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function h(e) {
                    this.tryEntries = [ {
                        tryLoc: "root"
                    } ], e.forEach(l, this), this.reset(!0);
                }
                function p(e) {
                    if (e) {
                        var t = e[_];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1, r = function t() {
                                for (;++n < e.length; ) if (m.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = g, t.done = !0, t;
                            };
                            return r.next = r;
                        }
                    }
                    return {
                        next: v
                    };
                }
                function v() {
                    return {
                        value: g,
                        done: !0
                    };
                }
                var g, y = Object.prototype, m = y.hasOwnProperty, b = "function" == typeof Symbol ? Symbol : {}, _ = b.iterator || "@@iterator", w = b.asyncIterator || "@@asyncIterator", x = b.toStringTag || "@@toStringTag", k = "object" == o(e), S = t.regeneratorRuntime;
                if (S) k && (e.exports = S); else {
                    (S = t.regeneratorRuntime = k ? e.exports : {}).wrap = n;
                    var O = "suspendedStart", A = "suspendedYield", P = "executing", T = "completed", E = {}, j = {};
                    j[_] = function() {
                        return this;
                    };
                    var C = Object.getPrototypeOf, I = C && C(C(p([])));
                    I && I !== y && m.call(I, _) && (j = I);
                    var D = s.prototype = i.prototype = Object.create(j);
                    a.prototype = D.constructor = s, s.constructor = a, s[x] = a.displayName = "GeneratorFunction", 
                    S.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === a || "GeneratorFunction" === (t.displayName || t.name));
                    }, S.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, s) : (e.__proto__ = s, x in e || (e[x] = "GeneratorFunction")), 
                        e.prototype = Object.create(D), e;
                    }, S.awrap = function(e) {
                        return {
                            __await: e
                        };
                    }, u(c.prototype), c.prototype[w] = function() {
                        return this;
                    }, S.AsyncIterator = c, S.async = function(e, t, r, o) {
                        var i = new c(n(e, t, r, o));
                        return S.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                            return e.done ? e.value : i.next();
                        });
                    }, u(D), D[x] = "Generator", D[_] = function() {
                        return this;
                    }, D.toString = function() {
                        return "[object Generator]";
                    }, S.keys = function(e) {
                        var t = [];
                        for (var n in e) t.push(n);
                        return t.reverse(), function n() {
                            for (;t.length; ) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n;
                            }
                            return n.done = !0, n;
                        };
                    }, S.values = p, h.prototype = {
                        constructor: h,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = g, this.done = !1, this.delegate = null, 
                            this.method = "next", this.arg = g, this.tryEntries.forEach(d), !e) for (var t in this) "t" === t.charAt(0) && m.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = g);
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function(e) {
                            function t(t, r) {
                                return i.type = "throw", i.arg = e, n.next = t, r && (n.method = "next", n.arg = g), 
                                !!r;
                            }
                            if (this.done) throw e;
                            for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r], i = o.completion;
                                if ("root" === o.tryLoc) return t("end");
                                if (o.tryLoc <= this.prev) {
                                    var a = m.call(o, "catchLoc"), s = m.call(o, "finallyLoc");
                                    if (a && s) {
                                        if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                    } else if (a) {
                                        if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                    } else {
                                        if (!s) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return t(o.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var r = this.tryEntries[n];
                                if (r.tryLoc <= this.prev && m.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                    var o = r;
                                    break;
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var i = o ? o.completion : {};
                            return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                            E) : this.complete(i);
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                            this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                            E;
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), d(n), E;
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        d(n);
                                    }
                                    return o;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function(e, t, n) {
                            return this.delegate = {
                                iterator: p(e),
                                resultName: t,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = g), E;
                        }
                    };
                }
            }(function() {
                return this || "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self;
            }() || Function("return this")());
        }).call(this, r("62e4")(e));
    },
    "5bdc": function(e, n, r) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = function e(n) {
            if ([ null, void 0, NaN, !1 ].includes(n)) return n;
            if ("object" !== t(n) && "function" != typeof n) return n;
            var r = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            }(n) ? [] : {};
            for (var o in n) n.hasOwnProperty(o) && (r[o] = "object" === t(n[o]) ? e(n[o]) : n[o]);
            return r;
        };
        n.default = o;
    },
    "62e4": function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l;
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i;
                }
            }), e.webpackPolyfill = 1), e;
        };
    },
    "64cb": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            install: function(e, t) {
                e.prototype.$u.http.setConfig({
                    baseUrl: "https://pic.maoeu.cn",
                    loadingText: "请求中...",
                    loadingTime: 3e3
                }), e.prototype.$u.http.interceptor.request = function(e) {
                    return e;
                }, e.prototype.$u.http.interceptor.response = function(e) {
                    return e;
                };
            }
        };
        t.default = r;
    },
    "66fd": function(e, n, r) {
        r.r(n), function(e) {
            var r = Object.freeze({});
            function o(e) {
                return null == e;
            }
            function i(e) {
                return null != e;
            }
            function a(e) {
                return !0 === e;
            }
            function s(e) {
                return "string" == typeof e || "number" == typeof e || "symbol" === t(e) || "boolean" == typeof e;
            }
            function u(e) {
                return null !== e && "object" === t(e);
            }
            var c = Object.prototype.toString;
            function f(e) {
                return "[object Object]" === c.call(e);
            }
            function l(e) {
                var t = parseFloat(String(e));
                return t >= 0 && Math.floor(t) === t && isFinite(e);
            }
            function d(e) {
                return i(e) && "function" == typeof e.then && "function" == typeof e.catch;
            }
            function h(e) {
                return null == e ? "" : Array.isArray(e) || f(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e);
            }
            function p(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e : t;
            }
            function v(e, t) {
                for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                return t ? function(e) {
                    return n[e.toLowerCase()];
                } : function(e) {
                    return n[e];
                };
            }
            v("slot,component", !0);
            var g = v("key,ref,slot,slot-scope,is");
            function y(e, t) {
                if (e.length) {
                    var n = e.indexOf(t);
                    if (n > -1) return e.splice(n, 1);
                }
            }
            var m = Object.prototype.hasOwnProperty;
            function b(e, t) {
                return m.call(e, t);
            }
            function _(e) {
                var t = Object.create(null);
                return function(n) {
                    return t[n] || (t[n] = e(n));
                };
            }
            var w = /-(\w)/g, x = _(function(e) {
                return e.replace(w, function(e, t) {
                    return t ? t.toUpperCase() : "";
                });
            }), k = _(function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }), S = /\B([A-Z])/g, O = _(function(e) {
                return e.replace(S, "-$1").toLowerCase();
            });
            var A = Function.prototype.bind ? function(e, t) {
                return e.bind(t);
            } : function(e, t) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
                }
                return n._length = e.length, n;
            };
            function P(e, t) {
                t = t || 0;
                for (var n = e.length - t, r = new Array(n); n--; ) r[n] = e[n + t];
                return r;
            }
            function T(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function E(e) {
                for (var t = {}, n = 0; n < e.length; n++) e[n] && T(t, e[n]);
                return t;
            }
            function j(e, t, n) {}
            var C = function(e, t, n) {
                return !1;
            }, I = function(e) {
                return e;
            };
            function D(e, t) {
                if (e === t) return !0;
                var n = u(e), r = u(t);
                if (!n || !r) return !n && !r && String(e) === String(t);
                try {
                    var o = Array.isArray(e), i = Array.isArray(t);
                    if (o && i) return e.length === t.length && e.every(function(e, n) {
                        return D(e, t[n]);
                    });
                    if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                    if (o || i) return !1;
                    var a = Object.keys(e), s = Object.keys(t);
                    return a.length === s.length && a.every(function(n) {
                        return D(e[n], t[n]);
                    });
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }
            function L(e, t) {
                for (var n = 0; n < e.length; n++) if (D(e[n], t)) return n;
                return -1;
            }
            function N(e) {
                var t = !1;
                return function() {
                    t || (t = !0, e.apply(this, arguments));
                };
            }
            var R = [ "component", "directive", "filter" ], $ = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ], M = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: C,
                isReservedAttr: C,
                isUnknownElement: C,
                getTagNamespace: j,
                parsePlatformTagName: I,
                mustUseProp: C,
                async: !0,
                _lifecycleHooks: $
            };
            function F(e) {
                var t = (e + "").charCodeAt(0);
                return 36 === t || 95 === t;
            }
            function B(e, t, n, r) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                });
            }
            var U = new RegExp("[^" + /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source + ".$_\\d]");
            var q, H = "__proto__" in {}, V = "undefined" != typeof window, K = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, z = K && WXEnvironment.platform.toLowerCase(), W = V && window.navigator.userAgent.toLowerCase(), G = W && /msie|trident/.test(W), J = (W && W.indexOf("msie 9.0"), 
            W && W.indexOf("edge/"), W && W.indexOf("android"), W && /iphone|ipad|ipod|ios/.test(W) || "ios" === z), X = (W && /chrome\/\d+/.test(W), 
            W && /phantomjs/.test(W), W && W.match(/firefox\/(\d+)/), {}.watch);
            if (V) try {
                var Y = {};
                Object.defineProperty(Y, "passive", {
                    get: function() {}
                }), window.addEventListener("test-passive", null, Y);
            } catch (e) {}
            var Q = function() {
                return void 0 === q && (q = !V && !K && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV), 
                q;
            }, Z = V && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            function ee(e) {
                return "function" == typeof e && /native code/.test(e.toString());
            }
            var te, ne = "undefined" != typeof Symbol && ee(Symbol) && "undefined" != typeof Reflect && ee(Reflect.ownKeys);
            te = "undefined" != typeof Set && ee(Set) ? Set : function() {
                function e() {
                    this.set = Object.create(null);
                }
                return e.prototype.has = function(e) {
                    return !0 === this.set[e];
                }, e.prototype.add = function(e) {
                    this.set[e] = !0;
                }, e.prototype.clear = function() {
                    this.set = Object.create(null);
                }, e;
            }();
            var re = j, oe = 0, ie = function() {
                this.id = oe++, this.subs = [];
            };
            function ae(e) {
                ie.SharedObject.targetStack.push(e), ie.SharedObject.target = e, ie.target = e;
            }
            function se() {
                ie.SharedObject.targetStack.pop(), ie.SharedObject.target = ie.SharedObject.targetStack[ie.SharedObject.targetStack.length - 1], 
                ie.target = ie.SharedObject.target;
            }
            ie.prototype.addSub = function(e) {
                this.subs.push(e);
            }, ie.prototype.removeSub = function(e) {
                y(this.subs, e);
            }, ie.prototype.depend = function() {
                ie.SharedObject.target && ie.SharedObject.target.addDep(this);
            }, ie.prototype.notify = function() {
                for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update();
            }, (ie.SharedObject = {}).target = null, ie.SharedObject.targetStack = [];
            var ue = function(e, t, n, r, o, i, a, s) {
                this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0, 
                this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
                this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, 
                this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
                this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, 
                this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, ce = {
                child: {
                    configurable: !0
                }
            };
            ce.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(ue.prototype, ce);
            var fe = function(e) {
                void 0 === e && (e = "");
                var t = new ue();
                return t.text = e, t.isComment = !0, t;
            };
            function le(e) {
                return new ue(void 0, void 0, void 0, String(e));
            }
            var de = Array.prototype, he = Object.create(de);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
                var t = de[e];
                B(he, e, function() {
                    for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
                    var o, i = t.apply(this, n), a = this.__ob__;
                    switch (e) {
                      case "push":
                      case "unshift":
                        o = n;
                        break;

                      case "splice":
                        o = n.slice(2);
                    }
                    return o && a.observeArray(o), a.dep.notify(), i;
                });
            });
            var pe = Object.getOwnPropertyNames(he), ve = !0;
            function ge(e) {
                ve = e;
            }
            var ye = function(e) {
                this.value = e, this.dep = new ie(), this.vmCount = 0, B(e, "__ob__", this), Array.isArray(e) ? (H ? e.push !== e.__proto__.push ? me(e, he, pe) : function(e, t) {
                    e.__proto__ = t;
                }(e, he) : me(e, he, pe), this.observeArray(e)) : this.walk(e);
            };
            function me(e, t, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    B(e, i, t[i]);
                }
            }
            function be(e, t) {
                var n;
                if (u(e) && !(e instanceof ue)) return b(e, "__ob__") && e.__ob__ instanceof ye ? n = e.__ob__ : ve && !Q() && (Array.isArray(e) || f(e)) && Object.isExtensible(e) && !e._isVue && (n = new ye(e)), 
                t && n && n.vmCount++, n;
            }
            function _e(e, t, n, r, o) {
                var i = new ie(), a = Object.getOwnPropertyDescriptor(e, t);
                if (!a || !1 !== a.configurable) {
                    var s = a && a.get, u = a && a.set;
                    s && !u || 2 !== arguments.length || (n = e[t]);
                    var c = !o && be(n);
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var t = s ? s.call(e) : n;
                            return ie.SharedObject.target && (i.depend(), c && (c.dep.depend(), Array.isArray(t) && ke(t))), 
                            t;
                        },
                        set: function(t) {
                            var r = s ? s.call(e) : n;
                            t === r || t != t && r != r || s && !u || (u ? u.call(e, t) : n = t, c = !o && be(t), 
                            i.notify());
                        }
                    });
                }
            }
            function we(e, t, n) {
                if (Array.isArray(e) && l(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), 
                n;
                if (t in e && !(t in Object.prototype)) return e[t] = n, n;
                var r = e.__ob__;
                return e._isVue || r && r.vmCount ? n : r ? (_e(r.value, t, n), r.dep.notify(), 
                n) : (e[t] = n, n);
            }
            function xe(e, t) {
                if (Array.isArray(e) && l(t)) e.splice(t, 1); else {
                    var n = e.__ob__;
                    e._isVue || n && n.vmCount || b(e, t) && (delete e[t], n && n.dep.notify());
                }
            }
            function ke(e) {
                for (var t = void 0, n = 0, r = e.length; n < r; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), 
                Array.isArray(t) && ke(t);
            }
            ye.prototype.walk = function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) _e(e, t[n]);
            }, ye.prototype.observeArray = function(e) {
                for (var t = 0, n = e.length; t < n; t++) be(e[t]);
            };
            var Se = M.optionMergeStrategies;
            function Oe(e, t) {
                if (!t) return e;
                for (var n, r, o, i = ne ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < i.length; a++) "__ob__" !== (n = i[a]) && (r = e[n], 
                o = t[n], b(e, n) ? r !== o && f(r) && f(o) && Oe(r, o) : we(e, n, o));
                return e;
            }
            function Ae(e, t, n) {
                return n ? function() {
                    var r = "function" == typeof t ? t.call(n, n) : t, o = "function" == typeof e ? e.call(n, n) : e;
                    return r ? Oe(r, o) : o;
                } : t ? e ? function() {
                    return Oe("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
                } : t : e;
            }
            function Pe(e, t) {
                var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
                return n ? function(e) {
                    for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                    return t;
                }(n) : n;
            }
            function Te(e, t, n, r) {
                var o = Object.create(e || null);
                return t ? T(o, t) : o;
            }
            Se.data = function(e, t, n) {
                return n ? Ae(e, t, n) : t && "function" != typeof t ? e : Ae(e, t);
            }, $.forEach(function(e) {
                Se[e] = Pe;
            }), R.forEach(function(e) {
                Se[e + "s"] = Te;
            }), Se.watch = function(e, t, n, r) {
                if (e === X && (e = void 0), t === X && (t = void 0), !t) return Object.create(e || null);
                if (!e) return t;
                var o = {};
                for (var i in T(o, e), t) {
                    var a = o[i], s = t[i];
                    a && !Array.isArray(a) && (a = [ a ]), o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [ s ];
                }
                return o;
            }, Se.props = Se.methods = Se.inject = Se.computed = function(e, t, n, r) {
                if (!e) return t;
                var o = Object.create(null);
                return T(o, e), t && T(o, t), o;
            }, Se.provide = Ae;
            var Ee = function(e, t) {
                return void 0 === t ? e : t;
            };
            function je(e, t, n) {
                if ("function" == typeof t && (t = t.options), function(e, t) {
                    var n = e.props;
                    if (n) {
                        var r, o, i = {};
                        if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (o = n[r]) && (i[x(o)] = {
                            type: null
                        }); else if (f(n)) for (var a in n) o = n[a], i[x(a)] = f(o) ? o : {
                            type: o
                        };
                        e.props = i;
                    }
                }(t), function(e, t) {
                    var n = e.inject;
                    if (n) {
                        var r = e.inject = {};
                        if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r[n[o]] = {
                            from: n[o]
                        }; else if (f(n)) for (var i in n) {
                            var a = n[i];
                            r[i] = f(a) ? T({
                                from: i
                            }, a) : {
                                from: a
                            };
                        }
                    }
                }(t), function(e) {
                    var t = e.directives;
                    if (t) for (var n in t) {
                        var r = t[n];
                        "function" == typeof r && (t[n] = {
                            bind: r,
                            update: r
                        });
                    }
                }(t), !t._base && (t.extends && (e = je(e, t.extends, n)), t.mixins)) for (var r = 0, o = t.mixins.length; r < o; r++) e = je(e, t.mixins[r], n);
                var i, a = {};
                for (i in e) s(i);
                for (i in t) b(e, i) || s(i);
                function s(r) {
                    var o = Se[r] || Ee;
                    a[r] = o(e[r], t[r], n, r);
                }
                return a;
            }
            function Ce(e, t, n, r) {
                if ("string" == typeof n) {
                    var o = e[t];
                    if (b(o, n)) return o[n];
                    var i = x(n);
                    if (b(o, i)) return o[i];
                    var a = k(i);
                    return b(o, a) ? o[a] : o[n] || o[i] || o[a];
                }
            }
            function Ie(e, t, n, r) {
                var o = t[e], i = !b(n, e), a = n[e], s = Ne(Boolean, o.type);
                if (s > -1) if (i && !b(o, "default")) a = !1; else if ("" === a || a === O(e)) {
                    var u = Ne(String, o.type);
                    (u < 0 || s < u) && (a = !0);
                }
                if (void 0 === a) {
                    a = function(e, t, n) {
                        if (b(t, "default")) {
                            var r = t.default;
                            return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== De(t.type) ? r.call(e) : r;
                        }
                    }(r, o, e);
                    var c = ve;
                    ge(!0), be(a), ge(c);
                }
                return a;
            }
            function De(e) {
                var t = e && e.toString().match(/^\s*function (\w+)/);
                return t ? t[1] : "";
            }
            function Le(e, t) {
                return De(e) === De(t);
            }
            function Ne(e, t) {
                if (!Array.isArray(t)) return Le(t, e) ? 0 : -1;
                for (var n = 0, r = t.length; n < r; n++) if (Le(t[n], e)) return n;
                return -1;
            }
            function Re(e, t, n) {
                ae();
                try {
                    if (t) for (var r = t; r = r.$parent; ) {
                        var o = r.$options.errorCaptured;
                        if (o) for (var i = 0; i < o.length; i++) try {
                            if (!1 === o[i].call(r, e, t, n)) return;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            Me(e, r, "errorCaptured hook");
                        }
                    }
                    Me(e, t, n);
                } finally {
                    se();
                }
            }
            function $e(e, t, n, r, o) {
                var i;
                try {
                    (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && d(i) && !i._handled && (i.catch(function(e) {
                        return Re(e, r, o + " (Promise/async)");
                    }), i._handled = !0);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    Re(e, r, o);
                }
                return i;
            }
            function Me(e, t, n) {
                if (M.errorHandler) try {
                    return M.errorHandler.call(null, e, t, n);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    t !== e && Fe(t, null, "config.errorHandler");
                }
                Fe(e, t, n);
            }
            function Fe(e, t, n) {
                if (!V && !K || "undefined" == typeof console) throw e;
                console.error(e);
            }
            var Be, Ue = [], qe = !1;
            function He() {
                qe = !1;
                var e = Ue.slice(0);
                Ue.length = 0;
                for (var t = 0; t < e.length; t++) e[t]();
            }
            if ("undefined" != typeof Promise && ee(Promise)) {
                var Ve = Promise.resolve();
                Be = function() {
                    Ve.then(He), J && setTimeout(j);
                };
            } else if (G || "undefined" == typeof MutationObserver || !ee(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Be = "undefined" != typeof setImmediate && ee(setImmediate) ? function() {
                setImmediate(He);
            } : function() {
                setTimeout(He, 0);
            }; else {
                var Ke = 1, ze = new MutationObserver(He), We = document.createTextNode(String(Ke));
                ze.observe(We, {
                    characterData: !0
                }), Be = function() {
                    Ke = (Ke + 1) % 2, We.data = String(Ke);
                };
            }
            function Ge(e, t) {
                var n;
                if (Ue.push(function() {
                    if (e) try {
                        e.call(t);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        Re(e, t, "nextTick");
                    } else n && n(t);
                }), qe || (qe = !0, Be()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
                    n = e;
                });
            }
            var Je = new te();
            function Xe(e) {
                (function e(t, n) {
                    var r, o, i = Array.isArray(t);
                    if (!(!i && !u(t) || Object.isFrozen(t) || t instanceof ue)) {
                        if (t.__ob__) {
                            var a = t.__ob__.dep.id;
                            if (n.has(a)) return;
                            n.add(a);
                        }
                        if (i) for (r = t.length; r--; ) e(t[r], n); else for (o = Object.keys(t), r = o.length; r--; ) e(t[o[r]], n);
                    }
                })(e, Je), Je.clear();
            }
            var Ye = _(function(e) {
                var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0), r = "!" === (e = n ? e.slice(1) : e).charAt(0);
                return {
                    name: e = r ? e.slice(1) : e,
                    once: n,
                    capture: r,
                    passive: t
                };
            });
            function Qe(e, t) {
                function n() {
                    var e = arguments, r = n.fns;
                    if (!Array.isArray(r)) return $e(r, null, arguments, t, "v-on handler");
                    for (var o = r.slice(), i = 0; i < o.length; i++) $e(o[i], null, e, t, "v-on handler");
                }
                return n.fns = e, n;
            }
            function Ze(e, t, n, r) {
                var a = t.options.mpOptions && t.options.mpOptions.properties;
                if (o(a)) return n;
                var s = t.options.mpOptions.externalClasses || [], u = e.attrs, c = e.props;
                if (i(u) || i(c)) for (var f in a) {
                    var l = O(f);
                    (et(n, c, f, l, !0) || et(n, u, f, l, !1)) && n[f] && -1 !== s.indexOf(l) && r[x(n[f])] && (n[f] = r[x(n[f])]);
                }
                return n;
            }
            function et(e, t, n, r, o) {
                if (i(t)) {
                    if (b(t, n)) return e[n] = t[n], o || delete t[n], !0;
                    if (b(t, r)) return e[n] = t[r], o || delete t[r], !0;
                }
                return !1;
            }
            function tt(e) {
                return s(e) ? [ le(e) ] : Array.isArray(e) ? function e(t, n) {
                    var r, u, c, f, l = [];
                    for (r = 0; r < t.length; r++) o(u = t[r]) || "boolean" == typeof u || (c = l.length - 1, 
                    f = l[c], Array.isArray(u) ? u.length > 0 && (nt((u = e(u, (n || "") + "_" + r))[0]) && nt(f) && (l[c] = le(f.text + u[0].text), 
                    u.shift()), l.push.apply(l, u)) : s(u) ? nt(f) ? l[c] = le(f.text + u) : "" !== u && l.push(le(u)) : nt(u) && nt(f) ? l[c] = le(f.text + u.text) : (a(t._isVList) && i(u.tag) && o(u.key) && i(n) && (u.key = "__vlist" + n + "_" + r + "__"), 
                    l.push(u)));
                    return l;
                }(e) : void 0;
            }
            function nt(e) {
                return i(e) && i(e.text) && function(e) {
                    return !1 === e;
                }(e.isComment);
            }
            function rt(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t);
            }
            function ot(e) {
                var t = it(e.$options.inject, e);
                t && (ge(!1), Object.keys(t).forEach(function(n) {
                    _e(e, n, t[n]);
                }), ge(!0));
            }
            function it(e, t) {
                if (e) {
                    for (var n = Object.create(null), r = ne ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                        var i = r[o];
                        if ("__ob__" !== i) {
                            for (var a = e[i].from, s = t; s; ) {
                                if (s._provided && b(s._provided, a)) {
                                    n[i] = s._provided[a];
                                    break;
                                }
                                s = s.$parent;
                            }
                            if (!s && "default" in e[i]) {
                                var u = e[i].default;
                                n[i] = "function" == typeof u ? u.call(t) : u;
                            }
                        }
                    }
                    return n;
                }
            }
            function at(e, t) {
                if (!e || !e.length) return {};
                for (var n = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r], a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== t && i.fnContext !== t || !a || null == a.slot) i.asyncMeta && i.asyncMeta.data && "page" === i.asyncMeta.data.slot ? (n.page || (n.page = [])).push(i) : (n.default || (n.default = [])).push(i); else {
                        var s = a.slot, u = n[s] || (n[s] = []);
                        "template" === i.tag ? u.push.apply(u, i.children || []) : u.push(i);
                    }
                }
                for (var c in n) n[c].every(st) && delete n[c];
                return n;
            }
            function st(e) {
                return e.isComment && !e.asyncFactory || " " === e.text;
            }
            function ut(e, t, n) {
                var o, i = Object.keys(t).length > 0, a = e ? !!e.$stable : !i, s = e && e.$key;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (a && n && n !== r && s === n.$key && !i && !n.$hasNormal) return n;
                    for (var u in o = {}, e) e[u] && "$" !== u[0] && (o[u] = ct(t, u, e[u]));
                } else o = {};
                for (var c in t) c in o || (o[c] = ft(t, c));
                return e && Object.isExtensible(e) && (e._normalized = o), B(o, "$stable", a), B(o, "$key", s), 
                B(o, "$hasNormal", i), o;
            }
            function ct(e, n, r) {
                var o = function() {
                    var e = arguments.length ? r.apply(null, arguments) : r({});
                    return (e = e && "object" === t(e) && !Array.isArray(e) ? [ e ] : tt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
                };
                return r.proxy && Object.defineProperty(e, n, {
                    get: o,
                    enumerable: !0,
                    configurable: !0
                }), o;
            }
            function ft(e, t) {
                return function() {
                    return e[t];
                };
            }
            function lt(e, t) {
                var n, r, o, a, s;
                if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), r = 0, 
                o = e.length; r < o; r++) n[r] = t(e[r], r, r, r); else if ("number" == typeof e) for (n = new Array(e), 
                r = 0; r < e; r++) n[r] = t(r + 1, r, r, r); else if (u(e)) if (ne && e[Symbol.iterator]) {
                    n = [];
                    for (var c = e[Symbol.iterator](), f = c.next(); !f.done; ) n.push(t(f.value, n.length, r, r++)), 
                    f = c.next();
                } else for (a = Object.keys(e), n = new Array(a.length), r = 0, o = a.length; r < o; r++) s = a[r], 
                n[r] = t(e[s], s, r, r);
                return i(n) || (n = []), n._isVList = !0, n;
            }
            function dt(e, t, n, r) {
                var o, i = this.$scopedSlots[e];
                i ? (n = n || {}, r && (n = T(T({}, r), n)), o = i(n, this, n._i) || t) : o = this.$slots[e] || t;
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o;
            }
            function ht(e) {
                return Ce(this.$options, "filters", e) || I;
            }
            function pt(e, t) {
                return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
            }
            function vt(e, t, n, r, o) {
                var i = M.keyCodes[t] || n;
                return o && r && !M.keyCodes[t] ? pt(o, r) : i ? pt(i, e) : r ? O(r) !== t : void 0;
            }
            function gt(e, t, n, r, o) {
                if (n && u(n)) {
                    var i;
                    Array.isArray(n) && (n = E(n));
                    var a = function(a) {
                        if ("class" === a || "style" === a || g(a)) i = e; else {
                            var s = e.attrs && e.attrs.type;
                            i = r || M.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                        }
                        var u = x(a), c = O(a);
                        u in i || c in i || (i[a] = n[a], !o) || ((e.on || (e.on = {}))["update:" + a] = function(e) {
                            n[a] = e;
                        });
                    };
                    for (var s in n) a(s);
                }
                return e;
            }
            function yt(e, t) {
                var n = this._staticTrees || (this._staticTrees = []), r = n[e];
                return r && !t || bt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), 
                r;
            }
            function mt(e, t, n) {
                return bt(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
            }
            function bt(e, t, n) {
                if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && _t(e[r], t + "_" + r, n); else _t(e, t, n);
            }
            function _t(e, t, n) {
                e.isStatic = !0, e.key = t, e.isOnce = n;
            }
            function wt(e, t) {
                if (t && f(t)) {
                    var n = e.on = e.on ? T({}, e.on) : {};
                    for (var r in t) {
                        var o = n[r], i = t[r];
                        n[r] = o ? [].concat(o, i) : i;
                    }
                }
                return e;
            }
            function xt(e, t, n, r) {
                t = t || {
                    $stable: !n
                };
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    Array.isArray(i) ? xt(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn);
                }
                return r && (t.$key = r), t;
            }
            function kt(e, t) {
                for (var n = 0; n < t.length; n += 2) {
                    var r = t[n];
                    "string" == typeof r && r && (e[t[n]] = t[n + 1]);
                }
                return e;
            }
            function St(e, t) {
                return "string" == typeof e ? t + e : e;
            }
            function Ot(e) {
                e._o = mt, e._n = p, e._s = h, e._l = lt, e._t = dt, e._q = D, e._i = L, e._m = yt, 
                e._f = ht, e._k = vt, e._b = gt, e._v = le, e._e = fe, e._u = xt, e._g = wt, e._d = kt, 
                e._p = St;
            }
            function At(e, t, n, o, i) {
                var s, u = this, c = i.options;
                b(o, "_uid") ? (s = Object.create(o))._original = o : (s = o, o = o._original);
                var f = a(c._compiled), l = !f;
                this.data = e, this.props = t, this.children = n, this.parent = o, this.listeners = e.on || r, 
                this.injections = it(c.inject, o), this.slots = function() {
                    return u.$slots || ut(e.scopedSlots, u.$slots = at(n, o)), u.$slots;
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0,
                    get: function() {
                        return ut(e.scopedSlots, this.slots());
                    }
                }), f && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = ut(e.scopedSlots, this.$slots)), 
                c._scopeId ? this._c = function(e, t, n, r) {
                    var i = Lt(s, e, t, n, r, l);
                    return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId, i.fnContext = o), i;
                } : this._c = function(e, t, n, r) {
                    return Lt(s, e, t, n, r, l);
                };
            }
            function Pt(e, t, n, o, a) {
                var s = e.options, u = {}, c = s.props;
                if (i(c)) for (var f in c) u[f] = Ie(f, c, t || r); else i(n.attrs) && Et(u, n.attrs), 
                i(n.props) && Et(u, n.props);
                var l = new At(n, u, a, o, e), d = s.render.call(null, l._c, l);
                if (d instanceof ue) return Tt(d, n, l.parent, s, l);
                if (Array.isArray(d)) {
                    for (var h = tt(d) || [], p = new Array(h.length), v = 0; v < h.length; v++) p[v] = Tt(h[v], n, l.parent, s, l);
                    return p;
                }
            }
            function Tt(e, t, n, r, o) {
                var i = function(e) {
                    var t = new ue(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                    return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, 
                    t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, 
                    t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
                }(e);
                return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), 
                i;
            }
            function Et(e, t) {
                for (var n in t) e[x(n)] = t[n];
            }
            Ot(At.prototype);
            var jt = {
                init: function(e, t) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var n = e;
                        jt.prepatch(n, n);
                    } else {
                        (e.componentInstance = function(e, t) {
                            var n = {
                                _isComponent: !0,
                                _parentVnode: e,
                                parent: t
                            }, r = e.data.inlineTemplate;
                            return i(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n);
                        }(e, Wt)).$mount(t ? e.elm : void 0, t);
                    }
                },
                prepatch: function(e, t) {
                    var n = t.componentOptions;
                    Gt(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
                },
                insert: function(e) {
                    var t = e.context, n = e.componentInstance;
                    n._isMounted || (Yt(n, "onServiceCreated"), Yt(n, "onServiceAttached"), n._isMounted = !0, 
                    Yt(n, "mounted")), e.data.keepAlive && (t._isMounted ? function(e) {
                        e._inactive = !1, Zt.push(e);
                    }(n) : Xt(n, !0));
                },
                destroy: function(e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                        if (!(n && (t._directInactive = !0, Jt(t)) || t._inactive)) {
                            t._inactive = !0;
                            for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
                            Yt(t, "deactivated");
                        }
                    }(t, !0) : t.$destroy());
                }
            }, Ct = Object.keys(jt);
            function It(e, t, n, r, s) {
                if (!o(e)) {
                    var c = n.$options._base;
                    if (u(e) && (e = c.extend(e)), "function" == typeof e) {
                        var f;
                        if (o(e.cid) && void 0 === (e = Bt(f = e, c))) return function(e, t, n, r, o) {
                            var i = fe();
                            return i.asyncFactory = e, i.asyncMeta = {
                                data: t,
                                context: n,
                                children: r,
                                tag: o
                            }, i;
                        }(f, t, n, r, s);
                        t = t || {}, bn(e), i(t.model) && function(e, t) {
                            var n = e.model && e.model.prop || "value", r = e.model && e.model.event || "input";
                            (t.attrs || (t.attrs = {}))[n] = t.model.value;
                            var o = t.on || (t.on = {}), a = o[r], s = t.model.callback;
                            i(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[r] = [ s ].concat(a)) : o[r] = s;
                        }(e.options, t);
                        var l = function(e, t, n, r) {
                            var a = t.options.props;
                            if (o(a)) return Ze(e, t, {}, r);
                            var s = {}, u = e.attrs, c = e.props;
                            if (i(u) || i(c)) for (var f in a) {
                                var l = O(f);
                                et(s, c, f, l, !0) || et(s, u, f, l, !1);
                            }
                            return Ze(e, t, s, r);
                        }(t, e, 0, n);
                        if (a(e.options.functional)) return Pt(e, l, t, n, r);
                        var d = t.on;
                        if (t.on = t.nativeOn, a(e.options.abstract)) {
                            var h = t.slot;
                            t = {}, h && (t.slot = h);
                        }
                        !function(e) {
                            for (var t = e.hook || (e.hook = {}), n = 0; n < Ct.length; n++) {
                                var r = Ct[n], o = t[r], i = jt[r];
                                o === i || o && o._merged || (t[r] = o ? Dt(i, o) : i);
                            }
                        }(t);
                        var p = e.options.name || s;
                        return new ue("vue-component-" + e.cid + (p ? "-" + p : ""), t, void 0, void 0, void 0, n, {
                            Ctor: e,
                            propsData: l,
                            listeners: d,
                            tag: s,
                            children: r
                        }, f);
                    }
                }
            }
            function Dt(e, t) {
                var n = function(n, r) {
                    e(n, r), t(n, r);
                };
                return n._merged = !0, n;
            }
            function Lt(e, t, n, r, o, i) {
                return (Array.isArray(n) || s(n)) && (o = r, r = n, n = void 0), a(i) && (o = 2), 
                Nt(e, t, n, r, o);
            }
            function Nt(e, t, n, r, o) {
                return i(n) && i(n.__ob__) ? fe() : (i(n) && i(n.is) && (t = n.is), t ? (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                    default: r[0]
                }, r.length = 0), 2 === o ? r = tt(r) : 1 === o && (r = function(e) {
                    for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                    return e;
                }(r)), "string" == typeof t ? (s = e.$vnode && e.$vnode.ns || M.getTagNamespace(t), 
                a = M.isReservedTag(t) ? new ue(M.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !i(c = Ce(e.$options, "components", t)) ? new ue(t, n, r, void 0, void 0, e) : It(c, n, e, r, t)) : a = It(t, n, e, r), 
                Array.isArray(a) ? a : i(a) ? (i(s) && Rt(a, s), i(n) && function(e) {
                    u(e.style) && Xe(e.style), u(e.class) && Xe(e.class);
                }(n), a) : fe()) : fe());
                var a, s, c;
            }
            function Rt(e, t, n) {
                if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), i(e.children)) for (var r = 0, s = e.children.length; r < s; r++) {
                    var u = e.children[r];
                    i(u.tag) && (o(u.ns) || a(n) && "svg" !== u.tag) && Rt(u, t, n);
                }
            }
            var $t, Mt = null;
            function Ft(e, t) {
                return (e.__esModule || ne && "Module" === e[Symbol.toStringTag]) && (e = e.default), 
                u(e) ? t.extend(e) : e;
            }
            function Bt(e, t) {
                if (a(e.error) && i(e.errorComp)) return e.errorComp;
                if (i(e.resolved)) return e.resolved;
                var n = Mt;
                if (n && i(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), a(e.loading) && i(e.loadingComp)) return e.loadingComp;
                if (n && !i(e.owners)) {
                    var r = e.owners = [ n ], s = !0, c = null, f = null;
                    n.$on("hook:destroyed", function() {
                        return y(r, n);
                    });
                    var l = function(e) {
                        for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
                        e && (r.length = 0, null !== c && (clearTimeout(c), c = null), null !== f && (clearTimeout(f), 
                        f = null));
                    }, h = N(function(n) {
                        e.resolved = Ft(n, t), s ? r.length = 0 : l(!0);
                    }), p = N(function(t) {
                        i(e.errorComp) && (e.error = !0, l(!0));
                    }), v = e(h, p);
                    return u(v) && (d(v) ? o(e.resolved) && v.then(h, p) : d(v.component) && (v.component.then(h, p), 
                    i(v.error) && (e.errorComp = Ft(v.error, t)), i(v.loading) && (e.loadingComp = Ft(v.loading, t), 
                    0 === v.delay ? e.loading = !0 : c = setTimeout(function() {
                        c = null, o(e.resolved) && o(e.error) && (e.loading = !0, l(!1));
                    }, v.delay || 200)), i(v.timeout) && (f = setTimeout(function() {
                        f = null, o(e.resolved) && p(null);
                    }, v.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved;
                }
            }
            function Ut(e) {
                return e.isComment && e.asyncFactory;
            }
            function qt(e) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (i(n) && (i(n.componentOptions) || Ut(n))) return n;
                }
            }
            function Ht(e, t) {
                $t.$on(e, t);
            }
            function Vt(e, t) {
                $t.$off(e, t);
            }
            function Kt(e, t) {
                var n = $t;
                return function r() {
                    var o = t.apply(null, arguments);
                    null !== o && n.$off(e, r);
                };
            }
            function zt(e, t, n) {
                $t = e, function(e, t, n, r, i, s) {
                    var u, c, f, l;
                    for (u in e) c = e[u], f = t[u], l = Ye(u), o(c) || (o(f) ? (o(c.fns) && (c = e[u] = Qe(c, s)), 
                    a(l.once) && (c = e[u] = i(l.name, c, l.capture)), n(l.name, c, l.capture, l.passive, l.params)) : c !== f && (f.fns = c, 
                    e[u] = f));
                    for (u in t) o(e[u]) && r((l = Ye(u)).name, t[u], l.capture);
                }(t, n || {}, Ht, Vt, Kt, e), $t = void 0;
            }
            var Wt = null;
            function Gt(e, t, n, o, i) {
                var a = o.data.scopedSlots, s = e.$scopedSlots, u = !!(a && !a.$stable || s !== r && !s.$stable || a && e.$scopedSlots.$key !== a.$key), c = !!(i || e.$options._renderChildren || u);
                if (e.$options._parentVnode = o, e.$vnode = o, e._vnode && (e._vnode.parent = o), 
                e.$options._renderChildren = i, e.$attrs = o.data.attrs || r, e.$listeners = n || r, 
                t && e.$options.props) {
                    ge(!1);
                    for (var f = e._props, l = e.$options._propKeys || [], d = 0; d < l.length; d++) {
                        var h = l[d], p = e.$options.props;
                        f[h] = Ie(h, p, t, e);
                    }
                    ge(!0), e.$options.propsData = t;
                }
                e._$updateProperties && e._$updateProperties(e), n = n || r;
                var v = e.$options._parentListeners;
                e.$options._parentListeners = n, zt(e, n, v), c && (e.$slots = at(i, o.context), 
                e.$forceUpdate());
            }
            function Jt(e) {
                for (;e && (e = e.$parent); ) if (e._inactive) return !0;
                return !1;
            }
            function Xt(e, t) {
                if (t) {
                    if (e._directInactive = !1, Jt(e)) return;
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var n = 0; n < e.$children.length; n++) Xt(e.$children[n]);
                    Yt(e, "activated");
                }
            }
            function Yt(e, t) {
                ae();
                var n = e.$options[t], r = t + " hook";
                if (n) for (var o = 0, i = n.length; o < i; o++) $e(n[o], e, null, e, r);
                e._hasHookEvent && e.$emit("hook:" + t), se();
            }
            var Qt = [], Zt = [], en = {}, tn = !1, nn = !1, rn = 0;
            var on = Date.now;
            if (V && !G) {
                var an = window.performance;
                an && "function" == typeof an.now && on() > document.createEvent("Event").timeStamp && (on = function() {
                    return an.now();
                });
            }
            function sn() {
                var e, t;
                for (on(), nn = !0, Qt.sort(function(e, t) {
                    return e.id - t.id;
                }), rn = 0; rn < Qt.length; rn++) (e = Qt[rn]).before && e.before(), t = e.id, en[t] = null, 
                e.run();
                var n = Zt.slice(), r = Qt.slice();
                rn = Qt.length = Zt.length = 0, en = {}, tn = nn = !1, function(e) {
                    for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Xt(e[t], !0);
                }(n), function(e) {
                    var t = e.length;
                    for (;t--; ) {
                        var n = e[t], r = n.vm;
                        r._watcher === n && r._isMounted && !r._isDestroyed && Yt(r, "updated");
                    }
                }(r), Z && M.devtools && Z.emit("flush");
            }
            var un = 0, cn = function(e, t, n, r, o) {
                this.vm = e, o && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, 
                this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = n, this.id = ++un, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new te(), this.newDepIds = new te(), this.expression = "", 
                "function" == typeof t ? this.getter = t : (this.getter = function(e) {
                    if (!U.test(e)) {
                        var t = e.split(".");
                        return function(e) {
                            for (var n = 0; n < t.length; n++) {
                                if (!e) return;
                                e = e[t[n]];
                            }
                            return e;
                        };
                    }
                }(t), this.getter || (this.getter = j)), this.value = this.lazy ? void 0 : this.get();
            };
            cn.prototype.get = function() {
                var e;
                ae(this);
                var t = this.vm;
                try {
                    e = this.getter.call(t, t);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if (!this.user) throw e;
                    Re(e, t, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && Xe(e), se(), this.cleanupDeps();
                }
                return e;
            }, cn.prototype.addDep = function(e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
            }, cn.prototype.cleanupDeps = function() {
                for (var e = this.deps.length; e--; ) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this);
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
                this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
            }, cn.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                    var t = e.id;
                    if (null == en[t]) {
                        if (en[t] = !0, nn) {
                            for (var n = Qt.length - 1; n > rn && Qt[n].id > e.id; ) n--;
                            Qt.splice(n + 1, 0, e);
                        } else Qt.push(e);
                        tn || (tn = !0, Ge(sn));
                    }
                }(this);
            }, cn.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || u(e) || this.deep) {
                        var t = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, t);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            Re(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, e, t);
                    }
                }
            }, cn.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, cn.prototype.depend = function() {
                for (var e = this.deps.length; e--; ) this.deps[e].depend();
            }, cn.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || y(this.vm._watchers, this);
                    for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
                    this.active = !1;
                }
            };
            var fn = {
                enumerable: !0,
                configurable: !0,
                get: j,
                set: j
            };
            function ln(e, t, n) {
                fn.get = function() {
                    return this[t][n];
                }, fn.set = function(e) {
                    this[t][n] = e;
                }, Object.defineProperty(e, n, fn);
            }
            function dn(e) {
                e._watchers = [];
                var t = e.$options;
                t.props && function(e, t) {
                    var n = e.$options.propsData || {}, r = e._props = {}, o = e.$options._propKeys = [];
                    !e.$parent || ge(!1);
                    var i = function(i) {
                        o.push(i);
                        var a = Ie(i, t, n, e);
                        _e(r, i, a), i in e || ln(e, "_props", i);
                    };
                    for (var a in t) i(a);
                    ge(!0);
                }(e, t.props), t.methods && function(e, t) {
                    for (var n in e.$options.props, t) e[n] = "function" != typeof t[n] ? j : A(t[n], e);
                }(e, t.methods), t.data ? function(e) {
                    var t = e.$options.data;
                    f(t = e._data = "function" == typeof t ? function(e, t) {
                        ae();
                        try {
                            return e.call(t, t);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return Re(e, t, "data()"), {};
                        } finally {
                            se();
                        }
                    }(t, e) : t || {}) || (t = {});
                    var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length);
                    for (;o--; ) {
                        var i = n[o];
                        r && b(r, i) || F(i) || ln(e, "_data", i);
                    }
                    be(t, !0);
                }(e) : be(e._data = {}, !0), t.computed && function(e, t) {
                    var n = e._computedWatchers = Object.create(null), r = Q();
                    for (var o in t) {
                        var i = t[o], a = "function" == typeof i ? i : i.get;
                        r || (n[o] = new cn(e, a || j, j, hn)), o in e || pn(e, o, i);
                    }
                }(e, t.computed), t.watch && t.watch !== X && function(e, t) {
                    for (var n in t) {
                        var r = t[n];
                        if (Array.isArray(r)) for (var o = 0; o < r.length; o++) yn(e, n, r[o]); else yn(e, n, r);
                    }
                }(e, t.watch);
            }
            var hn = {
                lazy: !0
            };
            function pn(e, t, n) {
                var r = !Q();
                "function" == typeof n ? (fn.get = r ? vn(t) : gn(n), fn.set = j) : (fn.get = n.get ? r && !1 !== n.cache ? vn(t) : gn(n.get) : j, 
                fn.set = n.set || j), Object.defineProperty(e, t, fn);
            }
            function vn(e) {
                return function() {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t) return t.dirty && t.evaluate(), ie.SharedObject.target && t.depend(), t.value;
                };
            }
            function gn(e) {
                return function() {
                    return e.call(this, this);
                };
            }
            function yn(e, t, n, r) {
                return f(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
            }
            var mn = 0;
            function bn(e) {
                var t = e.options;
                if (e.super) {
                    var n = bn(e.super);
                    if (n !== e.superOptions) {
                        e.superOptions = n;
                        var r = function(e) {
                            var t, n = e.options, r = e.sealedOptions;
                            for (var o in n) n[o] !== r[o] && (t || (t = {}), t[o] = n[o]);
                            return t;
                        }(e);
                        r && T(e.extendOptions, r), (t = e.options = je(n, e.extendOptions)).name && (t.components[t.name] = e);
                    }
                }
                return t;
            }
            function _n(e) {
                this._init(e);
            }
            function wn(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function(e) {
                    e = e || {};
                    var n = this, r = n.cid, o = e._Ctor || (e._Ctor = {});
                    if (o[r]) return o[r];
                    var i = e.name || n.options.name, a = function(e) {
                        this._init(e);
                    };
                    return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, 
                    a.options = je(n.options, e), a.super = n, a.options.props && function(e) {
                        var t = e.options.props;
                        for (var n in t) ln(e.prototype, "_props", n);
                    }(a), a.options.computed && function(e) {
                        var t = e.options.computed;
                        for (var n in t) pn(e.prototype, n, t[n]);
                    }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, R.forEach(function(e) {
                        a[e] = n[e];
                    }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = e, 
                    a.sealedOptions = T({}, a.options), o[r] = a, a;
                };
            }
            function xn(e) {
                return e && (e.Ctor.options.name || e.tag);
            }
            function kn(e, t) {
                return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!function(e) {
                    return "[object RegExp]" === c.call(e);
                }(e) && e.test(t);
            }
            function Sn(e, t) {
                var n = e.cache, r = e.keys, o = e._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var s = xn(a.componentOptions);
                        s && !t(s) && On(n, i, r, o);
                    }
                }
            }
            function On(e, t, n, r) {
                var o = e[t];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(), e[t] = null, y(n, t);
            }
            (function(e) {
                e.prototype._init = function(e) {
                    var t = this;
                    t._uid = mn++, t._isVue = !0, e && e._isComponent ? function(e, t) {
                        var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                        n.parent = t.parent, n._parentVnode = r;
                        var o = r.componentOptions;
                        n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, 
                        n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
                    }(t, e) : t.$options = je(bn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, 
                    function(e) {
                        var t = e.$options, n = t.parent;
                        if (n && !t.abstract) {
                            for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                            n.$children.push(e);
                        }
                        e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, 
                        e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, 
                        e._isBeingDestroyed = !1;
                    }(t), function(e) {
                        e._events = Object.create(null), e._hasHookEvent = !1;
                        var t = e.$options._parentListeners;
                        t && zt(e, t);
                    }(t), function(e) {
                        e._vnode = null, e._staticTrees = null;
                        var t = e.$options, n = e.$vnode = t._parentVnode, o = n && n.context;
                        e.$slots = at(t._renderChildren, o), e.$scopedSlots = r, e._c = function(t, n, r, o) {
                            return Lt(e, t, n, r, o, !1);
                        }, e.$createElement = function(t, n, r, o) {
                            return Lt(e, t, n, r, o, !0);
                        };
                        var i = n && n.data;
                        _e(e, "$attrs", i && i.attrs || r, null, !0), _e(e, "$listeners", t._parentListeners || r, null, !0);
                    }(t), Yt(t, "beforeCreate"), !t._$fallback && ot(t), dn(t), !t._$fallback && rt(t), 
                    !t._$fallback && Yt(t, "created"), t.$options.el && t.$mount(t.$options.el);
                };
            })(_n), function(e) {
                Object.defineProperty(e.prototype, "$data", {
                    get: function() {
                        return this._data;
                    }
                }), Object.defineProperty(e.prototype, "$props", {
                    get: function() {
                        return this._props;
                    }
                }), e.prototype.$set = we, e.prototype.$delete = xe, e.prototype.$watch = function(e, t, n) {
                    var r = this;
                    if (f(t)) return yn(r, e, t, n);
                    (n = n || {}).user = !0;
                    var o = new cn(r, e, t, n);
                    if (n.immediate) try {
                        t.call(r, o.value);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        Re(e, r, 'callback for immediate watcher "' + o.expression + '"');
                    }
                    return function() {
                        o.teardown();
                    };
                };
            }(_n), function(e) {
                var t = /^hook:/;
                e.prototype.$on = function(e, n) {
                    var r = this;
                    if (Array.isArray(e)) for (var o = 0, i = e.length; o < i; o++) r.$on(e[o], n); else (r._events[e] || (r._events[e] = [])).push(n), 
                    t.test(e) && (r._hasHookEvent = !0);
                    return r;
                }, e.prototype.$once = function(e, t) {
                    var n = this;
                    function r() {
                        n.$off(e, r), t.apply(n, arguments);
                    }
                    return r.fn = t, n.$on(e, r), n;
                }, e.prototype.$off = function(e, t) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(e)) {
                        for (var r = 0, o = e.length; r < o; r++) n.$off(e[r], t);
                        return n;
                    }
                    var i, a = n._events[e];
                    if (!a) return n;
                    if (!t) return n._events[e] = null, n;
                    for (var s = a.length; s--; ) if ((i = a[s]) === t || i.fn === t) {
                        a.splice(s, 1);
                        break;
                    }
                    return n;
                }, e.prototype.$emit = function(e) {
                    var t = this, n = t._events[e];
                    if (n) {
                        n = n.length > 1 ? P(n) : n;
                        for (var r = P(arguments, 1), o = 'event handler for "' + e + '"', i = 0, a = n.length; i < a; i++) $e(n[i], t, r, t, o);
                    }
                    return t;
                };
            }(_n), function(e) {
                e.prototype._update = function(e, t) {
                    var n = this, r = n.$el, o = n._vnode, i = function(e) {
                        var t = Wt;
                        return Wt = e, function() {
                            Wt = t;
                        };
                    }(n);
                    n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), i(), 
                    r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                }, e.prototype.$forceUpdate = function() {
                    this._watcher && this._watcher.update();
                }, e.prototype.$destroy = function() {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        Yt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || y(t.$children, e), e._watcher && e._watcher.teardown();
                        for (var n = e._watchers.length; n--; ) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), 
                        Yt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
                    }
                };
            }(_n), function(e) {
                Ot(e.prototype), e.prototype.$nextTick = function(e) {
                    return Ge(e, this);
                }, e.prototype._render = function() {
                    var e, t = this, n = t.$options, r = n.render, o = n._parentVnode;
                    o && (t.$scopedSlots = ut(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;
                    try {
                        Mt = t, e = r.call(t._renderProxy, t.$createElement);
                    } catch (n) {
                        n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                        Re(n, t, "render"), e = t._vnode;
                    } finally {
                        Mt = null;
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ue || (e = fe()), 
                    e.parent = o, e;
                };
            }(_n);
            var An = [ String, RegExp, Array ], Pn = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: An,
                        exclude: An,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var e in this.cache) On(this.cache, e, this.keys);
                    },
                    mounted: function() {
                        var e = this;
                        this.$watch("include", function(t) {
                            Sn(e, function(e) {
                                return kn(t, e);
                            });
                        }), this.$watch("exclude", function(t) {
                            Sn(e, function(e) {
                                return !kn(t, e);
                            });
                        });
                    },
                    render: function() {
                        var e = this.$slots.default, t = qt(e), n = t && t.componentOptions;
                        if (n) {
                            var r = xn(n), o = this.include, i = this.exclude;
                            if (o && (!r || !kn(o, r)) || i && r && kn(i, r)) return t;
                            var a = this.cache, s = this.keys, u = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                            a[u] ? (t.componentInstance = a[u].componentInstance, y(s, u), s.push(u)) : (a[u] = t, 
                            s.push(u), this.max && s.length > parseInt(this.max) && On(a, s[0], s, this._vnode)), 
                            t.data.keepAlive = !0;
                        }
                        return t || e && e[0];
                    }
                }
            };
            (function(e) {
                var t = {
                    get: function() {
                        return M;
                    }
                };
                Object.defineProperty(e, "config", t), e.util = {
                    warn: re,
                    extend: T,
                    mergeOptions: je,
                    defineReactive: _e
                }, e.set = we, e.delete = xe, e.nextTick = Ge, e.observable = function(e) {
                    return be(e), e;
                }, e.options = Object.create(null), R.forEach(function(t) {
                    e.options[t + "s"] = Object.create(null);
                }), e.options._base = e, T(e.options.components, Pn), function(e) {
                    e.use = function(e) {
                        var t = this._installedPlugins || (this._installedPlugins = []);
                        if (t.indexOf(e) > -1) return this;
                        var n = P(arguments, 1);
                        return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), 
                        t.push(e), this;
                    };
                }(e), function(e) {
                    e.mixin = function(e) {
                        return this.options = je(this.options, e), this;
                    };
                }(e), wn(e), function(e) {
                    R.forEach(function(t) {
                        e[t] = function(e, n) {
                            return n ? ("component" === t && f(n) && (n.name = n.name || e, n = this.options._base.extend(n)), 
                            "directive" === t && "function" == typeof n && (n = {
                                bind: n,
                                update: n
                            }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
                        };
                    });
                }(e);
            })(_n), Object.defineProperty(_n.prototype, "$isServer", {
                get: Q
            }), Object.defineProperty(_n.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(_n, "FunctionalRenderContext", {
                value: At
            }), _n.version = "2.6.11";
            var Tn = "[object Array]", En = "[object Object]";
            function jn(e, t) {
                var n = {};
                return function e(t, n) {
                    if (t !== n) {
                        var r = In(t), o = In(n);
                        if (r == En && o == En) {
                            if (Object.keys(t).length >= Object.keys(n).length) for (var i in n) {
                                var a = t[i];
                                void 0 === a ? t[i] = null : e(a, n[i]);
                            }
                        } else r == Tn && o == Tn && t.length >= n.length && n.forEach(function(n, r) {
                            e(t[r], n);
                        });
                    }
                }(e, t), function e(t, n, r, o) {
                    if (t !== n) {
                        var i = In(t), a = In(n);
                        if (i == En) if (a != En || Object.keys(t).length < Object.keys(n).length) Cn(o, r, t); else {
                            var s = function(i) {
                                var a = t[i], s = n[i], u = In(a), c = In(s);
                                if (u != Tn && u != En) a !== n[i] && Cn(o, ("" == r ? "" : r + ".") + i, a); else if (u == Tn) c != Tn || a.length < s.length ? Cn(o, ("" == r ? "" : r + ".") + i, a) : a.forEach(function(t, n) {
                                    e(t, s[n], ("" == r ? "" : r + ".") + i + "[" + n + "]", o);
                                }); else if (u == En) if (c != En || Object.keys(a).length < Object.keys(s).length) Cn(o, ("" == r ? "" : r + ".") + i, a); else for (var f in a) e(a[f], s[f], ("" == r ? "" : r + ".") + i + "." + f, o);
                            };
                            for (var u in t) s(u);
                        } else i == Tn ? a != Tn || t.length < n.length ? Cn(o, r, t) : t.forEach(function(t, i) {
                            e(t, n[i], r + "[" + i + "]", o);
                        }) : Cn(o, r, t);
                    }
                }(e, t, "", n), n;
            }
            function Cn(e, t, n) {
                e[t] = n;
            }
            function In(e) {
                return Object.prototype.toString.call(e);
            }
            function Dn(e) {
                if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                    if (Object({
                        VUE_APP_NAME: "图纸投稿1",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var t = e.$scope;
                        console.log("[" + +new Date() + "][" + (t.is || t.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]");
                    }
                    var n = e.__next_tick_callbacks.slice(0);
                    e.__next_tick_callbacks.length = 0;
                    for (var r = 0; r < n.length; r++) n[r]();
                }
            }
            function Ln(e, t) {
                if (!e.__next_tick_pending && !function(e) {
                    return Qt.find(function(t) {
                        return e._watcher === t;
                    });
                }(e)) {
                    if (Object({
                        VUE_APP_NAME: "图纸投稿1",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG) {
                        var n = e.$scope;
                        console.log("[" + +new Date() + "][" + (n.is || n.route) + "][" + e._uid + "]:nextVueTick");
                    }
                    return Ge(t, e);
                }
                if (Object({
                    VUE_APP_NAME: "图纸投稿1",
                    VUE_APP_PLATFORM: "mp-weixin",
                    NODE_ENV: "production",
                    BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                    var r = e.$scope;
                    console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + e._uid + "]:nextMPTick");
                }
                var o;
                if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push(function() {
                    if (t) try {
                        t.call(e);
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        Re(t, e, "nextTick");
                    } else o && o(e);
                }), !t && "undefined" != typeof Promise) return new Promise(function(e) {
                    o = e;
                });
            }
            function Nn() {}
            function Rn(e) {
                return Array.isArray(e) ? function(e) {
                    for (var t, n = "", r = 0, o = e.length; r < o; r++) i(t = Rn(e[r])) && "" !== t && (n && (n += " "), 
                    n += t);
                    return n;
                }(e) : u(e) ? function(e) {
                    var t = "";
                    for (var n in e) e[n] && (t && (t += " "), t += n);
                    return t;
                }(e) : "string" == typeof e ? e : "";
            }
            var $n = _(function(e) {
                var t = {}, n = /:(.+)/;
                return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                    if (e) {
                        var r = e.split(n);
                        r.length > 1 && (t[r[0].trim()] = r[1].trim());
                    }
                }), t;
            });
            var Mn = [ "createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent" ];
            var Fn = [ "onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onInit", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onPageShow", "onPageHide", "onPageResize", "onUploadDouyinVideo" ];
            _n.prototype.__patch__ = function(e, t) {
                var n = this;
                if (null !== t && ("page" === this.mpType || "component" === this.mpType)) {
                    var r = this.$scope, o = Object.create(null);
                    try {
                        o = function(e) {
                            var t = Object.create(null);
                            [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {})).reduce(function(t, n) {
                                return t[n] = e[n], t;
                            }, t);
                            var n = e.__composition_api_state__ || e.__secret_vfa_state__, r = n && n.rawBindings;
                            return r && Object.keys(r).forEach(function(n) {
                                t[n] = e[n];
                            }), Object.assign(t, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (t.name = e.name, 
                            t.value = e.value), JSON.parse(JSON.stringify(t));
                        }(this);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        console.error(e);
                    }
                    o.__webviewId__ = r.data.__webviewId__;
                    var i = Object.create(null);
                    Object.keys(o).forEach(function(e) {
                        i[e] = r.data[e];
                    });
                    var a = !1 === this.$shouldDiffData ? o : jn(o, i);
                    Object.keys(a).length ? (Object({
                        VUE_APP_NAME: "图纸投稿1",
                        VUE_APP_PLATFORM: "mp-weixin",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_DEBUG && console.log("[" + +new Date() + "][" + (r.is || r.route) + "][" + this._uid + "]差量更新", JSON.stringify(a)), 
                    this.__next_tick_pending = !0, r.setData(a, function() {
                        n.__next_tick_pending = !1, Dn(n);
                    })) : Dn(this);
                }
            }, _n.prototype.$mount = function(e, t) {
                return function(e, t, n) {
                    return e.mpType ? ("app" === e.mpType && (e.$options.render = Nn), e.$options.render || (e.$options.render = Nn), 
                    !e._$fallback && Yt(e, "beforeMount"), new cn(e, function() {
                        e._update(e._render(), n);
                    }, j, {
                        before: function() {
                            e._isMounted && !e._isDestroyed && Yt(e, "beforeUpdate");
                        }
                    }, !0), n = !1, e) : e;
                }(this, 0, t);
            }, function(e) {
                var t = e.extend;
                e.extend = function(e) {
                    var n = (e = e || {}).methods;
                    return n && Object.keys(n).forEach(function(t) {
                        -1 !== Fn.indexOf(t) && (e[t] = n[t], delete n[t]);
                    }), t.call(this, e);
                };
                var n = e.config.optionMergeStrategies, r = n.created;
                Fn.forEach(function(e) {
                    n[e] = r;
                }), e.prototype.__lifecycle_hooks__ = Fn;
            }(_n), function(e) {
                e.config.errorHandler = function(t, n, r) {
                    e.util.warn("Error in " + r + ': "' + t.toString() + '"', n), console.error(t);
                    var o = "function" == typeof getApp && getApp();
                    o && o.onError && o.onError(t);
                };
                var t = e.prototype.$emit;
                e.prototype.$emit = function(e) {
                    if (this.$scope && e) {
                        var n = this.$scope._triggerEvent || this.$scope.triggerEvent;
                        n && n.call(this.$scope, e, {
                            __args__: P(arguments, 1)
                        });
                    }
                    return t.apply(this, arguments);
                }, e.prototype.$nextTick = function(e) {
                    return Ln(this, e);
                }, Mn.forEach(function(t) {
                    e.prototype[t] = function(e) {
                        return this.$scope && this.$scope[t] ? this.$scope[t](e) : "undefined" != typeof my ? "createSelectorQuery" === t ? my.createSelectorQuery(e) : "createIntersectionObserver" === t ? my.createIntersectionObserver(e) : void 0 : void 0;
                    };
                }), e.prototype.__init_provide = rt, e.prototype.__init_injections = ot, e.prototype.__call_hook = function(e, t) {
                    var n = this;
                    ae();
                    var r, o = n.$options[e], i = e + " hook";
                    if (o) for (var a = 0, s = o.length; a < s; a++) r = $e(o[a], n, t ? [ t ] : null, n, i);
                    return n._hasHookEvent && n.$emit("hook:" + e, t), se(), r;
                }, e.prototype.__set_model = function(t, n, r, o) {
                    Array.isArray(o) && (-1 !== o.indexOf("trim") && (r = r.trim()), -1 !== o.indexOf("number") && (r = this._n(r))), 
                    t || (t = this), e.set(t, n, r);
                }, e.prototype.__set_sync = function(t, n, r) {
                    t || (t = this), e.set(t, n, r);
                }, e.prototype.__get_orig = function(e) {
                    return f(e) && e.$orig || e;
                }, e.prototype.__get_value = function(e, t) {
                    return function e(t, n) {
                        var r = n.split("."), o = r[0];
                        return 0 === o.indexOf("__$n") && (o = parseInt(o.replace("__$n", ""))), 1 === r.length ? t[o] : e(t[o], r.slice(1).join("."));
                    }(t || this, e);
                }, e.prototype.__get_class = function(e, t) {
                    return function(e, t) {
                        return i(e) || i(t) ? function(e, t) {
                            return e ? t ? e + " " + t : e : t || "";
                        }(e, Rn(t)) : "";
                    }(t, e);
                }, e.prototype.__get_style = function(e, t) {
                    if (!e && !t) return "";
                    var n = function(e) {
                        return Array.isArray(e) ? E(e) : "string" == typeof e ? $n(e) : e;
                    }(e), r = t ? T(t, n) : n;
                    return Object.keys(r).map(function(e) {
                        return O(e) + ":" + r[e];
                    }).join(";");
                }, e.prototype.__map = function(e, t) {
                    var n, r, o, i, a;
                    if (Array.isArray(e)) {
                        for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r);
                        return n;
                    }
                    if (u(e)) {
                        for (i = Object.keys(e), n = Object.create(null), r = 0, o = i.length; r < o; r++) n[a = i[r]] = t(e[a], a, r);
                        return n;
                    }
                    if ("number" == typeof e) {
                        for (n = new Array(e), r = 0, o = e; r < o; r++) n[r] = t(r, r);
                        return n;
                    }
                    return [];
                };
            }(_n), n.default = _n;
        }.call(this, r("c8ba"));
    },
    "67d02": function(e, t, n) {
        function r(e, t, n) {
            this.$children.map(function(o) {
                e === o.$options.name ? o.$emit.apply(o, [ t ].concat(n)) : r.apply(o, [ e, t ].concat(n));
            });
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            methods: {
                dispatch: function(e, t, n) {
                    for (var r = this.$parent || this.$root, o = r.$options.name; r && (!o || o !== e); ) (r = r.$parent) && (o = r.$options.name);
                    r && r.$emit.apply(r, [ t ].concat(n));
                },
                broadcast: function(e, t, n) {
                    r.call(this, e, t, n);
                }
            }
        };
        t.default = o;
    },
    "6a71": function(e, t, n) {
        function r(e) {
            return e < 128 ? [ e ] : e < 2048 ? [ 192 + (e >> 6), 128 + (63 & e) ] : [ 224 + (e >> 12), 128 + (e >> 6 & 63), 128 + (63 & e) ];
        }
        function o(e, t) {
            this.typeNumber = -1, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, 
            this.dataCache = null, this.rsBlocks = null, this.totalDataCount = -1, this.data = e, 
            this.utf8bytes = function(e) {
                for (var t = [], n = 0; n < e.length; n++) for (var o = r(e.charCodeAt(n)), i = 0; i < o.length; i++) t.push(o[i]);
                return t;
            }(e), this.make();
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = o, o.prototype = {
            constructor: o,
            getModuleCount: function() {
                return this.moduleCount;
            },
            make: function() {
                this.getRightType(), this.dataCache = this.createData(), this.createQrcode();
            },
            makeImpl: function(e) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                for (var t = 0; t < this.moduleCount; t++) this.modules[t] = new Array(this.moduleCount);
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), 
                this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), 
                this.setupTimingPattern(), this.setupTypeInfo(!0, e), this.typeNumber >= 7 && this.setupTypeNumber(!0), 
                this.mapData(this.dataCache, e);
            },
            setupPositionProbePattern: function(e, t) {
                for (var n = -1; n <= 7; n++) if (!(e + n <= -1 || this.moduleCount <= e + n)) for (var r = -1; r <= 7; r++) t + r <= -1 || this.moduleCount <= t + r || (this.modules[e + n][t + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4);
            },
            createQrcode: function() {
                for (var e = 0, t = 0, n = null, r = 0; r < 8; r++) {
                    this.makeImpl(r);
                    var o = s.getLostPoint(this);
                    (0 == r || e > o) && (e = o, t = r, n = this.modules);
                }
                this.modules = n, this.setupTypeInfo(!1, t), this.typeNumber >= 7 && this.setupTypeNumber(!1);
            },
            setupTimingPattern: function() {
                for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0, 
                null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0));
            },
            setupPositionAdjustPattern: function() {
                for (var e = s.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) for (var n = 0; n < e.length; n++) {
                    var r = e[t], o = e[n];
                    if (null == this.modules[r][o]) for (var i = -2; i <= 2; i++) for (var a = -2; a <= 2; a++) this.modules[r + i][o + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a;
                }
            },
            setupTypeNumber: function(e) {
                for (var t = s.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                    var r = !e && 1 == (t >> n & 1);
                    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r, this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r;
                }
            },
            setupTypeInfo: function(e, t) {
                for (var n = i[this.errorCorrectLevel] << 3 | t, r = s.getBCHTypeInfo(n), o = 0; o < 15; o++) {
                    var a = !e && 1 == (r >> o & 1);
                    o < 6 ? this.modules[o][8] = a : o < 8 ? this.modules[o + 1][8] = a : this.modules[this.moduleCount - 15 + o][8] = a, 
                    a = !e && 1 == (r >> o & 1), o < 8 ? this.modules[8][this.moduleCount - o - 1] = a : o < 9 ? this.modules[8][15 - o - 1 + 1] = a : this.modules[8][15 - o - 1] = a;
                }
                this.modules[this.moduleCount - 8][8] = !e;
            },
            createData: function() {
                var e = new d(), t = this.typeNumber > 9 ? 16 : 8;
                e.put(4, 4), e.put(this.utf8bytes.length, t);
                for (var n = 0, r = this.utf8bytes.length; n < r; n++) e.put(this.utf8bytes[n], 8);
                for (e.length + 4 <= 8 * this.totalDataCount && e.put(0, 4); e.length % 8 != 0; ) e.putBit(!1);
                for (;!(e.length >= 8 * this.totalDataCount || (e.put(o.PAD0, 8), e.length >= 8 * this.totalDataCount)); ) e.put(o.PAD1, 8);
                return this.createBytes(e);
            },
            createBytes: function(e) {
                for (var t = 0, n = 0, r = 0, o = this.rsBlock.length / 3, i = new Array(), a = 0; a < o; a++) for (var u = this.rsBlock[3 * a + 0], c = this.rsBlock[3 * a + 1], l = this.rsBlock[3 * a + 2], d = 0; d < u; d++) i.push([ l, c ]);
                for (var h = new Array(i.length), p = new Array(i.length), v = 0; v < i.length; v++) {
                    var g = i[v][0], y = i[v][1] - g;
                    for (n = Math.max(n, g), r = Math.max(r, y), h[v] = new Array(g), a = 0; a < h[v].length; a++) h[v][a] = 255 & e.buffer[a + t];
                    t += g;
                    var m = s.getErrorCorrectPolynomial(y), b = new f(h[v], m.getLength() - 1).mod(m);
                    for (p[v] = new Array(m.getLength() - 1), a = 0; a < p[v].length; a++) {
                        var _ = a + b.getLength() - p[v].length;
                        p[v][a] = _ >= 0 ? b.get(_) : 0;
                    }
                }
                var w = new Array(this.totalDataCount), x = 0;
                for (a = 0; a < n; a++) for (v = 0; v < i.length; v++) a < h[v].length && (w[x++] = h[v][a]);
                for (a = 0; a < r; a++) for (v = 0; v < i.length; v++) a < p[v].length && (w[x++] = p[v][a]);
                return w;
            },
            mapData: function(e, t) {
                for (var n = -1, r = this.moduleCount - 1, o = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
                    for (var u = 0; u < 2; u++) if (null == this.modules[r][a - u]) {
                        var c = !1;
                        i < e.length && (c = 1 == (e[i] >>> o & 1)), s.getMask(t, r, a - u) && (c = !c), 
                        this.modules[r][a - u] = c, -1 == --o && (i++, o = 7);
                    }
                    if ((r += n) < 0 || this.moduleCount <= r) {
                        r -= n, n = -n;
                        break;
                    }
                }
            }
        }, o.PAD0 = 236, o.PAD1 = 17;
        for (var i = [ 1, 0, 3, 2 ], a = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, s = {
            PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(e) {
                for (var t = e << 10; s.getBCHDigit(t) - s.getBCHDigit(s.G15) >= 0; ) t ^= s.G15 << s.getBCHDigit(t) - s.getBCHDigit(s.G15);
                return (e << 10 | t) ^ s.G15_MASK;
            },
            getBCHTypeNumber: function(e) {
                for (var t = e << 12; s.getBCHDigit(t) - s.getBCHDigit(s.G18) >= 0; ) t ^= s.G18 << s.getBCHDigit(t) - s.getBCHDigit(s.G18);
                return e << 12 | t;
            },
            getBCHDigit: function(e) {
                for (var t = 0; 0 != e; ) t++, e >>>= 1;
                return t;
            },
            getPatternPosition: function(e) {
                return s.PATTERN_POSITION_TABLE[e - 1];
            },
            getMask: function(e, t, n) {
                switch (e) {
                  case a.PATTERN000:
                    return (t + n) % 2 == 0;

                  case a.PATTERN001:
                    return t % 2 == 0;

                  case a.PATTERN010:
                    return n % 3 == 0;

                  case a.PATTERN011:
                    return (t + n) % 3 == 0;

                  case a.PATTERN100:
                    return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;

                  case a.PATTERN101:
                    return t * n % 2 + t * n % 3 == 0;

                  case a.PATTERN110:
                    return (t * n % 2 + t * n % 3) % 2 == 0;

                  case a.PATTERN111:
                    return (t * n % 3 + (t + n) % 2) % 2 == 0;

                  default:
                    throw new Error("bad maskPattern:" + e);
                }
            },
            getErrorCorrectPolynomial: function(e) {
                for (var t = new f([ 1 ], 0), n = 0; n < e; n++) t = t.multiply(new f([ 1, u.gexp(n) ], 0));
                return t;
            },
            getLostPoint: function(e) {
                for (var t = e.getModuleCount(), n = 0, r = 0, o = 0; o < t; o++) for (var i = 0, a = e.modules[o][0], s = 0; s < t; s++) {
                    var u = e.modules[o][s];
                    if (s < t - 6 && u && !e.modules[o][s + 1] && e.modules[o][s + 2] && e.modules[o][s + 3] && e.modules[o][s + 4] && !e.modules[o][s + 5] && e.modules[o][s + 6] && (s < t - 10 ? e.modules[o][s + 7] && e.modules[o][s + 8] && e.modules[o][s + 9] && e.modules[o][s + 10] && (n += 40) : s > 3 && e.modules[o][s - 1] && e.modules[o][s - 2] && e.modules[o][s - 3] && e.modules[o][s - 4] && (n += 40)), 
                    o < t - 1 && s < t - 1) {
                        var c = 0;
                        u && c++, e.modules[o + 1][s] && c++, e.modules[o][s + 1] && c++, e.modules[o + 1][s + 1] && c++, 
                        0 != c && 4 != c || (n += 3);
                    }
                    a ^ u ? i++ : (a = u, i >= 5 && (n += 3 + i - 5), i = 1), u && r++;
                }
                for (s = 0; s < t; s++) for (i = 0, a = e.modules[0][s], o = 0; o < t; o++) u = e.modules[o][s], 
                o < t - 6 && u && !e.modules[o + 1][s] && e.modules[o + 2][s] && e.modules[o + 3][s] && e.modules[o + 4][s] && !e.modules[o + 5][s] && e.modules[o + 6][s] && (o < t - 10 ? e.modules[o + 7][s] && e.modules[o + 8][s] && e.modules[o + 9][s] && e.modules[o + 10][s] && (n += 40) : o > 3 && e.modules[o - 1][s] && e.modules[o - 2][s] && e.modules[o - 3][s] && e.modules[o - 4][s] && (n += 40)), 
                a ^ u ? i++ : (a = u, i >= 5 && (n += 3 + i - 5), i = 1);
                return n += 10 * (Math.abs(100 * r / t / t - 50) / 5);
            }
        }, u = {
            glog: function(e) {
                if (e < 1) throw new Error("glog(" + e + ")");
                return u.LOG_TABLE[e];
            },
            gexp: function(e) {
                for (;e < 0; ) e += 255;
                for (;e >= 256; ) e -= 255;
                return u.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, c = 0; c < 8; c++) u.EXP_TABLE[c] = 1 << c;
        for (c = 8; c < 256; c++) u.EXP_TABLE[c] = u.EXP_TABLE[c - 4] ^ u.EXP_TABLE[c - 5] ^ u.EXP_TABLE[c - 6] ^ u.EXP_TABLE[c - 8];
        for (c = 0; c < 255; c++) u.LOG_TABLE[u.EXP_TABLE[c]] = c;
        function f(e, t) {
            if (null == e.length) throw new Error(e.length + "/" + t);
            for (var n = 0; n < e.length && 0 == e[n]; ) n++;
            this.num = new Array(e.length - n + t);
            for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n];
        }
        f.prototype = {
            get: function(e) {
                return this.num[e];
            },
            getLength: function() {
                return this.num.length;
            },
            multiply: function(e) {
                for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++) for (var r = 0; r < e.getLength(); r++) t[n + r] ^= u.gexp(u.glog(this.get(n)) + u.glog(e.get(r)));
                return new f(t, 0);
            },
            mod: function(e) {
                var t = this.getLength(), n = e.getLength();
                if (t - n < 0) return this;
                for (var r = new Array(t), o = 0; o < t; o++) r[o] = this.get(o);
                for (;r.length >= n; ) {
                    var i = u.glog(r[0]) - u.glog(e.get(0));
                    for (o = 0; o < e.getLength(); o++) r[o] ^= u.gexp(u.glog(e.get(o)) + i);
                    for (;0 == r[0]; ) r.shift();
                }
                return new f(r, 0);
            }
        };
        var l = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ];
        function d() {
            this.buffer = new Array(), this.length = 0;
        }
        o.prototype.getRightType = function() {
            for (var e = 1; e < 41; e++) {
                var t = l[4 * (e - 1) + this.errorCorrectLevel];
                if (null == t) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + this.errorCorrectLevel);
                for (var n = t.length / 3, r = 0, o = 0; o < n; o++) {
                    var i = t[3 * o + 0];
                    r += t[3 * o + 2] * i;
                }
                var a = e > 9 ? 2 : 1;
                if (this.utf8bytes.length + a < r || 40 == e) {
                    this.typeNumber = e, this.rsBlock = t, this.totalDataCount = r;
                    break;
                }
            }
        }, d.prototype = {
            get: function(e) {
                var t = Math.floor(e / 8);
                return this.buffer[t] >>> 7 - e % 8 & 1;
            },
            put: function(e, t) {
                for (var n = 0; n < t; n++) this.putBit(e >>> t - n - 1 & 1);
            },
            putBit: function(e) {
                var t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), 
                this.length++;
            }
        };
    },
    "6c9e": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "success", t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            -1 == [ "primary", "info", "error", "warning", "success" ].indexOf(e) && (e = "success");
            var n = "";
            switch (e) {
              case "primary":
              case "info":
                n = "info-circle";
                break;

              case "error":
                n = "close-circle";
                break;

              case "warning":
                n = "error-circle";
                break;

              case "success":
                n = "checkmark-circle";
                break;

              default:
                n = "checkmark-circle";
            }
            return t && (n += "-fill"), n;
        };
        t.default = r;
    },
    7938: function(e, t, n) {
        (function(t) {
            var r = "305420", a = "qEXN111A", s = n("32db"), u = getApp();
            e.exports = {
                getConfig: function(e) {
                    t.showLoading({
                        title: "正在拼命加载中..."
                    }), u.globalData.objectId ? e() : (s.initialize("7a719f1bdd3ec5b9", r), s.Query("Config").get(a).then(function(t) {
                        console.log(t), u.globalData.objectId = t.objectId, u.globalData.isShenHe = t.isShenHe, 
                        e();
                    }).catch(function(e) {
                        console.log(e);
                    }));
                },
                getRecommendVideo: function(e, n, r) {
                    t.request({
                        url: "https://api.hyhuo.com/home/list",
                        method: "POST",
                        data: {
                            last_id: "0",
                            page: e,
                            channel: "appstore",
                            source: "iOS",
                            device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
                            device_name: "iPhone 6s Plus",
                            device_w_h: "414*736",
                            system_version: "14.4",
                            lan: "zh-Hans-CN",
                            is_new: "1",
                            version_code: "9.3.6",
                            uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
                            udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
                            uid: "0",
                            token: "68d64a6ffc3f205fac640de6668ca69e",
                            timestamp: "1617157517",
                            nonce: "161715751702717"
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            t.hideLoading(), e.data && e.data.data ? n(e.data.data.data_list) : r(e.data.errMsg);
                        },
                        fail: function(e) {
                            t.hideLoading(), r(0);
                        }
                    });
                },
                getTabVideo: function(e, n, r, o) {
                    var i, a;
                    "每日精选" == n ? (i = "每日精选", a = "4") : "60帧超清" == n ? (i = "60帧", a = "4") : "情侣壁纸" == n && (i = "235", 
                    a = "3"), t.request({
                        url: "https://api.hyhuo.com/find/banner_info",
                        method: "POST",
                        data: {
                            banner_jump_type: "0",
                            banner_keyword: i,
                            banner_title: n,
                            banner_type: a,
                            page: e,
                            channel: "appstore",
                            source: "iOS",
                            device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
                            device_name: "iPhone 6s Plus",
                            device_w_h: "414*736",
                            system_version: "14.4",
                            lan: "zh-Hans-CN",
                            is_new: "1",
                            version_code: "9.3.6",
                            uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
                            udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
                            uid: "0",
                            token: "68d64a6ffc3f205fac640de6668ca69e",
                            timestamp: "1617157517",
                            nonce: "161715751702717"
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            console.log(e), t.hideLoading(), e.data && e.data.data ? r(e.data.data.data_list) : o(e.data.errMsg);
                        },
                        fail: function(e) {
                            t.hideLoading(), o(0);
                        }
                    });
                },
                getSearchVideo: function(e, n, r, o) {
                    t.request({
                        url: "https://search.hyhuo.com/so/tag",
                        method: "POST",
                        data: {
                            keyword: e,
                            search_type: 3,
                            sort: "hot",
                            page: n
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            t.hideLoading(), e.data && e.data.data ? r(e.data.data.data_list) : o(e.data.errMsg);
                        },
                        fail: function(e) {
                            t.hideLoading(), o(0);
                        }
                    });
                },
                getRecommendImg: function(e, n, r) {
                    t.request({
                        url: "https://api.hyhuo.com/home/img_recommend",
                        method: "POST",
                        data: {
                            keyword: "推荐",
                            search_type: "5",
                            sort: "hot",
                            page: e,
                            channel: "appstore",
                            source: "iOS",
                            device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
                            device_name: "iPhone 6s Plus",
                            device_w_h: "414*736",
                            system_version: "14.4",
                            lan: "zh-Hans-CN",
                            is_new: "1",
                            version_code: "9.3.6",
                            uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
                            udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
                            uid: "0",
                            token: "68d64a6ffc3f205fac640de6668ca69e",
                            timestamp: "1617157517",
                            nonce: "161715751702717"
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            t.hideLoading(), e.data && e.data.data ? n(e.data.data.data_list) : r(e.data.errMsg);
                        },
                        fail: function(e) {
                            t.hideLoading(), r(0);
                        }
                    });
                },
                getTabImg: function(e, n, r, o) {
                    t.request({
                        url: "https://search.hyhuo.com/search/image_tag",
                        method: "POST",
                        data: {
                            banner_jump_type: "1",
                            banner_keyword: n,
                            banner_title: n,
                            banner_type: "4",
                            page: e,
                            channel: "appstore",
                            source: "iOS",
                            device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
                            device_name: "iPhone 6s Plus",
                            device_w_h: "414*736",
                            system_version: "14.4",
                            lan: "zh-Hans-CN",
                            is_new: "1",
                            version_code: "9.3.6",
                            uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
                            udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
                            uid: "0",
                            token: "68d64a6ffc3f205fac640de6668ca69e",
                            timestamp: "1617157517",
                            nonce: "161715751702717"
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            t.hideLoading(), e.data && e.data.data ? r(e.data.data.data_list) : o(e.data.errMsg);
                        },
                        fail: function(e) {
                            t.hideLoading(), o(0);
                        }
                    });
                },
                getSearchImg: function(e, n, r, o) {
                    t.request({
                        url: "https://search.hyhuo.com/search/image_tag",
                        method: "POST",
                        data: {
                            keyword: e,
                            sort: "hot",
                            page: n
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            t.hideLoading(), e.data && e.data.data ? r(e.data.data.data_list) : o(e.data.errMsg);
                        },
                        fail: function(e) {
                            t.hideLoading(), o(0);
                        }
                    });
                },
                refreshUsedTimeAndDate: function() {
                    t.getStorage({
                        key: "date",
                        success: function(e) {
                            e.data != a(new Date()) && (t.setStorage({
                                key: "date",
                                data: a(new Date())
                            }), o(), i(!1));
                        },
                        fail: function(e) {
                            t.setStorage({
                                key: "date",
                                data: a(new Date())
                            }), o(), i(!1);
                        }
                    });
                },
                addUsedTime: function() {
                    var e = r();
                    e += 1, t.setStorage({
                        key: l,
                        data: e
                    });
                }
            };
        }).call(this, n("543d").default);
    },
    9410: function(e, n, r) {
        (function(n) {
            var r = console.log, o = {
                lineFeedTags: [ "<br />", "<br/>", "\r\n", "\n\t", "\r", "\n" ],
                tagetLineFeedTag: "❤",
                log: function(e) {
                    r(e);
                },
                showLoading: function(e, t) {},
                hideLoading: function() {},
                showToast: function(e, t) {},
                getPosterUrl: function(e) {
                    var t = e.backgroundImage, n = e.type;
                    return e.formData, new Promise(function(e, r) {
                        var o;
                        if (t) o = t; else switch (n) {
                          case 1:
                            o = "";
                            break;

                          default:
                            o = "/static/1.png";
                        }
                        o ? e(o) : r("背景图片路径不存在");
                    });
                },
                shareTypeListSheetArray: {
                    array: [ 0, 1, 2, 3, 4, 5 ]
                },
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                },
                isObject: function(e) {
                    return "[object Object]" === Object.prototype.toString.call(e);
                },
                isPromise: function(e) {
                    return !!e && ("object" === t(e) || "function" == typeof e) && "function" == typeof e.then;
                },
                isNull: function(e) {
                    return null === e;
                },
                isUndefined: function(e) {
                    return void 0 === e;
                },
                isUndef: function(e) {
                    return void 0 === e;
                },
                isNotNull_string: function(e) {
                    return null != e && "" !== e;
                },
                isFn: function(e) {
                    return e && "function" == typeof e;
                },
                getStorage: function(e, t, r) {
                    n.getStorage({
                        key: e,
                        success: function(e) {
                            e.data && "" != e.data ? t && t(e.data) : r && r();
                        },
                        fail: function() {
                            r && r();
                        }
                    });
                },
                setStorage: function(e, t) {
                    r("设置缓存"), r("key：" + e), r("data：" + JSON.stringify(t)), n.setStorage({
                        key: e,
                        data: t
                    });
                },
                setStorageSync: function(e, t) {
                    n.setStorageSync(e, t);
                },
                getStorageSync: function(e) {
                    return n.getStorageSync(e);
                },
                clearStorageSync: function() {
                    n.clearStorageSync();
                },
                removeStorageSync: function(e) {
                    n.removeStorageSync(e);
                },
                getImageInfo: function(e, t, n) {
                    e = e, console.log("====================3"), wx.getImageInfo({
                        src: e,
                        success: function(e) {
                            t && "function" == typeof t && t(e);
                        },
                        fail: function(e) {
                            n && "function" == typeof n && n(e);
                        }
                    }), console.log("====================4");
                },
                downloadFile: function(e, t) {
                    e = e, wx.downloadFile({
                        url: e,
                        success: function(e) {
                            t && "function" == typeof t && t(e);
                        }
                    });
                },
                downloadFile_PromiseFc: function(e) {
                    return new Promise(function(t, n) {
                        "http" !== e.substring(0, 4) ? t(e) : (r("url:" + (e = e)), wx.downloadFile({
                            url: e,
                            success: function(e) {
                                e && e.tempFilePath ? t(e.tempFilePath) : n("not find tempFilePath");
                            },
                            fail: function(e) {
                                n(e);
                            }
                        }));
                    });
                },
                saveFile: function(e) {
                    n.saveFile({
                        tempFilePath: e,
                        success: function(e) {
                            r("保存成功:" + JSON.stringify(e));
                        }
                    });
                },
                downLoadAndSaveFile_PromiseFc: function(e) {
                    return new Promise(function(t, o) {
                        r("准备下载并保存图片:" + e), "http" === e.substring(0, 4) ? (e = e, n.downloadFile({
                            url: e,
                            success: function(e) {
                                r("下载背景图成功：" + JSON.stringify(e)), e && e.tempFilePath ? n.saveFile({
                                    tempFilePath: e.tempFilePath,
                                    success: function(n) {
                                        r("保存背景图成功:" + JSON.stringify(n)), n && n.savedFilePath ? t(n.savedFilePath) : t(e.tempFilePath);
                                    },
                                    fail: function(n) {
                                        t(e.tempFilePath);
                                    }
                                }) : o("not find tempFilePath");
                            },
                            fail: function(e) {
                                o(e);
                            }
                        })) : t(e);
                    });
                },
                checkFile_PromiseFc: function(e) {
                    return new Promise(function(t, r) {
                        n.getSavedFileList({
                            success: function(n) {
                                var r = n.fileList.findIndex(function(t) {
                                    return t.filePath === e;
                                });
                                t(r);
                            },
                            fail: function(e) {
                                r(e);
                            }
                        });
                    });
                },
                removeSavedFile: function(e) {
                    n.getSavedFileList({
                        success: function(t) {
                            t.fileList.findIndex(function(t) {
                                return t.filePath === e;
                            }) >= 0 && n.removeSavedFile({
                                filePath: e
                            });
                        }
                    });
                },
                fileNameInPath: function(e) {
                    var t = e.split("/");
                    return t[t.length - 1];
                },
                getImageInfo_PromiseFc: function(e) {
                    return new Promise(function(t, n) {
                        r("准备获取图片信息:" + e), e = e, console.log("====================1"), wx.getImageInfo({
                            src: e,
                            success: function(e) {
                                r("获取图片信息成功:" + JSON.stringify(e)), t(e);
                            },
                            fail: function(e) {
                                r("获取图片信息失败:" + JSON.stringify(e)), n(e);
                            }
                        }), console.log("====================2");
                    });
                },
                previewImage: function(e) {
                    "string" == typeof e && (e = [ e ]), n.previewImage({
                        urls: e
                    });
                },
                actionSheet: function(e, t) {
                    for (var n = [], r = 0; r < e.array.length; r++) switch (e.array[r]) {
                      case "sinaweibo":
                        n[r] = "新浪微博";
                        break;

                      case "qq":
                        n[r] = "QQ";
                        break;

                      case "weixin":
                        n[r] = "微信";
                        break;

                      case "WXSceneSession":
                        n[r] = "微信好友";
                        break;

                      case "WXSenceTimeline":
                        n[r] = "微信朋友圈";
                        break;

                      case "WXSceneFavorite":
                        n[r] = "微信收藏";
                        break;

                      case 0:
                        n[r] = "图文链接";
                        break;

                      case 1:
                        n[r] = "纯文字";
                        break;

                      case 2:
                        n[r] = "纯图片";
                        break;

                      case 3:
                        n[r] = "音乐";
                        break;

                      case 4:
                        n[r] = "视频";
                        break;

                      case 5:
                        n[r] = "小程序";
                    }
                    this.showActionSheet(n, t);
                },
                showActionSheet: function(e, t) {
                    n.showActionSheet({
                        itemList: e,
                        success: function(e) {
                            t && "function" == typeof t && t(e.tapIndex);
                        }
                    });
                },
                getProvider: function(e, t, r) {
                    var o = this;
                    n.getProvider({
                        service: e,
                        success: function(n) {
                            if (r) {
                                var i = {};
                                i.array = n.provider, o.actionSheet(i, function(e) {
                                    t && "function" == typeof t && t(n.provider[e]);
                                });
                            } else if ("payment" == e) {
                                for (var a = n.provider, s = [], u = 0; u < a.length; u++) "wxpay" == a[u] ? s[u] = {
                                    name: "微信支付",
                                    value: a[u],
                                    img: "/static/image/wei.png"
                                } : "alipay" == a[u] && (s[u] = {
                                    name: "支付宝支付",
                                    value: a[u],
                                    img: "/static/image/ali.png"
                                });
                                t && "function" == typeof t && t(s);
                            } else t && "function" == typeof t && t(n);
                        }
                    });
                }
            };
            e.exports = o;
        }).call(this, r("543d").default);
    },
    "96cf": function(e, n) {
        !function(n) {
            var r, o = Object.prototype, i = o.hasOwnProperty, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator", u = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag", f = "object" === t(e), l = n.regeneratorRuntime;
            if (l) f && (e.exports = l); else {
                (l = n.regeneratorRuntime = f ? e.exports : {}).wrap = w;
                var d = "suspendedStart", h = "suspendedYield", p = "executing", v = "completed", g = {}, y = {};
                y[s] = function() {
                    return this;
                };
                var m = Object.getPrototypeOf, b = m && m(m(I([])));
                b && b !== o && i.call(b, s) && (y = b);
                var _ = O.prototype = k.prototype = Object.create(y);
                S.prototype = _.constructor = O, O.constructor = S, O[c] = S.displayName = "GeneratorFunction", 
                l.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === S || "GeneratorFunction" === (t.displayName || t.name));
                }, l.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, O) : (e.__proto__ = O, c in e || (e[c] = "GeneratorFunction")), 
                    e.prototype = Object.create(_), e;
                }, l.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, A(P.prototype), P.prototype[u] = function() {
                    return this;
                }, l.AsyncIterator = P, l.async = function(e, t, n, r) {
                    var o = new P(w(e, t, n, r));
                    return l.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                        return e.done ? e.value : o.next();
                    });
                }, A(_), _[c] = "Generator", _[s] = function() {
                    return this;
                }, _.toString = function() {
                    return "[object Generator]";
                }, l.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(), function n() {
                        for (;t.length; ) {
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, l.values = I, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = r, this.tryEntries.forEach(j), !e) for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;
                        function n(n, o) {
                            return s.type = "throw", s.arg = e, t.next = n, o && (t.method = "next", t.arg = r), 
                            !!o;
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o], s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var u = i.call(a, "catchLoc"), c = i.call(a, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break;
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, 
                        g) : this.complete(a);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                        this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                        g;
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), j(n), g;
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    j(n);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: I(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = r), g;
                    }
                };
            }
            function w(e, t, n, r) {
                var o = t && t.prototype instanceof k ? t : k, i = Object.create(o.prototype), a = new C(r || []);
                return i._invoke = function(e, t, n) {
                    var r = d;
                    return function(o, i) {
                        if (r === p) throw new Error("Generator is already running");
                        if (r === v) {
                            if ("throw" === o) throw i;
                            return D();
                        }
                        for (n.method = o, n.arg = i; ;) {
                            var a = n.delegate;
                            if (a) {
                                var s = T(a, n);
                                if (s) {
                                    if (s === g) continue;
                                    return s;
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if (r === d) throw r = v, n.arg;
                                n.dispatchException(n.arg);
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = p;
                            var u = x(e, t, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? v : h, u.arg === g) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                };
                            }
                            "throw" === u.type && (r = v, n.method = "throw", n.arg = u.arg);
                        }
                    };
                }(e, n, a), i;
            }
            function x(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            function k() {}
            function S() {}
            function O() {}
            function A(e) {
                [ "next", "throw", "return" ].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function P(e) {
                function n(r, o, a, s) {
                    var u = x(e[r], e, o);
                    if ("throw" !== u.type) {
                        var c = u.arg, f = c.value;
                        return f && "object" === t(f) && i.call(f, "__await") ? Promise.resolve(f.__await).then(function(e) {
                            n("next", e, a, s);
                        }, function(e) {
                            n("throw", e, a, s);
                        }) : Promise.resolve(f).then(function(e) {
                            c.value = e, a(c);
                        }, function(e) {
                            return n("throw", e, a, s);
                        });
                    }
                    s(u.arg);
                }
                var r;
                this._invoke = function(e, t) {
                    function o() {
                        return new Promise(function(r, o) {
                            n(e, t, r, o);
                        });
                    }
                    return r = r ? r.then(o, o) : o();
                };
            }
            function T(e, t) {
                var n = e.iterator[t.method];
                if (n === r) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = r, T(e, t), "throw" === t.method)) return g;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return g;
                }
                var o = x(n, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                g;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = r), t.delegate = null, g) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, g);
            }
            function E(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function j(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function C(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(E, this), this.reset(!0);
            }
            function I(e) {
                if (e) {
                    var t = e[s];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, o = function t() {
                            for (;++n < e.length; ) if (i.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = r, t.done = !0, t;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: D
                };
            }
            function D() {
                return {
                    value: r,
                    done: !0
                };
            }
        }(function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : t(self)) && self;
        }() || Function("return this")());
    },
    "978e": function(e) {
        function t(t, n, r) {
            return e.apply(this, arguments);
        }
        return t.toString = function() {
            return e.toString();
        }, t;
    }(function(e, n, r) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.pathToBase64 = function(e) {
            return new Promise(function(n, r) {
                if ("object" === ("undefined" == typeof window ? "undefined" : t(window)) && "document" in window) {
                    if ("function" == typeof FileReader) {
                        var o = new XMLHttpRequest();
                        return o.open("GET", e, !0), o.responseType = "blob", o.onload = function() {
                            if (200 === this.status) {
                                var e = new FileReader();
                                e.onload = function(e) {
                                    n(e.target.result);
                                }, e.onerror = r, e.readAsDataURL(this.response);
                            }
                        }, o.onerror = r, void o.send();
                    }
                    var i = document.createElement("canvas"), a = i.getContext("2d"), s = new Image();
                    return s.onload = function() {
                        i.width = s.width, i.height = s.height, a.drawImage(s, 0, 0), n(i.toDataURL()), 
                        i.height = i.width = 0;
                    }, s.onerror = r, void (s.src = e);
                }
                "object" !== ("undefined" == typeof plus ? "undefined" : t(plus)) ? "object" === ("undefined" == typeof wx ? "undefined" : t(wx)) && wx.canIUse("getFileSystemManager") ? wx.getFileSystemManager().readFile({
                    filePath: e,
                    encoding: "base64",
                    success: function(e) {
                        n("data:image/png;base64," + e.data);
                    },
                    fail: function(e) {
                        r(e);
                    }
                }) : r(new Error("not support")) : plus.io.resolveLocalFileSystemURL(function(e) {
                    if (0 === e.indexOf("_www") || 0 === e.indexOf("_doc") || 0 === e.indexOf("_documents") || 0 === e.indexOf("_downloads")) return e;
                    if (0 === e.indexOf("file://")) return e;
                    if (0 === e.indexOf("/storage/emulated/0/")) return e;
                    if (0 === e.indexOf("/")) {
                        var t = plus.io.convertAbsoluteFileSystem(e);
                        if (t !== e) return t;
                        e = e.substr(1);
                    }
                    return "_www/" + e;
                }(e), function(e) {
                    e.file(function(e) {
                        var t = new plus.io.FileReader();
                        t.onload = function(e) {
                            n(e.target.result);
                        }, t.onerror = function(e) {
                            r(e);
                        }, t.readAsDataURL(e);
                    }, function(e) {
                        r(e);
                    });
                }, function(e) {
                    r(e);
                });
            });
        }, n.base64ToPath = function(e) {
            return new Promise(function(n, r) {
                if ("object" === ("undefined" == typeof window ? "undefined" : t(window)) && "document" in window) {
                    for (var o = (e = e.split(","))[0].match(/:(.*?);/)[1], i = atob(e[1]), a = i.length, s = new Uint8Array(a); a--; ) s[a] = i.charCodeAt(a);
                    return n((window.URL || window.webkitURL).createObjectURL(new Blob([ s ], {
                        type: o
                    })));
                }
                var u = e.match(/data\:\S+\/(\S+);/);
                u ? u = u[1] : r(new Error("base64 error"));
                var c = Date.now() + "." + u;
                if ("object" !== ("undefined" == typeof plus ? "undefined" : t(plus))) if ("object" === ("undefined" == typeof wx ? "undefined" : t(wx)) && wx.canIUse("getFileSystemManager")) {
                    var f = wx.env.USER_DATA_PATH + "/" + c;
                    wx.getFileSystemManager().writeFile({
                        filePath: f,
                        data: e.replace(/^data:\S+\/\S+;base64,/, ""),
                        encoding: "base64",
                        success: function() {
                            n(f);
                        },
                        fail: function(e) {
                            r(e);
                        }
                    });
                } else r(new Error("not support")); else {
                    var l = new plus.nativeObj.Bitmap("bitmap" + Date.now());
                    l.loadBase64Data(e, function() {
                        var e = "_doc/uniapp_temp/" + c;
                        l.save(e, {}, function() {
                            l.clear(), n(e);
                        }, function(e) {
                            l.clear(), r(e);
                        });
                    }, function(e) {
                        l.clear(), r(e);
                    });
                }
            });
        };
    }),
    9884: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                e.showToast({
                    title: t,
                    icon: "none",
                    duration: n
                });
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    "997e": function(e, n, r) {
        (function(e) {
            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = /%[sdj%]/g;
            function i(e) {
                if (!e || !e.length) return null;
                var t = {};
                return e.forEach(function(e) {
                    var n = e.field;
                    t[n] = t[n] || [], t[n].push(e);
                }), t;
            }
            function a() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = 1, i = t[0], a = t.length;
                if ("function" == typeof i) return i.apply(null, t.slice(1));
                if ("string" == typeof i) {
                    for (var s = String(i).replace(o, function(e) {
                        if ("%%" === e) return "%";
                        if (r >= a) return e;
                        switch (e) {
                          case "%s":
                            return String(t[r++]);

                          case "%d":
                            return Number(t[r++]);

                          case "%j":
                            try {
                                return JSON.stringify(t[r++]);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                return "[Circular]";
                            }
                            break;

                          default:
                            return e;
                        }
                    }), u = t[r]; r < a; u = t[++r]) s += " " + u;
                    return s;
                }
                return i;
            }
            function s(e, t) {
                return null == e || !("array" !== t || !Array.isArray(e) || e.length) || !(!function(e) {
                    return "string" === e || "url" === e || "hex" === e || "email" === e || "pattern" === e;
                }(t) || "string" != typeof e || e);
            }
            function u(e, t, n) {
                var r = 0, o = e.length;
                !function i(a) {
                    if (a && a.length) n(a); else {
                        var s = r;
                        r += 1, s < o ? t(e[s], i) : n([]);
                    }
                }([]);
            }
            function c(e, t, n, r) {
                if (t.first) {
                    var o = new Promise(function(t, o) {
                        u(function(e) {
                            var t = [];
                            return Object.keys(e).forEach(function(n) {
                                t.push.apply(t, e[n]);
                            }), t;
                        }(e), n, function(e) {
                            return r(e), e.length ? o({
                                errors: e,
                                fields: i(e)
                            }) : t();
                        });
                    });
                    return o.catch(function(e) {
                        return e;
                    }), o;
                }
                var a = t.firstFields || [];
                !0 === a && (a = Object.keys(e));
                var s = Object.keys(e), c = s.length, f = 0, l = [], d = new Promise(function(t, o) {
                    var d = function(e) {
                        if (l.push.apply(l, e), ++f === c) return r(l), l.length ? o({
                            errors: l,
                            fields: i(l)
                        }) : t();
                    };
                    s.length || (r(l), t()), s.forEach(function(t) {
                        var r = e[t];
                        -1 !== a.indexOf(t) ? u(r, n, d) : function(e, t, n) {
                            var r = [], o = 0, i = e.length;
                            function a(e) {
                                r.push.apply(r, e), ++o === i && n(r);
                            }
                            e.forEach(function(e) {
                                t(e, a);
                            });
                        }(r, n, d);
                    });
                });
                return d.catch(function(e) {
                    return e;
                }), d;
            }
            function f(e) {
                return function(t) {
                    return t && t.message ? (t.field = t.field || e.fullField, t) : {
                        message: "function" == typeof t ? t() : t,
                        field: t.field || e.fullField
                    };
                };
            }
            function l(e, n) {
                if (n) for (var o in n) if (n.hasOwnProperty(o)) {
                    var i = n[o];
                    "object" === t(i) && "object" === t(e[o]) ? e[o] = r({}, e[o], {}, i) : e[o] = i;
                }
                return e;
            }
            function d(e, t, n, r, o, i) {
                !e.required || n.hasOwnProperty(e.field) && !s(t, i || e.type) || r.push(a(o.messages.required, e.fullField));
            }
            void 0 !== e && Object({
                VUE_APP_NAME: "图纸投稿1",
                VUE_APP_PLATFORM: "mp-weixin",
                NODE_ENV: "production",
                BASE_URL: "/"
            });
            var h = {
                email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
                hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
            }, p = {
                integer: function(e) {
                    return p.number(e) && parseInt(e, 10) === e;
                },
                float: function(e) {
                    return p.number(e) && !p.integer(e);
                },
                array: function(e) {
                    return Array.isArray(e);
                },
                regexp: function(e) {
                    if (e instanceof RegExp) return !0;
                    try {
                        return !!new RegExp(e);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return !1;
                    }
                },
                date: function(e) {
                    return "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear;
                },
                number: function(e) {
                    return !isNaN(e) && "number" == typeof +e;
                },
                object: function(e) {
                    return "object" === t(e) && !p.array(e);
                },
                method: function(e) {
                    return "function" == typeof e;
                },
                email: function(e) {
                    return "string" == typeof e && !!e.match(h.email) && e.length < 255;
                },
                url: function(e) {
                    return "string" == typeof e && !!e.match(h.url);
                },
                hex: function(e) {
                    return "string" == typeof e && !!e.match(h.hex);
                }
            };
            var v = "enum";
            var g = {
                required: d,
                whitespace: function(e, t, n, r, o) {
                    (/^\s+$/.test(t) || "" === t) && r.push(a(o.messages.whitespace, e.fullField));
                },
                type: function(e, n, r, o, i) {
                    if (e.required && void 0 === n) d(e, n, r, o, i); else {
                        var s = e.type;
                        [ "integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex" ].indexOf(s) > -1 ? p[s](n) || o.push(a(i.messages.types[s], e.fullField, e.type)) : s && t(n) !== e.type && o.push(a(i.messages.types[s], e.fullField, e.type));
                    }
                },
                range: function(e, t, n, r, o) {
                    var i = "number" == typeof e.len, s = "number" == typeof e.min, u = "number" == typeof e.max, c = t, f = null, l = "number" == typeof t, d = "string" == typeof t, h = Array.isArray(t);
                    if (l ? f = "number" : d ? f = "string" : h && (f = "array"), !f) return !1;
                    h && (c = t.length), d && (c = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), 
                    i ? c !== e.len && r.push(a(o.messages[f].len, e.fullField, e.len)) : s && !u && c < e.min ? r.push(a(o.messages[f].min, e.fullField, e.min)) : u && !s && c > e.max ? r.push(a(o.messages[f].max, e.fullField, e.max)) : s && u && (c < e.min || c > e.max) && r.push(a(o.messages[f].range, e.fullField, e.min, e.max));
                },
                enum: function(e, t, n, r, o) {
                    e[v] = Array.isArray(e[v]) ? e[v] : [], -1 === e[v].indexOf(t) && r.push(a(o.messages[v], e.fullField, e[v].join(", ")));
                },
                pattern: function(e, t, n, r, o) {
                    if (e.pattern) if (e.pattern instanceof RegExp) e.pattern.lastIndex = 0, e.pattern.test(t) || r.push(a(o.messages.pattern.mismatch, e.fullField, t, e.pattern)); else if ("string" == typeof e.pattern) {
                        new RegExp(e.pattern).test(t) || r.push(a(o.messages.pattern.mismatch, e.fullField, t, e.pattern));
                    }
                }
            };
            function y(e, t, n, r, o) {
                var i = e.type, a = [];
                if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                    if (s(t, i) && !e.required) return n();
                    g.required(e, t, r, a, o, i), s(t, i) || g.type(e, t, r, a, o);
                }
                n(a);
            }
            var m = {
                string: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t, "string") && !e.required) return n();
                        g.required(e, t, r, i, o, "string"), s(t, "string") || (g.type(e, t, r, i, o), g.range(e, t, r, i, o), 
                        g.pattern(e, t, r, i, o), !0 === e.whitespace && g.whitespace(e, t, r, i, o));
                    }
                    n(i);
                },
                method: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t) && !e.required) return n();
                        g.required(e, t, r, i, o), void 0 !== t && g.type(e, t, r, i, o);
                    }
                    n(i);
                },
                number: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if ("" === t && (t = void 0), s(t) && !e.required) return n();
                        g.required(e, t, r, i, o), void 0 !== t && (g.type(e, t, r, i, o), g.range(e, t, r, i, o));
                    }
                    n(i);
                },
                boolean: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t) && !e.required) return n();
                        g.required(e, t, r, i, o), void 0 !== t && g.type(e, t, r, i, o);
                    }
                    n(i);
                },
                regexp: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t) && !e.required) return n();
                        g.required(e, t, r, i, o), s(t) || g.type(e, t, r, i, o);
                    }
                    n(i);
                },
                integer: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t) && !e.required) return n();
                        g.required(e, t, r, i, o), void 0 !== t && (g.type(e, t, r, i, o), g.range(e, t, r, i, o));
                    }
                    n(i);
                },
                float: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t) && !e.required) return n();
                        g.required(e, t, r, i, o), void 0 !== t && (g.type(e, t, r, i, o), g.range(e, t, r, i, o));
                    }
                    n(i);
                },
                array: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t, "array") && !e.required) return n();
                        g.required(e, t, r, i, o, "array"), s(t, "array") || (g.type(e, t, r, i, o), g.range(e, t, r, i, o));
                    }
                    n(i);
                },
                object: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t) && !e.required) return n();
                        g.required(e, t, r, i, o), void 0 !== t && g.type(e, t, r, i, o);
                    }
                    n(i);
                },
                enum: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t) && !e.required) return n();
                        g.required(e, t, r, i, o), void 0 !== t && g.enum(e, t, r, i, o);
                    }
                    n(i);
                },
                pattern: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t, "string") && !e.required) return n();
                        g.required(e, t, r, i, o), s(t, "string") || g.pattern(e, t, r, i, o);
                    }
                    n(i);
                },
                date: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t) && !e.required) return n();
                        var a;
                        g.required(e, t, r, i, o), s(t) || (a = "number" == typeof t ? new Date(t) : t, 
                        g.type(e, a, r, i, o), a && g.range(e, a.getTime(), r, i, o));
                    }
                    n(i);
                },
                url: y,
                hex: y,
                email: y,
                required: function(e, n, r, o, i) {
                    var a = [], s = Array.isArray(n) ? "array" : t(n);
                    g.required(e, n, o, a, i, s), r(a);
                },
                any: function(e, t, n, r, o) {
                    var i = [];
                    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
                        if (s(t) && !e.required) return n();
                        g.required(e, t, r, i, o);
                    }
                    n(i);
                }
            };
            function b() {
                return {
                    default: "Validation error on field %s",
                    required: "%s is required",
                    enum: "%s must be one of %s",
                    whitespace: "%s cannot be empty",
                    date: {
                        format: "%s date %s is invalid for format %s",
                        parse: "%s date could not be parsed, %s is invalid ",
                        invalid: "%s date %s is invalid"
                    },
                    types: {
                        string: "%s is not a %s",
                        method: "%s is not a %s (function)",
                        array: "%s is not an %s",
                        object: "%s is not an %s",
                        number: "%s is not a %s",
                        date: "%s is not a %s",
                        boolean: "%s is not a %s",
                        integer: "%s is not an %s",
                        float: "%s is not a %s",
                        regexp: "%s is not a valid %s",
                        email: "%s is not a valid %s",
                        url: "%s is not a valid %s",
                        hex: "%s is not a valid %s"
                    },
                    string: {
                        len: "%s must be exactly %s characters",
                        min: "%s must be at least %s characters",
                        max: "%s cannot be longer than %s characters",
                        range: "%s must be between %s and %s characters"
                    },
                    number: {
                        len: "%s must equal %s",
                        min: "%s cannot be less than %s",
                        max: "%s cannot be greater than %s",
                        range: "%s must be between %s and %s"
                    },
                    array: {
                        len: "%s must be exactly %s in length",
                        min: "%s cannot be less than %s in length",
                        max: "%s cannot be greater than %s in length",
                        range: "%s must be between %s and %s in length"
                    },
                    pattern: {
                        mismatch: "%s value %s does not match pattern %s"
                    },
                    clone: function() {
                        var e = JSON.parse(JSON.stringify(this));
                        return e.clone = this.clone, e;
                    }
                };
            }
            var _ = b();
            function w(e) {
                this.rules = null, this._messages = _, this.define(e);
            }
            w.prototype = {
                messages: function(e) {
                    return e && (this._messages = l(b(), e)), this._messages;
                },
                define: function(e) {
                    if (!e) throw new Error("Cannot configure a schema with no rules");
                    if ("object" !== t(e) || Array.isArray(e)) throw new Error("Rules must be an object");
                    var n, r;
                    for (n in this.rules = {}, e) e.hasOwnProperty(n) && (r = e[n], this.rules[n] = Array.isArray(r) ? r : [ r ]);
                },
                validate: function(e, n, o) {
                    var s = this;
                    void 0 === n && (n = {}), void 0 === o && (o = function() {});
                    var u, d, h = e, p = n, v = o;
                    if ("function" == typeof p && (v = p, p = {}), !this.rules || 0 === Object.keys(this.rules).length) return v && v(), 
                    Promise.resolve();
                    if (p.messages) {
                        var g = this.messages();
                        g === _ && (g = b()), l(g, p.messages), p.messages = g;
                    } else p.messages = this.messages();
                    var y = {};
                    (p.keys || Object.keys(this.rules)).forEach(function(t) {
                        u = s.rules[t], d = h[t], u.forEach(function(n) {
                            var o = n;
                            "function" == typeof o.transform && (h === e && (h = r({}, h)), d = h[t] = o.transform(d)), 
                            (o = "function" == typeof o ? {
                                validator: o
                            } : r({}, o)).validator = s.getValidationMethod(o), o.field = t, o.fullField = o.fullField || t, 
                            o.type = s.getType(o), o.validator && (y[t] = y[t] || [], y[t].push({
                                rule: o,
                                value: d,
                                source: h,
                                field: t
                            }));
                        });
                    });
                    var m = {};
                    return c(y, p, function(e, n) {
                        var o, i = e.rule, s = !("object" !== i.type && "array" !== i.type || "object" !== t(i.fields) && "object" !== t(i.defaultField));
                        function u(e, t) {
                            return r({}, t, {
                                fullField: i.fullField + "." + e
                            });
                        }
                        function c(t) {
                            void 0 === t && (t = []);
                            var o = t;
                            if (Array.isArray(o) || (o = [ o ]), !p.suppressWarning && o.length && w.warning("async-validator:", o), 
                            o.length && i.message && (o = [].concat(i.message)), o = o.map(f(i)), p.first && o.length) return m[i.field] = 1, 
                            n(o);
                            if (s) {
                                if (i.required && !e.value) return o = i.message ? [].concat(i.message).map(f(i)) : p.error ? [ p.error(i, a(p.messages.required, i.field)) ] : [], 
                                n(o);
                                var c = {};
                                if (i.defaultField) for (var l in e.value) e.value.hasOwnProperty(l) && (c[l] = i.defaultField);
                                for (var d in c = r({}, c, {}, e.rule.fields)) if (c.hasOwnProperty(d)) {
                                    var h = Array.isArray(c[d]) ? c[d] : [ c[d] ];
                                    c[d] = h.map(u.bind(null, d));
                                }
                                var v = new w(c);
                                v.messages(p.messages), e.rule.options && (e.rule.options.messages = p.messages, 
                                e.rule.options.error = p.error), v.validate(e.value, e.rule.options || p, function(e) {
                                    var t = [];
                                    o && o.length && t.push.apply(t, o), e && e.length && t.push.apply(t, e), n(t.length ? t : null);
                                });
                            } else n(o);
                        }
                        s = s && (i.required || !i.required && e.value), i.field = e.field, i.asyncValidator ? o = i.asyncValidator(i, e.value, c, e.source, p) : i.validator && (!0 === (o = i.validator(i, e.value, c, e.source, p)) ? c() : !1 === o ? c(i.message || i.field + " fails") : o instanceof Array ? c(o) : o instanceof Error && c(o.message)), 
                        o && o.then && o.then(function() {
                            return c();
                        }, function(e) {
                            return c(e);
                        });
                    }, function(e) {
                        !function(e) {
                            var t, n = [], r = {};
                            function o(e) {
                                var t;
                                Array.isArray(e) ? n = (t = n).concat.apply(t, e) : n.push(e);
                            }
                            for (t = 0; t < e.length; t++) o(e[t]);
                            n.length ? r = i(n) : (n = null, r = null), v(n, r);
                        }(e);
                    });
                },
                getType: function(e) {
                    if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !m.hasOwnProperty(e.type)) throw new Error(a("Unknown rule type %s", e.type));
                    return e.type || "string";
                },
                getValidationMethod: function(e) {
                    if ("function" == typeof e.validator) return e.validator;
                    var t = Object.keys(e), n = t.indexOf("message");
                    return -1 !== n && t.splice(n, 1), 1 === t.length && "required" === t[0] ? m.required : m[this.getType(e)] || !1;
                }
            }, w.register = function(e, t) {
                if ("function" != typeof t) throw new Error("Cannot register a validator by type, validator is not a function");
                m[e] = t;
            }, w.warning = function() {}, w.messages = _;
            var x = w;
            n.default = x;
        }).call(this, r("4362"));
    },
    a0e6: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rpx";
            return e = String(e), r.default.number(e) ? "".concat(e).concat(t) : e;
        };
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("1c23"));
    },
    a34a: function(e, t, n) {
        e.exports = n("bbdd");
    },
    a5e4: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.os = function() {
                return e.getSystemInfoSync().platform;
            }, t.sys = function() {
                return e.getSystemInfoSync();
            };
        }).call(this, n("543d").default);
    },
    a637: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            primary: "#2979ff",
            primaryDark: "#2b85e4",
            primaryDisabled: "#a0cfff",
            primaryLight: "#ecf5ff",
            bgColor: "#f3f4f6",
            info: "#909399",
            infoDark: "#82848a",
            infoDisabled: "#c8c9cc",
            infoLight: "#f4f4f5",
            warning: "#ff9900",
            warningDark: "#f29100",
            warningDisabled: "#fcbd71",
            warningLight: "#fdf6ec",
            error: "#fa3534",
            errorDark: "#dd6161",
            errorDisabled: "#fab6b6",
            errorLight: "#fef0f0",
            success: "#19be6b",
            successDark: "#18b566",
            successDisabled: "#71d5a1",
            successLight: "#dbf1e1",
            mainColor: "#303133",
            contentColor: "#606266",
            tipsColor: "#909399",
            lightColor: "#c0c4cc",
            borderColor: "#e4e7ed"
        };
        t.default = r;
    },
    a85f: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function(e, t) {
            if (e >= 0 && t > 0 && t >= e) {
                var n = t - e + 1;
                return Math.floor(Math.random() * n + e);
            }
            return 0;
        };
        t.default = r;
    },
    a995: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("f967")), o = i(n("1c23"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            var s = new (function() {
                function t() {
                    var e = this;
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t), this.config = {
                        baseUrl: "",
                        header: {},
                        method: "POST",
                        dataType: "json",
                        responseType: "text",
                        showLoading: !0,
                        loadingText: "请求中...",
                        loadingTime: 800,
                        timer: null,
                        originalData: !1,
                        loadingMask: !0
                    }, this.interceptor = {
                        request: null,
                        response: null
                    }, this.get = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.request({
                            method: "GET",
                            url: t,
                            header: r,
                            data: n
                        });
                    }, this.post = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.request({
                            url: t,
                            method: "POST",
                            header: r,
                            data: n
                        });
                    }, this.put = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.request({
                            url: t,
                            method: "PUT",
                            header: r,
                            data: n
                        });
                    }, this.delete = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return e.request({
                            url: t,
                            method: "DELETE",
                            header: r,
                            data: n
                        });
                    };
                }
                return function(e, t, n) {
                    t && a(e.prototype, t), n && a(e, n);
                }(t, [ {
                    key: "setConfig",
                    value: function(e) {
                        this.config = (0, r.default)(this.config, e);
                    }
                }, {
                    key: "request",
                    value: function() {
                        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (this.interceptor.request && "function" == typeof this.interceptor.request) {
                            var r = this.interceptor.request(n);
                            if (!1 === r) return new Promise(function() {});
                            this.options = r;
                        }
                        return n.dataType = n.dataType || this.config.dataType, n.responseType = n.responseType || this.config.responseType, 
                        n.url = n.url || "", n.params = n.params || {}, n.header = Object.assign({}, this.config.header, n.header), 
                        n.method = n.method || this.config.method, new Promise(function(r, i) {
                            n.complete = function(n) {
                                if (e.hideLoading(), clearTimeout(t.config.timer), t.config.timer = null, t.config.originalData) if (t.interceptor.response && "function" == typeof t.interceptor.response) {
                                    var o = t.interceptor.response(n);
                                    !1 !== o ? r(o) : i(n);
                                } else r(n); else if (200 == n.statusCode) if (t.interceptor.response && "function" == typeof t.interceptor.response) {
                                    var a = t.interceptor.response(n.data);
                                    !1 !== a ? r(a) : i(n.data);
                                } else r(n.data); else i(n);
                            }, n.url = o.default.url(n.url) ? n.url : t.config.baseUrl + (0 == n.url.indexOf("/") ? n.url : "/" + n.url), 
                            t.config.showLoading && !t.config.timer && (t.config.timer = setTimeout(function() {
                                e.showLoading({
                                    title: t.config.loadingText,
                                    mask: t.config.loadingMask
                                }), t.config.timer = null;
                            }, t.config.loadingTime)), e.request(n);
                        });
                    }
                } ]), t;
            }())();
            t.default = s;
        }).call(this, n("543d").default);
    },
    a9d0: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = T(n("3db2")), o = T(n("a995")), i = T(n("cd31")), a = T(n("2c02")), s = T(n("047d")), u = T(n("4068")), c = T(n("efdb")), f = T(n("3787")), l = T(n("a637")), d = T(n("6c9e")), h = T(n("0249")), p = T(n("5bdc")), v = T(n("f967")), g = T(n("a0e6")), y = T(n("1c23")), m = T(n("a85f")), b = T(n("4717")), _ = T(n("9884")), w = T(n("e17f")), x = T(n("b967")), k = n("a5e4"), S = T(n("cab6")), O = T(n("51fd")), A = T(n("b517")), P = T(n("49bf"));
            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var E = {
                queryParams: i.default,
                route: a.default,
                timeFormat: s.default,
                date: s.default,
                timeFrom: u.default,
                colorGradient: c.default.colorGradient,
                colorToRgba: c.default.colorToRgba,
                guid: f.default,
                color: l.default,
                sys: k.sys,
                os: k.os,
                type2icon: d.default,
                randomArray: h.default,
                wranning: function(e) {},
                get: o.default.get,
                post: o.default.post,
                put: o.default.put,
                delete: o.default.delete,
                hexToRgb: c.default.hexToRgb,
                rgbToHex: c.default.rgbToHex,
                test: y.default,
                random: m.default,
                deepClone: p.default,
                deepMerge: v.default,
                getParent: w.default,
                $parent: x.default,
                addUnit: g.default,
                trim: b.default,
                type: [ "primary", "success", "error", "warning", "info" ],
                http: o.default,
                toast: _.default,
                config: A.default,
                zIndex: P.default,
                debounce: S.default,
                throttle: O.default
            };
            e.$u = E;
            var j = {
                install: function(e) {
                    e.mixin(r.default), e.prototype.openShare && e.mixin(mpShare), e.filter("timeFormat", function(e, t) {
                        return (0, s.default)(e, t);
                    }), e.filter("date", function(e, t) {
                        return (0, s.default)(e, t);
                    }), e.filter("timeFrom", function(e, t) {
                        return (0, u.default)(e, t);
                    }), e.prototype.$u = E;
                }
            };
            t.default = j;
        }).call(this, n("543d").default);
    },
    a9ff: function(e, n, r) {
        (function(e, o) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = u(r("a34a")), a = r("37dc"), s = u(r("3f6d"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || l(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function f(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = l(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0, o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                function t(t) {
                                    return e.apply(this, arguments);
                                }
                                return t.toString = function() {
                                    return e.toString();
                                }, t;
                            }(function(e) {
                                throw e;
                            }),
                            f: o
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, a = !0, s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e;
                    },
                    e: function(e) {
                        function t(t) {
                            return e.apply(this, arguments);
                        }
                        return t.toString = function() {
                            return e.toString();
                        }, t;
                    }(function(e) {
                        s = !0, i = e;
                    }),
                    f: function() {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (s) throw i;
                        }
                    }
                };
            }
            function l(e, t) {
                if (e) {
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
                }
            }
            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function h(e, t, n, r, o, i, a) {
                try {
                    var s = e[i](a), u = s.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function p(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            h(i, r, o, a, s, "next", e);
                        }
                        function s(e) {
                            h(i, r, o, a, s, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            function v(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function g(e, t, n) {
                return t && v(e.prototype, t), n && v(e, n), e;
            }
            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach(function(t) {
                        b(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function w(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && P(e, t);
            }
            function x(e) {
                var t = A();
                return function() {
                    var n, r = T(e);
                    if (t) {
                        var o = T(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return k(this, n);
                };
            }
            function k(e, n) {
                return !n || "object" !== t(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : n;
            }
            function S(e) {
                var t = "function" == typeof Map ? new Map() : void 0;
                return (S = function(e) {
                    if (null === e || !function(e) {
                        return -1 !== Function.toString.call(e).indexOf("[native code]");
                    }(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, n);
                    }
                    function n() {
                        return O(e, arguments, T(this).constructor);
                    }
                    return n.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), P(n, e);
                })(e);
            }
            function O(e, t, n) {
                return (O = A() ? Reflect.construct : function(e, t, n) {
                    var r = [ null ];
                    r.push.apply(r, t);
                    var o = new (Function.bind.apply(e, r))();
                    return n && P(o, n.prototype), o;
                }).apply(null, arguments);
            }
            function A() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return !1;
                }
            }
            function P(e, t) {
                return (P = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function E(e, t, n) {
                return e(n = {
                    path: t,
                    exports: {},
                    require: function(e, t) {
                        return function() {
                            throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                        }(null == t && n.path);
                    }
                }, n.exports), n.exports;
            }
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;
            var j = E(function(e, t) {
                var n;
                e.exports = n = n || function(e, t) {
                    var n = Object.create || function() {
                        function e() {}
                        return function(t) {
                            var n;
                            return e.prototype = t, n = new e(), e.prototype = null, n;
                        };
                    }(), r = {}, o = r.lib = {}, i = o.Base = {
                        extend: function(e) {
                            var t = n(this);
                            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                                t.$super.init.apply(this, arguments);
                            }), t.init.prototype = t, t.$super = this, t;
                        },
                        create: function() {
                            var e = this.extend();
                            return e.init.apply(e, arguments), e;
                        },
                        init: function() {},
                        mixIn: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString);
                        },
                        clone: function() {
                            return this.init.prototype.extend(this);
                        }
                    }, a = o.WordArray = i.extend({
                        init: function(e, t) {
                            e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
                        },
                        toString: function(e) {
                            return (e || u).stringify(this);
                        },
                        concat: function(e) {
                            var t = this.words, n = e.words, r = this.sigBytes, o = e.sigBytes;
                            if (this.clamp(), r % 4) for (var i = 0; i < o; i++) {
                                var a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                t[r + i >>> 2] |= a << 24 - (r + i) % 4 * 8;
                            } else for (i = 0; i < o; i += 4) t[r + i >>> 2] = n[i >>> 2];
                            return this.sigBytes += o, this;
                        },
                        clamp: function() {
                            var t = this.words, n = this.sigBytes;
                            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e.words = this.words.slice(0), e;
                        },
                        random: function(t) {
                            for (var n, r = [], o = function(t) {
                                t = t;
                                var n = 987654321, r = 4294967295;
                                return function() {
                                    var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                                    return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1);
                                };
                            }, i = 0; i < t; i += 4) {
                                var s = o(4294967296 * (n || e.random()));
                                n = 987654071 * s(), r.push(4294967296 * s() | 0);
                            }
                            return new a.init(r, t);
                        }
                    }), s = r.enc = {}, u = s.Hex = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                                var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16));
                            }
                            return r.join("");
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                            return new a.init(n, t / 2);
                        }
                    }, c = s.Latin1 = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                                var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                r.push(String.fromCharCode(i));
                            }
                            return r.join("");
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                            return new a.init(n, t);
                        }
                    }, f = s.Utf8 = {
                        stringify: function(e) {
                            try {
                                return decodeURIComponent(escape(c.stringify(e)));
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                throw new Error("Malformed UTF-8 data");
                            }
                        },
                        parse: function(e) {
                            return c.parse(unescape(encodeURIComponent(e)));
                        }
                    }, l = o.BufferedBlockAlgorithm = i.extend({
                        reset: function() {
                            this._data = new a.init(), this._nDataBytes = 0;
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                        },
                        _process: function(t) {
                            var n = this._data, r = n.words, o = n.sigBytes, i = this.blockSize, s = o / (4 * i), u = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * i, c = e.min(4 * u, o);
                            if (u) {
                                for (var f = 0; f < u; f += i) this._doProcessBlock(r, f);
                                var l = r.splice(0, u);
                                n.sigBytes -= c;
                            }
                            return new a.init(l, c);
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._data = this._data.clone(), e;
                        },
                        _minBufferSize: 0
                    });
                    o.Hasher = l.extend({
                        cfg: i.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e), this.reset();
                        },
                        reset: function() {
                            l.reset.call(this), this._doReset();
                        },
                        update: function(e) {
                            return this._append(e), this._process(), this;
                        },
                        finalize: function(e) {
                            return e && this._append(e), this._doFinalize();
                        },
                        blockSize: 16,
                        _createHelper: function(e) {
                            return function(t, n) {
                                return new e.init(n).finalize(t);
                            };
                        },
                        _createHmacHelper: function(e) {
                            return function(t, n) {
                                return new d.HMAC.init(e, n).finalize(t);
                            };
                        }
                    });
                    var d = r.algo = {};
                    return r;
                }(Math);
            }), C = (E(function(e, t) {
                var n;
                e.exports = (n = j, function(e) {
                    var t = n, r = t.lib, o = r.WordArray, i = r.Hasher, a = t.algo, s = [];
                    !function() {
                        for (var t = 0; t < 64; t++) s[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
                    }();
                    var u = a.MD5 = i.extend({
                        _doReset: function() {
                            this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
                        },
                        _doProcessBlock: function(e, t) {
                            for (var n = 0; n < 16; n++) {
                                var r = t + n, o = e[r];
                                e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                            }
                            var i = this._hash.words, a = e[t + 0], u = e[t + 1], h = e[t + 2], p = e[t + 3], v = e[t + 4], g = e[t + 5], y = e[t + 6], m = e[t + 7], b = e[t + 8], _ = e[t + 9], w = e[t + 10], x = e[t + 11], k = e[t + 12], S = e[t + 13], O = e[t + 14], A = e[t + 15], P = i[0], T = i[1], E = i[2], j = i[3];
                            P = c(P, T, E, j, a, 7, s[0]), j = c(j, P, T, E, u, 12, s[1]), E = c(E, j, P, T, h, 17, s[2]), 
                            T = c(T, E, j, P, p, 22, s[3]), P = c(P, T, E, j, v, 7, s[4]), j = c(j, P, T, E, g, 12, s[5]), 
                            E = c(E, j, P, T, y, 17, s[6]), T = c(T, E, j, P, m, 22, s[7]), P = c(P, T, E, j, b, 7, s[8]), 
                            j = c(j, P, T, E, _, 12, s[9]), E = c(E, j, P, T, w, 17, s[10]), T = c(T, E, j, P, x, 22, s[11]), 
                            P = c(P, T, E, j, k, 7, s[12]), j = c(j, P, T, E, S, 12, s[13]), E = c(E, j, P, T, O, 17, s[14]), 
                            P = f(P, T = c(T, E, j, P, A, 22, s[15]), E, j, u, 5, s[16]), j = f(j, P, T, E, y, 9, s[17]), 
                            E = f(E, j, P, T, x, 14, s[18]), T = f(T, E, j, P, a, 20, s[19]), P = f(P, T, E, j, g, 5, s[20]), 
                            j = f(j, P, T, E, w, 9, s[21]), E = f(E, j, P, T, A, 14, s[22]), T = f(T, E, j, P, v, 20, s[23]), 
                            P = f(P, T, E, j, _, 5, s[24]), j = f(j, P, T, E, O, 9, s[25]), E = f(E, j, P, T, p, 14, s[26]), 
                            T = f(T, E, j, P, b, 20, s[27]), P = f(P, T, E, j, S, 5, s[28]), j = f(j, P, T, E, h, 9, s[29]), 
                            E = f(E, j, P, T, m, 14, s[30]), P = l(P, T = f(T, E, j, P, k, 20, s[31]), E, j, g, 4, s[32]), 
                            j = l(j, P, T, E, b, 11, s[33]), E = l(E, j, P, T, x, 16, s[34]), T = l(T, E, j, P, O, 23, s[35]), 
                            P = l(P, T, E, j, u, 4, s[36]), j = l(j, P, T, E, v, 11, s[37]), E = l(E, j, P, T, m, 16, s[38]), 
                            T = l(T, E, j, P, w, 23, s[39]), P = l(P, T, E, j, S, 4, s[40]), j = l(j, P, T, E, a, 11, s[41]), 
                            E = l(E, j, P, T, p, 16, s[42]), T = l(T, E, j, P, y, 23, s[43]), P = l(P, T, E, j, _, 4, s[44]), 
                            j = l(j, P, T, E, k, 11, s[45]), E = l(E, j, P, T, A, 16, s[46]), P = d(P, T = l(T, E, j, P, h, 23, s[47]), E, j, a, 6, s[48]), 
                            j = d(j, P, T, E, m, 10, s[49]), E = d(E, j, P, T, O, 15, s[50]), T = d(T, E, j, P, g, 21, s[51]), 
                            P = d(P, T, E, j, k, 6, s[52]), j = d(j, P, T, E, p, 10, s[53]), E = d(E, j, P, T, w, 15, s[54]), 
                            T = d(T, E, j, P, u, 21, s[55]), P = d(P, T, E, j, b, 6, s[56]), j = d(j, P, T, E, A, 10, s[57]), 
                            E = d(E, j, P, T, y, 15, s[58]), T = d(T, E, j, P, S, 21, s[59]), P = d(P, T, E, j, v, 6, s[60]), 
                            j = d(j, P, T, E, x, 10, s[61]), E = d(E, j, P, T, h, 15, s[62]), T = d(T, E, j, P, _, 21, s[63]), 
                            i[0] = i[0] + P | 0, i[1] = i[1] + T | 0, i[2] = i[2] + E | 0, i[3] = i[3] + j | 0;
                        },
                        _doFinalize: function() {
                            var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                            n[o >>> 5] |= 128 << 24 - o % 32;
                            var i = e.floor(r / 4294967296), a = r;
                            n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                            n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                            t.sigBytes = 4 * (n.length + 1), this._process();
                            for (var s = this._hash, u = s.words, c = 0; c < 4; c++) {
                                var f = u[c];
                                u[c] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8);
                            }
                            return s;
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._hash = this._hash.clone(), e;
                        }
                    });
                    function c(e, t, n, r, o, i, a) {
                        var s = e + (t & n | ~t & r) + o + a;
                        return (s << i | s >>> 32 - i) + t;
                    }
                    function f(e, t, n, r, o, i, a) {
                        var s = e + (t & r | n & ~r) + o + a;
                        return (s << i | s >>> 32 - i) + t;
                    }
                    function l(e, t, n, r, o, i, a) {
                        var s = e + (t ^ n ^ r) + o + a;
                        return (s << i | s >>> 32 - i) + t;
                    }
                    function d(e, t, n, r, o, i, a) {
                        var s = e + (n ^ (t | ~r)) + o + a;
                        return (s << i | s >>> 32 - i) + t;
                    }
                    t.MD5 = i._createHelper(u), t.HmacMD5 = i._createHmacHelper(u);
                }(Math), n.MD5);
            }), E(function(e, t) {
                var n, r, o;
                e.exports = (r = (n = j).lib.Base, o = n.enc.Utf8, void (n.algo.HMAC = r.extend({
                    init: function(e, t) {
                        e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));
                        var n = e.blockSize, r = 4 * n;
                        t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                        for (var i = this._oKey = t.clone(), a = this._iKey = t.clone(), s = i.words, u = a.words, c = 0; c < n; c++) s[c] ^= 1549556828, 
                        u[c] ^= 909522486;
                        i.sigBytes = a.sigBytes = r, this.reset();
                    },
                    reset: function() {
                        var e = this._hasher;
                        e.reset(), e.update(this._iKey);
                    },
                    update: function(e) {
                        return this._hasher.update(e), this;
                    },
                    finalize: function(e) {
                        var t = this._hasher, n = t.finalize(e);
                        return t.reset(), t.finalize(this._oKey.clone().concat(n));
                    }
                })));
            }), E(function(e, t) {
                e.exports = j.HmacMD5;
            })), I = E(function(e, t) {
                e.exports = j.enc.Utf8;
            }), D = E(function(e, t) {
                var n;
                e.exports = (n = j, function() {
                    var e = n, t = e.lib.WordArray;
                    function r(e, n, r) {
                        for (var o = [], i = 0, a = 0; a < n; a++) if (a % 4) {
                            var s = r[e.charCodeAt(a - 1)] << a % 4 * 2, u = r[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
                            o[i >>> 2] |= (s | u) << 24 - i % 4 * 8, i++;
                        }
                        return t.create(o, i);
                    }
                    e.enc.Base64 = {
                        stringify: function(e) {
                            var t = e.words, n = e.sigBytes, r = this._map;
                            e.clamp();
                            for (var o = [], i = 0; i < n; i += 3) for (var a = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; s < 4 && i + .75 * s < n; s++) o.push(r.charAt(a >>> 6 * (3 - s) & 63));
                            var u = r.charAt(64);
                            if (u) for (;o.length % 4; ) o.push(u);
                            return o.join("");
                        },
                        parse: function(e) {
                            var t = e.length, n = this._map, o = this._reverseMap;
                            if (!o) {
                                o = this._reverseMap = [];
                                for (var i = 0; i < n.length; i++) o[n.charCodeAt(i)] = i;
                            }
                            var a = n.charAt(64);
                            if (a) {
                                var s = e.indexOf(a);
                                -1 !== s && (t = s);
                            }
                            return r(e, t, o);
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    };
                }(), n.enc.Base64);
            }), L = "FUNCTION", N = "OBJECT";
            function R(_0x540418) {
                return Object["prototype"]["toString"]["call"](_0x540418)["slice"](0x209f8 ^ 0x209f0, -(0xef6f0 ^ 0xef6f1))["toLowerCase"]();
            }
            
            function $(_0x4bf485) {
                return "tcejbo".split("").reverse().join("") === R(_0x4bf485);
            }
            
            function M(_0x3381d2) {
                return _0x3381d2 && "gnirts".split("").reverse().join("") == typeof _0x3381d2 ? JSON["parse"](_0x3381d2) : _0x3381d2;
            }
            var F, B = "mp-weixin";
            "eurt".split("").reverse().join("") === Object({
                'VUE_APP_NAME': '万相更新之图库',
                "VUE_APP_PLATFORM": "mp-weixin",
                'NODE_ENV': "production",
                'BASE_URL': "/"
            })['UNI_SECURE_NETWORK'] || Object({
                "VUE_APP_NAME": '万相更新之图库',
                'VUE_APP_PLATFORM': "mp-weixin",
                "NODE_ENV": "production",
                "BASE_URL": "/"
            })['UNI_SECURE_NETWORK'], F = B;
            M(void(0xb0e82 ^ 0xb0e82));
            var U = M([{
                provider: "aliyun",
                    spaceName: "jkmmbizhi ",
                    spaceId:"mp-e9a958e4-7073-4925-ac24-2b5b3763c726",
                    clientSecret:"wJHlMvCzSgjvthO/SCjYYg==",
                    endpoint: "https://api.next.bspapp.com"
            }]) || [];
            try {
                var q = r("164f".split("").reverse().join(""))['default'] || r("164f".split("").reverse().join(""));
                q['appid'];
            } catch (_0x331174) {}
            var H = {};
            
            function V(_0x330d57) {
                var _0x1cf79b, _0x746c98, _0x1f8a14 = arguments["length"] > (0xb2bf1 ^ 0xb2bf0) && void(0xa377e ^ 0xa377e) !== arguments[0x8f8ce ^ 0x8f8cf] ? arguments[0xdbe84 ^ 0xdbe85] : {};
                return _0x1cf79b = H, _0x746c98 = _0x330d57, Object["prototype"]["hasOwnProperty"]['call'](_0x1cf79b, _0x746c98) || (H[_0x330d57] = _0x1f8a14), H[_0x330d57];
            }
            'app' === F && (H = o['_globalUniCloudObj'] ? o['_globalUniCloudObj'] : o["_globalUniCloudObj"] = {});
            var K = ["ekovni".split("").reverse().join(""), "sseccus".split("").reverse().join(""), "fail", "etelpmoc".split("").reverse().join("")],
                z = V("_globalUniCloudInterceptor");
            
            function W(_0x5df4da, _0x4fb7d0) {
                z[_0x5df4da] || (z[_0x5df4da] = {}), $(_0x4fb7d0) && Object['keys'](_0x4fb7d0)['forEach'](function(_0x27ebad) {
                    K['indexOf'](_0x27ebad) > -(0xeb5a2 ^ 0xeb5a3) && function(_0x2886f1, _0xacd021, _0x240ed7) {
                        var _0xda585c = z[_0x2886f1][_0xacd021];
                        _0xda585c || (_0xda585c = z[_0x2886f1][_0xacd021] = []), -(0x3c148 ^ 0x3c149) === _0xda585c["indexOf"](_0x240ed7) && "noitcnuf".split("").reverse().join("") == typeof _0x240ed7 && _0xda585c["push"](_0x240ed7);
                    }(_0x5df4da, _0x27ebad, _0x4fb7d0[_0x27ebad]);
                });
            }      function G(e, t) {
                z[e] || (z[e] = {}), $(t) ? Object.keys(t).forEach(function(n) {
                    K.indexOf(n) > -1 && function(e, t, n) {
                        var r = z[e][t];
                        if (r) {
                            var o = r.indexOf(n);
                            o > -1 && r.splice(o, 1);
                        }
                    }(e, n, t[n]);
                }) : delete z[e];
            }
            function J(e, t) {
                return e && 0 !== e.length ? e.reduce(function(e, n) {
                    return e.then(function() {
                        return n(t);
                    });
                }, Promise.resolve()) : Promise.resolve();
            }
            function X(e, t) {
                return z[e] && z[e][t] || [];
            }
            function Y(e) {
                W("callObject", e);
            }
            var Q = V("_globalUniCloudListener"), Z = "response", ee = "needLogin", te = "refreshToken", ne = "clientdb", re = "cloudfunction", oe = "cloudobject";
            function ie(e) {
                return Q[e] || (Q[e] = []), Q[e];
            }
            function ae(e, t) {
                var n = ie(e);
                n.includes(t) || n.push(t);
            }
            function se(e, t) {
                var n = ie(e), r = n.indexOf(t);
                -1 !== r && n.splice(r, 1);
            }
            function ue(e, t) {
                for (var n = ie(e), r = 0; r < n.length; r++) (0, n[r])(t);
            }
            var ce = !1, fe = new Promise(function(e) {
                ce && e(), function t() {
                    if ("function" == typeof getCurrentPages) {
                        var n = getCurrentPages();
                        n && n[0] && (ce = !0, e());
                    }
                    ce || setTimeout(function() {
                        t();
                    }, 30);
                }();
            });
            function le() {
                return fe;
            }
            function de(e, t) {
                return t ? function(n) {
                    var r = this, o = !1;
                    if ("callFunction" === t) {
                        var i = n && n.type || L;
                        o = i !== L;
                    }
                    var a, s = "callFunction" === t && !o;
                    a = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};
                    var u = a.then(function() {
                        return o ? Promise.resolve() : J(X(t, "invoke"), n);
                    }).then(function() {
                        return e.call(r, n);
                    }).then(function(e) {
                        return o ? Promise.resolve(e) : J(X(t, "success"), e).then(function() {
                            return J(X(t, "complete"), e);
                        }).then(function() {
                            return s && ue(Z, {
                                type: re,
                                content: e
                            }), Promise.resolve(e);
                        });
                    }, function(e) {
                        return o ? Promise.reject(e) : J(X(t, "fail"), e).then(function() {
                            return J(X(t, "complete"), e);
                        }).then(function() {
                            return ue(Z, {
                                type: re,
                                content: e
                            }), Promise.reject(e);
                        });
                    });
                    if (!(n.success || n.fail || n.complete)) return u;
                    u.then(function(e) {
                        n.success && n.success(e), n.complete && n.complete(e), s && ue(Z, {
                            type: re,
                            content: e
                        });
                    }, function(e) {
                        n.fail && n.fail(e), n.complete && n.complete(e), s && ue(Z, {
                            type: re,
                            content: e
                        });
                    });
                } : function(t) {
                    if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);
                    e.call(this, t).then(function(e) {
                        t.success && t.success(e), t.complete && t.complete(e);
                    }, function(e) {
                        t.fail && t.fail(e), t.complete && t.complete(e);
                    });
                };
            }
            var he, pe = function(e) {
                w(n, e);
                var t = x(n);
                function n(e) {
                    var r;
                    _(this, n);
                    var o = e.code || "SYSTEM_ERROR", i = e.message || "unknown system error";
                    return (r = t.call(this, i)).errMsg = i, r.errCode = r.code = o, r.requestId = e.requestId, 
                    r;
                }
                return n;
            }(S(Error));
            function ve() {
                var e = o.getLocale && o.getLocale() || "en";
                if (he) return m(m({}, he), {}, {
                    locale: e,
                    LOCALE: e
                });
                for (var t = o.getSystemInfoSync(), n = t.deviceId, r = t.osName, i = t.uniPlatform, a = t.appId, s = [ "pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting" ], u = 0; u < s.length; u++) delete t[s[u]];
                return he = m(m({
                    PLATFORM: i,
                    OS: r,
                    APPID: a,
                    DEVICEID: n
                }, function() {
                    var e, t;
                    try {
                        if (o.getLaunchOptionsSync) {
                            if (o.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
                            var n = o.getLaunchOptionsSync(), r = n.scene;
                            e = n.channel, t = r;
                        }
                    } catch (e) {}
                    return {
                        channel: e,
                        scene: t
                    };
                }()), t), m(m({}, he), {}, {
                    locale: e,
                    LOCALE: e
                });
            }
            var ge, ye = function(e, t) {
                var n = "";
                return Object.keys(e).sort().forEach(function(t) {
                    e[t] && (n = n + "&" + t + "=" + e[t]);
                }), n = n.slice(1), C(n, t).toString();
            }, me = function(e, t) {
                return new Promise(function(n, r) {
                    t(Object.assign(e, {
                        complete: function(e) {
                            e || (e = {});
                            var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
                            if (!e.statusCode || e.statusCode >= 400) return r(new pe({
                                code: "SYS_ERR",
                                message: e.errMsg || "request:fail",
                                requestId: t
                            }));
                            var o = e.data;
                            if (o.error) return r(new pe({
                                code: o.error.code,
                                message: o.error.message,
                                requestId: t
                            }));
                            o.result = o.data, o.requestId = t, delete o.data, n(o);
                        }
                    }));
                });
            }, be = function(e) {
                return D.stringify(I.parse(e));
            }, _e = {
                request: function(e) {
                    return o.request(e);
                },
                uploadFile: function(e) {
                    return o.uploadFile(e);
                },
                setStorageSync: function(e, t) {
                    return o.setStorageSync(e, t);
                },
                getStorageSync: function(e) {
                    return o.getStorageSync(e);
                },
                removeStorageSync: function(e) {
                    return o.removeStorageSync(e);
                },
                clearStorageSync: function() {
                    return o.clearStorageSync();
                }
            }, we = {
                "uniCloud.init.paramRequired": "{param} required",
                "uniCloud.uploadFile.fileError": "filePath should be instance of File"
            }, xe = (0, a.initVueI18n)({
                "zh-Hans": {
                    "uniCloud.init.paramRequired": "缺少参数：{param}",
                    "uniCloud.uploadFile.fileError": "filePath应为File对象"
                },
                "zh-Hant": {
                    "uniCloud.init.paramRequired": "缺少参数：{param}",
                    "uniCloud.uploadFile.fileError": "filePath应为File对象"
                },
                en: we,
                fr: {
                    "uniCloud.init.paramRequired": "{param} required",
                    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
                },
                es: {
                    "uniCloud.init.paramRequired": "{param} required",
                    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
                },
                ja: we
            }, "zh-Hans").t, ke = function() {
                function e(t) {
                    _(this, e), [ "spaceId", "clientSecret" ].forEach(function(e) {
                        if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error(xe("uniCloud.init.paramRequired", {
                            param: e
                        }));
                    }), this.config = Object.assign({}, {
                        endpoint: "https://api.bspapp.com"
                    }, t), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", 
                    this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, 
                    this.adapter = _e, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
                }
                return g(e, [ {
                    key: "setAccessToken",
                    value: function(e) {
                        this.accessToken = e;
                    }
                }, {
                    key: "requestWrapped",
                    value: function(e) {
                        return me(e, this.adapter.request);
                    }
                }, {
                    key: "requestAuth",
                    value: function(e) {
                        return this.requestWrapped(e);
                    }
                }, {
                    key: "request",
                    value: function(e, t) {
                        var n = this;
                        return Promise.resolve().then(function() {
                            return n.hasAccessToken ? t ? n.requestWrapped(e) : n.requestWrapped(e).catch(function(t) {
                                return new Promise(function(e, n) {
                                    !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
                                }).then(function() {
                                    return n.getAccessToken();
                                }).then(function() {
                                    var t = n.rebuildRequest(e);
                                    return n.request(t, !0);
                                });
                            }) : n.getAccessToken().then(function() {
                                var t = n.rebuildRequest(e);
                                return n.request(t, !0);
                            });
                        });
                    }
                }, {
                    key: "rebuildRequest",
                    value: function(e) {
                        var t = Object.assign({}, e);
                        return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, 
                        t.header["x-serverless-sign"] = ye(t.data, this.config.clientSecret), t;
                    }
                }, {
                    key: "setupRequest",
                    value: function(e, t) {
                        var n = Object.assign({}, e, {
                            spaceId: this.config.spaceId,
                            timestamp: Date.now()
                        }), r = {
                            "Content-Type": "application/json"
                        };
                        return "auth" !== t && (n.token = this.accessToken, r["x-basement-token"] = this.accessToken), 
                        r["x-serverless-sign"] = ye(n, this.config.clientSecret), {
                            url: this.config.requestUrl,
                            method: "POST",
                            data: n,
                            dataType: "json",
                            header: r
                        };
                    }
                }, {
                    key: "getAccessToken",
                    value: function() {
                        var e = this;
                        return "pending" === this._getAccessTokenPromiseStatus || (this._getAccessTokenPromiseStatus = "pending", 
                        this._getAccessTokenPromise = this.requestAuth(this.setupRequest({
                            method: "serverless.auth.user.anonymousAuthorize",
                            params: "{}"
                        }, "auth")).then(function(t) {
                            return new Promise(function(n, r) {
                                t.result && t.result.accessToken ? (e.setAccessToken(t.result.accessToken), e._getAccessTokenPromiseStatus = "fulfilled", 
                                n(e.accessToken)) : (e._getAccessTokenPromiseStatus = "rejected", r(new pe({
                                    code: "AUTH_FAILED",
                                    message: "获取accessToken失败"
                                })));
                            });
                        }, function(t) {
                            return e._getAccessTokenPromiseStatus = "rejected", Promise.reject(t);
                        })), this._getAccessTokenPromise;
                    }
                }, {
                    key: "authorize",
                    value: function() {
                        this.getAccessToken();
                    }
                }, {
                    key: "callFunction",
                    value: function(e) {
                        var t = {
                            method: "serverless.function.runtime.invoke",
                            params: JSON.stringify({
                                functionTarget: e.name,
                                functionArgs: e.data || {}
                            })
                        };
                        return this.request(this.setupRequest(t));
                    }
                }, {
                    key: "getOSSUploadOptionsFromPath",
                    value: function(e) {
                        var t = {
                            method: "serverless.file.resource.generateProximalSign",
                            params: JSON.stringify(e)
                        };
                        return this.request(this.setupRequest(t));
                    }
                }, {
                    key: "uploadFileToOSS",
                    value: function(e) {
                        var t = this, n = e.url, r = e.formData, o = e.name, i = e.filePath, a = e.fileType, s = e.onUploadProgress;
                        return new Promise(function(e, u) {
                            var c = t.adapter.uploadFile({
                                url: n,
                                formData: r,
                                name: o,
                                filePath: i,
                                fileType: a,
                                header: {
                                    "X-OSS-server-side-encrpytion": "AES256"
                                },
                                success: function(t) {
                                    t && t.statusCode < 400 ? e(t) : u(new pe({
                                        code: "UPLOAD_FAILED",
                                        message: "文件上传失败"
                                    }));
                                },
                                fail: function(e) {
                                    u(new pe({
                                        code: e.code || "UPLOAD_FAILED",
                                        message: e.message || e.errMsg || "文件上传失败"
                                    }));
                                }
                            });
                            "function" == typeof s && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function(e) {
                                s({
                                    loaded: e.totalBytesSent,
                                    total: e.totalBytesExpectedToSend
                                });
                            });
                        });
                    }
                }, {
                    key: "reportOSSUpload",
                    value: function(e) {
                        var t = {
                            method: "serverless.file.resource.report",
                            params: JSON.stringify(e)
                        };
                        return this.request(this.setupRequest(t));
                    }
                }, {
                    key: "uploadFile",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            var n, r, o, a, s, u, c, f, l, d, h, p, v, g, y, m, b, _, w, x;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (n = t.filePath, r = t.cloudPath, o = t.fileType, a = void 0 === o ? "image" : o, 
                                    s = t.onUploadProgress, u = t.config, "string" === R(r)) {
                                        e.next = 3;
                                        break;
                                    }
                                    throw new pe({
                                        code: "INVALID_PARAM",
                                        message: "cloudPath必须为字符串类型"
                                    });

                                  case 3:
                                    if (r = r.trim()) {
                                        e.next = 5;
                                        break;
                                    }
                                    throw new pe({
                                        code: "CLOUDPATH_REQUIRED",
                                        message: "cloudPath不可为空"
                                    });

                                  case 5:
                                    if (!/:\/\//.test(r)) {
                                        e.next = 7;
                                        break;
                                    }
                                    throw new pe({
                                        code: "INVALID_PARAM",
                                        message: "cloudPath不合法"
                                    });

                                  case 7:
                                    return c = u && u.envType || this.config.envType, e.next = 10, this.getOSSUploadOptionsFromPath({
                                        env: c,
                                        filename: r
                                    });

                                  case 10:
                                    return f = e.sent.result, l = "https://" + f.cdnDomain + "/" + f.ossPath, d = f.securityToken, 
                                    h = f.accessKeyId, p = f.signature, v = f.host, g = f.ossPath, y = f.id, m = f.policy, 
                                    b = f.ossCallbackUrl, _ = {
                                        "Cache-Control": "max-age=2592000",
                                        "Content-Disposition": "attachment",
                                        OSSAccessKeyId: h,
                                        Signature: p,
                                        host: v,
                                        id: y,
                                        key: g,
                                        policy: m,
                                        success_action_status: 200
                                    }, d && (_["x-oss-security-token"] = d), b && (w = JSON.stringify({
                                        callbackUrl: b,
                                        callbackBody: JSON.stringify({
                                            fileId: y,
                                            spaceId: this.config.spaceId
                                        }),
                                        callbackBodyType: "application/json"
                                    }), _.callback = be(w)), x = {
                                        url: "https://" + f.host,
                                        formData: _,
                                        fileName: "file",
                                        name: "file",
                                        filePath: n,
                                        fileType: a
                                    }, e.next = 25, this.uploadFileToOSS(Object.assign({}, x, {
                                        onUploadProgress: s
                                    }));

                                  case 25:
                                    if (!b) {
                                        e.next = 27;
                                        break;
                                    }
                                    return e.abrupt("return", {
                                        success: !0,
                                        filePath: n,
                                        fileID: l
                                    });

                                  case 27:
                                    return e.next = 29, this.reportOSSUpload({
                                        id: y
                                    });

                                  case 29:
                                    if (!e.sent.success) {
                                        e.next = 31;
                                        break;
                                    }
                                    return e.abrupt("return", {
                                        success: !0,
                                        filePath: n,
                                        fileID: l
                                    });

                                  case 31:
                                    throw new pe({
                                        code: "UPLOAD_FAILED",
                                        message: "文件上传失败"
                                    });

                                  case 32:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "deleteFile",
                    value: function(e) {
                        var t = e.fileList, n = {
                            method: "serverless.file.resource.delete",
                            params: JSON.stringify({
                                id: t[0]
                            })
                        };
                        return this.request(this.setupRequest(n));
                    }
                }, {
                    key: "getTempFileURL",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.fileList;
                        return new Promise(function(e, n) {
                            Array.isArray(t) && 0 !== t.length || n(new pe({
                                code: "INVALID_PARAM",
                                message: "fileList的元素必须是非空的字符串"
                            })), e({
                                fileList: t.map(function(e) {
                                    return {
                                        fileID: e,
                                        tempFileURL: e
                                    };
                                })
                            });
                        });
                    }
                }, {
                    key: "getFileInfo",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            var t, n, r, o = arguments;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, n = t.fileList, Array.isArray(n) && 0 !== n.length) {
                                        e.next = 3;
                                        break;
                                    }
                                    throw new pe({
                                        code: "INVALID_PARAM",
                                        message: "fileList的元素必须是非空的字符串"
                                    });

                                  case 3:
                                    return r = {
                                        method: "serverless.file.resource.info",
                                        params: JSON.stringify({
                                            id: n.map(function(e) {
                                                return e.split("?")[0];
                                            }).join(",")
                                        })
                                    }, e.next = 6, this.request(this.setupRequest(r));

                                  case 6:
                                    return e.t0 = e.sent.result, e.abrupt("return", {
                                        fileList: e.t0
                                    });

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "hasAccessToken",
                    get: function() {
                        return !!this.accessToken;
                    }
                } ]), e;
            }(), Se = {
                init: function(e) {
                    var t = new ke(e), n = {
                        signInAnonymously: function() {
                            return t.authorize();
                        },
                        getLoginState: function() {
                            return Promise.resolve(!1);
                        }
                    };
                    return t.auth = function() {
                        return n;
                    }, t.customAuth = t.auth, t;
                }
            }, Oe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
            !function(e) {
                e.local = "local", e.none = "none", e.session = "session";
            }(ge || (ge = {}));
            var Ae, Pe = function() {
                var e;
                if (!Promise) {
                    (e = function() {}).promise = {};
                    var t = function() {
                        throw new pe({
                            message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
                        });
                    };
                    return Object.defineProperty(e.promise, "then", {
                        get: t
                    }), Object.defineProperty(e.promise, "catch", {
                        get: t
                    }), e;
                }
                var n = new Promise(function(t, n) {
                    e = function(e) {
                        function t(t, n) {
                            return e.apply(this, arguments);
                        }
                        return t.toString = function() {
                            return e.toString();
                        }, t;
                    }(function(e, r) {
                        return e ? n(e) : t(r);
                    });
                });
                return e.promise = n, e;
            };
            function Te(e) {
                return void 0 === e;
            }
            function Ee(e) {
                return "[object Null]" === Object.prototype.toString.call(e);
            }
            !function(e) {
                e.WEB = "web", e.WX_MP = "wx_mp";
            }(Ae || (Ae = {}));
            var je = {
                adapter: null,
                runtime: void 0
            }, Ce = [ "anonymousUuidKey" ], Ie = function(e) {
                w(n, e);
                var t = x(n);
                function n() {
                    var e;
                    return _(this, n), e = t.call(this), je.adapter.root.tcbObject || (je.adapter.root.tcbObject = {}), 
                    e;
                }
                return g(n, [ {
                    key: "setItem",
                    value: function(e, t) {
                        je.adapter.root.tcbObject[e] = t;
                    }
                }, {
                    key: "getItem",
                    value: function(e) {
                        return je.adapter.root.tcbObject[e];
                    }
                }, {
                    key: "removeItem",
                    value: function(e) {
                        delete je.adapter.root.tcbObject[e];
                    }
                }, {
                    key: "clear",
                    value: function() {
                        delete je.adapter.root.tcbObject;
                    }
                } ]), n;
            }(function() {});
            function De(e, t) {
                switch (e) {
                  case "local":
                    return t.localStorage || new Ie();

                  case "none":
                    return new Ie();

                  default:
                    return t.sessionStorage || new Ie();
                }
            }
            var Le = function() {
                function e(t) {
                    if (_(this, e), !this._storage) {
                        this._persistence = je.adapter.primaryStorage || t.persistence, this._storage = De(this._persistence, je.adapter);
                        var n = "access_token_".concat(t.env), r = "access_token_expire_".concat(t.env), o = "refresh_token_".concat(t.env), i = "anonymous_uuid_".concat(t.env), a = "login_type_".concat(t.env), s = "user_info_".concat(t.env);
                        this.keys = {
                            accessTokenKey: n,
                            accessTokenExpireKey: r,
                            refreshTokenKey: o,
                            anonymousUuidKey: i,
                            loginTypeKey: a,
                            userInfoKey: s
                        };
                    }
                }
                return g(e, [ {
                    key: "updatePersistence",
                    value: function(e) {
                        if (e !== this._persistence) {
                            var t = "local" === this._persistence;
                            this._persistence = e;
                            var n = De(e, je.adapter);
                            for (var r in this.keys) {
                                var o = this.keys[r];
                                if (!t || !Ce.includes(r)) {
                                    var i = this._storage.getItem(o);
                                    Te(i) || Ee(i) || (n.setItem(o, i), this._storage.removeItem(o));
                                }
                            }
                            this._storage = n;
                        }
                    }
                }, {
                    key: "setStore",
                    value: function(e, t, n) {
                        if (this._storage) {
                            var r = {
                                version: n || "localCachev1",
                                content: t
                            }, o = JSON.stringify(r);
                            try {
                                this._storage.setItem(e, o);
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                throw e;
                            }
                        }
                    }
                }, {
                    key: "getStore",
                    value: function(e, t) {
                        try {
                            if (!this._storage) return;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return "";
                        }
                        t = t || "localCachev1";
                        var n = this._storage.getItem(e);
                        return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : "";
                    }
                }, {
                    key: "removeStore",
                    value: function(e) {
                        this._storage.removeItem(e);
                    }
                } ]), e;
            }(), Ne = {}, Re = {};
            function $e(e) {
                return Ne[e];
            }
            var Me = function e(t, n) {
                _(this, e), this.data = n || null, this.name = t;
            }, Fe = function(e) {
                w(n, e);
                var t = x(n);
                function n(e, r) {
                    var o;
                    return _(this, n), (o = t.call(this, "error", {
                        error: e,
                        data: r
                    })).error = e, o;
                }
                return n;
            }(Me), Be = new (function() {
                function e() {
                    _(this, e), this._listeners = {};
                }
                return g(e, [ {
                    key: "on",
                    value: function(e, t) {
                        return function(e, t, n) {
                            n[e] = n[e] || [], n[e].push(t);
                        }(e, t, this._listeners), this;
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        return function(e, t, n) {
                            if (n && n[e]) {
                                var r = n[e].indexOf(t);
                                -1 !== r && n[e].splice(r, 1);
                            }
                        }(e, t, this._listeners), this;
                    }
                }, {
                    key: "fire",
                    value: function(e, t) {
                        if (e instanceof Fe) return console.error(e.error), this;
                        var n = "string" == typeof e ? new Me(e, t || {}) : e, r = n.name;
                        if (this._listens(r)) {
                            n.target = this;
                            var o, i = f(this._listeners[r] ? c(this._listeners[r]) : []);
                            try {
                                for (i.s(); !(o = i.n()).done; ) {
                                    o.value.call(this, n);
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                i.e(e);
                            } finally {
                                i.f();
                            }
                        }
                        return this;
                    }
                }, {
                    key: "_listens",
                    value: function(e) {
                        return this._listeners[e] && this._listeners[e].length > 0;
                    }
                } ]), e;
            }())();
            function Ue(e, t) {
                Be.on(e, t);
            }
            function qe(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Be.fire(e, t);
            }
            function He(e, t) {
                Be.off(e, t);
            }
            var Ve, Ke = "loginStateChanged", ze = "loginStateExpire", We = "loginTypeChanged", Ge = "anonymousConverted", Je = "refreshAccessToken";
            !function(e) {
                e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", 
                e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", 
                e.NULL = "NULL";
            }(Ve || (Ve = {}));
            var Xe = [ "auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered" ], Ye = {
                "X-SDK-Version": "1.3.5"
            };
            function Qe(e, t, n) {
                var r = e[t];
                e[t] = function(t) {
                    var o = {}, i = {};
                    n.forEach(function(n) {
                        var r = n.call(e, t), a = r.data, s = r.headers;
                        Object.assign(o, a), Object.assign(i, s);
                    });
                    var a = t.data;
                    return a && function() {
                        var e;
                        if (e = a, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = m(m({}, a), o); else for (var n in o) a.append(n, o[n]);
                    }(), t.headers = m(m({}, t.headers || {}), i), r.call(e, t);
                };
            }
            function Ze() {
                var e = Math.random().toString(16).slice(2);
                return {
                    data: {
                        seqId: e
                    },
                    headers: m(m({}, Ye), {}, {
                        "x-seqid": e
                    })
                };
            }
            var et = function() {
                function e() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    _(this, e), this.config = n, this._reqClass = new je.adapter.reqClass({
                        timeout: this.config.timeout,
                        timeoutMsg: "请求在".concat(this.config.timeout / 1e3, "s内未完成，已中断"),
                        restrictedMethods: [ "post" ]
                    }), this._cache = $e(this.config.env), this._localCache = (t = this.config.env, 
                    Re[t]), Qe(this._reqClass, "post", [ Ze ]), Qe(this._reqClass, "upload", [ Ze ]), 
                    Qe(this._reqClass, "download", [ Ze ]);
                }
                return g(e, [ {
                    key: "post",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._reqClass.post(t);

                                  case 2:
                                    return e.abrupt("return", e.sent);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "upload",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._reqClass.upload(t);

                                  case 2:
                                    return e.abrupt("return", e.sent);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "download",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._reqClass.download(t);

                                  case 2:
                                    return e.abrupt("return", e.sent);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "refreshAccessToken",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            var t, n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), 
                                    e.prev = 1, e.next = 4, this._refreshAccessTokenPromise;

                                  case 4:
                                    t = e.sent, e.next = 10;
                                    break;

                                  case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = e.t0;

                                  case 10:
                                    if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, 
                                    !n) {
                                        e.next = 12;
                                        break;
                                    }
                                    throw n;

                                  case 12:
                                    return e.abrupt("return", t);

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 1, 7 ] ]);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "_refreshAccessToken",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            var t, n, r, o, a, s, u, c, f, l, d, h, p;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.refreshTokenKey, 
                                    a = t.loginTypeKey, s = t.anonymousUuidKey, this._cache.removeStore(n), this._cache.removeStore(r), 
                                    u = this._cache.getStore(o)) {
                                        e.next = 5;
                                        break;
                                    }
                                    throw new pe({
                                        message: "未登录CloudBase"
                                    });

                                  case 5:
                                    return c = {
                                        refresh_token: u
                                    }, e.next = 8, this.request("auth.fetchAccessTokenWithRefreshToken", c);

                                  case 8:
                                    if (!(f = e.sent).data.code) {
                                        e.next = 21;
                                        break;
                                    }
                                    if ("SIGN_PARAM_INVALID" !== (l = f.data.code) && "REFRESH_TOKEN_EXPIRED" !== l && "INVALID_REFRESH_TOKEN" !== l) {
                                        e.next = 20;
                                        break;
                                    }
                                    if (this._cache.getStore(a) !== Ve.ANONYMOUS || "INVALID_REFRESH_TOKEN" !== l) {
                                        e.next = 19;
                                        break;
                                    }
                                    return d = this._cache.getStore(s), h = this._cache.getStore(o), e.next = 17, this.send("auth.signInAnonymously", {
                                        anonymous_uuid: d,
                                        refresh_token: h
                                    });

                                  case 17:
                                    return p = e.sent, e.abrupt("return", (this.setRefreshToken(p.refresh_token), this._refreshAccessToken()));

                                  case 19:
                                    qe(ze), this._cache.removeStore(o);

                                  case 20:
                                    throw new pe({
                                        code: f.data.code,
                                        message: "刷新access token失败：".concat(f.data.code)
                                    });

                                  case 21:
                                    if (!f.data.access_token) {
                                        e.next = 23;
                                        break;
                                    }
                                    return e.abrupt("return", (qe(Je), this._cache.setStore(n, f.data.access_token), 
                                    this._cache.setStore(r, f.data.access_token_expire + Date.now()), {
                                        accessToken: f.data.access_token,
                                        accessTokenExpire: f.data.access_token_expire
                                    }));

                                  case 23:
                                    f.data.refresh_token && (this._cache.removeStore(o), this._cache.setStore(o, f.data.refresh_token), 
                                    this._refreshAccessToken());

                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "getAccessToken",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            var t, n, r, o, a, s, u;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.refreshTokenKey, 
                                    this._cache.getStore(o)) {
                                        e.next = 3;
                                        break;
                                    }
                                    throw new pe({
                                        message: "refresh token不存在，登录状态异常"
                                    });

                                  case 3:
                                    if (a = this._cache.getStore(n), s = this._cache.getStore(r), u = !0, e.t0 = this._shouldRefreshAccessTokenHook, 
                                    !e.t0) {
                                        e.next = 9;
                                        break;
                                    }
                                    return e.next = 8, this._shouldRefreshAccessTokenHook(a, s);

                                  case 8:
                                    e.t0 = !e.sent;

                                  case 9:
                                    if (e.t1 = e.t0, !e.t1) {
                                        e.next = 12;
                                        break;
                                    }
                                    u = !1;

                                  case 12:
                                    return e.abrupt("return", (!a || !s || s < Date.now()) && u ? this.refreshAccessToken() : {
                                        accessToken: a,
                                        accessTokenExpire: s
                                    });

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "request",
                    value: function() {
                        var e = p(i.default.mark(function e(t, n, r) {
                            var o, a, s, u, c, f, l, d, h, p, v, g, y, b, _, w;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (o = "x-tcb-trace_".concat(this.config.env), a = "application/x-www-form-urlencoded", 
                                    s = m({
                                        action: t,
                                        env: this.config.env,
                                        dataVersion: "2019-08-16"
                                    }, n), -1 !== Xe.indexOf(t)) {
                                        e.next = 10;
                                        break;
                                    }
                                    if (u = this._cache.keys.refreshTokenKey, e.t0 = this._cache.getStore(u), !e.t0) {
                                        e.next = 10;
                                        break;
                                    }
                                    return e.next = 9, this.getAccessToken();

                                  case 9:
                                    s.access_token = e.sent.accessToken;

                                  case 10:
                                    if ("storage.uploadFile" === t) {
                                        for (f in c = new FormData()) c.hasOwnProperty(f) && void 0 !== c[f] && c.append(f, s[f]);
                                        a = "multipart/form-data";
                                    } else for (l in a = "application/json", c = {}, s) void 0 !== s[l] && (c[l] = s[l]);
                                    return d = {
                                        headers: {
                                            "content-type": a
                                        }
                                    }, r && r.onUploadProgress && (d.onUploadProgress = r.onUploadProgress), (h = this._localCache.getStore(o)) && (d.headers["X-TCB-Trace"] = h), 
                                    p = n.parse, v = n.inQuery, g = n.search, y = {
                                        env: this.config.env
                                    }, p && (y.parse = !0), v && (y = m(m({}, v), y)), b = function(e, t) {
                                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = /\?/.test(t), o = "";
                                        for (var i in n) "" === o ? !r && (t += "?") : o += "&", o += "".concat(i, "=").concat(encodeURIComponent(n[i]));
                                        return /^http(s)?\:\/\//.test(t += o) ? t : "".concat(e).concat(t);
                                    }(Oe, "//tcb-api.tencentcloudapi.com/web", y), g && (b += g), e.next = 22, this.post(m({
                                        url: b,
                                        data: c
                                    }, d));

                                  case 22:
                                    if (_ = e.sent, (w = _.header && _.header["x-tcb-trace"]) && this._localCache.setStore(o, w), 
                                    (200 === Number(_.status) || 200 === Number(_.statusCode)) && _.data) {
                                        e.next = 26;
                                        break;
                                    }
                                    throw new pe({
                                        code: "NETWORK_ERROR",
                                        message: "network request error"
                                    });

                                  case 26:
                                    return e.abrupt("return", _);

                                  case 27:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n, r) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "send",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            var n, r, o, a = arguments;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, e.next = 3, this.request(t, n, {
                                        onUploadProgress: n.onUploadProgress
                                    });

                                  case 3:
                                    if ("ACCESS_TOKEN_EXPIRED" !== (r = e.sent).data.code || -1 !== Xe.indexOf(t)) {
                                        e.next = 13;
                                        break;
                                    }
                                    return e.next = 7, this.refreshAccessToken();

                                  case 7:
                                    return e.next = 9, this.request(t, n, {
                                        onUploadProgress: n.onUploadProgress
                                    });

                                  case 9:
                                    if (!(o = e.sent).data.code) {
                                        e.next = 12;
                                        break;
                                    }
                                    throw new pe({
                                        code: o.data.code,
                                        message: o.data.message
                                    });

                                  case 12:
                                    return e.abrupt("return", o.data);

                                  case 13:
                                    if (!r.data.code) {
                                        e.next = 15;
                                        break;
                                    }
                                    throw new pe({
                                        code: r.data.code,
                                        message: r.data.message
                                    });

                                  case 15:
                                    return e.abrupt("return", r.data);

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "setRefreshToken",
                    value: function(e) {
                        var t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.refreshTokenKey;
                        this._cache.removeStore(n), this._cache.removeStore(r), this._cache.setStore(o, e);
                    }
                } ]), e;
            }(), tt = {};
            function nt(e) {
                return tt[e];
            }
            var rt = function() {
                function e(t) {
                    _(this, e), this.config = t, this._cache = $e(t.env), this._request = nt(t.env);
                }
                return g(e, [ {
                    key: "setRefreshToken",
                    value: function(e) {
                        var t = this._cache.keys, n = t.accessTokenKey, r = t.accessTokenExpireKey, o = t.refreshTokenKey;
                        this._cache.removeStore(n), this._cache.removeStore(r), this._cache.setStore(o, e);
                    }
                }, {
                    key: "setAccessToken",
                    value: function(e, t) {
                        var n = this._cache.keys, r = n.accessTokenKey, o = n.accessTokenExpireKey;
                        this._cache.setStore(r, e), this._cache.setStore(o, t);
                    }
                }, {
                    key: "refreshUserInfo",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            var t, n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._request.send("auth.getUserInfo", {});

                                  case 2:
                                    return t = e.sent, n = t.data, e.abrupt("return", (this.setLocalUserInfo(n), n));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "setLocalUserInfo",
                    value: function(e) {
                        var t = this._cache.keys.userInfoKey;
                        this._cache.setStore(t, e);
                    }
                } ]), e;
            }(), ot = function() {
                function e(t) {
                    if (_(this, e), !t) throw new pe({
                        code: "PARAM_ERROR",
                        message: "envId is not defined"
                    });
                    this._envId = t, this._cache = $e(this._envId), this._request = nt(this._envId), 
                    this.setUserInfo();
                }
                return g(e, [ {
                    key: "linkWithTicket",
                    value: function(e) {
                        if ("string" != typeof e) throw new pe({
                            code: "PARAM_ERROR",
                            message: "ticket must be string"
                        });
                        return this._request.send("auth.linkWithTicket", {
                            ticket: e
                        });
                    }
                }, {
                    key: "linkWithRedirect",
                    value: function(e) {
                        e.signInWithRedirect();
                    }
                }, {
                    key: "updatePassword",
                    value: function(e, t) {
                        return this._request.send("auth.updatePassword", {
                            oldPassword: t,
                            newPassword: e
                        });
                    }
                }, {
                    key: "updateEmail",
                    value: function(e) {
                        return this._request.send("auth.updateEmail", {
                            newEmail: e
                        });
                    }
                }, {
                    key: "updateUsername",
                    value: function(e) {
                        if ("string" != typeof e) throw new pe({
                            code: "PARAM_ERROR",
                            message: "username must be a string"
                        });
                        return this._request.send("auth.updateUsername", {
                            username: e
                        });
                    }
                }, {
                    key: "getLinkedUidList",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            var t, n, r, o;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._request.send("auth.getLinkedUidList", {});

                                  case 2:
                                    return t = e.sent, n = t.data, r = !1, o = n.users, e.abrupt("return", (o.forEach(function(e) {
                                        e.wxOpenId && e.wxPublicId && (r = !0);
                                    }), {
                                        users: o,
                                        hasPrimaryUid: r
                                    }));

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "setPrimaryUid",
                    value: function(e) {
                        return this._request.send("auth.setPrimaryUid", {
                            uid: e
                        });
                    }
                }, {
                    key: "unlink",
                    value: function(e) {
                        return this._request.send("auth.unlink", {
                            platform: e
                        });
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            var n, r, o, a, s, u, c, f;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = t.nickName, r = t.gender, o = t.avatarUrl, a = t.province, s = t.country, 
                                    u = t.city, e.next = 8, this._request.send("auth.updateUserInfo", {
                                        nickName: n,
                                        gender: r,
                                        avatarUrl: o,
                                        province: a,
                                        country: s,
                                        city: u
                                    });

                                  case 8:
                                    c = e.sent, f = c.data, this.setLocalUserInfo(f);

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "refresh",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            var t, n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._request.send("auth.getUserInfo", {});

                                  case 2:
                                    return t = e.sent, n = t.data, e.abrupt("return", (this.setLocalUserInfo(n), n));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "setUserInfo",
                    value: function() {
                        var e = this, t = this._cache.keys.userInfoKey, n = this._cache.getStore(t);
                        [ "uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl" ].forEach(function(t) {
                            e[t] = n[t];
                        }), this.location = {
                            country: n.country,
                            province: n.province,
                            city: n.city
                        };
                    }
                }, {
                    key: "setLocalUserInfo",
                    value: function(e) {
                        var t = this._cache.keys.userInfoKey;
                        this._cache.setStore(t, e), this.setUserInfo();
                    }
                } ]), e;
            }(), it = function() {
                function e(t) {
                    if (_(this, e), !t) throw new pe({
                        code: "PARAM_ERROR",
                        message: "envId is not defined"
                    });
                    this._cache = $e(t);
                    var n = this._cache.keys, r = n.refreshTokenKey, o = n.accessTokenKey, i = n.accessTokenExpireKey, a = this._cache.getStore(r), s = this._cache.getStore(o), u = this._cache.getStore(i);
                    this.credential = {
                        refreshToken: a,
                        accessToken: s,
                        accessTokenExpire: u
                    }, this.user = new ot(t);
                }
                return g(e, [ {
                    key: "isAnonymousAuth",
                    get: function() {
                        return this.loginType === Ve.ANONYMOUS;
                    }
                }, {
                    key: "isCustomAuth",
                    get: function() {
                        return this.loginType === Ve.CUSTOM;
                    }
                }, {
                    key: "isWeixinAuth",
                    get: function() {
                        return this.loginType === Ve.WECHAT || this.loginType === Ve.WECHAT_OPEN || this.loginType === Ve.WECHAT_PUBLIC;
                    }
                }, {
                    key: "loginType",
                    get: function() {
                        return this._cache.getStore(this._cache.keys.loginTypeKey);
                    }
                } ]), e;
            }(), at = function(e) {
                w(n, e);
                var t = x(n);
                function n() {
                    return _(this, n), t.apply(this, arguments);
                }
                return g(n, [ {
                    key: "signIn",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            var t, n, r, o, a, s, u;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this._cache.updatePersistence("local"), t = this._cache.keys, n = t.anonymousUuidKey, 
                                    r = t.refreshTokenKey, o = this._cache.getStore(n) || void 0, a = this._cache.getStore(r) || void 0, 
                                    e.next = 8, this._request.send("auth.signInAnonymously", {
                                        anonymous_uuid: o,
                                        refresh_token: a
                                    });

                                  case 8:
                                    if (!(s = e.sent).uuid || !s.refresh_token) {
                                        e.next = 20;
                                        break;
                                    }
                                    return this._setAnonymousUUID(s.uuid), this.setRefreshToken(s.refresh_token), e.next = 14, 
                                    this._request.refreshAccessToken();

                                  case 14:
                                    return qe(Ke), qe(We, {
                                        env: this.config.env,
                                        loginType: Ve.ANONYMOUS,
                                        persistence: "local"
                                    }), u = new it(this.config.env), e.next = 19, u.user.refresh();

                                  case 19:
                                    return e.abrupt("return", u);

                                  case 20:
                                    throw new pe({
                                        message: "匿名登录失败"
                                    });

                                  case 21:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "linkAndRetrieveDataWithTicket",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            var n, r, o, a, s, u;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this._cache.keys, r = n.anonymousUuidKey, o = n.refreshTokenKey, a = this._cache.getStore(r), 
                                    s = this._cache.getStore(o), e.next = 7, this._request.send("auth.linkAndRetrieveDataWithTicket", {
                                        anonymous_uuid: a,
                                        refresh_token: s,
                                        ticket: t
                                    });

                                  case 7:
                                    if (!(u = e.sent).refresh_token) {
                                        e.next = 16;
                                        break;
                                    }
                                    return this._clearAnonymousUUID(), this.setRefreshToken(u.refresh_token), e.next = 13, 
                                    this._request.refreshAccessToken();

                                  case 13:
                                    return qe(Ge, {
                                        env: this.config.env
                                    }), qe(We, {
                                        loginType: Ve.CUSTOM,
                                        persistence: "local"
                                    }), e.abrupt("return", {
                                        credential: {
                                            refreshToken: u.refresh_token
                                        }
                                    });

                                  case 16:
                                    throw new pe({
                                        message: "匿名转化失败"
                                    });

                                  case 17:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "_setAnonymousUUID",
                    value: function(e) {
                        var t = this._cache.keys, n = t.anonymousUuidKey, r = t.loginTypeKey;
                        this._cache.removeStore(n), this._cache.setStore(n, e), this._cache.setStore(r, Ve.ANONYMOUS);
                    }
                }, {
                    key: "_clearAnonymousUUID",
                    value: function() {
                        this._cache.removeStore(this._cache.keys.anonymousUuidKey);
                    }
                } ]), n;
            }(rt), st = function(e) {
                w(n, e);
                var t = x(n);
                function n() {
                    return _(this, n), t.apply(this, arguments);
                }
                return g(n, [ {
                    key: "signIn",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            var n, r;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("string" == typeof t) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new pe({
                                        param: "PARAM_ERROR",
                                        message: "ticket must be a string"
                                    });

                                  case 2:
                                    return n = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signInWithTicket", {
                                        ticket: t,
                                        refresh_token: this._cache.getStore(n) || ""
                                    });

                                  case 5:
                                    if (!(r = e.sent).refresh_token) {
                                        e.next = 15;
                                        break;
                                    }
                                    return this.setRefreshToken(r.refresh_token), e.next = 10, this._request.refreshAccessToken();

                                  case 10:
                                    return qe(Ke), qe(We, {
                                        env: this.config.env,
                                        loginType: Ve.CUSTOM,
                                        persistence: this.config.persistence
                                    }), e.next = 14, this.refreshUserInfo();

                                  case 14:
                                    return e.abrupt("return", new it(this.config.env));

                                  case 15:
                                    throw new pe({
                                        message: "自定义登录失败"
                                    });

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                } ]), n;
            }(rt), ut = function(e) {
                w(n, e);
                var t = x(n);
                function n() {
                    return _(this, n), t.apply(this, arguments);
                }
                return g(n, [ {
                    key: "signIn",
                    value: function() {
                        var e = p(i.default.mark(function e(t, n) {
                            var r, o, a, s, u;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("string" == typeof t) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new pe({
                                        code: "PARAM_ERROR",
                                        message: "email must be a string"
                                    });

                                  case 2:
                                    return r = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signIn", {
                                        loginType: "EMAIL",
                                        email: t,
                                        password: n,
                                        refresh_token: this._cache.getStore(r) || ""
                                    });

                                  case 5:
                                    if (o = e.sent, a = o.refresh_token, s = o.access_token, u = o.access_token_expire, 
                                    !a) {
                                        e.next = 22;
                                        break;
                                    }
                                    if (this.setRefreshToken(a), !s || !u) {
                                        e.next = 15;
                                        break;
                                    }
                                    this.setAccessToken(s, u), e.next = 17;
                                    break;

                                  case 15:
                                    return e.next = 17, this._request.refreshAccessToken();

                                  case 17:
                                    return e.next = 19, this.refreshUserInfo();

                                  case 19:
                                    return qe(Ke), qe(We, {
                                        env: this.config.env,
                                        loginType: Ve.EMAIL,
                                        persistence: this.config.persistence
                                    }), e.abrupt("return", new it(this.config.env));

                                  case 22:
                                    throw o.code ? new pe({
                                        code: o.code,
                                        message: "邮箱登录失败: ".concat(o.message)
                                    }) : new pe({
                                        message: "邮箱登录失败"
                                    });

                                  case 23:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "activate",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", this._request.send("auth.activateEndUserMail", {
                                        token: t
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "resetPasswordWithToken",
                    value: function() {
                        var e = p(i.default.mark(function e(t, n) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                                        token: t,
                                        newPassword: n
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                } ]), n;
            }(rt), ct = function(e) {
                w(n, e);
                var t = x(n);
                function n() {
                    return _(this, n), t.apply(this, arguments);
                }
                return g(n, [ {
                    key: "signIn",
                    value: function() {
                        var e = p(i.default.mark(function e(t, n) {
                            var r, o, a, s, u;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("string" == typeof t) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new pe({
                                        code: "PARAM_ERROR",
                                        message: "username must be a string"
                                    });

                                  case 2:
                                    return "string" != typeof n && (n = "", console.warn("password is empty")), r = this._cache.keys.refreshTokenKey, 
                                    e.next = 6, this._request.send("auth.signIn", {
                                        loginType: Ve.USERNAME,
                                        username: t,
                                        password: n,
                                        refresh_token: this._cache.getStore(r) || ""
                                    });

                                  case 6:
                                    if (o = e.sent, a = o.refresh_token, s = o.access_token_expire, u = o.access_token, 
                                    !a) {
                                        e.next = 23;
                                        break;
                                    }
                                    if (this.setRefreshToken(a), !u || !s) {
                                        e.next = 16;
                                        break;
                                    }
                                    this.setAccessToken(u, s), e.next = 18;
                                    break;

                                  case 16:
                                    return e.next = 18, this._request.refreshAccessToken();

                                  case 18:
                                    return e.next = 20, this.refreshUserInfo();

                                  case 20:
                                    return qe(Ke), qe(We, {
                                        env: this.config.env,
                                        loginType: Ve.USERNAME,
                                        persistence: this.config.persistence
                                    }), e.abrupt("return", new it(this.config.env));

                                  case 23:
                                    throw o.code ? new pe({
                                        code: o.code,
                                        message: "用户名密码登录失败: ".concat(o.message)
                                    }) : new pe({
                                        message: "用户名密码登录失败"
                                    });

                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                } ]), n;
            }(rt), ft = function() {
                function e(t) {
                    _(this, e), this.config = t, this._cache = $e(t.env), this._request = nt(t.env), 
                    this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), 
                    Ue(We, this._onLoginTypeChanged);
                }
                return g(e, [ {
                    key: "anonymousAuthProvider",
                    value: function() {
                        return new at(this.config);
                    }
                }, {
                    key: "customAuthProvider",
                    value: function() {
                        return new st(this.config);
                    }
                }, {
                    key: "emailAuthProvider",
                    value: function() {
                        return new ut(this.config);
                    }
                }, {
                    key: "usernameAuthProvider",
                    value: function() {
                        return new ct(this.config);
                    }
                }, {
                    key: "signInAnonymously",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new at(this.config).signIn());

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "signInWithEmailAndPassword",
                    value: function() {
                        var e = p(i.default.mark(function e(t, n) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new ut(this.config).signIn(t, n));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "signInWithUsernameAndPassword",
                    value: function(e, t) {
                        return new ct(this.config).signIn(e, t);
                    }
                }, {
                    key: "linkAndRetrieveDataWithTicket",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this._anonymousAuthProvider || (this._anonymousAuthProvider = new at(this.config)), 
                                    Ue(Ge, this._onAnonymousConverted), e.next = 3, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(t);

                                  case 3:
                                    return e.abrupt("return", e.sent);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "signOut",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            var t, n, r, o, a, s;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (this.loginType !== Ve.ANONYMOUS) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new pe({
                                        message: "匿名用户不支持登出操作"
                                    });

                                  case 2:
                                    if (t = this._cache.keys, n = t.refreshTokenKey, r = t.accessTokenKey, o = t.accessTokenExpireKey, 
                                    a = this._cache.getStore(n)) {
                                        e.next = 5;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 5:
                                    return e.next = 7, this._request.send("auth.logout", {
                                        refresh_token: a
                                    });

                                  case 7:
                                    return s = e.sent, e.abrupt("return", (this._cache.removeStore(n), this._cache.removeStore(r), 
                                    this._cache.removeStore(o), qe(Ke), qe(We, {
                                        env: this.config.env,
                                        loginType: Ve.NULL,
                                        persistence: this.config.persistence
                                    }), s));

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "signUpWithEmailAndPassword",
                    value: function() {
                        var e = p(i.default.mark(function e(t, n) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                                        email: t,
                                        password: n
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "sendPasswordResetEmail",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                                        email: t
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "onLoginStateChanged",
                    value: function(e) {
                        var t = this;
                        Ue(Ke, function() {
                            var n = t.hasLoginState();
                            e.call(t, n);
                        });
                        var n = this.hasLoginState();
                        e.call(this, n);
                    }
                }, {
                    key: "onLoginStateExpired",
                    value: function(e) {
                        Ue(ze, e.bind(this));
                    }
                }, {
                    key: "onAccessTokenRefreshed",
                    value: function(e) {
                        Ue(Je, e.bind(this));
                    }
                }, {
                    key: "onAnonymousConverted",
                    value: function(e) {
                        Ue(Ge, e.bind(this));
                    }
                }, {
                    key: "onLoginTypeChanged",
                    value: function(e) {
                        var t = this;
                        Ue(We, function() {
                            var n = t.hasLoginState();
                            e.call(t, n);
                        });
                    }
                }, {
                    key: "getAccessToken",
                    value: function() {
                        var e = p(i.default.mark(function e() {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, this._request.getAccessToken();

                                  case 2:
                                    return e.t0 = e.sent.accessToken, e.t1 = this.config.env, e.abrupt("return", {
                                        accessToken: e.t0,
                                        env: e.t1
                                    });

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "hasLoginState",
                    value: function() {
                        var e = this._cache.keys.refreshTokenKey;
                        return this._cache.getStore(e) ? new it(this.config.env) : null;
                    }
                }, {
                    key: "isUsernameRegistered",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            var n, r;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("string" == typeof t) {
                                        e.next = 2;
                                        break;
                                    }
                                    throw new pe({
                                        code: "PARAM_ERROR",
                                        message: "username must be a string"
                                    });

                                  case 2:
                                    return e.next = 4, this._request.send("auth.isUsernameRegistered", {
                                        username: t
                                    });

                                  case 4:
                                    return n = e.sent, r = n.data, e.abrupt("return", r && r.isRegistered);

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "getLoginState",
                    value: function() {
                        return Promise.resolve(this.hasLoginState());
                    }
                }, {
                    key: "signInWithTicket",
                    value: function() {
                        var e = p(i.default.mark(function e(t) {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", new st(this.config).signIn(t));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "shouldRefreshAccessToken",
                    value: function(e) {
                        this._request._shouldRefreshAccessTokenHook = e.bind(this);
                    }
                }, {
                    key: "getUserInfo",
                    value: function() {
                        return this._request.send("auth.getUserInfo", {}).then(function(e) {
                            return e.code ? e : m(m({}, e.data), {}, {
                                requestId: e.seqId
                            });
                        });
                    }
                }, {
                    key: "getAuthHeader",
                    value: function() {
                        var e = this._cache.keys, t = e.refreshTokenKey, n = e.accessTokenKey, r = this._cache.getStore(t);
                        return {
                            "x-cloudbase-credentials": this._cache.getStore(n) + "/@@/" + r
                        };
                    }
                }, {
                    key: "_onAnonymousConverted",
                    value: function(e) {
                        e.data.env === this.config.env && this._cache.updatePersistence(this.config.persistence);
                    }
                }, {
                    key: "_onLoginTypeChanged",
                    value: function(e) {
                        var t = e.data, n = t.loginType, r = t.persistence;
                        t.env === this.config.env && (this._cache.updatePersistence(r), this._cache.setStore(this._cache.keys.loginTypeKey, n));
                    }
                }, {
                    key: "currentUser",
                    get: function() {
                        var e = this.hasLoginState();
                        return e && e.user || null;
                    }
                }, {
                    key: "loginType",
                    get: function() {
                        return this._cache.getStore(this._cache.keys.loginTypeKey);
                    }
                } ]), e;
            }(), lt = function(e, t) {
                t = t || Pe();
                var n = nt(this.config.env), r = e.cloudPath, o = e.filePath, i = e.onUploadProgress, a = e.fileType, s = void 0 === a ? "image" : a;
                return n.send("storage.getUploadMetadata", {
                    path: r
                }).then(function(e) {
                    var a = e.data, u = a.url, c = a.authorization, f = a.token, l = a.fileId, d = a.cosFileId, h = e.requestId, p = {
                        key: r,
                        signature: c,
                        "x-cos-meta-fileid": d,
                        success_action_status: "201",
                        "x-cos-security-token": f
                    };
                    n.upload({
                        url: u,
                        data: p,
                        file: o,
                        name: r,
                        fileType: s,
                        onUploadProgress: i
                    }).then(function(e) {
                        201 === e.statusCode ? t(null, {
                            fileID: l,
                            requestId: h
                        }) : t(new pe({
                            code: "STORAGE_REQUEST_FAIL",
                            message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
                        }));
                    }).catch(function(e) {
                        t(e);
                    });
                }).catch(function(e) {
                    t(e);
                }), t.promise;
            }, dt = function(e, t) {
                t = t || Pe();
                var n = nt(this.config.env), r = e.cloudPath;
                return n.send("storage.getUploadMetadata", {
                    path: r
                }).then(function(e) {
                    t(null, e);
                }).catch(function(e) {
                    t(e);
                }), t.promise;
            }, ht = function(e, t) {
                var n = e.fileList;
                if (t = t || Pe(), !n || !Array.isArray(n)) return {
                    code: "INVALID_PARAM",
                    message: "fileList必须是非空的数组"
                };
                var r, o = f(n);
                try {
                    for (o.s(); !(r = o.n()).done; ) {
                        var i = r.value;
                        if (!i || "string" != typeof i) return {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是非空的字符串"
                        };
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    o.e(e);
                } finally {
                    o.f();
                }
                var a = {
                    fileid_list: n
                };
                return nt(this.config.env).send("storage.batchDeleteFile", a).then(function(e) {
                    e.code ? t(null, e) : t(null, {
                        fileList: e.data.delete_list,
                        requestId: e.requestId
                    });
                }).catch(function(e) {
                    t(e);
                }), t.promise;
            }, pt = function(e, n) {
                var r = e.fileList;
                n = n || Pe(), r && Array.isArray(r) || n(null, {
                    code: "INVALID_PARAM",
                    message: "fileList必须是非空的数组"
                });
                var o, i = [], a = f(r);
                try {
                    for (a.s(); !(o = a.n()).done; ) {
                        var s = o.value;
                        "object" == t(s) ? (s.hasOwnProperty("fileID") && s.hasOwnProperty("maxAge") || n(null, {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是包含fileID和maxAge的对象"
                        }), i.push({
                            fileid: s.fileID,
                            max_age: s.maxAge
                        })) : "string" == typeof s ? i.push({
                            fileid: s
                        }) : n(null, {
                            code: "INVALID_PARAM",
                            message: "fileList的元素必须是字符串"
                        });
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    a.e(e);
                } finally {
                    a.f();
                }
                var u = {
                    file_list: i
                };
                return nt(this.config.env).send("storage.batchGetDownloadUrl", u).then(function(e) {
                    e.code ? n(null, e) : n(null, {
                        fileList: e.data.download_list,
                        requestId: e.requestId
                    });
                }).catch(function(e) {
                    n(e);
                }), n.promise;
            }, vt = function() {
                var e = p(i.default.mark(function e(t, n) {
                    var r, o, a, s;
                    return i.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = t.fileID, e.next = 3, pt.call(this, {
                                fileList: [ {
                                    fileID: r,
                                    maxAge: 600
                                } ]
                            });

                          case 3:
                            if ("SUCCESS" === (o = e.sent.fileList[0]).code) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", n ? n(o) : new Promise(function(e) {
                                e(o);
                            }));

                          case 6:
                            if (a = nt(this.config.env), s = o.download_url, s = encodeURI(s), n) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", a.download({
                                url: s
                            }));

                          case 10:
                            return e.t0 = n, e.next = 13, a.download({
                                url: s
                            });

                          case 13:
                            e.t1 = e.sent, (0, e.t0)(e.t1);

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            }(), gt = function(e, t) {
                var n, r = e.name, o = e.data, i = e.query, a = e.parse, s = e.search, u = t || Pe();
                try {
                    n = o ? JSON.stringify(o) : "";
                } catch (r) {
                    r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                    return Promise.reject(r);
                }
                if (!r) return Promise.reject(new pe({
                    code: "PARAM_ERROR",
                    message: "函数名不能为空"
                }));
                var c = {
                    inQuery: i,
                    parse: a,
                    search: s,
                    function_name: r,
                    request_data: n
                };
                return nt(this.config.env).send("functions.invokeFunction", c).then(function(e) {
                    if (e.code) u(null, e); else {
                        var t = e.data.response_data;
                        if (a) u(null, {
                            result: t,
                            requestId: e.requestId
                        }); else try {
                            t = JSON.parse(e.data.response_data), u(null, {
                                result: t,
                                requestId: e.requestId
                            });
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            u(new pe({
                                message: "response data must be json"
                            }));
                        }
                    }
                    return u.promise;
                }).catch(function(e) {
                    u(e);
                }), u.promise;
            }, yt = {
                timeout: 15e3,
                persistence: "session"
            }, mt = {}, bt = new (function() {
                function e(t) {
                    _(this, e), this.config = t || this.config, this.authObj = void 0;
                }
                return g(e, [ {
                    key: "init",
                    value: function(t) {
                        switch (je.adapter || (this.requestClient = new je.adapter.reqClass({
                            timeout: t.timeout || 5e3,
                            timeoutMsg: "请求在".concat((t.timeout || 5e3) / 1e3, "s内未完成，已中断")
                        })), this.config = m(m({}, yt), t), !0) {
                          case this.config.timeout > 6e5:
                            console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
                            break;

                          case this.config.timeout < 100:
                            console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
                        }
                        return new e(this.config);
                    }
                }, {
                    key: "auth",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.persistence;
                        if (this.authObj) return this.authObj;
                        var n, r = t || je.adapter.primaryStorage || yt.persistence;
                        return r !== this.config.persistence && (this.config.persistence = r), function(e) {
                            var t = e.env;
                            Ne[t] = new Le(e), Re[t] = new Le(m(m({}, e), {}, {
                                persistence: "local"
                            }));
                        }(this.config), n = this.config, tt[n.env] = new et(n), this.authObj = new ft(this.config), 
                        this.authObj;
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        return Ue.apply(this, [ e, t ]);
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        return He.apply(this, [ e, t ]);
                    }
                }, {
                    key: "callFunction",
                    value: function(e, t) {
                        return gt.apply(this, [ e, t ]);
                    }
                }, {
                    key: "deleteFile",
                    value: function(e, t) {
                        return ht.apply(this, [ e, t ]);
                    }
                }, {
                    key: "getTempFileURL",
                    value: function(e, t) {
                        return pt.apply(this, [ e, t ]);
                    }
                }, {
                    key: "downloadFile",
                    value: function(e, t) {
                        return vt.apply(this, [ e, t ]);
                    }
                }, {
                    key: "uploadFile",
                    value: function(e, t) {
                        return lt.apply(this, [ e, t ]);
                    }
                }, {
                    key: "getUploadMetadata",
                    value: function(e, t) {
                        return dt.apply(this, [ e, t ]);
                    }
                }, {
                    key: "registerExtension",
                    value: function(e) {
                        mt[e.name] = e;
                    }
                }, {
                    key: "invokeExtension",
                    value: function() {
                        var e = p(i.default.mark(function e(t, n) {
                            var r;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (r = mt[t]) {
                                        e.next = 3;
                                        break;
                                    }
                                    throw new pe({
                                        message: "扩展".concat(t, " 必须先注册")
                                    });

                                  case 3:
                                    return e.next = 5, r.invoke(n, this);

                                  case 5:
                                    return e.abrupt("return", e.sent);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }, {
                    key: "useAdapters",
                    value: function(e) {
                        var t = function(e) {
                            var t, n, r = f((t = e, "[object Array]" === Object.prototype.toString.call(t) ? e : [ e ]));
                            try {
                                for (r.s(); !(n = r.n()).done; ) {
                                    var o = n.value, i = o.isMatch, a = o.genAdapter, s = o.runtime;
                                    if (i()) return {
                                        adapter: a(),
                                        runtime: s
                                    };
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                r.e(e);
                            } finally {
                                r.f();
                            }
                        }(e) || {}, n = t.adapter, r = t.runtime;
                        n && (je.adapter = n), r && (je.runtime = r);
                    }
                } ]), e;
            }())();
            function _t(e, t, n) {
                void 0 === n && (n = {});
                var r = /\?/.test(t), o = "";
                for (var i in n) "" === o ? !r && (t += "?") : o += "&", o += i + "=" + encodeURIComponent(n[i]);
                return /^http(s)?:\/\//.test(t += o) ? t : "" + e + t;
            }
            var wt = function() {
                function e() {
                    _(this, e);
                }
                return g(e, [ {
                    key: "post",
                    value: function(e) {
                        var t = e.url, n = e.data, r = e.headers;
                        return new Promise(function(e, o) {
                            _e.request({
                                url: _t("https:", t),
                                data: n,
                                method: "POST",
                                header: r,
                                success: function(t) {
                                    e(t);
                                },
                                fail: function(e) {
                                    o(e);
                                }
                            });
                        });
                    }
                }, {
                    key: "upload",
                    value: function(e) {
                        return new Promise(function(t, n) {
                            var r = e.url, o = e.file, i = e.data, a = e.headers, s = e.fileType, u = _e.uploadFile({
                                url: _t("https:", r),
                                name: "file",
                                formData: Object.assign({}, i),
                                filePath: o,
                                fileType: s,
                                header: a,
                                success: function(e) {
                                    var n = {
                                        statusCode: e.statusCode,
                                        data: e.data || {}
                                    };
                                    200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), 
                                    t(n);
                                },
                                fail: function(e) {
                                    n(new Error(e.errMsg || "uploadFile:fail"));
                                }
                            });
                            "function" == typeof e.onUploadProgress && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function(t) {
                                e.onUploadProgress({
                                    loaded: t.totalBytesSent,
                                    total: t.totalBytesExpectedToSend
                                });
                            });
                        });
                    }
                } ]), e;
            }(), xt = {
                setItem: function(e, t) {
                    _e.setStorageSync(e, t);
                },
                getItem: function(e) {
                    return _e.getStorageSync(e);
                },
                removeItem: function(e) {
                    _e.removeStorageSync(e);
                },
                clear: function() {
                    _e.clearStorageSync();
                }
            }, kt = {
                genAdapter: function() {
                    return {
                        root: {},
                        reqClass: wt,
                        localStorage: xt,
                        primaryStorage: "local"
                    };
                },
                isMatch: function() {
                    return !0;
                },
                runtime: "uni_app"
            };
            bt.useAdapters(kt);
            var St = bt, Ot = St.init;
            St.init = function(e) {
                e.env = e.spaceId;
                var t = Ot.call(this, e);
                t.config.provider = "tencent", t.config.spaceId = e.spaceId;
                var n = t.auth;
                return t.auth = function(e) {
                    var t = n.call(this, e);
                    return [ "linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo" ].forEach(function(e) {
                        t[e] = de(t[e]).bind(t);
                    }), t;
                }, t.customAuth = t.auth, t;
            };
            var At = St;
            function Pt() {
                return {
                    token: _e.getStorageSync("uni_id_token") || _e.getStorageSync("uniIdToken"),
                    tokenExpired: _e.getStorageSync("uni_id_token_expired")
                };
            }
            function Tt() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.token, n = e.tokenExpired;
                t && _e.setStorageSync("uni_id_token", t), n && _e.setStorageSync("uni_id_token_expired", n);
            }
            var Et = function(e) {
                w(n, e);
                var t = x(n);
                function n() {
                    return _(this, n), t.apply(this, arguments);
                }
                return g(n, [ {
                    key: "getAccessToken",
                    value: function() {
                        var e = this;
                        return new Promise(function(t, n) {
                            var r = "Anonymous_Access_token";
                            e.setAccessToken(r), t(r);
                        });
                    }
                }, {
                    key: "setupRequest",
                    value: function(e, t) {
                        var n = Object.assign({}, e, {
                            spaceId: this.config.spaceId,
                            timestamp: Date.now()
                        }), r = {
                            "Content-Type": "application/json"
                        };
                        "auth" !== t && (n.token = this.accessToken, r["x-basement-token"] = this.accessToken), 
                        r["x-serverless-sign"] = ye(n, this.config.clientSecret);
                        var o = ve();
                        r["x-client-info"] = encodeURIComponent(JSON.stringify(o));
                        var i = Pt().token;
                        return r["x-client-token"] = i, {
                            url: this.config.requestUrl,
                            method: "POST",
                            data: n,
                            dataType: "json",
                            header: JSON.parse(JSON.stringify(r))
                        };
                    }
                }, {
                    key: "uploadFileToOSS",
                    value: function(e) {
                        var t = this, n = e.url, r = e.formData, o = e.name, i = e.filePath, a = e.fileType, s = e.onUploadProgress;
                        return new Promise(function(e, u) {
                            var c = t.adapter.uploadFile({
                                url: n,
                                formData: r,
                                name: o,
                                filePath: i,
                                fileType: a,
                                success: function(t) {
                                    t && t.statusCode < 400 ? e(t) : u(new pe({
                                        code: "UPLOAD_FAILED",
                                        message: "文件上传失败"
                                    }));
                                },
                                fail: function(e) {
                                    u(new pe({
                                        code: e.code || "UPLOAD_FAILED",
                                        message: e.message || e.errMsg || "文件上传失败"
                                    }));
                                }
                            });
                            "function" == typeof s && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function(e) {
                                s({
                                    loaded: e.totalBytesSent,
                                    total: e.totalBytesExpectedToSend
                                });
                            });
                        });
                    }
                }, {
                    key: "uploadFile",
                    value: function(e) {
                        var t, n = this, r = e.filePath, o = e.cloudPath, i = e.fileType, a = void 0 === i ? "image" : i, s = e.onUploadProgress;
                        if (!o) throw new pe({
                            code: "CLOUDPATH_REQUIRED",
                            message: "cloudPath不可为空"
                        });
                        return this.getOSSUploadOptionsFromPath({
                            cloudPath: o
                        }).then(function(e) {
                            var o = e.result, i = o.url, u = o.formData, c = o.name;
                            t = e.result.fileUrl;
                            var f = {
                                url: i,
                                formData: u,
                                name: c,
                                filePath: r,
                                fileType: a
                            };
                            return n.uploadFileToOSS(Object.assign({}, f, {
                                onUploadProgress: s
                            }));
                        }).then(function() {
                            return n.reportOSSUpload({
                                cloudPath: o
                            });
                        }).then(function(e) {
                            return new Promise(function(n, o) {
                                e.success ? n({
                                    success: !0,
                                    filePath: r,
                                    fileID: t
                                }) : o(new pe({
                                    code: "UPLOAD_FAILED",
                                    message: "文件上传失败"
                                }));
                            });
                        });
                    }
                }, {
                    key: "deleteFile",
                    value: function(e) {
                        var t = e.fileList, n = {
                            method: "serverless.file.resource.delete",
                            params: JSON.stringify({
                                fileList: t
                            })
                        };
                        return this.request(this.setupRequest(n));
                    }
                }, {
                    key: "getTempFileURL",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.fileList, n = {
                            method: "serverless.file.resource.getTempFileURL",
                            params: JSON.stringify({
                                fileList: t
                            })
                        };
                        return this.request(this.setupRequest(n));
                    }
                } ]), n;
            }(ke), jt = {
                init: function(e) {
                    var t = new Et(e), n = {
                        signInAnonymously: function() {
                            return t.authorize();
                        },
                        getLoginState: function() {
                            return Promise.resolve(!1);
                        }
                    };
                    return t.auth = function() {
                        return n;
                    }, t.customAuth = t.auth, t;
                }
            };
            function Ct(e) {
                var t, n = e.data;
                t = ve();
                var r = JSON.parse(JSON.stringify(n || {}));
                if (Object.assign(r, {
                    clientInfo: t
                }), !r.uniIdToken) {
                    var o = Pt().token;
                    o && (r.uniIdToken = o);
                }
                return r;
            }
            var It = [ {
                rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
                content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
                mode: "append"
            } ], Dt = /[\\^$.*+?()[\]{}|]/g, Lt = RegExp(Dt.source);
            function Nt(e, t, n) {
                return e.replace(new RegExp((r = t) && Lt.test(r) ? r.replace(Dt, "\\$&") : r, "g"), n);
                var r;
            }
            function Rt(e) {
                var t = e.functionName, n = e.result, r = e.logPvd;
                if (this.__dev__.debugLog && n && n.requestId) {
                    var o = JSON.stringify({
                        spaceId: this.config.spaceId,
                        functionName: t,
                        requestId: n.requestId
                    });
                    console.log("[".concat(r, "-request]").concat(o, "[/").concat(r, "-request]"));
                }
            }
            var $t = Symbol("CLIENT_DB_INTERNAL");
            function Mt(e, t) {
                return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = $t, 
                e.__ob__ = void 0, new Proxy(e, {
                    get: function(e, n, r) {
                        if ("_uniClient" === n) return null;
                        if (n in e || "string" != typeof n) {
                            var o = e[n];
                            return "function" == typeof o ? o.bind(e) : o;
                        }
                        return t.get(e, n, r);
                    }
                });
            }
            function Ft(e) {
                return {
                    on: function(t, n) {
                        e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
                    },
                    off: function(t, n) {
                        e[t] = e[t] || [];
                        var r = e[t].indexOf(n);
                        -1 !== r && e[t].splice(r, 1);
                    }
                };
            }
            var Bt = [ "db.Geo", "db.command", "command.aggregate" ];
            function Ut(e, t) {
                return Bt.indexOf("".concat(e, ".").concat(t)) > -1;
            }
            function qt(e) {
                switch (R(e)) {
                  case "array":
                    return e.map(function(e) {
                        return qt(e);
                    });

                  case "object":
                    return e._internalType === $t || Object.keys(e).forEach(function(t) {
                        e[t] = qt(e[t]);
                    }), e;

                  case "regexp":
                    return {
                        $regexp: {
                            source: e.source,
                            flags: e.flags
                        }
                    };

                  case "date":
                    return {
                        $date: e.toISOString()
                    };

                  default:
                    return e;
                }
            }
            function Ht(e) {
                return e && e.content && e.content.$method;
            }
            var Vt = function() {
                function e(t, n, r) {
                    _(this, e), this.content = t, this.prevStage = n || null, this.udb = null, this._database = r;
                }
                return g(e, [ {
                    key: "toJSON",
                    value: function() {
                        for (var e = this, t = [ e.content ]; e.prevStage; ) e = e.prevStage, t.push(e.content);
                        return {
                            $db: t.reverse().map(function(e) {
                                return {
                                    $method: e.$method,
                                    $param: qt(e.$param)
                                };
                            })
                        };
                    }
                }, {
                    key: "getAction",
                    value: function() {
                        var e = this.toJSON().$db.find(function(e) {
                            return "action" === e.$method;
                        });
                        return e && e.$param && e.$param[0];
                    }
                }, {
                    key: "getCommand",
                    value: function() {
                        return {
                            $db: this.toJSON().$db.filter(function(e) {
                                return "action" !== e.$method;
                            })
                        };
                    }
                }, {
                    key: "get",
                    value: function() {
                        return this._send("get", Array.from(arguments));
                    }
                }, {
                    key: "add",
                    value: function() {
                        return this._send("add", Array.from(arguments));
                    }
                }, {
                    key: "update",
                    value: function() {
                        return this._send("update", Array.from(arguments));
                    }
                }, {
                    key: "end",
                    value: function() {
                        return this._send("end", Array.from(arguments));
                    }
                }, {
                    key: "_send",
                    value: function(e, t) {
                        var n = this.getAction(), r = this.getCommand();
                        return r.$db.push({
                            $method: e,
                            $param: qt(t)
                        }), this._database._callCloudFunction({
                            action: n,
                            command: r
                        });
                    }
                }, {
                    key: "isAggregate",
                    get: function() {
                        for (var e = this; e; ) {
                            var t = Ht(e), n = Ht(e.prevStage);
                            if ("aggregate" === t && "collection" === n || "pipeline" === t) return !0;
                            e = e.prevStage;
                        }
                        return !1;
                    }
                }, {
                    key: "isCommand",
                    get: function() {
                        for (var e = this; e; ) {
                            if ("command" === Ht(e)) return !0;
                            e = e.prevStage;
                        }
                        return !1;
                    }
                }, {
                    key: "isAggregateCommand",
                    get: function() {
                        for (var e = this; e; ) {
                            var t = Ht(e), n = Ht(e.prevStage);
                            if ("aggregate" === t && "command" === n) return !0;
                            e = e.prevStage;
                        }
                        return !1;
                    }
                }, {
                    key: "count",
                    get: function() {
                        if (!this.isAggregate) return function() {
                            return this._send("count", Array.from(arguments));
                        };
                        var e = this;
                        return function() {
                            return Kt({
                                $method: "count",
                                $param: qt(Array.from(arguments))
                            }, e, this._database);
                        };
                    }
                }, {
                    key: "remove",
                    get: function() {
                        if (!this.isCommand) return function() {
                            return this._send("remove", Array.from(arguments));
                        };
                        var e = this;
                        return function() {
                            return Kt({
                                $method: "remove",
                                $param: qt(Array.from(arguments))
                            }, e, this._database);
                        };
                    }
                }, {
                    key: "set",
                    get: function() {
                        if (!this.isCommand) return function() {
                            throw new Error("JQL禁止使用set方法");
                        };
                        var e = this;
                        return function() {
                            return Kt({
                                $method: "set",
                                $param: qt(Array.from(arguments))
                            }, e, this._database);
                        };
                    }
                } ]), e;
            }();
            function Kt(e, t, n) {
                return Mt(new Vt(e, t, n), {
                    get: function(e, t) {
                        var r = "db";
                        return e && e.content && (r = e.content.$method), Ut(r, t) ? Kt({
                            $method: t
                        }, e, n) : function() {
                            return Kt({
                                $method: t,
                                $param: qt(Array.from(arguments))
                            }, e, n);
                        };
                    }
                });
            }
            function zt(e) {
                var t = e.path, n = e.method;
                return function() {
                    function e() {
                        _(this, e), this.param = Array.from(arguments);
                    }
                    return g(e, [ {
                        key: "toJSON",
                        value: function() {
                            return {
                                $newDb: [].concat(c(t.map(function(e) {
                                    return {
                                        $method: e
                                    };
                                })), [ {
                                    $method: n,
                                    $param: this.param
                                } ])
                            };
                        }
                    } ]), e;
                }();
            }
            var Wt = function(e) {
                w(n, e);
                var t = x(n);
                function n() {
                    return _(this, n), t.apply(this, arguments);
                }
                return g(n, [ {
                    key: "_callCloudFunction",
                    value: function(e) {
                        var t = this, n = e.action, r = e.command, o = e.multiCommand, i = e.queryList;
                        function a(e, t) {
                            if (o && i) for (var n = 0; n < i.length; n++) {
                                var r = i[n];
                                r.udb && "function" == typeof r.udb.setResult && (t ? r.udb.setResult(t) : r.udb.setResult(e.result.dataList[n]));
                            }
                        }
                        var s = this;
                        function u(e) {
                            return s._callback("error", [ e ]), J(X("database", "fail"), e).then(function() {
                                return J(X("database", "complete"), e);
                            }).then(function() {
                                return a(null, e), ue(Z, {
                                    type: ne,
                                    content: e
                                }), Promise.reject(e);
                            });
                        }
                        var c = J(X("database", "invoke")), f = this._uniClient;
                        return c.then(function() {
                            return f.callFunction({
                                name: "DCloud-clientDB",
                                type: "CLIENT_DB",
                                data: {
                                    action: n,
                                    command: r,
                                    multiCommand: o
                                }
                            });
                        }).then(function(e) {
                            var n = e.result, r = n.code, o = n.message, i = n.token, s = n.tokenExpired, c = n.systemInfo, f = void 0 === c ? [] : c;
                            if (f) for (var l = 0; l < f.length; l++) {
                                var d = f[l], h = d.level, p = d.message, v = d.detail, g = console["app" === F && "warn" === h ? "error" : h] || console.log, y = "[System Info]" + p;
                                v && (y = "".concat(y, "\n详细信息：").concat(v)), g(y);
                            }
                            if (r) return u(new pe({
                                code: r,
                                message: o,
                                requestId: e.requestId
                            }));
                            e.result.errCode = e.result.code, e.result.errMsg = e.result.message, i && s && (Tt({
                                token: i,
                                tokenExpired: s
                            }), t._callbackAuth("refreshToken", [ {
                                token: i,
                                tokenExpired: s
                            } ]), t._callback("refreshToken", [ {
                                token: i,
                                tokenExpired: s
                            } ]), ue(te, {
                                token: i,
                                tokenExpired: s
                            }));
                            for (var m = [ {
                                prop: "affectedDocs",
                                tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
                            }, {
                                prop: "code",
                                tips: "code不再推荐使用，请使用errCode替代"
                            }, {
                                prop: "message",
                                tips: "message不再推荐使用，请使用errMsg替代"
                            } ], b = function(t) {
                                var n = m[t], r = n.prop, o = n.tips;
                                if (r in e.result) {
                                    var i = e.result[r];
                                    Object.defineProperty(e.result, r, {
                                        get: function() {
                                            return console.warn(o), i;
                                        }
                                    });
                                }
                            }, _ = 0; _ < m.length; _++) b(_);
                            return function(e) {
                                return J(X("database", "success"), e).then(function() {
                                    return J(X("database", "complete"), e);
                                }).then(function() {
                                    return a(e, null), ue(Z, {
                                        type: ne,
                                        content: e
                                    }), Promise.resolve(e);
                                });
                            }(e);
                        }, function(e) {
                            return /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), 
                            u(new pe({
                                code: e.code || "SYSTEM_ERROR",
                                message: e.message,
                                requestId: e.requestId
                            }));
                        });
                    }
                } ]), n;
            }(function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.uniClient, r = void 0 === n ? {} : n;
                    _(this, e), this._uniClient = r, this._authCallBacks = {}, this._dbCallBacks = {}, 
                    r.isDefault && (this._dbCallBacks = V("_globalUniCloudDatabaseCallback")), this.auth = Ft(this._authCallBacks), 
                    Object.assign(this, Ft(this._dbCallBacks)), this.env = Mt({}, {
                        get: function(e, t) {
                            return {
                                $env: t
                            };
                        }
                    }), this.Geo = Mt({}, {
                        get: function(e, t) {
                            return zt({
                                path: [ "Geo" ],
                                method: t
                            });
                        }
                    }), this.serverDate = zt({
                        path: [],
                        method: "serverDate"
                    }), this.RegExp = zt({
                        path: [],
                        method: "RegExp"
                    });
                }
                return g(e, [ {
                    key: "getCloudEnv",
                    value: function(e) {
                        if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
                        return {
                            $env: e.replace("$cloudEnv_", "")
                        };
                    }
                }, {
                    key: "_callback",
                    value: function(e, t) {
                        var n = this._dbCallBacks;
                        n[e] && n[e].forEach(function(e) {
                            e.apply(void 0, c(t));
                        });
                    }
                }, {
                    key: "_callbackAuth",
                    value: function(e, t) {
                        var n = this._authCallBacks;
                        n[e] && n[e].forEach(function(e) {
                            e.apply(void 0, c(t));
                        });
                    }
                }, {
                    key: "multiSend",
                    value: function() {
                        var e = Array.from(arguments), t = e.map(function(e) {
                            var t = e.getAction(), n = e.getCommand();
                            if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
                            return {
                                action: t,
                                command: n
                            };
                        });
                        return this._callCloudFunction({
                            multiCommand: t,
                            queryList: e
                        });
                    }
                } ]), e;
            }());
            var Gt = "token无效，跳转登录页面", Jt = "token过期，跳转登录页面", Xt = {
                TOKEN_INVALID_TOKEN_EXPIRED: Jt,
                TOKEN_INVALID_INVALID_CLIENTID: Gt,
                TOKEN_INVALID: Gt,
                TOKEN_INVALID_WRONG_TOKEN: Gt,
                TOKEN_INVALID_ANONYMOUS_USER: Gt
            }, Yt = {
                "uni-id-token-expired": Jt,
                "uni-id-check-token-failed": Gt,
                "uni-id-token-not-exist": Gt,
                "uni-id-check-device-feature-failed": Gt
            };
            function Qt(e, t) {
                return (e ? "".concat(e, "/").concat(t) : t).replace(/^\//, "");
            }
            function Zt() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = [], r = [];
                return e.forEach(function(e) {
                    !0 === e.needLogin ? n.push(Qt(t, e.path)) : !1 === e.needLogin && r.push(Qt(t, e.path));
                }), {
                    needLoginPage: n,
                    notNeedLoginPage: r
                };
            }
            function en(e) {
                return e.split("?")[0].replace(/^\//, "");
            }
            function tn() {
                return function(e) {
                    var t = e && e.$page && e.$page.fullPath || "";
                    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
                }(function() {
                    var e = getCurrentPages();
                    return e[e.length - 1];
                }());
            }
            function nn() {
                return en(tn());
            }
            function rn() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e) return !1;
                if (!(t && t.list && t.list.length)) return !1;
                var n = t.list, r = en(e);
                return n.some(function(e) {
                    return e.pagePath === r;
                });
            }
            var on, an = !!s.default.uniIdRouter, sn = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default, t = e.pages, n = void 0 === t ? [] : t, r = e.subPackages, o = void 0 === r ? [] : r, i = e.uniIdRouter, a = void 0 === i ? {} : i, u = e.tabBar, f = void 0 === u ? {} : u, l = a.loginPage, d = a.needLogin, h = void 0 === d ? [] : d, p = a.resToLogin, v = void 0 === p || p, g = Zt(n), y = g.needLoginPage, m = g.notNeedLoginPage, b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = [], n = [];
                    return e.forEach(function(e) {
                        var r = e.root, o = e.pages, i = Zt(void 0 === o ? [] : o, r), a = i.needLoginPage, s = i.notNeedLoginPage;
                        t.push.apply(t, c(a)), n.push.apply(n, c(s));
                    }), {
                        needLoginPage: t,
                        notNeedLoginPage: n
                    };
                }(o), _ = b.needLoginPage, w = b.notNeedLoginPage;
                return {
                    loginPage: l,
                    routerNeedLogin: h,
                    resToLogin: v,
                    needLoginPage: [].concat(c(y), c(_)),
                    notNeedLoginPage: [].concat(c(m), c(w)),
                    loginPageInTabBar: rn(l, f)
                };
            }(), un = sn.loginPage, cn = sn.routerNeedLogin, fn = sn.resToLogin, ln = sn.needLoginPage, dn = sn.notNeedLoginPage, hn = sn.loginPageInTabBar;
            if (ln.indexOf(un) > -1) throw new Error("Login page [".concat(un, '] should not be "needLogin", please check your pages.json'));
            function pn(e) {
                var t = en(function(e) {
                    var t = nn(), n = e.charAt(0), r = e.split("?")[0];
                    if ("/" === n) return r;
                    var o = r.replace(/^\//, "").split("/"), i = t.split("/");
                    i.pop();
                    for (var a = 0; a < o.length; a++) {
                        var s = o[a];
                        ".." === s ? i.pop() : "." !== s && i.push(s);
                    }
                    return "" === i[0] && i.shift(), i.join("/");
                }(e));
                return !(dn.indexOf(t) > -1) && (ln.indexOf(t) > -1 || cn.some(function(t) {
                    return function(e, t) {
                        return new RegExp(t).test(e);
                    }(e, t);
                }));
            }
            function vn(e) {
                var t = en(e.redirect), n = en(un);
                return nn() !== n && t !== n;
            }
            function gn() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.api, n = e.redirect;
                if (n && vn({
                    redirect: n
                })) {
                    var r = function(e, t) {
                        return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
                    }(un, n);
                    hn ? "navigateTo" !== t && "redirectTo" !== t || (t = "switchTab") : "switchTab" === t && (t = "navigateTo"), 
                    setTimeout(function() {
                        o[t]({
                            url: r
                        });
                    });
                }
            }
            function yn() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.url, n = {
                    abortLoginPageJump: !1,
                    autoToLoginPage: !1
                }, r = function() {
                    var e, t = Pt(), n = t.token, r = t.tokenExpired;
                    if (n) {
                        if (r < Date.now()) {
                            var o = "uni-id-token-expired";
                            e = {
                                errCode: o,
                                errMsg: Yt[o]
                            };
                        }
                    } else {
                        var i = "uni-id-check-token-failed";
                        e = {
                            errCode: i,
                            errMsg: Yt[i]
                        };
                    }
                    return e;
                }();
                if (pn(t) && r) {
                    if (r.uniIdRedirectUrl = t, ie(ee).length > 0) return setTimeout(function() {
                        ue(ee, r);
                    }, 0), n.abortLoginPageJump = !0, n;
                    n.autoToLoginPage = !0;
                }
                return n;
            }
            function mn() {
                !function() {
                    var e = tn(), t = yn({
                        url: e
                    }), n = t.abortLoginPageJump, r = t.autoToLoginPage;
                    n || r && gn({
                        api: "redirectTo",
                        redirect: e
                    });
                }();
                for (var e = [ "navigateTo", "redirectTo", "reLaunch", "switchTab" ], t = function(t) {
                    var n = e[t];
                    o.addInterceptor(n, {
                        invoke: function(e) {
                            var t = yn({
                                url: e.url
                            }), r = t.abortLoginPageJump, o = t.autoToLoginPage;
                            return r ? e : o ? (gn({
                                api: n,
                                redirect: e.url
                            }), !1) : e;
                        }
                    });
                }, n = 0; n < e.length; n++) t(n);
            }
            function bn() {
                this.onResponse(function(e) {
                    var t = e.type, n = e.content, r = !1;
                    switch (t) {
                      case "cloudobject":
                        r = function(e) {
                            return e.errCode in Yt;
                        }(n);
                        break;

                      case "clientdb":
                        r = function(e) {
                            return e.errCode in Xt;
                        }(n);
                    }
                    r && function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = ie(ee);
                        le().then(function() {
                            var n = tn();
                            if (n && vn({
                                redirect: n
                            })) return t.length > 0 ? ue(ee, Object.assign({
                                uniIdRedirectUrl: n
                            }, e)) : void (un && gn({
                                api: "navigateTo",
                                redirect: n
                            }));
                        });
                    }(n);
                });
            }
            function _n(e) {
                !function(e) {
                    e.onResponse = function(e) {
                        ae(Z, e);
                    }, e.offResponse = function(e) {
                        se(Z, e);
                    };
                }(e), function(e) {
                    e.onNeedLogin = function(e) {
                        ae(ee, e);
                    }, e.offNeedLogin = function(e) {
                        se(ee, e);
                    }, an && (V("uni-cloud-status").needLoginInit || (V("uni-cloud-status").needLoginInit = !0, 
                    le().then(function() {
                        mn.call(e);
                    }), fn && bn.call(e)));
                }(e), function(e) {
                    e.onRefreshToken = function(e) {
                        ae(te, e);
                    }, e.offRefreshToken = function(e) {
                        se(te, e);
                    };
                }(e);
            }
            var wn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", xn = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
            function kn() {
                var e, t, n = Pt().token || "", r = n.split(".");
                if (!n || 3 !== r.length) return {
                    uid: null,
                    role: [],
                    permission: [],
                    tokenExpired: 0
                };
                try {
                    e = JSON.parse((t = r[1], decodeURIComponent(on(t).split("").map(function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                    }).join(""))));
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    throw new Error("获取当前用户信息出错，详细错误信息为：" + n.message);
                }
                return e.tokenExpired = 1e3 * e.exp, delete e.exp, delete e.iat, e;
            }
            on = "function" != typeof atob ? function(e) {
                if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !xn.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
                var t;
                e += "==".slice(2 - (3 & e.length));
                for (var n, r, o = "", i = 0; i < e.length; ) t = wn.indexOf(e.charAt(i++)) << 18 | wn.indexOf(e.charAt(i++)) << 12 | (n = wn.indexOf(e.charAt(i++))) << 6 | (r = wn.indexOf(e.charAt(i++))), 
                o += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
                return o;
            } : atob;
            var Sn = function(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
            }(E(function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "chooseAndUploadFile:ok", r = "chooseAndUploadFile:fail";
                function i(e, t) {
                    return e.tempFiles.forEach(function(e, n) {
                        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), 
                        e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
                    }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function(e) {
                        return e.path;
                    })), e;
                }
                function a(e, t, r) {
                    var o = r.onChooseFile, i = r.onUploadProgress;
                    return t.then(function(e) {
                        if (o) {
                            var t = o(e);
                            if (void 0 !== t) return Promise.resolve(t).then(function(t) {
                                return void 0 === t ? e : t;
                            });
                        }
                        return e;
                    }).then(function(t) {
                        return !1 === t ? {
                            errMsg: n,
                            tempFilePaths: [],
                            tempFiles: []
                        } : function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5, o = arguments.length > 3 ? arguments[3] : void 0;
                            (t = Object.assign({}, t)).errMsg = n;
                            var i = t.tempFiles, a = i.length, s = 0;
                            return new Promise(function(n) {
                                for (;s < r; ) u();
                                function u() {
                                    var r = s++;
                                    if (r >= a) !i.find(function(e) {
                                        return !e.url && !e.errMsg;
                                    }) && n(t); else {
                                        var c = i[r];
                                        e.uploadFile({
                                            filePath: c.path,
                                            cloudPath: c.cloudPath,
                                            fileType: c.fileType,
                                            onUploadProgress: function(e) {
                                                e.index = r, e.tempFile = c, e.tempFilePath = c.path, o && o(e);
                                            }
                                        }).then(function(e) {
                                            c.url = e.fileID, r < a && u();
                                        }).catch(function(e) {
                                            c.errMsg = e.errMsg || e.message, r < a && u();
                                        });
                                    }
                                }
                            });
                        }(e, t, 5, i);
                    });
                }
                t.initChooseAndUploadFile = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            type: "all"
                        };
                        return "image" === t.type ? a(e, function(e) {
                            var t = e.count, n = e.sizeType, a = e.sourceType, s = void 0 === a ? [ "album", "camera" ] : a, u = e.extension;
                            return new Promise(function(e, a) {
                                o.chooseImage({
                                    count: t,
                                    sizeType: n,
                                    sourceType: s,
                                    extension: u,
                                    success: function(t) {
                                        e(i(t, "image"));
                                    },
                                    fail: function(e) {
                                        a({
                                            errMsg: e.errMsg.replace("chooseImage:fail", r)
                                        });
                                    }
                                });
                            });
                        }(t), t) : "video" === t.type ? a(e, function(e) {
                            var t = e.camera, n = e.compressed, a = e.maxDuration, s = e.sourceType, u = void 0 === s ? [ "album", "camera" ] : s, c = e.extension;
                            return new Promise(function(e, s) {
                                o.chooseVideo({
                                    camera: t,
                                    compressed: n,
                                    maxDuration: a,
                                    sourceType: u,
                                    extension: c,
                                    success: function(t) {
                                        var n = t.tempFilePath, r = t.duration, o = t.size, a = t.height, s = t.width;
                                        e(i({
                                            errMsg: "chooseVideo:ok",
                                            tempFilePaths: [ n ],
                                            tempFiles: [ {
                                                name: t.tempFile && t.tempFile.name || "",
                                                path: n,
                                                size: o,
                                                type: t.tempFile && t.tempFile.type || "",
                                                width: s,
                                                height: a,
                                                duration: r,
                                                fileType: "video",
                                                cloudPath: ""
                                            } ]
                                        }, "video"));
                                    },
                                    fail: function(e) {
                                        s({
                                            errMsg: e.errMsg.replace("chooseVideo:fail", r)
                                        });
                                    }
                                });
                            });
                        }(t), t) : a(e, function(e) {
                            var t = e.count, n = e.extension;
                            return new Promise(function(e, a) {
                                var s = o.chooseFile;
                                if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (s = wx.chooseMessageFile), 
                                "function" != typeof s) return a({
                                    errMsg: r + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
                                });
                                s({
                                    type: "all",
                                    count: t,
                                    extension: n,
                                    success: function(t) {
                                        e(i(t));
                                    },
                                    fail: function(e) {
                                        a({
                                            errMsg: e.errMsg.replace("chooseFile:fail", r)
                                        });
                                    }
                                });
                            });
                        }(t), t);
                    };
                };
            }));
            function On(e) {
                return {
                    props: {
                        localdata: {
                            type: Array,
                            default: function() {
                                return [];
                            }
                        },
                        options: {
                            type: [ Object, Array ],
                            default: function() {
                                return {};
                            }
                        },
                        spaceInfo: {
                            type: Object,
                            default: function() {
                                return {};
                            }
                        },
                        collection: {
                            type: [ String, Array ],
                            default: ""
                        },
                        action: {
                            type: String,
                            default: ""
                        },
                        field: {
                            type: String,
                            default: ""
                        },
                        orderby: {
                            type: String,
                            default: ""
                        },
                        where: {
                            type: [ String, Object ],
                            default: ""
                        },
                        pageData: {
                            type: String,
                            default: "add"
                        },
                        pageCurrent: {
                            type: Number,
                            default: 1
                        },
                        pageSize: {
                            type: Number,
                            default: 20
                        },
                        getcount: {
                            type: [ Boolean, String ],
                            default: !1
                        },
                        gettree: {
                            type: [ Boolean, String ],
                            default: !1
                        },
                        gettreepath: {
                            type: [ Boolean, String ],
                            default: !1
                        },
                        startwith: {
                            type: String,
                            default: ""
                        },
                        limitlevel: {
                            type: Number,
                            default: 10
                        },
                        groupby: {
                            type: String,
                            default: ""
                        },
                        groupField: {
                            type: String,
                            default: ""
                        },
                        distinct: {
                            type: [ Boolean, String ],
                            default: !1
                        },
                        foreignKey: {
                            type: String,
                            default: ""
                        },
                        loadtime: {
                            type: String,
                            default: "auto"
                        },
                        manual: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            mixinDatacomLoading: !1,
                            mixinDatacomHasMore: !1,
                            mixinDatacomResData: [],
                            mixinDatacomErrorMessage: "",
                            mixinDatacomPage: {}
                        };
                    },
                    created: function() {
                        var e = this;
                        this.mixinDatacomPage = {
                            current: this.pageCurrent,
                            size: this.pageSize,
                            count: 0
                        }, this.$watch(function() {
                            var t = [];
                            return [ "pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct" ].forEach(function(n) {
                                t.push(e[n]);
                            }), t;
                        }, function(t, n) {
                            if ("manual" !== e.loadtime) {
                                for (var r = !1, o = [], i = 2; i < t.length; i++) t[i] !== n[i] && (o.push(t[i]), 
                                r = !0);
                                t[0] !== n[0] && (e.mixinDatacomPage.current = e.pageCurrent), e.mixinDatacomPage.size = e.pageSize, 
                                e.onMixinDatacomPropsChange(r, o);
                            }
                        });
                    },
                    methods: {
                        onMixinDatacomPropsChange: function(e, t) {},
                        mixinDatacomEasyGet: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.getone, r = void 0 !== n && n, o = t.success, i = t.fail;
                            this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", 
                            this.mixinDatacomGet().then(function(t) {
                                e.mixinDatacomLoading = !1;
                                var n = t.result, i = n.data, a = n.count;
                                e.getcount && (e.mixinDatacomPage.count = a), e.mixinDatacomHasMore = i.length < e.pageSize;
                                var s = r ? i.length ? i[0] : void 0 : i;
                                e.mixinDatacomResData = s, o && o(s);
                            }).catch(function(t) {
                                e.mixinDatacomLoading = !1, e.mixinDatacomErrorMessage = t, i && i(t);
                            }));
                        },
                        mixinDatacomGet: function() {
                            var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e.database(this.spaceInfo), o = n.action || this.action;
                            o && (r = r.action(o));
                            var i = n.collection || this.collection;
                            r = Array.isArray(i) ? (t = r).collection.apply(t, c(i)) : r.collection(i);
                            var a = n.where || this.where;
                            a && Object.keys(a).length && (r = r.where(a));
                            var s = n.field || this.field;
                            s && (r = r.field(s));
                            var u = n.foreignKey || this.foreignKey;
                            u && (r = r.foreignKey(u));
                            var f = n.groupby || this.groupby;
                            f && (r = r.groupBy(f));
                            var l = n.groupField || this.groupField;
                            l && (r = r.groupField(l)), !0 === (void 0 !== n.distinct ? n.distinct : this.distinct) && (r = r.distinct());
                            var d = n.orderby || this.orderby;
                            d && (r = r.orderBy(d));
                            var h = void 0 !== n.pageCurrent ? n.pageCurrent : this.mixinDatacomPage.current, p = void 0 !== n.pageSize ? n.pageSize : this.mixinDatacomPage.size, v = void 0 !== n.getcount ? n.getcount : this.getcount, g = void 0 !== n.gettree ? n.gettree : this.gettree, y = void 0 !== n.gettreepath ? n.gettreepath : this.gettreepath, m = {
                                getCount: v
                            }, b = {
                                limitLevel: void 0 !== n.limitlevel ? n.limitlevel : this.limitlevel,
                                startWith: void 0 !== n.startwith ? n.startwith : this.startwith
                            };
                            return g && (m.getTree = b), y && (m.getTreePath = b), r = r.skip(p * (h - 1)).limit(p).get(m);
                        }
                    }
                };
            }
            function An(e) {
                if (!e.initUniCloudStatus || "rejected" === e.initUniCloudStatus) {
                    var t = Promise.resolve();
                    1, t = new Promise(function(e, t) {
                        setTimeout(function() {
                            e();
                        }, 1);
                    }), e.isReady = !1, e.isDefault = !1;
                    var n = e.auth();
                    e.initUniCloudStatus = "pending", e.initUniCloud = t.then(function() {
                        return n.getLoginState();
                    }).then(function(e) {
                        return e ? Promise.resolve() : n.signInAnonymously();
                    }).then(function() {
                        return Promise.resolve();
                    }).then(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.address, e.port;
                        return Promise.resolve();
                    }).then(function() {
                        e.isReady = !0, e.initUniCloudStatus = "fulfilled";
                    }).catch(function(t) {
                        console.error(t), e.initUniCloudStatus = "rejected";
                    });
                }
            }
            var Pn = {
                tcb: At,
                tencent: At,
                aliyun: Se,
                private: jt
            }, Tn = new (function() {
                function e() {
                    _(this, e);
                }
                return g(e, [ {
                    key: "init",
                    value: function(e) {
                        var n = {}, r = Pn[e.provider];
                        if (!r) throw new Error("未提供正确的provider参数");
                        (n = r.init(e)).__dev__ = {}, n.__dev__.debugLog = !1;
                        return An(n), n.reInit = function() {
                            An(this);
                        }, function(e) {
                            var t = e.callFunction, n = function(n) {
                                var r = this, o = n.name;
                                n.data = Ct.call(e, {
                                    data: n.data
                                });
                                var i = {
                                    aliyun: "aliyun",
                                    tencent: "tcb",
                                    tcb: "tcb"
                                }[this.config.provider];
                                return t.call(this, n).then(function(e) {
                                    return e.errCode = 0, Rt.call(r, {
                                        functionName: o,
                                        result: e,
                                        logPvd: i
                                    }), Promise.resolve(e);
                                }, function(e) {
                                    return Rt.call(r, {
                                        functionName: o,
                                        result: e,
                                        logPvd: i
                                    }), e && e.message && (e.message = function() {
                                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.message, n = void 0 === t ? "" : t, r = e.extraInfo, o = void 0 === r ? {} : r, i = e.formatter, a = void 0 === i ? [] : i, s = 0; s < a.length; s++) {
                                            var u = a[s], c = u.rule, f = u.content, l = u.mode, d = n.match(c);
                                            if (d) {
                                                for (var h = f, p = 1; p < d.length; p++) h = Nt(h, "{$".concat(p, "}"), d[p]);
                                                for (var v in o) h = Nt(h, "{".concat(v, "}"), o[v]);
                                                return "replace" === l ? h : n + h;
                                            }
                                        }
                                        return n;
                                    }({
                                        message: "[".concat(n.name, "]: ").concat(e.message),
                                        formatter: It,
                                        extraInfo: {
                                            functionName: o
                                        }
                                    })), Promise.reject(e);
                                });
                            };
                            e.callFunction = function(t) {
                                var r = n.bind(e)(t);
                                return Object.defineProperty(r, "result", {
                                    get: function() {
                                        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), 
                                        {};
                                    }
                                }), r;
                            };
                        }(n), function(e) {
                            var t = e.uploadFile;
                            e.uploadFile = function(e) {
                                return t.call(this, e);
                            };
                        }(n), function(e) {
                            e.database = function(t) {
                                if (t && Object.keys(t).length > 0) return e.init(t).database();
                                if (this._database) return this._database;
                                var n = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return Mt(new e(t), {
                                        get: function(e, t) {
                                            return Ut("db", t) ? Kt({
                                                $method: t
                                            }, null, e) : function() {
                                                return Kt({
                                                    $method: t,
                                                    $param: qt(Array.from(arguments))
                                                }, null, e);
                                            };
                                        }
                                    });
                                }(Wt, {
                                    uniClient: e
                                });
                                return this._database = n, n;
                            };
                        }(n), function(e) {
                            e.getCurrentUserInfo = kn, e.chooseAndUploadFile = Sn.initChooseAndUploadFile(e), 
                            Object.assign(e, {
                                get mixinDatacom() {
                                    return On(e);
                                }
                            }), e.importObject = function(e) {
                                return function(n) {
                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = r = function(e) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return e.customUI = n.customUI || e.customUI, Object.assign(e.loadingOptions, n.loadingOptions), 
                                        Object.assign(e.errorOptions, n.errorOptions), "object" == t(n.secretMethods) && (e.secretMethods = n.secretMethods), 
                                        e;
                                    }({
                                        customUI: !1,
                                        loadingOptions: {
                                            title: "加载中...",
                                            mask: !0
                                        },
                                        errorOptions: {
                                            type: "modal",
                                            retry: !1
                                        }
                                    }, r), s = a.customUI, u = a.loadingOptions, c = a.errorOptions, f = !s;
                                    return new Proxy({}, {
                                        get: function(a, s) {
                                            return function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.fn, n = e.interceptorName, r = e.getCallbackArgs;
                                                return p(i.default.mark(function e() {
                                                    var o, a, s, u, c, f, l = arguments;
                                                    return i.default.wrap(function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                          case 0:
                                                            for (o = l.length, a = new Array(o), s = 0; s < o; s++) a[s] = l[s];
                                                            return u = r ? r({
                                                                params: a
                                                            }) : {}, e.prev = 2, e.next = 5, J(X(n, "invoke"), m({}, u));

                                                          case 5:
                                                            return e.next = 7, t.apply(void 0, a);

                                                          case 7:
                                                            return c = e.sent, e.next = 10, J(X(n, "success"), m(m({}, u), {}, {
                                                                result: c
                                                            }));

                                                          case 10:
                                                            return e.abrupt("return", c);

                                                          case 13:
                                                            return e.prev = 13, e.t0 = e.catch(2), f = e.t0, e.next = 18, J(X(n, "fail"), m(m({}, u), {}, {
                                                                error: f
                                                            }));

                                                          case 18:
                                                            throw f;

                                                          case 19:
                                                            return e.prev = 19, e.next = 22, J(X(n, "complete"), m(m({}, u), {}, f ? {
                                                                error: f
                                                            } : {
                                                                result: c
                                                            }));

                                                          case 22:
                                                            return e.finish(19);

                                                          case 23:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    }, e, null, [ [ 2, 13, 19, 23 ] ]);
                                                }));
                                            }({
                                                fn: function() {
                                                    var a = p(i.default.mark(function a() {
                                                        var d, h, v, g, y, b, _, w, x, k, S, O, A = arguments;
                                                        return i.default.wrap(function(a) {
                                                            for (;;) switch (a.prev = a.next) {
                                                              case 0:
                                                                for (f && o.showLoading({
                                                                    title: u.title,
                                                                    mask: u.mask
                                                                }), h = A.length, v = new Array(h), g = 0; g < h; g++) v[g] = A[g];
                                                                return y = {
                                                                    name: n,
                                                                    type: N,
                                                                    data: {
                                                                        method: s,
                                                                        params: v
                                                                    }
                                                                }, "object" == t(r.secretMethods) && function(e, t) {
                                                                    var n = t.data.method, r = e.secretMethods || {}, o = r[n] || r["*"];
                                                                    o && (t.secret = o);
                                                                }(r, y), a.prev = 4, a.next = 7, e.callFunction(y);

                                                              case 7:
                                                                d = a.sent, a.next = 13;
                                                                break;

                                                              case 10:
                                                                a.prev = 10, a.t0 = a.catch(4), d = {
                                                                    result: a.t0
                                                                };

                                                              case 13:
                                                                if (b = d.result || {}, _ = b.errCode, w = b.errMsg, x = b.newToken, f && o.hideLoading(), 
                                                                x && x.token && x.tokenExpired && (Tt(x), ue(te, m({}, x))), !_) {
                                                                    a.next = 30;
                                                                    break;
                                                                }
                                                                if (!f) {
                                                                    a.next = 28;
                                                                    break;
                                                                }
                                                                if ("toast" !== c.type) {
                                                                    a.next = 20;
                                                                    break;
                                                                }
                                                                o.showToast({
                                                                    title: w,
                                                                    icon: "none"
                                                                }), a.next = 28;
                                                                break;

                                                              case 20:
                                                                if ("modal" === c.type) {
                                                                    a.next = 22;
                                                                    break;
                                                                }
                                                                throw new Error("Invalid errorOptions.type: ".concat(c.type));

                                                              case 22:
                                                                return a.next = 24, p(i.default.mark(function e() {
                                                                    var t, n, r, a, s, u, c = arguments;
                                                                    return i.default.wrap(function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                          case 0:
                                                                            return t = c.length > 0 && void 0 !== c[0] ? c[0] : {}, n = t.title, r = t.content, 
                                                                            a = t.showCancel, s = t.cancelText, u = t.confirmText, e.abrupt("return", new Promise(function(e, t) {
                                                                                o.showModal({
                                                                                    title: n,
                                                                                    content: r,
                                                                                    showCancel: a,
                                                                                    cancelText: s,
                                                                                    confirmText: u,
                                                                                    success: function(t) {
                                                                                        e(t);
                                                                                    },
                                                                                    fail: function() {
                                                                                        e({
                                                                                            confirm: !1,
                                                                                            cancel: !0
                                                                                        });
                                                                                    }
                                                                                });
                                                                            }));

                                                                          case 2:
                                                                          case "end":
                                                                            return e.stop();
                                                                        }
                                                                    }, e);
                                                                }))({
                                                                    title: "提示",
                                                                    content: w,
                                                                    showCancel: c.retry,
                                                                    cancelText: "取消",
                                                                    confirmText: c.retry ? "重试" : "确定"
                                                                });

                                                              case 24:
                                                                if (k = a.sent, S = k.confirm, !c.retry || !S) {
                                                                    a.next = 28;
                                                                    break;
                                                                }
                                                                return a.abrupt("return", l.apply(void 0, v));

                                                              case 28:
                                                                throw (O = new pe({
                                                                    code: _,
                                                                    message: w,
                                                                    requestId: d.requestId
                                                                })).detail = d.result, ue(Z, {
                                                                    type: oe,
                                                                    content: O
                                                                }), O;

                                                              case 30:
                                                                return a.abrupt("return", (ue(Z, {
                                                                    type: oe,
                                                                    content: d.result
                                                                }), d.result));

                                                              case 31:
                                                              case "end":
                                                                return a.stop();
                                                            }
                                                        }, a, null, [ [ 4, 10 ] ]);
                                                    }));
                                                    function l() {
                                                        return a.apply(this, arguments);
                                                    }
                                                    return l;
                                                }(),
                                                interceptorName: "callObject",
                                                getCallbackArgs: function() {
                                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.params;
                                                    return {
                                                        objectName: n,
                                                        methodName: s,
                                                        params: t
                                                    };
                                                }
                                            });
                                        }
                                    });
                                };
                            }(e);
                        }(n), [ "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile" ].forEach(function(e) {
                            if (n[e]) {
                                var t = n[e];
                                n[e] = function() {
                                    return n.reInit(), t.apply(n, Array.from(arguments));
                                }, n[e] = de(n[e], e).bind(n);
                            }
                        }), n.init = this.init, n;
                    }
                } ]), e;
            }())();
            !function() {
                var e = U, t = {};
                if (e && 1 === e.length) t = e[0], (Tn = Tn.init(t)).isDefault = !0; else {
                    var n;
                    n = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", 
                    [ "auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject" ].forEach(function(e) {
                        Tn[e] = function() {
                            return console.error(n), Promise.reject(new pe({
                                code: "SYS_ERR",
                                message: n
                            }));
                        };
                    });
                }
                Object.assign(Tn, {
                    get mixinDatacom() {
                        return On(Tn);
                    }
                }), _n(Tn), Tn.addInterceptor = W, Tn.removeInterceptor = G, Tn.interceptObject = Y;
            }();
            var En = Tn;
            n.default = En;
        }).call(this, r("c8ba"), r("543d").default);
    },
    aed0: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("66fd")), o = i(n("26cb"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            r.default.use(o.default);
            var a = {};
            try {
                a = e.getStorageSync("lifeData");
            } catch (e) {}
            var s = [ "vuex_user", "vuex_systemShow", "vuex_writeShow", "vuex_indexAd", "vuex_centerAd", "vuex_findAd", "vuex_userAd", "vuex_listAd", "vuex_awardAd" ], u = function(t, n) {
                if (-1 != s.indexOf(t)) {
                    var r = e.getStorageSync("lifeData");
                    (r = r || {})[t] = n, e.setStorageSync("lifeData", r);
                }
            }, c = new o.default.Store({
                state: {
                    vuex_user: a.vuex_user ? a.vuex_user : "",
                    vuex_writeShow: a.vuex_writeShow ? a.vuex_writeShow : "",
                    vuex_bannerAd: a.vuex_bannerAd ? a.vuex_bannerAd : "",
                    vuex_gridAd: a.vuex_gridAd ? a.vuex_gridAd : "",
                    vuex_sgridAd: a.vuex_sgridAd ? a.vuex_sgridAd : "",
                    vuex_awardAd: a.vuex_awardAd ? a.vuex_awardAd : "",
                    vuex_plaqueAd: a.vuex_plaqueAd ? a.vuex_plaqueAd : "",
                    vuex_hfAd: a.vuex_hfAd ? a.vuex_hfAd : "",
                    vuex_adAd: a.vuex_adAd ? a.vuex_adAd : ""
                },
                mutations: {
                    $uStore: function(e, t) {
                        var n = t.name.split("."), r = "", o = n.length;
                        if (o >= 2) {
                            for (var i = e[n[0]], a = 1; a < o - 1; a++) i = i[n[a]];
                            i[n[o - 1]] = t.value, r = n[0];
                        } else e[t.name] = t.value, r = t.name;
                        u(r, e[r]);
                    }
                }
            });
            t.default = c;
        }).call(this, n("543d").default);
    },
    b16a: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            methods: {
                escape2Html: function(e) {
                    if (!e) return e;
                    var t = {
                        lt: "<",
                        gt: ">",
                        nbsp: " ",
                        amp: "&",
                        quot: '"'
                    };
                    return e.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(e, n) {
                        return t[n];
                    });
                },
                html2Escape: function(e) {
                    return e ? e.replace(/[<>&"]/g, function(e) {
                        return {
                            "<": "&lt;",
                            ">": "&gt;",
                            "&": "&amp;",
                            '"': "&quot;"
                        }[e];
                    }) : e;
                },
                setData: function(e, t) {
                    var n = this;
                    Object.keys(e).forEach(function(t) {
                        var r, o, i = e[t], a = (t = t.replace(/\]/g, "").replace(/\[/g, ".")).lastIndexOf(".");
                        -1 != a ? (o = t.slice(a + 1), r = function(e, t, n) {
                            var r = e;
                            return (t = t.split(".")).forEach(function(t) {
                                if (null === e[t] || void 0 === e[t]) {
                                    e[t] = /^[0-9]+$/.test(n) ? [] : {}, r = e[t];
                                } else r = e[t];
                            }), r;
                        }(n, t.slice(0, a), o)) : (o = t, r = n), r.$data && void 0 === r.$data[o] ? (Object.defineProperty(r, o, {
                            get: function() {
                                return r.$data[o];
                            },
                            set: function(e) {
                                r.$data[o] = e, n.hasOwnProperty("$forceUpdate") && n.$forceUpdate();
                            },
                            enumerable: !0,
                            configurable: !0
                        }), r[o] = i) : n.$set(r, o, i);
                    }), function(e) {
                        return "function" == typeof e || !1;
                    }(t) && this.$nextTick(t);
                }
            }
        };
        t.default = r;
    },
    b517: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = "1.8.3", o = {
            v: r,
            version: r,
            type: [ "primary", "success", "info", "error", "warning" ]
        };
        t.default = o;
    },
    b967: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t = this.$parent; t; ) {
                if (!t.$options || t.$options.name === e) return t;
                t = t.$parent;
            }
            return !1;
        };
    },
    bbdd: function(e, n, r) {
        var o = function() {
            return this || "object" === ("undefined" == typeof self ? "undefined" : t(self)) && self;
        }() || Function("return this")(), i = o.regeneratorRuntime && Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime") >= 0, a = i && o.regeneratorRuntime;
        if (o.regeneratorRuntime = void 0, e.exports = r("96cf"), i) o.regeneratorRuntime = a; else try {
            delete o.regeneratorRuntime;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            o.regeneratorRuntime = void 0;
        }
    },
    bc57: function(e, t) {
        function n(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a), u = s.value;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return void n(e);
            }
            s.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        e.exports = function(e) {
            return function() {
                var t = this, r = arguments;
                return new Promise(function(o, i) {
                    function a(e) {
                        n(u, o, i, a, s, "next", e);
                    }
                    function s(e) {
                        n(u, o, i, a, s, "throw", e);
                    }
                    var u = e.apply(t, r);
                    a(void 0);
                });
            };
        };
    },
    c8ba: function(e, n) {
        var r;
        r = function() {
            return this;
        }();
        try {
            r = r || new Function("return this")();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            "object" === ("undefined" == typeof window ? "undefined" : t(window)) && (r = window);
        }
        e.exports = r;
    },
    cab6: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = null;
        var o = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null !== r && clearTimeout(r), n) {
                var o = !r;
                r = setTimeout(function() {
                    r = null;
                }, t), o && "function" == typeof e && e();
            } else r = setTimeout(function() {
                "function" == typeof e && e();
            }, t);
        };
        t.default = o;
    },
    cd31: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "brackets", r = t ? "?" : "", o = [];
            -1 == [ "indices", "brackets", "repeat", "comma" ].indexOf(n) && (n = "brackets");
            var i = function(t) {
                var r = e[t];
                if ([ "", void 0, null ].indexOf(r) >= 0) return "continue";
                if (r.constructor === Array) switch (n) {
                  case "indices":
                    for (var i = 0; i < r.length; i++) o.push(t + "[" + i + "]=" + r[i]);
                    break;

                  case "brackets":
                    r.forEach(function(e) {
                        o.push(t + "[]=" + e);
                    });
                    break;

                  case "repeat":
                    r.forEach(function(e) {
                        o.push(t + "=" + e);
                    });
                    break;

                  case "comma":
                    var a = "";
                    r.forEach(function(e) {
                        a += (a ? "," : "") + e;
                    }), o.push(t + "=" + a);
                    break;

                  default:
                    r.forEach(function(e) {
                        o.push(t + "[]=" + e);
                    });
                } else o.push(t + "=" + r);
            };
            for (var a in e) i(a);
            return o.length ? r + o.join("&") : "";
        };
        t.default = r;
    },
    db76: function(e, t, n) {
        var r = n("26cb"), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("aed0"));
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var s = [];
        try {
            s = o.default.state ? Object.keys(o.default.state) : [];
        } catch (e) {}
        e.exports = {
            beforeCreate: function() {
                var e = this;
                this.$u.vuex = function(t, n) {
                    e.$store.commit("$uStore", {
                        name: t,
                        value: n
                    });
                };
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, (0, r.mapState)(s))
        };
    },
    df7c: function(e, t, n) {
        (function(e) {
            function n(e, t) {
                for (var n = 0, r = e.length - 1; r >= 0; r--) {
                    var o = e[r];
                    "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), 
                    n--);
                }
                if (t) for (;n--; n) e.unshift("..");
                return e;
            }
            function r(e, t) {
                if (e.filter) return e.filter(t);
                for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                return n;
            }
            t.resolve = function() {
                for (var t = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
                    var a = i >= 0 ? arguments[i] : e.cwd();
                    if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                    a && (t = a + "/" + t, o = "/" === a.charAt(0));
                }
                return (o ? "/" : "") + (t = n(r(t.split("/"), function(e) {
                    return !!e;
                }), !o).join("/")) || ".";
            }, t.normalize = function(e) {
                var i = t.isAbsolute(e), a = "/" === o(e, -1);
                return (e = n(r(e.split("/"), function(e) {
                    return !!e;
                }), !i).join("/")) || i || (e = "."), e && a && (e += "/"), (i ? "/" : "") + e;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0);
            }, t.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return t.normalize(r(e, function(e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e;
                }).join("/"));
            }, t.relative = function(e, n) {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++) ;
                    for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) ;
                    return t > n ? [] : e.slice(t, n - t + 1);
                }
                e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
                for (var o = r(e.split("/")), i = r(n.split("/")), a = Math.min(o.length, i.length), s = a, u = 0; u < a; u++) if (o[u] !== i[u]) {
                    s = u;
                    break;
                }
                var c = [];
                for (u = s; u < o.length; u++) c.push("..");
                return (c = c.concat(i.slice(s))).join("/");
            }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                for (var t = e.charCodeAt(0), n = 47 === t, r = -1, o = !0, i = e.length - 1; i >= 1; --i) if (47 === (t = e.charCodeAt(i))) {
                    if (!o) {
                        r = i;
                        break;
                    }
                } else o = !1;
                return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r);
            }, t.basename = function(e, t) {
                var n = function(e) {
                    "string" != typeof e && (e += "");
                    var t, n = 0, r = -1, o = !0;
                    for (t = e.length - 1; t >= 0; --t) if (47 === e.charCodeAt(t)) {
                        if (!o) {
                            n = t + 1;
                            break;
                        }
                    } else -1 === r && (o = !1, r = t + 1);
                    return -1 === r ? "" : e.slice(n, r);
                }(e);
                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), 
                n;
            }, t.extname = function(e) {
                "string" != typeof e && (e += "");
                for (var t = -1, n = 0, r = -1, o = !0, i = 0, a = e.length - 1; a >= 0; --a) {
                    var s = e.charCodeAt(a);
                    if (47 !== s) -1 === r && (o = !1, r = a + 1), 46 === s ? -1 === t ? t = a : 1 !== i && (i = 1) : -1 !== t && (i = -1); else if (!o) {
                        n = a + 1;
                        break;
                    }
                }
                return -1 === t || -1 === r || 0 === i || 1 === i && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
            };
            var o = "b" === "ab".substr(-1) ? function(e, t, n) {
                return e.substr(t, n);
            } : function(e, t, n) {
                return t < 0 && (t = e.length + t), e.substr(t, n);
            };
        }).call(this, n("4362"));
    },
    e17f: function(e, n, r) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function(e, n) {
            for (var r = this.$parent; r; ) if (r.$options.name !== e) r = r.$parent; else {
                var o = function() {
                    var e = {};
                    if (Array.isArray(n)) n.map(function(t) {
                        e[t] = r[t] ? r[t] : "";
                    }); else for (var t in n) Array.isArray(n[t]) ? n[t].length ? e[t] = n[t] : e[t] = r[t] : n[t].constructor === Object ? Object.keys(n[t]).length ? e[t] = n[t] : e[t] = r[t] : e[t] = n[t] || !1 === n[t] ? n[t] : r[t];
                    return {
                        v: e
                    };
                }();
                if ("object" === t(o)) return o.v;
            }
            return {};
        };
    },
    efdb: function(e, t, n) {
        function r(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            if ((e = e.toLowerCase()) && n.test(e)) {
                if (4 === e.length) {
                    for (var r = "#", o = 1; o < 4; o += 1) r += e.slice(o, o + 1).concat(e.slice(o, o + 1));
                    e = r;
                }
                for (var i = [], a = 1; a < 7; a += 2) i.push(parseInt("0x" + e.slice(a, a + 2)));
                return t ? "rgb(".concat(i[0], ",").concat(i[1], ",").concat(i[2], ")") : i;
            }
            if (/^(rgb|RGB)/.test(e)) {
                var s = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
                return s.map(function(e) {
                    return Number(e);
                });
            }
            return e;
        }
        function o(e) {
            var t = e;
            if (/^(rgb|RGB)/.test(t)) {
                for (var n = t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), r = "#", o = 0; o < n.length; o++) {
                    var i = Number(n[o]).toString(16);
                    "0" === (i = 1 == String(i).length ? "0" + i : i) && (i += i), r += i;
                }
                return 7 !== r.length && (r = t), r;
            }
            if (!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)) return t;
            var a = t.replace(/#/, "").split("");
            if (6 === a.length) return t;
            if (3 === a.length) {
                for (var s = "#", u = 0; u < a.length; u += 1) s += a[u] + a[u];
                return s;
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            colorGradient: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "rgb(0, 0, 0)", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rgb(255, 255, 255)", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, i = r(e, !1), a = i[0], s = i[1], u = i[2], c = r(t, !1), f = c[0], l = c[1], d = c[2], h = (f - a) / n, p = (l - s) / n, v = (d - u) / n, g = [], y = 0; y < n; y++) {
                    var m = o("rgb(" + Math.round(h * y + a) + "," + Math.round(p * y + s) + "," + Math.round(v * y + u) + ")");
                    g.push(m);
                }
                return g;
            },
            hexToRgb: r,
            rgbToHex: o,
            colorToRgba: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3, n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/, r = (e = o(e)).toLowerCase();
                if (r && n.test(r)) {
                    if (4 === r.length) {
                        for (var i = "#", a = 1; a < 4; a += 1) i += r.slice(a, a + 1).concat(r.slice(a, a + 1));
                        r = i;
                    }
                    for (var s = [], u = 1; u < 7; u += 2) s.push(parseInt("0x" + r.slice(u, u + 2)));
                    return "rgba(" + s.join(",") + "," + t + ")";
                }
                return r;
            }
        };
        t.default = i;
    },
    f0c5: function(e, t, n) {
        function r(e, t, n, r, o, i, a, s, u, c) {
            var f, l = "function" == typeof e ? e.options : e;
            if (u) {
                l.components || (l.components = {});
                var d = Object.prototype.hasOwnProperty;
                for (var h in u) d.call(u, h) && !d.call(l.components, h) && (l.components[h] = u[h]);
            }
            if (c && ((c.beforeCreate || (c.beforeCreate = [])).unshift(function() {
                this[c.__module] = this;
            }), (l.mixins || (l.mixins = [])).push(c)), t && (l.render = t, l.staticRenderFns = n, 
            l._compiled = !0), r && (l.functional = !0), i && (l._scopeId = "data-v-" + i), 
            a ? (f = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), 
                o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
            }, l._ssrRegister = f) : o && (f = s ? function() {
                o.call(this, this.$root.$options.shadowRoot);
            } : o), f) if (l.functional) {
                l._injectStyles = f;
                var p = l.render;
                l.render = function(e, t) {
                    return f.call(t), p(e, t);
                };
            } else {
                var v = l.beforeCreate;
                l.beforeCreate = v ? [].concat(v, f) : [ f ];
            }
            return {
                exports: e,
                options: l
            };
        }
        n.d(t, "a", function() {
            return r;
        });
    },
    f461: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        t.default = {
            appid: "__UNI__CB0ABD3"
        };
    },
    f967: function(e, n, r) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r("5bdc"));
        var i = function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (n = (0, o.default)(n), "object" !== t(n) || "object" !== t(r)) return !1;
            for (var i in r) r.hasOwnProperty(i) && (i in n ? "object" !== t(n[i]) || "object" !== t(r[i]) ? n[i] = r[i] : n[i].concat && r[i].concat ? n[i] = n[i].concat(r[i]) : n[i] = e(n[i], r[i]) : n[i] = r[i]);
            return n;
        };
        n.default = i;
    },
    fabb: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.alert = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise(function(r, o) {
                    e.showToast(Object.assign({
                        title: t,
                        success: r,
                        fail: o
                    }, n));
                });
            }, t.request = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise(function(r, o) {
                    e.request(Object.assign({}, n, {
                        url: t,
                        success: function(e) {
                            r(e);
                        },
                        fail: function() {
                            o(new Error("微信接口调用失败"));
                        }
                    }));
                });
            }, t.setStorage = function(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(o, i) {
                    e.setStorage(Object.assign({}, r, {
                        key: t,
                        data: n,
                        success: function() {
                            o(!0);
                        },
                        fail: function() {
                            i(new Error("微信接口调用失败"));
                        }
                    }));
                });
            }, t.getSystemInfo = function() {
                return new Promise(function(t, n) {
                    e.getSystemInfo({
                        success: function(e) {
                            t(e);
                        },
                        fail: n
                    });
                });
            }, t.getSystemInfoSync = function() {
                return e.getSystemInfoSync();
            };
        }).call(this, n("543d").default);
    }
} ]);