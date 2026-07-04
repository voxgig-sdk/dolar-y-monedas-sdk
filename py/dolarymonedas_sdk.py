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


    @property
    def blue(self):
        """Idiomatic facade: client.blue.list() / client.blue.load({"id": ...})."""
        from entity.blue_entity import BlueEntity
        cached = getattr(self, "_blue", None)
        if cached is None:
            cached = BlueEntity(self, None)
            self._blue = cached
        return cached

    def Blue(self, data=None):
        # Deprecated: use client.blue instead.
        from entity.blue_entity import BlueEntity
        return BlueEntity(self, data)


    @property
    def bolsa(self):
        """Idiomatic facade: client.bolsa.list() / client.bolsa.load({"id": ...})."""
        from entity.bolsa_entity import BolsaEntity
        cached = getattr(self, "_bolsa", None)
        if cached is None:
            cached = BolsaEntity(self, None)
            self._bolsa = cached
        return cached

    def Bolsa(self, data=None):
        # Deprecated: use client.bolsa instead.
        from entity.bolsa_entity import BolsaEntity
        return BolsaEntity(self, data)


    @property
    def brl(self):
        """Idiomatic facade: client.brl.list() / client.brl.load({"id": ...})."""
        from entity.brl_entity import BrlEntity
        cached = getattr(self, "_brl", None)
        if cached is None:
            cached = BrlEntity(self, None)
            self._brl = cached
        return cached

    def Brl(self, data=None):
        # Deprecated: use client.brl instead.
        from entity.brl_entity import BrlEntity
        return BrlEntity(self, data)


    @property
    def clp(self):
        """Idiomatic facade: client.clp.list() / client.clp.load({"id": ...})."""
        from entity.clp_entity import ClpEntity
        cached = getattr(self, "_clp", None)
        if cached is None:
            cached = ClpEntity(self, None)
            self._clp = cached
        return cached

    def Clp(self, data=None):
        # Deprecated: use client.clp instead.
        from entity.clp_entity import ClpEntity
        return ClpEntity(self, data)


    @property
    def contadoconliqui(self):
        """Idiomatic facade: client.contadoconliqui.list() / client.contadoconliqui.load({"id": ...})."""
        from entity.contadoconliqui_entity import ContadoconliquiEntity
        cached = getattr(self, "_contadoconliqui", None)
        if cached is None:
            cached = ContadoconliquiEntity(self, None)
            self._contadoconliqui = cached
        return cached

    def Contadoconliqui(self, data=None):
        # Deprecated: use client.contadoconliqui instead.
        from entity.contadoconliqui_entity import ContadoconliquiEntity
        return ContadoconliquiEntity(self, data)


    @property
    def cotizacion_ambito(self):
        """Idiomatic facade: client.cotizacion_ambito.list() / client.cotizacion_ambito.load({"id": ...})."""
        from entity.cotizacion_ambito_entity import CotizacionAmbitoEntity
        cached = getattr(self, "_cotizacion_ambito", None)
        if cached is None:
            cached = CotizacionAmbitoEntity(self, None)
            self._cotizacion_ambito = cached
        return cached

    def CotizacionAmbito(self, data=None):
        # Deprecated: use client.cotizacion_ambito instead.
        from entity.cotizacion_ambito_entity import CotizacionAmbitoEntity
        return CotizacionAmbitoEntity(self, data)


    @property
    def cotizacione(self):
        """Idiomatic facade: client.cotizacione.list() / client.cotizacione.load({"id": ...})."""
        from entity.cotizacione_entity import CotizacioneEntity
        cached = getattr(self, "_cotizacione", None)
        if cached is None:
            cached = CotizacioneEntity(self, None)
            self._cotizacione = cached
        return cached

    def Cotizacione(self, data=None):
        # Deprecated: use client.cotizacione instead.
        from entity.cotizacione_entity import CotizacioneEntity
        return CotizacioneEntity(self, data)


    @property
    def cripto(self):
        """Idiomatic facade: client.cripto.list() / client.cripto.load({"id": ...})."""
        from entity.cripto_entity import CriptoEntity
        cached = getattr(self, "_cripto", None)
        if cached is None:
            cached = CriptoEntity(self, None)
            self._cripto = cached
        return cached

    def Cripto(self, data=None):
        # Deprecated: use client.cripto instead.
        from entity.cripto_entity import CriptoEntity
        return CriptoEntity(self, data)


    @property
    def dolare(self):
        """Idiomatic facade: client.dolare.list() / client.dolare.load({"id": ...})."""
        from entity.dolare_entity import DolareEntity
        cached = getattr(self, "_dolare", None)
        if cached is None:
            cached = DolareEntity(self, None)
            self._dolare = cached
        return cached

    def Dolare(self, data=None):
        # Deprecated: use client.dolare instead.
        from entity.dolare_entity import DolareEntity
        return DolareEntity(self, data)


    @property
    def estado(self):
        """Idiomatic facade: client.estado.list() / client.estado.load({"id": ...})."""
        from entity.estado_entity import EstadoEntity
        cached = getattr(self, "_estado", None)
        if cached is None:
            cached = EstadoEntity(self, None)
            self._estado = cached
        return cached

    def Estado(self, data=None):
        # Deprecated: use client.estado instead.
        from entity.estado_entity import EstadoEntity
        return EstadoEntity(self, data)


    @property
    def eur(self):
        """Idiomatic facade: client.eur.list() / client.eur.load({"id": ...})."""
        from entity.eur_entity import EurEntity
        cached = getattr(self, "_eur", None)
        if cached is None:
            cached = EurEntity(self, None)
            self._eur = cached
        return cached

    def Eur(self, data=None):
        # Deprecated: use client.eur instead.
        from entity.eur_entity import EurEntity
        return EurEntity(self, data)


    @property
    def mayorista(self):
        """Idiomatic facade: client.mayorista.list() / client.mayorista.load({"id": ...})."""
        from entity.mayorista_entity import MayoristaEntity
        cached = getattr(self, "_mayorista", None)
        if cached is None:
            cached = MayoristaEntity(self, None)
            self._mayorista = cached
        return cached

    def Mayorista(self, data=None):
        # Deprecated: use client.mayorista instead.
        from entity.mayorista_entity import MayoristaEntity
        return MayoristaEntity(self, data)


    @property
    def oficial(self):
        """Idiomatic facade: client.oficial.list() / client.oficial.load({"id": ...})."""
        from entity.oficial_entity import OficialEntity
        cached = getattr(self, "_oficial", None)
        if cached is None:
            cached = OficialEntity(self, None)
            self._oficial = cached
        return cached

    def Oficial(self, data=None):
        # Deprecated: use client.oficial instead.
        from entity.oficial_entity import OficialEntity
        return OficialEntity(self, data)


    @property
    def tarjeta(self):
        """Idiomatic facade: client.tarjeta.list() / client.tarjeta.load({"id": ...})."""
        from entity.tarjeta_entity import TarjetaEntity
        cached = getattr(self, "_tarjeta", None)
        if cached is None:
            cached = TarjetaEntity(self, None)
            self._tarjeta = cached
        return cached

    def Tarjeta(self, data=None):
        # Deprecated: use client.tarjeta instead.
        from entity.tarjeta_entity import TarjetaEntity
        return TarjetaEntity(self, data)


    @property
    def uyu(self):
        """Idiomatic facade: client.uyu.list() / client.uyu.load({"id": ...})."""
        from entity.uyu_entity import UyuEntity
        cached = getattr(self, "_uyu", None)
        if cached is None:
            cached = UyuEntity(self, None)
            self._uyu = cached
        return cached

    def Uyu(self, data=None):
        # Deprecated: use client.uyu instead.
        from entity.uyu_entity import UyuEntity
        return UyuEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None):
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
