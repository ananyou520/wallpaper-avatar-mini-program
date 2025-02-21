Page({
    data: {
        analysis: []
    },
    copyBtn(a) {
        wx.setClipboardData({
            data: a.target.dataset.kefu,
            success: function(a) {
                wx.showToast({
                    title: "复制成功",
                    icon: "none",
                    mask: "true"
                });
            }
        });
    },
    clear_record() {
        this.setData({
            analysis: []
        }), wx.removeStorageSync("analysis");
    },
    onLoad(a) {
        let e = wx.getStorageSync("analysis");
        this.setData({
            analysis: e
        });
    },
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    onPullDownRefresh() {},
    onReachBottom() {},
    onShareAppMessage() {}
});