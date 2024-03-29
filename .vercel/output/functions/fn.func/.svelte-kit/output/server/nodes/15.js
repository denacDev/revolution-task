

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/revolution/simulation/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.NJ1pcA98.js","_app/immutable/chunks/scheduler.B_OghNyv.js","_app/immutable/chunks/index.C9ik1EU3.js","_app/immutable/chunks/public.D4yePgXC.js"];
export const stylesheets = [];
export const fonts = [];
