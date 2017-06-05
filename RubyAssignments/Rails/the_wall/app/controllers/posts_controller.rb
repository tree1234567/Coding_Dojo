class PostsController < ApplicationController
    def home
        @posts = Post.all
        @comments = Comment.all
    end
    def create_comment
        user = User.find(session[:user_id])
        post = Post.find(params[:id])
        comment= Comment.create(user: user, post:post, message: params[:comment])
        comment.save
        redirect_to '/wall'
    end

    def create_post
    user = User.find(session[:user_id])
    post = Post.create(user: user, message: params[:post])
    post.save
    redirect_to '/wall'
    end
end
