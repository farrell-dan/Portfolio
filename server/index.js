const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const PORT = 8888;

const app = express();

app.get("/api/test", (req, res) => {
	res.json({ message: " You hit the end point!" });
});

// app.get("/api/testMongo", async (req, res) => {
// 	const client = new MongoClient(MONGO_URI);

// 	try {
// 		await client.connect();
// 		const result = await client
// 			.db("portfolio-project")
// 			.collection("people")
// 			.insertOne({ name: "Jimmy" });

// 		res.json(result);
// 	} catch (err) {
// 		console.log(err);
// 		res.status(400).json({ message: "something went wrong" });
// 	} finally {
// 		await client.close();
// 	}
// });


app.get("/api/people", async (req, res) => {
	const client = new MongoClient(MONGO_URI);

	try {
		await client.connect();
		const result = await client
			.db("portfolio-project")
			.collection("people")
			.find().toArray();

		res.json(result);
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: "something went wrong" });
	} finally {
		await client.close();
	}
});


app.listen(PORT);
