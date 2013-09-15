// Generated by CoffeeScript 1.6.3
var clc, match, type, util, write;

clc = require('cli-color');

util = require('util');

match = require('coffee-pattern').match;

type = require('./tool').type;

write = function(item) {
  var the_type;
  the_type = type(item);
  return match(the_type, {
    number: function() {
      return clc.blue(item);
    }
  }, void 0, function() {
    return console.log('other');
  });
};

exports.print = function(x) {};