/* This module was module number 569 in the old packed code. It was referenced in the old code using `require(<module name>)` by the following module names:
* ./trades
*/

"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
exports.default = function() {
  var state =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    action = arguments[1];
  switch (action.type) {
    case "CLEAR_TRADES":
      return null;
    case "UPDATE_TRADES":
      return action.value.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date) || b.amount - a.amount;
      });
    case "NEW_TRADES":
      var initialState = state || [];
      return action.value.concat(initialState).sort(function(a, b) {
        return new Date(b.date) - new Date(a.date) || b.amount - a.amount;
      });
    default:
      return state;
  }
};
