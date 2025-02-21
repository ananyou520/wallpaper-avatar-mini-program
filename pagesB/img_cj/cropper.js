require("../../utils/utill.js");

var t = getApp();

Page({
    data: {
        src: "",
        width: 250,
        height: 250,
        max_width: 400,
        max_height: 400,
        disable_rotate: !1,
        disable_ratio: !1,
        limit_move: !1,
        disable_height: !0,
        disable_width: !0
    },
    onLoad: function(t) {
        this.cropper = this.selectComponent("#image-cropper"), this.cropper.upload();
    },
    cropperload: function(t) {
        console.log("cropper加载完成");
    },
    loadimage: function(t) {
        wx.hideLoading(), console.log("图片"), this.cropper.imgReset();
    },
    clickcut: function(e) {
        this.cropper.getImg(function(e) {
            t.globalData.imgSrc = e.url, wx.previewImage({
                current: e.url,
                urls: [ e.url ]
            });
        });
    },
    upload: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                wx.showLoading({
                    title: "加载中"
                });
                var a = e.tempFilePaths[0];
                t.cropper.imgReset(), t.setData({
                    src: a
                });
            },
            fail: function(t) {}
        });
    },
    setWidth: function(t) {
        this.setData({
            width: t.detail.value < 10 ? 10 : t.detail.value
        }), this.setData({
            cut_left: this.cropper.data.cut_left
        });
    },
    setHeight: function(t) {
        this.setData({
            height: t.detail.value < 10 ? 10 : t.detail.value
        }), this.setData({
            cut_top: this.cropper.data.cut_top
        });
    },
    switchChangeDisableRatio: function(t) {
        this.setData({
            disable_ratio: t.detail.value
        });
    },
    setCutTop: function(t) {
        this.setData({
            cut_top: t.detail.value
        }), this.setData({
            cut_top: this.cropper.data.cut_top
        });
    },
    setCutLeft: function(t) {
        this.setData({
            cut_left: t.detail.value
        }), this.setData({
            cut_left: this.cropper.data.cut_left
        });
    },
    switchChangeDisableRotate: function(t) {
        t.detail.value ? this.setData({
            disable_rotate: t.detail.value
        }) : this.setData({
            limit_move: !1,
            disable_rotate: t.detail.value
        });
    },
    switchChangeLimitMove: function(t) {
        t.detail.value && this.setData({
            disable_rotate: !0
        }), this.cropper.setLimitMove(t.detail.value);
    },
    switchChangeDisableWidth: function(t) {
        this.setData({
            disable_width: t.detail.value
        });
    },
    switchChangeDisableHeight: function(t) {
        this.setData({
            disable_height: t.detail.value
        });
    },
    submit: function() {
        this.cropper.getImg(function(e) {
            t.globalData.imgSrc = e.url;
            var a = getCurrentPages();
            a[a.length - 2].setData({
                bg_img: t.globalData.imgSrc
            }), wx.navigateBack({
                delta: 1
            });
        });
    },
    rotate: function() {
        this.cropper.setAngle(this.cropper.data.angle += 90);
    },
    top: function() {
        var t = this;
        this.data.top = setInterval(function() {
            t.cropper.setTransform({
                y: -3
            });
        }, 1e3 / 60);
    },
    bottom: function() {
        var t = this;
        this.data.bottom = setInterval(function() {
            t.cropper.setTransform({
                y: 3
            });
        }, 1e3 / 60);
    },
    left: function() {
        var t = this;
        this.data.left = setInterval(function() {
            t.cropper.setTransform({
                x: -3
            });
        }, 1e3 / 60);
    },
    right: function() {
        var t = this;
        this.data.right = setInterval(function() {
            t.cropper.setTransform({
                x: 3
            });
        }, 1e3 / 60);
    },
    narrow: function() {
        var t = this;
        this.data.narrow = setInterval(function() {
            t.cropper.setTransform({
                scale: -.02
            });
        }, 1e3 / 60);
    },
    enlarge: function() {
        var t = this;
        this.data.enlarge = setInterval(function() {
            t.cropper.setTransform({
                scale: .02
            });
        }, 1e3 / 60);
    },
    end: function(t) {
        clearInterval(this.data[t.currentTarget.dataset.type]);
    }
});