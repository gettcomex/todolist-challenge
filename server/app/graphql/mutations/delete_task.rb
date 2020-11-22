# frozen_string_literal: true

module Mutations
  class DeleteTask < GraphQL::Schema::RelayClassicMutation
    field :success, Integer, null: false

    argument :id, ID, required: true

    def resolve(id:)
      {
        success: Task.delete(id)
      }
    end
  end
end
