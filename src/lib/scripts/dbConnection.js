import PocketBase from 'pocketbase';
import { error, redirect } from '@sveltejs/kit';

// connect to db
let pb = undefined;
try {
     pb = new PocketBase('https://dbrevolution.fly.dev');
// login to db
await pb.admins.authWithPassword(import.meta.env.VITE_SECRET_EMAIL, import.meta.env.VITE_SECRET_PASSWORD);
} catch (err) {
   throw error(500, "Database: "+ err.message );
}
export default pb;