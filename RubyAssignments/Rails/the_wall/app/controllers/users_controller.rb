class UsersController < ApplicationController
    def index
    end
    

    def login
        user = User.find_by(email: params[:email])
        if user.password == params[:password]
            session[:user_name] = user.first_name
            session[:user_id] = user.id

            puts session[:id]
            redirect_to '/wall'
        else
            redirect_to'/login/index'
        end
    end

    def register
       @user = User.create(user_params)
        if @user.valid?
            session[:user_name] = @user.first_name
            session[:user_id] = @user.id
            @user.save
            return redirect_to '/wall'
        end
        flash.now[:errors] = @user.errors.full_messages
        render 'index'


    end

    def logout
        reset_session
        redirect_to'/'
    end


    private 
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end

end
