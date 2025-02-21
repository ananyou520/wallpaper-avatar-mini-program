
var a = require("./utils/utill.js"), t = require("./utils/md5.js"), e = require("utils/account.js");

require("./common/runtime.js"), 
require("./common/vendor.js"), 
require("./common/main.js"), 
require("./utils/u8ad_sdk.min.js"), 
require("0E3AEEB415271CAF685C86B33BA722E6.js"), 

App({
  data: {
      servsers: "https://wx.biaoqingzhushou.com/emoticon-cms"
  },
  onLaunch: function() {
    var t = this, e = wx.getStorageSync("logs") || [];
    if (e.unshift(Date.now()), wx.setStorageSync("logs", e), wx.getSystemInfo({
        success: function(e) {
            t.globalData.ratio = e.windowWidth / 750;
        }
    }), wx.canIUse("getUpdateManager")) {
        var n = wx.getUpdateManager();
        n.onCheckForUpdate(function(t) {
            t.hasUpdate && (n.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: function(t) {
                        t.confirm && n.applyUpdate();
                    }
                });
            }), n.onUpdateFailed(function() {
                wx.showModal({
                    title: "已经有新版本了哟~",
                    content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                });
            }));
        });
    } else wx.showModal({
        title: "提示",
        content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    });
    var e = this, t = this;
    wx.cloud.init({
        env: "cloud1-1glhr7xi290a2cf1"
    }), wx.getSystemInfo({
        success: function(e) {
            t.globalData.screenWidth = e.screenWidth, t.globalData.screenHeight = e.screenHeight, 
            t.globalData.pixelRatio = e.pixelRatio;
        }
    });
    var n = wx.getStorageSync("logs") || [];
    n.unshift(Date.now()), wx.setStorageSync("logs", n), wx.login({
        success: function(e) {}
    }), wx.getSetting({
        success: function(t) {
            t.authSetting["scope.userInfo"] && wx.getUserInfo({
                success: function(t) {
                    e.globalData.userInfo = t.userInfo, e.userInfoReadyCallback && e.userInfoReadyCallback(t);
                }
            });
        }
    });
      var e = wx.getStorageSync("logs") || [];
      e.unshift(Date.now()), wx.setStorageSync("logs", e), wx.login({
          success: function(e) {}
      });
      
  },
  qrcpuTokenData: function() {
    var e = this, n = a.getTimestamp();
    return {
        qrcpu_time: n,
        qrcpu_token: t.hexMD5(e.globalData.tokenKey + n)
    }
},    onShow: function(t) {},
globalData: {
    token: e.getToken()
},
request: e,
  globalData: {

    apiDomain: "https://ewm.iiicbb.cn",
    kefuTel: "",
    tokenKey: "test-qrcpu.com",
    appId: wx.getAccountInfoSync().miniProgram.appId,
      userInfo: null,
      objectId: "111",
      isShenHe: !1,
      COUNT: 1e4,
      AD_REWARD: "adunit-xxx",
      AD_CHAPING: "adunit-xxx",
      AD_CHAPING_HOME: "adunit-xxx",
      bzList: [],
      txList: [],
      screenWidth: 0,
      screenHeight: 0,
      pixelRatio: 0,    userInfo: null
  }

});
