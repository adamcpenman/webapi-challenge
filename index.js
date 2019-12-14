/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, just API

Go code!
*/

const express = require("express")
const helmet = require("helmet")

const projectsRouter = require('./Projects/projects');
const actionsRouter = require('./Actions/action');

const server = express()

const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 8080


server.use('/api/projects', projectsRouter)
server.use('/api/projects/:id/actions', actionsRouter)

server.use(helmet())
server.use(express.json())


server.get("/", (req, res) => {
    // console.log("ip:", req.ip)
    res.send("<h2>Adam's WebPT8 API Challenge Sprint</h3>")
})


server.listen(port, host, () => {
	console.log(`Running at http://localhost:${port}`)
})

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "internal error." });
});