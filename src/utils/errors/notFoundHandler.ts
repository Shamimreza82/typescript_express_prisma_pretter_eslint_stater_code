/* eslint-disable @typescript-eslint/no-unused-vars */
import { type Request, type Response, type NextFunction } from "express"

// This should come AFTER all other routes
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  })
}
