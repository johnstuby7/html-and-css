// Data Controller

// Store tasks
var taskStore = [];

// Constructor for tasks
var Task = function (id, description) {
  this.id = id;
  this.description = description;
};

//  To test that the above works, in the console on the browser, add a new Task(0, 'test') and you should get a result

// Add Task
function addTask(des) {
  var newTask;
  ID = 0;

  // How to ensure that each id should be unique
  if (taskStore.length > 0) {
    ID = taskStore[taskStore.length - 1].id + 1;
  } else {
    ID = 0;
  }

  // Create new Task
  newTask = new Task(ID, des);

  // Push it into data structure
  taskStore.push(newTask);

  // return the new task
  return newTask;
}

// UI Controller
var DOMStrings = {
  addBtn: document.querySelector(".add__btn"),
  taskDescription: document.querySelector(".add__description"),
};

// App Controller
// Will return the input data and the entered text to the console
function ctrlAddTask() {
  var input, text, newTask;

  // Get input data from DOM
  input = DOMStrings.taskDescription;
  text = input.value;

  // Check for Text
  if (text) {
    //  Add the task to the data structure
    newTask = addTask(text);
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
