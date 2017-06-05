class UsersController < ApplicationController
  before_action :set_user, only: [:show]
  def new
  end
  def create
  @user = User.new(params.require(:user).permit(:first_name, :last_name, :email))
    if @user.valid?
      @user.save
      flash[:notice] = ['User successfully created']
      redirect_to user_path(@user.id)
    else
     flash[:notice] = @user.errors.full_messages
      redirect_to '/users/new' 
    end
  end
  def show
  end

  private
  def set_user
    @user = User.find(params[:id])
  end
end
