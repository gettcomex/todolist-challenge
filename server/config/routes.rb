Rails.application.routes.draw do
  resources :todos, path: "api/todos", defaults: {format: :json}
end
