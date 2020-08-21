Rails.application.routes.draw do
  get "time/getCurrentTime"
  root "pages#index"
end
