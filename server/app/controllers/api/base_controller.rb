module Api
    class TodosController < Api::ApplicationController
      def index
        todos = Todo.order('created_at DESC');
        render json: {status: 'SUCCESS', message: 'Loaded tasks', data:todos}, status: :ok
end
