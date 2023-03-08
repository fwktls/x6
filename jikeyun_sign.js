/*
    极客云 注册链接:https://jike251.xyz/auth/register?code=nG4R
    脚本主要是每天签到领取流量。
    cron:0 0 * * *
    变量名 jikeyun
    通知变量名 isnotify 默认true
*/
const $ = new Env("极客云");
const jkurl = "https://jike997.xyz/";
var version_='jsjiami.com.v7';const _0x3829ba=_0x3800;(function(_0x6586a6,_0x8cef8a,_0x52a260,_0x139c9d,_0x541cfa,_0x34bdae,_0x27bb00){return _0x6586a6=_0x6586a6>>0x5,_0x34bdae='hs',_0x27bb00='hs',function(_0x399ce4,_0x40d02d,_0x224cd8,_0x1f83bf,_0x1e9154){const _0x2f3926=_0x3800;_0x1f83bf='tfi',_0x34bdae=_0x1f83bf+_0x34bdae,_0x1e9154='up',_0x27bb00+=_0x1e9154,_0x34bdae=_0x224cd8(_0x34bdae),_0x27bb00=_0x224cd8(_0x27bb00),_0x224cd8=0x0;const _0x5f3cd4=_0x399ce4();while(!![]&&--_0x139c9d+_0x40d02d){try{_0x1f83bf=parseInt(_0x2f3926(0x182,'Z&BK'))/0x1*(parseInt(_0x2f3926(0x15e,'ckhp'))/0x2)+parseInt(_0x2f3926(0x14e,'v6(1'))/0x3+parseInt(_0x2f3926(0x18f,'G1#n'))/0x4*(-parseInt(_0x2f3926(0x15f,'kEbB'))/0x5)+parseInt(_0x2f3926(0x173,'QwWm'))/0x6*(parseInt(_0x2f3926(0x168,'Ou#['))/0x7)+-parseInt(_0x2f3926(0x151,'Bh5e'))/0x8+parseInt(_0x2f3926(0x17b,'[yv&'))/0x9*(parseInt(_0x2f3926(0x15c,'QwWm'))/0xa)+-parseInt(_0x2f3926(0x153,'tDFO'))/0xb;}catch(_0x31548f){_0x1f83bf=_0x224cd8;}finally{_0x1e9154=_0x5f3cd4[_0x34bdae]();if(_0x6586a6<=_0x139c9d)_0x224cd8?_0x541cfa?_0x1f83bf=_0x1e9154:_0x541cfa=_0x1e9154:_0x224cd8=_0x1e9154;else{if(_0x224cd8==_0x541cfa['replace'](/[RMfWdxNGTOgUIEhPQqtHeJC=]/g,'')){if(_0x1f83bf===_0x40d02d){_0x5f3cd4['un'+_0x34bdae](_0x1e9154);break;}_0x5f3cd4[_0x27bb00](_0x1e9154);}}}}}(_0x52a260,_0x8cef8a,function(_0x47d5b2,_0x22212d,_0x37d09e,_0x560b09,_0x34208c,_0x1e6e20,_0x488f57){return _0x22212d='\x73\x70\x6c\x69\x74',_0x47d5b2=arguments[0x0],_0x47d5b2=_0x47d5b2[_0x22212d](''),_0x37d09e=`\x72\x65\x76\x65\x72\x73\x65`,_0x47d5b2=_0x47d5b2[_0x37d09e]('\x76'),_0x560b09=`\x6a\x6f\x69\x6e`,(0x120f5e,_0x47d5b2[_0x560b09](''));});}(0x18e0,0xc2a36,_0xba79,0xc9),_0xba79)&&(version_=_0xba79);var request=require('request');let msg='',cookie=($[_0x3829ba(0x180,'GjYs')]()?process[_0x3829ba(0x171,'W9Jc')][_0x3829ba(0x165,'tDFO')]:$['getdata'](_0x3829ba(0x16d,'1M@R')))||'',isnotify=($['isNode']()?process[_0x3829ba(0x186,'ckhp')]['isnotify']:$['getdata'](_0x3829ba(0x174,'kEbB')))||'true';const notify=$['isNode']()?require('./sendNotify'):'';let cookieArr=[],j=0x0;!(async()=>{const _0x5dc9fe=_0x3829ba,_0x236c37={'xKkoh':function(_0x227ae1,_0x3302d8){return _0x227ae1+_0x3302d8;},'RuGJt':_0x5dc9fe(0x17d,'G1#n'),'JOCAn':_0x5dc9fe(0x14c,'Zday'),'HYsgZ':function(_0x76dd5f,_0x23cbd9){return _0x76dd5f===_0x23cbd9;},'bUksJ':'tWyeV','fxChh':function(_0x620862,_0x1b2e25){return _0x620862+_0x1b2e25;},'nonRl':function(_0x507efc,_0x3226d2){return _0x507efc+_0x3226d2;},'DgHca':_0x5dc9fe(0x152,'Bh5e'),'EiZeV':function(_0x4475e1,_0x403f28){return _0x4475e1<_0x403f28;},'tJoTX':'账号[','dEQEh':function(_0x14201e,_0x295086){return _0x14201e(_0x295086);},'eocih':'lqKKi','YybLN':function(_0x2063a3,_0x5e8a57){return _0x2063a3+_0x5e8a57;},'GbRju':_0x5dc9fe(0x166,'Ou#['),'VqUKP':function(_0x126350,_0x1e0130){return _0x126350+_0x1e0130;}};cookieArr=cookie['split']('&');if(!cookie){if(_0x236c37[_0x5dc9fe(0x154,'kEbB')](_0x236c37[_0x5dc9fe(0x167,'%i@Y')],_0x5dc9fe(0x18c,'E@8R'))){console[_0x5dc9fe(0x164,'Gr4i')](_0x236c37[_0x5dc9fe(0x16c,'ckhp')](_0x236c37['nonRl'](_0x236c37[_0x5dc9fe(0x190,'@XKy')],$[_0x5dc9fe(0x15d,'@Fdn')]),_0x236c37[_0x5dc9fe(0x15a,'jIAh')]));return;}else{_0x3b0dab['log'](_0x236c37[_0x5dc9fe(0x191,'B3]B')](_0x236c37[_0x5dc9fe(0x18a,'rPM7')](_0x236c37[_0x5dc9fe(0x160,'Bh5e')],_0xdcd409['name']),_0x236c37[_0x5dc9fe(0x177,'zpDv')]));return;}}console[_0x5dc9fe(0x183,'2$K*')](_0x236c37['DgHca']+cookieArr[_0x5dc9fe(0x169,'pa@5')]+_0x5dc9fe(0x16a,'Bh5e'));for(let _0x17d497=0x0;_0x236c37[_0x5dc9fe(0x176,'kCxp')](_0x17d497,cookieArr[_0x5dc9fe(0x172,'9b9e')]);_0x17d497++){j++,console[_0x5dc9fe(0x161,'8*2c')](_0x236c37['xKkoh'](_0x236c37['tJoTX'],j)+_0x5dc9fe(0x181,'Z&BK'));var _0x509ea8=await _0x236c37[_0x5dc9fe(0x163,'rPM7')](Sign,cookieArr[_0x17d497]);if(_0x509ea8){if(_0x236c37[_0x5dc9fe(0x155,'ckhp')](_0x5dc9fe(0x162,']lj5'),_0x236c37['eocih']))_0x4cdaf5[_0x5dc9fe(0x16f,'Gr4i')](_0x595968['name'],_0x1bfcab);else{var _0xab3bef=JSON['parse'](_0x509ea8);msg+=_0x5dc9fe(0x17c,'fox%')+j+']'+_0xab3bef[_0x5dc9fe(0x18b,'!9pr')],console[_0x5dc9fe(0x184,'Z&BK')](_0x236c37['nonRl'](_0x236c37[_0x5dc9fe(0x18e,'pa@5')](_0x236c37['YybLN'](_0x236c37[_0x5dc9fe(0x157,'PCpe')],j),']'),_0xab3bef['msg']));}}else msg+=_0x236c37[_0x5dc9fe(0x159,'kEbB')](_0x236c37[_0x5dc9fe(0x14b,'@Fdn')]+j,']')+_0x236c37['GbRju'],console[_0x5dc9fe(0x18d,'zWdO')](_0x236c37['nonRl'](_0x236c37[_0x5dc9fe(0x187,'zWdO')](_0x236c37[_0x5dc9fe(0x16b,'lyF$')](_0x236c37[_0x5dc9fe(0x16e,'92qs')],j),']'),_0x236c37[_0x5dc9fe(0x189,'j!%o')]));}isnotify&&notify[_0x5dc9fe(0x150,'1M@R')]($[_0x5dc9fe(0x188,'zpDv')],msg);})()['catch'](_0x5e93d3=>$['logErr'](_0x5e93d3))[_0x3829ba(0x156,'PCpe')](()=>$[_0x3829ba(0x17a,'IrQ2')]());function _0x3800(_0x2b072b,_0x59c878){const _0xba79ce=_0xba79();return _0x3800=function(_0x3800b3,_0x148166){_0x3800b3=_0x3800b3-0x14b;let _0x2785e2=_0xba79ce[_0x3800b3];if(_0x3800['DmbsvY']===undefined){var _0x5f52fb=function(_0x471bf3){const _0x3b0dab='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xdcd409='',_0x367046='';for(let _0x2c26f0=0x0,_0x316399,_0x105ef5,_0x1784eb=0x0;_0x105ef5=_0x471bf3['charAt'](_0x1784eb++);~_0x105ef5&&(_0x316399=_0x2c26f0%0x4?_0x316399*0x40+_0x105ef5:_0x105ef5,_0x2c26f0++%0x4)?_0xdcd409+=String['fromCharCode'](0xff&_0x316399>>(-0x2*_0x2c26f0&0x6)):0x0){_0x105ef5=_0x3b0dab['indexOf'](_0x105ef5);}for(let _0x55f345=0x0,_0x227530=_0xdcd409['length'];_0x55f345<_0x227530;_0x55f345++){_0x367046+='%'+('00'+_0xdcd409['charCodeAt'](_0x55f345)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x367046);};const _0x3a5159=function(_0x4413e5,_0x503499){let _0x317603=[],_0x2bdf5c=0x0,_0xa6e478,_0x7cadf9='';_0x4413e5=_0x5f52fb(_0x4413e5);let _0x14af18;for(_0x14af18=0x0;_0x14af18<0x100;_0x14af18++){_0x317603[_0x14af18]=_0x14af18;}for(_0x14af18=0x0;_0x14af18<0x100;_0x14af18++){_0x2bdf5c=(_0x2bdf5c+_0x317603[_0x14af18]+_0x503499['charCodeAt'](_0x14af18%_0x503499['length']))%0x100,_0xa6e478=_0x317603[_0x14af18],_0x317603[_0x14af18]=_0x317603[_0x2bdf5c],_0x317603[_0x2bdf5c]=_0xa6e478;}_0x14af18=0x0,_0x2bdf5c=0x0;for(let _0x5a3644=0x0;_0x5a3644<_0x4413e5['length'];_0x5a3644++){_0x14af18=(_0x14af18+0x1)%0x100,_0x2bdf5c=(_0x2bdf5c+_0x317603[_0x14af18])%0x100,_0xa6e478=_0x317603[_0x14af18],_0x317603[_0x14af18]=_0x317603[_0x2bdf5c],_0x317603[_0x2bdf5c]=_0xa6e478,_0x7cadf9+=String['fromCharCode'](_0x4413e5['charCodeAt'](_0x5a3644)^_0x317603[(_0x317603[_0x14af18]+_0x317603[_0x2bdf5c])%0x100]);}return _0x7cadf9;};_0x3800['NjTVLu']=_0x3a5159,_0x2b072b=arguments,_0x3800['DmbsvY']=!![];}const _0x20a226=_0xba79ce[0x0],_0x123bfd=_0x3800b3+_0x20a226,_0x19741b=_0x2b072b[_0x123bfd];return!_0x19741b?(_0x3800['tSHRXv']===undefined&&(_0x3800['tSHRXv']=!![]),_0x2785e2=_0x3800['NjTVLu'](_0x2785e2,_0x148166),_0x2b072b[_0x123bfd]=_0x2785e2):_0x2785e2=_0x19741b,_0x2785e2;},_0x3800(_0x2b072b,_0x59c878);}async function Sign(_0x26d3f1){const _0x3d05b4=_0x3829ba,_0x4e4fc0={'ksxyc':function(_0x30c6ec,_0x5aacd5){return _0x30c6ec(_0x5aacd5);},'EvfgQ':function(_0x11e262,_0x5bbc57,_0x3c05a4){return _0x11e262(_0x5bbc57,_0x3c05a4);},'uxxan':'POST'};var _0x573431={'method':_0x4e4fc0[_0x3d05b4(0x15b,'Z&BK')],'url':jkurl+'user/checkin','body':'','headers':{'Cookie':_0x26d3f1}};return new Promise(function(_0x1f6d65,_0x146c37){const _0x216e49=_0x3d05b4,_0xad5f28={'YoqZL':function(_0x467bb0,_0x46d1ac){const _0x21bd4c=_0x3800;return _0x4e4fc0[_0x21bd4c(0x14d,']lj5')](_0x467bb0,_0x46d1ac);}};_0x4e4fc0[_0x216e49(0x158,'kCxp')](request,_0x573431,function(_0x7cd78c,_0x218f75){const _0x576cbd=_0x216e49;if(_0x7cd78c)_0xad5f28[_0x576cbd(0x170,'g4%a')](_0x146c37,_0x7cd78c);_0x218f75['statusCode']==0x12e?_0xad5f28['YoqZL'](_0x1f6d65,![]):_0x1f6d65(_0x218f75[_0x576cbd(0x179,'G1#n')]);});});}function _0xba79(){const _0x578986=(function(){return[...[version_,'MjdsUIjhNidxaJQmifO.coWmt.qv7fHCEGPCTgeR==','b1Wsn2/cKSkCW73dOgSpWPG','a20xd2e','C1rH','lCoMuHr0','d8k4c3u7','W6JdUCoD','WP7cIdK2bSkDW7m','W50aEbLlWRhPL5dORypMIR/OVilMNi/VV5C','qg/dRNrT','WOXEyXLtWRpcU8of','W6ddJYlcQ8kbza','5lM76ls+5y6NAdHWD8kpk8oAgSofWQjNW6re','ggpdR8kRza','ACo4CCkavW','BXygW7uHW5ZcPW','bSoyW707ya','W7FdS8oua8oIW5FcL8klWQ8y','xsJdO8ofWP0','WRCIoG','WOldL8oWhmkaW60','WPT7oCkrBCk4W6dcI8o8W7eTW4fU','xXPlAcldI8kWW6i','WQb0W6WHWQHgm8opWR8kW4ZcJSoiqW'],...(function(){return[...['WROuEg/dLa','W5ZdK3bQW60','q8ouWOH0oI/cVZJcSmkaWORcHfS','WPNcSYOK','r8o2WQlcMW','W4JcGLRdUmkNghFdOwqYjmkV','6lwK5y6cvq','6kYm5yAu6i+55y6l','WPpcTXXiBaNcP2S','WQNcKsBdR8kFgmkRWOZdKd9jWRi','W4JdTszmEqS','los5N+wjVEAjJoIIM+s4L8ovFmkb','q8osWRbJWR1IWR8','abqL','hColWRS','W4BdLgbKsCozWQNdPh/cLZjHWOG','ASoUra','WQJdQCkpjSkX','W7JdVv5o','E0m3w8kL','e8k2mv87','FSkwWP0','ofyEaCkz','WQRdQCkg','W6ldHslcNSkz'],...(function(){return['W4RdRhONW7b9xc1N','W6/dS8kVDw4','W6ddR3RcSmoo','WOhdQgrbyW','mYBdRdFcV8kn','imouEHTc','rSorWO9XnsNcVq7cJ8k3WOdcUgu','rCorWOT3nIRcVqJcS8kBWQJcVfy','DHOdW7qwW4BcVqRcVmo0','zIHLDYXQBmoqtCkIwCkBW5y','Fdv9AdHWD8kpk8oAgSofWQjQ5yA4','W4xdL2fMtCoyWQJcKf3cMtvgWPLx','FJbwyaW','r8ozqCkpzq','n8oHW6hcJSoGgX8','jCocW6dcU8ou','WROlrg3dKW','tIjoAd4','WOCgfHxdPW','bmoCWQrkWRK','WPj2p8ojdCoqWRhcSmoU','WPVdG2zW','pSkWbSorcCkBtmkJrfTxW6nW'];}())];}())];}());_0xba79=function(){return _0x578986;};return _0xba79();};var version_ = 'jsjiami.com.v7';
function Env(t, e) {
  "undefined" != typeof process &&
    JSON.stringify(process.env).indexOf("GITHUB") > -1 &&
    process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t =
        "string" == typeof t
          ? {
              url: t,
            }
          : t;
      let s = this.get;
      return (
        "POST" === e && (s = this.post),
        new Promise((e, i) => {
          s.call(this, t, (t, s, r) => {
            t ? i(t) : e(s);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new (class {
    constructor(t, e) {
      (this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = "box.dat"),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = "\n"),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i)
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise((e) => {
        this.get(
          {
            url: t,
          },
          (t, s, i) => e(i)
        );
      });
    }
    runScript(t, e) {
      return new Promise((s) => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r);
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r,
            },
            headers: {
              "X-Key": o,
              Accept: "*/*",
            },
          };
        this.post(n, (t, e, i) => s(i));
      }).catch((t) => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s
          ? this.fs.writeFileSync(t, r)
          : i
          ? this.fs.writeFileSync(e, r)
          : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t
        ? t
        : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
          (e
            .slice(0, -1)
            .reduce(
              (t, s, i) =>
                Object(t[s]) === t[s]
                  ? t[s]
                  : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}),
              t
            )[e[e.length - 1]] = s),
          t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r)
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? ("null" === o ? null : o || "{}") : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i));
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i));
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.read(t)
        : this.isQuanX()
        ? $prefs.valueForKey(t)
        : this.isNode()
        ? ((this.data = this.loaddata()), this.data[t])
        : (this.data && this.data[t]) || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.write(t, e)
        : this.isQuanX()
        ? $prefs.setValueForKey(t, e)
        : this.isNode()
        ? ((this.data = this.loaddata()),
          (this.data[e] = t),
          this.writedata(),
          !0)
        : (this.data && this.data[e]) || null;
    }
    initGotEnv(t) {
      (this.got = this.got ? this.got : require("got")),
        (this.cktough = this.cktough ? this.cktough : require("tough-cookie")),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie &&
            void 0 === t.cookieJar &&
            (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers &&
        (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
        this.isSurge() || this.isLoon()
          ? (this.isSurge() &&
              this.isNeedRewrite &&
              ((t.headers = t.headers || {}),
              Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1,
              })),
            $httpClient.get(t, (t, s, i) => {
              !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
            }))
          : this.isQuanX()
          ? (this.isNeedRewrite &&
              ((t.opts = t.opts || {}),
              Object.assign(t.opts, {
                hints: !1,
              })),
            $task.fetch(t).then(
              (t) => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(
                  null,
                  {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o,
                  },
                  o
                );
              },
              (t) => e(t)
            ))
          : this.isNode() &&
            (this.initGotEnv(t),
            this.got(t)
              .on("redirect", (t, e) => {
                try {
                  if (t.headers["set-cookie"]) {
                    const s = t.headers["set-cookie"]
                      .map(this.cktough.Cookie.parse)
                      .toString();
                    s && this.ckjar.setCookieSync(s, null),
                      (e.cookieJar = this.ckjar);
                  }
                } catch (t) {
                  this.logErr(t);
                }
              })
              .then(
                (t) => {
                  const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o,
                  } = t;
                  e(
                    null,
                    {
                      status: s,
                      statusCode: i,
                      headers: r,
                      body: o,
                    },
                    o
                  );
                },
                (t) => {
                  const { message: s, response: i } = t;
                  e(s, i, i && i.body);
                }
              ));
    }
    post(t, e = () => {}) {
      if (
        (t.body &&
          t.headers &&
          !t.headers["Content-Type"] &&
          (t.headers["Content-Type"] = "application/x-www-form-urlencoded"),
        t.headers && delete t.headers["Content-Length"],
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1,
          })),
          $httpClient.post(t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
          });
      else if (this.isQuanX())
        (t.method = "POST"),
          this.isNeedRewrite &&
            ((t.opts = t.opts || {}),
            Object.assign(t.opts, {
              hints: !1,
            })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(
                null,
                {
                  status: s,
                  statusCode: i,
                  headers: r,
                  body: o,
                },
                o
              );
            },
            (t) => e(t)
          );
      else if (this.isNode()) {
        this.initGotEnv(t);
        const { url: s, ...i } = t;
        this.got.post(s, i).then(
          (t) => {
            const { statusCode: s, statusCode: i, headers: r, body: o } = t;
            e(
              null,
              {
                status: s,
                statusCode: i,
                headers: r,
                body: o,
              },
              o
            );
          },
          (t) => {
            const { message: s, response: i } = t;
            e(s, i, i && i.body);
          }
        );
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds(),
      };
      /(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (s.getFullYear() + "").substr(4 - RegExp.$1.length)
        ));
      for (let e in i)
        new RegExp("(" + e + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? i[e]
              : ("00" + i[e]).substr(("" + i[e]).length)
          ));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = (t) => {
        if (!t) return t;
        if ("string" == typeof t)
          return this.isLoon()
            ? t
            : this.isQuanX()
            ? {
                "open-url": t,
              }
            : this.isSurge()
            ? {
                url: t,
              }
            : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s,
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s,
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e,
            };
          }
        }
      };
      if (
        (this.isMute ||
          (this.isSurge() || this.isLoon()
            ? $notification.post(e, s, i, o(r))
            : this.isQuanX() && $notify(e, s, i, o(r))),
        !this.isMuteLog)
      ) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e),
          s && t.push(s),
          i && t.push(i),
          console.log(t.join("\n")),
          (this.logs = this.logs.concat(t));
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]),
        console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s
        ? this.log("", `❗️${this.name}, 错误!`, t.stack)
        : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`),
        this.log(),
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  })(t, e);
}