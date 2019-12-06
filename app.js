// Difine UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners 
function loadEventListeners() {
  //Add task event
  form.addEventListener('submit', addTask);
}
// Add Task
function addTask(e) {
  if (taskInput.value=== ''){
    alert('Add a task');
  }

  //Create li element
  const li = document.createElement('li');

  li.className = 'collection-item'
  // create tect node and apend to li
  li.appendChild(document.createTextNode(taskInput.value));
   // Create new link element
   const link = document.createElement('a');
   //Add class 
   link.className = 'delete-item secondary-content';
   // Add icon html
   link.innerHTML = '<i class="fa fa-remove"></i>';
  e.preventDefault();
}
