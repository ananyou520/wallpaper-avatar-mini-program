var t, a, o, i;

t = require("../../utils/request"), a = require("../../utils/gg"), o = require("../../utils/premiss"), 
i = getApp(), Page({
    data: {
        imagePath: "",
        bzList: [],
        showCtrl: !0,
        page: 0,
        hasMore: !0,
        cid: void 0,
        text: void 0
    },
    onLoad: function(t) {
        var o = decodeURIComponent(t.url);
        this.setData({
            page: t.page,
            index: t.index,
            vurls: [ o ],
            imagePath: o,
            cid: t.cid,
            text: t.text,
            bzList: i.txList
        }), console.log(t.url), wx.showLoading({
            title: "加载中",
            mask: !0
        });
        var e = this;
        a.initUrgeVideo(function(t) {
            e.doSave();
        });
    },
    refreshList: function() {
        var a = this;
        null == this.data.cid ? t.post("/wallpaper/m/search", {
            page: this.data.page,
            text: this.data.text
        }, function(t) {
            a.setData({
                bzList: a.data.bzList.concat(t.data.list),
                hasMore: t.data.hasMore
            }), a.onNext();
        }) : t.post("/pages/avatar/list", {
            page: this.data.page,
            cid: this.data.cid
        }, function(t) {
            a.setData({
                bzList: a.data.bzList.concat(t.data.list),
                hasMore: t.data.hasMore
            }), a.onNext();
        });
    },
    onNext: function() {
        var t = parseInt(this.data.index) + 1;
        t < this.data.bzList.length ? (wx.showLoading({
            title: "加载中",
            mask: !0
        }), this.setData({
            index: t,
            imagePath: this.data.bzList[t].pic
        })) : 0 == this.data.hasMore ? wx.showToast({
            title: "后面没有了",
            icon: "none"
        }) : (this.setData({
            page: parseInt(this.data.page) + 1
        }), this.refreshList());
    },
    onPre: function() {
        var t = parseInt(this.data.index) - 1;
        t >= 0 ? (wx.showLoading({
            title: "加载中",
            mask: !0
        }), this.setData({
            index: t,
            imagePath: this.data.bzList[t].pic
        })) : wx.showToast({
            title: "前面没有了",
            icon: "none"
        });
    },
    onBack: function() {
        wx.navigateBack({
            delta: 0
        });
    },
    onReady: function() {},
    downfile: function(t, a) {
      console.log("---");
      console.log(this.data.imagePath)
      console.log(t)
      console.log("---");
        var o = this;
        var dimg = this.data.imagePath;
        var ddimg = dimg.replace('http', 'https');
        console.log(ddimg)
        wx.showLoading({
            title: "下载中...",
            mask: !0
        }), wx.downloadFile({
            url: ddimg,
            filePath: wx.env.USER_DATA_PATH + "/" + a,
            fail: function(t) {
                wx.hideLoading(), wx.showToast({
                    title: "下载失败",
                    icon: "none"
                });
            },
            success: function(t) {
                console.log(t), 200 === t.statusCode && o.saveImageToPhotosAlbum(t.filePath);
            }
        }).onProgressUpdate(function(t) {
            wx.showLoading({
                title: "下载中" + t.progress + "%"
            });
        });
    },
    onLoadError: function(t) {
        console.log(t), wx.hideLoading({
            success: function(t) {}
        });
    },
    saveImageToPhotosAlbum: function(t) {
        wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function(t) {
                wx.hideLoading({
                    success: function(t) {}
                }), wx.showToast({
                    title: "已保存到系统相册"
                });
            },
            fail: function(t) {
                wx.hideLoading(), wx.showToast({
                    title: t.errMsg,
                    icon: "none"
                }), "saveImageToPhotosAlbum:fail auth deny" === t.errMsg && (console.log("用户一开始拒绝了，我们想再次发起授权"), 
                wx.openSetting({
                    success: function(t) {
                        console.log(t), t.authSetting["scope.writePhotosAlbum"] ? console.log("获取权限成功，给出再次点击图片保存到相册的提示。") : console.log("获取权限失败，给出不给权限就无法正常使用的提示");
                    }
                }));
            }
        });
    },
    onSave: function() {
        var t = this;
        a.showUrgeVideoIfNeed(function(a) {
            t.doSave();
        });
    },
    doSave: function() {
        var a = this, i = this;
        o.checkAlbum(function(o) {
            t.post("/wallpaper/m/down", {
                url: a.data.imagePath
            }, function(t) {
                i.downfile(t.data.url, t.data.name);
            });
        });
    },
    onWrapper: function() {
        console.log("onwrapper"), this.setData({
            showCtrl: !this.data.showCtrl
        });
    },
    onLoadFinish: function() {
        wx.hideLoading({
            success: function(t) {}
        });
    },
    onCopy: function() {
        wx.setClipboardData({
            data: this.data.imagePath,
            success: function(t) {
                wx.showToast({
                    title: "原图链接已复制"
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});