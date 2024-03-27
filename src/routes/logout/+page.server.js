import { redirect } from '@sveltejs/kit';

export async function load({locals}) {
    locals.pb.authStore.clear();
        locals.user = undefined;
        return{login:false}
}

 