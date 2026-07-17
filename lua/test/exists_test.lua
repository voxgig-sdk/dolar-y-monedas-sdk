-- DolarYMonedas SDK exists test

local sdk = require("dolar-y-monedas_sdk")

describe("DolarYMonedasSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
