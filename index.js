const express = require("express");
const exphbs = require("express-handlebars");
const homeRoutes = require("./routes/home");
const addRoutes = require("./routes/add");
const coursesRoutes = require("./routes/courses");
const basketRoutes = require("./routes/basket");
const path = require("path");
const app = express();

const hbs = exphbs.create({
	defaultLayout: "main",
	extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoutes);
app.use("/add", addRoutes);
app.use("/courses", coursesRoutes);
app.use("/basket", basketRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT} `);
});
