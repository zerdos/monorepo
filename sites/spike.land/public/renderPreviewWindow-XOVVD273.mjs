import {
  AutoUpdateApp,
  appFactory,
  appRoot,
  hashCode,
  mST,
  onSessionUpdate
} from "./chunk-P2GL4V25.mjs";
import {
  LazyMotion,
  domAnimation,
  domMax,
  m
} from "./chunk-KRZ2QN2I.mjs";
import {
  CacheProvider,
  Global,
  ThemeContext,
  _extends,
  css,
  emotion_cache_browser_esm_default,
  emotion_memoize_browser_esm_default,
  getRegisteredStyles,
  insertStyles,
  jsx,
  keyframes,
  registerStyles,
  serializeStyles,
  withEmotionCache
} from "./chunk-WFFIWF7G.mjs";
import "./chunk-K5MVM6CZ.mjs";
import {
  __commonJS,
  __toESM,
  init_define_process
} from "./chunk-LVJWQ4UB.mjs";

// ../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_define_process();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol2 = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol2 ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol2 ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol2 ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol2 ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol2 ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol2 ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol2 ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol2 ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol2 ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol2 ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol2 ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol2 ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol2 ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol2 ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment10 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense2 = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment3(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment10;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense2;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment3;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_define_process();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// ../../node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order22 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order22.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../../node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    init_define_process();
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// ../../node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "../../node_modules/prop-types/lib/has.js"(exports, module) {
    init_define_process();
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// ../../node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "../../node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    init_define_process();
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values3, location2, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values3, typeSpecName, componentName, location2, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location2 + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location2 + " type: " + error.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// ../../node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "../../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    init_define_process();
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement6, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location2, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location2, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location2, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location2, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location2, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          if (!isValidElement6(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location2, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location2, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location2, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location2, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location2, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location2, propFullName, key, type) {
        return new PropTypeError((componentName || "React class") + ": " + location2 + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location2, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location2, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement6(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../../node_modules/prop-types/index.js"(exports, module) {
    init_define_process();
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// ../../node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_define_process();
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment10 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense2 = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment3(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment10;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense2;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment3;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "../../node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_define_process();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// js/renderPreviewWindow.tsx
init_define_process();
import { useEffect as useEffect29, useState as useState25 } from "/react.mjs";

// js/DraggableWindow.tsx
init_define_process();
import { useEffect as useEffect28, useRef as useRef28, useState as useState24 } from "/react.mjs";

// js/Qr.tsx
init_define_process();
import { lazy, Suspense, useState as useState23 } from "/react.mjs";

// js/mui.tsx
init_define_process();

// ../../node_modules/@mui/material/Fab/Fab.js
init_define_process();

// ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_define_process();
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/@mui/material/Fab/Fab.js
var import_prop_types47 = __toESM(require_prop_types());
import * as React72 from "/react.mjs";

// ../../node_modules/clsx/dist/clsx.m.js
init_define_process();
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// ../../node_modules/@mui/base/index.js
init_define_process();

// ../../node_modules/@mui/base/utils/index.js
init_define_process();

// ../../node_modules/@mui/base/utils/appendOwnerState.js
init_define_process();

// ../../node_modules/@mui/base/utils/isHostComponent.js
init_define_process();
function isHostComponent(element) {
  return typeof element === "string";
}
var isHostComponent_default = isHostComponent;

// ../../node_modules/@mui/base/utils/appendOwnerState.js
function appendOwnerState(elementType, otherProps = {}, ownerState) {
  if (isHostComponent_default(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}

// ../../node_modules/@mui/base/utils/areArraysEqual.js
init_define_process();
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

// ../../node_modules/@mui/base/utils/extractEventHandlers.js
init_define_process();
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// ../../node_modules/@mui/base/utils/resolveComponentProps.js
init_define_process();
function resolveComponentProps(componentProps, ownerState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState);
  }
  return componentProps;
}

// ../../node_modules/@mui/base/utils/useSlotProps.js
init_define_process();

// ../../node_modules/@mui/utils/esm/index.js
init_define_process();

// ../../node_modules/@mui/utils/esm/chainPropTypes.js
init_define_process();
function chainPropTypes(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// ../../node_modules/@mui/utils/esm/deepmerge.js
init_define_process();
function isPlainObject(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// ../../node_modules/@mui/utils/esm/elementAcceptingRef.js
init_define_process();
var import_prop_types = __toESM(require_prop_types());
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location2, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null || typeof window === "undefined") {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location2} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementAcceptingRef = chainPropTypes(import_prop_types.default.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes(import_prop_types.default.element.isRequired, acceptingRef);
var elementAcceptingRef_default = elementAcceptingRef;

// ../../node_modules/@mui/utils/esm/elementTypeAcceptingRef.js
init_define_process();
var import_prop_types2 = __toESM(require_prop_types());
function isClassComponent2(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location2, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null || typeof window === "undefined") {
    return null;
  }
  let warningHint;
  if (typeof propValue === "function" && !isClassComponent2(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location2} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementTypeAcceptingRef_default = chainPropTypes(import_prop_types2.default.elementType, elementTypeAcceptingRef);

// ../../node_modules/@mui/utils/esm/exactProp.js
init_define_process();
var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return _extends({}, propTypes, {
    [specialProperty]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  });
}

// ../../node_modules/@mui/utils/esm/formatMuiErrorMessage.js
init_define_process();

// ../../node_modules/@mui/utils/esm/getDisplayName.js
init_define_process();
var import_react_is = __toESM(require_react_is2());
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn2) {
  const match = `${fn2}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || "";
}
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (typeof Component === "object") {
    switch (Component.$$typeof) {
      case import_react_is.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case import_react_is.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}

// ../../node_modules/@mui/utils/esm/HTMLElementType.js
init_define_process();
function HTMLElementType(props, propName, componentName, location2, propFullName) {
  if (false) {
    return null;
  }
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location2} \`${safePropName}\` supplied to \`${componentName}\`. Expected an HTMLElement.`);
  }
  return null;
}

// ../../node_modules/@mui/utils/esm/ponyfillGlobal.js
init_define_process();
var ponyfillGlobal_default = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();

// ../../node_modules/@mui/utils/esm/refType.js
init_define_process();
var import_prop_types3 = __toESM(require_prop_types());
var refType = import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]);
var refType_default = refType;

// ../../node_modules/@mui/utils/esm/capitalize.js
init_define_process();
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ../../node_modules/@mui/utils/esm/createChainedFunction.js
init_define_process();
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}

// ../../node_modules/@mui/utils/esm/debounce.js
init_define_process();
function debounce(func, wait = 166) {
  let timeout2;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout2);
    timeout2 = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout2);
  };
  return debounced;
}

// ../../node_modules/@mui/utils/esm/deprecatedPropType.js
init_define_process();

// ../../node_modules/@mui/utils/esm/isMuiElement.js
init_define_process();
import * as React from "/react.mjs";

// ../../node_modules/@mui/utils/esm/ownerDocument.js
init_define_process();
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// ../../node_modules/@mui/utils/esm/ownerWindow.js
init_define_process();
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

// ../../node_modules/@mui/utils/esm/requirePropFactory.js
init_define_process();

// ../../node_modules/@mui/utils/esm/setRef.js
init_define_process();
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// ../../node_modules/@mui/utils/esm/useEnhancedEffect.js
init_define_process();
import * as React2 from "/react.mjs";
var useEnhancedEffect = typeof window !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
var useEnhancedEffect_default = useEnhancedEffect;

// ../../node_modules/@mui/utils/esm/useId.js
init_define_process();
import * as React3 from "/react.mjs";
var globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React3.useState(idOverride);
  const id = idOverride || defaultId;
  React3.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
var maybeReactUseId = React3["useId"];
function useId2(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}

// ../../node_modules/@mui/utils/esm/unsupportedProp.js
init_define_process();

// ../../node_modules/@mui/utils/esm/useControlled.js
init_define_process();
import * as React4 from "/react.mjs";
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React4.useRef(controlled !== void 0);
  const [valueState, setValue] = React4.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    React4.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React4.useRef(defaultProp);
    React4.useEffect(() => {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React4.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

// ../../node_modules/@mui/utils/esm/useEventCallback.js
init_define_process();
import * as React5 from "/react.mjs";
function useEventCallback(fn2) {
  const ref = React5.useRef(fn2);
  useEnhancedEffect_default(() => {
    ref.current = fn2;
  });
  return React5.useCallback((...args) => (0, ref.current)(...args), []);
}

// ../../node_modules/@mui/utils/esm/useForkRef.js
init_define_process();
import * as React6 from "/react.mjs";
function useForkRef(refA, refB) {
  return React6.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (refValue) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// ../../node_modules/@mui/utils/esm/useIsFocusVisible.js
init_define_process();
import * as React7 from "/react.mjs";
var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = React7.useCallback((node) => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = React7.useRef(false);
  function handleBlurVisible() {
    if (isFocusVisibleRef.current) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

// ../../node_modules/@mui/utils/esm/getScrollbarSize.js
init_define_process();
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

// ../../node_modules/@mui/utils/esm/scrollLeft.js
init_define_process();

// ../../node_modules/@mui/utils/esm/usePreviousProps.js
init_define_process();
import * as React8 from "/react.mjs";
var usePreviousProps = (value) => {
  const ref = React8.useRef({});
  React8.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
var usePreviousProps_default = usePreviousProps;

// ../../node_modules/@mui/utils/esm/visuallyHidden.js
init_define_process();
var visuallyHidden = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
var visuallyHidden_default = visuallyHidden;

// ../../node_modules/@mui/utils/esm/integerPropType.js
init_define_process();
function getTypeByValue(value) {
  const valueType = typeof value;
  switch (valueType) {
    case "number":
      if (Number.isNaN(value)) {
        return "NaN";
      }
      if (!Number.isFinite(value)) {
        return "Infinity";
      }
      if (value !== Math.floor(value)) {
        return "float";
      }
      return "number";
    case "object":
      if (value === null) {
        return "null";
      }
      return value.constructor.name;
    default:
      return valueType;
  }
}
function ponyfillIsInteger(x) {
  return typeof x === "number" && isFinite(x) && Math.floor(x) === x;
}
var isInteger = Number.isInteger || ponyfillIsInteger;
function requiredInteger(props, propName, componentName, location2) {
  const propValue = props[propName];
  if (propValue == null || !isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location2} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, ...other) {
  const propValue = props[propName];
  if (propValue === void 0) {
    return null;
  }
  return requiredInteger(props, propName, ...other);
}
function validatorNoop() {
  return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
var integerPropType_default = false ? validatorNoop : validator;

// ../../node_modules/@mui/utils/esm/resolveProps.js
init_define_process();
function resolveProps(defaultProps2, props) {
  const output = _extends({}, props);
  Object.keys(defaultProps2).forEach((propName) => {
    if (output[propName] === void 0) {
      output[propName] = defaultProps2[propName];
    }
  });
  return output;
}

// ../../node_modules/@mui/utils/esm/composeClasses/index.js
init_define_process();

// ../../node_modules/@mui/utils/esm/composeClasses/composeClasses.js
init_define_process();
function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach((slot) => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }
        acc.push(getUtilityClass(key));
      }
      return acc;
    }, []).join(" ");
  });
  return output;
}

// ../../node_modules/@mui/utils/esm/generateUtilityClass/index.js
init_define_process();

// ../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
init_define_process();

// ../../node_modules/@mui/utils/esm/ClassNameGenerator/index.js
init_define_process();

// ../../node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
init_define_process();
var defaultGenerator = (componentName) => componentName;
var createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
var ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator_default = ClassNameGenerator;

// ../../node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var globalStateClassesMapping = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}

// ../../node_modules/@mui/utils/esm/generateUtilityClasses/index.js
init_define_process();

// ../../node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
init_define_process();
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}

// ../../node_modules/@mui/base/utils/mergeSlotProps.js
init_define_process();

// ../../node_modules/@mui/base/utils/omitEventHandlers.js
init_define_process();
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// ../../node_modules/@mui/base/utils/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_m_default(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_m_default(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className, internalSlotProps == null ? void 0 : internalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

// ../../node_modules/@mui/base/utils/useSlotProps.js
var _excluded = ["elementType", "externalSlotProps", "ownerState"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded);
  const resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
  const merged = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const props = appendOwnerState(elementType, _extends({}, merged.props, {
    ref: useForkRef(merged.internalRef, useForkRef(resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref))
  }), ownerState);
  return props;
}

// ../../node_modules/@mui/base/utils/types.js
init_define_process();

