// 轮播图效果
    // 1.让图片动起来（显示隐藏图片）
    // 1.1获取需要操作的dom元素
    var swiperDom = document.getElementById("swiperId");
    var picDom = document.getElementById("picId");
    var leftDom = document.getElementById("leftId");
    var rightDom = document.getElementById("rightId");
    var numDom = document.getElementById("numId");
    // 取出每个li
    var liPic = picDom.children;
    var liNum = numDom.children;
    console.log(liPic, liNum)
    // 默认显示第一张图片
    var index = 0;
    var myTimer = null;
// 1.2显示隐藏图片方法,显示隐藏指定的豆豆背景色
function change(currentIndex){
    // 隐藏所有的li图片
    for(var i = 0; i < liPic.length; i++){
        liPic[i].style.display = "none"
        liNum[i].className = ""
    }
    // 指定当前的li图片显示
    liPic[currentIndex].style.display = "block"
    // 指定当前的li豆豆显示
    liNum[currentIndex].className = "active"
    index = currentIndex
}
change(index);
// 1.3 自动切换下一张图片方法(定时器),每过一秒切换一张图片
function run(){
    myTimer = setInterval(function(){
        index ++;
        if(index >= liPic.length){
            index = 0;
        }
        change(index);
    }, 2000)
}
run();
// 2.鼠标点击对应的豆豆显示对应豆豆指定的图片
for(var i = 0; i < liNum.length; i++){
    // 自定义属性index保存每一个i
    liNum[i].index = i;
    liNum[i].onclick = function(){
        // console.log(i)
        // liNum[i] =》 this
        var ix = this.index;
        change(ix);
    }
}
// 3.鼠标划过停留在图片之上图片保持静止状态
swiperDom.onmouseover = function(){
    // 清空定时器
    clearInterval(myTimer)
}
// 4.鼠标离开轮播图继续轮播
swiperDom.onmouseout = function(){
    run()
}
// 5.点击左按钮切换上一张图片
leftDom.onclick = function(){
    index --;
    if(index < 0){
        index = liPic.length - 1;
    }
    change(index);
}
// 6.点击右按钮切换下一张图片
rightDom.onclick = function(){
    index ++;
    if(index >= liPic.length){
        index = 0
    }
    change(index);
}