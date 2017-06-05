class SessionsController < ApplicationController
  def new

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
      return redirect_to '/users/%s' % @user.id
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
      puts "**********************************"
      params.require(:user).permit(:email, :password)
  
    end

end
