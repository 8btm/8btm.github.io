
if(typeof JSON==='undefined'){document.write('<script src="../qzonestyle.gtimg.cn/open/iot/common/widget/json-for-ie.js"><\/script>');};!function(){var TIME_MODULE_START=new Date();var conf=window.mmConf||{};var util={emptyFn:function(){},unique:function(ary){var map={},a=[];for(var i=0;i<ary.length;i++){var item=ary[i];if(map[item])continue;a.push(item);map[item]=true;}
return a;},getCookie:function(name){var r=new RegExp("(?:^|;+|\\s+)"+name+"=([^;]*)"),m=document.cookie.match(r);return(!m?"":m[1]);},getUin:function(name){var u=util.getCookie('uin');if(!u){return 0;}
u=/^o(\d+)$/.exec(u);if(u&&(u=new Number(u[1])+0)>10000){return u;}
return 0;},getToken:function(){var str=util.getCookie('skey')||'';var hash=5381;for(var i=0,len=str.length;i<len;++i){hash+=(hash<<5)+str.charCodeAt(i);}
return hash&0x7fffffff;}};util.resolve=function(base,relPath){var ary=Array.prototype.slice.call(arguments);if(ary.length==0)return'';if(ary.length==1)return base;if(ary.length>2){ary.unshift(arguments.callee(ary.shift(),ary.shift()));return arguments.callee.apply(this,ary);}
base=base.replace(/\\/g,'index.html');relPath=relPath.replace(/\\/g,'index.html');if(/:\/\//.test(relPath))return relPath;if(/^\/\/(.*)/.test(relPath)){var t=RegExp.$1;return base.replace(/\/\/.*$/,t);}
if(/^\?(.*)/.test(relPath)){var t=RegExp.$1;return((base.match(/^[^?]*/)||[''])[0]||'')+t;}
if(/^\#(.*)/.test(relPath)){var t=RegExp.$1;return((base.match(/^[^#]*/)||[''])[0]||'')+t;}
var u=base.match(/^[^\/]+\/\/[^\/]+/)[0];if(/^\/(.*)/.test(relPath)){return u+relPath;}
var pathname=base.slice(u.length).replace(/[?#].*$/,'');pathname=pathname.replace(/[^\/]+$/,'');pathname=pathname+relPath.replace(/[?#].*$/,'');pathname=pathname.replace(/\/\.\//g,"index.html");var DOUBLE_DOT_RE=new RegExp("%5b%5e/%5d%2b/index.html\\.\\./");while(pathname.match(DOUBLE_DOT_RE)){pathname=pathname.replace(DOUBLE_DOT_RE,"index.html");}
DOUBLE_DOT_RE=new RegExp("index.html\\.\\./");while(pathname.match(DOUBLE_DOT_RE)){pathname=pathname.replace(DOUBLE_DOT_RE,"index.html");}
return relPath.replace(/^[^?#]+/,u+pathname);};util.findCss=function(uri){var list=document.getElementsByTagName('link');for(var i=0;i<list.length;i++){var item=list[i];if(item.href==uri){return item;}}};util.loadCss=function(uri,callback){var css=util.findCss(uri);if(css){setTimeout(function(){callback(css);},0);return;}
css=document.createElement('link');css.href=uri;css.rel='stylesheet';css.type='text/css';addCssOnload(css,callback);document.getElementsByTagName('head')[0].appendChild(css);};function addCssOnload(linkNode,callback){var missingOnload=isOldWebKit||!("onload"in linkNode);if(missingOnload){setTimeout(function(){pollCss(linkNode,callback);},1);return;}
linkNode.onload=linkNode.onerror=linkNode.onreadystatechange=function(){if(/^(?:loaded|complete|undefined)$/i.test(linkNode.readyState)){linkNode.onload=linkNode.onerror=linkNode.onreadystatechange=null;callback&&callback(linkNode);linkNode=null;}};}
var isOldWebKit=(String(navigator.userAgent).replace(/.*AppleWebKit\/(\d+)\..*/,"$1"))*1<536;function pollCss(node,callback){var sheet=node.sheet;var isLoaded;if(isOldWebKit){if(sheet){isLoaded=true;}}else if(sheet){try{if(sheet.cssRules){isLoaded=true;}}catch(ex){if(ex.name==="NS_ERROR_DOM_SECURITY_ERR"){isLoaded=true;}}}
setTimeout(function(){if(isLoaded){callback&&callback(node);}else{pollCss(node,callback);}},32)}
util.loadTheScript=function(uri,callback){var loadEvent={uri:uri};module.fire('loadScript',loadEvent);var script=document.createElement('script');script.setAttribute('type','text/javascript');script.onload=script.onerror=script.onreadystatechange=function(){if(/^(?:loaded|complete|undefined)$/i.test(script.readyState)){script.onload=script.onerror=script.onreadystatechange=null;script.parentNode.removeChild(script);script=null;if(module.anonymousMeta){var meta=module.anonymousMeta;module.define(util.reverVar(uri),meta.deps,meta.factory,meta.opt);module.anonymousMeta=null;}
callback&&callback(script);module.fire('loadedScript',{uri:uri});}};var head=document.getElementsByTagName("head")[0];script.src=util.replaceVar(loadEvent.uri);util.currentlyAddingScript=script;head.insertBefore(script,head.firstChild);util.currentlyAddingScript=null;};util.is=function(type){return function(obj){return Object.prototype.toString.call(obj)==="[object "+type+"]"}};util.replaceVar=function(uri){return uri.split('{uin}').join(util.getUin()).split('{gtk}').join(util.getToken());};util.reverVar=function(uri){return uri.replace(/([?#&]uin)=\d+/g,'$1={uin}').replace(/([?#&]g_tk)=\d+/g,'$1={gtk}');};util.getCurrentScript=function(){if(document.currentScript){return util.reverVar(document.currentScript.src);}
if(util.currentlyAddingScript){return util.reverVar(util.currentlyAddingScript.src);}
if(util.interactiveScript&&util.interactiveScript.readyState==="interactive"){return util.reverVar(util.interactiveScript.src);}
var head=document.getElementsByTagName("head")[0];var scripts=head.getElementsByTagName("script");for(var i=scripts.length-1;i>=0;i--){var script=scripts[i];if(script.readyState==="interactive"){util.interactiveScript=script;return util.reverVar(util.interactiveScript.src);}}}
util.isString=util.is("String");util.isFunction=util.is("Function");conf.base=conf.base||window.m_base||"";conf.base=conf.base?util.resolve(location.href,conf.base):location.href;conf.identifier=conf.identifier||'module';var lib={};lib.normalize=function(path){path=path.match(/^[^#]+/)[0];return path.indexOf("?")>0||/[^\/]+\.[^\/]+$/.test(path)||/\/$/.test(path)?path:path+".js"};lib.parseDeps=function(deps,baseURI){baseURI=baseURI||conf.base;if(util.isString(deps))deps=deps.match(/[^\s,]+/g)||[];deps=(deps||[]).slice(0);for(var i=0;i<deps.length;i++){deps[i]=lib.normalize(util.resolve(baseURI,deps[i]));}
return deps;};lib.loadCache=[];lib._loadAllScript=function(){var list=lib.loadCache;lib.loadCache=[];if(!list.length)return;if(list.length==1){util.loadTheScript(list[0].uri,list[0].callback);return;}
var s=[];for(var i=0;i<list.length;i++){var item=list[i];var pathname=item.uri.replace(/^[^\/]*\/\/[^\/]+/,'');pathname=pathname.replace(/[?#].*/,'');s.push(pathname);}
var host=list[0].uri.match(/^[^\/]+\/\/[^\/]+/)[0];util.loadTheScript(host+'/c/='+s.join(','),function(node){for(var i=0;i<list.length;i++){var item=list[i];item.callback&&item.callback(node);}});};lib.loadScript=function(uri,callback){var fn=arguments.callee;var loaded=fn.loaded;var loading=fn.loading;if(loaded[uri]){callback();return;}
loading[uri]=loading[uri]||[];callback&&loading[uri].push(callback);if(/^[^?#]*\.css([?#].*)?$/i.test(uri)){util.loadCss(uri,function(node){module.define(uri,function(){return node;},{storage:false});fn.done(uri,node);});}else{var onload=function(node){fn.done(uri,node);};if(conf.concat!==false&&uri.match(/:\/\/[^\/]+\.gtimg\.cn\//)){lib.loadCache.push({uri:uri,callback:onload});lib.loadScript.t=setTimeout(lib._loadAllScript,16);}else{util.loadTheScript(uri,onload);}}};lib.loadScript.done=function(uri,node){this.loaded[uri]=true;var loading=this.loading[uri]||[];while(loading.length){loading.shift()(node);}};lib.loadScript.loaded={};lib.loadScript.loading={};lib.allModule={};lib.getMondule=function(uri){return lib.allModule[uri]=(lib.allModule[uri]||new Module(uri));};lib.listUpdate=function(){var a=[""];for(var u in lib.allModule){var opt=lib.allModule[u].opt||{};var ver=opt.version||0;var name=u.replace(/\.js$/,'').replace(/.*?\.gtimg.cn/i,'');a.push('{{ver('+name+')}}');}
console.log(a.join("\r\n"));};function Module(uri){this.uri=uri;this.timing={create:new Date()};}
Module.prototype.load=function(){var me=this;this.timing.use=this.timing.use||new Date();if(this.loaded){module.checkTasks();return;}
this.waitting=true;if(this.defined){if(!this.loadDepends){this.loadDepends=true;this.timing.loadDepends=new Date();module.use(this.deps,function(){if(me.construct)return;me.construct=true;me.timing.construct=new Date();var ret=me.factory(me.require,me.exports,me);if(ret!=null){me.exports(ret);}});}
return;}
if(this.loading)return;this.loading=true;this.timing.load=new Date();module.fire('loading',{module:this});var isFromStorage=module.loadFromStorage(this);if(!isFromStorage){lib.loadScript(this.uri);}};Module.prototype.timeStat=function(eTimes,frequency,cmd){var rate=frequency||this.timeStatRate||0;if(rate<1)return;var self=this;module.use("/open/iot/common/widget/stat",function(stat){var zero=window.timeStart||(stat.getPerformanceTiming()||{}).responseStart;if(!zero)return;if(TIME_MODULE_START-zero<1)return;var times={'1001':{start:zero,end:TIME_MODULE_START},'1002':{start:TIME_MODULE_START,end:self.timing.use},'1003':{start:TIME_MODULE_START,end:self.timing.define},'1004':{start:self.timing.loadDepends,end:self.timing.construct},'1005':{start:self.timing.construct,end:self.timing.loaded}};if(eTimes){for(var p in eTimes)times[p]=eTimes[p];}
var cmdId=self.uri.replace(/[?#].*$/,'').replace(/.*?\/\/[^\/]*/,'').replace(/\.[^.]*$/,'');cmdId=cmdId.replace(/[^\w\/]/g,'_');cmdId=cmdId.split("index.html");while(cmdId.length>1&&cmdId.join('index.html').length>30)cmdId=cmdId.slice(1);cmd=cmd||cmdId.join('index.html').slice(-30);zero&&stat.mmTimeStat(1000117,cmd,zero,times,rate);});};var module={tasks:[],resolve:util.resolve,lib:lib,list:[],m:[],w:[],get:function(uri){return lib.getMondule(lib.normalize(util.resolve(conf.base,uri))).dataModule;},update:function(uri,versionCode){if(arguments.length==1){var map=arguments[1];for(var p in map){module.update(p,map[p]);}
return;}
try{uri=util.resolve(conf.base,uri);uri=lib.normalize(uri);var key="M["+uri+"]";m=localStorage.getItem(key);if(!m)return;try{m=JSON.parse(m);}catch(__){return localStorage.removeItem(key);}
if(m&&m.opt.version==versionCode)return;localStorage.removeItem(key);}catch(_){}},save:function(m){m.opt=m.opt||{};if(m.opt.fromLocalStorage)return;if(m.opt.storage===false)return;var key="M["+m.uri+"]";delete m.opt.fromLocalStorage;var value=JSON.stringify({uri:m.uri,deps:m.deps,factory:m.factory.toString(),opt:m.opt});try{localStorage.setItem(key,value);}catch(_){}},checkUpdate:function(m){var code=module.vMap||{};var uri=m.uri;uri=uri.replace(/^.*?\:\/\/[^\/]*\/|\.js$/gi,'')
var ary=uri.split('index.html');while(ary.length){code=code[ary.shift()];if(!code)return;}
module.update('/'+uri,code);},loadFromStorage:function(m){module.checkUpdate(m);var key="M["+m.uri+"]";try{var value=localStorage.getItem(key);var m=JSON.parse(value);if(m.uri&&m.deps&&m.factory){eval('m.factory = '+m.factory+';');m.opt=m.opt||{};m.opt.fromLocalStorage=true;module.define(m.uri,m.deps,m.factory,m.opt);return true}}catch(_){}
return false;}};try{if(conf.storage!==true||!window.localStorage){module.update=module.save=module.loadFromStorage=function(){return false;};}}catch(_){module.update=module.save=module.loadFromStorage=function(){return false;};}
var listeners={};module.on=function(name,handler){listeners[name]=listeners[name]||[];listeners[name].push(handler);};module.off=function(name,callback){if(!(name||callback)){listeners={};return;}
var list=listeners[name]
if(list){if(callback){for(var i=list.length-1;i>=0;i--){if(list[i]===callback){list.splice(i,1);}}}else{delete listeners[name];}}};module.fire=function(name,event){var list=listeners[name],fn;if(list){list=list.slice();while((fn=list.shift())){fn(event);}}};module.define=function(uri,deps,factory,opt){if(!uri){uri=util.getCurrentScript();if(!uri){module.anonymousMeta={deps:deps,factory:factory,opt:opt};return;}}
uri=util.resolve(conf.base,uri);uri=lib.normalize(uri);if(util.isFunction(deps)){opt=factory;factory=deps;deps=[];}
deps=deps.slice(0);factory.toString().replace(/require\s*\(\s*(["'])(.+?)\1\s*\)/g,function($,$1,$2){deps.push($2);});deps=util.unique(deps);opt=opt||{};var oModule=lib.getMondule(uri);oModule.opt=opt;if(!oModule.require){oModule.require=function(rURL){return module.get(util.resolve(uri,rURL));};oModule.require.async=function(modules,callback){modules=lib.parseDeps(modules,uri);return module.use(modules,callback);};oModule.exports=function(value){var f=arguments.callee;if(f.e)return;f.e=true;oModule.loaded=true;oModule.timing.loaded=new Date();oModule.dataModule=value;module.list.push(oModule.uri);module.w.push(oModule);module.m.push(value);module.checkTasks();setTimeout(function(){oModule.timeStat();},5000);};}
oModule.defined=true;oModule.timing.define=new Date();oModule.factory=factory;oModule.deps=lib.parseDeps(deps,uri);oModule.loading=false;module.fire('defined',{module:oModule});if(oModule.waitting){oModule.load();}
module.save(oModule);(conf.storage===true)&&module.use("/open/iot/common/widget/stat",function(stat){oModule.opt=oModule.opt||{};var code=oModule.opt.fromLocalStorage?1:2;try{if(!!window.localStorage){code+=10;}else{code+=20;}}catch(_){code+=20;}
stat.valueStat({domain:'open.qq.com',cgi:'/js-module/load-type',type:1,code:code,time:oModule.timing.define-(oModule.timing.load||TIME_MODULE_START)});});};module.use=function(modules,callback){callback=callback||function(){};modules=lib.parseDeps(modules);if(!modules.length){callback();return;}
module.tasks.push({modules:modules,callback:callback});for(var i=0;i<modules.length;i++){lib.getMondule(modules[i]).load();}};module.checkTasks=function(){var tasks=module.tasks;L:for(var i=0;i<tasks.length;i++){var task=tasks[i];var args=[];for(var x=0;x<task.modules.length;x++){if(module.get(task.modules[x])){args.push(module.get(task.modules[x]));}else{continue L;}}
tasks.splice(i--,1);task.callback.apply(null,args);}};module.loadScript=lib.loadScript;window[conf.identifier]=module;}();/*  |xGv00|d23454fb061449e3b125e1781f1e155b */;!function(){var module=window[(window.mmConf||{}).identifier||'module'];module.vMap={"open":{"iot":{"management":{"action":{"list-tmpl":747064338,"list":434636315,"list_add":1618297477,"list_add_uiSingleUpload":2028937157},"device":{"detail-tmpl":1777193506,"edit-tmpl":711298803,"list-tmpl":825453617,"add":1706793012,"detail":962017301,"edit":1872690044,"function-add":1794965690,"function-edit":101019214,"list":705023690},"trigger":{"list-add-tmpl":754155662,"list-tmpl":1630597284,"list":1247122965,"list_add":1197404249}},"management_v2":{"action":{"add-tmpl":156642589,"list-tmpl":1090897245,"add":1368528129,"list":1802933053,"list_add":1618297477,"list_add_uiSingleUpload":853644440},"device":{"add-tmpl":2117454036,"controller-tmpl":1137108963,"detail-tmpl":87351934,"edit-tmpl":241588277,"function-add-tmpl":1892148333,"list-tmpl":86147891,"add":77135764,"controller":503033066,"detail":907771468,"edit":1748174927,"function-add":932461184,"list":294315119,"ota-tmpl":200555159,"ota":1839421994},"trigger":{"list-add-tmpl":754155662,"list-tmpl":492978212,"list":2059133548,"list_add":147921221,"add-tmpl":217412502,"add":245157961},"common":{"header":1431472908,"header2":1594075597,"header2-tmpl":1866094250,"common-tmpl":2082916885,"common":605195777},"settings":{"cooperators-tmpl":308253436,"cooperators":1733213426}},"common":{"header":1082661102,"html5_3d_animation":541350115,"jquery-1_9_1":1081905680,"jquery_tablednd":138072605,"util":291931680,"my-tmpl":706369379,"frame":2030615605,"json":1386735779,"management-header":851864869,"opSelect":1065936527,"pager":1571917092,"popup":311226585,"qzfl":1978647451,"tips":282311732,"widget":{"apkUpload":1037721388,"calendar":828731828,"formUpload":902309624,"formUploader":137960859,"formValidate":960297621,"hash":1176585254,"json-for-ie":2039076055,"login":953499116,"md5":1568426164,"mobileFormValidate":1824929565,"mUploader":1905891359,"musicPlayer":991254147,"network":831178472,"scroller":432328030,"simple-placeholder":332498281,"stat":1529531043,"tcisd":1884493885,"uploader":881393216,"x-msg":1045666320},"appType":1306548974,"bootstrap-datetimepicker.min":1262180016,"bootstrap-datetimepicker.zh-CN":334350726,"bootstrap.min":1086689963,"jquery-ui":596595788,"jquery-ui.min":1226093223},"home":{"canvas_line":320676674,"introduction":942661634,"main":1494063792,"main_v2":1786370841,"reg":1063853369,"cooperation":1504855451,"cooperation-tmpl":1621264392,"regdev":1183195650,"common-tmpl":1085475442,"reg-list-tmpl":1672328140,"reg-list":1716671772,"reg-info":1988493360}}}};}();/*  |xGv00|6987828de14e8e18b8eae39f9643b37a */