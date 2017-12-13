Rails.application.routes.draw do
  namespace :api do
    resources :quotes, except: [:new, :edit]
    resources :authors, except: [:new, :edit, :create]
  end
end
