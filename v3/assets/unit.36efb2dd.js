import{i as n,h as e,b as t}from"./use-translate.bf1abf23.js";function r(t){if(n(t))return e(t)?`${t}px`:String(t)}function i(e){if(n(e)){const n=r(e);return{width:n,height:n}}}function u(n){const e={};return void 0!==n&&(e.zIndex=+n),e}let o;function f(n){return+(n=n.replace(/rem/g,""))*function(){if(!o){const n=document.documentElement,e=n.style.fontSize||window.getComputedStyle(n).fontSize;o=parseFloat(e)}return o}()}function c(n){if("number"==typeof n)return n;if(t){if(n.includes("rem"))return f(n);if(n.includes("vw"))return function(n){return+(n=n.replace(/vw/g,""))*window.innerWidth/100}(n);if(n.includes("vh"))return function(n){return+(n=n.replace(/vh/g,""))*window.innerHeight/100}(n)}return parseFloat(n)}export{r as a,u as b,i as g,c as u};