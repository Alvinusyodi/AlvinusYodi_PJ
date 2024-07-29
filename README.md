# Todo List Project

This is a simple Todo List application built using Node.js, Express, Sequelize, MySQL, and WebSocket. The application allows users to create, read, update, and delete todos, and uses WebSocket to broadcast updates to all connected clients.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [WebSocket](#websocket)
- [Swagger Documentation](#swagger-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete todos.
- Real-time updates using WebSocket.
- API documentation with Swagger.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/todo-list-project.git
    cd todo-list-project
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Set up the MySQL database:**
    - Create a MySQL database.
    - Update the database configuration in `config/database.js` with your MySQL credentials.

4. **Run database migrations:**
    ```bash
    npx sequelize-cli db:migrate
    ```

5. **Start the server:**
    ```bash
    npm start
    ```

6. **Open your browser and navigate to** `http://localhost:3000` **to use the application.**

## Usage

- Open `http://localhost:3000` in your browser to use the Todo List application.
- Use the input field to add new todos.
- Click on a todo to mark it as completed.
- Use the delete button to remove a todo.

## API Endpoints

### GET /api/todos
Retrieve a list of all todos.

### POST /api/todos
Create a new todo.

### PUT /api/todos/{id}
Update an existing todo.

### DELETE /api/todos/{id}
Delete a todo.

## WebSocket

The application uses WebSocket to broadcast updates to all connected clients. When a todo is created, updated, or deleted, all connected clients receive a message to update their todo lists.

## Swagger Documentation

The API is documented using Swagger. To view the Swagger UI and test the endpoints, follow these steps:

1. **Start the server:**
    ```bash
    npm start
    ```

2. **Open your browser and navigate to** `http://localhost:3000/api-docs`.

You should see the Swagger UI with the available API endpoints. You can use the UI to test the API by sending requests and viewing the responses.