// ../../node_modules/@mui/base/AutocompleteUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/AutocompleteUnstyled/useAutocomplete.js
init_define_process();
import * as React9 from "/react.mjs";
function stripDiacritics(string) {
  return typeof string.normalize !== "undefined" ? string.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : string;
}
function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = "any",
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;
    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }
    const filteredOptions = options.filter((option) => {
      let candidate = (stringify || getOptionLabel)(option);
      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === "start" ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}
var defaultFilterOptions = createFilterOptions();

// ../../node_modules/@mui/base/BadgeUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/BadgeUnstyled/BadgeUnstyled.js
init_define_process();
var import_prop_types4 = __toESM(require_prop_types());
import * as React10 from "/react.mjs";

// ../../node_modules/@mui/base/composeClasses/index.js
init_define_process();

// ../../node_modules/@mui/base/BadgeUnstyled/useBadge.js
init_define_process();
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = usePreviousProps_default({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max: max2 = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max2 ? `${max2}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max: max2,
    displayValue
  };
}

// ../../node_modules/@mui/base/BadgeUnstyled/badgeUnstyledClasses.js
init_define_process();

// ../../node_modules/@mui/base/generateUtilityClasses/index.js
init_define_process();

// ../../node_modules/@mui/base/generateUtilityClass/index.js
init_define_process();

// ../../node_modules/@mui/base/BadgeUnstyled/badgeUnstyledClasses.js
function getBadgeUnstyledUtilityClass(slot) {
  return generateUtilityClass("BaseBadge", slot);
}
var badgeUnstyledClasses = generateUtilityClasses("BaseBadge", ["root", "badge", "invisible"]);

// ../../node_modules/@mui/base/BadgeUnstyled/BadgeUnstyled.js
import { jsx as _jsx } from "/react.mjs";
import { jsxs as _jsxs } from "/react.mjs";
var _excluded2 = ["badgeContent", "component", "children", "components", "componentsProps", "invisible", "max", "showZero"];
var useUtilityClasses = (ownerState) => {
  const {
    invisible
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", invisible && "invisible"]
  };
  return composeClasses(slots, getBadgeUnstyledUtilityClass, void 0);
};
var BadgeUnstyled = React10.forwardRef(function BadgeUnstyled2(props, ref) {
  const {
    component,
    children: children2,
    components = {},
    componentsProps = {},
    max: maxProp = 99,
    showZero = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const {
    badgeContent,
    max: max2,
    displayValue,
    invisible
  } = useBadge(_extends({}, props, {
    max: maxProp
  }));
  const ownerState = _extends({}, props, {
    badgeContent,
    invisible,
    max: max2,
    showZero
  });
  const classes = useUtilityClasses(ownerState);
  const Root = component || components.Root || "span";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
  const Badge = components.Badge || "span";
  const badgeProps = useSlotProps({
    elementType: Badge,
    externalSlotProps: componentsProps.badge,
    ownerState,
    className: classes.badge
  });
  return _jsxs(Root, _extends({}, rootProps, {
    children: [children2, _jsx(Badge, _extends({}, badgeProps, {
      children: displayValue
    }))]
  }));
});
true ? BadgeUnstyled.propTypes = {
  badgeContent: import_prop_types4.default.node,
  children: import_prop_types4.default.node,
  component: import_prop_types4.default.elementType,
  components: import_prop_types4.default.shape({
    Badge: import_prop_types4.default.elementType,
    Root: import_prop_types4.default.elementType
  }),
  componentsProps: import_prop_types4.default.shape({
    badge: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object]),
    root: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object])
  }),
  invisible: import_prop_types4.default.bool,
  max: import_prop_types4.default.number,
  showZero: import_prop_types4.default.bool
} : void 0;

// ../../node_modules/@mui/base/BadgeUnstyled/BadgeUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/ButtonUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/ButtonUnstyled/ButtonUnstyled.js
init_define_process();
var import_prop_types5 = __toESM(require_prop_types());
import * as React12 from "/react.mjs";

// ../../node_modules/@mui/base/ButtonUnstyled/buttonUnstyledClasses.js
init_define_process();
function getButtonUnstyledUtilityClass(slot) {
  return generateUtilityClass("ButtonUnstyled", slot);
}
var buttonUnstyledClasses = generateUtilityClasses("ButtonUnstyled", ["root", "active", "disabled", "focusVisible"]);

// ../../node_modules/@mui/base/ButtonUnstyled/useButton.js
init_define_process();
import * as React11 from "/react.mjs";
function useButton(parameters) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    ref,
    tabIndex,
    to,
    type
  } = parameters;
  const buttonRef = React11.useRef();
  const [active, setActive] = React11.useState(false);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React11.useState(false);
  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }
  React11.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const [hostElementName, setHostElementName] = React11.useState("");
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    if (focusVisible) {
      event.preventDefault();
    }
    (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
  };
  const createHandleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu2;
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      var _otherHandlers$onFocu;
      setFocusVisible(true);
      (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    }
    (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu2.call(otherHandlers, event);
  };
  const isNativeButton = () => {
    const button = buttonRef.current;
    return hostElementName === "BUTTON" || hostElementName === "INPUT" && ["button", "submit", "reset"].includes(button == null ? void 0 : button.type) || hostElementName === "A" && (button == null ? void 0 : button.href);
  };
  const createHandleClick = (otherHandlers) => (event) => {
    if (!disabled) {
      var _otherHandlers$onClic;
      (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    }
  };
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    if (event.target === event.currentTarget && !disabled) {
      setActive(true);
    }
    (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
  };
  const createHandleMouseUp = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;
    if (event.target === event.currentTarget) {
      setActive(false);
    }
    (_otherHandlers$onMous3 = otherHandlers.onMouseUp) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (event.target === event.currentTarget && event.key === " " && !disabled) {
      setActive(true);
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === "Enter" && !disabled) {
      var _otherHandlers$onClic2;
      (_otherHandlers$onClic2 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic2.call(otherHandlers, event);
      event.preventDefault();
    }
  };
  const createHandleKeyUp = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyU;
    if (event.target === event.currentTarget) {
      setActive(false);
    }
    (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event);
    if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === " " && !event.defaultPrevented) {
      var _otherHandlers$onClic3;
      (_otherHandlers$onClic3 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic3.call(otherHandlers, event);
    }
  };
  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(ref, handleOwnRef);
  const updateRef = (instance) => {
    var _instance$tagName;
    setHostElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : "");
    setRef(handleRef, instance);
  };
  const buttonProps = {};
  if (hostElementName === "BUTTON") {
    buttonProps.type = type != null ? type : "button";
    if (focusableWhenDisabled) {
      buttonProps["aria-disabled"] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (hostElementName !== "") {
    if (!href && !to) {
      buttonProps.role = "button";
      buttonProps.tabIndex = tabIndex != null ? tabIndex : 0;
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled ? tabIndex != null ? tabIndex : 0 : -1;
    }
  }
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    delete externalEventHandlers.onFocusVisible;
    return _extends({
      type
    }, externalEventHandlers, buttonProps, {
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      onMouseUp: createHandleMouseUp(externalEventHandlers),
      ref: updateRef
    });
  };
  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    disabled,
    active
  };
}

// ../../node_modules/@mui/base/ButtonUnstyled/ButtonUnstyled.js
import { jsx as _jsx2 } from "/react.mjs";
var _excluded3 = ["action", "children", "component", "components", "componentsProps", "disabled", "focusableWhenDisabled", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseLeave"];
var useUtilityClasses2 = (ownerState) => {
  const {
    active,
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active"]
  };
  return composeClasses(slots, getButtonUnstyledUtilityClass, {});
};
var ButtonUnstyled = React12.forwardRef(function ButtonUnstyled2(props, forwardedRef) {
  var _ref;
  const {
    action,
    children: children2,
    component,
    components = {},
    componentsProps = {},
    focusableWhenDisabled = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const buttonRef = React12.useRef();
  const {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    focusableWhenDisabled
  }));
  React12.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    active,
    focusableWhenDisabled,
    focusVisible
  });
  const classes = useUtilityClasses2(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : "button";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: componentsProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return _jsx2(Root, _extends({}, rootProps, {
    children: children2
  }));
});
true ? ButtonUnstyled.propTypes = {
  action: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.shape({
    current: import_prop_types5.default.shape({
      focusVisible: import_prop_types5.default.func.isRequired
    })
  })]),
  children: import_prop_types5.default.node,
  component: import_prop_types5.default.elementType,
  components: import_prop_types5.default.shape({
    Root: import_prop_types5.default.elementType
  }),
  componentsProps: import_prop_types5.default.shape({
    root: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object])
  }),
  disabled: import_prop_types5.default.bool,
  focusableWhenDisabled: import_prop_types5.default.bool,
  onFocusVisible: import_prop_types5.default.func
} : void 0;

// ../../node_modules/@mui/base/ButtonUnstyled/ButtonUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/ButtonUnstyled/useButton.types.js
init_define_process();

// ../../node_modules/@mui/base/ClickAwayListener/index.js
init_define_process();

// ../../node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
init_define_process();
var import_prop_types6 = __toESM(require_prop_types());
import * as React13 from "/react.mjs";
import { jsx as _jsx3 } from "/react.mjs";
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children: children2,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = React13.useRef(false);
  const nodeRef = React13.useRef(null);
  const activatedRef = React13.useRef(false);
  const syntheticEventRef = React13.useRef(false);
  React13.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(children2.ref, nodeRef);
  const handleClickAway = useEventCallback((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children2.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React13.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React13.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return _jsx3(React13.Fragment, {
    children: React13.cloneElement(children2, childrenProps)
  });
}
true ? ClickAwayListener.propTypes = {
  children: elementAcceptingRef_default.isRequired,
  disableReactTree: import_prop_types6.default.bool,
  mouseEvent: import_prop_types6.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
  onClickAway: import_prop_types6.default.func.isRequired,
  touchEvent: import_prop_types6.default.oneOf(["onTouchEnd", "onTouchStart", false])
} : void 0;
if (true) {
  ClickAwayListener["propTypes"] = exactProp(ClickAwayListener.propTypes);
}

// ../../node_modules/@mui/base/FormControlUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyled.js
init_define_process();
var import_prop_types7 = __toESM(require_prop_types());
import * as React15 from "/react.mjs";

// ../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyledContext.js
init_define_process();
import * as React14 from "/react.mjs";
var FormControlUnstyledContext = React14.createContext(void 0);
if (true) {
  FormControlUnstyledContext.displayName = "FormControlUnstyledContext";
}
var FormControlUnstyledContext_default = FormControlUnstyledContext;

// ../../node_modules/@mui/base/FormControlUnstyled/formControlUnstyledClasses.js
init_define_process();
function getFormControlUnstyledUtilityClass(slot) {
  return generateUtilityClass("BaseFormControl", slot);
}
var formControlUnstyledClasses = generateUtilityClasses("BaseFormControl", ["root", "disabled", "error", "filled", "focused", "required"]);

// ../../node_modules/@mui/base/FormControlUnstyled/FormControlUnstyled.js
import { jsx as _jsx4 } from "/react.mjs";
var _excluded4 = ["defaultValue", "children", "component", "components", "componentsProps", "disabled", "error", "onChange", "required", "value"];
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== "";
}
function useUtilityClasses3(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focused && "focused", error && "error", filled && "filled", required && "required"]
  };
  return composeClasses(slots, getFormControlUnstyledUtilityClass, {});
}
var FormControlUnstyled = React15.forwardRef(function FormControlUnstyled2(props, ref) {
  var _ref;
  const {
    defaultValue,
    children: children2,
    component,
    components = {},
    componentsProps = {},
    disabled = false,
    error = false,
    onChange,
    required = false,
    value: incomingValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const [value, setValue] = useControlled({
    controlled: incomingValue,
    default: defaultValue,
    name: "FormControl",
    state: "value"
  });
  const filled = hasValue(value);
  const [focused, setFocused] = React15.useState(false);
  if (disabled && focused) {
    setFocused(false);
  }
  const ownerState = _extends({}, props, {
    disabled,
    error,
    filled,
    focused,
    required
  });
  const handleChange = (event) => {
    setValue(event.target.value);
    onChange == null ? void 0 : onChange(event);
  };
  const childContext = {
    disabled,
    error,
    filled,
    focused,
    onBlur: () => {
      setFocused(false);
    },
    onChange: handleChange,
    onFocus: () => {
      setFocused(true);
    },
    required,
    value: value != null ? value : ""
  };
  const classes = useUtilityClasses3(ownerState);
  const renderChildren = () => {
    if (typeof children2 === "function") {
      return children2(childContext);
    }
    return children2;
  };
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref,
      children: renderChildren()
    },
    ownerState,
    className: classes.root
  });
  return _jsx4(FormControlUnstyledContext_default.Provider, {
    value: childContext,
    children: _jsx4(Root, _extends({}, rootProps))
  });
});
true ? FormControlUnstyled.propTypes = {
  children: import_prop_types7.default.oneOfType([import_prop_types7.default.node, import_prop_types7.default.func]),
  component: import_prop_types7.default.elementType,
  components: import_prop_types7.default.shape({
    Root: import_prop_types7.default.elementType
  }),
  componentsProps: import_prop_types7.default.shape({
    root: import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object])
  }),
  defaultValue: import_prop_types7.default.any,
  disabled: import_prop_types7.default.bool,
  error: import_prop_types7.default.bool,
  onChange: import_prop_types7.default.func,
  required: import_prop_types7.default.bool,
  value: import_prop_types7.default.any
} : void 0;

// ../../node_modules/@mui/base/FormControlUnstyled/useFormControlUnstyledContext.js
init_define_process();
import * as React16 from "/react.mjs";
function useFormControlUnstyledContext() {
  return React16.useContext(FormControlUnstyledContext_default);
}

// ../../node_modules/@mui/base/InputUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/InputUnstyled/InputUnstyled.js
init_define_process();
var import_prop_types8 = __toESM(require_prop_types());
import * as React18 from "/react.mjs";

// ../../node_modules/@mui/base/InputUnstyled/inputUnstyledClasses.js
init_define_process();
var inputBaseClasses = generateUtilityClasses("MuiInput", ["root", "formControl", "focused", "disabled", "error", "multiline", "input", "inputMultiline", "inputTypeSearch", "adornedStart", "adornedEnd"]);
var inputUnstyledClasses_default = inputBaseClasses;

// ../../node_modules/@mui/base/InputUnstyled/useInput.js
init_define_process();
import * as React17 from "/react.mjs";
function useInput(parameters) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp
  } = parameters;
  const formControlContext = useFormControlUnstyledContext();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;
  if (formControlContext) {
    var _formControlContext$d, _formControlContext$e, _formControlContext$r;
    defaultValue = void 0;
    disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
    error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
    required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
    value = formControlContext.value;
    if (true) {
      const definedLocalProps = ["defaultValue", "disabled", "error", "required", "value"].filter((prop) => parameters[prop] !== void 0);
      if (definedLocalProps.length > 0) {
        console.warn(["MUI: You have set props on an input that is inside a FormControlUnstyled.", "Set these props on a FormControlUnstyled instead. Otherwise they will be ignored.", `Ignored props: ${definedLocalProps.join(", ")}`].join("\n"));
      }
    }
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }
  const {
    current: isControlled
  } = React17.useRef(value != null);
  const handleInputRefWarning = React17.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `components.Input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React17.useRef(null);
  const handleInputRef = useForkRef(inputRef, handleInputRefWarning);
  const [focused, setFocused] = React17.useState(false);
  React17.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false);
      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);
  const handleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null ? void 0 : (_formControlContext$o = formControlContext.onFocus) == null ? void 0 : _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };
  const handleBlur2 = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };
  const handleChange = (otherHandlers) => (event, ...args) => {
    var _formControlContext$o2, _otherHandlers$onChan;
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`components.Input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
      }
    }
    formControlContext == null ? void 0 : (_formControlContext$o2 = formControlContext.onChange) == null ? void 0 : _formControlContext$o2.call(formControlContext, event);
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event, ...args);
  };
  const handleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters, ["onBlur", "onChange", "onFocus"]);
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    return _extends({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    const mergedEventHandlers = _extends({}, externalProps, externalEventHandlers, {
      onBlur: handleBlur2(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });
    return _extends({}, mergedEventHandlers, {
      "aria-invalid": error || void 0,
      defaultValue,
      ref: handleInputRef,
      value,
      required,
      disabled
    });
  };
  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    required,
    value
  };
}

// ../../node_modules/@mui/base/InputUnstyled/InputUnstyled.js
import { jsx as _jsx5 } from "/react.mjs";
import { jsxs as _jsxs2 } from "/react.mjs";
var _excluded5 = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "component", "components", "componentsProps", "defaultValue", "disabled", "endAdornment", "error", "id", "maxRows", "minRows", "multiline", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "rows", "type", "startAdornment", "value"];
var _excluded22 = ["ownerState"];
var InputUnstyled = React18.forwardRef(function InputUnstyled2(props, forwardedRef) {
  var _ref, _components$Input;
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    maxRows,
    minRows,
    multiline = false,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    rows,
    type = "text",
    startAdornment,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState
  } = useInput({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value
  });
  const ownerState = _extends({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type
  });
  const rootStateClasses = {
    [inputUnstyledClasses_default.disabled]: disabledState,
    [inputUnstyledClasses_default.error]: errorState,
    [inputUnstyledClasses_default.focused]: focused,
    [inputUnstyledClasses_default.formControl]: Boolean(formControlContext),
    [inputUnstyledClasses_default.multiline]: multiline,
    [inputUnstyledClasses_default.adornedStart]: Boolean(startAdornment),
    [inputUnstyledClasses_default.adornedEnd]: Boolean(endAdornment)
  };
  const inputStateClasses = {
    [inputUnstyledClasses_default.disabled]: disabledState,
    [inputUnstyledClasses_default.multiline]: multiline
  };
  const propsToForward = {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [inputUnstyledClasses_default.root, rootStateClasses, className]
  });
  let Input = (_components$Input = components.Input) != null ? _components$Input : "input";
  let inputProps = useSlotProps({
    elementType: Input,
    getSlotProps: (otherHandlers) => getInputProps(_extends({}, otherHandlers, propsToForward)),
    externalSlotProps: componentsProps.input,
    ownerState,
    className: [inputUnstyledClasses_default.input, inputStateClasses]
  });
  if (multiline) {
    var _components$Textarea, _components$Textarea2;
    const hasHostTextarea = isHostComponent_default((_components$Textarea = components.Textarea) != null ? _components$Textarea : "textarea");
    const inputPropsWithoutOwnerState = _objectWithoutPropertiesLoose(inputProps, _excluded22);
    if (rows) {
      if (true) {
        if (minRows || maxRows) {
          console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.");
        }
      }
    }
    inputProps = _extends({}, !hasHostTextarea && {
      minRows: rows || minRows,
      maxRows: rows || maxRows
    }, hasHostTextarea ? inputPropsWithoutOwnerState : inputProps, {
      type: void 0
    });
    Input = (_components$Textarea2 = components.Textarea) != null ? _components$Textarea2 : "textarea";
  }
  return _jsxs2(Root, _extends({}, rootProps, {
    children: [startAdornment, _jsx5(Input, _extends({}, inputProps)), endAdornment]
  }));
});
true ? InputUnstyled.propTypes = {
  "aria-describedby": import_prop_types8.default.string,
  "aria-label": import_prop_types8.default.string,
  "aria-labelledby": import_prop_types8.default.string,
  autoComplete: import_prop_types8.default.string,
  autoFocus: import_prop_types8.default.bool,
  children: import_prop_types8.default.node,
  className: import_prop_types8.default.string,
  component: import_prop_types8.default.elementType,
  components: import_prop_types8.default.shape({
    Input: import_prop_types8.default.elementType,
    Root: import_prop_types8.default.elementType,
    Textarea: import_prop_types8.default.elementType
  }),
  componentsProps: import_prop_types8.default.shape({
    input: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object]),
    root: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object])
  }),
  defaultValue: import_prop_types8.default.any,
  disabled: import_prop_types8.default.bool,
  endAdornment: import_prop_types8.default.node,
  error: import_prop_types8.default.bool,
  id: import_prop_types8.default.string,
  maxRows: import_prop_types8.default.number,
  minRows: import_prop_types8.default.number,
  multiline: import_prop_types8.default.bool,
  name: import_prop_types8.default.string,
  onBlur: import_prop_types8.default.func,
  onChange: import_prop_types8.default.func,
  onClick: import_prop_types8.default.func,
  onFocus: import_prop_types8.default.func,
  onKeyDown: import_prop_types8.default.func,
  onKeyUp: import_prop_types8.default.func,
  placeholder: import_prop_types8.default.string,
  readOnly: import_prop_types8.default.bool,
  required: import_prop_types8.default.bool,
  rows: import_prop_types8.default.number,
  startAdornment: import_prop_types8.default.node,
  type: import_prop_types8.default.oneOf(["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"]),
  value: import_prop_types8.default.any
} : void 0;

// ../../node_modules/@mui/base/InputUnstyled/InputUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/InputUnstyled/useInput.types.js
init_define_process();

// ../../node_modules/@mui/base/ListboxUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/ListboxUnstyled/useListbox.js
init_define_process();
import * as React20 from "/react.mjs";

// ../../node_modules/@mui/base/ListboxUnstyled/useListbox.types.js
init_define_process();
var ActionTypes;
(function(ActionTypes2) {
  ActionTypes2["blur"] = "blur";
  ActionTypes2["focus"] = "focus";
  ActionTypes2["keyDown"] = "keyDown";
  ActionTypes2["optionClick"] = "optionClick";
  ActionTypes2["optionHover"] = "optionHover";
  ActionTypes2["optionsChange"] = "optionsChange";
  ActionTypes2["setValue"] = "setValue";
  ActionTypes2["setHighlight"] = "setHighlight";
  ActionTypes2["textNavigation"] = "textNagivation";
})(ActionTypes || (ActionTypes = {}));

// ../../node_modules/@mui/base/ListboxUnstyled/defaultListboxReducer.js
init_define_process();
var pageSize = 5;
function findValidOptionToHighlight(index, lookupDirection, options, focusDisabled, isOptionDisabled, wrapAround) {
  if (options.length === 0 || options.every((o, i) => isOptionDisabled(o, i))) {
    return -1;
  }
  let nextFocus = index;
  for (; ; ) {
    if (!wrapAround && lookupDirection === "next" && nextFocus === options.length || !wrapAround && lookupDirection === "previous" && nextFocus === -1) {
      return -1;
    }
    const nextFocusDisabled = focusDisabled ? false : isOptionDisabled(options[nextFocus], nextFocus);
    if (nextFocusDisabled) {
      nextFocus += lookupDirection === "next" ? 1 : -1;
      if (wrapAround) {
        nextFocus = (nextFocus + options.length) % options.length;
      }
    } else {
      return nextFocus;
    }
  }
}
function getNewHighlightedOption(options, previouslyHighlightedOption, diff, lookupDirection, highlightDisabled, isOptionDisabled, wrapAround, optionComparer) {
  var _options$nextIndex;
  const maxIndex = options.length - 1;
  const defaultHighlightedIndex = -1;
  let nextIndexCandidate;
  const previouslyHighlightedIndex = previouslyHighlightedOption == null ? -1 : options.findIndex((option) => optionComparer(option, previouslyHighlightedOption));
  if (diff === "reset") {
    var _options$defaultHighl;
    return defaultHighlightedIndex === -1 ? null : (_options$defaultHighl = options[defaultHighlightedIndex]) != null ? _options$defaultHighl : null;
  }
  if (diff === "start") {
    nextIndexCandidate = 0;
  } else if (diff === "end") {
    nextIndexCandidate = maxIndex;
  } else {
    const newIndex = previouslyHighlightedIndex + diff;
    if (newIndex < 0) {
      if (!wrapAround && previouslyHighlightedIndex !== -1 || Math.abs(diff) > 1) {
        nextIndexCandidate = 0;
      } else {
        nextIndexCandidate = maxIndex;
      }
    } else if (newIndex > maxIndex) {
      if (!wrapAround || Math.abs(diff) > 1) {
        nextIndexCandidate = maxIndex;
      } else {
        nextIndexCandidate = 0;
      }
    } else {
      nextIndexCandidate = newIndex;
    }
  }
  const nextIndex = findValidOptionToHighlight(nextIndexCandidate, lookupDirection, options, highlightDisabled, isOptionDisabled, wrapAround);
  return (_options$nextIndex = options[nextIndex]) != null ? _options$nextIndex : null;
}
function handleOptionSelection(option, state, props) {
  const {
    multiple,
    optionComparer = (o, v) => o === v,
    isOptionDisabled = () => false
  } = props;
  const {
    selectedValue
  } = state;
  const optionIndex = props.options.indexOf(option);
  if (isOptionDisabled(option, optionIndex)) {
    return state;
  }
  if (multiple) {
    var _ref, _ref2;
    const selectedValues = (_ref = selectedValue) != null ? _ref : [];
    const newSelectedValues = selectedValues.some((sv) => optionComparer(sv, option)) ? selectedValue.filter((v) => !optionComparer(v, option)) : [...(_ref2 = selectedValue) != null ? _ref2 : [], option];
    return {
      selectedValue: newSelectedValues,
      highlightedValue: option
    };
  }
  if (selectedValue != null && optionComparer(option, selectedValue)) {
    return state;
  }
  return {
    selectedValue: option,
    highlightedValue: option
  };
}
function handleKeyDown2(event, state, props) {
  const {
    options,
    isOptionDisabled,
    disableListWrap,
    disabledItemsFocusable,
    optionComparer
  } = props;
  const moveHighlight = (diff, direction, wrapAround) => {
    return getNewHighlightedOption(options, state.highlightedValue, diff, direction, disabledItemsFocusable != null ? disabledItemsFocusable : false, isOptionDisabled != null ? isOptionDisabled : () => false, wrapAround, optionComparer);
  };
  switch (event.key) {
    case "Home":
      return _extends({}, state, {
        highlightedValue: moveHighlight("start", "next", false)
      });
    case "End":
      return _extends({}, state, {
        highlightedValue: moveHighlight("end", "previous", false)
      });
    case "PageUp":
      return _extends({}, state, {
        highlightedValue: moveHighlight(-pageSize, "previous", false)
      });
    case "PageDown":
      return _extends({}, state, {
        highlightedValue: moveHighlight(pageSize, "next", false)
      });
    case "ArrowUp":
      return _extends({}, state, {
        highlightedValue: moveHighlight(-1, "previous", !(disableListWrap != null ? disableListWrap : false))
      });
    case "ArrowDown":
      return _extends({}, state, {
        highlightedValue: moveHighlight(1, "next", !(disableListWrap != null ? disableListWrap : false))
      });
    case "Enter":
    case " ":
      if (state.highlightedValue === null) {
        return state;
      }
      return handleOptionSelection(state.highlightedValue, state, props);
    default:
      break;
  }
  return state;
}
function handleBlur(state) {
  return _extends({}, state, {
    highlightedValue: null
  });
}
var textCriteriaMatches = (nextFocus, searchString, stringifyOption) => {
  var _stringifyOption;
  const text = (_stringifyOption = stringifyOption(nextFocus)) == null ? void 0 : _stringifyOption.trim().toLowerCase();
  if (!text || text.length === 0) {
    return false;
  }
  return text.indexOf(searchString) === 0;
};
function handleTextNavigation(state, searchString, props) {
  const {
    options,
    isOptionDisabled,
    disableListWrap,
    disabledItemsFocusable,
    optionComparer,
    optionStringifier
  } = props;
  const moveHighlight = (previouslyHighlightedOption) => {
    return getNewHighlightedOption(options, previouslyHighlightedOption, 1, "next", disabledItemsFocusable != null ? disabledItemsFocusable : false, isOptionDisabled != null ? isOptionDisabled : () => false, !(disableListWrap != null ? disableListWrap : false), optionComparer);
  };
  const startWithCurrentOption = searchString.length > 1;
  let nextOption = startWithCurrentOption ? state.highlightedValue : moveHighlight(state.highlightedValue);
  for (let index = 0; index < options.length; index += 1) {
    if (!nextOption || !startWithCurrentOption && state.highlightedValue === nextOption) {
      return state;
    }
    if (textCriteriaMatches(nextOption, searchString, optionStringifier) && (!isOptionDisabled(nextOption, options.indexOf(nextOption)) || disabledItemsFocusable)) {
      return _extends({}, state, {
        highlightedValue: nextOption
      });
    }
    nextOption = moveHighlight(nextOption);
  }
  return state;
}
function handleOptionsChange(options, previousOptions, state, props) {
  var _options$find, _options$find2;
  const {
    multiple,
    optionComparer
  } = props;
  const newHighlightedOption = state.highlightedValue == null ? null : (_options$find = options.find((option) => optionComparer(option, state.highlightedValue))) != null ? _options$find : null;
  if (multiple) {
    var _ref3;
    const selectedValues = (_ref3 = state.selectedValue) != null ? _ref3 : [];
    const newSelectedValues = selectedValues.filter((selectedValue) => options.some((option) => optionComparer(option, selectedValue)));
    return {
      highlightedValue: newHighlightedOption,
      selectedValue: newSelectedValues
    };
  }
  const newSelectedValue = (_options$find2 = options.find((option) => optionComparer(option, state.selectedValue))) != null ? _options$find2 : null;
  return {
    highlightedValue: newHighlightedOption,
    selectedValue: newSelectedValue
  };
}
function defaultListboxReducer(state, action) {
  const {
    type
  } = action;
  switch (type) {
    case ActionTypes.keyDown:
      return handleKeyDown2(action.event, state, action.props);
    case ActionTypes.optionClick:
      return handleOptionSelection(action.option, state, action.props);
    case ActionTypes.blur:
      return handleBlur(state);
    case ActionTypes.setValue:
      return _extends({}, state, {
        selectedValue: action.value
      });
    case ActionTypes.setHighlight:
      return _extends({}, state, {
        highlightedValue: action.highlight
      });
    case ActionTypes.textNavigation:
      return handleTextNavigation(state, action.searchString, action.props);
    case ActionTypes.optionsChange:
      return handleOptionsChange(action.options, action.previousOptions, state, action.props);
    default:
      return state;
  }
}

// ../../node_modules/@mui/base/ListboxUnstyled/useControllableReducer.js
init_define_process();
import * as React19 from "/react.mjs";
function useReducerReturnValueHandler(state, value, options, optionComparer, setValueState, onValueChange, onHighlightChange) {
  const valueRef = React19.useRef(value);
  valueRef.current = value;
  const onValueChangeRef = React19.useRef(onValueChange);
  React19.useEffect(() => {
    onValueChangeRef.current = onValueChange;
  }, [onValueChange]);
  const onHighlightChangeRef = React19.useRef(onHighlightChange);
  React19.useEffect(() => {
    onHighlightChangeRef.current = onHighlightChange;
  }, [onHighlightChange]);
  React19.useEffect(() => {
    if (Array.isArray(state.selectedValue)) {
      if (areArraysEqual(state.selectedValue, valueRef.current)) {
        return;
      }
    } else if (state.selectedValue == null && valueRef.current == null || state.selectedValue != null && valueRef.current != null && optionComparer.current(state.selectedValue, valueRef.current)) {
      return;
    }
    setValueState(state.selectedValue);
    if (state.selectedValue != null) {
      var _onValueChangeRef$cur;
      (_onValueChangeRef$cur = onValueChangeRef.current) == null ? void 0 : _onValueChangeRef$cur.call(onValueChangeRef, state.selectedValue);
    }
  }, [state.selectedValue, setValueState, optionComparer]);
  React19.useEffect(() => {
    var _onHighlightChangeRef;
    (_onHighlightChangeRef = onHighlightChangeRef.current) == null ? void 0 : _onHighlightChangeRef.call(onHighlightChangeRef, state.highlightedValue);
  }, [state.highlightedValue]);
}
function useControllableReducer(internalReducer, externalReducer, props) {
  const {
    value: controlledValue,
    defaultValue,
    onChange: onValueChange,
    onHighlightChange,
    options,
    optionComparer
  } = props;
  const propsRef = React19.useRef(props);
  propsRef.current = props;
  const [value, setValueState] = useControlled({
    controlled: controlledValue,
    default: defaultValue,
    name: "useListbox"
  });
  const previousValueRef = React19.useRef(null);
  const [state, dispatch] = React19.useReducer(externalReducer != null ? externalReducer : internalReducer, {
    highlightedValue: null,
    selectedValue: value
  });
  const optionComparerRef = React19.useRef(optionComparer);
  optionComparerRef.current = optionComparer;
  React19.useEffect(() => {
    if (controlledValue === void 0) {
      return;
    }
    if (Array.isArray(controlledValue) && Array.isArray(previousValueRef.current) && areArraysEqual(previousValueRef.current, controlledValue, optionComparerRef.current)) {
      return;
    }
    if (!Array.isArray(controlledValue) && controlledValue != null && previousValueRef.current != null && optionComparerRef.current(controlledValue, previousValueRef.current)) {
      return;
    }
    previousValueRef.current = controlledValue;
    dispatch({
      type: ActionTypes.setValue,
      value: controlledValue
    });
  }, [controlledValue]);
  useReducerReturnValueHandler(state, value, options, optionComparerRef, setValueState, onValueChange, onHighlightChange);
  return [state, dispatch];
}

// ../../node_modules/@mui/base/ListboxUnstyled/useListbox.js
var TEXT_NAVIGATION_RESET_TIMEOUT = 500;
var defaultOptionComparer = (optionA, optionB) => optionA === optionB;
var defaultIsOptionDisabled = () => false;
var defaultOptionStringifier = (option) => typeof option === "string" ? option : String(option);
function useListbox(props) {
  var _props$optionIdGenera, _options$highlightedI;
  const {
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = "activeDescendant",
    id: idProp,
    isOptionDisabled = defaultIsOptionDisabled,
    listboxRef: externalListboxRef,
    multiple = false,
    optionComparer = defaultOptionComparer,
    optionStringifier = defaultOptionStringifier,
    options,
    stateReducer: externalReducer
  } = props;
  const id = useId2(idProp);
  function defaultIdGenerator(_2, index) {
    return `${id}-option-${index}`;
  }
  const optionIdGenerator = (_props$optionIdGenera = props.optionIdGenerator) != null ? _props$optionIdGenera : defaultIdGenerator;
  const propsWithDefaults = _extends({}, props, {
    disabledItemsFocusable,
    disableListWrap,
    focusManagement,
    isOptionDisabled,
    multiple,
    optionComparer,
    optionStringifier
  });
  const listboxRef = React20.useRef(null);
  const handleRef = useForkRef(externalListboxRef, listboxRef);
  const textCriteriaRef = React20.useRef({
    searchString: "",
    lastTime: null
  });
  const [{
    highlightedValue,
    selectedValue
  }, dispatch] = useControllableReducer(defaultListboxReducer, externalReducer, propsWithDefaults);
  const highlightedIndex = React20.useMemo(() => {
    return highlightedValue == null ? -1 : options.findIndex((option) => optionComparer(option, highlightedValue));
  }, [highlightedValue, options, optionComparer]);
  const previousOptions = React20.useRef([]);
  React20.useEffect(() => {
    if (areArraysEqual(previousOptions.current, options, optionComparer)) {
      return;
    }
    dispatch({
      type: ActionTypes.optionsChange,
      options,
      previousOptions: previousOptions.current,
      props: propsWithDefaults
    });
    previousOptions.current = options;
  }, [options, optionComparer, dispatch]);
  const setSelectedValue = React20.useCallback((option) => {
    dispatch({
      type: ActionTypes.setValue,
      value: option
    });
  }, [dispatch]);
  const setHighlightedValue = React20.useCallback((option) => {
    dispatch({
      type: ActionTypes.setHighlight,
      highlight: option
    });
  }, [dispatch]);
  const createHandleOptionClick = (option, other) => (event) => {
    var _other$onClick;
    (_other$onClick = other.onClick) == null ? void 0 : _other$onClick.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    dispatch({
      type: ActionTypes.optionClick,
      option,
      event,
      props: propsWithDefaults
    });
  };
  const createHandleOptionMouseOver = (option, other) => (event) => {
    var _other$onMouseOver;
    (_other$onMouseOver = other.onMouseOver) == null ? void 0 : _other$onMouseOver.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    dispatch({
      type: ActionTypes.optionHover,
      option,
      event,
      props: propsWithDefaults
    });
  };
  const createHandleKeyDown = (other) => (event) => {
    var _other$onKeyDown;
    (_other$onKeyDown = other.onKeyDown) == null ? void 0 : _other$onKeyDown.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    const keysToPreventDefault = ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"];
    if (focusManagement === "activeDescendant") {
      keysToPreventDefault.push(" ", "Enter");
    }
    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }
    dispatch({
      type: ActionTypes.keyDown,
      event,
      props: propsWithDefaults
    });
    if (event.key.length === 1) {
      const textCriteria = textCriteriaRef.current;
      const lowerKey = event.key.toLowerCase();
      const currentTime = performance.now();
      if (textCriteria.searchString.length > 0 && textCriteria.lastTime && currentTime - textCriteria.lastTime > TEXT_NAVIGATION_RESET_TIMEOUT) {
        textCriteria.searchString = lowerKey;
      } else if (textCriteria.searchString.length !== 1 || lowerKey !== textCriteria.searchString) {
        textCriteria.searchString += lowerKey;
      }
      textCriteria.lastTime = currentTime;
      dispatch({
        type: ActionTypes.textNavigation,
        searchString: textCriteria.searchString,
        props: propsWithDefaults
      });
    }
  };
  const createHandleBlur = (other) => (event) => {
    var _other$onBlur, _listboxRef$current;
    (_other$onBlur = other.onBlur) == null ? void 0 : _other$onBlur.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    if ((_listboxRef$current = listboxRef.current) != null && _listboxRef$current.contains(document.activeElement)) {
      return;
    }
    dispatch({
      type: ActionTypes.blur,
      event,
      props: propsWithDefaults
    });
  };
  const getRootProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, {
      "aria-activedescendant": focusManagement === "activeDescendant" && highlightedValue != null ? optionIdGenerator(highlightedValue, highlightedIndex) : void 0,
      id,
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers),
      role: "listbox",
      tabIndex: focusManagement === "DOM" ? -1 : 0,
      ref: handleRef
    });
  };
  const getOptionState = (option) => {
    let selected;
    const index = options.findIndex((opt) => optionComparer(opt, option));
    if (multiple) {
      var _ref;
      selected = ((_ref = selectedValue) != null ? _ref : []).some((value) => value != null && optionComparer(option, value));
    } else {
      selected = optionComparer(option, selectedValue);
    }
    const disabled = isOptionDisabled(option, index);
    return {
      selected,
      disabled,
      highlighted: highlightedIndex === index
    };
  };
  const getOptionTabIndex = (optionState) => {
    if (focusManagement === "activeDescendant") {
      return void 0;
    }
    if (!optionState.highlighted) {
      return -1;
    }
    if (optionState.disabled && !disabledItemsFocusable) {
      return -1;
    }
    return 0;
  };
  const getOptionProps = (option, otherHandlers = {}) => {
    const optionState = getOptionState(option);
    const index = options.findIndex((opt) => optionComparer(opt, option));
    return _extends({}, otherHandlers, {
      "aria-disabled": optionState.disabled || void 0,
      "aria-selected": optionState.selected,
      tabIndex: getOptionTabIndex(optionState),
      id: optionIdGenerator(option, index),
      onClick: createHandleOptionClick(option, otherHandlers),
      onMouseOver: createHandleOptionMouseOver(option, otherHandlers),
      role: "option"
    });
  };
  React20.useDebugValue({
    highlightedOption: options[highlightedIndex],
    selectedOption: selectedValue
  });
  return {
    getRootProps,
    getOptionProps,
    getOptionState,
    highlightedOption: (_options$highlightedI = options[highlightedIndex]) != null ? _options$highlightedI : null,
    selectedOption: selectedValue,
    setSelectedValue,
    setHighlightedValue
  };
}

// ../../node_modules/@mui/base/MenuUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/MenuUnstyled/MenuUnstyled.js
init_define_process();
var import_prop_types11 = __toESM(require_prop_types());
import * as React25 from "/react.mjs";

// ../../node_modules/@mui/base/MenuUnstyled/MenuUnstyledContext.js
init_define_process();
import * as React21 from "/react.mjs";
var MenuUnstyledContext = React21.createContext(null);
MenuUnstyledContext.displayName = "MenuUnstyledContext";
var MenuUnstyledContext_default = MenuUnstyledContext;

// ../../node_modules/@mui/base/MenuUnstyled/menuUnstyledClasses.js
init_define_process();
function getMenuUnstyledUtilityClass(slot) {
  return generateUtilityClass("MuiMenuUnstyled", slot);
}
var menuUnstyledClasses = generateUtilityClasses("MuiMenuUnstyled", ["root", "listbox", "expanded"]);

// ../../node_modules/@mui/base/MenuUnstyled/useMenu.js
init_define_process();
import * as React22 from "/react.mjs";
function stateReducer(state, action) {
  if (action.type === ActionTypes.blur || action.type === ActionTypes.optionHover || action.type === ActionTypes.setValue) {
    return state;
  }
  const newState = defaultListboxReducer(state, action);
  if (action.type !== ActionTypes.setHighlight && newState.highlightedValue === null && action.props.options.length > 0) {
    return _extends({}, newState, {
      highlightedValue: action.props.options[0]
    });
  }
  return newState;
}
function useMenu(parameters = {}) {
  const {
    listboxRef: listboxRefProp,
    open: open2 = false,
    onClose,
    listboxId
  } = parameters;
  const [menuItems, setMenuItems] = React22.useState({});
  const listboxRef = React22.useRef(null);
  const handleRef = useForkRef(listboxRef, listboxRefProp);
  const registerItem = React22.useCallback((id, metadata) => {
    setMenuItems((previousState) => {
      const newState = _extends({}, previousState);
      newState[id] = metadata;
      return newState;
    });
  }, []);
  const unregisterItem = React22.useCallback((id) => {
    setMenuItems((previousState) => {
      const newState = _extends({}, previousState);
      delete newState[id];
      return newState;
    });
  }, []);
  const {
    getOptionState,
    getOptionProps,
    getRootProps,
    highlightedOption,
    setHighlightedValue: setListboxHighlight
  } = useListbox({
    options: Object.keys(menuItems),
    optionStringifier: (id) => {
      var _menuItems$id$ref$cur;
      return menuItems[id].label || ((_menuItems$id$ref$cur = menuItems[id].ref.current) == null ? void 0 : _menuItems$id$ref$cur.innerText);
    },
    isOptionDisabled: (id) => {
      var _menuItems$id;
      return (menuItems == null ? void 0 : (_menuItems$id = menuItems[id]) == null ? void 0 : _menuItems$id.disabled) || false;
    },
    listboxRef: handleRef,
    focusManagement: "DOM",
    id: listboxId,
    stateReducer,
    disabledItemsFocusable: true
  });
  const highlightFirstItem = React22.useCallback(() => {
    if (Object.keys(menuItems).length > 0) {
      setListboxHighlight(menuItems[Object.keys(menuItems)[0]].id);
    }
  }, [menuItems, setListboxHighlight]);
  const highlightLastItem = React22.useCallback(() => {
    if (Object.keys(menuItems).length > 0) {
      setListboxHighlight(menuItems[Object.keys(menuItems)[Object.keys(menuItems).length - 1]].id);
    }
  }, [menuItems, setListboxHighlight]);
  React22.useEffect(() => {
    if (!open2) {
      highlightFirstItem();
    }
  }, [open2, highlightFirstItem]);
  const createHandleKeyDown = (otherHandlers) => (e) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, e);
    if (e.defaultPrevented) {
      return;
    }
    if (e.key === "Escape" && open2) {
      onClose == null ? void 0 : onClose();
    }
  };
  const createHandleBlur = (otherHandlers) => (e) => {
    var _otherHandlers$onBlur, _listboxRef$current;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, e);
    if (!((_listboxRef$current = listboxRef.current) != null && _listboxRef$current.contains(e.relatedTarget))) {
      onClose == null ? void 0 : onClose();
    }
  };
  React22.useEffect(() => {
    var _listboxRef$current2;
    if ((_listboxRef$current2 = listboxRef.current) != null && _listboxRef$current2.contains(document.activeElement) && highlightedOption !== null) {
      var _menuItems$highlighte, _menuItems$highlighte2;
      menuItems == null ? void 0 : (_menuItems$highlighte = menuItems[highlightedOption]) == null ? void 0 : (_menuItems$highlighte2 = _menuItems$highlighte.ref.current) == null ? void 0 : _menuItems$highlighte2.focus();
    }
  }, [highlightedOption, menuItems]);
  const getListboxProps = (otherHandlers = {}) => {
    const rootProps = getRootProps(_extends({}, otherHandlers, {
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers)
    }));
    return _extends({}, otherHandlers, rootProps, {
      role: "menu"
    });
  };
  const getItemState = (id) => {
    const {
      disabled,
      highlighted
    } = getOptionState(id);
    return {
      disabled,
      highlighted
    };
  };
  React22.useDebugValue({
    menuItems,
    highlightedOption
  });
  return {
    registerItem,
    unregisterItem,
    menuItems,
    getListboxProps,
    getItemState,
    getItemProps: getOptionProps,
    highlightedOption,
    highlightFirstItem,
    highlightLastItem
  };
}

// ../../node_modules/@mui/base/PopperUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/index.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/enums.js
init_define_process();
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// ../../node_modules/@popperjs/core/lib/modifiers/index.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
init_define_process();
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js
init_define_process();
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument2 = node.ownerDocument;
    return ownerDocument2 ? ownerDocument2.defaultView || window : window;
  }
  return node;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// ../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style3 = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style3);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style3 = styleProperties.reduce(function(style4, property) {
        style4[property] = "";
        return style4;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style3);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// ../../node_modules/@popperjs/core/lib/modifiers/arrow.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js
init_define_process();
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/utils/math.js
init_define_process();
var max = Math.max;
var min = Math.min;
var round = Math.round;

// ../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width2 = element.offsetWidth;
  var height2 = element.offsetHeight;
  if (Math.abs(clientRect.width - width2) <= 1) {
    width2 = clientRect.width;
  }
  if (Math.abs(clientRect.height - height2) <= 1) {
    height2 = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width2,
    height: height2
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/contains.js
init_define_process();
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
init_define_process();
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// ../../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
init_define_process();
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
init_define_process();
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css2 = getComputedStyle(currentNode);
    if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].indexOf(css2.willChange) !== -1 || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// ../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
init_define_process();
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// ../../node_modules/@popperjs/core/lib/utils/within.js
init_define_process();
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// ../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
init_define_process();
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// ../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// ../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js
init_define_process();
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// ../../node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding2, state) {
  padding2 = typeof padding2 === "function" ? padding2(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding2;
  return mergePaddingObject(typeof padding2 !== "number" ? padding2 : expandToHashMap(padding2, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// ../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/utils/getVariation.js
init_define_process();
function getVariation(placement) {
  return placement.split("-")[1];
}

// ../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position2 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position2
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// ../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js
init_define_process();
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// ../../node_modules/@popperjs/core/lib/modifiers/flip.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
init_define_process();
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// ../../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
init_define_process();
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// ../../node_modules/@popperjs/core/lib/utils/detectOverflow.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
init_define_process();
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width2 = html.clientWidth;
  var height2 = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width2 = visualViewport.width;
    height2 = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width2,
    height: height2,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
init_define_process();
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width2 = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height2 = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width2;
  }
  return {
    width: width2,
    height: height2,
    x,
    y
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
init_define_process();
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow2 = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow2 + overflowY + overflowX);
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// ../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}

// ../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js
init_define_process();
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// ../../node_modules/@popperjs/core/lib/utils/computeOffsets.js
init_define_process();
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// ../../node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding2 = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding2 !== "number" ? padding2 : expandToHashMap(padding2, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// ../../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
init_define_process();
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding2 = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding: padding2
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// ../../node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding2 = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding: padding2,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow2 = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding: padding2
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow2[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow2[mainVariationSide] <= 0, overflow2[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// ../../node_modules/@popperjs/core/lib/modifiers/hide.js
init_define_process();
function getSideOffsets(overflow2, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow2.top - rect.height - preventedOffsets.y,
    right: overflow2.right - rect.width + preventedOffsets.x,
    bottom: overflow2.bottom - rect.height + preventedOffsets.y,
    left: overflow2.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow2) {
  return [top, right, bottom, left].some(function(side) {
    return overflow2[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// ../../node_modules/@popperjs/core/lib/modifiers/offset.js
init_define_process();
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// ../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
init_define_process();
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// ../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/utils/getAltAxis.js
init_define_process();
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// ../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding2 = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow2 = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding: padding2,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow2[mainSide];
    var max2 = offset2 - overflow2[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow2[_mainSide];
    var _max = _offset - overflow2[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// ../../node_modules/@popperjs/core/lib/createPopper.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
init_define_process();
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// ../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// ../../node_modules/@popperjs/core/lib/utils/orderModifiers.js
init_define_process();
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// ../../node_modules/@popperjs/core/lib/utils/debounce.js
init_define_process();
function debounce2(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// ../../node_modules/@popperjs/core/lib/utils/validateModifiers.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/utils/format.js
init_define_process();
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// ../../node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
      return self2.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// ../../node_modules/@popperjs/core/lib/utils/uniqueBy.js
init_define_process();
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// ../../node_modules/@popperjs/core/lib/utils/mergeByName.js
init_define_process();
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// ../../node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin2) {
            return parseFloat(margin2);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce2(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// ../../node_modules/@popperjs/core/lib/popper.js
init_define_process();

// ../../node_modules/@popperjs/core/lib/popper-lite.js
init_define_process();
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// ../../node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// ../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js
var import_prop_types10 = __toESM(require_prop_types());
import * as React24 from "/react.mjs";

// ../../node_modules/@mui/base/Portal/index.js
init_define_process();

// ../../node_modules/@mui/base/Portal/Portal.js
init_define_process();
var import_prop_types9 = __toESM(require_prop_types());
import * as React23 from "/react.mjs";
import * as ReactDOM from "/react.mjs";
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
var Portal = React23.forwardRef(function Portal2(props, ref) {
  const {
    children: children2,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React23.useState(null);
  const handleRef = useForkRef(React23.isValidElement(children2) ? children2.ref : null, ref);
  useEnhancedEffect_default(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
      };
    }
    return void 0;
  }, [ref, mountNode, disablePortal]);
  if (disablePortal) {
    if (React23.isValidElement(children2)) {
      return React23.cloneElement(children2, {
        ref: handleRef
      });
    }
    return children2;
  }
  return mountNode ? ReactDOM.createPortal(children2, mountNode) : mountNode;
});
true ? Portal.propTypes = {
  children: import_prop_types9.default.node,
  container: import_prop_types9.default.oneOfType([HTMLElementType, import_prop_types9.default.func]),
  disablePortal: import_prop_types9.default.bool
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}
var Portal_default = Portal;

// ../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js
import { jsx as _jsx6 } from "/react.mjs";
var _excluded6 = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "TransitionProps"];
var _excluded23 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"];
function flipPlacement(placement, direction) {
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var defaultPopperOptions = {};
var PopperTooltip = React24.forwardRef(function PopperTooltip2(props, ref) {
  const {
    anchorEl,
    children: children2,
    direction,
    disablePortal,
    modifiers,
    open: open2,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const tooltipRef = React24.useRef(null);
  const ownRef = useForkRef(tooltipRef, ref);
  const popperRef = React24.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React24.useRef(handlePopperRef);
  useEnhancedEffect_default(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React24.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  const [placement, setPlacement] = React24.useState(rtlPlacement);
  React24.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  useEnhancedEffect_default(() => {
    if (!anchorEl || !open2) {
      return void 0;
    }
    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    if (true) {
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: true,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper2 = createPopper3(resolveAnchorEl(anchorEl), tooltipRef.current, _extends({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper2);
    return () => {
      popper2.destroy();
      handlePopperRefRef.current(null);
    };
  }, [anchorEl, disablePortal, modifiers, open2, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  return _jsx6("div", _extends({
    ref: ownRef,
    role: "tooltip"
  }, other, {
    children: typeof children2 === "function" ? children2(childProps) : children2
  }));
});
var PopperUnstyled = React24.forwardRef(function PopperUnstyled2(props, ref) {
  const {
    anchorEl,
    children: children2,
    container: containerProp,
    direction = "ltr",
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open: open2,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style: style3,
    transition = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded23);
  const [exited, setExited] = React24.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open2 && (!transition || exited)) {
    return null;
  }
  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : void 0);
  return _jsx6(Portal_default, {
    disablePortal,
    container,
    children: _jsx6(PopperTooltip, _extends({
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref,
      open: transition ? !exited : open2,
      placement,
      popperOptions,
      popperRef
    }, other, {
      style: _extends({
        position: "fixed",
        top: 0,
        left: 0,
        display: !open2 && keepMounted && (!transition || exited) ? "none" : null
      }, style3),
      TransitionProps: transition ? {
        in: open2,
        onEnter: handleEnter,
        onExited: handleExited
      } : null,
      children: children2
    }))
  });
});
true ? PopperUnstyled.propTypes = {
  anchorEl: chainPropTypes(import_prop_types10.default.oneOfType([HTMLElementType, import_prop_types10.default.object, import_prop_types10.default.func]), (props) => {
    if (props.open) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== "function" || resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join("\n"));
      }
    }
    return null;
  }),
  children: import_prop_types10.default.oneOfType([import_prop_types10.default.node, import_prop_types10.default.func]),
  container: import_prop_types10.default.oneOfType([HTMLElementType, import_prop_types10.default.func]),
  direction: import_prop_types10.default.oneOf(["ltr", "rtl"]),
  disablePortal: import_prop_types10.default.bool,
  keepMounted: import_prop_types10.default.bool,
  modifiers: import_prop_types10.default.arrayOf(import_prop_types10.default.shape({
    data: import_prop_types10.default.object,
    effect: import_prop_types10.default.func,
    enabled: import_prop_types10.default.bool,
    fn: import_prop_types10.default.func,
    name: import_prop_types10.default.any,
    options: import_prop_types10.default.object,
    phase: import_prop_types10.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types10.default.arrayOf(import_prop_types10.default.string),
    requiresIfExists: import_prop_types10.default.arrayOf(import_prop_types10.default.string)
  })),
  open: import_prop_types10.default.bool.isRequired,
  placement: import_prop_types10.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  popperOptions: import_prop_types10.default.shape({
    modifiers: import_prop_types10.default.array,
    onFirstUpdate: import_prop_types10.default.func,
    placement: import_prop_types10.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types10.default.oneOf(["absolute", "fixed"])
  }),
  popperRef: refType_default,
  style: import_prop_types10.default.object,
  transition: import_prop_types10.default.bool
} : void 0;
var PopperUnstyled_default = PopperUnstyled;

// ../../node_modules/@mui/base/MenuUnstyled/MenuUnstyled.js
import { jsx as _jsx7 } from "/react.mjs";
var _excluded7 = ["actions", "anchorEl", "children", "component", "components", "componentsProps", "keepMounted", "listboxId", "onClose", "open"];
function getUtilityClasses(ownerState) {
  const {
    open: open2
  } = ownerState;
  const slots = {
    root: ["root", open2 && "expanded"],
    listbox: ["listbox", open2 && "expanded"]
  };
  return composeClasses(slots, getMenuUnstyledUtilityClass, {});
}
var MenuUnstyled = React25.forwardRef(function MenuUnstyled2(props, forwardedRef) {
  var _ref, _components$Listbox;
  const {
    actions,
    anchorEl,
    children: children2,
    component,
    components = {},
    componentsProps = {},
    keepMounted = false,
    listboxId,
    onClose,
    open: open2 = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const {
    registerItem,
    unregisterItem,
    getListboxProps,
    getItemProps,
    getItemState,
    highlightFirstItem,
    highlightLastItem
  } = useMenu({
    open: open2,
    onClose,
    listboxId
  });
  React25.useImperativeHandle(actions, () => ({
    highlightFirstItem,
    highlightLastItem
  }), [highlightFirstItem, highlightLastItem]);
  const ownerState = _extends({}, props, {
    open: open2
  });
  const classes = getUtilityClasses(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : PopperUnstyled_default;
  const rootProps = useSlotProps({
    elementType: Root,
    externalForwardedProps: other,
    externalSlotProps: componentsProps.root,
    additionalProps: {
      anchorEl,
      open: open2,
      keepMounted,
      role: void 0,
      ref: forwardedRef
    },
    className: classes.root,
    ownerState
  });
  const Listbox = (_components$Listbox = components.Listbox) != null ? _components$Listbox : "ul";
  const listboxProps = useSlotProps({
    elementType: Listbox,
    getSlotProps: getListboxProps,
    externalSlotProps: componentsProps.listbox,
    ownerState,
    className: classes.listbox
  });
  const contextValue = {
    registerItem,
    unregisterItem,
    getItemState,
    getItemProps,
    open: open2
  };
  return _jsx7(Root, _extends({}, rootProps, {
    children: _jsx7(Listbox, _extends({}, listboxProps, {
      children: _jsx7(MenuUnstyledContext_default.Provider, {
        value: contextValue,
        children: children2
      })
    }))
  }));
});
true ? MenuUnstyled.propTypes = {
  actions: refType_default,
  anchorEl: import_prop_types11.default.oneOfType([HTMLElementType, import_prop_types11.default.object, import_prop_types11.default.func]),
  children: import_prop_types11.default.node,
  component: import_prop_types11.default.elementType,
  components: import_prop_types11.default.shape({
    Listbox: import_prop_types11.default.elementType,
    Root: import_prop_types11.default.elementType
  }),
  componentsProps: import_prop_types11.default.shape({
    listbox: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    root: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object])
  }),
  keepMounted: import_prop_types11.default.bool,
  listboxId: import_prop_types11.default.string,
  onClose: import_prop_types11.default.func,
  open: import_prop_types11.default.bool
} : void 0;

// ../../node_modules/@mui/base/MenuUnstyled/MenuUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/MenuUnstyled/useMenu.types.js
init_define_process();

// ../../node_modules/@mui/base/MenuItemUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/MenuItemUnstyled/MenuItemUnstyled.js
init_define_process();
var import_prop_types12 = __toESM(require_prop_types());
import * as React27 from "/react.mjs";

// ../../node_modules/@mui/base/MenuItemUnstyled/menuItemUnstyledClasses.js
init_define_process();
function getMenuItemUnstyledUtilityClass(slot) {
  return generateUtilityClass("MuiMenuItemUnstyled", slot);
}
var menuItemUnstyledClasses = generateUtilityClasses("MuiMenuItemUnstyled", ["root", "disabled", "focusVisible"]);

// ../../node_modules/@mui/base/MenuItemUnstyled/useMenuItem.js
init_define_process();
import * as React26 from "/react.mjs";
function useMenuItem(props) {
  var _itemState$disabled;
  const {
    disabled = false,
    ref,
    label
  } = props;
  const id = useId2();
  const menuContext = React26.useContext(MenuUnstyledContext_default);
  const itemRef = React26.useRef(null);
  const handleRef = useForkRef(itemRef, ref);
  if (menuContext === null) {
    throw new Error("MenuItemUnstyled must be used within a MenuUnstyled");
  }
  const {
    registerItem,
    unregisterItem,
    open: open2
  } = menuContext;
  React26.useEffect(() => {
    if (id === void 0) {
      return void 0;
    }
    registerItem(id, {
      disabled,
      id,
      ref: itemRef,
      label
    });
    return () => unregisterItem(id);
  }, [id, registerItem, unregisterItem, disabled, ref, label]);
  const {
    getRootProps: getButtonProps,
    focusVisible
  } = useButton({
    disabled,
    focusableWhenDisabled: true,
    ref: handleRef
  });
  const [focusRequested, requestFocus] = React26.useState(false);
  const focusIfRequested = React26.useCallback(() => {
    if (focusRequested && itemRef.current != null) {
      itemRef.current.focus();
      requestFocus(false);
    }
  }, [focusRequested]);
  React26.useEffect(() => {
    focusIfRequested();
  });
  React26.useDebugValue({
    id,
    disabled,
    label
  });
  const itemState = menuContext.getItemState(id != null ? id : "");
  const {
    highlighted
  } = itemState != null ? itemState : {
    highlighted: false
  };
  React26.useEffect(() => {
    requestFocus(highlighted && open2);
  }, [highlighted, open2]);
  if (id === void 0) {
    return {
      getRootProps: (other) => _extends({}, other, getButtonProps(other), {
        role: "menuitem"
      }),
      disabled: false,
      focusVisible
    };
  }
  return {
    getRootProps: (other) => {
      const optionProps = menuContext.getItemProps(id, other);
      return _extends({}, other, getButtonProps(other), {
        tabIndex: optionProps.tabIndex,
        id: optionProps.id,
        role: "menuitem"
      });
    },
    disabled: (_itemState$disabled = itemState == null ? void 0 : itemState.disabled) != null ? _itemState$disabled : false,
    focusVisible
  };
}

// ../../node_modules/@mui/base/MenuItemUnstyled/MenuItemUnstyled.js
import { jsx as _jsx8 } from "/react.mjs";
var _excluded8 = ["children", "disabled", "component", "components", "componentsProps", "label"];
function getUtilityClasses2(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, getMenuItemUnstyledUtilityClass, {});
}
var MenuItemUnstyled = React27.forwardRef(function MenuItemUnstyled2(props, ref) {
  var _ref;
  const {
    children: children2,
    disabled: disabledProp = false,
    component,
    components = {},
    componentsProps = {},
    label
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const {
    getRootProps,
    disabled,
    focusVisible
  } = useMenuItem({
    disabled: disabledProp,
    ref,
    label
  });
  const ownerState = _extends({}, props, {
    disabled,
    focusVisible
  });
  const classes = getUtilityClasses2(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : "li";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return _jsx8(Root, _extends({}, rootProps, {
    children: children2
  }));
});
true ? MenuItemUnstyled.propTypes = {
  children: import_prop_types12.default.node,
  component: import_prop_types12.default.elementType,
  components: import_prop_types12.default.shape({
    Root: import_prop_types12.default.elementType
  }),
  componentsProps: import_prop_types12.default.shape({
    root: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object])
  }),
  disabled: import_prop_types12.default.bool,
  label: import_prop_types12.default.string
} : void 0;

// ../../node_modules/@mui/base/MenuItemUnstyled/MenuItemUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/MenuItemUnstyled/useMenuItem.types.js
init_define_process();

// ../../node_modules/@mui/base/ModalUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js
init_define_process();
var import_prop_types14 = __toESM(require_prop_types());
import * as React29 from "/react.mjs";

// ../../node_modules/@mui/base/ModalUnstyled/ModalManager.js
init_define_process();
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
var ModalManager = class {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
};

// ../../node_modules/@mui/base/TrapFocus/index.js
init_define_process();

// ../../node_modules/@mui/base/TrapFocus/TrapFocus.js
init_define_process();
var import_prop_types13 = __toESM(require_prop_types());
import * as React28 from "/react.mjs";
import { jsx as _jsx9 } from "/react.mjs";
import { jsxs as _jsxs3 } from "/react.mjs";
var candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio") {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function TrapFocus(props) {
  const {
    children: children2,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open: open2
  } = props;
  const ignoreNextEnforceFocus = React28.useRef();
  const sentinelStart = React28.useRef(null);
  const sentinelEnd = React28.useRef(null);
  const nodeToRestore = React28.useRef(null);
  const reactFocusEventTarget = React28.useRef(null);
  const activated = React28.useRef(false);
  const rootRef = React28.useRef(null);
  const handleRef = useForkRef(children2.ref, rootRef);
  const lastKeydown = React28.useRef(null);
  React28.useEffect(() => {
    if (!open2 || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open2]);
  React28.useEffect(() => {
    if (!open2 || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (true) {
          console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n"));
        }
        rootRef.current.setAttribute("tabIndex", -1);
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open2]);
  React28.useEffect(() => {
    if (!open2 || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const contain = (nativeEvent) => {
      const {
        current: rootElement
      } = rootRef;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (!rootElement.contains(doc.activeElement)) {
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }
        if (!activated.current) {
          return;
        }
        let tabbable = [];
        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }
        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;
          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        } else {
          rootElement.focus();
        }
      }
    };
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        sentinelEnd.current.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open2, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children2.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return _jsxs3(React28.Fragment, {
    children: [_jsx9("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), React28.cloneElement(children2, {
      ref: handleRef,
      onFocus
    }), _jsx9("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    })]
  });
}
true ? TrapFocus.propTypes = {
  children: elementAcceptingRef_default,
  disableAutoFocus: import_prop_types13.default.bool,
  disableEnforceFocus: import_prop_types13.default.bool,
  disableRestoreFocus: import_prop_types13.default.bool,
  getTabbable: import_prop_types13.default.func,
  isEnabled: import_prop_types13.default.func,
  open: import_prop_types13.default.bool.isRequired
} : void 0;
if (true) {
  TrapFocus["propTypes"] = exactProp(TrapFocus.propTypes);
}
var TrapFocus_default = TrapFocus;

// ../../node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js
init_define_process();
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
var modalUnstyledClasses = generateUtilityClasses("MuiModal", ["root", "hidden"]);

// ../../node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js
import { jsx as _jsx10 } from "/react.mjs";
import { jsxs as _jsxs4 } from "/react.mjs";
var _excluded9 = ["children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited"];
var useUtilityClasses4 = (ownerState) => {
  const {
    open: open2,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open2 && exited && "hidden"]
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
function getContainer2(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty("in") : false;
}
var defaultManager = new ModalManager();
var ModalUnstyled = React29.forwardRef(function ModalUnstyled2(props, ref) {
  var _props$ariaHidden, _componentsProps$root;
  const {
    children: children2,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    component = "div",
    components = {},
    componentsProps = {},
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open: open2,
    onTransitionEnter,
    onTransitionExited
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const [exited, setExited] = React29.useState(true);
  const modal = React29.useRef({});
  const mountNodeRef = React29.useRef(null);
  const modalRef = React29.useRef(null);
  const handleRef = useForkRef(modalRef, ref);
  const hasTransition = getHasTransition(props);
  const ariaHiddenProp = (_props$ariaHidden = props["aria-hidden"]) != null ? _props$ariaHidden : true;
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    modalRef.current.scrollTop = 0;
  };
  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer2(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = React29.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback((node) => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open2 && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React29.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [manager, ariaHiddenProp]);
  React29.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React29.useEffect(() => {
    if (open2) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open2, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const ownerState = _extends({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });
  const classes = useUtilityClasses4(ownerState);
  if (!keepMounted && !open2 && (!hasTransition || exited)) {
    return null;
  }
  const handleEnter = () => {
    setExited(false);
    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };
  const handleExited = () => {
    setExited(true);
    if (onTransitionExited) {
      onTransitionExited();
    }
    if (closeAfterTransition) {
      handleClose();
    }
  };
  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const handleKeyDown3 = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.key !== "Escape" || !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const childProps = {};
  if (children2.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children2.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children2.props.onExited);
  }
  const Root = components.Root || component;
  const rootProps = appendOwnerState(Root, _extends({
    role: "presentation"
  }, other, componentsProps.root, {
    ref: handleRef,
    onKeyDown: handleKeyDown3,
    className: clsx_m_default(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className)
  }), ownerState);
  const BackdropComponent = components.Backdrop;
  const backdropProps = appendOwnerState(BackdropComponent, _extends({
    "aria-hidden": true,
    open: open2,
    onClick: handleBackdropClick
  }, componentsProps.backdrop), ownerState);
  return _jsx10(Portal_default, {
    ref: handlePortalRef,
    container,
    disablePortal,
    children: _jsxs4(Root, _extends({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? _jsx10(BackdropComponent, _extends({}, backdropProps)) : null, _jsx10(TrapFocus_default, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open: open2,
        children: React29.cloneElement(children2, childProps)
      })]
    }))
  });
});
true ? ModalUnstyled.propTypes = {
  children: elementAcceptingRef_default.isRequired,
  classes: import_prop_types14.default.object,
  className: import_prop_types14.default.string,
  closeAfterTransition: import_prop_types14.default.bool,
  component: import_prop_types14.default.elementType,
  components: import_prop_types14.default.shape({
    Backdrop: import_prop_types14.default.elementType,
    Root: import_prop_types14.default.elementType
  }),
  componentsProps: import_prop_types14.default.shape({
    backdrop: import_prop_types14.default.object,
    root: import_prop_types14.default.object
  }),
  container: import_prop_types14.default.oneOfType([HTMLElementType, import_prop_types14.default.func]),
  disableAutoFocus: import_prop_types14.default.bool,
  disableEnforceFocus: import_prop_types14.default.bool,
  disableEscapeKeyDown: import_prop_types14.default.bool,
  disablePortal: import_prop_types14.default.bool,
  disableRestoreFocus: import_prop_types14.default.bool,
  disableScrollLock: import_prop_types14.default.bool,
  hideBackdrop: import_prop_types14.default.bool,
  keepMounted: import_prop_types14.default.bool,
  onBackdropClick: import_prop_types14.default.func,
  onClose: import_prop_types14.default.func,
  onKeyDown: import_prop_types14.default.func,
  open: import_prop_types14.default.bool.isRequired
} : void 0;

// ../../node_modules/@mui/base/MultiSelectUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/MultiSelectUnstyled/MultiSelectUnstyled.js
init_define_process();
var import_prop_types15 = __toESM(require_prop_types());
import * as React33 from "/react.mjs";

// ../../node_modules/@mui/base/SelectUnstyled/utils.js
init_define_process();
import React30 from "/react.mjs";

// ../../node_modules/@mui/base/SelectUnstyled/useSelect.types.js
init_define_process();
function isOptionGroup(child) {
  return !!child.options;
}

// ../../node_modules/@mui/base/SelectUnstyled/utils.js
function getOptionsFromChildren(children2) {
  if (children2 == null) {
    return [];
  }
  const selectChildren = [];
  React30.Children.forEach(children2, (node) => {
    var _props, _props2, _element$props$disabl2;
    const nodeChildren = node == null ? void 0 : (_props = node.props) == null ? void 0 : _props.children;
    if ((node == null ? void 0 : (_props2 = node.props) == null ? void 0 : _props2.value) === void 0) {
      if (nodeChildren != null) {
        var _element$props$disabl;
        const element2 = node;
        const group = {
          options: getOptionsFromChildren(nodeChildren),
          label: element2.props.label,
          disabled: (_element$props$disabl = element2.props.disabled) != null ? _element$props$disabl : false
        };
        selectChildren.push(group);
      }
      return;
    }
    const element = node;
    const option = {
      value: element.props.value,
      label: element.props.label || element.props.children,
      disabled: (_element$props$disabl2 = element.props.disabled) != null ? _element$props$disabl2 : false
    };
    selectChildren.push(option);
  });
  return selectChildren != null ? selectChildren : [];
}
function flattenOptionGroups(groupedOptions, isGroupDisabled = false) {
  let flatOptions = [];
  groupedOptions.forEach((optionOrGroup) => {
    if (isOptionGroup(optionOrGroup)) {
      flatOptions = flatOptions.concat(flattenOptionGroups(optionOrGroup.options, optionOrGroup.disabled));
    } else {
      flatOptions.push(_extends({}, optionOrGroup, {
        disabled: isGroupDisabled || optionOrGroup.disabled
      }));
    }
  });
  return flatOptions;
}

// ../../node_modules/@mui/base/SelectUnstyled/useSelect.js
init_define_process();
import * as React31 from "/react.mjs";
var defaultOptionStringifier2 = (option) => {
  const {
    label,
    value
  } = option;
  if (typeof label === "string") {
    return label;
  }
  if (typeof value === "string") {
    return value;
  }
  return String(option);
};
function useSelect(props) {
  const {
    buttonRef: buttonRefProp,
    defaultValue,
    disabled = false,
    listboxId,
    listboxRef: listboxRefProp,
    multiple = false,
    onChange,
    onOpenChange,
    open: open2 = false,
    options,
    optionStringifier = defaultOptionStringifier2,
    value: valueProp
  } = props;
  const buttonRef = React31.useRef(null);
  const handleButtonRef = useForkRef(buttonRefProp, buttonRef);
  const listboxRef = React31.useRef(null);
  const intermediaryListboxRef = useForkRef(listboxRefProp, listboxRef);
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "SelectUnstyled",
    state: "value"
  });
  const ignoreEnterKeyUp = React31.useRef(false);
  const ignoreClick = React31.useRef(false);
  const [listboxFocusRequested, requestListboxFocus] = React31.useState(false);
  const focusListboxIfRequested = React31.useCallback(() => {
    if (listboxFocusRequested && listboxRef.current != null) {
      listboxRef.current.focus();
      requestListboxFocus(false);
    }
  }, [listboxFocusRequested]);
  const updateListboxRef = (listboxElement) => {
    listboxRef.current = listboxElement;
    focusListboxIfRequested();
  };
  const handleListboxRef = useForkRef(intermediaryListboxRef, updateListboxRef);
  React31.useEffect(() => {
    focusListboxIfRequested();
  }, [focusListboxIfRequested]);
  React31.useEffect(() => {
    requestListboxFocus(open2);
  }, [open2]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    otherHandlers == null ? void 0 : (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (!event.defaultPrevented && open2) {
      ignoreClick.current = true;
    }
  };
  const createHandleButtonClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    otherHandlers == null ? void 0 : (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    if (!event.defaultPrevented && !ignoreClick.current) {
      onOpenChange == null ? void 0 : onOpenChange(!open2);
    }
    ignoreClick.current = false;
  };
  const createHandleButtonKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    otherHandlers == null ? void 0 : (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (event.key === "Enter") {
      ignoreEnterKeyUp.current = true;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      onOpenChange == null ? void 0 : onOpenChange(true);
    }
  };
  const createHandleListboxKeyUp = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyU;
    otherHandlers == null ? void 0 : (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    const closingKeys = multiple ? ["Escape"] : ["Escape", "Enter", " "];
    if (open2 && !ignoreEnterKeyUp.current && closingKeys.includes(event.key)) {
      var _buttonRef$current;
      buttonRef == null ? void 0 : (_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.focus();
    }
    ignoreEnterKeyUp.current = false;
  };
  const createHandleListboxItemClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic2;
    otherHandlers == null ? void 0 : (_otherHandlers$onClic2 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic2.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (!multiple) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  };
  const createHandleListboxBlur = (otherHandlers) => (event) => {
    var _otherHandlers$blur;
    otherHandlers == null ? void 0 : (_otherHandlers$blur = otherHandlers.blur) == null ? void 0 : _otherHandlers$blur.call(otherHandlers, event);
    if (!event.defaultPrevented) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  };
  const listboxReducer = (state, action) => {
    const newState = defaultListboxReducer(state, action);
    if (action.type === ActionTypes.keyDown && !open2 && (action.event.key === "ArrowUp" || action.event.key === "ArrowDown")) {
      return _extends({}, newState, {
        selectedValue: newState.highlightedValue
      });
    }
    if (action.type === ActionTypes.blur || action.type === ActionTypes.setValue || action.type === ActionTypes.optionsChange) {
      return _extends({}, newState, {
        highlightedValue: newState.selectedValue
      });
    }
    return newState;
  };
  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible
  } = useButton({
    disabled,
    ref: handleButtonRef
  });
  const selectedOption = React31.useMemo(() => {
    var _props$options$find;
    return props.multiple ? props.options.filter((o) => value.includes(o.value)) : (_props$options$find = props.options.find((o) => o.value === value)) != null ? _props$options$find : null;
  }, [props.multiple, props.options, value]);
  let useListboxParameters;
  if (props.multiple) {
    useListboxParameters = {
      id: listboxId,
      isOptionDisabled: (o) => {
        var _o$disabled;
        return (_o$disabled = o == null ? void 0 : o.disabled) != null ? _o$disabled : false;
      },
      optionComparer: (o, v) => (o == null ? void 0 : o.value) === (v == null ? void 0 : v.value),
      listboxRef: handleListboxRef,
      multiple: true,
      onChange: (newOptions) => {
        setValue(newOptions.map((o) => o.value));
        onChange == null ? void 0 : onChange(newOptions.map((o) => o.value));
      },
      options,
      optionStringifier,
      value: selectedOption
    };
  } else {
    useListboxParameters = {
      id: listboxId,
      isOptionDisabled: (o) => {
        var _o$disabled2;
        return (_o$disabled2 = o == null ? void 0 : o.disabled) != null ? _o$disabled2 : false;
      },
      optionComparer: (o, v) => (o == null ? void 0 : o.value) === (v == null ? void 0 : v.value),
      listboxRef: handleListboxRef,
      multiple: false,
      onChange: (option) => {
        var _option$value, _option$value2;
        setValue((_option$value = option == null ? void 0 : option.value) != null ? _option$value : null);
        onChange == null ? void 0 : onChange((_option$value2 = option == null ? void 0 : option.value) != null ? _option$value2 : null);
      },
      options,
      optionStringifier,
      stateReducer: listboxReducer,
      value: selectedOption
    };
  }
  const {
    getRootProps: getListboxRootProps,
    getOptionProps: getListboxOptionProps,
    getOptionState,
    highlightedOption,
    selectedOption: listboxSelectedOption
  } = useListbox(useListboxParameters);
  const getButtonProps = (otherHandlers = {}) => {
    return _extends({}, getButtonRootProps(_extends({}, otherHandlers, {
      onClick: createHandleButtonClick(otherHandlers),
      onMouseDown: createHandleMouseDown(otherHandlers),
      onKeyDown: createHandleButtonKeyDown(otherHandlers)
    })), {
      "aria-expanded": open2,
      "aria-haspopup": "listbox"
    });
  };
  const getListboxProps = (otherHandlers = {}) => getListboxRootProps(_extends({}, otherHandlers, {
    onBlur: createHandleListboxBlur(otherHandlers),
    onKeyUp: createHandleListboxKeyUp(otherHandlers)
  }));
  const getOptionProps = (option, otherHandlers = {}) => {
    return getListboxOptionProps(option, _extends({}, otherHandlers, {
      onClick: createHandleListboxItemClick(otherHandlers)
    }));
  };
  React31.useDebugValue({
    selectedOption: listboxSelectedOption,
    open: open2,
    highlightedOption
  });
  return {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    open: open2,
    value
  };
}
var useSelect_default = useSelect;

// ../../node_modules/@mui/base/SelectUnstyled/SelectUnstyledContext.js
init_define_process();
import * as React32 from "/react.mjs";
var SelectUnstyledContext = React32.createContext(void 0);

// ../../node_modules/@mui/base/SelectUnstyled/selectUnstyledClasses.js
init_define_process();
function getSelectUnstyledUtilityClass(slot) {
  return generateUtilityClass("MuiSelectUnstyled", slot);
}
var selectUnstyledClasses = generateUtilityClasses("MuiSelectUnstyled", ["root", "button", "listbox", "popper", "active", "expanded", "disabled", "focusVisible"]);

// ../../node_modules/@mui/base/MultiSelectUnstyled/MultiSelectUnstyled.js
import { jsx as _jsx11 } from "/react.mjs";
import { jsxs as _jsxs5 } from "/react.mjs";
var _excluded10 = ["autoFocus", "children", "className", "component", "components", "componentsProps", "defaultListboxOpen", "defaultValue", "disabled", "listboxOpen", "onChange", "onListboxOpenChange", "value"];
function defaultRenderMultipleValues(selectedOptions) {
  return _jsx11(React33.Fragment, {
    children: selectedOptions.map((o) => o.label).join(", ")
  });
}
function useUtilityClasses5(ownerState) {
  const {
    active,
    disabled,
    open: open2,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active", open2 && "expanded"],
    listbox: ["listbox", disabled && "disabled"],
    popper: ["popper"]
  };
  return composeClasses(slots, getSelectUnstyledUtilityClass, {});
}
var MultiSelectUnstyled = React33.forwardRef(function MultiSelectUnstyled2(props, ref) {
  var _props$renderValue, _ref, _components$Listbox, _components$Popper, _componentsProps$list, _componentsProps$list2, _componentsProps$root, _componentsProps$list3, _componentsProps$popp;
  const {
    autoFocus,
    children: children2,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultListboxOpen = false,
    defaultValue = [],
    disabled: disabledProp,
    listboxOpen: listboxOpenProp,
    onChange,
    onListboxOpenChange,
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const renderValue = (_props$renderValue = props.renderValue) != null ? _props$renderValue : defaultRenderMultipleValues;
  const [groupedOptions, setGroupedOptions] = React33.useState([]);
  const options = React33.useMemo(() => flattenOptionGroups(groupedOptions), [groupedOptions]);
  const [listboxOpen, setListboxOpen] = useControlled({
    controlled: listboxOpenProp,
    default: defaultListboxOpen,
    name: "MultiSelectUnstyled",
    state: "listboxOpen"
  });
  React33.useEffect(() => {
    setGroupedOptions(getOptionsFromChildren(children2));
  }, [children2]);
  const [buttonDefined, setButtonDefined] = React33.useState(false);
  const buttonRef = React33.useRef(null);
  const listboxRef = React33.useRef(null);
  const Button3 = (_ref = component != null ? component : components.Root) != null ? _ref : "button";
  const ListboxRoot = (_components$Listbox = components.Listbox) != null ? _components$Listbox : "ul";
  const Popper = (_components$Popper = components.Popper) != null ? _components$Popper : PopperUnstyled_default;
  const handleButtonRefChange = (element) => {
    buttonRef.current = element;
    if (element != null) {
      setButtonDefined(true);
    }
  };
  const handleButtonRef = useForkRef(ref, handleButtonRefChange);
  const handleListboxRef = useForkRef(listboxRef, (_componentsProps$list = componentsProps.listbox) == null ? void 0 : _componentsProps$list.ref);
  React33.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const handleOpenChange = (isOpen) => {
    setListboxOpen(isOpen);
    onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
  };
  const {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    value
  } = useSelect_default({
    buttonRef: handleButtonRef,
    defaultValue,
    disabled: disabledProp,
    listboxId: (_componentsProps$list2 = componentsProps.listbox) == null ? void 0 : _componentsProps$list2.id,
    listboxRef: handleListboxRef,
    multiple: true,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpen,
    options,
    value: valueProp
  });
  const ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value
  });
  const classes = useUtilityClasses5(ownerState);
  const selectedOptions = React33.useMemo(() => {
    if (value == null) {
      return [];
    }
    return options.filter((o) => value.includes(o.value));
  }, [options, value]);
  const buttonProps = appendOwnerState(Button3, _extends({}, getButtonProps(), other, componentsProps.root, {
    className: clsx_m_default(className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, classes.root)
  }), ownerState);
  const listboxProps = appendOwnerState(ListboxRoot, _extends({}, getListboxProps(), componentsProps.listbox, {
    className: clsx_m_default((_componentsProps$list3 = componentsProps.listbox) == null ? void 0 : _componentsProps$list3.className, classes.listbox)
  }), ownerState);
  const popperProps = appendOwnerState(Popper, _extends({
    open: listboxOpen,
    anchorEl: buttonRef.current,
    placement: "bottom-start",
    disablePortal: true,
    role: void 0
  }, componentsProps.popper, {
    className: clsx_m_default((_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className, classes.popper)
  }), ownerState);
  const context = {
    getOptionProps,
    getOptionState,
    listboxRef
  };
  return _jsxs5(React33.Fragment, {
    children: [_jsx11(Button3, _extends({}, buttonProps, {
      children: renderValue(selectedOptions)
    })), buttonDefined && _jsx11(Popper, _extends({}, popperProps, {
      children: _jsx11(ListboxRoot, _extends({}, listboxProps, {
        children: _jsx11(SelectUnstyledContext.Provider, {
          value: context,
          children: children2
        })
      }))
    }))]
  });
});
true ? MultiSelectUnstyled.propTypes = {
  autoFocus: import_prop_types15.default.bool,
  children: import_prop_types15.default.node,
  className: import_prop_types15.default.string,
  component: import_prop_types15.default.elementType,
  components: import_prop_types15.default.shape({
    Listbox: import_prop_types15.default.elementType,
    Popper: import_prop_types15.default.elementType,
    Root: import_prop_types15.default.elementType
  }),
  componentsProps: import_prop_types15.default.shape({
    listbox: import_prop_types15.default.object,
    popper: import_prop_types15.default.object,
    root: import_prop_types15.default.object
  }),
  defaultListboxOpen: import_prop_types15.default.bool,
  defaultValue: import_prop_types15.default.array,
  disabled: import_prop_types15.default.bool,
  listboxOpen: import_prop_types15.default.bool,
  onChange: import_prop_types15.default.func,
  onListboxOpenChange: import_prop_types15.default.func,
  renderValue: import_prop_types15.default.func,
  value: import_prop_types15.default.array
} : void 0;

// ../../node_modules/@mui/base/MultiSelectUnstyled/MultiSelectUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/NoSsr/index.js
init_define_process();

// ../../node_modules/@mui/base/NoSsr/NoSsr.js
init_define_process();
var import_prop_types16 = __toESM(require_prop_types());
import * as React34 from "/react.mjs";
import { jsx as _jsx12 } from "/react.mjs";
function NoSsr(props) {
  const {
    children: children2,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = React34.useState(false);
  useEnhancedEffect_default(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React34.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);
  return _jsx12(React34.Fragment, {
    children: mountedState ? children2 : fallback
  });
}
true ? NoSsr.propTypes = {
  children: import_prop_types16.default.node,
  defer: import_prop_types16.default.bool,
  fallback: import_prop_types16.default.node
} : void 0;
if (true) {
  NoSsr["propTypes"] = exactProp(NoSsr.propTypes);
}

// ../../node_modules/@mui/base/OptionGroupUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/OptionGroupUnstyled/OptionGroupUnstyled.js
init_define_process();
var import_prop_types17 = __toESM(require_prop_types());
import React35 from "/react.mjs";

// ../../node_modules/@mui/base/OptionGroupUnstyled/optionGroupUnstyledClasses.js
init_define_process();
function getOptionGroupUnstyledUtilityClass(slot) {
  return generateUtilityClass("MuiOptionGroupUnstyled", slot);
}
var optionGroupUnstyledClasses = generateUtilityClasses("MuiOptionGroupUnstyled", ["root", "label", "list"]);

// ../../node_modules/@mui/base/OptionGroupUnstyled/OptionGroupUnstyled.js
import { jsx as _jsx13 } from "/react.mjs";
import { jsxs as _jsxs6 } from "/react.mjs";
var _excluded11 = ["className", "component", "components", "disabled", "componentsProps"];
function useUtilityClasses6(disabled) {
  const slots = {
    root: ["root", disabled && "disabled"],
    label: ["label"],
    list: ["list"]
  };
  return composeClasses(slots, getOptionGroupUnstyledUtilityClass, {});
}
var OptionGroupUnstyled = React35.forwardRef(function OptionGroupUnstyled2(props, ref) {
  var _componentsProps$root, _componentsProps$labe, _componentsProps$list;
  const {
    className,
    component,
    components = {},
    disabled = false,
    componentsProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const Root = component || (components == null ? void 0 : components.Root) || "li";
  const Label = (components == null ? void 0 : components.Label) || "span";
  const List = (components == null ? void 0 : components.List) || "ul";
  const classes = useUtilityClasses6(disabled);
  const rootProps = _extends({}, other, {
    ref
  }, componentsProps.root, {
    className: clsx_m_default(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  });
  const labelProps = _extends({}, componentsProps.label, {
    className: clsx_m_default(classes.label, (_componentsProps$labe = componentsProps.label) == null ? void 0 : _componentsProps$labe.className)
  });
  const listProps = _extends({}, componentsProps.list, {
    className: clsx_m_default(classes.list, (_componentsProps$list = componentsProps.list) == null ? void 0 : _componentsProps$list.className)
  });
  return _jsxs6(Root, _extends({}, rootProps, {
    children: [_jsx13(Label, _extends({}, labelProps, {
      children: props.label
    })), _jsx13(List, _extends({}, listProps, {
      children: props.children
    }))]
  }));
});
true ? OptionGroupUnstyled.propTypes = {
  children: import_prop_types17.default.node,
  className: import_prop_types17.default.string,
  component: import_prop_types17.default.elementType,
  components: import_prop_types17.default.shape({
    Label: import_prop_types17.default.elementType,
    List: import_prop_types17.default.elementType,
    Root: import_prop_types17.default.elementType
  }),
  componentsProps: import_prop_types17.default.shape({
    label: import_prop_types17.default.object,
    list: import_prop_types17.default.object,
    root: import_prop_types17.default.object
  }),
  disabled: import_prop_types17.default.bool,
  label: import_prop_types17.default.node
} : void 0;

// ../../node_modules/@mui/base/OptionGroupUnstyled/OptionGroupUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/OptionUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.js
init_define_process();
import React36 from "/react.mjs";
var import_prop_types18 = __toESM(require_prop_types());

// ../../node_modules/@mui/base/OptionUnstyled/optionUnstyledClasses.js
init_define_process();
function getOptionUnstyledUtilityClass(slot) {
  return generateUtilityClass("MuiOptionUnstyled", slot);
}
var optionUnstyledClasses = generateUtilityClasses("MuiOptionUnstyled", ["root", "disabled", "selected", "highlighted"]);

// ../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.js
import { jsx as _jsx14 } from "/react.mjs";
var _excluded12 = ["children", "className", "component", "components", "componentsProps", "disabled", "value", "label"];
function useUtilityClasses7(ownerState) {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", highlighted && "highlighted", selected && "selected"]
  };
  return composeClasses(slots, getOptionUnstyledUtilityClass, {});
}
var OptionUnstyled = React36.forwardRef(function OptionUnstyled2(props, ref) {
  var _componentsProps$root;
  const {
    children: children2,
    className,
    component,
    components = {},
    componentsProps = {},
    disabled,
    value,
    label
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const selectContext = React36.useContext(SelectUnstyledContext);
  if (!selectContext) {
    throw new Error("OptionUnstyled must be used within a SelectUnstyled");
  }
  const Root = component || components.Root || "li";
  const selectOption = {
    value,
    label: label || children2,
    disabled
  };
  const optionState = selectContext.getOptionState(selectOption);
  const optionProps = selectContext.getOptionProps(selectOption);
  const listboxRef = selectContext.listboxRef;
  const ownerState = _extends({}, props, optionState);
  const optionRef = React36.useRef(null);
  const handleRef = useForkRef(ref, optionRef);
  React36.useEffect(() => {
    if (optionState.highlighted) {
      if (!listboxRef.current || !optionRef.current) {
        return;
      }
      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();
      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [optionState.highlighted, listboxRef]);
  const classes = useUtilityClasses7(ownerState);
  const rootProps = appendOwnerState(Root, _extends({}, other, optionProps, componentsProps.root, {
    ref: handleRef,
    className: clsx_m_default(classes.root, className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className)
  }), ownerState);
  return _jsx14(Root, _extends({}, rootProps, {
    children: children2
  }));
});
true ? OptionUnstyled.propTypes = {
  children: import_prop_types18.default.node,
  className: import_prop_types18.default.string,
  component: import_prop_types18.default.elementType,
  components: import_prop_types18.default.shape({
    Root: import_prop_types18.default.elementType
  }),
  componentsProps: import_prop_types18.default.shape({
    root: import_prop_types18.default.object
  }),
  disabled: import_prop_types18.default.bool,
  label: import_prop_types18.default.string,
  value: import_prop_types18.default.any.isRequired
} : void 0;
var OptionUnstyled_default = React36.memo(OptionUnstyled);

// ../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/SelectUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/SelectUnstyled/SelectUnstyled.js
init_define_process();
var import_prop_types19 = __toESM(require_prop_types());
import * as React37 from "/react.mjs";
import { jsx as _jsx15 } from "/react.mjs";
import { jsxs as _jsxs7 } from "/react.mjs";
var _excluded13 = ["autoFocus", "children", "className", "component", "components", "componentsProps", "defaultValue", "defaultListboxOpen", "disabled", "listboxOpen", "onChange", "onListboxOpenChange", "renderValue", "value"];
function defaultRenderSingleValue(selectedOption) {
  var _selectedOption$label;
  return (_selectedOption$label = selectedOption == null ? void 0 : selectedOption.label) != null ? _selectedOption$label : "";
}
function useUtilityClasses8(ownerState) {
  const {
    active,
    disabled,
    open: open2,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active", open2 && "expanded"],
    listbox: ["listbox", disabled && "disabled"],
    popper: ["popper"]
  };
  return composeClasses(slots, getSelectUnstyledUtilityClass, {});
}
var SelectUnstyled = React37.forwardRef(function SelectUnstyled2(props, ref) {
  var _ref, _components$Listbox, _components$Popper, _componentsProps$list, _componentsProps$list2, _componentsProps$root, _componentsProps$list3, _componentsProps$popp;
  const {
    autoFocus,
    children: children2,
    className,
    component,
    components = {},
    componentsProps = {},
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledProp,
    listboxOpen: listboxOpenProp,
    onChange,
    onListboxOpenChange,
    renderValue: renderValueProp,
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderSingleValue;
  const [groupedOptions, setGroupedOptions] = React37.useState([]);
  const options = React37.useMemo(() => flattenOptionGroups(groupedOptions), [groupedOptions]);
  const [listboxOpen, setListboxOpen] = useControlled({
    controlled: listboxOpenProp,
    default: defaultListboxOpen,
    name: "SelectUnstyled",
    state: "listboxOpen"
  });
  React37.useEffect(() => {
    setGroupedOptions(getOptionsFromChildren(children2));
  }, [children2]);
  const [buttonDefined, setButtonDefined] = React37.useState(false);
  const buttonRef = React37.useRef(null);
  const listboxRef = React37.useRef(null);
  const Button3 = (_ref = component != null ? component : components.Root) != null ? _ref : "button";
  const ListboxRoot = (_components$Listbox = components.Listbox) != null ? _components$Listbox : "ul";
  const Popper = (_components$Popper = components.Popper) != null ? _components$Popper : PopperUnstyled_default;
  const handleButtonRefChange = (element) => {
    buttonRef.current = element;
    if (element != null) {
      setButtonDefined(true);
    }
  };
  const handleButtonRef = useForkRef(ref, handleButtonRefChange);
  const handleListboxRef = useForkRef(listboxRef, (_componentsProps$list = componentsProps.listbox) == null ? void 0 : _componentsProps$list.ref);
  React37.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const handleOpenChange = (isOpen) => {
    setListboxOpen(isOpen);
    onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
  };
  const {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    value
  } = useSelect_default({
    buttonRef: handleButtonRef,
    defaultValue,
    disabled: disabledProp,
    listboxId: (_componentsProps$list2 = componentsProps.listbox) == null ? void 0 : _componentsProps$list2.id,
    listboxRef: handleListboxRef,
    multiple: false,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpen,
    options,
    value: valueProp
  });
  const ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value
  });
  const classes = useUtilityClasses8(ownerState);
  const selectedOptions = React37.useMemo(() => {
    return options.find((o) => value === o.value);
  }, [options, value]);
  const buttonProps = appendOwnerState(Button3, _extends({}, getButtonProps(), other, componentsProps.root, {
    className: clsx_m_default(className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, classes.root)
  }), ownerState);
  const listboxProps = appendOwnerState(ListboxRoot, _extends({}, getListboxProps(), componentsProps.listbox, {
    className: clsx_m_default((_componentsProps$list3 = componentsProps.listbox) == null ? void 0 : _componentsProps$list3.className, classes.listbox)
  }), ownerState);
  const popperProps = appendOwnerState(Popper, _extends({
    open: listboxOpen,
    anchorEl: buttonRef.current,
    placement: "bottom-start",
    disablePortal: true,
    role: void 0
  }, componentsProps.popper, {
    className: clsx_m_default((_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className, classes.popper)
  }), ownerState);
  const context = {
    getOptionProps,
    getOptionState,
    listboxRef
  };
  return _jsxs7(React37.Fragment, {
    children: [_jsx15(Button3, _extends({}, buttonProps, {
      children: renderValue(selectedOptions)
    })), buttonDefined && _jsx15(Popper, _extends({}, popperProps, {
      children: _jsx15(ListboxRoot, _extends({}, listboxProps, {
        children: _jsx15(SelectUnstyledContext.Provider, {
          value: context,
          children: children2
        })
      }))
    }))]
  });
});
true ? SelectUnstyled.propTypes = {
  autoFocus: import_prop_types19.default.bool,
  children: import_prop_types19.default.node,
  className: import_prop_types19.default.string,
  component: import_prop_types19.default.elementType,
  components: import_prop_types19.default.shape({
    Listbox: import_prop_types19.default.elementType,
    Popper: import_prop_types19.default.elementType,
    Root: import_prop_types19.default.elementType
  }),
  componentsProps: import_prop_types19.default.shape({
    listbox: import_prop_types19.default.object,
    popper: import_prop_types19.default.object,
    root: import_prop_types19.default.object
  }),
  defaultListboxOpen: import_prop_types19.default.bool,
  defaultValue: import_prop_types19.default.any,
  disabled: import_prop_types19.default.bool,
  listboxOpen: import_prop_types19.default.bool,
  onChange: import_prop_types19.default.func,
  onListboxOpenChange: import_prop_types19.default.func,
  renderValue: import_prop_types19.default.func,
  value: import_prop_types19.default.any
} : void 0;

// ../../node_modules/@mui/base/SelectUnstyled/SelectUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/SliderUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/SliderUnstyled/SliderUnstyled.js
init_define_process();
var import_prop_types21 = __toESM(require_prop_types());
import * as React40 from "/react.mjs";

// ../../node_modules/@mui/base/SliderUnstyled/sliderUnstyledClasses.js
init_define_process();
function getSliderUtilityClass(slot) {
  return generateUtilityClass("MuiSlider", slot);
}
var sliderUnstyledClasses = generateUtilityClasses("MuiSlider", ["root", "active", "focusVisible", "disabled", "dragging", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "markLabelActive", "thumb", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel"]);
var sliderUnstyledClasses_default = sliderUnstyledClasses;

// ../../node_modules/@mui/base/SliderUnstyled/SliderValueLabelUnstyled.js
init_define_process();
var import_prop_types20 = __toESM(require_prop_types());
import * as React38 from "/react.mjs";
import { jsx as _jsx16 } from "/react.mjs";
import { jsxs as _jsxs8 } from "/react.mjs";
var useValueLabelClasses = (props) => {
  const {
    open: open2
  } = props;
  const utilityClasses = {
    offset: clsx_m_default(open2 && sliderUnstyledClasses_default.valueLabelOpen),
    circle: sliderUnstyledClasses_default.valueLabelCircle,
    label: sliderUnstyledClasses_default.valueLabelLabel
  };
  return utilityClasses;
};
function SliderValueLabelUnstyled(props) {
  const {
    children: children2,
    className,
    value,
    theme
  } = props;
  const classes = useValueLabelClasses(props);
  return React38.cloneElement(children2, {
    className: clsx_m_default(children2.props.className)
  }, _jsxs8(React38.Fragment, {
    children: [children2.props.children, _jsx16("span", {
      className: clsx_m_default(classes.offset, className),
      theme,
      "aria-hidden": true,
      children: _jsx16("span", {
        className: classes.circle,
        children: _jsx16("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}
true ? SliderValueLabelUnstyled.propTypes = {
  children: import_prop_types20.default.element.isRequired,
  className: import_prop_types20.default.string,
  theme: import_prop_types20.default.any,
  value: import_prop_types20.default.node
} : void 0;

// ../../node_modules/@mui/base/SliderUnstyled/useSlider.js
init_define_process();
import * as React39 from "/react.mjs";
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a, b) {
  return a - b;
}
function clamp(value, min2, max2) {
  if (value == null) {
    return min2;
  }
  return Math.min(Math.max(min2, value), max2);
}
function findClosest(values3, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values3.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
function percentToValue(percent, min2, max2) {
  return (max2 - min2) * percent + min2;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min2) {
  const nearest = Math.round((value - min2) / step) * step + min2;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values: values3,
  newValue,
  index
}) {
  const output = values3.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;
  const doc = ownerDocument(sliderRef.current);
  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null ? void 0 : (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute("data-index")) !== activeIndex) {
    var _sliderRef$current2;
    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
var axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  "horizontal-reverse": {
    offset: (percent) => ({
      right: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`
    }),
    leap: (percent) => ({
      height: `${percent}%`
    })
  }
};
var Identity = (x) => x;
var cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === void 0) {
    if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
      cachedSupportsTouchActionNone = CSS.supports("touch-action", "none");
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
function useSlider(parameters) {
  const {
    "aria-labelledby": ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    ref,
    scale = Identity,
    step = 1,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React39.useRef();
  const [active, setActive] = React39.useState(-1);
  const [open2, setOpen] = React39.useState(-1);
  const [dragging, setDragging] = React39.useState(false);
  const moveCount = React39.useRef(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min2,
    name: "Slider"
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values3 = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values3 = values3.map((value) => clamp(value, min2, max2));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max2 - min2) / step) + 1)].map((_2, index) => ({
    value: min2 + step * index
  })) : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusedThumbIndex, setFocusedThumbIndex] = React39.useState(-1);
  const sliderRef = React39.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);
  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    const index = Number(event.currentTarget.getAttribute("data-index"));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusedThumbIndex(index);
    }
    setOpen(index);
    otherHandlers == null ? void 0 : (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers == null ? void 0 : (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };
  useEnhancedEffect_default(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;
      (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    var _otherHandlers$onChan;
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    const value = values3[index];
    const marksIndex = marksValues.indexOf(value);
    let newValue = event.target.valueAsNumber;
    if (marks && step == null) {
      newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
    }
    newValue = clamp(newValue, min2, max2);
    if (marks && step == null) {
      const currentMarkIndex = marksValues.indexOf(values3[index]);
      newValue = newValue < values3[index] ? marksValues[currentMarkIndex - 1] : marksValues[currentMarkIndex + 1];
    }
    if (range) {
      if (disableSwap) {
        newValue = clamp(newValue, values3[index - 1] || -Infinity, values3[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values: values3,
        newValue,
        index
      });
      let activeIndex = index;
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index);
    if (handleChange) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const previousIndex = React39.useRef();
  let axis = orientation;
  if (isRtl && orientation === "horizontal") {
    axis += "-reverse";
  }
  const getFingerNewValue = ({
    finger,
    move = false,
    values: values22
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width: width2,
      height: height2,
      bottom: bottom3,
      left: left3
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.indexOf("vertical") === 0) {
      percent = (bottom3 - finger.y) / height2;
    } else {
      percent = (finger.x - left3) / width2;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min2, max2);
    if (step) {
      newValue = roundValueToStep(newValue, step, min2);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min2, max2);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values22, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      if (disableSwap) {
        newValue = clamp(newValue, values22[activeIndex - 1] || -Infinity, values22[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values: values22,
        newValue,
        index: activeIndex
      });
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true,
      values: values3
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true,
      values: values3
    });
    setActive(-1);
    if (nativeEvent.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = void 0;
    stopListening();
  });
  const handleTouchStart = useEventCallback((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        values: values3
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove);
    doc.addEventListener("touchend", handleTouchEnd);
  });
  const stopListening = React39.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React39.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener("touchstart", handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React39.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        values: values3
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove);
    doc.addEventListener("mouseup", handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values3[0] : min2, min2, max2);
  const trackLeap = valueToPercent(values3[values3.length - 1], min2, max2) - trackOffset;
  const getRootProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      ref: handleRef
    }, mergedEventHandlers);
  };
  const createHandleMouseOver = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index);
  };
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;
    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(otherHandlers || {}),
      onMouseLeave: createHandleMouseLeave(otherHandlers || {})
    };
    return _extends({}, otherHandlers, ownEventHandlers);
  };
  const getHiddenInputProps = (otherHandlers = {}) => {
    var _parameters$step;
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(otherHandlers || {}),
      onFocus: createHandleHiddenInputFocus(otherHandlers || {}),
      onBlur: createHandleHiddenInputBlur(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      tabIndex,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max2),
      "aria-valuemin": scale(min2),
      name,
      type: "range",
      min: parameters.min,
      max: parameters.max,
      step: (_parameters$step = parameters.step) != null ? _parameters$step : void 0,
      disabled
    }, mergedEventHandlers, {
      style: _extends({}, visuallyHidden_default, {
        direction: isRtl ? "rtl" : "ltr",
        width: "100%",
        height: "100%"
      })
    });
  };
  return {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks,
    open: open2,
    range,
    trackLeap,
    trackOffset,
    values: values3
  };
}

