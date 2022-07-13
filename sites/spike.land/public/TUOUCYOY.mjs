import {
  applyPatch,
  hashCode,
  initShims,
  mST,
  makePatch,
  makePatchFrom,
  startSession
} from "./GGJRYCBP.mjs";
import {
  require_browser
} from "./A2CAC27W.mjs";
import {
  __commonJS,
  __toESM,
  define_process_default,
  init_define_process
} from "./LC4ALKUC.mjs";

// ../../node_modules/msw/node_modules/statuses/codes.json
var require_codes = __commonJS({
  "../../node_modules/msw/node_modules/statuses/codes.json"(exports, module) {
    module.exports = {
      "100": "Continue",
      "101": "Switching Protocols",
      "102": "Processing",
      "103": "Early Hints",
      "200": "OK",
      "201": "Created",
      "202": "Accepted",
      "203": "Non-Authoritative Information",
      "204": "No Content",
      "205": "Reset Content",
      "206": "Partial Content",
      "207": "Multi-Status",
      "208": "Already Reported",
      "226": "IM Used",
      "300": "Multiple Choices",
      "301": "Moved Permanently",
      "302": "Found",
      "303": "See Other",
      "304": "Not Modified",
      "305": "Use Proxy",
      "307": "Temporary Redirect",
      "308": "Permanent Redirect",
      "400": "Bad Request",
      "401": "Unauthorized",
      "402": "Payment Required",
      "403": "Forbidden",
      "404": "Not Found",
      "405": "Method Not Allowed",
      "406": "Not Acceptable",
      "407": "Proxy Authentication Required",
      "408": "Request Timeout",
      "409": "Conflict",
      "410": "Gone",
      "411": "Length Required",
      "412": "Precondition Failed",
      "413": "Payload Too Large",
      "414": "URI Too Long",
      "415": "Unsupported Media Type",
      "416": "Range Not Satisfiable",
      "417": "Expectation Failed",
      "418": "I'm a Teapot",
      "421": "Misdirected Request",
      "422": "Unprocessable Entity",
      "423": "Locked",
      "424": "Failed Dependency",
      "425": "Too Early",
      "426": "Upgrade Required",
      "428": "Precondition Required",
      "429": "Too Many Requests",
      "431": "Request Header Fields Too Large",
      "451": "Unavailable For Legal Reasons",
      "500": "Internal Server Error",
      "501": "Not Implemented",
      "502": "Bad Gateway",
      "503": "Service Unavailable",
      "504": "Gateway Timeout",
      "505": "HTTP Version Not Supported",
      "506": "Variant Also Negotiates",
      "507": "Insufficient Storage",
      "508": "Loop Detected",
      "509": "Bandwidth Limit Exceeded",
      "510": "Not Extended",
      "511": "Network Authentication Required"
    };
  }
});

// ../../node_modules/headers-polyfill/lib/utils/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "../../node_modules/headers-polyfill/lib/utils/normalizeHeaderName.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.normalizeHeaderName = void 0;
    var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
    function normalizeHeaderName(name) {
      if (typeof name !== "string") {
        name = String(name);
      }
      if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === "") {
        throw new TypeError("Invalid character in header field name");
      }
      return name.toLowerCase();
    }
    exports.normalizeHeaderName = normalizeHeaderName;
  }
});

// ../../node_modules/headers-polyfill/lib/utils/normalizeHeaderValue.js
var require_normalizeHeaderValue = __commonJS({
  "../../node_modules/headers-polyfill/lib/utils/normalizeHeaderValue.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.normalizeHeaderValue = void 0;
    function normalizeHeaderValue(value) {
      if (typeof value !== "string") {
        value = String(value);
      }
      return value;
    }
    exports.normalizeHeaderValue = normalizeHeaderValue;
  }
});

// ../../node_modules/headers-polyfill/lib/Headers.js
var require_Headers = __commonJS({
  "../../node_modules/headers-polyfill/lib/Headers.js"(exports) {
    "use strict";
    init_define_process();
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var _a;
    var _b;
    Object.defineProperty(exports, "__esModule", { value: true });
    var normalizeHeaderName_1 = require_normalizeHeaderName();
    var normalizeHeaderValue_1 = require_normalizeHeaderValue();
    var NORMALIZED_HEADERS = Symbol("normalizedHeaders");
    var RAW_HEADER_NAMES = Symbol("rawHeaderNames");
    var HeadersPolyfill = function() {
      function HeadersPolyfill2(init) {
        var _this = this;
        this[_a] = {};
        this[_b] = /* @__PURE__ */ new Map();
        if (["Headers", "HeadersPolyfill"].includes(init === null || init === void 0 ? void 0 : init.constructor.name) || init instanceof HeadersPolyfill2) {
          var initialHeaders = init;
          initialHeaders.forEach(function(value, name) {
            _this.append(name, value);
          }, this);
        } else if (Array.isArray(init)) {
          init.forEach(function(_c) {
            var _d = __read(_c, 2), name = _d[0], value = _d[1];
            _this.append(name, Array.isArray(value) ? value.join(", ") : value);
          });
        } else if (init) {
          Object.getOwnPropertyNames(init).forEach(function(name) {
            var value = init[name];
            _this.append(name, Array.isArray(value) ? value.join(", ") : value);
          });
        }
      }
      HeadersPolyfill2.prototype[_a = NORMALIZED_HEADERS, _b = RAW_HEADER_NAMES, Symbol.iterator] = function() {
        return this.entries();
      };
      HeadersPolyfill2.prototype.keys = function() {
        var _c, _d, name_1, e_1_1;
        var e_1, _e;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              _f.trys.push([0, 5, 6, 7]);
              _c = __values(Object.keys(this[NORMALIZED_HEADERS])), _d = _c.next();
              _f.label = 1;
            case 1:
              if (!!_d.done)
                return [3, 4];
              name_1 = _d.value;
              return [4, name_1];
            case 2:
              _f.sent();
              _f.label = 3;
            case 3:
              _d = _c.next();
              return [3, 1];
            case 4:
              return [3, 7];
            case 5:
              e_1_1 = _f.sent();
              e_1 = { error: e_1_1 };
              return [3, 7];
            case 6:
              try {
                if (_d && !_d.done && (_e = _c.return))
                  _e.call(_c);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
              return [7];
            case 7:
              return [2];
          }
        });
      };
      HeadersPolyfill2.prototype.values = function() {
        var _c, _d, value, e_2_1;
        var e_2, _e;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              _f.trys.push([0, 5, 6, 7]);
              _c = __values(Object.values(this[NORMALIZED_HEADERS])), _d = _c.next();
              _f.label = 1;
            case 1:
              if (!!_d.done)
                return [3, 4];
              value = _d.value;
              return [4, value];
            case 2:
              _f.sent();
              _f.label = 3;
            case 3:
              _d = _c.next();
              return [3, 1];
            case 4:
              return [3, 7];
            case 5:
              e_2_1 = _f.sent();
              e_2 = { error: e_2_1 };
              return [3, 7];
            case 6:
              try {
                if (_d && !_d.done && (_e = _c.return))
                  _e.call(_c);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
              return [7];
            case 7:
              return [2];
          }
        });
      };
      HeadersPolyfill2.prototype.entries = function() {
        var _c, _d, name_2, e_3_1;
        var e_3, _e;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              _f.trys.push([0, 5, 6, 7]);
              _c = __values(Object.keys(this[NORMALIZED_HEADERS])), _d = _c.next();
              _f.label = 1;
            case 1:
              if (!!_d.done)
                return [3, 4];
              name_2 = _d.value;
              return [4, [name_2, this.get(name_2)]];
            case 2:
              _f.sent();
              _f.label = 3;
            case 3:
              _d = _c.next();
              return [3, 1];
            case 4:
              return [3, 7];
            case 5:
              e_3_1 = _f.sent();
              e_3 = { error: e_3_1 };
              return [3, 7];
            case 6:
              try {
                if (_d && !_d.done && (_e = _c.return))
                  _e.call(_c);
              } finally {
                if (e_3)
                  throw e_3.error;
              }
              return [7];
            case 7:
              return [2];
          }
        });
      };
      HeadersPolyfill2.prototype.get = function(name) {
        return this[NORMALIZED_HEADERS][normalizeHeaderName_1.normalizeHeaderName(name)] || null;
      };
      HeadersPolyfill2.prototype.set = function(name, value) {
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        this[NORMALIZED_HEADERS][normalizedName] = normalizeHeaderValue_1.normalizeHeaderValue(value);
        this[RAW_HEADER_NAMES].set(normalizedName, name);
      };
      HeadersPolyfill2.prototype.append = function(name, value) {
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        var resolvedValue = this.has(normalizedName) ? this.get(normalizedName) + ", " + value : value;
        this.set(name, resolvedValue);
      };
      HeadersPolyfill2.prototype.delete = function(name) {
        if (!this.has(name)) {
          return;
        }
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        delete this[NORMALIZED_HEADERS][normalizedName];
        this[RAW_HEADER_NAMES].delete(normalizedName);
      };
      HeadersPolyfill2.prototype.all = function() {
        return this[NORMALIZED_HEADERS];
      };
      HeadersPolyfill2.prototype.raw = function() {
        var e_4, _c;
        var rawHeaders = {};
        try {
          for (var _d = __values(this.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var _f = __read(_e.value, 2), name_3 = _f[0], value = _f[1];
            rawHeaders[this[RAW_HEADER_NAMES].get(name_3)] = value;
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_e && !_e.done && (_c = _d.return))
              _c.call(_d);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
        return rawHeaders;
      };
      HeadersPolyfill2.prototype.has = function(name) {
        return this[NORMALIZED_HEADERS].hasOwnProperty(normalizeHeaderName_1.normalizeHeaderName(name));
      };
      HeadersPolyfill2.prototype.forEach = function(callback, thisArg) {
        for (var name_4 in this[NORMALIZED_HEADERS]) {
          if (this[NORMALIZED_HEADERS].hasOwnProperty(name_4)) {
            callback.call(thisArg, this[NORMALIZED_HEADERS][name_4], name_4, this);
          }
        }
      };
      return HeadersPolyfill2;
    }();
    exports.default = HeadersPolyfill;
  }
});

// ../../node_modules/headers-polyfill/lib/transformers/headersToList.js
var require_headersToList = __commonJS({
  "../../node_modules/headers-polyfill/lib/transformers/headersToList.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headersToList = void 0;
    function headersToList(headers) {
      var headersList = [];
      headers.forEach(function(value, name) {
        var resolvedValue = value.includes(",") ? value.split(",").map(function(value2) {
          return value2.trim();
        }) : value;
        headersList.push([name, resolvedValue]);
      });
      return headersList;
    }
    exports.headersToList = headersToList;
  }
});

// ../../node_modules/headers-polyfill/lib/transformers/headersToString.js
var require_headersToString = __commonJS({
  "../../node_modules/headers-polyfill/lib/transformers/headersToString.js"(exports) {
    "use strict";
    init_define_process();
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headersToString = void 0;
    var headersToList_1 = require_headersToList();
    function headersToString(headers) {
      var list = headersToList_1.headersToList(headers);
      var lines = list.map(function(_a) {
        var _b = __read(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        return name + ": " + values.join(", ");
      });
      return lines.join("\r\n");
    }
    exports.headersToString = headersToString;
  }
});

// ../../node_modules/headers-polyfill/lib/transformers/headersToObject.js
var require_headersToObject = __commonJS({
  "../../node_modules/headers-polyfill/lib/transformers/headersToObject.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headersToObject = void 0;
    var singleValueHeaders = ["user-agent"];
    function headersToObject(headers) {
      var headersObject = {};
      headers.forEach(function(value, name) {
        var isMultiValue = !singleValueHeaders.includes(name.toLowerCase()) && value.includes(",");
        headersObject[name] = isMultiValue ? value.split(",").map(function(s) {
          return s.trim();
        }) : value;
      });
      return headersObject;
    }
    exports.headersToObject = headersToObject;
  }
});

// ../../node_modules/headers-polyfill/lib/transformers/stringToHeaders.js
var require_stringToHeaders = __commonJS({
  "../../node_modules/headers-polyfill/lib/transformers/stringToHeaders.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringToHeaders = void 0;
    var Headers_1 = require_Headers();
    function stringToHeaders(str) {
      var lines = str.trim().split(/[\r\n]+/);
      return lines.reduce(function(headers, line) {
        if (line.trim() === "") {
          return headers;
        }
        var parts = line.split(": ");
        var name = parts.shift();
        var value = parts.join(": ");
        headers.append(name, value);
        return headers;
      }, new Headers_1.default());
    }
    exports.stringToHeaders = stringToHeaders;
  }
});

// ../../node_modules/headers-polyfill/lib/transformers/listToHeaders.js
var require_listToHeaders = __commonJS({
  "../../node_modules/headers-polyfill/lib/transformers/listToHeaders.js"(exports) {
    "use strict";
    init_define_process();
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.listToHeaders = void 0;
    var Headers_1 = require_Headers();
    function listToHeaders(list) {
      var headers = new Headers_1.default();
      list.forEach(function(_a) {
        var _b = __read(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        values.forEach(function(value2) {
          headers.append(name, value2);
        });
      });
      return headers;
    }
    exports.listToHeaders = listToHeaders;
  }
});

// ../../node_modules/headers-polyfill/lib/transformers/reduceHeadersObject.js
var require_reduceHeadersObject = __commonJS({
  "../../node_modules/headers-polyfill/lib/transformers/reduceHeadersObject.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reduceHeadersObject = void 0;
    function reduceHeadersObject(headers, reducer, initialState) {
      return Object.keys(headers).reduce(function(nextHeaders, name) {
        return reducer(nextHeaders, name, headers[name]);
      }, initialState);
    }
    exports.reduceHeadersObject = reduceHeadersObject;
  }
});

// ../../node_modules/headers-polyfill/lib/transformers/objectToHeaders.js
var require_objectToHeaders = __commonJS({
  "../../node_modules/headers-polyfill/lib/transformers/objectToHeaders.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectToHeaders = void 0;
    var Headers_1 = require_Headers();
    var reduceHeadersObject_1 = require_reduceHeadersObject();
    function objectToHeaders(headersObject) {
      return reduceHeadersObject_1.reduceHeadersObject(headersObject, function(headers, name, value) {
        var values = [].concat(value).filter(Boolean);
        values.forEach(function(value2) {
          headers.append(name, value2);
        });
        return headers;
      }, new Headers_1.default());
    }
    exports.objectToHeaders = objectToHeaders;
  }
});

// ../../node_modules/headers-polyfill/lib/transformers/flattenHeadersList.js
var require_flattenHeadersList = __commonJS({
  "../../node_modules/headers-polyfill/lib/transformers/flattenHeadersList.js"(exports) {
    "use strict";
    init_define_process();
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flattenHeadersList = void 0;
    function flattenHeadersList(list) {
      return list.map(function(_a) {
        var _b = __read(_a, 2), name = _b[0], values = _b[1];
        return [name, [].concat(values).join("; ")];
      });
    }
    exports.flattenHeadersList = flattenHeadersList;
  }
});

// ../../node_modules/headers-polyfill/lib/transformers/flattenHeadersObject.js
var require_flattenHeadersObject = __commonJS({
  "../../node_modules/headers-polyfill/lib/transformers/flattenHeadersObject.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flattenHeadersObject = void 0;
    var reduceHeadersObject_1 = require_reduceHeadersObject();
    function flattenHeadersObject(headersObject) {
      return reduceHeadersObject_1.reduceHeadersObject(headersObject, function(headers, name, value) {
        headers[name] = [].concat(value).join("; ");
        return headers;
      }, {});
    }
    exports.flattenHeadersObject = flattenHeadersObject;
  }
});

// ../../node_modules/headers-polyfill/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/headers-polyfill/lib/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flattenHeadersObject = exports.flattenHeadersList = exports.reduceHeadersObject = exports.objectToHeaders = exports.listToHeaders = exports.stringToHeaders = exports.headersToObject = exports.headersToList = exports.headersToString = exports.Headers = void 0;
    var Headers_1 = require_Headers();
    Object.defineProperty(exports, "Headers", { enumerable: true, get: function() {
      return Headers_1.default;
    } });
    var headersToString_1 = require_headersToString();
    Object.defineProperty(exports, "headersToString", { enumerable: true, get: function() {
      return headersToString_1.headersToString;
    } });
    var headersToList_1 = require_headersToList();
    Object.defineProperty(exports, "headersToList", { enumerable: true, get: function() {
      return headersToList_1.headersToList;
    } });
    var headersToObject_1 = require_headersToObject();
    Object.defineProperty(exports, "headersToObject", { enumerable: true, get: function() {
      return headersToObject_1.headersToObject;
    } });
    var stringToHeaders_1 = require_stringToHeaders();
    Object.defineProperty(exports, "stringToHeaders", { enumerable: true, get: function() {
      return stringToHeaders_1.stringToHeaders;
    } });
    var listToHeaders_1 = require_listToHeaders();
    Object.defineProperty(exports, "listToHeaders", { enumerable: true, get: function() {
      return listToHeaders_1.listToHeaders;
    } });
    var objectToHeaders_1 = require_objectToHeaders();
    Object.defineProperty(exports, "objectToHeaders", { enumerable: true, get: function() {
      return objectToHeaders_1.objectToHeaders;
    } });
    var reduceHeadersObject_1 = require_reduceHeadersObject();
    Object.defineProperty(exports, "reduceHeadersObject", { enumerable: true, get: function() {
      return reduceHeadersObject_1.reduceHeadersObject;
    } });
    var flattenHeadersList_1 = require_flattenHeadersList();
    Object.defineProperty(exports, "flattenHeadersList", { enumerable: true, get: function() {
      return flattenHeadersList_1.flattenHeadersList;
    } });
    var flattenHeadersObject_1 = require_flattenHeadersObject();
    Object.defineProperty(exports, "flattenHeadersObject", { enumerable: true, get: function() {
      return flattenHeadersObject_1.flattenHeadersObject;
    } });
  }
});

// ../../node_modules/cookie/index.js
var require_cookie = __commonJS({
  "../../node_modules/cookie/index.js"(exports) {
    "use strict";
    init_define_process();
    exports.parse = parse;
    exports.serialize = serialize;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(";");
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var index = pair.indexOf("=");
        if (index < 0) {
          continue;
        }
        var key = pair.substring(0, index).trim();
        if (void 0 == obj[key]) {
          var val = pair.substring(index + 1, pair.length).trim();
          if (val[0] === '"') {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// ../../node_modules/is-node-process/lib/index.js
var require_lib2 = __commonJS({
  "../../node_modules/is-node-process/lib/index.js"(exports, module) {
    init_define_process();
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.IsNodeProcess = {}));
    })(exports, function(exports2) {
      "use strict";
      function isNodeProcess() {
        if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
          return true;
        }
        return !!(typeof define_process_default !== "undefined" && define_process_default.versions && define_process_default.versions.node);
      }
      exports2.isNodeProcess = isNodeProcess;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/msw/node_modules/node-fetch/browser.js
var require_browser2 = __commonJS({
  "../../node_modules/msw/node_modules/node-fetch/browser.js"(exports, module) {
    "use strict";
    init_define_process();
    var getGlobal = function() {
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global2 !== "undefined") {
        return global2;
      }
      throw new Error("unable to locate global object");
    };
    var global2 = getGlobal();
    module.exports = exports = global2.fetch;
    if (global2.fetch) {
      exports.default = global2.fetch.bind(global2);
    }
    exports.Headers = global2.Headers;
    exports.Request = global2.Request;
    exports.Response = global2.Response;
  }
});

// ../../node_modules/events/events.js
var require_events = __commonJS({
  "../../node_modules/events/events.js"(exports, module) {
    "use strict";
    init_define_process();
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn)
        console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter() {
      EventEmitter.init.call(this);
    }
    module.exports = EventEmitter;
    module.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type) {
      var args = [];
      for (var i = 1; i < arguments.length; i++)
        args.push(arguments[i]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0)
        doError = doError && events.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er;
        if (args.length > 0)
          er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          ReflectApply(listeners[i], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit("newListener", type, listener.listener ? listener.listener : listener);
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: void 0, target, type, listener };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter.prototype.once = function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0)
        return this;
      list = events[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events[type] = list[0];
        if (events.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === void 0)
        return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0)
        return [];
      var evlistener = events[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i)
        copy[i] = arr[i];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    function once(emitter, name) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name, resolver);
          reject(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        ;
        eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
        if (name !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name, listener);
        } else {
          emitter.on(name, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
  }
});

// ../../node_modules/strict-event-emitter/lib/StrictEventEmitter.js
var require_StrictEventEmitter = __commonJS({
  "../../node_modules/strict-event-emitter/lib/StrictEventEmitter.js"(exports) {
    "use strict";
    init_define_process();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __spreadArrays = exports && exports.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    exports.__esModule = true;
    exports.StrictEventEmitter = void 0;
    var events_1 = require_events();
    var StrictEventEmitter = function(_super) {
      __extends(StrictEventEmitter2, _super);
      function StrictEventEmitter2() {
        return _super.call(this) || this;
      }
      StrictEventEmitter2.prototype.on = function(event, listener) {
        return _super.prototype.on.call(this, event.toString(), listener);
      };
      StrictEventEmitter2.prototype.once = function(event, listener) {
        return _super.prototype.on.call(this, event.toString(), listener);
      };
      StrictEventEmitter2.prototype.off = function(event, listener) {
        return _super.prototype.off.call(this, event.toString(), listener);
      };
      StrictEventEmitter2.prototype.emit = function(event) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          data[_i - 1] = arguments[_i];
        }
        return _super.prototype.emit.apply(this, __spreadArrays([event.toString()], data));
      };
      StrictEventEmitter2.prototype.addListener = function(event, listener) {
        return _super.prototype.addListener.call(this, event.toString(), listener);
      };
      StrictEventEmitter2.prototype.prependListener = function(event, listener) {
        return _super.prototype.prependListener.call(this, event.toString(), listener);
      };
      StrictEventEmitter2.prototype.prependOnceListener = function(event, listener) {
        return _super.prototype.prependOnceListener.call(this, event.toString(), listener);
      };
      StrictEventEmitter2.prototype.removeListener = function(event, listener) {
        return _super.prototype.removeListener.call(this, event.toString(), listener);
      };
      StrictEventEmitter2.prototype.removeAllListeners = function(event) {
        return _super.prototype.removeAllListeners.call(this, event ? event.toString() : void 0);
      };
      StrictEventEmitter2.prototype.eventNames = function() {
        return _super.prototype.eventNames.call(this);
      };
      StrictEventEmitter2.prototype.listeners = function(event) {
        return _super.prototype.listeners.call(this, event.toString());
      };
      StrictEventEmitter2.prototype.rawListeners = function(event) {
        return _super.prototype.rawListeners.call(this, event.toString());
      };
      StrictEventEmitter2.prototype.listenerCount = function(event) {
        return _super.prototype.listenerCount.call(this, event.toString());
      };
      return StrictEventEmitter2;
    }(events_1.EventEmitter);
    exports.StrictEventEmitter = StrictEventEmitter;
  }
});

// ../../node_modules/strict-event-emitter/lib/index.js
var require_lib3 = __commonJS({
  "../../node_modules/strict-event-emitter/lib/index.js"(exports) {
    "use strict";
    init_define_process();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    exports.__esModule = true;
    __exportStar(require_StrictEventEmitter(), exports);
  }
});

// ../../node_modules/@open-draft/until/lib/until.js
var require_until = __commonJS({
  "../../node_modules/@open-draft/until/lib/until.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.until = async (promise) => {
      try {
        const data = await promise().catch((error) => {
          throw error;
        });
        return [null, data];
      } catch (error) {
        return [error, null];
      }
    };
  }
});

// ../../node_modules/@open-draft/until/lib/index.js
var require_lib4 = __commonJS({
  "../../node_modules/@open-draft/until/lib/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    var until_1 = require_until();
    exports.until = until_1.until;
  }
});

// ../../node_modules/outvariant/lib/format.js
var require_format = __commonJS({
  "../../node_modules/outvariant/lib/format.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.format = void 0;
    var POSITIONALS_EXP = /(%?)(%([sdjo]))/g;
    function serializePositional(positional, flag) {
      switch (flag) {
        case "s":
          return positional;
        case "d":
        case "i":
          return Number(positional);
        case "j":
          return JSON.stringify(positional);
        case "o": {
          if (typeof positional === "string") {
            return positional;
          }
          var json = JSON.stringify(positional);
          if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
            return positional;
          }
          return json;
        }
      }
    }
    function format(message) {
      var positionals = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        positionals[_i - 1] = arguments[_i];
      }
      if (positionals.length === 0) {
        return message;
      }
      var positionalIndex = 0;
      var formattedMessage = message.replace(POSITIONALS_EXP, function(match, isEscaped, _, flag) {
        var positional = positionals[positionalIndex];
        var value = serializePositional(positional, flag);
        if (!isEscaped) {
          positionalIndex++;
          return value;
        }
        return match;
      });
      if (positionalIndex < positionals.length) {
        formattedMessage += " " + positionals.slice(positionalIndex).join(" ");
      }
      formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
      return formattedMessage;
    }
    exports.format = format;
  }
});

// ../../node_modules/outvariant/lib/invariant.js
var require_invariant = __commonJS({
  "../../node_modules/outvariant/lib/invariant.js"(exports) {
    "use strict";
    init_define_process();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.invariant = exports.createInvariantWith = exports.InvariantError = void 0;
    var format_1 = require_format();
    var STACK_FRAMES_TO_IGNORE = 2;
    function cleanErrorStack(error) {
      if (!error.stack) {
        return;
      }
      var nextStack = error.stack.split("\n");
      nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
      error.stack = nextStack.join("\n");
    }
    var InvariantError = function(_super) {
      __extends(InvariantError2, _super);
      function InvariantError2(message) {
        var positionals = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          positionals[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = "Invariant Violation";
        _this.message = format_1.format.apply(void 0, __spreadArray([message], positionals));
        cleanErrorStack(_this);
        return _this;
      }
      return InvariantError2;
    }(Error);
    exports.InvariantError = InvariantError;
    function createInvariantWith(ErrorConstructor) {
      var invariant = function(predicate, message) {
        var positionals = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          positionals[_i - 2] = arguments[_i];
        }
        if (!predicate) {
          var resolvedMessage = format_1.format.apply(void 0, __spreadArray([message], positionals));
          var isConstructor = !!ErrorConstructor.prototype.name;
          var error = isConstructor ? new ErrorConstructor(resolvedMessage) : ErrorConstructor(resolvedMessage);
          cleanErrorStack(error);
          throw error;
        }
      };
      return invariant;
    }
    exports.createInvariantWith = createInvariantWith;
    function polymorphicInvariant(ErrorClass) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      return createInvariantWith(ErrorClass).apply(void 0, args);
    }
    exports.invariant = createInvariantWith(InvariantError);
    exports.invariant.as = polymorphicInvariant;
  }
});

// ../../node_modules/outvariant/lib/index.js
var require_lib5 = __commonJS({
  "../../node_modules/outvariant/lib/index.js"(exports) {
    "use strict";
    init_define_process();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_invariant(), exports);
    __exportStar(require_format(), exports);
  }
});

// ../../node_modules/@mswjs/interceptors/lib/glossary.js
var require_glossary = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/glossary.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IS_PATCHED_MODULE = void 0;
    exports.IS_PATCHED_MODULE = Symbol("isPatchedModule");
  }
});

// ../../node_modules/@mswjs/interceptors/lib/utils/nextTick.js
var require_nextTick = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/utils/nextTick.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nextTickAsync = exports.nextTick = void 0;
    function nextTick(callback) {
      setTimeout(callback, 0);
    }
    exports.nextTick = nextTick;
    function nextTickAsync(callback) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          resolve(callback());
        }, 0);
      });
    }
    exports.nextTickAsync = nextTickAsync;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/utils/AsyncEventEmitter.js
var require_AsyncEventEmitter = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/utils/AsyncEventEmitter.js"(exports) {
    "use strict";
    init_define_process();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncEventEmitter = exports.AsyncEventEmitterReadyState = void 0;
    var debug_1 = require_browser();
    var strict_event_emitter_1 = require_lib3();
    var nextTick_1 = require_nextTick();
    var AsyncEventEmitterReadyState;
    (function(AsyncEventEmitterReadyState2) {
      AsyncEventEmitterReadyState2["ACTIVE"] = "ACTIVE";
      AsyncEventEmitterReadyState2["DEACTIVATED"] = "DEACTIVATED";
    })(AsyncEventEmitterReadyState = exports.AsyncEventEmitterReadyState || (exports.AsyncEventEmitterReadyState = {}));
    var AsyncEventEmitter = function(_super) {
      __extends(AsyncEventEmitter2, _super);
      function AsyncEventEmitter2() {
        var _this = _super.call(this) || this;
        _this.log = debug_1.debug("async-event-emitter");
        _this.queue = /* @__PURE__ */ new Map();
        _this.readyState = AsyncEventEmitterReadyState.ACTIVE;
        return _this;
      }
      AsyncEventEmitter2.prototype.on = function(event, listener) {
        var _this = this;
        var log2 = this.log.extend("on");
        log2('adding "%s" listener...', event);
        if (this.readyState === AsyncEventEmitterReadyState.DEACTIVATED) {
          log2("the emitter is destroyed, skipping!");
          return this;
        }
        return _super.prototype.on.call(this, event, function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return __awaiter(_this, void 0, void 0, function() {
            var queue;
            var _this2 = this;
            return __generator(this, function(_a) {
              queue = this.openListenerQueue(event);
              log2('awaiting the "%s" listener...', event);
              queue.push({
                args,
                done: new Promise(function(resolve, reject) {
                  return __awaiter(_this2, void 0, void 0, function() {
                    var error_1;
                    return __generator(this, function(_a2) {
                      switch (_a2.label) {
                        case 0:
                          _a2.trys.push([0, 2, , 3]);
                          return [4, listener.apply(void 0, __spreadArray([], __read(args)))];
                        case 1:
                          _a2.sent();
                          resolve();
                          log2('"%s" listener has resolved!', event);
                          return [3, 3];
                        case 2:
                          error_1 = _a2.sent();
                          log2('"%s" listener has rejected!', error_1);
                          reject(error_1);
                          return [3, 3];
                        case 3:
                          return [2];
                      }
                    });
                  });
                })
              });
              return [2];
            });
          });
        });
      };
      AsyncEventEmitter2.prototype.emit = function(event) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var log2 = this.log.extend("emit");
        log2('emitting "%s" event...', event);
        if (this.readyState === AsyncEventEmitterReadyState.DEACTIVATED) {
          log2("the emitter is destroyed, skipping!");
          return false;
        }
        this.openListenerQueue(event);
        log2('appending a one-time cleanup "%s" listener...', event);
        this.once(event, function() {
          nextTick_1.nextTick(function() {
            _this.queue.delete(event);
            log2('cleaned up "%s" listeners queue!', event);
          });
        });
        return _super.prototype.emit.apply(this, __spreadArray([event], __read(args)));
      };
      AsyncEventEmitter2.prototype.untilIdle = function(event, filter) {
        if (filter === void 0) {
          filter = function() {
            return true;
          };
        }
        return __awaiter(this, void 0, void 0, function() {
          var listenersQueue;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                listenersQueue = this.queue.get(event) || [];
                return [4, Promise.all(listenersQueue.filter(filter).map(function(_a2) {
                  var done = _a2.done;
                  return done;
                })).finally(function() {
                  _this.queue.delete(event);
                })];
              case 1:
                _a.sent();
                return [2];
            }
          });
        });
      };
      AsyncEventEmitter2.prototype.openListenerQueue = function(event) {
        var log2 = this.log.extend("openListenerQueue");
        log2('opening "%s" listeners queue...', event);
        var queue = this.queue.get(event);
        if (!queue) {
          log2("no queue found, creating one...");
          this.queue.set(event, []);
          return [];
        }
        log2("returning an exising queue:", queue);
        return queue;
      };
      AsyncEventEmitter2.prototype.removeAllListeners = function(event) {
        var log2 = this.log.extend("removeAllListeners");
        log2("event:", event);
        if (event) {
          this.queue.delete(event);
          log2('cleared the "%s" listeners queue!', event, this.queue.get(event));
        } else {
          this.queue.clear();
          log2("cleared the listeners queue!", this.queue);
        }
        return _super.prototype.removeAllListeners.call(this, event);
      };
      AsyncEventEmitter2.prototype.activate = function() {
        var log2 = this.log.extend("activate");
        this.readyState = AsyncEventEmitterReadyState.ACTIVE;
        log2("set state to:", this.readyState);
      };
      AsyncEventEmitter2.prototype.deactivate = function() {
        var log2 = this.log.extend("deactivate");
        log2("removing all listeners...");
        this.removeAllListeners();
        this.readyState = AsyncEventEmitterReadyState.DEACTIVATED;
        log2("set state to:", this.readyState);
      };
      return AsyncEventEmitter2;
    }(strict_event_emitter_1.StrictEventEmitter);
    exports.AsyncEventEmitter = AsyncEventEmitter;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/Interceptor.js
var require_Interceptor = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/Interceptor.js"(exports) {
    "use strict";
    init_define_process();
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Interceptor = exports.InterceptorReadyState = exports.deleteGlobalSymbol = exports.getGlobalSymbol = void 0;
    var debug_1 = require_browser();
    var AsyncEventEmitter_1 = require_AsyncEventEmitter();
    var nextTick_1 = require_nextTick();
    function getGlobalSymbol(symbol) {
      return globalThis[symbol] || void 0;
    }
    exports.getGlobalSymbol = getGlobalSymbol;
    function setGlobalSymbol(symbol, value) {
      globalThis[symbol] = value;
    }
    function deleteGlobalSymbol(symbol) {
      delete globalThis[symbol];
    }
    exports.deleteGlobalSymbol = deleteGlobalSymbol;
    var InterceptorReadyState;
    (function(InterceptorReadyState2) {
      InterceptorReadyState2["IDLE"] = "IDLE";
      InterceptorReadyState2["APPLYING"] = "APPLYING";
      InterceptorReadyState2["APPLIED"] = "APPLIED";
      InterceptorReadyState2["DISPOSING"] = "DISPOSING";
      InterceptorReadyState2["DISPOSED"] = "DISPOSED";
    })(InterceptorReadyState = exports.InterceptorReadyState || (exports.InterceptorReadyState = {}));
    var Interceptor = function() {
      function Interceptor2(symbol) {
        this.symbol = symbol;
        this.readyState = InterceptorReadyState.IDLE;
        this.emitter = new AsyncEventEmitter_1.AsyncEventEmitter();
        this.subscriptions = [];
        this.log = debug_1.debug(symbol.description);
        this.emitter.setMaxListeners(0);
        this.log("constructing the interceptor...");
      }
      Interceptor2.prototype.checkEnvironment = function() {
        return true;
      };
      Interceptor2.prototype.apply = function() {
        var _this = this;
        var log2 = this.log.extend("apply");
        log2("applying the interceptor...");
        if (this.readyState === InterceptorReadyState.APPLIED) {
          log2("intercepted already applied!");
          return;
        }
        var shouldApply = this.checkEnvironment();
        if (!shouldApply) {
          log2("the interceptor cannot be applied in this environment!");
          return;
        }
        this.readyState = InterceptorReadyState.APPLYING;
        this.emitter.activate();
        log2("activated the emiter!", this.emitter.readyState);
        var runningInstance = this.getInstance();
        if (runningInstance) {
          log2("found a running instance, reusing...");
          this.on = function(event, listener) {
            log2('proxying the "%s" listener', event);
            runningInstance.emitter.addListener(event, listener);
            _this.subscriptions.push(function() {
              runningInstance.emitter.removeListener(event, listener);
              log2('removed proxied "%s" listener!', event);
            });
          };
          nextTick_1.nextTick(function() {
            _this.readyState = InterceptorReadyState.APPLIED;
          });
          return;
        }
        log2("no running instance found, setting up a new instance...");
        this.setup();
        this.setInstance();
        nextTick_1.nextTick(function() {
          _this.readyState = InterceptorReadyState.APPLIED;
        });
      };
      Interceptor2.prototype.setup = function() {
      };
      Interceptor2.prototype.on = function(event, listener) {
        var log2 = this.log.extend("on");
        if (this.readyState === InterceptorReadyState.DISPOSING || this.readyState === InterceptorReadyState.DISPOSED) {
          log2("cannot listen to events, already disposed!");
          return;
        }
        log2('adding "%s" event listener:', event, listener.name);
        this.emitter.on(event, listener);
      };
      Interceptor2.prototype.dispose = function() {
        var e_1, _a;
        var _this = this;
        var log2 = this.log.extend("dispose");
        if (this.readyState === InterceptorReadyState.DISPOSED) {
          log2("cannot dispose, already disposed!");
          return;
        }
        log2("disposing the interceptor...");
        this.readyState = InterceptorReadyState.DISPOSING;
        if (!this.getInstance()) {
          log2("no interceptors running, skipping dispose...");
          return;
        }
        this.clearInstance();
        log2("global symbol deleted:", getGlobalSymbol(this.symbol));
        if (this.subscriptions.length > 0) {
          log2("disposing of %d subscriptions...", this.subscriptions.length);
          try {
            for (var _b = __values(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
              var dispose = _c.value;
              dispose();
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return))
                _a.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          this.subscriptions = [];
          log2("disposed of all subscriptions!", this.subscriptions.length);
        }
        this.emitter.deactivate();
        log2("destroyed the listener!");
        nextTick_1.nextTick(function() {
          _this.readyState = InterceptorReadyState.DISPOSED;
        });
      };
      Interceptor2.prototype.getInstance = function() {
        var _a;
        var instance = getGlobalSymbol(this.symbol);
        this.log("retrieved global instance:", (_a = instance === null || instance === void 0 ? void 0 : instance.constructor) === null || _a === void 0 ? void 0 : _a.name);
        return instance;
      };
      Interceptor2.prototype.setInstance = function() {
        setGlobalSymbol(this.symbol, this);
        this.log("set global instance!", this.symbol.description);
      };
      Interceptor2.prototype.clearInstance = function() {
        deleteGlobalSymbol(this.symbol);
        this.log("cleared global instance!", this.symbol.description);
      };
      return Interceptor2;
    }();
    exports.Interceptor = Interceptor;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/BatchInterceptor.js
var require_BatchInterceptor = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/BatchInterceptor.js"(exports) {
    "use strict";
    init_define_process();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BatchInterceptor = void 0;
    var Interceptor_1 = require_Interceptor();
    var BatchInterceptor = function(_super) {
      __extends(BatchInterceptor2, _super);
      function BatchInterceptor2(options) {
        var _this = this;
        BatchInterceptor2.symbol = Symbol(options.name);
        _this = _super.call(this, BatchInterceptor2.symbol) || this;
        _this.interceptors = options.interceptors;
        return _this;
      }
      BatchInterceptor2.prototype.setup = function() {
        var e_1, _a;
        var log2 = this.log.extend("setup");
        log2("applying all %d interceptors...", this.interceptors.length);
        var _loop_1 = function(interceptor2) {
          log2('applying "%s" interceptor...', interceptor2.constructor.name);
          interceptor2.apply();
          log2("adding interceptor dispose subscription");
          this_1.subscriptions.push(function() {
            return interceptor2.dispose();
          });
        };
        var this_1 = this;
        try {
          for (var _b = __values(this.interceptors), _c = _b.next(); !_c.done; _c = _b.next()) {
            var interceptor = _c.value;
            _loop_1(interceptor);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      };
      BatchInterceptor2.prototype.on = function(event, listener) {
        this.interceptors.forEach(function(interceptor) {
          interceptor.on(event, listener);
        });
      };
      return BatchInterceptor2;
    }(Interceptor_1.Interceptor);
    exports.BatchInterceptor = BatchInterceptor;
  }
});

// ../../node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "../../node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    init_define_process();
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../../node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "../../node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    init_define_process();
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// ../../node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "../../node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// ../../node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "../../node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    init_define_process();
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(this, args.concat(slice.call(arguments)));
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(that, args.concat(slice.call(arguments)));
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// ../../node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "../../node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// ../../node_modules/has/src/index.js
var require_src = __commonJS({
  "../../node_modules/has/src/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// ../../node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "../../node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/g, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// ../../node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "../../node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// ../../node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "../../node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    init_define_process();
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// ../../node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "../../node_modules/is-arguments/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var hasToStringTag = require_shams2()();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// ../../node_modules/is-generator-function/index.js
var require_is_generator_function = __commonJS({
  "../../node_modules/is-generator-function/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var toStr = Object.prototype.toString;
    var fnToStr = Function.prototype.toString;
    var isFnRegex = /^\s*(?:function)?\*/;
    var hasToStringTag = require_shams2()();
    var getProto = Object.getPrototypeOf;
    var getGeneratorFunc = function() {
      if (!hasToStringTag) {
        return false;
      }
      try {
        return Function("return function*() {}")();
      } catch (e) {
      }
    };
    var GeneratorFunction;
    module.exports = function isGeneratorFunction(fn) {
      if (typeof fn !== "function") {
        return false;
      }
      if (isFnRegex.test(fnToStr.call(fn))) {
        return true;
      }
      if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === "[object GeneratorFunction]";
      }
      if (!getProto) {
        return false;
      }
      if (typeof GeneratorFunction === "undefined") {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
      }
      return getProto(fn) === GeneratorFunction;
    };
  }
});

// ../../node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "../../node_modules/is-callable/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var documentDotAll = typeof document === "object" && typeof document.all === "undefined" && document.all !== void 0 ? document.all : {};
    module.exports = reflectApply ? function isCallable(value) {
      if (value === documentDotAll) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (typeof value === "function" && !value.prototype) {
        return true;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value);
    } : function isCallable(value) {
      if (value === documentDotAll) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (typeof value === "function" && !value.prototype) {
        return true;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      return strClass === fnClass || strClass === genClass;
    };
  }
});

// ../../node_modules/for-each/index.js
var require_for_each = __commonJS({
  "../../node_modules/for-each/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var isCallable = require_is_callable();
    var toStr = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object, iterator, receiver) {
      for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
          if (receiver == null) {
            iterator(object[k], k, object);
          } else {
            iterator.call(receiver, object[k], k, object);
          }
        }
      }
    };
    var forEach = function forEach2(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (toStr.call(list) === "[object Array]") {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
    module.exports = forEach;
  }
});

// ../../node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS({
  "../../node_modules/available-typed-arrays/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var possibleNames = [
      "BigInt64Array",
      "BigUint64Array",
      "Float32Array",
      "Float64Array",
      "Int16Array",
      "Int32Array",
      "Int8Array",
      "Uint16Array",
      "Uint32Array",
      "Uint8Array",
      "Uint8ClampedArray"
    ];
    var g = typeof globalThis === "undefined" ? self : globalThis;
    module.exports = function availableTypedArrays() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
  }
});

// ../../node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js
var require_getOwnPropertyDescriptor = __commonJS({
  "../../node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js"(exports, module) {
    "use strict";
    init_define_process();
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// ../../node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS({
  "../../node_modules/is-typed-array/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var forEach = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? self : globalThis;
    var typedArrays = availableTypedArrays();
    var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var gOPD = require_getOwnPropertyDescriptor();
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
          var proto = getPrototypeOf(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          toStrTags[typedArray] = descriptor.get;
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var anyTrue = false;
      forEach(toStrTags, function(getter, typedArray) {
        if (!anyTrue) {
          try {
            anyTrue = getter.call(value) === typedArray;
          } catch (e) {
          }
        }
      });
      return anyTrue;
    };
    module.exports = function isTypedArray(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
      }
      if (!gOPD) {
        return false;
      }
      return tryTypedArrays(value);
    };
  }
});

// ../../node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "../../node_modules/which-typed-array/index.js"(exports, module) {
    "use strict";
    init_define_process();
    var forEach = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? self : globalThis;
    var typedArrays = availableTypedArrays();
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var gOPD = require_getOwnPropertyDescriptor();
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach(typedArrays, function(typedArray) {
        if (typeof g[typedArray] === "function") {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
          }
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var foundName = false;
      forEach(toStrTags, function(getter, typedArray) {
        if (!foundName) {
          try {
            var name = getter.call(value);
            if (name === typedArray) {
              foundName = name;
            }
          } catch (e) {
          }
        }
      });
      return foundName;
    };
    var isTypedArray = require_is_typed_array();
    module.exports = function whichTypedArray(value) {
      if (!isTypedArray(value)) {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        return $slice($toString(value), 8, -1);
      }
      return tryTypedArrays(value);
    };
  }
});

// ../../node_modules/util/support/types.js
var require_types = __commonJS({
  "../../node_modules/util/support/types.js"(exports) {
    "use strict";
    init_define_process();
    var isArgumentsObject = require_is_arguments();
    var isGeneratorFunction = require_is_generator_function();
    var whichTypedArray = require_which_typed_array();
    var isTypedArray = require_is_typed_array();
    function uncurryThis(f) {
      return f.call.bind(f);
    }
    var BigIntSupported = typeof BigInt !== "undefined";
    var SymbolSupported = typeof Symbol !== "undefined";
    var ObjectToString = uncurryThis(Object.prototype.toString);
    var numberValue = uncurryThis(Number.prototype.valueOf);
    var stringValue = uncurryThis(String.prototype.valueOf);
    var booleanValue = uncurryThis(Boolean.prototype.valueOf);
    if (BigIntSupported) {
      bigIntValue = uncurryThis(BigInt.prototype.valueOf);
    }
    var bigIntValue;
    if (SymbolSupported) {
      symbolValue = uncurryThis(Symbol.prototype.valueOf);
    }
    var symbolValue;
    function checkBoxedPrimitive(value, prototypeValueOf) {
      if (typeof value !== "object") {
        return false;
      }
      try {
        prototypeValueOf(value);
        return true;
      } catch (e) {
        return false;
      }
    }
    exports.isArgumentsObject = isArgumentsObject;
    exports.isGeneratorFunction = isGeneratorFunction;
    exports.isTypedArray = isTypedArray;
    function isPromise(input) {
      return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
    }
    exports.isPromise = isPromise;
    function isArrayBufferView(value) {
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(value);
      }
      return isTypedArray(value) || isDataView(value);
    }
    exports.isArrayBufferView = isArrayBufferView;
    function isUint8Array(value) {
      return whichTypedArray(value) === "Uint8Array";
    }
    exports.isUint8Array = isUint8Array;
    function isUint8ClampedArray(value) {
      return whichTypedArray(value) === "Uint8ClampedArray";
    }
    exports.isUint8ClampedArray = isUint8ClampedArray;
    function isUint16Array(value) {
      return whichTypedArray(value) === "Uint16Array";
    }
    exports.isUint16Array = isUint16Array;
    function isUint32Array(value) {
      return whichTypedArray(value) === "Uint32Array";
    }
    exports.isUint32Array = isUint32Array;
    function isInt8Array(value) {
      return whichTypedArray(value) === "Int8Array";
    }
    exports.isInt8Array = isInt8Array;
    function isInt16Array(value) {
      return whichTypedArray(value) === "Int16Array";
    }
    exports.isInt16Array = isInt16Array;
    function isInt32Array(value) {
      return whichTypedArray(value) === "Int32Array";
    }
    exports.isInt32Array = isInt32Array;
    function isFloat32Array(value) {
      return whichTypedArray(value) === "Float32Array";
    }
    exports.isFloat32Array = isFloat32Array;
    function isFloat64Array(value) {
      return whichTypedArray(value) === "Float64Array";
    }
    exports.isFloat64Array = isFloat64Array;
    function isBigInt64Array(value) {
      return whichTypedArray(value) === "BigInt64Array";
    }
    exports.isBigInt64Array = isBigInt64Array;
    function isBigUint64Array(value) {
      return whichTypedArray(value) === "BigUint64Array";
    }
    exports.isBigUint64Array = isBigUint64Array;
    function isMapToString(value) {
      return ObjectToString(value) === "[object Map]";
    }
    isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
    function isMap(value) {
      if (typeof Map === "undefined") {
        return false;
      }
      return isMapToString.working ? isMapToString(value) : value instanceof Map;
    }
    exports.isMap = isMap;
    function isSetToString(value) {
      return ObjectToString(value) === "[object Set]";
    }
    isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
    function isSet(value) {
      if (typeof Set === "undefined") {
        return false;
      }
      return isSetToString.working ? isSetToString(value) : value instanceof Set;
    }
    exports.isSet = isSet;
    function isWeakMapToString(value) {
      return ObjectToString(value) === "[object WeakMap]";
    }
    isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
    function isWeakMap(value) {
      if (typeof WeakMap === "undefined") {
        return false;
      }
      return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
    }
    exports.isWeakMap = isWeakMap;
    function isWeakSetToString(value) {
      return ObjectToString(value) === "[object WeakSet]";
    }
    isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
    function isWeakSet(value) {
      return isWeakSetToString(value);
    }
    exports.isWeakSet = isWeakSet;
    function isArrayBufferToString(value) {
      return ObjectToString(value) === "[object ArrayBuffer]";
    }
    isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
    function isArrayBuffer(value) {
      if (typeof ArrayBuffer === "undefined") {
        return false;
      }
      return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
    }
    exports.isArrayBuffer = isArrayBuffer;
    function isDataViewToString(value) {
      return ObjectToString(value) === "[object DataView]";
    }
    isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
    function isDataView(value) {
      if (typeof DataView === "undefined") {
        return false;
      }
      return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
    }
    exports.isDataView = isDataView;
    var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
    function isSharedArrayBufferToString(value) {
      return ObjectToString(value) === "[object SharedArrayBuffer]";
    }
    function isSharedArrayBuffer(value) {
      if (typeof SharedArrayBufferCopy === "undefined") {
        return false;
      }
      if (typeof isSharedArrayBufferToString.working === "undefined") {
        isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
      }
      return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
    }
    exports.isSharedArrayBuffer = isSharedArrayBuffer;
    function isAsyncFunction(value) {
      return ObjectToString(value) === "[object AsyncFunction]";
    }
    exports.isAsyncFunction = isAsyncFunction;
    function isMapIterator(value) {
      return ObjectToString(value) === "[object Map Iterator]";
    }
    exports.isMapIterator = isMapIterator;
    function isSetIterator(value) {
      return ObjectToString(value) === "[object Set Iterator]";
    }
    exports.isSetIterator = isSetIterator;
    function isGeneratorObject(value) {
      return ObjectToString(value) === "[object Generator]";
    }
    exports.isGeneratorObject = isGeneratorObject;
    function isWebAssemblyCompiledModule(value) {
      return ObjectToString(value) === "[object WebAssembly.Module]";
    }
    exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
    function isNumberObject(value) {
      return checkBoxedPrimitive(value, numberValue);
    }
    exports.isNumberObject = isNumberObject;
    function isStringObject(value) {
      return checkBoxedPrimitive(value, stringValue);
    }
    exports.isStringObject = isStringObject;
    function isBooleanObject(value) {
      return checkBoxedPrimitive(value, booleanValue);
    }
    exports.isBooleanObject = isBooleanObject;
    function isBigIntObject(value) {
      return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
    }
    exports.isBigIntObject = isBigIntObject;
    function isSymbolObject(value) {
      return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
    }
    exports.isSymbolObject = isSymbolObject;
    function isBoxedPrimitive(value) {
      return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
    }
    exports.isBoxedPrimitive = isBoxedPrimitive;
    function isAnyArrayBuffer(value) {
      return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
    }
    exports.isAnyArrayBuffer = isAnyArrayBuffer;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
      Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
          throw new Error(method + " is not supported in userland");
        }
      });
    });
  }
});

// ../../node_modules/util/support/isBufferBrowser.js
var require_isBufferBrowser = __commonJS({
  "../../node_modules/util/support/isBufferBrowser.js"(exports, module) {
    init_define_process();
    module.exports = function isBuffer(arg) {
      return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
    };
  }
});

// ../../node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "../../node_modules/inherits/inherits_browser.js"(exports, module) {
    init_define_process();
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// ../../node_modules/util/util.js
var require_util = __commonJS({
  "../../node_modules/util/util.js"(exports) {
    init_define_process();
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
      var keys = Object.keys(obj);
      var descriptors = {};
      for (var i = 0; i < keys.length; i++) {
        descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
      }
      return descriptors;
    };
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(" ");
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x2) {
        if (x2 === "%%")
          return "%";
        if (i >= len)
          return x2;
        switch (x2) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
          default:
            return x2;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += " " + x;
        } else {
          str += " " + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if (typeof define_process_default !== "undefined" && define_process_default.noDeprecation === true) {
        return fn;
      }
      if (typeof define_process_default === "undefined") {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (define_process_default.throwDeprecation) {
            throw new Error(msg);
          } else if (define_process_default.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnvRegex = /^$/;
    if (false) {
      debugEnv = false;
      debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
      debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
    }
    var debugEnv;
    exports.debuglog = function(set) {
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
          var pid = define_process_default.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3)
        ctx.depth = arguments[2];
      if (arguments.length >= 4)
        ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
      if (isUndefined(ctx.depth))
        ctx.depth = 2;
      if (isUndefined(ctx.colors))
        ctx.colors = false;
      if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
      if (ctx.colors)
        ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ": " + value.name : "";
          return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), "date");
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = "", array = false, braces = ["{", "}"];
      if (isArray(value)) {
        array = true;
        braces = ["[", "]"];
      }
      if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
      }
      if (isRegExp(value)) {
        base = " " + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = " " + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = " " + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        } else {
          return ctx.stylize("[Object]", "special");
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize("undefined", "undefined");
      if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber(value))
        return ctx.stylize("" + value, "number");
      if (isBoolean(value))
        return ctx.stylize("" + value, "boolean");
      if (isNull(value))
        return ctx.stylize("null", "null");
    }
    function formatError(value) {
      return "[" + Error.prototype.toString.call(value) + "]";
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push("");
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize("[Getter/Setter]", "special");
        } else {
          str = ctx.stylize("[Getter]", "special");
        }
      } else {
        if (desc.set) {
          str = ctx.stylize("[Setter]", "special");
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = "[" + key + "]";
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf("\n") > -1) {
            if (array) {
              str = str.split("\n").map(function(line) {
                return "  " + line;
              }).join("\n").substr(2);
            } else {
              str = "\n" + str.split("\n").map(function(line) {
                return "   " + line;
              }).join("\n");
            }
          }
        } else {
          str = ctx.stylize("[Circular]", "special");
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, "name");
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, "string");
        }
      }
      return name + ": " + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0)
          numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      }
      return braces[0] + base + " " + output.join(", ") + " " + braces[1];
    }
    exports.types = require_types();
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    exports.types.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === "[object Date]";
    }
    exports.isDate = isDate;
    exports.types.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
    }
    exports.isError = isError;
    exports.types.isNativeError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = require_isBufferBrowser();
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? "0" + n.toString(10) : n.toString(10);
    }
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function timestamp() {
      var d = new Date();
      var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
      ].join(":");
      return [d.getDate(), months[d.getMonth()], time].join(" ");
    }
    exports.log = function() {
      console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = require_inherits_browser();
    exports._extend = function(origin, add) {
      if (!add || !isObject(add))
        return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
    exports.promisify = function promisify(original) {
      if (typeof original !== "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== "function") {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn;
      }
      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
          promiseResolve = resolve;
          promiseReject = reject;
        });
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        args.push(function(err, value) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value);
          }
        });
        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }
        return promise;
      }
      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol)
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
      return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
    };
    exports.promisify.custom = kCustomPromisifiedSymbol;
    function callbackifyOnRejected(reason, cb) {
      if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
      }
      return cb(reason);
    }
    function callbackify(original) {
      if (typeof original !== "function") {
        throw new TypeError('The "original" argument must be of type Function');
      }
      function callbackified() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") {
          throw new TypeError("The last argument must be of type Function");
        }
        var self2 = this;
        var cb = function() {
          return maybeCb.apply(self2, arguments);
        };
        original.apply(this, args).then(function(ret) {
          define_process_default.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
          define_process_default.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
      }
      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
      return callbackified;
    }
    exports.callbackify = callbackify;
  }
});

// ../../node_modules/web-encoding/src/lib.js
var require_lib6 = __commonJS({
  "../../node_modules/web-encoding/src/lib.js"(exports) {
    "use strict";
    init_define_process();
    exports.TextEncoder = typeof TextEncoder !== "undefined" ? TextEncoder : require_util().TextEncoder;
    exports.TextDecoder = typeof TextDecoder !== "undefined" ? TextDecoder : require_util().TextDecoder;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/utils/bufferUtils.js
var require_bufferUtils = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/utils/bufferUtils.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getArrayBuffer = exports.decodeBuffer = exports.encodeBuffer = void 0;
    var web_encoding_1 = require_lib6();
    function encodeBuffer(text) {
      var encoder = new web_encoding_1.TextEncoder();
      var encoded = encoder.encode(text);
      return getArrayBuffer(encoded);
    }
    exports.encodeBuffer = encodeBuffer;
    function decodeBuffer(buffer, encoding) {
      var decoder = new web_encoding_1.TextDecoder(encoding);
      return decoder.decode(buffer);
    }
    exports.decodeBuffer = decodeBuffer;
    function getArrayBuffer(array) {
      return array.buffer.slice(array.byteOffset, array.byteOffset + array.byteLength);
    }
    exports.getArrayBuffer = getArrayBuffer;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/utils/uuid.js
var require_uuid = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/utils/uuid.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uuidv4 = void 0;
    function uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0;
        var v = c == "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    }
    exports.uuidv4 = uuidv4;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/IsomorphicRequest.js
var require_IsomorphicRequest = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/IsomorphicRequest.js"(exports) {
    "use strict";
    init_define_process();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsomorphicRequest = void 0;
    var lib_1 = require_lib();
    var outvariant_1 = require_lib5();
    var bufferUtils_1 = require_bufferUtils();
    var uuid_1 = require_uuid();
    var IsomorphicRequest = function() {
      function IsomorphicRequest2(input, init) {
        if (init === void 0) {
          init = {};
        }
        var defaultBody = new ArrayBuffer(0);
        this._bodyUsed = false;
        if (input instanceof IsomorphicRequest2) {
          this.id = input.id;
          this.url = input.url;
          this.method = input.method;
          this.headers = input.headers;
          this.credentials = input.credentials;
          this._body = input._body || defaultBody;
          return;
        }
        this.id = uuid_1.uuidv4();
        this.url = input;
        this.method = init.method || "GET";
        this.headers = new lib_1.Headers(init.headers);
        this.credentials = init.credentials || "same-origin";
        this._body = init.body || defaultBody;
      }
      Object.defineProperty(IsomorphicRequest2.prototype, "bodyUsed", {
        get: function() {
          return this._bodyUsed;
        },
        enumerable: false,
        configurable: true
      });
      IsomorphicRequest2.prototype.text = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            outvariant_1.invariant(!this.bodyUsed, 'Failed to execute "text" on "IsomorphicRequest": body buffer already read');
            this._bodyUsed = true;
            return [2, bufferUtils_1.decodeBuffer(this._body)];
          });
        });
      };
      IsomorphicRequest2.prototype.json = function() {
        return __awaiter(this, void 0, void 0, function() {
          var text;
          return __generator(this, function(_a) {
            outvariant_1.invariant(!this.bodyUsed, 'Failed to execute "json" on "IsomorphicRequest": body buffer already read');
            this._bodyUsed = true;
            text = bufferUtils_1.decodeBuffer(this._body);
            return [2, JSON.parse(text)];
          });
        });
      };
      IsomorphicRequest2.prototype.arrayBuffer = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            outvariant_1.invariant(!this.bodyUsed, 'Failed to execute "arrayBuffer" on "IsomorphicRequest": body buffer already read');
            this._bodyUsed = true;
            return [2, this._body];
          });
        });
      };
      IsomorphicRequest2.prototype.clone = function() {
        return new IsomorphicRequest2(this);
      };
      return IsomorphicRequest2;
    }();
    exports.IsomorphicRequest = IsomorphicRequest;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/utils/createLazyCallback.js
var require_createLazyCallback = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/utils/createLazyCallback.js"(exports) {
    "use strict";
    init_define_process();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createLazyCallback = void 0;
    function createLazyCallback(options) {
      var _this = this;
      if (options === void 0) {
        options = {};
      }
      var calledTimes = 0;
      var autoResolveTimeout;
      var remoteResolve;
      var callPromise = new Promise(function(resolve) {
        remoteResolve = resolve;
      }).finally(function() {
        clearTimeout(autoResolveTimeout);
      });
      var fn = function() {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (options.maxCalls && calledTimes >= options.maxCalls) {
          (_a = options.maxCallsCallback) === null || _a === void 0 ? void 0 : _a.call(options);
        }
        remoteResolve(args);
        calledTimes++;
      };
      fn.invoked = function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            autoResolveTimeout = setTimeout(function() {
              remoteResolve([]);
            }, 0);
            return [2, callPromise];
          });
        });
      };
      return fn;
    }
    exports.createLazyCallback = createLazyCallback;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/InteractiveIsomorphicRequest.js
var require_InteractiveIsomorphicRequest = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/InteractiveIsomorphicRequest.js"(exports) {
    "use strict";
    init_define_process();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InteractiveIsomorphicRequest = void 0;
    var outvariant_1 = require_lib5();
    var IsomorphicRequest_1 = require_IsomorphicRequest();
    var createLazyCallback_1 = require_createLazyCallback();
    var InteractiveIsomorphicRequest = function(_super) {
      __extends(InteractiveIsomorphicRequest2, _super);
      function InteractiveIsomorphicRequest2(request) {
        var _this = _super.call(this, request) || this;
        _this.respondWith = createLazyCallback_1.createLazyCallback({
          maxCalls: 1,
          maxCallsCallback: function() {
            outvariant_1.invariant(false, 'Failed to respond to "%s %s" request: the "request" event has already been responded to.', _this.method, _this.url.href);
          }
        });
        return _this;
      }
      return InteractiveIsomorphicRequest2;
    }(IsomorphicRequest_1.IsomorphicRequest);
    exports.InteractiveIsomorphicRequest = InteractiveIsomorphicRequest;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/utils/getCleanUrl.js
var require_getCleanUrl = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/utils/getCleanUrl.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCleanUrl = void 0;
    function getCleanUrl(url, isAbsolute) {
      if (isAbsolute === void 0) {
        isAbsolute = true;
      }
      return [isAbsolute && url.origin, url.pathname].filter(Boolean).join("");
    }
    exports.getCleanUrl = getCleanUrl;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/index.js
var require_lib7 = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/index.js"(exports) {
    "use strict";
    init_define_process();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeBuffer = exports.encodeBuffer = exports.getCleanUrl = void 0;
    __exportStar(require_glossary(), exports);
    __exportStar(require_Interceptor(), exports);
    __exportStar(require_BatchInterceptor(), exports);
    __exportStar(require_IsomorphicRequest(), exports);
    __exportStar(require_InteractiveIsomorphicRequest(), exports);
    var getCleanUrl_1 = require_getCleanUrl();
    Object.defineProperty(exports, "getCleanUrl", { enumerable: true, get: function() {
      return getCleanUrl_1.getCleanUrl;
    } });
    var bufferUtils_1 = require_bufferUtils();
    Object.defineProperty(exports, "encodeBuffer", { enumerable: true, get: function() {
      return bufferUtils_1.encodeBuffer;
    } });
    Object.defineProperty(exports, "decodeBuffer", { enumerable: true, get: function() {
      return bufferUtils_1.decodeBuffer;
    } });
  }
});

// ../../node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "../../node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    init_define_process();
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValue = parts.shift().split("=");
      var name = nameValue.shift();
      var value = nameValue.join("=");
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e);
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parse(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key) {
          return key.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse;
    module.exports.parse = parse;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString;
  }
});

// ../../node_modules/@mswjs/cookies/lib/store.js
var require_store = __commonJS({
  "../../node_modules/@mswjs/cookies/lib/store.js"(exports) {
    "use strict";
    init_define_process();
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.store = exports.PERSISTENCY_KEY = void 0;
    var set_cookie_parser_1 = require_set_cookie();
    exports.PERSISTENCY_KEY = "MSW_COOKIE_STORE";
    function supportsLocalStorage() {
      try {
        if (localStorage == null) {
          return false;
        }
        const testKey = exports.PERSISTENCY_KEY + "_test";
        localStorage.setItem(testKey, "test");
        localStorage.getItem(testKey);
        localStorage.removeItem(testKey);
        return true;
      } catch (error) {
        return false;
      }
    }
    var CookieStore = class {
      constructor() {
        this.store = /* @__PURE__ */ new Map();
      }
      add(request, response) {
        if (request.credentials === "omit") {
          return;
        }
        const requestUrl = new URL(request.url);
        const responseCookies = response.headers.get("set-cookie");
        if (!responseCookies) {
          return;
        }
        const now = Date.now();
        const parsedResponseCookies = set_cookie_parser_1.parse(responseCookies).map((_a) => {
          var { maxAge } = _a, cookie = __rest(_a, ["maxAge"]);
          return Object.assign(Object.assign({}, cookie), { expires: maxAge === void 0 ? cookie.expires : new Date(now + maxAge * 1e3), maxAge });
        });
        const prevCookies = this.store.get(requestUrl.origin) || /* @__PURE__ */ new Map();
        parsedResponseCookies.forEach((cookie) => {
          this.store.set(requestUrl.origin, prevCookies.set(cookie.name, cookie));
        });
      }
      get(request) {
        this.deleteExpiredCookies();
        const requestUrl = new URL(request.url);
        const originCookies = this.store.get(requestUrl.origin) || /* @__PURE__ */ new Map();
        switch (request.credentials) {
          case "include": {
            if (typeof document === "undefined") {
              return originCookies;
            }
            const documentCookies = set_cookie_parser_1.parse(document.cookie);
            documentCookies.forEach((cookie) => {
              originCookies.set(cookie.name, cookie);
            });
            return originCookies;
          }
          case "same-origin": {
            return originCookies;
          }
          default:
            return /* @__PURE__ */ new Map();
        }
      }
      getAll() {
        this.deleteExpiredCookies();
        return this.store;
      }
      deleteAll(request) {
        const requestUrl = new URL(request.url);
        this.store.delete(requestUrl.origin);
      }
      clear() {
        this.store.clear();
      }
      hydrate() {
        if (!supportsLocalStorage()) {
          return;
        }
        const persistedCookies = localStorage.getItem(exports.PERSISTENCY_KEY);
        if (!persistedCookies) {
          return;
        }
        try {
          const parsedCookies = JSON.parse(persistedCookies);
          parsedCookies.forEach(([origin, cookies]) => {
            this.store.set(origin, new Map(cookies.map((_a) => {
              var [token, _b] = _a, { expires } = _b, cookie = __rest(_b, ["expires"]);
              return [
                token,
                expires === void 0 ? cookie : Object.assign(Object.assign({}, cookie), { expires: new Date(expires) })
              ];
            })));
          });
        } catch (error) {
          console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${exports.PERSISTENCY_KEY}").

Stored value:
${localStorage.getItem(exports.PERSISTENCY_KEY)}

Thrown exception:
${error}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`);
          localStorage.removeItem(exports.PERSISTENCY_KEY);
        }
      }
      persist() {
        if (!supportsLocalStorage()) {
          return;
        }
        const serializedCookies = Array.from(this.store.entries()).map(([origin, cookies]) => {
          return [origin, Array.from(cookies.entries())];
        });
        localStorage.setItem(exports.PERSISTENCY_KEY, JSON.stringify(serializedCookies));
      }
      deleteExpiredCookies() {
        const now = Date.now();
        this.store.forEach((originCookies, origin) => {
          originCookies.forEach(({ expires, name }) => {
            if (expires !== void 0 && expires.getTime() <= now) {
              originCookies.delete(name);
            }
          });
          if (originCookies.size === 0) {
            this.store.delete(origin);
          }
        });
      }
    };
    exports.store = new CookieStore();
  }
});

// ../../node_modules/@mswjs/cookies/lib/index.js
var require_lib8 = __commonJS({
  "../../node_modules/@mswjs/cookies/lib/index.js"(exports) {
    "use strict";
    init_define_process();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_store(), exports);
  }
});

// ../../node_modules/js-levenshtein/index.js
var require_js_levenshtein = __commonJS({
  "../../node_modules/js-levenshtein/index.js"(exports, module) {
    "use strict";
    init_define_process();
    module.exports = function() {
      function _min(d0, d1, d2, bx, ay) {
        return d0 < d1 || d2 < d1 ? d0 > d2 ? d2 + 1 : d0 + 1 : bx === ay ? d1 : d1 + 1;
      }
      return function(a, b) {
        if (a === b) {
          return 0;
        }
        if (a.length > b.length) {
          var tmp = a;
          a = b;
          b = tmp;
        }
        var la = a.length;
        var lb = b.length;
        while (la > 0 && a.charCodeAt(la - 1) === b.charCodeAt(lb - 1)) {
          la--;
          lb--;
        }
        var offset = 0;
        while (offset < la && a.charCodeAt(offset) === b.charCodeAt(offset)) {
          offset++;
        }
        la -= offset;
        lb -= offset;
        if (la === 0 || lb < 3) {
          return lb;
        }
        var x = 0;
        var y;
        var d0;
        var d1;
        var d2;
        var d3;
        var dd;
        var dy;
        var ay;
        var bx0;
        var bx1;
        var bx2;
        var bx3;
        var vector = [];
        for (y = 0; y < la; y++) {
          vector.push(y + 1);
          vector.push(a.charCodeAt(offset + y));
        }
        var len = vector.length - 1;
        for (; x < lb - 3; ) {
          bx0 = b.charCodeAt(offset + (d0 = x));
          bx1 = b.charCodeAt(offset + (d1 = x + 1));
          bx2 = b.charCodeAt(offset + (d2 = x + 2));
          bx3 = b.charCodeAt(offset + (d3 = x + 3));
          dd = x += 4;
          for (y = 0; y < len; y += 2) {
            dy = vector[y];
            ay = vector[y + 1];
            d0 = _min(dy, d0, d1, bx0, ay);
            d1 = _min(d0, d1, d2, bx1, ay);
            d2 = _min(d1, d2, d3, bx2, ay);
            dd = _min(d2, d3, dd, bx3, ay);
            vector[y] = dd;
            d3 = d2;
            d2 = d1;
            d1 = d0;
            d0 = dy;
          }
        }
        for (; x < lb; ) {
          bx0 = b.charCodeAt(offset + (d0 = x));
          dd = ++x;
          for (y = 0; y < len; y += 2) {
            dy = vector[y];
            vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);
            d0 = dy;
          }
        }
        return dd;
      };
    }();
  }
});

// ../../node_modules/graphql/version.js
var require_version = __commonJS({
  "../../node_modules/graphql/version.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.versionInfo = exports.version = void 0;
    var version = "16.5.0";
    exports.version = version;
    var versionInfo = Object.freeze({
      major: 16,
      minor: 5,
      patch: 0,
      preReleaseTag: null
    });
    exports.versionInfo = versionInfo;
  }
});

// ../../node_modules/graphql/jsutils/devAssert.js
var require_devAssert = __commonJS({
  "../../node_modules/graphql/jsutils/devAssert.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.devAssert = devAssert;
    function devAssert(condition, message) {
      const booleanCondition = Boolean(condition);
      if (!booleanCondition) {
        throw new Error(message);
      }
    }
  }
});

// ../../node_modules/graphql/jsutils/isPromise.js
var require_isPromise = __commonJS({
  "../../node_modules/graphql/jsutils/isPromise.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPromise = isPromise;
    function isPromise(value) {
      return typeof (value === null || value === void 0 ? void 0 : value.then) === "function";
    }
  }
});

// ../../node_modules/graphql/jsutils/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/graphql/jsutils/isObjectLike.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isObjectLike = isObjectLike;
    function isObjectLike(value) {
      return typeof value == "object" && value !== null;
    }
  }
});

// ../../node_modules/graphql/jsutils/invariant.js
var require_invariant2 = __commonJS({
  "../../node_modules/graphql/jsutils/invariant.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.invariant = invariant;
    function invariant(condition, message) {
      const booleanCondition = Boolean(condition);
      if (!booleanCondition) {
        throw new Error(message != null ? message : "Unexpected invariant triggered.");
      }
    }
  }
});

// ../../node_modules/graphql/language/location.js
var require_location = __commonJS({
  "../../node_modules/graphql/language/location.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getLocation = getLocation;
    var _invariant = require_invariant2();
    var LineRegExp = /\r\n|[\n\r]/g;
    function getLocation(source, position) {
      let lastLineStart = 0;
      let line = 1;
      for (const match of source.body.matchAll(LineRegExp)) {
        typeof match.index === "number" || (0, _invariant.invariant)(false);
        if (match.index >= position) {
          break;
        }
        lastLineStart = match.index + match[0].length;
        line += 1;
      }
      return {
        line,
        column: position + 1 - lastLineStart
      };
    }
  }
});

// ../../node_modules/graphql/language/printLocation.js
var require_printLocation = __commonJS({
  "../../node_modules/graphql/language/printLocation.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printLocation = printLocation;
    exports.printSourceLocation = printSourceLocation;
    var _location = require_location();
    function printLocation(location2) {
      return printSourceLocation(location2.source, (0, _location.getLocation)(location2.source, location2.start));
    }
    function printSourceLocation(source, sourceLocation) {
      const firstLineColumnOffset = source.locationOffset.column - 1;
      const body = "".padStart(firstLineColumnOffset) + source.body;
      const lineIndex = sourceLocation.line - 1;
      const lineOffset = source.locationOffset.line - 1;
      const lineNum = sourceLocation.line + lineOffset;
      const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
      const columnNum = sourceLocation.column + columnOffset;
      const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
      const lines = body.split(/\r\n|[\n\r]/g);
      const locationLine = lines[lineIndex];
      if (locationLine.length > 120) {
        const subLineIndex = Math.floor(columnNum / 80);
        const subLineColumnNum = columnNum % 80;
        const subLines = [];
        for (let i = 0; i < locationLine.length; i += 80) {
          subLines.push(locationLine.slice(i, i + 80));
        }
        return locationStr + printPrefixedLines([
          [`${lineNum} |`, subLines[0]],
          ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
          ["|", "^".padStart(subLineColumnNum)],
          ["|", subLines[subLineIndex + 1]]
        ]);
      }
      return locationStr + printPrefixedLines([
        [`${lineNum - 1} |`, lines[lineIndex - 1]],
        [`${lineNum} |`, locationLine],
        ["|", "^".padStart(columnNum)],
        [`${lineNum + 1} |`, lines[lineIndex + 1]]
      ]);
    }
    function printPrefixedLines(lines) {
      const existingLines = lines.filter(([_, line]) => line !== void 0);
      const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
      return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
    }
  }
});

// ../../node_modules/graphql/error/GraphQLError.js
var require_GraphQLError = __commonJS({
  "../../node_modules/graphql/error/GraphQLError.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GraphQLError = void 0;
    exports.formatError = formatError;
    exports.printError = printError;
    var _isObjectLike = require_isObjectLike();
    var _location = require_location();
    var _printLocation = require_printLocation();
    function toNormalizedOptions(args) {
      const firstArg = args[0];
      if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
        return {
          nodes: firstArg,
          source: args[1],
          positions: args[2],
          path: args[3],
          originalError: args[4],
          extensions: args[5]
        };
      }
      return firstArg;
    }
    var GraphQLError = class extends Error {
      constructor(message, ...rawArgs) {
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
        super(message);
        this.name = "GraphQLError";
        this.path = path !== null && path !== void 0 ? path : void 0;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
        this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0);
        const nodeLocations = undefinedIfEmpty((_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null));
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
        this.locations = positions && source ? positions.map((pos) => (0, _location.getLocation)(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => (0, _location.getLocation)(loc.source, loc.start));
        const originalExtensions = (0, _isObjectLike.isObjectLike)(originalError === null || originalError === void 0 ? void 0 : originalError.extensions) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
        Object.defineProperties(this, {
          message: {
            writable: true,
            enumerable: true
          },
          name: {
            enumerable: false
          },
          nodes: {
            enumerable: false
          },
          source: {
            enumerable: false
          },
          positions: {
            enumerable: false
          },
          originalError: {
            enumerable: false
          }
        });
        if (originalError !== null && originalError !== void 0 && originalError.stack) {
          Object.defineProperty(this, "stack", {
            value: originalError.stack,
            writable: true,
            configurable: true
          });
        } else if (Error.captureStackTrace) {
          Error.captureStackTrace(this, GraphQLError);
        } else {
          Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: true,
            configurable: true
          });
        }
      }
      get [Symbol.toStringTag]() {
        return "GraphQLError";
      }
      toString() {
        let output = this.message;
        if (this.nodes) {
          for (const node of this.nodes) {
            if (node.loc) {
              output += "\n\n" + (0, _printLocation.printLocation)(node.loc);
            }
          }
        } else if (this.source && this.locations) {
          for (const location2 of this.locations) {
            output += "\n\n" + (0, _printLocation.printSourceLocation)(this.source, location2);
          }
        }
        return output;
      }
      toJSON() {
        const formattedError = {
          message: this.message
        };
        if (this.locations != null) {
          formattedError.locations = this.locations;
        }
        if (this.path != null) {
          formattedError.path = this.path;
        }
        if (this.extensions != null && Object.keys(this.extensions).length > 0) {
          formattedError.extensions = this.extensions;
        }
        return formattedError;
      }
    };
    exports.GraphQLError = GraphQLError;
    function undefinedIfEmpty(array) {
      return array === void 0 || array.length === 0 ? void 0 : array;
    }
    function printError(error) {
      return error.toString();
    }
    function formatError(error) {
      return error.toJSON();
    }
  }
});

// ../../node_modules/graphql/error/syntaxError.js
var require_syntaxError = __commonJS({
  "../../node_modules/graphql/error/syntaxError.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.syntaxError = syntaxError;
    var _GraphQLError = require_GraphQLError();
    function syntaxError(source, position, description) {
      return new _GraphQLError.GraphQLError(`Syntax Error: ${description}`, {
        source,
        positions: [position]
      });
    }
  }
});

// ../../node_modules/graphql/language/ast.js
var require_ast = __commonJS({
  "../../node_modules/graphql/language/ast.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Token = exports.QueryDocumentKeys = exports.OperationTypeNode = exports.Location = void 0;
    exports.isNode = isNode;
    var Location = class {
      constructor(startToken, endToken, source) {
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
      }
      get [Symbol.toStringTag]() {
        return "Location";
      }
      toJSON() {
        return {
          start: this.start,
          end: this.end
        };
      }
    };
    exports.Location = Location;
    var Token = class {
      constructor(kind, start, end, line, column, value) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = null;
        this.next = null;
      }
      get [Symbol.toStringTag]() {
        return "Token";
      }
      toJSON() {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column
        };
      }
    };
    exports.Token = Token;
    var QueryDocumentKeys = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
      ],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
      ],
      FieldDefinition: ["description", "name", "arguments", "type", "directives"],
      InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
      ],
      InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
      ],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"]
    };
    exports.QueryDocumentKeys = QueryDocumentKeys;
    var kindValues = new Set(Object.keys(QueryDocumentKeys));
    function isNode(maybeNode) {
      const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
      return typeof maybeKind === "string" && kindValues.has(maybeKind);
    }
    var OperationTypeNode;
    exports.OperationTypeNode = OperationTypeNode;
    (function(OperationTypeNode2) {
      OperationTypeNode2["QUERY"] = "query";
      OperationTypeNode2["MUTATION"] = "mutation";
      OperationTypeNode2["SUBSCRIPTION"] = "subscription";
    })(OperationTypeNode || (exports.OperationTypeNode = OperationTypeNode = {}));
  }
});

// ../../node_modules/graphql/language/directiveLocation.js
var require_directiveLocation = __commonJS({
  "../../node_modules/graphql/language/directiveLocation.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DirectiveLocation = void 0;
    var DirectiveLocation;
    exports.DirectiveLocation = DirectiveLocation;
    (function(DirectiveLocation2) {
      DirectiveLocation2["QUERY"] = "QUERY";
      DirectiveLocation2["MUTATION"] = "MUTATION";
      DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
      DirectiveLocation2["FIELD"] = "FIELD";
      DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
      DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
      DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
      DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
      DirectiveLocation2["SCHEMA"] = "SCHEMA";
      DirectiveLocation2["SCALAR"] = "SCALAR";
      DirectiveLocation2["OBJECT"] = "OBJECT";
      DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
      DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
      DirectiveLocation2["INTERFACE"] = "INTERFACE";
      DirectiveLocation2["UNION"] = "UNION";
      DirectiveLocation2["ENUM"] = "ENUM";
      DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
      DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
      DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
    })(DirectiveLocation || (exports.DirectiveLocation = DirectiveLocation = {}));
  }
});

// ../../node_modules/graphql/language/kinds.js
var require_kinds = __commonJS({
  "../../node_modules/graphql/language/kinds.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Kind = void 0;
    var Kind;
    exports.Kind = Kind;
    (function(Kind2) {
      Kind2["NAME"] = "Name";
      Kind2["DOCUMENT"] = "Document";
      Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
      Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
      Kind2["SELECTION_SET"] = "SelectionSet";
      Kind2["FIELD"] = "Field";
      Kind2["ARGUMENT"] = "Argument";
      Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
      Kind2["INLINE_FRAGMENT"] = "InlineFragment";
      Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
      Kind2["VARIABLE"] = "Variable";
      Kind2["INT"] = "IntValue";
      Kind2["FLOAT"] = "FloatValue";
      Kind2["STRING"] = "StringValue";
      Kind2["BOOLEAN"] = "BooleanValue";
      Kind2["NULL"] = "NullValue";
      Kind2["ENUM"] = "EnumValue";
      Kind2["LIST"] = "ListValue";
      Kind2["OBJECT"] = "ObjectValue";
      Kind2["OBJECT_FIELD"] = "ObjectField";
      Kind2["DIRECTIVE"] = "Directive";
      Kind2["NAMED_TYPE"] = "NamedType";
      Kind2["LIST_TYPE"] = "ListType";
      Kind2["NON_NULL_TYPE"] = "NonNullType";
      Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
      Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
      Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
      Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
      Kind2["FIELD_DEFINITION"] = "FieldDefinition";
      Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
      Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
      Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
      Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
      Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
      Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
      Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
      Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
      Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
      Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
      Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
      Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
      Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
      Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
    })(Kind || (exports.Kind = Kind = {}));
  }
});

// ../../node_modules/graphql/language/characterClasses.js
var require_characterClasses = __commonJS({
  "../../node_modules/graphql/language/characterClasses.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isDigit = isDigit;
    exports.isLetter = isLetter;
    exports.isNameContinue = isNameContinue;
    exports.isNameStart = isNameStart;
    exports.isWhiteSpace = isWhiteSpace;
    function isWhiteSpace(code) {
      return code === 9 || code === 32;
    }
    function isDigit(code) {
      return code >= 48 && code <= 57;
    }
    function isLetter(code) {
      return code >= 97 && code <= 122 || code >= 65 && code <= 90;
    }
    function isNameStart(code) {
      return isLetter(code) || code === 95;
    }
    function isNameContinue(code) {
      return isLetter(code) || isDigit(code) || code === 95;
    }
  }
});

// ../../node_modules/graphql/language/blockString.js
var require_blockString = __commonJS({
  "../../node_modules/graphql/language/blockString.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dedentBlockStringLines = dedentBlockStringLines;
    exports.isPrintableAsBlockString = isPrintableAsBlockString;
    exports.printBlockString = printBlockString;
    var _characterClasses = require_characterClasses();
    function dedentBlockStringLines(lines) {
      var _firstNonEmptyLine2;
      let commonIndent = Number.MAX_SAFE_INTEGER;
      let firstNonEmptyLine = null;
      let lastNonEmptyLine = -1;
      for (let i = 0; i < lines.length; ++i) {
        var _firstNonEmptyLine;
        const line = lines[i];
        const indent = leadingWhitespace(line);
        if (indent === line.length) {
          continue;
        }
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
        lastNonEmptyLine = i;
        if (i !== 0 && indent < commonIndent) {
          commonIndent = indent;
        }
      }
      return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
    }
    function leadingWhitespace(str) {
      let i = 0;
      while (i < str.length && (0, _characterClasses.isWhiteSpace)(str.charCodeAt(i))) {
        ++i;
      }
      return i;
    }
    function isPrintableAsBlockString(value) {
      if (value === "") {
        return true;
      }
      let isEmptyLine = true;
      let hasIndent = false;
      let hasCommonIndent = true;
      let seenNonEmptyLine = false;
      for (let i = 0; i < value.length; ++i) {
        switch (value.codePointAt(i)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 11:
          case 12:
          case 14:
          case 15:
            return false;
          case 13:
            return false;
          case 10:
            if (isEmptyLine && !seenNonEmptyLine) {
              return false;
            }
            seenNonEmptyLine = true;
            isEmptyLine = true;
            hasIndent = false;
            break;
          case 9:
          case 32:
            hasIndent || (hasIndent = isEmptyLine);
            break;
          default:
            hasCommonIndent && (hasCommonIndent = hasIndent);
            isEmptyLine = false;
        }
      }
      if (isEmptyLine) {
        return false;
      }
      if (hasCommonIndent && seenNonEmptyLine) {
        return false;
      }
      return true;
    }
    function printBlockString(value, options) {
      const escapedValue = value.replace(/"""/g, '\\"""');
      const lines = escapedValue.split(/\r\n|[\n\r]/g);
      const isSingleLine = lines.length === 1;
      const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || (0, _characterClasses.isWhiteSpace)(line.charCodeAt(0)));
      const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
      const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
      const hasTrailingSlash = value.endsWith("\\");
      const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
      const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
      let result = "";
      const skipLeadingNewLine = isSingleLine && (0, _characterClasses.isWhiteSpace)(value.charCodeAt(0));
      if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
        result += "\n";
      }
      result += escapedValue;
      if (printAsMultipleLines || forceTrailingNewline) {
        result += "\n";
      }
      return '"""' + result + '"""';
    }
  }
});

// ../../node_modules/graphql/language/tokenKind.js
var require_tokenKind = __commonJS({
  "../../node_modules/graphql/language/tokenKind.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TokenKind = void 0;
    var TokenKind;
    exports.TokenKind = TokenKind;
    (function(TokenKind2) {
      TokenKind2["SOF"] = "<SOF>";
      TokenKind2["EOF"] = "<EOF>";
      TokenKind2["BANG"] = "!";
      TokenKind2["DOLLAR"] = "$";
      TokenKind2["AMP"] = "&";
      TokenKind2["PAREN_L"] = "(";
      TokenKind2["PAREN_R"] = ")";
      TokenKind2["SPREAD"] = "...";
      TokenKind2["COLON"] = ":";
      TokenKind2["EQUALS"] = "=";
      TokenKind2["AT"] = "@";
      TokenKind2["BRACKET_L"] = "[";
      TokenKind2["BRACKET_R"] = "]";
      TokenKind2["BRACE_L"] = "{";
      TokenKind2["PIPE"] = "|";
      TokenKind2["BRACE_R"] = "}";
      TokenKind2["NAME"] = "Name";
      TokenKind2["INT"] = "Int";
      TokenKind2["FLOAT"] = "Float";
      TokenKind2["STRING"] = "String";
      TokenKind2["BLOCK_STRING"] = "BlockString";
      TokenKind2["COMMENT"] = "Comment";
    })(TokenKind || (exports.TokenKind = TokenKind = {}));
  }
});

// ../../node_modules/graphql/language/lexer.js
var require_lexer = __commonJS({
  "../../node_modules/graphql/language/lexer.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Lexer = void 0;
    exports.isPunctuatorTokenKind = isPunctuatorTokenKind;
    var _syntaxError = require_syntaxError();
    var _ast = require_ast();
    var _blockString = require_blockString();
    var _characterClasses = require_characterClasses();
    var _tokenKind = require_tokenKind();
    var Lexer = class {
      constructor(source) {
        const startOfFileToken = new _ast.Token(_tokenKind.TokenKind.SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
      }
      get [Symbol.toStringTag]() {
        return "Lexer";
      }
      advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
      }
      lookahead() {
        let token = this.token;
        if (token.kind !== _tokenKind.TokenKind.EOF) {
          do {
            if (token.next) {
              token = token.next;
            } else {
              const nextToken = readNextToken(this, token.end);
              token.next = nextToken;
              nextToken.prev = token;
              token = nextToken;
            }
          } while (token.kind === _tokenKind.TokenKind.COMMENT);
        }
        return token;
      }
    };
    exports.Lexer = Lexer;
    function isPunctuatorTokenKind(kind) {
      return kind === _tokenKind.TokenKind.BANG || kind === _tokenKind.TokenKind.DOLLAR || kind === _tokenKind.TokenKind.AMP || kind === _tokenKind.TokenKind.PAREN_L || kind === _tokenKind.TokenKind.PAREN_R || kind === _tokenKind.TokenKind.SPREAD || kind === _tokenKind.TokenKind.COLON || kind === _tokenKind.TokenKind.EQUALS || kind === _tokenKind.TokenKind.AT || kind === _tokenKind.TokenKind.BRACKET_L || kind === _tokenKind.TokenKind.BRACKET_R || kind === _tokenKind.TokenKind.BRACE_L || kind === _tokenKind.TokenKind.PIPE || kind === _tokenKind.TokenKind.BRACE_R;
    }
    function isUnicodeScalarValue(code) {
      return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
    }
    function isSupplementaryCodePoint(body, location2) {
      return isLeadingSurrogate(body.charCodeAt(location2)) && isTrailingSurrogate(body.charCodeAt(location2 + 1));
    }
    function isLeadingSurrogate(code) {
      return code >= 55296 && code <= 56319;
    }
    function isTrailingSurrogate(code) {
      return code >= 56320 && code <= 57343;
    }
    function printCodePointAt(lexer, location2) {
      const code = lexer.source.body.codePointAt(location2);
      if (code === void 0) {
        return _tokenKind.TokenKind.EOF;
      } else if (code >= 32 && code <= 126) {
        const char = String.fromCodePoint(code);
        return char === '"' ? `'"'` : `"${char}"`;
      }
      return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
    }
    function createToken(lexer, kind, start, end, value) {
      const line = lexer.line;
      const col = 1 + start - lexer.lineStart;
      return new _ast.Token(kind, start, end, line, col, value);
    }
    function readNextToken(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let position = start;
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        switch (code) {
          case 65279:
          case 9:
          case 32:
          case 44:
            ++position;
            continue;
          case 10:
            ++position;
            ++lexer.line;
            lexer.lineStart = position;
            continue;
          case 13:
            if (body.charCodeAt(position + 1) === 10) {
              position += 2;
            } else {
              ++position;
            }
            ++lexer.line;
            lexer.lineStart = position;
            continue;
          case 35:
            return readComment(lexer, position);
          case 33:
            return createToken(lexer, _tokenKind.TokenKind.BANG, position, position + 1);
          case 36:
            return createToken(lexer, _tokenKind.TokenKind.DOLLAR, position, position + 1);
          case 38:
            return createToken(lexer, _tokenKind.TokenKind.AMP, position, position + 1);
          case 40:
            return createToken(lexer, _tokenKind.TokenKind.PAREN_L, position, position + 1);
          case 41:
            return createToken(lexer, _tokenKind.TokenKind.PAREN_R, position, position + 1);
          case 46:
            if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
              return createToken(lexer, _tokenKind.TokenKind.SPREAD, position, position + 3);
            }
            break;
          case 58:
            return createToken(lexer, _tokenKind.TokenKind.COLON, position, position + 1);
          case 61:
            return createToken(lexer, _tokenKind.TokenKind.EQUALS, position, position + 1);
          case 64:
            return createToken(lexer, _tokenKind.TokenKind.AT, position, position + 1);
          case 91:
            return createToken(lexer, _tokenKind.TokenKind.BRACKET_L, position, position + 1);
          case 93:
            return createToken(lexer, _tokenKind.TokenKind.BRACKET_R, position, position + 1);
          case 123:
            return createToken(lexer, _tokenKind.TokenKind.BRACE_L, position, position + 1);
          case 124:
            return createToken(lexer, _tokenKind.TokenKind.PIPE, position, position + 1);
          case 125:
            return createToken(lexer, _tokenKind.TokenKind.BRACE_R, position, position + 1);
          case 34:
            if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
              return readBlockString(lexer, position);
            }
            return readString(lexer, position);
        }
        if ((0, _characterClasses.isDigit)(code) || code === 45) {
          return readNumber(lexer, position, code);
        }
        if ((0, _characterClasses.isNameStart)(code)) {
          return readName(lexer, position);
        }
        throw (0, _syntaxError.syntaxError)(lexer.source, position, code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`);
      }
      return createToken(lexer, _tokenKind.TokenKind.EOF, bodyLength, bodyLength);
    }
    function readComment(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let position = start + 1;
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        if (code === 10 || code === 13) {
          break;
        }
        if (isUnicodeScalarValue(code)) {
          ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
          position += 2;
        } else {
          break;
        }
      }
      return createToken(lexer, _tokenKind.TokenKind.COMMENT, start, position, body.slice(start + 1, position));
    }
    function readNumber(lexer, start, firstCode) {
      const body = lexer.source.body;
      let position = start;
      let code = firstCode;
      let isFloat = false;
      if (code === 45) {
        code = body.charCodeAt(++position);
      }
      if (code === 48) {
        code = body.charCodeAt(++position);
        if ((0, _characterClasses.isDigit)(code)) {
          throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid number, unexpected digit after 0: ${printCodePointAt(lexer, position)}.`);
        }
      } else {
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 46) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 69 || code === 101) {
        isFloat = true;
        code = body.charCodeAt(++position);
        if (code === 43 || code === 45) {
          code = body.charCodeAt(++position);
        }
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 46 || (0, _characterClasses.isNameStart)(code)) {
        throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid number, expected digit but got: ${printCodePointAt(lexer, position)}.`);
      }
      return createToken(lexer, isFloat ? _tokenKind.TokenKind.FLOAT : _tokenKind.TokenKind.INT, start, position, body.slice(start, position));
    }
    function readDigits(lexer, start, firstCode) {
      if (!(0, _characterClasses.isDigit)(firstCode)) {
        throw (0, _syntaxError.syntaxError)(lexer.source, start, `Invalid number, expected digit but got: ${printCodePointAt(lexer, start)}.`);
      }
      const body = lexer.source.body;
      let position = start + 1;
      while ((0, _characterClasses.isDigit)(body.charCodeAt(position))) {
        ++position;
      }
      return position;
    }
    function readString(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let position = start + 1;
      let chunkStart = position;
      let value = "";
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        if (code === 34) {
          value += body.slice(chunkStart, position);
          return createToken(lexer, _tokenKind.TokenKind.STRING, start, position + 1, value);
        }
        if (code === 92) {
          value += body.slice(chunkStart, position);
          const escape = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
          value += escape.value;
          position += escape.size;
          chunkStart = position;
          continue;
        }
        if (code === 10 || code === 13) {
          break;
        }
        if (isUnicodeScalarValue(code)) {
          ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
          position += 2;
        } else {
          throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
      }
      throw (0, _syntaxError.syntaxError)(lexer.source, position, "Unterminated string.");
    }
    function readEscapedUnicodeVariableWidth(lexer, position) {
      const body = lexer.source.body;
      let point = 0;
      let size = 3;
      while (size < 12) {
        const code = body.charCodeAt(position + size++);
        if (code === 125) {
          if (size < 5 || !isUnicodeScalarValue(point)) {
            break;
          }
          return {
            value: String.fromCodePoint(point),
            size
          };
        }
        point = point << 4 | readHexDigit(code);
        if (point < 0) {
          break;
        }
      }
      throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + size)}".`);
    }
    function readEscapedUnicodeFixedWidth(lexer, position) {
      const body = lexer.source.body;
      const code = read16BitHexCode(body, position + 2);
      if (isUnicodeScalarValue(code)) {
        return {
          value: String.fromCodePoint(code),
          size: 6
        };
      }
      if (isLeadingSurrogate(code)) {
        if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
          const trailingCode = read16BitHexCode(body, position + 8);
          if (isTrailingSurrogate(trailingCode)) {
            return {
              value: String.fromCodePoint(code, trailingCode),
              size: 12
            };
          }
        }
      }
      throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`);
    }
    function read16BitHexCode(body, position) {
      return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
    }
    function readHexDigit(code) {
      return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
    }
    function readEscapedCharacter(lexer, position) {
      const body = lexer.source.body;
      const code = body.charCodeAt(position + 1);
      switch (code) {
        case 34:
          return {
            value: '"',
            size: 2
          };
        case 92:
          return {
            value: "\\",
            size: 2
          };
        case 47:
          return {
            value: "/",
            size: 2
          };
        case 98:
          return {
            value: "\b",
            size: 2
          };
        case 102:
          return {
            value: "\f",
            size: 2
          };
        case 110:
          return {
            value: "\n",
            size: 2
          };
        case 114:
          return {
            value: "\r",
            size: 2
          };
        case 116:
          return {
            value: "	",
            size: 2
          };
      }
      throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid character escape sequence: "${body.slice(position, position + 2)}".`);
    }
    function readBlockString(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let lineStart = lexer.lineStart;
      let position = start + 3;
      let chunkStart = position;
      let currentLine = "";
      const blockLines = [];
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          currentLine += body.slice(chunkStart, position);
          blockLines.push(currentLine);
          const token = createToken(lexer, _tokenKind.TokenKind.BLOCK_STRING, start, position + 3, (0, _blockString.dedentBlockStringLines)(blockLines).join("\n"));
          lexer.line += blockLines.length - 1;
          lexer.lineStart = lineStart;
          return token;
        }
        if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
          currentLine += body.slice(chunkStart, position);
          chunkStart = position + 1;
          position += 4;
          continue;
        }
        if (code === 10 || code === 13) {
          currentLine += body.slice(chunkStart, position);
          blockLines.push(currentLine);
          if (code === 13 && body.charCodeAt(position + 1) === 10) {
            position += 2;
          } else {
            ++position;
          }
          currentLine = "";
          chunkStart = position;
          lineStart = position;
          continue;
        }
        if (isUnicodeScalarValue(code)) {
          ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
          position += 2;
        } else {
          throw (0, _syntaxError.syntaxError)(lexer.source, position, `Invalid character within String: ${printCodePointAt(lexer, position)}.`);
        }
      }
      throw (0, _syntaxError.syntaxError)(lexer.source, position, "Unterminated string.");
    }
    function readName(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let position = start + 1;
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        if ((0, _characterClasses.isNameContinue)(code)) {
          ++position;
        } else {
          break;
        }
      }
      return createToken(lexer, _tokenKind.TokenKind.NAME, start, position, body.slice(start, position));
    }
  }
});

// ../../node_modules/graphql/jsutils/inspect.js
var require_inspect = __commonJS({
  "../../node_modules/graphql/jsutils/inspect.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.inspect = inspect;
    var MAX_ARRAY_LENGTH = 10;
    var MAX_RECURSIVE_DEPTH = 2;
    function inspect(value) {
      return formatValue(value, []);
    }
    function formatValue(value, seenValues) {
      switch (typeof value) {
        case "string":
          return JSON.stringify(value);
        case "function":
          return value.name ? `[function ${value.name}]` : "[function]";
        case "object":
          return formatObjectValue(value, seenValues);
        default:
          return String(value);
      }
    }
    function formatObjectValue(value, previouslySeenValues) {
      if (value === null) {
        return "null";
      }
      if (previouslySeenValues.includes(value)) {
        return "[Circular]";
      }
      const seenValues = [...previouslySeenValues, value];
      if (isJSONable(value)) {
        const jsonValue = value.toJSON();
        if (jsonValue !== value) {
          return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
        }
      } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
      }
      return formatObject(value, seenValues);
    }
    function isJSONable(value) {
      return typeof value.toJSON === "function";
    }
    function formatObject(object, seenValues) {
      const entries = Object.entries(object);
      if (entries.length === 0) {
        return "{}";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[" + getObjectTag(object) + "]";
      }
      const properties = entries.map(([key, value]) => key + ": " + formatValue(value, seenValues));
      return "{ " + properties.join(", ") + " }";
    }
    function formatArray(array, seenValues) {
      if (array.length === 0) {
        return "[]";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[Array]";
      }
      const len = Math.min(MAX_ARRAY_LENGTH, array.length);
      const remaining = array.length - len;
      const items = [];
      for (let i = 0; i < len; ++i) {
        items.push(formatValue(array[i], seenValues));
      }
      if (remaining === 1) {
        items.push("... 1 more item");
      } else if (remaining > 1) {
        items.push(`... ${remaining} more items`);
      }
      return "[" + items.join(", ") + "]";
    }
    function getObjectTag(object) {
      const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
      if (tag === "Object" && typeof object.constructor === "function") {
        const name = object.constructor.name;
        if (typeof name === "string" && name !== "") {
          return name;
        }
      }
      return tag;
    }
  }
});

// ../../node_modules/graphql/jsutils/instanceOf.js
var require_instanceOf = __commonJS({
  "../../node_modules/graphql/jsutils/instanceOf.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instanceOf = void 0;
    var _inspect = require_inspect();
    var instanceOf = false ? function instanceOf2(value, constructor) {
      return value instanceof constructor;
    } : function instanceOf2(value, constructor) {
      if (value instanceof constructor) {
        return true;
      }
      if (typeof value === "object" && value !== null) {
        var _value$constructor;
        const className = constructor.prototype[Symbol.toStringTag];
        const valueClassName = Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
        if (className === valueClassName) {
          const stringifiedValue = (0, _inspect.inspect)(value);
          throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
      }
      return false;
    };
    exports.instanceOf = instanceOf;
  }
});

// ../../node_modules/graphql/language/source.js
var require_source = __commonJS({
  "../../node_modules/graphql/language/source.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Source = void 0;
    exports.isSource = isSource;
    var _devAssert = require_devAssert();
    var _inspect = require_inspect();
    var _instanceOf = require_instanceOf();
    var Source = class {
      constructor(body, name = "GraphQL request", locationOffset = {
        line: 1,
        column: 1
      }) {
        typeof body === "string" || (0, _devAssert.devAssert)(false, `Body must be a string. Received: ${(0, _inspect.inspect)(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || (0, _devAssert.devAssert)(false, "line in locationOffset is 1-indexed and must be positive.");
        this.locationOffset.column > 0 || (0, _devAssert.devAssert)(false, "column in locationOffset is 1-indexed and must be positive.");
      }
      get [Symbol.toStringTag]() {
        return "Source";
      }
    };
    exports.Source = Source;
    function isSource(source) {
      return (0, _instanceOf.instanceOf)(source, Source);
    }
  }
});

// ../../node_modules/graphql/language/parser.js
var require_parser = __commonJS({
  "../../node_modules/graphql/language/parser.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Parser = void 0;
    exports.parse = parse;
    exports.parseConstValue = parseConstValue;
    exports.parseType = parseType;
    exports.parseValue = parseValue;
    var _syntaxError = require_syntaxError();
    var _ast = require_ast();
    var _directiveLocation = require_directiveLocation();
    var _kinds = require_kinds();
    var _lexer = require_lexer();
    var _source = require_source();
    var _tokenKind = require_tokenKind();
    function parse(source, options) {
      const parser = new Parser(source, options);
      return parser.parseDocument();
    }
    function parseValue(source, options) {
      const parser = new Parser(source, options);
      parser.expectToken(_tokenKind.TokenKind.SOF);
      const value = parser.parseValueLiteral(false);
      parser.expectToken(_tokenKind.TokenKind.EOF);
      return value;
    }
    function parseConstValue(source, options) {
      const parser = new Parser(source, options);
      parser.expectToken(_tokenKind.TokenKind.SOF);
      const value = parser.parseConstValueLiteral();
      parser.expectToken(_tokenKind.TokenKind.EOF);
      return value;
    }
    function parseType(source, options) {
      const parser = new Parser(source, options);
      parser.expectToken(_tokenKind.TokenKind.SOF);
      const type = parser.parseTypeReference();
      parser.expectToken(_tokenKind.TokenKind.EOF);
      return type;
    }
    var Parser = class {
      constructor(source, options) {
        const sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
        this._lexer = new _lexer.Lexer(sourceObj);
        this._options = options;
      }
      parseName() {
        const token = this.expectToken(_tokenKind.TokenKind.NAME);
        return this.node(token, {
          kind: _kinds.Kind.NAME,
          value: token.value
        });
      }
      parseDocument() {
        return this.node(this._lexer.token, {
          kind: _kinds.Kind.DOCUMENT,
          definitions: this.many(_tokenKind.TokenKind.SOF, this.parseDefinition, _tokenKind.TokenKind.EOF)
        });
      }
      parseDefinition() {
        if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
          return this.parseOperationDefinition();
        }
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaDefinition();
            case "scalar":
              return this.parseScalarTypeDefinition();
            case "type":
              return this.parseObjectTypeDefinition();
            case "interface":
              return this.parseInterfaceTypeDefinition();
            case "union":
              return this.parseUnionTypeDefinition();
            case "enum":
              return this.parseEnumTypeDefinition();
            case "input":
              return this.parseInputObjectTypeDefinition();
            case "directive":
              return this.parseDirectiveDefinition();
          }
          if (hasDescription) {
            throw (0, _syntaxError.syntaxError)(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
          }
          switch (keywordToken.value) {
            case "query":
            case "mutation":
            case "subscription":
              return this.parseOperationDefinition();
            case "fragment":
              return this.parseFragmentDefinition();
            case "extend":
              return this.parseTypeSystemExtension();
          }
        }
        throw this.unexpected(keywordToken);
      }
      parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
          return this.node(start, {
            kind: _kinds.Kind.OPERATION_DEFINITION,
            operation: _ast.OperationTypeNode.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
        }
        const operation = this.parseOperationType();
        let name;
        if (this.peek(_tokenKind.TokenKind.NAME)) {
          name = this.parseName();
        }
        return this.node(start, {
          kind: _kinds.Kind.OPERATION_DEFINITION,
          operation,
          name,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      parseOperationType() {
        const operationToken = this.expectToken(_tokenKind.TokenKind.NAME);
        switch (operationToken.value) {
          case "query":
            return _ast.OperationTypeNode.QUERY;
          case "mutation":
            return _ast.OperationTypeNode.MUTATION;
          case "subscription":
            return _ast.OperationTypeNode.SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
      }
      parseVariableDefinitions() {
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind.TokenKind.PAREN_R);
      }
      parseVariableDefinition() {
        return this.node(this._lexer.token, {
          kind: _kinds.Kind.VARIABLE_DEFINITION,
          variable: this.parseVariable(),
          type: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseTypeReference()),
          defaultValue: this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
          directives: this.parseConstDirectives()
        });
      }
      parseVariable() {
        const start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.DOLLAR);
        return this.node(start, {
          kind: _kinds.Kind.VARIABLE,
          name: this.parseName()
        });
      }
      parseSelectionSet() {
        return this.node(this._lexer.token, {
          kind: _kinds.Kind.SELECTION_SET,
          selections: this.many(_tokenKind.TokenKind.BRACE_L, this.parseSelection, _tokenKind.TokenKind.BRACE_R)
        });
      }
      parseSelection() {
        return this.peek(_tokenKind.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
      }
      parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(_tokenKind.TokenKind.COLON)) {
          alias = nameOrAlias;
          name = this.parseName();
        } else {
          name = nameOrAlias;
        }
        return this.node(start, {
          kind: _kinds.Kind.FIELD,
          alias,
          name,
          arguments: this.parseArguments(false),
          directives: this.parseDirectives(false),
          selectionSet: this.peek(_tokenKind.TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
        });
      }
      parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, item, _tokenKind.TokenKind.PAREN_R);
      }
      parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        return this.node(start, {
          kind: _kinds.Kind.ARGUMENT,
          name,
          value: this.parseValueLiteral(isConst)
        });
      }
      parseConstArgument() {
        return this.parseArgument(true);
      }
      parseFragment() {
        const start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(_tokenKind.TokenKind.NAME)) {
          return this.node(start, {
            kind: _kinds.Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false)
          });
        }
        return this.node(start, {
          kind: _kinds.Kind.INLINE_FRAGMENT,
          typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      parseFragmentDefinition() {
        var _this$_options;
        const start = this._lexer.token;
        this.expectKeyword("fragment");
        if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.allowLegacyFragmentVariables) === true) {
          return this.node(start, {
            kind: _kinds.Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
          });
        }
        return this.node(start, {
          kind: _kinds.Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      parseFragmentName() {
        if (this._lexer.token.value === "on") {
          throw this.unexpected();
        }
        return this.parseName();
      }
      parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch (token.kind) {
          case _tokenKind.TokenKind.BRACKET_L:
            return this.parseList(isConst);
          case _tokenKind.TokenKind.BRACE_L:
            return this.parseObject(isConst);
          case _tokenKind.TokenKind.INT:
            this._lexer.advance();
            return this.node(token, {
              kind: _kinds.Kind.INT,
              value: token.value
            });
          case _tokenKind.TokenKind.FLOAT:
            this._lexer.advance();
            return this.node(token, {
              kind: _kinds.Kind.FLOAT,
              value: token.value
            });
          case _tokenKind.TokenKind.STRING:
          case _tokenKind.TokenKind.BLOCK_STRING:
            return this.parseStringLiteral();
          case _tokenKind.TokenKind.NAME:
            this._lexer.advance();
            switch (token.value) {
              case "true":
                return this.node(token, {
                  kind: _kinds.Kind.BOOLEAN,
                  value: true
                });
              case "false":
                return this.node(token, {
                  kind: _kinds.Kind.BOOLEAN,
                  value: false
                });
              case "null":
                return this.node(token, {
                  kind: _kinds.Kind.NULL
                });
              default:
                return this.node(token, {
                  kind: _kinds.Kind.ENUM,
                  value: token.value
                });
            }
          case _tokenKind.TokenKind.DOLLAR:
            if (isConst) {
              this.expectToken(_tokenKind.TokenKind.DOLLAR);
              if (this._lexer.token.kind === _tokenKind.TokenKind.NAME) {
                const varName = this._lexer.token.value;
                throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, `Unexpected variable "$${varName}" in constant value.`);
              } else {
                throw this.unexpected(token);
              }
            }
            return this.parseVariable();
          default:
            throw this.unexpected();
        }
      }
      parseConstValueLiteral() {
        return this.parseValueLiteral(true);
      }
      parseStringLiteral() {
        const token = this._lexer.token;
        this._lexer.advance();
        return this.node(token, {
          kind: _kinds.Kind.STRING,
          value: token.value,
          block: token.kind === _tokenKind.TokenKind.BLOCK_STRING
        });
      }
      parseList(isConst) {
        const item = () => this.parseValueLiteral(isConst);
        return this.node(this._lexer.token, {
          kind: _kinds.Kind.LIST,
          values: this.any(_tokenKind.TokenKind.BRACKET_L, item, _tokenKind.TokenKind.BRACKET_R)
        });
      }
      parseObject(isConst) {
        const item = () => this.parseObjectField(isConst);
        return this.node(this._lexer.token, {
          kind: _kinds.Kind.OBJECT,
          fields: this.any(_tokenKind.TokenKind.BRACE_L, item, _tokenKind.TokenKind.BRACE_R)
        });
      }
      parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        return this.node(start, {
          kind: _kinds.Kind.OBJECT_FIELD,
          name,
          value: this.parseValueLiteral(isConst)
        });
      }
      parseDirectives(isConst) {
        const directives = [];
        while (this.peek(_tokenKind.TokenKind.AT)) {
          directives.push(this.parseDirective(isConst));
        }
        return directives;
      }
      parseConstDirectives() {
        return this.parseDirectives(true);
      }
      parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.AT);
        return this.node(start, {
          kind: _kinds.Kind.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(isConst)
        });
      }
      parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken(_tokenKind.TokenKind.BRACKET_L)) {
          const innerType = this.parseTypeReference();
          this.expectToken(_tokenKind.TokenKind.BRACKET_R);
          type = this.node(start, {
            kind: _kinds.Kind.LIST_TYPE,
            type: innerType
          });
        } else {
          type = this.parseNamedType();
        }
        if (this.expectOptionalToken(_tokenKind.TokenKind.BANG)) {
          return this.node(start, {
            kind: _kinds.Kind.NON_NULL_TYPE,
            type
          });
        }
        return type;
      }
      parseNamedType() {
        return this.node(this._lexer.token, {
          kind: _kinds.Kind.NAMED_TYPE,
          name: this.parseName()
        });
      }
      peekDescription() {
        return this.peek(_tokenKind.TokenKind.STRING) || this.peek(_tokenKind.TokenKind.BLOCK_STRING);
      }
      parseDescription() {
        if (this.peekDescription()) {
          return this.parseStringLiteral();
        }
      }
      parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.many(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
        return this.node(start, {
          kind: _kinds.Kind.SCHEMA_DEFINITION,
          description,
          directives,
          operationTypes
        });
      }
      parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(_tokenKind.TokenKind.COLON);
        const type = this.parseNamedType();
        return this.node(start, {
          kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
          operation,
          type
        });
      }
      parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
          description,
          name,
          directives
        });
      }
      parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
          kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields
        });
      }
      parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(_tokenKind.TokenKind.AMP, this.parseNamedType) : [];
      }
      parseFieldsDefinition() {
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind.TokenKind.BRACE_R);
      }
      parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(_tokenKind.TokenKind.COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: _kinds.Kind.FIELD_DEFINITION,
          description,
          name,
          arguments: args,
          type,
          directives
        });
      }
      parseArgumentDefs() {
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind.TokenKind.PAREN_R);
      }
      parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
          defaultValue = this.parseConstValueLiteral();
        }
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
          description,
          name,
          type,
          defaultValue,
          directives
        });
      }
      parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
          kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields
        });
      }
      parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
          kind: _kinds.Kind.UNION_TYPE_DEFINITION,
          description,
          name,
          directives,
          types
        });
      }
      parseUnionMemberTypes() {
        return this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseNamedType) : [];
      }
      parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
          kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
          description,
          name,
          directives,
          values
        });
      }
      parseEnumValuesDefinition() {
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind.TokenKind.BRACE_R);
      }
      parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
          description,
          name,
          directives
        });
      }
      parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
          throw (0, _syntaxError.syntaxError)(this._lexer.source, this._lexer.token.start, `${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        }
        return this.parseName();
      }
      parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
          kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
          description,
          name,
          directives,
          fields
        });
      }
      parseInputFieldsDefinition() {
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind.TokenKind.BRACE_R);
      }
      parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension();
          }
        }
        throw this.unexpected(keywordToken);
      }
      parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: _kinds.Kind.SCHEMA_EXTENSION,
          directives,
          operationTypes
        });
      }
      parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
          name,
          directives
        });
      }
      parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields
        });
      }
      parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields
        });
      }
      parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: _kinds.Kind.UNION_TYPE_EXTENSION,
          name,
          directives,
          types
        });
      }
      parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
          name,
          directives,
          values
        });
      }
      parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
          name,
          directives,
          fields
        });
      }
      parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken(_tokenKind.TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
          kind: _kinds.Kind.DIRECTIVE_DEFINITION,
          description,
          name,
          arguments: args,
          repeatable,
          locations
        });
      }
      parseDirectiveLocations() {
        return this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseDirectiveLocation);
      }
      parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call(_directiveLocation.DirectiveLocation, name.value)) {
          return name;
        }
        throw this.unexpected(start);
      }
      node(startToken, node) {
        var _this$_options2;
        if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.noLocation) !== true) {
          node.loc = new _ast.Location(startToken, this._lexer.lastToken, this._lexer.source);
        }
        return node;
      }
      peek(kind) {
        return this._lexer.token.kind === kind;
      }
      expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
          this._lexer.advance();
          return token;
        }
        throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
      }
      expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
          this._lexer.advance();
          return true;
        }
        return false;
      }
      expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
          this._lexer.advance();
        } else {
          throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
        }
      }
      expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
          this._lexer.advance();
          return true;
        }
        return false;
      }
      unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return (0, _syntaxError.syntaxError)(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
      }
      any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while (!this.expectOptionalToken(closeKind)) {
          nodes.push(parseFn.call(this));
        }
        return nodes;
      }
      optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
          const nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (!this.expectOptionalToken(closeKind));
          return nodes;
        }
        return [];
      }
      many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));
        return nodes;
      }
      delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (this.expectOptionalToken(delimiterKind));
        return nodes;
      }
    };
    exports.Parser = Parser;
    function getTokenDesc(token) {
      const value = token.value;
      return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
    }
    function getTokenKindDesc(kind) {
      return (0, _lexer.isPunctuatorTokenKind)(kind) ? `"${kind}"` : kind;
    }
  }
});

// ../../node_modules/graphql/jsutils/didYouMean.js
var require_didYouMean = __commonJS({
  "../../node_modules/graphql/jsutils/didYouMean.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.didYouMean = didYouMean;
    var MAX_SUGGESTIONS = 5;
    function didYouMean(firstArg, secondArg) {
      const [subMessage, suggestionsArg] = secondArg ? [firstArg, secondArg] : [void 0, firstArg];
      let message = " Did you mean ";
      if (subMessage) {
        message += subMessage + " ";
      }
      const suggestions = suggestionsArg.map((x) => `"${x}"`);
      switch (suggestions.length) {
        case 0:
          return "";
        case 1:
          return message + suggestions[0] + "?";
        case 2:
          return message + suggestions[0] + " or " + suggestions[1] + "?";
      }
      const selected = suggestions.slice(0, MAX_SUGGESTIONS);
      const lastItem = selected.pop();
      return message + selected.join(", ") + ", or " + lastItem + "?";
    }
  }
});

// ../../node_modules/graphql/jsutils/identityFunc.js
var require_identityFunc = __commonJS({
  "../../node_modules/graphql/jsutils/identityFunc.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.identityFunc = identityFunc;
    function identityFunc(x) {
      return x;
    }
  }
});

// ../../node_modules/graphql/jsutils/keyMap.js
var require_keyMap = __commonJS({
  "../../node_modules/graphql/jsutils/keyMap.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.keyMap = keyMap;
    function keyMap(list, keyFn) {
      const result = /* @__PURE__ */ Object.create(null);
      for (const item of list) {
        result[keyFn(item)] = item;
      }
      return result;
    }
  }
});

// ../../node_modules/graphql/jsutils/keyValMap.js
var require_keyValMap = __commonJS({
  "../../node_modules/graphql/jsutils/keyValMap.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.keyValMap = keyValMap;
    function keyValMap(list, keyFn, valFn) {
      const result = /* @__PURE__ */ Object.create(null);
      for (const item of list) {
        result[keyFn(item)] = valFn(item);
      }
      return result;
    }
  }
});

// ../../node_modules/graphql/jsutils/mapValue.js
var require_mapValue = __commonJS({
  "../../node_modules/graphql/jsutils/mapValue.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mapValue = mapValue;
    function mapValue(map, fn) {
      const result = /* @__PURE__ */ Object.create(null);
      for (const key of Object.keys(map)) {
        result[key] = fn(map[key], key);
      }
      return result;
    }
  }
});

// ../../node_modules/graphql/jsutils/naturalCompare.js
var require_naturalCompare = __commonJS({
  "../../node_modules/graphql/jsutils/naturalCompare.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.naturalCompare = naturalCompare;
    function naturalCompare(aStr, bStr) {
      let aIndex = 0;
      let bIndex = 0;
      while (aIndex < aStr.length && bIndex < bStr.length) {
        let aChar = aStr.charCodeAt(aIndex);
        let bChar = bStr.charCodeAt(bIndex);
        if (isDigit(aChar) && isDigit(bChar)) {
          let aNum = 0;
          do {
            ++aIndex;
            aNum = aNum * 10 + aChar - DIGIT_0;
            aChar = aStr.charCodeAt(aIndex);
          } while (isDigit(aChar) && aNum > 0);
          let bNum = 0;
          do {
            ++bIndex;
            bNum = bNum * 10 + bChar - DIGIT_0;
            bChar = bStr.charCodeAt(bIndex);
          } while (isDigit(bChar) && bNum > 0);
          if (aNum < bNum) {
            return -1;
          }
          if (aNum > bNum) {
            return 1;
          }
        } else {
          if (aChar < bChar) {
            return -1;
          }
          if (aChar > bChar) {
            return 1;
          }
          ++aIndex;
          ++bIndex;
        }
      }
      return aStr.length - bStr.length;
    }
    var DIGIT_0 = 48;
    var DIGIT_9 = 57;
    function isDigit(code) {
      return !isNaN(code) && DIGIT_0 <= code && code <= DIGIT_9;
    }
  }
});

// ../../node_modules/graphql/jsutils/suggestionList.js
var require_suggestionList = __commonJS({
  "../../node_modules/graphql/jsutils/suggestionList.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.suggestionList = suggestionList;
    var _naturalCompare = require_naturalCompare();
    function suggestionList(input, options) {
      const optionsByDistance = /* @__PURE__ */ Object.create(null);
      const lexicalDistance = new LexicalDistance(input);
      const threshold = Math.floor(input.length * 0.4) + 1;
      for (const option of options) {
        const distance = lexicalDistance.measure(option, threshold);
        if (distance !== void 0) {
          optionsByDistance[option] = distance;
        }
      }
      return Object.keys(optionsByDistance).sort((a, b) => {
        const distanceDiff = optionsByDistance[a] - optionsByDistance[b];
        return distanceDiff !== 0 ? distanceDiff : (0, _naturalCompare.naturalCompare)(a, b);
      });
    }
    var LexicalDistance = class {
      constructor(input) {
        this._input = input;
        this._inputLowerCase = input.toLowerCase();
        this._inputArray = stringToArray(this._inputLowerCase);
        this._rows = [
          new Array(input.length + 1).fill(0),
          new Array(input.length + 1).fill(0),
          new Array(input.length + 1).fill(0)
        ];
      }
      measure(option, threshold) {
        if (this._input === option) {
          return 0;
        }
        const optionLowerCase = option.toLowerCase();
        if (this._inputLowerCase === optionLowerCase) {
          return 1;
        }
        let a = stringToArray(optionLowerCase);
        let b = this._inputArray;
        if (a.length < b.length) {
          const tmp = a;
          a = b;
          b = tmp;
        }
        const aLength = a.length;
        const bLength = b.length;
        if (aLength - bLength > threshold) {
          return void 0;
        }
        const rows = this._rows;
        for (let j = 0; j <= bLength; j++) {
          rows[0][j] = j;
        }
        for (let i = 1; i <= aLength; i++) {
          const upRow = rows[(i - 1) % 3];
          const currentRow = rows[i % 3];
          let smallestCell = currentRow[0] = i;
          for (let j = 1; j <= bLength; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            let currentCell = Math.min(upRow[j] + 1, currentRow[j - 1] + 1, upRow[j - 1] + cost);
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
              const doubleDiagonalCell = rows[(i - 2) % 3][j - 2];
              currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
            }
            if (currentCell < smallestCell) {
              smallestCell = currentCell;
            }
            currentRow[j] = currentCell;
          }
          if (smallestCell > threshold) {
            return void 0;
          }
        }
        const distance = rows[aLength % 3][bLength];
        return distance <= threshold ? distance : void 0;
      }
    };
    function stringToArray(str) {
      const strLength = str.length;
      const array = new Array(strLength);
      for (let i = 0; i < strLength; ++i) {
        array[i] = str.charCodeAt(i);
      }
      return array;
    }
  }
});

// ../../node_modules/graphql/jsutils/toObjMap.js
var require_toObjMap = __commonJS({
  "../../node_modules/graphql/jsutils/toObjMap.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.toObjMap = toObjMap;
    function toObjMap(obj) {
      if (obj == null) {
        return /* @__PURE__ */ Object.create(null);
      }
      if (Object.getPrototypeOf(obj) === null) {
        return obj;
      }
      const map = /* @__PURE__ */ Object.create(null);
      for (const [key, value] of Object.entries(obj)) {
        map[key] = value;
      }
      return map;
    }
  }
});

// ../../node_modules/graphql/language/printString.js
var require_printString = __commonJS({
  "../../node_modules/graphql/language/printString.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printString = printString;
    function printString(str) {
      return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
    }
    var escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    function escapedReplacer(str) {
      return escapeSequences[str.charCodeAt(0)];
    }
    var escapeSequences = [
      "\\u0000",
      "\\u0001",
      "\\u0002",
      "\\u0003",
      "\\u0004",
      "\\u0005",
      "\\u0006",
      "\\u0007",
      "\\b",
      "\\t",
      "\\n",
      "\\u000B",
      "\\f",
      "\\r",
      "\\u000E",
      "\\u000F",
      "\\u0010",
      "\\u0011",
      "\\u0012",
      "\\u0013",
      "\\u0014",
      "\\u0015",
      "\\u0016",
      "\\u0017",
      "\\u0018",
      "\\u0019",
      "\\u001A",
      "\\u001B",
      "\\u001C",
      "\\u001D",
      "\\u001E",
      "\\u001F",
      "",
      "",
      '\\"',
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\\\",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\u007F",
      "\\u0080",
      "\\u0081",
      "\\u0082",
      "\\u0083",
      "\\u0084",
      "\\u0085",
      "\\u0086",
      "\\u0087",
      "\\u0088",
      "\\u0089",
      "\\u008A",
      "\\u008B",
      "\\u008C",
      "\\u008D",
      "\\u008E",
      "\\u008F",
      "\\u0090",
      "\\u0091",
      "\\u0092",
      "\\u0093",
      "\\u0094",
      "\\u0095",
      "\\u0096",
      "\\u0097",
      "\\u0098",
      "\\u0099",
      "\\u009A",
      "\\u009B",
      "\\u009C",
      "\\u009D",
      "\\u009E",
      "\\u009F"
    ];
  }
});

// ../../node_modules/graphql/language/visitor.js
var require_visitor = __commonJS({
  "../../node_modules/graphql/language/visitor.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BREAK = void 0;
    exports.getEnterLeaveForKind = getEnterLeaveForKind;
    exports.getVisitFn = getVisitFn;
    exports.visit = visit;
    exports.visitInParallel = visitInParallel;
    var _devAssert = require_devAssert();
    var _inspect = require_inspect();
    var _ast = require_ast();
    var _kinds = require_kinds();
    var BREAK = Object.freeze({});
    exports.BREAK = BREAK;
    function visit(root, visitor, visitorKeys = _ast.QueryDocumentKeys) {
      const enterLeaveMap = /* @__PURE__ */ new Map();
      for (const kind of Object.values(_kinds.Kind)) {
        enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
      }
      let stack = void 0;
      let inArray = Array.isArray(root);
      let keys = [root];
      let index = -1;
      let edits = [];
      let node = root;
      let key = void 0;
      let parent = void 0;
      const path = [];
      const ancestors = [];
      do {
        index++;
        const isLeaving = index === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
          key = ancestors.length === 0 ? void 0 : path[path.length - 1];
          node = parent;
          parent = ancestors.pop();
          if (isEdited) {
            if (inArray) {
              node = node.slice();
              let editOffset = 0;
              for (const [editKey, editValue] of edits) {
                const arrayKey = editKey - editOffset;
                if (editValue === null) {
                  node.splice(arrayKey, 1);
                  editOffset++;
                } else {
                  node[arrayKey] = editValue;
                }
              }
            } else {
              node = Object.defineProperties({}, Object.getOwnPropertyDescriptors(node));
              for (const [editKey, editValue] of edits) {
                node[editKey] = editValue;
              }
            }
          }
          index = stack.index;
          keys = stack.keys;
          edits = stack.edits;
          inArray = stack.inArray;
          stack = stack.prev;
        } else if (parent) {
          key = inArray ? index : keys[index];
          node = parent[key];
          if (node === null || node === void 0) {
            continue;
          }
          path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
          var _enterLeaveMap$get, _enterLeaveMap$get2;
          (0, _ast.isNode)(node) || (0, _devAssert.devAssert)(false, `Invalid AST Node: ${(0, _inspect.inspect)(node)}.`);
          const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
          result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
          if (result === BREAK) {
            break;
          }
          if (result === false) {
            if (!isLeaving) {
              path.pop();
              continue;
            }
          } else if (result !== void 0) {
            edits.push([key, result]);
            if (!isLeaving) {
              if ((0, _ast.isNode)(result)) {
                node = result;
              } else {
                path.pop();
                continue;
              }
            }
          }
        }
        if (result === void 0 && isEdited) {
          edits.push([key, node]);
        }
        if (isLeaving) {
          path.pop();
        } else {
          var _node$kind;
          stack = {
            inArray,
            index,
            keys,
            edits,
            prev: stack
          };
          inArray = Array.isArray(node);
          keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
          index = -1;
          edits = [];
          if (parent) {
            ancestors.push(parent);
          }
          parent = node;
        }
      } while (stack !== void 0);
      if (edits.length !== 0) {
        return edits[edits.length - 1][1];
      }
      return root;
    }
    function visitInParallel(visitors) {
      const skipping = new Array(visitors.length).fill(null);
      const mergedVisitor = /* @__PURE__ */ Object.create(null);
      for (const kind of Object.values(_kinds.Kind)) {
        let hasVisitor = false;
        const enterList = new Array(visitors.length).fill(void 0);
        const leaveList = new Array(visitors.length).fill(void 0);
        for (let i = 0; i < visitors.length; ++i) {
          const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
          hasVisitor || (hasVisitor = enter != null || leave != null);
          enterList[i] = enter;
          leaveList[i] = leave;
        }
        if (!hasVisitor) {
          continue;
        }
        const mergedEnterLeave = {
          enter(...args) {
            const node = args[0];
            for (let i = 0; i < visitors.length; i++) {
              if (skipping[i] === null) {
                var _enterList$i;
                const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                if (result === false) {
                  skipping[i] = node;
                } else if (result === BREAK) {
                  skipping[i] = BREAK;
                } else if (result !== void 0) {
                  return result;
                }
              }
            }
          },
          leave(...args) {
            const node = args[0];
            for (let i = 0; i < visitors.length; i++) {
              if (skipping[i] === null) {
                var _leaveList$i;
                const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                if (result === BREAK) {
                  skipping[i] = BREAK;
                } else if (result !== void 0 && result !== false) {
                  return result;
                }
              } else if (skipping[i] === node) {
                skipping[i] = null;
              }
            }
          }
        };
        mergedVisitor[kind] = mergedEnterLeave;
      }
      return mergedVisitor;
    }
    function getEnterLeaveForKind(visitor, kind) {
      const kindVisitor = visitor[kind];
      if (typeof kindVisitor === "object") {
        return kindVisitor;
      } else if (typeof kindVisitor === "function") {
        return {
          enter: kindVisitor,
          leave: void 0
        };
      }
      return {
        enter: visitor.enter,
        leave: visitor.leave
      };
    }
    function getVisitFn(visitor, kind, isLeaving) {
      const { enter, leave } = getEnterLeaveForKind(visitor, kind);
      return isLeaving ? leave : enter;
    }
  }
});

// ../../node_modules/graphql/language/printer.js
var require_printer = __commonJS({
  "../../node_modules/graphql/language/printer.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.print = print;
    var _blockString = require_blockString();
    var _printString = require_printString();
    var _visitor = require_visitor();
    function print(ast) {
      return (0, _visitor.visit)(ast, printDocASTReducer);
    }
    var MAX_LINE_LENGTH = 80;
    var printDocASTReducer = {
      Name: {
        leave: (node) => node.value
      },
      Variable: {
        leave: (node) => "$" + node.name
      },
      Document: {
        leave: (node) => join2(node.definitions, "\n\n")
      },
      OperationDefinition: {
        leave(node) {
          const varDefs = wrap("(", join2(node.variableDefinitions, ", "), ")");
          const prefix = join2([
            node.operation,
            join2([node.name, varDefs]),
            join2(node.directives, " ")
          ], " ");
          return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
        }
      },
      VariableDefinition: {
        leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join2(directives, " "))
      },
      SelectionSet: {
        leave: ({ selections }) => block(selections)
      },
      Field: {
        leave({ alias, name, arguments: args, directives, selectionSet }) {
          const prefix = wrap("", alias, ": ") + name;
          let argsLine = prefix + wrap("(", join2(args, ", "), ")");
          if (argsLine.length > MAX_LINE_LENGTH) {
            argsLine = prefix + wrap("(\n", indent(join2(args, "\n")), "\n)");
          }
          return join2([argsLine, join2(directives, " "), selectionSet], " ");
        }
      },
      Argument: {
        leave: ({ name, value }) => name + ": " + value
      },
      FragmentSpread: {
        leave: ({ name, directives }) => "..." + name + wrap(" ", join2(directives, " "))
      },
      InlineFragment: {
        leave: ({ typeCondition, directives, selectionSet }) => join2([
          "...",
          wrap("on ", typeCondition),
          join2(directives, " "),
          selectionSet
        ], " ")
      },
      FragmentDefinition: {
        leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => `fragment ${name}${wrap("(", join2(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap("", join2(directives, " "), " ")}` + selectionSet
      },
      IntValue: {
        leave: ({ value }) => value
      },
      FloatValue: {
        leave: ({ value }) => value
      },
      StringValue: {
        leave: ({ value, block: isBlockString }) => isBlockString ? (0, _blockString.printBlockString)(value) : (0, _printString.printString)(value)
      },
      BooleanValue: {
        leave: ({ value }) => value ? "true" : "false"
      },
      NullValue: {
        leave: () => "null"
      },
      EnumValue: {
        leave: ({ value }) => value
      },
      ListValue: {
        leave: ({ values }) => "[" + join2(values, ", ") + "]"
      },
      ObjectValue: {
        leave: ({ fields }) => "{" + join2(fields, ", ") + "}"
      },
      ObjectField: {
        leave: ({ name, value }) => name + ": " + value
      },
      Directive: {
        leave: ({ name, arguments: args }) => "@" + name + wrap("(", join2(args, ", "), ")")
      },
      NamedType: {
        leave: ({ name }) => name
      },
      ListType: {
        leave: ({ type }) => "[" + type + "]"
      },
      NonNullType: {
        leave: ({ type }) => type + "!"
      },
      SchemaDefinition: {
        leave: ({ description, directives, operationTypes }) => wrap("", description, "\n") + join2(["schema", join2(directives, " "), block(operationTypes)], " ")
      },
      OperationTypeDefinition: {
        leave: ({ operation, type }) => operation + ": " + type
      },
      ScalarTypeDefinition: {
        leave: ({ description, name, directives }) => wrap("", description, "\n") + join2(["scalar", name, join2(directives, " ")], " ")
      },
      ObjectTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join2([
          "type",
          name,
          wrap("implements ", join2(interfaces, " & ")),
          join2(directives, " "),
          block(fields)
        ], " ")
      },
      FieldDefinition: {
        leave: ({ description, name, arguments: args, type, directives }) => wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join2(args, "\n")), "\n)") : wrap("(", join2(args, ", "), ")")) + ": " + type + wrap(" ", join2(directives, " "))
      },
      InputValueDefinition: {
        leave: ({ description, name, type, defaultValue, directives }) => wrap("", description, "\n") + join2([name + ": " + type, wrap("= ", defaultValue), join2(directives, " ")], " ")
      },
      InterfaceTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join2([
          "interface",
          name,
          wrap("implements ", join2(interfaces, " & ")),
          join2(directives, " "),
          block(fields)
        ], " ")
      },
      UnionTypeDefinition: {
        leave: ({ description, name, directives, types }) => wrap("", description, "\n") + join2(["union", name, join2(directives, " "), wrap("= ", join2(types, " | "))], " ")
      },
      EnumTypeDefinition: {
        leave: ({ description, name, directives, values }) => wrap("", description, "\n") + join2(["enum", name, join2(directives, " "), block(values)], " ")
      },
      EnumValueDefinition: {
        leave: ({ description, name, directives }) => wrap("", description, "\n") + join2([name, join2(directives, " ")], " ")
      },
      InputObjectTypeDefinition: {
        leave: ({ description, name, directives, fields }) => wrap("", description, "\n") + join2(["input", name, join2(directives, " "), block(fields)], " ")
      },
      DirectiveDefinition: {
        leave: ({ description, name, arguments: args, repeatable, locations }) => wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join2(args, "\n")), "\n)") : wrap("(", join2(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join2(locations, " | ")
      },
      SchemaExtension: {
        leave: ({ directives, operationTypes }) => join2(["extend schema", join2(directives, " "), block(operationTypes)], " ")
      },
      ScalarTypeExtension: {
        leave: ({ name, directives }) => join2(["extend scalar", name, join2(directives, " ")], " ")
      },
      ObjectTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join2([
          "extend type",
          name,
          wrap("implements ", join2(interfaces, " & ")),
          join2(directives, " "),
          block(fields)
        ], " ")
      },
      InterfaceTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join2([
          "extend interface",
          name,
          wrap("implements ", join2(interfaces, " & ")),
          join2(directives, " "),
          block(fields)
        ], " ")
      },
      UnionTypeExtension: {
        leave: ({ name, directives, types }) => join2([
          "extend union",
          name,
          join2(directives, " "),
          wrap("= ", join2(types, " | "))
        ], " ")
      },
      EnumTypeExtension: {
        leave: ({ name, directives, values }) => join2(["extend enum", name, join2(directives, " "), block(values)], " ")
      },
      InputObjectTypeExtension: {
        leave: ({ name, directives, fields }) => join2(["extend input", name, join2(directives, " "), block(fields)], " ")
      }
    };
    function join2(maybeArray, separator = "") {
      var _maybeArray$filter$jo;
      return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
    }
    function block(array) {
      return wrap("{\n", indent(join2(array, "\n")), "\n}");
    }
    function wrap(start, maybeString, end = "") {
      return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
    }
    function indent(str) {
      return wrap("  ", str.replace(/\n/g, "\n  "));
    }
    function hasMultilineItems(maybeArray) {
      var _maybeArray$some;
      return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
    }
  }
});

// ../../node_modules/graphql/utilities/valueFromASTUntyped.js
var require_valueFromASTUntyped = __commonJS({
  "../../node_modules/graphql/utilities/valueFromASTUntyped.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.valueFromASTUntyped = valueFromASTUntyped;
    var _keyValMap = require_keyValMap();
    var _kinds = require_kinds();
    function valueFromASTUntyped(valueNode, variables) {
      switch (valueNode.kind) {
        case _kinds.Kind.NULL:
          return null;
        case _kinds.Kind.INT:
          return parseInt(valueNode.value, 10);
        case _kinds.Kind.FLOAT:
          return parseFloat(valueNode.value);
        case _kinds.Kind.STRING:
        case _kinds.Kind.ENUM:
        case _kinds.Kind.BOOLEAN:
          return valueNode.value;
        case _kinds.Kind.LIST:
          return valueNode.values.map((node) => valueFromASTUntyped(node, variables));
        case _kinds.Kind.OBJECT:
          return (0, _keyValMap.keyValMap)(valueNode.fields, (field) => field.name.value, (field) => valueFromASTUntyped(field.value, variables));
        case _kinds.Kind.VARIABLE:
          return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
      }
    }
  }
});

// ../../node_modules/graphql/type/assertName.js
var require_assertName = __commonJS({
  "../../node_modules/graphql/type/assertName.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.assertEnumValueName = assertEnumValueName;
    exports.assertName = assertName;
    var _devAssert = require_devAssert();
    var _GraphQLError = require_GraphQLError();
    var _characterClasses = require_characterClasses();
    function assertName(name) {
      name != null || (0, _devAssert.devAssert)(false, "Must provide name.");
      typeof name === "string" || (0, _devAssert.devAssert)(false, "Expected name to be a string.");
      if (name.length === 0) {
        throw new _GraphQLError.GraphQLError("Expected name to be a non-empty string.");
      }
      for (let i = 1; i < name.length; ++i) {
        if (!(0, _characterClasses.isNameContinue)(name.charCodeAt(i))) {
          throw new _GraphQLError.GraphQLError(`Names must only contain [_a-zA-Z0-9] but "${name}" does not.`);
        }
      }
      if (!(0, _characterClasses.isNameStart)(name.charCodeAt(0))) {
        throw new _GraphQLError.GraphQLError(`Names must start with [_a-zA-Z] but "${name}" does not.`);
      }
      return name;
    }
    function assertEnumValueName(name) {
      if (name === "true" || name === "false" || name === "null") {
        throw new _GraphQLError.GraphQLError(`Enum values cannot be named: ${name}`);
      }
      return assertName(name);
    }
  }
});

// ../../node_modules/graphql/type/definition.js
var require_definition = __commonJS({
  "../../node_modules/graphql/type/definition.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GraphQLUnionType = exports.GraphQLScalarType = exports.GraphQLObjectType = exports.GraphQLNonNull = exports.GraphQLList = exports.GraphQLInterfaceType = exports.GraphQLInputObjectType = exports.GraphQLEnumType = void 0;
    exports.argsToArgsConfig = argsToArgsConfig;
    exports.assertAbstractType = assertAbstractType;
    exports.assertCompositeType = assertCompositeType;
    exports.assertEnumType = assertEnumType;
    exports.assertInputObjectType = assertInputObjectType;
    exports.assertInputType = assertInputType;
    exports.assertInterfaceType = assertInterfaceType;
    exports.assertLeafType = assertLeafType;
    exports.assertListType = assertListType;
    exports.assertNamedType = assertNamedType;
    exports.assertNonNullType = assertNonNullType;
    exports.assertNullableType = assertNullableType;
    exports.assertObjectType = assertObjectType;
    exports.assertOutputType = assertOutputType;
    exports.assertScalarType = assertScalarType;
    exports.assertType = assertType;
    exports.assertUnionType = assertUnionType;
    exports.assertWrappingType = assertWrappingType;
    exports.defineArguments = defineArguments;
    exports.getNamedType = getNamedType;
    exports.getNullableType = getNullableType;
    exports.isAbstractType = isAbstractType;
    exports.isCompositeType = isCompositeType;
    exports.isEnumType = isEnumType;
    exports.isInputObjectType = isInputObjectType;
    exports.isInputType = isInputType;
    exports.isInterfaceType = isInterfaceType;
    exports.isLeafType = isLeafType;
    exports.isListType = isListType;
    exports.isNamedType = isNamedType;
    exports.isNonNullType = isNonNullType;
    exports.isNullableType = isNullableType;
    exports.isObjectType = isObjectType;
    exports.isOutputType = isOutputType;
    exports.isRequiredArgument = isRequiredArgument;
    exports.isRequiredInputField = isRequiredInputField;
    exports.isScalarType = isScalarType;
    exports.isType = isType;
    exports.isUnionType = isUnionType;
    exports.isWrappingType = isWrappingType;
    exports.resolveObjMapThunk = resolveObjMapThunk;
    exports.resolveReadonlyArrayThunk = resolveReadonlyArrayThunk;
    var _devAssert = require_devAssert();
    var _didYouMean = require_didYouMean();
    var _identityFunc = require_identityFunc();
    var _inspect = require_inspect();
    var _instanceOf = require_instanceOf();
    var _isObjectLike = require_isObjectLike();
    var _keyMap = require_keyMap();
    var _keyValMap = require_keyValMap();
    var _mapValue = require_mapValue();
    var _suggestionList = require_suggestionList();
    var _toObjMap = require_toObjMap();
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _valueFromASTUntyped = require_valueFromASTUntyped();
    var _assertName = require_assertName();
    function isType(type) {
      return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
    }
    function assertType(type) {
      if (!isType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL type.`);
      }
      return type;
    }
    function isScalarType(type) {
      return (0, _instanceOf.instanceOf)(type, GraphQLScalarType);
    }
    function assertScalarType(type) {
      if (!isScalarType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Scalar type.`);
      }
      return type;
    }
    function isObjectType(type) {
      return (0, _instanceOf.instanceOf)(type, GraphQLObjectType);
    }
    function assertObjectType(type) {
      if (!isObjectType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Object type.`);
      }
      return type;
    }
    function isInterfaceType(type) {
      return (0, _instanceOf.instanceOf)(type, GraphQLInterfaceType);
    }
    function assertInterfaceType(type) {
      if (!isInterfaceType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Interface type.`);
      }
      return type;
    }
    function isUnionType(type) {
      return (0, _instanceOf.instanceOf)(type, GraphQLUnionType);
    }
    function assertUnionType(type) {
      if (!isUnionType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Union type.`);
      }
      return type;
    }
    function isEnumType(type) {
      return (0, _instanceOf.instanceOf)(type, GraphQLEnumType);
    }
    function assertEnumType(type) {
      if (!isEnumType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Enum type.`);
      }
      return type;
    }
    function isInputObjectType(type) {
      return (0, _instanceOf.instanceOf)(type, GraphQLInputObjectType);
    }
    function assertInputObjectType(type) {
      if (!isInputObjectType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Input Object type.`);
      }
      return type;
    }
    function isListType(type) {
      return (0, _instanceOf.instanceOf)(type, GraphQLList);
    }
    function assertListType(type) {
      if (!isListType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL List type.`);
      }
      return type;
    }
    function isNonNullType(type) {
      return (0, _instanceOf.instanceOf)(type, GraphQLNonNull);
    }
    function assertNonNullType(type) {
      if (!isNonNullType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL Non-Null type.`);
      }
      return type;
    }
    function isInputType(type) {
      return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
    }
    function assertInputType(type) {
      if (!isInputType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL input type.`);
      }
      return type;
    }
    function isOutputType(type) {
      return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
    }
    function assertOutputType(type) {
      if (!isOutputType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL output type.`);
      }
      return type;
    }
    function isLeafType(type) {
      return isScalarType(type) || isEnumType(type);
    }
    function assertLeafType(type) {
      if (!isLeafType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL leaf type.`);
      }
      return type;
    }
    function isCompositeType(type) {
      return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
    }
    function assertCompositeType(type) {
      if (!isCompositeType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL composite type.`);
      }
      return type;
    }
    function isAbstractType(type) {
      return isInterfaceType(type) || isUnionType(type);
    }
    function assertAbstractType(type) {
      if (!isAbstractType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL abstract type.`);
      }
      return type;
    }
    var GraphQLList = class {
      constructor(ofType) {
        isType(ofType) || (0, _devAssert.devAssert)(false, `Expected ${(0, _inspect.inspect)(ofType)} to be a GraphQL type.`);
        this.ofType = ofType;
      }
      get [Symbol.toStringTag]() {
        return "GraphQLList";
      }
      toString() {
        return "[" + String(this.ofType) + "]";
      }
      toJSON() {
        return this.toString();
      }
    };
    exports.GraphQLList = GraphQLList;
    var GraphQLNonNull = class {
      constructor(ofType) {
        isNullableType(ofType) || (0, _devAssert.devAssert)(false, `Expected ${(0, _inspect.inspect)(ofType)} to be a GraphQL nullable type.`);
        this.ofType = ofType;
      }
      get [Symbol.toStringTag]() {
        return "GraphQLNonNull";
      }
      toString() {
        return String(this.ofType) + "!";
      }
      toJSON() {
        return this.toString();
      }
    };
    exports.GraphQLNonNull = GraphQLNonNull;
    function isWrappingType(type) {
      return isListType(type) || isNonNullType(type);
    }
    function assertWrappingType(type) {
      if (!isWrappingType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL wrapping type.`);
      }
      return type;
    }
    function isNullableType(type) {
      return isType(type) && !isNonNullType(type);
    }
    function assertNullableType(type) {
      if (!isNullableType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL nullable type.`);
      }
      return type;
    }
    function getNullableType(type) {
      if (type) {
        return isNonNullType(type) ? type.ofType : type;
      }
    }
    function isNamedType(type) {
      return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
    }
    function assertNamedType(type) {
      if (!isNamedType(type)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(type)} to be a GraphQL named type.`);
      }
      return type;
    }
    function getNamedType(type) {
      if (type) {
        let unwrappedType = type;
        while (isWrappingType(unwrappedType)) {
          unwrappedType = unwrappedType.ofType;
        }
        return unwrappedType;
      }
    }
    function resolveReadonlyArrayThunk(thunk) {
      return typeof thunk === "function" ? thunk() : thunk;
    }
    function resolveObjMapThunk(thunk) {
      return typeof thunk === "function" ? thunk() : thunk;
    }
    var GraphQLScalarType = class {
      constructor(config) {
        var _config$parseValue, _config$serialize, _config$parseLiteral, _config$extensionASTN;
        const parseValue = (_config$parseValue = config.parseValue) !== null && _config$parseValue !== void 0 ? _config$parseValue : _identityFunc.identityFunc;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.specifiedByURL = config.specifiedByURL;
        this.serialize = (_config$serialize = config.serialize) !== null && _config$serialize !== void 0 ? _config$serialize : _identityFunc.identityFunc;
        this.parseValue = parseValue;
        this.parseLiteral = (_config$parseLiteral = config.parseLiteral) !== null && _config$parseLiteral !== void 0 ? _config$parseLiteral : (node, variables) => parseValue((0, _valueFromASTUntyped.valueFromASTUntyped)(node, variables));
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
        config.specifiedByURL == null || typeof config.specifiedByURL === "string" || (0, _devAssert.devAssert)(false, `${this.name} must provide "specifiedByURL" as a string, but got: ${(0, _inspect.inspect)(config.specifiedByURL)}.`);
        config.serialize == null || typeof config.serialize === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`);
        if (config.parseLiteral) {
          typeof config.parseValue === "function" && typeof config.parseLiteral === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`);
        }
      }
      get [Symbol.toStringTag]() {
        return "GraphQLScalarType";
      }
      toConfig() {
        return {
          name: this.name,
          description: this.description,
          specifiedByURL: this.specifiedByURL,
          serialize: this.serialize,
          parseValue: this.parseValue,
          parseLiteral: this.parseLiteral,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: this.extensionASTNodes
        };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    exports.GraphQLScalarType = GraphQLScalarType;
    var GraphQLObjectType = class {
      constructor(config) {
        var _config$extensionASTN2;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.isTypeOf = config.isTypeOf;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN2 = config.extensionASTNodes) !== null && _config$extensionASTN2 !== void 0 ? _config$extensionASTN2 : [];
        this._fields = () => defineFieldMap(config);
        this._interfaces = () => defineInterfaces(config);
        config.isTypeOf == null || typeof config.isTypeOf === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide "isTypeOf" as a function, but got: ${(0, _inspect.inspect)(config.isTypeOf)}.`);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLObjectType";
      }
      getFields() {
        if (typeof this._fields === "function") {
          this._fields = this._fields();
        }
        return this._fields;
      }
      getInterfaces() {
        if (typeof this._interfaces === "function") {
          this._interfaces = this._interfaces();
        }
        return this._interfaces;
      }
      toConfig() {
        return {
          name: this.name,
          description: this.description,
          interfaces: this.getInterfaces(),
          fields: fieldsToFieldsConfig(this.getFields()),
          isTypeOf: this.isTypeOf,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: this.extensionASTNodes
        };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    exports.GraphQLObjectType = GraphQLObjectType;
    function defineInterfaces(config) {
      var _config$interfaces;
      const interfaces = resolveReadonlyArrayThunk((_config$interfaces = config.interfaces) !== null && _config$interfaces !== void 0 ? _config$interfaces : []);
      Array.isArray(interfaces) || (0, _devAssert.devAssert)(false, `${config.name} interfaces must be an Array or a function which returns an Array.`);
      return interfaces;
    }
    function defineFieldMap(config) {
      const fieldMap = resolveObjMapThunk(config.fields);
      isPlainObj(fieldMap) || (0, _devAssert.devAssert)(false, `${config.name} fields must be an object with field names as keys or a function which returns such an object.`);
      return (0, _mapValue.mapValue)(fieldMap, (fieldConfig, fieldName) => {
        var _fieldConfig$args;
        isPlainObj(fieldConfig) || (0, _devAssert.devAssert)(false, `${config.name}.${fieldName} field config must be an object.`);
        fieldConfig.resolve == null || typeof fieldConfig.resolve === "function" || (0, _devAssert.devAssert)(false, `${config.name}.${fieldName} field resolver must be a function if provided, but got: ${(0, _inspect.inspect)(fieldConfig.resolve)}.`);
        const argsConfig = (_fieldConfig$args = fieldConfig.args) !== null && _fieldConfig$args !== void 0 ? _fieldConfig$args : {};
        isPlainObj(argsConfig) || (0, _devAssert.devAssert)(false, `${config.name}.${fieldName} args must be an object with argument names as keys.`);
        return {
          name: (0, _assertName.assertName)(fieldName),
          description: fieldConfig.description,
          type: fieldConfig.type,
          args: defineArguments(argsConfig),
          resolve: fieldConfig.resolve,
          subscribe: fieldConfig.subscribe,
          deprecationReason: fieldConfig.deprecationReason,
          extensions: (0, _toObjMap.toObjMap)(fieldConfig.extensions),
          astNode: fieldConfig.astNode
        };
      });
    }
    function defineArguments(config) {
      return Object.entries(config).map(([argName, argConfig]) => ({
        name: (0, _assertName.assertName)(argName),
        description: argConfig.description,
        type: argConfig.type,
        defaultValue: argConfig.defaultValue,
        deprecationReason: argConfig.deprecationReason,
        extensions: (0, _toObjMap.toObjMap)(argConfig.extensions),
        astNode: argConfig.astNode
      }));
    }
    function isPlainObj(obj) {
      return (0, _isObjectLike.isObjectLike)(obj) && !Array.isArray(obj);
    }
    function fieldsToFieldsConfig(fields) {
      return (0, _mapValue.mapValue)(fields, (field) => ({
        description: field.description,
        type: field.type,
        args: argsToArgsConfig(field.args),
        resolve: field.resolve,
        subscribe: field.subscribe,
        deprecationReason: field.deprecationReason,
        extensions: field.extensions,
        astNode: field.astNode
      }));
    }
    function argsToArgsConfig(args) {
      return (0, _keyValMap.keyValMap)(args, (arg) => arg.name, (arg) => ({
        description: arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        deprecationReason: arg.deprecationReason,
        extensions: arg.extensions,
        astNode: arg.astNode
      }));
    }
    function isRequiredArgument(arg) {
      return isNonNullType(arg.type) && arg.defaultValue === void 0;
    }
    var GraphQLInterfaceType = class {
      constructor(config) {
        var _config$extensionASTN3;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.resolveType = config.resolveType;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN3 = config.extensionASTNodes) !== null && _config$extensionASTN3 !== void 0 ? _config$extensionASTN3 : [];
        this._fields = defineFieldMap.bind(void 0, config);
        this._interfaces = defineInterfaces.bind(void 0, config);
        config.resolveType == null || typeof config.resolveType === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide "resolveType" as a function, but got: ${(0, _inspect.inspect)(config.resolveType)}.`);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLInterfaceType";
      }
      getFields() {
        if (typeof this._fields === "function") {
          this._fields = this._fields();
        }
        return this._fields;
      }
      getInterfaces() {
        if (typeof this._interfaces === "function") {
          this._interfaces = this._interfaces();
        }
        return this._interfaces;
      }
      toConfig() {
        return {
          name: this.name,
          description: this.description,
          interfaces: this.getInterfaces(),
          fields: fieldsToFieldsConfig(this.getFields()),
          resolveType: this.resolveType,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: this.extensionASTNodes
        };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    exports.GraphQLInterfaceType = GraphQLInterfaceType;
    var GraphQLUnionType = class {
      constructor(config) {
        var _config$extensionASTN4;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.resolveType = config.resolveType;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN4 = config.extensionASTNodes) !== null && _config$extensionASTN4 !== void 0 ? _config$extensionASTN4 : [];
        this._types = defineTypes.bind(void 0, config);
        config.resolveType == null || typeof config.resolveType === "function" || (0, _devAssert.devAssert)(false, `${this.name} must provide "resolveType" as a function, but got: ${(0, _inspect.inspect)(config.resolveType)}.`);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLUnionType";
      }
      getTypes() {
        if (typeof this._types === "function") {
          this._types = this._types();
        }
        return this._types;
      }
      toConfig() {
        return {
          name: this.name,
          description: this.description,
          types: this.getTypes(),
          resolveType: this.resolveType,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: this.extensionASTNodes
        };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    exports.GraphQLUnionType = GraphQLUnionType;
    function defineTypes(config) {
      const types = resolveReadonlyArrayThunk(config.types);
      Array.isArray(types) || (0, _devAssert.devAssert)(false, `Must provide Array of types or a function which returns such an array for Union ${config.name}.`);
      return types;
    }
    var GraphQLEnumType = class {
      constructor(config) {
        var _config$extensionASTN5;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN5 = config.extensionASTNodes) !== null && _config$extensionASTN5 !== void 0 ? _config$extensionASTN5 : [];
        this._values = defineEnumValues(this.name, config.values);
        this._valueLookup = new Map(this._values.map((enumValue) => [enumValue.value, enumValue]));
        this._nameLookup = (0, _keyMap.keyMap)(this._values, (value) => value.name);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLEnumType";
      }
      getValues() {
        return this._values;
      }
      getValue(name) {
        return this._nameLookup[name];
      }
      serialize(outputValue) {
        const enumValue = this._valueLookup.get(outputValue);
        if (enumValue === void 0) {
          throw new _GraphQLError.GraphQLError(`Enum "${this.name}" cannot represent value: ${(0, _inspect.inspect)(outputValue)}`);
        }
        return enumValue.name;
      }
      parseValue(inputValue) {
        if (typeof inputValue !== "string") {
          const valueStr = (0, _inspect.inspect)(inputValue);
          throw new _GraphQLError.GraphQLError(`Enum "${this.name}" cannot represent non-string value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr));
        }
        const enumValue = this.getValue(inputValue);
        if (enumValue == null) {
          throw new _GraphQLError.GraphQLError(`Value "${inputValue}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, inputValue));
        }
        return enumValue.value;
      }
      parseLiteral(valueNode, _variables) {
        if (valueNode.kind !== _kinds.Kind.ENUM) {
          const valueStr = (0, _printer.print)(valueNode);
          throw new _GraphQLError.GraphQLError(`Enum "${this.name}" cannot represent non-enum value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr), {
            nodes: valueNode
          });
        }
        const enumValue = this.getValue(valueNode.value);
        if (enumValue == null) {
          const valueStr = (0, _printer.print)(valueNode);
          throw new _GraphQLError.GraphQLError(`Value "${valueStr}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, valueStr), {
            nodes: valueNode
          });
        }
        return enumValue.value;
      }
      toConfig() {
        const values = (0, _keyValMap.keyValMap)(this.getValues(), (value) => value.name, (value) => ({
          description: value.description,
          value: value.value,
          deprecationReason: value.deprecationReason,
          extensions: value.extensions,
          astNode: value.astNode
        }));
        return {
          name: this.name,
          description: this.description,
          values,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: this.extensionASTNodes
        };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    exports.GraphQLEnumType = GraphQLEnumType;
    function didYouMeanEnumValue(enumType, unknownValueStr) {
      const allNames = enumType.getValues().map((value) => value.name);
      const suggestedValues = (0, _suggestionList.suggestionList)(unknownValueStr, allNames);
      return (0, _didYouMean.didYouMean)("the enum value", suggestedValues);
    }
    function defineEnumValues(typeName, valueMap) {
      isPlainObj(valueMap) || (0, _devAssert.devAssert)(false, `${typeName} values must be an object with value names as keys.`);
      return Object.entries(valueMap).map(([valueName, valueConfig]) => {
        isPlainObj(valueConfig) || (0, _devAssert.devAssert)(false, `${typeName}.${valueName} must refer to an object with a "value" key representing an internal value but got: ${(0, _inspect.inspect)(valueConfig)}.`);
        return {
          name: (0, _assertName.assertEnumValueName)(valueName),
          description: valueConfig.description,
          value: valueConfig.value !== void 0 ? valueConfig.value : valueName,
          deprecationReason: valueConfig.deprecationReason,
          extensions: (0, _toObjMap.toObjMap)(valueConfig.extensions),
          astNode: valueConfig.astNode
        };
      });
    }
    var GraphQLInputObjectType = class {
      constructor(config) {
        var _config$extensionASTN6;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN6 = config.extensionASTNodes) !== null && _config$extensionASTN6 !== void 0 ? _config$extensionASTN6 : [];
        this._fields = defineInputFieldMap.bind(void 0, config);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLInputObjectType";
      }
      getFields() {
        if (typeof this._fields === "function") {
          this._fields = this._fields();
        }
        return this._fields;
      }
      toConfig() {
        const fields = (0, _mapValue.mapValue)(this.getFields(), (field) => ({
          description: field.description,
          type: field.type,
          defaultValue: field.defaultValue,
          deprecationReason: field.deprecationReason,
          extensions: field.extensions,
          astNode: field.astNode
        }));
        return {
          name: this.name,
          description: this.description,
          fields,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: this.extensionASTNodes
        };
      }
      toString() {
        return this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    exports.GraphQLInputObjectType = GraphQLInputObjectType;
    function defineInputFieldMap(config) {
      const fieldMap = resolveObjMapThunk(config.fields);
      isPlainObj(fieldMap) || (0, _devAssert.devAssert)(false, `${config.name} fields must be an object with field names as keys or a function which returns such an object.`);
      return (0, _mapValue.mapValue)(fieldMap, (fieldConfig, fieldName) => {
        !("resolve" in fieldConfig) || (0, _devAssert.devAssert)(false, `${config.name}.${fieldName} field has a resolve property, but Input Types cannot define resolvers.`);
        return {
          name: (0, _assertName.assertName)(fieldName),
          description: fieldConfig.description,
          type: fieldConfig.type,
          defaultValue: fieldConfig.defaultValue,
          deprecationReason: fieldConfig.deprecationReason,
          extensions: (0, _toObjMap.toObjMap)(fieldConfig.extensions),
          astNode: fieldConfig.astNode
        };
      });
    }
    function isRequiredInputField(field) {
      return isNonNullType(field.type) && field.defaultValue === void 0;
    }
  }
});

// ../../node_modules/graphql/utilities/typeComparators.js
var require_typeComparators = __commonJS({
  "../../node_modules/graphql/utilities/typeComparators.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.doTypesOverlap = doTypesOverlap;
    exports.isEqualType = isEqualType;
    exports.isTypeSubTypeOf = isTypeSubTypeOf;
    var _definition = require_definition();
    function isEqualType(typeA, typeB) {
      if (typeA === typeB) {
        return true;
      }
      if ((0, _definition.isNonNullType)(typeA) && (0, _definition.isNonNullType)(typeB)) {
        return isEqualType(typeA.ofType, typeB.ofType);
      }
      if ((0, _definition.isListType)(typeA) && (0, _definition.isListType)(typeB)) {
        return isEqualType(typeA.ofType, typeB.ofType);
      }
      return false;
    }
    function isTypeSubTypeOf(schema, maybeSubType, superType) {
      if (maybeSubType === superType) {
        return true;
      }
      if ((0, _definition.isNonNullType)(superType)) {
        if ((0, _definition.isNonNullType)(maybeSubType)) {
          return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
        }
        return false;
      }
      if ((0, _definition.isNonNullType)(maybeSubType)) {
        return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
      }
      if ((0, _definition.isListType)(superType)) {
        if ((0, _definition.isListType)(maybeSubType)) {
          return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
        }
        return false;
      }
      if ((0, _definition.isListType)(maybeSubType)) {
        return false;
      }
      return (0, _definition.isAbstractType)(superType) && ((0, _definition.isInterfaceType)(maybeSubType) || (0, _definition.isObjectType)(maybeSubType)) && schema.isSubType(superType, maybeSubType);
    }
    function doTypesOverlap(schema, typeA, typeB) {
      if (typeA === typeB) {
        return true;
      }
      if ((0, _definition.isAbstractType)(typeA)) {
        if ((0, _definition.isAbstractType)(typeB)) {
          return schema.getPossibleTypes(typeA).some((type) => schema.isSubType(typeB, type));
        }
        return schema.isSubType(typeA, typeB);
      }
      if ((0, _definition.isAbstractType)(typeB)) {
        return schema.isSubType(typeB, typeA);
      }
      return false;
    }
  }
});

// ../../node_modules/graphql/type/scalars.js
var require_scalars = __commonJS({
  "../../node_modules/graphql/type/scalars.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GraphQLString = exports.GraphQLInt = exports.GraphQLID = exports.GraphQLFloat = exports.GraphQLBoolean = exports.GRAPHQL_MIN_INT = exports.GRAPHQL_MAX_INT = void 0;
    exports.isSpecifiedScalarType = isSpecifiedScalarType;
    exports.specifiedScalarTypes = void 0;
    var _inspect = require_inspect();
    var _isObjectLike = require_isObjectLike();
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _definition = require_definition();
    var GRAPHQL_MAX_INT = 2147483647;
    exports.GRAPHQL_MAX_INT = GRAPHQL_MAX_INT;
    var GRAPHQL_MIN_INT = -2147483648;
    exports.GRAPHQL_MIN_INT = GRAPHQL_MIN_INT;
    var GraphQLInt = new _definition.GraphQLScalarType({
      name: "Int",
      description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
      serialize(outputValue) {
        const coercedValue = serializeObject(outputValue);
        if (typeof coercedValue === "boolean") {
          return coercedValue ? 1 : 0;
        }
        let num = coercedValue;
        if (typeof coercedValue === "string" && coercedValue !== "") {
          num = Number(coercedValue);
        }
        if (typeof num !== "number" || !Number.isInteger(num)) {
          throw new _GraphQLError.GraphQLError(`Int cannot represent non-integer value: ${(0, _inspect.inspect)(coercedValue)}`);
        }
        if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
          throw new _GraphQLError.GraphQLError("Int cannot represent non 32-bit signed integer value: " + (0, _inspect.inspect)(coercedValue));
        }
        return num;
      },
      parseValue(inputValue) {
        if (typeof inputValue !== "number" || !Number.isInteger(inputValue)) {
          throw new _GraphQLError.GraphQLError(`Int cannot represent non-integer value: ${(0, _inspect.inspect)(inputValue)}`);
        }
        if (inputValue > GRAPHQL_MAX_INT || inputValue < GRAPHQL_MIN_INT) {
          throw new _GraphQLError.GraphQLError(`Int cannot represent non 32-bit signed integer value: ${inputValue}`);
        }
        return inputValue;
      },
      parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.INT) {
          throw new _GraphQLError.GraphQLError(`Int cannot represent non-integer value: ${(0, _printer.print)(valueNode)}`, {
            nodes: valueNode
          });
        }
        const num = parseInt(valueNode.value, 10);
        if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
          throw new _GraphQLError.GraphQLError(`Int cannot represent non 32-bit signed integer value: ${valueNode.value}`, {
            nodes: valueNode
          });
        }
        return num;
      }
    });
    exports.GraphQLInt = GraphQLInt;
    var GraphQLFloat = new _definition.GraphQLScalarType({
      name: "Float",
      description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
      serialize(outputValue) {
        const coercedValue = serializeObject(outputValue);
        if (typeof coercedValue === "boolean") {
          return coercedValue ? 1 : 0;
        }
        let num = coercedValue;
        if (typeof coercedValue === "string" && coercedValue !== "") {
          num = Number(coercedValue);
        }
        if (typeof num !== "number" || !Number.isFinite(num)) {
          throw new _GraphQLError.GraphQLError(`Float cannot represent non numeric value: ${(0, _inspect.inspect)(coercedValue)}`);
        }
        return num;
      },
      parseValue(inputValue) {
        if (typeof inputValue !== "number" || !Number.isFinite(inputValue)) {
          throw new _GraphQLError.GraphQLError(`Float cannot represent non numeric value: ${(0, _inspect.inspect)(inputValue)}`);
        }
        return inputValue;
      },
      parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.FLOAT && valueNode.kind !== _kinds.Kind.INT) {
          throw new _GraphQLError.GraphQLError(`Float cannot represent non numeric value: ${(0, _printer.print)(valueNode)}`, valueNode);
        }
        return parseFloat(valueNode.value);
      }
    });
    exports.GraphQLFloat = GraphQLFloat;
    var GraphQLString = new _definition.GraphQLScalarType({
      name: "String",
      description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
      serialize(outputValue) {
        const coercedValue = serializeObject(outputValue);
        if (typeof coercedValue === "string") {
          return coercedValue;
        }
        if (typeof coercedValue === "boolean") {
          return coercedValue ? "true" : "false";
        }
        if (typeof coercedValue === "number" && Number.isFinite(coercedValue)) {
          return coercedValue.toString();
        }
        throw new _GraphQLError.GraphQLError(`String cannot represent value: ${(0, _inspect.inspect)(outputValue)}`);
      },
      parseValue(inputValue) {
        if (typeof inputValue !== "string") {
          throw new _GraphQLError.GraphQLError(`String cannot represent a non string value: ${(0, _inspect.inspect)(inputValue)}`);
        }
        return inputValue;
      },
      parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.STRING) {
          throw new _GraphQLError.GraphQLError(`String cannot represent a non string value: ${(0, _printer.print)(valueNode)}`, {
            nodes: valueNode
          });
        }
        return valueNode.value;
      }
    });
    exports.GraphQLString = GraphQLString;
    var GraphQLBoolean = new _definition.GraphQLScalarType({
      name: "Boolean",
      description: "The `Boolean` scalar type represents `true` or `false`.",
      serialize(outputValue) {
        const coercedValue = serializeObject(outputValue);
        if (typeof coercedValue === "boolean") {
          return coercedValue;
        }
        if (Number.isFinite(coercedValue)) {
          return coercedValue !== 0;
        }
        throw new _GraphQLError.GraphQLError(`Boolean cannot represent a non boolean value: ${(0, _inspect.inspect)(coercedValue)}`);
      },
      parseValue(inputValue) {
        if (typeof inputValue !== "boolean") {
          throw new _GraphQLError.GraphQLError(`Boolean cannot represent a non boolean value: ${(0, _inspect.inspect)(inputValue)}`);
        }
        return inputValue;
      },
      parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.BOOLEAN) {
          throw new _GraphQLError.GraphQLError(`Boolean cannot represent a non boolean value: ${(0, _printer.print)(valueNode)}`, {
            nodes: valueNode
          });
        }
        return valueNode.value;
      }
    });
    exports.GraphQLBoolean = GraphQLBoolean;
    var GraphQLID = new _definition.GraphQLScalarType({
      name: "ID",
      description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
      serialize(outputValue) {
        const coercedValue = serializeObject(outputValue);
        if (typeof coercedValue === "string") {
          return coercedValue;
        }
        if (Number.isInteger(coercedValue)) {
          return String(coercedValue);
        }
        throw new _GraphQLError.GraphQLError(`ID cannot represent value: ${(0, _inspect.inspect)(outputValue)}`);
      },
      parseValue(inputValue) {
        if (typeof inputValue === "string") {
          return inputValue;
        }
        if (typeof inputValue === "number" && Number.isInteger(inputValue)) {
          return inputValue.toString();
        }
        throw new _GraphQLError.GraphQLError(`ID cannot represent value: ${(0, _inspect.inspect)(inputValue)}`);
      },
      parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.STRING && valueNode.kind !== _kinds.Kind.INT) {
          throw new _GraphQLError.GraphQLError("ID cannot represent a non-string and non-integer value: " + (0, _printer.print)(valueNode), {
            nodes: valueNode
          });
        }
        return valueNode.value;
      }
    });
    exports.GraphQLID = GraphQLID;
    var specifiedScalarTypes = Object.freeze([
      GraphQLString,
      GraphQLInt,
      GraphQLFloat,
      GraphQLBoolean,
      GraphQLID
    ]);
    exports.specifiedScalarTypes = specifiedScalarTypes;
    function isSpecifiedScalarType(type) {
      return specifiedScalarTypes.some(({ name }) => type.name === name);
    }
    function serializeObject(outputValue) {
      if ((0, _isObjectLike.isObjectLike)(outputValue)) {
        if (typeof outputValue.valueOf === "function") {
          const valueOfResult = outputValue.valueOf();
          if (!(0, _isObjectLike.isObjectLike)(valueOfResult)) {
            return valueOfResult;
          }
        }
        if (typeof outputValue.toJSON === "function") {
          return outputValue.toJSON();
        }
      }
      return outputValue;
    }
  }
});

// ../../node_modules/graphql/type/directives.js
var require_directives = __commonJS({
  "../../node_modules/graphql/type/directives.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GraphQLSpecifiedByDirective = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = void 0;
    exports.assertDirective = assertDirective;
    exports.isDirective = isDirective;
    exports.isSpecifiedDirective = isSpecifiedDirective;
    exports.specifiedDirectives = void 0;
    var _devAssert = require_devAssert();
    var _inspect = require_inspect();
    var _instanceOf = require_instanceOf();
    var _isObjectLike = require_isObjectLike();
    var _toObjMap = require_toObjMap();
    var _directiveLocation = require_directiveLocation();
    var _assertName = require_assertName();
    var _definition = require_definition();
    var _scalars = require_scalars();
    function isDirective(directive) {
      return (0, _instanceOf.instanceOf)(directive, GraphQLDirective);
    }
    function assertDirective(directive) {
      if (!isDirective(directive)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(directive)} to be a GraphQL directive.`);
      }
      return directive;
    }
    var GraphQLDirective = class {
      constructor(config) {
        var _config$isRepeatable, _config$args;
        this.name = (0, _assertName.assertName)(config.name);
        this.description = config.description;
        this.locations = config.locations;
        this.isRepeatable = (_config$isRepeatable = config.isRepeatable) !== null && _config$isRepeatable !== void 0 ? _config$isRepeatable : false;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        Array.isArray(config.locations) || (0, _devAssert.devAssert)(false, `@${config.name} locations must be an Array.`);
        const args = (_config$args = config.args) !== null && _config$args !== void 0 ? _config$args : {};
        (0, _isObjectLike.isObjectLike)(args) && !Array.isArray(args) || (0, _devAssert.devAssert)(false, `@${config.name} args must be an object with argument names as keys.`);
        this.args = (0, _definition.defineArguments)(args);
      }
      get [Symbol.toStringTag]() {
        return "GraphQLDirective";
      }
      toConfig() {
        return {
          name: this.name,
          description: this.description,
          locations: this.locations,
          args: (0, _definition.argsToArgsConfig)(this.args),
          isRepeatable: this.isRepeatable,
          extensions: this.extensions,
          astNode: this.astNode
        };
      }
      toString() {
        return "@" + this.name;
      }
      toJSON() {
        return this.toString();
      }
    };
    exports.GraphQLDirective = GraphQLDirective;
    var GraphQLIncludeDirective = new GraphQLDirective({
      name: "include",
      description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
      locations: [
        _directiveLocation.DirectiveLocation.FIELD,
        _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
        _directiveLocation.DirectiveLocation.INLINE_FRAGMENT
      ],
      args: {
        if: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
          description: "Included when true."
        }
      }
    });
    exports.GraphQLIncludeDirective = GraphQLIncludeDirective;
    var GraphQLSkipDirective = new GraphQLDirective({
      name: "skip",
      description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
      locations: [
        _directiveLocation.DirectiveLocation.FIELD,
        _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
        _directiveLocation.DirectiveLocation.INLINE_FRAGMENT
      ],
      args: {
        if: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
          description: "Skipped when true."
        }
      }
    });
    exports.GraphQLSkipDirective = GraphQLSkipDirective;
    var DEFAULT_DEPRECATION_REASON = "No longer supported";
    exports.DEFAULT_DEPRECATION_REASON = DEFAULT_DEPRECATION_REASON;
    var GraphQLDeprecatedDirective = new GraphQLDirective({
      name: "deprecated",
      description: "Marks an element of a GraphQL schema as no longer supported.",
      locations: [
        _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
        _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
        _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
        _directiveLocation.DirectiveLocation.ENUM_VALUE
      ],
      args: {
        reason: {
          type: _scalars.GraphQLString,
          description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
          defaultValue: DEFAULT_DEPRECATION_REASON
        }
      }
    });
    exports.GraphQLDeprecatedDirective = GraphQLDeprecatedDirective;
    var GraphQLSpecifiedByDirective = new GraphQLDirective({
      name: "specifiedBy",
      description: "Exposes a URL that specifies the behavior of this scalar.",
      locations: [_directiveLocation.DirectiveLocation.SCALAR],
      args: {
        url: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
          description: "The URL that specifies the behavior of this scalar."
        }
      }
    });
    exports.GraphQLSpecifiedByDirective = GraphQLSpecifiedByDirective;
    var specifiedDirectives = Object.freeze([
      GraphQLIncludeDirective,
      GraphQLSkipDirective,
      GraphQLDeprecatedDirective,
      GraphQLSpecifiedByDirective
    ]);
    exports.specifiedDirectives = specifiedDirectives;
    function isSpecifiedDirective(directive) {
      return specifiedDirectives.some(({ name }) => name === directive.name);
    }
  }
});

// ../../node_modules/graphql/jsutils/isIterableObject.js
var require_isIterableObject = __commonJS({
  "../../node_modules/graphql/jsutils/isIterableObject.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isIterableObject = isIterableObject;
    function isIterableObject(maybeIterable) {
      return typeof maybeIterable === "object" && typeof (maybeIterable === null || maybeIterable === void 0 ? void 0 : maybeIterable[Symbol.iterator]) === "function";
    }
  }
});

// ../../node_modules/graphql/utilities/astFromValue.js
var require_astFromValue = __commonJS({
  "../../node_modules/graphql/utilities/astFromValue.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.astFromValue = astFromValue;
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _isIterableObject = require_isIterableObject();
    var _isObjectLike = require_isObjectLike();
    var _kinds = require_kinds();
    var _definition = require_definition();
    var _scalars = require_scalars();
    function astFromValue(value, type) {
      if ((0, _definition.isNonNullType)(type)) {
        const astValue = astFromValue(value, type.ofType);
        if ((astValue === null || astValue === void 0 ? void 0 : astValue.kind) === _kinds.Kind.NULL) {
          return null;
        }
        return astValue;
      }
      if (value === null) {
        return {
          kind: _kinds.Kind.NULL
        };
      }
      if (value === void 0) {
        return null;
      }
      if ((0, _definition.isListType)(type)) {
        const itemType = type.ofType;
        if ((0, _isIterableObject.isIterableObject)(value)) {
          const valuesNodes = [];
          for (const item of value) {
            const itemNode = astFromValue(item, itemType);
            if (itemNode != null) {
              valuesNodes.push(itemNode);
            }
          }
          return {
            kind: _kinds.Kind.LIST,
            values: valuesNodes
          };
        }
        return astFromValue(value, itemType);
      }
      if ((0, _definition.isInputObjectType)(type)) {
        if (!(0, _isObjectLike.isObjectLike)(value)) {
          return null;
        }
        const fieldNodes = [];
        for (const field of Object.values(type.getFields())) {
          const fieldValue = astFromValue(value[field.name], field.type);
          if (fieldValue) {
            fieldNodes.push({
              kind: _kinds.Kind.OBJECT_FIELD,
              name: {
                kind: _kinds.Kind.NAME,
                value: field.name
              },
              value: fieldValue
            });
          }
        }
        return {
          kind: _kinds.Kind.OBJECT,
          fields: fieldNodes
        };
      }
      if ((0, _definition.isLeafType)(type)) {
        const serialized = type.serialize(value);
        if (serialized == null) {
          return null;
        }
        if (typeof serialized === "boolean") {
          return {
            kind: _kinds.Kind.BOOLEAN,
            value: serialized
          };
        }
        if (typeof serialized === "number" && Number.isFinite(serialized)) {
          const stringNum = String(serialized);
          return integerStringRegExp.test(stringNum) ? {
            kind: _kinds.Kind.INT,
            value: stringNum
          } : {
            kind: _kinds.Kind.FLOAT,
            value: stringNum
          };
        }
        if (typeof serialized === "string") {
          if ((0, _definition.isEnumType)(type)) {
            return {
              kind: _kinds.Kind.ENUM,
              value: serialized
            };
          }
          if (type === _scalars.GraphQLID && integerStringRegExp.test(serialized)) {
            return {
              kind: _kinds.Kind.INT,
              value: serialized
            };
          }
          return {
            kind: _kinds.Kind.STRING,
            value: serialized
          };
        }
        throw new TypeError(`Cannot convert value to AST: ${(0, _inspect.inspect)(serialized)}.`);
      }
      (0, _invariant.invariant)(false, "Unexpected input type: " + (0, _inspect.inspect)(type));
    }
    var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;
  }
});

// ../../node_modules/graphql/type/introspection.js
var require_introspection = __commonJS({
  "../../node_modules/graphql/type/introspection.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.introspectionTypes = exports.__TypeKind = exports.__Type = exports.__Schema = exports.__InputValue = exports.__Field = exports.__EnumValue = exports.__DirectiveLocation = exports.__Directive = exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.TypeKind = exports.SchemaMetaFieldDef = void 0;
    exports.isIntrospectionType = isIntrospectionType;
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _directiveLocation = require_directiveLocation();
    var _printer = require_printer();
    var _astFromValue = require_astFromValue();
    var _definition = require_definition();
    var _scalars = require_scalars();
    var __Schema = new _definition.GraphQLObjectType({
      name: "__Schema",
      description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
      fields: () => ({
        description: {
          type: _scalars.GraphQLString,
          resolve: (schema) => schema.description
        },
        types: {
          description: "A list of all types supported by this server.",
          type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
          resolve(schema) {
            return Object.values(schema.getTypeMap());
          }
        },
        queryType: {
          description: "The type that query operations will be rooted at.",
          type: new _definition.GraphQLNonNull(__Type),
          resolve: (schema) => schema.getQueryType()
        },
        mutationType: {
          description: "If this server supports mutation, the type that mutation operations will be rooted at.",
          type: __Type,
          resolve: (schema) => schema.getMutationType()
        },
        subscriptionType: {
          description: "If this server support subscription, the type that subscription operations will be rooted at.",
          type: __Type,
          resolve: (schema) => schema.getSubscriptionType()
        },
        directives: {
          description: "A list of all directives supported by this server.",
          type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
          resolve: (schema) => schema.getDirectives()
        }
      })
    });
    exports.__Schema = __Schema;
    var __Directive = new _definition.GraphQLObjectType({
      name: "__Directive",
      description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
      fields: () => ({
        name: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
          resolve: (directive) => directive.name
        },
        description: {
          type: _scalars.GraphQLString,
          resolve: (directive) => directive.description
        },
        isRepeatable: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
          resolve: (directive) => directive.isRepeatable
        },
        locations: {
          type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__DirectiveLocation))),
          resolve: (directive) => directive.locations
        },
        args: {
          type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
          args: {
            includeDeprecated: {
              type: _scalars.GraphQLBoolean,
              defaultValue: false
            }
          },
          resolve(field, { includeDeprecated }) {
            return includeDeprecated ? field.args : field.args.filter((arg) => arg.deprecationReason == null);
          }
        }
      })
    });
    exports.__Directive = __Directive;
    var __DirectiveLocation = new _definition.GraphQLEnumType({
      name: "__DirectiveLocation",
      description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
      values: {
        QUERY: {
          value: _directiveLocation.DirectiveLocation.QUERY,
          description: "Location adjacent to a query operation."
        },
        MUTATION: {
          value: _directiveLocation.DirectiveLocation.MUTATION,
          description: "Location adjacent to a mutation operation."
        },
        SUBSCRIPTION: {
          value: _directiveLocation.DirectiveLocation.SUBSCRIPTION,
          description: "Location adjacent to a subscription operation."
        },
        FIELD: {
          value: _directiveLocation.DirectiveLocation.FIELD,
          description: "Location adjacent to a field."
        },
        FRAGMENT_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION,
          description: "Location adjacent to a fragment definition."
        },
        FRAGMENT_SPREAD: {
          value: _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
          description: "Location adjacent to a fragment spread."
        },
        INLINE_FRAGMENT: {
          value: _directiveLocation.DirectiveLocation.INLINE_FRAGMENT,
          description: "Location adjacent to an inline fragment."
        },
        VARIABLE_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION,
          description: "Location adjacent to a variable definition."
        },
        SCHEMA: {
          value: _directiveLocation.DirectiveLocation.SCHEMA,
          description: "Location adjacent to a schema definition."
        },
        SCALAR: {
          value: _directiveLocation.DirectiveLocation.SCALAR,
          description: "Location adjacent to a scalar definition."
        },
        OBJECT: {
          value: _directiveLocation.DirectiveLocation.OBJECT,
          description: "Location adjacent to an object type definition."
        },
        FIELD_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
          description: "Location adjacent to a field definition."
        },
        ARGUMENT_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
          description: "Location adjacent to an argument definition."
        },
        INTERFACE: {
          value: _directiveLocation.DirectiveLocation.INTERFACE,
          description: "Location adjacent to an interface definition."
        },
        UNION: {
          value: _directiveLocation.DirectiveLocation.UNION,
          description: "Location adjacent to a union definition."
        },
        ENUM: {
          value: _directiveLocation.DirectiveLocation.ENUM,
          description: "Location adjacent to an enum definition."
        },
        ENUM_VALUE: {
          value: _directiveLocation.DirectiveLocation.ENUM_VALUE,
          description: "Location adjacent to an enum value definition."
        },
        INPUT_OBJECT: {
          value: _directiveLocation.DirectiveLocation.INPUT_OBJECT,
          description: "Location adjacent to an input object type definition."
        },
        INPUT_FIELD_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
          description: "Location adjacent to an input object field definition."
        }
      }
    });
    exports.__DirectiveLocation = __DirectiveLocation;
    var __Type = new _definition.GraphQLObjectType({
      name: "__Type",
      description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
      fields: () => ({
        kind: {
          type: new _definition.GraphQLNonNull(__TypeKind),
          resolve(type) {
            if ((0, _definition.isScalarType)(type)) {
              return TypeKind.SCALAR;
            }
            if ((0, _definition.isObjectType)(type)) {
              return TypeKind.OBJECT;
            }
            if ((0, _definition.isInterfaceType)(type)) {
              return TypeKind.INTERFACE;
            }
            if ((0, _definition.isUnionType)(type)) {
              return TypeKind.UNION;
            }
            if ((0, _definition.isEnumType)(type)) {
              return TypeKind.ENUM;
            }
            if ((0, _definition.isInputObjectType)(type)) {
              return TypeKind.INPUT_OBJECT;
            }
            if ((0, _definition.isListType)(type)) {
              return TypeKind.LIST;
            }
            if ((0, _definition.isNonNullType)(type)) {
              return TypeKind.NON_NULL;
            }
            (0, _invariant.invariant)(false, `Unexpected type: "${(0, _inspect.inspect)(type)}".`);
          }
        },
        name: {
          type: _scalars.GraphQLString,
          resolve: (type) => "name" in type ? type.name : void 0
        },
        description: {
          type: _scalars.GraphQLString,
          resolve: (type) => "description" in type ? type.description : void 0
        },
        specifiedByURL: {
          type: _scalars.GraphQLString,
          resolve: (obj) => "specifiedByURL" in obj ? obj.specifiedByURL : void 0
        },
        fields: {
          type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
          args: {
            includeDeprecated: {
              type: _scalars.GraphQLBoolean,
              defaultValue: false
            }
          },
          resolve(type, { includeDeprecated }) {
            if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
              const fields = Object.values(type.getFields());
              return includeDeprecated ? fields : fields.filter((field) => field.deprecationReason == null);
            }
          }
        },
        interfaces: {
          type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
          resolve(type) {
            if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
              return type.getInterfaces();
            }
          }
        },
        possibleTypes: {
          type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
          resolve(type, _args, _context, { schema }) {
            if ((0, _definition.isAbstractType)(type)) {
              return schema.getPossibleTypes(type);
            }
          }
        },
        enumValues: {
          type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
          args: {
            includeDeprecated: {
              type: _scalars.GraphQLBoolean,
              defaultValue: false
            }
          },
          resolve(type, { includeDeprecated }) {
            if ((0, _definition.isEnumType)(type)) {
              const values = type.getValues();
              return includeDeprecated ? values : values.filter((field) => field.deprecationReason == null);
            }
          }
        },
        inputFields: {
          type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
          args: {
            includeDeprecated: {
              type: _scalars.GraphQLBoolean,
              defaultValue: false
            }
          },
          resolve(type, { includeDeprecated }) {
            if ((0, _definition.isInputObjectType)(type)) {
              const values = Object.values(type.getFields());
              return includeDeprecated ? values : values.filter((field) => field.deprecationReason == null);
            }
          }
        },
        ofType: {
          type: __Type,
          resolve: (type) => "ofType" in type ? type.ofType : void 0
        }
      })
    });
    exports.__Type = __Type;
    var __Field = new _definition.GraphQLObjectType({
      name: "__Field",
      description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
      fields: () => ({
        name: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
          resolve: (field) => field.name
        },
        description: {
          type: _scalars.GraphQLString,
          resolve: (field) => field.description
        },
        args: {
          type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
          args: {
            includeDeprecated: {
              type: _scalars.GraphQLBoolean,
              defaultValue: false
            }
          },
          resolve(field, { includeDeprecated }) {
            return includeDeprecated ? field.args : field.args.filter((arg) => arg.deprecationReason == null);
          }
        },
        type: {
          type: new _definition.GraphQLNonNull(__Type),
          resolve: (field) => field.type
        },
        isDeprecated: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
          resolve: (field) => field.deprecationReason != null
        },
        deprecationReason: {
          type: _scalars.GraphQLString,
          resolve: (field) => field.deprecationReason
        }
      })
    });
    exports.__Field = __Field;
    var __InputValue = new _definition.GraphQLObjectType({
      name: "__InputValue",
      description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
      fields: () => ({
        name: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
          resolve: (inputValue) => inputValue.name
        },
        description: {
          type: _scalars.GraphQLString,
          resolve: (inputValue) => inputValue.description
        },
        type: {
          type: new _definition.GraphQLNonNull(__Type),
          resolve: (inputValue) => inputValue.type
        },
        defaultValue: {
          type: _scalars.GraphQLString,
          description: "A GraphQL-formatted string representing the default value for this input value.",
          resolve(inputValue) {
            const { type, defaultValue } = inputValue;
            const valueAST = (0, _astFromValue.astFromValue)(defaultValue, type);
            return valueAST ? (0, _printer.print)(valueAST) : null;
          }
        },
        isDeprecated: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
          resolve: (field) => field.deprecationReason != null
        },
        deprecationReason: {
          type: _scalars.GraphQLString,
          resolve: (obj) => obj.deprecationReason
        }
      })
    });
    exports.__InputValue = __InputValue;
    var __EnumValue = new _definition.GraphQLObjectType({
      name: "__EnumValue",
      description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
      fields: () => ({
        name: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
          resolve: (enumValue) => enumValue.name
        },
        description: {
          type: _scalars.GraphQLString,
          resolve: (enumValue) => enumValue.description
        },
        isDeprecated: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
          resolve: (enumValue) => enumValue.deprecationReason != null
        },
        deprecationReason: {
          type: _scalars.GraphQLString,
          resolve: (enumValue) => enumValue.deprecationReason
        }
      })
    });
    exports.__EnumValue = __EnumValue;
    var TypeKind;
    exports.TypeKind = TypeKind;
    (function(TypeKind2) {
      TypeKind2["SCALAR"] = "SCALAR";
      TypeKind2["OBJECT"] = "OBJECT";
      TypeKind2["INTERFACE"] = "INTERFACE";
      TypeKind2["UNION"] = "UNION";
      TypeKind2["ENUM"] = "ENUM";
      TypeKind2["INPUT_OBJECT"] = "INPUT_OBJECT";
      TypeKind2["LIST"] = "LIST";
      TypeKind2["NON_NULL"] = "NON_NULL";
    })(TypeKind || (exports.TypeKind = TypeKind = {}));
    var __TypeKind = new _definition.GraphQLEnumType({
      name: "__TypeKind",
      description: "An enum describing what kind of type a given `__Type` is.",
      values: {
        SCALAR: {
          value: TypeKind.SCALAR,
          description: "Indicates this type is a scalar."
        },
        OBJECT: {
          value: TypeKind.OBJECT,
          description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
        },
        INTERFACE: {
          value: TypeKind.INTERFACE,
          description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
        },
        UNION: {
          value: TypeKind.UNION,
          description: "Indicates this type is a union. `possibleTypes` is a valid field."
        },
        ENUM: {
          value: TypeKind.ENUM,
          description: "Indicates this type is an enum. `enumValues` is a valid field."
        },
        INPUT_OBJECT: {
          value: TypeKind.INPUT_OBJECT,
          description: "Indicates this type is an input object. `inputFields` is a valid field."
        },
        LIST: {
          value: TypeKind.LIST,
          description: "Indicates this type is a list. `ofType` is a valid field."
        },
        NON_NULL: {
          value: TypeKind.NON_NULL,
          description: "Indicates this type is a non-null. `ofType` is a valid field."
        }
      }
    });
    exports.__TypeKind = __TypeKind;
    var SchemaMetaFieldDef = {
      name: "__schema",
      type: new _definition.GraphQLNonNull(__Schema),
      description: "Access the current type schema of this server.",
      args: [],
      resolve: (_source, _args, _context, { schema }) => schema,
      deprecationReason: void 0,
      extensions: /* @__PURE__ */ Object.create(null),
      astNode: void 0
    };
    exports.SchemaMetaFieldDef = SchemaMetaFieldDef;
    var TypeMetaFieldDef = {
      name: "__type",
      type: __Type,
      description: "Request the type information of a single type.",
      args: [
        {
          name: "name",
          description: void 0,
          type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
          defaultValue: void 0,
          deprecationReason: void 0,
          extensions: /* @__PURE__ */ Object.create(null),
          astNode: void 0
        }
      ],
      resolve: (_source, { name }, _context, { schema }) => schema.getType(name),
      deprecationReason: void 0,
      extensions: /* @__PURE__ */ Object.create(null),
      astNode: void 0
    };
    exports.TypeMetaFieldDef = TypeMetaFieldDef;
    var TypeNameMetaFieldDef = {
      name: "__typename",
      type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
      description: "The name of the current Object type at runtime.",
      args: [],
      resolve: (_source, _args, _context, { parentType }) => parentType.name,
      deprecationReason: void 0,
      extensions: /* @__PURE__ */ Object.create(null),
      astNode: void 0
    };
    exports.TypeNameMetaFieldDef = TypeNameMetaFieldDef;
    var introspectionTypes = Object.freeze([
      __Schema,
      __Directive,
      __DirectiveLocation,
      __Type,
      __Field,
      __InputValue,
      __EnumValue,
      __TypeKind
    ]);
    exports.introspectionTypes = introspectionTypes;
    function isIntrospectionType(type) {
      return introspectionTypes.some(({ name }) => type.name === name);
    }
  }
});

// ../../node_modules/graphql/type/schema.js
var require_schema = __commonJS({
  "../../node_modules/graphql/type/schema.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GraphQLSchema = void 0;
    exports.assertSchema = assertSchema;
    exports.isSchema = isSchema;
    var _devAssert = require_devAssert();
    var _inspect = require_inspect();
    var _instanceOf = require_instanceOf();
    var _isObjectLike = require_isObjectLike();
    var _toObjMap = require_toObjMap();
    var _ast = require_ast();
    var _definition = require_definition();
    var _directives = require_directives();
    var _introspection = require_introspection();
    function isSchema(schema) {
      return (0, _instanceOf.instanceOf)(schema, GraphQLSchema);
    }
    function assertSchema(schema) {
      if (!isSchema(schema)) {
        throw new Error(`Expected ${(0, _inspect.inspect)(schema)} to be a GraphQL schema.`);
      }
      return schema;
    }
    var GraphQLSchema = class {
      constructor(config) {
        var _config$extensionASTN, _config$directives;
        this.__validationErrors = config.assumeValid === true ? [] : void 0;
        (0, _isObjectLike.isObjectLike)(config) || (0, _devAssert.devAssert)(false, "Must provide configuration object.");
        !config.types || Array.isArray(config.types) || (0, _devAssert.devAssert)(false, `"types" must be Array if provided but got: ${(0, _inspect.inspect)(config.types)}.`);
        !config.directives || Array.isArray(config.directives) || (0, _devAssert.devAssert)(false, `"directives" must be Array if provided but got: ${(0, _inspect.inspect)(config.directives)}.`);
        this.description = config.description;
        this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
        this._queryType = config.query;
        this._mutationType = config.mutation;
        this._subscriptionType = config.subscription;
        this._directives = (_config$directives = config.directives) !== null && _config$directives !== void 0 ? _config$directives : _directives.specifiedDirectives;
        const allReferencedTypes = new Set(config.types);
        if (config.types != null) {
          for (const type of config.types) {
            allReferencedTypes.delete(type);
            collectReferencedTypes(type, allReferencedTypes);
          }
        }
        if (this._queryType != null) {
          collectReferencedTypes(this._queryType, allReferencedTypes);
        }
        if (this._mutationType != null) {
          collectReferencedTypes(this._mutationType, allReferencedTypes);
        }
        if (this._subscriptionType != null) {
          collectReferencedTypes(this._subscriptionType, allReferencedTypes);
        }
        for (const directive of this._directives) {
          if ((0, _directives.isDirective)(directive)) {
            for (const arg of directive.args) {
              collectReferencedTypes(arg.type, allReferencedTypes);
            }
          }
        }
        collectReferencedTypes(_introspection.__Schema, allReferencedTypes);
        this._typeMap = /* @__PURE__ */ Object.create(null);
        this._subTypeMap = /* @__PURE__ */ Object.create(null);
        this._implementationsMap = /* @__PURE__ */ Object.create(null);
        for (const namedType of allReferencedTypes) {
          if (namedType == null) {
            continue;
          }
          const typeName = namedType.name;
          typeName || (0, _devAssert.devAssert)(false, "One of the provided types for building the Schema is missing a name.");
          if (this._typeMap[typeName] !== void 0) {
            throw new Error(`Schema must contain uniquely named types but contains multiple types named "${typeName}".`);
          }
          this._typeMap[typeName] = namedType;
          if ((0, _definition.isInterfaceType)(namedType)) {
            for (const iface of namedType.getInterfaces()) {
              if ((0, _definition.isInterfaceType)(iface)) {
                let implementations = this._implementationsMap[iface.name];
                if (implementations === void 0) {
                  implementations = this._implementationsMap[iface.name] = {
                    objects: [],
                    interfaces: []
                  };
                }
                implementations.interfaces.push(namedType);
              }
            }
          } else if ((0, _definition.isObjectType)(namedType)) {
            for (const iface of namedType.getInterfaces()) {
              if ((0, _definition.isInterfaceType)(iface)) {
                let implementations = this._implementationsMap[iface.name];
                if (implementations === void 0) {
                  implementations = this._implementationsMap[iface.name] = {
                    objects: [],
                    interfaces: []
                  };
                }
                implementations.objects.push(namedType);
              }
            }
          }
        }
      }
      get [Symbol.toStringTag]() {
        return "GraphQLSchema";
      }
      getQueryType() {
        return this._queryType;
      }
      getMutationType() {
        return this._mutationType;
      }
      getSubscriptionType() {
        return this._subscriptionType;
      }
      getRootType(operation) {
        switch (operation) {
          case _ast.OperationTypeNode.QUERY:
            return this.getQueryType();
          case _ast.OperationTypeNode.MUTATION:
            return this.getMutationType();
          case _ast.OperationTypeNode.SUBSCRIPTION:
            return this.getSubscriptionType();
        }
      }
      getTypeMap() {
        return this._typeMap;
      }
      getType(name) {
        return this.getTypeMap()[name];
      }
      getPossibleTypes(abstractType) {
        return (0, _definition.isUnionType)(abstractType) ? abstractType.getTypes() : this.getImplementations(abstractType).objects;
      }
      getImplementations(interfaceType) {
        const implementations = this._implementationsMap[interfaceType.name];
        return implementations !== null && implementations !== void 0 ? implementations : {
          objects: [],
          interfaces: []
        };
      }
      isSubType(abstractType, maybeSubType) {
        let map = this._subTypeMap[abstractType.name];
        if (map === void 0) {
          map = /* @__PURE__ */ Object.create(null);
          if ((0, _definition.isUnionType)(abstractType)) {
            for (const type of abstractType.getTypes()) {
              map[type.name] = true;
            }
          } else {
            const implementations = this.getImplementations(abstractType);
            for (const type of implementations.objects) {
              map[type.name] = true;
            }
            for (const type of implementations.interfaces) {
              map[type.name] = true;
            }
          }
          this._subTypeMap[abstractType.name] = map;
        }
        return map[maybeSubType.name] !== void 0;
      }
      getDirectives() {
        return this._directives;
      }
      getDirective(name) {
        return this.getDirectives().find((directive) => directive.name === name);
      }
      toConfig() {
        return {
          description: this.description,
          query: this.getQueryType(),
          mutation: this.getMutationType(),
          subscription: this.getSubscriptionType(),
          types: Object.values(this.getTypeMap()),
          directives: this.getDirectives(),
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: this.extensionASTNodes,
          assumeValid: this.__validationErrors !== void 0
        };
      }
    };
    exports.GraphQLSchema = GraphQLSchema;
    function collectReferencedTypes(type, typeSet) {
      const namedType = (0, _definition.getNamedType)(type);
      if (!typeSet.has(namedType)) {
        typeSet.add(namedType);
        if ((0, _definition.isUnionType)(namedType)) {
          for (const memberType of namedType.getTypes()) {
            collectReferencedTypes(memberType, typeSet);
          }
        } else if ((0, _definition.isObjectType)(namedType) || (0, _definition.isInterfaceType)(namedType)) {
          for (const interfaceType of namedType.getInterfaces()) {
            collectReferencedTypes(interfaceType, typeSet);
          }
          for (const field of Object.values(namedType.getFields())) {
            collectReferencedTypes(field.type, typeSet);
            for (const arg of field.args) {
              collectReferencedTypes(arg.type, typeSet);
            }
          }
        } else if ((0, _definition.isInputObjectType)(namedType)) {
          for (const field of Object.values(namedType.getFields())) {
            collectReferencedTypes(field.type, typeSet);
          }
        }
      }
      return typeSet;
    }
  }
});

// ../../node_modules/graphql/type/validate.js
var require_validate = __commonJS({
  "../../node_modules/graphql/type/validate.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.assertValidSchema = assertValidSchema;
    exports.validateSchema = validateSchema;
    var _inspect = require_inspect();
    var _GraphQLError = require_GraphQLError();
    var _ast = require_ast();
    var _typeComparators = require_typeComparators();
    var _definition = require_definition();
    var _directives = require_directives();
    var _introspection = require_introspection();
    var _schema = require_schema();
    function validateSchema(schema) {
      (0, _schema.assertSchema)(schema);
      if (schema.__validationErrors) {
        return schema.__validationErrors;
      }
      const context2 = new SchemaValidationContext(schema);
      validateRootTypes(context2);
      validateDirectives(context2);
      validateTypes(context2);
      const errors = context2.getErrors();
      schema.__validationErrors = errors;
      return errors;
    }
    function assertValidSchema(schema) {
      const errors = validateSchema(schema);
      if (errors.length !== 0) {
        throw new Error(errors.map((error) => error.message).join("\n\n"));
      }
    }
    var SchemaValidationContext = class {
      constructor(schema) {
        this._errors = [];
        this.schema = schema;
      }
      reportError(message, nodes) {
        const _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;
        this._errors.push(new _GraphQLError.GraphQLError(message, {
          nodes: _nodes
        }));
      }
      getErrors() {
        return this._errors;
      }
    };
    function validateRootTypes(context2) {
      const schema = context2.schema;
      const queryType = schema.getQueryType();
      if (!queryType) {
        context2.reportError("Query root type must be provided.", schema.astNode);
      } else if (!(0, _definition.isObjectType)(queryType)) {
        var _getOperationTypeNode;
        context2.reportError(`Query root type must be Object type, it cannot be ${(0, _inspect.inspect)(queryType)}.`, (_getOperationTypeNode = getOperationTypeNode(schema, _ast.OperationTypeNode.QUERY)) !== null && _getOperationTypeNode !== void 0 ? _getOperationTypeNode : queryType.astNode);
      }
      const mutationType = schema.getMutationType();
      if (mutationType && !(0, _definition.isObjectType)(mutationType)) {
        var _getOperationTypeNode2;
        context2.reportError(`Mutation root type must be Object type if provided, it cannot be ${(0, _inspect.inspect)(mutationType)}.`, (_getOperationTypeNode2 = getOperationTypeNode(schema, _ast.OperationTypeNode.MUTATION)) !== null && _getOperationTypeNode2 !== void 0 ? _getOperationTypeNode2 : mutationType.astNode);
      }
      const subscriptionType = schema.getSubscriptionType();
      if (subscriptionType && !(0, _definition.isObjectType)(subscriptionType)) {
        var _getOperationTypeNode3;
        context2.reportError(`Subscription root type must be Object type if provided, it cannot be ${(0, _inspect.inspect)(subscriptionType)}.`, (_getOperationTypeNode3 = getOperationTypeNode(schema, _ast.OperationTypeNode.SUBSCRIPTION)) !== null && _getOperationTypeNode3 !== void 0 ? _getOperationTypeNode3 : subscriptionType.astNode);
      }
    }
    function getOperationTypeNode(schema, operation) {
      var _flatMap$find;
      return (_flatMap$find = [schema.astNode, ...schema.extensionASTNodes].flatMap((schemaNode) => {
        var _schemaNode$operation;
        return (_schemaNode$operation = schemaNode === null || schemaNode === void 0 ? void 0 : schemaNode.operationTypes) !== null && _schemaNode$operation !== void 0 ? _schemaNode$operation : [];
      }).find((operationNode) => operationNode.operation === operation)) === null || _flatMap$find === void 0 ? void 0 : _flatMap$find.type;
    }
    function validateDirectives(context2) {
      for (const directive of context2.schema.getDirectives()) {
        if (!(0, _directives.isDirective)(directive)) {
          context2.reportError(`Expected directive but got: ${(0, _inspect.inspect)(directive)}.`, directive === null || directive === void 0 ? void 0 : directive.astNode);
          continue;
        }
        validateName(context2, directive);
        for (const arg of directive.args) {
          validateName(context2, arg);
          if (!(0, _definition.isInputType)(arg.type)) {
            context2.reportError(`The type of @${directive.name}(${arg.name}:) must be Input Type but got: ${(0, _inspect.inspect)(arg.type)}.`, arg.astNode);
          }
          if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
            var _arg$astNode;
            context2.reportError(`Required argument @${directive.name}(${arg.name}:) cannot be deprecated.`, [
              getDeprecatedDirectiveNode(arg.astNode),
              (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0 ? void 0 : _arg$astNode.type
            ]);
          }
        }
      }
    }
    function validateName(context2, node) {
      if (node.name.startsWith("__")) {
        context2.reportError(`Name "${node.name}" must not begin with "__", which is reserved by GraphQL introspection.`, node.astNode);
      }
    }
    function validateTypes(context2) {
      const validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context2);
      const typeMap = context2.schema.getTypeMap();
      for (const type of Object.values(typeMap)) {
        if (!(0, _definition.isNamedType)(type)) {
          context2.reportError(`Expected GraphQL named type but got: ${(0, _inspect.inspect)(type)}.`, type.astNode);
          continue;
        }
        if (!(0, _introspection.isIntrospectionType)(type)) {
          validateName(context2, type);
        }
        if ((0, _definition.isObjectType)(type)) {
          validateFields(context2, type);
          validateInterfaces(context2, type);
        } else if ((0, _definition.isInterfaceType)(type)) {
          validateFields(context2, type);
          validateInterfaces(context2, type);
        } else if ((0, _definition.isUnionType)(type)) {
          validateUnionMembers(context2, type);
        } else if ((0, _definition.isEnumType)(type)) {
          validateEnumValues(context2, type);
        } else if ((0, _definition.isInputObjectType)(type)) {
          validateInputFields(context2, type);
          validateInputObjectCircularRefs(type);
        }
      }
    }
    function validateFields(context2, type) {
      const fields = Object.values(type.getFields());
      if (fields.length === 0) {
        context2.reportError(`Type ${type.name} must define one or more fields.`, [
          type.astNode,
          ...type.extensionASTNodes
        ]);
      }
      for (const field of fields) {
        validateName(context2, field);
        if (!(0, _definition.isOutputType)(field.type)) {
          var _field$astNode;
          context2.reportError(`The type of ${type.name}.${field.name} must be Output Type but got: ${(0, _inspect.inspect)(field.type)}.`, (_field$astNode = field.astNode) === null || _field$astNode === void 0 ? void 0 : _field$astNode.type);
        }
        for (const arg of field.args) {
          const argName = arg.name;
          validateName(context2, arg);
          if (!(0, _definition.isInputType)(arg.type)) {
            var _arg$astNode2;
            context2.reportError(`The type of ${type.name}.${field.name}(${argName}:) must be Input Type but got: ${(0, _inspect.inspect)(arg.type)}.`, (_arg$astNode2 = arg.astNode) === null || _arg$astNode2 === void 0 ? void 0 : _arg$astNode2.type);
          }
          if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
            var _arg$astNode3;
            context2.reportError(`Required argument ${type.name}.${field.name}(${argName}:) cannot be deprecated.`, [
              getDeprecatedDirectiveNode(arg.astNode),
              (_arg$astNode3 = arg.astNode) === null || _arg$astNode3 === void 0 ? void 0 : _arg$astNode3.type
            ]);
          }
        }
      }
    }
    function validateInterfaces(context2, type) {
      const ifaceTypeNames = /* @__PURE__ */ Object.create(null);
      for (const iface of type.getInterfaces()) {
        if (!(0, _definition.isInterfaceType)(iface)) {
          context2.reportError(`Type ${(0, _inspect.inspect)(type)} must only implement Interface types, it cannot implement ${(0, _inspect.inspect)(iface)}.`, getAllImplementsInterfaceNodes(type, iface));
          continue;
        }
        if (type === iface) {
          context2.reportError(`Type ${type.name} cannot implement itself because it would create a circular reference.`, getAllImplementsInterfaceNodes(type, iface));
          continue;
        }
        if (ifaceTypeNames[iface.name]) {
          context2.reportError(`Type ${type.name} can only implement ${iface.name} once.`, getAllImplementsInterfaceNodes(type, iface));
          continue;
        }
        ifaceTypeNames[iface.name] = true;
        validateTypeImplementsAncestors(context2, type, iface);
        validateTypeImplementsInterface(context2, type, iface);
      }
    }
    function validateTypeImplementsInterface(context2, type, iface) {
      const typeFieldMap = type.getFields();
      for (const ifaceField of Object.values(iface.getFields())) {
        const fieldName = ifaceField.name;
        const typeField = typeFieldMap[fieldName];
        if (!typeField) {
          context2.reportError(`Interface field ${iface.name}.${fieldName} expected but ${type.name} does not provide it.`, [ifaceField.astNode, type.astNode, ...type.extensionASTNodes]);
          continue;
        }
        if (!(0, _typeComparators.isTypeSubTypeOf)(context2.schema, typeField.type, ifaceField.type)) {
          var _ifaceField$astNode, _typeField$astNode;
          context2.reportError(`Interface field ${iface.name}.${fieldName} expects type ${(0, _inspect.inspect)(ifaceField.type)} but ${type.name}.${fieldName} is type ${(0, _inspect.inspect)(typeField.type)}.`, [
            (_ifaceField$astNode = ifaceField.astNode) === null || _ifaceField$astNode === void 0 ? void 0 : _ifaceField$astNode.type,
            (_typeField$astNode = typeField.astNode) === null || _typeField$astNode === void 0 ? void 0 : _typeField$astNode.type
          ]);
        }
        for (const ifaceArg of ifaceField.args) {
          const argName = ifaceArg.name;
          const typeArg = typeField.args.find((arg) => arg.name === argName);
          if (!typeArg) {
            context2.reportError(`Interface field argument ${iface.name}.${fieldName}(${argName}:) expected but ${type.name}.${fieldName} does not provide it.`, [ifaceArg.astNode, typeField.astNode]);
            continue;
          }
          if (!(0, _typeComparators.isEqualType)(ifaceArg.type, typeArg.type)) {
            var _ifaceArg$astNode, _typeArg$astNode;
            context2.reportError(`Interface field argument ${iface.name}.${fieldName}(${argName}:) expects type ${(0, _inspect.inspect)(ifaceArg.type)} but ${type.name}.${fieldName}(${argName}:) is type ${(0, _inspect.inspect)(typeArg.type)}.`, [
              (_ifaceArg$astNode = ifaceArg.astNode) === null || _ifaceArg$astNode === void 0 ? void 0 : _ifaceArg$astNode.type,
              (_typeArg$astNode = typeArg.astNode) === null || _typeArg$astNode === void 0 ? void 0 : _typeArg$astNode.type
            ]);
          }
        }
        for (const typeArg of typeField.args) {
          const argName = typeArg.name;
          const ifaceArg = ifaceField.args.find((arg) => arg.name === argName);
          if (!ifaceArg && (0, _definition.isRequiredArgument)(typeArg)) {
            context2.reportError(`Object field ${type.name}.${fieldName} includes required argument ${argName} that is missing from the Interface field ${iface.name}.${fieldName}.`, [typeArg.astNode, ifaceField.astNode]);
          }
        }
      }
    }
    function validateTypeImplementsAncestors(context2, type, iface) {
      const ifaceInterfaces = type.getInterfaces();
      for (const transitive of iface.getInterfaces()) {
        if (!ifaceInterfaces.includes(transitive)) {
          context2.reportError(transitive === type ? `Type ${type.name} cannot implement ${iface.name} because it would create a circular reference.` : `Type ${type.name} must implement ${transitive.name} because it is implemented by ${iface.name}.`, [
            ...getAllImplementsInterfaceNodes(iface, transitive),
            ...getAllImplementsInterfaceNodes(type, iface)
          ]);
        }
      }
    }
    function validateUnionMembers(context2, union) {
      const memberTypes = union.getTypes();
      if (memberTypes.length === 0) {
        context2.reportError(`Union type ${union.name} must define one or more member types.`, [union.astNode, ...union.extensionASTNodes]);
      }
      const includedTypeNames = /* @__PURE__ */ Object.create(null);
      for (const memberType of memberTypes) {
        if (includedTypeNames[memberType.name]) {
          context2.reportError(`Union type ${union.name} can only include type ${memberType.name} once.`, getUnionMemberTypeNodes(union, memberType.name));
          continue;
        }
        includedTypeNames[memberType.name] = true;
        if (!(0, _definition.isObjectType)(memberType)) {
          context2.reportError(`Union type ${union.name} can only include Object types, it cannot include ${(0, _inspect.inspect)(memberType)}.`, getUnionMemberTypeNodes(union, String(memberType)));
        }
      }
    }
    function validateEnumValues(context2, enumType) {
      const enumValues = enumType.getValues();
      if (enumValues.length === 0) {
        context2.reportError(`Enum type ${enumType.name} must define one or more values.`, [enumType.astNode, ...enumType.extensionASTNodes]);
      }
      for (const enumValue of enumValues) {
        validateName(context2, enumValue);
      }
    }
    function validateInputFields(context2, inputObj) {
      const fields = Object.values(inputObj.getFields());
      if (fields.length === 0) {
        context2.reportError(`Input Object type ${inputObj.name} must define one or more fields.`, [inputObj.astNode, ...inputObj.extensionASTNodes]);
      }
      for (const field of fields) {
        validateName(context2, field);
        if (!(0, _definition.isInputType)(field.type)) {
          var _field$astNode2;
          context2.reportError(`The type of ${inputObj.name}.${field.name} must be Input Type but got: ${(0, _inspect.inspect)(field.type)}.`, (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0 ? void 0 : _field$astNode2.type);
        }
        if ((0, _definition.isRequiredInputField)(field) && field.deprecationReason != null) {
          var _field$astNode3;
          context2.reportError(`Required input field ${inputObj.name}.${field.name} cannot be deprecated.`, [
            getDeprecatedDirectiveNode(field.astNode),
            (_field$astNode3 = field.astNode) === null || _field$astNode3 === void 0 ? void 0 : _field$astNode3.type
          ]);
        }
      }
    }
    function createInputObjectCircularRefsValidator(context2) {
      const visitedTypes = /* @__PURE__ */ Object.create(null);
      const fieldPath = [];
      const fieldPathIndexByTypeName = /* @__PURE__ */ Object.create(null);
      return detectCycleRecursive;
      function detectCycleRecursive(inputObj) {
        if (visitedTypes[inputObj.name]) {
          return;
        }
        visitedTypes[inputObj.name] = true;
        fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
        const fields = Object.values(inputObj.getFields());
        for (const field of fields) {
          if ((0, _definition.isNonNullType)(field.type) && (0, _definition.isInputObjectType)(field.type.ofType)) {
            const fieldType = field.type.ofType;
            const cycleIndex = fieldPathIndexByTypeName[fieldType.name];
            fieldPath.push(field);
            if (cycleIndex === void 0) {
              detectCycleRecursive(fieldType);
            } else {
              const cyclePath = fieldPath.slice(cycleIndex);
              const pathStr = cyclePath.map((fieldObj) => fieldObj.name).join(".");
              context2.reportError(`Cannot reference Input Object "${fieldType.name}" within itself through a series of non-null fields: "${pathStr}".`, cyclePath.map((fieldObj) => fieldObj.astNode));
            }
            fieldPath.pop();
          }
        }
        fieldPathIndexByTypeName[inputObj.name] = void 0;
      }
    }
    function getAllImplementsInterfaceNodes(type, iface) {
      const { astNode, extensionASTNodes } = type;
      const nodes = astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes;
      return nodes.flatMap((typeNode) => {
        var _typeNode$interfaces;
        return (_typeNode$interfaces = typeNode.interfaces) !== null && _typeNode$interfaces !== void 0 ? _typeNode$interfaces : [];
      }).filter((ifaceNode) => ifaceNode.name.value === iface.name);
    }
    function getUnionMemberTypeNodes(union, typeName) {
      const { astNode, extensionASTNodes } = union;
      const nodes = astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes;
      return nodes.flatMap((unionNode) => {
        var _unionNode$types;
        return (_unionNode$types = unionNode.types) !== null && _unionNode$types !== void 0 ? _unionNode$types : [];
      }).filter((typeNode) => typeNode.name.value === typeName);
    }
    function getDeprecatedDirectiveNode(definitionNode) {
      var _definitionNode$direc;
      return definitionNode === null || definitionNode === void 0 ? void 0 : (_definitionNode$direc = definitionNode.directives) === null || _definitionNode$direc === void 0 ? void 0 : _definitionNode$direc.find((node) => node.name.value === _directives.GraphQLDeprecatedDirective.name);
    }
  }
});

// ../../node_modules/graphql/utilities/typeFromAST.js
var require_typeFromAST = __commonJS({
  "../../node_modules/graphql/utilities/typeFromAST.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.typeFromAST = typeFromAST;
    var _kinds = require_kinds();
    var _definition = require_definition();
    function typeFromAST(schema, typeNode) {
      switch (typeNode.kind) {
        case _kinds.Kind.LIST_TYPE: {
          const innerType = typeFromAST(schema, typeNode.type);
          return innerType && new _definition.GraphQLList(innerType);
        }
        case _kinds.Kind.NON_NULL_TYPE: {
          const innerType = typeFromAST(schema, typeNode.type);
          return innerType && new _definition.GraphQLNonNull(innerType);
        }
        case _kinds.Kind.NAMED_TYPE:
          return schema.getType(typeNode.name.value);
      }
    }
  }
});

// ../../node_modules/graphql/utilities/TypeInfo.js
var require_TypeInfo = __commonJS({
  "../../node_modules/graphql/utilities/TypeInfo.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TypeInfo = void 0;
    exports.visitWithTypeInfo = visitWithTypeInfo;
    var _ast = require_ast();
    var _kinds = require_kinds();
    var _visitor = require_visitor();
    var _definition = require_definition();
    var _introspection = require_introspection();
    var _typeFromAST = require_typeFromAST();
    var TypeInfo = class {
      constructor(schema, initialType, getFieldDefFn) {
        this._schema = schema;
        this._typeStack = [];
        this._parentTypeStack = [];
        this._inputTypeStack = [];
        this._fieldDefStack = [];
        this._defaultValueStack = [];
        this._directive = null;
        this._argument = null;
        this._enumValue = null;
        this._getFieldDef = getFieldDefFn !== null && getFieldDefFn !== void 0 ? getFieldDefFn : getFieldDef;
        if (initialType) {
          if ((0, _definition.isInputType)(initialType)) {
            this._inputTypeStack.push(initialType);
          }
          if ((0, _definition.isCompositeType)(initialType)) {
            this._parentTypeStack.push(initialType);
          }
          if ((0, _definition.isOutputType)(initialType)) {
            this._typeStack.push(initialType);
          }
        }
      }
      get [Symbol.toStringTag]() {
        return "TypeInfo";
      }
      getType() {
        if (this._typeStack.length > 0) {
          return this._typeStack[this._typeStack.length - 1];
        }
      }
      getParentType() {
        if (this._parentTypeStack.length > 0) {
          return this._parentTypeStack[this._parentTypeStack.length - 1];
        }
      }
      getInputType() {
        if (this._inputTypeStack.length > 0) {
          return this._inputTypeStack[this._inputTypeStack.length - 1];
        }
      }
      getParentInputType() {
        if (this._inputTypeStack.length > 1) {
          return this._inputTypeStack[this._inputTypeStack.length - 2];
        }
      }
      getFieldDef() {
        if (this._fieldDefStack.length > 0) {
          return this._fieldDefStack[this._fieldDefStack.length - 1];
        }
      }
      getDefaultValue() {
        if (this._defaultValueStack.length > 0) {
          return this._defaultValueStack[this._defaultValueStack.length - 1];
        }
      }
      getDirective() {
        return this._directive;
      }
      getArgument() {
        return this._argument;
      }
      getEnumValue() {
        return this._enumValue;
      }
      enter(node) {
        const schema = this._schema;
        switch (node.kind) {
          case _kinds.Kind.SELECTION_SET: {
            const namedType = (0, _definition.getNamedType)(this.getType());
            this._parentTypeStack.push((0, _definition.isCompositeType)(namedType) ? namedType : void 0);
            break;
          }
          case _kinds.Kind.FIELD: {
            const parentType = this.getParentType();
            let fieldDef;
            let fieldType;
            if (parentType) {
              fieldDef = this._getFieldDef(schema, parentType, node);
              if (fieldDef) {
                fieldType = fieldDef.type;
              }
            }
            this._fieldDefStack.push(fieldDef);
            this._typeStack.push((0, _definition.isOutputType)(fieldType) ? fieldType : void 0);
            break;
          }
          case _kinds.Kind.DIRECTIVE:
            this._directive = schema.getDirective(node.name.value);
            break;
          case _kinds.Kind.OPERATION_DEFINITION: {
            const rootType = schema.getRootType(node.operation);
            this._typeStack.push((0, _definition.isObjectType)(rootType) ? rootType : void 0);
            break;
          }
          case _kinds.Kind.INLINE_FRAGMENT:
          case _kinds.Kind.FRAGMENT_DEFINITION: {
            const typeConditionAST = node.typeCondition;
            const outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : (0, _definition.getNamedType)(this.getType());
            this._typeStack.push((0, _definition.isOutputType)(outputType) ? outputType : void 0);
            break;
          }
          case _kinds.Kind.VARIABLE_DEFINITION: {
            const inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
            this._inputTypeStack.push((0, _definition.isInputType)(inputType) ? inputType : void 0);
            break;
          }
          case _kinds.Kind.ARGUMENT: {
            var _this$getDirective;
            let argDef;
            let argType;
            const fieldOrDirective = (_this$getDirective = this.getDirective()) !== null && _this$getDirective !== void 0 ? _this$getDirective : this.getFieldDef();
            if (fieldOrDirective) {
              argDef = fieldOrDirective.args.find((arg) => arg.name === node.name.value);
              if (argDef) {
                argType = argDef.type;
              }
            }
            this._argument = argDef;
            this._defaultValueStack.push(argDef ? argDef.defaultValue : void 0);
            this._inputTypeStack.push((0, _definition.isInputType)(argType) ? argType : void 0);
            break;
          }
          case _kinds.Kind.LIST: {
            const listType = (0, _definition.getNullableType)(this.getInputType());
            const itemType = (0, _definition.isListType)(listType) ? listType.ofType : listType;
            this._defaultValueStack.push(void 0);
            this._inputTypeStack.push((0, _definition.isInputType)(itemType) ? itemType : void 0);
            break;
          }
          case _kinds.Kind.OBJECT_FIELD: {
            const objectType = (0, _definition.getNamedType)(this.getInputType());
            let inputFieldType;
            let inputField;
            if ((0, _definition.isInputObjectType)(objectType)) {
              inputField = objectType.getFields()[node.name.value];
              if (inputField) {
                inputFieldType = inputField.type;
              }
            }
            this._defaultValueStack.push(inputField ? inputField.defaultValue : void 0);
            this._inputTypeStack.push((0, _definition.isInputType)(inputFieldType) ? inputFieldType : void 0);
            break;
          }
          case _kinds.Kind.ENUM: {
            const enumType = (0, _definition.getNamedType)(this.getInputType());
            let enumValue;
            if ((0, _definition.isEnumType)(enumType)) {
              enumValue = enumType.getValue(node.value);
            }
            this._enumValue = enumValue;
            break;
          }
          default:
        }
      }
      leave(node) {
        switch (node.kind) {
          case _kinds.Kind.SELECTION_SET:
            this._parentTypeStack.pop();
            break;
          case _kinds.Kind.FIELD:
            this._fieldDefStack.pop();
            this._typeStack.pop();
            break;
          case _kinds.Kind.DIRECTIVE:
            this._directive = null;
            break;
          case _kinds.Kind.OPERATION_DEFINITION:
          case _kinds.Kind.INLINE_FRAGMENT:
          case _kinds.Kind.FRAGMENT_DEFINITION:
            this._typeStack.pop();
            break;
          case _kinds.Kind.VARIABLE_DEFINITION:
            this._inputTypeStack.pop();
            break;
          case _kinds.Kind.ARGUMENT:
            this._argument = null;
            this._defaultValueStack.pop();
            this._inputTypeStack.pop();
            break;
          case _kinds.Kind.LIST:
          case _kinds.Kind.OBJECT_FIELD:
            this._defaultValueStack.pop();
            this._inputTypeStack.pop();
            break;
          case _kinds.Kind.ENUM:
            this._enumValue = null;
            break;
          default:
        }
      }
    };
    exports.TypeInfo = TypeInfo;
    function getFieldDef(schema, parentType, fieldNode) {
      const name = fieldNode.name.value;
      if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.SchemaMetaFieldDef;
      }
      if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.TypeMetaFieldDef;
      }
      if (name === _introspection.TypeNameMetaFieldDef.name && (0, _definition.isCompositeType)(parentType)) {
        return _introspection.TypeNameMetaFieldDef;
      }
      if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
        return parentType.getFields()[name];
      }
    }
    function visitWithTypeInfo(typeInfo, visitor) {
      return {
        enter(...args) {
          const node = args[0];
          typeInfo.enter(node);
          const fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).enter;
          if (fn) {
            const result = fn.apply(visitor, args);
            if (result !== void 0) {
              typeInfo.leave(node);
              if ((0, _ast.isNode)(result)) {
                typeInfo.enter(result);
              }
            }
            return result;
          }
        },
        leave(...args) {
          const node = args[0];
          const fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).leave;
          let result;
          if (fn) {
            result = fn.apply(visitor, args);
          }
          typeInfo.leave(node);
          return result;
        }
      };
    }
  }
});

// ../../node_modules/graphql/language/predicates.js
var require_predicates = __commonJS({
  "../../node_modules/graphql/language/predicates.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isConstValueNode = isConstValueNode;
    exports.isDefinitionNode = isDefinitionNode;
    exports.isExecutableDefinitionNode = isExecutableDefinitionNode;
    exports.isSelectionNode = isSelectionNode;
    exports.isTypeDefinitionNode = isTypeDefinitionNode;
    exports.isTypeExtensionNode = isTypeExtensionNode;
    exports.isTypeNode = isTypeNode;
    exports.isTypeSystemDefinitionNode = isTypeSystemDefinitionNode;
    exports.isTypeSystemExtensionNode = isTypeSystemExtensionNode;
    exports.isValueNode = isValueNode;
    var _kinds = require_kinds();
    function isDefinitionNode(node) {
      return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
    }
    function isExecutableDefinitionNode(node) {
      return node.kind === _kinds.Kind.OPERATION_DEFINITION || node.kind === _kinds.Kind.FRAGMENT_DEFINITION;
    }
    function isSelectionNode(node) {
      return node.kind === _kinds.Kind.FIELD || node.kind === _kinds.Kind.FRAGMENT_SPREAD || node.kind === _kinds.Kind.INLINE_FRAGMENT;
    }
    function isValueNode(node) {
      return node.kind === _kinds.Kind.VARIABLE || node.kind === _kinds.Kind.INT || node.kind === _kinds.Kind.FLOAT || node.kind === _kinds.Kind.STRING || node.kind === _kinds.Kind.BOOLEAN || node.kind === _kinds.Kind.NULL || node.kind === _kinds.Kind.ENUM || node.kind === _kinds.Kind.LIST || node.kind === _kinds.Kind.OBJECT;
    }
    function isConstValueNode(node) {
      return isValueNode(node) && (node.kind === _kinds.Kind.LIST ? node.values.some(isConstValueNode) : node.kind === _kinds.Kind.OBJECT ? node.fields.some((field) => isConstValueNode(field.value)) : node.kind !== _kinds.Kind.VARIABLE);
    }
    function isTypeNode(node) {
      return node.kind === _kinds.Kind.NAMED_TYPE || node.kind === _kinds.Kind.LIST_TYPE || node.kind === _kinds.Kind.NON_NULL_TYPE;
    }
    function isTypeSystemDefinitionNode(node) {
      return node.kind === _kinds.Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kinds.Kind.DIRECTIVE_DEFINITION;
    }
    function isTypeDefinitionNode(node) {
      return node.kind === _kinds.Kind.SCALAR_TYPE_DEFINITION || node.kind === _kinds.Kind.OBJECT_TYPE_DEFINITION || node.kind === _kinds.Kind.INTERFACE_TYPE_DEFINITION || node.kind === _kinds.Kind.UNION_TYPE_DEFINITION || node.kind === _kinds.Kind.ENUM_TYPE_DEFINITION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION;
    }
    function isTypeSystemExtensionNode(node) {
      return node.kind === _kinds.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
    }
    function isTypeExtensionNode(node) {
      return node.kind === _kinds.Kind.SCALAR_TYPE_EXTENSION || node.kind === _kinds.Kind.OBJECT_TYPE_EXTENSION || node.kind === _kinds.Kind.INTERFACE_TYPE_EXTENSION || node.kind === _kinds.Kind.UNION_TYPE_EXTENSION || node.kind === _kinds.Kind.ENUM_TYPE_EXTENSION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
    }
  }
});

// ../../node_modules/graphql/validation/rules/ExecutableDefinitionsRule.js
var require_ExecutableDefinitionsRule = __commonJS({
  "../../node_modules/graphql/validation/rules/ExecutableDefinitionsRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExecutableDefinitionsRule = ExecutableDefinitionsRule;
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _predicates = require_predicates();
    function ExecutableDefinitionsRule(context2) {
      return {
        Document(node) {
          for (const definition of node.definitions) {
            if (!(0, _predicates.isExecutableDefinitionNode)(definition)) {
              const defName = definition.kind === _kinds.Kind.SCHEMA_DEFINITION || definition.kind === _kinds.Kind.SCHEMA_EXTENSION ? "schema" : '"' + definition.name.value + '"';
              context2.reportError(new _GraphQLError.GraphQLError(`The ${defName} definition is not executable.`, {
                nodes: definition
              }));
            }
          }
          return false;
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js
var require_FieldsOnCorrectTypeRule = __commonJS({
  "../../node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FieldsOnCorrectTypeRule = FieldsOnCorrectTypeRule;
    var _didYouMean = require_didYouMean();
    var _naturalCompare = require_naturalCompare();
    var _suggestionList = require_suggestionList();
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function FieldsOnCorrectTypeRule(context2) {
      return {
        Field(node) {
          const type = context2.getParentType();
          if (type) {
            const fieldDef = context2.getFieldDef();
            if (!fieldDef) {
              const schema = context2.getSchema();
              const fieldName = node.name.value;
              let suggestion = (0, _didYouMean.didYouMean)("to use an inline fragment on", getSuggestedTypeNames(schema, type, fieldName));
              if (suggestion === "") {
                suggestion = (0, _didYouMean.didYouMean)(getSuggestedFieldNames(type, fieldName));
              }
              context2.reportError(new _GraphQLError.GraphQLError(`Cannot query field "${fieldName}" on type "${type.name}".` + suggestion, {
                nodes: node
              }));
            }
          }
        }
      };
    }
    function getSuggestedTypeNames(schema, type, fieldName) {
      if (!(0, _definition.isAbstractType)(type)) {
        return [];
      }
      const suggestedTypes = /* @__PURE__ */ new Set();
      const usageCount = /* @__PURE__ */ Object.create(null);
      for (const possibleType of schema.getPossibleTypes(type)) {
        if (!possibleType.getFields()[fieldName]) {
          continue;
        }
        suggestedTypes.add(possibleType);
        usageCount[possibleType.name] = 1;
        for (const possibleInterface of possibleType.getInterfaces()) {
          var _usageCount$possibleI;
          if (!possibleInterface.getFields()[fieldName]) {
            continue;
          }
          suggestedTypes.add(possibleInterface);
          usageCount[possibleInterface.name] = ((_usageCount$possibleI = usageCount[possibleInterface.name]) !== null && _usageCount$possibleI !== void 0 ? _usageCount$possibleI : 0) + 1;
        }
      }
      return [...suggestedTypes].sort((typeA, typeB) => {
        const usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];
        if (usageCountDiff !== 0) {
          return usageCountDiff;
        }
        if ((0, _definition.isInterfaceType)(typeA) && schema.isSubType(typeA, typeB)) {
          return -1;
        }
        if ((0, _definition.isInterfaceType)(typeB) && schema.isSubType(typeB, typeA)) {
          return 1;
        }
        return (0, _naturalCompare.naturalCompare)(typeA.name, typeB.name);
      }).map((x) => x.name);
    }
    function getSuggestedFieldNames(type, fieldName) {
      if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
        const possibleFieldNames = Object.keys(type.getFields());
        return (0, _suggestionList.suggestionList)(fieldName, possibleFieldNames);
      }
      return [];
    }
  }
});

// ../../node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.js
var require_FragmentsOnCompositeTypesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypesRule;
    var _GraphQLError = require_GraphQLError();
    var _printer = require_printer();
    var _definition = require_definition();
    var _typeFromAST = require_typeFromAST();
    function FragmentsOnCompositeTypesRule(context2) {
      return {
        InlineFragment(node) {
          const typeCondition = node.typeCondition;
          if (typeCondition) {
            const type = (0, _typeFromAST.typeFromAST)(context2.getSchema(), typeCondition);
            if (type && !(0, _definition.isCompositeType)(type)) {
              const typeStr = (0, _printer.print)(typeCondition);
              context2.reportError(new _GraphQLError.GraphQLError(`Fragment cannot condition on non composite type "${typeStr}".`, {
                nodes: typeCondition
              }));
            }
          }
        },
        FragmentDefinition(node) {
          const type = (0, _typeFromAST.typeFromAST)(context2.getSchema(), node.typeCondition);
          if (type && !(0, _definition.isCompositeType)(type)) {
            const typeStr = (0, _printer.print)(node.typeCondition);
            context2.reportError(new _GraphQLError.GraphQLError(`Fragment "${node.name.value}" cannot condition on non composite type "${typeStr}".`, {
              nodes: node.typeCondition
            }));
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/KnownArgumentNamesRule.js
var require_KnownArgumentNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/KnownArgumentNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KnownArgumentNamesOnDirectivesRule = KnownArgumentNamesOnDirectivesRule;
    exports.KnownArgumentNamesRule = KnownArgumentNamesRule;
    var _didYouMean = require_didYouMean();
    var _suggestionList = require_suggestionList();
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _directives = require_directives();
    function KnownArgumentNamesRule(context2) {
      return {
        ...KnownArgumentNamesOnDirectivesRule(context2),
        Argument(argNode) {
          const argDef = context2.getArgument();
          const fieldDef = context2.getFieldDef();
          const parentType = context2.getParentType();
          if (!argDef && fieldDef && parentType) {
            const argName = argNode.name.value;
            const knownArgsNames = fieldDef.args.map((arg) => arg.name);
            const suggestions = (0, _suggestionList.suggestionList)(argName, knownArgsNames);
            context2.reportError(new _GraphQLError.GraphQLError(`Unknown argument "${argName}" on field "${parentType.name}.${fieldDef.name}".` + (0, _didYouMean.didYouMean)(suggestions), {
              nodes: argNode
            }));
          }
        }
      };
    }
    function KnownArgumentNamesOnDirectivesRule(context2) {
      const directiveArgs = /* @__PURE__ */ Object.create(null);
      const schema = context2.getSchema();
      const definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
      for (const directive of definedDirectives) {
        directiveArgs[directive.name] = directive.args.map((arg) => arg.name);
      }
      const astDefinitions = context2.getDocument().definitions;
      for (const def of astDefinitions) {
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          var _def$arguments;
          const argsNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
          directiveArgs[def.name.value] = argsNodes.map((arg) => arg.name.value);
        }
      }
      return {
        Directive(directiveNode) {
          const directiveName = directiveNode.name.value;
          const knownArgs = directiveArgs[directiveName];
          if (directiveNode.arguments && knownArgs) {
            for (const argNode of directiveNode.arguments) {
              const argName = argNode.name.value;
              if (!knownArgs.includes(argName)) {
                const suggestions = (0, _suggestionList.suggestionList)(argName, knownArgs);
                context2.reportError(new _GraphQLError.GraphQLError(`Unknown argument "${argName}" on directive "@${directiveName}".` + (0, _didYouMean.didYouMean)(suggestions), {
                  nodes: argNode
                }));
              }
            }
          }
          return false;
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/KnownDirectivesRule.js
var require_KnownDirectivesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/KnownDirectivesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KnownDirectivesRule = KnownDirectivesRule;
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _GraphQLError = require_GraphQLError();
    var _ast = require_ast();
    var _directiveLocation = require_directiveLocation();
    var _kinds = require_kinds();
    var _directives = require_directives();
    function KnownDirectivesRule(context2) {
      const locationsMap = /* @__PURE__ */ Object.create(null);
      const schema = context2.getSchema();
      const definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
      for (const directive of definedDirectives) {
        locationsMap[directive.name] = directive.locations;
      }
      const astDefinitions = context2.getDocument().definitions;
      for (const def of astDefinitions) {
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          locationsMap[def.name.value] = def.locations.map((name) => name.value);
        }
      }
      return {
        Directive(node, _key, _parent, _path, ancestors) {
          const name = node.name.value;
          const locations = locationsMap[name];
          if (!locations) {
            context2.reportError(new _GraphQLError.GraphQLError(`Unknown directive "@${name}".`, {
              nodes: node
            }));
            return;
          }
          const candidateLocation = getDirectiveLocationForASTPath(ancestors);
          if (candidateLocation && !locations.includes(candidateLocation)) {
            context2.reportError(new _GraphQLError.GraphQLError(`Directive "@${name}" may not be used on ${candidateLocation}.`, {
              nodes: node
            }));
          }
        }
      };
    }
    function getDirectiveLocationForASTPath(ancestors) {
      const appliedTo = ancestors[ancestors.length - 1];
      "kind" in appliedTo || (0, _invariant.invariant)(false);
      switch (appliedTo.kind) {
        case _kinds.Kind.OPERATION_DEFINITION:
          return getDirectiveLocationForOperation(appliedTo.operation);
        case _kinds.Kind.FIELD:
          return _directiveLocation.DirectiveLocation.FIELD;
        case _kinds.Kind.FRAGMENT_SPREAD:
          return _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD;
        case _kinds.Kind.INLINE_FRAGMENT:
          return _directiveLocation.DirectiveLocation.INLINE_FRAGMENT;
        case _kinds.Kind.FRAGMENT_DEFINITION:
          return _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION;
        case _kinds.Kind.VARIABLE_DEFINITION:
          return _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION;
        case _kinds.Kind.SCHEMA_DEFINITION:
        case _kinds.Kind.SCHEMA_EXTENSION:
          return _directiveLocation.DirectiveLocation.SCHEMA;
        case _kinds.Kind.SCALAR_TYPE_DEFINITION:
        case _kinds.Kind.SCALAR_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.SCALAR;
        case _kinds.Kind.OBJECT_TYPE_DEFINITION:
        case _kinds.Kind.OBJECT_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.OBJECT;
        case _kinds.Kind.FIELD_DEFINITION:
          return _directiveLocation.DirectiveLocation.FIELD_DEFINITION;
        case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
        case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.INTERFACE;
        case _kinds.Kind.UNION_TYPE_DEFINITION:
        case _kinds.Kind.UNION_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.UNION;
        case _kinds.Kind.ENUM_TYPE_DEFINITION:
        case _kinds.Kind.ENUM_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.ENUM;
        case _kinds.Kind.ENUM_VALUE_DEFINITION:
          return _directiveLocation.DirectiveLocation.ENUM_VALUE;
        case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.INPUT_OBJECT;
        case _kinds.Kind.INPUT_VALUE_DEFINITION: {
          const parentNode = ancestors[ancestors.length - 3];
          "kind" in parentNode || (0, _invariant.invariant)(false);
          return parentNode.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION ? _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION : _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION;
        }
        default:
          (0, _invariant.invariant)(false, "Unexpected kind: " + (0, _inspect.inspect)(appliedTo.kind));
      }
    }
    function getDirectiveLocationForOperation(operation) {
      switch (operation) {
        case _ast.OperationTypeNode.QUERY:
          return _directiveLocation.DirectiveLocation.QUERY;
        case _ast.OperationTypeNode.MUTATION:
          return _directiveLocation.DirectiveLocation.MUTATION;
        case _ast.OperationTypeNode.SUBSCRIPTION:
          return _directiveLocation.DirectiveLocation.SUBSCRIPTION;
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/KnownFragmentNamesRule.js
var require_KnownFragmentNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/KnownFragmentNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KnownFragmentNamesRule = KnownFragmentNamesRule;
    var _GraphQLError = require_GraphQLError();
    function KnownFragmentNamesRule(context2) {
      return {
        FragmentSpread(node) {
          const fragmentName = node.name.value;
          const fragment = context2.getFragment(fragmentName);
          if (!fragment) {
            context2.reportError(new _GraphQLError.GraphQLError(`Unknown fragment "${fragmentName}".`, {
              nodes: node.name
            }));
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/KnownTypeNamesRule.js
var require_KnownTypeNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/KnownTypeNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KnownTypeNamesRule = KnownTypeNamesRule;
    var _didYouMean = require_didYouMean();
    var _suggestionList = require_suggestionList();
    var _GraphQLError = require_GraphQLError();
    var _predicates = require_predicates();
    var _introspection = require_introspection();
    var _scalars = require_scalars();
    function KnownTypeNamesRule(context2) {
      const schema = context2.getSchema();
      const existingTypesMap = schema ? schema.getTypeMap() : /* @__PURE__ */ Object.create(null);
      const definedTypes = /* @__PURE__ */ Object.create(null);
      for (const def of context2.getDocument().definitions) {
        if ((0, _predicates.isTypeDefinitionNode)(def)) {
          definedTypes[def.name.value] = true;
        }
      }
      const typeNames = [
        ...Object.keys(existingTypesMap),
        ...Object.keys(definedTypes)
      ];
      return {
        NamedType(node, _1, parent, _2, ancestors) {
          const typeName = node.name.value;
          if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
            var _ancestors$;
            const definitionNode = (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0 ? _ancestors$ : parent;
            const isSDL = definitionNode != null && isSDLNode(definitionNode);
            if (isSDL && standardTypeNames.includes(typeName)) {
              return;
            }
            const suggestedTypes = (0, _suggestionList.suggestionList)(typeName, isSDL ? standardTypeNames.concat(typeNames) : typeNames);
            context2.reportError(new _GraphQLError.GraphQLError(`Unknown type "${typeName}".` + (0, _didYouMean.didYouMean)(suggestedTypes), {
              nodes: node
            }));
          }
        }
      };
    }
    var standardTypeNames = [
      ..._scalars.specifiedScalarTypes,
      ..._introspection.introspectionTypes
    ].map((type) => type.name);
    function isSDLNode(value) {
      return "kind" in value && ((0, _predicates.isTypeSystemDefinitionNode)(value) || (0, _predicates.isTypeSystemExtensionNode)(value));
    }
  }
});

// ../../node_modules/graphql/validation/rules/LoneAnonymousOperationRule.js
var require_LoneAnonymousOperationRule = __commonJS({
  "../../node_modules/graphql/validation/rules/LoneAnonymousOperationRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LoneAnonymousOperationRule = LoneAnonymousOperationRule;
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    function LoneAnonymousOperationRule(context2) {
      let operationCount = 0;
      return {
        Document(node) {
          operationCount = node.definitions.filter((definition) => definition.kind === _kinds.Kind.OPERATION_DEFINITION).length;
        },
        OperationDefinition(node) {
          if (!node.name && operationCount > 1) {
            context2.reportError(new _GraphQLError.GraphQLError("This anonymous operation must be the only defined operation.", {
              nodes: node
            }));
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.js
var require_LoneSchemaDefinitionRule = __commonJS({
  "../../node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LoneSchemaDefinitionRule = LoneSchemaDefinitionRule;
    var _GraphQLError = require_GraphQLError();
    function LoneSchemaDefinitionRule(context2) {
      var _ref, _ref2, _oldSchema$astNode;
      const oldSchema = context2.getSchema();
      const alreadyDefined = (_ref = (_ref2 = (_oldSchema$astNode = oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0 ? _oldSchema$astNode : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getQueryType()) !== null && _ref2 !== void 0 ? _ref2 : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getMutationType()) !== null && _ref !== void 0 ? _ref : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getSubscriptionType();
      let schemaDefinitionsCount = 0;
      return {
        SchemaDefinition(node) {
          if (alreadyDefined) {
            context2.reportError(new _GraphQLError.GraphQLError("Cannot define a new schema within a schema extension.", {
              nodes: node
            }));
            return;
          }
          if (schemaDefinitionsCount > 0) {
            context2.reportError(new _GraphQLError.GraphQLError("Must provide only one schema definition.", {
              nodes: node
            }));
          }
          ++schemaDefinitionsCount;
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/NoFragmentCyclesRule.js
var require_NoFragmentCyclesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/NoFragmentCyclesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoFragmentCyclesRule = NoFragmentCyclesRule;
    var _GraphQLError = require_GraphQLError();
    function NoFragmentCyclesRule(context2) {
      const visitedFrags = /* @__PURE__ */ Object.create(null);
      const spreadPath = [];
      const spreadPathIndexByName = /* @__PURE__ */ Object.create(null);
      return {
        OperationDefinition: () => false,
        FragmentDefinition(node) {
          detectCycleRecursive(node);
          return false;
        }
      };
      function detectCycleRecursive(fragment) {
        if (visitedFrags[fragment.name.value]) {
          return;
        }
        const fragmentName = fragment.name.value;
        visitedFrags[fragmentName] = true;
        const spreadNodes = context2.getFragmentSpreads(fragment.selectionSet);
        if (spreadNodes.length === 0) {
          return;
        }
        spreadPathIndexByName[fragmentName] = spreadPath.length;
        for (const spreadNode of spreadNodes) {
          const spreadName = spreadNode.name.value;
          const cycleIndex = spreadPathIndexByName[spreadName];
          spreadPath.push(spreadNode);
          if (cycleIndex === void 0) {
            const spreadFragment = context2.getFragment(spreadName);
            if (spreadFragment) {
              detectCycleRecursive(spreadFragment);
            }
          } else {
            const cyclePath = spreadPath.slice(cycleIndex);
            const viaPath = cyclePath.slice(0, -1).map((s) => '"' + s.name.value + '"').join(", ");
            context2.reportError(new _GraphQLError.GraphQLError(`Cannot spread fragment "${spreadName}" within itself` + (viaPath !== "" ? ` via ${viaPath}.` : "."), {
              nodes: cyclePath
            }));
          }
          spreadPath.pop();
        }
        spreadPathIndexByName[fragmentName] = void 0;
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/NoUndefinedVariablesRule.js
var require_NoUndefinedVariablesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/NoUndefinedVariablesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoUndefinedVariablesRule = NoUndefinedVariablesRule;
    var _GraphQLError = require_GraphQLError();
    function NoUndefinedVariablesRule(context2) {
      let variableNameDefined = /* @__PURE__ */ Object.create(null);
      return {
        OperationDefinition: {
          enter() {
            variableNameDefined = /* @__PURE__ */ Object.create(null);
          },
          leave(operation) {
            const usages = context2.getRecursiveVariableUsages(operation);
            for (const { node } of usages) {
              const varName = node.name.value;
              if (variableNameDefined[varName] !== true) {
                context2.reportError(new _GraphQLError.GraphQLError(operation.name ? `Variable "$${varName}" is not defined by operation "${operation.name.value}".` : `Variable "$${varName}" is not defined.`, {
                  nodes: [node, operation]
                }));
              }
            }
          }
        },
        VariableDefinition(node) {
          variableNameDefined[node.variable.name.value] = true;
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/NoUnusedFragmentsRule.js
var require_NoUnusedFragmentsRule = __commonJS({
  "../../node_modules/graphql/validation/rules/NoUnusedFragmentsRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoUnusedFragmentsRule = NoUnusedFragmentsRule;
    var _GraphQLError = require_GraphQLError();
    function NoUnusedFragmentsRule(context2) {
      const operationDefs = [];
      const fragmentDefs = [];
      return {
        OperationDefinition(node) {
          operationDefs.push(node);
          return false;
        },
        FragmentDefinition(node) {
          fragmentDefs.push(node);
          return false;
        },
        Document: {
          leave() {
            const fragmentNameUsed = /* @__PURE__ */ Object.create(null);
            for (const operation of operationDefs) {
              for (const fragment of context2.getRecursivelyReferencedFragments(operation)) {
                fragmentNameUsed[fragment.name.value] = true;
              }
            }
            for (const fragmentDef of fragmentDefs) {
              const fragName = fragmentDef.name.value;
              if (fragmentNameUsed[fragName] !== true) {
                context2.reportError(new _GraphQLError.GraphQLError(`Fragment "${fragName}" is never used.`, {
                  nodes: fragmentDef
                }));
              }
            }
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/NoUnusedVariablesRule.js
var require_NoUnusedVariablesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/NoUnusedVariablesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoUnusedVariablesRule = NoUnusedVariablesRule;
    var _GraphQLError = require_GraphQLError();
    function NoUnusedVariablesRule(context2) {
      let variableDefs = [];
      return {
        OperationDefinition: {
          enter() {
            variableDefs = [];
          },
          leave(operation) {
            const variableNameUsed = /* @__PURE__ */ Object.create(null);
            const usages = context2.getRecursiveVariableUsages(operation);
            for (const { node } of usages) {
              variableNameUsed[node.name.value] = true;
            }
            for (const variableDef of variableDefs) {
              const variableName = variableDef.variable.name.value;
              if (variableNameUsed[variableName] !== true) {
                context2.reportError(new _GraphQLError.GraphQLError(operation.name ? `Variable "$${variableName}" is never used in operation "${operation.name.value}".` : `Variable "$${variableName}" is never used.`, {
                  nodes: variableDef
                }));
              }
            }
          }
        },
        VariableDefinition(def) {
          variableDefs.push(def);
        }
      };
    }
  }
});

// ../../node_modules/graphql/utilities/sortValueNode.js
var require_sortValueNode = __commonJS({
  "../../node_modules/graphql/utilities/sortValueNode.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.sortValueNode = sortValueNode;
    var _naturalCompare = require_naturalCompare();
    var _kinds = require_kinds();
    function sortValueNode(valueNode) {
      switch (valueNode.kind) {
        case _kinds.Kind.OBJECT:
          return { ...valueNode, fields: sortFields(valueNode.fields) };
        case _kinds.Kind.LIST:
          return { ...valueNode, values: valueNode.values.map(sortValueNode) };
        case _kinds.Kind.INT:
        case _kinds.Kind.FLOAT:
        case _kinds.Kind.STRING:
        case _kinds.Kind.BOOLEAN:
        case _kinds.Kind.NULL:
        case _kinds.Kind.ENUM:
        case _kinds.Kind.VARIABLE:
          return valueNode;
      }
    }
    function sortFields(fields) {
      return fields.map((fieldNode) => ({
        ...fieldNode,
        value: sortValueNode(fieldNode.value)
      })).sort((fieldA, fieldB) => (0, _naturalCompare.naturalCompare)(fieldA.name.value, fieldB.name.value));
    }
  }
});

// ../../node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.js
var require_OverlappingFieldsCanBeMergedRule = __commonJS({
  "../../node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OverlappingFieldsCanBeMergedRule = OverlappingFieldsCanBeMergedRule;
    var _inspect = require_inspect();
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _definition = require_definition();
    var _sortValueNode = require_sortValueNode();
    var _typeFromAST = require_typeFromAST();
    function reasonMessage(reason) {
      if (Array.isArray(reason)) {
        return reason.map(([responseName, subReason]) => `subfields "${responseName}" conflict because ` + reasonMessage(subReason)).join(" and ");
      }
      return reason;
    }
    function OverlappingFieldsCanBeMergedRule(context2) {
      const comparedFragmentPairs = new PairSet();
      const cachedFieldsAndFragmentNames = /* @__PURE__ */ new Map();
      return {
        SelectionSet(selectionSet) {
          const conflicts = findConflictsWithinSelectionSet(context2, cachedFieldsAndFragmentNames, comparedFragmentPairs, context2.getParentType(), selectionSet);
          for (const [[responseName, reason], fields1, fields2] of conflicts) {
            const reasonMsg = reasonMessage(reason);
            context2.reportError(new _GraphQLError.GraphQLError(`Fields "${responseName}" conflict because ${reasonMsg}. Use different aliases on the fields to fetch both if this was intentional.`, {
              nodes: fields1.concat(fields2)
            }));
          }
        }
      };
    }
    function findConflictsWithinSelectionSet(context2, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
      const conflicts = [];
      const [fieldMap, fragmentNames] = getFieldsAndFragmentNames(context2, cachedFieldsAndFragmentNames, parentType, selectionSet);
      collectConflictsWithin(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);
      if (fragmentNames.length !== 0) {
        for (let i = 0; i < fragmentNames.length; i++) {
          collectConflictsBetweenFieldsAndFragment(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fieldMap, fragmentNames[i]);
          for (let j = i + 1; j < fragmentNames.length; j++) {
            collectConflictsBetweenFragments(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
          }
        }
      }
      return conflicts;
    }
    function collectConflictsBetweenFieldsAndFragment(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
      const fragment = context2.getFragment(fragmentName);
      if (!fragment) {
        return;
      }
      const [fieldMap2, referencedFragmentNames] = getReferencedFieldsAndFragmentNames(context2, cachedFieldsAndFragmentNames, fragment);
      if (fieldMap === fieldMap2) {
        return;
      }
      collectConflictsBetween(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2);
      for (const referencedFragmentName of referencedFragmentNames) {
        if (comparedFragmentPairs.has(referencedFragmentName, fragmentName, areMutuallyExclusive)) {
          continue;
        }
        comparedFragmentPairs.add(referencedFragmentName, fragmentName, areMutuallyExclusive);
        collectConflictsBetweenFieldsAndFragment(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, referencedFragmentName);
      }
    }
    function collectConflictsBetweenFragments(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
      if (fragmentName1 === fragmentName2) {
        return;
      }
      if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
        return;
      }
      comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
      const fragment1 = context2.getFragment(fragmentName1);
      const fragment2 = context2.getFragment(fragmentName2);
      if (!fragment1 || !fragment2) {
        return;
      }
      const [fieldMap1, referencedFragmentNames1] = getReferencedFieldsAndFragmentNames(context2, cachedFieldsAndFragmentNames, fragment1);
      const [fieldMap2, referencedFragmentNames2] = getReferencedFieldsAndFragmentNames(context2, cachedFieldsAndFragmentNames, fragment2);
      collectConflictsBetween(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);
      for (const referencedFragmentName2 of referencedFragmentNames2) {
        collectConflictsBetweenFragments(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, referencedFragmentName2);
      }
      for (const referencedFragmentName1 of referencedFragmentNames1) {
        collectConflictsBetweenFragments(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, referencedFragmentName1, fragmentName2);
      }
    }
    function findConflictsBetweenSubSelectionSets(context2, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
      const conflicts = [];
      const [fieldMap1, fragmentNames1] = getFieldsAndFragmentNames(context2, cachedFieldsAndFragmentNames, parentType1, selectionSet1);
      const [fieldMap2, fragmentNames2] = getFieldsAndFragmentNames(context2, cachedFieldsAndFragmentNames, parentType2, selectionSet2);
      collectConflictsBetween(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);
      for (const fragmentName2 of fragmentNames2) {
        collectConflictsBetweenFieldsAndFragment(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentName2);
      }
      for (const fragmentName1 of fragmentNames1) {
        collectConflictsBetweenFieldsAndFragment(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentName1);
      }
      for (const fragmentName1 of fragmentNames1) {
        for (const fragmentName2 of fragmentNames2) {
          collectConflictsBetweenFragments(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2);
        }
      }
      return conflicts;
    }
    function collectConflictsWithin(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
      for (const [responseName, fields] of Object.entries(fieldMap)) {
        if (fields.length > 1) {
          for (let i = 0; i < fields.length; i++) {
            for (let j = i + 1; j < fields.length; j++) {
              const conflict = findConflict(context2, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, responseName, fields[i], fields[j]);
              if (conflict) {
                conflicts.push(conflict);
              }
            }
          }
        }
      }
    }
    function collectConflictsBetween(context2, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
      for (const [responseName, fields1] of Object.entries(fieldMap1)) {
        const fields2 = fieldMap2[responseName];
        if (fields2) {
          for (const field1 of fields1) {
            for (const field2 of fields2) {
              const conflict = findConflict(context2, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2);
              if (conflict) {
                conflicts.push(conflict);
              }
            }
          }
        }
      }
    }
    function findConflict(context2, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
      const [parentType1, node1, def1] = field1;
      const [parentType2, node2, def2] = field2;
      const areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && (0, _definition.isObjectType)(parentType1) && (0, _definition.isObjectType)(parentType2);
      if (!areMutuallyExclusive) {
        const name1 = node1.name.value;
        const name2 = node2.name.value;
        if (name1 !== name2) {
          return [
            [responseName, `"${name1}" and "${name2}" are different fields`],
            [node1],
            [node2]
          ];
        }
        if (stringifyArguments(node1) !== stringifyArguments(node2)) {
          return [
            [responseName, "they have differing arguments"],
            [node1],
            [node2]
          ];
        }
      }
      const type1 = def1 === null || def1 === void 0 ? void 0 : def1.type;
      const type2 = def2 === null || def2 === void 0 ? void 0 : def2.type;
      if (type1 && type2 && doTypesConflict(type1, type2)) {
        return [
          [
            responseName,
            `they return conflicting types "${(0, _inspect.inspect)(type1)}" and "${(0, _inspect.inspect)(type2)}"`
          ],
          [node1],
          [node2]
        ];
      }
      const selectionSet1 = node1.selectionSet;
      const selectionSet2 = node2.selectionSet;
      if (selectionSet1 && selectionSet2) {
        const conflicts = findConflictsBetweenSubSelectionSets(context2, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, (0, _definition.getNamedType)(type1), selectionSet1, (0, _definition.getNamedType)(type2), selectionSet2);
        return subfieldConflicts(conflicts, responseName, node1, node2);
      }
    }
    function stringifyArguments(fieldNode) {
      var _fieldNode$arguments;
      const args = (_fieldNode$arguments = fieldNode.arguments) !== null && _fieldNode$arguments !== void 0 ? _fieldNode$arguments : [];
      const inputObjectWithArgs = {
        kind: _kinds.Kind.OBJECT,
        fields: args.map((argNode) => ({
          kind: _kinds.Kind.OBJECT_FIELD,
          name: argNode.name,
          value: argNode.value
        }))
      };
      return (0, _printer.print)((0, _sortValueNode.sortValueNode)(inputObjectWithArgs));
    }
    function doTypesConflict(type1, type2) {
      if ((0, _definition.isListType)(type1)) {
        return (0, _definition.isListType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
      }
      if ((0, _definition.isListType)(type2)) {
        return true;
      }
      if ((0, _definition.isNonNullType)(type1)) {
        return (0, _definition.isNonNullType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
      }
      if ((0, _definition.isNonNullType)(type2)) {
        return true;
      }
      if ((0, _definition.isLeafType)(type1) || (0, _definition.isLeafType)(type2)) {
        return type1 !== type2;
      }
      return false;
    }
    function getFieldsAndFragmentNames(context2, cachedFieldsAndFragmentNames, parentType, selectionSet) {
      const cached = cachedFieldsAndFragmentNames.get(selectionSet);
      if (cached) {
        return cached;
      }
      const nodeAndDefs = /* @__PURE__ */ Object.create(null);
      const fragmentNames = /* @__PURE__ */ Object.create(null);
      _collectFieldsAndFragmentNames(context2, parentType, selectionSet, nodeAndDefs, fragmentNames);
      const result = [nodeAndDefs, Object.keys(fragmentNames)];
      cachedFieldsAndFragmentNames.set(selectionSet, result);
      return result;
    }
    function getReferencedFieldsAndFragmentNames(context2, cachedFieldsAndFragmentNames, fragment) {
      const cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
      if (cached) {
        return cached;
      }
      const fragmentType = (0, _typeFromAST.typeFromAST)(context2.getSchema(), fragment.typeCondition);
      return getFieldsAndFragmentNames(context2, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
    }
    function _collectFieldsAndFragmentNames(context2, parentType, selectionSet, nodeAndDefs, fragmentNames) {
      for (const selection of selectionSet.selections) {
        switch (selection.kind) {
          case _kinds.Kind.FIELD: {
            const fieldName = selection.name.value;
            let fieldDef;
            if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
              fieldDef = parentType.getFields()[fieldName];
            }
            const responseName = selection.alias ? selection.alias.value : fieldName;
            if (!nodeAndDefs[responseName]) {
              nodeAndDefs[responseName] = [];
            }
            nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
            break;
          }
          case _kinds.Kind.FRAGMENT_SPREAD:
            fragmentNames[selection.name.value] = true;
            break;
          case _kinds.Kind.INLINE_FRAGMENT: {
            const typeCondition = selection.typeCondition;
            const inlineFragmentType = typeCondition ? (0, _typeFromAST.typeFromAST)(context2.getSchema(), typeCondition) : parentType;
            _collectFieldsAndFragmentNames(context2, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
            break;
          }
        }
      }
    }
    function subfieldConflicts(conflicts, responseName, node1, node2) {
      if (conflicts.length > 0) {
        return [
          [responseName, conflicts.map(([reason]) => reason)],
          [node1, ...conflicts.map(([, fields1]) => fields1).flat()],
          [node2, ...conflicts.map(([, , fields2]) => fields2).flat()]
        ];
      }
    }
    var PairSet = class {
      constructor() {
        this._data = /* @__PURE__ */ new Map();
      }
      has(a, b, areMutuallyExclusive) {
        var _this$_data$get;
        const [key1, key2] = a < b ? [a, b] : [b, a];
        const result = (_this$_data$get = this._data.get(key1)) === null || _this$_data$get === void 0 ? void 0 : _this$_data$get.get(key2);
        if (result === void 0) {
          return false;
        }
        return areMutuallyExclusive ? true : areMutuallyExclusive === result;
      }
      add(a, b, areMutuallyExclusive) {
        const [key1, key2] = a < b ? [a, b] : [b, a];
        const map = this._data.get(key1);
        if (map === void 0) {
          this._data.set(key1, /* @__PURE__ */ new Map([[key2, areMutuallyExclusive]]));
        } else {
          map.set(key2, areMutuallyExclusive);
        }
      }
    };
  }
});

// ../../node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.js
var require_PossibleFragmentSpreadsRule = __commonJS({
  "../../node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PossibleFragmentSpreadsRule = PossibleFragmentSpreadsRule;
    var _inspect = require_inspect();
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    var _typeComparators = require_typeComparators();
    var _typeFromAST = require_typeFromAST();
    function PossibleFragmentSpreadsRule(context2) {
      return {
        InlineFragment(node) {
          const fragType = context2.getType();
          const parentType = context2.getParentType();
          if ((0, _definition.isCompositeType)(fragType) && (0, _definition.isCompositeType)(parentType) && !(0, _typeComparators.doTypesOverlap)(context2.getSchema(), fragType, parentType)) {
            const parentTypeStr = (0, _inspect.inspect)(parentType);
            const fragTypeStr = (0, _inspect.inspect)(fragType);
            context2.reportError(new _GraphQLError.GraphQLError(`Fragment cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`, {
              nodes: node
            }));
          }
        },
        FragmentSpread(node) {
          const fragName = node.name.value;
          const fragType = getFragmentType(context2, fragName);
          const parentType = context2.getParentType();
          if (fragType && parentType && !(0, _typeComparators.doTypesOverlap)(context2.getSchema(), fragType, parentType)) {
            const parentTypeStr = (0, _inspect.inspect)(parentType);
            const fragTypeStr = (0, _inspect.inspect)(fragType);
            context2.reportError(new _GraphQLError.GraphQLError(`Fragment "${fragName}" cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`, {
              nodes: node
            }));
          }
        }
      };
    }
    function getFragmentType(context2, name) {
      const frag = context2.getFragment(name);
      if (frag) {
        const type = (0, _typeFromAST.typeFromAST)(context2.getSchema(), frag.typeCondition);
        if ((0, _definition.isCompositeType)(type)) {
          return type;
        }
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.js
var require_PossibleTypeExtensionsRule = __commonJS({
  "../../node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PossibleTypeExtensionsRule = PossibleTypeExtensionsRule;
    var _didYouMean = require_didYouMean();
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _suggestionList = require_suggestionList();
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _predicates = require_predicates();
    var _definition = require_definition();
    function PossibleTypeExtensionsRule(context2) {
      const schema = context2.getSchema();
      const definedTypes = /* @__PURE__ */ Object.create(null);
      for (const def of context2.getDocument().definitions) {
        if ((0, _predicates.isTypeDefinitionNode)(def)) {
          definedTypes[def.name.value] = def;
        }
      }
      return {
        ScalarTypeExtension: checkExtension,
        ObjectTypeExtension: checkExtension,
        InterfaceTypeExtension: checkExtension,
        UnionTypeExtension: checkExtension,
        EnumTypeExtension: checkExtension,
        InputObjectTypeExtension: checkExtension
      };
      function checkExtension(node) {
        const typeName = node.name.value;
        const defNode = definedTypes[typeName];
        const existingType = schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
        let expectedKind;
        if (defNode) {
          expectedKind = defKindToExtKind[defNode.kind];
        } else if (existingType) {
          expectedKind = typeToExtKind(existingType);
        }
        if (expectedKind) {
          if (expectedKind !== node.kind) {
            const kindStr = extensionKindToTypeName(node.kind);
            context2.reportError(new _GraphQLError.GraphQLError(`Cannot extend non-${kindStr} type "${typeName}".`, {
              nodes: defNode ? [defNode, node] : node
            }));
          }
        } else {
          const allTypeNames = Object.keys({
            ...definedTypes,
            ...schema === null || schema === void 0 ? void 0 : schema.getTypeMap()
          });
          const suggestedTypes = (0, _suggestionList.suggestionList)(typeName, allTypeNames);
          context2.reportError(new _GraphQLError.GraphQLError(`Cannot extend type "${typeName}" because it is not defined.` + (0, _didYouMean.didYouMean)(suggestedTypes), {
            nodes: node.name
          }));
        }
      }
    }
    var defKindToExtKind = {
      [_kinds.Kind.SCALAR_TYPE_DEFINITION]: _kinds.Kind.SCALAR_TYPE_EXTENSION,
      [_kinds.Kind.OBJECT_TYPE_DEFINITION]: _kinds.Kind.OBJECT_TYPE_EXTENSION,
      [_kinds.Kind.INTERFACE_TYPE_DEFINITION]: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
      [_kinds.Kind.UNION_TYPE_DEFINITION]: _kinds.Kind.UNION_TYPE_EXTENSION,
      [_kinds.Kind.ENUM_TYPE_DEFINITION]: _kinds.Kind.ENUM_TYPE_EXTENSION,
      [_kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION]: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION
    };
    function typeToExtKind(type) {
      if ((0, _definition.isScalarType)(type)) {
        return _kinds.Kind.SCALAR_TYPE_EXTENSION;
      }
      if ((0, _definition.isObjectType)(type)) {
        return _kinds.Kind.OBJECT_TYPE_EXTENSION;
      }
      if ((0, _definition.isInterfaceType)(type)) {
        return _kinds.Kind.INTERFACE_TYPE_EXTENSION;
      }
      if ((0, _definition.isUnionType)(type)) {
        return _kinds.Kind.UNION_TYPE_EXTENSION;
      }
      if ((0, _definition.isEnumType)(type)) {
        return _kinds.Kind.ENUM_TYPE_EXTENSION;
      }
      if ((0, _definition.isInputObjectType)(type)) {
        return _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
      }
      (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
    }
    function extensionKindToTypeName(kind) {
      switch (kind) {
        case _kinds.Kind.SCALAR_TYPE_EXTENSION:
          return "scalar";
        case _kinds.Kind.OBJECT_TYPE_EXTENSION:
          return "object";
        case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
          return "interface";
        case _kinds.Kind.UNION_TYPE_EXTENSION:
          return "union";
        case _kinds.Kind.ENUM_TYPE_EXTENSION:
          return "enum";
        case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
          return "input object";
        default:
          (0, _invariant.invariant)(false, "Unexpected kind: " + (0, _inspect.inspect)(kind));
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.js
var require_ProvidedRequiredArgumentsRule = __commonJS({
  "../../node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ProvidedRequiredArgumentsOnDirectivesRule = ProvidedRequiredArgumentsOnDirectivesRule;
    exports.ProvidedRequiredArgumentsRule = ProvidedRequiredArgumentsRule;
    var _inspect = require_inspect();
    var _keyMap = require_keyMap();
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _definition = require_definition();
    var _directives = require_directives();
    function ProvidedRequiredArgumentsRule(context2) {
      return {
        ...ProvidedRequiredArgumentsOnDirectivesRule(context2),
        Field: {
          leave(fieldNode) {
            var _fieldNode$arguments;
            const fieldDef = context2.getFieldDef();
            if (!fieldDef) {
              return false;
            }
            const providedArgs = new Set((_fieldNode$arguments = fieldNode.arguments) === null || _fieldNode$arguments === void 0 ? void 0 : _fieldNode$arguments.map((arg) => arg.name.value));
            for (const argDef of fieldDef.args) {
              if (!providedArgs.has(argDef.name) && (0, _definition.isRequiredArgument)(argDef)) {
                const argTypeStr = (0, _inspect.inspect)(argDef.type);
                context2.reportError(new _GraphQLError.GraphQLError(`Field "${fieldDef.name}" argument "${argDef.name}" of type "${argTypeStr}" is required, but it was not provided.`, {
                  nodes: fieldNode
                }));
              }
            }
          }
        }
      };
    }
    function ProvidedRequiredArgumentsOnDirectivesRule(context2) {
      var _schema$getDirectives;
      const requiredArgsMap = /* @__PURE__ */ Object.create(null);
      const schema = context2.getSchema();
      const definedDirectives = (_schema$getDirectives = schema === null || schema === void 0 ? void 0 : schema.getDirectives()) !== null && _schema$getDirectives !== void 0 ? _schema$getDirectives : _directives.specifiedDirectives;
      for (const directive of definedDirectives) {
        requiredArgsMap[directive.name] = (0, _keyMap.keyMap)(directive.args.filter(_definition.isRequiredArgument), (arg) => arg.name);
      }
      const astDefinitions = context2.getDocument().definitions;
      for (const def of astDefinitions) {
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          var _def$arguments;
          const argNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
          requiredArgsMap[def.name.value] = (0, _keyMap.keyMap)(argNodes.filter(isRequiredArgumentNode), (arg) => arg.name.value);
        }
      }
      return {
        Directive: {
          leave(directiveNode) {
            const directiveName = directiveNode.name.value;
            const requiredArgs = requiredArgsMap[directiveName];
            if (requiredArgs) {
              var _directiveNode$argume;
              const argNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
              const argNodeMap = new Set(argNodes.map((arg) => arg.name.value));
              for (const [argName, argDef] of Object.entries(requiredArgs)) {
                if (!argNodeMap.has(argName)) {
                  const argType = (0, _definition.isType)(argDef.type) ? (0, _inspect.inspect)(argDef.type) : (0, _printer.print)(argDef.type);
                  context2.reportError(new _GraphQLError.GraphQLError(`Directive "@${directiveName}" argument "${argName}" of type "${argType}" is required, but it was not provided.`, {
                    nodes: directiveNode
                  }));
                }
              }
            }
          }
        }
      };
    }
    function isRequiredArgumentNode(arg) {
      return arg.type.kind === _kinds.Kind.NON_NULL_TYPE && arg.defaultValue == null;
    }
  }
});

// ../../node_modules/graphql/validation/rules/ScalarLeafsRule.js
var require_ScalarLeafsRule = __commonJS({
  "../../node_modules/graphql/validation/rules/ScalarLeafsRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ScalarLeafsRule = ScalarLeafsRule;
    var _inspect = require_inspect();
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function ScalarLeafsRule(context2) {
      return {
        Field(node) {
          const type = context2.getType();
          const selectionSet = node.selectionSet;
          if (type) {
            if ((0, _definition.isLeafType)((0, _definition.getNamedType)(type))) {
              if (selectionSet) {
                const fieldName = node.name.value;
                const typeStr = (0, _inspect.inspect)(type);
                context2.reportError(new _GraphQLError.GraphQLError(`Field "${fieldName}" must not have a selection since type "${typeStr}" has no subfields.`, {
                  nodes: selectionSet
                }));
              }
            } else if (!selectionSet) {
              const fieldName = node.name.value;
              const typeStr = (0, _inspect.inspect)(type);
              context2.reportError(new _GraphQLError.GraphQLError(`Field "${fieldName}" of type "${typeStr}" must have a selection of subfields. Did you mean "${fieldName} { ... }"?`, {
                nodes: node
              }));
            }
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/jsutils/printPathArray.js
var require_printPathArray = __commonJS({
  "../../node_modules/graphql/jsutils/printPathArray.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printPathArray = printPathArray;
    function printPathArray(path) {
      return path.map((key) => typeof key === "number" ? "[" + key.toString() + "]" : "." + key).join("");
    }
  }
});

// ../../node_modules/graphql/jsutils/Path.js
var require_Path = __commonJS({
  "../../node_modules/graphql/jsutils/Path.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPath = addPath;
    exports.pathToArray = pathToArray;
    function addPath(prev, key, typename) {
      return {
        prev,
        key,
        typename
      };
    }
    function pathToArray(path) {
      const flattened = [];
      let curr = path;
      while (curr) {
        flattened.push(curr.key);
        curr = curr.prev;
      }
      return flattened.reverse();
    }
  }
});

// ../../node_modules/graphql/utilities/coerceInputValue.js
var require_coerceInputValue = __commonJS({
  "../../node_modules/graphql/utilities/coerceInputValue.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.coerceInputValue = coerceInputValue;
    var _didYouMean = require_didYouMean();
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _isIterableObject = require_isIterableObject();
    var _isObjectLike = require_isObjectLike();
    var _Path = require_Path();
    var _printPathArray = require_printPathArray();
    var _suggestionList = require_suggestionList();
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function coerceInputValue(inputValue, type, onError = defaultOnError) {
      return coerceInputValueImpl(inputValue, type, onError, void 0);
    }
    function defaultOnError(path, invalidValue, error) {
      let errorPrefix = "Invalid value " + (0, _inspect.inspect)(invalidValue);
      if (path.length > 0) {
        errorPrefix += ` at "value${(0, _printPathArray.printPathArray)(path)}"`;
      }
      error.message = errorPrefix + ": " + error.message;
      throw error;
    }
    function coerceInputValueImpl(inputValue, type, onError, path) {
      if ((0, _definition.isNonNullType)(type)) {
        if (inputValue != null) {
          return coerceInputValueImpl(inputValue, type.ofType, onError, path);
        }
        onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Expected non-nullable type "${(0, _inspect.inspect)(type)}" not to be null.`));
        return;
      }
      if (inputValue == null) {
        return null;
      }
      if ((0, _definition.isListType)(type)) {
        const itemType = type.ofType;
        if ((0, _isIterableObject.isIterableObject)(inputValue)) {
          return Array.from(inputValue, (itemValue, index) => {
            const itemPath = (0, _Path.addPath)(path, index, void 0);
            return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
          });
        }
        return [coerceInputValueImpl(inputValue, itemType, onError, path)];
      }
      if ((0, _definition.isInputObjectType)(type)) {
        if (!(0, _isObjectLike.isObjectLike)(inputValue)) {
          onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Expected type "${type.name}" to be an object.`));
          return;
        }
        const coercedValue = {};
        const fieldDefs = type.getFields();
        for (const field of Object.values(fieldDefs)) {
          const fieldValue = inputValue[field.name];
          if (fieldValue === void 0) {
            if (field.defaultValue !== void 0) {
              coercedValue[field.name] = field.defaultValue;
            } else if ((0, _definition.isNonNullType)(field.type)) {
              const typeStr = (0, _inspect.inspect)(field.type);
              onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Field "${field.name}" of required type "${typeStr}" was not provided.`));
            }
            continue;
          }
          coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, (0, _Path.addPath)(path, field.name, type.name));
        }
        for (const fieldName of Object.keys(inputValue)) {
          if (!fieldDefs[fieldName]) {
            const suggestions = (0, _suggestionList.suggestionList)(fieldName, Object.keys(type.getFields()));
            onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Field "${fieldName}" is not defined by type "${type.name}".` + (0, _didYouMean.didYouMean)(suggestions)));
          }
        }
        return coercedValue;
      }
      if ((0, _definition.isLeafType)(type)) {
        let parseResult;
        try {
          parseResult = type.parseValue(inputValue);
        } catch (error) {
          if (error instanceof _GraphQLError.GraphQLError) {
            onError((0, _Path.pathToArray)(path), inputValue, error);
          } else {
            onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Expected type "${type.name}". ` + error.message, {
              originalError: error
            }));
          }
          return;
        }
        if (parseResult === void 0) {
          onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError(`Expected type "${type.name}".`));
        }
        return parseResult;
      }
      (0, _invariant.invariant)(false, "Unexpected input type: " + (0, _inspect.inspect)(type));
    }
  }
});

// ../../node_modules/graphql/utilities/valueFromAST.js
var require_valueFromAST = __commonJS({
  "../../node_modules/graphql/utilities/valueFromAST.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.valueFromAST = valueFromAST;
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _keyMap = require_keyMap();
    var _kinds = require_kinds();
    var _definition = require_definition();
    function valueFromAST(valueNode, type, variables) {
      if (!valueNode) {
        return;
      }
      if (valueNode.kind === _kinds.Kind.VARIABLE) {
        const variableName = valueNode.name.value;
        if (variables == null || variables[variableName] === void 0) {
          return;
        }
        const variableValue = variables[variableName];
        if (variableValue === null && (0, _definition.isNonNullType)(type)) {
          return;
        }
        return variableValue;
      }
      if ((0, _definition.isNonNullType)(type)) {
        if (valueNode.kind === _kinds.Kind.NULL) {
          return;
        }
        return valueFromAST(valueNode, type.ofType, variables);
      }
      if (valueNode.kind === _kinds.Kind.NULL) {
        return null;
      }
      if ((0, _definition.isListType)(type)) {
        const itemType = type.ofType;
        if (valueNode.kind === _kinds.Kind.LIST) {
          const coercedValues = [];
          for (const itemNode of valueNode.values) {
            if (isMissingVariable(itemNode, variables)) {
              if ((0, _definition.isNonNullType)(itemType)) {
                return;
              }
              coercedValues.push(null);
            } else {
              const itemValue = valueFromAST(itemNode, itemType, variables);
              if (itemValue === void 0) {
                return;
              }
              coercedValues.push(itemValue);
            }
          }
          return coercedValues;
        }
        const coercedValue = valueFromAST(valueNode, itemType, variables);
        if (coercedValue === void 0) {
          return;
        }
        return [coercedValue];
      }
      if ((0, _definition.isInputObjectType)(type)) {
        if (valueNode.kind !== _kinds.Kind.OBJECT) {
          return;
        }
        const coercedObj = /* @__PURE__ */ Object.create(null);
        const fieldNodes = (0, _keyMap.keyMap)(valueNode.fields, (field) => field.name.value);
        for (const field of Object.values(type.getFields())) {
          const fieldNode = fieldNodes[field.name];
          if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
            if (field.defaultValue !== void 0) {
              coercedObj[field.name] = field.defaultValue;
            } else if ((0, _definition.isNonNullType)(field.type)) {
              return;
            }
            continue;
          }
          const fieldValue = valueFromAST(fieldNode.value, field.type, variables);
          if (fieldValue === void 0) {
            return;
          }
          coercedObj[field.name] = fieldValue;
        }
        return coercedObj;
      }
      if ((0, _definition.isLeafType)(type)) {
        let result;
        try {
          result = type.parseLiteral(valueNode, variables);
        } catch (_error) {
          return;
        }
        if (result === void 0) {
          return;
        }
        return result;
      }
      (0, _invariant.invariant)(false, "Unexpected input type: " + (0, _inspect.inspect)(type));
    }
    function isMissingVariable(valueNode, variables) {
      return valueNode.kind === _kinds.Kind.VARIABLE && (variables == null || variables[valueNode.name.value] === void 0);
    }
  }
});

// ../../node_modules/graphql/execution/values.js
var require_values = __commonJS({
  "../../node_modules/graphql/execution/values.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getArgumentValues = getArgumentValues;
    exports.getDirectiveValues = getDirectiveValues;
    exports.getVariableValues = getVariableValues;
    var _inspect = require_inspect();
    var _keyMap = require_keyMap();
    var _printPathArray = require_printPathArray();
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _definition = require_definition();
    var _coerceInputValue = require_coerceInputValue();
    var _typeFromAST = require_typeFromAST();
    var _valueFromAST = require_valueFromAST();
    function getVariableValues(schema, varDefNodes, inputs, options) {
      const errors = [];
      const maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors;
      try {
        const coerced = coerceVariableValues(schema, varDefNodes, inputs, (error) => {
          if (maxErrors != null && errors.length >= maxErrors) {
            throw new _GraphQLError.GraphQLError("Too many errors processing variables, error limit reached. Execution aborted.");
          }
          errors.push(error);
        });
        if (errors.length === 0) {
          return {
            coerced
          };
        }
      } catch (error) {
        errors.push(error);
      }
      return {
        errors
      };
    }
    function coerceVariableValues(schema, varDefNodes, inputs, onError) {
      const coercedValues = {};
      for (const varDefNode of varDefNodes) {
        const varName = varDefNode.variable.name.value;
        const varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
        if (!(0, _definition.isInputType)(varType)) {
          const varTypeStr = (0, _printer.print)(varDefNode.type);
          onError(new _GraphQLError.GraphQLError(`Variable "$${varName}" expected value of type "${varTypeStr}" which cannot be used as an input type.`, {
            nodes: varDefNode.type
          }));
          continue;
        }
        if (!hasOwnProperty(inputs, varName)) {
          if (varDefNode.defaultValue) {
            coercedValues[varName] = (0, _valueFromAST.valueFromAST)(varDefNode.defaultValue, varType);
          } else if ((0, _definition.isNonNullType)(varType)) {
            const varTypeStr = (0, _inspect.inspect)(varType);
            onError(new _GraphQLError.GraphQLError(`Variable "$${varName}" of required type "${varTypeStr}" was not provided.`, {
              nodes: varDefNode
            }));
          }
          continue;
        }
        const value = inputs[varName];
        if (value === null && (0, _definition.isNonNullType)(varType)) {
          const varTypeStr = (0, _inspect.inspect)(varType);
          onError(new _GraphQLError.GraphQLError(`Variable "$${varName}" of non-null type "${varTypeStr}" must not be null.`, {
            nodes: varDefNode
          }));
          continue;
        }
        coercedValues[varName] = (0, _coerceInputValue.coerceInputValue)(value, varType, (path, invalidValue, error) => {
          let prefix = `Variable "$${varName}" got invalid value ` + (0, _inspect.inspect)(invalidValue);
          if (path.length > 0) {
            prefix += ` at "${varName}${(0, _printPathArray.printPathArray)(path)}"`;
          }
          onError(new _GraphQLError.GraphQLError(prefix + "; " + error.message, {
            nodes: varDefNode,
            originalError: error.originalError
          }));
        });
      }
      return coercedValues;
    }
    function getArgumentValues(def, node, variableValues) {
      var _node$arguments;
      const coercedValues = {};
      const argumentNodes = (_node$arguments = node.arguments) !== null && _node$arguments !== void 0 ? _node$arguments : [];
      const argNodeMap = (0, _keyMap.keyMap)(argumentNodes, (arg) => arg.name.value);
      for (const argDef of def.args) {
        const name = argDef.name;
        const argType = argDef.type;
        const argumentNode = argNodeMap[name];
        if (!argumentNode) {
          if (argDef.defaultValue !== void 0) {
            coercedValues[name] = argDef.defaultValue;
          } else if ((0, _definition.isNonNullType)(argType)) {
            throw new _GraphQLError.GraphQLError(`Argument "${name}" of required type "${(0, _inspect.inspect)(argType)}" was not provided.`, {
              nodes: node
            });
          }
          continue;
        }
        const valueNode = argumentNode.value;
        let isNull = valueNode.kind === _kinds.Kind.NULL;
        if (valueNode.kind === _kinds.Kind.VARIABLE) {
          const variableName = valueNode.name.value;
          if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
            if (argDef.defaultValue !== void 0) {
              coercedValues[name] = argDef.defaultValue;
            } else if ((0, _definition.isNonNullType)(argType)) {
              throw new _GraphQLError.GraphQLError(`Argument "${name}" of required type "${(0, _inspect.inspect)(argType)}" was provided the variable "$${variableName}" which was not provided a runtime value.`, {
                nodes: valueNode
              });
            }
            continue;
          }
          isNull = variableValues[variableName] == null;
        }
        if (isNull && (0, _definition.isNonNullType)(argType)) {
          throw new _GraphQLError.GraphQLError(`Argument "${name}" of non-null type "${(0, _inspect.inspect)(argType)}" must not be null.`, {
            nodes: valueNode
          });
        }
        const coercedValue = (0, _valueFromAST.valueFromAST)(valueNode, argType, variableValues);
        if (coercedValue === void 0) {
          throw new _GraphQLError.GraphQLError(`Argument "${name}" has invalid value ${(0, _printer.print)(valueNode)}.`, {
            nodes: valueNode
          });
        }
        coercedValues[name] = coercedValue;
      }
      return coercedValues;
    }
    function getDirectiveValues(directiveDef, node, variableValues) {
      var _node$directives;
      const directiveNode = (_node$directives = node.directives) === null || _node$directives === void 0 ? void 0 : _node$directives.find((directive) => directive.name.value === directiveDef.name);
      if (directiveNode) {
        return getArgumentValues(directiveDef, directiveNode, variableValues);
      }
    }
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  }
});

// ../../node_modules/graphql/execution/collectFields.js
var require_collectFields = __commonJS({
  "../../node_modules/graphql/execution/collectFields.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.collectFields = collectFields;
    exports.collectSubfields = collectSubfields;
    var _kinds = require_kinds();
    var _definition = require_definition();
    var _directives = require_directives();
    var _typeFromAST = require_typeFromAST();
    var _values = require_values();
    function collectFields(schema, fragments, variableValues, runtimeType, selectionSet) {
      const fields = /* @__PURE__ */ new Map();
      collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, /* @__PURE__ */ new Set());
      return fields;
    }
    function collectSubfields(schema, fragments, variableValues, returnType, fieldNodes) {
      const subFieldNodes = /* @__PURE__ */ new Map();
      const visitedFragmentNames = /* @__PURE__ */ new Set();
      for (const node of fieldNodes) {
        if (node.selectionSet) {
          collectFieldsImpl(schema, fragments, variableValues, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
        }
      }
      return subFieldNodes;
    }
    function collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, visitedFragmentNames) {
      for (const selection of selectionSet.selections) {
        switch (selection.kind) {
          case _kinds.Kind.FIELD: {
            if (!shouldIncludeNode(variableValues, selection)) {
              continue;
            }
            const name = getFieldEntryKey(selection);
            const fieldList = fields.get(name);
            if (fieldList !== void 0) {
              fieldList.push(selection);
            } else {
              fields.set(name, [selection]);
            }
            break;
          }
          case _kinds.Kind.INLINE_FRAGMENT: {
            if (!shouldIncludeNode(variableValues, selection) || !doesFragmentConditionMatch(schema, selection, runtimeType)) {
              continue;
            }
            collectFieldsImpl(schema, fragments, variableValues, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
            break;
          }
          case _kinds.Kind.FRAGMENT_SPREAD: {
            const fragName = selection.name.value;
            if (visitedFragmentNames.has(fragName) || !shouldIncludeNode(variableValues, selection)) {
              continue;
            }
            visitedFragmentNames.add(fragName);
            const fragment = fragments[fragName];
            if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
              continue;
            }
            collectFieldsImpl(schema, fragments, variableValues, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
            break;
          }
        }
      }
    }
    function shouldIncludeNode(variableValues, node) {
      const skip = (0, _values.getDirectiveValues)(_directives.GraphQLSkipDirective, node, variableValues);
      if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
        return false;
      }
      const include = (0, _values.getDirectiveValues)(_directives.GraphQLIncludeDirective, node, variableValues);
      if ((include === null || include === void 0 ? void 0 : include.if) === false) {
        return false;
      }
      return true;
    }
    function doesFragmentConditionMatch(schema, fragment, type) {
      const typeConditionNode = fragment.typeCondition;
      if (!typeConditionNode) {
        return true;
      }
      const conditionalType = (0, _typeFromAST.typeFromAST)(schema, typeConditionNode);
      if (conditionalType === type) {
        return true;
      }
      if ((0, _definition.isAbstractType)(conditionalType)) {
        return schema.isSubType(conditionalType, type);
      }
      return false;
    }
    function getFieldEntryKey(node) {
      return node.alias ? node.alias.value : node.name.value;
    }
  }
});

// ../../node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.js
var require_SingleFieldSubscriptionsRule = __commonJS({
  "../../node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SingleFieldSubscriptionsRule = SingleFieldSubscriptionsRule;
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _collectFields = require_collectFields();
    function SingleFieldSubscriptionsRule(context2) {
      return {
        OperationDefinition(node) {
          if (node.operation === "subscription") {
            const schema = context2.getSchema();
            const subscriptionType = schema.getSubscriptionType();
            if (subscriptionType) {
              const operationName = node.name ? node.name.value : null;
              const variableValues = /* @__PURE__ */ Object.create(null);
              const document2 = context2.getDocument();
              const fragments = /* @__PURE__ */ Object.create(null);
              for (const definition of document2.definitions) {
                if (definition.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
                  fragments[definition.name.value] = definition;
                }
              }
              const fields = (0, _collectFields.collectFields)(schema, fragments, variableValues, subscriptionType, node.selectionSet);
              if (fields.size > 1) {
                const fieldSelectionLists = [...fields.values()];
                const extraFieldSelectionLists = fieldSelectionLists.slice(1);
                const extraFieldSelections = extraFieldSelectionLists.flat();
                context2.reportError(new _GraphQLError.GraphQLError(operationName != null ? `Subscription "${operationName}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.", {
                  nodes: extraFieldSelections
                }));
              }
              for (const fieldNodes of fields.values()) {
                const field = fieldNodes[0];
                const fieldName = field.name.value;
                if (fieldName.startsWith("__")) {
                  context2.reportError(new _GraphQLError.GraphQLError(operationName != null ? `Subscription "${operationName}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.", {
                    nodes: fieldNodes
                  }));
                }
              }
            }
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/jsutils/groupBy.js
var require_groupBy = __commonJS({
  "../../node_modules/graphql/jsutils/groupBy.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.groupBy = groupBy;
    function groupBy(list, keyFn) {
      const result = /* @__PURE__ */ new Map();
      for (const item of list) {
        const key = keyFn(item);
        const group = result.get(key);
        if (group === void 0) {
          result.set(key, [item]);
        } else {
          group.push(item);
        }
      }
      return result;
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueArgumentDefinitionNamesRule.js
var require_UniqueArgumentDefinitionNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueArgumentDefinitionNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueArgumentDefinitionNamesRule = UniqueArgumentDefinitionNamesRule;
    var _groupBy = require_groupBy();
    var _GraphQLError = require_GraphQLError();
    function UniqueArgumentDefinitionNamesRule(context2) {
      return {
        DirectiveDefinition(directiveNode) {
          var _directiveNode$argume;
          const argumentNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
          return checkArgUniqueness(`@${directiveNode.name.value}`, argumentNodes);
        },
        InterfaceTypeDefinition: checkArgUniquenessPerField,
        InterfaceTypeExtension: checkArgUniquenessPerField,
        ObjectTypeDefinition: checkArgUniquenessPerField,
        ObjectTypeExtension: checkArgUniquenessPerField
      };
      function checkArgUniquenessPerField(typeNode) {
        var _typeNode$fields;
        const typeName = typeNode.name.value;
        const fieldNodes = (_typeNode$fields = typeNode.fields) !== null && _typeNode$fields !== void 0 ? _typeNode$fields : [];
        for (const fieldDef of fieldNodes) {
          var _fieldDef$arguments;
          const fieldName = fieldDef.name.value;
          const argumentNodes = (_fieldDef$arguments = fieldDef.arguments) !== null && _fieldDef$arguments !== void 0 ? _fieldDef$arguments : [];
          checkArgUniqueness(`${typeName}.${fieldName}`, argumentNodes);
        }
        return false;
      }
      function checkArgUniqueness(parentName, argumentNodes) {
        const seenArgs = (0, _groupBy.groupBy)(argumentNodes, (arg) => arg.name.value);
        for (const [argName, argNodes] of seenArgs) {
          if (argNodes.length > 1) {
            context2.reportError(new _GraphQLError.GraphQLError(`Argument "${parentName}(${argName}:)" can only be defined once.`, {
              nodes: argNodes.map((node) => node.name)
            }));
          }
        }
        return false;
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueArgumentNamesRule.js
var require_UniqueArgumentNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueArgumentNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueArgumentNamesRule = UniqueArgumentNamesRule;
    var _groupBy = require_groupBy();
    var _GraphQLError = require_GraphQLError();
    function UniqueArgumentNamesRule(context2) {
      return {
        Field: checkArgUniqueness,
        Directive: checkArgUniqueness
      };
      function checkArgUniqueness(parentNode) {
        var _parentNode$arguments;
        const argumentNodes = (_parentNode$arguments = parentNode.arguments) !== null && _parentNode$arguments !== void 0 ? _parentNode$arguments : [];
        const seenArgs = (0, _groupBy.groupBy)(argumentNodes, (arg) => arg.name.value);
        for (const [argName, argNodes] of seenArgs) {
          if (argNodes.length > 1) {
            context2.reportError(new _GraphQLError.GraphQLError(`There can be only one argument named "${argName}".`, {
              nodes: argNodes.map((node) => node.name)
            }));
          }
        }
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.js
var require_UniqueDirectiveNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueDirectiveNamesRule = UniqueDirectiveNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueDirectiveNamesRule(context2) {
      const knownDirectiveNames = /* @__PURE__ */ Object.create(null);
      const schema = context2.getSchema();
      return {
        DirectiveDefinition(node) {
          const directiveName = node.name.value;
          if (schema !== null && schema !== void 0 && schema.getDirective(directiveName)) {
            context2.reportError(new _GraphQLError.GraphQLError(`Directive "@${directiveName}" already exists in the schema. It cannot be redefined.`, {
              nodes: node.name
            }));
            return;
          }
          if (knownDirectiveNames[directiveName]) {
            context2.reportError(new _GraphQLError.GraphQLError(`There can be only one directive named "@${directiveName}".`, {
              nodes: [knownDirectiveNames[directiveName], node.name]
            }));
          } else {
            knownDirectiveNames[directiveName] = node.name;
          }
          return false;
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.js
var require_UniqueDirectivesPerLocationRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocationRule;
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _predicates = require_predicates();
    var _directives = require_directives();
    function UniqueDirectivesPerLocationRule(context2) {
      const uniqueDirectiveMap = /* @__PURE__ */ Object.create(null);
      const schema = context2.getSchema();
      const definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
      for (const directive of definedDirectives) {
        uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
      }
      const astDefinitions = context2.getDocument().definitions;
      for (const def of astDefinitions) {
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          uniqueDirectiveMap[def.name.value] = !def.repeatable;
        }
      }
      const schemaDirectives = /* @__PURE__ */ Object.create(null);
      const typeDirectivesMap = /* @__PURE__ */ Object.create(null);
      return {
        enter(node) {
          if (!("directives" in node) || !node.directives) {
            return;
          }
          let seenDirectives;
          if (node.kind === _kinds.Kind.SCHEMA_DEFINITION || node.kind === _kinds.Kind.SCHEMA_EXTENSION) {
            seenDirectives = schemaDirectives;
          } else if ((0, _predicates.isTypeDefinitionNode)(node) || (0, _predicates.isTypeExtensionNode)(node)) {
            const typeName = node.name.value;
            seenDirectives = typeDirectivesMap[typeName];
            if (seenDirectives === void 0) {
              typeDirectivesMap[typeName] = seenDirectives = /* @__PURE__ */ Object.create(null);
            }
          } else {
            seenDirectives = /* @__PURE__ */ Object.create(null);
          }
          for (const directive of node.directives) {
            const directiveName = directive.name.value;
            if (uniqueDirectiveMap[directiveName]) {
              if (seenDirectives[directiveName]) {
                context2.reportError(new _GraphQLError.GraphQLError(`The directive "@${directiveName}" can only be used once at this location.`, {
                  nodes: [seenDirectives[directiveName], directive]
                }));
              } else {
                seenDirectives[directiveName] = directive;
              }
            }
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.js
var require_UniqueEnumValueNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueEnumValueNamesRule = UniqueEnumValueNamesRule;
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function UniqueEnumValueNamesRule(context2) {
      const schema = context2.getSchema();
      const existingTypeMap = schema ? schema.getTypeMap() : /* @__PURE__ */ Object.create(null);
      const knownValueNames = /* @__PURE__ */ Object.create(null);
      return {
        EnumTypeDefinition: checkValueUniqueness,
        EnumTypeExtension: checkValueUniqueness
      };
      function checkValueUniqueness(node) {
        var _node$values;
        const typeName = node.name.value;
        if (!knownValueNames[typeName]) {
          knownValueNames[typeName] = /* @__PURE__ */ Object.create(null);
        }
        const valueNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
        const valueNames = knownValueNames[typeName];
        for (const valueDef of valueNodes) {
          const valueName = valueDef.name.value;
          const existingType = existingTypeMap[typeName];
          if ((0, _definition.isEnumType)(existingType) && existingType.getValue(valueName)) {
            context2.reportError(new _GraphQLError.GraphQLError(`Enum value "${typeName}.${valueName}" already exists in the schema. It cannot also be defined in this type extension.`, {
              nodes: valueDef.name
            }));
          } else if (valueNames[valueName]) {
            context2.reportError(new _GraphQLError.GraphQLError(`Enum value "${typeName}.${valueName}" can only be defined once.`, {
              nodes: [valueNames[valueName], valueDef.name]
            }));
          } else {
            valueNames[valueName] = valueDef.name;
          }
        }
        return false;
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.js
var require_UniqueFieldDefinitionNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueFieldDefinitionNamesRule = UniqueFieldDefinitionNamesRule;
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function UniqueFieldDefinitionNamesRule(context2) {
      const schema = context2.getSchema();
      const existingTypeMap = schema ? schema.getTypeMap() : /* @__PURE__ */ Object.create(null);
      const knownFieldNames = /* @__PURE__ */ Object.create(null);
      return {
        InputObjectTypeDefinition: checkFieldUniqueness,
        InputObjectTypeExtension: checkFieldUniqueness,
        InterfaceTypeDefinition: checkFieldUniqueness,
        InterfaceTypeExtension: checkFieldUniqueness,
        ObjectTypeDefinition: checkFieldUniqueness,
        ObjectTypeExtension: checkFieldUniqueness
      };
      function checkFieldUniqueness(node) {
        var _node$fields;
        const typeName = node.name.value;
        if (!knownFieldNames[typeName]) {
          knownFieldNames[typeName] = /* @__PURE__ */ Object.create(null);
        }
        const fieldNodes = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
        const fieldNames = knownFieldNames[typeName];
        for (const fieldDef of fieldNodes) {
          const fieldName = fieldDef.name.value;
          if (hasField(existingTypeMap[typeName], fieldName)) {
            context2.reportError(new _GraphQLError.GraphQLError(`Field "${typeName}.${fieldName}" already exists in the schema. It cannot also be defined in this type extension.`, {
              nodes: fieldDef.name
            }));
          } else if (fieldNames[fieldName]) {
            context2.reportError(new _GraphQLError.GraphQLError(`Field "${typeName}.${fieldName}" can only be defined once.`, {
              nodes: [fieldNames[fieldName], fieldDef.name]
            }));
          } else {
            fieldNames[fieldName] = fieldDef.name;
          }
        }
        return false;
      }
    }
    function hasField(type, fieldName) {
      if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type) || (0, _definition.isInputObjectType)(type)) {
        return type.getFields()[fieldName] != null;
      }
      return false;
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueFragmentNamesRule.js
var require_UniqueFragmentNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueFragmentNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueFragmentNamesRule = UniqueFragmentNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueFragmentNamesRule(context2) {
      const knownFragmentNames = /* @__PURE__ */ Object.create(null);
      return {
        OperationDefinition: () => false,
        FragmentDefinition(node) {
          const fragmentName = node.name.value;
          if (knownFragmentNames[fragmentName]) {
            context2.reportError(new _GraphQLError.GraphQLError(`There can be only one fragment named "${fragmentName}".`, {
              nodes: [knownFragmentNames[fragmentName], node.name]
            }));
          } else {
            knownFragmentNames[fragmentName] = node.name;
          }
          return false;
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.js
var require_UniqueInputFieldNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueInputFieldNamesRule = UniqueInputFieldNamesRule;
    var _invariant = require_invariant2();
    var _GraphQLError = require_GraphQLError();
    function UniqueInputFieldNamesRule(context2) {
      const knownNameStack = [];
      let knownNames = /* @__PURE__ */ Object.create(null);
      return {
        ObjectValue: {
          enter() {
            knownNameStack.push(knownNames);
            knownNames = /* @__PURE__ */ Object.create(null);
          },
          leave() {
            const prevKnownNames = knownNameStack.pop();
            prevKnownNames || (0, _invariant.invariant)(false);
            knownNames = prevKnownNames;
          }
        },
        ObjectField(node) {
          const fieldName = node.name.value;
          if (knownNames[fieldName]) {
            context2.reportError(new _GraphQLError.GraphQLError(`There can be only one input field named "${fieldName}".`, {
              nodes: [knownNames[fieldName], node.name]
            }));
          } else {
            knownNames[fieldName] = node.name;
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueOperationNamesRule.js
var require_UniqueOperationNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueOperationNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueOperationNamesRule = UniqueOperationNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueOperationNamesRule(context2) {
      const knownOperationNames = /* @__PURE__ */ Object.create(null);
      return {
        OperationDefinition(node) {
          const operationName = node.name;
          if (operationName) {
            if (knownOperationNames[operationName.value]) {
              context2.reportError(new _GraphQLError.GraphQLError(`There can be only one operation named "${operationName.value}".`, {
                nodes: [
                  knownOperationNames[operationName.value],
                  operationName
                ]
              }));
            } else {
              knownOperationNames[operationName.value] = operationName;
            }
          }
          return false;
        },
        FragmentDefinition: () => false
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueOperationTypesRule.js
var require_UniqueOperationTypesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueOperationTypesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueOperationTypesRule = UniqueOperationTypesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueOperationTypesRule(context2) {
      const schema = context2.getSchema();
      const definedOperationTypes = /* @__PURE__ */ Object.create(null);
      const existingOperationTypes = schema ? {
        query: schema.getQueryType(),
        mutation: schema.getMutationType(),
        subscription: schema.getSubscriptionType()
      } : {};
      return {
        SchemaDefinition: checkOperationTypes,
        SchemaExtension: checkOperationTypes
      };
      function checkOperationTypes(node) {
        var _node$operationTypes;
        const operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
        for (const operationType of operationTypesNodes) {
          const operation = operationType.operation;
          const alreadyDefinedOperationType = definedOperationTypes[operation];
          if (existingOperationTypes[operation]) {
            context2.reportError(new _GraphQLError.GraphQLError(`Type for ${operation} already defined in the schema. It cannot be redefined.`, {
              nodes: operationType
            }));
          } else if (alreadyDefinedOperationType) {
            context2.reportError(new _GraphQLError.GraphQLError(`There can be only one ${operation} type in schema.`, {
              nodes: [alreadyDefinedOperationType, operationType]
            }));
          } else {
            definedOperationTypes[operation] = operationType;
          }
        }
        return false;
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueTypeNamesRule.js
var require_UniqueTypeNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueTypeNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueTypeNamesRule = UniqueTypeNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueTypeNamesRule(context2) {
      const knownTypeNames = /* @__PURE__ */ Object.create(null);
      const schema = context2.getSchema();
      return {
        ScalarTypeDefinition: checkTypeName,
        ObjectTypeDefinition: checkTypeName,
        InterfaceTypeDefinition: checkTypeName,
        UnionTypeDefinition: checkTypeName,
        EnumTypeDefinition: checkTypeName,
        InputObjectTypeDefinition: checkTypeName
      };
      function checkTypeName(node) {
        const typeName = node.name.value;
        if (schema !== null && schema !== void 0 && schema.getType(typeName)) {
          context2.reportError(new _GraphQLError.GraphQLError(`Type "${typeName}" already exists in the schema. It cannot also be defined in this type definition.`, {
            nodes: node.name
          }));
          return;
        }
        if (knownTypeNames[typeName]) {
          context2.reportError(new _GraphQLError.GraphQLError(`There can be only one type named "${typeName}".`, {
            nodes: [knownTypeNames[typeName], node.name]
          }));
        } else {
          knownTypeNames[typeName] = node.name;
        }
        return false;
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/UniqueVariableNamesRule.js
var require_UniqueVariableNamesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/UniqueVariableNamesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueVariableNamesRule = UniqueVariableNamesRule;
    var _groupBy = require_groupBy();
    var _GraphQLError = require_GraphQLError();
    function UniqueVariableNamesRule(context2) {
      return {
        OperationDefinition(operationNode) {
          var _operationNode$variab;
          const variableDefinitions = (_operationNode$variab = operationNode.variableDefinitions) !== null && _operationNode$variab !== void 0 ? _operationNode$variab : [];
          const seenVariableDefinitions = (0, _groupBy.groupBy)(variableDefinitions, (node) => node.variable.name.value);
          for (const [variableName, variableNodes] of seenVariableDefinitions) {
            if (variableNodes.length > 1) {
              context2.reportError(new _GraphQLError.GraphQLError(`There can be only one variable named "$${variableName}".`, {
                nodes: variableNodes.map((node) => node.variable.name)
              }));
            }
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.js
var require_ValuesOfCorrectTypeRule = __commonJS({
  "../../node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ValuesOfCorrectTypeRule = ValuesOfCorrectTypeRule;
    var _didYouMean = require_didYouMean();
    var _inspect = require_inspect();
    var _keyMap = require_keyMap();
    var _suggestionList = require_suggestionList();
    var _GraphQLError = require_GraphQLError();
    var _printer = require_printer();
    var _definition = require_definition();
    function ValuesOfCorrectTypeRule(context2) {
      return {
        ListValue(node) {
          const type = (0, _definition.getNullableType)(context2.getParentInputType());
          if (!(0, _definition.isListType)(type)) {
            isValidValueNode(context2, node);
            return false;
          }
        },
        ObjectValue(node) {
          const type = (0, _definition.getNamedType)(context2.getInputType());
          if (!(0, _definition.isInputObjectType)(type)) {
            isValidValueNode(context2, node);
            return false;
          }
          const fieldNodeMap = (0, _keyMap.keyMap)(node.fields, (field) => field.name.value);
          for (const fieldDef of Object.values(type.getFields())) {
            const fieldNode = fieldNodeMap[fieldDef.name];
            if (!fieldNode && (0, _definition.isRequiredInputField)(fieldDef)) {
              const typeStr = (0, _inspect.inspect)(fieldDef.type);
              context2.reportError(new _GraphQLError.GraphQLError(`Field "${type.name}.${fieldDef.name}" of required type "${typeStr}" was not provided.`, {
                nodes: node
              }));
            }
          }
        },
        ObjectField(node) {
          const parentType = (0, _definition.getNamedType)(context2.getParentInputType());
          const fieldType = context2.getInputType();
          if (!fieldType && (0, _definition.isInputObjectType)(parentType)) {
            const suggestions = (0, _suggestionList.suggestionList)(node.name.value, Object.keys(parentType.getFields()));
            context2.reportError(new _GraphQLError.GraphQLError(`Field "${node.name.value}" is not defined by type "${parentType.name}".` + (0, _didYouMean.didYouMean)(suggestions), {
              nodes: node
            }));
          }
        },
        NullValue(node) {
          const type = context2.getInputType();
          if ((0, _definition.isNonNullType)(type)) {
            context2.reportError(new _GraphQLError.GraphQLError(`Expected value of type "${(0, _inspect.inspect)(type)}", found ${(0, _printer.print)(node)}.`, {
              nodes: node
            }));
          }
        },
        EnumValue: (node) => isValidValueNode(context2, node),
        IntValue: (node) => isValidValueNode(context2, node),
        FloatValue: (node) => isValidValueNode(context2, node),
        StringValue: (node) => isValidValueNode(context2, node),
        BooleanValue: (node) => isValidValueNode(context2, node)
      };
    }
    function isValidValueNode(context2, node) {
      const locationType = context2.getInputType();
      if (!locationType) {
        return;
      }
      const type = (0, _definition.getNamedType)(locationType);
      if (!(0, _definition.isLeafType)(type)) {
        const typeStr = (0, _inspect.inspect)(locationType);
        context2.reportError(new _GraphQLError.GraphQLError(`Expected value of type "${typeStr}", found ${(0, _printer.print)(node)}.`, {
          nodes: node
        }));
        return;
      }
      try {
        const parseResult = type.parseLiteral(node, void 0);
        if (parseResult === void 0) {
          const typeStr = (0, _inspect.inspect)(locationType);
          context2.reportError(new _GraphQLError.GraphQLError(`Expected value of type "${typeStr}", found ${(0, _printer.print)(node)}.`, {
            nodes: node
          }));
        }
      } catch (error) {
        const typeStr = (0, _inspect.inspect)(locationType);
        if (error instanceof _GraphQLError.GraphQLError) {
          context2.reportError(error);
        } else {
          context2.reportError(new _GraphQLError.GraphQLError(`Expected value of type "${typeStr}", found ${(0, _printer.print)(node)}; ` + error.message, {
            nodes: node,
            originalError: error
          }));
        }
      }
    }
  }
});

// ../../node_modules/graphql/validation/rules/VariablesAreInputTypesRule.js
var require_VariablesAreInputTypesRule = __commonJS({
  "../../node_modules/graphql/validation/rules/VariablesAreInputTypesRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VariablesAreInputTypesRule = VariablesAreInputTypesRule;
    var _GraphQLError = require_GraphQLError();
    var _printer = require_printer();
    var _definition = require_definition();
    var _typeFromAST = require_typeFromAST();
    function VariablesAreInputTypesRule(context2) {
      return {
        VariableDefinition(node) {
          const type = (0, _typeFromAST.typeFromAST)(context2.getSchema(), node.type);
          if (type !== void 0 && !(0, _definition.isInputType)(type)) {
            const variableName = node.variable.name.value;
            const typeName = (0, _printer.print)(node.type);
            context2.reportError(new _GraphQLError.GraphQLError(`Variable "$${variableName}" cannot be non-input type "${typeName}".`, {
              nodes: node.type
            }));
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.js
var require_VariablesInAllowedPositionRule = __commonJS({
  "../../node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VariablesInAllowedPositionRule = VariablesInAllowedPositionRule;
    var _inspect = require_inspect();
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _definition = require_definition();
    var _typeComparators = require_typeComparators();
    var _typeFromAST = require_typeFromAST();
    function VariablesInAllowedPositionRule(context2) {
      let varDefMap = /* @__PURE__ */ Object.create(null);
      return {
        OperationDefinition: {
          enter() {
            varDefMap = /* @__PURE__ */ Object.create(null);
          },
          leave(operation) {
            const usages = context2.getRecursiveVariableUsages(operation);
            for (const { node, type, defaultValue } of usages) {
              const varName = node.name.value;
              const varDef = varDefMap[varName];
              if (varDef && type) {
                const schema = context2.getSchema();
                const varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);
                if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
                  const varTypeStr = (0, _inspect.inspect)(varType);
                  const typeStr = (0, _inspect.inspect)(type);
                  context2.reportError(new _GraphQLError.GraphQLError(`Variable "$${varName}" of type "${varTypeStr}" used in position expecting type "${typeStr}".`, {
                    nodes: [varDef, node]
                  }));
                }
              }
            }
          }
        },
        VariableDefinition(node) {
          varDefMap[node.variable.name.value] = node;
        }
      };
    }
    function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
      if ((0, _definition.isNonNullType)(locationType) && !(0, _definition.isNonNullType)(varType)) {
        const hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== _kinds.Kind.NULL;
        const hasLocationDefaultValue = locationDefaultValue !== void 0;
        if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
          return false;
        }
        const nullableLocationType = locationType.ofType;
        return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, nullableLocationType);
      }
      return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, locationType);
    }
  }
});

// ../../node_modules/graphql/validation/specifiedRules.js
var require_specifiedRules = __commonJS({
  "../../node_modules/graphql/validation/specifiedRules.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.specifiedSDLRules = exports.specifiedRules = void 0;
    var _ExecutableDefinitionsRule = require_ExecutableDefinitionsRule();
    var _FieldsOnCorrectTypeRule = require_FieldsOnCorrectTypeRule();
    var _FragmentsOnCompositeTypesRule = require_FragmentsOnCompositeTypesRule();
    var _KnownArgumentNamesRule = require_KnownArgumentNamesRule();
    var _KnownDirectivesRule = require_KnownDirectivesRule();
    var _KnownFragmentNamesRule = require_KnownFragmentNamesRule();
    var _KnownTypeNamesRule = require_KnownTypeNamesRule();
    var _LoneAnonymousOperationRule = require_LoneAnonymousOperationRule();
    var _LoneSchemaDefinitionRule = require_LoneSchemaDefinitionRule();
    var _NoFragmentCyclesRule = require_NoFragmentCyclesRule();
    var _NoUndefinedVariablesRule = require_NoUndefinedVariablesRule();
    var _NoUnusedFragmentsRule = require_NoUnusedFragmentsRule();
    var _NoUnusedVariablesRule = require_NoUnusedVariablesRule();
    var _OverlappingFieldsCanBeMergedRule = require_OverlappingFieldsCanBeMergedRule();
    var _PossibleFragmentSpreadsRule = require_PossibleFragmentSpreadsRule();
    var _PossibleTypeExtensionsRule = require_PossibleTypeExtensionsRule();
    var _ProvidedRequiredArgumentsRule = require_ProvidedRequiredArgumentsRule();
    var _ScalarLeafsRule = require_ScalarLeafsRule();
    var _SingleFieldSubscriptionsRule = require_SingleFieldSubscriptionsRule();
    var _UniqueArgumentDefinitionNamesRule = require_UniqueArgumentDefinitionNamesRule();
    var _UniqueArgumentNamesRule = require_UniqueArgumentNamesRule();
    var _UniqueDirectiveNamesRule = require_UniqueDirectiveNamesRule();
    var _UniqueDirectivesPerLocationRule = require_UniqueDirectivesPerLocationRule();
    var _UniqueEnumValueNamesRule = require_UniqueEnumValueNamesRule();
    var _UniqueFieldDefinitionNamesRule = require_UniqueFieldDefinitionNamesRule();
    var _UniqueFragmentNamesRule = require_UniqueFragmentNamesRule();
    var _UniqueInputFieldNamesRule = require_UniqueInputFieldNamesRule();
    var _UniqueOperationNamesRule = require_UniqueOperationNamesRule();
    var _UniqueOperationTypesRule = require_UniqueOperationTypesRule();
    var _UniqueTypeNamesRule = require_UniqueTypeNamesRule();
    var _UniqueVariableNamesRule = require_UniqueVariableNamesRule();
    var _ValuesOfCorrectTypeRule = require_ValuesOfCorrectTypeRule();
    var _VariablesAreInputTypesRule = require_VariablesAreInputTypesRule();
    var _VariablesInAllowedPositionRule = require_VariablesInAllowedPositionRule();
    var specifiedRules = Object.freeze([
      _ExecutableDefinitionsRule.ExecutableDefinitionsRule,
      _UniqueOperationNamesRule.UniqueOperationNamesRule,
      _LoneAnonymousOperationRule.LoneAnonymousOperationRule,
      _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule,
      _KnownTypeNamesRule.KnownTypeNamesRule,
      _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule,
      _VariablesAreInputTypesRule.VariablesAreInputTypesRule,
      _ScalarLeafsRule.ScalarLeafsRule,
      _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule,
      _UniqueFragmentNamesRule.UniqueFragmentNamesRule,
      _KnownFragmentNamesRule.KnownFragmentNamesRule,
      _NoUnusedFragmentsRule.NoUnusedFragmentsRule,
      _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule,
      _NoFragmentCyclesRule.NoFragmentCyclesRule,
      _UniqueVariableNamesRule.UniqueVariableNamesRule,
      _NoUndefinedVariablesRule.NoUndefinedVariablesRule,
      _NoUnusedVariablesRule.NoUnusedVariablesRule,
      _KnownDirectivesRule.KnownDirectivesRule,
      _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
      _KnownArgumentNamesRule.KnownArgumentNamesRule,
      _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
      _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule,
      _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule,
      _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule,
      _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule,
      _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule
    ]);
    exports.specifiedRules = specifiedRules;
    var specifiedSDLRules = Object.freeze([
      _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule,
      _UniqueOperationTypesRule.UniqueOperationTypesRule,
      _UniqueTypeNamesRule.UniqueTypeNamesRule,
      _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule,
      _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule,
      _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule,
      _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule,
      _KnownTypeNamesRule.KnownTypeNamesRule,
      _KnownDirectivesRule.KnownDirectivesRule,
      _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
      _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule,
      _KnownArgumentNamesRule.KnownArgumentNamesOnDirectivesRule,
      _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
      _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule,
      _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsOnDirectivesRule
    ]);
    exports.specifiedSDLRules = specifiedSDLRules;
  }
});

// ../../node_modules/graphql/validation/ValidationContext.js
var require_ValidationContext = __commonJS({
  "../../node_modules/graphql/validation/ValidationContext.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ValidationContext = exports.SDLValidationContext = exports.ASTValidationContext = void 0;
    var _kinds = require_kinds();
    var _visitor = require_visitor();
    var _TypeInfo = require_TypeInfo();
    var ASTValidationContext = class {
      constructor(ast, onError) {
        this._ast = ast;
        this._fragments = void 0;
        this._fragmentSpreads = /* @__PURE__ */ new Map();
        this._recursivelyReferencedFragments = /* @__PURE__ */ new Map();
        this._onError = onError;
      }
      get [Symbol.toStringTag]() {
        return "ASTValidationContext";
      }
      reportError(error) {
        this._onError(error);
      }
      getDocument() {
        return this._ast;
      }
      getFragment(name) {
        let fragments;
        if (this._fragments) {
          fragments = this._fragments;
        } else {
          fragments = /* @__PURE__ */ Object.create(null);
          for (const defNode of this.getDocument().definitions) {
            if (defNode.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
              fragments[defNode.name.value] = defNode;
            }
          }
          this._fragments = fragments;
        }
        return fragments[name];
      }
      getFragmentSpreads(node) {
        let spreads = this._fragmentSpreads.get(node);
        if (!spreads) {
          spreads = [];
          const setsToVisit = [node];
          let set;
          while (set = setsToVisit.pop()) {
            for (const selection of set.selections) {
              if (selection.kind === _kinds.Kind.FRAGMENT_SPREAD) {
                spreads.push(selection);
              } else if (selection.selectionSet) {
                setsToVisit.push(selection.selectionSet);
              }
            }
          }
          this._fragmentSpreads.set(node, spreads);
        }
        return spreads;
      }
      getRecursivelyReferencedFragments(operation) {
        let fragments = this._recursivelyReferencedFragments.get(operation);
        if (!fragments) {
          fragments = [];
          const collectedNames = /* @__PURE__ */ Object.create(null);
          const nodesToVisit = [operation.selectionSet];
          let node;
          while (node = nodesToVisit.pop()) {
            for (const spread of this.getFragmentSpreads(node)) {
              const fragName = spread.name.value;
              if (collectedNames[fragName] !== true) {
                collectedNames[fragName] = true;
                const fragment = this.getFragment(fragName);
                if (fragment) {
                  fragments.push(fragment);
                  nodesToVisit.push(fragment.selectionSet);
                }
              }
            }
          }
          this._recursivelyReferencedFragments.set(operation, fragments);
        }
        return fragments;
      }
    };
    exports.ASTValidationContext = ASTValidationContext;
    var SDLValidationContext = class extends ASTValidationContext {
      constructor(ast, schema, onError) {
        super(ast, onError);
        this._schema = schema;
      }
      get [Symbol.toStringTag]() {
        return "SDLValidationContext";
      }
      getSchema() {
        return this._schema;
      }
    };
    exports.SDLValidationContext = SDLValidationContext;
    var ValidationContext = class extends ASTValidationContext {
      constructor(schema, ast, typeInfo, onError) {
        super(ast, onError);
        this._schema = schema;
        this._typeInfo = typeInfo;
        this._variableUsages = /* @__PURE__ */ new Map();
        this._recursiveVariableUsages = /* @__PURE__ */ new Map();
      }
      get [Symbol.toStringTag]() {
        return "ValidationContext";
      }
      getSchema() {
        return this._schema;
      }
      getVariableUsages(node) {
        let usages = this._variableUsages.get(node);
        if (!usages) {
          const newUsages = [];
          const typeInfo = new _TypeInfo.TypeInfo(this._schema);
          (0, _visitor.visit)(node, (0, _TypeInfo.visitWithTypeInfo)(typeInfo, {
            VariableDefinition: () => false,
            Variable(variable) {
              newUsages.push({
                node: variable,
                type: typeInfo.getInputType(),
                defaultValue: typeInfo.getDefaultValue()
              });
            }
          }));
          usages = newUsages;
          this._variableUsages.set(node, usages);
        }
        return usages;
      }
      getRecursiveVariableUsages(operation) {
        let usages = this._recursiveVariableUsages.get(operation);
        if (!usages) {
          usages = this.getVariableUsages(operation);
          for (const frag of this.getRecursivelyReferencedFragments(operation)) {
            usages = usages.concat(this.getVariableUsages(frag));
          }
          this._recursiveVariableUsages.set(operation, usages);
        }
        return usages;
      }
      getType() {
        return this._typeInfo.getType();
      }
      getParentType() {
        return this._typeInfo.getParentType();
      }
      getInputType() {
        return this._typeInfo.getInputType();
      }
      getParentInputType() {
        return this._typeInfo.getParentInputType();
      }
      getFieldDef() {
        return this._typeInfo.getFieldDef();
      }
      getDirective() {
        return this._typeInfo.getDirective();
      }
      getArgument() {
        return this._typeInfo.getArgument();
      }
      getEnumValue() {
        return this._typeInfo.getEnumValue();
      }
    };
    exports.ValidationContext = ValidationContext;
  }
});

// ../../node_modules/graphql/validation/validate.js
var require_validate2 = __commonJS({
  "../../node_modules/graphql/validation/validate.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.assertValidSDL = assertValidSDL;
    exports.assertValidSDLExtension = assertValidSDLExtension;
    exports.validate = validate2;
    exports.validateSDL = validateSDL;
    var _devAssert = require_devAssert();
    var _GraphQLError = require_GraphQLError();
    var _visitor = require_visitor();
    var _validate = require_validate();
    var _TypeInfo = require_TypeInfo();
    var _specifiedRules = require_specifiedRules();
    var _ValidationContext = require_ValidationContext();
    function validate2(schema, documentAST, rules = _specifiedRules.specifiedRules, options, typeInfo = new _TypeInfo.TypeInfo(schema)) {
      var _options$maxErrors;
      const maxErrors = (_options$maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors) !== null && _options$maxErrors !== void 0 ? _options$maxErrors : 100;
      documentAST || (0, _devAssert.devAssert)(false, "Must provide document.");
      (0, _validate.assertValidSchema)(schema);
      const abortObj = Object.freeze({});
      const errors = [];
      const context2 = new _ValidationContext.ValidationContext(schema, documentAST, typeInfo, (error) => {
        if (errors.length >= maxErrors) {
          errors.push(new _GraphQLError.GraphQLError("Too many validation errors, error limit reached. Validation aborted."));
          throw abortObj;
        }
        errors.push(error);
      });
      const visitor = (0, _visitor.visitInParallel)(rules.map((rule) => rule(context2)));
      try {
        (0, _visitor.visit)(documentAST, (0, _TypeInfo.visitWithTypeInfo)(typeInfo, visitor));
      } catch (e) {
        if (e !== abortObj) {
          throw e;
        }
      }
      return errors;
    }
    function validateSDL(documentAST, schemaToExtend, rules = _specifiedRules.specifiedSDLRules) {
      const errors = [];
      const context2 = new _ValidationContext.SDLValidationContext(documentAST, schemaToExtend, (error) => {
        errors.push(error);
      });
      const visitors = rules.map((rule) => rule(context2));
      (0, _visitor.visit)(documentAST, (0, _visitor.visitInParallel)(visitors));
      return errors;
    }
    function assertValidSDL(documentAST) {
      const errors = validateSDL(documentAST);
      if (errors.length !== 0) {
        throw new Error(errors.map((error) => error.message).join("\n\n"));
      }
    }
    function assertValidSDLExtension(documentAST, schema) {
      const errors = validateSDL(documentAST, schema);
      if (errors.length !== 0) {
        throw new Error(errors.map((error) => error.message).join("\n\n"));
      }
    }
  }
});

// ../../node_modules/graphql/jsutils/memoize3.js
var require_memoize3 = __commonJS({
  "../../node_modules/graphql/jsutils/memoize3.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.memoize3 = memoize3;
    function memoize3(fn) {
      let cache0;
      return function memoized(a1, a2, a3) {
        if (cache0 === void 0) {
          cache0 = /* @__PURE__ */ new WeakMap();
        }
        let cache1 = cache0.get(a1);
        if (cache1 === void 0) {
          cache1 = /* @__PURE__ */ new WeakMap();
          cache0.set(a1, cache1);
        }
        let cache2 = cache1.get(a2);
        if (cache2 === void 0) {
          cache2 = /* @__PURE__ */ new WeakMap();
          cache1.set(a2, cache2);
        }
        let fnResult = cache2.get(a3);
        if (fnResult === void 0) {
          fnResult = fn(a1, a2, a3);
          cache2.set(a3, fnResult);
        }
        return fnResult;
      };
    }
  }
});

// ../../node_modules/graphql/jsutils/promiseForObject.js
var require_promiseForObject = __commonJS({
  "../../node_modules/graphql/jsutils/promiseForObject.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.promiseForObject = promiseForObject;
    function promiseForObject(object) {
      return Promise.all(Object.values(object)).then((resolvedValues) => {
        const resolvedObject = /* @__PURE__ */ Object.create(null);
        for (const [i, key] of Object.keys(object).entries()) {
          resolvedObject[key] = resolvedValues[i];
        }
        return resolvedObject;
      });
    }
  }
});

// ../../node_modules/graphql/jsutils/promiseReduce.js
var require_promiseReduce = __commonJS({
  "../../node_modules/graphql/jsutils/promiseReduce.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.promiseReduce = promiseReduce;
    var _isPromise = require_isPromise();
    function promiseReduce(values, callbackFn, initialValue) {
      let accumulator = initialValue;
      for (const value of values) {
        accumulator = (0, _isPromise.isPromise)(accumulator) ? accumulator.then((resolved) => callbackFn(resolved, value)) : callbackFn(accumulator, value);
      }
      return accumulator;
    }
  }
});

// ../../node_modules/graphql/jsutils/toError.js
var require_toError = __commonJS({
  "../../node_modules/graphql/jsutils/toError.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.toError = toError;
    var _inspect = require_inspect();
    function toError(thrownValue) {
      return thrownValue instanceof Error ? thrownValue : new NonErrorThrown(thrownValue);
    }
    var NonErrorThrown = class extends Error {
      constructor(thrownValue) {
        super("Unexpected error value: " + (0, _inspect.inspect)(thrownValue));
        this.name = "NonErrorThrown";
        this.thrownValue = thrownValue;
      }
    };
  }
});

// ../../node_modules/graphql/error/locatedError.js
var require_locatedError = __commonJS({
  "../../node_modules/graphql/error/locatedError.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.locatedError = locatedError;
    var _toError = require_toError();
    var _GraphQLError = require_GraphQLError();
    function locatedError(rawOriginalError, nodes, path) {
      var _nodes;
      const originalError = (0, _toError.toError)(rawOriginalError);
      if (isLocatedGraphQLError(originalError)) {
        return originalError;
      }
      return new _GraphQLError.GraphQLError(originalError.message, {
        nodes: (_nodes = originalError.nodes) !== null && _nodes !== void 0 ? _nodes : nodes,
        source: originalError.source,
        positions: originalError.positions,
        path,
        originalError
      });
    }
    function isLocatedGraphQLError(error) {
      return Array.isArray(error.path);
    }
  }
});

// ../../node_modules/graphql/execution/execute.js
var require_execute = __commonJS({
  "../../node_modules/graphql/execution/execute.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.assertValidExecutionArguments = assertValidExecutionArguments;
    exports.buildExecutionContext = buildExecutionContext;
    exports.buildResolveInfo = buildResolveInfo;
    exports.defaultTypeResolver = exports.defaultFieldResolver = void 0;
    exports.execute = execute;
    exports.executeSync = executeSync;
    exports.getFieldDef = getFieldDef;
    var _devAssert = require_devAssert();
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _isIterableObject = require_isIterableObject();
    var _isObjectLike = require_isObjectLike();
    var _isPromise = require_isPromise();
    var _memoize = require_memoize3();
    var _Path = require_Path();
    var _promiseForObject = require_promiseForObject();
    var _promiseReduce = require_promiseReduce();
    var _GraphQLError = require_GraphQLError();
    var _locatedError = require_locatedError();
    var _ast = require_ast();
    var _kinds = require_kinds();
    var _definition = require_definition();
    var _introspection = require_introspection();
    var _validate = require_validate();
    var _collectFields = require_collectFields();
    var _values = require_values();
    var collectSubfields = (0, _memoize.memoize3)((exeContext, returnType, fieldNodes) => (0, _collectFields.collectSubfields)(exeContext.schema, exeContext.fragments, exeContext.variableValues, returnType, fieldNodes));
    function execute(args) {
      arguments.length < 2 || (0, _devAssert.devAssert)(false, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
      const { schema, document: document2, variableValues, rootValue } = args;
      assertValidExecutionArguments(schema, document2, variableValues);
      const exeContext = buildExecutionContext(args);
      if (!("schema" in exeContext)) {
        return {
          errors: exeContext
        };
      }
      try {
        const { operation } = exeContext;
        const result = executeOperation(exeContext, operation, rootValue);
        if ((0, _isPromise.isPromise)(result)) {
          return result.then((data) => buildResponse(data, exeContext.errors), (error) => {
            exeContext.errors.push(error);
            return buildResponse(null, exeContext.errors);
          });
        }
        return buildResponse(result, exeContext.errors);
      } catch (error) {
        exeContext.errors.push(error);
        return buildResponse(null, exeContext.errors);
      }
    }
    function executeSync(args) {
      const result = execute(args);
      if ((0, _isPromise.isPromise)(result)) {
        throw new Error("GraphQL execution failed to complete synchronously.");
      }
      return result;
    }
    function buildResponse(data, errors) {
      return errors.length === 0 ? {
        data
      } : {
        errors,
        data
      };
    }
    function assertValidExecutionArguments(schema, document2, rawVariableValues) {
      document2 || (0, _devAssert.devAssert)(false, "Must provide document.");
      (0, _validate.assertValidSchema)(schema);
      rawVariableValues == null || (0, _isObjectLike.isObjectLike)(rawVariableValues) || (0, _devAssert.devAssert)(false, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.");
    }
    function buildExecutionContext(args) {
      var _definition$name, _operation$variableDe;
      const {
        schema,
        document: document2,
        rootValue,
        contextValue,
        variableValues: rawVariableValues,
        operationName,
        fieldResolver,
        typeResolver,
        subscribeFieldResolver
      } = args;
      let operation;
      const fragments = /* @__PURE__ */ Object.create(null);
      for (const definition of document2.definitions) {
        switch (definition.kind) {
          case _kinds.Kind.OPERATION_DEFINITION:
            if (operationName == null) {
              if (operation !== void 0) {
                return [
                  new _GraphQLError.GraphQLError("Must provide operation name if query contains multiple operations.")
                ];
              }
              operation = definition;
            } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
              operation = definition;
            }
            break;
          case _kinds.Kind.FRAGMENT_DEFINITION:
            fragments[definition.name.value] = definition;
            break;
          default:
        }
      }
      if (!operation) {
        if (operationName != null) {
          return [
            new _GraphQLError.GraphQLError(`Unknown operation named "${operationName}".`)
          ];
        }
        return [new _GraphQLError.GraphQLError("Must provide an operation.")];
      }
      const variableDefinitions = (_operation$variableDe = operation.variableDefinitions) !== null && _operation$variableDe !== void 0 ? _operation$variableDe : [];
      const coercedVariableValues = (0, _values.getVariableValues)(schema, variableDefinitions, rawVariableValues !== null && rawVariableValues !== void 0 ? rawVariableValues : {}, {
        maxErrors: 50
      });
      if (coercedVariableValues.errors) {
        return coercedVariableValues.errors;
      }
      return {
        schema,
        fragments,
        rootValue,
        contextValue,
        operation,
        variableValues: coercedVariableValues.coerced,
        fieldResolver: fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolver,
        typeResolver: typeResolver !== null && typeResolver !== void 0 ? typeResolver : defaultTypeResolver,
        subscribeFieldResolver: subscribeFieldResolver !== null && subscribeFieldResolver !== void 0 ? subscribeFieldResolver : defaultFieldResolver,
        errors: []
      };
    }
    function executeOperation(exeContext, operation, rootValue) {
      const rootType = exeContext.schema.getRootType(operation.operation);
      if (rootType == null) {
        throw new _GraphQLError.GraphQLError(`Schema is not configured to execute ${operation.operation} operation.`, {
          nodes: operation
        });
      }
      const rootFields = (0, _collectFields.collectFields)(exeContext.schema, exeContext.fragments, exeContext.variableValues, rootType, operation.selectionSet);
      const path = void 0;
      switch (operation.operation) {
        case _ast.OperationTypeNode.QUERY:
          return executeFields(exeContext, rootType, rootValue, path, rootFields);
        case _ast.OperationTypeNode.MUTATION:
          return executeFieldsSerially(exeContext, rootType, rootValue, path, rootFields);
        case _ast.OperationTypeNode.SUBSCRIPTION:
          return executeFields(exeContext, rootType, rootValue, path, rootFields);
      }
    }
    function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
      return (0, _promiseReduce.promiseReduce)(fields.entries(), (results, [responseName, fieldNodes]) => {
        const fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
        const result = executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
        if (result === void 0) {
          return results;
        }
        if ((0, _isPromise.isPromise)(result)) {
          return result.then((resolvedResult) => {
            results[responseName] = resolvedResult;
            return results;
          });
        }
        results[responseName] = result;
        return results;
      }, /* @__PURE__ */ Object.create(null));
    }
    function executeFields(exeContext, parentType, sourceValue, path, fields) {
      const results = /* @__PURE__ */ Object.create(null);
      let containsPromise = false;
      for (const [responseName, fieldNodes] of fields.entries()) {
        const fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
        const result = executeField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
        if (result !== void 0) {
          results[responseName] = result;
          if ((0, _isPromise.isPromise)(result)) {
            containsPromise = true;
          }
        }
      }
      if (!containsPromise) {
        return results;
      }
      return (0, _promiseForObject.promiseForObject)(results);
    }
    function executeField(exeContext, parentType, source, fieldNodes, path) {
      var _fieldDef$resolve;
      const fieldDef = getFieldDef(exeContext.schema, parentType, fieldNodes[0]);
      if (!fieldDef) {
        return;
      }
      const returnType = fieldDef.type;
      const resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
      const info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);
      try {
        const args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], exeContext.variableValues);
        const contextValue = exeContext.contextValue;
        const result = resolveFn(source, args, contextValue, info);
        let completed;
        if ((0, _isPromise.isPromise)(result)) {
          completed = result.then((resolved) => completeValue(exeContext, returnType, fieldNodes, info, path, resolved));
        } else {
          completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
        }
        if ((0, _isPromise.isPromise)(completed)) {
          return completed.then(void 0, (rawError) => {
            const error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(path));
            return handleFieldError(error, returnType, exeContext);
          });
        }
        return completed;
      } catch (rawError) {
        const error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(path));
        return handleFieldError(error, returnType, exeContext);
      }
    }
    function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
      return {
        fieldName: fieldDef.name,
        fieldNodes,
        returnType: fieldDef.type,
        parentType,
        path,
        schema: exeContext.schema,
        fragments: exeContext.fragments,
        rootValue: exeContext.rootValue,
        operation: exeContext.operation,
        variableValues: exeContext.variableValues
      };
    }
    function handleFieldError(error, returnType, exeContext) {
      if ((0, _definition.isNonNullType)(returnType)) {
        throw error;
      }
      exeContext.errors.push(error);
      return null;
    }
    function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
      if (result instanceof Error) {
        throw result;
      }
      if ((0, _definition.isNonNullType)(returnType)) {
        const completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
        if (completed === null) {
          throw new Error(`Cannot return null for non-nullable field ${info.parentType.name}.${info.fieldName}.`);
        }
        return completed;
      }
      if (result == null) {
        return null;
      }
      if ((0, _definition.isListType)(returnType)) {
        return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
      }
      if ((0, _definition.isLeafType)(returnType)) {
        return completeLeafValue(returnType, result);
      }
      if ((0, _definition.isAbstractType)(returnType)) {
        return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
      }
      if ((0, _definition.isObjectType)(returnType)) {
        return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
      }
      (0, _invariant.invariant)(false, "Cannot complete value of unexpected output type: " + (0, _inspect.inspect)(returnType));
    }
    function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
      if (!(0, _isIterableObject.isIterableObject)(result)) {
        throw new _GraphQLError.GraphQLError(`Expected Iterable, but did not find one for field "${info.parentType.name}.${info.fieldName}".`);
      }
      const itemType = returnType.ofType;
      let containsPromise = false;
      const completedResults = Array.from(result, (item, index) => {
        const itemPath = (0, _Path.addPath)(path, index, void 0);
        try {
          let completedItem;
          if ((0, _isPromise.isPromise)(item)) {
            completedItem = item.then((resolved) => completeValue(exeContext, itemType, fieldNodes, info, itemPath, resolved));
          } else {
            completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item);
          }
          if ((0, _isPromise.isPromise)(completedItem)) {
            containsPromise = true;
            return completedItem.then(void 0, (rawError) => {
              const error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(itemPath));
              return handleFieldError(error, itemType, exeContext);
            });
          }
          return completedItem;
        } catch (rawError) {
          const error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(itemPath));
          return handleFieldError(error, itemType, exeContext);
        }
      });
      return containsPromise ? Promise.all(completedResults) : completedResults;
    }
    function completeLeafValue(returnType, result) {
      const serializedResult = returnType.serialize(result);
      if (serializedResult == null) {
        throw new Error(`Expected \`${(0, _inspect.inspect)(returnType)}.serialize(${(0, _inspect.inspect)(result)})\` to return non-nullable value, returned: ${(0, _inspect.inspect)(serializedResult)}`);
      }
      return serializedResult;
    }
    function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
      var _returnType$resolveTy;
      const resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
      const contextValue = exeContext.contextValue;
      const runtimeType = resolveTypeFn(result, contextValue, info, returnType);
      if ((0, _isPromise.isPromise)(runtimeType)) {
        return runtimeType.then((resolvedRuntimeType) => completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result));
      }
      return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    }
    function ensureValidRuntimeType(runtimeTypeName, exeContext, returnType, fieldNodes, info, result) {
      if (runtimeTypeName == null) {
        throw new _GraphQLError.GraphQLError(`Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}". Either the "${returnType.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, fieldNodes);
      }
      if ((0, _definition.isObjectType)(runtimeTypeName)) {
        throw new _GraphQLError.GraphQLError("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
      }
      if (typeof runtimeTypeName !== "string") {
        throw new _GraphQLError.GraphQLError(`Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}" with value ${(0, _inspect.inspect)(result)}, received "${(0, _inspect.inspect)(runtimeTypeName)}".`);
      }
      const runtimeType = exeContext.schema.getType(runtimeTypeName);
      if (runtimeType == null) {
        throw new _GraphQLError.GraphQLError(`Abstract type "${returnType.name}" was resolved to a type "${runtimeTypeName}" that does not exist inside the schema.`, {
          nodes: fieldNodes
        });
      }
      if (!(0, _definition.isObjectType)(runtimeType)) {
        throw new _GraphQLError.GraphQLError(`Abstract type "${returnType.name}" was resolved to a non-object type "${runtimeTypeName}".`, {
          nodes: fieldNodes
        });
      }
      if (!exeContext.schema.isSubType(returnType, runtimeType)) {
        throw new _GraphQLError.GraphQLError(`Runtime Object type "${runtimeType.name}" is not a possible type for "${returnType.name}".`, {
          nodes: fieldNodes
        });
      }
      return runtimeType;
    }
    function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
      const subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
      if (returnType.isTypeOf) {
        const isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
        if ((0, _isPromise.isPromise)(isTypeOf)) {
          return isTypeOf.then((resolvedIsTypeOf) => {
            if (!resolvedIsTypeOf) {
              throw invalidReturnTypeError(returnType, result, fieldNodes);
            }
            return executeFields(exeContext, returnType, result, path, subFieldNodes);
          });
        }
        if (!isTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
      }
      return executeFields(exeContext, returnType, result, path, subFieldNodes);
    }
    function invalidReturnTypeError(returnType, result, fieldNodes) {
      return new _GraphQLError.GraphQLError(`Expected value of type "${returnType.name}" but got: ${(0, _inspect.inspect)(result)}.`, {
        nodes: fieldNodes
      });
    }
    var defaultTypeResolver = function(value, contextValue, info, abstractType) {
      if ((0, _isObjectLike.isObjectLike)(value) && typeof value.__typename === "string") {
        return value.__typename;
      }
      const possibleTypes = info.schema.getPossibleTypes(abstractType);
      const promisedIsTypeOfResults = [];
      for (let i = 0; i < possibleTypes.length; i++) {
        const type = possibleTypes[i];
        if (type.isTypeOf) {
          const isTypeOfResult = type.isTypeOf(value, contextValue, info);
          if ((0, _isPromise.isPromise)(isTypeOfResult)) {
            promisedIsTypeOfResults[i] = isTypeOfResult;
          } else if (isTypeOfResult) {
            return type.name;
          }
        }
      }
      if (promisedIsTypeOfResults.length) {
        return Promise.all(promisedIsTypeOfResults).then((isTypeOfResults) => {
          for (let i = 0; i < isTypeOfResults.length; i++) {
            if (isTypeOfResults[i]) {
              return possibleTypes[i].name;
            }
          }
        });
      }
    };
    exports.defaultTypeResolver = defaultTypeResolver;
    var defaultFieldResolver = function(source, args, contextValue, info) {
      if ((0, _isObjectLike.isObjectLike)(source) || typeof source === "function") {
        const property = source[info.fieldName];
        if (typeof property === "function") {
          return source[info.fieldName](args, contextValue, info);
        }
        return property;
      }
    };
    exports.defaultFieldResolver = defaultFieldResolver;
    function getFieldDef(schema, parentType, fieldNode) {
      const fieldName = fieldNode.name.value;
      if (fieldName === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.SchemaMetaFieldDef;
      } else if (fieldName === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.TypeMetaFieldDef;
      } else if (fieldName === _introspection.TypeNameMetaFieldDef.name) {
        return _introspection.TypeNameMetaFieldDef;
      }
      return parentType.getFields()[fieldName];
    }
  }
});

// ../../node_modules/graphql/graphql.js
var require_graphql = __commonJS({
  "../../node_modules/graphql/graphql.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.graphql = graphql;
    exports.graphqlSync = graphqlSync;
    var _devAssert = require_devAssert();
    var _isPromise = require_isPromise();
    var _parser = require_parser();
    var _validate = require_validate();
    var _validate2 = require_validate2();
    var _execute = require_execute();
    function graphql(args) {
      return new Promise((resolve) => resolve(graphqlImpl(args)));
    }
    function graphqlSync(args) {
      const result = graphqlImpl(args);
      if ((0, _isPromise.isPromise)(result)) {
        throw new Error("GraphQL execution failed to complete synchronously.");
      }
      return result;
    }
    function graphqlImpl(args) {
      arguments.length < 2 || (0, _devAssert.devAssert)(false, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
      const {
        schema,
        source,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        typeResolver
      } = args;
      const schemaValidationErrors = (0, _validate.validateSchema)(schema);
      if (schemaValidationErrors.length > 0) {
        return {
          errors: schemaValidationErrors
        };
      }
      let document2;
      try {
        document2 = (0, _parser.parse)(source);
      } catch (syntaxError) {
        return {
          errors: [syntaxError]
        };
      }
      const validationErrors = (0, _validate2.validate)(schema, document2);
      if (validationErrors.length > 0) {
        return {
          errors: validationErrors
        };
      }
      return (0, _execute.execute)({
        schema,
        document: document2,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        typeResolver
      });
    }
  }
});

// ../../node_modules/graphql/type/index.js
var require_type = __commonJS({
  "../../node_modules/graphql/type/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
      enumerable: true,
      get: function() {
        return _directives.DEFAULT_DEPRECATION_REASON;
      }
    });
    Object.defineProperty(exports, "GRAPHQL_MAX_INT", {
      enumerable: true,
      get: function() {
        return _scalars.GRAPHQL_MAX_INT;
      }
    });
    Object.defineProperty(exports, "GRAPHQL_MIN_INT", {
      enumerable: true,
      get: function() {
        return _scalars.GRAPHQL_MIN_INT;
      }
    });
    Object.defineProperty(exports, "GraphQLBoolean", {
      enumerable: true,
      get: function() {
        return _scalars.GraphQLBoolean;
      }
    });
    Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
      enumerable: true,
      get: function() {
        return _directives.GraphQLDeprecatedDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLDirective", {
      enumerable: true,
      get: function() {
        return _directives.GraphQLDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLEnumType", {
      enumerable: true,
      get: function() {
        return _definition.GraphQLEnumType;
      }
    });
    Object.defineProperty(exports, "GraphQLFloat", {
      enumerable: true,
      get: function() {
        return _scalars.GraphQLFloat;
      }
    });
    Object.defineProperty(exports, "GraphQLID", {
      enumerable: true,
      get: function() {
        return _scalars.GraphQLID;
      }
    });
    Object.defineProperty(exports, "GraphQLIncludeDirective", {
      enumerable: true,
      get: function() {
        return _directives.GraphQLIncludeDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLInputObjectType", {
      enumerable: true,
      get: function() {
        return _definition.GraphQLInputObjectType;
      }
    });
    Object.defineProperty(exports, "GraphQLInt", {
      enumerable: true,
      get: function() {
        return _scalars.GraphQLInt;
      }
    });
    Object.defineProperty(exports, "GraphQLInterfaceType", {
      enumerable: true,
      get: function() {
        return _definition.GraphQLInterfaceType;
      }
    });
    Object.defineProperty(exports, "GraphQLList", {
      enumerable: true,
      get: function() {
        return _definition.GraphQLList;
      }
    });
    Object.defineProperty(exports, "GraphQLNonNull", {
      enumerable: true,
      get: function() {
        return _definition.GraphQLNonNull;
      }
    });
    Object.defineProperty(exports, "GraphQLObjectType", {
      enumerable: true,
      get: function() {
        return _definition.GraphQLObjectType;
      }
    });
    Object.defineProperty(exports, "GraphQLScalarType", {
      enumerable: true,
      get: function() {
        return _definition.GraphQLScalarType;
      }
    });
    Object.defineProperty(exports, "GraphQLSchema", {
      enumerable: true,
      get: function() {
        return _schema.GraphQLSchema;
      }
    });
    Object.defineProperty(exports, "GraphQLSkipDirective", {
      enumerable: true,
      get: function() {
        return _directives.GraphQLSkipDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLSpecifiedByDirective", {
      enumerable: true,
      get: function() {
        return _directives.GraphQLSpecifiedByDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLString", {
      enumerable: true,
      get: function() {
        return _scalars.GraphQLString;
      }
    });
    Object.defineProperty(exports, "GraphQLUnionType", {
      enumerable: true,
      get: function() {
        return _definition.GraphQLUnionType;
      }
    });
    Object.defineProperty(exports, "SchemaMetaFieldDef", {
      enumerable: true,
      get: function() {
        return _introspection.SchemaMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "TypeKind", {
      enumerable: true,
      get: function() {
        return _introspection.TypeKind;
      }
    });
    Object.defineProperty(exports, "TypeMetaFieldDef", {
      enumerable: true,
      get: function() {
        return _introspection.TypeMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "TypeNameMetaFieldDef", {
      enumerable: true,
      get: function() {
        return _introspection.TypeNameMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "__Directive", {
      enumerable: true,
      get: function() {
        return _introspection.__Directive;
      }
    });
    Object.defineProperty(exports, "__DirectiveLocation", {
      enumerable: true,
      get: function() {
        return _introspection.__DirectiveLocation;
      }
    });
    Object.defineProperty(exports, "__EnumValue", {
      enumerable: true,
      get: function() {
        return _introspection.__EnumValue;
      }
    });
    Object.defineProperty(exports, "__Field", {
      enumerable: true,
      get: function() {
        return _introspection.__Field;
      }
    });
    Object.defineProperty(exports, "__InputValue", {
      enumerable: true,
      get: function() {
        return _introspection.__InputValue;
      }
    });
    Object.defineProperty(exports, "__Schema", {
      enumerable: true,
      get: function() {
        return _introspection.__Schema;
      }
    });
    Object.defineProperty(exports, "__Type", {
      enumerable: true,
      get: function() {
        return _introspection.__Type;
      }
    });
    Object.defineProperty(exports, "__TypeKind", {
      enumerable: true,
      get: function() {
        return _introspection.__TypeKind;
      }
    });
    Object.defineProperty(exports, "assertAbstractType", {
      enumerable: true,
      get: function() {
        return _definition.assertAbstractType;
      }
    });
    Object.defineProperty(exports, "assertCompositeType", {
      enumerable: true,
      get: function() {
        return _definition.assertCompositeType;
      }
    });
    Object.defineProperty(exports, "assertDirective", {
      enumerable: true,
      get: function() {
        return _directives.assertDirective;
      }
    });
    Object.defineProperty(exports, "assertEnumType", {
      enumerable: true,
      get: function() {
        return _definition.assertEnumType;
      }
    });
    Object.defineProperty(exports, "assertEnumValueName", {
      enumerable: true,
      get: function() {
        return _assertName.assertEnumValueName;
      }
    });
    Object.defineProperty(exports, "assertInputObjectType", {
      enumerable: true,
      get: function() {
        return _definition.assertInputObjectType;
      }
    });
    Object.defineProperty(exports, "assertInputType", {
      enumerable: true,
      get: function() {
        return _definition.assertInputType;
      }
    });
    Object.defineProperty(exports, "assertInterfaceType", {
      enumerable: true,
      get: function() {
        return _definition.assertInterfaceType;
      }
    });
    Object.defineProperty(exports, "assertLeafType", {
      enumerable: true,
      get: function() {
        return _definition.assertLeafType;
      }
    });
    Object.defineProperty(exports, "assertListType", {
      enumerable: true,
      get: function() {
        return _definition.assertListType;
      }
    });
    Object.defineProperty(exports, "assertName", {
      enumerable: true,
      get: function() {
        return _assertName.assertName;
      }
    });
    Object.defineProperty(exports, "assertNamedType", {
      enumerable: true,
      get: function() {
        return _definition.assertNamedType;
      }
    });
    Object.defineProperty(exports, "assertNonNullType", {
      enumerable: true,
      get: function() {
        return _definition.assertNonNullType;
      }
    });
    Object.defineProperty(exports, "assertNullableType", {
      enumerable: true,
      get: function() {
        return _definition.assertNullableType;
      }
    });
    Object.defineProperty(exports, "assertObjectType", {
      enumerable: true,
      get: function() {
        return _definition.assertObjectType;
      }
    });
    Object.defineProperty(exports, "assertOutputType", {
      enumerable: true,
      get: function() {
        return _definition.assertOutputType;
      }
    });
    Object.defineProperty(exports, "assertScalarType", {
      enumerable: true,
      get: function() {
        return _definition.assertScalarType;
      }
    });
    Object.defineProperty(exports, "assertSchema", {
      enumerable: true,
      get: function() {
        return _schema.assertSchema;
      }
    });
    Object.defineProperty(exports, "assertType", {
      enumerable: true,
      get: function() {
        return _definition.assertType;
      }
    });
    Object.defineProperty(exports, "assertUnionType", {
      enumerable: true,
      get: function() {
        return _definition.assertUnionType;
      }
    });
    Object.defineProperty(exports, "assertValidSchema", {
      enumerable: true,
      get: function() {
        return _validate.assertValidSchema;
      }
    });
    Object.defineProperty(exports, "assertWrappingType", {
      enumerable: true,
      get: function() {
        return _definition.assertWrappingType;
      }
    });
    Object.defineProperty(exports, "getNamedType", {
      enumerable: true,
      get: function() {
        return _definition.getNamedType;
      }
    });
    Object.defineProperty(exports, "getNullableType", {
      enumerable: true,
      get: function() {
        return _definition.getNullableType;
      }
    });
    Object.defineProperty(exports, "introspectionTypes", {
      enumerable: true,
      get: function() {
        return _introspection.introspectionTypes;
      }
    });
    Object.defineProperty(exports, "isAbstractType", {
      enumerable: true,
      get: function() {
        return _definition.isAbstractType;
      }
    });
    Object.defineProperty(exports, "isCompositeType", {
      enumerable: true,
      get: function() {
        return _definition.isCompositeType;
      }
    });
    Object.defineProperty(exports, "isDirective", {
      enumerable: true,
      get: function() {
        return _directives.isDirective;
      }
    });
    Object.defineProperty(exports, "isEnumType", {
      enumerable: true,
      get: function() {
        return _definition.isEnumType;
      }
    });
    Object.defineProperty(exports, "isInputObjectType", {
      enumerable: true,
      get: function() {
        return _definition.isInputObjectType;
      }
    });
    Object.defineProperty(exports, "isInputType", {
      enumerable: true,
      get: function() {
        return _definition.isInputType;
      }
    });
    Object.defineProperty(exports, "isInterfaceType", {
      enumerable: true,
      get: function() {
        return _definition.isInterfaceType;
      }
    });
    Object.defineProperty(exports, "isIntrospectionType", {
      enumerable: true,
      get: function() {
        return _introspection.isIntrospectionType;
      }
    });
    Object.defineProperty(exports, "isLeafType", {
      enumerable: true,
      get: function() {
        return _definition.isLeafType;
      }
    });
    Object.defineProperty(exports, "isListType", {
      enumerable: true,
      get: function() {
        return _definition.isListType;
      }
    });
    Object.defineProperty(exports, "isNamedType", {
      enumerable: true,
      get: function() {
        return _definition.isNamedType;
      }
    });
    Object.defineProperty(exports, "isNonNullType", {
      enumerable: true,
      get: function() {
        return _definition.isNonNullType;
      }
    });
    Object.defineProperty(exports, "isNullableType", {
      enumerable: true,
      get: function() {
        return _definition.isNullableType;
      }
    });
    Object.defineProperty(exports, "isObjectType", {
      enumerable: true,
      get: function() {
        return _definition.isObjectType;
      }
    });
    Object.defineProperty(exports, "isOutputType", {
      enumerable: true,
      get: function() {
        return _definition.isOutputType;
      }
    });
    Object.defineProperty(exports, "isRequiredArgument", {
      enumerable: true,
      get: function() {
        return _definition.isRequiredArgument;
      }
    });
    Object.defineProperty(exports, "isRequiredInputField", {
      enumerable: true,
      get: function() {
        return _definition.isRequiredInputField;
      }
    });
    Object.defineProperty(exports, "isScalarType", {
      enumerable: true,
      get: function() {
        return _definition.isScalarType;
      }
    });
    Object.defineProperty(exports, "isSchema", {
      enumerable: true,
      get: function() {
        return _schema.isSchema;
      }
    });
    Object.defineProperty(exports, "isSpecifiedDirective", {
      enumerable: true,
      get: function() {
        return _directives.isSpecifiedDirective;
      }
    });
    Object.defineProperty(exports, "isSpecifiedScalarType", {
      enumerable: true,
      get: function() {
        return _scalars.isSpecifiedScalarType;
      }
    });
    Object.defineProperty(exports, "isType", {
      enumerable: true,
      get: function() {
        return _definition.isType;
      }
    });
    Object.defineProperty(exports, "isUnionType", {
      enumerable: true,
      get: function() {
        return _definition.isUnionType;
      }
    });
    Object.defineProperty(exports, "isWrappingType", {
      enumerable: true,
      get: function() {
        return _definition.isWrappingType;
      }
    });
    Object.defineProperty(exports, "resolveObjMapThunk", {
      enumerable: true,
      get: function() {
        return _definition.resolveObjMapThunk;
      }
    });
    Object.defineProperty(exports, "resolveReadonlyArrayThunk", {
      enumerable: true,
      get: function() {
        return _definition.resolveReadonlyArrayThunk;
      }
    });
    Object.defineProperty(exports, "specifiedDirectives", {
      enumerable: true,
      get: function() {
        return _directives.specifiedDirectives;
      }
    });
    Object.defineProperty(exports, "specifiedScalarTypes", {
      enumerable: true,
      get: function() {
        return _scalars.specifiedScalarTypes;
      }
    });
    Object.defineProperty(exports, "validateSchema", {
      enumerable: true,
      get: function() {
        return _validate.validateSchema;
      }
    });
    var _schema = require_schema();
    var _definition = require_definition();
    var _directives = require_directives();
    var _scalars = require_scalars();
    var _introspection = require_introspection();
    var _validate = require_validate();
    var _assertName = require_assertName();
  }
});

// ../../node_modules/graphql/language/index.js
var require_language = __commonJS({
  "../../node_modules/graphql/language/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "BREAK", {
      enumerable: true,
      get: function() {
        return _visitor.BREAK;
      }
    });
    Object.defineProperty(exports, "DirectiveLocation", {
      enumerable: true,
      get: function() {
        return _directiveLocation.DirectiveLocation;
      }
    });
    Object.defineProperty(exports, "Kind", {
      enumerable: true,
      get: function() {
        return _kinds.Kind;
      }
    });
    Object.defineProperty(exports, "Lexer", {
      enumerable: true,
      get: function() {
        return _lexer.Lexer;
      }
    });
    Object.defineProperty(exports, "Location", {
      enumerable: true,
      get: function() {
        return _ast.Location;
      }
    });
    Object.defineProperty(exports, "OperationTypeNode", {
      enumerable: true,
      get: function() {
        return _ast.OperationTypeNode;
      }
    });
    Object.defineProperty(exports, "Source", {
      enumerable: true,
      get: function() {
        return _source.Source;
      }
    });
    Object.defineProperty(exports, "Token", {
      enumerable: true,
      get: function() {
        return _ast.Token;
      }
    });
    Object.defineProperty(exports, "TokenKind", {
      enumerable: true,
      get: function() {
        return _tokenKind.TokenKind;
      }
    });
    Object.defineProperty(exports, "getEnterLeaveForKind", {
      enumerable: true,
      get: function() {
        return _visitor.getEnterLeaveForKind;
      }
    });
    Object.defineProperty(exports, "getLocation", {
      enumerable: true,
      get: function() {
        return _location.getLocation;
      }
    });
    Object.defineProperty(exports, "getVisitFn", {
      enumerable: true,
      get: function() {
        return _visitor.getVisitFn;
      }
    });
    Object.defineProperty(exports, "isConstValueNode", {
      enumerable: true,
      get: function() {
        return _predicates.isConstValueNode;
      }
    });
    Object.defineProperty(exports, "isDefinitionNode", {
      enumerable: true,
      get: function() {
        return _predicates.isDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isExecutableDefinitionNode", {
      enumerable: true,
      get: function() {
        return _predicates.isExecutableDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isSelectionNode", {
      enumerable: true,
      get: function() {
        return _predicates.isSelectionNode;
      }
    });
    Object.defineProperty(exports, "isTypeDefinitionNode", {
      enumerable: true,
      get: function() {
        return _predicates.isTypeDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeExtensionNode", {
      enumerable: true,
      get: function() {
        return _predicates.isTypeExtensionNode;
      }
    });
    Object.defineProperty(exports, "isTypeNode", {
      enumerable: true,
      get: function() {
        return _predicates.isTypeNode;
      }
    });
    Object.defineProperty(exports, "isTypeSystemDefinitionNode", {
      enumerable: true,
      get: function() {
        return _predicates.isTypeSystemDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeSystemExtensionNode", {
      enumerable: true,
      get: function() {
        return _predicates.isTypeSystemExtensionNode;
      }
    });
    Object.defineProperty(exports, "isValueNode", {
      enumerable: true,
      get: function() {
        return _predicates.isValueNode;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function() {
        return _parser.parse;
      }
    });
    Object.defineProperty(exports, "parseConstValue", {
      enumerable: true,
      get: function() {
        return _parser.parseConstValue;
      }
    });
    Object.defineProperty(exports, "parseType", {
      enumerable: true,
      get: function() {
        return _parser.parseType;
      }
    });
    Object.defineProperty(exports, "parseValue", {
      enumerable: true,
      get: function() {
        return _parser.parseValue;
      }
    });
    Object.defineProperty(exports, "print", {
      enumerable: true,
      get: function() {
        return _printer.print;
      }
    });
    Object.defineProperty(exports, "printLocation", {
      enumerable: true,
      get: function() {
        return _printLocation.printLocation;
      }
    });
    Object.defineProperty(exports, "printSourceLocation", {
      enumerable: true,
      get: function() {
        return _printLocation.printSourceLocation;
      }
    });
    Object.defineProperty(exports, "visit", {
      enumerable: true,
      get: function() {
        return _visitor.visit;
      }
    });
    Object.defineProperty(exports, "visitInParallel", {
      enumerable: true,
      get: function() {
        return _visitor.visitInParallel;
      }
    });
    var _source = require_source();
    var _location = require_location();
    var _printLocation = require_printLocation();
    var _kinds = require_kinds();
    var _tokenKind = require_tokenKind();
    var _lexer = require_lexer();
    var _parser = require_parser();
    var _printer = require_printer();
    var _visitor = require_visitor();
    var _ast = require_ast();
    var _predicates = require_predicates();
    var _directiveLocation = require_directiveLocation();
  }
});

// ../../node_modules/graphql/jsutils/isAsyncIterable.js
var require_isAsyncIterable = __commonJS({
  "../../node_modules/graphql/jsutils/isAsyncIterable.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isAsyncIterable = isAsyncIterable;
    function isAsyncIterable(maybeAsyncIterable) {
      return typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0 ? void 0 : maybeAsyncIterable[Symbol.asyncIterator]) === "function";
    }
  }
});

// ../../node_modules/graphql/execution/mapAsyncIterator.js
var require_mapAsyncIterator = __commonJS({
  "../../node_modules/graphql/execution/mapAsyncIterator.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mapAsyncIterator = mapAsyncIterator;
    function mapAsyncIterator(iterable, callback) {
      const iterator = iterable[Symbol.asyncIterator]();
      async function mapResult(result) {
        if (result.done) {
          return result;
        }
        try {
          return {
            value: await callback(result.value),
            done: false
          };
        } catch (error) {
          if (typeof iterator.return === "function") {
            try {
              await iterator.return();
            } catch (_e) {
            }
          }
          throw error;
        }
      }
      return {
        async next() {
          return mapResult(await iterator.next());
        },
        async return() {
          return typeof iterator.return === "function" ? mapResult(await iterator.return()) : {
            value: void 0,
            done: true
          };
        },
        async throw(error) {
          if (typeof iterator.throw === "function") {
            return mapResult(await iterator.throw(error));
          }
          throw error;
        },
        [Symbol.asyncIterator]() {
          return this;
        }
      };
    }
  }
});

// ../../node_modules/graphql/execution/subscribe.js
var require_subscribe = __commonJS({
  "../../node_modules/graphql/execution/subscribe.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createSourceEventStream = createSourceEventStream;
    exports.subscribe = subscribe;
    var _devAssert = require_devAssert();
    var _inspect = require_inspect();
    var _isAsyncIterable = require_isAsyncIterable();
    var _Path = require_Path();
    var _GraphQLError = require_GraphQLError();
    var _locatedError = require_locatedError();
    var _collectFields = require_collectFields();
    var _execute = require_execute();
    var _mapAsyncIterator = require_mapAsyncIterator();
    var _values = require_values();
    async function subscribe(args) {
      arguments.length < 2 || (0, _devAssert.devAssert)(false, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
      const {
        schema,
        document: document2,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        subscribeFieldResolver
      } = args;
      const resultOrStream = await createSourceEventStream(schema, document2, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);
      if (!(0, _isAsyncIterable.isAsyncIterable)(resultOrStream)) {
        return resultOrStream;
      }
      const mapSourceToResponse = (payload) => (0, _execute.execute)({
        schema,
        document: document2,
        rootValue: payload,
        contextValue,
        variableValues,
        operationName,
        fieldResolver
      });
      return (0, _mapAsyncIterator.mapAsyncIterator)(resultOrStream, mapSourceToResponse);
    }
    async function createSourceEventStream(schema, document2, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver) {
      (0, _execute.assertValidExecutionArguments)(schema, document2, variableValues);
      const exeContext = (0, _execute.buildExecutionContext)({
        schema,
        document: document2,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        subscribeFieldResolver
      });
      if (!("schema" in exeContext)) {
        return {
          errors: exeContext
        };
      }
      try {
        const eventStream = await executeSubscription(exeContext);
        if (!(0, _isAsyncIterable.isAsyncIterable)(eventStream)) {
          throw new Error(`Subscription field must return Async Iterable. Received: ${(0, _inspect.inspect)(eventStream)}.`);
        }
        return eventStream;
      } catch (error) {
        if (error instanceof _GraphQLError.GraphQLError) {
          return {
            errors: [error]
          };
        }
        throw error;
      }
    }
    async function executeSubscription(exeContext) {
      const { schema, fragments, operation, variableValues, rootValue } = exeContext;
      const rootType = schema.getSubscriptionType();
      if (rootType == null) {
        throw new _GraphQLError.GraphQLError("Schema is not configured to execute subscription operation.", {
          nodes: operation
        });
      }
      const rootFields = (0, _collectFields.collectFields)(schema, fragments, variableValues, rootType, operation.selectionSet);
      const [responseName, fieldNodes] = [...rootFields.entries()][0];
      const fieldDef = (0, _execute.getFieldDef)(schema, rootType, fieldNodes[0]);
      if (!fieldDef) {
        const fieldName = fieldNodes[0].name.value;
        throw new _GraphQLError.GraphQLError(`The subscription field "${fieldName}" is not defined.`, {
          nodes: fieldNodes
        });
      }
      const path = (0, _Path.addPath)(void 0, responseName, rootType.name);
      const info = (0, _execute.buildResolveInfo)(exeContext, fieldDef, fieldNodes, rootType, path);
      try {
        var _fieldDef$subscribe;
        const args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], variableValues);
        const contextValue = exeContext.contextValue;
        const resolveFn = (_fieldDef$subscribe = fieldDef.subscribe) !== null && _fieldDef$subscribe !== void 0 ? _fieldDef$subscribe : exeContext.subscribeFieldResolver;
        const eventStream = await resolveFn(rootValue, args, contextValue, info);
        if (eventStream instanceof Error) {
          throw eventStream;
        }
        return eventStream;
      } catch (error) {
        throw (0, _locatedError.locatedError)(error, fieldNodes, (0, _Path.pathToArray)(path));
      }
    }
  }
});

// ../../node_modules/graphql/execution/index.js
var require_execution = __commonJS({
  "../../node_modules/graphql/execution/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "createSourceEventStream", {
      enumerable: true,
      get: function() {
        return _subscribe.createSourceEventStream;
      }
    });
    Object.defineProperty(exports, "defaultFieldResolver", {
      enumerable: true,
      get: function() {
        return _execute.defaultFieldResolver;
      }
    });
    Object.defineProperty(exports, "defaultTypeResolver", {
      enumerable: true,
      get: function() {
        return _execute.defaultTypeResolver;
      }
    });
    Object.defineProperty(exports, "execute", {
      enumerable: true,
      get: function() {
        return _execute.execute;
      }
    });
    Object.defineProperty(exports, "executeSync", {
      enumerable: true,
      get: function() {
        return _execute.executeSync;
      }
    });
    Object.defineProperty(exports, "getArgumentValues", {
      enumerable: true,
      get: function() {
        return _values.getArgumentValues;
      }
    });
    Object.defineProperty(exports, "getDirectiveValues", {
      enumerable: true,
      get: function() {
        return _values.getDirectiveValues;
      }
    });
    Object.defineProperty(exports, "getVariableValues", {
      enumerable: true,
      get: function() {
        return _values.getVariableValues;
      }
    });
    Object.defineProperty(exports, "responsePathAsArray", {
      enumerable: true,
      get: function() {
        return _Path.pathToArray;
      }
    });
    Object.defineProperty(exports, "subscribe", {
      enumerable: true,
      get: function() {
        return _subscribe.subscribe;
      }
    });
    var _Path = require_Path();
    var _execute = require_execute();
    var _subscribe = require_subscribe();
    var _values = require_values();
  }
});

// ../../node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.js
var require_NoDeprecatedCustomRule = __commonJS({
  "../../node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoDeprecatedCustomRule = NoDeprecatedCustomRule;
    var _invariant = require_invariant2();
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function NoDeprecatedCustomRule(context2) {
      return {
        Field(node) {
          const fieldDef = context2.getFieldDef();
          const deprecationReason = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.deprecationReason;
          if (fieldDef && deprecationReason != null) {
            const parentType = context2.getParentType();
            parentType != null || (0, _invariant.invariant)(false);
            context2.reportError(new _GraphQLError.GraphQLError(`The field ${parentType.name}.${fieldDef.name} is deprecated. ${deprecationReason}`, {
              nodes: node
            }));
          }
        },
        Argument(node) {
          const argDef = context2.getArgument();
          const deprecationReason = argDef === null || argDef === void 0 ? void 0 : argDef.deprecationReason;
          if (argDef && deprecationReason != null) {
            const directiveDef = context2.getDirective();
            if (directiveDef != null) {
              context2.reportError(new _GraphQLError.GraphQLError(`Directive "@${directiveDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`, {
                nodes: node
              }));
            } else {
              const parentType = context2.getParentType();
              const fieldDef = context2.getFieldDef();
              parentType != null && fieldDef != null || (0, _invariant.invariant)(false);
              context2.reportError(new _GraphQLError.GraphQLError(`Field "${parentType.name}.${fieldDef.name}" argument "${argDef.name}" is deprecated. ${deprecationReason}`, {
                nodes: node
              }));
            }
          }
        },
        ObjectField(node) {
          const inputObjectDef = (0, _definition.getNamedType)(context2.getParentInputType());
          if ((0, _definition.isInputObjectType)(inputObjectDef)) {
            const inputFieldDef = inputObjectDef.getFields()[node.name.value];
            const deprecationReason = inputFieldDef === null || inputFieldDef === void 0 ? void 0 : inputFieldDef.deprecationReason;
            if (deprecationReason != null) {
              context2.reportError(new _GraphQLError.GraphQLError(`The input field ${inputObjectDef.name}.${inputFieldDef.name} is deprecated. ${deprecationReason}`, {
                nodes: node
              }));
            }
          }
        },
        EnumValue(node) {
          const enumValueDef = context2.getEnumValue();
          const deprecationReason = enumValueDef === null || enumValueDef === void 0 ? void 0 : enumValueDef.deprecationReason;
          if (enumValueDef && deprecationReason != null) {
            const enumTypeDef = (0, _definition.getNamedType)(context2.getInputType());
            enumTypeDef != null || (0, _invariant.invariant)(false);
            context2.reportError(new _GraphQLError.GraphQLError(`The enum value "${enumTypeDef.name}.${enumValueDef.name}" is deprecated. ${deprecationReason}`, {
              nodes: node
            }));
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.js
var require_NoSchemaIntrospectionCustomRule = __commonJS({
  "../../node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoSchemaIntrospectionCustomRule = NoSchemaIntrospectionCustomRule;
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    var _introspection = require_introspection();
    function NoSchemaIntrospectionCustomRule(context2) {
      return {
        Field(node) {
          const type = (0, _definition.getNamedType)(context2.getType());
          if (type && (0, _introspection.isIntrospectionType)(type)) {
            context2.reportError(new _GraphQLError.GraphQLError(`GraphQL introspection has been disabled, but the requested query contained the field "${node.name.value}".`, {
              nodes: node
            }));
          }
        }
      };
    }
  }
});

// ../../node_modules/graphql/validation/index.js
var require_validation = __commonJS({
  "../../node_modules/graphql/validation/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ExecutableDefinitionsRule", {
      enumerable: true,
      get: function() {
        return _ExecutableDefinitionsRule.ExecutableDefinitionsRule;
      }
    });
    Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
      enumerable: true,
      get: function() {
        return _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule;
      }
    });
    Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
      enumerable: true,
      get: function() {
        return _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule;
      }
    });
    Object.defineProperty(exports, "KnownArgumentNamesRule", {
      enumerable: true,
      get: function() {
        return _KnownArgumentNamesRule.KnownArgumentNamesRule;
      }
    });
    Object.defineProperty(exports, "KnownDirectivesRule", {
      enumerable: true,
      get: function() {
        return _KnownDirectivesRule.KnownDirectivesRule;
      }
    });
    Object.defineProperty(exports, "KnownFragmentNamesRule", {
      enumerable: true,
      get: function() {
        return _KnownFragmentNamesRule.KnownFragmentNamesRule;
      }
    });
    Object.defineProperty(exports, "KnownTypeNamesRule", {
      enumerable: true,
      get: function() {
        return _KnownTypeNamesRule.KnownTypeNamesRule;
      }
    });
    Object.defineProperty(exports, "LoneAnonymousOperationRule", {
      enumerable: true,
      get: function() {
        return _LoneAnonymousOperationRule.LoneAnonymousOperationRule;
      }
    });
    Object.defineProperty(exports, "LoneSchemaDefinitionRule", {
      enumerable: true,
      get: function() {
        return _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule;
      }
    });
    Object.defineProperty(exports, "NoDeprecatedCustomRule", {
      enumerable: true,
      get: function() {
        return _NoDeprecatedCustomRule.NoDeprecatedCustomRule;
      }
    });
    Object.defineProperty(exports, "NoFragmentCyclesRule", {
      enumerable: true,
      get: function() {
        return _NoFragmentCyclesRule.NoFragmentCyclesRule;
      }
    });
    Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", {
      enumerable: true,
      get: function() {
        return _NoSchemaIntrospectionCustomRule.NoSchemaIntrospectionCustomRule;
      }
    });
    Object.defineProperty(exports, "NoUndefinedVariablesRule", {
      enumerable: true,
      get: function() {
        return _NoUndefinedVariablesRule.NoUndefinedVariablesRule;
      }
    });
    Object.defineProperty(exports, "NoUnusedFragmentsRule", {
      enumerable: true,
      get: function() {
        return _NoUnusedFragmentsRule.NoUnusedFragmentsRule;
      }
    });
    Object.defineProperty(exports, "NoUnusedVariablesRule", {
      enumerable: true,
      get: function() {
        return _NoUnusedVariablesRule.NoUnusedVariablesRule;
      }
    });
    Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
      enumerable: true,
      get: function() {
        return _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule;
      }
    });
    Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
      enumerable: true,
      get: function() {
        return _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule;
      }
    });
    Object.defineProperty(exports, "PossibleTypeExtensionsRule", {
      enumerable: true,
      get: function() {
        return _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule;
      }
    });
    Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
      enumerable: true,
      get: function() {
        return _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule;
      }
    });
    Object.defineProperty(exports, "ScalarLeafsRule", {
      enumerable: true,
      get: function() {
        return _ScalarLeafsRule.ScalarLeafsRule;
      }
    });
    Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
      enumerable: true,
      get: function() {
        return _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule;
      }
    });
    Object.defineProperty(exports, "UniqueArgumentDefinitionNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueArgumentNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueArgumentNamesRule.UniqueArgumentNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueDirectiveNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
      enumerable: true,
      get: function() {
        return _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule;
      }
    });
    Object.defineProperty(exports, "UniqueEnumValueNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueFragmentNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueFragmentNamesRule.UniqueFragmentNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueOperationNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueOperationNamesRule.UniqueOperationNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueOperationTypesRule", {
      enumerable: true,
      get: function() {
        return _UniqueOperationTypesRule.UniqueOperationTypesRule;
      }
    });
    Object.defineProperty(exports, "UniqueTypeNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueTypeNamesRule.UniqueTypeNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueVariableNamesRule", {
      enumerable: true,
      get: function() {
        return _UniqueVariableNamesRule.UniqueVariableNamesRule;
      }
    });
    Object.defineProperty(exports, "ValidationContext", {
      enumerable: true,
      get: function() {
        return _ValidationContext.ValidationContext;
      }
    });
    Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
      enumerable: true,
      get: function() {
        return _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule;
      }
    });
    Object.defineProperty(exports, "VariablesAreInputTypesRule", {
      enumerable: true,
      get: function() {
        return _VariablesAreInputTypesRule.VariablesAreInputTypesRule;
      }
    });
    Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
      enumerable: true,
      get: function() {
        return _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule;
      }
    });
    Object.defineProperty(exports, "specifiedRules", {
      enumerable: true,
      get: function() {
        return _specifiedRules.specifiedRules;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function() {
        return _validate.validate;
      }
    });
    var _validate = require_validate2();
    var _ValidationContext = require_ValidationContext();
    var _specifiedRules = require_specifiedRules();
    var _ExecutableDefinitionsRule = require_ExecutableDefinitionsRule();
    var _FieldsOnCorrectTypeRule = require_FieldsOnCorrectTypeRule();
    var _FragmentsOnCompositeTypesRule = require_FragmentsOnCompositeTypesRule();
    var _KnownArgumentNamesRule = require_KnownArgumentNamesRule();
    var _KnownDirectivesRule = require_KnownDirectivesRule();
    var _KnownFragmentNamesRule = require_KnownFragmentNamesRule();
    var _KnownTypeNamesRule = require_KnownTypeNamesRule();
    var _LoneAnonymousOperationRule = require_LoneAnonymousOperationRule();
    var _NoFragmentCyclesRule = require_NoFragmentCyclesRule();
    var _NoUndefinedVariablesRule = require_NoUndefinedVariablesRule();
    var _NoUnusedFragmentsRule = require_NoUnusedFragmentsRule();
    var _NoUnusedVariablesRule = require_NoUnusedVariablesRule();
    var _OverlappingFieldsCanBeMergedRule = require_OverlappingFieldsCanBeMergedRule();
    var _PossibleFragmentSpreadsRule = require_PossibleFragmentSpreadsRule();
    var _ProvidedRequiredArgumentsRule = require_ProvidedRequiredArgumentsRule();
    var _ScalarLeafsRule = require_ScalarLeafsRule();
    var _SingleFieldSubscriptionsRule = require_SingleFieldSubscriptionsRule();
    var _UniqueArgumentNamesRule = require_UniqueArgumentNamesRule();
    var _UniqueDirectivesPerLocationRule = require_UniqueDirectivesPerLocationRule();
    var _UniqueFragmentNamesRule = require_UniqueFragmentNamesRule();
    var _UniqueInputFieldNamesRule = require_UniqueInputFieldNamesRule();
    var _UniqueOperationNamesRule = require_UniqueOperationNamesRule();
    var _UniqueVariableNamesRule = require_UniqueVariableNamesRule();
    var _ValuesOfCorrectTypeRule = require_ValuesOfCorrectTypeRule();
    var _VariablesAreInputTypesRule = require_VariablesAreInputTypesRule();
    var _VariablesInAllowedPositionRule = require_VariablesInAllowedPositionRule();
    var _LoneSchemaDefinitionRule = require_LoneSchemaDefinitionRule();
    var _UniqueOperationTypesRule = require_UniqueOperationTypesRule();
    var _UniqueTypeNamesRule = require_UniqueTypeNamesRule();
    var _UniqueEnumValueNamesRule = require_UniqueEnumValueNamesRule();
    var _UniqueFieldDefinitionNamesRule = require_UniqueFieldDefinitionNamesRule();
    var _UniqueArgumentDefinitionNamesRule = require_UniqueArgumentDefinitionNamesRule();
    var _UniqueDirectiveNamesRule = require_UniqueDirectiveNamesRule();
    var _PossibleTypeExtensionsRule = require_PossibleTypeExtensionsRule();
    var _NoDeprecatedCustomRule = require_NoDeprecatedCustomRule();
    var _NoSchemaIntrospectionCustomRule = require_NoSchemaIntrospectionCustomRule();
  }
});

// ../../node_modules/graphql/error/index.js
var require_error = __commonJS({
  "../../node_modules/graphql/error/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "GraphQLError", {
      enumerable: true,
      get: function() {
        return _GraphQLError.GraphQLError;
      }
    });
    Object.defineProperty(exports, "formatError", {
      enumerable: true,
      get: function() {
        return _GraphQLError.formatError;
      }
    });
    Object.defineProperty(exports, "locatedError", {
      enumerable: true,
      get: function() {
        return _locatedError.locatedError;
      }
    });
    Object.defineProperty(exports, "printError", {
      enumerable: true,
      get: function() {
        return _GraphQLError.printError;
      }
    });
    Object.defineProperty(exports, "syntaxError", {
      enumerable: true,
      get: function() {
        return _syntaxError.syntaxError;
      }
    });
    var _GraphQLError = require_GraphQLError();
    var _syntaxError = require_syntaxError();
    var _locatedError = require_locatedError();
  }
});

// ../../node_modules/graphql/utilities/getIntrospectionQuery.js
var require_getIntrospectionQuery = __commonJS({
  "../../node_modules/graphql/utilities/getIntrospectionQuery.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getIntrospectionQuery = getIntrospectionQuery;
    function getIntrospectionQuery(options) {
      const optionsWithDefault = {
        descriptions: true,
        specifiedByUrl: false,
        directiveIsRepeatable: false,
        schemaDescription: false,
        inputValueDeprecation: false,
        ...options
      };
      const descriptions = optionsWithDefault.descriptions ? "description" : "";
      const specifiedByUrl = optionsWithDefault.specifiedByUrl ? "specifiedByURL" : "";
      const directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable ? "isRepeatable" : "";
      const schemaDescription = optionsWithDefault.schemaDescription ? descriptions : "";
      function inputDeprecation(str) {
        return optionsWithDefault.inputValueDeprecation ? str : "";
      }
      return `
    query IntrospectionQuery {
      __schema {
        ${schemaDescription}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${descriptions}
          ${directiveIsRepeatable}
          locations
          args${inputDeprecation("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${descriptions}
      ${specifiedByUrl}
      fields(includeDeprecated: true) {
        name
        ${descriptions}
        args${inputDeprecation("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${inputDeprecation("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${descriptions}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${descriptions}
      type { ...TypeRef }
      defaultValue
      ${inputDeprecation("isDeprecated")}
      ${inputDeprecation("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
    }
  }
});

// ../../node_modules/graphql/utilities/getOperationAST.js
var require_getOperationAST = __commonJS({
  "../../node_modules/graphql/utilities/getOperationAST.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getOperationAST = getOperationAST;
    var _kinds = require_kinds();
    function getOperationAST(documentAST, operationName) {
      let operation = null;
      for (const definition of documentAST.definitions) {
        if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
          var _definition$name;
          if (operationName == null) {
            if (operation) {
              return null;
            }
            operation = definition;
          } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
            return definition;
          }
        }
      }
      return operation;
    }
  }
});

// ../../node_modules/graphql/utilities/getOperationRootType.js
var require_getOperationRootType = __commonJS({
  "../../node_modules/graphql/utilities/getOperationRootType.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getOperationRootType = getOperationRootType;
    var _GraphQLError = require_GraphQLError();
    function getOperationRootType(schema, operation) {
      if (operation.operation === "query") {
        const queryType = schema.getQueryType();
        if (!queryType) {
          throw new _GraphQLError.GraphQLError("Schema does not define the required query root type.", {
            nodes: operation
          });
        }
        return queryType;
      }
      if (operation.operation === "mutation") {
        const mutationType = schema.getMutationType();
        if (!mutationType) {
          throw new _GraphQLError.GraphQLError("Schema is not configured for mutations.", {
            nodes: operation
          });
        }
        return mutationType;
      }
      if (operation.operation === "subscription") {
        const subscriptionType = schema.getSubscriptionType();
        if (!subscriptionType) {
          throw new _GraphQLError.GraphQLError("Schema is not configured for subscriptions.", {
            nodes: operation
          });
        }
        return subscriptionType;
      }
      throw new _GraphQLError.GraphQLError("Can only have query, mutation and subscription operations.", {
        nodes: operation
      });
    }
  }
});

// ../../node_modules/graphql/utilities/introspectionFromSchema.js
var require_introspectionFromSchema = __commonJS({
  "../../node_modules/graphql/utilities/introspectionFromSchema.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.introspectionFromSchema = introspectionFromSchema;
    var _invariant = require_invariant2();
    var _parser = require_parser();
    var _execute = require_execute();
    var _getIntrospectionQuery = require_getIntrospectionQuery();
    function introspectionFromSchema(schema, options) {
      const optionsWithDefaults = {
        specifiedByUrl: true,
        directiveIsRepeatable: true,
        schemaDescription: true,
        inputValueDeprecation: true,
        ...options
      };
      const document2 = (0, _parser.parse)((0, _getIntrospectionQuery.getIntrospectionQuery)(optionsWithDefaults));
      const result = (0, _execute.executeSync)({
        schema,
        document: document2
      });
      !result.errors && result.data || (0, _invariant.invariant)(false);
      return result.data;
    }
  }
});

// ../../node_modules/graphql/utilities/buildClientSchema.js
var require_buildClientSchema = __commonJS({
  "../../node_modules/graphql/utilities/buildClientSchema.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.buildClientSchema = buildClientSchema;
    var _devAssert = require_devAssert();
    var _inspect = require_inspect();
    var _isObjectLike = require_isObjectLike();
    var _keyValMap = require_keyValMap();
    var _parser = require_parser();
    var _definition = require_definition();
    var _directives = require_directives();
    var _introspection = require_introspection();
    var _scalars = require_scalars();
    var _schema = require_schema();
    var _valueFromAST = require_valueFromAST();
    function buildClientSchema(introspection, options) {
      (0, _isObjectLike.isObjectLike)(introspection) && (0, _isObjectLike.isObjectLike)(introspection.__schema) || (0, _devAssert.devAssert)(false, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${(0, _inspect.inspect)(introspection)}.`);
      const schemaIntrospection = introspection.__schema;
      const typeMap = (0, _keyValMap.keyValMap)(schemaIntrospection.types, (typeIntrospection) => typeIntrospection.name, (typeIntrospection) => buildType(typeIntrospection));
      for (const stdType of [
        ..._scalars.specifiedScalarTypes,
        ..._introspection.introspectionTypes
      ]) {
        if (typeMap[stdType.name]) {
          typeMap[stdType.name] = stdType;
        }
      }
      const queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
      const mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
      const subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;
      const directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];
      return new _schema.GraphQLSchema({
        description: schemaIntrospection.description,
        query: queryType,
        mutation: mutationType,
        subscription: subscriptionType,
        types: Object.values(typeMap),
        directives,
        assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
      });
      function getType(typeRef) {
        if (typeRef.kind === _introspection.TypeKind.LIST) {
          const itemRef = typeRef.ofType;
          if (!itemRef) {
            throw new Error("Decorated type deeper than introspection query.");
          }
          return new _definition.GraphQLList(getType(itemRef));
        }
        if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
          const nullableRef = typeRef.ofType;
          if (!nullableRef) {
            throw new Error("Decorated type deeper than introspection query.");
          }
          const nullableType = getType(nullableRef);
          return new _definition.GraphQLNonNull((0, _definition.assertNullableType)(nullableType));
        }
        return getNamedType(typeRef);
      }
      function getNamedType(typeRef) {
        const typeName = typeRef.name;
        if (!typeName) {
          throw new Error(`Unknown type reference: ${(0, _inspect.inspect)(typeRef)}.`);
        }
        const type = typeMap[typeName];
        if (!type) {
          throw new Error(`Invalid or incomplete schema, unknown type: ${typeName}. Ensure that a full introspection query is used in order to build a client schema.`);
        }
        return type;
      }
      function getObjectType(typeRef) {
        return (0, _definition.assertObjectType)(getNamedType(typeRef));
      }
      function getInterfaceType(typeRef) {
        return (0, _definition.assertInterfaceType)(getNamedType(typeRef));
      }
      function buildType(type) {
        if (type != null && type.name != null && type.kind != null) {
          switch (type.kind) {
            case _introspection.TypeKind.SCALAR:
              return buildScalarDef(type);
            case _introspection.TypeKind.OBJECT:
              return buildObjectDef(type);
            case _introspection.TypeKind.INTERFACE:
              return buildInterfaceDef(type);
            case _introspection.TypeKind.UNION:
              return buildUnionDef(type);
            case _introspection.TypeKind.ENUM:
              return buildEnumDef(type);
            case _introspection.TypeKind.INPUT_OBJECT:
              return buildInputObjectDef(type);
          }
        }
        const typeStr = (0, _inspect.inspect)(type);
        throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${typeStr}.`);
      }
      function buildScalarDef(scalarIntrospection) {
        return new _definition.GraphQLScalarType({
          name: scalarIntrospection.name,
          description: scalarIntrospection.description,
          specifiedByURL: scalarIntrospection.specifiedByURL
        });
      }
      function buildImplementationsList(implementingIntrospection) {
        if (implementingIntrospection.interfaces === null && implementingIntrospection.kind === _introspection.TypeKind.INTERFACE) {
          return [];
        }
        if (!implementingIntrospection.interfaces) {
          const implementingIntrospectionStr = (0, _inspect.inspect)(implementingIntrospection);
          throw new Error(`Introspection result missing interfaces: ${implementingIntrospectionStr}.`);
        }
        return implementingIntrospection.interfaces.map(getInterfaceType);
      }
      function buildObjectDef(objectIntrospection) {
        return new _definition.GraphQLObjectType({
          name: objectIntrospection.name,
          description: objectIntrospection.description,
          interfaces: () => buildImplementationsList(objectIntrospection),
          fields: () => buildFieldDefMap(objectIntrospection)
        });
      }
      function buildInterfaceDef(interfaceIntrospection) {
        return new _definition.GraphQLInterfaceType({
          name: interfaceIntrospection.name,
          description: interfaceIntrospection.description,
          interfaces: () => buildImplementationsList(interfaceIntrospection),
          fields: () => buildFieldDefMap(interfaceIntrospection)
        });
      }
      function buildUnionDef(unionIntrospection) {
        if (!unionIntrospection.possibleTypes) {
          const unionIntrospectionStr = (0, _inspect.inspect)(unionIntrospection);
          throw new Error(`Introspection result missing possibleTypes: ${unionIntrospectionStr}.`);
        }
        return new _definition.GraphQLUnionType({
          name: unionIntrospection.name,
          description: unionIntrospection.description,
          types: () => unionIntrospection.possibleTypes.map(getObjectType)
        });
      }
      function buildEnumDef(enumIntrospection) {
        if (!enumIntrospection.enumValues) {
          const enumIntrospectionStr = (0, _inspect.inspect)(enumIntrospection);
          throw new Error(`Introspection result missing enumValues: ${enumIntrospectionStr}.`);
        }
        return new _definition.GraphQLEnumType({
          name: enumIntrospection.name,
          description: enumIntrospection.description,
          values: (0, _keyValMap.keyValMap)(enumIntrospection.enumValues, (valueIntrospection) => valueIntrospection.name, (valueIntrospection) => ({
            description: valueIntrospection.description,
            deprecationReason: valueIntrospection.deprecationReason
          }))
        });
      }
      function buildInputObjectDef(inputObjectIntrospection) {
        if (!inputObjectIntrospection.inputFields) {
          const inputObjectIntrospectionStr = (0, _inspect.inspect)(inputObjectIntrospection);
          throw new Error(`Introspection result missing inputFields: ${inputObjectIntrospectionStr}.`);
        }
        return new _definition.GraphQLInputObjectType({
          name: inputObjectIntrospection.name,
          description: inputObjectIntrospection.description,
          fields: () => buildInputValueDefMap(inputObjectIntrospection.inputFields)
        });
      }
      function buildFieldDefMap(typeIntrospection) {
        if (!typeIntrospection.fields) {
          throw new Error(`Introspection result missing fields: ${(0, _inspect.inspect)(typeIntrospection)}.`);
        }
        return (0, _keyValMap.keyValMap)(typeIntrospection.fields, (fieldIntrospection) => fieldIntrospection.name, buildField);
      }
      function buildField(fieldIntrospection) {
        const type = getType(fieldIntrospection.type);
        if (!(0, _definition.isOutputType)(type)) {
          const typeStr = (0, _inspect.inspect)(type);
          throw new Error(`Introspection must provide output type for fields, but received: ${typeStr}.`);
        }
        if (!fieldIntrospection.args) {
          const fieldIntrospectionStr = (0, _inspect.inspect)(fieldIntrospection);
          throw new Error(`Introspection result missing field args: ${fieldIntrospectionStr}.`);
        }
        return {
          description: fieldIntrospection.description,
          deprecationReason: fieldIntrospection.deprecationReason,
          type,
          args: buildInputValueDefMap(fieldIntrospection.args)
        };
      }
      function buildInputValueDefMap(inputValueIntrospections) {
        return (0, _keyValMap.keyValMap)(inputValueIntrospections, (inputValue) => inputValue.name, buildInputValue);
      }
      function buildInputValue(inputValueIntrospection) {
        const type = getType(inputValueIntrospection.type);
        if (!(0, _definition.isInputType)(type)) {
          const typeStr = (0, _inspect.inspect)(type);
          throw new Error(`Introspection must provide input type for arguments, but received: ${typeStr}.`);
        }
        const defaultValue = inputValueIntrospection.defaultValue != null ? (0, _valueFromAST.valueFromAST)((0, _parser.parseValue)(inputValueIntrospection.defaultValue), type) : void 0;
        return {
          description: inputValueIntrospection.description,
          type,
          defaultValue,
          deprecationReason: inputValueIntrospection.deprecationReason
        };
      }
      function buildDirective(directiveIntrospection) {
        if (!directiveIntrospection.args) {
          const directiveIntrospectionStr = (0, _inspect.inspect)(directiveIntrospection);
          throw new Error(`Introspection result missing directive args: ${directiveIntrospectionStr}.`);
        }
        if (!directiveIntrospection.locations) {
          const directiveIntrospectionStr = (0, _inspect.inspect)(directiveIntrospection);
          throw new Error(`Introspection result missing directive locations: ${directiveIntrospectionStr}.`);
        }
        return new _directives.GraphQLDirective({
          name: directiveIntrospection.name,
          description: directiveIntrospection.description,
          isRepeatable: directiveIntrospection.isRepeatable,
          locations: directiveIntrospection.locations.slice(),
          args: buildInputValueDefMap(directiveIntrospection.args)
        });
      }
    }
  }
});

// ../../node_modules/graphql/utilities/extendSchema.js
var require_extendSchema = __commonJS({
  "../../node_modules/graphql/utilities/extendSchema.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.extendSchema = extendSchema;
    exports.extendSchemaImpl = extendSchemaImpl;
    var _devAssert = require_devAssert();
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _keyMap = require_keyMap();
    var _mapValue = require_mapValue();
    var _kinds = require_kinds();
    var _predicates = require_predicates();
    var _definition = require_definition();
    var _directives = require_directives();
    var _introspection = require_introspection();
    var _scalars = require_scalars();
    var _schema = require_schema();
    var _validate = require_validate2();
    var _values = require_values();
    var _valueFromAST = require_valueFromAST();
    function extendSchema(schema, documentAST, options) {
      (0, _schema.assertSchema)(schema);
      documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.devAssert)(false, "Must provide valid Document AST.");
      if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
        (0, _validate.assertValidSDLExtension)(documentAST, schema);
      }
      const schemaConfig = schema.toConfig();
      const extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
      return schemaConfig === extendedConfig ? schema : new _schema.GraphQLSchema(extendedConfig);
    }
    function extendSchemaImpl(schemaConfig, documentAST, options) {
      var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;
      const typeDefs = [];
      const typeExtensionsMap = /* @__PURE__ */ Object.create(null);
      const directiveDefs = [];
      let schemaDef;
      const schemaExtensions = [];
      for (const def of documentAST.definitions) {
        if (def.kind === _kinds.Kind.SCHEMA_DEFINITION) {
          schemaDef = def;
        } else if (def.kind === _kinds.Kind.SCHEMA_EXTENSION) {
          schemaExtensions.push(def);
        } else if ((0, _predicates.isTypeDefinitionNode)(def)) {
          typeDefs.push(def);
        } else if ((0, _predicates.isTypeExtensionNode)(def)) {
          const extendedTypeName = def.name.value;
          const existingTypeExtensions = typeExtensionsMap[extendedTypeName];
          typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([def]) : [def];
        } else if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          directiveDefs.push(def);
        }
      }
      if (Object.keys(typeExtensionsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExtensions.length === 0 && schemaDef == null) {
        return schemaConfig;
      }
      const typeMap = /* @__PURE__ */ Object.create(null);
      for (const existingType of schemaConfig.types) {
        typeMap[existingType.name] = extendNamedType(existingType);
      }
      for (const typeNode of typeDefs) {
        var _stdTypeMap$name;
        const name = typeNode.name.value;
        typeMap[name] = (_stdTypeMap$name = stdTypeMap[name]) !== null && _stdTypeMap$name !== void 0 ? _stdTypeMap$name : buildType(typeNode);
      }
      const operationTypes = {
        query: schemaConfig.query && replaceNamedType(schemaConfig.query),
        mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
        subscription: schemaConfig.subscription && replaceNamedType(schemaConfig.subscription),
        ...schemaDef && getOperationTypes([schemaDef]),
        ...getOperationTypes(schemaExtensions)
      };
      return {
        description: (_schemaDef = schemaDef) === null || _schemaDef === void 0 ? void 0 : (_schemaDef$descriptio = _schemaDef.description) === null || _schemaDef$descriptio === void 0 ? void 0 : _schemaDef$descriptio.value,
        ...operationTypes,
        types: Object.values(typeMap),
        directives: [
          ...schemaConfig.directives.map(replaceDirective),
          ...directiveDefs.map(buildDirective)
        ],
        extensions: /* @__PURE__ */ Object.create(null),
        astNode: (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0 ? _schemaDef2 : schemaConfig.astNode,
        extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
        assumeValid: (_options$assumeValid = options === null || options === void 0 ? void 0 : options.assumeValid) !== null && _options$assumeValid !== void 0 ? _options$assumeValid : false
      };
      function replaceType(type) {
        if ((0, _definition.isListType)(type)) {
          return new _definition.GraphQLList(replaceType(type.ofType));
        }
        if ((0, _definition.isNonNullType)(type)) {
          return new _definition.GraphQLNonNull(replaceType(type.ofType));
        }
        return replaceNamedType(type);
      }
      function replaceNamedType(type) {
        return typeMap[type.name];
      }
      function replaceDirective(directive) {
        const config = directive.toConfig();
        return new _directives.GraphQLDirective({
          ...config,
          args: (0, _mapValue.mapValue)(config.args, extendArg)
        });
      }
      function extendNamedType(type) {
        if ((0, _introspection.isIntrospectionType)(type) || (0, _scalars.isSpecifiedScalarType)(type)) {
          return type;
        }
        if ((0, _definition.isScalarType)(type)) {
          return extendScalarType(type);
        }
        if ((0, _definition.isObjectType)(type)) {
          return extendObjectType(type);
        }
        if ((0, _definition.isInterfaceType)(type)) {
          return extendInterfaceType(type);
        }
        if ((0, _definition.isUnionType)(type)) {
          return extendUnionType(type);
        }
        if ((0, _definition.isEnumType)(type)) {
          return extendEnumType(type);
        }
        if ((0, _definition.isInputObjectType)(type)) {
          return extendInputObjectType(type);
        }
        (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
      }
      function extendInputObjectType(type) {
        var _typeExtensionsMap$co;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co !== void 0 ? _typeExtensionsMap$co : [];
        return new _definition.GraphQLInputObjectType({
          ...config,
          fields: () => ({
            ...(0, _mapValue.mapValue)(config.fields, (field) => ({
              ...field,
              type: replaceType(field.type)
            })),
            ...buildInputFieldMap(extensions)
          }),
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
      }
      function extendEnumType(type) {
        var _typeExtensionsMap$ty;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null && _typeExtensionsMap$ty !== void 0 ? _typeExtensionsMap$ty : [];
        return new _definition.GraphQLEnumType({
          ...config,
          values: { ...config.values, ...buildEnumValueMap(extensions) },
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
      }
      function extendScalarType(type) {
        var _typeExtensionsMap$co2;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co2 !== void 0 ? _typeExtensionsMap$co2 : [];
        let specifiedByURL = config.specifiedByURL;
        for (const extensionNode of extensions) {
          var _getSpecifiedByURL;
          specifiedByURL = (_getSpecifiedByURL = getSpecifiedByURL(extensionNode)) !== null && _getSpecifiedByURL !== void 0 ? _getSpecifiedByURL : specifiedByURL;
        }
        return new _definition.GraphQLScalarType({
          ...config,
          specifiedByURL,
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
      }
      function extendObjectType(type) {
        var _typeExtensionsMap$co3;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co3 !== void 0 ? _typeExtensionsMap$co3 : [];
        return new _definition.GraphQLObjectType({
          ...config,
          interfaces: () => [
            ...type.getInterfaces().map(replaceNamedType),
            ...buildInterfaces(extensions)
          ],
          fields: () => ({
            ...(0, _mapValue.mapValue)(config.fields, extendField),
            ...buildFieldMap(extensions)
          }),
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
      }
      function extendInterfaceType(type) {
        var _typeExtensionsMap$co4;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co4 !== void 0 ? _typeExtensionsMap$co4 : [];
        return new _definition.GraphQLInterfaceType({
          ...config,
          interfaces: () => [
            ...type.getInterfaces().map(replaceNamedType),
            ...buildInterfaces(extensions)
          ],
          fields: () => ({
            ...(0, _mapValue.mapValue)(config.fields, extendField),
            ...buildFieldMap(extensions)
          }),
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
      }
      function extendUnionType(type) {
        var _typeExtensionsMap$co5;
        const config = type.toConfig();
        const extensions = (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co5 !== void 0 ? _typeExtensionsMap$co5 : [];
        return new _definition.GraphQLUnionType({
          ...config,
          types: () => [
            ...type.getTypes().map(replaceNamedType),
            ...buildUnionTypes(extensions)
          ],
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        });
      }
      function extendField(field) {
        return {
          ...field,
          type: replaceType(field.type),
          args: field.args && (0, _mapValue.mapValue)(field.args, extendArg)
        };
      }
      function extendArg(arg) {
        return { ...arg, type: replaceType(arg.type) };
      }
      function getOperationTypes(nodes) {
        const opTypes = {};
        for (const node of nodes) {
          var _node$operationTypes;
          const operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
          for (const operationType of operationTypesNodes) {
            opTypes[operationType.operation] = getNamedType(operationType.type);
          }
        }
        return opTypes;
      }
      function getNamedType(node) {
        var _stdTypeMap$name2;
        const name = node.name.value;
        const type = (_stdTypeMap$name2 = stdTypeMap[name]) !== null && _stdTypeMap$name2 !== void 0 ? _stdTypeMap$name2 : typeMap[name];
        if (type === void 0) {
          throw new Error(`Unknown type: "${name}".`);
        }
        return type;
      }
      function getWrappedType(node) {
        if (node.kind === _kinds.Kind.LIST_TYPE) {
          return new _definition.GraphQLList(getWrappedType(node.type));
        }
        if (node.kind === _kinds.Kind.NON_NULL_TYPE) {
          return new _definition.GraphQLNonNull(getWrappedType(node.type));
        }
        return getNamedType(node);
      }
      function buildDirective(node) {
        var _node$description;
        return new _directives.GraphQLDirective({
          name: node.name.value,
          description: (_node$description = node.description) === null || _node$description === void 0 ? void 0 : _node$description.value,
          locations: node.locations.map(({ value }) => value),
          isRepeatable: node.repeatable,
          args: buildArgumentMap(node.arguments),
          astNode: node
        });
      }
      function buildFieldMap(nodes) {
        const fieldConfigMap = /* @__PURE__ */ Object.create(null);
        for (const node of nodes) {
          var _node$fields;
          const nodeFields = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
          for (const field of nodeFields) {
            var _field$description;
            fieldConfigMap[field.name.value] = {
              type: getWrappedType(field.type),
              description: (_field$description = field.description) === null || _field$description === void 0 ? void 0 : _field$description.value,
              args: buildArgumentMap(field.arguments),
              deprecationReason: getDeprecationReason(field),
              astNode: field
            };
          }
        }
        return fieldConfigMap;
      }
      function buildArgumentMap(args) {
        const argsNodes = args !== null && args !== void 0 ? args : [];
        const argConfigMap = /* @__PURE__ */ Object.create(null);
        for (const arg of argsNodes) {
          var _arg$description;
          const type = getWrappedType(arg.type);
          argConfigMap[arg.name.value] = {
            type,
            description: (_arg$description = arg.description) === null || _arg$description === void 0 ? void 0 : _arg$description.value,
            defaultValue: (0, _valueFromAST.valueFromAST)(arg.defaultValue, type),
            deprecationReason: getDeprecationReason(arg),
            astNode: arg
          };
        }
        return argConfigMap;
      }
      function buildInputFieldMap(nodes) {
        const inputFieldMap = /* @__PURE__ */ Object.create(null);
        for (const node of nodes) {
          var _node$fields2;
          const fieldsNodes = (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0 ? _node$fields2 : [];
          for (const field of fieldsNodes) {
            var _field$description2;
            const type = getWrappedType(field.type);
            inputFieldMap[field.name.value] = {
              type,
              description: (_field$description2 = field.description) === null || _field$description2 === void 0 ? void 0 : _field$description2.value,
              defaultValue: (0, _valueFromAST.valueFromAST)(field.defaultValue, type),
              deprecationReason: getDeprecationReason(field),
              astNode: field
            };
          }
        }
        return inputFieldMap;
      }
      function buildEnumValueMap(nodes) {
        const enumValueMap = /* @__PURE__ */ Object.create(null);
        for (const node of nodes) {
          var _node$values;
          const valuesNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
          for (const value of valuesNodes) {
            var _value$description;
            enumValueMap[value.name.value] = {
              description: (_value$description = value.description) === null || _value$description === void 0 ? void 0 : _value$description.value,
              deprecationReason: getDeprecationReason(value),
              astNode: value
            };
          }
        }
        return enumValueMap;
      }
      function buildInterfaces(nodes) {
        return nodes.flatMap((node) => {
          var _node$interfaces$map, _node$interfaces;
          return (_node$interfaces$map = (_node$interfaces = node.interfaces) === null || _node$interfaces === void 0 ? void 0 : _node$interfaces.map(getNamedType)) !== null && _node$interfaces$map !== void 0 ? _node$interfaces$map : [];
        });
      }
      function buildUnionTypes(nodes) {
        return nodes.flatMap((node) => {
          var _node$types$map, _node$types;
          return (_node$types$map = (_node$types = node.types) === null || _node$types === void 0 ? void 0 : _node$types.map(getNamedType)) !== null && _node$types$map !== void 0 ? _node$types$map : [];
        });
      }
      function buildType(astNode) {
        var _typeExtensionsMap$na;
        const name = astNode.name.value;
        const extensionASTNodes = (_typeExtensionsMap$na = typeExtensionsMap[name]) !== null && _typeExtensionsMap$na !== void 0 ? _typeExtensionsMap$na : [];
        switch (astNode.kind) {
          case _kinds.Kind.OBJECT_TYPE_DEFINITION: {
            var _astNode$description;
            const allNodes = [astNode, ...extensionASTNodes];
            return new _definition.GraphQLObjectType({
              name,
              description: (_astNode$description = astNode.description) === null || _astNode$description === void 0 ? void 0 : _astNode$description.value,
              interfaces: () => buildInterfaces(allNodes),
              fields: () => buildFieldMap(allNodes),
              astNode,
              extensionASTNodes
            });
          }
          case _kinds.Kind.INTERFACE_TYPE_DEFINITION: {
            var _astNode$description2;
            const allNodes = [astNode, ...extensionASTNodes];
            return new _definition.GraphQLInterfaceType({
              name,
              description: (_astNode$description2 = astNode.description) === null || _astNode$description2 === void 0 ? void 0 : _astNode$description2.value,
              interfaces: () => buildInterfaces(allNodes),
              fields: () => buildFieldMap(allNodes),
              astNode,
              extensionASTNodes
            });
          }
          case _kinds.Kind.ENUM_TYPE_DEFINITION: {
            var _astNode$description3;
            const allNodes = [astNode, ...extensionASTNodes];
            return new _definition.GraphQLEnumType({
              name,
              description: (_astNode$description3 = astNode.description) === null || _astNode$description3 === void 0 ? void 0 : _astNode$description3.value,
              values: buildEnumValueMap(allNodes),
              astNode,
              extensionASTNodes
            });
          }
          case _kinds.Kind.UNION_TYPE_DEFINITION: {
            var _astNode$description4;
            const allNodes = [astNode, ...extensionASTNodes];
            return new _definition.GraphQLUnionType({
              name,
              description: (_astNode$description4 = astNode.description) === null || _astNode$description4 === void 0 ? void 0 : _astNode$description4.value,
              types: () => buildUnionTypes(allNodes),
              astNode,
              extensionASTNodes
            });
          }
          case _kinds.Kind.SCALAR_TYPE_DEFINITION: {
            var _astNode$description5;
            return new _definition.GraphQLScalarType({
              name,
              description: (_astNode$description5 = astNode.description) === null || _astNode$description5 === void 0 ? void 0 : _astNode$description5.value,
              specifiedByURL: getSpecifiedByURL(astNode),
              astNode,
              extensionASTNodes
            });
          }
          case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION: {
            var _astNode$description6;
            const allNodes = [astNode, ...extensionASTNodes];
            return new _definition.GraphQLInputObjectType({
              name,
              description: (_astNode$description6 = astNode.description) === null || _astNode$description6 === void 0 ? void 0 : _astNode$description6.value,
              fields: () => buildInputFieldMap(allNodes),
              astNode,
              extensionASTNodes
            });
          }
        }
      }
    }
    var stdTypeMap = (0, _keyMap.keyMap)([..._scalars.specifiedScalarTypes, ..._introspection.introspectionTypes], (type) => type.name);
    function getDeprecationReason(node) {
      const deprecated = (0, _values.getDirectiveValues)(_directives.GraphQLDeprecatedDirective, node);
      return deprecated === null || deprecated === void 0 ? void 0 : deprecated.reason;
    }
    function getSpecifiedByURL(node) {
      const specifiedBy = (0, _values.getDirectiveValues)(_directives.GraphQLSpecifiedByDirective, node);
      return specifiedBy === null || specifiedBy === void 0 ? void 0 : specifiedBy.url;
    }
  }
});

// ../../node_modules/graphql/utilities/buildASTSchema.js
var require_buildASTSchema = __commonJS({
  "../../node_modules/graphql/utilities/buildASTSchema.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.buildASTSchema = buildASTSchema;
    exports.buildSchema = buildSchema;
    var _devAssert = require_devAssert();
    var _kinds = require_kinds();
    var _parser = require_parser();
    var _directives = require_directives();
    var _schema = require_schema();
    var _validate = require_validate2();
    var _extendSchema = require_extendSchema();
    function buildASTSchema(documentAST, options) {
      documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.devAssert)(false, "Must provide valid Document AST.");
      if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
        (0, _validate.assertValidSDL)(documentAST);
      }
      const emptySchemaConfig = {
        description: void 0,
        types: [],
        directives: [],
        extensions: /* @__PURE__ */ Object.create(null),
        extensionASTNodes: [],
        assumeValid: false
      };
      const config = (0, _extendSchema.extendSchemaImpl)(emptySchemaConfig, documentAST, options);
      if (config.astNode == null) {
        for (const type of config.types) {
          switch (type.name) {
            case "Query":
              config.query = type;
              break;
            case "Mutation":
              config.mutation = type;
              break;
            case "Subscription":
              config.subscription = type;
              break;
          }
        }
      }
      const directives = [
        ...config.directives,
        ..._directives.specifiedDirectives.filter((stdDirective) => config.directives.every((directive) => directive.name !== stdDirective.name))
      ];
      return new _schema.GraphQLSchema({ ...config, directives });
    }
    function buildSchema(source, options) {
      const document2 = (0, _parser.parse)(source, {
        noLocation: options === null || options === void 0 ? void 0 : options.noLocation,
        allowLegacyFragmentVariables: options === null || options === void 0 ? void 0 : options.allowLegacyFragmentVariables
      });
      return buildASTSchema(document2, {
        assumeValidSDL: options === null || options === void 0 ? void 0 : options.assumeValidSDL,
        assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
      });
    }
  }
});

// ../../node_modules/graphql/utilities/lexicographicSortSchema.js
var require_lexicographicSortSchema = __commonJS({
  "../../node_modules/graphql/utilities/lexicographicSortSchema.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.lexicographicSortSchema = lexicographicSortSchema;
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _keyValMap = require_keyValMap();
    var _naturalCompare = require_naturalCompare();
    var _definition = require_definition();
    var _directives = require_directives();
    var _introspection = require_introspection();
    var _schema = require_schema();
    function lexicographicSortSchema(schema) {
      const schemaConfig = schema.toConfig();
      const typeMap = (0, _keyValMap.keyValMap)(sortByName(schemaConfig.types), (type) => type.name, sortNamedType);
      return new _schema.GraphQLSchema({
        ...schemaConfig,
        types: Object.values(typeMap),
        directives: sortByName(schemaConfig.directives).map(sortDirective),
        query: replaceMaybeType(schemaConfig.query),
        mutation: replaceMaybeType(schemaConfig.mutation),
        subscription: replaceMaybeType(schemaConfig.subscription)
      });
      function replaceType(type) {
        if ((0, _definition.isListType)(type)) {
          return new _definition.GraphQLList(replaceType(type.ofType));
        } else if ((0, _definition.isNonNullType)(type)) {
          return new _definition.GraphQLNonNull(replaceType(type.ofType));
        }
        return replaceNamedType(type);
      }
      function replaceNamedType(type) {
        return typeMap[type.name];
      }
      function replaceMaybeType(maybeType) {
        return maybeType && replaceNamedType(maybeType);
      }
      function sortDirective(directive) {
        const config = directive.toConfig();
        return new _directives.GraphQLDirective({
          ...config,
          locations: sortBy(config.locations, (x) => x),
          args: sortArgs(config.args)
        });
      }
      function sortArgs(args) {
        return sortObjMap(args, (arg) => ({ ...arg, type: replaceType(arg.type) }));
      }
      function sortFields(fieldsMap) {
        return sortObjMap(fieldsMap, (field) => ({
          ...field,
          type: replaceType(field.type),
          args: field.args && sortArgs(field.args)
        }));
      }
      function sortInputFields(fieldsMap) {
        return sortObjMap(fieldsMap, (field) => ({
          ...field,
          type: replaceType(field.type)
        }));
      }
      function sortTypes(array) {
        return sortByName(array).map(replaceNamedType);
      }
      function sortNamedType(type) {
        if ((0, _definition.isScalarType)(type) || (0, _introspection.isIntrospectionType)(type)) {
          return type;
        }
        if ((0, _definition.isObjectType)(type)) {
          const config = type.toConfig();
          return new _definition.GraphQLObjectType({
            ...config,
            interfaces: () => sortTypes(config.interfaces),
            fields: () => sortFields(config.fields)
          });
        }
        if ((0, _definition.isInterfaceType)(type)) {
          const config = type.toConfig();
          return new _definition.GraphQLInterfaceType({
            ...config,
            interfaces: () => sortTypes(config.interfaces),
            fields: () => sortFields(config.fields)
          });
        }
        if ((0, _definition.isUnionType)(type)) {
          const config = type.toConfig();
          return new _definition.GraphQLUnionType({
            ...config,
            types: () => sortTypes(config.types)
          });
        }
        if ((0, _definition.isEnumType)(type)) {
          const config = type.toConfig();
          return new _definition.GraphQLEnumType({
            ...config,
            values: sortObjMap(config.values, (value) => value)
          });
        }
        if ((0, _definition.isInputObjectType)(type)) {
          const config = type.toConfig();
          return new _definition.GraphQLInputObjectType({
            ...config,
            fields: () => sortInputFields(config.fields)
          });
        }
        (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
      }
    }
    function sortObjMap(map, sortValueFn) {
      const sortedMap = /* @__PURE__ */ Object.create(null);
      for (const key of Object.keys(map).sort(_naturalCompare.naturalCompare)) {
        sortedMap[key] = sortValueFn(map[key]);
      }
      return sortedMap;
    }
    function sortByName(array) {
      return sortBy(array, (obj) => obj.name);
    }
    function sortBy(array, mapToKey) {
      return array.slice().sort((obj1, obj2) => {
        const key1 = mapToKey(obj1);
        const key2 = mapToKey(obj2);
        return (0, _naturalCompare.naturalCompare)(key1, key2);
      });
    }
  }
});

// ../../node_modules/graphql/utilities/printSchema.js
var require_printSchema = __commonJS({
  "../../node_modules/graphql/utilities/printSchema.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printIntrospectionSchema = printIntrospectionSchema;
    exports.printSchema = printSchema;
    exports.printType = printType;
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _blockString = require_blockString();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _definition = require_definition();
    var _directives = require_directives();
    var _introspection = require_introspection();
    var _scalars = require_scalars();
    var _astFromValue = require_astFromValue();
    function printSchema(schema) {
      return printFilteredSchema(schema, (n) => !(0, _directives.isSpecifiedDirective)(n), isDefinedType);
    }
    function printIntrospectionSchema(schema) {
      return printFilteredSchema(schema, _directives.isSpecifiedDirective, _introspection.isIntrospectionType);
    }
    function isDefinedType(type) {
      return !(0, _scalars.isSpecifiedScalarType)(type) && !(0, _introspection.isIntrospectionType)(type);
    }
    function printFilteredSchema(schema, directiveFilter, typeFilter) {
      const directives = schema.getDirectives().filter(directiveFilter);
      const types = Object.values(schema.getTypeMap()).filter(typeFilter);
      return [
        printSchemaDefinition(schema),
        ...directives.map((directive) => printDirective(directive)),
        ...types.map((type) => printType(type))
      ].filter(Boolean).join("\n\n");
    }
    function printSchemaDefinition(schema) {
      if (schema.description == null && isSchemaOfCommonNames(schema)) {
        return;
      }
      const operationTypes = [];
      const queryType = schema.getQueryType();
      if (queryType) {
        operationTypes.push(`  query: ${queryType.name}`);
      }
      const mutationType = schema.getMutationType();
      if (mutationType) {
        operationTypes.push(`  mutation: ${mutationType.name}`);
      }
      const subscriptionType = schema.getSubscriptionType();
      if (subscriptionType) {
        operationTypes.push(`  subscription: ${subscriptionType.name}`);
      }
      return printDescription(schema) + `schema {
${operationTypes.join("\n")}
}`;
    }
    function isSchemaOfCommonNames(schema) {
      const queryType = schema.getQueryType();
      if (queryType && queryType.name !== "Query") {
        return false;
      }
      const mutationType = schema.getMutationType();
      if (mutationType && mutationType.name !== "Mutation") {
        return false;
      }
      const subscriptionType = schema.getSubscriptionType();
      if (subscriptionType && subscriptionType.name !== "Subscription") {
        return false;
      }
      return true;
    }
    function printType(type) {
      if ((0, _definition.isScalarType)(type)) {
        return printScalar(type);
      }
      if ((0, _definition.isObjectType)(type)) {
        return printObject(type);
      }
      if ((0, _definition.isInterfaceType)(type)) {
        return printInterface(type);
      }
      if ((0, _definition.isUnionType)(type)) {
        return printUnion(type);
      }
      if ((0, _definition.isEnumType)(type)) {
        return printEnum(type);
      }
      if ((0, _definition.isInputObjectType)(type)) {
        return printInputObject(type);
      }
      (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
    }
    function printScalar(type) {
      return printDescription(type) + `scalar ${type.name}` + printSpecifiedByURL(type);
    }
    function printImplementedInterfaces(type) {
      const interfaces = type.getInterfaces();
      return interfaces.length ? " implements " + interfaces.map((i) => i.name).join(" & ") : "";
    }
    function printObject(type) {
      return printDescription(type) + `type ${type.name}` + printImplementedInterfaces(type) + printFields(type);
    }
    function printInterface(type) {
      return printDescription(type) + `interface ${type.name}` + printImplementedInterfaces(type) + printFields(type);
    }
    function printUnion(type) {
      const types = type.getTypes();
      const possibleTypes = types.length ? " = " + types.join(" | ") : "";
      return printDescription(type) + "union " + type.name + possibleTypes;
    }
    function printEnum(type) {
      const values = type.getValues().map((value, i) => printDescription(value, "  ", !i) + "  " + value.name + printDeprecated(value.deprecationReason));
      return printDescription(type) + `enum ${type.name}` + printBlock(values);
    }
    function printInputObject(type) {
      const fields = Object.values(type.getFields()).map((f, i) => printDescription(f, "  ", !i) + "  " + printInputValue(f));
      return printDescription(type) + `input ${type.name}` + printBlock(fields);
    }
    function printFields(type) {
      const fields = Object.values(type.getFields()).map((f, i) => printDescription(f, "  ", !i) + "  " + f.name + printArgs(f.args, "  ") + ": " + String(f.type) + printDeprecated(f.deprecationReason));
      return printBlock(fields);
    }
    function printBlock(items) {
      return items.length !== 0 ? " {\n" + items.join("\n") + "\n}" : "";
    }
    function printArgs(args, indentation = "") {
      if (args.length === 0) {
        return "";
      }
      if (args.every((arg) => !arg.description)) {
        return "(" + args.map(printInputValue).join(", ") + ")";
      }
      return "(\n" + args.map((arg, i) => printDescription(arg, "  " + indentation, !i) + "  " + indentation + printInputValue(arg)).join("\n") + "\n" + indentation + ")";
    }
    function printInputValue(arg) {
      const defaultAST = (0, _astFromValue.astFromValue)(arg.defaultValue, arg.type);
      let argDecl = arg.name + ": " + String(arg.type);
      if (defaultAST) {
        argDecl += ` = ${(0, _printer.print)(defaultAST)}`;
      }
      return argDecl + printDeprecated(arg.deprecationReason);
    }
    function printDirective(directive) {
      return printDescription(directive) + "directive @" + directive.name + printArgs(directive.args) + (directive.isRepeatable ? " repeatable" : "") + " on " + directive.locations.join(" | ");
    }
    function printDeprecated(reason) {
      if (reason == null) {
        return "";
      }
      if (reason !== _directives.DEFAULT_DEPRECATION_REASON) {
        const astValue = (0, _printer.print)({
          kind: _kinds.Kind.STRING,
          value: reason
        });
        return ` @deprecated(reason: ${astValue})`;
      }
      return " @deprecated";
    }
    function printSpecifiedByURL(scalar) {
      if (scalar.specifiedByURL == null) {
        return "";
      }
      const astValue = (0, _printer.print)({
        kind: _kinds.Kind.STRING,
        value: scalar.specifiedByURL
      });
      return ` @specifiedBy(url: ${astValue})`;
    }
    function printDescription(def, indentation = "", firstInBlock = true) {
      const { description } = def;
      if (description == null) {
        return "";
      }
      const blockString = (0, _printer.print)({
        kind: _kinds.Kind.STRING,
        value: description,
        block: (0, _blockString.isPrintableAsBlockString)(description)
      });
      const prefix = indentation && !firstInBlock ? "\n" + indentation : indentation;
      return prefix + blockString.replace(/\n/g, "\n" + indentation) + "\n";
    }
  }
});

// ../../node_modules/graphql/utilities/concatAST.js
var require_concatAST = __commonJS({
  "../../node_modules/graphql/utilities/concatAST.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.concatAST = concatAST;
    var _kinds = require_kinds();
    function concatAST(documents) {
      const definitions = [];
      for (const doc of documents) {
        definitions.push(...doc.definitions);
      }
      return {
        kind: _kinds.Kind.DOCUMENT,
        definitions
      };
    }
  }
});

// ../../node_modules/graphql/utilities/separateOperations.js
var require_separateOperations = __commonJS({
  "../../node_modules/graphql/utilities/separateOperations.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.separateOperations = separateOperations;
    var _kinds = require_kinds();
    var _visitor = require_visitor();
    function separateOperations(documentAST) {
      const operations = [];
      const depGraph = /* @__PURE__ */ Object.create(null);
      for (const definitionNode of documentAST.definitions) {
        switch (definitionNode.kind) {
          case _kinds.Kind.OPERATION_DEFINITION:
            operations.push(definitionNode);
            break;
          case _kinds.Kind.FRAGMENT_DEFINITION:
            depGraph[definitionNode.name.value] = collectDependencies(definitionNode.selectionSet);
            break;
          default:
        }
      }
      const separatedDocumentASTs = /* @__PURE__ */ Object.create(null);
      for (const operation of operations) {
        const dependencies = /* @__PURE__ */ new Set();
        for (const fragmentName of collectDependencies(operation.selectionSet)) {
          collectTransitiveDependencies(dependencies, depGraph, fragmentName);
        }
        const operationName = operation.name ? operation.name.value : "";
        separatedDocumentASTs[operationName] = {
          kind: _kinds.Kind.DOCUMENT,
          definitions: documentAST.definitions.filter((node) => node === operation || node.kind === _kinds.Kind.FRAGMENT_DEFINITION && dependencies.has(node.name.value))
        };
      }
      return separatedDocumentASTs;
    }
    function collectTransitiveDependencies(collected, depGraph, fromName) {
      if (!collected.has(fromName)) {
        collected.add(fromName);
        const immediateDeps = depGraph[fromName];
        if (immediateDeps !== void 0) {
          for (const toName of immediateDeps) {
            collectTransitiveDependencies(collected, depGraph, toName);
          }
        }
      }
    }
    function collectDependencies(selectionSet) {
      const dependencies = [];
      (0, _visitor.visit)(selectionSet, {
        FragmentSpread(node) {
          dependencies.push(node.name.value);
        }
      });
      return dependencies;
    }
  }
});

// ../../node_modules/graphql/utilities/stripIgnoredCharacters.js
var require_stripIgnoredCharacters = __commonJS({
  "../../node_modules/graphql/utilities/stripIgnoredCharacters.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.stripIgnoredCharacters = stripIgnoredCharacters;
    var _blockString = require_blockString();
    var _lexer = require_lexer();
    var _source = require_source();
    var _tokenKind = require_tokenKind();
    function stripIgnoredCharacters(source) {
      const sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
      const body = sourceObj.body;
      const lexer = new _lexer.Lexer(sourceObj);
      let strippedBody = "";
      let wasLastAddedTokenNonPunctuator = false;
      while (lexer.advance().kind !== _tokenKind.TokenKind.EOF) {
        const currentToken = lexer.token;
        const tokenKind = currentToken.kind;
        const isNonPunctuator = !(0, _lexer.isPunctuatorTokenKind)(currentToken.kind);
        if (wasLastAddedTokenNonPunctuator) {
          if (isNonPunctuator || currentToken.kind === _tokenKind.TokenKind.SPREAD) {
            strippedBody += " ";
          }
        }
        const tokenBody = body.slice(currentToken.start, currentToken.end);
        if (tokenKind === _tokenKind.TokenKind.BLOCK_STRING) {
          strippedBody += (0, _blockString.printBlockString)(currentToken.value, {
            minimize: true
          });
        } else {
          strippedBody += tokenBody;
        }
        wasLastAddedTokenNonPunctuator = isNonPunctuator;
      }
      return strippedBody;
    }
  }
});

// ../../node_modules/graphql/utilities/assertValidName.js
var require_assertValidName = __commonJS({
  "../../node_modules/graphql/utilities/assertValidName.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.assertValidName = assertValidName;
    exports.isValidNameError = isValidNameError;
    var _devAssert = require_devAssert();
    var _GraphQLError = require_GraphQLError();
    var _assertName = require_assertName();
    function assertValidName(name) {
      const error = isValidNameError(name);
      if (error) {
        throw error;
      }
      return name;
    }
    function isValidNameError(name) {
      typeof name === "string" || (0, _devAssert.devAssert)(false, "Expected name to be a string.");
      if (name.startsWith("__")) {
        return new _GraphQLError.GraphQLError(`Name "${name}" must not begin with "__", which is reserved by GraphQL introspection.`);
      }
      try {
        (0, _assertName.assertName)(name);
      } catch (error) {
        return error;
      }
    }
  }
});

// ../../node_modules/graphql/utilities/findBreakingChanges.js
var require_findBreakingChanges = __commonJS({
  "../../node_modules/graphql/utilities/findBreakingChanges.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DangerousChangeType = exports.BreakingChangeType = void 0;
    exports.findBreakingChanges = findBreakingChanges;
    exports.findDangerousChanges = findDangerousChanges;
    var _inspect = require_inspect();
    var _invariant = require_invariant2();
    var _keyMap = require_keyMap();
    var _printer = require_printer();
    var _definition = require_definition();
    var _scalars = require_scalars();
    var _astFromValue = require_astFromValue();
    var _sortValueNode = require_sortValueNode();
    var BreakingChangeType;
    exports.BreakingChangeType = BreakingChangeType;
    (function(BreakingChangeType2) {
      BreakingChangeType2["TYPE_REMOVED"] = "TYPE_REMOVED";
      BreakingChangeType2["TYPE_CHANGED_KIND"] = "TYPE_CHANGED_KIND";
      BreakingChangeType2["TYPE_REMOVED_FROM_UNION"] = "TYPE_REMOVED_FROM_UNION";
      BreakingChangeType2["VALUE_REMOVED_FROM_ENUM"] = "VALUE_REMOVED_FROM_ENUM";
      BreakingChangeType2["REQUIRED_INPUT_FIELD_ADDED"] = "REQUIRED_INPUT_FIELD_ADDED";
      BreakingChangeType2["IMPLEMENTED_INTERFACE_REMOVED"] = "IMPLEMENTED_INTERFACE_REMOVED";
      BreakingChangeType2["FIELD_REMOVED"] = "FIELD_REMOVED";
      BreakingChangeType2["FIELD_CHANGED_KIND"] = "FIELD_CHANGED_KIND";
      BreakingChangeType2["REQUIRED_ARG_ADDED"] = "REQUIRED_ARG_ADDED";
      BreakingChangeType2["ARG_REMOVED"] = "ARG_REMOVED";
      BreakingChangeType2["ARG_CHANGED_KIND"] = "ARG_CHANGED_KIND";
      BreakingChangeType2["DIRECTIVE_REMOVED"] = "DIRECTIVE_REMOVED";
      BreakingChangeType2["DIRECTIVE_ARG_REMOVED"] = "DIRECTIVE_ARG_REMOVED";
      BreakingChangeType2["REQUIRED_DIRECTIVE_ARG_ADDED"] = "REQUIRED_DIRECTIVE_ARG_ADDED";
      BreakingChangeType2["DIRECTIVE_REPEATABLE_REMOVED"] = "DIRECTIVE_REPEATABLE_REMOVED";
      BreakingChangeType2["DIRECTIVE_LOCATION_REMOVED"] = "DIRECTIVE_LOCATION_REMOVED";
    })(BreakingChangeType || (exports.BreakingChangeType = BreakingChangeType = {}));
    var DangerousChangeType;
    exports.DangerousChangeType = DangerousChangeType;
    (function(DangerousChangeType2) {
      DangerousChangeType2["VALUE_ADDED_TO_ENUM"] = "VALUE_ADDED_TO_ENUM";
      DangerousChangeType2["TYPE_ADDED_TO_UNION"] = "TYPE_ADDED_TO_UNION";
      DangerousChangeType2["OPTIONAL_INPUT_FIELD_ADDED"] = "OPTIONAL_INPUT_FIELD_ADDED";
      DangerousChangeType2["OPTIONAL_ARG_ADDED"] = "OPTIONAL_ARG_ADDED";
      DangerousChangeType2["IMPLEMENTED_INTERFACE_ADDED"] = "IMPLEMENTED_INTERFACE_ADDED";
      DangerousChangeType2["ARG_DEFAULT_VALUE_CHANGE"] = "ARG_DEFAULT_VALUE_CHANGE";
    })(DangerousChangeType || (exports.DangerousChangeType = DangerousChangeType = {}));
    function findBreakingChanges(oldSchema, newSchema) {
      return findSchemaChanges(oldSchema, newSchema).filter((change) => change.type in BreakingChangeType);
    }
    function findDangerousChanges(oldSchema, newSchema) {
      return findSchemaChanges(oldSchema, newSchema).filter((change) => change.type in DangerousChangeType);
    }
    function findSchemaChanges(oldSchema, newSchema) {
      return [
        ...findTypeChanges(oldSchema, newSchema),
        ...findDirectiveChanges(oldSchema, newSchema)
      ];
    }
    function findDirectiveChanges(oldSchema, newSchema) {
      const schemaChanges = [];
      const directivesDiff = diff(oldSchema.getDirectives(), newSchema.getDirectives());
      for (const oldDirective of directivesDiff.removed) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_REMOVED,
          description: `${oldDirective.name} was removed.`
        });
      }
      for (const [oldDirective, newDirective] of directivesDiff.persisted) {
        const argsDiff = diff(oldDirective.args, newDirective.args);
        for (const newArg of argsDiff.added) {
          if ((0, _definition.isRequiredArgument)(newArg)) {
            schemaChanges.push({
              type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
              description: `A required arg ${newArg.name} on directive ${oldDirective.name} was added.`
            });
          }
        }
        for (const oldArg of argsDiff.removed) {
          schemaChanges.push({
            type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
            description: `${oldArg.name} was removed from ${oldDirective.name}.`
          });
        }
        if (oldDirective.isRepeatable && !newDirective.isRepeatable) {
          schemaChanges.push({
            type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
            description: `Repeatable flag was removed from ${oldDirective.name}.`
          });
        }
        for (const location2 of oldDirective.locations) {
          if (!newDirective.locations.includes(location2)) {
            schemaChanges.push({
              type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
              description: `${location2} was removed from ${oldDirective.name}.`
            });
          }
        }
      }
      return schemaChanges;
    }
    function findTypeChanges(oldSchema, newSchema) {
      const schemaChanges = [];
      const typesDiff = diff(Object.values(oldSchema.getTypeMap()), Object.values(newSchema.getTypeMap()));
      for (const oldType of typesDiff.removed) {
        schemaChanges.push({
          type: BreakingChangeType.TYPE_REMOVED,
          description: (0, _scalars.isSpecifiedScalarType)(oldType) ? `Standard scalar ${oldType.name} was removed because it is not referenced anymore.` : `${oldType.name} was removed.`
        });
      }
      for (const [oldType, newType] of typesDiff.persisted) {
        if ((0, _definition.isEnumType)(oldType) && (0, _definition.isEnumType)(newType)) {
          schemaChanges.push(...findEnumTypeChanges(oldType, newType));
        } else if ((0, _definition.isUnionType)(oldType) && (0, _definition.isUnionType)(newType)) {
          schemaChanges.push(...findUnionTypeChanges(oldType, newType));
        } else if ((0, _definition.isInputObjectType)(oldType) && (0, _definition.isInputObjectType)(newType)) {
          schemaChanges.push(...findInputObjectTypeChanges(oldType, newType));
        } else if ((0, _definition.isObjectType)(oldType) && (0, _definition.isObjectType)(newType)) {
          schemaChanges.push(...findFieldChanges(oldType, newType), ...findImplementedInterfacesChanges(oldType, newType));
        } else if ((0, _definition.isInterfaceType)(oldType) && (0, _definition.isInterfaceType)(newType)) {
          schemaChanges.push(...findFieldChanges(oldType, newType), ...findImplementedInterfacesChanges(oldType, newType));
        } else if (oldType.constructor !== newType.constructor) {
          schemaChanges.push({
            type: BreakingChangeType.TYPE_CHANGED_KIND,
            description: `${oldType.name} changed from ${typeKindName(oldType)} to ${typeKindName(newType)}.`
          });
        }
      }
      return schemaChanges;
    }
    function findInputObjectTypeChanges(oldType, newType) {
      const schemaChanges = [];
      const fieldsDiff = diff(Object.values(oldType.getFields()), Object.values(newType.getFields()));
      for (const newField of fieldsDiff.added) {
        if ((0, _definition.isRequiredInputField)(newField)) {
          schemaChanges.push({
            type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
            description: `A required field ${newField.name} on input type ${oldType.name} was added.`
          });
        } else {
          schemaChanges.push({
            type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
            description: `An optional field ${newField.name} on input type ${oldType.name} was added.`
          });
        }
      }
      for (const oldField of fieldsDiff.removed) {
        schemaChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: `${oldType.name}.${oldField.name} was removed.`
        });
      }
      for (const [oldField, newField] of fieldsDiff.persisted) {
        const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldField.type, newField.type);
        if (!isSafe) {
          schemaChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: `${oldType.name}.${oldField.name} changed type from ${String(oldField.type)} to ${String(newField.type)}.`
          });
        }
      }
      return schemaChanges;
    }
    function findUnionTypeChanges(oldType, newType) {
      const schemaChanges = [];
      const possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());
      for (const newPossibleType of possibleTypesDiff.added) {
        schemaChanges.push({
          type: DangerousChangeType.TYPE_ADDED_TO_UNION,
          description: `${newPossibleType.name} was added to union type ${oldType.name}.`
        });
      }
      for (const oldPossibleType of possibleTypesDiff.removed) {
        schemaChanges.push({
          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
          description: `${oldPossibleType.name} was removed from union type ${oldType.name}.`
        });
      }
      return schemaChanges;
    }
    function findEnumTypeChanges(oldType, newType) {
      const schemaChanges = [];
      const valuesDiff = diff(oldType.getValues(), newType.getValues());
      for (const newValue of valuesDiff.added) {
        schemaChanges.push({
          type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
          description: `${newValue.name} was added to enum type ${oldType.name}.`
        });
      }
      for (const oldValue of valuesDiff.removed) {
        schemaChanges.push({
          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
          description: `${oldValue.name} was removed from enum type ${oldType.name}.`
        });
      }
      return schemaChanges;
    }
    function findImplementedInterfacesChanges(oldType, newType) {
      const schemaChanges = [];
      const interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());
      for (const newInterface of interfacesDiff.added) {
        schemaChanges.push({
          type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
          description: `${newInterface.name} added to interfaces implemented by ${oldType.name}.`
        });
      }
      for (const oldInterface of interfacesDiff.removed) {
        schemaChanges.push({
          type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
          description: `${oldType.name} no longer implements interface ${oldInterface.name}.`
        });
      }
      return schemaChanges;
    }
    function findFieldChanges(oldType, newType) {
      const schemaChanges = [];
      const fieldsDiff = diff(Object.values(oldType.getFields()), Object.values(newType.getFields()));
      for (const oldField of fieldsDiff.removed) {
        schemaChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: `${oldType.name}.${oldField.name} was removed.`
        });
      }
      for (const [oldField, newField] of fieldsDiff.persisted) {
        schemaChanges.push(...findArgChanges(oldType, oldField, newField));
        const isSafe = isChangeSafeForObjectOrInterfaceField(oldField.type, newField.type);
        if (!isSafe) {
          schemaChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: `${oldType.name}.${oldField.name} changed type from ${String(oldField.type)} to ${String(newField.type)}.`
          });
        }
      }
      return schemaChanges;
    }
    function findArgChanges(oldType, oldField, newField) {
      const schemaChanges = [];
      const argsDiff = diff(oldField.args, newField.args);
      for (const oldArg of argsDiff.removed) {
        schemaChanges.push({
          type: BreakingChangeType.ARG_REMOVED,
          description: `${oldType.name}.${oldField.name} arg ${oldArg.name} was removed.`
        });
      }
      for (const [oldArg, newArg] of argsDiff.persisted) {
        const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArg.type, newArg.type);
        if (!isSafe) {
          schemaChanges.push({
            type: BreakingChangeType.ARG_CHANGED_KIND,
            description: `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed type from ${String(oldArg.type)} to ${String(newArg.type)}.`
          });
        } else if (oldArg.defaultValue !== void 0) {
          if (newArg.defaultValue === void 0) {
            schemaChanges.push({
              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
              description: `${oldType.name}.${oldField.name} arg ${oldArg.name} defaultValue was removed.`
            });
          } else {
            const oldValueStr = stringifyValue(oldArg.defaultValue, oldArg.type);
            const newValueStr = stringifyValue(newArg.defaultValue, newArg.type);
            if (oldValueStr !== newValueStr) {
              schemaChanges.push({
                type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
                description: `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed defaultValue from ${oldValueStr} to ${newValueStr}.`
              });
            }
          }
        }
      }
      for (const newArg of argsDiff.added) {
        if ((0, _definition.isRequiredArgument)(newArg)) {
          schemaChanges.push({
            type: BreakingChangeType.REQUIRED_ARG_ADDED,
            description: `A required arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`
          });
        } else {
          schemaChanges.push({
            type: DangerousChangeType.OPTIONAL_ARG_ADDED,
            description: `An optional arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`
          });
        }
      }
      return schemaChanges;
    }
    function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
      if ((0, _definition.isListType)(oldType)) {
        return (0, _definition.isListType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType);
      }
      if ((0, _definition.isNonNullType)(oldType)) {
        return (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
      }
      return (0, _definition.isNamedType)(newType) && oldType.name === newType.name || (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType);
    }
    function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
      if ((0, _definition.isListType)(oldType)) {
        return (0, _definition.isListType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
      }
      if ((0, _definition.isNonNullType)(oldType)) {
        return (0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || !(0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType);
      }
      return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
    }
    function typeKindName(type) {
      if ((0, _definition.isScalarType)(type)) {
        return "a Scalar type";
      }
      if ((0, _definition.isObjectType)(type)) {
        return "an Object type";
      }
      if ((0, _definition.isInterfaceType)(type)) {
        return "an Interface type";
      }
      if ((0, _definition.isUnionType)(type)) {
        return "a Union type";
      }
      if ((0, _definition.isEnumType)(type)) {
        return "an Enum type";
      }
      if ((0, _definition.isInputObjectType)(type)) {
        return "an Input type";
      }
      (0, _invariant.invariant)(false, "Unexpected type: " + (0, _inspect.inspect)(type));
    }
    function stringifyValue(value, type) {
      const ast = (0, _astFromValue.astFromValue)(value, type);
      ast != null || (0, _invariant.invariant)(false);
      return (0, _printer.print)((0, _sortValueNode.sortValueNode)(ast));
    }
    function diff(oldArray, newArray) {
      const added = [];
      const removed = [];
      const persisted = [];
      const oldMap = (0, _keyMap.keyMap)(oldArray, ({ name }) => name);
      const newMap = (0, _keyMap.keyMap)(newArray, ({ name }) => name);
      for (const oldItem of oldArray) {
        const newItem = newMap[oldItem.name];
        if (newItem === void 0) {
          removed.push(oldItem);
        } else {
          persisted.push([oldItem, newItem]);
        }
      }
      for (const newItem of newArray) {
        if (oldMap[newItem.name] === void 0) {
          added.push(newItem);
        }
      }
      return {
        added,
        persisted,
        removed
      };
    }
  }
});

// ../../node_modules/graphql/utilities/index.js
var require_utilities = __commonJS({
  "../../node_modules/graphql/utilities/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "BreakingChangeType", {
      enumerable: true,
      get: function() {
        return _findBreakingChanges.BreakingChangeType;
      }
    });
    Object.defineProperty(exports, "DangerousChangeType", {
      enumerable: true,
      get: function() {
        return _findBreakingChanges.DangerousChangeType;
      }
    });
    Object.defineProperty(exports, "TypeInfo", {
      enumerable: true,
      get: function() {
        return _TypeInfo.TypeInfo;
      }
    });
    Object.defineProperty(exports, "assertValidName", {
      enumerable: true,
      get: function() {
        return _assertValidName.assertValidName;
      }
    });
    Object.defineProperty(exports, "astFromValue", {
      enumerable: true,
      get: function() {
        return _astFromValue.astFromValue;
      }
    });
    Object.defineProperty(exports, "buildASTSchema", {
      enumerable: true,
      get: function() {
        return _buildASTSchema.buildASTSchema;
      }
    });
    Object.defineProperty(exports, "buildClientSchema", {
      enumerable: true,
      get: function() {
        return _buildClientSchema.buildClientSchema;
      }
    });
    Object.defineProperty(exports, "buildSchema", {
      enumerable: true,
      get: function() {
        return _buildASTSchema.buildSchema;
      }
    });
    Object.defineProperty(exports, "coerceInputValue", {
      enumerable: true,
      get: function() {
        return _coerceInputValue.coerceInputValue;
      }
    });
    Object.defineProperty(exports, "concatAST", {
      enumerable: true,
      get: function() {
        return _concatAST.concatAST;
      }
    });
    Object.defineProperty(exports, "doTypesOverlap", {
      enumerable: true,
      get: function() {
        return _typeComparators.doTypesOverlap;
      }
    });
    Object.defineProperty(exports, "extendSchema", {
      enumerable: true,
      get: function() {
        return _extendSchema.extendSchema;
      }
    });
    Object.defineProperty(exports, "findBreakingChanges", {
      enumerable: true,
      get: function() {
        return _findBreakingChanges.findBreakingChanges;
      }
    });
    Object.defineProperty(exports, "findDangerousChanges", {
      enumerable: true,
      get: function() {
        return _findBreakingChanges.findDangerousChanges;
      }
    });
    Object.defineProperty(exports, "getIntrospectionQuery", {
      enumerable: true,
      get: function() {
        return _getIntrospectionQuery.getIntrospectionQuery;
      }
    });
    Object.defineProperty(exports, "getOperationAST", {
      enumerable: true,
      get: function() {
        return _getOperationAST.getOperationAST;
      }
    });
    Object.defineProperty(exports, "getOperationRootType", {
      enumerable: true,
      get: function() {
        return _getOperationRootType.getOperationRootType;
      }
    });
    Object.defineProperty(exports, "introspectionFromSchema", {
      enumerable: true,
      get: function() {
        return _introspectionFromSchema.introspectionFromSchema;
      }
    });
    Object.defineProperty(exports, "isEqualType", {
      enumerable: true,
      get: function() {
        return _typeComparators.isEqualType;
      }
    });
    Object.defineProperty(exports, "isTypeSubTypeOf", {
      enumerable: true,
      get: function() {
        return _typeComparators.isTypeSubTypeOf;
      }
    });
    Object.defineProperty(exports, "isValidNameError", {
      enumerable: true,
      get: function() {
        return _assertValidName.isValidNameError;
      }
    });
    Object.defineProperty(exports, "lexicographicSortSchema", {
      enumerable: true,
      get: function() {
        return _lexicographicSortSchema.lexicographicSortSchema;
      }
    });
    Object.defineProperty(exports, "printIntrospectionSchema", {
      enumerable: true,
      get: function() {
        return _printSchema.printIntrospectionSchema;
      }
    });
    Object.defineProperty(exports, "printSchema", {
      enumerable: true,
      get: function() {
        return _printSchema.printSchema;
      }
    });
    Object.defineProperty(exports, "printType", {
      enumerable: true,
      get: function() {
        return _printSchema.printType;
      }
    });
    Object.defineProperty(exports, "separateOperations", {
      enumerable: true,
      get: function() {
        return _separateOperations.separateOperations;
      }
    });
    Object.defineProperty(exports, "stripIgnoredCharacters", {
      enumerable: true,
      get: function() {
        return _stripIgnoredCharacters.stripIgnoredCharacters;
      }
    });
    Object.defineProperty(exports, "typeFromAST", {
      enumerable: true,
      get: function() {
        return _typeFromAST.typeFromAST;
      }
    });
    Object.defineProperty(exports, "valueFromAST", {
      enumerable: true,
      get: function() {
        return _valueFromAST.valueFromAST;
      }
    });
    Object.defineProperty(exports, "valueFromASTUntyped", {
      enumerable: true,
      get: function() {
        return _valueFromASTUntyped.valueFromASTUntyped;
      }
    });
    Object.defineProperty(exports, "visitWithTypeInfo", {
      enumerable: true,
      get: function() {
        return _TypeInfo.visitWithTypeInfo;
      }
    });
    var _getIntrospectionQuery = require_getIntrospectionQuery();
    var _getOperationAST = require_getOperationAST();
    var _getOperationRootType = require_getOperationRootType();
    var _introspectionFromSchema = require_introspectionFromSchema();
    var _buildClientSchema = require_buildClientSchema();
    var _buildASTSchema = require_buildASTSchema();
    var _extendSchema = require_extendSchema();
    var _lexicographicSortSchema = require_lexicographicSortSchema();
    var _printSchema = require_printSchema();
    var _typeFromAST = require_typeFromAST();
    var _valueFromAST = require_valueFromAST();
    var _valueFromASTUntyped = require_valueFromASTUntyped();
    var _astFromValue = require_astFromValue();
    var _TypeInfo = require_TypeInfo();
    var _coerceInputValue = require_coerceInputValue();
    var _concatAST = require_concatAST();
    var _separateOperations = require_separateOperations();
    var _stripIgnoredCharacters = require_stripIgnoredCharacters();
    var _typeComparators = require_typeComparators();
    var _assertValidName = require_assertValidName();
    var _findBreakingChanges = require_findBreakingChanges();
  }
});

// ../../node_modules/graphql/index.js
var require_graphql2 = __commonJS({
  "../../node_modules/graphql/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "BREAK", {
      enumerable: true,
      get: function() {
        return _index2.BREAK;
      }
    });
    Object.defineProperty(exports, "BreakingChangeType", {
      enumerable: true,
      get: function() {
        return _index6.BreakingChangeType;
      }
    });
    Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
      enumerable: true,
      get: function() {
        return _index.DEFAULT_DEPRECATION_REASON;
      }
    });
    Object.defineProperty(exports, "DangerousChangeType", {
      enumerable: true,
      get: function() {
        return _index6.DangerousChangeType;
      }
    });
    Object.defineProperty(exports, "DirectiveLocation", {
      enumerable: true,
      get: function() {
        return _index2.DirectiveLocation;
      }
    });
    Object.defineProperty(exports, "ExecutableDefinitionsRule", {
      enumerable: true,
      get: function() {
        return _index4.ExecutableDefinitionsRule;
      }
    });
    Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
      enumerable: true,
      get: function() {
        return _index4.FieldsOnCorrectTypeRule;
      }
    });
    Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
      enumerable: true,
      get: function() {
        return _index4.FragmentsOnCompositeTypesRule;
      }
    });
    Object.defineProperty(exports, "GRAPHQL_MAX_INT", {
      enumerable: true,
      get: function() {
        return _index.GRAPHQL_MAX_INT;
      }
    });
    Object.defineProperty(exports, "GRAPHQL_MIN_INT", {
      enumerable: true,
      get: function() {
        return _index.GRAPHQL_MIN_INT;
      }
    });
    Object.defineProperty(exports, "GraphQLBoolean", {
      enumerable: true,
      get: function() {
        return _index.GraphQLBoolean;
      }
    });
    Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
      enumerable: true,
      get: function() {
        return _index.GraphQLDeprecatedDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLDirective", {
      enumerable: true,
      get: function() {
        return _index.GraphQLDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLEnumType", {
      enumerable: true,
      get: function() {
        return _index.GraphQLEnumType;
      }
    });
    Object.defineProperty(exports, "GraphQLError", {
      enumerable: true,
      get: function() {
        return _index5.GraphQLError;
      }
    });
    Object.defineProperty(exports, "GraphQLFloat", {
      enumerable: true,
      get: function() {
        return _index.GraphQLFloat;
      }
    });
    Object.defineProperty(exports, "GraphQLID", {
      enumerable: true,
      get: function() {
        return _index.GraphQLID;
      }
    });
    Object.defineProperty(exports, "GraphQLIncludeDirective", {
      enumerable: true,
      get: function() {
        return _index.GraphQLIncludeDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLInputObjectType", {
      enumerable: true,
      get: function() {
        return _index.GraphQLInputObjectType;
      }
    });
    Object.defineProperty(exports, "GraphQLInt", {
      enumerable: true,
      get: function() {
        return _index.GraphQLInt;
      }
    });
    Object.defineProperty(exports, "GraphQLInterfaceType", {
      enumerable: true,
      get: function() {
        return _index.GraphQLInterfaceType;
      }
    });
    Object.defineProperty(exports, "GraphQLList", {
      enumerable: true,
      get: function() {
        return _index.GraphQLList;
      }
    });
    Object.defineProperty(exports, "GraphQLNonNull", {
      enumerable: true,
      get: function() {
        return _index.GraphQLNonNull;
      }
    });
    Object.defineProperty(exports, "GraphQLObjectType", {
      enumerable: true,
      get: function() {
        return _index.GraphQLObjectType;
      }
    });
    Object.defineProperty(exports, "GraphQLScalarType", {
      enumerable: true,
      get: function() {
        return _index.GraphQLScalarType;
      }
    });
    Object.defineProperty(exports, "GraphQLSchema", {
      enumerable: true,
      get: function() {
        return _index.GraphQLSchema;
      }
    });
    Object.defineProperty(exports, "GraphQLSkipDirective", {
      enumerable: true,
      get: function() {
        return _index.GraphQLSkipDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLSpecifiedByDirective", {
      enumerable: true,
      get: function() {
        return _index.GraphQLSpecifiedByDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLString", {
      enumerable: true,
      get: function() {
        return _index.GraphQLString;
      }
    });
    Object.defineProperty(exports, "GraphQLUnionType", {
      enumerable: true,
      get: function() {
        return _index.GraphQLUnionType;
      }
    });
    Object.defineProperty(exports, "Kind", {
      enumerable: true,
      get: function() {
        return _index2.Kind;
      }
    });
    Object.defineProperty(exports, "KnownArgumentNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.KnownArgumentNamesRule;
      }
    });
    Object.defineProperty(exports, "KnownDirectivesRule", {
      enumerable: true,
      get: function() {
        return _index4.KnownDirectivesRule;
      }
    });
    Object.defineProperty(exports, "KnownFragmentNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.KnownFragmentNamesRule;
      }
    });
    Object.defineProperty(exports, "KnownTypeNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.KnownTypeNamesRule;
      }
    });
    Object.defineProperty(exports, "Lexer", {
      enumerable: true,
      get: function() {
        return _index2.Lexer;
      }
    });
    Object.defineProperty(exports, "Location", {
      enumerable: true,
      get: function() {
        return _index2.Location;
      }
    });
    Object.defineProperty(exports, "LoneAnonymousOperationRule", {
      enumerable: true,
      get: function() {
        return _index4.LoneAnonymousOperationRule;
      }
    });
    Object.defineProperty(exports, "LoneSchemaDefinitionRule", {
      enumerable: true,
      get: function() {
        return _index4.LoneSchemaDefinitionRule;
      }
    });
    Object.defineProperty(exports, "NoDeprecatedCustomRule", {
      enumerable: true,
      get: function() {
        return _index4.NoDeprecatedCustomRule;
      }
    });
    Object.defineProperty(exports, "NoFragmentCyclesRule", {
      enumerable: true,
      get: function() {
        return _index4.NoFragmentCyclesRule;
      }
    });
    Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", {
      enumerable: true,
      get: function() {
        return _index4.NoSchemaIntrospectionCustomRule;
      }
    });
    Object.defineProperty(exports, "NoUndefinedVariablesRule", {
      enumerable: true,
      get: function() {
        return _index4.NoUndefinedVariablesRule;
      }
    });
    Object.defineProperty(exports, "NoUnusedFragmentsRule", {
      enumerable: true,
      get: function() {
        return _index4.NoUnusedFragmentsRule;
      }
    });
    Object.defineProperty(exports, "NoUnusedVariablesRule", {
      enumerable: true,
      get: function() {
        return _index4.NoUnusedVariablesRule;
      }
    });
    Object.defineProperty(exports, "OperationTypeNode", {
      enumerable: true,
      get: function() {
        return _index2.OperationTypeNode;
      }
    });
    Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
      enumerable: true,
      get: function() {
        return _index4.OverlappingFieldsCanBeMergedRule;
      }
    });
    Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
      enumerable: true,
      get: function() {
        return _index4.PossibleFragmentSpreadsRule;
      }
    });
    Object.defineProperty(exports, "PossibleTypeExtensionsRule", {
      enumerable: true,
      get: function() {
        return _index4.PossibleTypeExtensionsRule;
      }
    });
    Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
      enumerable: true,
      get: function() {
        return _index4.ProvidedRequiredArgumentsRule;
      }
    });
    Object.defineProperty(exports, "ScalarLeafsRule", {
      enumerable: true,
      get: function() {
        return _index4.ScalarLeafsRule;
      }
    });
    Object.defineProperty(exports, "SchemaMetaFieldDef", {
      enumerable: true,
      get: function() {
        return _index.SchemaMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
      enumerable: true,
      get: function() {
        return _index4.SingleFieldSubscriptionsRule;
      }
    });
    Object.defineProperty(exports, "Source", {
      enumerable: true,
      get: function() {
        return _index2.Source;
      }
    });
    Object.defineProperty(exports, "Token", {
      enumerable: true,
      get: function() {
        return _index2.Token;
      }
    });
    Object.defineProperty(exports, "TokenKind", {
      enumerable: true,
      get: function() {
        return _index2.TokenKind;
      }
    });
    Object.defineProperty(exports, "TypeInfo", {
      enumerable: true,
      get: function() {
        return _index6.TypeInfo;
      }
    });
    Object.defineProperty(exports, "TypeKind", {
      enumerable: true,
      get: function() {
        return _index.TypeKind;
      }
    });
    Object.defineProperty(exports, "TypeMetaFieldDef", {
      enumerable: true,
      get: function() {
        return _index.TypeMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "TypeNameMetaFieldDef", {
      enumerable: true,
      get: function() {
        return _index.TypeNameMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "UniqueArgumentDefinitionNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueArgumentDefinitionNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueArgumentNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueArgumentNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueDirectiveNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueDirectiveNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueDirectivesPerLocationRule;
      }
    });
    Object.defineProperty(exports, "UniqueEnumValueNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueEnumValueNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueFieldDefinitionNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueFragmentNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueFragmentNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueInputFieldNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueOperationNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueOperationNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueOperationTypesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueOperationTypesRule;
      }
    });
    Object.defineProperty(exports, "UniqueTypeNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueTypeNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueVariableNamesRule", {
      enumerable: true,
      get: function() {
        return _index4.UniqueVariableNamesRule;
      }
    });
    Object.defineProperty(exports, "ValidationContext", {
      enumerable: true,
      get: function() {
        return _index4.ValidationContext;
      }
    });
    Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
      enumerable: true,
      get: function() {
        return _index4.ValuesOfCorrectTypeRule;
      }
    });
    Object.defineProperty(exports, "VariablesAreInputTypesRule", {
      enumerable: true,
      get: function() {
        return _index4.VariablesAreInputTypesRule;
      }
    });
    Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
      enumerable: true,
      get: function() {
        return _index4.VariablesInAllowedPositionRule;
      }
    });
    Object.defineProperty(exports, "__Directive", {
      enumerable: true,
      get: function() {
        return _index.__Directive;
      }
    });
    Object.defineProperty(exports, "__DirectiveLocation", {
      enumerable: true,
      get: function() {
        return _index.__DirectiveLocation;
      }
    });
    Object.defineProperty(exports, "__EnumValue", {
      enumerable: true,
      get: function() {
        return _index.__EnumValue;
      }
    });
    Object.defineProperty(exports, "__Field", {
      enumerable: true,
      get: function() {
        return _index.__Field;
      }
    });
    Object.defineProperty(exports, "__InputValue", {
      enumerable: true,
      get: function() {
        return _index.__InputValue;
      }
    });
    Object.defineProperty(exports, "__Schema", {
      enumerable: true,
      get: function() {
        return _index.__Schema;
      }
    });
    Object.defineProperty(exports, "__Type", {
      enumerable: true,
      get: function() {
        return _index.__Type;
      }
    });
    Object.defineProperty(exports, "__TypeKind", {
      enumerable: true,
      get: function() {
        return _index.__TypeKind;
      }
    });
    Object.defineProperty(exports, "assertAbstractType", {
      enumerable: true,
      get: function() {
        return _index.assertAbstractType;
      }
    });
    Object.defineProperty(exports, "assertCompositeType", {
      enumerable: true,
      get: function() {
        return _index.assertCompositeType;
      }
    });
    Object.defineProperty(exports, "assertDirective", {
      enumerable: true,
      get: function() {
        return _index.assertDirective;
      }
    });
    Object.defineProperty(exports, "assertEnumType", {
      enumerable: true,
      get: function() {
        return _index.assertEnumType;
      }
    });
    Object.defineProperty(exports, "assertEnumValueName", {
      enumerable: true,
      get: function() {
        return _index.assertEnumValueName;
      }
    });
    Object.defineProperty(exports, "assertInputObjectType", {
      enumerable: true,
      get: function() {
        return _index.assertInputObjectType;
      }
    });
    Object.defineProperty(exports, "assertInputType", {
      enumerable: true,
      get: function() {
        return _index.assertInputType;
      }
    });
    Object.defineProperty(exports, "assertInterfaceType", {
      enumerable: true,
      get: function() {
        return _index.assertInterfaceType;
      }
    });
    Object.defineProperty(exports, "assertLeafType", {
      enumerable: true,
      get: function() {
        return _index.assertLeafType;
      }
    });
    Object.defineProperty(exports, "assertListType", {
      enumerable: true,
      get: function() {
        return _index.assertListType;
      }
    });
    Object.defineProperty(exports, "assertName", {
      enumerable: true,
      get: function() {
        return _index.assertName;
      }
    });
    Object.defineProperty(exports, "assertNamedType", {
      enumerable: true,
      get: function() {
        return _index.assertNamedType;
      }
    });
    Object.defineProperty(exports, "assertNonNullType", {
      enumerable: true,
      get: function() {
        return _index.assertNonNullType;
      }
    });
    Object.defineProperty(exports, "assertNullableType", {
      enumerable: true,
      get: function() {
        return _index.assertNullableType;
      }
    });
    Object.defineProperty(exports, "assertObjectType", {
      enumerable: true,
      get: function() {
        return _index.assertObjectType;
      }
    });
    Object.defineProperty(exports, "assertOutputType", {
      enumerable: true,
      get: function() {
        return _index.assertOutputType;
      }
    });
    Object.defineProperty(exports, "assertScalarType", {
      enumerable: true,
      get: function() {
        return _index.assertScalarType;
      }
    });
    Object.defineProperty(exports, "assertSchema", {
      enumerable: true,
      get: function() {
        return _index.assertSchema;
      }
    });
    Object.defineProperty(exports, "assertType", {
      enumerable: true,
      get: function() {
        return _index.assertType;
      }
    });
    Object.defineProperty(exports, "assertUnionType", {
      enumerable: true,
      get: function() {
        return _index.assertUnionType;
      }
    });
    Object.defineProperty(exports, "assertValidName", {
      enumerable: true,
      get: function() {
        return _index6.assertValidName;
      }
    });
    Object.defineProperty(exports, "assertValidSchema", {
      enumerable: true,
      get: function() {
        return _index.assertValidSchema;
      }
    });
    Object.defineProperty(exports, "assertWrappingType", {
      enumerable: true,
      get: function() {
        return _index.assertWrappingType;
      }
    });
    Object.defineProperty(exports, "astFromValue", {
      enumerable: true,
      get: function() {
        return _index6.astFromValue;
      }
    });
    Object.defineProperty(exports, "buildASTSchema", {
      enumerable: true,
      get: function() {
        return _index6.buildASTSchema;
      }
    });
    Object.defineProperty(exports, "buildClientSchema", {
      enumerable: true,
      get: function() {
        return _index6.buildClientSchema;
      }
    });
    Object.defineProperty(exports, "buildSchema", {
      enumerable: true,
      get: function() {
        return _index6.buildSchema;
      }
    });
    Object.defineProperty(exports, "coerceInputValue", {
      enumerable: true,
      get: function() {
        return _index6.coerceInputValue;
      }
    });
    Object.defineProperty(exports, "concatAST", {
      enumerable: true,
      get: function() {
        return _index6.concatAST;
      }
    });
    Object.defineProperty(exports, "createSourceEventStream", {
      enumerable: true,
      get: function() {
        return _index3.createSourceEventStream;
      }
    });
    Object.defineProperty(exports, "defaultFieldResolver", {
      enumerable: true,
      get: function() {
        return _index3.defaultFieldResolver;
      }
    });
    Object.defineProperty(exports, "defaultTypeResolver", {
      enumerable: true,
      get: function() {
        return _index3.defaultTypeResolver;
      }
    });
    Object.defineProperty(exports, "doTypesOverlap", {
      enumerable: true,
      get: function() {
        return _index6.doTypesOverlap;
      }
    });
    Object.defineProperty(exports, "execute", {
      enumerable: true,
      get: function() {
        return _index3.execute;
      }
    });
    Object.defineProperty(exports, "executeSync", {
      enumerable: true,
      get: function() {
        return _index3.executeSync;
      }
    });
    Object.defineProperty(exports, "extendSchema", {
      enumerable: true,
      get: function() {
        return _index6.extendSchema;
      }
    });
    Object.defineProperty(exports, "findBreakingChanges", {
      enumerable: true,
      get: function() {
        return _index6.findBreakingChanges;
      }
    });
    Object.defineProperty(exports, "findDangerousChanges", {
      enumerable: true,
      get: function() {
        return _index6.findDangerousChanges;
      }
    });
    Object.defineProperty(exports, "formatError", {
      enumerable: true,
      get: function() {
        return _index5.formatError;
      }
    });
    Object.defineProperty(exports, "getArgumentValues", {
      enumerable: true,
      get: function() {
        return _index3.getArgumentValues;
      }
    });
    Object.defineProperty(exports, "getDirectiveValues", {
      enumerable: true,
      get: function() {
        return _index3.getDirectiveValues;
      }
    });
    Object.defineProperty(exports, "getEnterLeaveForKind", {
      enumerable: true,
      get: function() {
        return _index2.getEnterLeaveForKind;
      }
    });
    Object.defineProperty(exports, "getIntrospectionQuery", {
      enumerable: true,
      get: function() {
        return _index6.getIntrospectionQuery;
      }
    });
    Object.defineProperty(exports, "getLocation", {
      enumerable: true,
      get: function() {
        return _index2.getLocation;
      }
    });
    Object.defineProperty(exports, "getNamedType", {
      enumerable: true,
      get: function() {
        return _index.getNamedType;
      }
    });
    Object.defineProperty(exports, "getNullableType", {
      enumerable: true,
      get: function() {
        return _index.getNullableType;
      }
    });
    Object.defineProperty(exports, "getOperationAST", {
      enumerable: true,
      get: function() {
        return _index6.getOperationAST;
      }
    });
    Object.defineProperty(exports, "getOperationRootType", {
      enumerable: true,
      get: function() {
        return _index6.getOperationRootType;
      }
    });
    Object.defineProperty(exports, "getVariableValues", {
      enumerable: true,
      get: function() {
        return _index3.getVariableValues;
      }
    });
    Object.defineProperty(exports, "getVisitFn", {
      enumerable: true,
      get: function() {
        return _index2.getVisitFn;
      }
    });
    Object.defineProperty(exports, "graphql", {
      enumerable: true,
      get: function() {
        return _graphql.graphql;
      }
    });
    Object.defineProperty(exports, "graphqlSync", {
      enumerable: true,
      get: function() {
        return _graphql.graphqlSync;
      }
    });
    Object.defineProperty(exports, "introspectionFromSchema", {
      enumerable: true,
      get: function() {
        return _index6.introspectionFromSchema;
      }
    });
    Object.defineProperty(exports, "introspectionTypes", {
      enumerable: true,
      get: function() {
        return _index.introspectionTypes;
      }
    });
    Object.defineProperty(exports, "isAbstractType", {
      enumerable: true,
      get: function() {
        return _index.isAbstractType;
      }
    });
    Object.defineProperty(exports, "isCompositeType", {
      enumerable: true,
      get: function() {
        return _index.isCompositeType;
      }
    });
    Object.defineProperty(exports, "isConstValueNode", {
      enumerable: true,
      get: function() {
        return _index2.isConstValueNode;
      }
    });
    Object.defineProperty(exports, "isDefinitionNode", {
      enumerable: true,
      get: function() {
        return _index2.isDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isDirective", {
      enumerable: true,
      get: function() {
        return _index.isDirective;
      }
    });
    Object.defineProperty(exports, "isEnumType", {
      enumerable: true,
      get: function() {
        return _index.isEnumType;
      }
    });
    Object.defineProperty(exports, "isEqualType", {
      enumerable: true,
      get: function() {
        return _index6.isEqualType;
      }
    });
    Object.defineProperty(exports, "isExecutableDefinitionNode", {
      enumerable: true,
      get: function() {
        return _index2.isExecutableDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isInputObjectType", {
      enumerable: true,
      get: function() {
        return _index.isInputObjectType;
      }
    });
    Object.defineProperty(exports, "isInputType", {
      enumerable: true,
      get: function() {
        return _index.isInputType;
      }
    });
    Object.defineProperty(exports, "isInterfaceType", {
      enumerable: true,
      get: function() {
        return _index.isInterfaceType;
      }
    });
    Object.defineProperty(exports, "isIntrospectionType", {
      enumerable: true,
      get: function() {
        return _index.isIntrospectionType;
      }
    });
    Object.defineProperty(exports, "isLeafType", {
      enumerable: true,
      get: function() {
        return _index.isLeafType;
      }
    });
    Object.defineProperty(exports, "isListType", {
      enumerable: true,
      get: function() {
        return _index.isListType;
      }
    });
    Object.defineProperty(exports, "isNamedType", {
      enumerable: true,
      get: function() {
        return _index.isNamedType;
      }
    });
    Object.defineProperty(exports, "isNonNullType", {
      enumerable: true,
      get: function() {
        return _index.isNonNullType;
      }
    });
    Object.defineProperty(exports, "isNullableType", {
      enumerable: true,
      get: function() {
        return _index.isNullableType;
      }
    });
    Object.defineProperty(exports, "isObjectType", {
      enumerable: true,
      get: function() {
        return _index.isObjectType;
      }
    });
    Object.defineProperty(exports, "isOutputType", {
      enumerable: true,
      get: function() {
        return _index.isOutputType;
      }
    });
    Object.defineProperty(exports, "isRequiredArgument", {
      enumerable: true,
      get: function() {
        return _index.isRequiredArgument;
      }
    });
    Object.defineProperty(exports, "isRequiredInputField", {
      enumerable: true,
      get: function() {
        return _index.isRequiredInputField;
      }
    });
    Object.defineProperty(exports, "isScalarType", {
      enumerable: true,
      get: function() {
        return _index.isScalarType;
      }
    });
    Object.defineProperty(exports, "isSchema", {
      enumerable: true,
      get: function() {
        return _index.isSchema;
      }
    });
    Object.defineProperty(exports, "isSelectionNode", {
      enumerable: true,
      get: function() {
        return _index2.isSelectionNode;
      }
    });
    Object.defineProperty(exports, "isSpecifiedDirective", {
      enumerable: true,
      get: function() {
        return _index.isSpecifiedDirective;
      }
    });
    Object.defineProperty(exports, "isSpecifiedScalarType", {
      enumerable: true,
      get: function() {
        return _index.isSpecifiedScalarType;
      }
    });
    Object.defineProperty(exports, "isType", {
      enumerable: true,
      get: function() {
        return _index.isType;
      }
    });
    Object.defineProperty(exports, "isTypeDefinitionNode", {
      enumerable: true,
      get: function() {
        return _index2.isTypeDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeExtensionNode", {
      enumerable: true,
      get: function() {
        return _index2.isTypeExtensionNode;
      }
    });
    Object.defineProperty(exports, "isTypeNode", {
      enumerable: true,
      get: function() {
        return _index2.isTypeNode;
      }
    });
    Object.defineProperty(exports, "isTypeSubTypeOf", {
      enumerable: true,
      get: function() {
        return _index6.isTypeSubTypeOf;
      }
    });
    Object.defineProperty(exports, "isTypeSystemDefinitionNode", {
      enumerable: true,
      get: function() {
        return _index2.isTypeSystemDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeSystemExtensionNode", {
      enumerable: true,
      get: function() {
        return _index2.isTypeSystemExtensionNode;
      }
    });
    Object.defineProperty(exports, "isUnionType", {
      enumerable: true,
      get: function() {
        return _index.isUnionType;
      }
    });
    Object.defineProperty(exports, "isValidNameError", {
      enumerable: true,
      get: function() {
        return _index6.isValidNameError;
      }
    });
    Object.defineProperty(exports, "isValueNode", {
      enumerable: true,
      get: function() {
        return _index2.isValueNode;
      }
    });
    Object.defineProperty(exports, "isWrappingType", {
      enumerable: true,
      get: function() {
        return _index.isWrappingType;
      }
    });
    Object.defineProperty(exports, "lexicographicSortSchema", {
      enumerable: true,
      get: function() {
        return _index6.lexicographicSortSchema;
      }
    });
    Object.defineProperty(exports, "locatedError", {
      enumerable: true,
      get: function() {
        return _index5.locatedError;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function() {
        return _index2.parse;
      }
    });
    Object.defineProperty(exports, "parseConstValue", {
      enumerable: true,
      get: function() {
        return _index2.parseConstValue;
      }
    });
    Object.defineProperty(exports, "parseType", {
      enumerable: true,
      get: function() {
        return _index2.parseType;
      }
    });
    Object.defineProperty(exports, "parseValue", {
      enumerable: true,
      get: function() {
        return _index2.parseValue;
      }
    });
    Object.defineProperty(exports, "print", {
      enumerable: true,
      get: function() {
        return _index2.print;
      }
    });
    Object.defineProperty(exports, "printError", {
      enumerable: true,
      get: function() {
        return _index5.printError;
      }
    });
    Object.defineProperty(exports, "printIntrospectionSchema", {
      enumerable: true,
      get: function() {
        return _index6.printIntrospectionSchema;
      }
    });
    Object.defineProperty(exports, "printLocation", {
      enumerable: true,
      get: function() {
        return _index2.printLocation;
      }
    });
    Object.defineProperty(exports, "printSchema", {
      enumerable: true,
      get: function() {
        return _index6.printSchema;
      }
    });
    Object.defineProperty(exports, "printSourceLocation", {
      enumerable: true,
      get: function() {
        return _index2.printSourceLocation;
      }
    });
    Object.defineProperty(exports, "printType", {
      enumerable: true,
      get: function() {
        return _index6.printType;
      }
    });
    Object.defineProperty(exports, "resolveObjMapThunk", {
      enumerable: true,
      get: function() {
        return _index.resolveObjMapThunk;
      }
    });
    Object.defineProperty(exports, "resolveReadonlyArrayThunk", {
      enumerable: true,
      get: function() {
        return _index.resolveReadonlyArrayThunk;
      }
    });
    Object.defineProperty(exports, "responsePathAsArray", {
      enumerable: true,
      get: function() {
        return _index3.responsePathAsArray;
      }
    });
    Object.defineProperty(exports, "separateOperations", {
      enumerable: true,
      get: function() {
        return _index6.separateOperations;
      }
    });
    Object.defineProperty(exports, "specifiedDirectives", {
      enumerable: true,
      get: function() {
        return _index.specifiedDirectives;
      }
    });
    Object.defineProperty(exports, "specifiedRules", {
      enumerable: true,
      get: function() {
        return _index4.specifiedRules;
      }
    });
    Object.defineProperty(exports, "specifiedScalarTypes", {
      enumerable: true,
      get: function() {
        return _index.specifiedScalarTypes;
      }
    });
    Object.defineProperty(exports, "stripIgnoredCharacters", {
      enumerable: true,
      get: function() {
        return _index6.stripIgnoredCharacters;
      }
    });
    Object.defineProperty(exports, "subscribe", {
      enumerable: true,
      get: function() {
        return _index3.subscribe;
      }
    });
    Object.defineProperty(exports, "syntaxError", {
      enumerable: true,
      get: function() {
        return _index5.syntaxError;
      }
    });
    Object.defineProperty(exports, "typeFromAST", {
      enumerable: true,
      get: function() {
        return _index6.typeFromAST;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function() {
        return _index4.validate;
      }
    });
    Object.defineProperty(exports, "validateSchema", {
      enumerable: true,
      get: function() {
        return _index.validateSchema;
      }
    });
    Object.defineProperty(exports, "valueFromAST", {
      enumerable: true,
      get: function() {
        return _index6.valueFromAST;
      }
    });
    Object.defineProperty(exports, "valueFromASTUntyped", {
      enumerable: true,
      get: function() {
        return _index6.valueFromASTUntyped;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function() {
        return _version.version;
      }
    });
    Object.defineProperty(exports, "versionInfo", {
      enumerable: true,
      get: function() {
        return _version.versionInfo;
      }
    });
    Object.defineProperty(exports, "visit", {
      enumerable: true,
      get: function() {
        return _index2.visit;
      }
    });
    Object.defineProperty(exports, "visitInParallel", {
      enumerable: true,
      get: function() {
        return _index2.visitInParallel;
      }
    });
    Object.defineProperty(exports, "visitWithTypeInfo", {
      enumerable: true,
      get: function() {
        return _index6.visitWithTypeInfo;
      }
    });
    var _version = require_version();
    var _graphql = require_graphql();
    var _index = require_type();
    var _index2 = require_language();
    var _index3 = require_execution();
    var _index4 = require_validation();
    var _index5 = require_error();
    var _index6 = require_utilities();
  }
});

// ../../node_modules/path-to-regexp/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/path-to-regexp/dist/index.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pathToRegexp = exports.tokensToRegexp = exports.regexpToFunction = exports.match = exports.tokensToFunction = exports.compile = exports.parse = void 0;
    function lexer(str) {
      var tokens = [];
      var i = 0;
      while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
          tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
          continue;
        }
        if (char === "\\") {
          tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
          continue;
        }
        if (char === "{") {
          tokens.push({ type: "OPEN", index: i, value: str[i++] });
          continue;
        }
        if (char === "}") {
          tokens.push({ type: "CLOSE", index: i, value: str[i++] });
          continue;
        }
        if (char === ":") {
          var name = "";
          var j = i + 1;
          while (j < str.length) {
            var code = str.charCodeAt(j);
            if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
              name += str[j++];
              continue;
            }
            break;
          }
          if (!name)
            throw new TypeError("Missing parameter name at ".concat(i));
          tokens.push({ type: "NAME", index: i, value: name });
          i = j;
          continue;
        }
        if (char === "(") {
          var count = 1;
          var pattern = "";
          var j = i + 1;
          if (str[j] === "?") {
            throw new TypeError('Pattern cannot start with "?" at '.concat(j));
          }
          while (j < str.length) {
            if (str[j] === "\\") {
              pattern += str[j++] + str[j++];
              continue;
            }
            if (str[j] === ")") {
              count--;
              if (count === 0) {
                j++;
                break;
              }
            } else if (str[j] === "(") {
              count++;
              if (str[j + 1] !== "?") {
                throw new TypeError("Capturing groups are not allowed at ".concat(j));
              }
            }
            pattern += str[j++];
          }
          if (count)
            throw new TypeError("Unbalanced pattern at ".concat(i));
          if (!pattern)
            throw new TypeError("Missing pattern at ".concat(i));
          tokens.push({ type: "PATTERN", index: i, value: pattern });
          i = j;
          continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
      }
      tokens.push({ type: "END", index: i, value: "" });
      return tokens;
    }
    function parse(str, options) {
      if (options === void 0) {
        options = {};
      }
      var tokens = lexer(str);
      var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
      var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
      var result = [];
      var key = 0;
      var i = 0;
      var path = "";
      var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type)
          return tokens[i++].value;
      };
      var mustConsume = function(type) {
        var value2 = tryConsume(type);
        if (value2 !== void 0)
          return value2;
        var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
      };
      var consumeText = function() {
        var result2 = "";
        var value2;
        while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
          result2 += value2;
        }
        return result2;
      };
      while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
          var prefix = char || "";
          if (prefixes.indexOf(prefix) === -1) {
            path += prefix;
            prefix = "";
          }
          if (path) {
            result.push(path);
            path = "";
          }
          result.push({
            name: name || key++,
            prefix,
            suffix: "",
            pattern: pattern || defaultPattern,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
          path += value;
          continue;
        }
        if (path) {
          result.push(path);
          path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
          var prefix = consumeText();
          var name_1 = tryConsume("NAME") || "";
          var pattern_1 = tryConsume("PATTERN") || "";
          var suffix = consumeText();
          mustConsume("CLOSE");
          result.push({
            name: name_1 || (pattern_1 ? key++ : ""),
            pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
            prefix,
            suffix,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        mustConsume("END");
      }
      return result;
    }
    exports.parse = parse;
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    exports.compile = compile;
    function tokensToFunction(tokens, options) {
      if (options === void 0) {
        options = {};
      }
      var reFlags = flags(options);
      var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
      } : _a, _b = options.validate, validate2 = _b === void 0 ? true : _b;
      var matches = tokens.map(function(token) {
        if (typeof token === "object") {
          return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
      });
      return function(data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          var value = data ? data[token.name] : void 0;
          var optional = token.modifier === "?" || token.modifier === "*";
          var repeat = token.modifier === "*" || token.modifier === "+";
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
            }
            if (value.length === 0) {
              if (optional)
                continue;
              throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
            }
            for (var j = 0; j < value.length; j++) {
              var segment = encode(value[j], token);
              if (validate2 && !matches[i].test(segment)) {
                throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
              }
              path += token.prefix + segment + token.suffix;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number") {
            var segment = encode(String(value), token);
            if (validate2 && !matches[i].test(segment)) {
              throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
            }
            path += token.prefix + segment + token.suffix;
            continue;
          }
          if (optional)
            continue;
          var typeOfMessage = repeat ? "an array" : "a string";
          throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
        }
        return path;
      };
    }
    exports.tokensToFunction = tokensToFunction;
    function match(str, options) {
      var keys = [];
      var re = pathToRegexp(str, keys, options);
      return regexpToFunction(re, keys, options);
    }
    exports.match = match;
    function regexpToFunction(re, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
      } : _a;
      return function(pathname) {
        var m = re.exec(pathname);
        if (!m)
          return false;
        var path = m[0], index = m.index;
        var params = /* @__PURE__ */ Object.create(null);
        var _loop_1 = function(i2) {
          if (m[i2] === void 0)
            return "continue";
          var key = keys[i2 - 1];
          if (key.modifier === "*" || key.modifier === "+") {
            params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
              return decode(value, key);
            });
          } else {
            params[key.name] = decode(m[i2], key);
          }
        };
        for (var i = 1; i < m.length; i++) {
          _loop_1(i);
        }
        return { path, index, params };
      };
    }
    exports.regexpToFunction = regexpToFunction;
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys) {
      if (!keys)
        return path;
      var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
      var index = 0;
      var execResult = groupsRegex.exec(path.source);
      while (execResult) {
        keys.push({
          name: execResult[1] || index++,
          prefix: "",
          suffix: "",
          modifier: "",
          pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
      }
      return path;
    }
    function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
      });
      return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
    }
    function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse(path, options), keys, options);
    }
    function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
      } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
      var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
      var delimiterRe = "[".concat(escapeString(delimiter), "]");
      var route = start ? "^" : "";
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
          route += escapeString(encode(token));
        } else {
          var prefix = escapeString(encode(token.prefix));
          var suffix = escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys)
              keys.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                var mod = token.modifier === "*" ? "?" : "";
                route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
              } else {
                route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
              }
            } else {
              if (token.modifier === "+" || token.modifier === "*") {
                route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
              } else {
                route += "(".concat(token.pattern, ")").concat(token.modifier);
              }
            }
          } else {
            route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
          }
        }
      }
      if (end) {
        if (!strict)
          route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
      } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
        if (!strict) {
          route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
          route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
      }
      return new RegExp(route, flags(options));
    }
    exports.tokensToRegexp = tokensToRegexp;
    function pathToRegexp(path, keys, options) {
      if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
      if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
      return stringToRegexp(path, keys, options);
    }
    exports.pathToRegexp = pathToRegexp;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/utils/toIsoResponse.js
var require_toIsoResponse = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/utils/toIsoResponse.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toIsoResponse = void 0;
    var headers_polyfill_1 = require_lib();
    function toIsoResponse(response) {
      return {
        status: response.status || 200,
        statusText: response.statusText || "OK",
        headers: headers_polyfill_1.objectToHeaders(response.headers || {}),
        body: response.body
      };
    }
    exports.toIsoResponse = toIsoResponse;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js
var require_fetch = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/interceptors/fetch/index.js"(exports) {
    "use strict";
    init_define_process();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FetchInterceptor = void 0;
    var headers_polyfill_1 = require_lib();
    var outvariant_1 = require_lib5();
    var IsomorphicRequest_1 = require_IsomorphicRequest();
    var glossary_1 = require_glossary();
    var Interceptor_1 = require_Interceptor();
    var toIsoResponse_1 = require_toIsoResponse();
    var InteractiveIsomorphicRequest_1 = require_InteractiveIsomorphicRequest();
    var FetchInterceptor = function(_super) {
      __extends(FetchInterceptor2, _super);
      function FetchInterceptor2() {
        return _super.call(this, FetchInterceptor2.symbol) || this;
      }
      FetchInterceptor2.prototype.checkEnvironment = function() {
        return typeof globalThis !== "undefined" && typeof globalThis.fetch !== "undefined";
      };
      FetchInterceptor2.prototype.setup = function() {
        var _this = this;
        var pureFetch = globalThis.fetch;
        outvariant_1.invariant(!pureFetch[glossary_1.IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.');
        globalThis.fetch = function(input, init) {
          return __awaiter(_this, void 0, void 0, function() {
            var request, url, method, body, isomorphicRequest, interactiveIsomorphicRequest, _a, mockedResponse, isomorphicResponse, response;
            var _this2 = this;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  request = new Request(input, init);
                  url = typeof input === "string" ? input : input.url;
                  method = request.method;
                  this.log("[%s] %s", method, url);
                  return [4, request.clone().arrayBuffer()];
                case 1:
                  body = _b.sent();
                  isomorphicRequest = new IsomorphicRequest_1.IsomorphicRequest(new URL(url, location.origin), {
                    body,
                    method,
                    headers: new headers_polyfill_1.Headers(request.headers),
                    credentials: request.credentials
                  });
                  interactiveIsomorphicRequest = new InteractiveIsomorphicRequest_1.InteractiveIsomorphicRequest(isomorphicRequest);
                  this.log("isomorphic request", interactiveIsomorphicRequest);
                  this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount("request"));
                  this.emitter.emit("request", interactiveIsomorphicRequest);
                  this.log("awaiting for the mocked response...");
                  return [4, this.emitter.untilIdle("request", function(_a2) {
                    var _b2 = __read(_a2.args, 1), request2 = _b2[0];
                    return request2.id === interactiveIsomorphicRequest.id;
                  })];
                case 2:
                  _b.sent();
                  this.log("all request listeners have been resolved!");
                  return [4, interactiveIsomorphicRequest.respondWith.invoked()];
                case 3:
                  _a = __read.apply(void 0, [_b.sent(), 1]), mockedResponse = _a[0];
                  this.log("event.respondWith called with:", mockedResponse);
                  if (mockedResponse) {
                    this.log("received mocked response:", mockedResponse);
                    isomorphicResponse = toIsoResponse_1.toIsoResponse(mockedResponse);
                    this.log("derived isomorphic response:", isomorphicResponse);
                    this.emitter.emit("response", interactiveIsomorphicRequest, isomorphicResponse);
                    response = new Response(mockedResponse.body, __assign(__assign({}, isomorphicResponse), {
                      headers: headers_polyfill_1.flattenHeadersObject(mockedResponse.headers || {})
                    }));
                    Object.defineProperty(response, "url", {
                      writable: false,
                      enumerable: true,
                      configurable: false,
                      value: interactiveIsomorphicRequest.url.href
                    });
                    return [2, response];
                  }
                  this.log("no mocked response received!");
                  return [2, pureFetch(request).then(function(response2) {
                    return __awaiter(_this2, void 0, void 0, function() {
                      var cloneResponse, _a2, _b2, _c;
                      return __generator(this, function(_d) {
                        switch (_d.label) {
                          case 0:
                            cloneResponse = response2.clone();
                            this.log("original fetch performed", cloneResponse);
                            _b2 = (_a2 = this.emitter).emit;
                            _c = [
                              "response",
                              interactiveIsomorphicRequest
                            ];
                            return [4, normalizeFetchResponse(cloneResponse)];
                          case 1:
                            _b2.apply(_a2, _c.concat([_d.sent()]));
                            return [2, response2];
                        }
                      });
                    });
                  })];
              }
            });
          });
        };
        Object.defineProperty(globalThis.fetch, glossary_1.IS_PATCHED_MODULE, {
          enumerable: true,
          configurable: true,
          value: true
        });
        this.subscriptions.push(function() {
          Object.defineProperty(globalThis.fetch, glossary_1.IS_PATCHED_MODULE, {
            value: void 0
          });
          globalThis.fetch = pureFetch;
          _this.log('restored native "globalThis.fetch"!', globalThis.fetch.name);
        });
      };
      FetchInterceptor2.symbol = Symbol("fetch");
      return FetchInterceptor2;
    }(Interceptor_1.Interceptor);
    exports.FetchInterceptor = FetchInterceptor;
    function normalizeFetchResponse(response) {
      return __awaiter(this, void 0, void 0, function() {
        var _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _a = {
                status: response.status,
                statusText: response.statusText,
                headers: headers_polyfill_1.objectToHeaders(headers_polyfill_1.headersToObject(response.headers))
              };
              return [4, response.text()];
            case 1:
              return [2, (_a.body = _b.sent(), _a)];
          }
        });
      });
    }
  }
});

// ../../node_modules/@xmldom/xmldom/lib/conventions.js
var require_conventions = __commonJS({
  "../../node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
    "use strict";
    init_define_process();
    function freeze(object, oc) {
      if (oc === void 0) {
        oc = Object;
      }
      return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
    }
    var MIME_TYPE = freeze({
      HTML: "text/html",
      isHTML: function(value) {
        return value === MIME_TYPE.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml"
    });
    var NAMESPACE = freeze({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function(uri) {
        return uri === NAMESPACE.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
    exports.freeze = freeze;
    exports.MIME_TYPE = MIME_TYPE;
    exports.NAMESPACE = NAMESPACE;
  }
});

// ../../node_modules/@xmldom/xmldom/lib/dom.js
var require_dom = __commonJS({
  "../../node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
    init_define_process();
    var conventions = require_conventions();
    var NAMESPACE = conventions.NAMESPACE;
    function notEmptyString(input) {
      return input !== "";
    }
    function splitOnASCIIWhitespace(input) {
      return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
    }
    function orderedSetReducer(current, element) {
      if (!current.hasOwnProperty(element)) {
        current[element] = true;
      }
      return current;
    }
    function toOrderedSet(input) {
      if (!input)
        return [];
      var list = splitOnASCIIWhitespace(input);
      return Object.keys(list.reduce(orderedSetReducer, {}));
    }
    function arrayIncludes(list) {
      return function(element) {
        return list && list.indexOf(element) !== -1;
      };
    }
    function copy(src, dest) {
      for (var p in src) {
        dest[p] = src[p];
      }
    }
    function _extends(Class, Super) {
      var pt = Class.prototype;
      if (!(pt instanceof Super)) {
        let t2 = function() {
        };
        var t = t2;
        ;
        t2.prototype = Super.prototype;
        t2 = new t2();
        copy(pt, t2);
        Class.prototype = pt = t2;
      }
      if (pt.constructor != Class) {
        if (typeof Class != "function") {
          console.error("unknown Class:" + Class);
        }
        pt.constructor = Class;
      }
    }
    var NodeType = {};
    var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = NodeType.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
    var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
    var ExceptionCode = {};
    var ExceptionMessage = {};
    var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
    var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
    var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
    var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
    var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
    var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
    var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
    var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
    var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
    var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
    var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
    var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
    var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
    var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
    var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
    function DOMException(code, message) {
      if (message instanceof Error) {
        var error = message;
      } else {
        error = this;
        Error.call(this, ExceptionMessage[code]);
        this.message = ExceptionMessage[code];
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, DOMException);
      }
      error.code = code;
      if (message)
        this.message = this.message + ": " + message;
      return error;
    }
    DOMException.prototype = Error.prototype;
    copy(ExceptionCode, DOMException);
    function NodeList() {
    }
    NodeList.prototype = {
      length: 0,
      item: function(index) {
        return this[index] || null;
      },
      toString: function(isHTML, nodeFilter) {
        for (var buf = [], i = 0; i < this.length; i++) {
          serializeToString(this[i], buf, isHTML, nodeFilter);
        }
        return buf.join("");
      }
    };
    function LiveNodeList(node, refresh) {
      this._node = node;
      this._refresh = refresh;
      _updateLiveList(this);
    }
    function _updateLiveList(list) {
      var inc = list._node._inc || list._node.ownerDocument._inc;
      if (list._inc != inc) {
        var ls = list._refresh(list._node);
        __set__(list, "length", ls.length);
        copy(ls, list);
        list._inc = inc;
      }
    }
    LiveNodeList.prototype.item = function(i) {
      _updateLiveList(this);
      return this[i];
    };
    _extends(LiveNodeList, NodeList);
    function NamedNodeMap() {
    }
    function _findNodeIndex(list, node) {
      var i = list.length;
      while (i--) {
        if (list[i] === node) {
          return i;
        }
      }
    }
    function _addNamedNode(el, list, newAttr, oldAttr) {
      if (oldAttr) {
        list[_findNodeIndex(list, oldAttr)] = newAttr;
      } else {
        list[list.length++] = newAttr;
      }
      if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
          oldAttr && _onRemoveAttribute(doc, el, oldAttr);
          _onAddAttribute(doc, el, newAttr);
        }
      }
    }
    function _removeNamedNode(el, list, attr) {
      var i = _findNodeIndex(list, attr);
      if (i >= 0) {
        var lastIndex = list.length - 1;
        while (i < lastIndex) {
          list[i] = list[++i];
        }
        list.length = lastIndex;
        if (el) {
          var doc = el.ownerDocument;
          if (doc) {
            _onRemoveAttribute(doc, el, attr);
            attr.ownerElement = null;
          }
        }
      } else {
        throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
      }
    }
    NamedNodeMap.prototype = {
      length: 0,
      item: NodeList.prototype.item,
      getNamedItem: function(key) {
        var i = this.length;
        while (i--) {
          var attr = this[i];
          if (attr.nodeName == key) {
            return attr;
          }
        }
      },
      setNamedItem: function(attr) {
        var el = attr.ownerElement;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        var oldAttr = this.getNamedItem(attr.nodeName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      setNamedItemNS: function(attr) {
        var el = attr.ownerElement, oldAttr;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      removeNamedItem: function(key) {
        var attr = this.getNamedItem(key);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      removeNamedItemNS: function(namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      getNamedItemNS: function(namespaceURI, localName) {
        var i = this.length;
        while (i--) {
          var node = this[i];
          if (node.localName == localName && node.namespaceURI == namespaceURI) {
            return node;
          }
        }
        return null;
      }
    };
    function DOMImplementation() {
    }
    DOMImplementation.prototype = {
      hasFeature: function(feature, version) {
        return true;
      },
      createDocument: function(namespaceURI, qualifiedName, doctype) {
        var doc = new Document();
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype || null;
        if (doctype) {
          doc.appendChild(doctype);
        }
        if (qualifiedName) {
          var root = doc.createElementNS(namespaceURI, qualifiedName);
          doc.appendChild(root);
        }
        return doc;
      },
      createDocumentType: function(qualifiedName, publicId, systemId) {
        var node = new DocumentType();
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId || "";
        node.systemId = systemId || "";
        return node;
      }
    };
    function Node() {
    }
    Node.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      insertBefore: function(newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
      },
      replaceChild: function(newChild, oldChild) {
        this.insertBefore(newChild, oldChild);
        if (oldChild) {
          this.removeChild(oldChild);
        }
      },
      removeChild: function(oldChild) {
        return _removeChild(this, oldChild);
      },
      appendChild: function(newChild) {
        return this.insertBefore(newChild, null);
      },
      hasChildNodes: function() {
        return this.firstChild != null;
      },
      cloneNode: function(deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
      },
      normalize: function() {
        var child = this.firstChild;
        while (child) {
          var next = child.nextSibling;
          if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
            this.removeChild(next);
            child.appendData(next.data);
          } else {
            child.normalize();
            child = next;
          }
        }
      },
      isSupported: function(feature, version) {
        return this.ownerDocument.implementation.hasFeature(feature, version);
      },
      hasAttributes: function() {
        return this.attributes.length > 0;
      },
      lookupPrefix: function(namespaceURI) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            for (var n in map) {
              if (map[n] == namespaceURI) {
                return n;
              }
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      lookupNamespaceURI: function(prefix) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            if (prefix in map) {
              return map[prefix];
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      isDefaultNamespace: function(namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
      }
    };
    function _xmlEncoder(c) {
      return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
    }
    copy(NodeType, Node);
    copy(NodeType, Node.prototype);
    function _visitNode(node, callback) {
      if (callback(node)) {
        return true;
      }
      if (node = node.firstChild) {
        do {
          if (_visitNode(node, callback)) {
            return true;
          }
        } while (node = node.nextSibling);
      }
    }
    function Document() {
    }
    function _onAddAttribute(doc, el, newAttr) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
      }
    }
    function _onRemoveAttribute(doc, el, newAttr, remove) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
      }
    }
    function _onUpdateChild(doc, el, newChild) {
      if (doc && doc._inc) {
        doc._inc++;
        var cs = el.childNodes;
        if (newChild) {
          cs[cs.length++] = newChild;
        } else {
          var child = el.firstChild;
          var i = 0;
          while (child) {
            cs[i++] = child;
            child = child.nextSibling;
          }
          cs.length = i;
        }
      }
    }
    function _removeChild(parentNode, child) {
      var previous = child.previousSibling;
      var next = child.nextSibling;
      if (previous) {
        previous.nextSibling = next;
      } else {
        parentNode.firstChild = next;
      }
      if (next) {
        next.previousSibling = previous;
      } else {
        parentNode.lastChild = previous;
      }
      _onUpdateChild(parentNode.ownerDocument, parentNode);
      return child;
    }
    function _insertBefore(parentNode, newChild, nextChild) {
      var cp = newChild.parentNode;
      if (cp) {
        cp.removeChild(newChild);
      }
      if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = newChild.firstChild;
        if (newFirst == null) {
          return newChild;
        }
        var newLast = newChild.lastChild;
      } else {
        newFirst = newLast = newChild;
      }
      var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;
      newFirst.previousSibling = pre;
      newLast.nextSibling = nextChild;
      if (pre) {
        pre.nextSibling = newFirst;
      } else {
        parentNode.firstChild = newFirst;
      }
      if (nextChild == null) {
        parentNode.lastChild = newLast;
      } else {
        nextChild.previousSibling = newLast;
      }
      do {
        newFirst.parentNode = parentNode;
      } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
      _onUpdateChild(parentNode.ownerDocument || parentNode, parentNode);
      if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
        newChild.firstChild = newChild.lastChild = null;
      }
      return newChild;
    }
    function _appendSingleChild(parentNode, newChild) {
      var cp = newChild.parentNode;
      if (cp) {
        var pre = parentNode.lastChild;
        cp.removeChild(newChild);
        var pre = parentNode.lastChild;
      }
      var pre = parentNode.lastChild;
      newChild.parentNode = parentNode;
      newChild.previousSibling = pre;
      newChild.nextSibling = null;
      if (pre) {
        pre.nextSibling = newChild;
      } else {
        parentNode.firstChild = newChild;
      }
      parentNode.lastChild = newChild;
      _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
      return newChild;
    }
    Document.prototype = {
      nodeName: "#document",
      nodeType: DOCUMENT_NODE,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(newChild, refChild) {
        if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
          var child = newChild.firstChild;
          while (child) {
            var next = child.nextSibling;
            this.insertBefore(child, refChild);
            child = next;
          }
          return newChild;
        }
        if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) {
          this.documentElement = newChild;
        }
        return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
      },
      removeChild: function(oldChild) {
        if (this.documentElement == oldChild) {
          this.documentElement = null;
        }
        return _removeChild(this, oldChild);
      },
      importNode: function(importedNode, deep) {
        return importNode(this, importedNode, deep);
      },
      getElementById: function(id) {
        var rtv = null;
        _visitNode(this.documentElement, function(node) {
          if (node.nodeType == ELEMENT_NODE) {
            if (node.getAttribute("id") == id) {
              rtv = node;
              return true;
            }
          }
        });
        return rtv;
      },
      getElementsByClassName: function(classNames) {
        var classNamesSet = toOrderedSet(classNames);
        return new LiveNodeList(this, function(base) {
          var ls = [];
          if (classNamesSet.length > 0) {
            _visitNode(base.documentElement, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE) {
                var nodeClassNames = node.getAttribute("class");
                if (nodeClassNames) {
                  var matches = classNames === nodeClassNames;
                  if (!matches) {
                    var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                    matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                  }
                  if (matches) {
                    ls.push(node);
                  }
                }
              }
            });
          }
          return ls;
        });
      },
      createElement: function(tagName) {
        var node = new Element();
        node.ownerDocument = this;
        node.nodeName = tagName;
        node.tagName = tagName;
        node.localName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
      },
      createDocumentFragment: function() {
        var node = new DocumentFragment();
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
      },
      createTextNode: function(data) {
        var node = new Text();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createComment: function(data) {
        var node = new Comment();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createCDATASection: function(data) {
        var node = new CDATASection();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createProcessingInstruction: function(target, data) {
        var node = new ProcessingInstruction();
        node.ownerDocument = this;
        node.tagName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
      },
      createAttribute: function(name) {
        var node = new Attr();
        node.ownerDocument = this;
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
      },
      createEntityReference: function(name) {
        var node = new EntityReference();
        node.ownerDocument = this;
        node.nodeName = name;
        return node;
      },
      createElementNS: function(namespaceURI, qualifiedName) {
        var node = new Element();
        var pl = qualifiedName.split(":");
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = namespaceURI;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        attrs._ownerElement = node;
        return node;
      },
      createAttributeNS: function(namespaceURI, qualifiedName) {
        var node = new Attr();
        var pl = qualifiedName.split(":");
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.namespaceURI = namespaceURI;
        node.specified = true;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        return node;
      }
    };
    _extends(Document, Node);
    function Element() {
      this._nsMap = {};
    }
    Element.prototype = {
      nodeType: ELEMENT_NODE,
      hasAttribute: function(name) {
        return this.getAttributeNode(name) != null;
      },
      getAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        return attr && attr.value || "";
      },
      getAttributeNode: function(name) {
        return this.attributes.getNamedItem(name);
      },
      setAttribute: function(name, value) {
        var attr = this.ownerDocument.createAttribute(name);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      removeAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
      },
      appendChild: function(newChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return this.insertBefore(newChild, null);
        } else {
          return _appendSingleChild(this, newChild);
        }
      },
      setAttributeNode: function(newAttr) {
        return this.attributes.setNamedItem(newAttr);
      },
      setAttributeNodeNS: function(newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
      },
      removeAttributeNode: function(oldAttr) {
        return this.attributes.removeNamedItem(oldAttr.nodeName);
      },
      removeAttributeNS: function(namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
      },
      hasAttributeNS: function(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
      },
      getAttributeNS: function(namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr && attr.value || "";
      },
      setAttributeNS: function(namespaceURI, qualifiedName, value) {
        var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      getAttributeNodeNS: function(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
      },
      getElementsByTagName: function(tagName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      },
      getElementsByTagNameNS: function(namespaceURI, localName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      }
    };
    Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
    _extends(Element, Node);
    function Attr() {
    }
    Attr.prototype.nodeType = ATTRIBUTE_NODE;
    _extends(Attr, Node);
    function CharacterData() {
    }
    CharacterData.prototype = {
      data: "",
      substringData: function(offset, count) {
        return this.data.substring(offset, offset + count);
      },
      appendData: function(text) {
        text = this.data + text;
        this.nodeValue = this.data = text;
        this.length = text.length;
      },
      insertData: function(offset, text) {
        this.replaceData(offset, 0, text);
      },
      appendChild: function(newChild) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
      },
      deleteData: function(offset, count) {
        this.replaceData(offset, count, "");
      },
      replaceData: function(offset, count, text) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text = start + text + end;
        this.nodeValue = this.data = text;
        this.length = text.length;
      }
    };
    _extends(CharacterData, Node);
    function Text() {
    }
    Text.prototype = {
      nodeName: "#text",
      nodeType: TEXT_NODE,
      splitText: function(offset) {
        var text = this.data;
        var newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        this.length = text.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
          this.parentNode.insertBefore(newNode, this.nextSibling);
        }
        return newNode;
      }
    };
    _extends(Text, CharacterData);
    function Comment() {
    }
    Comment.prototype = {
      nodeName: "#comment",
      nodeType: COMMENT_NODE
    };
    _extends(Comment, CharacterData);
    function CDATASection() {
    }
    CDATASection.prototype = {
      nodeName: "#cdata-section",
      nodeType: CDATA_SECTION_NODE
    };
    _extends(CDATASection, CharacterData);
    function DocumentType() {
    }
    DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
    _extends(DocumentType, Node);
    function Notation() {
    }
    Notation.prototype.nodeType = NOTATION_NODE;
    _extends(Notation, Node);
    function Entity() {
    }
    Entity.prototype.nodeType = ENTITY_NODE;
    _extends(Entity, Node);
    function EntityReference() {
    }
    EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
    _extends(EntityReference, Node);
    function DocumentFragment() {
    }
    DocumentFragment.prototype.nodeName = "#document-fragment";
    DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
    _extends(DocumentFragment, Node);
    function ProcessingInstruction() {
    }
    ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
    _extends(ProcessingInstruction, Node);
    function XMLSerializer() {
    }
    XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter) {
      return nodeSerializeToString.call(node, isHtml, nodeFilter);
    };
    Node.prototype.toString = nodeSerializeToString;
    function nodeSerializeToString(isHtml, nodeFilter) {
      var buf = [];
      var refNode = this.nodeType == 9 && this.documentElement || this;
      var prefix = refNode.prefix;
      var uri = refNode.namespaceURI;
      if (uri && prefix == null) {
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) {
          var visibleNamespaces = [
            { namespace: uri, prefix: null }
          ];
        }
      }
      serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
      return buf.join("");
    }
    function needNamespaceDefine(node, isHTML, visibleNamespaces) {
      var prefix = node.prefix || "";
      var uri = node.namespaceURI;
      if (!uri) {
        return false;
      }
      if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
        return false;
      }
      var i = visibleNamespaces.length;
      while (i--) {
        var ns = visibleNamespaces[i];
        if (ns.prefix === prefix) {
          return ns.namespace !== uri;
        }
      }
      return true;
    }
    function addSerializedAttribute(buf, qualifiedName, value) {
      buf.push(" ", qualifiedName, '="', value.replace(/[<&"]/g, _xmlEncoder), '"');
    }
    function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
      if (!visibleNamespaces) {
        visibleNamespaces = [];
      }
      if (nodeFilter) {
        node = nodeFilter(node);
        if (node) {
          if (typeof node == "string") {
            buf.push(node);
            return;
          }
        } else {
          return;
        }
      }
      switch (node.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var len = attrs.length;
          var child = node.firstChild;
          var nodeName = node.tagName;
          isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
          var prefixedNodeName = nodeName;
          if (!isHTML && !node.prefix && node.namespaceURI) {
            var defaultNS;
            for (var ai = 0; ai < attrs.length; ai++) {
              if (attrs.item(ai).name === "xmlns") {
                defaultNS = attrs.item(ai).value;
                break;
              }
            }
            if (!defaultNS) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.prefix === "" && namespace.namespace === node.namespaceURI) {
                  defaultNS = namespace.namespace;
                  break;
                }
              }
            }
            if (defaultNS !== node.namespaceURI) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.namespace === node.namespaceURI) {
                  if (namespace.prefix) {
                    prefixedNodeName = namespace.prefix + ":" + nodeName;
                  }
                  break;
                }
              }
            }
          }
          buf.push("<", prefixedNodeName);
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (attr.prefix == "xmlns") {
              visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
            } else if (attr.nodeName == "xmlns") {
              visibleNamespaces.push({ prefix: "", namespace: attr.value });
            }
          }
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
              var prefix = attr.prefix || "";
              var uri = attr.namespaceURI;
              addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
          }
          if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
            var prefix = node.prefix || "";
            var uri = node.namespaceURI;
            addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
            visibleNamespaces.push({ prefix, namespace: uri });
          }
          if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
            buf.push(">");
            if (isHTML && /^script$/i.test(nodeName)) {
              while (child) {
                if (child.data) {
                  buf.push(child.data);
                } else {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                }
                child = child.nextSibling;
              }
            } else {
              while (child) {
                serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                child = child.nextSibling;
              }
            }
            buf.push("</", prefixedNodeName, ">");
          } else {
            buf.push("/>");
          }
          return;
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var child = node.firstChild;
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
            child = child.nextSibling;
          }
          return;
        case ATTRIBUTE_NODE:
          return addSerializedAttribute(buf, node.name, node.value);
        case TEXT_NODE:
          return buf.push(node.data.replace(/[<&]/g, _xmlEncoder).replace(/]]>/g, "]]&gt;"));
        case CDATA_SECTION_NODE:
          return buf.push("<![CDATA[", node.data, "]]>");
        case COMMENT_NODE:
          return buf.push("<!--", node.data, "-->");
        case DOCUMENT_TYPE_NODE:
          var pubid = node.publicId;
          var sysid = node.systemId;
          buf.push("<!DOCTYPE ", node.name);
          if (pubid) {
            buf.push(" PUBLIC ", pubid);
            if (sysid && sysid != ".") {
              buf.push(" ", sysid);
            }
            buf.push(">");
          } else if (sysid && sysid != ".") {
            buf.push(" SYSTEM ", sysid, ">");
          } else {
            var sub = node.internalSubset;
            if (sub) {
              buf.push(" [", sub, "]");
            }
            buf.push(">");
          }
          return;
        case PROCESSING_INSTRUCTION_NODE:
          return buf.push("<?", node.target, " ", node.data, "?>");
        case ENTITY_REFERENCE_NODE:
          return buf.push("&", node.nodeName, ";");
        default:
          buf.push("??", node.nodeName);
      }
    }
    function importNode(doc, node, deep) {
      var node2;
      switch (node.nodeType) {
        case ELEMENT_NODE:
          node2 = node.cloneNode(false);
          node2.ownerDocument = doc;
        case DOCUMENT_FRAGMENT_NODE:
          break;
        case ATTRIBUTE_NODE:
          deep = true;
          break;
      }
      if (!node2) {
        node2 = node.cloneNode(false);
      }
      node2.ownerDocument = doc;
      node2.parentNode = null;
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(importNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function cloneNode(doc, node, deep) {
      var node2 = new node.constructor();
      for (var n in node) {
        var v = node[n];
        if (typeof v != "object") {
          if (v != node2[n]) {
            node2[n] = v;
          }
        }
      }
      if (node.childNodes) {
        node2.childNodes = new NodeList();
      }
      node2.ownerDocument = doc;
      switch (node2.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var attrs2 = node2.attributes = new NamedNodeMap();
          var len = attrs.length;
          attrs2._ownerElement = node2;
          for (var i = 0; i < len; i++) {
            node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
          }
          break;
          ;
        case ATTRIBUTE_NODE:
          deep = true;
      }
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(cloneNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function __set__(object, key, value) {
      object[key] = value;
    }
    try {
      if (Object.defineProperty) {
        let getTextContent2 = function(node) {
          switch (node.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              var buf = [];
              node = node.firstChild;
              while (node) {
                if (node.nodeType !== 7 && node.nodeType !== 8) {
                  buf.push(getTextContent2(node));
                }
                node = node.nextSibling;
              }
              return buf.join("");
            default:
              return node.nodeValue;
          }
        };
        getTextContent = getTextContent2;
        Object.defineProperty(LiveNodeList.prototype, "length", {
          get: function() {
            _updateLiveList(this);
            return this.$$length;
          }
        });
        Object.defineProperty(Node.prototype, "textContent", {
          get: function() {
            return getTextContent2(this);
          },
          set: function(data) {
            switch (this.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                while (this.firstChild) {
                  this.removeChild(this.firstChild);
                }
                if (data || String(data)) {
                  this.appendChild(this.ownerDocument.createTextNode(data));
                }
                break;
              default:
                this.data = data;
                this.value = data;
                this.nodeValue = data;
            }
          }
        });
        __set__ = function(object, key, value) {
          object["$$" + key] = value;
        };
      }
    } catch (e) {
    }
    var getTextContent;
    exports.DocumentType = DocumentType;
    exports.DOMException = DOMException;
    exports.DOMImplementation = DOMImplementation;
    exports.Element = Element;
    exports.Node = Node;
    exports.NodeList = NodeList;
    exports.XMLSerializer = XMLSerializer;
  }
});

// ../../node_modules/@xmldom/xmldom/lib/entities.js
var require_entities = __commonJS({
  "../../node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
    init_define_process();
    var freeze = require_conventions().freeze;
    exports.XML_ENTITIES = freeze({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' });
    exports.HTML_ENTITIES = freeze({
      lt: "<",
      gt: ">",
      amp: "&",
      quot: '"',
      apos: "'",
      Agrave: "\xC0",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Atilde: "\xC3",
      Auml: "\xC4",
      Aring: "\xC5",
      AElig: "\xC6",
      Ccedil: "\xC7",
      Egrave: "\xC8",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Euml: "\xCB",
      Igrave: "\xCC",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Iuml: "\xCF",
      ETH: "\xD0",
      Ntilde: "\xD1",
      Ograve: "\xD2",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Otilde: "\xD5",
      Ouml: "\xD6",
      Oslash: "\xD8",
      Ugrave: "\xD9",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Uuml: "\xDC",
      Yacute: "\xDD",
      THORN: "\xDE",
      szlig: "\xDF",
      agrave: "\xE0",
      aacute: "\xE1",
      acirc: "\xE2",
      atilde: "\xE3",
      auml: "\xE4",
      aring: "\xE5",
      aelig: "\xE6",
      ccedil: "\xE7",
      egrave: "\xE8",
      eacute: "\xE9",
      ecirc: "\xEA",
      euml: "\xEB",
      igrave: "\xEC",
      iacute: "\xED",
      icirc: "\xEE",
      iuml: "\xEF",
      eth: "\xF0",
      ntilde: "\xF1",
      ograve: "\xF2",
      oacute: "\xF3",
      ocirc: "\xF4",
      otilde: "\xF5",
      ouml: "\xF6",
      oslash: "\xF8",
      ugrave: "\xF9",
      uacute: "\xFA",
      ucirc: "\xFB",
      uuml: "\xFC",
      yacute: "\xFD",
      thorn: "\xFE",
      yuml: "\xFF",
      nbsp: "\xA0",
      iexcl: "\xA1",
      cent: "\xA2",
      pound: "\xA3",
      curren: "\xA4",
      yen: "\xA5",
      brvbar: "\xA6",
      sect: "\xA7",
      uml: "\xA8",
      copy: "\xA9",
      ordf: "\xAA",
      laquo: "\xAB",
      not: "\xAC",
      shy: "\xAD\xAD",
      reg: "\xAE",
      macr: "\xAF",
      deg: "\xB0",
      plusmn: "\xB1",
      sup2: "\xB2",
      sup3: "\xB3",
      acute: "\xB4",
      micro: "\xB5",
      para: "\xB6",
      middot: "\xB7",
      cedil: "\xB8",
      sup1: "\xB9",
      ordm: "\xBA",
      raquo: "\xBB",
      frac14: "\xBC",
      frac12: "\xBD",
      frac34: "\xBE",
      iquest: "\xBF",
      times: "\xD7",
      divide: "\xF7",
      forall: "\u2200",
      part: "\u2202",
      exist: "\u2203",
      empty: "\u2205",
      nabla: "\u2207",
      isin: "\u2208",
      notin: "\u2209",
      ni: "\u220B",
      prod: "\u220F",
      sum: "\u2211",
      minus: "\u2212",
      lowast: "\u2217",
      radic: "\u221A",
      prop: "\u221D",
      infin: "\u221E",
      ang: "\u2220",
      and: "\u2227",
      or: "\u2228",
      cap: "\u2229",
      cup: "\u222A",
      "int": "\u222B",
      there4: "\u2234",
      sim: "\u223C",
      cong: "\u2245",
      asymp: "\u2248",
      ne: "\u2260",
      equiv: "\u2261",
      le: "\u2264",
      ge: "\u2265",
      sub: "\u2282",
      sup: "\u2283",
      nsub: "\u2284",
      sube: "\u2286",
      supe: "\u2287",
      oplus: "\u2295",
      otimes: "\u2297",
      perp: "\u22A5",
      sdot: "\u22C5",
      Alpha: "\u0391",
      Beta: "\u0392",
      Gamma: "\u0393",
      Delta: "\u0394",
      Epsilon: "\u0395",
      Zeta: "\u0396",
      Eta: "\u0397",
      Theta: "\u0398",
      Iota: "\u0399",
      Kappa: "\u039A",
      Lambda: "\u039B",
      Mu: "\u039C",
      Nu: "\u039D",
      Xi: "\u039E",
      Omicron: "\u039F",
      Pi: "\u03A0",
      Rho: "\u03A1",
      Sigma: "\u03A3",
      Tau: "\u03A4",
      Upsilon: "\u03A5",
      Phi: "\u03A6",
      Chi: "\u03A7",
      Psi: "\u03A8",
      Omega: "\u03A9",
      alpha: "\u03B1",
      beta: "\u03B2",
      gamma: "\u03B3",
      delta: "\u03B4",
      epsilon: "\u03B5",
      zeta: "\u03B6",
      eta: "\u03B7",
      theta: "\u03B8",
      iota: "\u03B9",
      kappa: "\u03BA",
      lambda: "\u03BB",
      mu: "\u03BC",
      nu: "\u03BD",
      xi: "\u03BE",
      omicron: "\u03BF",
      pi: "\u03C0",
      rho: "\u03C1",
      sigmaf: "\u03C2",
      sigma: "\u03C3",
      tau: "\u03C4",
      upsilon: "\u03C5",
      phi: "\u03C6",
      chi: "\u03C7",
      psi: "\u03C8",
      omega: "\u03C9",
      thetasym: "\u03D1",
      upsih: "\u03D2",
      piv: "\u03D6",
      OElig: "\u0152",
      oelig: "\u0153",
      Scaron: "\u0160",
      scaron: "\u0161",
      Yuml: "\u0178",
      fnof: "\u0192",
      circ: "\u02C6",
      tilde: "\u02DC",
      ensp: "\u2002",
      emsp: "\u2003",
      thinsp: "\u2009",
      zwnj: "\u200C",
      zwj: "\u200D",
      lrm: "\u200E",
      rlm: "\u200F",
      ndash: "\u2013",
      mdash: "\u2014",
      lsquo: "\u2018",
      rsquo: "\u2019",
      sbquo: "\u201A",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bdquo: "\u201E",
      dagger: "\u2020",
      Dagger: "\u2021",
      bull: "\u2022",
      hellip: "\u2026",
      permil: "\u2030",
      prime: "\u2032",
      Prime: "\u2033",
      lsaquo: "\u2039",
      rsaquo: "\u203A",
      oline: "\u203E",
      euro: "\u20AC",
      trade: "\u2122",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193",
      harr: "\u2194",
      crarr: "\u21B5",
      lceil: "\u2308",
      rceil: "\u2309",
      lfloor: "\u230A",
      rfloor: "\u230B",
      loz: "\u25CA",
      spades: "\u2660",
      clubs: "\u2663",
      hearts: "\u2665",
      diams: "\u2666"
    });
    exports.entityMap = exports.HTML_ENTITIES;
  }
});

// ../../node_modules/@xmldom/xmldom/lib/sax.js
var require_sax = __commonJS({
  "../../node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
    init_define_process();
    var NAMESPACE = require_conventions().NAMESPACE;
    var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
    var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
    var S_TAG = 0;
    var S_ATTR = 1;
    var S_ATTR_SPACE = 2;
    var S_EQ = 3;
    var S_ATTR_NOQUOT_VALUE = 4;
    var S_ATTR_END = 5;
    var S_TAG_SPACE = 6;
    var S_TAG_CLOSE = 7;
    function ParseError(message, locator) {
      this.message = message;
      this.locator = locator;
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, ParseError);
    }
    ParseError.prototype = new Error();
    ParseError.prototype.name = ParseError.name;
    function XMLReader() {
    }
    XMLReader.prototype = {
      parse: function(source, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = {});
        parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
        domBuilder.endDocument();
      }
    };
    function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
      function fixedFromCharCode(code) {
        if (code > 65535) {
          code -= 65536;
          var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        } else {
          return String.fromCharCode(code);
        }
      }
      function entityReplacer(a2) {
        var k = a2.slice(1, -1);
        if (k in entityMap) {
          return entityMap[k];
        } else if (k.charAt(0) === "#") {
          return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
        } else {
          errorHandler.error("entity not found:" + a2);
          return a2;
        }
      }
      function appendText(end2) {
        if (end2 > start) {
          var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
          locator && position(start);
          domBuilder.characters(xt, 0, end2 - start);
          start = end2;
        }
      }
      function position(p, m) {
        while (p >= lineEnd && (m = linePattern.exec(source))) {
          lineStart = m.index;
          lineEnd = lineStart + m[0].length;
          locator.lineNumber++;
        }
        locator.columnNumber = p - lineStart + 1;
      }
      var lineStart = 0;
      var lineEnd = 0;
      var linePattern = /.*(?:\r\n?|\n)|.*$/g;
      var locator = domBuilder.locator;
      var parseStack = [{ currentNSMap: defaultNSMapCopy }];
      var closeMap = {};
      var start = 0;
      while (true) {
        try {
          var tagStart = source.indexOf("<", start);
          if (tagStart < 0) {
            if (!source.substr(start).match(/^\s*$/)) {
              var doc = domBuilder.doc;
              var text = doc.createTextNode(source.substr(start));
              doc.appendChild(text);
              domBuilder.currentElement = text;
            }
            return;
          }
          if (tagStart > start) {
            appendText(tagStart);
          }
          switch (source.charAt(tagStart + 1)) {
            case "/":
              var end = source.indexOf(">", tagStart + 3);
              var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
              var config = parseStack.pop();
              if (end < 0) {
                tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                end = tagStart + 1 + tagName.length;
              } else if (tagName.match(/\s</)) {
                tagName = tagName.replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " maybe not complete");
                end = tagStart + 1 + tagName.length;
              }
              var localNSMap = config.localNSMap;
              var endMatch = config.tagName == tagName;
              var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
              if (endIgnoreCaseMach) {
                domBuilder.endElement(config.uri, config.localName, tagName);
                if (localNSMap) {
                  for (var prefix in localNSMap) {
                    domBuilder.endPrefixMapping(prefix);
                  }
                }
                if (!endMatch) {
                  errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                }
              } else {
                parseStack.push(config);
              }
              end++;
              break;
            case "?":
              locator && position(tagStart);
              end = parseInstruction(source, tagStart, domBuilder);
              break;
            case "!":
              locator && position(tagStart);
              end = parseDCC(source, tagStart, domBuilder, errorHandler);
              break;
            default:
              locator && position(tagStart);
              var el = new ElementAttributes();
              var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
              var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
              var len = el.length;
              if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                el.closed = true;
                if (!entityMap.nbsp) {
                  errorHandler.warning("unclosed xml attribute");
                }
              }
              if (locator && len) {
                var locator2 = copyLocator(locator, {});
                for (var i = 0; i < len; i++) {
                  var a = el[i];
                  position(a.offset);
                  a.locator = copyLocator(locator, {});
                }
                domBuilder.locator = locator2;
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
                domBuilder.locator = locator;
              } else {
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
              }
              if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
              } else {
                end++;
              }
          }
        } catch (e) {
          if (e instanceof ParseError) {
            throw e;
          }
          errorHandler.error("element parse error: " + e);
          end = -1;
        }
        if (end > start) {
          start = end;
        } else {
          appendText(Math.max(tagStart, start) + 1);
        }
      }
    }
    function copyLocator(f, t) {
      t.lineNumber = f.lineNumber;
      t.columnNumber = f.columnNumber;
      return t;
    }
    function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
      function addAttribute(qname, value2, startIndex) {
        if (el.attributeNames.hasOwnProperty(qname)) {
          errorHandler.fatalError("Attribute " + qname + " redefined");
        }
        el.addValue(qname, value2, startIndex);
      }
      var attrName;
      var value;
      var p = ++start;
      var s = S_TAG;
      while (true) {
        var c = source.charAt(p);
        switch (c) {
          case "=":
            if (s === S_ATTR) {
              attrName = source.slice(start, p);
              s = S_EQ;
            } else if (s === S_ATTR_SPACE) {
              s = S_EQ;
            } else {
              throw new Error("attribute equal must after attrName");
            }
            break;
          case "'":
          case '"':
            if (s === S_EQ || s === S_ATTR) {
              if (s === S_ATTR) {
                errorHandler.warning('attribute value must after "="');
                attrName = source.slice(start, p);
              }
              start = p + 1;
              p = source.indexOf(c, start);
              if (p > 0) {
                value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                addAttribute(attrName, value, start - 1);
                s = S_ATTR_END;
              } else {
                throw new Error("attribute value no end '" + c + "' match");
              }
            } else if (s == S_ATTR_NOQUOT_VALUE) {
              value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
              addAttribute(attrName, value, start);
              errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
              start = p + 1;
              s = S_ATTR_END;
            } else {
              throw new Error('attribute value must after "="');
            }
            break;
          case "/":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                s = S_TAG_CLOSE;
                el.closed = true;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
              case S_ATTR_SPACE:
                break;
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            errorHandler.error("unexpected end of input");
            if (s == S_TAG) {
              el.setTagName(source.slice(start, p));
            }
            return p;
          case ">":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                value = source.slice(start, p);
                if (value.slice(-1) === "/") {
                  el.closed = true;
                  value = value.slice(0, -1);
                }
              case S_ATTR_SPACE:
                if (s === S_ATTR_SPACE) {
                  value = attrName;
                }
                if (s == S_ATTR_NOQUOT_VALUE) {
                  errorHandler.warning('attribute "' + value + '" missed quot(")!');
                  addAttribute(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
                } else {
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                  }
                  addAttribute(value, value, start);
                }
                break;
              case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return p;
          case "\x80":
            c = " ";
          default:
            if (c <= " ") {
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                  s = S_TAG_SPACE;
                  break;
                case S_ATTR:
                  attrName = source.slice(start, p);
                  s = S_ATTR_SPACE;
                  break;
                case S_ATTR_NOQUOT_VALUE:
                  var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  addAttribute(attrName, value, start);
                case S_ATTR_END:
                  s = S_TAG_SPACE;
                  break;
              }
            } else {
              switch (s) {
                case S_ATTR_SPACE:
                  var tagName = el.tagName;
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                  }
                  addAttribute(attrName, attrName, start);
                  start = p;
                  s = S_ATTR;
                  break;
                case S_ATTR_END:
                  errorHandler.warning('attribute space is required"' + attrName + '"!!');
                case S_TAG_SPACE:
                  s = S_ATTR;
                  start = p;
                  break;
                case S_EQ:
                  s = S_ATTR_NOQUOT_VALUE;
                  start = p;
                  break;
                case S_TAG_CLOSE:
                  throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
        }
        p++;
      }
    }
    function appendElement(el, domBuilder, currentNSMap) {
      var tagName = el.tagName;
      var localNSMap = null;
      var i = el.length;
      while (i--) {
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
          var prefix = a.prefix = qName.slice(0, nsp);
          var localName = qName.slice(nsp + 1);
          var nsPrefix = prefix === "xmlns" && localName;
        } else {
          localName = qName;
          prefix = null;
          nsPrefix = qName === "xmlns" && "";
        }
        a.localName = localName;
        if (nsPrefix !== false) {
          if (localNSMap == null) {
            localNSMap = {};
            _copy(currentNSMap, currentNSMap = {});
          }
          currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
          a.uri = NAMESPACE.XMLNS;
          domBuilder.startPrefixMapping(nsPrefix, value);
        }
      }
      var i = el.length;
      while (i--) {
        a = el[i];
        var prefix = a.prefix;
        if (prefix) {
          if (prefix === "xml") {
            a.uri = NAMESPACE.XML;
          }
          if (prefix !== "xmlns") {
            a.uri = currentNSMap[prefix || ""];
          }
        }
      }
      var nsp = tagName.indexOf(":");
      if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
      } else {
        prefix = null;
        localName = el.localName = tagName;
      }
      var ns = el.uri = currentNSMap[prefix || ""];
      domBuilder.startElement(ns, localName, tagName, el);
      if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
          for (prefix in localNSMap) {
            domBuilder.endPrefixMapping(prefix);
          }
        }
      } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        return true;
      }
    }
    function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
      if (/^(?:script|textarea)$/i.test(tagName)) {
        var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
        var text = source.substring(elStartEnd + 1, elEndStart);
        if (/[&<]/.test(text)) {
          if (/^script$/i.test(tagName)) {
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
          }
          text = text.replace(/&#?\w+;/g, entityReplacer);
          domBuilder.characters(text, 0, text.length);
          return elEndStart;
        }
      }
      return elStartEnd + 1;
    }
    function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
      var pos = closeMap[tagName];
      if (pos == null) {
        pos = source.lastIndexOf("</" + tagName + ">");
        if (pos < elStartEnd) {
          pos = source.lastIndexOf("</" + tagName);
        }
        closeMap[tagName] = pos;
      }
      return pos < elStartEnd;
    }
    function _copy(source, target) {
      for (var n in source) {
        target[n] = source[n];
      }
    }
    function parseDCC(source, start, domBuilder, errorHandler) {
      var next = source.charAt(start + 2);
      switch (next) {
        case "-":
          if (source.charAt(start + 3) === "-") {
            var end = source.indexOf("-->", start + 4);
            if (end > start) {
              domBuilder.comment(source, start + 4, end - start - 4);
              return end + 3;
            } else {
              errorHandler.error("Unclosed comment");
              return -1;
            }
          } else {
            return -1;
          }
        default:
          if (source.substr(start + 3, 6) == "CDATA[") {
            var end = source.indexOf("]]>", start + 9);
            domBuilder.startCDATA();
            domBuilder.characters(source, start + 9, end - start - 9);
            domBuilder.endCDATA();
            return end + 3;
          }
          var matchs = split(source, start);
          var len = matchs.length;
          if (len > 1 && /!doctype/i.test(matchs[0][0])) {
            var name = matchs[1][0];
            var pubid = false;
            var sysid = false;
            if (len > 3) {
              if (/^public$/i.test(matchs[2][0])) {
                pubid = matchs[3][0];
                sysid = len > 4 && matchs[4][0];
              } else if (/^system$/i.test(matchs[2][0])) {
                sysid = matchs[3][0];
              }
            }
            var lastMatch = matchs[len - 1];
            domBuilder.startDTD(name, pubid, sysid);
            domBuilder.endDTD();
            return lastMatch.index + lastMatch[0].length;
          }
      }
      return -1;
    }
    function parseInstruction(source, start, domBuilder) {
      var end = source.indexOf("?>", start);
      if (end) {
        var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (match) {
          var len = match[0].length;
          domBuilder.processingInstruction(match[1], match[2]);
          return end + 2;
        } else {
          return -1;
        }
      }
      return -1;
    }
    function ElementAttributes() {
      this.attributeNames = {};
    }
    ElementAttributes.prototype = {
      setTagName: function(tagName) {
        if (!tagNamePattern.test(tagName)) {
          throw new Error("invalid tagName:" + tagName);
        }
        this.tagName = tagName;
      },
      addValue: function(qName, value, offset) {
        if (!tagNamePattern.test(qName)) {
          throw new Error("invalid attribute:" + qName);
        }
        this.attributeNames[qName] = this.length;
        this[this.length++] = { qName, value, offset };
      },
      length: 0,
      getLocalName: function(i) {
        return this[i].localName;
      },
      getLocator: function(i) {
        return this[i].locator;
      },
      getQName: function(i) {
        return this[i].qName;
      },
      getURI: function(i) {
        return this[i].uri;
      },
      getValue: function(i) {
        return this[i].value;
      }
    };
    function split(source, start) {
      var match;
      var buf = [];
      var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      reg.lastIndex = start;
      reg.exec(source);
      while (match = reg.exec(source)) {
        buf.push(match);
        if (match[1])
          return buf;
      }
    }
    exports.XMLReader = XMLReader;
    exports.ParseError = ParseError;
  }
});

// ../../node_modules/@xmldom/xmldom/lib/dom-parser.js
var require_dom_parser = __commonJS({
  "../../node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
    init_define_process();
    var conventions = require_conventions();
    var dom = require_dom();
    var entities = require_entities();
    var sax = require_sax();
    var DOMImplementation = dom.DOMImplementation;
    var NAMESPACE = conventions.NAMESPACE;
    var ParseError = sax.ParseError;
    var XMLReader = sax.XMLReader;
    function DOMParser(options) {
      this.options = options || { locator: {} };
    }
    DOMParser.prototype.parseFromString = function(source, mimeType) {
      var options = this.options;
      var sax2 = new XMLReader();
      var domBuilder = options.domBuilder || new DOMHandler();
      var errorHandler = options.errorHandler;
      var locator = options.locator;
      var defaultNSMap = options.xmlns || {};
      var isHTML = /\/x?html?$/.test(mimeType);
      var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
      if (locator) {
        domBuilder.setDocumentLocator(locator);
      }
      sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
      sax2.domBuilder = options.domBuilder || domBuilder;
      if (isHTML) {
        defaultNSMap[""] = NAMESPACE.HTML;
      }
      defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
      if (source && typeof source === "string") {
        sax2.parse(source, defaultNSMap, entityMap);
      } else {
        sax2.errorHandler.error("invalid doc source");
      }
      return domBuilder.doc;
    };
    function buildErrorHandler(errorImpl, domBuilder, locator) {
      if (!errorImpl) {
        if (domBuilder instanceof DOMHandler) {
          return domBuilder;
        }
        errorImpl = domBuilder;
      }
      var errorHandler = {};
      var isCallback = errorImpl instanceof Function;
      locator = locator || {};
      function build(key) {
        var fn = errorImpl[key];
        if (!fn && isCallback) {
          fn = errorImpl.length == 2 ? function(msg) {
            errorImpl(key, msg);
          } : errorImpl;
        }
        errorHandler[key] = fn && function(msg) {
          fn("[xmldom " + key + "]	" + msg + _locator(locator));
        } || function() {
        };
      }
      build("warning");
      build("error");
      build("fatalError");
      return errorHandler;
    }
    function DOMHandler() {
      this.cdata = false;
    }
    function position(locator, node) {
      node.lineNumber = locator.lineNumber;
      node.columnNumber = locator.columnNumber;
    }
    DOMHandler.prototype = {
      startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null);
        if (this.locator) {
          this.doc.documentURI = this.locator.systemId;
        }
      },
      startElement: function(namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for (var i = 0; i < len; i++) {
          var namespaceURI = attrs.getURI(i);
          var value = attrs.getValue(i);
          var qName = attrs.getQName(i);
          var attr = doc.createAttributeNS(namespaceURI, qName);
          this.locator && position(attrs.getLocator(i), attr);
          attr.value = attr.nodeValue = value;
          el.setAttributeNode(attr);
        }
      },
      endElement: function(namespaceURI, localName, qName) {
        var current = this.currentElement;
        var tagName = current.tagName;
        this.currentElement = current.parentNode;
      },
      startPrefixMapping: function(prefix, uri) {
      },
      endPrefixMapping: function(prefix) {
      },
      processingInstruction: function(target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
      },
      ignorableWhitespace: function(ch, start, length) {
      },
      characters: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        if (chars) {
          if (this.cdata) {
            var charNode = this.doc.createCDATASection(chars);
          } else {
            var charNode = this.doc.createTextNode(chars);
          }
          if (this.currentElement) {
            this.currentElement.appendChild(charNode);
          } else if (/^\s*$/.test(chars)) {
            this.doc.appendChild(charNode);
          }
          this.locator && position(this.locator, charNode);
        }
      },
      skippedEntity: function(name) {
      },
      endDocument: function() {
        this.doc.normalize();
      },
      setDocumentLocator: function(locator) {
        if (this.locator = locator) {
          locator.lineNumber = 0;
        }
      },
      comment: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
      },
      startCDATA: function() {
        this.cdata = true;
      },
      endCDATA: function() {
        this.cdata = false;
      },
      startDTD: function(name, publicId, systemId) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
          var dt = impl.createDocumentType(name, publicId, systemId);
          this.locator && position(this.locator, dt);
          appendElement(this, dt);
          this.doc.doctype = dt;
        }
      },
      warning: function(error) {
        console.warn("[xmldom warning]	" + error, _locator(this.locator));
      },
      error: function(error) {
        console.error("[xmldom error]	" + error, _locator(this.locator));
      },
      fatalError: function(error) {
        throw new ParseError(error, this.locator);
      }
    };
    function _locator(l) {
      if (l) {
        return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
      }
    }
    function _toString(chars, start, length) {
      if (typeof chars == "string") {
        return chars.substr(start, length);
      } else {
        if (chars.length >= start + length || start) {
          return new java.lang.String(chars, start, length) + "";
        }
        return chars;
      }
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
      DOMHandler.prototype[key] = function() {
        return null;
      };
    });
    function appendElement(hander, node) {
      if (!hander.currentElement) {
        hander.doc.appendChild(node);
      } else {
        hander.currentElement.appendChild(node);
      }
    }
    exports.__DOMHandler = DOMHandler;
    exports.DOMParser = DOMParser;
    exports.DOMImplementation = dom.DOMImplementation;
    exports.XMLSerializer = dom.XMLSerializer;
  }
});

// ../../node_modules/@xmldom/xmldom/lib/index.js
var require_lib9 = __commonJS({
  "../../node_modules/@xmldom/xmldom/lib/index.js"(exports) {
    init_define_process();
    var dom = require_dom();
    exports.DOMImplementation = dom.DOMImplementation;
    exports.XMLSerializer = dom.XMLSerializer;
    exports.DOMParser = require_dom_parser().DOMParser;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/utils/parseJson.js
var require_parseJson = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/utils/parseJson.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseJson = void 0;
    function parseJson(data) {
      try {
        var json = JSON.parse(data);
        return json;
      } catch (_) {
        return null;
      }
    }
    exports.parseJson = parseJson;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/utils/bufferFrom.js
var require_bufferFrom = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/utils/bufferFrom.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bufferFrom = void 0;
    function bufferFrom(init) {
      var encodedString = encodeURIComponent(init);
      var binaryString = encodedString.replace(/%([0-9A-F]{2})/g, function(_, char) {
        return String.fromCharCode("0x" + char);
      });
      var buffer = new Uint8Array(binaryString.length);
      Array.prototype.forEach.call(binaryString, function(char, index) {
        buffer[index] = char.charCodeAt(0);
      });
      return buffer;
    }
    exports.bufferFrom = bufferFrom;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/polyfills/EventPolyfill.js
var require_EventPolyfill = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/polyfills/EventPolyfill.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventPolyfill = void 0;
    var EventPolyfill = function() {
      function EventPolyfill2(type, options) {
        this.AT_TARGET = 0;
        this.BUBBLING_PHASE = 0;
        this.CAPTURING_PHASE = 0;
        this.NONE = 0;
        this.type = "";
        this.srcElement = null;
        this.currentTarget = null;
        this.eventPhase = 0;
        this.isTrusted = true;
        this.composed = false;
        this.cancelable = true;
        this.defaultPrevented = false;
        this.bubbles = true;
        this.lengthComputable = true;
        this.loaded = 0;
        this.total = 0;
        this.cancelBubble = false;
        this.returnValue = true;
        this.type = type;
        this.target = (options === null || options === void 0 ? void 0 : options.target) || null;
        this.currentTarget = (options === null || options === void 0 ? void 0 : options.currentTarget) || null;
        this.timeStamp = Date.now();
      }
      EventPolyfill2.prototype.composedPath = function() {
        return [];
      };
      EventPolyfill2.prototype.initEvent = function(type, bubbles, cancelable) {
        this.type = type;
        this.bubbles = !!bubbles;
        this.cancelable = !!cancelable;
      };
      EventPolyfill2.prototype.preventDefault = function() {
        this.defaultPrevented = true;
      };
      EventPolyfill2.prototype.stopPropagation = function() {
      };
      EventPolyfill2.prototype.stopImmediatePropagation = function() {
      };
      return EventPolyfill2;
    }();
    exports.EventPolyfill = EventPolyfill;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/polyfills/ProgressEventPolyfill.js
var require_ProgressEventPolyfill = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/polyfills/ProgressEventPolyfill.js"(exports) {
    "use strict";
    init_define_process();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgressEventPolyfill = void 0;
    var EventPolyfill_1 = require_EventPolyfill();
    var ProgressEventPolyfill = function(_super) {
      __extends(ProgressEventPolyfill2, _super);
      function ProgressEventPolyfill2(type, init) {
        var _this = _super.call(this, type) || this;
        _this.lengthComputable = (init === null || init === void 0 ? void 0 : init.lengthComputable) || false;
        _this.composed = (init === null || init === void 0 ? void 0 : init.composed) || false;
        _this.loaded = (init === null || init === void 0 ? void 0 : init.loaded) || 0;
        _this.total = (init === null || init === void 0 ? void 0 : init.total) || 0;
        return _this;
      }
      return ProgressEventPolyfill2;
    }(EventPolyfill_1.EventPolyfill);
    exports.ProgressEventPolyfill = ProgressEventPolyfill;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/utils/createEvent.js
var require_createEvent = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/utils/createEvent.js"(exports) {
    "use strict";
    init_define_process();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createEvent = void 0;
    var EventPolyfill_1 = require_EventPolyfill();
    var ProgressEventPolyfill_1 = require_ProgressEventPolyfill();
    var SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== "undefined";
    function createEvent(target, type, init) {
      var progressEvents = [
        "error",
        "progress",
        "loadstart",
        "loadend",
        "load",
        "timeout",
        "abort"
      ];
      var ProgressEventClass = SUPPORTS_PROGRESS_EVENT ? ProgressEvent : ProgressEventPolyfill_1.ProgressEventPolyfill;
      var event = progressEvents.includes(type) ? new ProgressEventClass(type, {
        lengthComputable: true,
        loaded: (init === null || init === void 0 ? void 0 : init.loaded) || 0,
        total: (init === null || init === void 0 ? void 0 : init.total) || 0
      }) : new EventPolyfill_1.EventPolyfill(type, {
        target,
        currentTarget: target
      });
      return event;
    }
    exports.createEvent = createEvent;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/XMLHttpRequestOverride.js
var require_XMLHttpRequestOverride = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/XMLHttpRequestOverride.js"(exports) {
    "use strict";
    init_define_process();
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createXMLHttpRequestOverride = void 0;
    var until_1 = require_lib4();
    var headers_polyfill_1 = require_lib();
    var xmldom_1 = require_lib9();
    var parseJson_1 = require_parseJson();
    var toIsoResponse_1 = require_toIsoResponse();
    var bufferFrom_1 = require_bufferFrom();
    var createEvent_1 = require_createEvent();
    var IsomorphicRequest_1 = require_IsomorphicRequest();
    var bufferUtils_1 = require_bufferUtils();
    var InteractiveIsomorphicRequest_1 = require_InteractiveIsomorphicRequest();
    var createXMLHttpRequestOverride = function(options) {
      var _a;
      var XMLHttpRequest = options.XMLHttpRequest, emitter = options.emitter, log2 = options.log;
      return _a = function() {
        function XMLHttpRequestOverride() {
          this._events = [];
          this.log = log2;
          this.UNSENT = 0;
          this.OPENED = 1;
          this.HEADERS_RECEIVED = 2;
          this.LOADING = 3;
          this.DONE = 4;
          this.onreadystatechange = null;
          this.onabort = null;
          this.onerror = null;
          this.onload = null;
          this.onloadend = null;
          this.onloadstart = null;
          this.onprogress = null;
          this.ontimeout = null;
          this.url = "";
          this.method = "GET";
          this.readyState = this.UNSENT;
          this.withCredentials = false;
          this.status = 200;
          this.statusText = "OK";
          this.response = "";
          this.responseType = "text";
          this.responseText = "";
          this.responseXML = null;
          this.responseURL = "";
          this.upload = {};
          this.timeout = 0;
          this._requestHeaders = new headers_polyfill_1.Headers();
          this._responseHeaders = new headers_polyfill_1.Headers();
        }
        XMLHttpRequestOverride.prototype.setReadyState = function(nextState) {
          if (nextState === this.readyState) {
            return;
          }
          this.log("readyState change %d -> %d", this.readyState, nextState);
          this.readyState = nextState;
          if (nextState !== this.UNSENT) {
            this.log("triggering readystate change...");
            this.trigger("readystatechange");
          }
        };
        XMLHttpRequestOverride.prototype.trigger = function(eventName, options2) {
          var e_1, _a2;
          this.log('trigger "%s" (%d)', eventName, this.readyState);
          this.log('resolve listener for event "%s"', eventName);
          var callback = this["on" + eventName];
          callback === null || callback === void 0 ? void 0 : callback.call(this, createEvent_1.createEvent(this, eventName, options2));
          try {
            for (var _b = __values(this._events), _c = _b.next(); !_c.done; _c = _b.next()) {
              var event_1 = _c.value;
              if (event_1.name === eventName) {
                log2('calling mock event listener "%s" (%d)', eventName, this.readyState);
                event_1.listener.call(this, createEvent_1.createEvent(this, eventName, options2));
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a2 = _b.return))
                _a2.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          return this;
        };
        XMLHttpRequestOverride.prototype.reset = function() {
          this.log("reset");
          this.setReadyState(this.UNSENT);
          this.status = 200;
          this.statusText = "OK";
          this.response = null;
          this.responseText = null;
          this.responseXML = null;
          this._requestHeaders = new headers_polyfill_1.Headers();
          this._responseHeaders = new headers_polyfill_1.Headers();
        };
        XMLHttpRequestOverride.prototype.open = function(method, url, async, user2, password) {
          if (async === void 0) {
            async = true;
          }
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a2) {
              this.log = this.log.extend("request " + method + " " + url);
              this.log("open", { method, url, async, user: user2, password });
              this.reset();
              this.setReadyState(this.OPENED);
              if (typeof url === "undefined") {
                this.url = method;
                this.method = "GET";
              } else {
                this.url = url;
                this.method = method;
                this.async = async;
                this.user = user2;
                this.password = password;
              }
              return [2];
            });
          });
        };
        XMLHttpRequestOverride.prototype.send = function(data) {
          var _this = this;
          this.log("send %s %s", this.method, this.url);
          var buffer;
          if (typeof data === "string") {
            buffer = bufferUtils_1.encodeBuffer(data);
          } else {
            buffer = data || new ArrayBuffer(0);
          }
          var url;
          try {
            url = new URL(this.url);
          } catch (error) {
            url = new URL(this.url, window.location.href);
          }
          this.log("request headers", this._requestHeaders);
          var isomorphicRequest = new IsomorphicRequest_1.IsomorphicRequest(url, {
            body: buffer,
            method: this.method,
            headers: this._requestHeaders,
            credentials: this.withCredentials ? "include" : "omit"
          });
          var interactiveIsomorphicRequest = new InteractiveIsomorphicRequest_1.InteractiveIsomorphicRequest(isomorphicRequest);
          this.log('emitting the "request" event for %d listener(s)...', emitter.listenerCount("request"));
          emitter.emit("request", interactiveIsomorphicRequest);
          this.log("awaiting mocked response...");
          Promise.resolve(until_1.until(function() {
            return __awaiter(_this, void 0, void 0, function() {
              var _a2, mockedResponse;
              return __generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    return [4, emitter.untilIdle("request", function(_a3) {
                      var _b2 = __read(_a3.args, 1), request = _b2[0];
                      return request.id === interactiveIsomorphicRequest.id;
                    })];
                  case 1:
                    _b.sent();
                    this.log("all request listeners have been resolved!");
                    return [4, interactiveIsomorphicRequest.respondWith.invoked()];
                  case 2:
                    _a2 = __read.apply(void 0, [_b.sent(), 1]), mockedResponse = _a2[0];
                    this.log("event.respondWith called with:", mockedResponse);
                    return [2, mockedResponse];
                }
              });
            });
          })).then(function(_a2) {
            var _b;
            var _c = __read(_a2, 2), middlewareException = _c[0], mockedResponse = _c[1];
            if (middlewareException) {
              _this.log("middleware function threw an exception!", middlewareException);
              _this.trigger("error");
              _this.abort();
              return;
            }
            if (mockedResponse) {
              _this.log("received mocked response", mockedResponse);
              _this.trigger("loadstart");
              _this.status = mockedResponse.status || 200;
              _this.statusText = mockedResponse.statusText || "OK";
              _this._responseHeaders = mockedResponse.headers ? headers_polyfill_1.objectToHeaders(mockedResponse.headers) : new headers_polyfill_1.Headers();
              _this.log("set response status", _this.status, _this.statusText);
              _this.log("set response headers", _this._responseHeaders);
              _this.setReadyState(_this.HEADERS_RECEIVED);
              _this.log("response type", _this.responseType);
              _this.response = _this.getResponseBody(mockedResponse.body);
              _this.responseURL = _this.url;
              _this.responseText = mockedResponse.body || "";
              _this.responseXML = _this.getResponseXML();
              _this.log("set response body", _this.response);
              if (mockedResponse.body && _this.response) {
                _this.setReadyState(_this.LOADING);
                var bodyBuffer = bufferFrom_1.bufferFrom(mockedResponse.body);
                _this.trigger("progress", {
                  loaded: bodyBuffer.length,
                  total: bodyBuffer.length
                });
              }
              _this.setReadyState(_this.DONE);
              _this.trigger("load");
              _this.trigger("loadend");
              emitter.emit("response", isomorphicRequest, toIsoResponse_1.toIsoResponse(mockedResponse));
            } else {
              _this.log("no mocked response received!");
              var originalRequest_1 = new XMLHttpRequest();
              _this.log("opening an original request %s %s", _this.method, _this.url);
              originalRequest_1.open(_this.method, _this.url, (_b = _this.async) !== null && _b !== void 0 ? _b : true, _this.user, _this.password);
              originalRequest_1.addEventListener("load", function() {
                _this.log('original "onload"');
                _this.status = originalRequest_1.status;
                _this.statusText = originalRequest_1.statusText;
                _this.responseURL = originalRequest_1.responseURL;
                _this.responseType = originalRequest_1.responseType;
                _this.response = originalRequest_1.response;
                _this.responseText = originalRequest_1.responseText;
                _this.responseXML = originalRequest_1.responseXML;
                _this.log("set mock request readyState to DONE");
                _this.setReadyState(_this.DONE);
                _this.log("received original response", _this.status, _this.statusText);
                _this.log("original response body:", _this.response);
                var responseHeaders = originalRequest_1.getAllResponseHeaders();
                _this.log("original response headers:\n", responseHeaders);
                _this._responseHeaders = headers_polyfill_1.stringToHeaders(responseHeaders);
                _this.log("original response headers (normalized)", _this._responseHeaders);
                _this.log("original response finished");
                emitter.emit("response", isomorphicRequest, {
                  status: originalRequest_1.status,
                  statusText: originalRequest_1.statusText,
                  headers: _this._responseHeaders,
                  body: originalRequest_1.response
                });
              });
              _this.propagateCallbacks(originalRequest_1);
              _this.propagateListeners(originalRequest_1);
              _this.propagateHeaders(originalRequest_1, _this._requestHeaders);
              if (_this.async) {
                originalRequest_1.timeout = _this.timeout;
              }
              _this.log("send", data);
              originalRequest_1.send(data);
            }
          });
        };
        XMLHttpRequestOverride.prototype.abort = function() {
          this.log("abort");
          if (this.readyState > this.UNSENT && this.readyState < this.DONE) {
            this.setReadyState(this.UNSENT);
            this.trigger("abort");
          }
        };
        XMLHttpRequestOverride.prototype.dispatchEvent = function() {
          return false;
        };
        XMLHttpRequestOverride.prototype.setRequestHeader = function(name, value) {
          this.log('set request header "%s" to "%s"', name, value);
          this._requestHeaders.append(name, value);
        };
        XMLHttpRequestOverride.prototype.getResponseHeader = function(name) {
          this.log('get response header "%s"', name);
          if (this.readyState < this.HEADERS_RECEIVED) {
            this.log("cannot return a header: headers not received (state: %s)", this.readyState);
            return null;
          }
          var headerValue = this._responseHeaders.get(name);
          this.log('resolved response header "%s" to "%s"', name, headerValue, this._responseHeaders);
          return headerValue;
        };
        XMLHttpRequestOverride.prototype.getAllResponseHeaders = function() {
          this.log("get all response headers");
          if (this.readyState < this.HEADERS_RECEIVED) {
            this.log("cannot return headers: headers not received (state: %s)", this.readyState);
            return "";
          }
          return headers_polyfill_1.headersToString(this._responseHeaders);
        };
        XMLHttpRequestOverride.prototype.addEventListener = function(name, listener) {
          this.log("addEventListener", name, listener);
          this._events.push({
            name,
            listener
          });
        };
        XMLHttpRequestOverride.prototype.removeEventListener = function(name, listener) {
          this.log("removeEventListener", name, listener);
          this._events = this._events.filter(function(storedEvent) {
            return storedEvent.name !== name && storedEvent.listener !== listener;
          });
        };
        XMLHttpRequestOverride.prototype.overrideMimeType = function() {
        };
        XMLHttpRequestOverride.prototype.getResponseBody = function(body) {
          var textBody = body !== null && body !== void 0 ? body : "";
          this.log("coerced response body to", textBody);
          switch (this.responseType) {
            case "json": {
              this.log("resolving response body as JSON");
              return parseJson_1.parseJson(textBody);
            }
            case "blob": {
              var blobType = this.getResponseHeader("content-type") || "text/plain";
              this.log("resolving response body as Blob", { type: blobType });
              return new Blob([textBody], {
                type: blobType
              });
            }
            case "arraybuffer": {
              this.log("resolving response body as ArrayBuffer");
              var arrayBuffer = bufferFrom_1.bufferFrom(textBody);
              return arrayBuffer;
            }
            default:
              return textBody;
          }
        };
        XMLHttpRequestOverride.prototype.getResponseXML = function() {
          var contentType = this.getResponseHeader("Content-Type");
          if (contentType === "application/xml" || contentType === "text/xml") {
            return new xmldom_1.DOMParser().parseFromString(this.responseText, contentType);
          }
          return null;
        };
        XMLHttpRequestOverride.prototype.propagateCallbacks = function(request) {
          var e_2, _a2;
          this.log("propagating request callbacks to the original request");
          var callbackNames = [
            "abort",
            "onerror",
            "ontimeout",
            "onload",
            "onloadstart",
            "onloadend",
            "onprogress",
            "onreadystatechange"
          ];
          try {
            for (var callbackNames_1 = __values(callbackNames), callbackNames_1_1 = callbackNames_1.next(); !callbackNames_1_1.done; callbackNames_1_1 = callbackNames_1.next()) {
              var callbackName = callbackNames_1_1.value;
              var callback = this[callbackName];
              if (callback) {
                request[callbackName] = this[callbackName];
                this.log('propagated the "%s" callback', callbackName, callback);
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (callbackNames_1_1 && !callbackNames_1_1.done && (_a2 = callbackNames_1.return))
                _a2.call(callbackNames_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
          request.onabort = this.abort;
          request.onerror = this.onerror;
          request.ontimeout = this.ontimeout;
          request.onload = this.onload;
          request.onloadstart = this.onloadstart;
          request.onloadend = this.onloadend;
          request.onprogress = this.onprogress;
          request.onreadystatechange = this.onreadystatechange;
        };
        XMLHttpRequestOverride.prototype.propagateListeners = function(request) {
          this.log("propagating request listeners (%d) to the original request", this._events.length, this._events);
          this._events.forEach(function(_a2) {
            var name = _a2.name, listener = _a2.listener;
            request.addEventListener(name, listener);
          });
        };
        XMLHttpRequestOverride.prototype.propagateHeaders = function(request, headers) {
          var _this = this;
          this.log("propagating request headers to the original request", headers);
          Object.entries(headers.raw()).forEach(function(_a2) {
            var _b = __read(_a2, 2), name = _b[0], value = _b[1];
            _this.log('setting "%s" (%s) header on the original request', name, value);
            request.setRequestHeader(name, value);
          });
        };
        return XMLHttpRequestOverride;
      }(), _a.UNSENT = 0, _a.OPENED = 1, _a.HEADERS_RECEIVED = 2, _a.LOADING = 3, _a.DONE = 4, _a;
    };
    exports.createXMLHttpRequestOverride = createXMLHttpRequestOverride;
  }
});

// ../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/index.js
var require_XMLHttpRequest = __commonJS({
  "../../node_modules/@mswjs/interceptors/lib/interceptors/XMLHttpRequest/index.js"(exports) {
    "use strict";
    init_define_process();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XMLHttpRequestInterceptor = void 0;
    var outvariant_1 = require_lib5();
    var glossary_1 = require_glossary();
    var Interceptor_1 = require_Interceptor();
    var XMLHttpRequestOverride_1 = require_XMLHttpRequestOverride();
    var XMLHttpRequestInterceptor = function(_super) {
      __extends(XMLHttpRequestInterceptor2, _super);
      function XMLHttpRequestInterceptor2() {
        return _super.call(this, XMLHttpRequestInterceptor2.symbol) || this;
      }
      XMLHttpRequestInterceptor2.prototype.checkEnvironment = function() {
        return typeof window !== "undefined" && typeof window.XMLHttpRequest !== "undefined";
      };
      XMLHttpRequestInterceptor2.prototype.setup = function() {
        var log2 = this.log.extend("setup");
        log2('patching "XMLHttpRequest" module...');
        var PureXMLHttpRequest = window.XMLHttpRequest;
        outvariant_1.invariant(!PureXMLHttpRequest[glossary_1.IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.');
        window.XMLHttpRequest = XMLHttpRequestOverride_1.createXMLHttpRequestOverride({
          XMLHttpRequest: PureXMLHttpRequest,
          emitter: this.emitter,
          log: this.log
        });
        log2('native "XMLHttpRequest" module patched!', window.XMLHttpRequest.name);
        Object.defineProperty(window.XMLHttpRequest, glossary_1.IS_PATCHED_MODULE, {
          enumerable: true,
          configurable: true,
          value: true
        });
        this.subscriptions.push(function() {
          Object.defineProperty(window.XMLHttpRequest, glossary_1.IS_PATCHED_MODULE, {
            value: void 0
          });
          window.XMLHttpRequest = PureXMLHttpRequest;
          log2('native "XMLHttpRequest" module restored!', window.XMLHttpRequest.name);
        });
      };
      XMLHttpRequestInterceptor2.symbol = Symbol("xhr");
      return XMLHttpRequestInterceptor2;
    }(Interceptor_1.Interceptor);
    exports.XMLHttpRequestInterceptor = XMLHttpRequestInterceptor;
  }
});

// ../../node_modules/msw/lib/index.js
var require_lib10 = __commonJS({
  "../../node_modules/msw/lib/index.js"(exports, module) {
    init_define_process();
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
    var __objRest = (source, exclude) => {
      var target = {};
      for (var prop in source)
        if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
          target[prop] = source[prop];
      if (source != null && __getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(source)) {
          if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
            target[prop] = source[prop];
        }
      return target;
    };
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      GraphQLHandler: () => GraphQLHandler,
      MockedRequest: () => MockedRequest,
      RESTMethods: () => RESTMethods,
      RequestHandler: () => RequestHandler,
      RestHandler: () => RestHandler,
      cleanUrl: () => cleanUrl,
      compose: () => compose,
      context: () => context_exports,
      createResponseComposition: () => createResponseComposition,
      defaultContext: () => defaultContext,
      defaultResponse: () => defaultResponse,
      graphql: () => graphql,
      graphqlContext: () => graphqlContext,
      handleRequest: () => handleRequest,
      matchRequestUrl: () => matchRequestUrl,
      response: () => response,
      rest: () => rest2,
      restContext: () => restContext,
      setupWorker: () => setupWorker2
    });
    module.exports = __toCommonJS(src_exports);
    var context_exports = {};
    __export(context_exports, {
      body: () => body,
      cookie: () => cookie,
      data: () => data,
      delay: () => delay,
      errors: () => errors,
      extensions: () => extensions,
      fetch: () => fetch,
      json: () => json,
      set: () => set,
      status: () => status,
      text: () => text,
      xml: () => xml
    });
    var import_codes = __toESM2(require_codes());
    var status = (statusCode, statusText) => {
      return (res) => {
        res.status = statusCode;
        res.statusText = statusText || import_codes.default[String(statusCode)];
        return res;
      };
    };
    var import_headers_polyfill = require_lib();
    function set(...args) {
      return (res) => {
        const [name, value] = args;
        if (typeof name === "string") {
          res.headers.append(name, value);
        } else {
          const headers = (0, import_headers_polyfill.objectToHeaders)(name);
          headers.forEach((value2, name2) => {
            res.headers.append(name2, value2);
          });
        }
        return res;
      };
    }
    var cookieUtils = __toESM2(require_cookie());
    var cookie = (name, value, options) => {
      return (res) => {
        const serializedCookie = cookieUtils.serialize(name, value, options);
        res.headers.append("Set-Cookie", serializedCookie);
        if (typeof document !== "undefined") {
          document.cookie = serializedCookie;
        }
        return res;
      };
    };
    var body = (value) => {
      return (res) => {
        res.body = value;
        return res;
      };
    };
    function jsonParse(value) {
      try {
        return JSON.parse(value);
      } catch (error2) {
        return void 0;
      }
    }
    function isObject(value) {
      return value != null && typeof value === "object" && !Array.isArray(value);
    }
    function mergeRight(left, right) {
      return Object.entries(right).reduce((result, [key, rightValue]) => {
        const leftValue = result[key];
        if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
          result[key] = leftValue.concat(rightValue);
          return result;
        }
        if (isObject(leftValue) && isObject(rightValue)) {
          result[key] = mergeRight(leftValue, rightValue);
          return result;
        }
        result[key] = rightValue;
        return result;
      }, Object.assign({}, left));
    }
    var json = (body2) => {
      return (res) => {
        res.headers.set("Content-Type", "application/json");
        res.body = JSON.stringify(body2);
        return res;
      };
    };
    var data = (payload) => {
      return (res) => {
        const prevBody = jsonParse(res.body) || {};
        const nextBody = mergeRight(prevBody, { data: payload });
        return json(nextBody)(res);
      };
    };
    var extensions = (payload) => {
      return (res) => {
        const prevBody = jsonParse(res.body) || {};
        const nextBody = mergeRight(prevBody, { extensions: payload });
        return json(nextBody)(res);
      };
    };
    var import_is_node_process = require_lib2();
    var SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
    var MIN_SERVER_RESPONSE_TIME = 100;
    var MAX_SERVER_RESPONSE_TIME = 400;
    var NODE_SERVER_RESPONSE_TIME = 5;
    var getRandomServerResponseTime = () => {
      if ((0, import_is_node_process.isNodeProcess)()) {
        return NODE_SERVER_RESPONSE_TIME;
      }
      return Math.floor(Math.random() * (MAX_SERVER_RESPONSE_TIME - MIN_SERVER_RESPONSE_TIME) + MIN_SERVER_RESPONSE_TIME);
    };
    var delay = (durationOrMode) => {
      return (res) => {
        let delayTime;
        if (typeof durationOrMode === "string") {
          switch (durationOrMode) {
            case "infinite": {
              delayTime = SET_TIMEOUT_MAX_ALLOWED_INT;
              break;
            }
            case "real": {
              delayTime = getRandomServerResponseTime();
              break;
            }
            default: {
              throw new Error(`Failed to delay a response: unknown delay mode "${durationOrMode}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`);
            }
          }
        } else if (typeof durationOrMode === "undefined") {
          delayTime = getRandomServerResponseTime();
        } else {
          if (durationOrMode > SET_TIMEOUT_MAX_ALLOWED_INT) {
            throw new Error(`Failed to delay a response: provided delay duration (${durationOrMode}) exceeds the maximum allowed duration for "setTimeout" (${SET_TIMEOUT_MAX_ALLOWED_INT}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);
          }
          delayTime = durationOrMode;
        }
        res.delay = delayTime;
        return res;
      };
    };
    var errors = (errorsList) => {
      return (res) => {
        if (errorsList == null) {
          return res;
        }
        const prevBody = jsonParse(res.body) || {};
        const nextBody = mergeRight(prevBody, { errors: errorsList });
        return json(nextBody)(res);
      };
    };
    var import_is_node_process2 = require_lib2();
    var import_headers_polyfill2 = require_lib();
    var useFetch = (0, import_is_node_process2.isNodeProcess)() ? require_browser2() : window.fetch;
    var augmentRequestInit = (requestInit) => {
      const headers = new import_headers_polyfill2.Headers(requestInit.headers);
      headers.set("x-msw-bypass", "true");
      return __spreadProps(__spreadValues({}, requestInit), {
        headers: headers.all()
      });
    };
    var createFetchRequestParameters = (input) => {
      const { body: body2, method } = input;
      const requestParameters = __spreadProps(__spreadValues({}, input), {
        body: void 0
      });
      if (["GET", "HEAD"].includes(method)) {
        return requestParameters;
      }
      if (typeof body2 === "object" || typeof body2 === "number" || typeof body2 === "boolean") {
        requestParameters.body = JSON.stringify(body2);
      } else {
        requestParameters.body = body2;
      }
      return requestParameters;
    };
    var fetch = (input, requestInit = {}) => {
      if (typeof input === "string") {
        return useFetch(input, augmentRequestInit(requestInit));
      }
      const requestParameters = createFetchRequestParameters(input);
      const derivedRequestInit = augmentRequestInit(requestParameters);
      return useFetch(input.url.href, derivedRequestInit);
    };
    var text = (body2) => {
      return (res) => {
        res.headers.set("Content-Type", "text/plain");
        res.body = body2;
        return res;
      };
    };
    var xml = (body2) => {
      return (res) => {
        res.headers.set("Content-Type", "text/xml");
        res.body = body2;
        return res;
      };
    };
    var import_is_node_process3 = require_lib2();
    var import_strict_event_emitter = require_lib3();
    var import_until4 = require_lib4();
    var import_until = require_lib4();
    var getWorkerByRegistration = (registration, absoluteWorkerUrl, findWorker) => {
      const allStates = [
        registration.active,
        registration.installing,
        registration.waiting
      ];
      const existingStates = allStates.filter(Boolean);
      const mockWorker = existingStates.find((worker2) => {
        return findWorker(worker2.scriptURL, absoluteWorkerUrl);
      });
      return mockWorker || null;
    };
    function getAbsoluteWorkerUrl(relativeUrl) {
      return new URL(relativeUrl, location.origin).href;
    }
    var import_outvariant = require_lib5();
    var LIBRARY_PREFIX = "[MSW]";
    function formatMessage(message, ...positionals) {
      const interpolatedMessage = (0, import_outvariant.format)(message, ...positionals);
      return `${LIBRARY_PREFIX} ${interpolatedMessage}`;
    }
    function warn(message, ...positionals) {
      console.warn(formatMessage(message, ...positionals));
    }
    function error(message, ...positionals) {
      console.error(formatMessage(message, ...positionals));
    }
    var devUtils = {
      formatMessage,
      warn,
      error
    };
    var getWorkerInstance = async (url, options = {}, findWorker) => {
      const absoluteWorkerUrl = getAbsoluteWorkerUrl(url);
      const mockRegistrations = await navigator.serviceWorker.getRegistrations().then((registrations) => registrations.filter((registration) => getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker)));
      if (!navigator.serviceWorker.controller && mockRegistrations.length > 0) {
        location.reload();
      }
      const [existingRegistration] = mockRegistrations;
      if (existingRegistration) {
        return existingRegistration.update().then(() => {
          return [
            getWorkerByRegistration(existingRegistration, absoluteWorkerUrl, findWorker),
            existingRegistration
          ];
        });
      }
      const [error2, instance] = await (0, import_until.until)(async () => {
        const registration = await navigator.serviceWorker.register(url, options);
        return [
          getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker),
          registration
        ];
      });
      if (error2) {
        const isWorkerMissing = error2.message.includes("(404)");
        if (isWorkerMissing) {
          const scopeUrl = new URL((options == null ? void 0 : options.scope) || "/", location.href);
          throw new Error(devUtils.formatMessage(`Failed to register a Service Worker for scope ('${scopeUrl.href}') with script ('${absoluteWorkerUrl}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`));
        }
        throw new Error(devUtils.formatMessage("Failed to register the Service Worker:\n\n%s", error2.message));
      }
      return instance;
    };
    function printStartMessage(args = {}) {
      if (args.quiet) {
        return;
      }
      const message = args.message || "Mocking enabled.";
      console.groupCollapsed(`%c${devUtils.formatMessage(message)}`, "color:orangered;font-weight:bold;");
      console.log("%cDocumentation: %chttps://mswjs.io/docs", "font-weight:bold", "font-weight:normal");
      console.log("Found an issue? https://github.com/mswjs/msw/issues");
      if (args.workerUrl) {
        console.log("Worker script URL:", args.workerUrl);
      }
      if (args.workerScope) {
        console.log("Worker scope:", args.workerScope);
      }
      console.groupEnd();
    }
    async function enableMocking(context2, options) {
      var _a, _b;
      context2.workerChannel.send("MOCK_ACTIVATE");
      await context2.events.once("MOCKING_ENABLED");
      if (context2.isMockingEnabled) {
        devUtils.warn(`Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.`);
        return;
      }
      context2.isMockingEnabled = true;
      printStartMessage({
        quiet: options.quiet,
        workerScope: (_a = context2.registration) == null ? void 0 : _a.scope,
        workerUrl: (_b = context2.worker) == null ? void 0 : _b.scriptURL
      });
    }
    function createMessageChannel(event) {
      const port = event.ports[0];
      return {
        send(message) {
          if (!port) {
            return;
          }
          port.postMessage(message);
        }
      };
    }
    var NetworkError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "NetworkError";
      }
    };
    var import_interceptors2 = require_lib7();
    var import_headers_polyfill4 = require_lib();
    var cookieUtils3 = __toESM2(require_cookie());
    var import_cookies = require_lib8();
    var import_interceptors = require_lib7();
    var import_bufferUtils = require_bufferUtils();
    var import_lib = require_lib();
    var cookieUtils2 = __toESM2(require_cookie());
    function getAllCookies() {
      return cookieUtils2.parse(document.cookie);
    }
    function getRequestCookies(request) {
      if (typeof document === "undefined" || typeof location === "undefined") {
        return {};
      }
      switch (request.credentials) {
        case "same-origin": {
          return location.origin === request.url.origin ? getAllCookies() : {};
        }
        case "include": {
          return getAllCookies();
        }
        default: {
          return {};
        }
      }
    }
    var import_headers_polyfill3 = require_lib();
    function parseContentHeaders(headersString) {
      var _a, _b;
      const headers = (0, import_headers_polyfill3.stringToHeaders)(headersString);
      const contentType = headers.get("content-type") || "text/plain";
      const disposition = headers.get("content-disposition");
      if (!disposition) {
        throw new Error('"Content-Disposition" header is required.');
      }
      const directives = disposition.split(";").reduce((acc, chunk) => {
        const [name2, ...rest22] = chunk.trim().split("=");
        acc[name2] = rest22.join("=");
        return acc;
      }, {});
      const name = (_a = directives.name) == null ? void 0 : _a.slice(1, -1);
      const filename = (_b = directives.filename) == null ? void 0 : _b.slice(1, -1);
      return {
        name,
        filename,
        contentType
      };
    }
    function parseMultipartData(data2, headers) {
      const contentType = headers == null ? void 0 : headers.get("content-type");
      if (!contentType) {
        return void 0;
      }
      const [, ...directives] = contentType.split(/; */);
      const boundary = directives.filter((d) => d.startsWith("boundary=")).map((s) => s.replace(/^boundary=/, ""))[0];
      if (!boundary) {
        return void 0;
      }
      const boundaryRegExp = new RegExp(`--+${boundary}`);
      const fields = data2.split(boundaryRegExp).filter((chunk) => chunk.startsWith("\r\n") && chunk.endsWith("\r\n")).map((chunk) => chunk.trimStart().replace(/\r\n$/, ""));
      if (!fields.length) {
        return void 0;
      }
      const parsedBody = {};
      try {
        for (const field2 of fields) {
          const [contentHeaders, ...rest22] = field2.split("\r\n\r\n");
          const contentBody = rest22.join("\r\n\r\n");
          const { contentType: contentType2, filename, name } = parseContentHeaders(contentHeaders);
          const value = filename === void 0 ? contentBody : new File([contentBody], filename, { type: contentType2 });
          const parsedValue = parsedBody[name];
          if (parsedValue === void 0) {
            parsedBody[name] = value;
          } else if (Array.isArray(parsedValue)) {
            parsedBody[name] = [...parsedValue, value];
          } else {
            parsedBody[name] = [parsedValue, value];
          }
        }
        return parsedBody;
      } catch (error2) {
        return void 0;
      }
    }
    function parseBody(body2, headers) {
      var _a;
      if (!body2) {
        return body2;
      }
      const contentType = ((_a = headers == null ? void 0 : headers.get("content-type")) == null ? void 0 : _a.toLowerCase()) || "";
      const hasMultipartContent = contentType.startsWith("multipart/form-data");
      if (hasMultipartContent && typeof body2 !== "object") {
        return parseMultipartData(body2.toString(), headers) || body2;
      }
      const hasJsonContent = contentType.includes("json");
      if (hasJsonContent && typeof body2 !== "object") {
        return jsonParse(body2.toString()) || body2;
      }
      return body2;
    }
    function isStringEqual(actual, expected) {
      return actual.toLowerCase() === expected.toLowerCase();
    }
    var MockedRequest = class extends import_interceptors.IsomorphicRequest {
      constructor(input, init = {}) {
        var __super = (...args) => {
          super(...args);
        };
        if (input instanceof import_interceptors.IsomorphicRequest) {
          __super(input);
        } else {
          __super(input, init);
        }
        if (init.id) {
          this.id = init.id;
        }
        this.cache = init.cache || "default";
        this.destination = init.destination || "";
        this.integrity = init.integrity || "";
        this.keepalive = init.keepalive || false;
        this.mode = init.mode || "cors";
        this.priority = init.priority || "auto";
        this.redirect = init.redirect || "follow";
        this.referrer = init.referrer || "";
        this.referrerPolicy = init.referrerPolicy || "no-referrer";
        this.cookies = init.cookies || this.getCookies();
      }
      get body() {
        const text2 = (0, import_bufferUtils.decodeBuffer)(this["_body"]);
        const body2 = parseBody(text2, this.headers);
        if (isStringEqual(this.method, "GET") && body2 === "") {
          return void 0;
        }
        return body2;
      }
      passthrough() {
        return {
          status: 101,
          statusText: "Continue",
          headers: new import_lib.Headers(),
          body: null,
          passthrough: true,
          once: false
        };
      }
      getCookies() {
        var _a;
        const requestCookiesString = this.headers.get("cookie");
        const ownCookies = requestCookiesString ? cookieUtils3.parse(requestCookiesString) : {};
        import_cookies.store.hydrate();
        const cookiesFromStore = Array.from((_a = import_cookies.store.get(__spreadProps(__spreadValues({}, this), { url: this.url.href }))) == null ? void 0 : _a.entries()).reduce((cookies, [name, { value }]) => {
          return Object.assign(cookies, { [name.trim()]: value });
        }, {});
        const cookiesFromDocument = getRequestCookies(this);
        const forwardedCookies = __spreadValues(__spreadValues({}, cookiesFromDocument), cookiesFromStore);
        for (const [name, value] of Object.entries(forwardedCookies)) {
          this.headers.append("cookie", `${name}=${value}`);
        }
        return __spreadValues(__spreadValues({}, forwardedCookies), ownCookies);
      }
    };
    function parseWorkerRequest(rawRequest) {
      const url = new URL(rawRequest.url);
      const headers = new import_headers_polyfill4.Headers(rawRequest.headers);
      return new MockedRequest(url, __spreadProps(__spreadValues({}, rawRequest), {
        body: (0, import_interceptors2.encodeBuffer)(rawRequest.body || ""),
        headers
      }));
    }
    var import_until2 = require_lib4();
    var getResponse = async (request, handlers, resolutionContext) => {
      const relevantHandlers = handlers.filter((handler) => {
        return handler.test(request, resolutionContext);
      });
      if (relevantHandlers.length === 0) {
        return {
          handler: void 0,
          response: void 0
        };
      }
      const result = await relevantHandlers.reduce(async (executionResult, handler) => {
        const previousResults = await executionResult;
        if (!!(previousResults == null ? void 0 : previousResults.response)) {
          return executionResult;
        }
        const result2 = await handler.run(request, resolutionContext);
        if (result2 === null || result2.handler.shouldSkip) {
          return null;
        }
        if (!result2.response) {
          return {
            request: result2.request,
            handler: result2.handler,
            response: void 0,
            parsedResult: result2.parsedResult
          };
        }
        if (result2.response.once) {
          handler.markAsSkipped(true);
        }
        return result2;
      }, Promise.resolve(null));
      if (!result) {
        return {
          handler: void 0,
          response: void 0
        };
      }
      return {
        handler: result.handler,
        publicRequest: result.request,
        parsedRequest: result.parsedResult,
        response: result.response
      };
    };
    var import_js_levenshtein = __toESM2(require_js_levenshtein());
    var import_graphql = require_graphql2();
    var getPublicUrlFromRequest = (request) => {
      return request.referrer.startsWith(request.url.origin) ? request.url.pathname : new URL(request.url.pathname, `${request.url.protocol}//${request.url.host}`).href;
    };
    function parseDocumentNode(node) {
      var _a;
      const operationDef = node.definitions.find((def) => {
        return def.kind === "OperationDefinition";
      });
      return {
        operationType: operationDef == null ? void 0 : operationDef.operation,
        operationName: (_a = operationDef == null ? void 0 : operationDef.name) == null ? void 0 : _a.value
      };
    }
    function parseQuery(query) {
      try {
        const ast = (0, import_graphql.parse)(query);
        return parseDocumentNode(ast);
      } catch (error2) {
        return error2;
      }
    }
    function extractMultipartVariables(variables, map, files) {
      const operations = { variables };
      for (const [key, pathArray] of Object.entries(map)) {
        if (!(key in files)) {
          throw new Error(`Given files do not have a key '${key}' .`);
        }
        for (const dotPath of pathArray) {
          const [lastPath, ...reversedPaths] = dotPath.split(".").reverse();
          const paths = reversedPaths.reverse();
          let target = operations;
          for (const path of paths) {
            if (!(path in target)) {
              throw new Error(`Property '${paths}' is not in operations.`);
            }
            target = target[path];
          }
          target[lastPath] = files[key];
        }
      }
      return operations.variables;
    }
    function getGraphQLInput(request) {
      var _a, _b;
      switch (request.method) {
        case "GET": {
          const query = request.url.searchParams.get("query");
          const variables = request.url.searchParams.get("variables") || "";
          return {
            query,
            variables: jsonParse(variables)
          };
        }
        case "POST": {
          if ((_a = request.body) == null ? void 0 : _a.query) {
            const { query, variables } = request.body;
            return {
              query,
              variables
            };
          }
          if ((_b = request.body) == null ? void 0 : _b.operations) {
            const _c = request.body, { operations, map } = _c, files = __objRest(_c, ["operations", "map"]);
            const parsedOperations = jsonParse(operations) || {};
            if (!parsedOperations.query) {
              return null;
            }
            const parsedMap = jsonParse(map || "") || {};
            const variables = parsedOperations.variables ? extractMultipartVariables(parsedOperations.variables, parsedMap, files) : {};
            return {
              query: parsedOperations.query,
              variables
            };
          }
        }
        default:
          return null;
      }
    }
    function parseGraphQLRequest(request) {
      const input = getGraphQLInput(request);
      if (!input || !input.query) {
        return void 0;
      }
      const { query, variables } = input;
      const parsedResult = parseQuery(query);
      if (parsedResult instanceof Error) {
        const requestPublicUrl = getPublicUrlFromRequest(request);
        throw new Error(devUtils.formatMessage('Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.\n\n%s', request.method, requestPublicUrl, parsedResult.message));
      }
      return {
        operationType: parsedResult.operationType,
        operationName: parsedResult.operationName,
        variables
      };
    }
    function getStatusCodeColor(status2) {
      if (status2 < 300) {
        return "#69AB32";
      }
      if (status2 < 400) {
        return "#F0BB4B";
      }
      return "#E95F5D";
    }
    function getTimestamp() {
      const now = new Date();
      return [now.getHours(), now.getMinutes(), now.getSeconds()].map(String).map((chunk) => chunk.slice(0, 2)).map((chunk) => chunk.padStart(2, "0")).join(":");
    }
    function prepareRequest(request) {
      return __spreadProps(__spreadValues({}, request), {
        body: request.body,
        headers: request.headers.all()
      });
    }
    var import_headers_polyfill5 = require_lib();
    function prepareResponse(res) {
      const responseHeaders = (0, import_headers_polyfill5.objectToHeaders)(res.headers);
      return __spreadProps(__spreadValues({}, res), {
        body: parseBody(res.body, responseHeaders)
      });
    }
    var import_path_to_regexp = require_dist();
    var import_getCleanUrl = require_getCleanUrl();
    var REDUNDANT_CHARACTERS_EXP = /[\?|#].*$/g;
    function getSearchParams(path) {
      return new URL(`/${path}`, "http://localhost").searchParams;
    }
    function cleanUrl(path) {
      return path.replace(REDUNDANT_CHARACTERS_EXP, "");
    }
    function isAbsoluteUrl(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    }
    function getAbsoluteUrl(path, baseUrl) {
      if (isAbsoluteUrl(path)) {
        return path;
      }
      if (path.startsWith("*")) {
        return path;
      }
      const origin = baseUrl || typeof document !== "undefined" && document.baseURI;
      return origin ? decodeURI(new URL(encodeURI(path), origin).href) : path;
    }
    function normalizePath(path, baseUrl) {
      if (path instanceof RegExp) {
        return path;
      }
      const maybeAbsoluteUrl = getAbsoluteUrl(path, baseUrl);
      return cleanUrl(maybeAbsoluteUrl);
    }
    function coercePath(path) {
      return path.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g, (_, parameterName, wildcard) => {
        const expression = "(.*)";
        if (!parameterName) {
          return expression;
        }
        return parameterName.startsWith(":") ? `${parameterName}${wildcard}` : `${parameterName}${expression}`;
      }).replace(/([^\/])(:)(?=\d+)/, "$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/, "$1\\$2");
    }
    function matchRequestUrl(url, path, baseUrl) {
      const normalizedPath = normalizePath(path, baseUrl);
      const cleanPath = typeof normalizedPath === "string" ? coercePath(normalizedPath) : normalizedPath;
      const cleanUrl2 = (0, import_getCleanUrl.getCleanUrl)(url);
      const result = (0, import_path_to_regexp.match)(cleanPath, { decode: decodeURIComponent })(cleanUrl2);
      const params = result && result.params || {};
      return {
        matches: result !== false,
        params
      };
    }
    var import_headers_polyfill7 = require_lib();
    var import_headers_polyfill6 = require_lib();
    function compose(...fns) {
      return (...args) => {
        return fns.reduceRight((leftFn, rightFn) => {
          return leftFn instanceof Promise ? Promise.resolve(leftFn).then(rightFn) : rightFn(leftFn);
        }, args[0]);
      };
    }
    var defaultResponse = {
      status: 200,
      statusText: "OK",
      body: null,
      delay: 0,
      once: false,
      passthrough: false
    };
    var defaultResponseTransformers = [];
    function createResponseComposition(responseOverrides, defaultTransformers = defaultResponseTransformers) {
      return async (...transformers) => {
        const initialResponse = Object.assign({}, defaultResponse, {
          headers: new import_headers_polyfill6.Headers({
            "x-powered-by": "msw"
          })
        }, responseOverrides);
        const resolvedTransformers = [
          ...defaultTransformers,
          ...transformers
        ].filter(Boolean);
        const resolvedResponse = resolvedTransformers.length > 0 ? compose(...resolvedTransformers)(initialResponse) : initialResponse;
        return resolvedResponse;
      };
    }
    var response = Object.assign(createResponseComposition(), {
      once: createResponseComposition({ once: true }),
      networkError(message) {
        throw new NetworkError(message);
      }
    });
    var SOURCE_FRAME = /\/msw\/src\/(.+)/;
    var BUILD_FRAME = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;
    function getCallFrame(error2) {
      const stack = error2.stack;
      if (!stack) {
        return;
      }
      const frames = stack.split("\n").slice(1);
      const declarationFrame = frames.find((frame) => {
        return !(SOURCE_FRAME.test(frame) || BUILD_FRAME.test(frame));
      });
      if (!declarationFrame) {
        return;
      }
      const declarationPath = declarationFrame.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "");
      return declarationPath;
    }
    function isIterable(fn) {
      if (!fn) {
        return false;
      }
      return typeof fn[Symbol.iterator] == "function";
    }
    var defaultContext = {
      status,
      set,
      delay,
      fetch
    };
    var RequestHandler = class {
      constructor(options) {
        this.shouldSkip = false;
        this.ctx = options.ctx || defaultContext;
        this.resolver = options.resolver;
        const callFrame = getCallFrame(new Error());
        this.info = __spreadProps(__spreadValues({}, options.info), {
          callFrame
        });
      }
      parse(_request, _resolutionContext) {
        return null;
      }
      test(request, resolutionContext) {
        return this.predicate(request, this.parse(request, resolutionContext), resolutionContext);
      }
      getPublicRequest(request, _parsedResult) {
        return request;
      }
      markAsSkipped(shouldSkip = true) {
        this.shouldSkip = shouldSkip;
      }
      async run(request, resolutionContext) {
        if (this.shouldSkip) {
          return null;
        }
        const parsedResult = this.parse(request, resolutionContext);
        const shouldIntercept = this.predicate(request, parsedResult, resolutionContext);
        if (!shouldIntercept) {
          return null;
        }
        const publicRequest = this.getPublicRequest(request, parsedResult);
        const executeResolver = this.wrapResolver(this.resolver);
        const mockedResponse = await executeResolver(publicRequest, response, this.ctx);
        return this.createExecutionResult(parsedResult, publicRequest, mockedResponse);
      }
      wrapResolver(resolver) {
        return async (req, res, ctx) => {
          const result = this.resolverGenerator || await resolver(req, res, ctx);
          if (isIterable(result)) {
            const { value, done } = result[Symbol.iterator]().next();
            const nextResponse = await value;
            if (!nextResponse && done) {
              return this.resolverGeneratorResult;
            }
            if (!this.resolverGenerator) {
              this.resolverGenerator = result;
            }
            this.resolverGeneratorResult = nextResponse;
            return nextResponse;
          }
          return result;
        };
      }
      createExecutionResult(parsedResult, request, response2) {
        return {
          handler: this,
          parsedResult: parsedResult || null,
          request,
          response: response2 || null
        };
      }
    };
    var RESTMethods = ((RESTMethods2) => {
      RESTMethods2["HEAD"] = "HEAD";
      RESTMethods2["GET"] = "GET";
      RESTMethods2["POST"] = "POST";
      RESTMethods2["PUT"] = "PUT";
      RESTMethods2["PATCH"] = "PATCH";
      RESTMethods2["OPTIONS"] = "OPTIONS";
      RESTMethods2["DELETE"] = "DELETE";
      return RESTMethods2;
    })(RESTMethods || {});
    var restContext = __spreadProps(__spreadValues({}, defaultContext), {
      cookie,
      body,
      text,
      json,
      xml
    });
    var RestRequest = class extends MockedRequest {
      constructor(request, params) {
        super(request.url, __spreadProps(__spreadValues({}, request), {
          body: request["_body"]
        }));
        this.params = params;
        this.id = request.id;
      }
    };
    var RestHandler = class extends RequestHandler {
      constructor(method, path, resolver) {
        super({
          info: {
            header: `${method} ${path}`,
            path,
            method
          },
          ctx: restContext,
          resolver
        });
        this.checkRedundantQueryParameters();
      }
      checkRedundantQueryParameters() {
        const { method, path } = this.info;
        if (path instanceof RegExp) {
          return;
        }
        const url = cleanUrl(path);
        if (url === path) {
          return;
        }
        const searchParams = getSearchParams(path);
        const queryParams = [];
        searchParams.forEach((_, paramName) => {
          queryParams.push(paramName);
        });
        devUtils.warn(`Found a redundant usage of query parameters in the request handler URL for "${method} ${path}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`);
      }
      parse(request, resolutionContext) {
        return matchRequestUrl(request.url, this.info.path, resolutionContext == null ? void 0 : resolutionContext.baseUrl);
      }
      getPublicRequest(request, parsedResult) {
        return new RestRequest(request, parsedResult.params || {});
      }
      predicate(request, parsedResult) {
        const matchesMethod = this.info.method instanceof RegExp ? this.info.method.test(request.method) : isStringEqual(this.info.method, request.method);
        return matchesMethod && parsedResult.matches;
      }
      log(request, response2) {
        const publicUrl = getPublicUrlFromRequest(request);
        const loggedRequest = prepareRequest(request);
        const loggedResponse = prepareResponse(response2);
        const statusColor = getStatusCodeColor(response2.status);
        console.groupCollapsed(devUtils.formatMessage("%s %s %s (%c%s%c)"), getTimestamp(), request.method, publicUrl, `color:${statusColor}`, `${response2.status} ${response2.statusText}`, "color:inherit");
        console.log("Request", loggedRequest);
        console.log("Handler:", {
          mask: this.info.path,
          resolver: this.resolver
        });
        console.log("Response", loggedResponse);
        console.groupEnd();
      }
    };
    var import_outvariant2 = require_lib5();
    var field = (fieldName, fieldValue) => {
      return (res) => {
        validateFieldName(fieldName);
        const prevBody = jsonParse(res.body) || {};
        const nextBody = mergeRight(prevBody, { [fieldName]: fieldValue });
        return json(nextBody)(res);
      };
    };
    function validateFieldName(fieldName) {
      (0, import_outvariant2.invariant)(fieldName.trim() !== "", devUtils.formatMessage("Failed to set a custom field on a GraphQL response: field name cannot be empty."));
      (0, import_outvariant2.invariant)(fieldName !== "data", devUtils.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?', fieldName));
      (0, import_outvariant2.invariant)(fieldName !== "errors", devUtils.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?', fieldName));
      (0, import_outvariant2.invariant)(fieldName !== "extensions", devUtils.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?', fieldName));
    }
    function tryCatch(fn, onException) {
      try {
        const result = fn();
        return result;
      } catch (error2) {
        onException == null ? void 0 : onException(error2);
      }
    }
    var graphqlContext = __spreadProps(__spreadValues({}, defaultContext), {
      data,
      extensions,
      errors,
      cookie,
      field
    });
    function isDocumentNode(value) {
      if (value == null) {
        return false;
      }
      return typeof value === "object" && "kind" in value && "definitions" in value;
    }
    var GraphQLRequest = class extends MockedRequest {
      constructor(request, variables) {
        super(request.url, __spreadProps(__spreadValues({}, request), {
          body: request["_body"]
        }));
        this.variables = variables;
      }
    };
    var GraphQLHandler = class extends RequestHandler {
      constructor(operationType, operationName, endpoint, resolver) {
        let resolvedOperationName = operationName;
        if (isDocumentNode(operationName)) {
          const parsedNode = parseDocumentNode(operationName);
          if (parsedNode.operationType !== operationType) {
            throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${operationType}", but got "${parsedNode.operationType}").`);
          }
          if (!parsedNode.operationName) {
            throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with no operation name.`);
          }
          resolvedOperationName = parsedNode.operationName;
        }
        const header = operationType === "all" ? `${operationType} (origin: ${endpoint.toString()})` : `${operationType} ${resolvedOperationName} (origin: ${endpoint.toString()})`;
        super({
          info: {
            header,
            operationType,
            operationName: resolvedOperationName
          },
          ctx: graphqlContext,
          resolver
        });
        this.endpoint = endpoint;
      }
      parse(request) {
        return tryCatch(() => parseGraphQLRequest(request), (error2) => console.error(error2.message));
      }
      getPublicRequest(request, parsedResult) {
        return new GraphQLRequest(request, (parsedResult == null ? void 0 : parsedResult.variables) || {});
      }
      predicate(request, parsedResult) {
        if (!parsedResult) {
          return false;
        }
        if (!parsedResult.operationName && this.info.operationType !== "all") {
          const publicUrl = getPublicUrlFromRequest(request);
          devUtils.warn(`Failed to intercept a GraphQL request at "${request.method} ${publicUrl}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `);
          return false;
        }
        const hasMatchingUrl = matchRequestUrl(request.url, this.endpoint);
        const hasMatchingOperationType = this.info.operationType === "all" || parsedResult.operationType === this.info.operationType;
        const hasMatchingOperationName = this.info.operationName instanceof RegExp ? this.info.operationName.test(parsedResult.operationName || "") : parsedResult.operationName === this.info.operationName;
        return hasMatchingUrl.matches && hasMatchingOperationType && hasMatchingOperationName;
      }
      log(request, response2, handler, parsedRequest) {
        const loggedRequest = prepareRequest(request);
        const loggedResponse = prepareResponse(response2);
        const statusColor = getStatusCodeColor(response2.status);
        const requestInfo = (parsedRequest == null ? void 0 : parsedRequest.operationName) ? `${parsedRequest == null ? void 0 : parsedRequest.operationType} ${parsedRequest == null ? void 0 : parsedRequest.operationName}` : `anonymous ${parsedRequest == null ? void 0 : parsedRequest.operationType}`;
        console.groupCollapsed(devUtils.formatMessage("%s %s (%c%s%c)"), getTimestamp(), `${requestInfo}`, `color:${statusColor}`, `${response2.status} ${response2.statusText}`, "color:inherit");
        console.log("Request:", loggedRequest);
        console.log("Handler:", this);
        console.log("Response:", loggedResponse);
        console.groupEnd();
      }
    };
    var MAX_MATCH_SCORE = 3;
    var MAX_SUGGESTION_COUNT = 4;
    var TYPE_MATCH_DELTA = 0.5;
    function groupHandlersByType(handlers) {
      return handlers.reduce((groups, handler) => {
        if (handler instanceof RestHandler) {
          groups.rest.push(handler);
        }
        if (handler instanceof GraphQLHandler) {
          groups.graphql.push(handler);
        }
        return groups;
      }, {
        rest: [],
        graphql: []
      });
    }
    function getRestHandlerScore() {
      return (request, handler) => {
        const { path, method } = handler.info;
        if (path instanceof RegExp || method instanceof RegExp) {
          return Infinity;
        }
        const hasSameMethod = isStringEqual(request.method, method);
        const methodScoreDelta = hasSameMethod ? TYPE_MATCH_DELTA : 0;
        const requestPublicUrl = getPublicUrlFromRequest(request);
        const score = (0, import_js_levenshtein.default)(requestPublicUrl, path);
        return score - methodScoreDelta;
      };
    }
    function getGraphQLHandlerScore(parsedQuery) {
      return (_, handler) => {
        if (typeof parsedQuery.operationName === "undefined") {
          return Infinity;
        }
        const { operationType, operationName } = handler.info;
        if (typeof operationName !== "string") {
          return Infinity;
        }
        const hasSameOperationType = parsedQuery.operationType === operationType;
        const operationTypeScoreDelta = hasSameOperationType ? TYPE_MATCH_DELTA : 0;
        const score = (0, import_js_levenshtein.default)(parsedQuery.operationName, operationName);
        return score - operationTypeScoreDelta;
      };
    }
    function getSuggestedHandler(request, handlers, getScore) {
      const suggestedHandlers = handlers.reduce((suggestions, handler) => {
        const score = getScore(request, handler);
        return suggestions.concat([[score, handler]]);
      }, []).sort(([leftScore], [rightScore]) => leftScore - rightScore).filter(([score]) => score <= MAX_MATCH_SCORE).slice(0, MAX_SUGGESTION_COUNT).map(([, handler]) => handler);
      return suggestedHandlers;
    }
    function getSuggestedHandlersMessage(handlers) {
      if (handlers.length > 1) {
        return `Did you mean to request one of the following resources instead?

${handlers.map((handler) => `  \u2022 ${handler.info.header}`).join("\n")}`;
      }
      return `Did you mean to request "${handlers[0].info.header}" instead?`;
    }
    function onUnhandledRequest(request, handlers, strategy = "warn") {
      const parsedGraphQLQuery = tryCatch(() => parseGraphQLRequest(request));
      function generateHandlerSuggestion() {
        const handlerGroups = groupHandlersByType(handlers);
        const relevantHandlers = parsedGraphQLQuery ? handlerGroups.graphql : handlerGroups.rest;
        const suggestedHandlers = getSuggestedHandler(request, relevantHandlers, parsedGraphQLQuery ? getGraphQLHandlerScore(parsedGraphQLQuery) : getRestHandlerScore());
        return suggestedHandlers.length > 0 ? getSuggestedHandlersMessage(suggestedHandlers) : "";
      }
      function generateUnhandledRequestMessage() {
        const publicUrl = getPublicUrlFromRequest(request);
        const requestHeader = parsedGraphQLQuery ? `${parsedGraphQLQuery.operationType} ${parsedGraphQLQuery.operationName} (${request.method} ${publicUrl})` : `${request.method} ${publicUrl}`;
        const handlerSuggestion = generateHandlerSuggestion();
        const messageTemplate = [
          `captured a request without a matching request handler:`,
          `  \u2022 ${requestHeader}`,
          handlerSuggestion,
          `If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`
        ].filter(Boolean);
        return messageTemplate.join("\n\n");
      }
      function applyStrategy(strategy2) {
        const message = generateUnhandledRequestMessage();
        switch (strategy2) {
          case "error": {
            devUtils.error("Error: %s", message);
            throw new Error(devUtils.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'));
          }
          case "warn": {
            devUtils.warn("Warning: %s", message);
            break;
          }
          case "bypass":
            break;
          default:
            throw new Error(devUtils.formatMessage('Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.', strategy2));
        }
      }
      if (typeof strategy === "function") {
        strategy(request, {
          warning: applyStrategy.bind(null, "warn"),
          error: applyStrategy.bind(null, "error")
        });
        return;
      }
      applyStrategy(strategy);
    }
    var import_cookies2 = require_lib8();
    function readResponseCookies(request, response2) {
      import_cookies2.store.add(__spreadProps(__spreadValues({}, request), { url: request.url.toString() }), response2);
      import_cookies2.store.persist();
    }
    async function handleRequest(request, handlers, options, emitter, handleRequestOptions) {
      var _a, _b, _c, _d, _e, _f, _g;
      emitter.emit("request:start", request);
      if (request.headers.get("x-msw-bypass") === "true") {
        emitter.emit("request:end", request);
        (_a = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _a.call(handleRequestOptions, request);
        return;
      }
      const [lookupError, lookupResult] = await (0, import_until2.until)(() => {
        return getResponse(request, handlers, handleRequestOptions == null ? void 0 : handleRequestOptions.resolutionContext);
      });
      if (lookupError) {
        emitter.emit("unhandledException", lookupError, request);
        throw lookupError;
      }
      const { handler, response: response2 } = lookupResult;
      if (!handler) {
        onUnhandledRequest(request, handlers, options.onUnhandledRequest);
        emitter.emit("request:unhandled", request);
        emitter.emit("request:end", request);
        (_b = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _b.call(handleRequestOptions, request);
        return;
      }
      if (!response2) {
        devUtils.warn(`Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.

  \u2022 %s
    %s`, response2, handler.info.header, handler.info.callFrame);
        emitter.emit("request:end", request);
        (_c = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _c.call(handleRequestOptions, request);
        return;
      }
      if (response2.passthrough) {
        emitter.emit("request:end", request);
        (_d = handleRequestOptions == null ? void 0 : handleRequestOptions.onPassthroughResponse) == null ? void 0 : _d.call(handleRequestOptions, request);
        return;
      }
      readResponseCookies(request, response2);
      emitter.emit("request:match", request);
      const requiredLookupResult = lookupResult;
      const transformedResponse = ((_e = handleRequestOptions == null ? void 0 : handleRequestOptions.transformResponse) == null ? void 0 : _e.call(handleRequestOptions, response2)) || response2;
      (_f = handleRequestOptions == null ? void 0 : handleRequestOptions.onMockedResponse) == null ? void 0 : _f.call(handleRequestOptions, transformedResponse, requiredLookupResult);
      (_g = handleRequestOptions == null ? void 0 : handleRequestOptions.onMockedResponseSent) == null ? void 0 : _g.call(handleRequestOptions, transformedResponse, requiredLookupResult);
      emitter.emit("request:end", request);
      return transformedResponse;
    }
    var import_outvariant3 = require_lib5();
    async function streamResponse(operationChannel, messageChannel, mockedResponse) {
      const response2 = new Response(mockedResponse.body, mockedResponse);
      delete mockedResponse.body;
      messageChannel.send({
        type: "MOCK_RESPONSE_START",
        payload: mockedResponse
      });
      (0, import_outvariant3.invariant)(response2.body, "Failed to stream mocked response with no body");
      const reader = response2.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (!done) {
          operationChannel.postMessage({
            type: "MOCK_RESPONSE_CHUNK",
            payload: value
          });
          continue;
        }
        operationChannel.postMessage({
          type: "MOCK_RESPONSE_END"
        });
        operationChannel.close();
        reader.releaseLock();
        break;
      }
    }
    var ParentClass = typeof BroadcastChannel == "undefined" ? class UnsupportedEnvironment {
      constructor() {
        throw new Error("Cannot construct BroadcastChannel in a non-browser environment");
      }
    } : BroadcastChannel;
    var StrictBroadcastChannel = class extends ParentClass {
      postMessage(message) {
        return super.postMessage(message);
      }
    };
    var createRequestListener = (context2, options) => {
      return async (event, message) => {
        const messageChannel = createMessageChannel(event);
        try {
          const request = parseWorkerRequest(message.payload);
          const operationChannel = new StrictBroadcastChannel(`msw-response-stream-${request.id}`);
          await handleRequest(request, context2.requestHandlers, options, context2.emitter, {
            transformResponse,
            onPassthroughResponse() {
              return messageChannel.send({
                type: "MOCK_NOT_FOUND"
              });
            },
            onMockedResponse(response2) {
              if (response2.body == null) {
                return messageChannel.send({
                  type: "MOCK_RESPONSE",
                  payload: response2
                });
              }
              streamResponse(operationChannel, messageChannel, response2);
            },
            onMockedResponseSent(response2, { handler, publicRequest, parsedRequest }) {
              if (options.quiet) {
                return;
              }
              handler.log(publicRequest, response2, handler, parsedRequest);
            }
          });
        } catch (error2) {
          if (error2 instanceof NetworkError) {
            return messageChannel.send({
              type: "NETWORK_ERROR",
              payload: {
                name: error2.name,
                message: error2.message
              }
            });
          }
          if (error2 instanceof Error) {
            messageChannel.send({
              type: "INTERNAL_ERROR",
              payload: {
                status: 500,
                body: JSON.stringify({
                  errorType: error2.constructor.name,
                  message: error2.message,
                  location: error2.stack
                })
              }
            });
          }
        }
      };
    };
    function transformResponse(response2) {
      return {
        status: response2.status,
        statusText: response2.statusText,
        headers: response2.headers.all(),
        body: response2.body,
        delay: response2.delay
      };
    }
    async function requestIntegrityCheck(context2, serviceWorker) {
      context2.workerChannel.send("INTEGRITY_CHECK_REQUEST");
      const { payload: actualChecksum } = await context2.events.once("INTEGRITY_CHECK_RESPONSE");
      if (actualChecksum !== "df0d85222361310ecbe1792c606e08f2") {
        throw new Error(`Currently active Service Worker (${actualChecksum}) is behind the latest published one (${"df0d85222361310ecbe1792c606e08f2"}).`);
      }
      return serviceWorker;
    }
    var import_until3 = require_lib4();
    function deferNetworkRequestsUntil(predicatePromise) {
      const originalXhrSend = window.XMLHttpRequest.prototype.send;
      window.XMLHttpRequest.prototype.send = function(...args) {
        (0, import_until3.until)(() => predicatePromise).then(() => {
          window.XMLHttpRequest.prototype.send = originalXhrSend;
          this.send(...args);
        });
      };
      const originalFetch = window.fetch;
      window.fetch = async (...args) => {
        await (0, import_until3.until)(() => predicatePromise);
        window.fetch = originalFetch;
        return window.fetch(...args);
      };
    }
    function createResponseListener(context2) {
      return (_, message) => {
        var _a;
        const { payload: responseJson } = message;
        if ((_a = responseJson.type) == null ? void 0 : _a.includes("opaque")) {
          return;
        }
        const response2 = new Response(responseJson.body || null, responseJson);
        const isMockedResponse = response2.headers.get("x-powered-by") === "msw";
        if (isMockedResponse) {
          context2.emitter.emit("response:mocked", response2, responseJson.requestId);
        } else {
          context2.emitter.emit("response:bypass", response2, responseJson.requestId);
        }
      };
    }
    function validateWorkerScope(registration, options) {
      if (!(options == null ? void 0 : options.quiet) && !location.href.startsWith(registration.scope)) {
        devUtils.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${registration.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`);
      }
    }
    var createStartHandler = (context2) => {
      return function start(options, customOptions) {
        const startWorkerInstance = async () => {
          context2.events.removeAllListeners();
          context2.workerChannel.on("REQUEST", createRequestListener(context2, options));
          context2.workerChannel.on("RESPONSE", createResponseListener(context2));
          const instance = await getWorkerInstance(options.serviceWorker.url, options.serviceWorker.options, options.findWorker);
          const [worker2, registration] = instance;
          if (!worker2) {
            const missingWorkerMessage = (customOptions == null ? void 0 : customOptions.findWorker) ? devUtils.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`, options.serviceWorker.url) : devUtils.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`, options.serviceWorker.url, location.host);
            throw new Error(missingWorkerMessage);
          }
          context2.worker = worker2;
          context2.registration = registration;
          context2.events.addListener(window, "beforeunload", () => {
            if (worker2.state !== "redundant") {
              context2.workerChannel.send("CLIENT_CLOSED");
            }
            window.clearInterval(context2.keepAliveInterval);
          });
          const [integrityError] = await (0, import_until4.until)(() => requestIntegrityCheck(context2, worker2));
          if (integrityError) {
            devUtils.error(`Detected outdated Service Worker: ${integrityError.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues      `);
          }
          context2.keepAliveInterval = window.setInterval(() => context2.workerChannel.send("KEEPALIVE_REQUEST"), 5e3);
          validateWorkerScope(registration, context2.startOptions);
          return registration;
        };
        const workerRegistration = startWorkerInstance().then(async (registration) => {
          const pendingInstance = registration.installing || registration.waiting;
          if (pendingInstance) {
            await new Promise((resolve) => {
              pendingInstance.addEventListener("statechange", () => {
                if (pendingInstance.state === "activated") {
                  return resolve();
                }
              });
            });
          }
          await enableMocking(context2, options).catch((error2) => {
            throw new Error(`Failed to enable mocking: ${error2 == null ? void 0 : error2.message}`);
          });
          return registration;
        });
        if (options.waitUntilReady) {
          deferNetworkRequestsUntil(workerRegistration);
        }
        return workerRegistration;
      };
    };
    function printStopMessage(args = {}) {
      if (args.quiet) {
        return;
      }
      console.log(`%c${devUtils.formatMessage("Mocking disabled.")}`, "color:orangered;font-weight:bold;");
    }
    var createStop = (context2) => {
      return function stop() {
        var _a;
        if (!context2.isMockingEnabled) {
          devUtils.warn('Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.');
          return;
        }
        context2.workerChannel.send("MOCK_DEACTIVATE");
        context2.isMockingEnabled = false;
        window.clearInterval(context2.keepAliveInterval);
        printStopMessage({ quiet: (_a = context2.startOptions) == null ? void 0 : _a.quiet });
      };
    };
    function use(currentHandlers, ...handlers) {
      currentHandlers.unshift(...handlers);
    }
    function restoreHandlers(handlers) {
      handlers.forEach((handler) => {
        handler.markAsSkipped(false);
      });
    }
    function resetHandlers(initialHandlers, ...nextHandlers) {
      return nextHandlers.length > 0 ? [...nextHandlers] : [...initialHandlers];
    }
    var DEFAULT_START_OPTIONS = {
      serviceWorker: {
        url: "/mockServiceWorker.js",
        options: null
      },
      quiet: false,
      waitUntilReady: true,
      onUnhandledRequest: "warn",
      findWorker(scriptURL, mockServiceWorkerUrl) {
        return scriptURL === mockServiceWorkerUrl;
      }
    };
    function resolveStartOptions(initialOptions) {
      return mergeRight(DEFAULT_START_OPTIONS, initialOptions || {});
    }
    function prepareStartHandler(handler, context2) {
      return (initialOptions) => {
        context2.startOptions = resolveStartOptions(initialOptions);
        return handler(context2.startOptions, initialOptions || {});
      };
    }
    var import_interceptors3 = require_lib7();
    var import_fetch3 = require_fetch();
    var import_XMLHttpRequest = require_XMLHttpRequest();
    function createFallbackRequestListener(context2, options) {
      const interceptor = new import_interceptors3.BatchInterceptor({
        name: "fallback",
        interceptors: [new import_fetch3.FetchInterceptor(), new import_XMLHttpRequest.XMLHttpRequestInterceptor()]
      });
      interceptor.on("request", async (request) => {
        const mockedRequest = new MockedRequest(request);
        const response2 = await handleRequest(mockedRequest, context2.requestHandlers, options, context2.emitter, {
          transformResponse(response3) {
            return {
              status: response3.status,
              statusText: response3.statusText,
              headers: response3.headers.all(),
              body: response3.body,
              delay: response3.delay
            };
          },
          onMockedResponseSent(response3, { handler, publicRequest, parsedRequest }) {
            if (!options.quiet) {
              handler.log(publicRequest, response3, handler, parsedRequest);
            }
          }
        });
        if (response2) {
          request.respondWith(response2);
        }
      });
      interceptor.apply();
      return interceptor;
    }
    function createFallbackStart(context2) {
      return async function start(options) {
        context2.fallbackInterceptor = createFallbackRequestListener(context2, options);
        printStartMessage({
          message: "Mocking enabled (fallback mode).",
          quiet: options.quiet
        });
        return void 0;
      };
    }
    function createFallbackStop(context2) {
      return function stop() {
        var _a, _b;
        (_a = context2.fallbackInterceptor) == null ? void 0 : _a.dispose();
        printStopMessage({ quiet: (_b = context2.startOptions) == null ? void 0 : _b.quiet });
      };
    }
    function pipeEvents(source, destination) {
      const rawEmit = source.emit;
      if (rawEmit._isPiped) {
        return;
      }
      source.emit = function(event, ...data2) {
        destination.emit(event, ...data2);
        return rawEmit.call(this, event, ...data2);
      };
      source.emit._isPiped = true;
    }
    var listeners = [];
    function setupWorker2(...requestHandlers) {
      requestHandlers.forEach((handler) => {
        if (Array.isArray(handler))
          throw new Error(devUtils.formatMessage('Failed to call "setupWorker" given an Array of request handlers (setupWorker([a, b])), expected to receive each handler individually: setupWorker(a, b).'));
      });
      if ((0, import_is_node_process3.isNodeProcess)()) {
        throw new Error(devUtils.formatMessage("Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."));
      }
      const emitter = new import_strict_event_emitter.StrictEventEmitter();
      const publicEmitter = new import_strict_event_emitter.StrictEventEmitter();
      pipeEvents(emitter, publicEmitter);
      const context2 = {
        isMockingEnabled: false,
        startOptions: void 0,
        worker: null,
        registration: null,
        requestHandlers: [...requestHandlers],
        emitter,
        workerChannel: {
          on(eventType, callback) {
            context2.events.addListener(navigator.serviceWorker, "message", (event) => {
              if (event.source !== context2.worker) {
                return;
              }
              const message = event.data;
              if (!message) {
                return;
              }
              if (message.type === eventType) {
                callback(event, message);
              }
            });
          },
          send(type) {
            var _a;
            (_a = context2.worker) == null ? void 0 : _a.postMessage(type);
          }
        },
        events: {
          addListener(target, eventType, callback) {
            target.addEventListener(eventType, callback);
            listeners.push({ eventType, target, callback });
            return () => {
              target.removeEventListener(eventType, callback);
            };
          },
          removeAllListeners() {
            for (const { target, eventType, callback } of listeners) {
              target.removeEventListener(eventType, callback);
            }
            listeners = [];
          },
          once(eventType) {
            const bindings = [];
            return new Promise((resolve, reject) => {
              const handleIncomingMessage = (event) => {
                try {
                  const message = event.data;
                  if (message.type === eventType) {
                    resolve(message);
                  }
                } catch (error2) {
                  reject(error2);
                }
              };
              bindings.push(context2.events.addListener(navigator.serviceWorker, "message", handleIncomingMessage), context2.events.addListener(navigator.serviceWorker, "messageerror", reject));
            }).finally(() => {
              bindings.forEach((unbind) => unbind());
            });
          }
        },
        useFallbackMode: !("serviceWorker" in navigator) || location.protocol === "file:"
      };
      const startHandler = context2.useFallbackMode ? createFallbackStart(context2) : createStartHandler(context2);
      const stopHandler = context2.useFallbackMode ? createFallbackStop(context2) : createStop(context2);
      return {
        start: prepareStartHandler(startHandler, context2),
        stop() {
          context2.events.removeAllListeners();
          context2.emitter.removeAllListeners();
          publicEmitter.removeAllListeners();
          stopHandler();
        },
        use(...handlers) {
          use(context2.requestHandlers, ...handlers);
        },
        restoreHandlers() {
          restoreHandlers(context2.requestHandlers);
        },
        resetHandlers(...nextHandlers) {
          context2.requestHandlers = resetHandlers(requestHandlers, ...nextHandlers);
        },
        printHandlers() {
          context2.requestHandlers.forEach((handler) => {
            const { header, callFrame } = handler.info;
            const pragma = handler.info.hasOwnProperty("operationType") ? "[graphql]" : "[rest]";
            console.groupCollapsed(`${pragma} ${header}`);
            if (callFrame) {
              console.log(`Declaration: ${callFrame}`);
            }
            console.log("Handler:", handler);
            if (handler instanceof RestHandler) {
              console.log("Match:", `https://mswjs.io/repl?path=${handler.info.path}`);
            }
            console.groupEnd();
          });
        },
        events: {
          on(...args) {
            return publicEmitter.on(...args);
          },
          removeListener(...args) {
            return publicEmitter.removeListener(...args);
          },
          removeAllListeners(...args) {
            return publicEmitter.removeAllListeners(...args);
          }
        }
      };
    }
    function createRestHandler(method) {
      return (path, resolver) => {
        return new RestHandler(method, path, resolver);
      };
    }
    var rest2 = {
      all: createRestHandler(/.+/),
      head: createRestHandler("HEAD"),
      get: createRestHandler("GET"),
      post: createRestHandler("POST"),
      put: createRestHandler("PUT"),
      delete: createRestHandler("DELETE"),
      patch: createRestHandler("PATCH"),
      options: createRestHandler("OPTIONS")
    };
    var import_graphql2 = require_graphql2();
    function createScopedGraphQLHandler(operationType, url) {
      return (operationName, resolver) => {
        return new GraphQLHandler(operationType, operationName, url, resolver);
      };
    }
    function createGraphQLOperationHandler(url) {
      return (resolver) => {
        return new GraphQLHandler("all", new RegExp(".*"), url, resolver);
      };
    }
    var standardGraphQLHandlers = {
      operation: createGraphQLOperationHandler("*"),
      query: createScopedGraphQLHandler(import_graphql2.OperationTypeNode.QUERY, "*"),
      mutation: createScopedGraphQLHandler(import_graphql2.OperationTypeNode.MUTATION, "*")
    };
    function createGraphQLLink(url) {
      return {
        operation: createGraphQLOperationHandler(url),
        query: createScopedGraphQLHandler(import_graphql2.OperationTypeNode.QUERY, url),
        mutation: createScopedGraphQLHandler(import_graphql2.OperationTypeNode.MUTATION, url)
      };
    }
    var graphql = __spreadProps(__spreadValues({}, standardGraphQLHandlers), {
      link: createGraphQLLink
    });
  }
});

// ../../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/lodash/isObject.js"(exports, module) {
    init_define_process();
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
    init_define_process();
    var freeGlobal = typeof self == "object" && self && self.Object === Object && self;
    module.exports = freeGlobal;
  }
});

// ../../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/lodash/_root.js"(exports, module) {
    init_define_process();
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../../node_modules/lodash/now.js
var require_now = __commonJS({
  "../../node_modules/lodash/now.js"(exports, module) {
    init_define_process();
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// ../../node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../../node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    init_define_process();
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// ../../node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../../node_modules/lodash/_baseTrim.js"(exports, module) {
    init_define_process();
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/lodash/_Symbol.js"(exports, module) {
    init_define_process();
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/lodash/_getRawTag.js"(exports, module) {
    init_define_process();
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/lodash/_objectToString.js"(exports, module) {
    init_define_process();
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
    init_define_process();
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike2 = __commonJS({
  "../../node_modules/lodash/isObjectLike.js"(exports, module) {
    init_define_process();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../../node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/lodash/isSymbol.js"(exports, module) {
    init_define_process();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike2();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../../node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../../node_modules/lodash/toNumber.js"(exports, module) {
    init_define_process();
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// ../../node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "../../node_modules/lodash/debounce.js"(exports, module) {
    init_define_process();
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce2;
  }
});

// js/ws.ts
init_define_process();
var import_msw = __toESM(require_lib10(), 1);
var import_debounce = __toESM(require_debounce(), 1);

// js/uidV4.mjs
init_define_process();
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var __default = /^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|0{8}-(?:0{4}-){3}0{12})$/i;
function validate(uuid) {
  return typeof uuid === "string" && __default.test(uuid);
}
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function stringify(array) {
  const offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const uuid = (byteToHex[array[offset + 0]] + byteToHex[array[offset + 1]] + byteToHex[array[offset + 2]] + byteToHex[array[offset + 3]] + "-" + byteToHex[array[offset + 4]] + byteToHex[array[offset + 5]] + "-" + byteToHex[array[offset + 6]] + byteToHex[array[offset + 7]] + "-" + byteToHex[array[offset + 8]] + byteToHex[array[offset + 9]] + "-" + byteToHex[array[offset + 10]] + byteToHex[array[offset + 11]] + byteToHex[array[offset + 12]] + byteToHex[array[offset + 13]] + byteToHex[array[offset + 14]] + byteToHex[array[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw new TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i1 = 0; i1 < 16; ++i1) {
      buf[offset + i1] = rnds[i1];
    }
    return buf;
  }
  return stringify(rnds);
}

// js/ws.ts
var worker = (0, import_msw.setupWorker)(import_msw.rest.get("https://github.com/octocat", (req, res, ctx) => {
  console.log({ req });
  return res(ctx.delay(1500), ctx.status(202, "Mocked status"), ctx.json({
    message: "Mocked response JSON body"
  }));
}));
worker.start();
var webRtcArray = [];
var user = (self && self.crypto && self.crypto.randomUUID && self.crypto.randomUUID() || v4()).slice(0, 8);
var rtcConns = {};
var bc;
var codeSpace;
var address;
var wsLastHashCode = 0;
var webRTCLastSeenHashCode = 0;
var lastSeenTimestamp = 0;
var lastSeenNow = 0;
var ws = null;
var sendWS;
var rejoined = false;
var sendChannel = {
  webRtcArray,
  rtcConns,
  send: (data) => {
    const target = data.target;
    const messageString = JSON.stringify({
      ...data,
      name: data.name || user
    });
    webRtcArray.map((ch) => {
      try {
        console.log("WebRtc send", data, ch);
        if (ch.readyState !== "open")
          return;
        if (!target || ch.target === target && !ignoreUsers.includes(ch.target)) {
          ch.send(messageString);
        }
      } catch (e) {
        console.error("Error in broadcasting event", { e });
      }
    });
  }
};
async function quickStart(codeSpace2) {
  const { renderPreviewWindow } = await import("./WLVP4ANY.mjs");
  return renderPreviewWindow(codeSpace2);
}
var run = async (startState) => {
  codeSpace = startState.codeSpace;
  address = startState.address;
  const { assets } = startState;
  startSession(codeSpace, {
    name: user,
    state: startState.mST
  }, "");
  initShims(assets);
  quickStart(codeSpace);
  join();
  bc = new BroadcastChannel("spike.land");
  bc.onmessage = async (event) => {
    if (event.data.ignoreUser && event.data.ignoreUser === user)
      return;
    console.log({ event });
    if (event.data.codeSpace === codeSpace && event.data.address && !address) {
      ws?.send(JSON.stringify({ codeSpace, address: event.data.address }));
    }
    if (event.data.ignoreUser) {
      !ignoreUsers.includes(event.data.ignoreUser) && ignoreUsers.push(event.data.ignoreUser);
    }
    if (event.data.codeSpace === codeSpace && event.data.sess.code !== mST().code) {
      const messageData = await makePatch(event.data.sess);
      await applyPatch(messageData);
    }
  };
};
(async () => {
  if (navigator && navigator?.serviceWorker) {
    navigator.serviceWorker.register("/sw.js", {
      scope: "/"
    });
    const current = await navigator.serviceWorker.ready;
    await sw();
    Promise.all((await navigator.serviceWorker.getRegistrations()).map((sw2) => {
      if (current !== sw2)
        sw2.unregister();
    }));
  }
})();
var intervalHandler = null;
async function rejoin() {
  if (!rejoined || ws === null) {
    ws = null;
    const newWs = await join();
    return newWs;
  }
  return ws;
}
var ignoreUsers = [];
async function saveCode(sess) {
  if (sess.i <= mST().i)
    return;
  console.log("creating a patch");
  const messageData = await makePatch(sess);
  console.log("applying the patch");
  await applyPatch(messageData);
  console.log("done");
  if (sess.i !== mST().i)
    return;
  bc.postMessage({ ignoreUser: user, sess, codeSpace, address, messageData });
  try {
    (async () => {
      if (Object.keys(rtcConns).length == 0)
        return;
      try {
        const message = webRTCLastSeenHashCode ? await makePatchFrom(webRTCLastSeenHashCode, sess) : await makePatch(sess);
        if (message && message.patch) {
          console.log("sendRTC");
          sendChannel.send(message);
        }
      } catch (e) {
        console.error("Error sending RTC...", { e });
      }
    })();
  } catch (e) {
    console.log("Error 1");
  }
  try {
    (async () => {
      if (ws) {
        console.log({ wsLastHashCode });
        const message = await makePatchFrom(wsLastHashCode, sess);
        if (!message)
          return;
        if (message.newHash !== hashCode()) {
          console.error("NEW hash is not even hashCode", hashCode());
          return;
        }
        const messageString = JSON.stringify({ ...message, name: user });
        sendWS(messageString);
      } else {
        rejoined = false;
        await rejoin();
      }
    })();
  } catch (e) {
    console.error("error 2", { e });
  }
}
async function join() {
  if (ws !== null)
    return ws;
  rejoined = true;
  console.log("WS connect!");
  const wsConnection = new WebSocket(`wss://${location.host}/live/` + codeSpace + "/websocket");
  rejoined = false;
  wsConnection.addEventListener("open", () => {
    console.log("NEW WS CONNECTION");
    ws = wsConnection;
    const mess = (data) => {
      try {
        ws && ws?.send && ws?.send(data);
      } catch (e) {
        ws = null;
        rejoined = false;
        rejoin();
      }
    };
    sendWS = (0, import_debounce.default)(mess, 500, {
      maxWait: 1200,
      leading: true,
      trailing: true
    });
    ws.addEventListener("message", (message) => processWsMessage(message, "ws"));
    if (intervalHandler) {
      clearInterval(intervalHandler);
    }
    intervalHandler = setInterval(() => {
      const now = Date.now();
      const diff = now - lastSeenNow;
      if (diff > 4e4) {
        try {
          if (wsConnection.readyState === wsConnection.OPEN) {
            return wsConnection?.send(JSON.stringify({
              name: user,
              timestamp: lastSeenTimestamp + diff
            }));
          }
          rejoined = false;
          rejoin();
        } catch {
          rejoined = false;
          rejoin();
        }
      }
    }, 3e4);
    wsConnection.send(JSON.stringify({ name: user }));
    return wsConnection;
  });
  return wsConnection;
}
var h = {};
async function processWsMessage(event, source) {
  if (ws == null)
    return;
  lastSeenNow = Date.now();
  const data = JSON.parse(event.data);
  console.log("ws", data.name, data.oldHash, data.newHash);
  if (source === "ws" && data.timestamp) {
    lastSeenNow = Date.now();
    lastSeenTimestamp = data.timestamp;
  }
  if (source === "ws" && (data.hashCode || data.newHash)) {
    wsLastHashCode = data.hashCode || data.newHash;
  }
  if (source === "rtc" && data.hashCode || data.newHash) {
    webRTCLastSeenHashCode = data.hashCode || data.newHash;
  }
  if (ignoreUsers.includes(data.name))
    return;
  if (data.newHash === hashCode())
    return;
  if (data.oldHash && data.newHash) {
    if (h[data.oldHash] && h[data.oldHash] === data.newHash)
      return;
    h[data.oldHash] = data.newHash;
  }
  if (data.newHash === hashCode())
    return;
  (async () => {
    try {
      if (data.type === "new-ice-candidate") {
        await handleNewICECandidateMessage(data.candidate, data.name);
        return;
      }
      if (data.type === "offer") {
        await handleChatOffer(data.offer, data.name);
        return;
      }
      if (data.type === "answer") {
        await handleChatAnswerMessage(data.answer, data.name);
        return;
      }
      if (data.name && data.name !== user && !rtcConns[data.name]) {
        await createPeerConnection(data.name);
        return;
      }
    } catch (error) {
      console.log({ e: error });
      log_error("Error with p2p");
    }
  })();
  if (data.patch && data.name !== user) {
    if (data.newHash === hashCode()) {
      return;
    }
    await applyPatch(data);
    if (data.newHash === hashCode()) {
      if (sendChannel) {
        sendChannel.send({ hashCode: data.newHash });
      }
      return;
    } else {
      console.log("error -sending on sendChannel");
    }
    return;
  }
  if (data.name === user) {
    return;
  }
  function createPeerConnection(target) {
    log(`Setting up a connection with ${target}`);
    if (rtcConns[target]) {
      log(`Aborting, since we have connection with this ${target}`);
      return;
    }
    rtcConns[target] = new RTCPeerConnection(rcpOptions);
    rtcConns[target].onicecandidate = (event2) => {
      if (event2.candidate) {
        log("*** Outgoing ICE candidate: " + event2.candidate);
        ws?.send(JSON.stringify({
          type: "new-ice-candidate",
          target,
          name: user,
          candidate: event2.candidate.toJSON()
        }));
      }
    };
    rtcConns[target].oniceconnectionstatechange = handleICEConnectionStateChangeEvent;
    rtcConns[target].onicegatheringstatechange = handleICEGatheringStateChangeEvent;
    rtcConns[target].onsignalingstatechange = () => {
      log("*** rtcConns[target].signalingState  changed to: " + rtcConns[target].signalingState);
      switch (rtcConns[target].signalingState) {
        case "closed":
          break;
      }
    };
    rtcConns[target].onnegotiationneeded = handleNegotiationNeededEvent;
    rtcConns[target].ontrack = (ev) => console.log(ev);
    rtcConns[target].ondatachannel = (event2) => {
      console.log("Receive Channel Callback");
      const rtc2 = event2.channel;
      rtc2.binaryType = "arraybuffer";
      rtc2.addEventListener("close", onReceiveChannelClosed);
      rtc2.addEventListener("message", (message) => processWsMessage(message, "rtc"));
      const rtcWithTarget = Object.assign(rtc2, { target });
      webRtcArray.push(rtcWithTarget);
    };
    const dataChannelOptions = {
      ordered: true,
      reliable: true,
      maxPacketLifeTime: 3e3
    };
    const rtc = Object.assign(rtcConns[target].createDataChannel(target, dataChannelOptions), { target });
    rtc.binaryType = "arraybuffer";
    rtc.addEventListener("message", (message) => {
      console.log("***********RTC***", { msg: message });
      const data2 = JSON.parse(message.data);
      if (data2 && data2.hashCode) {
        webRTCLastSeenHashCode = data2.hashCode;
      }
      if (data2 && data2.newHash) {
        webRTCLastSeenHashCode = data2.newHash;
      }
      return processWsMessage(message, "rtc");
    });
    rtc.addEventListener("error", (error) => {
      console.log("xxxxxx-  Data Channel Error:", error);
    });
    rtc.addEventListener("open", () => {
      console.log("@@@@@@@@RTC IS OPEN&&&&&&&&");
      webRtcArray.push(rtc);
    });
    rtc.addEventListener("close", () => {
      console.log("xxxxxxxx- The Data Channel is Closed");
    });
    return rtcConns[target];
    function onReceiveChannelClosed() {
      console.log("Receive channel is closed");
      rtcConns[target].close();
      delete rtcConns[target];
      console.log("Closed remote peer connection");
    }
    async function handleNegotiationNeededEvent() {
      log("*** Negotiation needed");
      try {
        log("---> Creating offer");
        const offer = await rtcConns[target].createOffer();
        if (rtcConns[target].signalingState != "stable") {
          log("The connection isn't stable yet; postponing...");
          return;
        }
        log("---> Setting local description to the offer");
        await rtcConns[target].setLocalDescription(offer);
        log("---> Sending the offer to the remote peer");
        ws?.send(JSON.stringify({
          target,
          name: user,
          type: "offer",
          offer: rtcConns[target].localDescription
        }));
      } catch {
        log("*** The following error occurred while handling the negotiationneeded event:");
      }
    }
    function handleICEConnectionStateChangeEvent() {
      log("*** ICE connection state changed to " + rtcConns[target].iceConnectionState);
      switch (rtcConns[target].iceConnectionState) {
        case "closed":
        case "failed":
        case "disconnected":
          break;
      }
    }
    function handleICEGatheringStateChangeEvent() {
      log("*** rtcConns[target].iceGatheringState changed to: " + rtcConns[target].iceGatheringState);
    }
  }
  async function handleChatAnswerMessage(answer, target) {
    log("*** Call recipient has accepted our call");
    await rtcConns[target].setRemoteDescription(new RTCSessionDescription(answer)).catch(console.error);
  }
  async function handleChatOffer(offer, target) {
    if (!rtcConns[target])
      createPeerConnection(target);
    await rtcConns[target].setRemoteDescription(new RTCSessionDescription(offer));
    log("---> Creating and sending answer to caller");
    const answer = await rtcConns[target].createAnswer();
    await rtcConns[target].setLocalDescription(answer);
    ws?.send(JSON.stringify({
      target,
      name: user,
      type: "answer",
      answer
    }));
  }
}
function log(text) {
  const time = new Date();
  console.log("[" + time.toLocaleTimeString() + "] " + text);
}
function log_error(text) {
  const time = new Date();
  console.trace("[" + time.toLocaleTimeString() + "] " + text);
}
var rcpOptions = {
  iceServers: ["stun3.l.google.com:19302"].map((url) => ({
    urls: `stun:${url}`
  }))
};
rcpOptions.iceServers = [{ urls: "stun:stun.stunprotocol.org:3478" }, {
  urls: "stun:stun.l.google.com:19302"
}];
async function handleNewICECandidateMessage(init, target) {
  log("*** Adding received ICE candidate: " + JSON.stringify(init));
  const candidate = new RTCIceCandidate(init);
  console.log(rtcConns[target]);
  await rtcConns[target].addIceCandidate(candidate);
}
async function sw() {
  try {
    navigator.serviceWorker.onmessage = async (event) => {
      const serviceWorker = event.source;
      if (serviceWorker == null)
        return;
      switch (event.data.method) {
        case "ipfs-message-port":
          console.log("Message port request");
          const { connect } = await import("./JDJFDH52.mjs");
          console.log("can connect trough", { connect });
          const channel = new MessageChannel();
          await connect(channel);
          console.log({ channel });
          return serviceWorker.postMessage({
            method: "ipfs-message-port",
            id: event.data.id,
            port: channel.port2
          }, { transfer: [channel.port2] });
      }
    };
    if (document.documentElement.dataset.viewer) {
      const load = async (path) => {
        const paths = path && path.split("/") || [];
        const protocol = paths[0] || "";
        switch (protocol) {
          case "ipfs":
          case "ipns": {
            document.body.innerHTML = `<iframe id="viewer" style="width:100%;height:100%;position:fixed;top:0;left:0;border:none;" src="/view${path}"></iframe>`;
          }
        }
      };
      return load(location.pathname);
    }
  } catch {
    console.log("ipfs load error");
  }
}

export {
  quickStart,
  run,
  saveCode,
  join
};
