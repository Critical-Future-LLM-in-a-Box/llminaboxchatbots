var od = Object.defineProperty;
var na = (e) => {
  throw TypeError(e);
};
var id = (e, t, n) => t in e ? od(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var be = (e, t, n) => id(e, typeof t != "symbol" ? t + "" : t, n), ra = (e, t, n) => t.has(e) || na("Cannot " + n);
var vn = (e, t, n) => (ra(e, t, "read from private field"), n ? n.call(e) : t.get(e)), oa = (e, t, n) => t.has(e) ? na("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ia = (e, t, n, r) => (ra(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import * as x from "react";
import Ze, { useMemo as Hr, useReducer as sd, createContext as Yi, useContext as Bn, useEffect as _n, forwardRef as ad, createElement as Ut, Fragment as Xi, useRef as Gr, Children as ld, isValidElement as Dr, cloneElement as zr, memo as ho, useCallback as Mt, useState as Ke } from "react";
import * as Yl from "react-dom";
import rr from "react-dom";
function Xl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function cd(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var wi = { exports: {} }, Hn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa;
function ud() {
  if (sa) return Hn;
  sa = 1;
  var e = Ze, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, f = {}, p = null, g = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (d in c) r.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: p, ref: g, props: f, _owner: i.current };
  }
  return Hn.Fragment = n, Hn.jsx = a, Hn.jsxs = a, Hn;
}
var Gn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa;
function dd() {
  return aa || (aa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ze, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = Symbol.iterator, m = "@@iterator";
    function v(T) {
      if (T === null || typeof T != "object")
        return null;
      var D = b && T[b] || T[m];
      return typeof D == "function" ? D : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(T) {
      {
        for (var D = arguments.length, J = new Array(D > 1 ? D - 1 : 0), ce = 1; ce < D; ce++)
          J[ce - 1] = arguments[ce];
        C("error", T, J);
      }
    }
    function C(T, D, J) {
      {
        var ce = w.ReactDebugCurrentFrame, Te = ce.getStackAddendum();
        Te !== "" && (D += "%s", J = J.concat([Te]));
        var $e = J.map(function(ge) {
          return String(ge);
        });
        $e.unshift("Warning: " + D), Function.prototype.apply.call(console[T], console, $e);
      }
    }
    var R = !1, E = !1, $ = !1, k = !1, _ = !1, z;
    z = Symbol.for("react.module.reference");
    function P(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === r || T === s || _ || T === i || T === u || T === d || k || T === g || R || E || $ || typeof T == "object" && T !== null && (T.$$typeof === p || T.$$typeof === f || T.$$typeof === a || T.$$typeof === l || T.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === z || T.getModuleId !== void 0));
    }
    function F(T, D, J) {
      var ce = T.displayName;
      if (ce)
        return ce;
      var Te = D.displayName || D.name || "";
      return Te !== "" ? J + "(" + Te + ")" : J;
    }
    function K(T) {
      return T.displayName || "Context";
    }
    function B(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case l:
            var D = T;
            return K(D) + ".Consumer";
          case a:
            var J = T;
            return K(J._context) + ".Provider";
          case c:
            return F(T, T.render, "ForwardRef");
          case f:
            var ce = T.displayName || null;
            return ce !== null ? ce : B(T.type) || "Memo";
          case p: {
            var Te = T, $e = Te._payload, ge = Te._init;
            try {
              return B(ge($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, j = 0, H, L, V, Q, S, N, U;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function W() {
      {
        if (j === 0) {
          H = console.log, L = console.info, V = console.warn, Q = console.error, S = console.group, N = console.groupCollapsed, U = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        j++;
      }
    }
    function q() {
      {
        if (j--, j === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, T, {
              value: H
            }),
            info: I({}, T, {
              value: L
            }),
            warn: I({}, T, {
              value: V
            }),
            error: I({}, T, {
              value: Q
            }),
            group: I({}, T, {
              value: S
            }),
            groupCollapsed: I({}, T, {
              value: N
            }),
            groupEnd: I({}, T, {
              value: U
            })
          });
        }
        j < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = w.ReactCurrentDispatcher, oe;
    function se(T, D, J) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (Te) {
            var ce = Te.stack.trim().match(/\n( *(at )?)/);
            oe = ce && ce[1] || "";
          }
        return `
` + oe + T;
      }
    }
    var ne = !1, ae;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new re();
    }
    function M(T, D) {
      if (!T || ne)
        return "";
      {
        var J = ae.get(T);
        if (J !== void 0)
          return J;
      }
      var ce;
      ne = !0;
      var Te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = Y.current, Y.current = null, W();
      try {
        if (D) {
          var ge = function() {
            throw Error();
          };
          if (Object.defineProperty(ge.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ge, []);
            } catch (Nt) {
              ce = Nt;
            }
            Reflect.construct(T, [], ge);
          } else {
            try {
              ge.call();
            } catch (Nt) {
              ce = Nt;
            }
            T.call(ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Nt) {
            ce = Nt;
          }
          T();
        }
      } catch (Nt) {
        if (Nt && ce && typeof Nt.stack == "string") {
          for (var me = Nt.stack.split(`
`), Qe = ce.stack.split(`
`), ze = me.length - 1, Le = Qe.length - 1; ze >= 1 && Le >= 0 && me[ze] !== Qe[Le]; )
            Le--;
          for (; ze >= 1 && Le >= 0; ze--, Le--)
            if (me[ze] !== Qe[Le]) {
              if (ze !== 1 || Le !== 1)
                do
                  if (ze--, Le--, Le < 0 || me[ze] !== Qe[Le]) {
                    var mt = `
` + me[ze].replace(" at new ", " at ");
                    return T.displayName && mt.includes("<anonymous>") && (mt = mt.replace("<anonymous>", T.displayName)), typeof T == "function" && ae.set(T, mt), mt;
                  }
                while (ze >= 1 && Le >= 0);
              break;
            }
        }
      } finally {
        ne = !1, Y.current = $e, q(), Error.prepareStackTrace = Te;
      }
      var yn = T ? T.displayName || T.name : "", ta = yn ? se(yn) : "";
      return typeof T == "function" && ae.set(T, ta), ta;
    }
    function Pe(T, D, J) {
      return M(T, !1);
    }
    function Z(T) {
      var D = T.prototype;
      return !!(D && D.isReactComponent);
    }
    function Ie(T, D, J) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return M(T, Z(T));
      if (typeof T == "string")
        return se(T);
      switch (T) {
        case u:
          return se("Suspense");
        case d:
          return se("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case c:
            return Pe(T.render);
          case f:
            return Ie(T.type, D, J);
          case p: {
            var ce = T, Te = ce._payload, $e = ce._init;
            try {
              return Ie($e(Te), D, J);
            } catch {
            }
          }
        }
      return "";
    }
    var qe = Object.prototype.hasOwnProperty, _e = {}, Tt = w.ReactDebugCurrentFrame;
    function kt(T) {
      if (T) {
        var D = T._owner, J = Ie(T.type, T._source, D ? D.type : null);
        Tt.setExtraStackFrame(J);
      } else
        Tt.setExtraStackFrame(null);
    }
    function Ye(T, D, J, ce, Te) {
      {
        var $e = Function.call.bind(qe);
        for (var ge in T)
          if ($e(T, ge)) {
            var me = void 0;
            try {
              if (typeof T[ge] != "function") {
                var Qe = Error((ce || "React class") + ": " + J + " type `" + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Qe.name = "Invariant Violation", Qe;
              }
              me = T[ge](D, ge, ce, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ze) {
              me = ze;
            }
            me && !(me instanceof Error) && (kt(Te), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", J, ge, typeof me), kt(null)), me instanceof Error && !(me.message in _e) && (_e[me.message] = !0, kt(Te), O("Failed %s type: %s", J, me.message), kt(null));
          }
      }
    }
    var We = Array.isArray;
    function ft(T) {
      return We(T);
    }
    function it(T) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, J = D && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return J;
      }
    }
    function st(T) {
      try {
        return at(T), !1;
      } catch {
        return !0;
      }
    }
    function at(T) {
      return "" + T;
    }
    function Ct(T) {
      if (st(T))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(T)), at(T);
    }
    var Je = w.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, ht, ie;
    ie = {};
    function he(T) {
      if (qe.call(T, "ref")) {
        var D = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function De(T) {
      if (qe.call(T, "key")) {
        var D = Object.getOwnPropertyDescriptor(T, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Ot(T, D) {
      if (typeof T.ref == "string" && Je.current && D && Je.current.stateNode !== D) {
        var J = B(Je.current.type);
        ie[J] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Je.current.type), T.ref), ie[J] = !0);
      }
    }
    function Or(T, D) {
      {
        var J = function() {
          le || (le = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        J.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function Gu(T, D) {
      {
        var J = function() {
          ht || (ht = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        J.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Ku = function(T, D, J, ce, Te, $e, ge) {
      var me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: T,
        key: D,
        ref: J,
        props: ge,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return me._store = {}, Object.defineProperty(me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.freeze && (Object.freeze(me.props), Object.freeze(me)), me;
    };
    function Yu(T, D, J, ce, Te) {
      {
        var $e, ge = {}, me = null, Qe = null;
        J !== void 0 && (Ct(J), me = "" + J), De(D) && (Ct(D.key), me = "" + D.key), he(D) && (Qe = D.ref, Ot(D, Te));
        for ($e in D)
          qe.call(D, $e) && !ve.hasOwnProperty($e) && (ge[$e] = D[$e]);
        if (T && T.defaultProps) {
          var ze = T.defaultProps;
          for ($e in ze)
            ge[$e] === void 0 && (ge[$e] = ze[$e]);
        }
        if (me || Qe) {
          var Le = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          me && Or(ge, Le), Qe && Gu(ge, Le);
        }
        return Ku(T, me, Qe, Te, ce, Je.current, ge);
      }
    }
    var ei = w.ReactCurrentOwner, Ys = w.ReactDebugCurrentFrame;
    function bn(T) {
      if (T) {
        var D = T._owner, J = Ie(T.type, T._source, D ? D.type : null);
        Ys.setExtraStackFrame(J);
      } else
        Ys.setExtraStackFrame(null);
    }
    var ti;
    ti = !1;
    function ni(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function Xs() {
      {
        if (ei.current) {
          var T = B(ei.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Xu(T) {
      return "";
    }
    var Zs = {};
    function Zu(T) {
      {
        var D = Xs();
        if (!D) {
          var J = typeof T == "string" ? T : T.displayName || T.name;
          J && (D = `

Check the top-level render call using <` + J + ">.");
        }
        return D;
      }
    }
    function Js(T, D) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var J = Zu(D);
        if (Zs[J])
          return;
        Zs[J] = !0;
        var ce = "";
        T && T._owner && T._owner !== ei.current && (ce = " It was passed a child from " + B(T._owner.type) + "."), bn(T), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, ce), bn(null);
      }
    }
    function Qs(T, D) {
      {
        if (typeof T != "object")
          return;
        if (ft(T))
          for (var J = 0; J < T.length; J++) {
            var ce = T[J];
            ni(ce) && Js(ce, D);
          }
        else if (ni(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Te = v(T);
          if (typeof Te == "function" && Te !== T.entries)
            for (var $e = Te.call(T), ge; !(ge = $e.next()).done; )
              ni(ge.value) && Js(ge.value, D);
        }
      }
    }
    function Ju(T) {
      {
        var D = T.type;
        if (D == null || typeof D == "string")
          return;
        var J;
        if (typeof D == "function")
          J = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === f))
          J = D.propTypes;
        else
          return;
        if (J) {
          var ce = B(D);
          Ye(J, T.props, "prop", ce, T);
        } else if (D.PropTypes !== void 0 && !ti) {
          ti = !0;
          var Te = B(D);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Te || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qu(T) {
      {
        for (var D = Object.keys(T.props), J = 0; J < D.length; J++) {
          var ce = D[J];
          if (ce !== "children" && ce !== "key") {
            bn(T), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), bn(null);
            break;
          }
        }
        T.ref !== null && (bn(T), O("Invalid attribute `ref` supplied to `React.Fragment`."), bn(null));
      }
    }
    function ea(T, D, J, ce, Te, $e) {
      {
        var ge = P(T);
        if (!ge) {
          var me = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Qe = Xu();
          Qe ? me += Qe : me += Xs();
          var ze;
          T === null ? ze = "null" : ft(T) ? ze = "array" : T !== void 0 && T.$$typeof === t ? (ze = "<" + (B(T.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof T, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, me);
        }
        var Le = Yu(T, D, J, Te, $e);
        if (Le == null)
          return Le;
        if (ge) {
          var mt = D.children;
          if (mt !== void 0)
            if (ce)
              if (ft(mt)) {
                for (var yn = 0; yn < mt.length; yn++)
                  Qs(mt[yn], T);
                Object.freeze && Object.freeze(mt);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qs(mt, T);
        }
        return T === r ? Qu(Le) : Ju(Le), Le;
      }
    }
    function ed(T, D, J) {
      return ea(T, D, J, !0);
    }
    function td(T, D, J) {
      return ea(T, D, J, !1);
    }
    var nd = td, rd = ed;
    Gn.Fragment = r, Gn.jsx = nd, Gn.jsxs = rd;
  }()), Gn;
}
process.env.NODE_ENV === "production" ? wi.exports = ud() : wi.exports = dd();
var y = wi.exports, or = {}, Kn = rr;
if (process.env.NODE_ENV === "production")
  or.createRoot = Kn.createRoot, or.hydrateRoot = Kn.hydrateRoot;
else {
  var Sr = Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  or.createRoot = function(e, t) {
    Sr.usingClientEntryPoint = !0;
    try {
      return Kn.createRoot(e, t);
    } finally {
      Sr.usingClientEntryPoint = !1;
    }
  }, or.hydrateRoot = function(e, t, n) {
    Sr.usingClientEntryPoint = !0;
    try {
      return Kn.hydrateRoot(e, t, n);
    } finally {
      Sr.usingClientEntryPoint = !1;
    }
  };
}
var Zl = Symbol.for("immer-nothing"), la = Symbol.for("immer-draftable"), dt = Symbol.for("immer-state"), pd = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function tt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = pd[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Pn = Object.getPrototypeOf;
function In(e) {
  return !!e && !!e[dt];
}
function nn(e) {
  var t;
  return e ? Jl(e) || Array.isArray(e) || !!e[la] || !!((t = e.constructor) != null && t[la]) || go(e) || bo(e) : !1;
}
var fd = Object.prototype.constructor.toString();
function Jl(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Pn(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === fd;
}
function Kr(e, t) {
  mo(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function mo(e) {
  const t = e[dt];
  return t ? t.type_ : Array.isArray(e) ? 1 : go(e) ? 2 : bo(e) ? 3 : 0;
}
function ki(e, t) {
  return mo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ql(e, t, n) {
  const r = mo(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function hd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function go(e) {
  return e instanceof Map;
}
function bo(e) {
  return e instanceof Set;
}
function Xt(e) {
  return e.copy_ || e.base_;
}
function Oi(e, t) {
  if (go(e))
    return new Map(e);
  if (bo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Jl(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[dt];
    let i = Reflect.ownKeys(r);
    for (let s = 0; s < i.length; s++) {
      const a = i[s], l = r[a];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (r[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[a]
      });
    }
    return Object.create(Pn(e), r);
  } else {
    const r = Pn(e);
    if (r !== null && n)
      return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function Zi(e, t = !1) {
  return yo(e) || In(e) || !nn(e) || (mo(e) > 1 && (e.set = e.add = e.clear = e.delete = md), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Zi(r, !0))), e;
}
function md() {
  tt(2);
}
function yo(e) {
  return Object.isFrozen(e);
}
var gd = {};
function rn(e) {
  const t = gd[e];
  return t || tt(0, e), t;
}
var fr;
function ec() {
  return fr;
}
function bd(e, t) {
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
function ca(e, t) {
  t && (rn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Si(e) {
  $i(e), e.drafts_.forEach(yd), e.drafts_ = null;
}
function $i(e) {
  e === fr && (fr = e.parent_);
}
function ua(e) {
  return fr = bd(fr, e);
}
function yd(e) {
  const t = e[dt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function da(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[dt].modified_ && (Si(t), tt(4)), nn(e) && (e = Yr(t, e), t.parent_ || Xr(t, e)), t.patches_ && rn("Patches").generateReplacementPatches_(
    n[dt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Yr(t, n, []), Si(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Zl ? e : void 0;
}
function Yr(e, t, n) {
  if (yo(t))
    return t;
  const r = t[dt];
  if (!r)
    return Kr(
      t,
      (i, s) => pa(e, r, t, i, s, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Xr(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let s = i, a = !1;
    r.type_ === 3 && (s = new Set(i), i.clear(), a = !0), Kr(
      s,
      (l, c) => pa(e, r, i, l, c, n, a)
    ), Xr(e, i, !1), n && e.patches_ && rn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function pa(e, t, n, r, i, s, a) {
  if (process.env.NODE_ENV !== "production" && i === n && tt(5), In(i)) {
    const l = s && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ki(t.assigned_, r) ? s.concat(r) : void 0, c = Yr(e, i, l);
    if (Ql(n, r, c), In(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && n.add(i);
  if (nn(i) && !yo(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Yr(e, i), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Xr(e, i);
  }
}
function Xr(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Zi(t, n);
}
function vd(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : ec(),
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
  let i = r, s = Ji;
  n && (i = [r], s = hr);
  const { revoke: a, proxy: l } = Proxy.revocable(i, s);
  return r.draft_ = l, r.revoke_ = a, l;
}
var Ji = {
  get(e, t) {
    if (t === dt)
      return e;
    const n = Xt(e);
    if (!ki(n, t))
      return xd(e, n, t);
    const r = n[t];
    return e.finalized_ || !nn(r) ? r : r === ri(e.base_, t) ? (oi(e), e.copy_[t] = Pi(r, e)) : r;
  },
  has(e, t) {
    return t in Xt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Xt(e));
  },
  set(e, t, n) {
    const r = tc(Xt(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = ri(Xt(e), t), s = i == null ? void 0 : i[dt];
      if (s && s.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (hd(n, i) && (n !== void 0 || ki(e.base_, t)))
        return !0;
      oi(e), _i(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return ri(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, oi(e), _i(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Xt(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    tt(11);
  },
  getPrototypeOf(e) {
    return Pn(e.base_);
  },
  setPrototypeOf() {
    tt(12);
  }
}, hr = {};
Kr(Ji, (e, t) => {
  hr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
hr.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && tt(13), hr.set.call(this, e, t, void 0);
};
hr.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && tt(14), Ji.set.call(this, e[0], t, n, e[0]);
};
function ri(e, t) {
  const n = e[dt];
  return (n ? Xt(n) : e)[t];
}
function xd(e, t, n) {
  var i;
  const r = tc(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = r.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function tc(e, t) {
  if (!(t in e))
    return;
  let n = Pn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Pn(n);
  }
}
function _i(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && _i(e.parent_));
}
function oi(e) {
  e.copy_ || (e.copy_ = Oi(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Ed = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const s = n;
        n = t;
        const a = this;
        return function(c = s, ...u) {
          return a.produce(c, (d) => n.call(this, d, ...u));
        };
      }
      typeof n != "function" && tt(6), r !== void 0 && typeof r != "function" && tt(7);
      let i;
      if (nn(t)) {
        const s = ua(this), a = Pi(t, void 0);
        let l = !0;
        try {
          i = n(a), l = !1;
        } finally {
          l ? Si(s) : $i(s);
        }
        return ca(s, r), da(i, s);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === Zl && (i = void 0), this.autoFreeze_ && Zi(i, !0), r) {
          const s = [], a = [];
          rn("Patches").generateReplacementPatches_(t, i, s, a), r(s, a);
        }
        return i;
      } else
        tt(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (a, ...l) => this.produceWithPatches(a, (c) => t(c, ...l));
      let r, i;
      return [this.produce(t, n, (a, l) => {
        r = a, i = l;
      }), r, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    nn(e) || tt(8), In(e) && (e = Td(e));
    const t = ua(this), n = Pi(e, void 0);
    return n[dt].isManual_ = !0, $i(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[dt];
    (!n || !n.isManual_) && tt(9);
    const { scope_: r } = n;
    return ca(r, t), da(void 0, r);
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
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = rn("Patches").applyPatches_;
    return In(e) ? r(e, t) : this.produce(
      e,
      (i) => r(i, t)
    );
  }
};
function Pi(e, t) {
  const n = go(e) ? rn("MapSet").proxyMap_(e, t) : bo(e) ? rn("MapSet").proxySet_(e, t) : vd(e, t);
  return (t ? t.scope_ : ec()).drafts_.push(n), n;
}
function Td(e) {
  return In(e) || tt(10, e), nc(e);
}
function nc(e) {
  if (!nn(e) || yo(e))
    return e;
  const t = e[dt];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Oi(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Oi(e, !0);
  return Kr(n, (r, i) => {
    Ql(n, r, nc(i));
  }), t && (t.finalized_ = !1), n;
}
var pt = new Ed(), Cd = pt.produce;
pt.produceWithPatches.bind(
  pt
);
pt.setAutoFreeze.bind(pt);
pt.setUseStrictShallowCopy.bind(pt);
pt.applyPatches.bind(pt);
pt.createDraft.bind(pt);
pt.finishDraft.bind(pt);
function Rd(e, t, n) {
  var r = Hr(function() {
    return Cd(e);
  }, [e]);
  return sd(r, t, n);
}
const fa = {
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
      sidebar: !0,
      foregroundColor: "#000000",
      backgroundColor: "#FFFFFF",
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
}, wd = {
  apiHost: "https://llminabox.criticalfutureglobal.com",
  chatflowId: "e89d6572-be23-4709-a1f5-ab2aaada13cd",
  assistant: {
    name: "Ai Assistant",
    description: "Critical Future Chatbot Assistant",
    welcomeMessage: "Hello! How can I assist you today?",
    voice: {
      name: "en-GB-SoniaNeural",
      apiHost: "https://tts.criticalfutureglobal.com/get_tts",
      apiKey: "G7x9mVt2Q5bK8Jp4S1Zc"
    },
    avatar: {
      staticUrl: "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/refs/heads/main/Avatars/mai/mai.png",
      liveUrl: "https://raw.githubusercontent.com/Critical-Future-LLM-in-a-Box/llminaboxchatbots/refs/heads/main/Avatars/mai/mai.gif",
      videoUrl: "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/mai/mai.mp4"
    }
  },
  ui: {
    sidebar: !0,
    foregroundColor: "#000000",
    backgroundColor: "#F8F8FF",
    width: "100%",
    height: "100%"
  },
  onRequest: (e) => {
    console.log("Request: ", e);
  },
  onResponse: (e) => {
    console.log("Response: ", e);
  }
};
var kd = function(t) {
  return Od(t) && !Sd(t);
};
function Od(e) {
  return !!e && typeof e == "object";
}
function Sd(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Pd(e);
}
var $d = typeof Symbol == "function" && Symbol.for, _d = $d ? Symbol.for("react.element") : 60103;
function Pd(e) {
  return e.$$typeof === _d;
}
function Id(e) {
  return Array.isArray(e) ? [] : {};
}
function mr(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Nn(Id(e), e, t) : e;
}
function Nd(e, t, n) {
  return e.concat(t).map(function(r) {
    return mr(r, n);
  });
}
function jd(e, t) {
  if (!t.customMerge)
    return Nn;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Nn;
}
function Ad(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function ha(e) {
  return Object.keys(e).concat(Ad(e));
}
function rc(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Md(e, t) {
  return rc(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Dd(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && ha(e).forEach(function(i) {
    r[i] = mr(e[i], n);
  }), ha(t).forEach(function(i) {
    Md(e, i) || (rc(e, i) && n.isMergeableObject(t[i]) ? r[i] = jd(i, n)(e[i], t[i], n) : r[i] = mr(t[i], n));
  }), r;
}
function Nn(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Nd, n.isMergeableObject = n.isMergeableObject || kd, n.cloneUnlessOtherwiseSpecified = mr;
  var r = Array.isArray(t), i = Array.isArray(e), s = r === i;
  return s ? r ? n.arrayMerge(e, t, n) : Dd(e, t, n) : mr(t, n);
}
Nn.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return Nn(r, i, n);
  }, {});
};
var zd = Nn, Fd = zd;
const ii = /* @__PURE__ */ Xl(Fd), Bd = (e, t) => {
  var n;
  if (t.type === "SET_ERROR" && (e.error = t.payload), t.type === "SET_ONLINE_STATUS" && (e.api.online = t.payload), t.type === "SET_STREAMING_STATUS" && (e.api.canStream = t.payload), t.type === "SET_TYPING_STATUS" && (e.api.typing = t.payload), t.type === "SET_UPLOAD_CONFIG") {
    const {
      isApiAcceptingVoice: r,
      isApiAcceptingImage: i,
      isApiAcceptingRAGFile: s,
      isApiAcceptingFullFile: a,
      imgUploadSizeAndTypes: l,
      fileUploadSizeAndTypes: c
    } = t.payload;
    e.api.isApiAcceptingVoice = r, e.api.isApiAcceptingImage = i, e.api.isApiAcceptingRAGFile = s, e.api.isApiAcceptingFullFile = a, l && (e.api.imgUploadSizeAndTypes = l), c && (e.api.fileUploadSizeAndTypes = c);
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
}, He = [];
for (let e = 0; e < 256; ++e)
  He.push((e + 256).toString(16).slice(1));
function Ld(e, t = 0) {
  return (He[e[t + 0]] + He[e[t + 1]] + He[e[t + 2]] + He[e[t + 3]] + "-" + He[e[t + 4]] + He[e[t + 5]] + "-" + He[e[t + 6]] + He[e[t + 7]] + "-" + He[e[t + 8]] + He[e[t + 9]] + "-" + He[e[t + 10]] + He[e[t + 11]] + He[e[t + 12]] + He[e[t + 13]] + He[e[t + 14]] + He[e[t + 15]]).toLowerCase();
}
let si;
const Vd = new Uint8Array(16);
function Ud() {
  if (!si) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    si = crypto.getRandomValues.bind(crypto);
  }
  return si(Vd);
}
const Wd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ma = { randomUUID: Wd };
function ir(e, t, n) {
  if (ma.randomUUID && !t && !e)
    return ma.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || Ud)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Ld(r);
}
async function on({
  url: e,
  options: t,
  retries: n = 2,
  delay: r = 2e3,
  timeout: i = 1e4
}) {
  const s = new AbortController(), a = setTimeout(() => s.abort(), i), l = await fetch(e, {
    ...t,
    signal: s.signal
  }).catch((f) => d(f));
  l.ok || d(new Error(l.statusText)), clearTimeout(a);
  const c = l.headers.get("content-type"), u = ["json", "image", "audio", "video", "octet-stream"];
  for (const f of u)
    if (c.includes(f))
      return f === "json" ? l.json() : l.blob();
  return l.text();
  async function d(f) {
    if (clearTimeout(a), n === 0) throw f;
    return new Promise((p) => setTimeout(p, r)).then(
      () => on({ url: e, options: t, retries: n - 1, delay: r, timeout: i })
    );
  }
}
const qd = (e) => new Promise((t, n) => {
  const r = new FileReader();
  r.onloadend = () => t(r.result), r.onerror = n, r.readAsDataURL(e);
}), Hd = (e, t) => {
  const n = atob(e.split(",")[1]), r = Array.from(n).map((s) => s.charCodeAt(0)), i = new Uint8Array(r);
  return new Blob([i], { type: t });
};
async function Gd(e, t) {
  var c, u, d, f, p, g, b;
  const n = `voice-${t.id}`;
  let r = {};
  const i = localStorage.getItem("localvoices");
  if (i) {
    r = JSON.parse(i);
    const m = r[n];
    if (m) {
      const v = Hd(m, "audio/mpeg");
      return new Audio(URL.createObjectURL(v));
    }
  }
  const s = await on({
    url: `${(u = (c = e.config.assistant) == null ? void 0 : c.voice) == null ? void 0 : u.apiHost}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ((f = (d = e.config.assistant) == null ? void 0 : d.voice) == null ? void 0 : f.apiKey) || ""
      },
      body: JSON.stringify({
        text: t.content || "Hello",
        voice: ((g = (p = e.config.assistant) == null ? void 0 : p.voice) == null ? void 0 : g.name) || "",
        id: ((b = e.config.assistant) == null ? void 0 : b.name) || ""
      })
    }
  }).catch((m) => m), a = await on({
    url: s.file_url
  }).catch((m) => m), l = await qd(a);
  return r[n] = l, localStorage.setItem("localvoices", JSON.stringify(r)), new Audio(URL.createObjectURL(a));
}
var jt;
class Kd extends TransformStream {
  /** Constructs a new instance. */
  constructor(n = { allowCR: !1 }) {
    super({
      transform: (r, i) => {
        for (r = vn(this, jt) + r; ; ) {
          const s = r.indexOf(`
`), a = n.allowCR ? r.indexOf("\r") : -1;
          if (a !== -1 && a !== r.length - 1 && (s === -1 || s - 1 > a)) {
            i.enqueue(r.slice(0, a)), r = r.slice(a + 1);
            continue;
          }
          if (s === -1)
            break;
          const l = r[s - 1] === "\r" ? s - 1 : s;
          i.enqueue(r.slice(0, l)), r = r.slice(s + 1);
        }
        ia(this, jt, r);
      },
      flush: (r) => {
        if (vn(this, jt) === "")
          return;
        const i = n.allowCR && vn(this, jt).endsWith("\r") ? vn(this, jt).slice(0, -1) : vn(this, jt);
        r.enqueue(i);
      }
    });
    oa(this, jt, "");
  }
}
jt = new WeakMap();
function Yd(e) {
  let t = new TextDecoderStream(), n = new Kd({ allowCR: !0 });
  return e.pipeThrough(t).pipeThrough(n);
}
function Xd(e) {
  let n = /[:]\s*/.exec(e), r = n && n.index;
  if (r)
    return [
      e.substring(0, r),
      e.substring(r + n[0].length)
    ];
}
function ga(e, t, n) {
  e.get(t) || e.set(t, n);
}
async function* Zd(e, t) {
  if (!e.body)
    return;
  let n = Yd(e.body), r, i = n.getReader(), s;
  for (; ; ) {
    if (t && t.aborted)
      return i.cancel();
    if (r = await i.read(), r.done)
      return;
    if (!r.value) {
      s && (yield s), s = void 0;
      continue;
    }
    let [a, l] = Xd(r.value) || [];
    a && (a === "data" ? (s || (s = {}), s[a] = s[a] ? s[a] + `
` + l : l) : a === "event" ? (s || (s = {}), s[a] = l) : a === "id" ? (s || (s = {}), s[a] = +l || l) : a === "retry" && (s || (s = {}), s[a] = +l || void 0));
  }
}
async function Jd(e, t) {
  let n = new Request(e, t);
  ga(n.headers, "Accept", "text/event-stream"), ga(n.headers, "Content-Type", "application/json");
  let r = await fetch(n);
  if (!r.ok)
    throw r;
  return Zd(r, n.signal);
}
async function ba({
  chatData: e,
  userMessage: t,
  canStream: n
}) {
  const r = `${e.config.apiHost}/api/v1/prediction/${e.config.chatflowId}`;
  return n ? await Jd(r, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: t.content,
      chatId: e.session.chatId,
      streaming: !0,
      uploads: t.uploads
    })
  }).catch((s) => {
    throw new Error(s);
  }) : await on({
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
  }).catch((i) => {
    throw new Error(i);
  });
}
async function Qd(e) {
  return (await on({
    url: e.config.apiHost + "/api/v1/ping"
  }).catch((n) => n)).includes("pong");
}
async function ep(e) {
  return on({
    url: `${e.config.apiHost}/api/v1/public-chatbotConfig/${e.config.chatflowId}`
  }).catch((t) => t);
}
async function tp(e) {
  const t = `${e.config.apiHost}/api/v1/chatflows-streaming/${e.config.chatflowId}`, { isStreaming: n } = await on({
    url: t
  }).catch((r) => r);
  return n || !1;
}
class np {
  constructor() {
    be(this, "audioChunks", []);
    be(this, "stream", null);
    be(this, "mediaRecorder", null);
    be(this, "audioBlob", null);
    be(this, "startTime", 0);
    be(this, "timeRecorded", 0);
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
        var i;
        this.audioBlob = new Blob(this.audioChunks, {
          type: ((i = this.mediaRecorder) == null ? void 0 : i.mimeType) || "audio/webm"
        }), this.stream && (this.stream.getTracks().forEach((s) => s.stop()), this.stream = null), t(this.audioBlob);
      }), (r = this.mediaRecorder) == null || r.stop(), this.mediaRecorder = null;
    }).catch((t) => {
      throw new Error("Failed to stop and process recording: " + t.message);
    });
  }
}
class rp {
  constructor() {
    be(this, "stream", null);
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
const oc = Yi(null), Ht = () => {
  const e = Bn(oc);
  if (!e)
    throw new Error("useContextData must be used within a ContextProvider");
  return e;
}, op = (e) => {
  var s;
  const t = ii(fa, {
    config: ii(fa.config, e)
  });
  console.log("mergedChatData", t);
  let n = localStorage.getItem("chatData");
  if (n)
    return n = JSON.parse(n), ii(t, n || {});
  const r = ir(), i = {
    id: r,
    role: "api",
    content: ((s = t.config.assistant) == null ? void 0 : s.welcomeMessage) || "Welcome!",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
  return t.session.chatId = r, t.session.chatMessages = [i], localStorage.setItem("chatData", JSON.stringify(t)), t;
}, ip = ({
  children: e,
  config: t
}) => {
  const n = Hr(() => op(t), [t]), [r, i] = Rd(Bd, n);
  _n(() => {
    const a = JSON.stringify(r);
    if (localStorage.setItem("chatData", a), r.error) {
      const l = setTimeout(() => {
        i({ type: "SET_ERROR", payload: "" });
      }, 5e3);
      return () => clearTimeout(l);
    }
  }, [r]), _n(() => {
    (async () => {
      const c = await tp(r).catch((u) => {
        i({ type: "SET_ERROR", payload: u.message });
      });
      c && i({
        type: "SET_STREAMING_STATUS",
        payload: c
      }), c || i({
        type: "SET_STREAMING_STATUS",
        payload: !1
      });
    })(), (async () => {
      const c = await ep(r).catch((u) => {
        i({ type: "SET_ERROR", payload: u.message });
      });
      if (c) {
        const { uploads: u, fullFileUpload: d } = c;
        i({
          type: "SET_UPLOAD_CONFIG",
          payload: {
            isApiAcceptingVoice: u.isSpeechToTextEnabled,
            isApiAcceptingImage: u.isImageUploadAllowed,
            isApiAcceptingRAGFile: u.isRAGFileUploadAllowed,
            isApiAcceptingFullFile: d.status,
            imgUploadSizeAndTypes: u.imgUploadSizeAndTypes,
            fileUploadSizeAndTypes: u.fileUploadSizeAndTypes
          }
        });
      }
    })();
  }, []);
  const s = Hr(
    () => [r, i],
    [r, i]
  );
  return /* @__PURE__ */ y.jsx(oc.Provider, { value: s, children: e });
};
function h() {
  return h = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, h.apply(null, arguments);
}
var Ii = { exports: {} }, $r = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ya;
function sp() {
  if (ya) return Ce;
  ya = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function C(E) {
    if (typeof E == "object" && E !== null) {
      var $ = E.$$typeof;
      switch ($) {
        case t:
          switch (E = E.type, E) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case d:
                case b:
                case g:
                case a:
                  return E;
                default:
                  return $;
              }
          }
        case n:
          return $;
      }
    }
  }
  function R(E) {
    return C(E) === u;
  }
  return Ce.AsyncMode = c, Ce.ConcurrentMode = u, Ce.ContextConsumer = l, Ce.ContextProvider = a, Ce.Element = t, Ce.ForwardRef = d, Ce.Fragment = r, Ce.Lazy = b, Ce.Memo = g, Ce.Portal = n, Ce.Profiler = s, Ce.StrictMode = i, Ce.Suspense = f, Ce.isAsyncMode = function(E) {
    return R(E) || C(E) === c;
  }, Ce.isConcurrentMode = R, Ce.isContextConsumer = function(E) {
    return C(E) === l;
  }, Ce.isContextProvider = function(E) {
    return C(E) === a;
  }, Ce.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, Ce.isForwardRef = function(E) {
    return C(E) === d;
  }, Ce.isFragment = function(E) {
    return C(E) === r;
  }, Ce.isLazy = function(E) {
    return C(E) === b;
  }, Ce.isMemo = function(E) {
    return C(E) === g;
  }, Ce.isPortal = function(E) {
    return C(E) === n;
  }, Ce.isProfiler = function(E) {
    return C(E) === s;
  }, Ce.isStrictMode = function(E) {
    return C(E) === i;
  }, Ce.isSuspense = function(E) {
    return C(E) === f;
  }, Ce.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === u || E === s || E === i || E === f || E === p || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === g || E.$$typeof === a || E.$$typeof === l || E.$$typeof === d || E.$$typeof === v || E.$$typeof === w || E.$$typeof === O || E.$$typeof === m);
  }, Ce.typeOf = C, Ce;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function ap() {
  return va || (va = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function C(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === u || M === s || M === i || M === f || M === p || typeof M == "object" && M !== null && (M.$$typeof === b || M.$$typeof === g || M.$$typeof === a || M.$$typeof === l || M.$$typeof === d || M.$$typeof === v || M.$$typeof === w || M.$$typeof === O || M.$$typeof === m);
    }
    function R(M) {
      if (typeof M == "object" && M !== null) {
        var Pe = M.$$typeof;
        switch (Pe) {
          case t:
            var Z = M.type;
            switch (Z) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case f:
                return Z;
              default:
                var Ie = Z && Z.$$typeof;
                switch (Ie) {
                  case l:
                  case d:
                  case b:
                  case g:
                  case a:
                    return Ie;
                  default:
                    return Pe;
                }
            }
          case n:
            return Pe;
        }
      }
    }
    var E = c, $ = u, k = l, _ = a, z = t, P = d, F = r, K = b, B = g, I = n, j = s, H = i, L = f, V = !1;
    function Q(M) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(M) || R(M) === c;
    }
    function S(M) {
      return R(M) === u;
    }
    function N(M) {
      return R(M) === l;
    }
    function U(M) {
      return R(M) === a;
    }
    function X(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function W(M) {
      return R(M) === d;
    }
    function q(M) {
      return R(M) === r;
    }
    function Y(M) {
      return R(M) === b;
    }
    function oe(M) {
      return R(M) === g;
    }
    function se(M) {
      return R(M) === n;
    }
    function ne(M) {
      return R(M) === s;
    }
    function ae(M) {
      return R(M) === i;
    }
    function re(M) {
      return R(M) === f;
    }
    Re.AsyncMode = E, Re.ConcurrentMode = $, Re.ContextConsumer = k, Re.ContextProvider = _, Re.Element = z, Re.ForwardRef = P, Re.Fragment = F, Re.Lazy = K, Re.Memo = B, Re.Portal = I, Re.Profiler = j, Re.StrictMode = H, Re.Suspense = L, Re.isAsyncMode = Q, Re.isConcurrentMode = S, Re.isContextConsumer = N, Re.isContextProvider = U, Re.isElement = X, Re.isForwardRef = W, Re.isFragment = q, Re.isLazy = Y, Re.isMemo = oe, Re.isPortal = se, Re.isProfiler = ne, Re.isStrictMode = ae, Re.isSuspense = re, Re.isValidElementType = C, Re.typeOf = R;
  }()), Re;
}
var xa;
function Qi() {
  return xa || (xa = 1, process.env.NODE_ENV === "production" ? $r.exports = sp() : $r.exports = ap()), $r.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ai, Ea;
function lp() {
  if (Ea) return ai;
  Ea = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ai = i() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          n.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, ai;
}
var li, Ta;
function es() {
  if (Ta) return li;
  Ta = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return li = e, li;
}
var ci, Ca;
function ic() {
  return Ca || (Ca = 1, ci = Function.call.bind(Object.prototype.hasOwnProperty)), ci;
}
var ui, Ra;
function cp() {
  if (Ra) return ui;
  Ra = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = es(), n = {}, r = ic();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var f;
          try {
            if (typeof s[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ui = i, ui;
}
var di, wa;
function up() {
  if (wa) return di;
  wa = 1;
  var e = Qi(), t = lp(), n = es(), r = ic(), i = cp(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return di = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(S) {
      var N = S && (u && S[u] || S[d]);
      if (typeof N == "function")
        return N;
    }
    var p = "<<anonymous>>", g = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: O(),
      arrayOf: C,
      element: R(),
      elementType: E(),
      instanceOf: $,
      node: P(),
      objectOf: _,
      oneOf: k,
      oneOfType: z,
      shape: K,
      exact: B
    };
    function b(S, N) {
      return S === N ? S !== 0 || 1 / S === 1 / N : S !== S && N !== N;
    }
    function m(S, N) {
      this.message = S, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function v(S) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, U = 0;
      function X(q, Y, oe, se, ne, ae, re) {
        if (se = se || p, ae = ae || oe, re !== n) {
          if (c) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pe = se + ":" + oe;
            !N[Pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + ae + "` prop on `" + se + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[Pe] = !0, U++);
          }
        }
        return Y[oe] == null ? q ? Y[oe] === null ? new m("The " + ne + " `" + ae + "` is marked as required " + ("in `" + se + "`, but its value is `null`.")) : new m("The " + ne + " `" + ae + "` is marked as required in " + ("`" + se + "`, but its value is `undefined`.")) : null : S(Y, oe, se, ne, ae);
      }
      var W = X.bind(null, !1);
      return W.isRequired = X.bind(null, !0), W;
    }
    function w(S) {
      function N(U, X, W, q, Y, oe) {
        var se = U[X], ne = H(se);
        if (ne !== S) {
          var ae = L(se);
          return new m(
            "Invalid " + q + " `" + Y + "` of type " + ("`" + ae + "` supplied to `" + W + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return v(N);
    }
    function O() {
      return v(a);
    }
    function C(S) {
      function N(U, X, W, q, Y) {
        if (typeof S != "function")
          return new m("Property `" + Y + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var oe = U[X];
        if (!Array.isArray(oe)) {
          var se = H(oe);
          return new m("Invalid " + q + " `" + Y + "` of type " + ("`" + se + "` supplied to `" + W + "`, expected an array."));
        }
        for (var ne = 0; ne < oe.length; ne++) {
          var ae = S(oe, ne, W, q, Y + "[" + ne + "]", n);
          if (ae instanceof Error)
            return ae;
        }
        return null;
      }
      return v(N);
    }
    function R() {
      function S(N, U, X, W, q) {
        var Y = N[U];
        if (!l(Y)) {
          var oe = H(Y);
          return new m("Invalid " + W + " `" + q + "` of type " + ("`" + oe + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(S);
    }
    function E() {
      function S(N, U, X, W, q) {
        var Y = N[U];
        if (!e.isValidElementType(Y)) {
          var oe = H(Y);
          return new m("Invalid " + W + " `" + q + "` of type " + ("`" + oe + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(S);
    }
    function $(S) {
      function N(U, X, W, q, Y) {
        if (!(U[X] instanceof S)) {
          var oe = S.name || p, se = Q(U[X]);
          return new m("Invalid " + q + " `" + Y + "` of type " + ("`" + se + "` supplied to `" + W + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return v(N);
    }
    function k(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function N(U, X, W, q, Y) {
        for (var oe = U[X], se = 0; se < S.length; se++)
          if (b(oe, S[se]))
            return null;
        var ne = JSON.stringify(S, function(re, M) {
          var Pe = L(M);
          return Pe === "symbol" ? String(M) : M;
        });
        return new m("Invalid " + q + " `" + Y + "` of value `" + String(oe) + "` " + ("supplied to `" + W + "`, expected one of " + ne + "."));
      }
      return v(N);
    }
    function _(S) {
      function N(U, X, W, q, Y) {
        if (typeof S != "function")
          return new m("Property `" + Y + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var oe = U[X], se = H(oe);
        if (se !== "object")
          return new m("Invalid " + q + " `" + Y + "` of type " + ("`" + se + "` supplied to `" + W + "`, expected an object."));
        for (var ne in oe)
          if (r(oe, ne)) {
            var ae = S(oe, ne, W, q, Y + "." + ne, n);
            if (ae instanceof Error)
              return ae;
          }
        return null;
      }
      return v(N);
    }
    function z(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var N = 0; N < S.length; N++) {
        var U = S[N];
        if (typeof U != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(U) + " at index " + N + "."
          ), a;
      }
      function X(W, q, Y, oe, se) {
        for (var ne = [], ae = 0; ae < S.length; ae++) {
          var re = S[ae], M = re(W, q, Y, oe, se, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && ne.push(M.data.expectedType);
        }
        var Pe = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new m("Invalid " + oe + " `" + se + "` supplied to " + ("`" + Y + "`" + Pe + "."));
      }
      return v(X);
    }
    function P() {
      function S(N, U, X, W, q) {
        return I(N[U]) ? null : new m("Invalid " + W + " `" + q + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return v(S);
    }
    function F(S, N, U, X, W) {
      return new m(
        (S || "React class") + ": " + N + " type `" + U + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function K(S) {
      function N(U, X, W, q, Y) {
        var oe = U[X], se = H(oe);
        if (se !== "object")
          return new m("Invalid " + q + " `" + Y + "` of type `" + se + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var ne in S) {
          var ae = S[ne];
          if (typeof ae != "function")
            return F(W, q, Y, ne, L(ae));
          var re = ae(oe, ne, W, q, Y + "." + ne, n);
          if (re)
            return re;
        }
        return null;
      }
      return v(N);
    }
    function B(S) {
      function N(U, X, W, q, Y) {
        var oe = U[X], se = H(oe);
        if (se !== "object")
          return new m("Invalid " + q + " `" + Y + "` of type `" + se + "` " + ("supplied to `" + W + "`, expected `object`."));
        var ne = t({}, U[X], S);
        for (var ae in ne) {
          var re = S[ae];
          if (r(S, ae) && typeof re != "function")
            return F(W, q, Y, ae, L(re));
          if (!re)
            return new m(
              "Invalid " + q + " `" + Y + "` key `" + ae + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(U[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var M = re(oe, ae, W, q, Y + "." + ae, n);
          if (M)
            return M;
        }
        return null;
      }
      return v(N);
    }
    function I(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(I);
          if (S === null || l(S))
            return !0;
          var N = f(S);
          if (N) {
            var U = N.call(S), X;
            if (N !== S.entries) {
              for (; !(X = U.next()).done; )
                if (!I(X.value))
                  return !1;
            } else
              for (; !(X = U.next()).done; ) {
                var W = X.value;
                if (W && !I(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j(S, N) {
      return S === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function H(S) {
      var N = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : j(N, S) ? "symbol" : N;
    }
    function L(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var N = H(S);
      if (N === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function V(S) {
      var N = L(S);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function Q(S) {
      return !S.constructor || !S.constructor.name ? p : S.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, di;
}
var pi, ka;
function dp() {
  if (ka) return pi;
  ka = 1;
  var e = es();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, pi = function() {
    function r(a, l, c, u, d, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, pi;
}
if (process.env.NODE_ENV !== "production") {
  var pp = Qi(), fp = !0;
  Ii.exports = up()(pp.isElement, fp);
} else
  Ii.exports = dp()();
var hp = Ii.exports;
const o = /* @__PURE__ */ Xl(hp);
function Wt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function sc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var mp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gp = /* @__PURE__ */ sc(
  function(e) {
    return mp.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bp = !1;
function yp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function vp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var xp = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, s), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !bp : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(vp(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = yp(i);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Xe = "-ms-", Zr = "-moz-", xe = "-webkit-", ac = "comm", ts = "rule", ns = "decl", Ep = "@import", lc = "@keyframes", Tp = "@layer", Cp = Math.abs, vo = String.fromCharCode, Rp = Object.assign;
function wp(e, t) {
  return Ge(e, 0) ^ 45 ? (((t << 2 ^ Ge(e, 0)) << 2 ^ Ge(e, 1)) << 2 ^ Ge(e, 2)) << 2 ^ Ge(e, 3) : 0;
}
function cc(e) {
  return e.trim();
}
function kp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ee(e, t, n) {
  return e.replace(t, n);
}
function Ni(e, t) {
  return e.indexOf(t);
}
function Ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function gr(e, t, n) {
  return e.slice(t, n);
}
function $t(e) {
  return e.length;
}
function rs(e) {
  return e.length;
}
function _r(e, t) {
  return t.push(e), e;
}
function Op(e, t) {
  return e.map(t).join("");
}
var xo = 1, jn = 1, uc = 0, ot = 0, Ve = 0, Ln = "";
function Eo(e, t, n, r, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: i, children: s, line: xo, column: jn, length: a, return: "" };
}
function Yn(e, t) {
  return Rp(Eo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Sp() {
  return Ve;
}
function $p() {
  return Ve = ot > 0 ? Ge(Ln, --ot) : 0, jn--, Ve === 10 && (jn = 1, xo--), Ve;
}
function ct() {
  return Ve = ot < uc ? Ge(Ln, ot++) : 0, jn++, Ve === 10 && (jn = 1, xo++), Ve;
}
function Pt() {
  return Ge(Ln, ot);
}
function Fr() {
  return ot;
}
function Tr(e, t) {
  return gr(Ln, e, t);
}
function br(e) {
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
function dc(e) {
  return xo = jn = 1, uc = $t(Ln = e), ot = 0, [];
}
function pc(e) {
  return Ln = "", e;
}
function Br(e) {
  return cc(Tr(ot - 1, ji(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function _p(e) {
  for (; (Ve = Pt()) && Ve < 33; )
    ct();
  return br(e) > 2 || br(Ve) > 3 ? "" : " ";
}
function Pp(e, t) {
  for (; --t && ct() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return Tr(e, Fr() + (t < 6 && Pt() == 32 && ct() == 32));
}
function ji(e) {
  for (; ct(); )
    switch (Ve) {
      case e:
        return ot;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ji(Ve);
        break;
      case 40:
        e === 41 && ji(e);
        break;
      case 92:
        ct();
        break;
    }
  return ot;
}
function Ip(e, t) {
  for (; ct() && e + Ve !== 57; )
    if (e + Ve === 84 && Pt() === 47)
      break;
  return "/*" + Tr(t, ot - 1) + "*" + vo(e === 47 ? e : ct());
}
function Np(e) {
  for (; !br(Pt()); )
    ct();
  return Tr(e, ot);
}
function jp(e) {
  return pc(Lr("", null, null, null, [""], e = dc(e), 0, [0], e));
}
function Lr(e, t, n, r, i, s, a, l, c) {
  for (var u = 0, d = 0, f = a, p = 0, g = 0, b = 0, m = 1, v = 1, w = 1, O = 0, C = "", R = i, E = s, $ = r, k = C; v; )
    switch (b = O, O = ct()) {
      case 40:
        if (b != 108 && Ge(k, f - 1) == 58) {
          Ni(k += Ee(Br(O), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Br(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += _p(b);
        break;
      case 92:
        k += Pp(Fr() - 1, 7);
        continue;
      case 47:
        switch (Pt()) {
          case 42:
          case 47:
            _r(Ap(Ip(ct(), Fr()), t, n), c);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * m:
        l[u++] = $t(k) * w;
      case 125 * m:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            v = 0;
          case 59 + d:
            w == -1 && (k = Ee(k, /\f/g, "")), g > 0 && $t(k) - f && _r(g > 32 ? Sa(k + ";", r, n, f - 1) : Sa(Ee(k, " ", "") + ";", r, n, f - 2), c);
            break;
          case 59:
            k += ";";
          default:
            if (_r($ = Oa(k, t, n, u, d, i, l, C, R = [], E = [], f), s), O === 123)
              if (d === 0)
                Lr(k, t, $, $, R, s, f, l, E);
              else
                switch (p === 99 && Ge(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Lr(e, $, $, r && _r(Oa(e, $, $, 0, 0, i, l, C, i, R = [], f), E), i, E, f, l, r ? R : E);
                    break;
                  default:
                    Lr(k, $, $, $, [""], E, 0, l, E);
                }
        }
        u = d = g = 0, m = w = 1, C = k = "", f = a;
        break;
      case 58:
        f = 1 + $t(k), g = b;
      default:
        if (m < 1) {
          if (O == 123)
            --m;
          else if (O == 125 && m++ == 0 && $p() == 125)
            continue;
        }
        switch (k += vo(O), O * m) {
          case 38:
            w = d > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            l[u++] = ($t(k) - 1) * w, w = 1;
            break;
          case 64:
            Pt() === 45 && (k += Br(ct())), p = Pt(), d = f = $t(C = k += Np(Fr())), O++;
            break;
          case 45:
            b === 45 && $t(k) == 2 && (m = 0);
        }
    }
  return s;
}
function Oa(e, t, n, r, i, s, a, l, c, u, d) {
  for (var f = i - 1, p = i === 0 ? s : [""], g = rs(p), b = 0, m = 0, v = 0; b < r; ++b)
    for (var w = 0, O = gr(e, f + 1, f = Cp(m = a[b])), C = e; w < g; ++w)
      (C = cc(m > 0 ? p[w] + " " + O : Ee(O, /&\f/g, p[w]))) && (c[v++] = C);
  return Eo(e, t, n, i === 0 ? ts : l, c, u, d);
}
function Ap(e, t, n) {
  return Eo(e, t, n, ac, vo(Sp()), gr(e, 2, -2), 0);
}
function Sa(e, t, n, r) {
  return Eo(e, t, n, ns, gr(e, 0, r), gr(e, r + 1, -1), r);
}
function On(e, t) {
  for (var n = "", r = rs(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Mp(e, t, n, r) {
  switch (e.type) {
    case Tp:
      if (e.children.length) break;
    case Ep:
    case ns:
      return e.return = e.return || e.value;
    case ac:
      return "";
    case lc:
      return e.return = e.value + "{" + On(e.children, r) + "}";
    case ts:
      e.value = e.props.join(",");
  }
  return $t(n = On(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Dp(e) {
  var t = rs(e);
  return function(n, r, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, r, i, s) || "";
    return a;
  };
}
function zp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Fp = function(t, n, r) {
  for (var i = 0, s = 0; i = s, s = Pt(), i === 38 && s === 12 && (n[r] = 1), !br(s); )
    ct();
  return Tr(t, ot);
}, Bp = function(t, n) {
  var r = -1, i = 44;
  do
    switch (br(i)) {
      case 0:
        i === 38 && Pt() === 12 && (n[r] = 1), t[r] += Fp(ot - 1, n, r);
        break;
      case 2:
        t[r] += Br(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = Pt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += vo(i);
    }
  while (i = ct());
  return t;
}, Lp = function(t, n) {
  return pc(Bp(dc(t), n));
}, $a = /* @__PURE__ */ new WeakMap(), Vp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !$a.get(r)) && !i) {
      $a.set(t, !0);
      for (var s = [], a = Lp(n, s), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, Up = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function fc(e, t) {
  switch (wp(e, t)) {
    case 5103:
      return xe + "print-" + e + e;
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
      return xe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return xe + e + Zr + e + Xe + e + e;
    case 6828:
    case 4268:
      return xe + e + Xe + e + e;
    case 6165:
      return xe + e + Xe + "flex-" + e + e;
    case 5187:
      return xe + e + Ee(e, /(\w+).+(:[^]+)/, xe + "box-$1$2" + Xe + "flex-$1$2") + e;
    case 5443:
      return xe + e + Xe + "flex-item-" + Ee(e, /flex-|-self/, "") + e;
    case 4675:
      return xe + e + Xe + "flex-line-pack" + Ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return xe + e + Xe + Ee(e, "shrink", "negative") + e;
    case 5292:
      return xe + e + Xe + Ee(e, "basis", "preferred-size") + e;
    case 6060:
      return xe + "box-" + Ee(e, "-grow", "") + xe + e + Xe + Ee(e, "grow", "positive") + e;
    case 4554:
      return xe + Ee(e, /([^-])(transform)/g, "$1" + xe + "$2") + e;
    case 6187:
      return Ee(Ee(Ee(e, /(zoom-|grab)/, xe + "$1"), /(image-set)/, xe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ee(e, /(image-set\([^]*)/, xe + "$1$`$1");
    case 4968:
      return Ee(Ee(e, /(.+:)(flex-)?(.*)/, xe + "box-pack:$3" + Xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + xe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ee(e, /(.+)-inline(.+)/, xe + "$1$2") + e;
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
      if ($t(e) - 1 - t > 6) switch (Ge(e, t + 1)) {
        case 109:
          if (Ge(e, t + 4) !== 45) break;
        case 102:
          return Ee(e, /(.+:)(.+)-([^]+)/, "$1" + xe + "$2-$3$1" + Zr + (Ge(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Ni(e, "stretch") ? fc(Ee(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ge(e, t + 1) !== 115) break;
    case 6444:
      switch (Ge(e, $t(e) - 3 - (~Ni(e, "!important") && 10))) {
        case 107:
          return Ee(e, ":", ":" + xe) + e;
        case 101:
          return Ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + xe + (Ge(e, 14) === 45 ? "inline-" : "") + "box$3$1" + xe + "$2$3$1" + Xe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ge(e, t + 11)) {
        case 114:
          return xe + e + Xe + Ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return xe + e + Xe + Ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return xe + e + Xe + Ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return xe + e + Xe + e + e;
  }
  return e;
}
var Wp = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ns:
      t.return = fc(t.value, t.length);
      break;
    case lc:
      return On([Yn(t, {
        value: Ee(t.value, "@", "@" + xe)
      })], i);
    case ts:
      if (t.length) return Op(t.props, function(s) {
        switch (kp(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return On([Yn(t, {
              props: [Ee(s, /:(read-\w+)/, ":" + Zr + "$1")]
            })], i);
          case "::placeholder":
            return On([Yn(t, {
              props: [Ee(s, /:(plac\w+)/, ":" + xe + "input-$1")]
            }), Yn(t, {
              props: [Ee(s, /:(plac\w+)/, ":" + Zr + "$1")]
            }), Yn(t, {
              props: [Ee(s, /:(plac\w+)/, Xe + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, qp = [Wp], Hp = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(m) {
      var v = m.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || qp, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var v = m.getAttribute("data-emotion").split(" "), w = 1; w < v.length; w++)
        s[v[w]] = !0;
      l.push(m);
    }
  );
  var c, u = [Vp, Up];
  {
    var d, f = [Mp, zp(function(m) {
      d.insert(m);
    })], p = Dp(u.concat(i, f)), g = function(v) {
      return On(jp(v), p);
    };
    c = function(v, w, O, C) {
      d = O, g(v ? v + "{" + w.styles + "}" : w.styles), C && (b.inserted[w.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new xp({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return b.sheet.hydrate(l), b;
}, hc = Qi(), Gp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Kp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, mc = {};
mc[hc.ForwardRef] = Gp;
mc[hc.Memo] = Kp;
var Yp = !0;
function os(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var To = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Yp === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, Co = function(t, n, r) {
  To(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Xp(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
var Zp = {
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
}, Jp = !1, Qp = /[A-Z]|^ms/g, ef = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gc = function(t) {
  return t.charCodeAt(1) === 45;
}, _a = function(t) {
  return t != null && typeof t != "boolean";
}, fi = /* @__PURE__ */ sc(function(e) {
  return gc(e) ? e : e.replace(Qp, "-$&").toLowerCase();
}), Pa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ef, function(r, i, s) {
          return _t = {
            name: i,
            styles: s,
            next: _t
          }, i;
        });
  }
  return Zp[t] !== 1 && !gc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, tf = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function yr(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return _t = {
          name: i.name,
          styles: i.styles,
          next: _t
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            _t = {
              name: a.name,
              styles: a.styles,
              next: _t
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return nf(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = _t, u = n(e);
        return _t = c, yr(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var f = t[d];
  return f !== void 0 ? f : d;
}
function nf(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += yr(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : _a(l) && (r += fi(s) + ":" + Pa(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && Jp)
          throw new Error(tf);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            _a(a[c]) && (r += fi(s) + ":" + Pa(s, a[c]) + ";");
        else {
          var u = yr(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += fi(s) + ":" + u + ";";
              break;
            }
            default:
              r += s + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Ia = /label:\s*([^\s;{]+)\s*(;|$)/g, _t;
function An(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  _t = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, i += yr(n, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += yr(n, t, e[l]), r) {
      var c = s;
      i += c[l];
    }
  Ia.lastIndex = 0;
  for (var u = "", d; (d = Ia.exec(i)) !== null; )
    u += "-" + d[1];
  var f = Xp(i) + u;
  return {
    name: f,
    styles: i,
    next: _t
  };
}
var rf = function(t) {
  return t();
}, bc = x.useInsertionEffect ? x.useInsertionEffect : !1, is = bc || rf, Na = bc || x.useLayoutEffect, of = {}.hasOwnProperty, ss = /* @__PURE__ */ Yi(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Hp({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (ss.displayName = "EmotionCacheContext");
ss.Provider;
var Ro = function(t) {
  return /* @__PURE__ */ ad(function(n, r) {
    var i = Bn(ss);
    return t(n, i, r);
  });
}, Vn = /* @__PURE__ */ Yi({});
process.env.NODE_ENV !== "production" && (Vn.displayName = "EmotionThemeContext");
var ja = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Aa = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", sf = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return To(n, r, i), is(function() {
    return Co(n, r, i);
  }), null;
}, af = /* @__PURE__ */ Ro(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[ja], s = [r], a = "";
  typeof e.className == "string" ? a = os(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var l = An(s, void 0, Bn(Vn));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var c = e[Aa];
    c && (l = An([l, "label:" + c + ";"]));
  }
  a += t.key + "-" + l.name;
  var u = {};
  for (var d in e)
    of.call(e, d) && d !== "css" && d !== ja && (process.env.NODE_ENV === "production" || d !== Aa) && (u[d] = e[d]);
  return u.ref = n, u.className = a, /* @__PURE__ */ Ut(Xi, null, /* @__PURE__ */ Ut(sf, {
    cache: t,
    serialized: l,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ Ut(i, u));
});
process.env.NODE_ENV !== "production" && (af.displayName = "EmotionCssPropInternal");
var lf = {
  name: "@emotion/react",
  version: "11.10.8",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": "./macro.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.10.8",
    "@emotion/cache": "^11.10.8",
    "@emotion/serialize": "^1.1.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
    "@emotion/utils": "^1.2.0",
    "@emotion/weak-memoize": "^0.3.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.10.8",
    "@emotion/css-prettifier": "1.1.2",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.8",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      }
    }
  }
}, Ma = !1, yc = /* @__PURE__ */ Ro(function(e, t) {
  process.env.NODE_ENV !== "production" && !Ma && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Ma = !0);
  var n = e.styles, r = An([n], void 0, Bn(Vn)), i = Gr();
  return Na(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), i.current = [a, l], function() {
      a.flush();
    };
  }, [t]), Na(function() {
    var s = i.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && Co(t, r.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (yc.displayName = "EmotionGlobal");
function vr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return An(t);
}
var dn = function() {
  var t = vr.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, cf = function e(t) {
  for (var n = t.length, r = 0, i = ""; r < n; r++) {
    var s = t[r];
    if (s != null) {
      var a = void 0;
      switch (typeof s) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(s))
            a = e(s);
          else {
            process.env.NODE_ENV !== "production" && s.styles !== void 0 && s.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var l in s)
              s[l] && l && (a && (a += " "), a += l);
          }
          break;
        }
        default:
          a = s;
      }
      a && (i && (i += " "), i += a);
    }
  }
  return i;
};
function uf(e, t, n) {
  var r = [], i = os(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var df = function(t) {
  var n = t.cache, r = t.serializedArr;
  return is(function() {
    for (var i = 0; i < r.length; i++)
      Co(n, r[i], !1);
  }), null;
}, pf = /* @__PURE__ */ Ro(function(e, t) {
  var n = !1, r = [], i = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, d = new Array(u), f = 0; f < u; f++)
      d[f] = arguments[f];
    var p = An(d, t.registered);
    return r.push(p), To(t, p, !1), t.key + "-" + p.name;
  }, s = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, d = new Array(u), f = 0; f < u; f++)
      d[f] = arguments[f];
    return uf(t.registered, i, cf(d));
  }, a = {
    css: i,
    cx: s,
    theme: Bn(Vn)
  }, l = e.children(a);
  return n = !0, /* @__PURE__ */ Ut(Xi, null, /* @__PURE__ */ Ut(df, {
    cache: t,
    serializedArr: r
  }), l);
});
process.env.NODE_ENV !== "production" && (pf.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Da = !0, ff = typeof jest < "u" || typeof vi < "u";
  if (Da && !ff) {
    var za = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Da ? window : global
    ), Fa = "__EMOTION_REACT_" + lf.version.split(".")[0] + "__";
    za[Fa] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), za[Fa] = !0;
  }
}
var hf = gp, mf = function(t) {
  return t !== "theme";
}, Ba = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? hf : mf;
}, La = function(t, n, r) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Va = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, gf = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return To(n, r, i), is(function() {
    return Co(n, r, i);
  }), null;
}, bf = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var l = La(t, n, r), c = l || Ba(i), u = !c("as");
  return function() {
    var d = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(Va), f.push(d[0][0]);
      for (var p = d.length, g = 1; g < p; g++)
        process.env.NODE_ENV !== "production" && d[0][g] === void 0 && console.error(Va), f.push(d[g], d[0][g]);
    }
    var b = Ro(function(m, v, w) {
      var O = u && m.as || i, C = "", R = [], E = m;
      if (m.theme == null) {
        E = {};
        for (var $ in m)
          E[$] = m[$];
        E.theme = Bn(Vn);
      }
      typeof m.className == "string" ? C = os(v.registered, R, m.className) : m.className != null && (C = m.className + " ");
      var k = An(f.concat(R), v.registered, E);
      C += v.key + "-" + k.name, a !== void 0 && (C += " " + a);
      var _ = u && l === void 0 ? Ba(O) : c, z = {};
      for (var P in m)
        u && P === "as" || // $FlowFixMe
        _(P) && (z[P] = m[P]);
      return z.className = C, z.ref = w, /* @__PURE__ */ Ut(Xi, null, /* @__PURE__ */ Ut(gf, {
        cache: v,
        serialized: k,
        isStringTag: typeof O == "string"
      }), /* @__PURE__ */ Ut(O, z));
    });
    return b.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = i, b.__emotion_styles = f, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), b.withComponent = function(m, v) {
      return e(m, h({}, n, v, {
        shouldForwardProp: La(b, v, !0)
      })).apply(void 0, f);
    }, b;
  };
}, yf = [
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
], Ai = bf.bind();
yf.forEach(function(e) {
  Ai[e] = Ai(e);
});
function vf(e) {
  return e == null || Object.keys(e).length === 0;
}
function vc(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (i) => t(vf(i) ? n : i) : t;
  return /* @__PURE__ */ y.jsx(yc, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (vc.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v5.16.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function xc(e, t) {
  const n = Ai(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const xf = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function ee(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Vt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ec(e) {
  if (/* @__PURE__ */ x.isValidElement(e) || !Vt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ec(e[n]);
  }), t;
}
function nt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? h({}, e) : e;
  return Vt(e) && Vt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ x.isValidElement(t[i]) ? r[i] = t[i] : Vt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Vt(e[i]) ? r[i] = nt(e[i], t[i], n) : n.clone ? r[i] = Vt(t[i]) ? Ec(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Ef = ["values", "unit", "step"], Tf = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => h({}, n, {
    [r.key]: r.val
  }), {});
};
function Cf(e) {
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
  } = e, i = ee(e, Ef), s = Tf(t), a = Object.keys(s);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, g) {
    const b = a.indexOf(g);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : g) - r / 100}${n})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function f(p) {
    const g = a.indexOf(p);
    return g === 0 ? l(a[1]) : g === a.length - 1 ? c(a[g]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return h({
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: n
  }, i);
}
const Rf = {
  borderRadius: 4
}, Gt = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function ar(e, t) {
  return t ? nt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const as = {
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
}, Ua = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${as[e]}px)`
};
function Rt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Ua;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Ua;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(s.values || as).indexOf(l) !== -1) {
        const c = s.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Tc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function Cc(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function wf(e, ...t) {
  const n = Tc(e), r = [n, ...t].reduce((i, s) => nt(i, s), {});
  return Cc(Object.keys(n), r);
}
function kf(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, s) => {
    s < e.length && (n[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (n[i] = !0);
  }), n;
}
function hi({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || kf(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function A(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Wt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Mn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Jr(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Mn(e, n) || r, t && (i = t(i, r, e)), i;
}
function Fe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Mn(c, r) || {};
    return Rt(a, l, (f) => {
      let p = Jr(u, i, f);
      return f === p && typeof f == "string" && (p = Jr(u, i, `${t}${f === "default" ? "" : A(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Gt
  } : {}, s.filterProps = [t], s;
}
function Of(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Sf = {
  m: "margin",
  p: "padding"
}, $f = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wa = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, _f = Of((e) => {
  if (e.length > 2)
    if (Wa[e])
      e = Wa[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Sf[t], i = $f[n] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), wo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ko = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Pf = [...wo, ...ko];
function Cr(e, t, n, r) {
  var i;
  const s = (i = Mn(e, t, !1)) != null ? i : n;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ls(e) {
  return Cr(e, "spacing", 8, "spacing");
}
function sn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function If(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = sn(t, n), r), {});
}
function Nf(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = _f(n), s = If(i, r), a = e[n];
  return Rt(e, a, s);
}
function Rc(e, t) {
  const n = ls(e.theme);
  return Object.keys(e).map((r) => Nf(e, t, r, n)).reduce(ar, {});
}
function Ae(e) {
  return Rc(e, wo);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? wo.reduce((e, t) => (e[t] = Gt, e), {}) : {};
Ae.filterProps = wo;
function Me(e) {
  return Rc(e, ko);
}
Me.propTypes = process.env.NODE_ENV !== "production" ? ko.reduce((e, t) => (e[t] = Gt, e), {}) : {};
Me.filterProps = ko;
process.env.NODE_ENV !== "production" && Pf.reduce((e, t) => (e[t] = Gt, e), {});
function jf(e = 8) {
  if (e.mui)
    return e;
  const t = ls({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function Oo(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, s) => t[s] ? ar(i, t[s](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function bt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function xt(e, t) {
  return Fe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Af = xt("border", bt), Mf = xt("borderTop", bt), Df = xt("borderRight", bt), zf = xt("borderBottom", bt), Ff = xt("borderLeft", bt), Bf = xt("borderColor"), Lf = xt("borderTopColor"), Vf = xt("borderRightColor"), Uf = xt("borderBottomColor"), Wf = xt("borderLeftColor"), qf = xt("outline", bt), Hf = xt("outlineColor"), So = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Cr(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: sn(t, r)
    });
    return Rt(e, e.borderRadius, n);
  }
  return null;
};
So.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Gt
} : {};
So.filterProps = ["borderRadius"];
Oo(Af, Mf, Df, zf, Ff, Bf, Lf, Vf, Uf, Wf, So, qf, Hf);
const $o = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Cr(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: sn(t, r)
    });
    return Rt(e, e.gap, n);
  }
  return null;
};
$o.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Gt
} : {};
$o.filterProps = ["gap"];
const _o = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Cr(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: sn(t, r)
    });
    return Rt(e, e.columnGap, n);
  }
  return null;
};
_o.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Gt
} : {};
_o.filterProps = ["columnGap"];
const Po = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Cr(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: sn(t, r)
    });
    return Rt(e, e.rowGap, n);
  }
  return null;
};
Po.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Gt
} : {};
Po.filterProps = ["rowGap"];
const Gf = Fe({
  prop: "gridColumn"
}), Kf = Fe({
  prop: "gridRow"
}), Yf = Fe({
  prop: "gridAutoFlow"
}), Xf = Fe({
  prop: "gridAutoColumns"
}), Zf = Fe({
  prop: "gridAutoRows"
}), Jf = Fe({
  prop: "gridTemplateColumns"
}), Qf = Fe({
  prop: "gridTemplateRows"
}), eh = Fe({
  prop: "gridTemplateAreas"
}), th = Fe({
  prop: "gridArea"
});
Oo($o, _o, Po, Gf, Kf, Yf, Xf, Zf, Jf, Qf, eh, th);
function Sn(e, t) {
  return t === "grey" ? t : e;
}
const nh = Fe({
  prop: "color",
  themeKey: "palette",
  transform: Sn
}), rh = Fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Sn
}), oh = Fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Sn
});
Oo(nh, rh, oh);
function lt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ih = Fe({
  prop: "width",
  transform: lt
}), cs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || as[n];
      return s ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: lt(n)
      };
    };
    return Rt(e, e.maxWidth, t);
  }
  return null;
};
cs.filterProps = ["maxWidth"];
const sh = Fe({
  prop: "minWidth",
  transform: lt
}), ah = Fe({
  prop: "height",
  transform: lt
}), lh = Fe({
  prop: "maxHeight",
  transform: lt
}), ch = Fe({
  prop: "minHeight",
  transform: lt
});
Fe({
  prop: "size",
  cssProperty: "width",
  transform: lt
});
Fe({
  prop: "size",
  cssProperty: "height",
  transform: lt
});
const uh = Fe({
  prop: "boxSizing"
});
Oo(ih, cs, sh, ah, lh, ch, uh);
const Io = {
  // borders
  border: {
    themeKey: "borders",
    transform: bt
  },
  borderTop: {
    themeKey: "borders",
    transform: bt
  },
  borderRight: {
    themeKey: "borders",
    transform: bt
  },
  borderBottom: {
    themeKey: "borders",
    transform: bt
  },
  borderLeft: {
    themeKey: "borders",
    transform: bt
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
    transform: bt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: So
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Sn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Sn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Sn
  },
  // spacing
  p: {
    style: Me
  },
  pt: {
    style: Me
  },
  pr: {
    style: Me
  },
  pb: {
    style: Me
  },
  pl: {
    style: Me
  },
  px: {
    style: Me
  },
  py: {
    style: Me
  },
  padding: {
    style: Me
  },
  paddingTop: {
    style: Me
  },
  paddingRight: {
    style: Me
  },
  paddingBottom: {
    style: Me
  },
  paddingLeft: {
    style: Me
  },
  paddingX: {
    style: Me
  },
  paddingY: {
    style: Me
  },
  paddingInline: {
    style: Me
  },
  paddingInlineStart: {
    style: Me
  },
  paddingInlineEnd: {
    style: Me
  },
  paddingBlock: {
    style: Me
  },
  paddingBlockStart: {
    style: Me
  },
  paddingBlockEnd: {
    style: Me
  },
  m: {
    style: Ae
  },
  mt: {
    style: Ae
  },
  mr: {
    style: Ae
  },
  mb: {
    style: Ae
  },
  ml: {
    style: Ae
  },
  mx: {
    style: Ae
  },
  my: {
    style: Ae
  },
  margin: {
    style: Ae
  },
  marginTop: {
    style: Ae
  },
  marginRight: {
    style: Ae
  },
  marginBottom: {
    style: Ae
  },
  marginLeft: {
    style: Ae
  },
  marginX: {
    style: Ae
  },
  marginY: {
    style: Ae
  },
  marginInline: {
    style: Ae
  },
  marginInlineStart: {
    style: Ae
  },
  marginInlineEnd: {
    style: Ae
  },
  marginBlock: {
    style: Ae
  },
  marginBlockStart: {
    style: Ae
  },
  marginBlockEnd: {
    style: Ae
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
    style: $o
  },
  rowGap: {
    style: Po
  },
  columnGap: {
    style: _o
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
    transform: lt
  },
  maxWidth: {
    style: cs
  },
  minWidth: {
    transform: lt
  },
  height: {
    transform: lt
  },
  maxHeight: {
    transform: lt
  },
  minHeight: {
    transform: lt
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
function dh(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ph(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fh() {
  function e(n, r, i, s) {
    const a = {
      [n]: r,
      theme: i
    }, l = s[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = Mn(i, u) || {};
    return f ? f(a) : Rt(a, r, (b) => {
      let m = Jr(p, d, b);
      return b === m && typeof b == "string" && (m = Jr(p, d, `${n}${b === "default" ? "" : A(b)}`, b)), c === !1 ? m : {
        [c]: m
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: i,
      theme: s = {}
    } = n || {};
    if (!i)
      return null;
    const a = (r = s.unstable_sxConfig) != null ? r : Io;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Tc(s.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((g) => {
        const b = ph(u[g], s);
        if (b != null)
          if (typeof b == "object")
            if (a[g])
              p = ar(p, e(g, b, s, a));
            else {
              const m = Rt({
                theme: s
              }, b, (v) => ({
                [g]: v
              }));
              dh(m, b) ? p[g] = t({
                sx: b,
                theme: s
              }) : p = ar(p, m);
            }
          else
            p = ar(p, e(g, b, s, a));
      }), Cc(f, p);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const Rr = fh();
Rr.filterProps = ["sx"];
function hh(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const mh = ["breakpoints", "palette", "spacing", "shape"];
function No(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: s = {}
  } = e, a = ee(e, mh), l = Cf(n), c = jf(i);
  let u = nt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: h({
      mode: "light"
    }, r),
    spacing: c,
    shape: h({}, Rf, s)
  }, a);
  return u.applyStyles = hh, u = t.reduce((d, f) => nt(d, f), u), u.unstable_sxConfig = h({}, Io, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(f) {
    return Rr({
      sx: f,
      theme: this
    });
  }, u;
}
function gh(e) {
  return Object.keys(e).length === 0;
}
function bh(e = null) {
  const t = x.useContext(Vn);
  return !t || gh(t) ? e : t;
}
const yh = No();
function jo(e = yh) {
  return bh(e);
}
function wc({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = jo(n), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ y.jsx(vc, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (wc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
const vh = ["sx"], xh = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Io;
  return Object.keys(e).forEach((s) => {
    i[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function us(e) {
  const {
    sx: t
  } = e, n = ee(e, vh), {
    systemProps: r,
    otherProps: i
  } = xh(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Vt(l) ? h({}, r, l) : r;
  } : s = h({}, r, t), h({}, i, {
    sx: s
  });
}
const qa = (e) => e, Eh = () => {
  let e = qa;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = qa;
    }
  };
}, ds = Eh();
function kc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = kc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Oc() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = kc(e)) && (r && (r += " "), r += t);
  return r;
}
const Th = ["className", "component"];
function Ch(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = xc("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Rr);
  return /* @__PURE__ */ x.forwardRef(function(c, u) {
    const d = jo(n), f = us(c), {
      className: p,
      component: g = "div"
    } = f, b = ee(f, Th);
    return /* @__PURE__ */ y.jsx(s, h({
      as: g,
      ref: u,
      className: Oc(p, i ? i(r) : r),
      theme: t && d[t] || d
    }, b));
  });
}
const Rh = {
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
function ue(e, t, n = "Mui") {
  const r = Rh[t];
  return r ? `${n}-${r}` : `${ds.generate(e)}-${t}`;
}
function de(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = ue(e, i, n);
  }), r;
}
var Mi = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha;
function wh() {
  if (Ha) return we;
  Ha = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function m(v) {
    if (typeof v == "object" && v !== null) {
      var w = v.$$typeof;
      switch (w) {
        case e:
          switch (v = v.type, v) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case a:
                case c:
                case p:
                case f:
                case s:
                  return v;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return we.ContextConsumer = a, we.ContextProvider = s, we.Element = e, we.ForwardRef = c, we.Fragment = n, we.Lazy = p, we.Memo = f, we.Portal = t, we.Profiler = i, we.StrictMode = r, we.Suspense = u, we.SuspenseList = d, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(v) {
    return m(v) === a;
  }, we.isContextProvider = function(v) {
    return m(v) === s;
  }, we.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, we.isForwardRef = function(v) {
    return m(v) === c;
  }, we.isFragment = function(v) {
    return m(v) === n;
  }, we.isLazy = function(v) {
    return m(v) === p;
  }, we.isMemo = function(v) {
    return m(v) === f;
  }, we.isPortal = function(v) {
    return m(v) === t;
  }, we.isProfiler = function(v) {
    return m(v) === i;
  }, we.isStrictMode = function(v) {
    return m(v) === r;
  }, we.isSuspense = function(v) {
    return m(v) === u;
  }, we.isSuspenseList = function(v) {
    return m(v) === d;
  }, we.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === i || v === r || v === u || v === d || v === g || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === f || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || v.$$typeof === b || v.getModuleId !== void 0);
  }, we.typeOf = m, we;
}
var ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function kh() {
  return Ga || (Ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = !1, m = !1, v = !1, w = !1, O = !1, C;
    C = Symbol.for("react.module.reference");
    function R(Z) {
      return !!(typeof Z == "string" || typeof Z == "function" || Z === n || Z === i || O || Z === r || Z === u || Z === d || w || Z === g || b || m || v || typeof Z == "object" && Z !== null && (Z.$$typeof === p || Z.$$typeof === f || Z.$$typeof === s || Z.$$typeof === a || Z.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Z.$$typeof === C || Z.getModuleId !== void 0));
    }
    function E(Z) {
      if (typeof Z == "object" && Z !== null) {
        var Ie = Z.$$typeof;
        switch (Ie) {
          case e:
            var qe = Z.type;
            switch (qe) {
              case n:
              case i:
              case r:
              case u:
              case d:
                return qe;
              default:
                var _e = qe && qe.$$typeof;
                switch (_e) {
                  case l:
                  case a:
                  case c:
                  case p:
                  case f:
                  case s:
                    return _e;
                  default:
                    return Ie;
                }
            }
          case t:
            return Ie;
        }
      }
    }
    var $ = a, k = s, _ = e, z = c, P = n, F = p, K = f, B = t, I = i, j = r, H = u, L = d, V = !1, Q = !1;
    function S(Z) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function N(Z) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(Z) {
      return E(Z) === a;
    }
    function X(Z) {
      return E(Z) === s;
    }
    function W(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === e;
    }
    function q(Z) {
      return E(Z) === c;
    }
    function Y(Z) {
      return E(Z) === n;
    }
    function oe(Z) {
      return E(Z) === p;
    }
    function se(Z) {
      return E(Z) === f;
    }
    function ne(Z) {
      return E(Z) === t;
    }
    function ae(Z) {
      return E(Z) === i;
    }
    function re(Z) {
      return E(Z) === r;
    }
    function M(Z) {
      return E(Z) === u;
    }
    function Pe(Z) {
      return E(Z) === d;
    }
    ke.ContextConsumer = $, ke.ContextProvider = k, ke.Element = _, ke.ForwardRef = z, ke.Fragment = P, ke.Lazy = F, ke.Memo = K, ke.Portal = B, ke.Profiler = I, ke.StrictMode = j, ke.Suspense = H, ke.SuspenseList = L, ke.isAsyncMode = S, ke.isConcurrentMode = N, ke.isContextConsumer = U, ke.isContextProvider = X, ke.isElement = W, ke.isForwardRef = q, ke.isFragment = Y, ke.isLazy = oe, ke.isMemo = se, ke.isPortal = ne, ke.isProfiler = ae, ke.isStrictMode = re, ke.isSuspense = M, ke.isSuspenseList = Pe, ke.isValidElementType = R, ke.typeOf = E;
  }()), ke;
}
process.env.NODE_ENV === "production" ? Mi.exports = wh() : Mi.exports = kh();
var xr = Mi.exports;
const Oh = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Sh(e) {
  const t = `${e}`.match(Oh);
  return t && t[1] || "";
}
function Sc(e, t = "") {
  return e.displayName || e.name || Sh(e) || t;
}
function Ka(e, t, n) {
  const r = Sc(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function $h(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Sc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case xr.ForwardRef:
          return Ka(e, e.render, "ForwardRef");
        case xr.Memo:
          return Ka(e, e.type, "memo");
        default:
          return;
      }
  }
}
const _h = ["ownerState"], Ph = ["variants"], Ih = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Nh(e) {
  return Object.keys(e).length === 0;
}
function jh(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function lr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ah = No(), Ya = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Pr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Nh(t) ? e : t[n] || t;
}
function Mh(e) {
  return e ? (t, n) => n[e] : null;
}
function Vr(e, t) {
  let {
    ownerState: n
  } = t, r = ee(t, _h);
  const i = typeof e == "function" ? e(h({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => Vr(s, h({
      ownerState: n
    }, r)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let l = ee(i, Ph);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props(h({
        ownerState: n
      }, r, n)) : Object.keys(c.props).forEach((d) => {
        (n == null ? void 0 : n[d]) !== c.props[d] && r[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style(h({
        ownerState: n
      }, r, n)) : c.style));
    }), l;
  }
  return i;
}
function $c(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ah,
    rootShouldForwardProp: r = lr,
    slotShouldForwardProp: i = lr
  } = e, s = (a) => Rr(h({}, a, {
    theme: Pr(h({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    xf(a, (E) => E.filter(($) => !($ != null && $.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Mh(Ya(u))
    } = l, g = ee(l, Ih), b = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), m = f || !1;
    let v;
    process.env.NODE_ENV !== "production" && c && (v = `${c}-${Ya(u || "Root")}`);
    let w = lr;
    u === "Root" || u === "root" ? w = r : u ? w = i : jh(a) && (w = void 0);
    const O = xc(a, h({
      shouldForwardProp: w,
      label: v
    }, g)), C = (E) => typeof E == "function" && E.__emotion_real !== E || Vt(E) ? ($) => Vr(E, h({}, $, {
      theme: Pr({
        theme: $.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : E, R = (E, ...$) => {
      let k = C(E);
      const _ = $ ? $.map(C) : [];
      c && p && _.push((F) => {
        const K = Pr(h({}, F, {
          defaultTheme: n,
          themeId: t
        }));
        if (!K.components || !K.components[c] || !K.components[c].styleOverrides)
          return null;
        const B = K.components[c].styleOverrides, I = {};
        return Object.entries(B).forEach(([j, H]) => {
          I[j] = Vr(H, h({}, F, {
            theme: K
          }));
        }), p(F, I);
      }), c && !b && _.push((F) => {
        var K;
        const B = Pr(h({}, F, {
          defaultTheme: n,
          themeId: t
        })), I = B == null || (K = B.components) == null || (K = K[c]) == null ? void 0 : K.variants;
        return Vr({
          variants: I
        }, h({}, F, {
          theme: B
        }));
      }), m || _.push(s);
      const z = _.length - $.length;
      if (Array.isArray(E) && z > 0) {
        const F = new Array(z).fill("");
        k = [...E, ...F], k.raw = [...E.raw, ...F];
      }
      const P = O(k, ..._);
      if (process.env.NODE_ENV !== "production") {
        let F;
        c && (F = `${c}${A(u || "")}`), F === void 0 && (F = `Styled(${$h(a)})`), P.displayName = F;
      }
      return a.muiName && (P.muiName = a.muiName), P;
    };
    return O.withConfig && (R.withConfig = O.withConfig), R;
  };
}
const Dh = $c();
function ps(e, t) {
  const n = h({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = h({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, s = t[r];
      n[r] = {}, !s || !Object.keys(s) ? n[r] = i : !i || !Object.keys(i) ? n[r] = s : (n[r] = h({}, s), Object.keys(i).forEach((a) => {
        n[r][a] = ps(i[a], s[a]);
      }));
    } else n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function zh(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : ps(t.components[n].defaultProps, r);
}
function _c({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = jo(n);
  return r && (i = i[r] || i), zh({
    theme: i,
    name: t,
    props: e
  });
}
const qt = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function Fh(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function fs(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Fh(e, t, n);
}
function Bh(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function an(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return an(Bh(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Wt(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Wt(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
function Ao(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Lh(e) {
  e = an(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, d = (u + n / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Ao({
    type: l,
    values: c
  });
}
function Xa(e) {
  e = an(e);
  let t = e.type === "hsl" || e.type === "hsla" ? an(Lh(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Za(e, t) {
  const n = Xa(e), r = Xa(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ne(e, t) {
  return e = an(e), t = fs(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ao(e);
}
function Di(e, t) {
  if (e = an(e), t = fs(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Ao(e);
}
function zi(e, t) {
  if (e = an(e), t = fs(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Ao(e);
}
function Kt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Vh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Pc(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Vh(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const pn = Kt(o.element, Pc);
pn.isRequired = Kt(o.element.isRequired, Pc);
function Uh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Wh(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Uh(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Mo = Kt(o.elementType, Wh), qh = "exact-prop: ​";
function Ic(e) {
  return process.env.NODE_ENV === "production" ? e : h({}, e, {
    [qh]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function ln(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Dt = o.oneOfType([o.func, o.object]);
function Fi(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Do(e, t = 166) {
  let n;
  function r(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Hh(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (n, r, i, s, a) => {
    const l = i || "<<anonymous>>", c = a || r;
    return typeof n[r] < "u" ? new Error(`The ${s} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Ur(e, t) {
  var n, r;
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function rt(e) {
  return e && e.ownerDocument || document;
}
function It(e) {
  return rt(e).defaultView || window;
}
function Gh(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? h({}, t.propTypes) : null;
  return (i) => (s, a, l, c, u, ...d) => {
    const f = u || a, p = n == null ? void 0 : n[f];
    if (p) {
      const g = p(s, a, l, c, u, ...d);
      if (g)
        return g;
    }
    return typeof s[a] < "u" && !s[i] ? new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function Qr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Ja = 0;
function Kh(e) {
  const [t, n] = x.useState(e), r = e || t;
  return x.useEffect(() => {
    t == null && (Ja += 1, n(`mui-${Ja}`));
  }, [t]), r;
}
const Qa = x.useId;
function hs(e) {
  if (Qa !== void 0) {
    const t = Qa();
    return e ?? t;
  }
  return Kh(e);
}
function Nc(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function Bi({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = x.useRef(e !== void 0), [s, a] = x.useState(t), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    x.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = x.useRef(t);
    x.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = x.useCallback((u) => {
    i || a(u);
  }, []);
  return [l, c];
}
function Qt(e) {
  const t = x.useRef(e);
  return qt(() => {
    t.current = e;
  }), x.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ue(...e) {
  return x.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Qr(n, t);
    });
  }, e);
}
class ms {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new ms();
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
let zo = !0, Li = !1;
const Yh = new ms(), Xh = {
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
function Zh(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Xh[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Jh(e) {
  e.metaKey || e.altKey || e.ctrlKey || (zo = !0);
}
function mi() {
  zo = !1;
}
function Qh() {
  this.visibilityState === "hidden" && Li && (zo = !0);
}
function em(e) {
  e.addEventListener("keydown", Jh, !0), e.addEventListener("mousedown", mi, !0), e.addEventListener("pointerdown", mi, !0), e.addEventListener("touchstart", mi, !0), e.addEventListener("visibilitychange", Qh, !0);
}
function tm(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return zo || Zh(t);
}
function gs() {
  const e = x.useCallback((i) => {
    i != null && em(i.ownerDocument);
  }, []), t = x.useRef(!1);
  function n() {
    return t.current ? (Li = !0, Yh.start(100, () => {
      Li = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(i) {
    return tm(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function jc(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Ac = (e) => {
  const t = x.useRef({});
  return x.useEffect(() => {
    t.current = e;
  }), t.current;
};
function nm(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function rm(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const om = Number.isInteger || rm;
function Mc(e, t, n, r) {
  const i = e[t];
  if (i == null || !om(i)) {
    const s = nm(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Dc(e, t, ...n) {
  return e[t] === void 0 ? null : Mc(e, t, ...n);
}
function Vi() {
  return null;
}
Dc.isRequired = Mc;
Vi.isRequired = Vi;
const bs = process.env.NODE_ENV === "production" ? Vi : Dc;
function fe(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      r[i] = e[i].reduce((s, a) => {
        if (a) {
          const l = t(a);
          l !== "" && s.push(l), n && n[a] && s.push(n[a]);
        }
        return s;
      }, []).join(" ");
    }
  ), r;
}
const im = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], sm = No(), am = Dh("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function lm(e) {
  return _c({
    props: e,
    name: "MuiStack",
    defaultTheme: sm
  });
}
function cm(e, t) {
  const n = x.Children.toArray(e).filter(Boolean);
  return n.reduce((r, i, s) => (r.push(i), s < n.length - 1 && r.push(/* @__PURE__ */ x.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const um = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], dm = ({
  ownerState: e,
  theme: t
}) => {
  let n = h({
    display: "flex",
    flexDirection: "column"
  }, Rt({
    theme: t
  }, hi({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (e.spacing) {
    const r = ls(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = hi({
      values: e.direction,
      base: i
    }), a = hi({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const p = u > 0 ? s[d[u - 1]] : "column";
        s[c] = p;
      }
    }), n = nt(n, Rt({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: sn(r, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${um(u ? s[u] : e.direction)}`]: sn(r, c)
      }
    }));
  }
  return n = wf(t.breakpoints, n), n;
};
function pm(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = am,
    useThemeProps: n = lm,
    componentName: r = "MuiStack"
  } = e, i = () => fe({
    root: ["root"]
  }, (c) => ue(r, c), {}), s = t(dm), a = /* @__PURE__ */ x.forwardRef(function(c, u) {
    const d = n(c), f = us(d), {
      component: p = "div",
      direction: g = "column",
      spacing: b = 0,
      divider: m,
      children: v,
      className: w,
      useFlexGap: O = !1
    } = f, C = ee(f, im), R = {
      direction: g,
      spacing: b,
      useFlexGap: O
    }, E = i();
    return /* @__PURE__ */ y.jsx(s, h({
      as: p,
      ownerState: R,
      ref: u,
      className: Oc(E.root, w)
    }, C, {
      children: m ? cm(v, m) : v
    }));
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: o.node,
    direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
    divider: o.node,
    spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
    sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
  }), a;
}
function fm(e, t) {
  return h({
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
const Er = {
  black: "#000",
  white: "#fff"
}, hm = {
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
}, xn = {
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
}, En = {
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
}, Xn = {
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
}, Tn = {
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
}, Cn = {
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
}, Rn = {
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
}, mm = ["mode", "contrastThreshold", "tonalOffset"], el = {
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
    paper: Er.white,
    default: Er.white
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
}, gi = {
  text: {
    primary: Er.white,
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
    active: Er.white,
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
function tl(e, t, n, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = zi(e.main, i) : t === "dark" && (e.dark = Di(e.main, s)));
}
function gm(e = "light") {
  return e === "dark" ? {
    main: Tn[200],
    light: Tn[50],
    dark: Tn[400]
  } : {
    main: Tn[700],
    light: Tn[400],
    dark: Tn[800]
  };
}
function bm(e = "light") {
  return e === "dark" ? {
    main: xn[200],
    light: xn[50],
    dark: xn[400]
  } : {
    main: xn[500],
    light: xn[300],
    dark: xn[700]
  };
}
function ym(e = "light") {
  return e === "dark" ? {
    main: En[500],
    light: En[300],
    dark: En[700]
  } : {
    main: En[700],
    light: En[400],
    dark: En[800]
  };
}
function vm(e = "light") {
  return e === "dark" ? {
    main: Cn[400],
    light: Cn[300],
    dark: Cn[700]
  } : {
    main: Cn[700],
    light: Cn[500],
    dark: Cn[900]
  };
}
function xm(e = "light") {
  return e === "dark" ? {
    main: Rn[400],
    light: Rn[300],
    dark: Rn[700]
  } : {
    main: Rn[800],
    light: Rn[500],
    dark: Rn[900]
  };
}
function Em(e = "light") {
  return e === "dark" ? {
    main: Xn[400],
    light: Xn[300],
    dark: Xn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xn[500],
    dark: Xn[900]
  };
}
function Tm(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, i = ee(e, mm), s = e.primary || gm(t), a = e.secondary || bm(t), l = e.error || ym(t), c = e.info || vm(t), u = e.success || xm(t), d = e.warning || Em(t);
  function f(m) {
    const v = Za(m, gi.text.primary) >= n ? gi.text.primary : el.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = Za(m, v);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${v} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const p = ({
    color: m,
    name: v,
    mainShade: w = 500,
    lightShade: O = 300,
    darkShade: C = 700
  }) => {
    if (m = h({}, m), !m.main && m[w] && (m.main = m[w]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Wt(11, v ? ` (${v})` : "", w));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Wt(12, v ? ` (${v})` : "", JSON.stringify(m.main)));
    return tl(m, "light", O, r), tl(m, "dark", C, r), m.contrastText || (m.contrastText = f(m.main)), m;
  }, g = {
    dark: gi,
    light: el
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), nt(h({
    // A collection of common colors.
    common: h({}, Er),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: hm,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, g[t]), i);
}
const Cm = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Rm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const nl = {
  textTransform: "uppercase"
}, rl = '"Roboto", "Helvetica", "Arial", sans-serif';
function wm(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = rl,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f
  } = n, p = ee(n, Cm);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = i / 14, b = f || ((w) => `${w / u * g}rem`), m = (w, O, C, R, E) => h({
    fontFamily: r,
    fontWeight: w,
    fontSize: b(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, r === rl ? {
    letterSpacing: `${Rm(R / O)}em`
  } : {}, E, d), v = {
    h1: m(s, 96, 1.167, -1.5),
    h2: m(s, 60, 1.2, -0.5),
    h3: m(a, 48, 1.167, 0),
    h4: m(a, 34, 1.235, 0.25),
    h5: m(a, 24, 1.334, 0),
    h6: m(l, 20, 1.6, 0.15),
    subtitle1: m(a, 16, 1.75, 0.15),
    subtitle2: m(l, 14, 1.57, 0.1),
    body1: m(a, 16, 1.5, 0.15),
    body2: m(a, 14, 1.43, 0.15),
    button: m(l, 14, 1.75, 0.4, nl),
    caption: m(a, 12, 1.66, 0.4),
    overline: m(a, 12, 2.66, 1, nl),
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return nt(h({
    htmlFontSize: u,
    pxToRem: b,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, v), p, {
    clone: !1
    // No need to clone deep
  });
}
const km = 0.2, Om = 0.14, Sm = 0.12;
function je(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${km})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Om})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Sm})`].join(",");
}
const $m = ["none", je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], _m = ["duration", "easing", "delay"], Pm = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Im = {
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
function ol(e) {
  return `${Math.round(e)}ms`;
}
function Nm(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function jm(e) {
  const t = h({}, Pm, e.easing), n = h({}, Im, e.duration);
  return h({
    getAutoHeightDuration: Nm,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = ee(s, _m);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", f = (p) => !isNaN(parseFloat(p));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : ol(a)} ${l} ${typeof c == "string" ? c : ol(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Am = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Mm = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function zc(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = ee(e, Mm);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Wt(18));
  const l = Tm(r), c = No(e);
  let u = nt(c, {
    mixins: fm(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: $m.slice(),
    typography: wm(l, s),
    transitions: jm(i),
    zIndex: h({}, Am)
  });
  if (u = nt(u, a), u = t.reduce((d, f) => nt(d, f), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (p, g) => {
      let b;
      for (b in p) {
        const m = p[b];
        if (d.indexOf(b) !== -1 && Object.keys(m).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = ue("", b);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: m
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[b] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const g = u.components[p].styleOverrides;
      g && p.indexOf("Mui") === 0 && f(g, p);
    });
  }
  return u.unstable_sxConfig = h({}, Io, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(f) {
    return Rr({
      sx: f,
      theme: this
    });
  }, u;
}
const Fo = zc(), wr = "$$material";
function pe({
  props: e,
  name: t
}) {
  return _c({
    props: e,
    name: t,
    defaultTheme: Fo,
    themeId: wr
  });
}
function ys(e) {
  return /* @__PURE__ */ y.jsx(wc, h({}, e, {
    defaultTheme: Fo,
    themeId: wr
  }));
}
process.env.NODE_ENV !== "production" && (ys.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
const Dm = (e, t) => h({
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
}), zm = (e) => h({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Fm = (e, t = !1) => {
  var n, r;
  const i = {};
  t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    var u;
    i[e.getColorSchemeSelector(l).replace(/\s*&/, "")] = {
      colorScheme: (u = c.palette) == null ? void 0 : u.mode
    };
  });
  let s = h({
    html: Dm(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: h({
      margin: 0
    }, zm(e), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    })
  }, i);
  const a = (n = e.components) == null || (r = n.MuiCssBaseline) == null ? void 0 : r.styleOverrides;
  return a && (s = [s, a]), s;
};
function Fc(e) {
  const t = pe({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ y.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ y.jsx(ys, {
      styles: (i) => Fm(i, r)
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (Fc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: o.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: o.bool
});
const Et = (e) => lr(e) && e !== "classes", Bm = lr, G = $c({
  themeId: wr,
  defaultTheme: Fo,
  rootShouldForwardProp: Et
}), ut = pm({
  createStyledComponent: G("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => pe({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (ut.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
  /**
   * Add an element between each child.
   */
  divider: o.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: o.bool
});
function Bc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = Bc(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function te() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = Bc(e)) && (r && (r += " "), r += t);
  return r;
}
function eo(e) {
  return typeof e == "string";
}
function Lm(e, t, n) {
  return e === void 0 || eo(e) ? t : h({}, t, {
    ownerState: h({}, t.ownerState, n)
  });
}
const Vm = {
  disableDefaultClasses: !1
}, Um = /* @__PURE__ */ x.createContext(Vm);
function Wm(e) {
  const {
    disableDefaultClasses: t
  } = x.useContext(Um);
  return (n) => t ? "" : e(n);
}
function qm(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Ui(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function il(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Hm(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const g = te(i == null ? void 0 : i.className, r == null ? void 0 : r.className, s, n == null ? void 0 : n.className), b = h({}, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), m = h({}, n, i, r);
    return g.length > 0 && (m.className = g), Object.keys(b).length > 0 && (m.style = b), {
      props: m,
      internalRef: void 0
    };
  }
  const a = qm(h({}, i, r)), l = il(r), c = il(i), u = t(a), d = te(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = h({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), p = h({}, u, n, c, l);
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: u.ref
  };
}
const Gm = ["elementType", "externalSlotProps", "ownerState"];
function to(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: i
  } = e, s = ee(e, Gm), a = Ui(r, i), {
    props: l,
    internalRef: c
  } = Hm(h({}, s, {
    externalSlotProps: a
  })), u = Ue(c, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Lm(n, h({}, l, {
    ref: u
  }), i);
}
function Km(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: r = 99,
    showZero: i = !1
  } = e, s = Ac({
    badgeContent: t,
    max: r
  });
  let a = n;
  n === !1 && t === 0 && !i && (a = !0);
  const {
    badgeContent: l,
    max: c = r
  } = a ? s : e, u = l && Number(l) > c ? `${c}+` : l;
  return {
    badgeContent: l,
    invisible: a,
    max: c,
    displayValue: u
  };
}
const Ym = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Xm(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Zm(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Jm(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Zm(e));
}
function Qm(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Ym)).forEach((r, i) => {
    const s = Xm(r);
    s === -1 || !Jm(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function eg() {
  return !0;
}
function no(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = Qm,
    isEnabled: a = eg,
    open: l
  } = e, c = x.useRef(!1), u = x.useRef(null), d = x.useRef(null), f = x.useRef(null), p = x.useRef(null), g = x.useRef(!1), b = x.useRef(null), m = Ue(t.ref, b), v = x.useRef(null);
  x.useEffect(() => {
    !l || !b.current || (g.current = !n);
  }, [n, l]), x.useEffect(() => {
    if (!l || !b.current)
      return;
    const C = rt(b.current);
    return b.current.contains(C.activeElement) || (b.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), b.current.setAttribute("tabIndex", "-1")), g.current && b.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), x.useEffect(() => {
    if (!l || !b.current)
      return;
    const C = rt(b.current), R = (k) => {
      const {
        current: _
      } = b;
      if (_ !== null) {
        if (!C.hasFocus() || r || !a() || c.current) {
          c.current = !1;
          return;
        }
        if (!_.contains(C.activeElement)) {
          if (k && p.current !== k.target || C.activeElement !== p.current)
            p.current = null;
          else if (p.current !== null)
            return;
          if (!g.current)
            return;
          let F = [];
          if ((C.activeElement === u.current || C.activeElement === d.current) && (F = s(b.current)), F.length > 0) {
            var z, P;
            const K = !!((z = v.current) != null && z.shiftKey && ((P = v.current) == null ? void 0 : P.key) === "Tab"), B = F[0], I = F[F.length - 1];
            typeof B != "string" && typeof I != "string" && (K ? I.focus() : B.focus());
          } else
            _.focus();
        }
      }
    }, E = (k) => {
      v.current = k, !(r || !a() || k.key !== "Tab") && C.activeElement === b.current && k.shiftKey && (c.current = !0, d.current && d.current.focus());
    };
    C.addEventListener("focusin", R), C.addEventListener("keydown", E, !0);
    const $ = setInterval(() => {
      C.activeElement && C.activeElement.tagName === "BODY" && R(null);
    }, 50);
    return () => {
      clearInterval($), C.removeEventListener("focusin", R), C.removeEventListener("keydown", E, !0);
    };
  }, [n, r, i, a, l, s]);
  const w = (C) => {
    f.current === null && (f.current = C.relatedTarget), g.current = !0, p.current = C.target;
    const R = t.props.onFocus;
    R && R(C);
  }, O = (C) => {
    f.current === null && (f.current = C.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ y.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ y.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ x.cloneElement(t, {
      ref: m,
      onFocus: w
    }), /* @__PURE__ */ y.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (no.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: pn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (no.propTypes = Ic(no.propTypes));
function tg(e) {
  return typeof e == "function" ? e() : e;
}
const ro = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = x.useState(null), c = Ue(/* @__PURE__ */ x.isValidElement(r) ? r.ref : null, n);
  if (qt(() => {
    s || l(tg(i) || document.body);
  }, [i, s]), qt(() => {
    if (a && !s)
      return Qr(n, a), () => {
        Qr(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ x.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ x.cloneElement(r, u);
    }
    return /* @__PURE__ */ y.jsx(x.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ y.jsx(x.Fragment, {
    children: a && /* @__PURE__ */ Yl.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (ro.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: o.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([ln, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (ro.propTypes = Ic(ro.propTypes));
function ng(e) {
  const t = rt(e);
  return t.body === e ? It(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function cr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function sl(e) {
  return parseInt(It(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function rg(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function al(e, t, n, r, i) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !rg(a);
    l && c && cr(a, i);
  });
}
function bi(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function og(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (ng(r)) {
      const a = jc(rt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${sl(r) + a}px`;
      const l = rt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${sl(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = rt(r).body;
    else {
      const a = r.parentElement, l = It(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function ig(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class sg {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && cr(t.modalRef, !1);
    const i = ig(n);
    al(n, t.mount, t.modalRef, i, !0);
    const s = bi(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = bi(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = og(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = bi(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && cr(t.modalRef, n), al(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && cr(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function ag(e) {
  return ue("MuiModal", e);
}
de("MuiModal", ["root", "hidden", "backdrop"]);
const lg = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"], cg = (e) => {
  const {
    open: t,
    exited: n
  } = e;
  return fe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Wm(ag));
};
function ug(e) {
  return typeof e == "function" ? e() : e;
}
function dg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const pg = new sg(), Lc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, i;
  const {
    children: s,
    closeAfterTransition: a = !1,
    container: l,
    disableAutoFocus: c = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: d = !1,
    disablePortal: f = !1,
    disableRestoreFocus: p = !1,
    disableScrollLock: g = !1,
    hideBackdrop: b = !1,
    keepMounted: m = !1,
    // private
    manager: v = pg,
    onBackdropClick: w,
    onClose: O,
    onKeyDown: C,
    open: R,
    onTransitionEnter: E,
    onTransitionExited: $,
    slotProps: k = {},
    slots: _ = {}
  } = t, z = ee(t, lg), P = v, [F, K] = x.useState(!R), B = x.useRef({}), I = x.useRef(null), j = x.useRef(null), H = Ue(j, n), L = dg(s), V = (r = t["aria-hidden"]) != null ? r : !0, Q = () => rt(I.current), S = () => (B.current.modalRef = j.current, B.current.mountNode = I.current, B.current), N = () => {
    P.mount(S(), {
      disableScrollLock: g
    }), j.current && (j.current.scrollTop = 0);
  }, U = Qt(() => {
    const _e = ug(l) || Q().body;
    P.add(S(), _e), j.current && N();
  }), X = x.useCallback(() => P.isTopModal(S()), [P]), W = Qt((_e) => {
    I.current = _e, !(!_e || !j.current) && (R && X() ? N() : cr(j.current, V));
  }), q = x.useCallback(() => {
    P.remove(S(), V);
  }, [P, V]);
  x.useEffect(() => () => {
    q();
  }, [q]), x.useEffect(() => {
    R ? U() : (!L || !a) && q();
  }, [R, q, L, a, U]);
  const Y = h({}, t, {
    closeAfterTransition: a,
    disableAutoFocus: c,
    disableEnforceFocus: u,
    disableEscapeKeyDown: d,
    disablePortal: f,
    disableRestoreFocus: p,
    disableScrollLock: g,
    exited: F,
    hideBackdrop: b,
    keepMounted: m
  }), oe = cg(Y), se = () => {
    K(!1), E && E();
  }, ne = () => {
    K(!0), $ && $(), a && q();
  }, ae = (_e) => {
    _e.target === _e.currentTarget && (w && w(_e), O && O(_e, "backdropClick"));
  }, re = (_e) => {
    C && C(_e), !(_e.key !== "Escape" || !X()) && (d || (_e.stopPropagation(), O && O(_e, "escapeKeyDown")));
  }, M = {};
  s.props.tabIndex === void 0 && (M.tabIndex = "-1"), L && (M.onEnter = Fi(se, s.props.onEnter), M.onExited = Fi(ne, s.props.onExited));
  const Pe = (i = _.root) != null ? i : "div", Z = to({
    elementType: Pe,
    externalSlotProps: k.root,
    externalForwardedProps: z,
    additionalProps: {
      ref: H,
      role: "presentation",
      onKeyDown: re
    },
    className: oe.root,
    ownerState: Y
  }), Ie = _.backdrop, qe = to({
    elementType: Ie,
    externalSlotProps: k.backdrop,
    additionalProps: {
      "aria-hidden": !0,
      onClick: ae,
      open: R
    },
    className: oe.backdrop,
    ownerState: Y
  });
  return !m && !R && (!L || F) ? null : /* @__PURE__ */ y.jsx(
    ro,
    {
      ref: W,
      container: l,
      disablePortal: f,
      children: /* @__PURE__ */ y.jsxs(Pe, h({}, Z, {
        children: [!b && Ie ? /* @__PURE__ */ y.jsx(Ie, h({}, qe)) : null, /* @__PURE__ */ y.jsx(no, {
          disableEnforceFocus: u,
          disableAutoFocus: c,
          disableRestoreFocus: p,
          isEnabled: X,
          open: R,
          children: /* @__PURE__ */ x.cloneElement(s, M)
        })]
      }))
    }
  );
});
process.env.NODE_ENV !== "production" && (Lc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: pn.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([ln, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  })
});
const fg = ["onChange", "maxRows", "minRows", "style", "value"];
function Ir(e) {
  return parseInt(e, 10) || 0;
}
const hg = {
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
function ll(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow;
}
const Vc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l
  } = t, c = ee(t, fg), {
    current: u
  } = x.useRef(l != null), d = x.useRef(null), f = Ue(n, d), p = x.useRef(null), g = x.useRef(0), [b, m] = x.useState({
    outerHeightStyle: 0
  }), v = x.useCallback(() => {
    const E = d.current, k = It(E).getComputedStyle(E);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const _ = p.current;
    _.style.width = k.width, _.value = E.value || t.placeholder || "x", _.value.slice(-1) === `
` && (_.value += " ");
    const z = k.boxSizing, P = Ir(k.paddingBottom) + Ir(k.paddingTop), F = Ir(k.borderBottomWidth) + Ir(k.borderTopWidth), K = _.scrollHeight;
    _.value = "x";
    const B = _.scrollHeight;
    let I = K;
    s && (I = Math.max(Number(s) * B, I)), i && (I = Math.min(Number(i) * B, I)), I = Math.max(I, B);
    const j = I + (z === "border-box" ? P + F : 0), H = Math.abs(I - K) <= 1;
    return {
      outerHeightStyle: j,
      overflow: H
    };
  }, [i, s, t.placeholder]), w = (E, $) => {
    const {
      outerHeightStyle: k,
      overflow: _
    } = $;
    return g.current < 20 && (k > 0 && Math.abs((E.outerHeightStyle || 0) - k) > 1 || E.overflow !== _) ? (g.current += 1, {
      overflow: _,
      outerHeightStyle: k
    }) : (process.env.NODE_ENV !== "production" && g.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), E);
  }, O = x.useCallback(() => {
    const E = v();
    ll(E) || m(($) => w($, E));
  }, [v]), C = () => {
    const E = v();
    ll(E) || Yl.flushSync(() => {
      m(($) => w($, E));
    });
  };
  x.useEffect(() => {
    const E = Do(() => {
      g.current = 0, d.current && C();
    });
    let $;
    const k = d.current, _ = It(k);
    return _.addEventListener("resize", E), typeof ResizeObserver < "u" && ($ = new ResizeObserver(E), $.observe(k)), () => {
      E.clear(), _.removeEventListener("resize", E), $ && $.disconnect();
    };
  }), qt(() => {
    O();
  }), x.useEffect(() => {
    g.current = 0;
  }, [l]);
  const R = (E) => {
    g.current = 0, u || O(), r && r(E);
  };
  return /* @__PURE__ */ y.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ y.jsx("textarea", h({
      value: l,
      onChange: R,
      ref: f,
      rows: s,
      style: h({
        height: b.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: b.overflow ? "hidden" : void 0
      }, a)
    }, c)), /* @__PURE__ */ y.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: p,
      tabIndex: -1,
      style: h({}, hg.shadow, a, {
        padding: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Vc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
function mg(e) {
  return ue("MuiDivider", e);
}
const cl = de("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), gg = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], bg = (e) => {
  const {
    absolute: t,
    children: n,
    classes: r,
    flexItem: i,
    light: s,
    orientation: a,
    textAlign: l,
    variant: c
  } = e;
  return fe({
    root: ["root", t && "absolute", c, s && "light", a === "vertical" && "vertical", i && "flexItem", n && "withChildren", n && a === "vertical" && "withChildrenVertical", l === "right" && a !== "vertical" && "textAlignRight", l === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, mg, r);
}, yg = G("div", {
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
}) => h({
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
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : Ne(e.palette.divider, 0.08)
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
}) => h({}, e.children && {
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
}) => h({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => h({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => h({}, e.textAlign === "right" && e.orientation !== "vertical" && {
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
})), vg = G("span", {
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
}) => h({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), $n = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: i = !1,
    children: s,
    className: a,
    component: l = s ? "div" : "hr",
    flexItem: c = !1,
    light: u = !1,
    orientation: d = "horizontal",
    role: f = l !== "hr" ? "separator" : void 0,
    textAlign: p = "center",
    variant: g = "fullWidth"
  } = r, b = ee(r, gg), m = h({}, r, {
    absolute: i,
    component: l,
    flexItem: c,
    light: u,
    orientation: d,
    role: f,
    textAlign: p,
    variant: g
  }), v = bg(m);
  return /* @__PURE__ */ y.jsx(yg, h({
    as: l,
    className: te(v.root, a),
    role: f,
    ref: n,
    ownerState: m
  }, b, {
    children: s ? /* @__PURE__ */ y.jsx(vg, {
      className: v.wrapper,
      ownerState: m,
      children: s
    }) : null
  }));
});
process.env.NODE_ENV !== "production" && ($n.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: o.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   */
  light: o.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: o.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: o.oneOfType([o.oneOf(["fullWidth", "inset", "middle"]), o.string])
});
function xg(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Eg(e) {
  return parseFloat(e);
}
function fn() {
  const e = jo(Fo);
  return process.env.NODE_ENV !== "production" && x.useDebugValue(e), e[wr] || e;
}
const ul = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function Tg(e) {
  return ue("MuiSvgIcon", e);
}
de("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Cg = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Rg = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${A(t)}`, `fontSize${A(n)}`]
  };
  return fe(i, Tg, r);
}, wg = G("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${A(n.color)}`], t[`fontSize${A(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, i, s, a, l, c, u, d, f, p, g, b, m, v, w, O;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (i = e.transitions) == null || (s = i.duration) == null ? void 0 : s.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((a = e.typography) == null || (l = a.pxToRem) == null ? void 0 : l.call(a, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem",
      large: ((d = e.typography) == null || (f = d.pxToRem) == null ? void 0 : f.call(d, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (g = (e.vars || e).palette) == null || (b = g[t.color]) == null ? void 0 : b.main) != null ? p : {
      action: (m = (e.vars || e).palette) == null || (v = m.action) == null ? void 0 : v.active,
      disabled: (w = (e.vars || e).palette) == null || (O = w.action) == null ? void 0 : O.disabled,
      inherit: void 0
    }[t.color]
  };
}), oo = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24"
  } = r, g = ee(r, Cg), b = h({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p
  }), m = {};
  d || (m.viewBox = p);
  const v = Rg(b);
  return /* @__PURE__ */ y.jsxs(wg, h({
    as: l,
    className: te(v.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, m, g, {
    ownerState: b,
    children: [i, f ? /* @__PURE__ */ y.jsx("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (oo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
oo.muiName = "SvgIcon";
function Be(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ y.jsx(oo, h({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = oo.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(n));
}
const kg = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), ds.configure(e);
  }
}, Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: A,
  createChainedFunction: Fi,
  createSvgIcon: Be,
  debounce: Do,
  deprecatedPropType: Hh,
  isMuiElement: Ur,
  ownerDocument: rt,
  ownerWindow: It,
  requirePropFactory: Gh,
  setRef: Qr,
  unstable_ClassNameGenerator: kg,
  unstable_useEnhancedEffect: qt,
  unstable_useId: hs,
  unsupportedProp: Nc,
  useControlled: Bi,
  useEventCallback: Qt,
  useForkRef: Ue,
  useIsFocusVisible: gs
}, Symbol.toStringTag, { value: "Module" }));
function Wi(e, t) {
  return Wi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Wi(e, t);
}
function Uc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wi(e, t);
}
const dl = {
  disabled: !1
};
var Sg = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const io = Ze.createContext(null);
var $g = function(t) {
  return t.scrollTop;
}, sr = "unmounted", Zt = "exited", Jt = "entering", kn = "entered", qi = "exiting", wt = /* @__PURE__ */ function(e) {
  Uc(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = Zt, s.appearStatus = Jt) : c = kn : r.unmountOnExit || r.mountOnEnter ? c = sr : c = Zt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === sr ? {
      status: Zt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Jt && a !== kn && (s = Jt) : (a === Jt || a === kn) && (s = qi);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Jt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : rr.findDOMNode(this);
          a && $g(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Zt && this.setState({
      status: sr
    });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [rr.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), p = l ? f.appear : f.enter;
    if (!i && !a || dl.disabled) {
      this.safeSetState({
        status: kn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Jt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(p, function() {
        s.safeSetState({
          status: kn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : rr.findDOMNode(this);
    if (!s || dl.disabled) {
      this.safeSetState({
        status: Zt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: qi
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Zt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, n.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : rr.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === sr)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = ee(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ze.createElement(io.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : Ze.cloneElement(Ze.Children.only(a), l))
    );
  }, t;
}(Ze.Component);
wt.contextType = io;
wt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, i, s) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Sg;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function wn() {
}
wt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: wn,
  onEntering: wn,
  onEntered: wn,
  onExit: wn,
  onExiting: wn,
  onExited: wn
};
wt.UNMOUNTED = sr;
wt.EXITED = Zt;
wt.ENTERING = Jt;
wt.ENTERED = kn;
wt.EXITING = qi;
function _g(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vs(e, t) {
  var n = function(s) {
    return t && Dr(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && ld.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function Pg(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (r[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = n(u);
      }
    l[c] = n(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = n(i[a]);
  return l;
}
function en(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Ig(e, t) {
  return vs(e.children, function(n) {
    return zr(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: en(n, "appear", e),
      enter: en(n, "enter", e),
      exit: en(n, "exit", e)
    });
  });
}
function Ng(e, t, n) {
  var r = vs(e.children), i = Pg(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (Dr(a)) {
      var l = s in t, c = s in r, u = t[s], d = Dr(u) && !u.props.in;
      c && (!l || d) ? i[s] = zr(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: en(a, "exit", e),
        enter: en(a, "enter", e)
      }) : !c && l && !d ? i[s] = zr(a, {
        in: !1
      }) : c && l && Dr(u) && (i[s] = zr(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: en(a, "exit", e),
        enter: en(a, "enter", e)
      }));
    }
  }), i;
}
var jg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ag = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, xs = /* @__PURE__ */ function(e) {
  Uc(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(_g(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
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
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Ig(i, l) : Ng(i, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = vs(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = h({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = ee(i, ["component", "childFactory"]), c = this.state.contextValue, u = jg(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ Ze.createElement(io.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Ze.createElement(io.Provider, {
      value: c
    }, /* @__PURE__ */ Ze.createElement(s, l, u));
  }, t;
}(Ze.Component);
xs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: o.func
} : {};
xs.defaultProps = Ag;
const Es = (e) => e.scrollTop;
function Dn(e, t) {
  var n, r;
  const {
    timeout: i,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof s == "object" ? s[t.mode] : s,
    delay: a.transitionDelay
  };
}
function Mg(e) {
  return ue("MuiPaper", e);
}
de("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Dg = ["className", "component", "elevation", "square", "variant"], zg = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return fe(s, Mg, i);
}, Fg = G("div", {
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
  return h({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && h({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Ne("#fff", ul(t.elevation))}, ${Ne("#fff", ul(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), zt = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ee(r, Dg), d = h({}, r, {
    component: s,
    elevation: a,
    square: l,
    variant: c
  }), f = zg(d);
  return process.env.NODE_ENV !== "production" && fn().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ y.jsx(Fg, h({
    as: s,
    ownerState: d,
    className: te(f.root, i),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (zt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Kt(bs, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
function Wc(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = x.useState(!1), p = te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, b = te(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), x.useEffect(() => {
    if (!l && c != null) {
      const m = setTimeout(c, u);
      return () => {
        clearTimeout(m);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ y.jsx("span", {
    className: p,
    style: g,
    children: /* @__PURE__ */ y.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Wc.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const gt = de("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Bg = ["center", "classes", "className"];
let Bo = (e) => e, pl, fl, hl, ml;
const Hi = 550, Lg = 80, Vg = dn(pl || (pl = Bo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Ug = dn(fl || (fl = Bo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Wg = dn(hl || (hl = Bo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), qg = G("span", {
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
}), Hg = G(Wc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ml || (ml = Bo`
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
`), gt.rippleVisible, Vg, Hi, ({
  theme: e
}) => e.transitions.easing.easeInOut, gt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, gt.child, gt.childLeaving, Ug, Hi, ({
  theme: e
}) => e.transitions.easing.easeInOut, gt.childPulsate, Wg, ({
  theme: e
}) => e.transitions.easing.easeInOut), qc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = r, l = ee(r, Bg), [c, u] = x.useState([]), d = x.useRef(0), f = x.useRef(null);
  x.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const p = x.useRef(!1), g = x.useRef(null), b = x.useRef(null), m = x.useRef(null);
  x.useEffect(() => () => {
    clearTimeout(g.current);
  }, []);
  const v = x.useCallback((R) => {
    const {
      pulsate: E,
      rippleX: $,
      rippleY: k,
      rippleSize: _,
      cb: z
    } = R;
    u((P) => [...P, /* @__PURE__ */ y.jsx(Hg, {
      classes: {
        ripple: te(s.ripple, gt.ripple),
        rippleVisible: te(s.rippleVisible, gt.rippleVisible),
        ripplePulsate: te(s.ripplePulsate, gt.ripplePulsate),
        child: te(s.child, gt.child),
        childLeaving: te(s.childLeaving, gt.childLeaving),
        childPulsate: te(s.childPulsate, gt.childPulsate)
      },
      timeout: Hi,
      pulsate: E,
      rippleX: $,
      rippleY: k,
      rippleSize: _
    }, d.current)]), d.current += 1, f.current = z;
  }, [s]), w = x.useCallback((R = {}, E = {}, $ = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: _ = i || E.pulsate,
      fakeElement: z = !1
      // For test purposes
    } = E;
    if ((R == null ? void 0 : R.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (R == null ? void 0 : R.type) === "touchstart" && (p.current = !0);
    const P = z ? null : m.current, F = P ? P.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let K, B, I;
    if (_ || R === void 0 || R.clientX === 0 && R.clientY === 0 || !R.clientX && !R.touches)
      K = Math.round(F.width / 2), B = Math.round(F.height / 2);
    else {
      const {
        clientX: j,
        clientY: H
      } = R.touches && R.touches.length > 0 ? R.touches[0] : R;
      K = Math.round(j - F.left), B = Math.round(H - F.top);
    }
    if (_)
      I = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const j = Math.max(Math.abs((P ? P.clientWidth : 0) - K), K) * 2 + 2, H = Math.max(Math.abs((P ? P.clientHeight : 0) - B), B) * 2 + 2;
      I = Math.sqrt(j ** 2 + H ** 2);
    }
    R != null && R.touches ? b.current === null && (b.current = () => {
      v({
        pulsate: k,
        rippleX: K,
        rippleY: B,
        rippleSize: I,
        cb: $
      });
    }, g.current = setTimeout(() => {
      b.current && (b.current(), b.current = null);
    }, Lg)) : v({
      pulsate: k,
      rippleX: K,
      rippleY: B,
      rippleSize: I,
      cb: $
    });
  }, [i, v]), O = x.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), C = x.useCallback((R, E) => {
    if (clearTimeout(g.current), (R == null ? void 0 : R.type) === "touchend" && b.current) {
      b.current(), b.current = null, g.current = setTimeout(() => {
        C(R, E);
      });
      return;
    }
    b.current = null, u(($) => $.length > 0 ? $.slice(1) : $), f.current = E;
  }, []);
  return x.useImperativeHandle(n, () => ({
    pulsate: O,
    start: w,
    stop: C
  }), [O, w, C]), /* @__PURE__ */ y.jsx(qg, h({
    className: te(gt.root, s.root, a),
    ref: m
  }, l, {
    children: /* @__PURE__ */ y.jsx(xs, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (qc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
function Gg(e) {
  return ue("MuiButtonBase", e);
}
const Kg = de("MuiButtonBase", ["root", "disabled", "focusVisible"]), Yg = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Xg = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, a = fe({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Gg, i);
  return n && r && (a.root += ` ${r}`), a;
}, Zg = G("button", {
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
  [`&.${Kg.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), cn = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: p = !1,
    LinkComponent: g = "a",
    onBlur: b,
    onClick: m,
    onContextMenu: v,
    onDragLeave: w,
    onFocus: O,
    onFocusVisible: C,
    onKeyDown: R,
    onKeyUp: E,
    onMouseDown: $,
    onMouseLeave: k,
    onMouseUp: _,
    onTouchEnd: z,
    onTouchMove: P,
    onTouchStart: F,
    tabIndex: K = 0,
    TouchRippleProps: B,
    touchRippleRef: I,
    type: j
  } = r, H = ee(r, Yg), L = x.useRef(null), V = x.useRef(null), Q = Ue(V, I), {
    isFocusVisibleRef: S,
    onFocus: N,
    onBlur: U,
    ref: X
  } = gs(), [W, q] = x.useState(!1);
  u && W && q(!1), x.useImperativeHandle(i, () => ({
    focusVisible: () => {
      q(!0), L.current.focus();
    }
  }), []);
  const [Y, oe] = x.useState(!1);
  x.useEffect(() => {
    oe(!0);
  }, []);
  const se = Y && !d && !u;
  x.useEffect(() => {
    W && p && !d && Y && V.current.pulsate();
  }, [d, p, W, Y]);
  function ne(le, ht, ie = f) {
    return Qt((he) => (ht && ht(he), !ie && V.current && V.current[le](he), !0));
  }
  const ae = ne("start", $), re = ne("stop", v), M = ne("stop", w), Pe = ne("stop", _), Z = ne("stop", (le) => {
    W && le.preventDefault(), k && k(le);
  }), Ie = ne("start", F), qe = ne("stop", z), _e = ne("stop", P), Tt = ne("stop", (le) => {
    U(le), S.current === !1 && q(!1), b && b(le);
  }, !1), kt = Qt((le) => {
    L.current || (L.current = le.currentTarget), N(le), S.current === !0 && (q(!0), C && C(le)), O && O(le);
  }), Ye = () => {
    const le = L.current;
    return c && c !== "button" && !(le.tagName === "A" && le.href);
  }, We = x.useRef(!1), ft = Qt((le) => {
    p && !We.current && W && V.current && le.key === " " && (We.current = !0, V.current.stop(le, () => {
      V.current.start(le);
    })), le.target === le.currentTarget && Ye() && le.key === " " && le.preventDefault(), R && R(le), le.target === le.currentTarget && Ye() && le.key === "Enter" && !u && (le.preventDefault(), m && m(le));
  }), it = Qt((le) => {
    p && le.key === " " && V.current && W && !le.defaultPrevented && (We.current = !1, V.current.stop(le, () => {
      V.current.pulsate(le);
    })), E && E(le), m && le.target === le.currentTarget && Ye() && le.key === " " && !le.defaultPrevented && m(le);
  });
  let st = c;
  st === "button" && (H.href || H.to) && (st = g);
  const at = {};
  st === "button" ? (at.type = j === void 0 ? "button" : j, at.disabled = u) : (!H.href && !H.to && (at.role = "button"), u && (at["aria-disabled"] = u));
  const Ct = Ue(n, X, L);
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    se && !V.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [se]);
  const Je = h({}, r, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: p,
    tabIndex: K,
    focusVisible: W
  }), ve = Xg(Je);
  return /* @__PURE__ */ y.jsxs(Zg, h({
    as: st,
    className: te(ve.root, l),
    ownerState: Je,
    onBlur: Tt,
    onClick: m,
    onContextMenu: re,
    onFocus: kt,
    onKeyDown: ft,
    onKeyUp: it,
    onMouseDown: ae,
    onMouseLeave: Z,
    onMouseUp: Pe,
    onDragLeave: M,
    onTouchEnd: qe,
    onTouchMove: _e,
    onTouchStart: Ie,
    ref: Ct,
    tabIndex: u ? -1 : K,
    type: j
  }, at, H, {
    children: [a, se ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ y.jsx(qc, h({
        ref: Q,
        center: s
      }, B))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (cn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Dt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Mo,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
function Jg(e) {
  return ue("MuiAlert", e);
}
const gl = de("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function Qg(e) {
  return ue("MuiIconButton", e);
}
const eb = de("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), tb = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], nb = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: s
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${A(r)}`, i && `edge${A(i)}`, `size${A(s)}`]
  };
  return fe(a, Qg, t);
}, rb = G(cn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${A(n.color)}`], n.edge && t[`edge${A(n.edge)}`], t[`size${A(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => h({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return h({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && h({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": h({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(r.main, e.palette.action.hoverOpacity)
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
    [`&.${eb.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), zn = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, f = ee(r, tb), p = h({}, r, {
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), g = nb(p);
  return /* @__PURE__ */ y.jsx(rb, h({
    className: te(g.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n,
    ownerState: p
  }, f, {
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (zn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: Kt(o.node, (e) => x.Children.toArray(e.children).some((n) => /* @__PURE__ */ x.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const ob = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), ib = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), sb = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), ab = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), lb = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), cb = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], ub = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: i
  } = e, s = {
    root: ["root", `${t}${A(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return fe(s, Jg, i);
}, db = G(zt, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${A(n.color || n.severity)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? Di : zi, r = e.palette.mode === "light" ? zi : Di, i = t.color || t.severity;
  return h({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, i && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${i}Color`] : n(e.palette[i].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${i}StandardBg`] : r(e.palette[i].light, 0.9),
    [`& .${gl.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${i}IconColor`]
    } : {
      color: e.palette[i].main
    }
  }, i && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${i}Color`] : n(e.palette[i].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[i].light}`,
    [`& .${gl.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${i}IconColor`]
    } : {
      color: e.palette[i].main
    }
  }, i && t.variant === "filled" && h({
    fontWeight: e.typography.fontWeightMedium
  }, e.vars ? {
    color: e.vars.palette.Alert[`${i}FilledColor`],
    backgroundColor: e.vars.palette.Alert[`${i}FilledBg`]
  } : {
    backgroundColor: e.palette.mode === "dark" ? e.palette[i].dark : e.palette[i].main,
    color: e.palette.getContrastText(e.palette[i].main)
  }));
}), pb = G("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), fb = G("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), bl = G("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), yl = {
  success: /* @__PURE__ */ y.jsx(ob, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ y.jsx(ib, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ y.jsx(sb, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ y.jsx(ab, {
    fontSize: "inherit"
  })
}, Hc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, i, s, a, l, c;
  const u = pe({
    props: t,
    name: "MuiAlert"
  }), {
    action: d,
    children: f,
    className: p,
    closeText: g = "Close",
    color: b,
    components: m = {},
    componentsProps: v = {},
    icon: w,
    iconMapping: O = yl,
    onClose: C,
    role: R = "alert",
    severity: E = "success",
    slotProps: $ = {},
    slots: k = {},
    variant: _ = "standard"
  } = u, z = ee(u, cb), P = h({}, u, {
    color: b,
    severity: E,
    variant: _
  }), F = ub(P), K = (r = (i = k.closeButton) != null ? i : m.CloseButton) != null ? r : zn, B = (s = (a = k.closeIcon) != null ? a : m.CloseIcon) != null ? s : lb, I = (l = $.closeButton) != null ? l : v.closeButton, j = (c = $.closeIcon) != null ? c : v.closeIcon;
  return /* @__PURE__ */ y.jsxs(db, h({
    role: R,
    elevation: 0,
    ownerState: P,
    className: te(F.root, p),
    ref: n
  }, z, {
    children: [w !== !1 ? /* @__PURE__ */ y.jsx(pb, {
      ownerState: P,
      className: F.icon,
      children: w || O[E] || yl[E]
    }) : null, /* @__PURE__ */ y.jsx(fb, {
      ownerState: P,
      className: F.message,
      children: f
    }), d != null ? /* @__PURE__ */ y.jsx(bl, {
      ownerState: P,
      className: F.action,
      children: d
    }) : null, d == null && C ? /* @__PURE__ */ y.jsx(bl, {
      ownerState: P,
      className: F.action,
      children: /* @__PURE__ */ y.jsx(K, h({
        size: "small",
        "aria-label": g,
        title: g,
        color: "inherit",
        onClick: C
      }, I, {
        children: /* @__PURE__ */ y.jsx(B, h({
          fontSize: "small"
        }, j))
      }))
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Hc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: o.node,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: o.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    CloseButton: o.elementType,
    CloseIcon: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    closeButton: o.object,
    closeIcon: o.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: o.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: o.shape({
    error: o.node,
    info: o.node,
    success: o.node,
    warning: o.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: o.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: o.oneOf(["error", "info", "success", "warning"]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    closeButton: o.object,
    closeIcon: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    closeButton: o.elementType,
    closeIcon: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
function hb(e) {
  return ue("MuiTypography", e);
}
de("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const mb = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], gb = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${A(t)}`, n && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return fe(l, hb, a);
}, bb = G("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${A(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => h({
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
})), vl = {
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
}, yb = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, vb = (e) => yb[e] || e, Un = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTypography"
  }), i = vb(r.color), s = us(h({}, r, {
    color: i
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: f = !1,
    variant: p = "body1",
    variantMapping: g = vl
  } = s, b = ee(s, mb), m = h({}, s, {
    align: a,
    color: i,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: f,
    variant: p,
    variantMapping: g
  }), v = c || (f ? "p" : g[p] || vl[p]) || "span", w = gb(m);
  return /* @__PURE__ */ y.jsx(bb, h({
    as: v,
    ref: n,
    ownerState: m,
    className: te(w.root, l)
  }, b));
});
process.env.NODE_ENV !== "production" && (Un.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: o.object
});
function xb(e) {
  return ue("MuiAppBar", e);
}
de("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent"]);
const Eb = ["className", "color", "enableColorOnDark", "position"], Tb = (e) => {
  const {
    color: t,
    position: n,
    classes: r
  } = e, i = {
    root: ["root", `color${A(t)}`, `position${A(n)}`]
  };
  return fe(i, xb, r);
}, Nr = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, Cb = G(zt, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`position${A(n.position)}`], t[`color${A(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
  return h({
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
  }, !e.vars && h({}, t.color === "default" && {
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
  }, t.color === "transparent" && h({
    backgroundColor: "transparent",
    color: "inherit"
  }, e.palette.mode === "dark" && {
    backgroundImage: "none"
  })), e.vars && h({}, t.color === "default" && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : Nr(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : Nr(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
  }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : Nr(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
    "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : Nr(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
  }, {
    backgroundColor: "var(--AppBar-background)",
    color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, t.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), Gc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiAppBar"
  }), {
    className: i,
    color: s = "primary",
    enableColorOnDark: a = !1,
    position: l = "fixed"
  } = r, c = ee(r, Eb), u = h({}, r, {
    color: s,
    position: l,
    enableColorOnDark: a
  }), d = Tb(u);
  return /* @__PURE__ */ y.jsx(Cb, h({
    square: !0,
    component: "header",
    ownerState: u,
    elevation: 4,
    className: te(d.root, i, l === "fixed" && "mui-fixed"),
    ref: n
  }, c));
});
process.env.NODE_ENV !== "production" && (Gc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "inherit", "primary", "secondary", "transparent"]), o.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: o.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: o.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Rb = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function wb(e) {
  return ue("MuiChip", e);
}
const ye = de("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), kb = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], Ob = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: i,
    iconColor: s,
    onDelete: a,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, n && "disabled", `size${A(r)}`, `color${A(i)}`, l && "clickable", l && `clickableColor${A(i)}`, a && "deletable", a && `deletableColor${A(i)}`, `${c}${A(i)}`],
    label: ["label", `label${A(r)}`],
    avatar: ["avatar", `avatar${A(r)}`, `avatarColor${A(i)}`],
    icon: ["icon", `icon${A(r)}`, `iconColor${A(s)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${A(r)}`, `deleteIconColor${A(i)}`, `deleteIcon${A(c)}Color${A(i)}`]
  };
  return fe(u, wb, t);
}, Sb = G("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: i,
      clickable: s,
      onDelete: a,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${ye.avatar}`]: t.avatar
    }, {
      [`& .${ye.avatar}`]: t[`avatar${A(l)}`]
    }, {
      [`& .${ye.avatar}`]: t[`avatarColor${A(r)}`]
    }, {
      [`& .${ye.icon}`]: t.icon
    }, {
      [`& .${ye.icon}`]: t[`icon${A(l)}`]
    }, {
      [`& .${ye.icon}`]: t[`iconColor${A(i)}`]
    }, {
      [`& .${ye.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ye.deleteIcon}`]: t[`deleteIcon${A(l)}`]
    }, {
      [`& .${ye.deleteIcon}`]: t[`deleteIconColor${A(r)}`]
    }, {
      [`& .${ye.deleteIcon}`]: t[`deleteIcon${A(c)}Color${A(r)}`]
    }, t.root, t[`size${A(l)}`], t[`color${A(r)}`], s && t.clickable, s && r !== "default" && t[`clickableColor${A(r)})`], a && t.deletable, a && r !== "default" && t[`deletableColor${A(r)}`], t[c], t[`${c}${A(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return h({
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
    [`&.${ye.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ye.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ye.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${ye.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${ye.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${ye.icon}`]: h({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && h({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${ye.deleteIcon}`]: h({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Ne(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Ne(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : Ne(e.palette[t.color].contrastText, 0.7),
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
    [`&.${ye.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ne(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${ye.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => h({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ne(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${ye.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ne(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${ye.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => h({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${ye.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${ye.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${ye.avatar}`]: {
    marginLeft: 4
  },
  [`& .${ye.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${ye.icon}`]: {
    marginLeft: 4
  },
  [`& .${ye.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${ye.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${ye.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ne(e.palette[t.color].main, 0.7)}`,
  [`&.${ye.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${ye.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ne(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${ye.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ne(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), $b = G("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${A(r)}`]];
  }
})(({
  ownerState: e
}) => h({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}));
function xl(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Ts = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: s,
    clickable: a,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: f,
    label: p,
    onClick: g,
    onDelete: b,
    onKeyDown: m,
    onKeyUp: v,
    size: w = "medium",
    variant: O = "filled",
    tabIndex: C,
    skipFocusWhenDisabled: R = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, E = ee(r, kb), $ = x.useRef(null), k = Ue($, n), _ = (Q) => {
    Q.stopPropagation(), b && b(Q);
  }, z = (Q) => {
    Q.currentTarget === Q.target && xl(Q) && Q.preventDefault(), m && m(Q);
  }, P = (Q) => {
    Q.currentTarget === Q.target && (b && xl(Q) ? b(Q) : Q.key === "Escape" && $.current && $.current.blur()), v && v(Q);
  }, F = a !== !1 && g ? !0 : a, K = F || b ? cn : c || "div", B = h({}, r, {
    component: K,
    disabled: d,
    size: w,
    color: l,
    iconColor: /* @__PURE__ */ x.isValidElement(f) && f.props.color || l,
    onDelete: !!b,
    clickable: F,
    variant: O
  }), I = Ob(B), j = K === cn ? h({
    component: c || "div",
    focusVisibleClassName: I.focusVisible
  }, b && {
    disableRipple: !0
  }) : {};
  let H = null;
  b && (H = u && /* @__PURE__ */ x.isValidElement(u) ? /* @__PURE__ */ x.cloneElement(u, {
    className: te(u.props.className, I.deleteIcon),
    onClick: _
  }) : /* @__PURE__ */ y.jsx(Rb, {
    className: te(I.deleteIcon),
    onClick: _
  }));
  let L = null;
  i && /* @__PURE__ */ x.isValidElement(i) && (L = /* @__PURE__ */ x.cloneElement(i, {
    className: te(I.avatar, i.props.className)
  }));
  let V = null;
  return f && /* @__PURE__ */ x.isValidElement(f) && (V = /* @__PURE__ */ x.cloneElement(f, {
    className: te(I.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && L && V && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ y.jsxs(Sb, h({
    as: K,
    className: te(I.root, s),
    disabled: F && d ? !0 : void 0,
    onClick: g,
    onKeyDown: z,
    onKeyUp: P,
    ref: k,
    tabIndex: R && d ? -1 : C,
    ownerState: B
  }, j, E, {
    children: [L || V, /* @__PURE__ */ y.jsx($b, {
      className: te(I.label),
      ownerState: B,
      children: p
    }), H]
  }));
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Avatar element to display.
   */
  avatar: o.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Nc,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: o.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: o.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Icon element.
   */
  icon: o.element,
  /**
   * The content of the component.
   */
  label: o.node,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  tabIndex: o.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined"]), o.string])
});
function Wn({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const Lo = /* @__PURE__ */ x.createContext(void 0);
process.env.NODE_ENV !== "production" && (Lo.displayName = "FormControlContext");
function qn() {
  return x.useContext(Lo);
}
function El(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function so(e, t = !1) {
  return e && (El(e.value) && e.value !== "" || t && El(e.defaultValue) && e.defaultValue !== "");
}
function _b(e) {
  return e.startAdornment;
}
function Pb(e) {
  return ue("MuiInputBase", e);
}
const Fn = de("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), Ib = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Vo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${A(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Uo = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Nb = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: p,
    startAdornment: g,
    type: b
  } = e, m = {
    root: ["root", `color${A(n)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", p === "small" && "sizeSmall", d && "multiline", g && "adornedStart", s && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", b === "search" && "inputTypeSearch", d && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", g && "inputAdornedStart", s && "inputAdornedEnd", f && "readOnly"]
  };
  return fe(m, Pb, t);
}, Wo = G("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Vo
})(({
  theme: e,
  ownerState: t
}) => h({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Fn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && h({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), qo = G("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Uo
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = h({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), i = {
    opacity: "0 !important"
  }, s = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return h({
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
    [`label[data-shrink=false] + .${Fn.formControl} &`]: {
      "&::-webkit-input-placeholder": i,
      "&::-moz-placeholder": i,
      // Firefox 19+
      "&:-ms-input-placeholder": i,
      // IE11
      "&::-ms-input-placeholder": i,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": s,
      // IE11
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${Fn.disabled}`]: {
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
}), jb = /* @__PURE__ */ y.jsx(ys, {
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
}), Ho = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r;
  const i = pe({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: a,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: p,
    disableInjectingGlobalStyles: g,
    endAdornment: b,
    fullWidth: m = !1,
    id: v,
    inputComponent: w = "input",
    inputProps: O = {},
    inputRef: C,
    maxRows: R,
    minRows: E,
    multiline: $ = !1,
    name: k,
    onBlur: _,
    onChange: z,
    onClick: P,
    onFocus: F,
    onKeyDown: K,
    onKeyUp: B,
    placeholder: I,
    readOnly: j,
    renderSuffix: H,
    rows: L,
    slotProps: V = {},
    slots: Q = {},
    startAdornment: S,
    type: N = "text",
    value: U
  } = i, X = ee(i, Ib), W = O.value != null ? O.value : U, {
    current: q
  } = x.useRef(W != null), Y = x.useRef(), oe = x.useCallback((ve) => {
    process.env.NODE_ENV !== "production" && ve && ve.nodeName !== "INPUT" && !ve.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), se = Ue(Y, C, O.ref, oe), [ne, ae] = x.useState(!1), re = qn();
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    if (re)
      return re.registerEffect();
  }, [re]);
  const M = Wn({
    props: i,
    muiFormControl: re,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  M.focused = re ? re.focused : ne, x.useEffect(() => {
    !re && p && ne && (ae(!1), _ && _());
  }, [re, p, ne, _]);
  const Pe = re && re.onFilled, Z = re && re.onEmpty, Ie = x.useCallback((ve) => {
    so(ve) ? Pe && Pe() : Z && Z();
  }, [Pe, Z]);
  qt(() => {
    q && Ie({
      value: W
    });
  }, [W, Ie, q]);
  const qe = (ve) => {
    if (M.disabled) {
      ve.stopPropagation();
      return;
    }
    F && F(ve), O.onFocus && O.onFocus(ve), re && re.onFocus ? re.onFocus(ve) : ae(!0);
  }, _e = (ve) => {
    _ && _(ve), O.onBlur && O.onBlur(ve), re && re.onBlur ? re.onBlur(ve) : ae(!1);
  }, Tt = (ve, ...le) => {
    if (!q) {
      const ht = ve.target || Y.current;
      if (ht == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Wt(1));
      Ie({
        value: ht.value
      });
    }
    O.onChange && O.onChange(ve, ...le), z && z(ve, ...le);
  };
  x.useEffect(() => {
    Ie(Y.current);
  }, []);
  const kt = (ve) => {
    Y.current && ve.currentTarget === ve.target && Y.current.focus(), P && !M.disabled && P(ve);
  };
  let Ye = w, We = O;
  $ && Ye === "input" && (L ? (process.env.NODE_ENV !== "production" && (E || R) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), We = h({
    type: void 0,
    minRows: L,
    maxRows: L
  }, We)) : We = h({
    type: void 0,
    maxRows: R,
    minRows: E
  }, We), Ye = Vc);
  const ft = (ve) => {
    Ie(ve.animationName === "mui-auto-fill-cancel" ? Y.current : {
      value: "x"
    });
  };
  x.useEffect(() => {
    re && re.setAdornedStart(!!S);
  }, [re, S]);
  const it = h({}, i, {
    color: M.color || "primary",
    disabled: M.disabled,
    endAdornment: b,
    error: M.error,
    focused: M.focused,
    formControl: re,
    fullWidth: m,
    hiddenLabel: M.hiddenLabel,
    multiline: $,
    size: M.size,
    startAdornment: S,
    type: N
  }), st = Nb(it), at = Q.root || u.Root || Wo, Ct = V.root || d.root || {}, Je = Q.input || u.Input || qo;
  return We = h({}, We, (r = V.input) != null ? r : d.input), /* @__PURE__ */ y.jsxs(x.Fragment, {
    children: [!g && jb, /* @__PURE__ */ y.jsxs(at, h({}, Ct, !eo(at) && {
      ownerState: h({}, it, Ct.ownerState)
    }, {
      ref: n,
      onClick: kt
    }, X, {
      className: te(st.root, Ct.className, c, j && "MuiInputBase-readOnly"),
      children: [S, /* @__PURE__ */ y.jsx(Lo.Provider, {
        value: null,
        children: /* @__PURE__ */ y.jsx(Je, h({
          ownerState: it,
          "aria-invalid": M.error,
          "aria-describedby": s,
          autoComplete: a,
          autoFocus: l,
          defaultValue: f,
          disabled: M.disabled,
          id: v,
          onAnimationStart: ft,
          name: k,
          placeholder: I,
          readOnly: j,
          required: M.required,
          rows: L,
          value: W,
          onKeyDown: K,
          onKeyUp: B,
          type: N
        }, We, !eo(Je) && {
          as: Ye,
          ownerState: h({}, it, We.ownerState)
        }, {
          ref: se,
          className: te(st.input, We.className, j && "MuiInputBase-readOnly"),
          onBlur: _e,
          onChange: Tt,
          onFocus: qe
        }))
      }), b, H ? H(h({}, M, {
        startAdornment: S
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Ho.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Mo,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
function Ab(e) {
  return ue("MuiInput", e);
}
const Zn = h({}, Fn, de("MuiInput", ["root", "underline", "input"]));
function Mb(e) {
  return ue("MuiOutlinedInput", e);
}
const Ft = h({}, Fn, de("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function Db(e) {
  return ue("MuiFilledInput", e);
}
const Yt = h({}, Fn, de("MuiFilledInput", ["root", "underline", "input"])), zb = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Fb = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Bb(e) {
  return ue("MuiAvatar", e);
}
de("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Lb = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"], Vb = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: r
  } = e;
  return fe({
    root: ["root", n, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Bb, t);
}, Ub = G("div", {
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
}) => h({
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
}, t.colorDefault && h({
  color: (e.vars || e).palette.background.default
}, e.vars ? {
  backgroundColor: e.vars.palette.Avatar.defaultBg
} : {
  backgroundColor: e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[600]
}))), Wb = G("img", {
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
}), qb = G(Fb, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function Hb({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: r
}) {
  const [i, s] = x.useState(!1);
  return x.useEffect(() => {
    if (!n && !r)
      return;
    s(!1);
    let a = !0;
    const l = new Image();
    return l.onload = () => {
      a && s("loaded");
    }, l.onerror = () => {
      a && s("error");
    }, l.crossOrigin = e, l.referrerPolicy = t, l.src = n, r && (l.srcset = r), () => {
      a = !1;
    };
  }, [e, t, n, r]), i;
}
const Cs = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: i,
    children: s,
    className: a,
    component: l = "div",
    imgProps: c,
    sizes: u,
    src: d,
    srcSet: f,
    variant: p = "circular"
  } = r, g = ee(r, Lb);
  let b = null;
  const m = Hb(h({}, c, {
    src: d,
    srcSet: f
  })), v = d || f, w = v && m !== "error", O = h({}, r, {
    colorDefault: !w,
    component: l,
    variant: p
  }), C = Vb(O);
  return w ? b = /* @__PURE__ */ y.jsx(Wb, h({
    alt: i,
    src: d,
    srcSet: f,
    sizes: u,
    ownerState: O,
    className: C.img
  }, c)) : s != null ? b = s : v && i ? b = i[0] : b = /* @__PURE__ */ y.jsx(qb, {
    ownerState: O,
    className: C.fallback
  }), /* @__PURE__ */ y.jsx(Ub, h({
    as: l,
    ownerState: O,
    className: te(C.root, a),
    ref: n
  }, g, {
    children: b
  }));
});
process.env.NODE_ENV !== "production" && (Cs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: o.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   */
  imgProps: o.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: o.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: o.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: o.oneOfType([o.oneOf(["circular", "rounded", "square"]), o.string])
});
const Gb = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Kb = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Rs = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = fn(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: p,
    onExit: g,
    onExited: b,
    onExiting: m,
    style: v,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = wt
  } = t, C = ee(t, Gb), R = x.useRef(null), E = Ue(R, l.ref, n), $ = (I) => (j) => {
    if (I) {
      const H = R.current;
      j === void 0 ? I(H) : I(H, j);
    }
  }, k = $(p), _ = $((I, j) => {
    Es(I);
    const H = Dn({
      style: v,
      timeout: w,
      easing: c
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = r.transitions.create("opacity", H), I.style.transition = r.transitions.create("opacity", H), d && d(I, j);
  }), z = $(f), P = $(m), F = $((I) => {
    const j = Dn({
      style: v,
      timeout: w,
      easing: c
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = r.transitions.create("opacity", j), I.style.transition = r.transitions.create("opacity", j), g && g(I);
  }), K = $(b), B = (I) => {
    s && s(R.current, I);
  };
  return /* @__PURE__ */ y.jsx(O, h({
    appear: a,
    in: u,
    nodeRef: R,
    onEnter: _,
    onEntered: z,
    onEntering: k,
    onExit: F,
    onExited: K,
    onExiting: P,
    addEndListener: B,
    timeout: w
  }, C, {
    children: (I, j) => /* @__PURE__ */ x.cloneElement(l, h({
      style: h({
        opacity: 0,
        visibility: I === "exited" && !u ? "hidden" : void 0
      }, Kb[I], v, l.props.style),
      ref: E
    }, j))
  }));
});
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: pn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function Yb(e) {
  return ue("MuiBackdrop", e);
}
de("MuiBackdrop", ["root", "invisible"]);
const Xb = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Zb = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return fe({
    root: ["root", n && "invisible"]
  }, Yb, t);
}, Jb = G("div", {
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
}) => h({
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
})), ws = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, i, s;
  const a = pe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: f = {},
    invisible: p = !1,
    open: g,
    slotProps: b = {},
    slots: m = {},
    TransitionComponent: v = Rs,
    transitionDuration: w
  } = a, O = ee(a, Xb), C = h({}, a, {
    component: u,
    invisible: p
  }), R = Zb(C), E = (r = b.root) != null ? r : f.root;
  return /* @__PURE__ */ y.jsx(v, h({
    in: g,
    timeout: w
  }, O, {
    children: /* @__PURE__ */ y.jsx(Jb, h({
      "aria-hidden": !0
    }, E, {
      as: (i = (s = m.root) != null ? s : d.Root) != null ? i : u,
      className: te(R.root, c, E == null ? void 0 : E.className),
      ownerState: h({}, C, E == null ? void 0 : E.ownerState),
      classes: R,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function Qb(e) {
  return ue("MuiBadge", e);
}
const Bt = de("MuiBadge", [
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
]), ey = ["anchorOrigin", "className", "classes", "component", "components", "componentsProps", "children", "overlap", "color", "invisible", "max", "badgeContent", "slots", "slotProps", "showZero", "variant"], yi = 10, xi = 4, ty = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: r,
    overlap: i,
    variant: s,
    classes: a = {}
  } = e, l = {
    root: ["root"],
    badge: ["badge", s, r && "invisible", `anchorOrigin${A(n.vertical)}${A(n.horizontal)}`, `anchorOrigin${A(n.vertical)}${A(n.horizontal)}${A(i)}`, `overlap${A(i)}`, t !== "default" && `color${A(t)}`]
  };
  return fe(l, Qb, a);
}, ny = G("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), ry = G("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${A(n.anchorOrigin.vertical)}${A(n.anchorOrigin.horizontal)}${A(n.overlap)}`], n.color !== "default" && t[`color${A(n.color)}`], n.invisible && t.invisible];
  }
})(({
  theme: e,
  ownerState: t
}) => h({
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
  minWidth: yi * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: yi * 2,
  borderRadius: yi,
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
  borderRadius: xi,
  height: xi * 2,
  minWidth: xi * 2,
  padding: 0
}, t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular" && {
  top: 0,
  right: 0,
  transform: "scale(1) translate(50%, -50%)",
  transformOrigin: "100% 0%",
  [`&.${Bt.invisible}`]: {
    transform: "scale(0) translate(50%, -50%)"
  }
}, t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular" && {
  bottom: 0,
  right: 0,
  transform: "scale(1) translate(50%, 50%)",
  transformOrigin: "100% 100%",
  [`&.${Bt.invisible}`]: {
    transform: "scale(0) translate(50%, 50%)"
  }
}, t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular" && {
  top: 0,
  left: 0,
  transform: "scale(1) translate(-50%, -50%)",
  transformOrigin: "0% 0%",
  [`&.${Bt.invisible}`]: {
    transform: "scale(0) translate(-50%, -50%)"
  }
}, t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular" && {
  bottom: 0,
  left: 0,
  transform: "scale(1) translate(-50%, 50%)",
  transformOrigin: "0% 100%",
  [`&.${Bt.invisible}`]: {
    transform: "scale(0) translate(-50%, 50%)"
  }
}, t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular" && {
  top: "14%",
  right: "14%",
  transform: "scale(1) translate(50%, -50%)",
  transformOrigin: "100% 0%",
  [`&.${Bt.invisible}`]: {
    transform: "scale(0) translate(50%, -50%)"
  }
}, t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular" && {
  bottom: "14%",
  right: "14%",
  transform: "scale(1) translate(50%, 50%)",
  transformOrigin: "100% 100%",
  [`&.${Bt.invisible}`]: {
    transform: "scale(0) translate(50%, 50%)"
  }
}, t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular" && {
  top: "14%",
  left: "14%",
  transform: "scale(1) translate(-50%, -50%)",
  transformOrigin: "0% 0%",
  [`&.${Bt.invisible}`]: {
    transform: "scale(0) translate(-50%, -50%)"
  }
}, t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular" && {
  bottom: "14%",
  left: "14%",
  transform: "scale(1) translate(-50%, 50%)",
  transformOrigin: "0% 100%",
  [`&.${Bt.invisible}`]: {
    transform: "scale(0) translate(-50%, 50%)"
  }
}, t.invisible && {
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeInOut,
    duration: e.transitions.duration.leavingScreen
  })
})), Kc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, i, s, a, l, c;
  const u = pe({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: d = {
      vertical: "top",
      horizontal: "right"
    },
    className: f,
    component: p,
    components: g = {},
    componentsProps: b = {},
    children: m,
    overlap: v = "rectangular",
    color: w = "default",
    invisible: O = !1,
    max: C = 99,
    badgeContent: R,
    slots: E,
    slotProps: $,
    showZero: k = !1,
    variant: _ = "standard"
  } = u, z = ee(u, ey), {
    badgeContent: P,
    invisible: F,
    max: K,
    displayValue: B
  } = Km({
    max: C,
    invisible: O,
    badgeContent: R,
    showZero: k
  }), I = Ac({
    anchorOrigin: d,
    color: w,
    overlap: v,
    variant: _,
    badgeContent: R
  }), j = F || P == null && _ !== "dot", {
    color: H = w,
    overlap: L = v,
    anchorOrigin: V = d,
    variant: Q = _
  } = j ? I : u, S = Q !== "dot" ? B : void 0, N = h({}, u, {
    badgeContent: P,
    invisible: j,
    max: K,
    displayValue: S,
    showZero: k,
    anchorOrigin: V,
    color: H,
    overlap: L,
    variant: Q
  }), U = ty(N), X = (r = (i = E == null ? void 0 : E.root) != null ? i : g.Root) != null ? r : ny, W = (s = (a = E == null ? void 0 : E.badge) != null ? a : g.Badge) != null ? s : ry, q = (l = $ == null ? void 0 : $.root) != null ? l : b.root, Y = (c = $ == null ? void 0 : $.badge) != null ? c : b.badge, oe = to({
    elementType: X,
    externalSlotProps: q,
    externalForwardedProps: z,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: N,
    className: te(q == null ? void 0 : q.className, U.root, f)
  }), se = to({
    elementType: W,
    externalSlotProps: Y,
    ownerState: N,
    className: te(U.badge, Y == null ? void 0 : Y.className)
  });
  return /* @__PURE__ */ y.jsxs(X, h({}, oe, {
    children: [m, /* @__PURE__ */ y.jsx(W, h({}, se, {
      children: S
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOf(["left", "right"]).isRequired,
    vertical: o.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The content rendered within the badge.
   */
  badgeContent: o.node,
  /**
   * The badge will be added relative to this node.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Badge: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    badge: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: o.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: o.number,
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap: o.oneOf(["circular", "rectangular"]),
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: o.bool,
  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  slotProps: o.shape({
    badge: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    badge: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: o.oneOfType([o.oneOf(["dot", "standard"]), o.string])
});
const oy = zc(), At = Ch({
  themeId: wr,
  defaultTheme: oy,
  defaultClassName: "MuiBox-root",
  generateClassName: ds.generate
});
process.env.NODE_ENV !== "production" && (At.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function iy(e) {
  return ue("MuiButton", e);
}
const jr = de("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Yc = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (Yc.displayName = "ButtonGroupContext");
const sy = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], ay = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${A(t)}`, `size${A(i)}`, `${s}Size${A(i)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${A(i)}`],
    endIcon: ["endIcon", `iconSize${A(i)}`]
  }, c = fe(l, iy, a);
  return h({}, a, c);
}, Xc = (e) => h({}, e.size === "small" && {
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
}), ly = G(cn, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${A(n.color)}`], t[`size${A(n.size)}`], t[`${n.variant}Size${A(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return h({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": h({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : s,
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
    "&:active": h({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${jr.focusVisible}`]: h({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${jr.disabled}`]: h({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Ne(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : i,
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
  [`&.${jr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${jr.disabled}`]: {
    boxShadow: "none"
  }
}), cy = G("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${A(n.size)}`]];
  }
})(({
  ownerState: e
}) => h({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Xc(e))), uy = G("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${A(n.size)}`]];
  }
})(({
  ownerState: e
}) => h({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Xc(e))), ao = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = x.useContext(Yc), i = ps(r, t), s = pe({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: c = "button",
    className: u,
    disabled: d = !1,
    disableElevation: f = !1,
    disableFocusRipple: p = !1,
    endIcon: g,
    focusVisibleClassName: b,
    fullWidth: m = !1,
    size: v = "medium",
    startIcon: w,
    type: O,
    variant: C = "text"
  } = s, R = ee(s, sy), E = h({}, s, {
    color: l,
    component: c,
    disabled: d,
    disableElevation: f,
    disableFocusRipple: p,
    fullWidth: m,
    size: v,
    type: O,
    variant: C
  }), $ = ay(E), k = w && /* @__PURE__ */ y.jsx(cy, {
    className: $.startIcon,
    ownerState: E,
    children: w
  }), _ = g && /* @__PURE__ */ y.jsx(uy, {
    className: $.endIcon,
    ownerState: E,
    children: g
  });
  return /* @__PURE__ */ y.jsxs(ly, h({
    ownerState: E,
    className: te(r.className, $.root, u),
    component: c,
    disabled: d,
    focusRipple: !p,
    focusVisibleClassName: te($.focusVisible, b),
    ref: n,
    type: O
  }, R, {
    classes: $,
    children: [k, a, _]
  }));
});
process.env.NODE_ENV !== "production" && (ao.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * Element placed after the children.
   */
  endIcon: o.node,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * Element placed before the children.
   */
  startIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["contained", "outlined", "text"]), o.string])
});
function dy(e) {
  return ue("MuiCircularProgress", e);
}
de("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const py = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let Go = (e) => e, Tl, Cl, Rl, wl;
const Lt = 44, fy = dn(Tl || (Tl = Go`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), hy = dn(Cl || (Cl = Go`
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
`)), my = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", n, `color${A(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${A(n)}`, i && "circleDisableShrink"]
  };
  return fe(s, dy, t);
}, gy = G("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${A(n.color)}`]];
  }
})(({
  ownerState: e,
  theme: t
}) => h({
  display: "inline-block"
}, e.variant === "determinate" && {
  transition: t.transitions.create("transform")
}, e.color !== "inherit" && {
  color: (t.vars || t).palette[e.color].main
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && vr(Rl || (Rl = Go`
      animation: ${0} 1.4s linear infinite;
    `), fy)), by = G("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), yy = G("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${A(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(({
  ownerState: e,
  theme: t
}) => h({
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
}) => e.variant === "indeterminate" && !e.disableShrink && vr(wl || (wl = Go`
      animation: ${0} 1.4s ease-in-out infinite;
    `), hy)), Zc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: s = "primary",
    disableShrink: a = !1,
    size: l = 40,
    style: c,
    thickness: u = 3.6,
    value: d = 0,
    variant: f = "indeterminate"
  } = r, p = ee(r, py), g = h({}, r, {
    color: s,
    disableShrink: a,
    size: l,
    thickness: u,
    value: d,
    variant: f
  }), b = my(g), m = {}, v = {}, w = {};
  if (f === "determinate") {
    const O = 2 * Math.PI * ((Lt - u) / 2);
    m.strokeDasharray = O.toFixed(3), w["aria-valuenow"] = Math.round(d), m.strokeDashoffset = `${((100 - d) / 100 * O).toFixed(3)}px`, v.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ y.jsx(gy, h({
    className: te(b.root, i),
    style: h({
      width: l,
      height: l
    }, v, c),
    ownerState: g,
    ref: n,
    role: "progressbar"
  }, w, p, {
    children: /* @__PURE__ */ y.jsx(by, {
      className: b.svg,
      ownerState: g,
      viewBox: `${Lt / 2} ${Lt / 2} ${Lt} ${Lt}`,
      children: /* @__PURE__ */ y.jsx(yy, {
        className: b.circle,
        style: m,
        ownerState: g,
        cx: Lt,
        cy: Lt,
        r: (Lt - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (Zc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Kt(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   * @default 40
   */
  size: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: o.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: o.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["determinate", "indeterminate"])
});
const vy = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"], xy = G("div", {
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
}) => h({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Ey = G(ws, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Ko = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, i, s, a, l, c;
  const u = pe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Ey,
    BackdropProps: f,
    classes: p,
    className: g,
    closeAfterTransition: b = !1,
    children: m,
    container: v,
    component: w,
    components: O = {},
    componentsProps: C = {},
    disableAutoFocus: R = !1,
    disableEnforceFocus: E = !1,
    disableEscapeKeyDown: $ = !1,
    disablePortal: k = !1,
    disableRestoreFocus: _ = !1,
    disableScrollLock: z = !1,
    hideBackdrop: P = !1,
    keepMounted: F = !1,
    onBackdropClick: K,
    onClose: B,
    open: I,
    slotProps: j,
    slots: H,
    // eslint-disable-next-line react/prop-types
    theme: L
  } = u, V = ee(u, vy), [Q, S] = x.useState(!0), N = {
    container: v,
    closeAfterTransition: b,
    disableAutoFocus: R,
    disableEnforceFocus: E,
    disableEscapeKeyDown: $,
    disablePortal: k,
    disableRestoreFocus: _,
    disableScrollLock: z,
    hideBackdrop: P,
    keepMounted: F,
    onBackdropClick: K,
    onClose: B,
    open: I
  }, U = h({}, u, N, {
    exited: Q
  }), X = (r = (i = H == null ? void 0 : H.root) != null ? i : O.Root) != null ? r : xy, W = (s = (a = H == null ? void 0 : H.backdrop) != null ? a : O.Backdrop) != null ? s : d, q = (l = j == null ? void 0 : j.root) != null ? l : C.root, Y = (c = j == null ? void 0 : j.backdrop) != null ? c : C.backdrop;
  return /* @__PURE__ */ y.jsx(Lc, h({
    slots: {
      root: X,
      backdrop: W
    },
    slotProps: {
      root: () => h({}, Ui(q, U), !eo(X) && {
        as: w,
        theme: L
      }, {
        className: te(g, q == null ? void 0 : q.className, p == null ? void 0 : p.root, !U.open && U.exited && (p == null ? void 0 : p.hidden))
      }),
      backdrop: () => h({}, f, Ui(Y, U), {
        className: te(Y == null ? void 0 : Y.className, p == null ? void 0 : p.backdrop)
      })
    },
    onTransitionEnter: () => S(!1),
    onTransitionExited: () => S(!0),
    ref: n
  }, V, N, {
    children: m
  }));
});
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: pn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([ln, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Ty(e) {
  return ue("MuiDialog", e);
}
const Ei = de("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), ks = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (ks.displayName = "DialogContext");
const Cy = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], Ry = G(ws, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), wy = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: i,
    fullScreen: s
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${A(n)}`],
    paper: ["paper", `paperScroll${A(n)}`, `paperWidth${A(String(r))}`, i && "paperFullWidth", s && "paperFullScreen"]
  };
  return fe(a, Ty, t);
}, ky = G(Ko, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Oy = G("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${A(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => h({
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
})), Sy = G(zt, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${A(n.scroll)}`], t[`paperWidth${A(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => h({
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
  [`&.${Ei.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Ei.paperScrollBody}`]: {
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
  [`&.${Ei.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), Jc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialog"
  }), i = fn(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": l,
    BackdropComponent: c,
    BackdropProps: u,
    children: d,
    className: f,
    disableEscapeKeyDown: p = !1,
    fullScreen: g = !1,
    fullWidth: b = !1,
    maxWidth: m = "sm",
    onBackdropClick: v,
    onClose: w,
    open: O,
    PaperComponent: C = zt,
    PaperProps: R = {},
    scroll: E = "paper",
    TransitionComponent: $ = Rs,
    transitionDuration: k = s,
    TransitionProps: _
  } = r, z = ee(r, Cy), P = h({}, r, {
    disableEscapeKeyDown: p,
    fullScreen: g,
    fullWidth: b,
    maxWidth: m,
    scroll: E
  }), F = wy(P), K = x.useRef(), B = (L) => {
    K.current = L.target === L.currentTarget;
  }, I = (L) => {
    K.current && (K.current = null, v && v(L), w && w(L, "backdropClick"));
  }, j = hs(l), H = x.useMemo(() => ({
    titleId: j
  }), [j]);
  return /* @__PURE__ */ y.jsx(ky, h({
    className: te(F.root, f),
    closeAfterTransition: !0,
    components: {
      Backdrop: Ry
    },
    componentsProps: {
      backdrop: h({
        transitionDuration: k,
        as: c
      }, u)
    },
    disableEscapeKeyDown: p,
    onClose: w,
    open: O,
    ref: n,
    onClick: I,
    ownerState: P
  }, z, {
    children: /* @__PURE__ */ y.jsx($, h({
      appear: !0,
      in: O,
      timeout: k,
      role: "presentation"
    }, _, {
      children: /* @__PURE__ */ y.jsx(Oy, {
        className: te(F.container),
        onMouseDown: B,
        ownerState: P,
        children: /* @__PURE__ */ y.jsx(Sy, h({
          as: C,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": j
        }, R, {
          className: te(F.paper, R.className),
          ownerState: P,
          children: /* @__PURE__ */ y.jsx(ks.Provider, {
            value: H,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Jc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": o.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": o.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * @ignore
   */
  BackdropProps: o.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: o.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: o.oneOfType([o.oneOf(["xs", "sm", "md", "lg", "xl", !1]), o.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: o.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: o.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: o.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: o.object
});
function $y(e) {
  return ue("MuiDialogActions", e);
}
de("MuiDialogActions", ["root", "spacing"]);
const _y = ["className", "disableSpacing"], Py = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return fe({
    root: ["root", !n && "spacing"]
  }, $y, t);
}, Iy = G("div", {
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
}) => h({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(:first-of-type)": {
    marginLeft: 8
  }
})), Qc = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: s = !1
  } = r, a = ee(r, _y), l = h({}, r, {
    disableSpacing: s
  }), c = Py(l);
  return /* @__PURE__ */ y.jsx(Iy, h({
    className: te(c.root, i),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (Qc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Ny(e) {
  return ue("MuiDialogContent", e);
}
de("MuiDialogContent", ["root", "dividers"]);
function jy(e) {
  return ue("MuiDialogTitle", e);
}
const Ay = de("MuiDialogTitle", ["root"]), My = ["className", "dividers"], Dy = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return fe({
    root: ["root", n && "dividers"]
  }, Ny, t);
}, zy = G("div", {
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
}) => h({
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
  [`.${Ay.root} + &`]: {
    paddingTop: 0
  }
})), eu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: s = !1
  } = r, a = ee(r, My), l = h({}, r, {
    dividers: s
  }), c = Dy(l);
  return /* @__PURE__ */ y.jsx(zy, h({
    className: te(c.root, i),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (eu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Fy = ["className", "id"], By = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, jy, t);
}, Ly = G(Un, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), tu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: s
  } = r, a = ee(r, Fy), l = r, c = By(l), {
    titleId: u = s
  } = x.useContext(ks);
  return /* @__PURE__ */ y.jsx(Ly, h({
    component: "h2",
    className: te(c.root, i),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: s ?? u
  }, a));
});
process.env.NODE_ENV !== "production" && (tu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * @ignore
   */
  id: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Vy = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Uy(e, t, n) {
  const r = t.getBoundingClientRect(), i = n && n.getBoundingClientRect(), s = It(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const u = s.getComputedStyle(t);
    a = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (a && a !== "none" && typeof a == "string") {
    const u = a.split("(")[1].split(")")[0].split(",");
    l = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? i ? `translateX(${i.right + l - r.left}px)` : `translateX(${s.innerWidth + l - r.left}px)` : e === "right" ? i ? `translateX(-${r.right - i.left - l}px)` : `translateX(-${r.left + r.width - l}px)` : e === "up" ? i ? `translateY(${i.bottom + c - r.top}px)` : `translateY(${s.innerHeight + c - r.top}px)` : i ? `translateY(-${r.top - i.top + r.height - c}px)` : `translateY(-${r.top + r.height - c}px)`;
}
function nu(e) {
  return typeof e == "function" ? e() : e;
}
function Ar(e, t, n) {
  const r = nu(n), i = Uy(e, t, r);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const ru = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = fn(), i = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, s = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: c,
    container: u,
    direction: d = "down",
    easing: f = i,
    in: p,
    onEnter: g,
    onEntered: b,
    onEntering: m,
    onExit: v,
    onExited: w,
    onExiting: O,
    style: C,
    timeout: R = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = wt
  } = t, $ = ee(t, Vy), k = x.useRef(null), _ = Ue(c.ref, k, n), z = (V) => (Q) => {
    V && (Q === void 0 ? V(k.current) : V(k.current, Q));
  }, P = z((V, Q) => {
    Ar(d, V, u), Es(V), g && g(V, Q);
  }), F = z((V, Q) => {
    const S = Dn({
      timeout: R,
      style: C,
      easing: f
    }, {
      mode: "enter"
    });
    V.style.webkitTransition = r.transitions.create("-webkit-transform", h({}, S)), V.style.transition = r.transitions.create("transform", h({}, S)), V.style.webkitTransform = "none", V.style.transform = "none", m && m(V, Q);
  }), K = z(b), B = z(O), I = z((V) => {
    const Q = Dn({
      timeout: R,
      style: C,
      easing: f
    }, {
      mode: "exit"
    });
    V.style.webkitTransition = r.transitions.create("-webkit-transform", Q), V.style.transition = r.transitions.create("transform", Q), Ar(d, V, u), v && v(V);
  }), j = z((V) => {
    V.style.webkitTransition = "", V.style.transition = "", w && w(V);
  }), H = (V) => {
    a && a(k.current, V);
  }, L = x.useCallback(() => {
    k.current && Ar(d, k.current, u);
  }, [d, u]);
  return x.useEffect(() => {
    if (p || d === "down" || d === "right")
      return;
    const V = Do(() => {
      k.current && Ar(d, k.current, u);
    }), Q = It(k.current);
    return Q.addEventListener("resize", V), () => {
      V.clear(), Q.removeEventListener("resize", V);
    };
  }, [d, p, u]), x.useEffect(() => {
    p || L();
  }, [p, L]), /* @__PURE__ */ y.jsx(E, h({
    nodeRef: k,
    onEnter: P,
    onEntered: K,
    onEntering: F,
    onExit: I,
    onExited: j,
    onExiting: B,
    addEndListener: H,
    appear: l,
    in: p,
    timeout: R
  }, $, {
    children: (V, Q) => /* @__PURE__ */ x.cloneElement(c, h({
      ref: _,
      style: h({
        visibility: V === "exited" && !p ? "hidden" : void 0
      }, C, c.props.style)
    }, Q))
  }));
});
process.env.NODE_ENV !== "production" && (ru.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: pn.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Kt(o.oneOfType([ln, o.func]), (e) => {
    if (e.open) {
      const t = nu(e.container);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: o.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function Wy(e) {
  return ue("MuiDrawer", e);
}
de("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const qy = ["BackdropProps"], Hy = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], ou = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal];
}, Gy = (e) => {
  const {
    classes: t,
    anchor: n,
    variant: r
  } = e, i = {
    root: ["root"],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${A(n)}`, r !== "temporary" && `paperAnchorDocked${A(n)}`]
  };
  return fe(i, Wy, t);
}, Ky = G(Ko, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: ou
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), kl = G("div", {
  shouldForwardProp: Et,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: ou
})({
  flex: "0 0 auto"
}), Yy = G(zt, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperAnchor${A(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${A(n.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => h({
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
})), iu = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function Xy(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function Zy(e, t) {
  return e.direction === "rtl" && Xy(t) ? iu[t] : t;
}
const su = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDrawer"
  }), i = fn(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: a = "left",
    BackdropProps: l,
    children: c,
    className: u,
    elevation: d = 16,
    hideBackdrop: f = !1,
    ModalProps: {
      BackdropProps: p
    } = {},
    onClose: g,
    open: b = !1,
    PaperProps: m = {},
    SlideProps: v,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = ru,
    transitionDuration: O = s,
    variant: C = "temporary"
  } = r, R = ee(r.ModalProps, qy), E = ee(r, Hy), $ = x.useRef(!1);
  x.useEffect(() => {
    $.current = !0;
  }, []);
  const k = Zy(i, a), z = h({}, r, {
    anchor: a,
    elevation: d,
    open: b,
    variant: C
  }, E), P = Gy(z), F = /* @__PURE__ */ y.jsx(Yy, h({
    elevation: C === "temporary" ? d : 0,
    square: !0
  }, m, {
    className: te(P.paper, m.className),
    ownerState: z,
    children: c
  }));
  if (C === "permanent")
    return /* @__PURE__ */ y.jsx(kl, h({
      className: te(P.root, P.docked, u),
      ownerState: z,
      ref: n
    }, E, {
      children: F
    }));
  const K = /* @__PURE__ */ y.jsx(w, h({
    in: b,
    direction: iu[k],
    timeout: O,
    appear: $.current
  }, v, {
    children: F
  }));
  return C === "persistent" ? /* @__PURE__ */ y.jsx(kl, h({
    className: te(P.root, P.docked, u),
    ownerState: z,
    ref: n
  }, E, {
    children: K
  })) : /* @__PURE__ */ y.jsx(Ky, h({
    BackdropProps: h({}, l, p, {
      transitionDuration: O
    }),
    className: te(P.root, P.modal, u),
    open: b,
    ownerState: z,
    onClose: g,
    hideBackdrop: f,
    ref: n
  }, E, R, {
    children: K
  }));
});
process.env.NODE_ENV !== "production" && (su.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: o.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: o.object,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: bs,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: o.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: o.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: o.oneOf(["permanent", "persistent", "temporary"])
});
function Jy(e) {
  return ue("MuiFab", e);
}
const Ol = de("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), Qy = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"], ev = (e) => {
  const {
    color: t,
    variant: n,
    classes: r,
    size: i
  } = e, s = {
    root: ["root", n, `size${A(i)}`, t === "inherit" ? "colorInherit" : t]
  }, a = fe(s, Jy, r);
  return h({}, r, a);
}, tv = G(cn, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => Et(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${A(n.size)}`], n.color === "inherit" && t.colorInherit, t[A(n.size)], t[n.color]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  return h({}, e.typography.button, {
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
    [`&.${Ol.focusVisible}`]: {
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
}) => h({}, t.color !== "inherit" && t.color !== "default" && (e.vars || e).palette[t.color] != null && {
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
  [`&.${Ol.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
})), tn = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiFab"
  }), {
    children: i,
    className: s,
    color: a = "default",
    component: l = "button",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    focusVisibleClassName: d,
    size: f = "large",
    variant: p = "circular"
  } = r, g = ee(r, Qy), b = h({}, r, {
    color: a,
    component: l,
    disabled: c,
    disableFocusRipple: u,
    size: f,
    variant: p
  }), m = ev(b);
  return /* @__PURE__ */ y.jsx(tv, h({
    className: te(m.root, s),
    component: l,
    disabled: c,
    focusRipple: !u,
    focusVisibleClassName: te(m.focusVisible, d),
    ownerState: b,
    ref: n
  }, g, {
    classes: m,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (tn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: o.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: o.oneOfType([o.oneOf(["circular", "extended"]), o.string])
});
const nv = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], rv = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = fe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Db, t);
  return h({}, t, i);
}, ov = G(Wo, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Vo(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return h({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
      }
    },
    [`&.${Yt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
    },
    [`&.${Yt.disabled}`]: {
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
    [`&.${Yt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Yt.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : i}`,
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
    [`&:hover:not(.${Yt.disabled}, .${Yt.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Yt.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && h({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
}), iv = G(qo, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Uo
})(({
  theme: e,
  ownerState: t
}) => h({
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
})), Yo = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, i, s, a;
  const l = pe({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: f = "input",
    multiline: p = !1,
    slotProps: g,
    slots: b = {},
    type: m = "text"
  } = l, v = ee(l, nv), w = h({}, l, {
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    type: m
  }), O = rv(l), C = {
    root: {
      ownerState: w
    },
    input: {
      ownerState: w
    }
  }, R = g ?? u ? nt(g ?? u, C) : C, E = (r = (i = b.root) != null ? i : c.Root) != null ? r : ov, $ = (s = (a = b.input) != null ? a : c.Input) != null ? s : iv;
  return /* @__PURE__ */ y.jsx(Ho, h({
    slots: {
      root: E,
      input: $
    },
    componentsProps: R,
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    ref: n,
    type: m
  }, v, {
    classes: O
  }));
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Yo.muiName = "Input";
function sv(e) {
  return ue("MuiFormControl", e);
}
de("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const av = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], lv = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${A(n)}`, r && "fullWidth"]
  };
  return fe(i, sv, t);
}, cv = G("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => h({}, t.root, t[`margin${A(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => h({
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
})), au = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: p = !1,
    margin: g = "none",
    required: b = !1,
    size: m = "medium",
    variant: v = "outlined"
  } = r, w = ee(r, av), O = h({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: p,
    margin: g,
    required: b,
    size: m,
    variant: v
  }), C = lv(O), [R, E] = x.useState(() => {
    let B = !1;
    return i && x.Children.forEach(i, (I) => {
      if (!Ur(I, ["Input", "Select"]))
        return;
      const j = Ur(I, ["Select"]) ? I.props.input : I;
      j && _b(j.props) && (B = !0);
    }), B;
  }), [$, k] = x.useState(() => {
    let B = !1;
    return i && x.Children.forEach(i, (I) => {
      Ur(I, ["Input", "Select"]) && (so(I.props, !0) || so(I.props.inputProps, !0)) && (B = !0);
    }), B;
  }), [_, z] = x.useState(!1);
  c && _ && z(!1);
  const P = d !== void 0 && !c ? d : _;
  let F;
  if (process.env.NODE_ENV !== "production") {
    const B = x.useRef(!1);
    F = () => (B.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), B.current = !0, () => {
      B.current = !1;
    });
  }
  const K = x.useMemo(() => ({
    adornedStart: R,
    setAdornedStart: E,
    color: a,
    disabled: c,
    error: u,
    filled: $,
    focused: P,
    fullWidth: f,
    hiddenLabel: p,
    size: m,
    onBlur: () => {
      z(!1);
    },
    onEmpty: () => {
      k(!1);
    },
    onFilled: () => {
      k(!0);
    },
    onFocus: () => {
      z(!0);
    },
    registerEffect: F,
    required: b,
    variant: v
  }), [R, a, c, u, $, P, f, p, F, b, m, v]);
  return /* @__PURE__ */ y.jsx(Lo.Provider, {
    value: K,
    children: /* @__PURE__ */ y.jsx(cv, h({
      as: l,
      ownerState: O,
      className: te(C.root, s),
      ref: n
    }, w, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (au.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function uv(e) {
  return ue("MuiFormHelperText", e);
}
const Sl = de("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var $l;
const dv = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], pv = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", r && `size${A(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return fe(u, uv, t);
}, fv = G("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${A(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => h({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Sl.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Sl.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), lu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: s,
    component: a = "p"
  } = r, l = ee(r, dv), c = qn(), u = Wn({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = h({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = pv(d);
  return /* @__PURE__ */ y.jsx(fv, h({
    as: a,
    ownerState: d,
    className: te(f.root, s),
    ref: n
  }, l, {
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      $l || ($l = /* @__PURE__ */ y.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  }));
});
process.env.NODE_ENV !== "production" && (lu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
function hv(e) {
  return ue("MuiFormLabel", e);
}
const ur = de("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), mv = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], gv = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${A(n)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return fe(c, hv, t);
}, bv = G("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => h({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => h({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${ur.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${ur.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${ur.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), yv = G("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${ur.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), cu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: s,
    component: a = "label"
  } = r, l = ee(r, mv), c = qn(), u = Wn({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = h({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = gv(d);
  return /* @__PURE__ */ y.jsxs(bv, h({
    as: a,
    ownerState: d,
    className: te(f.root, s),
    ref: n
  }, l, {
    children: [i, u.required && /* @__PURE__ */ y.jsxs(yv, {
      ownerState: d,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (cu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const vv = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Gi(e) {
  return `scale(${e}, ${e ** 2})`;
}
const xv = {
  entering: {
    opacity: 1,
    transform: Gi(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ti = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Os = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: p,
    onExiting: g,
    style: b,
    timeout: m = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = wt
  } = t, w = ee(t, vv), O = x.useRef(), C = x.useRef(), R = fn(), E = x.useRef(null), $ = Ue(E, s.ref, n), k = (j) => (H) => {
    if (j) {
      const L = E.current;
      H === void 0 ? j(L) : j(L, H);
    }
  }, _ = k(d), z = k((j, H) => {
    Es(j);
    const {
      duration: L,
      delay: V,
      easing: Q
    } = Dn({
      style: b,
      timeout: m,
      easing: a
    }, {
      mode: "enter"
    });
    let S;
    m === "auto" ? (S = R.transitions.getAutoHeightDuration(j.clientHeight), C.current = S) : S = L, j.style.transition = [R.transitions.create("opacity", {
      duration: S,
      delay: V
    }), R.transitions.create("transform", {
      duration: Ti ? S : S * 0.666,
      delay: V,
      easing: Q
    })].join(","), c && c(j, H);
  }), P = k(u), F = k(g), K = k((j) => {
    const {
      duration: H,
      delay: L,
      easing: V
    } = Dn({
      style: b,
      timeout: m,
      easing: a
    }, {
      mode: "exit"
    });
    let Q;
    m === "auto" ? (Q = R.transitions.getAutoHeightDuration(j.clientHeight), C.current = Q) : Q = H, j.style.transition = [R.transitions.create("opacity", {
      duration: Q,
      delay: L
    }), R.transitions.create("transform", {
      duration: Ti ? Q : Q * 0.666,
      delay: Ti ? L : L || Q * 0.333,
      easing: V
    })].join(","), j.style.opacity = 0, j.style.transform = Gi(0.75), f && f(j);
  }), B = k(p), I = (j) => {
    m === "auto" && (O.current = setTimeout(j, C.current || 0)), r && r(E.current, j);
  };
  return x.useEffect(() => () => {
    clearTimeout(O.current);
  }, []), /* @__PURE__ */ y.jsx(v, h({
    appear: i,
    in: l,
    nodeRef: E,
    onEnter: z,
    onEntered: P,
    onEntering: _,
    onExit: K,
    onExited: B,
    onExiting: F,
    addEndListener: I,
    timeout: m === "auto" ? null : m
  }, w, {
    children: (j, H) => /* @__PURE__ */ x.cloneElement(s, h({
      style: h({
        opacity: 0,
        transform: Gi(0.75),
        visibility: j === "exited" && !l ? "hidden" : void 0
      }, xv[j], b, s.props.style),
      ref: $
    }, H))
  }));
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: pn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
Os.muiSupportAuto = !0;
const Ev = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], Tv = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = fe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Ab, t);
  return h({}, t, i);
}, Cv = G(Wo, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Vo(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), h({
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
    [`&.${Zn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Zn.error}`]: {
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
    [`&:hover:not(.${Zn.disabled}, .${Zn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${Zn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), Rv = G(qo, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Uo
})({}), Xo = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, i, s, a;
  const l = pe({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: f = !1,
    inputComponent: p = "input",
    multiline: g = !1,
    slotProps: b,
    slots: m = {},
    type: v = "text"
  } = l, w = ee(l, Ev), O = Tv(l), R = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, E = b ?? d ? nt(b ?? d, R) : R, $ = (r = (i = m.root) != null ? i : u.Root) != null ? r : Cv, k = (s = (a = m.input) != null ? a : u.Input) != null ? s : Rv;
  return /* @__PURE__ */ y.jsx(Ho, h({
    slots: {
      root: $,
      input: k
    },
    slotProps: E,
    fullWidth: f,
    inputComponent: p,
    multiline: g,
    ref: n,
    type: v
  }, w, {
    classes: O
  }));
});
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Xo.muiName = "Input";
function wv(e) {
  return ue("MuiInputLabel", e);
}
de("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const kv = ["disableAnimation", "margin", "shrink", "variant", "className"], Ov = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, u = fe({
    root: ["root", n && "formControl", !s && "animated", i && "shrink", r === "small" && "sizeSmall", a],
    asterisk: [l && "asterisk"]
  }, wv, t);
  return h({}, t, u);
}, Sv = G(cu, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ur.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => h({
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
}, t.variant === "filled" && h({
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
}, t.shrink && h({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && h({
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
}))), uu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    shrink: s,
    className: a
  } = r, l = ee(r, kv), c = qn();
  let u = s;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = Wn({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required"]
  }), f = h({}, r, {
    disableAnimation: i,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required
  }), p = Ov(f);
  return /* @__PURE__ */ y.jsx(Sv, h({
    "data-shrink": u,
    ownerState: f,
    ref: n,
    className: te(p.root, a)
  }, l, {
    classes: p
  }));
});
process.env.NODE_ENV !== "production" && (uu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: o.oneOfType([o.oneOf(["normal", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function $v(e) {
  return ue("MuiLink", e);
}
const _v = de("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), du = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Pv = (e) => du[e] || e, Iv = ({
  theme: e,
  ownerState: t
}) => {
  const n = Pv(t.color), r = Mn(e, `palette.${n}`, !1) || t.color, i = Mn(e, `palette.${n}Channel`);
  return "vars" in e && i ? `rgba(${i} / 0.4)` : Ne(r, 0.4);
}, Nv = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"], jv = (e) => {
  const {
    classes: t,
    component: n,
    focusVisible: r,
    underline: i
  } = e, s = {
    root: ["root", `underline${A(i)}`, n === "button" && "button", r && "focusVisible"]
  };
  return fe(s, $v, t);
}, Av = G(Un, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`underline${A(n.underline)}`], n.component === "button" && t.button];
  }
})(({
  theme: e,
  ownerState: t
}) => h({}, t.underline === "none" && {
  textDecoration: "none"
}, t.underline === "hover" && {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
}, t.underline === "always" && h({
  textDecoration: "underline"
}, t.color !== "inherit" && {
  textDecorationColor: Iv({
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
  [`&.${_v.focusVisible}`]: {
    outline: "auto"
  }
})), pu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiLink"
  }), {
    className: i,
    color: s = "primary",
    component: a = "a",
    onBlur: l,
    onFocus: c,
    TypographyClasses: u,
    underline: d = "always",
    variant: f = "inherit",
    sx: p
  } = r, g = ee(r, Nv), {
    isFocusVisibleRef: b,
    onBlur: m,
    onFocus: v,
    ref: w
  } = gs(), [O, C] = x.useState(!1), R = Ue(n, w), E = (z) => {
    m(z), b.current === !1 && C(!1), l && l(z);
  }, $ = (z) => {
    v(z), b.current === !0 && C(!0), c && c(z);
  }, k = h({}, r, {
    color: s,
    component: a,
    focusVisible: O,
    underline: d,
    variant: f
  }), _ = jv(k);
  return /* @__PURE__ */ y.jsx(Av, h({
    color: s,
    className: te(_.root, i),
    classes: u,
    component: a,
    onBlur: E,
    onFocus: $,
    ref: R,
    ownerState: k,
    variant: f,
    sx: [...Object.keys(du).includes(s) ? [] : [{
      color: s
    }], ...Array.isArray(p) ? p : [p]]
  }, g));
});
process.env.NODE_ENV !== "production" && (pu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the link.
   * @default 'primary'
   */
  color: o.any,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Mo,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * `classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.
   */
  TypographyClasses: o.object,
  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline: o.oneOf(["always", "hover", "none"]),
  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string])
});
const lo = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (lo.displayName = "ListContext");
function Mv(e) {
  return ue("MuiList", e);
}
de("MuiList", ["root", "padding", "dense", "subheader"]);
const Dv = ["children", "className", "component", "dense", "disablePadding", "subheader"], zv = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return fe({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, Mv, t);
}, Fv = G("ul", {
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
}) => h({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), fu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ee(r, Dv), f = x.useMemo(() => ({
    dense: l
  }), [l]), p = h({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), g = zv(p);
  return /* @__PURE__ */ y.jsx(lo.Provider, {
    value: f,
    children: /* @__PURE__ */ y.jsxs(Fv, h({
      as: a,
      className: te(g.root, s),
      ref: n,
      ownerState: p
    }, d, {
      children: [u, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (fu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const _l = de("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Pl = de("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Bv = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Ci(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Il(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function hu(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function Jn(e, t, n, r, i, s) {
  let a = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !hu(l, s) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const mu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu"
  } = t, p = ee(t, Bv), g = x.useRef(null), b = x.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  qt(() => {
    i && g.current.focus();
  }, [i]), x.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (C, R) => {
      const E = !g.current.style.width;
      if (C.clientHeight < g.current.clientHeight && E) {
        const $ = `${jc(rt(C))}px`;
        g.current.style[R.direction === "rtl" ? "paddingLeft" : "paddingRight"] = $, g.current.style.width = `calc(100% + ${$})`;
      }
      return g.current;
    }
  }), []);
  const m = (C) => {
    const R = g.current, E = C.key, $ = rt(R).activeElement;
    if (E === "ArrowDown")
      C.preventDefault(), Jn(R, $, u, c, Ci);
    else if (E === "ArrowUp")
      C.preventDefault(), Jn(R, $, u, c, Il);
    else if (E === "Home")
      C.preventDefault(), Jn(R, null, u, c, Ci);
    else if (E === "End")
      C.preventDefault(), Jn(R, null, u, c, Il);
    else if (E.length === 1) {
      const k = b.current, _ = E.toLowerCase(), z = performance.now();
      k.keys.length > 0 && (z - k.lastTime > 500 ? (k.keys = [], k.repeating = !0, k.previousKeyMatched = !0) : k.repeating && _ !== k.keys[0] && (k.repeating = !1)), k.lastTime = z, k.keys.push(_);
      const P = $ && !k.repeating && hu($, k);
      k.previousKeyMatched && (P || Jn(R, $, !1, c, Ci, k)) ? C.preventDefault() : k.previousKeyMatched = !1;
    }
    d && d(C);
  }, v = Ue(g, n);
  let w = -1;
  x.Children.forEach(a, (C, R) => {
    /* @__PURE__ */ x.isValidElement(C) && (process.env.NODE_ENV !== "production" && xr.isFragment(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (f === "selectedMenu" && C.props.selected || w === -1) && (w = R), w === R && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (w += 1, w >= a.length && (w = -1)));
  });
  const O = x.Children.map(a, (C, R) => {
    if (R === w) {
      const E = {};
      return s && (E.autoFocus = !0), C.props.tabIndex === void 0 && f === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ x.cloneElement(C, E);
    }
    return C;
  });
  return /* @__PURE__ */ y.jsx(fu, h({
    role: "menu",
    ref: v,
    className: l,
    onKeyDown: m,
    tabIndex: i ? 0 : -1
  }, p, {
    children: O
  }));
});
process.env.NODE_ENV !== "production" && (mu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function Lv(e) {
  return ue("MuiPopover", e);
}
de("MuiPopover", ["root", "paper"]);
const Vv = ["onEntering"], Uv = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function Nl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function jl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Al(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Wr(e) {
  return typeof e == "function" ? e() : e;
}
const Wv = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"]
  }, Lv, t);
}, qv = G(Ko, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Hv = G(zt, {
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
}), gu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: s,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: c = "anchorEl",
    children: u,
    className: d,
    container: f,
    elevation: p = 8,
    marginThreshold: g = 16,
    open: b,
    PaperProps: m = {},
    transformOrigin: v = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = Os,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: C
    } = {}
  } = r, R = ee(r.TransitionProps, Vv), E = ee(r, Uv), $ = x.useRef(), k = Ue($, m.ref), _ = h({}, r, {
    anchorOrigin: a,
    anchorReference: c,
    elevation: p,
    marginThreshold: g,
    PaperProps: m,
    transformOrigin: v,
    TransitionComponent: w,
    transitionDuration: O,
    TransitionProps: R
  }), z = Wv(_), P = x.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const S = Wr(s), N = S && S.nodeType === 1 ? S : rt($.current).body, U = N.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const X = N.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && X.top === 0 && X.left === 0 && X.right === 0 && X.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: U.top + Nl(U, a.vertical),
      left: U.left + jl(U, a.horizontal)
    };
  }, [s, a.horizontal, a.vertical, l, c]), F = x.useCallback((S) => ({
    vertical: Nl(S, v.vertical),
    horizontal: jl(S, v.horizontal)
  }), [v.horizontal, v.vertical]), K = x.useCallback((S) => {
    const N = {
      width: S.offsetWidth,
      height: S.offsetHeight
    }, U = F(N);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Al(U)
      };
    const X = P();
    let W = X.top - U.vertical, q = X.left - U.horizontal;
    const Y = W + N.height, oe = q + N.width, se = It(Wr(s)), ne = se.innerHeight - g, ae = se.innerWidth - g;
    if (W < g) {
      const re = W - g;
      W -= re, U.vertical += re;
    } else if (Y > ne) {
      const re = Y - ne;
      W -= re, U.vertical += re;
    }
    if (process.env.NODE_ENV !== "production" && N.height > ne && N.height && ne && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${N.height - ne}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), q < g) {
      const re = q - g;
      q -= re, U.horizontal += re;
    } else if (oe > ae) {
      const re = oe - ae;
      q -= re, U.horizontal += re;
    }
    return {
      top: `${Math.round(W)}px`,
      left: `${Math.round(q)}px`,
      transformOrigin: Al(U)
    };
  }, [s, c, P, F, g]), [B, I] = x.useState(b), j = x.useCallback(() => {
    const S = $.current;
    if (!S)
      return;
    const N = K(S);
    N.top !== null && (S.style.top = N.top), N.left !== null && (S.style.left = N.left), S.style.transformOrigin = N.transformOrigin, I(!0);
  }, [K]), H = (S, N) => {
    C && C(S, N), j();
  }, L = () => {
    I(!1);
  };
  x.useEffect(() => {
    b && j();
  }), x.useImperativeHandle(i, () => b ? {
    updatePosition: () => {
      j();
    }
  } : null, [b, j]), x.useEffect(() => {
    if (!b)
      return;
    const S = Do(() => {
      j();
    }), N = It(s);
    return N.addEventListener("resize", S), () => {
      S.clear(), N.removeEventListener("resize", S);
    };
  }, [s, b, j]);
  let V = O;
  O === "auto" && !w.muiSupportAuto && (V = void 0);
  const Q = f || (s ? rt(Wr(s)).body : void 0);
  return /* @__PURE__ */ y.jsx(qv, h({
    BackdropProps: {
      invisible: !0
    },
    className: te(z.root, d),
    container: Q,
    open: b,
    ref: n,
    ownerState: _
  }, E, {
    children: /* @__PURE__ */ y.jsx(w, h({
      appear: !0,
      in: b,
      onEntering: H,
      onExited: L,
      timeout: V
    }, R, {
      children: /* @__PURE__ */ y.jsx(Hv, h({
        elevation: p
      }, m, {
        ref: k,
        className: te(z.paper, m.className)
      }, B ? void 0 : {
        style: h({}, m.style, {
          opacity: 0
        })
      }, {
        ownerState: _,
        children: u
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (gu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Dt,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the popover.
   */
  anchorEl: Kt(o.oneOfType([ln, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Wr(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([ln, o.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: bs,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: o.shape({
    component: Mo
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
function Gv(e) {
  return ue("MuiMenu", e);
}
de("MuiMenu", ["root", "paper", "list"]);
const Kv = ["onEntering"], Yv = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"], Xv = {
  vertical: "top",
  horizontal: "right"
}, Zv = {
  vertical: "top",
  horizontal: "left"
}, Jv = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Gv, t);
}, Qv = G(gu, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), e0 = G(zt, {
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
}), t0 = G(mu, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ss = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: s,
    disableAutoFocusItem: a = !1,
    MenuListProps: l = {},
    onClose: c,
    open: u,
    PaperProps: d = {},
    PopoverClasses: f,
    transitionDuration: p = "auto",
    TransitionProps: {
      onEntering: g
    } = {},
    variant: b = "selectedMenu"
  } = r, m = ee(r.TransitionProps, Kv), v = ee(r, Yv), w = fn(), O = w.direction === "rtl", C = h({}, r, {
    autoFocus: i,
    disableAutoFocusItem: a,
    MenuListProps: l,
    onEntering: g,
    PaperProps: d,
    transitionDuration: p,
    TransitionProps: m,
    variant: b
  }), R = Jv(C), E = i && !a && u, $ = x.useRef(null), k = (P, F) => {
    $.current && $.current.adjustStyleForScrollbar(P, w), g && g(P, F);
  }, _ = (P) => {
    P.key === "Tab" && (P.preventDefault(), c && c(P, "tabKeyDown"));
  };
  let z = -1;
  return x.Children.map(s, (P, F) => {
    /* @__PURE__ */ x.isValidElement(P) && (process.env.NODE_ENV !== "production" && xr.isFragment(P) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), P.props.disabled || (b === "selectedMenu" && P.props.selected || z === -1) && (z = F));
  }), /* @__PURE__ */ y.jsx(Qv, h({
    onClose: c,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: O ? "right" : "left"
    },
    transformOrigin: O ? Xv : Zv,
    PaperProps: h({
      as: e0
    }, d, {
      classes: h({}, d.classes, {
        root: R.paper
      })
    }),
    className: R.root,
    open: u,
    ref: n,
    transitionDuration: p,
    TransitionProps: h({
      onEntering: k
    }, m),
    ownerState: C
  }, v, {
    classes: f,
    children: /* @__PURE__ */ y.jsx(t0, h({
      onKeyDown: _,
      actions: $,
      autoFocus: i && (z === -1 || a),
      autoFocusItem: E,
      variant: b
    }, l, {
      className: te(R.list, l.className),
      children: s
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([ln, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function n0(e) {
  return ue("MuiMenuItem", e);
}
const Qn = de("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), r0 = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], o0 = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, i0 = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = fe({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, n0, a);
  return h({}, a, c);
}, s0 = G(cn, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: o0
})(({
  theme: e,
  ownerState: t
}) => h({}, e.typography.body1, {
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
  [`&.${Qn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Qn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Qn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Qn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Qn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${cl.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${cl.inset}`]: {
    marginLeft: 52
  },
  [`& .${Pl.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Pl.inset}`]: {
    paddingLeft: 36
  },
  [`& .${_l.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && h({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${_l.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), qr = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: f,
    className: p
  } = r, g = ee(r, r0), b = x.useContext(lo), m = x.useMemo(() => ({
    dense: a || b.dense || !1,
    disableGutters: c
  }), [b.dense, a, c]), v = x.useRef(null);
  qt(() => {
    i && (v.current ? v.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const w = h({}, r, {
    dense: m.dense,
    divider: l,
    disableGutters: c
  }), O = i0(r), C = Ue(v, n);
  let R;
  return r.disabled || (R = f !== void 0 ? f : -1), /* @__PURE__ */ y.jsx(lo.Provider, {
    value: m,
    children: /* @__PURE__ */ y.jsx(s0, h({
      ref: C,
      role: d,
      tabIndex: R,
      component: s,
      focusVisibleClassName: te(O.focusVisible, u),
      className: te(O.root, p)
    }, g, {
      ownerState: w,
      classes: O
    }))
  });
});
process.env.NODE_ENV !== "production" && (qr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
function a0(e) {
  return ue("MuiNativeSelect", e);
}
const $s = de("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), l0 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], c0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${A(n)}`, s && "iconOpen", r && "disabled"]
  };
  return fe(l, a0, t);
}, bu = ({
  ownerState: e,
  theme: t
}) => h({
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
  "&:focus": h({}, t.vars ? {
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
  [`&.${$s.disabled}`]: {
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
}), u0 = G("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Et,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${$s.multiple}`]: t.multiple
    }];
  }
})(bu), yu = ({
  ownerState: e,
  theme: t
}) => h({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${$s.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), d0 = G("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${A(n.variant)}`], n.open && t.iconOpen];
  }
})(yu), vu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: i,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ee(t, l0), d = h({}, t, {
    disabled: i,
    variant: c,
    error: s
  }), f = c0(d);
  return /* @__PURE__ */ y.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ y.jsx(u0, h({
      ownerState: d,
      className: te(f.select, r),
      disabled: i,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ y.jsx(d0, {
      as: a,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (vu.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Dt,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
var Ml;
const p0 = ["children", "classes", "className", "label", "notched"], f0 = G("fieldset")({
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
}), h0 = G("legend")(({
  ownerState: e,
  theme: t
}) => h({
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
}, e.withLabel && h({
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
function xu(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, i = ee(e, p0), s = n != null && n !== "", a = h({}, e, {
    notched: r,
    withLabel: s
  });
  return /* @__PURE__ */ y.jsx(f0, h({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, i, {
    children: /* @__PURE__ */ y.jsx(h0, {
      ownerState: a,
      children: s ? /* @__PURE__ */ y.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ml || (Ml = /* @__PURE__ */ y.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (xu.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
const m0 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], g0 = (e) => {
  const {
    classes: t
  } = e, r = fe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Mb, t);
  return h({}, t, r);
}, b0 = G(Wo, {
  shouldForwardProp: (e) => Et(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Vo
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return h({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Ft.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Ft.focused} .${Ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${Ft.error} .${Ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${Ft.disabled} .${Ft.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && h({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), y0 = G(xu, {
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
}), v0 = G(qo, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Uo
})(({
  theme: e,
  ownerState: t
}) => h({
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
})), Zo = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var r, i, s, a, l;
  const c = pe({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: f = "input",
    label: p,
    multiline: g = !1,
    notched: b,
    slots: m = {},
    type: v = "text"
  } = c, w = ee(c, m0), O = g0(c), C = qn(), R = Wn({
    props: c,
    muiFormControl: C,
    states: ["required"]
  }), E = h({}, c, {
    color: R.color || "primary",
    disabled: R.disabled,
    error: R.error,
    focused: R.focused,
    formControl: C,
    fullWidth: d,
    hiddenLabel: R.hiddenLabel,
    multiline: g,
    size: R.size,
    type: v
  }), $ = (r = (i = m.root) != null ? i : u.Root) != null ? r : b0, k = (s = (a = m.input) != null ? a : u.Input) != null ? s : v0;
  return /* @__PURE__ */ y.jsx(Ho, h({
    slots: {
      root: $,
      input: k
    },
    renderSuffix: (_) => /* @__PURE__ */ y.jsx(y0, {
      ownerState: E,
      className: O.notchedOutline,
      label: p != null && p !== "" && R.required ? l || (l = /* @__PURE__ */ y.jsxs(x.Fragment, {
        children: [p, " ", "*"]
      })) : p,
      notched: typeof b < "u" ? b : !!(_.startAdornment || _.filled || _.focused)
    }),
    fullWidth: d,
    inputComponent: f,
    multiline: g,
    ref: n,
    type: v
  }, w, {
    classes: h({}, O, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (Zo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Zo.muiName = "Input";
function x0(e) {
  return ue("MuiSelect", e);
}
const er = de("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Dl;
const E0 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], T0 = G("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${er.select}`]: t.select
      },
      {
        [`&.${er.select}`]: t[n.variant]
      },
      {
        [`&.${er.error}`]: t.error
      },
      {
        [`&.${er.multiple}`]: t.multiple
      }
    ];
  }
})(bu, {
  // Win specificity over the input base
  [`&.${er.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), C0 = G("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${A(n.variant)}`], n.open && t.iconOpen];
  }
})(yu), R0 = G("input", {
  shouldForwardProp: (e) => Bm(e) && e !== "classes",
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
function zl(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function w0(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const k0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${A(n)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return fe(l, x0, t);
}, Eu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    "aria-describedby": r,
    "aria-label": i,
    autoFocus: s,
    autoWidth: a,
    children: l,
    className: c,
    defaultOpen: u,
    defaultValue: d,
    disabled: f,
    displayEmpty: p,
    error: g = !1,
    IconComponent: b,
    inputRef: m,
    labelId: v,
    MenuProps: w = {},
    multiple: O,
    name: C,
    onBlur: R,
    onChange: E,
    onClose: $,
    onFocus: k,
    onOpen: _,
    open: z,
    readOnly: P,
    renderValue: F,
    SelectDisplayProps: K = {},
    tabIndex: B,
    value: I,
    variant: j = "standard"
  } = t, H = ee(t, E0), [L, V] = Bi({
    controlled: I,
    default: d,
    name: "Select"
  }), [Q, S] = Bi({
    controlled: z,
    default: u,
    name: "Select"
  }), N = x.useRef(null), U = x.useRef(null), [X, W] = x.useState(null), {
    current: q
  } = x.useRef(z != null), [Y, oe] = x.useState(), se = Ue(n, m), ne = x.useCallback((ie) => {
    U.current = ie, ie && W(ie);
  }, []), ae = X == null ? void 0 : X.parentNode;
  x.useImperativeHandle(se, () => ({
    focus: () => {
      U.current.focus();
    },
    node: N.current,
    value: L
  }), [L]), x.useEffect(() => {
    u && Q && X && !q && (oe(a ? null : ae.clientWidth), U.current.focus());
  }, [X, a]), x.useEffect(() => {
    s && U.current.focus();
  }, [s]), x.useEffect(() => {
    if (!v)
      return;
    const ie = rt(U.current).getElementById(v);
    if (ie) {
      const he = () => {
        getSelection().isCollapsed && U.current.focus();
      };
      return ie.addEventListener("click", he), () => {
        ie.removeEventListener("click", he);
      };
    }
  }, [v]);
  const re = (ie, he) => {
    ie ? _ && _(he) : $ && $(he), q || (oe(a ? null : ae.clientWidth), S(ie));
  }, M = (ie) => {
    ie.button === 0 && (ie.preventDefault(), U.current.focus(), re(!0, ie));
  }, Pe = (ie) => {
    re(!1, ie);
  }, Z = x.Children.toArray(l), Ie = (ie) => {
    const he = Z.map((Ot) => Ot.props.value).indexOf(ie.target.value);
    if (he === -1)
      return;
    const De = Z[he];
    V(De.props.value), E && E(ie, De);
  }, qe = (ie) => (he) => {
    let De;
    if (he.currentTarget.hasAttribute("tabindex")) {
      if (O) {
        De = Array.isArray(L) ? L.slice() : [];
        const Ot = L.indexOf(ie.props.value);
        Ot === -1 ? De.push(ie.props.value) : De.splice(Ot, 1);
      } else
        De = ie.props.value;
      if (ie.props.onClick && ie.props.onClick(he), L !== De && (V(De), E)) {
        const Ot = he.nativeEvent || he, Or = new Ot.constructor(Ot.type, Ot);
        Object.defineProperty(Or, "target", {
          writable: !0,
          value: {
            value: De,
            name: C
          }
        }), E(Or, ie);
      }
      O || re(!1, he);
    }
  }, _e = (ie) => {
    P || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ie.key) !== -1 && (ie.preventDefault(), re(!0, ie));
  }, Tt = X !== null && Q, kt = (ie) => {
    !Tt && R && (Object.defineProperty(ie, "target", {
      writable: !0,
      value: {
        value: L,
        name: C
      }
    }), R(ie));
  };
  delete H["aria-invalid"];
  let Ye, We;
  const ft = [];
  let it = !1, st = !1;
  (so({
    value: L
  }) || p) && (F ? Ye = F(L) : it = !0);
  const at = Z.map((ie) => {
    if (!/* @__PURE__ */ x.isValidElement(ie))
      return null;
    process.env.NODE_ENV !== "production" && xr.isFragment(ie) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let he;
    if (O) {
      if (!Array.isArray(L))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Wt(2));
      he = L.some((De) => zl(De, ie.props.value)), he && it && ft.push(ie.props.children);
    } else
      he = zl(L, ie.props.value), he && it && (We = ie.props.children);
    return he && (st = !0), /* @__PURE__ */ x.cloneElement(ie, {
      "aria-selected": he ? "true" : "false",
      onClick: qe(ie),
      onKeyUp: (De) => {
        De.key === " " && De.preventDefault(), ie.props.onKeyUp && ie.props.onKeyUp(De);
      },
      role: "option",
      selected: he,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ie.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    if (!st && !O && L !== "") {
      const ie = Z.map((he) => he.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${L}\` for the select ${C ? `(name="${C}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ie.filter((he) => he != null).map((he) => `\`${he}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [st, Z, O, C, L]), it && (O ? ft.length === 0 ? Ye = null : Ye = ft.reduce((ie, he, De) => (ie.push(he), De < ft.length - 1 && ie.push(", "), ie), []) : Ye = We);
  let Ct = Y;
  !a && q && X && (Ct = ae.clientWidth);
  let Je;
  typeof B < "u" ? Je = B : Je = f ? null : 0;
  const ve = K.id || (C ? `mui-component-select-${C}` : void 0), le = h({}, t, {
    variant: j,
    value: L,
    open: Tt,
    error: g
  }), ht = k0(le);
  return /* @__PURE__ */ y.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ y.jsx(T0, h({
      ref: ne,
      tabIndex: Je,
      role: "button",
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Tt ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [v, ve].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      onKeyDown: _e,
      onMouseDown: f || P ? null : M,
      onBlur: kt,
      onFocus: k
    }, K, {
      ownerState: le,
      className: te(K.className, ht.select, c),
      id: ve,
      children: w0(Ye) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Dl || (Dl = /* @__PURE__ */ y.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Ye
    })), /* @__PURE__ */ y.jsx(R0, h({
      "aria-invalid": g,
      value: Array.isArray(L) ? L.join(",") : L,
      name: C,
      ref: N,
      "aria-hidden": !0,
      onChange: Ie,
      tabIndex: -1,
      disabled: f,
      className: ht.nativeInput,
      autoFocus: s,
      ownerState: le
    }, H)), /* @__PURE__ */ y.jsx(C0, {
      as: b,
      className: ht.icon,
      ownerState: le
    }), /* @__PURE__ */ y.jsx(Ss, h({
      id: `menu-${C || ""}`,
      anchorEl: ae,
      open: Tt,
      onClose: Pe,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, w, {
      MenuListProps: h({
        "aria-labelledby": v,
        role: "listbox",
        disableListWrap: !0
      }, w.MenuListProps),
      PaperProps: h({}, w.PaperProps, {
        style: h({
          minWidth: Ct
        }, w.PaperProps != null ? w.PaperProps.style : null)
      }),
      children: at
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Eu.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Dt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const O0 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], S0 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, _s = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Et(e) && e !== "variant",
  slot: "Root"
}, $0 = G(Xo, _s)(""), _0 = G(Zo, _s)(""), P0 = G(Yo, _s)(""), Ps = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = zb,
    id: f,
    input: p,
    inputProps: g,
    label: b,
    labelId: m,
    MenuProps: v,
    multiple: w = !1,
    native: O = !1,
    onClose: C,
    onOpen: R,
    open: E,
    renderValue: $,
    SelectDisplayProps: k,
    variant: _ = "outlined"
  } = r, z = ee(r, O0), P = O ? vu : Eu, F = qn(), K = Wn({
    props: r,
    muiFormControl: F,
    states: ["variant", "error"]
  }), B = K.variant || _, I = h({}, r, {
    variant: B,
    classes: a
  }), j = S0(I), H = p || {
    standard: /* @__PURE__ */ y.jsx($0, {
      ownerState: I
    }),
    outlined: /* @__PURE__ */ y.jsx(_0, {
      label: b,
      ownerState: I
    }),
    filled: /* @__PURE__ */ y.jsx(P0, {
      ownerState: I
    })
  }[B], L = Ue(n, H.ref);
  return /* @__PURE__ */ y.jsx(x.Fragment, {
    children: /* @__PURE__ */ x.cloneElement(H, h({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: P,
      inputProps: h({
        children: s,
        error: K.error,
        IconComponent: d,
        variant: B,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: w
      }, O ? {
        id: f
      } : {
        autoWidth: i,
        defaultOpen: c,
        displayEmpty: u,
        labelId: m,
        MenuProps: v,
        onClose: C,
        onOpen: R,
        open: E,
        renderValue: $,
        SelectDisplayProps: h({
          id: f
        }, k)
      }, g, {
        classes: g ? nt(j, g.classes) : j
      }, p ? p.props.inputProps : {})
    }, w && O && B === "outlined" ? {
      notched: !0
    } : {}, {
      ref: L,
      className: te(H.props.className, l)
    }, !p && {
      variant: B
    }, z))
  });
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<T>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
Ps.muiName = "Select";
function I0(e) {
  return ue("MuiSkeleton", e);
}
de("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const N0 = ["animation", "className", "component", "height", "style", "variant", "width"];
let co = (e) => e, Fl, Bl, Ll, Vl;
const j0 = (e) => {
  const {
    classes: t,
    variant: n,
    animation: r,
    hasChildren: i,
    width: s,
    height: a
  } = e;
  return fe({
    root: ["root", n, r, i && "withChildren", i && !s && "fitContent", i && !a && "heightAuto"]
  }, I0, t);
}, A0 = dn(Fl || (Fl = co`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)), M0 = dn(Bl || (Bl = co`
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
`)), D0 = G("span", {
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
  const n = xg(e.shape.borderRadius) || "px", r = Eg(e.shape.borderRadius);
  return h({
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : Ne(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
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
}) => e.animation === "pulse" && vr(Ll || (Ll = co`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `), A0), ({
  ownerState: e,
  theme: t
}) => e.animation === "wave" && vr(Vl || (Vl = co`
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
    `), M0, (t.vars || t).palette.action.hover)), Tu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiSkeleton"
  }), {
    animation: i = "pulse",
    className: s,
    component: a = "span",
    height: l,
    style: c,
    variant: u = "text",
    width: d
  } = r, f = ee(r, N0), p = h({}, r, {
    animation: i,
    component: a,
    variant: u,
    hasChildren: !!f.children
  }), g = j0(p);
  return /* @__PURE__ */ y.jsx(D0, h({
    as: a,
    ref: n,
    className: te(g.root, s),
    ownerState: p
  }, f, {
    style: h({
      width: d,
      height: l
    }, c)
  }));
});
process.env.NODE_ENV !== "production" && (Tu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: o.oneOf(["pulse", "wave", !1]),
  /**
   * Optional children to infer width and height from.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["circular", "rectangular", "rounded", "text"]), o.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: o.oneOfType([o.number, o.string])
});
function z0(e) {
  return ue("MuiToolbar", e);
}
de("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const F0 = ["className", "component", "disableGutters", "variant"], B0 = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return fe({
    root: ["root", !n && "gutters", r]
  }, z0, t);
}, L0 = G("div", {
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
}) => h({
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
}) => t.variant === "regular" && e.mixins.toolbar), Cu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: s = "div",
    disableGutters: a = !1,
    variant: l = "regular"
  } = r, c = ee(r, F0), u = h({}, r, {
    component: s,
    disableGutters: a,
    variant: l
  }), d = B0(u);
  return /* @__PURE__ */ y.jsx(L0, h({
    as: s,
    className: te(d.root, i),
    ref: n,
    ownerState: u
  }, c));
});
process.env.NODE_ENV !== "production" && (Cu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: o.oneOfType([o.oneOf(["dense", "regular"]), o.string])
});
function V0(e) {
  return ue("MuiTextField", e);
}
de("MuiTextField", ["root"]);
const U0 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], W0 = {
  standard: Xo,
  filled: Yo,
  outlined: Zo
}, q0 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, V0, t);
}, H0 = G(au, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ru = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: p,
    fullWidth: g = !1,
    helperText: b,
    id: m,
    InputLabelProps: v,
    inputProps: w,
    InputProps: O,
    inputRef: C,
    label: R,
    maxRows: E,
    minRows: $,
    multiline: k = !1,
    name: _,
    onBlur: z,
    onChange: P,
    onClick: F,
    onFocus: K,
    placeholder: B,
    required: I = !1,
    rows: j,
    select: H = !1,
    SelectProps: L,
    type: V,
    value: Q,
    variant: S = "outlined"
  } = r, N = ee(r, U0), U = h({}, r, {
    autoFocus: s,
    color: c,
    disabled: d,
    error: f,
    fullWidth: g,
    multiline: k,
    required: I,
    select: H,
    variant: S
  }), X = q0(U);
  process.env.NODE_ENV !== "production" && H && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const W = {};
  S === "outlined" && (v && typeof v.shrink < "u" && (W.notched = v.shrink), W.label = R), H && ((!L || !L.native) && (W.id = void 0), W["aria-describedby"] = void 0);
  const q = hs(m), Y = b && q ? `${q}-helper-text` : void 0, oe = R && q ? `${q}-label` : void 0, se = W0[S], ne = /* @__PURE__ */ y.jsx(se, h({
    "aria-describedby": Y,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: g,
    multiline: k,
    name: _,
    rows: j,
    maxRows: E,
    minRows: $,
    type: V,
    value: Q,
    id: q,
    inputRef: C,
    onBlur: z,
    onChange: P,
    onFocus: K,
    onClick: F,
    placeholder: B,
    inputProps: w
  }, W, O));
  return /* @__PURE__ */ y.jsxs(H0, h({
    className: te(X.root, l),
    disabled: d,
    error: f,
    fullWidth: g,
    ref: n,
    required: I,
    color: c,
    variant: S,
    ownerState: U
  }, N, {
    children: [R != null && R !== "" && /* @__PURE__ */ y.jsx(uu, h({
      htmlFor: q,
      id: oe
    }, v, {
      children: R
    })), H ? /* @__PURE__ */ y.jsx(Ps, h({
      "aria-describedby": Y,
      id: q,
      labelId: oe,
      value: Q,
      input: ne
    }, L, {
      children: a
    })) : ne, b && /* @__PURE__ */ y.jsx(lu, h({
      id: Y
    }, p, {
      children: b
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Ru.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Dt,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
var Is = {}, wu = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(wu);
var hn = wu.exports, Ri = {};
const G0 = /* @__PURE__ */ cd(Og);
var Ul;
function mn() {
  return Ul || (Ul = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = G0;
  }(Ri)), Ri;
}
var K0 = hn;
Object.defineProperty(Is, "__esModule", {
  value: !0
});
var ku = Is.default = void 0, Y0 = K0(mn()), X0 = y, Z0 = (0, Y0.default)(/* @__PURE__ */ (0, X0.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
ku = Is.default = Z0;
var Ns = {}, J0 = hn;
Object.defineProperty(Ns, "__esModule", {
  value: !0
});
var Ou = Ns.default = void 0, Q0 = J0(mn()), ex = y, tx = (0, Q0.default)(/* @__PURE__ */ (0, ex.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
Ou = Ns.default = tx;
var js = {}, nx = hn;
Object.defineProperty(js, "__esModule", {
  value: !0
});
var Su = js.default = void 0, rx = nx(mn()), ox = y, ix = (0, rx.default)(/* @__PURE__ */ (0, ox.jsx)("path", {
  d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
}), "Fullscreen");
Su = js.default = ix;
var As = {}, sx = hn;
Object.defineProperty(As, "__esModule", {
  value: !0
});
var $u = As.default = void 0, ax = sx(mn()), lx = y, cx = (0, ax.default)(/* @__PURE__ */ (0, lx.jsx)("path", {
  d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
}), "FullscreenExit");
$u = As.default = cx;
var Ms = {}, ux = hn;
Object.defineProperty(Ms, "__esModule", {
  value: !0
});
var _u = Ms.default = void 0, dx = ux(mn()), px = y, fx = (0, dx.default)(/* @__PURE__ */ (0, px.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), "Add");
_u = Ms.default = fx;
const hx = ({
  onClose: e,
  onToggleFullscreen: t,
  isFullscreen: n = !1
}) => {
  var a, l, c, u, d, f;
  const [r, i] = Ht(), s = Mt(() => {
    i({ type: "START_NEW_CHAT" });
  }, [i]);
  return _n(() => {
    let p = !0;
    return Qd(r).then((g) => {
      p && i({ type: "SET_ONLINE_STATUS", payload: g });
    }).catch((g) => {
      p && i({
        type: "SET_ERROR",
        payload: g.message || "server error: unable to get online status"
      });
    }), () => {
      p = !1;
    };
  }, [r.api, i]), /* @__PURE__ */ y.jsxs(
    Gc,
    {
      position: "relative",
      sx: {
        bgcolor: (a = r.config.ui) == null ? void 0 : a.backgroundColor,
        color: (l = r.config.ui) == null ? void 0 : l.foregroundColor,
        boxShadow: 0
      },
      children: [
        /* @__PURE__ */ y.jsxs(
          Cu,
          {
            variant: "regular",
            sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 8px"
            },
            children: [
              /* @__PURE__ */ y.jsxs(
                ut,
                {
                  direction: "row",
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ y.jsx(
                      Cs,
                      {
                        alt: (c = r.config.assistant) == null ? void 0 : c.name,
                        src: ((d = (u = r.config.assistant) == null ? void 0 : u.avatar) == null ? void 0 : d.staticUrl) || "",
                        sx: {
                          width: 32,
                          height: 32,
                          border: r.api.online ? "2px solid #00FF00" : "2px solid #FF0000"
                        },
                        children: /* @__PURE__ */ y.jsx(Ou, {})
                      }
                    ),
                    /* @__PURE__ */ y.jsx(Un, { variant: "h6", children: (f = r.config.assistant) == null ? void 0 : f.name })
                  ]
                }
              ),
              /* @__PURE__ */ y.jsxs(
                ut,
                {
                  direction: "row",
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ y.jsx(
                      tn,
                      {
                        size: "small",
                        variant: "circular",
                        onClick: s,
                        sx: {
                          boxShadow: 0
                        },
                        children: /* @__PURE__ */ y.jsx(_u, {})
                      }
                    ),
                    t && /* @__PURE__ */ y.jsx(
                      tn,
                      {
                        size: "small",
                        variant: "circular",
                        sx: {
                          boxShadow: 0
                        },
                        onClick: t,
                        children: n ? /* @__PURE__ */ y.jsx($u, {}) : /* @__PURE__ */ y.jsx(Su, {})
                      }
                    ),
                    e && /* @__PURE__ */ y.jsx(
                      tn,
                      {
                        size: "small",
                        variant: "circular",
                        sx: {
                          boxShadow: 0
                        },
                        onClick: e,
                        children: /* @__PURE__ */ y.jsx(ku, {})
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        r.error && /* @__PURE__ */ y.jsx(
          Hc,
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
}, Pu = ho(hx), mx = Be(/* @__PURE__ */ y.jsx("path", {
  d: "m14 7-5 5 5 5V7z"
}), "ArrowLeft"), gx = Be(/* @__PURE__ */ y.jsx("path", {
  d: "m10 17 5-5-5-5v10z"
}), "ArrowRight"), bx = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
}), "AttachFile"), yx = Be(/* @__PURE__ */ y.jsx("path", {
  d: "m9.4 10.5 4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"
}), "Camera"), vx = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
}), "ContentCopy"), Iu = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
}), "Description"), Ds = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
}), "Image"), xx = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"
}), "InsertDriveFile"), zs = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
}), "Mic"), Ex = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send"), Nu = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M6 6h12v12H6z"
}), "Stop"), Tx = Be(/* @__PURE__ */ y.jsx("path", {
  d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
}), "VolumeUp");
function Cx({ onAddUpload: e }) {
  const [t] = Ht(), [n, r] = Ke(null), [i, s] = Ke(!1), [a] = Ke(() => new rp()), [l, c] = Ke(null), [u, d] = Ke(null), f = Ze.useRef(null), p = Ze.useRef(null), g = t.api.isApiAcceptingImage, b = t.api.isApiAcceptingFullFile, m = (k) => {
    r(k.currentTarget);
  }, v = () => {
    r(null);
  }, w = (k) => {
    p.current && (p.current.accept = k, p.current.click());
  }, O = async () => {
    try {
      await a.requestPermission();
      const k = a.getPreview();
      c(k), s(!0);
    } catch (k) {
      console.error("Error accessing the camera:", k);
    }
  }, C = () => {
    const k = a.captureImage(f == null ? void 0 : f.current);
    d(k), e({
      name: `image${Date.now()}.png`,
      type: "file",
      mime: "image/png",
      data: k
    }), R();
  }, R = () => {
    s(!1), c(null), a.stop();
  };
  _n(() => () => {
    a.stop();
  }, []);
  const E = async (k) => {
    var z;
    const _ = (z = k.target.files) == null ? void 0 : z[0];
    if (_) {
      const P = await $(_);
      e({
        name: _.name,
        type: _.type.includes("image") ? "file" : "file:full",
        mime: _.type,
        data: P
      });
    }
  }, $ = (k) => new Promise((_, z) => {
    const P = new FileReader();
    P.onload = () => _(P.result), P.onerror = z, P.readAsDataURL(k);
  });
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(
      tn,
      {
        size: "small",
        sx: { boxShadow: 0, bgcolor: "transparent" },
        onClick: m,
        children: /* @__PURE__ */ y.jsx(bx, {})
      }
    ),
    /* @__PURE__ */ y.jsxs(
      Ss,
      {
        anchorEl: n,
        open: !!n,
        onClose: v,
        children: [
          /* @__PURE__ */ y.jsxs(
            qr,
            {
              onClick: O,
              disabled: !g,
              children: [
                /* @__PURE__ */ y.jsx(yx, { sx: { mr: 1 } }),
                " Capture Image"
              ]
            }
          ),
          /* @__PURE__ */ y.jsxs(
            qr,
            {
              onClick: () => w("image/*"),
              disabled: !g,
              children: [
                /* @__PURE__ */ y.jsx(Ds, { sx: { mr: 1 } }),
                " Upload Image"
              ]
            }
          ),
          /* @__PURE__ */ y.jsxs(
            qr,
            {
              onClick: () => w("*/*"),
              disabled: !b,
              children: [
                /* @__PURE__ */ y.jsx(Iu, { sx: { mr: 1 } }),
                " Upload File"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ y.jsx(
      "input",
      {
        ref: p,
        type: "file",
        onChange: E,
        style: { display: "none" },
        multiple: !0
      }
    ),
    /* @__PURE__ */ y.jsxs(
      Jc,
      {
        open: i,
        onClose: R,
        children: [
          /* @__PURE__ */ y.jsx(tu, { children: "Camera Preview" }),
          /* @__PURE__ */ y.jsx(eu, { children: /* @__PURE__ */ y.jsx(ut, { alignItems: "center", children: /* @__PURE__ */ y.jsx(
            "video",
            {
              style: { width: "100%", maxHeight: "400px" },
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              ref: (k) => {
                k && (k.srcObject = l, f.current = k);
              }
            }
          ) }) }),
          /* @__PURE__ */ y.jsxs(Qc, { children: [
            /* @__PURE__ */ y.jsx(
              ao,
              {
                onClick: R,
                color: "secondary",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ y.jsx(
              ao,
              {
                onClick: C,
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
function Rx({
  onAddAudio: e
}) {
  const [t] = Ke(() => new np()), [n, r] = Ke(0), [i, s] = Ke(!1), [a, l] = Ke(
    null
  );
  _n(() => {
    a && !i && (clearInterval(a), l(null));
  }, [i, a]);
  const c = async () => {
    try {
      await t.startRecording(), s(!0), r(0);
      const f = setInterval(() => {
        r((p) => p + 1);
      }, 1e3);
      l(f);
    } catch (f) {
      console.error("Failed to start recording:", f);
    }
  }, u = async () => {
    try {
      s(!1), r(t.timeRecorded);
      const f = await t.stopRecording();
      if (f) {
        const p = await d(f);
        e({
          name: `audio${t.startTime}.wav`,
          type: "audio",
          mime: f.type,
          data: p
        });
      }
    } catch (f) {
      console.error("Failed to stop recording:", f);
    }
  }, d = async (f) => new Promise((p, g) => {
    const b = new FileReader();
    b.onerror = g, b.onload = () => p(b.result), b.readAsDataURL(f);
  });
  return /* @__PURE__ */ y.jsx(
    tn,
    {
      size: "medium",
      onClick: i ? u : c,
      sx: { boxShadow: 0, bgcolor: "transparent" },
      children: i ? /* @__PURE__ */ y.jsx(
        Kc,
        {
          badgeContent: `${n}s`,
          color: "secondary",
          sx: { boxShadow: 0, bgcolor: "transparent" },
          children: /* @__PURE__ */ y.jsx(Nu, { sx: { fontSize: 24 } })
        }
      ) : /* @__PURE__ */ y.jsx(zs, { sx: { fontSize: 24 } })
    }
  );
}
function wx() {
  var f;
  const [e, t] = Ht(), n = e.api.isApiAcceptingVoice, [r, i] = Ke({
    id: ir(),
    role: "user",
    content: "",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    uploads: []
  }), [s, a] = Ke({
    id: ir(),
    role: "api",
    content: "",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  }), l = (p) => {
    i((g) => ({
      ...g,
      uploads: [...g.uploads || [], p]
    }));
  }, c = async () => {
    const p = await ba({
      chatData: e,
      userMessage: r,
      canStream: !1
    }).catch((g) => {
      t({ type: "SET_TYPING_STATUS", payload: !1 }), t({ type: "DELETE_LAST_MESSAGE" }), t({
        type: "SET_ERROR",
        payload: `Error: ${g.message}`
      });
    });
    p && (t({
      type: "UPDATE_LAST_MESSAGE",
      payload: {
        id: p.chatMessageId,
        content: p.text
      }
    }), t({ type: "SET_TYPING_STATUS", payload: !1 }));
  }, u = async () => {
    const p = await ba({
      chatData: e,
      userMessage: r,
      canStream: !0
    }).catch((g) => {
      t({ type: "DELETE_LAST_MESSAGE" }), t({ type: "SET_TYPING_STATUS", payload: !1 }), t({
        type: "SET_ERROR",
        payload: `Error: ${g.message}`
      });
    });
    t({ type: "SET_TYPING_STATUS", payload: !1 });
    for await (const g of p) {
      const b = JSON.parse(g.data), m = b.event, v = b.data;
      m === "token" && t({
        type: "UPDATE_LAST_MESSAGE",
        payload: { content: v }
      }), m === "metadata" && t({
        type: "UPDATE_LAST_MESSAGE",
        payload: { id: v.chatMessageId }
      });
    }
  }, d = Mt(async () => {
    var g;
    e.config.onRequest && e.config.onRequest(r), !(!r.content.trim() && !((g = r.uploads) != null && g.length)) && (t({ type: "ADD_NEW_MESSAGE", payload: r }), t({ type: "SET_TYPING_STATUS", payload: !0 }), t({ type: "ADD_NEW_MESSAGE", payload: s }), e.api.canStream && await u(), e.api.canStream || await c(), e.config.onResponse && e.config.onResponse(s), i({
      id: ir(),
      role: "user",
      content: "",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      uploads: []
    }), a({
      id: ir(),
      role: "api",
      content: "",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }));
  }, [r, s, e, t]);
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    r.uploads && r.uploads.length > 0 && /* @__PURE__ */ y.jsx(
      ut,
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
        children: r.uploads.map((p, g) => /* @__PURE__ */ y.jsx(
          Ts,
          {
            label: p.name,
            onDelete: () => i((b) => {
              var m;
              return {
                ...b,
                uploads: (m = b.uploads) == null ? void 0 : m.filter((v, w) => w !== g)
              };
            }),
            icon: p.type === "audio" ? /* @__PURE__ */ y.jsx(zs, {}) : p.mime.includes("image") ? /* @__PURE__ */ y.jsx(Ds, {}) : /* @__PURE__ */ y.jsx(Iu, {})
          },
          g
        ))
      }
    ),
    /* @__PURE__ */ y.jsxs(
      ut,
      {
        direction: "row",
        spacing: 1,
        alignItems: "center",
        sx: { p: 1 },
        children: [
          /* @__PURE__ */ y.jsx(
            Cx,
            {
              onAddUpload: (p) => l({
                name: p.name,
                type: p.type,
                mime: p.mime,
                data: p.data
              })
            }
          ),
          /* @__PURE__ */ y.jsx(
            Ru,
            {
              value: r.content,
              onChange: (p) => i((g) => ({ ...g, content: p.target.value })),
              placeholder: "Type your message...",
              multiline: !0,
              fullWidth: !0,
              minRows: 1,
              maxRows: 4,
              variant: "outlined",
              disabled: !e.api.online,
              onKeyDown: (p) => {
                p.key === "Enter" && !p.shiftKey && (p.preventDefault(), d());
              }
            }
          ),
          n && /* @__PURE__ */ y.jsx(
            Rx,
            {
              onAddAudio: (p) => l({
                name: p.name,
                type: p.type,
                mime: p.mime,
                data: p.data
              })
            }
          ),
          /* @__PURE__ */ y.jsx(
            zn,
            {
              onClick: d,
              disabled: !e.api.online || e.api.typing || !r.content && ((f = r.uploads) == null ? void 0 : f.length) === 0,
              children: /* @__PURE__ */ y.jsx(Ex, {})
            }
          )
        ]
      }
    )
  ] });
}
const kx = () => {
  const [e] = Ht(), [t, n] = Ke(window.innerWidth > 768), [r, i] = Ke(!1), s = Gr(null), a = Mt(
    () => n((f) => !f),
    []
  ), l = Mt(() => {
    var f;
    r ? (f = s.current) == null || f.pause() : s.current && s.current.readyState >= 2 && s.current.play(), i((p) => !p);
  }, [r]), { backgroundColor: c, foregroundColor: u } = e.config.ui || {}, { avatar: d } = e.config.assistant || {};
  return /* @__PURE__ */ y.jsxs(At, { sx: { display: "flex", position: "relative" }, children: [
    /* @__PURE__ */ y.jsx(
      su,
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
            bgcolor: c,
            color: u
          }
        },
        children: t && /* @__PURE__ */ y.jsxs(
          ut,
          {
            spacing: 2,
            direction: "column",
            sx: {
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            },
            children: [
              /* @__PURE__ */ y.jsxs(
                At,
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
                    d != null && d.liveUrl ? /* @__PURE__ */ y.jsx(
                      At,
                      {
                        component: "img",
                        src: d.liveUrl,
                        alt: "Avatar",
                        sx: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: r ? "none" : "block"
                        }
                      }
                    ) : /* @__PURE__ */ y.jsx(
                      Cs,
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
                    /* @__PURE__ */ y.jsx(
                      At,
                      {
                        component: "video",
                        ref: s,
                        src: d == null ? void 0 : d.videoUrl,
                        onEnded: () => i(!1),
                        sx: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: r ? "block" : "none"
                        },
                        children: /* @__PURE__ */ y.jsx(
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
              /* @__PURE__ */ y.jsx(
                ao,
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
    /* @__PURE__ */ y.jsx(
      zn,
      {
        sx: {
          borderRadius: 0,
          width: 2,
          color: u,
          bgcolor: c
        },
        onClick: a,
        children: t ? /* @__PURE__ */ y.jsx(mx, {}) : /* @__PURE__ */ y.jsx(gx, {})
      }
    )
  ] });
}, Ox = Ze.memo(kx);
function Fs() {
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
let gn = Fs();
function ju(e) {
  gn = e;
}
const dr = { exec: () => null };
function Se(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const r = {
    replace: (i, s) => {
      let a = typeof s == "string" ? s : s.source;
      return a = a.replace(et.caret, "$1"), n = n.replace(i, a), r;
    },
    getRegex: () => new RegExp(n, t)
  };
  return r;
}
const et = {
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
}, Sx = /^(?:[ \t]*(?:\n|$))+/, $x = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, _x = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, kr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Px = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Au = /(?:[*+-]|\d{1,9}[.)])/, Mu = Se(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Au).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Bs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ix = /^[^\n]+/, Ls = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Nx = Se(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ls).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), jx = Se(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Au).getRegex(), Jo = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Vs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ax = Se("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Vs).replace("tag", Jo).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Du = Se(Bs).replace("hr", kr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jo).getRegex(), Mx = Se(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Du).getRegex(), Us = {
  blockquote: Mx,
  code: $x,
  def: Nx,
  fences: _x,
  heading: Px,
  hr: kr,
  html: Ax,
  lheading: Mu,
  list: jx,
  newline: Sx,
  paragraph: Du,
  table: dr,
  text: Ix
}, Wl = Se("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", kr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jo).getRegex(), Dx = {
  ...Us,
  table: Wl,
  paragraph: Se(Bs).replace("hr", kr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Wl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Jo).getRegex()
}, zx = {
  ...Us,
  html: Se(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Vs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: dr,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Se(Bs).replace("hr", kr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Mu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, zu = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Fx = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Fu = /^( {2,}|\\)\n(?!\s*$)/, Bx = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Qo = /[\p{P}\p{S}]/u, Ws = /[\s\p{P}\p{S}]/u, Bu = /[^\s\p{P}\p{S}]/u, Lx = Se(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ws).getRegex(), Vx = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Ux = Se(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, "u").replace(/punct/g, Qo).getRegex(), Wx = Se("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, Bu).replace(/punctSpace/g, Ws).replace(/punct/g, Qo).getRegex(), qx = Se("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Bu).replace(/punctSpace/g, Ws).replace(/punct/g, Qo).getRegex(), Hx = Se(/\\(punct)/, "gu").replace(/punct/g, Qo).getRegex(), Gx = Se(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Kx = Se(Vs).replace("(?:-->|$)", "-->").getRegex(), Yx = Se("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Kx).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), uo = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Xx = Se(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", uo).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Lu = Se(/^!?\[(label)\]\[(ref)\]/).replace("label", uo).replace("ref", Ls).getRegex(), Vu = Se(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ls).getRegex(), Zx = Se("reflink|nolink(?!\\()", "g").replace("reflink", Lu).replace("nolink", Vu).getRegex(), qs = {
  _backpedal: dr,
  // only used for GFM url
  anyPunctuation: Hx,
  autolink: Gx,
  blockSkip: Vx,
  br: Fu,
  code: Fx,
  del: dr,
  emStrongLDelim: Ux,
  emStrongRDelimAst: Wx,
  emStrongRDelimUnd: qx,
  escape: zu,
  link: Xx,
  nolink: Vu,
  punctuation: Lx,
  reflink: Lu,
  reflinkSearch: Zx,
  tag: Yx,
  text: Bx,
  url: dr
}, Jx = {
  ...qs,
  link: Se(/^!?\[(label)\]\((.*?)\)/).replace("label", uo).getRegex(),
  reflink: Se(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", uo).getRegex()
}, Ki = {
  ...qs,
  escape: Se(zu).replace("])", "~|])").getRegex(),
  url: Se(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Qx = {
  ...Ki,
  br: Se(Fu).replace("{2,}", "*").getRegex(),
  text: Se(Ki.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Mr = {
  normal: Us,
  gfm: Dx,
  pedantic: zx
}, tr = {
  normal: qs,
  gfm: Ki,
  breaks: Qx,
  pedantic: Jx
}, e1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ql = (e) => e1[e];
function St(e, t) {
  if (t) {
    if (et.escapeTest.test(e))
      return e.replace(et.escapeReplace, ql);
  } else if (et.escapeTestNoEncode.test(e))
    return e.replace(et.escapeReplaceNoEncode, ql);
  return e;
}
function Hl(e) {
  try {
    e = encodeURI(e).replace(et.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Gl(e, t) {
  var s;
  const n = e.replace(et.findPipe, (a, l, c) => {
    let u = !1, d = l;
    for (; --d >= 0 && c[d] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), r = n.split(et.splitPipe);
  let i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !((s = r.at(-1)) != null && s.trim()) && r.pop(), t)
    if (r.length > t)
      r.splice(t);
    else
      for (; r.length < t; )
        r.push("");
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(et.slashPipe, "|");
  return r;
}
function nr(e, t, n) {
  const r = e.length;
  if (r === 0)
    return "";
  let i = 0;
  for (; i < r; ) {
    const s = e.charAt(r - i - 1);
    if (s === t && !n)
      i++;
    else if (s !== t && n)
      i++;
    else
      break;
  }
  return e.slice(0, r - i);
}
function t1(e, t) {
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
function Kl(e, t, n, r, i) {
  const s = t.href, a = t.title || null, l = e[1].replace(i.other.outputLinkReplace, "$1");
  if (e[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const c = {
      type: "link",
      raw: n,
      href: s,
      title: a,
      text: l,
      tokens: r.inlineTokens(l)
    };
    return r.state.inLink = !1, c;
  }
  return {
    type: "image",
    raw: n,
    href: s,
    title: a,
    text: l
  };
}
function n1(e, t, n) {
  const r = e.match(n.other.indentCodeCompensation);
  if (r === null)
    return t;
  const i = r[1];
  return t.split(`
`).map((s) => {
    const a = s.match(n.other.beginningSpace);
    if (a === null)
      return s;
    const [l] = a;
    return l.length >= i.length ? s.slice(i.length) : s;
  }).join(`
`);
}
class po {
  // set by the lexer
  constructor(t) {
    be(this, "options");
    be(this, "rules");
    // set by the lexer
    be(this, "lexer");
    this.options = t || gn;
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
        text: this.options.pedantic ? r : nr(r, `
`)
      };
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const r = n[0], i = n1(r, n[3] || "", this.rules);
      return {
        type: "code",
        raw: r,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
        text: i
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let r = n[2].trim();
      if (this.rules.other.endingHash.test(r)) {
        const i = nr(r, "#");
        (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (r = i.trim());
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
        raw: nr(n[0], `
`)
      };
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      let r = nr(n[0], `
`).split(`
`), i = "", s = "";
      const a = [];
      for (; r.length > 0; ) {
        let l = !1;
        const c = [];
        let u;
        for (u = 0; u < r.length; u++)
          if (this.rules.other.blockquoteStart.test(r[u]))
            c.push(r[u]), l = !0;
          else if (!l)
            c.push(r[u]);
          else
            break;
        r = r.slice(u);
        const d = c.join(`
`), f = d.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        i = i ? `${i}
${d}` : d, s = s ? `${s}
${f}` : f;
        const p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(f, a, !0), this.lexer.state.top = p, r.length === 0)
          break;
        const g = a.at(-1);
        if ((g == null ? void 0 : g.type) === "code")
          break;
        if ((g == null ? void 0 : g.type) === "blockquote") {
          const b = g, m = b.raw + `
` + r.join(`
`), v = this.blockquote(m);
          a[a.length - 1] = v, i = i.substring(0, i.length - b.raw.length) + v.raw, s = s.substring(0, s.length - b.text.length) + v.text;
          break;
        } else if ((g == null ? void 0 : g.type) === "list") {
          const b = g, m = b.raw + `
` + r.join(`
`), v = this.list(m);
          a[a.length - 1] = v, i = i.substring(0, i.length - g.raw.length) + v.raw, s = s.substring(0, s.length - b.raw.length) + v.raw, r = m.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: i,
        tokens: a,
        text: s
      };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let r = n[1].trim();
      const i = r.length > 1, s = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = i ? r : "[*+-]");
      const a = this.rules.other.listItemRegex(r);
      let l = !1;
      for (; t; ) {
        let u = !1, d = "", f = "";
        if (!(n = a.exec(t)) || this.rules.block.hr.test(t))
          break;
        d = n[0], t = t.substring(d.length);
        let p = n[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (O) => " ".repeat(3 * O.length)), g = t.split(`
`, 1)[0], b = !p.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, f = p.trimStart()) : b ? m = n[1].length + 1 : (m = n[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, f = p.slice(m), m += n[1].length), b && this.rules.other.blankLine.test(g) && (d += g + `
`, t = t.substring(g.length + 1), u = !0), !u) {
          const O = this.rules.other.nextBulletRegex(m), C = this.rules.other.hrRegex(m), R = this.rules.other.fencesBeginRegex(m), E = this.rules.other.headingBeginRegex(m), $ = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            const k = t.split(`
`, 1)[0];
            let _;
            if (g = k, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), _ = g) : _ = g.replace(this.rules.other.tabCharGlobal, "    "), R.test(g) || E.test(g) || $.test(g) || O.test(g) || C.test(g))
              break;
            if (_.search(this.rules.other.nonSpaceChar) >= m || !g.trim())
              f += `
` + _.slice(m);
            else {
              if (b || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || R.test(p) || E.test(p) || C.test(p))
                break;
              f += `
` + g;
            }
            !b && !g.trim() && (b = !0), d += k + `
`, t = t.substring(k.length + 1), p = _.slice(m);
          }
        }
        s.loose || (l ? s.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (l = !0));
        let v = null, w;
        this.options.gfm && (v = this.rules.other.listIsTask.exec(f), v && (w = v[0] !== "[ ] ", f = f.replace(this.rules.other.listReplaceTask, ""))), s.items.push({
          type: "list_item",
          raw: d,
          task: !!v,
          checked: w,
          loose: !1,
          text: f,
          tokens: []
        }), s.raw += d;
      }
      const c = s.items.at(-1);
      c && (c.raw = c.raw.trimEnd(), c.text = c.text.trimEnd()), s.raw = s.raw.trimEnd();
      for (let u = 0; u < s.items.length; u++)
        if (this.lexer.state.top = !1, s.items[u].tokens = this.lexer.blockTokens(s.items[u].text, []), !s.loose) {
          const d = s.items[u].tokens.filter((p) => p.type === "space"), f = d.length > 0 && d.some((p) => this.rules.other.anyLine.test(p.raw));
          s.loose = f;
        }
      if (s.loose)
        for (let u = 0; u < s.items.length; u++)
          s.items[u].loose = !0;
      return s;
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
      const r = n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = n[2] ? n[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return {
        type: "def",
        tag: r,
        raw: n[0],
        href: i,
        title: s
      };
    }
  }
  table(t) {
    var l;
    const n = this.rules.block.table.exec(t);
    if (!n || !this.rules.other.tableDelimiter.test(n[2]))
      return;
    const r = Gl(n[1]), i = n[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = (l = n[3]) != null && l.trim() ? n[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = {
      type: "table",
      raw: n[0],
      header: [],
      align: [],
      rows: []
    };
    if (r.length === i.length) {
      for (const c of i)
        this.rules.other.tableAlignRight.test(c) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(c) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(c) ? a.align.push("left") : a.align.push(null);
      for (let c = 0; c < r.length; c++)
        a.header.push({
          text: r[c],
          tokens: this.lexer.inline(r[c]),
          header: !0,
          align: a.align[c]
        });
      for (const c of s)
        a.rows.push(Gl(c, a.header.length).map((u, d) => ({
          text: u,
          tokens: this.lexer.inline(u),
          header: !1,
          align: a.align[d]
        })));
      return a;
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
        const a = nr(r.slice(0, -1), "\\");
        if ((r.length - a.length) % 2 === 0)
          return;
      } else {
        const a = t1(n[2], "()");
        if (a > -1) {
          const c = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + a;
          n[2] = n[2].substring(0, a), n[0] = n[0].substring(0, c).trim(), n[3] = "";
        }
      }
      let i = n[2], s = "";
      if (this.options.pedantic) {
        const a = this.rules.other.pedanticHrefTitle.exec(i);
        a && (i = a[1], s = a[3]);
      } else
        s = n[3] ? n[3].slice(1, -1) : "";
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? i = i.slice(1) : i = i.slice(1, -1)), Kl(n, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: s && s.replace(this.rules.inline.anyPunctuation, "$1")
      }, n[0], this.lexer, this.rules);
    }
  }
  reflink(t, n) {
    let r;
    if ((r = this.rules.inline.reflink.exec(t)) || (r = this.rules.inline.nolink.exec(t))) {
      const i = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = n[i.toLowerCase()];
      if (!s) {
        const a = r[0].charAt(0);
        return {
          type: "text",
          raw: a,
          text: a
        };
      }
      return Kl(r, s, r[0], this.lexer, this.rules);
    }
  }
  emStrong(t, n, r = "") {
    let i = this.rules.inline.emStrongLDelim.exec(t);
    if (!i || i[3] && r.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(i[1] || i[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const a = [...i[0]].length - 1;
      let l, c, u = a, d = 0;
      const f = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (f.lastIndex = 0, n = n.slice(-1 * t.length + a); (i = f.exec(n)) != null; ) {
        if (l = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !l)
          continue;
        if (c = [...l].length, i[3] || i[4]) {
          u += c;
          continue;
        } else if ((i[5] || i[6]) && a % 3 && !((a + c) % 3)) {
          d += c;
          continue;
        }
        if (u -= c, u > 0)
          continue;
        c = Math.min(c, c + u + d);
        const p = [...i[0]][0].length, g = t.slice(0, a + i.index + p + c);
        if (Math.min(a, c) % 2) {
          const m = g.slice(1, -1);
          return {
            type: "em",
            raw: g,
            text: m,
            tokens: this.lexer.inlineTokens(m)
          };
        }
        const b = g.slice(2, -2);
        return {
          type: "strong",
          raw: g,
          text: b,
          tokens: this.lexer.inlineTokens(b)
        };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let r = n[2].replace(this.rules.other.newLineCharGlobal, " ");
      const i = this.rules.other.nonSpaceChar.test(r), s = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
      return i && s && (r = r.substring(1, r.length - 1)), {
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
      let r, i;
      return n[2] === "@" ? (r = n[1], i = "mailto:" + r) : (r = n[1], i = r), {
        type: "link",
        raw: n[0],
        text: r,
        href: i,
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
      let i, s;
      if (n[2] === "@")
        i = n[0], s = "mailto:" + i;
      else {
        let a;
        do
          a = n[0], n[0] = ((r = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : r[0]) ?? "";
        while (a !== n[0]);
        i = n[0], n[1] === "www." ? s = "http://" + n[0] : s = n[0];
      }
      return {
        type: "link",
        raw: n[0],
        text: i,
        href: s,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
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
class yt {
  constructor(t) {
    be(this, "tokens");
    be(this, "options");
    be(this, "state");
    be(this, "tokenizer");
    be(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || gn, this.options.tokenizer = this.options.tokenizer || new po(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: et,
      block: Mr.normal,
      inline: tr.normal
    };
    this.options.pedantic ? (n.block = Mr.pedantic, n.inline = tr.pedantic) : this.options.gfm && (n.block = Mr.gfm, this.options.breaks ? n.inline = tr.breaks : n.inline = tr.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Mr,
      inline: tr
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new yt(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new yt(n).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(et.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    var i, s, a;
    for (this.options.pedantic && (t = t.replace(et.tabCharGlobal, "    ").replace(et.spaceLine, "")); t; ) {
      let l;
      if ((s = (i = this.options.extensions) == null ? void 0 : i.block) != null && s.some((u) => (l = u.call({ lexer: this }, t, n)) ? (t = t.substring(l.raw.length), n.push(l), !0) : !1))
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
      let c = t;
      if ((a = this.options.extensions) != null && a.startBlock) {
        let u = 1 / 0;
        const d = t.slice(1);
        let f;
        this.options.extensions.startBlock.forEach((p) => {
          f = p.call({ lexer: this }, d), typeof f == "number" && f >= 0 && (u = Math.min(u, f));
        }), u < 1 / 0 && u >= 0 && (c = t.substring(0, u + 1));
      }
      if (this.state.top && (l = this.tokenizer.paragraph(c))) {
        const u = n.at(-1);
        r && (u == null ? void 0 : u.type) === "paragraph" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : n.push(l), r = c.length !== t.length, t = t.substring(l.raw.length);
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
    var l, c, u;
    let r = t, i = null;
    if (this.tokens.links) {
      const d = Object.keys(this.tokens.links);
      if (d.length > 0)
        for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; )
          d.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; )
      r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; )
      r = r.slice(0, i.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let s = !1, a = "";
    for (; t; ) {
      s || (a = ""), s = !1;
      let d;
      if ((c = (l = this.options.extensions) == null ? void 0 : l.inline) != null && c.some((p) => (d = p.call({ lexer: this }, t, n)) ? (t = t.substring(d.raw.length), n.push(d), !0) : !1))
        continue;
      if (d = this.tokenizer.escape(t)) {
        t = t.substring(d.raw.length), n.push(d);
        continue;
      }
      if (d = this.tokenizer.tag(t)) {
        t = t.substring(d.raw.length), n.push(d);
        continue;
      }
      if (d = this.tokenizer.link(t)) {
        t = t.substring(d.raw.length), n.push(d);
        continue;
      }
      if (d = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(d.raw.length);
        const p = n.at(-1);
        d.type === "text" && (p == null ? void 0 : p.type) === "text" ? (p.raw += d.raw, p.text += d.text) : n.push(d);
        continue;
      }
      if (d = this.tokenizer.emStrong(t, r, a)) {
        t = t.substring(d.raw.length), n.push(d);
        continue;
      }
      if (d = this.tokenizer.codespan(t)) {
        t = t.substring(d.raw.length), n.push(d);
        continue;
      }
      if (d = this.tokenizer.br(t)) {
        t = t.substring(d.raw.length), n.push(d);
        continue;
      }
      if (d = this.tokenizer.del(t)) {
        t = t.substring(d.raw.length), n.push(d);
        continue;
      }
      if (d = this.tokenizer.autolink(t)) {
        t = t.substring(d.raw.length), n.push(d);
        continue;
      }
      if (!this.state.inLink && (d = this.tokenizer.url(t))) {
        t = t.substring(d.raw.length), n.push(d);
        continue;
      }
      let f = t;
      if ((u = this.options.extensions) != null && u.startInline) {
        let p = 1 / 0;
        const g = t.slice(1);
        let b;
        this.options.extensions.startInline.forEach((m) => {
          b = m.call({ lexer: this }, g), typeof b == "number" && b >= 0 && (p = Math.min(p, b));
        }), p < 1 / 0 && p >= 0 && (f = t.substring(0, p + 1));
      }
      if (d = this.tokenizer.inlineText(f)) {
        t = t.substring(d.raw.length), d.raw.slice(-1) !== "_" && (a = d.raw.slice(-1)), s = !0;
        const p = n.at(-1);
        (p == null ? void 0 : p.type) === "text" ? (p.raw += d.raw, p.text += d.text) : n.push(d);
        continue;
      }
      if (t) {
        const p = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(p);
          break;
        } else
          throw new Error(p);
      }
    }
    return n;
  }
}
class fo {
  // set by the parser
  constructor(t) {
    be(this, "options");
    be(this, "parser");
    this.options = t || gn;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    var a;
    const i = (a = (n || "").match(et.notSpaceStart)) == null ? void 0 : a[0], s = t.replace(et.endingNewline, "") + `
`;
    return i ? '<pre><code class="language-' + St(i) + '">' + (r ? s : St(s, !0)) + `</code></pre>
` : "<pre><code>" + (r ? s : St(s, !0)) + `</code></pre>
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
    let i = "";
    for (let l = 0; l < t.items.length; l++) {
      const c = t.items[l];
      i += this.listitem(c);
    }
    const s = n ? "ol" : "ul", a = n && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + s + a + `>
` + i + "</" + s + `>
`;
  }
  listitem(t) {
    var r;
    let n = "";
    if (t.task) {
      const i = this.checkbox({ checked: !!t.checked });
      t.loose ? ((r = t.tokens[0]) == null ? void 0 : r.type) === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + St(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: i + " ",
        text: i + " ",
        escaped: !0
      }) : n += i + " ";
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
    for (let s = 0; s < t.header.length; s++)
      r += this.tablecell(t.header[s]);
    n += this.tablerow({ text: r });
    let i = "";
    for (let s = 0; s < t.rows.length; s++) {
      const a = t.rows[s];
      r = "";
      for (let l = 0; l < a.length; l++)
        r += this.tablecell(a[l]);
      i += this.tablerow({ text: r });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + n + `</thead>
` + i + `</table>
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
    return `<code>${St(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    const i = this.parser.parseInline(r), s = Hl(t);
    if (s === null)
      return i;
    t = s;
    let a = '<a href="' + t + '"';
    return n && (a += ' title="' + St(n) + '"'), a += ">" + i + "</a>", a;
  }
  image({ href: t, title: n, text: r }) {
    const i = Hl(t);
    if (i === null)
      return St(r);
    t = i;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${St(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : St(t.text);
  }
}
class Hs {
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
class vt {
  constructor(t) {
    be(this, "options");
    be(this, "renderer");
    be(this, "textRenderer");
    this.options = t || gn, this.options.renderer = this.options.renderer || new fo(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Hs();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new vt(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new vt(n).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, n = !0) {
    var i, s;
    let r = "";
    for (let a = 0; a < t.length; a++) {
      const l = t[a];
      if ((s = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && s[l.type]) {
        const u = l, d = this.options.extensions.renderers[u.type].call({ parser: this }, u);
        if (d !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u.type)) {
          r += d || "";
          continue;
        }
      }
      const c = l;
      switch (c.type) {
        case "space": {
          r += this.renderer.space(c);
          continue;
        }
        case "hr": {
          r += this.renderer.hr(c);
          continue;
        }
        case "heading": {
          r += this.renderer.heading(c);
          continue;
        }
        case "code": {
          r += this.renderer.code(c);
          continue;
        }
        case "table": {
          r += this.renderer.table(c);
          continue;
        }
        case "blockquote": {
          r += this.renderer.blockquote(c);
          continue;
        }
        case "list": {
          r += this.renderer.list(c);
          continue;
        }
        case "html": {
          r += this.renderer.html(c);
          continue;
        }
        case "paragraph": {
          r += this.renderer.paragraph(c);
          continue;
        }
        case "text": {
          let u = c, d = this.renderer.text(u);
          for (; a + 1 < t.length && t[a + 1].type === "text"; )
            u = t[++a], d += `
` + this.renderer.text(u);
          n ? r += this.renderer.paragraph({
            type: "paragraph",
            raw: d,
            text: d,
            tokens: [{ type: "text", raw: d, text: d, escaped: !0 }]
          }) : r += d;
          continue;
        }
        default: {
          const u = 'Token with "' + c.type + '" type was not found.';
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
    var i, s;
    let r = "";
    for (let a = 0; a < t.length; a++) {
      const l = t[a];
      if ((s = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && s[l.type]) {
        const u = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (u !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(l.type)) {
          r += u || "";
          continue;
        }
      }
      const c = l;
      switch (c.type) {
        case "escape": {
          r += n.text(c);
          break;
        }
        case "html": {
          r += n.html(c);
          break;
        }
        case "link": {
          r += n.link(c);
          break;
        }
        case "image": {
          r += n.image(c);
          break;
        }
        case "strong": {
          r += n.strong(c);
          break;
        }
        case "em": {
          r += n.em(c);
          break;
        }
        case "codespan": {
          r += n.codespan(c);
          break;
        }
        case "br": {
          r += n.br(c);
          break;
        }
        case "del": {
          r += n.del(c);
          break;
        }
        case "text": {
          r += n.text(c);
          break;
        }
        default: {
          const u = 'Token with "' + c.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return r;
  }
}
class pr {
  constructor(t) {
    be(this, "options");
    be(this, "block");
    this.options = t || gn;
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
    return this.block ? yt.lex : yt.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? vt.parse : vt.parseInline;
  }
}
be(pr, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class r1 {
  constructor(...t) {
    be(this, "defaults", Fs());
    be(this, "options", this.setOptions);
    be(this, "parse", this.parseMarkdown(!0));
    be(this, "parseInline", this.parseMarkdown(!1));
    be(this, "Parser", vt);
    be(this, "Renderer", fo);
    be(this, "TextRenderer", Hs);
    be(this, "Lexer", yt);
    be(this, "Tokenizer", po);
    be(this, "Hooks", pr);
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, n) {
    var i, s;
    let r = [];
    for (const a of t)
      switch (r = r.concat(n.call(this, a)), a.type) {
        case "table": {
          const l = a;
          for (const c of l.header)
            r = r.concat(this.walkTokens(c.tokens, n));
          for (const c of l.rows)
            for (const u of c)
              r = r.concat(this.walkTokens(u.tokens, n));
          break;
        }
        case "list": {
          const l = a;
          r = r.concat(this.walkTokens(l.items, n));
          break;
        }
        default: {
          const l = a;
          (s = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && s[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((c) => {
            const u = l[c].flat(1 / 0);
            r = r.concat(this.walkTokens(u, n));
          }) : l.tokens && (r = r.concat(this.walkTokens(l.tokens, n)));
        }
      }
    return r;
  }
  use(...t) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((r) => {
      const i = { ...r };
      if (i.async = this.defaults.async || i.async || !1, r.extensions && (r.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          const a = n.renderers[s.name];
          a ? n.renderers[s.name] = function(...l) {
            let c = s.renderer.apply(this, l);
            return c === !1 && (c = a.apply(this, l)), c;
          } : n.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const a = n[s.level];
          a ? a.unshift(s.tokenizer) : n[s.level] = [s.tokenizer], s.start && (s.level === "block" ? n.startBlock ? n.startBlock.push(s.start) : n.startBlock = [s.start] : s.level === "inline" && (n.startInline ? n.startInline.push(s.start) : n.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (n.childTokens[s.name] = s.childTokens);
      }), i.extensions = n), r.renderer) {
        const s = this.defaults.renderer || new fo(this.defaults);
        for (const a in r.renderer) {
          if (!(a in s))
            throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a))
            continue;
          const l = a, c = r.renderer[l], u = s[l];
          s[l] = (...d) => {
            let f = c.apply(s, d);
            return f === !1 && (f = u.apply(s, d)), f || "";
          };
        }
        i.renderer = s;
      }
      if (r.tokenizer) {
        const s = this.defaults.tokenizer || new po(this.defaults);
        for (const a in r.tokenizer) {
          if (!(a in s))
            throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a))
            continue;
          const l = a, c = r.tokenizer[l], u = s[l];
          s[l] = (...d) => {
            let f = c.apply(s, d);
            return f === !1 && (f = u.apply(s, d)), f;
          };
        }
        i.tokenizer = s;
      }
      if (r.hooks) {
        const s = this.defaults.hooks || new pr();
        for (const a in r.hooks) {
          if (!(a in s))
            throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a))
            continue;
          const l = a, c = r.hooks[l], u = s[l];
          pr.passThroughHooks.has(a) ? s[l] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(c.call(s, d)).then((p) => u.call(s, p));
            const f = c.call(s, d);
            return u.call(s, f);
          } : s[l] = (...d) => {
            let f = c.apply(s, d);
            return f === !1 && (f = u.apply(s, d)), f;
          };
        }
        i.hooks = s;
      }
      if (r.walkTokens) {
        const s = this.defaults.walkTokens, a = r.walkTokens;
        i.walkTokens = function(l) {
          let c = [];
          return c.push(a.call(this, l)), s && (c = c.concat(s.call(this, l))), c;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, n) {
    return yt.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return vt.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      const s = { ...i }, a = { ...this.defaults, ...s }, l = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && s.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      a.hooks && (a.hooks.options = a, a.hooks.block = t);
      const c = a.hooks ? a.hooks.provideLexer() : t ? yt.lex : yt.lexInline, u = a.hooks ? a.hooks.provideParser() : t ? vt.parse : vt.parseInline;
      if (a.async)
        return Promise.resolve(a.hooks ? a.hooks.preprocess(r) : r).then((d) => c(d, a)).then((d) => a.hooks ? a.hooks.processAllTokens(d) : d).then((d) => a.walkTokens ? Promise.all(this.walkTokens(d, a.walkTokens)).then(() => d) : d).then((d) => u(d, a)).then((d) => a.hooks ? a.hooks.postprocess(d) : d).catch(l);
      try {
        a.hooks && (r = a.hooks.preprocess(r));
        let d = c(r, a);
        a.hooks && (d = a.hooks.processAllTokens(d)), a.walkTokens && this.walkTokens(d, a.walkTokens);
        let f = u(d, a);
        return a.hooks && (f = a.hooks.postprocess(f)), f;
      } catch (d) {
        return l(d);
      }
    };
  }
  onError(t, n) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const i = "<p>An error occurred:</p><pre>" + St(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(i) : i;
      }
      if (n)
        return Promise.reject(r);
      throw r;
    };
  }
}
const un = new r1();
function Oe(e, t) {
  return un.parse(e, t);
}
Oe.options = Oe.setOptions = function(e) {
  return un.setOptions(e), Oe.defaults = un.defaults, ju(Oe.defaults), Oe;
};
Oe.getDefaults = Fs;
Oe.defaults = gn;
Oe.use = function(...e) {
  return un.use(...e), Oe.defaults = un.defaults, ju(Oe.defaults), Oe;
};
Oe.walkTokens = function(e, t) {
  return un.walkTokens(e, t);
};
Oe.parseInline = un.parseInline;
Oe.Parser = vt;
Oe.parser = vt.parse;
Oe.Renderer = fo;
Oe.TextRenderer = Hs;
Oe.Lexer = yt;
Oe.lexer = yt.lex;
Oe.Tokenizer = po;
Oe.Hooks = pr;
Oe.parse = Oe;
Oe.options;
Oe.setOptions;
Oe.use;
Oe.walkTokens;
Oe.parseInline;
vt.parse;
yt.lex;
const o1 = ({ message: e }) => {
  var p, g;
  const [t, n] = Ht(), [r, i] = Ke(!1), [s, a] = Ke(!1), l = Gr(null), c = Gr(null), u = Hr(() => t.session.chatMessages[t.session.chatMessages.length - 1] === e, [t.session.chatMessages]), d = Mt(async () => {
    if (s && c.current) {
      c.current.pause(), c.current.currentTime = 0, a(!1);
      return;
    }
    i(!0);
    const b = await Gd(t, e).catch((m) => {
      i(!1), n({
        type: "SET_ERROR",
        payload: m.message || "Failed to fetch voice"
      });
    });
    i(!1), b && (c.current = b, b.play(), a(!0), b.onended = () => a(!1));
  }, [t, n, s, e]), f = Mt(() => {
    navigator.clipboard.writeText(e.content || "");
  }, [e.content]);
  return _n(() => {
    var b;
    u && ((b = l.current) == null || b.scrollIntoView({ behavior: "smooth" }));
  }, [t.session.chatMessages]), /* @__PURE__ */ y.jsxs(
    zt,
    {
      variant: "elevation",
      elevation: 0,
      sx: {
        maxWidth: "90%",
        alignSelf: e.role === "api" ? "flex-start" : "flex-end",
        m: 1
      },
      children: [
        e.uploads && e.uploads.length > 0 && /* @__PURE__ */ y.jsx(
          ut,
          {
            direction: "row",
            spacing: 2,
            sx: {
              p: 2,
              overflowX: "auto",
              justifyContent: "start",
              alignItems: "center"
            },
            children: e.uploads.map((b, m) => /* @__PURE__ */ y.jsx(
              Ts,
              {
                label: b.name,
                icon: b.type === "audio" ? /* @__PURE__ */ y.jsx(zs, {}) : b.mime.includes("image") ? /* @__PURE__ */ y.jsx(Ds, {}) : /* @__PURE__ */ y.jsx(xx, {})
              },
              m
            ))
          }
        ),
        /* @__PURE__ */ y.jsx(
          At,
          {
            sx: {
              typography: "body2",
              color: (p = t.config.ui) == null ? void 0 : p.foregroundColor,
              bgcolor: (g = t.config.ui) == null ? void 0 : g.backgroundColor,
              borderRadius: 2,
              p: "2px 16px",
              minHeight: "32px",
              overflow: "auto"
            },
            ref: l,
            children: t.api.typing && u ? /* @__PURE__ */ y.jsx(
              Tu,
              {
                animation: "wave",
                height: 32
              }
            ) : /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx(
              "div",
              {
                dangerouslySetInnerHTML: {
                  __html: Oe(e.content || "")
                }
              }
            ) })
          }
        ),
        /* @__PURE__ */ y.jsxs(At, { sx: { display: "flex", alignItems: "center", mt: 0.5 }, children: [
          /* @__PURE__ */ y.jsx(
            Un,
            {
              variant: "caption",
              color: "textSecondary",
              children: new Date(e.timestamp || "").toLocaleString()
            }
          ),
          e.role === "api" && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
            /* @__PURE__ */ y.jsx(
              zn,
              {
                onClick: d,
                size: "small",
                disabled: r,
                children: r ? /* @__PURE__ */ y.jsx(Zc, { size: 16 }) : s ? /* @__PURE__ */ y.jsx(Nu, { fontSize: "small" }) : /* @__PURE__ */ y.jsx(Tx, { fontSize: "small" })
              }
            ),
            /* @__PURE__ */ y.jsx(
              zn,
              {
                onClick: f,
                size: "small",
                children: /* @__PURE__ */ y.jsx(vx, { fontSize: "small" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}, i1 = Ze.memo(o1), s1 = () => {
  var r, i;
  const [e] = Ht(), { sidebar: t } = ((r = e == null ? void 0 : e.config) == null ? void 0 : r.ui) || {}, n = ((i = e.session) == null ? void 0 : i.chatMessages) || [];
  return /* @__PURE__ */ y.jsxs(
    ut,
    {
      direction: "row",
      spacing: 0,
      divider: /* @__PURE__ */ y.jsx(
        $n,
        {
          orientation: "vertical",
          flexItem: !0
        }
      ),
      sx: {
        flex: 1,
        overflow: "auto",
        maxHeight: "100%",
        maxWidth: "100%"
      },
      children: [
        t && /* @__PURE__ */ y.jsx(Ox, {}),
        /* @__PURE__ */ y.jsxs(
          ut,
          {
            direction: "column",
            spacing: 0,
            divider: /* @__PURE__ */ y.jsx(
              $n,
              {
                orientation: "horizontal",
                flexItem: !0
              }
            ),
            sx: {
              flex: 1,
              overflow: "auto",
              maxHeight: "100%",
              maxWidth: "100%"
            },
            children: [
              /* @__PURE__ */ y.jsx(
                ut,
                {
                  direction: "column",
                  spacing: 0,
                  divider: /* @__PURE__ */ y.jsx(
                    $n,
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
                  children: n.map((s) => /* @__PURE__ */ y.jsx(
                    i1,
                    {
                      message: s
                    },
                    s.id
                  ))
                }
              ),
              /* @__PURE__ */ y.jsx(wx, {})
            ]
          }
        )
      ]
    }
  );
}, Uu = ho(s1), a1 = () => {
  const [e] = Ht(), { backgroundColor: t, foregroundColor: n } = e.config.ui || {};
  return /* @__PURE__ */ y.jsx(
    At,
    {
      component: "footer",
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        bgcolor: t
      },
      children: /* @__PURE__ */ y.jsxs(
        Un,
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
            /* @__PURE__ */ y.jsx(
              pu,
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
}, Wu = ho(a1), l1 = () => /* @__PURE__ */ y.jsxs(
  ut,
  {
    direction: "column",
    spacing: 0,
    divider: /* @__PURE__ */ y.jsx(
      $n,
      {
        orientation: "horizontal",
        flexItem: !0
      }
    ),
    sx: {
      border: 1,
      borderRadius: 2,
      height: "100%",
      width: "100%"
    },
    children: [
      /* @__PURE__ */ y.jsx(Pu, {}),
      /* @__PURE__ */ y.jsx(Uu, {}),
      /* @__PURE__ */ y.jsx(Wu, {})
    ]
  }
), c1 = ho(l1);
var Gs = {}, u1 = hn;
Object.defineProperty(Gs, "__esModule", {
  value: !0
});
var qu = Gs.default = void 0, d1 = u1(mn()), p1 = y, f1 = (0, d1.default)(/* @__PURE__ */ (0, p1.jsx)("path", {
  d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
}), "Chat");
qu = Gs.default = f1;
var Ks = {}, h1 = hn;
Object.defineProperty(Ks, "__esModule", {
  value: !0
});
var Hu = Ks.default = void 0, m1 = h1(mn()), g1 = y, b1 = (0, m1.default)(/* @__PURE__ */ (0, g1.jsx)("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}), "KeyboardArrowDown");
Hu = Ks.default = b1;
const y1 = () => {
  const [e, t] = Ke(!1), [n, r] = Ke(!1), [i] = Ht(), s = Mt(() => t((d) => !d), []), a = Mt(
    () => r((d) => !d),
    []
  ), l = Mt(() => t(!1), []), { backgroundColor: c, foregroundColor: u } = i.config.ui;
  return /* @__PURE__ */ y.jsxs(
    At,
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
        e && /* @__PURE__ */ y.jsxs(
          ut,
          {
            direction: "column",
            spacing: 0,
            divider: /* @__PURE__ */ y.jsx(
              $n,
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
              minWidth: n ? "80vw" : "400px",
              maxWidth: n ? "90vw" : "600px",
              minHeight: n ? "80vh" : "400px",
              maxHeight: n ? "90vh" : "600px"
            },
            children: [
              /* @__PURE__ */ y.jsx(
                Pu,
                {
                  onClose: l,
                  onToggleFullscreen: a,
                  isFullscreen: n
                }
              ),
              /* @__PURE__ */ y.jsx(Uu, {}),
              /* @__PURE__ */ y.jsx(Wu, {})
            ]
          }
        ),
        /* @__PURE__ */ y.jsx(
          tn,
          {
            onClick: s,
            sx: {
              bgcolor: c,
              color: u,
              "&:hover": {
                color: c,
                bgcolor: u
              }
            },
            children: e ? /* @__PURE__ */ y.jsx(Hu, {}) : /* @__PURE__ */ y.jsx(qu, {})
          }
        )
      ]
    }
  );
}, v1 = Ze.memo(y1);
function x1(e) {
  let t = document.querySelector("llminabox"), n = c1;
  t || (t = document.createElement("llminabox"), document.body.appendChild(t), n = v1), or.createRoot(t).render(
    /* @__PURE__ */ y.jsxs(ip, { config: e, children: [
      /* @__PURE__ */ y.jsx(Fc, {}),
      /* @__PURE__ */ y.jsx(n, {})
    ] })
  );
}
x1(wd);
export {
  x1 as default
};
