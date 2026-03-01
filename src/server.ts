import "dotenv/config" // Loads variables from .env automatically
import app from "./app.js"

// 1. Use environment variables for the Port
// 2. Default to 5000 if PORT is not defined
const PORT = process.env.PORT || 5000

async function bootstrap() {
  try {
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`)
      console.log("👷 Press CTRL+C to stop")
    })

    // 3. Graceful Shutdown
    // This ensures the database connections close cleanly if the server stops
    const exitHandler = () => {
      if (server) {
        server.close(() => {
          console.log("Server closed")
          process.exit(1)
        })
      } else {
        process.exit(1)
      }
    }

    process.on("SIGTERM", exitHandler)
    process.on("SIGINT", exitHandler)
  } catch (error) {
    console.error("❌ Failed to start server:", error)
  }
}

bootstrap()
