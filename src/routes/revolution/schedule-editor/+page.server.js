import pb from '$lib/scripts/dbConnection';
import {  redirect, error} from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
   
const schedules = await pb.collection('schedules').getList(1, 50,{ expand: "" } );
return {schedules};
   
}


export const actions = {
   remove_selected_schedule: async ({request, locals}) => {
      const body = Object.fromEntries(await request.formData());
      console.log('remove_selected_schedule::body :>> ', body);
      const record = await pb.collection('schedules').delete(body.id);
      return record
     
   },
   add_new_schedule: async ({request, locals}) => {
      const body = Object.fromEntries(await request.formData());
      console.log('add_new_schedule::body :>> ', body);
      const record = await pb.collection('schedules').create(body);
     return record
   },
}