const fs = require("fs");
const path = require("path");

class Basket {
	static async add(course) {
		const basket = await Basket.get();

		const idx = basket.courses.findIndex((courseObj) => courseObj.id === course.id);
		const isInBasket = basket.courses[idx];

		if (isInBasket) {
			// course in basket
			isInBasket.count++;
			basket.courses[idx] = isInBasket;
		} else {
			// need to add
			course.count = 1;
			basket.courses.push(course);
		}
		basket.price += +course.price;

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, "..", "db", "basket.json"),
				JSON.stringify(basket),
				(err) => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				},
			);
		});
	}

	static async get() {
		return new Promise((resolve, reject) => {
			fs.readFile(path.join(__dirname, "..", "db", "basket.json"), "utf-8", (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(JSON.parse(data));
				}
			});
		});
	}
	static async remove(id) {
		const basket = await Basket.get();

		const idx = basket.courses.findIndex((courseObj) => courseObj.id === id);
		const course = basket.courses[idx];

		if (course.count === 1) {
			// remove
			basket.courses = basket.courses.filter((courseObj) => courseObj.id !== id);
		} else {
			// decrement
			basket.courses[idx] -= 1;
		}
		basket.price -= course.price;
		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, "..", "db", "basket.json"),
				JSON.stringify(basket),
				(err) => {
					if (err) {
						reject(err);
					} else {
						resolve(basket);
					}
				},
			);
		});
	}
}

module.exports = Basket;
