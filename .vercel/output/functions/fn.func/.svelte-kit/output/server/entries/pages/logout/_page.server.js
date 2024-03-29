import "../../../chunks/index.js";
async function load({ locals }) {
  locals.pb.authStore.clear();
  locals.user = void 0;
  return { login: false };
}
export {
  load
};
