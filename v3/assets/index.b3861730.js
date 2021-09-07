import{t as e,e as a,l as t,c as s,a as o}from"./use-translate.bf1abf23.js";import{c as l,w as r}from"./with-install.af140ae3.js";import{B as n,G as d,f as i,L as u,F as c,H as m,E as p,z as h,l as f,v as b,s as g,r as v,c as w,w as C,D as j,o as x}from"./vendor.09b5b9a9.js";import{u as y}from"./use-expose.028ef04d.js";import{A as D,a as S}from"./index.9031bbd5.js";import{C as A}from"./index.8591e547.js";import{F as R}from"./index.ce9148c1.js";import{P as B}from"./index.02c1c9ae.js";import{T as P}from"./function-call.2f25783d.js";import{B as F}from"./index.700b8aa4.js";import{D as M}from"./function-call.709dfb4c.js";import{S as V}from"./index.2749fd87.js";import"./deep-clone.be617e0e.js";import"./Picker.6e96f292.js";import"./constant.4d85ecb9.js";import"./event.7d40caae.js";import"./unit.36efb2dd.js";import"./index.4893bdc2.js";import"./number.b01aa591.js";import"./use-touch.871001cd.js";import"./useParent.60a302fe.js";import"./useChildren.692bc2bf.js";import"./index.5c6c3b01.js";import"./use-route.bc60204d.js";import"./index.5afcfd01.js";import"./index.e6355079.js";import"./interceptor.9b43abfe.js";import"./index.2baefb73.js";import"./utils.fd06bcd3.js";import"./index.e4b17f1e.js";import"./use-lazy-render.bae5ade9.js";import"./on-popup-reopen.d2d6f1c6.js";import"./index.bb1b1d01.js";import"./mount-component.14353bf5.js";import"./index.c08f3caa.js";const[k,N,I]=l("address-edit-detail");var L=n({name:k,props:{show:Boolean,value:String,focused:Boolean,detailRows:[Number,String],searchResult:Array,errorMessage:String,detailMaxlength:[Number,String],showSearchResult:Boolean},emits:["blur","focus","input","select-search"],setup(e,{emit:a}){const t=d(),s=()=>e.focused&&e.searchResult&&e.showSearchResult,o=()=>{if(!s())return;const{searchResult:t}=e;return t.map((t=>i(A,{clickable:!0,key:t.name+t.address,icon:"location-o",label:t.address,class:N("search-item"),border:!1,onClick:()=>(e=>{a("select-search",e),a("input",`${e.address||""} ${e.name||""}`.trim())})(t)},{title:()=>(a=>{if(a.name){const t=a.name.replace(e.value,`<span class=${N("keyword")}>${e.value}</span>`);return i("div",{innerHTML:t},null)}})(t)})))},l=e=>a("blur",e),r=e=>a("focus",e),n=e=>a("input",e);return()=>{if(e.show)return i(c,null,[i(R,u({autosize:!0,clearable:!0,ref:t,class:N(),rows:e.detailRows,type:"textarea",label:I("label"),border:!s(),maxlength:e.detailMaxlength,modelValue:e.value,placeholder:I("placeholder"),errorMessage:e.errorMessage,onBlur:l,onFocus:r},{"onUpdate:modelValue":n}),null),o()])}}});const[U,T,z]=l("address-edit"),E={name:"",tel:"",city:"",county:"",country:"",province:"",areaCode:"",isDefault:!1,postalCode:"",addressDetail:""};const $=r(n({name:U,props:{areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showArea:e,showDetail:e,showDelete:Boolean,showPostal:Boolean,disableArea:Boolean,searchResult:Array,telMaxlength:[Number,String],showSetDefault:Boolean,saveButtonText:String,areaPlaceholder:String,deleteButtonText:String,showSearchResult:Boolean,detailRows:{type:[Number,String],default:1},detailMaxlength:{type:[Number,String],default:200},addressInfo:{type:Object,default:()=>a({},E)},telValidator:{type:Function,default:t},postalValidator:{type:Function,default:function(e){return/^\d{6}$/.test(e)}},areaColumnsPlaceholder:{type:Array,default:()=>[]}},emits:["save","focus","delete","click-area","change-area","change-detail","cancel-delete","select-search","change-default"],setup(e,{emit:t,slots:o}){const l=d(),r=m({data:{},showAreaPopup:!1,detailFocused:!1,errorInfo:{tel:"",name:"",areaCode:"",postalCode:"",addressDetail:""}}),n=p((()=>s(e.areaList)&&Object.keys(e.areaList).length)),u=p((()=>{const{country:e,province:a,city:t,county:s,areaCode:o}=r.data;if(o){const o=[e,a,t,s];return a&&a===t&&o.splice(1,1),o.filter(Boolean).join("/")}return""})),c=p((()=>{var a;return(null==(a=e.searchResult)?void 0:a.length)&&r.detailFocused})),v=()=>{if(l.value){const e=l.value.getArea();e.areaCode=e.code,delete e.code,a(r.data,e)}},w=e=>{r.errorInfo[e]="",r.detailFocused="addressDetail"===e,t("focus",e)},C=()=>{const a=["name","tel"];e.showArea&&a.push("areaCode"),e.showDetail&&a.push("addressDetail"),e.showPostal&&a.push("postalCode");a.every((a=>{const t=(a=>{const t=String(r.data[a]||"").trim();if(e.validator){const s=e.validator(a,t);if(s)return s}switch(a){case"name":return t?"":z("nameEmpty");case"tel":return e.telValidator(t)?"":z("telInvalid");case"areaCode":return t?"":z("areaEmpty");case"addressDetail":return t?"":z("addressEmpty");case"postalCode":return t&&!e.postalValidator(t)?z("postalEmpty"):""}})(a);return t&&(r.errorInfo[a]=t),!t}))&&!e.isSaving&&t("save",r.data)},j=e=>{r.data.addressDetail=e,t("change-detail",e)},x=e=>{(e=e.filter(Boolean)).some((e=>!e.code))?P(z("areaEmpty")):(r.showAreaPopup=!1,v(),t("change-area",e))},S=()=>{M.confirm({title:z("confirmDelete")}).then((()=>t("delete",r.data))).catch((()=>t("cancel-delete",r.data)))},k=e=>{r.data.areaCode=e||"",e&&g(v)},N=()=>{setTimeout((()=>{r.detailFocused=!1}))},I=()=>{if(e.showSetDefault){const e={"right-icon":()=>i(V,{modelValue:r.data.isDefault,"onUpdate:modelValue":e=>r.data.isDefault=e,size:"24",onChange:e=>t("change-default",e)},null)};return f(i(A,{center:!0,title:z("defaultAddress"),class:T("default")},e),[[b,!c.value]])}return null};return y({getArea:()=>l.value?l.value.getValues():[],setAreaCode:k,setAddressDetail:e=>{r.data.addressDetail=e}}),h((()=>e.areaList),(()=>k(r.data.areaCode))),h((()=>e.addressInfo),(e=>{r.data=a({},E,e),k(e.areaCode)}),{deep:!0,immediate:!0}),()=>{var a;const{data:s,errorInfo:d}=r,{disableArea:m}=e;return i("div",{class:T()},[i("div",{class:T("fields")},[i(R,{modelValue:s.name,"onUpdate:modelValue":e=>s.name=e,clearable:!0,label:z("name"),placeholder:z("name"),errorMessage:d.name,onFocus:()=>w("name")},null),i(R,{modelValue:s.tel,"onUpdate:modelValue":e=>s.tel=e,clearable:!0,type:"tel",label:z("tel"),maxlength:e.telMaxlength,placeholder:z("tel"),errorMessage:d.tel,onFocus:()=>w("tel")},null),f(i(R,{readonly:!0,label:z("area"),"is-link":!m,modelValue:u.value,placeholder:e.areaPlaceholder||z("area"),errorMessage:d.areaCode,onFocus:()=>w("areaCode"),onClick:()=>{t("click-area"),r.showAreaPopup=!m}},null),[[b,e.showArea]]),i(L,{show:e.showDetail,value:s.addressDetail,focused:r.detailFocused,detailRows:e.detailRows,errorMessage:d.addressDetail,searchResult:e.searchResult,detailMaxlength:e.detailMaxlength,showSearchResult:e.showSearchResult,onBlur:N,onFocus:()=>w("addressDetail"),onInput:j,"onSelect-search":e=>t("select-search",e)},null),e.showPostal&&f(i(R,{modelValue:s.postalCode,"onUpdate:modelValue":e=>s.postalCode=e,type:"tel",label:z("postal"),maxlength:"6",placeholder:z("postal"),errorMessage:d.postalCode,onFocus:()=>w("postalCode")},null),[[b,!c.value]]),null==(a=o.default)?void 0:a.call(o)]),I(),f(i("div",{class:T("buttons")},[i(F,{block:!0,round:!0,type:"danger",text:e.saveButtonText||z("save"),class:T("button"),loading:e.isSaving,onClick:C},null),e.showDelete&&i(F,{block:!0,round:!0,class:T("button"),loading:e.isDeleting,text:e.deleteButtonText||z("delete"),onClick:S},null)]),[[b,!c.value]]),i(B,{show:r.showAreaPopup,"onUpdate:show":e=>r.showAreaPopup=e,round:!0,teleport:"body",position:"bottom",lazyRender:!1},{default:()=>[i(D,{ref:l,value:s.areaCode,loading:!n.value,areaList:e.areaList,columnsPlaceholder:e.areaColumnsPlaceholder,onConfirm:x,onCancel:()=>{r.showAreaPopup=!1}},null)]})])}}}));var H=n({setup(e){const a=o({"zh-CN":{areaColumnsPlaceholder:["请选择","请选择","请选择"],searchResult:[{name:"黄龙万科中心",address:"杭州市西湖区"},{name:"黄龙万科中心G座"},{name:"黄龙万科中心H座",address:"杭州市西湖区"}]},"en-US":{areaColumnsPlaceholder:["Choose","Choose","Choose"],searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}}),t=d([]),s=()=>P(a("save")),l=()=>P(a("delete")),r=e=>{t.value=e?a("searchResult"):[]};return(e,o)=>{const n=v("demo-block");return x(),w(n,{title:j(a)("basicUsage")},{default:C((()=>[i(j($),{"area-list":j(S),"show-postal":"","show-delete":"","show-set-default":"","show-search-result":"","search-result":t.value,"area-columns-placeholder":j(a)("areaColumnsPlaceholder"),onSave:s,onDelete:l,onChangeDetail:r},null,8,["area-list","search-result","area-columns-placeholder"])])),_:1},8,["title"])}}});export{H as default};