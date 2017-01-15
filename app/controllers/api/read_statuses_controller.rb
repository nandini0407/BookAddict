class Api::ReadStatusesController < ApplicationController

  before_action :require_user

  def index
    @read_statuses = ReadStatus.all
  end

end
