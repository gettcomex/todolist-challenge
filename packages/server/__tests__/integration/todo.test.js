const request = require('supertest')

const createServer = require('../../src/app')
const truncate = require('../utils/truncate')
const { Todo } = require('../../src/app/models')

const app = createServer()

describe('Create todos', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should be able to create a todo', async () => {
    const { body } = await request(app)
      .post('/todos')
      .send({ name: 'Learn React Native' })
      .expect(200)

    const { name, status } = await Todo.findOne({ where: { id: body.id } })

    expect(name).toBe('Learn React Native')
    expect(status).toBe('pending')
  })
})

describe('Update todos', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('it should be able to mark a todo as complete', async () => {
    const { body } = await request(app)
      .post('/todos')
      .send({ name: 'Learn Node.js' })
      .expect(200)

    await request(app)
      .put(`/todos/${body.id}`)
      .send({ status: 'complete' })
      .expect(200)

    const { status } = await Todo.findOne({ where: { id: body.id } })

    expect(status).toBe('complete')
  })
})

describe('Delete todos', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should able to delete a todo', async () => {
    const { body } = await request(app)
      .post('/todos')
      .send({ name: 'Learn Rails' })
      .expect(200)

    await request(app).del(`/todos/${body.id}`).expect(200)

    const todo = await Todo.findOne({ where: { id: body.id } })

    expect(todo).toBeNull()
  })
})
