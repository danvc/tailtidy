# tailtidy
The idea behind `tidyUp` is that it will help you to organize and visualize better how the classes should be organized
according each aspect.

There's no right way to shape the structure, so, you're able to define the structured in the way that you want, in the way that
you'll feel comfortable to maintain.

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


