class DojosController < ApplicationController
    def index
        @dojos = Dojo.all
    end
    def new
    end
    def create
        @dojo = Dojo.create(branch:params[:branch], street:params[:street], city: params[:city], state:params[:state])
        if @dojo.valid?
           return redirect_to '/'
        end
        flash.now[:errors] = @dojo.errors.full_messages
        render 'new'
    end

    def show
        @dojo = Dojo.find(params[:id])
    end

    def edit
        @dojo = Dojo.find(params[:id])
    end
    
    def update
        @dojo = Dojo.find(params[:id])
        @dojo.update(branch:params[:branch], street:params[:street], city: params[:city], state:params[:state])
        if @dojo.valid?
            @dojo.save
            return redirect_to '/'
        end
        flash.now[:errors] = @dojo.errors.full_messages
        render 'edit'
    end

    def delete
        dojo = Dojo.find(params[:id])
        dojo.delete
        dojo.save
        redirect_to '/'
    end


end
