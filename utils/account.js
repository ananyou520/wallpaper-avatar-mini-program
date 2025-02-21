var e = "https://webapi.shen88.cn";
module.exports = {
    getToken: function() {
        return wx.getStorageSync("accountToken");
    },
    setToken: function(e) {
        wx.setStorage({
            key: "accountToken",
            data: e
        });
    },
    getOpenId: function() {
        return wx.getStorageSync("openId");
    },
    setOpenId: function(e) {
        wx.setStorage({
            key: "openId",
            data: e
        });
    },
    getUnionId: function() {
        return wx.getStorageSync("openId");
    },
    setUnionId: function(e) {
        wx.setStorage({
            key: "unionId",
            data: e
        });
    },
    getImage: function() {
        return wx.getStorageSync("HeadImage");
    },
    setImage: function(e) {
        wx.setStorage({
            key: "HeadImage",
            data: e
        });
    },
    getName: function() {
        return wx.getStorageSync("NickName");
    },
    setName: function(e) {
        wx.setStorage({
            key: "NickName",
            data: e
        });
    },
    post: function(n, e, o, a) {
        wx.request({
            url: n.indexOf("http") > -1 ? n : e + n,
            data: e,
            method: "post",
            header: {
                "Content-Type": "application/json",
                token: getApp().globalData.token
            },
            success: function(e) {
                return "function" == typeof o && o(e.data);
            },
            fail: function(e) {
                return "function" == typeof a && a(e);
            }
        });
    },
    get: function(n, e, o, a) {
        wx.request({
            url: n.indexOf("http") > -1 ? n : e + n,
            data: e,
            method: "get",
            header: {
                "Content-Type": "application/json",
                token: getApp().globalData.token
            },
            success: function(e) {
                return "function" == typeof o && o(e.data);
            },
            fail: function(e) {
                return "function" == typeof a && a(e);
            }
        });
    }
};