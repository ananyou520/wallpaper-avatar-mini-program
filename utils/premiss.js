module.exports = {
    checkAlbum: function(t) {
        !function(t, n, o) {
            wx.getSetting({
                success: function(n) {
                    null == n.authSetting[t] || n.authSetting[t] ? o() : function(t, n, o) {
                        wx.showModal({
                            title: "提示",
                            content: "你未授权相册,需要您同意授权",
                            showCancel: !1,
                            confirmText: "去授权",
                            success: function(t) {
                                t.confirm && wx.openSetting({
                                    success: function(t) {
                                        t.authSetting["scope.writePhotosAlbum"] ? o() : uni.showModal({
                                            title: "温馨提示",
                                            content: "未授权",
                                            showCancel: !1
                                        });
                                    }
                                });
                            }
                        });
                    }(0, 0, o);
                }
            });
        }("scope.writePhotosAlbum", 0, t);
    }
};