const { tidyUp } = require(".");

console.log(
  tidyUp({
    figure: {
      background: "bg-slate-100 rounded-xl p-8  dark:bg-slate-800",
      md: "md:flex md:p-0",
      image: {
        default: "rounded-full mx-auto",
        md: "md:w-48 md:h-auto md:rounded-none",
        size: "w-24 h-24 ",
      },
      paragraph: "text-lg font-medium",
      figcaption: {
        default: "font-medium",
        name: "text-sky-500 dark:text-sky-400",
      },
    },
  })
);
