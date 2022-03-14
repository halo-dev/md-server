const express = require("express")
const { markdownIt } = require("@halo-dev/markdown-renderer")
const app = express()

const PORT = 8000

app.use(express.json())

app.post("/render", (req, res) => {
    const html = markdownIt.render(req.body.text)
    res.send(html)
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});