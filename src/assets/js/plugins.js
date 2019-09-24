// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn"
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// Place any jQuery/helper plugins in here.

// xs-nav menu
!(function(n, e, i, s) {
  (n.xs_nav = function(a, t) {
    var o = {
        responsive: !0,
        mobileBreakpoint: 767,
        showDuration: 300,
        hideDuration: 300,
        showDelayDuration: 0,
        hideDelayDuration: 0,
        submenuTrigger: "hover",
        effect: "fade",
        submenuIndicator: !0,
        submenuIndicatorTrigger: !1,
        hideSubWhenGoOut: !0,
        visibleSubmenusOnMobile: !1,
        overlay: !0,
        overlayColor: "rgba(0, 0, 0, 0.7)",
        hidden: !1,
        hiddenOnMobile: !1,
        offCanvasSide: "left",
        offCanvasCloseButton: !0,
        animationOnShow: "",
        animationOnHide: "",
        hideScrollBar: !0,
        onInit: function() {},
        onLandscape: function() {},
        onPortrait: function() {},
        onShowOffCanvas: function() {},
        onHideOffCanvas: function() {}
      },
      r = this,
      u = Number.MAX_VALUE,
      d = 1,
      l = "click.nav touchstart.nav",
      c = "mouseenter focusin",
      f = "mouseleave focusout";
    r.settings = {};
    var a = (n(a), a);
    n(a).find(".nav-search").length > 0 &&
      n(a)
        .find(".nav-search")
        .find("form")
        .prepend(
          "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
        ),
      (r.init = function() {
        (r.settings = n.extend({}, o, t)),
          r.settings.offCanvasCloseButton &&
            n(a)
              .find(".nav-menus-wrapper")
              .prepend(
                "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
              ),
          "right" == r.settings.offCanvasSide &&
            n(a)
              .find(".nav-menus-wrapper")
              .addClass("nav-menus-wrapper-right"),
          r.settings.hidden &&
            (n(a).addClass("xs_nav-hidden"),
            (r.settings.mobileBreakpoint = 99999)),
          v(),
          n(a)
            .find(".nav-toggle")
            .on("click touchstart", function(n) {
              n.stopPropagation(),
                n.preventDefault(),
                r.showOffcanvas(),
                t !== s && r.callback("onShowOffCanvas");
            }),
          n(a)
            .find(".nav-menus-wrapper-close-button")
            .on("click touchstart", function() {
              r.hideOffcanvas(), t !== s && r.callback("onHideOffCanvas");
            }),
          n(a)
            .find(".nav-search-button, .nav-search-close-button")
            .on("click touchstart keydown", function(e) {
              e.stopPropagation(), e.preventDefault();
              var i = e.keyCode || e.which;
              "click" === e.type ||
              "touchstart" === e.type ||
              ("keydown" === e.type && 13 == i)
                ? r.toggleSearch()
                : 9 == i && n(e.target).blur();
            }),
          n(e).resize(function() {
            r.initxs_navMode(C()), O(), r.settings.hiddenOnMobile && m();
          }),
          r.initxs_navMode(C()),
          r.settings.hiddenOnMobile && m(),
          r.settings.overlay &&
            n(a).append("<div class='nav-overlay-panel'></div>"),
          n(a).find(".megamenu-tabs").length > 0 && y(),
          t !== s && r.callback("onInit");
      });
    var h = function() {
        n(a)
          .find(".nav-submenu")
          .hide(0),
          n(a)
            .find("li")
            .removeClass("focus");
      },
      v = function() {
        n(a)
          .find("li")
          .each(function() {
            n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
              (n(this)
                .children(".nav-dropdown,.megamenu-panel")
                .addClass("nav-submenu"),
              r.settings.submenuIndicator &&
                n(this)
                  .children("a")
                  .append(
                    "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                  ));
          });
      },
      m = function() {
        n(a).hasClass("xs_nav-portrait")
          ? n(a).addClass("xs_nav-hidden")
          : n(a).removeClass("xs_nav-hidden");
      };
    (r.showSubmenu = function(e, i) {
      C() > r.settings.mobileBreakpoint &&
        n(a)
          .find(".nav-search")
          .find("form")
          .fadeOut(),
        "fade" == i
          ? n(e)
              .children(".nav-submenu")
              .stop(!0, !0)
              .delay(r.settings.showDelayDuration)
              .fadeIn(r.settings.showDuration)
              .removeClass(r.settings.animationOnHide)
              .addClass(r.settings.animationOnShow)
          : n(e)
              .children(".nav-submenu")
              .stop(!0, !0)
              .delay(r.settings.showDelayDuration)
              .slideDown(r.settings.showDuration)
              .removeClass(r.settings.animationOnHide)
              .addClass(r.settings.animationOnShow),
        n(e).addClass("focus");
    }),
      (r.hideSubmenu = function(e, i) {
        "fade" == i
          ? n(e)
              .find(".nav-submenu")
              .stop(!0, !0)
              .delay(r.settings.hideDelayDuration)
              .fadeOut(r.settings.hideDuration)
              .removeClass(r.settings.animationOnShow)
              .addClass(r.settings.animationOnHide)
          : n(e)
              .find(".nav-submenu")
              .stop(!0, !0)
              .delay(r.settings.hideDelayDuration)
              .slideUp(r.settings.hideDuration)
              .removeClass(r.settings.animationOnShow)
              .addClass(r.settings.animationOnHide),
          n(e)
            .removeClass("focus")
            .find(".focus")
            .removeClass("focus");
      });
    var p = function() {
        r.settings.hideScrollBar && n("body").addClass("no-scroll"),
          r.settings.overlay &&
            n(a)
              .find(".nav-overlay-panel")
              .css("background-color", r.settings.overlayColor)
              .fadeIn(300)
              .on("click touchstart", function() {
                r.hideOffcanvas();
              });
      },
      b = function() {
        r.settings.hideScrollBar && n("body").removeClass("no-scroll"),
          r.settings.overlay &&
            n(a)
              .find(".nav-overlay-panel")
              .fadeOut(400);
      };
    (r.showOffcanvas = function() {
      p(),
        "left" == r.settings.offCanvasSide
          ? n(a)
              .find(".nav-menus-wrapper")
              .css("transition-property", "left")
              .addClass("nav-menus-wrapper-open")
          : n(a)
              .find(".nav-menus-wrapper")
              .css("transition-property", "right")
              .addClass("nav-menus-wrapper-open");
    }),
      (r.hideOffcanvas = function() {
        n(a)
          .find(".nav-menus-wrapper")
          .removeClass("nav-menus-wrapper-open")
          .on(
            "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
            function() {
              n(a)
                .find(".nav-menus-wrapper")
                .css("transition-property", "none")
                .off();
            }
          ),
          b();
      }),
      (r.toggleOffcanvas = function() {
        C() <= r.settings.mobileBreakpoint &&
          (n(a)
            .find(".nav-menus-wrapper")
            .hasClass("nav-menus-wrapper-open")
            ? (r.hideOffcanvas(), t !== s && r.callback("onHideOffCanvas"))
            : (r.showOffcanvas(), t !== s && r.callback("onShowOffCanvas")));
      }),
      (r.toggleSearch = function() {
        "none" ==
        n(a)
          .find(".nav-search")
          .find("form")
          .css("display")
          ? (n(a)
              .find(".nav-search")
              .find("form")
              .fadeIn(200),
            n(a)
              .find(".nav-search")
              .find("input")
              .focus())
          : (n(a)
              .find(".nav-search")
              .find("form")
              .fadeOut(200),
            n(a)
              .find(".nav-search")
              .find("input")
              .blur());
      }),
      (r.initxs_navMode = function(e) {
        r.settings.responsive
          ? (e <= r.settings.mobileBreakpoint &&
              u > r.settings.mobileBreakpoint &&
              (n(a)
                .addClass("xs_nav-portrait")
                .removeClass("xs_nav-landscape"),
              S(),
              t !== s && r.callback("onPortrait")),
            e > r.settings.mobileBreakpoint &&
              d <= r.settings.mobileBreakpoint &&
              (n(a)
                .addClass("xs_nav-landscape")
                .removeClass("xs_nav-portrait"),
              k(),
              b(),
              r.hideOffcanvas(),
              t !== s && r.callback("onLandscape")),
            (u = e),
            (d = e))
          : (n(a).addClass("xs_nav-landscape"),
            k(),
            t !== s && r.callback("onLandscape"));
      });
    var g = function() {
        n("html").on("click.body touchstart.body", function(e) {
          0 === n(e.target).closest(".xs_nav").length &&
            (n(a)
              .find(".nav-submenu")
              .fadeOut(),
            n(a)
              .find(".focus")
              .removeClass("focus"),
            n(a)
              .find(".nav-search")
              .find("form")
              .fadeOut());
        });
      },
      C = function() {
        return (
          e.innerWidth || i.documentElement.clientWidth || i.body.clientWidth
        );
      },
      w = function(e) {
        "landscape" == e
          ? n(a)
              .find(".nav-menu")
              .find("li, a")
              .off(l)
          : n(a)
              .find(".nav-menu")
              .find("li, a")
              .off(c)
              .off(f);
      },
      O = function() {
        if (C() > r.settings.mobileBreakpoint) {
          var e = n(a).outerWidth();
          n(a)
            .find(".nav-menu")
            .children("li")
            .children(".nav-submenu")
            .each(function() {
              n(this)
                .parent()
                .position().left +
                n(this).outerWidth() >
              e
                ? n(this).css("right", 0)
                : n(this).css("right", "auto");
            });
        }
      },
      y = function() {
        function e(e) {
          var i = n(e)
              .children(".megamenu-tabs-nav")
              .children("li"),
            s = n(e).children(".megamenu-tabs-pane");
          n(i).on("mouseenter.tabs click.tabs touchstart.tabs", function(e) {
            e.stopPropagation(),
              e.preventDefault(),
              n(i).removeClass("active"),
              n(this).addClass("active"),
              n(s)
                .hide(0)
                .removeClass("active"),
              n(s[n(this).index()])
                .show(0)
                .addClass("active");
          });
        }
        if (n(a).find(".megamenu-tabs").length > 0)
          for (var i = n(a).find(".megamenu-tabs"), s = 0; s < i.length; s++)
            e(i[s]);
      },
      k = function() {
        w("landscape"),
          h(),
          navigator.userAgent.match(/Mobi/i) ||
          navigator.maxTouchPoints > 0 ||
          "click" == r.settings.submenuTrigger
            ? n(a)
                .find(".nav-menu, .nav-dropdown")
                .children("li")
                .children("a")
                .on(l, function(i) {
                  if (
                    (r.hideSubmenu(
                      n(this)
                        .parent("li")
                        .siblings("li"),
                      r.settings.effect
                    ),
                    n(this)
                      .closest(".nav-menu")
                      .siblings(".nav-menu")
                      .find(".nav-submenu")
                      .fadeOut(r.settings.hideDuration),
                    n(this).siblings(".nav-submenu").length > 0)
                  ) {
                    if (
                      (i.stopPropagation(),
                      i.preventDefault(),
                      "none" ==
                        n(this)
                          .siblings(".nav-submenu")
                          .css("display"))
                    )
                      return (
                        r.showSubmenu(n(this).parent("li"), r.settings.effect),
                        O(),
                        !1
                      );
                    if (
                      (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                      "_blank" === n(this).attr("target") ||
                        "blank" === n(this).attr("target"))
                    )
                      e.open(n(this).attr("href"));
                    else {
                      if (
                        "#" === n(this).attr("href") ||
                        "" === n(this).attr("href") ||
                        "javascript:void(0)" === n(this).attr("href")
                      )
                        return !1;
                      e.location.href = n(this).attr("href");
                    }
                  }
                })
            : n(a)
                .find(".nav-menu")
                .find("li")
                .on(c, function() {
                  r.showSubmenu(this, r.settings.effect), O();
                })
                .on(f, function() {
                  r.hideSubmenu(this, r.settings.effect);
                }),
          r.settings.hideSubWhenGoOut && g();
      },
      S = function() {
        w("portrait"),
          h(),
          r.settings.visibleSubmenusOnMobile
            ? n(a)
                .find(".nav-submenu")
                .show(0)
            : (n(a)
                .find(".submenu-indicator")
                .removeClass("submenu-indicator-up"),
              r.settings.submenuIndicator && r.settings.submenuIndicatorTrigger
                ? n(a)
                    .find(".submenu-indicator")
                    .on(l, function(e) {
                      return (
                        e.stopPropagation(),
                        e.preventDefault(),
                        r.hideSubmenu(
                          n(this)
                            .parent("a")
                            .parent("li")
                            .siblings("li"),
                          "slide"
                        ),
                        r.hideSubmenu(
                          n(this)
                            .closest(".nav-menu")
                            .siblings(".nav-menu")
                            .children("li"),
                          "slide"
                        ),
                        "none" ==
                        n(this)
                          .parent("a")
                          .siblings(".nav-submenu")
                          .css("display")
                          ? (n(this).addClass("submenu-indicator-up"),
                            n(this)
                              .parent("a")
                              .parent("li")
                              .siblings("li")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            r.showSubmenu(
                              n(this)
                                .parent("a")
                                .parent("li"),
                              "slide"
                            ),
                            !1)
                          : (n(this)
                              .parent("a")
                              .parent("li")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            void r.hideSubmenu(
                              n(this)
                                .parent("a")
                                .parent("li"),
                              "slide"
                            ))
                      );
                    })
                : n(a)
                    .find(".nav-menu, .nav-dropdown")
                    .children("li")
                    .children("a")
                    .each(function() {
                      n(this).siblings(".nav-submenu").length > 0 &&
                        n(this).on(l, function(i) {
                          if (
                            (i.stopPropagation(),
                            i.preventDefault(),
                            r.hideSubmenu(
                              n(this)
                                .parent("li")
                                .siblings("li"),
                              r.settings.effect
                            ),
                            r.hideSubmenu(
                              n(this)
                                .closest(".nav-menu")
                                .siblings(".nav-menu")
                                .children("li"),
                              "slide"
                            ),
                            "none" ==
                              n(this)
                                .siblings(".nav-submenu")
                                .css("display"))
                          )
                            return (
                              n(this)
                                .children(".submenu-indicator")
                                .addClass("submenu-indicator-up"),
                              n(this)
                                .parent("li")
                                .siblings("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              n(this)
                                .closest(".nav-menu")
                                .siblings(".nav-menu")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              r.showSubmenu(n(this).parent("li"), "slide"),
                              !1
                            );
                          if (
                            (n(this)
                              .parent("li")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            r.hideSubmenu(n(this).parent("li"), "slide"),
                            "_blank" === n(this).attr("target") ||
                              "blank" === n(this).attr("target"))
                          )
                            e.open(n(this).attr("href"));
                          else {
                            if (
                              "#" === n(this).attr("href") ||
                              "" === n(this).attr("href") ||
                              "javascript:void(0)" === n(this).attr("href")
                            )
                              return !1;
                            e.location.href = n(this).attr("href");
                          }
                        });
                    }));
      };
    (r.callback = function(n) {
      t[n] !== s && t[n].call(a);
    }),
      r.init();
  }),
    (n.fn.xs_nav = function(e) {
      return this.each(function() {
        if (s === n(this).data("xs_nav")) {
          var i = new n.xs_nav(this, e);
          n(this).data("xs_nav", i);
        }
      });
    });
})(jQuery, window, document);
