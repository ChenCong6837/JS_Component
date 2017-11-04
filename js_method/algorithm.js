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
