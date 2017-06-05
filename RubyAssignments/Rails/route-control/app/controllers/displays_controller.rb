class DisplaysController < ApplicationController
    def index
        render text: "Fuck this shit"
    end
    def hello
        render text: "Hello Coding Dojo!"
    end
    def sayinghi
        render text: "Saying Hello!"
    end

    def sayinghiname
        render text: "Saying Hello #{params[:name]}!"
    end

    def times
    # if session[:count] exists, leave it as is. Else set it to 0
        session[:count] ||= 0
        render text: "You have visited this url #{session[:count] += 1} time(s)"
    end

    def destroy
        reset_session
        redirect_to '/times'
    end

end
