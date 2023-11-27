Rails.application.routes.draw do
  root "static#home"
  get 'static/pricing'
  get 'static/terms'
  get 'static/privacy'
  get 'static/about'
  get "up" => "rails/health#show", as: :rails_health_check
end
