import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-rq1dmy_START -->${$$result.title = `<title>Object Manager - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-rq1dmy_END -->`, ""} <div class="content" data-svelte-h="svelte-ub04ez"><h1>Object Manager - page content</h1></div>`;
});
export {
  Page as default
};
