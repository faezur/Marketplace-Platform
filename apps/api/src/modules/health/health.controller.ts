import type { Request, Response } from 'express'
import { HealthService } from './health.service.js'

const healthService = new HealthService()

export function getHealth(_req: Request, res: Response): void {
  const data = healthService.getStatus()

  res.json({
    success: true,
    data,
  })
}
