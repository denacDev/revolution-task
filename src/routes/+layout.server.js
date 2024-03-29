import pb from '$lib/scripts/dbConnection';
import {  redirect, error} from '@sveltejs/kit';
   
  

   /** @type {import('./$types').LayoutData} */
   export async function load({locals}) {
      
      if(locals.user){
         return {user: locals.user}
      }
      return {user: undefined}
      
   }
   
  