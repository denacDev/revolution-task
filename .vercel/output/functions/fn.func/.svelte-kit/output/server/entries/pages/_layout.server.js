import "../../chunks/dbConnection.js";
import "../../chunks/index.js";
async function load({ locals }) {
  if (locals.user) {
    return { user: locals.user };
  }
  return { user: void 0 };
}
export {
  load
};
