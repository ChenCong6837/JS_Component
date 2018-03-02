//1.反转字符串
function reverseStr(str){
     return str.split('').reverse().join('');
}

//======================================================================================
//2.回文串判断，去除其他符号，是回文串就返回true，否则返回false
function palindrome(str) {
  var strToArr = str.toLowerCase().split('').filter(function(val){
     return (val >= 'a' && val <= 'z')||(val >= '0' && val <= '9');
   });
   var temp = strToArr.join('');
   return temp === strToArr.reverse().join('');
 }

//======================================================================================
//3.寻找一段文字中最长的单词
 function findLongestWord(str) {
     var strToArr = str.split(' ');
     var longestWord = strToArr[0];
     for(var i = 0, len = strToArr.length; i < len; i++){
       if(longestWord.length < strToArr[i].length){
         longestWord = strToArr[i];
       }
     }
     return longestWord;
   }

//======================================================================================
//4.将一个句子中的每一个单词的首字母大写
function titleCase(str) {
     var strToArr = str.split(' ');
     var res = strToArr.map(function(value){
       return value[0].toUpperCase() + value.slice(1).toLowerCase();
     });
     return res.join(' ');
   }

//======================================================================================
/**
 * 5.获取数组的最大最小值。通过apply方法将数组作为一个可变长度的参数列表，
 * 就可以使用Math对象的min()和max()方法。
 */

function getSmallest(array){
  return Math.min.apply(Math, array);
}

function getLargest(array){
  return Math.max.apply(Math, array);
}

//======================================================================================
/**
 * 6.对arguments列表进行切片（slice）和取舍（dice）
 * 将第一个参数与剩余参数的最大值进行相乘。
 */
function multiMax(multi){
  return multi * Math.max.apply(Math,
    Array.prototype.slice.call(arguments, 1)); //Array.prototype.slice.call(arguments)将arguments转化为真正的数组
}

//======================================================================================
/**
 * 7.函数的记忆方法
 * 缺点：isPrime()函数的调用者也必须记住要调用memorized()方法才能使用缓存记忆功能。
 */

Function.prototype.memorized = function(key){
  /**
   * 如果_value属性已经存在，则只是重新对引用进行保存；
   * 否则就创建一个新数据存储对象（初始空对象），并将其存储在_values属性上。
   */
  this._values = this._values || {};
  /**
   * 首先检查数据存储对象里是否已经有值了，如果有，则直接返回；
   * 否则就开始对值进行计算，并将结果保存在缓存里，以便下次调用的时候可以再使用。
   */
  return this._values[key] !== undefined ?
         this._values[key] : this._values[key] = this.apply(this , arguments); //计算结果、保存结果、返回结果
};

//判断是否是素数的函数
function isPrime(num){
  var prime = num != 1;
  for(var i = 2; i < num; i++){
    if(num % i == 0){
      prime = false;
      break;
    }
  }
  return prime;
}

isPrime.memorized(5);
isPrime._values[5];

//======================================================================================
/**
 * 8.改进：使用闭包实现的缓存记忆功能
 */

 Function.prototype.memorized = function(key){
  this._values = this._values || {};
  return this._values[key] !== undefined ?
         this._values[key] : this._values[key] = this.apply(this, arguments);
};

/**
 * memorize返回了一个包装了原始函数并且调用了memorized()方法的新函数，这样，
 * 它返回的始终是原始函数的缓存记忆版本。
 */
Function.prototype.memorize = function(){
  var fn = this;
  //通过变量赋值将上下文带到闭包中，否则上下文就会丢失，因为它不会成为闭包的一部分。
  return function(){
    //在缓存记忆函数中封装原始的函数。
    fn.memorized.apply(fn, arguments);
  };
};

var isPrime = (function(num){
  var prime = num != 1;
  for(var i = 2; i < num; i++){
    if(num % 2 == 0){
      prime = false;
      break;
    }
  }
  return prime;
}).memorize();

isPrime(17);

//======================================================================================
/**
 * 9.类库包装（通过闭包和即时函数）
 */

 //9.1 第一种方法
(function(){
  /**
   * 这里有两次赋值。首先jQuery构造器（作为一个匿名函数）赋值给了window.jQuery，这样就将其作为一
   * 个全局变量了。尽管如此，也不能保证全局的jQuery变量就会一直存在，处于我们控制之外的代码可能会
   * 改变火删除jQuery变量。为了避免这个问题，我们将其赋值给了一个局部变量jQuery，强制将其保持在即
   * 时函数的作用域内
   * 
   */
  var jQuery = window.jQuery = function(){
      //Initialize
  };
  //.....
})();

//9.2 第二种方法(通常在只输出一个变量的时候，优先使用这种技巧，看起来更能体现出赋值的意义)
var jQuery = (function(){
  function jQuery(){
    //Initialize
  }
  //....
  return jQuery;
})();

//======================================================================================
/**
 * 10. 创建原型链
 */
//最好的方式是使用一个对象（父）的实例作为另一个对象（子）的原型：
SubClass.prototype = new SuperClass();

/**
 * 10.1 利用原型，可以增强原生的JavaScript对象，从而给这门语言引用新的特性或丢失的特性。
 * 如下，给不支持forEach()的浏览器也支持该Array方法：
 */
//首先判断是否已经存在该方法，若无，则添加到Array的原型上。
if(!Array.prototype.forEach){
  Array.prototype.forEach = function(callback, context){
    for(var i =  0; i < this.length; i++){
      //context||null防止我们降undefined传递给call()
      callback.call(context||null, this[i], i, this);
    }
  };
}

//测试例子：
["a", "b", "c"].forEach(function(value, index, array){
  //...
});

/**
 * 10.2 HTML DOM原型：在现代浏览器中（IE8+,FF,Safari,Chrome以及Opera），所有DOM元素都继
 * 承于HTMLElement构造器。通过访问HTMLElement的原型，浏览器可以为我们提供扩展任意HTML节点的能力。
 */

//通过HTMLElement的原型，给所有HTML元素都添加一个新方法：
<div id="parent">
  <div id="a">我将被删除</div>
  <div id="b">我也是！</div>
</div>

HTMLElement.prototype.remove = function(){
  if(this.parentNode){
    this.parentNode.removeChild(this);
  }
};

//原来的方法
var a = document.getElementById("a");
a.parentNode.removeChild("a");
//通过扩展的方法
document.getElementById("b").remove();

//======================================================================================
/**
 * 11.快速让一个数组乱序
 */

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.sort(function(){
    return Math.random() - 0.5;
})
console.log(arr);

//======================================================================================
/**
 * JS判断设备来源
 */

function deviceType(){
  var ua = navigator.userAgent;
  var agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];   
  for(var i=0, len = agent.length; i<len; i++){
      if(ua.indexOf(agent[i])>0){         
          break;
      }
  }
}
deviceType();
window.addEventListener('resize', function(){
  deviceType();
})
