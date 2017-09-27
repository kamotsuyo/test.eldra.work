/*
クロージャを使用せずにカウンターを作る



*/
(function () {
  'use strict';
  function MyCounter(count) {
    this.count = count || 0;
  }
  MyCounter.prototype = {
    increment: function () {
      this.count++
      return this.count;
    },
    decrement: function () {
      this.counter--;
      return this.count;
    }
  }
  var myCounter = new MyCounter();

  console.log(myCounter.increment());
  console.log(myCounter.increment());
  console.log(myCounter.decrement());

}());

/*
Exception: ReferenceError: thie is not defined
decrement@Scratchpad/2:18:7
@Scratchpad/2:26:15
@Scratchpad/2:7:2
*/