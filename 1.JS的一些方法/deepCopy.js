
/*
    深度合并内容
    引用类型克隆合并
    arguments[0] = target
    arguments type is Object Or Array
    多内容合并覆盖优先级: arguments[0]<arguments[1]<arguments[2]..
    如果sources 不是数组或者对象 则直接忽略

    使用  extend(target, ...source)
 */
export function extend(){
    var args = Array.prototype.slice.call(arguments);
    if(args.length === 0){
      console.error('extends params is undefined')
      return {};
    }
    if(args.length === 1){
      return args[0]
    }
    //要合并的目标对象
    var target = args[0];
    //要合并的内容 
    var sources = args.slice(1,args.length)
  
    if(!isObject(target) && !isArray(target)){
      target = {}; 
    }
    sources.map(function(item){
      //防止死循环
      if(target === item){
          return false;
      }
      //如果内容是对象 
      if(isObject(item)){
          //开始遍历
          for(var key in item){
              //如果内容是对象
              if(isObject(item[key])){
                  //修正数据
                  target[key] = (target[key] && isObject(target[key]))?target[key]:{};
                  target[key] = extend(target[key],item[key])
              }else if(isArray(item[key])){
                  //修正数据
                  target[key] = (target[key] && isArray(target[key]))?target[key]:[];
                  target[key] = extend(target[key],item[key])
              }else{
                  //基本类型直接赋值
                  target[key] = item[key]
              }
          }
      }else if(isArray(item)){
          for(var i = 0; i<item.length ;i++){
              //如果内容是对象
              if(isObject(item[i])){
                  //修正数据
                  target[i] = (target[i] && isObject(target[i]))?target[i]:{}
                  target[i] = extend(target[i],item[i])
              }else if(isArray(item[i])){
                  //修正数据
                  target[i] = (target[i] && isArray(target[i]))?target[i]:[];
                  target[i] = extend(target[i],item[i])
              }else{
                  //基本类型直接赋值
                  target[i] = item[i]
              }
          }
      }
      //其他类型直接忽略  
    })
    return target
  }