<!--

* @Author: x6
* @Date: 2023-02-04 19:13:53
 * @LastEditors: x6
 * @LastEditTime: 2023-02-27 22:21:33
 * @FilePath: \mangfu\README.md
    -->

# 自用青龙脚本库

杂七杂八的脚本

# QuantumultX  配置

## 创建青龙配置任务

```
0 0 1 1 * https://raw.githubusercontent.com/fwktls/x6/master/qlconfig.js, tag=配置青龙, enabled=true
```

QuantumultX 添加任务，然后修改脚本中的 url id secret

```js
var Qlconf = {
  url: "http://192.168.31.111:5700",
  Id: "SPn3LUTD-Stb",
  Secret: "JZ-6_dU6ZYRi92xe6sSQ1QcR",
};
```

## [rewrite_remote]

```
https://raw.githubusercontent.com/fwktls/x6/master/github_Cookie.conf, tag=获取cookie, update-interval=172800, opt-parser=false, enabled=true
```

## COOKIE 订阅列表：

| 序号 |   脚本名   |                               脚本链接                               |
| :--: | :--------: | :------------------------------------------------------------------: |
|  1   |   极客云   |  https://raw.githubusercontent.com/fwktls/x6/master/cookie/jkyck.js  |
|  2   |  番茄小说  | https://raw.githubusercontent.com/fwktls/x6/master/cookie/fqxsck.js  |
|  3   | 什么值得买 | https://raw.githubusercontent.com/fwktls/x6/master/cookie/smzdmck.js |