// ../../node_modules/@mui/base/SliderUnstyled/SliderUnstyled.js
import { jsx as _jsx17 } from "/react.mjs";
import { jsxs as _jsxs9 } from "/react.mjs";
var _excluded14 = ["aria-label", "aria-valuetext", "className", "component", "classes", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps"];
var Identity2 = (x) => x;
var useUtilityClasses9 = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse"],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled"],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, getSliderUtilityClass, classes);
};
var Forward = ({
  children: children2
}) => children2;
var SliderUnstyled = React40.forwardRef(function SliderUnstyled2(props, ref) {
  var _ref, _components$Rail, _components$Track, _components$Thumb, _components$ValueLabe, _components$Mark, _components$MarkLabel;
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    className,
    component,
    classes: classesProp,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    orientation = "horizontal",
    scale = Identity2,
    step = 1,
    track = "normal",
    valueLabelDisplay = "off",
    valueLabelFormat = Identity2,
    isRtl = false,
    components = {},
    componentsProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const ownerState = _extends({}, props, {
    marks: marksProp,
    classes: classesProp,
    disabled,
    isRtl,
    max: max2,
    min: min2,
    orientation,
    scale,
    step,
    track,
    valueLabelDisplay,
    valueLabelFormat
  });
  const {
    axisProps: axisProps2,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open: open2,
    active,
    axis,
    range,
    focusedThumbIndex,
    dragging,
    marks,
    values: values3,
    trackOffset,
    trackLeap
  } = useSlider(_extends({}, ownerState, {
    ref
  }));
  ownerState.marked = marks.length > 0 && marks.some((mark) => mark.label);
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;
  const classes = useUtilityClasses9(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    ownerState,
    className: [classes.root, className]
  });
  const Rail = (_components$Rail = components.Rail) != null ? _components$Rail : "span";
  const railProps = useSlotProps({
    elementType: Rail,
    externalSlotProps: componentsProps.rail,
    ownerState,
    className: classes.rail
  });
  const Track = (_components$Track = components.Track) != null ? _components$Track : "span";
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: componentsProps.track,
    additionalProps: {
      style: _extends({}, axisProps2[axis].offset(trackOffset), axisProps2[axis].leap(trackLeap))
    },
    ownerState,
    className: classes.track
  });
  const Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : "span";
  const thumbProps = useSlotProps({
    elementType: Thumb,
    getSlotProps: getThumbProps,
    externalSlotProps: componentsProps.thumb,
    ownerState
  });
  const ValueLabel = (_components$ValueLabe = components.ValueLabel) != null ? _components$ValueLabe : SliderValueLabelUnstyled;
  const valueLabelProps = useSlotProps({
    elementType: ValueLabel,
    externalSlotProps: componentsProps.valueLabel,
    ownerState
  });
  const Mark = (_components$Mark = components.Mark) != null ? _components$Mark : "span";
  const markProps = useSlotProps({
    elementType: Mark,
    externalSlotProps: componentsProps.mark,
    ownerState,
    className: classes.mark
  });
  const MarkLabel = (_components$MarkLabel = components.MarkLabel) != null ? _components$MarkLabel : "span";
  const markLabelProps = useSlotProps({
    elementType: MarkLabel,
    externalSlotProps: componentsProps.markLabel,
    ownerState
  });
  const Input = components.Input || "input";
  const inputProps = useSlotProps({
    elementType: Input,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: componentsProps.input,
    ownerState
  });
  return _jsxs9(Root, _extends({}, rootProps, {
    children: [_jsx17(Rail, _extends({}, railProps)), _jsx17(Track, _extends({}, trackProps)), marks.filter((mark) => mark.value >= min2 && mark.value <= max2).map((mark, index) => {
      const percent = valueToPercent(mark.value, min2, max2);
      const style3 = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values3.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values3[0] && mark.value <= values3[values3.length - 1] : mark.value <= values3[0]) || track === "inverted" && (range ? mark.value <= values3[0] || mark.value >= values3[values3.length - 1] : mark.value >= values3[0]);
      }
      return _jsxs9(React40.Fragment, {
        children: [_jsx17(Mark, _extends({
          "data-index": index
        }, markProps, !isHostComponent_default(Mark) && {
          markActive
        }, {
          style: _extends({}, style3, markProps.style),
          className: clsx_m_default(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? _jsx17(MarkLabel, _extends({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !isHostComponent_default(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: _extends({}, style3, markLabelProps.style),
          className: clsx_m_default(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, mark.value);
    }), values3.map((value, index) => {
      const percent = valueToPercent(value, min2, max2);
      const style3 = axisProps2[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === "off" ? Forward : ValueLabel;
      return _jsx17(React40.Fragment, {
        children: _jsx17(ValueLabelComponent, _extends({}, !isHostComponent_default(ValueLabelComponent) && {
          valueLabelFormat,
          valueLabelDisplay,
          value: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index,
          open: open2 === index || active === index || valueLabelDisplay === "on",
          disabled
        }, valueLabelProps, {
          className: clsx_m_default(classes.valueLabel, valueLabelProps.className),
          children: _jsx17(Thumb, _extends({
            "data-index": index,
            "data-focusvisible": focusedThumbIndex === index
          }, thumbProps, {
            className: clsx_m_default(classes.thumb, thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
            style: _extends({}, style3, {
              pointerEvents: disableSwap && active !== index ? "none" : void 0
            }, thumbProps.style),
            children: _jsx17(Input, _extends({
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values3[index]
            }, inputProps))
          }))
        }))
      }, index);
    })]
  }));
});
true ? SliderUnstyled.propTypes = {
  "aria-label": chainPropTypes(import_prop_types21.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  "aria-labelledby": import_prop_types21.default.string,
  "aria-valuetext": chainPropTypes(import_prop_types21.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  children: import_prop_types21.default.node,
  classes: import_prop_types21.default.object,
  className: import_prop_types21.default.string,
  component: import_prop_types21.default.elementType,
  components: import_prop_types21.default.shape({
    Input: import_prop_types21.default.elementType,
    Mark: import_prop_types21.default.elementType,
    MarkLabel: import_prop_types21.default.elementType,
    Rail: import_prop_types21.default.elementType,
    Root: import_prop_types21.default.elementType,
    Thumb: import_prop_types21.default.elementType,
    Track: import_prop_types21.default.elementType,
    ValueLabel: import_prop_types21.default.elementType
  }),
  componentsProps: import_prop_types21.default.shape({
    input: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    mark: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    markLabel: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    rail: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    root: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    thumb: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    track: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object]),
    valueLabel: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.shape({
      children: import_prop_types21.default.element,
      className: import_prop_types21.default.string,
      components: import_prop_types21.default.shape({
        Root: import_prop_types21.default.elementType
      }),
      open: import_prop_types21.default.bool,
      style: import_prop_types21.default.object,
      value: import_prop_types21.default.number,
      valueLabelDisplay: import_prop_types21.default.oneOf(["auto", "off", "on"])
    })])
  }),
  defaultValue: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.number), import_prop_types21.default.number]),
  disabled: import_prop_types21.default.bool,
  disableSwap: import_prop_types21.default.bool,
  getAriaLabel: import_prop_types21.default.func,
  getAriaValueText: import_prop_types21.default.func,
  isRtl: import_prop_types21.default.bool,
  marks: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.shape({
    label: import_prop_types21.default.node,
    value: import_prop_types21.default.number.isRequired
  })), import_prop_types21.default.bool]),
  max: import_prop_types21.default.number,
  min: import_prop_types21.default.number,
  name: import_prop_types21.default.string,
  onChange: import_prop_types21.default.func,
  onChangeCommitted: import_prop_types21.default.func,
  orientation: import_prop_types21.default.oneOf(["horizontal", "vertical"]),
  scale: import_prop_types21.default.func,
  step: import_prop_types21.default.number,
  tabIndex: import_prop_types21.default.number,
  track: import_prop_types21.default.oneOf(["inverted", "normal", false]),
  value: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.number), import_prop_types21.default.number]),
  valueLabelDisplay: import_prop_types21.default.oneOf(["auto", "off", "on"]),
  valueLabelFormat: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.string])
} : void 0;
var SliderUnstyled_default = SliderUnstyled;

