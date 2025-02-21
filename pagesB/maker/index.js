let interstitialAd = null
var t, e;

t = require("../../C6825961024680CFA0E431665B752D80.js"), require("../../509F0C32024680CF36F964351C852D80.js"), 
getApp(), e = [], Page({
    data: {
        faceAssets: [],
        eyeAssets: [],
        mouthAssets: [],
        accessoryAssets: [],
        canvasContent: {
            face: t.faceAssets[0],
            leftEye: t.eyeAssets[0],
            rightEye: t.eyeAssets[0],
            mouth: t.mouthAssets[0],
            accessory: []
        },
        isTiptrue: !1,
        windowWidth: 0,
        currentAssets: "face",
        picBigSize: !0
    },
    onLoad: function() {
        // 在页面onLoad回调事件中创建插屏广告实例
if (wx.createInterstitialAd) {
    interstitialAd = wx.createInterstitialAd({
      adUnitId: 'adunit-ea75af9438a868d3'
    })
    interstitialAd.onLoad(() => {})
    interstitialAd.onError((err) => {})
    interstitialAd.onClose(() => {})
  }
  
  // 在适合的场景显示插屏广告
  if (interstitialAd) {
    interstitialAd.show().catch((err) => {
      console.error(err)
    })
  }
        this.context = wx.createCanvasContext("myCanvas"), this.setData({
            faceAssets: t.faceAssets,
            eyeAssets: t.eyeAssets,
            mouthAssets: t.mouthAssets,
            accessoryAssets: t.accessoryAssets
        });
        var e = wx.getSystemInfoSync();
        this.setData({
            windowWidth: e.windowWidth
        }), this.rendCanvas(), wx.showShareMenu({});
        var s = wx.getStorageSync("loadOpen");
        null == s || "" == s ? this.setData({
            isTiptrue: !0
        }) : this.setData({
            isTiptrue: !1
        });
    },
    switchAssets: function(t) {
        this.setData({
            currentAssets: t.currentTarget.dataset.name
        });
    },
    chooseFace: function(t) {
        var e = t.currentTarget.dataset.item;
        this.data.canvasContent.face = e, this.rendCanvas();
    },
    chooseEye: function(t) {
        var e = t.currentTarget.dataset.item;
        this.data.canvasContent.leftEye = e, this.data.canvasContent.rightEye = e, this.rendCanvas();
    },
    chooseRightEye: function(t) {
        var e = t.currentTarget.dataset.item;
        this.data.canvasContent.rightEye = e, this.rendCanvas();
    },
    chooseMouth: function(t) {
        var e = t.currentTarget.dataset.item;
        this.data.canvasContent.mouth = e, this.rendCanvas();
    },
    addAccessory: function(t) {
        var e = t.currentTarget.dataset.item;
        this.data.canvasContent.accessory.push(e), this.rendCanvas();
    },
    rendCanvas: function(t) {
        var s = .4 * wx.getSystemInfoSync().windowWidth;
        t || (e.push(JSON.stringify(this.data.canvasContent)), console.log(e));
        var a = "../assets/" + this.data.canvasContent.face.name + ".png", n = "../assets/" + this.data.canvasContent.leftEye.name + ".png", i = "../assets/right/" + this.data.canvasContent.rightEye.name + ".png", o = "../assets/" + this.data.canvasContent.mouth.name + ".png";
        this.context.drawImage(a, 0, 0, s, s), this.context.drawImage(n, 0, 0, s, s), this.context.drawImage(i, 0, 0, s, s), 
        this.context.drawImage(o, 0, 0, s, s);
        for (var c = 0; c < this.data.canvasContent.accessory.length; c++) {
            var r = "../assets/" + this.data.canvasContent.accessory[c].name + ".png";
            this.context.drawImage(r, 0, 0, s, s);
        }
        this.context.draw();
    },
    clearCanvas: function() {
        this.setData({
            canvasContent: {
                face: t.faceAssets[0],
                leftEye: t.eyeAssets[0],
                rightEye: t.eyeAssets[0],
                mouth: t.mouthAssets[0],
                accessory: []
            }
        }), e.splice(0, e.length), this.rendCanvas();
    },
    backward: function() {
        e.length > 1 ? (e.pop(), this.data.canvasContent = JSON.parse(e[e.length - 1]), 
        console.log(this.data.canvasContent), this.rendCanvas(!0)) : wx.showToast({
            title: "没啥可以撤回了",
            icon: "none"
        });
    },
    exportCanvas: function() {
        var t = wx.getStorageSync("picBigSize");
        console.log(t), this.setData({
            picBigSize: t
        }), wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 300,
            height: 300,
            destWidth: this.data.picBigSize ? void 0 : 160,
            destHeight: this.data.picBigSize ? void 0 : 160,
            canvasId: "myCanvas",
            fileType: "png",
            success: function(t) {
                wx.showToast({
                    title: "长按图片保存或发送给好友",
                    icon: "none",
                    duration: 2500
                }), wx.previewImage({
                    urls: [ t.tempFilePath ]
                });
            }
        });
    },
    settings: function() {
        wx.navigateTo({
            url: "/pages/more/more"
        });
    },
    closeGuide: function(t) {
        wx.setStorage({
            key: "loadOpen",
            data: "OpenTwo"
        }), this.setData({
            isTiptrue: !1
        });
    },
    onShow: function() {},
    onShareAppMessage: function(t) {
        return {
            title: "DIY有趣好玩的emoji表情",
            path: "pagesB/maker/index"
        };
    },
    onShareTimeline: function() {
        return {
            title: "DIY有趣好玩的emoji表情"
        };
    }
});