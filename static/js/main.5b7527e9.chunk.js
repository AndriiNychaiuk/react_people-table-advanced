(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{21:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(13),s=c.n(n),a=c(5),r=(c(21),c(2)),i=(c(22),c(1)),l=c(0),j=function(){return Object(l.jsx)("h1",{className:"has-text-centered is-uppercase is-size-2",children:"Home page"})},o=c(16),b=c(3),u=c(6),d=c.n(u),h=c(14),m=c.n(h),O=(c(35),c(36),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})});var p=function(e){var t=e.person,c=Object(r.f)().search;return Object(l.jsx)(a.b,{to:{pathname:"/people/".concat(t.slug),search:"".concat(c)},style:function(e){switch(e.sex){case"m":return{color:"rgb(0, 71, 171)"};case"f":return{color:"rgb(255, 0, 0)"};default:return{color:"inherit"}}}(t),children:t.name})},x=function(e){var t=e.person;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("th",{children:Object(l.jsx)(p,{person:t})}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("th",{children:t.mother?Object(l.jsx)(p,{person:t.mother}):t.motherName}),Object(l.jsx)("th",{children:t.father?Object(l.jsx)(p,{person:t.father}):t.fatherName})]})},f=function(e){var t=e.person,c=Object(r.h)().slug;return Object(l.jsx)("tr",{className:d()({"has-background-primary":t.slug===c,"has-background-white":!c}),children:Object(l.jsx)(x,{person:t})})},g=c(15),v=function(e){var t=e.people,c=e.onSetPeople,n=e.onFormVisible,s=Object(i.useState)(""),a=Object(b.a)(s,2),r=a[0],j=a[1],o=Object(i.useState)("m"),u=Object(b.a)(o,2),h=u[0],m=u[1],O=Object(i.useState)(""),p=Object(b.a)(O,2),x=p[0],f=p[1],v=Object(i.useState)(""),N=Object(b.a)(v,2),y=N[0],S=N[1],k=Object(i.useState)(""),C=Object(b.a)(k,2),w=C[0],_=C[1],E=Object(i.useState)(""),F=Object(b.a)(E,2),z=F[0],B=F[1],P=Object(i.useState)(!1),L=Object(b.a)(P,2),A=L[0],D=L[1],H=Object(i.useState)(!1),J=Object(b.a)(H,2),M=J[0],V=J[1],G=Object(i.useState)(!1),I=Object(b.a)(G,2),R=I[0],T=I[1],U=Object(i.useState)(!1),Y=Object(b.a)(U,2),q=Y[0],K=Y[1],Q=function(){r||D(!0),(+x<1400||+x>2022)&&V(!0),(+y<1400||+y>2022)&&T(!0),(+y-+x>150||y<x)&&K(!0)};return Object(l.jsx)("form",{action:"GET",className:"form is-flex is-justify-content-center",onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===z})),s=t.find((function(e){return e.name===w}));c([].concat(Object(g.a)(t),[{name:r,sex:h,born:+x,died:+y,fatherName:w,motherName:z,slug:"".concat(r.split(" ").join("-"),"-").concat(x),father:s||null,mother:n||null}])),j(""),m("m"),f(""),S(""),_(""),B("")},children:Object(l.jsxs)("nav",{className:"panel is-flex is-flex-direction-column",style:{width:"700px"},children:[Object(l.jsx)("p",{className:"panel-heading",children:"New person data"}),Object(l.jsxs)("div",{className:"is-flex is-flex-direction-column",style:{width:"600px"},children:[Object(l.jsxs)("div",{className:"panel-block is-flex is-justify-content-space-between",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:["Name:",Object(l.jsx)("input",{type:"text",value:r,className:d()("input",{"is-danger":A}),placeholder:"name",onBlur:Q,onChange:function(e){var t=e.target;j(t.value),D(!1)}})]}),A&&Object(l.jsx)("span",{children:"Enter the name"})]}),Object(l.jsxs)("div",{children:["Sex:",Object(l.jsxs)("span",{className:"panel-block",children:[Object(l.jsxs)("label",{className:"table__label is-capitalized",children:[Object(l.jsx)("input",{type:"radio",name:"sex",className:"radio",value:"f",onChange:function(){return m("f")}}),"female"]}),Object(l.jsxs)("label",{className:"table__label is-capitalized",children:[Object(l.jsx)("input",{type:"radio",name:"sex",className:"radio",value:"m",onChange:function(){return m("m")},checked:"m"===h}),"male"]})]})]})]}),Object(l.jsxs)("div",{className:"is-flex is-justify-content-space-between",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"panel-block",children:Object(l.jsxs)("span",{children:["Born in:",Object(l.jsx)("input",{type:"text",className:d()("input",{"is-danger":M||q}),value:x,onBlur:Q,onChange:function(e){var t=e.target;f(t.value.split("").filter((function(e){return"1234567890".includes(e)})).join("")),V(!1),K(!1)}})]})}),M&&Object(l.jsx)("span",{children:"Enter birth year (between 1400 and 2022)"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"panel-block",children:Object(l.jsxs)("span",{children:["Died in:",Object(l.jsx)("input",{type:"text",className:d()("input",{"is-danger":R||q}),value:y,onBlur:Q,onChange:function(e){var t=e.target;S(t.value.split("").filter((function(e){return"1234567890".includes(e)})).join("")),T(!1),K(!1)},disabled:!x})]})}),R&&Object(l.jsx)("span",{children:"Enter death year (between 1400 and 2022)"})]})]}),q&&Object(l.jsx)("span",{children:"Years difference can not be more 150 or less 0"}),Object(l.jsxs)("div",{className:"is-flex is-justify-content-space-between",children:[Object(l.jsx)("p",{className:"panel-block",children:Object(l.jsxs)("span",{children:["Father:",Object(l.jsx)("input",{type:"text",className:"input",value:w,onChange:function(e){var t=e.target;return _(t.value)}})]})}),Object(l.jsx)("p",{className:"panel-block",children:Object(l.jsxs)("span",{children:["Mother:",Object(l.jsx)("input",{type:"text",className:"input",value:z,onChange:function(e){var t=e.target;return B(t.value)}})]})})]}),Object(l.jsxs)("div",{className:"panel-block",children:[Object(l.jsx)("button",{type:"submit",className:"button is-link is-outlined is-fullwidth",disabled:!r||!x||!y||q,children:"Add new person"}),Object(l.jsx)("button",{type:"button",className:"button",onClick:n,children:"Close form"})]})]})]})})},N=function(){var e=Object(i.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(""),a=Object(b.a)(s,2),j=a[0],u=a[1],h=Object(i.useState)("desc"),p=Object(b.a)(h,2),x=p[0],g=p[1];Object(i.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(o.a)({},e)}));t.forEach((function(e){Object.assign(e,{mother:t.find((function(t){return t.name===e.motherName}))||null,father:t.find((function(t){return t.name===e.fatherName}))||null})})),n(t)}))}),[]);var N=Object(r.g)(),y=Object(r.f)(),S=new URLSearchParams(y.search),k=S.get("slug")||"",C=Object(i.useState)(k),w=Object(b.a)(C,2),_=w[0],E=w[1],F=Object(i.useCallback)(m()((function(e){e?S.set("slug",e):S.delete("slug"),N("?".concat(S),{replace:!0})}),500),[]),z=Object(i.useState)(!0),B=Object(b.a)(z,2),P=B[0],L=B[1],A=function(){P?S.set("form","".concat(P)):S.delete("form"),L(!P),N("?".concat(S),{replace:!0})},D=function(e){S.set("sortBy",e.target.value),N("?".concat(S),{replace:!0}),u(e.target.value)},H=function(){S.set("sortOrder",x),N("?".concat(S),{replace:!0}),"asc"===x&&g("desc"),"desc"===x&&g("asc")};Object(i.useEffect)((function(){g("asc")}),[j]);var J=function(e){return e?e.toLocaleLowerCase():""},M=J(k),V=c.filter((function(e){return J(e.name).includes(M)||J(e.motherName).includes(M)||J(e.fatherName).includes(M)})).sort((function(e,t){return function(c){switch(y.search.includes(c)){case"name"===c:return"asc"===x?e.name.localeCompare(t.name):t.name.localeCompare(e.name);case"sex"===c:return"asc"===x?e.sex.localeCompare(t.sex):t.sex.localeCompare(e.sex);case"born"===c:return"asc"===x?e.born-t.born:t.born-e.born;case"died"===c:return"asc"===x?e.died-t.died:t.died-e.died;default:return 0}}(j)})),G=function(e){return Object(l.jsx)("th",{className:d()({"has-background-primary-light":j===e}),children:Object(l.jsxs)("label",{className:"table__label is-capitalized",children:[Object(l.jsx)("input",{type:"radio",name:"head",className:"table__radio",value:e,onChange:D,onClick:H,checked:e===j}),e,"asc"===x&&e===j&&Object(l.jsx)("img",{src:"images/sort_asc.png",alt:"sortAsc"}),"desc"===x&&e===j&&Object(l.jsx)("img",{src:"images/sort_desc.png",alt:"sortDesc"}),e!==j&&Object(l.jsx)("img",{src:"images/sort_both.png",alt:"notSorted"})]})})};return Object(i.useEffect)((function(){y.search.includes(j)||u("")}),[y.search]),0===c.length?Object(l.jsx)(O,{}):Object(l.jsxs)("div",{className:"is-flex is-flex-direction-column",children:[!y.search.includes("form")&&Object(l.jsx)("button",{type:"button",className:"button is-info",onClick:A,children:"New person form"}),y.search.includes("form")&&Object(l.jsx)(v,{people:c,onSetPeople:n,onFormVisible:A}),Object(l.jsxs)("div",{className:"is-flex is-align-items-center",children:["Filter:",Object(l.jsx)("input",{type:"text",className:"input is-rounded",placeholder:"Search",value:_,onChange:function(e){E(e.target.value),F(e.target.value)}})]}),Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[G("name"),G("sex"),G("born"),G("died"),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:V.map((function(e){return Object(l.jsx)(f,{person:e,columnHighlight:j},e.slug)}))})]})]})},y=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"has-text-centered is-uppercase is-size-2",children:"People page"}),Object(l.jsx)(N,{})]})},S=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"has-text-centered is-uppercase is-size-2",children:"Page not found"})})},k=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"is-flex is-justify-content-space-evenly",children:[Object(l.jsx)(a.c,{to:"/",className:"navbar-item is-tab",children:"Home"}),Object(l.jsx)(a.c,{to:"/people",className:"navbar-item is-tab",children:"People"})]}),Object(l.jsx)("main",{className:"is-flex is-flex-direction-column is-align-items-center",children:Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{path:"/",element:Object(l.jsx)(j,{})}),Object(l.jsxs)(r.b,{path:"/people",children:[Object(l.jsx)(r.b,{index:!0,element:Object(l.jsx)(y,{})}),Object(l.jsx)(r.b,{path:":slug",element:Object(l.jsx)(y,{})})]}),Object(l.jsx)(r.b,{path:"/home",element:Object(l.jsx)(r.a,{to:"/"})}),Object(l.jsx)(r.b,{path:"*",element:Object(l.jsx)(S,{})})]})})]})};s.a.render(Object(l.jsx)(a.a,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5b7527e9.chunk.js.map