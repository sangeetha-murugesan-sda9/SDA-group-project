'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var arraysEqual = function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

var useDelayed = function useDelayed(value, delay, ignore) {
  var _useState = react.useState(function () {
    return value;
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = react.useState(function () {
    return ignore || [];
  }),
      cachedIgnore = _useState2[0],
      setCachedIgnore = _useState2[1];

  react.useEffect(function () {
    if (!Array.isArray(ignore)) {
      if (Array.isArray(cachedIgnore)) setCachedIgnore([]);
      return;
    }

    if (!arraysEqual(ignore, cachedIgnore)) setCachedIgnore(ignore);
  }, [ignore]);
  react.useEffect(function () {
    if (Array.isArray(cachedIgnore) && cachedIgnore.indexOf(value) != -1) {
      setState(value);
      return;
    }

    var to = setTimeout(function () {
      setState(value);
    }, delay);
    return function () {
      return clearTimeout(to);
    };
  }, [value, delay, cachedIgnore]);
  return state;
};

exports.default = useDelayed;
//# sourceMappingURL=use-delayed.cjs.development.js.map
