!function() {
    var e = null;
    function o() {
        var e = new Date();
        return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    }
    module.exports = {
        initUrgeVideo: function(n) {
            wx.createRewardedVideoAd && ((e = wx.createRewardedVideoAd({
                adUnitId: "adunit-4770dbe434d9be8"
            })).onLoad(function() {
                console.log("videoAd loaded");
            }), e.onError(function(e) {
                console.log("videoAd err" + e);
            }), e.onClose(function(e) {
                e && e.isEnded ? (wx.setStorageSync("day", o()), n()) : wx.showToast({
                    icon: "none",
                    title: "下载失败，请完整观看视频"
                });
            }));
        },
        showUrgeVideoIfNeed: function(n) {
            wx.getStorageSync("day") != o() ? wx.showModal({
                title: "温馨提示",
                content: "感谢支持，好东西要学会分享出去！",
                confirmText: "下载",
                cancelColor: "#666666",
                cancelText: "不下载",
                success: function(o) {
                    o.confirm ? e ? e.show().catch(function() {
                        n();
                    }) : n() : wx.showToast({
                        title: "保存失败",
                        icon: "none"
                    });
                },
                fail: function(e) {
                    n();
                }
            }) : n();
        }
    };
}();