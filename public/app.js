document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const socket = new WebSocket('ws://localhost:3000');

    const fetchTodos = async () => {
        const response = await fetch('/api/todos');
        const todos = await response.json();
        renderTodos(todos);
    };

    const renderTodos = (todos) => {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;
            li.className = todo.completed ? 'completed' : '';
            li.addEventListener('click', async () => {
                await fetch(`/api/todos/${todo.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ completed: !todo.completed })
                });
                fetchTodos();
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', async () => {
                await fetch(`/api/todos/${todo.id}`, { method: 'DELETE' });
                fetchTodos();
            });
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = input.value;
        if (title) {
            await fetch('/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title })
            });
            input.value = '';
            fetchTodos();
        }
    });

    socket.addEventListener('message', fetchTodos);

    fetchTodos();
});
