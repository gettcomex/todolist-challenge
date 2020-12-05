module Types
  class QueryType < Types::BaseObject
    # /todos
    field :todos, [Types::TodoType], null: false

    def todos
      Todo.all
    end

    field :todo, Types::TodoType, null: false do
      argument :id, ID, required: true
    end

    def todo(id:)
      Todo.find(id)
    end
  end
end
