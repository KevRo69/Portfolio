class Contact < ApplicationRecord
  validates :first_name, :last_name, :email, :title, :message, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
