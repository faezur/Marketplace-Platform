import type { HealthCheckResponse } from '@marketplace/shared'
import { API_VERSION } from '@marketplace/shared'

export class HealthService {
  getStatus(): HealthCheckResponse {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: API_VERSION,
    }
  }
}
