require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");


const app = express();
require("./config")(app);


// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const passwordRouter = require("./routes/password.routes");
app.use('/api', isAuthenticated, passwordRouter);

const projectRouter = require("./routes/project.routes");
app.use("/api", isAuthenticated, projectRouter);

const taskRouter = require("./routes/task.routes");
app.use("/api", isAuthenticated, taskRouter);

const profileRouter = require("./routes/profile.routes");
app.use('/api', isAuthenticated, profileRouter);


const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);


require("./error-handling")(app);

module.exports = app;
