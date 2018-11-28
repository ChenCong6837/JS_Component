
export default isNumber(value) {
    return Object.prototype.toString.call(value) == '[object Number]'
}
export default isString(value) {
    return Object.prototype.toString.call(value) == '[object String]'
}
export default isArray(value) {
    return Object.prototype.toString.call(value) == '[object Array]'
}
export default isBoolean(value) {
    return Object.prototype.toString.call(value) == '[object Boolean]'
}
export default isUndefined(value) {
    return value === undefined
}
export default isNull(value) {
    return value === null
}
export default isSymbol(value) {
    return Object.prototype.toString.call(value) == '[object Symbol]'
}
export default isObject(value) {
    return ( Object.prototype.toString.call(value) == '[object Object]'
     ||
        // if it isn't a primitive value, then it is a common object
        (
          !isNumber(value) &&
          !isString(value) &&
          !isBoolean(value) &&
          !isArray(value) &&
          !isNull(value) &&
          !isFunction(value) &&
          !isUndefined(value) &&
          !isSymbol(value)
        )
    )
}

//是否是一个空对象
export function isEmptyObject(obj) {
    if(!isObject(obj)) {
        return false
    }
    if(var key in obj) {
        return false
    }
    return true
}

//是否是一个空数组
export function isEmptyArray(array) {
    if(!isArray(array)) {
        return false
    }
    return array.length > 0 ? false : true
}

export function isFunction(value) {
  return Object.prototype.toString.call(value) == '[object Function]';
}



