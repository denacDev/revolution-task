import { c as create_ssr_component, a as subscribe, o as onDestroy, e as escape } from "../../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../../chunks/public.js";
import { p as pb } from "../../../../chunks/dbConnection.js";
import { w as writable } from "../../../../chunks/index2.js";
/* empty css                                                       */
import "../../../../chunks/client.js";
import "randombytes";
import "../../../../chunks/index.js";
const allSchedules = writable([]);
const css = {
  code: ".content.svelte-ztl7ip{position:relative}.center-of-page.svelte-ztl7ip{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:var(--site-gap-flex);height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_allSchedules;
  $$unsubscribe_allSchedules = subscribe(allSchedules, (value) => value);
  let { data } = $$props;
  onDestroy(() => {
    pb.collection("schedules").unsubscribe();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_allSchedules();
  return `${$$result.head += `<!-- HEAD_svelte-uqxn7k_START -->${$$result.title = `<title>Schedule Editor - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-uqxn7k_END -->`, ""} <div class="content container-fluid fill-height svelte-ztl7ip">${`<div class="center-of-page svelte-ztl7ip" data-svelte-h="svelte-32hux5"><img src="https://media1.tenor.com/m/-n8JvVIqBXkAAAAC/dddd.gif" alt="spinner" width="50px"> <div>loading data..</div></div>`} </div>`;
});
export {
  Page as default
};