// ../../node_modules/@mui/base/SwitchUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/SwitchUnstyled/SwitchUnstyled.js
init_define_process();
var import_prop_types22 = __toESM(require_prop_types());
import * as React42 from "/react.mjs";

// ../../node_modules/@mui/base/SwitchUnstyled/useSwitch.js
init_define_process();
import * as React41 from "/react.mjs";
function useSwitch(props) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "Switch",
    state: "checked"
  });
  const createHandleInputChange = (otherProps) => (event) => {
    var _otherProps$onChange;
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    setCheckedState(event.target.checked);
    onChange == null ? void 0 : onChange(event);
    (_otherProps$onChange = otherProps.onChange) == null ? void 0 : _otherProps$onChange.call(otherProps, event);
  };
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React41.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React41.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const inputRef = React41.useRef(null);
  const createHandleFocus = (otherProps) => (event) => {
    var _otherProps$onFocus;
    if (!inputRef.current) {
      inputRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      onFocusVisible == null ? void 0 : onFocusVisible(event);
    }
    onFocus == null ? void 0 : onFocus(event);
    (_otherProps$onFocus = otherProps.onFocus) == null ? void 0 : _otherProps$onFocus.call(otherProps, event);
  };
  const createHandleBlur = (otherProps) => (event) => {
    var _otherProps$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    onBlur == null ? void 0 : onBlur(event);
    (_otherProps$onBlur = otherProps.onBlur) == null ? void 0 : _otherProps$onBlur.call(otherProps, event);
  };
  const handleRefChange = useForkRef(focusVisibleRef, inputRef);
  const getInputProps = (otherProps = {}) => _extends({
    checked: checkedProp,
    defaultChecked,
    disabled,
    readOnly,
    ref: handleRefChange,
    required,
    type: "checkbox"
  }, otherProps, {
    onChange: createHandleInputChange(otherProps),
    onFocus: createHandleFocus(otherProps),
    onBlur: createHandleBlur(otherProps)
  });
  return {
    checked,
    disabled: Boolean(disabled),
    focusVisible,
    getInputProps,
    readOnly: Boolean(readOnly)
  };
}

// ../../node_modules/@mui/base/SwitchUnstyled/switchUnstyledClasses.js
init_define_process();
function getSwitchUnstyledUtilityClass(slot) {
  return generateUtilityClass("MuiSwitch", slot);
}
var switchUnstyledClasses = generateUtilityClasses("MuiSwitch", ["root", "input", "track", "thumb", "checked", "disabled", "focusVisible", "readOnly"]);

// ../../node_modules/@mui/base/SwitchUnstyled/SwitchUnstyled.js
import { jsx as _jsx18 } from "/react.mjs";
import { jsxs as _jsxs10 } from "/react.mjs";
var _excluded15 = ["checked", "component", "components", "componentsProps", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required"];
var useUtilityClasses10 = (ownerState) => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", readOnly && "readOnly"],
    thumb: ["thumb"],
    input: ["input"],
    track: ["track"]
  };
  return composeClasses(slots, getSwitchUnstyledUtilityClass, {});
};
var SwitchUnstyled = React42.forwardRef(function SwitchUnstyled2(props, ref) {
  var _ref, _components$Thumb, _components$Input, _components$Track;
  const {
    checked: checkedProp,
    component,
    components = {},
    componentsProps = {},
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const useSwitchProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = useSwitch(useSwitchProps);
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly
  });
  const classes = useUtilityClasses10(ownerState);
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
  const Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : "span";
  const thumbProps = useSlotProps({
    elementType: Thumb,
    externalSlotProps: componentsProps.thumb,
    ownerState,
    className: classes.thumb
  });
  const Input = (_components$Input = components.Input) != null ? _components$Input : "input";
  const inputProps = useSlotProps({
    elementType: Input,
    getSlotProps: getInputProps,
    externalSlotProps: componentsProps.input,
    ownerState,
    className: classes.input
  });
  const Track = components.Track === null ? () => null : (_components$Track = components.Track) != null ? _components$Track : "span";
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: componentsProps.track,
    ownerState,
    className: classes.track
  });
  return _jsxs10(Root, _extends({}, rootProps, {
    children: [_jsx18(Track, _extends({}, trackProps)), _jsx18(Thumb, _extends({}, thumbProps)), _jsx18(Input, _extends({}, inputProps))]
  }));
});
true ? SwitchUnstyled.propTypes = {
  checked: import_prop_types22.default.bool,
  component: import_prop_types22.default.elementType,
  components: import_prop_types22.default.shape({
    Input: import_prop_types22.default.elementType,
    Root: import_prop_types22.default.elementType,
    Thumb: import_prop_types22.default.elementType,
    Track: import_prop_types22.default.oneOfType([import_prop_types22.default.elementType, import_prop_types22.default.oneOf([null])])
  }),
  componentsProps: import_prop_types22.default.shape({
    input: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    root: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    thumb: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    track: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object])
  }),
  defaultChecked: import_prop_types22.default.bool,
  disabled: import_prop_types22.default.bool,
  onBlur: import_prop_types22.default.func,
  onChange: import_prop_types22.default.func,
  onFocus: import_prop_types22.default.func,
  onFocusVisible: import_prop_types22.default.func,
  readOnly: import_prop_types22.default.bool,
  required: import_prop_types22.default.bool
} : void 0;

// ../../node_modules/@mui/base/SwitchUnstyled/SwitchUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/SwitchUnstyled/useSwitch.types.js
init_define_process();

// ../../node_modules/@mui/base/TabPanelUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/TabPanelUnstyled/TabPanelUnstyled.js
init_define_process();
var import_prop_types24 = __toESM(require_prop_types());
import * as React46 from "/react.mjs";

// ../../node_modules/@mui/base/TabPanelUnstyled/tabPanelUnstyledClasses.js
init_define_process();
function getTabPanelUnstyledUtilityClass(slot) {
  return generateUtilityClass("TabPanelUnstyled", slot);
}
var tabPanelUnstyledClasses = generateUtilityClasses("TabPanelUnstyled", ["root", "hidden"]);

// ../../node_modules/@mui/base/TabPanelUnstyled/useTabPanel.js
init_define_process();

// ../../node_modules/@mui/base/TabsUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/TabsUnstyled/TabsUnstyled.js
init_define_process();
var import_prop_types23 = __toESM(require_prop_types());
import * as React45 from "/react.mjs";

// ../../node_modules/@mui/base/TabsUnstyled/tabsUnstyledClasses.js
init_define_process();
function getTabsUnstyledUtilityClass(slot) {
  return generateUtilityClass("TabsUnstyled", slot);
}
var tabsUnstyledClasses = generateUtilityClasses("TabsUnstyled", ["root", "horizontal", "vertical"]);

// ../../node_modules/@mui/base/TabsUnstyled/useTabs.js
init_define_process();
import * as React43 from "/react.mjs";
var useTabs = (parameters) => {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation,
    direction,
    selectionFollowsFocus
  } = parameters;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Tabs",
    state: "value"
  });
  const idPrefix = useId2();
  const onSelected = React43.useCallback((e, newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(e, newValue);
    }
  }, [onChange, setValue]);
  const tabsContextValue = React43.useMemo(() => {
    return {
      idPrefix,
      value,
      onSelected,
      orientation,
      direction,
      selectionFollowsFocus
    };
  }, [idPrefix, value, onSelected, orientation, direction, selectionFollowsFocus]);
  return {
    tabsContextValue
  };
};
var useTabs_default = useTabs;

