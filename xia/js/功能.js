// 为 switcher 添加定义
const switcher = document.querySelector('.按键');

// 使用监听功能监听按钮动态
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    // 使用 if 功能实现主题切换
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "雨后落花";
    }
    else {
        this.textContent = "千里江山";
    }

    console.log('current class name: ' + className);

});