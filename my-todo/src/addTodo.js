export function addTodo() {
    const input = document.getElementById('todoInput');
    const newTodo = input.value.trim();

    if (!newTodo) {
        alert("Please enter a task!");
        return;
    }

    const list = document.getElementById('todoList');
    const item = document.createElement('li');
    item.textContent = newTodo;

    // Optional: Add a delete button for each todo item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        list.removeChild(item);
    };
    item.appendChild(deleteButton);

    list.appendChild(item);
    input.value = ''; // Clear the input
}
