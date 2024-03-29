import { c as create_ssr_component } from "../../../chunks/ssr.js";
import { B as BROWSER } from "../../../chunks/prod-ssr.js";
const browser = BROWSER;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if (data.login == false && browser) {
    window.location.href = "/login";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ``;
});
export {
  Page as default
};
