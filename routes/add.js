const { Router } = require("express");
const Course = require("../models/course");
const router = Router();

router.get("/", (req, res, next) => {
	res.render("add", {
		title: "Add course",
		isAdd: true,
	});
});

router.post("/", async (req, res) => {
	console.log(req.body);

	const { title, price, img } = req.body;

	const course = new Course(title, price, img);
	await course.save();
	res.redirect("/courses");
});

module.exports = router;
