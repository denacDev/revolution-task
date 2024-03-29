import { c as create_ssr_component, e as escape } from "./ssr.js";
/* empty css                                      */
const css = {
  code: ".bi.svelte-1ouz6qe{font-size:1.5rem;margin:0px 10px}.info.svelte-1ouz6qe{color:#000}.success.svelte-1ouz6qe{color:green}.warning.svelte-1ouz6qe{color:orange}.danger.svelte-1ouz6qe{color:red}.card.svelte-1ouz6qe{gap:var(--site-gap-flex);display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0px auto;max-width:80%}.card-top.svelte-1ouz6qe{position:relative;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:100%;gap:var(--site-gap-flex);border-bottom:1px solid rgba(0, 0, 0, 0.059)}.card-top-left-text.svelte-1ouz6qe{font-size:var(--site-font-size);font-weight:900;transition:0.3s}.card-bottom.svelte-1ouz6qe{width:100%;padding:10px 0px;position:relative;transition:0.3s;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:var(--site-gap-flex);text-transform:uppercase}.message.svelte-1ouz6qe{font-size:var(--text-value-font-size);font-weight:600;letter-spacing:0.3px;color:#000;transition:0.3s;padding:10px}.actions{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:var(--site-gap-flex)}",
  map: null
};
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "info" } = $$props;
  let { title = "message title" } = $$props;
  let { message = "message body" } = $$props;
  let { action = null } = $$props;
  let { spaceY = true } = $$props;
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
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.spaceY === void 0 && $$bindings.spaceY && spaceY !== void 0)
    $$bindings.spaceY(spaceY);
  $$result.css.add(css);
  return `${spaceY ? `<div class="spacer-y"></div>` : ``} <div class="card card-on-top bg-body-tertiary border rounded-3 shadow-sm svelte-1ouz6qe"><div class="card-top svelte-1ouz6qe"><i class="${"bi " + escape(icon, true) + " " + escape(type, true) + " svelte-1ouz6qe"}"></i> <div class="${"card-top-left-text " + escape(type, true) + " svelte-1ouz6qe"}">${escape(title)}</div></div> <div class="card-bottom svelte-1ouz6qe"><div class="message svelte-1ouz6qe">${escape(message)}</div> ${action != null ? `<div class="actions">${action == "login" ? `<a href="/login" class="btn btn-outline-primary" data-svelte-h="svelte-e6a7w0">login</a>` : `${action == "new-list" ? `<a href="/lists/new" class="btn btn-outline-primary" data-svelte-h="svelte-1bt5kls">new list</a>` : `${action == "new-group" ? `<a href="/groups/new" class="btn btn-outline-primary" data-svelte-h="svelte-fpmbwk">new group</a>` : ``}`}`}</div>` : ``}</div> </div>`;
});
export {
  Message as M
};
