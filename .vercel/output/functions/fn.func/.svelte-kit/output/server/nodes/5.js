

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faqs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CaZYVtQ4.js","_app/immutable/chunks/scheduler.B_OghNyv.js","_app/immutable/chunks/index.C9ik1EU3.js","_app/immutable/chunks/public.D4yePgXC.js"];
export const stylesheets = ["_app/immutable/assets/5.CJgCH9UZ.css"];
export const fonts = [];
