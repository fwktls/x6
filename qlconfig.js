/*
 @Author: x6
 @Date: 2023-02-20 21:57:09
 @LastEditors: x6
 @LastEditTime: 2023-02-27 21:44:25
 @FilePath: \mangfu\qlconfig.js

  url 青龙面板地址
  Id 青龙应用id
  Secret 青龙应用Secret 只需要环境变量权限
 */

var qlconf = {
  url: "http://192.168.31.111:5700",
  id: "SPn3LUTD-Stb",
  secret: "JZ-6_dU6ZYRi92xe6sSQ1QcR",
};
$prefs.setValueForKey(JSON.stringify(qlconf), "qlconf");
var ql = $prefs.valueForKey("qlconf");
console.log(ql);
$done({});
