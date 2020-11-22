# frozen_string_literal: true

module Mutations
  class UpdateTaskStatus < GraphQL::Schema::RelayClassicMutation
    field :task, Types::TaskType, null: false

    argument :id, ID, required: true
    argument :isDone, Boolean, required: false

    def resolve(id:, isDone:)
      {
        task: Task.update(id, {isDone: isDone })
      }
    end
  end
end
