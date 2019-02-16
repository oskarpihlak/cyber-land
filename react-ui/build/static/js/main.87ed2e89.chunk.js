(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){e.exports=n.p+"static/media/Cyber-Security-PNG-Background-Image.a6cdd4bd.png"},109:function(e,t,n){},110:function(e,t,n){e.exports=n.p+"static/media/cypto1.457b8dd6.jpg"},111:function(e,t,n){e.exports=n.p+"static/media/crypto2.9eaceb2c.jpg"},112:function(e,t,n){e.exports=n.p+"static/media/crypto3.988f840d.jpg"},113:function(e,t,n){},117:function(e,t){},119:function(e,t){},154:function(e,t){},155:function(e,t){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(89),r=n.n(c),i=(n(97),n(9)),o=n(10),l=n(12),p=n(11),u=n(13),h=n(22),m=(n(102),n(103),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"heading"},s.a.createElement("div",{className:"introduction"},s.a.createElement("img",{src:n(104),alt:"cyber security logo",className:"introduction__img"})))}}]),t}(a.Component)),y=n(51),d=n.n(y),f="OTP",g="MD5",E=(n(109),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.initialState()}},{key:"render",value:function(){var e=this;return console.log(this.props),s.a.createElement("div",{className:"cyphers"},s.a.createElement("div",{className:"cypher"},s.a.createElement("img",{src:n(110),alt:"House1",className:"cypher__img"}),s.a.createElement("h5",{className:"cypher__name"},"OPT"),s.a.createElement("div",{className:"cypher__description"},s.a.createElement("p",null,"Encryption technique that cannot be cracked, but requires the use of a one-time pre-shared key the same size as, or longer than, the message being sent.")),this.props.cryptionType===f?s.a.createElement("div",{className:"toggle-cryption"},s.a.createElement(d.a,{defaultChecked:this.props.optEncrypt,icons:{checked:null,unchecked:null},onChange:function(){return e.props.changeCryption(e.props.optEncrypt)}}),s.a.createElement("span",{className:"crypt-state"},this.props.optEncrypt?"Encript":"Decrypt")):null,s.a.createElement("button",{className:"btn cypher__btn "+(this.props.cryptionType===f?"cypher__btn--selected":null),onClick:function(){e.props.changeCryptionType(f)}},this.props.cryptionType===f?"Selected":"Choose")),s.a.createElement("div",{className:"cypher"},s.a.createElement("img",{src:n(111),alt:"House1",className:"cypher__img"}),s.a.createElement("h5",{className:"cypher__name"},"SHA-2"),s.a.createElement("div",{className:"cypher__description"},"A set of cryptographic hash functions designed by the United States National Security Agency (NSA). They are built using the Merkle\u2013Damg\xe5rd structure, from a one-way compression function itself built using the Davies\u2013Meyer structure from a (classified) specialized block cipher."),s.a.createElement("button",{className:"btn cypher__btn "+("SHA2"===this.props.cryptionType?"cypher__btn--selected":null),onClick:function(){e.props.changeCryptionType("SHA2")}},"SHA2"===this.props.cryptionType?"Selected":"Choose")),s.a.createElement("div",{className:"cypher"},s.a.createElement("img",{src:n(112),alt:"MD5",className:"cypher__img"}),s.a.createElement("h5",{className:"cypher__name"},"MD5"),s.a.createElement("p",{className:"cypher__description"},"Widely used hash function producing a 128-bit hash value. Although MD5 was initially designed to be used as a cryptographic hash function, it has been found to suffer from extensive vulnerabilities. It can still be used as a checksum to verify data integrity, but only against unintentional corruption."),this.props.cryptionType===g?s.a.createElement("div",{className:"toggle-cryption"},s.a.createElement(d.a,{defaultChecked:this.props.optEncrypt,icons:{checked:null,unchecked:null},onChange:function(){return e.props.changeCryption(e.props.optEncrypt)}}),s.a.createElement("span",{className:"crypt-state"},this.props.optEncrypt?"Encript":"Decrypt")):null,s.a.createElement("button",{className:"btn cypher__btn "+(this.props.cryptionType===g?"cypher__btn--selected":null),onClick:function(){e.props.changeCryptionType(g)}},this.props.cryptionType===g?"Selected":"Choose")))}}]),t}(a.Component)),b=Object(h.b)(function(e){return{optEncrypt:e.encrypt.optEncrypt,cryptionType:e.encrypt.cryptionType}},{changeCryption:function(e){return function(t){console.log("".concat(e," => ").concat(!e)),t({type:"CHANGE_CRYPTION",payload:!e})}},initialState:function(){return function(e){e({type:"INITIAL_STATE"})}},changeCryptionType:function(e){return function(t){t({type:"CHANGE_CRYPTION_TYPE",payload:e})}}})(E),v=n(35),_=n(6),N=(n(113),n(114)),O=n(201),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={message:null,key:null,result:{elapsed:"",str:""},alphabet:"abcdefghijklmnopqrstuvwxyz",loading:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"updateCryptData",value:function(e){this.setState(Object(_.a)({},this.state,Object(v.a)({},e,document.querySelector("#cryption-".concat(e)).value.toLowerCase())))}},{key:"chooseCription",value:function(){switch(this.props.cryptionType){case f:this.otpCryption();break;case"SHA2":this.sha2Encription();break;case g:this.md5Encription();break;default:return null}return null}},{key:"otpCryption",value:function(){if(this.state.message&&this.state.key)if(this.props.optEncrypt){if(this.state.message.length===this.state.key.length&&this.state.message.length>0){for(var e="",t=0;t<this.state.message.length;t++){var n=(this.state.alphabet.indexOf(this.state.message[t])+this.state.alphabet.indexOf(this.state.key[t]))%26;e+=this.state.alphabet[n]}this.setState(Object(_.a)({},this.state,{result:{str:e,elapsed:null}}))}}else{for(var a="",s=0;s<this.state.message.length;s++){var c=this.state.alphabet.indexOf(this.state.message[s])-this.state.alphabet.indexOf(this.state.key[s]);c<0&&(c+=26),a+=this.state.alphabet[c%26]}this.setState(Object(_.a)({},this.state,{result:{str:a,elapsed:null}}))}else this.setState(Object(_.a)({},this.state,{result:{str:"INVALID REQUEST",elapsed:null}}))}},{key:"sha2Encription",value:function(){this.setState(Object(_.a)({},this.state,{result:{str:btoa(O("hello")),elapsed:null}}))}},{key:"md5Encription",value:function(){var e=this;if(this.props.optEncrypt){var t=N.createHash("md5").update(this.state.message).digest("hex",this.state.message);this.setState(Object(_.a)({},this.state,{result:{str:t,elapsed:null}}))}else this.setState(Object(_.a)({},this.state,{result:{str:"",elapsed:null},loading:!0})),fetch("/api/md5/decrypt/".concat(this.state.message),{method:"POST"}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState(Object(_.a)({},e.state,{result:{str:t.str,elapsed:t.elapsed+"s"},loading:!1}))}).catch(function(t){console.log(t.toString()),console.log(JSON.stringify(t)),e.setState(Object(_.a)({},e.state,{result:{str:"ERROR!",elapsed:null},loading:!1}))})}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"description-grid"},s.a.createElement("div",{className:"description-grid__item--1"},s.a.createElement("div",{className:"description-grid__img"})),s.a.createElement("div",{className:"description-grid__item--2"},s.a.createElement("p",{className:"cryption__mode"},this.props.cryptionType," ",this.props.cryptionType===f||this.props.cryptionType===g?" - "+(this.props.optEncrypt?"encrypt":"decrypt"):null),s.a.createElement("input",{id:"cryption-message",className:"description-grid__message",placeholder:"Cryption message",type:"text",onChange:function(){e.updateCryptData("message")}}),this.props.cryptionType===f?s.a.createElement("input",{id:"cryption-key",className:"description-grid__key",placeholder:"Cryption key",type:"text",onChange:function(){e.updateCryptData("key")}}):null,s.a.createElement("button",{className:"btn__execute",onClick:function(){e.chooseCription()}},"Execute"),s.a.createElement("div",{className:"cryption-result"},console.log(this.state.result),this.state.loading?s.a.createElement("div",{className:"lds-ripple"},s.a.createElement("div",null," "),s.a.createElement("div",null," ")):null,this.props.cryptionType!==g||this.props.optEncrypt?s.a.createElement("p",null,this.state.result.str):s.a.createElement("p",null,this.state.result.elapsed,s.a.createElement("br",null),this.state.result.str))))}}]),t}(a.Component),j=Object(h.b)(function(e){return{optEncrypt:e.encrypt.optEncrypt,cryptionType:e.encrypt.cryptionType}})(k),C=(n(203),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("ul",{className:"nav"},s.a.createElement("li",{className:"nav__item"},s.a.createElement("a",{href:"#",className:"nav__link"},"Find your favourite encryption")),s.a.createElement("li",{className:"nav__item"},s.a.createElement("a",{href:"#",className:"nav__link"},"Request proposal")),s.a.createElement("li",{className:"nav__item"},s.a.createElement("a",{href:"#",className:"nav__link"},"Download hash planner")),s.a.createElement("li",{className:"nav__item"},s.a.createElement("a",{href:"#",className:"nav__link"},"Submit your public key")),s.a.createElement("li",{className:"nav__item"},s.a.createElement("a",{href:"#",className:"nav__link"},"Come work with us"))))}}]),t}(a.Component)),T=(n(204),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("ul",{className:"nav-head"},s.a.createElement("li",{className:"nav-head__item nav-head__link"},"Welcome")))}}]),t}(a.Component)),w=n(17),S=n(91),A={optEncrypt:!0,cryptionType:f},x=Object(w.c)({encrypt:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CRYPTION":return Object(_.a)({},e,{optEncrypt:t.payload});case"CHANGE_CRYPTION_TYPE":return Object(_.a)({},e,{cryptionType:t.payload});case"INITIAL_STATE":default:return e}}}),I=Object(w.a)(S.a),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.d,H=Object(w.e)(x,D(I)),P=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,{store:H},s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement(T,null),s.a.createElement(m,null),s.a.createElement(j,null),s.a.createElement(b,null),s.a.createElement(C,null))))}}]),t}(a.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(s.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");R?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):M(e)})}}()},92:function(e,t,n){e.exports=n(205)},97:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.87ed2e89.chunk.js.map