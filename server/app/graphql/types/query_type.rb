# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # /tasks
    field :tasks, [Types::TaskType], null: true
    def tasks
      Task.all
    end
  end
end
