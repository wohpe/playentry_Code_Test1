parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        LI4l: [
            function (require, module, exports) {
                "use strict";
                function e(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r &&
                            (n = n.filter(function (r) {
                                return Object.getOwnPropertyDescriptor(e, r).enumerable;
                            })),
                            t.push.apply(t, n);
                    }
                    return t;
                }
                function r(r) {
                    for (var n = 1; n < arguments.length; n++) {
                        var o = null != arguments[n] ? arguments[n] : {};
                        n % 2
                            ? e(Object(o), !0).forEach(function (e) {
                                  t(r, e, o[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                            : e(Object(o)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                              });
                    }
                    return r;
                }
                function t(e, r, t) {
                    return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t), e;
                }
                function n(e, r, t, n, o, c, u) {
                    try {
                        var i = e[c](u),
                            a = i.value;
                    } catch (s) {
                        return void t(s);
                    }
                    i.done ? r(a) : Promise.resolve(a).then(n, o);
                }
                function o(e) {
                    return function () {
                        var r = this,
                            t = arguments;
                        return new Promise(function (o, c) {
                            var u = e.apply(r, t);
                            function i(e) {
                                n(u, o, c, i, a, "next", e);
                            }
                            function a(e) {
                                n(u, o, c, i, a, "throw", e);
                            }
                            i(void 0);
                        });
                    };
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.executeAction = void 0),
                    (exports.executeAction = (function () {
                        var e = o(
                            regeneratorRuntime.mark(function e(t, n, o, c) {
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.prev = 0), (e.next = 3), t(r({ sender: { entity: n, script: o } }, c));
                                                case 3:
                                                    return e.abrupt("return", e.sent);
                                                case 6:
                                                    throw ((e.prev = 6), (e.t0 = e.catch(0)), alert("?????????????????? ????????? ??????????????????.\n???????????? ??????????????? ??????????????????."), new Error());
                                                case 10:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 6]]
                                );
                            })
                        );
                        return function (r, t, n, o) {
                            return e.apply(this, arguments);
                        };
                    })());
            },
            {},
        ],
        E3oo: [
            function (require, module, exports) {
                "use strict";
                function e(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                }
                function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
                    }
                }
                function n(e, n, a) {
                    return n && t(e.prototype, n), a && t(e, a), e;
                }
                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Parser = exports.SyntaxCode = exports.IndicatorType = exports.SyntaxTree = void 0);
                var r,
                    o,
                    s = function e(t, n) {
                        a(this, e), (this.type = t), (this.content = n);
                    };
                (exports.SyntaxTree = s),
                    (function (e) {
                        (e[(e.EVENT = 0)] = "EVENT"), (e[(e.DEFAULT = 1)] = "DEFAULT");
                    })((r = exports.IndicatorType || (exports.IndicatorType = {}))),
                    (function (e) {
                        (e[(e.BLOCK = 0)] = "BLOCK"), (e[(e.CONDITION = 1)] = "CONDITION"), (e[(e.PARAM = 2)] = "PARAM"), (e[(e.TEXT = 3)] = "TEXT"), (e[(e.DROPDOWN = 4)] = "DROPDOWN");
                    })((o = exports.SyntaxCode || (exports.SyntaxCode = {})));
                var p = (function () {
                    function t() {
                        a(this, t);
                    }
                    return (
                        n(
                            t,
                            [
                                {
                                    key: "parse",
                                    value: function (e) {
                                        var t,
                                            n = this,
                                            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            r = null,
                                            p = 0,
                                            c = 0,
                                            i = 1,
                                            l = !1;
                                        try {
                                            e.split("").forEach(function (u, f, y) {
                                                if (c > 0) return c--;
                                                if (0 == f)
                                                    return (
                                                        (t = "[" == u ? (a ? o.DROPDOWN : o.BLOCK) : "(" == u ? o.PARAM : "<" == u ? o.CONDITION : o.TEXT),
                                                        (r = new s(t, [])),
                                                        void (t == o.TEXT && r.content.push("") && (r.content[r.content.length - 1] += u))
                                                    );
                                                if ((a && ["[", "(", "<"].includes(u) && i++, ["]", ")", ">"].includes(u) && i--, !a && i < 1 && y.length - 1 != f))
                                                    throw new SyntaxError("Invalid Syntax: Multiple-Root-Brackets are not allowed.");
                                                if ((y.length - 1 == f || (a && ["]", ")", ">"].includes(u) && 0 == i)) && t != o.TEXT) {
                                                    if ((t == o.BLOCK || t == o.DROPDOWN) && "]" != u) throw new SyntaxError("Invalid Syntax: Required ']'");
                                                    if (t == o.PARAM && ")" != u) throw new SyntaxError("Invalid Syntax: Required ')'");
                                                    if (t == o.CONDITION && ">" != u) throw new SyntaxError("Invalid Syntax: Required '>'");
                                                    throw ((p = f), "break");
                                                }
                                                if (a || t == o.TEXT || !["[", "(", "<"].includes(u))
                                                    "string" != typeof r.content[r.content.length - 1] && r.content.push(""),
                                                        a
                                                            ? ":" == u
                                                                ? (r.content.push(""), (l = !0))
                                                                : (l && " " == u) ||
                                                                  (t != o.DROPDOWN
                                                                      ? (r.content[r.content.length - 1] += u)
                                                                      : l
                                                                      ? ((r.content[r.content.length - 1] = ("@" == u).toString()), r.content.push("@" == u ? "" : u))
                                                                      : "true" == r.content[1] && "@" != u
                                                                      ? (r.content[r.content.length - 1] += u)
                                                                      : "=" == u || "," == u
                                                                      ? r.content.push("")
                                                                      : (r.content[r.content.length - 1] += u),
                                                                  (l = !1))
                                                            : (r.content[r.content.length - 1] += u);
                                                else if (!a) {
                                                    var m = n.parse(e.substring(f), !0);
                                                    (c = m.len), r.content.push(m.tree);
                                                }
                                            });
                                        } catch (u) {
                                            if ("break" != u) throw u;
                                        }
                                        return a ? { tree: r, len: p } : r;
                                    },
                                },
                                {
                                    key: "syntaxTreeToBlock",
                                    value: function (t, n) {
                                        var a = t.name,
                                            s = t.className,
                                            p = t.color,
                                            c = t.outline,
                                            i = t.action,
                                            l = t.darkenColor,
                                            u = t.indicator,
                                            f = t.indicatorType,
                                            y = void 0 === f ? r.DEFAULT : f,
                                            m = t.event;
                                        switch (n.type) {
                                            case o.TEXT:
                                                return {
                                                    base: {
                                                        template: "%1",
                                                        color: "transparent",
                                                        outerLine: "transparent",
                                                        skeleton: "basic_text",
                                                        statements: [],
                                                        params: [{ type: "Text", text: n.content[0], color: "undefined" != typeof EntryStatic ? EntryStatic.colorSet.common.TEXT : "#333", class: "bold", align: "center" }],
                                                        events: {},
                                                        def: { params: [null], type: a },
                                                        paramsKeyMap: {},
                                                        class: s,
                                                        func: i,
                                                    },
                                                    neededDynamicDropdown: [],
                                                };
                                            case o.CONDITION:
                                            case o.PARAM:
                                            case o.BLOCK:
                                                var d,
                                                    h = {
                                                        template: "",
                                                        color: p,
                                                        outerLine: c,
                                                        skeleton: m ? "basic_event" : ((d = {}), e(d, o.BLOCK, "basic"), e(d, o.CONDITION, "basic_boolean_field"), e(d, o.PARAM, "basic_string_field"), d)[n.type],
                                                        statements: [],
                                                        params: [],
                                                        events: {},
                                                        def: { params: [], type: a },
                                                        paramsKeyMap: {},
                                                        class: s,
                                                        func: i,
                                                    };
                                                m && (h.event = m);
                                                var T = [],
                                                    v = 0;
                                                return (
                                                    u && y == r.EVENT && ((h.template += "%".concat(++v)), h.params.push({ type: "Indicator", img: u, size: 14, position: { x: 0, y: -2 } }), h.def.params.push(null)),
                                                    n.content.forEach(function (e) {
                                                        var t;
                                                        if ("string" == typeof e) h.template += e;
                                                        else if (((h.template += "%".concat(++v)), e.content.length >= 2)) {
                                                            if (e.type == o.PARAM)
                                                                h.params.push({ type: "Block", accept: "string" }), h.def.params.push({ type: "text", params: [e.content[1]] }), (h.paramsKeyMap[e.content[0].toUpperCase()] = v - 1);
                                                            else if (e.type == o.CONDITION)
                                                                h.params.push({ type: "Block", accept: "boolean" }),
                                                                    h.def.params.push({ type: "true" == e.content[1].toLowerCase() ? "True" : "False" }),
                                                                    (h.paramsKeyMap[e.content[0].toUpperCase()] = v - 1);
                                                            else if (e.type == o.DROPDOWN) {
                                                                var n = {
                                                                    key: e.content[0],
                                                                    isDynamic: "true" == e.content[1],
                                                                    map:
                                                                        "true" != e.content[1]
                                                                            ? e.content
                                                                                  .slice(2)
                                                                                  .reduce(function (e, t, n, a) {
                                                                                      return e[e.length - 1] instanceof Array || e.push([]), e[e.length - 1].push(t), n % 2 == 1 && n != a.length - 1 && e.push([]), e;
                                                                                  }, [])
                                                                                  .map(function (e) {
                                                                                      var t = [e[0], e[1]],
                                                                                          n = t[0];
                                                                                      return (t[0] = t[1]), (t[1] = n), t;
                                                                                  })
                                                                            : [],
                                                                    menuName: "true" == e.content[1] ? e.content[2] : null,
                                                                };
                                                                if (n.isDynamic) {
                                                                    var a = null === (t = n.menuName) || void 0 === t ? void 0 : t.toLowerCase();
                                                                    h.params.push({ type: "DropdownDynamic", menuName: a, fontSize: 11, value: null, bgColor: l, arrowColor: "#ffffff" }),
                                                                        [
                                                                            "sprites",
                                                                            "allSprites",
                                                                            "spritesWithMouse",
                                                                            "spritesWithSelf",
                                                                            "textBoxWithSelf",
                                                                            "collision",
                                                                            "pictures",
                                                                            "messages",
                                                                            "variables",
                                                                            "lists",
                                                                            "tables",
                                                                            "scenes",
                                                                            "sounds",
                                                                            "clone",
                                                                            "objectSequence",
                                                                            "fonts",
                                                                        ].includes(a) || T.push(a),
                                                                        h.def.params.push(null);
                                                                } else h.params.push({ type: "Dropdown", options: n.map, fontSize: 11, value: n.map[0][1], bgColor: l, arrowColor: "#ffffff" }), h.def.params.push(null);
                                                                h.paramsKeyMap[n.key.toUpperCase()] = v - 1;
                                                            }
                                                        } else
                                                            1 == e.content.length &&
                                                                (e.type == o.PARAM
                                                                    ? (h.params.push({ type: "Block", accept: "string" }), h.def.params.push({ type: "text", params: [e.content[0]] }))
                                                                    : e.type == o.CONDITION &&
                                                                      (h.params.push({ type: "Block", accept: "boolean" }),
                                                                      h.def.params.push({ type: "true" == e.content[1].toLowerCase() ? "True" : "False" }),
                                                                      (h.paramsKeyMap[e.content[0].toUpperCase()] = v - 1)));
                                                    }),
                                                    u && y == r.DEFAULT && ((h.template += " %".concat(++v)), h.params.push({ type: "Indicator", img: u, size: 11 }), h.def.params.push(null)),
                                                    { base: h, neededDynamicDropdown: T }
                                                );
                                            default:
                                                return {
                                                    base: {
                                                        template: "%1",
                                                        color: "transparent",
                                                        outerLine: "transparent",
                                                        skeleton: "basic_text",
                                                        statements: [],
                                                        params: [{ type: "Text", text: "Error", color: "#ffffff", class: "bold", align: "center" }],
                                                        events: {},
                                                        def: { params: [null], type: a },
                                                        paramsKeyMap: {},
                                                        class: s,
                                                        func: i,
                                                    },
                                                    neededDynamicDropdown: [],
                                                };
                                        }
                                    },
                                },
                            ],
                            [
                                {
                                    key: "parse",
                                    value: function (e) {
                                        return new t().parse(e);
                                    },
                                },
                            ]
                        ),
                        t
                    );
                })();
                exports.Parser = p;
            },
            {},
        ],
        jDKg: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t &&
                            (n = n.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            r.push.apply(r, n);
                    }
                    return r;
                }
                function t(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var o = null != arguments[n] ? arguments[n] : {};
                        n % 2
                            ? e(Object(o), !0).forEach(function (e) {
                                  r(t, e, o[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                            : e(Object(o)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                              });
                    }
                    return t;
                }
                function r(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                }
                function n(e, t, r, n, o, i, a) {
                    try {
                        var c = e[i](a),
                            u = c.value;
                    } catch (s) {
                        return void r(s);
                    }
                    c.done ? t(u) : Promise.resolve(u).then(n, o);
                }
                function o(e) {
                    return function () {
                        var t = this,
                            r = arguments;
                        return new Promise(function (o, i) {
                            var a = e.apply(t, r);
                            function c(e) {
                                n(a, o, i, c, u, "next", e);
                            }
                            function u(e) {
                                n(a, o, i, c, u, "throw", e);
                            }
                            c(void 0);
                        });
                    };
                }
                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                function a(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                function c(e, t, r) {
                    return t && a(e.prototype, t), r && a(e, r), e;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Block = void 0);
                var u = require("./Action"),
                    s = require("./Parser"),
                    l = (function () {
                        function e(t) {
                            var r = t.template,
                                n = t.color,
                                o = void 0 === n ? "default" : n,
                                a = t.darkenColor,
                                c = void 0 === a ? "default" : a,
                                u = t.className,
                                s = void 0 === u ? "default" : u,
                                l = t.action,
                                f = t.dynamics,
                                p = void 0 === f ? {} : f,
                                d = t.indicator,
                                y = void 0 === d ? "default" : d;
                            i(this, e), (this.template = r), (this.color = o), (this.darkenColor = c), (this.action = l), (this.className = s), (this.dynamics = p), (this.indicator = y);
                        }
                        return (
                            c(e, [
                                {
                                    key: "export",
                                    value: function (e, r) {
                                        var n = this,
                                            i = e.parse(this.template),
                                            a = i.content.filter(function (e) {
                                                return "string" != typeof e;
                                            }),
                                            c = function (e) {
                                                return a.reduce(function (t, r) {
                                                    var n = r.content[0];
                                                    return (
                                                        r.type == s.SyntaxCode.CONDITION && (t[n] = e.getBooleanValue(n.toUpperCase(), e)),
                                                        r.type == s.SyntaxCode.DROPDOWN && (t[n] = e.getField(n.toUpperCase(), e)),
                                                        r.type == s.SyntaxCode.PARAM && (t[n] = e.getStringValue(n.toUpperCase(), e)),
                                                        t
                                                    );
                                                }, {});
                                            };
                                        return t(
                                            t(
                                                {},
                                                e.syntaxTreeToBlock(
                                                    {
                                                        name: r,
                                                        className: this.className,
                                                        color: this.color,
                                                        outline: this.darkenColor,
                                                        darkenColor: this.darkenColor,
                                                        action: (function () {
                                                            var e = o(
                                                                regeneratorRuntime.mark(function e(t, r) {
                                                                    return regeneratorRuntime.wrap(function (e) {
                                                                        for (;;)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    return (e.next = 2), u.executeAction(n.action, t, r, c(r));
                                                                                case 2:
                                                                                    return e.abrupt("return", e.sent);
                                                                                case 3:
                                                                                case "end":
                                                                                    return e.stop();
                                                                            }
                                                                    }, e);
                                                                })
                                                            );
                                                            return function (t, r) {
                                                                return e.apply(this, arguments);
                                                            };
                                                        })(),
                                                        indicator: "none" == this.indicator ? void 0 : this.indicator,
                                                        indicatorType: s.IndicatorType.DEFAULT,
                                                    },
                                                    i
                                                )
                                            ),
                                            {},
                                            {
                                                dynamics: Object.keys(this.dynamics).reduce(function (e, t) {
                                                    return (e[t.toLowerCase()] = n.dynamics[t]), e;
                                                }, {}),
                                            }
                                        );
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                exports.Block = l;
            },
            { "./Action": "LI4l", "./Parser": "E3oo" },
        ],
        u4Y9: [
            function (require, module, exports) {
                "use strict";
                var t;
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.IconFixer = void 0),
                    (function (t) {
                        (t.running = !1),
                            (t.run = function () {
                                Object.keys(Entry.Command).forEach(function (t) {
                                    Entry.Command[t].do &&
                                        (Entry.Command[t].do = new Proxy(Entry.Command[t].do, {
                                            apply: function (t, e, r) {
                                                var n = setInterval(function () {
                                                    Array.from(document.querySelectorAll("image"))
                                                        .filter(function (t) {
                                                            var e;
                                                            return null === (e = t.getAttribute("href")) || void 0 === e ? void 0 : e.startsWith("/lib/entry-js/images/https://");
                                                        })
                                                        .forEach(function (t) {
                                                            var e;
                                                            return t.setAttribute("href", (null === (e = t.getAttribute("href")) || void 0 === e ? void 0 : e.replace("/lib/entry-js/images/", "")) || "");
                                                        });
                                                }, 50);
                                                return (
                                                    setTimeout(function () {
                                                        clearInterval(n);
                                                    }, 1e3),
                                                    t.apply(e, r)
                                                );
                                            },
                                        }));
                                }),
                                    setInterval(function () {
                                        Array.from(document.querySelectorAll("image"))
                                            .filter(function (t) {
                                                var e;
                                                return null === (e = t.getAttribute("href")) || void 0 === e ? void 0 : e.startsWith("/lib/entry-js/images/https://");
                                            })
                                            .forEach(function (t) {
                                                var e;
                                                return t.setAttribute("href", (null === (e = t.getAttribute("href")) || void 0 === e ? void 0 : e.replace("/lib/entry-js/images/", "")) || "");
                                            });
                                    }, 100),
                                    (t.running = !0);
                            });
                    })((t = exports.IconFixer || (exports.IconFixer = {})));
            },
            {},
        ],
        GXxX: [
            function (require, module, exports) {
                "use strict";
                var n;
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.EventManager = void 0),
                    (function (n) {
                        (n.fire = function (e) {
                            if (!n.running) throw new Error("Not Running");
                            Entry.engine.fireEvent(e);
                        }),
                            (n.running = !1),
                            (n.run = function () {
                                if (n.running) throw new Error("Already Running");
                                Entry.container
                                    .getAllObjects()
                                    .map(function (n) {
                                        return Object.values(n.script._blockMap);
                                    })
                                    .flat()
                                    .forEach(function (n) {
                                        var e;
                                        if (Entry.block[n.type].event) {
                                            var t = n.thread.parent.object.script._eventMap;
                                            t[(e = Entry.block[n.type].event)] || (t[e] = []), t[Entry.block[n.type].event].includes(n) || t[Entry.block[n.type].event].push(n);
                                        }
                                    }),
                                    (n.running = !0);
                            });
                    })((n = exports.EventManager || (exports.EventManager = {})));
            },
            {},
        ],
        u6A7: [
            function (require, module, exports) {
                "use strict";
                function e(e, r, t, n, o, c, u) {
                    try {
                        var a = e[c](u),
                            i = a.value;
                    } catch (s) {
                        return void t(s);
                    }
                    a.done ? r(i) : Promise.resolve(i).then(n, o);
                }
                function r(r) {
                    return function () {
                        var t = this,
                            n = arguments;
                        return new Promise(function (o, c) {
                            var u = r.apply(t, n);
                            function a(r) {
                                e(u, o, c, a, i, "next", r);
                            }
                            function i(r) {
                                e(u, o, c, a, i, "throw", r);
                            }
                            a(void 0);
                        });
                    };
                }
                var t;
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.ProjectLoader = void 0),
                    (function (e) {
                        (e.running = !1),
                            (e.run = r(
                                regeneratorRuntime.mark(function e() {
                                    var r, t;
                                    return regeneratorRuntime.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (r = Entry.exportProject()), (e.next = 3), fetch("https://playentry.org/api/project/".concat(Entry.projectId));
                                                case 3:
                                                    return (e.next = 5), e.sent.json();
                                                case 5:
                                                    (t = e.sent),
                                                        Entry.clearProject(),
                                                        Entry.loadProject(
                                                            Object.keys(r).reduce(function (e, r) {
                                                                return (e[r] = t[r]), e;
                                                            }, {})
                                                        );
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            ));
                    })((t = exports.ProjectLoader || (exports.ProjectLoader = {})));
            },
            {},
        ],
        BF1T: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.default = [
                        {
                            category: "start",
                            blocks: [
                                "when_run_button_click",
                                "when_some_key_pressed",
                                "mouse_clicked",
                                "mouse_click_cancled",
                                "when_object_click",
                                "when_object_click_canceled",
                                "when_message_cast",
                                "message_cast",
                                "message_cast_wait",
                                "when_scene_start",
                                "start_scene",
                                "start_neighbor_scene",
                                "check_object_property",
                                "check_block_execution",
                                "switch_scope",
                                "is_answer_submited",
                                "check_lecture_goal",
                                "check_variable_by_name",
                                "show_prompt",
                                "check_goal_success",
                                "positive_number",
                                "negative_number",
                                "wildcard_string",
                                "wildcard_boolean",
                                "register_score",
                            ],
                        },
                        {
                            category: "flow",
                            blocks: [
                                "wait_second",
                                "repeat_basic",
                                "repeat_inf",
                                "repeat_while_true",
                                "stop_repeat",
                                "_if",
                                "if_else",
                                "wait_until_true",
                                "stop_object",
                                "restart_project",
                                "when_clone_start",
                                "create_clone",
                                "delete_clone",
                                "remove_all_clones",
                            ],
                        },
                        {
                            category: "moving",
                            blocks: [
                                "move_direction",
                                "bounce_wall",
                                "move_x",
                                "move_y",
                                "move_xy_time",
                                "locate_x",
                                "locate_y",
                                "locate_xy",
                                "locate_xy_time",
                                "locate",
                                "locate_object_time",
                                "rotate_relative",
                                "direction_relative",
                                "rotate_by_time",
                                "direction_relative_duration",
                                "rotate_absolute",
                                "direction_absolute",
                                "see_angle_object",
                                "move_to_angle",
                            ],
                        },
                        {
                            category: "looks",
                            blocks: [
                                "show",
                                "hide",
                                "dialog_time",
                                "dialog",
                                "remove_dialog",
                                "change_to_some_shape",
                                "change_to_next_shape",
                                "add_effect_amount",
                                "change_effect_amount",
                                "erase_all_effects",
                                "change_scale_size",
                                "set_scale_size",
                                "flip_x",
                                "flip_y",
                                "change_object_index",
                            ],
                        },
                        {
                            category: "brush",
                            blocks: ["brush_stamp", "start_drawing", "stop_drawing", "set_color", "set_random_color", "change_thickness", "set_thickness", "change_brush_transparency", "set_brush_tranparency", "brush_erase_all"],
                        },
                        { category: "text", blocks: ["text_read", "text_write", "text_append", "text_prepend", "text_flush"] },
                        {
                            category: "sound",
                            blocks: [
                                "sound_something_with_block",
                                "sound_something_second_with_block",
                                "sound_from_to",
                                "sound_something_wait_with_block",
                                "sound_something_second_wait_with_block",
                                "sound_from_to_and_wait",
                                "sound_volume_change",
                                "sound_volume_set",
                                "sound_silent_all",
                            ],
                        },
                        { category: "judgement", blocks: ["is_clicked", "is_press_some_key", "reach_something", "boolean_basic_operator", "boolean_and_or", "boolean_not"] },
                        {
                            category: "calc",
                            blocks: [
                                "calc_basic",
                                "calc_rand",
                                "coordinate_mouse",
                                "coordinate_object",
                                "get_sound_volume",
                                "quotient_and_mod",
                                "calc_operation",
                                "get_project_timer_value",
                                "choose_project_timer_action",
                                "set_visible_project_timer",
                                "get_date",
                                "distance_something",
                                "get_sound_duration",
                                "get_user_name",
                                "length_of_string",
                                "combine_something",
                                "char_at",
                                "substring",
                                "index_of_string",
                                "replace_string",
                                "change_string_case",
                            ],
                        },
                        {
                            category: "variable",
                            blocks: [
                                "variableAddButton",
                                "listAddButton",
                                "ask_and_wait",
                                "get_canvas_input_value",
                                "set_visible_answer",
                                "get_variable",
                                "change_variable",
                                "set_variable",
                                "show_variable",
                                "hide_variable",
                                "value_of_index_from_list",
                                "add_value_to_list",
                                "remove_value_from_list",
                                "insert_value_to_list",
                                "change_value_list_index",
                                "length_of_list",
                                "is_included_in_list",
                                "show_list",
                                "hide_list",
                            ],
                        },
                        { category: "func", blocks: ["functionAddButton"] },
                        {
                            category: "analysis",
                            blocks: [
                                "analizyDataAddButton",
                                "append_row_to_table",
                                "insert_row_to_table",
                                "delete_row_from_table",
                                "set_value_from_table",
                                "get_table_count",
                                "get_value_from_table",
                                "calc_values_from_table",
                                "open_table_chart",
                                "close_table_chart",
                            ],
                        },
                        {
                            category: "ai_utilize",
                            blocks: [
                                "aiUtilizeBlockAddButton",
                                "aiUtilizeModelTrainButton",
                                "audio_title",
                                "check_microphone",
                                "speech_to_text_convert",
                                "speech_to_text_get_value",
                                "get_microphone_volume",
                                "tts_title",
                                "read_text",
                                "read_text_wait_with_block",
                                "set_tts_property",
                                "translate_title",
                                "get_translated_string",
                                "check_language",
                                "video_title",
                                "video_draw_webcam",
                                "video_check_webcam",
                                "video_flip_camera",
                                "video_set_camera_opacity_option",
                                "video_motion_value",
                                "video_toggle_model",
                                "video_is_model_loaded",
                                "video_number_detect",
                                "video_toggle_ind",
                                "video_body_part_coord",
                                "video_face_part_coord",
                                "video_detected_face_info",
                            ],
                        },
                        {
                            category: "expansion",
                            blocks: [
                                "expansionBlockAddButton",
                                "weather_title",
                                "check_weather",
                                "check_finedust",
                                "get_weather_data",
                                "get_current_weather_data",
                                "get_today_temperature",
                                "check_city_weather",
                                "check_city_finedust",
                                "get_city_weather_data",
                                "get_current_city_weather_data",
                                "get_today_city_temperature",
                                "festival_title",
                                "count_festival",
                                "get_festival_info",
                                "behaviorConductDisaster_title",
                                "count_disaster_behavior",
                                "get_disaster_behavior",
                                "behaviorConductLifeSafety_title",
                                "count_lifeSafety_behavior",
                                "get_lifeSafety_behavior",
                            ],
                        },
                        {
                            category: "arduino",
                            blocks: ["arduino_reconnect", "arduino_open", "arduino_cloud_pc_open", "arduino_connect", "arduino_download_connector", "download_guide", "arduino_download_source", "arduino_noti"].concat(
                                EntryStatic.DynamicHardwareBlocks
                            ),
                        },
                    ]);
            },
            {},
        ],
        qZdI: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    return o(e) || r(e) || t(e) || n();
                }
                function n() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                function t(e, n) {
                    if (e) {
                        if ("string" == typeof e) return a(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, n) : void 0;
                    }
                }
                function r(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }
                function o(e) {
                    if (Array.isArray(e)) return a(e);
                }
                function a(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                function i(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
                }
                function c(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                function s(e, n, t) {
                    return n && c(e.prototype, n), t && c(e, t), e;
                }
                var l =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Extension = exports.neededDynamicDropdowns = exports.extensions = void 0);
                var d = require("./Parser"),
                    u = require("./IconFixer"),
                    y = require("./EventManager"),
                    b = require("./ProjectLoader"),
                    p = l(require("./Blocks"));
                (EntryStatic._getAllBlocks = EntryStatic.getAllBlocks),
                    (EntryStatic.getAllBlocks = function () {
                        var e = JSON.parse(JSON.stringify(p.default));
                        return (
                            Array.from(exports.extensions).forEach(function (n) {
                                e.push({ category: n.id, blocks: Object.keys(n.blocks) });
                            }),
                            e
                        );
                    }),
                    (exports.extensions = new Set()),
                    (exports.neededDynamicDropdowns = {});
                var g = (function () {
                    function n(e) {
                        var t = e.displayName,
                            r = void 0 === t ? "????????????" : t,
                            o = e.blocks,
                            a = void 0 === o ? {} : o,
                            c = e.enabledIcon,
                            s = void 0 === c ? "https://playentry.org/lib/entry-js/images/hardware_on.svg" : c,
                            l = e.disabledIcon,
                            d = void 0 === l ? "https://playentry.org/lib/entry-js/images/hardware.svg" : l,
                            u = e.enabledColor,
                            y = void 0 === u ? "#00b6b1" : u,
                            b = e.disabledColor,
                            p = void 0 === b ? "transparent" : b,
                            g = e.defaultColor,
                            f = void 0 === g ? "#00b6b1" : g,
                            v = e.defaultDarkenColor,
                            h = void 0 === v ? "#008380" : v,
                            m = e.defaultIndicator,
                            k = void 0 === m ? "https://playentry.org/lib/entry-js/images/block_icon/hardware_icon.svg" : m;
                        i(this, n),
                            (this.disabled = !0),
                            (this.displayName = r),
                            (this.blocks = a),
                            (this.enabledIcon = s),
                            (this.disabledIcon = d),
                            (this.enabledColor = y),
                            (this.disabledColor = p),
                            (this.defaultColor = f),
                            (this.defaultDarkenColor = h),
                            (this.defaultIndicator = k),
                            (this.id = Entry.Utils.generateId());
                    }
                    return (
                        s(
                            n,
                            [
                                {
                                    key: "enable",
                                    value: function () {
                                        if (!this.disabled) throw new Error("Already Enabled");
                                        exports.extensions.add(this), this.apply(), (this.disabled = !1);
                                    },
                                },
                                {
                                    key: "disable",
                                    value: function () {
                                        if (this.disabled) throw new Error("Disabled Extension");
                                        exports.extensions.has(this) && exports.extensions.delete(this), (this.disabled = !0);
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var n,
                                            t = this,
                                            r = new d.Parser();
                                        if (
                                            (Object.keys(this.blocks)
                                                .map(function (e) {
                                                    var n = t.blocks[e];
                                                    return (
                                                        "default" == n.color && (n.color = t.defaultColor),
                                                        "default" == n.darkenColor && (n.darkenColor = t.defaultDarkenColor),
                                                        "default" == n.indicator && (n.indicator = t.defaultIndicator),
                                                        { name: e, block: n.export(r, e) }
                                                    );
                                                })
                                                .forEach(function (e) {
                                                    e.block.neededDynamicDropdown.forEach(function (n) {
                                                        n in exports.neededDynamicDropdowns ||
                                                            (exports.neededDynamicDropdowns[n] = e.block.dynamics[n]
                                                                ? function () {
                                                                      var t = e.block.dynamics[n]();
                                                                      return Object.keys(t).map(function (e) {
                                                                          return [t[e], e];
                                                                      });
                                                                  }
                                                                : function () {
                                                                      return [["????????????", "null"]];
                                                                  });
                                                    }),
                                                        (Entry.block[e.name] = e.block.base);
                                                }),
                                            Entry.container.getDropdownList.__isProxy ||
                                                (Entry.container.getDropdownList = new Proxy(Entry.container.getDropdownList, {
                                                    apply: function (e, n, t) {
                                                        return t[0] in exports.neededDynamicDropdowns ? exports.neededDynamicDropdowns[t[0]].call(n) : e.apply(n, t);
                                                    },
                                                    get: function (e, n, t) {
                                                        return "__isProxy" == n || Reflect.get(e, n, t);
                                                    },
                                                })),
                                            Entry.getMainWS())
                                        ) {
                                            var o, a;
                                            null === (n = document.querySelector("#EntLib_Category_".concat(this.id))) || void 0 === n || n.remove();
                                            var i = document.createElement("style");
                                            (i.innerHTML = "\n                #entryCategory"
                                                .concat(this.id, " {\n                        background-repeat: no-repeat !important;\n                        background-color: ")
                                                .concat(this.disabledColor, ";\n                        background-image: url(")
                                                .concat(this.disabledIcon, ");\n                        border-color: ")
                                                .concat(this.disabledColor, ";\n                }\n                .entrySelectedCategory#entryCategory")
                                                .concat(this.id, " {\n                        background-repeat: no-repeat !important;\n                        background-color: ")
                                                .concat(this.enabledColor, " !important;\n                        background-image: url(")
                                                .concat(this.enabledIcon, ") !important;\n                        border-color: ")
                                                .concat(this.enabledColor, " !important;\n                }\n            ")
                                                .replace(/    /gi, "")
                                                .replace(/\n/g, "")),
                                                document.head.appendChild(i),
                                                Entry.playground.mainWorkspace.blockMenu._clearCategory(),
                                                Entry.playground.mainWorkspace.blockMenu._generateCategoryView(
                                                    (o = [
                                                        { category: "start", visible: !0 },
                                                        { category: "flow", visible: !0 },
                                                        { category: "moving", visible: !0 },
                                                        { category: "looks", visible: !0 },
                                                        { category: "brush", visible: !0 },
                                                        { category: "text", visible: !0 },
                                                        { category: "sound", visible: !0 },
                                                        { category: "judgement", visible: !0 },
                                                        { category: "calc", visible: !0 },
                                                        { category: "variable", visible: !0 },
                                                        { category: "func", visible: !0 },
                                                        { category: "analysis", visible: !0 },
                                                        { category: "ai_utilize", visible: !0 },
                                                        { category: "expansion", visible: !0 },
                                                    ]).concat
                                                        .apply(
                                                            o,
                                                            e(
                                                                e(exports.extensions).map(function (e) {
                                                                    return { category: e.id, visible: !0 };
                                                                })
                                                            )
                                                        )
                                                        .concat({ category: "arduino", visible: !0 })
                                                ),
                                                document.querySelectorAll(".entryCategoryElementWorkspace").forEach(function (e) {
                                                    "entryCategorytext" != e.getAttribute("id") && e.setAttribute("class", "entryCategoryElementWorkspace");
                                                }),
                                                (Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks()),
                                                Entry.playground.blockMenu._generateCategoryCodes(
                                                    (a = ["start", "flow", "moving", "looks", "brush", "text", "sound", "judgement", "calc", "variable", "func", "analysis", "ai_utilize", "expansion"]).concat
                                                        .apply(
                                                            a,
                                                            e(
                                                                e(exports.extensions).map(function (e) {
                                                                    return e.id;
                                                                })
                                                            )
                                                        )
                                                        .concat("arduino")
                                                ),
                                                exports.extensions.forEach(function (e) {
                                                    document.querySelector("#entryCategory".concat(e.id)).innerText = e.displayName;
                                                });
                                        }
                                    },
                                },
                            ],
                            [
                                {
                                    key: "allExtensionsLoaded",
                                    value: function () {
                                        Entry.getMainWS()
                                            ? Entry.projectId
                                                ? b.ProjectLoader.running ||
                                                  b.ProjectLoader.run().then(function () {
                                                      u.IconFixer.running || u.IconFixer.run(), y.EventManager.running || y.EventManager.run();
                                                  })
                                                : (u.IconFixer.running || u.IconFixer.run(), y.EventManager.running || y.EventManager.run())
                                            : y.EventManager.running || y.EventManager.run();
                                    },
                                },
                            ]
                        ),
                        n
                    );
                })();
                exports.Extension = g;
            },
            { "./Parser": "E3oo", "./IconFixer": "u4Y9", "./EventManager": "GXxX", "./ProjectLoader": "u6A7", "./Blocks": "BF1T" },
        ],
        ZF1Z: [
            function (require, module, exports) {
                "use strict";
                function t(e) {
                    return (t =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              })(e);
                }
                function e(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e &&
                            (n = n.filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })),
                            r.push.apply(r, n);
                    }
                    return r;
                }
                function r(t) {
                    for (var r = 1; r < arguments.length; r++) {
                        var o = null != arguments[r] ? arguments[r] : {};
                        r % 2
                            ? e(Object(o), !0).forEach(function (e) {
                                  n(t, e, o[e]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                            : e(Object(o)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                              });
                    }
                    return t;
                }
                function n(t, e, r) {
                    return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
                }
                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function c(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                function i(t, e, r) {
                    return e && c(t.prototype, e), r && c(t, r), t;
                }
                function u(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && a(t, e);
                }
                function a(t, e) {
                    return (a =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        })(t, e);
                }
                function f(t) {
                    var e = p();
                    return function () {
                        var r,
                            n = y(t);
                        if (e) {
                            var o = y(this).constructor;
                            r = Reflect.construct(n, arguments, o);
                        } else r = n.apply(this, arguments);
                        return l(this, r);
                    };
                }
                function l(e, r) {
                    return !r || ("object" !== t(r) && "function" != typeof r) ? s(e) : r;
                }
                function s(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                function y(t) {
                    return (y = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.EventBlock = void 0);
                var b = require("./Block"),
                    d = require("./Parser"),
                    v = (function (t) {
                        u(n, b.Block);
                        var e = f(n);
                        function n(t) {
                            var r,
                                c = t.template,
                                i = t.color,
                                u = void 0 === i ? "default" : i,
                                a = t.darkenColor,
                                f = void 0 === a ? "default" : a,
                                l = t.className,
                                s = void 0 === l ? "default" : l,
                                p = t.dynamics,
                                y = void 0 === p ? {} : p,
                                b = t.indicator,
                                d = void 0 === b ? "default" : b,
                                v = t.eventName;
                            return o(this, n), ((r = e.call(this, { template: c, color: u, darkenColor: f, className: s, dynamics: y, indicator: d, action: function () {} })).eventName = v), r;
                        }
                        return (
                            i(n, [
                                {
                                    key: "export",
                                    value: function (t, e) {
                                        var n = this,
                                            o = t.parse(this.template);
                                        o.content.filter(function (t) {
                                            return "string" != typeof t;
                                        });
                                        return r(
                                            r(
                                                {},
                                                t.syntaxTreeToBlock(
                                                    {
                                                        name: e,
                                                        className: this.className,
                                                        color: this.color,
                                                        outline: this.darkenColor,
                                                        darkenColor: this.darkenColor,
                                                        action: function () {},
                                                        indicator: "none" == this.indicator ? void 0 : this.indicator,
                                                        indicatorType: d.IndicatorType.EVENT,
                                                        event: this.eventName,
                                                    },
                                                    o
                                                )
                                            ),
                                            {},
                                            {
                                                dynamics: Object.keys(this.dynamics).reduce(function (t, e) {
                                                    return (t[e.toLowerCase()] = n.dynamics[e]), t;
                                                }, {}),
                                            }
                                        );
                                    },
                                },
                            ]),
                            n
                        );
                    })();
                exports.EventBlock = v;
            },
            { "./Block": "jDKg", "./Parser": "E3oo" },
        ],
        i9TJ: [
            function (require, module, exports) {
                "use strict";
                var e =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, r, t, o) {
                                  void 0 === o && (o = t),
                                      Object.defineProperty(e, o, {
                                          enumerable: !0,
                                          get: function () {
                                              return r[t];
                                          },
                                      });
                              }
                            : function (e, r, t, o) {
                                  void 0 === o && (o = t), (e[o] = r[t]);
                              }),
                    r =
                        (this && this.__exportStar) ||
                        function (r, t) {
                            for (var o in r) "default" === o || Object.prototype.hasOwnProperty.call(t, o) || e(t, r, o);
                        };
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    r(require("./Block"), exports),
                    r(require("./Parser"), exports),
                    r(require("./Extension"), exports),
                    r(require("./Action"), exports),
                    r(require("./IconFixer"), exports),
                    r(require("./EventBlock"), exports),
                    r(require("./EventManager"), exports);
                window.EntLib = exports;
            },
            { "./Block": "jDKg", "./Parser": "E3oo", "./Extension": "qZdI", "./Action": "LI4l", "./IconFixer": "u4Y9", "./EventBlock": "ZF1Z", "./EventManager": "GXxX" },
        ],
    },
    {},
    ["i9TJ"],
    null
);
//# sourceMappingURL=/EntLib.js.map
