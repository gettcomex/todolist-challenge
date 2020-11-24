# frozen_string_literal: true

module Mutations
  class CreateTask < GraphQL::Schema::RelayClassicMutation
    field :task, Types::TaskType, null: false

    argument :description, String, required: true
    argument :isDone, Boolean, required: true

    def resolve(*args)
      {
        task: Task.create(args[0])
      }
    end
  end
end
