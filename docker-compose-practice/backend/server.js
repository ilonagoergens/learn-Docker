const express = require("express")
const app = express()

app.get("/api", (req, res) => {
	res.json({ message: "Hallo vom Backend!" })
})

app.listen(3000, () => {
	console.log("Backend läuft auf Port 3000")
})
