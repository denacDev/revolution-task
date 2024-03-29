import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../chunks/public.js";
const css = {
  code: ".my-0.svelte-9w8g6m{color:var(--bs-success)}.cards.svelte-9w8g6m{display:flex;flex-direction:column;align-items:center;gap:10px}.card-img-top.svelte-9w8g6m{max-width:320px}.product-details.svelte-9w8g6m{text-align:left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-55rcdl_START -->${$$result.title = `<title>About - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-55rcdl_END -->`, ""} <div class="content" data-svelte-h="svelte-1igrsk6"><h2>Shop</h2>  <div class="cards svelte-9w8g6m"><div class="row row-cols-1"><div class="col"><div class="card mb-4 rounded-3 shadow-sm"><div class="card-header py-3"><h4 class="my-0 fw-normal text-center svelte-9w8g6m">d2 reagent dispenser</h4></div> <div class="card-body text-center"><h1 class="card-title pricing-card-title text-center">$ 14,500</h1> <img src="https://ukrobotics.com/shop/d2-dispenser/d2-sbs-plate-dispenser-001@0.2x_hud61dad0dd76579a7b89f538c463f9bc2_1364710_500x0_resize_box_2.png" class="card-img-top svelte-9w8g6m" alt="d2 reagent dispenser"> <ul class="list-unstyled mt-3 mb-4 product-details svelte-9w8g6m"><li>Small and lightweight</li> <li>Simple setup, no need for a site visit by an engineer</li> <li>Simply connect power and comms, open your browser and begin. No software to install.</li> <li>Supplied with everything you need to get going immediately</li></ul> <button type="button" class="w-100 btn btn-lg btn-outline-primary">Request quote</button></div></div></div></div></div> </div>`;
});
export {
  Page as default
};
