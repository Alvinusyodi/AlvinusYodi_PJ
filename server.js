const express = require('express');
const sequelize = require('./config/database');
const Todo = require('./models/Todo');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const path = require('path');
const { swaggerUi, specs } = require('./swagger');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// RESTful API Endpoints with Swagger Annotations
/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Retrieve a list of todos
 *     responses:
 *       200:
 *         description: A list of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
app.get('/api/todos', async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
});

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The created todo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
app.post('/api/todos', async (req, res) => {
    const newTodo = await Todo.create(req.body);
    res.json(newTodo);
    broadcastUpdate();
});

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The updated todo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 */
app.put('/api/todos/:id', async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    todo.update(req.body);
    res.json(todo);
    broadcastUpdate();
});

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Todo deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
app.delete('/api/todos/:id', async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    todo.destroy();
    res.json({ message: 'Todo deleted' });
    broadcastUpdate();
});

// WebSocket setup
const wss = new WebSocket.Server({ server: app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}) });

const broadcastUpdate = () => {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('update');
        }
    });
};

sequelize.sync();
