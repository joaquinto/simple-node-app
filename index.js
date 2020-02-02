const express = require("express")

const port = 3000
const app = express()

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
