# DolarYMonedas SDK utility: make_context
require_relative '../core/context'
module DolarYMonedasUtilities
  MakeContext = ->(ctxmap, basectx) {
    DolarYMonedasContext.new(ctxmap, basectx)
  }
end
