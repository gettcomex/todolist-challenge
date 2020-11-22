# frozen_string_literal: true

module Mutations
  class UpdateTaskDescription < GraphQL::Schema::RelayClassicMutation
    field :tasks, [Types::TaskType], null: true

    argument :id, ID, required: true
    argument :description, String, required: false

    def resolve(id:, description:)
      {
          _: Task.update(id, { description: description }),
          tasks: Task.all
      }
    end
  end
end
