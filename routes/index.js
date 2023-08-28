module.exports = app => {

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    const uploadRoutes = require("./upload.routes")
    app.use("/api/upload", uploadRoutes)

    // const eventsRoutes = require("./events.routes")
    // app.use("/api/events", eventsRoutes)

    // const userRoutes = require("./user.routes")
    // app.use("/api/user", userRoutes)


}