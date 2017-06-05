class TasksController < ApplicationController
  def index
    if session[:id]   
      @user = User.find(session[:id])
      @tasks = Task.where(user_id: @user)
    else
      redirect_to '/login/index'
    end
  
  
  end

  def add
  end

  def create
    
    user = User.find(session[:id])
    Task.create(name:params['name'], status:false, user:user)
    redirect_to '/'
  end

  def edit

    task_id = Task.find(params[:id])
    puts task_id
    puts '*******************************'
    puts task_id.status
    if task_id.status == true
      task_id.status = false
    else
      task_id.status = true
    end
    task_id.save
    redirect_to '/'

  end
end
