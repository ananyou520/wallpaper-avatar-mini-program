function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t, e = require("../../utils/md5.js"), o = getApp(), n = null;

Page((t = {
    data: {
        is_login: 1,
        is_gg: 0,
        template_id: 0,
        is_show_qrcode: !1,
        template_qrcode: "/image/pic.png",
        bg_img: "http://pic.66ya.cn/images/66ya/2020-09-29//1601360656103152.png",
        mb_data: {
            img1: "http://pic.66ya.cn/images/66ya/2020-09-29//1601360656103152.png"
        }
    },
    tapPreview: function() {
        var a = this.data.template_qrcode;
        wx.previewImage({
            current: a,
            urls: [ a ]
        });
    },
    onLoad: function(a) {
        var t = this, e = a.template_id, o = getApp();
        this.setData({
            appId: "wx33d302412f07f293"
        }), wx.request({
            url: o.globalData.apiDomain + "/zdyapi/get_avatar.html",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                template_id: e,
                openid: o.globalData.openid,
                appId: t.data.appId
            },
            complete: function() {
                wx.hideToast();
            },
            fail: function(a) {
                wx.showModal({
                    title: "请求失败",
                    content: a.errMsg,
                    showCancel: !1
                });
            },
            success: function(a) {
                console.log(a), 1 == a.data.status && t.setData({
                    mb_data: a.data.data,
                    bg_img: a.data.data.img
                });
            }
        }), wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(a) {
                        t.setData({
                            is_login: 1,
                            user: a.userInfo
                        }), console.log(a.userInfo);
                    }
                }) : t.setData({
                    is_login: 0
                });
            }
        }), a.template_id && this.setData({
            template_id: a.template_id
        }), wx.createRewardedVideoAd && ((n = wx.createRewardedVideoAd({
            adUnitId: "adunit-cf7ac0bbf4bd493a"
        })).onLoad(function() {
            console.log("onLoad event emit");
        }), n.onError(function(a) {
            console.log("onError event emit", a);
        }), n.onClose(function(a) {
            a && a.isEnded && t.setData({
                is_gg: 0
            });
        })), console.log(wx.getStorageSync("isVip")), 1 != t.data.user.is_vip && 1 != wx.getStorageSync("isVip") ? wx.request({
            url: o.globalData.apiDomain + "/zdyapi/is_gg2.html",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                appId: t.data.appId
            },
            complete: function() {
                wx.hideToast();
            },
            fail: function(a) {},
            success: function(a) {
                t.setData({
                    is_gg: a.data.data
                });
            }
        }) : t.setData({
            is_gg: 0
        }), console.log(t.data.is_gg);
    },
    onShow: function() {
        var a = this, t = getCurrentPages(), e = t[t.length - 1].data.bg_img;
        if (e && a.up_img(e), !a.data.template_id) return wx.showModal({
            content: "请先选择二维码模板",
            showCancel: !1,
            success: function(a) {
                a.confirm && wx.redirectTo({
                    url: "/pages/index/index"
                });
            }
        }), !1;
    },
    onShareAppMessage: function() {
        return {
            title: "头像制作",
            desc: "免费制作个性化头像",
            path: "/pagesB/avatar/avatar?template_id=" + that.data.template_id
        };
    },
    onShareTimeline: function(a) {
        return {
            title: "头像制作",
            query: "template_id=" + this.data.template_id,
            imageUrl: ""
        };
    },
    sliderSize: function(a) {
        this.setData({
            qrsize: a.detail.value
        });
    },
    bindPickerColor: function(a) {
        this.setData({
            color_index: a.detail.value
        });
    },
    bindPickerXt: function(a) {
        this.setData({
            xt_index: a.detail.value
        });
    }
}, a(t, "tapPreview", function() {
    var a = this.data.template_qrcode;
    wx.previewImage({
        current: a,
        urls: [ a ]
    });
}), a(t, "tapScan", function(a) {
    var t = this;
    wx.scanCode({
        fail: function() {
            wx.showModal({
                content: "未识别出二维码",
                showCancel: !1
            });
        },
        success: function(a) {
            t.setData({
                qrdata: a.result
            });
        }
    });
}), a(t, "bindFormSubmit", function(a) {
    var t = this, n = a.detail.value, i = t.data.bg_img, l = t.data.template_id;
    if ("" == i) return wx.showModal({
        content: "请上传头像",
        showCancel: !1
    }), !1;
    o.qrcpuTokenData();
    var s = {
        bg_img: i,
        template_id: l,
        appId: t.data.appId,
        text: n.text
    };
    wx.showToast({
        title: "加载中",
        icon: "loading",
        duration: 1e4
    });
    var d = Date.parse(new Date()) / 1e3, c = e.hexMD5("baogeacexcx_" + d);
    wx.request({
        url: o.globalData.apiDomain + "/zdyapi/hc_avatar?time=" + d + "&token=" + c,
        method: "POST",
        header: {
            "Content-Type": "application/x-www-form-urlencoded",
            appId: this.data.appId
        },
        data: s,
        complete: function() {
            wx.hideToast();
        },
        fail: function(a) {
            wx.showModal({
                title: "请求失败",
                content: a.errMsg,
                showCancel: !1
            });
        },
        success: function(a) {
            1 == a.data.status ? t.setData({
                is_show_qrcode: !0,
                template_qrcode: a.data.data
            }, function() {
                t.tapPreview();
            }) : wx.showModal({
                title: "提示",
                content: a.data.msg,
                showCancel: !1
            });
        }
    });
}), a(t, "getUserProfile", function(a) {
    var t = this;
    console.log(1), wx.getUserProfile({
        desc: "用于完善会员资料",
        success: function(a) {
            console.log(a.userInfo.avatarUrl), t.setData({
                is_login: 1,
                user: a.userInfo,
                bg_img: a.userInfo.avatarUrl
            }), wx.request({
                url: o.globalData.apiDomain + "/zdyapi/addUser.html",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    openid: o.globalData.openid,
                    appId: o.globalData.appId,
                    nickname: a.userInfo.nickName,
                    bg_img: a.userInfo.avatarUrl
                },
                complete: function() {
                    wx.hideToast();
                },
                fail: function(a) {
                    wx.showModal({
                        title: "请求失败",
                        content: a.errMsg,
                        showCancel: !1
                    });
                },
                success: function(a) {}
            });
        }
    });
}), a(t, "chooseImg", function(a) {
    var t = this;
    wx.navigateTo({
        url: "/pages/img_cj/cropper?template_id=" + t.data.template_id
    });
}), a(t, "up_img", function(a) {
    wx.showToast({
        title: "上传中",
        icon: "loading",
        duration: 1e4
    });
    var t = this, o = Date.parse(new Date()) / 1e3, n = e.hexMD5("baogexcx_" + o);
    wx.uploadFile({
        url: "https://ewm.iiicbb.cn/zdyapi/index?time=" + o + "&token=" + n,
        filePath: a,
        name: "file",
        method: "POST",
        complete: function(a) {
            wx.hideToast();
        },
        fail: function(a) {
            console.log(a);
        },
        success: function(a) {
            console.log(a.data);
            var e = JSON.parse(a.data);
            1 == e.code ? (t.setData({
                bg_img: e.url,
                bg_text: "已上传"
            }), wx.showModal({
                content: e.msg,
                showCancel: !1
            })) : wx.showModal({
                content: e.msg,
                showCancel: !1
            });
        }
    });
}), a(t, "left", function() {
    var a = this, t = a.data.template_id;
    wx.request({
        url: o.globalData.apiDomain + "/zdyapi/avatar_qh.html",
        method: "POST",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
            openid: o.globalData.openid,
            appId: o.globalData.appId,
            type: 0,
            template_id: t
        },
        complete: function() {
            wx.hideToast();
        },
        fail: function(a) {
            wx.showModal({
                title: "请求失败",
                content: a.errMsg,
                showCancel: !1
            });
        },
        success: function(t) {
            console.log(t.data), 1 == t.data.status ? (console.log(t.data.data), a.setData({
                mb_data: t.data.data,
                template_id: t.data.data.id
            })) : wx.showModal({
                title: "温馨提示",
                content: "已无数据",
                showCancel: !1
            });
        }
    });
}), a(t, "right", function() {
    var a = this, t = a.data.template_id;
    wx.request({
        url: o.globalData.apiDomain + "/zdyapi/avatar_qh.html",
        method: "POST",
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
            openid: o.globalData.openid,
            appId: o.globalData.appId,
            type: 1,
            template_id: t
        },
        complete: function() {
            wx.hideToast();
        },
        fail: function(a) {
            wx.showModal({
                title: "请求失败",
                content: a.errMsg,
                showCancel: !1
            });
        },
        success: function(t) {
            1 == t.data.status ? a.setData({
                mb_data: t.data.data,
                template_id: t.data.data.id
            }) : wx.showModal({
                title: "温馨提示",
                content: "已无数据",
                showCancel: !1
            });
        }
    });
}), a(t, "jlgg", function(a) {
    n.show();
}), a(t, "jlgg2", function(a) {
    wx.showModal({
        title: "制作失败",
        content: "免费次数已用完，请联系客服【" + o.globalData.kefu + "】咨询处理",
        showCancel: !1
    });
}), a(t, "jlgg3", function(a) {
    wx.showModal({
        title: "温馨提示",
        content: "此模块为代理专享，请联系客服【" + o.globalData.kefu + "】办理",
        showCancel: !1
    });
}), t));