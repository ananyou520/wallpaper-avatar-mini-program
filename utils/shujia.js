module.exports = {
    push: function(t) {
        console.log(11111222);
        var r = wx.getStorageSync("shujia");
        0 == r.length && (r = []), function(t) {
            var r = wx.getStorageSync("shujia");
            if (r) for (var e = 0; e < r.length; e++) if (r[e].url == t.url) return !0;
            return !1;
        }(t) || (r.push(t), wx.setStorage({
            key: "shujia",
            data: r
        }));
    },
    update: function(t, r) {
        console.log(t);
        var e = wx.getStorageSync("shujia");
        if (e) {
            console.log(r);
            for (var a = [], o = 0; o < e.length; o++) {
                var n = e[o];
                n.url == t && (n.num = r.num, n.numStr = r.title), a.push(n);
            }
            wx.setStorage({
                key: "shujia",
                data: a
            });
        }
    },
    getBook: function(t) {
        var r = wx.getStorageSync("shujia");
        if (r) for (var e = 0; e < r.length; e++) {
            var a = r[e];
            if (a.url == t) return a;
        }
    }
};