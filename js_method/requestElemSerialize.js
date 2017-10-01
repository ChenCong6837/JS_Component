//请求参数序列化
function serialize(data){
     if(!data){
          return '';
     }
     var pairs = [];
     for(var name in data){
          if(!data.hasOwnProperty(name)){
               continue;
          }
          if(typeof data[name] == 'function'){
               coutinue;
          }
          var value = data[name].toString();
          name = encodeURIComponent(name);
          value = encodeURIComponent(value);
          pairs.push(name + '=' + value);
     }
     return pairs.join('&');
}