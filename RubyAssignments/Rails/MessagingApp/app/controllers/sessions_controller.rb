class SessionsController < ApplicationController
  before_action :logged_in, only: [:index]
  def new
    logged_in_redirect
  end
  def index
      current_user
      contacts
      @user = User.find(session[:user_id])
      @users = User.all
      # @sent_messages = @user.sent_messages.includes(:reciever)
    
  end

  def create
    puts login_params["email"]
    email = login_params["email"]
    @user = User.find_by_email(email)
    if !@user
      flash[:errors] = ["Invalid Email or Password"]
      return redirect_to'/sessions/new'
    end
    if @user.authenticate(login_params[:password])
      session[:user_id] = @user.id
      return redirect_to '/sessions/index'
    end
    flash[:errors] = ["Invalid Email or Password"]
    redirect_to '/sessions/new'
  end
  
  def destroy
    session.clear
    redirect_to '/sessions/new'
  end


  private
    def login_params
      params.require(:user).permit(:email, :password)
    end
    def logged_in
      if !session[:user_id]
        return redirect_to '/sessions/new'
      end  
    end
    def contacts
      if session[:user_id]
        @contacts = []
        @user = User.find(session[:user_id])
        @messages_from = @user.recieved_messages_from_user
        @messages_to = @user.sent_messages_to_user

        @messages_from.each do |user|
          @contacts.push(user.name)
        end

        @messages_to.each do |user|
          @contacts.push(user.name)
        end
        @messages_from + @messages_to
        @unique_contacts = @contacts.flatten.uniq
      end
    end

    def logged_in_redirect
      if session[:user_id]
        return redirect_to "/sessions/index"
      end
    end

end
