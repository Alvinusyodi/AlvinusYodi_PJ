// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Todo = sequelize.define('Todo', {
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     completed: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false
//     }
// });

// module.exports = Todo;
// models/Todo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Todo;

// Add Swagger schema definition
/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the todo
 *         title:
 *           type: string
 *           description: The title of the todo
 *         completed:
 *           type: boolean
 *           description: The completion status of the todo
 *       example:
 *         id: 1
 *         title: Learn Swagger
 *         completed: false
 */

