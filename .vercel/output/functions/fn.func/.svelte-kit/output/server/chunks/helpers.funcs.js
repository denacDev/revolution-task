import "randombytes";
import "./index.js";
const serializeNonPOJOs = (obj) => {
  return structuredClone(obj);
};
const generateUsername = (name) => {
  const id = randombytes(4).toString("hex");
  return `${name.slice(0, 5)}-${id}`;
};
export {
  generateUsername as g,
  serializeNonPOJOs as s
};
