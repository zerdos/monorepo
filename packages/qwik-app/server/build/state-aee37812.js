"use strict";var e=require("./core-8fd37695.js");const t={all:()=>!0,active:e=>0==e.completed,completed:e=>1==e.completed};function i(e,t){t&&(e.filter=t.toLowerCase())}function o(e){return e.items.filter(t[e.filter])}exports.FilterStates=["all","active","completed"],exports.addItem=function(t,o){t.items.push(e.qObject({completed:!1,title:o})),i(t)},exports.clearCompleted=function(e){e.items=e.items.filter(t.active),i(e)},exports.getFilteredCount=function(e){return o(e).filter(t.active).length},exports.getFilteredItems=o,exports.removeItem=function(e,t){e.items=e.items.filter((e=>e!=t)),i(e)},exports.toggleItem=function(e,t){t.completed=!t.completed,i(e)},exports.updateFilter=i;
