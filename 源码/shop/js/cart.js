// 1.从浏览器缓存中取出加入到购物车的数据
var cartList = JSON.parse(localStorage.getItem("cartList"));
console.log(cartList)
// 2.将取出的数据展示在购物车列表之中
var tbodyDom = document.getElementById("tbodyId");
// 2.1循环购物车数组动态创建tr将购物车数据填充
for (var i = 0; i < cartList.length; i++) {
    var data = cartList[i];
    var trDom = document.createElement("tr")
    trDom.style.textAlign = "center"
    // 填充html结构及数据
    trDom.innerHTML += `<td><input type="checkbox" name="check"/></td>`
    trDom.innerHTML += `<td><img src="${data.imgUrl}" alt="" /></td>`
    trDom.innerHTML += `<td>${data.title}</td>`
    trDom.innerHTML += `<td>${data.price}</td>`
    trDom.innerHTML += `<td class="num"><button class="reduceNum">-</button><input type="text" value="1" disabled /><button class="addNum">+</button></td>`
    trDom.innerHTML += `<td>${data.price}</td>`
    trDom.innerHTML += `<td><button class="del">删除</button></td>`
    // 将创建并且填充好的tr元素添加到tbody之中
    tbodyDom.appendChild(trDom)
}
// 3.点击全选和反选
// 通过name属性获取所有购物车列表前面的复选框元素
var checkDom = document.getElementsByName("check")
var numSumDom = document.getElementById("numSumId");

function selectAll() {
    console.log(checkDom)
    for (var i = 0; i < checkDom.length; i++) {
        if (!checkDom[i].checked) {
            checkDom[i].checked = true
            // 复选框选中进行合计
            totalSum()
        } else {
            checkDom[i].checked = false
            numSumDom.innerText = `已选商品 0 件 总价 ¥ 0元`
        }
    }
}
// 3.1单个复选框选中进行合计
for (var i = 0; i < checkDom.length; i++) {
    checkDom[i].onclick = function () {
        totalSum()
    }
}
// 4.合计选中的商品数量和总价
function totalSum() {
    var num = 0;
    var sum = 0;
    // 循环每一个复选框判断是否选中，如果选中进行金额合计和数量合计
    for (var i = 0; i < checkDom.length; i++) {
        if (checkDom[i].checked) {
            // 获取金额小计节点元素
            var subTotalDom = checkDom[i].parentElement.parentElement.lastElementChild.previousElementSibling;
            console.log(subTotalDom)
            // 取出小计元素的文本内容
            sum += parseInt(subTotalDom.innerText)
            num++
        }
    }
    console.log(sum)
    numSumDom.innerText = `已选商品 ${num} 件 总价 ¥ ${sum}元`
}
// 5.获取加减号按钮点击进行计算
var addNumDom = document.getElementsByClassName("addNum");
var reduceNumDom = document.getElementsByClassName("reduceNum");
console.log(addNumDom, reduceNumDom)
for (var i = 0; i < addNumDom.length; i++) {
    addNumDom[i].onclick = function () {
        // 获取加号按钮上一个兄弟元素的value值
        var iptDom = this.previousElementSibling
        var num = parseInt(iptDom.value)
        console.log(num)
        num++
        // 重新填充输入框的value值
        iptDom.value = num
        // 获取加号父元素的上一个兄弟的单价元素
        var priceDom = this.parentElement.previousElementSibling;
        console.log(priceDom)
        var price = parseInt(priceDom.innerText)
        // 合计小计金额
        var subSum = price * num;
        // 赋值填充给小计元素
        var subDom = this.parentElement.nextElementSibling
        console.log(subDom)
        subDom.innerText = subSum
        // 调用合计方法
        totalSum()
    }
}
// 5.1点击减号进行合计
for (var i = 0; i < reduceNumDom.length; i++) {
    reduceNumDom[i].onclick = function () {
        // 获取下一个兄弟元素的value
        var iptDom = this.nextElementSibling;
        var num = parseInt(iptDom.value)
        if (num > 1) {
            num--
        }
        iptDom.value = num
        // 获取单价元素及单价文本
        var priceDom = this.parentElement.previousSibling
        var price = priceDom.innerText
        // 小计
        var subSum = price * num
        // 小计结果填充到小计金额元素上
        var subDom = this.parentElement.nextElementSibling
        subDom.innerText = subSum
        // 调用合计方法
        totalSum()
    }
}
// 6.单个删除功能
var delDom = document.getElementsByClassName("del");
for (var i = 0; i < delDom.length; i++) {
    delDom[i].onclick = function () {
        if (confirm("您确认删除当前商品吗？")) {
            this.parentElement.parentElement.remove()
            // 调用合计方法
            totalSum()
        }
    }
}
// 7.批量删除
function delMore() {
    if (confirm("您确认删除所选的商品吗？")) {
        for (var i = checkDom.length - 1; i >= 0; i--) {
            if (checkDom[i].checked) {
                checkDom[i].parentElement.parentElement.remove()
                totalSum()
            }
        }
    }
}