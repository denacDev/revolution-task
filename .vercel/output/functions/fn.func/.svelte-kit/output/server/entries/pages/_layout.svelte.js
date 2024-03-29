import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each, i as is_promise, n as noop, v as validate_component, m as missing_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { P as PUBLIC_APP_NAME } from "../../chunks/public.js";
import { w as writable } from "../../chunks/index2.js";
const logo = "/_app/immutable/assets/revolution_transparent.CEbdOHW9.png";
const css$2 = {
  code: "nav.svelte-iz4lfp{display:flex;align-items:center;justify-content:center;margin:10px;gap:10px}.container.svelte-iz4lfp{width:max-content}#menu-icon.svelte-iz4lfp{display:none;font-size:1.5rem;cursor:pointer}.nav-link.svelte-iz4lfp{border:none !important}@media(max-width: 640px){#menu-icon.svelte-iz4lfp{display:block}.nav-item.svelte-iz4lfp{width:100%;text-align:center}.nav-link.svelte-iz4lfp{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;border-left:none !important}.nav-item.svelte-iz4lfp:hover{background-color:#e9ecef}.nav.svelte-iz4lfp{height:0;opacity:0;overflow:hidden;transition:all 0.3s ease}.nav-active{min-height:100% !important;height:100% !important;opacity:1 !important}}@media(max-width: 420px){nav.svelte-iz4lfp{flex-direction:column}.container.svelte-iz4lfp{width:auto}.nav.svelte-iz4lfp{justify-content:space-around}}@media(max-width: 640px){nav.svelte-iz4lfp{flex-direction:column}}@media(min-width: 640px){nav.svelte-iz4lfp{justify-content:flex-start}.container.svelte-iz4lfp{width:100%}.login-container.svelte-iz4lfp{width:max-content !important;min-width:max-content !important}}",
  map: null
};
const SiteMainNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { auth } = $$props;
  if ($$props.auth === void 0 && $$bindings.auth && auth !== void 0)
    $$bindings.auth(auth);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<nav id="site-main-navigation" class="svelte-iz4lfp"><span class="fs-4"><a${add_attribute("href", $page.url.origin, 0)}><img${add_attribute("src", logo, 0)} alt="Revolution logo" width="80"></a></span>   ${`<i class="bi bi-list svelte-iz4lfp" id="menu-icon"></i> `} <div class="container d-flex flex-wrap svelte-iz4lfp"><ul class="${["nav me-auto svelte-iz4lfp", ""].join(" ").trim()}"><li class="nav-item svelte-iz4lfp"><a href="/" class="${[
    "nav-link link-body-emphasis px-2 svelte-iz4lfp",
    $page.route.id === "/" ? "active" : ""
  ].join(" ").trim()}" aria-current="page" data-svelte-h="svelte-1i7ufv7">Home</a></li> <li class="nav-item svelte-iz4lfp"><a href="/revolution" class="${[
    "nav-link link-body-emphasis px-2 svelte-iz4lfp",
    $page.route.id === "/revolution" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-17jkems">Product</a></li> <li class="nav-item svelte-iz4lfp"><a href="/features" class="${[
    "nav-link link-body-emphasis px-2 svelte-iz4lfp",
    $page.route.id === "/features" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-c34qs">Features</a></li> <li class="nav-item svelte-iz4lfp"><a href="/shop" class="${[
    "nav-link link-body-emphasis px-2 svelte-iz4lfp",
    $page.route.id === "/shop" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-12x05yj">Shop</a></li> <li class="nav-item svelte-iz4lfp"><a href="/faqs" class="${[
    "nav-link link-body-emphasis px-2 svelte-iz4lfp",
    $page.route.id === "/faqs" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1kqn9i">FAQs</a></li> <li class="nav-item svelte-iz4lfp"><a href="/about" class="${[
    "nav-link link-body-emphasis px-2 svelte-iz4lfp",
    $page.route.id === "/about" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-pxgyk8">About</a></li></ul></div> <div class="container login-container d-flex flex-wrap svelte-iz4lfp"><ul class="${["nav svelte-iz4lfp", ""].join(" ").trim()}">${auth != void 0 ? `<a href="/login" class="${[
    "nav-link link-body-emphasis px-2 svelte-iz4lfp",
    $page.route.id === "/login" ? "active" : ""
  ].join(" ").trim()}">${escape(auth?.name)}</a>` : `<li class="nav-item svelte-iz4lfp"><a href="/login" class="${[
    "nav-link link-body-emphasis px-2 svelte-iz4lfp",
    $page.route.id === "/login" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1bw3o3w">Login</a></li> <li class="nav-item svelte-iz4lfp"><a href="/register" class="${[
    "nav-link link-body-emphasis px-2 svelte-iz4lfp",
    $page.route.id === "/register" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-ib0av9">Sign up</a></li>`}</ul></div> </nav>`;
});
const exitBeforeEnter = writable(false);
const transitioning = writable(null);
const modals = writable([]);
function isLazyModal(component) {
  return typeof component.prototype === "undefined";
}
async function getComponent(component) {
  return component().then((res) => res.default);
}
const Modals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modals, $$unsubscribe_modals;
  let $transitioning, $$unsubscribe_transitioning;
  let $$unsubscribe_exitBeforeEnter;
  $$unsubscribe_modals = subscribe(modals, (value) => $modals = value);
  $$unsubscribe_transitioning = subscribe(transitioning, (value) => $transitioning = value);
  $$unsubscribe_exitBeforeEnter = subscribe(exitBeforeEnter, (value) => value);
  $$unsubscribe_modals();
  $$unsubscribe_transitioning();
  $$unsubscribe_exitBeforeEnter();
  return `${$modals.length > 0 ? `${slots.backdrop ? slots.backdrop({}) : ``}` : ``} ${slots.default ? slots.default({}) : ` ${each($modals, (modal, i) => {
    return ` ${isLazyModal(modal.component) ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` ${slots.loading ? slots.loading({}) : ``} `;
      }
      return function(component) {
        return ` ${validate_component(component || missing_component, "svelte:component").$$render(
          $$result,
          Object.assign(
            {},
            {
              isOpen: i === $modals.length - 1 && !$transitioning
            },
            modal.props
          ),
          {},
          {}
        )} `;
      }(__value);
    }(getComponent(modal.component))}` : ` ${validate_component(modal.component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        {
          isOpen: i === $modals.length - 1 && !$transitioning
        },
        modal.props
      ),
      {},
      {}
    )}`}`;
  })} `}`;
});
const notifications = writable([]);
const css$1 = {
  code: ".notification-container.svelte-1pqxwj9.svelte-1pqxwj9{border-bottom-left-radius:var(--site-border-radius);border-bottom-right-radius:var(--site-border-radius);transition:all 0.3s ease-in-out;transform:translateY(-15px);box-shadow:var(--site-box-shadow);position:sticky;top:0px;display:block;background-color:white;margin:10px auto;padding:20px;max-width:600px;min-width:max-content;pointer-events:all}.notification-type-info.svelte-1pqxwj9.svelte-1pqxwj9{background-color:var(--site-color-primary)}.notification-type-success.svelte-1pqxwj9.svelte-1pqxwj9{background-color:var(--site-color-success)}.notification-type-warning.svelte-1pqxwj9.svelte-1pqxwj9{background-color:var(--site-color-warning)}.notification-type-danger.svelte-1pqxwj9.svelte-1pqxwj9{background-color:var(--site-color-danger)}.notification-container-hidden{transform:translateY(-111px) !important}.notification-value.svelte-1pqxwj9.svelte-1pqxwj9{position:relative;display:flex;align-items:normal;justify-content:space-between;gap:20px}.notification-value.svelte-1pqxwj9>.left-side.svelte-1pqxwj9{width:90%;display:flex;justify-content:flex-start;gap:var(--site-gap-flex);align-items:center}.notification-value.svelte-1pqxwj9>.right-side.svelte-1pqxwj9{min-width:10%;display:flex;align-items:flex-end;justify-content:flex-end;height:100%;align-self:flex-end}.notification-value.svelte-1pqxwj9>.message.svelte-1pqxwj9{font-size:1.2rem !important;font-weight:500;letter-spacing:1px}.notification-value-info.svelte-1pqxwj9.svelte-1pqxwj9{color:white}.notification-value-success.svelte-1pqxwj9.svelte-1pqxwj9{color:white}.notification-value-warning.svelte-1pqxwj9.svelte-1pqxwj9{color:white}.notification-value-danger.svelte-1pqxwj9.svelte-1pqxwj9{color:white}",
  map: null
};
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { message } = $$props;
  let { type } = $$props;
  let { time } = $$props;
  let icon = "info";
  switch (type) {
    case "info":
      icon = "bi-info-circle-fill";
      break;
    case "success":
      icon = "bi-check-circle-fill";
      break;
    case "warning":
      icon = "bi-exclamation-circle-fill";
      break;
    case "danger":
      icon = "bi-sign-stop-fill";
      break;
    default:
      alert("check type of message");
      break;
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  $$result.css.add(css$1);
  return `<div class="${"notification-container notification-type-" + escape(type, true) + " svelte-1pqxwj9"}" id="${"notification-" + escape(id, true)}">  <div class="${"notification-value notification-value-" + escape(type, true) + " svelte-1pqxwj9"}"><div class="left-side svelte-1pqxwj9"><i class="${"bi " + escape(icon, true) + " " + escape(type, true) + " svelte-1pqxwj9"}"></i> <div class="message">${escape(message)}</div></div> <div class="right-side svelte-1pqxwj9">${time == "stay" ? `<i class="bi bi-x-circle-fill remove-icon" title="Close notification"></i> ` : ` `}</div></div> </div>`;
});
const css = {
  code: ".page.svelte-ufmz3y{margin:0px auto;position:relative;top:0}.container-divider.svelte-ufmz3y{width:100%;height:3rem;border-top:solid rgba(0, 0, 0, 0.15);border-width:1px 0;box-shadow:inset 0 0.225em 0.5em -5px rgba(0, 0, 0, 0.15)}.notifications-container.svelte-ufmz3y{display:block;width:100%;min-width:100%;position:absolute;top:0;left:0;z-index:100;pointer-events:none}.backdrop.svelte-ufmz3y{position:fixed;top:0;bottom:0;right:0;left:0;z-index:3;background:rgba(0, 0, 0, 0.5)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $notifications, $$unsubscribe_notifications;
  let $page, $$unsubscribe_page;
  $$unsubscribe_notifications = subscribe(notifications, (value) => $notifications = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_notifications();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1o4lg8n_START -->${$$result.title = `<title>${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-1o4lg8n_END -->`, ""} ${$notifications?.length > 0 ? `<div class="notifications-container svelte-ufmz3y">${each($notifications, ({ id, message, type, time }) => {
    return ` ${validate_component(Notification, "Notification").$$render($$result, { id, message, type, time }, {}, {})}`;
  })}</div>` : ``} <header>${validate_component(Modals, "Modals").$$render($$result, {}, {}, {
    backdrop: () => {
      return `<div slot="backdrop" class="backdrop svelte-ufmz3y"></div>`;
    }
  })}</header> <div class="page svelte-ufmz3y">${!$page.route.id.includes("/revolution") ? `${validate_component(SiteMainNavigation, "SiteMainNavigation").$$render($$result, { auth: data?.user }, {}, {})} <div class="container-divider svelte-ufmz3y"></div>` : ``} <div id="page-content">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  Layout as default
};
