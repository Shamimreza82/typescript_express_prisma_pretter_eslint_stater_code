import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express"
import helmet from "helmet"
import { logger } from "./utils/logger"
import { globalErrorHandler } from "./utils/errors/globalErrorHandler"
import { notFoundHandler } from "./utils/errors/notFoundHandler"

const app = express()

app.use(express.json())
app.use(helmet())

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`Request received for ${req.method} ${req.url}`)
  next()
})

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" })
})

app.use(notFoundHandler)
app.use(globalErrorHandler)
export default app
