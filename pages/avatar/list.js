var t = getApp(), a = null;

Page({
    data: {
        catList: [ {
            id: 0,
            type_title: "全部模板"
        } ],
        dataList: [],
        type_id: 0,
        slideWidth: 95,
        sliedeLeft: 5,
        showMaskScroll: !0,
        type: 3,
        navData: [],
        list: [],
        showModal: !1,
        date: [],
        showImg: 0,
        is_popup_img1: 0,
        showImgUrl: "",
        showImgId: 0
    },
    page_index: 0,
    page_total: 1,
    onShareAppMessage: function() {
        this.data.curCatId;
        return {
            title: "超多姓氏头像模板，各类型头像模板免费制作",
            desc: "超多姓氏头像模板，各类型头像模板免费制作",
            path: "/pages/avatar/list"
        };
    },
    onShareTimeline: function(t) {
        return {
            title: "超多姓氏头像模板，各类型头像模板免费制作",
            query: "cat_id=" + this.data.curCatId,
            imageUrl: ""
        };
    },
    onLoad: function(t) {
        t.type_id && this.setData({
            type_id: t.type_id
        });
        var e = getApp();
        this.setData({
            appId: "wx33d302412f07f293"
        }), this.setData({
            windowheight: wx.getSystemInfoSync().windowHeight,
            windowWidth: wx.getSystemInfoSync().windowWidth
        });
        var i = this;
        wx.createInterstitialAd && ((a = wx.createInterstitialAd({
            adUnitId: "adunit-ebb5c402344133cb"
        })).onLoad(function() {
            console.log("onLoad event emit");
        }), a.onError(function(t) {
            console.log("onError event emit", t);
        }), a.onClose(function(t) {
            console.log("onClose event emit", t);
        })), t.cat_id > 0 ? i.setData({
            curCatId: t.cat_id
        }, function() {
            i.onReachBottom2();
        }) : i.onReachBottom2(), setTimeout(function() {
            a.show().catch(function(t) {
                console.error(t);
            });
        }, 15e3);
    },
    onReachBottom2: function() {
        var a = this;
        if (a.page_total > 0 && a.page_index >= a.page_total) return wx.showModal({
            content: "已加载完",
            showCancel: !1
        }), !1;
        var e = t.qrcpuTokenData(), i = {
            qrcpu_time: e.qrcpu_time,
            qrcpu_token: e.qrcpu_token,
            kwd: "",
            cat_id: a.data.curCatId,
            cat_count: a.data.catList.length,
            page_index: parseInt(a.page_index) + 1,
            appId: a.data.appId
        };
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), wx.request({
            url: t.globalData.apiDomain + "/zdyapi/avata_mb_type.html",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: i,
            complete: function() {
                wx.hideToast();
            },
            fail: function(t) {},
            success: function(t) {
                if (1 == t.data.status) {
                    var e = t.data.data;
                    if (e.length > 0) {
                        var i = a.data.catList;
                        if (i.length <= 1) for (var o in e) i.push(e[o]);
                        console.log(i), a.setData({
                            catList: i.slice(0, i.length - 2)
                        }), a.data.type_id || a.setData({
                            type_id: i[1].id
                        }), a.getList();
                    }
                } else wx.showModal({
                    title: "提示",
                    content: t.data.msg,
                    showCancel: !1
                });
            }
        });
    },
    getList: function() {
        var a = this, e = a.data.type_id;
        console.log(a.data.type_id), wx.request({
            url: t.globalData.apiDomain + "/zdyapi/avata_list.html",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                type_id: e,
                openid: t.globalData.openid,
                appId: a.data.appId
            },
            complete: function() {
                wx.hideToast();
            },
            fail: function(t) {},
            success: function(t) {
                if (1 == t.data.status) {
                    var e = t.data.data;
                    a.setData({
                        dataList: e
                    });
                } else wx.showModal({
                    title: "提示",
                    content: t.data.msg,
                    showCancel: !1
                }), a.setData({
                    dataList: []
                });
            }
        });
    },
    xzType: function(t) {
        var a = this, e = t.target.dataset.type;
        a.setData({
            type_id: e
        }), wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 1e4
        }), this.getList();
    },
    switchNav: function(t) {
        this.page = 1;
        var a = this, e = a.data.navData.length, i = t.currentTarget.dataset.current, o = t.currentTarget.dataset.id;
        a.setData({
            type_id: o
        }), console.log(i);
        t.currentTarget.dataset.name;
        var n = t.currentTarget.offsetLeft;
        console.log(n);
        var s = this.data.windowWidth;
        console.log(s);
        var d = "";
        wx.createSelectorQuery().select(".navItem" + i).boundingClientRect(function(t) {
            d = t.width;
            var e = n - s / 2 + d / 2, i = n - 2;
            i <= 0 && (i = 0), a.setData({
                navScrollLeft: e,
                list: [],
                leftList: [],
                rightList: [],
                middleList: [],
                slideWidth: d,
                sliedeLeft: i,
                currentIndex: 0
            });
        }).exec(), i + 1 >= e ? a.setData({
            showMaskScroll: !1
        }) : a.setData({
            showMaskScroll: !0
        }), a.setData({
            list: []
        }), a.getList();
    }
});