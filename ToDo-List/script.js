document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");

            const textSpan = document.createElement("span");
            textSpan.textContent = taskText;
            textSpan.classList.add("task-text");

            textSpan.addEventListener("click", function () {
                textSpan.classList.toggle("completed"); 
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn");
            deleteButton.style.marginLeft = "10px";

            deleteButton.addEventListener("click", function () {
                li.remove();
            });

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("edit-btn");
            editButton.style.background = "white";
            editButton.style.border = "none";
            editButton.style.borderRadius = "3px";
            editButton.style.marginLeft = "10px";

            editButton.addEventListener("click", function () {
                let input = prompt("На что хотите изменить?", textSpan.textContent);
                if (input !== null && input.trim() !== "") {
                    textSpan.textContent = input;
                }
            });

            li.appendChild(textSpan);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    addTaskButton.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

