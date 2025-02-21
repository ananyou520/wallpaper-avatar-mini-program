(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
  "093a": function(e, t, n) {
      (function(e) {
          n("1073"), n("a9ff"), a(n("66fd"));
          var t = a(n("aff5"));
          function a(e) {
              return e && e.__esModule ? e : {
                  default: e
              };
          }
          wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
      }).call(this, n("543d").createPage);
  },
  "2a57": function(e, t, n) {
      var a = n("6a6a");
      n.n(a).a;
  },
  6927: function(e, t, n) {
      n.d(t, "b", function() {
          return r;
      }), n.d(t, "c", function() {
          return i;
      }), n.d(t, "a", function() {
          return a;
      });
      var a = {
          uIcon: function() {
              return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "b287"));
          },
          uSwiper: function() {
              return n.e("uview-ui/components/u-swiper/u-swiper").then(n.bind(null, "731d"));
          },
          uSection: function() {
              return n.e("uview-ui/components/u-section/u-section").then(n.bind(null, "5601"));
          },
          uLoadmore: function() {
              return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "98b0"));
          }
      }, r = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
              e.remindShow = !1;
          });
      }, i = [];
  },
  "6a6a": function(e, t, n) {},
  a607: function(e, t, n) {
      (function(e, a) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          }), t.default = void 0;
          var r = function(e) {
              return e && e.__esModule ? e : {
                  default: e
              };
          }(n("a34a"));
          function i(e, t, n, a, r, i, o) {
              try {
                  var c = e[i](o), u = c.value;
              } catch (e) {
                  e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                  return void n(e);
              }
              c.done ? t(u) : Promise.resolve(u).then(a, r);
          }
          function o(e) {
              return function() {
                  var t = this, n = arguments;
                  return new Promise(function(a, r) {
                      var o = e.apply(t, n);
                      function c(e) {
                          i(o, a, r, c, u, "next", e);
                      }
                      function u(e) {
                          i(o, a, r, c, u, "throw", e);
                      }
                      c(void 0);
                  });
              };
          }
          var c;
          c = e.getMenuButtonBoundingClientRect();
          var u = {
              components: {
                  fooBar: function() {
                      n.e("components/fooBar/fooBar").then(function() {
                          return resolve(n("795e"));
                      }.bind(null, n)).catch(n.oe);
                  },
                  models: function() {
                      n.e("components/model/model").then(function() {
                          return resolve(n("37f2"));
                      }.bind(null, n)).catch(n.oe);
                  }
              },
              data: function() {
                  return {
                      menuButtonInfo: c,
                      loadShow: !0,
                      scrollTop: 0,
                      wxCheck: !1,
                      wxRemind: !1,
                      remindShow: !1,
                      remind: [],
                      dbname: "",
                      bannerList: [],
                      indexList: [],
                      indesList: [],
                      hotList: [],
                      topicList: [],
                      coverList: [],
                      txList: [],
                      pcList: [],
                      cateStatic: "new",
                      cateMore: "",
                      cateList: [ {
                          type: "new",
                          name: "最新",
                          more: ""
                      }, {
                          type: "hot",
                          name: "热门",
                          more: ""
                      }, {
                          type: "高级",
                          name: "高级",
                          more: "category"
                      }, {
                          type: "小众",
                          name: "小众",
                          more: "category"
                      }, {
                        type: "美女",
                        name: "美女",
                        more: "category"
                    }],
                      pageIndex: 0,
                      loadStatus: "loadmore",
                      rolldistance: "",
                      adFlag: !0,
                      backShow: !1
                  };
              },
              onLoad: function(t) {
              
                  var n = this;
                  return o(r.default.mark(function a() {
                      var i, o, c, u;
                      return r.default.wrap(function(a) {
                          for (;;) switch (a.prev = a.next) {
                            case 0:
                              return i = t.userId, o = t.detailId, c = t.index, e.hideTabBar(), i && e.setStorageSync("userId", i), 
                              o && e.navigateTo({
                                  url: "/pagesA/pages/detail/detail?id=" + o + "&index=" + c
                              }), u = n, a.next = 7, u.getConfig();

                            case 7:
                              if (0 != u.wxCheck) {
                                  a.next = 13;
                                  break;
                              }
                              return u.dbname = "app_cover", a.next = 11, u.getindexList();

                            case 11:
                              a.next = 14;
                              break;

                            case 13:
                              u.dbname = "app_gallery";

                            case 14:
                              return a.next = 16, u.getBannerList();

                            case 16:
                              return a.next = 18, u.getTopicList();

                            case 18:
                              return a.next = 20, u.getindesList();

                            case 20:
                              if (u.loadShow = !1, 1 != u.wxRemind) {
                                  a.next = 26;
                                  break;
                              }
                              return a.next = 24, u.getRemind();

                            case 24:
                              return a.next = 26, u.isShowRemind();

                            case 26:
                              return a.next = 28, u.getHotList();

                            case 28:
                              return a.next = 30, u.getList(u.cateStatic);

                            case 30:
                              return a.next = 32, u.getListTx(u.cateStatic);

                            case 32:
                              return a.next = 34, u.getListPc(u.cateStatic);

                            case 34:
                              0 != u.vuex_plaqueAd && setTimeout(function() {
                                  var e = null;
                                  wx.createInterstitialAd && ((e = wx.createInterstitialAd({
                                      adUnitId: u.vuex_plaqueAd
                                  })).onLoad(function() {}), e.onError(function(e) {}), e.onClose(function() {})), 
                                  e && e.show().catch(function(e) {
                                      console.error(e);
                                  });
                              }, 15e3), 0 != u.vuex_plaqueAd && setInterval(function() {
                                  var e = null;
                                  wx.createInterstitialAd && ((e = wx.createInterstitialAd({
                                      adUnitId: u.vuex_plaqueAd
                                  })).onLoad(function() {}), e.onError(function(e) {}), e.onClose(function() {})), 
                                  e && e.show().catch(function(e) {
                                      console.error(e);
                                  });
                              }, 12e4), u.$nextTick(function() {
                                  e.createSelectorQuery().in(u).select(".query").boundingClientRect(function(e) {
                                      e.top && (u.homeTop = e.top);
                                  }).exec();
                              });

                            case 37:
                            case "end":
                              return a.stop();
                          }
                      }, a);
                  }))();
              },
              methods: {
                  isShowRemind: function() {
                      var t = this;
                      return o(r.default.mark(function n() {
                          var a;
                          return r.default.wrap(function(n) {
                              for (;;) switch (n.prev = n.next) {
                                case 0:
                                  a = t, e.getStorage({
                                      key: "today",
                                      success: function(t) {
                                          t.data && t.data != new Date().toLocaleDateString() ? (a.remindShow = !0, e.setStorageSync("today", new Date().toLocaleDateString())) : a.remindShow = !1, 
                                          console.log("AAAAAAA", a.remindShow);
                                      },
                                      fail: function(t) {
                                          console.log(t), a.remindShow = !0, e.setStorageSync("today", new Date().toLocaleDateString());
                                      }
                                  });

                                case 2:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                      }))();
                  },
                  toIndex: function(t) {
                      var n = this;
                      return o(r.default.mark(function a() {
                          return r.default.wrap(function(a) {
                              for (;;) switch (a.prev = a.next) {
                                case 0:
                                  n.index = t, 1 == t ? e.switchTab({
                                      url: "/pages/center/center"
                                  }) : 2 == t ? e.switchTab({
                                      url: "/pages/find/find"
                                  }) : 3 == t && e.switchTab({
                                      url: "/pages/user/user"
                                  });

                                case 3:
                                case "end":
                                  return a.stop();
                              }
                          }, a);
                      }))();
                  },
                  getConfig: function() {
                      var e = this;
                      return o(r.default.mark(function t() {
                          var n, i;
                          return r.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n = e, t.next = 3, a.callFunction({
                                      name: "config_map",
                                      data: {
                                          keys: [ "wxCheck", "wxRemind" ]
                                      }
                                  });

                                case 3:
                                  (i = t.sent).result.success && (n.wxCheck = i.result.data[0], n.wxRemind = i.result.data[1]);

                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  getRemind: function() {
                      var e = this;
                      return o(r.default.mark(function t() {
                          var n, i;
                          return r.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n = e, t.next = 3, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: "app_notice",
                                          pageIndex: 1,
                                          pageSize: 1,
                                          filter: {
                                              type: 1
                                          }
                                      }
                                  });

                                case 3:
                                  i = t.sent, n.remind = i.result.data[0];

                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  getBannerList: function() {
                      var e = this;
                      return o(r.default.mark(function t() {
                          var n, i;
                          return r.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n = e, t.next = 3, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: "app_banner",
                                          pageIndex: 1,
                                          pageSize: 10,
                                          order: {
                                              name: "sort",
                                              type: "desc"
                                          }
                                      }
                                  });

                                case 3:
                                  i = t.sent, n.bannerList = i.result.data;

                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  getindexList: function() {
                      var e = this;
                      return o(r.default.mark(function t() {
                          var n, i;
                          return r.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n = e, t.next = 3, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: "app_index",
                                          pageIndex: 1,
                                          pageSize: 10,
                                          order: {
                                              name: "sort",
                                              type: "desc",
                                              show: "show"
                                          }
                                      }
                                  });

                                case 3:
                                  i = t.sent, n.indexList = i.result.data;

                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  getindesList: function() {
                      var e = this;
                      return o(r.default.mark(function t() {
                          var n, i;
                          return r.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n = e, t.next = 3, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: "app_color",
                                          pageIndex: 1,
                                          pageSize: 20,
                                          order: {
                                              name: "sort",
                                              type: "desc"
                                          }
                                      }
                                  });

                                case 3:
                                  i = t.sent, n.indesList = i.result.data;

                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  getHotList: function() {
                      var e = this;
                      return o(r.default.mark(function t() {
                          var n, i;
                          return r.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n = e, t.next = 3, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: n.dbname,
                                          filter: {
                                              status: 1
                                          },
                                          order: {
                                              name: "view",
                                              type: "desc"
                                          },
                                          pageIndex: 1,
                                          pageSize: 20
                                      }
                                  });

                                case 3:
                                  i = t.sent, n.hotList = i.result.data;

                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  getTopicList: function() {
                      var e = this;
                      return o(r.default.mark(function t() {
                          var n, i, o, c, u, s;
                          return r.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n = e, t.next = 3, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: n.dbname,
                                          filter: {
                                              status: 1,
                                              topic: 1
                                          },
                                          order: {
                                              name: "time",
                                              type: "desc"
                                          },
                                          pageIndex: 1,
                                          pageSize: 5
                                      }
                                  });

                                case 3:
                                  for (i = t.sent, o = i.result.data, c = o.length; c; ) s = Math.floor(Math.random() * c--), 
                                  u = o[c], o[c] = o[s], o[s] = u;
                                  n.topicList = o;

                                case 9:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                  cateClick: function(e, t, n) {
                      var a = this;
                      e != a.cateStatic && (n && (a.rolldistance = n), a.cateStatic = e, a.cateMore = t, 
                      a.getList(e, t, 1));
                  },
                   getList: function(t, n, i) {
                      var c = this;
                      return o(r.default.mark(function o() {
                         var u, s, d, l, f;
                          return r.default.wrap(function(r) {
                              for (;;) switch (r.prev = r.next) {
                                case 0:
                                  if (s = (u = c).coverList, 1 == i && (e.showLoading({
                                      mask: !0,
                                      title: "正在拼命加载中..."
                                  }), s = [], u.pageIndex = 0), u.pageIndex = u.pageIndex + 1, u.loadStatus = "loading", 
                                  !n) {
                                      r.next = 18;
                                      break;
                                  }
                                  if ("tags" !== n) {
                                      r.next = 12;
                                      break;
                                  }
                                  return r.next = 9, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: u.dbname,
                                          tags: t,
                                          pageIndex: u.pageIndex,
                                          pageSize: 5
                                      }
                                  });

                                case 9:
                                  d = r.sent, r.next = 16;
                                  break;

                                case 12:
                                  if ("category" !== n) {
                                      r.next = 16;
                                      break;
                                  }
                                  return r.next = 15, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: u.dbname,
                                          filter: {
                                              status: 1,
                                              category_name: t,
                                              mode: 0
                                          },
                                          order: {
                                              name: "time",
                                              type: "desc"
                                          },
                                          pageIndex: u.pageIndex,
                                          pageSize: 5
                                      }
                                  });

                                case 15:
                                  d = r.sent;

                                case 16:
                                  r.next = 23;
                                  break;

                                case 18:
                                  return l = {
                                      status: 1,
                                      mode: 0
                                  }, f = {}, "new" == t ? f = {
                                      name: "time",
                                      type: "desc"
                                  } : "hot" == t && (f = {
                                      name: "view",
                                      type: "desc"
                                  }), r.next = 22, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: u.dbname,
                                          filter: l,
                                          order: f,
                                          pageIndex: u.pageIndex,
                                          pageSize: 10
                                      }
                                  });

                                case 22:
                                  d = r.sent;

                                case 23:
                                  e.hideLoading(), d.result.hasMore ? u.loadStatus = "loadmore" : u.loadStatus = "nomore", 
                                  u.coverList = s.concat(d.result.data);

                                case 26:
                                case "end":
                                  return r.stop();
                              }
                          }, o);
                      }))();
                  },
                  getListTx: function(t, n, i) {
                      var c = this;
                      return o(r.default.mark(function n() {
                          var o, u, s, d, l;
                          return r.default.wrap(function(n) {
                              for (;;) switch (n.prev = n.next) {
                                case 0:
                                  return u = (o = c).txList, 1 == i && (e.showLoading({
                                      mask: !0,
                                      title: "正在拼命加载中..."
                                  }), u = [], o.pageIndex = 0), o.pageIndex = o.pageIndex + 1, o.loadStatus = "loading", 
                                  d = {
                                      status: 1,
                                      mode: 1
                                  }, l = {}, "new" == t ? l = {
                                      name: "time",
                                      type: "desc"
                                  } : "hot" == t && (l = {
                                      name: "view",
                                      type: "desc"
                                  }), n.next = 9, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: o.dbname,
                                          filter: d,
                                          order: l,
                                          pageIndex: 1,
                                          pageSize: 10
                                      }
                                  });

                                case 9:
                                  s = n.sent, e.hideLoading(), s.result.hasMore ? o.loadStatus = "loadmore" : o.loadStatus = "nomore", 
                                  o.txList = u.concat(s.result.data);

                                case 13:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                      }))();
                  },
                  getListPc: function(t, n, i) {
                      var c = this;
                      return o(r.default.mark(function n() {
                          var o, u, s, d, l;
                          return r.default.wrap(function(n) {
                              for (;;) switch (n.prev = n.next) {
                                case 0:
                                  return u = (o = c).pcList, 1 == i && (e.showLoading({
                                      mask: !0,
                                      title: "正在拼命加载中..."
                                  }), u = [], o.pageIndex = 0), o.pageIndex = o.pageIndex + 1, o.loadStatus = "loading", 
                                  d = {
                                      status: 1,
                                      mode: 3
                                  }, l = {}, "new" == t ? l = {
                                      name: "time",
                                      type: "desc"
                                  } : "hot" == t && (l = {
                                      name: "view",
                                      type: "desc"
                                  }), n.next = 9, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: o.dbname,
                                          filter: d,
                                          order: l,
                                          pageIndex: 1,
                                          pageSize: 10
                                      }
                                  });

                                case 9:
                                  s = n.sent, e.hideLoading(), s.result.hasMore ? o.loadStatus = "loadmore" : o.loadStatus = "nomore", 
                                  o.pcList = u.concat(s.result.data);

                                case 13:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                      }))();
                  },
                  search: function() {
                      e.navigateTo({
                          url: "/pages/search/search"
                      });
                  },
                  backTop: function() {
                      e.pageScrollTo({
                          scrollTop: 0,
                          duration: 300
                      });
                  },
                  remindClick: function() {
                      e.navigateTo({
                          url: this.remind.url
                      });
                  },
                  bannerClick: function(t) {
                      var n = this.bannerList[t].type;
                      1 === n && e.navigateToMiniProgram({
                          appId: this.bannerList[t].appid,
                          path: this.bannerList[t].path
                      }), 0 === n && e.navigateTo({
                          url: this.bannerList[t].url
                      });
                  },
                  moreClick: function() {
                      e.switchTab({
                          url: "/pages/find/find"
                      });
                  },
                  detail: function(t, n) {
                      e.navigateTo({
                          url: "/pagesB/detail/detail?id=" + t + "&index=" + n
                      });
                  },
                  tpdetail: function(t) {
                      e.navigateTo({
                          url: "/pagesB/detail/tpdetail?id=" + t
                      });
                  },
                  colorClick: function(t, n, a) {
                      e.navigateTo({
                          url: "/pagesA/list/list?type=" + t + "&pid=" + n + "&id=" + a
                      });
                  },
                  listClick: function(t, n, a, r) {
                      e.navigateTo({
                          url: "/pagesA/list/list?type=" + t + "&pid=" + n + "&id=" + a + "&mode=" + r
                      });
                  },
                  topicClick: function(t, n, a) {
                      e.navigateTo({
                          url: "/pagesA/list/topic?type=" + t + "&pid=" + n + "&id=" + a
                      });
                  },
                  adLoad: function() {
                      this.adFlag = !0;
                  },
                  adError: function(e) {
                      this.adFlag = !1;
                  },
                  adClose: function() {
                      this.adFlag = !1;
                  },
                  refresh: function() {
                      var t = this;
                      e.showLoading({
                          title: "加载中"
                      }), t.getTopicList(), t.getList(t.cateStatic, t.cateMore, 1), e.pageScrollTo({
                          scrollTop: 0,
                          duration: 300
                      }), console.log("刷新"), setTimeout(function() {
                          e.hideLoading(), e.showToast({
                              title: "加载完成"
                          });
                      }, 2e3);
                  }
              },
              onReachBottom: function() {
                  var e = this;
                  return o(r.default.mark(function t() {
                      var n;
                      return r.default.wrap(function(t) {
                          for (;;) switch (t.prev = t.next) {
                            case 0:
                              if ("nomore" != (n = e).loadStatus) {
                                  t.next = 3;
                                  break;
                              }
                              return t.abrupt("return");

                            case 3:
                              return t.next = 5, n.getList(n.cateStatic);

                            case 5:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                  }))();
              },
              onPageScroll: function(e) {
                  this.scrollTop = e.scrollTop, e.scrollTop > 50 ? this.backShow = !0 : this.backShow = !1;
              },
              onShareAppMessage: function(e) {
                  return {
                      title: "给你的手机挑一张精美壁纸！",
                      path: "/pages/index/index?userId=" + this.vuex_user._id,
                      imageUrl: "https://imgs.ygxxzz.com/index.png"
                  };
              },
              onShareTimeline: function(e) {
                  return {
                      title: "给你的手机挑一张精美壁纸！",
                      path: "/pages/index/index",
                      imageUrl: "https://imgs.ygxxzz.com/index.png"
                  };
              }
          };
          t.default = u;
      }).call(this, n("543d").default, n("a9ff").default);
  },
  aff5: function(e, t, n) {
      n.r(t);
      var a = n("6927"), r = n("d48b");
      for (var i in r) "default" !== i && function(e) {
          n.d(t, e, function() {
              return r[e];
          });
      }(i);
      n("2a57");
      var o = n("f0c5"), c = Object(o.a)(r.default, a.b, a.c, !1, null, "74356fc4", null, !1, a.a, void 0);
      t.default = c.exports;
  },
  d48b: function(e, t, n) {
      n.r(t);
      var a = n("a607"), r = n.n(a);
      for (var i in a) "default" !== i && function(e) {
          n.d(t, e, function() {
              return a[e];
          });
      }(i);
      t.default = r.a;
  }
}, [ [ "093a", "common/runtime", "common/vendor" ] ] ]);