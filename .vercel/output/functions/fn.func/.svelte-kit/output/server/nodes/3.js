

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.PN2NLXWI.js","_app/immutable/chunks/scheduler.B_OghNyv.js","_app/immutable/chunks/index.C9ik1EU3.js","_app/immutable/chunks/public.D4yePgXC.js"];
export const stylesheets = ["_app/immutable/assets/3.D9K8tGJW.css"];
export const fonts = [];
