# �F�؊m�F�p�R���g���[���[
class Api::V1::Auth::SessionsController < ApplicationController
  def index
    if current_api_v1_user
      render json: { status: 200, current_user: current_api_v1_user }
    else
      render json: { status: 500, message: "���[�U�[�����݂��܂���" }
    end
  end
end