/**
 * 获取数组的最大最小值。通过apply方法将数组作为一个可变长度的参数列表，
 * 就可以使用Math对象的min()和max()方法。
 */

function getSmallest(array){
     return Math.min.apply(Math, array);
}

function getLargest(array){
     return Math.max.apply(Math, array);
}