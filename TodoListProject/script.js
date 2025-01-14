function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
  
    if (taskValue) {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      li.textContent = taskValue;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete");
      deleteBtn.onclick = () => li.remove();
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      taskInput.value = "";
    }
  }
  