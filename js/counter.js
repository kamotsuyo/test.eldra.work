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
      this.count--;
      return this.count;
    }
  }
  var c10 = new MyCounter(10); //10
  c10.increment();//+1
  c10.increment();//+1
  console.log(c10.count);//12
  
  var c1 = new MyCounter(1); //1
  
  c1.decrement(); //-1
  //c10を操作
  c10.decrement(); //-1
  
  console.log(c1.count); //0
  console.log(c10.count);//11
  
}());
