# DolarYMonedas SDK utility: feature_add
module DolarYMonedasUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
