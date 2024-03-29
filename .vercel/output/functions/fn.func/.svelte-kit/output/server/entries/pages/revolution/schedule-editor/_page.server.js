import { p as pb } from "../../../../chunks/dbConnection.js";
import "../../../../chunks/index.js";
async function load() {
  const schedules = await pb.collection("schedules").getList(1, 50, { expand: "" });
  return { schedules };
}
const actions = {
  remove_selected_schedule: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData());
    const record = await pb.collection("schedules").delete(body.id);
    return record;
  },
  add_new_schedule: async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData());
    const record = await pb.collection("schedules").create(body);
    return record;
  }
};
export {
  actions,
  load
};
