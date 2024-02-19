- For vue to be able to pickup the html logic, you need to tie a id to the html:

  - div id = root
  - then reference that id in the vue instance: new Vue({ el: '#root'})

- Computed: Computed properties are written like methods, but they do not accept any input arguments. Computed properties are updated automatically when a dependency changes, while methods are called on when something happens, like with event handling for example.
- data: Data is the private memory of each component where you can store any variables you need. Props are how you pass this data from a parent component down to a child component.
- Expressions: Double curly braces {{ }} are used for data binding, where you can interpolate expressions and display their values in the template.

-You are able to add Expressions to html by doing the following:

```
<div>
  {{ inputContent.split('').reverse().join()}}
</div>
```

- used Vue2 for this course

- For vue, the html needs to be in a template code, while functional logic is located in <script></script>
- Vue Component: Respresents a set of rules for getting content on the screen and how users can interact with it
- Vue Instance: an Instance of a vue Component

- You are only allowed one root element, this is why you have a parent div and child divs
