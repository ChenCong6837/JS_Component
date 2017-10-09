//1.反转字符串
function reverseStr(str){
     return str.split('').reverse().join('');
}

//2.回文串判断，去除其他符号
function palindrome(str) {
  var strToArr = str.toLowerCase().split('').filter(function(val){
     return (val >= 'a' && val <= 'z')||(val >= '0' && val <= '9');
   });
   var temp = strToArr.join('');
   return temp === strToArr.reverse().join('');
 }