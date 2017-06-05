class LoginController < ApplicationController
  def index
  end

  def login
    user = User.find_by(username: params[:username])
    if user.password == params[:password]
      session[:id] = user.id
      puts session[:id]
      redirect_to '/'
    else
      redirect_to'/login/index'
    end

   
  end
  def register
    if params[:password] == params[:confirm_password]
      @user = User.create(username: params[:username], password: params[:password])
      session[:id] = @user.id
      if @user.valid?
        redirect_to '/'
      else
        flash[:errors] = @user.errors.full_messages
        render 'index'
      end
    else
      render 'index'
    end

    # did the user save correctly?
    # if not, set flash errors
    # flash[:watevs] = 'ya dun goofed'

  end
  def logout
    reset_session
    redirect_to'/login/index'

  end

end
