import {  redirect} from '@sveltejs/kit';
   
  

   /** @type {import('./$types').LayoutData} */
   export async function load({locals}) {
      
      if(locals.pb.authStore.model == undefined|| Object.keys(locals.pb.authStore.model).length == 0 )
      {
         throw redirect(303, '/login');
      }
      return { user:locals.pb.authStore.model }
      
   }
   
    
