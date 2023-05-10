!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("vega"))
    : "function" == typeof define && define.amd
    ? define(["exports", "vega"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).vegaLite =
          {}),
        e.vega
      );
})(this, function (e, t) {
  "use strict";
  var n = "5.2.0";
  Array.prototype.flat ||
    Object.defineProperty(Array.prototype, "flat", {
      configurable: !0,
      value: function e() {
        var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
        return t
          ? Array.prototype.reduce.call(
              this,
              function (n, i) {
                return (
                  Array.isArray(i)
                    ? n.push.apply(n, e.call(i, t - 1))
                    : n.push(i),
                  n
                );
              },
              []
            )
          : Array.prototype.slice.call(this);
      },
      writable: !0,
    }),
    Array.prototype.flatMap ||
      Object.defineProperty(Array.prototype, "flatMap", {
        configurable: !0,
        value: function (e) {
          return Array.prototype.map.apply(this, arguments).flat();
        },
        writable: !0,
      });
  var i = { exports: {} };
  !(function (e) {
    var t = (function () {
      function e(e, t) {
        return null != t && e instanceof t;
      }
      var t, n, i;
      try {
        t = Map;
      } catch (e) {
        t = function () {};
      }
      try {
        n = Set;
      } catch (e) {
        n = function () {};
      }
      try {
        i = Promise;
      } catch (e) {
        i = function () {};
      }
      function o(r, s, c, l, u) {
        "object" == typeof s &&
          ((c = s.depth),
          (l = s.prototype),
          (u = s.includeNonEnumerable),
          (s = s.circular));
        var d = [],
          f = [],
          p = "undefined" != typeof Buffer;
        return (
          void 0 === s && (s = !0),
          void 0 === c && (c = 1 / 0),
          (function r(c, m) {
            if (null === c) return null;
            if (0 === m) return c;
            var g, h;
            if ("object" != typeof c) return c;
            if (e(c, t)) g = new t();
            else if (e(c, n)) g = new n();
            else if (e(c, i))
              g = new i(function (e, t) {
                c.then(
                  function (t) {
                    e(r(t, m - 1));
                  },
                  function (e) {
                    t(r(e, m - 1));
                  }
                );
              });
            else if (o.__isArray(c)) g = [];
            else if (o.__isRegExp(c))
              (g = new RegExp(c.source, a(c))),
                c.lastIndex && (g.lastIndex = c.lastIndex);
            else if (o.__isDate(c)) g = new Date(c.getTime());
            else {
              if (p && Buffer.isBuffer(c))
                return (
                  (g = Buffer.allocUnsafe
                    ? Buffer.allocUnsafe(c.length)
                    : new Buffer(c.length)),
                  c.copy(g),
                  g
                );
              e(c, Error)
                ? (g = Object.create(c))
                : void 0 === l
                ? ((h = Object.getPrototypeOf(c)), (g = Object.create(h)))
                : ((g = Object.create(l)), (h = l));
            }
            if (s) {
              var v = d.indexOf(c);
              if (-1 != v) return f[v];
              d.push(c), f.push(g);
            }
            for (var y in (e(c, t) &&
              c.forEach(function (e, t) {
                var n = r(t, m - 1),
                  i = r(e, m - 1);
                g.set(n, i);
              }),
            e(c, n) &&
              c.forEach(function (e) {
                var t = r(e, m - 1);
                g.add(t);
              }),
            c)) {
              var b;
              h && (b = Object.getOwnPropertyDescriptor(h, y)),
                (b && null == b.set) || (g[y] = r(c[y], m - 1));
            }
            if (Object.getOwnPropertySymbols) {
              var x = Object.getOwnPropertySymbols(c);
              for (y = 0; y < x.length; y++) {
                var w = x[y];
                (!(S = Object.getOwnPropertyDescriptor(c, w)) ||
                  S.enumerable ||
                  u) &&
                  ((g[w] = r(c[w], m - 1)),
                  S.enumerable ||
                    Object.defineProperty(g, w, { enumerable: !1 }));
              }
            }
            if (u) {
              var k = Object.getOwnPropertyNames(c);
              for (y = 0; y < k.length; y++) {
                var S,
                  D = k[y];
                ((S = Object.getOwnPropertyDescriptor(c, D)) && S.enumerable) ||
                  ((g[D] = r(c[D], m - 1)),
                  Object.defineProperty(g, D, { enumerable: !1 }));
              }
            }
            return g;
          })(r, c)
        );
      }
      function r(e) {
        return Object.prototype.toString.call(e);
      }
      function a(e) {
        var t = "";
        return (
          e.global && (t += "g"),
          e.ignoreCase && (t += "i"),
          e.multiline && (t += "m"),
          t
        );
      }
      return (
        (o.clonePrototype = function (e) {
          if (null === e) return null;
          var t = function () {};
          return (t.prototype = e), new t();
        }),
        (o.__objToStr = r),
        (o.__isDate = function (e) {
          return "object" == typeof e && "[object Date]" === r(e);
        }),
        (o.__isArray = function (e) {
          return "object" == typeof e && "[object Array]" === r(e);
        }),
        (o.__isRegExp = function (e) {
          return "object" == typeof e && "[object RegExp]" === r(e);
        }),
        (o.__getRegExpFlags = a),
        o
      );
    })();
    e.exports && (e.exports = t);
  })(i);
  var o = function (e, t) {
    t || (t = {}), "function" == typeof t && (t = { cmp: t });
    var n,
      i = "boolean" == typeof t.cycles && t.cycles,
      o =
        t.cmp &&
        ((n = t.cmp),
        function (e) {
          return function (t, i) {
            var o = { key: t, value: e[t] },
              r = { key: i, value: e[i] };
            return n(o, r);
          };
        }),
      r = [];
    return (function e(t) {
      if (
        (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()),
        void 0 !== t)
      ) {
        if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
        if ("object" != typeof t) return JSON.stringify(t);
        var n, a;
        if (Array.isArray(t)) {
          for (a = "[", n = 0; n < t.length; n++)
            n && (a += ","), (a += e(t[n]) || "null");
          return a + "]";
        }
        if (null === t) return "null";
        if (-1 !== r.indexOf(t)) {
          if (i) return JSON.stringify("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        }
        var s = r.push(t) - 1,
          c = Object.keys(t).sort(o && o(t));
        for (a = "", n = 0; n < c.length; n++) {
          var l = c[n],
            u = e(t[l]);
          u && (a && (a += ","), (a += JSON.stringify(l) + ":" + u));
        }
        return r.splice(s, 1), "{" + a + "}";
      }
    })(e);
  };
  function r(e) {
    return !!e.or;
  }
  function a(e) {
    return !!e.and;
  }
  function s(e) {
    return !!e.not;
  }
  function c(e, t) {
    if (s(e)) c(e.not, t);
    else if (a(e)) for (const n of e.and) c(n, t);
    else if (r(e)) for (const n of e.or) c(n, t);
    else t(e);
  }
  function l(e, t) {
    return s(e)
      ? { not: l(e.not, t) }
      : a(e)
      ? { and: e.and.map((e) => l(e, t)) }
      : r(e)
      ? { or: e.or.map((e) => l(e, t)) }
      : t(e);
  }
  const u = function e(t, n) {
      if (t === n) return !0;
      if (t && n && "object" == typeof t && "object" == typeof n) {
        if (t.constructor !== n.constructor) return !1;
        var i, o, r;
        if (Array.isArray(t)) {
          if ((i = t.length) != n.length) return !1;
          for (o = i; 0 != o--; ) if (!e(t[o], n[o])) return !1;
          return !0;
        }
        if (t.constructor === RegExp)
          return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf)
          return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString)
          return t.toString() === n.toString();
        if ((i = (r = Object.keys(t)).length) !== Object.keys(n).length)
          return !1;
        for (o = i; 0 != o--; )
          if (!Object.prototype.hasOwnProperty.call(n, r[o])) return !1;
        for (o = i; 0 != o--; ) {
          var a = r[o];
          if (!e(t[a], n[a])) return !1;
        }
        return !0;
      }
      return t != t && n != n;
    },
    d = i.exports;
  function f(e) {
    throw new Error(e);
  }
  function p(e, n) {
    const i = {};
    for (const o of n) t.hasOwnProperty(e, o) && (i[o] = e[o]);
    return i;
  }
  function m(e, t) {
    const n = { ...e };
    for (const e of t) delete n[e];
    return n;
  }
  Set.prototype.toJSON = function () {
    return "Set(".concat([...this].map((e) => o(e)).join(","), ")");
  };
  const g = o;
  function h(e) {
    if (t.isNumber(e)) return e;
    const n = t.isString(e) ? e : o(e);
    if (n.length < 250) return n;
    let i = 0;
    for (let e = 0; e < n.length; e++) {
      (i = (i << 5) - i + n.charCodeAt(e)), (i &= i);
    }
    return i;
  }
  function v(e) {
    return !1 === e || null === e;
  }
  function y(e, t) {
    return e.includes(t);
  }
  function b(e, t) {
    let n = 0;
    for (const [i, o] of e.entries()) if (t(o, i, n++)) return !0;
    return !1;
  }
  function x(e, t) {
    let n = 0;
    for (const [i, o] of e.entries()) if (!t(o, i, n++)) return !1;
    return !0;
  }
  function w(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    )
      n[i - 1] = arguments[i];
    for (const t of n) k(e, null != t ? t : {});
    return e;
  }
  function k(e, n) {
    for (const i of C(n)) t.writeConfig(e, i, n[i], !0);
  }
  function S(e, t) {
    const n = [],
      i = {};
    let o;
    for (const r of e) (o = t(r)), o in i || ((i[o] = 1), n.push(r));
    return n;
  }
  function D(e, t) {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  }
  function F(e, t) {
    for (const n of e) if (t.has(n)) return !0;
    return !1;
  }
  function O(e) {
    const n = new Set();
    for (const i of e) {
      const e = t
          .splitAccessPath(i)
          .map((e, t) => (0 === t ? e : "[".concat(e, "]"))),
        o = e.map((t, n) => e.slice(0, n + 1).join(""));
      for (const e of o) n.add(e);
    }
    return n;
  }
  function _(e, t) {
    return void 0 === e || void 0 === t || F(O(e), O(t));
  }
  function z(e) {
    return 0 === C(e).length;
  }
  const C = Object.keys,
    P = Object.values,
    A = Object.entries;
  function N(e) {
    return !0 === e || !1 === e;
  }
  function j(e) {
    const t = e.replace(/\W/g, "_");
    return (e.match(/^\d+/) ? "_" : "") + t;
  }
  function E(e, t) {
    return s(e)
      ? "!(".concat(E(e.not, t), ")")
      : a(e)
      ? "(".concat(e.and.map((e) => E(e, t)).join(") && ("), ")")
      : r(e)
      ? "(".concat(e.or.map((e) => E(e, t)).join(") || ("), ")")
      : t(e);
  }
  function M(e, t) {
    if (0 === t.length) return !0;
    const n = t.shift();
    return n in e && M(e[n], t) && delete e[n], z(e);
  }
  function T(e) {
    return e.charAt(0).toUpperCase() + e.substr(1);
  }
  function L(e) {
    let n =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "datum";
    const i = t.splitAccessPath(e),
      o = [];
    for (let e = 1; e <= i.length; e++) {
      const r = "[".concat(i.slice(0, e).map(t.stringValue).join("]["), "]");
      o.push("".concat(n).concat(r));
    }
    return o.join(" && ");
  }
  function q(e) {
    let n =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "datum";
    return ""
      .concat(n, "[")
      .concat(t.stringValue(t.splitAccessPath(e).join(".")), "]");
  }
  function W(e) {
    return e.replace(/(\[|\]|\.|'|")/g, "\\$1");
  }
  function R(e) {
    return "".concat(t.splitAccessPath(e).map(W).join("\\."));
  }
  function U(e, t, n) {
    return e.replace(
      new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
      n
    );
  }
  function B(e) {
    return "".concat(t.splitAccessPath(e).join("."));
  }
  function H(e) {
    return e ? t.splitAccessPath(e).length : 0;
  }
  function V() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    for (const e of t) if (void 0 !== e) return e;
  }
  let I = 42;
  function G(e) {
    const t = ++I;
    return e ? String(e) + t : t;
  }
  function Y(e) {
    return X(e) ? e : "__".concat(e);
  }
  function X(e) {
    return e.startsWith("__");
  }
  function J(e) {
    if (void 0 !== e) return ((e % 360) + 360) % 360;
  }
  function Q(e) {
    return !!t.isNumber(e) || (!isNaN(e) && !isNaN(parseFloat(e)));
  }
  const $ = "row",
    K = "column",
    Z = "facet",
    ee = "x",
    te = "y",
    ne = "x2",
    ie = "y2",
    oe = "xOffset",
    re = "yOffset",
    ae = "radius",
    se = "radius2",
    ce = "theta",
    le = "theta2",
    ue = "latitude",
    de = "longitude",
    fe = "latitude2",
    pe = "longitude2",
    me = "color",
    ge = "fill",
    he = "stroke",
    ve = "shape",
    ye = "size",
    be = "angle",
    xe = "opacity",
    we = "fillOpacity",
    ke = "strokeOpacity",
    Se = "strokeWidth",
    De = "strokeDash",
    Fe = "text",
    Oe = "order",
    _e = "detail",
    ze = "key",
    Ce = "tooltip",
    Pe = "href",
    Ae = "url",
    Ne = "description",
    je = { theta: 1, theta2: 1, radius: 1, radius2: 1 };
  function Ee(e) {
    return e in je;
  }
  const Me = { longitude: 1, longitude2: 1, latitude: 1, latitude2: 1 };
  const Te = C(Me),
    Le = {
      x: 1,
      y: 1,
      x2: 1,
      y2: 1,
      ...je,
      ...Me,
      xOffset: 1,
      yOffset: 1,
      color: 1,
      fill: 1,
      stroke: 1,
      opacity: 1,
      fillOpacity: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
      strokeDash: 1,
      size: 1,
      angle: 1,
      shape: 1,
      order: 1,
      text: 1,
      detail: 1,
      key: 1,
      tooltip: 1,
      href: 1,
      url: 1,
      description: 1,
    };
  function qe(e) {
    return e === me || e === ge || e === he;
  }
  const We = { row: 1, column: 1, facet: 1 },
    Re = C(We),
    Ue = { ...Le, ...We },
    Be = C(Ue),
    { order: He, detail: Ve, tooltip: Ie, ...Ge } = Ue,
    { row: Ye, column: Xe, facet: Je, ...Qe } = Ge;
  function $e(e) {
    return !!Ue[e];
  }
  const Ke = [ne, ie, fe, pe, le, se];
  function Ze(e) {
    return et(e) !== e;
  }
  function et(e) {
    switch (e) {
      case ne:
        return ee;
      case ie:
        return te;
      case fe:
        return ue;
      case pe:
        return de;
      case le:
        return ce;
      case se:
        return ae;
    }
    return e;
  }
  function tt(e) {
    if (Ee(e))
      switch (e) {
        case ce:
          return "startAngle";
        case le:
          return "endAngle";
        case ae:
          return "outerRadius";
        case se:
          return "innerRadius";
      }
    return e;
  }
  function nt(e) {
    switch (e) {
      case ee:
        return ne;
      case te:
        return ie;
      case ue:
        return fe;
      case de:
        return pe;
      case ce:
        return le;
      case ae:
        return se;
    }
  }
  function it(e) {
    switch (e) {
      case ee:
      case ne:
        return "width";
      case te:
      case ie:
        return "height";
    }
  }
  function ot(e) {
    switch (e) {
      case ee:
        return "xOffset";
      case te:
        return "yOffset";
    }
  }
  function rt(e) {
    switch (e) {
      case "xOffset":
        return "x";
      case "yOffset":
        return "y";
    }
  }
  const at = C(Le),
    {
      x: st,
      y: ct,
      x2: lt,
      y2: ut,
      xOffset: dt,
      yOffset: ft,
      latitude: pt,
      longitude: mt,
      latitude2: gt,
      longitude2: ht,
      theta: vt,
      theta2: yt,
      radius: bt,
      radius2: xt,
      ...wt
    } = Le,
    kt = C(wt),
    St = { x: 1, y: 1 },
    Dt = C(St);
  function Ft(e) {
    return e in St;
  }
  const Ot = { theta: 1, radius: 1 },
    _t = C(Ot);
  function zt(e) {
    return "width" === e ? ee : te;
  }
  const Ct = { xOffset: 1, yOffset: 1 };
  function Pt(e) {
    return e in Ct;
  }
  const {
      text: At,
      tooltip: Nt,
      href: jt,
      url: Et,
      description: Mt,
      detail: Tt,
      key: Lt,
      order: qt,
      ...Wt
    } = wt,
    Rt = C(Wt);
  const Ut = { ...St, ...Ot, ...Ct, ...Wt },
    Bt = C(Ut);
  function Ht(e) {
    return !!Ut[e];
  }
  function Vt(e, t) {
    return (function (e) {
      switch (e) {
        case me:
        case ge:
        case he:
        case Ne:
        case _e:
        case ze:
        case Ce:
        case Pe:
        case Oe:
        case xe:
        case we:
        case ke:
        case Se:
        case Z:
        case $:
        case K:
          return It;
        case ee:
        case te:
        case oe:
        case re:
        case ue:
        case de:
          return Yt;
        case ne:
        case ie:
        case fe:
        case pe:
          return {
            area: "always",
            bar: "always",
            image: "always",
            rect: "always",
            rule: "always",
            circle: "binned",
            point: "binned",
            square: "binned",
            tick: "binned",
            line: "binned",
            trail: "binned",
          };
        case ye:
          return {
            point: "always",
            tick: "always",
            rule: "always",
            circle: "always",
            square: "always",
            bar: "always",
            text: "always",
            line: "always",
            trail: "always",
          };
        case De:
          return {
            line: "always",
            point: "always",
            tick: "always",
            rule: "always",
            circle: "always",
            square: "always",
            bar: "always",
            geoshape: "always",
          };
        case ve:
          return { point: "always", geoshape: "always" };
        case Fe:
          return { text: "always" };
        case be:
          return { point: "always", square: "always", text: "always" };
        case Ae:
          return { image: "always" };
        case ce:
        case ae:
          return { text: "always", arc: "always" };
        case le:
        case se:
          return { arc: "always" };
      }
    })(e)[t];
  }
  const It = {
      arc: "always",
      area: "always",
      bar: "always",
      circle: "always",
      geoshape: "always",
      image: "always",
      line: "always",
      rule: "always",
      point: "always",
      rect: "always",
      square: "always",
      trail: "always",
      text: "always",
      tick: "always",
    },
    { geoshape: Gt, ...Yt } = It;
  function Xt(e) {
    switch (e) {
      case ee:
      case te:
      case ce:
      case ae:
      case oe:
      case re:
      case ye:
      case be:
      case Se:
      case xe:
      case we:
      case ke:
      case ne:
      case ie:
      case le:
      case se:
        return;
      case Z:
      case $:
      case K:
      case ve:
      case De:
      case Fe:
      case Ce:
      case Pe:
      case Ae:
      case Ne:
        return "discrete";
      case me:
      case ge:
      case he:
        return "flexible";
      case ue:
      case de:
      case fe:
      case pe:
      case _e:
      case ze:
      case Oe:
        return;
    }
  }
  const Jt = {
      argmax: 1,
      argmin: 1,
      average: 1,
      count: 1,
      distinct: 1,
      product: 1,
      max: 1,
      mean: 1,
      median: 1,
      min: 1,
      missing: 1,
      q1: 1,
      q3: 1,
      ci0: 1,
      ci1: 1,
      stderr: 1,
      stdev: 1,
      stdevp: 1,
      sum: 1,
      valid: 1,
      values: 1,
      variance: 1,
      variancep: 1,
    },
    Qt = { count: 1, min: 1, max: 1 };
  function $t(e) {
    return !!e && !!e.argmin;
  }
  function Kt(e) {
    return !!e && !!e.argmax;
  }
  function Zt(e) {
    return t.isString(e) && !!Jt[e];
  }
  const en = new Set(["count", "valid", "missing", "distinct"]);
  function tn(e) {
    return t.isString(e) && en.has(e);
  }
  const nn = new Set(["count", "sum", "distinct", "valid", "missing"]),
    on = new Set(["mean", "average", "median", "q1", "q3", "min", "max"]);
  function rn(e) {
    return (
      t.isBoolean(e) && (e = Wa(e, void 0)),
      "bin" +
        C(e)
          .map((t) =>
            ln(e[t])
              ? j("_".concat(t, "_").concat(A(e[t])))
              : j("_".concat(t, "_").concat(e[t]))
          )
          .join("")
    );
  }
  function an(e) {
    return !0 === e || (cn(e) && !e.binned);
  }
  function sn(e) {
    return "binned" === e || (cn(e) && !0 === e.binned);
  }
  function cn(e) {
    return t.isObject(e);
  }
  function ln(e) {
    return null == e ? void 0 : e.param;
  }
  function un(e) {
    switch (e) {
      case $:
      case K:
      case ye:
      case me:
      case ge:
      case he:
      case Se:
      case xe:
      case we:
      case ke:
      case ve:
        return 6;
      case De:
        return 4;
      default:
        return 10;
    }
  }
  function dn(e) {
    return e && !!e.expr;
  }
  function fn(e) {
    const t = C(e || {}),
      n = {};
    for (const i of t) n[i] = kn(e[i]);
    return n;
  }
  function pn(e) {
    const {
        anchor: t,
        frame: n,
        offset: i,
        orient: o,
        angle: r,
        limit: a,
        color: s,
        subtitleColor: c,
        subtitleFont: l,
        subtitleFontSize: u,
        subtitleFontStyle: d,
        subtitleFontWeight: f,
        subtitleLineHeight: m,
        subtitlePadding: g,
        ...h
      } = e,
      v = {
        ...(t ? { anchor: t } : {}),
        ...(n ? { frame: n } : {}),
        ...(i ? { offset: i } : {}),
        ...(o ? { orient: o } : {}),
        ...(void 0 !== r ? { angle: r } : {}),
        ...(void 0 !== a ? { limit: a } : {}),
      },
      y = {
        ...(c ? { subtitleColor: c } : {}),
        ...(l ? { subtitleFont: l } : {}),
        ...(u ? { subtitleFontSize: u } : {}),
        ...(d ? { subtitleFontStyle: d } : {}),
        ...(f ? { subtitleFontWeight: f } : {}),
        ...(m ? { subtitleLineHeight: m } : {}),
        ...(g ? { subtitlePadding: g } : {}),
      };
    return {
      titleMarkConfig: { ...h, ...(s ? { fill: s } : {}) },
      subtitleMarkConfig: p(e, ["align", "baseline", "dx", "dy", "limit"]),
      nonMarkTitleProperties: v,
      subtitle: y,
    };
  }
  function mn(e) {
    return t.isString(e) || (t.isArray(e) && t.isString(e[0]));
  }
  function gn(e) {
    return e && !!e.signal;
  }
  function hn(e) {
    return !!e.step;
  }
  function vn(e) {
    return !t.isArray(e) && "field" in e && "data" in e;
  }
  const yn = C({
      aria: 1,
      description: 1,
      ariaRole: 1,
      ariaRoleDescription: 1,
      blend: 1,
      opacity: 1,
      fill: 1,
      fillOpacity: 1,
      stroke: 1,
      strokeCap: 1,
      strokeWidth: 1,
      strokeOpacity: 1,
      strokeDash: 1,
      strokeDashOffset: 1,
      strokeJoin: 1,
      strokeOffset: 1,
      strokeMiterLimit: 1,
      startAngle: 1,
      endAngle: 1,
      padAngle: 1,
      innerRadius: 1,
      outerRadius: 1,
      size: 1,
      shape: 1,
      interpolate: 1,
      tension: 1,
      orient: 1,
      align: 1,
      baseline: 1,
      text: 1,
      dir: 1,
      dx: 1,
      dy: 1,
      ellipsis: 1,
      limit: 1,
      radius: 1,
      theta: 1,
      angle: 1,
      font: 1,
      fontSize: 1,
      fontWeight: 1,
      fontStyle: 1,
      lineBreak: 1,
      lineHeight: 1,
      cursor: 1,
      href: 1,
      tooltip: 1,
      cornerRadius: 1,
      cornerRadiusTopLeft: 1,
      cornerRadiusTopRight: 1,
      cornerRadiusBottomLeft: 1,
      cornerRadiusBottomRight: 1,
      aspect: 1,
      width: 1,
      height: 1,
      url: 1,
      smooth: 1,
    }),
    bn = {
      arc: 1,
      area: 1,
      group: 1,
      image: 1,
      line: 1,
      path: 1,
      rect: 1,
      rule: 1,
      shape: 1,
      symbol: 1,
      text: 1,
      trail: 1,
    },
    xn = [
      "cornerRadius",
      "cornerRadiusTopLeft",
      "cornerRadiusTopRight",
      "cornerRadiusBottomLeft",
      "cornerRadiusBottomRight",
    ];
  function wn(e) {
    const n = t.isArray(e.condition) ? e.condition.map(Sn) : Sn(e.condition);
    return { ...kn(e), condition: n };
  }
  function kn(e) {
    if (dn(e)) {
      const { expr: t, ...n } = e;
      return { signal: t, ...n };
    }
    return e;
  }
  function Sn(e) {
    if (dn(e)) {
      const { expr: t, ...n } = e;
      return { signal: t, ...n };
    }
    return e;
  }
  function Dn(e) {
    if (dn(e)) {
      const { expr: t, ...n } = e;
      return { signal: t, ...n };
    }
    return gn(e) ? e : void 0 !== e ? { value: e } : void 0;
  }
  function Fn(e) {
    return gn(e) ? e.signal : t.stringValue(e.value);
  }
  function On(e) {
    return gn(e) ? e.signal : null == e ? null : t.stringValue(e);
  }
  function _n(e, t, n) {
    for (const i of n) {
      const n = Pn(i, t.markDef, t.config);
      void 0 !== n && (e[i] = Dn(n));
    }
    return e;
  }
  function zn(e) {
    var t;
    return [].concat(e.type, null !== (t = e.style) && void 0 !== t ? t : []);
  }
  function Cn(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const { vgChannel: o, ignoreVgConfig: r } = i;
    return o && void 0 !== t[o]
      ? t[o]
      : void 0 !== t[e]
      ? t[e]
      : !r || (o && o !== e)
      ? Pn(e, t, n, i)
      : void 0;
  }
  function Pn(e, t, n) {
    let { vgChannel: i } =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return V(
      i ? An(e, t, n.style) : void 0,
      An(e, t, n.style),
      i ? n[t.type][i] : void 0,
      n[t.type][e],
      i ? n.mark[i] : n.mark[e]
    );
  }
  function An(e, t, n) {
    return Nn(e, zn(t), n);
  }
  function Nn(e, n, i) {
    let o;
    n = t.array(n);
    for (const t of n) {
      const n = i[t];
      n && void 0 !== n[e] && (o = n[e]);
    }
    return o;
  }
  function jn(e, n) {
    return t.array(e).reduce(
      (e, t) => {
        var i;
        return (
          e.field.push(ka(t, n)),
          e.order.push(null !== (i = t.sort) && void 0 !== i ? i : "ascending"),
          e
        );
      },
      { field: [], order: [] }
    );
  }
  function En(e, t) {
    const n = [...e];
    return (
      t.forEach((e) => {
        for (const t of n) if (u(t, e)) return;
        n.push(e);
      }),
      n
    );
  }
  function Mn(e, n) {
    return u(e, n) || !n
      ? e
      : e
      ? [...t.array(e), ...t.array(n)].join(", ")
      : n;
  }
  function Tn(e, t) {
    const n = e.value,
      i = t.value;
    if (null == n || null === i) return { explicit: e.explicit, value: null };
    if ((mn(n) || gn(n)) && (mn(i) || gn(i)))
      return { explicit: e.explicit, value: Mn(n, i) };
    if (mn(n) || gn(n)) return { explicit: e.explicit, value: n };
    if (mn(i) || gn(i)) return { explicit: e.explicit, value: i };
    if (!(mn(n) || gn(n) || mn(i) || gn(i)))
      return { explicit: e.explicit, value: En(n, i) };
    throw new Error("It should never reach here");
  }
  function Ln(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function qn(e, t, n) {
    return (
      (function (e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
          if (!t.writable)
            throw new TypeError("attempted to set read only private field");
          t.value = n;
        }
      })(e, Wn(e, t, "set"), n),
      n
    );
  }
  function Wn(e, t, n) {
    if (!t.has(e))
      throw new TypeError(
        "attempted to " + n + " private field on non-instance"
      );
    return t.get(e);
  }
  function Rn(e, t, n) {
    !(function (e, t) {
      if (t.has(e))
        throw new TypeError(
          "Cannot initialize the same private elements twice on an object"
        );
    })(e, t),
      t.set(e, n);
  }
  function Un(e) {
    return "Invalid specification ".concat(
      g(e),
      '. Make sure the specification includes at least one of the following properties: "mark", "layer", "facet", "hconcat", "vconcat", "concat", or "repeat".'
    );
  }
  const Bn = 'Autosize "fit" only works for single views and layered views.';
  function Hn(e) {
    return "".concat(
      "width" == e ? "Width" : "Height",
      ' "container" only works for single views and layered views.'
    );
  }
  function Vn(e) {
    const t = "width" == e ? "x" : "y";
    return ""
      .concat(
        "width" == e ? "Width" : "Height",
        ' "container" only works well with autosize "fit" or "fit-'
      )
      .concat(t, '".');
  }
  function In(e) {
    return e
      ? 'Dropping "fit-'
          .concat(e, '" because spec has discrete ')
          .concat(it(e), ".")
      : 'Dropping "fit" because spec has discrete size.';
  }
  function Gn(e) {
    return "Unknown field for ".concat(e, ". Cannot calculate view size.");
  }
  function Yn(e) {
    return 'Cannot project a selection on encoding channel "'.concat(
      e,
      '", which has no field.'
    );
  }
  function Xn(e, t) {
    return 'Cannot project a selection on encoding channel "'
      .concat(e, '" as it uses an aggregate function ("')
      .concat(t, '").');
  }
  function Jn(e) {
    return "Selection not supported for ".concat(e, " yet.");
  }
  const Qn =
    "The same selection must be used to override scale domains in a layered view.";
  function $n(e) {
    return 'The "columns" property cannot be used when "'.concat(
      e,
      '" has nested row/column.'
    );
  }
  function Kn(e, t, n) {
    return 'An ancestor parsed field "'
      .concat(e, '" as ')
      .concat(n, " but a child wants to parse the field as ")
      .concat(t, ".");
  }
  function Zn(e) {
    return "Config.customFormatTypes is not true, thus custom format type and format for channel ".concat(
      e,
      " are dropped."
    );
  }
  function ei(e) {
    return "".concat(e, "Offset dropped because ").concat(e, " is continuous");
  }
  function ti(e) {
    return "There is no "
      .concat(e, " encoding. Replacing ")
      .concat(e, "Offset encoding as ")
      .concat(e, ".");
  }
  function ni(e, t, n) {
    return "Channel "
      .concat(e, " is a ")
      .concat(t, ". Converted to {value: ")
      .concat(g(n), "}.");
  }
  function ii(e) {
    return 'Invalid field type "'.concat(e, '".');
  }
  function oi(e, t) {
    return 'Invalid field type "'
      .concat(e, '" for aggregate: "')
      .concat(t, '", using "quantitative" instead.');
  }
  function ri(e) {
    return 'Invalid aggregation operator "'.concat(e, '".');
  }
  function ai(e, t) {
    const { fill: n, stroke: i } = t;
    return "Dropping color "
      .concat(e, " as the plot also has ")
      .concat(n && i ? "fill and stroke" : n ? "fill" : "stroke", ".");
  }
  function si(e, t) {
    return "Dropping "
      .concat(g(e), ' from channel "')
      .concat(
        t,
        '" since it does not contain any data field, datum, value, or signal.'
      );
  }
  function ci(e, t, n) {
    return ""
      .concat(e, ' dropped as it is incompatible with "')
      .concat(t, '"')
      .concat(n ? " when ".concat(n) : "", ".");
  }
  function li(e) {
    return "".concat(
      e,
      " encoding has no scale, so specified scale is ignored."
    );
  }
  function ui(e) {
    return "".concat(
      e,
      " encoding should be discrete (ordinal / nominal / binned)."
    );
  }
  function di(e) {
    return "".concat(
      e,
      " encoding should be discrete (ordinal / nominal / binned) or use a discretizing scale (e.g. threshold)."
    );
  }
  function fi(e, t) {
    return 'Using discrete channel "'
      .concat(e, '" to encode "')
      .concat(t, '" field can be misleading as it does not encode ')
      .concat("ordinal" === t ? "order" : "magnitude", ".");
  }
  function pi(e) {
    return "The ".concat(e, " for range marks cannot be an expression");
  }
  function mi(e) {
    return "Using unaggregated domain with raw field has no effect (".concat(
      g(e),
      ")."
    );
  }
  function gi(e) {
    return 'Unaggregated domain not applicable for "'.concat(
      e,
      '" since it produces values outside the origin domain of the source data.'
    );
  }
  function hi(e) {
    return "Unaggregated domain is currently unsupported for log scale (".concat(
      g(e),
      ")."
    );
  }
  function vi(e, t, n) {
    return 'Channel "'
      .concat(e, '" does not work with "')
      .concat(t, '" scale. We are using "')
      .concat(n, '" scale instead.');
  }
  function yi(e, t) {
    return 'FieldDef does not work with "'
      .concat(e, '" scale. We are using "')
      .concat(t, '" scale instead.');
  }
  function bi(e, t, n) {
    return ""
      .concat(n, "-scale's \"")
      .concat(t, '" is dropped as it does not work with ')
      .concat(e, " scale.");
  }
  function xi(e) {
    return 'The step for "'
      .concat(e, '" is dropped because the ')
      .concat("width" === e ? "x" : "y", " is continuous.");
  }
  const wi =
    "Domains that should be unioned has conflicting sort properties. Sort will be set to true.";
  function ki(e) {
    return 'Cannot stack "'
      .concat(e, '" if there is already "')
      .concat(e, '2".');
  }
  function Si(e) {
    return "Cannot stack non-linear scale (".concat(e, ").");
  }
  function Di(e) {
    return 'Stacking is applied even though the aggregate function is non-summative ("'.concat(
      e,
      '").'
    );
  }
  function Fi(e, t) {
    return "Invalid ".concat(e, ": ").concat(g(t), ".");
  }
  function Oi(e) {
    return "1D error band does not support ".concat(e, ".");
  }
  function _i(e) {
    return "Channel ".concat(e, ' is required for "binned" bin.');
  }
  function zi(e) {
    return "Channel ".concat(e, ' should not be used with "binned" bin.');
  }
  const Ci = t.logger(t.Warn);
  let Pi = Ci;
  function Ai(e) {
    return (Pi = e), Pi;
  }
  function Ni() {
    return (Pi = Ci), Pi;
  }
  function ji() {
    Pi.warn(...arguments);
  }
  function Ei(e) {
    if (e && t.isObject(e)) for (const t of Vi) if (t in e) return !0;
    return !1;
  }
  const Mi = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    Ti = Mi.map((e) => e.substr(0, 3)),
    Li = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ],
    qi = Li.map((e) => e.substr(0, 3));
  function Wi(e, n) {
    const i = [];
    if (
      (n &&
        void 0 !== e.day &&
        C(e).length > 1 &&
        (ji(
          (function (e) {
            return "Dropping day from datetime ".concat(
              g(e),
              " as day cannot be combined with other units."
            );
          })(e)
        ),
        delete (e = d(e)).day),
      void 0 !== e.year ? i.push(e.year) : i.push(2012),
      void 0 !== e.month)
    ) {
      const o = n
        ? (function (e) {
            if ((Q(e) && (e = +e), t.isNumber(e))) return e - 1;
            {
              const t = e.toLowerCase(),
                n = Mi.indexOf(t);
              if (-1 !== n) return n;
              const i = t.substr(0, 3),
                o = Ti.indexOf(i);
              if (-1 !== o) return o;
              throw new Error(Fi("month", e));
            }
          })(e.month)
        : e.month;
      i.push(o);
    } else if (void 0 !== e.quarter) {
      const o = n
        ? (function (e) {
            if ((Q(e) && (e = +e), t.isNumber(e)))
              return e > 4 && ji(Fi("quarter", e)), e - 1;
            throw new Error(Fi("quarter", e));
          })(e.quarter)
        : e.quarter;
      i.push(t.isNumber(o) ? 3 * o : "".concat(o, "*3"));
    } else i.push(0);
    if (void 0 !== e.date) i.push(e.date);
    else if (void 0 !== e.day) {
      const o = n
        ? (function (e) {
            if ((Q(e) && (e = +e), t.isNumber(e))) return e % 7;
            {
              const t = e.toLowerCase(),
                n = Li.indexOf(t);
              if (-1 !== n) return n;
              const i = t.substr(0, 3),
                o = qi.indexOf(i);
              if (-1 !== o) return o;
              throw new Error(Fi("day", e));
            }
          })(e.day)
        : e.day;
      i.push(t.isNumber(o) ? o + 1 : "".concat(o, "+1"));
    } else i.push(1);
    for (const t of ["hours", "minutes", "seconds", "milliseconds"]) {
      const n = e[t];
      i.push(void 0 === n ? 0 : n);
    }
    return i;
  }
  function Ri(e) {
    const t = Wi(e, !0).join(", ");
    return e.utc ? "utc(".concat(t, ")") : "datetime(".concat(t, ")");
  }
  function Ui(e) {
    const t = Wi(e, !1).join(", ");
    return e.utc ? "utc(".concat(t, ")") : "datetime(".concat(t, ")");
  }
  function Bi(e) {
    const t = Wi(e, !0);
    return e.utc ? +new Date(Date.UTC(...t)) : +new Date(...t);
  }
  const Hi = {
      year: 1,
      quarter: 1,
      month: 1,
      week: 1,
      day: 1,
      dayofyear: 1,
      date: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
      milliseconds: 1,
    },
    Vi = C(Hi);
  function Ii(e) {
    return e.startsWith("utc");
  }
  const Gi = { "year-month": "%b %Y ", "year-month-date": "%b %d, %Y " };
  function Yi(e) {
    return Vi.filter((t) => Xi(e, t));
  }
  function Xi(e, t) {
    const n = e.indexOf(t);
    return (
      !(n < 0) &&
      !(n > 0 && "seconds" === t && "i" === e.charAt(n - 1)) &&
      !(e.length > n + 3 && "day" === t && "o" === e.charAt(n + 3)) &&
      !(n > 0 && "year" === t && "f" === e.charAt(n - 1))
    );
  }
  function Ji(e, t) {
    let { end: n } =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : { end: !1 };
    const i = L(t),
      o = Ii(e) ? "utc" : "";
    function r(e) {
      return "quarter" === e
        ? "(".concat(o, "quarter(").concat(i, ")-1)")
        : "".concat(o).concat(e, "(").concat(i, ")");
    }
    let a;
    const s = {};
    for (const t of Vi) Xi(e, t) && ((s[t] = r(t)), (a = t));
    return n && (s[a] += "+1"), Ui(s);
  }
  function Qi(e) {
    if (!e) return;
    const t = Yi(e);
    return "timeUnitSpecifier(".concat(g(t), ", ").concat(g(Gi), ")");
  }
  function $i(e) {
    if (!e) return;
    let n;
    return (
      t.isString(e)
        ? (n = { unit: e })
        : t.isObject(e) && (n = { ...e, ...(e.unit ? { unit: e.unit } : {}) }),
      Ii(n.unit) && ((n.utc = !0), (n.unit = n.unit.substr(3))),
      n
    );
  }
  function Ki(e) {
    const { utc: t, ...n } = $i(e);
    return n.unit
      ? (t ? "utc" : "") +
          C(n)
            .map((e) =>
              j("".concat("unit" === e ? "" : "_".concat(e, "_")).concat(n[e]))
            )
            .join("")
      : (t ? "utc" : "") +
          "timeunit" +
          C(n)
            .map((e) => j("_".concat(e, "_").concat(n[e])))
            .join("");
  }
  function Zi(e) {
    return e && !!e.field && void 0 !== e.equal;
  }
  function eo(e) {
    return e && !!e.field && void 0 !== e.lt;
  }
  function to(e) {
    return e && !!e.field && void 0 !== e.lte;
  }
  function no(e) {
    return e && !!e.field && void 0 !== e.gt;
  }
  function io(e) {
    return e && !!e.field && void 0 !== e.gte;
  }
  function oo(e) {
    if (null != e && e.field) {
      if (t.isArray(e.range) && 2 === e.range.length) return !0;
      if (gn(e.range)) return !0;
    }
    return !1;
  }
  function ro(e) {
    return e && !!e.field && (t.isArray(e.oneOf) || t.isArray(e.in));
  }
  function ao(e) {
    return e && !!e.field && void 0 !== e.valid;
  }
  function so(e) {
    return ro(e) || Zi(e) || oo(e) || eo(e) || no(e) || to(e) || io(e);
  }
  function co(e, t) {
    return Ha(e, { timeUnit: t, wrapTime: !0 });
  }
  function lo(e, t) {
    return e.map((e) => co(e, t));
  }
  function uo(e) {
    var t;
    let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    const { field: i } = e,
      o = null === (t = $i(e.timeUnit)) || void 0 === t ? void 0 : t.unit,
      r = o ? "time(".concat(Ji(o, i), ")") : ka(e, { expr: "datum" });
    if (Zi(e)) return "".concat(r, "===").concat(co(e.equal, o));
    if (eo(e)) {
      const t = e.lt;
      return "".concat(r, "<").concat(co(t, o));
    }
    if (no(e)) {
      const t = e.gt;
      return "".concat(r, ">").concat(co(t, o));
    }
    if (to(e)) {
      const t = e.lte;
      return "".concat(r, "<=").concat(co(t, o));
    }
    if (io(e)) {
      const t = e.gte;
      return "".concat(r, ">=").concat(co(t, o));
    }
    if (ro(e))
      return "indexof(["
        .concat(lo(e.oneOf, o).join(","), "], ")
        .concat(r, ") !== -1");
    if (ao(e)) return fo(r, e.valid);
    if (oo(e)) {
      const { range: t } = e,
        i = gn(t) ? { signal: "".concat(t.signal, "[0]") } : t[0],
        a = gn(t) ? { signal: "".concat(t.signal, "[1]") } : t[1];
      if (null !== i && null !== a && n)
        return "inrange(" + r + ", [" + co(i, o) + ", " + co(a, o) + "])";
      const s = [];
      return (
        null !== i && s.push("".concat(r, " >= ").concat(co(i, o))),
        null !== a && s.push("".concat(r, " <= ").concat(co(a, o))),
        s.length > 0 ? s.join(" && ") : "true"
      );
    }
    throw new Error("Invalid field predicate: ".concat(g(e)));
  }
  function fo(e) {
    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return t
      ? "isValid(".concat(e, ") && isFinite(+").concat(e, ")")
      : "!isValid(".concat(e, ") || !isFinite(+").concat(e, ")");
  }
  function po(e) {
    var t;
    return so(e) && e.timeUnit
      ? {
          ...e,
          timeUnit:
            null === (t = $i(e.timeUnit)) || void 0 === t ? void 0 : t.unit,
        }
      : e;
  }
  function mo(e) {
    return "quantitative" === e || "temporal" === e;
  }
  function go(e) {
    return "ordinal" === e || "nominal" === e;
  }
  const ho = "quantitative",
    vo = "ordinal",
    yo = "temporal",
    bo = "nominal",
    xo = "geojson";
  function wo(e) {
    if (e)
      switch ((e = e.toLowerCase())) {
        case "q":
        case ho:
          return "quantitative";
        case "t":
        case yo:
          return "temporal";
        case "o":
        case vo:
          return "ordinal";
        case "n":
        case bo:
          return "nominal";
        case xo:
          return "geojson";
      }
  }
  const ko = "linear",
    So = "log",
    Do = "time",
    Fo = "utc",
    Oo = "point",
    _o = "band",
    zo = {
      linear: "numeric",
      log: "numeric",
      pow: "numeric",
      sqrt: "numeric",
      symlog: "numeric",
      identity: "numeric",
      sequential: "numeric",
      time: "time",
      utc: "time",
      ordinal: "ordinal",
      "bin-ordinal": "bin-ordinal",
      point: "ordinal-position",
      band: "ordinal-position",
      quantile: "discretizing",
      quantize: "discretizing",
      threshold: "discretizing",
    };
  function Co(e, t) {
    const n = zo[e],
      i = zo[t];
    return (
      n === i ||
      ("ordinal-position" === n && "time" === i) ||
      ("ordinal-position" === i && "time" === n)
    );
  }
  const Po = {
    linear: 0,
    log: 1,
    pow: 1,
    sqrt: 1,
    symlog: 1,
    identity: 1,
    sequential: 1,
    time: 0,
    utc: 0,
    point: 10,
    band: 11,
    ordinal: 0,
    "bin-ordinal": 0,
    quantile: 0,
    quantize: 0,
    threshold: 0,
  };
  function Ao(e) {
    return Po[e];
  }
  const No = new Set(["linear", "log", "pow", "sqrt", "symlog"]),
    jo = new Set([...No, "time", "utc"]);
  function Eo(e) {
    return No.has(e);
  }
  const Mo = new Set(["quantile", "quantize", "threshold"]),
    To = new Set([...jo, ...Mo, "sequential", "identity"]),
    Lo = new Set(["ordinal", "bin-ordinal", "point", "band"]);
  function qo(e) {
    return Lo.has(e);
  }
  function Wo(e) {
    return To.has(e);
  }
  function Ro(e) {
    return jo.has(e);
  }
  function Uo(e) {
    return Mo.has(e);
  }
  function Bo(e) {
    return null == e ? void 0 : e.param;
  }
  const {
      type: Ho,
      domain: Vo,
      range: Io,
      rangeMax: Go,
      rangeMin: Yo,
      scheme: Xo,
      ...Jo
    } = {
      type: 1,
      domain: 1,
      domainMax: 1,
      domainMin: 1,
      domainMid: 1,
      align: 1,
      range: 1,
      rangeMax: 1,
      rangeMin: 1,
      scheme: 1,
      bins: 1,
      reverse: 1,
      round: 1,
      clamp: 1,
      nice: 1,
      base: 1,
      exponent: 1,
      constant: 1,
      interpolate: 1,
      zero: 1,
      padding: 1,
      paddingInner: 1,
      paddingOuter: 1,
    },
    Qo = C(Jo);
  function $o(e, t) {
    switch (t) {
      case "type":
      case "domain":
      case "reverse":
      case "range":
        return !0;
      case "scheme":
      case "interpolate":
        return !["point", "band", "identity"].includes(e);
      case "bins":
        return !["point", "band", "identity", "ordinal"].includes(e);
      case "round":
        return Ro(e) || "band" === e || "point" === e;
      case "padding":
      case "rangeMin":
      case "rangeMax":
        return Ro(e) || ["point", "band"].includes(e);
      case "paddingOuter":
      case "align":
        return ["point", "band"].includes(e);
      case "paddingInner":
        return "band" === e;
      case "domainMax":
      case "domainMid":
      case "domainMin":
      case "clamp":
        return Ro(e);
      case "nice":
        return Ro(e) || "quantize" === e || "threshold" === e;
      case "exponent":
        return "pow" === e;
      case "base":
        return "log" === e;
      case "constant":
        return "symlog" === e;
      case "zero":
        return Wo(e) && !y(["log", "time", "utc", "threshold", "quantile"], e);
    }
  }
  function Ko(e, t) {
    switch (t) {
      case "interpolate":
      case "scheme":
      case "domainMid":
        return qe(e)
          ? void 0
          : 'Cannot use the scale property "'.concat(
              e,
              '" with non-color channel.'
            );
      case "align":
      case "type":
      case "bins":
      case "domain":
      case "domainMax":
      case "domainMin":
      case "range":
      case "base":
      case "exponent":
      case "constant":
      case "nice":
      case "padding":
      case "paddingInner":
      case "paddingOuter":
      case "rangeMax":
      case "rangeMin":
      case "reverse":
      case "round":
      case "clamp":
      case "zero":
        return;
    }
  }
  function Zo(e, t) {
    return y([vo, bo], t)
      ? void 0 === e || qo(e)
      : t === yo
      ? y([Do, Fo, void 0], e)
      : t !== ho || Eo(e) || Uo(e) || void 0 === e;
  }
  function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!Ht(e)) return !1;
    switch (e) {
      case ee:
      case te:
      case oe:
      case re:
      case ce:
      case ae:
        return !!Ro(t) || "band" === t || ("point" === t && !n);
      case ye:
      case Se:
      case xe:
      case we:
      case ke:
      case be:
        return Ro(t) || Uo(t) || y(["band", "point", "ordinal"], t);
      case me:
      case ge:
      case he:
        return "band" !== t;
      case De:
      case ve:
        return "ordinal" === t || Uo(t);
    }
  }
  const tr = {
      arc: "arc",
      area: "area",
      bar: "bar",
      image: "image",
      line: "line",
      point: "point",
      rect: "rect",
      rule: "rule",
      text: "text",
      tick: "tick",
      trail: "trail",
      circle: "circle",
      square: "square",
      geoshape: "geoshape",
    },
    nr = tr.arc,
    ir = tr.area,
    or = tr.bar,
    rr = tr.image,
    ar = tr.line,
    sr = tr.point,
    cr = tr.rect,
    lr = tr.rule,
    ur = tr.text,
    dr = tr.tick,
    fr = tr.trail,
    pr = tr.circle,
    mr = tr.square,
    gr = tr.geoshape;
  function hr(e) {
    return ["line", "area", "trail"].includes(e);
  }
  function vr(e) {
    return ["rect", "bar", "image", "arc"].includes(e);
  }
  const yr = new Set(C(tr));
  function br(e) {
    return e.type;
  }
  const xr = [
      "stroke",
      "strokeWidth",
      "strokeDash",
      "strokeDashOffset",
      "strokeOpacity",
      "strokeJoin",
      "strokeMiterLimit",
      "fill",
      "fillOpacity",
    ],
    wr = C({
      color: 1,
      filled: 1,
      invalid: 1,
      order: 1,
      radius2: 1,
      theta2: 1,
      timeUnitBandSize: 1,
      timeUnitBandPosition: 1,
    }),
    kr = C({
      mark: 1,
      arc: 1,
      area: 1,
      bar: 1,
      circle: 1,
      image: 1,
      line: 1,
      point: 1,
      rect: 1,
      rule: 1,
      square: 1,
      text: 1,
      tick: 1,
      trail: 1,
      geoshape: 1,
    });
  function Sr(e) {
    return e && null != e.band;
  }
  const Dr = {
      horizontal: ["cornerRadiusTopRight", "cornerRadiusBottomRight"],
      vertical: ["cornerRadiusTopLeft", "cornerRadiusTopRight"],
    },
    Fr = { binSpacing: 1, continuousBandSize: 5, timeUnitBandPosition: 0.5 },
    Or = { binSpacing: 0, continuousBandSize: 5, timeUnitBandPosition: 0.5 };
  function _r(e) {
    const { channel: t, channelDef: n, markDef: i, scale: o, config: r } = e,
      a = Nr(e);
    return ca(n) && !tn(n.aggregate) && o && Ro(o.get("type"))
      ? (function (e) {
          let { fieldDef: t, channel: n, markDef: i, ref: o, config: r } = e;
          if (hr(i.type)) return o;
          if (null === Cn("invalid", i, r)) return [zr(t, n), o];
          return o;
        })({ fieldDef: n, channel: t, markDef: i, ref: a, config: r })
      : a;
  }
  function zr(e, t) {
    return {
      test: Cr(e, !0),
      ...("y" === et(t) ? { field: { group: "height" } } : { value: 0 }),
    };
  }
  function Cr(e) {
    let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return fo(t.isString(e) ? e : ka(e, { expr: "datum" }), !n);
  }
  function Pr(e, t, n, i) {
    const o = {};
    if ((t && (o.scale = t), ua(e))) {
      const { datum: t } = e;
      Ei(t)
        ? (o.signal = Ri(t))
        : gn(t)
        ? (o.signal = t.signal)
        : dn(t)
        ? (o.signal = t.expr)
        : (o.value = t);
    } else o.field = ka(e, n);
    if (i) {
      const { offset: e, band: t } = i;
      e && (o.offset = e), t && (o.band = t);
    }
    return o;
  }
  function Ar(e) {
    let {
      scaleName: t,
      fieldOrDatumDef: n,
      fieldOrDatumDef2: i,
      offset: o,
      startSuffix: r,
      bandPosition: a = 0.5,
    } = e;
    const s = 0 < a && a < 1 ? "datum" : void 0,
      c = ka(n, { expr: s, suffix: r }),
      l = void 0 !== i ? ka(i, { expr: s }) : ka(n, { suffix: "end", expr: s }),
      u = {};
    if (0 === a || 1 === a) {
      u.scale = t;
      const e = 0 === a ? c : l;
      u.field = e;
    } else {
      const e = gn(a)
        ? ""
            .concat(a.signal, " * ")
            .concat(c, " + (1-")
            .concat(a.signal, ") * ")
            .concat(l)
        : ""
            .concat(a, " * ")
            .concat(c, " + ")
            .concat(1 - a, " * ")
            .concat(l);
      u.signal = 'scale("'.concat(t, '", ').concat(e, ")");
    }
    return o && (u.offset = o), u;
  }
  function Nr(e) {
    let {
      channel: n,
      channelDef: i,
      channel2Def: o,
      markDef: r,
      config: a,
      scaleName: s,
      scale: c,
      stack: l,
      offset: u,
      defaultRef: d,
      bandPosition: f,
    } = e;
    if (i) {
      if (pa(i)) {
        var p, m;
        const e = null == c ? void 0 : c.get("type");
        if (ma(i)) {
          var g;
          (null !== (g = f) && void 0 !== g) ||
            (f = na({ fieldDef: i, fieldDef2: o, markDef: r, config: a }));
          const { bin: t, timeUnit: c, type: d } = i;
          if (an(t) || (f && c && d === yo))
            return null != l && l.impute
              ? Pr(i, s, { binSuffix: "mid" }, { offset: u })
              : f && !qo(e)
              ? Ar({
                  scaleName: s,
                  fieldOrDatumDef: i,
                  bandPosition: f,
                  offset: u,
                })
              : Pr(i, s, Ia(i, n) ? { binSuffix: "range" } : {}, { offset: u });
          if (sn(t)) {
            if (ca(o))
              return Ar({
                scaleName: s,
                fieldOrDatumDef: i,
                fieldOrDatumDef2: o,
                bandPosition: f,
                offset: u,
              });
            ji(_i(n === ee ? ne : ie));
          }
        }
        return Pr(i, s, qo(e) ? { binSuffix: "range" } : {}, {
          offset: u,
          band:
            "band" === e
              ? null !==
                  (p = null !== (m = f) && void 0 !== m ? m : i.bandPosition) &&
                void 0 !== p
                ? p
                : 0.5
              : void 0,
        });
      }
      if (ga(i)) {
        const e = u ? { offset: u } : {};
        return { ...jr(n, i.value), ...e };
      }
    }
    return (
      t.isFunction(d) && (d = d()),
      d ? { ...d, ...(u ? { offset: u } : {}) } : d
    );
  }
  function jr(e, t) {
    return y(["x", "x2"], e) && "width" === t
      ? { field: { group: "width" } }
      : y(["y", "y2"], e) && "height" === t
      ? { field: { group: "height" } }
      : Dn(t);
  }
  function Er(e) {
    return e && "number" !== e && "time" !== e;
  }
  function Mr(e, t, n) {
    return ""
      .concat(e, "(")
      .concat(t)
      .concat(n ? ", ".concat(g(n)) : "", ")");
  }
  function Tr(e) {
    let {
      fieldOrDatumDef: n,
      format: i,
      formatType: o,
      expr: r,
      normalizeStack: a,
      config: s,
    } = e;
    if (Er(o))
      return qr({
        fieldOrDatumDef: n,
        format: i,
        formatType: o,
        expr: r,
        config: s,
      });
    const c = Lr(n, r, a);
    if (Ba(n)) {
      var l, u;
      const e = (function (e, n, i, o, r) {
        return !n || i
          ? ((i = t.isString(i) ? i : o),
            ""
              .concat(r ? "utc" : "time", "Format(")
              .concat(e, ", '")
              .concat(i, "')"))
          : (function (e, t, n) {
              if (!e) return;
              const i = Qi(e),
                o = n || Ii(e);
              return ""
                .concat(o ? "utc" : "time", "Format(")
                .concat(t, ", ")
                .concat(i, ")");
            })(n, e, r);
      })(
        c,
        ca(n)
          ? null === (l = $i(n.timeUnit)) || void 0 === l
            ? void 0
            : l.unit
          : void 0,
        i,
        s.timeFormat,
        ha(n) &&
          (null === (u = n.scale) || void 0 === u ? void 0 : u.type) === Fo
      );
      return e ? { signal: e } : void 0;
    }
    if (((i = Ur(la(n), i, s)), ca(n) && an(n.bin))) {
      return { signal: Vr(c, ka(n, { expr: r, binSuffix: "end" }), i, o, s) };
    }
    return i || "quantitative" === la(n)
      ? { signal: "".concat(Br(c, i)) }
      : { signal: "isValid(".concat(c, ") ? ").concat(c, ' : ""+').concat(c) };
  }
  function Lr(e, t, n) {
    return ca(e)
      ? n
        ? ""
            .concat(ka(e, { expr: t, suffix: "end" }), "-")
            .concat(ka(e, { expr: t, suffix: "start" }))
        : ka(e, { expr: t })
      : (function (e) {
          const { datum: t } = e;
          return Ei(t) ? Ri(t) : "".concat(g(t));
        })(e);
  }
  function qr(e) {
    var t;
    let {
      fieldOrDatumDef: n,
      format: i,
      formatType: o,
      expr: r,
      normalizeStack: a,
      config: s,
      field: c,
    } = e;
    if (
      ((null !== (t = c) && void 0 !== t) || (c = Lr(n, r, a)),
      ca(n) && an(n.bin))
    ) {
      return { signal: Vr(c, ka(n, { expr: r, binSuffix: "end" }), i, o, s) };
    }
    return { signal: Mr(o, c, i) };
  }
  function Wr(e, t, n, i, o, r) {
    if (!Er(i)) {
      if (Ba(e)) {
        var a;
        return (function (e, t, n, i) {
          if (e) return e;
          if (t) return { signal: Qi(t) };
          return i ? void 0 : n.timeFormat;
        })(
          n,
          ca(e)
            ? null === (a = $i(e.timeUnit)) || void 0 === a
              ? void 0
              : a.unit
            : void 0,
          o,
          r
        );
      }
      return Ur(t, n, o);
    }
  }
  function Rr(e, t, n) {
    return e && (gn(e) || "number" === e || "time" === e)
      ? e
      : Ba(t) && "time" !== n && "utc" !== n
      ? "time"
      : void 0;
  }
  function Ur(e, n, i) {
    return t.isString(n) ? n : e === ho ? i.numberFormat : void 0;
  }
  function Br(e, t) {
    return "format(".concat(e, ', "').concat(t || "", '")');
  }
  function Hr(e, n, i, o) {
    var r;
    return Er(i)
      ? Mr(i, e, n)
      : Br(
          e,
          null !== (r = t.isString(n) ? n : void 0) && void 0 !== r
            ? r
            : o.numberFormat
        );
  }
  function Vr(e, t, n, i, o) {
    const r = Hr(e, n, i, o),
      a = Hr(t, n, i, o);
    return ""
      .concat(fo(e, !1), ' ? "null" : ')
      .concat(r, ' + "')
      .concat(" – ", '" + ')
      .concat(a);
  }
  const Ir = "min",
    Gr = {
      x: 1,
      y: 1,
      color: 1,
      fill: 1,
      stroke: 1,
      strokeWidth: 1,
      size: 1,
      shape: 1,
      fillOpacity: 1,
      strokeOpacity: 1,
      opacity: 1,
      text: 1,
    };
  function Yr(e) {
    return e in Gr;
  }
  function Xr(e) {
    return !!e && !!e.encoding;
  }
  function Jr(e) {
    return !(!e || ("count" !== e.op && !e.field));
  }
  function Qr(e) {
    return !!e && t.isArray(e);
  }
  function $r(e) {
    return "row" in e || "column" in e;
  }
  function Kr(e) {
    return !!e && "header" in e;
  }
  function Zr(e) {
    return "facet" in e;
  }
  function ea(e) {
    const { field: t, timeUnit: n, bin: i, aggregate: o } = e;
    return {
      ...(n ? { timeUnit: n } : {}),
      ...(i ? { bin: i } : {}),
      ...(o ? { aggregate: o } : {}),
      field: t,
    };
  }
  function ta(e) {
    return "sort" in e;
  }
  function na(e) {
    let { fieldDef: t, fieldDef2: n, markDef: i, config: o } = e;
    if (pa(t) && void 0 !== t.bandPosition) return t.bandPosition;
    if (ca(t)) {
      const { timeUnit: e, bin: r } = t;
      if (e && !n) return vr(i.type) ? 0 : Pn("timeUnitBandPosition", i, o);
      if (an(r)) return 0.5;
    }
  }
  function ia(e) {
    let {
      channel: t,
      fieldDef: n,
      fieldDef2: i,
      markDef: o,
      config: r,
      scaleType: a,
      useVlSizeChannel: s,
    } = e;
    const c = it(t),
      l = Cn(s ? "size" : c, o, r, { vgChannel: c });
    if (void 0 !== l) return l;
    if (ca(n)) {
      const { timeUnit: e, bin: t } = n;
      if (e && !i) return { band: Pn("timeUnitBandSize", o, r) };
      if (an(t) && !qo(a)) return { band: 1 };
    }
    var u, d, f;
    return vr(o.type)
      ? a
        ? qo(a)
          ? (null === (d = r[o.type]) || void 0 === d
              ? void 0
              : d.discreteBandSize) || { band: 1 }
          : null === (f = r[o.type]) || void 0 === f
          ? void 0
          : f.continuousBandSize
        : null === (u = r[o.type]) || void 0 === u
        ? void 0
        : u.discreteBandSize
      : void 0;
  }
  function oa(e, t, n, i) {
    return (
      !!(an(e.bin) || (e.timeUnit && ma(e) && "temporal" === e.type)) &&
      void 0 !== na({ fieldDef: e, fieldDef2: t, markDef: n, config: i })
    );
  }
  function ra(e) {
    return e && "condition" in e;
  }
  function aa(e) {
    const n = e && e.condition;
    return !!n && !t.isArray(n) && ca(n);
  }
  function sa(e) {
    const n = e && e.condition;
    return !!n && !t.isArray(n) && pa(n);
  }
  function ca(e) {
    return e && (!!e.field || "count" === e.aggregate);
  }
  function la(e) {
    return e && e.type;
  }
  function ua(e) {
    return e && "datum" in e;
  }
  function da(e) {
    return (ma(e) && !Sa(e)) || fa(e);
  }
  function fa(e) {
    return ua(e) && t.isNumber(e.datum);
  }
  function pa(e) {
    return ca(e) || ua(e);
  }
  function ma(e) {
    return e && ("field" in e || "count" === e.aggregate) && "type" in e;
  }
  function ga(e) {
    return e && "value" in e && "value" in e;
  }
  function ha(e) {
    return e && ("scale" in e || "sort" in e);
  }
  function va(e) {
    return e && ("axis" in e || "stack" in e || "impute" in e);
  }
  function ya(e) {
    return e && "legend" in e;
  }
  function ba(e) {
    return e && ("format" in e || "formatType" in e);
  }
  function xa(e) {
    return m(e, ["legend", "axis", "header", "scale"]);
  }
  function wa(e) {
    return "op" in e;
  }
  function ka(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = e.field;
    const i = t.prefix;
    let o = t.suffix,
      r = "";
    if (Da(e)) n = Y("count");
    else {
      let i;
      if (!t.nofn)
        if (wa(e)) i = e.op;
        else {
          const { bin: l, aggregate: u, timeUnit: d } = e;
          var a, s;
          if (an(l))
            (i = rn(l)),
              (o =
                (null !== (a = t.binSuffix) && void 0 !== a ? a : "") +
                (null !== (s = t.suffix) && void 0 !== s ? s : ""));
          else if (u)
            Kt(u)
              ? ((r = '["'.concat(n, '"]')), (n = "argmax_".concat(u.argmax)))
              : $t(u)
              ? ((r = '["'.concat(n, '"]')), (n = "argmin_".concat(u.argmin)))
              : (i = String(u));
          else if (d) {
            var c;
            (i = Ki(d)),
              (o =
                ((!["range", "mid"].includes(t.binSuffix) && t.binSuffix) ||
                  "") + (null !== (c = t.suffix) && void 0 !== c ? c : ""));
          }
        }
      i && (n = n ? "".concat(i, "_").concat(n) : i);
    }
    return (
      o && (n = "".concat(n, "_").concat(o)),
      i && (n = "".concat(i, "_").concat(n)),
      t.forAs ? B(n) : t.expr ? q(n, t.expr) + r : R(n) + r
    );
  }
  function Sa(e) {
    switch (e.type) {
      case "nominal":
      case "ordinal":
      case "geojson":
        return !0;
      case "quantitative":
        return ca(e) && !!e.bin;
      case "temporal":
        return !1;
    }
    throw new Error(ii(e.type));
  }
  function Da(e) {
    return "count" === e.aggregate;
  }
  const Fa = (e, t) => {
    switch (t.fieldTitle) {
      case "plain":
        return e.field;
      case "functional":
        return (function (e) {
          const { aggregate: t, bin: n, timeUnit: i, field: o } = e;
          if (Kt(t)) return "".concat(o, " for argmax(").concat(t.argmax, ")");
          if ($t(t)) return "".concat(o, " for argmin(").concat(t.argmin, ")");
          const r = $i(i),
            a =
              t ||
              (null == r ? void 0 : r.unit) ||
              ((null == r ? void 0 : r.maxbins) && "timeunit") ||
              (an(n) && "bin");
          return a ? "".concat(a.toUpperCase(), "(").concat(o, ")") : o;
        })(e);
      default:
        return (function (e, t) {
          const { field: n, bin: i, timeUnit: o, aggregate: r } = e;
          if ("count" === r) return t.countTitle;
          if (an(i)) return "".concat(n, " (binned)");
          if (o) {
            var a;
            const e = null === (a = $i(o)) || void 0 === a ? void 0 : a.unit;
            if (e) return "".concat(n, " (").concat(Yi(e).join("-"), ")");
          } else if (r)
            return Kt(r)
              ? "".concat(n, " for max ").concat(r.argmax)
              : $t(r)
              ? "".concat(n, " for min ").concat(r.argmin)
              : "".concat(T(r), " of ").concat(n);
          return n;
        })(e, t);
    }
  };
  let Oa = Fa;
  function _a(e) {
    Oa = e;
  }
  function za() {
    _a(Fa);
  }
  function Ca(e, t, n) {
    var i;
    let { allowDisabling: o, includeDefault: r = !0 } = n;
    const a = null === (i = Pa(e)) || void 0 === i ? void 0 : i.title;
    if (!ca(e)) return null != a ? a : e.title;
    const s = e,
      c = r ? Aa(s, t) : void 0;
    return o
      ? V(a, s.title, c)
      : null !== (l = null != a ? a : s.title) && void 0 !== l
      ? l
      : c;
    var l;
  }
  function Pa(e) {
    return va(e) && e.axis
      ? e.axis
      : ya(e) && e.legend
      ? e.legend
      : Kr(e) && e.header
      ? e.header
      : void 0;
  }
  function Aa(e, t) {
    return Oa(e, t);
  }
  function Na(e) {
    if (ba(e)) {
      const { format: t, formatType: n } = e;
      return { format: t, formatType: n };
    }
    {
      var t;
      const n = null !== (t = Pa(e)) && void 0 !== t ? t : {},
        { format: i, formatType: o } = n;
      return { format: i, formatType: o };
    }
  }
  function ja(e, n) {
    var i;
    switch (n) {
      case "latitude":
      case "longitude":
        return "quantitative";
      case "row":
      case "column":
      case "facet":
      case "shape":
      case "strokeDash":
        return "nominal";
      case "order":
        return "ordinal";
    }
    if (ta(e) && t.isArray(e.sort)) return "ordinal";
    const { aggregate: o, bin: r, timeUnit: a } = e;
    if (a) return "temporal";
    if (r || (o && !Kt(o) && !$t(o))) return "quantitative";
    if (ha(e) && null !== (i = e.scale) && void 0 !== i && i.type)
      switch (zo[e.scale.type]) {
        case "numeric":
        case "discretizing":
          return "quantitative";
        case "time":
          return "temporal";
      }
    return "nominal";
  }
  function Ea(e) {
    return ca(e) ? e : aa(e) ? e.condition : void 0;
  }
  function Ma(e) {
    return pa(e) ? e : sa(e) ? e.condition : void 0;
  }
  function Ta(e, n, i) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.isString(e) || t.isNumber(e) || t.isBoolean(e)) {
      return (
        ji(
          ni(
            n,
            t.isString(e) ? "string" : t.isNumber(e) ? "number" : "boolean",
            e
          )
        ),
        { value: e }
      );
    }
    return pa(e)
      ? La(e, n, i, o)
      : sa(e)
      ? { ...e, condition: La(e.condition, n, i, o) }
      : e;
  }
  function La(e, n, i, o) {
    if (ba(e)) {
      const { format: t, formatType: r, ...a } = e;
      if (Er(r) && !i.customFormatTypes) return ji(Zn(n)), La(a, n, i, o);
    } else {
      const t = va(e) ? "axis" : ya(e) ? "legend" : Kr(e) ? "header" : null;
      if (t && e[t]) {
        const { format: r, formatType: a, ...s } = e[t];
        if (Er(a) && !i.customFormatTypes)
          return ji(Zn(n)), La({ ...e, [t]: s }, n, i, o);
      }
    }
    return ca(e)
      ? qa(e, n, o)
      : (function (e) {
          let n = e.type;
          if (n) return e;
          const { datum: i } = e;
          return (
            (n = t.isNumber(i)
              ? "quantitative"
              : t.isString(i)
              ? "nominal"
              : Ei(i)
              ? "temporal"
              : void 0),
            { ...e, type: n }
          );
        })(e);
  }
  function qa(e, n) {
    let { compositeMark: i = !1 } =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const { aggregate: o, timeUnit: r, bin: a, field: s } = e,
      c = { ...e };
    if (
      (i || !o || Zt(o) || Kt(o) || $t(o) || (ji(ri(o)), delete c.aggregate),
      r && (c.timeUnit = $i(r)),
      s && (c.field = "".concat(s)),
      an(a) && (c.bin = Wa(a, n)),
      sn(a) && !Ft(n) && ji(zi(n)),
      ma(c))
    ) {
      const { type: e } = c,
        t = wo(e);
      e !== t && (c.type = t),
        "quantitative" !== e &&
          tn(o) &&
          (ji(oi(e, o)), (c.type = "quantitative"));
    } else if (!Ze(n)) {
      const e = ja(c, n);
      c.type = e;
    }
    if (ma(c)) {
      const { compatible: e, warning: t } = Ua(c, n) || {};
      !1 === e && ji(t);
    }
    if (ta(c) && t.isString(c.sort)) {
      const { sort: e } = c;
      if (Yr(e)) return { ...c, sort: { encoding: e } };
      const t = e.substr(1);
      if ("-" === e.charAt(0) && Yr(t))
        return { ...c, sort: { encoding: t, order: "descending" } };
    }
    if (Kr(c)) {
      const { header: e } = c;
      if (e) {
        const { orient: t, ...n } = e;
        if (t)
          return {
            ...c,
            header: {
              ...n,
              labelOrient: e.labelOrient || t,
              titleOrient: e.titleOrient || t,
            },
          };
      }
    }
    return c;
  }
  function Wa(e, n) {
    return t.isBoolean(e)
      ? { maxbins: un(n) }
      : "binned" === e
      ? { binned: !0 }
      : e.maxbins || e.step
      ? e
      : { ...e, maxbins: un(n) };
  }
  const Ra = { compatible: !0 };
  function Ua(e, t) {
    const n = e.type;
    if ("geojson" === n && "shape" !== t)
      return {
        compatible: !1,
        warning: "Channel ".concat(
          t,
          " should not be used with a geojson data."
        ),
      };
    switch (t) {
      case $:
      case K:
      case Z:
        return Sa(e) ? Ra : { compatible: !1, warning: ui(t) };
      case ee:
      case te:
      case oe:
      case re:
      case me:
      case ge:
      case he:
      case Fe:
      case _e:
      case ze:
      case Ce:
      case Pe:
      case Ae:
      case be:
      case ce:
      case ae:
      case Ne:
        return Ra;
      case de:
      case pe:
      case ue:
      case fe:
        return n !== ho
          ? {
              compatible: !1,
              warning: "Channel "
                .concat(
                  t,
                  " should be used with a quantitative field only, not "
                )
                .concat(e.type, " field."),
            }
          : Ra;
      case xe:
      case we:
      case ke:
      case Se:
      case ye:
      case le:
      case se:
      case ne:
      case ie:
        return "nominal" !== n || e.sort
          ? Ra
          : {
              compatible: !1,
              warning: "Channel ".concat(
                t,
                " should not be used with an unsorted discrete field."
              ),
            };
      case ve:
      case De:
        return Sa(e) ||
          (ha((i = e)) &&
            Uo(null === (o = i.scale) || void 0 === o ? void 0 : o.type))
          ? Ra
          : { compatible: !1, warning: di(t) };
      case Oe:
        return "nominal" !== e.type || "sort" in e
          ? Ra
          : {
              compatible: !1,
              warning:
                "Channel order is inappropriate for nominal field, which has no inherent order.",
            };
    }
    var i, o;
  }
  function Ba(e) {
    const { formatType: t } = Na(e);
    return (
      "time" === t ||
      (!t && (n = e) && ("temporal" === n.type || (ca(n) && !!n.timeUnit)))
    );
    var n;
  }
  function Ha(e, n) {
    var i;
    let {
      timeUnit: o,
      type: r,
      wrapTime: a,
      undefinedIfExprNotRequired: s,
    } = n;
    const c = o && (null === (i = $i(o)) || void 0 === i ? void 0 : i.unit);
    let l,
      u = c || "temporal" === r;
    return (
      dn(e)
        ? (l = e.expr)
        : gn(e)
        ? (l = e.signal)
        : Ei(e)
        ? ((u = !0), (l = Ri(e)))
        : (t.isString(e) || t.isNumber(e)) &&
          u &&
          ((l = "datetime(".concat(g(e), ")")),
          (function (e) {
            return !!Hi[e];
          })(c) &&
            ((t.isNumber(e) && e < 1e4) ||
              (t.isString(e) && isNaN(Date.parse(e)))) &&
            (l = Ri({ [c]: e }))),
      l ? (a && u ? "time(".concat(l, ")") : l) : s ? void 0 : g(e)
    );
  }
  function Va(e, t) {
    const { type: n } = e;
    return t.map((t) => {
      const i = Ha(t, {
        timeUnit: ca(e) ? e.timeUnit : void 0,
        type: n,
        undefinedIfExprNotRequired: !0,
      });
      return void 0 !== i ? { signal: i } : t;
    });
  }
  function Ia(e, t) {
    return an(e.bin)
      ? Ht(t) && ["ordinal", "nominal"].includes(e.type)
      : (console.warn("Only call this method for binned field defs."), !1);
  }
  const Ga = {
    labelAlign: { part: "labels", vgProp: "align" },
    labelBaseline: { part: "labels", vgProp: "baseline" },
    labelColor: { part: "labels", vgProp: "fill" },
    labelFont: { part: "labels", vgProp: "font" },
    labelFontSize: { part: "labels", vgProp: "fontSize" },
    labelFontStyle: { part: "labels", vgProp: "fontStyle" },
    labelFontWeight: { part: "labels", vgProp: "fontWeight" },
    labelOpacity: { part: "labels", vgProp: "opacity" },
    labelOffset: null,
    labelPadding: null,
    gridColor: { part: "grid", vgProp: "stroke" },
    gridDash: { part: "grid", vgProp: "strokeDash" },
    gridDashOffset: { part: "grid", vgProp: "strokeDashOffset" },
    gridOpacity: { part: "grid", vgProp: "opacity" },
    gridWidth: { part: "grid", vgProp: "strokeWidth" },
    tickColor: { part: "ticks", vgProp: "stroke" },
    tickDash: { part: "ticks", vgProp: "strokeDash" },
    tickDashOffset: { part: "ticks", vgProp: "strokeDashOffset" },
    tickOpacity: { part: "ticks", vgProp: "opacity" },
    tickSize: null,
    tickWidth: { part: "ticks", vgProp: "strokeWidth" },
  };
  function Ya(e) {
    return e && e.condition;
  }
  const Xa = ["domain", "grid", "labels", "ticks", "title"],
    Ja = {
      grid: "grid",
      gridCap: "grid",
      gridColor: "grid",
      gridDash: "grid",
      gridDashOffset: "grid",
      gridOpacity: "grid",
      gridScale: "grid",
      gridWidth: "grid",
      orient: "main",
      bandPosition: "both",
      aria: "main",
      description: "main",
      domain: "main",
      domainCap: "main",
      domainColor: "main",
      domainDash: "main",
      domainDashOffset: "main",
      domainOpacity: "main",
      domainWidth: "main",
      format: "main",
      formatType: "main",
      labelAlign: "main",
      labelAngle: "main",
      labelBaseline: "main",
      labelBound: "main",
      labelColor: "main",
      labelFlush: "main",
      labelFlushOffset: "main",
      labelFont: "main",
      labelFontSize: "main",
      labelFontStyle: "main",
      labelFontWeight: "main",
      labelLimit: "main",
      labelLineHeight: "main",
      labelOffset: "main",
      labelOpacity: "main",
      labelOverlap: "main",
      labelPadding: "main",
      labels: "main",
      labelSeparation: "main",
      maxExtent: "main",
      minExtent: "main",
      offset: "both",
      position: "main",
      tickCap: "main",
      tickColor: "main",
      tickDash: "main",
      tickDashOffset: "main",
      tickMinStep: "both",
      tickOffset: "both",
      tickOpacity: "main",
      tickRound: "both",
      ticks: "main",
      tickSize: "main",
      tickWidth: "both",
      title: "main",
      titleAlign: "main",
      titleAnchor: "main",
      titleAngle: "main",
      titleBaseline: "main",
      titleColor: "main",
      titleFont: "main",
      titleFontSize: "main",
      titleFontStyle: "main",
      titleFontWeight: "main",
      titleLimit: "main",
      titleLineHeight: "main",
      titleOpacity: "main",
      titlePadding: "main",
      titleX: "main",
      titleY: "main",
      encode: "both",
      scale: "both",
      tickBand: "both",
      tickCount: "both",
      tickExtra: "both",
      translate: "both",
      values: "both",
      zindex: "both",
    },
    Qa = {
      orient: 1,
      aria: 1,
      bandPosition: 1,
      description: 1,
      domain: 1,
      domainCap: 1,
      domainColor: 1,
      domainDash: 1,
      domainDashOffset: 1,
      domainOpacity: 1,
      domainWidth: 1,
      format: 1,
      formatType: 1,
      grid: 1,
      gridCap: 1,
      gridColor: 1,
      gridDash: 1,
      gridDashOffset: 1,
      gridOpacity: 1,
      gridWidth: 1,
      labelAlign: 1,
      labelAngle: 1,
      labelBaseline: 1,
      labelBound: 1,
      labelColor: 1,
      labelFlush: 1,
      labelFlushOffset: 1,
      labelFont: 1,
      labelFontSize: 1,
      labelFontStyle: 1,
      labelFontWeight: 1,
      labelLimit: 1,
      labelLineHeight: 1,
      labelOffset: 1,
      labelOpacity: 1,
      labelOverlap: 1,
      labelPadding: 1,
      labels: 1,
      labelSeparation: 1,
      maxExtent: 1,
      minExtent: 1,
      offset: 1,
      position: 1,
      tickBand: 1,
      tickCap: 1,
      tickColor: 1,
      tickCount: 1,
      tickDash: 1,
      tickDashOffset: 1,
      tickExtra: 1,
      tickMinStep: 1,
      tickOffset: 1,
      tickOpacity: 1,
      tickRound: 1,
      ticks: 1,
      tickSize: 1,
      tickWidth: 1,
      title: 1,
      titleAlign: 1,
      titleAnchor: 1,
      titleAngle: 1,
      titleBaseline: 1,
      titleColor: 1,
      titleFont: 1,
      titleFontSize: 1,
      titleFontStyle: 1,
      titleFontWeight: 1,
      titleLimit: 1,
      titleLineHeight: 1,
      titleOpacity: 1,
      titlePadding: 1,
      titleX: 1,
      titleY: 1,
      translate: 1,
      values: 1,
      zindex: 1,
    },
    $a = { ...Qa, style: 1, labelExpr: 1, encoding: 1 };
  function Ka(e) {
    return !!$a[e];
  }
  const Za = C({
    axis: 1,
    axisBand: 1,
    axisBottom: 1,
    axisDiscrete: 1,
    axisLeft: 1,
    axisPoint: 1,
    axisQuantitative: 1,
    axisRight: 1,
    axisTemporal: 1,
    axisTop: 1,
    axisX: 1,
    axisXBand: 1,
    axisXDiscrete: 1,
    axisXPoint: 1,
    axisXQuantitative: 1,
    axisXTemporal: 1,
    axisY: 1,
    axisYBand: 1,
    axisYDiscrete: 1,
    axisYPoint: 1,
    axisYQuantitative: 1,
    axisYTemporal: 1,
  });
  function es(e) {
    return "mark" in e;
  }
  class ts {
    constructor(e, t) {
      (this.name = e), (this.run = t);
    }
    hasMatchingType(e) {
      return !!es(e) && (br((t = e.mark)) ? t.type : t) === this.name;
      var t;
    }
  }
  function ns(e, n) {
    const i = e && e[n];
    return !!i && (t.isArray(i) ? b(i, (e) => !!e.field) : ca(i) || aa(i));
  }
  function is(e, n) {
    const i = e && e[n];
    return (
      !!i && (t.isArray(i) ? b(i, (e) => !!e.field) : ca(i) || ua(i) || sa(i))
    );
  }
  function os(e, t) {
    if (Ft(t)) {
      const n = e[t];
      if ((ca(n) || ua(n)) && go(n.type)) {
        return is(e, ot(t));
      }
    }
    return !1;
  }
  function rs(e) {
    return b(Be, (n) => {
      if (ns(e, n)) {
        const i = e[n];
        if (t.isArray(i)) return b(i, (e) => !!e.aggregate);
        {
          const e = Ea(i);
          return e && !!e.aggregate;
        }
      }
      return !1;
    });
  }
  function as(e, t) {
    const n = [],
      i = [],
      o = [],
      r = [],
      a = {};
    return (
      us(e, (s, c) => {
        if (ca(s)) {
          const { field: l, aggregate: u, bin: d, timeUnit: f, ...p } = s;
          if (u || f || d) {
            const e = Pa(s),
              m = null == e ? void 0 : e.title;
            let g = ka(s, { forAs: !0 });
            const h = {
              ...(m ? [] : { title: Ca(s, t, { allowDisabling: !0 }) }),
              ...p,
              field: g,
            };
            if (u) {
              let e;
              if (
                (Kt(u)
                  ? ((e = "argmax"),
                    (g = ka({ op: "argmax", field: u.argmax }, { forAs: !0 })),
                    (h.field = "".concat(g, ".").concat(l)))
                  : $t(u)
                  ? ((e = "argmin"),
                    (g = ka({ op: "argmin", field: u.argmin }, { forAs: !0 })),
                    (h.field = "".concat(g, ".").concat(l)))
                  : "boxplot" !== u &&
                    "errorbar" !== u &&
                    "errorband" !== u &&
                    (e = u),
                e)
              ) {
                const t = { op: e, as: g };
                l && (t.field = l), r.push(t);
              }
            } else if ((n.push(g), ma(s) && an(d))) {
              if (
                (i.push({ bin: d, field: l, as: g }),
                n.push(ka(s, { binSuffix: "end" })),
                Ia(s, c) && n.push(ka(s, { binSuffix: "range" })),
                Ft(c))
              ) {
                const e = { field: "".concat(g, "_end") };
                a["".concat(c, "2")] = e;
              }
              (h.bin = "binned"), Ze(c) || (h.type = ho);
            } else if (f) {
              o.push({ timeUnit: f, field: l, as: g });
              const e = ma(s) && s.type !== yo && "time";
              e &&
                (c === Fe || c === Ce
                  ? (h.formatType = e)
                  : !(function (e) {
                      return !!wt[e];
                    })(c)
                  ? Ft(c) && (h.axis = { formatType: e, ...h.axis })
                  : (h.legend = { formatType: e, ...h.legend }));
            }
            a[c] = h;
          } else n.push(l), (a[c] = e[c]);
        } else a[c] = e[c];
      }),
      { bins: i, timeUnits: o, aggregate: r, groupby: n, encoding: a }
    );
  }
  function ss(e, t, n) {
    const i = Vt(t, n);
    if (!i) return !1;
    if ("binned" === i) {
      const n = e[t === ne ? ee : te];
      return !!(ca(n) && ca(e[t]) && sn(n.bin));
    }
    return !0;
  }
  function cs(e, t) {
    const n = {};
    for (const i of C(e)) {
      const o = Ta(e[i], i, t, { compositeMark: !0 });
      n[i] = o;
    }
    return n;
  }
  function ls(e) {
    const n = [];
    for (const i of C(e))
      if (ns(e, i)) {
        const o = e[i],
          r = t.array(o);
        for (const e of r) ca(e) ? n.push(e) : aa(e) && n.push(e.condition);
      }
    return n;
  }
  function us(e, n, i) {
    if (e)
      for (const o of C(e)) {
        const r = e[o];
        if (t.isArray(r)) for (const e of r) n.call(i, e, o);
        else n.call(i, r, o);
      }
  }
  function ds(e, n) {
    return C(n).reduce((i, o) => {
      switch (o) {
        case ee:
        case te:
        case Pe:
        case Ne:
        case Ae:
        case ne:
        case ie:
        case oe:
        case re:
        case ce:
        case le:
        case ae:
        case se:
        case ue:
        case de:
        case fe:
        case pe:
        case Fe:
        case ve:
        case be:
        case Ce:
          return i;
        case Oe:
          if ("line" === e || "trail" === e) return i;
        case _e:
        case ze: {
          const e = n[o];
          if (t.isArray(e) || ca(e))
            for (const n of t.array(e)) n.aggregate || i.push(ka(n, {}));
          return i;
        }
        case ye:
          if ("trail" === e) return i;
        case me:
        case ge:
        case he:
        case xe:
        case we:
        case ke:
        case De:
        case Se: {
          const e = Ea(n[o]);
          return e && !e.aggregate && i.push(ka(e, {})), i;
        }
      }
    }, []);
  }
  function fs(e, t, n) {
    let i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    if ("tooltip" in n) return { tooltip: n.tooltip };
    const o = e.map((e) => {
        let { fieldPrefix: n, titlePrefix: o } = e;
        const r = i ? " of ".concat(ps(t)) : "";
        return {
          field: n + t.field,
          type: t.type,
          title: gn(o)
            ? { signal: "".concat(o, '"').concat(escape(r), '"') }
            : o + r,
        };
      }),
      r = ls(n).map(xa);
    return { tooltip: [...o, ...S(r, h)] };
  }
  function ps(e) {
    const { title: t, field: n } = e;
    return V(t, n);
  }
  function ms(e, n, i, o, r) {
    const { scale: a, axis: s } = i;
    return (c) => {
      let {
        partName: l,
        mark: u,
        positionPrefix: d,
        endPositionPrefix: f,
        extraEncoding: p = {},
      } = c;
      const m = ps(i);
      return gs(e, l, r, {
        mark: u,
        encoding: {
          [n]: {
            field: "".concat(d, "_").concat(i.field),
            type: i.type,
            ...(void 0 !== m ? { title: m } : {}),
            ...(void 0 !== a ? { scale: a } : {}),
            ...(void 0 !== s ? { axis: s } : {}),
          },
          ...(t.isString(f)
            ? {
                ["".concat(n, "2")]: {
                  field: "".concat(f, "_").concat(i.field),
                },
              }
            : {}),
          ...o,
          ...p,
        },
      });
    };
  }
  function gs(e, n, i, o) {
    const { clip: r, color: a, opacity: s } = e,
      c = e.type;
    return e[n] || (void 0 === e[n] && i[n])
      ? [
          {
            ...o,
            mark: {
              ...i[n],
              ...(r ? { clip: r } : {}),
              ...(a ? { color: a } : {}),
              ...(s ? { opacity: s } : {}),
              ...(br(o.mark) ? o.mark : { type: o.mark }),
              style: "".concat(c, "-").concat(n),
              ...(t.isBoolean(e[n]) ? {} : e[n]),
            },
          },
        ]
      : [];
  }
  function hs(e, t, n) {
    const { encoding: i } = e,
      o = "vertical" === t ? "y" : "x",
      r = i[o],
      a = i["".concat(o, "2")],
      s = i["".concat(o, "Error")],
      c = i["".concat(o, "Error2")];
    return {
      continuousAxisChannelDef: vs(r, n),
      continuousAxisChannelDef2: vs(a, n),
      continuousAxisChannelDefError: vs(s, n),
      continuousAxisChannelDefError2: vs(c, n),
      continuousAxis: o,
    };
  }
  function vs(e, t) {
    if (null != e && e.aggregate) {
      const { aggregate: n, ...i } = e;
      return (
        n !== t &&
          ji(
            (function (e, t) {
              return "Continuous axis should not have customized aggregation function "
                .concat(e, "; ")
                .concat(t, " already agregates the axis.");
            })(n, t)
          ),
        i
      );
    }
    return e;
  }
  function ys(e, t) {
    const { mark: n, encoding: i } = e,
      { x: o, y: r } = i;
    if (br(n) && n.orient) return n.orient;
    if (da(o)) {
      if (da(r)) {
        const e = ca(o) && o.aggregate,
          n = ca(r) && r.aggregate;
        if (e || n !== t) {
          if (n || e !== t) {
            if (e === t && n === t)
              throw new Error("Both x and y cannot have aggregate");
            return Ba(r) && !Ba(o) ? "horizontal" : "vertical";
          }
          return "horizontal";
        }
        return "vertical";
      }
      return "horizontal";
    }
    if (da(r)) return "vertical";
    throw new Error("Need a valid continuous axis for ".concat(t, "s"));
  }
  const bs = "boxplot",
    xs = new ts(bs, ks);
  function ws(e) {
    return t.isNumber(e) ? "tukey" : e;
  }
  function ks(e, n) {
    var i;
    let { config: o } = n;
    e = { ...e, encoding: cs(e.encoding, o) };
    const { mark: r, encoding: a, params: s, projection: c, ...l } = e,
      u = br(r) ? r : { type: r };
    s && ji(Jn("boxplot"));
    const d = null !== (i = u.extent) && void 0 !== i ? i : o.boxplot.extent,
      f = Cn("size", u, o),
      p = ws(d),
      {
        bins: g,
        timeUnits: h,
        transform: v,
        continuousAxisChannelDef: y,
        continuousAxis: b,
        groupby: x,
        aggregate: w,
        encodingWithoutContinuousAxis: k,
        ticksOrient: S,
        boxOrient: D,
        customTooltipWithoutAggregatedField: F,
      } = (function (e, n, i) {
        const o = ys(e, bs),
          { continuousAxisChannelDef: r, continuousAxis: a } = hs(e, o, bs),
          s = r.field,
          c = ws(n),
          l = [
            ...Ss(s),
            { op: "median", field: s, as: "mid_box_".concat(s) },
            {
              op: "min",
              field: s,
              as: ("min-max" === c ? "lower_whisker_" : "min_") + s,
            },
            {
              op: "max",
              field: s,
              as: ("min-max" === c ? "upper_whisker_" : "max_") + s,
            },
          ],
          u =
            "min-max" === c || "tukey" === c
              ? []
              : [
                  {
                    calculate: 'datum["upper_box_'
                      .concat(s, '"] - datum["lower_box_')
                      .concat(s, '"]'),
                    as: "iqr_".concat(s),
                  },
                  {
                    calculate: 'min(datum["upper_box_'
                      .concat(s, '"] + datum["iqr_')
                      .concat(s, '"] * ')
                      .concat(n, ', datum["max_')
                      .concat(s, '"])'),
                    as: "upper_whisker_".concat(s),
                  },
                  {
                    calculate: 'max(datum["lower_box_'
                      .concat(s, '"] - datum["iqr_')
                      .concat(s, '"] * ')
                      .concat(n, ', datum["min_')
                      .concat(s, '"])'),
                    as: "lower_whisker_".concat(s),
                  },
                ],
          { [a]: d, ...f } = e.encoding,
          { customTooltipWithoutAggregatedField: p, filteredEncoding: m } =
            (function (e) {
              const { tooltip: n, ...i } = e;
              if (!n) return { filteredEncoding: i };
              let o, r;
              if (t.isArray(n)) {
                for (const e of n)
                  e.aggregate
                    ? (o || (o = []), o.push(e))
                    : (r || (r = []), r.push(e));
                o && (i.tooltip = o);
              } else n.aggregate ? (i.tooltip = n) : (r = n);
              return (
                t.isArray(r) && 1 === r.length && (r = r[0]),
                { customTooltipWithoutAggregatedField: r, filteredEncoding: i }
              );
            })(f),
          {
            bins: g,
            timeUnits: h,
            aggregate: v,
            groupby: y,
            encoding: b,
          } = as(m, i),
          x = "vertical" === o ? "horizontal" : "vertical",
          w = o,
          k = [...g, ...h, { aggregate: [...v, ...l], groupby: y }, ...u];
        return {
          bins: g,
          timeUnits: h,
          transform: k,
          groupby: y,
          aggregate: v,
          continuousAxisChannelDef: r,
          continuousAxis: a,
          encodingWithoutContinuousAxis: b,
          ticksOrient: x,
          boxOrient: w,
          customTooltipWithoutAggregatedField: p,
        };
      })(e, d, o),
      { color: O, size: _, ...C } = k,
      P = (e) => ms(u, b, y, e, o.boxplot),
      A = P(C),
      N = P(k),
      j = P({ ...C, ...(_ ? { size: _ } : {}) }),
      E = fs(
        [
          {
            fieldPrefix: "min-max" === p ? "upper_whisker_" : "max_",
            titlePrefix: "Max",
          },
          { fieldPrefix: "upper_box_", titlePrefix: "Q3" },
          { fieldPrefix: "mid_box_", titlePrefix: "Median" },
          { fieldPrefix: "lower_box_", titlePrefix: "Q1" },
          {
            fieldPrefix: "min-max" === p ? "lower_whisker_" : "min_",
            titlePrefix: "Min",
          },
        ],
        y,
        k
      ),
      M = {
        type: "tick",
        color: "black",
        opacity: 1,
        orient: S,
        invalid: null,
        aria: !1,
      },
      T =
        "min-max" === p
          ? E
          : fs(
              [
                { fieldPrefix: "upper_whisker_", titlePrefix: "Upper Whisker" },
                { fieldPrefix: "lower_whisker_", titlePrefix: "Lower Whisker" },
              ],
              y,
              k
            ),
      L = [
        ...A({
          partName: "rule",
          mark: { type: "rule", invalid: null, aria: !1 },
          positionPrefix: "lower_whisker",
          endPositionPrefix: "lower_box",
          extraEncoding: T,
        }),
        ...A({
          partName: "rule",
          mark: { type: "rule", invalid: null, aria: !1 },
          positionPrefix: "upper_box",
          endPositionPrefix: "upper_whisker",
          extraEncoding: T,
        }),
        ...A({
          partName: "ticks",
          mark: M,
          positionPrefix: "lower_whisker",
          extraEncoding: T,
        }),
        ...A({
          partName: "ticks",
          mark: M,
          positionPrefix: "upper_whisker",
          extraEncoding: T,
        }),
      ],
      q = [
        ...("tukey" !== p ? L : []),
        ...N({
          partName: "box",
          mark: {
            type: "bar",
            ...(f ? { size: f } : {}),
            orient: D,
            invalid: null,
            ariaRoleDescription: "box",
          },
          positionPrefix: "lower_box",
          endPositionPrefix: "upper_box",
          extraEncoding: E,
        }),
        ...j({
          partName: "median",
          mark: {
            type: "tick",
            invalid: null,
            ...(t.isObject(o.boxplot.median) && o.boxplot.median.color
              ? { color: o.boxplot.median.color }
              : {}),
            ...(f ? { size: f } : {}),
            orient: S,
            aria: !1,
          },
          positionPrefix: "mid_box",
          extraEncoding: E,
        }),
      ];
    var W;
    if ("min-max" === p)
      return {
        ...l,
        transform: (null !== (W = l.transform) && void 0 !== W ? W : []).concat(
          v
        ),
        layer: q,
      };
    const R = 'datum["lower_box_'.concat(y.field, '"]'),
      U = 'datum["upper_box_'.concat(y.field, '"]'),
      B = "(".concat(U, " - ").concat(R, ")"),
      H = "".concat(R, " - ").concat(d, " * ").concat(B),
      V = "".concat(U, " + ").concat(d, " * ").concat(B),
      I = 'datum["'.concat(y.field, '"]'),
      G = { joinaggregate: Ss(y.field), groupby: x },
      Y = {
        transform: [
          {
            filter: "("
              .concat(H, " <= ")
              .concat(I, ") && (")
              .concat(I, " <= ")
              .concat(V, ")"),
          },
          {
            aggregate: [
              {
                op: "min",
                field: y.field,
                as: "lower_whisker_".concat(y.field),
              },
              {
                op: "max",
                field: y.field,
                as: "upper_whisker_".concat(y.field),
              },
              {
                op: "min",
                field: "lower_box_".concat(y.field),
                as: "lower_box_".concat(y.field),
              },
              {
                op: "max",
                field: "upper_box_".concat(y.field),
                as: "upper_box_".concat(y.field),
              },
              ...w,
            ],
            groupby: x,
          },
        ],
        layer: L,
      },
      { tooltip: X, ...J } = C,
      { scale: Q, axis: $ } = y,
      K = ps(y),
      Z = m($, ["title"]),
      ee = gs(u, "outliers", o.boxplot, {
        transform: [
          {
            filter: "("
              .concat(I, " < ")
              .concat(H, ") || (")
              .concat(I, " > ")
              .concat(V, ")"),
          },
        ],
        mark: "point",
        encoding: {
          [b]: {
            field: y.field,
            type: y.type,
            ...(void 0 !== K ? { title: K } : {}),
            ...(void 0 !== Q ? { scale: Q } : {}),
            ...(z(Z) ? {} : { axis: Z }),
          },
          ...J,
          ...(O ? { color: O } : {}),
          ...(F ? { tooltip: F } : {}),
        },
      })[0];
    let te;
    const ne = [...g, ...h, G];
    return (
      ee
        ? (te = { transform: ne, layer: [ee, Y] })
        : ((te = Y), te.transform.unshift(...ne)),
      { ...l, layer: [te, { transform: v, layer: q }] }
    );
  }
  function Ss(e) {
    return [
      { op: "q1", field: e, as: "lower_box_".concat(e) },
      { op: "q3", field: e, as: "upper_box_".concat(e) },
    ];
  }
  const Ds = "errorbar",
    Fs = new ts(Ds, Os);
  function Os(e, t) {
    let { config: n } = t;
    e = { ...e, encoding: cs(e.encoding, n) };
    const {
      transform: i,
      continuousAxisChannelDef: o,
      continuousAxis: r,
      encodingWithoutContinuousAxis: a,
      ticksOrient: s,
      markDef: c,
      outerSpec: l,
      tooltipEncoding: u,
    } = zs(e, Ds, n);
    delete a.size;
    const d = ms(c, r, o, a, n.errorbar),
      f = c.thickness,
      p = c.size,
      m = {
        type: "tick",
        orient: s,
        aria: !1,
        ...(void 0 !== f ? { thickness: f } : {}),
        ...(void 0 !== p ? { size: p } : {}),
      },
      g = [
        ...d({
          partName: "ticks",
          mark: m,
          positionPrefix: "lower",
          extraEncoding: u,
        }),
        ...d({
          partName: "ticks",
          mark: m,
          positionPrefix: "upper",
          extraEncoding: u,
        }),
        ...d({
          partName: "rule",
          mark: {
            type: "rule",
            ariaRoleDescription: "errorbar",
            ...(void 0 !== f ? { size: f } : {}),
          },
          positionPrefix: "lower",
          endPositionPrefix: "upper",
          extraEncoding: u,
        }),
      ];
    return {
      ...l,
      transform: i,
      ...(g.length > 1 ? { layer: g } : { ...g[0] }),
    };
  }
  function _s(e, t) {
    const { encoding: n } = e;
    if (
      (function (e) {
        return (
          (pa(e.x) || pa(e.y)) &&
          !pa(e.x2) &&
          !pa(e.y2) &&
          !pa(e.xError) &&
          !pa(e.xError2) &&
          !pa(e.yError) &&
          !pa(e.yError2)
        );
      })(n)
    )
      return { orient: ys(e, t), inputType: "raw" };
    const i = (function (e) {
        return pa(e.x2) || pa(e.y2);
      })(n),
      o = (function (e) {
        return pa(e.xError) || pa(e.xError2) || pa(e.yError) || pa(e.yError2);
      })(n),
      r = n.x,
      a = n.y;
    if (i) {
      if (o)
        throw new Error(
          "".concat(
            t,
            " cannot be both type aggregated-upper-lower and aggregated-error"
          )
        );
      const e = n.x2,
        i = n.y2;
      if (pa(e) && pa(i))
        throw new Error("".concat(t, " cannot have both x2 and y2"));
      if (pa(e)) {
        if (da(r))
          return { orient: "horizontal", inputType: "aggregated-upper-lower" };
        throw new Error("Both x and x2 have to be quantitative in ".concat(t));
      }
      if (pa(i)) {
        if (da(a))
          return { orient: "vertical", inputType: "aggregated-upper-lower" };
        throw new Error("Both y and y2 have to be quantitative in ".concat(t));
      }
      throw new Error("No ranged axis");
    }
    {
      const e = n.xError,
        i = n.xError2,
        o = n.yError,
        s = n.yError2;
      if (pa(i) && !pa(e))
        throw new Error("".concat(t, " cannot have xError2 without xError"));
      if (pa(s) && !pa(o))
        throw new Error("".concat(t, " cannot have yError2 without yError"));
      if (pa(e) && pa(o))
        throw new Error(
          "".concat(
            t,
            " cannot have both xError and yError with both are quantiative"
          )
        );
      if (pa(e)) {
        if (da(r))
          return { orient: "horizontal", inputType: "aggregated-error" };
        throw new Error(
          "All x, xError, and xError2 (if exist) have to be quantitative"
        );
      }
      if (pa(o)) {
        if (da(a)) return { orient: "vertical", inputType: "aggregated-error" };
        throw new Error(
          "All y, yError, and yError2 (if exist) have to be quantitative"
        );
      }
      throw new Error("No ranged axis");
    }
  }
  function zs(e, t, n) {
    var i;
    const { mark: o, encoding: r, params: a, projection: s, ...c } = e,
      l = br(o) ? o : { type: o };
    a && ji(Jn(t));
    const { orient: u, inputType: d } = _s(e, t),
      {
        continuousAxisChannelDef: f,
        continuousAxisChannelDef2: p,
        continuousAxisChannelDefError: m,
        continuousAxisChannelDefError2: g,
        continuousAxis: h,
      } = hs(e, u, t),
      {
        errorBarSpecificAggregate: v,
        postAggregateCalculates: y,
        tooltipSummary: b,
        tooltipTitleWithFieldName: x,
      } = (function (e, t, n, i, o, r, a, s) {
        let c = [],
          l = [];
        const u = t.field;
        let d,
          f = !1;
        if ("raw" === r) {
          const t = e.center
              ? e.center
              : e.extent
              ? "iqr" === e.extent
                ? "median"
                : "mean"
              : s.errorbar.center,
            n = e.extent ? e.extent : "mean" === t ? "stderr" : "iqr";
          if (
            (("median" === t) != ("iqr" === n) &&
              ji(
                (function (e, t, n) {
                  return ""
                    .concat(e, " is not usually used with ")
                    .concat(t, " for ")
                    .concat(n, ".");
                })(t, n, a)
              ),
            "stderr" === n || "stdev" === n)
          )
            (c = [
              { op: n, field: u, as: "extent_".concat(u) },
              { op: t, field: u, as: "center_".concat(u) },
            ]),
              (l = [
                {
                  calculate: 'datum["center_'
                    .concat(u, '"] + datum["extent_')
                    .concat(u, '"]'),
                  as: "upper_".concat(u),
                },
                {
                  calculate: 'datum["center_'
                    .concat(u, '"] - datum["extent_')
                    .concat(u, '"]'),
                  as: "lower_".concat(u),
                },
              ]),
              (d = [
                { fieldPrefix: "center_", titlePrefix: T(t) },
                { fieldPrefix: "upper_", titlePrefix: Cs(t, n, "+") },
                { fieldPrefix: "lower_", titlePrefix: Cs(t, n, "-") },
              ]),
              (f = !0);
          else {
            let e, t, i;
            "ci" === n
              ? ((e = "mean"), (t = "ci0"), (i = "ci1"))
              : ((e = "median"), (t = "q1"), (i = "q3")),
              (c = [
                { op: t, field: u, as: "lower_".concat(u) },
                { op: i, field: u, as: "upper_".concat(u) },
                { op: e, field: u, as: "center_".concat(u) },
              ]),
              (d = [
                {
                  fieldPrefix: "upper_",
                  titlePrefix: Ca(
                    { field: u, aggregate: i, type: "quantitative" },
                    s,
                    { allowDisabling: !1 }
                  ),
                },
                {
                  fieldPrefix: "lower_",
                  titlePrefix: Ca(
                    { field: u, aggregate: t, type: "quantitative" },
                    s,
                    { allowDisabling: !1 }
                  ),
                },
                {
                  fieldPrefix: "center_",
                  titlePrefix: Ca(
                    { field: u, aggregate: e, type: "quantitative" },
                    s,
                    { allowDisabling: !1 }
                  ),
                },
              ]);
          }
        } else {
          (e.center || e.extent) &&
            ji(
              ((p = e.center),
              (m = e.extent),
              ""
                .concat(m ? "extent " : "")
                .concat(m && p ? "and " : "")
                .concat(p ? "center " : "")
                .concat(
                  m && p ? "are " : "is ",
                  "not needed when data are aggregated."
                ))
            ),
            "aggregated-upper-lower" === r
              ? ((d = []),
                (l = [
                  {
                    calculate: 'datum["'.concat(n.field, '"]'),
                    as: "upper_".concat(u),
                  },
                  {
                    calculate: 'datum["'.concat(u, '"]'),
                    as: "lower_".concat(u),
                  },
                ]))
              : "aggregated-error" === r &&
                ((d = [{ fieldPrefix: "", titlePrefix: u }]),
                (l = [
                  {
                    calculate: 'datum["'
                      .concat(u, '"] + datum["')
                      .concat(i.field, '"]'),
                    as: "upper_".concat(u),
                  },
                ]),
                o
                  ? l.push({
                      calculate: 'datum["'
                        .concat(u, '"] + datum["')
                        .concat(o.field, '"]'),
                      as: "lower_".concat(u),
                    })
                  : l.push({
                      calculate: 'datum["'
                        .concat(u, '"] - datum["')
                        .concat(i.field, '"]'),
                      as: "lower_".concat(u),
                    }));
          for (const e of l)
            d.push({
              fieldPrefix: e.as.substring(0, 6),
              titlePrefix: U(U(e.calculate, 'datum["', ""), '"]', ""),
            });
        }
        var p, m;
        return {
          postAggregateCalculates: l,
          errorBarSpecificAggregate: c,
          tooltipSummary: d,
          tooltipTitleWithFieldName: f,
        };
      })(l, f, p, m, g, d, t, n),
      {
        [h]: w,
        ["x" === h ? "x2" : "y2"]: k,
        ["x" === h ? "xError" : "yError"]: S,
        ["x" === h ? "xError2" : "yError2"]: D,
        ...F
      } = r,
      {
        bins: O,
        timeUnits: _,
        aggregate: z,
        groupby: C,
        encoding: P,
      } = as(F, n),
      A = [...z, ...v],
      N = "raw" !== d ? [] : C,
      j = fs(b, f, P, x);
    return {
      transform: [
        ...(null !== (i = c.transform) && void 0 !== i ? i : []),
        ...O,
        ..._,
        ...(0 === A.length ? [] : [{ aggregate: A, groupby: N }]),
        ...y,
      ],
      groupby: N,
      continuousAxisChannelDef: f,
      continuousAxis: h,
      encodingWithoutContinuousAxis: P,
      ticksOrient: "vertical" === u ? "horizontal" : "vertical",
      markDef: l,
      outerSpec: c,
      tooltipEncoding: j,
    };
  }
  function Cs(e, t, n) {
    return "".concat(T(e), " ").concat(n, " ").concat(t);
  }
  const Ps = "errorband",
    As = new ts(Ps, Ns);
  function Ns(e, t) {
    let { config: n } = t;
    e = { ...e, encoding: cs(e.encoding, n) };
    const {
        transform: i,
        continuousAxisChannelDef: o,
        continuousAxis: r,
        encodingWithoutContinuousAxis: a,
        markDef: s,
        outerSpec: c,
        tooltipEncoding: l,
      } = zs(e, Ps, n),
      u = s,
      d = ms(u, r, o, a, n.errorband),
      f = void 0 !== e.encoding.x && void 0 !== e.encoding.y;
    let p = { type: f ? "area" : "rect" },
      m = { type: f ? "line" : "rule" };
    const g = {
      ...(u.interpolate ? { interpolate: u.interpolate } : {}),
      ...(u.tension && u.interpolate ? { tension: u.tension } : {}),
    };
    return (
      f
        ? ((p = { ...p, ...g, ariaRoleDescription: "errorband" }),
          (m = { ...m, ...g, aria: !1 }))
        : u.interpolate
        ? ji(Oi("interpolate"))
        : u.tension && ji(Oi("tension")),
      {
        ...c,
        transform: i,
        layer: [
          ...d({
            partName: "band",
            mark: p,
            positionPrefix: "lower",
            endPositionPrefix: "upper",
            extraEncoding: l,
          }),
          ...d({
            partName: "borders",
            mark: m,
            positionPrefix: "lower",
            extraEncoding: l,
          }),
          ...d({
            partName: "borders",
            mark: m,
            positionPrefix: "upper",
            extraEncoding: l,
          }),
        ],
      }
    );
  }
  const js = {};
  function Es(e, t, n) {
    const i = new ts(e, t);
    js[e] = { normalizer: i, parts: n };
  }
  Es(bs, ks, ["box", "median", "outliers", "rule", "ticks"]),
    Es(Ds, Os, ["ticks", "rule"]),
    Es(Ps, Ns, ["band", "borders"]);
  const Ms = [
      "gradientHorizontalMaxLength",
      "gradientHorizontalMinLength",
      "gradientVerticalMaxLength",
      "gradientVerticalMinLength",
      "unselectedOpacity",
    ],
    Ts = {
      titleAlign: "align",
      titleAnchor: "anchor",
      titleAngle: "angle",
      titleBaseline: "baseline",
      titleColor: "color",
      titleFont: "font",
      titleFontSize: "fontSize",
      titleFontStyle: "fontStyle",
      titleFontWeight: "fontWeight",
      titleLimit: "limit",
      titleLineHeight: "lineHeight",
      titleOrient: "orient",
      titlePadding: "offset",
    },
    Ls = {
      labelAlign: "align",
      labelAnchor: "anchor",
      labelAngle: "angle",
      labelBaseline: "baseline",
      labelColor: "color",
      labelFont: "font",
      labelFontSize: "fontSize",
      labelFontStyle: "fontStyle",
      labelFontWeight: "fontWeight",
      labelLimit: "limit",
      labelLineHeight: "lineHeight",
      labelOrient: "orient",
      labelPadding: "offset",
    },
    qs = C(Ts),
    Ws = C(Ls),
    Rs = C({ header: 1, headerRow: 1, headerColumn: 1, headerFacet: 1 }),
    Us = [
      "size",
      "shape",
      "fill",
      "stroke",
      "strokeDash",
      "strokeWidth",
      "opacity",
    ],
    Bs = "_vgsid_",
    Hs = {
      point: {
        on: "click",
        fields: [Bs],
        toggle: "event.shiftKey",
        resolve: "global",
        clear: "dblclick",
      },
      interval: {
        on: "[mousedown, window:mouseup] > window:mousemove!",
        encodings: ["x", "y"],
        translate: "[mousedown, window:mouseup] > window:mousemove!",
        zoom: "wheel!",
        mark: { fill: "#333", fillOpacity: 0.125, stroke: "white" },
        resolve: "global",
        clear: "dblclick",
      },
    };
  function Vs(e) {
    return !(!e || ("legend" !== e && !e.legend));
  }
  function Is(e) {
    return Vs(e) && t.isObject(e);
  }
  function Gs(e) {
    return !!e.select;
  }
  function Ys(e) {
    const t = [];
    for (const n of e || []) {
      if (Gs(n)) continue;
      const { expr: e, bind: i, ...o } = n;
      if (i && e) {
        const n = { ...o, bind: i, init: e };
        t.push(n);
      } else {
        const n = {
          ...o,
          ...(e ? { update: e } : {}),
          ...(i ? { bind: i } : {}),
        };
        t.push(n);
      }
    }
    return t;
  }
  function Xs(e) {
    return "concat" in e;
  }
  function Js(e) {
    return "vconcat" in e;
  }
  function Qs(e) {
    return "hconcat" in e;
  }
  const $s = ["background", "padding"];
  function Ks(e, t) {
    const n = {};
    for (const t of $s) e && void 0 !== e[t] && (n[t] = kn(e[t]));
    return t && (n.params = e.params), n;
  }
  function Zs(e) {
    let { step: t, offsetIsDiscrete: n } = e;
    var i;
    return n
      ? null !== (i = t.for) && void 0 !== i
        ? i
        : "offset"
      : "position";
  }
  function ec(e) {
    return t.isObject(e) && void 0 !== e.step;
  }
  function tc(e) {
    return e.view || e.width || e.height;
  }
  const nc = C({ align: 1, bounds: 1, center: 1, columns: 1, spacing: 1 });
  function ic(e, t) {
    var n;
    return null !== (n = e[t]) && void 0 !== n
      ? n
      : e["width" === t ? "continuousWidth" : "continuousHeight"];
  }
  function oc(e, t) {
    const n = rc(e, t);
    return ec(n) ? n.step : ac;
  }
  function rc(e, t) {
    var n;
    return V(
      null !== (n = e[t]) && void 0 !== n
        ? n
        : e["width" === t ? "discreteWidth" : "discreteHeight"],
      { step: e.step }
    );
  }
  const ac = 20,
    sc = {
      background: "white",
      padding: 5,
      timeFormat: "%b %d, %Y",
      countTitle: "Count of Records",
      view: { continuousWidth: 200, continuousHeight: 200, step: ac },
      mark: { color: "#4c78a8", invalid: "filter", timeUnitBandSize: 1 },
      arc: {},
      area: {},
      bar: Fr,
      circle: {},
      geoshape: {},
      image: {},
      line: {},
      point: {},
      rect: Or,
      rule: { color: "black" },
      square: {},
      text: { color: "black" },
      tick: { thickness: 1 },
      trail: {},
      boxplot: {
        size: 14,
        extent: 1.5,
        box: {},
        median: { color: "white" },
        outliers: {},
        rule: {},
        ticks: null,
      },
      errorbar: { center: "mean", rule: !0, ticks: !1 },
      errorband: { band: { opacity: 0.3 }, borders: !1 },
      scale: {
        pointPadding: 0.5,
        barBandPaddingInner: 0.1,
        rectBandPaddingInner: 0,
        bandWithNestedOffsetPaddingInner: 0.2,
        bandWithNestedOffsetPaddingOuter: 0.2,
        minBandSize: 2,
        minFontSize: 8,
        maxFontSize: 40,
        minOpacity: 0.3,
        maxOpacity: 0.8,
        minSize: 9,
        minStrokeWidth: 1,
        maxStrokeWidth: 4,
        quantileCount: 4,
        quantizeCount: 4,
      },
      projection: {},
      legend: {
        gradientHorizontalMaxLength: 200,
        gradientHorizontalMinLength: 100,
        gradientVerticalMaxLength: 200,
        gradientVerticalMinLength: 64,
        unselectedOpacity: 0.35,
      },
      header: { titlePadding: 10, labelPadding: 10 },
      headerColumn: {},
      headerRow: {},
      headerFacet: {},
      selection: Hs,
      style: {},
      title: {},
      facet: { spacing: 20 },
      concat: { spacing: 20 },
    },
    cc = [
      "#4c78a8",
      "#f58518",
      "#e45756",
      "#72b7b2",
      "#54a24b",
      "#eeca3b",
      "#b279a2",
      "#ff9da6",
      "#9d755d",
      "#bab0ac",
    ],
    lc = {
      text: 11,
      guideLabel: 10,
      guideTitle: 11,
      groupTitle: 13,
      groupSubtitle: 12,
    },
    uc = {
      blue: cc[0],
      orange: cc[1],
      red: cc[2],
      teal: cc[3],
      green: cc[4],
      yellow: cc[5],
      purple: cc[6],
      pink: cc[7],
      brown: cc[8],
      gray0: "#000",
      gray1: "#111",
      gray2: "#222",
      gray3: "#333",
      gray4: "#444",
      gray5: "#555",
      gray6: "#666",
      gray7: "#777",
      gray8: "#888",
      gray9: "#999",
      gray10: "#aaa",
      gray11: "#bbb",
      gray12: "#ccc",
      gray13: "#ddd",
      gray14: "#eee",
      gray15: "#fff",
    };
  function dc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return {
      signals: [{ name: "color", value: t.isObject(e) ? { ...uc, ...e } : uc }],
      mark: { color: { signal: "color.blue" } },
      rule: { color: { signal: "color.gray0" } },
      text: { color: { signal: "color.gray0" } },
      style: {
        "guide-label": { fill: { signal: "color.gray0" } },
        "guide-title": { fill: { signal: "color.gray0" } },
        "group-title": { fill: { signal: "color.gray0" } },
        "group-subtitle": { fill: { signal: "color.gray0" } },
        cell: { stroke: { signal: "color.gray8" } },
      },
      axis: {
        domainColor: { signal: "color.gray13" },
        gridColor: { signal: "color.gray8" },
        tickColor: { signal: "color.gray13" },
      },
      range: {
        category: [
          { signal: "color.blue" },
          { signal: "color.orange" },
          { signal: "color.red" },
          { signal: "color.teal" },
          { signal: "color.green" },
          { signal: "color.yellow" },
          { signal: "color.purple" },
          { signal: "color.pink" },
          { signal: "color.brown" },
          { signal: "color.grey8" },
        ],
      },
    };
  }
  function fc(e) {
    return {
      signals: [
        { name: "fontSize", value: t.isObject(e) ? { ...lc, ...e } : lc },
      ],
      text: { fontSize: { signal: "fontSize.text" } },
      style: {
        "guide-label": { fontSize: { signal: "fontSize.guideLabel" } },
        "guide-title": { fontSize: { signal: "fontSize.guideTitle" } },
        "group-title": { fontSize: { signal: "fontSize.groupTitle" } },
        "group-subtitle": { fontSize: { signal: "fontSize.groupSubtitle" } },
      },
    };
  }
  function pc(e) {
    return {
      text: { font: e },
      style: {
        "guide-label": { font: e },
        "guide-title": { font: e },
        "group-title": { font: e },
        "group-subtitle": { font: e },
      },
    };
  }
  function mc(e) {
    const t = C(e || {}),
      n = {};
    for (const i of t) {
      const t = e[i];
      n[i] = Ya(t) ? wn(t) : kn(t);
    }
    return n;
  }
  function gc(e) {
    const t = C(e),
      n = {};
    for (const i of t) n[i] = mc(e[i]);
    return n;
  }
  const hc = [
    ...kr,
    ...Za,
    ...Rs,
    "background",
    "padding",
    "legend",
    "lineBreak",
    "scale",
    "style",
    "title",
    "view",
  ];
  function vc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const { color: n, font: i, fontSize: o, selection: r, ...a } = e,
      s = t.mergeConfig(
        {},
        d(sc),
        i ? pc(i) : {},
        n ? dc(n) : {},
        o ? fc(o) : {},
        a || {}
      );
    r && t.writeConfig(s, "selection", r, !0);
    const c = m(s, hc);
    for (const e of ["background", "lineBreak", "padding"])
      s[e] && (c[e] = kn(s[e]));
    for (const e of kr) s[e] && (c[e] = fn(s[e]));
    for (const e of Za) s[e] && (c[e] = mc(s[e]));
    for (const e of Rs) s[e] && (c[e] = fn(s[e]));
    return (
      s.legend && (c.legend = fn(s.legend)),
      s.scale && (c.scale = fn(s.scale)),
      s.style && (c.style = gc(s.style)),
      s.title && (c.title = fn(s.title)),
      s.view && (c.view = fn(s.view)),
      c
    );
  }
  const yc = new Set(["view", ...yr]),
    bc = [
      "color",
      "fontSize",
      "background",
      "padding",
      "facet",
      "concat",
      "numberFormat",
      "timeFormat",
      "countTitle",
      "header",
      "axisQuantitative",
      "axisTemporal",
      "axisDiscrete",
      "axisPoint",
      "axisXBand",
      "axisXPoint",
      "axisXDiscrete",
      "axisXQuantitative",
      "axisXTemporal",
      "axisYBand",
      "axisYPoint",
      "axisYDiscrete",
      "axisYQuantitative",
      "axisYTemporal",
      "scale",
      "selection",
      "overlay",
    ],
    xc = {
      view: [
        "continuousWidth",
        "continuousHeight",
        "discreteWidth",
        "discreteHeight",
        "step",
      ],
      area: ["line", "point"],
      bar: ["binSpacing", "continuousBandSize", "discreteBandSize"],
      rect: ["binSpacing", "continuousBandSize", "discreteBandSize"],
      line: ["point"],
      tick: ["bandSize", "thickness"],
    };
  function wc(e) {
    e = d(e);
    for (const t of bc) delete e[t];
    if (e.axis) for (const t in e.axis) Ya(e.axis[t]) && delete e.axis[t];
    if (e.legend) for (const t of Ms) delete e.legend[t];
    if (e.mark) {
      for (const t of wr) delete e.mark[t];
      e.mark.tooltip && t.isObject(e.mark.tooltip) && delete e.mark.tooltip;
    }
    e.params &&
      ((e.signals = (e.signals || []).concat(Ys(e.params))), delete e.params);
    for (const t of yc) {
      for (const n of wr) delete e[t][n];
      const n = xc[t];
      if (n) for (const i of n) delete e[t][i];
      kc(e, t);
    }
    for (const t of C(js)) delete e[t];
    !(function (e) {
      const {
        titleMarkConfig: t,
        subtitleMarkConfig: n,
        subtitle: i,
      } = pn(e.title);
      z(t) || (e.style["group-title"] = { ...e.style["group-title"], ...t });
      z(n) ||
        (e.style["group-subtitle"] = { ...e.style["group-subtitle"], ...n });
      z(i) ? delete e.title : (e.title = i);
    })(e);
    for (const n in e) t.isObject(e[n]) && z(e[n]) && delete e[n];
    return z(e) ? void 0 : e;
  }
  function kc(e, t, n, i) {
    var o;
    "view" === t && (n = "cell");
    const r = {
      ...(i ? e[t][i] : e[t]),
      ...e.style[null !== (o = n) && void 0 !== o ? o : t],
    };
    var a;
    z(r) || (e.style[null !== (a = n) && void 0 !== a ? a : t] = r);
    i || delete e[t];
  }
  function Sc(e) {
    return "layer" in e;
  }
  class Dc {
    map(e, t) {
      return Zr(e)
        ? this.mapFacet(e, t)
        : (function (e) {
            return "repeat" in e;
          })(e)
        ? this.mapRepeat(e, t)
        : Qs(e)
        ? this.mapHConcat(e, t)
        : Js(e)
        ? this.mapVConcat(e, t)
        : Xs(e)
        ? this.mapConcat(e, t)
        : this.mapLayerOrUnit(e, t);
    }
    mapLayerOrUnit(e, t) {
      if (Sc(e)) return this.mapLayer(e, t);
      if (es(e)) return this.mapUnit(e, t);
      throw new Error(Un(e));
    }
    mapLayer(e, t) {
      return { ...e, layer: e.layer.map((e) => this.mapLayerOrUnit(e, t)) };
    }
    mapHConcat(e, t) {
      return { ...e, hconcat: e.hconcat.map((e) => this.map(e, t)) };
    }
    mapVConcat(e, t) {
      return { ...e, vconcat: e.vconcat.map((e) => this.map(e, t)) };
    }
    mapConcat(e, t) {
      const { concat: n, ...i } = e;
      return { ...i, concat: n.map((e) => this.map(e, t)) };
    }
    mapFacet(e, t) {
      return { ...e, spec: this.map(e.spec, t) };
    }
    mapRepeat(e, t) {
      return { ...e, spec: this.map(e.spec, t) };
    }
  }
  const Fc = { zero: 1, center: 1, normalize: 1 };
  function Oc(e) {
    return e in Fc;
  }
  const _c = new Set([nr, or, ir, lr, sr, pr, mr, ar, ur, dr]),
    zc = new Set([or, ir, nr]);
  function Cc(e) {
    return ca(e) && "quantitative" === la(e) && !e.bin;
  }
  function Pc(e, t) {
    const n = "x" === t ? "y" : "radius",
      i = e[t],
      o = e[n];
    if (ca(i) && ca(o))
      if (Cc(i) && Cc(o)) {
        if (i.stack) return t;
        if (o.stack) return n;
        const e = ca(i) && !!i.aggregate;
        if (e !== (ca(o) && !!o.aggregate)) return e ? t : n;
        {
          var r, a;
          const e = null === (r = i.scale) || void 0 === r ? void 0 : r.type,
            s = null === (a = o.scale) || void 0 === a ? void 0 : a.type;
          if (e && "linear" !== e) return n;
          if (s && "linear" !== s) return t;
        }
      } else {
        if (Cc(i)) return t;
        if (Cc(o)) return n;
      }
    else {
      if (Cc(i)) return t;
      if (Cc(o)) return n;
    }
  }
  function Ac(e) {
    switch (e) {
      case "x":
        return "y";
      case "y":
        return "x";
      case "theta":
        return "radius";
      case "radius":
        return "theta";
    }
  }
  function Nc(e, n) {
    var i, o;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const a = br(e) ? e.type : e;
    if (!_c.has(a)) return null;
    const s = Pc(n, "x") || Pc(n, "theta");
    if (!s) return null;
    const c = n[s],
      l = ca(c) ? ka(c, {}) : void 0,
      u = Ac(s),
      d = [],
      f = new Set();
    if (n[u]) {
      const e = n[u],
        t = ca(e) ? ka(e, {}) : void 0;
      t && t !== l && (d.push(u), f.add(t));
      const i = "x" === u ? "xOffset" : "yOffset",
        o = n[i],
        r = ca(o) ? ka(o, {}) : void 0;
      r && r !== l && (d.push(i), f.add(r));
    }
    const p = kt.reduce((e, i) => {
      if ("tooltip" !== i && ns(n, i)) {
        const o = n[i];
        for (const n of t.array(o)) {
          const t = Ea(n);
          if (t.aggregate) continue;
          const o = ka(t, {});
          (o && f.has(o)) || e.push({ channel: i, fieldDef: t });
        }
      }
      return e;
    }, []);
    let m;
    if (
      (void 0 !== c.stack
        ? (m = t.isBoolean(c.stack) ? (c.stack ? "zero" : null) : c.stack)
        : zc.has(a) && (m = "zero"),
      !m || !Oc(m))
    )
      return null;
    if (rs(n) && 0 === p.length) return null;
    if (
      null != c &&
      null !== (i = c.scale) &&
      void 0 !== i &&
      i.type &&
      (null == c || null === (o = c.scale) || void 0 === o
        ? void 0
        : o.type) !== ko
    ) {
      if (r.disallowNonLinearStack) return null;
      ji(Si(c.scale.type));
    }
    return pa(n[nt(s)])
      ? (void 0 !== c.stack && ji(ki(s)), null)
      : (ca(c) && c.aggregate && !nn.has(c.aggregate) && ji(Di(c.aggregate)),
        {
          groupbyChannels: d,
          groupbyFields: f,
          fieldChannel: s,
          impute: null !== c.impute && hr(a),
          stackBy: p,
          offset: m,
        });
  }
  function jc(e) {
    const { point: t, line: n, ...i } = e;
    return C(i).length > 1 ? i : i.type;
  }
  function Ec(e) {
    for (const t of ["line", "area", "rule", "trail"])
      e[t] && (e = { ...e, [t]: m(e[t], ["point", "line"]) });
    return e;
  }
  function Mc(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = arguments.length > 2 ? arguments[2] : void 0;
    return "transparent" === e.point
      ? { opacity: 0 }
      : e.point
      ? t.isObject(e.point)
        ? e.point
        : {}
      : void 0 !== e.point
      ? null
      : n.point || i.shape
      ? t.isObject(n.point)
        ? n.point
        : {}
      : void 0;
  }
  function Tc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e.line
      ? !0 === e.line
        ? {}
        : e.line
      : void 0 !== e.line
      ? null
      : t.line
      ? !0 === t.line
        ? {}
        : t.line
      : void 0;
  }
  class Lc {
    constructor() {
      Ln(this, "name", "path-overlay");
    }
    hasMatchingType(e, t) {
      if (es(e)) {
        const { mark: n, encoding: i } = e,
          o = br(n) ? n : { type: n };
        switch (o.type) {
          case "line":
          case "rule":
          case "trail":
            return !!Mc(o, t[o.type], i);
          case "area":
            return !!Mc(o, t[o.type], i) || !!Tc(o, t[o.type]);
        }
      }
      return !1;
    }
    run(e, t, n) {
      const { config: i } = t,
        { params: o, projection: r, mark: a, encoding: s, ...c } = e,
        l = cs(s, i),
        u = br(a) ? a : { type: a },
        d = Mc(u, i[u.type], l),
        f = "area" === u.type && Tc(u, i[u.type]),
        g = [
          {
            ...(o ? { params: o } : {}),
            mark: jc({
              ...("area" === u.type &&
              void 0 === u.opacity &&
              void 0 === u.fillOpacity
                ? { opacity: 0.7 }
                : {}),
              ...u,
            }),
            encoding: m(l, ["shape"]),
          },
        ],
        h = Nc(u, l);
      let v = l;
      if (h) {
        const { fieldChannel: e, offset: t } = h;
        v = { ...l, [e]: { ...l[e], ...(t ? { stack: t } : {}) } };
      }
      return (
        f &&
          g.push({
            ...(r ? { projection: r } : {}),
            mark: {
              type: "line",
              ...p(u, ["clip", "interpolate", "tension", "tooltip"]),
              ...f,
            },
            encoding: v,
          }),
        d &&
          g.push({
            ...(r ? { projection: r } : {}),
            mark: {
              type: "point",
              opacity: 1,
              filled: !0,
              ...p(u, ["clip", "tooltip"]),
              ...d,
            },
            encoding: v,
          }),
        n({ ...c, layer: g }, { ...t, config: Ec(i) })
      );
    }
  }
  function qc(e, t) {
    return t ? ($r(e) ? Vc(e, t) : Uc(e, t)) : e;
  }
  function Wc(e, t) {
    return t ? Vc(e, t) : e;
  }
  function Rc(e, n, i) {
    const o = n[e];
    return (r = o) && !t.isString(r) && "repeat" in r
      ? o.repeat in i
        ? { ...n, [e]: i[o.repeat] }
        : void ji(
            (function (e) {
              return 'Unknown repeated value "'.concat(e, '".');
            })(o.repeat)
          )
      : n;
    var r;
  }
  function Uc(e, t) {
    if (void 0 !== (e = Rc("field", e, t))) {
      if (null === e) return null;
      if (ta(e) && Jr(e.sort)) {
        const n = Rc("field", e.sort, t);
        e = { ...e, ...(n ? { sort: n } : {}) };
      }
      return e;
    }
  }
  function Bc(e, t) {
    if (ca(e)) return Uc(e, t);
    {
      const n = Rc("datum", e, t);
      return n === e || n.type || (n.type = "nominal"), n;
    }
  }
  function Hc(e, t) {
    if (!pa(e)) {
      if (sa(e)) {
        const n = Bc(e.condition, t);
        if (n) return { ...e, condition: n };
        {
          const { condition: t, ...n } = e;
          return n;
        }
      }
      return e;
    }
    {
      const n = Bc(e, t);
      if (n) return n;
      if (ra(e)) return { condition: e.condition };
    }
  }
  function Vc(e, n) {
    const i = {};
    for (const o in e)
      if (t.hasOwnProperty(e, o)) {
        const r = e[o];
        if (t.isArray(r)) i[o] = r.map((e) => Hc(e, n)).filter((e) => e);
        else {
          const e = Hc(r, n);
          void 0 !== e && (i[o] = e);
        }
      }
    return i;
  }
  class Ic {
    constructor() {
      Ln(this, "name", "RuleForRangedLine");
    }
    hasMatchingType(e) {
      if (es(e)) {
        const { encoding: t, mark: n } = e;
        if ("line" === n || (br(n) && "line" === n.type))
          for (const e of Ke) {
            const n = t[et(e)];
            if (t[e] && ((ca(n) && !sn(n.bin)) || ua(n))) return !0;
          }
      }
      return !1;
    }
    run(e, n, i) {
      const { encoding: o, mark: r } = e;
      var a, s;
      return (
        ji(
          ((a = !!o.x2),
          (s = !!o.y2),
          "Line mark is for continuous lines and thus cannot be used with ".concat(
            a && s ? "x2 and y2" : a ? "x2" : "y2",
            ". We will use the rule mark (line segments) instead."
          ))
        ),
        i({ ...e, mark: t.isObject(r) ? { ...r, type: "rule" } : "rule" }, n)
      );
    }
  }
  function Gc(e) {
    let { parentEncoding: n, encoding: i = {}, layer: o } = e,
      r = {};
    if (n) {
      const e = new Set([...C(n), ...C(i)]);
      for (const a of e) {
        const e = i[a],
          s = n[a];
        if (pa(e)) {
          const t = { ...s, ...e };
          r[a] = t;
        } else
          sa(e)
            ? (r[a] = { ...e, condition: { ...s, ...e.condition } })
            : e || null === e
            ? (r[a] = e)
            : (o || ga(s) || gn(s) || pa(s) || t.isArray(s)) && (r[a] = s);
      }
    } else r = i;
    return !r || z(r) ? void 0 : r;
  }
  function Yc(e) {
    const { parentProjection: t, projection: n } = e;
    return (
      t &&
        n &&
        ji(
          (function (e) {
            const { parentProjection: t, projection: n } = e;
            return "Layer's shared projection "
              .concat(g(t), " is overridden by a child projection ")
              .concat(g(n), ".");
          })({ parentProjection: t, projection: n })
        ),
      null != n ? n : t
    );
  }
  function Xc(e) {
    return "filter" in e;
  }
  function Jc(e) {
    return "lookup" in e;
  }
  function Qc(e) {
    return "pivot" in e;
  }
  function $c(e) {
    return "density" in e;
  }
  function Kc(e) {
    return "quantile" in e;
  }
  function Zc(e) {
    return "regression" in e;
  }
  function el(e) {
    return "loess" in e;
  }
  function tl(e) {
    return "sample" in e;
  }
  function nl(e) {
    return "window" in e;
  }
  function il(e) {
    return "joinaggregate" in e;
  }
  function ol(e) {
    return "flatten" in e;
  }
  function rl(e) {
    return "calculate" in e;
  }
  function al(e) {
    return "bin" in e;
  }
  function sl(e) {
    return "impute" in e;
  }
  function cl(e) {
    return "timeUnit" in e;
  }
  function ll(e) {
    return "aggregate" in e;
  }
  function ul(e) {
    return "stack" in e;
  }
  function dl(e) {
    return "fold" in e;
  }
  function fl(e, t) {
    const { transform: n, ...i } = e;
    if (n) {
      return {
        ...i,
        transform: n.map((e) => {
          if (Xc(e)) return { filter: gl(e, t) };
          if (al(e) && cn(e.bin)) return { ...e, bin: ml(e.bin) };
          if (Jc(e)) {
            const { selection: t, ...n } = e.from;
            return t ? { ...e, from: { param: t, ...n } } : e;
          }
          return e;
        }),
      };
    }
    return e;
  }
  function pl(e, n) {
    var i, o;
    const r = d(e);
    if (
      (ca(r) && cn(r.bin) && (r.bin = ml(r.bin)),
      ha(r) &&
        null !== (i = r.scale) &&
        void 0 !== i &&
        null !== (o = i.domain) &&
        void 0 !== o &&
        o.selection)
    ) {
      const { selection: e, ...t } = r.scale.domain;
      r.scale.domain = { ...t, ...(e ? { param: e } : {}) };
    }
    if (ra(r))
      if (t.isArray(r.condition))
        r.condition = r.condition.map((e) => {
          const { selection: t, param: i, test: o, ...r } = e;
          return i ? e : { ...r, test: gl(e, n) };
        });
      else {
        const { selection: e, param: t, test: i, ...o } = pl(r.condition, n);
        r.condition = t ? r.condition : { ...o, test: gl(r.condition, n) };
      }
    return r;
  }
  function ml(e) {
    const t = e.extent;
    if (null != t && t.selection) {
      const { selection: n, ...i } = t;
      return { ...e, extent: { ...i, param: n } };
    }
    return e;
  }
  function gl(e, t) {
    const n = (e) =>
      l(e, (e) => {
        var n, i, o;
        const r = {
          param: e,
          empty: null === (n = t.emptySelections[e]) || void 0 === n || n,
        };
        return (
          (null !== (o = (i = t.selectionPredicates)[e]) && void 0 !== o) ||
            (i[e] = []),
          t.selectionPredicates[e].push(r),
          r
        );
      });
    return e.selection
      ? n(e.selection)
      : l(e.test || e.filter, (e) => (e.selection ? n(e.selection) : e));
  }
  class hl extends Dc {
    map(e, t) {
      var n;
      const i = null !== (n = t.selections) && void 0 !== n ? n : [];
      if (e.params && !es(e)) {
        const t = [];
        for (const n of e.params) Gs(n) ? i.push(n) : t.push(n);
        e.params = t;
      }
      return (t.selections = i), super.map(e, vl(e, t));
    }
    mapUnit(e, n) {
      var i;
      const o = n.selections;
      if (!o || !o.length) return e;
      const r = (null !== (i = n.path) && void 0 !== i ? i : []).concat(e.name),
        a = [];
      for (const n of o)
        if (n.views && n.views.length)
          for (const i of n.views)
            ((t.isString(i) && (i === e.name || r.indexOf(i) >= 0)) ||
              (t.isArray(i) &&
                i
                  .map((e) => r.indexOf(e))
                  .every(
                    (e, t, n) => -1 !== e && (0 === t || e > n[t - 1])
                  ))) &&
              a.push(n);
        else a.push(n);
      return a.length && (e.params = a), e;
    }
  }
  for (const e of [
    "mapFacet",
    "mapRepeat",
    "mapHConcat",
    "mapVConcat",
    "mapLayer",
  ]) {
    const t = hl.prototype[e];
    hl.prototype[e] = function (e, n) {
      return t.call(this, e, vl(e, n));
    };
  }
  function vl(e, t) {
    var n;
    return e.name
      ? {
          ...t,
          path: (null !== (n = t.path) && void 0 !== n ? n : []).concat(e.name),
        }
      : t;
  }
  function yl(e, t) {
    void 0 === t && (t = vc(e.config));
    const n = (function (e) {
        const t = {
          config:
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        };
        return wl.map(bl.map(xl.map(e, t), t), t);
      })(e, t),
      { width: i, height: o } = e,
      r = (function (e, t, n) {
        let { width: i, height: o } = t;
        const r = es(e) || Sc(e),
          a = {};
        r
          ? "container" == i && "container" == o
            ? ((a.type = "fit"), (a.contains = "padding"))
            : "container" == i
            ? ((a.type = "fit-x"), (a.contains = "padding"))
            : "container" == o && ((a.type = "fit-y"), (a.contains = "padding"))
          : ("container" == i && (ji(Hn("width")), (i = void 0)),
            "container" == o && (ji(Hn("height")), (o = void 0)));
        const s = {
          type: "pad",
          ...a,
          ...(n ? kl(n.autosize) : {}),
          ...kl(e.autosize),
        };
        "fit" !== s.type || r || (ji(Bn), (s.type = "pad"));
        "container" == i &&
          "fit" != s.type &&
          "fit-x" != s.type &&
          ji(Vn("width"));
        "container" == o &&
          "fit" != s.type &&
          "fit-y" != s.type &&
          ji(Vn("height"));
        if (u(s, { type: "pad" })) return;
        return s;
      })(n, { width: i, height: o, autosize: e.autosize }, t);
    return { ...n, ...(r ? { autosize: r } : {}) };
  }
  const bl = new (class extends Dc {
      constructor() {
        super(...arguments),
          Ln(this, "nonFacetUnitNormalizers", [xs, Fs, As, new Lc(), new Ic()]);
      }
      map(e, t) {
        if (es(e)) {
          const n = ns(e.encoding, $),
            i = ns(e.encoding, K),
            o = ns(e.encoding, Z);
          if (n || i || o) return this.mapFacetedUnit(e, t);
        }
        return super.map(e, t);
      }
      mapUnit(e, t) {
        const { parentEncoding: n, parentProjection: i } = t,
          o = Wc(e.encoding, t.repeater),
          r = { ...e, ...(o ? { encoding: o } : {}) };
        if (n || i) return this.mapUnitWithParentEncodingOrProjection(r, t);
        const a = this.mapLayerOrUnit.bind(this);
        for (const e of this.nonFacetUnitNormalizers)
          if (e.hasMatchingType(r, t.config)) return e.run(r, t, a);
        return r;
      }
      mapRepeat(e, n) {
        return (function (e) {
          return !t.isArray(e.repeat) && e.repeat.layer;
        })(e)
          ? this.mapLayerRepeat(e, n)
          : this.mapNonLayerRepeat(e, n);
      }
      mapLayerRepeat(e, t) {
        const { repeat: n, spec: i, ...o } = e,
          { row: r, column: a, layer: s } = n,
          { repeater: c = {}, repeaterPrefix: l = "" } = t;
        return r || a
          ? this.mapRepeat(
              {
                ...e,
                repeat: {
                  ...(r ? { row: r } : {}),
                  ...(a ? { column: a } : {}),
                },
                spec: { repeat: { layer: s }, spec: i },
              },
              t
            )
          : {
              ...o,
              layer: s.map((e) => {
                const n = { ...c, layer: e },
                  o = ""
                    .concat((i.name || "") + l, "child__layer_")
                    .concat(j(e)),
                  r = this.mapLayerOrUnit(i, {
                    ...t,
                    repeater: n,
                    repeaterPrefix: o,
                  });
                return (r.name = o), r;
              }),
            };
      }
      mapNonLayerRepeat(e, n) {
        var i;
        const { repeat: o, spec: r, data: a, ...s } = e;
        !t.isArray(o) &&
          e.columns &&
          ((e = m(e, ["columns"])), ji($n("repeat")));
        const c = [],
          { repeater: l = {}, repeaterPrefix: u = "" } = n,
          d = (!t.isArray(o) && o.row) || [l ? l.row : null],
          f = (!t.isArray(o) && o.column) || [l ? l.column : null],
          p = (t.isArray(o) && o) || [l ? l.repeat : null];
        for (const e of p)
          for (const i of d)
            for (const a of f) {
              const s = { repeat: e, row: i, column: a, layer: l.layer },
                d =
                  (r.name || "") +
                  u +
                  "child__" +
                  (t.isArray(o)
                    ? "".concat(j(e))
                    : (o.row ? "row_".concat(j(i)) : "") +
                      (o.column ? "column_".concat(j(a)) : "")),
                f = this.map(r, { ...n, repeater: s, repeaterPrefix: d });
              (f.name = d), c.push(m(f, ["data"]));
            }
        const g = t.isArray(o) ? e.columns : o.column ? o.column.length : 1;
        return {
          data: null !== (i = r.data) && void 0 !== i ? i : a,
          align: "all",
          ...s,
          columns: g,
          concat: c,
        };
      }
      mapFacet(e, t) {
        const { facet: n } = e;
        return (
          $r(n) && e.columns && ((e = m(e, ["columns"])), ji($n("facet"))),
          super.mapFacet(e, t)
        );
      }
      mapUnitWithParentEncodingOrProjection(e, t) {
        const { encoding: n, projection: i } = e,
          { parentEncoding: o, parentProjection: r, config: a } = t,
          s = Yc({ parentProjection: r, projection: i }),
          c = Gc({ parentEncoding: o, encoding: Wc(n, t.repeater) });
        return this.mapUnit(
          {
            ...e,
            ...(s ? { projection: s } : {}),
            ...(c ? { encoding: c } : {}),
          },
          { config: a }
        );
      }
      mapFacetedUnit(e, t) {
        const { row: n, column: i, facet: o, ...r } = e.encoding,
          {
            mark: a,
            width: s,
            projection: c,
            height: l,
            view: u,
            params: d,
            encoding: f,
            ...p
          } = e,
          { facetMapping: m, layout: g } = this.getFacetMappingAndLayout(
            { row: n, column: i, facet: o },
            t
          ),
          h = Wc(r, t.repeater);
        return this.mapFacet(
          {
            ...p,
            ...g,
            facet: m,
            spec: {
              ...(s ? { width: s } : {}),
              ...(l ? { height: l } : {}),
              ...(u ? { view: u } : {}),
              ...(c ? { projection: c } : {}),
              mark: a,
              encoding: h,
              ...(d ? { params: d } : {}),
            },
          },
          t
        );
      }
      getFacetMappingAndLayout(e, t) {
        const { row: n, column: i, facet: o } = e;
        if (n || i) {
          o &&
            ji(
              ((a = [...(n ? [$] : []), ...(i ? [K] : [])]),
              "Facet encoding dropped as "
                .concat(a.join(" and "), " ")
                .concat(a.length > 1 ? "are" : "is", " also specified."))
            );
          const t = {},
            s = {};
          for (const n of [$, K]) {
            const i = e[n];
            if (i) {
              const { align: e, center: o, spacing: a, columns: c, ...l } = i;
              t[n] = l;
              for (const e of ["align", "center", "spacing"]) {
                var r;
                if (void 0 !== i[e])
                  (null !== (r = s[e]) && void 0 !== r) || (s[e] = {}),
                    (s[e][n] = i[e]);
              }
            }
          }
          return { facetMapping: t, layout: s };
        }
        {
          const { align: e, center: n, spacing: i, columns: r, ...a } = o;
          return {
            facetMapping: qc(a, t.repeater),
            layout: {
              ...(e ? { align: e } : {}),
              ...(n ? { center: n } : {}),
              ...(i ? { spacing: i } : {}),
              ...(r ? { columns: r } : {}),
            },
          };
        }
        var a;
      }
      mapLayer(e, t) {
        let { parentEncoding: n, parentProjection: i, ...o } = t;
        const { encoding: r, projection: a, ...s } = e,
          c = {
            ...o,
            parentEncoding: Gc({ parentEncoding: n, encoding: r, layer: !0 }),
            parentProjection: Yc({ parentProjection: i, projection: a }),
          };
        return super.mapLayer(s, c);
      }
    })(),
    xl = new (class extends Dc {
      map(e, t) {
        var n, i;
        return (
          (null !== (n = t.emptySelections) && void 0 !== n) ||
            (t.emptySelections = {}),
          (null !== (i = t.selectionPredicates) && void 0 !== i) ||
            (t.selectionPredicates = {}),
          (e = fl(e, t)),
          super.map(e, t)
        );
      }
      mapLayerOrUnit(e, t) {
        if ((e = fl(e, t)).encoding) {
          const n = {};
          for (const [i, o] of A(e.encoding)) n[i] = pl(o, t);
          e = { ...e, encoding: n };
        }
        return super.mapLayerOrUnit(e, t);
      }
      mapUnit(e, t) {
        const { selection: n, ...i } = e;
        return n
          ? {
              ...i,
              params: A(n).map((e) => {
                let [n, i] = e;
                const { init: o, bind: r, empty: a, ...s } = i;
                "single" === s.type
                  ? ((s.type = "point"), (s.toggle = !1))
                  : "multi" === s.type && (s.type = "point"),
                  (t.emptySelections[n] = "none" !== a);
                for (const e of P(
                  null !== (c = t.selectionPredicates[n]) && void 0 !== c
                    ? c
                    : {}
                )) {
                  var c;
                  e.empty = "none" !== a;
                }
                return { name: n, value: o, select: s, bind: r };
              }),
            }
          : e;
      }
    })(),
    wl = new hl();
  function kl(e) {
    return t.isString(e) ? { type: e } : null != e ? e : {};
  }
  class Sl {
    constructor() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.explicit = e), (this.implicit = t);
    }
    clone() {
      return new Sl(d(this.explicit), d(this.implicit));
    }
    combine() {
      return { ...this.explicit, ...this.implicit };
    }
    get(e) {
      return V(this.explicit[e], this.implicit[e]);
    }
    getWithExplicit(e) {
      return void 0 !== this.explicit[e]
        ? { explicit: !0, value: this.explicit[e] }
        : void 0 !== this.implicit[e]
        ? { explicit: !1, value: this.implicit[e] }
        : { explicit: !1, value: void 0 };
    }
    setWithExplicit(e, t) {
      let { value: n, explicit: i } = t;
      void 0 !== n && this.set(e, n, i);
    }
    set(e, t, n) {
      return (
        delete this[n ? "implicit" : "explicit"][e],
        (this[n ? "explicit" : "implicit"][e] = t),
        this
      );
    }
    copyKeyFromSplit(e, t) {
      let { explicit: n, implicit: i } = t;
      void 0 !== n[e]
        ? this.set(e, n[e], !0)
        : void 0 !== i[e] && this.set(e, i[e], !1);
    }
    copyKeyFromObject(e, t) {
      void 0 !== t[e] && this.set(e, t[e], !0);
    }
    copyAll(e) {
      for (const t of C(e.combine())) {
        const n = e.getWithExplicit(t);
        this.setWithExplicit(t, n);
      }
    }
  }
  function Dl(e) {
    return { explicit: !0, value: e };
  }
  function Fl(e) {
    return { explicit: !1, value: e };
  }
  function Ol(e) {
    return (t, n, i, o) => {
      const r = e(t.value, n.value);
      return r > 0 ? t : r < 0 ? n : _l(t, n, i, o);
    };
  }
  function _l(e, t, n, i) {
    return (
      e.explicit &&
        t.explicit &&
        ji(
          (function (e, t, n, i) {
            return "Conflicting "
              .concat(t.toString(), ' property "')
              .concat(e.toString(), '" (')
              .concat(g(n), " and ")
              .concat(g(i), "). Using ")
              .concat(g(n), ".");
          })(n, i, e.value, t.value)
        ),
      e
    );
  }
  function zl(e, t, n, i) {
    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _l;
    return void 0 === e || void 0 === e.value
      ? t
      : e.explicit && !t.explicit
      ? e
      : t.explicit && !e.explicit
      ? t
      : u(e.value, t.value)
      ? e
      : o(e, t, n, i);
  }
  class Cl extends Sl {
    constructor() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      super(e, t),
        (this.explicit = e),
        (this.implicit = t),
        (this.parseNothing = n);
    }
    clone() {
      const e = super.clone();
      return (e.parseNothing = this.parseNothing), e;
    }
  }
  function Pl(e) {
    return "url" in e;
  }
  function Al(e) {
    return "values" in e;
  }
  function Nl(e) {
    return "name" in e && !Pl(e) && !Al(e) && !jl(e);
  }
  function jl(e) {
    return e && (El(e) || Ml(e) || Tl(e));
  }
  function El(e) {
    return "sequence" in e;
  }
  function Ml(e) {
    return "sphere" in e;
  }
  function Tl(e) {
    return "graticule" in e;
  }
  let Ll;
  function ql(e) {
    let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      i =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : t.identity;
    if (t.isArray(e)) {
      const t = e.map((e) => ql(e, n, i));
      return n ? "[".concat(t.join(", "), "]") : t;
    }
    return Ei(e) ? i(n ? Ri(e) : Bi(e)) : n ? i(g(e)) : e;
  }
  function Wl(e, n) {
    for (const o of P(
      null !== (i = e.component.selection) && void 0 !== i ? i : {}
    )) {
      var i;
      const r = o.name;
      let a = ""
        .concat(r)
        .concat(Qu, ", ")
        .concat("global" === o.resolve ? "true" : "{unit: ".concat(td(e), "}"));
      for (const t of Zu)
        t.defined(o) &&
          (t.signals && (n = t.signals(e, o, n)),
          t.modifyExpr && (a = t.modifyExpr(e, o, a)));
      n.push({
        name: r + $u,
        on: [
          {
            events: { signal: o.name + Qu },
            update: "modify("
              .concat(t.stringValue(o.name + Ju), ", ")
              .concat(a, ")"),
          },
        ],
      });
    }
    return Bl(n);
  }
  function Rl(e, n) {
    if (e.component.selection && C(e.component.selection).length) {
      const i = t.stringValue(e.getName("cell"));
      n.unshift({
        name: "facet",
        value: {},
        on: [
          {
            events: t.parseSelector("mousemove", "scope"),
            update: "isTuple(facet) ? facet : group(".concat(i, ").datum"),
          },
        ],
      });
    }
    return Bl(n);
  }
  function Ul(e, t) {
    for (const i of P(
      null !== (n = e.component.selection) && void 0 !== n ? n : {}
    )) {
      var n;
      for (const n of Zu) n.defined(i) && n.marks && (t = n.marks(e, i, t));
    }
    return t;
  }
  function Bl(e) {
    return e.map((e) => (e.on && !e.on.length && delete e.on, e));
  }
  !(function (e) {
    (e[(e.Raw = 0)] = "Raw"),
      (e[(e.Main = 1)] = "Main"),
      (e[(e.Row = 2)] = "Row"),
      (e[(e.Column = 3)] = "Column"),
      (e[(e.Lookup = 4)] = "Lookup");
  })(Ll || (Ll = {}));
  class Hl {
    constructor(e, t) {
      (this.debugName = t),
        Ln(this, "_children", []),
        Ln(this, "_parent", null),
        Ln(this, "_hash", void 0),
        e && (this.parent = e);
    }
    clone() {
      throw new Error("Cannot clone node");
    }
    get parent() {
      return this._parent;
    }
    set parent(e) {
      (this._parent = e), e && e.addChild(this);
    }
    get children() {
      return this._children;
    }
    numChildren() {
      return this._children.length;
    }
    addChild(e, t) {
      this._children.includes(e)
        ? ji("Attempt to add the same child twice.")
        : void 0 !== t
        ? this._children.splice(t, 0, e)
        : this._children.push(e);
    }
    removeChild(e) {
      const t = this._children.indexOf(e);
      return this._children.splice(t, 1), t;
    }
    remove() {
      let e = this._parent.removeChild(this);
      for (const t of this._children)
        (t._parent = this._parent), this._parent.addChild(t, e++);
    }
    insertAsParentOf(e) {
      const t = e.parent;
      t.removeChild(this), (this.parent = t), (e.parent = this);
    }
    swapWithParent() {
      const e = this._parent,
        t = e.parent;
      for (const t of this._children) t.parent = e;
      (this._children = []),
        e.removeChild(this),
        e.parent.removeChild(e),
        (this.parent = t),
        (e.parent = this);
    }
  }
  class Vl extends Hl {
    clone() {
      const e = new this.constructor();
      return (
        (e.debugName = "clone_".concat(this.debugName)),
        (e._source = this._source),
        (e._name = "clone_".concat(this._name)),
        (e.type = this.type),
        (e.refCounts = this.refCounts),
        (e.refCounts[e._name] = 0),
        e
      );
    }
    constructor(e, t, n, i) {
      super(e, t),
        (this.type = n),
        (this.refCounts = i),
        Ln(this, "_source", void 0),
        Ln(this, "_name", void 0),
        (this._source = this._name = t),
        this.refCounts &&
          !(this._name in this.refCounts) &&
          (this.refCounts[this._name] = 0);
    }
    dependentFields() {
      return new Set();
    }
    producedFields() {
      return new Set();
    }
    hash() {
      return (
        void 0 === this._hash && (this._hash = "Output ".concat(G())),
        this._hash
      );
    }
    getSource() {
      return this.refCounts[this._name]++, this._source;
    }
    isRequired() {
      return !!this.refCounts[this._name];
    }
    setSource(e) {
      this._source = e;
    }
  }
  class Il extends Hl {
    clone() {
      return new Il(null, d(this.formula));
    }
    constructor(e, t) {
      super(e), (this.formula = t);
    }
    static makeFromEncoding(e, t) {
      const n = t.reduceFieldDef((e, t) => {
        const { field: n, timeUnit: i } = t;
        if (i) {
          const o = ka(t, { forAs: !0 });
          e[h({ as: o, field: n, timeUnit: i })] = {
            as: o,
            field: n,
            timeUnit: i,
          };
        }
        return e;
      }, {});
      return z(n) ? null : new Il(e, n);
    }
    static makeFromTransform(e, t) {
      const { timeUnit: n, ...i } = { ...t },
        o = { ...i, timeUnit: $i(n) };
      return new Il(e, { [h(o)]: o });
    }
    merge(e) {
      this.formula = { ...this.formula };
      for (const t in e.formula)
        this.formula[t] || (this.formula[t] = e.formula[t]);
      for (const t of e.children) e.removeChild(t), (t.parent = this);
      e.remove();
    }
    removeFormulas(e) {
      const t = {};
      for (const [n, i] of A(this.formula)) e.has(i.as) || (t[n] = i);
      this.formula = t;
    }
    producedFields() {
      return new Set(P(this.formula).map((e) => e.as));
    }
    dependentFields() {
      return new Set(P(this.formula).map((e) => e.field));
    }
    hash() {
      return "TimeUnit ".concat(h(this.formula));
    }
    assemble() {
      const e = [];
      for (const t of P(this.formula)) {
        const { field: n, as: i, timeUnit: o } = t,
          { unit: r, utc: a, ...s } = $i(o);
        e.push({
          field: R(n),
          type: "timeunit",
          ...(r ? { units: Yi(r) } : {}),
          ...(a ? { timezone: "utc" } : {}),
          ...s,
          as: [i, "".concat(i, "_end")],
        });
      }
      return e;
    }
  }
  const Gl = "_tuple_fields";
  class Yl {
    constructor() {
      Ln(this, "hasChannel", void 0),
        Ln(this, "hasField", void 0),
        Ln(this, "timeUnit", void 0),
        Ln(this, "items", void 0);
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      (this.items = t), (this.hasChannel = {}), (this.hasField = {});
    }
  }
  const Xl = {
      defined: () => !0,
      parse: (e, n, i) => {
        var o;
        const r = n.name,
          a =
            null !== (o = n.project) && void 0 !== o
              ? o
              : (n.project = new Yl()),
          s = {},
          c = {},
          l = new Set(),
          u = (e, t) => {
            const n = "visual" === t ? e.channel : e.field;
            let i = j("".concat(r, "_").concat(n));
            for (let e = 1; l.has(i); e++)
              i = j("".concat(r, "_").concat(n, "_").concat(e));
            return l.add(i), { [t]: i };
          },
          d = n.type,
          f = e.config.selection[d],
          p = void 0 !== i.value ? t.array(i.value) : null;
        let { fields: m, encodings: g } = t.isObject(i.select) ? i.select : {};
        if (!m && !g && p)
          for (const e of p)
            if (t.isObject(e))
              for (const t of C(e))
                Qe[t]
                  ? (g || (g = [])).push(t)
                  : "interval" === d
                  ? (ji(
                      'Interval selections should be initialized using "x" and/or "y" keys.'
                    ),
                    (g = f.encodings))
                  : (m || (m = [])).push(t);
        m || g || ((g = f.encodings), "fields" in f && (m = f.fields));
        for (const t of null !== (v = g) && void 0 !== v ? v : []) {
          var v;
          const n = e.fieldDef(t);
          if (n) {
            let i = n.field;
            if (n.aggregate) {
              ji(Xn(t, n.aggregate));
              continue;
            }
            if (!i) {
              ji(Yn(t));
              continue;
            }
            if (n.timeUnit) {
              i = e.vgField(t);
              const o = { timeUnit: n.timeUnit, as: i, field: n.field };
              c[h(o)] = o;
            }
            if (!s[i]) {
              let o = "E";
              if ("interval" === d) {
                Wo(e.getScaleComponent(t).get("type")) && (o = "R");
              } else n.bin && (o = "R-RE");
              const r = { field: i, channel: t, type: o };
              (r.signals = { ...u(r, "data"), ...u(r, "visual") }),
                a.items.push((s[i] = r)),
                (a.hasField[i] = a.hasChannel[t] = s[i]);
            }
          } else ji(Yn(t));
        }
        for (const e of null !== (y = m) && void 0 !== y ? y : []) {
          var y;
          if (a.hasField[e]) continue;
          const t = { type: "E", field: e };
          (t.signals = { ...u(t, "data") }),
            a.items.push(t),
            (a.hasField[e] = t);
        }
        p &&
          (n.init = p.map((e) =>
            a.items.map((n) =>
              t.isObject(e)
                ? void 0 !== e[n.channel]
                  ? e[n.channel]
                  : e[n.field]
                : e
            )
          )),
          z(c) || (a.timeUnit = new Il(null, c));
      },
      signals: (e, t, n) => {
        const i = t.name + Gl;
        return n.filter((e) => e.name === i).length > 0
          ? n
          : n.concat({
              name: i,
              value: t.project.items.map((e) => {
                const { signals: t, hasLegend: n, ...i } = e;
                return (i.field = R(i.field)), i;
              }),
            });
      },
    },
    Jl = {
      defined: (e) =>
        "interval" === e.type &&
        "global" === e.resolve &&
        e.bind &&
        "scales" === e.bind,
      parse: (e, t) => {
        const n = (t.scales = []);
        for (const i of t.project.items) {
          const o = i.channel;
          if (!Ht(o)) continue;
          const r = e.getScaleComponent(o),
            a = r ? r.get("type") : void 0;
          r && Wo(a)
            ? (r.set("selectionExtent", { param: t.name, field: i.field }, !0),
              n.push(i))
            : ji(
                "Scale bindings are currently only supported for scales with unbinned, continuous domains."
              );
        }
      },
      topLevelSignals: (e, n, i) => {
        const o = n.scales.filter(
          (e) => 0 === i.filter((t) => t.name === e.signals.data).length
        );
        if (!e.parent || $l(e) || 0 === o.length) return i;
        const r = i.filter((e) => e.name === n.name)[0];
        let a = r.update;
        if (a.indexOf(Ku) >= 0)
          r.update = "{".concat(
            o
              .map((e) =>
                ""
                  .concat(t.stringValue(R(e.field)), ": ")
                  .concat(e.signals.data)
              )
              .join(", "),
            "}"
          );
        else {
          for (const e of o) {
            const n = ""
              .concat(t.stringValue(R(e.field)), ": ")
              .concat(e.signals.data);
            a.includes(n) ||
              (a = ""
                .concat(a.substring(0, a.length - 1), ", ")
                .concat(n, "}"));
          }
          r.update = a;
        }
        return i.concat(o.map((e) => ({ name: e.signals.data })));
      },
      signals: (e, t, n) => {
        if (e.parent && !$l(e))
          for (const e of t.scales) {
            const t = n.filter((t) => t.name === e.signals.data)[0];
            (t.push = "outer"), delete t.value, delete t.update;
          }
        return n;
      },
    };
  function Ql(e, n) {
    const i = t.stringValue(e.scaleName(n));
    return "domain(".concat(i, ")");
  }
  function $l(e) {
    var t;
    return (
      e.parent &&
      Bp(e.parent) &&
      (null !== (t = !e.parent.parent) && void 0 !== t
        ? t
        : $l(e.parent.parent))
    );
  }
  const Kl = "_brush",
    Zl = "_scale_trigger",
    eu = {
      defined: (e) => "interval" === e.type,
      signals: (e, n, i) => {
        const o = n.name,
          r = o + Gl,
          a = Jl.defined(n),
          s = n.init ? n.init[0] : null,
          c = [],
          l = [];
        if (n.translate && !a) {
          const e = "!event.item || event.item.mark.name !== ".concat(
            t.stringValue(o + Kl)
          );
          tu(n, (n, i) => {
            var o, r;
            const a = t.array(
              null !== (r = (o = i.between[0]).filter) && void 0 !== r
                ? r
                : (o.filter = [])
            );
            return a.includes(e) || a.push(e), n;
          });
        }
        n.project.items.forEach((o, r) => {
          const a = o.channel;
          if (a !== ee && a !== te)
            return void ji(
              "Interval selections only support x and y encoding channels."
            );
          const u = s ? s[r] : null,
            d = (function (e, n, i, o) {
              const r = i.channel,
                a = i.signals.visual,
                s = i.signals.data,
                c = Jl.defined(n),
                l = t.stringValue(e.scaleName(r)),
                u = e.getScaleComponent(r),
                d = u ? u.get("type") : void 0,
                f = (e) => "scale(".concat(l, ", ").concat(e, ")"),
                p = e.getSizeSignalRef(r === ee ? "width" : "height").signal,
                m = "".concat(r, "(unit)"),
                g = tu(n, (e, t) => [
                  ...e,
                  {
                    events: t.between[0],
                    update: "[".concat(m, ", ").concat(m, "]"),
                  },
                  {
                    events: t,
                    update: "["
                      .concat(a, "[0], clamp(")
                      .concat(m, ", 0, ")
                      .concat(p, ")]"),
                  },
                ]);
              return (
                g.push({
                  events: { signal: n.name + Zl },
                  update: Wo(d)
                    ? "["
                        .concat(f("".concat(s, "[0]")), ", ")
                        .concat(f("".concat(s, "[1]")), "]")
                    : "[0, 0]",
                }),
                c
                  ? [{ name: s, on: [] }]
                  : [
                      {
                        name: a,
                        ...(o ? { init: ql(o, !0, f) } : { value: [] }),
                        on: g,
                      },
                      {
                        name: s,
                        ...(o ? { init: ql(o) } : {}),
                        on: [
                          {
                            events: { signal: a },
                            update: ""
                              .concat(a, "[0] === ")
                              .concat(a, "[1] ? null : invert(")
                              .concat(l, ", ")
                              .concat(a, ")"),
                          },
                        ],
                      },
                    ]
              );
            })(e, n, o, u),
            f = o.signals.data,
            p = o.signals.visual,
            m = t.stringValue(e.scaleName(a)),
            g = Wo(e.getScaleComponent(a).get("type")) ? "+" : "";
          i.push(...d),
            c.push(f),
            l.push({
              scaleName: e.scaleName(a),
              expr:
                "(!isArray(".concat(f, ") || ") +
                "("
                  .concat(g, "invert(")
                  .concat(m, ", ")
                  .concat(p, ")[0] === ")
                  .concat(g)
                  .concat(f, "[0] && ") +
                ""
                  .concat(g, "invert(")
                  .concat(m, ", ")
                  .concat(p, ")[1] === ")
                  .concat(g)
                  .concat(f, "[1]))"),
            });
        }),
          !a &&
            l.length &&
            i.push({
              name: o + Zl,
              value: {},
              on: [
                {
                  events: l.map((e) => ({ scale: e.scaleName })),
                  update: ""
                    .concat(l.map((e) => e.expr).join(" && "), " ? ")
                    .concat(o + Zl, " : {}"),
                },
              ],
            });
        const u = "unit: ".concat(td(e), ", fields: ").concat(r, ", values");
        return i.concat({
          name: o + Qu,
          ...(s ? { init: "{".concat(u, ": ").concat(ql(s), "}") } : {}),
          ...(c.length
            ? {
                on: [
                  {
                    events: [{ signal: c.join(" || ") }],
                    update: ""
                      .concat(c.join(" && "), " ? {")
                      .concat(u, ": [")
                      .concat(c, "]} : null"),
                  },
                ],
              }
            : {}),
        });
      },
      marks: (e, n, i) => {
        const o = n.name,
          { x: r, y: a } = n.project.hasChannel,
          s = null == r ? void 0 : r.signals.visual,
          c = null == a ? void 0 : a.signals.visual,
          l = "data(".concat(t.stringValue(n.name + Ju), ")");
        if (Jl.defined(n) || (!r && !a)) return i;
        const u = {
          x: void 0 !== r ? { signal: "".concat(s, "[0]") } : { value: 0 },
          y: void 0 !== a ? { signal: "".concat(c, "[0]") } : { value: 0 },
          x2:
            void 0 !== r
              ? { signal: "".concat(s, "[1]") }
              : { field: { group: "width" } },
          y2:
            void 0 !== a
              ? { signal: "".concat(c, "[1]") }
              : { field: { group: "height" } },
        };
        if ("global" === n.resolve)
          for (const t of C(u))
            u[t] = [
              {
                test: ""
                  .concat(l, ".length && ")
                  .concat(l, "[0].unit === ")
                  .concat(td(e)),
                ...u[t],
              },
              { value: 0 },
            ];
        const { fill: d, fillOpacity: f, cursor: p, ...m } = n.mark,
          g = C(m).reduce(
            (e, t) => (
              (e[t] = [
                {
                  test: [
                    void 0 !== r && "".concat(s, "[0] !== ").concat(s, "[1]"),
                    void 0 !== a && "".concat(c, "[0] !== ").concat(c, "[1]"),
                  ]
                    .filter((e) => e)
                    .join(" && "),
                  value: m[t],
                },
                { value: null },
              ]),
              e
            ),
            {}
          );
        return [
          {
            name: "".concat(o + Kl, "_bg"),
            type: "rect",
            clip: !0,
            encode: {
              enter: { fill: { value: d }, fillOpacity: { value: f } },
              update: u,
            },
          },
          ...i,
          {
            name: o + Kl,
            type: "rect",
            clip: !0,
            encode: {
              enter: {
                ...(p ? { cursor: { value: p } } : {}),
                fill: { value: "transparent" },
              },
              update: { ...u, ...g },
            },
          },
        ];
      },
    };
  function tu(e, t) {
    return e.events.reduce(
      (e, n) =>
        n.between
          ? t(e, n)
          : (ji(
              "".concat(
                n,
                " is not an ordered event stream for interval selections."
              )
            ),
            e),
      []
    );
  }
  const nu = {
    defined: (e) => "point" === e.type,
    signals: (e, n, i) => {
      var o;
      const r = n.name,
        a = r + Gl,
        s = n.project,
        c = "(item().isVoronoi ? datum.datum : datum)",
        l = s.items
          .map((n) => {
            const i = e.fieldDef(n.channel);
            return null != i && i.bin
              ? "["
                  .concat(c, "[")
                  .concat(t.stringValue(e.vgField(n.channel, {})), "], ") +
                  ""
                    .concat(c, "[")
                    .concat(
                      t.stringValue(e.vgField(n.channel, { binSuffix: "end" })),
                      "]]"
                    )
              : "".concat(c, "[").concat(t.stringValue(n.field), "]");
          })
          .join(", "),
        u = "unit: ".concat(td(e), ", fields: ").concat(a, ", values"),
        d = n.events,
        f = P(null !== (o = e.component.selection) && void 0 !== o ? o : {})
          .reduce(
            (e, t) => ("interval" === t.type ? e.concat(t.name + Kl) : e),
            []
          )
          .map((e) => "indexof(item().mark.name, '".concat(e, "') < 0"))
          .join(" && "),
        p = "datum && item().mark.marktype !== 'group'".concat(
          f ? " && ".concat(f) : ""
        );
      return i.concat([
        {
          name: r + Qu,
          on: d
            ? [
                {
                  events: d,
                  update: ""
                    .concat(p, " ? {")
                    .concat(u, ": [")
                    .concat(l, "]} : null"),
                  force: !0,
                },
              ]
            : [],
        },
      ]);
    },
  };
  function iu(e, n, i, o) {
    const r = ra(n) && n.condition,
      a = o(n);
    if (r) {
      return {
        [i]: [
          ...t.array(r).map((t) => {
            const n = o(t);
            if (
              (function (e) {
                return e.param;
              })(t)
            ) {
              const { param: i, empty: o } = t;
              return { test: cd(e, { param: i, empty: o }), ...n };
            }
            return { test: ud(e, t.test), ...n };
          }),
          ...(void 0 !== a ? [a] : []),
        ],
      };
    }
    return void 0 !== a ? { [i]: a } : {};
  }
  function ou(e) {
    let t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
    const n = e.encoding[t];
    return iu(e, n, t, (t) => ru(t, e.config));
  }
  function ru(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "datum";
    if (e) {
      if (ga(e)) return Dn(e.value);
      if (pa(e)) {
        const { format: i, formatType: o } = Na(e);
        return Tr({
          fieldOrDatumDef: e,
          format: i,
          formatType: o,
          expr: n,
          config: t,
        });
      }
    }
  }
  function au(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const { encoding: i, markDef: o, config: r, stack: a } = e,
      s = i.tooltip;
    if (t.isArray(s)) return { tooltip: cu({ tooltip: s }, a, r, n) };
    {
      const c = n.reactiveGeom ? "datum.datum" : "datum";
      return iu(e, s, "tooltip", (e) => {
        const s = ru(e, r, c);
        if (s) return s;
        if (null === e) return;
        let l = Cn("tooltip", o, r);
        return (
          !0 === l && (l = { content: "encoding" }),
          t.isString(l)
            ? { value: l }
            : t.isObject(l)
            ? gn(l)
              ? l
              : "encoding" === l.content
              ? cu(i, a, r, n)
              : { signal: c }
            : void 0
        );
      });
    }
  }
  function su(e, n, i) {
    let { reactiveGeom: o } =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const r = {},
      a = o ? "datum.datum" : "datum",
      s = [];
    function c(o, c) {
      var l;
      const u = et(c),
        d = ma(o) ? o : { ...o, type: e[u].type },
        f = d.title || Aa(d, i),
        p = t.array(f).join(", ");
      let m;
      if (Ft(c)) {
        const t = "x" === c ? "x2" : "y2",
          o = Ea(e[t]);
        if (sn(d.bin) && o) {
          const e = ka(d, { expr: a }),
            n = ka(o, { expr: a }),
            { format: s, formatType: c } = Na(d);
          (m = Vr(e, n, s, c, i)), (r[t] = !0);
        } else if (n && n.fieldChannel === c && "normalize" === n.offset) {
          const { format: e, formatType: t } = Na(d);
          m = Tr({
            fieldOrDatumDef: d,
            format: e,
            formatType: t,
            expr: a,
            config: i,
            normalizeStack: !0,
          }).signal;
        }
      }
      (null !== (l = m) && void 0 !== l) || (m = ru(d, i, a).signal),
        s.push({ channel: c, key: p, value: m });
    }
    us(e, (e, t) => {
      ca(e) ? c(e, t) : aa(e) && c(e.condition, t);
    });
    const l = {};
    for (const { channel: e, key: t, value: n } of s)
      r[e] || l[t] || (l[t] = n);
    return l;
  }
  function cu(e, t, n) {
    let { reactiveGeom: i } =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const o = su(e, t, n, { reactiveGeom: i }),
      r = A(o).map((e) => {
        let [t, n] = e;
        return '"'.concat(t, '": ').concat(n);
      });
    return r.length > 0 ? { signal: "{".concat(r.join(", "), "}") } : void 0;
  }
  function lu(e) {
    const { markDef: t, config: n } = e,
      i = Cn("aria", t, n);
    return !1 === i ? {} : { ...(i ? { aria: i } : {}), ...uu(e), ...du(e) };
  }
  function uu(e) {
    const { mark: t, markDef: n, config: i } = e;
    if (!1 === i.aria) return {};
    const o = Cn("ariaRoleDescription", n, i);
    return null != o
      ? { ariaRoleDescription: { value: o } }
      : t in bn
      ? {}
      : { ariaRoleDescription: { value: t } };
  }
  function du(e) {
    const { encoding: t, markDef: n, config: i, stack: o } = e,
      r = t.description;
    if (r) return iu(e, r, "description", (t) => ru(t, e.config));
    const a = Cn("description", n, i);
    if (null != a) return { description: Dn(a) };
    if (!1 === i.aria) return {};
    const s = su(t, o, i);
    return z(s)
      ? void 0
      : {
          description: {
            signal: A(s)
              .map((e, t) => {
                let [n, i] = e;
                return '"'
                  .concat(t > 0 ? "; " : "")
                  .concat(n, ': " + (')
                  .concat(i, ")");
              })
              .join(" + "),
          },
        };
  }
  function fu(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const { markDef: i, encoding: o, config: r } = t,
      { vgChannel: a } = n;
    let { defaultRef: s, defaultValue: c } = n;
    var l;
    void 0 === s &&
      ((null !== (l = c) && void 0 !== l) ||
        (c = Cn(e, i, r, { vgChannel: a, ignoreVgConfig: !0 })),
      void 0 !== c && (s = Dn(c)));
    const u = o[e];
    return iu(t, u, null != a ? a : e, (n) =>
      Nr({
        channel: e,
        channelDef: n,
        markDef: i,
        config: r,
        scaleName: t.scaleName(e),
        scale: t.getScaleComponent(e),
        stack: null,
        defaultRef: s,
      })
    );
  }
  function pu(e) {
    var t, n, i, o;
    let r =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { filled: void 0 };
    const { markDef: a, encoding: s, config: c } = e,
      { type: l } = a,
      u = null !== (t = r.filled) && void 0 !== t ? t : Cn("filled", a, c),
      d = y(["bar", "point", "circle", "square", "geoshape"], l)
        ? "transparent"
        : void 0,
      f =
        null !==
          (n =
            null !==
              (i = Cn(!0 === u ? "color" : void 0, a, c, {
                vgChannel: "fill",
              })) && void 0 !== i
              ? i
              : c.mark[!0 === u && "color"]) && void 0 !== n
          ? n
          : d,
      p =
        null !==
          (o = Cn(!1 === u ? "color" : void 0, a, c, {
            vgChannel: "stroke",
          })) && void 0 !== o
          ? o
          : c.mark[!1 === u && "color"],
      m = u ? "fill" : "stroke",
      g = { ...(f ? { fill: Dn(f) } : {}), ...(p ? { stroke: Dn(p) } : {}) };
    return (
      a.color &&
        (u ? a.fill : a.stroke) &&
        ji(ai("property", { fill: "fill" in a, stroke: "stroke" in a })),
      {
        ...g,
        ...fu("color", e, { vgChannel: m, defaultValue: u ? f : p }),
        ...fu("fill", e, { defaultValue: s.fill ? f : void 0 }),
        ...fu("stroke", e, { defaultValue: s.stroke ? p : void 0 }),
      }
    );
  }
  function mu(e) {
    const { encoding: t, mark: n } = e,
      i = t.order;
    return !hr(n) && ga(i) ? iu(e, i, "zindex", (e) => Dn(e.value)) : {};
  }
  function gu(e) {
    let {
      channel: t,
      markDef: n,
      encoding: i = {},
      model: o,
      bandPosition: r,
    } = e;
    const a = "".concat(t, "Offset"),
      s = n[a],
      c = i[a];
    if (("xOffset" === a || "yOffset" === a) && c) {
      return {
        offsetType: "encoding",
        offset: Nr({
          channel: a,
          channelDef: c,
          markDef: n,
          config: null == o ? void 0 : o.config,
          scaleName: o.scaleName(a),
          scale: o.getScaleComponent(a),
          stack: null,
          defaultRef: Dn(s),
          bandPosition: r,
        }),
      };
    }
    const l = n[a];
    return l ? { offsetType: "visual", offset: l } : {};
  }
  function hu(e, t, n) {
    let { defaultPos: i, vgChannel: o } = n;
    const { encoding: r, markDef: a, config: s, stack: c } = t,
      l = r[e],
      u = r[nt(e)],
      d = t.scaleName(e),
      f = t.getScaleComponent(e),
      { offset: p, offsetType: m } = gu({
        channel: e,
        markDef: a,
        encoding: r,
        model: t,
        bandPosition: 0.5,
      }),
      g = vu({ model: t, defaultPos: i, channel: e, scaleName: d, scale: f }),
      h =
        !l && Ft(e) && (r.latitude || r.longitude)
          ? { field: t.getName(e) }
          : (function (e) {
              const {
                channel: t,
                channelDef: n,
                scaleName: i,
                stack: o,
                offset: r,
                markDef: a,
              } = e;
              if (pa(n) && o && t === o.fieldChannel) {
                if (ca(n)) {
                  let e = n.bandPosition;
                  if (
                    (void 0 !== e ||
                      "text" !== a.type ||
                      ("radius" !== t && "theta" !== t) ||
                      (e = 0.5),
                    void 0 !== e)
                  )
                    return Ar({
                      scaleName: i,
                      fieldOrDatumDef: n,
                      startSuffix: "start",
                      bandPosition: e,
                      offset: r,
                    });
                }
                return Pr(n, i, { suffix: "end" }, { offset: r });
              }
              return _r(e);
            })({
              channel: e,
              channelDef: l,
              channel2Def: u,
              markDef: a,
              config: s,
              scaleName: d,
              scale: f,
              stack: c,
              offset: p,
              defaultRef: g,
              bandPosition: "encoding" === m ? 0 : void 0,
            });
    return h ? { [o || e]: h } : void 0;
  }
  function vu(e) {
    let { model: t, defaultPos: n, channel: i, scaleName: o, scale: r } = e;
    const { markDef: a, config: s } = t;
    return () => {
      const e = et(i),
        c = tt(i),
        l = Cn(i, a, s, { vgChannel: c });
      if (void 0 !== l) return jr(i, l);
      switch (n) {
        case "zeroOrMin":
        case "zeroOrMax":
          if (o) {
            const e = r.get("type");
            if (y([So, Do, Fo], e));
            else if (r.domainDefinitelyIncludesZero())
              return { scale: o, value: 0 };
          }
          if ("zeroOrMin" === n)
            return "y" === e ? { field: { group: "height" } } : { value: 0 };
          switch (e) {
            case "radius":
              return {
                signal: "min("
                  .concat(t.width.signal, ",")
                  .concat(t.height.signal, ")/2"),
              };
            case "theta":
              return { signal: "2*PI" };
            case "x":
              return { field: { group: "width" } };
            case "y":
              return { value: 0 };
          }
          break;
        case "mid":
          return { ...t[it(i)], mult: 0.5 };
      }
    };
  }
  const yu = { left: "x", center: "xc", right: "x2" },
    bu = { top: "y", middle: "yc", bottom: "y2" };
  function xu(e, t, n) {
    let i =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "middle";
    if ("radius" === e || "theta" === e) return tt(e);
    const o = "x" === e ? "align" : "baseline",
      r = Cn(o, t, n);
    let a;
    return (
      gn(r) ? (ji(pi(o)), (a = void 0)) : (a = r),
      "x" === e ? yu[a || ("top" === i ? "left" : "center")] : bu[a || i]
    );
  }
  function wu(e, t, n) {
    let { defaultPos: i, defaultPos2: o, range: r } = n;
    return r
      ? ku(e, t, { defaultPos: i, defaultPos2: o })
      : hu(e, t, { defaultPos: i });
  }
  function ku(e, t, n) {
    let { defaultPos: i, defaultPos2: o } = n;
    const { markDef: r, config: a } = t,
      s = nt(e),
      c = it(e),
      l = (function (e, t, n) {
        const { encoding: i, mark: o, markDef: r, stack: a, config: s } = e,
          c = et(n),
          l = it(n),
          u = tt(n),
          d = i[c],
          f = e.scaleName(c),
          p = e.getScaleComponent(c),
          { offset: m } = gu(
            n in i || n in r
              ? { channel: n, markDef: r, encoding: i, model: e }
              : { channel: c, markDef: r, encoding: i, model: e }
          );
        if (!d && ("x2" === n || "y2" === n) && (i.latitude || i.longitude)) {
          const t = it(n),
            i = e.markDef[t];
          return null != i
            ? { [t]: { value: i } }
            : { [u]: { field: e.getName(n) } };
        }
        const g = (function (e) {
          let {
            channel: t,
            channelDef: n,
            channel2Def: i,
            markDef: o,
            config: r,
            scaleName: a,
            scale: s,
            stack: c,
            offset: l,
            defaultRef: u,
          } = e;
          if (pa(n) && c && t.charAt(0) === c.fieldChannel.charAt(0))
            return Pr(n, a, { suffix: "start" }, { offset: l });
          return _r({
            channel: t,
            channelDef: i,
            scaleName: a,
            scale: s,
            stack: c,
            markDef: o,
            config: r,
            offset: l,
            defaultRef: u,
          });
        })({
          channel: n,
          channelDef: d,
          channel2Def: i[n],
          markDef: r,
          config: s,
          scaleName: f,
          scale: p,
          stack: a,
          offset: m,
          defaultRef: void 0,
        });
        if (void 0 !== g) return { [u]: g };
        return (
          Su(n, r) ||
          Su(n, { [n]: An(n, r, s.style), [l]: An(l, r, s.style) }) ||
          Su(n, s[o]) ||
          Su(n, s.mark) || {
            [u]: vu({
              model: e,
              defaultPos: t,
              channel: n,
              scaleName: f,
              scale: p,
            })(),
          }
        );
      })(t, o, s);
    return {
      ...hu(e, t, { defaultPos: i, vgChannel: l[c] ? xu(e, r, a) : tt(e) }),
      ...l,
    };
  }
  function Su(e, t) {
    const n = it(e),
      i = tt(e);
    if (void 0 !== t[i]) return { [i]: jr(e, t[i]) };
    if (void 0 !== t[e]) return { [i]: jr(e, t[e]) };
    if (t[n]) {
      const i = t[n];
      if (!Sr(i)) return { [n]: jr(e, i) };
      ji(
        (function (e) {
          return "Position range does not support relative band size for ".concat(
            e,
            "."
          );
        })(n)
      );
    }
  }
  function Du(e, n) {
    var i, o;
    const { config: r, encoding: a, markDef: s } = e,
      c = s.type,
      l = nt(n),
      u = it(n),
      d = a[n],
      f = a[l],
      p = e.getScaleComponent(n),
      m = p ? p.get("type") : void 0,
      g = s.orient,
      h =
        null !== (i = null !== (o = a[u]) && void 0 !== o ? o : a.size) &&
        void 0 !== i
          ? i
          : Cn("size", s, r, { vgChannel: u }),
      v = "bar" === c && ("x" === n ? "vertical" === g : "horizontal" === g);
    return !ca(d) ||
      !(an(d.bin) || sn(d.bin) || (d.timeUnit && !f)) ||
      (h && !Sr(h)) ||
      qo(m)
      ? ((pa(d) && qo(m)) || v) && !f
        ? (function (e, n, i) {
            const { markDef: o, encoding: r, config: a, stack: s } = i,
              c = o.orient,
              l = i.scaleName(n),
              u = i.getScaleComponent(n),
              d = it(n),
              f = nt(n),
              p = (function (e) {
                switch (e) {
                  case ee:
                    return "xOffset";
                  case te:
                    return "yOffset";
                  case ne:
                    return "x2Offset";
                  case ie:
                    return "y2Offset";
                  case ce:
                    return "thetaOffset";
                  case ae:
                    return "radiusOffset";
                  case le:
                    return "theta2Offset";
                  case se:
                    return "radius2Offset";
                }
              })(n),
              m = i.scaleName(p),
              g =
                ("horizontal" === c && "y" === n) ||
                ("vertical" === c && "x" === n);
            let h;
            (r.size || o.size) &&
              (g
                ? (h = fu("size", i, { vgChannel: d, defaultRef: Dn(o.size) }))
                : ji(
                    (function (e) {
                      return 'Cannot apply size to non-oriented mark "'.concat(
                        e,
                        '".'
                      );
                    })(o.type)
                  ));
            const v = ia({
              channel: n,
              fieldDef: e,
              markDef: o,
              config: a,
              scaleType: null == u ? void 0 : u.get("type"),
              useVlSizeChannel: g,
            });
            h = h || { [d]: Fu(d, m || l, u, a, v) };
            const y =
                "band" === (null == u ? void 0 : u.get("type")) &&
                "band" in h[d]
                  ? "top"
                  : "middle",
              b = xu(n, o, a, y),
              x = "xc" === b || "yc" === b,
              { offset: w, offsetType: k } = gu({
                channel: n,
                markDef: o,
                encoding: r,
                model: i,
                bandPosition: x ? 0.5 : 0,
              }),
              S = _r({
                channel: n,
                channelDef: e,
                markDef: o,
                config: a,
                scaleName: l,
                scale: u,
                stack: s,
                offset: w,
                defaultRef: vu({
                  model: i,
                  defaultPos: "mid",
                  channel: n,
                  scaleName: l,
                  scale: u,
                }),
                bandPosition: x
                  ? "encoding" === k
                    ? 0
                    : 0.5
                  : gn(v)
                  ? { signal: "(1-".concat(v, ")/2") }
                  : Sr(v)
                  ? (1 - v.band) / 2
                  : 0,
              });
            if (d) return { [b]: S, ...h };
            {
              const e = tt(f),
                n = h[d],
                i = w ? { ...n, offset: w } : n;
              return {
                [b]: S,
                [e]: t.isArray(S)
                  ? [S[0], { ...S[1], offset: i }]
                  : { ...S, offset: i },
              };
            }
          })(d, n, e)
        : ku(n, e, { defaultPos: "zeroOrMax", defaultPos2: "zeroOrMin" })
      : (function (e) {
          var t, n, i;
          let { fieldDef: o, fieldDef2: r, channel: a, model: s } = e;
          const { config: c, markDef: l, encoding: u } = s,
            d = s.getScaleComponent(a),
            f = s.scaleName(a),
            p = d ? d.get("type") : void 0,
            m = d.get("reverse"),
            g = ia({
              channel: a,
              fieldDef: o,
              markDef: l,
              config: c,
              scaleType: p,
            }),
            h =
              null === (t = s.component.axes[a]) || void 0 === t
                ? void 0
                : t[0],
            v =
              null !== (n = null == h ? void 0 : h.get("translate")) &&
              void 0 !== n
                ? n
                : 0.5,
            y =
              Ft(a) && null !== (i = Cn("binSpacing", l, c)) && void 0 !== i
                ? i
                : 0,
            b = nt(a),
            x = tt(a),
            w = tt(b),
            { offset: k } = gu({
              channel: a,
              markDef: l,
              encoding: u,
              model: s,
              bandPosition: 0,
            }),
            S = gn(g)
              ? { signal: "(1-".concat(g.signal, ")/2") }
              : Sr(g)
              ? (1 - g.band) / 2
              : 0.5;
          if (an(o.bin) || o.timeUnit)
            return {
              [w]: _u({
                fieldDef: o,
                scaleName: f,
                bandPosition: S,
                offset: Ou(b, y, m, v, k),
              }),
              [x]: _u({
                fieldDef: o,
                scaleName: f,
                bandPosition: gn(S) ? { signal: "1-".concat(S.signal) } : 1 - S,
                offset: Ou(a, y, m, v, k),
              }),
            };
          if (sn(o.bin)) {
            const e = Pr(o, f, {}, { offset: Ou(b, y, m, v, k) });
            if (ca(r))
              return {
                [w]: e,
                [x]: Pr(r, f, {}, { offset: Ou(a, y, m, v, k) }),
              };
            if (cn(o.bin) && o.bin.step)
              return {
                [w]: e,
                [x]: {
                  signal: 'scale("'
                    .concat(f, '", ')
                    .concat(ka(o, { expr: "datum" }), " + ")
                    .concat(o.bin.step, ")"),
                  offset: Ou(a, y, m, v, k),
                },
              };
          }
          return void ji(_i(b));
        })({ fieldDef: d, fieldDef2: f, channel: n, model: e });
  }
  function Fu(e, n, i, o, r) {
    if (Sr(r)) {
      if (!i) return { mult: r.band, field: { group: e } };
      {
        const e = i.get("type");
        if ("band" === e) return { scale: n, band: r.band };
        1 !== r.band &&
          (ji(
            (function (e) {
              return "Cannot use the relative band size with ".concat(
                e,
                " scale."
              );
            })(e)
          ),
          (r = void 0));
      }
    } else {
      if (gn(r)) return r;
      if (r) return { value: r };
    }
    if (i) {
      const e = i.get("range");
      if (hn(e) && t.isNumber(e.step)) return { value: e.step - 2 };
    }
    return { value: oc(o.view, e) - 2 };
  }
  function Ou(e, t, n, i, o) {
    if (Ee(e)) return 0;
    const r = "x" === e || "y2" === e ? -t / 2 : t / 2;
    if (gn(n) || gn(o) || gn(i)) {
      const e = On(n),
        t = On(o),
        a = On(i);
      return {
        signal:
          (a ? "".concat(a, " + ") : "") +
          (e ? "(".concat(e, " ? -1 : 1) * ") : "") +
          (t ? "(".concat(t, " + ").concat(r, ")") : r),
      };
    }
    return (o = o || 0), i + (n ? -o - r : +o + r);
  }
  function _u(e) {
    let { fieldDef: t, scaleName: n, bandPosition: i, offset: o } = e;
    return Ar({ scaleName: n, fieldOrDatumDef: t, bandPosition: i, offset: o });
  }
  const zu = new Set(["aria", "width", "height"]);
  function Cu(e, t) {
    const { fill: n, stroke: i } = "include" === t.color ? pu(e) : {};
    return {
      ...Au(e.markDef, t),
      ...Pu(e, "fill", n),
      ...Pu(e, "stroke", i),
      ...fu("opacity", e),
      ...fu("fillOpacity", e),
      ...fu("strokeOpacity", e),
      ...fu("strokeWidth", e),
      ...fu("strokeDash", e),
      ...mu(e),
      ...au(e),
      ...ou(e, "href"),
      ...lu(e),
    };
  }
  function Pu(e, n, i) {
    const { config: o, mark: r, markDef: a } = e;
    if ("hide" === Cn("invalid", a, o) && i && !hr(r)) {
      const o = (function (e, t) {
        let { invalid: n = !1, channels: i } = t;
        const o = i.reduce((t, n) => {
            const i = e.getScaleComponent(n);
            if (i) {
              const o = i.get("type"),
                r = e.vgField(n, { expr: "datum" });
              r && Wo(o) && (t[r] = !0);
            }
            return t;
          }, {}),
          r = C(o);
        if (r.length > 0) {
          const e = n ? "||" : "&&";
          return r.map((e) => Cr(e, n)).join(" ".concat(e, " "));
        }
        return;
      })(e, { invalid: !0, channels: Bt });
      if (o) return { [n]: [{ test: o, value: null }, ...t.array(i)] };
    }
    return i ? { [n]: i } : {};
  }
  function Au(e, t) {
    return yn.reduce(
      (n, i) => (
        zu.has(i) || void 0 === e[i] || "ignore" === t[i] || (n[i] = Dn(e[i])),
        n
      ),
      {}
    );
  }
  function Nu(e) {
    const { config: t, markDef: n } = e;
    if (Cn("invalid", n, t)) {
      const t = (function (e, t) {
        let { invalid: n = !1, channels: i } = t;
        const o = i.reduce((t, n) => {
            const i = e.getScaleComponent(n);
            if (i) {
              const o = i.get("type"),
                r = e.vgField(n, { expr: "datum" });
              r && Wo(o) && (t[r] = !0);
            }
            return t;
          }, {}),
          r = C(o);
        if (r.length > 0) {
          const e = n ? "||" : "&&";
          return r.map((e) => Cr(e, n)).join(" ".concat(e, " "));
        }
        return;
      })(e, { channels: Dt });
      if (t) return { defined: { signal: t } };
    }
    return {};
  }
  function ju(e, t) {
    if (void 0 !== t) return { [e]: Dn(t) };
  }
  const Eu = "voronoi",
    Mu = {
      defined: (e) => "point" === e.type && e.nearest,
      parse: (e, t) => {
        if (t.events) for (const n of t.events) n.markname = e.getName(Eu);
      },
      marks: (e, t, n) => {
        const { x: i, y: o } = t.project.hasChannel,
          r = e.mark;
        if (hr(r))
          return (
            ji(
              'The "nearest" transform is not supported for '.concat(
                r,
                " marks."
              )
            ),
            n
          );
        const a = {
          name: e.getName(Eu),
          type: "path",
          interactive: !0,
          from: { data: e.getName("marks") },
          encode: {
            update: {
              fill: { value: "transparent" },
              strokeWidth: { value: 0.35 },
              stroke: { value: "transparent" },
              isVoronoi: { value: !0 },
              ...au(e, { reactiveGeom: !0 }),
            },
          },
          transform: [
            {
              type: "voronoi",
              x: { expr: i || !o ? "datum.datum.x || 0" : "0" },
              y: { expr: o || !i ? "datum.datum.y || 0" : "0" },
              size: [e.getSizeSignalRef("width"), e.getSizeSignalRef("height")],
            },
          ],
        };
        let s = 0,
          c = !1;
        return (
          n.forEach((t, n) => {
            var i;
            const o = null !== (i = t.name) && void 0 !== i ? i : "";
            o === e.component.mark[0].name
              ? (s = n)
              : o.indexOf(Eu) >= 0 && (c = !0);
          }),
          c || n.splice(s + 1, 0, a),
          n
        );
      },
    },
    Tu = {
      defined: (e) =>
        "point" === e.type &&
        "global" === e.resolve &&
        e.bind &&
        "scales" !== e.bind &&
        !Vs(e.bind),
      parse: (e, t, n) => id(t, n),
      topLevelSignals: (e, n, i) => {
        const o = n.name,
          r = n.project,
          a = n.bind,
          s = n.init && n.init[0],
          c = Mu.defined(n)
            ? "(item().isVoronoi ? datum.datum : datum)"
            : "datum";
        return (
          r.items.forEach((e, r) => {
            const l = j("".concat(o, "_").concat(e.field));
            var u, d;
            i.filter((e) => e.name === l).length ||
              i.unshift({
                name: l,
                ...(s ? { init: ql(s[r]) } : { value: null }),
                on: n.events
                  ? [
                      {
                        events: n.events,
                        update: "datum && item().mark.marktype !== 'group' ? "
                          .concat(c, "[")
                          .concat(t.stringValue(e.field), "] : null"),
                      },
                    ]
                  : [],
                bind:
                  null !==
                    (u =
                      null !== (d = a[e.field]) && void 0 !== d
                        ? d
                        : a[e.channel]) && void 0 !== u
                    ? u
                    : a,
              });
          }),
          i
        );
      },
      signals: (e, t, n) => {
        const i = t.name,
          o = t.project,
          r = n.filter((e) => e.name === i + Qu)[0],
          a = i + Gl,
          s = o.items.map((e) => j("".concat(i, "_").concat(e.field))),
          c = s.map((e) => "".concat(e, " !== null")).join(" && ");
        return (
          s.length &&
            (r.update = ""
              .concat(c, " ? {fields: ")
              .concat(a, ", values: [")
              .concat(s.join(", "), "]} : null")),
          delete r.value,
          delete r.on,
          n
        );
      },
    },
    Lu = "_toggle",
    qu = {
      defined: (e) => "point" === e.type && !!e.toggle,
      signals: (e, t, n) =>
        n.concat({
          name: t.name + Lu,
          value: !1,
          on: [{ events: t.events, update: t.toggle }],
        }),
      modifyExpr: (e, t) => {
        const n = t.name + Qu,
          i = t.name + Lu;
        return (
          "".concat(i, " ? null : ").concat(n, ", ") +
          ("global" === t.resolve
            ? "".concat(i, " ? null : true, ")
            : "".concat(i, " ? null : {unit: ").concat(td(e), "}, ")) +
          "".concat(i, " ? ").concat(n, " : null")
        );
      },
    },
    Wu = {
      defined: (e) => void 0 !== e.clear && !1 !== e.clear,
      parse: (e, n) => {
        n.clear &&
          (n.clear = t.isString(n.clear)
            ? t.parseSelector(n.clear, "view")
            : n.clear);
      },
      topLevelSignals: (e, t, n) => {
        if (Tu.defined(t))
          for (const e of t.project.items) {
            const i = n.findIndex(
              (n) => n.name === j("".concat(t.name, "_").concat(e.field))
            );
            -1 !== i && n[i].on.push({ events: t.clear, update: "null" });
          }
        return n;
      },
      signals: (e, t, n) => {
        function i(e, i) {
          -1 !== e && n[e].on && n[e].on.push({ events: t.clear, update: i });
        }
        if ("interval" === t.type)
          for (const e of t.project.items) {
            const t = n.findIndex((t) => t.name === e.signals.visual);
            if ((i(t, "[0, 0]"), -1 === t)) {
              i(
                n.findIndex((t) => t.name === e.signals.data),
                "null"
              );
            }
          }
        else {
          let e = n.findIndex((e) => e.name === t.name + Qu);
          i(e, "null"),
            qu.defined(t) &&
              ((e = n.findIndex((e) => e.name === t.name + Lu)), i(e, "false"));
        }
        return n;
      },
    },
    Ru = {
      defined: (e) => {
        const t = "global" === e.resolve && e.bind && Vs(e.bind),
          n = 1 === e.project.items.length && e.project.items[0].field !== Bs;
        return (
          t &&
            !n &&
            ji(
              "Legend bindings are only supported for selections over an individual field or encoding channel."
            ),
          t && n
        );
      },
      parse: (e, n, i) => {
        const o = d(i);
        if (
          ((o.select = t.isString(o.select)
            ? { type: o.select, toggle: n.toggle }
            : { ...o.select, toggle: n.toggle }),
          id(n, o),
          t.isObject(i.select) && (i.select.on || i.select.clear))
        ) {
          const e = 'event.item && indexof(event.item.mark.role, "legend") < 0';
          for (const i of n.events) {
            var r;
            (i.filter = t.array(
              null !== (r = i.filter) && void 0 !== r ? r : []
            )),
              i.filter.includes(e) || i.filter.push(e);
          }
        }
        const a = Is(n.bind) ? n.bind.legend : "click",
          s = t.isString(a) ? t.parseSelector(a, "view") : t.array(a);
        n.bind = { legend: { merge: s } };
      },
      topLevelSignals: (e, t, n) => {
        const i = t.name,
          o = Is(t.bind) && t.bind.legend,
          r = (e) => (t) => {
            const n = d(t);
            return (n.markname = e), n;
          };
        for (const e of t.project.items) {
          if (!e.hasLegend) continue;
          const a = "".concat(j(e.field), "_legend"),
            s = "".concat(i, "_").concat(a);
          if (0 === n.filter((e) => e.name === s).length) {
            const e = o.merge
              .map(r("".concat(a, "_symbols")))
              .concat(o.merge.map(r("".concat(a, "_labels"))))
              .concat(o.merge.map(r("".concat(a, "_entries"))));
            n.unshift({
              name: s,
              ...(t.init ? {} : { value: null }),
              on: [
                {
                  events: e,
                  update: "datum.value || item().items[0].items[0].datum.value",
                  force: !0,
                },
                {
                  events: o.merge,
                  update: "!event.item || !datum ? null : ".concat(s),
                  force: !0,
                },
              ],
            });
          }
        }
        return n;
      },
      signals: (e, t, n) => {
        const i = t.name,
          o = t.project,
          r = n.find((e) => e.name === i + Qu),
          a = i + Gl,
          s = o.items
            .filter((e) => e.hasLegend)
            .map((e) => j("".concat(i, "_").concat(j(e.field), "_legend"))),
          c = s.map((e) => "".concat(e, " !== null")).join(" && "),
          l = ""
            .concat(c, " ? {fields: ")
            .concat(a, ", values: [")
            .concat(s.join(", "), "]} : null");
        t.events && s.length > 0
          ? r.on.push({ events: s.map((e) => ({ signal: e })), update: l })
          : s.length > 0 && ((r.update = l), delete r.value, delete r.on);
        const u = n.find((e) => e.name === i + Lu),
          d = Is(t.bind) && t.bind.legend;
        return (
          u &&
            (t.events
              ? u.on.push({ ...u.on[0], events: d })
              : (u.on[0].events = d)),
          n
        );
      },
    };
  const Uu = "_translate_anchor",
    Bu = "_translate_delta",
    Hu = {
      defined: (e) => "interval" === e.type && e.translate,
      signals: (e, n, i) => {
        const o = n.name,
          r = Jl.defined(n),
          a = o + Uu,
          { x: s, y: c } = n.project.hasChannel;
        let l = t.parseSelector(n.translate, "scope");
        return (
          r || (l = l.map((e) => ((e.between[0].markname = o + Kl), e))),
          i.push(
            {
              name: a,
              value: {},
              on: [
                {
                  events: l.map((e) => e.between[0]),
                  update:
                    "{x: x(unit), y: y(unit)" +
                    (void 0 !== s
                      ? ", extent_x: ".concat(
                          r ? Ql(e, ee) : "slice(".concat(s.signals.visual, ")")
                        )
                      : "") +
                    (void 0 !== c
                      ? ", extent_y: ".concat(
                          r ? Ql(e, te) : "slice(".concat(c.signals.visual, ")")
                        )
                      : "") +
                    "}",
                },
              ],
            },
            {
              name: o + Bu,
              value: {},
              on: [
                {
                  events: l,
                  update: "{x: "
                    .concat(a, ".x - x(unit), y: ")
                    .concat(a, ".y - y(unit)}"),
                },
              ],
            }
          ),
          void 0 !== s && Vu(e, n, s, "width", i),
          void 0 !== c && Vu(e, n, c, "height", i),
          i
        );
      },
    };
  function Vu(e, t, n, i, o) {
    var r, a;
    const s = t.name,
      c = s + Uu,
      l = s + Bu,
      u = n.channel,
      d = Jl.defined(t),
      f = o.filter((e) => e.name === n.signals[d ? "data" : "visual"])[0],
      p = e.getSizeSignalRef(i).signal,
      m = e.getScaleComponent(u),
      g = m.get("type"),
      h = m.get("reverse"),
      v = d ? (u === ee ? (h ? "" : "-") : h ? "-" : "") : "",
      y = "".concat(c, ".extent_").concat(u),
      b = ""
        .concat(v)
        .concat(l, ".")
        .concat(u, " / ")
        .concat(d ? "".concat(p) : "span(".concat(y, ")")),
      x = d
        ? "log" === g
          ? "panLog"
          : "symlog" === g
          ? "panSymlog"
          : "pow" === g
          ? "panPow"
          : "panLinear"
        : "panLinear",
      w = d
        ? "pow" === g
          ? ", ".concat(
              null !== (r = m.get("exponent")) && void 0 !== r ? r : 1
            )
          : "symlog" === g
          ? ", ".concat(
              null !== (a = m.get("constant")) && void 0 !== a ? a : 1
            )
          : ""
        : "",
      k = "".concat(x, "(").concat(y, ", ").concat(b).concat(w, ")");
    f.on.push({
      events: { signal: l },
      update: d ? k : "clampRange(".concat(k, ", 0, ").concat(p, ")"),
    });
  }
  const Iu = "_zoom_anchor",
    Gu = "_zoom_delta",
    Yu = {
      defined: (e) => "interval" === e.type && e.zoom,
      signals: (e, n, i) => {
        const o = n.name,
          r = Jl.defined(n),
          a = o + Gu,
          { x: s, y: c } = n.project.hasChannel,
          l = t.stringValue(e.scaleName(ee)),
          u = t.stringValue(e.scaleName(te));
        let d = t.parseSelector(n.zoom, "scope");
        return (
          r || (d = d.map((e) => ((e.markname = o + Kl), e))),
          i.push(
            {
              name: o + Iu,
              on: [
                {
                  events: d,
                  update: r
                    ? "{" +
                      [
                        l ? "x: invert(".concat(l, ", x(unit))") : "",
                        u ? "y: invert(".concat(u, ", y(unit))") : "",
                      ]
                        .filter((e) => !!e)
                        .join(", ") +
                      "}"
                    : "{x: x(unit), y: y(unit)}",
                },
              ],
            },
            {
              name: a,
              on: [
                {
                  events: d,
                  force: !0,
                  update: "pow(1.001, event.deltaY * pow(16, event.deltaMode))",
                },
              ],
            }
          ),
          void 0 !== s && Xu(e, n, s, "width", i),
          void 0 !== c && Xu(e, n, c, "height", i),
          i
        );
      },
    };
  function Xu(e, t, n, i, o) {
    var r, a;
    const s = t.name,
      c = n.channel,
      l = Jl.defined(t),
      u = o.filter((e) => e.name === n.signals[l ? "data" : "visual"])[0],
      d = e.getSizeSignalRef(i).signal,
      f = e.getScaleComponent(c),
      p = f.get("type"),
      m = l ? Ql(e, c) : u.name,
      g = s + Gu,
      h = "".concat(s).concat(Iu, ".").concat(c),
      v = l
        ? "log" === p
          ? "zoomLog"
          : "symlog" === p
          ? "zoomSymlog"
          : "pow" === p
          ? "zoomPow"
          : "zoomLinear"
        : "zoomLinear",
      y = l
        ? "pow" === p
          ? ", ".concat(
              null !== (r = f.get("exponent")) && void 0 !== r ? r : 1
            )
          : "symlog" === p
          ? ", ".concat(
              null !== (a = f.get("constant")) && void 0 !== a ? a : 1
            )
          : ""
        : "",
      b = ""
        .concat(v, "(")
        .concat(m, ", ")
        .concat(h, ", ")
        .concat(g)
        .concat(y, ")");
    u.on.push({
      events: { signal: g },
      update: l ? b : "clampRange(".concat(b, ", 0, ").concat(d, ")"),
    });
  }
  const Ju = "_store",
    Qu = "_tuple",
    $u = "_modify",
    Ku = "vlSelectionResolve",
    Zu = [nu, eu, Xl, qu, Tu, Jl, Ru, Wu, Hu, Yu, Mu];
  function ed(e) {
    let t = e.parent;
    for (; t && !Rp(t); ) t = t.parent;
    return t;
  }
  function td(e) {
    let { escape: n } =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { escape: !0 },
      i = n ? t.stringValue(e.name) : e.name;
    const o = ed(e);
    if (o) {
      const { facet: e } = o;
      for (const n of Re)
        e[n] &&
          (i += " + '__facet_"
            .concat(n, "_' + (facet[")
            .concat(t.stringValue(o.vgField(n)), "])"));
    }
    return i;
  }
  function nd(e) {
    var t;
    return P(
      null !== (t = e.component.selection) && void 0 !== t ? t : {}
    ).reduce((e, t) => e || t.project.items.some((e) => e.field === Bs), !1);
  }
  function id(e, n) {
    (!t.isString(n.select) && n.select.on) || delete e.events,
      (!t.isString(n.select) && n.select.clear) || delete e.clear,
      (!t.isString(n.select) && n.select.toggle) || delete e.toggle;
  }
  function od(e) {
    const t = [];
    return "Identifier" === e.type
      ? [e.name]
      : "Literal" === e.type
      ? [e.value]
      : ("MemberExpression" === e.type &&
          (t.push(...od(e.object)), t.push(...od(e.property))),
        t);
  }
  function rd(e) {
    return "MemberExpression" === e.object.type
      ? rd(e.object)
      : "datum" === e.object.name;
  }
  function ad(e) {
    const n = t.parseExpression(e),
      i = new Set();
    return (
      n.visit((e) => {
        "MemberExpression" === e.type &&
          rd(e) &&
          i.add(od(e).slice(1).join("."));
      }),
      i
    );
  }
  class sd extends Hl {
    clone() {
      return new sd(null, this.model, d(this.filter));
    }
    constructor(e, t, n) {
      super(e),
        (this.model = t),
        (this.filter = n),
        Ln(this, "expr", void 0),
        Ln(this, "_dependentFields", void 0),
        (this.expr = ud(this.model, this.filter, this)),
        (this._dependentFields = ad(this.expr));
    }
    dependentFields() {
      return this._dependentFields;
    }
    producedFields() {
      return new Set();
    }
    assemble() {
      return { type: "filter", expr: this.expr };
    }
    hash() {
      return "Filter ".concat(this.expr);
    }
  }
  function cd(e, n, i) {
    let o =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "datum";
    const r = t.isString(n) ? n : n.param,
      a = j(r),
      s = t.stringValue(a + Ju);
    let c;
    try {
      c = e.getSelectionComponent(a, r);
    } catch (e) {
      return "!!".concat(a);
    }
    if (c.project.timeUnit) {
      const t = null != i ? i : e.component.data.raw,
        n = c.project.timeUnit.clone();
      t.parent ? n.insertAsParentOf(t) : (t.parent = n);
    }
    const l = "vlSelectionTest("
        .concat(s, ", ")
        .concat(o)
        .concat(
          "global" === c.resolve
            ? ")"
            : ", ".concat(t.stringValue(c.resolve), ")")
        ),
      u = "length(data(".concat(s, "))");
    return !1 === n.empty
      ? "".concat(u, " && ").concat(l)
      : "!".concat(u, " || ").concat(l);
  }
  function ld(e, n, i) {
    const o = j(n),
      r = i.encoding;
    let a,
      s = i.field;
    try {
      a = e.getSelectionComponent(o, n);
    } catch (e) {
      return o;
    }
    if (r || s) {
      if (r && !s) {
        const e = a.project.items.filter((e) => e.channel === r);
        !e.length || e.length > 1
          ? ((s = a.project.items[0].field),
            ji(
              (e.length ? "Multiple " : "No ") +
                "matching "
                  .concat(t.stringValue(r), " encoding found for selection ")
                  .concat(t.stringValue(i.param), ". ") +
                'Using "field": '.concat(t.stringValue(s), ".")
            ))
          : (s = e[0].field);
      }
    } else (s = a.project.items[0].field), a.project.items.length > 1 && ji('A "field" or "encoding" must be specified when using a selection as a scale domain. ' + 'Using "field": '.concat(t.stringValue(s), "."));
    return "".concat(a.name, "[").concat(t.stringValue(R(s)), "]");
  }
  function ud(e, n, i) {
    return E(n, (n) =>
      t.isString(n)
        ? n
        : (function (e) {
            return null == e ? void 0 : e.param;
          })(n)
        ? cd(e, n, i)
        : uo(n)
    );
  }
  function dd(e, n) {
    if (e)
      return t.isArray(e) && !mn(e) ? e.map((e) => Aa(e, n)).join(", ") : e;
  }
  function fd(e, t, n, i) {
    var o, r, a, s, c;
    (null !== (o = e.encode) && void 0 !== o) || (e.encode = {}),
      (null !== (a = (r = e.encode)[t]) && void 0 !== a) || (r[t] = {}),
      (null !== (c = (s = e.encode[t]).update) && void 0 !== c) ||
        (s.update = {}),
      (e.encode[t].update[n] = i);
  }
  function pd(e, n, i) {
    let o =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : { header: !1 };
    const {
      disable: r,
      orient: a,
      scale: s,
      labelExpr: c,
      title: l,
      zindex: u,
      ...d
    } = e.combine();
    if (!r) {
      for (const e in d) {
        const i = Ja[e],
          o = d[e];
        if (i && i !== n && "both" !== i) delete d[e];
        else if (Ya(o)) {
          const { condition: n, ...i } = o,
            r = t.array(n),
            a = Ga[e];
          if (a) {
            const { vgProp: t, part: n } = a;
            fd(d, n, t, [
              ...r.map((e) => {
                const { test: t, ...n } = e;
                return { test: ud(null, t), ...n };
              }),
              i,
            ]),
              delete d[e];
          } else if (null === a) {
            const t = {
              signal:
                r
                  .map((e) => {
                    const { test: t, ...n } = e;
                    return "".concat(ud(null, t), " ? ").concat(Fn(n), " : ");
                  })
                  .join("") + Fn(i),
            };
            d[e] = t;
          }
        } else if (gn(o)) {
          const t = Ga[e];
          if (t) {
            const { vgProp: n, part: i } = t;
            fd(d, i, n, o), delete d[e];
          }
        }
        y(["labelAlign", "labelBaseline"], e) && null === d[e] && delete d[e];
      }
      if ("grid" === n) {
        if (!d.grid) return;
        if (d.encode) {
          const { grid: e } = d.encode;
          (d.encode = { ...(e ? { grid: e } : {}) }),
            z(d.encode) && delete d.encode;
        }
        return {
          scale: s,
          orient: a,
          ...d,
          domain: !1,
          labels: !1,
          aria: !1,
          maxExtent: 0,
          minExtent: 0,
          ticks: !1,
          zindex: V(u, 0),
        };
      }
      {
        if (!o.header && e.mainExtracted) return;
        if (void 0 !== c) {
          var f, p;
          let e = c;
          null !== (f = d.encode) &&
            void 0 !== f &&
            null !== (p = f.labels) &&
            void 0 !== p &&
            p.update &&
            gn(d.encode.labels.update.text) &&
            (e = U(c, "datum.label", d.encode.labels.update.text.signal)),
            fd(d, "labels", "text", { signal: e });
        }
        if ((null === d.labelAlign && delete d.labelAlign, d.encode)) {
          for (const t of Xa) e.hasAxisPart(t) || delete d.encode[t];
          z(d.encode) && delete d.encode;
        }
        const t = dd(l, i);
        return {
          scale: s,
          orient: a,
          grid: !1,
          ...(t ? { title: t } : {}),
          ...d,
          ...(!1 === i.aria ? { aria: !1 } : {}),
          zindex: V(u, 0),
        };
      }
    }
  }
  function md(e) {
    const { axes: t } = e.component,
      n = [];
    for (const i of Dt)
      if (t[i])
        for (const o of t[i])
          if (!o.get("disable") && !o.get("gridScale")) {
            const t = "x" === i ? "height" : "width",
              o = e.getSizeSignalRef(t).signal;
            t !== o && n.push({ name: t, update: o });
          }
    return n;
  }
  function gd(e, t, n, i) {
    return Object.assign.apply(null, [
      {},
      ...e.map((e) => {
        if ("axisOrient" === e) {
          const e = "x" === n ? "bottom" : "left",
            o = t["x" === n ? "axisBottom" : "axisLeft"] || {},
            r = t["x" === n ? "axisTop" : "axisRight"] || {},
            a = new Set([...C(o), ...C(r)]),
            s = {};
          for (const t of a.values())
            s[t] = {
              signal: ""
                .concat(i.signal, ' === "')
                .concat(e, '" ? ')
                .concat(On(o[t]), " : ")
                .concat(On(r[t])),
            };
          return s;
        }
        return t[e];
      }),
    ]);
  }
  function hd(e, n) {
    const i = [{}];
    for (const r of e) {
      var o;
      let e = null === (o = n[r]) || void 0 === o ? void 0 : o.style;
      if (e) {
        e = t.array(e);
        for (const t of e) i.push(n.style[t]);
      }
    }
    return Object.assign.apply(null, i);
  }
  function vd(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    const o = Nn(e, n, t);
    if (void 0 !== o) return { configFrom: "style", configValue: o };
    for (const t of ["vlOnlyAxisConfig", "vgAxisConfig", "axisConfigStyle"]) {
      var r;
      if (void 0 !== (null === (r = i[t]) || void 0 === r ? void 0 : r[e]))
        return { configFrom: t, configValue: i[t][e] };
    }
    return {};
  }
  const yd = {
    scale: (e) => {
      let { model: t, channel: n } = e;
      return t.scaleName(n);
    },
    format: (e) => {
      let { fieldOrDatumDef: t, config: n, axis: i } = e;
      const { format: o, formatType: r } = i;
      return Wr(t, t.type, o, r, n, !0);
    },
    formatType: (e) => {
      let { axis: t, fieldOrDatumDef: n, scaleType: i } = e;
      const { formatType: o } = t;
      return Rr(o, n, i);
    },
    grid: (e) => {
      var t;
      let { fieldOrDatumDef: n, axis: i, scaleType: o } = e;
      return null !== (t = i.grid) && void 0 !== t
        ? t
        : (function (e, t) {
            return (
              !qo(e) &&
              ca(t) &&
              !an(null == t ? void 0 : t.bin) &&
              !sn(null == t ? void 0 : t.bin)
            );
          })(o, n);
    },
    gridScale: (e) => {
      let { model: t, channel: n } = e;
      return (function (e, t) {
        const n = "x" === t ? "y" : "x";
        if (e.getScaleComponent(n)) return e.scaleName(n);
        return;
      })(t, n);
    },
    labelAlign: (e) => {
      let { axis: t, labelAngle: n, orient: i, channel: o } = e;
      return t.labelAlign || wd(n, i, o);
    },
    labelAngle: (e) => {
      let { labelAngle: t } = e;
      return t;
    },
    labelBaseline: (e) => {
      let { axis: t, labelAngle: n, orient: i, channel: o } = e;
      return t.labelBaseline || xd(n, i, o);
    },
    labelFlush: (e) => {
      var t;
      let { axis: n, fieldOrDatumDef: i, channel: o } = e;
      return null !== (t = n.labelFlush) && void 0 !== t
        ? t
        : (function (e, t) {
            if ("x" === t && y(["quantitative", "temporal"], e)) return !0;
            return;
          })(i.type, o);
    },
    labelOverlap: (e) => {
      var n;
      let { axis: i, fieldOrDatumDef: o, scaleType: r } = e;
      return null !== (n = i.labelOverlap) && void 0 !== n
        ? n
        : (function (e, n, i, o) {
            if ((i && !t.isObject(o)) || ("nominal" !== e && "ordinal" !== e))
              return ("log" !== n && "symlog" !== n) || "greedy";
            return;
          })(o.type, r, ca(o) && !!o.timeUnit, ca(o) ? o.sort : void 0);
    },
    orient: (e) => {
      let { orient: t } = e;
      return t;
    },
    tickCount: (e) => {
      var t;
      let {
        channel: n,
        model: i,
        axis: o,
        fieldOrDatumDef: r,
        scaleType: a,
      } = e;
      const s = "x" === n ? "width" : "y" === n ? "height" : void 0,
        c = s ? i.getSizeSignalRef(s) : void 0;
      return null !== (t = o.tickCount) && void 0 !== t
        ? t
        : (function (e) {
            let { fieldOrDatumDef: t, scaleType: n, size: i, values: o } = e;
            if (!o && !qo(n) && "log" !== n) {
              if (ca(t)) {
                var r;
                if (an(t.bin))
                  return { signal: "ceil(".concat(i.signal, "/10)") };
                if (
                  t.timeUnit &&
                  y(
                    ["month", "hours", "day", "quarter"],
                    null === (r = $i(t.timeUnit)) || void 0 === r
                      ? void 0
                      : r.unit
                  )
                )
                  return;
              }
              return { signal: "ceil(".concat(i.signal, "/40)") };
            }
            return;
          })({ fieldOrDatumDef: r, scaleType: a, size: c, values: o.values });
    },
    title: (e) => {
      let { axis: t, model: n, channel: i } = e;
      if (void 0 !== t.title) return t.title;
      const o = kd(n, i);
      if (void 0 !== o) return o;
      const r = n.typedFieldDef(i),
        a = "x" === i ? "x2" : "y2",
        s = n.fieldDef(a);
      return En(r ? [ea(r)] : [], ca(s) ? [ea(s)] : []);
    },
    values: (e) => {
      let { axis: n, fieldOrDatumDef: i } = e;
      return (function (e, n) {
        const i = e.values;
        if (t.isArray(i)) return Va(n, i);
        if (gn(i)) return i;
        return;
      })(n, i);
    },
    zindex: (e) => {
      var t;
      let { axis: n, fieldOrDatumDef: i, mark: o } = e;
      return null !== (t = n.zindex) && void 0 !== t
        ? t
        : (function (e, t) {
            if ("rect" === e && Sa(t)) return 1;
            return 0;
          })(o, i);
    },
  };
  function bd(e) {
    return "(((".concat(e.signal, " % 360) + 360) % 360)");
  }
  function xd(e, t, n, i) {
    if (void 0 !== e) {
      if ("x" === n) {
        if (gn(e)) {
          const n = bd(e),
            i = gn(t) ? "(".concat(t.signal, ' === "top")') : "top" === t;
          return {
            signal:
              "(45 < "
                .concat(n, " && ")
                .concat(n, " < 135) || (225 < ")
                .concat(n, " && ")
                .concat(n, ' < 315) ? "middle" :') +
              "("
                .concat(n, " <= 45 || 315 <= ")
                .concat(n, ") === ")
                .concat(i, ' ? "bottom" : "top"'),
          };
        }
        if ((45 < e && e < 135) || (225 < e && e < 315)) return "middle";
        if (gn(t)) {
          const n = e <= 45 || 315 <= e ? "===" : "!==";
          return {
            signal: ""
              .concat(t.signal, " ")
              .concat(n, ' "top" ? "bottom" : "top"'),
          };
        }
        return (e <= 45 || 315 <= e) == ("top" === t) ? "bottom" : "top";
      }
      if (gn(e)) {
        const n = bd(e),
          o = gn(t) ? "(".concat(t.signal, ' === "left")') : "left" === t,
          r = i ? '"middle"' : "null";
        return {
          signal: ""
            .concat(n, " <= 45 || 315 <= ")
            .concat(n, " || (135 <= ")
            .concat(n, " && ")
            .concat(n, " <= 225) ? ")
            .concat(r, " : (45 <= ")
            .concat(n, " && ")
            .concat(n, " <= 135) === ")
            .concat(o, ' ? "top" : "bottom"'),
        };
      }
      if (e <= 45 || 315 <= e || (135 <= e && e <= 225))
        return i ? "middle" : null;
      if (gn(t)) {
        const n = 45 <= e && e <= 135 ? "===" : "!==";
        return {
          signal: ""
            .concat(t.signal, " ")
            .concat(n, ' "left" ? "top" : "bottom"'),
        };
      }
      return (45 <= e && e <= 135) == ("left" === t) ? "top" : "bottom";
    }
  }
  function wd(e, t, n) {
    if (void 0 === e) return;
    const i = "x" === n,
      o = i ? 0 : 90,
      r = i ? "bottom" : "left";
    if (gn(e)) {
      const n = bd(e),
        a = gn(t) ? "(".concat(t.signal, ' === "').concat(r, '")') : t === r;
      return {
        signal:
          "("
            .concat(o ? "(".concat(n, " + 90)") : n, " % 180 === 0) ? ")
            .concat(i ? null : '"center"', " :") +
          "("
            .concat(o, " < ")
            .concat(n, " && ")
            .concat(n, " < ")
            .concat(180 + o, ") === ")
            .concat(a, ' ? "left" : "right"'),
      };
    }
    if ((e + o) % 180 == 0) return i ? null : "center";
    if (gn(t)) {
      const n = o < e && e < 180 + o ? "===" : "!==",
        i = "".concat(t.signal, " ").concat(n, ' "').concat(r, '"');
      return { signal: "".concat(i, ' ? "left" : "right"') };
    }
    return (o < e && e < 180 + o) == (t === r) ? "left" : "right";
  }
  function kd(e, t) {
    const n = "x" === t ? "x2" : "y2",
      i = e.fieldDef(t),
      o = e.fieldDef(n),
      r = i ? i.title : void 0,
      a = o ? o.title : void 0;
    return r && a
      ? Mn(r, a)
      : r || a || (void 0 !== r ? r : void 0 !== a ? a : void 0);
  }
  class Sd extends Hl {
    clone() {
      return new Sd(null, d(this.transform));
    }
    constructor(e, t) {
      super(e),
        (this.transform = t),
        Ln(this, "_dependentFields", void 0),
        (this._dependentFields = ad(this.transform.calculate));
    }
    static parseAllForSortIndex(e, t) {
      return (
        t.forEachFieldDef((t, n) => {
          if (ha(t) && Qr(t.sort)) {
            const { field: i, timeUnit: o } = t,
              r = t.sort,
              a =
                r
                  .map((e, t) =>
                    ""
                      .concat(uo({ field: i, timeUnit: o, equal: e }), " ? ")
                      .concat(t, " : ")
                  )
                  .join("") + r.length;
            e = new Sd(e, { calculate: a, as: Dd(t, n, { forAs: !0 }) });
          }
        }),
        e
      );
    }
    producedFields() {
      return new Set([this.transform.as]);
    }
    dependentFields() {
      return this._dependentFields;
    }
    assemble() {
      return {
        type: "formula",
        expr: this.transform.calculate,
        as: this.transform.as,
      };
    }
    hash() {
      return "Calculate ".concat(h(this.transform));
    }
  }
  function Dd(e, t, n) {
    return ka(e, { prefix: t, suffix: "sort_index", ...(null != n ? n : {}) });
  }
  function Fd(e, t) {
    return y(["top", "bottom"], t)
      ? "column"
      : y(["left", "right"], t) || "row" === e
      ? "row"
      : "column";
  }
  function Od(e, t, n, i) {
    const o =
      "row" === i
        ? n.headerRow
        : "column" === i
        ? n.headerColumn
        : n.headerFacet;
    return V((t || {})[e], o[e], n.header[e]);
  }
  function _d(e, t, n, i) {
    const o = {};
    for (const r of e) {
      const e = Od(r, t || {}, n, i);
      void 0 !== e && (o[r] = e);
    }
    return o;
  }
  const zd = ["row", "column"],
    Cd = ["header", "footer"];
  function Pd(e, t) {
    const n = e.component.layoutHeaders[t].title,
      i = e.config ? e.config : void 0,
      o = e.component.layoutHeaders[t].facetFieldDef
        ? e.component.layoutHeaders[t].facetFieldDef
        : void 0,
      {
        titleAnchor: r,
        titleAngle: a,
        titleOrient: s,
      } = _d(["titleAnchor", "titleAngle", "titleOrient"], o.header, i, t),
      c = Fd(t, s),
      l = J(a);
    return {
      name: "".concat(t, "-title"),
      type: "group",
      role: "".concat(c, "-title"),
      title: {
        text: n,
        ...("row" === t ? { orient: "left" } : {}),
        style: "guide-title",
        ...Nd(l, c),
        ...Ad(c, l, r),
        ...Wd(i, o, t, qs, Ts),
      },
    };
  }
  function Ad(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "middle";
    switch (n) {
      case "start":
        return { align: "left" };
      case "end":
        return { align: "right" };
    }
    const i = wd(t, "row" === e ? "left" : "top", "row" === e ? "y" : "x");
    return i ? { align: i } : {};
  }
  function Nd(e, t) {
    const n = xd(e, "row" === t ? "left" : "top", "row" === t ? "y" : "x", !0);
    return n ? { baseline: n } : {};
  }
  function jd(e, t) {
    const n = e.component.layoutHeaders[t],
      i = [];
    for (const o of Cd)
      if (n[o])
        for (const r of n[o]) {
          const a = Td(e, t, o, n, r);
          null != a && i.push(a);
        }
    return i;
  }
  function Ed(e, n) {
    const { sort: i } = e;
    var o;
    return Jr(i)
      ? {
          field: ka(i, { expr: "datum" }),
          order: null !== (o = i.order) && void 0 !== o ? o : "ascending",
        }
      : t.isArray(i)
      ? { field: Dd(e, n, { expr: "datum" }), order: "ascending" }
      : { field: ka(e, { expr: "datum" }), order: null != i ? i : "ascending" };
  }
  function Md(e, t, n) {
    const {
        format: i,
        formatType: o,
        labelAngle: r,
        labelAnchor: a,
        labelOrient: s,
        labelExpr: c,
      } = _d(
        [
          "format",
          "formatType",
          "labelAngle",
          "labelAnchor",
          "labelOrient",
          "labelExpr",
        ],
        e.header,
        n,
        t
      ),
      l = Tr({
        fieldOrDatumDef: e,
        format: i,
        formatType: o,
        expr: "parent",
        config: n,
      }).signal,
      u = Fd(t, s);
    return {
      text: {
        signal: c
          ? U(U(c, "datum.label", l), "datum.value", ka(e, { expr: "parent" }))
          : l,
      },
      ...("row" === t ? { orient: "left" } : {}),
      style: "guide-label",
      frame: "group",
      ...Nd(r, u),
      ...Ad(u, r, a),
      ...Wd(n, e, t, Ws, Ls),
    };
  }
  function Td(e, t, n, i, o) {
    if (o) {
      let r = null;
      const { facetFieldDef: a } = i,
        s = e.config ? e.config : void 0;
      if (a && o.labels) {
        const { labelOrient: e } = _d(["labelOrient"], a.header, s, t);
        (("row" === t && !y(["top", "bottom"], e)) ||
          ("column" === t && !y(["left", "right"], e))) &&
          (r = Md(a, t, s));
      }
      const c = Rp(e) && !$r(e.facet),
        l = o.axes,
        u = (null == l ? void 0 : l.length) > 0;
      if (r || u) {
        const s = "row" === t ? "height" : "width";
        return {
          name: e.getName("".concat(t, "_").concat(n)),
          type: "group",
          role: "".concat(t, "-").concat(n),
          ...(i.facetFieldDef
            ? {
                from: { data: e.getName("".concat(t, "_domain")) },
                sort: Ed(a, t),
              }
            : {}),
          ...(u && c
            ? { from: { data: e.getName("facet_domain_".concat(t)) } }
            : {}),
          ...(r ? { title: r } : {}),
          ...(o.sizeSignal
            ? { encode: { update: { [s]: o.sizeSignal } } }
            : {}),
          ...(u ? { axes: l } : {}),
        };
      }
    }
    return null;
  }
  const Ld = { column: { start: 0, end: 1 }, row: { start: 1, end: 0 } };
  function qd(e, t) {
    return Ld[t][e];
  }
  function Wd(e, t, n, i, o) {
    const r = {};
    for (const a of i) {
      if (!o[a]) continue;
      const i = Od(a, null == t ? void 0 : t.header, e, n);
      void 0 !== i && (r[o[a]] = i);
    }
    return r;
  }
  function Rd(e) {
    return [
      ...Ud(e, "width"),
      ...Ud(e, "height"),
      ...Ud(e, "childWidth"),
      ...Ud(e, "childHeight"),
    ];
  }
  function Ud(e, t) {
    const n = "width" === t ? "x" : "y",
      i = e.component.layoutSize.get(t);
    if (!i || "merged" === i) return [];
    const o = e.getSizeSignalRef(t).signal;
    if ("step" === i) {
      const t = e.getScaleComponent(n);
      if (t) {
        const i = t.get("type"),
          r = t.get("range");
        if (qo(i) && hn(r)) {
          const i = e.scaleName(n);
          if (Rp(e.parent)) {
            if ("independent" === e.parent.component.resolve.scale[n])
              return [Bd(i, r)];
          }
          return [
            Bd(i, r),
            { name: o, update: Hd(i, t, "domain('".concat(i, "').length")) },
          ];
        }
      }
      throw new Error("layout size is step although width/height is not step.");
    }
    if ("container" == i) {
      const t = o.endsWith("width"),
        n = t ? "containerSize()[0]" : "containerSize()[1]",
        i = ic(e.config.view, t ? "width" : "height"),
        r = "isFinite(".concat(n, ") ? ").concat(n, " : ").concat(i);
      return [
        { name: o, init: r, on: [{ update: r, events: "window:resize" }] },
      ];
    }
    return [{ name: o, value: i }];
  }
  function Bd(e, t) {
    const n = "".concat(e, "_step");
    return gn(t.step)
      ? { name: n, update: t.step.signal }
      : { name: n, value: t.step };
  }
  function Hd(e, t, n) {
    const i = t.get("type"),
      o = t.get("padding"),
      r = V(t.get("paddingOuter"), o);
    let a = t.get("paddingInner");
    return (
      (a = "band" === i ? (void 0 !== a ? a : o) : 1),
      "bandspace("
        .concat(n, ", ")
        .concat(On(a), ", ")
        .concat(On(r), ") * ")
        .concat(e, "_step")
    );
  }
  function Vd(e) {
    return "childWidth" === e ? "width" : "childHeight" === e ? "height" : e;
  }
  function Id(e, t) {
    return C(e).reduce((n, i) => {
      const o = e[i];
      return { ...n, ...iu(t, o, i, (e) => Dn(e.value)) };
    }, {});
  }
  function Gd(e, t) {
    if (Rp(t)) return "theta" === e ? "independent" : "shared";
    if (Bp(t)) return "shared";
    if (Up(t))
      return Ft(e) || "theta" === e || "radius" === e
        ? "independent"
        : "shared";
    throw new Error("invalid model type for resolve");
  }
  function Yd(e, t) {
    const n = e.scale[t],
      i = Ft(t) ? "axis" : "legend";
    return "independent" === n
      ? ("shared" === e[i][t] &&
          ji(
            (function (e) {
              return 'Setting the scale to be independent for "'.concat(
                e,
                '" means we also have to set the guide (axis or legend) to be independent.'
              );
            })(t)
          ),
        "independent")
      : e[i][t] || "shared";
  }
  const Xd = C({
    aria: 1,
    clipHeight: 1,
    columnPadding: 1,
    columns: 1,
    cornerRadius: 1,
    description: 1,
    direction: 1,
    fillColor: 1,
    format: 1,
    formatType: 1,
    gradientLength: 1,
    gradientOpacity: 1,
    gradientStrokeColor: 1,
    gradientStrokeWidth: 1,
    gradientThickness: 1,
    gridAlign: 1,
    labelAlign: 1,
    labelBaseline: 1,
    labelColor: 1,
    labelFont: 1,
    labelFontSize: 1,
    labelFontStyle: 1,
    labelFontWeight: 1,
    labelLimit: 1,
    labelOffset: 1,
    labelOpacity: 1,
    labelOverlap: 1,
    labelPadding: 1,
    labelSeparation: 1,
    legendX: 1,
    legendY: 1,
    offset: 1,
    orient: 1,
    padding: 1,
    rowPadding: 1,
    strokeColor: 1,
    symbolDash: 1,
    symbolDashOffset: 1,
    symbolFillColor: 1,
    symbolLimit: 1,
    symbolOffset: 1,
    symbolOpacity: 1,
    symbolSize: 1,
    symbolStrokeColor: 1,
    symbolStrokeWidth: 1,
    symbolType: 1,
    tickCount: 1,
    tickMinStep: 1,
    title: 1,
    titleAlign: 1,
    titleAnchor: 1,
    titleBaseline: 1,
    titleColor: 1,
    titleFont: 1,
    titleFontSize: 1,
    titleFontStyle: 1,
    titleFontWeight: 1,
    titleLimit: 1,
    titleLineHeight: 1,
    titleOpacity: 1,
    titleOrient: 1,
    titlePadding: 1,
    type: 1,
    values: 1,
    zindex: 1,
    disable: 1,
    labelExpr: 1,
    selections: 1,
    opacity: 1,
    shape: 1,
    stroke: 1,
    fill: 1,
    size: 1,
    strokeWidth: 1,
    strokeDash: 1,
    encode: 1,
  });
  class Jd extends Sl {}
  const Qd = {
    symbols: function (e, n) {
      var i, o, r, a;
      let {
        fieldOrDatumDef: s,
        model: c,
        channel: l,
        legendCmpt: u,
        legendType: d,
      } = n;
      if ("symbol" !== d) return;
      const { markDef: f, encoding: p, config: m, mark: g } = c,
        h = f.filled && "trail" !== g;
      let v = { ..._n({}, c, xr), ...pu(c, { filled: h }) };
      const y =
          null !== (i = u.get("symbolOpacity")) && void 0 !== i
            ? i
            : m.legend.symbolOpacity,
        b =
          null !== (o = u.get("symbolFillColor")) && void 0 !== o
            ? o
            : m.legend.symbolFillColor,
        x =
          null !== (r = u.get("symbolStrokeColor")) && void 0 !== r
            ? r
            : m.legend.symbolStrokeColor,
        w =
          void 0 === y
            ? null !== (a = $d(p.opacity)) && void 0 !== a
              ? a
              : f.opacity
            : void 0;
      if (v.fill) {
        var k;
        if ("fill" === l || (h && l === me)) delete v.fill;
        else if (v.fill.field)
          if (b) delete v.fill;
          else
            (v.fill = Dn(
              null !== (k = m.legend.symbolBaseFillColor) && void 0 !== k
                ? k
                : "black"
            )),
              (v.fillOpacity = Dn(null != w ? w : 1));
        else if (t.isArray(v.fill)) {
          var S, D, F;
          const e =
            null !==
              (S =
                null !==
                  (D = Kd(
                    null !== (F = p.fill) && void 0 !== F ? F : p.color
                  )) && void 0 !== D
                  ? D
                  : f.fill) && void 0 !== S
              ? S
              : h && f.color;
          e && (v.fill = Dn(e));
        }
      }
      if (v.stroke)
        if ("stroke" === l || (!h && l === me)) delete v.stroke;
        else if (v.stroke.field || x) delete v.stroke;
        else if (t.isArray(v.stroke)) {
          const e = V(Kd(p.stroke || p.color), f.stroke, h ? f.color : void 0);
          e && (v.stroke = { value: e });
        }
      if (l !== xe) {
        const e = ca(s) && ef(c, u, s);
        e
          ? (v.opacity = [
              { test: e, ...Dn(null != w ? w : 1) },
              Dn(m.legend.unselectedOpacity),
            ])
          : w && (v.opacity = Dn(w));
      }
      return (v = { ...v, ...e }), z(v) ? void 0 : v;
    },
    gradient: function (e, t) {
      var n;
      let { model: i, legendType: o, legendCmpt: r } = t;
      if ("gradient" !== o) return;
      const { config: a, markDef: s, encoding: c } = i;
      let l = {};
      const u =
        void 0 ===
        (null !== (n = r.get("gradientOpacity")) && void 0 !== n
          ? n
          : a.legend.gradientOpacity)
          ? $d(c.opacity) || s.opacity
          : void 0;
      u && (l.opacity = Dn(u));
      return (l = { ...l, ...e }), z(l) ? void 0 : l;
    },
    labels: function (e, t) {
      let { fieldOrDatumDef: n, model: i, channel: o, legendCmpt: r } = t;
      const a = i.legend(o) || {},
        s = i.config,
        c = ca(n) ? ef(i, r, n) : void 0,
        l = c
          ? [{ test: c, value: 1 }, { value: s.legend.unselectedOpacity }]
          : void 0,
        { format: u, formatType: d } = a,
        f = Er(d)
          ? qr({
              fieldOrDatumDef: n,
              field: "datum.value",
              format: u,
              formatType: d,
              config: s,
            })
          : void 0,
        p = { ...(l ? { opacity: l } : {}), ...(f ? { text: f } : {}), ...e };
      return z(p) ? void 0 : p;
    },
    entries: function (e, t) {
      let { legendCmpt: n } = t;
      const i = n.get("selections");
      return null != i && i.length
        ? { ...e, fill: { value: "transparent" } }
        : e;
    },
  };
  function $d(e) {
    return Zd(e, (e, t) => Math.max(e, t.value));
  }
  function Kd(e) {
    return Zd(e, (e, t) => V(e, t.value));
  }
  function Zd(e, n) {
    return (function (e) {
      const n = e && e.condition;
      return !!n && (t.isArray(n) || ga(n));
    })(e)
      ? t.array(e.condition).reduce(n, e.value)
      : ga(e)
      ? e.value
      : void 0;
  }
  function ef(e, n, i) {
    const o = n.get("selections");
    if (null == o || !o.length) return;
    const r = t.stringValue(i.field);
    return o
      .map((e) => {
        const n = t.stringValue(j(e) + Ju);
        return "(!length(data("
          .concat(n, ")) || (")
          .concat(e, "[")
          .concat(r, "] && indexof(")
          .concat(e, "[")
          .concat(r, "], datum.value) >= 0))");
      })
      .join(" || ");
  }
  const tf = {
    direction: (e) => {
      let { direction: t } = e;
      return t;
    },
    format: (e) => {
      let { fieldOrDatumDef: t, legend: n, config: i } = e;
      const { format: o, formatType: r } = n;
      return Wr(t, t.type, o, r, i, !1);
    },
    formatType: (e) => {
      let { legend: t, fieldOrDatumDef: n, scaleType: i } = e;
      const { formatType: o } = t;
      return Rr(o, n, i);
    },
    gradientLength: (e) => {
      var t, n;
      const { legend: i, legendConfig: o } = e;
      return null !==
        (t =
          null !== (n = i.gradientLength) && void 0 !== n
            ? n
            : o.gradientLength) && void 0 !== t
        ? t
        : (function (e) {
            let {
              legendConfig: t,
              model: n,
              direction: i,
              orient: o,
              scaleType: r,
            } = e;
            const {
              gradientHorizontalMaxLength: a,
              gradientHorizontalMinLength: s,
              gradientVerticalMaxLength: c,
              gradientVerticalMinLength: l,
            } = t;
            if (Ro(r))
              return "horizontal" === i
                ? "top" === o || "bottom" === o
                  ? rf(n, "width", s, a)
                  : s
                : rf(n, "height", l, c);
            return;
          })(e);
    },
    labelOverlap: (e) => {
      var t, n;
      let { legend: i, legendConfig: o, scaleType: r } = e;
      return null !==
        (t =
          null !== (n = i.labelOverlap) && void 0 !== n ? n : o.labelOverlap) &&
        void 0 !== t
        ? t
        : (function (e) {
            if (y(["quantile", "threshold", "log", "symlog"], e))
              return "greedy";
            return;
          })(r);
    },
    symbolType: (e) => {
      var t;
      let { legend: n, markDef: i, channel: o, encoding: r } = e;
      return null !== (t = n.symbolType) && void 0 !== t
        ? t
        : (function (e, t, n, i) {
            if ("shape" !== t) {
              var o;
              const e = null !== (o = Kd(n)) && void 0 !== o ? o : i;
              if (e) return e;
            }
            switch (e) {
              case "bar":
              case "rect":
              case "image":
              case "square":
                return "square";
              case "line":
              case "trail":
              case "rule":
                return "stroke";
              case "arc":
              case "point":
              case "circle":
              case "tick":
              case "geoshape":
              case "area":
              case "text":
                return "circle";
            }
          })(i.type, o, r.shape, i.shape);
    },
    title: (e) => {
      let { fieldOrDatumDef: t, config: n } = e;
      return Ca(t, n, { allowDisabling: !0 });
    },
    type: (e) => {
      let { legendType: t, scaleType: n, channel: i } = e;
      if (qe(i) && Ro(n)) {
        if ("gradient" === t) return;
      } else if ("symbol" === t) return;
      return t;
    },
    values: (e) => {
      let { fieldOrDatumDef: n, legend: i } = e;
      return (function (e, n) {
        const i = e.values;
        if (t.isArray(i)) return Va(n, i);
        if (gn(i)) return i;
        return;
      })(i, n);
    },
  };
  function nf(e) {
    const { legend: t } = e;
    return V(
      t.type,
      (function (e) {
        let { channel: t, timeUnit: n, scaleType: i } = e;
        if (qe(t)) {
          if (y(["quarter", "month", "day"], n)) return "symbol";
          if (Ro(i)) return "gradient";
        }
        return "symbol";
      })(e)
    );
  }
  function of(e) {
    var t, n;
    let { legendConfig: i, legendType: o, orient: r, legend: a } = e;
    return null !==
      (t =
        null !== (n = a.direction) && void 0 !== n
          ? n
          : i[o ? "gradientDirection" : "symbolDirection"]) && void 0 !== t
      ? t
      : (function (e, t) {
          switch (e) {
            case "top":
            case "bottom":
              return "horizontal";
            case "left":
            case "right":
            case "none":
            case void 0:
              return;
            default:
              return "gradient" === t ? "horizontal" : void 0;
          }
        })(r, o);
  }
  function rf(e, t, n, i) {
    const o = e.getSizeSignalRef(t).signal;
    return { signal: "clamp(".concat(o, ", ").concat(n, ", ").concat(i, ")") };
  }
  function af(e) {
    const t = Wp(e)
      ? (function (e) {
          const { encoding: t } = e,
            n = {};
          for (const i of [me, ...Us]) {
            const o = Ma(t[i]);
            o &&
              e.getScaleComponent(i) &&
              ((i === ve && ca(o) && o.type === xo) || (n[i] = cf(e, i)));
          }
          return n;
        })(e)
      : (function (e) {
          const { legends: t, resolve: n } = e.component;
          for (const i of e.children) {
            af(i);
            for (const o of C(i.component.legends))
              (n.legend[o] = Yd(e.component.resolve, o)),
                "shared" === n.legend[o] &&
                  ((t[o] = lf(t[o], i.component.legends[o])),
                  t[o] || ((n.legend[o] = "independent"), delete t[o]));
          }
          for (const i of C(t))
            for (const t of e.children)
              t.component.legends[i] &&
                "shared" === n.legend[i] &&
                delete t.component.legends[i];
          return t;
        })(e);
    return (e.component.legends = t), t;
  }
  function sf(e, t, n, i) {
    switch (t) {
      case "disable":
        return void 0 !== n;
      case "values":
        return !(null == n || !n.values);
      case "title":
        if ("title" === t && e === (null == i ? void 0 : i.title)) return !0;
    }
    return e === (n || {})[t];
  }
  function cf(e, t) {
    var n, i, o;
    let r = e.legend(t);
    const { markDef: a, encoding: s, config: c } = e,
      l = c.legend,
      u = new Jd(
        {},
        (function (e, t) {
          const n = e.scaleName(t);
          if ("trail" === e.mark) {
            if ("color" === t) return { stroke: n };
            if ("size" === t) return { strokeWidth: n };
          }
          return "color" === t
            ? e.markDef.filled
              ? { fill: n }
              : { stroke: n }
            : { [t]: n };
        })(e, t)
      );
    !(function (e, t, n) {
      var i;
      const o = null === (i = e.fieldDef(t)) || void 0 === i ? void 0 : i.field;
      for (const i of P(
        null !== (r = e.component.selection) && void 0 !== r ? r : {}
      )) {
        var r, a;
        const e =
          null !== (a = i.project.hasField[o]) && void 0 !== a
            ? a
            : i.project.hasChannel[t];
        if (e && Ru.defined(i)) {
          var s;
          const t = null !== (s = n.get("selections")) && void 0 !== s ? s : [];
          t.push(i.name), n.set("selections", t, !1), (e.hasLegend = !0);
        }
      }
    })(e, t, u);
    const d = void 0 !== r ? !r : l.disable;
    if ((u.set("disable", d, void 0 !== r), d)) return u;
    r = r || {};
    const f = e.getScaleComponent(t).get("type"),
      p = Ma(s[t]),
      m = ca(p)
        ? null === (n = $i(p.timeUnit)) || void 0 === n
          ? void 0
          : n.unit
        : void 0,
      g = r.orient || c.legend.orient || "right",
      h = nf({ legend: r, channel: t, timeUnit: m, scaleType: f }),
      v = {
        legend: r,
        channel: t,
        model: e,
        markDef: a,
        encoding: s,
        fieldOrDatumDef: p,
        legendConfig: l,
        config: c,
        scaleType: f,
        orient: g,
        legendType: h,
        direction: of({ legend: r, legendType: h, orient: g, legendConfig: l }),
      };
    for (const n of Xd) {
      if (
        ("gradient" === h && n.startsWith("symbol")) ||
        ("symbol" === h && n.startsWith("gradient"))
      )
        continue;
      const i = n in tf ? tf[n](v) : r[n];
      if (void 0 !== i) {
        const o = sf(i, n, r, e.fieldDef(t));
        (o || void 0 === c.legend[n]) && u.set(n, i, o);
      }
    }
    const y =
        null !== (i = null === (o = r) || void 0 === o ? void 0 : o.encoding) &&
        void 0 !== i
          ? i
          : {},
      b = u.get("selections"),
      x = {},
      w = {
        fieldOrDatumDef: p,
        model: e,
        channel: t,
        legendCmpt: u,
        legendType: h,
      };
    for (const t of [
      "labels",
      "legend",
      "title",
      "symbols",
      "gradient",
      "entries",
    ]) {
      var k;
      const n = Id(null !== (k = y[t]) && void 0 !== k ? k : {}, e),
        i = t in Qd ? Qd[t](n, w) : n;
      void 0 === i ||
        z(i) ||
        (x[t] = {
          ...(null != b && b.length && ca(p)
            ? { name: "".concat(j(p.field), "_legend_").concat(t) }
            : {}),
          ...(null != b && b.length ? { interactive: !!b } : {}),
          update: i,
        });
    }
    var S;
    z(x) ||
      u.set("encode", x, !(null === (S = r) || void 0 === S || !S.encoding));
    return u;
  }
  function lf(e, t) {
    if (!e) return t.clone();
    const n = e.getWithExplicit("orient"),
      i = t.getWithExplicit("orient");
    if (n.explicit && i.explicit && n.value !== i.value) return;
    let o = !1;
    for (const n of Xd) {
      const i = zl(
        e.getWithExplicit(n),
        t.getWithExplicit(n),
        n,
        "legend",
        (e, t) => {
          switch (n) {
            case "symbolType":
              return uf(e, t);
            case "title":
              return Tn(e, t);
            case "type":
              return (o = !0), Fl("symbol");
          }
          return _l(e, t, n, "legend");
        }
      );
      e.setWithExplicit(n, i);
    }
    var r, a, s, c;
    o &&
      (null !== (r = e.implicit) &&
        void 0 !== r &&
        null !== (a = r.encode) &&
        void 0 !== a &&
        a.gradient &&
        M(e.implicit, ["encode", "gradient"]),
      null !== (s = e.explicit) &&
        void 0 !== s &&
        null !== (c = s.encode) &&
        void 0 !== c &&
        c.gradient &&
        M(e.explicit, ["encode", "gradient"]));
    return e;
  }
  function uf(e, t) {
    return "circle" === t.value ? t : e;
  }
  function df(e) {
    const t = e.component.legends,
      n = {};
    for (const i of C(t)) {
      const o = e.getScaleComponent(i),
        r = g(o.get("domains"));
      if (n[r])
        for (const e of n[r]) {
          lf(e, t[i]) || n[r].push(t[i]);
        }
      else n[r] = [t[i].clone()];
    }
    return P(n)
      .flat()
      .map((t) =>
        (function (e, t) {
          var n;
          const { disable: i, labelExpr: o, selections: r, ...a } = e.combine();
          if (i) return;
          !1 === t.aria && null == a.aria && (a.aria = !1);
          if (null !== (n = a.encode) && void 0 !== n && n.symbols) {
            const e = a.encode.symbols.update;
            !e.fill ||
              "transparent" === e.fill.value ||
              e.stroke ||
              a.stroke ||
              (e.stroke = { value: "transparent" });
            for (const t of Us) a[t] && delete e[t];
          }
          a.title || delete a.title;
          if (void 0 !== o) {
            var s, c;
            let e = o;
            null !== (s = a.encode) &&
              void 0 !== s &&
              null !== (c = s.labels) &&
              void 0 !== c &&
              c.update &&
              gn(a.encode.labels.update.text) &&
              (e = U(o, "datum.label", a.encode.labels.update.text.signal)),
              (function (e, t, n, i) {
                var o, r, a, s, c;
                (null !== (o = e.encode) && void 0 !== o) || (e.encode = {}),
                  (null !== (a = (r = e.encode)[t]) && void 0 !== a) ||
                    (r[t] = {}),
                  (null !== (c = (s = e.encode[t]).update) && void 0 !== c) ||
                    (s.update = {}),
                  (e.encode[t].update[n] = i);
              })(a, "labels", "text", { signal: e });
          }
          return a;
        })(t, e.config)
      )
      .filter((e) => void 0 !== e);
  }
  function ff(e) {
    return Bp(e) || Up(e)
      ? (function (e) {
          return e.children.reduce(
            (e, t) => e.concat(t.assembleProjections()),
            pf(e)
          );
        })(e)
      : pf(e);
  }
  function pf(e) {
    const t = e.component.projection;
    if (!t || t.merged) return [];
    const n = t.combine(),
      { name: i } = n;
    if (t.data) {
      const o = {
          signal: "[".concat(t.size.map((e) => e.signal).join(", "), "]"),
        },
        r = t.data.reduce((t, n) => {
          const i = gn(n)
            ? n.signal
            : "data('".concat(e.lookupDataSource(n), "')");
          return y(t, i) || t.push(i), t;
        }, []);
      if (r.length <= 0)
        throw new Error("Projection's fit didn't find any data sources");
      return [
        {
          name: i,
          size: o,
          fit: { signal: r.length > 1 ? "[".concat(r.join(", "), "]") : r[0] },
          ...n,
        },
      ];
    }
    return [
      { name: i, translate: { signal: "[width / 2, height / 2]" }, ...n },
    ];
  }
  const mf = [
    "type",
    "clipAngle",
    "clipExtent",
    "center",
    "rotate",
    "precision",
    "reflectX",
    "reflectY",
    "coefficient",
    "distance",
    "fraction",
    "lobes",
    "parallel",
    "radius",
    "ratio",
    "spacing",
    "tilt",
  ];
  class gf extends Sl {
    constructor(e, t, n, i) {
      super({ ...t }, { name: e }),
        (this.specifiedProjection = t),
        (this.size = n),
        (this.data = i),
        Ln(this, "merged", !1);
    }
    get isFit() {
      return !!this.data;
    }
  }
  function hf(e) {
    e.component.projection = Wp(e)
      ? (function (e) {
          if (e.hasProjection) {
            var t;
            const n = fn(e.specifiedProjection),
              i = !(n && (null != n.scale || null != n.translate)),
              o = i
                ? [e.getSizeSignalRef("width"), e.getSizeSignalRef("height")]
                : void 0,
              r = i
                ? (function (e) {
                    const t = [],
                      { encoding: n } = e;
                    for (const i of [
                      [de, ue],
                      [pe, fe],
                    ])
                      (Ma(n[i[0]]) || Ma(n[i[1]])) &&
                        t.push({
                          signal: e.getName("geojson_".concat(t.length)),
                        });
                    e.channelHasField(ve) &&
                      e.typedFieldDef(ve).type === xo &&
                      t.push({
                        signal: e.getName("geojson_".concat(t.length)),
                      });
                    0 === t.length && t.push(e.requestDataName(Ll.Main));
                    return t;
                  })(e)
                : void 0,
              a = new gf(
                e.projectionName(!0),
                {
                  ...(null !== (t = fn(e.config.projection)) && void 0 !== t
                    ? t
                    : {}),
                  ...(null != n ? n : {}),
                },
                o,
                r
              );
            return a.get("type") || a.set("type", "equalEarth", !1), a;
          }
          return;
        })(e)
      : (function (e) {
          if (0 === e.children.length) return;
          let n;
          for (const t of e.children) hf(t);
          const i = x(e.children, (e) => {
            const i = e.component.projection;
            if (i) {
              if (n) {
                const e = (function (e, n) {
                  const i = x(
                    mf,
                    (i) =>
                      (!t.hasOwnProperty(e.explicit, i) &&
                        !t.hasOwnProperty(n.explicit, i)) ||
                      !!(
                        t.hasOwnProperty(e.explicit, i) &&
                        t.hasOwnProperty(n.explicit, i) &&
                        u(e.get(i), n.get(i))
                      )
                  );
                  if (u(e.size, n.size)) {
                    if (i) return e;
                    if (u(e.explicit, {})) return n;
                    if (u(n.explicit, {})) return e;
                  }
                  return null;
                })(n, i);
                return e && (n = e), !!e;
              }
              return (n = i), !0;
            }
            return !0;
          });
          if (n && i) {
            const t = e.projectionName(!0),
              i = new gf(t, n.specifiedProjection, n.size, d(n.data));
            for (const n of e.children) {
              const e = n.component.projection;
              e &&
                (e.isFit && i.data.push(...n.component.projection.data),
                n.renameProjection(e.get("name"), t),
                (e.merged = !0));
            }
            return i;
          }
          return;
        })(e);
  }
  function vf(e, t, n, i) {
    if (Ia(t, n)) {
      var o, r;
      const a =
          Wp(e) &&
          null !==
            (o = null !== (r = e.axis(n)) && void 0 !== r ? r : e.legend(n)) &&
          void 0 !== o
            ? o
            : {},
        s = ka(t, { expr: "datum" }),
        c = ka(t, { expr: "datum", binSuffix: "end" });
      return {
        formulaAs: ka(t, { binSuffix: "range", forAs: !0 }),
        formula: Vr(s, c, a.format, a.formatType, i),
      };
    }
    return {};
  }
  function yf(e, t) {
    return "".concat(rn(e), "_").concat(t);
  }
  function bf(e, t, n) {
    var i;
    const o = yf(null !== (i = Wa(n, void 0)) && void 0 !== i ? i : {}, t);
    return e.getName("".concat(o, "_bins"));
  }
  function xf(e, n, i) {
    let o, r;
    o = (function (e) {
      return "as" in e;
    })(e)
      ? t.isString(e.as)
        ? [e.as, "".concat(e.as, "_end")]
        : [e.as[0], e.as[1]]
      : [ka(e, { forAs: !0 }), ka(e, { binSuffix: "end", forAs: !0 })];
    const a = { ...Wa(n, void 0) },
      s = yf(a, e.field),
      { signal: c, extentSignal: l } = (function (e, t) {
        return {
          signal: e.getName("".concat(t, "_bins")),
          extentSignal: e.getName("".concat(t, "_extent")),
        };
      })(i, s);
    if (ln(a.extent)) {
      const e = a.extent;
      (r = ld(i, e.param, e)), delete a.extent;
    }
    return {
      key: s,
      binComponent: {
        bin: a,
        field: e.field,
        as: [o],
        ...(c ? { signal: c } : {}),
        ...(l ? { extentSignal: l } : {}),
        ...(r ? { span: r } : {}),
      },
    };
  }
  class wf extends Hl {
    clone() {
      return new wf(null, d(this.bins));
    }
    constructor(e, t) {
      super(e), (this.bins = t);
    }
    static makeFromEncoding(e, t) {
      const n = t.reduceFieldDef((e, n, i) => {
        if (ma(n) && an(n.bin)) {
          const { key: o, binComponent: r } = xf(n, n.bin, t);
          e[o] = { ...r, ...e[o], ...vf(t, n, i, t.config) };
        }
        return e;
      }, {});
      return z(n) ? null : new wf(e, n);
    }
    static makeFromTransform(e, t, n) {
      const { key: i, binComponent: o } = xf(t, t.bin, n);
      return new wf(e, { [i]: o });
    }
    merge(e, t) {
      for (const n of C(e.bins))
        n in this.bins
          ? (t(e.bins[n].signal, this.bins[n].signal),
            (this.bins[n].as = S([...this.bins[n].as, ...e.bins[n].as], h)))
          : (this.bins[n] = e.bins[n]);
      for (const t of e.children) e.removeChild(t), (t.parent = this);
      e.remove();
    }
    producedFields() {
      return new Set(
        P(this.bins)
          .map((e) => e.as)
          .flat(2)
      );
    }
    dependentFields() {
      return new Set(P(this.bins).map((e) => e.field));
    }
    hash() {
      return "Bin ".concat(h(this.bins));
    }
    assemble() {
      return P(this.bins).flatMap((e) => {
        const t = [],
          [n, ...i] = e.as,
          { extent: o, ...r } = e.bin,
          a = {
            type: "bin",
            field: R(e.field),
            as: n,
            signal: e.signal,
            ...(ln(o) ? { extent: null } : { extent: o }),
            ...(e.span
              ? { span: { signal: "span(".concat(e.span, ")") } }
              : {}),
            ...r,
          };
        !o &&
          e.extentSignal &&
          (t.push({
            type: "extent",
            field: R(e.field),
            signal: e.extentSignal,
          }),
          (a.extent = { signal: e.extentSignal })),
          t.push(a);
        for (const e of i)
          for (let i = 0; i < 2; i++)
            t.push({
              type: "formula",
              expr: ka({ field: n[i] }, { expr: "datum" }),
              as: e[i],
            });
        return (
          e.formula &&
            t.push({ type: "formula", expr: e.formula, as: e.formulaAs }),
          t
        );
      });
    }
  }
  function kf(e, n, i, o) {
    var r;
    const a = Wp(o) ? o.encoding[nt(n)] : void 0;
    if (ma(i) && Wp(o) && oa(i, a, o.markDef, o.config))
      e.add(ka(i, {})),
        e.add(ka(i, { suffix: "end" })),
        i.bin && Ia(i, n) && e.add(ka(i, { binSuffix: "range" }));
    else if (n in Me) {
      const t = (function (e) {
        switch (e) {
          case ue:
            return "y";
          case fe:
            return "y2";
          case de:
            return "x";
          case pe:
            return "x2";
        }
      })(n);
      e.add(o.getName(t));
    } else e.add(ka(i));
    return (
      ha(i) &&
        (function (e) {
          return t.isObject(e) && "field" in e;
        })(null === (r = i.scale) || void 0 === r ? void 0 : r.range) &&
        e.add(i.scale.range.field),
      e
    );
  }
  class Sf extends Hl {
    clone() {
      return new Sf(null, new Set(this.dimensions), d(this.measures));
    }
    constructor(e, t, n) {
      super(e), (this.dimensions = t), (this.measures = n);
    }
    get groupBy() {
      return this.dimensions;
    }
    static makeFromEncoding(e, t) {
      let n = !1;
      t.forEachFieldDef((e) => {
        e.aggregate && (n = !0);
      });
      const i = {},
        o = new Set();
      return n
        ? (t.forEachFieldDef((e, n) => {
            const { aggregate: r, field: a } = e;
            if (r)
              if ("count" === r) {
                var s;
                (null !== (s = i["*"]) && void 0 !== s) || (i["*"] = {}),
                  (i["*"].count = new Set([ka(e, { forAs: !0 })]));
              } else {
                if ($t(r) || Kt(r)) {
                  var c;
                  const e = $t(r) ? "argmin" : "argmax",
                    t = r[e];
                  (null !== (c = i[t]) && void 0 !== c) || (i[t] = {}),
                    (i[t][e] = new Set([
                      ka({ op: e, field: t }, { forAs: !0 }),
                    ]));
                } else {
                  var l;
                  (null !== (l = i[a]) && void 0 !== l) || (i[a] = {}),
                    (i[a][r] = new Set([ka(e, { forAs: !0 })]));
                }
                var u;
                if (Ht(n) && "unaggregated" === t.scaleDomain(n))
                  (null !== (u = i[a]) && void 0 !== u) || (i[a] = {}),
                    (i[a].min = new Set([
                      ka({ field: a, aggregate: "min" }, { forAs: !0 }),
                    ])),
                    (i[a].max = new Set([
                      ka({ field: a, aggregate: "max" }, { forAs: !0 }),
                    ]));
              }
            else kf(o, n, e, t);
          }),
          o.size + C(i).length === 0 ? null : new Sf(e, o, i))
        : null;
    }
    static makeFromTransform(e, t) {
      const n = new Set(),
        i = {};
      for (const e of t.aggregate) {
        const { op: t, field: n, as: a } = e;
        var o, r;
        if (t)
          if ("count" === t)
            (null !== (o = i["*"]) && void 0 !== o) || (i["*"] = {}),
              (i["*"].count = new Set([a || ka(e, { forAs: !0 })]));
          else
            (null !== (r = i[n]) && void 0 !== r) || (i[n] = {}),
              (i[n][t] = new Set([a || ka(e, { forAs: !0 })]));
      }
      for (const e of null !== (a = t.groupby) && void 0 !== a ? a : []) {
        var a;
        n.add(e);
      }
      return n.size + C(i).length === 0 ? null : new Sf(e, n, i);
    }
    merge(e) {
      return D(this.dimensions, e.dimensions)
        ? ((function (e, t) {
            for (const i of C(t)) {
              const o = t[i];
              for (const t of C(o)) {
                var n;
                i in e
                  ? (e[i][t] = new Set([
                      ...(null !== (n = e[i][t]) && void 0 !== n ? n : []),
                      ...o[t],
                    ]))
                  : (e[i] = { [t]: o[t] });
              }
            }
          })(this.measures, e.measures),
          !0)
        : ((function () {
            Pi.debug(...arguments);
          })("different dimensions, cannot merge"),
          !1);
    }
    addDimensions(e) {
      e.forEach(this.dimensions.add, this.dimensions);
    }
    dependentFields() {
      return new Set([...this.dimensions, ...C(this.measures)]);
    }
    producedFields() {
      const e = new Set();
      for (const t of C(this.measures))
        for (const n of C(this.measures[t])) {
          const i = this.measures[t][n];
          0 === i.size
            ? e.add("".concat(n, "_").concat(t))
            : i.forEach(e.add, e);
        }
      return e;
    }
    hash() {
      return "Aggregate ".concat(
        h({ dimensions: this.dimensions, measures: this.measures })
      );
    }
    assemble() {
      const e = [],
        t = [],
        n = [];
      for (const i of C(this.measures))
        for (const o of C(this.measures[i]))
          for (const r of this.measures[i][o])
            n.push(r), e.push(o), t.push("*" === i ? null : R(i));
      return {
        type: "aggregate",
        groupby: [...this.dimensions].map(R),
        ops: e,
        fields: t,
        as: n,
      };
    }
  }
  class Df extends Hl {
    constructor(e, n, i, o) {
      super(e),
        (this.model = n),
        (this.name = i),
        (this.data = o),
        Ln(this, "column", void 0),
        Ln(this, "row", void 0),
        Ln(this, "facet", void 0),
        Ln(this, "childModel", void 0);
      for (const e of Re) {
        const i = n.facet[e];
        if (i) {
          const { bin: o, sort: r } = i;
          this[e] = {
            name: n.getName("".concat(e, "_domain")),
            fields: [ka(i), ...(an(o) ? [ka(i, { binSuffix: "end" })] : [])],
            ...(Jr(r)
              ? { sortField: r }
              : t.isArray(r)
              ? { sortIndexField: Dd(i, e) }
              : {}),
          };
        }
      }
      this.childModel = n.child;
    }
    hash() {
      let e = "Facet";
      for (const t of Re)
        this[t] && (e += " ".concat(t.charAt(0), ":").concat(h(this[t])));
      return e;
    }
    get fields() {
      const e = [];
      for (const n of Re) {
        var t;
        null !== (t = this[n]) &&
          void 0 !== t &&
          t.fields &&
          e.push(...this[n].fields);
      }
      return e;
    }
    dependentFields() {
      const e = new Set(this.fields);
      for (const t of Re)
        this[t] &&
          (this[t].sortField && e.add(this[t].sortField.field),
          this[t].sortIndexField && e.add(this[t].sortIndexField));
      return e;
    }
    producedFields() {
      return new Set();
    }
    getSource() {
      return this.name;
    }
    getChildIndependentFieldsWithStep() {
      const e = {};
      for (const t of Dt) {
        const n = this.childModel.component.scales[t];
        if (n && !n.merged) {
          const i = n.get("type"),
            o = n.get("range");
          if (qo(i) && hn(o)) {
            const n = gp(hp(this.childModel, t));
            n ? (e[t] = n) : ji(Gn(t));
          }
        }
      }
      return e;
    }
    assembleRowColumnHeaderData(e, t, n) {
      const i = { row: "y", column: "x", facet: void 0 }[e],
        o = [],
        r = [],
        a = [];
      i &&
        n &&
        n[i] &&
        (t
          ? (o.push("distinct_".concat(n[i])), r.push("max"))
          : (o.push(n[i]), r.push("distinct")),
        a.push("distinct_".concat(n[i])));
      const { sortField: s, sortIndexField: c } = this[e];
      if (s) {
        const { op: e = Ir, field: t } = s;
        o.push(t), r.push(e), a.push(ka(s, { forAs: !0 }));
      } else c && (o.push(c), r.push("max"), a.push(c));
      return {
        name: this[e].name,
        source: null != t ? t : this.data,
        transform: [
          {
            type: "aggregate",
            groupby: this[e].fields,
            ...(o.length ? { fields: o, ops: r, as: a } : {}),
          },
        ],
      };
    }
    assembleFacetHeaderData(e) {
      const { columns: t } = this.model.layout,
        { layoutHeaders: n } = this.model.component,
        i = [],
        o = {};
      for (const e of zd) {
        for (const t of Cd) {
          var r;
          const i = null !== (r = n[e] && n[e][t]) && void 0 !== r ? r : [];
          for (const t of i) {
            var a;
            if (
              (null === (a = t.axes) || void 0 === a ? void 0 : a.length) > 0
            ) {
              o[e] = !0;
              break;
            }
          }
        }
        if (o[e]) {
          const n = 'length(data("'.concat(this.facet.name, '"))'),
            o =
              "row" === e
                ? t
                  ? { signal: "ceil(".concat(n, " / ").concat(t, ")") }
                  : 1
                : t
                ? { signal: "min(".concat(n, ", ").concat(t, ")") }
                : { signal: n };
          i.push({
            name: "".concat(this.facet.name, "_").concat(e),
            transform: [{ type: "sequence", start: 0, stop: o }],
          });
        }
      }
      const { row: s, column: c } = o;
      return (
        (s || c) &&
          i.unshift(this.assembleRowColumnHeaderData("facet", null, e)),
        i
      );
    }
    assemble() {
      const e = [];
      let t = null;
      const n = this.getChildIndependentFieldsWithStep(),
        { column: i, row: o, facet: r } = this;
      if (i && o && (n.x || n.y)) {
        var a, s;
        t = "cross_".concat(this.column.name, "_").concat(this.row.name);
        const i = [].concat(
            null !== (a = n.x) && void 0 !== a ? a : [],
            null !== (s = n.y) && void 0 !== s ? s : []
          ),
          o = i.map(() => "distinct");
        e.push({
          name: t,
          source: this.data,
          transform: [
            { type: "aggregate", groupby: this.fields, fields: i, ops: o },
          ],
        });
      }
      for (const i of [K, $])
        this[i] && e.push(this.assembleRowColumnHeaderData(i, t, n));
      if (r) {
        const t = this.assembleFacetHeaderData(n);
        t && e.push(...t);
      }
      return e;
    }
  }
  function Ff(e) {
    return (e.startsWith("'") && e.endsWith("'")) ||
      (e.startsWith('"') && e.endsWith('"'))
      ? e.slice(1, -1)
      : e;
  }
  function Of(e) {
    const n = {};
    return (
      c(e.filter, (e) => {
        if (so(e)) {
          let o = null;
          if (Zi(e)) o = kn(e.equal);
          else if (to(e)) o = kn(e.lte);
          else if (eo(e)) o = kn(e.lt);
          else if (no(e)) o = kn(e.gt);
          else if (io(e)) o = kn(e.gte);
          else if (oo(e)) o = e.range[0];
          else if (ro(e)) {
            var i;
            o = (null !== (i = e.oneOf) && void 0 !== i ? i : e.in)[0];
          }
          o &&
            (Ei(o)
              ? (n[e.field] = "date")
              : t.isNumber(o)
              ? (n[e.field] = "number")
              : t.isString(o) && (n[e.field] = "string")),
            e.timeUnit && (n[e.field] = "date");
        }
      }),
      n
    );
  }
  function _f(e) {
    const n = {};
    function i(e) {
      var i;
      Ba(e)
        ? (n[e.field] = "date")
        : "quantitative" === e.type &&
          ((i = e.aggregate), t.isString(i) && y(["min", "max"], i))
        ? (n[e.field] = "number")
        : H(e.field) > 1
        ? e.field in n || (n[e.field] = "flatten")
        : ha(e) &&
          Jr(e.sort) &&
          H(e.sort.field) > 1 &&
          (e.sort.field in n || (n[e.sort.field] = "flatten"));
    }
    if (
      ((Wp(e) || Rp(e)) &&
        e.forEachFieldDef((t, n) => {
          if (ma(t)) i(t);
          else {
            const o = et(n),
              r = e.fieldDef(o);
            i({ ...t, type: r.type });
          }
        }),
      Wp(e))
    ) {
      const { mark: t, markDef: i, encoding: o } = e;
      if (hr(t) && !e.encoding.order) {
        const e = o["horizontal" === i.orient ? "y" : "x"];
        ca(e) &&
          "quantitative" === e.type &&
          !(e.field in n) &&
          (n[e.field] = "number");
      }
    }
    return n;
  }
  class zf extends Hl {
    clone() {
      return new zf(null, d(this._parse));
    }
    constructor(e, t) {
      super(e), Ln(this, "_parse", void 0), (this._parse = t);
    }
    hash() {
      return "Parse ".concat(h(this._parse));
    }
    static makeExplicit(e, t, n) {
      var i;
      let o = {};
      const r = t.data;
      return (
        !jl(r) &&
          null != r &&
          null !== (i = r.format) &&
          void 0 !== i &&
          i.parse &&
          (o = r.format.parse),
        this.makeWithAncestors(e, o, {}, n)
      );
    }
    static makeWithAncestors(e, t, n, i) {
      for (const e of C(n)) {
        const t = i.getWithExplicit(e);
        void 0 !== t.value &&
          (t.explicit ||
          t.value === n[e] ||
          "derived" === t.value ||
          "flatten" === n[e]
            ? delete n[e]
            : ji(Kn(e, n[e], t.value)));
      }
      for (const e of C(t)) {
        const n = i.get(e);
        void 0 !== n && (n === t[e] ? delete t[e] : ji(Kn(e, t[e], n)));
      }
      const o = new Sl(t, n);
      i.copyAll(o);
      const r = {};
      for (const e of C(o.combine())) {
        const t = o.get(e);
        null !== t && (r[e] = t);
      }
      return 0 === C(r).length || i.parseNothing ? null : new zf(e, r);
    }
    get parse() {
      return this._parse;
    }
    merge(e) {
      (this._parse = { ...this._parse, ...e.parse }), e.remove();
    }
    assembleFormatParse() {
      const e = {};
      for (const t of C(this._parse)) {
        const n = this._parse[t];
        1 === H(t) && (e[t] = n);
      }
      return e;
    }
    producedFields() {
      return new Set(C(this._parse));
    }
    dependentFields() {
      return new Set(C(this._parse));
    }
    assembleTransforms() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return C(this._parse)
        .filter((t) => !e || H(t) > 1)
        .map((e) => {
          const t = (function (e, t) {
            const n = L(e);
            if ("number" === t) return "toNumber(".concat(n, ")");
            if ("boolean" === t) return "toBoolean(".concat(n, ")");
            if ("string" === t) return "toString(".concat(n, ")");
            if ("date" === t) return "toDate(".concat(n, ")");
            if ("flatten" === t) return n;
            if (t.startsWith("date:")) {
              const e = Ff(t.slice(5, t.length));
              return "timeParse(".concat(n, ",'").concat(e, "')");
            }
            if (t.startsWith("utc:")) {
              const e = Ff(t.slice(4, t.length));
              return "utcParse(".concat(n, ",'").concat(e, "')");
            }
            return ji('Unrecognized parse "'.concat(t, '".')), null;
          })(e, this._parse[e]);
          if (!t) return null;
          return { type: "formula", expr: t, as: B(e) };
        })
        .filter((e) => null !== e);
    }
  }
  class Cf extends Hl {
    clone() {
      return new Cf(null);
    }
    constructor(e) {
      super(e);
    }
    dependentFields() {
      return new Set();
    }
    producedFields() {
      return new Set([Bs]);
    }
    hash() {
      return "Identifier";
    }
    assemble() {
      return { type: "identifier", as: Bs };
    }
  }
  class Pf extends Hl {
    clone() {
      return new Pf(null, this.params);
    }
    constructor(e, t) {
      super(e), (this.params = t);
    }
    dependentFields() {
      return new Set();
    }
    producedFields() {}
    hash() {
      return "Graticule ".concat(h(this.params));
    }
    assemble() {
      return { type: "graticule", ...(!0 === this.params ? {} : this.params) };
    }
  }
  class Af extends Hl {
    clone() {
      return new Af(null, this.params);
    }
    constructor(e, t) {
      super(e), (this.params = t);
    }
    dependentFields() {
      return new Set();
    }
    producedFields() {
      var e;
      return new Set([
        null !== (e = this.params.as) && void 0 !== e ? e : "data",
      ]);
    }
    hash() {
      return "Hash ".concat(h(this.params));
    }
    assemble() {
      return { type: "sequence", ...this.params };
    }
  }
  class Nf extends Hl {
    constructor(e) {
      var t;
      let n;
      if (
        (super(null),
        Ln(this, "_data", void 0),
        Ln(this, "_name", void 0),
        Ln(this, "_generator", void 0),
        (null !== (t = e) && void 0 !== t) || (e = { name: "source" }),
        jl(e) || (n = e.format ? { ...m(e.format, ["parse"]) } : {}),
        Al(e))
      )
        this._data = { values: e.values };
      else if (Pl(e)) {
        if (((this._data = { url: e.url }), !n.type)) {
          let t = /(?:\.([^.]+))?$/.exec(e.url)[1];
          y(["json", "csv", "tsv", "dsv", "topojson"], t) || (t = "json"),
            (n.type = t);
        }
      } else
        Ml(e)
          ? (this._data = { values: [{ type: "Sphere" }] })
          : (Nl(e) || jl(e)) && (this._data = {});
      (this._generator = jl(e)),
        e.name && (this._name = e.name),
        n && !z(n) && (this._data.format = n);
    }
    dependentFields() {
      return new Set();
    }
    producedFields() {}
    get data() {
      return this._data;
    }
    hasName() {
      return !!this._name;
    }
    get isGenerator() {
      return this._generator;
    }
    get dataName() {
      return this._name;
    }
    set dataName(e) {
      this._name = e;
    }
    set parent(e) {
      throw new Error("Source nodes have to be roots.");
    }
    remove() {
      throw new Error("Source nodes are roots and cannot be removed.");
    }
    hash() {
      throw new Error("Cannot hash sources");
    }
    assemble() {
      return { name: this._name, ...this._data, transform: [] };
    }
  }
  function jf(e) {
    return e instanceof Nf || e instanceof Pf || e instanceof Af;
  }
  var Ef = new WeakMap();
  class Mf {
    constructor() {
      Rn(this, Ef, { writable: !0, value: void 0 }), qn(this, Ef, !1);
    }
    setModified() {
      qn(this, Ef, !0);
    }
    get modifiedFlag() {
      return (function (e, t) {
        return t.get ? t.get.call(e) : t.value;
      })((e = this), Wn(e, Ef, "get"));
      var e;
    }
  }
  class Tf extends Mf {
    getNodeDepths(e, t, n) {
      n.set(e, t);
      for (const i of e.children) this.getNodeDepths(i, t + 1, n);
      return n;
    }
    optimize(e) {
      const t = [...this.getNodeDepths(e, 0, new Map()).entries()].sort(
        (e, t) => t[1] - e[1]
      );
      for (const e of t) this.run(e[0]);
      return this.modifiedFlag;
    }
  }
  class Lf extends Mf {
    optimize(e) {
      this.run(e);
      for (const t of e.children) this.optimize(t);
      return this.modifiedFlag;
    }
  }
  class qf extends Lf {
    mergeNodes(e, t) {
      const n = t.shift();
      for (const i of t) e.removeChild(i), (i.parent = n), i.remove();
    }
    run(e) {
      const t = e.children.map((e) => e.hash()),
        n = {};
      for (let i = 0; i < t.length; i++)
        void 0 === n[t[i]]
          ? (n[t[i]] = [e.children[i]])
          : n[t[i]].push(e.children[i]);
      for (const t of C(n))
        n[t].length > 1 && (this.setModified(), this.mergeNodes(e, n[t]));
    }
  }
  class Wf extends Lf {
    constructor(e) {
      super(),
        Ln(this, "requiresSelectionId", void 0),
        (this.requiresSelectionId = e && nd(e));
    }
    run(e) {
      e instanceof Cf &&
        ((this.requiresSelectionId &&
          (jf(e.parent) || e.parent instanceof Sf || e.parent instanceof zf)) ||
          (this.setModified(), e.remove()));
    }
  }
  class Rf extends Mf {
    optimize(e) {
      return this.run(e, new Set()), this.modifiedFlag;
    }
    run(e, t) {
      let n = new Set();
      e instanceof Il &&
        ((n = e.producedFields()),
        F(n, t) &&
          (this.setModified(),
          e.removeFormulas(t),
          0 === e.producedFields.length && e.remove()));
      for (const i of e.children) this.run(i, new Set([...t, ...n]));
    }
  }
  class Uf extends Lf {
    constructor() {
      super();
    }
    run(e) {
      e instanceof Vl && !e.isRequired() && (this.setModified(), e.remove());
    }
  }
  class Bf extends Tf {
    run(e) {
      if (!(jf(e) || e.numChildren() > 1))
        for (const t of e.children)
          if (t instanceof zf)
            if (e instanceof zf) this.setModified(), e.merge(t);
            else {
              if (_(e.producedFields(), t.dependentFields())) continue;
              this.setModified(), t.swapWithParent();
            }
    }
  }
  class Hf extends Tf {
    run(e) {
      const t = [...e.children],
        n = e.children.filter((e) => e instanceof zf);
      if (e.numChildren() > 1 && n.length >= 1) {
        const i = {},
          o = new Set();
        for (const e of n) {
          const t = e.parse;
          for (const e of C(t))
            e in i ? i[e] !== t[e] && o.add(e) : (i[e] = t[e]);
        }
        for (const e of o) delete i[e];
        if (!z(i)) {
          this.setModified();
          const n = new zf(e, i);
          for (const o of t) {
            if (o instanceof zf) for (const e of C(i)) delete o.parse[e];
            e.removeChild(o),
              (o.parent = n),
              o instanceof zf && 0 === C(o.parse).length && o.remove();
          }
        }
      }
    }
  }
  class Vf extends Tf {
    run(e) {
      e instanceof Vl ||
        e.numChildren() > 0 ||
        e instanceof Df ||
        e instanceof Nf ||
        (this.setModified(), e.remove());
    }
  }
  class If extends Tf {
    run(e) {
      const t = e.children.filter((e) => e instanceof Il),
        n = t.pop();
      for (const e of t) this.setModified(), n.merge(e);
    }
  }
  class Gf extends Tf {
    run(e) {
      const t = e.children.filter((e) => e instanceof Sf),
        n = {};
      for (const e of t) {
        const t = h(e.groupBy);
        t in n || (n[t] = []), n[t].push(e);
      }
      for (const t of C(n)) {
        const i = n[t];
        if (i.length > 1) {
          const t = i.pop();
          for (const n of i)
            t.merge(n) &&
              (e.removeChild(n),
              (n.parent = t),
              n.remove(),
              this.setModified());
        }
      }
    }
  }
  class Yf extends Tf {
    constructor(e) {
      super(), (this.model = e);
    }
    run(e) {
      const t = !(
          jf(e) ||
          e instanceof sd ||
          e instanceof zf ||
          e instanceof Cf
        ),
        n = [],
        i = [];
      for (const o of e.children)
        o instanceof wf &&
          (t && !_(e.producedFields(), o.dependentFields())
            ? n.push(o)
            : i.push(o));
      if (n.length > 0) {
        const t = n.pop();
        for (const e of n) t.merge(e, this.model.renameSignal.bind(this.model));
        this.setModified(),
          e instanceof wf
            ? e.merge(t, this.model.renameSignal.bind(this.model))
            : t.swapWithParent();
      }
      if (i.length > 1) {
        const e = i.pop();
        for (const t of i) e.merge(t, this.model.renameSignal.bind(this.model));
        this.setModified();
      }
    }
  }
  class Xf extends Tf {
    run(e) {
      const t = [...e.children];
      if (!b(t, (e) => e instanceof Vl) || e.numChildren() <= 1) return;
      const n = [];
      let i;
      for (const o of t)
        if (o instanceof Vl) {
          let t = o;
          for (; 1 === t.numChildren(); ) {
            const [e] = t.children;
            if (!(e instanceof Vl)) break;
            t = e;
          }
          n.push(...t.children),
            i
              ? (e.removeChild(o),
                (o.parent = i.parent),
                i.parent.removeChild(i),
                (i.parent = t),
                this.setModified())
              : (i = t);
        } else n.push(o);
      if (n.length) {
        this.setModified();
        for (const e of n) e.parent.removeChild(e), (e.parent = i);
      }
    }
  }
  class Jf extends Hl {
    clone() {
      return new Jf(null, d(this.transform));
    }
    constructor(e, t) {
      super(e), (this.transform = t);
    }
    addDimensions(e) {
      this.transform.groupby = S(this.transform.groupby.concat(e), (e) => e);
    }
    dependentFields() {
      const e = new Set();
      return (
        this.transform.groupby && this.transform.groupby.forEach(e.add, e),
        this.transform.joinaggregate
          .map((e) => e.field)
          .filter((e) => void 0 !== e)
          .forEach(e.add, e),
        e
      );
    }
    producedFields() {
      return new Set(this.transform.joinaggregate.map(this.getDefaultName));
    }
    getDefaultName(e) {
      var t;
      return null !== (t = e.as) && void 0 !== t ? t : ka(e);
    }
    hash() {
      return "JoinAggregateTransform ".concat(h(this.transform));
    }
    assemble() {
      const e = [],
        t = [],
        n = [];
      for (const i of this.transform.joinaggregate)
        t.push(i.op),
          n.push(this.getDefaultName(i)),
          e.push(void 0 === i.field ? null : i.field);
      const i = this.transform.groupby;
      return {
        type: "joinaggregate",
        as: n,
        ops: t,
        fields: e,
        ...(void 0 !== i ? { groupby: i } : {}),
      };
    }
  }
  class Qf extends Hl {
    clone() {
      return new Qf(null, d(this._stack));
    }
    constructor(e, t) {
      super(e), Ln(this, "_stack", void 0), (this._stack = t);
    }
    static makeFromTransform(e, n) {
      const { stack: i, groupby: o, as: r, offset: a = "zero" } = n,
        s = [],
        c = [];
      if (void 0 !== n.sort)
        for (const e of n.sort)
          s.push(e.field), c.push(V(e.order, "ascending"));
      const l = { field: s, order: c };
      let u;
      return (
        (u = (function (e) {
          return t.isArray(e) && e.every((e) => t.isString(e)) && e.length > 1;
        })(r)
          ? r
          : t.isString(r)
          ? [r, "".concat(r, "_end")]
          : ["".concat(n.stack, "_start"), "".concat(n.stack, "_end")]),
        new Qf(e, {
          dimensionFieldDefs: [],
          stackField: i,
          groupby: o,
          offset: a,
          sort: l,
          facetby: [],
          as: u,
        })
      );
    }
    static makeFromEncoding(e, n) {
      const i = n.stack,
        { encoding: o } = n;
      if (!i) return null;
      const { groupbyChannels: r, fieldChannel: a, offset: s, impute: c } = i,
        l = r.map((e) => Ea(o[e])).filter((e) => !!e),
        u = (function (e) {
          return e.stack.stackBy.reduce((e, t) => {
            const n = ka(t.fieldDef);
            return n && e.push(n), e;
          }, []);
        })(n),
        d = n.encoding.order;
      let f;
      return (
        (f =
          t.isArray(d) || ca(d)
            ? jn(d)
            : u.reduce(
                (e, t) => (
                  e.field.push(t),
                  e.order.push("y" === a ? "descending" : "ascending"),
                  e
                ),
                { field: [], order: [] }
              )),
        new Qf(e, {
          dimensionFieldDefs: l,
          stackField: n.vgField(a),
          facetby: [],
          stackby: u,
          sort: f,
          offset: s,
          impute: c,
          as: [
            n.vgField(a, { suffix: "start", forAs: !0 }),
            n.vgField(a, { suffix: "end", forAs: !0 }),
          ],
        })
      );
    }
    get stack() {
      return this._stack;
    }
    addDimensions(e) {
      this._stack.facetby.push(...e);
    }
    dependentFields() {
      const e = new Set();
      return (
        e.add(this._stack.stackField),
        this.getGroupbyFields().forEach(e.add, e),
        this._stack.facetby.forEach(e.add, e),
        this._stack.sort.field.forEach(e.add, e),
        e
      );
    }
    producedFields() {
      return new Set(this._stack.as);
    }
    hash() {
      return "Stack ".concat(h(this._stack));
    }
    getGroupbyFields() {
      const { dimensionFieldDefs: e, impute: t, groupby: n } = this._stack;
      return e.length > 0
        ? e
            .map((e) =>
              e.bin
                ? t
                  ? [ka(e, { binSuffix: "mid" })]
                  : [ka(e, {}), ka(e, { binSuffix: "end" })]
                : [ka(e)]
            )
            .flat()
        : null != n
        ? n
        : [];
    }
    assemble() {
      const e = [],
        {
          facetby: t,
          dimensionFieldDefs: n,
          stackField: i,
          stackby: o,
          sort: r,
          offset: a,
          impute: s,
          as: c,
        } = this._stack;
      if (s)
        for (const r of n) {
          const { bandPosition: n = 0.5, bin: a } = r;
          if (a) {
            const t = ka(r, { expr: "datum" }),
              i = ka(r, { expr: "datum", binSuffix: "end" });
            e.push({
              type: "formula",
              expr: ""
                .concat(n, "*")
                .concat(t, "+")
                .concat(1 - n, "*")
                .concat(i),
              as: ka(r, { binSuffix: "mid", forAs: !0 }),
            });
          }
          e.push({
            type: "impute",
            field: i,
            groupby: [...o, ...t],
            key: ka(r, { binSuffix: "mid" }),
            method: "value",
            value: 0,
          });
        }
      return (
        e.push({
          type: "stack",
          groupby: [...this.getGroupbyFields(), ...t],
          field: i,
          sort: r,
          as: c,
          offset: a,
        }),
        e
      );
    }
  }
  class $f extends Hl {
    clone() {
      return new $f(null, d(this.transform));
    }
    constructor(e, t) {
      super(e), (this.transform = t);
    }
    addDimensions(e) {
      this.transform.groupby = S(this.transform.groupby.concat(e), (e) => e);
    }
    dependentFields() {
      var e, t;
      const n = new Set();
      return (
        (null !== (e = this.transform.groupby) && void 0 !== e
          ? e
          : []
        ).forEach(n.add, n),
        (null !== (t = this.transform.sort) && void 0 !== t ? t : []).forEach(
          (e) => n.add(e.field)
        ),
        this.transform.window
          .map((e) => e.field)
          .filter((e) => void 0 !== e)
          .forEach(n.add, n),
        n
      );
    }
    producedFields() {
      return new Set(this.transform.window.map(this.getDefaultName));
    }
    getDefaultName(e) {
      var t;
      return null !== (t = e.as) && void 0 !== t ? t : ka(e);
    }
    hash() {
      return "WindowTransform ".concat(h(this.transform));
    }
    assemble() {
      const e = [],
        t = [],
        n = [],
        i = [];
      for (const o of this.transform.window)
        t.push(o.op),
          n.push(this.getDefaultName(o)),
          i.push(void 0 === o.param ? null : o.param),
          e.push(void 0 === o.field ? null : o.field);
      const o = this.transform.frame,
        r = this.transform.groupby;
      if (o && null === o[0] && null === o[1] && t.every((e) => Zt(e)))
        return {
          type: "joinaggregate",
          as: n,
          ops: t,
          fields: e,
          ...(void 0 !== r ? { groupby: r } : {}),
        };
      const a = [],
        s = [];
      if (void 0 !== this.transform.sort)
        for (const e of this.transform.sort) {
          var c;
          a.push(e.field),
            s.push(null !== (c = e.order) && void 0 !== c ? c : "ascending");
        }
      const l = { field: a, order: s },
        u = this.transform.ignorePeers;
      return {
        type: "window",
        params: i,
        as: n,
        ops: t,
        fields: e,
        sort: l,
        ...(void 0 !== u ? { ignorePeers: u } : {}),
        ...(void 0 !== r ? { groupby: r } : {}),
        ...(void 0 !== o ? { frame: o } : {}),
      };
    }
  }
  function Kf(e) {
    if (e instanceof Df)
      if (1 !== e.numChildren() || e.children[0] instanceof Vl) {
        const n = e.model.component.data.main;
        Zf(n);
        const i =
            ((t = e),
            function e(n) {
              if (!(n instanceof Df)) {
                const i = n.clone();
                if (i instanceof Vl) {
                  const e = ep + i.getSource();
                  i.setSource(e), (t.model.component.data.outputNodes[e] = i);
                } else
                  (i instanceof Sf ||
                    i instanceof Qf ||
                    i instanceof $f ||
                    i instanceof Jf) &&
                    i.addDimensions(t.fields);
                for (const t of n.children.flatMap(e)) t.parent = i;
                return [i];
              }
              return n.children.flatMap(e);
            }),
          o = e.children.map(i).flat();
        for (const e of o) e.parent = n;
      } else {
        const t = e.children[0];
        (t instanceof Sf ||
          t instanceof Qf ||
          t instanceof $f ||
          t instanceof Jf) &&
          t.addDimensions(e.fields),
          t.swapWithParent(),
          Kf(e);
      }
    else e.children.map(Kf);
    var t;
  }
  function Zf(e) {
    if (e instanceof Vl && e.type === Ll.Main && 1 === e.numChildren()) {
      const t = e.children[0];
      t instanceof Df || (t.swapWithParent(), Zf(e));
    }
  }
  const ep = "scale_";
  function tp(e) {
    for (const t of e) {
      for (const e of t.children) if (e.parent !== t) return !1;
      if (!tp(t.children)) return !1;
    }
    return !0;
  }
  function np(e, t) {
    let n = !1;
    for (const i of t) n = e.optimize(i) || n;
    return n;
  }
  function ip(e, t, n) {
    let i = e.sources,
      o = !1;
    return (
      (o = np(new Uf(), i) || o),
      (o = np(new Wf(t), i) || o),
      (i = i.filter((e) => e.numChildren() > 0)),
      (o = np(new Vf(), i) || o),
      (i = i.filter((e) => e.numChildren() > 0)),
      n ||
        ((o = np(new Bf(), i) || o),
        (o = np(new Yf(t), i) || o),
        (o = np(new Rf(), i) || o),
        (o = np(new Hf(), i) || o),
        (o = np(new Gf(), i) || o),
        (o = np(new If(), i) || o),
        (o = np(new qf(), i) || o),
        (o = np(new Xf(), i) || o)),
      (e.sources = i),
      o
    );
  }
  function op(e, t) {
    tp(e.sources);
    let n = 0,
      i = 0;
    for (let i = 0; i < 5 && ip(e, t, !0); i++) n++;
    e.sources.map(Kf);
    for (let n = 0; n < 5 && ip(e, t, !1); n++) i++;
    tp(e.sources),
      5 === Math.max(n, i) &&
        ji("Maximum optimization runs(".concat(5, ") reached."));
  }
  class rp {
    constructor(e) {
      Ln(this, "signal", void 0),
        Object.defineProperty(this, "signal", { enumerable: !0, get: e });
    }
    static fromName(e, t) {
      return new rp(() => e(t));
    }
  }
  function ap(e) {
    Wp(e)
      ? (function (e) {
          const t = e.component.scales;
          for (const n of C(t)) {
            const i = sp(e, n);
            if (
              (t[n].setWithExplicit("domains", i),
              dp(e, n),
              e.component.data.isFaceted)
            ) {
              let t = e;
              for (; !Rp(t) && t.parent; ) t = t.parent;
              if ("shared" === t.component.resolve.scale[n])
                for (const e of i.value)
                  vn(e) && (e.data = ep + e.data.replace(ep, ""));
            }
          }
        })(e)
      : (function (e) {
          for (const t of e.children) ap(t);
          const t = e.component.scales;
          for (const n of C(t)) {
            let i,
              o = null;
            for (const t of e.children) {
              const e = t.component.scales[n];
              if (e) {
                i =
                  void 0 === i
                    ? e.getWithExplicit("domains")
                    : zl(
                        i,
                        e.getWithExplicit("domains"),
                        "domains",
                        "scale",
                        pp
                      );
                const t = e.get("selectionExtent");
                o && t && o.param !== t.param && ji(Qn), (o = t);
              }
            }
            t[n].setWithExplicit("domains", i),
              o && t[n].set("selectionExtent", o, !0);
          }
        })(e);
  }
  function sp(e, t) {
    const n = e.getScaleComponent(t).get("type"),
      { encoding: i } = e,
      o = (function (e, t, n, i) {
        if ("unaggregated" === e) {
          const { valid: e, reason: i } = fp(t, n);
          if (!e) return void ji(i);
        } else if (void 0 === e && i.useUnaggregatedDomain) {
          const { valid: e } = fp(t, n);
          if (e) return "unaggregated";
        }
        return e;
      })(e.scaleDomain(t), e.typedFieldDef(t), n, e.config.scale);
    return (
      o !== e.scaleDomain(t) &&
        (e.specifiedScales[t] = { ...e.specifiedScales[t], domain: o }),
      "x" === t && Ma(i.x2)
        ? Ma(i.x)
          ? zl(lp(n, o, e, "x"), lp(n, o, e, "x2"), "domain", "scale", pp)
          : lp(n, o, e, "x2")
        : "y" === t && Ma(i.y2)
        ? Ma(i.y)
          ? zl(lp(n, o, e, "y"), lp(n, o, e, "y2"), "domain", "scale", pp)
          : lp(n, o, e, "y2")
        : lp(n, o, e, t)
    );
  }
  function cp(e, t, n) {
    var i;
    const o = null === (i = $i(n)) || void 0 === i ? void 0 : i.unit;
    return "temporal" === t || o
      ? (function (e, t, n) {
          return e.map((e) => {
            const i = Ha(e, { timeUnit: n, type: t });
            return { signal: "{data: ".concat(i, "}") };
          });
        })(e, t, o)
      : [e];
  }
  function lp(e, n, i, o) {
    const { encoding: r } = i,
      a = Ma(r[o]),
      { type: s } = a,
      c = a.timeUnit;
    if (
      (function (e) {
        return e && e.unionWith;
      })(n)
    ) {
      const t = lp(e, void 0, i, o),
        r = cp(n.unionWith, s, c);
      return Dl([...t.value, ...r]);
    }
    if (gn(n)) return Dl([n]);
    if (n && "unaggregated" !== n && !Bo(n)) return Dl(cp(n, s, c));
    const l = i.stack;
    if (l && o === l.fieldChannel) {
      if ("normalize" === l.offset) return Fl([[0, 1]]);
      const e = i.requestDataName(Ll.Main);
      return Fl([
        { data: e, field: i.vgField(o, { suffix: "start" }) },
        { data: e, field: i.vgField(o, { suffix: "end" }) },
      ]);
    }
    const u =
      Ht(o) && ca(a)
        ? (function (e, t, n) {
            if (!qo(n)) return;
            const i = e.fieldDef(t),
              o = i.sort;
            if (Qr(o))
              return { op: "min", field: Dd(i, t), order: "ascending" };
            const { stack: r } = e,
              a = r
                ? new Set([
                    ...r.groupbyFields,
                    ...r.stackBy.map((e) => e.fieldDef.field),
                  ])
                : void 0;
            if (Jr(o)) {
              return up(o, r && !a.has(o.field));
            }
            if (Xr(o)) {
              const { encoding: t, order: n } = o,
                i = e.fieldDef(t),
                { aggregate: s, field: c } = i,
                l = r && !a.has(c);
              if ($t(s) || Kt(s)) return up({ field: ka(i), order: n }, l);
              if (Zt(s) || !s) return up({ op: s, field: c, order: n }, l);
            } else {
              if ("descending" === o)
                return { op: "min", field: e.vgField(t), order: "descending" };
              if (y(["ascending", void 0], o)) return !0;
            }
            return;
          })(i, o, e)
        : void 0;
    if (ua(a)) {
      return Fl(cp([a.datum], s, c));
    }
    const d = a;
    if ("unaggregated" === n) {
      const e = i.requestDataName(Ll.Main),
        { field: t } = a;
      return Fl([
        { data: e, field: ka({ field: t, aggregate: "min" }) },
        { data: e, field: ka({ field: t, aggregate: "max" }) },
      ]);
    }
    if (an(d.bin)) {
      if (qo(e))
        return Fl(
          "bin-ordinal" === e
            ? []
            : [
                {
                  data: N(u)
                    ? i.requestDataName(Ll.Main)
                    : i.requestDataName(Ll.Raw),
                  field: i.vgField(o, Ia(d, o) ? { binSuffix: "range" } : {}),
                  sort:
                    !0 !== u && t.isObject(u)
                      ? u
                      : { field: i.vgField(o, {}), op: "min" },
                },
              ]
        );
      {
        const { bin: e } = d;
        if (an(e)) {
          const t = bf(i, d.field, e);
          return Fl([
            new rp(() => {
              const e = i.getSignalName(t);
              return "[".concat(e, ".start, ").concat(e, ".stop]");
            }),
          ]);
        }
        return Fl([
          { data: i.requestDataName(Ll.Main), field: i.vgField(o, {}) },
        ]);
      }
    }
    if (
      d.timeUnit &&
      y(["time", "utc"], e) &&
      oa(d, Wp(i) ? i.encoding[nt(o)] : void 0, i.markDef, i.config)
    ) {
      const e = i.requestDataName(Ll.Main);
      return Fl([
        { data: e, field: i.vgField(o) },
        { data: e, field: i.vgField(o, { suffix: "end" }) },
      ]);
    }
    return Fl(
      u
        ? [
            {
              data: N(u)
                ? i.requestDataName(Ll.Main)
                : i.requestDataName(Ll.Raw),
              field: i.vgField(o),
              sort: u,
            },
          ]
        : [{ data: i.requestDataName(Ll.Main), field: i.vgField(o) }]
    );
  }
  function up(e, t) {
    const { op: n, field: i, order: o } = e;
    return {
      op: null != n ? n : t ? "sum" : Ir,
      ...(i ? { field: R(i) } : {}),
      ...(o ? { order: o } : {}),
    };
  }
  function dp(e, t) {
    var n;
    const i = e.component.scales[t],
      o = e.specifiedScales[t].domain,
      r = null === (n = e.fieldDef(t)) || void 0 === n ? void 0 : n.bin,
      a = Bo(o) && o,
      s = cn(r) && ln(r.extent) && r.extent;
    (a || s) && i.set("selectionExtent", null != a ? a : s, !0);
  }
  function fp(e, n) {
    const { aggregate: i, type: o } = e;
    return i
      ? t.isString(i) && !on.has(i)
        ? { valid: !1, reason: gi(i) }
        : "quantitative" === o && "log" === n
        ? { valid: !1, reason: hi(e) }
        : { valid: !0 }
      : { valid: !1, reason: mi(e) };
  }
  function pp(e, t, n, i) {
    return (
      e.explicit &&
        t.explicit &&
        ji(
          (function (e, t, n, i) {
            return "Conflicting "
              .concat(t.toString(), ' property "')
              .concat(e.toString(), '" (')
              .concat(g(n), " and ")
              .concat(g(i), "). Using the union of the two domains.");
          })(n, i, e.value, t.value)
        ),
      { explicit: e.explicit, value: [...e.value, ...t.value] }
    );
  }
  function mp(e) {
    const n = S(
        e.map((e) => {
          if (vn(e)) {
            const { sort: t, ...n } = e;
            return n;
          }
          return e;
        }),
        h
      ),
      i = S(
        e
          .map((e) => {
            if (vn(e)) {
              const t = e.sort;
              return (
                void 0 === t ||
                  N(t) ||
                  ("op" in t && "count" === t.op && delete t.field,
                  "ascending" === t.order && delete t.order),
                t
              );
            }
          })
          .filter((e) => void 0 !== e),
        h
      );
    if (0 === n.length) return;
    if (1 === n.length) {
      const n = e[0];
      if (vn(n) && i.length > 0) {
        let e = i[0];
        if (i.length > 1) ji(wi), (e = !0);
        else if (t.isObject(e) && "field" in e) {
          const t = e.field;
          n.field === t && (e = !e.order || { order: e.order });
        }
        return { ...n, sort: e };
      }
      return n;
    }
    const o = S(
      i.map((e) =>
        N(e) || !("op" in e) || (t.isString(e.op) && e.op in Qt)
          ? e
          : (ji(
              (function (e) {
                return "Dropping sort property ".concat(
                  g(e),
                  ' as unioned domains only support boolean or op "count", "min", and "max".'
                );
              })(e)
            ),
            !0)
      ),
      h
    );
    let r;
    1 === o.length ? (r = o[0]) : o.length > 1 && (ji(wi), (r = !0));
    const a = S(
      e.map((e) => (vn(e) ? e.data : null)),
      (e) => e
    );
    if (1 === a.length && null !== a[0]) {
      return {
        data: a[0],
        fields: n.map((e) => e.field),
        ...(r ? { sort: r } : {}),
      };
    }
    return { fields: n, ...(r ? { sort: r } : {}) };
  }
  function gp(e) {
    if (vn(e) && t.isString(e.field)) return e.field;
    if (
      (function (e) {
        return !t.isArray(e) && "fields" in e && !("data" in e);
      })(e)
    ) {
      let n;
      for (const i of e.fields)
        if (vn(i) && t.isString(i.field))
          if (n) {
            if (n !== i.field)
              return (
                ji(
                  "Detected faceted independent scales that union domain of multiple fields from different data sources. We will use the first field. The result view size may be incorrect."
                ),
                n
              );
          } else n = i.field;
      return (
        ji(
          "Detected faceted independent scales that union domain of the same fields from different source. We will assume that this is the same field from a different fork of the same data source. However, if this is not the case, the result view size may be incorrect."
        ),
        n
      );
    }
    if (
      (function (e) {
        return !t.isArray(e) && "fields" in e && "data" in e;
      })(e)
    ) {
      ji(
        "Detected faceted independent scales that union domain of multiple fields from the same data source. We will use the first field. The result view size may be incorrect."
      );
      const n = e.fields[0];
      return t.isString(n) ? n : void 0;
    }
  }
  function hp(e, t) {
    const n = e.component.scales[t]
      .get("domains")
      .map((t) => (vn(t) && (t.data = e.lookupDataSource(t.data)), t));
    return mp(n);
  }
  function vp(e) {
    return Bp(e) || Up(e)
      ? e.children.reduce((e, t) => e.concat(vp(t)), yp(e))
      : yp(e);
  }
  function yp(e) {
    return C(e.component.scales).reduce((n, i) => {
      const o = e.component.scales[i];
      if (o.merged) return n;
      const r = o.combine(),
        {
          name: a,
          type: s,
          selectionExtent: c,
          domains: l,
          range: u,
          reverse: d,
          ...f
        } = r,
        p = (function (e, n, i, o) {
          if (Ft(i)) {
            if (hn(e)) return { step: { signal: "".concat(n, "_step") } };
          } else if (t.isObject(e) && vn(e))
            return { ...e, data: o.lookupDataSource(e.data) };
          return e;
        })(r.range, a, i, e),
        m = hp(e, i),
        g = c
          ? (function (e, n, i, o) {
              const r = ld(e, n.param, n);
              return {
                signal:
                  Wo(i.get("type")) && t.isArray(o) && o[0] > o[1]
                    ? "isValid(".concat(r, ") && reverse(").concat(r, ")")
                    : r,
              };
            })(e, c, o, m)
          : null;
      return (
        n.push({
          name: a,
          type: s,
          ...(m ? { domain: m } : {}),
          ...(g ? { domainRaw: g } : {}),
          range: p,
          ...(void 0 !== d ? { reverse: d } : {}),
          ...f,
        }),
        n
      );
    }, []);
  }
  class bp extends Sl {
    constructor(e, t) {
      super({}, { name: e }),
        Ln(this, "merged", !1),
        this.setWithExplicit("type", t);
    }
    domainDefinitelyIncludesZero() {
      return (
        !1 !== this.get("zero") ||
        b(
          this.get("domains"),
          (e) => t.isArray(e) && 2 === e.length && e[0] <= 0 && e[1] >= 0
        )
      );
    }
  }
  const xp = ["range", "scheme"];
  function wp(e, n) {
    const i = e.fieldDef(n);
    if (null != i && i.bin) {
      const { bin: o, field: r } = i,
        a = it(n),
        s = e.getName(a);
      if (t.isObject(o) && o.binned && void 0 !== o.step)
        return new rp(() => {
          const t = e.scaleName(n),
            i = '(domain("'
              .concat(t, '")[1] - domain("')
              .concat(t, '")[0]) / ')
              .concat(o.step);
          return "".concat(e.getSignalName(s), " / (").concat(i, ")");
        });
      if (an(o)) {
        const t = bf(e, r, o);
        return new rp(() => {
          const n = e.getSignalName(t),
            i = "("
              .concat(n, ".stop - ")
              .concat(n, ".start) / ")
              .concat(n, ".step");
          return "".concat(e.getSignalName(s), " / (").concat(i, ")");
        });
      }
    }
  }
  function kp(e, n) {
    const i = n.specifiedScales[e],
      { size: o } = n,
      r = n.getScaleComponent(e).get("type");
    for (const o of xp)
      if (void 0 !== i[o]) {
        const a = $o(r, o),
          s = Ko(e, o);
        if (a)
          if (s) ji(s);
          else
            switch (o) {
              case "range": {
                const o = i.range;
                if (t.isArray(o)) {
                  if (Ft(e))
                    return Dl(
                      o.map((e) => {
                        if ("width" === e || "height" === e) {
                          const t = n.getName(e),
                            i = n.getSignalName.bind(n);
                          return rp.fromName(i, t);
                        }
                        return e;
                      })
                    );
                } else if (t.isObject(o))
                  return Dl({
                    data: n.requestDataName(Ll.Main),
                    field: o.field,
                    sort: { op: "min", field: n.vgField(e) },
                  });
                return Dl(o);
              }
              case "scheme":
                return Dl(Sp(i[o]));
            }
        else ji(bi(r, o, e));
      }
    const a = e === ee || "xOffset" === e ? "width" : "height",
      s = o[a];
    if (ec(s))
      if (Ft(e))
        if (qo(r)) {
          const t = Dp(s, n, e);
          if (t) return Dl({ step: t });
        } else ji(xi(a));
      else if (Pt(e)) {
        const t = e === oe ? "x" : "y";
        if ("band" === n.getScaleComponent(t).get("type")) {
          const e = Fp(s, r);
          if (e) return Dl(e);
        }
      }
    const { rangeMin: c, rangeMax: l } = i,
      u = (function (e, n) {
        const { size: i, config: o, mark: r, encoding: a } = n,
          s = n.getSignalName.bind(n),
          { type: c } = Ma(a[e]),
          l = n.getScaleComponent(e).get("type"),
          { domain: u, domainMid: d } = n.specifiedScales[e];
        switch (e) {
          case ee:
          case te: {
            if (y(["point", "band"], l)) {
              const t = Op(e, i, o.view);
              if (ec(t)) {
                return { step: Dp(t, n, e) };
              }
            }
            const t = it(e),
              r = n.getName(t);
            return e === te && Wo(l)
              ? [rp.fromName(s, r), 0]
              : [0, rp.fromName(s, r)];
          }
          case oe:
          case re:
            return (function (e, t, n) {
              const i = e === oe ? "x" : "y",
                o = t.getScaleComponent(i).get("type"),
                r = t.scaleName(i);
              if ("band" === o) {
                const e = Op(i, t.size, t.config.view);
                if (ec(e)) {
                  const t = Fp(e, n);
                  if (t) return t;
                }
                return [0, { signal: "bandwidth('".concat(r, "')") }];
              }
              return f(
                "Cannot use "
                  .concat(e, " scale if ")
                  .concat(i, " scale is not discrete.")
              );
            })(e, n, l);
          case ye: {
            const a = _p(r, n.component.scales[e].get("zero"), o),
              s = (function (e, n, i, o) {
                const r = { x: wp(i, "x"), y: wp(i, "y") };
                switch (e) {
                  case "bar":
                  case "tick": {
                    if (void 0 !== o.scale.maxBandSize)
                      return o.scale.maxBandSize;
                    const e = Cp(n, r, o.view);
                    return t.isNumber(e)
                      ? e - 1
                      : new rp(() => "".concat(e.signal, " - 1"));
                  }
                  case "line":
                  case "trail":
                  case "rule":
                    return o.scale.maxStrokeWidth;
                  case "text":
                    return o.scale.maxFontSize;
                  case "point":
                  case "square":
                  case "circle": {
                    if (o.scale.maxSize) return o.scale.maxSize;
                    const e = Cp(n, r, o.view);
                    return t.isNumber(e)
                      ? Math.pow(zp * e, 2)
                      : new rp(() =>
                          "pow(".concat(zp, " * ").concat(e.signal, ", 2)")
                        );
                  }
                }
                throw new Error(ci("size", e));
              })(r, i, n, o);
            return Uo(l)
              ? (function (e, t, n) {
                  const i = () => {
                    const i = On(t),
                      o = On(e),
                      r = "("
                        .concat(i, " - ")
                        .concat(o, ") / (")
                        .concat(n, " - 1)");
                    return "sequence("
                      .concat(o, ", ")
                      .concat(i, " + ")
                      .concat(r, ", ")
                      .concat(r, ")");
                  };
                  return gn(t) ? new rp(i) : { signal: i() };
                })(
                  a,
                  s,
                  (function (e, n, i, o) {
                    switch (e) {
                      case "quantile":
                        return n.scale.quantileCount;
                      case "quantize":
                        return n.scale.quantizeCount;
                      case "threshold":
                        return void 0 !== i && t.isArray(i)
                          ? i.length + 1
                          : (ji(
                              (function (e) {
                                return "Domain for ".concat(
                                  e,
                                  " is required for threshold scale."
                                );
                              })(o)
                            ),
                            3);
                    }
                  })(l, o, u, e)
                )
              : [a, s];
          }
          case ce:
            return [0, 2 * Math.PI];
          case be:
            return [0, 360];
          case ae:
            return [
              0,
              new rp(() => {
                const e = n.getSignalName("width"),
                  t = n.getSignalName("height");
                return "min(".concat(e, ",").concat(t, ")/2");
              }),
            ];
          case Se:
            return [o.scale.minStrokeWidth, o.scale.maxStrokeWidth];
          case De:
            return [
              [1, 0],
              [4, 2],
              [2, 1],
              [1, 1],
              [1, 2, 4, 2],
            ];
          case ve:
            return "symbol";
          case me:
          case ge:
          case he:
            return "ordinal" === l
              ? "nominal" === c
                ? "category"
                : "ordinal"
              : void 0 !== d
              ? "diverging"
              : "rect" === r || "geoshape" === r
              ? "heatmap"
              : "ramp";
          case xe:
          case we:
          case ke:
            return [o.scale.minOpacity, o.scale.maxOpacity];
        }
      })(e, n);
    return (void 0 !== c || void 0 !== l) &&
      $o(r, "rangeMin") &&
      t.isArray(u) &&
      2 === u.length
      ? Dl([null != c ? c : u[0], null != l ? l : u[1]])
      : Fl(u);
  }
  function Sp(e) {
    return (function (e) {
      return !t.isString(e) && !!e.name;
    })(e)
      ? { scheme: e.name, ...m(e, ["name"]) }
      : { scheme: e };
  }
  function Dp(e, n, i) {
    const { encoding: o } = n,
      r = n.getScaleComponent(i),
      a = ot(i),
      s = o[a];
    if (
      "offset" === Zs({ step: e, offsetIsDiscrete: pa(s) && go(s.type) }) &&
      is(o, a)
    ) {
      var c;
      const i = n.getScaleComponent(a),
        o = n.scaleName(a);
      let s = "domain('".concat(o, "').length");
      if ("band" === i.get("type")) {
        var l, u, d, f;
        const e =
            null !==
              (l =
                null !== (u = i.get("paddingInner")) && void 0 !== u
                  ? u
                  : i.get("padding")) && void 0 !== l
              ? l
              : 0,
          t =
            null !==
              (d =
                null !== (f = i.get("paddingOuter")) && void 0 !== f
                  ? f
                  : i.get("padding")) && void 0 !== d
              ? d
              : 0;
        s = "bandspace(".concat(s, ", ").concat(e, ", ").concat(t, ")");
      }
      const m =
        null !== (c = r.get("paddingInner")) && void 0 !== c
          ? c
          : r.get("padding");
      return {
        signal: ""
          .concat(e.step, " * ")
          .concat(s, " / (1-")
          .concat(((p = m), gn(p) ? p.signal : t.stringValue(p)), ")"),
      };
    }
    return e.step;
    var p;
  }
  function Fp(e, t) {
    if ("offset" === Zs({ step: e, offsetIsDiscrete: qo(t) }))
      return { step: e.step };
  }
  function Op(e, t, n) {
    const i = e === ee ? "width" : "height",
      o = t[i];
    return o || rc(n, i);
  }
  function _p(e, t, n) {
    if (t)
      return gn(t)
        ? { signal: "".concat(t.signal, " ? 0 : ").concat(_p(e, !1, n)) }
        : 0;
    switch (e) {
      case "bar":
      case "tick":
        return n.scale.minBandSize;
      case "line":
      case "trail":
      case "rule":
        return n.scale.minStrokeWidth;
      case "text":
        return n.scale.minFontSize;
      case "point":
      case "square":
      case "circle":
        return n.scale.minSize;
    }
    throw new Error(ci("size", e));
  }
  const zp = 0.95;
  function Cp(e, t, n) {
    const i = ec(e.width) ? e.width.step : oc(n, "width"),
      o = ec(e.height) ? e.height.step : oc(n, "height");
    return t.x || t.y
      ? new rp(() => {
          const e = [t.x ? t.x.signal : i, t.y ? t.y.signal : o];
          return "min(".concat(e.join(", "), ")");
        })
      : Math.min(i, o);
  }
  function Pp(e, t) {
    Wp(e)
      ? (function (e, t) {
          const n = e.component.scales,
            { config: i, encoding: o, markDef: r, specifiedScales: a } = e;
          for (const s of C(n)) {
            const c = a[s],
              l = n[s],
              u = e.getScaleComponent(s),
              d = Ma(o[s]),
              f = c[t],
              p = u.get("type"),
              m = u.get("padding"),
              g = u.get("paddingInner"),
              h = $o(p, t),
              v = Ko(s, t);
            if (
              (void 0 !== f && (h ? v && ji(v) : ji(bi(p, t, s))),
              h && void 0 === v)
            )
              if (void 0 !== f) {
                const e = d.timeUnit,
                  n = d.type;
                switch (t) {
                  case "domainMax":
                  case "domainMin":
                    Ei(c[t]) || "temporal" === n || e
                      ? l.set(
                          t,
                          { signal: Ha(c[t], { type: n, timeUnit: e }) },
                          !0
                        )
                      : l.set(t, c[t], !0);
                    break;
                  default:
                    l.copyKeyFromObject(t, c);
                }
              } else {
                const n =
                  t in Ap
                    ? Ap[t]({
                        model: e,
                        channel: s,
                        fieldOrDatumDef: d,
                        scaleType: p,
                        scalePadding: m,
                        scalePaddingInner: g,
                        domain: c.domain,
                        domainMin: c.domainMin,
                        domainMax: c.domainMax,
                        markDef: r,
                        config: i,
                        hasNestedOffsetScale: os(o, s),
                      })
                    : i.scale[t];
                void 0 !== n && l.set(t, n, !1);
              }
          }
        })(e, t)
      : jp(e, t);
  }
  const Ap = {
    bins: (e) => {
      let { model: t, fieldOrDatumDef: n } = e;
      return ca(n)
        ? (function (e, t) {
            const n = t.bin;
            if (an(n)) {
              const i = bf(e, t.field, n);
              return new rp(() => e.getSignalName(i));
            }
            if (sn(n) && cn(n) && void 0 !== n.step) return { step: n.step };
            return;
          })(t, n)
        : void 0;
    },
    interpolate: (e) => {
      let { channel: t, fieldOrDatumDef: n } = e;
      return (function (e, t) {
        if (y([me, ge, he], e) && "nominal" !== t) return "hcl";
        return;
      })(t, n.type);
    },
    nice: (e) => {
      let {
        scaleType: n,
        channel: i,
        domain: o,
        domainMin: r,
        domainMax: a,
        fieldOrDatumDef: s,
      } = e;
      return (function (e, n, i, o, r, a) {
        var s;
        if (
          (null !== (s = Ea(a)) && void 0 !== s && s.bin) ||
          t.isArray(i) ||
          null != r ||
          null != o ||
          y([Do, Fo], e)
        )
          return;
        return !!Ft(n) || void 0;
      })(n, i, o, r, a, s);
    },
    padding: (e) => {
      let {
        channel: t,
        scaleType: n,
        fieldOrDatumDef: i,
        markDef: o,
        config: r,
      } = e;
      return (function (e, t, n, i, o, r) {
        if (Ft(e)) {
          if (Ro(t)) {
            if (void 0 !== n.continuousPadding) return n.continuousPadding;
            const { type: t, orient: a } = o;
            if (
              "bar" === t &&
              (!ca(i) || (!i.bin && !i.timeUnit)) &&
              (("vertical" === a && "x" === e) ||
                ("horizontal" === a && "y" === e))
            )
              return r.continuousBandSize;
          }
          if (t === Oo) return n.pointPadding;
        }
        return;
      })(t, n, r.scale, i, o, r.bar);
    },
    paddingInner: (e) => {
      let {
        scalePadding: t,
        channel: n,
        markDef: i,
        scaleType: o,
        config: r,
        hasNestedOffsetScale: a,
      } = e;
      return (function (e, t, n, i, o) {
        let r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (void 0 !== e) return;
        if (Ft(t)) {
          const {
            bandPaddingInner: e,
            barBandPaddingInner: t,
            rectBandPaddingInner: i,
            bandWithNestedOffsetPaddingInner: a,
          } = o;
          return r ? a : V(e, "bar" === n ? t : i);
        }
        if (Pt(t) && i === _o) return o.offsetBandPaddingInner;
        return;
      })(t, n, i.type, o, r.scale, a);
    },
    paddingOuter: (e) => {
      let {
        scalePadding: t,
        channel: n,
        scaleType: i,
        scalePaddingInner: o,
        config: r,
        hasNestedOffsetScale: a,
      } = e;
      return (function (e, t, n, i, o) {
        let r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (void 0 !== e) return;
        if (Ft(t)) {
          const { bandPaddingOuter: e, bandWithNestedOffsetPaddingOuter: t } =
            o;
          if (r) return t;
          if (n === _o)
            return V(e, gn(i) ? { signal: "".concat(i.signal, "/2") } : i / 2);
        } else if (Pt(t)) {
          if (n === Oo) return 0.5;
          if (n === _o) return o.offsetBandPaddingOuter;
        }
        return;
      })(t, n, i, o, r.scale, a);
    },
    reverse: (e) => {
      let { fieldOrDatumDef: t, scaleType: n, channel: i, config: o } = e;
      return (function (e, t, n, i) {
        if ("x" === n && void 0 !== i.xReverse)
          return Wo(e) && "descending" === t
            ? gn(i.xReverse)
              ? { signal: "!".concat(i.xReverse.signal) }
              : !i.xReverse
            : i.xReverse;
        if (Wo(e) && "descending" === t) return !0;
        return;
      })(n, ca(t) ? t.sort : void 0, i, o.scale);
    },
    zero: (e) => {
      let {
        channel: n,
        fieldOrDatumDef: i,
        domain: o,
        markDef: r,
        scaleType: a,
      } = e;
      return (function (e, n, i, o, r) {
        if (i && "unaggregated" !== i && Wo(r)) {
          if (t.isArray(i)) {
            const e = i[0],
              t = i[i.length - 1];
            if (e <= 0 && t >= 0) return !0;
          }
          return !1;
        }
        if ("size" === e && "quantitative" === n.type && !Uo(r)) return !0;
        if ((!ca(n) || !n.bin) && y([...Dt, ..._t], e)) {
          const { orient: t, type: n } = o;
          return (
            !y(["bar", "area", "line", "trail"], n) ||
            !(
              ("horizontal" === t && "y" === e) ||
              ("vertical" === t && "x" === e)
            )
          );
        }
        return !1;
      })(n, i, o, r, a);
    },
  };
  function Np(e) {
    Wp(e)
      ? (function (e) {
          const t = e.component.scales;
          for (const n of Bt) {
            const i = t[n];
            if (!i) continue;
            const o = kp(n, e);
            i.setWithExplicit("range", o);
          }
        })(e)
      : jp(e, "range");
  }
  function jp(e, t) {
    const n = e.component.scales;
    for (const n of e.children) "range" === t ? Np(n) : Pp(n, t);
    for (const i of C(n)) {
      let o;
      for (const n of e.children) {
        const e = n.component.scales[i];
        if (e) {
          o = zl(
            o,
            e.getWithExplicit(t),
            t,
            "scale",
            Ol((e, n) =>
              "range" === t && e.step && n.step ? e.step - n.step : 0
            )
          );
        }
      }
      n[i].setWithExplicit(t, o);
    }
  }
  function Ep(e, t, n, i) {
    let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    const r = Mp(t, n, i, o),
      { type: a } = e;
    return Ht(t)
      ? void 0 !== a
        ? er(t, a)
          ? ca(n) && !Zo(a, n.type)
            ? (ji(yi(a, r)), r)
            : a
          : (ji(vi(t, a, r)), r)
        : r
      : null;
  }
  function Mp(e, t, n, i) {
    switch (t.type) {
      case "nominal":
      case "ordinal":
        var o;
        if (qe(e) || "discrete" === Xt(e))
          return (
            "shape" === e && "ordinal" === t.type && ji(fi(e, "ordinal")),
            "ordinal"
          );
        if (Ft(e) || Pt(e)) {
          if (y(["rect", "bar", "image", "rule"], n.type)) return "band";
          if (i) return "band";
        } else if ("arc" === n.type && e in Ot) return "band";
        return Sr(n[it(e)]) ||
          (va(t) && null !== (o = t.axis) && void 0 !== o && o.tickBand)
          ? "band"
          : "point";
      case "temporal":
        return qe(e)
          ? "time"
          : "discrete" === Xt(e)
          ? (ji(fi(e, "temporal")), "ordinal")
          : ca(t) && t.timeUnit && $i(t.timeUnit).utc
          ? "utc"
          : "time";
      case "quantitative":
        return qe(e)
          ? ca(t) && an(t.bin)
            ? "bin-ordinal"
            : "linear"
          : "discrete" === Xt(e)
          ? (ji(fi(e, "quantitative")), "ordinal")
          : "linear";
      case "geojson":
        return;
    }
    throw new Error(ii(t.type));
  }
  function Tp(e) {
    Wp(e)
      ? (e.component.scales = (function (e) {
          const { encoding: t, mark: n, markDef: i } = e,
            o = {};
          for (const a of Bt) {
            const s = Ma(t[a]);
            if (s && n === gr && a === ve && s.type === xo) continue;
            let c = s && s.scale;
            if (Pt(a)) {
              if (!os(t, rt(a))) {
                c && ji(li(a));
                continue;
              }
            }
            if (s && null !== c && !1 !== c) {
              var r;
              (null !== (r = c) && void 0 !== r) || (c = {});
              const n = Ep(c, a, s, i, os(t, a));
              o[a] = new bp(e.scaleName("".concat(a), !0), {
                value: n,
                explicit: c.type === n,
              });
            }
          }
          return o;
        })(e))
      : (e.component.scales = (function (e) {
          const t = (e.component.scales = {}),
            n = {},
            i = e.component.resolve;
          for (const t of e.children) {
            Tp(t);
            for (const a of C(t.component.scales)) {
              var o, r;
              if (
                ((null !== (r = (o = i.scale)[a]) && void 0 !== r) ||
                  (o[a] = Gd(a, e)),
                "shared" === i.scale[a])
              ) {
                const e = n[a],
                  o = t.component.scales[a].getWithExplicit("type");
                e
                  ? Co(e.value, o.value)
                    ? (n[a] = zl(e, o, "type", "scale", Lp))
                    : ((i.scale[a] = "independent"), delete n[a])
                  : (n[a] = o);
              }
            }
          }
          for (const i of C(n)) {
            const o = e.scaleName(i, !0),
              r = n[i];
            t[i] = new bp(o, r);
            for (const t of e.children) {
              const e = t.component.scales[i];
              e && (t.renameScale(e.get("name"), o), (e.merged = !0));
            }
          }
          return t;
        })(e));
  }
  const Lp = Ol((e, t) => Ao(e) - Ao(t));
  class qp {
    constructor() {
      Ln(this, "nameMap", void 0), (this.nameMap = {});
    }
    rename(e, t) {
      this.nameMap[e] = t;
    }
    has(e) {
      return void 0 !== this.nameMap[e];
    }
    get(e) {
      for (; this.nameMap[e] && e !== this.nameMap[e]; ) e = this.nameMap[e];
      return e;
    }
  }
  function Wp(e) {
    return "unit" === (null == e ? void 0 : e.type);
  }
  function Rp(e) {
    return "facet" === (null == e ? void 0 : e.type);
  }
  function Up(e) {
    return "concat" === (null == e ? void 0 : e.type);
  }
  function Bp(e) {
    return "layer" === (null == e ? void 0 : e.type);
  }
  class Hp {
    constructor(e, n, i, o, r, a, s) {
      var c, u;
      (this.type = n),
        (this.parent = i),
        (this.config = r),
        Ln(this, "name", void 0),
        Ln(this, "size", void 0),
        Ln(this, "title", void 0),
        Ln(this, "description", void 0),
        Ln(this, "data", void 0),
        Ln(this, "transforms", void 0),
        Ln(this, "layout", void 0),
        Ln(this, "scaleNameMap", void 0),
        Ln(this, "projectionNameMap", void 0),
        Ln(this, "signalNameMap", void 0),
        Ln(this, "component", void 0),
        Ln(this, "view", void 0),
        Ln(this, "children", void 0),
        Ln(this, "correctDataNames", (e) => {
          var t, n, i;
          return (
            null !== (t = e.from) &&
              void 0 !== t &&
              t.data &&
              (e.from.data = this.lookupDataSource(e.from.data)),
            null !== (n = e.from) &&
              void 0 !== n &&
              null !== (i = n.facet) &&
              void 0 !== i &&
              i.data &&
              (e.from.facet.data = this.lookupDataSource(e.from.facet.data)),
            e
          );
        }),
        (this.parent = i),
        (this.config = r),
        (this.view = fn(s)),
        (this.name = null !== (c = e.name) && void 0 !== c ? c : o),
        (this.title = mn(e.title)
          ? { text: e.title }
          : e.title
          ? fn(e.title)
          : void 0),
        (this.scaleNameMap = i ? i.scaleNameMap : new qp()),
        (this.projectionNameMap = i ? i.projectionNameMap : new qp()),
        (this.signalNameMap = i ? i.signalNameMap : new qp()),
        (this.data = e.data),
        (this.description = e.description),
        (this.transforms = (
          null !== (u = e.transform) && void 0 !== u ? u : []
        ).map((e) => (Xc(e) ? { filter: l(e.filter, po) } : e))),
        (this.layout =
          "layer" === n || "unit" === n
            ? {}
            : (function (e, n, i) {
                const o = i[n],
                  r = {},
                  { spacing: a, columns: s } = o;
                void 0 !== a && (r.spacing = a),
                  void 0 !== s &&
                    ((Zr(e) && !$r(e.facet)) || Xs(e)) &&
                    (r.columns = s),
                  Js(e) && (r.columns = 1);
                for (const n of nc)
                  if (void 0 !== e[n])
                    if ("spacing" === n) {
                      var c, l;
                      const i = e[n];
                      r[n] = t.isNumber(i)
                        ? i
                        : {
                            row: null !== (c = i.row) && void 0 !== c ? c : a,
                            column:
                              null !== (l = i.column) && void 0 !== l ? l : a,
                          };
                    } else r[n] = e[n];
                return r;
              })(e, n, r)),
        (this.component = {
          data: {
            sources: i ? i.component.data.sources : [],
            outputNodes: i ? i.component.data.outputNodes : {},
            outputNodeRefCounts: i ? i.component.data.outputNodeRefCounts : {},
            isFaceted:
              Zr(e) ||
              ((null == i ? void 0 : i.component.data.isFaceted) &&
                void 0 === e.data),
          },
          layoutSize: new Sl(),
          layoutHeaders: { row: {}, column: {}, facet: {} },
          mark: null,
          resolve: { scale: {}, axis: {}, legend: {}, ...(a ? d(a) : {}) },
          selection: null,
          scales: null,
          projection: null,
          axes: {},
          legends: {},
        });
    }
    get width() {
      return this.getSizeSignalRef("width");
    }
    get height() {
      return this.getSizeSignalRef("height");
    }
    parse() {
      this.parseScale(),
        this.parseLayoutSize(),
        this.renameTopLevelLayoutSizeSignal(),
        this.parseSelections(),
        this.parseProjection(),
        this.parseData(),
        this.parseAxesAndHeaders(),
        this.parseLegends(),
        this.parseMarkGroup();
    }
    parseScale() {
      !(function (e) {
        let { ignoreRange: t } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Tp(e), ap(e);
        for (const t of Qo) Pp(e, t);
        t || Np(e);
      })(this);
    }
    parseProjection() {
      hf(this);
    }
    renameTopLevelLayoutSizeSignal() {
      "width" !== this.getName("width") &&
        this.renameSignal(this.getName("width"), "width"),
        "height" !== this.getName("height") &&
          this.renameSignal(this.getName("height"), "height");
    }
    parseLegends() {
      af(this);
    }
    assembleEncodeFromView(e) {
      const { style: t, ...n } = e,
        i = {};
      for (const e of C(n)) {
        const t = n[e];
        void 0 !== t && (i[e] = Dn(t));
      }
      return i;
    }
    assembleGroupEncodeEntry(e) {
      let t = {};
      var n;
      if (
        (this.view && (t = this.assembleEncodeFromView(this.view)), !e) &&
        (this.description && (t.description = Dn(this.description)),
        "unit" === this.type || "layer" === this.type)
      )
        return {
          width: this.getSizeSignalRef("width"),
          height: this.getSizeSignalRef("height"),
          ...(null !== (n = t) && void 0 !== n ? n : {}),
        };
      return z(t) ? void 0 : t;
    }
    assembleLayout() {
      if (!this.layout) return;
      const { spacing: e, ...t } = this.layout,
        { component: n, config: i } = this,
        o = (function (e, t) {
          const n = {};
          for (const i of Re) {
            const o = e[i];
            if (null != o && o.facetFieldDef) {
              const { titleAnchor: e, titleOrient: r } = _d(
                  ["titleAnchor", "titleOrient"],
                  o.facetFieldDef.header,
                  t,
                  i
                ),
                a = Fd(i, r),
                s = qd(e, a);
              void 0 !== s && (n[a] = s);
            }
          }
          return z(n) ? void 0 : n;
        })(n.layoutHeaders, i);
      return {
        padding: e,
        ...this.assembleDefaultLayout(),
        ...t,
        ...(o ? { titleBand: o } : {}),
      };
    }
    assembleDefaultLayout() {
      return {};
    }
    assembleHeaderMarks() {
      const { layoutHeaders: e } = this.component;
      let t = [];
      for (const n of Re) e[n].title && t.push(Pd(this, n));
      for (const e of zd) t = t.concat(jd(this, e));
      return t;
    }
    assembleAxes() {
      return (function (e, t) {
        const { x: n = [], y: i = [] } = e;
        return [
          ...n.map((e) => pd(e, "grid", t)),
          ...i.map((e) => pd(e, "grid", t)),
          ...n.map((e) => pd(e, "main", t)),
          ...i.map((e) => pd(e, "main", t)),
        ].filter((e) => e);
      })(this.component.axes, this.config);
    }
    assembleLegends() {
      return df(this);
    }
    assembleProjections() {
      return ff(this);
    }
    assembleTitle() {
      var e;
      const { encoding: t, ...n } =
          null !== (e = this.title) && void 0 !== e ? e : {},
        i = {
          ...pn(this.config.title).nonMarkTitleProperties,
          ...n,
          ...(t ? { encode: { update: t } } : {}),
        };
      if (i.text) {
        var o, r;
        if (y(["unit", "layer"], this.type)) {
          if (y(["middle", void 0], i.anchor))
            (null !== (o = i.frame) && void 0 !== o) || (i.frame = "group");
        } else
          (null !== (r = i.anchor) && void 0 !== r) || (i.anchor = "start");
        return z(i) ? void 0 : i;
      }
    }
    assembleGroup() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      const t = {};
      (e = e.concat(this.assembleSignals())), e.length > 0 && (t.signals = e);
      const n = this.assembleLayout();
      n && (t.layout = n),
        (t.marks = [].concat(this.assembleHeaderMarks(), this.assembleMarks()));
      const i = !this.parent || Rp(this.parent) ? vp(this) : [];
      i.length > 0 && (t.scales = i);
      const o = this.assembleAxes();
      o.length > 0 && (t.axes = o);
      const r = this.assembleLegends();
      return r.length > 0 && (t.legends = r), t;
    }
    getName(e) {
      return j((this.name ? "".concat(this.name, "_") : "") + e);
    }
    getDataName(e) {
      return this.getName(Ll[e].toLowerCase());
    }
    requestDataName(e) {
      const t = this.getDataName(e),
        n = this.component.data.outputNodeRefCounts;
      return (n[t] = (n[t] || 0) + 1), t;
    }
    getSizeSignalRef(e) {
      if (Rp(this.parent)) {
        const t = zt(Vd(e)),
          n = this.component.scales[t];
        if (n && !n.merged) {
          const e = n.get("type"),
            i = n.get("range");
          if (qo(e) && hn(i)) {
            const e = n.get("name"),
              i = gp(hp(this, t));
            if (i) {
              return {
                signal: Hd(
                  e,
                  n,
                  ka({ aggregate: "distinct", field: i }, { expr: "datum" })
                ),
              };
            }
            return ji(Gn(t)), null;
          }
        }
      }
      return { signal: this.signalNameMap.get(this.getName(e)) };
    }
    lookupDataSource(e) {
      const t = this.component.data.outputNodes[e];
      return t ? t.getSource() : e;
    }
    getSignalName(e) {
      return this.signalNameMap.get(e);
    }
    renameSignal(e, t) {
      this.signalNameMap.rename(e, t);
    }
    renameScale(e, t) {
      this.scaleNameMap.rename(e, t);
    }
    renameProjection(e, t) {
      this.projectionNameMap.rename(e, t);
    }
    scaleName(e, t) {
      return t
        ? this.getName(e)
        : ($e(e) && Ht(e) && this.component.scales[e]) ||
          this.scaleNameMap.has(this.getName(e))
        ? this.scaleNameMap.get(this.getName(e))
        : void 0;
    }
    projectionName(e) {
      return e
        ? this.getName("projection")
        : (this.component.projection && !this.component.projection.merged) ||
          this.projectionNameMap.has(this.getName("projection"))
        ? this.projectionNameMap.get(this.getName("projection"))
        : void 0;
    }
    getScaleComponent(e) {
      if (!this.component.scales)
        throw new Error(
          "getScaleComponent cannot be called before parseScale(). Make sure you have called parseScale or use parseUnitModelWithScale()."
        );
      const t = this.component.scales[e];
      return t && !t.merged
        ? t
        : this.parent
        ? this.parent.getScaleComponent(e)
        : void 0;
    }
    getSelectionComponent(e, t) {
      let n = this.component.selection[e];
      if (
        (!n && this.parent && (n = this.parent.getSelectionComponent(e, t)), !n)
      )
        throw new Error(
          (function (e) {
            return 'Cannot find a selection named "'.concat(e, '".');
          })(t)
        );
      return n;
    }
    hasAxisOrientSignalRef() {
      var e, t;
      return (
        (null === (e = this.component.axes.x) || void 0 === e
          ? void 0
          : e.some((e) => e.hasOrientSignalRef())) ||
        (null === (t = this.component.axes.y) || void 0 === t
          ? void 0
          : t.some((e) => e.hasOrientSignalRef()))
      );
    }
  }
  class Vp extends Hp {
    vgField(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const n = this.fieldDef(e);
      if (n) return ka(n, t);
    }
    reduceFieldDef(e, n) {
      return (function (e, n, i, o) {
        return e
          ? C(e).reduce((i, r) => {
              const a = e[r];
              return t.isArray(a)
                ? a.reduce((e, t) => n.call(o, e, t, r), i)
                : n.call(o, i, a, r);
            }, i)
          : i;
      })(
        this.getMapping(),
        (t, n, i) => {
          const o = Ea(n);
          return o ? e(t, o, i) : t;
        },
        n
      );
    }
    forEachFieldDef(e, t) {
      us(
        this.getMapping(),
        (t, n) => {
          const i = Ea(t);
          i && e(i, n);
        },
        t
      );
    }
  }
  class Ip extends Hl {
    clone() {
      return new Ip(null, d(this.transform));
    }
    constructor(e, t) {
      var n, i, o;
      super(e), (this.transform = t), (this.transform = d(t));
      const r =
        null !== (n = this.transform.as) && void 0 !== n ? n : [void 0, void 0];
      this.transform.as = [
        null !== (i = r[0]) && void 0 !== i ? i : "value",
        null !== (o = r[1]) && void 0 !== o ? o : "density",
      ];
    }
    dependentFields() {
      var e;
      return new Set([
        this.transform.density,
        ...(null !== (e = this.transform.groupby) && void 0 !== e ? e : []),
      ]);
    }
    producedFields() {
      return new Set(this.transform.as);
    }
    hash() {
      return "DensityTransform ".concat(h(this.transform));
    }
    assemble() {
      const { density: e, ...t } = this.transform;
      return { type: "kde", field: e, ...t };
    }
  }
  class Gp extends Hl {
    clone() {
      return new Gp(null, { ...this.filter });
    }
    constructor(e, t) {
      super(e), (this.filter = t);
    }
    static make(e, t) {
      const { config: n, mark: i, markDef: o } = t;
      if ("filter" !== Cn("invalid", o, n)) return null;
      const r = t.reduceFieldDef((e, n, o) => {
        const r = Ht(o) && t.getScaleComponent(o);
        if (r) {
          Wo(r.get("type")) &&
            "count" !== n.aggregate &&
            !hr(i) &&
            (e[n.field] = n);
        }
        return e;
      }, {});
      return C(r).length ? new Gp(e, r) : null;
    }
    dependentFields() {
      return new Set(C(this.filter));
    }
    producedFields() {
      return new Set();
    }
    hash() {
      return "FilterInvalid ".concat(h(this.filter));
    }
    assemble() {
      const e = C(this.filter).reduce((e, t) => {
        const n = this.filter[t],
          i = ka(n, { expr: "datum" });
        return (
          null !== n &&
            ("temporal" === n.type
              ? e.push(
                  "(isDate("
                    .concat(i, ") || (isValid(")
                    .concat(i, ") && isFinite(+")
                    .concat(i, ")))")
                )
              : "quantitative" === n.type &&
                (e.push("isValid(".concat(i, ")")),
                e.push("isFinite(+".concat(i, ")")))),
          e
        );
      }, []);
      return e.length > 0 ? { type: "filter", expr: e.join(" && ") } : null;
    }
  }
  class Yp extends Hl {
    clone() {
      return new Yp(this.parent, d(this.transform));
    }
    constructor(e, t) {
      super(e), (this.transform = t), (this.transform = d(t));
      const { flatten: n, as: i = [] } = this.transform;
      this.transform.as = n.map((e, t) => {
        var n;
        return null !== (n = i[t]) && void 0 !== n ? n : e;
      });
    }
    dependentFields() {
      return new Set(this.transform.flatten);
    }
    producedFields() {
      return new Set(this.transform.as);
    }
    hash() {
      return "FlattenTransform ".concat(h(this.transform));
    }
    assemble() {
      const { flatten: e, as: t } = this.transform;
      return { type: "flatten", fields: e, as: t };
    }
  }
  class Xp extends Hl {
    clone() {
      return new Xp(null, d(this.transform));
    }
    constructor(e, t) {
      var n, i, o;
      super(e), (this.transform = t), (this.transform = d(t));
      const r =
        null !== (n = this.transform.as) && void 0 !== n ? n : [void 0, void 0];
      this.transform.as = [
        null !== (i = r[0]) && void 0 !== i ? i : "key",
        null !== (o = r[1]) && void 0 !== o ? o : "value",
      ];
    }
    dependentFields() {
      return new Set(this.transform.fold);
    }
    producedFields() {
      return new Set(this.transform.as);
    }
    hash() {
      return "FoldTransform ".concat(h(this.transform));
    }
    assemble() {
      const { fold: e, as: t } = this.transform;
      return { type: "fold", fields: e, as: t };
    }
  }
  class Jp extends Hl {
    clone() {
      return new Jp(null, d(this.fields), this.geojson, this.signal);
    }
    static parseAll(e, t) {
      if (t.component.projection && !t.component.projection.isFit) return e;
      let n = 0;
      for (const i of [
        [de, ue],
        [pe, fe],
      ]) {
        const o = i.map((e) => {
          const n = Ma(t.encoding[e]);
          return ca(n)
            ? n.field
            : ua(n)
            ? { expr: "".concat(n.datum) }
            : ga(n)
            ? { expr: "".concat(n.value) }
            : void 0;
        });
        (o[0] || o[1]) &&
          (e = new Jp(e, o, null, t.getName("geojson_".concat(n++))));
      }
      if (t.channelHasField(ve)) {
        const i = t.typedFieldDef(ve);
        i.type === xo &&
          (e = new Jp(e, null, i.field, t.getName("geojson_".concat(n++))));
      }
      return e;
    }
    constructor(e, t, n, i) {
      super(e), (this.fields = t), (this.geojson = n), (this.signal = i);
    }
    dependentFields() {
      var e;
      const n = (null !== (e = this.fields) && void 0 !== e ? e : []).filter(
        t.isString
      );
      return new Set([...(this.geojson ? [this.geojson] : []), ...n]);
    }
    producedFields() {
      return new Set();
    }
    hash() {
      return "GeoJSON "
        .concat(this.geojson, " ")
        .concat(this.signal, " ")
        .concat(h(this.fields));
    }
    assemble() {
      return [
        ...(this.geojson
          ? [
              {
                type: "filter",
                expr: 'isValid(datum["'.concat(this.geojson, '"])'),
              },
            ]
          : []),
        {
          type: "geojson",
          ...(this.fields ? { fields: this.fields } : {}),
          ...(this.geojson ? { geojson: this.geojson } : {}),
          signal: this.signal,
        },
      ];
    }
  }
  class Qp extends Hl {
    clone() {
      return new Qp(null, this.projection, d(this.fields), d(this.as));
    }
    constructor(e, t, n, i) {
      super(e), (this.projection = t), (this.fields = n), (this.as = i);
    }
    static parseAll(e, t) {
      if (!t.projectionName()) return e;
      for (const n of [
        [de, ue],
        [pe, fe],
      ]) {
        const i = n.map((e) => {
            const n = Ma(t.encoding[e]);
            return ca(n)
              ? n.field
              : ua(n)
              ? { expr: "".concat(n.datum) }
              : ga(n)
              ? { expr: "".concat(n.value) }
              : void 0;
          }),
          o = n[0] === pe ? "2" : "";
        (i[0] || i[1]) &&
          (e = new Qp(e, t.projectionName(), i, [
            t.getName("x".concat(o)),
            t.getName("y".concat(o)),
          ]));
      }
      return e;
    }
    dependentFields() {
      return new Set(this.fields.filter(t.isString));
    }
    producedFields() {
      return new Set(this.as);
    }
    hash() {
      return "Geopoint "
        .concat(this.projection, " ")
        .concat(h(this.fields), " ")
        .concat(h(this.as));
    }
    assemble() {
      return {
        type: "geopoint",
        projection: this.projection,
        fields: this.fields,
        as: this.as,
      };
    }
  }
  class $p extends Hl {
    clone() {
      return new $p(null, d(this.transform));
    }
    constructor(e, t) {
      super(e), (this.transform = t);
    }
    dependentFields() {
      var e;
      return new Set([
        this.transform.impute,
        this.transform.key,
        ...(null !== (e = this.transform.groupby) && void 0 !== e ? e : []),
      ]);
    }
    producedFields() {
      return new Set([this.transform.impute]);
    }
    processSequence(e) {
      const { start: t = 0, stop: n, step: i } = e,
        o = [t, n, ...(i ? [i] : [])].join(",");
      return { signal: "sequence(".concat(o, ")") };
    }
    static makeFromTransform(e, t) {
      return new $p(e, t);
    }
    static makeFromEncoding(e, t) {
      const n = t.encoding,
        i = n.x,
        o = n.y;
      if (ca(i) && ca(o)) {
        const r = i.impute ? i : o.impute ? o : void 0;
        if (void 0 === r) return;
        const a = i.impute ? o : o.impute ? i : void 0,
          { method: s, value: c, frame: l, keyvals: u } = r.impute,
          d = ds(t.mark, n);
        return new $p(e, {
          impute: r.field,
          key: a.field,
          ...(s ? { method: s } : {}),
          ...(void 0 !== c ? { value: c } : {}),
          ...(l ? { frame: l } : {}),
          ...(void 0 !== u ? { keyvals: u } : {}),
          ...(d.length ? { groupby: d } : {}),
        });
      }
      return null;
    }
    hash() {
      return "Impute ".concat(h(this.transform));
    }
    assemble() {
      const {
          impute: e,
          key: t,
          keyvals: n,
          method: i,
          groupby: o,
          value: r,
          frame: a = [null, null],
        } = this.transform,
        s = {
          type: "impute",
          field: e,
          key: t,
          ...(n
            ? {
                keyvals:
                  ((c = n),
                  void 0 !== (null == c ? void 0 : c.stop)
                    ? this.processSequence(n)
                    : n),
              }
            : {}),
          method: "value",
          ...(o ? { groupby: o } : {}),
          value: i && "value" !== i ? null : r,
        };
      var c;
      if (i && "value" !== i) {
        return [
          s,
          {
            type: "window",
            as: ["imputed_".concat(e, "_value")],
            ops: [i],
            fields: [e],
            frame: a,
            ignorePeers: !1,
            ...(o ? { groupby: o } : {}),
          },
          {
            type: "formula",
            expr: "datum."
              .concat(e, " === null ? datum.imputed_")
              .concat(e, "_value : datum.")
              .concat(e),
            as: e,
          },
        ];
      }
      return [s];
    }
  }
  class Kp extends Hl {
    clone() {
      return new Kp(null, d(this.transform));
    }
    constructor(e, t) {
      var n, i, o;
      super(e), (this.transform = t), (this.transform = d(t));
      const r =
        null !== (n = this.transform.as) && void 0 !== n ? n : [void 0, void 0];
      this.transform.as = [
        null !== (i = r[0]) && void 0 !== i ? i : t.on,
        null !== (o = r[1]) && void 0 !== o ? o : t.loess,
      ];
    }
    dependentFields() {
      var e;
      return new Set([
        this.transform.loess,
        this.transform.on,
        ...(null !== (e = this.transform.groupby) && void 0 !== e ? e : []),
      ]);
    }
    producedFields() {
      return new Set(this.transform.as);
    }
    hash() {
      return "LoessTransform ".concat(h(this.transform));
    }
    assemble() {
      const { loess: e, on: t, ...n } = this.transform;
      return { type: "loess", x: t, y: e, ...n };
    }
  }
  class Zp extends Hl {
    clone() {
      return new Zp(null, d(this.transform), this.secondary);
    }
    constructor(e, t, n) {
      super(e), (this.transform = t), (this.secondary = n);
    }
    static make(e, t, n, i) {
      const o = t.component.data.sources,
        { from: r } = n;
      let a = null;
      if (
        (function (e) {
          return "data" in e;
        })(r)
      ) {
        let e = gm(r.data, o);
        e || ((e = new Nf(r.data)), o.push(e));
        const n = t.getName("lookup_".concat(i));
        (a = new Vl(e, n, Ll.Lookup, t.component.data.outputNodeRefCounts)),
          (t.component.data.outputNodes[n] = a);
      } else if (
        (function (e) {
          return "param" in e;
        })(r)
      ) {
        const e = r.param;
        let i;
        n = { as: e, ...n };
        try {
          i = t.getSelectionComponent(j(e), e);
        } catch (t) {
          throw new Error(
            (function (e) {
              return 'Lookups can only be performed on selection parameters. "'.concat(
                e,
                '" is a variable parameter.'
              );
            })(e)
          );
        }
        if (((a = i.materialized), !a))
          throw new Error(
            (function (e) {
              return (
                'Cannot define and lookup the "'.concat(
                  e,
                  '" selection in the same view. '
                ) + "Try moving the lookup into a second, layered view?"
              );
            })(e)
          );
      }
      return new Zp(e, n, a.getSource());
    }
    dependentFields() {
      return new Set([this.transform.lookup]);
    }
    producedFields() {
      return new Set(
        this.transform.as
          ? t.array(this.transform.as)
          : this.transform.from.fields
      );
    }
    hash() {
      return "Lookup ".concat(
        h({ transform: this.transform, secondary: this.secondary })
      );
    }
    assemble() {
      let e;
      if (this.transform.from.fields)
        e = {
          values: this.transform.from.fields,
          ...(this.transform.as ? { as: t.array(this.transform.as) } : {}),
        };
      else {
        let n = this.transform.as;
        t.isString(n) ||
          (ji(
            'If "from.fields" is not specified, "as" has to be a string that specifies the key to be used for the data from the secondary source.'
          ),
          (n = "_lookup")),
          (e = { as: [n] });
      }
      return {
        type: "lookup",
        from: this.secondary,
        key: this.transform.from.key,
        fields: [this.transform.lookup],
        ...e,
        ...(this.transform.default ? { default: this.transform.default } : {}),
      };
    }
  }
  class em extends Hl {
    clone() {
      return new em(null, d(this.transform));
    }
    constructor(e, t) {
      var n, i, o;
      super(e), (this.transform = t), (this.transform = d(t));
      const r =
        null !== (n = this.transform.as) && void 0 !== n ? n : [void 0, void 0];
      this.transform.as = [
        null !== (i = r[0]) && void 0 !== i ? i : "prob",
        null !== (o = r[1]) && void 0 !== o ? o : "value",
      ];
    }
    dependentFields() {
      var e;
      return new Set([
        this.transform.quantile,
        ...(null !== (e = this.transform.groupby) && void 0 !== e ? e : []),
      ]);
    }
    producedFields() {
      return new Set(this.transform.as);
    }
    hash() {
      return "QuantileTransform ".concat(h(this.transform));
    }
    assemble() {
      const { quantile: e, ...t } = this.transform;
      return { type: "quantile", field: e, ...t };
    }
  }
  class tm extends Hl {
    clone() {
      return new tm(null, d(this.transform));
    }
    constructor(e, t) {
      var n, i, o;
      super(e), (this.transform = t), (this.transform = d(t));
      const r =
        null !== (n = this.transform.as) && void 0 !== n ? n : [void 0, void 0];
      this.transform.as = [
        null !== (i = r[0]) && void 0 !== i ? i : t.on,
        null !== (o = r[1]) && void 0 !== o ? o : t.regression,
      ];
    }
    dependentFields() {
      var e;
      return new Set([
        this.transform.regression,
        this.transform.on,
        ...(null !== (e = this.transform.groupby) && void 0 !== e ? e : []),
      ]);
    }
    producedFields() {
      return new Set(this.transform.as);
    }
    hash() {
      return "RegressionTransform ".concat(h(this.transform));
    }
    assemble() {
      const { regression: e, on: t, ...n } = this.transform;
      return { type: "regression", x: t, y: e, ...n };
    }
  }
  class nm extends Hl {
    clone() {
      return new nm(null, d(this.transform));
    }
    constructor(e, t) {
      super(e), (this.transform = t);
    }
    addDimensions(e) {
      var t;
      this.transform.groupby = S(
        (null !== (t = this.transform.groupby) && void 0 !== t ? t : []).concat(
          e
        ),
        (e) => e
      );
    }
    producedFields() {}
    dependentFields() {
      var e;
      return new Set([
        this.transform.pivot,
        this.transform.value,
        ...(null !== (e = this.transform.groupby) && void 0 !== e ? e : []),
      ]);
    }
    hash() {
      return "PivotTransform ".concat(h(this.transform));
    }
    assemble() {
      const {
        pivot: e,
        value: t,
        groupby: n,
        limit: i,
        op: o,
      } = this.transform;
      return {
        type: "pivot",
        field: e,
        value: t,
        ...(void 0 !== i ? { limit: i } : {}),
        ...(void 0 !== o ? { op: o } : {}),
        ...(void 0 !== n ? { groupby: n } : {}),
      };
    }
  }
  class im extends Hl {
    clone() {
      return new im(null, d(this.transform));
    }
    constructor(e, t) {
      super(e), (this.transform = t);
    }
    dependentFields() {
      return new Set();
    }
    producedFields() {
      return new Set();
    }
    hash() {
      return "SampleTransform ".concat(h(this.transform));
    }
    assemble() {
      return { type: "sample", size: this.transform.sample };
    }
  }
  function om(e) {
    let t = 0;
    return function n(i, o) {
      if (i instanceof Nf && !i.isGenerator && !Pl(i.data)) {
        e.push(o);
        o = { name: null, source: o.name, transform: [] };
      }
      var r;
      if (
        (i instanceof zf &&
          (i.parent instanceof Nf && !o.source
            ? ((o.format = {
                ...(null !== (r = o.format) && void 0 !== r ? r : {}),
                parse: i.assembleFormatParse(),
              }),
              o.transform.push(...i.assembleTransforms(!0)))
            : o.transform.push(...i.assembleTransforms())),
        i instanceof Df)
      )
        return (
          o.name || (o.name = "data_".concat(t++)),
          !o.source || o.transform.length > 0
            ? (e.push(o), (i.data = o.name))
            : (i.data = o.source),
          void e.push(...i.assemble())
        );
      if (
        ((i instanceof Pf ||
          i instanceof Af ||
          i instanceof Gp ||
          i instanceof sd ||
          i instanceof Sd ||
          i instanceof Qp ||
          i instanceof Sf ||
          i instanceof Zp ||
          i instanceof $f ||
          i instanceof Jf ||
          i instanceof Xp ||
          i instanceof Yp ||
          i instanceof Ip ||
          i instanceof Kp ||
          i instanceof em ||
          i instanceof tm ||
          i instanceof Cf ||
          i instanceof im ||
          i instanceof nm) &&
          o.transform.push(i.assemble()),
        (i instanceof wf ||
          i instanceof Il ||
          i instanceof $p ||
          i instanceof Qf ||
          i instanceof Jp) &&
          o.transform.push(...i.assemble()),
        i instanceof Vl)
      )
        if (o.source && 0 === o.transform.length) i.setSource(o.source);
        else if (i.parent instanceof Vl) i.setSource(o.name);
        else if (
          (o.name || (o.name = "data_".concat(t++)),
          i.setSource(o.name),
          1 === i.numChildren())
        ) {
          e.push(o);
          o = { name: null, source: o.name, transform: [] };
        }
      switch (i.numChildren()) {
        case 0:
          i instanceof Vl && (!o.source || o.transform.length > 0) && e.push(o);
          break;
        case 1:
          n(i.children[0], o);
          break;
        default: {
          o.name || (o.name = "data_".concat(t++));
          let r = o.name;
          !o.source || o.transform.length > 0 ? e.push(o) : (r = o.source);
          for (const e of i.children) {
            n(e, { name: null, source: r, transform: [] });
          }
          break;
        }
      }
    };
  }
  function rm(e, t) {
    const n = [],
      i = om(n);
    let o = 0;
    for (const t of e.sources) {
      t.hasName() || (t.dataName = "source_".concat(o++));
      const e = t.assemble();
      i(t, e);
    }
    for (const e of n) 0 === e.transform.length && delete e.transform;
    let r = 0;
    for (const [e, t] of n.entries()) {
      var a;
      0 !== (null !== (a = t.transform) && void 0 !== a ? a : []).length ||
        t.source ||
        n.splice(r++, 0, n.splice(e, 1)[0]);
    }
    for (const t of n)
      for (const n of null !== (s = t.transform) && void 0 !== s ? s : []) {
        var s;
        "lookup" === n.type && (n.from = e.outputNodes[n.from].getSource());
      }
    for (const e of n) e.name in t && (e.values = t[e.name]);
    return n;
  }
  function am(e) {
    return "top" === e || "left" === e || gn(e) ? "header" : "footer";
  }
  function sm(e, n) {
    const { facet: i, config: o, child: r, component: a } = e;
    if (e.channelHasField(n)) {
      var s;
      const c = i[n],
        l = Od("title", null, o, n);
      let u = Ca(c, o, {
        allowDisabling: !0,
        includeDefault: void 0 === l || !!l,
      });
      r.component.layoutHeaders[n].title &&
        ((u = t.isArray(u) ? u.join(", ") : u),
        (u += " / ".concat(r.component.layoutHeaders[n].title)),
        (r.component.layoutHeaders[n].title = null));
      const d = Od("labelOrient", c.header, o, n),
        f =
          null !== c.header &&
          V(
            null === (s = c.header) || void 0 === s ? void 0 : s.labels,
            o.header.labels,
            !0
          ),
        p = y(["bottom", "right"], d) ? "footer" : "header";
      a.layoutHeaders[n] = {
        title: null !== c.header ? u : null,
        facetFieldDef: c,
        [p]: "facet" === n ? [] : [cm(e, n, f)],
      };
    }
  }
  function cm(e, t, n) {
    const i = "row" === t ? "height" : "width";
    return {
      labels: n,
      sizeSignal: e.child.component.layoutSize.get(i)
        ? e.child.getSizeSignalRef(i)
        : void 0,
      axes: [],
    };
  }
  function lm(e, t) {
    const { child: n } = e;
    if (n.component.axes[t]) {
      const { layoutHeaders: o, resolve: r } = e.component;
      if (((r.axis[t] = Yd(r, t)), "shared" === r.axis[t])) {
        const r = "x" === t ? "column" : "row",
          a = o[r];
        for (const o of n.component.axes[t]) {
          var i;
          const t = am(o.get("orient"));
          (null !== (i = a[t]) && void 0 !== i) || (a[t] = [cm(e, r, !1)]);
          const n = pd(o, "main", e.config, { header: !0 });
          n && a[t][0].axes.push(n), (o.mainExtracted = !0);
        }
      }
    }
  }
  function um(e) {
    for (const t of e.children) t.parseLayoutSize();
  }
  function dm(e, t) {
    const n = Vd(t),
      i = zt(n),
      o = e.component.resolve,
      r = e.component.layoutSize;
    let a;
    for (const t of e.children) {
      var s;
      const r = t.component.layoutSize.getWithExplicit(n),
        c = null !== (s = o.scale[i]) && void 0 !== s ? s : Gd(i, e);
      if ("independent" === c && "step" === r.value) {
        a = void 0;
        break;
      }
      if (a) {
        if ("independent" === c && a.value !== r.value) {
          a = void 0;
          break;
        }
        a = zl(a, r, n, "");
      } else a = r;
    }
    if (a) {
      for (const i of e.children)
        e.renameSignal(i.getName(n), e.getName(t)),
          i.component.layoutSize.set(n, "merged", !1);
      r.setWithExplicit(t, a);
    } else r.setWithExplicit(t, { explicit: !1, value: void 0 });
  }
  function fm(e, t) {
    const n = "width" === t ? "x" : "y",
      i = e.config,
      o = e.getScaleComponent(n);
    if (o) {
      const e = o.get("type"),
        n = o.get("range");
      if (qo(e)) {
        const e = rc(i.view, t);
        return hn(n) || ec(e) ? "step" : e;
      }
      return ic(i.view, t);
    }
    if (e.hasProjection || "arc" === e.mark) return ic(i.view, t);
    {
      const e = rc(i.view, t);
      return ec(e) ? e.step : e;
    }
  }
  function pm(e, t, n) {
    return ka(t, { suffix: "by_".concat(ka(e)), ...(null != n ? n : {}) });
  }
  class mm extends Vp {
    constructor(e, t, n, i) {
      super(e, "facet", t, n, i, e.resolve),
        Ln(this, "facet", void 0),
        Ln(this, "child", void 0),
        Ln(this, "children", void 0),
        (this.child = Gm(e.spec, this, this.getName("child"), void 0, i)),
        (this.children = [this.child]),
        (this.facet = this.initFacet(e.facet));
    }
    initFacet(e) {
      if (!$r(e)) return { facet: this.initFacetFieldDef(e, "facet") };
      const t = C(e),
        n = {};
      for (const i of t) {
        if (![$, K].includes(i)) {
          ji(ci(i, "facet"));
          break;
        }
        const t = e[i];
        if (void 0 === t.field) {
          ji(si(t, i));
          break;
        }
        n[i] = this.initFacetFieldDef(t, i);
      }
      return n;
    }
    initFacetFieldDef(e, t) {
      const n = qa(e, t);
      return (
        n.header
          ? (n.header = fn(n.header))
          : null === n.header && (n.header = null),
        n
      );
    }
    channelHasField(e) {
      return !!this.facet[e];
    }
    fieldDef(e) {
      return this.facet[e];
    }
    parseData() {
      (this.component.data = hm(this)), this.child.parseData();
    }
    parseLayoutSize() {
      um(this);
    }
    parseSelections() {
      this.child.parseSelections(),
        (this.component.selection = this.child.component.selection);
    }
    parseMarkGroup() {
      this.child.parseMarkGroup();
    }
    parseAxesAndHeaders() {
      this.child.parseAxesAndHeaders(),
        (function (e) {
          for (const t of Re) sm(e, t);
          lm(e, "x"), lm(e, "y");
        })(this);
    }
    assembleSelectionTopLevelSignals(e) {
      return this.child.assembleSelectionTopLevelSignals(e);
    }
    assembleSignals() {
      return this.child.assembleSignals(), [];
    }
    assembleSelectionData(e) {
      return this.child.assembleSelectionData(e);
    }
    getHeaderLayoutMixins() {
      const e = {};
      for (const o of Re)
        for (const r of Cd) {
          const a = this.component.layoutHeaders[o],
            s = a[r],
            { facetFieldDef: c } = a;
          if (c) {
            const n = Od("titleOrient", c.header, this.config, o);
            if (["right", "bottom"].includes(n)) {
              var t;
              const i = Fd(o, n);
              (null !== (t = e.titleAnchor) && void 0 !== t) ||
                (e.titleAnchor = {}),
                (e.titleAnchor[i] = "end");
            }
          }
          if (null != s && s[0]) {
            const t = "row" === o ? "height" : "width",
              s = "header" === r ? "headerBand" : "footerBand";
            var n, i;
            if ("facet" !== o && !this.child.component.layoutSize.get(t))
              (null !== (n = e[s]) && void 0 !== n) || (e[s] = {}),
                (e[s][o] = 0.5);
            if (a.title)
              (null !== (i = e.offset) && void 0 !== i) || (e.offset = {}),
                (e.offset["row" === o ? "rowTitle" : "columnTitle"] = 10);
          }
        }
      return e;
    }
    assembleDefaultLayout() {
      const { column: e, row: t } = this.facet,
        n = e ? this.columnDistinctSignal() : t ? 1 : void 0;
      let i = "all";
      return (
        ((t || "independent" !== this.component.resolve.scale.x) &&
          (e || "independent" !== this.component.resolve.scale.y)) ||
          (i = "none"),
        {
          ...this.getHeaderLayoutMixins(),
          ...(n ? { columns: n } : {}),
          bounds: "full",
          align: i,
        }
      );
    }
    assembleLayoutSignals() {
      return this.child.assembleLayoutSignals();
    }
    columnDistinctSignal() {
      if (!(this.parent && this.parent instanceof mm)) {
        const e = this.getName("column_domain");
        return { signal: "length(data('".concat(e, "'))") };
      }
    }
    assembleGroupStyle() {}
    assembleGroup(e) {
      return this.parent && this.parent instanceof mm
        ? {
            ...(this.channelHasField("column")
              ? {
                  encode: {
                    update: {
                      columns: {
                        field: ka(this.facet.column, { prefix: "distinct" }),
                      },
                    },
                  },
                }
              : {}),
            ...super.assembleGroup(e),
          }
        : super.assembleGroup(e);
    }
    getCardinalityAggregateForChild() {
      const e = [],
        t = [],
        n = [];
      if (this.child instanceof mm) {
        if (this.child.channelHasField("column")) {
          const i = ka(this.child.facet.column);
          e.push(i), t.push("distinct"), n.push("distinct_".concat(i));
        }
      } else
        for (const i of Dt) {
          const o = this.child.component.scales[i];
          if (o && !o.merged) {
            const r = o.get("type"),
              a = o.get("range");
            if (qo(r) && hn(a)) {
              const o = gp(hp(this.child, i));
              o
                ? (e.push(o), t.push("distinct"), n.push("distinct_".concat(o)))
                : ji(Gn(i));
            }
          }
        }
      return { fields: e, ops: t, as: n };
    }
    assembleFacet() {
      const { name: e, data: n } = this.component.data.facetRoot,
        { row: i, column: o } = this.facet,
        { fields: r, ops: a, as: s } = this.getCardinalityAggregateForChild(),
        c = [];
      for (const e of Re) {
        const n = this.facet[e];
        if (n) {
          c.push(ka(n));
          const { bin: l, sort: u } = n;
          if ((an(l) && c.push(ka(n, { binSuffix: "end" })), Jr(u))) {
            const { field: e, op: t = Ir } = u,
              c = pm(n, u);
            i && o
              ? (r.push(c), a.push("max"), s.push(c))
              : (r.push(e), a.push(t), s.push(c));
          } else if (t.isArray(u)) {
            const t = Dd(n, e);
            r.push(t), a.push("max"), s.push(t);
          }
        }
      }
      const l = !!i && !!o;
      return {
        name: e,
        data: n,
        groupby: c,
        ...(l || r.length > 0
          ? {
              aggregate: {
                ...(l ? { cross: l } : {}),
                ...(r.length ? { fields: r, ops: a, as: s } : {}),
              },
            }
          : {}),
      };
    }
    facetSortFields(e) {
      const { facet: n } = this,
        i = n[e];
      return i
        ? Jr(i.sort)
          ? [pm(i, i.sort, { expr: "datum" })]
          : t.isArray(i.sort)
          ? [Dd(i, e, { expr: "datum" })]
          : [ka(i, { expr: "datum" })]
        : [];
    }
    facetSortOrder(e) {
      const { facet: n } = this,
        i = n[e];
      if (i) {
        const { sort: e } = i;
        return [(Jr(e) ? e.order : !t.isArray(e) && e) || "ascending"];
      }
      return [];
    }
    assembleLabelTitle() {
      const { facet: e, config: t } = this;
      if (e.facet) return Md(e.facet, "facet", t);
      const n = { row: ["top", "bottom"], column: ["left", "right"] };
      for (const o of zd)
        if (e[o]) {
          var i;
          const r = Od(
            "labelOrient",
            null === (i = e[o]) || void 0 === i ? void 0 : i.header,
            t,
            o
          );
          if (n[o].includes(r)) return Md(e[o], o, t);
        }
    }
    assembleMarks() {
      const { child: e } = this,
        t = (function (e) {
          const t = [],
            n = om(t);
          for (const t of e.children)
            n(t, { source: e.name, name: null, transform: [] });
          return t;
        })(this.component.data.facetRoot),
        n = e.assembleGroupEncodeEntry(!1),
        i = this.assembleLabelTitle() || e.assembleTitle(),
        o = e.assembleGroupStyle();
      return [
        {
          name: this.getName("cell"),
          type: "group",
          ...(i ? { title: i } : {}),
          ...(o ? { style: o } : {}),
          from: { facet: this.assembleFacet() },
          sort: {
            field: Re.map((e) => this.facetSortFields(e)).flat(),
            order: Re.map((e) => this.facetSortOrder(e)).flat(),
          },
          ...(t.length > 0 ? { data: t } : {}),
          ...(n ? { encode: { update: n } } : {}),
          ...e.assembleGroup(Rl(this, [])),
        },
      ];
    }
    getMapping() {
      return this.facet;
    }
  }
  function gm(e, t) {
    for (const a of t) {
      var n, i, o, r;
      const t = a.data;
      if (e.name && a.hasName() && e.name !== a.dataName) continue;
      const s = null === (n = e.format) || void 0 === n ? void 0 : n.mesh,
        c = null === (i = t.format) || void 0 === i ? void 0 : i.feature;
      if (s && c) continue;
      const l = null === (o = e.format) || void 0 === o ? void 0 : o.feature;
      if ((l || c) && l !== c) continue;
      const d = null === (r = t.format) || void 0 === r ? void 0 : r.mesh;
      if ((!s && !d) || s === d)
        if (Al(e) && Al(t)) {
          if (u(e.values, t.values)) return a;
        } else if (Pl(e) && Pl(t)) {
          if (e.url === t.url) return a;
        } else if (Nl(e) && e.name === a.dataName) return a;
    }
    return null;
  }
  function hm(e) {
    var t, n, i;
    let o = (function (e, t) {
      if (e.data || !e.parent) {
        if (null === e.data) {
          const e = new Nf({ values: [] });
          return t.push(e), e;
        }
        const n = gm(e.data, t);
        if (n)
          return (
            jl(e.data) || (n.data.format = w({}, e.data.format, n.data.format)),
            !n.hasName() && e.data.name && (n.dataName = e.data.name),
            n
          );
        {
          const n = new Nf(e.data);
          return t.push(n), n;
        }
      }
      return e.parent.component.data.facetRoot
        ? e.parent.component.data.facetRoot
        : e.parent.component.data.main;
    })(e, e.component.data.sources);
    const { outputNodes: r, outputNodeRefCounts: a } = e.component.data,
      s = e.data,
      c =
        !(s && (jl(s) || Pl(s) || Al(s))) && e.parent
          ? e.parent.component.data.ancestorParse.clone()
          : new Cl();
    jl(s)
      ? (El(s)
          ? (o = new Af(o, s.sequence))
          : Tl(s) && (o = new Pf(o, s.graticule)),
        (c.parseNothing = !0))
      : null ===
          (null == s || null === (t = s.format) || void 0 === t
            ? void 0
            : t.parse) && (c.parseNothing = !0),
      (o = null !== (n = zf.makeExplicit(o, e, c)) && void 0 !== n ? n : o),
      (o = new Cf(o));
    const l = e.parent && Bp(e.parent);
    var u;
    (Wp(e) || Rp(e)) &&
      l &&
      (o = null !== (u = wf.makeFromEncoding(o, e)) && void 0 !== u ? u : o);
    e.transforms.length > 0 &&
      (o = (function (e, t, n) {
        let i = 0;
        for (const a of t.transforms) {
          let s, c;
          if (rl(a)) (c = e = new Sd(e, a)), (s = "derived");
          else if (Xc(a)) {
            var o;
            const i = Of(a);
            (c = e =
              null !== (o = zf.makeWithAncestors(e, {}, i, n)) && void 0 !== o
                ? o
                : e),
              (e = new sd(e, t, a.filter));
          } else if (al(a))
            (c = e = wf.makeFromTransform(e, a, t)), (s = "number");
          else if (cl(a))
            (s = "date"),
              void 0 === n.getWithExplicit(a.field).value &&
                ((e = new zf(e, { [a.field]: s })), n.set(a.field, s, !1)),
              (c = e = Il.makeFromTransform(e, a));
          else if (ll(a))
            (c = e = Sf.makeFromTransform(e, a)),
              (s = "number"),
              nd(t) && (e = new Cf(e));
          else if (Jc(a)) (c = e = Zp.make(e, t, a, i++)), (s = "derived");
          else if (nl(a)) (c = e = new $f(e, a)), (s = "number");
          else if (il(a)) (c = e = new Jf(e, a)), (s = "number");
          else if (ul(a)) (c = e = Qf.makeFromTransform(e, a)), (s = "derived");
          else if (dl(a)) (c = e = new Xp(e, a)), (s = "derived");
          else if (ol(a)) (c = e = new Yp(e, a)), (s = "derived");
          else if (Qc(a)) (c = e = new nm(e, a)), (s = "derived");
          else if (tl(a)) e = new im(e, a);
          else if (sl(a)) (c = e = $p.makeFromTransform(e, a)), (s = "derived");
          else if ($c(a)) (c = e = new Ip(e, a)), (s = "derived");
          else if (Kc(a)) (c = e = new em(e, a)), (s = "derived");
          else if (Zc(a)) (c = e = new tm(e, a)), (s = "derived");
          else {
            if (!el(a)) {
              ji("Ignoring an invalid transform: ".concat(g(a), "."));
              continue;
            }
            (c = e = new Kp(e, a)), (s = "derived");
          }
          if (c && void 0 !== s)
            for (const e of null !== (r = c.producedFields()) && void 0 !== r
              ? r
              : []) {
              var r;
              n.set(e, s, !1);
            }
        }
        return e;
      })(o, e, c));
    const d = (function (e) {
        const t = {};
        if (Wp(e) && e.component.selection)
          for (const n of C(e.component.selection)) {
            const i = e.component.selection[n];
            for (const e of i.project.items)
              !e.channel && H(e.field) > 1 && (t[e.field] = "flatten");
          }
        return t;
      })(e),
      f = _f(e);
    if (
      ((o =
        null !== (i = zf.makeWithAncestors(o, {}, { ...d, ...f }, c)) &&
        void 0 !== i
          ? i
          : o),
      Wp(e) && ((o = Jp.parseAll(o, e)), (o = Qp.parseAll(o, e))),
      Wp(e) || Rp(e))
    ) {
      var p, m;
      if (!l)
        o = null !== (m = wf.makeFromEncoding(o, e)) && void 0 !== m ? m : o;
      (o = null !== (p = Il.makeFromEncoding(o, e)) && void 0 !== p ? p : o),
        (o = Sd.parseAllForSortIndex(o, e));
    }
    const h = e.getDataName(Ll.Raw),
      v = new Vl(o, h, Ll.Raw, a);
    if (((r[h] = v), (o = v), Wp(e))) {
      var y, b;
      const t = Sf.makeFromEncoding(o, e);
      t && ((o = t), nd(e) && (o = new Cf(o))),
        (o = null !== (y = $p.makeFromEncoding(o, e)) && void 0 !== y ? y : o),
        (o = null !== (b = Qf.makeFromEncoding(o, e)) && void 0 !== b ? b : o);
    }
    var x;
    Wp(e) && (o = null !== (x = Gp.make(o, e)) && void 0 !== x ? x : o);
    const k = e.getDataName(Ll.Main),
      S = new Vl(o, k, Ll.Main, a);
    (r[k] = S),
      (o = S),
      Wp(e) &&
        (function (e, t) {
          for (const [i, o] of A(
            null !== (n = e.component.selection) && void 0 !== n ? n : {}
          )) {
            var n;
            const r = e.getName("lookup_".concat(i));
            e.component.data.outputNodes[r] = o.materialized = new Vl(
              new sd(t, e, { param: i }),
              r,
              Ll.Lookup,
              e.component.data.outputNodeRefCounts
            );
          }
        })(e, S);
    let D = null;
    if (Rp(e)) {
      var F;
      const t = e.getName("facet");
      (o =
        null !==
          (F = (function (e, t) {
            const { row: n, column: i } = t;
            if (n && i) {
              let t = null;
              for (const o of [n, i])
                if (Jr(o.sort)) {
                  const { field: n, op: i = Ir } = o.sort;
                  e = t = new Jf(e, {
                    joinaggregate: [
                      { op: i, field: n, as: pm(o, o.sort, { forAs: !0 }) },
                    ],
                    groupby: [ka(o)],
                  });
                }
              return t;
            }
            return null;
          })(o, e.facet)) && void 0 !== F
          ? F
          : o),
        (D = new Df(o, e, t, S.getSource())),
        (r[t] = D);
    }
    return {
      ...e.component.data,
      outputNodes: r,
      outputNodeRefCounts: a,
      raw: v,
      main: S,
      facetRoot: D,
      ancestorParse: c,
    };
  }
  class vm extends Hp {
    constructor(e, t, n, i) {
      var o, r, a, s;
      super(e, "concat", t, n, i, e.resolve),
        Ln(this, "children", void 0),
        ("shared" !==
          (null === (o = e.resolve) ||
          void 0 === o ||
          null === (r = o.axis) ||
          void 0 === r
            ? void 0
            : r.x) &&
          "shared" !==
            (null === (a = e.resolve) ||
            void 0 === a ||
            null === (s = a.axis) ||
            void 0 === s
              ? void 0
              : s.y)) ||
          ji(
            "Axes cannot be shared in concatenated or repeated views yet (https://github.com/vega/vega-lite/issues/2415)."
          ),
        (this.children = this.getChildren(e).map((e, t) =>
          Gm(e, this, this.getName("concat_".concat(t)), void 0, i)
        ));
    }
    parseData() {
      this.component.data = hm(this);
      for (const e of this.children) e.parseData();
    }
    parseSelections() {
      this.component.selection = {};
      for (const e of this.children) {
        e.parseSelections();
        for (const t of C(e.component.selection))
          this.component.selection[t] = e.component.selection[t];
      }
    }
    parseMarkGroup() {
      for (const e of this.children) e.parseMarkGroup();
    }
    parseAxesAndHeaders() {
      for (const e of this.children) e.parseAxesAndHeaders();
    }
    getChildren(e) {
      return Js(e) ? e.vconcat : Qs(e) ? e.hconcat : e.concat;
    }
    parseLayoutSize() {
      !(function (e) {
        um(e);
        const t = 1 === e.layout.columns ? "width" : "childWidth",
          n = void 0 === e.layout.columns ? "height" : "childHeight";
        dm(e, t), dm(e, n);
      })(this);
    }
    parseAxisGroup() {
      return null;
    }
    assembleSelectionTopLevelSignals(e) {
      return this.children.reduce(
        (e, t) => t.assembleSelectionTopLevelSignals(e),
        e
      );
    }
    assembleSignals() {
      return this.children.forEach((e) => e.assembleSignals()), [];
    }
    assembleLayoutSignals() {
      const e = Rd(this);
      for (const t of this.children) e.push(...t.assembleLayoutSignals());
      return e;
    }
    assembleSelectionData(e) {
      return this.children.reduce((e, t) => t.assembleSelectionData(e), e);
    }
    assembleMarks() {
      return this.children.map((e) => {
        const t = e.assembleTitle(),
          n = e.assembleGroupStyle(),
          i = e.assembleGroupEncodeEntry(!1);
        return {
          type: "group",
          name: e.getName("group"),
          ...(t ? { title: t } : {}),
          ...(n ? { style: n } : {}),
          ...(i ? { encode: { update: i } } : {}),
          ...e.assembleGroup(),
        };
      });
    }
    assembleGroupStyle() {}
    assembleDefaultLayout() {
      const e = this.layout.columns;
      return {
        ...(null != e ? { columns: e } : {}),
        bounds: "full",
        align: "each",
      };
    }
  }
  const ym = {
      disable: 1,
      gridScale: 1,
      scale: 1,
      ...Qa,
      labelExpr: 1,
      encode: 1,
    },
    bm = C(ym);
  class xm extends Sl {
    constructor() {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      super(),
        (this.explicit = e),
        (this.implicit = t),
        (this.mainExtracted = n);
    }
    clone() {
      return new xm(d(this.explicit), d(this.implicit), this.mainExtracted);
    }
    hasAxisPart(e) {
      return (
        "axis" === e ||
        ("grid" === e || "title" === e
          ? !!this.get(e)
          : !(!1 === (t = this.get(e)) || null === t))
      );
      var t;
    }
    hasOrientSignalRef() {
      return gn(this.explicit.orient);
    }
  }
  const wm = { bottom: "top", top: "bottom", left: "right", right: "left" };
  function km(e, t) {
    if (!e) return t.map((e) => e.clone());
    {
      if (e.length !== t.length) return;
      const n = e.length;
      for (let i = 0; i < n; i++) {
        const n = e[i],
          o = t[i];
        if (!!n != !!o) return;
        if (n && o) {
          const t = n.getWithExplicit("orient"),
            r = o.getWithExplicit("orient");
          if (t.explicit && r.explicit && t.value !== r.value) return;
          e[i] = Sm(n, o);
        }
      }
    }
    return e;
  }
  function Sm(e, t) {
    for (const n of bm) {
      const i = zl(
        e.getWithExplicit(n),
        t.getWithExplicit(n),
        n,
        "axis",
        (e, t) => {
          switch (n) {
            case "title":
              return Tn(e, t);
            case "gridScale":
              return { explicit: e.explicit, value: V(e.value, t.value) };
          }
          return _l(e, t, n, "axis");
        }
      );
      e.setWithExplicit(n, i);
    }
    return e;
  }
  function Dm(e, t, n, i, o) {
    if ("disable" === t) return void 0 !== n;
    switch (((n = n || {}), t)) {
      case "titleAngle":
      case "labelAngle":
        return e === (gn(n.labelAngle) ? n.labelAngle : J(n.labelAngle));
      case "values":
        return !!n.values;
      case "encode":
        return !!n.encoding || !!n.labelAngle;
      case "title":
        if (e === kd(i, o)) return !0;
    }
    return e === n[t];
  }
  const Fm = new Set([
    "grid",
    "translate",
    "format",
    "formatType",
    "orient",
    "labelExpr",
    "tickCount",
    "position",
    "tickMinStep",
  ]);
  function Om(e, t) {
    var n, i, o, r, a;
    let s = t.axis(e);
    const c = new xm(),
      l = Ma(t.encoding[e]),
      { mark: u, config: d } = t,
      f =
        (null === (n = s) || void 0 === n ? void 0 : n.orient) ||
        (null === (i = d["x" === e ? "axisX" : "axisY"]) || void 0 === i
          ? void 0
          : i.orient) ||
        (null === (o = d.axis) || void 0 === o ? void 0 : o.orient) ||
        (function (e) {
          return "x" === e ? "bottom" : "left";
        })(e),
      p = t.getScaleComponent(e).get("type"),
      m = (function (e, t, n, i) {
        const o =
            "band" === t
              ? ["axisDiscrete", "axisBand"]
              : "point" === t
              ? ["axisDiscrete", "axisPoint"]
              : Eo(t)
              ? ["axisQuantitative"]
              : "time" === t || "utc" === t
              ? ["axisTemporal"]
              : [],
          r = "x" === e ? "axisX" : "axisY",
          a = gn(n) ? "axisOrient" : "axis".concat(T(n)),
          s = [...o, ...o.map((e) => r + e.substr(4))],
          c = ["axis", a, r];
        return {
          vlOnlyAxisConfig: gd(s, i, e, n),
          vgAxisConfig: gd(c, i, e, n),
          axisConfigStyle: hd([...c, ...s], i),
        };
      })(e, p, f, t.config),
      g =
        void 0 !== s
          ? !s
          : vd(
              "disable",
              d.style,
              null === (r = s) || void 0 === r ? void 0 : r.style,
              m
            ).configValue;
    if ((c.set("disable", g, void 0 !== s), g)) return c;
    s = s || {};
    const h = (function (e, t, n, i, o) {
        const r = null == t ? void 0 : t.labelAngle;
        if (void 0 !== r) return gn(r) ? r : J(r);
        {
          const { configValue: r } = vd(
            "labelAngle",
            i,
            null == t ? void 0 : t.style,
            o
          );
          return void 0 !== r
            ? J(r)
            : n !== ee || !y([bo, vo], e.type) || (ca(e) && e.timeUnit)
            ? void 0
            : 270;
        }
      })(l, s, e, d.style, m),
      v = {
        fieldOrDatumDef: l,
        axis: s,
        channel: e,
        model: t,
        scaleType: p,
        orient: f,
        labelAngle: h,
        mark: u,
        config: d,
      };
    for (const n of bm) {
      const i = n in yd ? yd[n](v) : Ka(n) ? s[n] : void 0,
        o = void 0 !== i,
        r = Dm(i, n, s, t, e);
      if (o && r) c.set(n, i, r);
      else {
        const { configValue: e, configFrom: t } =
            Ka(n) && "values" !== n ? vd(n, d.style, s.style, m) : {},
          a = void 0 !== e;
        o && !a
          ? c.set(n, i, r)
          : ("vgAxisConfig" !== t || (Fm.has(n) && a) || Ya(e) || gn(e)) &&
            c.set(n, e, !1);
      }
    }
    const b = null !== (a = s.encoding) && void 0 !== a ? a : {},
      x = Xa.reduce((n, i) => {
        var o;
        if (!c.hasAxisPart(i)) return n;
        const r = Id(null !== (o = b[i]) && void 0 !== o ? o : {}, t),
          a =
            "labels" === i
              ? (function (e, t, n) {
                  var i;
                  const { encoding: o, config: r } = e,
                    a =
                      null !== (i = Ma(o[t])) && void 0 !== i
                        ? i
                        : Ma(o[nt(t)]),
                    s = e.axis(t) || {},
                    { format: c, formatType: l } = s;
                  return Er(l)
                    ? {
                        text: qr({
                          fieldOrDatumDef: a,
                          field: "datum.value",
                          format: c,
                          formatType: l,
                          config: r,
                        }),
                        ...n,
                      }
                    : n;
                })(t, e, r)
              : r;
        return void 0 === a || z(a) || (n[i] = { update: a }), n;
      }, {});
    return (
      z(x) || c.set("encode", x, !!s.encoding || void 0 !== s.labelAngle), c
    );
  }
  function _m(e, t, n) {
    const i = fn(e),
      o = Cn("orient", i, n);
    var r, a;
    if (
      ((i.orient = (function (e, t, n) {
        switch (e) {
          case sr:
          case pr:
          case mr:
          case ur:
          case cr:
          case rr:
            return;
        }
        const { x: i, y: o, x2: r, y2: a } = t;
        switch (e) {
          case or:
            if (ca(i) && (sn(i.bin) || (ca(o) && o.aggregate && !i.aggregate)))
              return "vertical";
            if (ca(o) && (sn(o.bin) || (ca(i) && i.aggregate && !o.aggregate)))
              return "horizontal";
            if (a || r) {
              if (n) return n;
              if (!r && ((ca(i) && i.type === ho && !an(i.bin)) || fa(i)))
                return "horizontal";
              if (!a && ((ca(o) && o.type === ho && !an(o.bin)) || fa(o)))
                return "vertical";
            }
          case lr:
            if (r && (!ca(i) || !sn(i.bin)) && a && (!ca(o) || !sn(o.bin)))
              return;
          case ir:
            if (a) return ca(o) && sn(o.bin) ? "horizontal" : "vertical";
            if (r) return ca(i) && sn(i.bin) ? "vertical" : "horizontal";
            if (e === lr) {
              if (i && !o) return "vertical";
              if (o && !i) return "horizontal";
            }
          case ar:
          case dr: {
            const t = da(i),
              r = da(o);
            if (n) return n;
            if (t && !r) return "tick" !== e ? "horizontal" : "vertical";
            if (!t && r) return "tick" !== e ? "vertical" : "horizontal";
            if (t && r) {
              const t = i,
                n = o,
                r = t.type === yo,
                a = n.type === yo;
              return r && !a
                ? "tick" !== e
                  ? "vertical"
                  : "horizontal"
                : !r && a
                ? "tick" !== e
                  ? "horizontal"
                  : "vertical"
                : !t.aggregate && n.aggregate
                ? "tick" !== e
                  ? "vertical"
                  : "horizontal"
                : t.aggregate && !n.aggregate && "tick" !== e
                ? "horizontal"
                : "vertical";
            }
            return;
          }
        }
        return "vertical";
      })(i.type, t, o)),
      void 0 !== o &&
        o !== i.orient &&
        ji(
          ((r = i.orient),
          (a = o),
          'Specified orient "'.concat(r, '" overridden with "').concat(a, '".'))
        ),
      "bar" === i.type && i.orient)
    ) {
      const e = Cn("cornerRadiusEnd", i, n);
      if (void 0 !== e) {
        const n =
          ("horizontal" === i.orient && t.x2) ||
          ("vertical" === i.orient && t.y2)
            ? ["cornerRadius"]
            : Dr[i.orient];
        for (const t of n) i[t] = e;
        void 0 !== i.cornerRadiusEnd && delete i.cornerRadiusEnd;
      }
    }
    void 0 === Cn("opacity", i, n) &&
      (i.opacity = (function (e, t) {
        if (y([sr, dr, pr, mr], e) && !rs(t)) return 0.7;
        return;
      })(i.type, t));
    return (
      void 0 === Cn("cursor", i, n) &&
        (i.cursor = (function (e, t, n) {
          if (t.href || e.href || Cn("href", e, n)) return "pointer";
          return e.cursor;
        })(i, t, n)),
      i
    );
  }
  function zm(e, t) {
    const { config: n } = e;
    return {
      ...Cu(e, {
        align: "ignore",
        baseline: "ignore",
        color: "include",
        size: "include",
        orient: "ignore",
        theta: "ignore",
      }),
      ...hu("x", e, { defaultPos: "mid" }),
      ...hu("y", e, { defaultPos: "mid" }),
      ...fu("size", e),
      ...fu("angle", e),
      ...Cm(e, n, t),
    };
  }
  function Cm(e, t, n) {
    return n ? { shape: { value: n } } : fu("shape", e);
  }
  const Pm = {
    vgMark: "rule",
    encodeEntry: (e) => {
      const { markDef: t } = e,
        n = t.orient;
      return e.encoding.x ||
        e.encoding.y ||
        e.encoding.latitude ||
        e.encoding.longitude
        ? {
            ...Cu(e, {
              align: "ignore",
              baseline: "ignore",
              color: "include",
              orient: "ignore",
              size: "ignore",
              theta: "ignore",
            }),
            ...wu("x", e, {
              defaultPos: "horizontal" === n ? "zeroOrMax" : "mid",
              defaultPos2: "zeroOrMin",
              range: "vertical" !== n,
            }),
            ...wu("y", e, {
              defaultPos: "vertical" === n ? "zeroOrMax" : "mid",
              defaultPos2: "zeroOrMin",
              range: "horizontal" !== n,
            }),
            ...fu("size", e, { vgChannel: "strokeWidth" }),
          }
        : {};
    },
  };
  function Am(e, t, n) {
    if (void 0 === Cn("align", e, n)) return "center";
  }
  function Nm(e, t, n) {
    if (void 0 === Cn("baseline", e, n)) return "middle";
  }
  const jm = {
    vgMark: "rect",
    encodeEntry: (e) => {
      const { config: t, markDef: n } = e,
        i = n.orient,
        o = "horizontal" === i ? "width" : "height",
        r = "horizontal" === i ? "height" : "width";
      return {
        ...Cu(e, {
          align: "ignore",
          baseline: "ignore",
          color: "include",
          orient: "ignore",
          size: "ignore",
          theta: "ignore",
        }),
        ...hu("x", e, { defaultPos: "mid", vgChannel: "xc" }),
        ...hu("y", e, { defaultPos: "mid", vgChannel: "yc" }),
        ...fu("size", e, { defaultValue: Em(e), vgChannel: o }),
        [r]: Dn(Cn("thickness", n, t)),
      };
    },
  };
  function Em(e) {
    var n;
    const { config: i, markDef: o } = e,
      { orient: r } = o,
      a = "horizontal" === r ? "width" : "height",
      s = e.getScaleComponent("horizontal" === r ? "x" : "y"),
      c =
        null !== (n = Cn("size", o, i, { vgChannel: a })) && void 0 !== n
          ? n
          : i.tick.bandSize;
    if (void 0 !== c) return c;
    {
      const e = s ? s.get("range") : void 0;
      if (e && hn(e) && t.isNumber(e.step)) return (3 * e.step) / 4;
      return (3 * oc(i.view, a)) / 4;
    }
  }
  const Mm = {
    arc: {
      vgMark: "arc",
      encodeEntry: (e) => ({
        ...Cu(e, {
          align: "ignore",
          baseline: "ignore",
          color: "include",
          size: "ignore",
          orient: "ignore",
          theta: "ignore",
        }),
        ...hu("x", e, { defaultPos: "mid" }),
        ...hu("y", e, { defaultPos: "mid" }),
        ...Du(e, "radius"),
        ...Du(e, "theta"),
      }),
    },
    area: {
      vgMark: "area",
      encodeEntry: (e) => ({
        ...Cu(e, {
          align: "ignore",
          baseline: "ignore",
          color: "include",
          orient: "include",
          size: "ignore",
          theta: "ignore",
        }),
        ...wu("x", e, {
          defaultPos: "zeroOrMin",
          defaultPos2: "zeroOrMin",
          range: "horizontal" === e.markDef.orient,
        }),
        ...wu("y", e, {
          defaultPos: "zeroOrMin",
          defaultPos2: "zeroOrMin",
          range: "vertical" === e.markDef.orient,
        }),
        ...Nu(e),
      }),
    },
    bar: {
      vgMark: "rect",
      encodeEntry: (e) => ({
        ...Cu(e, {
          align: "ignore",
          baseline: "ignore",
          color: "include",
          orient: "ignore",
          size: "ignore",
          theta: "ignore",
        }),
        ...Du(e, "x"),
        ...Du(e, "y"),
      }),
    },
    circle: { vgMark: "symbol", encodeEntry: (e) => zm(e, "circle") },
    geoshape: {
      vgMark: "shape",
      encodeEntry: (e) => ({
        ...Cu(e, {
          align: "ignore",
          baseline: "ignore",
          color: "include",
          size: "ignore",
          orient: "ignore",
          theta: "ignore",
        }),
      }),
      postEncodingTransform: (e) => {
        const { encoding: t } = e,
          n = t.shape;
        return [
          {
            type: "geoshape",
            projection: e.projectionName(),
            ...(n && ca(n) && n.type === xo
              ? { field: ka(n, { expr: "datum" }) }
              : {}),
          },
        ];
      },
    },
    image: {
      vgMark: "image",
      encodeEntry: (e) => ({
        ...Cu(e, {
          align: "ignore",
          baseline: "ignore",
          color: "ignore",
          orient: "ignore",
          size: "ignore",
          theta: "ignore",
        }),
        ...Du(e, "x"),
        ...Du(e, "y"),
        ...ou(e, "url"),
      }),
    },
    line: {
      vgMark: "line",
      encodeEntry: (e) => ({
        ...Cu(e, {
          align: "ignore",
          baseline: "ignore",
          color: "include",
          size: "ignore",
          orient: "ignore",
          theta: "ignore",
        }),
        ...hu("x", e, { defaultPos: "mid" }),
        ...hu("y", e, { defaultPos: "mid" }),
        ...fu("size", e, { vgChannel: "strokeWidth" }),
        ...Nu(e),
      }),
    },
    point: { vgMark: "symbol", encodeEntry: (e) => zm(e) },
    rect: {
      vgMark: "rect",
      encodeEntry: (e) => ({
        ...Cu(e, {
          align: "ignore",
          baseline: "ignore",
          color: "include",
          orient: "ignore",
          size: "ignore",
          theta: "ignore",
        }),
        ...Du(e, "x"),
        ...Du(e, "y"),
      }),
    },
    rule: Pm,
    square: { vgMark: "symbol", encodeEntry: (e) => zm(e, "square") },
    text: {
      vgMark: "text",
      encodeEntry: (e) => {
        const { config: t, encoding: n } = e;
        return {
          ...Cu(e, {
            align: "include",
            baseline: "include",
            color: "include",
            size: "ignore",
            orient: "ignore",
            theta: "include",
          }),
          ...hu("x", e, { defaultPos: "mid" }),
          ...hu("y", e, { defaultPos: "mid" }),
          ...ou(e),
          ...fu("size", e, { vgChannel: "fontSize" }),
          ...fu("angle", e),
          ...ju("align", Am(e.markDef, n, t)),
          ...ju("baseline", Nm(e.markDef, n, t)),
          ...hu("radius", e, { defaultPos: null }),
          ...hu("theta", e, { defaultPos: null }),
        };
      },
    },
    tick: jm,
    trail: {
      vgMark: "trail",
      encodeEntry: (e) => ({
        ...Cu(e, {
          align: "ignore",
          baseline: "ignore",
          color: "include",
          size: "include",
          orient: "ignore",
          theta: "ignore",
        }),
        ...hu("x", e, { defaultPos: "mid" }),
        ...hu("y", e, { defaultPos: "mid" }),
        ...fu("size", e),
        ...Nu(e),
      }),
    },
  };
  function Tm(e) {
    if (y([ar, ir, fr], e.mark)) {
      const t = ds(e.mark, e.encoding);
      if (t.length > 0)
        return (function (e, t) {
          return [
            {
              name: e.getName("pathgroup"),
              type: "group",
              from: {
                facet: {
                  name: Lm + e.requestDataName(Ll.Main),
                  data: e.requestDataName(Ll.Main),
                  groupby: t,
                },
              },
              encode: {
                update: {
                  width: { field: { group: "width" } },
                  height: { field: { group: "height" } },
                },
              },
              marks: Rm(e, { fromPrefix: Lm }),
            },
          ];
        })(e, t);
    } else if (e.mark === or) {
      const t = xn.some((t) => Cn(t, e.markDef, e.config));
      if (e.stack && !e.fieldDef("size") && t)
        return (function (e) {
          var t;
          const [n] = Rm(e, { fromPrefix: qm }),
            i = e.scaleName(e.stack.fieldChannel),
            o = function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return e.vgField(e.stack.fieldChannel, t);
            },
            r = (e, t) => {
              const n = [
                o({ prefix: "min", suffix: "start", expr: t }),
                o({ prefix: "max", suffix: "start", expr: t }),
                o({ prefix: "min", suffix: "end", expr: t }),
                o({ prefix: "max", suffix: "end", expr: t }),
              ];
              return ""
                .concat(e, "(")
                .concat(
                  n
                    .map((e) => "scale('".concat(i, "',").concat(e, ")"))
                    .join(","),
                  ")"
                );
            };
          let a, s;
          "x" === e.stack.fieldChannel
            ? ((a = {
                ...p(n.encode.update, ["y", "yc", "y2", "height", ...xn]),
                x: { signal: r("min", "datum") },
                x2: { signal: r("max", "datum") },
                clip: { value: !0 },
              }),
              (s = {
                x: { field: { group: "x" }, mult: -1 },
                height: { field: { group: "height" } },
              }),
              (n.encode.update = {
                ...m(n.encode.update, ["y", "yc", "y2"]),
                height: { field: { group: "height" } },
              }))
            : ((a = {
                ...p(n.encode.update, ["x", "xc", "x2", "width"]),
                y: { signal: r("min", "datum") },
                y2: { signal: r("max", "datum") },
                clip: { value: !0 },
              }),
              (s = {
                y: { field: { group: "y" }, mult: -1 },
                width: { field: { group: "width" } },
              }),
              (n.encode.update = {
                ...m(n.encode.update, ["x", "xc", "x2"]),
                width: { field: { group: "width" } },
              }));
          for (const t of xn) {
            const i = Pn(t, e.markDef, e.config);
            n.encode.update[t]
              ? ((a[t] = n.encode.update[t]), delete n.encode.update[t])
              : i && (a[t] = Dn(i)),
              i && (n.encode.update[t] = { value: 0 });
          }
          const c = [];
          if (
            (null === (t = e.stack.groupbyChannels) || void 0 === t
              ? void 0
              : t.length) > 0
          )
            for (const t of e.stack.groupbyChannels) {
              const n = e.fieldDef(t),
                i = ka(n);
              i && c.push(i),
                ((null != n && n.bin) || (null != n && n.timeUnit)) &&
                  c.push(ka(n, { binSuffix: "end" }));
            }
          (a = [
            "stroke",
            "strokeWidth",
            "strokeJoin",
            "strokeCap",
            "strokeDash",
            "strokeDashOffset",
            "strokeMiterLimit",
            "strokeOpacity",
          ].reduce((t, i) => {
            if (n.encode.update[i]) return { ...t, [i]: n.encode.update[i] };
            {
              const n = Pn(i, e.markDef, e.config);
              return void 0 !== n ? { ...t, [i]: Dn(n) } : t;
            }
          }, a)),
            a.stroke &&
              ((a.strokeForeground = { value: !0 }),
              (a.strokeOffset = { value: 0 }));
          return [
            {
              type: "group",
              from: {
                facet: {
                  data: e.requestDataName(Ll.Main),
                  name: qm + e.requestDataName(Ll.Main),
                  groupby: c,
                  aggregate: {
                    fields: [
                      o({ suffix: "start" }),
                      o({ suffix: "start" }),
                      o({ suffix: "end" }),
                      o({ suffix: "end" }),
                    ],
                    ops: ["min", "max", "min", "max"],
                  },
                },
              },
              encode: { update: a },
              marks: [{ type: "group", encode: { update: s }, marks: [n] }],
            },
          ];
        })(e);
    }
    return Rm(e);
  }
  const Lm = "faceted_path_";
  const qm = "stack_group_";
  function Wm(e) {
    const { encoding: n, stack: i, mark: o, markDef: r, config: a } = e,
      s = n.order;
    if (
      !((!t.isArray(s) && ga(s) && v(s.value)) || (!s && v(Cn("order", r, a))))
    ) {
      if ((t.isArray(s) || ca(s)) && !i) return jn(s, { expr: "datum" });
      if (hr(o)) {
        const i = "horizontal" === r.orient ? "y" : "x",
          o = n[i];
        if (ca(o)) {
          const n = o.sort;
          if (t.isArray(n))
            return {
              field: ka(o, { prefix: i, suffix: "sort_index", expr: "datum" }),
            };
          if (Jr(n))
            return {
              field: ka(
                { aggregate: rs(e.encoding) ? n.op : void 0, field: n.field },
                { expr: "datum" }
              ),
            };
          if (Xr(n)) {
            return {
              field: ka(e.fieldDef(n.encoding), { expr: "datum" }),
              order: n.order,
            };
          }
          if (null === n) return;
          var c;
          return {
            field: ka(o, {
              binSuffix:
                null !== (c = e.stack) && void 0 !== c && c.impute
                  ? "mid"
                  : void 0,
              expr: "datum",
            }),
          };
        }
      } else;
    }
  }
  function Rm(e) {
    let t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { fromPrefix: "" };
    const { mark: n, markDef: i, encoding: o, config: r } = e,
      a = V(i.clip, Um(e), Bm(e)),
      s = zn(i),
      c = o.key,
      l = Wm(e),
      u = Hm(e),
      d = Cn("aria", i, r),
      f = Mm[n].postEncodingTransform ? Mm[n].postEncodingTransform(e) : null;
    return [
      {
        name: e.getName("marks"),
        type: Mm[n].vgMark,
        ...(a ? { clip: !0 } : {}),
        ...(s ? { style: s } : {}),
        ...(c ? { key: c.field } : {}),
        ...(l ? { sort: l } : {}),
        ...(u || {}),
        ...(!1 === d ? { aria: d } : {}),
        from: { data: t.fromPrefix + e.requestDataName(Ll.Main) },
        encode: { update: Mm[n].encodeEntry(e) },
        ...(f ? { transform: f } : {}),
      },
    ];
  }
  function Um(e) {
    const t = e.getScaleComponent("x"),
      n = e.getScaleComponent("y");
    return (
      !!(
        (null != t && t.get("selectionExtent")) ||
        (null != n && n.get("selectionExtent"))
      ) || void 0
    );
  }
  function Bm(e) {
    const t = e.component.projection;
    return !(!t || t.isFit) || void 0;
  }
  function Hm(e) {
    if (!e.component.selection) return null;
    const t = C(e.component.selection).length;
    let n = t,
      i = e.parent;
    for (; i && 0 === n; )
      (n = C(i.component.selection).length), (i = i.parent);
    return n ? { interactive: t > 0 || !!e.encoding.tooltip } : null;
  }
  class Vm extends Vp {
    constructor(e, n, i) {
      var o;
      let r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        a = arguments.length > 4 ? arguments[4] : void 0;
      super(e, "unit", n, i, a, void 0, tc(e) ? e.view : void 0),
        Ln(this, "markDef", void 0),
        Ln(this, "encoding", void 0),
        Ln(this, "specifiedScales", {}),
        Ln(this, "stack", void 0),
        Ln(this, "specifiedAxes", {}),
        Ln(this, "specifiedLegends", {}),
        Ln(this, "specifiedProjection", {}),
        Ln(this, "selection", []),
        Ln(this, "children", []);
      const s = br(e.mark) ? { ...e.mark } : { type: e.mark },
        c = s.type;
      void 0 === s.filled &&
        (s.filled = (function (e, t, n) {
          let { graticule: i } = n;
          if (i) return !1;
          const o = Pn("filled", e, t),
            r = e.type;
          return V(o, r !== sr && r !== ar && r !== lr);
        })(s, a, { graticule: e.data && Tl(e.data) }));
      const l = (this.encoding = (function (e, n, i, o) {
        const r = {};
        for (const t of C(e))
          $e(t) ||
            ji(
              ""
                .concat((a = t), "-encoding is dropped as ")
                .concat(a, " is not a valid encoding channel.")
            );
        var a;
        for (let a of at) {
          if (!e[a]) continue;
          const s = e[a];
          if (Pt(a)) {
            const e = rt(a),
              t = r[e];
            if (ca(t)) {
              if (mo(t.type) && ca(s)) {
                ji(ei(e));
                continue;
              }
            } else (a = e), ji(ti(e));
          }
          if (
            ("angle" !== a ||
              "arc" !== n ||
              e.theta ||
              (ji(
                "Arc marks uses theta channel rather than angle, replacing angle with theta."
              ),
              (a = ce)),
            ss(e, a, n))
          ) {
            if (a === ye && "line" === n) {
              const t = Ea(e[a]);
              if (null != t && t.aggregate) {
                ji(
                  "Line marks cannot encode size with a non-groupby field. You may want to use trail marks instead."
                );
                continue;
              }
            }
            if (a === me && (i ? "fill" in e : "stroke" in e))
              ji(ai("encoding", { fill: "fill" in e, stroke: "stroke" in e }));
            else if (
              a === _e ||
              (a === Oe && !t.isArray(s) && !ga(s)) ||
              (a === Ce && t.isArray(s))
            )
              s &&
                (r[a] = t
                  .array(s)
                  .reduce(
                    (e, t) => (ca(t) ? e.push(qa(t, a)) : ji(si(t, a)), e),
                    []
                  ));
            else {
              if (a === Ce && null === s) r[a] = null;
              else if (!(ca(s) || ua(s) || ga(s) || ra(s) || gn(s))) {
                ji(si(s, a));
                continue;
              }
              r[a] = Ta(s, a, o);
            }
          } else ji(ci(a, n));
        }
        return r;
      })(e.encoding || {}, c, s.filled, a));
      (this.markDef = _m(s, l, a)),
        (this.size = (function (e) {
          let { encoding: t, size: n } = e;
          for (const e of Dt) {
            const i = it(e);
            ec(n[i]) && da(t[e]) && (delete n[i], ji(xi(i)));
          }
          return n;
        })({
          encoding: l,
          size: tc(e)
            ? {
                ...r,
                ...(e.width ? { width: e.width } : {}),
                ...(e.height ? { height: e.height } : {}),
              }
            : r,
        })),
        (this.stack = Nc(c, l)),
        (this.specifiedScales = this.initScales(c, l)),
        (this.specifiedAxes = this.initAxes(l)),
        (this.specifiedLegends = this.initLegends(l)),
        (this.specifiedProjection = e.projection),
        (this.selection = (
          null !== (o = e.params) && void 0 !== o ? o : []
        ).filter((e) => Gs(e)));
    }
    get hasProjection() {
      const { encoding: e } = this,
        t = this.mark === gr,
        n = e && Te.some((t) => pa(e[t]));
      return t || n;
    }
    scaleDomain(e) {
      const t = this.specifiedScales[e];
      return t ? t.domain : void 0;
    }
    axis(e) {
      return this.specifiedAxes[e];
    }
    legend(e) {
      return this.specifiedLegends[e];
    }
    initScales(e, t) {
      return Bt.reduce((e, n) => {
        const i = Ma(t[n]);
        var o;
        i &&
          (e[n] = this.initScale(
            null !== (o = i.scale) && void 0 !== o ? o : {}
          ));
        return e;
      }, {});
    }
    initScale(e) {
      const { domain: n, range: i } = e,
        o = fn(e);
      return (
        t.isArray(n) && (o.domain = n.map(kn)),
        t.isArray(i) && (o.range = i.map(kn)),
        o
      );
    }
    initAxes(e) {
      return Dt.reduce((t, n) => {
        const i = e[n];
        if (pa(i) || (n === ee && pa(e.x2)) || (n === te && pa(e.y2))) {
          const e = pa(i) ? i.axis : void 0;
          t[n] = e ? this.initAxis({ ...e }) : e;
        }
        return t;
      }, {});
    }
    initAxis(e) {
      const t = C(e),
        n = {};
      for (const i of t) {
        const t = e[i];
        n[i] = Ya(t) ? wn(t) : kn(t);
      }
      return n;
    }
    initLegends(e) {
      return Rt.reduce((t, n) => {
        const i = Ma(e[n]);
        if (
          i &&
          (function (e) {
            switch (e) {
              case me:
              case ge:
              case he:
              case ye:
              case ve:
              case xe:
              case Se:
              case De:
                return !0;
              case we:
              case ke:
              case be:
                return !1;
            }
          })(n)
        ) {
          const e = i.legend;
          t[n] = e ? fn(e) : e;
        }
        return t;
      }, {});
    }
    parseData() {
      this.component.data = hm(this);
    }
    parseLayoutSize() {
      !(function (e) {
        const { size: t, component: n } = e;
        for (const i of Dt) {
          const o = it(i);
          if (t[o]) {
            const e = t[o];
            n.layoutSize.set(o, ec(e) ? "step" : e, !0);
          } else {
            const t = fm(e, o);
            n.layoutSize.set(o, t, !1);
          }
        }
      })(this);
    }
    parseSelections() {
      this.component.selection = (function (e, n) {
        const i = {},
          o = e.config.selection;
        if (!n || !n.length) return i;
        for (const a of n) {
          const n = j(a.name),
            s = a.select,
            c = t.isString(s) ? s : s.type,
            l = t.isObject(s) ? d(s) : { type: c },
            u = o[c];
          for (const e in u) {
            var r;
            "fields" !== e &&
              "encodings" !== e &&
              ("mark" === e && (l[e] = { ...u[e], ...l[e] }),
              (void 0 === l[e] || !0 === l[e]) &&
                (l[e] = null !== (r = u[e]) && void 0 !== r ? r : l[e]));
          }
          const f = (i[n] = {
            ...l,
            name: n,
            type: c,
            init: a.value,
            bind: a.bind,
            events: t.isString(l.on)
              ? t.parseSelector(l.on, "scope")
              : t.array(d(l.on)),
          });
          for (const t of Zu) t.defined(f) && t.parse && t.parse(e, f, a);
        }
        return i;
      })(this, this.selection);
    }
    parseMarkGroup() {
      this.component.mark = Tm(this);
    }
    parseAxesAndHeaders() {
      var e;
      this.component.axes =
        ((e = this),
        Dt.reduce(
          (t, n) => (e.component.scales[n] && (t[n] = [Om(n, e)]), t),
          {}
        ));
    }
    assembleSelectionTopLevelSignals(e) {
      return (function (e, n) {
        let i = !1;
        for (const r of P(
          null !== (o = e.component.selection) && void 0 !== o ? o : {}
        )) {
          var o;
          const a = r.name,
            s = t.stringValue(a + Ju);
          if (0 === n.filter((e) => e.name === a).length) {
            const e = "global" === r.resolve ? "union" : r.resolve,
              i = "point" === r.type ? ", true, true)" : ")";
            n.push({
              name: r.name,
              update: ""
                .concat(Ku, "(")
                .concat(s, ", ")
                .concat(t.stringValue(e))
                .concat(i),
            });
          }
          i = !0;
          for (const t of Zu)
            t.defined(r) &&
              t.topLevelSignals &&
              (n = t.topLevelSignals(e, r, n));
        }
        i &&
          0 === n.filter((e) => "unit" === e.name).length &&
          n.unshift({
            name: "unit",
            value: {},
            on: [
              {
                events: "mousemove",
                update: "isTuple(group()) ? group() : unit",
              },
            ],
          });
        return Bl(n);
      })(this, e);
    }
    assembleSignals() {
      return [...md(this), ...Wl(this, [])];
    }
    assembleSelectionData(e) {
      return (function (e, t) {
        const n = [...t];
        for (const t of P(
          null !== (i = e.component.selection) && void 0 !== i ? i : {}
        )) {
          var i;
          const o = { name: t.name + Ju };
          if (t.init) {
            const n = t.project.items.map((e) => {
              const { signals: t, ...n } = e;
              return n;
            });
            o.values = t.init.map((t) => ({
              unit: td(e, { escape: !1 }),
              fields: n,
              values: ql(t, !1),
            }));
          }
          n.filter((e) => e.name === t.name + Ju).length || n.push(o);
        }
        return n;
      })(this, e);
    }
    assembleLayout() {
      return null;
    }
    assembleLayoutSignals() {
      return Rd(this);
    }
    assembleMarks() {
      var e;
      let t = null !== (e = this.component.mark) && void 0 !== e ? e : [];
      return (
        (this.parent && Bp(this.parent)) || (t = Ul(this, t)),
        t.map(this.correctDataNames)
      );
    }
    assembleGroupStyle() {
      const { style: e } = this.view || {};
      return void 0 !== e
        ? e
        : this.encoding.x || this.encoding.y
        ? "cell"
        : void 0;
    }
    getMapping() {
      return this.encoding;
    }
    get mark() {
      return this.markDef.type;
    }
    channelHasField(e) {
      return ns(this.encoding, e);
    }
    fieldDef(e) {
      return Ea(this.encoding[e]);
    }
    typedFieldDef(e) {
      const t = this.fieldDef(e);
      return ma(t) ? t : null;
    }
  }
  class Im extends Hp {
    constructor(e, t, n, i, o) {
      super(e, "layer", t, n, o, e.resolve, e.view),
        Ln(this, "children", void 0);
      const r = {
        ...i,
        ...(e.width ? { width: e.width } : {}),
        ...(e.height ? { height: e.height } : {}),
      };
      this.children = e.layer.map((e, t) => {
        if (Sc(e))
          return new Im(e, this, this.getName("layer_".concat(t)), r, o);
        if (es(e))
          return new Vm(e, this, this.getName("layer_".concat(t)), r, o);
        throw new Error(Un(e));
      });
    }
    parseData() {
      this.component.data = hm(this);
      for (const e of this.children) e.parseData();
    }
    parseLayoutSize() {
      var e;
      um((e = this)), dm(e, "width"), dm(e, "height");
    }
    parseSelections() {
      this.component.selection = {};
      for (const e of this.children) {
        e.parseSelections();
        for (const t of C(e.component.selection))
          this.component.selection[t] = e.component.selection[t];
      }
    }
    parseMarkGroup() {
      for (const e of this.children) e.parseMarkGroup();
    }
    parseAxesAndHeaders() {
      !(function (e) {
        const { axes: t, resolve: n } = e.component,
          i = { top: 0, bottom: 0, right: 0, left: 0 };
        for (const i of e.children) {
          i.parseAxesAndHeaders();
          for (const o of C(i.component.axes))
            (n.axis[o] = Yd(e.component.resolve, o)),
              "shared" === n.axis[o] &&
                ((t[o] = km(t[o], i.component.axes[o])),
                t[o] || ((n.axis[o] = "independent"), delete t[o]));
        }
        for (const r of Dt) {
          for (const a of e.children)
            if (a.component.axes[r]) {
              if ("independent" === n.axis[r]) {
                var o;
                t[r] = (null !== (o = t[r]) && void 0 !== o ? o : []).concat(
                  a.component.axes[r]
                );
                for (const e of a.component.axes[r]) {
                  const { value: t, explicit: n } = e.getWithExplicit("orient");
                  if (!gn(t)) {
                    if (i[t] > 0 && !n) {
                      const n = wm[t];
                      i[t] > i[n] && e.set("orient", n, !1);
                    }
                    i[t]++;
                  }
                }
              }
              delete a.component.axes[r];
            }
          if ("independent" === n.axis[r] && t[r] && t[r].length > 1)
            for (const e of t[r])
              e.get("grid") && !e.explicit.grid && (e.implicit.grid = !1);
        }
      })(this);
    }
    assembleSelectionTopLevelSignals(e) {
      return this.children.reduce(
        (e, t) => t.assembleSelectionTopLevelSignals(e),
        e
      );
    }
    assembleSignals() {
      return this.children.reduce(
        (e, t) => e.concat(t.assembleSignals()),
        md(this)
      );
    }
    assembleLayoutSignals() {
      return this.children.reduce(
        (e, t) => e.concat(t.assembleLayoutSignals()),
        Rd(this)
      );
    }
    assembleSelectionData(e) {
      return this.children.reduce((e, t) => t.assembleSelectionData(e), e);
    }
    assembleGroupStyle() {
      const e = new Set();
      for (const n of this.children)
        for (const i of t.array(n.assembleGroupStyle())) e.add(i);
      const n = Array.from(e);
      return n.length > 1 ? n : 1 === n.length ? n[0] : void 0;
    }
    assembleTitle() {
      let e = super.assembleTitle();
      if (e) return e;
      for (const t of this.children) if (((e = t.assembleTitle()), e)) return e;
    }
    assembleLayout() {
      return null;
    }
    assembleMarks() {
      return (function (e, t) {
        for (const n of e.children) Wp(n) && (t = Ul(n, t));
        return t;
      })(
        this,
        this.children.flatMap((e) => e.assembleMarks())
      );
    }
    assembleLegends() {
      return this.children.reduce(
        (e, t) => e.concat(t.assembleLegends()),
        df(this)
      );
    }
  }
  function Gm(e, t, n, i, o) {
    if (Zr(e)) return new mm(e, t, n, o);
    if (Sc(e)) return new Im(e, t, n, i, o);
    if (es(e)) return new Vm(e, t, n, i, o);
    if (
      (function (e) {
        return Js(e) || Qs(e) || Xs(e);
      })(e)
    )
      return new vm(e, t, n, o);
    throw new Error(Un(e));
  }
  function Ym(e, n, i, o) {
    const r = o.component.layoutSize.get("width"),
      a = o.component.layoutSize.get("height");
    if (
      (void 0 === n
        ? ((n = { type: "pad" }), o.hasAxisOrientSignalRef() && (n.resize = !0))
        : t.isString(n) && (n = { type: n }),
      r && a && ("fit" === (s = n.type) || "fit-x" === s || "fit-y" === s))
    )
      if ("step" === r && "step" === a) ji(In()), (n.type = "pad");
      else if ("step" === r || "step" === a) {
        const e = "step" === r ? "width" : "height";
        ji(In(zt(e)));
        const t = "width" === e ? "height" : "width";
        n.type = (function (e) {
          return e ? "fit-".concat(zt(e)) : "fit";
        })(t);
      }
    var s;
    return {
      ...(1 === C(n).length && n.type
        ? "pad" === n.type
          ? {}
          : { autosize: n.type }
        : { autosize: n }),
      ...Ks(i, !1),
      ...Ks(e, !0),
    };
  }
  function Xm(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    const o = e.config ? wc(e.config) : void 0,
      r = [].concat(e.assembleSelectionData([]), rm(e.component.data, n)),
      a = e.assembleProjections(),
      s = e.assembleTitle(),
      c = e.assembleGroupStyle(),
      l = e.assembleGroupEncodeEntry(!0);
    let u = e.assembleLayoutSignals();
    u = u.filter(
      (e) =>
        ("width" !== e.name && "height" !== e.name) ||
        void 0 === e.value ||
        ((t[e.name] = +e.value), !1)
    );
    const { params: d, ...f } = t;
    return {
      $schema: "https://vega.github.io/schema/vega/v5.json",
      ...(e.description ? { description: e.description } : {}),
      ...f,
      ...(s ? { title: s } : {}),
      ...(c ? { style: c } : {}),
      ...(l ? { encode: { update: l } } : {}),
      data: r,
      ...(a.length > 0 ? { projections: a } : {}),
      ...e.assembleGroup([
        ...u,
        ...e.assembleSelectionTopLevelSignals([]),
        ...Ys(d),
      ]),
      ...(o ? { config: o } : {}),
      ...(i ? { usermeta: i } : {}),
    };
  }
  const Jm = n;
  (e.accessPathDepth = H),
    (e.accessPathWithDatum = L),
    (e.compile = function (e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      n.logger && Ai(n.logger), n.fieldTitle && _a(n.fieldTitle);
      try {
        const i = vc(t.mergeConfig(n.config, e.config)),
          o = yl(e, i),
          r = Gm(o, null, "", void 0, i);
        r.parse(), op(r.component.data, r);
        return {
          spec: Xm(r, Ym(e, o.autosize, i, r), e.datasets, e.usermeta),
          normalized: o,
        };
      } finally {
        n.logger && Ni(), n.fieldTitle && za();
      }
    }),
    (e.contains = y),
    (e.deepEqual = u),
    (e.deleteNestedProperty = M),
    (e.duplicate = d),
    (e.entries = A),
    (e.every = x),
    (e.fieldIntersection = _),
    (e.flatAccessWithDatum = q),
    (e.getFirstDefined = V),
    (e.hasIntersection = F),
    (e.hash = h),
    (e.internalField = Y),
    (e.isBoolean = N),
    (e.isEmpty = z),
    (e.isEqual = function (e, t) {
      const n = C(e),
        i = C(t);
      if (n.length !== i.length) return !1;
      for (const i of n) if (e[i] !== t[i]) return !1;
      return !0;
    }),
    (e.isInternalField = X),
    (e.isNullOrFalse = v),
    (e.isNumeric = Q),
    (e.keys = C),
    (e.logicalExpr = E),
    (e.mergeDeep = w),
    (e.never = f),
    (e.normalize = yl),
    (e.normalizeAngle = J),
    (e.omit = m),
    (e.pick = p),
    (e.prefixGenerator = O),
    (e.removePathFromField = B),
    (e.replaceAll = U),
    (e.replacePathInField = R),
    (e.resetIdCounter = function () {
      I = 42;
    }),
    (e.setEqual = D),
    (e.some = b),
    (e.stringify = g),
    (e.titleCase = T),
    (e.unique = S),
    (e.uniqueId = G),
    (e.vals = P),
    (e.varName = j),
    (e.version = Jm),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=vega-lite.min.js.map
