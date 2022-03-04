class SessionsController < ApplicationController
    skip_action_before :authorized 

    def get_current_user
        render json: current_user
    end

    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            @token = encode_token({ user_id: @user.id})
            render json: { user: @user, token: @token }, status: :ok
        else
            render json: { errors: ["Username and Password must match"]}, status: unprocessible_entity
        end
    end
end
