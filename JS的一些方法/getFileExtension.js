/**
 * 功能：使用JS实现获取文件扩展名
 * 
 * 介绍：
 *   String.lastIndexOf() 方法返回指定值（本例中的'.'）在调用该方法的字符串中最后出现的位置，如果没找到则返回-1。
 *   对于'filename'和'.hiddenfile'，lastIndexOf 的返回值分别为0 和-1 无符号右移操作符(>>>) 将-1 转换为4294967295，
 * 将-2 转换为4294967294，这个方法可以保证边缘情况时文件名不变。
 *   String.prototype.slice() 从上面计算的索引处提取文件的扩展名。如果索引比文件名的长度大，结果为""。
 */
function getFileExtension(filename){
     return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}