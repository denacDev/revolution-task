import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../chunks/public.js";
const css = {
  code: ".bg-body-tertiary.svelte-11fmqz1{display:flex !important;flex-direction:column !important}.lbl.svelte-11fmqz1{color:var(--bs-success)}.val.svelte-11fmqz1{color:var(--bs-black);font-size:smaller}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1s8bfy9_START -->${$$result.title = `<title>Features - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-1s8bfy9_END -->`, ""} <div class="content" data-svelte-h="svelte-1tcpwnm"><h2>Product features</h2> <p class="bg-body-tertiary border rounded-3 svelte-11fmqz1"><span class="lbl svelte-11fmqz1">Error Recovery:</span> <span class="val svelte-11fmqz1">World leading hardware error reporting and recovery</span></p> <p class="bg-body-tertiary border rounded-3 svelte-11fmqz1"><span class="lbl svelte-11fmqz1">Virtual Storage:</span> <span class="val svelte-11fmqz1">Join, split and partition incubators and plate hotels to best suit your usage.</span></p> <p class="bg-body-tertiary border rounded-3 svelte-11fmqz1"><span class="lbl svelte-11fmqz1">Unit Testing:</span> <span class="val svelte-11fmqz1">Over 5,000 unit tests, nightly builds and professional testing ensures our software is always reliable..</span></p> <p class="bg-body-tertiary border rounded-3 svelte-11fmqz1"><span class="lbl svelte-11fmqz1">Scalable:</span> <span class="val svelte-11fmqz1">Revolution supports systems of all sizes and complexities. From simple bench-top systems to large scale automation..</span></p> <p class="bg-body-tertiary border rounded-3 svelte-11fmqz1"><span class="lbl svelte-11fmqz1">Edit on the fly:</span> <span class="val svelte-11fmqz1">Make changes to protocols and schedules on the fly.</span></p> <p class="bg-body-tertiary border rounded-3 svelte-11fmqz1"><span class="lbl svelte-11fmqz1">3D simulator:</span> <span class="val svelte-11fmqz1">In built 3D simulator to aid schedule development.</span></p> <p class="bg-body-tertiary border rounded-3 svelte-11fmqz1"><span class="lbl svelte-11fmqz1">Simple licensing:</span> <span class="val svelte-11fmqz1">Revolution is licenced based on the devices of your system so you don&#39;t pay for anything you do not need.</span></p> </div>`;
});
export {
  Page as default
};