// ../../node_modules/@mui/base/TabsUnstyled/TabsContext.js
init_define_process();
import * as React44 from "/react.mjs";
var Context = React44.createContext(null);
if (true) {
  Context.displayName = "TabsContext";
}
function useTabContext() {
  return React44.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-T-${value}`;
}
var TabsContext_default = Context;

// ../../node_modules/@mui/base/TabsUnstyled/TabsUnstyled.js
import { jsx as _jsx19 } from "/react.mjs";
var _excluded16 = ["children", "className", "value", "defaultValue", "orientation", "direction", "component", "components", "componentsProps", "onChange", "selectionFollowsFocus"];
var useUtilityClasses11 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, getTabsUnstyledUtilityClass, {});
};
var TabsUnstyled = React45.forwardRef((props, ref) => {
  var _ref, _componentsProps$root;
  const {
    children: children2,
    className,
    orientation = "horizontal",
    direction = "ltr",
    component,
    components = {},
    componentsProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const {
    tabsContextValue
  } = useTabs_default(props);
  const ownerState = _extends({}, props, {
    orientation,
    direction
  });
  const classes = useUtilityClasses11(ownerState);
  const TabsRoot = (_ref = component != null ? component : components.Root) != null ? _ref : "div";
  const tabsRootProps = appendOwnerState(TabsRoot, _extends({}, other, componentsProps.root, {
    ref,
    className: clsx_m_default(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className)
  }), ownerState);
  return _jsx19(TabsRoot, _extends({}, tabsRootProps, {
    children: _jsx19(TabsContext_default.Provider, {
      value: tabsContextValue,
      children: children2
    })
  }));
});
true ? TabsUnstyled.propTypes = {
  children: import_prop_types23.default.node,
  className: import_prop_types23.default.string,
  component: import_prop_types23.default.elementType,
  components: import_prop_types23.default.shape({
    Root: import_prop_types23.default.elementType
  }),
  componentsProps: import_prop_types23.default.shape({
    root: import_prop_types23.default.object
  }),
  defaultValue: import_prop_types23.default.oneOfType([import_prop_types23.default.oneOf([false]), import_prop_types23.default.number, import_prop_types23.default.string]),
  direction: import_prop_types23.default.oneOf(["ltr", "rtl"]),
  onChange: import_prop_types23.default.func,
  orientation: import_prop_types23.default.oneOf(["horizontal", "vertical"]),
  selectionFollowsFocus: import_prop_types23.default.bool,
  value: import_prop_types23.default.oneOfType([import_prop_types23.default.oneOf([false]), import_prop_types23.default.number, import_prop_types23.default.string])
} : void 0;

// ../../node_modules/@mui/base/TabsUnstyled/TabsUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/TabPanelUnstyled/useTabPanel.js
var useTabPanel = (parameters) => {
  const {
    value
  } = parameters;
  const context = useTabContext();
  if (context === null) {
    throw new Error("No TabContext provided");
  }
  const hidden = value !== context.value;
  const id = getPanelId(context, value);
  const tabId = getTabId(context, value);
  const getRootProps = () => {
    return {
      "aria-labelledby": tabId != null ? tabId : void 0,
      hidden,
      id: id != null ? id : void 0
    };
  };
  return {
    hidden,
    getRootProps
  };
};
var useTabPanel_default = useTabPanel;

// ../../node_modules/@mui/base/TabPanelUnstyled/TabPanelUnstyled.js
import { jsx as _jsx20 } from "/react.mjs";
var _excluded17 = ["children", "className", "value", "components", "componentsProps", "component"];
var useUtilityClasses12 = (ownerState) => {
  const {
    hidden
  } = ownerState;
  const slots = {
    root: ["root", hidden && "hidden"]
  };
  return composeClasses(slots, getTabPanelUnstyledUtilityClass, {});
};
var TabPanelUnstyled = React46.forwardRef(function TabPanelUnstyled2(props, ref) {
  var _ref, _componentsProps$root;
  const {
    children: children2,
    className,
    components = {},
    componentsProps = {},
    component
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const {
    hidden,
    getRootProps
  } = useTabPanel_default(props);
  const ownerState = _extends({}, props, {
    hidden
  });
  const classes = useUtilityClasses12(ownerState);
  const TabPanelRoot = (_ref = component != null ? component : components.Root) != null ? _ref : "div";
  const tabPanelRootProps = appendOwnerState(TabPanelRoot, _extends({}, getRootProps(), {
    role: "tabpanel"
  }, other, componentsProps.root, {
    ref,
    className: clsx_m_default(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className)
  }), ownerState);
  return _jsx20(TabPanelRoot, _extends({}, tabPanelRootProps, {
    children: !hidden && children2
  }));
});
true ? TabPanelUnstyled.propTypes = {
  children: import_prop_types24.default.node,
  className: import_prop_types24.default.string,
  component: import_prop_types24.default.elementType,
  components: import_prop_types24.default.shape({
    Root: import_prop_types24.default.elementType
  }),
  componentsProps: import_prop_types24.default.shape({
    root: import_prop_types24.default.object
  }),
  value: import_prop_types24.default.oneOfType([import_prop_types24.default.number, import_prop_types24.default.string]).isRequired
} : void 0;

// ../../node_modules/@mui/base/TabPanelUnstyled/TabPanelUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/TabsListUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/TabsListUnstyled/TabsListUnstyled.js
init_define_process();
var import_prop_types25 = __toESM(require_prop_types());
import * as React48 from "/react.mjs";

// ../../node_modules/@mui/base/TabsListUnstyled/tabsListUnstyledClasses.js
init_define_process();
function getTabsListUnstyledUtilityClass(slot) {
  return generateUtilityClass("TabsListUnstyled", slot);
}
var tabsListUnstyledClasses = generateUtilityClasses("TabsListUnstyled", ["root", "horizontal", "vertical"]);

// ../../node_modules/@mui/base/TabsListUnstyled/useTabsList.js
init_define_process();
import * as React47 from "/react.mjs";
var import_react_is2 = __toESM(require_react_is2());
var nextItem = (list, item) => {
  if (!list) {
    return null;
  }
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return list.firstChild;
};
var previousItem = (list, item) => {
  if (!list) {
    return null;
  }
  if (list === item) {
    return list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return list.lastChild;
};
var moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);
  while (list && nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};
var useTabsList = (parameters) => {
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    children: children2,
    ref
  } = parameters;
  const tabsListRef = React47.createRef();
  const handleRef = useForkRef(tabsListRef, ref);
  const context = useTabContext();
  if (context === null) {
    throw new Error("No TabContext provided");
  }
  const {
    value,
    orientation = "horizontal",
    direction = "ltr"
  } = context;
  const isRtl = direction === "rtl";
  const handleKeyDown3 = (event) => {
    const list = tabsListRef.current;
    const currentFocus = ownerDocument(list).activeElement;
    const role = currentFocus == null ? void 0 : currentFocus.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (orientation === "horizontal" && isRtl) {
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }
    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;
      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;
      case "End":
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
      default:
        break;
    }
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    handleKeyDown3(event);
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    const ownEventHandlers = {
      onKeyDown: createHandleKeyDown(externalEventHandlers)
    };
    const mergedEventHandlers = _extends({}, externalEventHandlers, ownEventHandlers);
    return _extends({
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-orientation": orientation === "vertical" ? "vertical" : void 0,
      role: "tablist",
      ref: handleRef
    }, mergedEventHandlers);
  };
  const processChildren = React47.useCallback(() => {
    const valueToIndex = /* @__PURE__ */ new Map();
    let childIndex = 0;
    const processedChildren = React47.Children.map(children2, (child) => {
      if (!React47.isValidElement(child)) {
        return null;
      }
      if (true) {
        if ((0, import_react_is2.isFragment)(child)) {
          console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
        }
      }
      const childValue = child.props.value === void 0 ? childIndex : child.props.value;
      valueToIndex.set(childValue, childIndex);
      childIndex += 1;
      return React47.cloneElement(child, _extends({
        value: childValue
      }, childIndex === 1 && value === false && !child.props.tabIndex || value === childValue ? {
        tabIndex: 0
      } : {
        tabIndex: -1
      }));
    });
    return processedChildren;
  }, [children2, value]);
  return {
    isRtl,
    orientation,
    value,
    processChildren,
    getRootProps
  };
};
var useTabsList_default = useTabsList;

// ../../node_modules/@mui/base/TabsListUnstyled/TabsListUnstyled.js
import { jsx as _jsx21 } from "/react.mjs";
var _excluded18 = ["className", "children", "component", "components", "componentsProps"];
var useUtilityClasses13 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, getTabsListUnstyledUtilityClass, {});
};
var TabsListUnstyled = React48.forwardRef((props, ref) => {
  var _ref, _componentsProps$root;
  const {
    className,
    component,
    components = {},
    componentsProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const {
    isRtl,
    orientation,
    getRootProps,
    processChildren
  } = useTabsList_default(_extends({}, props, {
    ref
  }));
  const ownerState = _extends({}, props, {
    isRtl,
    orientation
  });
  const classes = useUtilityClasses13(ownerState);
  const TabsListRoot = (_ref = component != null ? component : components.Root) != null ? _ref : "div";
  const tabsListRootProps = appendOwnerState(TabsListRoot, _extends({}, getRootProps(), other, componentsProps.root, {
    className: clsx_m_default(className, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, classes.root)
  }), ownerState);
  const processedChildren = processChildren();
  return _jsx21(TabsListRoot, _extends({}, tabsListRootProps, {
    children: processedChildren
  }));
});
true ? TabsListUnstyled.propTypes = {
  children: import_prop_types25.default.node,
  className: import_prop_types25.default.string,
  component: import_prop_types25.default.elementType,
  components: import_prop_types25.default.shape({
    Root: import_prop_types25.default.elementType
  }),
  componentsProps: import_prop_types25.default.shape({
    root: import_prop_types25.default.object
  })
} : void 0;

// ../../node_modules/@mui/base/TabsListUnstyled/TabsListUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/TabsListUnstyled/useTabsList.types.js
init_define_process();

// ../../node_modules/@mui/base/TabUnstyled/index.js
init_define_process();

// ../../node_modules/@mui/base/TabUnstyled/TabUnstyled.js
init_define_process();
var import_prop_types26 = __toESM(require_prop_types());
import * as React49 from "/react.mjs";

// ../../node_modules/@mui/base/TabUnstyled/tabUnstyledClasses.js
init_define_process();
function getTabUnstyledUtilityClass(slot) {
  return generateUtilityClass("TabUnstyled", slot);
}
var tabUnstyledClasses = generateUtilityClasses("TabUnstyled", ["root", "selected", "disabled"]);

// ../../node_modules/@mui/base/TabUnstyled/useTab.js
init_define_process();
var _excluded19 = ["getRootProps"];
var useTab = (parameters) => {
  var _getPanelId, _getTabId;
  const {
    value: valueProp,
    onChange,
    onClick,
    onFocus
  } = parameters;
  const _useButton = useButton(parameters), {
    getRootProps: getRootPropsButton
  } = _useButton, otherButtonProps = _objectWithoutPropertiesLoose(_useButton, _excluded19);
  const context = useTabContext();
  if (context === null) {
    throw new Error("No TabContext provided");
  }
  const value = valueProp != null ? valueProp : 0;
  const selected = context.value === value;
  const selectionFollowsFocus = context.selectionFollowsFocus;
  const a11yAttributes = {
    role: "tab",
    "aria-controls": (_getPanelId = getPanelId(context, value)) != null ? _getPanelId : void 0,
    id: (_getTabId = getTabId(context, value)) != null ? _getTabId : void 0,
    "aria-selected": selected,
    disabled: otherButtonProps.disabled
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (selectionFollowsFocus && !selected) {
      if (onChange) {
        onChange(event, value);
      }
      context.onSelected(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const createHandleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (!selected) {
      if (onChange) {
        onChange(event, value);
      }
      context.onSelected(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const buttonResolvedProps = getRootPropsButton(_extends({}, otherHandlers, {
      onClick: createHandleClick(otherHandlers),
      onFocus: createHandleFocus(otherHandlers)
    }));
    return _extends({}, buttonResolvedProps, a11yAttributes);
  };
  return _extends({
    getRootProps
  }, otherButtonProps, {
    selected
  });
};
var useTab_default = useTab;

// ../../node_modules/@mui/base/TabUnstyled/TabUnstyled.js
import { jsx as _jsx22 } from "/react.mjs";
var _excluded20 = ["action", "children", "value", "className", "disabled", "onChange", "onClick", "onFocus", "component", "components", "componentsProps"];
var useUtilityClasses14 = (ownerState) => {
  const {
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled"]
  };
  return composeClasses(slots, getTabUnstyledUtilityClass, {});
};
var TabUnstyled = React49.forwardRef(function TabUnstyled2(props, ref) {
  var _ref, _componentsProps$root;
  const {
    action,
    children: children2,
    className,
    disabled = false,
    component,
    components = {},
    componentsProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const tabRef = React49.useRef();
  const handleRef = useForkRef(tabRef, ref);
  const {
    active,
    focusVisible,
    setFocusVisible,
    selected,
    getRootProps
  } = useTab_default(_extends({}, props, {
    ref: handleRef
  }));
  React49.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      tabRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    active,
    focusVisible,
    disabled,
    selected
  });
  const classes = useUtilityClasses14(ownerState);
  const TabRoot = (_ref = component != null ? component : components.Root) != null ? _ref : "button";
  const tabRootProps = appendOwnerState(TabRoot, _extends({}, getRootProps(), other, componentsProps.root, {
    className: clsx_m_default(classes.root, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.className, className),
    ref
  }), ownerState);
  return _jsx22(TabRoot, _extends({}, tabRootProps, {
    children: children2
  }));
});
true ? TabUnstyled.propTypes = {
  action: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.shape({
    current: import_prop_types26.default.shape({
      focusVisible: import_prop_types26.default.func.isRequired
    })
  })]),
  children: import_prop_types26.default.node,
  className: import_prop_types26.default.string,
  component: import_prop_types26.default.elementType,
  components: import_prop_types26.default.shape({
    Root: import_prop_types26.default.elementType
  }),
  componentsProps: import_prop_types26.default.shape({
    root: import_prop_types26.default.object
  }),
  disabled: import_prop_types26.default.bool,
  onChange: import_prop_types26.default.func,
  onClick: import_prop_types26.default.func,
  onFocus: import_prop_types26.default.func,
  value: import_prop_types26.default.oneOfType([import_prop_types26.default.number, import_prop_types26.default.string])
} : void 0;

// ../../node_modules/@mui/base/TabUnstyled/TabUnstyled.types.js
init_define_process();

// ../../node_modules/@mui/base/TabUnstyled/useTab.types.js
init_define_process();

// ../../node_modules/@mui/base/TextareaAutosize/index.js
init_define_process();

// ../../node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js
init_define_process();
var import_prop_types27 = __toESM(require_prop_types());
import * as React50 from "/react.mjs";
import { flushSync } from "/react.mjs";
import { jsx as _jsx23 } from "/react.mjs";
import { jsxs as _jsxs11 } from "/react.mjs";
var _excluded21 = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}
var styles = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)"
  }
};
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
var TextareaAutosize = React50.forwardRef(function TextareaAutosize2(props, ref) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style: style3,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const {
    current: isControlled
  } = React50.useRef(value != null);
  const inputRef = React50.useRef(null);
  const handleRef = useForkRef(ref, inputRef);
  const shadowRef = React50.useRef(null);
  const renders = React50.useRef(0);
  const [state, setState] = React50.useState({});
  const getUpdatedState = React50.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {};
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing2 = computedStyle["box-sizing"];
    const padding2 = getStyleValue(computedStyle, "padding-bottom") + getStyleValue(computedStyle, "padding-top");
    const border2 = getStyleValue(computedStyle, "border-bottom-width") + getStyleValue(computedStyle, "border-top-width");
    const innerHeight2 = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight2;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing2 === "border-box" ? padding2 + border2 : 0);
    const overflow2 = Math.abs(outerHeight - innerHeight2) <= 1;
    return {
      outerHeightStyle,
      overflow: overflow2
    };
  }, [maxRows, minRows, props.placeholder]);
  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow: overflow2
    } = newState;
    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow2)) {
      renders.current += 1;
      return {
        overflow: overflow2,
        outerHeightStyle
      };
    }
    if (true) {
      if (renders.current === 20) {
        console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join("\n"));
      }
    }
    return prevState;
  };
  const syncHeight = React50.useCallback(() => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }
    setState((prevState) => {
      return updateState(prevState, newState);
    });
  }, [getUpdatedState]);
  const syncHeightWithFlushSycn = () => {
    const newState = getUpdatedState();
    if (isEmpty(newState)) {
      return;
    }
    flushSync(() => {
      setState((prevState) => {
        return updateState(prevState, newState);
      });
    });
  };
  React50.useEffect(() => {
    const handleResize = debounce(() => {
      renders.current = 0;
      if (inputRef.current) {
        syncHeightWithFlushSycn();
      }
    });
    const containerWindow = ownerWindow(inputRef.current);
    containerWindow.addEventListener("resize", handleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(inputRef.current);
    }
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });
  useEnhancedEffect_default(() => {
    syncHeight();
  });
  React50.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = (event) => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return _jsxs11(React50.Fragment, {
    children: [_jsx23("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        overflow: state.overflow ? "hidden" : null
      }, style3)
    }, other)), _jsx23("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles.shadow, style3, {
        padding: 0
      })
    })]
  });
});
true ? TextareaAutosize.propTypes = {
  className: import_prop_types27.default.string,
  maxRows: import_prop_types27.default.oneOfType([import_prop_types27.default.number, import_prop_types27.default.string]),
  minRows: import_prop_types27.default.oneOfType([import_prop_types27.default.number, import_prop_types27.default.string]),
  onChange: import_prop_types27.default.func,
  placeholder: import_prop_types27.default.string,
  style: import_prop_types27.default.object,
  value: import_prop_types27.default.oneOfType([import_prop_types27.default.arrayOf(import_prop_types27.default.string), import_prop_types27.default.number, import_prop_types27.default.string])
} : void 0;

// ../../node_modules/@mui/material/ButtonBase/index.js
init_define_process();

// ../../node_modules/@mui/material/ButtonBase/ButtonBase.js
init_define_process();
var import_prop_types46 = __toESM(require_prop_types());
import * as React71 from "/react.mjs";

// ../../node_modules/@mui/material/styles/styled.js
init_define_process();

// ../../node_modules/@mui/system/esm/index.js
init_define_process();

// ../../node_modules/@mui/styled-engine/index.js
init_define_process();

// ../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
init_define_process();
import "/react.mjs";

// ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js
init_define_process();
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = emotion_memoize_browser_esm_default(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var emotion_is_prop_valid_browser_esm_default = isPropValid;

// ../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
init_define_process();
import * as React51 from "/react.mjs";
import { useContext as useContext4, createElement, Fragment as Fragment9 } from "/react.mjs";
var testOmitPropsOnStringTag = emotion_is_prop_valid_browser_esm_default;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var useInsertionEffect2 = React51["useInsertionEffect"] ? React51["useInsertionEffect"] : function useInsertionEffect3(create) {
  create();
};
function useInsertionEffectMaybe(create) {
  useInsertionEffect2(create);
}
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var Insertion = function Insertion2(_ref) {
  var cache2 = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache2, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function() {
    return insertStyles(cache2, serialized, isStringTag);
  });
  return null;
};
var createStyled = function createStyled2(tag, options) {
  if (true) {
    if (tag === void 0) {
      throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
    }
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      if (args[0][0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles2.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (args[0][i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles2.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache2, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = useContext4(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache2.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache2.registered, mergedProps);
      className += cache2.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return createElement(Fragment9, null, createElement(Insertion, {
        cache: cache2,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && true) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};
var emotion_styled_base_browser_esm_default = createStyled;

// ../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
var tags = [
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
];
var newStyled = emotion_styled_base_browser_esm_default.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var emotion_styled_browser_esm_default = newStyled;

// ../../node_modules/@mui/styled-engine/StyledEngineProvider/index.js
init_define_process();

// ../../node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js
init_define_process();
var import_prop_types28 = __toESM(require_prop_types());
import * as React52 from "/react.mjs";
import { jsx as _jsx24 } from "/react.mjs";
var cache = emotion_cache_browser_esm_default({
  key: "css",
  prepend: true
});
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children: children2
  } = props;
  return injectFirst ? _jsx24(CacheProvider, {
    value: cache,
    children: children2
  }) : children2;
}
true ? StyledEngineProvider.propTypes = {
  children: import_prop_types28.default.node,
  injectFirst: import_prop_types28.default.bool
} : void 0;

// ../../node_modules/@mui/styled-engine/GlobalStyles/index.js
init_define_process();

// ../../node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js
init_define_process();
var import_prop_types29 = __toESM(require_prop_types());
import * as React53 from "/react.mjs";
import { jsx as _jsx25 } from "/react.mjs";
function isEmpty2(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles: styles2,
    defaultTheme: defaultTheme5 = {}
  } = props;
  const globalStyles = typeof styles2 === "function" ? (themeInput) => styles2(isEmpty2(themeInput) ? defaultTheme5 : themeInput) : styles2;
  return _jsx25(Global, {
    styles: globalStyles
  });
}
true ? GlobalStyles.propTypes = {
  defaultTheme: import_prop_types29.default.object,
  styles: import_prop_types29.default.oneOfType([import_prop_types29.default.string, import_prop_types29.default.object, import_prop_types29.default.func])
} : void 0;

// ../../node_modules/@mui/styled-engine/index.js
function styled(tag, options) {
  const stylesFactory = emotion_styled_browser_esm_default(tag, options);
  if (true) {
    return (...styles2) => {
      const component = typeof tag === "string" ? `"${tag}"` : "component";
      if (styles2.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join("\n"));
      } else if (styles2.some((style3) => style3 === void 0)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles2);
    };
  }
  return stylesFactory;
}

// ../../node_modules/@mui/system/esm/borders.js
init_define_process();

// ../../node_modules/@mui/system/esm/responsivePropType.js
init_define_process();
var import_prop_types30 = __toESM(require_prop_types());
var responsivePropType = true ? import_prop_types30.default.oneOfType([import_prop_types30.default.number, import_prop_types30.default.string, import_prop_types30.default.object, import_prop_types30.default.array]) : {};
var responsivePropType_default = responsivePropType;

// ../../node_modules/@mui/system/esm/style.js
init_define_process();

// ../../node_modules/@mui/system/esm/breakpoints.js
init_define_process();
var import_prop_types31 = __toESM(require_prop_types());

// ../../node_modules/@mui/system/esm/merge.js
init_define_process();
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
  });
}
var merge_default = merge;

// ../../node_modules/@mui/system/esm/breakpoints.js
var values = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};
var defaultBreakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style3) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style3);
}

// ../../node_modules/@mui/system/esm/style.js
function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== "string") {
    return null;
  }
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split(".").reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getValue(themeMapping, transform2, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform2) {
    value = transform2(value);
  }
  return value;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform: transform2
  } = options;
  const fn2 = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getValue(themeMapping, transform2, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getValue(themeMapping, transform2, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn2.propTypes = true ? {
    [prop]: responsivePropType_default
  } : {};
  fn2.filterProps = [prop];
  return fn2;
}
var style_default = style;

// ../../node_modules/@mui/system/esm/compose.js
init_define_process();
function compose(...styles2) {
  const handlers = styles2.reduce((acc, style3) => {
    style3.filterProps.forEach((prop) => {
      acc[prop] = style3;
    });
    return acc;
  }, {});
  const fn2 = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge_default(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn2.propTypes = true ? styles2.reduce((acc, style3) => Object.assign(acc, style3.propTypes), {}) : {};
  fn2.filterProps = styles2.reduce((acc, style3) => acc.concat(style3.filterProps), []);
  return fn2;
}
var compose_default = compose;

// ../../node_modules/@mui/system/esm/spacing.js
init_define_process();

// ../../node_modules/@mui/system/esm/memoize.js
init_define_process();
function memoize(fn2) {
  const cache2 = {};
  return (arg) => {
    if (cache2[arg] === void 0) {
      cache2[arg] = fn2(arg);
    }
    return cache2[arg];
  };
}

// ../../node_modules/@mui/system/esm/spacing.js
var properties = {
  m: "margin",
  p: "padding"
};
var directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
var aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
var getCssProperties = memoize((prop) => {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split("");
  const property = properties[a];
  const direction = directions[b] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});
var marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
var paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
var spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === "number") {
    return (abs) => {
      if (typeof abs === "string") {
        return abs;
      }
      if (true) {
        if (typeof abs !== "number") {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (abs) => {
      if (typeof abs === "string") {
        return abs;
      }
      if (true) {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  if (true) {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
  }
  return () => void 0;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8, "spacing");
}
function getValue2(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue2(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style2(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge_default, {});
}
function margin(props) {
  return style2(props, marginKeys);
}
margin.propTypes = true ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style2(props, paddingKeys);
}
padding.propTypes = true ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return style2(props, spacingKeys);
}
spacing.propTypes = true ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;
var spacing_default = spacing;

// ../../node_modules/@mui/system/esm/borders.js
function getBorder(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
var border = style_default({
  prop: "border",
  themeKey: "borders",
  transform: getBorder
});
var borderTop = style_default({
  prop: "borderTop",
  themeKey: "borders",
  transform: getBorder
});
var borderRight = style_default({
  prop: "borderRight",
  themeKey: "borders",
  transform: getBorder
});
var borderBottom = style_default({
  prop: "borderBottom",
  themeKey: "borders",
  transform: getBorder
});
var borderLeft = style_default({
  prop: "borderLeft",
  themeKey: "borders",
  transform: getBorder
});
var borderColor = style_default({
  prop: "borderColor",
  themeKey: "palette"
});
var borderTopColor = style_default({
  prop: "borderTopColor",
  themeKey: "palette"
});
var borderRightColor = style_default({
  prop: "borderRightColor",
  themeKey: "palette"
});
var borderBottomColor = style_default({
  prop: "borderBottomColor",
  themeKey: "palette"
});
var borderLeftColor = style_default({
  prop: "borderLeftColor",
  themeKey: "palette"
});
var borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = true ? {
  borderRadius: responsivePropType_default
} : {};
borderRadius.filterProps = ["borderRadius"];
var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
var borders_default = borders;

// ../../node_modules/@mui/system/esm/display.js
init_define_process();
var displayPrint = style_default({
  prop: "displayPrint",
  cssProperty: false,
  transform: (value) => ({
    "@media print": {
      display: value
    }
  })
});
var displayRaw = style_default({
  prop: "display"
});
var overflow = style_default({
  prop: "overflow"
});
var textOverflow = style_default({
  prop: "textOverflow"
});
var visibility = style_default({
  prop: "visibility"
});
var whiteSpace = style_default({
  prop: "whiteSpace"
});
var display_default = compose_default(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

// ../../node_modules/@mui/system/esm/flexbox.js
init_define_process();
var flexBasis = style_default({
  prop: "flexBasis"
});
var flexDirection = style_default({
  prop: "flexDirection"
});
var flexWrap = style_default({
  prop: "flexWrap"
});
var justifyContent = style_default({
  prop: "justifyContent"
});
var alignItems = style_default({
  prop: "alignItems"
});
var alignContent = style_default({
  prop: "alignContent"
});
var order2 = style_default({
  prop: "order"
});
var flex = style_default({
  prop: "flex"
});
var flexGrow = style_default({
  prop: "flexGrow"
});
var flexShrink = style_default({
  prop: "flexShrink"
});
var alignSelf = style_default({
  prop: "alignSelf"
});
var justifyItems = style_default({
  prop: "justifyItems"
});
var justifySelf = style_default({
  prop: "justifySelf"
});
var flexbox = compose_default(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order2, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
var flexbox_default = flexbox;

// ../../node_modules/@mui/system/esm/grid.js
init_define_process();
var gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
    const styleFromPropValue = (propValue) => ({
      gap: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = true ? {
  gap: responsivePropType_default
} : {};
gap.filterProps = ["gap"];
var columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
    const styleFromPropValue = (propValue) => ({
      columnGap: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = true ? {
  columnGap: responsivePropType_default
} : {};
columnGap.filterProps = ["columnGap"];
var rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
    const styleFromPropValue = (propValue) => ({
      rowGap: getValue2(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = true ? {
  rowGap: responsivePropType_default
} : {};
rowGap.filterProps = ["rowGap"];
var gridColumn = style_default({
  prop: "gridColumn"
});
var gridRow = style_default({
  prop: "gridRow"
});
var gridAutoFlow = style_default({
  prop: "gridAutoFlow"
});
var gridAutoColumns = style_default({
  prop: "gridAutoColumns"
});
var gridAutoRows = style_default({
  prop: "gridAutoRows"
});
var gridTemplateColumns = style_default({
  prop: "gridTemplateColumns"
});
var gridTemplateRows = style_default({
  prop: "gridTemplateRows"
});
var gridTemplateAreas = style_default({
  prop: "gridTemplateAreas"
});
var gridArea = style_default({
  prop: "gridArea"
});
var grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
var grid_default = grid;

// ../../node_modules/@mui/system/esm/palette.js
init_define_process();
var color = style_default({
  prop: "color",
  themeKey: "palette"
});
var bgcolor = style_default({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette"
});
var backgroundColor = style_default({
  prop: "backgroundColor",
  themeKey: "palette"
});
var palette = compose_default(color, bgcolor, backgroundColor);
var palette_default = palette;

// ../../node_modules/@mui/system/esm/positions.js
init_define_process();
var position = style_default({
  prop: "position"
});
var zIndex = style_default({
  prop: "zIndex",
  themeKey: "zIndex"
});
var top2 = style_default({
  prop: "top"
});
var right2 = style_default({
  prop: "right"
});
var bottom2 = style_default({
  prop: "bottom"
});
var left2 = style_default({
  prop: "left"
});
var positions_default = compose_default(position, zIndex, top2, right2, bottom2, left2);

// ../../node_modules/@mui/system/esm/shadows.js
init_define_process();
var boxShadow = style_default({
  prop: "boxShadow",
  themeKey: "shadows"
});
var shadows_default = boxShadow;

// ../../node_modules/@mui/system/esm/sizing.js
init_define_process();
function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width = style_default({
  prop: "width",
  transform
});
var maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
var minWidth = style_default({
  prop: "minWidth",
  transform
});
var height = style_default({
  prop: "height",
  transform
});
var maxHeight = style_default({
  prop: "maxHeight",
  transform
});
var minHeight = style_default({
  prop: "minHeight",
  transform
});
var sizeWidth = style_default({
  prop: "size",
  cssProperty: "width",
  transform
});
var sizeHeight = style_default({
  prop: "size",
  cssProperty: "height",
  transform
});
var boxSizing = style_default({
  prop: "boxSizing"
});
var sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
var sizing_default = sizing;

// ../../node_modules/@mui/system/esm/typography.js
init_define_process();
var fontFamily = style_default({
  prop: "fontFamily",
  themeKey: "typography"
});
var fontSize = style_default({
  prop: "fontSize",
  themeKey: "typography"
});
var fontStyle = style_default({
  prop: "fontStyle",
  themeKey: "typography"
});
var fontWeight = style_default({
  prop: "fontWeight",
  themeKey: "typography"
});
var letterSpacing = style_default({
  prop: "letterSpacing"
});
var textTransform = style_default({
  prop: "textTransform"
});
var lineHeight = style_default({
  prop: "lineHeight"
});
var textAlign = style_default({
  prop: "textAlign"
});
var typographyVariant = style_default({
  prop: "typography",
  cssProperty: false,
  themeKey: "typography"
});
var typography = compose_default(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
var typography_default = typography;

// ../../node_modules/@mui/system/esm/styleFunctionSx/index.js
init_define_process();

// ../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
init_define_process();

// ../../node_modules/@mui/system/esm/getThemeValue.js
init_define_process();
var filterPropsMapping = {
  borders: borders_default.filterProps,
  display: display_default.filterProps,
  flexbox: flexbox_default.filterProps,
  grid: grid_default.filterProps,
  positions: positions_default.filterProps,
  palette: palette_default.filterProps,
  shadows: shadows_default.filterProps,
  sizing: sizing_default.filterProps,
  spacing: spacing_default.filterProps,
  typography: typography_default.filterProps
};
var styleFunctionMapping = {
  borders: borders_default,
  display: display_default,
  flexbox: flexbox_default,
  grid: grid_default,
  positions: positions_default,
  palette: palette_default,
  shadows: shadows_default,
  sizing: sizing_default,
  spacing: spacing_default,
  typography: typography_default
};
var propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach((propName) => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});

// ../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx(styleFunctionMapping2 = styleFunctionMapping) {
  const propToStyleFunction2 = Object.keys(styleFunctionMapping2).reduce((acc, styleFnName) => {
    styleFunctionMapping2[styleFnName].filterProps.forEach((propName) => {
      acc[propName] = styleFunctionMapping2[styleFnName];
    });
    return acc;
  }, {});
  function getThemeValue(prop, value, theme) {
    const inputProps = {
      [prop]: value,
      theme
    };
    const styleFunction = propToStyleFunction2[prop];
    return styleFunction ? styleFunction(inputProps) : {
      [prop]: value
    };
  }
  function styleFunctionSx2(props) {
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null;
    }
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === "function") {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== "object") {
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css2 = emptyBreakpoints;
      Object.keys(sxObject).forEach((styleKey) => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== void 0) {
          if (typeof value === "object") {
            if (propToStyleFunction2[styleKey]) {
              css2 = merge_default(css2, getThemeValue(styleKey, value, theme));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, (x) => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css2[styleKey] = styleFunctionSx2({
                  sx: value,
                  theme
                });
              } else {
                css2 = merge_default(css2, breakpointsValues);
              }
            }
          } else {
            css2 = merge_default(css2, getThemeValue(styleKey, value, theme));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
var styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
var styleFunctionSx_default = styleFunctionSx;

// ../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
init_define_process();
var _excluded24 = ["sx"];
var splitProps = (props) => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach((prop) => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
    sx: inSx
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded24);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === "function") {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }
  return _extends({}, otherProps, {
    sx: finalSx
  });
}

// ../../node_modules/@mui/system/esm/sx/index.js
init_define_process();

// ../../node_modules/@mui/system/esm/sx/sx.js
init_define_process();

// ../../node_modules/@mui/system/esm/Box/index.js
init_define_process();

// ../../node_modules/@mui/system/esm/Box/Box.js
init_define_process();
var import_prop_types33 = __toESM(require_prop_types());

// ../../node_modules/@mui/system/esm/createBox.js
init_define_process();
import * as React57 from "/react.mjs";

// ../../node_modules/@mui/system/esm/useTheme.js
init_define_process();

// ../../node_modules/@mui/system/esm/createTheme/index.js
init_define_process();

// ../../node_modules/@mui/system/esm/createTheme/createTheme.js
init_define_process();

// ../../node_modules/@mui/system/esm/createTheme/createBreakpoints.js
init_define_process();
var _excluded25 = ["values", "unit", "step"];
var sortBreakpointsValues = (values3) => {
  const breakpointsAsArray = Object.keys(values3).map((key) => ({
    key,
    val: values3[key]
  })) || [];
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};
function createBreakpoints(breakpoints) {
  const {
    values: values3 = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded25);
  const sortedValues = sortBreakpointsValues(values3);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values3[key] === "number" ? values3[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values3[key] === "number" ? values3[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start2, end2) {
    const endIndex = keys.indexOf(end2);
    return `@media (min-width:${typeof values3[start2] === "number" ? values3[start2] : start2}${unit}) and (max-width:${(endIndex !== -1 && typeof values3[keys[endIndex]] === "number" ? values3[keys[endIndex]] : end2) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

// ../../node_modules/@mui/system/esm/createTheme/shape.js
init_define_process();
var shape = {
  borderRadius: 4
};
var shape_default = shape;

// ../../node_modules/@mui/system/esm/createTheme/createSpacing.js
init_define_process();
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform2 = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing2 = (...argsInput) => {
    if (true) {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform2(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing2.mui = true;
  return spacing2;
}

// ../../node_modules/@mui/system/esm/createTheme/createTheme.js
var _excluded26 = ["breakpoints", "palette", "spacing", "shape"];
function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded26);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing2 = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing: spacing2,
    shape: _extends({}, shape_default, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}
var createTheme_default = createTheme;

// ../../node_modules/@mui/system/esm/useThemeWithoutDefault.js
init_define_process();

// ../../node_modules/@mui/private-theming/index.js
init_define_process();

// ../../node_modules/@mui/private-theming/ThemeProvider/index.js
init_define_process();

// ../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
init_define_process();
var import_prop_types32 = __toESM(require_prop_types());
import * as React56 from "/react.mjs";

// ../../node_modules/@mui/private-theming/useTheme/ThemeContext.js
init_define_process();
import * as React54 from "/react.mjs";
var ThemeContext2 = React54.createContext(null);
if (true) {
  ThemeContext2.displayName = "ThemeContext";
}
var ThemeContext_default = ThemeContext2;

// ../../node_modules/@mui/private-theming/useTheme/index.js
init_define_process();

// ../../node_modules/@mui/private-theming/useTheme/useTheme.js
init_define_process();
import * as React55 from "/react.mjs";
function useTheme() {
  const theme = React55.useContext(ThemeContext_default);
  if (true) {
    React55.useDebugValue(theme);
  }
  return theme;
}

// ../../node_modules/@mui/private-theming/ThemeProvider/nested.js
init_define_process();
var hasSymbol = typeof Symbol === "function" && Symbol.for;
var nested_default = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";

// ../../node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
import { jsx as _jsx26 } from "/react.mjs";
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    if (true) {
      if (!mergedTheme) {
        console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join("\n"));
      }
    }
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider(props) {
  const {
    children: children2,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();
  if (true) {
    if (outerTheme === null && typeof localTheme === "function") {
      console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  const theme = React56.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested_default] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return _jsx26(ThemeContext_default.Provider, {
    value: theme,
    children: children2
  });
}
true ? ThemeProvider.propTypes = {
  children: import_prop_types32.default.node,
  theme: import_prop_types32.default.oneOfType([import_prop_types32.default.object, import_prop_types32.default.func]).isRequired
} : void 0;
if (true) {
  true ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
}
var ThemeProvider_default = ThemeProvider;

// ../../node_modules/@mui/system/esm/useThemeWithoutDefault.js
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme2(defaultTheme5 = null) {
  const contextTheme = useTheme();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme5 : contextTheme;
}
var useThemeWithoutDefault_default = useTheme2;

// ../../node_modules/@mui/system/esm/useTheme.js
var systemDefaultTheme = createTheme_default();
function useTheme3(defaultTheme5 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme5);
}
var useTheme_default = useTheme3;

// ../../node_modules/@mui/system/esm/createBox.js
import { jsx as _jsx27 } from "/react.mjs";
var _excluded27 = ["className", "component"];
function createBox(options = {}) {
  const {
    defaultTheme: defaultTheme5,
    defaultClassName = "MuiBox-root",
    generateClassName,
    styleFunctionSx: styleFunctionSx2 = styleFunctionSx_default
  } = options;
  const BoxRoot = styled("div")(styleFunctionSx2);
  const Box3 = React57.forwardRef(function Box4(inProps, ref) {
    const theme = useTheme_default(defaultTheme5);
    const _extendSxProp = extendSxProp(inProps), {
      className,
      component = "div"
    } = _extendSxProp, other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded27);
    return _jsx27(BoxRoot, _extends({
      as: component,
      ref,
      className: clsx_m_default(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme
    }, other));
  });
  return Box3;
}

// ../../node_modules/@mui/system/esm/Box/Box.js
var Box = createBox();
true ? Box.propTypes = {
  children: import_prop_types33.default.node,
  component: import_prop_types33.default.elementType,
  sx: import_prop_types33.default.oneOfType([import_prop_types33.default.arrayOf(import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object, import_prop_types33.default.bool])), import_prop_types33.default.func, import_prop_types33.default.object])
} : void 0;

// ../../node_modules/@mui/system/esm/createStyled.js
init_define_process();

// ../../node_modules/@mui/system/esm/propsToClassKey.js
init_define_process();
var _excluded28 = ["variant"];
function isEmpty3(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty3(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty3(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

// ../../node_modules/@mui/system/esm/createStyled.js
var _excluded29 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
var _excluded210 = ["theme"];
var _excluded32 = ["theme"];
function isEmpty4(obj) {
  return Object.keys(obj).length === 0;
}
var getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }
  return null;
};
var getVariantStyles = (name, theme) => {
  let variants = [];
  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }
  const variantsStyles = {};
  variants.forEach((definition) => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};
var variantsResolver = (props, styles2, theme, name) => {
  var _theme$components, _theme$components$nam;
  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;
  if (themeVariants) {
    themeVariants.forEach((themeVariant) => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach((key) => {
        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });
      if (isMatch) {
        variantsStyles.push(styles2[propsToClassKey(themeVariant.props)]);
      }
    });
  }
  return variantsStyles;
};
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
var systemDefaultTheme2 = createTheme_default();
var lowercaseFirstLetter = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function createStyled3(input = {}) {
  const {
    defaultTheme: defaultTheme5 = systemDefaultTheme2,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp,
    styleFunctionSx: styleFunctionSx2 = styleFunctionSx_default
  } = input;
  return (tag, inputOptions = {}) => {
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded29);
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" || false;
    const skipSx = inputSkipSx || false;
    let label;
    if (true) {
      if (componentName) {
        label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
      }
    }
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp2;
    }
    const defaultStyledResolver = styled(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => {
        return typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg ? (_ref) => {
          let {
            theme: themeInput
          } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded210);
          return stylesArg(_extends({
            theme: isEmpty4(themeInput) ? defaultTheme5 : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty4(props.theme) ? defaultTheme5 : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);
          if (styleOverrides) {
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(_extends({}, props, {
                theme
              })) : slotStyle;
            });
            return overridesResolver(props, resolvedStyleOverrides);
          }
          return null;
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty4(props.theme) ? defaultTheme5 : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty4(props.theme) ? defaultTheme5 : props.theme;
          return styleFunctionSx2(_extends({}, props, {
            theme
          }));
        });
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === "function" && styleArg.__emotion_real !== styleArg) {
        transformedStyleArg = (_ref2) => {
          let {
            theme: themeInput
          } = _ref2, other = _objectWithoutPropertiesLoose(_ref2, _excluded32);
          return styleArg(_extends({
            theme: isEmpty4(themeInput) ? defaultTheme5 : themeInput
          }, other));
        };
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (true) {
        let displayName;
        if (componentName) {
          displayName = `${componentName}${componentSlot || ""}`;
        }
        if (displayName === void 0) {
          displayName = `Styled(${getDisplayName(tag)})`;
        }
        Component.displayName = displayName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}

// ../../node_modules/@mui/system/esm/styled.js
init_define_process();
var styled2 = createStyled3();
var styled_default = styled2;

// ../../node_modules/@mui/system/esm/useThemeProps/index.js
init_define_process();

// ../../node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
init_define_process();

// ../../node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
init_define_process();
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}

// ../../node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
function useThemeProps({
  props,
  name,
  defaultTheme: defaultTheme5
}) {
  const theme = useTheme_default(defaultTheme5);
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

// ../../node_modules/@mui/system/esm/colorManipulator.js
init_define_process();
function clamp2(value, min2 = 0, max2 = 1) {
  if (true) {
    if (value < min2 || value > max2) {
      console.error(`MUI: The value provided ${value} is out of range [${min2}, ${max2}].`);
    }
  }
  return Math.min(Math.max(min2, value), max2);
}
function hexToRgb(color2) {
  color2 = color2.slice(1);
  const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
  let colors = color2.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n);
  }
  return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf("(");
  const type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(true ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : formatMuiErrorMessage(9, color2));
  }
  let values3 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === "color") {
    values3 = values3.split(" ");
    colorSpace = values3.shift();
    if (values3.length === 4 && values3[3].charAt(0) === "/") {
      values3[3] = values3[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(true ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values3 = values3.split(",");
  }
  values3 = values3.map((value) => parseFloat(value));
  return {
    type,
    values: values3,
    colorSpace
  };
}
var colorChannel = (color2) => {
  const decomposedColor = decomposeColor(color2);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf("hsl") !== -1 && idx !== 0 ? `${val}%` : val).join(" ");
};
function recomposeColor(color2) {
  const {
    type,
    colorSpace
  } = color2;
  let {
    values: values3
  } = color2;
  if (type.indexOf("rgb") !== -1) {
    values3 = values3.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf("hsl") !== -1) {
    values3[1] = `${values3[1]}%`;
    values3[2] = `${values3[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values3 = `${colorSpace} ${values3.join(" ")}`;
  } else {
    values3 = `${values3.join(", ")}`;
  }
  return `${type}(${values3})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const {
    values: values3
  } = color2;
  const h = values3[0];
  const s = values3[1] / 100;
  const l = values3[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values3[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map((val) => {
    if (color2.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color2, value) {
  color2 = decomposeColor(color2);
  value = clamp2(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  if (color2.type === "color") {
    color2.values[3] = `/${value}`;
  } else {
    color2.values[3] = value;
  }
  return recomposeColor(color2);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp2(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp2(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (255 - color2.values[i]) * coefficient;
    }
  } else if (color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (1 - color2.values[i]) * coefficient;
    }
  }
  return recomposeColor(color2);
}
function emphasize(color2, coefficient = 0.15) {
  return getLuminance(color2) > 0.5 ? darken(color2, coefficient) : lighten(color2, coefficient);
}

// ../../node_modules/@mui/system/esm/ThemeProvider/index.js
init_define_process();

// ../../node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
init_define_process();
var import_prop_types34 = __toESM(require_prop_types());
import * as React58 from "/react.mjs";
import { jsx as _jsx28 } from "/react.mjs";
function InnerThemeProvider(props) {
  const theme = useTheme_default();
  return _jsx28(ThemeContext.Provider, {
    value: typeof theme === "object" ? theme : {},
    children: props.children
  });
}
true ? InnerThemeProvider.propTypes = {
  children: import_prop_types34.default.node
} : void 0;
function ThemeProvider2(props) {
  const {
    children: children2,
    theme: localTheme
  } = props;
  return _jsx28(ThemeProvider_default, {
    theme: localTheme,
    children: _jsx28(InnerThemeProvider, {
      children: children2
    })
  });
}
true ? ThemeProvider2.propTypes = {
  children: import_prop_types34.default.node,
  theme: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]).isRequired
} : void 0;
if (true) {
  true ? ThemeProvider2.propTypes = exactProp(ThemeProvider2.propTypes) : void 0;
}
var ThemeProvider_default2 = ThemeProvider2;

// ../../node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js
init_define_process();
var import_prop_types35 = __toESM(require_prop_types());
import * as React61 from "/react.mjs";

// ../../node_modules/@mui/system/esm/cssVars/cssVarsParser.js
init_define_process();
var assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
  let temp = obj;
  keys.forEach((k, index) => {
    if (index === keys.length - 1) {
      if (Array.isArray(temp)) {
        temp[Number(k)] = value;
      } else if (temp && typeof temp === "object") {
        temp[k] = value;
      }
    } else if (temp && typeof temp === "object") {
      if (!temp[k]) {
        temp[k] = arrayKeys.includes(k) ? [] : {};
      }
      temp = temp[k];
    }
  });
};
var walkObjectDeep = (obj, callback, shouldSkipPaths) => {
  function recurse(object, parentKeys = [], arrayKeys = []) {
    Object.entries(object).forEach(([key, value]) => {
      if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
        if (value !== void 0 && value !== null) {
          if (typeof value === "object" && Object.keys(value).length > 0) {
            recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
          } else {
            callback([...parentKeys, key], value, arrayKeys);
          }
        }
      }
    });
  }
  recurse(obj);
};
var getCssValue = (keys, value) => {
  if (typeof value === "number") {
    if (["lineHeight", "fontWeight", "opacity", "zIndex"].some((prop) => keys.includes(prop))) {
      return value;
    }
    const lastKey = keys[keys.length - 1];
    if (lastKey.toLowerCase().indexOf("opacity") >= 0) {
      return value;
    }
    return `${value}px`;
  }
  return value;
};
function cssVarsParser(theme, options) {
  const {
    prefix,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2
  } = options || {};
  const css2 = {};
  const vars = {};
  const parsedTheme = {};
  walkObjectDeep(theme, (keys, value, arrayKeys) => {
    if (typeof value === "string" || typeof value === "number") {
      if (!shouldSkipGeneratingVar2 || shouldSkipGeneratingVar2 && !shouldSkipGeneratingVar2(keys, value)) {
        const cssVar = `--${prefix ? `${prefix}-` : ""}${keys.join("-")}`;
        Object.assign(css2, {
          [cssVar]: getCssValue(keys, value)
        });
        assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
      }
    }
    assignNestedKeys(parsedTheme, keys, value, arrayKeys);
  }, (keys) => keys[0] === "vars");
  return {
    css: css2,
    vars,
    parsedTheme
  };
}

// ../../node_modules/@mui/system/esm/cssVars/getInitColorSchemeScript.js
init_define_process();
import * as React59 from "/react.mjs";
import { jsx as _jsx29 } from "/react.mjs";
var DEFAULT_MODE_STORAGE_KEY = "mode";
var DEFAULT_COLOR_SCHEME_STORAGE_KEY = "color-scheme";
var DEFAULT_ATTRIBUTE = "data-color-scheme";
function getInitColorSchemeScript(options) {
  const {
    enableColorScheme = true,
    enableSystem = false,
    defaultLightColorScheme = "light",
    defaultDarkColorScheme = "dark",
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    attribute = DEFAULT_ATTRIBUTE,
    colorSchemeNode = "document.documentElement"
  } = options || {};
  return _jsx29("script", {
    dangerouslySetInnerHTML: {
      __html: `(function() { try {
        var mode = localStorage.getItem('${modeStorageKey}');
        var cssColorScheme = mode;
        var colorScheme = '';
        if (mode === 'system' || (!mode && !!${enableSystem})) {
          // handle system mode
          var mql = window.matchMedia('(prefers-color-scheme: dark)');
          if (mql.matches) {
            cssColorScheme = 'dark';
            colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
          } else {
            cssColorScheme = 'light';
            colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
          }
        }
        if (mode === 'light') {
          colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
        }
        if (mode === 'dark') {
          colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
        }
        if (colorScheme) {
          ${colorSchemeNode}.setAttribute('${attribute}', colorScheme);
        }
        if (${enableColorScheme} && !!cssColorScheme) {
          ${colorSchemeNode}.style.setProperty('color-scheme', cssColorScheme);
        }
      } catch (e) {} })();`
    }
  });
}

// ../../node_modules/@mui/system/esm/cssVars/useCurrentColorScheme.js
init_define_process();
import * as React60 from "/react.mjs";
function getSystemMode(mode) {
  if (typeof window !== "undefined" && mode === "system") {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    if (mql.matches) {
      return "dark";
    }
    return "light";
  }
  return void 0;
}
function processState(state, callback) {
  if (state.mode === "light" || state.mode === "system" && state.systemMode === "light") {
    return callback("light");
  }
  if (state.mode === "dark" || state.mode === "system" && state.systemMode === "dark") {
    return callback("dark");
  }
  return void 0;
}
function getColorScheme(state) {
  return processState(state, (mode) => {
    if (mode === "light") {
      return state.lightColorScheme;
    }
    if (mode === "dark") {
      return state.darkColorScheme;
    }
    return void 0;
  });
}
function resolveValue(key, defaultValue) {
  if (typeof window === "undefined") {
    return void 0;
  }
  let value;
  try {
    value = localStorage.getItem(key) || void 0;
  } catch (e) {
  }
  return value || defaultValue;
}
function useCurrentColorScheme(options) {
  const {
    defaultMode = "light",
    defaultLightColorScheme,
    defaultDarkColorScheme,
    supportedColorSchemes = [],
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    storageWindow = typeof window === "undefined" ? void 0 : window
  } = options;
  const joinedColorSchemes = supportedColorSchemes.join(",");
  const [state, setState] = React60.useState(() => {
    const initialMode = resolveValue(modeStorageKey, defaultMode);
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme: resolveValue(`${colorSchemeStorageKey}-light`) || defaultLightColorScheme,
      darkColorScheme: resolveValue(`${colorSchemeStorageKey}-dark`) || defaultDarkColorScheme
    };
  });
  const colorScheme = getColorScheme(state);
  const setMode = React60.useCallback((mode) => {
    setState((currentState) => {
      const newMode = !mode ? defaultMode : mode;
      if (mode === currentState.mode) {
        return currentState;
      }
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(modeStorageKey, newMode);
      }
      return _extends({}, currentState, {
        mode: newMode,
        systemMode: getSystemMode(newMode)
      });
    });
  }, [modeStorageKey, defaultMode]);
  const setColorScheme = React60.useCallback((value) => {
    if (!value || typeof value === "string") {
      if (value && !joinedColorSchemes.includes(value)) {
        console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
      } else {
        setState((currentState) => {
          const newState = _extends({}, currentState);
          if (!value) {
            newState.lightColorScheme = defaultLightColorScheme;
            newState.darkColorScheme = defaultDarkColorScheme;
            return newState;
          }
          processState(currentState, (mode) => {
            localStorage.setItem(`${colorSchemeStorageKey}-${mode}`, value);
            if (mode === "light") {
              newState.lightColorScheme = value;
            }
            if (mode === "dark") {
              newState.darkColorScheme = value;
            }
          });
          return newState;
        });
      }
    } else if (value.light && !joinedColorSchemes.includes(value.light) || value.dark && !joinedColorSchemes.includes(value.dark)) {
      console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
    } else {
      setState((currentState) => {
        const newState = _extends({}, currentState);
        if (value.light || value.light === null) {
          newState.lightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
        }
        if (value.dark || value.dark === null) {
          newState.darkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
        }
        return newState;
      });
      if (value.light) {
        localStorage.setItem(`${colorSchemeStorageKey}-light`, value.light);
      }
      if (value.dark) {
        localStorage.setItem(`${colorSchemeStorageKey}-dark`, value.dark);
      }
    }
  }, [joinedColorSchemes, colorSchemeStorageKey, defaultLightColorScheme, defaultDarkColorScheme]);
  const handleMediaQuery = React60.useCallback((e) => {
    if (state.mode === "system") {
      setState((currentState) => _extends({}, currentState, {
        systemMode: e.matches ? "dark" : "light"
      }));
    }
  }, [state.mode]);
  const mediaListener = React60.useRef(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  React60.useEffect(() => {
    const handler = (...args) => mediaListener.current(...args);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addListener(handler);
    handler(media);
    return () => media.removeListener(handler);
  }, []);
  React60.useEffect(() => {
    if (state.mode) {
      localStorage.setItem(modeStorageKey, state.mode);
    }
    processState(state, (mode) => {
      if (mode === "light") {
        localStorage.setItem(`${colorSchemeStorageKey}-light`, state.lightColorScheme);
      }
      if (mode === "dark") {
        localStorage.setItem(`${colorSchemeStorageKey}-dark`, state.darkColorScheme);
      }
    });
  }, [state, colorSchemeStorageKey, modeStorageKey]);
  React60.useEffect(() => {
    const handleStorage = (event) => {
      const value = event.newValue;
      if (typeof event.key === "string" && event.key.startsWith(colorSchemeStorageKey) && (!value || joinedColorSchemes.match(value))) {
        if (event.key.endsWith("light")) {
          setColorScheme({
            light: value
          });
        }
        if (event.key.endsWith("dark")) {
          setColorScheme({
            dark: value
          });
        }
      }
      if (event.key === modeStorageKey && (!value || ["light", "dark", "system"].includes(value))) {
        setMode(value || defaultMode);
      }
    };
    if (storageWindow) {
      storageWindow.addEventListener("storage", handleStorage);
      return () => storageWindow.removeEventListener("storage", handleStorage);
    }
    return void 0;
  }, [setColorScheme, setMode, modeStorageKey, colorSchemeStorageKey, joinedColorSchemes, defaultMode, storageWindow]);
  return _extends({}, state, {
    colorScheme,
    setMode,
    setColorScheme
  });
}

// ../../node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js
import { jsx as _jsx30 } from "/react.mjs";
import { jsxs as _jsxs12 } from "/react.mjs";
var _excluded30 = ["colorSchemes", "components", "cssVarPrefix"];
var DISABLE_CSS_TRANSITION = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function createCssVarsProvider(options) {
  const {
    theme: defaultTheme5 = {},
    attribute: defaultAttribute = DEFAULT_ATTRIBUTE,
    modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey: defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    defaultMode: desisgnSystemMode = "light",
    defaultColorScheme: designSystemColorScheme,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    enableColorScheme: designSystemEnableColorScheme = true,
    shouldSkipGeneratingVar: designSystemShouldSkipGeneratingVar,
    resolveTheme
  } = options;
  if (!defaultTheme5.colorSchemes || typeof designSystemColorScheme === "string" && !defaultTheme5.colorSchemes[designSystemColorScheme] || typeof designSystemColorScheme === "object" && !defaultTheme5.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || typeof designSystemColorScheme === "object" && !defaultTheme5.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
    console.error(`MUI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
  }
  const ColorSchemeContext = React61.createContext(void 0);
  const useColorScheme2 = () => {
    const value = React61.useContext(ColorSchemeContext);
    if (!value) {
      throw new Error(true ? `MUI: \`useColorScheme\` must be called under <CssVarsProvider />` : formatMuiErrorMessage(19));
    }
    return value;
  };
  function CssVarsProvider2({
    children: children2,
    theme: themeProp = defaultTheme5,
    modeStorageKey = defaultModeStorageKey,
    colorSchemeStorageKey = defaultColorSchemeStorageKey,
    attribute = defaultAttribute,
    defaultMode = desisgnSystemMode,
    defaultColorScheme = designSystemColorScheme,
    disableTransitionOnChange = designSystemTransitionOnChange,
    enableColorScheme = designSystemEnableColorScheme,
    storageWindow = typeof window === "undefined" ? void 0 : window,
    documentNode = typeof document === "undefined" ? void 0 : document,
    colorSchemeNode = typeof document === "undefined" ? void 0 : document.documentElement,
    colorSchemeSelector = ":root",
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2 = designSystemShouldSkipGeneratingVar
  }) {
    const hasMounted = React61.useRef(false);
    const {
      colorSchemes = {},
      components = {},
      cssVarPrefix
    } = themeProp, restThemeProp = _objectWithoutPropertiesLoose(themeProp, _excluded30);
    const allColorSchemes = Object.keys(colorSchemes);
    const defaultLightColorScheme = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.dark;
    const {
      mode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme,
      setColorScheme
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme,
      defaultDarkColorScheme,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageWindow
    });
    const resolvedColorScheme = (() => {
      if (!colorScheme) {
        if (defaultMode === "dark") {
          return defaultDarkColorScheme;
        }
        return defaultLightColorScheme;
      }
      return colorScheme;
    })();
    let theme = restThemeProp;
    const {
      css: rootCss,
      vars: rootVars,
      parsedTheme
    } = cssVarsParser(theme, {
      prefix: cssVarPrefix,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar2
    });
    theme = _extends({}, parsedTheme, {
      components,
      colorSchemes,
      cssVarPrefix,
      vars: rootVars,
      getColorSchemeSelector: (targetColorScheme) => `[${attribute}="${targetColorScheme}"] &`
    });
    const defaultColorSchemeStyleSheet = {};
    const otherColorSchemesStyleSheet = {};
    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      const {
        css: css2,
        vars,
        parsedTheme: parsedScheme
      } = cssVarsParser(scheme, {
        prefix: cssVarPrefix,
        shouldSkipGeneratingVar: shouldSkipGeneratingVar2
      });
      theme.vars = deepmerge(theme.vars, vars);
      if (key === resolvedColorScheme) {
        theme = _extends({}, theme, parsedScheme);
        if (theme.palette) {
          theme.palette.mode = mode;
          theme.palette.colorScheme = resolvedColorScheme;
        }
      }
      const resolvedDefaultColorScheme = (() => {
        if (typeof defaultColorScheme === "string") {
          return defaultColorScheme;
        }
        if (defaultMode === "dark") {
          return defaultColorScheme.dark;
        }
        return defaultColorScheme.light;
      })();
      if (key === resolvedDefaultColorScheme) {
        defaultColorSchemeStyleSheet[colorSchemeSelector] = css2;
      } else {
        otherColorSchemesStyleSheet[`${colorSchemeSelector === ":root" ? "" : colorSchemeSelector}[${attribute}="${key}"]`] = css2;
      }
    });
    React61.useEffect(() => {
      if (colorScheme && colorSchemeNode) {
        colorSchemeNode.setAttribute(attribute, colorScheme);
      }
    }, [colorScheme, attribute, colorSchemeNode]);
    useEnhancedEffect_default(() => {
      if (!mode || !enableColorScheme || !colorSchemeNode) {
        return void 0;
      }
      const priorColorScheme = colorSchemeNode.style.getPropertyValue("color-scheme");
      if (mode === "system") {
        colorSchemeNode.style.setProperty("color-scheme", systemMode);
      } else {
        colorSchemeNode.style.setProperty("color-scheme", mode);
      }
      return () => {
        colorSchemeNode.style.setProperty("color-scheme", priorColorScheme);
      };
    }, [mode, systemMode, enableColorScheme, colorSchemeNode]);
    React61.useEffect(() => {
      let timer;
      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        const css2 = documentNode.createElement("style");
        css2.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css2);
        (() => window.getComputedStyle(documentNode.body))();
        timer = setTimeout(() => {
          documentNode.head.removeChild(css2);
        }, 1);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React61.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    return _jsxs12(ColorSchemeContext.Provider, {
      value: {
        mode,
        setMode,
        lightColorScheme,
        darkColorScheme,
        colorScheme,
        setColorScheme,
        allColorSchemes
      },
      children: [_jsx30(GlobalStyles, {
        styles: {
          [colorSchemeSelector]: rootCss
        }
      }), _jsx30(GlobalStyles, {
        styles: defaultColorSchemeStyleSheet
      }), _jsx30(GlobalStyles, {
        styles: otherColorSchemesStyleSheet
      }), _jsx30(ThemeProvider_default2, {
        theme: resolveTheme ? resolveTheme(theme) : theme,
        children: children2
      })]
    });
  }
  true ? CssVarsProvider2.propTypes = {
    attribute: import_prop_types35.default.string,
    children: import_prop_types35.default.node,
    colorSchemeNode: import_prop_types35.default.any,
    colorSchemeSelector: import_prop_types35.default.string,
    colorSchemeStorageKey: import_prop_types35.default.string,
    defaultColorScheme: import_prop_types35.default.oneOfType([import_prop_types35.default.string, import_prop_types35.default.object]),
    defaultMode: import_prop_types35.default.string,
    disableTransitionOnChange: import_prop_types35.default.bool,
    documentNode: import_prop_types35.default.any,
    enableColorScheme: import_prop_types35.default.bool,
    modeStorageKey: import_prop_types35.default.string,
    shouldSkipGeneratingVar: import_prop_types35.default.func,
    storageWindow: import_prop_types35.default.any,
    theme: import_prop_types35.default.object
  } : void 0;
  const getInitColorSchemeScript3 = (params) => getInitColorSchemeScript(_extends({
    attribute: defaultAttribute,
    colorSchemeStorageKey: defaultColorSchemeStorageKey,
    modeStorageKey: defaultModeStorageKey,
    enableColorScheme: designSystemEnableColorScheme
  }, params));
  return {
    CssVarsProvider: CssVarsProvider2,
    useColorScheme: useColorScheme2,
    getInitColorSchemeScript: getInitColorSchemeScript3
  };
}

