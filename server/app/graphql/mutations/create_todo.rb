class Mutations::CreateTodo < Mutations::BaseMutation
  argument :title, String, required: true

  field :title, Types::TodoType, null: false
  field :errors, [String], null: false

  def resolve(title:)
    todo = Todo.new(title: title)
    if todo.save
      {
        todo: todo,
        errors: []
      }
    else {
      todo: nil,
      errors: todo.errors.full_messages
    }
  end
end
end
