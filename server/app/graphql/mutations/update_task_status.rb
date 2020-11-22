# frozen_string_literal: true

module Mutations
  class UpdateTaskStatus < GraphQL::Schema::RelayClassicMutation
    field :tasks, [Types::TaskType], null: true


    argument :id, ID, required: true
    argument :isDone, Boolean, required: false

    def resolve(id:, isDone:)
      {
        _: Task.update(id, {isDone: isDone }),
        tasks: Task.all
      }
    end
  end
end
