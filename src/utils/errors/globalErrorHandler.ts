/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Request, type Response, type NextFunction } from "express"
import { logger } from "../logger"

interface CustomError extends Error {
  statusCode?: number
  errors?: any
}

export const globalErrorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500
  const message =
    process.env.NODE_ENV === "production"
      ? statusCode === 500
        ? "Internal Server Error"
        : err.message
      : err.message

  // Log full error with stack
  logger.error({
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    statusCode,
    errors: err.errors || null,
  })

  res.status(statusCode).json({
    success: false,
    message,
    errors:
      process.env.NODE_ENV !== "production" ? err.errors || null : undefined,
  })
}
