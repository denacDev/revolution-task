// const  {randomBytes} = await import('node:crypto');
import { randomBytes } from "randombytes";
import notifications, { addNotification } from '$lib/scripts/notifications';
import { json } from '@sveltejs/kit';

export const customize_date = (dt, secs = false) => {
  if(dt != undefined || ""){
   if(secs){
     return dt.slice(0, 10) + ' @ ' + dt.slice(11, 19 );
   }
   else{
     return dt.slice(0, 10) + ' @ ' + dt.slice(11, 16);
   }
  }
  else{ return undefined}
 };
 

export const serializeNonPOJOs = (obj) => {
   return structuredClone(obj);
 }

 export const generateUsername = (name)=>{
  const id = randombytes(4).toString('hex');
  return `${name.slice(0,5)}-${id}`;
}
/*
	 * @param {string} url = "?/action_name"  
	 * @param {string} method = "POST" || "GET"
	 * @param {string} headers =  { "Content-Type": "application/json" }
	 * @param {string} body = form body
   * @param {string} redirectTo = "list/[listId]"
   * @param {number} timeToRedirect = 2000
*/
export const sendRequest =  async(url, method, headers, body, redirectTo="/", timeToRedirect=2000) => {
  
  try {
   const response =   await fetch(url, { method, headers, body }) 
   const dt =    await response.json() 
   return dt
   
  } catch (error) {
    addNotification(error, 'danger', 'long');
  }
}

export const invertArray = (arr) => {
  arr.sort(function (a, b) {
    return new Date(b.created) - new Date(a.created);
  });

  return arr;
}