class Api::TeamsController < ApplicationController
  def index
    @teams = Team.all
    render 'api/teams/index'
  end
end
