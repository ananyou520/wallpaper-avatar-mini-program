var t;

t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}, module.exports = {
    formatTime: function(n) {
        var o = n.getFullYear(), e = n.getMonth() + 1, i = n.getDate(), s = n.getHours(), c = n.getMinutes(), u = n.getSeconds();
        return [ o, e, i ].map(t).join("/") + " " + [ s, c, u ].map(t).join(":");
    },
    savePicToAlbum: function(t) {
        wx.getSetting({
            success: function(n) {
                n.authSetting["scope.writePhotosAlbum"] ? wx.saveImageToPhotosAlbum({
                    filePath: t,
                    success: function(t) {
                        wx.showToast({
                            title: "保存成功"
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                }) : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        wx.saveImageToPhotosAlbum({
                            filePath: t,
                            success: function(t) {
                                wx.showToast({
                                    title: "请在相册中选择图片分享"
                                });
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    fail: function() {
                        wx.openSetting({
                            success: function(t) {
                                console.log("openSetting: success");
                            },
                            fail: function(t) {
                                console.log("openSetting: fail");
                            }
                        });
                    }
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    stack: function() {
        var t = [];
        this.push = function(n) {
            t.push(n);
        }, this.pop = function() {
            return t.pop();
        }, this.peek = function() {
            return t[t.length - 1];
        }, this.isEmpty = function() {
            return 0 == t.length;
        }, this.size = function() {
            return t.length;
        }, this.clear = function() {
            t = [];
        }, this.print = function() {
            console.log(t.toString());
        };
    }
};