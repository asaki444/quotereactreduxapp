Rails.application.routes.draw do
  Rails.application.routes.draw do
  namespace :api do
    resources :quotes, except: [:new, :edit]
    resources :authors, only: [:show, :index]
  end
end
end
