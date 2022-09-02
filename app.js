const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const mongoose = require("mongoose");
const cors = require("cors");
const expressSession = require("express-session");

const app = express();
dotenv.config();

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use(express.json());
app.set("trust proxy", 1);
const sessSettings = expressSession({
	path: "/",
	secret: "oursecret",
	resave: true,
	saveUninitialized: true,
	cookie: {
		sameSite: false,
		secure: false,
		maxAge: 360000,
	},
});

app.use(sessSettings);
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
	logger.info(" Mongodb connected successfully");
});

app.get("/", (req, res) => {
	res.status(200).json({ messsage: "Server is running!" });
});

app.use("/api/package", require("./routes/travelPackageRoutes"));

app.use("/api/vehicle", require("./routes/VehicleRoutes"));

app.use("/api/vacancy", require("./routes/CareerRoutes"));

app.listen(PORT, () => {
	logger.info(`Server is running on PORT: ${PORT}`);
});
