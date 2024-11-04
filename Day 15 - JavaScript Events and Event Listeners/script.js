const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');
const addTaskButton = document.getElementById('addTaskButton');
const filterSelect = document.getElementById('filterSelect');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const category = categorySelect.value;

    if (taskText) {
        const newTask = {text: taskText, category, completed: false};
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const taskIndex = event.target.dataset.index;
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        renderTasks();
    }
});

filterSelect.addEventListener('change', () => {
    renderTasks();
})

function renderTasks() {
    const filter = filterSelect.value;
    taskList.innerHTML = '';

    tasks
        .filter(task => filter === 'All' || task.category === filter)
        .forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = `${task.text} - [${task.category}]`;
            taskItem.dataset.index = index;

            if (task.completed) {
                taskItem.style.textDecoration = 'line-through';
                taskItem.style.color = 'gray';
            }

            taskList.appendChild(taskItem);
        });
}