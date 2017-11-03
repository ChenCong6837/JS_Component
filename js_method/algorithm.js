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