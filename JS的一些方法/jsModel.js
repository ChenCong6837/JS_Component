//JS模块化思想，建立私有方法和私有变量，返回公有方法，防止全局污染

var Module = (function(){
     var myModule = {};
     //私有的方法用下划线开头有利于视觉上分辨公共的和私有的方法
     var _privateMethod = function(){

     };
     myModule.publicMethod = function(){

     };
     myModule.anotherPublicMethod = function(){
          //这里面也可以调用 _privateMethod()
     };
     return myModule;
})();

Module.publicMethod();//在外部调用共有方法