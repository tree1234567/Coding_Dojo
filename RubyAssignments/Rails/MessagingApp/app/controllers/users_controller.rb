class UsersController < ApplicationController
  def index
  end
  def create
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      return redirect_to '/sessions/index'
    end
    flash[:errors] = @user.errors.full_messages
    redirect_to '/sessions/new'

  end

  def send_message
    @sender = User.find(session[:user_id])
    begin 
      @reciever = User.find(message_params[:recieving_user])
    rescue
      flash[:errors] = ["Message does not have a recipiant!"]
      return redirect_to '/sessions/index'
    end
    @message = Message.new(sender: @sender, reciever: @reciever, content: message_params[:content])
    if @message.valid?
      @message.save
      return redirect_to"/sessions/index"
    end
    flash[:errors] = @message.errors.full_messages
    return redirect_to "/sessions/index"
  end
  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def message_params
    params.require(:message).permit(:recieving_user, :content)
  end
end
