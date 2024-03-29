import { p as pb } from "./dbConnection.js";
import { s as serializeNonPOJOs } from "./helpers.funcs.js";
import eventsource from "eventsource";
global.EventSource = eventsource;
const handle = async ({ event, resolve }) => {
  event.locals.pb = pb;
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  if (event.locals.pb.authStore.isValid) {
    event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
  } else {
    event.locals.user = void 0;
  }
  const response = await resolve(event);
  response.headers.set("set-Cookie", event.locals.pb.authStore.exportToCookie({
    secure: false,
    sameSite: "Lax",
    httpOnly: false
  }));
  return response;
};
export {
  handle
};
