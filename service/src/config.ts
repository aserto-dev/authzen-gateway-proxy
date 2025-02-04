import { AuthzOptions } from '@aserto/aserto-node'

const getConfig: () => AuthzOptions & { serviceName?: string } & { port?: string } = () => {
  const {
    ASERTO_AUTHORIZER_SERVICE_URL,
    ASERTO_POLICY_ROOT,
    ASERTO_AUTHORIZER_API_KEY,
    ASERTO_TENANT_ID,
    ASERTO_POLICY_INSTANCE_NAME,
    ASERTO_POLICY_INSTANCE_LABEL,
    ASERTO_AUTHORIZER_CERT_PATH,
    ASERTO_SERVICE_NAME,
    PORT,
  } = process.env

  if (!ASERTO_AUTHORIZER_SERVICE_URL) {
    throw new Error('ASERTO_AUTHORIZER_SERVICE_URL is not defined')
  }
  if (!ASERTO_POLICY_ROOT) {
    throw new Error('ASERTO_POLICY_ROOT is not defined')
  }

  const authzOptions = {
    authorizerServiceUrl: ASERTO_AUTHORIZER_SERVICE_URL,
    policyRoot: ASERTO_POLICY_ROOT,
    ...(ASERTO_AUTHORIZER_API_KEY && {
      authorizerApiKey: ASERTO_AUTHORIZER_API_KEY,
    }),
    ...(ASERTO_TENANT_ID && {
      tenantId: ASERTO_TENANT_ID,
    }),
    ...(ASERTO_POLICY_INSTANCE_NAME && {
      instanceName: ASERTO_POLICY_INSTANCE_NAME,
    }),
    ...(ASERTO_POLICY_INSTANCE_LABEL && {
      instanceLabel: ASERTO_POLICY_INSTANCE_LABEL,
    }),
    ...(ASERTO_SERVICE_NAME && {
      serviceName: ASERTO_SERVICE_NAME,
    }),
    ...(ASERTO_AUTHORIZER_CERT_PATH && {
      authorizerCertCAFile: ASERTO_AUTHORIZER_CERT_PATH,
    }),
    ...(PORT && {
      port: PORT,
    }),
  }
  return authzOptions
}

export { getConfig }
