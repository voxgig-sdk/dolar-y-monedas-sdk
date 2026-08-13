# DolarYMonedas SDK feature factory

from dolarymonedas_sdk.feature.base_feature import DolarYMonedasBaseFeature
from dolarymonedas_sdk.feature.test_feature import DolarYMonedasTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DolarYMonedasBaseFeature(),
        "test": lambda: DolarYMonedasTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
