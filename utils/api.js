!function() {
    function t(t) {
        return [ t.getFullYear(), t.getMonth() + 1, t.getDate() ].map(a).join("");
    }
    function a(t) {
        return (t = t.toString())[1] ? t : "0" + t;
    }
    function e() {
        var t = wx.getStorageSync(c);
        return console.log("已用" + t), t;
    }
    function o() {
        wx.setStorage({
            key: c,
            data: 0
        });
    }
    function n() {
        return wx.getStorageSync("VIP");
    }
    function d(t) {
        wx.setStorage({
            key: "VIP",
            data: t
        });
    }
    var i = getApp(), c = "usedTime";
    module.exports = {
        getConfig: function(t) {
            wx.showLoading({
                title: "加载中..."
            }), i.globalData.objectId ? t() : console.log("2022年10月28日21:49:08");
        },
        getSearchVideo: function(t, a, e, o) {
            wx.request({
                url: "https://search.hyhuo.com/so/tag",
                method: "POST",
                data: {
                    keyword: t,
                    search_type: 3,
                    sort: "hot",
                    page: a
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    wx.hideLoading(), t.data && t.data.data ? e(t.data.data.data_list) : o(t.data.errMsg);
                },
                fail: function(t) {
                    wx.hideLoading(), o(0);
                }
            });
        },
        getSearchImg: function(t, a, e, o) {
            wx.request({
                url: "https://search.hyhuo.com/search/image_tag",
                method: "POST",
                data: {
                    keyword: t,
                    sort: "hot",
                    page: a
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    wx.hideLoading(), t.data && t.data.data ? e(t.data.data.data_list) : o(t.data.errMsg);
                },
                fail: function(t) {
                    wx.hideLoading(), o(0);
                }
            });
        },
        getHeadCategory: function(t, a) {
            wx.request({
                url: "https://spare.maibaapp.com/bbs/newUgc/category/list/0",
                method: "GET",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    wx.hideLoading(), e.data && e.data.data ? t(e.data.data.categoryList) : a("");
                },
                fail: function(t) {
                    wx.hideLoading(), a(0);
                }
            });
        },
        getHead: function(t, a, e, o, n) {
            wx.request({
                url: "https://spare.maibaapp.com/bbs/newUgc/category/info/0/" + t + "/" + a + "/" + e,
                method: "GET",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    wx.hideLoading(), t.data && t.data.data ? o(t.data.data.list) : n("");
                },
                fail: function(t) {
                    wx.hideLoading(), n(0);
                }
            });
        },
        refreshUsedTimeAndDate: function() {
            wx.getStorage({
                key: "date",
                success: function(a) {
                    a.data != t(new Date()) && (wx.setStorage({
                        key: "date",
                        data: t(new Date())
                    }), o(), d(!1));
                },
                fail: function(a) {
                    wx.setStorage({
                        key: "date",
                        data: t(new Date())
                    }), o(), d(!1);
                }
            });
        },
        addUsedTime: function() {
            var t = e();
            t += 1, wx.setStorage({
                key: c,
                data: t
            });
        },
        canUse: function(t) {
            return !(!n() && e() >= i.globalData.COUNT && (wx.showModal({
                title: "",
                content: "今日赠送下载次数已用完，观看一小段广告解锁今日无限次下载",
                confirmText: "观看",
                confirmColor: "red",
                success: function(a) {
                    a.confirm && t();
                }
            }), 1));
        },
        setVIP: d,
        getIsVIP: n
    };
}();