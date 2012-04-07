/*
 * grunt-commonjs-example
 * https://github.com/cowboy/grunt-commonjs-example
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 */

(function(exports) {

  exports.awesome = function() {
    return 'awesome';
  };

}(typeof exports === 'object' && exports || this));
