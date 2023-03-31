// 密码正则8-18位包含数字、字母、特殊字符
function checkPassword(str) {
    var reg1 = /[!@#$%^&*()_?<>{}]{1}/;
    var reg2 = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,18}/;
    var reg3 = /[a-zA-Z]+/;
    var reg4 = /[0-9]+/;
    if (reg1.test(str) && reg2.test(str) && reg3.test(str) && reg4.test(str)) {
      return true;
    } else if (!reg1.test(str)) {
      alert("需包含一个特殊字符");
      return false;
    } else if (!reg2.test(str)) {
      alert("长度在8-18位");
      return false;
    } else if (!reg3.test(str)) {
      alert("需含有字母");
      return false;
    } else if (!reg4.test(str)) {
      alert("需含有数字");
      return false;
    }
  }