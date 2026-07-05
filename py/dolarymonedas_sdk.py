# DolarYMonedas SDK

from utility.voxgig_struct import voxgig_struct as vs
from core.utility_type import DolarYMonedasUtility
from core.spec import DolarYMonedasSpec
from core import helpers

# Load utility registration (populates Utility._registrar)
from utility import register

# Load features
from feature.base_feature import DolarYMonedasBaseFeature
from features import _make_feature


class DolarYMonedasSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = DolarYMonedasUtility()
        self._utility = utility

        from config import make_config
        config = make_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features from config.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            feature_items = vs.items(feature_opts)
            if feature_items is not None:
                for item in feature_items:
                    fname = item[0]
                    fopts = helpers.to_map(item[1])
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return DolarYMonedasUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = DolarYMonedasSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    def direct(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }


    def Blue(self, data=None) -> "BlueEntity":
        """Entity factory: client.Blue().list() / client.Blue().load({"id": ...})."""
        from entity.blue_entity import BlueEntity
        return BlueEntity(self, data)


    def Bolsa(self, data=None) -> "BolsaEntity":
        """Entity factory: client.Bolsa().list() / client.Bolsa().load({"id": ...})."""
        from entity.bolsa_entity import BolsaEntity
        return BolsaEntity(self, data)


    def Brl(self, data=None) -> "BrlEntity":
        """Entity factory: client.Brl().list() / client.Brl().load({"id": ...})."""
        from entity.brl_entity import BrlEntity
        return BrlEntity(self, data)


    def Clp(self, data=None) -> "ClpEntity":
        """Entity factory: client.Clp().list() / client.Clp().load({"id": ...})."""
        from entity.clp_entity import ClpEntity
        return ClpEntity(self, data)


    def Contadoconliqui(self, data=None) -> "ContadoconliquiEntity":
        """Entity factory: client.Contadoconliqui().list() / client.Contadoconliqui().load({"id": ...})."""
        from entity.contadoconliqui_entity import ContadoconliquiEntity
        return ContadoconliquiEntity(self, data)


    def CotizacionAmbito(self, data=None) -> "CotizacionAmbitoEntity":
        """Entity factory: client.CotizacionAmbito().list() / client.CotizacionAmbito().load({"id": ...})."""
        from entity.cotizacion_ambito_entity import CotizacionAmbitoEntity
        return CotizacionAmbitoEntity(self, data)


    def Cotizacione(self, data=None) -> "CotizacioneEntity":
        """Entity factory: client.Cotizacione().list() / client.Cotizacione().load({"id": ...})."""
        from entity.cotizacione_entity import CotizacioneEntity
        return CotizacioneEntity(self, data)


    def Cripto(self, data=None) -> "CriptoEntity":
        """Entity factory: client.Cripto().list() / client.Cripto().load({"id": ...})."""
        from entity.cripto_entity import CriptoEntity
        return CriptoEntity(self, data)


    def Dolare(self, data=None) -> "DolareEntity":
        """Entity factory: client.Dolare().list() / client.Dolare().load({"id": ...})."""
        from entity.dolare_entity import DolareEntity
        return DolareEntity(self, data)


    def Estado(self, data=None) -> "EstadoEntity":
        """Entity factory: client.Estado().list() / client.Estado().load({"id": ...})."""
        from entity.estado_entity import EstadoEntity
        return EstadoEntity(self, data)


    def Eur(self, data=None) -> "EurEntity":
        """Entity factory: client.Eur().list() / client.Eur().load({"id": ...})."""
        from entity.eur_entity import EurEntity
        return EurEntity(self, data)


    def Mayorista(self, data=None) -> "MayoristaEntity":
        """Entity factory: client.Mayorista().list() / client.Mayorista().load({"id": ...})."""
        from entity.mayorista_entity import MayoristaEntity
        return MayoristaEntity(self, data)


    def Oficial(self, data=None) -> "OficialEntity":
        """Entity factory: client.Oficial().list() / client.Oficial().load({"id": ...})."""
        from entity.oficial_entity import OficialEntity
        return OficialEntity(self, data)


    def Tarjeta(self, data=None) -> "TarjetaEntity":
        """Entity factory: client.Tarjeta().list() / client.Tarjeta().load({"id": ...})."""
        from entity.tarjeta_entity import TarjetaEntity
        return TarjetaEntity(self, data)


    def Uyu(self, data=None) -> "UyuEntity":
        """Entity factory: client.Uyu().list() / client.Uyu().load({"id": ...})."""
        from entity.uyu_entity import UyuEntity
        return UyuEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "DolarYMonedasSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from entity.blue_entity import BlueEntity
    from entity.bolsa_entity import BolsaEntity
    from entity.brl_entity import BrlEntity
    from entity.clp_entity import ClpEntity
    from entity.contadoconliqui_entity import ContadoconliquiEntity
    from entity.cotizacion_ambito_entity import CotizacionAmbitoEntity
    from entity.cotizacione_entity import CotizacioneEntity
    from entity.cripto_entity import CriptoEntity
    from entity.dolare_entity import DolareEntity
    from entity.estado_entity import EstadoEntity
    from entity.eur_entity import EurEntity
    from entity.mayorista_entity import MayoristaEntity
    from entity.oficial_entity import OficialEntity
    from entity.tarjeta_entity import TarjetaEntity
    from entity.uyu_entity import UyuEntity
