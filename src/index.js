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
  const values = [];

  for (const prop in obj) {
    const value = obj[prop];

    if (typeof value === "object") {
      // Recursively call the function if the value is an object
      const subValues = tidyUp(value);
      values.push(...subValues);

      // Inject a function into the object to get its property values
      value.get = function () {
        return tidyUp(this);
      };
    } else {
      // Convert the value to a string and push it to the array
      values.push(String(value) + " ");
    }
  }

  return values.join("");
}

module.exports = {
  tidyUp,
};
