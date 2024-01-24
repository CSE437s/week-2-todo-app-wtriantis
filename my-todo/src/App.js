import { addTodo } from './addTodo.js';
document.getElementById('todoInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

document.getElementById('addButton').addEventListener('click', addTodo);

export default addTodo;