// ../../node_modules/@mui/system/esm/cssVars/createGetCssVar.js
init_define_process();
function createGetCssVar(prefix = "") {
  function appendVar(...vars) {
    if (!vars.length) {
      return "";
    }
    const value = vars[0];
    if (typeof value === "string" && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))/)) {
      return `, var(--${prefix ? `${prefix}-` : ""}${value}${appendVar(...vars.slice(1))})`;
    }
    return `, ${value}`;
  }
  const getCssVar = (field, ...fallbacks) => {
    return `var(--${prefix ? `${prefix}-` : ""}${field}${appendVar(...fallbacks)})`;
  };
  return getCssVar;
}

// ../../node_modules/@mui/system/esm/Container/createContainer.js
init_define_process();
var import_prop_types36 = __toESM(require_prop_types());
import * as React62 from "/react.mjs";
import { jsx as _jsx31 } from "/react.mjs";
var _excluded31 = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"];
var defaultTheme = createTheme_default();
var defaultCreateStyledComponent = styled_default("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`maxWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fixed && styles2.fixed, ownerState.disableGutters && styles2.disableGutters];
  }
});
var useThemePropsDefault = (inProps) => useThemeProps({
  props: inProps,
  name: "MuiContainer",
  defaultTheme
});
var useUtilityClasses15 = (ownerState, componentName) => {
  const getContainerUtilityClass = (slot) => {
    return generateUtilityClass(componentName, slot);
  };
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth: maxWidth2
  } = ownerState;
  const slots = {
    root: ["root", maxWidth2 && `maxWidth${capitalize(String(maxWidth2))}`, fixed && "fixed", disableGutters && "disableGutters"]
  };
  return composeClasses(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
  const {
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps: useThemeProps3 = useThemePropsDefault,
    componentName = "MuiContainer"
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => _extends({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !ownerState.disableGutters && {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => _extends({}, ownerState.maxWidth === "xs" && {
    [theme.breakpoints.up("xs")]: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }
  }, ownerState.maxWidth && ownerState.maxWidth !== "xs" && {
    [theme.breakpoints.up(ownerState.maxWidth)]: {
      maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
    }
  }));
  const Container2 = React62.forwardRef(function Container3(inProps, ref) {
    const props = useThemeProps3(inProps);
    const {
      className,
      component = "div",
      disableGutters = false,
      fixed = false,
      maxWidth: maxWidth2 = "lg"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded31);
    const ownerState = _extends({}, props, {
      component,
      disableGutters,
      fixed,
      maxWidth: maxWidth2
    });
    const classes = useUtilityClasses15(ownerState, componentName);
    return _jsx31(ContainerRoot, _extends({
      as: component,
      ownerState,
      className: clsx_m_default(classes.root, className),
      ref
    }, other));
  });
  true ? Container2.propTypes = {
    children: import_prop_types36.default.node,
    classes: import_prop_types36.default.object,
    className: import_prop_types36.default.string,
    component: import_prop_types36.default.elementType,
    disableGutters: import_prop_types36.default.bool,
    fixed: import_prop_types36.default.bool,
    maxWidth: import_prop_types36.default.oneOfType([import_prop_types36.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types36.default.string]),
    sx: import_prop_types36.default.oneOfType([import_prop_types36.default.arrayOf(import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object, import_prop_types36.default.bool])), import_prop_types36.default.func, import_prop_types36.default.object])
  } : void 0;
  return Container2;
}

// ../../node_modules/@mui/system/esm/Container/index.js
init_define_process();

// ../../node_modules/@mui/system/esm/Container/Container.js
init_define_process();
var import_prop_types37 = __toESM(require_prop_types());
var Container = createContainer();
true ? Container.propTypes = {
  children: import_prop_types37.default.node,
  classes: import_prop_types37.default.object,
  component: import_prop_types37.default.elementType,
  disableGutters: import_prop_types37.default.bool,
  fixed: import_prop_types37.default.bool,
  maxWidth: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types37.default.string]),
  sx: import_prop_types37.default.oneOfType([import_prop_types37.default.arrayOf(import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object, import_prop_types37.default.bool])), import_prop_types37.default.func, import_prop_types37.default.object])
} : void 0;

// ../../node_modules/@mui/system/esm/Container/containerClasses.js
init_define_process();
var containerClasses = generateUtilityClasses("MuiContainer", ["root", "disableGutters", "fixed", "maxWidthXs", "maxWidthSm", "maxWidthMd", "maxWidthLg", "maxWidthXl"]);

// ../../node_modules/@mui/material/styles/defaultTheme.js
init_define_process();

// ../../node_modules/@mui/material/styles/createTheme.js
init_define_process();

// ../../node_modules/@mui/material/styles/createMixins.js
init_define_process();
function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}

// ../../node_modules/@mui/material/styles/createPalette.js
init_define_process();

// ../../node_modules/@mui/material/colors/common.js
init_define_process();
var common = {
  black: "#000",
  white: "#fff"
};
var common_default = common;

// ../../node_modules/@mui/material/colors/grey.js
init_define_process();
var grey = {
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
};
var grey_default = grey;

// ../../node_modules/@mui/material/colors/purple.js
init_define_process();
var purple = {
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
};
var purple_default = purple;

// ../../node_modules/@mui/material/colors/red.js
init_define_process();
var red = {
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
};
var red_default = red;

// ../../node_modules/@mui/material/colors/orange.js
init_define_process();
var orange = {
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
};
var orange_default = orange;

// ../../node_modules/@mui/material/colors/blue.js
init_define_process();
var blue = {
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
};
var blue_default = blue;

// ../../node_modules/@mui/material/colors/lightBlue.js
init_define_process();
var lightBlue = {
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
};
var lightBlue_default = lightBlue;

// ../../node_modules/@mui/material/colors/green.js
init_define_process();
var green = {
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
};
var green_default = green;

// ../../node_modules/@mui/material/styles/createPalette.js
var _excluded33 = ["mode", "contrastThreshold", "tonalOffset"];
var light = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common_default.white,
    default: common_default.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: common_default.white,
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
    active: common_default.white,
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
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue_default[200],
      light: blue_default[50],
      dark: blue_default[400]
    };
  }
  return {
    main: blue_default[700],
    light: blue_default[400],
    dark: blue_default[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple_default[200],
      light: purple_default[50],
      dark: purple_default[400]
    };
  }
  return {
    main: purple_default[500],
    light: purple_default[300],
    dark: purple_default[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red_default[500],
      light: red_default[300],
      dark: red_default[700]
    };
  }
  return {
    main: red_default[700],
    light: red_default[400],
    dark: red_default[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue_default[400],
      light: lightBlue_default[300],
      dark: lightBlue_default[700]
    };
  }
  return {
    main: lightBlue_default[700],
    light: lightBlue_default[500],
    dark: lightBlue_default[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green_default[400],
      light: green_default[300],
      dark: green_default[700]
    };
  }
  return {
    main: green_default[800],
    light: green_default[500],
    dark: green_default[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange_default[400],
      light: orange_default[300],
      dark: orange_default[700]
    };
  }
  return {
    main: "#ed6c02",
    light: orange_default[500],
    dark: orange_default[900]
  };
}
function createPalette(palette2) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette2, other = _objectWithoutPropertiesLoose(palette2, _excluded33);
  const primary = palette2.primary || getDefaultPrimary(mode);
  const secondary = palette2.secondary || getDefaultSecondary(mode);
  const error = palette2.error || getDefaultError(mode);
  const info = palette2.info || getDefaultInfo(mode);
  const success = palette2.success || getDefaultSuccess(mode);
  const warning = palette2.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (true) {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color: color2,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty("main")) {
      throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(true ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color2.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  const modes2 = {
    dark,
    light
  };
  if (true) {
    if (!modes2[mode]) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge(_extends({
    common: _extends({}, common_default),
    mode,
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: augmentColor({
      color: error,
      name: "error"
    }),
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    info: augmentColor({
      color: info,
      name: "info"
    }),
    success: augmentColor({
      color: success,
      name: "success"
    }),
    grey: grey_default,
    contrastThreshold,
    getContrastText,
    augmentColor,
    tonalOffset
  }, modes2[mode]), other);
  return paletteOutput;
}

// ../../node_modules/@mui/material/styles/createTypography.js
init_define_process();
var _excluded34 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round2(value) {
  return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = {
  textTransform: "uppercase"
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette2, typography2) {
  const _ref = typeof typography2 === "function" ? typography2(palette2) : typography2, {
    fontFamily: fontFamily2 = defaultFontFamily,
    fontSize: fontSize2 = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    htmlFontSize = 16,
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded34);
  if (true) {
    if (typeof fontSize2 !== "number") {
      console.error("MUI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize !== "number") {
      console.error("MUI: `htmlFontSize` is required to be a number.");
    }
  }
  const coef = fontSize2 / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight2, size, lineHeight2, letterSpacing2, casing) => _extends({
    fontFamily: fontFamily2,
    fontWeight: fontWeight2,
    fontSize: pxToRem(size),
    lineHeight: lineHeight2
  }, fontFamily2 === defaultFontFamily ? {
    letterSpacing: `${round2(letterSpacing2 / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily: fontFamily2,
    fontSize: fontSize2,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
  });
}

// ../../node_modules/@mui/material/styles/shadows.js
init_define_process();
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows_default2 = shadows;

// ../../node_modules/@mui/material/styles/createTransitions.js
init_define_process();
var _excluded35 = ["duration", "easing", "delay"];
var easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2) {
    return 0;
  }
  const constant = height2 / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded35);
    if (true) {
      const isString = (value) => typeof value === "string";
      const isNumber = (value) => !isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
  };
  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// ../../node_modules/@mui/material/styles/zIndex.js
init_define_process();
var zIndex2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex_default = zIndex2;

// ../../node_modules/@mui/material/styles/createTheme.js
var _excluded36 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme2(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded36);
  const palette2 = createPalette(paletteInput);
  const systemTheme = createTheme_default(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette: palette2,
    shadows: shadows_default2.slice(),
    typography: createTypography(palette2, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex_default)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (true) {
    const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
    const traverse = (node, component) => {
      let key;
      for (key in node) {
        const child = node[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            const stateClass = generateUtilityClass("", key);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
          }
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach((component) => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.indexOf("Mui") === 0) {
        traverse(styleOverrides, component);
      }
    });
  }
  return muiTheme;
}
var createTheme_default2 = createTheme2;

// ../../node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme2 = createTheme_default2();
var defaultTheme_default = defaultTheme2;

// ../../node_modules/@mui/material/styles/styled.js
var rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
var slotShouldForwardProp = shouldForwardProp;
var styled3 = createStyled3({
  defaultTheme: defaultTheme_default,
  rootShouldForwardProp
});
var styled_default2 = styled3;

// ../../node_modules/@mui/material/styles/useThemeProps.js
init_define_process();
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme_default
  });
}

// ../../node_modules/@mui/material/utils/useForkRef.js
init_define_process();
var useForkRef_default = useForkRef;

// ../../node_modules/@mui/material/utils/useEventCallback.js
init_define_process();
var useEventCallback_default = useEventCallback;

// ../../node_modules/@mui/material/utils/useIsFocusVisible.js
init_define_process();
var useIsFocusVisible_default = useIsFocusVisible;

// ../../node_modules/@mui/material/ButtonBase/TouchRipple.js
init_define_process();
var import_prop_types45 = __toESM(require_prop_types());
import * as React70 from "/react.mjs";

// ../../node_modules/react-transition-group/esm/index.js
init_define_process();

// ../../node_modules/react-transition-group/esm/CSSTransition.js
init_define_process();

// ../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
init_define_process();

// ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_define_process();
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// ../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// ../../node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types40 = __toESM(require_prop_types());

// ../../node_modules/dom-helpers/esm/addClass.js
init_define_process();

// ../../node_modules/dom-helpers/esm/hasClass.js
init_define_process();
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// ../../node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// ../../node_modules/dom-helpers/esm/removeClass.js
init_define_process();
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// ../../node_modules/react-transition-group/esm/CSSTransition.js
import React65 from "/react.mjs";

// ../../node_modules/react-transition-group/esm/Transition.js
init_define_process();
var import_prop_types39 = __toESM(require_prop_types());
import React64 from "/react.mjs";
import ReactDOM2 from "/react.mjs";

// ../../node_modules/react-transition-group/esm/config.js
init_define_process();
var config_default = {
  disabled: false
};

// ../../node_modules/react-transition-group/esm/utils/PropTypes.js
init_define_process();
var import_prop_types38 = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types38.default.oneOfType([import_prop_types38.default.number, import_prop_types38.default.shape({
  enter: import_prop_types38.default.number,
  exit: import_prop_types38.default.number,
  appear: import_prop_types38.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types38.default.oneOfType([import_prop_types38.default.string, import_prop_types38.default.shape({
  enter: import_prop_types38.default.string,
  exit: import_prop_types38.default.string,
  active: import_prop_types38.default.string
}), import_prop_types38.default.shape({
  enter: import_prop_types38.default.string,
  enterDone: import_prop_types38.default.string,
  enterActive: import_prop_types38.default.string,
  exit: import_prop_types38.default.string,
  exitDone: import_prop_types38.default.string,
  exitActive: import_prop_types38.default.string
})]) : null;

// ../../node_modules/react-transition-group/esm/TransitionGroupContext.js
init_define_process();
import React63 from "/react.mjs";
var TransitionGroupContext_default = React63.createContext(null);

// ../../node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM2.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM2.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM2.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children2 = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return React64.createElement(TransitionGroupContext_default.Provider, {
      value: null
    }, typeof children2 === "function" ? children2(status, childProps) : React64.cloneElement(React64.Children.only(children2), childProps));
  };
  return Transition2;
}(React64.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  nodeRef: import_prop_types39.default.shape({
    current: typeof Element === "undefined" ? import_prop_types39.default.any : function(propValue, key, componentName, location2, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types39.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location2, propFullName, secret);
    }
  }),
  children: import_prop_types39.default.oneOfType([import_prop_types39.default.func.isRequired, import_prop_types39.default.element.isRequired]).isRequired,
  in: import_prop_types39.default.bool,
  mountOnEnter: import_prop_types39.default.bool,
  unmountOnExit: import_prop_types39.default.bool,
  appear: import_prop_types39.default.bool,
  enter: import_prop_types39.default.bool,
  exit: import_prop_types39.default.bool,
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  addEndListener: import_prop_types39.default.func,
  onEnter: import_prop_types39.default.func,
  onEntering: import_prop_types39.default.func,
  onEntered: import_prop_types39.default.func,
  onExit: import_prop_types39.default.func,
  onExiting: import_prop_types39.default.func,
  onExited: import_prop_types39.default.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// ../../node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass2 = function removeClass3(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass(node, c);
  });
};
var CSSTransition = function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === "string";
      var prefix = isStringClassNames && classNames ? classNames + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass3(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      node && node.scrollTop;
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, _2 = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return React65.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(React65.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  classNames: classNamesShape,
  onEnter: import_prop_types40.default.func,
  onEntering: import_prop_types40.default.func,
  onEntered: import_prop_types40.default.func,
  onExit: import_prop_types40.default.func,
  onExiting: import_prop_types40.default.func,
  onExited: import_prop_types40.default.func
}) : {};

// ../../node_modules/react-transition-group/esm/ReplaceTransition.js
init_define_process();
var import_prop_types42 = __toESM(require_prop_types());
import React67 from "/react.mjs";
import ReactDOM3 from "/react.mjs";

// ../../node_modules/react-transition-group/esm/TransitionGroup.js
init_define_process();

// ../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
init_define_process();
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// ../../node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types41 = __toESM(require_prop_types());
import React66 from "/react.mjs";

// ../../node_modules/react-transition-group/esm/utils/ChildMapping.js
init_define_process();
import { Children as Children2, cloneElement as cloneElement7, isValidElement as isValidElement4 } from "/react.mjs";
function getChildMapping(children2, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && isValidElement4(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children2)
    Children2.map(children2, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return cloneElement7(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children2 = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children2).forEach(function(key) {
    var child = children2[key];
    if (!isValidElement4(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement4(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children2[key] = cloneElement7(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children2[key] = cloneElement7(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement4(prevChild)) {
      children2[key] = cloneElement7(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children2;
}

// ../../node_modules/react-transition-group/esm/TransitionGroup.js
var values2 = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children2 = _extends({}, state.children);
        delete children2[child.key];
        return {
          children: children2
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children2 = values2(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return React66.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children2);
    }
    return React66.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, React66.createElement(Component, props, children2));
  };
  return TransitionGroup2;
}(React66.Component);
TransitionGroup.propTypes = true ? {
  component: import_prop_types41.default.any,
  children: import_prop_types41.default.node,
  appear: import_prop_types41.default.bool,
  enter: import_prop_types41.default.bool,
  exit: import_prop_types41.default.bool,
  childFactory: import_prop_types41.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// ../../node_modules/react-transition-group/esm/ReplaceTransition.js
var ReplaceTransition = function(_React$Component) {
  _inheritsLoose(ReplaceTransition2, _React$Component);
  function ReplaceTransition2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.handleEnter = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _this.handleLifecycle("onEnter", 0, args);
    };
    _this.handleEntering = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _this.handleLifecycle("onEntering", 0, args);
    };
    _this.handleEntered = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return _this.handleLifecycle("onEntered", 0, args);
    };
    _this.handleExit = function() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return _this.handleLifecycle("onExit", 1, args);
    };
    _this.handleExiting = function() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return _this.handleLifecycle("onExiting", 1, args);
    };
    _this.handleExited = function() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return _this.handleLifecycle("onExited", 1, args);
    };
    return _this;
  }
  var _proto = ReplaceTransition2.prototype;
  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;
    var children2 = this.props.children;
    var child = React67.Children.toArray(children2)[idx];
    if (child.props[handler])
      (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? void 0 : ReactDOM3.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);
    var _React$Children$toArr = React67.Children.toArray(children2), first = _React$Children$toArr[0], second = _React$Children$toArr[1];
    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return React67.createElement(TransitionGroup_default, props, inProp ? React67.cloneElement(first, {
      key: "first",
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : React67.cloneElement(second, {
      key: "second",
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };
  return ReplaceTransition2;
}(React67.Component);
ReplaceTransition.propTypes = true ? {
  in: import_prop_types42.default.bool.isRequired,
  children: function children(props, propName) {
    if (React67.Children.count(props[propName]) !== 2)
      return new Error('"' + propName + '" must be exactly two transition components.');
    return null;
  }
} : {};

// ../../node_modules/react-transition-group/esm/SwitchTransition.js
init_define_process();
var import_prop_types43 = __toESM(require_prop_types());
import React68 from "/react.mjs";
var _leaveRenders;
var _enterRenders;
function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren)
    return false;
  if (React68.isValidElement(oldChildren) && React68.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }
  return true;
}
var modes = {
  out: "out-in",
  in: "in-out"
};
var callHook = function callHook2(element, name, cb) {
  return function() {
    var _element$props;
    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};
var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function(_ref) {
  var current = _ref.current, changeState = _ref.changeState;
  return React68.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function(_ref2) {
  var current = _ref2.current, changeState = _ref2.changeState, children2 = _ref2.children;
  return [current, React68.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function(_ref3) {
  var children2 = _ref3.children, changeState = _ref3.changeState;
  return React68.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERED, React68.cloneElement(children2, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function(_ref4) {
  var current = _ref4.current, children2 = _ref4.children, changeState = _ref4.changeState;
  return [React68.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERED, React68.cloneElement(children2, {
        in: true
      }));
    })
  }), React68.cloneElement(children2, {
    in: true
  })];
}, _enterRenders);
var SwitchTransition = function(_React$Component) {
  _inheritsLoose(SwitchTransition2, _React$Component);
  function SwitchTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;
    _this.changeState = function(status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }
      _this.setState({
        status,
        current
      });
    };
    return _this;
  }
  var _proto = SwitchTransition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };
  SwitchTransition2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }
    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }
    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }
    return {
      current: React68.cloneElement(props.children, {
        in: true
      })
    };
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, mode = _this$props.mode, _this$state = this.state, status = _this$state.status, current = _this$state.current;
    var data = {
      children: children2,
      current,
      changeState: this.changeState,
      status
    };
    var component;
    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;
      case EXITING:
        component = leaveRenders[mode](data);
        break;
      case ENTERED:
        component = current;
    }
    return React68.createElement(TransitionGroupContext_default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };
  return SwitchTransition2;
}(React68.Component);
SwitchTransition.propTypes = true ? {
  mode: import_prop_types43.default.oneOf([modes.in, modes.out]),
  children: import_prop_types43.default.oneOfType([import_prop_types43.default.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

// ../../node_modules/@mui/material/ButtonBase/Ripple.js
init_define_process();
var import_prop_types44 = __toESM(require_prop_types());
import * as React69 from "/react.mjs";
import { jsx as _jsx32 } from "/react.mjs";
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout: timeout2
  } = props;
  const [leaving, setLeaving] = React69.useState(false);
  const rippleClassName = clsx_m_default(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx_m_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React69.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout2);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout2]);
  return _jsx32("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: _jsx32("span", {
      className: childClassName
    })
  });
}
true ? Ripple.propTypes = {
  classes: import_prop_types44.default.object.isRequired,
  className: import_prop_types44.default.string,
  in: import_prop_types44.default.bool,
  onExited: import_prop_types44.default.func,
  pulsate: import_prop_types44.default.bool,
  rippleSize: import_prop_types44.default.number,
  rippleX: import_prop_types44.default.number,
  rippleY: import_prop_types44.default.number,
  timeout: import_prop_types44.default.number.isRequired
} : void 0;
var Ripple_default = Ripple;

// ../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js
init_define_process();
var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var touchRippleClasses_default = touchRippleClasses;

// ../../node_modules/@mui/material/ButtonBase/TouchRipple.js
import { jsx as _jsx33 } from "/react.mjs";
var _excluded37 = ["center", "classes", "className"];
var _ = (t) => t;
var _t;
var _t2;
var _t3;
var _t4;
var DURATION = 550;
var DELAY_RIPPLE = 80;
var enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
var exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
var pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
var TouchRippleRoot = styled_default2("span", {
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
});
var TouchRippleRipple = styled_default2(Ripple_default, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4 || (_t4 = _`
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
`), touchRippleClasses_default.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses_default.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses_default.child, touchRippleClasses_default.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses_default.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
var TouchRipple = React70.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded37);
  const [ripples, setRipples] = React70.useState([]);
  const nextKey = React70.useRef(0);
  const rippleCallback = React70.useRef(null);
  React70.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = React70.useRef(false);
  const startTimer = React70.useRef(null);
  const startTimerCommit = React70.useRef(null);
  const container = React70.useRef(null);
  React70.useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = React70.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, _jsx33(TouchRippleRipple, {
      classes: {
        ripple: clsx_m_default(classes.ripple, touchRippleClasses_default.ripple),
        rippleVisible: clsx_m_default(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
        ripplePulsate: clsx_m_default(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
        child: clsx_m_default(classes.child, touchRippleClasses_default.child),
        childLeaving: clsx_m_default(classes.childLeaving, touchRippleClasses_default.childLeaving),
        childPulsate: clsx_m_default(classes.childPulsate, touchRippleClasses_default.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start2 = React70.useCallback((event = {}, options = {}, cb) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
    } = options;
    if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event != null && event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE);
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = React70.useCallback(() => {
    start2({}, {
      pulsate: true
    });
  }, [start2]);
  const stop = React70.useCallback((event, cb) => {
    clearTimeout(startTimer.current);
    if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  React70.useImperativeHandle(ref, () => ({
    pulsate,
    start: start2,
    stop
  }), [pulsate, start2, stop]);
  return _jsx33(TouchRippleRoot, _extends({
    className: clsx_m_default(classes.root, touchRippleClasses_default.root, className),
    ref: container
  }, other, {
    children: _jsx33(TransitionGroup_default, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
true ? TouchRipple.propTypes = {
  center: import_prop_types45.default.bool,
  classes: import_prop_types45.default.object,
  className: import_prop_types45.default.string
} : void 0;
var TouchRipple_default = TouchRipple;

// ../../node_modules/@mui/material/ButtonBase/buttonBaseClasses.js
init_define_process();
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
var buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
var buttonBaseClasses_default = buttonBaseClasses;

// ../../node_modules/@mui/material/ButtonBase/ButtonBase.js
import { jsx as _jsx34 } from "/react.mjs";
import { jsxs as _jsxs13 } from "/react.mjs";
var _excluded38 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
var useUtilityClasses16 = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
var ButtonBaseRoot = styled_default2("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  WebkitAppearance: "none",
  textDecoration: "none",
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
  },
  [`&.${buttonBaseClasses_default.disabled}`]: {
    pointerEvents: "none",
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
var ButtonBase = React71.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children: children2,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const buttonRef = React71.useRef(null);
  const rippleRef = React71.useRef(null);
  const handleRippleRef = useForkRef_default(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default();
  const [focusVisible, setFocusVisible] = React71.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React71.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = React71.useState(false);
  React71.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  React71.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback_default((event) => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler("start", onMouseDown);
  const handleContextMenu = useRippleHandler("stop", onContextMenu);
  const handleDragLeave = useRippleHandler("stop", onDragLeave);
  const handleMouseUp = useRippleHandler("stop", onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", onTouchMove);
  const handleBlur2 = useRippleHandler("stop", (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback_default((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const keydownRef = React71.useRef(false);
  const handleKeyDown3 = useEventCallback_default((event) => {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback_default((event) => {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleOwnRef = useForkRef_default(focusVisibleRef, buttonRef);
  const handleRef = useForkRef_default(ref, handleOwnRef);
  if (true) {
    React71.useEffect(() => {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join("\n"));
      }
    }, [enableTouchRipple]);
  }
  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = useUtilityClasses16(ownerState);
  return _jsxs13(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx_m_default(classes.root, className),
    ownerState,
    onBlur: handleBlur2,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown3,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type
  }, buttonProps, other, {
    children: [children2, enableTouchRipple ? _jsx34(TouchRipple_default, _extends({
      ref: handleRippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
true ? ButtonBase.propTypes = {
  action: refType_default,
  centerRipple: import_prop_types46.default.bool,
  children: import_prop_types46.default.node,
  classes: import_prop_types46.default.object,
  className: import_prop_types46.default.string,
  component: elementTypeAcceptingRef_default,
  disabled: import_prop_types46.default.bool,
  disableRipple: import_prop_types46.default.bool,
  disableTouchRipple: import_prop_types46.default.bool,
  focusRipple: import_prop_types46.default.bool,
  focusVisibleClassName: import_prop_types46.default.string,
  href: import_prop_types46.default.any,
  LinkComponent: import_prop_types46.default.elementType,
  onBlur: import_prop_types46.default.func,
  onClick: import_prop_types46.default.func,
  onContextMenu: import_prop_types46.default.func,
  onDragLeave: import_prop_types46.default.func,
  onFocus: import_prop_types46.default.func,
  onFocusVisible: import_prop_types46.default.func,
  onKeyDown: import_prop_types46.default.func,
  onKeyUp: import_prop_types46.default.func,
  onMouseDown: import_prop_types46.default.func,
  onMouseLeave: import_prop_types46.default.func,
  onMouseUp: import_prop_types46.default.func,
  onTouchEnd: import_prop_types46.default.func,
  onTouchMove: import_prop_types46.default.func,
  onTouchStart: import_prop_types46.default.func,
  sx: import_prop_types46.default.oneOfType([import_prop_types46.default.arrayOf(import_prop_types46.default.oneOfType([import_prop_types46.default.func, import_prop_types46.default.object, import_prop_types46.default.bool])), import_prop_types46.default.func, import_prop_types46.default.object]),
  tabIndex: import_prop_types46.default.number,
  TouchRippleProps: import_prop_types46.default.object,
  touchRippleRef: import_prop_types46.default.oneOfType([import_prop_types46.default.func, import_prop_types46.default.shape({
    current: import_prop_types46.default.shape({
      pulsate: import_prop_types46.default.func.isRequired,
      start: import_prop_types46.default.func.isRequired,
      stop: import_prop_types46.default.func.isRequired
    })
  })]),
  type: import_prop_types46.default.oneOfType([import_prop_types46.default.oneOf(["button", "reset", "submit"]), import_prop_types46.default.string])
} : void 0;
var ButtonBase_default = ButtonBase;

// ../../node_modules/@mui/material/utils/capitalize.js
init_define_process();
var capitalize_default = capitalize;

// ../../node_modules/@mui/material/Fab/fabClasses.js
init_define_process();
function getFabUtilityClass(slot) {
  return generateUtilityClass("MuiFab", slot);
}
var fabClasses = generateUtilityClasses("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]);
var fabClasses_default = fabClasses;

// ../../node_modules/@mui/material/Fab/Fab.js
import { jsx as _jsx35 } from "/react.mjs";
var _excluded39 = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"];
var useUtilityClasses17 = (ownerState) => {
  const {
    color: color2,
    variant,
    classes,
    size
  } = ownerState;
  const slots = {
    root: ["root", variant, `size${capitalize_default(size)}`, color2 === "inherit" ? "colorInherit" : color2]
  };
  return composeClasses(slots, getFabUtilityClass, classes);
};
var FabRoot = styled_default2(ButtonBase_default, {
  name: "MuiFab",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles2.colorInherit, styles2[capitalize_default(ownerState.size)], styles2[ownerState.color]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  return _extends({}, theme.typography.button, {
    minHeight: 36,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: theme.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (theme.vars || theme).zIndex.fab,
    boxShadow: (theme.vars || theme).shadows[6],
    "&:active": {
      boxShadow: (theme.vars || theme).shadows[12]
    },
    color: theme.vars ? theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: (theme.vars || theme).palette.grey[300],
    "&:hover": {
      backgroundColor: (theme.vars || theme).palette.grey.A100,
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${fabClasses_default.focusVisible}`]: {
      boxShadow: (theme.vars || theme).shadows[6]
    },
    [`&.${fabClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    }
  }, ownerState.size === "small" && {
    width: 40,
    height: 40
  }, ownerState.size === "medium" && {
    width: 48,
    height: 48
  }, ownerState.variant === "extended" && {
    borderRadius: 48 / 2,
    padding: "0 16px",
    width: "auto",
    minHeight: "auto",
    minWidth: 48,
    height: 48
  }, ownerState.variant === "extended" && ownerState.size === "small" && {
    width: "auto",
    padding: "0 8px",
    borderRadius: 34 / 2,
    minWidth: 34,
    height: 34
  }, ownerState.variant === "extended" && ownerState.size === "medium" && {
    width: "auto",
    padding: "0 16px",
    borderRadius: 40 / 2,
    minWidth: 40,
    height: 40
  }, ownerState.color === "inherit" && {
    color: "inherit"
  });
}, ({
  theme,
  ownerState
}) => _extends({}, ownerState.color !== "inherit" && ownerState.color !== "default" && (theme.vars || theme).palette[ownerState.color] != null && {
  color: (theme.vars || theme).palette[ownerState.color].contrastText,
  backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
    "@media (hover: none)": {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].main
    }
  }
}));
var Fab = React72.forwardRef(function Fab2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiFab"
  });
  const {
    children: children2,
    className,
    color: color2 = "default",
    component = "button",
    disabled = false,
    disableFocusRipple = false,
    focusVisibleClassName,
    size = "large",
    variant = "circular"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded39);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    disableFocusRipple,
    size,
    variant
  });
  const classes = useUtilityClasses17(ownerState);
  return _jsx35(FabRoot, _extends({
    className: clsx_m_default(classes.root, className),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_m_default(classes.focusVisible, focusVisibleClassName),
    ownerState,
    ref
  }, other, {
    children: children2
  }));
});
true ? Fab.propTypes = {
  children: import_prop_types47.default.node,
  classes: import_prop_types47.default.object,
  className: import_prop_types47.default.string,
  color: import_prop_types47.default.oneOfType([import_prop_types47.default.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), import_prop_types47.default.string]),
  component: import_prop_types47.default.elementType,
  disabled: import_prop_types47.default.bool,
  disableFocusRipple: import_prop_types47.default.bool,
  disableRipple: import_prop_types47.default.bool,
  focusVisibleClassName: import_prop_types47.default.string,
  href: import_prop_types47.default.string,
  size: import_prop_types47.default.oneOfType([import_prop_types47.default.oneOf(["small", "medium", "large"]), import_prop_types47.default.string]),
  sx: import_prop_types47.default.oneOfType([import_prop_types47.default.arrayOf(import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object, import_prop_types47.default.bool])), import_prop_types47.default.func, import_prop_types47.default.object]),
  variant: import_prop_types47.default.oneOfType([import_prop_types47.default.oneOf(["circular", "extended"]), import_prop_types47.default.string])
} : void 0;
var Fab_default = Fab;

// ../../node_modules/@mui/material/Button/Button.js
init_define_process();
var import_prop_types48 = __toESM(require_prop_types());
import * as React74 from "/react.mjs";

// ../../node_modules/@mui/material/Button/buttonClasses.js
init_define_process();
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
var buttonClasses_default = buttonClasses;

// ../../node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js
init_define_process();
import * as React73 from "/react.mjs";
var ButtonGroupContext = React73.createContext({});
if (true) {
  ButtonGroupContext.displayName = "ButtonGroupContext";
}
var ButtonGroupContext_default = ButtonGroupContext;

// ../../node_modules/@mui/material/Button/Button.js
import { jsx as _jsx36 } from "/react.mjs";
import { jsxs as _jsxs14 } from "/react.mjs";
var _excluded40 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
var useUtilityClasses18 = (ownerState) => {
  const {
    color: color2,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, `${variant}${capitalize_default(color2)}`, `size${capitalize_default(size)}`, `${variant}Size${capitalize_default(size)}`, color2 === "inherit" && "colorInherit", disableElevation && "disableElevation", fullWidth && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize_default(size)}`],
    endIcon: ["endIcon", `iconSize${capitalize_default(size)}`]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var commonIconStyles = (ownerState) => _extends({}, ownerState.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, ownerState.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, ownerState.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
});
var ButtonRoot = styled_default2(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize_default(ownerState.color)}`], styles2[`size${capitalize_default(ownerState.size)}`], styles2[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles2.colorInherit, ownerState.disableElevation && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  return _extends({}, theme.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": _extends({
      textDecoration: "none",
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
      border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "contained" && {
      backgroundColor: (theme.vars || theme).palette.grey.A100,
      boxShadow: (theme.vars || theme).shadows[4],
      "@media (hover: none)": {
        boxShadow: (theme.vars || theme).shadows[2],
        backgroundColor: (theme.vars || theme).palette.grey[300]
      }
    }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }),
    "&:active": _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    [`&.${buttonClasses_default.focusVisible}`]: _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    [`&.${buttonClasses_default.disabled}`]: _extends({
      color: (theme.vars || theme).palette.action.disabled
    }, ownerState.variant === "outlined" && {
      border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
    }, ownerState.variant === "outlined" && ownerState.color === "secondary" && {
      border: `1px solid ${(theme.vars || theme).palette.action.disabled}`
    }, ownerState.variant === "contained" && {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    })
  }, ownerState.variant === "text" && {
    padding: "6px 8px"
  }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
  }, ownerState.variant === "contained" && {
    color: theme.vars ? theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: (theme.vars || theme).palette.grey[300],
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, ownerState.size === "small" && ownerState.variant === "text" && {
    padding: "4px 5px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "text" && {
    padding: "8px 11px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "contained" && {
    padding: "4px 10px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "contained" && {
    padding: "8px 22px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${buttonClasses_default.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${buttonClasses_default.disabled}`]: {
    boxShadow: "none"
  }
});
var ButtonStartIcon = styled_default2("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.startIcon, styles2[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
var ButtonEndIcon = styled_default2("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.endIcon, styles2[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState)));
var Button = React74.forwardRef(function Button2(inProps, ref) {
  const contextProps = React74.useContext(ButtonGroupContext_default);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useThemeProps2({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children: children2,
    color: color2 = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded40);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });
  const classes = useUtilityClasses18(ownerState);
  const startIcon = startIconProp && _jsx36(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && _jsx36(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  });
  return _jsxs14(ButtonRoot, _extends({
    ownerState,
    className: clsx_m_default(className, contextProps.className),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_m_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other, {
    classes,
    children: [startIcon, children2, endIcon]
  }));
});
true ? Button.propTypes = {
  children: import_prop_types48.default.node,
  classes: import_prop_types48.default.object,
  className: import_prop_types48.default.string,
  color: import_prop_types48.default.oneOfType([import_prop_types48.default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), import_prop_types48.default.string]),
  component: import_prop_types48.default.elementType,
  disabled: import_prop_types48.default.bool,
  disableElevation: import_prop_types48.default.bool,
  disableFocusRipple: import_prop_types48.default.bool,
  disableRipple: import_prop_types48.default.bool,
  endIcon: import_prop_types48.default.node,
  focusVisibleClassName: import_prop_types48.default.string,
  fullWidth: import_prop_types48.default.bool,
  href: import_prop_types48.default.string,
  size: import_prop_types48.default.oneOfType([import_prop_types48.default.oneOf(["small", "medium", "large"]), import_prop_types48.default.string]),
  startIcon: import_prop_types48.default.node,
  sx: import_prop_types48.default.oneOfType([import_prop_types48.default.arrayOf(import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.object, import_prop_types48.default.bool])), import_prop_types48.default.func, import_prop_types48.default.object]),
  type: import_prop_types48.default.oneOfType([import_prop_types48.default.oneOf(["button", "reset", "submit"]), import_prop_types48.default.string]),
  variant: import_prop_types48.default.oneOfType([import_prop_types48.default.oneOf(["contained", "outlined", "text"]), import_prop_types48.default.string])
} : void 0;

