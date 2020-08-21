class TimeController < ApplicationController
  def getCurrentTime
    response = { 'time': Time.new() }
    json_response(response)
  end
end
