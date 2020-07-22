Rails.application.routes.draw do
  get '/service-worker.js', to: 'pwas#service_worker'
  get '/manifest.json', to: 'pwas#manifest'

  root 'home#index'
end
