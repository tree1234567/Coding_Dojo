class User < ActiveRecord::Base
  EMAIL_REGEX = /\A(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})\z/i
  has_secure_password
  before_create :downcase_email
  validates :email, :uniqueness => true, format: { with: EMAIL_REGEX, message: "Please enter a valid email" }
  validates :name, :email, :password, presence: true



  private
    def downcase_email
        self.email.downcase!
    end


end
