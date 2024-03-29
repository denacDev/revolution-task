import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-r76b9g_START -->${$$result.title = `<title>Storage Manager - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-r76b9g_END -->`, ""} <div class="content" data-svelte-h="svelte-1a0kv0t"><h1>Storage Manager - page content</h1></div>`;
});
export {
  Page as default
};
