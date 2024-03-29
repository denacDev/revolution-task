import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { P as PUBLIC_APP_NAME } from "../../../chunks/public.js";
import { M as Message } from "../../../chunks/Message.js";
const css = {
  code: ".fields-groups.svelte-3lxs7f{max-width:max-content;margin:0px auto;display:flex;flex-direction:column;gap:10px;justify-content:center;align-items:center}.content.svelte-3lxs7f{max-width:700px;width:100%;margin:0px auto;padding:10px;display:flex;flex-direction:column}.fields.svelte-3lxs7f{display:flex;flex-direction:column;gap:10px}form.svelte-3lxs7f{margin:0px auto;max-width:330px;padding:1rem;display:flex;flex-direction:column;gap:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-xccxs9_START -->${$$result.title = `<title>Login - ${escape(PUBLIC_APP_NAME)}</title>`, ""}<!-- HEAD_svelte-xccxs9_END -->`, ""} <div class="content svelte-3lxs7f">${data?.user != void 0 ? `<div class="fields-groups svelte-3lxs7f"><h1>Welcome Back! ${escape(data?.user?.name)}</h1> <a href="/logout" class="btn btn-outline-primary" data-svelte-h="svelte-z8pra6">logout</a></div>` : `${form?.notVerified == true ? `${validate_component(Message, "Message").$$render(
    $$result,
    {
      type: "danger",
      title: "Login error",
      message: "You must verify your email before you login, check your email",
      spaceY: false,
      action: "login"
    },
    {},
    {}
  )}` : `<form action="?/login_user_pass" method="post" class="svelte-3lxs7f" data-svelte-h="svelte-1butdf2"><div class="fields svelte-3lxs7f"><div class="form-floating"><input name="email" type="email" class="form-control" id="emailAdress" placeholder="name@example.com" value="kinezu89@gmail.com"> <label for="emailAdress">Email address</label></div> <div class="form-floating"><input name="password" type="password" class="form-control" id="password" placeholder="Password" value="register"> <label for="password">Password</label></div></div> <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button></form>`}`} </div>`;
});
export {
  Page as default
};
