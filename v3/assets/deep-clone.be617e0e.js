import{i as r}from"./use-translate.bf1abf23.js";function t(e){if(!r(e))return e;if(Array.isArray(e))return e.map((r=>t(r)));if("object"==typeof e){const r={};return Object.keys(e).forEach((a=>{r[a]=t(e[a])})),r}return e}export{t as d};