function e(e,t,n,r,o,a,s){try{var i=e[a](s),c=i.value}catch(e){n(e);return}i.done?t(c):Promise.resolve(c).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var s=t.apply(n,r);function i(t){e(s,o,a,i,c,"next",t)}function c(t){e(s,o,a,i,c,"throw",t)}i(void 0)})}}function n(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var r,o,a=document.getElementsByTagName("body")[0],s=document.getElementsByClassName("logo")[0],i=document.createElement("div"),c=(r=t(function(){return n(this,function(e){try{i.classList.add("message"),i.textContent="Promise was resolved!"}catch(e){i.classList.add("message"),i.classList.add("error-message"),i.textContent="Promise was rejected!"}finally{a.appendChild(i)}return[2]})}),function(){return r.apply(this,arguments)}),u=(o=t(function(){return n(this,function(e){try{throw Error()}catch(e){setTimeout(function(){i.classList.add("message"),i.classList.add("error-message"),i.textContent="Promise was rejected!",a.appendChild(i)},3e3)}return[2]})}),function(){return o.apply(this,arguments)});s.addEventListener("click",function(){c(),u()});
//# sourceMappingURL=index.7f9afc3a.js.map
