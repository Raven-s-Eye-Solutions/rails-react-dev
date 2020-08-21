require 'test_helper'

class TimeControllerTest < ActionDispatch::IntegrationTest
  test "should get getCurrentTime" do
    get time_getCurrentTime_url
    assert_response :success
  end

end
