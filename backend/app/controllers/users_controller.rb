class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: author
        else
            render json: { error: "Unable to create user" }, status: 400
        end
    end

    def update
        user = User.find(params[:id])
        if user 
            user.update(user_params)
            render json: user, status: 200
        else
            render json: { error: "unable to update user" }, status 400
        end
    end

    def destroy 
        user = User.find(params[:id])
        if user
            user.destroy
            render json: user, status 200
        else
            render json: { error: "Unable to delete user" }, status 400
        end
    end

    def author_params
        params.permit(:email)
    end

end
