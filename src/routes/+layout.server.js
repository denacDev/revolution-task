import pb from '$lib/scripts/dbConnection';
import {  redirect, error} from '@sveltejs/kit';
   
  

   /** @type {import('./$types').LayoutData} */
   export async function load({locals}) {
      
      if(locals.user){
         return {user: locals.user}
      }
      return {user: undefined}
      
   }
   
   // export const actions = {
   //    remove_selected_schedule: async ({request, locals}) => {
   //       const body = Object.fromEntries(await request.formData());
   //       console.log('remove_selected_schedule::body :>> ', body);
   //    },
   //    add_new_schedule: async ({request, locals}) => {
   //       const body = Object.fromEntries(await request.formData());
   //       console.log('add_new_schedule::body :>> ', body);
   //    },
   // }
