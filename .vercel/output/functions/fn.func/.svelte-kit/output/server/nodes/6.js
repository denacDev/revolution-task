

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/features/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.C4Ue4lBo.js","_app/immutable/chunks/scheduler.B_OghNyv.js","_app/immutable/chunks/index.C9ik1EU3.js","_app/immutable/chunks/public.D4yePgXC.js"];
export const stylesheets = ["_app/immutable/assets/6.uFswy1lm.css"];
export const fonts = [];
