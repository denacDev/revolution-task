import * as server from '../entries/pages/revolution/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/revolution/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/revolution/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.BCo5t2DD.js","_app/immutable/chunks/scheduler.B_OghNyv.js","_app/immutable/chunks/index.C9ik1EU3.js","_app/immutable/chunks/entry.BsLt1Fvm.js","_app/immutable/chunks/public.D4yePgXC.js","_app/immutable/chunks/stores.VLMo9yFn.js","_app/immutable/chunks/revolution_transparent.NAdX3PHU.js","_app/immutable/chunks/Message.CR8xJ3sE.js"];
export const stylesheets = ["_app/immutable/assets/2.CGdEmYRQ.css","_app/immutable/assets/Message.B2FrHuPb.css"];
export const fonts = [];
