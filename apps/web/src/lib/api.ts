import axios from 'axios'
import type { ApiResponse, HealthCheckResponse } from '@marketplace/shared'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:4000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchHealthCheck(): Promise<HealthCheckResponse> {
  const response = await api.get<ApiResponse<HealthCheckResponse>>('/health')
  return response.data.data
}

export { api }
