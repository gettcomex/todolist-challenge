# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_task, mutation: Mutations::CreateTask
    field :update_task_status, mutation: Mutations::UpdateTaskStatus
    field :update_task_description, mutation: Mutations::UpdateTaskDescription
    field :delete_task, mutation: Mutations::DeleteTask
  end
end
