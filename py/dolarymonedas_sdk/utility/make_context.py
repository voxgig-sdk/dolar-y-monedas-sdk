# DolarYMonedas SDK utility: make_context

from dolarymonedas_sdk.core.context import DolarYMonedasContext


def make_context_util(ctxmap, basectx):
    return DolarYMonedasContext(ctxmap, basectx)
