//PUBBLICATO SU: http://www.es6fiddle.net/i8bg6kaq/
(function(global) {
  // simulate module with (IIFE) internal scoped Symbol
  var key = Symbol("key");

  global.MyClass = function(privateData, pubData) {
    this[key] = privateData;
    this.pubData = pubData;
  }
  
  global.MyClass.prototype = {
    doStuff: function() {
      console.log(`only here can access ${this[key]} ...`);
    }
  };
})(this);

var c = new MyClass("hello world",123);
console.log(c["key"] === undefined);
for (let k in c) { console.log(k); }
c.doStuff();