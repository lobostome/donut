donut
=====

A RaphaelJS plugin that creates a donut-like shape

![Screenshot](https://github.com/lobostome/donut/raw/master/example.png)

## Example

- Create a holder for the paper object

```
<div id="canvas"></div>
```

- Create the paper object

```
var paper = Raphael('canvas', 1000, 1000);
``` 

- Create the donut shape with center coordinates x = 500 and y = 500 and radius= 100. Style as needed.

```
paper.donut(500, 500, 100).attr({fill: "#3980B5", stroke: "#fff", "stroke-width": "2"});
```

## Changelog

version 0.0.1
- Crooked donut shape drawn by path command.
