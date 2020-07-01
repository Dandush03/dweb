# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static#show'
  resources  :static, only: %i[index] 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
