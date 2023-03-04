/**
 * @param {*} structuredClasses Is an object argument where the values
 * will be the TailwindCSS class name. For example:
 * {
 *  display: "grid",
 *  columns: {
 *    xm: "grid-cols-1",
 *    md: "grid-cols-2",
 *    lg: "grid-cols-4",
 *  },
 *}
 * @returns "grid grid-cols-1 grid-cols-2 grid-cols-4"
 */
function tidyUp(obj) {
  const stack = [obj];
  while (stack.length > 0) {
    const curr = stack.pop();
    Object.keys(curr).forEach((key) => {
      const val = curr[key];
      if (typeof val === "object" && !Array.isArray(val)) {
        val.getClasses = function () {
          return Object.values(this)
            .map((v) => (typeof v === "object" ? v.getClasses() : v))
            .filter((v) => typeof v === "string")
            .join(" ");
        };
        stack.push(val);
      }
    });
  }
  obj.getClasses = function () {
    return Object.values(this)
      .map((v) => (typeof v === "object" ? v.getClasses() : v))
      .filter((v) => typeof v === "string")
      .join(" ");
  };
  return obj;
}

module.exports = tidyUp;
