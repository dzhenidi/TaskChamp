class Api::EventsController < ApplicationController

  def index
    @events = current_user.events.order(start_date: :asc)
    render 'api/events/index'
  end

  def show
    @event = Event.find(params[:id])
    if @event
      render 'api/events/show'
    else
      render json: ["event doesn't exist"], status: 404
    end
  end

  def create
    @event = Event.new(event_params)
    @event.users << current_user
    @event.author_id = current_user.id
    if params[:schedule_event]["users"]
      @event.user_ids = (params[:schedule_event]["users"] + [current_user.id])
    else
      @event.user_ids = [current_user.id]
    end
    if @event.save
      render json: @event.id.to_s
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  private
  def event_params
    params.require(:schedule_event).permit(:title, :description, :start_date, :end_date, :users)
  end
end
