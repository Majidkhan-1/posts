require('dotenv').config()
const app = require("./src/app")
const connectDB = require("./src/db/db")

async function startServer() {
    await connectDB()

    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}

startServer().catch((error) => {
    console.error("Failed to start server:", error)
    process.exit(1)
})