function Ue(R) {
  return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, "default") ? R.default : R;
}
var de = { exports: {} }, f = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function qe() {
  if (Pe) return f;
  Pe = 1;
  var R = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), ne = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), oe = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), K = Symbol.iterator;
  function ue(t) {
    return t === null || typeof t != "object" ? null : (t = K && t[K] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, se = {};
  function k(t, o, c) {
    this.props = t, this.context = o, this.refs = se, this.updater = c || x;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(t, o) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, o, "setState");
  }, k.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function U() {
  }
  U.prototype = k.prototype;
  function F(t, o, c) {
    this.props = t, this.context = o, this.refs = se, this.updater = c || x;
  }
  var q = F.prototype = new U();
  q.constructor = F, X(q, k.prototype), q.isPureReactComponent = !0;
  var S = Array.isArray;
  function Z() {
  }
  var m = { H: null, A: null, T: null, S: null }, ae = Object.prototype.hasOwnProperty;
  function A(t, o, c) {
    var i = c.ref;
    return {
      $$typeof: R,
      type: t,
      key: o,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  function z(t, o) {
    return A(t.type, o, t.props);
  }
  function V(t) {
    return typeof t == "object" && t !== null && t.$$typeof === R;
  }
  function g(t) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(c) {
      return o[c];
    });
  }
  var J = /\/+/g;
  function j(t, o) {
    return typeof t == "object" && t !== null && t.key != null ? g("" + t.key) : o.toString(36);
  }
  function L(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(Z, Z) : (t.status = "pending", t.then(
          function(o) {
            t.status === "pending" && (t.status = "fulfilled", t.value = o);
          },
          function(o) {
            t.status === "pending" && (t.status = "rejected", t.reason = o);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function O(t, o, c, i, _) {
    var E = typeof t;
    (E === "undefined" || E === "boolean") && (t = null);
    var v = !1;
    if (t === null) v = !0;
    else
      switch (E) {
        case "bigint":
        case "string":
        case "number":
          v = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case R:
            case a:
              v = !0;
              break;
            case D:
              return v = t._init, O(
                v(t._payload),
                o,
                c,
                i,
                _
              );
          }
      }
    if (v)
      return _ = _(t), v = i === "" ? "." + j(t, 0) : i, S(_) ? (c = "", v != null && (c = v.replace(J, "$&/") + "/"), O(_, o, c, "", function(Y) {
        return Y;
      })) : _ != null && (V(_) && (_ = z(
        _,
        c + (_.key == null || t && t.key === _.key ? "" : ("" + _.key).replace(
          J,
          "$&/"
        ) + "/") + v
      )), o.push(_)), 1;
    v = 0;
    var b = i === "" ? "." : i + ":";
    if (S(t))
      for (var w = 0; w < t.length; w++)
        i = t[w], E = b + j(i, w), v += O(
          i,
          o,
          c,
          E,
          _
        );
    else if (w = ue(t), typeof w == "function")
      for (t = w.call(t), w = 0; !(i = t.next()).done; )
        i = i.value, E = b + j(i, w++), v += O(
          i,
          o,
          c,
          E,
          _
        );
    else if (E === "object") {
      if (typeof t.then == "function")
        return O(
          L(t),
          o,
          c,
          i,
          _
        );
      throw o = String(t), Error(
        "Objects are not valid as a React child (found: " + (o === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return v;
  }
  function P(t, o, c) {
    if (t == null) return t;
    var i = [], _ = 0;
    return O(t, i, "", "", function(E) {
      return o.call(c, E, _++);
    }), i;
  }
  function ee(t) {
    if (t._status === -1) {
      var o = t._result;
      o = o(), o.then(
        function(c) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = c);
        },
        function(c) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = c);
        }
      ), t._status === -1 && (t._status = 0, t._result = o);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var W = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var o = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(o)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ie = {
    map: P,
    forEach: function(t, o, c) {
      P(
        t,
        function() {
          o.apply(this, arguments);
        },
        c
      );
    },
    count: function(t) {
      var o = 0;
      return P(t, function() {
        o++;
      }), o;
    },
    toArray: function(t) {
      return P(t, function(o) {
        return o;
      }) || [];
    },
    only: function(t) {
      if (!V(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  };
  return f.Activity = I, f.Children = ie, f.Component = k, f.Fragment = G, f.Profiler = M, f.PureComponent = F, f.StrictMode = H, f.Suspense = $, f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, f.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return m.H.useMemoCache(t);
    }
  }, f.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, f.cacheSignal = function() {
    return null;
  }, f.cloneElement = function(t, o, c) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var i = X({}, t.props), _ = t.key;
    if (o != null)
      for (E in o.key !== void 0 && (_ = "" + o.key), o)
        !ae.call(o, E) || E === "key" || E === "__self" || E === "__source" || E === "ref" && o.ref === void 0 || (i[E] = o[E]);
    var E = arguments.length - 2;
    if (E === 1) i.children = c;
    else if (1 < E) {
      for (var v = Array(E), b = 0; b < E; b++)
        v[b] = arguments[b + 2];
      i.children = v;
    }
    return A(t.type, _, i);
  }, f.createContext = function(t) {
    return t = {
      $$typeof: ne,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: T,
      _context: t
    }, t;
  }, f.createElement = function(t, o, c) {
    var i, _ = {}, E = null;
    if (o != null)
      for (i in o.key !== void 0 && (E = "" + o.key), o)
        ae.call(o, i) && i !== "key" && i !== "__self" && i !== "__source" && (_[i] = o[i]);
    var v = arguments.length - 2;
    if (v === 1) _.children = c;
    else if (1 < v) {
      for (var b = Array(v), w = 0; w < v; w++)
        b[w] = arguments[w + 2];
      _.children = b;
    }
    if (t && t.defaultProps)
      for (i in v = t.defaultProps, v)
        _[i] === void 0 && (_[i] = v[i]);
    return A(t, E, _);
  }, f.createRef = function() {
    return { current: null };
  }, f.forwardRef = function(t) {
    return { $$typeof: Q, render: t };
  }, f.isValidElement = V, f.lazy = function(t) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: t },
      _init: ee
    };
  }, f.memo = function(t, o) {
    return {
      $$typeof: oe,
      type: t,
      compare: o === void 0 ? null : o
    };
  }, f.startTransition = function(t) {
    var o = m.T, c = {};
    m.T = c;
    try {
      var i = t(), _ = m.S;
      _ !== null && _(c, i), typeof i == "object" && i !== null && typeof i.then == "function" && i.then(Z, W);
    } catch (E) {
      W(E);
    } finally {
      o !== null && c.types !== null && (o.types = c.types), m.T = o;
    }
  }, f.unstable_useCacheRefresh = function() {
    return m.H.useCacheRefresh();
  }, f.use = function(t) {
    return m.H.use(t);
  }, f.useActionState = function(t, o, c) {
    return m.H.useActionState(t, o, c);
  }, f.useCallback = function(t, o) {
    return m.H.useCallback(t, o);
  }, f.useContext = function(t) {
    return m.H.useContext(t);
  }, f.useDebugValue = function() {
  }, f.useDeferredValue = function(t, o) {
    return m.H.useDeferredValue(t, o);
  }, f.useEffect = function(t, o) {
    return m.H.useEffect(t, o);
  }, f.useEffectEvent = function(t) {
    return m.H.useEffectEvent(t);
  }, f.useId = function() {
    return m.H.useId();
  }, f.useImperativeHandle = function(t, o, c) {
    return m.H.useImperativeHandle(t, o, c);
  }, f.useInsertionEffect = function(t, o) {
    return m.H.useInsertionEffect(t, o);
  }, f.useLayoutEffect = function(t, o) {
    return m.H.useLayoutEffect(t, o);
  }, f.useMemo = function(t, o) {
    return m.H.useMemo(t, o);
  }, f.useOptimistic = function(t, o) {
    return m.H.useOptimistic(t, o);
  }, f.useReducer = function(t, o, c) {
    return m.H.useReducer(t, o, c);
  }, f.useRef = function(t) {
    return m.H.useRef(t);
  }, f.useState = function(t) {
    return m.H.useState(t);
  }, f.useSyncExternalStore = function(t, o, c) {
    return m.H.useSyncExternalStore(
      t,
      o,
      c
    );
  }, f.useTransition = function() {
    return m.H.useTransition();
  }, f.version = "19.2.3", f;
}
var re = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
re.exports;
var Ne;
function ze() {
  return Ne || (Ne = 1, (function(R, a) {
    process.env.NODE_ENV !== "production" && (function() {
      function G(e, r) {
        Object.defineProperty(T.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function H(e) {
        return e === null || typeof e != "object" ? null : (e = me && e[me] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function M(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var n = e + "." + r;
        ve[n] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), ve[n] = !0);
      }
      function T(e, r, n) {
        this.props = e, this.context = r, this.refs = ye, this.updater = n || he;
      }
      function ne() {
      }
      function Q(e, r, n) {
        this.props = e, this.context = r, this.refs = ye, this.updater = n || he;
      }
      function $() {
      }
      function oe(e) {
        return "" + e;
      }
      function D(e) {
        try {
          oe(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var n = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            u
          ), oe(e);
        }
      }
      function I(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === De ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case c:
            return "Profiler";
          case o:
            return "StrictMode";
          case v:
            return "Suspense";
          case b:
            return "SuspenseList";
          case Ee:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case ie:
              return "Portal";
            case _:
              return e.displayName || "Context";
            case i:
              return (e._context.displayName || "Context") + ".Consumer";
            case E:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case w:
              return r = e.displayName || null, r !== null ? r : I(e.type) || "Memo";
            case Y:
              r = e._payload, e = e._init;
              try {
                return I(e(r));
              } catch {
              }
          }
        return null;
      }
      function K(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === Y)
          return "<...>";
        try {
          var r = I(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ue() {
        var e = p.A;
        return e === null ? null : e.getOwner();
      }
      function x() {
        return Error("react-stack-top-frame");
      }
      function X(e) {
        if (ce.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function se(e, r) {
        function n() {
          Te || (Te = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function k() {
        var e = I(this.type);
        return Ce[e] || (Ce[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function U(e, r, n, u, s, d) {
        var l = n.ref;
        return e = {
          $$typeof: W,
          type: e,
          key: r,
          props: n,
          _owner: u
        }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: k
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(e, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: s
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: d
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function F(e, r) {
        return r = U(
          e.type,
          r,
          e.props,
          e._owner,
          e._debugStack,
          e._debugTask
        ), e._store && (r._store.validated = e._store.validated), r;
      }
      function q(e) {
        S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === Y && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
      }
      function S(e) {
        return typeof e == "object" && e !== null && e.$$typeof === W;
      }
      function Z(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(n) {
          return r[n];
        });
      }
      function m(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (D(e.key), Z("" + e.key)) : r.toString(36);
      }
      function ae(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then($, $) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function A(e, r, n, u, s) {
        var d = typeof e;
        (d === "undefined" || d === "boolean") && (e = null);
        var l = !1;
        if (e === null) l = !0;
        else
          switch (d) {
            case "bigint":
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case W:
                case ie:
                  l = !0;
                  break;
                case Y:
                  return l = e._init, A(
                    l(e._payload),
                    r,
                    n,
                    u,
                    s
                  );
              }
          }
        if (l) {
          l = e, s = s(l);
          var h = u === "" ? "." + m(l, 0) : u;
          return we(s) ? (n = "", h != null && (n = h.replace(Ae, "$&/") + "/"), A(s, r, n, "", function(N) {
            return N;
          })) : s != null && (S(s) && (s.key != null && (l && l.key === s.key || D(s.key)), n = F(
            s,
            n + (s.key == null || l && l.key === s.key ? "" : ("" + s.key).replace(
              Ae,
              "$&/"
            ) + "/") + h
          ), u !== "" && l != null && S(l) && l.key == null && l._store && !l._store.validated && (n._store.validated = 2), s = n), r.push(s)), 1;
        }
        if (l = 0, h = u === "" ? "." : u + ":", we(e))
          for (var y = 0; y < e.length; y++)
            u = e[y], d = h + m(u, y), l += A(
              u,
              r,
              n,
              d,
              s
            );
        else if (y = H(e), typeof y == "function")
          for (y === e.entries && (Oe || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Oe = !0), e = y.call(e), y = 0; !(u = e.next()).done; )
            u = u.value, d = h + m(u, y++), l += A(
              u,
              r,
              n,
              d,
              s
            );
        else if (d === "object") {
          if (typeof e.then == "function")
            return A(
              ae(e),
              r,
              n,
              u,
              s
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return l;
      }
      function z(e, r, n) {
        if (e == null) return e;
        var u = [], s = 0;
        return A(e, u, "", "", function(d) {
          return r.call(n, d, s++);
        }), u;
      }
      function V(e) {
        if (e._status === -1) {
          var r = e._ioInfo;
          r != null && (r.start = r.end = performance.now()), r = e._result;
          var n = r();
          if (n.then(
            function(s) {
              if (e._status === 0 || e._status === -1) {
                e._status = 1, e._result = s;
                var d = e._ioInfo;
                d != null && (d.end = performance.now()), n.status === void 0 && (n.status = "fulfilled", n.value = s);
              }
            },
            function(s) {
              if (e._status === 0 || e._status === -1) {
                e._status = 2, e._result = s;
                var d = e._ioInfo;
                d != null && (d.end = performance.now()), n.status === void 0 && (n.status = "rejected", n.reason = s);
              }
            }
          ), r = e._ioInfo, r != null) {
            r.value = n;
            var u = n.displayName;
            typeof u == "string" && (r.name = u);
          }
          e._status === -1 && (e._status = 0, e._result = n);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function g() {
        var e = p.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function J() {
        p.asyncTransitions--;
      }
      function j(e) {
        if (fe === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            fe = (R && R[r]).call(
              R,
              "timers"
            ).setImmediate;
          } catch {
            fe = function(u) {
              ke === !1 && (ke = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var s = new MessageChannel();
              s.port1.onmessage = u, s.port2.postMessage(void 0);
            };
          }
        return fe(e);
      }
      function L(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function O(e, r) {
        r !== le - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), le = r;
      }
      function P(e, r, n) {
        var u = p.actQueue;
        if (u !== null)
          if (u.length !== 0)
            try {
              ee(u), j(function() {
                return P(e, r, n);
              });
              return;
            } catch (s) {
              p.thrownErrors.push(s);
            }
          else p.actQueue = null;
        0 < p.thrownErrors.length ? (u = L(p.thrownErrors), p.thrownErrors.length = 0, n(u)) : r(e);
      }
      function ee(e) {
        if (!_e) {
          _e = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var n = e[r];
              do {
                p.didUsePromise = !1;
                var u = n(!1);
                if (u !== null) {
                  if (p.didUsePromise) {
                    e[r] = n, e.splice(0, r);
                    return;
                  }
                  n = u;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (s) {
            e.splice(0, r + 1), p.thrownErrors.push(s);
          } finally {
            _e = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var W = Symbol.for("react.transitional.element"), ie = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), Ee = Symbol.for("react.activity"), me = Symbol.iterator, ve = {}, he = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          M(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          M(e, "replaceState");
        },
        enqueueSetState: function(e) {
          M(e, "setState");
        }
      }, ge = Object.assign, ye = {};
      Object.freeze(ye), T.prototype.isReactComponent = {}, T.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, T.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var C = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (te in C)
        C.hasOwnProperty(te) && G(te, C[te]);
      ne.prototype = T.prototype, C = Q.prototype = new ne(), C.constructor = Q, ge(C, T.prototype), C.isPureReactComponent = !0;
      var we = Array.isArray, De = Symbol.for("react.client.reference"), p = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, ce = Object.prototype.hasOwnProperty, Re = console.createTask ? console.createTask : function() {
        return null;
      };
      C = {
        react_stack_bottom_frame: function(e) {
          return e();
        }
      };
      var Te, be, Ce = {}, Le = C.react_stack_bottom_frame.bind(
        C,
        x
      )(), Ye = Re(K(x)), Oe = !1, Ae = /\/+/g, Se = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, ke = !1, fe = null, le = 0, pe = !1, _e = !1, je = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : j;
      C = Object.freeze({
        __proto__: null,
        c: function(e) {
          return g().useMemoCache(e);
        }
      });
      var te = {
        map: z,
        forEach: function(e, r, n) {
          z(
            e,
            function() {
              r.apply(this, arguments);
            },
            n
          );
        },
        count: function(e) {
          var r = 0;
          return z(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return z(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!S(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      };
      a.Activity = Ee, a.Children = te, a.Component = T, a.Fragment = t, a.Profiler = c, a.PureComponent = Q, a.StrictMode = o, a.Suspense = v, a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = p, a.__COMPILER_RUNTIME = C, a.act = function(e) {
        var r = p.actQueue, n = le;
        le++;
        var u = p.actQueue = r !== null ? r : [], s = !1;
        try {
          var d = e();
        } catch (y) {
          p.thrownErrors.push(y);
        }
        if (0 < p.thrownErrors.length)
          throw O(r, n), e = L(p.thrownErrors), p.thrownErrors.length = 0, e;
        if (d !== null && typeof d == "object" && typeof d.then == "function") {
          var l = d;
          return je(function() {
            s || pe || (pe = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(y, N) {
              s = !0, l.then(
                function(B) {
                  if (O(r, n), n === 0) {
                    try {
                      ee(u), j(function() {
                        return P(
                          B,
                          y,
                          N
                        );
                      });
                    } catch (Ie) {
                      p.thrownErrors.push(Ie);
                    }
                    if (0 < p.thrownErrors.length) {
                      var He = L(
                        p.thrownErrors
                      );
                      p.thrownErrors.length = 0, N(He);
                    }
                  } else y(B);
                },
                function(B) {
                  O(r, n), 0 < p.thrownErrors.length && (B = L(
                    p.thrownErrors
                  ), p.thrownErrors.length = 0), N(B);
                }
              );
            }
          };
        }
        var h = d;
        if (O(r, n), n === 0 && (ee(u), u.length !== 0 && je(function() {
          s || pe || (pe = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), p.actQueue = null), 0 < p.thrownErrors.length)
          throw e = L(p.thrownErrors), p.thrownErrors.length = 0, e;
        return {
          then: function(y, N) {
            s = !0, n === 0 ? (p.actQueue = u, j(function() {
              return P(
                h,
                y,
                N
              );
            })) : y(h);
          }
        };
      }, a.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, a.cacheSignal = function() {
        return null;
      }, a.captureOwnerStack = function() {
        var e = p.getCurrentStack;
        return e === null ? null : e();
      }, a.cloneElement = function(e, r, n) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var u = ge({}, e.props), s = e.key, d = e._owner;
        if (r != null) {
          var l;
          e: {
            if (ce.call(r, "ref") && (l = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && l.isReactWarning) {
              l = !1;
              break e;
            }
            l = r.ref !== void 0;
          }
          l && (d = ue()), X(r) && (D(r.key), s = "" + r.key);
          for (h in r)
            !ce.call(r, h) || h === "key" || h === "__self" || h === "__source" || h === "ref" && r.ref === void 0 || (u[h] = r[h]);
        }
        var h = arguments.length - 2;
        if (h === 1) u.children = n;
        else if (1 < h) {
          l = Array(h);
          for (var y = 0; y < h; y++)
            l[y] = arguments[y + 2];
          u.children = l;
        }
        for (u = U(
          e.type,
          s,
          u,
          d,
          e._debugStack,
          e._debugTask
        ), s = 2; s < arguments.length; s++)
          q(arguments[s]);
        return u;
      }, a.createContext = function(e) {
        return e = {
          $$typeof: _,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: i,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, a.createElement = function(e, r, n) {
        for (var u = 2; u < arguments.length; u++)
          q(arguments[u]);
        u = {};
        var s = null;
        if (r != null)
          for (y in be || !("__self" in r) || "key" in r || (be = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), X(r) && (D(r.key), s = "" + r.key), r)
            ce.call(r, y) && y !== "key" && y !== "__self" && y !== "__source" && (u[y] = r[y]);
        var d = arguments.length - 2;
        if (d === 1) u.children = n;
        else if (1 < d) {
          for (var l = Array(d), h = 0; h < d; h++)
            l[h] = arguments[h + 2];
          Object.freeze && Object.freeze(l), u.children = l;
        }
        if (e && e.defaultProps)
          for (y in d = e.defaultProps, d)
            u[y] === void 0 && (u[y] = d[y]);
        s && se(
          u,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var y = 1e4 > p.recentlyCreatedOwnerStacks++;
        return U(
          e,
          s,
          u,
          ue(),
          y ? Error("react-stack-top-frame") : Le,
          y ? Re(K(e)) : Ye
        );
      }, a.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, a.forwardRef = function(e) {
        e != null && e.$$typeof === w ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: E, render: e }, n;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return n;
          },
          set: function(u) {
            n = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, a.isValidElement = S, a.lazy = function(e) {
        e = { _status: -1, _result: e };
        var r = {
          $$typeof: Y,
          _payload: e,
          _init: V
        }, n = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return e._ioInfo = n, r._debugInfo = [{ awaited: n }], r;
      }, a.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: w,
          type: e,
          compare: r === void 0 ? null : r
        };
        var n;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return n;
          },
          set: function(u) {
            n = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, a.startTransition = function(e) {
        var r = p.T, n = {};
        n._updatedFibers = /* @__PURE__ */ new Set(), p.T = n;
        try {
          var u = e(), s = p.S;
          s !== null && s(n, u), typeof u == "object" && u !== null && typeof u.then == "function" && (p.asyncTransitions++, u.then(J, J), u.then($, Se));
        } catch (d) {
          Se(d);
        } finally {
          r === null && n._updatedFibers && (e = n._updatedFibers.size, n._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), r !== null && n.types !== null && (r.types !== null && r.types !== n.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), r.types = n.types), p.T = r;
        }
      }, a.unstable_useCacheRefresh = function() {
        return g().useCacheRefresh();
      }, a.use = function(e) {
        return g().use(e);
      }, a.useActionState = function(e, r, n) {
        return g().useActionState(
          e,
          r,
          n
        );
      }, a.useCallback = function(e, r) {
        return g().useCallback(e, r);
      }, a.useContext = function(e) {
        var r = g();
        return e.$$typeof === i && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, a.useDebugValue = function(e, r) {
        return g().useDebugValue(e, r);
      }, a.useDeferredValue = function(e, r) {
        return g().useDeferredValue(e, r);
      }, a.useEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), g().useEffect(e, r);
      }, a.useEffectEvent = function(e) {
        return g().useEffectEvent(e);
      }, a.useId = function() {
        return g().useId();
      }, a.useImperativeHandle = function(e, r, n) {
        return g().useImperativeHandle(e, r, n);
      }, a.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), g().useInsertionEffect(e, r);
      }, a.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), g().useLayoutEffect(e, r);
      }, a.useMemo = function(e, r) {
        return g().useMemo(e, r);
      }, a.useOptimistic = function(e, r) {
        return g().useOptimistic(e, r);
      }, a.useReducer = function(e, r, n) {
        return g().useReducer(e, r, n);
      }, a.useRef = function(e) {
        return g().useRef(e);
      }, a.useState = function(e) {
        return g().useState(e);
      }, a.useSyncExternalStore = function(e, r, n) {
        return g().useSyncExternalStore(
          e,
          r,
          n
        );
      }, a.useTransition = function() {
        return g().useTransition();
      }, a.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(re, re.exports)), re.exports;
}
var Me;
function We() {
  return Me || (Me = 1, process.env.NODE_ENV === "production" ? de.exports = qe() : de.exports = ze()), de.exports;
}
var Be = We();
const Ge = /* @__PURE__ */ Ue(Be), Qe = "w-full min-h-[36px] max-h-[36px] px-4 py-2 rounded-lg text-center text-[14px] leading-[20px] font-semibold transition", $e = {
  primary: "text-white bg-[#3498DB] hover:bg-[#2E86C1]",
  secondary: "text-[#2C3E50] bg-[#F5F7FA] border border-[#D5D8DC] hover:bg-[#EAECEE]",
  danger: "text-white bg-[#E74C3C] hover:bg-[#CB4335]"
}, Ke = "text-[#95A5A6] bg-[#D5D8DC] border border-[#D5D8DC] cursor-not-allowed", xe = ({
  variant: R = "primary",
  label: a,
  disabled: G,
  loading: H,
  ...M
}) => {
  const T = G || H;
  return /* @__PURE__ */ Ge.createElement(
    "button",
    {
      ...M,
      disabled: T,
      className: `${Qe} ${T ? Ke : $e[R]}`
    },
    H ? "Loading..." : a
  );
};
export {
  xe as Button
};
