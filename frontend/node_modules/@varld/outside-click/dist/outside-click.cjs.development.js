'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Attach outside click listener
 * @param elements The inside elements
 * @param onOutsideClick Called on outside click
 */
var outsideClick = function outsideClick(elements, onOutsideClick, isEnabled) {
  if (typeof window == 'undefined') return function () {};
  var elementsArray = Array.isArray(elements) ? elements : [elements];

  var handler = function handler(evt) {
    if (typeof isEnabled == 'function' && !isEnabled()) return;
    var targetElement = evt.target;

    do {
      if (elementsArray.indexOf(targetElement) != -1) return;
      targetElement = targetElement.parentNode;
    } while (targetElement);

    onOutsideClick(evt);
  };

  document.addEventListener('click', handler);
  return function () {
    return document.removeEventListener('click', handler);
  };
};

exports.default = outsideClick;
//# sourceMappingURL=outside-click.cjs.development.js.map
