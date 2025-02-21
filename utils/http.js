var t = "https://webapi.shen88.cn";

module.exports = {
    post: function(n, e, o, a) {
        wx.request({
            url: n.indexOf("http") > -1 ? n : t + n,
            data: e,
            method: "post",
            header: {
                "Content-Type": "application/json",
                token: getApp().globalData.token
            },
            success: function(t) {
                return "function" == typeof o && o(t.data);
            },
            fail: function(t) {
                return "function" == typeof a && a(t);
            }
        });
    },
    get: function(n, e, o, a) {
        wx.request({
            url: n.indexOf("http") > -1 ? n : t + n,
            data: e,
            method: "get",
            header: {
                "Content-Type": "application/json",
                token: getApp().globalData.token
            },
            success: function(t) {
                return "function" == typeof o && o(t.data);
            },
            fail: function(t) {
                return "function" == typeof a && a(t);
            }
        });
    }
};