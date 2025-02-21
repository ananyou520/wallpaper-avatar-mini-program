(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pagesA/list/topic" ], {
  "0b0a": function(e, t, n) {
      (function(e) {
          n("1073"), n("a9ff"), a(n("66fd"));
          var t = a(n("5ff6"));
          function a(e) {
              return e && e.__esModule ? e : {
                  default: e
              };
          }
          wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
      }).call(this, n("543d").createPage);
  },
  "5ff6": function(e, t, n) {
      n.r(t);
      var a = n("9a73"), o = n("732d");
      for (var r in o) "default" !== r && function(e) {
          n.d(t, e, function() {
              return o[e];
          });
      }(r);
      n("c042");
      var u = n("f0c5"), c = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      t.default = c.exports;
  },
  6848: function(e, t, n) {},
  "732d": function(e, t, n) {
      n.r(t);
      var a = n("c243"), o = n.n(a);
      for (var r in a) "default" !== r && function(e) {
          n.d(t, e, function() {
              return a[e];
          });
      }(r);
      t.default = o.a;
  },
  "9a73": function(e, t, n) {
      n.d(t, "b", function() {
          return o;
      }), n.d(t, "c", function() {
          return r;
      }), n.d(t, "a", function() {
          return a;
      });
      var a = {
          uNavbar: function() {
              return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "8954"));
          },
          uLoadmore: function() {
              return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "98b0"));
          },
          uSkeleton: function() {
              return n.e("uview-ui/components/u-skeleton/u-skeleton").then(n.bind(null, "7409"));
          }
      }, o = function() {
          this.$createElement;
          this._self._c;
      }, r = [];
  },
  c042: function(e, t, n) {
      var a = n("6848");
      n.n(a).a;
  },
  c243: function(e, t, n) {
      (function(e, a) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          }), t.default = void 0;
          var o = function(e) {
              return e && e.__esModule ? e : {
                  default: e
              };
          }(n("a34a"));
          function r(e, t, n, a, o, r, u) {
              try {
                  var c = e[r](u), i = c.value;
              } catch (e) {
                  e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                  return void n(e);
              }
              c.done ? t(i) : Promise.resolve(i).then(a, o);
          }
          function u(e) {
              return function() {
                  var t = this, n = arguments;
                  return new Promise(function(a, o) {
                      var u = e.apply(t, n);
                      function c(e) {
                          r(u, a, o, c, i, "next", e);
                      }
                      function i(e) {
                          r(u, a, o, c, i, "throw", e);
                      }
                      c(void 0);
                  });
              };
          }
          var c = {
              data: function() {
                  return {
                      noData: !1,
                      skeletonLoad: !0,
                      wxCheck: !1,
                      dbname: "",
                      title: "",
                      modelType: "",
                      modelPid: 0,
                      modelId: 0,
                      navbarTop: 0,
                      coverList: [],
                      pageIndex: 0,
                      loadStatus: "loadmore",
                      rolldistance: "",
                      adFlag: !0,
                      backShow: !1
                  };
              },
              onLoad: function(t) {
                  var n = this;
                  return u(o.default.mark(function a() {
                      var r, u, c, i;
                      return o.default.wrap(function(a) {
                          for (;;) switch (a.prev = a.next) {
                            case 0:
                              return r = t.type, u = t.pid, c = t.id, i = n, a.next = 4, i.getConfig();

                            case 4:
                              return 0 == i.wxCheck ? i.dbname = "app_cover" : i.dbname = "app_gallery", i.modelType = r, 
                              i.modelPid = u, i.modelId = c, i.title = "壁纸专辑", a.next = 11, i.getList(r, c, 2);

                            case 11:
                              e.createSelectorQuery().in(i).select(".query").boundingClientRect(function(e) {
                                  i.navbarTop = e.top;
                              }).exec(), setTimeout(function() {
                                  i.skeletonLoad = !1;
                              }, 200);

                            case 14:
                            case "end":
                              return a.stop();
                          }
                      }, a);
                  }))();
              },
              methods: {
                  getConfig: function() {
                      var e = this;
                      return u(o.default.mark(function t() {
                          var n, r;
                          return o.default.wrap(function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  return n = e, t.next = 3, a.callFunction({
                                      name: "config_map",
                                      data: {
                                          keys: [ "wxCheck" ]
                                      }
                                  });

                                case 3:
                                  (r = t.sent).result.success && (n.wxCheck = r.result.data[0]);

                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                      }))();
                  },
                 
                  topic: function(t) {
                      e.navigateTo({
                          url: "/pagesB/detail/tpdetail?id=" + t
                      });
                  },
                  getList: function(e, t, n) {
                      var r = this;
                      return u(o.default.mark(function e() {
                          var u, c, i, d, l;
                          return o.default.wrap(function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  return c = (u = r).coverList, 1 == n && (u.coverList = [], c = [], u.pageIndex = 0), 
                                  u.pageIndex = u.pageIndex + 1, u.loadStatus = "loading", i = {}, d = {
                                      status: 1,
                                      topic: 1
                                  }, l = {
                                      name: "time",
                                      type: "desc"
                                  }, -1 == t ? l = {
                                      name: "time",
                                      type: "desc"
                                  } : -2 == t ? l = {
                                      name: "view",
                                      type: "desc"
                                  } : d = {
                                      category_id: t,
                                      status: 1,
                                      topic: 1
                                  }, e.next = 10, a.callFunction({
                                      name: "query_list",
                                      data: {
                                          dbName: u.dbname,
                                          filter: d,
                                          order: l,
                                          pageIndex: u.pageIndex,
                                          pageSize: 5
                                      }
                                  });

                                case 10:
                                  (i = e.sent).result.hasMore ? u.loadStatus = "loadmore" : u.loadStatus = "nomore", 
                                  2 == n && (c = []), c = c.concat(i.result.data), u.coverList = c, 0 == u.coverList.length ? u.noData = !0 : u.noData = !1;

                                case 16:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                      }))();
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
                  }
              },
              onPageScroll: function(e) {
                  e.scrollTop > 1e3 ? this.backShow = !0 : this.backShow = !1;
              },
              onShareAppMessage: function(e) {
                  return {
                      title: "给你的手机挑一张精美壁纸！",
                      path: "/pages/index/index",
                  };
              },
              onShareTimeline: function(e) {
                  return {
                      title: "给你的手机挑一张精美壁纸！",
                      path: "/pages/index/index"
                  };
              },
              onReachBottom: function() {
                  var e = this;
                  return u(o.default.mark(function t() {
                      var n;
                      return o.default.wrap(function(t) {
                          for (;;) switch (t.prev = t.next) {
                            case 0:
                              if ("nomore" != (n = e).loadStatus) {
                                  t.next = 3;
                                  break;
                              }
                              return t.abrupt("return");

                            case 3:
                              return t.next = 5, n.getList(n.modelType, n.modelId);

                            case 5:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                  }))();
              }
          };
          t.default = c;
      }).call(this, n("543d").default, n("a9ff").default);
  }
}, [ [ "0b0a", "common/runtime", "common/vendor" ] ] ]);