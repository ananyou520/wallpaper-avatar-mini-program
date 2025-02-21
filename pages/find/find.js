(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/find/find" ], {
  "06dc": function(e, n, t) {
      (function(e) {
          t("1073"), t("a9ff"), r(t("66fd"));
          var n = r(t("a5ea"));
          function r(e) {
              return e && e.__esModule ? e : {
                  default: e
              };
          }
          wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
      }).call(this, t("543d").createPage);
  },
  "1fdb": function(e, n, t) {
      var r = t("4019");
      t.n(r).a;
  },
  "24af": function(e, n, t) {
      t.d(n, "b", function() {
          return a;
      }), t.d(n, "c", function() {
          return i;
      }), t.d(n, "a", function() {
          return r;
      });
      var r = {
          uIcon: function() {
              return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "b287"));
          },
          uLoadmore: function() {
              return t.e("uview-ui/components/u-loadmore/u-loadmore").then(t.bind(null, "98b0"));
          }
      }, a = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(n) {
              e.loginShow = !1;
          }, e.e1 = function(n) {
              e.signShow = !1;
          });
      }, i = [];
  },
  "3dad": function(e, n, t) {
      t.r(n);
      var r = t("a1c8"), a = t.n(r);
      for (var i in r) "default" !== i && function(e) {
          t.d(n, e, function() {
              return r[e];
          });
      }(i);
      n.default = a.a;
  },
  4019: function(e, n, t) {},
  a1c8: function(e, n, t) {
      (function(e, r) {
          Object.defineProperty(n, "__esModule", {
              value: !0
          }), n.default = void 0;
          var a = function(e) {
              return e && e.__esModule ? e : {
                  default: e
              };
          }(t("a34a"));
          function i(e, n, t, r, a, i, u) {
              try {
                  var o = e[i](u), s = o.value;
              } catch (e) {
                  e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                  return void t(e);
              }
              o.done ? n(s) : Promise.resolve(s).then(r, a);
          }
          function u(e) {
              return function() {
                  var n = this, t = arguments;
                  return new Promise(function(r, a) {
                      var u = e.apply(n, t);
                      function o(e) {
                          i(u, r, a, o, s, "next", e);
                      }
                      function s(e) {
                          i(u, r, a, o, s, "throw", e);
                      }
                      o(void 0);
                  });
              };
          }
          var o, s = null;
          o = e.getMenuButtonBoundingClientRect(), getApp();
          var c = {
              components: {
                  fooBar: function() {
                      t.e("components/fooBar/fooBar").then(function() {
                          return resolve(t("795e"));
                      }.bind(null, t)).catch(t.oe);
                  },
                  models: function() {
                      t.e("components/model/model").then(function() {
                          return resolve(t("37f2"));
                      }.bind(null, t)).catch(t.oe);
                  }
              },
              data: function() {
                  return {
                      menuButtonInfo: o,
                      findList: [],
                      loadShow: !0,
                      signShow: !1,
                      signTitle: "",
                      isSign: !1,
                      loginShow: !1
                  };
              },
              onLoad: function() {
                  var n = this;
                  return u(a.default.mark(function t() {
                      var r;
                      return a.default.wrap(function(t) {
                          for (;;) switch (t.prev = t.next) {
                            case 0:
                              return e.hideTabBar(), (r = n).loadShow = !1, t.next = 5, r.getFindList();

                            case 5:
                              r.adLoad();

                            case 6:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                  }))();
              },
              methods: {
                  toIndex: function(n) {
                      return u(a.default.mark(function t() {
                          return a.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  0 == n ? e.switchTab({
                                      url: "/pages/index/index"
                                  }) : 1 == n ? e.switchTab({
                                      url: "/pages/center/center"
                                  }) : 3 == n && e.switchTab({
                                      url: "/pages/user/user"
                                  });

                                case 2:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  getFindList: function() {
                      var e = this;
                      return u(a.default.mark(function n() {
                          var t, i;
                          return a.default.wrap(function(n) {
                              for (;;) switch (n.prev = n.next) {
                                case 0:
                                  return t = e, n.next = 3, r.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: "app_find",
                                          pageIndex: 1,
                                          pageSize: 10,
                                          order: {
                                              name: "sort",
                                              type: "desc"
                                          }
                                      }
                                  });

                                case 3:
                                  i = n.sent, t.findList = i.result.data;

                                case 5:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                      }))();
                  },
                  findClick: function(n) {
                      var t = this;
                      if (t.vuex_user) {
                          var r = t.findList[n].type;
                          console.log(t.findList[n].url), 1 === r ? e.navigateToMiniProgram({
                              appId: t.findList[n].appid,
                              path: t.findList[n].path
                          }) : e.navigateTo({
                              url: t.findList[n].url
                          });
                      } else t.loginShow = !0;
                  },
                  txsignClick: function() {
                      this.vuex_user ? e.navigateTo({
                          url: "/pages/find/profile/profile"
                      }) : this.loginShow = !0;
                  },
                  ttsignClick: function() {
                      this.vuex_user ? e.navigateTo({
                          url: "/pages/find/gallery/gallery"
                      }) : this.loginShow = !0;
                  },
                  search: function() {
                      return u(a.default.mark(function n() {
                          return a.default.wrap(function(n) {
                              for (;;) switch (n.prev = n.next) {
                                case 0:
                                  e.navigateTo({
                                      url: "/pages/search/search"
                                  });

                                case 1:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                      }))();
                  },
                  getSign: function() {
                      var e = this;
                      return u(a.default.mark(function n() {
                          var t, i, u;
                          return a.default.wrap(function(n) {
                              for (;;) switch (n.prev = n.next) {
                                case 0:
                                  return t = e, i = new Date(new Date().toLocaleDateString()).getTime(), u = new Date(new Date().toLocaleDateString()).getTime() + 864e5 - 1, 
                                  n.next = 5, r.callFunction({
                                      name: "sign_flag",
                                      data: {
                                          dbName: "app_sign",
                                          userId: t.vuex_user._id,
                                          startTime: i,
                                          endTime: u
                                      }
                                  });

                                case 5:
                                  n.sent.result.success ? t.isSign = !0 : t.isSign = !1;

                                case 7:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                      }))();
                  },
                  signClick: function() {
                      var n = this;
                      return u(a.default.mark(function t() {
                          var i, u;
                          return a.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  if ((i = n).vuex_user) {
                                      t.next = 4;
                                      break;
                                  }
                                  return i.loginShow = !0, t.abrupt("return");

                                case 4:
                                  return t.next = 6, i.getSign();

                                case 6:
                                  if (!i.isSign) {
                                      t.next = 9;
                                      break;
                                  }
                                  return e.showToast({
                                      icon: "none",
                                      mask: !0,
                                      title: "今日已签到",
                                      duration: 1500
                                  }), t.abrupt("return");

                                case 9:
                                  return e.showLoading({
                                      mask: !0,
                                      title: "签到中..."
                                  }), t.next = 12, r.callFunction({
                                      name: "sign_add",
                                      data: {
                                          userId: i.vuex_user._id
                                      }
                                  });

                                case 12:
                                  u = t.sent, e.hideLoading(), u.result.success ? (i.getUser(), i.signTitle = "<p style='font-weight: 550;font-size: 16px;'>签到成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + u.result.integral + "</span>能量</p>", 
                                  i.signShow = !0, i.isSign = !0) : e.showToast({
                                      icon: "none",
                                      mask: !0,
                                      title: u.result.msg,
                                      duration: 1500
                                  });

                                case 15:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  luckClick: function() {
                      this.vuex_user || (this.loginShow = !0);
                  },
                  adClick: function() {
                      this.vuex_user ? s && s.show().catch(function(e) {
                          s.load().then(function() {
                              return s.show();
                          });
                      }) : this.loginShow = !0;
                  },
                  adLoad: function() {
                      var e = this;
                      wx.createRewardedVideoAd && ((s = wx.createRewardedVideoAd({
                          adUnitId: n.vuex_awardAd
                      })).onError(function(e) {
                          console.log("videoAd onError", e);
                      }), s.onClose(function(n) {
                          n && n.isEnded || void 0 === n ? e.vuex_user && e.userIntegral() : console.log("中途退出");
                      }));
                  },
                  userIntegral: function() {
                      var n = this;
                      return u(a.default.mark(function t() {
                          var i, u;
                          return a.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return i = n, e.showLoading({
                                      mask: !0,
                                      title: "正在拼命加载中..."
                                  }), t.next = 4, r.callFunction({
                                      name: "user_integral",
                                      data: {
                                          userId: i.vuex_user._id
                                      }
                                  });

                                case 4:
                                  u = t.sent, e.hideLoading(), u.result.success && (i.getUser(), i.signTitle = "<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + u.result.integral + "</span>能量</p>", 
                                  i.signShow = !0);

                                case 7:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  getUser: function() {
                      var e = this;
                      return u(a.default.mark(function n() {
                          var t, i;
                          return a.default.wrap(function(n) {
                              for (;;) switch (n.prev = n.next) {
                                case 0:
                                  return t = e, n.next = 3, r.callFunction({
                                      name: "query_map",
                                      data: {
                                          dbName: "app_user",
                                          id: t.vuex_user._id
                                      }
                                  });

                                case 3:
                                  i = n.sent, t.$u.vuex("vuex_user", i.result);

                                case 5:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                      }))();
                  },
                  getUserInfo: function() {
                      var n = this;
                      e.getUserProfile({
                          desc: "个人登录，记录数据",
                          success: function(e) {
                              console.log(e), n.name = e.userInfo.nickName, n.avatar = e.userInfo.avatarUrl, n.wxlogin();
                          },
                          fail: function() {
                              console.log("获取用户信息失败");
                          }
                      });
                  },
                  wxlogin: function() {
                      var n = this;
                      return u(a.default.mark(function t() {
                          var r;
                          return a.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  r = n, e.showLoading({
                                      title: "登录中..."
                                  }), e.login({
                                      provider: "weixin",
                                      success: function(e) {
                                          var n = e.code;
                                          r.wxloginres(n);
                                      }
                                  });

                                case 3:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  wxloginres: function(n) {
                      var t = this;
                      return u(a.default.mark(function i() {
                          var u, o, s;
                          return a.default.wrap(function(a) {
                              for (;;) switch (a.prev = a.next) {
                                case 0:
                                  return u = t, o = e.getStorageSync("userId"), "wx", a.next = 5, r.callFunction({
                                      name: "user_authorize",
                                      data: {
                                          name: u.name,
                                          avatar: u.avatar,
                                          mptype: "wx",
                                          code: n,
                                          userId: o
                                      }
                                  });

                                case 5:
                                  (s = a.sent).result.success ? (u.$u.vuex("vuex_user", s.result.data), u.getUser(), 
                                  e.showToast({
                                      icon: "none",
                                      mask: !0,
                                      title: "登录成功，再次点击探索新功能吧！",
                                      duration: 1500
                                  }), e.removeStorageSync("userId")) : e.showToast({
                                      icon: "none",
                                      mask: !0,
                                      title: s.result.msg,
                                      duration: 1500
                                  }), u.loginShow = !1;

                                case 8:
                                case "end":
                                  return a.stop();
                              }
                          }, i);
                      }))();
                  },
                  
                  onShareAppMessage: function(e) {
                      return {
                          title: "手机墙纸精选发现更多有趣的手机壁纸玩法~",
                          path: "/pages/find/find?userId=" + this.vuex_user._id
                      };
                  },
                  onShareTimeline: function(e) {
                      return {
                          title: "手机墙纸精选发现更多有趣的手机壁纸玩法~",
                          path: "/pages/find/find"
                      };
                  }
              }
          };
          n.default = c;
      }).call(this, t("543d").default, t("a9ff").default);
  },
  a5ea: function(e, n, t) {
      t.r(n);
      var r = t("24af"), a = t("3dad");
      for (var i in a) "default" !== i && function(e) {
          t.d(n, e, function() {
              return a[e];
          });
      }(i);
      t("1fdb");
      var u = t("f0c5"), o = Object(u.a)(a.default, r.b, r.c, !1, null, "be140f20", null, !1, r.a, void 0);
      n.default = o.exports;
  }
}, [ [ "06dc", "common/runtime", "common/vendor" ] ] ]);