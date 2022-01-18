const router = require("express").Router()
var Twitter = require("twitter")

var client = new Twitter({
	consumer_key: process.env.consumer_key,
	consumer_secret: process.env.consumer_secret,
	access_token_key: process.env.access_token_key,
	access_token_secret: process.env.access_token_secret,
})

router.get("/trends", async (req, res, next) => {
	// gets trends for the location of a given woeid
	try {
		const id = req.params.woeid
		const trends = await client.get("/trends/place.json", { id: 1 })
		res.send({ trends })
	} catch (error) {
		next(error)
	}
})
router.get("/current-loaction-trends", async (req, res, next) => {
	// gets the woeid for a location given the longitude and latitude
	try {
		const { lat, long } = req.query
		const resp = await client.get("/trends/closest.json", { lat, long })
		res.send({ resp })
	} catch (error) {
		next(error)
	}
})

module.exports = router
