import * as server from '../entries/pages/logout/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.js";
export const imports = ["_app/immutable/nodes/8.Boj0IrMq.js","_app/immutable/chunks/scheduler.B_OghNyv.js","_app/immutable/chunks/index.C9ik1EU3.js"];
export const stylesheets = [];
export const fonts = [];
