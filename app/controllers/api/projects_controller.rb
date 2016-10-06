class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.where(team_id: current_user.team_id)
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id
    @project.team_id = current_user.team_id

    if @project.save
      render 'api/projects/show'
    else
      render json @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = current_user.projects.find(params[:id])
    if @project
      render 'api/projects/show'
    else
      render json: ["project doesn't exist"], status: 404
    end
  end

  def destroy
    @project = current_user.projects.find(params[:id])
    @project.destroy
    render 'api/projects/show'
  end

  def update
    @project = current_user.find(params[:id])
    if @project.update(project_params)
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description)
  end

end
