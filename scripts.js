// scripts.js
document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const categoryInput = document.getElementById('category');
    const priorityInput = document.getElementById('priority');
    const reminderInput = document.getElementById('reminder');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const taskText = taskInput.value;
    const dueDate = dueDateInput.value;
    const category = categoryInput.value;
    const priority = priorityInput.value;
    const reminder = reminderInput.value;

    const taskItem = document.createElement('li');
    taskItem.setAttribute('data-priority', priority);
    taskItem.innerHTML = `
        <span>${taskText} (Due: ${dueDate}, Category: ${category}, Priority: ${priority})</span>
        <div>
            <button class="complete-task">Complete</button>
            <button class="delete-task">Delete</button>
        </div>
    `;

    document.getElementById('task-list').appendChild(taskItem);

    taskItem.querySelector('.complete-task').addEventListener('click', () => {
        taskItem.classList.toggle('complete');
    });

    taskItem.querySelector('.delete-task').addEventListener('click', () => {
        taskItem.remove();
    });

    // Setting a reminder (just logging for simplicity, can be enhanced with notification API)
    if (reminder) {
        const reminderTime = new Date(reminder).getTime();
        const now = new Date().getTime();
        const timeUntilReminder = reminderTime - now;

        if (timeUntilReminder > 0) {
            setTimeout(() => {
                alert(`Reminder: ${taskText}`);
            }, timeUntilReminder);
        }
    }

    taskInput.value = '';
    dueDateInput.value = '';
    categoryInput.value = 'Work';
    priorityInput.value = 'Medium';
    reminderInput.value = '';
}
