# DolarYMonedas SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DolarYMonedasFeatures
  def self.make_feature(name)
    case name
    when "base"
      DolarYMonedasBaseFeature.new
    when "ratelimit"
      DolarYMonedasRatelimitFeature.new
    when "retry"
      DolarYMonedasRetryFeature.new
    when "test"
      DolarYMonedasTestFeature.new
    when "timeout"
      DolarYMonedasTimeoutFeature.new
    else
      DolarYMonedasBaseFeature.new
    end
  end
end
