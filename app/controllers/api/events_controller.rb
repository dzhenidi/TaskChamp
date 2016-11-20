class Api::EventsController < ApplicationController

  def index
    @events = current_user.events
    render 'api/events/index'
  end
  
  def show
    @event = Event.find(params[:id])
    if @comment
      render 'api/events/show'
    else
      render json: ["event doesn't exist"], status: 404
    end
  end

  def create
    @event = Event.new(event_params)
    @event.users << current_user.id
    @event.users.concat(params[:event[:comments]])

    if @event.save
      render 'api/events/show'
    else
      render json: @events.errors.full_messages, status: 422
    end
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :start_date, :end_date)
end
