class UsersController < ApplicationController
  def index
  
    render json: User.all
  end

  def create
    @user_create = User.create(name: params[:name])
    redirect_to '/'
  end

  def info
    
    render json: User.find(params[:id])

  end
  def new
    

  end
end
