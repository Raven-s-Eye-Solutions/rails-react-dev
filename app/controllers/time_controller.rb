class TimeController < ApplicationController
  def getCurrentTime
    # Time in seconds since epoch
    response = { 'time': Time.now.to_i }
    render json: response
  end
end
