# DolarYMonedas SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module DolarYMonedasFeatures
  def self.make_feature(name)
    case name
    when "base"
      DolarYMonedasBaseFeature.new
    when "test"
      DolarYMonedasTestFeature.new
    else
      DolarYMonedasBaseFeature.new
    end
  end
end
