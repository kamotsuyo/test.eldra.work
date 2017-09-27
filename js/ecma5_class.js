(function () {
  'use strict';
  var OyaClass = function (fathername,age) {
    this.name = fathername || 'jiisan';
    this.age = age || 100;
  }
  OyaClass.prototype = {
    getName : function(){
      return this.name;
    },
    getAge : function(){
      return this.age;
    }
  }
  
  //子クラス
  var KoClass = function(hobby){
    //プロパティ継承
    OyaClass.call(this);

    //親クラスのプロパティセット
    this.name = 'oya';
    //子クラスのプロパティセット
    this.hobby = hobby;
   
  }
  //親クラスのメソッド継承
  KoClass.prototype = Object.create(OyaClass.prototype);
  KoClass.prototype.constructor = KoClass;
  
  //子クラスのメソッド定義
  KoClass.prototype.getHobby = function(){
    return this.hobby;
  }
  KoClass.prototype.setAge = function(age){
    this.age = age;
  }
  
  //==================実行=======================
  //子クラスを引数bikeでインスタンス化
  var koClass = new KoClass('bike');
  console.log(koClass.getHobby());//bike
  //プロパティ継承した親クラスのageプロパティは親クラス初期値の100になる。
  console.log(koClass.age);//100
  //子クラスインスタンス化時点でセットしたため親クラスのnameプロパティはoya
  //元の親クラスの初期値はjiisanであっった。
  console.log(koClass.name);//oya
  
  koClass.setAge(20);
  console.log(koClass.age);//20
  
}())

/*
Exception: ReferenceError: Oyaclass is not defined
@Scratchpad/3:27:3
@Scratchpad/3:1:2
*/
/*
Exception: ReferenceError: Koclass is not defined
@Scratchpad/3:28:3
@Scratchpad/3:1:2
*/
/*
Exception: ReferenceError: Oyaclass is not defined
KoClass@Scratchpad/3:20:5
@Scratchpad/3:40:17
@Scratchpad/3:1:2
*/