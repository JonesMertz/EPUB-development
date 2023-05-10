!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("vega"), require("vega-lite")))
    : "function" == typeof define && define.amd
    ? define(["vega", "vega-lite"], t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).vegaEmbed =
        t(e.vega, e.vegaLite));
})(this, function (e, t) {
  "use strict";
  function n(e) {
    if (e && e.__esModule) return e;
    var t = Object.create(null);
    return (
      e &&
        Object.keys(e).forEach(function (n) {
          if ("default" !== n) {
            var o = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(
              t,
              n,
              o.get
                ? o
                : {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  }
            );
          }
        }),
      (t.default = e),
      Object.freeze(t)
    );
  }
  var o,
    r = n(e),
    i = n(t),
    a =
      ((o = function (e, t) {
        return (
          (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          o(e, t)
        );
      }),
      function (e, t) {
        function n() {
          this.constructor = e;
        }
        o(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }),
    s = Object.prototype.hasOwnProperty;
  function c(e, t) {
    return s.call(e, t);
  }
  function l(e) {
    if (Array.isArray(e)) {
      for (var t = new Array(e.length), n = 0; n < t.length; n++) t[n] = "" + n;
      return t;
    }
    if (Object.keys) return Object.keys(e);
    t = [];
    for (var o in e) c(e, o) && t.push(o);
    return t;
  }
  function h(e) {
    switch (typeof e) {
      case "object":
        return JSON.parse(JSON.stringify(e));
      case "undefined":
        return null;
      default:
        return e;
    }
  }
  function p(e) {
    for (var t, n = 0, o = e.length; n < o; ) {
      if (!((t = e.charCodeAt(n)) >= 48 && t <= 57)) return !1;
      n++;
    }
    return !0;
  }
  function u(e) {
    return -1 === e.indexOf("/") && -1 === e.indexOf("~")
      ? e
      : e.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function d(e) {
    return e.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  function f(e) {
    if (void 0 === e) return !0;
    if (e)
      if (Array.isArray(e)) {
        for (var t = 0, n = e.length; t < n; t++) if (f(e[t])) return !0;
      } else if ("object" == typeof e) {
        var o = l(e),
          r = o.length;
        for (t = 0; t < r; t++) if (f(e[o[t]])) return !0;
      }
    return !1;
  }
  function g(e, t) {
    var n = [e];
    for (var o in t) {
      var r = "object" == typeof t[o] ? JSON.stringify(t[o], null, 2) : t[o];
      void 0 !== r && n.push(o + ": " + r);
    }
    return n.join("\n");
  }
  var v = (function (e) {
      function t(t, n, o, r, i) {
        var a = this.constructor,
          s =
            e.call(this, g(t, { name: n, index: o, operation: r, tree: i })) ||
            this;
        return (
          (s.name = n),
          (s.index = o),
          (s.operation = r),
          (s.tree = i),
          Object.setPrototypeOf(s, a.prototype),
          (s.message = g(t, { name: n, index: o, operation: r, tree: i })),
          s
        );
      }
      return a(t, e), t;
    })(Error),
    m = v,
    E = h,
    b = {
      add: function (e, t, n) {
        return (e[t] = this.value), { newDocument: n };
      },
      remove: function (e, t, n) {
        var o = e[t];
        return delete e[t], { newDocument: n, removed: o };
      },
      replace: function (e, t, n) {
        var o = e[t];
        return (e[t] = this.value), { newDocument: n, removed: o };
      },
      move: function (e, t, n) {
        var o = w(n, this.path);
        o && (o = h(o));
        var r = O(n, { op: "remove", path: this.from }).removed;
        return (
          O(n, { op: "add", path: this.path, value: r }),
          { newDocument: n, removed: o }
        );
      },
      copy: function (e, t, n) {
        var o = w(n, this.from);
        return (
          O(n, { op: "add", path: this.path, value: h(o) }), { newDocument: n }
        );
      },
      test: function (e, t, n) {
        return { newDocument: n, test: N(e[t], this.value) };
      },
      _get: function (e, t, n) {
        return (this.value = e[t]), { newDocument: n };
      },
    },
    y = {
      add: function (e, t, n) {
        return (
          p(t) ? e.splice(t, 0, this.value) : (e[t] = this.value),
          { newDocument: n, index: t }
        );
      },
      remove: function (e, t, n) {
        return { newDocument: n, removed: e.splice(t, 1)[0] };
      },
      replace: function (e, t, n) {
        var o = e[t];
        return (e[t] = this.value), { newDocument: n, removed: o };
      },
      move: b.move,
      copy: b.copy,
      test: b.test,
      _get: b._get,
    };
  function w(e, t) {
    if ("" == t) return e;
    var n = { op: "_get", path: t };
    return O(e, n), n.value;
  }
  function O(e, t, n, o, r, i) {
    if (
      (void 0 === n && (n = !1),
      void 0 === o && (o = !0),
      void 0 === r && (r = !0),
      void 0 === i && (i = 0),
      n && ("function" == typeof n ? n(t, 0, e, t.path) : x(t, 0)),
      "" === t.path)
    ) {
      var a = { newDocument: e };
      if ("add" === t.op) return (a.newDocument = t.value), a;
      if ("replace" === t.op)
        return (a.newDocument = t.value), (a.removed = e), a;
      if ("move" === t.op || "copy" === t.op)
        return (
          (a.newDocument = w(e, t.from)), "move" === t.op && (a.removed = e), a
        );
      if ("test" === t.op) {
        if (((a.test = N(e, t.value)), !1 === a.test))
          throw new m(
            "Test operation failed",
            "TEST_OPERATION_FAILED",
            i,
            t,
            e
          );
        return (a.newDocument = e), a;
      }
      if ("remove" === t.op) return (a.removed = e), (a.newDocument = null), a;
      if ("_get" === t.op) return (t.value = e), a;
      if (n)
        throw new m(
          "Operation `op` property is not one of operations defined in RFC-6902",
          "OPERATION_OP_INVALID",
          i,
          t,
          e
        );
      return a;
    }
    o || (e = h(e));
    var s = (t.path || "").split("/"),
      c = e,
      l = 1,
      u = s.length,
      f = void 0,
      g = void 0,
      v = void 0;
    for (v = "function" == typeof n ? n : x; ; ) {
      if (
        ((g = s[l]) && -1 != g.indexOf("~") && (g = d(g)),
        r && "__proto__" == g)
      )
        throw new TypeError(
          "JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README"
        );
      if (
        (n &&
          void 0 === f &&
          (void 0 === c[g]
            ? (f = s.slice(0, l).join("/"))
            : l == u - 1 && (f = t.path),
          void 0 !== f && v(t, 0, e, f)),
        l++,
        Array.isArray(c))
      ) {
        if ("-" === g) g = c.length;
        else {
          if (n && !p(g))
            throw new m(
              "Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index",
              "OPERATION_PATH_ILLEGAL_ARRAY_INDEX",
              i,
              t,
              e
            );
          p(g) && (g = ~~g);
        }
        if (l >= u) {
          if (n && "add" === t.op && g > c.length)
            throw new m(
              "The specified index MUST NOT be greater than the number of elements in the array",
              "OPERATION_VALUE_OUT_OF_BOUNDS",
              i,
              t,
              e
            );
          if (!1 === (a = y[t.op].call(t, c, g, e)).test)
            throw new m(
              "Test operation failed",
              "TEST_OPERATION_FAILED",
              i,
              t,
              e
            );
          return a;
        }
      } else if (l >= u) {
        if (!1 === (a = b[t.op].call(t, c, g, e)).test)
          throw new m(
            "Test operation failed",
            "TEST_OPERATION_FAILED",
            i,
            t,
            e
          );
        return a;
      }
      if (((c = c[g]), n && l < u && (!c || "object" != typeof c)))
        throw new m(
          "Cannot perform operation at the desired path",
          "OPERATION_PATH_UNRESOLVABLE",
          i,
          t,
          e
        );
    }
  }
  function A(e, t, n, o, r) {
    if (
      (void 0 === o && (o = !0),
      void 0 === r && (r = !0),
      n && !Array.isArray(t))
    )
      throw new m("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    o || (e = h(e));
    for (var i = new Array(t.length), a = 0, s = t.length; a < s; a++)
      (i[a] = O(e, t[a], n, !0, r, a)), (e = i[a].newDocument);
    return (i.newDocument = e), i;
  }
  function x(e, t, n, o) {
    if ("object" != typeof e || null === e || Array.isArray(e))
      throw new m(
        "Operation is not an object",
        "OPERATION_NOT_AN_OBJECT",
        t,
        e,
        n
      );
    if (!b[e.op])
      throw new m(
        "Operation `op` property is not one of operations defined in RFC-6902",
        "OPERATION_OP_INVALID",
        t,
        e,
        n
      );
    if ("string" != typeof e.path)
      throw new m(
        "Operation `path` property is not a string",
        "OPERATION_PATH_INVALID",
        t,
        e,
        n
      );
    if (0 !== e.path.indexOf("/") && e.path.length > 0)
      throw new m(
        'Operation `path` property must start with "/"',
        "OPERATION_PATH_INVALID",
        t,
        e,
        n
      );
    if (("move" === e.op || "copy" === e.op) && "string" != typeof e.from)
      throw new m(
        "Operation `from` property is not present (applicable in `move` and `copy` operations)",
        "OPERATION_FROM_REQUIRED",
        t,
        e,
        n
      );
    if (
      ("add" === e.op || "replace" === e.op || "test" === e.op) &&
      void 0 === e.value
    )
      throw new m(
        "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
        "OPERATION_VALUE_REQUIRED",
        t,
        e,
        n
      );
    if (("add" === e.op || "replace" === e.op || "test" === e.op) && f(e.value))
      throw new m(
        "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
        "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",
        t,
        e,
        n
      );
    if (n)
      if ("add" == e.op) {
        var r = e.path.split("/").length,
          i = o.split("/").length;
        if (r !== i + 1 && r !== i)
          throw new m(
            "Cannot perform an `add` operation at the desired path",
            "OPERATION_PATH_CANNOT_ADD",
            t,
            e,
            n
          );
      } else if ("replace" === e.op || "remove" === e.op || "_get" === e.op) {
        if (e.path !== o)
          throw new m(
            "Cannot perform the operation at a path that does not exist",
            "OPERATION_PATH_UNRESOLVABLE",
            t,
            e,
            n
          );
      } else if ("move" === e.op || "copy" === e.op) {
        var a = I([{ op: "_get", path: e.from, value: void 0 }], n);
        if (a && "OPERATION_PATH_UNRESOLVABLE" === a.name)
          throw new m(
            "Cannot perform the operation from a path that does not exist",
            "OPERATION_FROM_UNRESOLVABLE",
            t,
            e,
            n
          );
      }
  }
  function I(e, t, n) {
    try {
      if (!Array.isArray(e))
        throw new m("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
      if (t) A(h(t), h(e), n || !0);
      else {
        n = n || x;
        for (var o = 0; o < e.length; o++) n(e[o], o, t, void 0);
      }
    } catch (e) {
      if (e instanceof m) return e;
      throw e;
    }
  }
  function N(e, t) {
    if (e === t) return !0;
    if (e && t && "object" == typeof e && "object" == typeof t) {
      var n,
        o,
        r,
        i = Array.isArray(e),
        a = Array.isArray(t);
      if (i && a) {
        if ((o = e.length) != t.length) return !1;
        for (n = o; 0 != n--; ) if (!N(e[n], t[n])) return !1;
        return !0;
      }
      if (i != a) return !1;
      var s = Object.keys(e);
      if ((o = s.length) !== Object.keys(t).length) return !1;
      for (n = o; 0 != n--; ) if (!t.hasOwnProperty(s[n])) return !1;
      for (n = o; 0 != n--; ) if (!N(e[(r = s[n])], t[r])) return !1;
      return !0;
    }
    return e != e && t != t;
  }
  var R = Object.freeze({
      __proto__: null,
      JsonPatchError: m,
      deepClone: E,
      getValueByPointer: w,
      applyOperation: O,
      applyPatch: A,
      applyReducer: function (e, t, n) {
        var o = O(e, t);
        if (!1 === o.test)
          throw new m(
            "Test operation failed",
            "TEST_OPERATION_FAILED",
            n,
            t,
            e
          );
        return o.newDocument;
      },
      validator: x,
      validate: I,
      _areEquals: N,
    }),
    T = new WeakMap(),
    L = function (e) {
      (this.observers = new Map()), (this.obj = e);
    },
    S = function (e, t) {
      (this.callback = e), (this.observer = t);
    };
  /*!
   * https://github.com/Starcounter-Jack/JSON-Patch
   * (c) 2017 Joachim Wester
   * MIT license
   */ function D(e, t) {
    void 0 === t && (t = !1);
    var n = T.get(e.object);
    C(n.value, e.object, e.patches, "", t),
      e.patches.length && A(n.value, e.patches);
    var o = e.patches;
    return o.length > 0 && ((e.patches = []), e.callback && e.callback(o)), o;
  }
  function C(e, t, n, o, r) {
    if (t !== e) {
      "function" == typeof t.toJSON && (t = t.toJSON());
      for (var i = l(t), a = l(e), s = !1, p = a.length - 1; p >= 0; p--) {
        var d = e[(g = a[p])];
        if (
          !c(t, g) ||
          (void 0 === t[g] && void 0 !== d && !1 === Array.isArray(t))
        )
          Array.isArray(e) === Array.isArray(t)
            ? (r && n.push({ op: "test", path: o + "/" + u(g), value: h(d) }),
              n.push({ op: "remove", path: o + "/" + u(g) }),
              (s = !0))
            : (r && n.push({ op: "test", path: o, value: e }),
              n.push({ op: "replace", path: o, value: t }));
        else {
          var f = t[g];
          "object" == typeof d &&
          null != d &&
          "object" == typeof f &&
          null != f &&
          Array.isArray(d) === Array.isArray(f)
            ? C(d, f, n, o + "/" + u(g), r)
            : d !== f &&
              (r && n.push({ op: "test", path: o + "/" + u(g), value: h(d) }),
              n.push({ op: "replace", path: o + "/" + u(g), value: h(f) }));
        }
      }
      if (s || i.length != a.length)
        for (p = 0; p < i.length; p++) {
          var g;
          c(e, (g = i[p])) ||
            void 0 === t[g] ||
            n.push({ op: "add", path: o + "/" + u(g), value: h(t[g]) });
        }
    }
  }
  var F = Object.freeze({
    __proto__: null,
    unobserve: function (e, t) {
      t.unobserve();
    },
    observe: function (e, t) {
      var n,
        o = (function (e) {
          return T.get(e);
        })(e);
      if (o) {
        var r = (function (e, t) {
          return e.observers.get(t);
        })(o, t);
        n = r && r.observer;
      } else (o = new L(e)), T.set(e, o);
      if (n) return n;
      if (((n = {}), (o.value = h(e)), t)) {
        (n.callback = t), (n.next = null);
        var i = function () {
            D(n);
          },
          a = function () {
            clearTimeout(n.next), (n.next = setTimeout(i));
          };
        "undefined" != typeof window &&
          (window.addEventListener("mouseup", a),
          window.addEventListener("keyup", a),
          window.addEventListener("mousedown", a),
          window.addEventListener("keydown", a),
          window.addEventListener("change", a));
      }
      return (
        (n.patches = []),
        (n.object = e),
        (n.unobserve = function () {
          D(n),
            clearTimeout(n.next),
            (function (e, t) {
              e.observers.delete(t.callback);
            })(o, n),
            "undefined" != typeof window &&
              (window.removeEventListener("mouseup", a),
              window.removeEventListener("keyup", a),
              window.removeEventListener("mousedown", a),
              window.removeEventListener("keydown", a),
              window.removeEventListener("change", a));
        }),
        o.observers.set(t, new S(t, n)),
        n
      );
    },
    generate: D,
    compare: function (e, t, n) {
      void 0 === n && (n = !1);
      var o = [];
      return C(e, t, o, "", n), o;
    },
  });
  Object.assign({}, R, F, {
    JsonPatchError: v,
    deepClone: h,
    escapePathComponent: u,
    unescapePathComponent: d,
  });
  var k = /("(?:[^\\"]|\\.)*")|[:,]/g,
    P = function (e, t) {
      var n, o, r;
      return (
        (t = t || {}),
        (n = JSON.stringify(
          [1],
          void 0,
          void 0 === t.indent ? 2 : t.indent
        ).slice(2, -3)),
        (o = "" === n ? 1 / 0 : void 0 === t.maxLength ? 80 : t.maxLength),
        (r = t.replacer),
        (function e(t, i, a) {
          var s, c, l, h, p, u, d, f, g, v, m, E;
          if (
            (t && "function" == typeof t.toJSON && (t = t.toJSON()),
            void 0 === (m = JSON.stringify(t, r)))
          )
            return m;
          if (
            ((d = o - i.length - a),
            m.length <= d &&
              (g = m.replace(k, function (e, t) {
                return t || e + " ";
              })).length <= d)
          )
            return g;
          if (
            (null != r && ((t = JSON.parse(m)), (r = void 0)),
            "object" == typeof t && null !== t)
          ) {
            if (((f = i + n), (l = []), (c = 0), Array.isArray(t)))
              for (v = "[", s = "]", d = t.length; c < d; c++)
                l.push(e(t[c], f, c === d - 1 ? 0 : 1) || "null");
            else
              for (
                v = "{", s = "}", d = (u = Object.keys(t)).length;
                c < d;
                c++
              )
                (h = u[c]),
                  (p = JSON.stringify(h) + ": "),
                  void 0 !==
                    (E = e(t[h], f, p.length + (c === d - 1 ? 0 : 1))) &&
                    l.push(p + E);
            if (l.length > 0)
              return [v, n + l.join(",\n" + f), s].join("\n" + i);
          }
          return m;
        })(e, "", 0)
      );
    },
    _ = M;
  function M(e) {
    var t = this;
    if (
      (t instanceof M || (t = new M()),
      (t.tail = null),
      (t.head = null),
      (t.length = 0),
      e && "function" == typeof e.forEach)
    )
      e.forEach(function (e) {
        t.push(e);
      });
    else if (arguments.length > 0)
      for (var n = 0, o = arguments.length; n < o; n++) t.push(arguments[n]);
    return t;
  }
  function j(e, t, n) {
    var o = t === e.head ? new B(n, null, t, e) : new B(n, t, t.next, e);
    return (
      null === o.next && (e.tail = o),
      null === o.prev && (e.head = o),
      e.length++,
      o
    );
  }
  function z(e, t) {
    (e.tail = new B(t, e.tail, null, e)),
      e.head || (e.head = e.tail),
      e.length++;
  }
  function U(e, t) {
    (e.head = new B(t, null, e.head, e)),
      e.tail || (e.tail = e.head),
      e.length++;
  }
  function B(e, t, n, o) {
    if (!(this instanceof B)) return new B(e, t, n, o);
    (this.list = o),
      (this.value = e),
      t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
      n ? ((n.prev = this), (this.next = n)) : (this.next = null);
  }
  (M.Node = B),
    (M.create = M),
    (M.prototype.removeNode = function (e) {
      if (e.list !== this)
        throw new Error("removing node which does not belong to this list");
      var t = e.next,
        n = e.prev;
      return (
        t && (t.prev = n),
        n && (n.next = t),
        e === this.head && (this.head = t),
        e === this.tail && (this.tail = n),
        e.list.length--,
        (e.next = null),
        (e.prev = null),
        (e.list = null),
        t
      );
    }),
    (M.prototype.unshiftNode = function (e) {
      if (e !== this.head) {
        e.list && e.list.removeNode(e);
        var t = this.head;
        (e.list = this),
          (e.next = t),
          t && (t.prev = e),
          (this.head = e),
          this.tail || (this.tail = e),
          this.length++;
      }
    }),
    (M.prototype.pushNode = function (e) {
      if (e !== this.tail) {
        e.list && e.list.removeNode(e);
        var t = this.tail;
        (e.list = this),
          (e.prev = t),
          t && (t.next = e),
          (this.tail = e),
          this.head || (this.head = e),
          this.length++;
      }
    }),
    (M.prototype.push = function () {
      for (var e = 0, t = arguments.length; e < t; e++) z(this, arguments[e]);
      return this.length;
    }),
    (M.prototype.unshift = function () {
      for (var e = 0, t = arguments.length; e < t; e++) U(this, arguments[e]);
      return this.length;
    }),
    (M.prototype.pop = function () {
      if (this.tail) {
        var e = this.tail.value;
        return (
          (this.tail = this.tail.prev),
          this.tail ? (this.tail.next = null) : (this.head = null),
          this.length--,
          e
        );
      }
    }),
    (M.prototype.shift = function () {
      if (this.head) {
        var e = this.head.value;
        return (
          (this.head = this.head.next),
          this.head ? (this.head.prev = null) : (this.tail = null),
          this.length--,
          e
        );
      }
    }),
    (M.prototype.forEach = function (e, t) {
      t = t || this;
      for (var n = this.head, o = 0; null !== n; o++)
        e.call(t, n.value, o, this), (n = n.next);
    }),
    (M.prototype.forEachReverse = function (e, t) {
      t = t || this;
      for (var n = this.tail, o = this.length - 1; null !== n; o--)
        e.call(t, n.value, o, this), (n = n.prev);
    }),
    (M.prototype.get = function (e) {
      for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
      if (t === e && null !== n) return n.value;
    }),
    (M.prototype.getReverse = function (e) {
      for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
      if (t === e && null !== n) return n.value;
    }),
    (M.prototype.map = function (e, t) {
      t = t || this;
      for (var n = new M(), o = this.head; null !== o; )
        n.push(e.call(t, o.value, this)), (o = o.next);
      return n;
    }),
    (M.prototype.mapReverse = function (e, t) {
      t = t || this;
      for (var n = new M(), o = this.tail; null !== o; )
        n.push(e.call(t, o.value, this)), (o = o.prev);
      return n;
    }),
    (M.prototype.reduce = function (e, t) {
      var n,
        o = this.head;
      if (arguments.length > 1) n = t;
      else {
        if (!this.head)
          throw new TypeError("Reduce of empty list with no initial value");
        (o = this.head.next), (n = this.head.value);
      }
      for (var r = 0; null !== o; r++) (n = e(n, o.value, r)), (o = o.next);
      return n;
    }),
    (M.prototype.reduceReverse = function (e, t) {
      var n,
        o = this.tail;
      if (arguments.length > 1) n = t;
      else {
        if (!this.tail)
          throw new TypeError("Reduce of empty list with no initial value");
        (o = this.tail.prev), (n = this.tail.value);
      }
      for (var r = this.length - 1; null !== o; r--)
        (n = e(n, o.value, r)), (o = o.prev);
      return n;
    }),
    (M.prototype.toArray = function () {
      for (
        var e = new Array(this.length), t = 0, n = this.head;
        null !== n;
        t++
      )
        (e[t] = n.value), (n = n.next);
      return e;
    }),
    (M.prototype.toArrayReverse = function () {
      for (
        var e = new Array(this.length), t = 0, n = this.tail;
        null !== n;
        t++
      )
        (e[t] = n.value), (n = n.prev);
      return e;
    }),
    (M.prototype.slice = function (e, t) {
      (t = t || this.length) < 0 && (t += this.length),
        (e = e || 0) < 0 && (e += this.length);
      var n = new M();
      if (t < e || t < 0) return n;
      e < 0 && (e = 0), t > this.length && (t = this.length);
      for (var o = 0, r = this.head; null !== r && o < e; o++) r = r.next;
      for (; null !== r && o < t; o++, r = r.next) n.push(r.value);
      return n;
    }),
    (M.prototype.sliceReverse = function (e, t) {
      (t = t || this.length) < 0 && (t += this.length),
        (e = e || 0) < 0 && (e += this.length);
      var n = new M();
      if (t < e || t < 0) return n;
      e < 0 && (e = 0), t > this.length && (t = this.length);
      for (var o = this.length, r = this.tail; null !== r && o > t; o--)
        r = r.prev;
      for (; null !== r && o > e; o--, r = r.prev) n.push(r.value);
      return n;
    }),
    (M.prototype.splice = function (e, t) {
      e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
      for (var n = 0, o = this.head; null !== o && n < e; n++) o = o.next;
      var r = [];
      for (n = 0; o && n < t; n++) r.push(o.value), (o = this.removeNode(o));
      null === o && (o = this.tail),
        o !== this.head && o !== this.tail && (o = o.prev);
      for (n = 0; n < (arguments.length <= 2 ? 0 : arguments.length - 2); n++)
        o = j(
          this,
          o,
          n + 2 < 2 || arguments.length <= n + 2 ? void 0 : arguments[n + 2]
        );
      return r;
    }),
    (M.prototype.reverse = function () {
      for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
        var o = n.prev;
        (n.prev = n.next), (n.next = o);
      }
      return (this.head = t), (this.tail = e), this;
    });
  try {
    M.prototype[Symbol.iterator] = function* () {
      for (let e = this.head; e; e = e.next) yield e.value;
    };
  } catch (e) {}
  const G = _,
    X = Symbol("max"),
    V = Symbol("length"),
    W = Symbol("lengthCalculator"),
    H = Symbol("allowStale"),
    $ = Symbol("maxAge"),
    q = Symbol("dispose"),
    Y = Symbol("noDisposeOnSet"),
    J = Symbol("lruList"),
    Q = Symbol("cache"),
    Z = Symbol("updateAgeOnGet"),
    K = () => 1;
  const ee = (e, t, n) => {
      const o = e[Q].get(t);
      if (o) {
        const t = o.value;
        if (te(e, t)) {
          if ((oe(e, o), !e[H])) return;
        } else n && (e[Z] && (o.value.now = Date.now()), e[J].unshiftNode(o));
        return t.value;
      }
    },
    te = (e, t) => {
      if (!t || (!t.maxAge && !e[$])) return !1;
      const n = Date.now() - t.now;
      return t.maxAge ? n > t.maxAge : e[$] && n > e[$];
    },
    ne = (e) => {
      if (e[V] > e[X])
        for (let t = e[J].tail; e[V] > e[X] && null !== t; ) {
          const n = t.prev;
          oe(e, t), (t = n);
        }
    },
    oe = (e, t) => {
      if (t) {
        const n = t.value;
        e[q] && e[q](n.key, n.value),
          (e[V] -= n.length),
          e[Q].delete(n.key),
          e[J].removeNode(t);
      }
    };
  class re {
    constructor(e, t, n, o, r) {
      (this.key = e),
        (this.value = t),
        (this.length = n),
        (this.now = o),
        (this.maxAge = r || 0);
    }
  }
  const ie = (e, t, n, o) => {
    let r = n.value;
    te(e, r) && (oe(e, n), e[H] || (r = void 0)),
      r && t.call(o, r.value, r.key, e);
  };
  var ae = class {
    constructor(e) {
      if (
        ("number" == typeof e && (e = { max: e }),
        e || (e = {}),
        e.max && ("number" != typeof e.max || e.max < 0))
      )
        throw new TypeError("max must be a non-negative number");
      this[X] = e.max || 1 / 0;
      const t = e.length || K;
      if (
        ((this[W] = "function" != typeof t ? K : t),
        (this[H] = e.stale || !1),
        e.maxAge && "number" != typeof e.maxAge)
      )
        throw new TypeError("maxAge must be a number");
      (this[$] = e.maxAge || 0),
        (this[q] = e.dispose),
        (this[Y] = e.noDisposeOnSet || !1),
        (this[Z] = e.updateAgeOnGet || !1),
        this.reset();
    }
    set max(e) {
      if ("number" != typeof e || e < 0)
        throw new TypeError("max must be a non-negative number");
      (this[X] = e || 1 / 0), ne(this);
    }
    get max() {
      return this[X];
    }
    set allowStale(e) {
      this[H] = !!e;
    }
    get allowStale() {
      return this[H];
    }
    set maxAge(e) {
      if ("number" != typeof e)
        throw new TypeError("maxAge must be a non-negative number");
      (this[$] = e), ne(this);
    }
    get maxAge() {
      return this[$];
    }
    set lengthCalculator(e) {
      "function" != typeof e && (e = K),
        e !== this[W] &&
          ((this[W] = e),
          (this[V] = 0),
          this[J].forEach((e) => {
            (e.length = this[W](e.value, e.key)), (this[V] += e.length);
          })),
        ne(this);
    }
    get lengthCalculator() {
      return this[W];
    }
    get length() {
      return this[V];
    }
    get itemCount() {
      return this[J].length;
    }
    rforEach(e, t) {
      t = t || this;
      for (let n = this[J].tail; null !== n; ) {
        const o = n.prev;
        ie(this, e, n, t), (n = o);
      }
    }
    forEach(e, t) {
      t = t || this;
      for (let n = this[J].head; null !== n; ) {
        const o = n.next;
        ie(this, e, n, t), (n = o);
      }
    }
    keys() {
      return this[J].toArray().map((e) => e.key);
    }
    values() {
      return this[J].toArray().map((e) => e.value);
    }
    reset() {
      this[q] &&
        this[J] &&
        this[J].length &&
        this[J].forEach((e) => this[q](e.key, e.value)),
        (this[Q] = new Map()),
        (this[J] = new G()),
        (this[V] = 0);
    }
    dump() {
      return this[J].map(
        (e) =>
          !te(this, e) && { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) }
      )
        .toArray()
        .filter((e) => e);
    }
    dumpLru() {
      return this[J];
    }
    set(e, t, n) {
      if ((n = n || this[$]) && "number" != typeof n)
        throw new TypeError("maxAge must be a number");
      const o = n ? Date.now() : 0,
        r = this[W](t, e);
      if (this[Q].has(e)) {
        if (r > this[X]) return oe(this, this[Q].get(e)), !1;
        const i = this[Q].get(e).value;
        return (
          this[q] && (this[Y] || this[q](e, i.value)),
          (i.now = o),
          (i.maxAge = n),
          (i.value = t),
          (this[V] += r - i.length),
          (i.length = r),
          this.get(e),
          ne(this),
          !0
        );
      }
      const i = new re(e, t, r, o, n);
      return i.length > this[X]
        ? (this[q] && this[q](e, t), !1)
        : ((this[V] += i.length),
          this[J].unshift(i),
          this[Q].set(e, this[J].head),
          ne(this),
          !0);
    }
    has(e) {
      if (!this[Q].has(e)) return !1;
      const t = this[Q].get(e).value;
      return !te(this, t);
    }
    get(e) {
      return ee(this, e, !0);
    }
    peek(e) {
      return ee(this, e, !1);
    }
    pop() {
      const e = this[J].tail;
      return e ? (oe(this, e), e.value) : null;
    }
    del(e) {
      oe(this, this[Q].get(e));
    }
    load(e) {
      this.reset();
      const t = Date.now();
      for (let n = e.length - 1; n >= 0; n--) {
        const o = e[n],
          r = o.e || 0;
        if (0 === r) this.set(o.k, o.v);
        else {
          const e = r - t;
          e > 0 && this.set(o.k, o.v, e);
        }
      }
    }
    prune() {
      this[Q].forEach((e, t) => ee(this, t, !1));
    }
  };
  const se = ["includePrerelease", "loose", "rtl"];
  var ce = (e) =>
      e
        ? "object" != typeof e
          ? { loose: !0 }
          : se.filter((t) => e[t]).reduce((e, t) => ((e[t] = !0), e), {})
        : {},
    le = { exports: {} };
  var he = {
    SEMVER_SPEC_VERSION: "2.0.0",
    MAX_LENGTH: 256,
    MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
    MAX_SAFE_COMPONENT_LENGTH: 16,
  };
  const pe =
    "object" == typeof process &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)
      ? function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return console.error("SEMVER", ...t);
        }
      : () => {};
  var ue = pe;
  !(function (e, t) {
    const { MAX_SAFE_COMPONENT_LENGTH: n } = he,
      o = ue,
      r = ((t = e.exports = {}).re = []),
      i = (t.src = []),
      a = (t.t = {});
    let s = 0;
    const c = (e, t, n) => {
      const c = s++;
      o(c, t), (a[e] = c), (i[c] = t), (r[c] = new RegExp(t, n ? "g" : void 0));
    };
    c("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
      c("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
      c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
      c(
        "MAINVERSION",
        "(".concat(i[a.NUMERICIDENTIFIER], ")\\.") +
          "(".concat(i[a.NUMERICIDENTIFIER], ")\\.") +
          "(".concat(i[a.NUMERICIDENTIFIER], ")")
      ),
      c(
        "MAINVERSIONLOOSE",
        "(".concat(i[a.NUMERICIDENTIFIERLOOSE], ")\\.") +
          "(".concat(i[a.NUMERICIDENTIFIERLOOSE], ")\\.") +
          "(".concat(i[a.NUMERICIDENTIFIERLOOSE], ")")
      ),
      c(
        "PRERELEASEIDENTIFIER",
        "(?:"
          .concat(i[a.NUMERICIDENTIFIER], "|")
          .concat(i[a.NONNUMERICIDENTIFIER], ")")
      ),
      c(
        "PRERELEASEIDENTIFIERLOOSE",
        "(?:"
          .concat(i[a.NUMERICIDENTIFIERLOOSE], "|")
          .concat(i[a.NONNUMERICIDENTIFIER], ")")
      ),
      c(
        "PRERELEASE",
        "(?:-("
          .concat(i[a.PRERELEASEIDENTIFIER], "(?:\\.")
          .concat(i[a.PRERELEASEIDENTIFIER], ")*))")
      ),
      c(
        "PRERELEASELOOSE",
        "(?:-?("
          .concat(i[a.PRERELEASEIDENTIFIERLOOSE], "(?:\\.")
          .concat(i[a.PRERELEASEIDENTIFIERLOOSE], ")*))")
      ),
      c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
      c(
        "BUILD",
        "(?:\\+("
          .concat(i[a.BUILDIDENTIFIER], "(?:\\.")
          .concat(i[a.BUILDIDENTIFIER], ")*))")
      ),
      c(
        "FULLPLAIN",
        "v?"
          .concat(i[a.MAINVERSION])
          .concat(i[a.PRERELEASE], "?")
          .concat(i[a.BUILD], "?")
      ),
      c("FULL", "^".concat(i[a.FULLPLAIN], "$")),
      c(
        "LOOSEPLAIN",
        "[v=\\s]*"
          .concat(i[a.MAINVERSIONLOOSE])
          .concat(i[a.PRERELEASELOOSE], "?")
          .concat(i[a.BUILD], "?")
      ),
      c("LOOSE", "^".concat(i[a.LOOSEPLAIN], "$")),
      c("GTLT", "((?:<|>)?=?)"),
      c(
        "XRANGEIDENTIFIERLOOSE",
        "".concat(i[a.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")
      ),
      c("XRANGEIDENTIFIER", "".concat(i[a.NUMERICIDENTIFIER], "|x|X|\\*")),
      c(
        "XRANGEPLAIN",
        "[v=\\s]*(".concat(i[a.XRANGEIDENTIFIER], ")") +
          "(?:\\.(".concat(i[a.XRANGEIDENTIFIER], ")") +
          "(?:\\.(".concat(i[a.XRANGEIDENTIFIER], ")") +
          "(?:".concat(i[a.PRERELEASE], ")?").concat(i[a.BUILD], "?") +
          ")?)?"
      ),
      c(
        "XRANGEPLAINLOOSE",
        "[v=\\s]*(".concat(i[a.XRANGEIDENTIFIERLOOSE], ")") +
          "(?:\\.(".concat(i[a.XRANGEIDENTIFIERLOOSE], ")") +
          "(?:\\.(".concat(i[a.XRANGEIDENTIFIERLOOSE], ")") +
          "(?:".concat(i[a.PRERELEASELOOSE], ")?").concat(i[a.BUILD], "?") +
          ")?)?"
      ),
      c("XRANGE", "^".concat(i[a.GTLT], "\\s*").concat(i[a.XRANGEPLAIN], "$")),
      c(
        "XRANGELOOSE",
        "^".concat(i[a.GTLT], "\\s*").concat(i[a.XRANGEPLAINLOOSE], "$")
      ),
      c(
        "COERCE",
        "".concat("(^|[^\\d])(\\d{1,").concat(n, "})") +
          "(?:\\.(\\d{1,".concat(n, "}))?") +
          "(?:\\.(\\d{1,".concat(n, "}))?") +
          "(?:$|[^\\d])"
      ),
      c("COERCERTL", i[a.COERCE], !0),
      c("LONETILDE", "(?:~>?)"),
      c("TILDETRIM", "(\\s*)".concat(i[a.LONETILDE], "\\s+"), !0),
      (t.tildeTrimReplace = "$1~"),
      c("TILDE", "^".concat(i[a.LONETILDE]).concat(i[a.XRANGEPLAIN], "$")),
      c(
        "TILDELOOSE",
        "^".concat(i[a.LONETILDE]).concat(i[a.XRANGEPLAINLOOSE], "$")
      ),
      c("LONECARET", "(?:\\^)"),
      c("CARETTRIM", "(\\s*)".concat(i[a.LONECARET], "\\s+"), !0),
      (t.caretTrimReplace = "$1^"),
      c("CARET", "^".concat(i[a.LONECARET]).concat(i[a.XRANGEPLAIN], "$")),
      c(
        "CARETLOOSE",
        "^".concat(i[a.LONECARET]).concat(i[a.XRANGEPLAINLOOSE], "$")
      ),
      c(
        "COMPARATORLOOSE",
        "^".concat(i[a.GTLT], "\\s*(").concat(i[a.LOOSEPLAIN], ")$|^$")
      ),
      c(
        "COMPARATOR",
        "^".concat(i[a.GTLT], "\\s*(").concat(i[a.FULLPLAIN], ")$|^$")
      ),
      c(
        "COMPARATORTRIM",
        "(\\s*)"
          .concat(i[a.GTLT], "\\s*(")
          .concat(i[a.LOOSEPLAIN], "|")
          .concat(i[a.XRANGEPLAIN], ")"),
        !0
      ),
      (t.comparatorTrimReplace = "$1$2$3"),
      c(
        "HYPHENRANGE",
        "^\\s*(".concat(i[a.XRANGEPLAIN], ")") +
          "\\s+-\\s+" +
          "(".concat(i[a.XRANGEPLAIN], ")") +
          "\\s*$"
      ),
      c(
        "HYPHENRANGELOOSE",
        "^\\s*(".concat(i[a.XRANGEPLAINLOOSE], ")") +
          "\\s+-\\s+" +
          "(".concat(i[a.XRANGEPLAINLOOSE], ")") +
          "\\s*$"
      ),
      c("STAR", "(<|>)?=?\\s*\\*"),
      c("GTE0", "^\\s*>=\\s*0.0.0\\s*$"),
      c("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
  })(le, le.exports);
  const de = /^[0-9]+$/,
    fe = (e, t) => {
      const n = de.test(e),
        o = de.test(t);
      return (
        n && o && ((e = +e), (t = +t)),
        e === t ? 0 : n && !o ? -1 : o && !n ? 1 : e < t ? -1 : 1
      );
    };
  var ge = { compareIdentifiers: fe, rcompareIdentifiers: (e, t) => fe(t, e) };
  const ve = ue,
    { MAX_LENGTH: me, MAX_SAFE_INTEGER: Ee } = he,
    { re: be, t: ye } = le.exports,
    we = ce,
    { compareIdentifiers: Oe } = ge;
  class Ae {
    constructor(e, t) {
      if (((t = we(t)), e instanceof Ae)) {
        if (
          e.loose === !!t.loose &&
          e.includePrerelease === !!t.includePrerelease
        )
          return e;
        e = e.version;
      } else if ("string" != typeof e) throw new TypeError("Invalid Version: ".concat(e));
      if (e.length > me)
        throw new TypeError(
          "version is longer than ".concat(me, " characters")
        );
      ve("SemVer", e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        (this.includePrerelease = !!t.includePrerelease);
      const n = e.trim().match(t.loose ? be[ye.LOOSE] : be[ye.FULL]);
      if (!n) throw new TypeError("Invalid Version: ".concat(e));
      if (
        ((this.raw = e),
        (this.major = +n[1]),
        (this.minor = +n[2]),
        (this.patch = +n[3]),
        this.major > Ee || this.major < 0)
      )
        throw new TypeError("Invalid major version");
      if (this.minor > Ee || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > Ee || this.patch < 0)
        throw new TypeError("Invalid patch version");
      n[4]
        ? (this.prerelease = n[4].split(".").map((e) => {
            if (/^[0-9]+$/.test(e)) {
              const t = +e;
              if (t >= 0 && t < Ee) return t;
            }
            return e;
          }))
        : (this.prerelease = []),
        (this.build = n[5] ? n[5].split(".") : []),
        this.format();
    }
    format() {
      return (
        (this.version = ""
          .concat(this.major, ".")
          .concat(this.minor, ".")
          .concat(this.patch)),
        this.prerelease.length &&
          (this.version += "-".concat(this.prerelease.join("."))),
        this.version
      );
    }
    toString() {
      return this.version;
    }
    compare(e) {
      if (
        (ve("SemVer.compare", this.version, this.options, e),
        !(e instanceof Ae))
      ) {
        if ("string" == typeof e && e === this.version) return 0;
        e = new Ae(e, this.options);
      }
      return e.version === this.version
        ? 0
        : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
      return (
        e instanceof Ae || (e = new Ae(e, this.options)),
        Oe(this.major, e.major) ||
          Oe(this.minor, e.minor) ||
          Oe(this.patch, e.patch)
      );
    }
    comparePre(e) {
      if (
        (e instanceof Ae || (e = new Ae(e, this.options)),
        this.prerelease.length && !e.prerelease.length)
      )
        return -1;
      if (!this.prerelease.length && e.prerelease.length) return 1;
      if (!this.prerelease.length && !e.prerelease.length) return 0;
      let t = 0;
      do {
        const n = this.prerelease[t],
          o = e.prerelease[t];
        if ((ve("prerelease compare", t, n, o), void 0 === n && void 0 === o))
          return 0;
        if (void 0 === o) return 1;
        if (void 0 === n) return -1;
        if (n !== o) return Oe(n, o);
      } while (++t);
    }
    compareBuild(e) {
      e instanceof Ae || (e = new Ae(e, this.options));
      let t = 0;
      do {
        const n = this.build[t],
          o = e.build[t];
        if ((ve("prerelease compare", t, n, o), void 0 === n && void 0 === o))
          return 0;
        if (void 0 === o) return 1;
        if (void 0 === n) return -1;
        if (n !== o) return Oe(n, o);
      } while (++t);
    }
    inc(e, t) {
      switch (e) {
        case "premajor":
          (this.prerelease.length = 0),
            (this.patch = 0),
            (this.minor = 0),
            this.major++,
            this.inc("pre", t);
          break;
        case "preminor":
          (this.prerelease.length = 0),
            (this.patch = 0),
            this.minor++,
            this.inc("pre", t);
          break;
        case "prepatch":
          (this.prerelease.length = 0),
            this.inc("patch", t),
            this.inc("pre", t);
          break;
        case "prerelease":
          0 === this.prerelease.length && this.inc("patch", t),
            this.inc("pre", t);
          break;
        case "major":
          (0 === this.minor &&
            0 === this.patch &&
            0 !== this.prerelease.length) ||
            this.major++,
            (this.minor = 0),
            (this.patch = 0),
            (this.prerelease = []);
          break;
        case "minor":
          (0 === this.patch && 0 !== this.prerelease.length) || this.minor++,
            (this.patch = 0),
            (this.prerelease = []);
          break;
        case "patch":
          0 === this.prerelease.length && this.patch++, (this.prerelease = []);
          break;
        case "pre":
          if (0 === this.prerelease.length) this.prerelease = [0];
          else {
            let e = this.prerelease.length;
            for (; --e >= 0; )
              "number" == typeof this.prerelease[e] &&
                (this.prerelease[e]++, (e = -2));
            -1 === e && this.prerelease.push(0);
          }
          t &&
            (this.prerelease[0] === t
              ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
              : (this.prerelease = [t, 0]));
          break;
        default:
          throw new Error("invalid increment argument: ".concat(e));
      }
      return this.format(), (this.raw = this.version), this;
    }
  }
  var xe = Ae;
  const Ie = xe;
  var Ne = (e, t, n) => new Ie(e, n).compare(new Ie(t, n));
  const Re = Ne;
  const Te = Ne;
  const Le = Ne;
  const Se = Ne;
  const De = Ne;
  const Ce = Ne;
  const Fe = (e, t, n) => 0 === Re(e, t, n),
    ke = (e, t, n) => 0 !== Te(e, t, n),
    Pe = (e, t, n) => Le(e, t, n) > 0,
    _e = (e, t, n) => Se(e, t, n) >= 0,
    Me = (e, t, n) => De(e, t, n) < 0,
    je = (e, t, n) => Ce(e, t, n) <= 0;
  var ze = (e, t, n, o) => {
    switch (t) {
      case "===":
        return (
          "object" == typeof e && (e = e.version),
          "object" == typeof n && (n = n.version),
          e === n
        );
      case "!==":
        return (
          "object" == typeof e && (e = e.version),
          "object" == typeof n && (n = n.version),
          e !== n
        );
      case "":
      case "=":
      case "==":
        return Fe(e, n, o);
      case "!=":
        return ke(e, n, o);
      case ">":
        return Pe(e, n, o);
      case ">=":
        return _e(e, n, o);
      case "<":
        return Me(e, n, o);
      case "<=":
        return je(e, n, o);
      default:
        throw new TypeError("Invalid operator: ".concat(t));
    }
  };
  const Ue = Symbol("SemVer ANY");
  class Be {
    static get ANY() {
      return Ue;
    }
    constructor(e, t) {
      if (((t = Xe(t)), e instanceof Be)) {
        if (e.loose === !!t.loose) return e;
        e = e.value;
      }
      $e("comparator", e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        this.parse(e),
        this.semver === Ue
          ? (this.value = "")
          : (this.value = this.operator + this.semver.version),
        $e("comp", this);
    }
    parse(e) {
      const t = this.options.loose ? Ve[We.COMPARATORLOOSE] : Ve[We.COMPARATOR],
        n = e.match(t);
      if (!n) throw new TypeError("Invalid comparator: ".concat(e));
      (this.operator = void 0 !== n[1] ? n[1] : ""),
        "=" === this.operator && (this.operator = ""),
        n[2]
          ? (this.semver = new qe(n[2], this.options.loose))
          : (this.semver = Ue);
    }
    toString() {
      return this.value;
    }
    test(e) {
      if (
        ($e("Comparator.test", e, this.options.loose),
        this.semver === Ue || e === Ue)
      )
        return !0;
      if ("string" == typeof e)
        try {
          e = new qe(e, this.options);
        } catch (e) {
          return !1;
        }
      return He(e, this.operator, this.semver, this.options);
    }
    intersects(e, t) {
      if (!(e instanceof Be)) throw new TypeError("a Comparator is required");
      if (
        ((t && "object" == typeof t) ||
          (t = { loose: !!t, includePrerelease: !1 }),
        "" === this.operator)
      )
        return "" === this.value || new Ye(e.value, t).test(this.value);
      if ("" === e.operator)
        return "" === e.value || new Ye(this.value, t).test(e.semver);
      const n = !(
          (">=" !== this.operator && ">" !== this.operator) ||
          (">=" !== e.operator && ">" !== e.operator)
        ),
        o = !(
          ("<=" !== this.operator && "<" !== this.operator) ||
          ("<=" !== e.operator && "<" !== e.operator)
        ),
        r = this.semver.version === e.semver.version,
        i = !(
          (">=" !== this.operator && "<=" !== this.operator) ||
          (">=" !== e.operator && "<=" !== e.operator)
        ),
        a =
          He(this.semver, "<", e.semver, t) &&
          (">=" === this.operator || ">" === this.operator) &&
          ("<=" === e.operator || "<" === e.operator),
        s =
          He(this.semver, ">", e.semver, t) &&
          ("<=" === this.operator || "<" === this.operator) &&
          (">=" === e.operator || ">" === e.operator);
      return n || o || (r && i) || a || s;
    }
  }
  var Ge = Be;
  const Xe = ce,
    { re: Ve, t: We } = le.exports,
    He = ze,
    $e = ue,
    qe = xe,
    Ye = Qe;
  class Je {
    constructor(e, t) {
      if (((t = Ke(t)), e instanceof Je))
        return e.loose === !!t.loose &&
          e.includePrerelease === !!t.includePrerelease
          ? e
          : new Je(e.raw, t);
      if (e instanceof et)
        return (this.raw = e.value), (this.set = [[e]]), this.format(), this;
      if (
        ((this.options = t),
        (this.loose = !!t.loose),
        (this.includePrerelease = !!t.includePrerelease),
        (this.raw = e),
        (this.set = e
          .split(/\s*\|\|\s*/)
          .map((e) => this.parseRange(e.trim()))
          .filter((e) => e.length)),
        !this.set.length)
      )
        throw new TypeError("Invalid SemVer Range: ".concat(e));
      if (this.set.length > 1) {
        const e = this.set[0];
        if (
          ((this.set = this.set.filter((e) => !ct(e[0]))),
          0 === this.set.length)
        )
          this.set = [e];
        else if (this.set.length > 1)
          for (const e of this.set)
            if (1 === e.length && lt(e[0])) {
              this.set = [e];
              break;
            }
      }
      this.format();
    }
    format() {
      return (
        (this.range = this.set
          .map((e) => e.join(" ").trim())
          .join("||")
          .trim()),
        this.range
      );
    }
    toString() {
      return this.range;
    }
    parseRange(e) {
      e = e.trim();
      const t = Object.keys(this.options).join(","),
        n = "parseRange:".concat(t, ":").concat(e),
        o = Ze.get(n);
      if (o) return o;
      const r = this.options.loose,
        i = r ? ot[rt.HYPHENRANGELOOSE] : ot[rt.HYPHENRANGE];
      (e = e.replace(i, wt(this.options.includePrerelease))),
        tt("hyphen replace", e),
        (e = e.replace(ot[rt.COMPARATORTRIM], it)),
        tt("comparator trim", e, ot[rt.COMPARATORTRIM]),
        (e = (e = (e = e.replace(ot[rt.TILDETRIM], at)).replace(
          ot[rt.CARETTRIM],
          st
        ))
          .split(/\s+/)
          .join(" "));
      const a = r ? ot[rt.COMPARATORLOOSE] : ot[rt.COMPARATOR],
        s = e
          .split(" ")
          .map((e) => pt(e, this.options))
          .join(" ")
          .split(/\s+/)
          .map((e) => yt(e, this.options))
          .filter(this.options.loose ? (e) => !!e.match(a) : () => !0)
          .map((e) => new et(e, this.options));
      s.length;
      const c = new Map();
      for (const e of s) {
        if (ct(e)) return [e];
        c.set(e.value, e);
      }
      c.size > 1 && c.has("") && c.delete("");
      const l = [...c.values()];
      return Ze.set(n, l), l;
    }
    intersects(e, t) {
      if (!(e instanceof Je)) throw new TypeError("a Range is required");
      return this.set.some(
        (n) =>
          ht(n, t) &&
          e.set.some(
            (e) =>
              ht(e, t) && n.every((n) => e.every((e) => n.intersects(e, t)))
          )
      );
    }
    test(e) {
      if (!e) return !1;
      if ("string" == typeof e)
        try {
          e = new nt(e, this.options);
        } catch (e) {
          return !1;
        }
      for (let t = 0; t < this.set.length; t++)
        if (Ot(this.set[t], e, this.options)) return !0;
      return !1;
    }
  }
  var Qe = Je;
  const Ze = new ae({ max: 1e3 }),
    Ke = ce,
    et = Ge,
    tt = ue,
    nt = xe,
    {
      re: ot,
      t: rt,
      comparatorTrimReplace: it,
      tildeTrimReplace: at,
      caretTrimReplace: st,
    } = le.exports,
    ct = (e) => "<0.0.0-0" === e.value,
    lt = (e) => "" === e.value,
    ht = (e, t) => {
      let n = !0;
      const o = e.slice();
      let r = o.pop();
      for (; n && o.length; )
        (n = o.every((e) => r.intersects(e, t))), (r = o.pop());
      return n;
    },
    pt = (e, t) => (
      tt("comp", e, t),
      (e = gt(e, t)),
      tt("caret", e),
      (e = dt(e, t)),
      tt("tildes", e),
      (e = mt(e, t)),
      tt("xrange", e),
      (e = bt(e, t)),
      tt("stars", e),
      e
    ),
    ut = (e) => !e || "x" === e.toLowerCase() || "*" === e,
    dt = (e, t) =>
      e
        .trim()
        .split(/\s+/)
        .map((e) => ft(e, t))
        .join(" "),
    ft = (e, t) => {
      const n = t.loose ? ot[rt.TILDELOOSE] : ot[rt.TILDE];
      return e.replace(n, (t, n, o, r, i) => {
        let a;
        return (
          tt("tilde", e, t, n, o, r, i),
          ut(n)
            ? (a = "")
            : ut(o)
            ? (a = ">=".concat(n, ".0.0 <").concat(+n + 1, ".0.0-0"))
            : ut(r)
            ? (a = ">="
                .concat(n, ".")
                .concat(o, ".0 <")
                .concat(n, ".")
                .concat(+o + 1, ".0-0"))
            : i
            ? (tt("replaceTilde pr", i),
              (a = ">="
                .concat(n, ".")
                .concat(o, ".")
                .concat(r, "-")
                .concat(i, " <")
                .concat(n, ".")
                .concat(+o + 1, ".0-0")))
            : (a = ">="
                .concat(n, ".")
                .concat(o, ".")
                .concat(r, " <")
                .concat(n, ".")
                .concat(+o + 1, ".0-0")),
          tt("tilde return", a),
          a
        );
      });
    },
    gt = (e, t) =>
      e
        .trim()
        .split(/\s+/)
        .map((e) => vt(e, t))
        .join(" "),
    vt = (e, t) => {
      tt("caret", e, t);
      const n = t.loose ? ot[rt.CARETLOOSE] : ot[rt.CARET],
        o = t.includePrerelease ? "-0" : "";
      return e.replace(n, (t, n, r, i, a) => {
        let s;
        return (
          tt("caret", e, t, n, r, i, a),
          ut(n)
            ? (s = "")
            : ut(r)
            ? (s = ">="
                .concat(n, ".0.0")
                .concat(o, " <")
                .concat(+n + 1, ".0.0-0"))
            : ut(i)
            ? (s =
                "0" === n
                  ? ">="
                      .concat(n, ".")
                      .concat(r, ".0")
                      .concat(o, " <")
                      .concat(n, ".")
                      .concat(+r + 1, ".0-0")
                  : ">="
                      .concat(n, ".")
                      .concat(r, ".0")
                      .concat(o, " <")
                      .concat(+n + 1, ".0.0-0"))
            : a
            ? (tt("replaceCaret pr", a),
              (s =
                "0" === n
                  ? "0" === r
                    ? ">="
                        .concat(n, ".")
                        .concat(r, ".")
                        .concat(i, "-")
                        .concat(a, " <")
                        .concat(n, ".")
                        .concat(r, ".")
                        .concat(+i + 1, "-0")
                    : ">="
                        .concat(n, ".")
                        .concat(r, ".")
                        .concat(i, "-")
                        .concat(a, " <")
                        .concat(n, ".")
                        .concat(+r + 1, ".0-0")
                  : ">="
                      .concat(n, ".")
                      .concat(r, ".")
                      .concat(i, "-")
                      .concat(a, " <")
                      .concat(+n + 1, ".0.0-0")))
            : (tt("no pr"),
              (s =
                "0" === n
                  ? "0" === r
                    ? ">="
                        .concat(n, ".")
                        .concat(r, ".")
                        .concat(i)
                        .concat(o, " <")
                        .concat(n, ".")
                        .concat(r, ".")
                        .concat(+i + 1, "-0")
                    : ">="
                        .concat(n, ".")
                        .concat(r, ".")
                        .concat(i)
                        .concat(o, " <")
                        .concat(n, ".")
                        .concat(+r + 1, ".0-0")
                  : ">="
                      .concat(n, ".")
                      .concat(r, ".")
                      .concat(i, " <")
                      .concat(+n + 1, ".0.0-0"))),
          tt("caret return", s),
          s
        );
      });
    },
    mt = (e, t) => (
      tt("replaceXRanges", e, t),
      e
        .split(/\s+/)
        .map((e) => Et(e, t))
        .join(" ")
    ),
    Et = (e, t) => {
      e = e.trim();
      const n = t.loose ? ot[rt.XRANGELOOSE] : ot[rt.XRANGE];
      return e.replace(n, (n, o, r, i, a, s) => {
        tt("xRange", e, n, o, r, i, a, s);
        const c = ut(r),
          l = c || ut(i),
          h = l || ut(a),
          p = h;
        return (
          "=" === o && p && (o = ""),
          (s = t.includePrerelease ? "-0" : ""),
          c
            ? (n = ">" === o || "<" === o ? "<0.0.0-0" : "*")
            : o && p
            ? (l && (i = 0),
              (a = 0),
              ">" === o
                ? ((o = ">="),
                  l
                    ? ((r = +r + 1), (i = 0), (a = 0))
                    : ((i = +i + 1), (a = 0)))
                : "<=" === o && ((o = "<"), l ? (r = +r + 1) : (i = +i + 1)),
              "<" === o && (s = "-0"),
              (n = ""
                .concat(o + r, ".")
                .concat(i, ".")
                .concat(a)
                .concat(s)))
            : l
            ? (n = ">="
                .concat(r, ".0.0")
                .concat(s, " <")
                .concat(+r + 1, ".0.0-0"))
            : h &&
              (n = ">="
                .concat(r, ".")
                .concat(i, ".0")
                .concat(s, " <")
                .concat(r, ".")
                .concat(+i + 1, ".0-0")),
          tt("xRange return", n),
          n
        );
      });
    },
    bt = (e, t) => (
      tt("replaceStars", e, t), e.trim().replace(ot[rt.STAR], "")
    ),
    yt = (e, t) => (
      tt("replaceGTE0", e, t),
      e.trim().replace(ot[t.includePrerelease ? rt.GTE0PRE : rt.GTE0], "")
    ),
    wt = (e) => (t, n, o, r, i, a, s, c, l, h, p, u, d) => (
      (n = ut(o)
        ? ""
        : ut(r)
        ? ">=".concat(o, ".0.0").concat(e ? "-0" : "")
        : ut(i)
        ? ">="
            .concat(o, ".")
            .concat(r, ".0")
            .concat(e ? "-0" : "")
        : a
        ? ">=".concat(n)
        : ">=".concat(n).concat(e ? "-0" : "")),
      (c = ut(l)
        ? ""
        : ut(h)
        ? "<".concat(+l + 1, ".0.0-0")
        : ut(p)
        ? "<".concat(l, ".").concat(+h + 1, ".0-0")
        : u
        ? "<=".concat(l, ".").concat(h, ".").concat(p, "-").concat(u)
        : e
        ? "<"
            .concat(l, ".")
            .concat(h, ".")
            .concat(+p + 1, "-0")
        : "<=".concat(c)),
      "".concat(n, " ").concat(c).trim()
    ),
    Ot = (e, t, n) => {
      for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
      if (t.prerelease.length && !n.includePrerelease) {
        for (let n = 0; n < e.length; n++)
          if (
            (tt(e[n].semver),
            e[n].semver !== et.ANY && e[n].semver.prerelease.length > 0)
          ) {
            const o = e[n].semver;
            if (
              o.major === t.major &&
              o.minor === t.minor &&
              o.patch === t.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    },
    At = Qe;
  var xt = (e, t, n) => {
    try {
      t = new At(t, n);
    } catch (e) {
      return !1;
    }
    return t.test(e);
  };
  var It = {
      NaN: NaN,
      E: Math.E,
      LN2: Math.LN2,
      LN10: Math.LN10,
      LOG2E: Math.LOG2E,
      LOG10E: Math.LOG10E,
      PI: Math.PI,
      SQRT1_2: Math.SQRT1_2,
      SQRT2: Math.SQRT2,
      MIN_VALUE: Number.MIN_VALUE,
      MAX_VALUE: Number.MAX_VALUE,
    },
    Nt = {
      "*": (e, t) => e * t,
      "+": (e, t) => e + t,
      "-": (e, t) => e - t,
      "/": (e, t) => e / t,
      "%": (e, t) => e % t,
      ">": (e, t) => e > t,
      "<": (e, t) => e < t,
      "<=": (e, t) => e <= t,
      ">=": (e, t) => e >= t,
      "==": (e, t) => e == t,
      "!=": (e, t) => e != t,
      "===": (e, t) => e === t,
      "!==": (e, t) => e !== t,
      "&": (e, t) => e & t,
      "|": (e, t) => e | t,
      "^": (e, t) => e ^ t,
      "<<": (e, t) => e << t,
      ">>": (e, t) => e >> t,
      ">>>": (e, t) => e >>> t,
    },
    Rt = { "+": (e) => +e, "-": (e) => -e, "~": (e) => ~e, "!": (e) => !e };
  const Tt = Array.prototype.slice,
    Lt = (e, t, n) => {
      const o = n ? n(t[0]) : t[0];
      return o[e].apply(o, Tt.call(t, 1));
    };
  var St = {
    isNaN: Number.isNaN,
    isFinite: Number.isFinite,
    abs: Math.abs,
    acos: Math.acos,
    asin: Math.asin,
    atan: Math.atan,
    atan2: Math.atan2,
    ceil: Math.ceil,
    cos: Math.cos,
    exp: Math.exp,
    floor: Math.floor,
    log: Math.log,
    max: Math.max,
    min: Math.min,
    pow: Math.pow,
    random: Math.random,
    round: Math.round,
    sin: Math.sin,
    sqrt: Math.sqrt,
    tan: Math.tan,
    clamp: (e, t, n) => Math.max(t, Math.min(n, e)),
    now: Date.now,
    utc: Date.UTC,
    datetime: (e, t, n, o, r, i, a) =>
      new Date(e, t || 0, null != n ? n : 1, o || 0, r || 0, i || 0, a || 0),
    date: (e) => new Date(e).getDate(),
    day: (e) => new Date(e).getDay(),
    year: (e) => new Date(e).getFullYear(),
    month: (e) => new Date(e).getMonth(),
    hours: (e) => new Date(e).getHours(),
    minutes: (e) => new Date(e).getMinutes(),
    seconds: (e) => new Date(e).getSeconds(),
    milliseconds: (e) => new Date(e).getMilliseconds(),
    time: (e) => new Date(e).getTime(),
    timezoneoffset: (e) => new Date(e).getTimezoneOffset(),
    utcdate: (e) => new Date(e).getUTCDate(),
    utcday: (e) => new Date(e).getUTCDay(),
    utcyear: (e) => new Date(e).getUTCFullYear(),
    utcmonth: (e) => new Date(e).getUTCMonth(),
    utchours: (e) => new Date(e).getUTCHours(),
    utcminutes: (e) => new Date(e).getUTCMinutes(),
    utcseconds: (e) => new Date(e).getUTCSeconds(),
    utcmilliseconds: (e) => new Date(e).getUTCMilliseconds(),
    length: (e) => e.length,
    join: function () {
      return Lt("join", arguments);
    },
    indexof: function () {
      return Lt("indexOf", arguments);
    },
    lastindexof: function () {
      return Lt("lastIndexOf", arguments);
    },
    slice: function () {
      return Lt("slice", arguments);
    },
    reverse: (e) => e.slice().reverse(),
    parseFloat: parseFloat,
    parseInt: parseInt,
    upper: (e) => String(e).toUpperCase(),
    lower: (e) => String(e).toLowerCase(),
    substring: function () {
      return Lt("substring", arguments, String);
    },
    split: function () {
      return Lt("split", arguments, String);
    },
    replace: function () {
      return Lt("replace", arguments, String);
    },
    trim: (e) => String(e).trim(),
    regexp: RegExp,
    test: (e, t) => RegExp(e).test(t),
  };
  const Dt = ["view", "item", "group", "xy", "x", "y"],
    Ct = {
      Literal: (e, t) => t.value,
      Identifier: (e, t) => {
        const n = t.name;
        return e.memberDepth > 0
          ? n
          : "datum" === n
          ? e.datum
          : "event" === n
          ? e.event
          : "item" === n
          ? e.item
          : It[n] || e.params["$" + n];
      },
      MemberExpression: (e, t) => {
        const n = !t.computed,
          o = e(t.object);
        n && (e.memberDepth += 1);
        const r = e(t.property);
        return n && (e.memberDepth -= 1), o[r];
      },
      CallExpression: (e, t) => {
        const n = t.arguments;
        let o = t.callee.name;
        return (
          o.startsWith("_") && (o = o.slice(1)),
          "if" === o
            ? e(n[0])
              ? e(n[1])
              : e(n[2])
            : (e.fn[o] || St[o]).apply(e.fn, n.map(e))
        );
      },
      ArrayExpression: (e, t) => t.elements.map(e),
      BinaryExpression: (e, t) => Nt[t.operator](e(t.left), e(t.right)),
      UnaryExpression: (e, t) => Rt[t.operator](e(t.argument)),
      ConditionalExpression: (e, t) =>
        e(t.test) ? e(t.consequent) : e(t.alternate),
      LogicalExpression: (e, t) =>
        "&&" === t.operator ? e(t.left) && e(t.right) : e(t.left) || e(t.right),
      ObjectExpression: (e, t) =>
        t.properties.reduce((t, n) => {
          e.memberDepth += 1;
          const o = e(n.key);
          return (e.memberDepth -= 1), (t[o] = e(n.value)), t;
        }, {}),
    };
  function Ft(e, t, n, o, r, i) {
    const a = (e) => Ct[e.type](a, e);
    return (
      (a.memberDepth = 0),
      (a.fn = Object.create(t)),
      (a.params = n),
      (a.datum = o),
      (a.event = r),
      (a.item = i),
      Dt.forEach(
        (e) =>
          (a.fn[e] = function () {
            return r.vega[e](...arguments);
          })
      ),
      a(e)
    );
  }
  var kt = {
    operator(e, t) {
      const n = t.ast,
        o = e.functions;
      return (e) => Ft(n, o, e);
    },
    parameter(e, t) {
      const n = t.ast,
        o = e.functions;
      return (e, t) => Ft(n, o, t, e);
    },
    event(e, t) {
      const n = t.ast,
        o = e.functions;
      return (e) => Ft(n, o, void 0, void 0, e);
    },
    handler(e, t) {
      const n = t.ast,
        o = e.functions;
      return (e, t) => {
        const r = t.item && t.item.datum;
        return Ft(n, o, e, r, t);
      };
    },
    encode(e, t) {
      const { marktype: n, channels: o } = t,
        r = e.functions,
        i = "group" === n || "image" === n || "rect" === n;
      return (e, t) => {
        const a = e.datum;
        let s,
          c = 0;
        for (const n in o)
          (s = Ft(o[n].ast, r, t, a, void 0, e)),
            e[n] !== s && ((e[n] = s), (c = 1));
        return (
          "rule" !== n &&
            (function (e, t, n) {
              let o;
              t.x2 &&
                (t.x
                  ? (n && e.x > e.x2 && ((o = e.x), (e.x = e.x2), (e.x2 = o)),
                    (e.width = e.x2 - e.x))
                  : (e.x = e.x2 - (e.width || 0))),
                t.xc && (e.x = e.xc - (e.width || 0) / 2),
                t.y2 &&
                  (t.y
                    ? (n && e.y > e.y2 && ((o = e.y), (e.y = e.y2), (e.y2 = o)),
                      (e.height = e.y2 - e.y))
                    : (e.y = e.y2 - (e.height || 0))),
                t.yc && (e.y = e.yc - (e.height || 0) / 2);
            })(e, o, i),
          c
        );
      };
    },
  };
  function Pt(e) {
    const [t, n] = /schema\/([\w-]+)\/([\w\.\-]+)\.json$/g.exec(e).slice(1, 3);
    return { library: t, version: n };
  }
  const _t = "#fff",
    Mt = {
      background: "#333",
      title: { color: _t, subtitleColor: _t },
      style: { "guide-label": { fill: _t }, "guide-title": { fill: _t } },
      axis: { domainColor: _t, gridColor: "#888", tickColor: _t },
    },
    jt = "#4572a7",
    zt = {
      background: "#fff",
      arc: { fill: jt },
      area: { fill: jt },
      line: { stroke: jt, strokeWidth: 2 },
      path: { stroke: jt },
      rect: { fill: jt },
      shape: { stroke: jt },
      symbol: { fill: jt, strokeWidth: 1.5, size: 50 },
      axis: {
        bandPosition: 0.5,
        grid: !0,
        gridColor: "#000000",
        gridOpacity: 1,
        gridWidth: 0.5,
        labelPadding: 10,
        tickSize: 5,
        tickWidth: 0.5,
      },
      axisBand: { grid: !1, tickExtra: !0 },
      legend: {
        labelBaseline: "middle",
        labelFontSize: 11,
        symbolSize: 50,
        symbolType: "square",
      },
      range: {
        category: [
          "#4572a7",
          "#aa4643",
          "#8aa453",
          "#71598e",
          "#4598ae",
          "#d98445",
          "#94aace",
          "#d09393",
          "#b9cc98",
          "#a99cbc",
        ],
      },
    },
    Ut = "#30a2da",
    Bt = "#cbcbcb",
    Gt = "#f0f0f0",
    Xt = "#333",
    Vt = {
      arc: { fill: Ut },
      area: { fill: Ut },
      axis: {
        domainColor: Bt,
        grid: !0,
        gridColor: Bt,
        gridWidth: 1,
        labelColor: "#999",
        labelFontSize: 10,
        titleColor: "#333",
        tickColor: Bt,
        tickSize: 10,
        titleFontSize: 14,
        titlePadding: 10,
        labelPadding: 4,
      },
      axisBand: { grid: !1 },
      background: Gt,
      group: { fill: Gt },
      legend: {
        labelColor: Xt,
        labelFontSize: 11,
        padding: 1,
        symbolSize: 30,
        symbolType: "square",
        titleColor: Xt,
        titleFontSize: 14,
        titlePadding: 10,
      },
      line: { stroke: Ut, strokeWidth: 2 },
      path: { stroke: Ut, strokeWidth: 0.5 },
      rect: { fill: Ut },
      range: {
        category: [
          "#30a2da",
          "#fc4f30",
          "#e5ae38",
          "#6d904f",
          "#8b8b8b",
          "#b96db8",
          "#ff9e27",
          "#56cc60",
          "#52d2ca",
          "#52689e",
          "#545454",
          "#9fe4f8",
        ],
        diverging: [
          "#cc0020",
          "#e77866",
          "#f6e7e1",
          "#d6e8ed",
          "#91bfd9",
          "#1d78b5",
        ],
        heatmap: ["#d6e8ed", "#cee0e5", "#91bfd9", "#549cc6", "#1d78b5"],
      },
      point: { filled: !0, shape: "circle" },
      shape: { stroke: Ut },
      bar: { binSpacing: 2, fill: Ut, stroke: null },
      title: { anchor: "start", fontSize: 24, fontWeight: 600, offset: 20 },
    },
    Wt = "#000",
    Ht = {
      group: { fill: "#e5e5e5" },
      arc: { fill: Wt },
      area: { fill: Wt },
      line: { stroke: Wt },
      path: { stroke: Wt },
      rect: { fill: Wt },
      shape: { stroke: Wt },
      symbol: { fill: Wt, size: 40 },
      axis: {
        domain: !1,
        grid: !0,
        gridColor: "#FFFFFF",
        gridOpacity: 1,
        labelColor: "#7F7F7F",
        labelPadding: 4,
        tickColor: "#7F7F7F",
        tickSize: 5.67,
        titleFontSize: 16,
        titleFontWeight: "normal",
      },
      legend: { labelBaseline: "middle", labelFontSize: 11, symbolSize: 40 },
      range: {
        category: [
          "#000000",
          "#7F7F7F",
          "#1A1A1A",
          "#999999",
          "#333333",
          "#B0B0B0",
          "#4D4D4D",
          "#C9C9C9",
          "#666666",
          "#DCDCDC",
        ],
      },
    },
    $t = "Benton Gothic, sans-serif",
    qt = "#82c6df",
    Yt = "Benton Gothic Bold, sans-serif",
    Jt = "normal",
    Qt = {
      "category-6": [
        "#ec8431",
        "#829eb1",
        "#c89d29",
        "#3580b1",
        "#adc839",
        "#ab7fb4",
      ],
      "fire-7": [
        "#fbf2c7",
        "#f9e39c",
        "#f8d36e",
        "#f4bb6a",
        "#e68a4f",
        "#d15a40",
        "#ab4232",
      ],
      "fireandice-6": [
        "#e68a4f",
        "#f4bb6a",
        "#f9e39c",
        "#dadfe2",
        "#a6b7c6",
        "#849eae",
      ],
      "ice-7": [
        "#edefee",
        "#dadfe2",
        "#c4ccd2",
        "#a6b7c6",
        "#849eae",
        "#607785",
        "#47525d",
      ],
    },
    Zt = {
      background: "#ffffff",
      title: {
        anchor: "start",
        color: "#000000",
        font: Yt,
        fontSize: 22,
        fontWeight: "normal",
      },
      arc: { fill: qt },
      area: { fill: qt },
      line: { stroke: qt, strokeWidth: 2 },
      path: { stroke: qt },
      rect: { fill: qt },
      shape: { stroke: qt },
      symbol: { fill: qt, size: 30 },
      axis: {
        labelFont: $t,
        labelFontSize: 11.5,
        labelFontWeight: "normal",
        titleFont: Yt,
        titleFontSize: 13,
        titleFontWeight: Jt,
      },
      axisX: { labelAngle: 0, labelPadding: 4, tickSize: 3 },
      axisY: {
        labelBaseline: "middle",
        maxExtent: 45,
        minExtent: 45,
        tickSize: 2,
        titleAlign: "left",
        titleAngle: 0,
        titleX: -45,
        titleY: -11,
      },
      legend: {
        labelFont: $t,
        labelFontSize: 11.5,
        symbolType: "square",
        titleFont: Yt,
        titleFontSize: 13,
        titleFontWeight: Jt,
      },
      range: {
        category: Qt["category-6"],
        diverging: Qt["fireandice-6"],
        heatmap: Qt["fire-7"],
        ordinal: Qt["fire-7"],
        ramp: Qt["fire-7"],
      },
    },
    Kt = "#ab5787",
    en = "#979797",
    tn = {
      background: "#f9f9f9",
      arc: { fill: Kt },
      area: { fill: Kt },
      line: { stroke: Kt },
      path: { stroke: Kt },
      rect: { fill: Kt },
      shape: { stroke: Kt },
      symbol: { fill: Kt, size: 30 },
      axis: {
        domainColor: en,
        domainWidth: 0.5,
        gridWidth: 0.2,
        labelColor: en,
        tickColor: en,
        tickWidth: 0.2,
        titleColor: en,
      },
      axisBand: { grid: !1 },
      axisX: { grid: !0, tickSize: 10 },
      axisY: { domain: !1, grid: !0, tickSize: 0 },
      legend: {
        labelFontSize: 11,
        padding: 1,
        symbolSize: 30,
        symbolType: "square",
      },
      range: {
        category: [
          "#ab5787",
          "#51b2e5",
          "#703c5c",
          "#168dd9",
          "#d190b6",
          "#00609f",
          "#d365ba",
          "#154866",
          "#666666",
          "#c4c4c4",
        ],
      },
    },
    nn = "#3e5c69",
    on = {
      background: "#fff",
      arc: { fill: nn },
      area: { fill: nn },
      line: { stroke: nn },
      path: { stroke: nn },
      rect: { fill: nn },
      shape: { stroke: nn },
      symbol: { fill: nn },
      axis: {
        domainWidth: 0.5,
        grid: !0,
        labelPadding: 2,
        tickSize: 5,
        tickWidth: 0.5,
        titleFontWeight: "normal",
      },
      axisBand: { grid: !1 },
      axisX: { gridWidth: 0.2 },
      axisY: { gridDash: [3], gridWidth: 0.4 },
      legend: { labelFontSize: 11, padding: 1, symbolType: "square" },
      range: {
        category: [
          "#3e5c69",
          "#6793a6",
          "#182429",
          "#0570b0",
          "#3690c0",
          "#74a9cf",
          "#a6bddb",
          "#e2ddf2",
        ],
      },
    },
    rn = "#1696d2",
    an = "#000000",
    sn = "Lato",
    cn = "Lato",
    ln = {
      "main-colors": [
        "#1696d2",
        "#d2d2d2",
        "#000000",
        "#fdbf11",
        "#ec008b",
        "#55b748",
        "#5c5859",
        "#db2b27",
      ],
      "shades-blue": [
        "#CFE8F3",
        "#A2D4EC",
        "#73BFE2",
        "#46ABDB",
        "#1696D2",
        "#12719E",
        "#0A4C6A",
        "#062635",
      ],
      "shades-gray": [
        "#F5F5F5",
        "#ECECEC",
        "#E3E3E3",
        "#DCDBDB",
        "#D2D2D2",
        "#9D9D9D",
        "#696969",
        "#353535",
      ],
      "shades-yellow": [
        "#FFF2CF",
        "#FCE39E",
        "#FDD870",
        "#FCCB41",
        "#FDBF11",
        "#E88E2D",
        "#CA5800",
        "#843215",
      ],
      "shades-magenta": [
        "#F5CBDF",
        "#EB99C2",
        "#E46AA7",
        "#E54096",
        "#EC008B",
        "#AF1F6B",
        "#761548",
        "#351123",
      ],
      "shades-green": [
        "#DCEDD9",
        "#BCDEB4",
        "#98CF90",
        "#78C26D",
        "#55B748",
        "#408941",
        "#2C5C2D",
        "#1A2E19",
      ],
      "shades-black": [
        "#D5D5D4",
        "#ADABAC",
        "#848081",
        "#5C5859",
        "#332D2F",
        "#262223",
        "#1A1717",
        "#0E0C0D",
      ],
      "shades-red": [
        "#F8D5D4",
        "#F1AAA9",
        "#E9807D",
        "#E25552",
        "#DB2B27",
        "#A4201D",
        "#6E1614",
        "#370B0A",
      ],
      "one-group": ["#1696d2", "#000000"],
      "two-groups-cat-1": ["#1696d2", "#000000"],
      "two-groups-cat-2": ["#1696d2", "#fdbf11"],
      "two-groups-cat-3": ["#1696d2", "#db2b27"],
      "two-groups-seq": ["#a2d4ec", "#1696d2"],
      "three-groups-cat": ["#1696d2", "#fdbf11", "#000000"],
      "three-groups-seq": ["#a2d4ec", "#1696d2", "#0a4c6a"],
      "four-groups-cat-1": ["#000000", "#d2d2d2", "#fdbf11", "#1696d2"],
      "four-groups-cat-2": ["#1696d2", "#ec0008b", "#fdbf11", "#5c5859"],
      "four-groups-seq": ["#cfe8f3", "#73bf42", "#1696d2", "#0a4c6a"],
      "five-groups-cat-1": [
        "#1696d2",
        "#fdbf11",
        "#d2d2d2",
        "#ec008b",
        "#000000",
      ],
      "five-groups-cat-2": [
        "#1696d2",
        "#0a4c6a",
        "#d2d2d2",
        "#fdbf11",
        "#332d2f",
      ],
      "five-groups-seq": [
        "#cfe8f3",
        "#73bf42",
        "#1696d2",
        "#0a4c6a",
        "#000000",
      ],
      "six-groups-cat-1": [
        "#1696d2",
        "#ec008b",
        "#fdbf11",
        "#000000",
        "#d2d2d2",
        "#55b748",
      ],
      "six-groups-cat-2": [
        "#1696d2",
        "#d2d2d2",
        "#ec008b",
        "#fdbf11",
        "#332d2f",
        "#0a4c6a",
      ],
      "six-groups-seq": [
        "#cfe8f3",
        "#a2d4ec",
        "#73bfe2",
        "#46abdb",
        "#1696d2",
        "#12719e",
      ],
      "diverging-colors": [
        "#ca5800",
        "#fdbf11",
        "#fdd870",
        "#fff2cf",
        "#cfe8f3",
        "#73bfe2",
        "#1696d2",
        "#0a4c6a",
      ],
    },
    hn = {
      background: "#FFFFFF",
      title: { anchor: "start", fontSize: 18, font: sn },
      axisX: {
        domain: !0,
        domainColor: an,
        domainWidth: 1,
        grid: !1,
        labelFontSize: 12,
        labelFont: cn,
        labelAngle: 0,
        tickColor: an,
        tickSize: 5,
        titleFontSize: 12,
        titlePadding: 10,
        titleFont: sn,
      },
      axisY: {
        domain: !1,
        domainWidth: 1,
        grid: !0,
        gridColor: "#DEDDDD",
        gridWidth: 1,
        labelFontSize: 12,
        labelFont: cn,
        labelPadding: 8,
        ticks: !1,
        titleFontSize: 12,
        titlePadding: 10,
        titleFont: sn,
        titleAngle: 0,
        titleY: -10,
        titleX: 18,
      },
      legend: {
        labelFontSize: 12,
        labelFont: cn,
        symbolSize: 100,
        titleFontSize: 12,
        titlePadding: 10,
        titleFont: sn,
        orient: "right",
        offset: 10,
      },
      view: { stroke: "transparent" },
      range: {
        category: ln["six-groups-cat-1"],
        diverging: ln["diverging-colors"],
        heatmap: ln["diverging-colors"],
        ordinal: ln["six-groups-seq"],
        ramp: ln["shades-blue"],
      },
      area: { fill: rn },
      rect: { fill: rn },
      line: { color: rn, stroke: rn, strokeWidth: 5 },
      trail: { color: rn, stroke: rn, strokeWidth: 0, size: 1 },
      path: { stroke: rn, strokeWidth: 0.5 },
      point: { filled: !0 },
      text: {
        font: "Lato",
        color: rn,
        fontSize: 11,
        align: "center",
        fontWeight: 400,
        size: 11,
      },
      style: { bar: { fill: rn, stroke: null } },
      arc: { fill: rn },
      shape: { stroke: rn },
      symbol: { fill: rn, size: 30 },
    },
    pn = "#3366CC",
    un = "#ccc",
    dn = "Arial, sans-serif",
    fn = {
      arc: { fill: pn },
      area: { fill: pn },
      path: { stroke: pn },
      rect: { fill: pn },
      shape: { stroke: pn },
      symbol: { stroke: pn },
      circle: { fill: pn },
      background: "#fff",
      padding: { top: 10, right: 10, bottom: 10, left: 10 },
      style: {
        "guide-label": { font: dn, fontSize: 12 },
        "guide-title": { font: dn, fontSize: 12 },
        "group-title": { font: dn, fontSize: 12 },
      },
      title: {
        font: dn,
        fontSize: 14,
        fontWeight: "bold",
        dy: -3,
        anchor: "start",
      },
      axis: { gridColor: un, tickColor: un, domain: !1, grid: !0 },
      range: {
        category: [
          "#4285F4",
          "#DB4437",
          "#F4B400",
          "#0F9D58",
          "#AB47BC",
          "#00ACC1",
          "#FF7043",
          "#9E9D24",
          "#5C6BC0",
          "#F06292",
          "#00796B",
          "#C2185B",
        ],
        heatmap: ["#c6dafc", "#5e97f6", "#2a56c6"],
      },
    },
    gn = "2.10.0";
  var vn = Object.freeze({
    __proto__: null,
    dark: Mt,
    excel: zt,
    fivethirtyeight: Vt,
    ggplot2: Ht,
    googlecharts: fn,
    latimes: Zt,
    quartz: tn,
    urbaninstitute: hn,
    version: gn,
    vox: on,
  });
  function mn(e, t, n) {
    return (e.fields = t || []), (e.fname = n), e;
  }
  function En(e) {
    return 1 === e.length ? bn(e[0]) : yn(e);
  }
  const bn = (e) =>
      function (t) {
        return t[e];
      },
    yn = (e) => {
      const t = e.length;
      return function (n) {
        for (let o = 0; o < t; ++o) n = n[e[o]];
        return n;
      };
    };
  function wn(e) {
    throw Error(e);
  }
  !(function (e, t, n) {
    const o = (function (e) {
      const t = [],
        n = e.length;
      let o,
        r,
        i,
        a = null,
        s = 0,
        c = "";
      function l() {
        t.push(c + e.substring(o, r)), (c = ""), (o = r + 1);
      }
      for (e += "", o = r = 0; r < n; ++r)
        if (((i = e[r]), "\\" === i))
          (c += e.substring(o, r)), (c += e.substring(++r, ++r)), (o = r);
        else if (i === a) l(), (a = null), (s = -1);
        else {
          if (a) continue;
          (o === s && '"' === i) || (o === s && "'" === i)
            ? ((o = r + 1), (a = i))
            : "." !== i || s
            ? "[" === i
              ? (r > o && l(), (s = o = r + 1))
              : "]" === i &&
                (s || wn("Access path missing open bracket: " + e),
                s > 0 && l(),
                (s = 0),
                (o = r + 1))
            : r > o
            ? l()
            : (o = r + 1);
        }
      return (
        s && wn("Access path missing closing bracket: " + e),
        a && wn("Access path missing closing quote: " + e),
        r > o && (r++, l()),
        t
      );
    })(e);
    (e = 1 === o.length ? o[0] : e), mn(((n && n.get) || En)(o), [e], t || e);
  })("id"),
    mn((e) => e, [], "identity"),
    mn(() => 0, [], "zero"),
    mn(() => 1, [], "one"),
    mn(() => !0, [], "true"),
    mn(() => !1, [], "false");
  var On = Array.isArray;
  function An(e) {
    return e === Object(e);
  }
  function xn(e, t) {
    return JSON.stringify(
      e,
      (function (e) {
        const t = [];
        return function (n, o) {
          if ("object" != typeof o || null === o) return o;
          const r = t.indexOf(this) + 1;
          return (
            (t.length = r),
            t.length > e
              ? "[Object]"
              : t.indexOf(o) >= 0
              ? "[Circular]"
              : (t.push(o), o)
          );
        };
      })(t)
    );
  }
  const In = "vg-tooltip-element",
    Nn = {
      offsetX: 10,
      offsetY: 10,
      id: In,
      styleId: "vega-tooltip-style",
      theme: "light",
      disableDefaultStyle: !1,
      sanitize: function (e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;");
      },
      maxDepth: 2,
      formatTooltip: function (e, t, n) {
        if (On(e))
          return "[".concat(
            e.map((e) => t("string" == typeof e ? e : xn(e, n))).join(", "),
            "]"
          );
        if (An(e)) {
          let o = "";
          const r = e,
            { title: i, image: a } = r,
            s =
              /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
              (function (e, t) {
                var n = {};
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) &&
                    t.indexOf(o) < 0 &&
                    (n[o] = e[o]);
                if (
                  null != e &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var r = 0;
                  for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                    t.indexOf(o[r]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                      (n[o[r]] = e[o[r]]);
                }
                return n;
              })(r, ["title", "image"]);
          i && (o += "<h2>".concat(t(i), "</h2>")),
            a && (o += '<img src="'.concat(t(a), '">'));
          const c = Object.keys(s);
          if (c.length > 0) {
            o += "<table>";
            for (const e of c) {
              let r = s[e];
              void 0 !== r &&
                (An(r) && (r = xn(r, n)),
                (o += '<tr><td class="key">'
                  .concat(t(e), ':</td><td class="value">')
                  .concat(t(r), "</td></tr>")));
            }
            o += "</table>";
          }
          return o || "{}";
        }
        return t(e);
      },
    };
  class Rn {
    constructor(e) {
      this.options = Object.assign(Object.assign({}, Nn), e);
      const t = this.options.id;
      if (
        ((this.el = null),
        (this.call = this.tooltipHandler.bind(this)),
        !this.options.disableDefaultStyle &&
          !document.getElementById(this.options.styleId))
      ) {
        const e = document.createElement("style");
        e.setAttribute("id", this.options.styleId),
          (e.innerHTML = (function (e) {
            if (!/^[A-Za-z]+[-:.\w]*$/.test(e))
              throw new Error("Invalid HTML ID");
            return "#vg-tooltip-element {\n  visibility: hidden;\n  padding: 8px;\n  position: fixed;\n  z-index: 1000;\n  font-family: sans-serif;\n  font-size: 11px;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  /* The default theme is the light theme. */\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #d9d9d9;\n  color: black;\n}\n#vg-tooltip-element.visible {\n  visibility: visible;\n}\n#vg-tooltip-element h2 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n#vg-tooltip-element img {\n  max-width: 200px;\n  max-height: 200px;\n}\n#vg-tooltip-element table {\n  border-spacing: 0;\n}\n#vg-tooltip-element table tr {\n  border: none;\n}\n#vg-tooltip-element table tr td {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n#vg-tooltip-element table tr td.key {\n  color: #808080;\n  max-width: 150px;\n  text-align: right;\n  padding-right: 4px;\n}\n#vg-tooltip-element table tr td.value {\n  display: block;\n  max-width: 300px;\n  max-height: 7em;\n  text-align: left;\n}\n#vg-tooltip-element.dark-theme {\n  background-color: rgba(32, 32, 32, 0.9);\n  border: 1px solid #f5f5f5;\n  color: white;\n}\n#vg-tooltip-element.dark-theme td.key {\n  color: #bfbfbf;\n}\n"
              .toString()
              .replace(In, e);
          })(t));
        const n = document.head;
        n.childNodes.length > 0
          ? n.insertBefore(e, n.childNodes[0])
          : n.appendChild(e);
      }
    }
    tooltipHandler(e, t, n, o) {
      var r;
      if (((this.el = document.getElementById(this.options.id)), !this.el)) {
        (this.el = document.createElement("div")),
          this.el.setAttribute("id", this.options.id),
          this.el.classList.add("vg-tooltip");
        (null !== (r = document.fullscreenElement) && void 0 !== r
          ? r
          : document.body
        ).appendChild(this.el);
      }
      if (null == o || "" === o)
        return void this.el.classList.remove(
          "visible",
          "".concat(this.options.theme, "-theme")
        );
      (this.el.innerHTML = this.options.formatTooltip(
        o,
        this.options.sanitize,
        this.options.maxDepth
      )),
        this.el.classList.add(
          "visible",
          "".concat(this.options.theme, "-theme")
        );
      const { x: i, y: a } = (function (e, t, n, o) {
        let r = e.clientX + n;
        r + t.width > window.innerWidth && (r = +e.clientX - n - t.width);
        let i = e.clientY + o;
        return (
          i + t.height > window.innerHeight && (i = +e.clientY - o - t.height),
          { x: r, y: i }
        );
      })(
        t,
        this.el.getBoundingClientRect(),
        this.options.offsetX,
        this.options.offsetY
      );
      this.el.setAttribute(
        "style",
        "top: ".concat(a, "px; left: ").concat(i, "px")
      );
    }
  }
  function Tn(e, t, n) {
    const o = e.open(t),
      { origin: r } = new URL(t);
    let i = 40;
    e.addEventListener(
      "message",
      function t(n) {
        n.source === o && ((i = 0), e.removeEventListener("message", t, !1));
      },
      !1
    ),
      setTimeout(function e() {
        i <= 0 || (o.postMessage(n, r), setTimeout(e, 250), (i -= 1));
      }, 250);
  }
  var Ln =
    '.vega-embed {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.vega-embed.has-actions {\n  padding-right: 38px;\n}\n.vega-embed details:not([open]) > :not(summary) {\n  display: none !important;\n}\n.vega-embed summary {\n  list-style: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  z-index: 1000;\n  background: white;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  color: #1b1e23;\n  border: 1px solid #aaa;\n  border-radius: 999px;\n  opacity: 0.2;\n  transition: opacity 0.4s ease-in;\n  cursor: pointer;\n  line-height: 0px;\n}\n.vega-embed summary::-webkit-details-marker {\n  display: none;\n}\n.vega-embed summary:active {\n  box-shadow: #aaa 0px 0px 0px 1px inset;\n}\n.vega-embed summary svg {\n  width: 14px;\n  height: 14px;\n}\n.vega-embed details[open] summary {\n  opacity: 0.7;\n}\n.vega-embed:hover summary, .vega-embed:focus-within summary {\n  opacity: 1 !important;\n  transition: opacity 0.2s ease;\n}\n.vega-embed .vega-actions {\n  position: absolute;\n  z-index: 1001;\n  top: 35px;\n  right: -9px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 8px;\n  padding-top: 8px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  border: 1px solid #d9d9d9;\n  background: white;\n  animation-duration: 0.15s;\n  animation-name: scale-in;\n  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n  text-align: left;\n}\n.vega-embed .vega-actions a {\n  padding: 8px 16px;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  white-space: nowrap;\n  color: #434a56;\n  text-decoration: none;\n}\n.vega-embed .vega-actions a:hover, .vega-embed .vega-actions a:focus {\n  background-color: #f7f7f9;\n  color: black;\n}\n.vega-embed .vega-actions::before, .vega-embed .vega-actions::after {\n  content: "";\n  display: inline-block;\n  position: absolute;\n}\n.vega-embed .vega-actions::before {\n  left: auto;\n  right: 14px;\n  top: -16px;\n  border: 8px solid #0000;\n  border-bottom-color: #d9d9d9;\n}\n.vega-embed .vega-actions::after {\n  left: auto;\n  right: 15px;\n  top: -14px;\n  border: 7px solid #0000;\n  border-bottom-color: #fff;\n}\n.vega-embed .chart-wrapper.fit-x {\n  width: 100%;\n}\n.vega-embed .chart-wrapper.fit-y {\n  height: 100%;\n}\n\n.vega-embed-wrapper {\n  max-width: 100%;\n  overflow: auto;\n  padding-right: 14px;\n}\n\n@keyframes scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n';
  function Sn(e) {
    return (
      e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//")
    );
  }
  function Dn(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
      o < t;
      o++
    )
      n[o - 1] = arguments[o];
    for (const t of n) Cn(e, t);
    return e;
  }
  function Cn(t, n) {
    for (const o of Object.keys(n)) e.writeConfig(t, o, n[o], !0);
  }
  String.prototype.startsWith ||
    (String.prototype.startsWith = function (e, t) {
      return this.substr(!t || t < 0 ? 0 : +t, e.length) === e;
    });
  var Fn;
  const kn = "6.20.8",
    Pn = r;
  let _n = i;
  const Mn = "undefined" != typeof window ? window : void 0;
  void 0 === _n &&
    null != Mn &&
    null !== (Fn = Mn.vl) &&
    void 0 !== Fn &&
    Fn.compile &&
    (_n = Mn.vl);
  const jn = {
      export: { svg: !0, png: !0 },
      source: !0,
      compiled: !0,
      editor: !0,
    },
    zn = {
      CLICK_TO_VIEW_ACTIONS: "Click to view actions",
      COMPILED_ACTION: "View Compiled Vega",
      EDITOR_ACTION: "Open in Vega Editor",
      PNG_ACTION: "Save as PNG",
      SOURCE_ACTION: "View Source",
      SVG_ACTION: "Save as SVG",
    },
    Un = { vega: "Vega", "vega-lite": "Vega-Lite" },
    Bn = { vega: Pn.version, "vega-lite": _n ? _n.version : "not available" },
    Gn = {
      vega: (e) => e,
      "vega-lite": (e, t) => _n.compile(e, { config: t }).spec,
    },
    Xn =
      '\n<svg viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">\n  <circle r="2" cy="8" cx="2"></circle>\n  <circle r="2" cy="8" cx="8"></circle>\n  <circle r="2" cy="8" cx="14"></circle>\n</svg>',
    Vn = "chart-wrapper";
  function Wn(e) {
    return "function" == typeof e;
  }
  function Hn(e, t, n, o) {
    const r = "<html><head>".concat(t, '</head><body><pre><code class="json">'),
      i = "</code></pre>".concat(n, "</body></html>"),
      a = window.open("");
    a.document.write(r + e + i),
      (a.document.title = "".concat(Un[o], " JSON Source"));
  }
  function $n(e, t) {
    if (e.$schema) {
      const o = Pt(e.$schema);
      var n;
      if (t && t !== o.library)
        console.warn(
          "The given visualization spec is written in "
            .concat(Un[o.library], ", but mode argument sets ")
            .concat(null !== (n = Un[t]) && void 0 !== n ? n : t, ".")
        );
      const r = o.library;
      return (
        xt(Bn[r], "^".concat(o.version.slice(1))) ||
          console.warn(
            "The input spec uses "
              .concat(Un[r], " ")
              .concat(o.version, ", but the current version of ")
              .concat(Un[r], " is v")
              .concat(Bn[r], ".")
          ),
        r
      );
    }
    return "mark" in e ||
      "encoding" in e ||
      "layer" in e ||
      "hconcat" in e ||
      "vconcat" in e ||
      "facet" in e ||
      "repeat" in e
      ? "vega-lite"
      : "marks" in e || "signals" in e || "scales" in e || "axes" in e
      ? "vega"
      : null != t
      ? t
      : "vega";
  }
  function qn(e) {
    return (t = e) && "load" in t ? e : Pn.loader(e);
    var t;
  }
  function Yn(t) {
    var n, o;
    const r =
      null !==
        (n =
          null === (o = t.usermeta) || void 0 === o
            ? void 0
            : o.embedOptions) && void 0 !== n
        ? n
        : {};
    return e.isString(r.defaultStyle) && (r.defaultStyle = !1), r;
  }
  async function Jn(t, n) {
    var o, r;
    let i,
      a,
      s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    e.isString(n)
      ? ((a = qn(s.loader)), (i = JSON.parse(await a.load(n))))
      : (i = n);
    const c = Yn(i),
      l = c.loader;
    var h;
    (a && !l) || (a = qn(null !== (h = s.loader) && void 0 !== h ? h : l));
    const p = await Qn(c, a),
      u = await Qn(s, a),
      d = {
        ...Dn(u, p),
        config: e.mergeConfig(
          null !== (o = u.config) && void 0 !== o ? o : {},
          null !== (r = p.config) && void 0 !== r ? r : {}
        ),
      };
    return await Kn(t, i, d, a);
  }
  async function Qn(t, n) {
    var o;
    const r = e.isString(t.config)
        ? JSON.parse(await n.load(t.config))
        : null !== (o = t.config) && void 0 !== o
        ? o
        : {},
      i = e.isString(t.patch) ? JSON.parse(await n.load(t.patch)) : t.patch;
    return { ...t, ...(i ? { patch: i } : {}), ...(r ? { config: r } : {}) };
  }
  function Zn(e) {
    var t;
    const n = e.getRootNode ? e.getRootNode() : document;
    return n instanceof ShadowRoot
      ? { root: n, rootContainer: n }
      : {
          root: document,
          rootContainer:
            null !== (t = document.head) && void 0 !== t ? t : document.body,
        };
  }
  async function Kn(t, n) {
    var o, r, i, a, s, c, l;
    let h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      p = arguments.length > 3 ? arguments[3] : void 0;
    const u = h.theme
        ? e.mergeConfig(
            vn[h.theme],
            null !== (o = h.config) && void 0 !== o ? o : {}
          )
        : h.config,
      d = e.isBoolean(h.actions)
        ? h.actions
        : Dn({}, jn, null !== (r = h.actions) && void 0 !== r ? r : {}),
      f = { ...zn, ...h.i18n },
      g = null !== (i = h.renderer) && void 0 !== i ? i : "canvas",
      v = null !== (a = h.logLevel) && void 0 !== a ? a : Pn.Warn,
      m =
        null !== (s = h.downloadFileName) && void 0 !== s ? s : "visualization",
      E = "string" == typeof t ? document.querySelector(t) : t;
    if (!E) throw new Error("".concat(t, " does not exist"));
    if (!1 !== h.defaultStyle) {
      const e = "vega-embed-style",
        { root: t, rootContainer: n } = Zn(E);
      if (!t.getElementById(e)) {
        const t = document.createElement("style");
        (t.id = e),
          (t.innerHTML =
            void 0 === h.defaultStyle || !0 === h.defaultStyle
              ? Ln.toString()
              : h.defaultStyle),
          n.appendChild(t);
      }
    }
    const b = $n(n, h.mode);
    let y = Gn[b](n, u);
    if ("vega-lite" === b && y.$schema) {
      const e = Pt(y.$schema);
      xt(Bn.vega, "^".concat(e.version.slice(1))) ||
        console.warn(
          "The compiled spec uses Vega "
            .concat(e.version, ", but current version is v")
            .concat(Bn.vega, ".")
        );
    }
    E.classList.add("vega-embed"),
      d && E.classList.add("has-actions"),
      (E.innerHTML = "");
    let w = E;
    if (d) {
      const e = document.createElement("div");
      e.classList.add(Vn), E.appendChild(e), (w = e);
    }
    const O = h.patch;
    O && (y = O instanceof Function ? O(y) : A(y, O, !0, !1).newDocument),
      h.formatLocale && Pn.formatLocale(h.formatLocale),
      h.timeFormatLocale && Pn.timeFormatLocale(h.timeFormatLocale);
    const { ast: x } = h,
      I = Pn.parse(y, "vega-lite" === b ? {} : u, { ast: x }),
      N = new (h.viewClass || Pn.View)(I, {
        loader: p,
        logLevel: v,
        renderer: g,
        ...(x
          ? {
              expr:
                null !==
                  (c =
                    null !== (l = Pn.expressionInterpreter) && void 0 !== l
                      ? l
                      : h.expr) && void 0 !== c
                  ? c
                  : kt,
            }
          : {}),
      });
    if (
      (N.addSignalListener("autosize", (e, t) => {
        const { type: n } = t;
        "fit-x" == n
          ? (w.classList.add("fit-x"), w.classList.remove("fit-y"))
          : "fit-y" == n
          ? (w.classList.remove("fit-x"), w.classList.add("fit-y"))
          : "fit" == n
          ? w.classList.add("fit-x", "fit-y")
          : w.classList.remove("fit-x", "fit-y");
      }),
      !1 !== h.tooltip)
    ) {
      const e = Wn(h.tooltip)
        ? h.tooltip
        : new Rn(!0 === h.tooltip ? {} : h.tooltip).call;
      N.tooltip(e);
    }
    let R,
      { hover: T } = h;
    if ((void 0 === T && (T = "vega" === b), T)) {
      const { hoverSet: e, updateSet: t } = "boolean" == typeof T ? {} : T;
      N.hover(e, t);
    }
    if (
      (h &&
        (null != h.width && N.width(h.width),
        null != h.height && N.height(h.height),
        null != h.padding && N.padding(h.padding)),
      await N.initialize(w, h.bind).runAsync(),
      !1 !== d)
    ) {
      let e = E;
      if (!1 !== h.defaultStyle) {
        const t = document.createElement("details");
        (t.title = f.CLICK_TO_VIEW_ACTIONS), E.append(t), (e = t);
        const n = document.createElement("summary");
        (n.innerHTML = Xn),
          t.append(n),
          (R = (e) => {
            t.contains(e.target) || t.removeAttribute("open");
          }),
          document.addEventListener("click", R);
      }
      const t = document.createElement("div");
      if (
        (e.append(t),
        t.classList.add("vega-actions"),
        !0 === d || !1 !== d.export)
      )
        for (const e of ["svg", "png"])
          if (!0 === d || !0 === d.export || d.export[e]) {
            const n = f["".concat(e.toUpperCase(), "_ACTION")],
              o = document.createElement("a");
            (o.text = n),
              (o.href = "#"),
              (o.target = "_blank"),
              (o.download = "".concat(m, ".").concat(e)),
              o.addEventListener("mousedown", async function (t) {
                t.preventDefault();
                const n = await N.toImageURL(e, h.scaleFactor);
                this.href = n;
              }),
              t.append(o);
          }
      if (!0 === d || !1 !== d.source) {
        const e = document.createElement("a");
        (e.text = f.SOURCE_ACTION),
          (e.href = "#"),
          e.addEventListener("click", function (e) {
            var t, o;
            Hn(
              P(n),
              null !== (t = h.sourceHeader) && void 0 !== t ? t : "",
              null !== (o = h.sourceFooter) && void 0 !== o ? o : "",
              b
            ),
              e.preventDefault();
          }),
          t.append(e);
      }
      if ("vega-lite" === b && (!0 === d || !1 !== d.compiled)) {
        const e = document.createElement("a");
        (e.text = f.COMPILED_ACTION),
          (e.href = "#"),
          e.addEventListener("click", function (e) {
            var t, n;
            Hn(
              P(y),
              null !== (t = h.sourceHeader) && void 0 !== t ? t : "",
              null !== (n = h.sourceFooter) && void 0 !== n ? n : "",
              "vega"
            ),
              e.preventDefault();
          }),
          t.append(e);
      }
      if (!0 === d || !1 !== d.editor) {
        var L;
        const e =
            null !== (L = h.editorUrl) && void 0 !== L
              ? L
              : "https://vega.github.io/editor/",
          o = document.createElement("a");
        (o.text = f.EDITOR_ACTION),
          (o.href = "#"),
          o.addEventListener("click", function (t) {
            Tn(window, e, { config: u, mode: b, renderer: g, spec: P(n) }),
              t.preventDefault();
          }),
          t.append(o);
      }
    }
    function S() {
      R && document.removeEventListener("click", R), N.finalize();
    }
    return { view: N, spec: n, vgSpec: y, finalize: S, embedOptions: h };
  }
  async function eo(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const o = document.createElement("div");
    o.classList.add("vega-embed-wrapper");
    const r = document.createElement("div");
    o.appendChild(r);
    const i =
        !0 === n.actions || !1 === n.actions
          ? n.actions
          : {
              export: !0,
              source: !1,
              compiled: !0,
              editor: !0,
              ...(null !== (t = n.actions) && void 0 !== t ? t : {}),
            },
      a = await Jn(r, e, { actions: i, ...(null != n ? n : {}) });
    return (o.value = a.view), o;
  }
  function to(e) {
    return e instanceof HTMLElement;
  }
  const no = function () {
    return arguments.length > 1 &&
      ((e.isString(arguments.length <= 0 ? void 0 : arguments[0]) &&
        !Sn(arguments.length <= 0 ? void 0 : arguments[0])) ||
        to(arguments.length <= 0 ? void 0 : arguments[0]) ||
        3 === arguments.length)
      ? Jn(
          arguments.length <= 0 ? void 0 : arguments[0],
          arguments.length <= 1 ? void 0 : arguments[1],
          arguments.length <= 2 ? void 0 : arguments[2]
        )
      : eo(
          arguments.length <= 0 ? void 0 : arguments[0],
          arguments.length <= 1 ? void 0 : arguments[1]
        );
  };
  return (
    (no.vegaLite = _n),
    (no.vl = _n),
    (no.container = eo),
    (no.embed = Jn),
    (no.vega = Pn),
    (no.default = Jn),
    (no.version = kn),
    no
  );
});
//# sourceMappingURL=vega-embed.min.js.map
