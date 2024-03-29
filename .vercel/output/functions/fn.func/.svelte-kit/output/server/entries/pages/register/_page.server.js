import { e as error, r as redirect } from "../../../chunks/index.js";
import { g as generateUsername } from "../../../chunks/helpers.funcs.js";
const actions = {
  register_user_pass: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData());
    let username = generateUsername(body.name.split(" ").join("")).toLowerCase();
    let newUser = {
      name: body.name,
      username,
      email: body.email,
      password: body.password,
      passwordConfirm: body.passwordConfirm
    };
    try {
      await locals.pb.collection("users").create(newUser);
      await locals.pb.collection("users").requestVerification(body.email);
    } catch (err) {
      console.log("err registering new user :>> ", err);
      throw error(500, "error registering new user");
    }
    throw redirect(303, "/login");
  }
};
export {
  actions
};
