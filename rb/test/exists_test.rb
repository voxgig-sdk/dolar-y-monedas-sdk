# DolarYMonedas SDK exists test

require "minitest/autorun"
require_relative "../DolarYMonedas_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = DolarYMonedasSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
