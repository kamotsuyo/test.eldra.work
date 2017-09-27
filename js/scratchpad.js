(function () {
  'use strict';
  var callback = function (obj) {
    console.log('callback:' + obj.name);
  };
  var myArray = [
    'zero',
    'one',
    'two'
  ];
  myArray.myMethod = function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
  };
  var Test = function (callback) {
    this.name = 'test';
    this.callback = callback;
    var self = this;
    window.setTimeout(function () { //this に必要な値を設定するラッパー関数を使用する
      self.callback(self);
      myArray.myMethod(1);
    }, 2000);
  }
  new Test(callback);
}());
/*
Exception: TypeError: obj is undefined
Callback@Scratchpad/4:4:5
@Scratchpad/4:15:12
@Scratchpad/4:1:2
*/

/*
Exception: ReferenceError: assignment to undeclared variable myArray
@Scratchpad/4:6:3
@Scratchpad/4:1:2
*/