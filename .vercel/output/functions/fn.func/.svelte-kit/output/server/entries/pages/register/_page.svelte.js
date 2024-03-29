import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../chunks/public.js";
const css = {
  code: ".lbl-red.svelte-158x45h{color:red !important}.lbl.svelte-158x45h{margin:0 !important;padding:0 !important}.fields.svelte-158x45h{display:flex;flex-direction:column;gap:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mainPass;
  let rePass;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-xccxs9_START -->${$$result.title = `<title>Login - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-xccxs9_END -->`, ""} <div class="content"><form action="?/register_user_pass" method="post" autocomplete="off"><div class="fields svelte-158x45h"><div class="form-floating" data-svelte-h="svelte-sjrenh"><input name="email" type="email" class="form-control" id="emailInput" placeholder="name@example.com"> <label for="emailInput">Email address</label></div> <div class="form-floating" data-svelte-h="svelte-5g7thn"><input name="name" type="name" class="form-control" id="nameInput" placeholder="jack"> <label for="nameInput">Name</label></div> <div class="form-floating"><input name="password" type="password" class="form-control" id="passwordInput" placeholder="Password"${add_attribute("value", mainPass, 0)}> <label for="passwordInput" data-svelte-h="svelte-domir8">Password</label> ${``}</div> <div class="form-floating"><input name="passwordConfirm" type="password" class="form-control" id="rePasswordInput" placeholder="Password"${add_attribute("value", rePass, 0)}> <label for="rePasswordInput" data-svelte-h="svelte-gopsu3">Re-Password</label> ${``}</div></div> <button class="btn btn-primary w-100 py-2" type="submit" data-svelte-h="svelte-123rcoo">Sign Up</button></form> </div>`;
});
export {
  Page as default
};
