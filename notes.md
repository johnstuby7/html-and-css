# Html and css

- css selector is a custom css name that is defined in a external css file and used in a html file

  - ad a id to the field with the selector name, you can only use it in one place though: <li id="selector">hedges</li>
  - to reuse a selector, use a class='selector' <li class="underlined"></li>

- set line height to change the height between lines of text

## box model:

- all divs are boxes. box is in the center, padding goes around that, border goes around that and margin goes around that
-

## position properties

- relative property is positioned by its previous location
- absolute property affects other elements
- fixed property will cause that item to stay in the same spot on the screen even with scroll

## float properties:

- to get a image to rotate: transform: rotate(60deg);
- to add a shadow: box-shadow: 7px 6px 5px black; border-radius: 15px 20px 30px 40px;

## Flexbox:

- Look at flexbox png and flexboxContainerFeatures for example
- Flexbox is a parent that holds the flex item children
- display:flex will cause the items contained in side of it to be horizontally aligned beside each other

## gridCSS

- using % in grid template will allow resizing with scren resize
- using 1fr will spread for the entire page and allow respacing easily
- grid-template: 100px 200px 300px / 1fr 3fr 1fr;
-

## Bootstrap:

- Look at bootstrap examples for projects.
- install: npm i bootstrap@5.3.2
- ui-patterns.com This is a good website for examples of UI
- Fro screen resizing you need to include each of the maximum screen size you want to use, so for example a class tied to a column might look like this: class="col-lg-3 col-md-4 col-sm-6" which dictates the maximum items that can be displayed on the screen: so for small screens its 3 large columns
- adding !important to a css, the changes will have priority over anything else.

### Bootstrap Carousel:

- Go to bootstrap.com and look at carousel examples
-

# Javascript

- html is responsible for all content (image, button, div)
- css is responsible for the presentation, styling and placement of the content prepared with html to the desired position on the screen
- javascript: is responsible for the interaction between the user and the web site

- Two ways to use javascript: you an either use inline script like <script></script> or import a external javascript file
- Variable: A container to store a value so we can reuse it easily
- Data types:

  - String: used for text, used between 'hello'
  - Number: Integers, Decimal Numbers, Percentages
  - Boolean: True or False
  - Undefined: Data type of a variable that does not yet have a value
  - Null: Nonexistant

- Variables can start with a letter, \_ or $ but not other symbols

- Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

  - so if you have 20 == '20' it will ignore the ''

<!-- Logical Operators -->

- && both sides need to evaluate to true
- || either side needs to be true
- ! will return opposite of result so if !(false) it will return true

## ternary operator:

- The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

## Switch Statmeent:

- To get a switch statment to use a range of values, have the switch(true) then have your conditionals:

```
var grade = 42;
//  example of switch statement with ranges
switch (true) {
  case grade < 40:
    console.log("cant go to next class");
    break;
  case grade >= 40 && grade < 45:
    console.log("No next class for you, take a class to help");
    break;
  default:
    console.log("You can go to next class");
    break;
}
```

- NameSpace Collision: if functions have the same name, they will over ride each others data
