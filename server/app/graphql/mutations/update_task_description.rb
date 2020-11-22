# frozen_string_literal: true

module Mutations
  class UpdateTaskDescription < GraphQL::Schema::RelayClassicMutation
    field :task, Types::TaskType, null: false

    argument :id, ID, required: true
    argument :description, String, required: false

    def resolve(id:, description:)
      {
        task: Task.update(id, { description: description })
      }
    end
  end
end
