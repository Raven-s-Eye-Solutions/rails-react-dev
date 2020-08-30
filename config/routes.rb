Rails.application.routes.draw do
  root "pages#index"
  get "current-time", to: "time#getCurrentTime"
end
