
        function addTodo() {
            const todoInput = document.getElementById("todo-input");
            const todoText = todoInput.value.trim();
            
            if (todoText !== "") {
                const todoList = document.getElementById("todo-list");

                const li = document.createElement("li");
                li.textContent = todoText;

                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.className = "delete-btn";
                deleteBtn.onclick = () => li.remove();

                li.appendChild(deleteBtn);
                todoList.appendChild(li);

                todoInput.value = "";
            } else {
                alert("Please enter a task.");
            }
        }