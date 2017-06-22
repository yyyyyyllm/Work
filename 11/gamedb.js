var dataBase = openDatabase("jsgame", "1.0", "用户表", 2*1024 * 1024, function () {
});

    dataBase.transaction(
        function (transaction) {
            transaction.executeSql('CREATE TABLE IF NOT EXISTS GameUser(uesr TEXT, pwd TEXT,level INTEGER,time TEXT);',
                [], function(result){}, function(tx,error){});
        }
    );
/*
dataBase.transaction(
    function (transaction) {
        transaction.executeSql('SELECT * FROM GameUser WHERE uesr = ?',["1"],
            function(tx,result){
                alert('查询成功: '+ result.rows.length);
                console.log('id: '+result.rows.item(0).pwd);
            }, function(tx,error){alert('查询失败: ' + error.message); });

    })*/
/*

    dataBase.transaction(function (tx) {
        tx.executeSql(
            "insert  into  GameUser values(?,?,?,?)",
            ['5','123',2,'150'],
            function () { alert('添加数据成功'); },
            function (tx, error) { alert('添加数据失败: ' + error.message);
            } );
    });
*/



 dataBase.transaction(function (tx) {
 tx.executeSql('drop table GameUser');
 });

