import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-k3g6x7_START -->${$$result.title = `<title>Device Manager - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-k3g6x7_END -->`, ""} <div class="content" data-svelte-h="svelte-19zgk08"><h1>Device Manager - page content</h1></div>`;
});
export {
  Page as default
};
