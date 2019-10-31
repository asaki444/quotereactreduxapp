Rails.application.routes.draw do
  namespace :api do
    resources :quotes, except: [:new, :edit]
    resources :authors, except: [:new, :edit, :create]
    resources :users
    post 'user_token' => 'user_token#create'
    post 'find_user' => 'users#find'
  end

end
