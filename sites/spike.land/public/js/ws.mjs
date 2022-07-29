import {
  LazyMotion,
  __rest,
  domAnimation,
  domMax,
  m
} from "../chunk-I6QWJWQB.mjs";
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
  jsxs,
  keyframes,
  registerStyles,
  serializeStyles,
  withEmotionCache
} from "../chunk-WOK6NX3H.mjs";
import {
  wait
} from "../chunk-KDU57TYQ.mjs";
import {
  __commonJS,
  __toESM,
  init_define_process
} from "../chunk-CY4CZGSG.mjs";

// ../../node_modules/fast-diff/diff.js
var require_diff = __commonJS({
  "../../node_modules/fast-diff/diff.js"(exports, module) {
    init_define_process();
    var DIFF_DELETE = -1;
    var DIFF_INSERT = 1;
    var DIFF_EQUAL = 0;
    function diff_main(text1, text2, cursor_pos, _fix_unicode) {
      if (text1 === text2) {
        if (text1) {
          return [[DIFF_EQUAL, text1]];
        }
        return [];
      }
      if (cursor_pos != null) {
        var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
        if (editdiff) {
          return editdiff;
        }
      }
      var commonlength = diff_commonPrefix(text1, text2);
      var commonprefix = text1.substring(0, commonlength);
      text1 = text1.substring(commonlength);
      text2 = text2.substring(commonlength);
      commonlength = diff_commonSuffix(text1, text2);
      var commonsuffix = text1.substring(text1.length - commonlength);
      text1 = text1.substring(0, text1.length - commonlength);
      text2 = text2.substring(0, text2.length - commonlength);
      var diffs = diff_compute_(text1, text2);
      if (commonprefix) {
        diffs.unshift([DIFF_EQUAL, commonprefix]);
      }
      if (commonsuffix) {
        diffs.push([DIFF_EQUAL, commonsuffix]);
      }
      diff_cleanupMerge(diffs, _fix_unicode);
      return diffs;
    }
    function diff_compute_(text1, text2) {
      var diffs;
      if (!text1) {
        return [[DIFF_INSERT, text2]];
      }
      if (!text2) {
        return [[DIFF_DELETE, text1]];
      }
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      var i2 = longtext.indexOf(shorttext);
      if (i2 !== -1) {
        diffs = [
          [DIFF_INSERT, longtext.substring(0, i2)],
          [DIFF_EQUAL, shorttext],
          [DIFF_INSERT, longtext.substring(i2 + shorttext.length)]
        ];
        if (text1.length > text2.length) {
          diffs[0][0] = diffs[2][0] = DIFF_DELETE;
        }
        return diffs;
      }
      if (shorttext.length === 1) {
        return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
      }
      var hm = diff_halfMatch_(text1, text2);
      if (hm) {
        var text1_a = hm[0];
        var text1_b = hm[1];
        var text2_a = hm[2];
        var text2_b = hm[3];
        var mid_common = hm[4];
        var diffs_a = diff_main(text1_a, text2_a);
        var diffs_b = diff_main(text1_b, text2_b);
        return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
      }
      return diff_bisect_(text1, text2);
    }
    function diff_bisect_(text1, text2) {
      var text1_length = text1.length;
      var text2_length = text2.length;
      var max_d = Math.ceil((text1_length + text2_length) / 2);
      var v_offset = max_d;
      var v_length = 2 * max_d;
      var v1 = new Array(v_length);
      var v2 = new Array(v_length);
      for (var x = 0; x < v_length; x++) {
        v1[x] = -1;
        v2[x] = -1;
      }
      v1[v_offset + 1] = 0;
      v2[v_offset + 1] = 0;
      var delta = text1_length - text2_length;
      var front = delta % 2 !== 0;
      var k1start = 0;
      var k1end = 0;
      var k2start = 0;
      var k2end = 0;
      for (var d = 0; d < max_d; d++) {
        for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
          var k1_offset = v_offset + k1;
          var x1;
          if (k1 === -d || k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
            x1 = v1[k1_offset + 1];
          } else {
            x1 = v1[k1_offset - 1] + 1;
          }
          var y1 = x1 - k1;
          while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) === text2.charAt(y1)) {
            x1++;
            y1++;
          }
          v1[k1_offset] = x1;
          if (x1 > text1_length) {
            k1end += 2;
          } else if (y1 > text2_length) {
            k1start += 2;
          } else if (front) {
            var k2_offset = v_offset + delta - k1;
            if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
              var x2 = text1_length - v2[k2_offset];
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
        for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
          var k2_offset = v_offset + k2;
          var x2;
          if (k2 === -d || k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
            x2 = v2[k2_offset + 1];
          } else {
            x2 = v2[k2_offset - 1] + 1;
          }
          var y2 = x2 - k2;
          while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)) {
            x2++;
            y2++;
          }
          v2[k2_offset] = x2;
          if (x2 > text1_length) {
            k2end += 2;
          } else if (y2 > text2_length) {
            k2start += 2;
          } else if (!front) {
            var k1_offset = v_offset + delta - k2;
            if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
              var x1 = v1[k1_offset];
              var y1 = v_offset + x1 - k1_offset;
              x2 = text1_length - x2;
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
      }
      return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
    }
    function diff_bisectSplit_(text1, text2, x, y) {
      var text1a = text1.substring(0, x);
      var text2a = text2.substring(0, y);
      var text1b = text1.substring(x);
      var text2b = text2.substring(y);
      var diffs = diff_main(text1a, text2a);
      var diffsb = diff_main(text1b, text2b);
      return diffs.concat(diffsb);
    }
    function diff_commonPrefix(text1, text2) {
      if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerstart = 0;
      while (pointermin < pointermid) {
        if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
          pointermin = pointermid;
          pointerstart = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
        pointermid--;
      }
      return pointermid;
    }
    function diff_commonSuffix(text1, text2) {
      if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerend = 0;
      while (pointermin < pointermid) {
        if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
          pointermin = pointermid;
          pointerend = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
        pointermid--;
      }
      return pointermid;
    }
    function diff_halfMatch_(text1, text2) {
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
        return null;
      }
      function diff_halfMatchI_(longtext2, shorttext2, i2) {
        var seed = longtext2.substring(i2, i2 + Math.floor(longtext2.length / 4));
        var j = -1;
        var best_common = "";
        var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
        while ((j = shorttext2.indexOf(seed, j + 1)) !== -1) {
          var prefixLength = diff_commonPrefix(
            longtext2.substring(i2),
            shorttext2.substring(j)
          );
          var suffixLength = diff_commonSuffix(
            longtext2.substring(0, i2),
            shorttext2.substring(0, j)
          );
          if (best_common.length < suffixLength + prefixLength) {
            best_common = shorttext2.substring(
              j - suffixLength,
              j
            ) + shorttext2.substring(j, j + prefixLength);
            best_longtext_a = longtext2.substring(0, i2 - suffixLength);
            best_longtext_b = longtext2.substring(i2 + prefixLength);
            best_shorttext_a = shorttext2.substring(0, j - suffixLength);
            best_shorttext_b = shorttext2.substring(j + prefixLength);
          }
        }
        if (best_common.length * 2 >= longtext2.length) {
          return [
            best_longtext_a,
            best_longtext_b,
            best_shorttext_a,
            best_shorttext_b,
            best_common
          ];
        } else {
          return null;
        }
      }
      var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
      var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
      var hm;
      if (!hm1 && !hm2) {
        return null;
      } else if (!hm2) {
        hm = hm1;
      } else if (!hm1) {
        hm = hm2;
      } else {
        hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
      }
      var text1_a, text1_b, text2_a, text2_b;
      if (text1.length > text2.length) {
        text1_a = hm[0];
        text1_b = hm[1];
        text2_a = hm[2];
        text2_b = hm[3];
      } else {
        text2_a = hm[0];
        text2_b = hm[1];
        text1_a = hm[2];
        text1_b = hm[3];
      }
      var mid_common = hm[4];
      return [text1_a, text1_b, text2_a, text2_b, mid_common];
    }
    function diff_cleanupMerge(diffs, fix_unicode) {
      diffs.push([DIFF_EQUAL, ""]);
      var pointer = 0;
      var count_delete = 0;
      var count_insert = 0;
      var text_delete = "";
      var text_insert = "";
      var commonlength;
      while (pointer < diffs.length) {
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
          diffs.splice(pointer, 1);
          continue;
        }
        switch (diffs[pointer][0]) {
          case DIFF_INSERT:
            count_insert++;
            text_insert += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_DELETE:
            count_delete++;
            text_delete += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_EQUAL:
            var previous_equality = pointer - count_insert - count_delete - 1;
            if (fix_unicode) {
              if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
                var stray = diffs[previous_equality][1].slice(-1);
                diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);
                text_delete = stray + text_delete;
                text_insert = stray + text_insert;
                if (!diffs[previous_equality][1]) {
                  diffs.splice(previous_equality, 1);
                  pointer--;
                  var k = previous_equality - 1;
                  if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                    count_insert++;
                    text_insert = diffs[k][1] + text_insert;
                    k--;
                  }
                  if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                    count_delete++;
                    text_delete = diffs[k][1] + text_delete;
                    k--;
                  }
                  previous_equality = k;
                }
              }
              if (starts_with_pair_end(diffs[pointer][1])) {
                var stray = diffs[pointer][1].charAt(0);
                diffs[pointer][1] = diffs[pointer][1].slice(1);
                text_delete += stray;
                text_insert += stray;
              }
            }
            if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
              diffs.splice(pointer, 1);
              break;
            }
            if (text_delete.length > 0 || text_insert.length > 0) {
              if (text_delete.length > 0 && text_insert.length > 0) {
                commonlength = diff_commonPrefix(text_insert, text_delete);
                if (commonlength !== 0) {
                  if (previous_equality >= 0) {
                    diffs[previous_equality][1] += text_insert.substring(0, commonlength);
                  } else {
                    diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                    pointer++;
                  }
                  text_insert = text_insert.substring(commonlength);
                  text_delete = text_delete.substring(commonlength);
                }
                commonlength = diff_commonSuffix(text_insert, text_delete);
                if (commonlength !== 0) {
                  diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                  text_insert = text_insert.substring(0, text_insert.length - commonlength);
                  text_delete = text_delete.substring(0, text_delete.length - commonlength);
                }
              }
              var n = count_insert + count_delete;
              if (text_delete.length === 0 && text_insert.length === 0) {
                diffs.splice(pointer - n, n);
                pointer = pointer - n;
              } else if (text_delete.length === 0) {
                diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);
                pointer = pointer - n + 1;
              } else if (text_insert.length === 0) {
                diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);
                pointer = pointer - n + 1;
              } else {
                diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
                pointer = pointer - n + 2;
              }
            }
            if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
              diffs[pointer - 1][1] += diffs[pointer][1];
              diffs.splice(pointer, 1);
            } else {
              pointer++;
            }
            count_insert = 0;
            count_delete = 0;
            text_delete = "";
            text_insert = "";
            break;
        }
      }
      if (diffs[diffs.length - 1][1] === "") {
        diffs.pop();
      }
      var changes = false;
      pointer = 1;
      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
          if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
            diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
            diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
            diffs.splice(pointer - 1, 1);
            changes = true;
          } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
            diffs[pointer - 1][1] += diffs[pointer + 1][1];
            diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
            diffs.splice(pointer + 1, 1);
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        diff_cleanupMerge(diffs, fix_unicode);
      }
    }
    function is_surrogate_pair_start(charCode) {
      return charCode >= 55296 && charCode <= 56319;
    }
    function is_surrogate_pair_end(charCode) {
      return charCode >= 56320 && charCode <= 57343;
    }
    function starts_with_pair_end(str2) {
      return is_surrogate_pair_end(str2.charCodeAt(0));
    }
    function ends_with_pair_start(str2) {
      return is_surrogate_pair_start(str2.charCodeAt(str2.length - 1));
    }
    function remove_empty_tuples(tuples) {
      var ret = [];
      for (var i2 = 0; i2 < tuples.length; i2++) {
        if (tuples[i2][1].length > 0) {
          ret.push(tuples[i2]);
        }
      }
      return ret;
    }
    function make_edit_splice(before, oldMiddle, newMiddle, after) {
      if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
        return null;
      }
      return remove_empty_tuples([
        [DIFF_EQUAL, before],
        [DIFF_DELETE, oldMiddle],
        [DIFF_INSERT, newMiddle],
        [DIFF_EQUAL, after]
      ]);
    }
    function find_cursor_edit_diff(oldText, newText, cursor_pos) {
      var oldRange = typeof cursor_pos === "number" ? { index: cursor_pos, length: 0 } : cursor_pos.oldRange;
      var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
      var oldLength = oldText.length;
      var newLength = newText.length;
      if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
        var oldCursor = oldRange.index;
        var oldBefore = oldText.slice(0, oldCursor);
        var oldAfter = oldText.slice(oldCursor);
        var maybeNewCursor = newRange ? newRange.index : null;
        editBefore: {
          var newCursor = oldCursor + newLength - oldLength;
          if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
            break editBefore;
          }
          if (newCursor < 0 || newCursor > newLength) {
            break editBefore;
          }
          var newBefore = newText.slice(0, newCursor);
          var newAfter = newText.slice(newCursor);
          if (newAfter !== oldAfter) {
            break editBefore;
          }
          var prefixLength = Math.min(oldCursor, newCursor);
          var oldPrefix = oldBefore.slice(0, prefixLength);
          var newPrefix = newBefore.slice(0, prefixLength);
          if (oldPrefix !== newPrefix) {
            break editBefore;
          }
          var oldMiddle = oldBefore.slice(prefixLength);
          var newMiddle = newBefore.slice(prefixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
        }
        editAfter: {
          if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
            break editAfter;
          }
          var cursor = oldCursor;
          var newBefore = newText.slice(0, cursor);
          var newAfter = newText.slice(cursor);
          if (newBefore !== oldBefore) {
            break editAfter;
          }
          var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
          var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
          var newSuffix = newAfter.slice(newAfter.length - suffixLength);
          if (oldSuffix !== newSuffix) {
            break editAfter;
          }
          var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
          var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
          return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
        }
      }
      if (oldRange.length > 0 && newRange && newRange.length === 0) {
        replaceRange: {
          var oldPrefix = oldText.slice(0, oldRange.index);
          var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
          var prefixLength = oldPrefix.length;
          var suffixLength = oldSuffix.length;
          if (newLength < prefixLength + suffixLength) {
            break replaceRange;
          }
          var newPrefix = newText.slice(0, prefixLength);
          var newSuffix = newText.slice(newLength - suffixLength);
          if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
            break replaceRange;
          }
          var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
          var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
        }
      }
      return null;
    }
    function diff2(text1, text2, cursor_pos) {
      return diff_main(text1, text2, cursor_pos, true);
    }
    diff2.INSERT = DIFF_INSERT;
    diff2.DELETE = DIFF_DELETE;
    diff2.EQUAL = DIFF_EQUAL;
    module.exports = diff2;
  }
});

// ../../node_modules/qrious/dist/qrious.js
var require_qrious = __commonJS({
  "../../node_modules/qrious/dist/qrious.js"(exports, module) {
    init_define_process();
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.QRious = factory();
    })(exports, function() {
      "use strict";
      var Constructor = function() {
      };
      var hasOwnProperty2 = Object.prototype.hasOwnProperty;
      var slice3 = Array.prototype.slice;
      function createObject(prototype, properties2) {
        var result;
        if (typeof Object.create === "function") {
          result = Object.create(prototype);
        } else {
          Constructor.prototype = prototype;
          result = new Constructor();
          Constructor.prototype = null;
        }
        if (properties2) {
          extendObject(true, result, properties2);
        }
        return result;
      }
      function extend(name, constructor, prototype, statics) {
        var superConstructor = this;
        if (typeof name !== "string") {
          statics = prototype;
          prototype = constructor;
          constructor = name;
          name = null;
        }
        if (typeof constructor !== "function") {
          statics = prototype;
          prototype = constructor;
          constructor = function() {
            return superConstructor.apply(this, arguments);
          };
        }
        extendObject(false, constructor, superConstructor, statics);
        constructor.prototype = createObject(superConstructor.prototype, prototype);
        constructor.prototype.constructor = constructor;
        constructor.class_ = name || superConstructor.class_;
        constructor.super_ = superConstructor;
        return constructor;
      }
      function extendObject(own, target, sources) {
        sources = slice3.call(arguments, 2);
        var property;
        var source;
        for (var i2 = 0, length = sources.length; i2 < length; i2++) {
          source = sources[i2];
          for (property in source) {
            if (!own || hasOwnProperty2.call(source, property)) {
              target[property] = source[property];
            }
          }
        }
      }
      var extend_1 = extend;
      function Nevis() {
      }
      Nevis.class_ = "Nevis";
      Nevis.super_ = Object;
      Nevis.extend = extend_1;
      var nevis = Nevis;
      var lite = nevis;
      var Renderer = lite.extend(function(qrious, element, enabled) {
        this.qrious = qrious;
        this.element = element;
        this.element.qrious = qrious;
        this.enabled = Boolean(enabled);
      }, {
        draw: function(frame) {
        },
        getElement: function() {
          if (!this.enabled) {
            this.enabled = true;
            this.render();
          }
          return this.element;
        },
        getModuleSize: function(frame) {
          var qrious = this.qrious;
          var padding2 = qrious.padding || 0;
          var pixels = Math.floor((qrious.size - padding2 * 2) / frame.width);
          return Math.max(1, pixels);
        },
        getOffset: function(frame) {
          var qrious = this.qrious;
          var padding2 = qrious.padding;
          if (padding2 != null) {
            return padding2;
          }
          var moduleSize = this.getModuleSize(frame);
          var offset2 = Math.floor((qrious.size - moduleSize * frame.width) / 2);
          return Math.max(0, offset2);
        },
        render: function(frame) {
          if (this.enabled) {
            this.resize();
            this.reset();
            this.draw(frame);
          }
        },
        reset: function() {
        },
        resize: function() {
        }
      });
      var Renderer_1 = Renderer;
      var CanvasRenderer = Renderer_1.extend({
        draw: function(frame) {
          var i2, j;
          var qrious = this.qrious;
          var moduleSize = this.getModuleSize(frame);
          var offset2 = this.getOffset(frame);
          var context = this.element.getContext("2d");
          context.fillStyle = qrious.foreground;
          context.globalAlpha = qrious.foregroundAlpha;
          for (i2 = 0; i2 < frame.width; i2++) {
            for (j = 0; j < frame.width; j++) {
              if (frame.buffer[j * frame.width + i2]) {
                context.fillRect(moduleSize * i2 + offset2, moduleSize * j + offset2, moduleSize, moduleSize);
              }
            }
          }
        },
        reset: function() {
          var qrious = this.qrious;
          var context = this.element.getContext("2d");
          var size = qrious.size;
          context.lineWidth = 1;
          context.clearRect(0, 0, size, size);
          context.fillStyle = qrious.background;
          context.globalAlpha = qrious.backgroundAlpha;
          context.fillRect(0, 0, size, size);
        },
        resize: function() {
          var element = this.element;
          element.width = element.height = this.qrious.size;
        }
      });
      var CanvasRenderer_1 = CanvasRenderer;
      var Alignment = lite.extend(null, {
        BLOCK: [
          0,
          11,
          15,
          19,
          23,
          27,
          31,
          16,
          18,
          20,
          22,
          24,
          26,
          28,
          20,
          22,
          24,
          24,
          26,
          28,
          28,
          22,
          24,
          24,
          26,
          26,
          28,
          28,
          24,
          24,
          26,
          26,
          26,
          28,
          28,
          24,
          26,
          26,
          26,
          28,
          28
        ]
      });
      var Alignment_1 = Alignment;
      var ErrorCorrection = lite.extend(null, {
        BLOCKS: [
          1,
          0,
          19,
          7,
          1,
          0,
          16,
          10,
          1,
          0,
          13,
          13,
          1,
          0,
          9,
          17,
          1,
          0,
          34,
          10,
          1,
          0,
          28,
          16,
          1,
          0,
          22,
          22,
          1,
          0,
          16,
          28,
          1,
          0,
          55,
          15,
          1,
          0,
          44,
          26,
          2,
          0,
          17,
          18,
          2,
          0,
          13,
          22,
          1,
          0,
          80,
          20,
          2,
          0,
          32,
          18,
          2,
          0,
          24,
          26,
          4,
          0,
          9,
          16,
          1,
          0,
          108,
          26,
          2,
          0,
          43,
          24,
          2,
          2,
          15,
          18,
          2,
          2,
          11,
          22,
          2,
          0,
          68,
          18,
          4,
          0,
          27,
          16,
          4,
          0,
          19,
          24,
          4,
          0,
          15,
          28,
          2,
          0,
          78,
          20,
          4,
          0,
          31,
          18,
          2,
          4,
          14,
          18,
          4,
          1,
          13,
          26,
          2,
          0,
          97,
          24,
          2,
          2,
          38,
          22,
          4,
          2,
          18,
          22,
          4,
          2,
          14,
          26,
          2,
          0,
          116,
          30,
          3,
          2,
          36,
          22,
          4,
          4,
          16,
          20,
          4,
          4,
          12,
          24,
          2,
          2,
          68,
          18,
          4,
          1,
          43,
          26,
          6,
          2,
          19,
          24,
          6,
          2,
          15,
          28,
          4,
          0,
          81,
          20,
          1,
          4,
          50,
          30,
          4,
          4,
          22,
          28,
          3,
          8,
          12,
          24,
          2,
          2,
          92,
          24,
          6,
          2,
          36,
          22,
          4,
          6,
          20,
          26,
          7,
          4,
          14,
          28,
          4,
          0,
          107,
          26,
          8,
          1,
          37,
          22,
          8,
          4,
          20,
          24,
          12,
          4,
          11,
          22,
          3,
          1,
          115,
          30,
          4,
          5,
          40,
          24,
          11,
          5,
          16,
          20,
          11,
          5,
          12,
          24,
          5,
          1,
          87,
          22,
          5,
          5,
          41,
          24,
          5,
          7,
          24,
          30,
          11,
          7,
          12,
          24,
          5,
          1,
          98,
          24,
          7,
          3,
          45,
          28,
          15,
          2,
          19,
          24,
          3,
          13,
          15,
          30,
          1,
          5,
          107,
          28,
          10,
          1,
          46,
          28,
          1,
          15,
          22,
          28,
          2,
          17,
          14,
          28,
          5,
          1,
          120,
          30,
          9,
          4,
          43,
          26,
          17,
          1,
          22,
          28,
          2,
          19,
          14,
          28,
          3,
          4,
          113,
          28,
          3,
          11,
          44,
          26,
          17,
          4,
          21,
          26,
          9,
          16,
          13,
          26,
          3,
          5,
          107,
          28,
          3,
          13,
          41,
          26,
          15,
          5,
          24,
          30,
          15,
          10,
          15,
          28,
          4,
          4,
          116,
          28,
          17,
          0,
          42,
          26,
          17,
          6,
          22,
          28,
          19,
          6,
          16,
          30,
          2,
          7,
          111,
          28,
          17,
          0,
          46,
          28,
          7,
          16,
          24,
          30,
          34,
          0,
          13,
          24,
          4,
          5,
          121,
          30,
          4,
          14,
          47,
          28,
          11,
          14,
          24,
          30,
          16,
          14,
          15,
          30,
          6,
          4,
          117,
          30,
          6,
          14,
          45,
          28,
          11,
          16,
          24,
          30,
          30,
          2,
          16,
          30,
          8,
          4,
          106,
          26,
          8,
          13,
          47,
          28,
          7,
          22,
          24,
          30,
          22,
          13,
          15,
          30,
          10,
          2,
          114,
          28,
          19,
          4,
          46,
          28,
          28,
          6,
          22,
          28,
          33,
          4,
          16,
          30,
          8,
          4,
          122,
          30,
          22,
          3,
          45,
          28,
          8,
          26,
          23,
          30,
          12,
          28,
          15,
          30,
          3,
          10,
          117,
          30,
          3,
          23,
          45,
          28,
          4,
          31,
          24,
          30,
          11,
          31,
          15,
          30,
          7,
          7,
          116,
          30,
          21,
          7,
          45,
          28,
          1,
          37,
          23,
          30,
          19,
          26,
          15,
          30,
          5,
          10,
          115,
          30,
          19,
          10,
          47,
          28,
          15,
          25,
          24,
          30,
          23,
          25,
          15,
          30,
          13,
          3,
          115,
          30,
          2,
          29,
          46,
          28,
          42,
          1,
          24,
          30,
          23,
          28,
          15,
          30,
          17,
          0,
          115,
          30,
          10,
          23,
          46,
          28,
          10,
          35,
          24,
          30,
          19,
          35,
          15,
          30,
          17,
          1,
          115,
          30,
          14,
          21,
          46,
          28,
          29,
          19,
          24,
          30,
          11,
          46,
          15,
          30,
          13,
          6,
          115,
          30,
          14,
          23,
          46,
          28,
          44,
          7,
          24,
          30,
          59,
          1,
          16,
          30,
          12,
          7,
          121,
          30,
          12,
          26,
          47,
          28,
          39,
          14,
          24,
          30,
          22,
          41,
          15,
          30,
          6,
          14,
          121,
          30,
          6,
          34,
          47,
          28,
          46,
          10,
          24,
          30,
          2,
          64,
          15,
          30,
          17,
          4,
          122,
          30,
          29,
          14,
          46,
          28,
          49,
          10,
          24,
          30,
          24,
          46,
          15,
          30,
          4,
          18,
          122,
          30,
          13,
          32,
          46,
          28,
          48,
          14,
          24,
          30,
          42,
          32,
          15,
          30,
          20,
          4,
          117,
          30,
          40,
          7,
          47,
          28,
          43,
          22,
          24,
          30,
          10,
          67,
          15,
          30,
          19,
          6,
          118,
          30,
          18,
          31,
          47,
          28,
          34,
          34,
          24,
          30,
          20,
          61,
          15,
          30
        ],
        FINAL_FORMAT: [
          30660,
          29427,
          32170,
          30877,
          26159,
          25368,
          27713,
          26998,
          21522,
          20773,
          24188,
          23371,
          17913,
          16590,
          20375,
          19104,
          13663,
          12392,
          16177,
          14854,
          9396,
          8579,
          11994,
          11245,
          5769,
          5054,
          7399,
          6608,
          1890,
          597,
          3340,
          2107
        ],
        LEVELS: {
          L: 1,
          M: 2,
          Q: 3,
          H: 4
        }
      });
      var ErrorCorrection_1 = ErrorCorrection;
      var Galois = lite.extend(null, {
        EXPONENT: [
          1,
          2,
          4,
          8,
          16,
          32,
          64,
          128,
          29,
          58,
          116,
          232,
          205,
          135,
          19,
          38,
          76,
          152,
          45,
          90,
          180,
          117,
          234,
          201,
          143,
          3,
          6,
          12,
          24,
          48,
          96,
          192,
          157,
          39,
          78,
          156,
          37,
          74,
          148,
          53,
          106,
          212,
          181,
          119,
          238,
          193,
          159,
          35,
          70,
          140,
          5,
          10,
          20,
          40,
          80,
          160,
          93,
          186,
          105,
          210,
          185,
          111,
          222,
          161,
          95,
          190,
          97,
          194,
          153,
          47,
          94,
          188,
          101,
          202,
          137,
          15,
          30,
          60,
          120,
          240,
          253,
          231,
          211,
          187,
          107,
          214,
          177,
          127,
          254,
          225,
          223,
          163,
          91,
          182,
          113,
          226,
          217,
          175,
          67,
          134,
          17,
          34,
          68,
          136,
          13,
          26,
          52,
          104,
          208,
          189,
          103,
          206,
          129,
          31,
          62,
          124,
          248,
          237,
          199,
          147,
          59,
          118,
          236,
          197,
          151,
          51,
          102,
          204,
          133,
          23,
          46,
          92,
          184,
          109,
          218,
          169,
          79,
          158,
          33,
          66,
          132,
          21,
          42,
          84,
          168,
          77,
          154,
          41,
          82,
          164,
          85,
          170,
          73,
          146,
          57,
          114,
          228,
          213,
          183,
          115,
          230,
          209,
          191,
          99,
          198,
          145,
          63,
          126,
          252,
          229,
          215,
          179,
          123,
          246,
          241,
          255,
          227,
          219,
          171,
          75,
          150,
          49,
          98,
          196,
          149,
          55,
          110,
          220,
          165,
          87,
          174,
          65,
          130,
          25,
          50,
          100,
          200,
          141,
          7,
          14,
          28,
          56,
          112,
          224,
          221,
          167,
          83,
          166,
          81,
          162,
          89,
          178,
          121,
          242,
          249,
          239,
          195,
          155,
          43,
          86,
          172,
          69,
          138,
          9,
          18,
          36,
          72,
          144,
          61,
          122,
          244,
          245,
          247,
          243,
          251,
          235,
          203,
          139,
          11,
          22,
          44,
          88,
          176,
          125,
          250,
          233,
          207,
          131,
          27,
          54,
          108,
          216,
          173,
          71,
          142,
          0
        ],
        LOG: [
          255,
          0,
          1,
          25,
          2,
          50,
          26,
          198,
          3,
          223,
          51,
          238,
          27,
          104,
          199,
          75,
          4,
          100,
          224,
          14,
          52,
          141,
          239,
          129,
          28,
          193,
          105,
          248,
          200,
          8,
          76,
          113,
          5,
          138,
          101,
          47,
          225,
          36,
          15,
          33,
          53,
          147,
          142,
          218,
          240,
          18,
          130,
          69,
          29,
          181,
          194,
          125,
          106,
          39,
          249,
          185,
          201,
          154,
          9,
          120,
          77,
          228,
          114,
          166,
          6,
          191,
          139,
          98,
          102,
          221,
          48,
          253,
          226,
          152,
          37,
          179,
          16,
          145,
          34,
          136,
          54,
          208,
          148,
          206,
          143,
          150,
          219,
          189,
          241,
          210,
          19,
          92,
          131,
          56,
          70,
          64,
          30,
          66,
          182,
          163,
          195,
          72,
          126,
          110,
          107,
          58,
          40,
          84,
          250,
          133,
          186,
          61,
          202,
          94,
          155,
          159,
          10,
          21,
          121,
          43,
          78,
          212,
          229,
          172,
          115,
          243,
          167,
          87,
          7,
          112,
          192,
          247,
          140,
          128,
          99,
          13,
          103,
          74,
          222,
          237,
          49,
          197,
          254,
          24,
          227,
          165,
          153,
          119,
          38,
          184,
          180,
          124,
          17,
          68,
          146,
          217,
          35,
          32,
          137,
          46,
          55,
          63,
          209,
          91,
          149,
          188,
          207,
          205,
          144,
          135,
          151,
          178,
          220,
          252,
          190,
          97,
          242,
          86,
          211,
          171,
          20,
          42,
          93,
          158,
          132,
          60,
          57,
          83,
          71,
          109,
          65,
          162,
          31,
          45,
          67,
          216,
          183,
          123,
          164,
          118,
          196,
          23,
          73,
          236,
          127,
          12,
          111,
          246,
          108,
          161,
          59,
          82,
          41,
          157,
          85,
          170,
          251,
          96,
          134,
          177,
          187,
          204,
          62,
          90,
          203,
          89,
          95,
          176,
          156,
          169,
          160,
          81,
          11,
          245,
          22,
          235,
          122,
          117,
          44,
          215,
          79,
          174,
          213,
          233,
          230,
          231,
          173,
          232,
          116,
          214,
          244,
          234,
          168,
          80,
          88,
          175
        ]
      });
      var Galois_1 = Galois;
      var Version = lite.extend(null, {
        BLOCK: [
          3220,
          1468,
          2713,
          1235,
          3062,
          1890,
          2119,
          1549,
          2344,
          2936,
          1117,
          2583,
          1330,
          2470,
          1667,
          2249,
          2028,
          3780,
          481,
          4011,
          142,
          3098,
          831,
          3445,
          592,
          2517,
          1776,
          2234,
          1951,
          2827,
          1070,
          2660,
          1345,
          3177
        ]
      });
      var Version_1 = Version;
      var Frame = lite.extend(function(options) {
        var dataBlock, eccBlock, index2, neccBlock1, neccBlock2;
        var valueLength = options.value.length;
        this._badness = [];
        this._level = ErrorCorrection_1.LEVELS[options.level];
        this._polynomial = [];
        this._value = options.value;
        this._version = 0;
        this._stringBuffer = [];
        while (this._version < 40) {
          this._version++;
          index2 = (this._level - 1) * 4 + (this._version - 1) * 16;
          neccBlock1 = ErrorCorrection_1.BLOCKS[index2++];
          neccBlock2 = ErrorCorrection_1.BLOCKS[index2++];
          dataBlock = ErrorCorrection_1.BLOCKS[index2++];
          eccBlock = ErrorCorrection_1.BLOCKS[index2];
          index2 = dataBlock * (neccBlock1 + neccBlock2) + neccBlock2 - 3 + (this._version <= 9);
          if (valueLength <= index2) {
            break;
          }
        }
        this._dataBlock = dataBlock;
        this._eccBlock = eccBlock;
        this._neccBlock1 = neccBlock1;
        this._neccBlock2 = neccBlock2;
        var width2 = this.width = 17 + 4 * this._version;
        this.buffer = Frame._createArray(width2 * width2);
        this._ecc = Frame._createArray(dataBlock + (dataBlock + eccBlock) * (neccBlock1 + neccBlock2) + neccBlock2);
        this._mask = Frame._createArray((width2 * (width2 + 1) + 1) / 2);
        this._insertFinders();
        this._insertAlignments();
        this.buffer[8 + width2 * (width2 - 8)] = 1;
        this._insertTimingGap();
        this._reverseMask();
        this._insertTimingRowAndColumn();
        this._insertVersion();
        this._syncMask();
        this._convertBitStream(valueLength);
        this._calculatePolynomial();
        this._appendEccToData();
        this._interleaveBlocks();
        this._pack();
        this._finish();
      }, {
        _addAlignment: function(x, y) {
          var i2;
          var buffer = this.buffer;
          var width2 = this.width;
          buffer[x + width2 * y] = 1;
          for (i2 = -2; i2 < 2; i2++) {
            buffer[x + i2 + width2 * (y - 2)] = 1;
            buffer[x - 2 + width2 * (y + i2 + 1)] = 1;
            buffer[x + 2 + width2 * (y + i2)] = 1;
            buffer[x + i2 + 1 + width2 * (y + 2)] = 1;
          }
          for (i2 = 0; i2 < 2; i2++) {
            this._setMask(x - 1, y + i2);
            this._setMask(x + 1, y - i2);
            this._setMask(x - i2, y - 1);
            this._setMask(x + i2, y + 1);
          }
        },
        _appendData: function(data, dataLength, ecc, eccLength) {
          var bit, i2, j;
          var polynomial = this._polynomial;
          var stringBuffer = this._stringBuffer;
          for (i2 = 0; i2 < eccLength; i2++) {
            stringBuffer[ecc + i2] = 0;
          }
          for (i2 = 0; i2 < dataLength; i2++) {
            bit = Galois_1.LOG[stringBuffer[data + i2] ^ stringBuffer[ecc]];
            if (bit !== 255) {
              for (j = 1; j < eccLength; j++) {
                stringBuffer[ecc + j - 1] = stringBuffer[ecc + j] ^ Galois_1.EXPONENT[Frame._modN(bit + polynomial[eccLength - j])];
              }
            } else {
              for (j = ecc; j < ecc + eccLength; j++) {
                stringBuffer[j] = stringBuffer[j + 1];
              }
            }
            stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois_1.EXPONENT[Frame._modN(bit + polynomial[0])];
          }
        },
        _appendEccToData: function() {
          var i2;
          var data = 0;
          var dataBlock = this._dataBlock;
          var ecc = this._calculateMaxLength();
          var eccBlock = this._eccBlock;
          for (i2 = 0; i2 < this._neccBlock1; i2++) {
            this._appendData(data, dataBlock, ecc, eccBlock);
            data += dataBlock;
            ecc += eccBlock;
          }
          for (i2 = 0; i2 < this._neccBlock2; i2++) {
            this._appendData(data, dataBlock + 1, ecc, eccBlock);
            data += dataBlock + 1;
            ecc += eccBlock;
          }
        },
        _applyMask: function(mask) {
          var r3x, r3y, x, y;
          var buffer = this.buffer;
          var width2 = this.width;
          switch (mask) {
            case 0:
              for (y = 0; y < width2; y++) {
                for (x = 0; x < width2; x++) {
                  if (!(x + y & 1) && !this._isMasked(x, y)) {
                    buffer[x + y * width2] ^= 1;
                  }
                }
              }
              break;
            case 1:
              for (y = 0; y < width2; y++) {
                for (x = 0; x < width2; x++) {
                  if (!(y & 1) && !this._isMasked(x, y)) {
                    buffer[x + y * width2] ^= 1;
                  }
                }
              }
              break;
            case 2:
              for (y = 0; y < width2; y++) {
                for (r3x = 0, x = 0; x < width2; x++, r3x++) {
                  if (r3x === 3) {
                    r3x = 0;
                  }
                  if (!r3x && !this._isMasked(x, y)) {
                    buffer[x + y * width2] ^= 1;
                  }
                }
              }
              break;
            case 3:
              for (r3y = 0, y = 0; y < width2; y++, r3y++) {
                if (r3y === 3) {
                  r3y = 0;
                }
                for (r3x = r3y, x = 0; x < width2; x++, r3x++) {
                  if (r3x === 3) {
                    r3x = 0;
                  }
                  if (!r3x && !this._isMasked(x, y)) {
                    buffer[x + y * width2] ^= 1;
                  }
                }
              }
              break;
            case 4:
              for (y = 0; y < width2; y++) {
                for (r3x = 0, r3y = y >> 1 & 1, x = 0; x < width2; x++, r3x++) {
                  if (r3x === 3) {
                    r3x = 0;
                    r3y = !r3y;
                  }
                  if (!r3y && !this._isMasked(x, y)) {
                    buffer[x + y * width2] ^= 1;
                  }
                }
              }
              break;
            case 5:
              for (r3y = 0, y = 0; y < width2; y++, r3y++) {
                if (r3y === 3) {
                  r3y = 0;
                }
                for (r3x = 0, x = 0; x < width2; x++, r3x++) {
                  if (r3x === 3) {
                    r3x = 0;
                  }
                  if (!((x & y & 1) + !(!r3x | !r3y)) && !this._isMasked(x, y)) {
                    buffer[x + y * width2] ^= 1;
                  }
                }
              }
              break;
            case 6:
              for (r3y = 0, y = 0; y < width2; y++, r3y++) {
                if (r3y === 3) {
                  r3y = 0;
                }
                for (r3x = 0, x = 0; x < width2; x++, r3x++) {
                  if (r3x === 3) {
                    r3x = 0;
                  }
                  if (!((x & y & 1) + (r3x && r3x === r3y) & 1) && !this._isMasked(x, y)) {
                    buffer[x + y * width2] ^= 1;
                  }
                }
              }
              break;
            case 7:
              for (r3y = 0, y = 0; y < width2; y++, r3y++) {
                if (r3y === 3) {
                  r3y = 0;
                }
                for (r3x = 0, x = 0; x < width2; x++, r3x++) {
                  if (r3x === 3) {
                    r3x = 0;
                  }
                  if (!((r3x && r3x === r3y) + (x + y & 1) & 1) && !this._isMasked(x, y)) {
                    buffer[x + y * width2] ^= 1;
                  }
                }
              }
              break;
          }
        },
        _calculateMaxLength: function() {
          return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
        },
        _calculatePolynomial: function() {
          var i2, j;
          var eccBlock = this._eccBlock;
          var polynomial = this._polynomial;
          polynomial[0] = 1;
          for (i2 = 0; i2 < eccBlock; i2++) {
            polynomial[i2 + 1] = 1;
            for (j = i2; j > 0; j--) {
              polynomial[j] = polynomial[j] ? polynomial[j - 1] ^ Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[j]] + i2)] : polynomial[j - 1];
            }
            polynomial[0] = Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[0]] + i2)];
          }
          for (i2 = 0; i2 <= eccBlock; i2++) {
            polynomial[i2] = Galois_1.LOG[polynomial[i2]];
          }
        },
        _checkBadness: function() {
          var b, b1, h2, x, y;
          var bad = 0;
          var badness = this._badness;
          var buffer = this.buffer;
          var width2 = this.width;
          for (y = 0; y < width2 - 1; y++) {
            for (x = 0; x < width2 - 1; x++) {
              if (buffer[x + width2 * y] && buffer[x + 1 + width2 * y] && buffer[x + width2 * (y + 1)] && buffer[x + 1 + width2 * (y + 1)] || !(buffer[x + width2 * y] || buffer[x + 1 + width2 * y] || buffer[x + width2 * (y + 1)] || buffer[x + 1 + width2 * (y + 1)])) {
                bad += Frame.N2;
              }
            }
          }
          var bw = 0;
          for (y = 0; y < width2; y++) {
            h2 = 0;
            badness[0] = 0;
            for (b = 0, x = 0; x < width2; x++) {
              b1 = buffer[x + width2 * y];
              if (b === b1) {
                badness[h2]++;
              } else {
                badness[++h2] = 1;
              }
              b = b1;
              bw += b ? 1 : -1;
            }
            bad += this._getBadness(h2);
          }
          if (bw < 0) {
            bw = -bw;
          }
          var count2 = 0;
          var big = bw;
          big += big << 2;
          big <<= 1;
          while (big > width2 * width2) {
            big -= width2 * width2;
            count2++;
          }
          bad += count2 * Frame.N4;
          for (x = 0; x < width2; x++) {
            h2 = 0;
            badness[0] = 0;
            for (b = 0, y = 0; y < width2; y++) {
              b1 = buffer[x + width2 * y];
              if (b === b1) {
                badness[h2]++;
              } else {
                badness[++h2] = 1;
              }
              b = b1;
            }
            bad += this._getBadness(h2);
          }
          return bad;
        },
        _convertBitStream: function(length) {
          var bit, i2;
          var ecc = this._ecc;
          var version = this._version;
          for (i2 = 0; i2 < length; i2++) {
            ecc[i2] = this._value.charCodeAt(i2);
          }
          var stringBuffer = this._stringBuffer = ecc.slice();
          var maxLength = this._calculateMaxLength();
          if (length >= maxLength - 2) {
            length = maxLength - 2;
            if (version > 9) {
              length--;
            }
          }
          var index2 = length;
          if (version > 9) {
            stringBuffer[index2 + 2] = 0;
            stringBuffer[index2 + 3] = 0;
            while (index2--) {
              bit = stringBuffer[index2];
              stringBuffer[index2 + 3] |= 255 & bit << 4;
              stringBuffer[index2 + 2] = bit >> 4;
            }
            stringBuffer[2] |= 255 & length << 4;
            stringBuffer[1] = length >> 4;
            stringBuffer[0] = 64 | length >> 12;
          } else {
            stringBuffer[index2 + 1] = 0;
            stringBuffer[index2 + 2] = 0;
            while (index2--) {
              bit = stringBuffer[index2];
              stringBuffer[index2 + 2] |= 255 & bit << 4;
              stringBuffer[index2 + 1] = bit >> 4;
            }
            stringBuffer[1] |= 255 & length << 4;
            stringBuffer[0] = 64 | length >> 4;
          }
          index2 = length + 3 - (version < 10);
          while (index2 < maxLength) {
            stringBuffer[index2++] = 236;
            stringBuffer[index2++] = 17;
          }
        },
        _getBadness: function(length) {
          var i2;
          var badRuns = 0;
          var badness = this._badness;
          for (i2 = 0; i2 <= length; i2++) {
            if (badness[i2] >= 5) {
              badRuns += Frame.N1 + badness[i2] - 5;
            }
          }
          for (i2 = 3; i2 < length - 1; i2 += 2) {
            if (badness[i2 - 2] === badness[i2 + 2] && badness[i2 + 2] === badness[i2 - 1] && badness[i2 - 1] === badness[i2 + 1] && badness[i2 - 1] * 3 === badness[i2] && (badness[i2 - 3] === 0 || i2 + 3 > length || badness[i2 - 3] * 3 >= badness[i2] * 4 || badness[i2 + 3] * 3 >= badness[i2] * 4)) {
              badRuns += Frame.N3;
            }
          }
          return badRuns;
        },
        _finish: function() {
          this._stringBuffer = this.buffer.slice();
          var currentMask, i2;
          var bit = 0;
          var mask = 3e4;
          for (i2 = 0; i2 < 8; i2++) {
            this._applyMask(i2);
            currentMask = this._checkBadness();
            if (currentMask < mask) {
              mask = currentMask;
              bit = i2;
            }
            if (bit === 7) {
              break;
            }
            this.buffer = this._stringBuffer.slice();
          }
          if (bit !== i2) {
            this._applyMask(bit);
          }
          mask = ErrorCorrection_1.FINAL_FORMAT[bit + (this._level - 1 << 3)];
          var buffer = this.buffer;
          var width2 = this.width;
          for (i2 = 0; i2 < 8; i2++, mask >>= 1) {
            if (mask & 1) {
              buffer[width2 - 1 - i2 + width2 * 8] = 1;
              if (i2 < 6) {
                buffer[8 + width2 * i2] = 1;
              } else {
                buffer[8 + width2 * (i2 + 1)] = 1;
              }
            }
          }
          for (i2 = 0; i2 < 7; i2++, mask >>= 1) {
            if (mask & 1) {
              buffer[8 + width2 * (width2 - 7 + i2)] = 1;
              if (i2) {
                buffer[6 - i2 + width2 * 8] = 1;
              } else {
                buffer[7 + width2 * 8] = 1;
              }
            }
          }
        },
        _interleaveBlocks: function() {
          var i2, j;
          var dataBlock = this._dataBlock;
          var ecc = this._ecc;
          var eccBlock = this._eccBlock;
          var k = 0;
          var maxLength = this._calculateMaxLength();
          var neccBlock1 = this._neccBlock1;
          var neccBlock2 = this._neccBlock2;
          var stringBuffer = this._stringBuffer;
          for (i2 = 0; i2 < dataBlock; i2++) {
            for (j = 0; j < neccBlock1; j++) {
              ecc[k++] = stringBuffer[i2 + j * dataBlock];
            }
            for (j = 0; j < neccBlock2; j++) {
              ecc[k++] = stringBuffer[neccBlock1 * dataBlock + i2 + j * (dataBlock + 1)];
            }
          }
          for (j = 0; j < neccBlock2; j++) {
            ecc[k++] = stringBuffer[neccBlock1 * dataBlock + i2 + j * (dataBlock + 1)];
          }
          for (i2 = 0; i2 < eccBlock; i2++) {
            for (j = 0; j < neccBlock1 + neccBlock2; j++) {
              ecc[k++] = stringBuffer[maxLength + i2 + j * eccBlock];
            }
          }
          this._stringBuffer = ecc;
        },
        _insertAlignments: function() {
          var i2, x, y;
          var version = this._version;
          var width2 = this.width;
          if (version > 1) {
            i2 = Alignment_1.BLOCK[version];
            y = width2 - 7;
            for (; ; ) {
              x = width2 - 7;
              while (x > i2 - 3) {
                this._addAlignment(x, y);
                if (x < i2) {
                  break;
                }
                x -= i2;
              }
              if (y <= i2 + 9) {
                break;
              }
              y -= i2;
              this._addAlignment(6, y);
              this._addAlignment(y, 6);
            }
          }
        },
        _insertFinders: function() {
          var i2, j, x, y;
          var buffer = this.buffer;
          var width2 = this.width;
          for (i2 = 0; i2 < 3; i2++) {
            j = 0;
            y = 0;
            if (i2 === 1) {
              j = width2 - 7;
            }
            if (i2 === 2) {
              y = width2 - 7;
            }
            buffer[y + 3 + width2 * (j + 3)] = 1;
            for (x = 0; x < 6; x++) {
              buffer[y + x + width2 * j] = 1;
              buffer[y + width2 * (j + x + 1)] = 1;
              buffer[y + 6 + width2 * (j + x)] = 1;
              buffer[y + x + 1 + width2 * (j + 6)] = 1;
            }
            for (x = 1; x < 5; x++) {
              this._setMask(y + x, j + 1);
              this._setMask(y + 1, j + x + 1);
              this._setMask(y + 5, j + x);
              this._setMask(y + x + 1, j + 5);
            }
            for (x = 2; x < 4; x++) {
              buffer[y + x + width2 * (j + 2)] = 1;
              buffer[y + 2 + width2 * (j + x + 1)] = 1;
              buffer[y + 4 + width2 * (j + x)] = 1;
              buffer[y + x + 1 + width2 * (j + 4)] = 1;
            }
          }
        },
        _insertTimingGap: function() {
          var x, y;
          var width2 = this.width;
          for (y = 0; y < 7; y++) {
            this._setMask(7, y);
            this._setMask(width2 - 8, y);
            this._setMask(7, y + width2 - 7);
          }
          for (x = 0; x < 8; x++) {
            this._setMask(x, 7);
            this._setMask(x + width2 - 8, 7);
            this._setMask(x, width2 - 8);
          }
        },
        _insertTimingRowAndColumn: function() {
          var x;
          var buffer = this.buffer;
          var width2 = this.width;
          for (x = 0; x < width2 - 14; x++) {
            if (x & 1) {
              this._setMask(8 + x, 6);
              this._setMask(6, 8 + x);
            } else {
              buffer[8 + x + width2 * 6] = 1;
              buffer[6 + width2 * (8 + x)] = 1;
            }
          }
        },
        _insertVersion: function() {
          var i2, j, x, y;
          var buffer = this.buffer;
          var version = this._version;
          var width2 = this.width;
          if (version > 6) {
            i2 = Version_1.BLOCK[version - 7];
            j = 17;
            for (x = 0; x < 6; x++) {
              for (y = 0; y < 3; y++, j--) {
                if (1 & (j > 11 ? version >> j - 12 : i2 >> j)) {
                  buffer[5 - x + width2 * (2 - y + width2 - 11)] = 1;
                  buffer[2 - y + width2 - 11 + width2 * (5 - x)] = 1;
                } else {
                  this._setMask(5 - x, 2 - y + width2 - 11);
                  this._setMask(2 - y + width2 - 11, 5 - x);
                }
              }
            }
          }
        },
        _isMasked: function(x, y) {
          var bit = Frame._getMaskBit(x, y);
          return this._mask[bit] === 1;
        },
        _pack: function() {
          var bit, i2, j;
          var k = 1;
          var v = 1;
          var width2 = this.width;
          var x = width2 - 1;
          var y = width2 - 1;
          var length = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
          for (i2 = 0; i2 < length; i2++) {
            bit = this._stringBuffer[i2];
            for (j = 0; j < 8; j++, bit <<= 1) {
              if (128 & bit) {
                this.buffer[x + width2 * y] = 1;
              }
              do {
                if (v) {
                  x--;
                } else {
                  x++;
                  if (k) {
                    if (y !== 0) {
                      y--;
                    } else {
                      x -= 2;
                      k = !k;
                      if (x === 6) {
                        x--;
                        y = 9;
                      }
                    }
                  } else if (y !== width2 - 1) {
                    y++;
                  } else {
                    x -= 2;
                    k = !k;
                    if (x === 6) {
                      x--;
                      y -= 8;
                    }
                  }
                }
                v = !v;
              } while (this._isMasked(x, y));
            }
          }
        },
        _reverseMask: function() {
          var x, y;
          var width2 = this.width;
          for (x = 0; x < 9; x++) {
            this._setMask(x, 8);
          }
          for (x = 0; x < 8; x++) {
            this._setMask(x + width2 - 8, 8);
            this._setMask(8, x);
          }
          for (y = 0; y < 7; y++) {
            this._setMask(8, y + width2 - 7);
          }
        },
        _setMask: function(x, y) {
          var bit = Frame._getMaskBit(x, y);
          this._mask[bit] = 1;
        },
        _syncMask: function() {
          var x, y;
          var width2 = this.width;
          for (y = 0; y < width2; y++) {
            for (x = 0; x <= y; x++) {
              if (this.buffer[x + width2 * y]) {
                this._setMask(x, y);
              }
            }
          }
        }
      }, {
        _createArray: function(length) {
          var i2;
          var array = [];
          for (i2 = 0; i2 < length; i2++) {
            array[i2] = 0;
          }
          return array;
        },
        _getMaskBit: function(x, y) {
          var bit;
          if (x > y) {
            bit = x;
            x = y;
            y = bit;
          }
          bit = y;
          bit += y * y;
          bit >>= 1;
          bit += x;
          return bit;
        },
        _modN: function(x) {
          while (x >= 255) {
            x -= 255;
            x = (x >> 8) + (x & 255);
          }
          return x;
        },
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
      });
      var Frame_1 = Frame;
      var ImageRenderer = Renderer_1.extend({
        draw: function() {
          this.element.src = this.qrious.toDataURL();
        },
        reset: function() {
          this.element.src = "";
        },
        resize: function() {
          var element = this.element;
          element.width = element.height = this.qrious.size;
        }
      });
      var ImageRenderer_1 = ImageRenderer;
      var Option = lite.extend(function(name, modifiable, defaultValue, valueTransformer) {
        this.name = name;
        this.modifiable = Boolean(modifiable);
        this.defaultValue = defaultValue;
        this._valueTransformer = valueTransformer;
      }, {
        transform: function(value) {
          var transformer = this._valueTransformer;
          if (typeof transformer === "function") {
            return transformer(value, this);
          }
          return value;
        }
      });
      var Option_1 = Option;
      var Utilities = lite.extend(null, {
        abs: function(value) {
          return value != null ? Math.abs(value) : null;
        },
        hasOwn: function(object, name) {
          return Object.prototype.hasOwnProperty.call(object, name);
        },
        noop: function() {
        },
        toUpperCase: function(string) {
          return string != null ? string.toUpperCase() : null;
        }
      });
      var Utilities_1 = Utilities;
      var OptionManager = lite.extend(function(options) {
        this.options = {};
        options.forEach(function(option) {
          this.options[option.name] = option;
        }, this);
      }, {
        exists: function(name) {
          return this.options[name] != null;
        },
        get: function(name, target) {
          return OptionManager._get(this.options[name], target);
        },
        getAll: function(target) {
          var name;
          var options = this.options;
          var result = {};
          for (name in options) {
            if (Utilities_1.hasOwn(options, name)) {
              result[name] = OptionManager._get(options[name], target);
            }
          }
          return result;
        },
        init: function(options, target, changeHandler) {
          if (typeof changeHandler !== "function") {
            changeHandler = Utilities_1.noop;
          }
          var name, option;
          for (name in this.options) {
            if (Utilities_1.hasOwn(this.options, name)) {
              option = this.options[name];
              OptionManager._set(option, option.defaultValue, target);
              OptionManager._createAccessor(option, target, changeHandler);
            }
          }
          this._setAll(options, target, true);
        },
        set: function(name, value, target) {
          return this._set(name, value, target);
        },
        setAll: function(options, target) {
          return this._setAll(options, target);
        },
        _set: function(name, value, target, allowUnmodifiable) {
          var option = this.options[name];
          if (!option) {
            throw new Error("Invalid option: " + name);
          }
          if (!option.modifiable && !allowUnmodifiable) {
            throw new Error("Option cannot be modified: " + name);
          }
          return OptionManager._set(option, value, target);
        },
        _setAll: function(options, target, allowUnmodifiable) {
          if (!options) {
            return false;
          }
          var name;
          var changed = false;
          for (name in options) {
            if (Utilities_1.hasOwn(options, name) && this._set(name, options[name], target, allowUnmodifiable)) {
              changed = true;
            }
          }
          return changed;
        }
      }, {
        _createAccessor: function(option, target, changeHandler) {
          var descriptor = {
            get: function() {
              return OptionManager._get(option, target);
            }
          };
          if (option.modifiable) {
            descriptor.set = function(value) {
              if (OptionManager._set(option, value, target)) {
                changeHandler(value, option);
              }
            };
          }
          Object.defineProperty(target, option.name, descriptor);
        },
        _get: function(option, target) {
          return target["_" + option.name];
        },
        _set: function(option, value, target) {
          var fieldName = "_" + option.name;
          var oldValue = target[fieldName];
          var newValue = option.transform(value != null ? value : option.defaultValue);
          target[fieldName] = newValue;
          return newValue !== oldValue;
        }
      });
      var OptionManager_1 = OptionManager;
      var ServiceManager = lite.extend(function() {
        this._services = {};
      }, {
        getService: function(name) {
          var service = this._services[name];
          if (!service) {
            throw new Error("Service is not being managed with name: " + name);
          }
          return service;
        },
        setService: function(name, service) {
          if (this._services[name]) {
            throw new Error("Service is already managed with name: " + name);
          }
          if (service) {
            this._services[name] = service;
          }
        }
      });
      var ServiceManager_1 = ServiceManager;
      var optionManager = new OptionManager_1([
        new Option_1("background", true, "white"),
        new Option_1("backgroundAlpha", true, 1, Utilities_1.abs),
        new Option_1("element"),
        new Option_1("foreground", true, "black"),
        new Option_1("foregroundAlpha", true, 1, Utilities_1.abs),
        new Option_1("level", true, "L", Utilities_1.toUpperCase),
        new Option_1("mime", true, "image/png"),
        new Option_1("padding", true, null, Utilities_1.abs),
        new Option_1("size", true, 100, Utilities_1.abs),
        new Option_1("value", true, "")
      ]);
      var serviceManager = new ServiceManager_1();
      var QRious3 = lite.extend(function(options) {
        optionManager.init(options, this, this.update.bind(this));
        var element = optionManager.get("element", this);
        var elementService = serviceManager.getService("element");
        var canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas();
        var image = element && elementService.isImage(element) ? element : elementService.createImage();
        this._canvasRenderer = new CanvasRenderer_1(this, canvas, true);
        this._imageRenderer = new ImageRenderer_1(this, image, image === element);
        this.update();
      }, {
        get: function() {
          return optionManager.getAll(this);
        },
        set: function(options) {
          if (optionManager.setAll(options, this)) {
            this.update();
          }
        },
        toDataURL: function(mime) {
          return this.canvas.toDataURL(mime || this.mime);
        },
        update: function() {
          var frame = new Frame_1({
            level: this.level,
            value: this.value
          });
          this._canvasRenderer.render(frame);
          this._imageRenderer.render(frame);
        }
      }, {
        use: function(service) {
          serviceManager.setService(service.getName(), service);
        }
      });
      Object.defineProperties(QRious3.prototype, {
        canvas: {
          get: function() {
            return this._canvasRenderer.getElement();
          }
        },
        image: {
          get: function() {
            return this._imageRenderer.getElement();
          }
        }
      });
      var QRious_1$2 = QRious3;
      var index = QRious_1$2;
      var Service = lite.extend({
        getName: function() {
        }
      });
      var Service_1 = Service;
      var ElementService = Service_1.extend({
        createCanvas: function() {
        },
        createImage: function() {
        },
        getName: function() {
          return "element";
        },
        isCanvas: function(element) {
        },
        isImage: function(element) {
        }
      });
      var ElementService_1 = ElementService;
      var BrowserElementService = ElementService_1.extend({
        createCanvas: function() {
          return document.createElement("canvas");
        },
        createImage: function() {
          return document.createElement("img");
        },
        isCanvas: function(element) {
          return element instanceof HTMLCanvasElement;
        },
        isImage: function(element) {
          return element instanceof HTMLImageElement;
        }
      });
      var BrowserElementService_1 = BrowserElementService;
      index.use(new BrowserElementService_1());
      var QRious_1 = index;
      return QRious_1;
    });
  }
});

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
        var Fragment12 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
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
        exports.Fragment = Fragment12;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
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
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject2(val) {
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
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
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
      var to = toObject2(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty2.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
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
      has5 = require_has();
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
    var has5;
    function checkPropTypes(typeSpecs, values4, location2, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has5(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values4, typeSpecName, componentName, location2, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location2 + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location2 + " type: " + error.message + (stack != null ? stack : "")
              );
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
    var has5 = require_has();
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
    module.exports = function(isValidElement7, throwOnDirectAccess) {
      var ITERATOR_SYMBOL2 = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL2 = "@@iterator";
      function getIteratorFn2(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL2 && maybeIterable[ITERATOR_SYMBOL2] || maybeIterable[FAUX_ITERATOR_SYMBOL2]);
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
      function is2(x, y) {
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
      function createChainableTypeChecker(validate2) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location2, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
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
            return validate2(props, propName, componentName, location2, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate2(props, propName, componentName, location2, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location2, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error = typeChecker(propValue, i2, componentName, location2, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeChecker() {
        function validate2(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          if (!isValidElement7(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeTypeChecker() {
        function validate2(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate2(props, propName, componentName, location2, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate2(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is2(propValue, expectedValues[i2])) {
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
        return createChainableTypeChecker(validate2);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location2, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has5(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate2(props, propName, componentName, location2, propFullName) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(props, propName, componentName, location2, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has5(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createNodeChecker() {
        function validate2(props, propName, componentName, location2, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function invalidValidatorError(componentName, location2, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location2 + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location2, propFullName) {
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
        return createChainableTypeChecker(validate2);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has5(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location2, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location2 + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
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
            if (propValue === null || isValidElement7(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn2(propValue);
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
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
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
                      case REACT_SERVER_CONTEXT_TYPE:
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
        var Fragment12 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
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
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment12;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
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
        exports.isSuspenseList = isSuspenseList;
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

// ../../node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "../../node_modules/lodash.debounce/index.js"(exports, module) {
    init_define_process();
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof self == "object" && self && self.Object === Object && self;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce4(func, wait2, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait2 = toNumber(wait2) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait2) : maxWait;
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
        timerId = setTimeout(timerExpired, wait2);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait2 - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait2 || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
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
            timerId = setTimeout(timerExpired, wait2);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait2);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
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
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce4;
  }
});

// ../../node_modules/lodash.throttle/index.js
var require_lodash2 = __commonJS({
  "../../node_modules/lodash.throttle/index.js"(exports, module) {
    init_define_process();
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof self == "object" && self && self.Object === Object && self;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce4(func, wait2, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait2 = toNumber(wait2) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait2) : maxWait;
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
        timerId = setTimeout(timerExpired, wait2);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait2 - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait2 || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
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
            timerId = setTimeout(timerExpired, wait2);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait2);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function throttle2(func, wait2, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce4(func, wait2, {
        "leading": leading,
        "maxWait": wait2,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
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
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = throttle2;
  }
});

// js/ws.ts
init_define_process();

// js/session.ts
init_define_process();

// ../../node_modules/immutable/dist/immutable.es.js
init_define_process();
var DELETE = "delete";
var SHIFT = 5;
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;
var NOT_SET = {};
function MakeRef() {
  return { value: false };
}
function SetRef(ref) {
  if (ref) {
    ref.value = true;
  }
}
function OwnerID() {
}
function ensureSize(iter) {
  if (iter.size === void 0) {
    iter.size = iter.__iterate(returnTrue);
  }
  return iter.size;
}
function wrapIndex(iter, index) {
  if (typeof index !== "number") {
    var uint32Index = index >>> 0;
    if ("" + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }
    index = uint32Index;
  }
  return index < 0 ? ensureSize(iter) + index : index;
}
function returnTrue() {
  return true;
}
function wholeSlice(begin, end2, size) {
  return (begin === 0 && !isNeg(begin) || size !== void 0 && begin <= -size) && (end2 === void 0 || size !== void 0 && end2 >= size);
}
function resolveBegin(begin, size) {
  return resolveIndex(begin, size, 0);
}
function resolveEnd(end2, size) {
  return resolveIndex(end2, size, size);
}
function resolveIndex(index, size, defaultIndex) {
  return index === void 0 ? defaultIndex : isNeg(index) ? size === Infinity ? size : Math.max(0, size + index) | 0 : size === void 0 || size === index ? index : Math.min(size, index) | 0;
}
function isNeg(value) {
  return value < 0 || value === 0 && 1 / value === -Infinity;
}
var IS_COLLECTION_SYMBOL = "@@__IMMUTABLE_ITERABLE__@@";
function isCollection(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}
var IS_KEYED_SYMBOL = "@@__IMMUTABLE_KEYED__@@";
function isKeyed(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}
var IS_INDEXED_SYMBOL = "@@__IMMUTABLE_INDEXED__@@";
function isIndexed(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}
function isAssociative(maybeAssociative) {
  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}
var Collection = function Collection2(value) {
  return isCollection(value) ? value : Seq(value);
};
var KeyedCollection = function(Collection3) {
  function KeyedCollection2(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }
  if (Collection3)
    KeyedCollection2.__proto__ = Collection3;
  KeyedCollection2.prototype = Object.create(Collection3 && Collection3.prototype);
  KeyedCollection2.prototype.constructor = KeyedCollection2;
  return KeyedCollection2;
}(Collection);
var IndexedCollection = function(Collection3) {
  function IndexedCollection2(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }
  if (Collection3)
    IndexedCollection2.__proto__ = Collection3;
  IndexedCollection2.prototype = Object.create(Collection3 && Collection3.prototype);
  IndexedCollection2.prototype.constructor = IndexedCollection2;
  return IndexedCollection2;
}(Collection);
var SetCollection = function(Collection3) {
  function SetCollection2(value) {
    return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
  }
  if (Collection3)
    SetCollection2.__proto__ = Collection3;
  SetCollection2.prototype = Object.create(Collection3 && Collection3.prototype);
  SetCollection2.prototype.constructor = SetCollection2;
  return SetCollection2;
}(Collection);
Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;
var IS_SEQ_SYMBOL = "@@__IMMUTABLE_SEQ__@@";
function isSeq(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}
var IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
function isRecord(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}
function isImmutable(maybeImmutable) {
  return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}
var IS_ORDERED_SYMBOL = "@@__IMMUTABLE_ORDERED__@@";
function isOrdered(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}
var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;
var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = "@@iterator";
var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
var Iterator = function Iterator2(next) {
  this.next = next;
};
Iterator.prototype.toString = function toString() {
  return "[Iterator]";
};
Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;
Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
  return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function() {
  return this;
};
function iteratorValue(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult ? iteratorResult.value = value : iteratorResult = {
    value,
    done: false
  };
  return iteratorResult;
}
function iteratorDone() {
  return { value: void 0, done: true };
}
function hasIterator(maybeIterable) {
  if (Array.isArray(maybeIterable)) {
    return true;
  }
  return !!getIteratorFn(maybeIterable);
}
function isIterator(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === "function";
}
function getIterator(iterable) {
  var iteratorFn = getIteratorFn(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}
function getIteratorFn(iterable) {
  var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === "function") {
    return iteratorFn;
  }
}
function isEntriesIterable(maybeIterable) {
  var iteratorFn = getIteratorFn(maybeIterable);
  return iteratorFn && iteratorFn === maybeIterable.entries;
}
function isKeysIterable(maybeIterable) {
  var iteratorFn = getIteratorFn(maybeIterable);
  return iteratorFn && iteratorFn === maybeIterable.keys;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isArrayLike(value) {
  if (Array.isArray(value) || typeof value === "string") {
    return true;
  }
  return value && typeof value === "object" && Number.isInteger(value.length) && value.length >= 0 && (value.length === 0 ? Object.keys(value).length === 1 : value.hasOwnProperty(value.length - 1));
}
var Seq = function(Collection3) {
  function Seq2(value) {
    return value === void 0 || value === null ? emptySequence() : isImmutable(value) ? value.toSeq() : seqFromValue(value);
  }
  if (Collection3)
    Seq2.__proto__ = Collection3;
  Seq2.prototype = Object.create(Collection3 && Collection3.prototype);
  Seq2.prototype.constructor = Seq2;
  Seq2.prototype.toSeq = function toSeq3() {
    return this;
  };
  Seq2.prototype.toString = function toString5() {
    return this.__toString("Seq {", "}");
  };
  Seq2.prototype.cacheResult = function cacheResult() {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  };
  Seq2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var cache2 = this._cache;
    if (cache2) {
      var size = cache2.length;
      var i2 = 0;
      while (i2 !== size) {
        var entry = cache2[reverse3 ? size - ++i2 : i2++];
        if (fn2(entry[1], entry[0], this) === false) {
          break;
        }
      }
      return i2;
    }
    return this.__iterateUncached(fn2, reverse3);
  };
  Seq2.prototype.__iterator = function __iterator2(type, reverse3) {
    var cache2 = this._cache;
    if (cache2) {
      var size = cache2.length;
      var i2 = 0;
      return new Iterator(function() {
        if (i2 === size) {
          return iteratorDone();
        }
        var entry = cache2[reverse3 ? size - ++i2 : i2++];
        return iteratorValue(type, entry[0], entry[1]);
      });
    }
    return this.__iteratorUncached(type, reverse3);
  };
  return Seq2;
}(Collection);
var KeyedSeq = function(Seq2) {
  function KeyedSeq2(value) {
    return value === void 0 || value === null ? emptySequence().toKeyedSeq() : isCollection(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : isRecord(value) ? value.toSeq() : keyedSeqFromValue(value);
  }
  if (Seq2)
    KeyedSeq2.__proto__ = Seq2;
  KeyedSeq2.prototype = Object.create(Seq2 && Seq2.prototype);
  KeyedSeq2.prototype.constructor = KeyedSeq2;
  KeyedSeq2.prototype.toKeyedSeq = function toKeyedSeq3() {
    return this;
  };
  return KeyedSeq2;
}(Seq);
var IndexedSeq = function(Seq2) {
  function IndexedSeq2(value) {
    return value === void 0 || value === null ? emptySequence() : isCollection(value) ? isKeyed(value) ? value.entrySeq() : value.toIndexedSeq() : isRecord(value) ? value.toSeq().entrySeq() : indexedSeqFromValue(value);
  }
  if (Seq2)
    IndexedSeq2.__proto__ = Seq2;
  IndexedSeq2.prototype = Object.create(Seq2 && Seq2.prototype);
  IndexedSeq2.prototype.constructor = IndexedSeq2;
  IndexedSeq2.of = function of() {
    return IndexedSeq2(arguments);
  };
  IndexedSeq2.prototype.toIndexedSeq = function toIndexedSeq2() {
    return this;
  };
  IndexedSeq2.prototype.toString = function toString5() {
    return this.__toString("Seq [", "]");
  };
  return IndexedSeq2;
}(Seq);
var SetSeq = function(Seq2) {
  function SetSeq2(value) {
    return (isCollection(value) && !isAssociative(value) ? value : IndexedSeq(value)).toSetSeq();
  }
  if (Seq2)
    SetSeq2.__proto__ = Seq2;
  SetSeq2.prototype = Object.create(Seq2 && Seq2.prototype);
  SetSeq2.prototype.constructor = SetSeq2;
  SetSeq2.of = function of() {
    return SetSeq2(arguments);
  };
  SetSeq2.prototype.toSetSeq = function toSetSeq2() {
    return this;
  };
  return SetSeq2;
}(Seq);
Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;
Seq.prototype[IS_SEQ_SYMBOL] = true;
var ArraySeq = function(IndexedSeq2) {
  function ArraySeq2(array) {
    this._array = array;
    this.size = array.length;
  }
  if (IndexedSeq2)
    ArraySeq2.__proto__ = IndexedSeq2;
  ArraySeq2.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
  ArraySeq2.prototype.constructor = ArraySeq2;
  ArraySeq2.prototype.get = function get11(index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };
  ArraySeq2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var array = this._array;
    var size = array.length;
    var i2 = 0;
    while (i2 !== size) {
      var ii = reverse3 ? size - ++i2 : i2++;
      if (fn2(array[ii], ii, this) === false) {
        break;
      }
    }
    return i2;
  };
  ArraySeq2.prototype.__iterator = function __iterator2(type, reverse3) {
    var array = this._array;
    var size = array.length;
    var i2 = 0;
    return new Iterator(function() {
      if (i2 === size) {
        return iteratorDone();
      }
      var ii = reverse3 ? size - ++i2 : i2++;
      return iteratorValue(type, ii, array[ii]);
    });
  };
  return ArraySeq2;
}(IndexedSeq);
var ObjectSeq = function(KeyedSeq2) {
  function ObjectSeq2(object) {
    var keys2 = Object.keys(object).concat(
      Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : []
    );
    this._object = object;
    this._keys = keys2;
    this.size = keys2.length;
  }
  if (KeyedSeq2)
    ObjectSeq2.__proto__ = KeyedSeq2;
  ObjectSeq2.prototype = Object.create(KeyedSeq2 && KeyedSeq2.prototype);
  ObjectSeq2.prototype.constructor = ObjectSeq2;
  ObjectSeq2.prototype.get = function get11(key, notSetValue) {
    if (notSetValue !== void 0 && !this.has(key)) {
      return notSetValue;
    }
    return this._object[key];
  };
  ObjectSeq2.prototype.has = function has5(key) {
    return hasOwnProperty.call(this._object, key);
  };
  ObjectSeq2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var object = this._object;
    var keys2 = this._keys;
    var size = keys2.length;
    var i2 = 0;
    while (i2 !== size) {
      var key = keys2[reverse3 ? size - ++i2 : i2++];
      if (fn2(object[key], key, this) === false) {
        break;
      }
    }
    return i2;
  };
  ObjectSeq2.prototype.__iterator = function __iterator2(type, reverse3) {
    var object = this._object;
    var keys2 = this._keys;
    var size = keys2.length;
    var i2 = 0;
    return new Iterator(function() {
      if (i2 === size) {
        return iteratorDone();
      }
      var key = keys2[reverse3 ? size - ++i2 : i2++];
      return iteratorValue(type, key, object[key]);
    });
  };
  return ObjectSeq2;
}(KeyedSeq);
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;
var CollectionSeq = function(IndexedSeq2) {
  function CollectionSeq2(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }
  if (IndexedSeq2)
    CollectionSeq2.__proto__ = IndexedSeq2;
  CollectionSeq2.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
  CollectionSeq2.prototype.constructor = CollectionSeq2;
  CollectionSeq2.prototype.__iterateUncached = function __iterateUncached(fn2, reverse3) {
    if (reverse3) {
      return this.cacheResult().__iterate(fn2, reverse3);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    var iterations = 0;
    if (isIterator(iterator)) {
      var step;
      while (!(step = iterator.next()).done) {
        if (fn2(step.value, iterations++, this) === false) {
          break;
        }
      }
    }
    return iterations;
  };
  CollectionSeq2.prototype.__iteratorUncached = function __iteratorUncached(type, reverse3) {
    if (reverse3) {
      return this.cacheResult().__iterator(type, reverse3);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }
    var iterations = 0;
    return new Iterator(function() {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };
  return CollectionSeq2;
}(IndexedSeq);
var EMPTY_SEQ;
function emptySequence() {
  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}
function keyedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq.fromEntrySeq();
  }
  if (typeof value === "object") {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    "Expected Array or collection object of [k, v] entries, or keyed object: " + value
  );
}
function indexedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  throw new TypeError(
    "Expected Array or collection object of values: " + value
  );
}
function seqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return isEntriesIterable(value) ? seq.fromEntrySeq() : isKeysIterable(value) ? seq.toSetSeq() : seq;
  }
  if (typeof value === "object") {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    "Expected Array or collection object of values, or keyed object: " + value
  );
}
function maybeIndexedSeqFromValue(value) {
  return isArrayLike(value) ? new ArraySeq(value) : hasIterator(value) ? new CollectionSeq(value) : void 0;
}
var IS_MAP_SYMBOL = "@@__IMMUTABLE_MAP__@@";
function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}
function isOrderedMap(maybeOrderedMap) {
  return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}
function isValueObject(maybeValue) {
  return Boolean(
    maybeValue && typeof maybeValue.equals === "function" && typeof maybeValue.hashCode === "function"
  );
}
function is(valueA, valueB) {
  if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
    return true;
  }
  if (!valueA || !valueB) {
    return false;
  }
  if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
  }
  return !!(isValueObject(valueA) && isValueObject(valueB) && valueA.equals(valueB));
}
var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul2(a, b) {
  a |= 0;
  b |= 0;
  var c = a & 65535;
  var d = b & 65535;
  return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
};
function smi(i32) {
  return i32 >>> 1 & 1073741824 | i32 & 3221225471;
}
var defaultValueOf = Object.prototype.valueOf;
function hash(o) {
  if (o == null) {
    return hashNullish(o);
  }
  if (typeof o.hashCode === "function") {
    return smi(o.hashCode(o));
  }
  var v = valueOf(o);
  if (v == null) {
    return hashNullish(v);
  }
  switch (typeof v) {
    case "boolean":
      return v ? 1108378657 : 1108378656;
    case "number":
      return hashNumber(v);
    case "string":
      return v.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(v) : hashString(v);
    case "object":
    case "function":
      return hashJSObj(v);
    case "symbol":
      return hashSymbol(v);
    default:
      if (typeof v.toString === "function") {
        return hashString(v.toString());
      }
      throw new Error("Value type " + typeof v + " cannot be hashed.");
  }
}
function hashNullish(nullish) {
  return nullish === null ? 1108378658 : 1108378659;
}
function hashNumber(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }
  var hash4 = n | 0;
  if (hash4 !== n) {
    hash4 ^= n * 4294967295;
  }
  while (n > 4294967295) {
    n /= 4294967295;
    hash4 ^= n;
  }
  return smi(hash4);
}
function cachedHashString(string) {
  var hashed = stringHashCache[string];
  if (hashed === void 0) {
    hashed = hashString(string);
    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
    }
    STRING_HASH_CACHE_SIZE++;
    stringHashCache[string] = hashed;
  }
  return hashed;
}
function hashString(string) {
  var hashed = 0;
  for (var ii = 0; ii < string.length; ii++) {
    hashed = 31 * hashed + string.charCodeAt(ii) | 0;
  }
  return smi(hashed);
}
function hashSymbol(sym) {
  var hashed = symbolMap[sym];
  if (hashed !== void 0) {
    return hashed;
  }
  hashed = nextHash();
  symbolMap[sym] = hashed;
  return hashed;
}
function hashJSObj(obj) {
  var hashed;
  if (usingWeakMap) {
    hashed = weakMap.get(obj);
    if (hashed !== void 0) {
      return hashed;
    }
  }
  hashed = obj[UID_HASH_KEY];
  if (hashed !== void 0) {
    return hashed;
  }
  if (!canDefineProperty) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
    if (hashed !== void 0) {
      return hashed;
    }
    hashed = getIENodeHash(obj);
    if (hashed !== void 0) {
      return hashed;
    }
  }
  hashed = nextHash();
  if (usingWeakMap) {
    weakMap.set(obj, hashed);
  } else if (isExtensible !== void 0 && isExtensible(obj) === false) {
    throw new Error("Non-extensible objects are not allowed as keys.");
  } else if (canDefineProperty) {
    Object.defineProperty(obj, UID_HASH_KEY, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed
    });
  } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
    obj.propertyIsEnumerable = function() {
      return this.constructor.prototype.propertyIsEnumerable.apply(
        this,
        arguments
      );
    };
    obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
  } else if (obj.nodeType !== void 0) {
    obj[UID_HASH_KEY] = hashed;
  } else {
    throw new Error("Unable to set a non-enumerable property on object.");
  }
  return hashed;
}
var isExtensible = Object.isExtensible;
var canDefineProperty = function() {
  try {
    Object.defineProperty({}, "@", {});
    return true;
  } catch (e) {
    return false;
  }
}();
function getIENodeHash(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1:
        return node.uniqueID;
      case 9:
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
}
function valueOf(obj) {
  return obj.valueOf !== defaultValueOf && typeof obj.valueOf === "function" ? obj.valueOf(obj) : obj;
}
function nextHash() {
  var nextHash2 = ++_objHashUID;
  if (_objHashUID & 1073741824) {
    _objHashUID = 0;
  }
  return nextHash2;
}
var usingWeakMap = typeof WeakMap === "function";
var weakMap;
if (usingWeakMap) {
  weakMap = /* @__PURE__ */ new WeakMap();
}
var symbolMap = /* @__PURE__ */ Object.create(null);
var _objHashUID = 0;
var UID_HASH_KEY = "__immutablehash__";
if (typeof Symbol === "function") {
  UID_HASH_KEY = Symbol(UID_HASH_KEY);
}
var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};
var ToKeyedSequence = function(KeyedSeq2) {
  function ToKeyedSequence2(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }
  if (KeyedSeq2)
    ToKeyedSequence2.__proto__ = KeyedSeq2;
  ToKeyedSequence2.prototype = Object.create(KeyedSeq2 && KeyedSeq2.prototype);
  ToKeyedSequence2.prototype.constructor = ToKeyedSequence2;
  ToKeyedSequence2.prototype.get = function get11(key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };
  ToKeyedSequence2.prototype.has = function has5(key) {
    return this._iter.has(key);
  };
  ToKeyedSequence2.prototype.valueSeq = function valueSeq2() {
    return this._iter.valueSeq();
  };
  ToKeyedSequence2.prototype.reverse = function reverse3() {
    var this$1$1 = this;
    var reversedSequence = reverseFactory(this, true);
    if (!this._useKeys) {
      reversedSequence.valueSeq = function() {
        return this$1$1._iter.toSeq().reverse();
      };
    }
    return reversedSequence;
  };
  ToKeyedSequence2.prototype.map = function map2(mapper, context) {
    var this$1$1 = this;
    var mappedSequence = mapFactory(this, mapper, context);
    if (!this._useKeys) {
      mappedSequence.valueSeq = function() {
        return this$1$1._iter.toSeq().map(mapper, context);
      };
    }
    return mappedSequence;
  };
  ToKeyedSequence2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var this$1$1 = this;
    return this._iter.__iterate(function(v, k) {
      return fn2(v, k, this$1$1);
    }, reverse3);
  };
  ToKeyedSequence2.prototype.__iterator = function __iterator2(type, reverse3) {
    return this._iter.__iterator(type, reverse3);
  };
  return ToKeyedSequence2;
}(KeyedSeq);
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;
var ToIndexedSequence = function(IndexedSeq2) {
  function ToIndexedSequence2(iter) {
    this._iter = iter;
    this.size = iter.size;
  }
  if (IndexedSeq2)
    ToIndexedSequence2.__proto__ = IndexedSeq2;
  ToIndexedSequence2.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
  ToIndexedSequence2.prototype.constructor = ToIndexedSequence2;
  ToIndexedSequence2.prototype.includes = function includes3(value) {
    return this._iter.includes(value);
  };
  ToIndexedSequence2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var this$1$1 = this;
    var i2 = 0;
    reverse3 && ensureSize(this);
    return this._iter.__iterate(
      function(v) {
        return fn2(v, reverse3 ? this$1$1.size - ++i2 : i2++, this$1$1);
      },
      reverse3
    );
  };
  ToIndexedSequence2.prototype.__iterator = function __iterator2(type, reverse3) {
    var this$1$1 = this;
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse3);
    var i2 = 0;
    reverse3 && ensureSize(this);
    return new Iterator(function() {
      var step = iterator.next();
      return step.done ? step : iteratorValue(
        type,
        reverse3 ? this$1$1.size - ++i2 : i2++,
        step.value,
        step
      );
    });
  };
  return ToIndexedSequence2;
}(IndexedSeq);
var ToSetSequence = function(SetSeq2) {
  function ToSetSequence2(iter) {
    this._iter = iter;
    this.size = iter.size;
  }
  if (SetSeq2)
    ToSetSequence2.__proto__ = SetSeq2;
  ToSetSequence2.prototype = Object.create(SetSeq2 && SetSeq2.prototype);
  ToSetSequence2.prototype.constructor = ToSetSequence2;
  ToSetSequence2.prototype.has = function has5(key) {
    return this._iter.includes(key);
  };
  ToSetSequence2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var this$1$1 = this;
    return this._iter.__iterate(function(v) {
      return fn2(v, v, this$1$1);
    }, reverse3);
  };
  ToSetSequence2.prototype.__iterator = function __iterator2(type, reverse3) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse3);
    return new Iterator(function() {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, step.value, step.value, step);
    });
  };
  return ToSetSequence2;
}(SetSeq);
var FromEntriesSequence = function(KeyedSeq2) {
  function FromEntriesSequence2(entries3) {
    this._iter = entries3;
    this.size = entries3.size;
  }
  if (KeyedSeq2)
    FromEntriesSequence2.__proto__ = KeyedSeq2;
  FromEntriesSequence2.prototype = Object.create(KeyedSeq2 && KeyedSeq2.prototype);
  FromEntriesSequence2.prototype.constructor = FromEntriesSequence2;
  FromEntriesSequence2.prototype.entrySeq = function entrySeq2() {
    return this._iter.toSeq();
  };
  FromEntriesSequence2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var this$1$1 = this;
    return this._iter.__iterate(function(entry) {
      if (entry) {
        validateEntry(entry);
        var indexedCollection = isCollection(entry);
        return fn2(
          indexedCollection ? entry.get(1) : entry[1],
          indexedCollection ? entry.get(0) : entry[0],
          this$1$1
        );
      }
    }, reverse3);
  };
  FromEntriesSequence2.prototype.__iterator = function __iterator2(type, reverse3) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse3);
    return new Iterator(function() {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return iteratorValue(
            type,
            indexedCollection ? entry.get(0) : entry[0],
            indexedCollection ? entry.get(1) : entry[1],
            step
          );
        }
      }
    });
  };
  return FromEntriesSequence2;
}(KeyedSeq);
ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
function flipFactory(collection) {
  var flipSequence = makeSequence(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;
  flipSequence.flip = function() {
    return collection;
  };
  flipSequence.reverse = function() {
    var reversedSequence = collection.reverse.apply(this);
    reversedSequence.flip = function() {
      return collection.reverse();
    };
    return reversedSequence;
  };
  flipSequence.has = function(key) {
    return collection.includes(key);
  };
  flipSequence.includes = function(key) {
    return collection.has(key);
  };
  flipSequence.cacheResult = cacheResultThrough;
  flipSequence.__iterateUncached = function(fn2, reverse3) {
    var this$1$1 = this;
    return collection.__iterate(function(v, k) {
      return fn2(k, v, this$1$1) !== false;
    }, reverse3);
  };
  flipSequence.__iteratorUncached = function(type, reverse3) {
    if (type === ITERATE_ENTRIES) {
      var iterator = collection.__iterator(type, reverse3);
      return new Iterator(function() {
        var step = iterator.next();
        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }
        return step;
      });
    }
    return collection.__iterator(
      type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
      reverse3
    );
  };
  return flipSequence;
}
function mapFactory(collection, mapper, context) {
  var mappedSequence = makeSequence(collection);
  mappedSequence.size = collection.size;
  mappedSequence.has = function(key) {
    return collection.has(key);
  };
  mappedSequence.get = function(key, notSetValue) {
    var v = collection.get(key, NOT_SET);
    return v === NOT_SET ? notSetValue : mapper.call(context, v, key, collection);
  };
  mappedSequence.__iterateUncached = function(fn2, reverse3) {
    var this$1$1 = this;
    return collection.__iterate(
      function(v, k, c) {
        return fn2(mapper.call(context, v, k, c), k, this$1$1) !== false;
      },
      reverse3
    );
  };
  mappedSequence.__iteratorUncached = function(type, reverse3) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse3);
    return new Iterator(function() {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var key = entry[0];
      return iteratorValue(
        type,
        key,
        mapper.call(context, entry[1], key, collection),
        step
      );
    });
  };
  return mappedSequence;
}
function reverseFactory(collection, useKeys) {
  var this$1$1 = this;
  var reversedSequence = makeSequence(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;
  reversedSequence.reverse = function() {
    return collection;
  };
  if (collection.flip) {
    reversedSequence.flip = function() {
      var flipSequence = flipFactory(collection);
      flipSequence.reverse = function() {
        return collection.flip();
      };
      return flipSequence;
    };
  }
  reversedSequence.get = function(key, notSetValue) {
    return collection.get(useKeys ? key : -1 - key, notSetValue);
  };
  reversedSequence.has = function(key) {
    return collection.has(useKeys ? key : -1 - key);
  };
  reversedSequence.includes = function(value) {
    return collection.includes(value);
  };
  reversedSequence.cacheResult = cacheResultThrough;
  reversedSequence.__iterate = function(fn2, reverse3) {
    var this$1$12 = this;
    var i2 = 0;
    reverse3 && ensureSize(collection);
    return collection.__iterate(
      function(v, k) {
        return fn2(v, useKeys ? k : reverse3 ? this$1$12.size - ++i2 : i2++, this$1$12);
      },
      !reverse3
    );
  };
  reversedSequence.__iterator = function(type, reverse3) {
    var i2 = 0;
    reverse3 && ensureSize(collection);
    var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse3);
    return new Iterator(function() {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      return iteratorValue(
        type,
        useKeys ? entry[0] : reverse3 ? this$1$1.size - ++i2 : i2++,
        entry[1],
        step
      );
    });
  };
  return reversedSequence;
}
function filterFactory(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence(collection);
  if (useKeys) {
    filterSequence.has = function(key) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, collection);
    };
    filterSequence.get = function(key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, collection) ? v : notSetValue;
    };
  }
  filterSequence.__iterateUncached = function(fn2, reverse3) {
    var this$1$1 = this;
    var iterations = 0;
    collection.__iterate(function(v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn2(v, useKeys ? k : iterations - 1, this$1$1);
      }
    }, reverse3);
    return iterations;
  };
  filterSequence.__iteratorUncached = function(type, reverse3) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse3);
    var iterations = 0;
    return new Iterator(function() {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        var value = entry[1];
        if (predicate.call(context, value, key, collection)) {
          return iteratorValue(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };
  return filterSequence;
}
function countByFactory(collection, grouper, context) {
  var groups = Map2().asMutable();
  collection.__iterate(function(v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function(a) {
      return a + 1;
    });
  });
  return groups.asImmutable();
}
function groupByFactory(collection, grouper, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = (isOrdered(collection) ? OrderedMap() : Map2()).asMutable();
  collection.__iterate(function(v, k) {
    groups.update(
      grouper.call(context, v, k, collection),
      function(a) {
        return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
      }
    );
  });
  var coerce = collectionClass(collection);
  return groups.map(function(arr) {
    return reify(collection, coerce(arr));
  }).asImmutable();
}
function sliceFactory(collection, begin, end2, useKeys) {
  var originalSize = collection.size;
  if (wholeSlice(begin, end2, originalSize)) {
    return collection;
  }
  var resolvedBegin = resolveBegin(begin, originalSize);
  var resolvedEnd = resolveEnd(end2, originalSize);
  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory(collection.toSeq().cacheResult(), begin, end2, useKeys);
  }
  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;
  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }
  var sliceSeq = makeSequence(collection);
  sliceSeq.size = sliceSize === 0 ? sliceSize : collection.size && sliceSize || void 0;
  if (!useKeys && isSeq(collection) && sliceSize >= 0) {
    sliceSeq.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      return index >= 0 && index < sliceSize ? collection.get(index + resolvedBegin, notSetValue) : notSetValue;
    };
  }
  sliceSeq.__iterateUncached = function(fn2, reverse3) {
    var this$1$1 = this;
    if (sliceSize === 0) {
      return 0;
    }
    if (reverse3) {
      return this.cacheResult().__iterate(fn2, reverse3);
    }
    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function(v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return fn2(v, useKeys ? k : iterations - 1, this$1$1) !== false && iterations !== sliceSize;
      }
    });
    return iterations;
  };
  sliceSeq.__iteratorUncached = function(type, reverse3) {
    if (sliceSize !== 0 && reverse3) {
      return this.cacheResult().__iterator(type, reverse3);
    }
    if (sliceSize === 0) {
      return new Iterator(iteratorDone);
    }
    var iterator = collection.__iterator(type, reverse3);
    var skipped = 0;
    var iterations = 0;
    return new Iterator(function() {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }
      if (++iterations > sliceSize) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (useKeys || type === ITERATE_VALUES || step.done) {
        return step;
      }
      if (type === ITERATE_KEYS) {
        return iteratorValue(type, iterations - 1, void 0, step);
      }
      return iteratorValue(type, iterations - 1, step.value[1], step);
    });
  };
  return sliceSeq;
}
function takeWhileFactory(collection, predicate, context) {
  var takeSequence = makeSequence(collection);
  takeSequence.__iterateUncached = function(fn2, reverse3) {
    var this$1$1 = this;
    if (reverse3) {
      return this.cacheResult().__iterate(fn2, reverse3);
    }
    var iterations = 0;
    collection.__iterate(
      function(v, k, c) {
        return predicate.call(context, v, k, c) && ++iterations && fn2(v, k, this$1$1);
      }
    );
    return iterations;
  };
  takeSequence.__iteratorUncached = function(type, reverse3) {
    var this$1$1 = this;
    if (reverse3) {
      return this.cacheResult().__iterator(type, reverse3);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse3);
    var iterating = true;
    return new Iterator(function() {
      if (!iterating) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var k = entry[0];
      var v = entry[1];
      if (!predicate.call(context, v, k, this$1$1)) {
        iterating = false;
        return iteratorDone();
      }
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return takeSequence;
}
function skipWhileFactory(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence(collection);
  skipSequence.__iterateUncached = function(fn2, reverse3) {
    var this$1$1 = this;
    if (reverse3) {
      return this.cacheResult().__iterate(fn2, reverse3);
    }
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function(v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn2(v, useKeys ? k : iterations - 1, this$1$1);
      }
    });
    return iterations;
  };
  skipSequence.__iteratorUncached = function(type, reverse3) {
    var this$1$1 = this;
    if (reverse3) {
      return this.cacheResult().__iterator(type, reverse3);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse3);
    var skipping = true;
    var iterations = 0;
    return new Iterator(function() {
      var step;
      var k;
      var v;
      do {
        step = iterator.next();
        if (step.done) {
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          }
          if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations++, void 0, step);
          }
          return iteratorValue(type, iterations++, step.value[1], step);
        }
        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1$1));
      } while (skipping);
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return skipSequence;
}
function concatFactory(collection, values4) {
  var isKeyedCollection = isKeyed(collection);
  var iters = [collection].concat(values4).map(function(v) {
    if (!isCollection(v)) {
      v = isKeyedCollection ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
    } else if (isKeyedCollection) {
      v = KeyedCollection(v);
    }
    return v;
  }).filter(function(v) {
    return v.size !== 0;
  });
  if (iters.length === 0) {
    return collection;
  }
  if (iters.length === 1) {
    var singleton = iters[0];
    if (singleton === collection || isKeyedCollection && isKeyed(singleton) || isIndexed(collection) && isIndexed(singleton)) {
      return singleton;
    }
  }
  var concatSeq = new ArraySeq(iters);
  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }
  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function(sum, seq) {
    if (sum !== void 0) {
      var size = seq.size;
      if (size !== void 0) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}
function flattenFactory(collection, depth, useKeys) {
  var flatSequence = makeSequence(collection);
  flatSequence.__iterateUncached = function(fn2, reverse3) {
    if (reverse3) {
      return this.cacheResult().__iterate(fn2, reverse3);
    }
    var iterations = 0;
    var stopped = false;
    function flatDeep(iter, currentDepth) {
      iter.__iterate(function(v, k) {
        if ((!depth || currentDepth < depth) && isCollection(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;
          if (fn2(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }
        return !stopped;
      }, reverse3);
    }
    flatDeep(collection, 0);
    return iterations;
  };
  flatSequence.__iteratorUncached = function(type, reverse3) {
    if (reverse3) {
      return this.cacheResult().__iterator(type, reverse3);
    }
    var iterator = collection.__iterator(type, reverse3);
    var stack = [];
    var iterations = 0;
    return new Iterator(function() {
      while (iterator) {
        var step = iterator.next();
        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }
        var v = step.value;
        if (type === ITERATE_ENTRIES) {
          v = v[1];
        }
        if ((!depth || stack.length < depth) && isCollection(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse3);
        } else {
          return useKeys ? step : iteratorValue(type, iterations++, v, step);
        }
      }
      return iteratorDone();
    });
  };
  return flatSequence;
}
function flatMapFactory(collection, mapper, context) {
  var coerce = collectionClass(collection);
  return collection.toSeq().map(function(v, k) {
    return coerce(mapper.call(context, v, k, collection));
  }).flatten(true);
}
function interposeFactory(collection, separator) {
  var interposedSequence = makeSequence(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;
  interposedSequence.__iterateUncached = function(fn2, reverse3) {
    var this$1$1 = this;
    var iterations = 0;
    collection.__iterate(
      function(v) {
        return (!iterations || fn2(separator, iterations++, this$1$1) !== false) && fn2(v, iterations++, this$1$1) !== false;
      },
      reverse3
    );
    return iterations;
  };
  interposedSequence.__iteratorUncached = function(type, reverse3) {
    var iterator = collection.__iterator(ITERATE_VALUES, reverse3);
    var iterations = 0;
    var step;
    return new Iterator(function() {
      if (!step || iterations % 2) {
        step = iterator.next();
        if (step.done) {
          return step;
        }
      }
      return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
    });
  };
  return interposedSequence;
}
function sortFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries3 = collection.toSeq().map(function(v, k) {
    return [k, v, index++, mapper ? mapper(v, k, collection) : v];
  }).valueSeq().toArray();
  entries3.sort(function(a, b) {
    return comparator(a[3], b[3]) || a[2] - b[2];
  }).forEach(
    isKeyedCollection ? function(v, i2) {
      entries3[i2].length = 2;
    } : function(v, i2) {
      entries3[i2] = v[1];
    }
  );
  return isKeyedCollection ? KeyedSeq(entries3) : isIndexed(collection) ? IndexedSeq(entries3) : SetSeq(entries3);
}
function maxFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  if (mapper) {
    var entry = collection.toSeq().map(function(v, k) {
      return [v, mapper(v, k, collection)];
    }).reduce(function(a, b) {
      return maxCompare(comparator, a[1], b[1]) ? b : a;
    });
    return entry && entry[0];
  }
  return collection.reduce(function(a, b) {
    return maxCompare(comparator, a, b) ? b : a;
  });
}
function maxCompare(comparator, a, b) {
  var comp = comparator(b, a);
  return comp === 0 && b !== a && (b === void 0 || b === null || b !== b) || comp > 0;
}
function zipWithFactory(keyIter, zipper, iters, zipAll2) {
  var zipSequence = makeSequence(keyIter);
  var sizes2 = new ArraySeq(iters).map(function(i2) {
    return i2.size;
  });
  zipSequence.size = zipAll2 ? sizes2.max() : sizes2.min();
  zipSequence.__iterate = function(fn2, reverse3) {
    var iterator = this.__iterator(ITERATE_VALUES, reverse3);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      if (fn2(step.value, iterations++, this) === false) {
        break;
      }
    }
    return iterations;
  };
  zipSequence.__iteratorUncached = function(type, reverse3) {
    var iterators = iters.map(
      function(i2) {
        return i2 = Collection(i2), getIterator(reverse3 ? i2.reverse() : i2);
      }
    );
    var iterations = 0;
    var isDone = false;
    return new Iterator(function() {
      var steps;
      if (!isDone) {
        steps = iterators.map(function(i2) {
          return i2.next();
        });
        isDone = zipAll2 ? steps.every(function(s) {
          return s.done;
        }) : steps.some(function(s) {
          return s.done;
        });
      }
      if (isDone) {
        return iteratorDone();
      }
      return iteratorValue(
        type,
        iterations++,
        zipper.apply(
          null,
          steps.map(function(s) {
            return s.value;
          })
        )
      );
    });
  };
  return zipSequence;
}
function reify(iter, seq) {
  return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}
function validateEntry(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError("Expected [K, V] tuple: " + entry);
  }
}
function collectionClass(collection) {
  return isKeyed(collection) ? KeyedCollection : isIndexed(collection) ? IndexedCollection : SetCollection;
}
function makeSequence(collection) {
  return Object.create(
    (isKeyed(collection) ? KeyedSeq : isIndexed(collection) ? IndexedSeq : SetSeq).prototype
  );
}
function cacheResultThrough() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();
    this.size = this._iter.size;
    return this;
  }
  return Seq.prototype.cacheResult.call(this);
}
function defaultComparator(a, b) {
  if (a === void 0 && b === void 0) {
    return 0;
  }
  if (a === void 0) {
    return 1;
  }
  if (b === void 0) {
    return -1;
  }
  return a > b ? 1 : a < b ? -1 : 0;
}
function arrCopy(arr, offset2) {
  offset2 = offset2 || 0;
  var len = Math.max(0, arr.length - offset2);
  var newArr = new Array(len);
  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset2];
  }
  return newArr;
}
function invariant(condition, error) {
  if (!condition) {
    throw new Error(error);
  }
}
function assertNotInfinite(size) {
  invariant(
    size !== Infinity,
    "Cannot perform this action with an infinite size."
  );
}
function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== "string") {
    return keyPath;
  }
  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    "Invalid keyPath: expected Ordered Collection or Array: " + keyPath
  );
}
var toString2 = Object.prototype.toString;
function isPlainObject(value) {
  if (!value || typeof value !== "object" || toString2.call(value) !== "[object Object]") {
    return false;
  }
  var proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  var parentProto = proto;
  var nextProto = Object.getPrototypeOf(proto);
  while (nextProto !== null) {
    parentProto = nextProto;
    nextProto = Object.getPrototypeOf(parentProto);
  }
  return parentProto === proto;
}
function isDataStructure(value) {
  return typeof value === "object" && (isImmutable(value) || Array.isArray(value) || isPlainObject(value));
}
function quoteString(value) {
  try {
    return typeof value === "string" ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}
function has(collection, key) {
  return isImmutable(collection) ? collection.has(key) : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}
function get(collection, key, notSetValue) {
  return isImmutable(collection) ? collection.get(key, notSetValue) : !has(collection, key) ? notSetValue : typeof collection.get === "function" ? collection.get(key) : collection[key];
}
function shallowCopy(from) {
  if (Array.isArray(from)) {
    return arrCopy(from);
  }
  var to = {};
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      to[key] = from[key];
    }
  }
  return to;
}
function remove(collection, key) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      "Cannot update non-data-structure value: " + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.remove) {
      throw new TypeError(
        "Cannot update immutable value without .remove() method: " + collection
      );
    }
    return collection.remove(key);
  }
  if (!hasOwnProperty.call(collection, key)) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }
  return collectionCopy;
}
function set(collection, key, value) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      "Cannot update non-data-structure value: " + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.set) {
      throw new TypeError(
        "Cannot update immutable value without .set() method: " + collection
      );
    }
    return collection.set(key, value);
  }
  if (hasOwnProperty.call(collection, key) && value === collection[key]) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}
function updateIn$1(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = void 0;
  }
  var updatedValue = updateInDeeply(
    isImmutable(collection),
    collection,
    coerceKeyPath(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}
function updateInDeeply(inImmutable, existing, keyPath, i2, notSetValue, updater) {
  var wasNotSet = existing === NOT_SET;
  if (i2 === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError(
      "Cannot update within non-data-structure value in path [" + keyPath.slice(0, i2).map(quoteString) + "]: " + existing
    );
  }
  var key = keyPath[i2];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(
    nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
    nextExisting,
    keyPath,
    i2 + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? remove(existing, key) : set(
    wasNotSet ? inImmutable ? emptyMap() : {} : existing,
    key,
    nextUpdated
  );
}
function setIn$1(collection, keyPath, value) {
  return updateIn$1(collection, keyPath, NOT_SET, function() {
    return value;
  });
}
function setIn(keyPath, v) {
  return setIn$1(this, keyPath, v);
}
function removeIn(collection, keyPath) {
  return updateIn$1(collection, keyPath, function() {
    return NOT_SET;
  });
}
function deleteIn(keyPath) {
  return removeIn(this, keyPath);
}
function update$1(collection, key, notSetValue, updater) {
  return updateIn$1(collection, [key], notSetValue, updater);
}
function update(key, notSetValue, updater) {
  return arguments.length === 1 ? key(this) : update$1(this, key, notSetValue, updater);
}
function updateIn(keyPath, notSetValue, updater) {
  return updateIn$1(this, keyPath, notSetValue, updater);
}
function merge$1() {
  var iters = [], len = arguments.length;
  while (len--)
    iters[len] = arguments[len];
  return mergeIntoKeyedWith(this, iters);
}
function mergeWith$1(merger) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  if (typeof merger !== "function") {
    throw new TypeError("Invalid merger function: " + merger);
  }
  return mergeIntoKeyedWith(this, iters, merger);
}
function mergeIntoKeyedWith(collection, collections, merger) {
  var iters = [];
  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection(collections[ii]);
    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }
  if (iters.length === 0) {
    return collection;
  }
  if (collection.toSeq().size === 0 && !collection.__ownerID && iters.length === 1) {
    return collection.constructor(iters[0]);
  }
  return collection.withMutations(function(collection2) {
    var mergeIntoCollection = merger ? function(value, key) {
      update$1(
        collection2,
        key,
        NOT_SET,
        function(oldVal) {
          return oldVal === NOT_SET ? value : merger(oldVal, value, key);
        }
      );
    } : function(value, key) {
      collection2.set(key, value);
    };
    for (var ii2 = 0; ii2 < iters.length; ii2++) {
      iters[ii2].forEach(mergeIntoCollection);
    }
  });
}
function mergeDeepWithSources(collection, sources, merger) {
  return mergeWithSources(collection, sources, deepMergerWith(merger));
}
function mergeWithSources(collection, sources, merger) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      "Cannot merge into non-data-structure value: " + collection
    );
  }
  if (isImmutable(collection)) {
    return typeof merger === "function" && collection.mergeWith ? collection.mergeWith.apply(collection, [merger].concat(sources)) : collection.merge ? collection.merge.apply(collection, sources) : collection.concat.apply(collection, sources);
  }
  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection3 = isArray ? IndexedCollection : KeyedCollection;
  var mergeItem = isArray ? function(value) {
    if (merged === collection) {
      merged = shallowCopy(merged);
    }
    merged.push(value);
  } : function(value, key) {
    var hasVal = hasOwnProperty.call(merged, key);
    var nextVal = hasVal && merger ? merger(merged[key], value, key) : value;
    if (!hasVal || nextVal !== merged[key]) {
      if (merged === collection) {
        merged = shallowCopy(merged);
      }
      merged[key] = nextVal;
    }
  };
  for (var i2 = 0; i2 < sources.length; i2++) {
    Collection3(sources[i2]).forEach(mergeItem);
  }
  return merged;
}
function deepMergerWith(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure(oldValue) && isDataStructure(newValue) && areMergeable(oldValue, newValue) ? mergeWithSources(oldValue, [newValue], deepMerger) : merger ? merger(oldValue, newValue, key) : newValue;
  }
  return deepMerger;
}
function areMergeable(oldDataStructure, newDataStructure) {
  var oldSeq = Seq(oldDataStructure);
  var newSeq = Seq(newDataStructure);
  return isIndexed(oldSeq) === isIndexed(newSeq) && isKeyed(oldSeq) === isKeyed(newSeq);
}
function mergeDeep() {
  var iters = [], len = arguments.length;
  while (len--)
    iters[len] = arguments[len];
  return mergeDeepWithSources(this, iters);
}
function mergeDeepWith(merger) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  return mergeDeepWithSources(this, iters, merger);
}
function mergeIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  return updateIn$1(this, keyPath, emptyMap(), function(m2) {
    return mergeWithSources(m2, iters);
  });
}
function mergeDeepIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while (len-- > 0)
    iters[len] = arguments[len + 1];
  return updateIn$1(
    this,
    keyPath,
    emptyMap(),
    function(m2) {
      return mergeDeepWithSources(m2, iters);
    }
  );
}
function withMutations(fn2) {
  var mutable = this.asMutable();
  fn2(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}
function asMutable() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}
function asImmutable() {
  return this.__ensureOwner();
}
function wasAltered() {
  return this.__altered;
}
var Map2 = function(KeyedCollection2) {
  function Map3(value) {
    return value === void 0 || value === null ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map2) {
      var iter = KeyedCollection2(value);
      assertNotInfinite(iter.size);
      iter.forEach(function(v, k) {
        return map2.set(k, v);
      });
    });
  }
  if (KeyedCollection2)
    Map3.__proto__ = KeyedCollection2;
  Map3.prototype = Object.create(KeyedCollection2 && KeyedCollection2.prototype);
  Map3.prototype.constructor = Map3;
  Map3.of = function of() {
    var keyValues = [], len = arguments.length;
    while (len--)
      keyValues[len] = arguments[len];
    return emptyMap().withMutations(function(map2) {
      for (var i2 = 0; i2 < keyValues.length; i2 += 2) {
        if (i2 + 1 >= keyValues.length) {
          throw new Error("Missing value for key: " + keyValues[i2]);
        }
        map2.set(keyValues[i2], keyValues[i2 + 1]);
      }
    });
  };
  Map3.prototype.toString = function toString5() {
    return this.__toString("Map {", "}");
  };
  Map3.prototype.get = function get11(k, notSetValue) {
    return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
  };
  Map3.prototype.set = function set3(k, v) {
    return updateMap(this, k, v);
  };
  Map3.prototype.remove = function remove3(k) {
    return updateMap(this, k, NOT_SET);
  };
  Map3.prototype.deleteAll = function deleteAll(keys2) {
    var collection = Collection(keys2);
    if (collection.size === 0) {
      return this;
    }
    return this.withMutations(function(map2) {
      collection.forEach(function(key) {
        return map2.remove(key);
      });
    });
  };
  Map3.prototype.clear = function clear2() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return emptyMap();
  };
  Map3.prototype.sort = function sort2(comparator) {
    return OrderedMap(sortFactory(this, comparator));
  };
  Map3.prototype.sortBy = function sortBy2(mapper, comparator) {
    return OrderedMap(sortFactory(this, comparator, mapper));
  };
  Map3.prototype.map = function map2(mapper, context) {
    var this$1$1 = this;
    return this.withMutations(function(map3) {
      map3.forEach(function(value, key) {
        map3.set(key, mapper.call(context, value, key, this$1$1));
      });
    });
  };
  Map3.prototype.__iterator = function __iterator2(type, reverse3) {
    return new MapIterator(this, type, reverse3);
  };
  Map3.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var this$1$1 = this;
    var iterations = 0;
    this._root && this._root.iterate(function(entry) {
      iterations++;
      return fn2(entry[1], entry[0], this$1$1);
    }, reverse3);
    return iterations;
  };
  Map3.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeMap(this.size, this._root, ownerID, this.__hash);
  };
  return Map3;
}(KeyedCollection);
Map2.isMap = isMap;
var MapPrototype = Map2.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update;
MapPrototype.updateIn = updateIn;
MapPrototype.merge = MapPrototype.concat = merge$1;
MapPrototype.mergeWith = mergeWith$1;
MapPrototype.mergeDeep = mergeDeep;
MapPrototype.mergeDeepWith = mergeDeepWith;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype["@@transducer/init"] = MapPrototype.asMutable = asMutable;
MapPrototype["@@transducer/step"] = function(result, arr) {
  return result.set(arr[0], arr[1]);
};
MapPrototype["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
var ArrayMapNode = function ArrayMapNode2(ownerID, entries3) {
  this.ownerID = ownerID;
  this.entries = entries3;
};
ArrayMapNode.prototype.get = function get2(shift, keyHash, key, notSetValue) {
  var entries3 = this.entries;
  for (var ii = 0, len = entries3.length; ii < len; ii++) {
    if (is(key, entries3[ii][0])) {
      return entries3[ii][1];
    }
  }
  return notSetValue;
};
ArrayMapNode.prototype.update = function update2(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var entries3 = this.entries;
  var idx = 0;
  var len = entries3.length;
  for (; idx < len; idx++) {
    if (is(key, entries3[idx][0])) {
      break;
    }
  }
  var exists = idx < len;
  if (exists ? entries3[idx][1] === value : removed) {
    return this;
  }
  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);
  if (removed && entries3.length === 1) {
    return;
  }
  if (!exists && !removed && entries3.length >= MAX_ARRAY_MAP_SIZE) {
    return createNodes(ownerID, entries3, key, value);
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries3 : arrCopy(entries3);
  if (exists) {
    if (removed) {
      idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }
  if (isEditable) {
    this.entries = newEntries;
    return this;
  }
  return new ArrayMapNode(ownerID, newEntries);
};
var BitmapIndexedNode = function BitmapIndexedNode2(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
};
BitmapIndexedNode.prototype.get = function get3(shift, keyHash, key, notSetValue) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(
    shift + SHIFT,
    keyHash,
    key,
    notSetValue
  );
};
BitmapIndexedNode.prototype.update = function update3(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;
  if (!exists && value === NOT_SET) {
    return this;
  }
  var idx = popCount(bitmap & bit - 1);
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : void 0;
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }
  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
    return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }
  if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
    return nodes[idx ^ 1];
  }
  if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
    return newNode;
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
  var newNodes = exists ? newNode ? setAt(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }
  return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};
var HashArrayMapNode = function HashArrayMapNode2(ownerID, count2, nodes) {
  this.ownerID = ownerID;
  this.count = count2;
  this.nodes = nodes;
};
HashArrayMapNode.prototype.get = function get4(shift, keyHash, key, notSetValue) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var node = this.nodes[idx];
  return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
};
HashArrayMapNode.prototype.update = function update4(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var removed = value === NOT_SET;
  var nodes = this.nodes;
  var node = nodes[idx];
  if (removed && !node) {
    return this;
  }
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }
  var newCount = this.count;
  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;
    if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
      return packNodes(ownerID, nodes, newCount, idx);
    }
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt(nodes, idx, newNode, isEditable);
  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }
  return new HashArrayMapNode(ownerID, newCount, newNodes);
};
var HashCollisionNode = function HashCollisionNode2(ownerID, keyHash, entries3) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries3;
};
HashCollisionNode.prototype.get = function get5(shift, keyHash, key, notSetValue) {
  var entries3 = this.entries;
  for (var ii = 0, len = entries3.length; ii < len; ii++) {
    if (is(key, entries3[ii][0])) {
      return entries3[ii][1];
    }
  }
  return notSetValue;
};
HashCollisionNode.prototype.update = function update5(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === void 0) {
    keyHash = hash(key);
  }
  var removed = value === NOT_SET;
  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
  }
  var entries3 = this.entries;
  var idx = 0;
  var len = entries3.length;
  for (; idx < len; idx++) {
    if (is(key, entries3[idx][0])) {
      break;
    }
  }
  var exists = idx < len;
  if (exists ? entries3[idx][1] === value : removed) {
    return this;
  }
  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);
  if (removed && len === 2) {
    return new ValueNode(ownerID, this.keyHash, entries3[idx ^ 1]);
  }
  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries3 : arrCopy(entries3);
  if (exists) {
    if (removed) {
      idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }
  if (isEditable) {
    this.entries = newEntries;
    return this;
  }
  return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};
var ValueNode = function ValueNode2(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
};
ValueNode.prototype.get = function get6(shift, keyHash, key, notSetValue) {
  return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};
ValueNode.prototype.update = function update6(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var keyMatch = is(key, this.entry[0]);
  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }
  SetRef(didAlter);
  if (removed) {
    SetRef(didChangeSize);
    return;
  }
  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }
    return new ValueNode(ownerID, this.keyHash, [key, value]);
  }
  SetRef(didChangeSize);
  return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
};
ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn2, reverse3) {
  var entries3 = this.entries;
  for (var ii = 0, maxIndex = entries3.length - 1; ii <= maxIndex; ii++) {
    if (fn2(entries3[reverse3 ? maxIndex - ii : ii]) === false) {
      return false;
    }
  }
};
BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn2, reverse3) {
  var nodes = this.nodes;
  for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
    var node = nodes[reverse3 ? maxIndex - ii : ii];
    if (node && node.iterate(fn2, reverse3) === false) {
      return false;
    }
  }
};
ValueNode.prototype.iterate = function(fn2, reverse3) {
  return fn2(this.entry);
};
var MapIterator = function(Iterator3) {
  function MapIterator2(map2, type, reverse3) {
    this._type = type;
    this._reverse = reverse3;
    this._stack = map2._root && mapIteratorFrame(map2._root);
  }
  if (Iterator3)
    MapIterator2.__proto__ = Iterator3;
  MapIterator2.prototype = Object.create(Iterator3 && Iterator3.prototype);
  MapIterator2.prototype.constructor = MapIterator2;
  MapIterator2.prototype.next = function next() {
    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = void 0;
      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;
        if (index <= maxIndex) {
          return mapIteratorValue(
            type,
            node.entries[this._reverse ? maxIndex - index : index]
          );
        }
      } else {
        maxIndex = node.nodes.length - 1;
        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];
          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }
            stack = this._stack = mapIteratorFrame(subNode, stack);
          }
          continue;
        }
      }
      stack = this._stack = this._stack.__prev;
    }
    return iteratorDone();
  };
  return MapIterator2;
}(Iterator);
function mapIteratorValue(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}
function mapIteratorFrame(node, prev) {
  return {
    node,
    index: 0,
    __prev: prev
  };
}
function makeMap(size, root, ownerID, hash4) {
  var map2 = Object.create(MapPrototype);
  map2.size = size;
  map2._root = root;
  map2.__ownerID = ownerID;
  map2.__hash = hash4;
  map2.__altered = false;
  return map2;
}
var EMPTY_MAP;
function emptyMap() {
  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}
function updateMap(map2, k, v) {
  var newRoot;
  var newSize;
  if (!map2._root) {
    if (v === NOT_SET) {
      return map2;
    }
    newSize = 1;
    newRoot = new ArrayMapNode(map2.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();
    newRoot = updateNode(
      map2._root,
      map2.__ownerID,
      0,
      void 0,
      k,
      v,
      didChangeSize,
      didAlter
    );
    if (!didAlter.value) {
      return map2;
    }
    newSize = map2.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
  }
  if (map2.__ownerID) {
    map2.size = newSize;
    map2._root = newRoot;
    map2.__hash = void 0;
    map2.__altered = true;
    return map2;
  }
  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}
function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (!node) {
    if (value === NOT_SET) {
      return node;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return new ValueNode(ownerID, keyHash, [key, value]);
  }
  return node.update(
    ownerID,
    shift,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
}
function isLeafNode(node) {
  return node.constructor === ValueNode || node.constructor === HashCollisionNode;
}
function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
  }
  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var newNode;
  var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
  return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
}
function createNodes(ownerID, entries3, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID();
  }
  var node = new ValueNode(ownerID, hash(key), [key, value]);
  for (var ii = 0; ii < entries3.length; ii++) {
    var entry = entries3[ii];
    node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
  }
  return node;
}
function packNodes(ownerID, nodes, count2, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count2);
  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];
    if (node !== void 0 && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }
  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}
function expandNodes(ownerID, nodes, bitmap, including, node) {
  var count2 = 0;
  var expandedNodes = new Array(SIZE);
  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count2++] : void 0;
  }
  expandedNodes[including] = node;
  return new HashArrayMapNode(ownerID, count2 + 1, expandedNodes);
}
function popCount(x) {
  x -= x >> 1 & 1431655765;
  x = (x & 858993459) + (x >> 2 & 858993459);
  x = x + (x >> 4) & 252645135;
  x += x >> 8;
  x += x >> 16;
  return x & 127;
}
function setAt(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy(array);
  newArray[idx] = val;
  return newArray;
}
function spliceIn(array, idx, val, canEdit) {
  var newLen = array.length + 1;
  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }
  return newArray;
}
function spliceOut(array, idx, canEdit) {
  var newLen = array.length - 1;
  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }
    newArray[ii] = array[ii + after];
  }
  return newArray;
}
var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
var IS_LIST_SYMBOL = "@@__IMMUTABLE_LIST__@@";
function isList(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}
var List = function(IndexedCollection2) {
  function List2(value) {
    var empty = emptyList();
    if (value === void 0 || value === null) {
      return empty;
    }
    if (isList(value)) {
      return value;
    }
    var iter = IndexedCollection2(value);
    var size = iter.size;
    if (size === 0) {
      return empty;
    }
    assertNotInfinite(size);
    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }
    return empty.withMutations(function(list) {
      list.setSize(size);
      iter.forEach(function(v, i2) {
        return list.set(i2, v);
      });
    });
  }
  if (IndexedCollection2)
    List2.__proto__ = IndexedCollection2;
  List2.prototype = Object.create(IndexedCollection2 && IndexedCollection2.prototype);
  List2.prototype.constructor = List2;
  List2.of = function of() {
    return this(arguments);
  };
  List2.prototype.toString = function toString5() {
    return this.__toString("List [", "]");
  };
  List2.prototype.get = function get11(index, notSetValue) {
    index = wrapIndex(this, index);
    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }
    return notSetValue;
  };
  List2.prototype.set = function set3(index, value) {
    return updateList(this, index, value);
  };
  List2.prototype.remove = function remove3(index) {
    return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
  };
  List2.prototype.insert = function insert(index, value) {
    return this.splice(index, 0, value);
  };
  List2.prototype.clear = function clear2() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return emptyList();
  };
  List2.prototype.push = function push() {
    var values4 = arguments;
    var oldSize = this.size;
    return this.withMutations(function(list) {
      setListBounds(list, 0, oldSize + values4.length);
      for (var ii = 0; ii < values4.length; ii++) {
        list.set(oldSize + ii, values4[ii]);
      }
    });
  };
  List2.prototype.pop = function pop() {
    return setListBounds(this, 0, -1);
  };
  List2.prototype.unshift = function unshift() {
    var values4 = arguments;
    return this.withMutations(function(list) {
      setListBounds(list, -values4.length);
      for (var ii = 0; ii < values4.length; ii++) {
        list.set(ii, values4[ii]);
      }
    });
  };
  List2.prototype.shift = function shift() {
    return setListBounds(this, 1);
  };
  List2.prototype.concat = function concat2() {
    var arguments$1 = arguments;
    var seqs = [];
    for (var i2 = 0; i2 < arguments.length; i2++) {
      var argument = arguments$1[i2];
      var seq = IndexedCollection2(
        typeof argument !== "string" && hasIterator(argument) ? argument : [argument]
      );
      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }
    if (seqs.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }
    return this.withMutations(function(list) {
      seqs.forEach(function(seq2) {
        return seq2.forEach(function(value) {
          return list.push(value);
        });
      });
    });
  };
  List2.prototype.setSize = function setSize(size) {
    return setListBounds(this, 0, size);
  };
  List2.prototype.map = function map2(mapper, context) {
    var this$1$1 = this;
    return this.withMutations(function(list) {
      for (var i2 = 0; i2 < this$1$1.size; i2++) {
        list.set(i2, mapper.call(context, list.get(i2), i2, this$1$1));
      }
    });
  };
  List2.prototype.slice = function slice3(begin, end2) {
    var size = this.size;
    if (wholeSlice(begin, end2, size)) {
      return this;
    }
    return setListBounds(
      this,
      resolveBegin(begin, size),
      resolveEnd(end2, size)
    );
  };
  List2.prototype.__iterator = function __iterator2(type, reverse3) {
    var index = reverse3 ? this.size : 0;
    var values4 = iterateList(this, reverse3);
    return new Iterator(function() {
      var value = values4();
      return value === DONE ? iteratorDone() : iteratorValue(type, reverse3 ? --index : index++, value);
    });
  };
  List2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var index = reverse3 ? this.size : 0;
    var values4 = iterateList(this, reverse3);
    var value;
    while ((value = values4()) !== DONE) {
      if (fn2(value, reverse3 ? --index : index++, this) === false) {
        break;
      }
    }
    return index;
  };
  List2.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyList();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeList(
      this._origin,
      this._capacity,
      this._level,
      this._root,
      this._tail,
      ownerID,
      this.__hash
    );
  };
  return List2;
}(IndexedCollection);
List.isList = isList;
var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update;
ListPrototype.updateIn = updateIn;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype["@@transducer/init"] = ListPrototype.asMutable = asMutable;
ListPrototype["@@transducer/step"] = function(result, arr) {
  return result.push(arr);
};
ListPrototype["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
var VNode = function VNode2(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
};
VNode.prototype.removeBefore = function removeBefore(ownerID, level, index) {
  if (index === level ? 1 << level : this.array.length === 0) {
    return this;
  }
  var originIndex = index >>> level & MASK;
  if (originIndex >= this.array.length) {
    return new VNode([], ownerID);
  }
  var removingFirst = originIndex === 0;
  var newChild;
  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }
  if (removingFirst && !newChild) {
    return this;
  }
  var editable = editableVNode(this, ownerID);
  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = void 0;
    }
  }
  if (newChild) {
    editable.array[originIndex] = newChild;
  }
  return editable;
};
VNode.prototype.removeAfter = function removeAfter(ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }
  var sizeIndex = index - 1 >>> level & MASK;
  if (sizeIndex >= this.array.length) {
    return this;
  }
  var newChild;
  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }
  var editable = editableVNode(this, ownerID);
  editable.array.splice(sizeIndex + 1);
  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }
  return editable;
};
var DONE = {};
function iterateList(list, reverse3) {
  var left3 = list._origin;
  var right3 = list._capacity;
  var tailPos = getTailOffset(right3);
  var tail = list._tail;
  return iterateNodeOrLeaf(list._root, list._level, 0);
  function iterateNodeOrLeaf(node, level, offset2) {
    return level === 0 ? iterateLeaf(node, offset2) : iterateNode(node, level, offset2);
  }
  function iterateLeaf(node, offset2) {
    var array = offset2 === tailPos ? tail && tail.array : node && node.array;
    var from = offset2 > left3 ? 0 : left3 - offset2;
    var to = right3 - offset2;
    if (to > SIZE) {
      to = SIZE;
    }
    return function() {
      if (from === to) {
        return DONE;
      }
      var idx = reverse3 ? --to : from++;
      return array && array[idx];
    };
  }
  function iterateNode(node, level, offset2) {
    var values4;
    var array = node && node.array;
    var from = offset2 > left3 ? 0 : left3 - offset2 >> level;
    var to = (right3 - offset2 >> level) + 1;
    if (to > SIZE) {
      to = SIZE;
    }
    return function() {
      while (true) {
        if (values4) {
          var value = values4();
          if (value !== DONE) {
            return value;
          }
          values4 = null;
        }
        if (from === to) {
          return DONE;
        }
        var idx = reverse3 ? --to : from++;
        values4 = iterateNodeOrLeaf(
          array && array[idx],
          level - SHIFT,
          offset2 + (idx << level)
        );
      }
    };
  }
}
function makeList(origin, capacity, level, root, tail, ownerID, hash4) {
  var list = Object.create(ListPrototype);
  list.size = capacity - origin;
  list._origin = origin;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash4;
  list.__altered = false;
  return list;
}
var EMPTY_LIST;
function emptyList() {
  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}
function updateList(list, index, value) {
  index = wrapIndex(list, index);
  if (index !== index) {
    return list;
  }
  if (index >= list.size || index < 0) {
    return list.withMutations(function(list2) {
      index < 0 ? setListBounds(list2, index).set(0, value) : setListBounds(list2, 0, index + 1).set(index, value);
    });
  }
  index += list._origin;
  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef();
  if (index >= getTailOffset(list._capacity)) {
    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode(
      newRoot,
      list.__ownerID,
      list._level,
      index,
      value,
      didAlter
    );
  }
  if (!didAlter.value) {
    return list;
  }
  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = void 0;
    list.__altered = true;
    return list;
  }
  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}
function updateVNode(node, ownerID, level, index, value, didAlter) {
  var idx = index >>> level & MASK;
  var nodeHas = node && idx < node.array.length;
  if (!nodeHas && value === void 0) {
    return node;
  }
  var newNode;
  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode(
      lowerNode,
      ownerID,
      level - SHIFT,
      index,
      value,
      didAlter
    );
    if (newLowerNode === lowerNode) {
      return node;
    }
    newNode = editableVNode(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }
  if (nodeHas && node.array[idx] === value) {
    return node;
  }
  if (didAlter) {
    SetRef(didAlter);
  }
  newNode = editableVNode(node, ownerID);
  if (value === void 0 && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }
  return newNode;
}
function editableVNode(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }
  return new VNode(node ? node.array.slice() : [], ownerID);
}
function listNodeFor(list, rawIndex) {
  if (rawIndex >= getTailOffset(list._capacity)) {
    return list._tail;
  }
  if (rawIndex < 1 << list._level + SHIFT) {
    var node = list._root;
    var level = list._level;
    while (node && level > 0) {
      node = node.array[rawIndex >>> level & MASK];
      level -= SHIFT;
    }
    return node;
  }
}
function setListBounds(list, begin, end2) {
  if (begin !== void 0) {
    begin |= 0;
  }
  if (end2 !== void 0) {
    end2 |= 0;
  }
  var owner = list.__ownerID || new OwnerID();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity = end2 === void 0 ? oldCapacity : end2 < 0 ? oldCapacity + end2 : oldOrigin + end2;
  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  }
  if (newOrigin >= newCapacity) {
    return list.clear();
  }
  var newLevel = list._level;
  var newRoot = list._root;
  var offsetShift = 0;
  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [void 0, newRoot] : [],
      owner
    );
    newLevel += SHIFT;
    offsetShift += 1 << newLevel;
  }
  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }
  var oldTailOffset = getTailOffset(oldCapacity);
  var newTailOffset = getTailOffset(newCapacity);
  while (newTailOffset >= 1 << newLevel + SHIFT) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [newRoot] : [],
      owner
    );
    newLevel += SHIFT;
  }
  var oldTail = list._tail;
  var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
  if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
    newRoot = editableVNode(newRoot, owner);
    var node = newRoot;
    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
      var idx = oldTailOffset >>> level & MASK;
      node = node.array[idx] = editableVNode(node.array[idx], owner);
    }
    node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
  }
  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  }
  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0;
    while (newRoot) {
      var beginIndex = newOrigin >>> newLevel & MASK;
      if (beginIndex !== newTailOffset >>> newLevel & MASK) {
        break;
      }
      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }
      newLevel -= SHIFT;
      newRoot = newRoot.array[beginIndex];
    }
    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }
    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(
        owner,
        newLevel,
        newTailOffset - offsetShift
      );
    }
    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }
  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = void 0;
    list.__altered = true;
    return list;
  }
  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}
function getTailOffset(size) {
  return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
}
var OrderedMap = function(Map3) {
  function OrderedMap2(value) {
    return value === void 0 || value === null ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map2) {
      var iter = KeyedCollection(value);
      assertNotInfinite(iter.size);
      iter.forEach(function(v, k) {
        return map2.set(k, v);
      });
    });
  }
  if (Map3)
    OrderedMap2.__proto__ = Map3;
  OrderedMap2.prototype = Object.create(Map3 && Map3.prototype);
  OrderedMap2.prototype.constructor = OrderedMap2;
  OrderedMap2.of = function of() {
    return this(arguments);
  };
  OrderedMap2.prototype.toString = function toString5() {
    return this.__toString("OrderedMap {", "}");
  };
  OrderedMap2.prototype.get = function get11(k, notSetValue) {
    var index = this._map.get(k);
    return index !== void 0 ? this._list.get(index)[1] : notSetValue;
  };
  OrderedMap2.prototype.clear = function clear2() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._map.clear();
      this._list.clear();
      this.__altered = true;
      return this;
    }
    return emptyOrderedMap();
  };
  OrderedMap2.prototype.set = function set3(k, v) {
    return updateOrderedMap(this, k, v);
  };
  OrderedMap2.prototype.remove = function remove3(k) {
    return updateOrderedMap(this, k, NOT_SET);
  };
  OrderedMap2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var this$1$1 = this;
    return this._list.__iterate(
      function(entry) {
        return entry && fn2(entry[1], entry[0], this$1$1);
      },
      reverse3
    );
  };
  OrderedMap2.prototype.__iterator = function __iterator2(type, reverse3) {
    return this._list.fromEntrySeq().__iterator(type, reverse3);
  };
  OrderedMap2.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    var newList = this._list.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      this._map = newMap;
      this._list = newList;
      return this;
    }
    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };
  return OrderedMap2;
}(Map2);
OrderedMap.isOrderedMap = isOrderedMap;
OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
function makeOrderedMap(map2, list, ownerID, hash4) {
  var omap = Object.create(OrderedMap.prototype);
  omap.size = map2 ? map2.size : 0;
  omap._map = map2;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash4;
  omap.__altered = false;
  return omap;
}
var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
  return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
}
function updateOrderedMap(omap, k, v) {
  var map2 = omap._map;
  var list = omap._list;
  var i2 = map2.get(k);
  var has5 = i2 !== void 0;
  var newMap;
  var newList;
  if (v === NOT_SET) {
    if (!has5) {
      return omap;
    }
    if (list.size >= SIZE && list.size >= map2.size * 2) {
      newList = list.filter(function(entry, idx) {
        return entry !== void 0 && i2 !== idx;
      });
      newMap = newList.toKeyedSeq().map(function(entry) {
        return entry[0];
      }).flip().toMap();
      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map2.remove(k);
      newList = i2 === list.size - 1 ? list.pop() : list.set(i2, void 0);
    }
  } else if (has5) {
    if (v === list.get(i2)[1]) {
      return omap;
    }
    newMap = map2;
    newList = list.set(i2, [k, v]);
  } else {
    newMap = map2.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }
  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = void 0;
    omap.__altered = true;
    return omap;
  }
  return makeOrderedMap(newMap, newList);
}
var IS_STACK_SYMBOL = "@@__IMMUTABLE_STACK__@@";
function isStack(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}
var Stack = function(IndexedCollection2) {
  function Stack2(value) {
    return value === void 0 || value === null ? emptyStack() : isStack(value) ? value : emptyStack().pushAll(value);
  }
  if (IndexedCollection2)
    Stack2.__proto__ = IndexedCollection2;
  Stack2.prototype = Object.create(IndexedCollection2 && IndexedCollection2.prototype);
  Stack2.prototype.constructor = Stack2;
  Stack2.of = function of() {
    return this(arguments);
  };
  Stack2.prototype.toString = function toString5() {
    return this.__toString("Stack [", "]");
  };
  Stack2.prototype.get = function get11(index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);
    while (head && index--) {
      head = head.next;
    }
    return head ? head.value : notSetValue;
  };
  Stack2.prototype.peek = function peek() {
    return this._head && this._head.value;
  };
  Stack2.prototype.push = function push() {
    var arguments$1 = arguments;
    if (arguments.length === 0) {
      return this;
    }
    var newSize = this.size + arguments.length;
    var head = this._head;
    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head
      };
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };
  Stack2.prototype.pushAll = function pushAll(iter) {
    iter = IndexedCollection2(iter);
    if (iter.size === 0) {
      return this;
    }
    if (this.size === 0 && isStack(iter)) {
      return iter;
    }
    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.__iterate(function(value) {
      newSize++;
      head = {
        value,
        next: head
      };
    }, true);
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };
  Stack2.prototype.pop = function pop() {
    return this.slice(1);
  };
  Stack2.prototype.clear = function clear2() {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._head = void 0;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return emptyStack();
  };
  Stack2.prototype.slice = function slice3(begin, end2) {
    if (wholeSlice(begin, end2, this.size)) {
      return this;
    }
    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end2, this.size);
    if (resolvedEnd !== this.size) {
      return IndexedCollection2.prototype.slice.call(this, begin, end2);
    }
    var newSize = this.size - resolvedBegin;
    var head = this._head;
    while (resolvedBegin--) {
      head = head.next;
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = void 0;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };
  Stack2.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeStack(this.size, this._head, ownerID, this.__hash);
  };
  Stack2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var this$1$1 = this;
    if (reverse3) {
      return new ArraySeq(this.toArray()).__iterate(
        function(v, k) {
          return fn2(v, k, this$1$1);
        },
        reverse3
      );
    }
    var iterations = 0;
    var node = this._head;
    while (node) {
      if (fn2(node.value, iterations++, this) === false) {
        break;
      }
      node = node.next;
    }
    return iterations;
  };
  Stack2.prototype.__iterator = function __iterator2(type, reverse3) {
    if (reverse3) {
      return new ArraySeq(this.toArray()).__iterator(type, reverse3);
    }
    var iterations = 0;
    var node = this._head;
    return new Iterator(function() {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }
      return iteratorDone();
    });
  };
  return Stack2;
}(IndexedCollection);
Stack.isStack = isStack;
var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype["@@transducer/init"] = StackPrototype.asMutable = asMutable;
StackPrototype["@@transducer/step"] = function(result, arr) {
  return result.unshift(arr);
};
StackPrototype["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
function makeStack(size, head, ownerID, hash4) {
  var map2 = Object.create(StackPrototype);
  map2.size = size;
  map2._head = head;
  map2.__ownerID = ownerID;
  map2.__hash = hash4;
  map2.__altered = false;
  return map2;
}
var EMPTY_STACK;
function emptyStack() {
  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}
var IS_SET_SYMBOL = "@@__IMMUTABLE_SET__@@";
function isSet(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}
function isOrderedSet(maybeOrderedSet) {
  return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (!isCollection(b) || a.size !== void 0 && b.size !== void 0 && a.size !== b.size || a.__hash !== void 0 && b.__hash !== void 0 && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
    return false;
  }
  if (a.size === 0 && b.size === 0) {
    return true;
  }
  var notAssociative = !isAssociative(a);
  if (isOrdered(a)) {
    var entries3 = a.entries();
    return b.every(function(v, k) {
      var entry = entries3.next().value;
      return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
    }) && entries3.next().done;
  }
  var flipped = false;
  if (a.size === void 0) {
    if (b.size === void 0) {
      if (typeof a.cacheResult === "function") {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _2 = a;
      a = b;
      b = _2;
    }
  }
  var allEqual = true;
  var bSize = b.__iterate(function(v, k) {
    if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
      allEqual = false;
      return false;
    }
  });
  return allEqual && a.size === bSize;
}
function mixin(ctor, methods) {
  var keyCopier = function(key) {
    ctor.prototype[key] = methods[key];
  };
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}
function toJS(value) {
  if (!value || typeof value !== "object") {
    return value;
  }
  if (!isCollection(value)) {
    if (!isDataStructure(value)) {
      return value;
    }
    value = Seq(value);
  }
  if (isKeyed(value)) {
    var result$1 = {};
    value.__iterate(function(v, k) {
      result$1[k] = toJS(v);
    });
    return result$1;
  }
  var result = [];
  value.__iterate(function(v) {
    result.push(toJS(v));
  });
  return result;
}
var Set2 = function(SetCollection2) {
  function Set3(value) {
    return value === void 0 || value === null ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set3) {
      var iter = SetCollection2(value);
      assertNotInfinite(iter.size);
      iter.forEach(function(v) {
        return set3.add(v);
      });
    });
  }
  if (SetCollection2)
    Set3.__proto__ = SetCollection2;
  Set3.prototype = Object.create(SetCollection2 && SetCollection2.prototype);
  Set3.prototype.constructor = Set3;
  Set3.of = function of() {
    return this(arguments);
  };
  Set3.fromKeys = function fromKeys(value) {
    return this(KeyedCollection(value).keySeq());
  };
  Set3.intersect = function intersect(sets) {
    sets = Collection(sets).toArray();
    return sets.length ? SetPrototype.intersect.apply(Set3(sets.pop()), sets) : emptySet();
  };
  Set3.union = function union(sets) {
    sets = Collection(sets).toArray();
    return sets.length ? SetPrototype.union.apply(Set3(sets.pop()), sets) : emptySet();
  };
  Set3.prototype.toString = function toString5() {
    return this.__toString("Set {", "}");
  };
  Set3.prototype.has = function has5(value) {
    return this._map.has(value);
  };
  Set3.prototype.add = function add(value) {
    return updateSet(this, this._map.set(value, value));
  };
  Set3.prototype.remove = function remove3(value) {
    return updateSet(this, this._map.remove(value));
  };
  Set3.prototype.clear = function clear2() {
    return updateSet(this, this._map.clear());
  };
  Set3.prototype.map = function map2(mapper, context) {
    var this$1$1 = this;
    var didChanges = false;
    var newMap = updateSet(
      this,
      this._map.mapEntries(function(ref) {
        var v = ref[1];
        var mapped = mapper.call(context, v, v, this$1$1);
        if (mapped !== v) {
          didChanges = true;
        }
        return [mapped, mapped];
      }, context)
    );
    return didChanges ? newMap : this;
  };
  Set3.prototype.union = function union() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    iters = iters.filter(function(x) {
      return x.size !== 0;
    });
    if (iters.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }
    return this.withMutations(function(set3) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetCollection2(iters[ii]).forEach(function(value) {
          return set3.add(value);
        });
      }
    });
  };
  Set3.prototype.intersect = function intersect() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function(iter) {
      return SetCollection2(iter);
    });
    var toRemove = [];
    this.forEach(function(value) {
      if (!iters.every(function(iter) {
        return iter.includes(value);
      })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function(set3) {
      toRemove.forEach(function(value) {
        set3.remove(value);
      });
    });
  };
  Set3.prototype.subtract = function subtract() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function(iter) {
      return SetCollection2(iter);
    });
    var toRemove = [];
    this.forEach(function(value) {
      if (iters.some(function(iter) {
        return iter.includes(value);
      })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function(set3) {
      toRemove.forEach(function(value) {
        set3.remove(value);
      });
    });
  };
  Set3.prototype.sort = function sort2(comparator) {
    return OrderedSet(sortFactory(this, comparator));
  };
  Set3.prototype.sortBy = function sortBy2(mapper, comparator) {
    return OrderedSet(sortFactory(this, comparator, mapper));
  };
  Set3.prototype.wasAltered = function wasAltered3() {
    return this._map.wasAltered();
  };
  Set3.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var this$1$1 = this;
    return this._map.__iterate(function(k) {
      return fn2(k, k, this$1$1);
    }, reverse3);
  };
  Set3.prototype.__iterator = function __iterator2(type, reverse3) {
    return this._map.__iterator(type, reverse3);
  };
  Set3.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  };
  return Set3;
}(SetCollection);
Set2.isSet = isSet;
var SetPrototype = Set2.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype["@@transducer/init"] = SetPrototype.asMutable = asMutable;
SetPrototype["@@transducer/step"] = function(result, arr) {
  return result.add(arr);
};
SetPrototype["@@transducer/result"] = function(obj) {
  return obj.asImmutable();
};
SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;
function updateSet(set3, newMap) {
  if (set3.__ownerID) {
    set3.size = newMap.size;
    set3._map = newMap;
    return set3;
  }
  return newMap === set3._map ? set3 : newMap.size === 0 ? set3.__empty() : set3.__make(newMap);
}
function makeSet(map2, ownerID) {
  var set3 = Object.create(SetPrototype);
  set3.size = map2 ? map2.size : 0;
  set3._map = map2;
  set3.__ownerID = ownerID;
  return set3;
}
var EMPTY_SET;
function emptySet() {
  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}
var Range = function(IndexedSeq2) {
  function Range2(start2, end2, step) {
    if (!(this instanceof Range2)) {
      return new Range2(start2, end2, step);
    }
    invariant(step !== 0, "Cannot step a Range by 0");
    start2 = start2 || 0;
    if (end2 === void 0) {
      end2 = Infinity;
    }
    step = step === void 0 ? 1 : Math.abs(step);
    if (end2 < start2) {
      step = -step;
    }
    this._start = start2;
    this._end = end2;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end2 - start2) / step - 1) + 1);
    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }
      EMPTY_RANGE = this;
    }
  }
  if (IndexedSeq2)
    Range2.__proto__ = IndexedSeq2;
  Range2.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
  Range2.prototype.constructor = Range2;
  Range2.prototype.toString = function toString5() {
    if (this.size === 0) {
      return "Range []";
    }
    return "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
  };
  Range2.prototype.get = function get11(index, notSetValue) {
    return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
  };
  Range2.prototype.includes = function includes3(searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
  };
  Range2.prototype.slice = function slice3(begin, end2) {
    if (wholeSlice(begin, end2, this.size)) {
      return this;
    }
    begin = resolveBegin(begin, this.size);
    end2 = resolveEnd(end2, this.size);
    if (end2 <= begin) {
      return new Range2(0, 0);
    }
    return new Range2(
      this.get(begin, this._end),
      this.get(end2, this._end),
      this._step
    );
  };
  Range2.prototype.indexOf = function indexOf2(searchValue) {
    var offsetValue = searchValue - this._start;
    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;
      if (index >= 0 && index < this.size) {
        return index;
      }
    }
    return -1;
  };
  Range2.prototype.lastIndexOf = function lastIndexOf2(searchValue) {
    return this.indexOf(searchValue);
  };
  Range2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var size = this.size;
    var step = this._step;
    var value = reverse3 ? this._start + (size - 1) * step : this._start;
    var i2 = 0;
    while (i2 !== size) {
      if (fn2(value, reverse3 ? size - ++i2 : i2++, this) === false) {
        break;
      }
      value += reverse3 ? -step : step;
    }
    return i2;
  };
  Range2.prototype.__iterator = function __iterator2(type, reverse3) {
    var size = this.size;
    var step = this._step;
    var value = reverse3 ? this._start + (size - 1) * step : this._start;
    var i2 = 0;
    return new Iterator(function() {
      if (i2 === size) {
        return iteratorDone();
      }
      var v = value;
      value += reverse3 ? -step : step;
      return iteratorValue(type, reverse3 ? size - ++i2 : i2++, v);
    });
  };
  Range2.prototype.equals = function equals3(other) {
    return other instanceof Range2 ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
  };
  return Range2;
}(IndexedSeq);
var EMPTY_RANGE;
function getIn$1(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath(searchKeyPath);
  var i2 = 0;
  while (i2 !== keyPath.length) {
    collection = get(collection, keyPath[i2++], NOT_SET);
    if (collection === NOT_SET) {
      return notSetValue;
    }
  }
  return collection;
}
function getIn(searchKeyPath, notSetValue) {
  return getIn$1(this, searchKeyPath, notSetValue);
}
function hasIn$1(collection, keyPath) {
  return getIn$1(collection, keyPath, NOT_SET) !== NOT_SET;
}
function hasIn(searchKeyPath) {
  return hasIn$1(this, searchKeyPath);
}
function toObject() {
  assertNotInfinite(this.size);
  var object = {};
  this.__iterate(function(v, k) {
    object[k] = v;
  });
  return object;
}
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;
Collection.Iterator = Iterator;
mixin(Collection, {
  toArray: function toArray() {
    assertNotInfinite(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed(this);
    var i2 = 0;
    this.__iterate(function(v, k) {
      array[i2++] = useTuples ? [k, v] : v;
    });
    return array;
  },
  toIndexedSeq: function toIndexedSeq() {
    return new ToIndexedSequence(this);
  },
  toJS: function toJS$1() {
    return toJS(this);
  },
  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, true);
  },
  toMap: function toMap() {
    return Map2(this.toKeyedSeq());
  },
  toObject,
  toOrderedMap: function toOrderedMap() {
    return OrderedMap(this.toKeyedSeq());
  },
  toOrderedSet: function toOrderedSet() {
    return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
  },
  toSet: function toSet() {
    return Set2(isKeyed(this) ? this.valueSeq() : this);
  },
  toSetSeq: function toSetSeq() {
    return new ToSetSequence(this);
  },
  toSeq: function toSeq() {
    return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
  },
  toStack: function toStack() {
    return Stack(isKeyed(this) ? this.valueSeq() : this);
  },
  toList: function toList() {
    return List(isKeyed(this) ? this.valueSeq() : this);
  },
  toString: function toString3() {
    return "[Collection]";
  },
  __toString: function __toString(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }
    return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
  },
  concat: function concat() {
    var values4 = [], len = arguments.length;
    while (len--)
      values4[len] = arguments[len];
    return reify(this, concatFactory(this, values4));
  },
  includes: function includes(searchValue) {
    return this.some(function(value) {
      return is(value, searchValue);
    });
  },
  entries: function entries() {
    return this.__iterator(ITERATE_ENTRIES);
  },
  every: function every(predicate, context) {
    assertNotInfinite(this.size);
    var returnValue = true;
    this.__iterate(function(v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });
    return returnValue;
  },
  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, true));
  },
  find: function find(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  },
  forEach: function forEach(sideEffect, context) {
    assertNotInfinite(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  },
  join: function join(separator) {
    assertNotInfinite(this.size);
    separator = separator !== void 0 ? "" + separator : ",";
    var joined = "";
    var isFirst = true;
    this.__iterate(function(v) {
      isFirst ? isFirst = false : joined += separator;
      joined += v !== null && v !== void 0 ? v.toString() : "";
    });
    return joined;
  },
  keys: function keys() {
    return this.__iterator(ITERATE_KEYS);
  },
  map: function map(mapper, context) {
    return reify(this, mapFactory(this, mapper, context));
  },
  reduce: function reduce$1(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      false
    );
  },
  reduceRight: function reduceRight(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      true
    );
  },
  reverse: function reverse() {
    return reify(this, reverseFactory(this, true));
  },
  slice: function slice(begin, end2) {
    return reify(this, sliceFactory(this, begin, end2, true));
  },
  some: function some(predicate, context) {
    return !this.every(not(predicate), context);
  },
  sort: function sort(comparator) {
    return reify(this, sortFactory(this, comparator));
  },
  values: function values() {
    return this.__iterator(ITERATE_VALUES);
  },
  butLast: function butLast() {
    return this.slice(0, -1);
  },
  isEmpty: function isEmpty() {
    return this.size !== void 0 ? this.size === 0 : !this.some(function() {
      return true;
    });
  },
  count: function count(predicate, context) {
    return ensureSize(
      predicate ? this.toSeq().filter(predicate, context) : this
    );
  },
  countBy: function countBy(grouper, context) {
    return countByFactory(this, grouper, context);
  },
  equals: function equals(other) {
    return deepEqual(this, other);
  },
  entrySeq: function entrySeq() {
    var collection = this;
    if (collection._cache) {
      return new ArraySeq(collection._cache);
    }
    var entriesSequence = collection.toSeq().map(entryMapper).toIndexedSeq();
    entriesSequence.fromEntrySeq = function() {
      return collection.toSeq();
    };
    return entriesSequence;
  },
  filterNot: function filterNot(predicate, context) {
    return this.filter(not(predicate), context);
  },
  findEntry: function findEntry(predicate, context, notSetValue) {
    var found = notSetValue;
    this.__iterate(function(v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });
    return found;
  },
  findKey: function findKey(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  },
  findLast: function findLast(predicate, context, notSetValue) {
    return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
  },
  findLastEntry: function findLastEntry(predicate, context, notSetValue) {
    return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
  },
  findLastKey: function findLastKey(predicate, context) {
    return this.toKeyedSeq().reverse().findKey(predicate, context);
  },
  first: function first(notSetValue) {
    return this.find(returnTrue, null, notSetValue);
  },
  flatMap: function flatMap(mapper, context) {
    return reify(this, flatMapFactory(this, mapper, context));
  },
  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, true));
  },
  fromEntrySeq: function fromEntrySeq() {
    return new FromEntriesSequence(this);
  },
  get: function get7(searchKey, notSetValue) {
    return this.find(function(_2, key) {
      return is(key, searchKey);
    }, void 0, notSetValue);
  },
  getIn,
  groupBy: function groupBy(grouper, context) {
    return groupByFactory(this, grouper, context);
  },
  has: function has2(searchKey) {
    return this.get(searchKey, NOT_SET) !== NOT_SET;
  },
  hasIn,
  isSubset: function isSubset(iter) {
    iter = typeof iter.includes === "function" ? iter : Collection(iter);
    return this.every(function(value) {
      return iter.includes(value);
    });
  },
  isSuperset: function isSuperset(iter) {
    iter = typeof iter.isSubset === "function" ? iter : Collection(iter);
    return iter.isSubset(this);
  },
  keyOf: function keyOf(searchValue) {
    return this.findKey(function(value) {
      return is(value, searchValue);
    });
  },
  keySeq: function keySeq() {
    return this.toSeq().map(keyMapper).toIndexedSeq();
  },
  last: function last(notSetValue) {
    return this.toSeq().reverse().first(notSetValue);
  },
  lastKeyOf: function lastKeyOf(searchValue) {
    return this.toKeyedSeq().reverse().keyOf(searchValue);
  },
  max: function max(comparator) {
    return maxFactory(this, comparator);
  },
  maxBy: function maxBy(mapper, comparator) {
    return maxFactory(this, comparator, mapper);
  },
  min: function min(comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator
    );
  },
  minBy: function minBy(mapper, comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator,
      mapper
    );
  },
  rest: function rest() {
    return this.slice(1);
  },
  skip: function skip(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  },
  skipLast: function skipLast(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  },
  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, true));
  },
  skipUntil: function skipUntil(predicate, context) {
    return this.skipWhile(not(predicate), context);
  },
  sortBy: function sortBy(mapper, comparator) {
    return reify(this, sortFactory(this, comparator, mapper));
  },
  take: function take(amount) {
    return this.slice(0, Math.max(0, amount));
  },
  takeLast: function takeLast(amount) {
    return this.slice(-Math.max(0, amount));
  },
  takeWhile: function takeWhile(predicate, context) {
    return reify(this, takeWhileFactory(this, predicate, context));
  },
  takeUntil: function takeUntil(predicate, context) {
    return this.takeWhile(not(predicate), context);
  },
  update: function update7(fn2) {
    return fn2(this);
  },
  valueSeq: function valueSeq() {
    return this.toIndexedSeq();
  },
  hashCode: function hashCode() {
    return this.__hash || (this.__hash = hashCollection(this));
  }
});
var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
  return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;
mixin(KeyedCollection, {
  flip: function flip() {
    return reify(this, flipFactory(this));
  },
  mapEntries: function mapEntries(mapper, context) {
    var this$1$1 = this;
    var iterations = 0;
    return reify(
      this,
      this.toSeq().map(function(v, k) {
        return mapper.call(context, [k, v], iterations++, this$1$1);
      }).fromEntrySeq()
    );
  },
  mapKeys: function mapKeys(mapper, context) {
    var this$1$1 = this;
    return reify(
      this,
      this.toSeq().flip().map(function(k, v) {
        return mapper.call(context, k, v, this$1$1);
      }).flip()
    );
  }
});
var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function(v, k) {
  return quoteString(k) + ": " + quoteString(v);
};
mixin(IndexedCollection, {
  toKeyedSeq: function toKeyedSeq2() {
    return new ToKeyedSequence(this, false);
  },
  filter: function filter2(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, false));
  },
  findIndex: function findIndex(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  },
  indexOf: function indexOf(searchValue) {
    var key = this.keyOf(searchValue);
    return key === void 0 ? -1 : key;
  },
  lastIndexOf: function lastIndexOf(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === void 0 ? -1 : key;
  },
  reverse: function reverse2() {
    return reify(this, reverseFactory(this, false));
  },
  slice: function slice2(begin, end2) {
    return reify(this, sliceFactory(this, begin, end2, false));
  },
  splice: function splice(index, removeNum) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);
    if (numArgs === 0 || numArgs === 2 && !removeNum) {
      return this;
    }
    index = resolveBegin(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify(
      this,
      numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
    );
  },
  findLastIndex: function findLastIndex(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  },
  first: function first2(notSetValue) {
    return this.get(0, notSetValue);
  },
  flatten: function flatten2(depth) {
    return reify(this, flattenFactory(this, depth, false));
  },
  get: function get8(index, notSetValue) {
    index = wrapIndex(this, index);
    return index < 0 || this.size === Infinity || this.size !== void 0 && index > this.size ? notSetValue : this.find(function(_2, key) {
      return key === index;
    }, void 0, notSetValue);
  },
  has: function has3(index) {
    index = wrapIndex(this, index);
    return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
  },
  interpose: function interpose(separator) {
    return reify(this, interposeFactory(this, separator));
  },
  interleave: function interleave() {
    var collections = [this].concat(arrCopy(arguments));
    var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
    var interleaved = zipped.flatten(true);
    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }
    return reify(this, interleaved);
  },
  keySeq: function keySeq2() {
    return Range(0, this.size);
  },
  last: function last2(notSetValue) {
    return this.get(-1, notSetValue);
  },
  skipWhile: function skipWhile2(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, false));
  },
  zip: function zip() {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections));
  },
  zipAll: function zipAll() {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections, true));
  },
  zipWith: function zipWith(zipper) {
    var collections = arrCopy(arguments);
    collections[0] = this;
    return reify(this, zipWithFactory(this, zipper, collections));
  }
});
var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;
mixin(SetCollection, {
  get: function get9(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  },
  includes: function includes2(value) {
    return this.has(value);
  },
  keySeq: function keySeq3() {
    return this.valueSeq();
  }
});
var SetCollectionPrototype = SetCollection.prototype;
SetCollectionPrototype.has = CollectionPrototype.includes;
SetCollectionPrototype.contains = SetCollectionPrototype.includes;
SetCollectionPrototype.keys = SetCollectionPrototype.values;
mixin(KeyedSeq, KeyedCollectionPrototype);
mixin(IndexedSeq, IndexedCollectionPrototype);
mixin(SetSeq, SetCollectionPrototype);
function reduce(collection, reducer, reduction, context, useFirst, reverse3) {
  assertNotInfinite(collection.size);
  collection.__iterate(function(v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse3);
  return reduction;
}
function keyMapper(v, k) {
  return k;
}
function entryMapper(v, k) {
  return [k, v];
}
function not(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
function neg(predicate) {
  return function() {
    return -predicate.apply(this, arguments);
  };
}
function defaultZipper() {
  return arrCopy(arguments);
}
function defaultNegComparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}
function hashCollection(collection) {
  if (collection.size === Infinity) {
    return 0;
  }
  var ordered = isOrdered(collection);
  var keyed = isKeyed(collection);
  var h2 = ordered ? 1 : 0;
  var size = collection.__iterate(
    keyed ? ordered ? function(v, k) {
      h2 = 31 * h2 + hashMerge(hash(v), hash(k)) | 0;
    } : function(v, k) {
      h2 = h2 + hashMerge(hash(v), hash(k)) | 0;
    } : ordered ? function(v) {
      h2 = 31 * h2 + hash(v) | 0;
    } : function(v) {
      h2 = h2 + hash(v) | 0;
    }
  );
  return murmurHashOfSize(size, h2);
}
function murmurHashOfSize(size, h2) {
  h2 = imul(h2, 3432918353);
  h2 = imul(h2 << 15 | h2 >>> -15, 461845907);
  h2 = imul(h2 << 13 | h2 >>> -13, 5);
  h2 = (h2 + 3864292196 | 0) ^ size;
  h2 = imul(h2 ^ h2 >>> 16, 2246822507);
  h2 = imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = smi(h2 ^ h2 >>> 16);
  return h2;
}
function hashMerge(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
}
var OrderedSet = function(Set3) {
  function OrderedSet2(value) {
    return value === void 0 || value === null ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set3) {
      var iter = SetCollection(value);
      assertNotInfinite(iter.size);
      iter.forEach(function(v) {
        return set3.add(v);
      });
    });
  }
  if (Set3)
    OrderedSet2.__proto__ = Set3;
  OrderedSet2.prototype = Object.create(Set3 && Set3.prototype);
  OrderedSet2.prototype.constructor = OrderedSet2;
  OrderedSet2.of = function of() {
    return this(arguments);
  };
  OrderedSet2.fromKeys = function fromKeys(value) {
    return this(KeyedCollection(value).keySeq());
  };
  OrderedSet2.prototype.toString = function toString5() {
    return this.__toString("OrderedSet {", "}");
  };
  return OrderedSet2;
}(Set2);
OrderedSet.isOrderedSet = isOrderedSet;
var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;
OrderedSetPrototype.zipAll = IndexedCollectionPrototype.zipAll;
OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;
function makeOrderedSet(map2, ownerID) {
  var set3 = Object.create(OrderedSetPrototype);
  set3.size = map2 ? map2.size : 0;
  set3._map = map2;
  set3.__ownerID = ownerID;
  return set3;
}
var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
  return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
}
function throwOnInvalidDefaultValues(defaultValues) {
  if (isRecord(defaultValues)) {
    throw new Error(
      "Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead."
    );
  }
  if (isImmutable(defaultValues)) {
    throw new Error(
      "Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead."
    );
  }
  if (defaultValues === null || typeof defaultValues !== "object") {
    throw new Error(
      "Can not call `Record` with a non-object as default values. Use a plain javascript object instead."
    );
  }
}
var Record = function Record2(defaultValues, name) {
  var hasInitialized;
  throwOnInvalidDefaultValues(defaultValues);
  var RecordType = function Record3(values4) {
    var this$1$1 = this;
    if (values4 instanceof RecordType) {
      return values4;
    }
    if (!(this instanceof RecordType)) {
      return new RecordType(values4);
    }
    if (!hasInitialized) {
      hasInitialized = true;
      var keys2 = Object.keys(defaultValues);
      var indices = RecordTypePrototype._indices = {};
      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys2;
      RecordTypePrototype._defaultValues = defaultValues;
      for (var i2 = 0; i2 < keys2.length; i2++) {
        var propName = keys2[i2];
        indices[propName] = i2;
        if (RecordTypePrototype[propName]) {
          typeof console === "object" && console.warn && console.warn(
            "Cannot define " + recordName(this) + ' with property "' + propName + '" since that property name is part of the Record API.'
          );
        } else {
          setProp(RecordTypePrototype, propName);
        }
      }
    }
    this.__ownerID = void 0;
    this._values = List().withMutations(function(l) {
      l.setSize(this$1$1._keys.length);
      KeyedCollection(values4).forEach(function(v, k) {
        l.set(this$1$1._indices[k], v === this$1$1._defaultValues[k] ? void 0 : v);
      });
    });
    return this;
  };
  var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
  RecordTypePrototype.constructor = RecordType;
  if (name) {
    RecordType.displayName = name;
  }
  return RecordType;
};
Record.prototype.toString = function toString4() {
  var str2 = recordName(this) + " { ";
  var keys2 = this._keys;
  var k;
  for (var i2 = 0, l = keys2.length; i2 !== l; i2++) {
    k = keys2[i2];
    str2 += (i2 ? ", " : "") + k + ": " + quoteString(this.get(k));
  }
  return str2 + " }";
};
Record.prototype.equals = function equals2(other) {
  return this === other || isRecord(other) && recordSeq(this).equals(recordSeq(other));
};
Record.prototype.hashCode = function hashCode2() {
  return recordSeq(this).hashCode();
};
Record.prototype.has = function has4(k) {
  return this._indices.hasOwnProperty(k);
};
Record.prototype.get = function get10(k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }
  var index = this._indices[k];
  var value = this._values.get(index);
  return value === void 0 ? this._defaultValues[k] : value;
};
Record.prototype.set = function set2(k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(
      this._indices[k],
      v === this._defaultValues[k] ? void 0 : v
    );
    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord(this, newValues);
    }
  }
  return this;
};
Record.prototype.remove = function remove2(k) {
  return this.set(k);
};
Record.prototype.clear = function clear() {
  var newValues = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : makeRecord(this, newValues);
};
Record.prototype.wasAltered = function wasAltered2() {
  return this._values.wasAltered();
};
Record.prototype.toSeq = function toSeq2() {
  return recordSeq(this);
};
Record.prototype.toJS = function toJS$12() {
  return toJS(this);
};
Record.prototype.entries = function entries2() {
  return this.__iterator(ITERATE_ENTRIES);
};
Record.prototype.__iterator = function __iterator(type, reverse3) {
  return recordSeq(this).__iterator(type, reverse3);
};
Record.prototype.__iterate = function __iterate(fn2, reverse3) {
  return recordSeq(this).__iterate(fn2, reverse3);
};
Record.prototype.__ensureOwner = function __ensureOwner(ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }
  var newValues = this._values.__ensureOwner(ownerID);
  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }
  return makeRecord(this, newValues, ownerID);
};
Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge$1;
RecordPrototype.mergeWith = mergeWith$1;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep;
RecordPrototype.mergeDeepWith = mergeDeepWith;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn;
RecordPrototype.update = update;
RecordPrototype.updateIn = updateIn;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject = CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function() {
  return this.toString();
};
function makeRecord(likeRecord, values4, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values4;
  record.__ownerID = ownerID;
  return record;
}
function recordName(record) {
  return record.constructor.displayName || record.constructor.name || "Record";
}
function recordSeq(record) {
  return keyedSeqFromValue(record._keys.map(function(k) {
    return [k, record.get(k)];
  }));
}
function setProp(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, "Cannot set on an immutable record.");
        this.set(name, value);
      }
    });
  } catch (error) {
  }
}
var Repeat = function(IndexedSeq2) {
  function Repeat2(value, times) {
    if (!(this instanceof Repeat2)) {
      return new Repeat2(value, times);
    }
    this._value = value;
    this.size = times === void 0 ? Infinity : Math.max(0, times);
    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }
      EMPTY_REPEAT = this;
    }
  }
  if (IndexedSeq2)
    Repeat2.__proto__ = IndexedSeq2;
  Repeat2.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
  Repeat2.prototype.constructor = Repeat2;
  Repeat2.prototype.toString = function toString5() {
    if (this.size === 0) {
      return "Repeat []";
    }
    return "Repeat [ " + this._value + " " + this.size + " times ]";
  };
  Repeat2.prototype.get = function get11(index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };
  Repeat2.prototype.includes = function includes3(searchValue) {
    return is(this._value, searchValue);
  };
  Repeat2.prototype.slice = function slice3(begin, end2) {
    var size = this.size;
    return wholeSlice(begin, end2, size) ? this : new Repeat2(
      this._value,
      resolveEnd(end2, size) - resolveBegin(begin, size)
    );
  };
  Repeat2.prototype.reverse = function reverse3() {
    return this;
  };
  Repeat2.prototype.indexOf = function indexOf2(searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }
    return -1;
  };
  Repeat2.prototype.lastIndexOf = function lastIndexOf2(searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }
    return -1;
  };
  Repeat2.prototype.__iterate = function __iterate2(fn2, reverse3) {
    var size = this.size;
    var i2 = 0;
    while (i2 !== size) {
      if (fn2(this._value, reverse3 ? size - ++i2 : i2++, this) === false) {
        break;
      }
    }
    return i2;
  };
  Repeat2.prototype.__iterator = function __iterator2(type, reverse3) {
    var this$1$1 = this;
    var size = this.size;
    var i2 = 0;
    return new Iterator(
      function() {
        return i2 === size ? iteratorDone() : iteratorValue(type, reverse3 ? size - ++i2 : i2++, this$1$1._value);
      }
    );
  };
  Repeat2.prototype.equals = function equals3(other) {
    return other instanceof Repeat2 ? is(this._value, other._value) : deepEqual(other);
  };
  return Repeat2;
}(IndexedSeq);
var EMPTY_REPEAT;

// js/textDiff.ts
init_define_process();
var import_fast_diff = __toESM(require_diff(), 1);
function createDelta(original, revision) {
  var result = (0, import_fast_diff.default)(original, revision);
  const delta = result.map(
    (r2) => r2[0] === 1 ? r2 : [r2[0], r2[1].length]
  );
  return delta;
}
function applyPatch(original, delta) {
  var result = "", index = 0;
  for (var i2 = 0; i2 < delta.length; i2++) {
    var item = delta[i2], operation = item[0], value = item[1];
    if (item[0] === -1 && typeof value === "number") {
      index += value;
    } else if (operation == 0 && typeof value === "number") {
      result += original.slice(index, index += value);
    } else {
      result += value;
    }
  }
  return result;
}

// js/session.ts
function initSession(room, u) {
  return Record({ ...u, room, state: Record(u.state)() });
}
var session = null;
var hashStore = {};
var CodeSession = class {
  constructor(room, user2) {
    this.cb = {};
    this.hashCodeSession = 0;
    this.created = new Date().toISOString();
    this.hashOfState = () => {
      const state = this.session.get("state");
      const hashCode4 = state.hashCode();
      hashStore[hashCode4] = state;
      return hashCode4;
    };
    this.createPatchFromHashCode = async (oldHash, state) => {
      const s = JSON.parse(str(state));
      if (!hashStore[oldHash]) {
        const resp = await fetch(
          `/live/${this.room}
        `
        );
        const { mST: mST2, hashCode: hashCode4 } = await resp.json();
        hashStore[hashCode4] = this.session.get("state").merge(mST2);
      }
      const oldRec = hashStore[oldHash];
      const oldStr = str(oldRec.toJSON());
      const newRec = oldRec.merge(s);
      const newStr = str(newRec.toJSON());
      const newHash = newRec.hashCode();
      hashStore[newHash] = newRec;
      const patch = createPatch(oldStr, newStr);
      return {
        oldHash,
        newHash,
        patch
      };
    };
    this.applyPatch = async ({
      oldHash,
      newHash,
      patch
    }) => {
      const codeSpace2 = this.room || "";
      if (!Object.keys(hashStore).map((x) => Number(x)).includes(
        Number(oldHash)
      ) && codeSpace2) {
        console.log(Object.keys(hashStore));
        const resp = await fetch(
          `/live/${codeSpace2}/mST`
        );
        if (resp.ok) {
          const s = await resp.json();
          const serverRecord = this.session.get("state").merge(
            JSON.parse(str(s.mST))
          );
          hashStore[serverRecord.hashCode()] = serverRecord;
        } else {
          const { mST: mST2 } = await import(location.origin + `/live/${this.room}/mst.mjs?${Date.now()}`);
          const latestRec = this.session.get("state").merge(
            JSON.parse(str(mST2))
          );
          hashStore[latestRec.hashCode()] = latestRec;
        }
      }
      const oldStr = str(hashStore[oldHash].toJSON());
      const applied = applyPatch(oldStr, patch);
      const newState = JSON.parse(applied);
      const newRec = this.session.get("state").merge(
        newState
      );
      const newRecord = this.session.get("state").merge(newRec);
      const newHashCheck = newRecord.hashCode();
      if (newHashCheck === newHash) {
        this.session = this.session.set("state", newRecord);
      } else {
        new Error("Wrong patch");
        return;
      }
    };
    session = this;
    this.room = room;
    const savedState = null;
    this.session = initSession(room, {
      ...user2,
      state: savedState ? savedState : JSON.parse(str(user2.state))
    })();
  }
  update() {
    Object.keys(this.cb).map((k) => this.cb[k]).map((x) => {
      try {
        x(true);
      } catch (err) {
        console.error("error calling callback", { err });
      }
    });
  }
  onUpdate(fn2, regId) {
    this.cb[regId] = fn2;
  }
  json() {
    const user2 = this.session.toJSON();
    const state = user2.state.toJSON();
    return { ...user2, state };
  }
  setRoom(codeSpace2) {
    const user2 = this.session.set("room", codeSpace2);
    this.session = user2;
  }
};
var hashCode3 = () => session ? session.hashOfState() : 0;
var mST = () => {
  if (!session) {
    return {
      i: 0,
      transpiled: "",
      code: "",
      html: "",
      css: ""
    };
  }
  const { i: i2, transpiled, code, html, css: css2 } = session.json().state;
  return { i: i2, transpiled, code, html, css: css2 };
};
function addOrigin(s, originStr) {
  const { i: i2, transpiled, code, html, css: css2 } = s;
  const mst = { i: i2, transpiled, code, html, css: css2 };
  mst.code = mst.code.replace(`from '/live`, `from '${originStr}/live`);
  mst.code = mst.code.replace(`from './`, `from '${originStr}/live/`);
  mst.transpiled = mst.transpiled.replace(
    `from "/live`,
    `from "${originStr}/live`
  );
  mst.transpiled = mst.transpiled.replace(
    `from "./`,
    `from "${originStr}/live/`
  );
  return mst;
}
function str(s) {
  const { i: i2, transpiled, code, html, css: css2 } = s;
  return JSON.stringify({ i: i2, transpiled, code, html, css: css2 });
}
var applyPatch2 = async (x) => {
  await (session == null ? void 0 : session.applyPatch(x));
  session == null ? void 0 : session.update();
};
var onSessionUpdate = (fn2, regId = "default") => session == null ? void 0 : session.onUpdate(fn2, regId);
var makePatchFrom = (n, st) => session.createPatchFromHashCode(n, st);
var makePatch = (st) => makePatchFrom(hashCode3(), st);
var startSession = (room, u, originStr) => session || new CodeSession(room, { name: u.name, state: addOrigin(u.state, originStr) });
function createPatch(oldCode, newCode) {
  return createDelta(oldCode, newCode);
}

// js/renderPreviewWindow.tsx
init_define_process();
import { Fragment as Fragment11, useEffect as useEffect31, useMemo as useMemo8, useState as useState27 } from "/react.mjs";

// js/starter.tsx
init_define_process();

// ../../node_modules/es-module-shims/dist/es-module-shims.js
init_define_process();
(function() {
  const hasWindow = typeof window !== "undefined";
  const hasDocument = typeof document !== "undefined";
  const noop2 = () => {
  };
  const optionsScript = hasDocument ? document.querySelector("script[type=esms-options]") : void 0;
  const esmsInitOptions = optionsScript ? JSON.parse(optionsScript.innerHTML) : {};
  Object.assign(esmsInitOptions, self.esmsInitOptions || {});
  let shimMode = hasDocument ? !!esmsInitOptions.shimMode : true;
  const importHook = globalHook(shimMode && esmsInitOptions.onimport);
  const resolveHook = globalHook(shimMode && esmsInitOptions.resolve);
  let fetchHook = esmsInitOptions.fetch ? globalHook(esmsInitOptions.fetch) : fetch;
  const metaHook = esmsInitOptions.meta ? globalHook(shimMode && esmsInitOptions.meta) : noop2;
  const skip2 = esmsInitOptions.skip ? new RegExp(esmsInitOptions.skip) : null;
  const mapOverrides = esmsInitOptions.mapOverrides;
  let nonce = esmsInitOptions.nonce;
  if (!nonce && hasDocument) {
    const nonceElement = document.querySelector("script[nonce]");
    if (nonceElement)
      nonce = nonceElement.nonce || nonceElement.getAttribute("nonce");
  }
  const onerror = globalHook(esmsInitOptions.onerror || noop2);
  const onpolyfill = esmsInitOptions.onpolyfill ? globalHook(esmsInitOptions.onpolyfill) : () => {
    console.log("%c^^ Module TypeError above is polyfilled and can be ignored ^^", "font-weight:900;color:#391");
  };
  const { revokeBlobURLs, noLoadEventRetriggers, enforceIntegrity } = esmsInitOptions;
  function globalHook(name) {
    return typeof name === "string" ? self[name] : name;
  }
  const enable = Array.isArray(esmsInitOptions.polyfillEnable) ? esmsInitOptions.polyfillEnable : [];
  const cssModulesEnabled = enable.includes("css-modules");
  const jsonModulesEnabled = enable.includes("json-modules");
  const edge = !navigator.userAgentData && !!navigator.userAgent.match(/Edge\/\d+\.\d+/);
  const baseUrl = hasDocument ? document.baseURI : `${location.protocol}//${location.host}${location.pathname.includes("/") ? location.pathname.slice(0, location.pathname.lastIndexOf("/") + 1) : location.pathname}`;
  function createBlob(source, type = "text/javascript") {
    return URL.createObjectURL(new Blob([source], { type }));
  }
  const eoop = (err2) => setTimeout(() => {
    throw err2;
  });
  const throwError = (err2) => {
    (self.reportError || hasWindow && window.safari && console.error || eoop)(err2), void onerror(err2);
  };
  function fromParent(parent) {
    return parent ? ` imported from ${parent}` : "";
  }
  let importMapSrcOrLazy = false;
  function setImportMapSrcOrLazy() {
    importMapSrcOrLazy = true;
  }
  if (!shimMode) {
    if (document.querySelectorAll("script[type=module-shim],script[type=importmap-shim],link[rel=modulepreload-shim]").length) {
      shimMode = true;
    } else {
      let seenScript = false;
      for (const script of document.querySelectorAll("script[type=module],script[type=importmap]")) {
        if (!seenScript) {
          if (script.type === "module" && !script.ep)
            seenScript = true;
        } else if (script.type === "importmap" && seenScript) {
          importMapSrcOrLazy = true;
          break;
        }
      }
    }
  }
  const backslashRegEx = /\\/g;
  function isURL(url) {
    if (url.indexOf(":") === -1)
      return false;
    try {
      new URL(url);
      return true;
    } catch (_2) {
      return false;
    }
  }
  function resolveUrl(relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (isURL(relUrl) ? relUrl : resolveIfNotPlainOrUrl("./" + relUrl, parentUrl));
  }
  function resolveIfNotPlainOrUrl(relUrl, parentUrl) {
    const queryHashIndex = parentUrl.indexOf("?", parentUrl.indexOf("#") === -1 ? parentUrl.indexOf("#") : parentUrl.length);
    if (queryHashIndex !== -1)
      parentUrl = parentUrl.slice(0, queryHashIndex);
    if (relUrl.indexOf("\\") !== -1)
      relUrl = relUrl.replace(backslashRegEx, "/");
    if (relUrl[0] === "/" && relUrl[1] === "/") {
      return parentUrl.slice(0, parentUrl.indexOf(":") + 1) + relUrl;
    } else if (relUrl[0] === "." && (relUrl[1] === "/" || relUrl[1] === "." && (relUrl[2] === "/" || relUrl.length === 2 && (relUrl += "/")) || relUrl.length === 1 && (relUrl += "/")) || relUrl[0] === "/") {
      const parentProtocol = parentUrl.slice(0, parentUrl.indexOf(":") + 1);
      let pathname;
      if (parentUrl[parentProtocol.length + 1] === "/") {
        if (parentProtocol !== "file:") {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf("/") + 1);
        } else {
          pathname = parentUrl.slice(8);
        }
      } else {
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === "/"));
      }
      if (relUrl[0] === "/")
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;
      const segmented = pathname.slice(0, pathname.lastIndexOf("/") + 1) + relUrl;
      const output = [];
      let segmentIndex = -1;
      for (let i3 = 0; i3 < segmented.length; i3++) {
        if (segmentIndex !== -1) {
          if (segmented[i3] === "/") {
            output.push(segmented.slice(segmentIndex, i3 + 1));
            segmentIndex = -1;
          }
          continue;
        } else if (segmented[i3] === ".") {
          if (segmented[i3 + 1] === "." && (segmented[i3 + 2] === "/" || i3 + 2 === segmented.length)) {
            output.pop();
            i3 += 2;
            continue;
          } else if (segmented[i3 + 1] === "/" || i3 + 1 === segmented.length) {
            i3 += 1;
            continue;
          }
        }
        while (segmented[i3] === "/")
          i3++;
        segmentIndex = i3;
      }
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join("");
    }
  }
  function resolveAndComposeImportMap(json, baseUrl2, parentMap) {
    const outMap = { imports: Object.assign({}, parentMap.imports), scopes: Object.assign({}, parentMap.scopes) };
    if (json.imports)
      resolveAndComposePackages(json.imports, outMap.imports, baseUrl2, parentMap);
    if (json.scopes)
      for (let s2 in json.scopes) {
        const resolvedScope = resolveUrl(s2, baseUrl2);
        resolveAndComposePackages(json.scopes[s2], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl2, parentMap);
      }
    return outMap;
  }
  function getMatch(path, matchObj) {
    if (matchObj[path])
      return path;
    let sepIndex = path.length;
    do {
      const segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf("/", sepIndex - 1)) !== -1);
  }
  function applyPackages(id, packages) {
    const pkgName = getMatch(id, packages);
    if (pkgName) {
      const pkg = packages[pkgName];
      if (pkg === null)
        return;
      return pkg + id.slice(pkgName.length);
    }
  }
  function resolveImportMap(importMap2, resolvedOrPlain, parentUrl) {
    let scopeUrl = parentUrl && getMatch(parentUrl, importMap2.scopes);
    while (scopeUrl) {
      const packageResolution = applyPackages(resolvedOrPlain, importMap2.scopes[scopeUrl]);
      if (packageResolution)
        return packageResolution;
      scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf("/")), importMap2.scopes);
    }
    return applyPackages(resolvedOrPlain, importMap2.imports) || resolvedOrPlain.indexOf(":") !== -1 && resolvedOrPlain;
  }
  function resolveAndComposePackages(packages, outPackages, baseUrl2, parentMap) {
    for (let p2 in packages) {
      const resolvedLhs = resolveIfNotPlainOrUrl(p2, baseUrl2) || p2;
      if ((!shimMode || !mapOverrides) && outPackages[resolvedLhs] && outPackages[resolvedLhs] !== packages[resolvedLhs]) {
        throw Error(`Rejected map override "${resolvedLhs}" from ${outPackages[resolvedLhs]} to ${packages[resolvedLhs]}.`);
      }
      let target = packages[p2];
      if (typeof target !== "string")
        continue;
      const mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(target, baseUrl2) || target, baseUrl2);
      if (mapped) {
        outPackages[resolvedLhs] = mapped;
        continue;
      }
      console.warn(`Mapping "${p2}" -> "${packages[p2]}" does not resolve`);
    }
  }
  let err;
  window.addEventListener("error", (_err) => err = _err);
  function dynamicImportScript(url, { errUrl = url } = {}) {
    err = void 0;
    const src = createBlob(`import*as m from'${url}';self._esmsi=m`);
    const s2 = Object.assign(document.createElement("script"), { type: "module", src, ep: true });
    s2.setAttribute("nonce", nonce);
    s2.setAttribute("noshim", "");
    const p2 = new Promise((resolve2, reject) => {
      s2.addEventListener("error", cb);
      s2.addEventListener("load", cb);
      function cb(_err) {
        document.head.removeChild(s2);
        if (self._esmsi) {
          resolve2(self._esmsi, baseUrl);
          self._esmsi = void 0;
        } else {
          reject(!(_err instanceof Event) && _err || err && err.error || new Error(`Error loading or executing the graph of ${errUrl} (check the console for ${src}).`));
          err = void 0;
        }
      }
    });
    document.head.appendChild(s2);
    return p2;
  }
  let dynamicImport = dynamicImportScript;
  const supportsDynamicImportCheck = dynamicImportScript(createBlob("export default u=>import(u)")).then((_dynamicImport) => {
    if (_dynamicImport)
      dynamicImport = _dynamicImport.default;
    return !!_dynamicImport;
  }, noop2);
  let supportsJsonAssertions = false;
  let supportsCssAssertions = false;
  let supportsImportMaps = hasDocument && HTMLScriptElement.supports ? HTMLScriptElement.supports("importmap") : false;
  let supportsImportMeta = supportsImportMaps;
  let supportsDynamicImport = false;
  const featureDetectionPromise = Promise.resolve(supportsImportMaps || supportsDynamicImportCheck).then((_supportsDynamicImport) => {
    if (!_supportsDynamicImport)
      return;
    supportsDynamicImport = true;
    return Promise.all([
      supportsImportMaps || dynamicImport(createBlob("import.meta")).then(() => supportsImportMeta = true, noop2),
      cssModulesEnabled && dynamicImport(createBlob(`import"${createBlob("", "text/css")}"assert{type:"css"}`)).then(() => supportsCssAssertions = true, noop2),
      jsonModulesEnabled && dynamicImport(createBlob(`import"${createBlob("{}", "text/json")}"assert{type:"json"}`)).then(() => supportsJsonAssertions = true, noop2),
      supportsImportMaps || hasDocument && (HTMLScriptElement.supports || new Promise((resolve2) => {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.setAttribute("nonce", nonce);
        iframe.srcdoc = `<!doctype html><script nonce="${nonce}"><${""}/script>`;
        document.head.appendChild(iframe);
        iframe.onload = () => {
          self._$s = (v) => {
            document.head.removeChild(iframe);
            supportsImportMaps = v;
            delete self._$s;
            resolve2();
          };
          const supportsSrcDoc = iframe.contentDocument.head.childNodes.length > 0;
          const importMapTest = `<!doctype html><script type=importmap nonce="${nonce}">{"imports":{"x":"${createBlob("")}"}<${""}/script><script nonce="${nonce}">import('x').catch(() => {}).then(v=>parent._$s(!!v))<${""}/script>`;
          if (supportsSrcDoc)
            iframe.srcdoc = importMapTest;
          else
            iframe.contentDocument.write(importMapTest);
        };
      }))
    ]);
  });
  let e, a, r2, i2 = 2 << 19;
  const s = 1 === new Uint8Array(new Uint16Array([1]).buffer)[0] ? function(e2, a2) {
    const r3 = e2.length;
    let i3 = 0;
    for (; i3 < r3; )
      a2[i3] = e2.charCodeAt(i3++);
  } : function(e2, a2) {
    const r3 = e2.length;
    let i3 = 0;
    for (; i3 < r3; ) {
      const r4 = e2.charCodeAt(i3);
      a2[i3++] = (255 & r4) << 8 | r4 >>> 8;
    }
  }, t = "xportmportlassetafromssertvoyiedelecontininstantybreareturdebuggeawaithrwhileforifcatcfinallels";
  let c$1, f, n;
  function parse(l2, k2 = "@") {
    c$1 = l2, f = k2;
    const u2 = 2 * c$1.length + (2 << 18);
    if (u2 > i2 || !e) {
      for (; u2 > i2; )
        i2 *= 2;
      a = new ArrayBuffer(i2), s(t, new Uint16Array(a, 16, 95)), e = function(e2, a2, r3) {
        ;
        var i3 = new e2.Int8Array(r3), s2 = new e2.Int16Array(r3), t2 = new e2.Int32Array(r3), c2 = new e2.Uint8Array(r3), f2 = new e2.Uint16Array(r3), n2 = 1008;
        function b2(e3) {
          e3 = e3 | 0;
          var a3 = 0, r4 = 0, c3 = 0, b3 = 0, o3 = 0, w3 = 0;
          w3 = n2;
          n2 = n2 + 10240 | 0;
          i3[775] = 1;
          s2[385] = 0;
          s2[386] = 0;
          t2[62] = t2[2];
          i3[776] = 0;
          t2[61] = 0;
          i3[774] = 0;
          t2[63] = w3 + 2048;
          t2[64] = w3;
          i3[777] = 0;
          e3 = (t2[3] | 0) + -2 | 0;
          t2[65] = e3;
          a3 = e3 + (t2[59] << 1) | 0;
          t2[66] = a3;
          e:
            while (1) {
              r4 = e3 + 2 | 0;
              t2[65] = r4;
              if (e3 >>> 0 >= a3 >>> 0) {
                b3 = 18;
                break;
              }
              a:
                do {
                  switch (s2[r4 >> 1] | 0) {
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 32:
                      break;
                    case 101: {
                      if ((((s2[386] | 0) == 0 ? F(r4) | 0 : 0) ? (m2(e3 + 4 | 0, 16, 10) | 0) == 0 : 0) ? (l3(), (i3[775] | 0) == 0) : 0) {
                        b3 = 9;
                        break e;
                      } else
                        b3 = 17;
                      break;
                    }
                    case 105: {
                      if (F(r4) | 0 ? (m2(e3 + 4 | 0, 26, 10) | 0) == 0 : 0) {
                        k3();
                        b3 = 17;
                      } else
                        b3 = 17;
                      break;
                    }
                    case 59: {
                      b3 = 17;
                      break;
                    }
                    case 47:
                      switch (s2[e3 + 4 >> 1] | 0) {
                        case 47: {
                          E();
                          break a;
                        }
                        case 42: {
                          y(1);
                          break a;
                        }
                        default: {
                          b3 = 16;
                          break e;
                        }
                      }
                    default: {
                      b3 = 16;
                      break e;
                    }
                  }
                } while (0);
              if ((b3 | 0) == 17) {
                b3 = 0;
                t2[62] = t2[65];
              }
              e3 = t2[65] | 0;
              a3 = t2[66] | 0;
            }
          if ((b3 | 0) == 9) {
            e3 = t2[65] | 0;
            t2[62] = e3;
            b3 = 19;
          } else if ((b3 | 0) == 16) {
            i3[775] = 0;
            t2[65] = e3;
            b3 = 19;
          } else if ((b3 | 0) == 18)
            if (!(i3[774] | 0)) {
              e3 = r4;
              b3 = 19;
            } else
              e3 = 0;
          do {
            if ((b3 | 0) == 19) {
              e:
                while (1) {
                  a3 = e3 + 2 | 0;
                  t2[65] = a3;
                  c3 = a3;
                  if (e3 >>> 0 >= (t2[66] | 0) >>> 0) {
                    b3 = 82;
                    break;
                  }
                  a:
                    do {
                      switch (s2[a3 >> 1] | 0) {
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 32:
                          break;
                        case 101: {
                          if (((s2[386] | 0) == 0 ? F(a3) | 0 : 0) ? (m2(e3 + 4 | 0, 16, 10) | 0) == 0 : 0) {
                            l3();
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 105: {
                          if (F(a3) | 0 ? (m2(e3 + 4 | 0, 26, 10) | 0) == 0 : 0) {
                            k3();
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 99: {
                          if ((F(a3) | 0 ? (m2(e3 + 4 | 0, 36, 8) | 0) == 0 : 0) ? R(s2[e3 + 12 >> 1] | 0) | 0 : 0) {
                            i3[777] = 1;
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 40: {
                          c3 = t2[63] | 0;
                          a3 = s2[386] | 0;
                          b3 = a3 & 65535;
                          t2[c3 + (b3 << 3) >> 2] = 1;
                          r4 = t2[62] | 0;
                          s2[386] = a3 + 1 << 16 >> 16;
                          t2[c3 + (b3 << 3) + 4 >> 2] = r4;
                          b3 = 81;
                          break;
                        }
                        case 41: {
                          a3 = s2[386] | 0;
                          if (!(a3 << 16 >> 16)) {
                            b3 = 36;
                            break e;
                          }
                          a3 = a3 + -1 << 16 >> 16;
                          s2[386] = a3;
                          r4 = s2[385] | 0;
                          if (r4 << 16 >> 16 != 0 ? (o3 = t2[(t2[64] | 0) + ((r4 & 65535) + -1 << 2) >> 2] | 0, (t2[o3 + 20 >> 2] | 0) == (t2[(t2[63] | 0) + ((a3 & 65535) << 3) + 4 >> 2] | 0)) : 0) {
                            a3 = o3 + 4 | 0;
                            if (!(t2[a3 >> 2] | 0))
                              t2[a3 >> 2] = c3;
                            t2[o3 + 12 >> 2] = e3 + 4;
                            s2[385] = r4 + -1 << 16 >> 16;
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 123: {
                          b3 = t2[62] | 0;
                          c3 = t2[56] | 0;
                          e3 = b3;
                          do {
                            if ((s2[b3 >> 1] | 0) == 41 & (c3 | 0) != 0 ? (t2[c3 + 4 >> 2] | 0) == (b3 | 0) : 0) {
                              a3 = t2[57] | 0;
                              t2[56] = a3;
                              if (!a3) {
                                t2[52] = 0;
                                break;
                              } else {
                                t2[a3 + 28 >> 2] = 0;
                                break;
                              }
                            }
                          } while (0);
                          c3 = t2[63] | 0;
                          r4 = s2[386] | 0;
                          b3 = r4 & 65535;
                          t2[c3 + (b3 << 3) >> 2] = (i3[777] | 0) == 0 ? 2 : 6;
                          s2[386] = r4 + 1 << 16 >> 16;
                          t2[c3 + (b3 << 3) + 4 >> 2] = e3;
                          i3[777] = 0;
                          b3 = 81;
                          break;
                        }
                        case 125: {
                          e3 = s2[386] | 0;
                          if (!(e3 << 16 >> 16)) {
                            b3 = 49;
                            break e;
                          }
                          c3 = t2[63] | 0;
                          b3 = e3 + -1 << 16 >> 16;
                          s2[386] = b3;
                          if ((t2[c3 + ((b3 & 65535) << 3) >> 2] | 0) == 4) {
                            h3();
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 39: {
                          d2(39);
                          b3 = 81;
                          break;
                        }
                        case 34: {
                          d2(34);
                          b3 = 81;
                          break;
                        }
                        case 47:
                          switch (s2[e3 + 4 >> 1] | 0) {
                            case 47: {
                              E();
                              break a;
                            }
                            case 42: {
                              y(1);
                              break a;
                            }
                            default: {
                              e3 = t2[62] | 0;
                              a3 = s2[e3 >> 1] | 0;
                              r:
                                do {
                                  if (U(a3) | 0)
                                    switch (a3 << 16 >> 16) {
                                      case 46:
                                        if (((s2[e3 + -2 >> 1] | 0) + -48 & 65535) < 10) {
                                          b3 = 65;
                                          break r;
                                        } else {
                                          b3 = 69;
                                          break r;
                                        }
                                      case 43:
                                        if ((s2[e3 + -2 >> 1] | 0) == 43) {
                                          b3 = 65;
                                          break r;
                                        } else {
                                          b3 = 69;
                                          break r;
                                        }
                                      case 45:
                                        if ((s2[e3 + -2 >> 1] | 0) == 45) {
                                          b3 = 65;
                                          break r;
                                        } else {
                                          b3 = 69;
                                          break r;
                                        }
                                      default: {
                                        b3 = 69;
                                        break r;
                                      }
                                    }
                                  else
                                    switch (a3 << 16 >> 16) {
                                      case 41:
                                        if (z(t2[(t2[63] | 0) + (f2[386] << 3) + 4 >> 2] | 0) | 0) {
                                          b3 = 69;
                                          break r;
                                        } else {
                                          b3 = 65;
                                          break r;
                                        }
                                      case 125:
                                        if (p2(t2[(t2[63] | 0) + (f2[386] << 3) + 4 >> 2] | 0) | 0) {
                                          b3 = 69;
                                          break r;
                                        } else {
                                          b3 = 65;
                                          break r;
                                        }
                                      default: {
                                        b3 = 65;
                                        break r;
                                      }
                                    }
                                } while (0);
                              r:
                                do {
                                  if ((b3 | 0) == 65) {
                                    b3 = 0;
                                    if ((t2[(t2[63] | 0) + (f2[386] << 3) >> 2] | 0) != 6 ? !(u3(e3) | 0) : 0) {
                                      switch (a3 << 16 >> 16) {
                                        case 0: {
                                          b3 = 69;
                                          break r;
                                        }
                                        case 47: {
                                          if (i3[776] | 0) {
                                            b3 = 69;
                                            break r;
                                          }
                                          break;
                                        }
                                        default: {
                                        }
                                      }
                                      r4 = t2[3] | 0;
                                      do {
                                        if (e3 >>> 0 <= r4 >>> 0)
                                          break;
                                        e3 = e3 + -2 | 0;
                                        t2[62] = e3;
                                        a3 = s2[e3 >> 1] | 0;
                                      } while (!(B(a3) | 0));
                                      if (D(a3) | 0) {
                                        do {
                                          if (e3 >>> 0 <= r4 >>> 0)
                                            break;
                                          e3 = e3 + -2 | 0;
                                          t2[62] = e3;
                                        } while (D(s2[e3 >> 1] | 0) | 0);
                                        if ($(e3) | 0) {
                                          g();
                                          i3[776] = 0;
                                          b3 = 81;
                                          break a;
                                        } else
                                          e3 = 1;
                                      } else
                                        e3 = 1;
                                    } else
                                      b3 = 69;
                                  }
                                } while (0);
                              if ((b3 | 0) == 69) {
                                g();
                                e3 = 0;
                              }
                              i3[776] = e3;
                              b3 = 81;
                              break a;
                            }
                          }
                        case 96: {
                          c3 = t2[63] | 0;
                          r4 = s2[386] | 0;
                          b3 = r4 & 65535;
                          t2[c3 + (b3 << 3) + 4 >> 2] = t2[62];
                          s2[386] = r4 + 1 << 16 >> 16;
                          t2[c3 + (b3 << 3) >> 2] = 3;
                          h3();
                          b3 = 81;
                          break;
                        }
                        default:
                          b3 = 81;
                      }
                    } while (0);
                  if ((b3 | 0) == 81) {
                    b3 = 0;
                    t2[62] = t2[65];
                  }
                  e3 = t2[65] | 0;
                }
              if ((b3 | 0) == 36) {
                Q();
                e3 = 0;
                break;
              } else if ((b3 | 0) == 49) {
                Q();
                e3 = 0;
                break;
              } else if ((b3 | 0) == 82) {
                e3 = (i3[774] | 0) == 0 ? (s2[385] | s2[386]) << 16 >> 16 == 0 : 0;
                break;
              }
            }
          } while (0);
          n2 = w3;
          return e3 | 0;
        }
        function l3() {
          var e3 = 0, a3 = 0, r4 = 0, c3 = 0, f3 = 0, n3 = 0, b3 = 0;
          f3 = t2[65] | 0;
          n3 = t2[58] | 0;
          b3 = f3 + 12 | 0;
          t2[65] = b3;
          r4 = w2(1) | 0;
          e3 = t2[65] | 0;
          if (!((e3 | 0) == (b3 | 0) ? !(I(r4) | 0) : 0))
            c3 = 3;
          e:
            do {
              if ((c3 | 0) == 3) {
                a:
                  do {
                    switch (r4 << 16 >> 16) {
                      case 123: {
                        t2[65] = e3 + 2;
                        e3 = w2(1) | 0;
                        r4 = t2[65] | 0;
                        while (1) {
                          if (T(e3) | 0) {
                            d2(e3);
                            e3 = (t2[65] | 0) + 2 | 0;
                            t2[65] = e3;
                          } else {
                            P(e3) | 0;
                            e3 = t2[65] | 0;
                          }
                          w2(1) | 0;
                          e3 = v(r4, e3) | 0;
                          if (e3 << 16 >> 16 == 44) {
                            t2[65] = (t2[65] | 0) + 2;
                            e3 = w2(1) | 0;
                          }
                          a3 = r4;
                          r4 = t2[65] | 0;
                          if (e3 << 16 >> 16 == 125) {
                            c3 = 15;
                            break;
                          }
                          if ((r4 | 0) == (a3 | 0)) {
                            c3 = 12;
                            break;
                          }
                          if (r4 >>> 0 > (t2[66] | 0) >>> 0) {
                            c3 = 14;
                            break;
                          }
                        }
                        if ((c3 | 0) == 12) {
                          Q();
                          break e;
                        } else if ((c3 | 0) == 14) {
                          Q();
                          break e;
                        } else if ((c3 | 0) == 15) {
                          t2[65] = r4 + 2;
                          break a;
                        }
                        break;
                      }
                      case 42: {
                        t2[65] = e3 + 2;
                        w2(1) | 0;
                        b3 = t2[65] | 0;
                        v(b3, b3) | 0;
                        break;
                      }
                      default: {
                        i3[775] = 0;
                        switch (r4 << 16 >> 16) {
                          case 100: {
                            O(e3, e3 + 14 | 0, 0, 0);
                            break e;
                          }
                          case 97: {
                            t2[65] = e3 + 10;
                            w2(1) | 0;
                            e3 = t2[65] | 0;
                            c3 = 20;
                            break;
                          }
                          case 102: {
                            c3 = 20;
                            break;
                          }
                          case 99: {
                            if ((m2(e3 + 2 | 0, 36, 8) | 0) == 0 ? (a3 = e3 + 10 | 0, B(s2[a3 >> 1] | 0) | 0) : 0) {
                              t2[65] = a3;
                              b3 = w2(1) | 0;
                              n3 = t2[65] | 0;
                              P(b3) | 0;
                              b3 = t2[65] | 0;
                              O(n3, b3, n3, b3);
                              t2[65] = (t2[65] | 0) + -2;
                              break e;
                            }
                            e3 = e3 + 4 | 0;
                            t2[65] = e3;
                            break;
                          }
                          case 108:
                          case 118:
                            break;
                          default:
                            break e;
                        }
                        if ((c3 | 0) == 20) {
                          t2[65] = e3 + 16;
                          e3 = w2(1) | 0;
                          if (e3 << 16 >> 16 == 42) {
                            t2[65] = (t2[65] | 0) + 2;
                            e3 = w2(1) | 0;
                          }
                          n3 = t2[65] | 0;
                          P(e3) | 0;
                          b3 = t2[65] | 0;
                          O(n3, b3, n3, b3);
                          t2[65] = (t2[65] | 0) + -2;
                          break e;
                        }
                        e3 = e3 + 4 | 0;
                        t2[65] = e3;
                        i3[775] = 0;
                        r:
                          while (1) {
                            t2[65] = e3 + 2;
                            b3 = w2(1) | 0;
                            e3 = t2[65] | 0;
                            switch ((P(b3) | 0) << 16 >> 16) {
                              case 91:
                              case 123:
                                break r;
                              default: {
                              }
                            }
                            a3 = t2[65] | 0;
                            if ((a3 | 0) == (e3 | 0))
                              break e;
                            O(e3, a3, e3, a3);
                            if ((w2(1) | 0) << 16 >> 16 != 44)
                              break;
                            e3 = t2[65] | 0;
                          }
                        t2[65] = (t2[65] | 0) + -2;
                        break e;
                      }
                    }
                  } while (0);
                b3 = (w2(1) | 0) << 16 >> 16 == 102;
                e3 = t2[65] | 0;
                if (b3 ? (m2(e3 + 2 | 0, 52, 6) | 0) == 0 : 0) {
                  t2[65] = e3 + 8;
                  o2(f3, w2(1) | 0);
                  e3 = (n3 | 0) == 0 ? 212 : n3 + 16 | 0;
                  while (1) {
                    e3 = t2[e3 >> 2] | 0;
                    if (!e3)
                      break e;
                    t2[e3 + 12 >> 2] = 0;
                    t2[e3 + 8 >> 2] = 0;
                    e3 = e3 + 16 | 0;
                  }
                }
                t2[65] = e3 + -2;
              }
            } while (0);
          return;
        }
        function k3() {
          var e3 = 0, a3 = 0, r4 = 0, c3 = 0, f3 = 0, n3 = 0;
          f3 = t2[65] | 0;
          a3 = f3 + 12 | 0;
          t2[65] = a3;
          e:
            do {
              switch ((w2(1) | 0) << 16 >> 16) {
                case 40: {
                  a3 = t2[63] | 0;
                  n3 = s2[386] | 0;
                  r4 = n3 & 65535;
                  t2[a3 + (r4 << 3) >> 2] = 5;
                  e3 = t2[65] | 0;
                  s2[386] = n3 + 1 << 16 >> 16;
                  t2[a3 + (r4 << 3) + 4 >> 2] = e3;
                  if ((s2[t2[62] >> 1] | 0) != 46) {
                    t2[65] = e3 + 2;
                    n3 = w2(1) | 0;
                    A(f3, t2[65] | 0, 0, e3);
                    a3 = t2[56] | 0;
                    r4 = t2[64] | 0;
                    f3 = s2[385] | 0;
                    s2[385] = f3 + 1 << 16 >> 16;
                    t2[r4 + ((f3 & 65535) << 2) >> 2] = a3;
                    switch (n3 << 16 >> 16) {
                      case 39: {
                        d2(39);
                        break;
                      }
                      case 34: {
                        d2(34);
                        break;
                      }
                      default: {
                        t2[65] = (t2[65] | 0) + -2;
                        break e;
                      }
                    }
                    e3 = (t2[65] | 0) + 2 | 0;
                    t2[65] = e3;
                    switch ((w2(1) | 0) << 16 >> 16) {
                      case 44: {
                        t2[65] = (t2[65] | 0) + 2;
                        w2(1) | 0;
                        f3 = t2[56] | 0;
                        t2[f3 + 4 >> 2] = e3;
                        n3 = t2[65] | 0;
                        t2[f3 + 16 >> 2] = n3;
                        i3[f3 + 24 >> 0] = 1;
                        t2[65] = n3 + -2;
                        break e;
                      }
                      case 41: {
                        s2[386] = (s2[386] | 0) + -1 << 16 >> 16;
                        n3 = t2[56] | 0;
                        t2[n3 + 4 >> 2] = e3;
                        t2[n3 + 12 >> 2] = (t2[65] | 0) + 2;
                        i3[n3 + 24 >> 0] = 1;
                        s2[385] = (s2[385] | 0) + -1 << 16 >> 16;
                        break e;
                      }
                      default: {
                        t2[65] = (t2[65] | 0) + -2;
                        break e;
                      }
                    }
                  }
                  break;
                }
                case 46: {
                  t2[65] = (t2[65] | 0) + 2;
                  if (((w2(1) | 0) << 16 >> 16 == 109 ? (e3 = t2[65] | 0, (m2(e3 + 2 | 0, 44, 6) | 0) == 0) : 0) ? (s2[t2[62] >> 1] | 0) != 46 : 0)
                    A(f3, f3, e3 + 8 | 0, 2);
                  break;
                }
                case 42:
                case 39:
                case 34: {
                  c3 = 16;
                  break;
                }
                case 123: {
                  e3 = t2[65] | 0;
                  if (s2[386] | 0) {
                    t2[65] = e3 + -2;
                    break e;
                  }
                  while (1) {
                    if (e3 >>> 0 >= (t2[66] | 0) >>> 0)
                      break;
                    e3 = w2(1) | 0;
                    if (!(T(e3) | 0)) {
                      if (e3 << 16 >> 16 == 125) {
                        c3 = 31;
                        break;
                      }
                    } else
                      d2(e3);
                    e3 = (t2[65] | 0) + 2 | 0;
                    t2[65] = e3;
                  }
                  if ((c3 | 0) == 31)
                    t2[65] = (t2[65] | 0) + 2;
                  w2(1) | 0;
                  e3 = t2[65] | 0;
                  if (m2(e3, 50, 8) | 0) {
                    Q();
                    break e;
                  }
                  t2[65] = e3 + 8;
                  e3 = w2(1) | 0;
                  if (T(e3) | 0) {
                    o2(f3, e3);
                    break e;
                  } else {
                    Q();
                    break e;
                  }
                }
                default:
                  if ((t2[65] | 0) != (a3 | 0))
                    c3 = 16;
              }
            } while (0);
          do {
            if ((c3 | 0) == 16) {
              if (s2[386] | 0) {
                t2[65] = (t2[65] | 0) + -2;
                break;
              }
              e3 = t2[66] | 0;
              a3 = t2[65] | 0;
              while (1) {
                if (a3 >>> 0 >= e3 >>> 0) {
                  c3 = 23;
                  break;
                }
                r4 = s2[a3 >> 1] | 0;
                if (T(r4) | 0) {
                  c3 = 21;
                  break;
                }
                n3 = a3 + 2 | 0;
                t2[65] = n3;
                a3 = n3;
              }
              if ((c3 | 0) == 21) {
                o2(f3, r4);
                break;
              } else if ((c3 | 0) == 23) {
                Q();
                break;
              }
            }
          } while (0);
          return;
        }
        function u3(e3) {
          e3 = e3 | 0;
          e:
            do {
              switch (s2[e3 >> 1] | 0) {
                case 100:
                  switch (s2[e3 + -2 >> 1] | 0) {
                    case 105: {
                      e3 = S(e3 + -4 | 0, 68, 2) | 0;
                      break e;
                    }
                    case 108: {
                      e3 = S(e3 + -4 | 0, 72, 3) | 0;
                      break e;
                    }
                    default: {
                      e3 = 0;
                      break e;
                    }
                  }
                case 101:
                  switch (s2[e3 + -2 >> 1] | 0) {
                    case 115:
                      switch (s2[e3 + -4 >> 1] | 0) {
                        case 108: {
                          e3 = j(e3 + -6 | 0, 101) | 0;
                          break e;
                        }
                        case 97: {
                          e3 = j(e3 + -6 | 0, 99) | 0;
                          break e;
                        }
                        default: {
                          e3 = 0;
                          break e;
                        }
                      }
                    case 116: {
                      e3 = S(e3 + -4 | 0, 78, 4) | 0;
                      break e;
                    }
                    case 117: {
                      e3 = S(e3 + -4 | 0, 86, 6) | 0;
                      break e;
                    }
                    default: {
                      e3 = 0;
                      break e;
                    }
                  }
                case 102: {
                  if ((s2[e3 + -2 >> 1] | 0) == 111 ? (s2[e3 + -4 >> 1] | 0) == 101 : 0)
                    switch (s2[e3 + -6 >> 1] | 0) {
                      case 99: {
                        e3 = S(e3 + -8 | 0, 98, 6) | 0;
                        break e;
                      }
                      case 112: {
                        e3 = S(e3 + -8 | 0, 110, 2) | 0;
                        break e;
                      }
                      default: {
                        e3 = 0;
                        break e;
                      }
                    }
                  else
                    e3 = 0;
                  break;
                }
                case 107: {
                  e3 = S(e3 + -2 | 0, 114, 4) | 0;
                  break;
                }
                case 110: {
                  e3 = e3 + -2 | 0;
                  if (j(e3, 105) | 0)
                    e3 = 1;
                  else
                    e3 = S(e3, 122, 5) | 0;
                  break;
                }
                case 111: {
                  e3 = j(e3 + -2 | 0, 100) | 0;
                  break;
                }
                case 114: {
                  e3 = S(e3 + -2 | 0, 132, 7) | 0;
                  break;
                }
                case 116: {
                  e3 = S(e3 + -2 | 0, 146, 4) | 0;
                  break;
                }
                case 119:
                  switch (s2[e3 + -2 >> 1] | 0) {
                    case 101: {
                      e3 = j(e3 + -4 | 0, 110) | 0;
                      break e;
                    }
                    case 111: {
                      e3 = S(e3 + -4 | 0, 154, 3) | 0;
                      break e;
                    }
                    default: {
                      e3 = 0;
                      break e;
                    }
                  }
                default:
                  e3 = 0;
              }
            } while (0);
          return e3 | 0;
        }
        function o2(e3, a3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          var r4 = 0, i4 = 0;
          r4 = (t2[65] | 0) + 2 | 0;
          switch (a3 << 16 >> 16) {
            case 39: {
              d2(39);
              i4 = 5;
              break;
            }
            case 34: {
              d2(34);
              i4 = 5;
              break;
            }
            default:
              Q();
          }
          do {
            if ((i4 | 0) == 5) {
              A(e3, r4, t2[65] | 0, 1);
              t2[65] = (t2[65] | 0) + 2;
              i4 = (w2(0) | 0) << 16 >> 16 == 97;
              a3 = t2[65] | 0;
              if (i4 ? (m2(a3 + 2 | 0, 58, 10) | 0) == 0 : 0) {
                t2[65] = a3 + 12;
                if ((w2(1) | 0) << 16 >> 16 != 123) {
                  t2[65] = a3;
                  break;
                }
                e3 = t2[65] | 0;
                r4 = e3;
                e:
                  while (1) {
                    t2[65] = r4 + 2;
                    r4 = w2(1) | 0;
                    switch (r4 << 16 >> 16) {
                      case 39: {
                        d2(39);
                        t2[65] = (t2[65] | 0) + 2;
                        r4 = w2(1) | 0;
                        break;
                      }
                      case 34: {
                        d2(34);
                        t2[65] = (t2[65] | 0) + 2;
                        r4 = w2(1) | 0;
                        break;
                      }
                      default:
                        r4 = P(r4) | 0;
                    }
                    if (r4 << 16 >> 16 != 58) {
                      i4 = 16;
                      break;
                    }
                    t2[65] = (t2[65] | 0) + 2;
                    switch ((w2(1) | 0) << 16 >> 16) {
                      case 39: {
                        d2(39);
                        break;
                      }
                      case 34: {
                        d2(34);
                        break;
                      }
                      default: {
                        i4 = 20;
                        break e;
                      }
                    }
                    t2[65] = (t2[65] | 0) + 2;
                    switch ((w2(1) | 0) << 16 >> 16) {
                      case 125: {
                        i4 = 25;
                        break e;
                      }
                      case 44:
                        break;
                      default: {
                        i4 = 24;
                        break e;
                      }
                    }
                    t2[65] = (t2[65] | 0) + 2;
                    if ((w2(1) | 0) << 16 >> 16 == 125) {
                      i4 = 25;
                      break;
                    }
                    r4 = t2[65] | 0;
                  }
                if ((i4 | 0) == 16) {
                  t2[65] = a3;
                  break;
                } else if ((i4 | 0) == 20) {
                  t2[65] = a3;
                  break;
                } else if ((i4 | 0) == 24) {
                  t2[65] = a3;
                  break;
                } else if ((i4 | 0) == 25) {
                  i4 = t2[56] | 0;
                  t2[i4 + 16 >> 2] = e3;
                  t2[i4 + 12 >> 2] = (t2[65] | 0) + 2;
                  break;
                }
              }
              t2[65] = a3 + -2;
            }
          } while (0);
          return;
        }
        function h3() {
          var e3 = 0, a3 = 0, r4 = 0, i4 = 0;
          a3 = t2[66] | 0;
          r4 = t2[65] | 0;
          e:
            while (1) {
              e3 = r4 + 2 | 0;
              if (r4 >>> 0 >= a3 >>> 0) {
                a3 = 10;
                break;
              }
              switch (s2[e3 >> 1] | 0) {
                case 96: {
                  a3 = 7;
                  break e;
                }
                case 36: {
                  if ((s2[r4 + 4 >> 1] | 0) == 123) {
                    a3 = 6;
                    break e;
                  }
                  break;
                }
                case 92: {
                  e3 = r4 + 4 | 0;
                  break;
                }
                default: {
                }
              }
              r4 = e3;
            }
          if ((a3 | 0) == 6) {
            e3 = r4 + 4 | 0;
            t2[65] = e3;
            a3 = t2[63] | 0;
            i4 = s2[386] | 0;
            r4 = i4 & 65535;
            t2[a3 + (r4 << 3) >> 2] = 4;
            s2[386] = i4 + 1 << 16 >> 16;
            t2[a3 + (r4 << 3) + 4 >> 2] = e3;
          } else if ((a3 | 0) == 7) {
            t2[65] = e3;
            r4 = t2[63] | 0;
            i4 = (s2[386] | 0) + -1 << 16 >> 16;
            s2[386] = i4;
            if ((t2[r4 + ((i4 & 65535) << 3) >> 2] | 0) != 3)
              Q();
          } else if ((a3 | 0) == 10) {
            t2[65] = e3;
            Q();
          }
          return;
        }
        function w2(e3) {
          e3 = e3 | 0;
          var a3 = 0, r4 = 0, i4 = 0;
          r4 = t2[65] | 0;
          e:
            do {
              a3 = s2[r4 >> 1] | 0;
              a:
                do {
                  if (a3 << 16 >> 16 != 47)
                    if (e3)
                      if (R(a3) | 0)
                        break;
                      else
                        break e;
                    else if (D(a3) | 0)
                      break;
                    else
                      break e;
                  else
                    switch (s2[r4 + 2 >> 1] | 0) {
                      case 47: {
                        E();
                        break a;
                      }
                      case 42: {
                        y(e3);
                        break a;
                      }
                      default: {
                        a3 = 47;
                        break e;
                      }
                    }
                } while (0);
              i4 = t2[65] | 0;
              r4 = i4 + 2 | 0;
              t2[65] = r4;
            } while (i4 >>> 0 < (t2[66] | 0) >>> 0);
          return a3 | 0;
        }
        function d2(e3) {
          e3 = e3 | 0;
          var a3 = 0, r4 = 0, i4 = 0, c3 = 0;
          c3 = t2[66] | 0;
          a3 = t2[65] | 0;
          while (1) {
            i4 = a3 + 2 | 0;
            if (a3 >>> 0 >= c3 >>> 0) {
              a3 = 9;
              break;
            }
            r4 = s2[i4 >> 1] | 0;
            if (r4 << 16 >> 16 == e3 << 16 >> 16) {
              a3 = 10;
              break;
            }
            if (r4 << 16 >> 16 == 92) {
              r4 = a3 + 4 | 0;
              if ((s2[r4 >> 1] | 0) == 13) {
                a3 = a3 + 6 | 0;
                a3 = (s2[a3 >> 1] | 0) == 10 ? a3 : r4;
              } else
                a3 = r4;
            } else if (X(r4) | 0) {
              a3 = 9;
              break;
            } else
              a3 = i4;
          }
          if ((a3 | 0) == 9) {
            t2[65] = i4;
            Q();
          } else if ((a3 | 0) == 10)
            t2[65] = i4;
          return;
        }
        function v(e3, a3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          var r4 = 0, i4 = 0, c3 = 0, f3 = 0;
          r4 = t2[65] | 0;
          i4 = s2[r4 >> 1] | 0;
          f3 = (e3 | 0) == (a3 | 0);
          c3 = f3 ? 0 : e3;
          f3 = f3 ? 0 : a3;
          if (i4 << 16 >> 16 == 97) {
            t2[65] = r4 + 4;
            r4 = w2(1) | 0;
            e3 = t2[65] | 0;
            if (T(r4) | 0) {
              d2(r4);
              a3 = (t2[65] | 0) + 2 | 0;
              t2[65] = a3;
            } else {
              P(r4) | 0;
              a3 = t2[65] | 0;
            }
            i4 = w2(1) | 0;
            r4 = t2[65] | 0;
          }
          if ((r4 | 0) != (e3 | 0))
            O(e3, a3, c3, f3);
          return i4 | 0;
        }
        function A(e3, a3, r4, s3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          r4 = r4 | 0;
          s3 = s3 | 0;
          var c3 = 0, f3 = 0;
          c3 = t2[60] | 0;
          t2[60] = c3 + 32;
          f3 = t2[56] | 0;
          t2[((f3 | 0) == 0 ? 208 : f3 + 28 | 0) >> 2] = c3;
          t2[57] = f3;
          t2[56] = c3;
          t2[c3 + 8 >> 2] = e3;
          if (2 == (s3 | 0))
            e3 = r4;
          else
            e3 = 1 == (s3 | 0) ? r4 + 2 | 0 : 0;
          t2[c3 + 12 >> 2] = e3;
          t2[c3 >> 2] = a3;
          t2[c3 + 4 >> 2] = r4;
          t2[c3 + 16 >> 2] = 0;
          t2[c3 + 20 >> 2] = s3;
          i3[c3 + 24 >> 0] = 1 == (s3 | 0) & 1;
          t2[c3 + 28 >> 2] = 0;
          return;
        }
        function C() {
          var e3 = 0, a3 = 0, r4 = 0;
          r4 = t2[66] | 0;
          a3 = t2[65] | 0;
          e:
            while (1) {
              e3 = a3 + 2 | 0;
              if (a3 >>> 0 >= r4 >>> 0) {
                a3 = 6;
                break;
              }
              switch (s2[e3 >> 1] | 0) {
                case 13:
                case 10: {
                  a3 = 6;
                  break e;
                }
                case 93: {
                  a3 = 7;
                  break e;
                }
                case 92: {
                  e3 = a3 + 4 | 0;
                  break;
                }
                default: {
                }
              }
              a3 = e3;
            }
          if ((a3 | 0) == 6) {
            t2[65] = e3;
            Q();
            e3 = 0;
          } else if ((a3 | 0) == 7) {
            t2[65] = e3;
            e3 = 93;
          }
          return e3 | 0;
        }
        function g() {
          var e3 = 0, a3 = 0, r4 = 0;
          e:
            while (1) {
              e3 = t2[65] | 0;
              a3 = e3 + 2 | 0;
              t2[65] = a3;
              if (e3 >>> 0 >= (t2[66] | 0) >>> 0) {
                r4 = 7;
                break;
              }
              switch (s2[a3 >> 1] | 0) {
                case 13:
                case 10: {
                  r4 = 7;
                  break e;
                }
                case 47:
                  break e;
                case 91: {
                  C() | 0;
                  break;
                }
                case 92: {
                  t2[65] = e3 + 4;
                  break;
                }
                default: {
                }
              }
            }
          if ((r4 | 0) == 7)
            Q();
          return;
        }
        function p2(e3) {
          e3 = e3 | 0;
          switch (s2[e3 >> 1] | 0) {
            case 62: {
              e3 = (s2[e3 + -2 >> 1] | 0) == 61;
              break;
            }
            case 41:
            case 59: {
              e3 = 1;
              break;
            }
            case 104: {
              e3 = S(e3 + -2 | 0, 180, 4) | 0;
              break;
            }
            case 121: {
              e3 = S(e3 + -2 | 0, 188, 6) | 0;
              break;
            }
            case 101: {
              e3 = S(e3 + -2 | 0, 200, 3) | 0;
              break;
            }
            default:
              e3 = 0;
          }
          return e3 | 0;
        }
        function y(e3) {
          e3 = e3 | 0;
          var a3 = 0, r4 = 0, i4 = 0, c3 = 0, f3 = 0;
          c3 = (t2[65] | 0) + 2 | 0;
          t2[65] = c3;
          r4 = t2[66] | 0;
          while (1) {
            a3 = c3 + 2 | 0;
            if (c3 >>> 0 >= r4 >>> 0)
              break;
            i4 = s2[a3 >> 1] | 0;
            if (!e3 ? X(i4) | 0 : 0)
              break;
            if (i4 << 16 >> 16 == 42 ? (s2[c3 + 4 >> 1] | 0) == 47 : 0) {
              f3 = 8;
              break;
            }
            c3 = a3;
          }
          if ((f3 | 0) == 8) {
            t2[65] = a3;
            a3 = c3 + 4 | 0;
          }
          t2[65] = a3;
          return;
        }
        function m2(e3, a3, r4) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          r4 = r4 | 0;
          var s3 = 0, t3 = 0;
          e:
            do {
              if (!r4)
                e3 = 0;
              else {
                while (1) {
                  s3 = i3[e3 >> 0] | 0;
                  t3 = i3[a3 >> 0] | 0;
                  if (s3 << 24 >> 24 != t3 << 24 >> 24)
                    break;
                  r4 = r4 + -1 | 0;
                  if (!r4) {
                    e3 = 0;
                    break e;
                  } else {
                    e3 = e3 + 1 | 0;
                    a3 = a3 + 1 | 0;
                  }
                }
                e3 = (s3 & 255) - (t3 & 255) | 0;
              }
            } while (0);
          return e3 | 0;
        }
        function I(e3) {
          e3 = e3 | 0;
          e:
            do {
              switch (e3 << 16 >> 16) {
                case 38:
                case 37:
                case 33: {
                  e3 = 1;
                  break;
                }
                default:
                  if ((e3 & -8) << 16 >> 16 == 40 | (e3 + -58 & 65535) < 6)
                    e3 = 1;
                  else {
                    switch (e3 << 16 >> 16) {
                      case 91:
                      case 93:
                      case 94: {
                        e3 = 1;
                        break e;
                      }
                      default: {
                      }
                    }
                    e3 = (e3 + -123 & 65535) < 4;
                  }
              }
            } while (0);
          return e3 | 0;
        }
        function U(e3) {
          e3 = e3 | 0;
          e:
            do {
              switch (e3 << 16 >> 16) {
                case 38:
                case 37:
                case 33:
                  break;
                default:
                  if (!((e3 + -58 & 65535) < 6 | (e3 + -40 & 65535) < 7 & e3 << 16 >> 16 != 41)) {
                    switch (e3 << 16 >> 16) {
                      case 91:
                      case 94:
                        break e;
                      default: {
                      }
                    }
                    return e3 << 16 >> 16 != 125 & (e3 + -123 & 65535) < 4 | 0;
                  }
              }
            } while (0);
          return 1;
        }
        function x(e3) {
          e3 = e3 | 0;
          var a3 = 0, r4 = 0, i4 = 0, c3 = 0;
          r4 = n2;
          n2 = n2 + 16 | 0;
          i4 = r4;
          t2[i4 >> 2] = 0;
          t2[59] = e3;
          a3 = t2[3] | 0;
          c3 = a3 + (e3 << 1) | 0;
          e3 = c3 + 2 | 0;
          s2[c3 >> 1] = 0;
          t2[i4 >> 2] = e3;
          t2[60] = e3;
          t2[52] = 0;
          t2[56] = 0;
          t2[54] = 0;
          t2[53] = 0;
          t2[58] = 0;
          t2[55] = 0;
          n2 = r4;
          return a3 | 0;
        }
        function S(e3, a3, r4) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          r4 = r4 | 0;
          var i4 = 0, c3 = 0;
          i4 = e3 + (0 - r4 << 1) | 0;
          c3 = i4 + 2 | 0;
          e3 = t2[3] | 0;
          if (c3 >>> 0 >= e3 >>> 0 ? (m2(c3, a3, r4 << 1) | 0) == 0 : 0)
            if ((c3 | 0) == (e3 | 0))
              e3 = 1;
            else
              e3 = B(s2[i4 >> 1] | 0) | 0;
          else
            e3 = 0;
          return e3 | 0;
        }
        function O(e3, a3, r4, i4) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          r4 = r4 | 0;
          i4 = i4 | 0;
          var s3 = 0, c3 = 0;
          s3 = t2[60] | 0;
          t2[60] = s3 + 20;
          c3 = t2[58] | 0;
          t2[((c3 | 0) == 0 ? 212 : c3 + 16 | 0) >> 2] = s3;
          t2[58] = s3;
          t2[s3 >> 2] = e3;
          t2[s3 + 4 >> 2] = a3;
          t2[s3 + 8 >> 2] = r4;
          t2[s3 + 12 >> 2] = i4;
          t2[s3 + 16 >> 2] = 0;
          return;
        }
        function $(e3) {
          e3 = e3 | 0;
          switch (s2[e3 >> 1] | 0) {
            case 107: {
              e3 = S(e3 + -2 | 0, 114, 4) | 0;
              break;
            }
            case 101: {
              if ((s2[e3 + -2 >> 1] | 0) == 117)
                e3 = S(e3 + -4 | 0, 86, 6) | 0;
              else
                e3 = 0;
              break;
            }
            default:
              e3 = 0;
          }
          return e3 | 0;
        }
        function j(e3, a3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          var r4 = 0;
          r4 = t2[3] | 0;
          if (r4 >>> 0 <= e3 >>> 0 ? (s2[e3 >> 1] | 0) == a3 << 16 >> 16 : 0)
            if ((r4 | 0) == (e3 | 0))
              r4 = 1;
            else
              r4 = B(s2[e3 + -2 >> 1] | 0) | 0;
          else
            r4 = 0;
          return r4 | 0;
        }
        function B(e3) {
          e3 = e3 | 0;
          e:
            do {
              if ((e3 + -9 & 65535) < 5)
                e3 = 1;
              else {
                switch (e3 << 16 >> 16) {
                  case 32:
                  case 160: {
                    e3 = 1;
                    break e;
                  }
                  default: {
                  }
                }
                e3 = e3 << 16 >> 16 != 46 & (I(e3) | 0);
              }
            } while (0);
          return e3 | 0;
        }
        function E() {
          var e3 = 0, a3 = 0, r4 = 0;
          e3 = t2[66] | 0;
          r4 = t2[65] | 0;
          e:
            while (1) {
              a3 = r4 + 2 | 0;
              if (r4 >>> 0 >= e3 >>> 0)
                break;
              switch (s2[a3 >> 1] | 0) {
                case 13:
                case 10:
                  break e;
                default:
                  r4 = a3;
              }
            }
          t2[65] = a3;
          return;
        }
        function P(e3) {
          e3 = e3 | 0;
          while (1) {
            if (R(e3) | 0)
              break;
            if (I(e3) | 0)
              break;
            e3 = (t2[65] | 0) + 2 | 0;
            t2[65] = e3;
            e3 = s2[e3 >> 1] | 0;
            if (!(e3 << 16 >> 16)) {
              e3 = 0;
              break;
            }
          }
          return e3 | 0;
        }
        function q() {
          var e3 = 0;
          e3 = t2[(t2[54] | 0) + 20 >> 2] | 0;
          switch (e3 | 0) {
            case 1: {
              e3 = -1;
              break;
            }
            case 2: {
              e3 = -2;
              break;
            }
            default:
              e3 = e3 - (t2[3] | 0) >> 1;
          }
          return e3 | 0;
        }
        function z(e3) {
          e3 = e3 | 0;
          if (!(S(e3, 160, 5) | 0) ? !(S(e3, 170, 3) | 0) : 0)
            e3 = S(e3, 176, 2) | 0;
          else
            e3 = 1;
          return e3 | 0;
        }
        function D(e3) {
          e3 = e3 | 0;
          switch (e3 << 16 >> 16) {
            case 160:
            case 32:
            case 12:
            case 11:
            case 9: {
              e3 = 1;
              break;
            }
            default:
              e3 = 0;
          }
          return e3 | 0;
        }
        function F(e3) {
          e3 = e3 | 0;
          if ((t2[3] | 0) == (e3 | 0))
            e3 = 1;
          else
            e3 = B(s2[e3 + -2 >> 1] | 0) | 0;
          return e3 | 0;
        }
        function G() {
          var e3 = 0;
          e3 = t2[(t2[55] | 0) + 12 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function H() {
          var e3 = 0;
          e3 = t2[(t2[54] | 0) + 12 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function J() {
          var e3 = 0;
          e3 = t2[(t2[55] | 0) + 8 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function K() {
          var e3 = 0;
          e3 = t2[(t2[54] | 0) + 16 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function L() {
          var e3 = 0;
          e3 = t2[(t2[54] | 0) + 4 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function M() {
          var e3 = 0;
          e3 = t2[54] | 0;
          e3 = t2[((e3 | 0) == 0 ? 208 : e3 + 28 | 0) >> 2] | 0;
          t2[54] = e3;
          return (e3 | 0) != 0 | 0;
        }
        function N() {
          var e3 = 0;
          e3 = t2[55] | 0;
          e3 = t2[((e3 | 0) == 0 ? 212 : e3 + 16 | 0) >> 2] | 0;
          t2[55] = e3;
          return (e3 | 0) != 0 | 0;
        }
        function Q() {
          i3[774] = 1;
          t2[61] = (t2[65] | 0) - (t2[3] | 0) >> 1;
          t2[65] = (t2[66] | 0) + 2;
          return;
        }
        function R(e3) {
          e3 = e3 | 0;
          return (e3 | 128) << 16 >> 16 == 160 | (e3 + -9 & 65535) < 5 | 0;
        }
        function T(e3) {
          e3 = e3 | 0;
          return e3 << 16 >> 16 == 39 | e3 << 16 >> 16 == 34 | 0;
        }
        function V() {
          return (t2[(t2[54] | 0) + 8 >> 2] | 0) - (t2[3] | 0) >> 1 | 0;
        }
        function W() {
          return (t2[(t2[55] | 0) + 4 >> 2] | 0) - (t2[3] | 0) >> 1 | 0;
        }
        function X(e3) {
          e3 = e3 | 0;
          return e3 << 16 >> 16 == 13 | e3 << 16 >> 16 == 10 | 0;
        }
        function Y() {
          return (t2[t2[54] >> 2] | 0) - (t2[3] | 0) >> 1 | 0;
        }
        function Z() {
          return (t2[t2[55] >> 2] | 0) - (t2[3] | 0) >> 1 | 0;
        }
        function _2() {
          return c2[(t2[54] | 0) + 24 >> 0] | 0 | 0;
        }
        function ee(e3) {
          e3 = e3 | 0;
          t2[3] = e3;
          return;
        }
        function ae() {
          return (i3[775] | 0) != 0 | 0;
        }
        function re() {
          return t2[61] | 0;
        }
        function ie(e3) {
          e3 = e3 | 0;
          n2 = e3 + 992 + 15 & -16;
          return 992;
        }
        return { su: ie, ai: K, e: re, ee: W, ele: G, els: J, es: Z, f: ae, id: q, ie: L, ip: _2, is: Y, p: b2, re: N, ri: M, sa: x, se: H, ses: ee, ss: V };
      }("undefined" != typeof self ? self : self, {}, a), r2 = e.su(i2 - (2 << 17));
    }
    const h2 = c$1.length + 1;
    e.ses(r2), e.sa(h2 - 1), s(c$1, new Uint16Array(a, r2, h2)), e.p() || (n = e.e(), o());
    const w = [], d = [];
    for (; e.ri(); ) {
      const a2 = e.is(), r3 = e.ie(), i3 = e.ai(), s2 = e.id(), t2 = e.ss(), f2 = e.se();
      let n2;
      e.ip() && (n2 = b(-1 === s2 ? a2 : a2 + 1, c$1.charCodeAt(-1 === s2 ? a2 - 1 : a2))), w.push({ n: n2, s: a2, e: r3, ss: t2, se: f2, d: s2, a: i3 });
    }
    for (; e.re(); ) {
      const a2 = e.es(), r3 = e.ee(), i3 = e.els(), s2 = e.ele(), t2 = c$1.charCodeAt(a2), f2 = i3 >= 0 ? c$1.charCodeAt(i3) : -1;
      d.push({ s: a2, e: r3, ls: i3, le: s2, n: 34 === t2 || 39 === t2 ? b(a2 + 1, t2) : c$1.slice(a2, r3), ln: i3 < 0 ? void 0 : 34 === f2 || 39 === f2 ? b(i3 + 1, f2) : c$1.slice(i3, s2) });
    }
    return [w, d, !!e.f()];
  }
  function b(e2, a2) {
    n = e2;
    let r3 = "", i3 = n;
    for (; ; ) {
      n >= c$1.length && o();
      const e3 = c$1.charCodeAt(n);
      if (e3 === a2)
        break;
      92 === e3 ? (r3 += c$1.slice(i3, n), r3 += l(), i3 = n) : (8232 === e3 || 8233 === e3 || u(e3) && o(), ++n);
    }
    return r3 += c$1.slice(i3, n++), r3;
  }
  function l() {
    let e2 = c$1.charCodeAt(++n);
    switch (++n, e2) {
      case 110:
        return "\n";
      case 114:
        return "\r";
      case 120:
        return String.fromCharCode(k(2));
      case 117:
        return function() {
          let e3;
          123 === c$1.charCodeAt(n) ? (++n, e3 = k(c$1.indexOf("}", n) - n), ++n, e3 > 1114111 && o()) : e3 = k(4);
          return e3 <= 65535 ? String.fromCharCode(e3) : (e3 -= 65536, String.fromCharCode(55296 + (e3 >> 10), 56320 + (1023 & e3)));
        }();
      case 116:
        return "	";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 13:
        10 === c$1.charCodeAt(n) && ++n;
      case 10:
        return "";
      case 56:
      case 57:
        o();
      default:
        if (e2 >= 48 && e2 <= 55) {
          let a2 = c$1.substr(n - 1, 3).match(/^[0-7]+/)[0], r3 = parseInt(a2, 8);
          return r3 > 255 && (a2 = a2.slice(0, -1), r3 = parseInt(a2, 8)), n += a2.length - 1, e2 = c$1.charCodeAt(n), "0" === a2 && 56 !== e2 && 57 !== e2 || o(), String.fromCharCode(r3);
        }
        return u(e2) ? "" : String.fromCharCode(e2);
    }
  }
  function k(e2) {
    const a2 = n;
    let r3 = 0, i3 = 0;
    for (let a3 = 0; a3 < e2; ++a3, ++n) {
      let e3, s2 = c$1.charCodeAt(n);
      if (95 !== s2) {
        if (s2 >= 97)
          e3 = s2 - 97 + 10;
        else if (s2 >= 65)
          e3 = s2 - 65 + 10;
        else {
          if (!(s2 >= 48 && s2 <= 57))
            break;
          e3 = s2 - 48;
        }
        if (e3 >= 16)
          break;
        i3 = s2, r3 = 16 * r3 + e3;
      } else
        95 !== i3 && 0 !== a3 || o(), i3 = s2;
    }
    return 95 !== i3 && n - a2 === e2 || o(), r3;
  }
  function u(e2) {
    return 13 === e2 || 10 === e2;
  }
  function o() {
    throw Object.assign(Error(`Parse error ${f}:${c$1.slice(0, n).split("\n").length}:${n - c$1.lastIndexOf("\n", n - 1)}`), { idx: n });
  }
  async function _resolve(id, parentUrl) {
    const urlResolved = resolveIfNotPlainOrUrl(id, parentUrl);
    return {
      r: resolveImportMap(importMap, urlResolved || id, parentUrl) || throwUnresolved(id, parentUrl),
      b: !urlResolved && !isURL(id)
    };
  }
  const resolve = resolveHook ? async (id, parentUrl) => {
    let result = resolveHook(id, parentUrl, defaultResolve);
    if (result && result.then)
      result = await result;
    return result ? { r: result, b: !resolveIfNotPlainOrUrl(id, parentUrl) && !isURL(id) } : _resolve(id, parentUrl);
  } : _resolve;
  async function importShim2(id, ...args) {
    let parentUrl = args[args.length - 1];
    if (typeof parentUrl !== "string")
      parentUrl = baseUrl;
    await initPromise;
    if (importHook)
      await importHook(id, typeof args[1] !== "string" ? args[1] : {}, parentUrl);
    if (acceptingImportMaps || shimMode || !baselinePassthrough) {
      if (hasDocument)
        processImportMaps();
      if (!shimMode)
        acceptingImportMaps = false;
    }
    await importMapPromise;
    return topLevelLoad((await resolve(id, parentUrl)).r, { credentials: "same-origin" });
  }
  self.importShim = importShim2;
  function defaultResolve(id, parentUrl) {
    return resolveImportMap(importMap, resolveIfNotPlainOrUrl(id, parentUrl) || id, parentUrl) || throwUnresolved(id, parentUrl);
  }
  function throwUnresolved(id, parentUrl) {
    throw Error(`Unable to resolve specifier '${id}'${fromParent(parentUrl)}`);
  }
  const resolveSync = (id, parentUrl = baseUrl) => {
    parentUrl = `${parentUrl}`;
    const result = resolveHook && resolveHook(id, parentUrl, defaultResolve);
    return result && !result.then ? result : defaultResolve(id, parentUrl);
  };
  function metaResolve(id, parentUrl = this.url) {
    return resolveSync(id, parentUrl);
  }
  importShim2.resolve = resolveSync;
  importShim2.getImportMap = () => JSON.parse(JSON.stringify(importMap));
  importShim2.addImportMap = (importMapIn) => {
    if (!shimMode)
      throw new Error("Unsupported in polyfill mode.");
    importMap = resolveAndComposeImportMap(importMapIn, baseUrl, importMap);
  };
  const registry = importShim2._r = {};
  async function loadAll(load, seen) {
    if (load.b || seen[load.u])
      return;
    seen[load.u] = 1;
    await load.L;
    await Promise.all(load.d.map((dep) => loadAll(dep, seen)));
    if (!load.n)
      load.n = load.d.some((dep) => dep.n);
  }
  let importMap = { imports: {}, scopes: {} };
  let baselinePassthrough;
  const initPromise = featureDetectionPromise.then(() => {
    baselinePassthrough = esmsInitOptions.polyfillEnable !== true && supportsDynamicImport && supportsImportMeta && supportsImportMaps && (!jsonModulesEnabled || supportsJsonAssertions) && (!cssModulesEnabled || supportsCssAssertions) && !importMapSrcOrLazy && true;
    if (hasDocument) {
      if (!supportsImportMaps) {
        const supports = HTMLScriptElement.supports || ((type) => type === "classic" || type === "module");
        HTMLScriptElement.supports = (type) => type === "importmap" || supports(type);
      }
      if (shimMode || !baselinePassthrough) {
        new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            if (mutation.type !== "childList")
              continue;
            for (const node of mutation.addedNodes) {
              if (node.tagName === "SCRIPT") {
                if (node.type === (shimMode ? "module-shim" : "module"))
                  processScript(node);
                if (node.type === (shimMode ? "importmap-shim" : "importmap"))
                  processImportMap(node);
              } else if (node.tagName === "LINK" && node.rel === (shimMode ? "modulepreload-shim" : "modulepreload"))
                processPreload(node);
            }
          }
        }).observe(document, { childList: true, subtree: true });
        processImportMaps();
        processScriptsAndPreloads();
        if (document.readyState === "complete") {
          readyStateCompleteCheck();
        } else {
          async function readyListener() {
            await initPromise;
            processImportMaps();
            if (document.readyState === "complete") {
              readyStateCompleteCheck();
              document.removeEventListener("readystatechange", readyListener);
            }
          }
          document.addEventListener("readystatechange", readyListener);
        }
      }
    }
    return void 0;
  });
  let importMapPromise = initPromise;
  let firstPolyfillLoad = true;
  let acceptingImportMaps = true;
  async function topLevelLoad(url, fetchOpts, source, nativelyLoaded, lastStaticLoadPromise2) {
    if (!shimMode)
      acceptingImportMaps = false;
    await importMapPromise;
    if (importHook)
      await importHook(url, typeof fetchOpts !== "string" ? fetchOpts : {}, "");
    if (!shimMode && baselinePassthrough) {
      if (nativelyLoaded)
        return null;
      await lastStaticLoadPromise2;
      return dynamicImport(source ? createBlob(source) : url, { errUrl: url || source });
    }
    const load = getOrCreateLoad(url, fetchOpts, null, source);
    const seen = {};
    await loadAll(load, seen);
    lastLoad = void 0;
    resolveDeps(load, seen);
    await lastStaticLoadPromise2;
    if (source && !shimMode && !load.n && true) {
      const module2 = await dynamicImport(createBlob(source), { errUrl: source });
      if (revokeBlobURLs)
        revokeObjectURLs(Object.keys(seen));
      return module2;
    }
    if (firstPolyfillLoad && !shimMode && load.n && nativelyLoaded) {
      onpolyfill();
      firstPolyfillLoad = false;
    }
    const module = await dynamicImport(!shimMode && !load.n && nativelyLoaded ? load.u : load.b, { errUrl: load.u });
    if (load.s)
      (await dynamicImport(load.s)).u$_(module);
    if (revokeBlobURLs)
      revokeObjectURLs(Object.keys(seen));
    return module;
  }
  function revokeObjectURLs(registryKeys) {
    let batch = 0;
    const keysLength = registryKeys.length;
    const schedule = self.requestIdleCallback ? self.requestIdleCallback : self.requestAnimationFrame;
    schedule(cleanup);
    function cleanup() {
      const batchStartIndex = batch * 100;
      if (batchStartIndex > keysLength)
        return;
      for (const key of registryKeys.slice(batchStartIndex, batchStartIndex + 100)) {
        const load = registry[key];
        if (load)
          URL.revokeObjectURL(load.b);
      }
      batch++;
      schedule(cleanup);
    }
  }
  function urlJsString(url) {
    return `'${url.replace(/'/g, "\\'")}'`;
  }
  let lastLoad;
  function resolveDeps(load, seen) {
    if (load.b || !seen[load.u])
      return;
    seen[load.u] = 0;
    for (const dep of load.d)
      resolveDeps(dep, seen);
    const [imports, exports] = load.a;
    const source = load.S;
    let resolvedSource = edge && lastLoad ? `import '${lastLoad}';` : "";
    if (!imports.length) {
      resolvedSource += source;
    } else {
      let pushStringTo = function(originalIndex) {
        while (dynamicImportEndStack[dynamicImportEndStack.length - 1] < originalIndex) {
          const dynamicImportEnd = dynamicImportEndStack.pop();
          resolvedSource += `${source.slice(lastIndex, dynamicImportEnd)}, ${urlJsString(load.r)}`;
          lastIndex = dynamicImportEnd;
        }
        resolvedSource += source.slice(lastIndex, originalIndex);
        lastIndex = originalIndex;
      };
      let lastIndex = 0, depIndex = 0, dynamicImportEndStack = [];
      for (const { s: start2, ss: statementStart, se: statementEnd, d: dynamicImportIndex } of imports) {
        if (dynamicImportIndex === -1) {
          let depLoad = load.d[depIndex++], blobUrl = depLoad.b, cycleShell = !blobUrl;
          if (cycleShell) {
            if (!(blobUrl = depLoad.s)) {
              blobUrl = depLoad.s = createBlob(`export function u$_(m){${depLoad.a[1].map(({ s: s2, e: e2 }, i3) => {
                const q = depLoad.S[s2] === '"' || depLoad.S[s2] === "'";
                return `e$_${i3}=m${q ? `[` : "."}${depLoad.S.slice(s2, e2)}${q ? `]` : ""}`;
              }).join(",")}}${depLoad.a[1].length ? `let ${depLoad.a[1].map((_2, i3) => `e$_${i3}`).join(",")};` : ""}export {${depLoad.a[1].map(({ s: s2, e: e2 }, i3) => `e$_${i3} as ${depLoad.S.slice(s2, e2)}`).join(",")}}
//# sourceURL=${depLoad.r}?cycle`);
            }
          }
          pushStringTo(start2 - 1);
          resolvedSource += `/*${source.slice(start2 - 1, statementEnd)}*/${urlJsString(blobUrl)}`;
          if (!cycleShell && depLoad.s) {
            resolvedSource += `;import*as m$_${depIndex} from'${depLoad.b}';import{u$_ as u$_${depIndex}}from'${depLoad.s}';u$_${depIndex}(m$_${depIndex})`;
            depLoad.s = void 0;
          }
          lastIndex = statementEnd;
        } else if (dynamicImportIndex === -2) {
          load.m = { url: load.r, resolve: metaResolve };
          metaHook(load.m, load.u);
          pushStringTo(start2);
          resolvedSource += `importShim._r[${urlJsString(load.u)}].m`;
          lastIndex = statementEnd;
        } else {
          pushStringTo(statementStart + 6);
          resolvedSource += `Shim(`;
          dynamicImportEndStack.push(statementEnd - 1);
          lastIndex = start2;
        }
      }
      if (load.s)
        resolvedSource += `
;import{u$_}from'${load.s}';u$_({ ${exports.filter((e2) => e2.ln).map(({ s: s2, e: e2, ln }) => `${source.slice(s2, e2)}: ${ln}`).join(",")} });
`;
      pushStringTo(source.length);
    }
    let hasSourceURL = false;
    resolvedSource = resolvedSource.replace(sourceMapURLRegEx, (match, isMapping, url) => (hasSourceURL = !isMapping, match.replace(url, () => new URL(url, load.r))));
    if (!hasSourceURL)
      resolvedSource += "\n//# sourceURL=" + load.r;
    load.b = lastLoad = createBlob(resolvedSource);
    load.S = void 0;
  }
  const sourceMapURLRegEx = /\n\/\/# source(Mapping)?URL=([^\n]+)\s*((;|\/\/[^#][^\n]*)\s*)*$/;
  const jsContentType = /^(text|application)\/(x-)?javascript(;|$)/;
  const jsonContentType = /^(text|application)\/json(;|$)/;
  const cssContentType = /^(text|application)\/css(;|$)/;
  const cssUrlRegEx = /url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g;
  let p = [];
  let c = 0;
  function pushFetchPool() {
    if (++c > 100)
      return new Promise((r3) => p.push(r3));
  }
  function popFetchPool() {
    c--;
    if (p.length)
      p.shift()();
  }
  async function doFetch(url, fetchOpts, parent) {
    if (enforceIntegrity && !fetchOpts.integrity)
      throw Error(`No integrity for ${url}${fromParent(parent)}.`);
    const poolQueue = pushFetchPool();
    if (poolQueue)
      await poolQueue;
    try {
      var res = await fetchHook(url, fetchOpts);
    } catch (e2) {
      e2.message = `Unable to fetch ${url}${fromParent(parent)} - see network log for details.
` + e2.message;
      throw e2;
    } finally {
      popFetchPool();
    }
    if (!res.ok)
      throw Error(`${res.status} ${res.statusText} ${res.url}${fromParent(parent)}`);
    return res;
  }
  async function fetchModule(url, fetchOpts, parent) {
    const res = await doFetch(url, fetchOpts, parent);
    const contentType = res.headers.get("content-type");
    if (jsContentType.test(contentType))
      return { r: res.url, s: await res.text(), t: "js" };
    else if (jsonContentType.test(contentType))
      return { r: res.url, s: `export default ${await res.text()}`, t: "json" };
    else if (cssContentType.test(contentType)) {
      return { r: res.url, s: `var s=new CSSStyleSheet();s.replaceSync(${JSON.stringify((await res.text()).replace(cssUrlRegEx, (_match, quotes = "", relUrl1, relUrl2) => `url(${quotes}${resolveUrl(relUrl1 || relUrl2, url)}${quotes})`))});export default s;`, t: "css" };
    } else
      throw Error(`Unsupported Content-Type "${contentType}" loading ${url}${fromParent(parent)}. Modules must be served with a valid MIME type like application/javascript.`);
  }
  function getOrCreateLoad(url, fetchOpts, parent, source) {
    let load = registry[url];
    if (load && !source)
      return load;
    load = {
      u: url,
      r: source ? url : void 0,
      f: void 0,
      S: void 0,
      L: void 0,
      a: void 0,
      d: void 0,
      b: void 0,
      s: void 0,
      n: false,
      t: null,
      m: null
    };
    if (registry[url]) {
      let i3 = 0;
      while (registry[load.u + ++i3])
        ;
      load.u += i3;
    }
    registry[load.u] = load;
    load.f = (async () => {
      if (!source) {
        let t2;
        ({ r: load.r, s: source, t: t2 } = await (fetchCache[url] || fetchModule(url, fetchOpts, parent)));
        if (t2 && !shimMode) {
          if (t2 === "css" && !cssModulesEnabled || t2 === "json" && !jsonModulesEnabled)
            throw Error(`${t2}-modules require <script type="esms-options">{ "polyfillEnable": ["${t2}-modules"] }<${""}/script>`);
          if (t2 === "css" && !supportsCssAssertions || t2 === "json" && !supportsJsonAssertions)
            load.n = true;
        }
      }
      try {
        load.a = parse(source, load.u);
      } catch (e2) {
        throwError(e2);
        load.a = [[], [], false];
      }
      load.S = source;
      return load;
    })();
    load.L = load.f.then(async () => {
      let childFetchOpts = fetchOpts;
      load.d = (await Promise.all(load.a[0].map(async ({ n: n2, d }) => {
        if (d >= 0 && !supportsDynamicImport || d === -2 && !supportsImportMeta)
          load.n = true;
        if (d !== -1 || !n2)
          return;
        const { r: r3, b: b2 } = await resolve(n2, load.r || load.u);
        if (b2 && (!supportsImportMaps || importMapSrcOrLazy))
          load.n = true;
        if (skip2 && skip2.test(r3))
          return { b: r3 };
        if (childFetchOpts.integrity)
          childFetchOpts = Object.assign({}, childFetchOpts, { integrity: void 0 });
        return getOrCreateLoad(r3, childFetchOpts, load.r).f;
      }))).filter((l2) => l2);
    });
    return load;
  }
  function processScriptsAndPreloads() {
    for (const script of document.querySelectorAll(shimMode ? "script[type=module-shim]" : "script[type=module]"))
      processScript(script);
    for (const link of document.querySelectorAll(shimMode ? "link[rel=modulepreload-shim]" : "link[rel=modulepreload]"))
      processPreload(link);
  }
  function processImportMaps() {
    for (const script of document.querySelectorAll(shimMode ? 'script[type="importmap-shim"]' : 'script[type="importmap"]'))
      processImportMap(script);
  }
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  let lastStaticLoadPromise = Promise.resolve();
  let domContentLoadedCnt = 1;
  function domContentLoadedCheck() {
    if (--domContentLoadedCnt === 0 && !noLoadEventRetriggers)
      document.dispatchEvent(new Event("DOMContentLoaded"));
  }
  if (hasDocument) {
    document.addEventListener("DOMContentLoaded", async () => {
      await initPromise;
      domContentLoadedCheck();
      if (shimMode || !baselinePassthrough) {
        processImportMaps();
        processScriptsAndPreloads();
      }
    });
  }
  let readyStateCompleteCnt = 1;
  function readyStateCompleteCheck() {
    if (--readyStateCompleteCnt === 0 && !noLoadEventRetriggers)
      document.dispatchEvent(new Event("readystatechange"));
  }
  function processImportMap(script) {
    if (script.ep)
      return;
    if (!script.src && !script.innerHTML)
      return;
    script.ep = true;
    if (script.src) {
      if (!shimMode)
        return;
      setImportMapSrcOrLazy();
    }
    if (acceptingImportMaps) {
      importMapPromise = importMapPromise.then(async () => {
        importMap = resolveAndComposeImportMap(script.src ? await (await doFetch(script.src, getFetchOpts(script))).json() : JSON.parse(script.innerHTML), script.src || baseUrl, importMap);
      }).catch(throwError);
      if (!shimMode)
        acceptingImportMaps = false;
    }
  }
  function processScript(script) {
    if (script.ep)
      return;
    if (script.getAttribute("noshim") !== null)
      return;
    if (!script.src && !script.innerHTML)
      return;
    script.ep = true;
    const isBlockingReadyScript = script.getAttribute("async") === null && readyStateCompleteCnt > 0;
    const isDomContentLoadedScript = domContentLoadedCnt > 0;
    if (isBlockingReadyScript)
      readyStateCompleteCnt++;
    if (isDomContentLoadedScript)
      domContentLoadedCnt++;
    const loadPromise = topLevelLoad(script.src || baseUrl, getFetchOpts(script), !script.src && script.innerHTML, !shimMode, isBlockingReadyScript && lastStaticLoadPromise).catch(throwError);
    if (isBlockingReadyScript)
      lastStaticLoadPromise = loadPromise.then(readyStateCompleteCheck);
    if (isDomContentLoadedScript)
      loadPromise.then(domContentLoadedCheck);
  }
  const fetchCache = {};
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    if (fetchCache[link.href])
      return;
    fetchCache[link.href] = fetchModule(link.href, getFetchOpts(link));
  }
})();

// js/starter.tsx
import { Fragment } from "/react.mjs";

// js/md5.js
init_define_process();
function md5(inputString) {
  var hc = "0123456789abcdef";
  function rh(n) {
    var j, s = "";
    for (j = 0; j <= 3; j++) {
      s += hc.charAt(n >> j * 8 + 4 & 15) + hc.charAt(n >> j * 8 & 15);
    }
    return s;
  }
  function ad(x2, y) {
    var l = (x2 & 65535) + (y & 65535);
    var m2 = (x2 >> 16) + (y >> 16) + (l >> 16);
    return m2 << 16 | l & 65535;
  }
  function rl(n, c2) {
    return n << c2 | n >>> 32 - c2;
  }
  function cm(q, a2, b2, x2, s, t) {
    return ad(rl(ad(ad(a2, q), ad(x2, t)), s), b2);
  }
  function ff(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 & c2 | ~b2 & d2, a2, b2, x2, s, t);
  }
  function gg(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 & d2 | c2 & ~d2, a2, b2, x2, s, t);
  }
  function hh(a2, b2, c2, d2, x2, s, t) {
    return cm(b2 ^ c2 ^ d2, a2, b2, x2, s, t);
  }
  function ii(a2, b2, c2, d2, x2, s, t) {
    return cm(c2 ^ (b2 | ~d2), a2, b2, x2, s, t);
  }
  function sb(x2) {
    var i3;
    var nblk = (x2.length + 8 >> 6) + 1;
    var blks = new Array(nblk * 16);
    for (i3 = 0; i3 < nblk * 16; i3++)
      blks[i3] = 0;
    for (i3 = 0; i3 < x2.length; i3++) {
      blks[i3 >> 2] |= x2.charCodeAt(i3) << i3 % 4 * 8;
    }
    blks[i3 >> 2] |= 128 << i3 % 4 * 8;
    blks[nblk * 16 - 2] = x2.length * 8;
    return blks;
  }
  var i2, x = sb(inputString), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, olda, oldb, oldc, oldd;
  for (i2 = 0; i2 < x.length; i2 += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = ff(a, b, c, d, x[i2 + 0], 7, -680876936);
    d = ff(d, a, b, c, x[i2 + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i2 + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i2 + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i2 + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i2 + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i2 + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i2 + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i2 + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i2 + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i2 + 10], 17, -42063);
    b = ff(b, c, d, a, x[i2 + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i2 + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i2 + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i2 + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i2 + 15], 22, 1236535329);
    a = gg(a, b, c, d, x[i2 + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i2 + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i2 + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i2 + 0], 20, -373897302);
    a = gg(a, b, c, d, x[i2 + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i2 + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i2 + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i2 + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i2 + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i2 + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i2 + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i2 + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i2 + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i2 + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i2 + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i2 + 12], 20, -1926607734);
    a = hh(a, b, c, d, x[i2 + 5], 4, -378558);
    d = hh(d, a, b, c, x[i2 + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i2 + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i2 + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i2 + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i2 + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i2 + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i2 + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i2 + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i2 + 0], 11, -358537222);
    c = hh(c, d, a, b, x[i2 + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i2 + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i2 + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i2 + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i2 + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i2 + 2], 23, -995338651);
    a = ii(a, b, c, d, x[i2 + 0], 6, -198630844);
    d = ii(d, a, b, c, x[i2 + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i2 + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i2 + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i2 + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i2 + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i2 + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i2 + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i2 + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i2 + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i2 + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i2 + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i2 + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i2 + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i2 + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i2 + 9], 21, -343485551);
    a = ad(a, olda);
    b = ad(b, oldb);
    c = ad(c, oldc);
    d = ad(d, oldd);
  }
  return rh(a) + rh(b) + rh(c) + rh(d);
}

// js/starter.tsx
Object.assign(window, {});
var orig = location.origin.includes("localhost") ? "." : location.origin;
var initShims = async (assets) => location.origin.includes("localhost") ? importShim.addImportMap({
  "imports": {
    "@emotion/react": orig + "/" + assets["emotion.mjs"],
    "framer-motion": "./framer-motion",
    "react": orig + "/" + assets["react.mjs"],
    "react-dom": orig + "/" + assets["react.mjs"],
    "react-dom/client": orig + "/" + assets["react.mjs"],
    "react-dom/server": orig + "/" + assets["react.mjs"],
    "react/jsx-runtime": orig + "/" + assets["react.mjs"]
  }
}) : importShim.addImportMap({
  "imports": {
    "framer-motion": location.origin + "/" + assets["framer-motion.mjs"],
    "@emotion/react": location.origin + "/" + assets["emotion.mjs"],
    "react": location.origin + "/" + assets["react.mjs"],
    "react-dom": location.origin + "/" + assets["react.mjs"],
    "react-dom/client": location.origin + "/" + assets["react.mjs"],
    "react-dom/server": location.origin + "/" + assets["react.mjs"],
    "react/jsx-runtime": location.origin + "/" + assets["react.mjs"]
  }
});
var App = () => jsx(Fragment, {});
var apps = {};
var AutoUpdateApp = ({ hash: hash4, starter }) => {
  const result = md5(mST().transpiled);
  if (!apps[result]) {
    apps[result] = starter;
  }
  App = apps[result];
  return jsx(App, {}, hash4);
};
async function appFactory(transpiled) {
  const result = md5(transpiled);
  if (!apps[result]) {
    apps[result] = (await importShim(createJsBlob(transpiled))).default;
  }
  App = apps[result];
  return apps[result];
}
function createJsBlob(code) {
  const file = new File([code], "index.mjs", {
    type: "application/javascript"
  });
  const blobUrl = URL.createObjectURL(file);
  return blobUrl;
}

// js/DraggableWindow.tsx
init_define_process();
import { useEffect as useEffect29, useRef as useRef28, useState as useState25 } from "/react.mjs";

// js/Qr.tsx
init_define_process();
import { useState as useState24 } from "/react.mjs";

// ../../node_modules/react-qrious/lib/index.js
init_define_process();

// ../../node_modules/react-qrious/lib/QRious.js
init_define_process();
import { createElement } from "/react.mjs";

// ../../node_modules/react-qrious/lib/use-qrious.js
init_define_process();
var import_qrious = __toESM(require_qrious(), 1);
import { useEffect, useState } from "/react.mjs";
var useQrious = (options) => {
  const [qrious] = useState(() => new import_qrious.default(options));
  const [dataUrl, setDataUrl] = useState(() => qrious.toDataURL(options.mime));
  useEffect(() => {
    qrious.set(options);
    setDataUrl(qrious.toDataURL(options.mime));
  }, [options, qrious]);
  return [dataUrl, qrious];
};

// ../../node_modules/react-qrious/lib/QRious.js
var QRious2 = (_a) => {
  var { background, backgroundAlpha, foreground, foregroundAlpha, level, mime, padding: padding2, value, size } = _a, props = __rest(_a, ["background", "backgroundAlpha", "foreground", "foregroundAlpha", "level", "mime", "padding", "value", "size"]);
  const [dataUrl] = useQrious({
    background,
    backgroundAlpha,
    foreground,
    foregroundAlpha,
    level,
    mime,
    padding: padding2,
    size,
    value
  });
  return createElement("img", Object.assign(Object.assign({}, props), { src: dataUrl }));
};

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
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/@mui/material/Fab/Fab.js
var import_prop_types49 = __toESM(require_prop_types());
import * as React73 from "/react.mjs";

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
  return function validate2(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// ../../node_modules/@mui/utils/esm/deepmerge.js
init_define_process();
function isPlainObject2(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject2(target) && isPlainObject2(source)) {
    Object.keys(source).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject2(source[key]) && key in target && isPlainObject2(target[key])) {
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
function debounce(func, wait2 = 166) {
  let timeout2;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout2);
    timeout2 = setTimeout(later, wait2);
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
  Object.keys(slots).forEach(
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
          acc.push(getUtilityClass(key));
        }
        return acc;
      }, []).join(" ");
    }
  );
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
  const joinedClasses = clsx_m_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
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
  } = parameters, rest2 = _objectWithoutPropertiesLoose(parameters, _excluded);
  const resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest2, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, useForkRef(resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref));
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
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
    stringify: stringify2,
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
      let candidate = (stringify2 || getOptionLabel)(option);
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
    max: max3 = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max3 ? `${max3}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max: max3,
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
    max: max3,
    displayValue,
    invisible
  } = useBadge(_extends({}, props, {
    max: maxProp
  }));
  const ownerState = _extends({}, props, {
    badgeContent,
    invisible,
    max: max3,
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
  onBlur: import_prop_types5.default.func,
  onClick: import_prop_types5.default.func,
  onFocus: import_prop_types5.default.func,
  onFocusVisible: import_prop_types5.default.func,
  onKeyDown: import_prop_types5.default.func,
  onKeyUp: import_prop_types5.default.func,
  onMouseLeave: import_prop_types5.default.func
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
  const handleRef = useForkRef(
    children2.ref,
    nodeRef
  );
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
      insideDOM = !doc.documentElement.contains(
        event.target
      ) || nodeRef.current.contains(
        event.target
      );
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
  if (options.length === 0 || options.every((o, i2) => isOptionDisabled(o, i2))) {
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
function getNewHighlightedOption(options, previouslyHighlightedOption, diff2, lookupDirection, highlightDisabled, isOptionDisabled, wrapAround, optionComparer) {
  var _options$nextIndex;
  const maxIndex = options.length - 1;
  const defaultHighlightedIndex = -1;
  let nextIndexCandidate;
  const previouslyHighlightedIndex = previouslyHighlightedOption == null ? -1 : options.findIndex((option) => optionComparer(option, previouslyHighlightedOption));
  if (diff2 === "reset") {
    var _options$defaultHighl;
    return defaultHighlightedIndex === -1 ? null : (_options$defaultHighl = options[defaultHighlightedIndex]) != null ? _options$defaultHighl : null;
  }
  if (diff2 === "start") {
    nextIndexCandidate = 0;
  } else if (diff2 === "end") {
    nextIndexCandidate = maxIndex;
  } else {
    const newIndex = previouslyHighlightedIndex + diff2;
    if (newIndex < 0) {
      if (!wrapAround && previouslyHighlightedIndex !== -1 || Math.abs(diff2) > 1) {
        nextIndexCandidate = 0;
      } else {
        nextIndexCandidate = maxIndex;
      }
    } else if (newIndex > maxIndex) {
      if (!wrapAround || Math.abs(diff2) > 1) {
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
  const optionIndex = props.options.findIndex((o) => props.optionComparer(option, o));
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
  const moveHighlight = (diff2, direction, wrapAround) => {
    return getNewHighlightedOption(options, state.highlightedValue, diff2, direction, disabledItemsFocusable != null ? disabledItemsFocusable : false, isOptionDisabled != null ? isOptionDisabled : () => false, wrapAround, optionComparer);
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
function getControlledState(internalState, props) {
  if (props.value !== void 0) {
    return _extends({}, internalState, {
      selectedValue: props.value
    });
  }
  return internalState;
}
function areOptionsEqual(option1, option2, optionComparer) {
  if (option1 === option2) {
    return true;
  }
  if (option1 === null || option2 === null) {
    return false;
  }
  return optionComparer(option1, option2);
}
function useStateChangeDetection(nextState, internalPreviousState, propsRef) {
  React19.useEffect(() => {
    if (!propsRef.current) {
      return;
    }
    const previousState = getControlledState(internalPreviousState, propsRef.current);
    const {
      multiple,
      optionComparer
    } = propsRef.current;
    if (multiple) {
      var _previousState$select;
      const previousSelectedValues = (_previousState$select = previousState == null ? void 0 : previousState.selectedValue) != null ? _previousState$select : [];
      const nextSelectedValues = nextState.selectedValue;
      const onChange = propsRef.current.onChange;
      if (!areArraysEqual(nextSelectedValues, previousSelectedValues, optionComparer)) {
        onChange == null ? void 0 : onChange(nextSelectedValues);
      }
    } else {
      const previousSelectedValue = previousState == null ? void 0 : previousState.selectedValue;
      const nextSelectedValue = nextState.selectedValue;
      const onChange = propsRef.current.onChange;
      if (!areOptionsEqual(nextSelectedValue, previousSelectedValue, optionComparer)) {
        onChange == null ? void 0 : onChange(nextSelectedValue);
      }
    }
  }, [nextState.selectedValue, internalPreviousState, propsRef]);
  React19.useEffect(() => {
    if (!propsRef.current) {
      return;
    }
    if (!areOptionsEqual(internalPreviousState.highlightedValue, nextState.highlightedValue, propsRef.current.optionComparer)) {
      var _propsRef$current, _propsRef$current$onH;
      (_propsRef$current = propsRef.current) == null ? void 0 : (_propsRef$current$onH = _propsRef$current.onHighlightChange) == null ? void 0 : _propsRef$current$onH.call(_propsRef$current, nextState.highlightedValue);
    }
  }, [nextState.highlightedValue, internalPreviousState.highlightedValue, propsRef]);
}
function useControllableReducer(internalReducer, externalReducer, props) {
  var _ref;
  const {
    value,
    defaultValue
  } = props;
  const propsRef = React19.useRef(props);
  propsRef.current = props;
  const initialSelectedValue = (_ref = value === void 0 ? defaultValue : value) != null ? _ref : props.multiple ? [] : null;
  const initalState = {
    highlightedValue: null,
    selectedValue: initialSelectedValue
  };
  const combinedReducer = React19.useCallback((state, action) => {
    if (externalReducer) {
      return externalReducer(getControlledState(state, propsRef.current), action);
    }
    return internalReducer(getControlledState(state, propsRef.current), action);
  }, [externalReducer, internalReducer, propsRef]);
  const [nextState, dispatch] = React19.useReducer(combinedReducer, initalState);
  const previousState = React19.useRef(initalState);
  React19.useEffect(() => {
    previousState.current = nextState;
  }, [previousState, nextState]);
  useStateChangeDetection(nextState, previousState.current, propsRef);
  return [getControlledState(nextState, propsRef.current), dispatch];
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
    if (event.key.length === 1 && event.key !== " ") {
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
import * as React24 from "/react.mjs";

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
var max2 = Math.max;
var min2 = Math.min;
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
function within(min3, value, max3) {
  return max2(min3, min2(value, max3));
}
function withinMaxClamp(min3, value, max3) {
  var v = within(min3, value, max3);
  return v > max3 ? max3 : v;
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
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
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
  var min3 = paddingObject[minProp];
  var max3 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min3, center, max3);
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
var hash2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash2[matched];
  });
}

// ../../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
init_define_process();
var hash3 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash3[matched];
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
  var width2 = max2(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height2 = max2(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max2(html.clientWidth, body ? body.clientWidth : 0) - width2;
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
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
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
function flip2(_ref) {
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
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
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
  fn: flip2,
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
    var min3 = offset2 + overflow2[mainSide];
    var max3 = offset2 - overflow2[altSide];
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
    var preventedOffset = within(tether ? min2(min3, tetherMin) : min3, offset2, tether ? max2(max3, tetherMax) : max3);
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
  var map2 = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map2.set(modifier.name, modifier);
  });
  function sort2(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map2.get(dep);
        if (depModifier) {
          sort2(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort2(modifier);
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
function format(str2) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str2);
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
        if (modifiers.find(function(mod2) {
          return mod2.name === requirement;
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

// ../../node_modules/@mui/base/PopperUnstyled/popperUnstyledClasses.js
init_define_process();
function getPopperUnstyledUtilityClass(slot) {
  return generateUtilityClass("MuiPopperUnstyled", slot);
}
var popperUnstyledClasses = generateUtilityClasses("MuiPopperUnstyled", ["root"]);

// ../../node_modules/@mui/base/PopperUnstyled/PopperUnstyled.js
import { jsx as _jsx6 } from "/react.mjs";
var _excluded6 = ["anchorEl", "children", "component", "components", "componentsProps", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "TransitionProps"];
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
var useUtilityClasses4 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPopperUnstyledUtilityClass, {});
};
var defaultPopperOptions = {};
var PopperTooltip = React24.forwardRef(function PopperTooltip2(props, ref) {
  var _ref;
  const {
    anchorEl,
    children: children2,
    component,
    components = {},
    componentsProps = {},
    direction,
    disablePortal,
    modifiers,
    open: open2,
    ownerState,
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
  const classes = useUtilityClasses4();
  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: _extends({}, props, ownerState),
    className: classes.root
  });
  return _jsx6(Root, _extends({}, rootProps, {
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
  components: import_prop_types10.default.shape({
    Root: import_prop_types10.default.elementType
  }),
  componentsProps: import_prop_types10.default.shape({
    root: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object])
  }),
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
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i2) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i2,
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
var _excluded9 = ["children", "classes", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited"];
var useUtilityClasses5 = (ownerState) => {
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
  var _props$ariaHidden;
  const {
    children: children2,
    classes: classesProp,
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
  const classes = useUtilityClasses5(ownerState);
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
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRef,
      role: "presentation",
      onKeyDown: handleKeyDown3
    },
    className: classes.root,
    ownerState
  });
  const BackdropComponent = components.Backdrop;
  const backdropProps = useSlotProps({
    elementType: BackdropComponent,
    externalSlotProps: componentsProps.backdrop,
    additionalProps: {
      "aria-hidden": true,
      onClick: handleBackdropClick,
      open: open2
    },
    ownerState
  });
  if (!keepMounted && !open2 && (!hasTransition || exited)) {
    return null;
  }
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
  closeAfterTransition: import_prop_types14.default.bool,
  component: import_prop_types14.default.elementType,
  components: import_prop_types14.default.shape({
    Backdrop: import_prop_types14.default.elementType,
    Root: import_prop_types14.default.elementType
  }),
  componentsProps: import_prop_types14.default.shape({
    backdrop: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object]),
    root: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object])
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
  const handleListboxRef = useForkRef(useForkRef(listboxRefProp, listboxRef), updateListboxRef);
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
        const newValues = newOptions.map((o) => o.value);
        setValue(newValues);
        onChange == null ? void 0 : onChange(newValues);
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
    highlightedOption,
    open: open2
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
var _excluded10 = ["autoFocus", "children", "component", "components", "componentsProps", "defaultListboxOpen", "defaultValue", "disabled", "listboxId", "listboxOpen", "onChange", "onListboxOpenChange", "value"];
function defaultRenderMultipleValues(selectedOptions) {
  return _jsx11(React33.Fragment, {
    children: selectedOptions.map((o) => o.label).join(", ")
  });
}
function useUtilityClasses6(ownerState) {
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
  var _props$renderValue, _ref, _components$Listbox, _components$Popper;
  const {
    autoFocus,
    children: children2,
    component,
    components = {},
    componentsProps = {},
    defaultListboxOpen = false,
    defaultValue = [],
    disabled: disabledProp,
    listboxId,
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
    listboxId,
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
  const classes = useUtilityClasses6(ownerState);
  const selectedOptions = React33.useMemo(() => {
    if (value == null) {
      return [];
    }
    return options.filter((o) => value.includes(o.value));
  }, [options, value]);
  const buttonProps = useSlotProps({
    elementType: Button3,
    getSlotProps: getButtonProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const listboxProps = useSlotProps({
    elementType: ListboxRoot,
    getSlotProps: getListboxProps,
    externalSlotProps: componentsProps.listbox,
    additionalProps: {
      ref: listboxRef
    },
    ownerState,
    className: classes.listbox
  });
  const popperProps = useSlotProps({
    elementType: Popper,
    externalSlotProps: componentsProps.popper,
    additionalProps: {
      anchorEl: buttonRef.current,
      disablePortal: true,
      open: listboxOpen,
      placement: "bottom-start",
      role: void 0
    },
    ownerState,
    className: classes.popper
  });
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
  component: import_prop_types15.default.elementType,
  components: import_prop_types15.default.shape({
    Listbox: import_prop_types15.default.elementType,
    Popper: import_prop_types15.default.elementType,
    Root: import_prop_types15.default.elementType
  }),
  componentsProps: import_prop_types15.default.shape({
    listbox: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object]),
    popper: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object]),
    root: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object])
  }),
  defaultListboxOpen: import_prop_types15.default.bool,
  defaultValue: import_prop_types15.default.array,
  disabled: import_prop_types15.default.bool,
  listboxId: import_prop_types15.default.string,
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
var _excluded11 = ["component", "components", "disabled", "componentsProps"];
function useUtilityClasses7(disabled) {
  const slots = {
    root: ["root", disabled && "disabled"],
    label: ["label"],
    list: ["list"]
  };
  return composeClasses(slots, getOptionGroupUnstyledUtilityClass, {});
}
var OptionGroupUnstyled = React35.forwardRef(function OptionGroupUnstyled2(props, ref) {
  const {
    component,
    components = {},
    disabled = false,
    componentsProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const Root = component || (components == null ? void 0 : components.Root) || "li";
  const Label = (components == null ? void 0 : components.Label) || "span";
  const List2 = (components == null ? void 0 : components.List) || "ul";
  const classes = useUtilityClasses7(disabled);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState: props,
    className: classes.root
  });
  const labelProps = useSlotProps({
    elementType: Label,
    externalSlotProps: componentsProps.label,
    ownerState: props,
    className: classes.label
  });
  const listProps = useSlotProps({
    elementType: List2,
    externalSlotProps: componentsProps.list,
    ownerState: props,
    className: classes.list
  });
  return _jsxs6(Root, _extends({}, rootProps, {
    children: [_jsx13(Label, _extends({}, labelProps, {
      children: props.label
    })), _jsx13(List2, _extends({}, listProps, {
      children: props.children
    }))]
  }));
});
true ? OptionGroupUnstyled.propTypes = {
  children: import_prop_types17.default.node,
  component: import_prop_types17.default.elementType,
  components: import_prop_types17.default.shape({
    Label: import_prop_types17.default.elementType,
    List: import_prop_types17.default.elementType,
    Root: import_prop_types17.default.elementType
  }),
  componentsProps: import_prop_types17.default.shape({
    label: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object]),
    list: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object]),
    root: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object])
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
var import_prop_types18 = __toESM(require_prop_types());
import React36 from "/react.mjs";

// ../../node_modules/@mui/base/OptionUnstyled/optionUnstyledClasses.js
init_define_process();
function getOptionUnstyledUtilityClass(slot) {
  return generateUtilityClass("MuiOptionUnstyled", slot);
}
var optionUnstyledClasses = generateUtilityClasses("MuiOptionUnstyled", ["root", "disabled", "selected", "highlighted"]);

// ../../node_modules/@mui/base/OptionUnstyled/OptionUnstyled.js
import { jsx as _jsx14 } from "/react.mjs";
var _excluded12 = ["children", "component", "components", "componentsProps", "disabled", "value", "label"];
function useUtilityClasses8(ownerState) {
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
  const {
    children: children2,
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
  const classes = useUtilityClasses8(ownerState);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: _extends({}, optionProps, {
      ref: handleRef
    }),
    className: classes.root,
    ownerState
  });
  return _jsx14(Root, _extends({}, rootProps, {
    children: children2
  }));
});
true ? OptionUnstyled.propTypes = {
  children: import_prop_types18.default.node,
  component: import_prop_types18.default.elementType,
  components: import_prop_types18.default.shape({
    Root: import_prop_types18.default.elementType
  }),
  componentsProps: import_prop_types18.default.shape({
    root: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object])
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
var _excluded13 = ["autoFocus", "children", "component", "components", "componentsProps", "defaultValue", "defaultListboxOpen", "disabled", "listboxId", "listboxOpen", "onChange", "onListboxOpenChange", "renderValue", "value"];
function defaultRenderSingleValue(selectedOption) {
  var _selectedOption$label;
  return (_selectedOption$label = selectedOption == null ? void 0 : selectedOption.label) != null ? _selectedOption$label : "";
}
function useUtilityClasses9(ownerState) {
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
  var _ref, _components$Listbox, _components$Popper;
  const {
    autoFocus,
    children: children2,
    component,
    components = {},
    componentsProps = {},
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledProp,
    listboxId,
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
    listboxId,
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
  const classes = useUtilityClasses9(ownerState);
  const selectedOptions = React37.useMemo(() => {
    return options.find((o) => value === o.value);
  }, [options, value]);
  const buttonProps = useSlotProps({
    elementType: Button3,
    getSlotProps: getButtonProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const listboxProps = useSlotProps({
    elementType: ListboxRoot,
    getSlotProps: getListboxProps,
    externalSlotProps: componentsProps.listbox,
    additionalProps: {
      ref: listboxRef
    },
    ownerState,
    className: classes.listbox
  });
  const popperProps = useSlotProps({
    elementType: Popper,
    externalSlotProps: componentsProps.popper,
    additionalProps: {
      anchorEl: buttonRef.current,
      disablePortal: true,
      open: listboxOpen,
      placement: "bottom-start",
      role: void 0
    },
    ownerState,
    className: classes.popper
  });
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
  component: import_prop_types19.default.elementType,
  components: import_prop_types19.default.shape({
    Listbox: import_prop_types19.default.elementType,
    Popper: import_prop_types19.default.elementType,
    Root: import_prop_types19.default.elementType
  }),
  componentsProps: import_prop_types19.default.shape({
    listbox: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    popper: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    root: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object])
  }),
  defaultListboxOpen: import_prop_types19.default.bool,
  defaultValue: import_prop_types19.default.any,
  disabled: import_prop_types19.default.bool,
  listboxId: import_prop_types19.default.string,
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
function clamp(value, min3, max3) {
  if (value == null) {
    return min3;
  }
  return Math.min(Math.max(min3, value), max3);
}
function findClosest(values4, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values4.reduce((acc, value, index) => {
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
    for (let i2 = 0; i2 < touchEvent.changedTouches.length; i2 += 1) {
      const touch = touchEvent.changedTouches[i2];
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
function valueToPercent(value, min3, max3) {
  return (value - min3) * 100 / (max3 - min3);
}
function percentToValue(percent, min3, max3) {
  return (max3 - min3) * percent + min3;
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
function roundValueToStep(value, step, min3) {
  const nearest = Math.round((value - min3) / step) * step + min3;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values: values4,
  newValue,
  index
}) {
  const output = values4.slice();
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
    max: max3 = 100,
    min: min3 = 0,
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
    default: defaultValue != null ? defaultValue : min3,
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
  let values4 = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values4 = values4.map((value) => clamp(value, min3, max3));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max3 - min3) / step) + 1)].map((_2, index) => ({
    value: min3 + step * index
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
    const value = values4[index];
    const marksIndex = marksValues.indexOf(value);
    let newValue = event.target.valueAsNumber;
    if (marks && step == null) {
      newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
    }
    newValue = clamp(newValue, min3, max3);
    if (marks && step == null) {
      const currentMarkIndex = marksValues.indexOf(values4[index]);
      newValue = newValue < values4[index] ? marksValues[currentMarkIndex - 1] : marksValues[currentMarkIndex + 1];
    }
    if (range) {
      if (disableSwap) {
        newValue = clamp(newValue, values4[index - 1] || -Infinity, values4[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values: values4,
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
    newValue = percentToValue(percent, min3, max3);
    if (step) {
      newValue = roundValueToStep(newValue, step, min3);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min3, max3);
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
      values: values4
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
      values: values4
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
        values: values4
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
        values: values4
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
  const trackOffset = valueToPercent(range ? values4[0] : min3, min3, max3);
  const trackLeap = valueToPercent(values4[values4.length - 1], min3, max3) - trackOffset;
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
      "aria-valuemax": scale(max3),
      "aria-valuemin": scale(min3),
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
    values: values4
  };
}

// ../../node_modules/@mui/base/SliderUnstyled/SliderUnstyled.js
import { jsx as _jsx17 } from "/react.mjs";
import { jsxs as _jsxs9 } from "/react.mjs";
var _excluded14 = ["aria-label", "aria-valuetext", "className", "component", "classes", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps"];
var Identity2 = (x) => x;
var useUtilityClasses10 = (ownerState) => {
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
    max: max3 = 100,
    min: min3 = 0,
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
    max: max3,
    min: min3,
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
    values: values4,
    trackOffset,
    trackLeap
  } = useSlider(_extends({}, ownerState, {
    ref
  }));
  ownerState.marked = marks.length > 0 && marks.some((mark) => mark.label);
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;
  const classes = useUtilityClasses10(ownerState);
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
    children: [_jsx17(Rail, _extends({}, railProps)), _jsx17(Track, _extends({}, trackProps)), marks.filter((mark) => mark.value >= min3 && mark.value <= max3).map((mark, index) => {
      const percent = valueToPercent(mark.value, min3, max3);
      const style3 = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values4.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values4[0] && mark.value <= values4[values4.length - 1] : mark.value <= values4[0]) || track === "inverted" && (range ? mark.value <= values4[0] || mark.value >= values4[values4.length - 1] : mark.value >= values4[0]);
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
    }), values4.map((value, index) => {
      const percent = valueToPercent(value, min3, max3);
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
              value: values4[index]
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
var useUtilityClasses11 = (ownerState) => {
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
  const classes = useUtilityClasses11(ownerState);
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
  children: import_prop_types22.default.node,
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
var _excluded16 = ["children", "value", "defaultValue", "orientation", "direction", "component", "components", "componentsProps", "onChange", "selectionFollowsFocus"];
var useUtilityClasses12 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, getTabsUnstyledUtilityClass, {});
};
var TabsUnstyled = React45.forwardRef((props, ref) => {
  var _ref;
  const {
    children: children2,
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
  const classes = useUtilityClasses12(ownerState);
  const TabsRoot = (_ref = component != null ? component : components.Root) != null ? _ref : "div";
  const tabsRootProps = useSlotProps({
    elementType: TabsRoot,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
  return _jsx19(TabsRoot, _extends({}, tabsRootProps, {
    children: _jsx19(TabsContext_default.Provider, {
      value: tabsContextValue,
      children: children2
    })
  }));
});
true ? TabsUnstyled.propTypes = {
  children: import_prop_types23.default.node,
  component: import_prop_types23.default.elementType,
  components: import_prop_types23.default.shape({
    Root: import_prop_types23.default.elementType
  }),
  componentsProps: import_prop_types23.default.shape({
    root: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object])
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
var _excluded17 = ["children", "value", "components", "componentsProps", "component"];
var useUtilityClasses13 = (ownerState) => {
  const {
    hidden
  } = ownerState;
  const slots = {
    root: ["root", hidden && "hidden"]
  };
  return composeClasses(slots, getTabPanelUnstyledUtilityClass, {});
};
var TabPanelUnstyled = React46.forwardRef(function TabPanelUnstyled2(props, ref) {
  var _ref;
  const {
    children: children2,
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
  const classes = useUtilityClasses13(ownerState);
  const TabPanelRoot = (_ref = component != null ? component : components.Root) != null ? _ref : "div";
  const tabPanelRootProps = useSlotProps({
    elementType: TabPanelRoot,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tabpanel",
      ref
    },
    ownerState,
    className: classes.root
  });
  return _jsx20(TabPanelRoot, _extends({}, tabPanelRootProps, {
    children: !hidden && children2
  }));
});
true ? TabPanelUnstyled.propTypes = {
  children: import_prop_types24.default.node,
  component: import_prop_types24.default.elementType,
  components: import_prop_types24.default.shape({
    Root: import_prop_types24.default.elementType
  }),
  componentsProps: import_prop_types24.default.shape({
    root: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object])
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
var _excluded18 = ["children", "component", "components", "componentsProps"];
var useUtilityClasses14 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, getTabsListUnstyledUtilityClass, {});
};
var TabsListUnstyled = React48.forwardRef((props, ref) => {
  var _ref;
  const {
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
  const classes = useUtilityClasses14(ownerState);
  const TabsListRoot = (_ref = component != null ? component : components.Root) != null ? _ref : "div";
  const tabsListRootProps = useSlotProps({
    elementType: TabsListRoot,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const processedChildren = processChildren();
  return _jsx21(TabsListRoot, _extends({}, tabsListRootProps, {
    children: processedChildren
  }));
});
true ? TabsListUnstyled.propTypes = {
  children: import_prop_types25.default.node,
  component: import_prop_types25.default.elementType,
  components: import_prop_types25.default.shape({
    Root: import_prop_types25.default.elementType
  }),
  componentsProps: import_prop_types25.default.shape({
    root: import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object])
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
var _excluded20 = ["action", "children", "value", "disabled", "onChange", "onClick", "onFocus", "component", "components", "componentsProps"];
var useUtilityClasses15 = (ownerState) => {
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
  var _ref;
  const {
    action,
    children: children2,
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
  const classes = useUtilityClasses15(ownerState);
  const TabRoot = (_ref = component != null ? component : components.Root) != null ? _ref : "button";
  const tabRootProps = useSlotProps({
    elementType: TabRoot,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
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
  component: import_prop_types26.default.elementType,
  components: import_prop_types26.default.shape({
    Root: import_prop_types26.default.elementType
  }),
  componentsProps: import_prop_types26.default.shape({
    root: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object])
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
function isEmpty2(obj) {
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
    if (isEmpty2(newState)) {
      return;
    }
    setState((prevState) => {
      return updateState(prevState, newState);
    });
  }, [getUpdatedState]);
  const syncHeightWithFlushSycn = () => {
    const newState = getUpdatedState();
    if (isEmpty2(newState)) {
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
var import_prop_types48 = __toESM(require_prop_types());
import * as React72 from "/react.mjs";

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
var isPropValid = emotion_memoize_browser_esm_default(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
);
var emotion_is_prop_valid_browser_esm_default = isPropValid;

// ../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
init_define_process();
import * as React51 from "/react.mjs";
import { useContext as useContext4, createElement as createElement2, Fragment as Fragment10 } from "/react.mjs";
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
      var i2 = 1;
      for (; i2 < len; i2++) {
        if (args[0][i2] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles2.push(args[i2], args[0][i2]);
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
      return createElement2(Fragment10, null, createElement2(Insertion, {
        cache: cache2,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), createElement2(FinalTag, newProps));
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
function isEmpty3(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles: styles2,
    defaultTheme: defaultTheme6 = {}
  } = props;
  const globalStyles = typeof styles2 === "function" ? (themeInput) => styles2(isEmpty3(themeInput) ? defaultTheme6 : themeInput) : styles2;
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
var values2 = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};
var defaultBreakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values2[key]}px)`
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
      if (Object.keys(themeBreakpoints.values || values2).indexOf(breakpoint) !== -1) {
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
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
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
function getValue(themeMapping, transform3, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform3) {
    value = transform3(value);
  }
  return value;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform: transform3
  } = options;
  const fn2 = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getValue(themeMapping, transform3, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getValue(themeMapping, transform3, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
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
function resolveCssProperty(props, keys2, prop, transformer) {
  if (keys2.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style2(props, keys2) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys2, prop, transformer)).reduce(merge_default, {});
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

// ../../node_modules/@mui/system/esm/cssGrid.js
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
var cssGrid_default = grid;

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
      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values2[propValue];
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
  grid: cssGrid_default.filterProps,
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
  grid: cssGrid_default,
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
  const allKeys = objects.reduce((keys2, object) => keys2.concat(Object.keys(object)), []);
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
      if (!isPlainObject2(result)) {
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
var sortBreakpointsValues = (values4) => {
  const breakpointsAsArray = Object.keys(values4).map((key) => ({
    key,
    val: values4[key]
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
    values: values4 = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded25);
  const sortedValues = sortBreakpointsValues(values4);
  const keys2 = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values4[key] === "number" ? values4[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values4[key] === "number" ? values4[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start2, end2) {
    const endIndex = keys2.indexOf(end2);
    return `@media (min-width:${typeof values4[start2] === "number" ? values4[start2] : start2}${unit}) and (max-width:${(endIndex !== -1 && typeof values4[keys2[endIndex]] === "number" ? values4[keys2[endIndex]] : end2) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys2.indexOf(key) + 1 < keys2.length) {
      return between(key, keys2[keys2.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not2(key) {
    const keyIndex = keys2.indexOf(key);
    if (keyIndex === 0) {
      return up(keys2[1]);
    }
    if (keyIndex === keys2.length - 1) {
      return down(keys2[keyIndex]);
    }
    return between(key, keys2[keys2.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys: keys2,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not: not2,
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
  const transform3 = createUnarySpacing({
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
      const output = transform3(argument);
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
function useTheme2(defaultTheme6 = null) {
  const contextTheme = useTheme();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme6 : contextTheme;
}
var useThemeWithoutDefault_default = useTheme2;

// ../../node_modules/@mui/system/esm/useTheme.js
var systemDefaultTheme = createTheme_default();
function useTheme3(defaultTheme6 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme6);
}
var useTheme_default = useTheme3;

// ../../node_modules/@mui/system/esm/createBox.js
import { jsx as _jsx27 } from "/react.mjs";
var _excluded27 = ["className", "component"];
function createBox(options = {}) {
  const {
    defaultTheme: defaultTheme6,
    defaultClassName = "MuiBox-root",
    generateClassName,
    styleFunctionSx: styleFunctionSx2 = styleFunctionSx_default
  } = options;
  const BoxRoot = styled("div")(styleFunctionSx2);
  const Box3 = React57.forwardRef(function Box4(inProps, ref) {
    const theme = useTheme_default(defaultTheme6);
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
function isEmpty4(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty4(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty4(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

// ../../node_modules/@mui/system/esm/createStyled.js
var _excluded29 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
var _excluded210 = ["theme"];
var _excluded32 = ["theme"];
function isEmpty5(obj) {
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
    defaultTheme: defaultTheme6 = systemDefaultTheme2,
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
            theme: isEmpty5(themeInput) ? defaultTheme6 : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty5(props.theme) ? defaultTheme6 : props.theme;
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
          const theme = isEmpty5(props.theme) ? defaultTheme6 : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty5(props.theme) ? defaultTheme6 : props.theme;
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
            theme: isEmpty5(themeInput) ? defaultTheme6 : themeInput
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
  defaultTheme: defaultTheme6
}) {
  const theme = useTheme_default(defaultTheme6);
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

// ../../node_modules/@mui/system/esm/colorManipulator.js
init_define_process();
function clamp2(value, min3 = 0, max3 = 1) {
  if (true) {
    if (value < min3 || value > max3) {
      console.error(`MUI: The value provided ${value} is out of range [${min3}, ${max3}].`);
    }
  }
  return Math.min(Math.max(min3, value), max3);
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
  let values4 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === "color") {
    values4 = values4.split(" ");
    colorSpace = values4.shift();
    if (values4.length === 4 && values4[3].charAt(0) === "/") {
      values4[3] = values4[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(true ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values4 = values4.split(",");
  }
  values4 = values4.map((value) => parseFloat(value));
  return {
    type,
    values: values4,
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
    values: values4
  } = color2;
  if (type.indexOf("rgb") !== -1) {
    values4 = values4.map((n, i2) => i2 < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf("hsl") !== -1) {
    values4[1] = `${values4[1]}%`;
    values4[2] = `${values4[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values4 = `${colorSpace} ${values4.join(" ")}`;
  } else {
    values4 = `${values4.join(", ")}`;
  }
  return `${type}(${values4})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const {
    values: values4
  } = color2;
  const h2 = values4[0];
  const s = values4[1] / 100;
  const l = values4[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h2 / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values4[3]);
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
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] *= 1 - coefficient;
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
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] += (255 - color2.values[i2]) * coefficient;
    }
  } else if (color2.type.indexOf("color") !== -1) {
    for (let i2 = 0; i2 < 3; i2 += 1) {
      color2.values[i2] += (1 - color2.values[i2]) * coefficient;
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
var assignNestedKeys = (obj, keys2, value, arrayKeys = []) => {
  let temp = obj;
  keys2.forEach((k, index) => {
    if (index === keys2.length - 1) {
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
var getCssValue = (keys2, value) => {
  if (typeof value === "number") {
    if (["lineHeight", "fontWeight", "opacity", "zIndex"].some((prop) => keys2.includes(prop))) {
      return value;
    }
    const lastKey = keys2[keys2.length - 1];
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
  walkObjectDeep(
    theme,
    (keys2, value, arrayKeys) => {
      if (typeof value === "string" || typeof value === "number") {
        if (!shouldSkipGeneratingVar2 || shouldSkipGeneratingVar2 && !shouldSkipGeneratingVar2(keys2, value)) {
          const cssVar = `--${prefix ? `${prefix}-` : ""}${keys2.join("-")}`;
          Object.assign(css2, {
            [cssVar]: getCssValue(keys2, value)
          });
          assignNestedKeys(vars, keys2, `var(${cssVar})`, arrayKeys);
        }
      }
      assignNestedKeys(parsedTheme, keys2, value, arrayKeys);
    },
    (keys2) => keys2[0] === "vars"
  );
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
        systemMode: e != null && e.matches ? "dark" : "light"
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
    theme: defaultTheme6 = {},
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
  if (!defaultTheme6.colorSchemes || typeof designSystemColorScheme === "string" && !defaultTheme6.colorSchemes[designSystemColorScheme] || typeof designSystemColorScheme === "object" && !defaultTheme6.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || typeof designSystemColorScheme === "object" && !defaultTheme6.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
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
    theme: themeProp = defaultTheme6,
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
var useUtilityClasses16 = (ownerState, componentName) => {
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
    const classes = useUtilityClasses16(ownerState, componentName);
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

// ../../node_modules/@mui/system/esm/Unstable_Grid/Grid.js
init_define_process();
var import_prop_types39 = __toESM(require_prop_types());

// ../../node_modules/@mui/system/esm/Unstable_Grid/createGrid.js
init_define_process();
var import_prop_types38 = __toESM(require_prop_types());
import * as React63 from "/react.mjs";

// ../../node_modules/@mui/system/esm/Unstable_Grid/gridGenerator.js
init_define_process();
var traverseBreakpoints = (breakpoints, responsize, iterator) => {
  const smallestBreakpoint = breakpoints.keys[0];
  if (Array.isArray(responsize)) {
    responsize.forEach((breakpointValue, index) => {
      iterator((responsizeStyles, style3) => {
        if (index <= breakpoints.keys.length - 1) {
          if (index === 0) {
            Object.assign(responsizeStyles, style3);
          } else {
            responsizeStyles[breakpoints.up(breakpoints.keys[index])] = style3;
          }
        }
      }, breakpointValue);
    });
  } else if (responsize && typeof responsize === "object") {
    const keys2 = Object.keys(responsize).length > breakpoints.keys.length ? breakpoints.keys : Object.keys(responsize);
    keys2.forEach((key) => {
      if (breakpoints.keys.indexOf(key) !== -1) {
        const breakpointValue = responsize[key];
        if (breakpointValue !== void 0) {
          iterator((responsizeStyles, style3) => {
            if (smallestBreakpoint === key) {
              Object.assign(responsizeStyles, style3);
            } else {
              responsizeStyles[breakpoints.up(key)] = style3;
            }
          }, breakpointValue);
        }
      }
    });
  } else if (typeof responsize === "number" || typeof responsize === "string") {
    iterator((responsizeStyles, style3) => {
      Object.assign(responsizeStyles, style3);
    }, responsize);
  }
};
var generateGridSizeStyles = ({
  theme,
  ownerState
}) => {
  const styles2 = {};
  traverseBreakpoints(theme.breakpoints, ownerState.gridSize, (appendStyle, value) => {
    let style3 = {};
    if (value === true) {
      style3 = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    }
    if (value === "auto") {
      style3 = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    }
    if (typeof value === "number") {
      style3 = {
        flexGrow: 0,
        flexBasis: "auto",
        width: `calc(100% * ${value} / var(--Grid-columns)${ownerState.nested && ownerState.container ? ` + var(--Grid-columnSpacing)` : ""})`
      };
    }
    appendStyle(styles2, style3);
  });
  return styles2;
};
var generateGridOffsetStyles = ({
  theme,
  ownerState
}) => {
  const styles2 = {};
  traverseBreakpoints(theme.breakpoints, ownerState.gridOffset, (appendStyle, value) => {
    let style3 = {};
    if (value === "auto") {
      style3 = {
        marginLeft: "auto"
      };
    }
    if (typeof value === "number") {
      style3 = {
        marginLeft: value === 0 ? "0px" : `calc(100% * ${value} / var(--Grid-columns))`
      };
    }
    appendStyle(styles2, style3);
  });
  return styles2;
};
var generateGridColumnsStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles2 = {
    "--Grid-columns": 12
  };
  traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
    appendStyle(styles2, {
      "--Grid-columns": value
    });
  });
  return styles2;
};
var generateGridRowSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles2 = {};
  traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
    var _theme$spacing;
    appendStyle(styles2, {
      "--Grid-rowSpacing": typeof value === "string" ? value : (_theme$spacing = theme.spacing) == null ? void 0 : _theme$spacing.call(theme, value)
    });
  });
  return styles2;
};
var generateGridColumnSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles2 = {};
  traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
    var _theme$spacing2;
    appendStyle(styles2, {
      "--Grid-columnSpacing": typeof value === "string" ? value : (_theme$spacing2 = theme.spacing) == null ? void 0 : _theme$spacing2.call(theme, value)
    });
  });
  return styles2;
};
var generateGridDirectionStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles2 = {};
  traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
    appendStyle(styles2, {
      flexDirection: value
    });
  });
  return styles2;
};
var generateGridStyles = ({
  ownerState
}) => {
  return _extends({
    minWidth: 0,
    boxSizing: "border-box"
  }, ownerState.container ? _extends({
    display: "flex",
    flexWrap: "wrap"
  }, ownerState.wrap && ownerState.wrap !== "wrap" && {
    flexWrap: ownerState.wrap
  }, {
    margin: `calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2)`
  }, ownerState.disableEqualOverflow && {
    margin: `calc(var(--Grid-rowSpacing) * -1) 0px 0px calc(var(--Grid-columnSpacing) * -1)`
  }, ownerState.nested ? _extends({
    padding: `calc(var(--Grid-nested-rowSpacing) / 2) calc(var(--Grid-nested-columnSpacing) / 2)`
  }, (ownerState.disableEqualOverflow || ownerState.parentDisableEqualOverflow) && {
    padding: `calc(var(--Grid-nested-rowSpacing)) 0px 0px calc(var(--Grid-nested-columnSpacing))`
  }) : {
    "--Grid-nested-rowSpacing": "var(--Grid-rowSpacing)",
    "--Grid-nested-columnSpacing": "var(--Grid-columnSpacing)"
  }) : _extends({
    padding: `calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2)`
  }, ownerState.disableEqualOverflow && {
    padding: `calc(var(--Grid-rowSpacing)) 0px 0px calc(var(--Grid-columnSpacing))`
  }));
};
var generateSizeClassNames = (gridSize) => {
  const classNames = [];
  Object.entries(gridSize).forEach(([key, value]) => {
    if (value !== false && value !== void 0) {
      classNames.push(`grid-${key}-${String(value)}`);
    }
  });
  return classNames;
};
var generateSpacingClassNames = (spacing2, smallestBreakpoint = "xs") => {
  function isValidSpacing(val) {
    if (val === void 0) {
      return false;
    }
    return typeof val === "string" && !Number.isNaN(Number(val)) || typeof val === "number" && val > 0;
  }
  if (isValidSpacing(spacing2)) {
    return [`spacing-${smallestBreakpoint}-${String(spacing2)}`];
  }
  if (typeof spacing2 === "object" && !Array.isArray(spacing2)) {
    const classNames = [];
    Object.entries(spacing2).forEach(([key, value]) => {
      if (isValidSpacing(value)) {
        classNames.push(`spacing-${key}-${String(value)}`);
      }
    });
    return classNames;
  }
  return [];
};

// ../../node_modules/@mui/system/esm/Unstable_Grid/createGrid.js
import { jsx as _jsx32 } from "/react.mjs";
var _excluded33 = ["className", "columns", "container", "component", "direction", "wrap", "spacing", "rowSpacing", "columnSpacing", "disableEqualOverflow"];
var defaultTheme2 = createTheme_default();
var defaultCreateStyledComponent2 = styled_default("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
});
function useThemePropsDefault2(props) {
  return useThemeProps({
    props,
    name: "MuiGrid",
    defaultTheme: defaultTheme2
  });
}
function createGrid(options = {}) {
  const {
    createStyledComponent = defaultCreateStyledComponent2,
    useThemeProps: useThemeProps3 = useThemePropsDefault2,
    componentName = "MuiGrid"
  } = options;
  const NestedContext = React63.createContext(false);
  const OverflowContext = React63.createContext(void 0);
  const useUtilityClasses24 = (ownerState, theme) => {
    const {
      container,
      direction,
      spacing: spacing2,
      wrap,
      gridSize
    } = ownerState;
    const slots = {
      root: ["root", container && "container", direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...generateSizeClassNames(gridSize), ...container ? generateSpacingClassNames(spacing2, theme.breakpoints.keys[0]) : []]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  const Grid2 = React63.forwardRef(function Grid3(inProps, ref) {
    var _inProps$columns, _inProps$spacing, _ref, _inProps$rowSpacing, _ref2, _inProps$columnSpacin, _ref3, _disableEqualOverflow;
    const theme = useTheme_default();
    const themeProps = useThemeProps3(inProps);
    const props = extendSxProp(themeProps);
    const nested = React63.useContext(NestedContext);
    const overflow2 = React63.useContext(OverflowContext);
    const {
      className,
      columns: columnsProp = 12,
      container = false,
      component = "div",
      direction = "row",
      wrap = "wrap",
      spacing: spacingProp = 0,
      rowSpacing: rowSpacingProp = spacingProp,
      columnSpacing: columnSpacingProp = spacingProp,
      disableEqualOverflow: themeDisableEqualOverflow
    } = props, rest2 = _objectWithoutPropertiesLoose(props, _excluded33);
    let disableEqualOverflow = themeDisableEqualOverflow;
    if (nested && themeDisableEqualOverflow !== void 0) {
      disableEqualOverflow = inProps.disableEqualOverflow;
    }
    const gridSize = {};
    const gridOffset = {};
    const other = {};
    Object.entries(rest2).forEach(([key, val]) => {
      if (theme.breakpoints.values[key] !== void 0) {
        gridSize[key] = val;
      } else if (theme.breakpoints.values[key.replace("Offset", "")] !== void 0) {
        gridOffset[key.replace("Offset", "")] = val;
      } else {
        other[key] = val;
      }
    });
    const columns = (_inProps$columns = inProps.columns) != null ? _inProps$columns : nested ? void 0 : columnsProp;
    const spacing2 = (_inProps$spacing = inProps.spacing) != null ? _inProps$spacing : nested ? void 0 : spacingProp;
    const rowSpacing = (_ref = (_inProps$rowSpacing = inProps.rowSpacing) != null ? _inProps$rowSpacing : inProps.spacing) != null ? _ref : nested ? void 0 : rowSpacingProp;
    const columnSpacing = (_ref2 = (_inProps$columnSpacin = inProps.columnSpacing) != null ? _inProps$columnSpacin : inProps.spacing) != null ? _ref2 : nested ? void 0 : columnSpacingProp;
    const ownerState = _extends({}, props, {
      nested,
      columns,
      container,
      direction,
      wrap,
      spacing: spacing2,
      rowSpacing,
      columnSpacing,
      gridSize,
      gridOffset,
      disableEqualOverflow: (_ref3 = (_disableEqualOverflow = disableEqualOverflow) != null ? _disableEqualOverflow : overflow2) != null ? _ref3 : false,
      parentDisableEqualOverflow: overflow2
    });
    const classes = useUtilityClasses24(ownerState, theme);
    let result = _jsx32(GridRoot, _extends({
      ref,
      as: component,
      ownerState,
      className: clsx_m_default(classes.root, className)
    }, other));
    if (!nested) {
      result = _jsx32(NestedContext.Provider, {
        value: true,
        children: result
      });
    }
    if (disableEqualOverflow !== void 0 && disableEqualOverflow !== (overflow2 != null ? overflow2 : false)) {
      result = _jsx32(OverflowContext.Provider, {
        value: disableEqualOverflow,
        children: result
      });
    }
    return result;
  });
  true ? Grid2.propTypes = {
    children: import_prop_types38.default.node,
    className: import_prop_types38.default.string,
    columns: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.number), import_prop_types38.default.number, import_prop_types38.default.object]),
    columnSpacing: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.oneOfType([import_prop_types38.default.number, import_prop_types38.default.string])), import_prop_types38.default.number, import_prop_types38.default.object, import_prop_types38.default.string]),
    component: import_prop_types38.default.elementType,
    container: import_prop_types38.default.bool,
    direction: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types38.default.arrayOf(import_prop_types38.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types38.default.object]),
    disableEqualOverflow: import_prop_types38.default.bool,
    lg: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number, import_prop_types38.default.bool]),
    lgOffset: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number]),
    md: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number, import_prop_types38.default.bool]),
    mdOffset: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number]),
    rowSpacing: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.oneOfType([import_prop_types38.default.number, import_prop_types38.default.string])), import_prop_types38.default.number, import_prop_types38.default.object, import_prop_types38.default.string]),
    sm: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number, import_prop_types38.default.bool]),
    smOffset: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number]),
    spacing: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.oneOfType([import_prop_types38.default.number, import_prop_types38.default.string])), import_prop_types38.default.number, import_prop_types38.default.object, import_prop_types38.default.string]),
    sx: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.oneOfType([import_prop_types38.default.func, import_prop_types38.default.object, import_prop_types38.default.bool])), import_prop_types38.default.func, import_prop_types38.default.object]),
    wrap: import_prop_types38.default.oneOf(["nowrap", "wrap-reverse", "wrap"]),
    xl: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number, import_prop_types38.default.bool]),
    xlOffset: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number]),
    xs: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number, import_prop_types38.default.bool]),
    xsOffset: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["auto"]), import_prop_types38.default.number])
  } : void 0;
  return Grid2;
}

// ../../node_modules/@mui/system/esm/Unstable_Grid/Grid.js
var Grid = createGrid();
true ? Grid.propTypes = {
  children: import_prop_types39.default.node,
  columns: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.number), import_prop_types39.default.number, import_prop_types39.default.object]),
  columnSpacing: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.number, import_prop_types39.default.string])), import_prop_types39.default.number, import_prop_types39.default.object, import_prop_types39.default.string]),
  container: import_prop_types39.default.bool,
  direction: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types39.default.arrayOf(import_prop_types39.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types39.default.object]),
  disableEqualOverflow: import_prop_types39.default.bool,
  lg: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number, import_prop_types39.default.bool]),
  lgOffset: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number]),
  md: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number, import_prop_types39.default.bool]),
  mdOffset: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number]),
  rowSpacing: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.number, import_prop_types39.default.string])), import_prop_types39.default.number, import_prop_types39.default.object, import_prop_types39.default.string]),
  sm: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number, import_prop_types39.default.bool]),
  smOffset: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number]),
  spacing: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.number, import_prop_types39.default.string])), import_prop_types39.default.number, import_prop_types39.default.object, import_prop_types39.default.string]),
  sx: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.func, import_prop_types39.default.object, import_prop_types39.default.bool])), import_prop_types39.default.func, import_prop_types39.default.object]),
  wrap: import_prop_types39.default.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  xl: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number, import_prop_types39.default.bool]),
  xlOffset: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number]),
  xs: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number, import_prop_types39.default.bool]),
  xsOffset: import_prop_types39.default.oneOfType([import_prop_types39.default.oneOf(["auto"]), import_prop_types39.default.number])
} : void 0;

// ../../node_modules/@mui/system/esm/Unstable_Grid/index.js
init_define_process();

// ../../node_modules/@mui/system/esm/Unstable_Grid/GridProps.js
init_define_process();

// ../../node_modules/@mui/system/esm/Unstable_Grid/gridClasses.js
init_define_process();
var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
var WRAPS = ["nowrap", "wrap-reverse", "wrap"];
var GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var gridClasses = generateUtilityClasses("MuiGrid", [
  "root",
  "container",
  "item",
  ...SPACINGS.map((spacing2) => `spacing-xs-${spacing2}`),
  ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
  ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
  ...GRID_SIZES.map((size) => `grid-xs-${size}`),
  ...GRID_SIZES.map((size) => `grid-sm-${size}`),
  ...GRID_SIZES.map((size) => `grid-md-${size}`),
  ...GRID_SIZES.map((size) => `grid-lg-${size}`),
  ...GRID_SIZES.map((size) => `grid-xl-${size}`)
]);

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
var _excluded34 = ["mode", "contrastThreshold", "tonalOffset"];
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
  } = palette2, other = _objectWithoutPropertiesLoose(palette2, _excluded34);
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
var _excluded35 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
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
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded35);
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
var _excluded36 = ["duration", "easing", "delay"];
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
    } = options, other = _objectWithoutPropertiesLoose(options, _excluded36);
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
var _excluded37 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme2(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded37);
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
var defaultTheme3 = createTheme_default2();
var defaultTheme_default = defaultTheme3;

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
var import_prop_types47 = __toESM(require_prop_types());
import * as React71 from "/react.mjs";

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
var import_prop_types42 = __toESM(require_prop_types());

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
import React66 from "/react.mjs";

// ../../node_modules/react-transition-group/esm/Transition.js
init_define_process();
var import_prop_types41 = __toESM(require_prop_types());
import React65 from "/react.mjs";
import ReactDOM2 from "/react.mjs";

// ../../node_modules/react-transition-group/esm/config.js
init_define_process();
var config_default = {
  disabled: false
};

// ../../node_modules/react-transition-group/esm/utils/PropTypes.js
init_define_process();
var import_prop_types40 = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types40.default.oneOfType([import_prop_types40.default.number, import_prop_types40.default.shape({
  enter: import_prop_types40.default.number,
  exit: import_prop_types40.default.number,
  appear: import_prop_types40.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types40.default.oneOfType([import_prop_types40.default.string, import_prop_types40.default.shape({
  enter: import_prop_types40.default.string,
  exit: import_prop_types40.default.string,
  active: import_prop_types40.default.string
}), import_prop_types40.default.shape({
  enter: import_prop_types40.default.string,
  enterDone: import_prop_types40.default.string,
  enterActive: import_prop_types40.default.string,
  exit: import_prop_types40.default.string,
  exitDone: import_prop_types40.default.string,
  exitActive: import_prop_types40.default.string
})]) : null;

// ../../node_modules/react-transition-group/esm/TransitionGroupContext.js
init_define_process();
import React64 from "/react.mjs";
var TransitionGroupContext_default = React64.createContext(null);

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
    return React65.createElement(TransitionGroupContext_default.Provider, {
      value: null
    }, typeof children2 === "function" ? children2(status, childProps) : React65.cloneElement(React65.Children.only(children2), childProps));
  };
  return Transition2;
}(React65.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  nodeRef: import_prop_types41.default.shape({
    current: typeof Element === "undefined" ? import_prop_types41.default.any : function(propValue, key, componentName, location2, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types41.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location2, propFullName, secret);
    }
  }),
  children: import_prop_types41.default.oneOfType([import_prop_types41.default.func.isRequired, import_prop_types41.default.element.isRequired]).isRequired,
  in: import_prop_types41.default.bool,
  mountOnEnter: import_prop_types41.default.bool,
  unmountOnExit: import_prop_types41.default.bool,
  appear: import_prop_types41.default.bool,
  enter: import_prop_types41.default.bool,
  exit: import_prop_types41.default.bool,
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  addEndListener: import_prop_types41.default.func,
  onEnter: import_prop_types41.default.func,
  onEntering: import_prop_types41.default.func,
  onEntered: import_prop_types41.default.func,
  onExit: import_prop_types41.default.func,
  onExiting: import_prop_types41.default.func,
  onExited: import_prop_types41.default.func
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
    return React66.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(React66.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  classNames: classNamesShape,
  onEnter: import_prop_types42.default.func,
  onEntering: import_prop_types42.default.func,
  onEntered: import_prop_types42.default.func,
  onExit: import_prop_types42.default.func,
  onExiting: import_prop_types42.default.func,
  onExited: import_prop_types42.default.func
}) : {};

// ../../node_modules/react-transition-group/esm/ReplaceTransition.js
init_define_process();
var import_prop_types44 = __toESM(require_prop_types());
import React68 from "/react.mjs";
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
var import_prop_types43 = __toESM(require_prop_types());
import React67 from "/react.mjs";

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
  var i2;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i2 = 0; i2 < nextKeysPending[nextKey].length; i2++) {
        var pendingNextKey = nextKeysPending[nextKey][i2];
        childMapping[nextKeysPending[nextKey][i2]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i2 = 0; i2 < pendingKeys.length; i2++) {
    childMapping[pendingKeys[i2]] = getValueForKey(pendingKeys[i2]);
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
var values3 = Object.values || function(obj) {
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
    var children2 = values3(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return React67.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children2);
    }
    return React67.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, React67.createElement(Component, props, children2));
  };
  return TransitionGroup2;
}(React67.Component);
TransitionGroup.propTypes = true ? {
  component: import_prop_types43.default.any,
  children: import_prop_types43.default.node,
  appear: import_prop_types43.default.bool,
  enter: import_prop_types43.default.bool,
  exit: import_prop_types43.default.bool,
  childFactory: import_prop_types43.default.func
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
    var child = React68.Children.toArray(children2)[idx];
    if (child.props[handler])
      (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? void 0 : ReactDOM3.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);
    var _React$Children$toArr = React68.Children.toArray(children2), first3 = _React$Children$toArr[0], second = _React$Children$toArr[1];
    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return React68.createElement(TransitionGroup_default, props, inProp ? React68.cloneElement(first3, {
      key: "first",
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : React68.cloneElement(second, {
      key: "second",
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };
  return ReplaceTransition2;
}(React68.Component);
ReplaceTransition.propTypes = true ? {
  in: import_prop_types44.default.bool.isRequired,
  children: function children(props, propName) {
    if (React68.Children.count(props[propName]) !== 2)
      return new Error('"' + propName + '" must be exactly two transition components.');
    return null;
  }
} : {};

// ../../node_modules/react-transition-group/esm/SwitchTransition.js
init_define_process();
var import_prop_types45 = __toESM(require_prop_types());
import React69 from "/react.mjs";
var _leaveRenders;
var _enterRenders;
function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren)
    return false;
  if (React69.isValidElement(oldChildren) && React69.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
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
  return React69.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function(_ref2) {
  var current = _ref2.current, changeState = _ref2.changeState, children2 = _ref2.children;
  return [current, React69.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function(_ref3) {
  var children2 = _ref3.children, changeState = _ref3.changeState;
  return React69.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERED, React69.cloneElement(children2, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function(_ref4) {
  var current = _ref4.current, children2 = _ref4.children, changeState = _ref4.changeState;
  return [React69.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERED, React69.cloneElement(children2, {
        in: true
      }));
    })
  }), React69.cloneElement(children2, {
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
      current: React69.cloneElement(props.children, {
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
    return React69.createElement(TransitionGroupContext_default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };
  return SwitchTransition2;
}(React69.Component);
SwitchTransition.propTypes = true ? {
  mode: import_prop_types45.default.oneOf([modes.in, modes.out]),
  children: import_prop_types45.default.oneOfType([import_prop_types45.default.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

// ../../node_modules/@mui/material/ButtonBase/Ripple.js
init_define_process();
var import_prop_types46 = __toESM(require_prop_types());
import * as React70 from "/react.mjs";
import { jsx as _jsx33 } from "/react.mjs";
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
  const [leaving, setLeaving] = React70.useState(false);
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
  React70.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout2);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout2]);
  return _jsx33("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: _jsx33("span", {
      className: childClassName
    })
  });
}
true ? Ripple.propTypes = {
  classes: import_prop_types46.default.object.isRequired,
  className: import_prop_types46.default.string,
  in: import_prop_types46.default.bool,
  onExited: import_prop_types46.default.func,
  pulsate: import_prop_types46.default.bool,
  rippleSize: import_prop_types46.default.number,
  rippleX: import_prop_types46.default.number,
  rippleY: import_prop_types46.default.number,
  timeout: import_prop_types46.default.number.isRequired
} : void 0;
var Ripple_default = Ripple;

// ../../node_modules/@mui/material/ButtonBase/touchRippleClasses.js
init_define_process();
var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var touchRippleClasses_default = touchRippleClasses;

// ../../node_modules/@mui/material/ButtonBase/TouchRipple.js
import { jsx as _jsx34 } from "/react.mjs";
var _excluded38 = ["center", "classes", "className"];
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
var TouchRipple = React71.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useThemeProps2({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const [ripples, setRipples] = React71.useState([]);
  const nextKey = React71.useRef(0);
  const rippleCallback = React71.useRef(null);
  React71.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = React71.useRef(false);
  const startTimer = React71.useRef(null);
  const startTimerCommit = React71.useRef(null);
  const container = React71.useRef(null);
  React71.useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = React71.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, _jsx34(TouchRippleRipple, {
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
  const start2 = React71.useCallback((event = {}, options = {}, cb) => {
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
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
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
  const pulsate = React71.useCallback(() => {
    start2({}, {
      pulsate: true
    });
  }, [start2]);
  const stop = React71.useCallback((event, cb) => {
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
  React71.useImperativeHandle(ref, () => ({
    pulsate,
    start: start2,
    stop
  }), [pulsate, start2, stop]);
  return _jsx34(TouchRippleRoot, _extends({
    className: clsx_m_default(classes.root, touchRippleClasses_default.root, className),
    ref: container
  }, other, {
    children: _jsx34(TransitionGroup_default, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
true ? TouchRipple.propTypes = {
  center: import_prop_types47.default.bool,
  classes: import_prop_types47.default.object,
  className: import_prop_types47.default.string
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
import { jsx as _jsx35 } from "/react.mjs";
import { jsxs as _jsxs13 } from "/react.mjs";
var _excluded39 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
var useUtilityClasses17 = (ownerState) => {
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
var ButtonBase = React72.forwardRef(function ButtonBase2(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded39);
  const buttonRef = React72.useRef(null);
  const rippleRef = React72.useRef(null);
  const handleRippleRef = useForkRef_default(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default();
  const [focusVisible, setFocusVisible] = React72.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React72.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = React72.useState(false);
  React72.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  React72.useEffect(() => {
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
  const keydownRef = React72.useRef(false);
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
    React72.useEffect(() => {
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
  const classes = useUtilityClasses17(ownerState);
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
    children: [children2, enableTouchRipple ? _jsx35(TouchRipple_default, _extends({
      ref: handleRippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
true ? ButtonBase.propTypes = {
  action: refType_default,
  centerRipple: import_prop_types48.default.bool,
  children: import_prop_types48.default.node,
  classes: import_prop_types48.default.object,
  className: import_prop_types48.default.string,
  component: elementTypeAcceptingRef_default,
  disabled: import_prop_types48.default.bool,
  disableRipple: import_prop_types48.default.bool,
  disableTouchRipple: import_prop_types48.default.bool,
  focusRipple: import_prop_types48.default.bool,
  focusVisibleClassName: import_prop_types48.default.string,
  href: import_prop_types48.default.any,
  LinkComponent: import_prop_types48.default.elementType,
  onBlur: import_prop_types48.default.func,
  onClick: import_prop_types48.default.func,
  onContextMenu: import_prop_types48.default.func,
  onDragLeave: import_prop_types48.default.func,
  onFocus: import_prop_types48.default.func,
  onFocusVisible: import_prop_types48.default.func,
  onKeyDown: import_prop_types48.default.func,
  onKeyUp: import_prop_types48.default.func,
  onMouseDown: import_prop_types48.default.func,
  onMouseLeave: import_prop_types48.default.func,
  onMouseUp: import_prop_types48.default.func,
  onTouchEnd: import_prop_types48.default.func,
  onTouchMove: import_prop_types48.default.func,
  onTouchStart: import_prop_types48.default.func,
  sx: import_prop_types48.default.oneOfType([import_prop_types48.default.arrayOf(import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.object, import_prop_types48.default.bool])), import_prop_types48.default.func, import_prop_types48.default.object]),
  tabIndex: import_prop_types48.default.number,
  TouchRippleProps: import_prop_types48.default.object,
  touchRippleRef: import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.shape({
    current: import_prop_types48.default.shape({
      pulsate: import_prop_types48.default.func.isRequired,
      start: import_prop_types48.default.func.isRequired,
      stop: import_prop_types48.default.func.isRequired
    })
  })]),
  type: import_prop_types48.default.oneOfType([import_prop_types48.default.oneOf(["button", "reset", "submit"]), import_prop_types48.default.string])
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
import { jsx as _jsx36 } from "/react.mjs";
var _excluded40 = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"];
var useUtilityClasses18 = (ownerState) => {
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
var Fab = React73.forwardRef(function Fab2(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded40);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    disableFocusRipple,
    size,
    variant
  });
  const classes = useUtilityClasses18(ownerState);
  return _jsx36(FabRoot, _extends({
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
  children: import_prop_types49.default.node,
  classes: import_prop_types49.default.object,
  className: import_prop_types49.default.string,
  color: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), import_prop_types49.default.string]),
  component: import_prop_types49.default.elementType,
  disabled: import_prop_types49.default.bool,
  disableFocusRipple: import_prop_types49.default.bool,
  disableRipple: import_prop_types49.default.bool,
  focusVisibleClassName: import_prop_types49.default.string,
  href: import_prop_types49.default.string,
  size: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["small", "medium", "large"]), import_prop_types49.default.string]),
  sx: import_prop_types49.default.oneOfType([import_prop_types49.default.arrayOf(import_prop_types49.default.oneOfType([import_prop_types49.default.func, import_prop_types49.default.object, import_prop_types49.default.bool])), import_prop_types49.default.func, import_prop_types49.default.object]),
  variant: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["circular", "extended"]), import_prop_types49.default.string])
} : void 0;
var Fab_default = Fab;

// ../../node_modules/@mui/material/Button/Button.js
init_define_process();
var import_prop_types50 = __toESM(require_prop_types());
import * as React75 from "/react.mjs";

// ../../node_modules/@mui/material/Button/buttonClasses.js
init_define_process();
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
var buttonClasses_default = buttonClasses;

// ../../node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js
init_define_process();
import * as React74 from "/react.mjs";
var ButtonGroupContext = React74.createContext({});
if (true) {
  ButtonGroupContext.displayName = "ButtonGroupContext";
}
var ButtonGroupContext_default = ButtonGroupContext;

// ../../node_modules/@mui/material/Button/Button.js
import { jsx as _jsx37 } from "/react.mjs";
import { jsxs as _jsxs14 } from "/react.mjs";
var _excluded41 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
var useUtilityClasses19 = (ownerState) => {
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
var Button = React75.forwardRef(function Button2(inProps, ref) {
  const contextProps = React75.useContext(ButtonGroupContext_default);
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded41);
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
  const classes = useUtilityClasses19(ownerState);
  const startIcon = startIconProp && _jsx37(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && _jsx37(ButtonEndIcon, {
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
  children: import_prop_types50.default.node,
  classes: import_prop_types50.default.object,
  className: import_prop_types50.default.string,
  color: import_prop_types50.default.oneOfType([import_prop_types50.default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), import_prop_types50.default.string]),
  component: import_prop_types50.default.elementType,
  disabled: import_prop_types50.default.bool,
  disableElevation: import_prop_types50.default.bool,
  disableFocusRipple: import_prop_types50.default.bool,
  disableRipple: import_prop_types50.default.bool,
  endIcon: import_prop_types50.default.node,
  focusVisibleClassName: import_prop_types50.default.string,
  fullWidth: import_prop_types50.default.bool,
  href: import_prop_types50.default.string,
  size: import_prop_types50.default.oneOfType([import_prop_types50.default.oneOf(["small", "medium", "large"]), import_prop_types50.default.string]),
  startIcon: import_prop_types50.default.node,
  sx: import_prop_types50.default.oneOfType([import_prop_types50.default.arrayOf(import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object, import_prop_types50.default.bool])), import_prop_types50.default.func, import_prop_types50.default.object]),
  type: import_prop_types50.default.oneOfType([import_prop_types50.default.oneOf(["button", "reset", "submit"]), import_prop_types50.default.string]),
  variant: import_prop_types50.default.oneOfType([import_prop_types50.default.oneOf(["contained", "outlined", "text"]), import_prop_types50.default.string])
} : void 0;

// ../../node_modules/@mui/material/Box/Box.js
init_define_process();
var import_prop_types52 = __toESM(require_prop_types());

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
import * as React76 from "/react.mjs";
function useTheme4() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React76.useDebugValue(theme);
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
var import_prop_types51 = __toESM(require_prop_types());
import * as React77 from "/react.mjs";

// ../../node_modules/@mui/material/Paper/paperClasses.js
init_define_process();
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

// ../../node_modules/@mui/material/Paper/Paper.js
import { jsx as _jsx38 } from "/react.mjs";
var _excluded42 = ["className", "component", "elevation", "square", "variant"];
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
var useUtilityClasses20 = (ownerState) => {
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
var Paper = React77.forwardRef(function Paper2(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded42);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses20(ownerState);
  if (true) {
    const theme = useTheme4();
    if (theme.shadows[elevation] === void 0) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
    }
  }
  return _jsx38(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx_m_default(classes.root, className),
    ref
  }, other));
});
true ? Paper.propTypes = {
  children: import_prop_types51.default.node,
  classes: import_prop_types51.default.object,
  className: import_prop_types51.default.string,
  component: import_prop_types51.default.elementType,
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
  square: import_prop_types51.default.bool,
  sx: import_prop_types51.default.oneOfType([import_prop_types51.default.arrayOf(import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object, import_prop_types51.default.bool])), import_prop_types51.default.func, import_prop_types51.default.object]),
  variant: import_prop_types51.default.oneOfType([import_prop_types51.default.oneOf(["elevation", "outlined"]), import_prop_types51.default.string])
} : void 0;

// ../../node_modules/@mui/material/styles/experimental_extendTheme.js
var _excluded43 = ["colorSchemes", "cssVarPrefix"];
var _excluded211 = ["palette"];
var defaultDarkOverlays = [...Array(25)].map((_2, index) => {
  if (index === 0) {
    return void 0;
  }
  const overlay = getOverlayAlpha(index);
  return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function assignNode(obj, keys2) {
  keys2.forEach((k) => {
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
  } = options, input = _objectWithoutPropertiesLoose(options, _excluded43);
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
var shouldSkipGeneratingVar = (keys2) => {
  var _keys$;
  return !!keys2[0].match(/(typography|mixins|breakpoints|direction|transitions)/) || keys2[0] === "palette" && !!((_keys$ = keys2[1]) != null && _keys$.match(/(mode|contrastThreshold|tonalOffset)/));
};
var defaultTheme4 = extendTheme();
var {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript: getInitColorSchemeScript2
} = createCssVarsProvider({
  theme: defaultTheme4,
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
var defaultTheme5 = createTheme_default2();
var Box2 = createBox({
  defaultTheme: defaultTheme5,
  defaultClassName: "MuiBox-root",
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box2.propTypes = {
  children: import_prop_types52.default.node,
  component: import_prop_types52.default.elementType,
  sx: import_prop_types52.default.oneOfType([import_prop_types52.default.arrayOf(import_prop_types52.default.oneOfType([import_prop_types52.default.func, import_prop_types52.default.object, import_prop_types52.default.bool])), import_prop_types52.default.func, import_prop_types52.default.object])
} : void 0;

// ../../node_modules/@mui/material/Slider/Slider.js
init_define_process();
var import_prop_types53 = __toESM(require_prop_types());
import * as React78 from "/react.mjs";

// ../../node_modules/@mui/material/utils/shouldSpreadAdditionalProps.js
init_define_process();
var shouldSpreadAdditionalProps = (Slot) => {
  return !Slot || !isHostComponent_default(Slot);
};
var shouldSpreadAdditionalProps_default = shouldSpreadAdditionalProps;

// ../../node_modules/@mui/material/Slider/Slider.js
import { jsx as _jsx39 } from "/react.mjs";
var _excluded44 = ["component", "components", "componentsProps", "color", "size"];
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
  children: import_prop_types53.default.node
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
  children: import_prop_types53.default.node
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
  children: import_prop_types53.default.node
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
  children: import_prop_types53.default.node
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
  transformOrigin: "bottom center",
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
  top: "24px",
  transformOrigin: "right center",
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
  children: import_prop_types53.default.node
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
  children: import_prop_types53.default.node
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
  children: import_prop_types53.default.node
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
var Slider = React78.forwardRef(function Slider2(inputProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded44);
  const ownerState = _extends({}, props, {
    color: color2,
    size
  });
  const classes = extendUtilityClasses(ownerState);
  return _jsx39(SliderUnstyled_default, _extends({}, other, {
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
  "aria-label": chainPropTypes(import_prop_types53.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  "aria-labelledby": import_prop_types53.default.string,
  "aria-valuetext": chainPropTypes(import_prop_types53.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  children: import_prop_types53.default.node,
  classes: import_prop_types53.default.object,
  color: import_prop_types53.default.oneOfType([import_prop_types53.default.oneOf(["primary", "secondary"]), import_prop_types53.default.string]),
  components: import_prop_types53.default.shape({
    Input: import_prop_types53.default.elementType,
    Mark: import_prop_types53.default.elementType,
    MarkLabel: import_prop_types53.default.elementType,
    Rail: import_prop_types53.default.elementType,
    Root: import_prop_types53.default.elementType,
    Thumb: import_prop_types53.default.elementType,
    Track: import_prop_types53.default.elementType,
    ValueLabel: import_prop_types53.default.elementType
  }),
  componentsProps: import_prop_types53.default.shape({
    input: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object]),
    mark: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object]),
    markLabel: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object]),
    rail: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object]),
    root: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object]),
    thumb: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object]),
    track: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object]),
    valueLabel: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.shape({
      children: import_prop_types53.default.element,
      className: import_prop_types53.default.string,
      components: import_prop_types53.default.shape({
        Root: import_prop_types53.default.elementType
      }),
      open: import_prop_types53.default.bool,
      style: import_prop_types53.default.object,
      value: import_prop_types53.default.number,
      valueLabelDisplay: import_prop_types53.default.oneOf(["auto", "off", "on"])
    })])
  }),
  defaultValue: import_prop_types53.default.oneOfType([import_prop_types53.default.arrayOf(import_prop_types53.default.number), import_prop_types53.default.number]),
  disabled: import_prop_types53.default.bool,
  disableSwap: import_prop_types53.default.bool,
  getAriaLabel: import_prop_types53.default.func,
  getAriaValueText: import_prop_types53.default.func,
  isRtl: import_prop_types53.default.bool,
  marks: import_prop_types53.default.oneOfType([import_prop_types53.default.arrayOf(import_prop_types53.default.shape({
    label: import_prop_types53.default.node,
    value: import_prop_types53.default.number.isRequired
  })), import_prop_types53.default.bool]),
  max: import_prop_types53.default.number,
  min: import_prop_types53.default.number,
  name: import_prop_types53.default.string,
  onChange: import_prop_types53.default.func,
  onChangeCommitted: import_prop_types53.default.func,
  orientation: import_prop_types53.default.oneOf(["horizontal", "vertical"]),
  scale: import_prop_types53.default.func,
  size: import_prop_types53.default.oneOfType([import_prop_types53.default.oneOf(["small", "medium"]), import_prop_types53.default.string]),
  step: import_prop_types53.default.number,
  sx: import_prop_types53.default.oneOfType([import_prop_types53.default.arrayOf(import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object, import_prop_types53.default.bool])), import_prop_types53.default.func, import_prop_types53.default.object]),
  tabIndex: import_prop_types53.default.number,
  track: import_prop_types53.default.oneOf(["inverted", "normal", false]),
  value: import_prop_types53.default.oneOfType([import_prop_types53.default.arrayOf(import_prop_types53.default.number), import_prop_types53.default.number]),
  valueLabelDisplay: import_prop_types53.default.oneOf(["auto", "off", "on"]),
  valueLabelFormat: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.string])
} : void 0;

// ../../node_modules/@mui/material/utils/createSvgIcon.js
init_define_process();
import * as React80 from "/react.mjs";

// ../../node_modules/@mui/material/SvgIcon/index.js
init_define_process();

// ../../node_modules/@mui/material/SvgIcon/SvgIcon.js
init_define_process();
var import_prop_types54 = __toESM(require_prop_types());
import * as React79 from "/react.mjs";

// ../../node_modules/@mui/material/SvgIcon/svgIconClasses.js
init_define_process();
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// ../../node_modules/@mui/material/SvgIcon/SvgIcon.js
import { jsx as _jsx40 } from "/react.mjs";
import { jsxs as _jsxs15 } from "/react.mjs";
var _excluded45 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
var useUtilityClasses21 = (ownerState) => {
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
var SvgIcon = React79.forwardRef(function SvgIcon2(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded45);
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
  const classes = useUtilityClasses21(ownerState);
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
    children: [children2, titleAccess ? _jsx40("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  children: import_prop_types54.default.node,
  classes: import_prop_types54.default.object,
  className: import_prop_types54.default.string,
  color: import_prop_types54.default.oneOfType([import_prop_types54.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types54.default.string]),
  component: import_prop_types54.default.elementType,
  fontSize: import_prop_types54.default.oneOfType([import_prop_types54.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types54.default.string]),
  htmlColor: import_prop_types54.default.string,
  inheritViewBox: import_prop_types54.default.bool,
  shapeRendering: import_prop_types54.default.string,
  sx: import_prop_types54.default.oneOfType([import_prop_types54.default.arrayOf(import_prop_types54.default.oneOfType([import_prop_types54.default.func, import_prop_types54.default.object, import_prop_types54.default.bool])), import_prop_types54.default.func, import_prop_types54.default.object]),
  titleAccess: import_prop_types54.default.string,
  viewBox: import_prop_types54.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// ../../node_modules/@mui/material/utils/createSvgIcon.js
import { jsx as _jsx41 } from "/react.mjs";
function createSvgIcon(path, displayName) {
  const Component = (props, ref) => _jsx41(SvgIcon_default, _extends({
    "data-testid": `${displayName}Icon`,
    ref
  }, props, {
    children: path
  }));
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React80.memo(React80.forwardRef(Component));
}

// ../../node_modules/@mui/material/ToggleButton/ToggleButton.js
init_define_process();
var import_prop_types55 = __toESM(require_prop_types());
import * as React81 from "/react.mjs";

// ../../node_modules/@mui/material/ToggleButton/toggleButtonClasses.js
init_define_process();
function getToggleButtonUtilityClass(slot) {
  return generateUtilityClass("MuiToggleButton", slot);
}
var toggleButtonClasses = generateUtilityClasses("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge"]);
var toggleButtonClasses_default = toggleButtonClasses;

// ../../node_modules/@mui/material/ToggleButton/ToggleButton.js
import { jsx as _jsx42 } from "/react.mjs";
var _excluded46 = ["children", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "onChange", "onClick", "selected", "size", "value"];
var useUtilityClasses22 = (ownerState) => {
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
var ToggleButton = React81.forwardRef(function ToggleButton2(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded46);
  const ownerState = _extends({}, props, {
    color: color2,
    disabled,
    disableFocusRipple,
    fullWidth,
    size
  });
  const classes = useUtilityClasses22(ownerState);
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
  return _jsx42(ToggleButtonRoot, _extends({
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
  children: import_prop_types55.default.node,
  classes: import_prop_types55.default.object,
  className: import_prop_types55.default.string,
  color: import_prop_types55.default.oneOfType([import_prop_types55.default.oneOf(["standard", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types55.default.string]),
  disabled: import_prop_types55.default.bool,
  disableFocusRipple: import_prop_types55.default.bool,
  disableRipple: import_prop_types55.default.bool,
  fullWidth: import_prop_types55.default.bool,
  onChange: import_prop_types55.default.func,
  onClick: import_prop_types55.default.func,
  selected: import_prop_types55.default.bool,
  size: import_prop_types55.default.oneOfType([import_prop_types55.default.oneOf(["small", "medium", "large"]), import_prop_types55.default.string]),
  sx: import_prop_types55.default.oneOfType([import_prop_types55.default.arrayOf(import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object, import_prop_types55.default.bool])), import_prop_types55.default.func, import_prop_types55.default.object]),
  value: import_prop_types55.default.any.isRequired
} : void 0;
var ToggleButton_default = ToggleButton;

// ../../node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js
init_define_process();
var import_react_is3 = __toESM(require_react_is2());
var import_prop_types56 = __toESM(require_prop_types());
import * as React82 from "/react.mjs";

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
import { jsx as _jsx43 } from "/react.mjs";
var _excluded47 = ["children", "className", "color", "disabled", "exclusive", "fullWidth", "onChange", "orientation", "size", "value"];
var useUtilityClasses23 = (ownerState) => {
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
var ToggleButtonGroup = React82.forwardRef(function ToggleButtonGroup2(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded47);
  const ownerState = _extends({}, props, {
    disabled,
    fullWidth,
    orientation,
    size
  });
  const classes = useUtilityClasses23(ownerState);
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
  return _jsx43(ToggleButtonGroupRoot, _extends({
    role: "group",
    className: clsx_m_default(classes.root, className),
    ref,
    ownerState
  }, other, {
    children: React82.Children.map(children2, (child) => {
      if (!React82.isValidElement(child)) {
        return null;
      }
      if (true) {
        if ((0, import_react_is3.isFragment)(child)) {
          console.error(["MUI: The ToggleButtonGroup component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
        }
      }
      return React82.cloneElement(child, {
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
  children: import_prop_types56.default.node,
  classes: import_prop_types56.default.object,
  className: import_prop_types56.default.string,
  color: import_prop_types56.default.oneOfType([import_prop_types56.default.oneOf(["standard", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types56.default.string]),
  disabled: import_prop_types56.default.bool,
  exclusive: import_prop_types56.default.bool,
  fullWidth: import_prop_types56.default.bool,
  onChange: import_prop_types56.default.func,
  orientation: import_prop_types56.default.oneOf(["horizontal", "vertical"]),
  size: import_prop_types56.default.oneOfType([import_prop_types56.default.oneOf(["small", "medium", "large"]), import_prop_types56.default.string]),
  sx: import_prop_types56.default.oneOfType([import_prop_types56.default.arrayOf(import_prop_types56.default.oneOfType([import_prop_types56.default.func, import_prop_types56.default.object, import_prop_types56.default.bool])), import_prop_types56.default.func, import_prop_types56.default.object]),
  value: import_prop_types56.default.any
} : void 0;
var ToggleButtonGroup_default = ToggleButtonGroup;

// js/mui.tsx
var FullscreenIcon = createSvgIcon(
  jsx("path", {
    d: "M17 4h5v5h-2V6h-3V4zM4 9V6h3V4H2v5h2zm16 6v3h-3v2h5v-5h-2zM7 18H4v-3H2v5h5v-2zM18 8H6v8h12V8z"
  }),
  "Fullscreen"
);
var Phone = createSvgIcon(
  jsx("path", {
    d: "M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"
  }, "12"),
  "PhoneAndroid"
);
var Share = createSvgIcon(
  jsx("path", {
    d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
  }, "12"),
  "Share"
);
var Tablet = createSvgIcon(
  jsx("path", {
    d: "M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"
  }, "12"),
  "TabletAndroid"
);
var Tv = createSvgIcon(
  jsx("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"
  }, "12"),
  "Tv"
);
var QrCode = createSvgIcon(
  jsx("path", {
    d: "M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm0 10h2v2h-2zm-6-6h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0-4h2v2h-2zm2 2h2v2h-2z"
  }, "12"),
  "QrCode"
);

// js/Qr.tsx
var QR = ({ url }) => jsx(QRious2, {
  value: url
});
var QRButton = ({ url }) => {
  const [showQR, setQR] = useState24(false);
  return jsx(LazyMotion, {
    features: domAnimation,
    children: jsx(m.div, {
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
              `,
      children: showQR ? jsx(QR, {
        url: url || "/live/coder/public"
      }, url || "http://spike.land") : jsx(Fab_default, {
        children: jsx(QrCode, {})
      })
    })
  });
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
  hashCode: hashCode4
}) => {
  const [scaleRange, changeScaleRange] = useState25(100);
  const startPositions = { bottom: 0, right: 0 };
  const [{ bottom: bottom3, right: right3 }, setPositions] = useState25(startPositions);
  const [width2, setWidth] = useState25(window.innerWidth * devicePixelRatio);
  const [height2, setHeight] = useState25(window.innerHeight * devicePixelRatio);
  const ref = useRef28(null);
  const scale = scaleRange / 100;
  useEffect29(() => {
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
    features: domMax,
    children: jsx(m.div, {
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
      dragElastic: 0.5,
      children: jsxs("div", {
        css: css` 
              display: flex;
              
                `,
        children: [
          jsxs("div", {
            css: css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `,
            children: [
              jsx(m.div, {
                transition: { delay: 0, duration: 0.4 },
                initial: { height: 0, width: 0 },
                animate: { height: "auto", width: "auto" },
                children: jsx(ToggleButtonGroup3, {
                  value: scaleRange,
                  size: "small",
                  exclusive: true,
                  onChange: (_e, newScale) => {
                    newScale && changeScaleRange(newScale);
                  },
                  children: sizes.map((size) => jsx(ToggleButton3, {
                    value: size,
                    children: jsxs("span", {
                      css: css`
                       color: ${size === scaleRange ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.3)"};
                       `,
                      children: [
                        size,
                        "%"
                      ]
                    })
                  }, size))
                })
              }),
              jsx(m.div, {
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
            `,
                children: jsx(m.div, {
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
              `,
                  children: children2
                })
              }),
              jsx(m.div, {
                transition: { delay: 0, duration: 0.4 },
                children: jsx(ToggleButtonGroup3, {
                  value: width2,
                  size: "small",
                  exclusive: true,
                  onChange: (_e, newSize) => {
                    if (newSize) {
                      setHeight(breakPointHeights[breakPoints.indexOf(newSize)]);
                      setWidth(newSize);
                    }
                  },
                  children: breakPoints.map((size) => jsx(ToggleButton3, {
                    value: size,
                    children: size === 680 ? jsx(Phone, {
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
                    })
                  }, `size-${size}`))
                })
              })
            ]
          }),
          jsx(m.div, {
            transition: { delay: 0, duration: 0.4 },
            initial: { height: 0, width: 0 },
            animate: { height: "100%", width: "auto" },
            children: jsxs("div", {
              css: css`
              padding: 16px;
              display: flex;
              overflow: "hidden";
              align-items: center;          
              flex-direction: column;
              `,
              children: [
                jsx(Fab_default, {
                  onClick: () => {
                    var _a;
                    (_a = document.getElementById("root")) == null ? void 0 : _a.requestFullscreen();
                  },
                  children: jsx(FullscreenIcon, {}, "fs")
                }, "fullscreen"),
                jsx(QRButton, {
                  url: location.origin + `/live/${room}/public`
                }, `qr-${hashCode4}`),
                jsx(Fab_default, {
                  onClick: () => open(`/live/${room}/public`),
                  children: jsx(Share, {})
                }, "Share")
              ]
            })
          })
        ]
      })
    })
  });
};

// js/renderPreviewWindow.tsx
import { hydrateRoot } from "/react.mjs";

// ../../node_modules/react-reverse-portal/dist/web/index.js
init_define_process();
import * as React83 from "/react.mjs";
import * as ReactDOM4 from "/react.mjs";
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
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
var ELEMENT_TYPE_HTML = "html";
var ELEMENT_TYPE_SVG = "svg";
var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
var validateElementType = function(domElement, elementType) {
  if (elementType === ELEMENT_TYPE_HTML) {
    return domElement instanceof HTMLElement;
  }
  if (elementType === ELEMENT_TYPE_SVG) {
    return domElement instanceof SVGElement;
  }
  throw new Error('Unrecognized element type "' + elementType + '" for validateElementType.');
};
var createPortalNode = function(elementType, options) {
  var initialProps = {};
  var parent;
  var lastPlaceholder;
  var element;
  if (elementType === ELEMENT_TYPE_HTML) {
    element = document.createElement("div");
  } else if (elementType === ELEMENT_TYPE_SVG) {
    element = document.createElementNS(SVG_NAMESPACE, "g");
  } else {
    throw new Error('Invalid element type "' + elementType + '" for createPortalNode: must be "html" or "svg".');
  }
  if (options && typeof options === "object") {
    for (var _i = 0, _a = Object.entries(options.attributes); _i < _a.length; _i++) {
      var _b = _a[_i], key = _b[0], value = _b[1];
      element.setAttribute(key, value);
    }
  }
  var portalNode = {
    element,
    elementType,
    setPortalProps: function(props) {
      initialProps = props;
    },
    getInitialPortalProps: function() {
      return initialProps;
    },
    mount: function(newParent, newPlaceholder) {
      if (newPlaceholder === lastPlaceholder) {
        return;
      }
      portalNode.unmount();
      if (newParent !== parent) {
        if (!validateElementType(newParent, elementType)) {
          throw new Error('Invalid element type for portal: "' + elementType + '" portalNodes must be used with ' + elementType + " elements, but OutPortal is within <" + newParent.tagName + ">.");
        }
      }
      newParent.replaceChild(portalNode.element, newPlaceholder);
      parent = newParent;
      lastPlaceholder = newPlaceholder;
    },
    unmount: function(expectedPlaceholder) {
      if (expectedPlaceholder && expectedPlaceholder !== lastPlaceholder) {
        return;
      }
      if (parent && lastPlaceholder) {
        parent.replaceChild(lastPlaceholder, portalNode.element);
        parent = void 0;
        lastPlaceholder = void 0;
      }
    }
  };
  return portalNode;
};
var InPortal = function(_super) {
  __extends(InPortal2, _super);
  function InPortal2(props) {
    var _this = _super.call(this, props) || this;
    _this.addPropsChannel = function() {
      Object.assign(_this.props.node, {
        setPortalProps: function(props2) {
          _this.setState({ nodeProps: props2 });
        }
      });
    };
    _this.state = {
      nodeProps: _this.props.node.getInitialPortalProps()
    };
    return _this;
  }
  InPortal2.prototype.componentDidMount = function() {
    this.addPropsChannel();
  };
  InPortal2.prototype.componentDidUpdate = function() {
    this.addPropsChannel();
  };
  InPortal2.prototype.render = function() {
    var _this = this;
    var _a = this.props, children2 = _a.children, node = _a.node;
    return ReactDOM4.createPortal(React83.Children.map(children2, function(child) {
      if (!React83.isValidElement(child))
        return child;
      return React83.cloneElement(child, _this.state.nodeProps);
    }), node.element);
  };
  return InPortal2;
}(React83.PureComponent);
var OutPortal = function(_super) {
  __extends(OutPortal2, _super);
  function OutPortal2(props) {
    var _this = _super.call(this, props) || this;
    _this.placeholderNode = React83.createRef();
    _this.passPropsThroughPortal();
    return _this;
  }
  OutPortal2.prototype.passPropsThroughPortal = function() {
    var propsForTarget = Object.assign({}, this.props, { node: void 0 });
    this.props.node.setPortalProps(propsForTarget);
  };
  OutPortal2.prototype.componentDidMount = function() {
    var node = this.props.node;
    this.currentPortalNode = node;
    var placeholder = this.placeholderNode.current;
    var parent = placeholder.parentNode;
    node.mount(parent, placeholder);
    this.passPropsThroughPortal();
  };
  OutPortal2.prototype.componentDidUpdate = function() {
    var node = this.props.node;
    if (this.currentPortalNode && node !== this.currentPortalNode) {
      this.currentPortalNode.unmount(this.placeholderNode.current);
      this.currentPortalNode.setPortalProps({});
      this.currentPortalNode = node;
    }
    var placeholder = this.placeholderNode.current;
    var parent = placeholder.parentNode;
    node.mount(parent, placeholder);
    this.passPropsThroughPortal();
  };
  OutPortal2.prototype.componentWillUnmount = function() {
    var node = this.props.node;
    node.unmount(this.placeholderNode.current);
    node.setPortalProps({});
  };
  OutPortal2.prototype.render = function() {
    return React83.createElement("div", { ref: this.placeholderNode });
  };
  return OutPortal2;
}(React83.PureComponent);
var createHtmlPortalNode = createPortalNode.bind(null, ELEMENT_TYPE_HTML);
var createSvgPortalNode = createPortalNode.bind(null, ELEMENT_TYPE_SVG);

// js/Editor.tsx
init_define_process();
import { useEffect as useEffect30, useRef as useRef29, useState as useState26 } from "/react.mjs";

// js/runner.tsx
init_define_process();

// js/renderToString.tsx
init_define_process();
import { renderToString } from "/react.mjs";
var renderFromString = (App2) => {
  const html = renderToString(jsx(App2, {}));
  return {
    html,
    css: extractCritical(html)
  };
};
var extractCritical = (html) => {
  const rules = {};
  for (let i2 in document.styleSheets) {
    const styleSheet = document.styleSheets[i2];
    for (let r2 in styleSheet.cssRules) {
      const rule = styleSheet.cssRules[r2];
      if (rule && rule.cssText && rule.cssText.slice(0, 5) === ".css-") {
        const selector = rule.cssText.slice(1, 11);
        if (!rules[selector] && html.includes(selector) && !rule.cssText.slice(10).includes(".css-")) {
          rules[selector] = rule.cssText;
        }
      }
    }
  }
  return Object.keys(rules).map((r2) => rules[r2]).join(" ");
};

// js/runner.tsx
var transform2 = null;
var i = 0;
async function runner({ code, counter }) {
  if (i >= counter) {
    setTimeout(() => i = mST().i, 100);
    return;
  }
  i = counter;
  const { init } = await import("../esbuildEsm-STTGYY5M.mjs");
  transform2 = transform2 || await init();
  if (code === mST().code)
    return;
  if (i > counter)
    return;
  try {
    const transpiled = await transform2(code);
    if (transpiled === mST().transpiled)
      return;
    let restartError = false;
    if (transpiled.length > 0) {
      try {
        const App2 = await appFactory(transpiled);
        const { html, css: css2 } = renderFromString(App2);
        if (i > counter)
          return;
        await saveCode({
          code,
          transpiled,
          i: counter,
          html,
          css: css2
        });
        return;
      } catch (error) {
        console.error("EXCEPTION");
        console.error(error);
        restartError = true;
        console.error({ restartError });
        return;
      }
    }
  } catch (error) {
    console.error({ error });
  }
}

// js/isMobile.mjs
init_define_process();
function isMobile() {
  let check = false;
  (function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

// js/Editor.tsx
var import_lodash = __toESM(require_lodash(), 1);
var runnerDebounced = (0, import_lodash.default)(runner, 100, {
  trailing: true,
  leading: true,
  maxWait: 500
});
var mod = {
  CH: () => {
  },
  code: ""
};
var Editor = ({ code, i: i2, codeSpace: codeSpace2 }) => {
  const ref = useRef29(null);
  const [
    mySession,
    changeContent
  ] = useState26({
    myCode: code,
    counter: i2,
    myId: "loading",
    getValue: () => "",
    setValue: (_code) => {
    },
    onChange: (_cb) => {
    },
    prettierJs: (code2) => code2,
    engine: isMobile() ? "ace" : "monaco"
  });
  mod.CH = () => changeContent;
  const {
    counter,
    myCode,
    myId,
    engine,
    prettierJs,
    getValue: getValue3,
    setValue,
    onChange
  } = mySession;
  mod.code = myCode;
  const lines = (code == null ? void 0 : code.split("\n").length) || 0;
  useEffect30(() => {
    if (!(ref == null ? void 0 : ref.current))
      return;
    const setMonaco = async () => {
      const { startMonaco } = await import("../startMonaco-T4ZJKYRI.mjs");
      const { editor } = await startMonaco(
        {
          container: ref.current,
          name: codeSpace2,
          code: mST().code
        }
      );
      changeContent((x) => ({
        ...x,
        setValue: (code2) => {
          let state = null;
          try {
            state = editor.saveViewState();
          } catch (e) {
            console.error("error while saving the state");
          }
          editor.getModel().setValue(code2);
          if (state)
            editor.restoreViewState(state);
        },
        getValue: () => editor.getModel().getValue(),
        onChange: (cb) => editor == null ? void 0 : editor.onDidChangeModelContent(cb).dispose,
        myId: "editor"
      }));
    };
    const setAce = async () => {
      const { startAce } = await import("../startAce-74FVS7LU.mjs");
      const editor = await startAce(mST().code);
      changeContent((x) => ({
        ...x,
        onChange: (cb) => {
          editor.session.on("change", cb);
          return () => editor.session.off("change", cb);
        },
        getValue: () => editor.session.getValue(),
        setValue: (code2) => editor.session.setValue(code2),
        myId: "editor"
      }));
    };
    const loadEditors = async () => {
      engine === "monaco" ? await setMonaco() : await setAce();
      const { prettierJs: prettierJs2 } = await import("../prettierEsm-FMWLMPED.mjs");
      changeContent((x) => ({ ...x, prettierJs: prettierJs2 }));
      await wait(1e3);
      runnerDebounced({ code: code + " ", counter });
    };
    loadEditors();
  }, [ref]);
  useEffect30(() => {
    const lastCode = mod.code;
    const handler = setInterval(() => {
      if (getValue3() !== lastCode) {
        changeContent((x) => ({ ...x, myCode: code, i: i2 + 1 }));
        runnerDebounced({ code, counter });
      }
    }, 500);
    return () => clearInterval(handler);
  }, [changeContent, i2]);
  useEffect30(() => {
    if (i2 > counter) {
      changeContent((x) => ({ ...x, myCode: code, counter: i2 }));
      return;
    }
    const cb = async () => {
      const code2 = getValue3();
      const newCode = prettierJs(code2);
      if (newCode === mod.code)
        return;
      if (newCode === mST().code)
        return;
      try {
        changeContent((x) => ({ ...x, counter: counter + 1, myCode: newCode }));
        await runnerDebounced({ code: newCode, counter: counter + 1 });
      } catch (err) {
        console.error({ err });
        console.error("restore editor");
      }
    };
    return onChange(() => cb());
  }, [setValue, getValue3, onChange, counter]);
  onSessionUpdate(() => {
    console.log("sessUP");
    const sess = mST();
    setTimeout(() => {
      if (sess.i <= counter) {
        return;
      }
      if (mST().i > sess.i)
        return;
      setValue(sess.code);
      if (mod.CH() !== changeContent) {
        const ch = mod.CH();
        ch((x) => ({
          ...x,
          myCode: sess.code,
          counter: sess.i
        }));
      }
      changeContent((x) => ({
        ...x,
        myCode: sess.code,
        counter: sess.i
      }));
    }, 300);
  }, "editor");
  return engine === "monaco" ? jsx("div", {
    "data-test-id": myId,
    css: css`
max-width: 640px;
height: ${60 + lines / 40 * 100}% ;
`,
    ref
  }) : jsx("div", {
    "data-test-id": myId,
    css: css`
  margin: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,
    id: "editor",
    ref
  });
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
`,
  children: children2
});
var AppToRender = ({ codeSpace: codeSpace2, children: children2 }) => {
  const [hash4, setHash] = useState27(() => hashCode3());
  const [isStandalone, setIsStandalone] = useState27(true);
  useEffect31(() => {
    onSessionUpdate(async () => {
      const newHash = hashCode3();
      if (hash4 !== newHash) {
        try {
          await appFactory(mST().transpiled);
          setHash(newHash);
        } catch (e) {
          console.error({ e });
        }
      }
    }, "myApp");
  }, [hash4, setHash]);
  useEffect31(() => {
    setTimeout(() => {
      const isStandalone2 = location.pathname.endsWith("public") || location.pathname.endsWith("hydrated");
      setIsStandalone(isStandalone2);
    }, 800);
  }, []);
  const portalNode = useMemo8(() => createHtmlPortalNode({
    attributes: { id: `root-${codeSpace2}`, style: "height: 100%" }
  }), []);
  return jsxs(Fragment11, {
    children: [
      jsx(InPortal, {
        node: portalNode,
        children: jsx(AutoUpdateApp, {
          hash: hash4,
          starter: children2
        })
      }),
      isStandalone ? jsx(OutPortal, {
        node: portalNode
      }) : jsxs(RainbowContainer, {
        children: [
          jsx(DraggableWindow, {
            hashCode: 0,
            room: codeSpace2,
            children: jsx(OutPortal, {
              node: portalNode
            })
          }),
          jsx(Editor, {
            code: mST().code,
            i: mST().i,
            codeSpace: codeSpace2
          })
        ]
      })
    ]
  });
};
var renderPreviewWindow = (codeSpace2, App2) => {
  return hydrateRoot(
    document.getElementById("root"),
    jsx(AppToRender, {
      codeSpace: codeSpace2,
      children: App2
    })
  );
};

// js/ws.ts
var import_lodash2 = __toESM(require_lodash2(), 1);

// js/uidV4.mjs
init_define_process();
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    }
  }
  return getRandomValues(rnds8);
}
var __default = /^(?:[\da-f]{8}-[\da-f]{4}-[1-5][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}|0{8}-(?:0{4}-){3}0{12})$/i;
function validate(uuid) {
  return typeof uuid === "string" && __default.test(uuid);
}
var byteToHex = [];
for (let i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).slice(1));
}
function stringify(array) {
  const offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  const uuid = (byteToHex[array[offset2 + 0]] + byteToHex[array[offset2 + 1]] + byteToHex[array[offset2 + 2]] + byteToHex[array[offset2 + 3]] + "-" + byteToHex[array[offset2 + 4]] + byteToHex[array[offset2 + 5]] + "-" + byteToHex[array[offset2 + 6]] + byteToHex[array[offset2 + 7]] + "-" + byteToHex[array[offset2 + 8]] + byteToHex[array[offset2 + 9]] + "-" + byteToHex[array[offset2 + 10]] + byteToHex[array[offset2 + 11]] + byteToHex[array[offset2 + 12]] + byteToHex[array[offset2 + 13]] + byteToHex[array[offset2 + 14]] + byteToHex[array[offset2 + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw new TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset2) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset2 = offset2 || 0;
    for (let i1 = 0; i1 < 16; ++i1) {
      buf[offset2 + i1] = rnds[i1];
    }
    return buf;
  }
  return stringify(rnds);
}

// js/ws.ts
var webRtcArray = [];
var user = (self && self.crypto && self.crypto.randomUUID && self.crypto.randomUUID() || v4()).slice(
  0,
  8
);
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
var run = async (startState) => {
  codeSpace = startState.codeSpace;
  address = startState.address;
  const { assets } = startState;
  startSession(codeSpace, {
    name: user,
    state: startState.mST
  }, location.origin);
  renderPreviewWindow(startState.codeSpace, startState.App);
  await initShims(assets);
  join2();
  bc = new BroadcastChannel("spike.land");
  bc.onmessage = async (event) => {
    if (event.data.ignoreUser && event.data.ignoreUser === user)
      return;
    console.log({ event });
    if (event.data.codeSpace === codeSpace && event.data.address && !address) {
      ws == null ? void 0 : ws.send(JSON.stringify({ codeSpace, address: event.data.address }));
    }
    if (event.data.ignoreUser) {
      !ignoreUsers.includes(event.data.ignoreUser) && ignoreUsers.push(event.data.ignoreUser);
    }
    if (event.data.codeSpace === codeSpace && event.data.sess.code !== mST().code) {
      const messageData = await makePatch(event.data.sess);
      await applyPatch2(messageData);
    }
  };
};
(async () => {
  if (navigator && (navigator == null ? void 0 : navigator.serviceWorker)) {
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
    const newWs = await join2();
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
  await applyPatch2(messageData);
  console.log("done");
  if (sess.i !== mST().i)
    return;
  bc.postMessage({ ignoreUser: user, sess, codeSpace, address, messageData });
  try {
    try {
      if (Object.keys(rtcConns).length > 0) {
        const message = webRTCLastSeenHashCode ? await makePatchFrom(
          webRTCLastSeenHashCode,
          sess
        ) : await makePatch(sess);
        if (message && message.patch) {
          console.log("sendRTC");
          sendChannel.send(message);
        }
      }
    } catch (e) {
      console.error("Error sending RTC...", { e });
    }
  } catch (e) {
    console.log("Error 1");
  }
  try {
    if (ws) {
      console.log({ wsLastHashCode });
      const message = await makePatchFrom(
        wsLastHashCode,
        sess
      );
      if (!message)
        return;
      if (message.newHash !== hashCode3()) {
        console.error("NEW hash is not even hashCode", hashCode3());
        return;
      }
      const messageString = JSON.stringify({ ...message, name: user });
      sendWS(messageString);
    } else {
      rejoined = false;
      await rejoin();
    }
  } catch (e) {
    console.error("error 2", { e });
  }
}
async function join2() {
  if (ws !== null)
    return ws;
  rejoined = true;
  console.log("WS connect!");
  if (location.host.includes("localhost"))
    return;
  const wsConnection = new WebSocket(
    `wss://${location.host}/live/` + codeSpace + "/websocket"
  );
  rejoined = false;
  wsConnection.addEventListener("open", () => {
    console.log("NEW WS CONNECTION");
    ws = wsConnection;
    const mess = (data) => {
      try {
        ws && (ws == null ? void 0 : ws.send) && (ws == null ? void 0 : ws.send(data));
      } catch (e) {
        ws = null;
        rejoined = false;
        rejoin();
      }
    };
    sendWS = (0, import_lodash2.default)(mess, 1e3, {
      leading: true,
      trailing: true
    });
    ws.addEventListener(
      "message",
      (message) => processWsMessage(message, "ws")
    );
    if (intervalHandler) {
      clearInterval(intervalHandler);
    }
    intervalHandler = setInterval(() => {
      const now = Date.now();
      const diff2 = now - lastSeenNow;
      if (diff2 > 4e4) {
        try {
          if (wsConnection.readyState === wsConnection.OPEN) {
            return wsConnection == null ? void 0 : wsConnection.send(
              JSON.stringify({
                name: user,
                timestamp: lastSeenTimestamp + diff2
              })
            );
          }
          rejoined = false;
          rejoin();
        } catch (e) {
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
  if (source === "ws" && data.hashCode) {
    wsLastHashCode = data.hashCode;
  }
  if (source === "ws" && data.hashCode) {
    wsLastHashCode = data.hashCode;
  }
  if (source === "rtc" && data.hashCode || data.newHash) {
    webRTCLastSeenHashCode = data.hashCode || data.newHash;
  }
  if (ignoreUsers.includes(data.name))
    return;
  if (data.newHash === hashCode3())
    return;
  if (data.oldHash && data.newHash) {
    if (h[data.oldHash] && h[data.oldHash] === data.newHash)
      return;
    h[data.oldHash] = data.newHash;
  }
  if (data.newHash === hashCode3())
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
    if (data.newHash === hashCode3()) {
      return;
    }
    await applyPatch2(data);
    if (data.newHash === hashCode3()) {
      if (sendChannel) {
        sendChannel.send({ hashCode: data.newHash });
      }
      return;
    } else {
      console.log("error -sending on sendChannel");
    }
    return;
  }
  if (data.patch && data.name === user) {
    wsLastHashCode = data.newHash;
    return;
  }
  if (data.name === user) {
    return;
  }
  if (wsLastHashCode !== hashCode3()) {
    const resp = await fetch(`https://spike.land/live/${codeSpace}/mST`);
    const state = await resp.json();
    const codePatch = await makePatch(state.mST);
    if (codePatch.newHash === wsLastHashCode)
      await applyPatch2(codePatch);
  }
  function createPeerConnection(target) {
    log(`Setting up a connection with ${target}`);
    if (rtcConns[target]) {
      log(`Aborting, since we have connection with this ${target}`);
      return;
    }
    rtcConns[target] = new RTCPeerConnection(
      rcpOptions
    );
    rtcConns[target].onicecandidate = (event2) => {
      if (event2.candidate) {
        log("*** Outgoing ICE candidate: " + event2.candidate);
        ws == null ? void 0 : ws.send(JSON.stringify({
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
      log(
        "*** rtcConns[target].signalingState  changed to: " + rtcConns[target].signalingState
      );
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
      rtc2.addEventListener(
        "message",
        (message) => processWsMessage(message, "rtc")
      );
      const rtcWithTarget = Object.assign(rtc2, { target });
      webRtcArray.push(rtcWithTarget);
    };
    const dataChannelOptions = {
      ordered: true,
      reliable: true,
      maxPacketLifeTime: 3e3
    };
    const rtc = Object.assign(
      rtcConns[target].createDataChannel(
        target,
        dataChannelOptions
      ),
      { target }
    );
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
        ws == null ? void 0 : ws.send(JSON.stringify({
          target,
          name: user,
          type: "offer",
          offer: rtcConns[target].localDescription
        }));
      } catch (e) {
        log(
          "*** The following error occurred while handling the negotiationneeded event:"
        );
      }
    }
    function handleICEConnectionStateChangeEvent() {
      log(
        "*** ICE connection state changed to " + rtcConns[target].iceConnectionState
      );
      switch (rtcConns[target].iceConnectionState) {
        case "closed":
        case "failed":
        case "disconnected":
          break;
      }
    }
    function handleICEGatheringStateChangeEvent() {
      log(
        "*** rtcConns[target].iceGatheringState changed to: " + rtcConns[target].iceGatheringState
      );
    }
  }
  async function handleChatAnswerMessage(answer, target) {
    log("*** Call recipient has accepted our call");
    await rtcConns[target].setRemoteDescription(
      new RTCSessionDescription(
        answer
      )
    ).catch(console.error);
  }
  async function handleChatOffer(offer, target) {
    if (!rtcConns[target])
      createPeerConnection(target);
    await rtcConns[target].setRemoteDescription(
      new RTCSessionDescription(offer)
    );
    log("---> Creating and sending answer to caller");
    const answer = await rtcConns[target].createAnswer();
    await rtcConns[target].setLocalDescription(
      answer
    );
    ws == null ? void 0 : ws.send(JSON.stringify({
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
  log(
    "*** Adding received ICE candidate: " + JSON.stringify(init)
  );
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
          const channel = new MessageChannel();
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
  } catch (e) {
    console.log("ipfs load error");
  }
}
export {
  join2 as join,
  run,
  saveCode
};
