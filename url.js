// protocol / auth / host / path & Query
const url = require('url');
const uobj=url.parse('https://www.amazon.in:8888/mobile/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=610644601173&hvpos=&hvnetw=g&hvrand=18109230514291977048&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061750&hvtargid=kwd-10573980&hydadcr=14453_2316415');

console.log(uobj.host); //HostName+port
console.log(uobj.hostname);
console.log(uobj.port);
console.log(uobj.path); // PathName + Query
console.log(uobj.pathname);
console.log(uobj.query); 
console.log(uobj.protocol);