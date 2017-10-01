/**
 * cookie优点：可以在本地存储一些信息，这样就不需要在使用的时候多次向服务器发送请求，
 * 这样既能节省时间又能提高网站性能。
 * cookie的缺陷：1.流量代价（只要满足作用域和作用路径，则都会带上cookie信息）；
 * 2.安全性问题（明文传递）；3.大小限制（4KB）。
 */

// 将cookie转化为JS对象
function getCookie(){
     var cookie = {};
     var all = document.cookie;
     if(all == ''){
          return cookie;
     }
     var list = all.split(';');
     for(var i = 0; i < list.length; i++){
          var item = list[i];
          var p = item.indexOf('=');
          var name = item.substring(0, p);
          name = decodeURIComponent(name);
          var value = item.substring(p + 1);
          value = decodeURIComponent(value);
          cookie[name] = value;
     }
     return cookie;
}

// 设置/修改cookie
function setCookie(name, value, expires, path, domain, secure){
     var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
     if(expires){
          cookie += '; expires=' + expires.toGMTString();
     }
     if(path){
          cookie += '; path=' + path; 
     }
     if(domain){
          cookie += '; domain=' + domain;
     }
     if(secure){
          cookie += '; secure=' + secure;
     }
     document.cookie = cookie;
}

// 删除cookie
function removeCookie(name, path, domain){
     document.cookie = name + '=' + '; path=' + path +'; domain=' + domain + '; max-age=0';
}