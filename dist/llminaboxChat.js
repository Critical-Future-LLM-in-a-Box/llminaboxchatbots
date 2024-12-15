var uy = Object.defineProperty;
var Vf = (e) => {
  throw TypeError(e);
};
var cy = (e, t, n) => t in e ? uy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ie = (e, t, n) => cy(e, typeof t != "symbol" ? t + "" : t, n), Kf = (e, t, n) => t.has(e) || Vf("Cannot " + n);
var Dr = (e, t, n) => (Kf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Gf = (e, t, n) => t.has(e) ? Vf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), qf = (e, t, n, r) => (Kf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
function dy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Xc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fy(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Rm = { exports: {} }, Al = {}, Em = { exports: {} }, oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi = Symbol.for("react.element"), py = Symbol.for("react.portal"), hy = Symbol.for("react.fragment"), my = Symbol.for("react.strict_mode"), gy = Symbol.for("react.profiler"), vy = Symbol.for("react.provider"), yy = Symbol.for("react.context"), xy = Symbol.for("react.forward_ref"), by = Symbol.for("react.suspense"), ky = Symbol.for("react.memo"), wy = Symbol.for("react.lazy"), Qf = Symbol.iterator;
function Cy(e) {
  return e === null || typeof e != "object" ? null : (e = Qf && e[Qf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $m = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Pm = Object.assign, Tm = {};
function Mo(e, t, n) {
  this.props = e, this.context = t, this.refs = Tm, this.updater = n || $m;
}
Mo.prototype.isReactComponent = {};
Mo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _m() {
}
_m.prototype = Mo.prototype;
function Yc(e, t, n) {
  this.props = e, this.context = t, this.refs = Tm, this.updater = n || $m;
}
var Zc = Yc.prototype = new _m();
Zc.constructor = Yc;
Pm(Zc, Mo.prototype);
Zc.isPureReactComponent = !0;
var Xf = Array.isArray, Im = Object.prototype.hasOwnProperty, Jc = { current: null }, Mm = { key: !0, ref: !0, __self: !0, __source: !0 };
function zm(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Im.call(t, r) && !Mm.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Yi, type: e, key: i, ref: s, props: o, _owner: Jc.current };
}
function Sy(e, t) {
  return { $$typeof: Yi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ed(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yi;
}
function Ry(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Yf = /\/+/g;
function Ha(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ry("" + e.key) : t.toString(36);
}
function zs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Yi:
        case py:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Ha(s, 0) : r, Xf(o) ? (n = "", e != null && (n = e.replace(Yf, "$&/") + "/"), zs(o, t, n, "", function(u) {
    return u;
  })) : o != null && (ed(o) && (o = Sy(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Yf, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Xf(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + Ha(i, l);
    s += zs(i, t, n, a, o);
  }
  else if (a = Cy(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + Ha(i, l++), s += zs(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function as(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return zs(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Ey(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var at = { current: null }, As = { transition: null }, $y = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: As, ReactCurrentOwner: Jc };
oe.Children = { map: as, forEach: function(e, t, n) {
  as(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return as(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return as(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ed(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
oe.Component = Mo;
oe.Fragment = hy;
oe.Profiler = gy;
oe.PureComponent = Yc;
oe.StrictMode = my;
oe.Suspense = by;
oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $y;
oe.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Pm({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Jc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Im.call(t, a) && !Mm.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Yi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
oe.createContext = function(e) {
  return e = { $$typeof: yy, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vy, _context: e }, e.Consumer = e;
};
oe.createElement = zm;
oe.createFactory = function(e) {
  var t = zm.bind(null, e);
  return t.type = e, t;
};
oe.createRef = function() {
  return { current: null };
};
oe.forwardRef = function(e) {
  return { $$typeof: xy, render: e };
};
oe.isValidElement = ed;
oe.lazy = function(e) {
  return { $$typeof: wy, _payload: { _status: -1, _result: e }, _init: Ey };
};
oe.memo = function(e, t) {
  return { $$typeof: ky, type: e, compare: t === void 0 ? null : t };
};
oe.startTransition = function(e) {
  var t = As.transition;
  As.transition = {};
  try {
    e();
  } finally {
    As.transition = t;
  }
};
oe.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
oe.useCallback = function(e, t) {
  return at.current.useCallback(e, t);
};
oe.useContext = function(e) {
  return at.current.useContext(e);
};
oe.useDebugValue = function() {
};
oe.useDeferredValue = function(e) {
  return at.current.useDeferredValue(e);
};
oe.useEffect = function(e, t) {
  return at.current.useEffect(e, t);
};
oe.useId = function() {
  return at.current.useId();
};
oe.useImperativeHandle = function(e, t, n) {
  return at.current.useImperativeHandle(e, t, n);
};
oe.useInsertionEffect = function(e, t) {
  return at.current.useInsertionEffect(e, t);
};
oe.useLayoutEffect = function(e, t) {
  return at.current.useLayoutEffect(e, t);
};
oe.useMemo = function(e, t) {
  return at.current.useMemo(e, t);
};
oe.useReducer = function(e, t, n) {
  return at.current.useReducer(e, t, n);
};
oe.useRef = function(e) {
  return at.current.useRef(e);
};
oe.useState = function(e) {
  return at.current.useState(e);
};
oe.useSyncExternalStore = function(e, t, n) {
  return at.current.useSyncExternalStore(e, t, n);
};
oe.useTransition = function() {
  return at.current.useTransition();
};
oe.version = "18.2.0";
Em.exports = oe;
var x = Em.exports;
const it = /* @__PURE__ */ Xc(x), zu = /* @__PURE__ */ dy({
  __proto__: null,
  default: it
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Py = x, Ty = Symbol.for("react.element"), _y = Symbol.for("react.fragment"), Iy = Object.prototype.hasOwnProperty, My = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Am(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Iy.call(t, r) && !zy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Ty, type: e, key: i, ref: s, props: o, _owner: My.current };
}
Al.Fragment = _y;
Al.jsx = Am;
Al.jsxs = Am;
Rm.exports = Al;
var k = Rm.exports, Au = {}, Om = { exports: {} }, Tt = {}, Nm = { exports: {} }, Lm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(T, I) {
    var z = T.length;
    T.push(I);
    e: for (; 0 < z; ) {
      var G = z - 1 >>> 1, K = T[G];
      if (0 < o(K, I)) T[G] = I, T[z] = K, z = G;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0], z = T.pop();
    if (z !== I) {
      T[0] = z;
      e: for (var G = 0, K = T.length, ce = K >>> 1; G < ce; ) {
        var Y = 2 * (G + 1) - 1, X = T[Y], re = Y + 1, Pe = T[re];
        if (0 > o(X, z)) re < K && 0 > o(Pe, X) ? (T[G] = Pe, T[re] = z, G = re) : (T[G] = X, T[Y] = z, G = Y);
        else if (re < K && 0 > o(Pe, z)) T[G] = Pe, T[re] = z, G = re;
        else break e;
      }
    }
    return I;
  }
  function o(T, I) {
    var z = T.sortIndex - I.sortIndex;
    return z !== 0 ? z : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], u = [], c = 1, f = null, d = 3, m = !1, v = !1, y = !1, R = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= T) r(u), I.sortIndex = I.expirationTime, t(a, I);
      else break;
      I = n(u);
    }
  }
  function w(T) {
    if (y = !1, g(T), !v) if (n(a) !== null) v = !0, V(S);
    else {
      var I = n(u);
      I !== null && B(w, I.startTime - T);
    }
  }
  function S(T, I) {
    v = !1, y && (y = !1, h($), $ = -1), m = !0;
    var z = d;
    try {
      for (g(I), f = n(a); f !== null && (!(f.expirationTime > I) || T && !L()); ) {
        var G = f.callback;
        if (typeof G == "function") {
          f.callback = null, d = f.priorityLevel;
          var K = G(f.expirationTime <= I);
          I = e.unstable_now(), typeof K == "function" ? f.callback = K : f === n(a) && r(a), g(I);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ce = !0;
      else {
        var Y = n(u);
        Y !== null && B(w, Y.startTime - I), ce = !1;
      }
      return ce;
    } finally {
      f = null, d = z, m = !1;
    }
  }
  var E = !1, C = null, $ = -1, _ = 5, P = -1;
  function L() {
    return !(e.unstable_now() - P < _);
  }
  function F() {
    if (C !== null) {
      var T = e.unstable_now();
      P = T;
      var I = !0;
      try {
        I = C(!0, T);
      } finally {
        I ? D() : (E = !1, C = null);
      }
    } else E = !1;
  }
  var D;
  if (typeof p == "function") D = function() {
    p(F);
  };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(), N = A.port2;
    A.port1.onmessage = F, D = function() {
      N.postMessage(null);
    };
  } else D = function() {
    R(F, 0);
  };
  function V(T) {
    C = T, E || (E = !0, D());
  }
  function B(T, I) {
    $ = R(function() {
      T(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    v || m || (v = !0, V(S));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(T) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = d;
    }
    var z = d;
    d = I;
    try {
      return T();
    } finally {
      d = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, I) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var z = d;
    d = T;
    try {
      return I();
    } finally {
      d = z;
    }
  }, e.unstable_scheduleCallback = function(T, I, z) {
    var G = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? G + z : G) : z = G, T) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = z + K, T = { id: c++, callback: I, priorityLevel: T, startTime: z, expirationTime: K, sortIndex: -1 }, z > G ? (T.sortIndex = z, t(u, T), n(a) === null && T === n(u) && (y ? (h($), $ = -1) : y = !0, B(w, z - G))) : (T.sortIndex = K, t(a, T), v || m || (v = !0, V(S))), T;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(T) {
    var I = d;
    return function() {
      var z = d;
      d = I;
      try {
        return T.apply(this, arguments);
      } finally {
        d = z;
      }
    };
  };
})(Lm);
Nm.exports = Lm;
var Ay = Nm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm = x, Et = Ay;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Fm = /* @__PURE__ */ new Set(), Ri = {};
function Ar(e, t) {
  vo(e, t), vo(e + "Capture", t);
}
function vo(e, t) {
  for (Ri[e] = t, e = 0; e < t.length; e++) Fm.add(t[e]);
}
var En = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ou = Object.prototype.hasOwnProperty, Oy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zf = {}, Jf = {};
function Ny(e) {
  return Ou.call(Jf, e) ? !0 : Ou.call(Zf, e) ? !1 : Oy.test(e) ? Jf[e] = !0 : (Zf[e] = !0, !1);
}
function Ly(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jy(e, t, n, r) {
  if (t === null || typeof t > "u" || Ly(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ut(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Xe[e] = new ut(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Xe[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Xe[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Xe[e] = new ut(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Xe[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Xe[e] = new ut(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Xe[e] = new ut(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Xe[e] = new ut(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Xe[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var td = /[\-:]([a-z])/g;
function nd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    td,
    nd
  );
  Xe[t] = new ut(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(td, nd);
  Xe[t] = new ut(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(td, nd);
  Xe[t] = new ut(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Xe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Xe.xlinkHref = new ut("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Xe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function rd(e, t, n, r) {
  var o = Xe.hasOwnProperty(t) ? Xe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jy(t, n, o, r) && (n = null), r || o === null ? Ny(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _n = jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, us = Symbol.for("react.element"), Qr = Symbol.for("react.portal"), Xr = Symbol.for("react.fragment"), od = Symbol.for("react.strict_mode"), Nu = Symbol.for("react.profiler"), Dm = Symbol.for("react.provider"), Bm = Symbol.for("react.context"), id = Symbol.for("react.forward_ref"), Lu = Symbol.for("react.suspense"), ju = Symbol.for("react.suspense_list"), sd = Symbol.for("react.memo"), jn = Symbol.for("react.lazy"), Um = Symbol.for("react.offscreen"), ep = Symbol.iterator;
function Do(e) {
  return e === null || typeof e != "object" ? null : (e = ep && e[ep] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $e = Object.assign, Va;
function ni(e) {
  if (Va === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Va = t && t[1] || "";
  }
  return `
` + Va + e;
}
var Ka = !1;
function Ga(e, t) {
  if (!e || Ka) return "";
  Ka = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
        if (s !== 1 || l !== 1)
          do
            if (s--, l--, 0 > l || o[s] !== i[l]) {
              var a = `
` + o[s].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    Ka = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ni(e) : "";
}
function Fy(e) {
  switch (e.tag) {
    case 5:
      return ni(e.type);
    case 16:
      return ni("Lazy");
    case 13:
      return ni("Suspense");
    case 19:
      return ni("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ga(e.type, !1), e;
    case 11:
      return e = Ga(e.type.render, !1), e;
    case 1:
      return e = Ga(e.type, !0), e;
    default:
      return "";
  }
}
function Fu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xr:
      return "Fragment";
    case Qr:
      return "Portal";
    case Nu:
      return "Profiler";
    case od:
      return "StrictMode";
    case Lu:
      return "Suspense";
    case ju:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Bm:
      return (e.displayName || "Context") + ".Consumer";
    case Dm:
      return (e._context.displayName || "Context") + ".Provider";
    case id:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case sd:
      return t = e.displayName || null, t !== null ? t : Fu(e.type) || "Memo";
    case jn:
      t = e._payload, e = e._init;
      try {
        return Fu(e(t));
      } catch {
      }
  }
  return null;
}
function Dy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fu(t);
    case 8:
      return t === od ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function er(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Wm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function By(e) {
  var t = Wm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function cs(e) {
  e._valueTracker || (e._valueTracker = By(e));
}
function Hm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Wm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Xs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Du(e, t) {
  var n = t.checked;
  return $e({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function tp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = er(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Vm(e, t) {
  t = t.checked, t != null && rd(e, "checked", t, !1);
}
function Bu(e, t) {
  Vm(e, t);
  var n = er(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Uu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Uu(e, t.type, er(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function np(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Uu(e, t, n) {
  (t !== "number" || Xs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ri = Array.isArray;
function lo(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + er(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return $e({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function rp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(O(92));
      if (ri(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: er(n) };
}
function Km(e, t) {
  var n = er(t.value), r = er(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function op(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Gm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ds, qm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ds = ds || document.createElement("div"), ds.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ds.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ei(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ai = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Uy = ["Webkit", "ms", "Moz", "O"];
Object.keys(ai).forEach(function(e) {
  Uy.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ai[t] = ai[e];
  });
});
function Qm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ai.hasOwnProperty(e) && ai[e] ? ("" + t).trim() : t + "px";
}
function Xm(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Qm(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Wy = $e({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vu(e, t) {
  if (t) {
    if (Wy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Ku(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Gu = null;
function ld(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var qu = null, ao = null, uo = null;
function ip(e) {
  if (e = es(e)) {
    if (typeof qu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && (t = Fl(t), qu(e.stateNode, e.type, t));
  }
}
function Ym(e) {
  ao ? uo ? uo.push(e) : uo = [e] : ao = e;
}
function Zm() {
  if (ao) {
    var e = ao, t = uo;
    if (uo = ao = null, ip(e), t) for (e = 0; e < t.length; e++) ip(t[e]);
  }
}
function Jm(e, t) {
  return e(t);
}
function eg() {
}
var qa = !1;
function tg(e, t, n) {
  if (qa) return e(t, n);
  qa = !0;
  try {
    return Jm(e, t, n);
  } finally {
    qa = !1, (ao !== null || uo !== null) && (eg(), Zm());
  }
}
function $i(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Qu = !1;
if (En) try {
  var Bo = {};
  Object.defineProperty(Bo, "passive", { get: function() {
    Qu = !0;
  } }), window.addEventListener("test", Bo, Bo), window.removeEventListener("test", Bo, Bo);
} catch {
  Qu = !1;
}
function Hy(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ui = !1, Ys = null, Zs = !1, Xu = null, Vy = { onError: function(e) {
  ui = !0, Ys = e;
} };
function Ky(e, t, n, r, o, i, s, l, a) {
  ui = !1, Ys = null, Hy.apply(Vy, arguments);
}
function Gy(e, t, n, r, o, i, s, l, a) {
  if (Ky.apply(this, arguments), ui) {
    if (ui) {
      var u = Ys;
      ui = !1, Ys = null;
    } else throw Error(O(198));
    Zs || (Zs = !0, Xu = u);
  }
}
function Or(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ng(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function sp(e) {
  if (Or(e) !== e) throw Error(O(188));
}
function qy(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Or(e), t === null) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return sp(o), e;
        if (i === r) return sp(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (l === r) {
          s = !0, r = o, n = i;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (l === r) {
            s = !0, r = i, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function rg(e) {
  return e = qy(e), e !== null ? og(e) : null;
}
function og(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = og(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ig = Et.unstable_scheduleCallback, lp = Et.unstable_cancelCallback, Qy = Et.unstable_shouldYield, Xy = Et.unstable_requestPaint, Ae = Et.unstable_now, Yy = Et.unstable_getCurrentPriorityLevel, ad = Et.unstable_ImmediatePriority, sg = Et.unstable_UserBlockingPriority, Js = Et.unstable_NormalPriority, Zy = Et.unstable_LowPriority, lg = Et.unstable_IdlePriority, Ol = null, pn = null;
function Jy(e) {
  if (pn && typeof pn.onCommitFiberRoot == "function") try {
    pn.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var en = Math.clz32 ? Math.clz32 : n1, e1 = Math.log, t1 = Math.LN2;
function n1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (e1(e) / t1 | 0) | 0;
}
var fs = 64, ps = 4194304;
function oi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = oi(l) : (i &= s, i !== 0 && (r = oi(i)));
  } else s = n & ~o, s !== 0 ? r = oi(s) : i !== 0 && (r = oi(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - en(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function r1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function o1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - en(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = r1(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function Yu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ag() {
  var e = fs;
  return fs <<= 1, !(fs & 4194240) && (fs = 64), e;
}
function Qa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - en(t), e[t] = n;
}
function i1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - en(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ud(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - en(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var fe = 0;
function ug(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var cg, cd, dg, fg, pg, Zu = !1, hs = [], Kn = null, Gn = null, qn = null, Pi = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map(), Dn = [], s1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ap(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kn = null;
      break;
    case "dragenter":
    case "dragleave":
      Gn = null;
      break;
    case "mouseover":
    case "mouseout":
      qn = null;
      break;
    case "pointerover":
    case "pointerout":
      Pi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ti.delete(t.pointerId);
  }
}
function Uo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = es(t), t !== null && cd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function l1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Kn = Uo(Kn, e, t, n, r, o), !0;
    case "dragenter":
      return Gn = Uo(Gn, e, t, n, r, o), !0;
    case "mouseover":
      return qn = Uo(qn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Pi.set(i, Uo(Pi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ti.set(i, Uo(Ti.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function hg(e) {
  var t = gr(e.target);
  if (t !== null) {
    var n = Or(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ng(n), t !== null) {
          e.blockedOn = t, pg(e.priority, function() {
            dg(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Os(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ju(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Gu = r, n.target.dispatchEvent(r), Gu = null;
    } else return t = es(n), t !== null && cd(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function up(e, t, n) {
  Os(e) && n.delete(t);
}
function a1() {
  Zu = !1, Kn !== null && Os(Kn) && (Kn = null), Gn !== null && Os(Gn) && (Gn = null), qn !== null && Os(qn) && (qn = null), Pi.forEach(up), Ti.forEach(up);
}
function Wo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Zu || (Zu = !0, Et.unstable_scheduleCallback(Et.unstable_NormalPriority, a1)));
}
function _i(e) {
  function t(o) {
    return Wo(o, e);
  }
  if (0 < hs.length) {
    Wo(hs[0], e);
    for (var n = 1; n < hs.length; n++) {
      var r = hs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Kn !== null && Wo(Kn, e), Gn !== null && Wo(Gn, e), qn !== null && Wo(qn, e), Pi.forEach(t), Ti.forEach(t), n = 0; n < Dn.length; n++) r = Dn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dn.length && (n = Dn[0], n.blockedOn === null); ) hg(n), n.blockedOn === null && Dn.shift();
}
var co = _n.ReactCurrentBatchConfig, tl = !0;
function u1(e, t, n, r) {
  var o = fe, i = co.transition;
  co.transition = null;
  try {
    fe = 1, dd(e, t, n, r);
  } finally {
    fe = o, co.transition = i;
  }
}
function c1(e, t, n, r) {
  var o = fe, i = co.transition;
  co.transition = null;
  try {
    fe = 4, dd(e, t, n, r);
  } finally {
    fe = o, co.transition = i;
  }
}
function dd(e, t, n, r) {
  if (tl) {
    var o = Ju(e, t, n, r);
    if (o === null) iu(e, t, r, nl, n), ap(e, r);
    else if (l1(o, e, t, n, r)) r.stopPropagation();
    else if (ap(e, r), t & 4 && -1 < s1.indexOf(e)) {
      for (; o !== null; ) {
        var i = es(o);
        if (i !== null && cg(i), i = Ju(e, t, n, r), i === null && iu(e, t, r, nl, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else iu(e, t, r, null, n);
  }
}
var nl = null;
function Ju(e, t, n, r) {
  if (nl = null, e = ld(r), e = gr(e), e !== null) if (t = Or(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ng(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return nl = e, null;
}
function mg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Yy()) {
        case ad:
          return 1;
        case sg:
          return 4;
        case Js:
        case Zy:
          return 16;
        case lg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wn = null, fd = null, Ns = null;
function gg() {
  if (Ns) return Ns;
  var e, t = fd, n = t.length, r, o = "value" in Wn ? Wn.value : Wn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Ns = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ls(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ms() {
  return !0;
}
function cp() {
  return !1;
}
function _t(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ms : cp, this.isPropagationStopped = cp, this;
  }
  return $e(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ms);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ms);
  }, persist: function() {
  }, isPersistent: ms }), t;
}
var zo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, pd = _t(zo), Ji = $e({}, zo, { view: 0, detail: 0 }), d1 = _t(Ji), Xa, Ya, Ho, Nl = $e({}, Ji, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ho && (Ho && e.type === "mousemove" ? (Xa = e.screenX - Ho.screenX, Ya = e.screenY - Ho.screenY) : Ya = Xa = 0, Ho = e), Xa);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ya;
} }), dp = _t(Nl), f1 = $e({}, Nl, { dataTransfer: 0 }), p1 = _t(f1), h1 = $e({}, Ji, { relatedTarget: 0 }), Za = _t(h1), m1 = $e({}, zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), g1 = _t(m1), v1 = $e({}, zo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), y1 = _t(v1), x1 = $e({}, zo, { data: 0 }), fp = _t(x1), b1 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, k1 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, w1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function C1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = w1[e]) ? !!t[e] : !1;
}
function hd() {
  return C1;
}
var S1 = $e({}, Ji, { key: function(e) {
  if (e.key) {
    var t = b1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ls(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? k1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hd, charCode: function(e) {
  return e.type === "keypress" ? Ls(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ls(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), R1 = _t(S1), E1 = $e({}, Nl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pp = _t(E1), $1 = $e({}, Ji, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hd }), P1 = _t($1), T1 = $e({}, zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _1 = _t(T1), I1 = $e({}, Nl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), M1 = _t(I1), z1 = [9, 13, 27, 32], md = En && "CompositionEvent" in window, ci = null;
En && "documentMode" in document && (ci = document.documentMode);
var A1 = En && "TextEvent" in window && !ci, vg = En && (!md || ci && 8 < ci && 11 >= ci), hp = " ", mp = !1;
function yg(e, t) {
  switch (e) {
    case "keyup":
      return z1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Yr = !1;
function O1(e, t) {
  switch (e) {
    case "compositionend":
      return xg(t);
    case "keypress":
      return t.which !== 32 ? null : (mp = !0, hp);
    case "textInput":
      return e = t.data, e === hp && mp ? null : e;
    default:
      return null;
  }
}
function N1(e, t) {
  if (Yr) return e === "compositionend" || !md && yg(e, t) ? (e = gg(), Ns = fd = Wn = null, Yr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return vg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var L1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!L1[e.type] : t === "textarea";
}
function bg(e, t, n, r) {
  Ym(r), t = rl(t, "onChange"), 0 < t.length && (n = new pd("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var di = null, Ii = null;
function j1(e) {
  Ig(e, 0);
}
function Ll(e) {
  var t = eo(e);
  if (Hm(t)) return e;
}
function F1(e, t) {
  if (e === "change") return t;
}
var kg = !1;
if (En) {
  var Ja;
  if (En) {
    var eu = "oninput" in document;
    if (!eu) {
      var vp = document.createElement("div");
      vp.setAttribute("oninput", "return;"), eu = typeof vp.oninput == "function";
    }
    Ja = eu;
  } else Ja = !1;
  kg = Ja && (!document.documentMode || 9 < document.documentMode);
}
function yp() {
  di && (di.detachEvent("onpropertychange", wg), Ii = di = null);
}
function wg(e) {
  if (e.propertyName === "value" && Ll(Ii)) {
    var t = [];
    bg(t, Ii, e, ld(e)), tg(j1, t);
  }
}
function D1(e, t, n) {
  e === "focusin" ? (yp(), di = t, Ii = n, di.attachEvent("onpropertychange", wg)) : e === "focusout" && yp();
}
function B1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ll(Ii);
}
function U1(e, t) {
  if (e === "click") return Ll(t);
}
function W1(e, t) {
  if (e === "input" || e === "change") return Ll(t);
}
function H1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nn = typeof Object.is == "function" ? Object.is : H1;
function Mi(e, t) {
  if (nn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ou.call(t, o) || !nn(e[o], t[o])) return !1;
  }
  return !0;
}
function xp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function bp(e, t) {
  var n = xp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = xp(n);
  }
}
function Cg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Sg() {
  for (var e = window, t = Xs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xs(e.document);
  }
  return t;
}
function gd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function V1(e) {
  var t = Sg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Cg(n.ownerDocument.documentElement, n)) {
    if (r !== null && gd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = bp(n, i);
        var s = bp(
          n,
          r
        );
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var K1 = En && "documentMode" in document && 11 >= document.documentMode, Zr = null, ec = null, fi = null, tc = !1;
function kp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  tc || Zr == null || Zr !== Xs(r) || (r = Zr, "selectionStart" in r && gd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fi && Mi(fi, r) || (fi = r, r = rl(ec, "onSelect"), 0 < r.length && (t = new pd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zr)));
}
function gs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Jr = { animationend: gs("Animation", "AnimationEnd"), animationiteration: gs("Animation", "AnimationIteration"), animationstart: gs("Animation", "AnimationStart"), transitionend: gs("Transition", "TransitionEnd") }, tu = {}, Rg = {};
En && (Rg = document.createElement("div").style, "AnimationEvent" in window || (delete Jr.animationend.animation, delete Jr.animationiteration.animation, delete Jr.animationstart.animation), "TransitionEvent" in window || delete Jr.transitionend.transition);
function jl(e) {
  if (tu[e]) return tu[e];
  if (!Jr[e]) return e;
  var t = Jr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rg) return tu[e] = t[n];
  return e;
}
var Eg = jl("animationend"), $g = jl("animationiteration"), Pg = jl("animationstart"), Tg = jl("transitionend"), _g = /* @__PURE__ */ new Map(), wp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function or(e, t) {
  _g.set(e, t), Ar(t, [e]);
}
for (var nu = 0; nu < wp.length; nu++) {
  var ru = wp[nu], G1 = ru.toLowerCase(), q1 = ru[0].toUpperCase() + ru.slice(1);
  or(G1, "on" + q1);
}
or(Eg, "onAnimationEnd");
or($g, "onAnimationIteration");
or(Pg, "onAnimationStart");
or("dblclick", "onDoubleClick");
or("focusin", "onFocus");
or("focusout", "onBlur");
or(Tg, "onTransitionEnd");
vo("onMouseEnter", ["mouseout", "mouseover"]);
vo("onMouseLeave", ["mouseout", "mouseover"]);
vo("onPointerEnter", ["pointerout", "pointerover"]);
vo("onPointerLeave", ["pointerout", "pointerover"]);
Ar("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ar("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ar("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ar("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ar("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Q1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));
function Cp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Gy(r, t, void 0, e), e.currentTarget = null;
}
function Ig(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Cp(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Cp(o, l, u), i = a;
      }
    }
  }
  if (Zs) throw e = Xu, Zs = !1, Xu = null, e;
}
function xe(e, t) {
  var n = t[sc];
  n === void 0 && (n = t[sc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Mg(t, e, 2, !1), n.add(r));
}
function ou(e, t, n) {
  var r = 0;
  t && (r |= 4), Mg(n, e, r, t);
}
var vs = "_reactListening" + Math.random().toString(36).slice(2);
function zi(e) {
  if (!e[vs]) {
    e[vs] = !0, Fm.forEach(function(n) {
      n !== "selectionchange" && (Q1.has(n) || ou(n, !1, e), ou(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vs] || (t[vs] = !0, ou("selectionchange", !1, t));
  }
}
function Mg(e, t, n, r) {
  switch (mg(t)) {
    case 1:
      var o = u1;
      break;
    case 4:
      o = c1;
      break;
    default:
      o = dd;
  }
  n = o.bind(null, t, n, e), o = void 0, !Qu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function iu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var a = s.tag;
        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = gr(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  tg(function() {
    var u = i, c = ld(n), f = [];
    e: {
      var d = _g.get(e);
      if (d !== void 0) {
        var m = pd, v = e;
        switch (e) {
          case "keypress":
            if (Ls(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = R1;
            break;
          case "focusin":
            v = "focus", m = Za;
            break;
          case "focusout":
            v = "blur", m = Za;
            break;
          case "beforeblur":
          case "afterblur":
            m = Za;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = dp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = p1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = P1;
            break;
          case Eg:
          case $g:
          case Pg:
            m = g1;
            break;
          case Tg:
            m = _1;
            break;
          case "scroll":
            m = d1;
            break;
          case "wheel":
            m = M1;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = y1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = pp;
        }
        var y = (t & 4) !== 0, R = !y && e === "scroll", h = y ? d !== null ? d + "Capture" : null : d;
        y = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var w = g.stateNode;
          if (g.tag === 5 && w !== null && (g = w, h !== null && (w = $i(p, h), w != null && y.push(Ai(p, w, g)))), R) break;
          p = p.return;
        }
        0 < y.length && (d = new m(d, v, null, n, c), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", d && n !== Gu && (v = n.relatedTarget || n.fromElement) && (gr(v) || v[$n])) break e;
        if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, m ? (v = n.relatedTarget || n.toElement, m = u, v = v ? gr(v) : null, v !== null && (R = Or(v), v !== R || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null, v = u), m !== v)) {
          if (y = dp, w = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (y = pp, w = "onPointerLeave", h = "onPointerEnter", p = "pointer"), R = m == null ? d : eo(m), g = v == null ? d : eo(v), d = new y(w, p + "leave", m, n, c), d.target = R, d.relatedTarget = g, w = null, gr(c) === u && (y = new y(h, p + "enter", v, n, c), y.target = g, y.relatedTarget = R, w = y), R = w, m && v) t: {
            for (y = m, h = v, p = 0, g = y; g; g = Br(g)) p++;
            for (g = 0, w = h; w; w = Br(w)) g++;
            for (; 0 < p - g; ) y = Br(y), p--;
            for (; 0 < g - p; ) h = Br(h), g--;
            for (; p--; ) {
              if (y === h || h !== null && y === h.alternate) break t;
              y = Br(y), h = Br(h);
            }
            y = null;
          }
          else y = null;
          m !== null && Sp(f, d, m, y, !1), v !== null && R !== null && Sp(f, R, v, y, !0);
        }
      }
      e: {
        if (d = u ? eo(u) : window, m = d.nodeName && d.nodeName.toLowerCase(), m === "select" || m === "input" && d.type === "file") var S = F1;
        else if (gp(d)) if (kg) S = W1;
        else {
          S = B1;
          var E = D1;
        }
        else (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = U1);
        if (S && (S = S(e, u))) {
          bg(f, S, n, c);
          break e;
        }
        E && E(e, d, u), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Uu(d, "number", d.value);
      }
      switch (E = u ? eo(u) : window, e) {
        case "focusin":
          (gp(E) || E.contentEditable === "true") && (Zr = E, ec = u, fi = null);
          break;
        case "focusout":
          fi = ec = Zr = null;
          break;
        case "mousedown":
          tc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          tc = !1, kp(f, n, c);
          break;
        case "selectionchange":
          if (K1) break;
        case "keydown":
        case "keyup":
          kp(f, n, c);
      }
      var C;
      if (md) e: {
        switch (e) {
          case "compositionstart":
            var $ = "onCompositionStart";
            break e;
          case "compositionend":
            $ = "onCompositionEnd";
            break e;
          case "compositionupdate":
            $ = "onCompositionUpdate";
            break e;
        }
        $ = void 0;
      }
      else Yr ? yg(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ && (vg && n.locale !== "ko" && (Yr || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Yr && (C = gg()) : (Wn = c, fd = "value" in Wn ? Wn.value : Wn.textContent, Yr = !0)), E = rl(u, $), 0 < E.length && ($ = new fp($, e, null, n, c), f.push({ event: $, listeners: E }), C ? $.data = C : (C = xg(n), C !== null && ($.data = C)))), (C = A1 ? O1(e, n) : N1(e, n)) && (u = rl(u, "onBeforeInput"), 0 < u.length && (c = new fp("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = C));
    }
    Ig(f, t);
  });
}
function Ai(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = $i(e, n), i != null && r.unshift(Ai(e, i, o)), i = $i(e, t), i != null && r.push(Ai(e, i, o))), e = e.return;
  }
  return r;
}
function Br(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Sp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = $i(n, i), a != null && s.unshift(Ai(n, a, l))) : o || (a = $i(n, i), a != null && s.push(Ai(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var X1 = /\r\n?/g, Y1 = /\u0000|\uFFFD/g;
function Rp(e) {
  return (typeof e == "string" ? e : "" + e).replace(X1, `
`).replace(Y1, "");
}
function ys(e, t, n) {
  if (t = Rp(t), Rp(e) !== t && n) throw Error(O(425));
}
function ol() {
}
var nc = null, rc = null;
function oc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ic = typeof setTimeout == "function" ? setTimeout : void 0, Z1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ep = typeof Promise == "function" ? Promise : void 0, J1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ep < "u" ? function(e) {
  return Ep.resolve(null).then(e).catch(ex);
} : ic;
function ex(e) {
  setTimeout(function() {
    throw e;
  });
}
function su(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), _i(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  _i(t);
}
function Qn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $p(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ao = Math.random().toString(36).slice(2), fn = "__reactFiber$" + Ao, Oi = "__reactProps$" + Ao, $n = "__reactContainer$" + Ao, sc = "__reactEvents$" + Ao, tx = "__reactListeners$" + Ao, nx = "__reactHandles$" + Ao;
function gr(e) {
  var t = e[fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[$n] || n[fn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = $p(e); e !== null; ) {
        if (n = e[fn]) return n;
        e = $p(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function es(e) {
  return e = e[fn] || e[$n], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function eo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Fl(e) {
  return e[Oi] || null;
}
var lc = [], to = -1;
function ir(e) {
  return { current: e };
}
function ke(e) {
  0 > to || (e.current = lc[to], lc[to] = null, to--);
}
function ye(e, t) {
  to++, lc[to] = e.current, e.current = t;
}
var tr = {}, nt = ir(tr), ht = ir(!1), Cr = tr;
function yo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function mt(e) {
  return e = e.childContextTypes, e != null;
}
function il() {
  ke(ht), ke(nt);
}
function Pp(e, t, n) {
  if (nt.current !== tr) throw Error(O(168));
  ye(nt, t), ye(ht, n);
}
function zg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, Dy(e) || "Unknown", o));
  return $e({}, n, r);
}
function sl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tr, Cr = nt.current, ye(nt, e), ye(ht, ht.current), !0;
}
function Tp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n ? (e = zg(e, t, Cr), r.__reactInternalMemoizedMergedChildContext = e, ke(ht), ke(nt), ye(nt, e)) : ke(ht), ye(ht, n);
}
var kn = null, Dl = !1, lu = !1;
function Ag(e) {
  kn === null ? kn = [e] : kn.push(e);
}
function rx(e) {
  Dl = !0, Ag(e);
}
function sr() {
  if (!lu && kn !== null) {
    lu = !0;
    var e = 0, t = fe;
    try {
      var n = kn;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      kn = null, Dl = !1;
    } catch (o) {
      throw kn !== null && (kn = kn.slice(e + 1)), ig(ad, sr), o;
    } finally {
      fe = t, lu = !1;
    }
  }
  return null;
}
var no = [], ro = 0, ll = null, al = 0, zt = [], At = 0, Sr = null, Cn = 1, Sn = "";
function dr(e, t) {
  no[ro++] = al, no[ro++] = ll, ll = e, al = t;
}
function Og(e, t, n) {
  zt[At++] = Cn, zt[At++] = Sn, zt[At++] = Sr, Sr = e;
  var r = Cn;
  e = Sn;
  var o = 32 - en(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - en(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Cn = 1 << 32 - en(t) + o | n << o | r, Sn = i + e;
  } else Cn = 1 << i | n << o | r, Sn = e;
}
function vd(e) {
  e.return !== null && (dr(e, 1), Og(e, 1, 0));
}
function yd(e) {
  for (; e === ll; ) ll = no[--ro], no[ro] = null, al = no[--ro], no[ro] = null;
  for (; e === Sr; ) Sr = zt[--At], zt[At] = null, Sn = zt[--At], zt[At] = null, Cn = zt[--At], zt[At] = null;
}
var St = null, Ct = null, Ce = !1, Zt = null;
function Ng(e, t) {
  var n = Nt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function _p(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, St = e, Ct = Qn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, St = e, Ct = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sr !== null ? { id: Cn, overflow: Sn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, St = e, Ct = null, !0) : !1;
    default:
      return !1;
  }
}
function ac(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uc(e) {
  if (Ce) {
    var t = Ct;
    if (t) {
      var n = t;
      if (!_p(e, t)) {
        if (ac(e)) throw Error(O(418));
        t = Qn(n.nextSibling);
        var r = St;
        t && _p(e, t) ? Ng(r, n) : (e.flags = e.flags & -4097 | 2, Ce = !1, St = e);
      }
    } else {
      if (ac(e)) throw Error(O(418));
      e.flags = e.flags & -4097 | 2, Ce = !1, St = e;
    }
  }
}
function Ip(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  St = e;
}
function xs(e) {
  if (e !== St) return !1;
  if (!Ce) return Ip(e), Ce = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !oc(e.type, e.memoizedProps)), t && (t = Ct)) {
    if (ac(e)) throw Lg(), Error(O(418));
    for (; t; ) Ng(e, t), t = Qn(t.nextSibling);
  }
  if (Ip(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ct = Qn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ct = null;
    }
  } else Ct = St ? Qn(e.stateNode.nextSibling) : null;
  return !0;
}
function Lg() {
  for (var e = Ct; e; ) e = Qn(e.nextSibling);
}
function xo() {
  Ct = St = null, Ce = !1;
}
function xd(e) {
  Zt === null ? Zt = [e] : Zt.push(e);
}
var ox = _n.ReactCurrentBatchConfig;
function Xt(e, t) {
  if (e && e.defaultProps) {
    t = $e({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ul = ir(null), cl = null, oo = null, bd = null;
function kd() {
  bd = oo = cl = null;
}
function wd(e) {
  var t = ul.current;
  ke(ul), e._currentValue = t;
}
function cc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function fo(e, t) {
  cl = e, bd = oo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pt = !0), e.firstContext = null);
}
function Bt(e) {
  var t = e._currentValue;
  if (bd !== e) if (e = { context: e, memoizedValue: t, next: null }, oo === null) {
    if (cl === null) throw Error(O(308));
    oo = e, cl.dependencies = { lanes: 0, firstContext: e };
  } else oo = oo.next = e;
  return t;
}
var vr = null;
function Cd(e) {
  vr === null ? vr = [e] : vr.push(e);
}
function jg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Cd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Pn(e, r);
}
function Pn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Fn = !1;
function Sd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Fg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Rn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, se & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Pn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Cd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Pn(e, n);
}
function js(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ud(e, n);
  }
}
function Mp(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function dl(e, t, n, r) {
  var o = e.updateQueue;
  Fn = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var f = o.baseState;
    s = 0, c = u = a = null, l = i;
    do {
      var d = l.lane, m = l.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: m,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var v = e, y = l;
          switch (d = t, m = n, y.tag) {
            case 1:
              if (v = y.payload, typeof v == "function") {
                f = v.call(m, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = y.payload, d = typeof v == "function" ? v.call(m, f, d) : v, d == null) break e;
              f = $e({}, f, d);
              break e;
            case 2:
              Fn = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [l] : d.push(l));
      } else m = { eventTime: m, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = m, a = f) : c = c.next = m, s |= d;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        d = l, l = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Er |= s, e.lanes = s, e.memoizedState = f;
  }
}
function zp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(O(191, o));
      o.call(r);
    }
  }
}
var Dg = new jm.Component().refs;
function dc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : $e({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Or(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = lt(), o = Zn(e), i = Rn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Xn(e, i, o), t !== null && (tn(t, e, o, r), js(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = lt(), o = Zn(e), i = Rn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Xn(e, i, o), t !== null && (tn(t, e, o, r), js(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = lt(), r = Zn(e), o = Rn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Xn(e, o, r), t !== null && (tn(t, e, r, n), js(t, e, r));
} };
function Ap(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Mi(n, r) || !Mi(o, i) : !0;
}
function Bg(e, t, n) {
  var r = !1, o = tr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Bt(i) : (o = mt(t) ? Cr : nt.current, r = t.contextTypes, i = (r = r != null) ? yo(e, o) : tr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Op(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function fc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Dg, Sd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Bt(i) : (i = mt(t) ? Cr : nt.current, o.context = yo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (dc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Bl.enqueueReplaceState(o, o.state, null), dl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        l === Dg && (l = o.refs = {}), s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function bs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Np(e) {
  var t = e._init;
  return t(e._payload);
}
function Ug(e) {
  function t(h, p) {
    if (e) {
      var g = h.deletions;
      g === null ? (h.deletions = [p], h.flags |= 16) : g.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), p = p.sibling;
    return null;
  }
  function r(h, p) {
    for (h = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), p = p.sibling;
    return h;
  }
  function o(h, p) {
    return h = Jn(h, p), h.index = 0, h.sibling = null, h;
  }
  function i(h, p, g) {
    return h.index = g, e ? (g = h.alternate, g !== null ? (g = g.index, g < p ? (h.flags |= 2, p) : g) : (h.flags |= 2, p)) : (h.flags |= 1048576, p);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, g, w) {
    return p === null || p.tag !== 6 ? (p = hu(g, h.mode, w), p.return = h, p) : (p = o(p, g), p.return = h, p);
  }
  function a(h, p, g, w) {
    var S = g.type;
    return S === Xr ? c(h, p, g.props.children, w, g.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === jn && Np(S) === p.type) ? (w = o(p, g.props), w.ref = Vo(h, p, g), w.return = h, w) : (w = Hs(g.type, g.key, g.props, null, h.mode, w), w.ref = Vo(h, p, g), w.return = h, w);
  }
  function u(h, p, g, w) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = mu(g, h.mode, w), p.return = h, p) : (p = o(p, g.children || []), p.return = h, p);
  }
  function c(h, p, g, w, S) {
    return p === null || p.tag !== 7 ? (p = wr(g, h.mode, w, S), p.return = h, p) : (p = o(p, g), p.return = h, p);
  }
  function f(h, p, g) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = hu("" + p, h.mode, g), p.return = h, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case us:
          return g = Hs(p.type, p.key, p.props, null, h.mode, g), g.ref = Vo(h, null, p), g.return = h, g;
        case Qr:
          return p = mu(p, h.mode, g), p.return = h, p;
        case jn:
          var w = p._init;
          return f(h, w(p._payload), g);
      }
      if (ri(p) || Do(p)) return p = wr(p, h.mode, g, null), p.return = h, p;
      bs(h, p);
    }
    return null;
  }
  function d(h, p, g, w) {
    var S = p !== null ? p.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return S !== null ? null : l(h, p, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case us:
          return g.key === S ? a(h, p, g, w) : null;
        case Qr:
          return g.key === S ? u(h, p, g, w) : null;
        case jn:
          return S = g._init, d(
            h,
            p,
            S(g._payload),
            w
          );
      }
      if (ri(g) || Do(g)) return S !== null ? null : c(h, p, g, w, null);
      bs(h, g);
    }
    return null;
  }
  function m(h, p, g, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return h = h.get(g) || null, l(p, h, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case us:
          return h = h.get(w.key === null ? g : w.key) || null, a(p, h, w, S);
        case Qr:
          return h = h.get(w.key === null ? g : w.key) || null, u(p, h, w, S);
        case jn:
          var E = w._init;
          return m(h, p, g, E(w._payload), S);
      }
      if (ri(w) || Do(w)) return h = h.get(g) || null, c(p, h, w, S, null);
      bs(p, w);
    }
    return null;
  }
  function v(h, p, g, w) {
    for (var S = null, E = null, C = p, $ = p = 0, _ = null; C !== null && $ < g.length; $++) {
      C.index > $ ? (_ = C, C = null) : _ = C.sibling;
      var P = d(h, C, g[$], w);
      if (P === null) {
        C === null && (C = _);
        break;
      }
      e && C && P.alternate === null && t(h, C), p = i(P, p, $), E === null ? S = P : E.sibling = P, E = P, C = _;
    }
    if ($ === g.length) return n(h, C), Ce && dr(h, $), S;
    if (C === null) {
      for (; $ < g.length; $++) C = f(h, g[$], w), C !== null && (p = i(C, p, $), E === null ? S = C : E.sibling = C, E = C);
      return Ce && dr(h, $), S;
    }
    for (C = r(h, C); $ < g.length; $++) _ = m(C, h, $, g[$], w), _ !== null && (e && _.alternate !== null && C.delete(_.key === null ? $ : _.key), p = i(_, p, $), E === null ? S = _ : E.sibling = _, E = _);
    return e && C.forEach(function(L) {
      return t(h, L);
    }), Ce && dr(h, $), S;
  }
  function y(h, p, g, w) {
    var S = Do(g);
    if (typeof S != "function") throw Error(O(150));
    if (g = S.call(g), g == null) throw Error(O(151));
    for (var E = S = null, C = p, $ = p = 0, _ = null, P = g.next(); C !== null && !P.done; $++, P = g.next()) {
      C.index > $ ? (_ = C, C = null) : _ = C.sibling;
      var L = d(h, C, P.value, w);
      if (L === null) {
        C === null && (C = _);
        break;
      }
      e && C && L.alternate === null && t(h, C), p = i(L, p, $), E === null ? S = L : E.sibling = L, E = L, C = _;
    }
    if (P.done) return n(
      h,
      C
    ), Ce && dr(h, $), S;
    if (C === null) {
      for (; !P.done; $++, P = g.next()) P = f(h, P.value, w), P !== null && (p = i(P, p, $), E === null ? S = P : E.sibling = P, E = P);
      return Ce && dr(h, $), S;
    }
    for (C = r(h, C); !P.done; $++, P = g.next()) P = m(C, h, $, P.value, w), P !== null && (e && P.alternate !== null && C.delete(P.key === null ? $ : P.key), p = i(P, p, $), E === null ? S = P : E.sibling = P, E = P);
    return e && C.forEach(function(F) {
      return t(h, F);
    }), Ce && dr(h, $), S;
  }
  function R(h, p, g, w) {
    if (typeof g == "object" && g !== null && g.type === Xr && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case us:
          e: {
            for (var S = g.key, E = p; E !== null; ) {
              if (E.key === S) {
                if (S = g.type, S === Xr) {
                  if (E.tag === 7) {
                    n(h, E.sibling), p = o(E, g.props.children), p.return = h, h = p;
                    break e;
                  }
                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === jn && Np(S) === E.type) {
                  n(h, E.sibling), p = o(E, g.props), p.ref = Vo(h, E, g), p.return = h, h = p;
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            g.type === Xr ? (p = wr(g.props.children, h.mode, w, g.key), p.return = h, h = p) : (w = Hs(g.type, g.key, g.props, null, h.mode, w), w.ref = Vo(h, p, g), w.return = h, h = w);
          }
          return s(h);
        case Qr:
          e: {
            for (E = g.key; p !== null; ) {
              if (p.key === E) if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                n(h, p.sibling), p = o(p, g.children || []), p.return = h, h = p;
                break e;
              } else {
                n(h, p);
                break;
              }
              else t(h, p);
              p = p.sibling;
            }
            p = mu(g, h.mode, w), p.return = h, h = p;
          }
          return s(h);
        case jn:
          return E = g._init, R(h, p, E(g._payload), w);
      }
      if (ri(g)) return v(h, p, g, w);
      if (Do(g)) return y(h, p, g, w);
      bs(h, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(h, p.sibling), p = o(p, g), p.return = h, h = p) : (n(h, p), p = hu(g, h.mode, w), p.return = h, h = p), s(h)) : n(h, p);
  }
  return R;
}
var bo = Ug(!0), Wg = Ug(!1), ts = {}, hn = ir(ts), Ni = ir(ts), Li = ir(ts);
function yr(e) {
  if (e === ts) throw Error(O(174));
  return e;
}
function Rd(e, t) {
  switch (ye(Li, t), ye(Ni, e), ye(hn, ts), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hu(t, e);
  }
  ke(hn), ye(hn, t);
}
function ko() {
  ke(hn), ke(Ni), ke(Li);
}
function Hg(e) {
  yr(Li.current);
  var t = yr(hn.current), n = Hu(t, e.type);
  t !== n && (ye(Ni, e), ye(hn, n));
}
function Ed(e) {
  Ni.current === e && (ke(hn), ke(Ni));
}
var Re = ir(0);
function fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var au = [];
function $d() {
  for (var e = 0; e < au.length; e++) au[e]._workInProgressVersionPrimary = null;
  au.length = 0;
}
var Fs = _n.ReactCurrentDispatcher, uu = _n.ReactCurrentBatchConfig, Rr = 0, Ee = null, De = null, We = null, pl = !1, pi = !1, ji = 0, ix = 0;
function Ze() {
  throw Error(O(321));
}
function Pd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nn(e[n], t[n])) return !1;
  return !0;
}
function Td(e, t, n, r, o, i) {
  if (Rr = i, Ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fs.current = e === null || e.memoizedState === null ? ux : cx, e = n(r, o), pi) {
    i = 0;
    do {
      if (pi = !1, ji = 0, 25 <= i) throw Error(O(301));
      i += 1, We = De = null, t.updateQueue = null, Fs.current = dx, e = n(r, o);
    } while (pi);
  }
  if (Fs.current = hl, t = De !== null && De.next !== null, Rr = 0, We = De = Ee = null, pl = !1, t) throw Error(O(300));
  return e;
}
function _d() {
  var e = ji !== 0;
  return ji = 0, e;
}
function un() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return We === null ? Ee.memoizedState = We = e : We = We.next = e, We;
}
function Ut() {
  if (De === null) {
    var e = Ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = We === null ? Ee.memoizedState : We.next;
  if (t !== null) We = t, De = e;
  else {
    if (e === null) throw Error(O(310));
    De = e, e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, We === null ? Ee.memoizedState = We = e : We = We.next = e;
  }
  return We;
}
function Fi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cu(e) {
  var t = Ut(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = De, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = s = null, a = null, u = i;
    do {
      var c = u.lane;
      if ((Rr & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f, s = r) : a = a.next = f, Ee.lanes |= c, Er |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, nn(r, t.memoizedState) || (pt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ee.lanes |= i, Er |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function du(e) {
  var t = Ut(), n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    nn(i, t.memoizedState) || (pt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Vg() {
}
function Kg(e, t) {
  var n = Ee, r = Ut(), o = t(), i = !nn(r.memoizedState, o);
  if (i && (r.memoizedState = o, pt = !0), r = r.queue, Id(Qg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || We !== null && We.memoizedState.tag & 1) {
    if (n.flags |= 2048, Di(9, qg.bind(null, n, r, o, t), void 0, null), He === null) throw Error(O(349));
    Rr & 30 || Gg(n, t, o);
  }
  return o;
}
function Gg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function qg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Xg(t) && Yg(e);
}
function Qg(e, t, n) {
  return n(function() {
    Xg(t) && Yg(e);
  });
}
function Xg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nn(e, n);
  } catch {
    return !0;
  }
}
function Yg(e) {
  var t = Pn(e, 1);
  t !== null && tn(t, e, 1, -1);
}
function Lp(e) {
  var t = un();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Fi, lastRenderedState: e }, t.queue = e, e = e.dispatch = ax.bind(null, Ee, e), [t.memoizedState, e];
}
function Di(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ee.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Zg() {
  return Ut().memoizedState;
}
function Ds(e, t, n, r) {
  var o = un();
  Ee.flags |= e, o.memoizedState = Di(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ul(e, t, n, r) {
  var o = Ut();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (De !== null) {
    var s = De.memoizedState;
    if (i = s.destroy, r !== null && Pd(r, s.deps)) {
      o.memoizedState = Di(t, n, i, r);
      return;
    }
  }
  Ee.flags |= e, o.memoizedState = Di(1 | t, n, i, r);
}
function jp(e, t) {
  return Ds(8390656, 8, e, t);
}
function Id(e, t) {
  return Ul(2048, 8, e, t);
}
function Jg(e, t) {
  return Ul(4, 2, e, t);
}
function e0(e, t) {
  return Ul(4, 4, e, t);
}
function t0(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function n0(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ul(4, 4, t0.bind(null, t, e), n);
}
function Md() {
}
function r0(e, t) {
  var n = Ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function o0(e, t) {
  var n = Ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function i0(e, t, n) {
  return Rr & 21 ? (nn(n, t) || (n = ag(), Ee.lanes |= n, Er |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pt = !0), e.memoizedState = n);
}
function sx(e, t) {
  var n = fe;
  fe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = uu.transition;
  uu.transition = {};
  try {
    e(!1), t();
  } finally {
    fe = n, uu.transition = r;
  }
}
function s0() {
  return Ut().memoizedState;
}
function lx(e, t, n) {
  var r = Zn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, l0(e)) a0(t, n);
  else if (n = jg(e, t, n, r), n !== null) {
    var o = lt();
    tn(n, e, r, o), u0(n, t, r);
  }
}
function ax(e, t, n) {
  var r = Zn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (l0(e)) a0(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, nn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Cd(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = jg(e, t, o, r), n !== null && (o = lt(), tn(n, e, r, o), u0(n, t, r));
  }
}
function l0(e) {
  var t = e.alternate;
  return e === Ee || t !== null && t === Ee;
}
function a0(e, t) {
  pi = pl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function u0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ud(e, n);
  }
}
var hl = { readContext: Bt, useCallback: Ze, useContext: Ze, useEffect: Ze, useImperativeHandle: Ze, useInsertionEffect: Ze, useLayoutEffect: Ze, useMemo: Ze, useReducer: Ze, useRef: Ze, useState: Ze, useDebugValue: Ze, useDeferredValue: Ze, useTransition: Ze, useMutableSource: Ze, useSyncExternalStore: Ze, useId: Ze, unstable_isNewReconciler: !1 }, ux = { readContext: Bt, useCallback: function(e, t) {
  return un().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Bt, useEffect: jp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ds(
    4194308,
    4,
    t0.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ds(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ds(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = un();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = un();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lx.bind(null, Ee, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = un();
  return e = { current: e }, t.memoizedState = e;
}, useState: Lp, useDebugValue: Md, useDeferredValue: function(e) {
  return un().memoizedState = e;
}, useTransition: function() {
  var e = Lp(!1), t = e[0];
  return e = sx.bind(null, e[1]), un().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ee, o = un();
  if (Ce) {
    if (n === void 0) throw Error(O(407));
    n = n();
  } else {
    if (n = t(), He === null) throw Error(O(349));
    Rr & 30 || Gg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, jp(Qg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Di(9, qg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = un(), t = He.identifierPrefix;
  if (Ce) {
    var n = Sn, r = Cn;
    n = (r & ~(1 << 32 - en(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ji++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ix++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, cx = {
  readContext: Bt,
  useCallback: r0,
  useContext: Bt,
  useEffect: Id,
  useImperativeHandle: n0,
  useInsertionEffect: Jg,
  useLayoutEffect: e0,
  useMemo: o0,
  useReducer: cu,
  useRef: Zg,
  useState: function() {
    return cu(Fi);
  },
  useDebugValue: Md,
  useDeferredValue: function(e) {
    var t = Ut();
    return i0(t, De.memoizedState, e);
  },
  useTransition: function() {
    var e = cu(Fi)[0], t = Ut().memoizedState;
    return [e, t];
  },
  useMutableSource: Vg,
  useSyncExternalStore: Kg,
  useId: s0,
  unstable_isNewReconciler: !1
}, dx = { readContext: Bt, useCallback: r0, useContext: Bt, useEffect: Id, useImperativeHandle: n0, useInsertionEffect: Jg, useLayoutEffect: e0, useMemo: o0, useReducer: du, useRef: Zg, useState: function() {
  return du(Fi);
}, useDebugValue: Md, useDeferredValue: function(e) {
  var t = Ut();
  return De === null ? t.memoizedState = e : i0(t, De.memoizedState, e);
}, useTransition: function() {
  var e = du(Fi)[0], t = Ut().memoizedState;
  return [e, t];
}, useMutableSource: Vg, useSyncExternalStore: Kg, useId: s0, unstable_isNewReconciler: !1 };
function wo(e, t) {
  try {
    var n = "", r = t;
    do
      n += Fy(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function fu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var fx = typeof WeakMap == "function" ? WeakMap : Map;
function c0(e, t, n) {
  n = Rn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    gl || (gl = !0, Cc = r), pc(e, t);
  }, n;
}
function d0(e, t, n) {
  n = Rn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      pc(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    pc(e, t), typeof r != "function" && (Yn === null ? Yn = /* @__PURE__ */ new Set([this]) : Yn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Fp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fx();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Ex.bind(null, e, t, n), t.then(e, e));
}
function Dp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rn(-1, 1), t.tag = 2, Xn(n, t, 1))), n.lanes |= 1), e);
}
var px = _n.ReactCurrentOwner, pt = !1;
function ot(e, t, n, r) {
  t.child = e === null ? Wg(t, null, n, r) : bo(t, e.child, n, r);
}
function Up(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return fo(t, o), r = Td(e, t, n, r, i, o), n = _d(), e !== null && !pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tn(e, t, o)) : (Ce && n && vd(t), t.flags |= 1, ot(e, t, r, o), t.child);
}
function Wp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Dd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, f0(e, t, i, r, o)) : (e = Hs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Mi, n(s, r) && e.ref === t.ref) return Tn(e, t, o);
  }
  return t.flags |= 1, e = Jn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function f0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Mi(i, r) && e.ref === t.ref) if (pt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (pt = !0);
    else return t.lanes = e.lanes, Tn(e, t, o);
  }
  return hc(e, t, n, r, o);
}
function p0(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(so, kt), kt |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(so, kt), kt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ye(so, kt), kt |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ye(so, kt), kt |= r;
  return ot(e, t, o, n), t.child;
}
function h0(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function hc(e, t, n, r, o) {
  var i = mt(n) ? Cr : nt.current;
  return i = yo(t, i), fo(t, o), n = Td(e, t, n, r, i, o), r = _d(), e !== null && !pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tn(e, t, o)) : (Ce && r && vd(t), t.flags |= 1, ot(e, t, n, o), t.child);
}
function Hp(e, t, n, r, o) {
  if (mt(n)) {
    var i = !0;
    sl(t);
  } else i = !1;
  if (fo(t, o), t.stateNode === null) Bs(e, t), Bg(t, n, r), fc(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Bt(u) : (u = mt(n) ? Cr : nt.current, u = yo(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Op(t, s, r, u), Fn = !1;
    var d = t.memoizedState;
    s.state = d, dl(t, r, s, o), a = t.memoizedState, l !== r || d !== a || ht.current || Fn ? (typeof c == "function" && (dc(t, n, c, r), a = t.memoizedState), (l = Fn || Ap(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Fg(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Xt(t.type, l), s.props = u, f = t.pendingProps, d = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Bt(a) : (a = mt(n) ? Cr : nt.current, a = yo(t, a));
    var m = n.getDerivedStateFromProps;
    (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && Op(t, s, r, a), Fn = !1, d = t.memoizedState, s.state = d, dl(t, r, s, o);
    var v = t.memoizedState;
    l !== f || d !== v || ht.current || Fn ? (typeof m == "function" && (dc(t, n, m, r), v = t.memoizedState), (u = Fn || Ap(t, n, u, r, d, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return mc(e, t, n, r, i, o);
}
function mc(e, t, n, r, o, i) {
  h0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Tp(t, n, !1), Tn(e, t, i);
  r = t.stateNode, px.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = bo(t, e.child, null, i), t.child = bo(t, null, l, i)) : ot(e, t, l, i), t.memoizedState = r.state, o && Tp(t, n, !0), t.child;
}
function m0(e) {
  var t = e.stateNode;
  t.pendingContext ? Pp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pp(e, t.context, !1), Rd(e, t.containerInfo);
}
function Vp(e, t, n, r, o) {
  return xo(), xd(o), t.flags |= 256, ot(e, t, n, r), t.child;
}
var gc = { dehydrated: null, treeContext: null, retryLane: 0 };
function vc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function g0(e, t, n) {
  var r = t.pendingProps, o = Re.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ye(Re, o & 1), e === null)
    return uc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Vl(s, r, 0, null), e = wr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = vc(n), t.memoizedState = gc, e) : zd(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return hx(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Jn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Jn(l, i) : (i = wr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? vc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = gc, r;
  }
  return i = e.child, e = i.sibling, r = Jn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function zd(e, t) {
  return t = Vl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ks(e, t, n, r) {
  return r !== null && xd(r), bo(t, e.child, null, n), e = zd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function hx(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = fu(Error(O(422))), ks(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Vl({ mode: "visible", children: r.children }, o, 0, null), i = wr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && bo(t, e.child, null, s), t.child.memoizedState = vc(s), t.memoizedState = gc, i);
  if (!(t.mode & 1)) return ks(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(O(419)), r = fu(i, r, void 0), ks(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, pt || l) {
    if (r = He, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Pn(e, o), tn(r, e, o, -1));
    }
    return Fd(), r = fu(Error(O(421))), ks(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $x.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ct = Qn(o.nextSibling), St = t, Ce = !0, Zt = null, e !== null && (zt[At++] = Cn, zt[At++] = Sn, zt[At++] = Sr, Cn = e.id, Sn = e.overflow, Sr = t), t = zd(t, r.children), t.flags |= 4096, t);
}
function Kp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cc(e.return, t, n);
}
function pu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function v0(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ot(e, t, r.children, n), r = Re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Kp(e, n, t);
      else if (e.tag === 19) Kp(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ye(Re, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && fl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), pu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && fl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      pu(t, !0, n, null, i);
      break;
    case "together":
      pu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Bs(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Tn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Er |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Jn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function mx(e, t, n) {
  switch (t.tag) {
    case 3:
      m0(t), xo();
      break;
    case 5:
      Hg(t);
      break;
    case 1:
      mt(t.type) && sl(t);
      break;
    case 4:
      Rd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ye(ul, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ye(Re, Re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? g0(e, t, n) : (ye(Re, Re.current & 1), e = Tn(e, t, n), e !== null ? e.sibling : null);
      ye(Re, Re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return v0(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ye(Re, Re.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, p0(e, t, n);
  }
  return Tn(e, t, n);
}
var y0, yc, x0, b0;
y0 = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
yc = function() {
};
x0 = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, yr(hn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Du(e, o), r = Du(e, r), i = [];
        break;
      case "select":
        o = $e({}, o, { value: void 0 }), r = $e({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Wu(e, o), r = Wu(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol);
    }
    Vu(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ri.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ri.hasOwnProperty(u) ? (a != null && u === "onScroll" && xe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
b0 = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ko(e, t) {
  if (!Ce) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function gx(e, t, n) {
  var r = t.pendingProps;
  switch (yd(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Je(t), null;
    case 1:
      return mt(t.type) && il(), Je(t), null;
    case 3:
      return r = t.stateNode, ko(), ke(ht), ke(nt), $d(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Zt !== null && (Ec(Zt), Zt = null))), yc(e, t), Je(t), null;
    case 5:
      Ed(t);
      var o = yr(Li.current);
      if (n = t.type, e !== null && t.stateNode != null) x0(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Je(t), null;
        }
        if (e = yr(hn.current), xs(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[fn] = t, r[Oi] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ii.length; o++) xe(ii[o], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe(
                "error",
                r
              ), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              tp(r, i), xe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, xe("invalid", r);
              break;
            case "textarea":
              rp(r, i), xe("invalid", r);
          }
          Vu(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && ys(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && ys(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Ri.hasOwnProperty(s) && l != null && s === "onScroll" && xe("scroll", r);
          }
          switch (n) {
            case "input":
              cs(r), np(r, i, !0);
              break;
            case "textarea":
              cs(r), op(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ol);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Gm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[fn] = t, e[Oi] = r, y0(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Ku(n, r), n) {
              case "dialog":
                xe("cancel", e), xe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ii.length; o++) xe(ii[o], e);
                o = r;
                break;
              case "source":
                xe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  e
                ), xe("load", e), o = r;
                break;
              case "details":
                xe("toggle", e), o = r;
                break;
              case "input":
                tp(e, r), o = Du(e, r), xe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = $e({}, r, { value: void 0 }), xe("invalid", e);
                break;
              case "textarea":
                rp(e, r), o = Wu(e, r), xe("invalid", e);
                break;
              default:
                o = r;
            }
            Vu(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Xm(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && qm(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ei(e, a) : typeof a == "number" && Ei(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ri.hasOwnProperty(i) ? a != null && i === "onScroll" && xe("scroll", e) : a != null && rd(e, i, a, s));
            }
            switch (n) {
              case "input":
                cs(e), np(e, r, !1);
                break;
              case "textarea":
                cs(e), op(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + er(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? lo(e, !!r.multiple, i, !1) : r.defaultValue != null && lo(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ol);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Je(t), null;
    case 6:
      if (e && t.stateNode != null) b0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (n = yr(Li.current), yr(hn.current), xs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[fn] = t, (i = r.nodeValue !== n) && (e = St, e !== null)) switch (e.tag) {
            case 3:
              ys(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ys(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[fn] = t, t.stateNode = r;
      }
      return Je(t), null;
    case 13:
      if (ke(Re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ce && Ct !== null && t.mode & 1 && !(t.flags & 128)) Lg(), xo(), t.flags |= 98560, i = !1;
        else if (i = xs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(O(317));
            i[fn] = t;
          } else xo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Je(t), i = !1;
        } else Zt !== null && (Ec(Zt), Zt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Re.current & 1 ? Be === 0 && (Be = 3) : Fd())), t.updateQueue !== null && (t.flags |= 4), Je(t), null);
    case 4:
      return ko(), yc(e, t), e === null && zi(t.stateNode.containerInfo), Je(t), null;
    case 10:
      return wd(t.type._context), Je(t), null;
    case 17:
      return mt(t.type) && il(), Je(t), null;
    case 19:
      if (ke(Re), i = t.memoizedState, i === null) return Je(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Ko(i, !1);
      else {
        if (Be !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = fl(e), s !== null) {
            for (t.flags |= 128, Ko(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ye(Re, Re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Ae() > Co && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = fl(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ko(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ce) return Je(t), null;
        } else 2 * Ae() - i.renderingStartTime > Co && n !== 1073741824 && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ae(), t.sibling = null, n = Re.current, ye(Re, r ? n & 1 | 2 : n & 1), t) : (Je(t), null);
    case 22:
    case 23:
      return jd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? kt & 1073741824 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function vx(e, t) {
  switch (yd(t), t.tag) {
    case 1:
      return mt(t.type) && il(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ko(), ke(ht), ke(nt), $d(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ed(t), null;
    case 13:
      if (ke(Re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(O(340));
        xo();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ke(Re), null;
    case 4:
      return ko(), null;
    case 10:
      return wd(t.type._context), null;
    case 22:
    case 23:
      return jd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ws = !1, tt = !1, yx = typeof WeakSet == "function" ? WeakSet : Set, U = null;
function io(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Me(e, t, r);
  }
  else n.current = null;
}
function xc(e, t, n) {
  try {
    n();
  } catch (r) {
    Me(e, t, r);
  }
}
var Gp = !1;
function xx(e, t) {
  if (nc = tl, e = Sg(), gd(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, l = -1, a = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var m; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null; )
            d = f, f = m;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++u === o && (l = s), d === i && ++c === r && (a = s), (m = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = m;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (rc = { focusedElem: e, selectionRange: n }, tl = !1, U = t; U !== null; ) if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
  else for (; U !== null; ) {
    t = U;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var y = v.memoizedProps, R = v.memoizedState, h = t.stateNode, p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Xt(t.type, y), R);
            h.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(O(163));
      }
    } catch (w) {
      Me(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, U = e;
      break;
    }
    U = t.return;
  }
  return v = Gp, Gp = !1, v;
}
function hi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && xc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function k0(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, k0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[fn], delete t[Oi], delete t[sc], delete t[tx], delete t[nx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function w0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qp(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || w0(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function kc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && (e = e.child, e !== null)) for (kc(e, t, n), e = e.sibling; e !== null; ) kc(e, t, n), e = e.sibling;
}
function wc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (wc(e, t, n), e = e.sibling; e !== null; ) wc(e, t, n), e = e.sibling;
}
var Ge = null, Yt = !1;
function An(e, t, n) {
  for (n = n.child; n !== null; ) C0(e, t, n), n = n.sibling;
}
function C0(e, t, n) {
  if (pn && typeof pn.onCommitFiberUnmount == "function") try {
    pn.onCommitFiberUnmount(Ol, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      tt || io(n, t);
    case 6:
      var r = Ge, o = Yt;
      Ge = null, An(e, t, n), Ge = r, Yt = o, Ge !== null && (Yt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ge.removeChild(n.stateNode));
      break;
    case 18:
      Ge !== null && (Yt ? (e = Ge, n = n.stateNode, e.nodeType === 8 ? su(e.parentNode, n) : e.nodeType === 1 && su(e, n), _i(e)) : su(Ge, n.stateNode));
      break;
    case 4:
      r = Ge, o = Yt, Ge = n.stateNode.containerInfo, Yt = !0, An(e, t, n), Ge = r, Yt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!tt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && xc(n, t, s), o = o.next;
        } while (o !== r);
      }
      An(e, t, n);
      break;
    case 1:
      if (!tt && (io(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        Me(n, t, l);
      }
      An(e, t, n);
      break;
    case 21:
      An(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (tt = (r = tt) || n.memoizedState !== null, An(e, t, n), tt = r) : An(e, t, n);
      break;
    default:
      An(e, t, n);
  }
}
function Qp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yx()), t.forEach(function(r) {
      var o = Px.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Qt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Ge = l.stateNode, Yt = !1;
            break e;
          case 3:
            Ge = l.stateNode.containerInfo, Yt = !0;
            break e;
          case 4:
            Ge = l.stateNode.containerInfo, Yt = !0;
            break e;
        }
        l = l.return;
      }
      if (Ge === null) throw Error(O(160));
      C0(i, s, o), Ge = null, Yt = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      Me(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) S0(t, e), t = t.sibling;
}
function S0(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Qt(t, e), ln(e), r & 4) {
        try {
          hi(3, e, e.return), Wl(3, e);
        } catch (y) {
          Me(e, e.return, y);
        }
        try {
          hi(5, e, e.return);
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      break;
    case 1:
      Qt(t, e), ln(e), r & 512 && n !== null && io(n, n.return);
      break;
    case 5:
      if (Qt(t, e), ln(e), r & 512 && n !== null && io(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ei(o, "");
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && Vm(o, i), Ku(l, s);
          var u = Ku(l, i);
          for (s = 0; s < a.length; s += 2) {
            var c = a[s], f = a[s + 1];
            c === "style" ? Xm(o, f) : c === "dangerouslySetInnerHTML" ? qm(o, f) : c === "children" ? Ei(o, f) : rd(o, c, f, u);
          }
          switch (l) {
            case "input":
              Bu(o, i);
              break;
            case "textarea":
              Km(o, i);
              break;
            case "select":
              var d = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var m = i.value;
              m != null ? lo(o, !!i.multiple, m, !1) : d !== !!i.multiple && (i.defaultValue != null ? lo(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : lo(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Oi] = i;
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Qt(t, e), ln(e), r & 4) {
        if (e.stateNode === null) throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (y) {
          Me(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Qt(t, e), ln(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        _i(t.containerInfo);
      } catch (y) {
        Me(e, e.return, y);
      }
      break;
    case 4:
      Qt(t, e), ln(e);
      break;
    case 13:
      Qt(t, e), ln(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Nd = Ae())), r & 4 && Qp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (tt = (u = tt) || c, Qt(t, e), tt = u) : Qt(t, e), ln(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (U = e, c = e.child; c !== null; ) {
          for (f = U = c; U !== null; ) {
            switch (d = U, m = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                hi(4, d, d.return);
                break;
              case 1:
                io(d, d.return);
                var v = d.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (y) {
                    Me(r, n, y);
                  }
                }
                break;
              case 5:
                io(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  Yp(f);
                  continue;
                }
            }
            m !== null ? (m.return = d, U = m) : Yp(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Qm("display", s));
              } catch (y) {
                Me(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (y) {
              Me(e, e.return, y);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      Qt(t, e), ln(e), r & 4 && Qp(e);
      break;
    case 21:
      break;
    default:
      Qt(
        t,
        e
      ), ln(e);
  }
}
function ln(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (w0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ei(o, ""), r.flags &= -33);
          var i = qp(e);
          wc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = qp(e);
          kc(e, l, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      Me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bx(e, t, n) {
  U = e, R0(e);
}
function R0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var o = U, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ws;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || tt;
        l = ws;
        var u = tt;
        if (ws = s, (tt = a) && !u) for (U = o; U !== null; ) s = U, a = s.child, s.tag === 22 && s.memoizedState !== null ? Zp(o) : a !== null ? (a.return = s, U = a) : Zp(o);
        for (; i !== null; ) U = i, R0(i), i = i.sibling;
        U = o, ws = l, tt = u;
      }
      Xp(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, U = i) : Xp(e);
  }
}
function Xp(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            tt || Wl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !tt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Xt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && zp(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              zp(t, s, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && _i(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(O(163));
        }
        tt || t.flags & 512 && bc(t);
      } catch (d) {
        Me(t, t.return, d);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, U = n;
      break;
    }
    U = t.return;
  }
}
function Yp(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, U = n;
      break;
    }
    U = t.return;
  }
}
function Zp(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wl(4, t);
          } catch (a) {
            Me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Me(t, o, a);
            }
          }
          var i = t.return;
          try {
            bc(t);
          } catch (a) {
            Me(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bc(t);
          } catch (a) {
            Me(t, s, a);
          }
      }
    } catch (a) {
      Me(t, t.return, a);
    }
    if (t === e) {
      U = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, U = l;
      break;
    }
    U = t.return;
  }
}
var kx = Math.ceil, ml = _n.ReactCurrentDispatcher, Ad = _n.ReactCurrentOwner, Ft = _n.ReactCurrentBatchConfig, se = 0, He = null, Fe = null, Qe = 0, kt = 0, so = ir(0), Be = 0, Bi = null, Er = 0, Hl = 0, Od = 0, mi = null, ft = null, Nd = 0, Co = 1 / 0, bn = null, gl = !1, Cc = null, Yn = null, Cs = !1, Hn = null, vl = 0, gi = 0, Sc = null, Us = -1, Ws = 0;
function lt() {
  return se & 6 ? Ae() : Us !== -1 ? Us : Us = Ae();
}
function Zn(e) {
  return e.mode & 1 ? se & 2 && Qe !== 0 ? Qe & -Qe : ox.transition !== null ? (Ws === 0 && (Ws = ag()), Ws) : (e = fe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mg(e.type)), e) : 1;
}
function tn(e, t, n, r) {
  if (50 < gi) throw gi = 0, Sc = null, Error(O(185));
  Zi(e, n, r), (!(se & 2) || e !== He) && (e === He && (!(se & 2) && (Hl |= n), Be === 4 && Bn(e, Qe)), gt(e, r), n === 1 && se === 0 && !(t.mode & 1) && (Co = Ae() + 500, Dl && sr()));
}
function gt(e, t) {
  var n = e.callbackNode;
  o1(e, t);
  var r = el(e, e === He ? Qe : 0);
  if (r === 0) n !== null && lp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && lp(n), t === 1) e.tag === 0 ? rx(Jp.bind(null, e)) : Ag(Jp.bind(null, e)), J1(function() {
      !(se & 6) && sr();
    }), n = null;
    else {
      switch (ug(r)) {
        case 1:
          n = ad;
          break;
        case 4:
          n = sg;
          break;
        case 16:
          n = Js;
          break;
        case 536870912:
          n = lg;
          break;
        default:
          n = Js;
      }
      n = z0(n, E0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function E0(e, t) {
  if (Us = -1, Ws = 0, se & 6) throw Error(O(327));
  var n = e.callbackNode;
  if (po() && e.callbackNode !== n) return null;
  var r = el(e, e === He ? Qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var o = se;
    se |= 2;
    var i = P0();
    (He !== e || Qe !== t) && (bn = null, Co = Ae() + 500, kr(e, t));
    do
      try {
        Sx();
        break;
      } catch (l) {
        $0(e, l);
      }
    while (!0);
    kd(), ml.current = i, se = o, Fe !== null ? t = 0 : (He = null, Qe = 0, t = Be);
  }
  if (t !== 0) {
    if (t === 2 && (o = Yu(e), o !== 0 && (r = o, t = Rc(e, o))), t === 1) throw n = Bi, kr(e, 0), Bn(e, r), gt(e, Ae()), n;
    if (t === 6) Bn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !wx(o) && (t = yl(e, r), t === 2 && (i = Yu(e), i !== 0 && (r = i, t = Rc(e, i))), t === 1)) throw n = Bi, kr(e, 0), Bn(e, r), gt(e, Ae()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          fr(e, ft, bn);
          break;
        case 3:
          if (Bn(e, r), (r & 130023424) === r && (t = Nd + 500 - Ae(), 10 < t)) {
            if (el(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              lt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ic(fr.bind(null, e, ft, bn), t);
            break;
          }
          fr(e, ft, bn);
          break;
        case 4:
          if (Bn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - en(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kx(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ic(fr.bind(null, e, ft, bn), r);
            break;
          }
          fr(e, ft, bn);
          break;
        case 5:
          fr(e, ft, bn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return gt(e, Ae()), e.callbackNode === n ? E0.bind(null, e) : null;
}
function Rc(e, t) {
  var n = mi;
  return e.current.memoizedState.isDehydrated && (kr(e, t).flags |= 256), e = yl(e, t), e !== 2 && (t = ft, ft = n, t !== null && Ec(t)), e;
}
function Ec(e) {
  ft === null ? ft = e : ft.push.apply(ft, e);
}
function wx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!nn(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Bn(e, t) {
  for (t &= ~Od, t &= ~Hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - en(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Jp(e) {
  if (se & 6) throw Error(O(327));
  po();
  var t = el(e, 0);
  if (!(t & 1)) return gt(e, Ae()), null;
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yu(e);
    r !== 0 && (t = r, n = Rc(e, r));
  }
  if (n === 1) throw n = Bi, kr(e, 0), Bn(e, t), gt(e, Ae()), n;
  if (n === 6) throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fr(e, ft, bn), gt(e, Ae()), null;
}
function Ld(e, t) {
  var n = se;
  se |= 1;
  try {
    return e(t);
  } finally {
    se = n, se === 0 && (Co = Ae() + 500, Dl && sr());
  }
}
function $r(e) {
  Hn !== null && Hn.tag === 0 && !(se & 6) && po();
  var t = se;
  se |= 1;
  var n = Ft.transition, r = fe;
  try {
    if (Ft.transition = null, fe = 1, e) return e();
  } finally {
    fe = r, Ft.transition = n, se = t, !(se & 6) && sr();
  }
}
function jd() {
  kt = so.current, ke(so);
}
function kr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Z1(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
    var r = n;
    switch (yd(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && il();
        break;
      case 3:
        ko(), ke(ht), ke(nt), $d();
        break;
      case 5:
        Ed(r);
        break;
      case 4:
        ko();
        break;
      case 13:
        ke(Re);
        break;
      case 19:
        ke(Re);
        break;
      case 10:
        wd(r.type._context);
        break;
      case 22:
      case 23:
        jd();
    }
    n = n.return;
  }
  if (He = e, Fe = e = Jn(e.current, null), Qe = kt = t, Be = 0, Bi = null, Od = Hl = Er = 0, ft = mi = null, vr !== null) {
    for (t = 0; t < vr.length; t++) if (n = vr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    vr = null;
  }
  return e;
}
function $0(e, t) {
  do {
    var n = Fe;
    try {
      if (kd(), Fs.current = hl, pl) {
        for (var r = Ee.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        pl = !1;
      }
      if (Rr = 0, We = De = Ee = null, pi = !1, ji = 0, Ad.current = null, n === null || n.return === null) {
        Be = 1, Bi = t, Fe = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Qe, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var m = Dp(s);
          if (m !== null) {
            m.flags &= -257, Bp(m, s, l, i, t), m.mode & 1 && Fp(i, u, t), t = m, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(a), t.updateQueue = y;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Fp(i, u, t), Fd();
              break e;
            }
            a = Error(O(426));
          }
        } else if (Ce && l.mode & 1) {
          var R = Dp(s);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), Bp(R, s, l, i, t), xd(wo(a, l));
            break e;
          }
        }
        i = a = wo(a, l), Be !== 4 && (Be = 2), mi === null ? mi = [i] : mi.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = c0(i, a, t);
              Mp(i, h);
              break e;
            case 1:
              l = a;
              var p = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Yn === null || !Yn.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = d0(i, l, t);
                Mp(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _0(n);
    } catch (S) {
      t = S, Fe === n && n !== null && (Fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function P0() {
  var e = ml.current;
  return ml.current = hl, e === null ? hl : e;
}
function Fd() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4), He === null || !(Er & 268435455) && !(Hl & 268435455) || Bn(He, Qe);
}
function yl(e, t) {
  var n = se;
  se |= 2;
  var r = P0();
  (He !== e || Qe !== t) && (bn = null, kr(e, t));
  do
    try {
      Cx();
      break;
    } catch (o) {
      $0(e, o);
    }
  while (!0);
  if (kd(), se = n, ml.current = r, Fe !== null) throw Error(O(261));
  return He = null, Qe = 0, Be;
}
function Cx() {
  for (; Fe !== null; ) T0(Fe);
}
function Sx() {
  for (; Fe !== null && !Qy(); ) T0(Fe);
}
function T0(e) {
  var t = M0(e.alternate, e, kt);
  e.memoizedProps = e.pendingProps, t === null ? _0(e) : Fe = t, Ad.current = null;
}
function _0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = vx(n, t), n !== null) {
        n.flags &= 32767, Fe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Be = 6, Fe = null;
        return;
      }
    } else if (n = gx(n, t, kt), n !== null) {
      Fe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Fe = t;
      return;
    }
    Fe = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function fr(e, t, n) {
  var r = fe, o = Ft.transition;
  try {
    Ft.transition = null, fe = 1, Rx(e, t, n, r);
  } finally {
    Ft.transition = o, fe = r;
  }
  return null;
}
function Rx(e, t, n, r) {
  do
    po();
  while (Hn !== null);
  if (se & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (i1(e, i), e === He && (Fe = He = null, Qe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Cs || (Cs = !0, z0(Js, function() {
    return po(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ft.transition, Ft.transition = null;
    var s = fe;
    fe = 1;
    var l = se;
    se |= 4, Ad.current = null, xx(e, n), S0(n, e), V1(rc), tl = !!nc, rc = nc = null, e.current = n, bx(n), Xy(), se = l, fe = s, Ft.transition = i;
  } else e.current = n;
  if (Cs && (Cs = !1, Hn = e, vl = o), i = e.pendingLanes, i === 0 && (Yn = null), Jy(n.stateNode), gt(e, Ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (gl) throw gl = !1, e = Cc, Cc = null, e;
  return vl & 1 && e.tag !== 0 && po(), i = e.pendingLanes, i & 1 ? e === Sc ? gi++ : (gi = 0, Sc = e) : gi = 0, sr(), null;
}
function po() {
  if (Hn !== null) {
    var e = ug(vl), t = Ft.transition, n = fe;
    try {
      if (Ft.transition = null, fe = 16 > e ? 16 : e, Hn === null) var r = !1;
      else {
        if (e = Hn, Hn = null, vl = 0, se & 6) throw Error(O(331));
        var o = se;
        for (se |= 4, U = e.current; U !== null; ) {
          var i = U, s = i.child;
          if (U.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (U = u; U !== null; ) {
                  var c = U;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hi(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, U = f;
                  else for (; U !== null; ) {
                    c = U;
                    var d = c.sibling, m = c.return;
                    if (k0(c), c === u) {
                      U = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = m, U = d;
                      break;
                    }
                    U = m;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var R = y.sibling;
                    y.sibling = null, y = R;
                  } while (y !== null);
                }
              }
              U = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, U = s;
          else e: for (; U !== null; ) {
            if (i = U, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                hi(9, i, i.return);
            }
            var h = i.sibling;
            if (h !== null) {
              h.return = i.return, U = h;
              break e;
            }
            U = i.return;
          }
        }
        var p = e.current;
        for (U = p; U !== null; ) {
          s = U;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) g.return = s, U = g;
          else e: for (s = p; U !== null; ) {
            if (l = U, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Wl(9, l);
              }
            } catch (S) {
              Me(l, l.return, S);
            }
            if (l === s) {
              U = null;
              break e;
            }
            var w = l.sibling;
            if (w !== null) {
              w.return = l.return, U = w;
              break e;
            }
            U = l.return;
          }
        }
        if (se = o, sr(), pn && typeof pn.onPostCommitFiberRoot == "function") try {
          pn.onPostCommitFiberRoot(Ol, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      fe = n, Ft.transition = t;
    }
  }
  return !1;
}
function eh(e, t, n) {
  t = wo(n, t), t = c0(e, t, 1), e = Xn(e, t, 1), t = lt(), e !== null && (Zi(e, 1, t), gt(e, t));
}
function Me(e, t, n) {
  if (e.tag === 3) eh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      eh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r))) {
        e = wo(n, e), e = d0(t, e, 1), t = Xn(t, e, 1), e = lt(), t !== null && (Zi(t, 1, e), gt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ex(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = lt(), e.pingedLanes |= e.suspendedLanes & n, He === e && (Qe & n) === n && (Be === 4 || Be === 3 && (Qe & 130023424) === Qe && 500 > Ae() - Nd ? kr(e, 0) : Od |= n), gt(e, t);
}
function I0(e, t) {
  t === 0 && (e.mode & 1 ? (t = ps, ps <<= 1, !(ps & 130023424) && (ps = 4194304)) : t = 1);
  var n = lt();
  e = Pn(e, t), e !== null && (Zi(e, t, n), gt(e, n));
}
function $x(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), I0(e, n);
}
function Px(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), I0(e, n);
}
var M0;
M0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ht.current) pt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return pt = !1, mx(e, t, n);
    pt = !!(e.flags & 131072);
  }
  else pt = !1, Ce && t.flags & 1048576 && Og(t, al, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Bs(e, t), e = t.pendingProps;
      var o = yo(t, nt.current);
      fo(t, n), o = Td(null, t, r, e, o, n);
      var i = _d();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mt(r) ? (i = !0, sl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Sd(t), o.updater = Bl, t.stateNode = o, o._reactInternals = t, fc(t, r, e, n), t = mc(null, t, r, !0, i, n)) : (t.tag = 0, Ce && i && vd(t), ot(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Bs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = _x(r), e = Xt(r, e), o) {
          case 0:
            t = hc(null, t, r, e, n);
            break e;
          case 1:
            t = Hp(null, t, r, e, n);
            break e;
          case 11:
            t = Up(null, t, r, e, n);
            break e;
          case 14:
            t = Wp(null, t, r, Xt(r.type, e), n);
            break e;
        }
        throw Error(O(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xt(r, o), hc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xt(r, o), Hp(e, t, r, o, n);
    case 3:
      e: {
        if (m0(t), e === null) throw Error(O(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Fg(e, t), dl(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = wo(Error(O(423)), t), t = Vp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = wo(Error(O(424)), t), t = Vp(e, t, r, n, o);
          break e;
        } else for (Ct = Qn(t.stateNode.containerInfo.firstChild), St = t, Ce = !0, Zt = null, n = Wg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (xo(), r === o) {
            t = Tn(e, t, n);
            break e;
          }
          ot(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Hg(t), e === null && uc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, oc(r, o) ? s = null : i !== null && oc(r, i) && (t.flags |= 32), h0(e, t), ot(e, t, s, n), t.child;
    case 6:
      return e === null && uc(t), null;
    case 13:
      return g0(e, t, n);
    case 4:
      return Rd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = bo(t, null, r, n) : ot(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xt(r, o), Up(e, t, r, o, n);
    case 7:
      return ot(e, t, t.pendingProps, n), t.child;
    case 8:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ot(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ye(ul, r._currentValue), r._currentValue = s, i !== null) if (nn(i.value, s)) {
          if (i.children === o.children && !ht.current) {
            t = Tn(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Rn(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), cc(
                  i.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(O(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), cc(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        ot(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, fo(t, n), o = Bt(o), r = r(o), t.flags |= 1, ot(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Xt(r, t.pendingProps), o = Xt(r.type, o), Wp(e, t, r, o, n);
    case 15:
      return f0(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xt(r, o), Bs(e, t), t.tag = 1, mt(r) ? (e = !0, sl(t)) : e = !1, fo(t, n), Bg(t, r, o), fc(t, r, o, n), mc(null, t, r, !0, e, n);
    case 19:
      return v0(e, t, n);
    case 22:
      return p0(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function z0(e, t) {
  return ig(e, t);
}
function Tx(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Nt(e, t, n, r) {
  return new Tx(e, t, n, r);
}
function Dd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function _x(e) {
  if (typeof e == "function") return Dd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === id) return 11;
    if (e === sd) return 14;
  }
  return 2;
}
function Jn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Hs(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") Dd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Xr:
      return wr(n.children, o, i, t);
    case od:
      s = 8, o |= 8;
      break;
    case Nu:
      return e = Nt(12, n, t, o | 2), e.elementType = Nu, e.lanes = i, e;
    case Lu:
      return e = Nt(13, n, t, o), e.elementType = Lu, e.lanes = i, e;
    case ju:
      return e = Nt(19, n, t, o), e.elementType = ju, e.lanes = i, e;
    case Um:
      return Vl(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Dm:
          s = 10;
          break e;
        case Bm:
          s = 9;
          break e;
        case id:
          s = 11;
          break e;
        case sd:
          s = 14;
          break e;
        case jn:
          s = 16, r = null;
          break e;
      }
      throw Error(O(130, e == null ? e : typeof e, ""));
  }
  return t = Nt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function wr(e, t, n, r) {
  return e = Nt(7, e, r, t), e.lanes = n, e;
}
function Vl(e, t, n, r) {
  return e = Nt(22, e, r, t), e.elementType = Um, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function hu(e, t, n) {
  return e = Nt(6, e, null, t), e.lanes = n, e;
}
function mu(e, t, n) {
  return t = Nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ix(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Qa(0), this.expirationTimes = Qa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qa(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Bd(e, t, n, r, o, i, s, l, a) {
  return e = new Ix(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Nt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Sd(i), e;
}
function Mx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Qr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function A0(e) {
  if (!e) return tr;
  e = e._reactInternals;
  e: {
    if (Or(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (mt(n)) return zg(e, n, t);
  }
  return t;
}
function O0(e, t, n, r, o, i, s, l, a) {
  return e = Bd(n, r, !0, e, o, i, s, l, a), e.context = A0(null), n = e.current, r = lt(), o = Zn(n), i = Rn(r, o), i.callback = t ?? null, Xn(n, i, o), e.current.lanes = o, Zi(e, o, r), gt(e, r), e;
}
function Kl(e, t, n, r) {
  var o = t.current, i = lt(), s = Zn(o);
  return n = A0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xn(o, t, s), e !== null && (tn(e, o, s, i), js(e, o, s)), s;
}
function xl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function th(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ud(e, t) {
  th(e, t), (e = e.alternate) && th(e, t);
}
function zx() {
  return null;
}
var N0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Wd(e) {
  this._internalRoot = e;
}
Gl.prototype.render = Wd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Kl(e, t, null, null);
};
Gl.prototype.unmount = Wd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $r(function() {
      Kl(null, e, null, null);
    }), t[$n] = null;
  }
};
function Gl(e) {
  this._internalRoot = e;
}
Gl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = fg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dn.length && t !== 0 && t < Dn[n].priority; n++) ;
    Dn.splice(n, 0, e), n === 0 && hg(e);
  }
};
function Hd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ql(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function nh() {
}
function Ax(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = xl(s);
        i.call(u);
      };
    }
    var s = O0(t, r, e, 0, null, !1, !1, "", nh);
    return e._reactRootContainer = s, e[$n] = s.current, zi(e.nodeType === 8 ? e.parentNode : e), $r(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = xl(a);
      l.call(u);
    };
  }
  var a = Bd(e, 0, !1, null, null, !1, !1, "", nh);
  return e._reactRootContainer = a, e[$n] = a.current, zi(e.nodeType === 8 ? e.parentNode : e), $r(function() {
    Kl(t, a, n, r);
  }), a;
}
function Ql(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = xl(s);
        l.call(a);
      };
    }
    Kl(t, s, e, o);
  } else s = Ax(n, t, e, o, r);
  return xl(s);
}
cg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = oi(t.pendingLanes);
        n !== 0 && (ud(t, n | 1), gt(t, Ae()), !(se & 6) && (Co = Ae() + 500, sr()));
      }
      break;
    case 13:
      $r(function() {
        var r = Pn(e, 1);
        if (r !== null) {
          var o = lt();
          tn(r, e, 1, o);
        }
      }), Ud(e, 1);
  }
};
cd = function(e) {
  if (e.tag === 13) {
    var t = Pn(e, 134217728);
    if (t !== null) {
      var n = lt();
      tn(t, e, 134217728, n);
    }
    Ud(e, 134217728);
  }
};
dg = function(e) {
  if (e.tag === 13) {
    var t = Zn(e), n = Pn(e, t);
    if (n !== null) {
      var r = lt();
      tn(n, e, t, r);
    }
    Ud(e, t);
  }
};
fg = function() {
  return fe;
};
pg = function(e, t) {
  var n = fe;
  try {
    return fe = e, t();
  } finally {
    fe = n;
  }
};
qu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Bu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Fl(r);
            if (!o) throw Error(O(90));
            Hm(r), Bu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Km(e, n);
      break;
    case "select":
      t = n.value, t != null && lo(e, !!n.multiple, t, !1);
  }
};
Jm = Ld;
eg = $r;
var Ox = { usingClientEntryPoint: !1, Events: [es, eo, Fl, Ym, Zm, Ld] }, Go = { findFiberByHostInstance: gr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Nx = { bundleType: Go.bundleType, version: Go.version, rendererPackageName: Go.rendererPackageName, rendererConfig: Go.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _n.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = rg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Go.findFiberByHostInstance || zx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ss.isDisabled && Ss.supportsFiber) try {
    Ol = Ss.inject(Nx), pn = Ss;
  } catch {
  }
}
Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ox;
Tt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hd(t)) throw Error(O(200));
  return Mx(e, t, null, n);
};
Tt.createRoot = function(e, t) {
  if (!Hd(e)) throw Error(O(299));
  var n = !1, r = "", o = N0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Bd(e, 1, !1, null, null, n, !1, r, o), e[$n] = t.current, zi(e.nodeType === 8 ? e.parentNode : e), new Wd(t);
};
Tt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = rg(t), e = e === null ? null : e.stateNode, e;
};
Tt.flushSync = function(e) {
  return $r(e);
};
Tt.hydrate = function(e, t, n) {
  if (!ql(t)) throw Error(O(200));
  return Ql(null, e, t, !0, n);
};
Tt.hydrateRoot = function(e, t, n) {
  if (!Hd(e)) throw Error(O(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = N0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = O0(t, null, e, 1, n ?? null, o, !1, i, s), e[$n] = t.current, zi(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Gl(t);
};
Tt.render = function(e, t, n) {
  if (!ql(t)) throw Error(O(200));
  return Ql(null, e, t, !1, n);
};
Tt.unmountComponentAtNode = function(e) {
  if (!ql(e)) throw Error(O(40));
  return e._reactRootContainer ? ($r(function() {
    Ql(null, null, e, !1, function() {
      e._reactRootContainer = null, e[$n] = null;
    });
  }), !0) : !1;
};
Tt.unstable_batchedUpdates = Ld;
Tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ql(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Ql(e, t, n, !1, r);
};
Tt.version = "18.2.0-next-9e3b772b8-20220608";
function L0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0);
    } catch (e) {
      console.error(e);
    }
}
L0(), Om.exports = Tt;
var Xl = Om.exports;
const Rs = /* @__PURE__ */ Xc(Xl);
var rh = Xl;
Au.createRoot = rh.createRoot, Au.hydrateRoot = rh.hydrateRoot;
var j0 = Symbol.for("immer-nothing"), oh = Symbol.for("immer-draftable"), $t = Symbol.for("immer-state");
function Jt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var So = Object.getPrototypeOf;
function Ro(e) {
  return !!e && !!e[$t];
}
function Pr(e) {
  var t;
  return e ? F0(e) || Array.isArray(e) || !!e[oh] || !!((t = e.constructor) != null && t[oh]) || Zl(e) || Jl(e) : !1;
}
var Lx = Object.prototype.constructor.toString();
function F0(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = So(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Lx;
}
function bl(e, t) {
  Yl(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Yl(e) {
  const t = e[$t];
  return t ? t.type_ : Array.isArray(e) ? 1 : Zl(e) ? 2 : Jl(e) ? 3 : 0;
}
function $c(e, t) {
  return Yl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function D0(e, t, n) {
  const r = Yl(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function jx(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Zl(e) {
  return e instanceof Map;
}
function Jl(e) {
  return e instanceof Set;
}
function pr(e) {
  return e.copy_ || e.base_;
}
function Pc(e, t) {
  if (Zl(e))
    return new Map(e);
  if (Jl(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = F0(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[$t];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const s = o[i], l = r[s];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (r[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[s]
      });
    }
    return Object.create(So(e), r);
  } else {
    const r = So(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Vd(e, t = !1) {
  return ea(e) || Ro(e) || !Pr(e) || (Yl(e) > 1 && (e.set = e.add = e.clear = e.delete = Fx), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Vd(r, !0))), e;
}
function Fx() {
  Jt(2);
}
function ea(e) {
  return Object.isFrozen(e);
}
var Dx = {};
function Tr(e) {
  const t = Dx[e];
  return t || Jt(0, e), t;
}
var Ui;
function B0() {
  return Ui;
}
function Bx(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function ih(e, t) {
  t && (Tr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Tc(e) {
  _c(e), e.drafts_.forEach(Ux), e.drafts_ = null;
}
function _c(e) {
  e === Ui && (Ui = e.parent_);
}
function sh(e) {
  return Ui = Bx(Ui, e);
}
function Ux(e) {
  const t = e[$t];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function lh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[$t].modified_ && (Tc(t), Jt(4)), Pr(e) && (e = kl(t, e), t.parent_ || wl(t, e)), t.patches_ && Tr("Patches").generateReplacementPatches_(
    n[$t].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = kl(t, n, []), Tc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== j0 ? e : void 0;
}
function kl(e, t, n) {
  if (ea(t))
    return t;
  const r = t[$t];
  if (!r)
    return bl(
      t,
      (o, i) => ah(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return wl(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), bl(
      i,
      (l, a) => ah(e, r, o, l, a, n, s)
    ), wl(e, o, !1), n && e.patches_ && Tr("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function ah(e, t, n, r, o, i, s) {
  if (Ro(o)) {
    const l = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !$c(t.assigned_, r) ? i.concat(r) : void 0, a = kl(e, o, l);
    if (D0(n, r, a), Ro(a))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else s && n.add(o);
  if (Pr(o) && !ea(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    kl(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && wl(e, o);
  }
}
function wl(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Vd(t, n);
}
function Wx(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : B0(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = r, i = Kd;
  n && (o = [r], i = Wi);
  const { revoke: s, proxy: l } = Proxy.revocable(o, i);
  return r.draft_ = l, r.revoke_ = s, l;
}
var Kd = {
  get(e, t) {
    if (t === $t)
      return e;
    const n = pr(e);
    if (!$c(n, t))
      return Hx(e, n, t);
    const r = n[t];
    return e.finalized_ || !Pr(r) ? r : r === gu(e.base_, t) ? (vu(e), e.copy_[t] = Mc(r, e)) : r;
  },
  has(e, t) {
    return t in pr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(pr(e));
  },
  set(e, t, n) {
    const r = U0(pr(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = gu(pr(e), t), i = o == null ? void 0 : o[$t];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (jx(n, o) && (n !== void 0 || $c(e.base_, t)))
        return !0;
      vu(e), Ic(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return gu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, vu(e), Ic(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = pr(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    Jt(11);
  },
  getPrototypeOf(e) {
    return So(e.base_);
  },
  setPrototypeOf() {
    Jt(12);
  }
}, Wi = {};
bl(Kd, (e, t) => {
  Wi[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Wi.deleteProperty = function(e, t) {
  return Wi.set.call(this, e, t, void 0);
};
Wi.set = function(e, t, n) {
  return Kd.set.call(this, e[0], t, n, e[0]);
};
function gu(e, t) {
  const n = e[$t];
  return (n ? pr(n) : e)[t];
}
function Hx(e, t, n) {
  var o;
  const r = U0(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function U0(e, t) {
  if (!(t in e))
    return;
  let n = So(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = So(n);
  }
}
function Ic(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ic(e.parent_));
}
function vu(e) {
  e.copy_ || (e.copy_ = Pc(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Vx = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const s = this;
        return function(a = i, ...u) {
          return s.produce(a, (c) => n.call(this, c, ...u));
        };
      }
      typeof n != "function" && Jt(6), r !== void 0 && typeof r != "function" && Jt(7);
      let o;
      if (Pr(t)) {
        const i = sh(this), s = Mc(t, void 0);
        let l = !0;
        try {
          o = n(s), l = !1;
        } finally {
          l ? Tc(i) : _c(i);
        }
        return ih(i, r), lh(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === j0 && (o = void 0), this.autoFreeze_ && Vd(o, !0), r) {
          const i = [], s = [];
          Tr("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        Jt(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (s, ...l) => this.produceWithPatches(s, (a) => t(a, ...l));
      let r, o;
      return [this.produce(t, n, (s, l) => {
        r = s, o = l;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Pr(e) || Jt(8), Ro(e) && (e = Kx(e));
    const t = sh(this), n = Mc(e, void 0);
    return n[$t].isManual_ = !0, _c(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[$t];
    (!n || !n.isManual_) && Jt(9);
    const { scope_: r } = n;
    return ih(r, t), lh(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Tr("Patches").applyPatches_;
    return Ro(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Mc(e, t) {
  const n = Zl(e) ? Tr("MapSet").proxyMap_(e, t) : Jl(e) ? Tr("MapSet").proxySet_(e, t) : Wx(e, t);
  return (t ? t.scope_ : B0()).drafts_.push(n), n;
}
function Kx(e) {
  return Ro(e) || Jt(10, e), W0(e);
}
function W0(e) {
  if (!Pr(e) || ea(e))
    return e;
  const t = e[$t];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Pc(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Pc(e, !0);
  return bl(n, (r, o) => {
    D0(n, r, W0(o));
  }), t && (t.finalized_ = !1), n;
}
var Pt = new Vx(), Gx = Pt.produce;
Pt.produceWithPatches.bind(
  Pt
);
Pt.setAutoFreeze.bind(Pt);
Pt.setUseStrictShallowCopy.bind(Pt);
Pt.applyPatches.bind(Pt);
Pt.createDraft.bind(Pt);
Pt.finishDraft.bind(Pt);
function qx(e, t, n) {
  var r = x.useMemo(function() {
    return Gx(e);
  }, [e]);
  return x.useReducer(r, t, n);
}
const uh = {
  error: "",
  config: {
    apiHost: "",
    chatflowId: "",
    authToken: "",
    assistant: {
      name: "AI Assistant",
      description: "Your AI Assistant",
      welcomeMessage: "Hello! How can I help you?",
      voice: {
        name: "",
        apiKey: "",
        apiHost: ""
      },
      avatar: {
        staticUrl: "",
        liveUrl: "",
        videoUrl: ""
      }
    },
    ui: {
      sidebar: !1,
      foregroundColor: "#111111",
      backgroundColor: "#EFEFEF",
      backgroundColorBody: "#FFF",
      width: "100%",
      height: "100%"
    }
  },
  session: {
    chatId: "",
    chatMessages: []
  },
  api: {
    online: !1,
    typing: !1,
    canStream: !1,
    isApiAcceptingVoice: !1,
    isApiAcceptingImage: !1,
    isApiAcceptingRAGFile: !1,
    isApiAcceptingFullFile: !1,
    imgUploadSizeAndTypes: [],
    fileUploadSizeAndTypes: []
  }
};
var Qx = function(t) {
  return Xx(t) && !Yx(t);
};
function Xx(e) {
  return !!e && typeof e == "object";
}
function Yx(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || eb(e);
}
var Zx = typeof Symbol == "function" && Symbol.for, Jx = Zx ? Symbol.for("react.element") : 60103;
function eb(e) {
  return e.$$typeof === Jx;
}
function tb(e) {
  return Array.isArray(e) ? [] : {};
}
function Hi(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Eo(tb(e), e, t) : e;
}
function nb(e, t, n) {
  return e.concat(t).map(function(r) {
    return Hi(r, n);
  });
}
function rb(e, t) {
  if (!t.customMerge)
    return Eo;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Eo;
}
function ob(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function ch(e) {
  return Object.keys(e).concat(ob(e));
}
function H0(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function ib(e, t) {
  return H0(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function sb(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && ch(e).forEach(function(o) {
    r[o] = Hi(e[o], n);
  }), ch(t).forEach(function(o) {
    ib(e, o) || (H0(e, o) && n.isMergeableObject(t[o]) ? r[o] = rb(o, n)(e[o], t[o], n) : r[o] = Hi(t[o], n));
  }), r;
}
function Eo(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || nb, n.isMergeableObject = n.isMergeableObject || Qx, n.cloneUnlessOtherwiseSpecified = Hi;
  var r = Array.isArray(t), o = Array.isArray(e), i = r === o;
  return i ? r ? n.arrayMerge(e, t, n) : sb(e, t, n) : Hi(t, n);
}
Eo.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, o) {
    return Eo(r, o, n);
  }, {});
};
var lb = Eo, ab = lb;
const yu = /* @__PURE__ */ Xc(ab), ub = (e, t) => {
  var n;
  if (t.type === "SET_ERROR" && (e.error = t.payload), t.type === "SET_ONLINE_STATUS" && (e.api.online = t.payload), t.type === "SET_STREAMING_STATUS" && (e.api.canStream = t.payload), t.type === "SET_TYPING_STATUS" && (e.api.typing = t.payload), t.type === "SET_UPLOAD_CONFIG") {
    const {
      isApiAcceptingVoice: r,
      isApiAcceptingImage: o,
      isApiAcceptingRAGFile: i,
      isApiAcceptingFullFile: s,
      imgUploadSizeAndTypes: l,
      fileUploadSizeAndTypes: a
    } = t.payload;
    e.api.isApiAcceptingVoice = r, e.api.isApiAcceptingImage = o, e.api.isApiAcceptingRAGFile = i, e.api.isApiAcceptingFullFile = s, l && (e.api.imgUploadSizeAndTypes = l), a && (e.api.fileUploadSizeAndTypes = a);
  }
  if (t.type === "SET_CHAT_ID" && (e.session.chatId = t.payload), t.type === "START_NEW_CHAT" && (localStorage.removeItem("chatData"), e.session.chatId = Date.now().toString(), e.session.chatMessages = [
    {
      id: Date.now().toString(),
      role: "api",
      content: ((n = e.config.assistant) == null ? void 0 : n.welcomeMessage) || "Welcome!",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }
  ]), t.type === "ADD_NEW_MESSAGE" && e.session.chatMessages.push(t.payload), t.type === "DELETE_LAST_MESSAGE" && e.session.chatMessages.pop(), t.type === "UPDATE_LAST_MESSAGE") {
    const r = e.session.chatMessages[e.session.chatMessages.length - 1];
    e.session.chatMessages[e.session.chatMessages.length - 1] = {
      ...r,
      ...t.payload,
      id: t.payload.id || r.id,
      content: r.content + (t.payload.content || "")
    };
  }
}, Ke = [];
for (let e = 0; e < 256; ++e)
  Ke.push((e + 256).toString(16).slice(1));
function cb(e, t = 0) {
  return (Ke[e[t + 0]] + Ke[e[t + 1]] + Ke[e[t + 2]] + Ke[e[t + 3]] + "-" + Ke[e[t + 4]] + Ke[e[t + 5]] + "-" + Ke[e[t + 6]] + Ke[e[t + 7]] + "-" + Ke[e[t + 8]] + Ke[e[t + 9]] + "-" + Ke[e[t + 10]] + Ke[e[t + 11]] + Ke[e[t + 12]] + Ke[e[t + 13]] + Ke[e[t + 14]] + Ke[e[t + 15]]).toLowerCase();
}
let xu;
const db = new Uint8Array(16);
function fb() {
  if (!xu) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    xu = crypto.getRandomValues.bind(crypto);
  }
  return xu(db);
}
const pb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), dh = { randomUUID: pb };
function si(e, t, n) {
  if (dh.randomUUID && !t && !e)
    return dh.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || fb)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, cb(r);
}
async function _r({
  url: e,
  options: t,
  retries: n = 2,
  delay: r = 2e3,
  timeout: o = 1e4
}) {
  const i = new AbortController(), s = setTimeout(() => i.abort(), o), l = await fetch(e, {
    ...t,
    signal: i.signal
  }).catch((f) => c(f));
  l.ok || c(new Error(l.statusText)), clearTimeout(s);
  const a = l.headers.get("content-type"), u = ["json", "image", "audio", "video", "octet-stream"];
  for (const f of u)
    if (a.includes(f))
      return f === "json" ? l.json() : l.blob();
  return l.text();
  async function c(f) {
    if (clearTimeout(s), n === 0) throw f;
    return new Promise((d) => setTimeout(d, r)).then(
      () => _r({ url: e, options: t, retries: n - 1, delay: r, timeout: o })
    );
  }
}
const hb = (e) => new Promise((t, n) => {
  const r = new FileReader();
  r.onloadend = () => t(r.result), r.onerror = n, r.readAsDataURL(e);
}), mb = (e, t) => {
  const n = atob(e.split(",")[1]), r = Array.from(n).map((i) => i.charCodeAt(0)), o = new Uint8Array(r);
  return new Blob([o], { type: t });
};
async function gb(e, t) {
  var a, u, c, f, d, m, v;
  const n = `voice-${t.id}`;
  let r = {};
  const o = localStorage.getItem("localvoices");
  if (o) {
    r = JSON.parse(o);
    const y = r[n];
    if (y) {
      const R = mb(y, "audio/mpeg");
      return new Audio(URL.createObjectURL(R));
    }
  }
  const i = await _r({
    url: `${(u = (a = e.config.assistant) == null ? void 0 : a.voice) == null ? void 0 : u.apiHost}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ((f = (c = e.config.assistant) == null ? void 0 : c.voice) == null ? void 0 : f.apiKey) || ""
      },
      body: JSON.stringify({
        text: t.content || "Hello",
        voice: ((m = (d = e.config.assistant) == null ? void 0 : d.voice) == null ? void 0 : m.name) || "",
        id: ((v = e.config.assistant) == null ? void 0 : v.name) || ""
      })
    }
  }).catch((y) => y), s = await _r({
    url: i.file_url
  }).catch((y) => y), l = await hb(s);
  return r[n] = l, localStorage.setItem("localvoices", JSON.stringify(r)), new Audio(URL.createObjectURL(s));
}
var wn;
class vb extends TransformStream {
  /** Constructs a new instance. */
  constructor(n = { allowCR: !1 }) {
    super({
      transform: (r, o) => {
        for (r = Dr(this, wn) + r; ; ) {
          const i = r.indexOf(`
`), s = n.allowCR ? r.indexOf("\r") : -1;
          if (s !== -1 && s !== r.length - 1 && (i === -1 || i - 1 > s)) {
            o.enqueue(r.slice(0, s)), r = r.slice(s + 1);
            continue;
          }
          if (i === -1)
            break;
          const l = r[i - 1] === "\r" ? i - 1 : i;
          o.enqueue(r.slice(0, l)), r = r.slice(i + 1);
        }
        qf(this, wn, r);
      },
      flush: (r) => {
        if (Dr(this, wn) === "")
          return;
        const o = n.allowCR && Dr(this, wn).endsWith("\r") ? Dr(this, wn).slice(0, -1) : Dr(this, wn);
        r.enqueue(o);
      }
    });
    Gf(this, wn, "");
  }
}
wn = new WeakMap();
function yb(e) {
  let t = new TextDecoderStream(), n = new vb({ allowCR: !0 });
  return e.pipeThrough(t).pipeThrough(n);
}
function xb(e) {
  let n = /[:]\s*/.exec(e), r = n && n.index;
  if (r)
    return [
      e.substring(0, r),
      e.substring(r + n[0].length)
    ];
}
function fh(e, t, n) {
  e.get(t) || e.set(t, n);
}
async function* bb(e, t) {
  if (!e.body)
    return;
  let n = yb(e.body), r, o = n.getReader(), i;
  for (; ; ) {
    if (t && t.aborted)
      return o.cancel();
    if (r = await o.read(), r.done)
      return;
    if (!r.value) {
      i && (yield i), i = void 0;
      continue;
    }
    let [s, l] = xb(r.value) || [];
    s && (s === "data" ? (i || (i = {}), i[s] = i[s] ? i[s] + `
` + l : l) : s === "event" ? (i || (i = {}), i[s] = l) : s === "id" ? (i || (i = {}), i[s] = +l || l) : s === "retry" && (i || (i = {}), i[s] = +l || void 0));
  }
}
async function kb(e, t) {
  let n = new Request(e, t);
  fh(n.headers, "Accept", "text/event-stream"), fh(n.headers, "Content-Type", "application/json");
  let r = await fetch(n);
  if (!r.ok)
    throw r;
  return bb(r, n.signal);
}
async function ph({
  chatData: e,
  userMessage: t,
  canStream: n
}) {
  const r = `${e.config.apiHost}/api/v1/prediction/${e.config.chatflowId}`;
  return n ? await kb(r, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: t.content,
      chatId: e.session.chatId,
      streaming: !0,
      uploads: t.uploads
    })
  }).catch((i) => {
    throw new Error(i);
  }) : await _r({
    url: r,
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: t.content,
        chatId: e.session.chatId,
        uploads: t.uploads
      })
    }
  }).catch((o) => {
    throw new Error(o);
  });
}
async function wb(e) {
  return (await _r({
    url: e.config.apiHost + "/api/v1/ping"
  }).catch((n) => n)).includes("pong");
}
async function Cb(e) {
  return _r({
    url: `${e.config.apiHost}/api/v1/public-chatbotConfig/${e.config.chatflowId}`
  }).catch((t) => t);
}
async function Sb(e) {
  const t = `${e.config.apiHost}/api/v1/chatflows-streaming/${e.config.chatflowId}`, { isStreaming: n } = await _r({
    url: t
  }).catch((r) => r);
  return n || !1;
}
class Rb {
  constructor() {
    ie(this, "audioChunks", []);
    ie(this, "stream", null);
    ie(this, "mediaRecorder", null);
    ie(this, "audioBlob", null);
    ie(this, "startTime", 0);
    ie(this, "timeRecorded", 0);
  }
  /**
   * Request microphone permissions and initialize the audio stream.
   */
  async requestPermission() {
    if (!navigator.mediaDevices)
      throw new Error("Your browser does not support media device access.");
    if (this.stream)
      throw new Error("Audio stream is already initialized.");
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: !0 }).catch((t) => {
      throw new Error(
        "Unable to access microphone. Permission denied or an error occurred: " + t.message
      );
    });
  }
  /**
   * Start recording audio.
   */
  async startRecording() {
    if (this.mediaRecorder)
      throw new Error("Recording is already in progress.");
    await this.requestPermission().catch((t) => {
      throw new Error("Failed to start recording: " + t.message);
    }), this.timeRecorded = 0, this.audioChunks = [], this.mediaRecorder = new MediaRecorder(this.stream), this.startTime = Date.now(), this.mediaRecorder.addEventListener("dataavailable", (t) => {
      this.audioChunks.push(t.data);
    }), this.mediaRecorder.start();
  }
  /**
   * Stop recording audio and ensure the audioBlob is available.
   */
  async stopRecording() {
    if (!this.mediaRecorder)
      throw new Error("No recording is currently in progress.");
    return this.timeRecorded = Date.now() - this.startTime, new Promise((t) => {
      var n, r;
      (n = this.mediaRecorder) == null || n.addEventListener("stop", () => {
        var o;
        this.audioBlob = new Blob(this.audioChunks, {
          type: ((o = this.mediaRecorder) == null ? void 0 : o.mimeType) || "audio/webm"
        }), this.stream && (this.stream.getTracks().forEach((i) => i.stop()), this.stream = null), t(this.audioBlob);
      }), (r = this.mediaRecorder) == null || r.stop(), this.mediaRecorder = null;
    }).catch((t) => {
      throw new Error("Failed to stop and process recording: " + t.message);
    });
  }
}
class Eb {
  constructor() {
    ie(this, "stream", null);
  }
  /**
   * Request camera permissions and initialize the video stream if not already done.
   */
  async requestPermission() {
    if (!navigator.mediaDevices)
      throw new Error("Your browser does not support media device access.");
    this.stream || (this.stream = await navigator.mediaDevices.getUserMedia({ video: !0 }).catch((t) => {
      throw new Error(
        "Unable to access camera. Permission denied or an error occurred: " + t.message
      );
    }));
  }
  /**
   * Start the camera preview by creating a video element and returning it.
   * @returns The MediaStream displaying the preview.
   */
  getPreview() {
    if (!this.stream)
      throw new Error(
        "Stream not initialized. Call requestPermission() first."
      );
    return this.stream;
  }
  /**
   * Stop the video stream and clean up resources.
   */
  stop() {
    this.stream && (this.stream.getTracks().forEach((t) => t.stop()), this.stream = null);
  }
  /**
   * Capture an image from the video stream.
   * @param videoElement The video element displaying the stream.
   * @returns A base64 string representing the captured image.
   */
  captureImage(t) {
    if (!this.stream)
      throw new Error(
        "Stream not initialized. Call requestPermission() first."
      );
    const n = document.createElement("canvas");
    n.width = t.videoWidth, n.height = t.videoHeight;
    const r = n.getContext("2d");
    if (!r)
      throw new Error("Unable to get canvas context.");
    return r.drawImage(t, 0, 0, n.width, n.height), n.toDataURL("image/png");
  }
}
const V0 = x.createContext(null), lr = () => {
  const e = x.useContext(V0);
  if (!e)
    throw new Error("useContextData must be used within a ContextProvider");
  return e;
}, $b = (e) => {
  var i;
  const t = yu(uh, {
    config: yu(uh.config, e)
  });
  let n = localStorage.getItem("chatData");
  if (n) {
    const s = JSON.parse(n);
    return yu(t, { session: s });
  }
  const r = si(), o = {
    id: r,
    role: "api",
    content: ((i = t.config.assistant) == null ? void 0 : i.welcomeMessage) || "Welcome!",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
  return t.session.chatId = r, t.session.chatMessages = [o], localStorage.setItem("chatData", JSON.stringify(t.session)), t;
}, Pb = ({
  children: e,
  config: t
}) => {
  const n = x.useMemo(() => $b(t), [t]), [r, o] = qx(ub, n);
  x.useEffect(() => {
    const s = JSON.stringify(r.session);
    if (localStorage.setItem("chatData", s), r.error) {
      const l = setTimeout(() => {
        o({ type: "SET_ERROR", payload: "" });
      }, 5e3);
      return () => clearTimeout(l);
    }
  }, [r]), x.useEffect(() => {
    (async () => {
      const a = await Sb(r).catch((u) => {
        o({ type: "SET_ERROR", payload: u.message });
      });
      a && o({
        type: "SET_STREAMING_STATUS",
        payload: a
      }), a || o({
        type: "SET_STREAMING_STATUS",
        payload: !1
      });
    })(), (async () => {
      const a = await Cb(r).catch((u) => {
        o({ type: "SET_ERROR", payload: u.message });
      });
      if (a) {
        const { uploads: u, fullFileUpload: c } = a;
        u && o({
          type: "SET_UPLOAD_CONFIG",
          payload: {
            isApiAcceptingVoice: u.isSpeechToTextEnabled,
            isApiAcceptingImage: u.isImageUploadAllowed,
            isApiAcceptingRAGFile: u.isRAGFileUploadAllowed,
            isApiAcceptingFullFile: c.status,
            imgUploadSizeAndTypes: u.imgUploadSizeAndTypes,
            fileUploadSizeAndTypes: u.fileUploadSizeAndTypes
          }
        });
      }
    })();
  }, []);
  const i = x.useMemo(
    () => [r, o],
    [r, o]
  );
  return /* @__PURE__ */ k.jsx(V0.Provider, { value: i, children: e });
};
function b() {
  return b = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, b.apply(null, arguments);
}
function nr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function K0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Tb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _b = /* @__PURE__ */ K0(
  function(e) {
    return Tb.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ib = !1;
function Mb(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function zb(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ab = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !Ib : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zb(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Mb(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), et = "-ms-", Cl = "-moz-", ae = "-webkit-", G0 = "comm", Gd = "rule", qd = "decl", Ob = "@import", q0 = "@keyframes", Nb = "@layer", Lb = Math.abs, ta = String.fromCharCode, jb = Object.assign;
function Fb(e, t) {
  return qe(e, 0) ^ 45 ? (((t << 2 ^ qe(e, 0)) << 2 ^ qe(e, 1)) << 2 ^ qe(e, 2)) << 2 ^ qe(e, 3) : 0;
}
function Q0(e) {
  return e.trim();
}
function Db(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ue(e, t, n) {
  return e.replace(t, n);
}
function zc(e, t) {
  return e.indexOf(t);
}
function qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vi(e, t, n) {
  return e.slice(t, n);
}
function cn(e) {
  return e.length;
}
function Qd(e) {
  return e.length;
}
function Es(e, t) {
  return t.push(e), e;
}
function Bb(e, t) {
  return e.map(t).join("");
}
var na = 1, $o = 1, X0 = 0, xt = 0, je = 0, Oo = "";
function ra(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: na, column: $o, length: s, return: "" };
}
function qo(e, t) {
  return jb(ra("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ub() {
  return je;
}
function Wb() {
  return je = xt > 0 ? qe(Oo, --xt) : 0, $o--, je === 10 && ($o = 1, na--), je;
}
function Rt() {
  return je = xt < X0 ? qe(Oo, xt++) : 0, $o++, je === 10 && ($o = 1, na++), je;
}
function mn() {
  return qe(Oo, xt);
}
function Vs() {
  return xt;
}
function ns(e, t) {
  return Vi(Oo, e, t);
}
function Ki(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Y0(e) {
  return na = $o = 1, X0 = cn(Oo = e), xt = 0, [];
}
function Z0(e) {
  return Oo = "", e;
}
function Ks(e) {
  return Q0(ns(xt - 1, Ac(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Hb(e) {
  for (; (je = mn()) && je < 33; )
    Rt();
  return Ki(e) > 2 || Ki(je) > 3 ? "" : " ";
}
function Vb(e, t) {
  for (; --t && Rt() && !(je < 48 || je > 102 || je > 57 && je < 65 || je > 70 && je < 97); )
    ;
  return ns(e, Vs() + (t < 6 && mn() == 32 && Rt() == 32));
}
function Ac(e) {
  for (; Rt(); )
    switch (je) {
      case e:
        return xt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ac(je);
        break;
      case 40:
        e === 41 && Ac(e);
        break;
      case 92:
        Rt();
        break;
    }
  return xt;
}
function Kb(e, t) {
  for (; Rt() && e + je !== 57; )
    if (e + je === 84 && mn() === 47)
      break;
  return "/*" + ns(t, xt - 1) + "*" + ta(e === 47 ? e : Rt());
}
function Gb(e) {
  for (; !Ki(mn()); )
    Rt();
  return ns(e, xt);
}
function qb(e) {
  return Z0(Gs("", null, null, null, [""], e = Y0(e), 0, [0], e));
}
function Gs(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, c = 0, f = s, d = 0, m = 0, v = 0, y = 1, R = 1, h = 1, p = 0, g = "", w = o, S = i, E = r, C = g; R; )
    switch (v = p, p = Rt()) {
      case 40:
        if (v != 108 && qe(C, f - 1) == 58) {
          zc(C += ue(Ks(p), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Ks(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Hb(v);
        break;
      case 92:
        C += Vb(Vs() - 1, 7);
        continue;
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            Es(Qb(Kb(Rt(), Vs()), t, n), a);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * y:
        l[u++] = cn(C) * h;
      case 125 * y:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            R = 0;
          case 59 + c:
            h == -1 && (C = ue(C, /\f/g, "")), m > 0 && cn(C) - f && Es(m > 32 ? mh(C + ";", r, n, f - 1) : mh(ue(C, " ", "") + ";", r, n, f - 2), a);
            break;
          case 59:
            C += ";";
          default:
            if (Es(E = hh(C, t, n, u, c, o, l, g, w = [], S = [], f), i), p === 123)
              if (c === 0)
                Gs(C, t, E, E, w, i, f, l, S);
              else
                switch (d === 99 && qe(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gs(e, E, E, r && Es(hh(e, E, E, 0, 0, o, l, g, o, w = [], f), S), o, S, f, l, r ? w : S);
                    break;
                  default:
                    Gs(C, E, E, E, [""], S, 0, l, S);
                }
        }
        u = c = m = 0, y = h = 1, g = C = "", f = s;
        break;
      case 58:
        f = 1 + cn(C), m = v;
      default:
        if (y < 1) {
          if (p == 123)
            --y;
          else if (p == 125 && y++ == 0 && Wb() == 125)
            continue;
        }
        switch (C += ta(p), p * y) {
          case 38:
            h = c > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            l[u++] = (cn(C) - 1) * h, h = 1;
            break;
          case 64:
            mn() === 45 && (C += Ks(Rt())), d = mn(), c = f = cn(g = C += Gb(Vs())), p++;
            break;
          case 45:
            v === 45 && cn(C) == 2 && (y = 0);
        }
    }
  return i;
}
function hh(e, t, n, r, o, i, s, l, a, u, c) {
  for (var f = o - 1, d = o === 0 ? i : [""], m = Qd(d), v = 0, y = 0, R = 0; v < r; ++v)
    for (var h = 0, p = Vi(e, f + 1, f = Lb(y = s[v])), g = e; h < m; ++h)
      (g = Q0(y > 0 ? d[h] + " " + p : ue(p, /&\f/g, d[h]))) && (a[R++] = g);
  return ra(e, t, n, o === 0 ? Gd : l, a, u, c);
}
function Qb(e, t, n) {
  return ra(e, t, n, G0, ta(Ub()), Vi(e, 2, -2), 0);
}
function mh(e, t, n, r) {
  return ra(e, t, n, qd, Vi(e, 0, r), Vi(e, r + 1, -1), r);
}
function ho(e, t) {
  for (var n = "", r = Qd(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Xb(e, t, n, r) {
  switch (e.type) {
    case Nb:
      if (e.children.length) break;
    case Ob:
    case qd:
      return e.return = e.return || e.value;
    case G0:
      return "";
    case q0:
      return e.return = e.value + "{" + ho(e.children, r) + "}";
    case Gd:
      e.value = e.props.join(",");
  }
  return cn(n = ho(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Yb(e) {
  var t = Qd(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Zb(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Jb = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = mn(), o === 38 && i === 12 && (n[r] = 1), !Ki(i); )
    Rt();
  return ns(t, xt);
}, ek = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ki(o)) {
      case 0:
        o === 38 && mn() === 12 && (n[r] = 1), t[r] += Jb(xt - 1, n, r);
        break;
      case 2:
        t[r] += Ks(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = mn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ta(o);
    }
  while (o = Rt());
  return t;
}, tk = function(t, n) {
  return Z0(ek(Y0(t), n));
}, gh = /* @__PURE__ */ new WeakMap(), nk = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !gh.get(r)) && !o) {
      gh.set(t, !0);
      for (var i = [], s = tk(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var c = 0; c < l.length; c++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[c]) : l[c] + " " + s[a];
    }
  }
}, rk = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function J0(e, t) {
  switch (Fb(e, t)) {
    case 5103:
      return ae + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ae + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + Cl + e + et + e + e;
    case 6828:
    case 4268:
      return ae + e + et + e + e;
    case 6165:
      return ae + e + et + "flex-" + e + e;
    case 5187:
      return ae + e + ue(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + et + "flex-$1$2") + e;
    case 5443:
      return ae + e + et + "flex-item-" + ue(e, /flex-|-self/, "") + e;
    case 4675:
      return ae + e + et + "flex-line-pack" + ue(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ae + e + et + ue(e, "shrink", "negative") + e;
    case 5292:
      return ae + e + et + ue(e, "basis", "preferred-size") + e;
    case 6060:
      return ae + "box-" + ue(e, "-grow", "") + ae + e + et + ue(e, "grow", "positive") + e;
    case 4554:
      return ae + ue(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    case 6187:
      return ue(ue(ue(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ue(e, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return ue(ue(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ue(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (cn(e) - 1 - t > 6) switch (qe(e, t + 1)) {
        case 109:
          if (qe(e, t + 4) !== 45) break;
        case 102:
          return ue(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + Cl + (qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~zc(e, "stretch") ? J0(ue(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (qe(e, t + 1) !== 115) break;
    case 6444:
      switch (qe(e, cn(e) - 3 - (~zc(e, "!important") && 10))) {
        case 107:
          return ue(e, ":", ":" + ae) + e;
        case 101:
          return ue(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ae + (qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + et + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (qe(e, t + 11)) {
        case 114:
          return ae + e + et + ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ae + e + et + ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ae + e + et + ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ae + e + et + e + e;
  }
  return e;
}
var ok = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case qd:
      t.return = J0(t.value, t.length);
      break;
    case q0:
      return ho([qo(t, {
        value: ue(t.value, "@", "@" + ae)
      })], o);
    case Gd:
      if (t.length) return Bb(t.props, function(i) {
        switch (Db(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ho([qo(t, {
              props: [ue(i, /:(read-\w+)/, ":" + Cl + "$1")]
            })], o);
          case "::placeholder":
            return ho([qo(t, {
              props: [ue(i, /:(plac\w+)/, ":" + ae + "input-$1")]
            }), qo(t, {
              props: [ue(i, /:(plac\w+)/, ":" + Cl + "$1")]
            }), qo(t, {
              props: [ue(i, /:(plac\w+)/, et + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, ik = [ok], sk = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var R = y.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || ik, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var R = y.getAttribute("data-emotion").split(" "), h = 1; h < R.length; h++)
        i[R[h]] = !0;
      l.push(y);
    }
  );
  var a, u = [nk, rk];
  {
    var c, f = [Xb, Zb(function(y) {
      c.insert(y);
    })], d = Yb(u.concat(o, f)), m = function(R) {
      return ho(qb(R), d);
    };
    a = function(R, h, p, g) {
      c = p, m(R ? R + "{" + h.styles + "}" : h.styles), g && (v.inserted[h.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Ab({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: a
  };
  return v.sheet.hydrate(l), v;
}, ev = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve = typeof Symbol == "function" && Symbol.for, Xd = Ve ? Symbol.for("react.element") : 60103, Yd = Ve ? Symbol.for("react.portal") : 60106, oa = Ve ? Symbol.for("react.fragment") : 60107, ia = Ve ? Symbol.for("react.strict_mode") : 60108, sa = Ve ? Symbol.for("react.profiler") : 60114, la = Ve ? Symbol.for("react.provider") : 60109, aa = Ve ? Symbol.for("react.context") : 60110, Zd = Ve ? Symbol.for("react.async_mode") : 60111, ua = Ve ? Symbol.for("react.concurrent_mode") : 60111, ca = Ve ? Symbol.for("react.forward_ref") : 60112, da = Ve ? Symbol.for("react.suspense") : 60113, lk = Ve ? Symbol.for("react.suspense_list") : 60120, fa = Ve ? Symbol.for("react.memo") : 60115, pa = Ve ? Symbol.for("react.lazy") : 60116, ak = Ve ? Symbol.for("react.block") : 60121, uk = Ve ? Symbol.for("react.fundamental") : 60117, ck = Ve ? Symbol.for("react.responder") : 60118, dk = Ve ? Symbol.for("react.scope") : 60119;
function It(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xd:
        switch (e = e.type, e) {
          case Zd:
          case ua:
          case oa:
          case sa:
          case ia:
          case da:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case aa:
              case ca:
              case pa:
              case fa:
              case la:
                return e;
              default:
                return t;
            }
        }
      case Yd:
        return t;
    }
  }
}
function tv(e) {
  return It(e) === ua;
}
pe.AsyncMode = Zd;
pe.ConcurrentMode = ua;
pe.ContextConsumer = aa;
pe.ContextProvider = la;
pe.Element = Xd;
pe.ForwardRef = ca;
pe.Fragment = oa;
pe.Lazy = pa;
pe.Memo = fa;
pe.Portal = Yd;
pe.Profiler = sa;
pe.StrictMode = ia;
pe.Suspense = da;
pe.isAsyncMode = function(e) {
  return tv(e) || It(e) === Zd;
};
pe.isConcurrentMode = tv;
pe.isContextConsumer = function(e) {
  return It(e) === aa;
};
pe.isContextProvider = function(e) {
  return It(e) === la;
};
pe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xd;
};
pe.isForwardRef = function(e) {
  return It(e) === ca;
};
pe.isFragment = function(e) {
  return It(e) === oa;
};
pe.isLazy = function(e) {
  return It(e) === pa;
};
pe.isMemo = function(e) {
  return It(e) === fa;
};
pe.isPortal = function(e) {
  return It(e) === Yd;
};
pe.isProfiler = function(e) {
  return It(e) === sa;
};
pe.isStrictMode = function(e) {
  return It(e) === ia;
};
pe.isSuspense = function(e) {
  return It(e) === da;
};
pe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === oa || e === ua || e === sa || e === ia || e === da || e === lk || typeof e == "object" && e !== null && (e.$$typeof === pa || e.$$typeof === fa || e.$$typeof === la || e.$$typeof === aa || e.$$typeof === ca || e.$$typeof === uk || e.$$typeof === ck || e.$$typeof === dk || e.$$typeof === ak);
};
pe.typeOf = It;
ev.exports = pe;
var fk = ev.exports, nv = fk, pk = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, hk = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rv = {};
rv[nv.ForwardRef] = pk;
rv[nv.Memo] = hk;
var mk = !0;
function gk(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var ov = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  mk === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, iv = function(t, n, r) {
  ov(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function vk(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var yk = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xk = !1, bk = /[A-Z]|^ms/g, kk = /_EMO_([^_]+?)_([^]*?)_EMO_/g, sv = function(t) {
  return t.charCodeAt(1) === 45;
}, vh = function(t) {
  return t != null && typeof t != "boolean";
}, bu = /* @__PURE__ */ K0(function(e) {
  return sv(e) ? e : e.replace(bk, "-$&").toLowerCase();
}), yh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(kk, function(r, o, i) {
          return dn = {
            name: o,
            styles: i,
            next: dn
          }, o;
        });
  }
  return yk[t] !== 1 && !sv(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, wk = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Gi(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return dn = {
          name: o.name,
          styles: o.styles,
          next: dn
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            dn = {
              name: s.name,
              styles: s.styles,
              next: dn
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Ck(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = dn, u = n(e);
        return dn = a, Gi(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var f = t[c];
  return f !== void 0 ? f : c;
}
function Ck(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Gi(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : vh(l) && (r += bu(i) + ":" + yh(i, l) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && xk)
          throw new Error(wk);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            vh(s[a]) && (r += bu(i) + ":" + yh(i, s[a]) + ";");
        else {
          var u = Gi(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += bu(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var xh = /label:\s*([^\s;{]+)\s*(;|$)/g, dn;
function Jd(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  dn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Gi(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Gi(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  xh.lastIndex = 0;
  for (var u = "", c; (c = xh.exec(o)) !== null; )
    u += "-" + c[1];
  var f = vk(o) + u;
  return {
    name: f,
    styles: o,
    next: dn
  };
}
var Sk = function(t) {
  return t();
}, lv = zu.useInsertionEffect ? zu.useInsertionEffect : !1, Rk = lv || Sk, bh = lv || x.useLayoutEffect, av = /* @__PURE__ */ x.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ sk({
    key: "css"
  }) : null
);
av.Provider;
var uv = function(t) {
  return /* @__PURE__ */ x.forwardRef(function(n, r) {
    var o = x.useContext(av);
    return t(n, o, r);
  });
}, ef = /* @__PURE__ */ x.createContext({}), Ek = /* @__PURE__ */ uv(function(e, t) {
  var n = e.styles, r = Jd([n], void 0, x.useContext(ef)), o = x.useRef();
  return bh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), bh(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && iv(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function qi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Jd(t);
}
var Nr = function() {
  var t = qi.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, $k = _b, Pk = function(t) {
  return t !== "theme";
}, kh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? $k : Pk;
}, wh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Tk = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ov(n, r, o), Rk(function() {
    return iv(n, r, o);
  }), null;
}, _k = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = wh(t, n, r), a = l || kh(o), u = !a("as");
  return function() {
    var c = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      f.push.apply(f, c);
    else {
      f.push(c[0][0]);
      for (var d = c.length, m = 1; m < d; m++)
        f.push(c[m], c[0][m]);
    }
    var v = uv(function(y, R, h) {
      var p = u && y.as || o, g = "", w = [], S = y;
      if (y.theme == null) {
        S = {};
        for (var E in y)
          S[E] = y[E];
        S.theme = x.useContext(ef);
      }
      typeof y.className == "string" ? g = gk(R.registered, w, y.className) : y.className != null && (g = y.className + " ");
      var C = Jd(f.concat(w), R.registered, S);
      g += R.key + "-" + C.name, s !== void 0 && (g += " " + s);
      var $ = u && l === void 0 ? kh(p) : a, _ = {};
      for (var P in y)
        u && P === "as" || // $FlowFixMe
        $(P) && (_[P] = y[P]);
      return _.className = g, _.ref = h, /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Tk, {
        cache: R,
        serialized: C,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ x.createElement(p, _));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = f, v.__emotion_forwardProp = l, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + s;
      }
    }), v.withComponent = function(y, R) {
      return e(y, b({}, n, R, {
        shouldForwardProp: wh(v, R, !0)
      })).apply(void 0, f);
    }, v;
  };
}, Ik = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Oc = _k.bind();
Ik.forEach(function(e) {
  Oc[e] = Oc(e);
});
function Mk(e) {
  return e == null || Object.keys(e).length === 0;
}
function zk(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Mk(o) ? n : o) : t;
  return /* @__PURE__ */ k.jsx(Ek, {
    styles: r
  });
}
function cv(e, t) {
  return Oc(e, t);
}
const Ak = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function W(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Un(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function dv(e) {
  if (/* @__PURE__ */ x.isValidElement(e) || !Un(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = dv(e[n]);
  }), t;
}
function vt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? b({}, e) : e;
  return Un(e) && Un(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ x.isValidElement(t[o]) ? r[o] = t[o] : Un(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Un(e[o]) ? r[o] = vt(e[o], t[o], n) : n.clone ? r[o] = Un(t[o]) ? dv(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Ok = ["values", "unit", "step"], Nk = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => b({}, n, {
    [r.key]: r.val
  }), {});
};
function Lk(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, o = W(e, Ok), i = Nk(t), s = Object.keys(i);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function u(d, m) {
    const v = s.indexOf(m);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : m) - r / 100}${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function f(d) {
    const m = s.indexOf(d);
    return m === 0 ? l(s[1]) : m === s.length - 1 ? a(s[m]) : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return b({
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: c,
    not: f,
    unit: n
  }, o);
}
const jk = {
  borderRadius: 4
};
function vi(e, t) {
  return t ? vt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const tf = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Ch = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${tf[e]}px)`
};
function rn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Ch;
    return t.reduce((s, l, a) => (s[i.up(i.keys[a])] = n(t[a]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Ch;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || tf).indexOf(l) !== -1) {
        const a = i.up(l);
        s[a] = n(t[l], l);
      } else {
        const a = l;
        s[a] = t[a];
      }
      return s;
    }, {});
  }
  return n(t);
}
function fv(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function pv(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Fk(e, ...t) {
  const n = fv(e), r = [n, ...t].reduce((o, i) => vt(o, i), {});
  return pv(Object.keys(n), r);
}
function Dk(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function ku({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || Dk(e, t), o = Object.keys(r);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((s, l, a) => (Array.isArray(e) ? (s[l] = e[a] != null ? e[a] : e[i], i = a) : typeof e == "object" ? (s[l] = e[l] != null ? e[l] : e[i], i = l) : s[l] = e, s), {});
}
function M(e) {
  if (typeof e != "string")
    throw new Error(nr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Po(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Sl(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Po(e, n) || r, t && (o = t(o, r, e)), o;
}
function Oe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, u = Po(a, r) || {};
    return rn(s, l, (f) => {
      let d = Sl(u, o, f);
      return f === d && typeof f == "string" && (d = Sl(u, o, `${t}${f === "default" ? "" : M(f)}`, f)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Bk(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Uk = {
  m: "margin",
  p: "padding"
}, Wk = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Sh = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hk = Bk((e) => {
  if (e.length > 2)
    if (Sh[e])
      e = Sh[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Uk[t], o = Wk[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), nf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], rf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...nf, ...rf];
function rs(e, t, n, r) {
  var o;
  const i = (o = Po(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function of(e) {
  return rs(e, "spacing", 8);
}
function Ir(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Vk(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Ir(t, n), r), {});
}
function Kk(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Hk(n), i = Vk(o, r), s = e[n];
  return rn(e, s, i);
}
function hv(e, t) {
  const n = of(e.theme);
  return Object.keys(e).map((r) => Kk(e, t, r, n)).reduce(vi, {});
}
function _e(e) {
  return hv(e, nf);
}
_e.propTypes = {};
_e.filterProps = nf;
function Ie(e) {
  return hv(e, rf);
}
Ie.propTypes = {};
Ie.filterProps = rf;
function Gk(e = 8) {
  if (e.mui)
    return e;
  const t = of({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function ha(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? vi(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ot(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Wt(e, t) {
  return Oe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const qk = Wt("border", Ot), Qk = Wt("borderTop", Ot), Xk = Wt("borderRight", Ot), Yk = Wt("borderBottom", Ot), Zk = Wt("borderLeft", Ot), Jk = Wt("borderColor"), ew = Wt("borderTopColor"), tw = Wt("borderRightColor"), nw = Wt("borderBottomColor"), rw = Wt("borderLeftColor"), ow = Wt("outline", Ot), iw = Wt("outlineColor"), ma = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = rs(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ir(t, r)
    });
    return rn(e, e.borderRadius, n);
  }
  return null;
};
ma.propTypes = {};
ma.filterProps = ["borderRadius"];
ha(qk, Qk, Xk, Yk, Zk, Jk, ew, tw, nw, rw, ma, ow, iw);
const ga = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = rs(e.theme, "spacing", 8), n = (r) => ({
      gap: Ir(t, r)
    });
    return rn(e, e.gap, n);
  }
  return null;
};
ga.propTypes = {};
ga.filterProps = ["gap"];
const va = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = rs(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ir(t, r)
    });
    return rn(e, e.columnGap, n);
  }
  return null;
};
va.propTypes = {};
va.filterProps = ["columnGap"];
const ya = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = rs(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ir(t, r)
    });
    return rn(e, e.rowGap, n);
  }
  return null;
};
ya.propTypes = {};
ya.filterProps = ["rowGap"];
const sw = Oe({
  prop: "gridColumn"
}), lw = Oe({
  prop: "gridRow"
}), aw = Oe({
  prop: "gridAutoFlow"
}), uw = Oe({
  prop: "gridAutoColumns"
}), cw = Oe({
  prop: "gridAutoRows"
}), dw = Oe({
  prop: "gridTemplateColumns"
}), fw = Oe({
  prop: "gridTemplateRows"
}), pw = Oe({
  prop: "gridTemplateAreas"
}), hw = Oe({
  prop: "gridArea"
});
ha(ga, va, ya, sw, lw, aw, uw, cw, dw, fw, pw, hw);
function mo(e, t) {
  return t === "grey" ? t : e;
}
const mw = Oe({
  prop: "color",
  themeKey: "palette",
  transform: mo
}), gw = Oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: mo
}), vw = Oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: mo
});
ha(mw, gw, vw);
function wt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const yw = Oe({
  prop: "width",
  transform: wt
}), sf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || tf[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: wt(n)
      };
    };
    return rn(e, e.maxWidth, t);
  }
  return null;
};
sf.filterProps = ["maxWidth"];
const xw = Oe({
  prop: "minWidth",
  transform: wt
}), bw = Oe({
  prop: "height",
  transform: wt
}), kw = Oe({
  prop: "maxHeight",
  transform: wt
}), ww = Oe({
  prop: "minHeight",
  transform: wt
});
Oe({
  prop: "size",
  cssProperty: "width",
  transform: wt
});
Oe({
  prop: "size",
  cssProperty: "height",
  transform: wt
});
const Cw = Oe({
  prop: "boxSizing"
});
ha(yw, sf, xw, bw, kw, ww, Cw);
const xa = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ot
  },
  borderTop: {
    themeKey: "borders",
    transform: Ot
  },
  borderRight: {
    themeKey: "borders",
    transform: Ot
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ot
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ot
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ot
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ma
  },
  // palette
  color: {
    themeKey: "palette",
    transform: mo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: mo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: mo
  },
  // spacing
  p: {
    style: Ie
  },
  pt: {
    style: Ie
  },
  pr: {
    style: Ie
  },
  pb: {
    style: Ie
  },
  pl: {
    style: Ie
  },
  px: {
    style: Ie
  },
  py: {
    style: Ie
  },
  padding: {
    style: Ie
  },
  paddingTop: {
    style: Ie
  },
  paddingRight: {
    style: Ie
  },
  paddingBottom: {
    style: Ie
  },
  paddingLeft: {
    style: Ie
  },
  paddingX: {
    style: Ie
  },
  paddingY: {
    style: Ie
  },
  paddingInline: {
    style: Ie
  },
  paddingInlineStart: {
    style: Ie
  },
  paddingInlineEnd: {
    style: Ie
  },
  paddingBlock: {
    style: Ie
  },
  paddingBlockStart: {
    style: Ie
  },
  paddingBlockEnd: {
    style: Ie
  },
  m: {
    style: _e
  },
  mt: {
    style: _e
  },
  mr: {
    style: _e
  },
  mb: {
    style: _e
  },
  ml: {
    style: _e
  },
  mx: {
    style: _e
  },
  my: {
    style: _e
  },
  margin: {
    style: _e
  },
  marginTop: {
    style: _e
  },
  marginRight: {
    style: _e
  },
  marginBottom: {
    style: _e
  },
  marginLeft: {
    style: _e
  },
  marginX: {
    style: _e
  },
  marginY: {
    style: _e
  },
  marginInline: {
    style: _e
  },
  marginInlineStart: {
    style: _e
  },
  marginInlineEnd: {
    style: _e
  },
  marginBlock: {
    style: _e
  },
  marginBlockStart: {
    style: _e
  },
  marginBlockEnd: {
    style: _e
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ga
  },
  rowGap: {
    style: ya
  },
  columnGap: {
    style: va
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: wt
  },
  maxWidth: {
    style: sf
  },
  minWidth: {
    transform: wt
  },
  height: {
    transform: wt
  },
  maxHeight: {
    transform: wt
  },
  minHeight: {
    transform: wt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Sw(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Rw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ew() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, l = i[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: a = n,
      themeKey: u,
      transform: c,
      style: f
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = Po(o, u) || {};
    return f ? f(s) : rn(s, r, (v) => {
      let y = Sl(d, c, v);
      return v === y && typeof v == "string" && (y = Sl(d, c, `${n}${v === "default" ? "" : M(v)}`, v)), a === !1 ? y : {
        [a]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const s = (r = i.unstable_sxConfig) != null ? r : xa;
    function l(a) {
      let u = a;
      if (typeof a == "function")
        u = a(i);
      else if (typeof a != "object")
        return a;
      if (!u)
        return null;
      const c = fv(i.breakpoints), f = Object.keys(c);
      let d = c;
      return Object.keys(u).forEach((m) => {
        const v = Rw(u[m], i);
        if (v != null)
          if (typeof v == "object")
            if (s[m])
              d = vi(d, e(m, v, i, s));
            else {
              const y = rn({
                theme: i
              }, v, (R) => ({
                [m]: R
              }));
              Sw(y, v) ? d[m] = t({
                sx: v,
                theme: i
              }) : d = vi(d, y);
            }
          else
            d = vi(d, e(m, v, i, s));
      }), pv(f, d);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const os = Ew();
os.filterProps = ["sx"];
function $w(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Pw = ["breakpoints", "palette", "spacing", "shape"];
function ba(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = W(e, Pw), l = Lk(n), a = Gk(o);
  let u = vt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: b({
      mode: "light"
    }, r),
    spacing: a,
    shape: b({}, jk, i)
  }, s);
  return u.applyStyles = $w, u = t.reduce((c, f) => vt(c, f), u), u.unstable_sxConfig = b({}, xa, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return os({
      sx: f,
      theme: this
    });
  }, u;
}
function Tw(e) {
  return Object.keys(e).length === 0;
}
function _w(e = null) {
  const t = x.useContext(ef);
  return !t || Tw(t) ? e : t;
}
const Iw = ba();
function ka(e = Iw) {
  return _w(e);
}
function Mw({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ka(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ k.jsx(zk, {
    styles: o
  });
}
const zw = ["sx"], Aw = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : xa;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function lf(e) {
  const {
    sx: t
  } = e, n = W(e, zw), {
    systemProps: r,
    otherProps: o
  } = Aw(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const l = t(...s);
    return Un(l) ? b({}, r, l) : r;
  } : i = b({}, r, t), b({}, o, {
    sx: i
  });
}
const Rh = (e) => e, Ow = () => {
  let e = Rh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Rh;
    }
  };
}, af = Ow();
function mv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = mv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function gv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = mv(e)) && (r && (r += " "), r += t);
  return r;
}
const Nw = ["className", "component"];
function Lw(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = cv("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(os);
  return /* @__PURE__ */ x.forwardRef(function(a, u) {
    const c = ka(n), f = lf(a), {
      className: d,
      component: m = "div"
    } = f, v = W(f, Nw);
    return /* @__PURE__ */ k.jsx(i, b({
      as: m,
      ref: u,
      className: gv(d, o ? o(r) : r),
      theme: t && c[t] || c
    }, v));
  });
}
const jw = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function J(e, t, n = "Mui") {
  const r = jw[t];
  return r ? `${n}-${r}` : `${af.generate(e)}-${t}`;
}
function Z(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = J(e, o, n);
  }), r;
}
var ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uf = Symbol.for("react.element"), cf = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), Ca = Symbol.for("react.strict_mode"), Sa = Symbol.for("react.profiler"), Ra = Symbol.for("react.provider"), Ea = Symbol.for("react.context"), Fw = Symbol.for("react.server_context"), $a = Symbol.for("react.forward_ref"), Pa = Symbol.for("react.suspense"), Ta = Symbol.for("react.suspense_list"), _a = Symbol.for("react.memo"), Ia = Symbol.for("react.lazy"), Dw = Symbol.for("react.offscreen"), vv;
vv = Symbol.for("react.module.reference");
function Ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case uf:
        switch (e = e.type, e) {
          case wa:
          case Sa:
          case Ca:
          case Pa:
          case Ta:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Fw:
              case Ea:
              case $a:
              case Ia:
              case _a:
              case Ra:
                return e;
              default:
                return t;
            }
        }
      case cf:
        return t;
    }
  }
}
ge.ContextConsumer = Ea;
ge.ContextProvider = Ra;
ge.Element = uf;
ge.ForwardRef = $a;
ge.Fragment = wa;
ge.Lazy = Ia;
ge.Memo = _a;
ge.Portal = cf;
ge.Profiler = Sa;
ge.StrictMode = Ca;
ge.Suspense = Pa;
ge.SuspenseList = Ta;
ge.isAsyncMode = function() {
  return !1;
};
ge.isConcurrentMode = function() {
  return !1;
};
ge.isContextConsumer = function(e) {
  return Ht(e) === Ea;
};
ge.isContextProvider = function(e) {
  return Ht(e) === Ra;
};
ge.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === uf;
};
ge.isForwardRef = function(e) {
  return Ht(e) === $a;
};
ge.isFragment = function(e) {
  return Ht(e) === wa;
};
ge.isLazy = function(e) {
  return Ht(e) === Ia;
};
ge.isMemo = function(e) {
  return Ht(e) === _a;
};
ge.isPortal = function(e) {
  return Ht(e) === cf;
};
ge.isProfiler = function(e) {
  return Ht(e) === Sa;
};
ge.isStrictMode = function(e) {
  return Ht(e) === Ca;
};
ge.isSuspense = function(e) {
  return Ht(e) === Pa;
};
ge.isSuspenseList = function(e) {
  return Ht(e) === Ta;
};
ge.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === wa || e === Sa || e === Ca || e === Pa || e === Ta || e === Dw || typeof e == "object" && e !== null && (e.$$typeof === Ia || e.$$typeof === _a || e.$$typeof === Ra || e.$$typeof === Ea || e.$$typeof === $a || e.$$typeof === vv || e.getModuleId !== void 0);
};
ge.typeOf = Ht;
const Bw = ["ownerState"], Uw = ["variants"], Ww = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Hw(e) {
  return Object.keys(e).length === 0;
}
function Vw(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function yi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Kw = ba(), Gw = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function $s({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Hw(t) ? e : t[n] || t;
}
function qw(e) {
  return e ? (t, n) => n[e] : null;
}
function qs(e, t) {
  let {
    ownerState: n
  } = t, r = W(t, Bw);
  const o = typeof e == "function" ? e(b({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => qs(i, b({
      ownerState: n
    }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let l = W(o, Uw);
    return i.forEach((a) => {
      let u = !0;
      typeof a.props == "function" ? u = a.props(b({
        ownerState: n
      }, r, n)) : Object.keys(a.props).forEach((c) => {
        (n == null ? void 0 : n[c]) !== a.props[c] && r[c] !== a.props[c] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof a.style == "function" ? a.style(b({
        ownerState: n
      }, r, n)) : a.style));
    }), l;
  }
  return o;
}
function yv(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Kw,
    rootShouldForwardProp: r = yi,
    slotShouldForwardProp: o = yi
  } = e, i = (s) => os(b({}, s, {
    theme: $s(b({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, l = {}) => {
    Ak(s, (S) => S.filter((E) => !(E != null && E.__mui_systemSx)));
    const {
      name: a,
      slot: u,
      skipVariantsResolver: c,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = qw(Gw(u))
    } = l, m = W(l, Ww), v = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = f || !1;
    let R, h = yi;
    u === "Root" || u === "root" ? h = r : u ? h = o : Vw(s) && (h = void 0);
    const p = cv(s, b({
      shouldForwardProp: h,
      label: R
    }, m)), g = (S) => typeof S == "function" && S.__emotion_real !== S || Un(S) ? (E) => qs(S, b({}, E, {
      theme: $s({
        theme: E.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : S, w = (S, ...E) => {
      let C = g(S);
      const $ = E ? E.map(g) : [];
      a && d && $.push((L) => {
        const F = $s(b({}, L, {
          defaultTheme: n,
          themeId: t
        }));
        if (!F.components || !F.components[a] || !F.components[a].styleOverrides)
          return null;
        const D = F.components[a].styleOverrides, A = {};
        return Object.entries(D).forEach(([N, V]) => {
          A[N] = qs(V, b({}, L, {
            theme: F
          }));
        }), d(L, A);
      }), a && !v && $.push((L) => {
        var F;
        const D = $s(b({}, L, {
          defaultTheme: n,
          themeId: t
        })), A = D == null || (F = D.components) == null || (F = F[a]) == null ? void 0 : F.variants;
        return qs({
          variants: A
        }, b({}, L, {
          theme: D
        }));
      }), y || $.push(i);
      const _ = $.length - E.length;
      if (Array.isArray(S) && _ > 0) {
        const L = new Array(_).fill("");
        C = [...S, ...L], C.raw = [...S.raw, ...L];
      }
      const P = p(C, ...$);
      return s.muiName && (P.muiName = s.muiName), P;
    };
    return p.withConfig && (w.withConfig = p.withConfig), w;
  };
}
const Qw = yv();
function df(e, t) {
  const n = b({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = b({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = b({}, i), Object.keys(o).forEach((s) => {
        n[r][s] = df(o[s], i[s]);
      }));
    } else n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Xw(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : df(t.components[n].defaultProps, r);
}
function xv({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = ka(n);
  return r && (o = o[r] || o), Xw({
    theme: o,
    name: t,
    props: e
  });
}
const rr = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function Yw(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function ff(e, t = 0, n = 1) {
  return Yw(e, t, n);
}
function Zw(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Mr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Mr(Zw(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(nr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(nr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function Ma(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Jw(e) {
  e = Mr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Ma({
    type: l,
    values: a
  });
}
function Eh(e) {
  e = Mr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Mr(Jw(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function eC(e, t) {
  const n = Eh(e), r = Eh(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function be(e, t) {
  return e = Mr(e), t = ff(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ma(e);
}
function Nc(e, t) {
  if (e = Mr(e), t = ff(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Ma(e);
}
function Lc(e, t) {
  if (e = Mr(e), t = ff(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Ma(e);
}
function jc(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function za(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function tC(e, t) {
  return () => null;
}
function Qs(e, t) {
  var n, r;
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function yt(e) {
  return e && e.ownerDocument || document;
}
function gn(e) {
  return yt(e).defaultView || window;
}
function nC(e, t) {
  return () => null;
}
function Rl(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let $h = 0;
function rC(e) {
  const [t, n] = x.useState(e), r = e || t;
  return x.useEffect(() => {
    t == null && ($h += 1, n(`mui-${$h}`));
  }, [t]), r;
}
const Ph = zu.useId;
function pf(e) {
  if (Ph !== void 0) {
    const t = Ph();
    return e ?? t;
  }
  return rC(e);
}
function oC(e, t, n, r, o) {
  return null;
}
function Fc({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = x.useRef(e !== void 0), [i, s] = x.useState(t), l = o ? e : i, a = x.useCallback((u) => {
    o || s(u);
  }, []);
  return [l, a];
}
function xr(e) {
  const t = x.useRef(e);
  return rr(() => {
    t.current = e;
  }), x.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ue(...e) {
  return x.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Rl(n, t);
    });
  }, e);
}
class hf {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new hf();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
let Aa = !0, Dc = !1;
const iC = new hf(), sC = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function lC(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && sC[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function aC(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Aa = !0);
}
function wu() {
  Aa = !1;
}
function uC() {
  this.visibilityState === "hidden" && Dc && (Aa = !0);
}
function cC(e) {
  e.addEventListener("keydown", aC, !0), e.addEventListener("mousedown", wu, !0), e.addEventListener("pointerdown", wu, !0), e.addEventListener("touchstart", wu, !0), e.addEventListener("visibilitychange", uC, !0);
}
function dC(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Aa || lC(t);
}
function mf() {
  const e = x.useCallback((o) => {
    o != null && cC(o.ownerDocument);
  }, []), t = x.useRef(!1);
  function n() {
    return t.current ? (Dc = !0, iC.start(100, () => {
      Dc = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(o) {
    return dC(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function bv(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const kv = (e) => {
  const t = x.useRef({});
  return x.useEffect(() => {
    t.current = e;
  }), t.current;
};
function ne(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, s) => {
        if (s) {
          const l = t(s);
          l !== "" && i.push(l), n && n[s] && i.push(n[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const fC = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], pC = ba(), hC = Qw("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function mC(e) {
  return xv({
    props: e,
    name: "MuiStack",
    defaultTheme: pC
  });
}
function gC(e, t) {
  const n = x.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ x.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const vC = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], yC = ({
  ownerState: e,
  theme: t
}) => {
  let n = b({
    display: "flex",
    flexDirection: "column"
  }, rn({
    theme: t
  }, ku({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (e.spacing) {
    const r = of(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = ku({
      values: e.direction,
      base: o
    }), s = ku({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, c) => {
      if (!i[a]) {
        const d = u > 0 ? i[c[u - 1]] : "column";
        i[a] = d;
      }
    }), n = vt(n, rn({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: Ir(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${vC(u ? i[u] : e.direction)}`]: Ir(r, a)
      }
    }));
  }
  return n = Fk(t.breakpoints, n), n;
};
function xC(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = hC,
    useThemeProps: n = mC,
    componentName: r = "MuiStack"
  } = e, o = () => ne({
    root: ["root"]
  }, (a) => J(r, a), {}), i = t(yC);
  return /* @__PURE__ */ x.forwardRef(function(a, u) {
    const c = n(a), f = lf(c), {
      component: d = "div",
      direction: m = "column",
      spacing: v = 0,
      divider: y,
      children: R,
      className: h,
      useFlexGap: p = !1
    } = f, g = W(f, fC), w = {
      direction: m,
      spacing: v,
      useFlexGap: p
    }, S = o();
    return /* @__PURE__ */ k.jsx(i, b({
      as: d,
      ownerState: w,
      ref: u,
      className: gv(S.root, h)
    }, g, {
      children: y ? gC(R, y) : R
    }));
  });
}
function bC(e, t) {
  return b({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const Qi = {
  black: "#000",
  white: "#fff"
}, kC = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ur = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Wr = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Qo = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Hr = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Vr = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Kr = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, wC = ["mode", "contrastThreshold", "tonalOffset"], Th = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Qi.white,
    default: Qi.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Cu = {
  text: {
    primary: Qi.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Qi.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function _h(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Lc(e.main, o) : t === "dark" && (e.dark = Nc(e.main, i)));
}
function CC(e = "light") {
  return e === "dark" ? {
    main: Hr[200],
    light: Hr[50],
    dark: Hr[400]
  } : {
    main: Hr[700],
    light: Hr[400],
    dark: Hr[800]
  };
}
function SC(e = "light") {
  return e === "dark" ? {
    main: Ur[200],
    light: Ur[50],
    dark: Ur[400]
  } : {
    main: Ur[500],
    light: Ur[300],
    dark: Ur[700]
  };
}
function RC(e = "light") {
  return e === "dark" ? {
    main: Wr[500],
    light: Wr[300],
    dark: Wr[700]
  } : {
    main: Wr[700],
    light: Wr[400],
    dark: Wr[800]
  };
}
function EC(e = "light") {
  return e === "dark" ? {
    main: Vr[400],
    light: Vr[300],
    dark: Vr[700]
  } : {
    main: Vr[700],
    light: Vr[500],
    dark: Vr[900]
  };
}
function $C(e = "light") {
  return e === "dark" ? {
    main: Kr[400],
    light: Kr[300],
    dark: Kr[700]
  } : {
    main: Kr[800],
    light: Kr[500],
    dark: Kr[900]
  };
}
function PC(e = "light") {
  return e === "dark" ? {
    main: Qo[400],
    light: Qo[300],
    dark: Qo[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Qo[500],
    dark: Qo[900]
  };
}
function TC(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = W(e, wC), i = e.primary || CC(t), s = e.secondary || SC(t), l = e.error || RC(t), a = e.info || EC(t), u = e.success || $C(t), c = e.warning || PC(t);
  function f(y) {
    return eC(y, Cu.text.primary) >= n ? Cu.text.primary : Th.text.primary;
  }
  const d = ({
    color: y,
    name: R,
    mainShade: h = 500,
    lightShade: p = 300,
    darkShade: g = 700
  }) => {
    if (y = b({}, y), !y.main && y[h] && (y.main = y[h]), !y.hasOwnProperty("main"))
      throw new Error(nr(11, R ? ` (${R})` : "", h));
    if (typeof y.main != "string")
      throw new Error(nr(12, R ? ` (${R})` : "", JSON.stringify(y.main)));
    return _h(y, "light", p, r), _h(y, "dark", g, r), y.contrastText || (y.contrastText = f(y.main)), y;
  }, m = {
    dark: Cu,
    light: Th
  };
  return vt(b({
    // A collection of common colors.
    common: b({}, Qi),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: a,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: kC,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, m[t]), o);
}
const _C = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function IC(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ih = {
  textTransform: "uppercase"
}, Mh = '"Roboto", "Helvetica", "Arial", sans-serif';
function MC(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Mh,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: f
  } = n, d = W(n, _C), m = o / 14, v = f || ((h) => `${h / u * m}rem`), y = (h, p, g, w, S) => b({
    fontFamily: r,
    fontWeight: h,
    fontSize: v(p),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: g
  }, r === Mh ? {
    letterSpacing: `${IC(w / p)}em`
  } : {}, S, c), R = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(l, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(l, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(l, 14, 1.75, 0.4, Ih),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, Ih),
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return vt(b({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: a
  }, R), d, {
    clone: !1
    // No need to clone deep
  });
}
const zC = 0.2, AC = 0.14, OC = 0.12;
function we(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${zC})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${AC})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${OC})`].join(",");
}
const NC = ["none", we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], LC = ["duration", "easing", "delay"], jC = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, FC = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function zh(e) {
  return `${Math.round(e)}ms`;
}
function DC(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function BC(e) {
  const t = b({}, jC, e.easing), n = b({}, FC, e.duration);
  return b({
    getAutoHeightDuration: DC,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: l = t.easeInOut,
        delay: a = 0
      } = i;
      return W(i, LC), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof s == "string" ? s : zh(s)} ${l} ${typeof a == "string" ? a : zh(a)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const UC = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, WC = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function wv(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = W(e, WC);
  if (e.vars)
    throw new Error(nr(18));
  const l = TC(r), a = ba(e);
  let u = vt(a, {
    mixins: bC(a.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: NC.slice(),
    typography: MC(l, i),
    transitions: BC(o),
    zIndex: b({}, UC)
  });
  return u = vt(u, s), u = t.reduce((c, f) => vt(c, f), u), u.unstable_sxConfig = b({}, xa, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return os({
      sx: f,
      theme: this
    });
  }, u;
}
const Oa = wv(), is = "$$material";
function ee({
  props: e,
  name: t
}) {
  return xv({
    props: e,
    name: t,
    defaultTheme: Oa,
    themeId: is
  });
}
function Cv(e) {
  return /* @__PURE__ */ k.jsx(Mw, b({}, e, {
    defaultTheme: Oa,
    themeId: is
  }));
}
const HC = (e, t) => b({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%"
}, t && !e.vars && {
  colorScheme: e.palette.mode
}), VC = (e) => b({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), KC = (e, t = !1) => {
  var n, r;
  const o = {};
  t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([l, a]) => {
    var u;
    o[e.getColorSchemeSelector(l).replace(/\s*&/, "")] = {
      colorScheme: (u = a.palette) == null ? void 0 : u.mode
    };
  });
  let i = b({
    html: HC(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: b({
      margin: 0
    }, VC(e), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    })
  }, o);
  const s = (n = e.components) == null || (r = n.MuiCssBaseline) == null ? void 0 : r.styleOverrides;
  return s && (i = [i, s]), i;
};
function GC(e) {
  const t = ee({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ k.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ k.jsx(Cv, {
      styles: (o) => KC(o, r)
    }), n]
  });
}
const Vt = (e) => yi(e) && e !== "classes", qC = yi, j = yv({
  themeId: is,
  defaultTheme: Oa,
  rootShouldForwardProp: Vt
}), Dt = xC({
  createStyledComponent: j("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => ee({
    props: e,
    name: "MuiStack"
  })
});
function Sv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Sv(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function H() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = Sv(e)) && (r && (r += " "), r += t);
  return r;
}
function El(e) {
  return typeof e == "string";
}
function QC(e, t, n) {
  return e === void 0 || El(e) ? t : b({}, t, {
    ownerState: b({}, t.ownerState, n)
  });
}
const XC = {
  disableDefaultClasses: !1
}, YC = /* @__PURE__ */ x.createContext(XC);
function ZC(e) {
  const {
    disableDefaultClasses: t
  } = x.useContext(YC);
  return (n) => t ? "" : e(n);
}
function JC(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Bc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ah(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function eS(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const m = H(o == null ? void 0 : o.className, r == null ? void 0 : r.className, i, n == null ? void 0 : n.className), v = b({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), y = b({}, n, o, r);
    return m.length > 0 && (y.className = m), Object.keys(v).length > 0 && (y.style = v), {
      props: y,
      internalRef: void 0
    };
  }
  const s = JC(b({}, o, r)), l = Ah(r), a = Ah(o), u = t(s), c = H(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), f = b({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), d = b({}, u, n, a, l);
  return c.length > 0 && (d.className = c), Object.keys(f).length > 0 && (d.style = f), {
    props: d,
    internalRef: u.ref
  };
}
const tS = ["elementType", "externalSlotProps", "ownerState"];
function $l(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o
  } = e, i = W(e, tS), s = Bc(r, o), {
    props: l,
    internalRef: a
  } = eS(b({}, i, {
    externalSlotProps: s
  })), u = Ue(a, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return QC(n, b({}, l, {
    ref: u
  }), o);
}
function nS(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: r = 99,
    showZero: o = !1
  } = e, i = kv({
    badgeContent: t,
    max: r
  });
  let s = n;
  n === !1 && t === 0 && !o && (s = !0);
  const {
    badgeContent: l,
    max: a = r
  } = s ? i : e, u = l && Number(l) > a ? `${a}+` : l;
  return {
    badgeContent: l,
    invisible: s,
    max: a,
    displayValue: u
  };
}
const rS = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function oS(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function iS(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function sS(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || iS(e));
}
function lS(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(rS)).forEach((r, o) => {
    const i = oS(r);
    i === -1 || !sS(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function aS() {
  return !0;
}
function uS(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = lS,
    isEnabled: s = aS,
    open: l
  } = e, a = x.useRef(!1), u = x.useRef(null), c = x.useRef(null), f = x.useRef(null), d = x.useRef(null), m = x.useRef(!1), v = x.useRef(null), y = Ue(t.ref, v), R = x.useRef(null);
  x.useEffect(() => {
    !l || !v.current || (m.current = !n);
  }, [n, l]), x.useEffect(() => {
    if (!l || !v.current)
      return;
    const g = yt(v.current);
    return v.current.contains(g.activeElement) || (v.current.hasAttribute("tabIndex") || v.current.setAttribute("tabIndex", "-1"), m.current && v.current.focus()), () => {
      o || (f.current && f.current.focus && (a.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), x.useEffect(() => {
    if (!l || !v.current)
      return;
    const g = yt(v.current), w = (C) => {
      const {
        current: $
      } = v;
      if ($ !== null) {
        if (!g.hasFocus() || r || !s() || a.current) {
          a.current = !1;
          return;
        }
        if (!$.contains(g.activeElement)) {
          if (C && d.current !== C.target || g.activeElement !== d.current)
            d.current = null;
          else if (d.current !== null)
            return;
          if (!m.current)
            return;
          let L = [];
          if ((g.activeElement === u.current || g.activeElement === c.current) && (L = i(v.current)), L.length > 0) {
            var _, P;
            const F = !!((_ = R.current) != null && _.shiftKey && ((P = R.current) == null ? void 0 : P.key) === "Tab"), D = L[0], A = L[L.length - 1];
            typeof D != "string" && typeof A != "string" && (F ? A.focus() : D.focus());
          } else
            $.focus();
        }
      }
    }, S = (C) => {
      R.current = C, !(r || !s() || C.key !== "Tab") && g.activeElement === v.current && C.shiftKey && (a.current = !0, c.current && c.current.focus());
    };
    g.addEventListener("focusin", w), g.addEventListener("keydown", S, !0);
    const E = setInterval(() => {
      g.activeElement && g.activeElement.tagName === "BODY" && w(null);
    }, 50);
    return () => {
      clearInterval(E), g.removeEventListener("focusin", w), g.removeEventListener("keydown", S, !0);
    };
  }, [n, r, o, s, l, i]);
  const h = (g) => {
    f.current === null && (f.current = g.relatedTarget), m.current = !0, d.current = g.target;
    const w = t.props.onFocus;
    w && w(g);
  }, p = (g) => {
    f.current === null && (f.current = g.relatedTarget), m.current = !0;
  };
  return /* @__PURE__ */ k.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ k.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ x.cloneElement(t, {
      ref: y,
      onFocus: h
    }), /* @__PURE__ */ k.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function cS(e) {
  return typeof e == "function" ? e() : e;
}
const dS = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = x.useState(null), a = Ue(/* @__PURE__ */ x.isValidElement(r) ? r.ref : null, n);
  if (rr(() => {
    i || l(cS(o) || document.body);
  }, [o, i]), rr(() => {
    if (s && !i)
      return Rl(n, s), () => {
        Rl(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ x.isValidElement(r)) {
      const u = {
        ref: a
      };
      return /* @__PURE__ */ x.cloneElement(r, u);
    }
    return /* @__PURE__ */ k.jsx(x.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ k.jsx(x.Fragment, {
    children: s && /* @__PURE__ */ Xl.createPortal(r, s)
  });
});
function fS(e) {
  const t = yt(e);
  return t.body === e ? gn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function xi(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Oh(e) {
  return parseInt(gn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function pS(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Nh(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1, a = !pS(s);
    l && a && xi(s, o);
  });
}
function Su(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function hS(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (fS(r)) {
      const s = bv(yt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Oh(r) + s}px`;
      const l = yt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Oh(a) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = yt(r).body;
    else {
      const s = r.parentElement, l = gn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: l
    }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l);
    });
  };
}
function mS(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class gS {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && xi(t.modalRef, !1);
    const o = mS(n);
    Nh(n, t.mount, t.modalRef, o, !0);
    const i = Su(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Su(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = hS(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Su(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && xi(t.modalRef, n), Nh(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && xi(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function vS(e) {
  return J("MuiModal", e);
}
Z("MuiModal", ["root", "hidden", "backdrop"]);
const yS = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], xS = (e) => {
  const {
    open: t,
    exited: n
  } = e;
  return ne({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, ZC(vS));
};
function bS(e) {
  return typeof e == "function" ? e() : e;
}
function kS(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const wS = new gS(), CS = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, o;
  const {
    children: i,
    closeAfterTransition: s = !1,
    container: l,
    disableAutoFocus: a = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: c = !1,
    disablePortal: f = !1,
    disableRestoreFocus: d = !1,
    disableScrollLock: m = !1,
    hideBackdrop: v = !1,
    keepMounted: y = !1,
    // private
    manager: R = wS,
    onBackdropClick: h,
    onClose: p,
    onKeyDown: g,
    open: w,
    onTransitionEnter: S,
    onTransitionExited: E,
    slotProps: C = {},
    slots: $ = {}
  } = t, _ = W(t, yS), P = R, [L, F] = x.useState(!w), D = x.useRef({}), A = x.useRef(null), N = x.useRef(null), V = Ue(N, n), B = kS(i), T = (r = t["aria-hidden"]) != null ? r : !0, I = () => yt(A.current), z = () => (D.current.modalRef = N.current, D.current.mountNode = A.current, D.current), G = () => {
    P.mount(z(), {
      disableScrollLock: m
    }), N.current && (N.current.scrollTop = 0);
  }, K = xr(() => {
    const Le = bS(l) || I().body;
    P.add(z(), Le), N.current && G();
  }), ce = x.useCallback(() => P.isTopModal(z()), [P]), Y = xr((Le) => {
    A.current = Le, !(!Le || !N.current) && (w && ce() ? G() : xi(N.current, T));
  }), X = x.useCallback(() => {
    P.remove(z(), T);
  }, [P, T]);
  x.useEffect(() => () => {
    X();
  }, [X]), x.useEffect(() => {
    w ? K() : (!B || !s) && X();
  }, [w, X, B, s, K]);
  const re = b({}, t, {
    closeAfterTransition: s,
    disableAutoFocus: a,
    disableEnforceFocus: u,
    disableEscapeKeyDown: c,
    disablePortal: f,
    disableRestoreFocus: d,
    disableScrollLock: m,
    exited: L,
    hideBackdrop: v,
    keepMounted: y
  }), Pe = xS(re), ct = () => {
    F(!1), S && S();
  }, Se = () => {
    F(!0), E && E(), s && X();
  }, rt = (Le) => {
    Le.target === Le.currentTarget && (h && h(Le), p && p(Le, "backdropClick"));
  }, te = (Le) => {
    g && g(Le), !(Le.key !== "Escape" || !ce()) && (c || (Le.stopPropagation(), p && p(Le, "escapeKeyDown")));
  }, Te = {};
  i.props.tabIndex === void 0 && (Te.tabIndex = "-1"), B && (Te.onEnter = jc(ct, i.props.onEnter), Te.onExited = jc(Se, i.props.onExited));
  const sn = (o = $.root) != null ? o : "div", Kt = $l({
    elementType: sn,
    externalSlotProps: C.root,
    externalForwardedProps: _,
    additionalProps: {
      ref: V,
      role: "presentation",
      onKeyDown: te
    },
    className: Pe.root,
    ownerState: re
  }), bt = $.backdrop, ur = $l({
    elementType: bt,
    externalSlotProps: C.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: rt,
      open: w
    },
    className: Pe.backdrop,
    ownerState: re
  });
  return !y && !w && (!B || L) ? null : /* @__PURE__ */ k.jsx(
    dS,
    {
      ref: Y,
      container: l,
      disablePortal: f,
      children: /* @__PURE__ */ k.jsxs(sn, b({}, Kt, {
        children: [!v && bt ? /* @__PURE__ */ k.jsx(bt, b({}, ur)) : null, /* @__PURE__ */ k.jsx(uS, {
          disableEnforceFocus: u,
          disableAutoFocus: a,
          disableRestoreFocus: d,
          isEnabled: ce,
          open: w,
          children: /* @__PURE__ */ x.cloneElement(i, Te)
        })]
      }))
    }
  );
}), SS = ["onChange", "maxRows", "minRows", "style", "value"];
function Ps(e) {
  return parseInt(e, 10) || 0;
}
const RS = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Lh(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const ES = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l
  } = t, a = W(t, SS), {
    current: u
  } = x.useRef(l != null), c = x.useRef(null), f = Ue(n, c), d = x.useRef(null), m = x.useRef(0), [v, y] = x.useState({
    outerHeightStyle: 0
  }), R = x.useCallback(() => {
    const S = c.current, C = gn(S).getComputedStyle(S);
    if (C.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const $ = d.current;
    $.style.width = C.width, $.value = S.value || t.placeholder || "x", $.value.slice(-1) === `
` && ($.value += " ");
    const _ = C.boxSizing, P = Ps(C.paddingBottom) + Ps(C.paddingTop), L = Ps(C.borderBottomWidth) + Ps(C.borderTopWidth), F = $.scrollHeight;
    $.value = "x";
    const D = $.scrollHeight;
    let A = F;
    i && (A = Math.max(Number(i) * D, A)), o && (A = Math.min(Number(o) * D, A)), A = Math.max(A, D);
    const N = A + (_ === "border-box" ? P + L : 0), V = Math.abs(A - F) <= 1;
    return {
      outerHeightStyle: N,
      overflow: V
    };
  }, [o, i, t.placeholder]), h = (S, E) => {
    const {
      outerHeightStyle: C,
      overflow: $
    } = E;
    return m.current < 20 && (C > 0 && Math.abs((S.outerHeightStyle || 0) - C) > 1 || S.overflow !== $) ? (m.current += 1, {
      overflow: $,
      outerHeightStyle: C
    }) : S;
  }, p = x.useCallback(() => {
    const S = R();
    Lh(S) || y((E) => h(E, S));
  }, [R]), g = () => {
    const S = R();
    Lh(S) || Xl.flushSync(() => {
      y((E) => h(E, S));
    });
  };
  x.useEffect(() => {
    const S = za(() => {
      m.current = 0, c.current && g();
    });
    let E;
    const C = c.current, $ = gn(C);
    return $.addEventListener("resize", S), typeof ResizeObserver < "u" && (E = new ResizeObserver(S), E.observe(C)), () => {
      S.clear(), $.removeEventListener("resize", S), E && E.disconnect();
    };
  }), rr(() => {
    p();
  }), x.useEffect(() => {
    m.current = 0;
  }, [l]);
  const w = (S) => {
    m.current = 0, u || p(), r && r(S);
  };
  return /* @__PURE__ */ k.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ k.jsx("textarea", b({
      value: l,
      onChange: w,
      ref: f,
      rows: i,
      style: b({
        height: v.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: v.overflow ? "hidden" : void 0
      }, s)
    }, a)), /* @__PURE__ */ k.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: d,
      tabIndex: -1,
      style: b({}, RS.shadow, s, {
        padding: 0
      })
    })]
  });
});
function $S(e) {
  return J("MuiDivider", e);
}
const jh = Z("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), PS = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], TS = (e) => {
  const {
    absolute: t,
    children: n,
    classes: r,
    flexItem: o,
    light: i,
    orientation: s,
    textAlign: l,
    variant: a
  } = e;
  return ne({
    root: ["root", t && "absolute", a, i && "light", s === "vertical" && "vertical", o && "flexItem", n && "withChildren", n && s === "vertical" && "withChildrenVertical", l === "right" && s !== "vertical" && "textAlignRight", l === "left" && s !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", s === "vertical" && "wrapperVertical"]
  }, $S, r);
}, _S = j("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin"
}, t.absolute && {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%"
}, t.light && {
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : be(e.palette.divider, 0.08)
}, t.variant === "inset" && {
  marginLeft: 72
}, t.variant === "middle" && t.orientation === "horizontal" && {
  marginLeft: e.spacing(2),
  marginRight: e.spacing(2)
}, t.variant === "middle" && t.orientation === "vertical" && {
  marginTop: e.spacing(1),
  marginBottom: e.spacing(1)
}, t.orientation === "vertical" && {
  height: "100%",
  borderBottomWidth: 0,
  borderRightWidth: "thin"
}, t.flexItem && {
  alignSelf: "stretch",
  height: "auto"
}), ({
  ownerState: e
}) => b({}, e.children && {
  display: "flex",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0,
  "&::before, &::after": {
    content: '""',
    alignSelf: "center"
  }
}), ({
  theme: e,
  ownerState: t
}) => b({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => b({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => b({}, e.textAlign === "right" && e.orientation !== "vertical" && {
  "&::before": {
    width: "90%"
  },
  "&::after": {
    width: "10%"
  }
}, e.textAlign === "left" && e.orientation !== "vertical" && {
  "&::before": {
    width: "10%"
  },
  "&::after": {
    width: "90%"
  }
})), IS = j("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), bi = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: o = !1,
    children: i,
    className: s,
    component: l = i ? "div" : "hr",
    flexItem: a = !1,
    light: u = !1,
    orientation: c = "horizontal",
    role: f = l !== "hr" ? "separator" : void 0,
    textAlign: d = "center",
    variant: m = "fullWidth"
  } = r, v = W(r, PS), y = b({}, r, {
    absolute: o,
    component: l,
    flexItem: a,
    light: u,
    orientation: c,
    role: f,
    textAlign: d,
    variant: m
  }), R = TS(y);
  return /* @__PURE__ */ k.jsx(_S, b({
    as: l,
    className: H(R.root, s),
    role: f,
    ref: n,
    ownerState: y
  }, v, {
    children: i ? /* @__PURE__ */ k.jsx(IS, {
      className: R.wrapper,
      ownerState: y,
      children: i
    }) : null
  }));
});
function MS(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function zS(e) {
  return parseFloat(e);
}
function No() {
  const e = ka(Oa);
  return e[is] || e;
}
const Fh = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function AS(e) {
  return J("MuiSvgIcon", e);
}
Z("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const OS = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], NS = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${M(t)}`, `fontSize${M(n)}`]
  };
  return ne(o, AS, r);
}, LS = j("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${M(n.color)}`], t[`fontSize${M(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, s, l, a, u, c, f, d, m, v, y, R, h, p;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (i = o.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (l = s.pxToRem) == null ? void 0 : l.call(s, 20)) || "1.25rem",
      medium: ((a = e.typography) == null || (u = a.pxToRem) == null ? void 0 : u.call(a, 24)) || "1.5rem",
      large: ((c = e.typography) == null || (f = c.pxToRem) == null ? void 0 : f.call(c, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (d = (m = (e.vars || e).palette) == null || (v = m[t.color]) == null ? void 0 : v.main) != null ? d : {
      action: (y = (e.vars || e).palette) == null || (R = y.action) == null ? void 0 : R.active,
      disabled: (h = (e.vars || e).palette) == null || (p = h.action) == null ? void 0 : p.disabled,
      inherit: void 0
    }[t.color]
  };
}), Uc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: a = "medium",
    htmlColor: u,
    inheritViewBox: c = !1,
    titleAccess: f,
    viewBox: d = "0 0 24 24"
  } = r, m = W(r, OS), v = b({}, r, {
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: d
  }), y = {};
  c || (y.viewBox = d);
  const R = NS(v);
  return /* @__PURE__ */ k.jsxs(LS, b({
    as: l,
    className: H(R.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, y, m, {
    ownerState: v,
    children: [o, f ? /* @__PURE__ */ k.jsx("title", {
      children: f
    }) : null]
  }));
});
Uc.muiName = "SvgIcon";
function Ne(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ k.jsx(Uc, b({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return n.muiName = Uc.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(n));
}
const jS = {
  configure: (e) => {
    af.configure(e);
  }
}, FS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: M,
  createChainedFunction: jc,
  createSvgIcon: Ne,
  debounce: za,
  deprecatedPropType: tC,
  isMuiElement: Qs,
  ownerDocument: yt,
  ownerWindow: gn,
  requirePropFactory: nC,
  setRef: Rl,
  unstable_ClassNameGenerator: jS,
  unstable_useEnhancedEffect: rr,
  unstable_useId: pf,
  unsupportedProp: oC,
  useControlled: Fc,
  useEventCallback: xr,
  useForkRef: Ue,
  useIsFocusVisible: mf
}, Symbol.toStringTag, { value: "Module" }));
function Wc(e, t) {
  return Wc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Wc(e, t);
}
function Rv(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wc(e, t);
}
const Dh = {
  disabled: !1
}, Pl = it.createContext(null);
var DS = function(t) {
  return t.scrollTop;
}, li = "unmounted", hr = "exited", mr = "entering", qr = "entered", Hc = "exiting", on = /* @__PURE__ */ function(e) {
  Rv(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, l = s && !s.isMounting ? r.enter : r.appear, a;
    return i.appearStatus = null, r.in ? l ? (a = hr, i.appearStatus = mr) : a = qr : r.unmountOnExit || r.mountOnEnter ? a = li : a = hr, i.state = {
      status: a
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === li ? {
      status: hr
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== mr && s !== qr && (i = mr) : (s === mr || s === qr) && (i = Hc);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, l;
    return i = s = l = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, l = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: l
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === mr) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Rs.findDOMNode(this);
          s && DS(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === hr && this.setState({
      status: li
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : o, a = this.props.nodeRef ? [l] : [Rs.findDOMNode(this), l], u = a[0], c = a[1], f = this.getTimeouts(), d = l ? f.appear : f.enter;
    if (!o && !s || Dh.disabled) {
      this.safeSetState({
        status: qr
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: mr
    }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(d, function() {
        i.safeSetState({
          status: qr
        }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Rs.findDOMNode(this);
    if (!i || Dh.disabled) {
      this.safeSetState({
        status: hr
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Hc
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: hr
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, i.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Rs.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var a = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = a[0], c = a[1];
      this.props.addEndListener(u, c);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === li)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = W(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ it.createElement(Pl.Provider, {
        value: null
      }, typeof s == "function" ? s(o, l) : it.cloneElement(it.Children.only(s), l))
    );
  }, t;
}(it.Component);
on.contextType = Pl;
on.propTypes = {};
function Gr() {
}
on.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Gr,
  onEntering: Gr,
  onEntered: Gr,
  onExit: Gr,
  onExiting: Gr,
  onExited: Gr
};
on.UNMOUNTED = li;
on.EXITED = hr;
on.ENTERING = mr;
on.ENTERED = qr;
on.EXITING = Hc;
function BS(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gf(e, t) {
  var n = function(i) {
    return t && x.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && x.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function US(e, t) {
  e = e || {}, t = t || {};
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, l = {};
  for (var a in t) {
    if (r[a])
      for (s = 0; s < r[a].length; s++) {
        var u = r[a][s];
        l[r[a][s]] = n(u);
      }
    l[a] = n(a);
  }
  for (s = 0; s < o.length; s++)
    l[o[s]] = n(o[s]);
  return l;
}
function br(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function WS(e, t) {
  return gf(e.children, function(n) {
    return x.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: br(n, "appear", e),
      enter: br(n, "enter", e),
      exit: br(n, "exit", e)
    });
  });
}
function HS(e, t, n) {
  var r = gf(e.children), o = US(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (x.isValidElement(s)) {
      var l = i in t, a = i in r, u = t[i], c = x.isValidElement(u) && !u.props.in;
      a && (!l || c) ? o[i] = x.cloneElement(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: br(s, "exit", e),
        enter: br(s, "enter", e)
      }) : !a && l && !c ? o[i] = x.cloneElement(s, {
        in: !1
      }) : a && l && x.isValidElement(u) && (o[i] = x.cloneElement(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: br(s, "exit", e),
        enter: br(s, "enter", e)
      }));
    }
  }), o;
}
var VS = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, KS = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, vf = /* @__PURE__ */ function(e) {
  Rv(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(BS(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, l = i.handleExited, a = i.firstRender;
    return {
      children: a ? WS(o, l) : HS(o, s, l),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = gf(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var a = b({}, l.children);
      return delete a[o.key], {
        children: a
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = W(o, ["component", "childFactory"]), a = this.state.contextValue, u = VS(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ it.createElement(Pl.Provider, {
      value: a
    }, u) : /* @__PURE__ */ it.createElement(Pl.Provider, {
      value: a
    }, /* @__PURE__ */ it.createElement(i, l, u));
  }, t;
}(it.Component);
vf.propTypes = {};
vf.defaultProps = KS;
const yf = (e) => e.scrollTop;
function To(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
function GS(e) {
  return J("MuiPaper", e);
}
Z("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const qS = ["className", "component", "elevation", "square", "variant"], QS = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ne(i, GS, o);
}, XS = j("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return b({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && b({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${be("#fff", Fh(t.elevation))}, ${be("#fff", Fh(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), ar = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: s = 1,
    square: l = !1,
    variant: a = "elevation"
  } = r, u = W(r, qS), c = b({}, r, {
    component: i,
    elevation: s,
    square: l,
    variant: a
  }), f = QS(c);
  return /* @__PURE__ */ k.jsx(XS, b({
    as: i,
    ownerState: c,
    className: H(f.root, o),
    ref: n
  }, u));
});
function YS(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: a,
    timeout: u
  } = e, [c, f] = x.useState(!1), d = H(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), m = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, v = H(n.child, c && n.childLeaving, r && n.childPulsate);
  return !l && !c && f(!0), x.useEffect(() => {
    if (!l && a != null) {
      const y = setTimeout(a, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [a, l, u]), /* @__PURE__ */ k.jsx("span", {
    className: d,
    style: m,
    children: /* @__PURE__ */ k.jsx("span", {
      className: v
    })
  });
}
const Mt = Z("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ZS = ["center", "classes", "className"];
let Na = (e) => e, Bh, Uh, Wh, Hh;
const Vc = 550, JS = 80, e2 = Nr(Bh || (Bh = Na`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), t2 = Nr(Uh || (Uh = Na`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), n2 = Nr(Wh || (Wh = Na`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), r2 = j("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), o2 = j(YS, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Hh || (Hh = Na`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Mt.rippleVisible, e2, Vc, ({
  theme: e
}) => e.transitions.easing.easeInOut, Mt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Mt.child, Mt.childLeaving, t2, Vc, ({
  theme: e
}) => e.transitions.easing.easeInOut, Mt.childPulsate, n2, ({
  theme: e
}) => e.transitions.easing.easeInOut), i2 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = r, l = W(r, ZS), [a, u] = x.useState([]), c = x.useRef(0), f = x.useRef(null);
  x.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [a]);
  const d = x.useRef(!1), m = x.useRef(null), v = x.useRef(null), y = x.useRef(null);
  x.useEffect(() => () => {
    clearTimeout(m.current);
  }, []);
  const R = x.useCallback((w) => {
    const {
      pulsate: S,
      rippleX: E,
      rippleY: C,
      rippleSize: $,
      cb: _
    } = w;
    u((P) => [...P, /* @__PURE__ */ k.jsx(o2, {
      classes: {
        ripple: H(i.ripple, Mt.ripple),
        rippleVisible: H(i.rippleVisible, Mt.rippleVisible),
        ripplePulsate: H(i.ripplePulsate, Mt.ripplePulsate),
        child: H(i.child, Mt.child),
        childLeaving: H(i.childLeaving, Mt.childLeaving),
        childPulsate: H(i.childPulsate, Mt.childPulsate)
      },
      timeout: Vc,
      pulsate: S,
      rippleX: E,
      rippleY: C,
      rippleSize: $
    }, c.current)]), c.current += 1, f.current = _;
  }, [i]), h = x.useCallback((w = {}, S = {}, E = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: $ = o || S.pulsate,
      fakeElement: _ = !1
      // For test purposes
    } = S;
    if ((w == null ? void 0 : w.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (d.current = !0);
    const P = _ ? null : y.current, L = P ? P.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let F, D, A;
    if ($ || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      F = Math.round(L.width / 2), D = Math.round(L.height / 2);
    else {
      const {
        clientX: N,
        clientY: V
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      F = Math.round(N - L.left), D = Math.round(V - L.top);
    }
    if ($)
      A = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3), A % 2 === 0 && (A += 1);
    else {
      const N = Math.max(Math.abs((P ? P.clientWidth : 0) - F), F) * 2 + 2, V = Math.max(Math.abs((P ? P.clientHeight : 0) - D), D) * 2 + 2;
      A = Math.sqrt(N ** 2 + V ** 2);
    }
    w != null && w.touches ? v.current === null && (v.current = () => {
      R({
        pulsate: C,
        rippleX: F,
        rippleY: D,
        rippleSize: A,
        cb: E
      });
    }, m.current = setTimeout(() => {
      v.current && (v.current(), v.current = null);
    }, JS)) : R({
      pulsate: C,
      rippleX: F,
      rippleY: D,
      rippleSize: A,
      cb: E
    });
  }, [o, R]), p = x.useCallback(() => {
    h({}, {
      pulsate: !0
    });
  }, [h]), g = x.useCallback((w, S) => {
    if (clearTimeout(m.current), (w == null ? void 0 : w.type) === "touchend" && v.current) {
      v.current(), v.current = null, m.current = setTimeout(() => {
        g(w, S);
      });
      return;
    }
    v.current = null, u((E) => E.length > 0 ? E.slice(1) : E), f.current = S;
  }, []);
  return x.useImperativeHandle(n, () => ({
    pulsate: p,
    start: h,
    stop: g
  }), [p, h, g]), /* @__PURE__ */ k.jsx(r2, b({
    className: H(Mt.root, i.root, s),
    ref: y
  }, l, {
    children: /* @__PURE__ */ k.jsx(vf, {
      component: null,
      exit: !0,
      children: a
    })
  }));
});
function s2(e) {
  return J("MuiButtonBase", e);
}
const l2 = Z("MuiButtonBase", ["root", "disabled", "focusVisible"]), a2 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], u2 = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = ne({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, s2, o);
  return n && r && (s.root += ` ${r}`), s;
}, c2 = j("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${l2.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), _o = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: a = "button",
    disabled: u = !1,
    disableRipple: c = !1,
    disableTouchRipple: f = !1,
    focusRipple: d = !1,
    LinkComponent: m = "a",
    onBlur: v,
    onClick: y,
    onContextMenu: R,
    onDragLeave: h,
    onFocus: p,
    onFocusVisible: g,
    onKeyDown: w,
    onKeyUp: S,
    onMouseDown: E,
    onMouseLeave: C,
    onMouseUp: $,
    onTouchEnd: _,
    onTouchMove: P,
    onTouchStart: L,
    tabIndex: F = 0,
    TouchRippleProps: D,
    touchRippleRef: A,
    type: N
  } = r, V = W(r, a2), B = x.useRef(null), T = x.useRef(null), I = Ue(T, A), {
    isFocusVisibleRef: z,
    onFocus: G,
    onBlur: K,
    ref: ce
  } = mf(), [Y, X] = x.useState(!1);
  u && Y && X(!1), x.useImperativeHandle(o, () => ({
    focusVisible: () => {
      X(!0), B.current.focus();
    }
  }), []);
  const [re, Pe] = x.useState(!1);
  x.useEffect(() => {
    Pe(!0);
  }, []);
  const ct = re && !c && !u;
  x.useEffect(() => {
    Y && d && !c && re && T.current.pulsate();
  }, [c, d, Y, re]);
  function Se(Q, q, ve = f) {
    return xr((ze) => (q && q(ze), !ve && T.current && T.current[Q](ze), !0));
  }
  const rt = Se("start", E), te = Se("stop", R), Te = Se("stop", h), sn = Se("stop", $), Kt = Se("stop", (Q) => {
    Y && Q.preventDefault(), C && C(Q);
  }), bt = Se("start", L), ur = Se("stop", _), Le = Se("stop", P), In = Se("stop", (Q) => {
    K(Q), z.current === !1 && X(!1), v && v(Q);
  }, !1), Fo = xr((Q) => {
    B.current || (B.current = Q.currentTarget), G(Q), z.current === !0 && (X(!0), g && g(Q)), p && p(Q);
  }), dt = () => {
    const Q = B.current;
    return a && a !== "button" && !(Q.tagName === "A" && Q.href);
  }, Ye = x.useRef(!1), Mn = xr((Q) => {
    d && !Ye.current && Y && T.current && Q.key === " " && (Ye.current = !0, T.current.stop(Q, () => {
      T.current.start(Q);
    })), Q.target === Q.currentTarget && dt() && Q.key === " " && Q.preventDefault(), w && w(Q), Q.target === Q.currentTarget && dt() && Q.key === "Enter" && !u && (Q.preventDefault(), y && y(Q));
  }), Gt = xr((Q) => {
    d && Q.key === " " && T.current && Y && !Q.defaultPrevented && (Ye.current = !1, T.current.stop(Q, () => {
      T.current.pulsate(Q);
    })), S && S(Q), y && Q.target === Q.currentTarget && dt() && Q.key === " " && !Q.defaultPrevented && y(Q);
  });
  let vn = a;
  vn === "button" && (V.href || V.to) && (vn = m);
  const qt = {};
  vn === "button" ? (qt.type = N === void 0 ? "button" : N, qt.disabled = u) : (!V.href && !V.to && (qt.role = "button"), u && (qt["aria-disabled"] = u));
  const yn = Ue(n, ce, B), zn = b({}, r, {
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: f,
    focusRipple: d,
    tabIndex: F,
    focusVisible: Y
  }), he = u2(zn);
  return /* @__PURE__ */ k.jsxs(c2, b({
    as: vn,
    className: H(he.root, l),
    ownerState: zn,
    onBlur: In,
    onClick: y,
    onContextMenu: te,
    onFocus: Fo,
    onKeyDown: Mn,
    onKeyUp: Gt,
    onMouseDown: rt,
    onMouseLeave: Kt,
    onMouseUp: sn,
    onDragLeave: Te,
    onTouchEnd: ur,
    onTouchMove: Le,
    onTouchStart: bt,
    ref: yn,
    tabIndex: u ? -1 : F,
    type: N
  }, qt, V, {
    children: [s, ct ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ k.jsx(i2, b({
        ref: I,
        center: i
      }, D))
    ) : null]
  }));
});
function d2(e) {
  return J("MuiAlert", e);
}
const Vh = Z("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function f2(e) {
  return J("MuiIconButton", e);
}
const p2 = Z("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), h2 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], m2 = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${M(r)}`, o && `edge${M(o)}`, `size${M(i)}`]
  };
  return ne(s, f2, t);
}, g2 = j(_o, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${M(n.color)}`], n.edge && t[`edge${M(n.edge)}`], t[`size${M(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : be(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return b({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && b({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": b({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : be(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${p2.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Xi = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: a = !1,
    disableFocusRipple: u = !1,
    size: c = "medium"
  } = r, f = W(r, h2), d = b({}, r, {
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: u,
    size: c
  }), m = m2(d);
  return /* @__PURE__ */ k.jsx(g2, b({
    className: H(m.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: a,
    ref: n,
    ownerState: d
  }, f, {
    children: i
  }));
}), v2 = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), y2 = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), x2 = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), b2 = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), k2 = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), w2 = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], C2 = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `${t}${M(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return ne(i, d2, o);
}, S2 = j(ar, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${M(n.color || n.severity)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? Nc : Lc, r = e.palette.mode === "light" ? Lc : Nc, o = t.color || t.severity;
  return b({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, o && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, 0.9),
    [`& .${Vh.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${o}IconColor`]
    } : {
      color: e.palette[o].main
    }
  }, o && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[o].light}`,
    [`& .${Vh.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${o}IconColor`]
    } : {
      color: e.palette[o].main
    }
  }, o && t.variant === "filled" && b({
    fontWeight: e.typography.fontWeightMedium
  }, e.vars ? {
    color: e.vars.palette.Alert[`${o}FilledColor`],
    backgroundColor: e.vars.palette.Alert[`${o}FilledBg`]
  } : {
    backgroundColor: e.palette.mode === "dark" ? e.palette[o].dark : e.palette[o].main,
    color: e.palette.getContrastText(e.palette[o].main)
  }));
}), R2 = j("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), E2 = j("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), Kh = j("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Gh = {
  success: /* @__PURE__ */ k.jsx(v2, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ k.jsx(y2, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ k.jsx(x2, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ k.jsx(b2, {
    fontSize: "inherit"
  })
}, $2 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, o, i, s, l, a;
  const u = ee({
    props: t,
    name: "MuiAlert"
  }), {
    action: c,
    children: f,
    className: d,
    closeText: m = "Close",
    color: v,
    components: y = {},
    componentsProps: R = {},
    icon: h,
    iconMapping: p = Gh,
    onClose: g,
    role: w = "alert",
    severity: S = "success",
    slotProps: E = {},
    slots: C = {},
    variant: $ = "standard"
  } = u, _ = W(u, w2), P = b({}, u, {
    color: v,
    severity: S,
    variant: $
  }), L = C2(P), F = (r = (o = C.closeButton) != null ? o : y.CloseButton) != null ? r : Xi, D = (i = (s = C.closeIcon) != null ? s : y.CloseIcon) != null ? i : k2, A = (l = E.closeButton) != null ? l : R.closeButton, N = (a = E.closeIcon) != null ? a : R.closeIcon;
  return /* @__PURE__ */ k.jsxs(S2, b({
    role: w,
    elevation: 0,
    ownerState: P,
    className: H(L.root, d),
    ref: n
  }, _, {
    children: [h !== !1 ? /* @__PURE__ */ k.jsx(R2, {
      ownerState: P,
      className: L.icon,
      children: h || p[S] || Gh[S]
    }) : null, /* @__PURE__ */ k.jsx(E2, {
      ownerState: P,
      className: L.message,
      children: f
    }), c != null ? /* @__PURE__ */ k.jsx(Kh, {
      ownerState: P,
      className: L.action,
      children: c
    }) : null, c == null && g ? /* @__PURE__ */ k.jsx(Kh, {
      ownerState: P,
      className: L.action,
      children: /* @__PURE__ */ k.jsx(F, b({
        size: "small",
        "aria-label": m,
        title: m,
        color: "inherit",
        onClick: g
      }, A, {
        children: /* @__PURE__ */ k.jsx(D, b({
          fontSize: "small"
        }, N))
      }))
    }) : null]
  }));
});
function P2(e) {
  return J("MuiTypography", e);
}
Z("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const T2 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], _2 = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${M(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return ne(l, P2, s);
}, I2 = j("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${M(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  margin: 0
}, t.variant && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), qh = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, M2 = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, z2 = (e) => M2[e] || e, ss = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiTypography"
  }), o = z2(r.color), i = lf(b({}, r, {
    color: o
  })), {
    align: s = "inherit",
    className: l,
    component: a,
    gutterBottom: u = !1,
    noWrap: c = !1,
    paragraph: f = !1,
    variant: d = "body1",
    variantMapping: m = qh
  } = i, v = W(i, T2), y = b({}, i, {
    align: s,
    color: o,
    className: l,
    component: a,
    gutterBottom: u,
    noWrap: c,
    paragraph: f,
    variant: d,
    variantMapping: m
  }), R = a || (f ? "p" : m[d] || qh[d]) || "span", h = _2(y);
  return /* @__PURE__ */ k.jsx(I2, b({
    as: R,
    ref: n,
    ownerState: y,
    className: H(h.root, l)
  }, v));
});
function A2(e) {
  return J("MuiAppBar", e);
}
Z("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent"]);
const O2 = ["className", "color", "enableColorOnDark", "position"], N2 = (e) => {
  const {
    color: t,
    position: n,
    classes: r
  } = e, o = {
    root: ["root", `color${M(t)}`, `position${M(n)}`]
  };
  return ne(o, A2, r);
}, Ts = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, L2 = j(ar, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${M(n.position)}`], t[`color${M(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
  return b({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0
  }, t.position === "fixed" && {
    position: "fixed",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0,
    "@media print": {
      // Prevent the app bar to be visible on each printed page.
      position: "absolute"
    }
  }, t.position === "absolute" && {
    position: "absolute",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "sticky" && {
    // ⚠️ sticky is not supported by IE11.
    position: "sticky",
    zIndex: (e.vars || e).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, t.position === "static" && {
    position: "static"
  }, t.position === "relative" && {
    position: "relative"
  }, !e.vars && b({}, t.color === "default" && {
    backgroundColor: n,
    color: e.palette.getContrastText(n)
  }, t.color && t.color !== "default" && t.color !== "inherit" && t.color !== "transparent" && {
    backgroundColor: e.palette[t.color].main,
    color: e.palette[t.color].contrastText
  }, t.color === "inherit" && {
    color: "inherit"
  }, e.palette.mode === "dark" && !t.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, t.color === "transparent" && b({
    backgroundColor: "transparent",
    color: "inherit"
  }, e.palette.mode === "dark" && {
    backgroundImage: "none"
  })), e.vars && b({}, t.color === "default" && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : Ts(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : Ts(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
  }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : Ts(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : Ts(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
  }, {
    backgroundColor: "var(--AppBar-background)",
    color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, t.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), j2 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiAppBar"
  }), {
    className: o,
    color: i = "primary",
    enableColorOnDark: s = !1,
    position: l = "fixed"
  } = r, a = W(r, O2), u = b({}, r, {
    color: i,
    position: l,
    enableColorOnDark: s
  }), c = N2(u);
  return /* @__PURE__ */ k.jsx(L2, b({
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: H(c.root, o, l === "fixed" && "mui-fixed"),
    ref: n
  }, a));
}), F2 = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function D2(e) {
  return J("MuiChip", e);
}
const le = Z("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), B2 = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], U2 = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    iconColor: i,
    onDelete: s,
    clickable: l,
    variant: a
  } = e, u = {
    root: ["root", a, n && "disabled", `size${M(r)}`, `color${M(o)}`, l && "clickable", l && `clickableColor${M(o)}`, s && "deletable", s && `deletableColor${M(o)}`, `${a}${M(o)}`],
    label: ["label", `label${M(r)}`],
    avatar: ["avatar", `avatar${M(r)}`, `avatarColor${M(o)}`],
    icon: ["icon", `icon${M(r)}`, `iconColor${M(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${M(r)}`, `deleteIconColor${M(o)}`, `deleteIcon${M(a)}Color${M(o)}`]
  };
  return ne(u, D2, t);
}, W2 = j("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: o,
      clickable: i,
      onDelete: s,
      size: l,
      variant: a
    } = n;
    return [{
      [`& .${le.avatar}`]: t.avatar
    }, {
      [`& .${le.avatar}`]: t[`avatar${M(l)}`]
    }, {
      [`& .${le.avatar}`]: t[`avatarColor${M(r)}`]
    }, {
      [`& .${le.icon}`]: t.icon
    }, {
      [`& .${le.icon}`]: t[`icon${M(l)}`]
    }, {
      [`& .${le.icon}`]: t[`iconColor${M(o)}`]
    }, {
      [`& .${le.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${le.deleteIcon}`]: t[`deleteIcon${M(l)}`]
    }, {
      [`& .${le.deleteIcon}`]: t[`deleteIconColor${M(r)}`]
    }, {
      [`& .${le.deleteIcon}`]: t[`deleteIcon${M(a)}Color${M(r)}`]
    }, t.root, t[`size${M(l)}`], t[`color${M(r)}`], i && t.clickable, i && r !== "default" && t[`clickableColor${M(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${M(r)}`], t[a], t[`${a}${M(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return b({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // label will inherit this from root, then `clickable` class overrides this for both
    cursor: "default",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${le.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${le.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${le.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${le.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${le.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${le.icon}`]: b({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && b({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${le.deleteIcon}`]: b({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : be(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : be(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : be(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${le.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : be(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${le.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => b({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : be(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${le.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : be(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${le.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => b({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${le.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${le.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${le.avatar}`]: {
    marginLeft: 4
  },
  [`& .${le.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${le.icon}`]: {
    marginLeft: 4
  },
  [`& .${le.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${le.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${le.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : be(e.palette[t.color].main, 0.7)}`,
  [`&.${le.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : be(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${le.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : be(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${le.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : be(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), H2 = j("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${M(r)}`]];
  }
})(({
  ownerState: e
}) => b({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}));
function Qh(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Ev = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: s,
    color: l = "default",
    component: a,
    deleteIcon: u,
    disabled: c = !1,
    icon: f,
    label: d,
    onClick: m,
    onDelete: v,
    onKeyDown: y,
    onKeyUp: R,
    size: h = "medium",
    variant: p = "filled",
    tabIndex: g,
    skipFocusWhenDisabled: w = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, S = W(r, B2), E = x.useRef(null), C = Ue(E, n), $ = (I) => {
    I.stopPropagation(), v && v(I);
  }, _ = (I) => {
    I.currentTarget === I.target && Qh(I) && I.preventDefault(), y && y(I);
  }, P = (I) => {
    I.currentTarget === I.target && (v && Qh(I) ? v(I) : I.key === "Escape" && E.current && E.current.blur()), R && R(I);
  }, L = s !== !1 && m ? !0 : s, F = L || v ? _o : a || "div", D = b({}, r, {
    component: F,
    disabled: c,
    size: h,
    color: l,
    iconColor: /* @__PURE__ */ x.isValidElement(f) && f.props.color || l,
    onDelete: !!v,
    clickable: L,
    variant: p
  }), A = U2(D), N = F === _o ? b({
    component: a || "div",
    focusVisibleClassName: A.focusVisible
  }, v && {
    disableRipple: !0
  }) : {};
  let V = null;
  v && (V = u && /* @__PURE__ */ x.isValidElement(u) ? /* @__PURE__ */ x.cloneElement(u, {
    className: H(u.props.className, A.deleteIcon),
    onClick: $
  }) : /* @__PURE__ */ k.jsx(F2, {
    className: H(A.deleteIcon),
    onClick: $
  }));
  let B = null;
  o && /* @__PURE__ */ x.isValidElement(o) && (B = /* @__PURE__ */ x.cloneElement(o, {
    className: H(A.avatar, o.props.className)
  }));
  let T = null;
  return f && /* @__PURE__ */ x.isValidElement(f) && (T = /* @__PURE__ */ x.cloneElement(f, {
    className: H(A.icon, f.props.className)
  })), /* @__PURE__ */ k.jsxs(W2, b({
    as: F,
    className: H(A.root, i),
    disabled: L && c ? !0 : void 0,
    onClick: m,
    onKeyDown: _,
    onKeyUp: P,
    ref: C,
    tabIndex: w && c ? -1 : g,
    ownerState: D
  }, N, S, {
    children: [B || T, /* @__PURE__ */ k.jsx(H2, {
      className: H(A.label),
      ownerState: D,
      children: d
    }), V]
  }));
});
function Lo({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const xf = /* @__PURE__ */ x.createContext(void 0);
function jo() {
  return x.useContext(xf);
}
function Xh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Tl(e, t = !1) {
  return e && (Xh(e.value) && e.value !== "" || t && Xh(e.defaultValue) && e.defaultValue !== "");
}
function V2(e) {
  return e.startAdornment;
}
function K2(e) {
  return J("MuiInputBase", e);
}
const Io = Z("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), G2 = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], La = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${M(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, ja = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, q2 = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: s,
    formControl: l,
    fullWidth: a,
    hiddenLabel: u,
    multiline: c,
    readOnly: f,
    size: d,
    startAdornment: m,
    type: v
  } = e, y = {
    root: ["root", `color${M(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", d === "small" && "sizeSmall", c && "multiline", m && "adornedStart", i && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", c && "inputMultiline", d === "small" && "inputSizeSmall", u && "inputHiddenLabel", m && "inputAdornedStart", i && "inputAdornedEnd", f && "readOnly"]
  };
  return ne(y, K2, t);
}, Fa = j("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: La
})(({
  theme: e,
  ownerState: t
}) => b({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Io.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && b({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Da = j("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ja
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = b({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), o = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return b({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${Io.formControl} &`]: {
      "&::-webkit-input-placeholder": o,
      "&::-moz-placeholder": o,
      // Firefox 19+
      "&:-ms-input-placeholder": o,
      // IE11
      "&::-ms-input-placeholder": o,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${Io.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), Q2 = /* @__PURE__ */ k.jsx(Cv, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), bf = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r;
  const o = ee({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: s,
    autoFocus: l,
    className: a,
    components: u = {},
    componentsProps: c = {},
    defaultValue: f,
    disabled: d,
    disableInjectingGlobalStyles: m,
    endAdornment: v,
    fullWidth: y = !1,
    id: R,
    inputComponent: h = "input",
    inputProps: p = {},
    inputRef: g,
    maxRows: w,
    minRows: S,
    multiline: E = !1,
    name: C,
    onBlur: $,
    onChange: _,
    onClick: P,
    onFocus: L,
    onKeyDown: F,
    onKeyUp: D,
    placeholder: A,
    readOnly: N,
    renderSuffix: V,
    rows: B,
    slotProps: T = {},
    slots: I = {},
    startAdornment: z,
    type: G = "text",
    value: K
  } = o, ce = W(o, G2), Y = p.value != null ? p.value : K, {
    current: X
  } = x.useRef(Y != null), re = x.useRef(), Pe = x.useCallback((he) => {
  }, []), ct = Ue(re, g, p.ref, Pe), [Se, rt] = x.useState(!1), te = jo(), Te = Lo({
    props: o,
    muiFormControl: te,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  Te.focused = te ? te.focused : Se, x.useEffect(() => {
    !te && d && Se && (rt(!1), $ && $());
  }, [te, d, Se, $]);
  const sn = te && te.onFilled, Kt = te && te.onEmpty, bt = x.useCallback((he) => {
    Tl(he) ? sn && sn() : Kt && Kt();
  }, [sn, Kt]);
  rr(() => {
    X && bt({
      value: Y
    });
  }, [Y, bt, X]);
  const ur = (he) => {
    if (Te.disabled) {
      he.stopPropagation();
      return;
    }
    L && L(he), p.onFocus && p.onFocus(he), te && te.onFocus ? te.onFocus(he) : rt(!0);
  }, Le = (he) => {
    $ && $(he), p.onBlur && p.onBlur(he), te && te.onBlur ? te.onBlur(he) : rt(!1);
  }, In = (he, ...Q) => {
    if (!X) {
      const q = he.target || re.current;
      if (q == null)
        throw new Error(nr(1));
      bt({
        value: q.value
      });
    }
    p.onChange && p.onChange(he, ...Q), _ && _(he, ...Q);
  };
  x.useEffect(() => {
    bt(re.current);
  }, []);
  const Fo = (he) => {
    re.current && he.currentTarget === he.target && re.current.focus(), P && !Te.disabled && P(he);
  };
  let dt = h, Ye = p;
  E && dt === "input" && (B ? Ye = b({
    type: void 0,
    minRows: B,
    maxRows: B
  }, Ye) : Ye = b({
    type: void 0,
    maxRows: w,
    minRows: S
  }, Ye), dt = ES);
  const Mn = (he) => {
    bt(he.animationName === "mui-auto-fill-cancel" ? re.current : {
      value: "x"
    });
  };
  x.useEffect(() => {
    te && te.setAdornedStart(!!z);
  }, [te, z]);
  const Gt = b({}, o, {
    color: Te.color || "primary",
    disabled: Te.disabled,
    endAdornment: v,
    error: Te.error,
    focused: Te.focused,
    formControl: te,
    fullWidth: y,
    hiddenLabel: Te.hiddenLabel,
    multiline: E,
    size: Te.size,
    startAdornment: z,
    type: G
  }), vn = q2(Gt), qt = I.root || u.Root || Fa, yn = T.root || c.root || {}, zn = I.input || u.Input || Da;
  return Ye = b({}, Ye, (r = T.input) != null ? r : c.input), /* @__PURE__ */ k.jsxs(x.Fragment, {
    children: [!m && Q2, /* @__PURE__ */ k.jsxs(qt, b({}, yn, !El(qt) && {
      ownerState: b({}, Gt, yn.ownerState)
    }, {
      ref: n,
      onClick: Fo
    }, ce, {
      className: H(vn.root, yn.className, a, N && "MuiInputBase-readOnly"),
      children: [z, /* @__PURE__ */ k.jsx(xf.Provider, {
        value: null,
        children: /* @__PURE__ */ k.jsx(zn, b({
          ownerState: Gt,
          "aria-invalid": Te.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: f,
          disabled: Te.disabled,
          id: R,
          onAnimationStart: Mn,
          name: C,
          placeholder: A,
          readOnly: N,
          required: Te.required,
          rows: B,
          value: Y,
          onKeyDown: F,
          onKeyUp: D,
          type: G
        }, Ye, !El(zn) && {
          as: dt,
          ownerState: b({}, Gt, Ye.ownerState)
        }, {
          ref: ct,
          className: H(vn.input, Ye.className, N && "MuiInputBase-readOnly"),
          onBlur: Le,
          onChange: In,
          onFocus: ur
        }))
      }), v, V ? V(b({}, Te, {
        startAdornment: z
      })) : null]
    }))]
  });
});
function X2(e) {
  return J("MuiInput", e);
}
const Xo = b({}, Io, Z("MuiInput", ["root", "underline", "input"]));
function Y2(e) {
  return J("MuiOutlinedInput", e);
}
const On = b({}, Io, Z("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function Z2(e) {
  return J("MuiFilledInput", e);
}
const cr = b({}, Io, Z("MuiFilledInput", ["root", "underline", "input"])), J2 = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), eR = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function tR(e) {
  return J("MuiAvatar", e);
}
Z("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const nR = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"], rR = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: r
  } = e;
  return ne({
    root: ["root", n, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, tR, t);
}, oR = j("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: e.typography.fontFamily,
  fontSize: e.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none"
}, t.variant === "rounded" && {
  borderRadius: (e.vars || e).shape.borderRadius
}, t.variant === "square" && {
  borderRadius: 0
}, t.colorDefault && b({
  color: (e.vars || e).palette.background.default
}, e.vars ? {
  backgroundColor: e.vars.palette.Avatar.defaultBg
} : {
  backgroundColor: e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[600]
}))), iR = j("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (e, t) => t.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image. The property isn't supported by IE11.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
}), sR = j(eR, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function lR({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: r
}) {
  const [o, i] = x.useState(!1);
  return x.useEffect(() => {
    if (!n && !r)
      return;
    i(!1);
    let s = !0;
    const l = new Image();
    return l.onload = () => {
      s && i("loaded");
    }, l.onerror = () => {
      s && i("error");
    }, l.crossOrigin = e, l.referrerPolicy = t, l.src = n, r && (l.srcset = r), () => {
      s = !1;
    };
  }, [e, t, n, r]), o;
}
const $v = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: o,
    children: i,
    className: s,
    component: l = "div",
    imgProps: a,
    sizes: u,
    src: c,
    srcSet: f,
    variant: d = "circular"
  } = r, m = W(r, nR);
  let v = null;
  const y = lR(b({}, a, {
    src: c,
    srcSet: f
  })), R = c || f, h = R && y !== "error", p = b({}, r, {
    colorDefault: !h,
    component: l,
    variant: d
  }), g = rR(p);
  return h ? v = /* @__PURE__ */ k.jsx(iR, b({
    alt: o,
    src: c,
    srcSet: f,
    sizes: u,
    ownerState: p,
    className: g.img
  }, a)) : i != null ? v = i : R && o ? v = o[0] : v = /* @__PURE__ */ k.jsx(sR, {
    ownerState: p,
    className: g.fallback
  }), /* @__PURE__ */ k.jsx(oR, b({
    as: l,
    ownerState: p,
    className: H(g.root, s),
    ref: n
  }, m, {
    children: v
  }));
}), aR = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], uR = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Pv = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = No(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    easing: a,
    in: u,
    onEnter: c,
    onEntered: f,
    onEntering: d,
    onExit: m,
    onExited: v,
    onExiting: y,
    style: R,
    timeout: h = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: p = on
  } = t, g = W(t, aR), w = x.useRef(null), S = Ue(w, l.ref, n), E = (A) => (N) => {
    if (A) {
      const V = w.current;
      N === void 0 ? A(V) : A(V, N);
    }
  }, C = E(d), $ = E((A, N) => {
    yf(A);
    const V = To({
      style: R,
      timeout: h,
      easing: a
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = r.transitions.create("opacity", V), A.style.transition = r.transitions.create("opacity", V), c && c(A, N);
  }), _ = E(f), P = E(y), L = E((A) => {
    const N = To({
      style: R,
      timeout: h,
      easing: a
    }, {
      mode: "exit"
    });
    A.style.webkitTransition = r.transitions.create("opacity", N), A.style.transition = r.transitions.create("opacity", N), m && m(A);
  }), F = E(v), D = (A) => {
    i && i(w.current, A);
  };
  return /* @__PURE__ */ k.jsx(p, b({
    appear: s,
    in: u,
    nodeRef: w,
    onEnter: $,
    onEntered: _,
    onEntering: C,
    onExit: L,
    onExited: F,
    onExiting: P,
    addEndListener: D,
    timeout: h
  }, g, {
    children: (A, N) => /* @__PURE__ */ x.cloneElement(l, b({
      style: b({
        opacity: 0,
        visibility: A === "exited" && !u ? "hidden" : void 0
      }, uR[A], R, l.props.style),
      ref: S
    }, N))
  }));
});
function cR(e) {
  return J("MuiBackdrop", e);
}
Z("MuiBackdrop", ["root", "invisible"]);
const dR = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], fR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ne({
    root: ["root", n && "invisible"]
  }, cR, t);
}, pR = j("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => b({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Tv = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, o, i;
  const s = ee({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: a,
    component: u = "div",
    components: c = {},
    componentsProps: f = {},
    invisible: d = !1,
    open: m,
    slotProps: v = {},
    slots: y = {},
    TransitionComponent: R = Pv,
    transitionDuration: h
  } = s, p = W(s, dR), g = b({}, s, {
    component: u,
    invisible: d
  }), w = fR(g), S = (r = v.root) != null ? r : f.root;
  return /* @__PURE__ */ k.jsx(R, b({
    in: m,
    timeout: h
  }, p, {
    children: /* @__PURE__ */ k.jsx(pR, b({
      "aria-hidden": !0
    }, S, {
      as: (o = (i = y.root) != null ? i : c.Root) != null ? o : u,
      className: H(w.root, a, S == null ? void 0 : S.className),
      ownerState: b({}, g, S == null ? void 0 : S.ownerState),
      classes: w,
      ref: n,
      children: l
    }))
  }));
});
function hR(e) {
  return J("MuiBadge", e);
}
const Nn = Z("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), mR = ["anchorOrigin", "className", "classes", "component", "components", "componentsProps", "children", "overlap", "color", "invisible", "max", "badgeContent", "slots", "slotProps", "showZero", "variant"], Ru = 10, Eu = 4, gR = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: r,
    overlap: o,
    variant: i,
    classes: s = {}
  } = e, l = {
    root: ["root"],
    badge: ["badge", i, r && "invisible", `anchorOrigin${M(n.vertical)}${M(n.horizontal)}`, `anchorOrigin${M(n.vertical)}${M(n.horizontal)}${M(o)}`, `overlap${M(o)}`, t !== "default" && `color${M(t)}`]
  };
  return ne(l, hR, s);
}, vR = j("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), yR = j("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${M(n.anchorOrigin.vertical)}${M(n.anchorOrigin.horizontal)}${M(n.overlap)}`], n.color !== "default" && t[`color${M(n.color)}`], n.invisible && t.invisible];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(12),
  minWidth: Ru * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: Ru * 2,
  borderRadius: Ru,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.enteringScreen
  })
}, t.color !== "default" && {
  backgroundColor: (e.vars || e).palette[t.color].main,
  color: (e.vars || e).palette[t.color].contrastText
}, t.variant === "dot" && {
  borderRadius: Eu,
  height: Eu * 2,
  minWidth: Eu * 2,
  padding: 0
}, t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular" && {
  top: 0,
  right: 0,
  transform: "scale(1) translate(50%, -50%)",
  transformOrigin: "100% 0%",
  [`&.${Nn.invisible}`]: {
    transform: "scale(0) translate(50%, -50%)"
  }
}, t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular" && {
  bottom: 0,
  right: 0,
  transform: "scale(1) translate(50%, 50%)",
  transformOrigin: "100% 100%",
  [`&.${Nn.invisible}`]: {
    transform: "scale(0) translate(50%, 50%)"
  }
}, t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular" && {
  top: 0,
  left: 0,
  transform: "scale(1) translate(-50%, -50%)",
  transformOrigin: "0% 0%",
  [`&.${Nn.invisible}`]: {
    transform: "scale(0) translate(-50%, -50%)"
  }
}, t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular" && {
  bottom: 0,
  left: 0,
  transform: "scale(1) translate(-50%, 50%)",
  transformOrigin: "0% 100%",
  [`&.${Nn.invisible}`]: {
    transform: "scale(0) translate(-50%, 50%)"
  }
}, t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular" && {
  top: "14%",
  right: "14%",
  transform: "scale(1) translate(50%, -50%)",
  transformOrigin: "100% 0%",
  [`&.${Nn.invisible}`]: {
    transform: "scale(0) translate(50%, -50%)"
  }
}, t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular" && {
  bottom: "14%",
  right: "14%",
  transform: "scale(1) translate(50%, 50%)",
  transformOrigin: "100% 100%",
  [`&.${Nn.invisible}`]: {
    transform: "scale(0) translate(50%, 50%)"
  }
}, t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular" && {
  top: "14%",
  left: "14%",
  transform: "scale(1) translate(-50%, -50%)",
  transformOrigin: "0% 0%",
  [`&.${Nn.invisible}`]: {
    transform: "scale(0) translate(-50%, -50%)"
  }
}, t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular" && {
  bottom: "14%",
  left: "14%",
  transform: "scale(1) translate(-50%, 50%)",
  transformOrigin: "0% 100%",
  [`&.${Nn.invisible}`]: {
    transform: "scale(0) translate(-50%, 50%)"
  }
}, t.invisible && {
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.leavingScreen
  })
})), xR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, o, i, s, l, a;
  const u = ee({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: c = {
      vertical: "top",
      horizontal: "right"
    },
    className: f,
    component: d,
    components: m = {},
    componentsProps: v = {},
    children: y,
    overlap: R = "rectangular",
    color: h = "default",
    invisible: p = !1,
    max: g = 99,
    badgeContent: w,
    slots: S,
    slotProps: E,
    showZero: C = !1,
    variant: $ = "standard"
  } = u, _ = W(u, mR), {
    badgeContent: P,
    invisible: L,
    max: F,
    displayValue: D
  } = nS({
    max: g,
    invisible: p,
    badgeContent: w,
    showZero: C
  }), A = kv({
    anchorOrigin: c,
    color: h,
    overlap: R,
    variant: $,
    badgeContent: w
  }), N = L || P == null && $ !== "dot", {
    color: V = h,
    overlap: B = R,
    anchorOrigin: T = c,
    variant: I = $
  } = N ? A : u, z = I !== "dot" ? D : void 0, G = b({}, u, {
    badgeContent: P,
    invisible: N,
    max: F,
    displayValue: z,
    showZero: C,
    anchorOrigin: T,
    color: V,
    overlap: B,
    variant: I
  }), K = gR(G), ce = (r = (o = S == null ? void 0 : S.root) != null ? o : m.Root) != null ? r : vR, Y = (i = (s = S == null ? void 0 : S.badge) != null ? s : m.Badge) != null ? i : yR, X = (l = E == null ? void 0 : E.root) != null ? l : v.root, re = (a = E == null ? void 0 : E.badge) != null ? a : v.badge, Pe = $l({
    elementType: ce,
    externalSlotProps: X,
    externalForwardedProps: _,
    additionalProps: {
      ref: n,
      as: d
    },
    ownerState: G,
    className: H(X == null ? void 0 : X.className, K.root, f)
  }), ct = $l({
    elementType: Y,
    externalSlotProps: re,
    ownerState: G,
    className: H(K.badge, re == null ? void 0 : re.className)
  });
  return /* @__PURE__ */ k.jsxs(ce, b({}, Pe, {
    children: [y, /* @__PURE__ */ k.jsx(Y, b({}, ct, {
      children: z
    }))]
  }));
}), bR = wv(), Vn = Lw({
  themeId: is,
  defaultTheme: bR,
  defaultClassName: "MuiBox-root",
  generateClassName: af.generate
});
function kR(e) {
  return J("MuiButton", e);
}
const _s = Z("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), wR = /* @__PURE__ */ x.createContext({}), CR = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], SR = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, `${i}${M(t)}`, `size${M(o)}`, `${i}Size${M(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${M(o)}`],
    endIcon: ["endIcon", `iconSize${M(o)}`]
  }, a = ne(l, kR, s);
  return b({}, s, a);
}, _v = (e) => b({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), RR = j(_o, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${M(n.color)}`], t[`size${M(n.size)}`], t[`${n.variant}Size${M(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return b({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": b({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : be(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : be(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : be(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": b({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${_s.focusVisible}`]: b({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${_s.disabled}`]: b({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${be(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${_s.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${_s.disabled}`]: {
    boxShadow: "none"
  }
}), ER = j("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${M(n.size)}`]];
  }
})(({
  ownerState: e
}) => b({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, _v(e))), $R = j("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${M(n.size)}`]];
  }
})(({
  ownerState: e
}) => b({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, _v(e))), Kc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = x.useContext(wR), o = df(r, t), i = ee({
    props: o,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: a = "button",
    className: u,
    disabled: c = !1,
    disableElevation: f = !1,
    disableFocusRipple: d = !1,
    endIcon: m,
    focusVisibleClassName: v,
    fullWidth: y = !1,
    size: R = "medium",
    startIcon: h,
    type: p,
    variant: g = "text"
  } = i, w = W(i, CR), S = b({}, i, {
    color: l,
    component: a,
    disabled: c,
    disableElevation: f,
    disableFocusRipple: d,
    fullWidth: y,
    size: R,
    type: p,
    variant: g
  }), E = SR(S), C = h && /* @__PURE__ */ k.jsx(ER, {
    className: E.startIcon,
    ownerState: S,
    children: h
  }), $ = m && /* @__PURE__ */ k.jsx($R, {
    className: E.endIcon,
    ownerState: S,
    children: m
  });
  return /* @__PURE__ */ k.jsxs(RR, b({
    ownerState: S,
    className: H(r.className, E.root, u),
    component: a,
    disabled: c,
    focusRipple: !d,
    focusVisibleClassName: H(E.focusVisible, v),
    ref: n,
    type: p
  }, w, {
    classes: E,
    children: [C, s, $]
  }));
});
function PR(e) {
  return J("MuiCircularProgress", e);
}
Z("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const TR = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let Ba = (e) => e, Yh, Zh, Jh, em;
const Ln = 44, _R = Nr(Yh || (Yh = Ba`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), IR = Nr(Zh || (Zh = Ba`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), MR = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${M(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${M(n)}`, o && "circleDisableShrink"]
  };
  return ne(i, PR, t);
}, zR = j("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${M(n.color)}`]];
  }
})(({
  ownerState: e,
  theme: t
}) => b({
  display: "inline-block"
}, e.variant === "determinate" && {
  transition: t.transitions.create("transform")
}, e.color !== "inherit" && {
  color: (t.vars || t).palette[e.color].main
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && qi(Jh || (Jh = Ba`
      animation: ${0} 1.4s linear infinite;
    `), _R)), AR = j("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), OR = j("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${M(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(({
  ownerState: e,
  theme: t
}) => b({
  stroke: "currentColor"
}, e.variant === "determinate" && {
  transition: t.transitions.create("stroke-dashoffset")
}, e.variant === "indeterminate" && {
  // Some default value that looks fine waiting for the animation to kicks in.
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
  // Add the unit to fix a Edge 16 and below bug.
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && !e.disableShrink && qi(em || (em = Ba`
      animation: ${0} 1.4s ease-in-out infinite;
    `), IR)), NR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: l = 40,
    style: a,
    thickness: u = 3.6,
    value: c = 0,
    variant: f = "indeterminate"
  } = r, d = W(r, TR), m = b({}, r, {
    color: i,
    disableShrink: s,
    size: l,
    thickness: u,
    value: c,
    variant: f
  }), v = MR(m), y = {}, R = {}, h = {};
  if (f === "determinate") {
    const p = 2 * Math.PI * ((Ln - u) / 2);
    y.strokeDasharray = p.toFixed(3), h["aria-valuenow"] = Math.round(c), y.strokeDashoffset = `${((100 - c) / 100 * p).toFixed(3)}px`, R.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ k.jsx(zR, b({
    className: H(v.root, o),
    style: b({
      width: l,
      height: l
    }, R, a),
    ownerState: m,
    ref: n,
    role: "progressbar"
  }, h, d, {
    children: /* @__PURE__ */ k.jsx(AR, {
      className: v.svg,
      ownerState: m,
      viewBox: `${Ln / 2} ${Ln / 2} ${Ln} ${Ln}`,
      children: /* @__PURE__ */ k.jsx(OR, {
        className: v.circle,
        style: y,
        ownerState: m,
        cx: Ln,
        cy: Ln,
        r: (Ln - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  }));
}), LR = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"], jR = j("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), FR = j(Tv, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), kf = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, o, i, s, l, a;
  const u = ee({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: c = FR,
    BackdropProps: f,
    classes: d,
    className: m,
    closeAfterTransition: v = !1,
    children: y,
    container: R,
    component: h,
    components: p = {},
    componentsProps: g = {},
    disableAutoFocus: w = !1,
    disableEnforceFocus: S = !1,
    disableEscapeKeyDown: E = !1,
    disablePortal: C = !1,
    disableRestoreFocus: $ = !1,
    disableScrollLock: _ = !1,
    hideBackdrop: P = !1,
    keepMounted: L = !1,
    onBackdropClick: F,
    onClose: D,
    open: A,
    slotProps: N,
    slots: V,
    // eslint-disable-next-line react/prop-types
    theme: B
  } = u, T = W(u, LR), [I, z] = x.useState(!0), G = {
    container: R,
    closeAfterTransition: v,
    disableAutoFocus: w,
    disableEnforceFocus: S,
    disableEscapeKeyDown: E,
    disablePortal: C,
    disableRestoreFocus: $,
    disableScrollLock: _,
    hideBackdrop: P,
    keepMounted: L,
    onBackdropClick: F,
    onClose: D,
    open: A
  }, K = b({}, u, G, {
    exited: I
  }), ce = (r = (o = V == null ? void 0 : V.root) != null ? o : p.Root) != null ? r : jR, Y = (i = (s = V == null ? void 0 : V.backdrop) != null ? s : p.Backdrop) != null ? i : c, X = (l = N == null ? void 0 : N.root) != null ? l : g.root, re = (a = N == null ? void 0 : N.backdrop) != null ? a : g.backdrop;
  return /* @__PURE__ */ k.jsx(CS, b({
    slots: {
      root: ce,
      backdrop: Y
    },
    slotProps: {
      root: () => b({}, Bc(X, K), !El(ce) && {
        as: h,
        theme: B
      }, {
        className: H(m, X == null ? void 0 : X.className, d == null ? void 0 : d.root, !K.open && K.exited && (d == null ? void 0 : d.hidden))
      }),
      backdrop: () => b({}, f, Bc(re, K), {
        className: H(re == null ? void 0 : re.className, d == null ? void 0 : d.backdrop)
      })
    },
    onTransitionEnter: () => z(!1),
    onTransitionExited: () => z(!0),
    ref: n
  }, T, G, {
    children: y
  }));
});
function DR(e) {
  return J("MuiDialog", e);
}
const $u = Z("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Iv = /* @__PURE__ */ x.createContext({}), BR = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], UR = j(Tv, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), WR = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    container: ["container", `scroll${M(n)}`],
    paper: ["paper", `paperScroll${M(n)}`, `paperWidth${M(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return ne(s, DR, t);
}, HR = j(kf, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), VR = j("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${M(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => b({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&:after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), KR = j(ar, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${M(n.scroll)}`], t[`paperWidth${M(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
  [`&.${$u.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${$u.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${$u.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), GR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiDialog"
  }), o = No(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    BackdropComponent: a,
    BackdropProps: u,
    children: c,
    className: f,
    disableEscapeKeyDown: d = !1,
    fullScreen: m = !1,
    fullWidth: v = !1,
    maxWidth: y = "sm",
    onBackdropClick: R,
    onClose: h,
    open: p,
    PaperComponent: g = ar,
    PaperProps: w = {},
    scroll: S = "paper",
    TransitionComponent: E = Pv,
    transitionDuration: C = i,
    TransitionProps: $
  } = r, _ = W(r, BR), P = b({}, r, {
    disableEscapeKeyDown: d,
    fullScreen: m,
    fullWidth: v,
    maxWidth: y,
    scroll: S
  }), L = WR(P), F = x.useRef(), D = (B) => {
    F.current = B.target === B.currentTarget;
  }, A = (B) => {
    F.current && (F.current = null, R && R(B), h && h(B, "backdropClick"));
  }, N = pf(l), V = x.useMemo(() => ({
    titleId: N
  }), [N]);
  return /* @__PURE__ */ k.jsx(HR, b({
    className: H(L.root, f),
    closeAfterTransition: !0,
    components: {
      Backdrop: UR
    },
    componentsProps: {
      backdrop: b({
        transitionDuration: C,
        as: a
      }, u)
    },
    disableEscapeKeyDown: d,
    onClose: h,
    open: p,
    ref: n,
    onClick: A,
    ownerState: P
  }, _, {
    children: /* @__PURE__ */ k.jsx(E, b({
      appear: !0,
      in: p,
      timeout: C,
      role: "presentation"
    }, $, {
      children: /* @__PURE__ */ k.jsx(VR, {
        className: H(L.container),
        onMouseDown: D,
        ownerState: P,
        children: /* @__PURE__ */ k.jsx(KR, b({
          as: g,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": N
        }, w, {
          className: H(L.paper, w.className),
          ownerState: P,
          children: /* @__PURE__ */ k.jsx(Iv.Provider, {
            value: V,
            children: c
          })
        }))
      })
    }))
  }));
});
function qR(e) {
  return J("MuiDialogActions", e);
}
Z("MuiDialogActions", ["root", "spacing"]);
const QR = ["className", "disableSpacing"], XR = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ne({
    root: ["root", !n && "spacing"]
  }, qR, t);
}, YR = j("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => b({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(:first-of-type)": {
    marginLeft: 8
  }
})), ZR = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1
  } = r, s = W(r, QR), l = b({}, r, {
    disableSpacing: i
  }), a = XR(l);
  return /* @__PURE__ */ k.jsx(YR, b({
    className: H(a.root, o),
    ownerState: l,
    ref: n
  }, s));
});
function JR(e) {
  return J("MuiDialogContent", e);
}
Z("MuiDialogContent", ["root", "dividers"]);
function eE(e) {
  return J("MuiDialogTitle", e);
}
const tE = Z("MuiDialogTitle", ["root"]), nE = ["className", "dividers"], rE = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return ne({
    root: ["root", n && "dividers"]
  }, JR, t);
}, oE = j("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, t.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${tE.root} + &`]: {
    paddingTop: 0
  }
})), iE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1
  } = r, s = W(r, nE), l = b({}, r, {
    dividers: i
  }), a = rE(l);
  return /* @__PURE__ */ k.jsx(oE, b({
    className: H(a.root, o),
    ownerState: l,
    ref: n
  }, s));
}), sE = ["className", "id"], lE = (e) => {
  const {
    classes: t
  } = e;
  return ne({
    root: ["root"]
  }, eE, t);
}, aE = j(ss, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), uE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i
  } = r, s = W(r, sE), l = r, a = lE(l), {
    titleId: u = i
  } = x.useContext(Iv);
  return /* @__PURE__ */ k.jsx(aE, b({
    component: "h2",
    className: H(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u
  }, s));
}), cE = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function dE(e, t, n) {
  const r = t.getBoundingClientRect(), o = n && n.getBoundingClientRect(), i = gn(t);
  let s;
  if (t.fakeTransform)
    s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let l = 0, a = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    l = parseInt(u[4], 10), a = parseInt(u[5], 10);
  }
  return e === "left" ? o ? `translateX(${o.right + l - r.left}px)` : `translateX(${i.innerWidth + l - r.left}px)` : e === "right" ? o ? `translateX(-${r.right - o.left - l}px)` : `translateX(-${r.left + r.width - l}px)` : e === "up" ? o ? `translateY(${o.bottom + a - r.top}px)` : `translateY(${i.innerHeight + a - r.top}px)` : o ? `translateY(-${r.top - o.top + r.height - a}px)` : `translateY(-${r.top + r.height - a}px)`;
}
function fE(e) {
  return typeof e == "function" ? e() : e;
}
function Is(e, t, n) {
  const r = fE(n), o = dE(e, t, r);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const pE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = No(), o = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: l = !0,
    children: a,
    container: u,
    direction: c = "down",
    easing: f = o,
    in: d,
    onEnter: m,
    onEntered: v,
    onEntering: y,
    onExit: R,
    onExited: h,
    onExiting: p,
    style: g,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = on
  } = t, E = W(t, cE), C = x.useRef(null), $ = Ue(a.ref, C, n), _ = (T) => (I) => {
    T && (I === void 0 ? T(C.current) : T(C.current, I));
  }, P = _((T, I) => {
    Is(c, T, u), yf(T), m && m(T, I);
  }), L = _((T, I) => {
    const z = To({
      timeout: w,
      style: g,
      easing: f
    }, {
      mode: "enter"
    });
    T.style.webkitTransition = r.transitions.create("-webkit-transform", b({}, z)), T.style.transition = r.transitions.create("transform", b({}, z)), T.style.webkitTransform = "none", T.style.transform = "none", y && y(T, I);
  }), F = _(v), D = _(p), A = _((T) => {
    const I = To({
      timeout: w,
      style: g,
      easing: f
    }, {
      mode: "exit"
    });
    T.style.webkitTransition = r.transitions.create("-webkit-transform", I), T.style.transition = r.transitions.create("transform", I), Is(c, T, u), R && R(T);
  }), N = _((T) => {
    T.style.webkitTransition = "", T.style.transition = "", h && h(T);
  }), V = (T) => {
    s && s(C.current, T);
  }, B = x.useCallback(() => {
    C.current && Is(c, C.current, u);
  }, [c, u]);
  return x.useEffect(() => {
    if (d || c === "down" || c === "right")
      return;
    const T = za(() => {
      C.current && Is(c, C.current, u);
    }), I = gn(C.current);
    return I.addEventListener("resize", T), () => {
      T.clear(), I.removeEventListener("resize", T);
    };
  }, [c, d, u]), x.useEffect(() => {
    d || B();
  }, [d, B]), /* @__PURE__ */ k.jsx(S, b({
    nodeRef: C,
    onEnter: P,
    onEntered: F,
    onEntering: L,
    onExit: A,
    onExited: N,
    onExiting: D,
    addEndListener: V,
    appear: l,
    in: d,
    timeout: w
  }, E, {
    children: (T, I) => /* @__PURE__ */ x.cloneElement(a, b({
      ref: $,
      style: b({
        visibility: T === "exited" && !d ? "hidden" : void 0
      }, g, a.props.style)
    }, I))
  }));
});
function hE(e) {
  return J("MuiDrawer", e);
}
Z("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const mE = ["BackdropProps"], gE = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], Mv = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, vE = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: r
  } = e, o = {
    root: ["root"],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${M(n)}`, r !== "temporary" && `paperAnchorDocked${M(n)}`]
  };
  return ne(o, hE, t);
}, yE = j(kf, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Mv
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), tm = j("div", {
  shouldForwardProp: Vt,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Mv
})({
  flex: "0 0 auto"
}), xE = j(ar, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${M(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${M(n.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, t.anchor === "left" && {
  left: 0
}, t.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "right" && {
  right: 0
}, t.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "left" && t.variant !== "temporary" && {
  borderRight: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "top" && t.variant !== "temporary" && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "right" && t.variant !== "temporary" && {
  borderLeft: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "bottom" && t.variant !== "temporary" && {
  borderTop: `1px solid ${(e.vars || e).palette.divider}`
})), zv = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function bE(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function kE(e, t) {
  return e.direction === "rtl" && bE(t) ? zv[t] : t;
}
const wE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiDrawer"
  }), o = No(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: s = "left",
    BackdropProps: l,
    children: a,
    className: u,
    elevation: c = 16,
    hideBackdrop: f = !1,
    ModalProps: {
      BackdropProps: d
    } = {},
    onClose: m,
    open: v = !1,
    PaperProps: y = {},
    SlideProps: R,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: h = pE,
    transitionDuration: p = i,
    variant: g = "temporary"
  } = r, w = W(r.ModalProps, mE), S = W(r, gE), E = x.useRef(!1);
  x.useEffect(() => {
    E.current = !0;
  }, []);
  const C = kE(o, s), _ = b({}, r, {
    anchor: s,
    elevation: c,
    open: v,
    variant: g
  }, S), P = vE(_), L = /* @__PURE__ */ k.jsx(xE, b({
    elevation: g === "temporary" ? c : 0,
    square: !0
  }, y, {
    className: H(P.paper, y.className),
    ownerState: _,
    children: a
  }));
  if (g === "permanent")
    return /* @__PURE__ */ k.jsx(tm, b({
      className: H(P.root, P.docked, u),
      ownerState: _,
      ref: n
    }, S, {
      children: L
    }));
  const F = /* @__PURE__ */ k.jsx(h, b({
    in: v,
    direction: zv[C],
    timeout: p,
    appear: E.current
  }, R, {
    children: L
  }));
  return g === "persistent" ? /* @__PURE__ */ k.jsx(tm, b({
    className: H(P.root, P.docked, u),
    ownerState: _,
    ref: n
  }, S, {
    children: F
  })) : /* @__PURE__ */ k.jsx(yE, b({
    BackdropProps: b({}, l, d, {
      transitionDuration: p
    }),
    className: H(P.root, P.modal, u),
    open: v,
    ownerState: _,
    onClose: m,
    hideBackdrop: f,
    ref: n
  }, S, w, {
    children: F
  }));
});
function CE(e) {
  return J("MuiFab", e);
}
const nm = Z("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), SE = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"], RE = (e) => {
  const {
    color: t,
    variant: n,
    classes: r,
    size: o
  } = e, i = {
    root: ["root", n, `size${M(o)}`, t === "inherit" ? "colorInherit" : t]
  }, s = ne(i, CE, r);
  return b({}, r, s);
}, EE = j(_o, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${M(n.size)}`], n.color === "inherit" && t.colorInherit, t[M(n.size)], t[n.color]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  return b({}, e.typography.button, {
    minHeight: 36,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: e.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (e.vars || e).zIndex.fab,
    boxShadow: (e.vars || e).shadows[6],
    "&:active": {
      boxShadow: (e.vars || e).shadows[12]
    },
    color: e.vars ? e.vars.palette.text.primary : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    "&:hover": {
      backgroundColor: (e.vars || e).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${nm.focusVisible}`]: {
      boxShadow: (e.vars || e).shadows[6]
    }
  }, t.size === "small" && {
    width: 40,
    height: 40
  }, t.size === "medium" && {
    width: 48,
    height: 48
  }, t.variant === "extended" && {
    borderRadius: 48 / 2,
    padding: "0 16px",
    width: "auto",
    minHeight: "auto",
    minWidth: 48,
    height: 48
  }, t.variant === "extended" && t.size === "small" && {
    width: "auto",
    padding: "0 8px",
    borderRadius: 34 / 2,
    minWidth: 34,
    height: 34
  }, t.variant === "extended" && t.size === "medium" && {
    width: "auto",
    padding: "0 16px",
    borderRadius: 40 / 2,
    minWidth: 40,
    height: 40
  }, t.color === "inherit" && {
    color: "inherit"
  });
}, ({
  theme: e,
  ownerState: t
}) => b({}, t.color !== "inherit" && t.color !== "default" && (e.vars || e).palette[t.color] != null && {
  color: (e.vars || e).palette[t.color].contrastText,
  backgroundColor: (e.vars || e).palette[t.color].main,
  "&:hover": {
    backgroundColor: (e.vars || e).palette[t.color].dark,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: (e.vars || e).palette[t.color].main
    }
  }
}), ({
  theme: e
}) => ({
  [`&.${nm.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
})), go = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiFab"
  }), {
    children: o,
    className: i,
    color: s = "default",
    component: l = "button",
    disabled: a = !1,
    disableFocusRipple: u = !1,
    focusVisibleClassName: c,
    size: f = "large",
    variant: d = "circular"
  } = r, m = W(r, SE), v = b({}, r, {
    color: s,
    component: l,
    disabled: a,
    disableFocusRipple: u,
    size: f,
    variant: d
  }), y = RE(v);
  return /* @__PURE__ */ k.jsx(EE, b({
    className: H(y.root, i),
    component: l,
    disabled: a,
    focusRipple: !u,
    focusVisibleClassName: H(y.focusVisible, c),
    ownerState: v,
    ref: n
  }, m, {
    classes: y,
    children: o
  }));
}), $E = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], PE = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ne({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Z2, t);
  return b({}, t, o);
}, TE = j(Fa, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...La(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return b({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${cr.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${cr.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${cr.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${cr.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${cr.disabled}, .${cr.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${cr.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && b({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
}), _E = j(Da, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ja
})(({
  theme: e,
  ownerState: t
}) => b({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
})), wf = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, o, i, s;
  const l = ee({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: a = {},
    componentsProps: u,
    fullWidth: c = !1,
    // declare here to prevent spreading to DOM
    inputComponent: f = "input",
    multiline: d = !1,
    slotProps: m,
    slots: v = {},
    type: y = "text"
  } = l, R = W(l, $E), h = b({}, l, {
    fullWidth: c,
    inputComponent: f,
    multiline: d,
    type: y
  }), p = PE(l), g = {
    root: {
      ownerState: h
    },
    input: {
      ownerState: h
    }
  }, w = m ?? u ? vt(m ?? u, g) : g, S = (r = (o = v.root) != null ? o : a.Root) != null ? r : TE, E = (i = (s = v.input) != null ? s : a.Input) != null ? i : _E;
  return /* @__PURE__ */ k.jsx(bf, b({
    slots: {
      root: S,
      input: E
    },
    componentsProps: w,
    fullWidth: c,
    inputComponent: f,
    multiline: d,
    ref: n,
    type: y
  }, R, {
    classes: p
  }));
});
wf.muiName = "Input";
function IE(e) {
  return J("MuiFormControl", e);
}
Z("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const ME = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], zE = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${M(n)}`, r && "fullWidth"]
  };
  return ne(o, IE, t);
}, AE = j("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => b({}, t.root, t[`margin${M(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => b({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), OE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: a = !1,
    error: u = !1,
    focused: c,
    fullWidth: f = !1,
    hiddenLabel: d = !1,
    margin: m = "none",
    required: v = !1,
    size: y = "medium",
    variant: R = "outlined"
  } = r, h = W(r, ME), p = b({}, r, {
    color: s,
    component: l,
    disabled: a,
    error: u,
    fullWidth: f,
    hiddenLabel: d,
    margin: m,
    required: v,
    size: y,
    variant: R
  }), g = zE(p), [w, S] = x.useState(() => {
    let D = !1;
    return o && x.Children.forEach(o, (A) => {
      if (!Qs(A, ["Input", "Select"]))
        return;
      const N = Qs(A, ["Select"]) ? A.props.input : A;
      N && V2(N.props) && (D = !0);
    }), D;
  }), [E, C] = x.useState(() => {
    let D = !1;
    return o && x.Children.forEach(o, (A) => {
      Qs(A, ["Input", "Select"]) && (Tl(A.props, !0) || Tl(A.props.inputProps, !0)) && (D = !0);
    }), D;
  }), [$, _] = x.useState(!1);
  a && $ && _(!1);
  const P = c !== void 0 && !a ? c : $;
  let L;
  const F = x.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: S,
    color: s,
    disabled: a,
    error: u,
    filled: E,
    focused: P,
    fullWidth: f,
    hiddenLabel: d,
    size: y,
    onBlur: () => {
      _(!1);
    },
    onEmpty: () => {
      C(!1);
    },
    onFilled: () => {
      C(!0);
    },
    onFocus: () => {
      _(!0);
    },
    registerEffect: L,
    required: v,
    variant: R
  }), [w, s, a, u, E, P, f, d, L, v, y, R]);
  return /* @__PURE__ */ k.jsx(xf.Provider, {
    value: F,
    children: /* @__PURE__ */ k.jsx(AE, b({
      as: l,
      ownerState: p,
      className: H(g.root, i),
      ref: n
    }, h, {
      children: o
    }))
  });
});
function NE(e) {
  return J("MuiFormHelperText", e);
}
const rm = Z("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var om;
const LE = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], jE = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: i,
    filled: s,
    focused: l,
    required: a
  } = e, u = {
    root: ["root", o && "disabled", i && "error", r && `size${M(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return ne(u, NE, t);
}, FE = j("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${M(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${rm.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${rm.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), DE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: s = "p"
  } = r, l = W(r, LE), a = jo(), u = Lo({
    props: r,
    muiFormControl: a,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), c = b({}, r, {
    component: s,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = jE(c);
  return /* @__PURE__ */ k.jsx(FE, b({
    as: s,
    ownerState: c,
    className: H(f.root, i),
    ref: n
  }, l, {
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      om || (om = /* @__PURE__ */ k.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  }));
});
function BE(e) {
  return J("MuiFormLabel", e);
}
const ki = Z("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), UE = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], WE = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${M(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return ne(a, BE, t);
}, HE = j("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => b({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => b({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${ki.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${ki.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${ki.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), VE = j("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${ki.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), KE = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    component: s = "label"
  } = r, l = W(r, UE), a = jo(), u = Lo({
    props: r,
    muiFormControl: a,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), c = b({}, r, {
    color: u.color || "primary",
    component: s,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = WE(c);
  return /* @__PURE__ */ k.jsxs(HE, b({
    as: s,
    ownerState: c,
    className: H(f.root, i),
    ref: n
  }, l, {
    children: [o, u.required && /* @__PURE__ */ k.jsxs(VE, {
      ownerState: c,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
}), GE = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Gc(e) {
  return `scale(${e}, ${e ** 2})`;
}
const qE = {
  entering: {
    opacity: 1,
    transform: Gc(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Pu = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Av = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: l,
    onEnter: a,
    onEntered: u,
    onEntering: c,
    onExit: f,
    onExited: d,
    onExiting: m,
    style: v,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = on
  } = t, h = W(t, GE), p = x.useRef(), g = x.useRef(), w = No(), S = x.useRef(null), E = Ue(S, i.ref, n), C = (N) => (V) => {
    if (N) {
      const B = S.current;
      V === void 0 ? N(B) : N(B, V);
    }
  }, $ = C(c), _ = C((N, V) => {
    yf(N);
    const {
      duration: B,
      delay: T,
      easing: I
    } = To({
      style: v,
      timeout: y,
      easing: s
    }, {
      mode: "enter"
    });
    let z;
    y === "auto" ? (z = w.transitions.getAutoHeightDuration(N.clientHeight), g.current = z) : z = B, N.style.transition = [w.transitions.create("opacity", {
      duration: z,
      delay: T
    }), w.transitions.create("transform", {
      duration: Pu ? z : z * 0.666,
      delay: T,
      easing: I
    })].join(","), a && a(N, V);
  }), P = C(u), L = C(m), F = C((N) => {
    const {
      duration: V,
      delay: B,
      easing: T
    } = To({
      style: v,
      timeout: y,
      easing: s
    }, {
      mode: "exit"
    });
    let I;
    y === "auto" ? (I = w.transitions.getAutoHeightDuration(N.clientHeight), g.current = I) : I = V, N.style.transition = [w.transitions.create("opacity", {
      duration: I,
      delay: B
    }), w.transitions.create("transform", {
      duration: Pu ? I : I * 0.666,
      delay: Pu ? B : B || I * 0.333,
      easing: T
    })].join(","), N.style.opacity = 0, N.style.transform = Gc(0.75), f && f(N);
  }), D = C(d), A = (N) => {
    y === "auto" && (p.current = setTimeout(N, g.current || 0)), r && r(S.current, N);
  };
  return x.useEffect(() => () => {
    clearTimeout(p.current);
  }, []), /* @__PURE__ */ k.jsx(R, b({
    appear: o,
    in: l,
    nodeRef: S,
    onEnter: _,
    onEntered: P,
    onEntering: $,
    onExit: F,
    onExited: D,
    onExiting: L,
    addEndListener: A,
    timeout: y === "auto" ? null : y
  }, h, {
    children: (N, V) => /* @__PURE__ */ x.cloneElement(i, b({
      style: b({
        opacity: 0,
        transform: Gc(0.75),
        visibility: N === "exited" && !l ? "hidden" : void 0
      }, qE[N], v, i.props.style),
      ref: E
    }, V))
  }));
});
Av.muiSupportAuto = !0;
const QE = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], XE = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ne({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, X2, t);
  return b({}, t, o);
}, YE = j(Fa, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...La(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), b({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Xo.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Xo.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Xo.disabled}, .${Xo.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${Xo.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), ZE = j(Da, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ja
})({}), Cf = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, o, i, s;
  const l = ee({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: a,
    components: u = {},
    componentsProps: c,
    fullWidth: f = !1,
    inputComponent: d = "input",
    multiline: m = !1,
    slotProps: v,
    slots: y = {},
    type: R = "text"
  } = l, h = W(l, QE), p = XE(l), w = {
    root: {
      ownerState: {
        disableUnderline: a
      }
    }
  }, S = v ?? c ? vt(v ?? c, w) : w, E = (r = (o = y.root) != null ? o : u.Root) != null ? r : YE, C = (i = (s = y.input) != null ? s : u.Input) != null ? i : ZE;
  return /* @__PURE__ */ k.jsx(bf, b({
    slots: {
      root: E,
      input: C
    },
    slotProps: S,
    fullWidth: f,
    inputComponent: d,
    multiline: m,
    ref: n,
    type: R
  }, h, {
    classes: p
  }));
});
Cf.muiName = "Input";
function JE(e) {
  return J("MuiInputLabel", e);
}
Z("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const e$ = ["disableAnimation", "margin", "shrink", "variant", "className"], t$ = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, u = ne({
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r === "small" && "sizeSmall", s],
    asterisk: [l && "asterisk"]
  }, JE, t);
  return b({}, t, u);
}, n$ = j(KE, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ki.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && b({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && b({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && b({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), r$ = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    shrink: i,
    className: s
  } = r, l = W(r, e$), a = jo();
  let u = i;
  typeof u > "u" && a && (u = a.filled || a.focused || a.adornedStart);
  const c = Lo({
    props: r,
    muiFormControl: a,
    states: ["size", "variant", "required"]
  }), f = b({}, r, {
    disableAnimation: o,
    formControl: a,
    shrink: u,
    size: c.size,
    variant: c.variant,
    required: c.required
  }), d = t$(f);
  return /* @__PURE__ */ k.jsx(n$, b({
    "data-shrink": u,
    ownerState: f,
    ref: n,
    className: H(d.root, s)
  }, l, {
    classes: d
  }));
});
function o$(e) {
  return J("MuiLink", e);
}
const i$ = Z("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), Ov = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, s$ = (e) => Ov[e] || e, l$ = ({
  theme: e,
  ownerState: t
}) => {
  const n = s$(t.color), r = Po(e, `palette.${n}`, !1) || t.color, o = Po(e, `palette.${n}Channel`);
  return "vars" in e && o ? `rgba(${o} / 0.4)` : be(r, 0.4);
}, a$ = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"], u$ = (e) => {
  const {
    classes: t,
    component: n,
    focusVisible: r,
    underline: o
  } = e, i = {
    root: ["root", `underline${M(o)}`, n === "button" && "button", r && "focusVisible"]
  };
  return ne(i, o$, t);
}, c$ = j(ss, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`underline${M(n.underline)}`], n.component === "button" && t.button];
  }
})(({
  theme: e,
  ownerState: t
}) => b({}, t.underline === "none" && {
  textDecoration: "none"
}, t.underline === "hover" && {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
}, t.underline === "always" && b({
  textDecoration: "underline"
}, t.color !== "inherit" && {
  textDecorationColor: l$({
    theme: e,
    ownerState: t
  })
}, {
  "&:hover": {
    textDecorationColor: "inherit"
  }
}), t.component === "button" && {
  position: "relative",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${i$.focusVisible}`]: {
    outline: "auto"
  }
})), d$ = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiLink"
  }), {
    className: o,
    color: i = "primary",
    component: s = "a",
    onBlur: l,
    onFocus: a,
    TypographyClasses: u,
    underline: c = "always",
    variant: f = "inherit",
    sx: d
  } = r, m = W(r, a$), {
    isFocusVisibleRef: v,
    onBlur: y,
    onFocus: R,
    ref: h
  } = mf(), [p, g] = x.useState(!1), w = Ue(n, h), S = (_) => {
    y(_), v.current === !1 && g(!1), l && l(_);
  }, E = (_) => {
    R(_), v.current === !0 && g(!0), a && a(_);
  }, C = b({}, r, {
    color: i,
    component: s,
    focusVisible: p,
    underline: c,
    variant: f
  }), $ = u$(C);
  return /* @__PURE__ */ k.jsx(c$, b({
    color: i,
    className: H($.root, o),
    classes: u,
    component: s,
    onBlur: S,
    onFocus: E,
    ref: w,
    ownerState: C,
    variant: f,
    sx: [...Object.keys(Ov).includes(i) ? [] : [{
      color: i
    }], ...Array.isArray(d) ? d : [d]]
  }, m));
}), qc = /* @__PURE__ */ x.createContext({});
function f$(e) {
  return J("MuiList", e);
}
Z("MuiList", ["root", "padding", "dense", "subheader"]);
const p$ = ["children", "className", "component", "dense", "disablePadding", "subheader"], h$ = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ne({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, f$, t);
}, m$ = j("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => b({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), g$ = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: l = !1,
    disablePadding: a = !1,
    subheader: u
  } = r, c = W(r, p$), f = x.useMemo(() => ({
    dense: l
  }), [l]), d = b({}, r, {
    component: s,
    dense: l,
    disablePadding: a
  }), m = h$(d);
  return /* @__PURE__ */ k.jsx(qc.Provider, {
    value: f,
    children: /* @__PURE__ */ k.jsxs(m$, b({
      as: s,
      className: H(m.root, i),
      ref: n,
      ownerState: d
    }, c, {
      children: [u, o]
    }))
  });
}), im = Z("MuiListItemIcon", ["root", "alignItemsFlexStart"]), sm = Z("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), v$ = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Tu(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function lm(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Nv(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function Yo(e, t, n, r, o, i) {
  let s = !1, l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const a = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Nv(l, i) || a)
      l = o(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const y$ = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: l,
    disabledItemsFocusable: a = !1,
    disableListWrap: u = !1,
    onKeyDown: c,
    variant: f = "selectedMenu"
  } = t, d = W(t, v$), m = x.useRef(null), v = x.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  rr(() => {
    o && m.current.focus();
  }, [o]), x.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (g, w) => {
      const S = !m.current.style.width;
      if (g.clientHeight < m.current.clientHeight && S) {
        const E = `${bv(yt(g))}px`;
        m.current.style[w.direction === "rtl" ? "paddingLeft" : "paddingRight"] = E, m.current.style.width = `calc(100% + ${E})`;
      }
      return m.current;
    }
  }), []);
  const y = (g) => {
    const w = m.current, S = g.key, E = yt(w).activeElement;
    if (S === "ArrowDown")
      g.preventDefault(), Yo(w, E, u, a, Tu);
    else if (S === "ArrowUp")
      g.preventDefault(), Yo(w, E, u, a, lm);
    else if (S === "Home")
      g.preventDefault(), Yo(w, null, u, a, Tu);
    else if (S === "End")
      g.preventDefault(), Yo(w, null, u, a, lm);
    else if (S.length === 1) {
      const C = v.current, $ = S.toLowerCase(), _ = performance.now();
      C.keys.length > 0 && (_ - C.lastTime > 500 ? (C.keys = [], C.repeating = !0, C.previousKeyMatched = !0) : C.repeating && $ !== C.keys[0] && (C.repeating = !1)), C.lastTime = _, C.keys.push($);
      const P = E && !C.repeating && Nv(E, C);
      C.previousKeyMatched && (P || Yo(w, E, !1, a, Tu, C)) ? g.preventDefault() : C.previousKeyMatched = !1;
    }
    c && c(g);
  }, R = Ue(m, n);
  let h = -1;
  x.Children.forEach(s, (g, w) => {
    /* @__PURE__ */ x.isValidElement(g) && (g.props.disabled || (f === "selectedMenu" && g.props.selected || h === -1) && (h = w), h === w && (g.props.disabled || g.props.muiSkipListHighlight || g.type.muiSkipListHighlight) && (h += 1, h >= s.length && (h = -1)));
  });
  const p = x.Children.map(s, (g, w) => {
    if (w === h) {
      const S = {};
      return i && (S.autoFocus = !0), g.props.tabIndex === void 0 && f === "selectedMenu" && (S.tabIndex = 0), /* @__PURE__ */ x.cloneElement(g, S);
    }
    return g;
  });
  return /* @__PURE__ */ k.jsx(g$, b({
    role: "menu",
    ref: R,
    className: l,
    onKeyDown: y,
    tabIndex: o ? 0 : -1
  }, d, {
    children: p
  }));
});
function x$(e) {
  return J("MuiPopover", e);
}
Z("MuiPopover", ["root", "paper"]);
const b$ = ["onEntering"], k$ = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function am(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function um(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function cm(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function _u(e) {
  return typeof e == "function" ? e() : e;
}
const w$ = (e) => {
  const {
    classes: t
  } = e;
  return ne({
    root: ["root"],
    paper: ["paper"]
  }, x$, t);
}, C$ = j(kf, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), S$ = j(ar, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), R$ = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: a = "anchorEl",
    children: u,
    className: c,
    container: f,
    elevation: d = 8,
    marginThreshold: m = 16,
    open: v,
    PaperProps: y = {},
    transformOrigin: R = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: h = Av,
    transitionDuration: p = "auto",
    TransitionProps: {
      onEntering: g
    } = {}
  } = r, w = W(r.TransitionProps, b$), S = W(r, k$), E = x.useRef(), C = Ue(E, y.ref), $ = b({}, r, {
    anchorOrigin: s,
    anchorReference: a,
    elevation: d,
    marginThreshold: m,
    PaperProps: y,
    transformOrigin: R,
    TransitionComponent: h,
    transitionDuration: p,
    TransitionProps: w
  }), _ = w$($), P = x.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const z = _u(i), K = (z && z.nodeType === 1 ? z : yt(E.current).body).getBoundingClientRect();
    return {
      top: K.top + am(K, s.vertical),
      left: K.left + um(K, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), L = x.useCallback((z) => ({
    vertical: am(z, R.vertical),
    horizontal: um(z, R.horizontal)
  }), [R.horizontal, R.vertical]), F = x.useCallback((z) => {
    const G = {
      width: z.offsetWidth,
      height: z.offsetHeight
    }, K = L(G);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: cm(K)
      };
    const ce = P();
    let Y = ce.top - K.vertical, X = ce.left - K.horizontal;
    const re = Y + G.height, Pe = X + G.width, ct = gn(_u(i)), Se = ct.innerHeight - m, rt = ct.innerWidth - m;
    if (Y < m) {
      const te = Y - m;
      Y -= te, K.vertical += te;
    } else if (re > Se) {
      const te = re - Se;
      Y -= te, K.vertical += te;
    }
    if (X < m) {
      const te = X - m;
      X -= te, K.horizontal += te;
    } else if (Pe > rt) {
      const te = Pe - rt;
      X -= te, K.horizontal += te;
    }
    return {
      top: `${Math.round(Y)}px`,
      left: `${Math.round(X)}px`,
      transformOrigin: cm(K)
    };
  }, [i, a, P, L, m]), [D, A] = x.useState(v), N = x.useCallback(() => {
    const z = E.current;
    if (!z)
      return;
    const G = F(z);
    G.top !== null && (z.style.top = G.top), G.left !== null && (z.style.left = G.left), z.style.transformOrigin = G.transformOrigin, A(!0);
  }, [F]), V = (z, G) => {
    g && g(z, G), N();
  }, B = () => {
    A(!1);
  };
  x.useEffect(() => {
    v && N();
  }), x.useImperativeHandle(o, () => v ? {
    updatePosition: () => {
      N();
    }
  } : null, [v, N]), x.useEffect(() => {
    if (!v)
      return;
    const z = za(() => {
      N();
    }), G = gn(i);
    return G.addEventListener("resize", z), () => {
      z.clear(), G.removeEventListener("resize", z);
    };
  }, [i, v, N]);
  let T = p;
  p === "auto" && !h.muiSupportAuto && (T = void 0);
  const I = f || (i ? yt(_u(i)).body : void 0);
  return /* @__PURE__ */ k.jsx(C$, b({
    BackdropProps: {
      invisible: !0
    },
    className: H(_.root, c),
    container: I,
    open: v,
    ref: n,
    ownerState: $
  }, S, {
    children: /* @__PURE__ */ k.jsx(h, b({
      appear: !0,
      in: v,
      onEntering: V,
      onExited: B,
      timeout: T
    }, w, {
      children: /* @__PURE__ */ k.jsx(S$, b({
        elevation: d
      }, y, {
        ref: C,
        className: H(_.paper, y.className)
      }, D ? void 0 : {
        style: b({}, y.style, {
          opacity: 0
        })
      }, {
        ownerState: $,
        children: u
      }))
    }))
  }));
});
function E$(e) {
  return J("MuiMenu", e);
}
Z("MuiMenu", ["root", "paper", "list"]);
const $$ = ["onEntering"], P$ = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"], T$ = {
  vertical: "top",
  horizontal: "right"
}, _$ = {
  vertical: "top",
  horizontal: "left"
}, I$ = (e) => {
  const {
    classes: t
  } = e;
  return ne({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, E$, t);
}, M$ = j(R$, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), z$ = j(ar, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), A$ = j(y$, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Lv = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: i,
    disableAutoFocusItem: s = !1,
    MenuListProps: l = {},
    onClose: a,
    open: u,
    PaperProps: c = {},
    PopoverClasses: f,
    transitionDuration: d = "auto",
    TransitionProps: {
      onEntering: m
    } = {},
    variant: v = "selectedMenu"
  } = r, y = W(r.TransitionProps, $$), R = W(r, P$), h = No(), p = h.direction === "rtl", g = b({}, r, {
    autoFocus: o,
    disableAutoFocusItem: s,
    MenuListProps: l,
    onEntering: m,
    PaperProps: c,
    transitionDuration: d,
    TransitionProps: y,
    variant: v
  }), w = I$(g), S = o && !s && u, E = x.useRef(null), C = (P, L) => {
    E.current && E.current.adjustStyleForScrollbar(P, h), m && m(P, L);
  }, $ = (P) => {
    P.key === "Tab" && (P.preventDefault(), a && a(P, "tabKeyDown"));
  };
  let _ = -1;
  return x.Children.map(i, (P, L) => {
    /* @__PURE__ */ x.isValidElement(P) && (P.props.disabled || (v === "selectedMenu" && P.props.selected || _ === -1) && (_ = L));
  }), /* @__PURE__ */ k.jsx(M$, b({
    onClose: a,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: p ? "right" : "left"
    },
    transformOrigin: p ? T$ : _$,
    PaperProps: b({
      as: z$
    }, c, {
      classes: b({}, c.classes, {
        root: w.paper
      })
    }),
    className: w.root,
    open: u,
    ref: n,
    transitionDuration: d,
    TransitionProps: b({
      onEntering: C
    }, y),
    ownerState: g
  }, R, {
    classes: f,
    children: /* @__PURE__ */ k.jsx(A$, b({
      onKeyDown: $,
      actions: E,
      autoFocus: o && (_ === -1 || s),
      autoFocusItem: S,
      variant: v
    }, l, {
      className: H(w.list, l.className),
      children: i
    }))
  }));
});
function O$(e) {
  return J("MuiMenuItem", e);
}
const Zo = Z("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), N$ = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], L$ = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, j$ = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = ne({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, O$, s);
  return b({}, s, a);
}, F$ = j(_o, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: L$
})(({
  theme: e,
  ownerState: t
}) => b({}, e.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Zo.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : be(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Zo.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : be(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Zo.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : be(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : be(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Zo.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Zo.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${jh.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${jh.inset}`]: {
    marginLeft: 52
  },
  [`& .${sm.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${sm.inset}`]: {
    paddingLeft: 36
  },
  [`& .${im.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && b({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${im.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), Iu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: a = !1,
    focusVisibleClassName: u,
    role: c = "menuitem",
    tabIndex: f,
    className: d
  } = r, m = W(r, N$), v = x.useContext(qc), y = x.useMemo(() => ({
    dense: s || v.dense || !1,
    disableGutters: a
  }), [v.dense, s, a]), R = x.useRef(null);
  rr(() => {
    o && R.current && R.current.focus();
  }, [o]);
  const h = b({}, r, {
    dense: y.dense,
    divider: l,
    disableGutters: a
  }), p = j$(r), g = Ue(R, n);
  let w;
  return r.disabled || (w = f !== void 0 ? f : -1), /* @__PURE__ */ k.jsx(qc.Provider, {
    value: y,
    children: /* @__PURE__ */ k.jsx(F$, b({
      ref: g,
      role: c,
      tabIndex: w,
      component: i,
      focusVisibleClassName: H(p.focusVisible, u),
      className: H(p.root, d)
    }, m, {
      ownerState: h,
      classes: p
    }))
  });
});
function D$(e) {
  return J("MuiNativeSelect", e);
}
const Sf = Z("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), B$ = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], U$ = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${M(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ne(l, D$, t);
}, jv = ({
  ownerState: e,
  theme: t
}) => b({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": b({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${Sf.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), W$ = j("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Vt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Sf.multiple}`]: t.multiple
    }];
  }
})(jv), Fv = ({
  ownerState: e,
  theme: t
}) => b({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Sf.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), H$ = j("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${M(n.variant)}`], n.open && t.iconOpen];
  }
})(Fv), V$ = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: a = "standard"
  } = t, u = W(t, B$), c = b({}, t, {
    disabled: o,
    variant: a,
    error: i
  }), f = U$(c);
  return /* @__PURE__ */ k.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ k.jsx(W$, b({
      ownerState: c,
      className: H(f.select, r),
      disabled: o,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ k.jsx(H$, {
      as: s,
      ownerState: c,
      className: f.icon
    })]
  });
});
var dm;
const K$ = ["children", "classes", "className", "label", "notched"], G$ = j("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), q$ = j("legend")(({
  ownerState: e,
  theme: t
}) => b({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && b({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function Q$(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, o = W(e, K$), i = n != null && n !== "", s = b({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ k.jsx(G$, b({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, o, {
    children: /* @__PURE__ */ k.jsx(q$, {
      ownerState: s,
      children: i ? /* @__PURE__ */ k.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        dm || (dm = /* @__PURE__ */ k.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const X$ = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Y$ = (e) => {
  const {
    classes: t
  } = e, r = ne({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Y2, t);
  return b({}, t, r);
}, Z$ = j(Fa, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: La
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return b({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${On.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${On.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${On.focused} .${On.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${On.error} .${On.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${On.disabled} .${On.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && b({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), J$ = j(Q$, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), eP = j(Da, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ja
})(({
  theme: e,
  ownerState: t
}) => b({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), Rf = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, o, i, s, l;
  const a = ee({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: c = !1,
    inputComponent: f = "input",
    label: d,
    multiline: m = !1,
    notched: v,
    slots: y = {},
    type: R = "text"
  } = a, h = W(a, X$), p = Y$(a), g = jo(), w = Lo({
    props: a,
    muiFormControl: g,
    states: ["required"]
  }), S = b({}, a, {
    color: w.color || "primary",
    disabled: w.disabled,
    error: w.error,
    focused: w.focused,
    formControl: g,
    fullWidth: c,
    hiddenLabel: w.hiddenLabel,
    multiline: m,
    size: w.size,
    type: R
  }), E = (r = (o = y.root) != null ? o : u.Root) != null ? r : Z$, C = (i = (s = y.input) != null ? s : u.Input) != null ? i : eP;
  return /* @__PURE__ */ k.jsx(bf, b({
    slots: {
      root: E,
      input: C
    },
    renderSuffix: ($) => /* @__PURE__ */ k.jsx(J$, {
      ownerState: S,
      className: p.notchedOutline,
      label: d != null && d !== "" && w.required ? l || (l = /* @__PURE__ */ k.jsxs(x.Fragment, {
        children: [d, " ", "*"]
      })) : d,
      notched: typeof v < "u" ? v : !!($.startAdornment || $.filled || $.focused)
    }),
    fullWidth: c,
    inputComponent: f,
    multiline: m,
    ref: n,
    type: R
  }, h, {
    classes: b({}, p, {
      notchedOutline: null
    })
  }));
});
Rf.muiName = "Input";
function tP(e) {
  return J("MuiSelect", e);
}
const Jo = Z("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var fm;
const nP = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], rP = j("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Jo.select}`]: t.select
      },
      {
        [`&.${Jo.select}`]: t[n.variant]
      },
      {
        [`&.${Jo.error}`]: t.error
      },
      {
        [`&.${Jo.multiple}`]: t.multiple
      }
    ];
  }
})(jv, {
  // Win specificity over the input base
  [`&.${Jo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), oP = j("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${M(n.variant)}`], n.open && t.iconOpen];
  }
})(Fv), iP = j("input", {
  shouldForwardProp: (e) => qC(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function pm(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function sP(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const lP = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${M(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return ne(l, tP, t);
}, aP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: u,
    defaultValue: c,
    disabled: f,
    displayEmpty: d,
    error: m = !1,
    IconComponent: v,
    inputRef: y,
    labelId: R,
    MenuProps: h = {},
    multiple: p,
    name: g,
    onBlur: w,
    onChange: S,
    onClose: E,
    onFocus: C,
    onOpen: $,
    open: _,
    readOnly: P,
    renderValue: L,
    SelectDisplayProps: F = {},
    tabIndex: D,
    value: A,
    variant: N = "standard"
  } = t, V = W(t, nP), [B, T] = Fc({
    controlled: A,
    default: c,
    name: "Select"
  }), [I, z] = Fc({
    controlled: _,
    default: u,
    name: "Select"
  }), G = x.useRef(null), K = x.useRef(null), [ce, Y] = x.useState(null), {
    current: X
  } = x.useRef(_ != null), [re, Pe] = x.useState(), ct = Ue(n, y), Se = x.useCallback((q) => {
    K.current = q, q && Y(q);
  }, []), rt = ce == null ? void 0 : ce.parentNode;
  x.useImperativeHandle(ct, () => ({
    focus: () => {
      K.current.focus();
    },
    node: G.current,
    value: B
  }), [B]), x.useEffect(() => {
    u && I && ce && !X && (Pe(s ? null : rt.clientWidth), K.current.focus());
  }, [ce, s]), x.useEffect(() => {
    i && K.current.focus();
  }, [i]), x.useEffect(() => {
    if (!R)
      return;
    const q = yt(K.current).getElementById(R);
    if (q) {
      const ve = () => {
        getSelection().isCollapsed && K.current.focus();
      };
      return q.addEventListener("click", ve), () => {
        q.removeEventListener("click", ve);
      };
    }
  }, [R]);
  const te = (q, ve) => {
    q ? $ && $(ve) : E && E(ve), X || (Pe(s ? null : rt.clientWidth), z(q));
  }, Te = (q) => {
    q.button === 0 && (q.preventDefault(), K.current.focus(), te(!0, q));
  }, sn = (q) => {
    te(!1, q);
  }, Kt = x.Children.toArray(l), bt = (q) => {
    const ve = Kt.map((xn) => xn.props.value).indexOf(q.target.value);
    if (ve === -1)
      return;
    const ze = Kt[ve];
    T(ze.props.value), S && S(q, ze);
  }, ur = (q) => (ve) => {
    let ze;
    if (ve.currentTarget.hasAttribute("tabindex")) {
      if (p) {
        ze = Array.isArray(B) ? B.slice() : [];
        const xn = B.indexOf(q.props.value);
        xn === -1 ? ze.push(q.props.value) : ze.splice(xn, 1);
      } else
        ze = q.props.value;
      if (q.props.onClick && q.props.onClick(ve), B !== ze && (T(ze), S)) {
        const xn = ve.nativeEvent || ve, Hf = new xn.constructor(xn.type, xn);
        Object.defineProperty(Hf, "target", {
          writable: !0,
          value: {
            value: ze,
            name: g
          }
        }), S(Hf, q);
      }
      p || te(!1, ve);
    }
  }, Le = (q) => {
    P || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(q.key) !== -1 && (q.preventDefault(), te(!0, q));
  }, In = ce !== null && I, Fo = (q) => {
    !In && w && (Object.defineProperty(q, "target", {
      writable: !0,
      value: {
        value: B,
        name: g
      }
    }), w(q));
  };
  delete V["aria-invalid"];
  let dt, Ye;
  const Mn = [];
  let Gt = !1;
  (Tl({
    value: B
  }) || d) && (L ? dt = L(B) : Gt = !0);
  const vn = Kt.map((q) => {
    if (!/* @__PURE__ */ x.isValidElement(q))
      return null;
    let ve;
    if (p) {
      if (!Array.isArray(B))
        throw new Error(nr(2));
      ve = B.some((ze) => pm(ze, q.props.value)), ve && Gt && Mn.push(q.props.children);
    } else
      ve = pm(B, q.props.value), ve && Gt && (Ye = q.props.children);
    return /* @__PURE__ */ x.cloneElement(q, {
      "aria-selected": ve ? "true" : "false",
      onClick: ur(q),
      onKeyUp: (ze) => {
        ze.key === " " && ze.preventDefault(), q.props.onKeyUp && q.props.onKeyUp(ze);
      },
      role: "option",
      selected: ve,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": q.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  Gt && (p ? Mn.length === 0 ? dt = null : dt = Mn.reduce((q, ve, ze) => (q.push(ve), ze < Mn.length - 1 && q.push(", "), q), []) : dt = Ye);
  let qt = re;
  !s && X && ce && (qt = rt.clientWidth);
  let yn;
  typeof D < "u" ? yn = D : yn = f ? null : 0;
  const zn = F.id || (g ? `mui-component-select-${g}` : void 0), he = b({}, t, {
    variant: N,
    value: B,
    open: In,
    error: m
  }), Q = lP(he);
  return /* @__PURE__ */ k.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ k.jsx(rP, b({
      ref: Se,
      tabIndex: yn,
      role: "button",
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": In ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": o,
      "aria-labelledby": [R, zn].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: Le,
      onMouseDown: f || P ? null : Te,
      onBlur: Fo,
      onFocus: C
    }, F, {
      ownerState: he,
      className: H(F.className, Q.select, a),
      id: zn,
      children: sP(dt) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        fm || (fm = /* @__PURE__ */ k.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : dt
    })), /* @__PURE__ */ k.jsx(iP, b({
      "aria-invalid": m,
      value: Array.isArray(B) ? B.join(",") : B,
      name: g,
      ref: G,
      "aria-hidden": !0,
      onChange: bt,
      tabIndex: -1,
      disabled: f,
      className: Q.nativeInput,
      autoFocus: i,
      ownerState: he
    }, V)), /* @__PURE__ */ k.jsx(oP, {
      as: v,
      className: Q.icon,
      ownerState: he
    }), /* @__PURE__ */ k.jsx(Lv, b({
      id: `menu-${g || ""}`,
      anchorEl: rt,
      open: In,
      onClose: sn,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, h, {
      MenuListProps: b({
        "aria-labelledby": R,
        role: "listbox",
        disableListWrap: !0
      }, h.MenuListProps),
      PaperProps: b({}, h.PaperProps, {
        style: b({
          minWidth: qt
        }, h.PaperProps != null ? h.PaperProps.style : null)
      }),
      children: vn
    }))]
  });
}), uP = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], cP = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Ef = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Vt(e) && e !== "variant",
  slot: "Root"
}, dP = j(Cf, Ef)(""), fP = j(Rf, Ef)(""), pP = j(wf, Ef)(""), Dv = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: c = J2,
    id: f,
    input: d,
    inputProps: m,
    label: v,
    labelId: y,
    MenuProps: R,
    multiple: h = !1,
    native: p = !1,
    onClose: g,
    onOpen: w,
    open: S,
    renderValue: E,
    SelectDisplayProps: C,
    variant: $ = "outlined"
  } = r, _ = W(r, uP), P = p ? V$ : aP, L = jo(), F = Lo({
    props: r,
    muiFormControl: L,
    states: ["variant", "error"]
  }), D = F.variant || $, A = b({}, r, {
    variant: D,
    classes: s
  }), N = cP(A), V = d || {
    standard: /* @__PURE__ */ k.jsx(dP, {
      ownerState: A
    }),
    outlined: /* @__PURE__ */ k.jsx(fP, {
      label: v,
      ownerState: A
    }),
    filled: /* @__PURE__ */ k.jsx(pP, {
      ownerState: A
    })
  }[D], B = Ue(n, V.ref);
  return /* @__PURE__ */ k.jsx(x.Fragment, {
    children: /* @__PURE__ */ x.cloneElement(V, b({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: P,
      inputProps: b({
        children: i,
        error: F.error,
        IconComponent: c,
        variant: D,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: h
      }, p ? {
        id: f
      } : {
        autoWidth: o,
        defaultOpen: a,
        displayEmpty: u,
        labelId: y,
        MenuProps: R,
        onClose: g,
        onOpen: w,
        open: S,
        renderValue: E,
        SelectDisplayProps: b({
          id: f
        }, C)
      }, m, {
        classes: m ? vt(N, m.classes) : N
      }, d ? d.props.inputProps : {})
    }, h && p && D === "outlined" ? {
      notched: !0
    } : {}, {
      ref: B,
      className: H(V.props.className, l)
    }, !d && {
      variant: D
    }, _))
  });
});
Dv.muiName = "Select";
function hP(e) {
  return J("MuiSkeleton", e);
}
Z("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const mP = ["animation", "className", "component", "height", "style", "variant", "width"];
let _l = (e) => e, hm, mm, gm, vm;
const gP = (e) => {
  const {
    classes: t,
    variant: n,
    animation: r,
    hasChildren: o,
    width: i,
    height: s
  } = e;
  return ne({
    root: ["root", n, r, o && "withChildren", o && !i && "fitContent", o && !s && "heightAuto"]
  }, hP, t);
}, vP = Nr(hm || (hm = _l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)), yP = Nr(mm || (mm = _l`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)), xP = j("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.animation !== !1 && t[n.animation], n.hasChildren && t.withChildren, n.hasChildren && !n.width && t.fitContent, n.hasChildren && !n.height && t.heightAuto];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = MS(e.shape.borderRadius) || "px", r = zS(e.shape.borderRadius);
  return b({
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : be(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em"
  }, t.variant === "text" && {
    marginTop: 0,
    marginBottom: 0,
    height: "auto",
    transformOrigin: "0 55%",
    transform: "scale(1, 0.60)",
    borderRadius: `${r}${n}/${Math.round(r / 0.6 * 10) / 10}${n}`,
    "&:empty:before": {
      content: '"\\00a0"'
    }
  }, t.variant === "circular" && {
    borderRadius: "50%"
  }, t.variant === "rounded" && {
    borderRadius: (e.vars || e).shape.borderRadius
  }, t.hasChildren && {
    "& > *": {
      visibility: "hidden"
    }
  }, t.hasChildren && !t.width && {
    maxWidth: "fit-content"
  }, t.hasChildren && !t.height && {
    height: "auto"
  });
}, ({
  ownerState: e
}) => e.animation === "pulse" && qi(gm || (gm = _l`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `), vP), ({
  ownerState: e,
  theme: t
}) => e.animation === "wave" && qi(vm || (vm = _l`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), yP, (t.vars || t).palette.action.hover)), bP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiSkeleton"
  }), {
    animation: o = "pulse",
    className: i,
    component: s = "span",
    height: l,
    style: a,
    variant: u = "text",
    width: c
  } = r, f = W(r, mP), d = b({}, r, {
    animation: o,
    component: s,
    variant: u,
    hasChildren: !!f.children
  }), m = gP(d);
  return /* @__PURE__ */ k.jsx(xP, b({
    as: s,
    ref: n,
    className: H(m.root, i),
    ownerState: d
  }, f, {
    style: b({
      width: c,
      height: l
    }, a)
  }));
});
function kP(e) {
  return J("MuiToolbar", e);
}
Z("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const wP = ["className", "component", "disableGutters", "variant"], CP = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return ne({
    root: ["root", !n && "gutters", r]
  }, kP, t);
}, SP = j("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !t.disableGutters && {
  paddingLeft: e.spacing(2),
  paddingRight: e.spacing(2),
  [e.breakpoints.up("sm")]: {
    paddingLeft: e.spacing(3),
    paddingRight: e.spacing(3)
  }
}, t.variant === "dense" && {
  minHeight: 48
}), ({
  theme: e,
  ownerState: t
}) => t.variant === "regular" && e.mixins.toolbar), RP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: i = "div",
    disableGutters: s = !1,
    variant: l = "regular"
  } = r, a = W(r, wP), u = b({}, r, {
    component: i,
    disableGutters: s,
    variant: l
  }), c = CP(u);
  return /* @__PURE__ */ k.jsx(SP, b({
    as: i,
    className: H(c.root, o),
    ref: n,
    ownerState: u
  }, a));
});
function EP(e) {
  return J("MuiTextField", e);
}
Z("MuiTextField", ["root"]);
const $P = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], PP = {
  standard: Cf,
  filled: wf,
  outlined: Rf
}, TP = (e) => {
  const {
    classes: t
  } = e;
  return ne({
    root: ["root"]
  }, EP, t);
}, _P = j(OE, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), IP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ee({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: s,
    className: l,
    color: a = "primary",
    defaultValue: u,
    disabled: c = !1,
    error: f = !1,
    FormHelperTextProps: d,
    fullWidth: m = !1,
    helperText: v,
    id: y,
    InputLabelProps: R,
    inputProps: h,
    InputProps: p,
    inputRef: g,
    label: w,
    maxRows: S,
    minRows: E,
    multiline: C = !1,
    name: $,
    onBlur: _,
    onChange: P,
    onClick: L,
    onFocus: F,
    placeholder: D,
    required: A = !1,
    rows: N,
    select: V = !1,
    SelectProps: B,
    type: T,
    value: I,
    variant: z = "outlined"
  } = r, G = W(r, $P), K = b({}, r, {
    autoFocus: i,
    color: a,
    disabled: c,
    error: f,
    fullWidth: m,
    multiline: C,
    required: A,
    select: V,
    variant: z
  }), ce = TP(K), Y = {};
  z === "outlined" && (R && typeof R.shrink < "u" && (Y.notched = R.shrink), Y.label = w), V && ((!B || !B.native) && (Y.id = void 0), Y["aria-describedby"] = void 0);
  const X = pf(y), re = v && X ? `${X}-helper-text` : void 0, Pe = w && X ? `${X}-label` : void 0, ct = PP[z], Se = /* @__PURE__ */ k.jsx(ct, b({
    "aria-describedby": re,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: m,
    multiline: C,
    name: $,
    rows: N,
    maxRows: S,
    minRows: E,
    type: T,
    value: I,
    id: X,
    inputRef: g,
    onBlur: _,
    onChange: P,
    onFocus: F,
    onClick: L,
    placeholder: D,
    inputProps: h
  }, Y, p));
  return /* @__PURE__ */ k.jsxs(_P, b({
    className: H(ce.root, l),
    disabled: c,
    error: f,
    fullWidth: m,
    ref: n,
    required: A,
    color: a,
    variant: z,
    ownerState: K
  }, G, {
    children: [w != null && w !== "" && /* @__PURE__ */ k.jsx(r$, b({
      htmlFor: X,
      id: Pe
    }, R, {
      children: w
    })), V ? /* @__PURE__ */ k.jsx(Dv, b({
      "aria-describedby": re,
      id: X,
      labelId: Pe,
      value: I,
      input: Se
    }, B, {
      children: s
    })) : Se, v && /* @__PURE__ */ k.jsx(DE, b({
      id: re
    }, d, {
      children: v
    }))]
  }));
});
var $f = {}, Bv = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Bv);
var Lr = Bv.exports, Mu = {};
const MP = /* @__PURE__ */ fy(FS);
var ym;
function jr() {
  return ym || (ym = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = MP;
  }(Mu)), Mu;
}
var zP = Lr;
Object.defineProperty($f, "__esModule", {
  value: !0
});
var Uv = $f.default = void 0, AP = zP(jr()), OP = k, NP = (0, AP.default)(/* @__PURE__ */ (0, OP.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
Uv = $f.default = NP;
var Pf = {}, LP = Lr;
Object.defineProperty(Pf, "__esModule", {
  value: !0
});
var Wv = Pf.default = void 0, jP = LP(jr()), FP = k, DP = (0, jP.default)(/* @__PURE__ */ (0, FP.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
Wv = Pf.default = DP;
var Tf = {}, BP = Lr;
Object.defineProperty(Tf, "__esModule", {
  value: !0
});
var Hv = Tf.default = void 0, UP = BP(jr()), WP = k, HP = (0, UP.default)(/* @__PURE__ */ (0, WP.jsx)("path", {
  d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
}), "Fullscreen");
Hv = Tf.default = HP;
var _f = {}, VP = Lr;
Object.defineProperty(_f, "__esModule", {
  value: !0
});
var Vv = _f.default = void 0, KP = VP(jr()), GP = k, qP = (0, KP.default)(/* @__PURE__ */ (0, GP.jsx)("path", {
  d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
}), "FullscreenExit");
Vv = _f.default = qP;
var If = {}, QP = Lr;
Object.defineProperty(If, "__esModule", {
  value: !0
});
var Kv = If.default = void 0, XP = QP(jr()), YP = k, ZP = (0, XP.default)(/* @__PURE__ */ (0, YP.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), "Add");
Kv = If.default = ZP;
const JP = ({
  onClose: e,
  onToggleFullscreen: t,
  isFullscreen: n = !1
}) => {
  var s, l, a, u, c, f;
  const [r, o] = lr(), i = x.useCallback(() => {
    o({ type: "START_NEW_CHAT" });
  }, [o]);
  return x.useEffect(() => {
    let d = !0;
    return wb(r).then((m) => {
      d && o({ type: "SET_ONLINE_STATUS", payload: m });
    }).catch((m) => {
      d && o({
        type: "SET_ERROR",
        payload: m.message || "server error: unable to get online status"
      });
    }), () => {
      d = !1;
    };
  }, [r.api, o]), /* @__PURE__ */ k.jsxs(
    j2,
    {
      position: "relative",
      sx: {
        bgcolor: (s = r.config.ui) == null ? void 0 : s.backgroundColor,
        color: (l = r.config.ui) == null ? void 0 : l.foregroundColor,
        boxShadow: 0
      },
      children: [
        /* @__PURE__ */ k.jsxs(
          RP,
          {
            variant: "regular",
            sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 8px"
            },
            children: [
              /* @__PURE__ */ k.jsxs(
                Dt,
                {
                  direction: "row",
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ k.jsx(
                      $v,
                      {
                        alt: (a = r.config.assistant) == null ? void 0 : a.name,
                        src: ((c = (u = r.config.assistant) == null ? void 0 : u.avatar) == null ? void 0 : c.staticUrl) || "",
                        sx: {
                          width: 32,
                          height: 32,
                          border: r.api.online ? "2px solid #00FF00" : "2px solid #FF0000"
                        },
                        children: /* @__PURE__ */ k.jsx(Wv, {})
                      }
                    ),
                    /* @__PURE__ */ k.jsx(ss, { variant: "h6", children: (f = r.config.assistant) == null ? void 0 : f.name })
                  ]
                }
              ),
              /* @__PURE__ */ k.jsxs(
                Dt,
                {
                  direction: "row",
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ k.jsx(
                      go,
                      {
                        size: "small",
                        variant: "circular",
                        onClick: i,
                        sx: {
                          boxShadow: 0
                        },
                        children: /* @__PURE__ */ k.jsx(Kv, {})
                      }
                    ),
                    t && /* @__PURE__ */ k.jsx(
                      go,
                      {
                        size: "small",
                        variant: "circular",
                        sx: {
                          boxShadow: 0
                        },
                        onClick: t,
                        children: n ? /* @__PURE__ */ k.jsx(Vv, {}) : /* @__PURE__ */ k.jsx(Hv, {})
                      }
                    ),
                    e && /* @__PURE__ */ k.jsx(
                      go,
                      {
                        size: "small",
                        variant: "circular",
                        sx: {
                          boxShadow: 0
                        },
                        onClick: e,
                        children: /* @__PURE__ */ k.jsx(Uv, {})
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        r.error && /* @__PURE__ */ k.jsx(
          $2,
          {
            severity: "error",
            variant: "filled",
            sx: {
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)"
            },
            children: r.error
          }
        )
      ]
    }
  );
}, Gv = x.memo(JP), eT = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "m14 7-5 5 5 5V7z"
}), "ArrowLeft"), tT = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "m10 17 5-5-5-5v10z"
}), "ArrowRight"), nT = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
}), "AttachFile"), rT = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "m9.4 10.5 4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"
}), "Camera"), oT = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
}), "ContentCopy"), qv = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
}), "Description"), Mf = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
}), "Image"), iT = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"
}), "InsertDriveFile"), zf = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
}), "Mic"), sT = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send"), Qv = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M6 6h12v12H6z"
}), "Stop"), lT = Ne(/* @__PURE__ */ k.jsx("path", {
  d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
}), "VolumeUp");
function aT({ onAddUpload: e }) {
  const [t] = lr(), [n, r] = x.useState(null), [o, i] = x.useState(!1), [s] = x.useState(() => new Eb()), [l, a] = x.useState(null), [u, c] = x.useState(null), f = it.useRef(null), d = it.useRef(null), m = t.api.isApiAcceptingImage, v = t.api.isApiAcceptingFullFile, y = (C) => {
    r(C.currentTarget);
  }, R = () => {
    r(null);
  }, h = (C) => {
    d.current && (d.current.accept = C, d.current.click());
  }, p = async () => {
    try {
      await s.requestPermission();
      const C = s.getPreview();
      a(C), i(!0);
    } catch (C) {
      console.error("Error accessing the camera:", C);
    }
  }, g = () => {
    const C = s.captureImage(f == null ? void 0 : f.current);
    c(C), e({
      name: `image${Date.now()}.png`,
      type: "file",
      mime: "image/png",
      data: C
    }), w();
  }, w = () => {
    i(!1), a(null), s.stop();
  };
  x.useEffect(() => () => {
    s.stop();
  }, []);
  const S = async (C) => {
    var _;
    const $ = (_ = C.target.files) == null ? void 0 : _[0];
    if ($) {
      const P = await E($);
      e({
        name: $.name,
        type: $.type.includes("image") ? "file" : "file:full",
        mime: $.type,
        data: P
      });
    }
  }, E = (C) => new Promise(($, _) => {
    const P = new FileReader();
    P.onload = () => $(P.result), P.onerror = _, P.readAsDataURL(C);
  });
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(
      go,
      {
        size: "small",
        sx: { boxShadow: 0, bgcolor: "transparent" },
        onClick: y,
        children: /* @__PURE__ */ k.jsx(nT, {})
      }
    ),
    /* @__PURE__ */ k.jsxs(
      Lv,
      {
        anchorEl: n,
        open: !!n,
        onClose: R,
        children: [
          /* @__PURE__ */ k.jsxs(
            Iu,
            {
              onClick: p,
              disabled: !m,
              children: [
                /* @__PURE__ */ k.jsx(rT, { sx: { mr: 1 } }),
                " Capture Image"
              ]
            }
          ),
          /* @__PURE__ */ k.jsxs(
            Iu,
            {
              onClick: () => h("image/*"),
              disabled: !m,
              children: [
                /* @__PURE__ */ k.jsx(Mf, { sx: { mr: 1 } }),
                " Upload Image"
              ]
            }
          ),
          /* @__PURE__ */ k.jsxs(
            Iu,
            {
              onClick: () => h("*/*"),
              disabled: !v,
              children: [
                /* @__PURE__ */ k.jsx(qv, { sx: { mr: 1 } }),
                " Upload File"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ k.jsx(
      "input",
      {
        ref: d,
        type: "file",
        onChange: S,
        style: { display: "none" },
        multiple: !0
      }
    ),
    /* @__PURE__ */ k.jsxs(
      GR,
      {
        open: o,
        onClose: w,
        children: [
          /* @__PURE__ */ k.jsx(uE, { children: "Camera Preview" }),
          /* @__PURE__ */ k.jsx(iE, { children: /* @__PURE__ */ k.jsx(Dt, { alignItems: "center", children: /* @__PURE__ */ k.jsx(
            "video",
            {
              style: { width: "100%", maxHeight: "400px" },
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              ref: (C) => {
                C && (C.srcObject = l, f.current = C);
              }
            }
          ) }) }),
          /* @__PURE__ */ k.jsxs(ZR, { children: [
            /* @__PURE__ */ k.jsx(
              Kc,
              {
                onClick: w,
                color: "secondary",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ k.jsx(
              Kc,
              {
                onClick: g,
                color: "secondary",
                children: "Capture"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function uT({
  onAddAudio: e
}) {
  const [t] = x.useState(() => new Rb()), [n, r] = x.useState(0), [o, i] = x.useState(!1), [s, l] = x.useState(
    null
  );
  x.useEffect(() => {
    s && !o && (clearInterval(s), l(null));
  }, [o, s]);
  const a = async () => {
    try {
      await t.startRecording(), i(!0), r(0);
      const f = setInterval(() => {
        r((d) => d + 1);
      }, 1e3);
      l(f);
    } catch (f) {
      console.error("Failed to start recording:", f);
    }
  }, u = async () => {
    try {
      i(!1), r(t.timeRecorded);
      const f = await t.stopRecording();
      if (f) {
        const d = await c(f);
        e({
          name: `audio${t.startTime}.wav`,
          type: "audio",
          mime: f.type,
          data: d
        });
      }
    } catch (f) {
      console.error("Failed to stop recording:", f);
    }
  }, c = async (f) => new Promise((d, m) => {
    const v = new FileReader();
    v.onerror = m, v.onload = () => d(v.result), v.readAsDataURL(f);
  });
  return /* @__PURE__ */ k.jsx(
    go,
    {
      size: "medium",
      onClick: o ? u : a,
      sx: { boxShadow: 0, bgcolor: "transparent" },
      children: o ? /* @__PURE__ */ k.jsx(
        xR,
        {
          badgeContent: `${n}s`,
          color: "secondary",
          sx: { boxShadow: 0, bgcolor: "transparent" },
          children: /* @__PURE__ */ k.jsx(Qv, { sx: { fontSize: 24 } })
        }
      ) : /* @__PURE__ */ k.jsx(zf, { sx: { fontSize: 24 } })
    }
  );
}
function cT() {
  var f;
  const [e, t] = lr(), n = e.api.isApiAcceptingVoice, [r, o] = x.useState({
    id: si(),
    role: "user",
    content: "",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    uploads: []
  }), [i, s] = x.useState({
    id: si(),
    role: "api",
    content: "",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  }), l = (d) => {
    o((m) => ({
      ...m,
      uploads: [...m.uploads || [], d]
    }));
  }, a = async () => {
    e.config.onRequest && e.config.onRequest(r);
    const d = await ph({
      chatData: e,
      userMessage: r,
      canStream: !1
    }).catch((m) => {
      t({ type: "SET_TYPING_STATUS", payload: !1 }), t({ type: "DELETE_LAST_MESSAGE" }), t({
        type: "SET_ERROR",
        payload: `Error: ${m.message}`
      });
    });
    d && (s((m) => ({ ...m, content: d.text })), t({ type: "SET_TYPING_STATUS", payload: !1 }), t({
      type: "UPDATE_LAST_MESSAGE",
      payload: {
        id: d.chatMessageId,
        content: d.text
      }
    })), e.config.onResponse && e.config.onResponse({ ...i, content: d.text });
  }, u = async () => {
    e.config.onRequest && e.config.onRequest(r);
    const d = await ph({
      chatData: e,
      userMessage: r,
      canStream: !0
    }).catch((v) => {
      t({ type: "DELETE_LAST_MESSAGE" }), t({ type: "SET_TYPING_STATUS", payload: !1 }), t({
        type: "SET_ERROR",
        payload: `Error: ${v.message}`
      });
    });
    t({ type: "SET_TYPING_STATUS", payload: !1 });
    let m = i.content;
    for await (const v of d) {
      const y = JSON.parse(v.data), R = y.event, h = y.data;
      R === "token" && (m = m + h, s((p) => ({ ...p, content: p.content + h })), t({
        type: "UPDATE_LAST_MESSAGE",
        payload: { content: h }
      }));
    }
    e.config.onResponse && e.config.onResponse({ ...i, content: m });
  }, c = x.useCallback(async () => {
    var d;
    s({
      id: si(),
      role: "api",
      content: "",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), !(!r.content.trim() && !((d = r.uploads) != null && d.length)) && (t({ type: "ADD_NEW_MESSAGE", payload: r }), t({ type: "SET_TYPING_STATUS", payload: !0 }), t({ type: "ADD_NEW_MESSAGE", payload: i }), e.api.canStream && await u(), e.api.canStream || await a(), o({
      id: si(),
      role: "user",
      content: "",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      uploads: []
    }));
  }, [r, i, e, t]);
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    r.uploads && r.uploads.length > 0 && /* @__PURE__ */ k.jsx(
      Dt,
      {
        useFlexGap: !0,
        direction: "row",
        spacing: 2,
        sx: {
          p: 2,
          overflowX: "auto",
          justifyContent: "start",
          alignItems: "center"
        },
        children: r.uploads.map((d, m) => /* @__PURE__ */ k.jsx(
          Ev,
          {
            label: d.name,
            onDelete: () => o((v) => {
              var y;
              return {
                ...v,
                uploads: (y = v.uploads) == null ? void 0 : y.filter((R, h) => h !== m)
              };
            }),
            icon: d.type === "audio" ? /* @__PURE__ */ k.jsx(zf, {}) : d.mime.includes("image") ? /* @__PURE__ */ k.jsx(Mf, {}) : /* @__PURE__ */ k.jsx(qv, {})
          },
          m
        ))
      }
    ),
    /* @__PURE__ */ k.jsxs(
      Dt,
      {
        direction: "row",
        spacing: 1,
        alignItems: "center",
        sx: { p: 1 },
        children: [
          /* @__PURE__ */ k.jsx(
            aT,
            {
              onAddUpload: (d) => l({
                name: d.name,
                type: d.type,
                mime: d.mime,
                data: d.data
              })
            }
          ),
          /* @__PURE__ */ k.jsx(
            IP,
            {
              value: r.content,
              onChange: (d) => o((m) => ({ ...m, content: d.target.value })),
              placeholder: "Type your message...",
              multiline: !0,
              fullWidth: !0,
              minRows: 1,
              maxRows: 4,
              variant: "outlined",
              disabled: !e.api.online,
              onKeyDown: (d) => {
                d.key === "Enter" && !d.shiftKey && (d.preventDefault(), c());
              }
            }
          ),
          n && /* @__PURE__ */ k.jsx(
            uT,
            {
              onAddAudio: (d) => l({
                name: d.name,
                type: d.type,
                mime: d.mime,
                data: d.data
              })
            }
          ),
          /* @__PURE__ */ k.jsx(
            Xi,
            {
              onClick: c,
              disabled: !e.api.online || e.api.typing || !r.content && ((f = r.uploads) == null ? void 0 : f.length) === 0,
              children: /* @__PURE__ */ k.jsx(sT, {})
            }
          )
        ]
      }
    )
  ] });
}
const dT = () => {
  const [e] = lr(), [t, n] = x.useState(window.innerWidth > 768), [r, o] = x.useState(!1), i = x.useRef(null), s = x.useCallback(
    () => n((f) => !f),
    []
  ), l = x.useCallback(() => {
    var f;
    r ? (f = i.current) == null || f.pause() : i.current && i.current.readyState >= 2 && i.current.play(), o((d) => !d);
  }, [r]), { backgroundColor: a, foregroundColor: u } = e.config.ui || {}, { avatar: c } = e.config.assistant || {};
  return /* @__PURE__ */ k.jsxs(Vn, { sx: { display: "flex", position: "relative" }, children: [
    /* @__PURE__ */ k.jsx(
      wE,
      {
        variant: "persistent",
        open: t,
        anchor: "left",
        sx: {
          position: "relative",
          "& .MuiDrawer-paper": {
            overflow: "hidden",
            position: "relative",
            width: t ? "200px" : 0,
            bgcolor: a,
            color: u
          }
        },
        children: t && /* @__PURE__ */ k.jsxs(
          Dt,
          {
            spacing: 2,
            direction: "column",
            sx: {
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            },
            children: [
              /* @__PURE__ */ k.jsxs(
                Vn,
                {
                  sx: {
                    width: 120,
                    height: 120,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    bgcolor: "background.default",
                    marginBottom: 2
                  },
                  children: [
                    c != null && c.liveUrl ? /* @__PURE__ */ k.jsx(
                      Vn,
                      {
                        component: "img",
                        src: c.liveUrl,
                        alt: "Avatar",
                        sx: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: r ? "none" : "block"
                        }
                      }
                    ) : /* @__PURE__ */ k.jsx(
                      $v,
                      {
                        sx: {
                          width: "100%",
                          height: "100%",
                          fontSize: 64,
                          bgcolor: "primary.main"
                        },
                        children: "AI"
                      }
                    ),
                    /* @__PURE__ */ k.jsx(
                      Vn,
                      {
                        component: "video",
                        ref: i,
                        src: c == null ? void 0 : c.videoUrl,
                        onEnded: () => o(!1),
                        sx: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: r ? "block" : "none"
                        },
                        children: /* @__PURE__ */ k.jsx(
                          "track",
                          {
                            kind: "captions",
                            srcLang: "en",
                            label: "English"
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ k.jsx(
                Kc,
                {
                  variant: "outlined",
                  onClick: l,
                  children: r ? "Pause Video" : "Play Video"
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ k.jsx(
      Xi,
      {
        sx: {
          borderRadius: 0,
          width: 2,
          color: u,
          bgcolor: a
        },
        onClick: s,
        children: t ? /* @__PURE__ */ k.jsx(eT, {}) : /* @__PURE__ */ k.jsx(tT, {})
      }
    )
  ] });
}, fT = it.memo(dT);
function Af() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let Fr = Af();
function Xv(e) {
  Fr = e;
}
const wi = { exec: () => null };
function me(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const r = {
    replace: (o, i) => {
      let s = typeof i == "string" ? i : i.source;
      return s = s.replace(st.caret, "$1"), n = n.replace(o, s), r;
    },
    getRegex: () => new RegExp(n, t)
  };
  return r;
}
const st = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
  htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, pT = /^(?:[ \t]*(?:\n|$))+/, hT = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, mT = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ls = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, gT = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Yv = /(?:[*+-]|\d{1,9}[.)])/, Zv = me(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Yv).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Of = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, vT = /^[^\n]+/, Nf = /(?!\s*\])(?:\\.|[^\[\]\\])+/, yT = me(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Nf).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), xT = me(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Yv).getRegex(), Ua = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Lf = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, bT = me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Lf).replace("tag", Ua).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Jv = me(Of).replace("hr", ls).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ua).getRegex(), kT = me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Jv).getRegex(), jf = {
  blockquote: kT,
  code: hT,
  def: yT,
  fences: mT,
  heading: gT,
  hr: ls,
  html: bT,
  lheading: Zv,
  list: xT,
  newline: pT,
  paragraph: Jv,
  table: wi,
  text: vT
}, xm = me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ls).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ua).getRegex(), wT = {
  ...jf,
  table: xm,
  paragraph: me(Of).replace("hr", ls).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", xm).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ua).getRegex()
}, CT = {
  ...jf,
  html: me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Lf).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: wi,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: me(Of).replace("hr", ls).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Zv).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, ey = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, ST = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ty = /^( {2,}|\\)\n(?!\s*$)/, RT = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Wa = /[\p{P}\p{S}]/u, Ff = /[\s\p{P}\p{S}]/u, ny = /[^\s\p{P}\p{S}]/u, ET = me(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ff).getRegex(), $T = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, PT = me(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, "u").replace(/punct/g, Wa).getRegex(), TT = me("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, ny).replace(/punctSpace/g, Ff).replace(/punct/g, Wa).getRegex(), _T = me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ny).replace(/punctSpace/g, Ff).replace(/punct/g, Wa).getRegex(), IT = me(/\\(punct)/, "gu").replace(/punct/g, Wa).getRegex(), MT = me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), zT = me(Lf).replace("(?:-->|$)", "-->").getRegex(), AT = me("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", zT).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Il = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, OT = me(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Il).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ry = me(/^!?\[(label)\]\[(ref)\]/).replace("label", Il).replace("ref", Nf).getRegex(), oy = me(/^!?\[(ref)\](?:\[\])?/).replace("ref", Nf).getRegex(), NT = me("reflink|nolink(?!\\()", "g").replace("reflink", ry).replace("nolink", oy).getRegex(), Df = {
  _backpedal: wi,
  // only used for GFM url
  anyPunctuation: IT,
  autolink: MT,
  blockSkip: $T,
  br: ty,
  code: ST,
  del: wi,
  emStrongLDelim: PT,
  emStrongRDelimAst: TT,
  emStrongRDelimUnd: _T,
  escape: ey,
  link: OT,
  nolink: oy,
  punctuation: ET,
  reflink: ry,
  reflinkSearch: NT,
  tag: AT,
  text: RT,
  url: wi
}, LT = {
  ...Df,
  link: me(/^!?\[(label)\]\((.*?)\)/).replace("label", Il).getRegex(),
  reflink: me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Il).getRegex()
}, Qc = {
  ...Df,
  escape: me(ey).replace("])", "~|])").getRegex(),
  url: me(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, jT = {
  ...Qc,
  br: me(ty).replace("{2,}", "*").getRegex(),
  text: me(Qc.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Ms = {
  normal: jf,
  gfm: wT,
  pedantic: CT
}, ei = {
  normal: Df,
  gfm: Qc,
  breaks: jT,
  pedantic: LT
}, FT = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, bm = (e) => FT[e];
function an(e, t) {
  if (t) {
    if (st.escapeTest.test(e))
      return e.replace(st.escapeReplace, bm);
  } else if (st.escapeTestNoEncode.test(e))
    return e.replace(st.escapeReplaceNoEncode, bm);
  return e;
}
function km(e) {
  try {
    e = encodeURI(e).replace(st.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function wm(e, t) {
  var i;
  const n = e.replace(st.findPipe, (s, l, a) => {
    let u = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), r = n.split(st.splitPipe);
  let o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !((i = r.at(-1)) != null && i.trim()) && r.pop(), t)
    if (r.length > t)
      r.splice(t);
    else
      for (; r.length < t; )
        r.push("");
  for (; o < r.length; o++)
    r[o] = r[o].trim().replace(st.slashPipe, "|");
  return r;
}
function ti(e, t, n) {
  const r = e.length;
  if (r === 0)
    return "";
  let o = 0;
  for (; o < r; ) {
    const i = e.charAt(r - o - 1);
    if (i === t && !n)
      o++;
    else if (i !== t && n)
      o++;
    else
      break;
  }
  return e.slice(0, r - o);
}
function DT(e, t) {
  if (e.indexOf(t[1]) === -1)
    return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    if (e[r] === "\\")
      r++;
    else if (e[r] === t[0])
      n++;
    else if (e[r] === t[1] && (n--, n < 0))
      return r;
  return -1;
}
function Cm(e, t, n, r, o) {
  const i = t.href, s = t.title || null, l = e[1].replace(o.other.outputLinkReplace, "$1");
  if (e[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const a = {
      type: "link",
      raw: n,
      href: i,
      title: s,
      text: l,
      tokens: r.inlineTokens(l)
    };
    return r.state.inLink = !1, a;
  }
  return {
    type: "image",
    raw: n,
    href: i,
    title: s,
    text: l
  };
}
function BT(e, t, n) {
  const r = e.match(n.other.indentCodeCompensation);
  if (r === null)
    return t;
  const o = r[1];
  return t.split(`
`).map((i) => {
    const s = i.match(n.other.beginningSpace);
    if (s === null)
      return i;
    const [l] = s;
    return l.length >= o.length ? i.slice(o.length) : i;
  }).join(`
`);
}
class Ml {
  // set by the lexer
  constructor(t) {
    ie(this, "options");
    ie(this, "rules");
    // set by the lexer
    ie(this, "lexer");
    this.options = t || Fr;
  }
  space(t) {
    const n = this.rules.block.newline.exec(t);
    if (n && n[0].length > 0)
      return {
        type: "space",
        raw: n[0]
      };
  }
  code(t) {
    const n = this.rules.block.code.exec(t);
    if (n) {
      const r = n[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : ti(r, `
`)
      };
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const r = n[0], o = BT(r, n[3] || "", this.rules);
      return {
        type: "code",
        raw: r,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
        text: o
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let r = n[2].trim();
      if (this.rules.other.endingHash.test(r)) {
        const o = ti(r, "#");
        (this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (r = o.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t);
    if (n)
      return {
        type: "hr",
        raw: ti(n[0], `
`)
      };
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      let r = ti(n[0], `
`).split(`
`), o = "", i = "";
      const s = [];
      for (; r.length > 0; ) {
        let l = !1;
        const a = [];
        let u;
        for (u = 0; u < r.length; u++)
          if (this.rules.other.blockquoteStart.test(r[u]))
            a.push(r[u]), l = !0;
          else if (!l)
            a.push(r[u]);
          else
            break;
        r = r.slice(u);
        const c = a.join(`
`), f = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        o = o ? `${o}
${c}` : c, i = i ? `${i}
${f}` : f;
        const d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(f, s, !0), this.lexer.state.top = d, r.length === 0)
          break;
        const m = s.at(-1);
        if ((m == null ? void 0 : m.type) === "code")
          break;
        if ((m == null ? void 0 : m.type) === "blockquote") {
          const v = m, y = v.raw + `
` + r.join(`
`), R = this.blockquote(y);
          s[s.length - 1] = R, o = o.substring(0, o.length - v.raw.length) + R.raw, i = i.substring(0, i.length - v.text.length) + R.text;
          break;
        } else if ((m == null ? void 0 : m.type) === "list") {
          const v = m, y = v.raw + `
` + r.join(`
`), R = this.list(y);
          s[s.length - 1] = R, o = o.substring(0, o.length - m.raw.length) + R.raw, i = i.substring(0, i.length - v.raw.length) + R.raw, r = y.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: o,
        tokens: s,
        text: i
      };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let r = n[1].trim();
      const o = r.length > 1, i = {
        type: "list",
        raw: "",
        ordered: o,
        start: o ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = o ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = o ? r : "[*+-]");
      const s = this.rules.other.listItemRegex(r);
      let l = !1;
      for (; t; ) {
        let u = !1, c = "", f = "";
        if (!(n = s.exec(t)) || this.rules.block.hr.test(t))
          break;
        c = n[0], t = t.substring(c.length);
        let d = n[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (p) => " ".repeat(3 * p.length)), m = t.split(`
`, 1)[0], v = !d.trim(), y = 0;
        if (this.options.pedantic ? (y = 2, f = d.trimStart()) : v ? y = n[1].length + 1 : (y = n[2].search(this.rules.other.nonSpaceChar), y = y > 4 ? 1 : y, f = d.slice(y), y += n[1].length), v && this.rules.other.blankLine.test(m) && (c += m + `
`, t = t.substring(m.length + 1), u = !0), !u) {
          const p = this.rules.other.nextBulletRegex(y), g = this.rules.other.hrRegex(y), w = this.rules.other.fencesBeginRegex(y), S = this.rules.other.headingBeginRegex(y), E = this.rules.other.htmlBeginRegex(y);
          for (; t; ) {
            const C = t.split(`
`, 1)[0];
            let $;
            if (m = C, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), $ = m) : $ = m.replace(this.rules.other.tabCharGlobal, "    "), w.test(m) || S.test(m) || E.test(m) || p.test(m) || g.test(m))
              break;
            if ($.search(this.rules.other.nonSpaceChar) >= y || !m.trim())
              f += `
` + $.slice(y);
            else {
              if (v || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || w.test(d) || S.test(d) || g.test(d))
                break;
              f += `
` + m;
            }
            !v && !m.trim() && (v = !0), c += C + `
`, t = t.substring(C.length + 1), d = $.slice(y);
          }
        }
        i.loose || (l ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let R = null, h;
        this.options.gfm && (R = this.rules.other.listIsTask.exec(f), R && (h = R[0] !== "[ ] ", f = f.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: c,
          task: !!R,
          checked: h,
          loose: !1,
          text: f,
          tokens: []
        }), i.raw += c;
      }
      const a = i.items.at(-1);
      a && (a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd()), i.raw = i.raw.trimEnd();
      for (let u = 0; u < i.items.length; u++)
        if (this.lexer.state.top = !1, i.items[u].tokens = this.lexer.blockTokens(i.items[u].text, []), !i.loose) {
          const c = i.items[u].tokens.filter((d) => d.type === "space"), f = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
          i.loose = f;
        }
      if (i.loose)
        for (let u = 0; u < i.items.length; u++)
          i.items[u].loose = !0;
      return i;
    }
  }
  html(t) {
    const n = this.rules.block.html.exec(t);
    if (n)
      return {
        type: "html",
        block: !0,
        raw: n[0],
        pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
        text: n[0]
      };
  }
  def(t) {
    const n = this.rules.block.def.exec(t);
    if (n) {
      const r = n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), o = n[2] ? n[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return {
        type: "def",
        tag: r,
        raw: n[0],
        href: o,
        title: i
      };
    }
  }
  table(t) {
    var l;
    const n = this.rules.block.table.exec(t);
    if (!n || !this.rules.other.tableDelimiter.test(n[2]))
      return;
    const r = wm(n[1]), o = n[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (l = n[3]) != null && l.trim() ? n[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
      type: "table",
      raw: n[0],
      header: [],
      align: [],
      rows: []
    };
    if (r.length === o.length) {
      for (const a of o)
        this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < r.length; a++)
        s.header.push({
          text: r[a],
          tokens: this.lexer.inline(r[a]),
          header: !0,
          align: s.align[a]
        });
      for (const a of i)
        s.rows.push(wm(a, s.header.length).map((u, c) => ({
          text: u,
          tokens: this.lexer.inline(u),
          header: !1,
          align: s.align[c]
        })));
      return s;
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1])
      };
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t);
    if (n) {
      const r = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  text(t) {
    const n = this.rules.block.text.exec(t);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0])
      };
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t);
    if (n)
      return {
        type: "escape",
        raw: n[0],
        text: n[1]
      };
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t);
    if (n)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: n[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: n[0]
      };
  }
  link(t) {
    const n = this.rules.inline.link.exec(t);
    if (n) {
      const r = n[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
        if (!this.rules.other.endAngleBracket.test(r))
          return;
        const s = ti(r.slice(0, -1), "\\");
        if ((r.length - s.length) % 2 === 0)
          return;
      } else {
        const s = DT(n[2], "()");
        if (s > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + s;
          n[2] = n[2].substring(0, s), n[0] = n[0].substring(0, a).trim(), n[3] = "";
        }
      }
      let o = n[2], i = "";
      if (this.options.pedantic) {
        const s = this.rules.other.pedanticHrefTitle.exec(o);
        s && (o = s[1], i = s[3]);
      } else
        i = n[3] ? n[3].slice(1, -1) : "";
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? o = o.slice(1) : o = o.slice(1, -1)), Cm(n, {
        href: o && o.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, n[0], this.lexer, this.rules);
    }
  }
  reflink(t, n) {
    let r;
    if ((r = this.rules.inline.reflink.exec(t)) || (r = this.rules.inline.nolink.exec(t))) {
      const o = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = n[o.toLowerCase()];
      if (!i) {
        const s = r[0].charAt(0);
        return {
          type: "text",
          raw: s,
          text: s
        };
      }
      return Cm(r, i, r[0], this.lexer, this.rules);
    }
  }
  emStrong(t, n, r = "") {
    let o = this.rules.inline.emStrongLDelim.exec(t);
    if (!o || o[3] && r.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(o[1] || o[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const s = [...o[0]].length - 1;
      let l, a, u = s, c = 0;
      const f = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (f.lastIndex = 0, n = n.slice(-1 * t.length + s); (o = f.exec(n)) != null; ) {
        if (l = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !l)
          continue;
        if (a = [...l].length, o[3] || o[4]) {
          u += a;
          continue;
        } else if ((o[5] || o[6]) && s % 3 && !((s + a) % 3)) {
          c += a;
          continue;
        }
        if (u -= a, u > 0)
          continue;
        a = Math.min(a, a + u + c);
        const d = [...o[0]][0].length, m = t.slice(0, s + o.index + d + a);
        if (Math.min(s, a) % 2) {
          const y = m.slice(1, -1);
          return {
            type: "em",
            raw: m,
            text: y,
            tokens: this.lexer.inlineTokens(y)
          };
        }
        const v = m.slice(2, -2);
        return {
          type: "strong",
          raw: m,
          text: v,
          tokens: this.lexer.inlineTokens(v)
        };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let r = n[2].replace(this.rules.other.newLineCharGlobal, " ");
      const o = this.rules.other.nonSpaceChar.test(r), i = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
      return o && i && (r = r.substring(1, r.length - 1)), {
        type: "codespan",
        raw: n[0],
        text: r
      };
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t);
    if (n)
      return {
        type: "br",
        raw: n[0]
      };
  }
  del(t) {
    const n = this.rules.inline.del.exec(t);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2])
      };
  }
  autolink(t) {
    const n = this.rules.inline.autolink.exec(t);
    if (n) {
      let r, o;
      return n[2] === "@" ? (r = n[1], o = "mailto:" + r) : (r = n[1], o = r), {
        type: "link",
        raw: n[0],
        text: r,
        href: o,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(t) {
    var r;
    let n;
    if (n = this.rules.inline.url.exec(t)) {
      let o, i;
      if (n[2] === "@")
        o = n[0], i = "mailto:" + o;
      else {
        let s;
        do
          s = n[0], n[0] = ((r = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : r[0]) ?? "";
        while (s !== n[0]);
        o = n[0], n[1] === "www." ? i = "http://" + n[0] : i = n[0];
      }
      return {
        type: "link",
        raw: n[0],
        text: o,
        href: i,
        tokens: [
          {
            type: "text",
            raw: o,
            text: o
          }
        ]
      };
    }
  }
  inlineText(t) {
    const n = this.rules.inline.text.exec(t);
    if (n) {
      const r = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        escaped: r
      };
    }
  }
}
class Lt {
  constructor(t) {
    ie(this, "tokens");
    ie(this, "options");
    ie(this, "state");
    ie(this, "tokenizer");
    ie(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Fr, this.options.tokenizer = this.options.tokenizer || new Ml(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: st,
      block: Ms.normal,
      inline: ei.normal
    };
    this.options.pedantic ? (n.block = Ms.pedantic, n.inline = ei.pedantic) : this.options.gfm && (n.block = Ms.gfm, this.options.breaks ? n.inline = ei.breaks : n.inline = ei.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Ms,
      inline: ei
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new Lt(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new Lt(n).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(st.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    var o, i, s;
    for (this.options.pedantic && (t = t.replace(st.tabCharGlobal, "    ").replace(st.spaceLine, "")); t; ) {
      let l;
      if ((i = (o = this.options.extensions) == null ? void 0 : o.block) != null && i.some((u) => (l = u.call({ lexer: this }, t, n)) ? (t = t.substring(l.raw.length), n.push(l), !0) : !1))
        continue;
      if (l = this.tokenizer.space(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        l.raw.length === 1 && u !== void 0 ? u.raw += `
` : n.push(l);
        continue;
      }
      if (l = this.tokenizer.code(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.at(-1).src = u.text) : n.push(l);
        continue;
      }
      if (l = this.tokenizer.fences(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.heading(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.hr(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.blockquote(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.list(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.html(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.def(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + l.raw, u.text += `
` + l.raw, this.inlineQueue.at(-1).src = u.text) : this.tokens.links[l.tag] || (this.tokens.links[l.tag] = {
          href: l.href,
          title: l.title
        });
        continue;
      }
      if (l = this.tokenizer.table(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.lheading(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      let a = t;
      if ((s = this.options.extensions) != null && s.startBlock) {
        let u = 1 / 0;
        const c = t.slice(1);
        let f;
        this.options.extensions.startBlock.forEach((d) => {
          f = d.call({ lexer: this }, c), typeof f == "number" && f >= 0 && (u = Math.min(u, f));
        }), u < 1 / 0 && u >= 0 && (a = t.substring(0, u + 1));
      }
      if (this.state.top && (l = this.tokenizer.paragraph(a))) {
        const u = n.at(-1);
        r && (u == null ? void 0 : u.type) === "paragraph" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : n.push(l), r = a.length !== t.length, t = t.substring(l.raw.length);
        continue;
      }
      if (l = this.tokenizer.text(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : n.push(l);
        continue;
      }
      if (t) {
        const u = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else
          throw new Error(u);
      }
    }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, n = []) {
    var l, a, u;
    let r = t, o = null;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          c.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r = r.slice(0, o.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i = !1, s = "";
    for (; t; ) {
      i || (s = ""), i = !1;
      let c;
      if ((a = (l = this.options.extensions) == null ? void 0 : l.inline) != null && a.some((d) => (c = d.call({ lexer: this }, t, n)) ? (t = t.substring(c.raw.length), n.push(c), !0) : !1))
        continue;
      if (c = this.tokenizer.escape(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.tag(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.link(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(c.raw.length);
        const d = n.at(-1);
        c.type === "text" && (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : n.push(c);
        continue;
      }
      if (c = this.tokenizer.emStrong(t, r, s)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.codespan(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.br(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.del(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.autolink(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (!this.state.inLink && (c = this.tokenizer.url(t))) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      let f = t;
      if ((u = this.options.extensions) != null && u.startInline) {
        let d = 1 / 0;
        const m = t.slice(1);
        let v;
        this.options.extensions.startInline.forEach((y) => {
          v = y.call({ lexer: this }, m), typeof v == "number" && v >= 0 && (d = Math.min(d, v));
        }), d < 1 / 0 && d >= 0 && (f = t.substring(0, d + 1));
      }
      if (c = this.tokenizer.inlineText(f)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (s = c.raw.slice(-1)), i = !0;
        const d = n.at(-1);
        (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : n.push(c);
        continue;
      }
      if (t) {
        const d = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else
          throw new Error(d);
      }
    }
    return n;
  }
}
class zl {
  // set by the parser
  constructor(t) {
    ie(this, "options");
    ie(this, "parser");
    this.options = t || Fr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    var s;
    const o = (s = (n || "").match(st.notSpaceStart)) == null ? void 0 : s[0], i = t.replace(st.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + an(o) + '">' + (r ? i : an(i, !0)) + `</code></pre>
` : "<pre><code>" + (r ? i : an(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  heading({ tokens: t, depth: n }) {
    return `<h${n}>${this.parser.parseInline(t)}</h${n}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    const n = t.ordered, r = t.start;
    let o = "";
    for (let l = 0; l < t.items.length; l++) {
      const a = t.items[l];
      o += this.listitem(a);
    }
    const i = n ? "ol" : "ul", s = n && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + i + s + `>
` + o + "</" + i + `>
`;
  }
  listitem(t) {
    var r;
    let n = "";
    if (t.task) {
      const o = this.checkbox({ checked: !!t.checked });
      t.loose ? ((r = t.tokens[0]) == null ? void 0 : r.type) === "paragraph" ? (t.tokens[0].text = o + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = o + " " + an(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: o + " ",
        text: o + " ",
        escaped: !0
      }) : n += o + " ";
    }
    return n += this.parser.parse(t.tokens, !!t.loose), `<li>${n}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let n = "", r = "";
    for (let i = 0; i < t.header.length; i++)
      r += this.tablecell(t.header[i]);
    n += this.tablerow({ text: r });
    let o = "";
    for (let i = 0; i < t.rows.length; i++) {
      const s = t.rows[i];
      r = "";
      for (let l = 0; l < s.length; l++)
        r += this.tablecell(s[l]);
      o += this.tablerow({ text: r });
    }
    return o && (o = `<tbody>${o}</tbody>`), `<table>
<thead>
` + n + `</thead>
` + o + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const n = this.parser.parseInline(t.tokens), r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + n + `</${r}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${an(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    const o = this.parser.parseInline(r), i = km(t);
    if (i === null)
      return o;
    t = i;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + an(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r }) {
    const o = km(t);
    if (o === null)
      return an(r);
    t = o;
    let i = `<img src="${t}" alt="${r}"`;
    return n && (i += ` title="${an(n)}"`), i += ">", i;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : an(t.text);
  }
}
class Bf {
  // no need for block level renderers
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}
class jt {
  constructor(t) {
    ie(this, "options");
    ie(this, "renderer");
    ie(this, "textRenderer");
    this.options = t || Fr, this.options.renderer = this.options.renderer || new zl(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Bf();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new jt(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new jt(n).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, n = !0) {
    var o, i;
    let r = "";
    for (let s = 0; s < t.length; s++) {
      const l = t[s];
      if ((i = (o = this.options.extensions) == null ? void 0 : o.renderers) != null && i[l.type]) {
        const u = l, c = this.options.extensions.renderers[u.type].call({ parser: this }, u);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u.type)) {
          r += c || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "space": {
          r += this.renderer.space(a);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(a);
          continue;
        }
        case "code": {
          r += this.renderer.code(a);
          continue;
        }
        case "table": {
          r += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          r += this.renderer.list(a);
          continue;
        }
        case "html": {
          r += this.renderer.html(a);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let u = a, c = this.renderer.text(u);
          for (; s + 1 < t.length && t[s + 1].type === "text"; )
            u = t[++s], c += `
` + this.renderer.text(u);
          n ? r += this.renderer.paragraph({
            type: "paragraph",
            raw: c,
            text: c,
            tokens: [{ type: "text", raw: c, text: c, escaped: !0 }]
          }) : r += c;
          continue;
        }
        default: {
          const u = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, n = this.renderer) {
    var o, i;
    let r = "";
    for (let s = 0; s < t.length; s++) {
      const l = t[s];
      if ((i = (o = this.options.extensions) == null ? void 0 : o.renderers) != null && i[l.type]) {
        const u = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (u !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(l.type)) {
          r += u || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "escape": {
          r += n.text(a);
          break;
        }
        case "html": {
          r += n.html(a);
          break;
        }
        case "link": {
          r += n.link(a);
          break;
        }
        case "image": {
          r += n.image(a);
          break;
        }
        case "strong": {
          r += n.strong(a);
          break;
        }
        case "em": {
          r += n.em(a);
          break;
        }
        case "codespan": {
          r += n.codespan(a);
          break;
        }
        case "br": {
          r += n.br(a);
          break;
        }
        case "del": {
          r += n.del(a);
          break;
        }
        case "text": {
          r += n.text(a);
          break;
        }
        default: {
          const u = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return r;
  }
}
class Ci {
  constructor(t) {
    ie(this, "options");
    ie(this, "block");
    this.options = t || Fr;
  }
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? Lt.lex : Lt.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? jt.parse : jt.parseInline;
  }
}
ie(Ci, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class UT {
  constructor(...t) {
    ie(this, "defaults", Af());
    ie(this, "options", this.setOptions);
    ie(this, "parse", this.parseMarkdown(!0));
    ie(this, "parseInline", this.parseMarkdown(!1));
    ie(this, "Parser", jt);
    ie(this, "Renderer", zl);
    ie(this, "TextRenderer", Bf);
    ie(this, "Lexer", Lt);
    ie(this, "Tokenizer", Ml);
    ie(this, "Hooks", Ci);
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, n) {
    var o, i;
    let r = [];
    for (const s of t)
      switch (r = r.concat(n.call(this, s)), s.type) {
        case "table": {
          const l = s;
          for (const a of l.header)
            r = r.concat(this.walkTokens(a.tokens, n));
          for (const a of l.rows)
            for (const u of a)
              r = r.concat(this.walkTokens(u.tokens, n));
          break;
        }
        case "list": {
          const l = s;
          r = r.concat(this.walkTokens(l.items, n));
          break;
        }
        default: {
          const l = s;
          (i = (o = this.defaults.extensions) == null ? void 0 : o.childTokens) != null && i[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((a) => {
            const u = l[a].flat(1 / 0);
            r = r.concat(this.walkTokens(u, n));
          }) : l.tokens && (r = r.concat(this.walkTokens(l.tokens, n)));
        }
      }
    return r;
  }
  use(...t) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((r) => {
      const o = { ...r };
      if (o.async = this.defaults.async || o.async || !1, r.extensions && (r.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const s = n.renderers[i.name];
          s ? n.renderers[i.name] = function(...l) {
            let a = i.renderer.apply(this, l);
            return a === !1 && (a = s.apply(this, l)), a;
          } : n.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const s = n[i.level];
          s ? s.unshift(i.tokenizer) : n[i.level] = [i.tokenizer], i.start && (i.level === "block" ? n.startBlock ? n.startBlock.push(i.start) : n.startBlock = [i.start] : i.level === "inline" && (n.startInline ? n.startInline.push(i.start) : n.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (n.childTokens[i.name] = i.childTokens);
      }), o.extensions = n), r.renderer) {
        const i = this.defaults.renderer || new zl(this.defaults);
        for (const s in r.renderer) {
          if (!(s in i))
            throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s))
            continue;
          const l = s, a = r.renderer[l], u = i[l];
          i[l] = (...c) => {
            let f = a.apply(i, c);
            return f === !1 && (f = u.apply(i, c)), f || "";
          };
        }
        o.renderer = i;
      }
      if (r.tokenizer) {
        const i = this.defaults.tokenizer || new Ml(this.defaults);
        for (const s in r.tokenizer) {
          if (!(s in i))
            throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s))
            continue;
          const l = s, a = r.tokenizer[l], u = i[l];
          i[l] = (...c) => {
            let f = a.apply(i, c);
            return f === !1 && (f = u.apply(i, c)), f;
          };
        }
        o.tokenizer = i;
      }
      if (r.hooks) {
        const i = this.defaults.hooks || new Ci();
        for (const s in r.hooks) {
          if (!(s in i))
            throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s))
            continue;
          const l = s, a = r.hooks[l], u = i[l];
          Ci.passThroughHooks.has(s) ? i[l] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(i, c)).then((d) => u.call(i, d));
            const f = a.call(i, c);
            return u.call(i, f);
          } : i[l] = (...c) => {
            let f = a.apply(i, c);
            return f === !1 && (f = u.apply(i, c)), f;
          };
        }
        o.hooks = i;
      }
      if (r.walkTokens) {
        const i = this.defaults.walkTokens, s = r.walkTokens;
        o.walkTokens = function(l) {
          let a = [];
          return a.push(s.call(this, l)), i && (a = a.concat(i.call(this, l))), a;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, n) {
    return Lt.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return jt.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, o) => {
      const i = { ...o }, s = { ...this.defaults, ...i }, l = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === !0 && i.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      s.hooks && (s.hooks.options = s, s.hooks.block = t);
      const a = s.hooks ? s.hooks.provideLexer() : t ? Lt.lex : Lt.lexInline, u = s.hooks ? s.hooks.provideParser() : t ? jt.parse : jt.parseInline;
      if (s.async)
        return Promise.resolve(s.hooks ? s.hooks.preprocess(r) : r).then((c) => a(c, s)).then((c) => s.hooks ? s.hooks.processAllTokens(c) : c).then((c) => s.walkTokens ? Promise.all(this.walkTokens(c, s.walkTokens)).then(() => c) : c).then((c) => u(c, s)).then((c) => s.hooks ? s.hooks.postprocess(c) : c).catch(l);
      try {
        s.hooks && (r = s.hooks.preprocess(r));
        let c = a(r, s);
        s.hooks && (c = s.hooks.processAllTokens(c)), s.walkTokens && this.walkTokens(c, s.walkTokens);
        let f = u(c, s);
        return s.hooks && (f = s.hooks.postprocess(f)), f;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(t, n) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const o = "<p>An error occurred:</p><pre>" + an(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n)
        return Promise.reject(r);
      throw r;
    };
  }
}
const zr = new UT();
function de(e, t) {
  return zr.parse(e, t);
}
de.options = de.setOptions = function(e) {
  return zr.setOptions(e), de.defaults = zr.defaults, Xv(de.defaults), de;
};
de.getDefaults = Af;
de.defaults = Fr;
de.use = function(...e) {
  return zr.use(...e), de.defaults = zr.defaults, Xv(de.defaults), de;
};
de.walkTokens = function(e, t) {
  return zr.walkTokens(e, t);
};
de.parseInline = zr.parseInline;
de.Parser = jt;
de.parser = jt.parse;
de.Renderer = zl;
de.TextRenderer = Bf;
de.Lexer = Lt;
de.lexer = Lt.lex;
de.Tokenizer = Ml;
de.Hooks = Ci;
de.parse = de;
de.options;
de.setOptions;
de.use;
de.walkTokens;
de.parseInline;
jt.parse;
Lt.lex;
const WT = ({ message: e }) => {
  var d, m, v, y;
  const [t, n] = lr(), [r, o] = x.useState(!1), [i, s] = x.useState(!1), l = x.useRef(null), a = x.useRef(null), u = x.useMemo(() => t.session.chatMessages[t.session.chatMessages.length - 1] === e, [t.session.chatMessages]), c = x.useCallback(async () => {
    if (i && a.current) {
      a.current.pause(), a.current.currentTime = 0, s(!1);
      return;
    }
    o(!0);
    const R = await gb(t, e).catch((h) => {
      o(!1), n({
        type: "SET_ERROR",
        payload: h.message || "Failed to fetch voice"
      });
    });
    o(!1), R && (a.current = R, R.play(), s(!0), R.onended = () => s(!1));
  }, [t, n, i, e]), f = x.useCallback(() => {
    navigator.clipboard.writeText(e.content || "");
  }, [e.content]);
  return x.useEffect(() => {
    var R;
    u && ((R = l.current) == null || R.scrollIntoView({ behavior: "smooth" }));
  }, [t.session.chatMessages]), /* @__PURE__ */ k.jsxs(
    ar,
    {
      variant: "elevation",
      elevation: 0,
      sx: {
        maxWidth: "90%",
        alignSelf: e.role === "api" ? "flex-start" : "flex-end",
        m: 1
      },
      children: [
        e.uploads && e.uploads.length > 0 && /* @__PURE__ */ k.jsx(
          Dt,
          {
            direction: "row",
            spacing: 2,
            sx: {
              p: 2,
              overflowX: "auto",
              justifyContent: "start",
              alignItems: "center"
            },
            children: e.uploads.map((R, h) => /* @__PURE__ */ k.jsx(
              Ev,
              {
                label: R.name,
                icon: R.type === "audio" ? /* @__PURE__ */ k.jsx(zf, {}) : R.mime.includes("image") ? /* @__PURE__ */ k.jsx(Mf, {}) : /* @__PURE__ */ k.jsx(iT, {})
              },
              h
            ))
          }
        ),
        /* @__PURE__ */ k.jsx(
          Vn,
          {
            sx: {
              typography: "body2",
              color: ((d = t.config.ui) == null ? void 0 : d.foregroundColor) || "#111111",
              bgcolor: ((m = t.config.ui) == null ? void 0 : m.backgroundColor) || "#EFEFEF",
              borderRadius: 2,
              p: "2px 16px",
              minHeight: "32px",
              overflow: "auto"
            },
            ref: l,
            children: t.api.typing && u ? /* @__PURE__ */ k.jsx(
              bP,
              {
                animation: "wave",
                height: 32
              }
            ) : /* @__PURE__ */ k.jsx("div", { children: /* @__PURE__ */ k.jsx(
              "div",
              {
                dangerouslySetInnerHTML: {
                  __html: de(e.content || "")
                }
              }
            ) })
          }
        ),
        /* @__PURE__ */ k.jsxs(Vn, { sx: { display: "flex", alignItems: "center", mt: 0.5 }, children: [
          /* @__PURE__ */ k.jsx(
            ss,
            {
              variant: "caption",
              color: "textSecondary",
              children: new Date(e.timestamp || "").toLocaleString()
            }
          ),
          e.role === "api" && ((y = (v = t.config.assistant) == null ? void 0 : v.voice) == null ? void 0 : y.name) && /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
            /* @__PURE__ */ k.jsx(
              Xi,
              {
                onClick: c,
                size: "small",
                disabled: r,
                children: r ? /* @__PURE__ */ k.jsx(NR, { size: 16 }) : i ? /* @__PURE__ */ k.jsx(Qv, { fontSize: "small" }) : /* @__PURE__ */ k.jsx(lT, { fontSize: "small" })
              }
            ),
            /* @__PURE__ */ k.jsx(
              Xi,
              {
                onClick: f,
                size: "small",
                children: /* @__PURE__ */ k.jsx(oT, { fontSize: "small" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}, HT = it.memo(WT), VT = () => {
  var r, o, i, s, l, a;
  const [e] = lr(), { sidebar: t } = ((r = e == null ? void 0 : e.config) == null ? void 0 : r.ui) || {}, n = ((o = e.session) == null ? void 0 : o.chatMessages) || [];
  return /* @__PURE__ */ k.jsxs(
    Dt,
    {
      direction: "row",
      spacing: 0,
      divider: /* @__PURE__ */ k.jsx(
        bi,
        {
          orientation: "vertical",
          flexItem: !0
        }
      ),
      sx: {
        flex: 1,
        overflow: "auto",
        maxHeight: "100%",
        maxWidth: "100%",
        color: ((s = (i = e == null ? void 0 : e.config) == null ? void 0 : i.ui) == null ? void 0 : s.foregroundColor) || "#111111",
        backgroundColor: ((a = (l = e == null ? void 0 : e.config) == null ? void 0 : l.ui) == null ? void 0 : a.backgroundColorBody) || "#FFF"
      },
      children: [
        t && /* @__PURE__ */ k.jsx(fT, {}),
        /* @__PURE__ */ k.jsxs(
          Dt,
          {
            direction: "column",
            spacing: 0,
            divider: /* @__PURE__ */ k.jsx(
              bi,
              {
                orientation: "horizontal",
                flexItem: !0
              }
            ),
            sx: {
              flex: 1,
              overflow: "auto",
              maxHeight: "100%",
              maxWidth: "100%",
              minHeight: "400px",
              minWidth: "350px"
            },
            children: [
              /* @__PURE__ */ k.jsx(
                Dt,
                {
                  direction: "column",
                  spacing: 0,
                  divider: /* @__PURE__ */ k.jsx(
                    bi,
                    {
                      orientation: "horizontal",
                      sx: { opacity: 0.1 }
                    }
                  ),
                  sx: {
                    flex: 1,
                    overflow: "auto",
                    maxHeight: "100%",
                    maxWidth: "100%"
                  },
                  children: n.map((u) => /* @__PURE__ */ k.jsx(
                    HT,
                    {
                      message: u
                    },
                    u.id
                  ))
                }
              ),
              /* @__PURE__ */ k.jsx(cT, {})
            ]
          }
        )
      ]
    }
  );
}, iy = x.memo(VT), KT = () => {
  const [e] = lr(), { backgroundColor: t, foregroundColor: n } = e.config.ui || {};
  return /* @__PURE__ */ k.jsx(
    Vn,
    {
      component: "footer",
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        bgcolor: t
      },
      children: /* @__PURE__ */ k.jsxs(
        ss,
        {
          variant: "caption",
          sx: {
            color: n
          },
          children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " LLMINABOX. Made by",
            " ",
            /* @__PURE__ */ k.jsx(
              d$,
              {
                href: "https://criticalfutureglobal.com/",
                target: "_blank",
                sx: {
                  color: "primary.main",
                  textDecoration: "none"
                },
                children: "CriticalFuture"
              }
            )
          ]
        }
      )
    }
  );
}, sy = x.memo(KT), GT = () => /* @__PURE__ */ k.jsxs(
  Dt,
  {
    direction: "column",
    spacing: 0,
    divider: /* @__PURE__ */ k.jsx(
      bi,
      {
        orientation: "horizontal",
        flexItem: !0
      }
    ),
    sx: {
      height: "100%",
      width: "100%",
      minWidth: "400px",
      maxWidth: "100%",
      minHeight: "100%",
      maxHeight: "100%"
    },
    children: [
      /* @__PURE__ */ k.jsx(Gv, {}),
      /* @__PURE__ */ k.jsx(iy, {}),
      /* @__PURE__ */ k.jsx(sy, {})
    ]
  }
), qT = x.memo(GT);
var Uf = {}, QT = Lr;
Object.defineProperty(Uf, "__esModule", {
  value: !0
});
var ly = Uf.default = void 0, XT = QT(jr()), YT = k, ZT = (0, XT.default)(/* @__PURE__ */ (0, YT.jsx)("path", {
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
}), "Chat");
ly = Uf.default = ZT;
var Wf = {}, JT = Lr;
Object.defineProperty(Wf, "__esModule", {
  value: !0
});
var ay = Wf.default = void 0, e_ = JT(jr()), t_ = k, n_ = (0, e_.default)(/* @__PURE__ */ (0, t_.jsx)("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}), "KeyboardArrowDown");
ay = Wf.default = n_;
const r_ = () => {
  const [e, t] = x.useState(!1), [n, r] = x.useState(!1), [o] = lr(), i = x.useCallback(() => t((c) => !c), []), s = x.useCallback(
    () => r((c) => !c),
    []
  ), l = x.useCallback(() => t(!1), []), { backgroundColor: a, foregroundColor: u } = o.config.ui;
  return /* @__PURE__ */ k.jsxs(
    Vn,
    {
      sx: {
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
        gap: 2
      },
      children: [
        e && /* @__PURE__ */ k.jsxs(
          Dt,
          {
            direction: "column",
            spacing: 0,
            divider: /* @__PURE__ */ k.jsx(
              bi,
              {
                orientation: "horizontal",
                flexItem: !0
              }
            ),
            sx: {
              border: 1,
              borderRadius: 2,
              overflow: "hidden",
              position: n ? "fixed" : "static",
              bottom: n ? "50%" : 0,
              right: n ? "50%" : 0,
              transform: n ? "translate(50%, 50%)" : "none",
              minWidth: n ? "80vw" : "500px",
              maxWidth: n ? "90vw" : "600px",
              minHeight: n ? "80vh" : "500px",
              maxHeight: n ? "90vh" : "600px"
            },
            children: [
              /* @__PURE__ */ k.jsx(
                Gv,
                {
                  onClose: l,
                  onToggleFullscreen: s,
                  isFullscreen: n
                }
              ),
              /* @__PURE__ */ k.jsx(iy, {}),
              /* @__PURE__ */ k.jsx(sy, {})
            ]
          }
        ),
        /* @__PURE__ */ k.jsx(
          go,
          {
            onClick: i,
            sx: {
              bgcolor: a,
              color: u,
              "&:hover": {
                color: a,
                bgcolor: u
              }
            },
            children: e ? /* @__PURE__ */ k.jsx(ay, {}) : /* @__PURE__ */ k.jsx(ly, {})
          }
        )
      ]
    }
  );
}, o_ = it.memo(r_);
let Si = null;
function s_() {
  Si && (Si.unmount(), Si = null);
}
function l_(e = {}) {
  const t = document.getElementById("llminabox-full");
  if (t)
    t.style.display = "block", t.style.width = "100%", t.style.height = "100%", Sm(t, qT, e);
  else {
    const n = document.createElement("div");
    n.id = "llminabox-bubble", document.body.appendChild(n), Sm(n, o_, e);
  }
}
function Sm(e, t, n) {
  Si = Au.createRoot(e), Si.render(
    /* @__PURE__ */ k.jsxs(Pb, { config: n, children: [
      /* @__PURE__ */ k.jsx(GC, {}),
      /* @__PURE__ */ k.jsx(t, {})
    ] })
  );
}
export {
  s_ as destroyChatbot,
  l_ as initChatbot
};
