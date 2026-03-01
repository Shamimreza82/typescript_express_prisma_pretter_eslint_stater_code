import "dotenv/config" // Loads variables from .env automatically
import app from "./app.js"
import { EnvConfig } from "./config/envConfigValidation.js"
import { logger } from "./utils/logger.js"

// 1. Use environment variables for the Port
// 2. Default to 5000 if PORT is not defined
const PORT = EnvConfig.PORT || 5000

async function bootstrap() {
  try {
    const server = app.listen(PORT, () => {
      logger.warn(`Server is running at http://localhost:${PORT}`)
    })

    // 3. Graceful Shutdown
    // This ensures the database connections close cleanly if the server stops
    const exitHandler = () => {
      if (server) {
        server.close(() => {
          logger.warn("Server closed")
          process.exit(1)
        })
      } else {
        process.exit(1)
      }
    }

    process.on("SIGTERM", exitHandler)
    process.on("SIGINT", exitHandler)
  } catch (error) {
    logger.error(`❌ Failed to start server: ${error}`)
  }
}

bootstrap()
