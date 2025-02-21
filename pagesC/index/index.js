var e = getApp();

Page({
    data: {
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
        nanList: [ {
            image: "../res/images/nan/by.png",
            name: "白羊座",
            time: "3.21-4.19"
        }, {
            image: "../res/images/nan/jn.png",
            name: "金牛座",
            time: "4.20-5.20"
        }, {
            image: "../res/images/nan/sz.png",
            name: "双子座",
            time: "5.21-6.21"
        }, {
            image: "../res/images/nan/jx.png",
            name: "巨蟹座",
            time: "6.22-7.22"
        }, {
            image: "../res/images/nan/shizi.png",
            name: "狮子座",
            time: "7.23-8.22"
        }, {
            image: "../res/images/nan/cn.png",
            name: "处女座",
            time: "8.23-9.22"
        }, {
            image: "../res/images/nan/tc.png",
            name: "天秤座",
            time: "9.23-10.23"
        }, {
            image: "../res/images/nan/tx.png",
            name: "天蝎座",
            time: "10.24-11.22"
        }, {
            image: "../res/images/nan/ss.png",
            name: "射手座",
            time: "11.23-12.21"
        }, {
            image: "../res/images/nan/mj.png",
            name: "魔羯座",
            time: "12.22-1.19"
        }, {
            image: "../res/images/nan/sp.png",
            name: "水瓶座",
            time: "1.20-2.18"
        }, {
            image: "../res/images/nan/sy.png",
            name: "双鱼座",
            time: "2.19-3.20"
        } ],
        nvList: [ {
            image: "../res/images/nv/by.png",
            name: "白羊座",
            time: "3.21-4.19"
        }, {
            image: "../res/images/nv/jn.png",
            name: "金牛座",
            time: "4.20-5.20"
        }, {
            image: "../res/images/nv/sz.png",
            name: "双子座",
            time: "5.21-6.21"
        }, {
            image: "../res/images/nv/jx.png",
            name: "巨蟹座",
            time: "6.22-7.22"
        }, {
            image: "../res/images/nv/shizi.png",
            name: "狮子座",
            time: "7.23-8.22"
        }, {
            image: "../res/images/nv/cn.png",
            name: "处女座",
            time: "8.23-9.22"
        }, {
            image: "../res/images/nv/tc.png",
            name: "天秤座",
            time: "9.23-10.23"
        }, {
            image: "../res/images/nv/tx.png",
            name: "天蝎座",
            time: "10.24-11.22"
        }, {
            image: "../res/images/nv/ss.png",
            name: "射手座",
            time: "11.23-12.21"
        }, {
            image: "../res/images/nv/mj.png",
            name: "魔羯座",
            time: "12.22-1.19"
        }, {
            image: "../res/images/nv/sp.png",
            name: "水瓶座",
            time: "1.20-2.18"
        }, {
            image: "../res/images/nv/sy.png",
            name: "双鱼座",
            time: "2.19-3.20"
        } ],
        indexNan: 0,
        indexNv: 0,
        showPopup: !1,
        animationData: {},
        ratio: e.globalData.ratio,
        scrollTopNan: 0,
        scrollTopNv: 0,
        showSave: !0
    },
    showPopup: function() {
        var e = this, a = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = a, a.translateY(500).step(), this.setData({
            animationData: a.export(),
            showPopup: !0
        }), setTimeout(function() {
            a.translateY(0).step(), e.setData({
                animationData: a.export()
            });
        }, 100);
    },
    hidePopup: function() {
        var e = this.data.indexNan, a = this.data.indexNv, n = this.data.ratio, i = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = i, i.translateY(500).step(), this.setData({
            animationData: i.export()
        }), setTimeout(function() {
            i.translateY(0).step(), this.setData({
                animationData: i.export(),
                showPopup: !1,
                scrollTopNan: e * n * 220,
                scrollTopNv: a * n * 220
            });
        }.bind(this), 100);
    },
    scrollNan: function(e) {
        var a = this, n = 220 * a.data.ratio, i = e.detail.scrollTop, t = parseInt(i / n + .5);
        t = t > 11 ? 11 : t, a.setData({
            indexNan: t
        });
    },
    scrollNv: function(e) {
        var a = this, n = 220 * a.data.ratio, i = e.detail.scrollTop, t = parseInt(i / n + .5);
        t = t > 11 ? 11 : t, a.setData({
            indexNv: t
        });
    },
    changeNan: function(e) {
        var a = this, n = a.data.ratio, i = a.data.indexNan, t = e.currentTarget.dataset.index;
        i != t && a.setData({
            indexNan: t,
            scrollTopNan: t * n * 220
        });
    },
    changeNv: function(e) {
        var a = this, n = a.data.ratio, i = a.data.indexNv, t = e.currentTarget.dataset.index;
        i != t && a.setData({
            indexNv: t,
            scrollTopNv: t * n * 220
        });
    },
    hideSave: function() {
        this.setData({
            showSave: !1
        });
    },
    onLoad: function(e) {
        var a = this;
        setTimeout(function() {
            a.hideSave();
        }, 6e4);
    },
    onShow: function() {},
    onShareAppMessage: function() {}
});