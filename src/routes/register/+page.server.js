import { error, redirect } from '@sveltejs/kit';
import { generateUsername } from '$lib/scripts/helpers.funcs.js';

export const actions = {
   register_user_pass: async ({request, locals}) => {
      const body = Object.fromEntries(await request.formData());
      let username = generateUsername(body.name.split(' ').join('')).toLowerCase();
      let newUser = {
         name: body.name,
         username: username,
         email: body.email,
         password: body.password,
         passwordConfirm: body.passwordConfirm,

      }

      try {
         await locals.pb.collection('users').create(newUser)
         await locals.pb.collection('users').requestVerification(body.email)
      } catch (err) {
         console.log('err registering new user :>> ', err);
         throw error(500, 'error registering new user');
      }

      throw redirect(303, '/login');
   }
}