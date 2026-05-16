-- DolarYMonedas SDK error

local DolarYMonedasError = {}
DolarYMonedasError.__index = DolarYMonedasError


function DolarYMonedasError.new(code, msg, ctx)
  local self = setmetatable({}, DolarYMonedasError)
  self.is_sdk_error = true
  self.sdk = "DolarYMonedas"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function DolarYMonedasError:error()
  return self.msg
end


function DolarYMonedasError:__tostring()
  return self.msg
end


return DolarYMonedasError
