// 1.模拟商品列表动态数据
var productList = [
    {
        id: 1,
        imgUrl: "./img/戴尔电脑.png",
        title: "戴尔电脑",
        price: 4299,
        say: 1
    },
    {
        id: 2,
        imgUrl: "./img/小米电脑.png",
        title: "小米电脑",
        price: 5299,
        say: 2
    },
    {
        id: 3,
        imgUrl: "./img/联想电脑.png",
        title: "联想电脑",
        price: 6299,
        say: 1
    },
    {
        id: 4,
        imgUrl: "./img/计算器.png",
        title: "计算器",
        price: 5299,
        say: 2
    },
    {
        id: 5,
        imgUrl: "./img/圆珠笔.png",
        title: "圆珠笔",
        price: 28,
        say: 2
    },
    {
        id: 6,
        imgUrl: "./img/登山鞋.jpg",
        title: "登山鞋",
        price: 200,
        say: 1
    },
    {
        id: 7,
        imgUrl: "./img/冬裙.jpg",
        title: "冬裙",
        price: 100,
        say: 2
    },
    {
        id: 8,
        imgUrl: "./img/毛衣.jpg",
        title: "毛衣",
        price: 102,
        say: 1
    },
    {
        id: 9,
        imgUrl: "./img/棉服.jpg",
        title: "棉服",
        price: 300,
        say: 2
    },
    {
        id: 10,
        imgUrl: "./img/男包.jpg",
        title: "男包",
        price: 200,
        say: 0.5
    }
]
// 2.将数据动态渲染到页面(列表)之中
var listDom = document.getElementById("listId");
// 2.1循环数据动态创建li填充数据
for(var i = 0; i < productList.length; i++){
    // 保存每一条循环的数据
    var data = productList[i];
    // 通过 ${} 进行填充动态数据
    var liDom = document.createElement("li");
    // 填充html结构 ``反引号 模板字符串
    liDom.innerHTML += `<img src="${data.imgUrl}" alt="">`;
    liDom.innerHTML += `<p>${data.title}</p>`;
    liDom.innerHTML += `<b>${data.price}元</b>`;
    liDom.innerHTML += `<span>${data.say}万人好评</span>`;
    liDom.innerHTML += `<button class="addCart">加入购物车</button>`;
    // 将每一个创建的li添加到list列表ul标签中
    listDom.appendChild(liDom);
}
// 3.点击加入购物车按钮将加入购物车的数据保存起来，跳转到购物车页面
// 3.1获取加入购物车的dom元素，循环按钮元素绑定点击事件
var addCartDom = document.getElementsByClassName("addCart");
var arr = [];
for(var i = 0; i < addCartDom.length; i++){
    // 自定义属性，保存每一个循环的i
    addCartDom[i].index = i;
    addCartDom[i].onclick = function(){
        var ix = this.index;
        console.log("点击了第几个按钮" + this.index)
        // 3.2将点击的购物车数据保存在浏览器的缓存中
        // 3.3先取出原有的购物车缓存数据然后再保存
        var oldArr = JSON.parse(localStorage.getItem("cartList"));
        console.log(oldArr)
        if(oldArr){
            oldArr.push(productList[ix])
            localStorage.setItem("cartList", JSON.stringify(oldArr))
        }else{
            arr.push(productList[ix])
            console.log(arr)
            localStorage.setItem("cartList", JSON.stringify(arr))
        }
        // 3.4跳转到购物车页面
        location.href = "cart.html";
    }
}

