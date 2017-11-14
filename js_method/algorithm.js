//======================================================================================
/**
 * 问题：判断回文串
 * @param str : 输入的字符串
 * @return true/false
 */

function checkPalindrom(str) {
     return str === str.split('').reverse().join('');
}

checkPalindrom('aabbccddccbbaa'); //true

//======================================================================================
/**
 * 问题：去除整数数组中重复的值
 * @param arr：要去重的数组
 * @return：去重后的数组
 */

function unique(arr) {
     var hashTable = {};
     var data = [];
     for(var i = 0, len = arr.length; i < len; i++){
          if(!hashTable[arr[i]]){
               hashTable[arr[i]] = true;
               data.push(arr[i]); 
          }
     }
     return data;
}

unique([7,1,2,3,5,3,4,5,6,2,3,1]); //[7,1,2,3,5,4,6]

//======================================================================================
/**
 * 问题：统计一个字符串出现最多的字母
 * @param str：输入一个字符串
 * @return ：出现最多次的字母
 */
function findMaxDuplicateChar(str) {
     if(str.length === 1){
          return str;
     }
     var charObj = {};
     for(var i = 0, len = str.length; i < len; i++){
          if(!charObj[str.charAt(i)]){
               charObj[str.charAt(i)] = 1;
          } else {
               charObj[str.charAt(i)]++;
          }
     }
     var maxChar = '',
        maxValue = 1;
        for(var k in charObj){
             if(charObj[k] > maxValue){
                  maxValue = charObj[k];
                  maxChar = k;
             }
        }
     return "出现最多次的字符：" + maxChar + "，出现了：" + maxValue + "次";
}

findMaxDuplicateChar('fasdfhjkasdhfiulwerasdfadaaaa');//出现最多次的字符：a，出现了：8次

//正则的做法
function findMaxDuplicateChar1(str) {
     var arr = str.split("");
     arr.sort(); //让相同的字符挨在一起
     str = arr.join("");
     var regExp = /(\w)\1+/g; //匹配相同的字符字串
     var maxChar = '',
         maxValue = 0;
     str.replace(regExp, function($0, $1){ 
       if(maxValue < $0.length){
         maxValue = $0.length;
         maxChar = $1;
       }
     })
     return "出现最多次的字符：" + maxChar + "，出现了：" + maxValue + "次";
   }
   
   findMaxDuplicateChar1('fasdfhjkasdhfiulwerasdfadaaaa');

//======================================================================================
/**
 * 问题：排序算法
 * @param arr：输入需要排序的数组
 * @return :排完序后的数组
 */

function bubbleSort(arr) {
  var temp;
  if(arr.length === 1){
       return arr[0];
  }
  for(var i = 0, len = arr.length; i < len; i++){
       for( var j = i; j < len; j++){
            if(arr[i] > arr[j]){
                 temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
            }
       }
  }
  return arr;
}

bubbleSort([5,2,3,6,4,9]); //[2,3,4,5,6,9]


function quickSort(arr) {
  if(arr.length <= 1){
       return arr;
  }
  let leftArr = [];
  let rightArr = [];
  let q = arr[0];
  for(let i = 1, len = arr.length; i < len; i++){
       if(arr[i] > q){
            rightArr.push(arr[i]);
       }else{
            leftArr.push(arr[i]);
       }
  } 
  return [].concat(quickSort(leftArr), [q], quickSort(rightArr));
}

quickSort([1,2423,45,2342,3,23456345,2342,34,345,34,5,234,23,4,345,234,654,6,537,38]);
//[1, 3, 4, 5, 6, 23, 34, 34, 38, 45, 234, 234, 345, 345, 537, 654, 2342, 2342, 2423, 23456345]

//======================================================================================
/**
 * 问题：斐波那契数列
 * @param n：需要计算的项数
 * @return 包含n项的斐波那契数列
 */

function getFibonacci(n) {
  var fibArr = [],
      i = 0;
      while(i < n) {
           if(i <= 1){
                fibArr.push(1);
           } else {
                fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
           }
           i++;
      }
 return fibArr;
}

getFibonacci(7);//[1, 1, 2, 3, 5, 8, 13]

//======================================================================================
/**
 * 问题：找出正数组的最大差值
 * @param arr：输入的数组
 * @return maxProfit：最大的差值
 */

function getMaxProfit(arr) {
  var minPrice = arr[0];
  var maxProfit = 0;
  for(var i = 0, len = arr.length; i < len; i++){
       var currentPrice = arr[i];
       minPrice = Math.min(minPrice, currentPrice);
       var potentialProfit = currentPrice - minPrice;
       maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}

getMaxProfit([23,45,21,6,34,23,654]);//648


function myGetMaxProfit(arr) {
  var maxValue = arr[0],
      minValue = arr[0];
 for(var i = 0, len = arr.length; i < len; i ++){
      if(maxValue < arr[i]){
           maxValue = arr[i];
      }
      if(minValue > arr[i]){
           minValue = arr[i];
      }
 }
 return maxValue - minValue;
}

myGetMaxProfit([23,45,21,6,34,23,654]);//648
//======================================================================================
/**
 * 问题：随机生成指定长度的字符串
 * @param n:生成字符串的长度
 * @return ：生成的字符串
 */

function getRandomStr(n) {
  var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210';
  var randomStr = '';
  while(n > 0){
       randomStr += str.charAt(Math.floor(Math.random()*62));
       n--;
  }
  return randomStr;
}
//======================================================================================