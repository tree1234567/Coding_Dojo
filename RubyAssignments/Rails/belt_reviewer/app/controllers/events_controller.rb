class EventsController < ApplicationController
  def show
    @event = Event.find(params[:event_id])
    @attending = @event.attending.count
    @attendees = @event.attendees
    @dicussion = Comment.where("event_id = ?", @event)
  end

  def comment
    @user = User.find(session[:user_id])
    @event = Event.find(params[:event_id])
    Comment.create(user:@user, event: @event, content: params[:content])
    return redirect_to "/events/#{params[:event_id]}"
  end
  def join
    @user = User.find(session[:user_id])
    @event = Event.find(params[:event_id])
    @attending = Attending.new(user_attending:@user, event: @event)
    if @attending.valid?
      @attending.save
      return redirect_to "/"
    end
    

  end

  def create
    @user = User.find(session[:user_id])
    Event.create(name: params[:name], host: @user, location: params[:location], event_date: params[:date])
    return redirect_to '/'
  end
  def destroy
    @user = User.find(session[:user_id])
    @event = Event.find(params[:event_id])
    @attending = Attending.find_by(user_attending: @user, event: @event)
    @attending.destroy
    return redirect_to '/'
  end
end