// ../../node_modules/@mui/material/Box/Box.js
init_define_process();
var import_prop_types50 = __toESM(require_prop_types());

// ../../node_modules/@mui/material/className/index.js
init_define_process();

// ../../node_modules/@mui/material/styles/index.js
init_define_process();

// ../../node_modules/@mui/material/styles/adaptV4Theme.js
init_define_process();

// ../../node_modules/@mui/material/styles/createMuiStrictModeTheme.js
init_define_process();

// ../../node_modules/@mui/material/styles/createStyles.js
init_define_process();

// ../../node_modules/@mui/material/styles/cssUtils.js
init_define_process();

// ../../node_modules/@mui/material/styles/responsiveFontSizes.js
init_define_process();

// ../../node_modules/@mui/material/styles/useTheme.js
init_define_process();
import * as React75 from "/react.mjs";
function useTheme4() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React75.useDebugValue(theme);
  }
  return theme;
}

// ../../node_modules/@mui/material/styles/ThemeProvider.js
init_define_process();

// ../../node_modules/@mui/material/styles/makeStyles.js
init_define_process();

// ../../node_modules/@mui/material/styles/withStyles.js
init_define_process();

// ../../node_modules/@mui/material/styles/withTheme.js
init_define_process();

// ../../node_modules/@mui/material/styles/CssVarsProvider.js
init_define_process();

// ../../node_modules/@mui/material/styles/experimental_extendTheme.js
init_define_process();

// ../../node_modules/@mui/material/Paper/Paper.js
init_define_process();
var import_prop_types49 = __toESM(require_prop_types());
import * as React76 from "/react.mjs";

// ../../node_modules/@mui/material/Paper/paperClasses.js
init_define_process();
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

// ../../node_modules/@mui/material/Paper/Paper.js
import { jsx as _jsx37 } from "/react.mjs";
var _excluded41 = ["className", "component", "elevation", "square", "variant"];
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
var useUtilityClasses19 = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
var PaperRoot = styled_default2("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
var Paper = React76.forwardRef(function Paper2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiPaper"
  });
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded41);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses19(ownerState);
  if (true) {
    const theme = useTheme4();
    if (theme.shadows[elevation] === void 0) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
    }
  }
  return _jsx37(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx_m_default(classes.root, className),
    ref
  }, other));
});
true ? Paper.propTypes = {
  children: import_prop_types49.default.node,
  classes: import_prop_types49.default.object,
  className: import_prop_types49.default.string,
  component: import_prop_types49.default.elementType,
  elevation: chainPropTypes(integerPropType_default, (props) => {
    const {
      elevation,
      variant
    } = props;
    if (elevation > 0 && variant === "outlined") {
      return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
    }
    return null;
  }),
  square: import_prop_types49.default.bool,
  sx: import_prop_types49.default.oneOfType([import_prop_types49.default.arrayOf(import_prop_types49.default.oneOfType([import_prop_types49.default.func, import_prop_types49.default.object, import_prop_types49.default.bool])), import_prop_types49.default.func, import_prop_types49.default.object]),
  variant: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["elevation", "outlined"]), import_prop_types49.default.string])
} : void 0;

