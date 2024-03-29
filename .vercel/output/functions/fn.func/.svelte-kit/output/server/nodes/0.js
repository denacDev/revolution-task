import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.ioBRngha.js","_app/immutable/chunks/scheduler.B_OghNyv.js","_app/immutable/chunks/index.C9ik1EU3.js","_app/immutable/chunks/notifications.DAgaz3bm.js","_app/immutable/chunks/entry.BsLt1Fvm.js","_app/immutable/chunks/stores.VLMo9yFn.js","_app/immutable/chunks/public.D4yePgXC.js","_app/immutable/chunks/revolution_transparent.NAdX3PHU.js"];
export const stylesheets = ["_app/immutable/assets/0.iYrdj3Md.css"];
export const fonts = [];
