//1.反转字符串
function reverseStr(str){
     return str.split('').reverse().join('');
}

//2.回文串判断，去除其他符号，是回文串就返回true，否则返回false
function palindrome(str) {
  var strToArr = str.toLowerCase().split('').filter(function(val){
     return (val >= 'a' && val <= 'z')||(val >= '0' && val <= '9');
   });
   var temp = strToArr.join('');
   return temp === strToArr.reverse().join('');
 }

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

//4.将一个句子中的每一个单词的首字母大写
function titleCase(str) {
     var strToArr = str.split(' ');
     var res = strToArr.map(function(value){
       return value[0].toUpperCase() + value.slice(1).toLowerCase();
     });
     return res.join(' ');
   }

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

/**
 * 6.对arguments列表进行切片（slice）和取舍（dice）
 * 将第一个参数与剩余参数的最大值进行相乘。
 */
function multiMax(multi){
  return multi * Math.max.apply(Math,
    Array.prototype.slice.call(arguments, 1)); //Array.prototype.slice.call(arguments)将arguments转化为真正的数组
}

/**
 * 7.函数的记忆方法
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
         this._values[key] : this._values[key] = this.apply(this , arguments);
};

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