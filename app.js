// Difine UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
	//DOM load Event
	document.addEventListener("DOMContentLoaded", getTasks);
	//Add task event
	form.addEventListener("submit", addTask);
	//Remove task event
	taskList.addEventListener("click", removeTask);
	//Clear Taskevent
	clearBtn.addEventListener("click", clearTasks);
	//Filter tasks events
	filter.addEventListener("keyup", filterTasks);
}

// Get Task from local Storage
function getTasks() {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
	tasks.forEach(function(task) {
		//Create li element
		const li = document.createElement("li");
		// add name
		li.className = "collection-item";
		// create text node and apend to li
		li.appendChild(document.createTextNode(task));
		// Create new link element
		const link = document.createElement("a");
		//Add class
		link.className = "delete-item secondary-content";
		// Add icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';
		// Append li to ul
		li.appendChild(link);

		taskList.appendChild(li);
	});
}
// Add Task
function addTask(e) {
	if (taskInput.value === " ") {
		alert("Add a task");
	}

	//Create li element
	const li = document.createElement("li");
	// add name
	li.className = "collection-item";
	// create text node and apend to li
	li.appendChild(document.createTextNode(taskInput.value));
	// Create new link element
	const link = document.createElement("a");
	//Add class
	link.className = "delete-item secondary-content";
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';
	// Append li to ul
	li.appendChild(link);

	taskList.appendChild(li);

	//Store in Local Storage
	storeTaskInLocalStorage(taskInput.value);

	//Clear input
	taskInput.value = " ";

	e.preventDefault();
}
//Store task

function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	tasks.push(task);
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Remove task
function removeTask(e) {
	if (e.target.parentElement.classList.contains("delete-item")) {
		if (confirm("Are you Sure?")) {
			e.target.parentElement.parentElement.remove();
		}
	}
}
// clear task
function clearTasks() {
	//taskList.innerHTML = '';

	//Faster
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

//filter Tasks
function filterTasks(e) {
	const text = e.target.value.toLowerCase();

	document.querySelectorAll(".collection-item").forEach(function(task) {
		const item = task.firstChild.textContent;
		if (item.toLocaleLowerCase().indexOf(text) != -1) {
			task.style.display = "block";
		} else {
			task.style.display = "none";
		}
	});
}
