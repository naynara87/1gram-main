/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../demo1/src/js/pages/aos/aos.js":
/*!****************************************!*\
  !*** ../demo1/src/js/pages/aos/aos.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './../sass/aos.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash.throttle'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash.debounce'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _libs_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/observer */ "../demo1/src/js/pages/aos/libs/observer.js");
/* harmony import */ var _helpers_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/detector */ "../demo1/src/js/pages/aos/helpers/detector.js");
/* harmony import */ var _helpers_handleScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/handleScroll */ "../demo1/src/js/pages/aos/helpers/handleScroll.js");
/* harmony import */ var _helpers_prepare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/prepare */ "../demo1/src/js/pages/aos/helpers/prepare.js");
/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/elements */ "../demo1/src/js/pages/aos/helpers/elements.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/**
 * *******************************************************
 * AOS (Animate on scroll) - wowjs alternative
 * made to animate elements on scroll in both directions
 * *******************************************************
 */



// Modules & helpers










/**
 * Private variables
 */
let $aosElements = [];
let initialized = false;

/**
 * Default options
 */
let options = {
  offset: 120,
  delay: 0,
  easing: 'ease',
  duration: 400,
  disable: false,
  once: false,
  startEvent: 'DOMContentLoaded',
  throttleDelay: 99,
  debounceDelay: 50,
  disableMutationObserver: false,
};

/**
 * Refresh AOS
 */
const refresh = function refresh(initialize = false) {
  // Allow refresh only when it was first initialized on startEvent
  if (initialize) initialized = true;

  if (initialized) {
    // Extend elements objects in $aosElements with their positions
    $aosElements = (0,_helpers_prepare__WEBPACK_IMPORTED_MODULE_4__.default)($aosElements, options);
    // Perform scroll event, to refresh view and show/hide elements
    (0,_helpers_handleScroll__WEBPACK_IMPORTED_MODULE_3__.default)($aosElements, options.once);

    return $aosElements;
  }
};

/**
 * Hard refresh
 * create array with new elements and trigger refresh
 */
const refreshHard = function refreshHard() {
  $aosElements = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_5__.default)();
  refresh();
};

/**
 * Disable AOS
 * Remove all attributes to reset applied styles
 */
const disable = function() {
  $aosElements.forEach(function(el, i) {
    el.node.removeAttribute('data-aos');
    el.node.removeAttribute('data-aos-easing');
    el.node.removeAttribute('data-aos-duration');
    el.node.removeAttribute('data-aos-delay');
  });
};


/**
 * Check if AOS should be disabled based on provided setting
 */
const isDisabled = function(optionDisable) {
  return optionDisable === true ||
  (optionDisable === 'mobile' && _helpers_detector__WEBPACK_IMPORTED_MODULE_2__.default.mobile()) ||
  (optionDisable === 'phone' && _helpers_detector__WEBPACK_IMPORTED_MODULE_2__.default.phone()) ||
  (optionDisable === 'tablet' && _helpers_detector__WEBPACK_IMPORTED_MODULE_2__.default.tablet()) ||
  (typeof optionDisable === 'function' && optionDisable() === true);
};

/**
 * Initializing AOS
 * - Create options merging defaults with user defined options
 * - Set attributes on <body> as global setting - css relies on it
 * - Attach preparing elements to options.startEvent,
 *   window resize and orientation change
 * - Attach function that handle scroll and everything connected to it
 *   to window scroll event and fire once document is ready to set initial state
 */
