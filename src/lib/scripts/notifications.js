// notifications.js
import { writable } from 'svelte/store';

const notifications = writable([]);

export const removeNotification = (id) => {
   
   console.log('Removing notification with ID:', id);
   notifications.update((prev) => prev.filter((n) => n.id !== id));
};

export const addNotification = (message, type = 'info', timeLength = "short") => {
   
   const id = Math.random().toString(36).substr(2, 9);  
   let time = 0;


   if(type!== 'info' && type!== 'danger' && type!== 'warning' && type!=='success') {
      type = 'danger';
      message += ' [DEV_ERROR - "Invalid notification TYPE"]';
      timeLength =='stay'
   }
    if(timeLength!== "short" && timeLength!== "medium" && timeLength!== "long" && timeLength!== "stay") {
      type = 'danger';

      message += ' [DEV_ERROR - "Invalid notification TIME length"]';
      timeLength == 'stay'
   }
    


   // Generate a unique ID
   // Add time different times
   if (timeLength === "short") {time =2000}
   if (timeLength === "medium") {time =3000}
   if (timeLength === "long") {time =5000}
   if (timeLength === "stay") {time = 'stay'}

   // notifications.subscribe(note=>console.log('note >> ', note))
   notifications.update((prev) => [...prev, { id, message, type, time }]);
   
   if(time != 'stay') {setTimeout(() => removeNotification(id), time);}
};



export default notifications;

 
 