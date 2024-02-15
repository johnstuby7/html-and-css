// Data Controller

// UI Controller
var DOMStrings = {
  addBtn: document.querySelector(".add__btn"),
  taskDescription: document.querySelector(".add__description"),
};

// App Controller
// Will return the input data and the entered text to the console
function ctrlAddTask() {
  var input, text;

  // Get input data from DOM
  input = DOMStrings.taskDescription;
  text = input.value;

  // Check for Text
  if (text) {
    console.log("Input is not empty");
    //  Add the task to the data structure
    // Add the task to the UI
    // Clear the field
  }
}

DOMStrings.addBtn.addEventListener("click", ctrlAddTask);

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    ctrlAddTeask();
  }
});
