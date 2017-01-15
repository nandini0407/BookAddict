class Api::ReadStatusesController < ApplicationController

  def index
    @read_statuses = ReadStatus.all
  end

end
