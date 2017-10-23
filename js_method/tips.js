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