(this.webpackJsonprockstone=this.webpackJsonprockstone||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(5),i=n.n(s),r=(n(18),n(2)),o=n(12),u=n(25),l=n(24),j=n(1);function d(e){var t=e.handlerButton,n=e.value,a=e.handlerTextarea;return Object(j.jsxs)("form",{className:"form",required:!0,children:[Object(j.jsx)("textarea",{className:"form__text",value:n,onInput:a,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(j.jsx)("button",{className:"form__button",type:"button",onClick:t,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}function m(e){var t=e.message;return Object(j.jsx)("li",{className:"message-items",children:Object(j.jsx)("p",{className:"message-items__message",children:t})})}function h(e){var t=e.style,n=c.a.useState(""),a=Object(r.a)(n,2),s=a[0],i=a[1];return c.a.useEffect((function(){setInterval((function(){i((new Date).toLocaleTimeString())}),1e3)})),Object(j.jsx)("section",{className:"time",style:t,children:Object(j.jsx)("div",{className:"time__items",children:Object(j.jsx)("p",{className:"time__text",children:s})})})}function b(e){var t=e.swipe,n=e.width,a=c.a.useState([]),s=Object(r.a)(a,2),i=s[0],b=s[1],f=c.a.useState(""),O=Object(r.a)(f,2),x=O[0],v=O[1];return Object(j.jsxs)("div",{className:"main",style:t,children:[Object(j.jsxs)("div",{className:"main__items",style:n,children:[Object(j.jsx)(d,{handlerButton:function(e){e.preventDefault(),b([].concat(Object(o.a)(i),[x])),v("")},value:x,handlerTextarea:function(e){v(e.target.value)}}),Object(j.jsx)(u.a,{component:"ul",className:"main__messages",children:i.map((function(e,t){return Object(j.jsx)(l.a,{classNames:"my-node",timeout:700,children:Object(j.jsx)(m,{message:e},t)},t)}))})]}),Object(j.jsx)(h,{style:n})]})}var f=function(){var e=c.a.useState(0),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(0),i=Object(r.a)(s,2),o=i[0],u=i[1],l=c.a.useState(0),d=Object(r.a)(l,2),m=d[0],h=d[1],f=c.a.useState(window.innerWidth),O=Object(r.a)(f,2),x=O[0],v=O[1];function g(){v(window.innerWidth)}return c.a.useEffect((function(){window.addEventListener("resize",g)}),[]),Object(j.jsx)("div",{className:"page",children:Object(j.jsx)("div",{className:"page__container",onTouchStart:function(e){u(e.targetTouches[0].clientX)},onTouchMove:function(e){h(e.targetTouches[0].clientX)},onTouchEnd:function(){n<x&&o-m>60&&a((function(e){return e+x})),n>0&&o-m<-60&&a((function(e){return e-x}))},children:Object(j.jsx)(b,{swipe:{right:"".concat(n,"px")},width:{minWidth:"".concat(x,"px")}})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),O()}},[[22,1,2]]]);
//# sourceMappingURL=main.209c6fde.chunk.js.map