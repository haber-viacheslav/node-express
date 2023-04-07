const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");

class Course {
	constructor(title, price, img) {
		this.title = title;
		this.price = price;
		this.img = img;
	}

	toJSON() {
		return {
			title: this.title,
			price: this.price,
			img: this.img,
			id: nanoid(),
		};
	}

	static async update(course) {
		const courses = await Course.getAll();
		const idx = courses.findIndex((courseObj) => courseObj.id === course.id);
		courses[idx] = course;

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, "..", "db", "courses.json"),
				JSON.stringify(courses),
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

	async save() {
		console.log(nanoid());

		const courses = await Course.getAll();
		courses.push(this.toJSON());

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, "..", "db", "courses.json"),
				JSON.stringify(courses),
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

	static getAll() {
		return new Promise((resolve, reject) => {
			fs.readFile(path.join(__dirname, "..", "db", "courses.json"), "utf-8", (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(JSON.parse(data));
				}
			});
		});
	}
	static async getById(id) {
		const courses = await Course.getAll();
		return courses.find((course) => course.id === id);
	}

	static editCourse() {}
}

module.exports = Course;
