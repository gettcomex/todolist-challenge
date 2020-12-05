module Types
  class TodoType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :finished, Boolean, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :todos, [Types::TodoType], null: false
  end
end