const init = function init(settings) {
  options = Object.assign(options, settings);

  // Create initial array with elements -> to be fullfilled later with prepare()
  $aosElements = (0,_helpers_elements__WEBPACK_IMPORTED_MODULE_5__.default)();

  // Detect not supported browsers (<=IE9)
  // http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
  const browserNotSupported = document.all && !window.atob;

  /**
   * Don't init plugin if option `disable` is set
   * or when browser is not supported
   */
  if (isDisabled(options.disable) || browserNotSupported) {
    return disable();
  }

  /**
   * Set global settings on body, based on options
   * so CSS can use it
   */
  document.querySelector('body').setAttribute('data-aos-easing', options.easing);
  document.querySelector('body').setAttribute('data-aos-duration', options.duration);
  document.querySelector('body').setAttribute('data-aos-delay', options.delay);

  /**
   * Handle initializing
   */
  if (options.startEvent === 'DOMContentLoaded' &&
    ['complete', 'interactive'].indexOf(document.readyState) > -1) {
    // Initialize AOS if default startEvent was already fired
    refresh(true);
  } else if (options.startEvent === 'load') {
    // If start event is 'Load' - attach listener to window
    window.addEventListener(options.startEvent, function() {
      refresh(true);
    });
  } else {
    // Listen to options.startEvent and initialize AOS
    document.addEventListener(options.startEvent, function() {
      refresh(true);
    });
  }

  /**
   * Refresh plugin on window resize or orientation change
   */
  window.addEventListener('resize', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash.debounce'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(refresh, options.debounceDelay, true));
  window.addEventListener('orientationchange', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash.debounce'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(refresh, options.debounceDelay, true));

  /**
   * Handle scroll event to animate elements on scroll
   */
  window.addEventListener('scroll', Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash.throttle'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(() => {
    (0,_helpers_handleScroll__WEBPACK_IMPORTED_MODULE_3__.default)($aosElements, options.once);
  }, options.throttleDelay));

  /**
   * Observe [aos] elements
   * If something is loaded by AJAX
   * it'll refresh plugin automatically
   */
  if (!options.disableMutationObserver) {
    (0,_libs_observer__WEBPACK_IMPORTED_MODULE_1__.default)('[data-aos]', refreshHard);
  }

  return $aosElements;
};

/**
 * Export Public API
 */

module.exports = {
  init,
  refresh,
  refreshHard
};


/***/ }),

/***/ "../demo1/src/js/pages/aos/helpers/calculateOffset.js":
/*!************************************************************!*\
  !*** ../demo1/src/js/pages/aos/helpers/calculateOffset.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_offset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../libs/offset */ "../demo1/src/js/pages/aos/libs/offset.js");
/**
 * Calculate offset
 * basing on element's settings like:
 * - anchor
 * - offset
 *
 * @param  {Node} el [Dom element]
 * @return {Integer} [Final offset that will be used to trigger animation in good position]
 */



const calculateOffset = function (el, optionalOffset) {
  let elementOffsetTop = 0;
  let additionalOffset = 0;
  const windowHeight = window.innerHeight;
  const attrs = {
    offset: el.getAttribute('data-aos-offset'),
    anchor: el.getAttribute('data-aos-anchor'),
    anchorPlacement: el.getAttribute('data-aos-anchor-placement')
  };

  if (attrs.offset && !isNaN(attrs.offset)) {
    additionalOffset = parseInt(attrs.offset);
  }

  if (attrs.anchor && document.querySelectorAll(attrs.anchor)) {
    el = document.querySelectorAll(attrs.anchor)[0];
  }

  elementOffsetTop = (0,_libs_offset__WEBPACK_IMPORTED_MODULE_0__.default)(el).top;

  switch (attrs.anchorPlacement) {
    case 'top-bottom':
      // Default offset
      break;
    case 'center-bottom':
      elementOffsetTop += el.offsetHeight / 2;
      break;
    case 'bottom-bottom':
      elementOffsetTop += el.offsetHeight;
      break;
    case 'top-center':
      elementOffsetTop += windowHeight / 2;
      break;
    case 'bottom-center':
      elementOffsetTop += windowHeight / 2 + el.offsetHeight;
      break;
    case 'center-center':
      elementOffsetTop += windowHeight / 2 + el.offsetHeight / 2;
      break;
    case 'top-top':
      elementOffsetTop += windowHeight;
      break;
    case 'bottom-top':
      elementOffsetTop += el.offsetHeight + windowHeight;
      break;
    case 'center-top':
      elementOffsetTop += el.offsetHeight / 2 + windowHeight;
      break;
  }

  if (!attrs.anchorPlacement && !attrs.offset && !isNaN(optionalOffset)) {
    additionalOffset = optionalOffset;
  }

  return elementOffsetTop + additionalOffset;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateOffset);


/***/ }),

/***/ "../demo1/src/js/pages/aos/helpers/detector.js":
/*!*****************************************************!*\
  !*** ../demo1/src/js/pages/aos/helpers/detector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Device detector
 */

const fullNameRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
const prefixRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
const fullNameMobileRe = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
const prefixMobileRe = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;


