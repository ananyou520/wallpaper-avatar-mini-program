Page({
    data: {},
    copyBtn(o) {
        wx.setClipboardData({
            data: o.target.dataset.kefu,
            success: function(o) {
                wx.showToast({
                    title: "【客服微信】复制成功",
                    icon: "none",
                    mask: "true"
                });
            }
        });
    },
    onLoad(o) {},
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    onPullDownRefresh() {},
    onReachBottom() {},
    onShareAppMessage() {}
});