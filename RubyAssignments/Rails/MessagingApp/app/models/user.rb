class User < ActiveRecord::Base
  has_secure_password
  EMAIL_REGEX = /\A(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})\z/i

  has_many :sent_messages, class_name: "Message", foreign_key: :sender_id
  #      any name you want, references JOIN table, by specifying the tables column

  # Time to traverse back to other table
  has_many :sent_messages_to_user, through: :sent_messages, source: :reciever
    #name it what you want, specify the first traverse, and say the column(:reciever) you want to go back through!

  has_many :recieved_messages, class_name: "Message", foreign_key: :reciever_id
  has_many :recieved_messages_from_user, through: :recieved_messages, source: :sender

  # before_create :downcase_email //// this happens after validation
  before_validation :downcase_email
  validates :email, uniqueness: true, format: { with: EMAIL_REGEX, message: "Please enter a valid email" }
  validates :name, :email, :password, presence: true

  private
    def downcase_email
        self.email.downcase!
    end


end