function ua() {
  return navigator.userAgent || navigator.vendor || window.opera || '';
}


class Detector {

  phone() {
    const a = ua();
    return !!(fullNameRe.test(a) || prefixRe.test(a.substr(0, 4)));
  }

  mobile() {
    const a = ua();
    return !!(fullNameMobileRe.test(a) || prefixMobileRe.test(a.substr(0, 4)));
  }

  tablet() {
    return this.mobile() && !this.phone();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Detector);


/***/ }),

/***/ "../demo1/src/js/pages/aos/helpers/elements.js":
/*!*****************************************************!*\
  !*** ../demo1/src/js/pages/aos/helpers/elements.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Generate initial array with elements as objects
 * This array will be extended later with elements attributes values
 * like 'position'
 */
const createArrayWithElements = function (elements) {
  elements = elements || document.querySelectorAll('[data-aos]');
  return Array.prototype.map.call(elements, node => ({ node }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createArrayWithElements);


/***/ }),

/***/ "../demo1/src/js/pages/aos/helpers/handleScroll.js":
/*!*********************************************************!*\
  !*** ../demo1/src/js/pages/aos/helpers/handleScroll.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Set or remove aos-animate class
 * @param {node} el         element
 * @param {int}  top        scrolled distance
 * @param {void} once
 */
const setState = function (el, top, once) {
  const attrOnce = el.node.getAttribute('data-aos-once');

  if (top > el.position) {
    el.node.classList.add('aos-animate');
  } else if (typeof attrOnce !== 'undefined') {
    if (attrOnce === 'false' || (!once && attrOnce !== 'true')) {
      el.node.classList.remove('aos-animate');
    }
  }
};


/**
 * Scroll logic - add or remove 'aos-animate' class on scroll
 *
 * @param  {array} $elements         array of elements nodes
 * @param  {bool} once               plugin option
 * @return {void}
 */
const handleScroll = function ($elements, once) {
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;
  /**
   * Check all registered elements positions
   * and animate them on scroll
   */
  $elements.forEach((el, i) => {
    setState(el, windowHeight + scrollTop, once);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleScroll);


/***/ }),

/***/ "../demo1/src/js/pages/aos/helpers/prepare.js":
/*!****************************************************!*\
  !*** ../demo1/src/js/pages/aos/helpers/prepare.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calculateOffset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateOffset */ "../demo1/src/js/pages/aos/helpers/calculateOffset.js");
/* Clearing variables */



const prepare = function ($elements, options) {
  $elements.forEach((el, i) => {
    el.node.classList.add('aos-init');
    el.position = (0,_calculateOffset__WEBPACK_IMPORTED_MODULE_0__.default)(el.node, options.offset);
  });
  return $elements;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prepare);


/***/ }),

/***/ "../demo1/src/js/pages/aos/libs/observer.js":
/*!**************************************************!*\
  !*** ../demo1/src/js/pages/aos/libs/observer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let callback = () => {};

function ready(selector, fn) {
  const doc = window.document;
  const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;

  const observer = new MutationObserver(check);
  callback = fn;

  observer.observe(doc.documentElement, {
    childList: true,
    subtree: true,
    removedNodes: true
  });
}

function check(mutations) {
  if (!mutations) return;

  mutations.forEach(mutation => {
    const addedNodes = Array.prototype.slice.call(mutation.addedNodes);
    const removedNodes = Array.prototype.slice.call(mutation.removedNodes);

    const anyAOSElementAdded = addedNodes
      .concat(removedNodes)
      .filter(el => el.hasAttribute && el.hasAttribute('data-aos'))
      .length;

    if (anyAOSElementAdded) {
      callback();
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ready);


/***/ }),

/***/ "../demo1/src/js/pages/aos/libs/offset.js":
/*!************************************************!*\
  !*** ../demo1/src/js/pages/aos/libs/offset.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Get offset of DOM element Helper
 * including these with translation
 *
 * @param  {Node} el [DOM element]
 * @return {Object} [top and left offset]
 */
const offset = function (el) {
  let _x = 0;
  let _y = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
    _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
    el = el.offsetParent;
  }

  return {
    top: _y,
    left: _x
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (offset);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../demo1/src/js/pages/aos/aos.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=aos.js.map