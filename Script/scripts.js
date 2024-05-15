document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            if (e.target.classList.contains('delete')) {
                e.target.closest('li').remove();
            } else if (e.target.classList.contains('complete')) {
                e.target.closest('li').classList.toggle('completed');
            }
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        
        const taskDiv = document.createElement('div');
        taskDiv.textContent = taskText;
        li.appendChild(taskDiv);

        const btnsDiv = document.createElement('div');
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        btnsDiv.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        btnsDiv.appendChild(deleteButton);

        li.appendChild(btnsDiv);
        taskList.appendChild(li);
    }
});
