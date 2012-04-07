/*! grunt-commonjs-example - v0.1.0 - 2012-04-07
* https://github.com/cowboy/grunt-commonjs-example
* Copyright (c) 2012 "Cowboy" Ben Alman; Licensed MIT */

(function(exports) {

  exports.awesome = function() {
    return 'awesome';
  };

}(typeof exports === 'object' && exports || this));
