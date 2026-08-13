# DolarYMonedas SDK exists test

import pytest
from dolarymonedas_sdk import DolarYMonedasSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = DolarYMonedasSDK.test(None, None)
        assert testsdk is not None
