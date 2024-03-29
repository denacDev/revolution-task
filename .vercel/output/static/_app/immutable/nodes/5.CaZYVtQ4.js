import{s as c,n as s}from"../chunks/scheduler.B_OghNyv.js";import{S as d,i as p,s as h,e as u,k as m,d as n,f as g,c as v,l as f,m as b,g as r}from"../chunks/index.C9ik1EU3.js";import{P as _}from"../chunks/public.D4yePgXC.js";function x(l){let o,e,i='<h2>Frequently Asked Questions</h2> <div class="accordion" id="faqs"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed svelte-1je8kz4" type="button" data-bs-toggle="collapse" data-bs-target="#installRevolution" aria-expanded="false" aria-controls="installRevolution">How do i install Revolution</button></h2> <div id="installRevolution" class="accordion-collapse collapse" data-bs-parent="#faqs"><div class="accordion-body"><p class="box"><strong>1. Install a database</strong> - Revolution requires Mongo DB. Mongo DB stores data from runs and also data regarding plate barcodes and plate locations. Download from <a href="https://www.mongodb.org/dl/win32/">here</a>.</p> <p class="box"><strong>2. Execute the <i>installservice.bat</i></strong> - found in the installation path of MongoDB.</p> <p class="box"><strong>3. Reboot the computer</strong> - Rebooting the computer, ensures that the MongoDB service will start properly(recomended to check).</p> <p class="box"><strong>4. Install Revolution</strong> - UK Robotics will provide the installer.</p></div></div></div> <div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed svelte-1je8kz4" type="button" data-bs-toggle="collapse" data-bs-target="#errorHanler" aria-expanded="false" aria-controls="errorHanler">How do i know if a device initialization or schedule execution failed ?</button></h2> <div id="errorHanler" class="accordion-collapse collapse" data-bs-parent="#faqs"><div class="accordion-body"><p><strong>Error Handler</strong> - An important feature of the core scheduler and the application interface. It prompts the user with the maximum ammount of information in case there is any error either if a deice failed to initialise or during schedule execution an error message will be added to the “Error Handler” tool window at the bottom of the main application.</p> <p><img class="img-show svelte-1je8kz4" src="https://ukrobotics.tech/docs/revolution/error-handling/error-handling-2_hu2d094e4a5792ac8f2494f999d5e75dc9_70901_700x0_resize_box_2.png" alt=""/></p></div></div></div></div>';return document.title="FAQs - "+_,{c(){o=h(),e=u("div"),e.innerHTML=i,this.h()},l(t){m("svelte-1qxlcy3",document.head).forEach(n),o=g(t),e=v(t,"DIV",{class:!0,"data-svelte-h":!0}),f(e)!=="svelte-1t614w2"&&(e.innerHTML=i),this.h()},h(){b(e,"class","content")},m(t,a){r(t,o,a),r(t,e,a)},p:s,i:s,o:s,d(t){t&&(n(o),n(e))}}}class R extends d{constructor(o){super(),p(this,o,null,x,c,{})}}export{R as component};
