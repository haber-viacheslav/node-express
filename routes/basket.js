const router = require("express").Router();
const Basket = require("../models/basket");
const Course = require("../models/course");

router.post("/add", async (req, res) => {
	const { id } = req.body;
	const course = await Course.getById(id);
	await Basket.add(course);
	res.redirect("/basket");
});

router.get("/", async (req, res) => {
	const basket = await Basket.get();
	res.render("basket", {
		title: "Basket",
		isBasket: true,
		courses: basket.courses,
		price: basket.price,
	});
});

router.delete("/remove/:id", async (req, res) => {
	const basket = await Basket.remove(req.params.id);
	res.status(200).json(basket);
});

module.exports = router;
