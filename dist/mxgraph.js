(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mxgraph"] = factory();
	else
		root["mxgraph"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mxgraph.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mxgraph/javascript/dist/build.js":
/*!*******************************************************!*\
  !*** ./node_modules/mxgraph/javascript/dist/build.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./src/mxgraph.js":
/*!************************!*\
  !*** ./src/mxgraph.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return link; });\n// window.mxImageBasePath = \"public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/src/images\";\n// window.mxBasePath = \"public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist\";\nvar mxgraph = __webpack_require__(/*! mxgraph */ \"./node_modules/mxgraph/javascript/dist/build.js\")({\n  mxImageBasePath: \"public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/src/images\",\n  mxBasePath: \"public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist\",\n  mxLoadStylesheets: false,\n  mxLanguage: 'en',\n  mxLoadResources: true\n});\n\nvar STENCIL_PATH = 'public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist/stencils';\nvar IMAGE_PATH = 'public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist/images';\nvar STYLE_PATH = 'public/plugins/agenty-flowcharting-panel/libs/mxgraph/javascript/dist/styles'; // Put to global vars to work\n\nwindow.mxGraph = mxgraph.mxGraph;\nwindow.mxShape = mxgraph.mxShape;\nwindow.mxConnectionConstraint = mxgraph.mxConnectionConstraint;\nwindow.mxPoint = mxgraph.mxPoint;\nwindow.mxPolyline = mxgraph.mxPolyline;\nwindow.mxEvent = mxgraph.mxEvent;\nwindow.mxRubberband = mxgraph.mxRubberband;\nwindow.mxCellState = mxgraph.mxCellState;\nwindow.mxClient = mxgraph.mxClient;\nwindow.mxUtils = mxgraph.mxUtils;\nwindow.mxConstants = mxgraph.mxConstants;\nwindow.mxPopupMenu = mxgraph.mxPopupMenu;\nwindow.mxDefaultPopupMenu = mxgraph.mxDefaultPopupMenu;\nwindow.mxEditor = mxgraph.mxEditor;\nwindow.mxGraphModel = mxgraph.mxGraphModel;\nwindow.mxGraphView = mxgraph.mxGraphView;\nwindow.mxToolbar = mxgraph.mxToolbar;\nwindow.mxDefaultToolbar = mxgraph.mxDefaultToolbar;\nwindow.mxGeometry = mxgraph.mxGeometry;\nwindow.mxKeyHandler = mxgraph.mxKeyHandler;\nwindow.mxDefaultKeyHandler = mxgraph.mxDefaultKeyHandler;\nwindow.mxVertexHandler = mxgraph.mxVertexHandler;\nwindow.mxStylesheet = mxgraph.mxStylesheet;\nwindow.mxCellRenderer = mxgraph.mxCellRenderer;\nwindow.mxCell = mxgraph.mxCell;\nwindow.mxCodec = mxgraph.mxCodec;\nwindow.mxDivResizer = mxgraph.mxDivResizer;\nwindow.mxOutline = mxgraph.mxOutline;\nwindow.mxUndoManager = mxgraph.mxUndoManager;\nwindow.mxEdgeStyle = mxgraph.mxEdgeStyle;\nwindow.mxCompactTreeLayout = mxgraph.mxCompactTreeLayout;\nwindow.mxLabel = mxgraph.mxLabel;\nwindow.mxRectangle = mxgraph.mxRectangle;\nwindow.mxCellOverlay = mxgraph.mxCellOverlay;\nwindow.mxImage = mxgraph.mxImage;\nwindow.mxPrintPreview = mxgraph.mxPrintPreview;\nfunction link(scope, elem, attrs, ctrl) {\n  var data;\n  var panel = ctrl.panel;\n  elem = elem.find('.flowchart-panel__chart');\n  var $tooltip = $('<div id=\"tooltip\">');\n  var themes;\n  init();\n  ctrl.events.on('render', function () {\n    if (panel.legendType === 'Right side') {\n      render(false);\n      setTimeout(function () {\n        render(true);\n      }, 50);\n    } else {\n      render(true);\n    }\n  });\n\n  function getLegendHeight(panelHeight) {\n    if (!ctrl.panel.legend.show || ctrl.panel.legendType === 'Right side' || ctrl.panel.legendType === 'On graph') {\n      return 20;\n    }\n\n    if (ctrl.panel.legendType == 'Under graph' && ctrl.panel.legend.percentage || ctrl.panel.legend.values) {\n      var breakPoint = parseInt(ctrl.panel.breakPoint) / 100;\n      var total = 23 + 20 * data.length;\n      return Math.min(total, Math.floor(panelHeight * breakPoint));\n    }\n  }\n\n  function formatter(label, slice) {\n    var slice_data = slice.data[0][slice.data[0].length - 1];\n    var decimal = 2;\n    var start = \"<div style='font-size:\" + ctrl.panel.fontSize + \";text-align:center;padding:2px;color:\" + slice.color + \";'>\" + label + \"<br/>\";\n\n    if (ctrl.panel.legend.percentageDecimals) {\n      decimal = ctrl.panel.legend.percentageDecimals;\n    }\n\n    if (ctrl.panel.legend.values && ctrl.panel.legend.percentage) {\n      return start + ctrl.formatValue(slice_data) + \"<br/>\" + slice.percent.toFixed(decimal) + \"%</div>\";\n    } else if (ctrl.panel.legend.values) {\n      return start + ctrl.formatValue(slice_data) + \"</div>\";\n    } else if (ctrl.panel.legend.percentage) {\n      return start + slice.percent.toFixed(decimal) + \"%</div>\";\n    } else {\n      return start + '</div>';\n    }\n  }\n\n  function noDataPoints() {\n    var html = '<div class=\"datapoints-warning\"><span class=\"small\">No data points</span></div>';\n    elem.html(html);\n  }\n\n  function addFlowChart() {\n    var width = elem.width();\n    var height = ctrl.height - getLegendHeight(ctrl.height);\n    var size = Math.min(width, height);\n    var plotCanvas = $('<div></div>');\n    var plotCss = {\n      margin: 'auto',\n      position: 'relative',\n      paddingBottom: 20 + 'px',\n      height: size + 'px'\n    };\n    plotCanvas.css(plotCss);\n    var backgroundColor = $('body').css('background-color');\n    var options = {\n      legend: {\n        show: false\n      },\n      series: {\n        chart: {\n          show: true,\n          stroke: {\n            color: backgroundColor,\n            width: parseFloat(ctrl.panel.strokeWidth).toFixed(1)\n          },\n          label: {\n            show: ctrl.panel.legend.show && ctrl.panel.legendType === 'On graph',\n            formatter: formatter\n          },\n          highlight: {\n            opacity: 0.0\n          },\n          combine: {\n            threshold: ctrl.panel.combine.threshold,\n            label: ctrl.panel.combine.label\n          }\n        }\n      },\n      grid: {\n        hoverable: true,\n        clickable: false\n      }\n    };\n    data = ctrl.data;\n\n    for (var i = 0; i < data.length; i++) {\n      var series = data[i]; // if hidden remove points\n\n      if (ctrl.hiddenSeries[series.label]) {\n        series.data = {};\n      }\n    }\n\n    if (panel.legend.sort) {\n      if (ctrl.panel.valueName !== panel.legend.sort) {\n        panel.legend.sort = ctrl.panel.valueName;\n      }\n\n      if (panel.legend.sortDesc === true) {\n        data.sort(function (a, b) {\n          return b.legendData - a.legendData;\n        });\n      } else {\n        data.sort(function (a, b) {\n          return a.legendData - b.legendData;\n        });\n      }\n    }\n\n    elem.html(plotCanvas);\n    draw(plotCanvas[0]);\n    plotCanvas.bind(\"plothover\", function (event, pos, item) {\n      if (!item) {\n        $tooltip.detach();\n        return;\n      }\n\n      var body;\n      var percent = parseFloat(item.series.percent).toFixed(2);\n      var formatted = ctrl.formatValue(item.series.data[0][1]);\n      body = '<div class=\"flowchart-tooltip-small\"><div class=\"flowchart-tooltip-time\">';\n      body += '<div class=\"flowchart-tooltip-value\">' + item.series.label + ': ' + formatted;\n      body += \" (\" + percent + \"%)\" + '</div>';\n      body += \"</div></div>\";\n      $tooltip.html(body).place_tt(pos.pageX + 20, pos.pageY);\n    });\n  }\n\n  function render(incrementRenderCounter) {\n    if (!ctrl.data) {\n      return;\n    }\n\n    data = ctrl.data;\n\n    if (0 == ctrl.data.length) {\n      noDataPoints();\n    } else {\n      addFlowChart();\n    }\n\n    if (incrementRenderCounter) {\n      ctrl.renderingCompleted();\n    }\n  }\n\n  function draw(container) {\n    mxEvent.disableContextMenu(container);\n    var graph = new mxGraph(container);\n    loadStyle(graph);\n\n    if (ctrl.panel.flowchart.checks.lock) {\n      graph.resizeContainer = true;\n    }\n\n    graph.getModel().beginUpdate();\n\n    try {\n      var xmlDoc = mxUtils.parseXml(ctrl.panel.flowchart.source.xml.value);\n      var codec = new mxCodec(xmlDoc);\n      codec.decode(xmlDoc.documentElement, graph.getModel());\n    } finally {\n      // Updates the display \n      graph.getModel().endUpdate();\n    }\n  }\n\n  function init() {\n    // Overridden to define per-shape connection points\n    mxGraph.prototype.getAllConnectionConstraints = function (terminal, source) {\n      if (terminal != null && terminal.shape != null) {\n        if (terminal.shape.stencil != null) {\n          if (terminal.shape.stencil != null) {\n            return terminal.shape.stencil.constraints;\n          }\n        } else if (terminal.shape.constraints != null) {\n          return terminal.shape.constraints;\n        }\n      }\n\n      return null;\n    };\n    /**\n     * Sets global constants.\n     */\n    // Changes default colors\n\n\n    mxConstants.SHADOW_OPACITY = 0.25;\n    mxConstants.SHADOWCOLOR = '#000000';\n    mxConstants.VML_SHADOWCOLOR = '#d0d0d0';\n    mxGraph.prototype.pageBreakColor = '#c0c0c0';\n    mxGraph.prototype.pageScale = 1;\n  }\n\n  function loadStyle(graph) {\n    var node = mxUtils.load(STYLE_PATH + '/default.xml').getDocumentElement();\n\n    if (node != null) {\n      var dec = new mxCodec(node.ownerDocument);\n      dec.decode(node, graph.getStylesheet());\n    }\n  }\n}\n\n//# sourceURL=webpack://mxgraph/./src/mxgraph.js?");

/***/ })

/******/ });
});