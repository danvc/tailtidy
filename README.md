# tailtidy
`TailTidy` is a library that has as intention to help you organize your Tailwind classes in the way you think this should be organized.

When the component start to receive a of conditions where the shape should be changed according a specific condition, like, *"change the text
color to black when the breakpoint is `xm` but when it has achieved `md`, change the text color to pink"*. That's the idea:
- It's like styled css, but, using classes.

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


