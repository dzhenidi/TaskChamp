Rails.application.routes.draw do
  root to: 'static_pages#root'
  get 'auth/google_oauth2/callback', to: 'api/sessions#omni_create', defaults: { format: :json }

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:index]
    resources :todos, only: [:index, :show, :create, :destroy, :update]
    resources :projects, only: [:index, :show, :create, :destroy, :update]
    resources :comments, only: [:index, :show, :create]
  end
end
