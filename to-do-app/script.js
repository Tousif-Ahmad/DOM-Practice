// Get elements from the page
let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addTaskBtn");
let list = document.querySelector("#taskList");

let tasks = []; // Store all tasks here
// Add a new task
function addTask() {
  let text = input.value.trim();

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push(text);
  input.value = "";
  showTasks();
}

// Show all tasks on the page
function showTasks() {
  list.innerHTML = ""; // Clear the list first

  if (tasks.length === 0) {
    list.innerHTML = '<li class="empty-state">No tasks yet. Add one above!</li>';
    return;
  }

  //  Using forEach instead of for loop
  tasks.forEach((task, index) => {
    let taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    //  Use textContent for safety
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    //  Click listeners
    taskItem.addEventListener("click", function () {
      taskItem.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent parent click
      tasks.splice(index, 1); // Remove task
      showTasks(); // Refresh
    });

    taskItem.appendChild(span);
    taskItem.appendChild(deleteBtn);
    list.appendChild(taskItem);
  });
}

// Event listeners
addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Initial render
showTasks();




















