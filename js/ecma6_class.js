/*
クラスの記述と継承について　ECMA6 と　ECMA5
 */
(function () {
  'use strict';
  /*
  ECMA6のクラス記述方法
  */
  class Polygon{
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    get area(){
      return this.height * this.width;
    }
  }
  class Square extends Polygon{
    constructor(sideLength) {
      super(sideLength, sideLength);
      this.sideLength = sideLength;
    }
    set sideLength(newLength) {
      this.height = newLength;
      this.width = newLength;
    }
  }
  /*
  ECMA5 の記述方法
  */  
  var MPolygon = function (height, width) {
    this.height = height || 0;
    this.width = width || 0;
  }
  MPolygon.prototype = {
    getArea : function(){
      return this.height * this.width;
    }    
  }
  var MSquare = function (sideLength) {
    this.sideLength = sideLength || 0;
    //継承の記述部
    MPolygon.call(this);//プロパティの継承
    this.height = sideLength;
    this.width = sideLength;
  }
  
  MSquare.prototype = Object.create(MPolygon.prototype);//-----*1　メソッドの継承
//   MSquare.prototype.constructor = MSquare; //不要
  
  MSquare.prototype.setSideLength = function(newLength){//MSquare.prototypeにプロパティを追加する
    this.height = newLength;
    this.width = newLength;
    this.sideLength = newLength;
  }
  /*
  prototypeを以下のようにオフジェル記法{}で書くと*1の定義が上書きされ、動作しなくなる
  MSquare.prototype = {
   setSideLength : function(newLength){
     this.height = newLength;
     this.width = newLength; 
   }
  }
  */
  
  //----------------------実行してみる----------------------------
  //ECMA6
  var polygon = new Polygon(4,5);
  console.log(polygon.area);//20
  var square = new Square(3);
  console.log(square);
  console.log(square.area); //9 プロパティとして取得できる
  
  //ECMA5
  var mPolygon = new MPolygon(2, 3);
  console.log(mPolygon.height);//2
  console.log(mPolygon.getArea());//6
  
  var mSquare = new MSquare(8);
  console.log(mSquare.height);//8
  console.log(mSquare.width);//8
  console.log(mSquare.getArea());//64
  
  mSquare.setSideLength(10);
  console.log(mSquare.getArea());//100
  
  console.log(mPolygon);
  console.log(mSquare);
}())

/*
Exception: SyntaxError: missing : after property id
@Scratchpad/3:22
*/
/*
Exception: ReferenceError: |this| used uninitialized in Square class constructor
Square@Scratchpad/3:20:7
@Scratchpad/3:70:16
@Scratchpad/3:4:2
*/
/*
Exception: ReferenceError: |this| used uninitialized in Square class constructor
Square@Scratchpad/3:20:7
@Scratchpad/3:71:16
@Scratchpad/3:4:2
*/
/*
Exception: ReferenceError: |this| used uninitialized in Square class constructor
Square@Scratchpad/3:20:7
@Scratchpad/3:70:16
@Scratchpad/3:4:2
*/
/*
Exception: SyntaxError: property name constructor appears more than once in object literal
@Scratchpad/3:22
*/
/*
Exception: ReferenceError: |this| used uninitialized in Square class constructor
Square@Scratchpad/3:20:7
@Scratchpad/3:69:16
@Scratchpad/3:4:2
*/