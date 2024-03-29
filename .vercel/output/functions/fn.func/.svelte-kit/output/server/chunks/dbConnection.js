import PocketBase from "pocketbase";
import { e as error } from "./index.js";
let pb = void 0;
try {
  pb = new PocketBase("https://dbrevolution.fly.dev");
  pb.admins.authWithPassword("denac.development@gmail.com", "parolaD3L@Db");
} catch (err) {
  throw error(500, "Database: " + err.message);
}
const pb$1 = pb;
export {
  pb$1 as p
};
