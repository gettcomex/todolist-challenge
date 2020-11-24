# frozen_string_literal: true

# Tasks Controller
module Api
  module V1
    class TasksController < ApplicationController
      # GET /tasks
      def index
        @tasks = Task.all
        render json: @tasks
      end

      # POST /tasks
      def create
        @task = Task.new(task_params)
        @task.save
        render json: @task
      rescue StandardError => e
        render json: { status: 'ERROR', message: 'Unable to create task', data: e }, status: 400
      end

      # PUT /tasks/:id
      def update
        @task = Task.find(params[:id])
        @task.update(task_params)
        render json: { status: 'SUCCESS', message: 'Task updated', data: @task }, status: :ok
      rescue StandardError => e
        render json: { status: 'ERROR', message: 'Unable to update task', data: e }, status: 400
      end

      # DELETE /tasks/:id
      def destroy
        @task = Task.find(params[:id])
        @task.destroy
        render json: { status: 'SUCCESS', message: 'Task deleted' }, status: :ok
      rescue StandardError => e
        render json: { status: 'ERROR', message: 'Unable to delete task', data: e }, status: 400
      end

      private

      # @return [TrueClass]
      def task_params
        params.permit(:description, :isDone)
      end
    end
  end
end
