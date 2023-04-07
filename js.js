// // Налаштування
// const recordCollection = {
// 	2548: {
// 		albumTitle: "Slippery When Wet",
// 		artist: "Bon Jovi",
// 		tracks: ["Let It Rock", "You Give Love a Bad Name"],
// 	},
// 	2468: {
// 		albumTitle: "1999",
// 		artist: "Prince",
// 		tracks: ["1999", "Little Red Corvette"],
// 	},
// 	1245: {
// 		artist: "Robert Palmer",
// 		tracks: [],
// 	},
// 	5439: {
// 		albumTitle: "ABBA Gold",
// 	},
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
// 	if (!records[id].hasOwnProperty("tracks")) {
// 		records[id]["tracks"] = [];
// 	}

// 	if (value && prop === "tracks") {
// 		records[id].tracks.push(value);
// 	}
// 	if (value === "") {
// 		delete records[id][prop];
// 	}
// 	if (value && prop !== "tracks") {
// 		records[id][prop] = value;
// 	}

// 	return records;
// }

// // console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
// // console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

// function multiplyAll(arr) {
// 	let product = 1;
// 	// Змініть код лише під цим рядком
// 	for (let i = 0; i < arr.length; i += 1) {
// 		for (let j = 0; j < arr[i].length; j += 1) {
// 			product *= arr[i][j];
// 		}
// 	}
// 	// Змініть код лише над цим рядком
// 	console.log(product);

// 	return product;
// }

// multiplyAll([
// 	[1, 2],
// 	[3, 4],
// 	[5, 6, 7],
// ]);