// ../../node_modules/@mui/material/styles/experimental_extendTheme.js
var _excluded42 = ["colorSchemes", "cssVarPrefix"];
var _excluded211 = ["palette"];
var defaultDarkOverlays = [...Array(25)].map((_2, index) => {
  if (index === 0) {
    return void 0;
  }
  const overlay = getOverlayAlpha(index);
  return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function assignNode(obj, keys) {
  keys.forEach((k) => {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  obj[key] = obj[key] || defaultValue;
}
var createGetCssVar2 = (cssVarPrefix = "mui") => createGetCssVar(cssVarPrefix);
function extendTheme(options = {}, ...args) {
  var _colorSchemesInput$li, _colorSchemesInput$da, _colorSchemesInput$li2, _colorSchemesInput$li3, _colorSchemesInput$da2, _colorSchemesInput$da3;
  const {
    colorSchemes: colorSchemesInput = {},
    cssVarPrefix = "mui"
  } = options, input = _objectWithoutPropertiesLoose(options, _excluded42);
  const getCssVar = createGetCssVar2(cssVarPrefix);
  const _createThemeWithoutVa = createTheme_default2(_extends({}, input, colorSchemesInput.light && {
    palette: (_colorSchemesInput$li = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li.palette
  })), {
    palette: lightPalette
  } = _createThemeWithoutVa, muiTheme = _objectWithoutPropertiesLoose(_createThemeWithoutVa, _excluded211);
  const {
    palette: darkPalette
  } = createTheme_default2({
    palette: _extends({
      mode: "dark"
    }, (_colorSchemesInput$da = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da.palette)
  });
  let theme = _extends({}, muiTheme, {
    cssVarPrefix,
    getCssVar,
    colorSchemes: _extends({}, colorSchemesInput, {
      light: _extends({}, colorSchemesInput.light, {
        palette: lightPalette,
        opacity: _extends({
          inputPlaceholder: 0.42,
          inputUnderline: 0.42,
          switchTrackDisabled: 0.12,
          switchTrack: 0.38
        }, (_colorSchemesInput$li2 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li2.opacity),
        overlays: ((_colorSchemesInput$li3 = colorSchemesInput.light) == null ? void 0 : _colorSchemesInput$li3.overlays) || []
      }),
      dark: _extends({}, colorSchemesInput.dark, {
        palette: darkPalette,
        opacity: _extends({
          inputPlaceholder: 0.5,
          inputUnderline: 0.7,
          switchTrackDisabled: 0.2,
          switchTrack: 0.3
        }, (_colorSchemesInput$da2 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da2.opacity),
        overlays: ((_colorSchemesInput$da3 = colorSchemesInput.dark) == null ? void 0 : _colorSchemesInput$da3.overlays) || defaultDarkOverlays
      })
    })
  });
  Object.keys(theme.colorSchemes).forEach((key) => {
    const palette2 = theme.colorSchemes[key].palette;
    if (key === "light") {
      setColor(palette2.common, "background", "#fff");
      setColor(palette2.common, "onBackground", "#000");
    } else {
      setColor(palette2.common, "background", "#000");
      setColor(palette2.common, "onBackground", "#fff");
    }
    assignNode(palette2, ["Alert", "AppBar", "Avatar", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]);
    if (key === "light") {
      setColor(palette2.Alert, "errorColor", darken(palette2.error.light, 0.6));
      setColor(palette2.Alert, "infoColor", darken(palette2.info.light, 0.6));
      setColor(palette2.Alert, "successColor", darken(palette2.success.light, 0.6));
      setColor(palette2.Alert, "warningColor", darken(palette2.warning.light, 0.6));
      setColor(palette2.Alert, "errorFilledBg", getCssVar("palette-error-main"));
      setColor(palette2.Alert, "infoFilledBg", getCssVar("palette-info-main"));
      setColor(palette2.Alert, "successFilledBg", getCssVar("palette-success-main"));
      setColor(palette2.Alert, "warningFilledBg", getCssVar("palette-warning-main"));
      setColor(palette2.Alert, "errorFilledColor", lightPalette.getContrastText(palette2.error.main));
      setColor(palette2.Alert, "infoFilledColor", lightPalette.getContrastText(palette2.info.main));
      setColor(palette2.Alert, "successFilledColor", lightPalette.getContrastText(palette2.success.main));
      setColor(palette2.Alert, "warningFilledColor", lightPalette.getContrastText(palette2.warning.main));
      setColor(palette2.Alert, "errorStandardBg", lighten(palette2.error.light, 0.9));
      setColor(palette2.Alert, "infoStandardBg", lighten(palette2.info.light, 0.9));
      setColor(palette2.Alert, "successStandardBg", lighten(palette2.success.light, 0.9));
      setColor(palette2.Alert, "warningStandardBg", lighten(palette2.warning.light, 0.9));
      setColor(palette2.Alert, "errorIconColor", getCssVar("palette-error-light"));
      setColor(palette2.Alert, "infoIconColor", getCssVar("palette-info-light"));
      setColor(palette2.Alert, "successIconColor", getCssVar("palette-success-light"));
      setColor(palette2.Alert, "warningIconColor", getCssVar("palette-warning-light"));
      setColor(palette2.AppBar, "defaultBg", getCssVar("palette-grey-100"));
      setColor(palette2.Avatar, "defaultBg", getCssVar("palette-grey-400"));
      setColor(palette2.Chip, "defaultBorder", getCssVar("palette-grey-400"));
      setColor(palette2.Chip, "defaultAvatarColor", getCssVar("palette-grey-700"));
      setColor(palette2.Chip, "defaultIconColor", getCssVar("palette-grey-700"));
      setColor(palette2.FilledInput, "bg", "rgba(0, 0, 0, 0.06)");
      setColor(palette2.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)");
      setColor(palette2.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)");
      setColor(palette2.LinearProgress, "primaryBg", lighten(palette2.primary.main, 0.62));
      setColor(palette2.LinearProgress, "secondaryBg", lighten(palette2.secondary.main, 0.62));
      setColor(palette2.LinearProgress, "errorBg", lighten(palette2.error.main, 0.62));
      setColor(palette2.LinearProgress, "infoBg", lighten(palette2.info.main, 0.62));
      setColor(palette2.LinearProgress, "successBg", lighten(palette2.success.main, 0.62));
      setColor(palette2.LinearProgress, "warningBg", lighten(palette2.warning.main, 0.62));
      setColor(palette2.Skeleton, "bg", `rgba(${getCssVar("palette-text-primaryChannel")} / 0.11)`);
      setColor(palette2.Slider, "primaryTrack", lighten(palette2.primary.main, 0.62));
      setColor(palette2.Slider, "secondaryTrack", lighten(palette2.secondary.main, 0.62));
      setColor(palette2.Slider, "errorTrack", lighten(palette2.error.main, 0.62));
      setColor(palette2.Slider, "infoTrack", lighten(palette2.info.main, 0.62));
      setColor(palette2.Slider, "successTrack", lighten(palette2.success.main, 0.62));
      setColor(palette2.Slider, "warningTrack", lighten(palette2.warning.main, 0.62));
      const snackbarContentBackground = emphasize(palette2.background.default, 0.8);
      setColor(palette2.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette2.SnackbarContent, "color", lightPalette.getContrastText(snackbarContentBackground));
      setColor(palette2.SpeedDialAction, "fabHoverBg", emphasize(palette2.background.paper, 0.15));
      setColor(palette2.StepConnector, "border", getCssVar("palette-grey-400"));
      setColor(palette2.StepContent, "border", getCssVar("palette-grey-400"));
      setColor(palette2.Switch, "defaultColor", getCssVar("palette-common-white"));
      setColor(palette2.Switch, "defaultDisabledColor", getCssVar("palette-grey-100"));
      setColor(palette2.Switch, "primaryDisabledColor", lighten(palette2.primary.main, 0.62));
      setColor(palette2.Switch, "secondaryDisabledColor", lighten(palette2.secondary.main, 0.62));
      setColor(palette2.Switch, "errorDisabledColor", lighten(palette2.error.main, 0.62));
      setColor(palette2.Switch, "infoDisabledColor", lighten(palette2.info.main, 0.62));
      setColor(palette2.Switch, "successDisabledColor", lighten(palette2.success.main, 0.62));
      setColor(palette2.Switch, "warningDisabledColor", lighten(palette2.warning.main, 0.62));
      setColor(palette2.TableCell, "border", lighten(alpha(palette2.divider, 1), 0.88));
      setColor(palette2.Tooltip, "bg", alpha(palette2.grey[700], 0.92));
    } else {
      setColor(palette2.Alert, "errorColor", lighten(palette2.error.light, 0.6));
      setColor(palette2.Alert, "infoColor", lighten(palette2.info.light, 0.6));
      setColor(palette2.Alert, "successColor", lighten(palette2.success.light, 0.6));
      setColor(palette2.Alert, "warningColor", lighten(palette2.warning.light, 0.6));
      setColor(palette2.Alert, "errorFilledBg", getCssVar("palette-error-dark"));
      setColor(palette2.Alert, "infoFilledBg", getCssVar("palette-info-dark"));
      setColor(palette2.Alert, "successFilledBg", getCssVar("palette-success-dark"));
      setColor(palette2.Alert, "warningFilledBg", getCssVar("palette-warning-dark"));
      setColor(palette2.Alert, "errorFilledColor", darkPalette.getContrastText(palette2.error.dark));
      setColor(palette2.Alert, "infoFilledColor", darkPalette.getContrastText(palette2.info.dark));
      setColor(palette2.Alert, "successFilledColor", darkPalette.getContrastText(palette2.success.dark));
      setColor(palette2.Alert, "warningFilledColor", darkPalette.getContrastText(palette2.warning.dark));
      setColor(palette2.Alert, "errorStandardBg", darken(palette2.error.light, 0.9));
      setColor(palette2.Alert, "infoStandardBg", darken(palette2.info.light, 0.9));
      setColor(palette2.Alert, "successStandardBg", darken(palette2.success.light, 0.9));
      setColor(palette2.Alert, "warningStandardBg", darken(palette2.warning.light, 0.9));
      setColor(palette2.Alert, "errorIconColor", getCssVar("palette-error-main"));
      setColor(palette2.Alert, "infoIconColor", getCssVar("palette-info-main"));
      setColor(palette2.Alert, "successIconColor", getCssVar("palette-success-main"));
      setColor(palette2.Alert, "warningIconColor", getCssVar("palette-warning-main"));
      setColor(palette2.AppBar, "defaultBg", getCssVar("palette-grey-900"));
      setColor(palette2.AppBar, "darkBg", getCssVar("palette-background-paper"));
      setColor(palette2.AppBar, "darkColor", getCssVar("palette-text-primary"));
      setColor(palette2.Avatar, "defaultBg", getCssVar("palette-grey-600"));
      setColor(palette2.Chip, "defaultBorder", getCssVar("palette-grey-700"));
      setColor(palette2.Chip, "defaultAvatarColor", getCssVar("palette-grey-300"));
      setColor(palette2.Chip, "defaultIconColor", getCssVar("palette-grey-300"));
      setColor(palette2.FilledInput, "bg", "rgba(255, 255, 255, 0.09)");
      setColor(palette2.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)");
      setColor(palette2.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)");
      setColor(palette2.LinearProgress, "primaryBg", darken(palette2.primary.main, 0.5));
      setColor(palette2.LinearProgress, "secondaryBg", darken(palette2.secondary.main, 0.5));
      setColor(palette2.LinearProgress, "errorBg", darken(palette2.error.main, 0.5));
      setColor(palette2.LinearProgress, "infoBg", darken(palette2.info.main, 0.5));
      setColor(palette2.LinearProgress, "successBg", darken(palette2.success.main, 0.5));
      setColor(palette2.LinearProgress, "warningBg", darken(palette2.warning.main, 0.5));
      setColor(palette2.Skeleton, "bg", `rgba(${getCssVar("palette-text-primaryChannel")} / 0.13)`);
      setColor(palette2.Slider, "primaryTrack", darken(palette2.primary.main, 0.5));
      setColor(palette2.Slider, "secondaryTrack", darken(palette2.secondary.main, 0.5));
      setColor(palette2.Slider, "errorTrack", darken(palette2.error.main, 0.5));
      setColor(palette2.Slider, "infoTrack", darken(palette2.info.main, 0.5));
      setColor(palette2.Slider, "successTrack", darken(palette2.success.main, 0.5));
      setColor(palette2.Slider, "warningTrack", darken(palette2.warning.main, 0.5));
      const snackbarContentBackground = emphasize(palette2.background.default, 0.98);
      setColor(palette2.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette2.SnackbarContent, "color", darkPalette.getContrastText(snackbarContentBackground));
      setColor(palette2.SpeedDialAction, "fabHoverBg", emphasize(palette2.background.paper, 0.15));
      setColor(palette2.StepConnector, "border", getCssVar("palette-grey-600"));
      setColor(palette2.StepContent, "border", getCssVar("palette-grey-600"));
      setColor(palette2.Switch, "defaultColor", getCssVar("palette-grey-300"));
      setColor(palette2.Switch, "defaultDisabledColor", getCssVar("palette-grey-600"));
      setColor(palette2.Switch, "primaryDisabledColor", darken(palette2.primary.main, 0.55));
      setColor(palette2.Switch, "secondaryDisabledColor", darken(palette2.secondary.main, 0.55));
      setColor(palette2.Switch, "errorDisabledColor", darken(palette2.error.main, 0.55));
      setColor(palette2.Switch, "infoDisabledColor", darken(palette2.info.main, 0.55));
      setColor(palette2.Switch, "successDisabledColor", darken(palette2.success.main, 0.55));
      setColor(palette2.Switch, "warningDisabledColor", darken(palette2.warning.main, 0.55));
      setColor(palette2.TableCell, "border", darken(alpha(palette2.divider, 1), 0.68));
      setColor(palette2.Tooltip, "bg", alpha(palette2.grey[700], 0.92));
    }
    palette2.common.backgroundChannel = colorChannel(palette2.common.background);
    palette2.common.onBackgroundChannel = colorChannel(palette2.common.onBackground);
    palette2.dividerChannel = colorChannel(palette2.divider);
    Object.keys(palette2).forEach((color2) => {
      const colors = palette2[color2];
      if (colors.main) {
        palette2[color2].mainChannel = colorChannel(colors.main);
      }
      if (colors.light) {
        palette2[color2].lightChannel = colorChannel(colors.light);
      }
      if (colors.dark) {
        palette2[color2].darkChannel = colorChannel(colors.dark);
      }
      if (colors.contrastText) {
        palette2[color2].contrastTextChannel = colorChannel(colors.contrastText);
      }
      if (colors.primary) {
        palette2[color2].primaryChannel = colorChannel(colors.primary);
      }
      if (colors.secondary) {
        palette2[color2].secondaryChannel = colorChannel(colors.secondary);
      }
      if (colors.active) {
        palette2[color2].activeChannel = colorChannel(colors.active);
      }
      if (colors.selected) {
        palette2[color2].selectedChannel = colorChannel(colors.selected);
      }
    });
  });
  theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
  return theme;
}

// ../../node_modules/@mui/material/styles/CssVarsProvider.js
var shouldSkipGeneratingVar = (keys) => {
  var _keys$;
  return !!keys[0].match(/(typography|mixins|breakpoints|direction|transitions)/) || keys[0] === "palette" && !!((_keys$ = keys[1]) != null && _keys$.match(/(mode|contrastThreshold|tonalOffset)/));
};
var defaultTheme3 = extendTheme();
var {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: getInitColorSchemeScript2
} = createCssVarsProvider({
  theme: defaultTheme3,
  attribute: "data-mui-color-scheme",
  modeStorageKey: "mui-mode",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  },
  resolveTheme: (theme) => {
    const newTheme = _extends({}, theme, {
      typography: createTypography(theme.palette, theme.typography)
    });
    return newTheme;
  },
  shouldSkipGeneratingVar
});

// ../../node_modules/@mui/material/Box/Box.js
var defaultTheme4 = createTheme_default2();
var Box2 = createBox({
  defaultTheme: defaultTheme4,
  defaultClassName: "MuiBox-root",
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box2.propTypes = {
  children: import_prop_types50.default.node,
  component: import_prop_types50.default.elementType,
  sx: import_prop_types50.default.oneOfType([import_prop_types50.default.arrayOf(import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object, import_prop_types50.default.bool])), import_prop_types50.default.func, import_prop_types50.default.object])
} : void 0;

// ../../node_modules/@mui/material/Slider/Slider.js
init_define_process();
var import_prop_types51 = __toESM(require_prop_types());
import * as React77 from "/react.mjs";

// ../../node_modules/@mui/material/utils/shouldSpreadAdditionalProps.js
init_define_process();
var shouldSpreadAdditionalProps = (Slot) => {
  return !Slot || !isHostComponent_default(Slot);
};
var shouldSpreadAdditionalProps_default = shouldSpreadAdditionalProps;

// ../../node_modules/@mui/material/Slider/Slider.js
import { jsx as _jsx38 } from "/react.mjs";
var _excluded43 = ["component", "components", "componentsProps", "color", "size"];
var sliderClasses = _extends({}, sliderUnstyledClasses_default, generateUtilityClasses("MuiSlider", ["colorPrimary", "colorSecondary", "thumbColorPrimary", "thumbColorSecondary", "sizeSmall", "thumbSizeSmall"]));
var SliderRoot = styled_default2("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`color${capitalize_default(ownerState.color)}`], ownerState.size !== "medium" && styles2[`size${capitalize_default(ownerState.size)}`], ownerState.marked && styles2.marked, ownerState.orientation === "vertical" && styles2.vertical, ownerState.track === "inverted" && styles2.trackInverted, ownerState.track === false && styles2.trackFalse];
  }
})(({
  theme,
  ownerState
}) => _extends({
  borderRadius: 12,
  boxSizing: "content-box",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  touchAction: "none",
  color: (theme.vars || theme).palette[ownerState.color].main,
  WebkitTapHighlightColor: "transparent"
}, ownerState.orientation === "horizontal" && _extends({
  height: 4,
  width: "100%",
  padding: "13px 0",
  "@media (pointer: coarse)": {
    padding: "20px 0"
  }
}, ownerState.size === "small" && {
  height: 2
}, ownerState.marked && {
  marginBottom: 20
}), ownerState.orientation === "vertical" && _extends({
  height: "100%",
  width: 4,
  padding: "0 13px",
  "@media (pointer: coarse)": {
    padding: "0 20px"
  }
}, ownerState.size === "small" && {
  width: 2
}, ownerState.marked && {
  marginRight: 44
}), {
  "@media print": {
    colorAdjust: "exact"
  },
  [`&.${sliderClasses.disabled}`]: {
    pointerEvents: "none",
    cursor: "default",
    color: (theme.vars || theme).palette.grey[400]
  },
  [`&.${sliderClasses.dragging}`]: {
    [`& .${sliderClasses.thumb}, & .${sliderClasses.track}`]: {
      transition: "none"
    }
  }
}));
true ? SliderRoot.propTypes = {
  children: import_prop_types51.default.node
} : void 0;
var SliderRail = styled_default2("span", {
  name: "MuiSlider",
  slot: "Rail",
  overridesResolver: (props, styles2) => styles2.rail
})(({
  ownerState
}) => _extends({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  backgroundColor: "currentColor",
  opacity: 0.38
}, ownerState.orientation === "horizontal" && {
  width: "100%",
  height: "inherit",
  top: "50%",
  transform: "translateY(-50%)"
}, ownerState.orientation === "vertical" && {
  height: "100%",
  width: "inherit",
  left: "50%",
  transform: "translateX(-50%)"
}, ownerState.track === "inverted" && {
  opacity: 1
}));
true ? SliderRail.propTypes = {
  children: import_prop_types51.default.node
} : void 0;
var SliderTrack = styled_default2("span", {
  name: "MuiSlider",
  slot: "Track",
  overridesResolver: (props, styles2) => styles2.track
})(({
  theme,
  ownerState
}) => {
  const color2 = theme.palette.mode === "light" ? lighten(theme.palette[ownerState.color].main, 0.62) : darken(theme.palette[ownerState.color].main, 0.5);
  return _extends({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: theme.transitions.create(["left", "width", "bottom", "height"], {
      duration: theme.transitions.duration.shortest
    })
  }, ownerState.size === "small" && {
    border: "none"
  }, ownerState.orientation === "horizontal" && {
    height: "inherit",
    top: "50%",
    transform: "translateY(-50%)"
  }, ownerState.orientation === "vertical" && {
    width: "inherit",
    left: "50%",
    transform: "translateX(-50%)"
  }, ownerState.track === false && {
    display: "none"
  }, ownerState.track === "inverted" && {
    backgroundColor: theme.vars ? theme.vars.palette.Slider[`${ownerState.color}Track`] : color2,
    borderColor: theme.vars ? theme.vars.palette.Slider[`${ownerState.color}Track`] : color2
  });
});
true ? SliderTrack.propTypes = {
  children: import_prop_types51.default.node
} : void 0;
var SliderThumb = styled_default2("span", {
  name: "MuiSlider",
  slot: "Thumb",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.thumb, styles2[`thumbColor${capitalize_default(ownerState.color)}`], ownerState.size !== "medium" && styles2[`thumbSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "absolute",
  width: 20,
  height: 20,
  boxSizing: "border-box",
  borderRadius: "50%",
  outline: 0,
  backgroundColor: "currentColor",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: theme.transitions.create(["box-shadow", "left", "bottom"], {
    duration: theme.transitions.duration.shortest
  })
}, ownerState.size === "small" && {
  width: 12,
  height: 12
}, ownerState.orientation === "horizontal" && {
  top: "50%",
  transform: "translate(-50%, -50%)"
}, ownerState.orientation === "vertical" && {
  left: "50%",
  transform: "translate(-50%, 50%)"
}, {
  "&:before": _extends({
    position: "absolute",
    content: '""',
    borderRadius: "inherit",
    width: "100%",
    height: "100%",
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.size === "small" && {
    boxShadow: "none"
  }),
  "&::after": {
    position: "absolute",
    content: '""',
    borderRadius: "50%",
    width: 42,
    height: 42,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  [`&:hover, &.${sliderClasses.focusVisible}`]: {
    boxShadow: `0px 0px 0px 8px ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.16)` : alpha(theme.palette[ownerState.color].main, 0.16)}`,
    "@media (hover: none)": {
      boxShadow: "none"
    }
  },
  [`&.${sliderClasses.active}`]: {
    boxShadow: `0px 0px 0px 14px ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.16)` : alpha(theme.palette[ownerState.color].main, 0.16)}`
  },
  [`&.${sliderClasses.disabled}`]: {
    "&:hover": {
      boxShadow: "none"
    }
  }
}));
true ? SliderThumb.propTypes = {
  children: import_prop_types51.default.node
} : void 0;
var SliderValueLabel = styled_default2(SliderValueLabelUnstyled, {
  name: "MuiSlider",
  slot: "ValueLabel",
  overridesResolver: (props, styles2) => styles2.valueLabel
})(({
  theme,
  ownerState
}) => _extends({
  [`&.${sliderClasses.valueLabelOpen}`]: {
    transform: "translateY(-100%) scale(1)"
  },
  zIndex: 1,
  whiteSpace: "nowrap"
}, theme.typography.body2, {
  fontWeight: 500,
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest
  }),
  transformOrigin: "bottom center",
  transform: "translateY(-100%) scale(0)",
  position: "absolute",
  backgroundColor: (theme.vars || theme).palette.grey[600],
  borderRadius: 2,
  color: (theme.vars || theme).palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.75rem"
}, ownerState.orientation === "horizontal" && {
  top: "-10px",
  "&:before": {
    position: "absolute",
    content: '""',
    width: 8,
    height: 8,
    transform: "translate(-50%, 50%) rotate(45deg)",
    backgroundColor: "inherit",
    bottom: 0,
    left: "50%"
  }
}, ownerState.orientation === "vertical" && {
  right: "30px",
  top: "25px",
  "&:before": {
    position: "absolute",
    content: '""',
    width: 8,
    height: 8,
    transform: "translate(-50%, 50%) rotate(45deg)",
    backgroundColor: "inherit",
    right: "-20%",
    top: "25%"
  }
}, ownerState.size === "small" && {
  fontSize: theme.typography.pxToRem(12),
  padding: "0.25rem 0.5rem"
}));
true ? SliderValueLabel.propTypes = {
  children: import_prop_types51.default.node
} : void 0;
var SliderMark = styled_default2("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "markActive",
  overridesResolver: (props, styles2) => styles2.mark
})(({
  theme,
  ownerState,
  markActive
}) => _extends({
  position: "absolute",
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: "currentColor"
}, ownerState.orientation === "horizontal" && {
  top: "50%",
  transform: "translate(-1px, -50%)"
}, ownerState.orientation === "vertical" && {
  left: "50%",
  transform: "translate(-50%, 1px)"
}, markActive && {
  backgroundColor: (theme.vars || theme).palette.background.paper,
  opacity: 0.8
}));
true ? SliderMark.propTypes = {
  children: import_prop_types51.default.node
} : void 0;
var SliderMarkLabel = styled_default2("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "markLabelActive",
  overridesResolver: (props, styles2) => styles2.markLabel
})(({
  theme,
  ownerState,
  markLabelActive
}) => _extends({}, theme.typography.body2, {
  color: (theme.vars || theme).palette.text.secondary,
  position: "absolute",
  whiteSpace: "nowrap"
}, ownerState.orientation === "horizontal" && {
  top: 30,
  transform: "translateX(-50%)",
  "@media (pointer: coarse)": {
    top: 40
  }
}, ownerState.orientation === "vertical" && {
  left: 36,
  transform: "translateY(50%)",
  "@media (pointer: coarse)": {
    left: 44
  }
}, markLabelActive && {
  color: (theme.vars || theme).palette.text.primary
}));
true ? SliderMarkLabel.propTypes = {
  children: import_prop_types51.default.node
} : void 0;
var extendUtilityClasses = (ownerState) => {
  const {
    color: color2,
    size,
    classes = {}
  } = ownerState;
  return _extends({}, classes, {
    root: clsx_m_default(classes.root, getSliderUtilityClass(`color${capitalize_default(color2)}`), classes[`color${capitalize_default(color2)}`], size && [getSliderUtilityClass(`size${capitalize_default(size)}`), classes[`size${capitalize_default(size)}`]]),
    thumb: clsx_m_default(classes.thumb, getSliderUtilityClass(`thumbColor${capitalize_default(color2)}`), classes[`thumbColor${capitalize_default(color2)}`], size && [getSliderUtilityClass(`thumbSize${capitalize_default(size)}`), classes[`thumbSize${capitalize_default(size)}`]])
  });
};
var Slider = React77.forwardRef(function Slider2(inputProps, ref) {
  var _componentsProps$root, _componentsProps$thum, _componentsProps$trac, _componentsProps$valu;
  const props = useThemeProps2({
    props: inputProps,
    name: "MuiSlider"
  });
  const theme = useTheme4();
  const isRtl = theme.direction === "rtl";
  const {
    component = "span",
    components = {},
    componentsProps = {},
    color: color2 = "primary",
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded43);
  const ownerState = _extends({}, props, {
    color: color2,
    size
  });
  const classes = extendUtilityClasses(ownerState);
  return _jsx38(SliderUnstyled_default, _extends({}, other, {
    isRtl,
    components: _extends({
      Root: SliderRoot,
      Rail: SliderRail,
      Track: SliderTrack,
      Thumb: SliderThumb,
      ValueLabel: SliderValueLabel,
      Mark: SliderMark,
      MarkLabel: SliderMarkLabel
    }, components),
    componentsProps: _extends({}, componentsProps, {
      root: _extends({}, componentsProps.root, shouldSpreadAdditionalProps_default(components.Root) && {
        as: component,
        ownerState: _extends({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState, {
          color: color2,
          size
        })
      }),
      thumb: _extends({}, componentsProps.thumb, shouldSpreadAdditionalProps_default(components.Thumb) && {
        ownerState: _extends({}, (_componentsProps$thum = componentsProps.thumb) == null ? void 0 : _componentsProps$thum.ownerState, {
          color: color2,
          size
        })
      }),
      track: _extends({}, componentsProps.track, shouldSpreadAdditionalProps_default(components.Track) && {
        ownerState: _extends({}, (_componentsProps$trac = componentsProps.track) == null ? void 0 : _componentsProps$trac.ownerState, {
          color: color2,
          size
        })
      }),
      valueLabel: _extends({}, componentsProps.valueLabel, shouldSpreadAdditionalProps_default(components.ValueLabel) && {
        ownerState: _extends({}, (_componentsProps$valu = componentsProps.valueLabel) == null ? void 0 : _componentsProps$valu.ownerState, {
          color: color2,
          size
        })
      })
    }),
    classes,
    ref
  }));
});
true ? Slider.propTypes = {
  "aria-label": chainPropTypes(import_prop_types51.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  "aria-labelledby": import_prop_types51.default.string,
  "aria-valuetext": chainPropTypes(import_prop_types51.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  children: import_prop_types51.default.node,
  classes: import_prop_types51.default.object,
  color: import_prop_types51.default.oneOfType([import_prop_types51.default.oneOf(["primary", "secondary"]), import_prop_types51.default.string]),
  components: import_prop_types51.default.shape({
    Input: import_prop_types51.default.elementType,
    Mark: import_prop_types51.default.elementType,
    MarkLabel: import_prop_types51.default.elementType,
    Rail: import_prop_types51.default.elementType,
    Root: import_prop_types51.default.elementType,
    Thumb: import_prop_types51.default.elementType,
    Track: import_prop_types51.default.elementType,
    ValueLabel: import_prop_types51.default.elementType
  }),
  componentsProps: import_prop_types51.default.shape({
    input: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object]),
    mark: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object]),
    markLabel: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object]),
    rail: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object]),
    root: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object]),
    thumb: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object]),
    track: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object]),
    valueLabel: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.shape({
      children: import_prop_types51.default.element,
      className: import_prop_types51.default.string,
      components: import_prop_types51.default.shape({
        Root: import_prop_types51.default.elementType
      }),
      open: import_prop_types51.default.bool,
      style: import_prop_types51.default.object,
      value: import_prop_types51.default.number,
      valueLabelDisplay: import_prop_types51.default.oneOf(["auto", "off", "on"])
    })])
  }),
  defaultValue: import_prop_types51.default.oneOfType([import_prop_types51.default.arrayOf(import_prop_types51.default.number), import_prop_types51.default.number]),
  disabled: import_prop_types51.default.bool,
  disableSwap: import_prop_types51.default.bool,
  getAriaLabel: import_prop_types51.default.func,
  getAriaValueText: import_prop_types51.default.func,
  isRtl: import_prop_types51.default.bool,
  marks: import_prop_types51.default.oneOfType([import_prop_types51.default.arrayOf(import_prop_types51.default.shape({
    label: import_prop_types51.default.node,
    value: import_prop_types51.default.number.isRequired
  })), import_prop_types51.default.bool]),
  max: import_prop_types51.default.number,
  min: import_prop_types51.default.number,
  name: import_prop_types51.default.string,
  onChange: import_prop_types51.default.func,
  onChangeCommitted: import_prop_types51.default.func,
  orientation: import_prop_types51.default.oneOf(["horizontal", "vertical"]),
  scale: import_prop_types51.default.func,
  size: import_prop_types51.default.oneOfType([import_prop_types51.default.oneOf(["small", "medium"]), import_prop_types51.default.string]),
  step: import_prop_types51.default.number,
  sx: import_prop_types51.default.oneOfType([import_prop_types51.default.arrayOf(import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object, import_prop_types51.default.bool])), import_prop_types51.default.func, import_prop_types51.default.object]),
  tabIndex: import_prop_types51.default.number,
  track: import_prop_types51.default.oneOf(["inverted", "normal", false]),
  value: import_prop_types51.default.oneOfType([import_prop_types51.default.arrayOf(import_prop_types51.default.number), import_prop_types51.default.number]),
  valueLabelDisplay: import_prop_types51.default.oneOf(["auto", "off", "on"]),
  valueLabelFormat: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.string])
} : void 0;

// ../../node_modules/@mui/material/utils/createSvgIcon.js
init_define_process();
import * as React79 from "/react.mjs";

// ../../node_modules/@mui/material/SvgIcon/index.js
init_define_process();

// ../../node_modules/@mui/material/SvgIcon/SvgIcon.js
init_define_process();
var import_prop_types52 = __toESM(require_prop_types());
import * as React78 from "/react.mjs";

// ../../node_modules/@mui/material/SvgIcon/svgIconClasses.js
init_define_process();
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// ../../node_modules/@mui/material/SvgIcon/SvgIcon.js
import { jsx as _jsx39 } from "/react.mjs";
import { jsxs as _jsxs15 } from "/react.mjs";
var _excluded44 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
var useUtilityClasses20 = (ownerState) => {
  const {
    color: color2,
    fontSize: fontSize2,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color2 !== "inherit" && `color${capitalize_default(color2)}`, `fontSize${capitalize_default(fontSize2)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled_default2("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize_default(ownerState.color)}`], styles2[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette$ownerState$c2, _palette2, _palette2$action, _palette3, _palette3$action;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875"
    }[ownerState.fontSize],
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null ? void 0 : (_palette$ownerState$c2 = _palette[ownerState.color]) == null ? void 0 : _palette$ownerState$c2.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null ? void 0 : (_palette2$action = _palette2.action) == null ? void 0 : _palette2$action.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null ? void 0 : (_palette3$action = _palette3.action) == null ? void 0 : _palette3$action.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
var SvgIcon = React78.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children: children2,
    className,
    color: color2 = "inherit",
    component = "svg",
    fontSize: fontSize2 = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded44);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    fontSize: fontSize2,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses20(ownerState);
  return _jsxs15(SvgIconRoot, _extends({
    as: component,
    className: clsx_m_default(classes.root, className),
    ownerState,
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, {
    children: [children2, titleAccess ? _jsx39("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  children: import_prop_types52.default.node,
  classes: import_prop_types52.default.object,
  className: import_prop_types52.default.string,
  color: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types52.default.string]),
  component: import_prop_types52.default.elementType,
  fontSize: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types52.default.string]),
  htmlColor: import_prop_types52.default.string,
  inheritViewBox: import_prop_types52.default.bool,
  shapeRendering: import_prop_types52.default.string,
  sx: import_prop_types52.default.oneOfType([import_prop_types52.default.arrayOf(import_prop_types52.default.oneOfType([import_prop_types52.default.func, import_prop_types52.default.object, import_prop_types52.default.bool])), import_prop_types52.default.func, import_prop_types52.default.object]),
  titleAccess: import_prop_types52.default.string,
  viewBox: import_prop_types52.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// ../../node_modules/@mui/material/utils/createSvgIcon.js
import { jsx as _jsx40 } from "/react.mjs";
function createSvgIcon(path, displayName) {
  const Component = (props, ref) => _jsx40(SvgIcon_default, _extends({
    "data-testid": `${displayName}Icon`,
    ref
  }, props, {
    children: path
  }));
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React79.memo(React79.forwardRef(Component));
}

// ../../node_modules/@mui/material/ToggleButton/index.js
init_define_process();

// ../../node_modules/@mui/material/ToggleButton/ToggleButton.js
init_define_process();
var import_prop_types53 = __toESM(require_prop_types());
import * as React80 from "/react.mjs";

// ../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js
init_define_process();
function getToggleButtonUtilityClass(slot) {
  return generateUtilityClass("MuiToggleButton", slot);
}
var toggleButtonClasses = generateUtilityClasses("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge"]);
var toggleButtonClasses_default = toggleButtonClasses;

// ../../node_modules/@mui/material/ToggleButton/ToggleButton.js
import { jsx as _jsx41 } from "/react.mjs";
var _excluded45 = ["children", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "onChange", "onClick", "selected", "size", "value"];
var useUtilityClasses21 = (ownerState) => {
  const {
    classes,
    fullWidth,
    selected,
    disabled,
    size,
    color: color2
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled", fullWidth && "fullWidth", `size${capitalize_default(size)}`, color2]
  };
  return composeClasses(slots, getToggleButtonUtilityClass, classes);
};
var ToggleButtonRoot = styled_default2(ButtonBase_default, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`size${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  let selectedColor = ownerState.color === "standard" ? theme.palette.text.primary : theme.palette[ownerState.color].main;
  let selectedColorChannel;
  if (theme.vars) {
    selectedColor = ownerState.color === "standard" ? theme.vars.palette.text.primary : theme.vars.palette[ownerState.color].main;
    selectedColorChannel = ownerState.color === "standard" ? theme.vars.palette.text.primaryChannel : theme.vars.palette[ownerState.color].mainChannel;
  }
  return _extends({}, theme.typography.button, {
    borderRadius: (theme.vars || theme).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(theme.vars || theme).palette.divider}`,
    color: (theme.vars || theme).palette.action.active
  }, ownerState.fullWidth && {
    width: "100%"
  }, {
    [`&.${toggleButtonClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled,
      border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${toggleButtonClasses_default.selected}`]: {
      color: selectedColor,
      backgroundColor: theme.vars ? `rgba(${selectedColorChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(selectedColor, theme.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${selectedColorChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(selectedColor, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: theme.vars ? `rgba(${selectedColorChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(selectedColor, theme.palette.action.selectedOpacity)
        }
      }
    }
  }, ownerState.size === "small" && {
    padding: 7,
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && {
    padding: 15,
    fontSize: theme.typography.pxToRem(15)
  });
});
var ToggleButton = React80.forwardRef(function ToggleButton2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiToggleButton"
  });
  const {
    children: children2,
    className,
    color: color2 = "standard",
    disabled = false,
    disableFocusRipple = false,
    fullWidth = false,
    onChange,
    onClick,
    selected,
    size = "medium",
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded45);
  const ownerState = _extends({}, props, {
    color: color2,
    disabled,
    disableFocusRipple,
    fullWidth,
    size
  });
  const classes = useUtilityClasses21(ownerState);
  const handleChange = (event) => {
    if (onClick) {
      onClick(event, value);
      if (event.defaultPrevented) {
        return;
      }
    }
    if (onChange) {
      onChange(event, value);
    }
  };
  return _jsx41(ToggleButtonRoot, _extends({
    className: clsx_m_default(classes.root, className),
    disabled,
    focusRipple: !disableFocusRipple,
    ref,
    onClick: handleChange,
    onChange,
    value,
    ownerState,
    "aria-pressed": selected
  }, other, {
    children: children2
  }));
});
true ? ToggleButton.propTypes = {
  children: import_prop_types53.default.node,
  classes: import_prop_types53.default.object,
  className: import_prop_types53.default.string,
  color: import_prop_types53.default.oneOfType([import_prop_types53.default.oneOf(["standard", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types53.default.string]),
  disabled: import_prop_types53.default.bool,
  disableFocusRipple: import_prop_types53.default.bool,
  disableRipple: import_prop_types53.default.bool,
  fullWidth: import_prop_types53.default.bool,
  onChange: import_prop_types53.default.func,
  onClick: import_prop_types53.default.func,
  selected: import_prop_types53.default.bool,
  size: import_prop_types53.default.oneOfType([import_prop_types53.default.oneOf(["small", "medium", "large"]), import_prop_types53.default.string]),
  sx: import_prop_types53.default.oneOfType([import_prop_types53.default.arrayOf(import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object, import_prop_types53.default.bool])), import_prop_types53.default.func, import_prop_types53.default.object]),
  value: import_prop_types53.default.any.isRequired
} : void 0;
var ToggleButton_default = ToggleButton;

// ../../node_modules/@mui/material/ToggleButtonGroup/index.js
init_define_process();

// ../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js
init_define_process();
var import_react_is3 = __toESM(require_react_is2());
var import_prop_types54 = __toESM(require_prop_types());
import * as React81 from "/react.mjs";

// ../../node_modules/@mui/material/ToggleButtonGroup/isValueSelected.js
init_define_process();
function isValueSelected(value, candidate) {
  if (candidate === void 0 || value === void 0) {
    return false;
  }
  if (Array.isArray(candidate)) {
    return candidate.indexOf(value) >= 0;
  }
  return value === candidate;
}

// ../../node_modules/@mui/material/ToggleButtonGroup/toggleButtonGroupClasses.js
init_define_process();
function getToggleButtonGroupUtilityClass(slot) {
  return generateUtilityClass("MuiToggleButtonGroup", slot);
}
var toggleButtonGroupClasses = generateUtilityClasses("MuiToggleButtonGroup", ["root", "selected", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical"]);
var toggleButtonGroupClasses_default = toggleButtonGroupClasses;

// ../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js
import { jsx as _jsx42 } from "/react.mjs";
var _excluded46 = ["children", "className", "color", "disabled", "exclusive", "fullWidth", "onChange", "orientation", "size", "value"];
var useUtilityClasses22 = (ownerState) => {
  const {
    classes,
    orientation,
    fullWidth,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation === "vertical" && "vertical", fullWidth && "fullWidth"],
    grouped: ["grouped", `grouped${capitalize_default(orientation)}`, disabled && "disabled"]
  };
  return composeClasses(slots, getToggleButtonGroupUtilityClass, classes);
};
var ToggleButtonGroupRoot = styled_default2("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${toggleButtonGroupClasses_default.grouped}`]: styles2.grouped
    }, {
      [`& .${toggleButtonGroupClasses_default.grouped}`]: styles2[`grouped${capitalize_default(ownerState.orientation)}`]
    }, styles2.root, ownerState.orientation === "vertical" && styles2.vertical, ownerState.fullWidth && styles2.fullWidth];
  }
})(({
  ownerState,
  theme
}) => _extends({
  display: "inline-flex",
  borderRadius: (theme.vars || theme).shape.borderRadius
}, ownerState.orientation === "vertical" && {
  flexDirection: "column"
}, ownerState.fullWidth && {
  width: "100%"
}, {
  [`& .${toggleButtonGroupClasses_default.grouped}`]: _extends({}, ownerState.orientation === "horizontal" ? {
    "&:not(:first-of-type)": {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    "&:not(:last-of-type)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    [`&.${toggleButtonGroupClasses_default.selected} + .${toggleButtonGroupClasses_default.grouped}.${toggleButtonGroupClasses_default.selected}`]: {
      borderLeft: 0,
      marginLeft: 0
    }
  } : {
    "&:not(:first-of-type)": {
      marginTop: -1,
      borderTop: "1px solid transparent",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },
    "&:not(:last-of-type)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    [`&.${toggleButtonGroupClasses_default.selected} + .${toggleButtonGroupClasses_default.grouped}.${toggleButtonGroupClasses_default.selected}`]: {
      borderTop: 0,
      marginTop: 0
    }
  })
}));
var ToggleButtonGroup = React81.forwardRef(function ToggleButtonGroup2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiToggleButtonGroup"
  });
  const {
    children: children2,
    className,
    color: color2 = "standard",
    disabled = false,
    exclusive = false,
    fullWidth = false,
    onChange,
    orientation = "horizontal",
    size = "medium",
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded46);
  const ownerState = _extends({}, props, {
    disabled,
    fullWidth,
    orientation,
    size
  });
  const classes = useUtilityClasses22(ownerState);
  const handleChange = (event, buttonValue) => {
    if (!onChange) {
      return;
    }
    const index = value && value.indexOf(buttonValue);
    let newValue;
    if (value && index >= 0) {
      newValue = value.slice();
      newValue.splice(index, 1);
    } else {
      newValue = value ? value.concat(buttonValue) : [buttonValue];
    }
    onChange(event, newValue);
  };
  const handleExclusiveChange = (event, buttonValue) => {
    if (!onChange) {
      return;
    }
    onChange(event, value === buttonValue ? null : buttonValue);
  };
  return _jsx42(ToggleButtonGroupRoot, _extends({
    role: "group",
    className: clsx_m_default(classes.root, className),
    ref,
    ownerState
  }, other, {
    children: React81.Children.map(children2, (child) => {
      if (!React81.isValidElement(child)) {
        return null;
      }
      if (true) {
        if ((0, import_react_is3.isFragment)(child)) {
          console.error(["MUI: The ToggleButtonGroup component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
        }
      }
      return React81.cloneElement(child, {
        className: clsx_m_default(classes.grouped, child.props.className),
        onChange: exclusive ? handleExclusiveChange : handleChange,
        selected: child.props.selected === void 0 ? isValueSelected(child.props.value, value) : child.props.selected,
        size: child.props.size || size,
        fullWidth,
        color: child.props.color || color2,
        disabled: child.props.disabled || disabled
      });
    })
  }));
});
true ? ToggleButtonGroup.propTypes = {
  children: import_prop_types54.default.node,
  classes: import_prop_types54.default.object,
  className: import_prop_types54.default.string,
  color: import_prop_types54.default.oneOfType([import_prop_types54.default.oneOf(["standard", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types54.default.string]),
  disabled: import_prop_types54.default.bool,
  exclusive: import_prop_types54.default.bool,
  fullWidth: import_prop_types54.default.bool,
  onChange: import_prop_types54.default.func,
  orientation: import_prop_types54.default.oneOf(["horizontal", "vertical"]),
  size: import_prop_types54.default.oneOfType([import_prop_types54.default.oneOf(["small", "medium", "large"]), import_prop_types54.default.string]),
  sx: import_prop_types54.default.oneOfType([import_prop_types54.default.arrayOf(import_prop_types54.default.oneOfType([import_prop_types54.default.func, import_prop_types54.default.object, import_prop_types54.default.bool])), import_prop_types54.default.func, import_prop_types54.default.object]),
  value: import_prop_types54.default.any
} : void 0;
var ToggleButtonGroup_default = ToggleButtonGroup;

// js/mui.tsx
var FullscreenIcon = createSvgIcon(jsx("path", {
  d: "M17 4h5v5h-2V6h-3V4zM4 9V6h3V4H2v5h2zm16 6v3h-3v2h5v-5h-2zM7 18H4v-3H2v5h5v-2zM18 8H6v8h12V8z"
}), "Fullscreen");
var Phone = createSvgIcon(jsx("path", {
  key: "12",
  d: "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"
}), "PhoneAndroid");
var Share = createSvgIcon(jsx("path", {
  key: "12",
  d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
}), "Share");
var Tablet = createSvgIcon(jsx("path", {
  key: "12",
  d: "M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"
}), "TabletAndroid");
var Tv = createSvgIcon(jsx("path", {
  key: "12",
  d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"
}), "Tv");
var MyFsb = ({ onClick, children: children2 }) => jsx(Fab_default, {
  variant: "extended",
  color: "primary",
  onClick
}, children2);
var QrCode = createSvgIcon(jsx("path", {
  key: "12",
  d: "M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm0 10h2v2h-2zm-6-6h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0-4h2v2h-2zm2 2h2v2h-2z"
}), "QrCode");

// js/Qr.tsx
var QRious = lazy(() => import("./lib-DE24NYV7.mjs").then(({ QRious: QRious2 }) => ({ default: QRious2 })));
var QR = ({ url }) => jsx(Suspense, null, jsx(QRious, {
  value: url
}));
var QRButton = ({ url }) => {
  const [showQR, setQR] = useState23(false);
  return jsx(LazyMotion, {
    features: domAnimation
  }, jsx(m.div, {
    animate: {
      width: showQR ? 200 : 56,
      height: showQR ? 220 : 48
    },
    onClick: () => {
      setQR(!showQR);
    },
    css: css`
          margin-top: 12px;
          margin-bottom: 12px;
              `
  }, showQR ? jsx(QR, {
    key: url || "http://spike.land",
    url: url || "/live/coder/public"
  }) : jsx(MyFsb, null, jsx(QrCode, null))));
};

// js/DraggableWindow.tsx
var ToggleButtonGroup3 = ToggleButtonGroup_default;
var ToggleButton3 = ToggleButton_default;
var breakPoints = [680, 768, 1920];
var breakPointHeights = [1137, 1024, 1080];
var sizes = [10, 25, 50, 75, 100, 150];
var bg = `rgba(${Math.random() * 128 + 64}, ${Math.random() * 128 + 64}, ${Math.random() * 128 + 64}, ${!navigator.userAgent.includes("Firefox") ? 0.3 : 0.7})`;
var DraggableWindow = ({
  children: children2,
  room,
  hashCode: hashCode2
}) => {
  const [scaleRange, changeScaleRange] = useState24(100);
  const startPositions = { bottom: 0, right: 0 };
  const [{ bottom: bottom3, right: right3 }, setPositions] = useState24(startPositions);
  const [width2, setWidth] = useState24(window.innerWidth * devicePixelRatio);
  const [height2, setHeight] = useState24(window.innerHeight * devicePixelRatio);
  const ref = useRef28(null);
  const scale = scaleRange / 100;
  useEffect28(() => {
    const reveal = async () => {
      setPositions({
        bottom: window.innerHeight * 0.2,
        right: window.innerWidth * 0.2
      });
      if (window.innerWidth / devicePixelRatio < 600) {
        changeScaleRange(50);
        setWidth(breakPoints[0]);
        setHeight(breakPointHeights[0]);
      }
      if (window.innerWidth / devicePixelRatio < 1200) {
        changeScaleRange(75);
        setWidth(breakPoints[0]);
        setHeight(breakPointHeights[0]);
      } else if (window.innerWidth / devicePixelRatio < 1800) {
        setWidth(breakPoints[1]);
        setHeight(breakPointHeights[1]);
        changeScaleRange(50);
      } else if (window.innerWidth / devicePixelRatio < 2500) {
        setWidth(breakPoints[1]);
        setHeight(breakPointHeights[1]);
        changeScaleRange(75);
      } else if (window.innerWidth / devicePixelRatio > 2500) {
        setWidth(breakPoints[1]);
        setHeight(breakPointHeights[1]);
        changeScaleRange(100);
      }
      setPositions({
        bottom: 20,
        right: 20
      });
    };
    reveal();
  }, []);
  return jsx(LazyMotion, {
    features: domMax
  }, jsx(m.div, {
    transition: { delay: 0, duration: 0.4 },
    ref,
    initial: {
      top: 0,
      padding: 0,
      right: 0,
      borderRadius: 0
    },
    animate: {
      top: bottom3,
      padding: 8,
      right: right3,
      borderRadius: 16
    },
    css: css`
            background-color:${bg};
            backdrop-filter: blur(15px);
            z-index: 10;

            white-space: normal;
            position: fixed;
          `,
    drag: true,
    dragMomentum: false,
    dragConstraints: {
      left: 0,
      right: width2 - 20 - width2 / 6,
      bottom: innerHeight
    },
    dragElastic: 0.5
  }, jsx("div", {
    css: css` 
              display: flex;
              
                `
  }, jsx("div", {
    css: css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `
  }, jsx(m.div, {
    transition: { delay: 0, duration: 0.4 },
    initial: { height: 0, width: 0 },
    animate: { height: "auto", width: "auto" }
  }, jsx(ToggleButtonGroup3, {
    value: scaleRange,
    size: "small",
    exclusive: true,
    onChange: (_e, newScale) => {
      newScale && changeScaleRange(newScale);
    }
  }, sizes.map((size) => jsx(ToggleButton3, {
    key: size,
    value: size
  }, jsx("span", {
    css: css`
                       color: ${size === scaleRange ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.3)"};
                       `
  }, size, "%"))))), jsx(m.div, {
    transition: { delay: 0, duration: 0.4 },
    initial: {
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0
    },
    animate: {
      width: width2 * scale / devicePixelRatio,
      height: height2 * scale / devicePixelRatio,
      borderRadius: 8
    },
    css: css`

                display: block;
                overflow: hidden;
                overflow-y: hidden;
            `
  }, jsx(m.div, {
    transition: { delay: 0, duration: 0.4 },
    initial: {
      width: window.innerWidth,
      height: window.innerHeight,
      background: "rgba(0,0,0, 1)",
      scale: 1
    },
    animate: {
      background: "rgba(92,92,92, 0.5)",
      transformOrigin: "0px 0px",
      width: width2 / devicePixelRatio,
      height: height2 / devicePixelRatio,
      scale: scaleRange / 100
    },
    "data-test-id": "z-body",
    css: css`
                  overflow:overlay;
                  overflow-y: hidden;
              `
  }, children2)), jsx(m.div, {
    transition: { delay: 0, duration: 0.4 }
  }, jsx(ToggleButtonGroup3, {
    value: width2,
    size: "small",
    exclusive: true,
    onChange: (_e, newSize) => {
      if (newSize) {
        setHeight(breakPointHeights[breakPoints.indexOf(newSize)]);
        setWidth(newSize);
      }
    }
  }, breakPoints.map((size) => jsx(ToggleButton3, {
    key: `size-${size}`,
    value: size
  }, size === 680 ? jsx(Phone, {
    css: css`
                        color: ${width2 === 680 ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.3)"};
                        `
  }) : size === 768 ? jsx(Tablet, {
    css: css`
                        color: ${width2 === 768 ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.3)"};
                        `
  }) : jsx(Tv, {
    css: css`
                        color: ${width2 === 1920 ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.3)"};
                      `
  })))))), jsx(m.div, {
    transition: { delay: 0, duration: 0.4 },
    initial: { height: 0, width: 0 },
    animate: { height: "100%", width: "auto" }
  }, jsx("div", {
    css: css`
              padding: 16px;
              display: flex;
              overflow: "hidden";
              align-items: center;          
              flex-direction: column;
              `
  }, jsx(MyFsb, {
    key: "fullscreen",
    onClick: () => {
      document.getElementById("root")?.requestFullscreen();
    }
  }, jsx(FullscreenIcon, {
    key: "fs"
  })), jsx(QRButton, {
    url: location.origin + `/live/${room}/public`,
    key: `qr-${hashCode2}`
  }), jsx(MyFsb, {
    key: "Share",
    onClick: () => open(`/live/${room}/public`)
  }, jsx(Share, null)))))));
};

// js/renderPreviewWindow.tsx
var RainbowContainer = ({ children: children2 }) => jsx("div", {
  css: css`
height: 100%;
width: 100%;
background-blend-mode: overlay;
background:  repeating-radial-gradient(circle at bottom left, 
              #fedc00 0, #fedc00 5.5555555556%, 
              #fcb712 0, #fcb712 11.1111111111%, 
              #f7921e 0, #f7921e 16.6666666667%, 
            #e87f24 0, #e87f24 22.2222222222%, 
            #dd6227 0, #dd6227 27.7777777778%,
             #dc4c27 0, #dc4c27 33.3333333333%, 
            #ca3435 0, #ca3435 38.8888888889%, 
            #b82841 0, #b82841 44.4444444444%, 
            #953751 0, #953751 50%, #364c88 0, 
            #364c88 55.5555555556%, #16599d 0, 
            #16599d 61.1111111111%, #02609e 0, 
            #02609e 66.6666666667%, #0073a9 0, 
            #0073a9 72.2222222222%, #008aa4 0, 
            #008aa4 77.7777777778%, #239a87 0, 
            #239a87 83.3333333333%, #7cba6d 0, 
            #7cba6d 88.8888888889%, #becc2f 0, 
            #becc2f 94.4444444444%, #e0d81d 0, 
            #e0d81d 100%), 
            repeating-radial-gradient(circle at bottom right, 
              #fedc00 0, #fedc00 5.5555555556%, 
              #fcb712 0, #fcb712 11.1111111111%, 
              #f7921e 0, #f7921e 16.6666666667%, 
              #e87f24 0, #e87f24 22.2222222222%, 
              #dd6227 0, #dd6227 27.7777777778%, 
              #dc4c27 0, #dc4c27 33.3333333333%, 
              #ca3435 0, #ca3435 38.8888888889%, 
              #b82841 0, #b82841 44.4444444444%, 
              #953751 0, #953751 50%,
               #364c88 0, #364c88 55.5555555556%, 
               #16599d 0, #16599d 61.1111111111%, 
               #02609e 0, #02609e 66.6666666667%, 
               #0073a9 0, #0073a9 72.2222222222%, 
               #008aa4 0, #008aa4 77.7777777778%,
                #239a87 0, #239a87 83.3333333333%, 
                #7cba6d 0, #7cba6d 88.8888888889%, 
                #becc2f 0, #becc2f 94.4444444444%, 
                #e0d81d 0, #e0d81d 100%);
`
}, children2);
var MyAutoUpdatingApp = () => {
  const [hash3, setHash] = useState25(() => hashCode());
  useEffect29(() => {
    onSessionUpdate(async () => {
      const newHash = hashCode();
      if (hash3 !== newHash) {
        try {
          await appFactory(mST().transpiled);
          setHash(newHash);
        } catch (e) {
          console.error({ e });
        }
      }
    }, "myApp");
  }, [hash3, setHash]);
  return jsx(AutoUpdateApp, {
    key: hash3,
    hash: hash3
  });
};
var renderPreviewWindow = async (codeSpace) => {
  try {
    await appFactory(mST().transpiled);
  } catch (e) {
    console.error({ e });
  }
  if (location.pathname.endsWith("public") || location.pathname.endsWith("hydrated")) {
    appRoot.render(jsx(MyAutoUpdatingApp, null));
    return;
  }
  const { Editor } = await import("./Editor-BFKH4NKS.mjs");
  appRoot.render(jsx(RainbowContainer, null, jsx(DraggableWindow, {
    hashCode: 0,
    room: codeSpace
  }, jsx(MyAutoUpdatingApp, null)), jsx(Editor, {
    code: mST().code,
    i: mST().i,
    codeSpace
  })));
};
export {
  renderPreviewWindow
};
