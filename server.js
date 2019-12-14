const express = require("express")
const helmet = require("helmet")

const projectsRouter = require('./Projects/projects');
const actionsRouter = require('./Actions/action');
const { logger } = require('./middleware')

const server = express()


server.use('/api/projects', projectsRouter)
server.use('/api/projects/:id/actions', actionsRouter)

server.use(helmet())
server.use(express.json())
server.use(logger())


server.get("/", (req, res) => {
    console.log("ip:", req.ip)
    res.send("<h2>Adam's WebPT8 API Challenge Sprint</h3>")
})



module.exports = server
