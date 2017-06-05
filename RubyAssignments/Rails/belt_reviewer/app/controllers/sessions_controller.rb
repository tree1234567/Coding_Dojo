class SessionsController < ApplicationController
  before_action :logged_in, only: [:index]
 def new
    logged_in_redirect

  end

  def index
      current_user
      puts session[:user_state]
      @user = User.find(session[:user_id])
      @events_local = Event.where( "location = ?", session[:user_state] )
      @events_abroad = Event.where("location != ?", session[:user_state])
      
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
      session[:user_state] = @user.state
    end
    flash[:errors] = ["Invalid Email or Password"]
    redirect_to '/sessions/new'
  end

  def destroy
    session.clear
    redirect_to '/sessions/new'
  end
  def register
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      session[:user_state] = @user.state
      session[:user_id] = @user.id
      return redirect_to '/'
    end
    flash[:errors] = @user.errors.full_messages
    redirect_to '/sessions/new'

  end

  def edit
    @user = User.find(params[:user_id])
  end

  def update
    @user = User.find(params[:user_id])
    @user.update(update_params)
    return redirect_to"/"
  end


  private
    def logged_in_redirect
      if session[:user_id]
        return redirect_to "/"
      end
    end
    def login_params
      params.require(:user).permit(:email, :password)
    end
    def logged_in
      if !session[:user_id]
        return redirect_to '/sessions/new'
      end  
    end

    def update_params
      params.require(:user).permit(:first_name, :last_name, :email, :city, :state)
    end

    def user_params
      params.require(:user).permit(:first_name,:last_name, :email, :password, :password_confirmation, :city, :state)
    end



end
