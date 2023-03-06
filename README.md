# tailtidy
`TailTidy` is a library that has as intention to help you organize your Tailwind classes in the way you think this should be organized.

## Installing using yarn
```
yarn add --dev tailtidy
```

## Installing using npm
```
npm add --save-dev tailtidy
```

## What problem this solve?
This helps you to organize your classes by a logical and structured way. When the component start to receive a lot of conditions where the shape should be changed according a specific breakpoint, like, *"change the text color to black when the breakpoint is `xm` but when it has achieved `md`, change the text color to pink"*. 

## The idea is simple:
- It's like styled css, but, using classes.

The idea behind `tidyUp` is that it will help you to organize and visualize better how the classes should be organized
according each aspect.

There's no right way to shape the structure, so, you're able to define the structured in the way that you want, in the way that
you'll feel comfortable to maintain.

An organized way to use TailwindCSS classes:
````
  const classes = tidyUp({
    // component Title
    title: {
      // well, whant the breakpoint is small, I want to show a red background with the font-size small
      sm: {
        text: "text-sm",
        bg: "bg-red",
      },
      // but when the breakpoint reach the md size, I want to display the background with the color orange... the font-size will be normal
      md: {
        text: "md:text-base",
        bg: "md:bg-orange",
      },
      // but when the breakpoint reach lg, ah man, then, we need to rock this world and change the background color to blue and the font large
      lg: {
        text: "lg:text-lg",
        bg: "lg:bg-blue",
      },
    },
    // component Pragraph
    paragraph: {},
  });

````
Of course this example is stupid, however, the library is not stupid, mainly when you're dealing with elements that has dozens of classes. Urgh!

Use

````
<div className={classes.title.getClasses()}>Test</div>
````

The result
````
<div class="text-sm bg-red md:text-base md:bg-orange lg:text-lg lg:bg-blue">Test</div>
````

You can call the method `getClasses` on all properties that are objects. Given the example above, you could be calling:

````
classes.title.getClasses();
````
which would return:
````
text-sm bg-red md:text-base md:bg-orange lg:text-lg lg:bg-blue
````

````
classes.title.sm.getClasses();
````
which would return:
````
text-sm bg-red
````
and so on.



