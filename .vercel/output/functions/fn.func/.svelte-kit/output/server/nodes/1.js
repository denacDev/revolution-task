

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D6JWd7XU.js","_app/immutable/chunks/scheduler.B_OghNyv.js","_app/immutable/chunks/index.C9ik1EU3.js","_app/immutable/chunks/stores.VLMo9yFn.js","_app/immutable/chunks/entry.BsLt1Fvm.js"];
export const stylesheets = [];
export const fonts = [];
