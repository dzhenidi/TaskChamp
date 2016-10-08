class Api::TodosController < ApplicationController

  def index
    @todos = Todo
      .where(todoer_id: current_user.id)
      .order(due_date: :desc)
    render 'api/todos/index'
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.author_id = current_user.id

    if @todo.save
      render 'api/todos/show'
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def show
    @todo = Todo.find(params[:id])
    if @todo
      render 'api/todos/show'
    else
      render json: ["todo doesn't exist"], status: 404
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render 'api/todos/show'
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render 'api/todos/show'
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end


  private

  def todo_params
    params.require(:todo).permit(
      :title, :description, :due_date, :todoer_id, :done)
  end
end
