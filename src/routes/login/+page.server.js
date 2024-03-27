import {error, redirect} from '@sveltejs/kit';

   
  

   /** @type {import('./$types').PageData} */
   export async function load({locals}) {
      
      if(locals.user){
         return {user: locals.user}
      }
      return {user: undefined}
      
   }
   
    
 

export const actions = {
 

   login_user_pass: async ({request, locals}) => {
     
      const body = Object.fromEntries(await request.formData());
      try {
         await locals.pb.collection('users').authWithPassword(body.email, body.password);
         if(locals.pb.authStore.baseModel.verified == false){
             
            locals.pb.authStore.clear();
            return {notVerified: true};
         }
      } catch (err) {
         console.log('Error logging in :>> ', err);
         throw error(500, 'Something went wrong while logging in ');
      }
      
      
      throw redirect(303, '/');
   },
   logout: async ({cookies, url, locals}) => {
       
      await locals.pb?.authStore.clear();
      
      throw redirect(303, "/login");
   }
}
