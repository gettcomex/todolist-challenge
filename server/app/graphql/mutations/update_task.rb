# frozen_string_literal: true

module Mutations
  class UpdateTask < GraphQL::Schema::RelayClassicMutation
    field :task, Types::TaskType, null: false

    argument :id, ID, required: true
    argument :description, String, required: false
    argument :isDone, Boolean, required: false

    def resolve(id:, description:, is_done:)
      {
        task: Task.update(id, { description: description, isDone: is_done })
      }
    end
  end
end
