      // Select elements
      const taskInput = document.getElementById("taskInput");
      const addTaskButton = document.getElementById("addTaskButton");
      const taskList = document.getElementById("taskList");
      setInterval(() => {
        a = new Date();
        date = a.toLocaleDateString();
        document.getElementById("date").innerHTML = date;
      }, 1000);
      addTaskButton.addEventListener("click", function () {
        let msg = taskInput.value.trim();

        if (taskInput !== "") {
          const li = document.createElement("li");
          li.classList =
            "flex items-center justify-between p-2 bg-blue-100 rounded-lg overflow-auto";
          li.innerHTML = `<span class="text-gray-800">${msg}</span><Span>[${date}]</Span><button class="text-blue-500 hover:text-blue-700 remove-task">✖</button>`;
          taskList.appendChild(li);
          taskInput.value = "";
          li.querySelector(".remove-task").addEventListener(
              "click",
              function () {
                  taskList.removeChild(li);
                },
                
          );
         
        }
      });