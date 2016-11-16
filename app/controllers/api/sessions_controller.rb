class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["invalid credentials"], status: 422
    end
  end

  def omni_create
    @user = User.from_omniauth(env["omniauth.auth"])
    @user.team_id ||= Team.first.id
    @user.save!
    login(@user)
    redirect_to root_path
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: [], status: 404
    end
  end

end
