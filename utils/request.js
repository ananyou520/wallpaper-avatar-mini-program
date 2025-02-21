var t;

t = require("./util.js"), module.exports = {
    post: function(o, a, e) {
        var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = "udTWC4lo9nvJ", d = "TPEiquPs1CXBQztokPY8QQduhbI1Iufo", l = Math.floor(+new Date() / 1e3), s = t.getSign(l, i, d), u = "https://api.breaker.club" + o + "?ak=udTWC4lo9nvJ&sn=" + s;
        o.indexOf("?") > 0 && (u = "https://api.breaker.club" + o + "&ak=udTWC4lo9nvJ&sn=" + s), 
        console.log(u), a.t = l, a.ak = "udTWC4lo9nvJ", a.v = "1.0.7", a.plat = "wechat", 
        n && wx.showLoading({
            title: "加载中",
            mask: !0
        }), wx.request({
            url: u,
            data: a,
            method: "GET",
            header: {
                time: l
            },
            success: function(t) {
                wx.hideLoading();
                var o = t.data.code, a = t.data.msg;
                200 == o ? e(t.data) : wx.showToast({
                    title: a,
                    icon: "none"
                });
            },
       
        });
    }
};