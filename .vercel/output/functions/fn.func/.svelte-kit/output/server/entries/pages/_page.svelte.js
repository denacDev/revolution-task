import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../chunks/public.js";
const css = {
  code: ".content.svelte-pcynpp{max-width:700px;width:100%;margin:0px auto;padding:10px;display:flex;flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1prxlvo_START -->${$$result.title = `<title>Home page - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-1prxlvo_END -->`, ""} <div class="content svelte-pcynpp" data-svelte-h="svelte-1n8ojn6"><h1>home - page content</h1> </div>`;
});
export {
  Page as default
};
