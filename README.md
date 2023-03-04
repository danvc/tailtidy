# tailtidy
An organized way to use TailwindCSS classes


````
  const classes = tidyUp({
    title: {
      sm: {
        text: "text-sm",
        bg: "bg-red",
      },
      md: {
        text: "md:text-base",
        bg: "md:bg-orange",
      },
      lg: {
        text: "lg:text-lg",
        bg: "lg:bg-blue",
      },
    },
    paragraph: {},
  });

````

Use

````
<div className={classes.title.getClasses()}>Test</div>
````

The result
````
text-sm bg-red md:text-base md:bg-orange lg:text-lg lg:bg-blue
````


