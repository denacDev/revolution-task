import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-vj5kql_START -->${$$result.title = `<title>Simulation - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-vj5kql_END -->`, ""} <div class="content" data-svelte-h="svelte-aoxppe"><h1>Simulation - page content</h1></div>`;
});
export {
  Page as default
};
