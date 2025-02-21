!function() {
    var t = require("../../utils/request"), a = getApp();
    let e = null;
    let interstitialAd = null
    Page({
        data: {
            x: 0,
            cid: "",
            categorys: [],
            bzList: [],
            page: 0,
            imgH: 0
        },
        onItem: function(t) {
            wx.pageScrollTo({
                scrollTop: 0
            }), parseInt(t.currentTarget.id);
            var a = this.data.categorys[parseInt(t.currentTarget.id)], e = wx.getSystemInfoSync().windowWidth, s = t.currentTarget.offsetLeft - e / 2;
            this.setData({
                cid: a.cid,
                x: s,
                page: 0
            }), this.refreshList();
        },
        adload: function() {
            if (interstitialAd) {
                interstitialAd.show().catch((err) => {
                  console.error(err)
                })
              }
             },
        adshow: function() {
            e && e.show().catch(t => {
                console.error(t);
            });
        },
        onLoad: function(t) {
            if (wx.createInterstitialAd) {
                interstitialAd = wx.createInterstitialAd({
                  adUnitId: 'adunit-171c2aef64db51af'
                })
                interstitialAd.onLoad(() => {})
                interstitialAd.onError((err) => {})
                interstitialAd.onClose(() => {})
              }
              if (interstitialAd) {
                interstitialAd.show().catch((err) => {
                  console.error(err)
                })
              }              
            console.log(getApp()), this.requestCategorys(), this.adload();
        },
        requestCategorys: function() {
            if (0 == this.data.categorys.length) {
                var a = this;
                t.post("/wallpaper/category?bus=bq", {}, function(t) {
                    a.setData({
                        categorys: t.data.list,
                        cid: t.data.list[0].cid
                    }), a.refreshList();
                });
            }
        },
        onImage: function(t) {
            var e = this.data.bzList[t.detail];
            a.txList = this.data.bzList, wx.navigateTo({
                url: "../wndetail/txdetail?bus=bq&cid=" + this.data.cid + "&index=" + t.detail + "&page=" + this.data.page + "&url=" + encodeURIComponent(e.pic)
            });
        },
        refreshList: function() {
            var a = this;
            t.post("/wallpaper/list?bus=bq", {
                page: this.data.page,
                cid: this.data.cid
            }, function(t) {
                0 == a.data.page ? (wx.stopPullDownRefresh({
                    success: function(t) {}
                }), a.setData({
                    bzList: t.data.list,
                    hasMore: t.data.hasMore
                })) : a.setData({
                    bzList: a.data.bzList.concat(t.data.list)
                });
            });
        },
        onShareAppMessage: function (e) {
          return {
            title: "壁纸、头像、表情包，你想要的这都有。",
            path: "/pages/biaoqing/biaoqing"
          }
        },
        onShareTimeline: function (e) {
          return {
            title: "壁纸、头像、表情包，你想要的这都有。",
            path: "/pages/biaoqing/biaoqing"
          }
        },
        tox: function() {
            wx.navigateToMiniProgram({
                appId: "wxf3bc182564cf931c",
                path: "pages/index/index"
            });
        },
        onSearch: function() {
            wx.navigateTo({
                url: "../search/search?bus=bq"
            });
        },
        
        onReady: function() {},
        onShow: function() {
            this.requestCategorys(), this.adshow();
        },
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {
            this.setData({
                page: 0
            }), this.refreshList();
        },
        onReachBottom: function() {
            if (0 != this.data.hasMore) {
                var t = this.data.page + 1;
                this.setData({
                    page: t
                }), this.refreshList();
            }
        },
        onShareAppMessage: function() {},
        onTabItemTap: function(t) {
            console.log(t);
        }
    });
}();