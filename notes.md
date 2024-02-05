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
