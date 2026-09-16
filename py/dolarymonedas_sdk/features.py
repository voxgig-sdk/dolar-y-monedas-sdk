# DolarYMonedas SDK feature factory

from dolarymonedas_sdk.feature.base_feature import DolarYMonedasBaseFeature
from dolarymonedas_sdk.feature.ratelimit_feature import DolarYMonedasRatelimitFeature
from dolarymonedas_sdk.feature.retry_feature import DolarYMonedasRetryFeature
from dolarymonedas_sdk.feature.test_feature import DolarYMonedasTestFeature
from dolarymonedas_sdk.feature.timeout_feature import DolarYMonedasTimeoutFeature


_FEATURES = {
    "base": lambda: DolarYMonedasBaseFeature(),
    "ratelimit": lambda: DolarYMonedasRatelimitFeature(),
    "retry": lambda: DolarYMonedasRetryFeature(),
    "test": lambda: DolarYMonedasTestFeature(),
    "timeout": lambda: DolarYMonedasTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
