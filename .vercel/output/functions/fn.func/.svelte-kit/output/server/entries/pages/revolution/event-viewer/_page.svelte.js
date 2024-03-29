import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1tlbd30_START -->${$$result.title = `<title>Event Viewer - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-1tlbd30_END -->`, ""} <div class="content" data-svelte-h="svelte-1vc2tyt"><h1>Event Viewer - page content</h1></div>`;
});
export {
  Page as default
};
