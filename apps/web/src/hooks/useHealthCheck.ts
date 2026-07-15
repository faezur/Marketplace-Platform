import { useQuery } from '@tanstack/react-query'
import { fetchHealthCheck } from '@/lib/api'

export function useHealthCheck() {
  return useQuery({
    queryKey: ['health'],
    queryFn: fetchHealthCheck,
    retry: 1,
  })
}
