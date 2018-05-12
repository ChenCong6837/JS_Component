//跨浏览器的事件处理程序
var EventUtil = {
     addHandler : function(element, type, handler){
          if(element.addEventListener){ //DOM2级方法存在的话
               element.addEventListener(type, handler, false);
          } else if (element.attachEvent){ //兼容IE的做法
               element.attachEvent('on' + type, handler);
          } else { //调用DOM0 级的方法
               element['on' + type] = handler;
          }
     },
     removeHandler: function (element, type, handler){
          if(element.removerHandler){ //DOM2级方法存在的话
               element.removeHandler(type, handler, false);
          } else if (element.detachEvent){ //兼容IE的做法
               element.detachEvent('on' + type, handler);
          } else { //调用DOM0 级的方法
               element['on' + type] = handler;
          }
     }

};