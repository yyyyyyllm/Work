
var dataBase = openDatabase("jsgame", "1.0", "用户表", 2*1024 * 1024, function () {
});

dataBase.transaction(
    function (transaction) {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS GameUser(uesr TEXT, pwd TEXT,level INTEGER,time TEXT);',
            [], function(result){}, function(tx,error){});
    }
);


/*dataBase.transaction(function (tx) {
    tx.executeSql('drop table GameUser');
});*/

/*//用户框失去焦点后验证value值
function oBlur_1() {
    var a = document.getElementById("user").value;
    if (!a) { //用户框value值为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
    } else { //用户框value值不为空
        document.getElementById("remind_1").innerHTML = "";
        document.getElementById("change_margin_1").style.marginBottom = 19 + "px";
    }
}

//密码框失去焦点后验证value值
function oBlur_2() {
    var b = document.getElementById("password").value;
    if (!b) { //密码框value值为空
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
    } else { //密码框value值不为空
        document.getElementById("remind_2").innerHTML = "";
        document.getElementById("change_margin_2").style.marginBottom = 19 + "px";
        document.getElementById("change_margin_3").style.marginTop = 19 + "px";
    }
}*/

//用户框获得焦点的隐藏提醒
function oFocus_1() {
    document.getElementById("remind_1").innerHTML = "";
    document.getElementById("change_margin_1").style.marginBottom = 19 + "px";
}

//密码框获得焦点的隐藏提醒
function oFocus_2() {
    document.getElementById("remind_2").innerHTML = "";
    document.getElementById("change_margin_2").style.marginBottom = 19 + "px";
    document.getElementById("change_margin_3").style.marginTop = 19 + "px";
}

//若输入框为空，阻止表单的提交
function submitTest() {
	

    var a = document.getElementById("user").value;
    var b = document.getElementById("password").value;
	

    if (!a && !b) { //用户框value值和密码框value值都为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
        return false; //只有返回true表单才会提交
    } else if (!a) { //用户框value值为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
        return false;
    } else if (!b) { //密码框value值为空
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
        return false;
    }
    else {

            dataBase.transaction(
                function (tx) {
                    tx.executeSql('SELECT * FROM GameUser WHERE uesr = ?', [a],

                        function (tx, result) {
                            var c = result.rows.item(0).pwd;
                            if (b == c) {
                               alert('登录成功！');
                                window.location.href ="game.html";


                            }
                            else if(c==null){
                                alert('账号或密码错误！');
                                return false;
                            }
                            else {
                                alert('账号或密码错误！');
                                return false;
                            }
                        }, function (tx, error) {
                            alert('账号或密码错误！');
                        });

                })
        }

    /*else if(b!=c){
        /!*console.log("pwd = "  + b );
        console.log("pwd2 = " + c );*!/
        alert('账号或密码错误！');
        return false;
    }

   else if(b==c){
        lert('登录成功！');
        window.location.href ="sign_up.html";
        return false;

    }
*/




}
