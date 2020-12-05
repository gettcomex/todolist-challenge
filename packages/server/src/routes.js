const express = require('express')
const TodoController = require('./app/controllers/TodoController')

const routes = express.Router()

routes.get('/todos', TodoController.index)
routes.post('/todos', TodoController.store)
routes.put('/todos/:id', TodoController.update)
routes.delete('/todos/:id', TodoController.delete)

module.exports = routes
