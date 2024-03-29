import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { P as PUBLIC_APP_NAME } from "../../../chunks/public.js";
import { p as page } from "../../../chunks/stores.js";
import { M as Message } from "../../../chunks/Message.js";
const logoSmall = "/_app/immutable/assets/revolution_small_transparent.DHFQmt83.png";
const css$1 = {
  code: "@media(max-width: 576px){#app-side-main-navigation.svelte-13m6vu3{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;height:max-content;width:100%;max-width:max-content;overflow-x:auto;overflow-y:hidden;box-shadow:inset 12px 0px 10px -5px rgba(0, 0, 0, 0.5),\r\n				inset -12px 0px 10px -5px rgba(0, 0, 0, 0.5)}#app-side-main-navigation::-webkit-scrollbar{display:none}#app-side-main-navigation{-ms-overflow-style:none;scrollbar-width:none}i.bi-arrow-right-square.svelte-13m6vu3{display:none}}nav.svelte-13m6vu3{height:100vh;box-shadow:none;display:block;width:35px;overflow:hidden}nav.visible{min-width:max-content !important;width:max-content;box-shadow:2px 0px 10px 0px rgba(0, 0, 0, 0.1),\r\n			-12px 0px 13px -15px rgba(0, 0, 0, 1) inset}.logo.svelte-13m6vu3,.empty-placeholder.svelte-13m6vu3{width:100%;text-align:center !important}@media(min-width: 576px){.nav-link.svelte-13m6vu3{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}}@media(max-width: 576px){.nav-link.svelte-13m6vu3{border-bottom:1px solid transparent !important}}.nav-link.svelte-13m6vu3:hover,.nav-link.svelte-13m6vu3:focus{background-color:#f5f5f5;cursor:pointer}.nav-link.svelte-13m6vu3:last-of-type{border-bottom:1px solid transparent !important}.nav-link-disabled.svelte-13m6vu3{background-color:none}.active-link.svelte-13m6vu3{background-color:#f5f5f5;cursor:pointer}.nav-link.svelte-13m6vu3,.nav-link-disabled.svelte-13m6vu3{width:100%;min-width:max-content;display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:10px;padding:10px}.link-lbl.svelte-13m6vu3{width:100%;min-width:max-content}.bi.svelte-13m6vu3{transition:all 0.2s ease-in-out;transform-style:preserve-3d}.flipArrw.svelte-13m6vu3{transform:rotateY(180deg)}",
  map: null
};
const AppSideMainNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav id="app-side-main-navigation" class="svelte-13m6vu3"> <div class="nav-link-disabled svelte-13m6vu3"><div class="empty-placeholder svelte-13m6vu3" style="display:none;" data-svelte-h="svelte-y9fz4x"> </div>  <i class="${["bi bi-arrow-right-square svelte-13m6vu3", ""].join(" ").trim()}" style="font-size:1rem;"></i></div> <div class="nav-link-disabled border-bottom svelte-13m6vu3" id="logo-container"><div class="logo svelte-13m6vu3">${`<a${add_attribute("href", $page.url.origin, 0)}><img${add_attribute("src", logoSmall, 0)} title="Navigat to the Home site" alt="Revolution logo" width="20px"></a>`}</div></div> <a title="Schedule Editor" class="${[
    "nav-link border-bottom svelte-13m6vu3",
    $page.route.id.includes("/schedule-editor") ? "active-link" : ""
  ].join(" ").trim()}"${add_attribute("href", $page.url.origin + "/revolution/schedule-editor", 0)} data-tippy-content="aaaaaaa"><i class="bi bi-gear-fill svelte-13m6vu3" style="font-size:1rem;"></i> <span class="link-lbl svelte-13m6vu3" data-svelte-h="svelte-11cbd3i">Schedule Editor</span></a> <a title="Storage Manager" class="${[
    "nav-link border-bottom svelte-13m6vu3",
    $page.route.id.includes("/storage-manager") ? "active-link" : ""
  ].join(" ").trim()}"${add_attribute("href", $page.url.origin + "/revolution/storage-manager", 0)}><i class="bi bi-database-gear svelte-13m6vu3" style="font-size:1rem;"></i> <span class="link-lbl svelte-13m6vu3" data-svelte-h="svelte-14ztlxi">Storage Manager</span></a> <a title="Object Manager" class="${[
    "nav-link border-bottom svelte-13m6vu3",
    $page.route.id.includes("/object-manager") ? "active-link" : ""
  ].join(" ").trim()}"${add_attribute("href", $page.url.origin + "/revolution/object-manager", 0)}><i class="bi bi-building-fill-gear svelte-13m6vu3" style="font-size:1rem;"></i> <span class="link-lbl svelte-13m6vu3" data-svelte-h="svelte-c1s4fk">Object Manager</span></a> <a title="Device manager" class="${[
    "nav-link border-bottom svelte-13m6vu3",
    $page.route.id.includes("/device-manager") ? "active-link" : ""
  ].join(" ").trim()}"${add_attribute("href", $page.url.origin + "/revolution/device-manager", 0)}><i class="bi bi-usb-fill svelte-13m6vu3" style="font-size:1rem;"></i> <span class="link-lbl svelte-13m6vu3" data-svelte-h="svelte-4n40b7">Device Manager</span></a> <a title="System" class="${[
    "nav-link border-bottom svelte-13m6vu3",
    $page.route.id.includes("/system") ? "active-link" : ""
  ].join(" ").trim()}"${add_attribute("href", $page.url.origin + "/revolution/system", 0)}><i class="bi bi-cpu-fill svelte-13m6vu3" style="font-size:1rem;"></i> <span class="link-lbl svelte-13m6vu3" data-svelte-h="svelte-mpfgdf">System</span></a> <a title="Event Viewer" class="${[
    "nav-link border-bottom svelte-13m6vu3",
    $page.route.id.includes("/event-viewer") ? "active-link" : ""
  ].join(" ").trim()}"${add_attribute("href", $page.url.origin + "/revolution/event-viewer", 0)}><i class="bi bi-egg-fried svelte-13m6vu3" style="font-size:1rem;"></i> <span class="link-lbl svelte-13m6vu3" data-svelte-h="svelte-5p5zma">Event Viewer</span></a> <a title="Simulation" class="${[
    "nav-link border-bottom svelte-13m6vu3",
    $page.route.id.includes("/simulation") ? "active-link" : ""
  ].join(" ").trim()}"${add_attribute("href", $page.url.origin + "/revolution/simulation", 0)}><i class="bi bi-diagram-3-fill svelte-13m6vu3" style="font-size:1rem;"></i> <span class="link-lbl svelte-13m6vu3" data-svelte-h="svelte-jdz8ph">Simulation</span></a> </nav>`;
});
const css = {
  code: "html::-webkit-scrollbar{display:none}body::-webkit-scrollbar{display:none}html, body{-ms-overflow-style:none;scrollbar-width:none}.page-not-loaded.svelte-1vn9mm0{display:flex;justify-content:center;margin:100px auto;padding:10px}.page.svelte-1vn9mm0{min-height:100vh;display:flex;flex-direction:row}#page-content.svelte-1vn9mm0{width:100%;padding:10px;background-color:#f5f5f5}@media(max-width: 576px){.page.svelte-1vn9mm0{flex-direction:column}.content{display:flex;flex-direction:column}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return ` ${$$result.head += `<!-- HEAD_svelte-1o4lg8n_START -->${$$result.title = `<title>${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-1o4lg8n_END -->`, ""} <div class="page svelte-1vn9mm0">${validate_component(AppSideMainNavigation, "SideMainNavigation").$$render($$result, {}, {}, {})} <div id="page-content" class="svelte-1vn9mm0">${data?.user == void 0 ? `<div class="page-not-loaded svelte-1vn9mm0">${validate_component(Message, "Message").$$render(
    $$result,
    {
      type: "danger",
      title: "Access error",
      message: "Please login in order to access this area",
      spaceY: false,
      action: "login"
    },
    {},
    {}
  )}</div>` : `${slots.default ? slots.default({}) : ``}`}</div> </div>`;
});
export {
  Layout as default
};
