import{s as H,n as S}from"./scheduler.B_OghNyv.js";import{S as J,i as K,s as E,e as _,t as j,f as I,c as v,a as y,d as u,b as N,m as r,g as p,h as g,j as B,l as Y}from"./index.C9ik1EU3.js";function F(i){let e;return{c(){e=_("div"),this.h()},l(l){e=v(l,"DIV",{class:!0}),y(e).forEach(u),this.h()},h(){r(e,"class","spacer-y")},m(l,t){p(l,e,t)},d(l){l&&u(e)}}}function G(i){let e;function l(a,h){if(a[3]=="login")return P;if(a[3]=="new-list")return O;if(a[3]=="new-group")return L}let t=l(i),s=t&&t(i);return{c(){e=_("div"),s&&s.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var h=y(e);s&&s.l(h),h.forEach(u),this.h()},h(){r(e,"class","actions")},m(a,h){p(a,e,h),s&&s.m(e,null)},p(a,h){t!==(t=l(a))&&(s&&s.d(1),s=t&&t(a),s&&(s.c(),s.m(e,null)))},d(a){a&&u(e),s&&s.d()}}}function L(i){let e,l="new group";return{c(){e=_("a"),e.textContent=l,this.h()},l(t){e=v(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-fpmbwk"&&(e.textContent=l),this.h()},h(){r(e,"href","/groups/new"),r(e,"class","btn btn-outline-primary")},m(t,s){p(t,e,s)},d(t){t&&u(e)}}}function O(i){let e,l="new list";return{c(){e=_("a"),e.textContent=l,this.h()},l(t){e=v(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-1bt5kls"&&(e.textContent=l),this.h()},h(){r(e,"href","/lists/new"),r(e,"class","btn btn-outline-primary")},m(t,s){p(t,e,s)},d(t){t&&u(e)}}}function P(i){let e,l="login";return{c(){e=_("a"),e.textContent=l,this.h()},l(t){e=v(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-e6a7w0"&&(e.textContent=l),this.h()},h(){r(e,"href","/login"),r(e,"class","btn btn-outline-primary")},m(t,s){p(t,e,s)},d(t){t&&u(e)}}}function Q(i){let e,l,t,s,a,h,m,b,f,D,k,w,C,V,o=i[4]&&F(),c=i[3]!=null&&G(i);return{c(){o&&o.c(),e=E(),l=_("div"),t=_("div"),s=_("i"),h=E(),m=_("div"),b=j(i[1]),D=E(),k=_("div"),w=_("div"),C=j(i[2]),V=E(),c&&c.c(),this.h()},l(n){o&&o.l(n),e=I(n),l=v(n,"DIV",{class:!0});var d=y(l);t=v(d,"DIV",{class:!0});var q=y(t);s=v(q,"I",{class:!0}),y(s).forEach(u),h=I(q),m=v(q,"DIV",{class:!0});var A=y(m);b=N(A,i[1]),A.forEach(u),q.forEach(u),D=I(d),k=v(d,"DIV",{class:!0});var z=y(k);w=v(z,"DIV",{class:!0});var M=y(w);C=N(M,i[2]),M.forEach(u),V=I(z),c&&c.l(z),z.forEach(u),d.forEach(u),this.h()},h(){r(s,"class",a="bi "+i[5]+" "+i[0]+" svelte-1ouz6qe"),r(m,"class",f="card-top-left-text "+i[0]+" svelte-1ouz6qe"),r(t,"class","card-top svelte-1ouz6qe"),r(w,"class","message svelte-1ouz6qe"),r(k,"class","card-bottom svelte-1ouz6qe"),r(l,"class","card card-on-top bg-body-tertiary border rounded-3 shadow-sm svelte-1ouz6qe")},m(n,d){o&&o.m(n,d),p(n,e,d),p(n,l,d),g(l,t),g(t,s),g(t,h),g(t,m),g(m,b),g(l,D),g(l,k),g(k,w),g(w,C),g(k,V),c&&c.m(k,null)},p(n,[d]){n[4]?o||(o=F(),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),d&33&&a!==(a="bi "+n[5]+" "+n[0]+" svelte-1ouz6qe")&&r(s,"class",a),d&2&&B(b,n[1]),d&1&&f!==(f="card-top-left-text "+n[0]+" svelte-1ouz6qe")&&r(m,"class",f),d&4&&B(C,n[2]),n[3]!=null?c?c.p(n,d):(c=G(n),c.c(),c.m(k,null)):c&&(c.d(1),c=null)},i:S,o:S,d(n){n&&(u(e),u(l)),o&&o.d(n),c&&c.d()}}}function R(i,e,l){let{type:t="info"}=e,{title:s="message title"}=e,{message:a="message body"}=e,{action:h=null}=e,{spaceY:m=!0}=e,b="info";switch(t){case"info":b="bi-info-circle-fill";break;case"success":b="bi-check-circle-fill";break;case"warning":b="bi-exclamation-circle-fill";break;case"danger":b="bi-sign-stop-fill";break;default:alert("check type of message");break}return i.$$set=f=>{"type"in f&&l(0,t=f.type),"title"in f&&l(1,s=f.title),"message"in f&&l(2,a=f.message),"action"in f&&l(3,h=f.action),"spaceY"in f&&l(4,m=f.spaceY)},[t,s,a,h,m,b]}class W extends J{constructor(e){super(),K(this,e,R,Q,H,{type:0,title:1,message:2,action:3,spaceY:4})}}export{W as M};