// prototype __proto__ constructor
// es5中没有类,只有构造函数,可以把一个函数当成类

// 用es5 来模拟一个es6 的类 1）判断当前这个调用方式是不是通过new 来调用

function define(target,protoProperties){
    for (let i = 0; i < protoProperties.length; i++) {
        let property = protoProperties[i];
        Object.defineProperty(target, property.key, {
          configurable: true,
          enumerable: false, // 不可枚举的
          ...property
        });
      }
}
function _createClass(Constructor, protoProperties,staticProperties) {
  if (Array.isArray(protoProperties)) {
    define(Constructor.prototype,protoProperties)
  }
  if(Array.isArray(staticProperties)){ // 定义静态的方法
    define(Constructor,staticProperties)
  }
}

var Animal = (function() {
  function Animal() {
    if (!(this instanceof Animal)) {
      throw new Error("not new");
    }
    this.name = "熊猫";
  }
  _createClass(
    Animal,
    [
      // 公共方法， babel编译出来
      {
        key: "say",
        value: function() {
          console.log("say");
        }
      },
      {
        key: "eat",
        value: function() {
          console.log("eat");
        }
      }
    ],
    [ // 描述类上的属性 或者方法
      {
        key: "a",
        value: function() {
          return 123;
        }
      },
      {
        key: "b",
        value: 123
      }
    ]
  );

  return Animal;
})();
console.log(Animal.a(),Animal.b);

// function Animal(){ // 只能通过new 来调用
//     this.name = '熊猫';
// }
// Animal.prototype.say = function(){ // 所有的人是公用这个方法的

// }
// Animal.prototype.eat = function(){ // 所有的人是公用这个方法的

// }
// Animal.a = 1;
// Animal.b = 2; // 通过类来调用的叫静态属性 /方法
// //  let animal1 = new Animal(); // 构造函数中的this默认指向实例
// // let animal2 = new Animal();
//  console.log(Animal.a,Animal.b)
// 如果new这个类 返回的是一个 引用类型 function object 这个this就会指向当前的返回结果
