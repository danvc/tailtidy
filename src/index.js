/**
 *
 * @param {*} obj
 * @param {*} classes
 */
getClasses = (obj, classes) => {
  const values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    if (typeof val === "object") {
      getClasses(val, classes);
    } else if (typeof val === "string") {
      classes.push(val);
    } else if (Array.isArray(val)) {
      classes.concat(val);
    }
  }
};

/**
 * @param {*} structClass Is an object argument where the values
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
function tidyUp(structClass) {
  const classes = [];
  if (typeof structClass === "object") {
    getClasses(structClass, classes);
  } else {
    console.warning(
      "tidyUp: The argument passed as reference is not an object."
    );
  }
  return classes.join(" ");
}

module.exports = {
  tidyUp,
};
