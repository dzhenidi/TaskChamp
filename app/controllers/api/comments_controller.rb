class Api::CommentsController < ApplicationController

  def show
    @comment = Comment.find(params[:id])
    if @comment
      render 'api/comments/show'
    else
      render json: ["comment doesn't exist"], status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @comment.team_id = current_user.team_id

    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :commentable_id, :commentable_type)
  end
end
