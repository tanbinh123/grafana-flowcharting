'use strict';

System.register([], function (_export, _context) {
  "use strict";

  /**
   * Copyright (c) 2006-2015, JGraph Ltd
   * Copyright (c) 2006-2015, Gaudenz Alder
   */
  /**
   * Class: mxImage
   *
   * Encapsulates the URL, width and height of an image.
   * 
   * Constructor: mxImage
   * 
   * Constructs a new image.
   */
  function mxImage(src, width, height) {
    this.src = src;
    this.width = width;
    this.height = height;
  }return {
    setters: [],
    execute: function () {
      ;

      /**
       * Variable: src
       *
       * String that specifies the URL of the image.
       */
      mxImage.prototype.src = null;

      /**
       * Variable: width
       *
       * Integer that specifies the width of the image.
       */
      mxImage.prototype.width = null;

      /**
       * Variable: height
       *
       * Integer that specifies the height of the image.
       */
      mxImage.prototype.height = null;

      __mxOutput.mxImage = typeof mxImage !== 'undefined' ? mxImage : undefined;
    }
  };
});
//# sourceMappingURL=mxImage.js.map