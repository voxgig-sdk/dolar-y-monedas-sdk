# DolarYMonedas SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

DolarYMonedasUtility.registrar = ->(u) {
  u.clean = DolarYMonedasUtilities::Clean
  u.done = DolarYMonedasUtilities::Done
  u.make_error = DolarYMonedasUtilities::MakeError
  u.feature_add = DolarYMonedasUtilities::FeatureAdd
  u.feature_hook = DolarYMonedasUtilities::FeatureHook
  u.feature_init = DolarYMonedasUtilities::FeatureInit
  u.fetcher = DolarYMonedasUtilities::Fetcher
  u.make_fetch_def = DolarYMonedasUtilities::MakeFetchDef
  u.make_context = DolarYMonedasUtilities::MakeContext
  u.make_options = DolarYMonedasUtilities::MakeOptions
  u.make_request = DolarYMonedasUtilities::MakeRequest
  u.make_response = DolarYMonedasUtilities::MakeResponse
  u.make_result = DolarYMonedasUtilities::MakeResult
  u.make_point = DolarYMonedasUtilities::MakePoint
  u.make_spec = DolarYMonedasUtilities::MakeSpec
  u.make_url = DolarYMonedasUtilities::MakeUrl
  u.param = DolarYMonedasUtilities::Param
  u.prepare_auth = DolarYMonedasUtilities::PrepareAuth
  u.prepare_body = DolarYMonedasUtilities::PrepareBody
  u.prepare_headers = DolarYMonedasUtilities::PrepareHeaders
  u.prepare_method = DolarYMonedasUtilities::PrepareMethod
  u.prepare_params = DolarYMonedasUtilities::PrepareParams
  u.prepare_path = DolarYMonedasUtilities::PreparePath
  u.prepare_query = DolarYMonedasUtilities::PrepareQuery
  u.graphql_body = DolarYMonedasUtilities::GraphqlBody
  u.graphql_errors = DolarYMonedasUtilities::GraphqlErrors
  u.result_basic = DolarYMonedasUtilities::ResultBasic
  u.result_body = DolarYMonedasUtilities::ResultBody
  u.result_headers = DolarYMonedasUtilities::ResultHeaders
  u.transform_request = DolarYMonedasUtilities::TransformRequest
  u.transform_response = DolarYMonedasUtilities::TransformResponse
}
