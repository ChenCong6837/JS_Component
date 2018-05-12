function $(id) {
    return document.getElementById(id);
}
window.onload = function () {
    //提取相关元素
    var container = $("container");
    var list = $("list");
    var buttons = $("buttons").getElementsByTagName('span');
    var prev = $("prev");
    var next = $('next');
    var interval = 3000;
    var index = 1;
    var len = 5;
    var timer = null;
    var animated = false;
    //图片滑动函数
    function animate(offset) {
        if (animated) { //如果正在进行图片滑动，则退出函数
            return;
        }
        animated = true;
        var left = parseInt(list.style.left) + offset;
        var time = 300;
        var interval = 10;
        var speed = offset / (time / interval); //设置图片滑动的速度
        var go = function () {
            if ((speed < 0 && parseInt(list.style.left) > left) || (speed > 0 && parseInt(list.style.left) < left)) {
                list.style.left = parseInt(list.style.left) + speed + "px";
                setTimeout(go, interval);
            } else {
                list.style.left = left + "px";
                if (parseInt(list.style.left) > -400) {
                    list.style.left = "-2000px";
                }
                if (parseInt(list.style.left) < -2000) {
                    list.style.left = "-400px";
                }
                animated = false;
            }
        }
        go();
    }
    //高亮显示当前图片对应的圆形按钮
    function showButton() {
        for (var i = 0; i < len; i++) {
            if (buttons[i].getAttribute("class") == "on") {
                buttons[i].removeAttribute("class");
                break;
            }
        }
        buttons[index - 1].setAttribute("class", "on");
    }
    //为“上一个”按钮绑定点击事件
    prev.onclick = function () {
        if (animated) {
            return;
        }
        animate(400);
        if (index == 1) {
            index = 5;
        } else {
            index -= 1;
        }
        showButton();
    }
    //为“下一个”按钮绑定点击事件
    next.onclick = function () {
        if (animated) {
            return;
        }
        animate(-400);
        if (index == 5) {
            index = 1;
        } else {
            index += 1;
        }
        showButton();
    }
    //为圆形按钮绑定点击事件
    for (var i = 0; i < len; i++) {
        buttons[i].onclick = function () {
            if (this.className == "on") {
                return;
            }
            if (animated) {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = (myIndex - index) * (-400);
            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    function play() {
        next.onclick();
        timer = setTimeout(play, interval)
    }

    function stopGo() {
        clearTimeout(timer);
    }
    timer = setTimeout(play, interval);
    //鼠标移上图片停止下一次的图片滑动
    container.onmouseover = stopGo;
    //鼠标移开图片继续下一次的图片滑动
    container.onmouseout = function () {
        timer = setTimeout(play, interval);
    }
}