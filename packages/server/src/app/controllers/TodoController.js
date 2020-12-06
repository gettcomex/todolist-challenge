const { Todo } = require('../models')

module.exports = {
  async index(req, res) {
    let todos = await Todo.findAll()

    todos = todos
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
      .reverse()

    return res.json(todos)
  },

  async store(req, res) {
    const { name } = req.body

    const todo = await Todo.create({ name, status: 'in-progress' })

    return res.json(todo)
  },

  async update(req, res) {
    const { id } = req.params

    const todo = await Todo.findOne({ where: { id } })

    if (!todo) {
      return res.status(400).json({ error: 'Todo not found' })
    }

    await Todo.update({ ...req.body }, { where: { id } })

    return res.json()
  },

  async delete(req, res) {
    const { id } = req.params

    await Todo.destroy({ where: { id } })

    return res.json()
  }
}
