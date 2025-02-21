var e = require("./data.js"), a = require("../../utils/account.js"), t = require("../../utils/promise.util.js"), i = t.promisify(wx.getImageInfo), n = t.promisify(wx.canvasToTempFilePath), s = wx.createCanvasContext("canvas-result"), o = getApp();

Page({
    data: {
        xzData: e.data,
        xzList: [ {
            image: "../res/images/by.png",
            name: "白羊座",
            time: "3.21-4.19"
        }, {
            image: "../res/images/jn.png",
            name: "金牛座",
            time: "4.20-5.20"
        }, {
            image: "../res/images/sz.png",
            name: "双子座",
            time: "5.21-6.21"
        }, {
            image: "../res/images/jx.png",
            name: "巨蟹座",
            time: "6.22-7.22"
        }, {
            image: "../res/images/shizi.png",
            name: "狮子座",
            time: "7.23-8.22"
        }, {
            image: "../res/images/cn.png",
            name: "处女座",
            time: "8.23-9.22"
        }, {
            image: "../res/images/tc.png",
            name: "天秤座",
            time: "9.23-10.23"
        }, {
            image: "../res/images/tx.png",
            name: "天蝎座",
            time: "10.24-11.22"
        }, {
            image: "../res/images/ss.png",
            name: "射手座",
            time: "11.23-12.21"
        }, {
            image: "../res/images/mj.png",
            name: "魔羯座",
            time: "12.22-1.19"
        }, {
            image: "../res/images/sp.png",
            name: "水瓶座",
            time: "1.20-2.18"
        }, {
            image: "../res/images/sy.png",
            name: "双鱼座",
            time: "2.19-3.20"
        } ],
        indexNan: 0,
        indexNv: 0,
        version: 4,
        auth: !0,
        showBtn: !0,
        showShare: !1,
        ratio: o.globalData.ratio,
        backImage: "../res/images/back.png",
        loveImage: "../res/images/match.png",
        border: "../res/images/border.png"
    },
    goto: function(e) {
        var a = e.currentTarget.dataset.id, t = e.currentTarget.dataset.path;
        wx.navigateToMiniProgram({
            appId: a,
            envVersion: "develop",
            path: t
        });
    },
    onLoad: function(e) {
        var a = this;
        o.request.get("/services/GetAdListByAppId", {
            appId: "wxec38b80b947e2177"
        }, function(e) {
            var t = e.data;
            if (console.log(e), void 0 != t && t.length > 0) {
                for (var i in t) t[i].Path = "/pagesC/index/index?url=" + encodeURIComponent(t[i].Path);
                console.log(t), a.setData({
                    showAdd: !0,
                    adList: t
                });
            }
        }), o.request.get("/services/GetVersionByAppId", {
            appId: "wxec38b80b947e2177"
        }, function(e) {
            console.log(e.data.version), a.setData({
                version: e.data.version
            });
        }), void 0 != e.indexNan && a.setData({
            indexNan: e.indexNan
        }), void 0 != e.indexNv && a.setData({
            indexNv: e.indexNv
        });
        var t = a.data.xzData, i = a.data.indexNan, n = a.data.indexNv, s = t[i][n];
        a.setData({
            peidui: s
        });
    },
    showShare: function() {
        var e = this, t = a.getName(), i = a.getImage();
        void 0 != t && "" != t && void 0 != i && "" != i ? e.paint(i, t) : wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(t) {
                        var i = t.userInfo.nickName, n = t.userInfo.avatarUrl;
                        a.setName(i), a.setImage(n), e.paint(n, i);
                    }
                }) : e.setData({
                    auth: !1
                });
            },
            fail: function(e) {
                wx.navigateBack({
                    delta: 0
                });
            }
        });
    },
    hideShare: function() {
        this.setData({
            showBtn: !0,
            showShare: !1
        });
    },
    hideAuth: function() {
        this.setData({
            auth: !0
        });
    },
    bindGetUserInfo: function(e) {
        var t = this;
        if ("getUserInfo:fail auth deny" == e.detail.errMsg) ; else {
            var i = e.detail.userInfo.nickName, n = e.detail.userInfo.avatarUrl;
            a.setName(i), a.setImage(n), t.paint(n, i);
        }
    },
    viewImage: function() {
        n({
            canvasId: "canvas-result"
        }, this).then(function(e) {
            wx.previewImage({
                urls: [ e.tempFilePath ]
            });
        });
    },
    saveImage: function() {
        n({
            canvasId: "canvas-result"
        }, this).then(function(e) {
            wx.saveImageToPhotosAlbum({
                filePath: e.tempFilePath,
                success: function(e) {
                    wx.showToast({
                        title: "保存成功"
                    });
                },
                fail: function(e) {
                    wx.getSetting({
                        success: function(e) {
                            0 == e.authSetting["scope.writePhotosAlbum"] && wx.showModal({
                                title: "是否授权保存至相册",
                                content: "需要获取相册权限，请确认授权，或者点击图片长按保存至相册",
                                success: function(e) {
                                    e.confirm && wx.openSetting({});
                                }
                            });
                        }
                    });
                }
            });
        });
    },
    paint: function(e, a) {
        var t = this;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        });
        var n = this, o = n.data.ratio, r = n.data.peidui, g = n.data.indexNan, m = n.data.indexNv, l = n.data.xzList, d = l[g], c = d.name.replace("座", "男"), u = l[m], f = u.name.replace("座", "女");
        i({
            src: e
        }).then(function(e) {
            s.drawImage(n.data.backImage, 0, 0, 590 * o, 920 * o), s.drawImage(n.data.loveImage, 152 * o, 260 * o, 290 * o, 70 * o), 
            s.drawImage(d.image, 50 * o, 200 * o, 160 * o, 160 * o), s.drawImage(u.image, 386 * o, 200 * o, 160 * o, 160 * o), 
            s.save(), s.setTextBaseline("top"), s.setTextAlign("center"), s.setFontSize(30 * o), 
            s.setFillStyle("#ffffff"), s.fillText(a, 295 * o, 132 * o), s.setFontSize(36 * o), 
            s.fillText(r.comment, 295 * o, 464 * o), s.setFontSize(30 * o), s.setFillStyle("#1e1459"), 
            s.fillText(c, 130 * o, 390 * o), s.fillText(f, 466 * o, 390 * o), s.setTextAlign("left"), 
            s.setFontSize(28 * o), s.setFillStyle("#666666"), s.fillText("配对指数", 50 * o, 590 * o), 
            s.fillText("配对比重", 50 * o, 650 * o), s.fillText("两情相悦指数", 320 * o, 590 * o), s.fillText("天长地久指数", 320 * o, 650 * o), 
            s.setFillStyle("#333333"), s.fillText(r.score, 186 * o, 590 * o), s.fillText(r.rate, 186 * o, 650 * o), 
            s.fillText(r.num1, 510 * o, 590 * o), s.fillText(r.num2, 510 * o, 650 * o), s.arc(295 * o, 75 * o, 50 * o, 0, 2 * Math.PI), 
            s.clip(), s.drawImage(e.path, 245 * o, 25 * o, 100 * o, 100 * o), s.draw(), t.setData({
                showBtn: !1,
                showShare: !0
            }), setTimeout(function() {
                wx.hideLoading();
            }, 200);
        }).catch(function(e) {
            wx.hideLoading(), wx.showToast({
                title: "图片生成失败,请重试",
                icon: "none"
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        var e = this;
        return {
            title: "星座配对",
            path: "/pages/detail/detail?indexNan=" + e.data.indexNan + "&indexNv=" + e.data.indexNv
        };
    }
});