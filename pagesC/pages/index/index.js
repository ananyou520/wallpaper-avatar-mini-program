!function() {
    getApp();
    Page({
        data: {
            isInput: 0,
            inputValue: ""
        },
        bindinput(e) {
            var t = e.detail.value;
            t.length > 0 && this.setData({
                isInput: 1,
                inputValue: t
            });
        },
        saveCache(e) {
            let t = wx.getStorageSync("analysis");
            t || (t = []), t.length >= 50 && t.splice(0, 1), t.push(e), wx.setStorageSync("analysis", t);
        },
        paste_and_content() {
            console.log("观看激励视频，再解析");
            let e = this;
            wx.getClipboardData({
                success(t) {
                    if (console.log("解析内容", t.data), !t.data) return wx.showToast({
                        title: "请输入视频 (或图集) 链接",
                        icon: "none",
                        duration: 2e3
                    }), !1;
                    e.qushuiyin("", t.data);
                }
            });
        },
        paste() {
            let e = this;
            wx.getClipboardData({
                success(t) {
                    e.setData({
                        inputValue: t.data,
                        isInput: 1
                    });
                }
            });
        },
        qushuiyin(e, t) {
            let a = this;
            wx.showLoading({
                title: "解析中..."
            });
            let s = t || a.data.inputValue;
            console.log("一键去水印", s), wx.request({
                url: "https://api.wxshares.com/api/qsy/as",
                data: {
                    key: "GVSAPaRwIiD0B511XNZhM4TV79",
                    url: s
                },
                header: {
                    "content-type": "application/json"
                },
                success(e) {
                    wx.hideLoading(), console.log("服务器返回数据", e.data);
                    let t = e.data;
                    200 == t.code ? (console.log("解析成功打印数据", t.data), wx.navigateTo({
                        url: "/pages/analysis/analysis",
                        events: {
                            acceptDataFromOpenedPage: function(e) {
                                console.log(e);
                            },
                            someEvent: function(e) {
                                console.log(e);
                            }
                        },
                        success: function(e) {
                            a.setData({
                                inputValue: "",
                                isInput: 0
                            }), a.saveCache(s), e.eventChannel.emit("acceptDataFromOpenerPage", {
                                data: t.data
                            });
                        }
                    })) : wx.showModal({
                        title: "解析失败",
                        content: "解析失败，可能是因为：1、链接错误或暂时不支持平台2、作品还未审核通过3、作品已经被删除了---如有问题，更多源码尽在www.qymao.cn",
                        success(e) {
                            e.confirm && a.copyBtn(1, "企业猫源码网");
                        }
                    });
                }
            });
        },
        clear() {
            this.setData({
                inputValue: "",
                isInput: 0
            });
        },
        copyBtn(e, t) {
            let a = t || e.target.dataset.kefu;
            wx.setClipboardData({
                data: a,
                success: function(e) {
                    wx.showToast({
                        title: "【客服微信】复制成功",
                        icon: "none",
                        mask: "true"
                    });
                }
            });
        },
        onLoad() {
            wx.getUserProfile && this.setData({
                canIUseGetUserProfile: !0
            });
            let e = null;
            wx.createInterstitialAd && (e = wx.createInterstitialAd({
                adUnitId: "adunit-43d98fe86e669679"
            }), e.onLoad(() => {}), e.onError(e => {}), e.onClose(() => {})), e && e.show().catch(e => {
                console.error(e);
            });
        },
        getUserProfile(e) {
            wx.getUserProfile({
                desc: "展示用户信息",
                success: e => {
                    console.log(e), this.setData({
                        userInfo: e.userInfo,
                        hasUserInfo: !0
                    });
                }
            });
        },
        getUserInfo(e) {
            console.log(e), this.setData({
                userInfo: e.detail.userInfo,
                hasUserInfo: !0
            });
        }
    });
}();