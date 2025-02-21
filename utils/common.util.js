var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./object.util")), e = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}, a = function(t) {
    return [ t.getFullYear(), t.getMonth() + 1, t.getDate() ].map(e).join("-");
};

module.exports = {
    formatDate: a,
    formatTime: function(t) {
        return a(t) + " " + [ t.getHours(), t.getMinutes(), t.getSeconds() ].map(e).join(":");
    },
    $init: function(e) {
        e.$data = t.default.$copy(e.data, !0);
    },
    $digest: function(e) {
        var a = e.data, n = e.$data, u = {};
        for (var o in a) t.default.$isEqual(a[o], n[o]) || (u[o] = a[o], n[o] = t.default.$copy(a[o], !0));
        Object.keys(u).length && e.setData(u);
    }
};