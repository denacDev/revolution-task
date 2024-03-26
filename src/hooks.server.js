
import eventsource from 'eventsource';
global.EventSource = eventsource;
export const handle = async ({event, resolve}) => {

   // set the database
   event.locals.pb = pb;

   // sett the cookies
   event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
   if(event.locals.pb.authStore.isValid){
      event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
   }
   else{
      event.locals.user = undefined;
   }

   const response = await resolve(event);
   //TODO:: secure when using HTTPS
   response.headers.set('set-Cookie', event.locals.pb.authStore.exportToCookie({secure:false, sameSite: 'Lax',
   httpOnly: false}));

   return response;
}

 