class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    if current_user
      @user = current_user;
      if @user.update(user_params)
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :team_id, :avatar)
  end
end
