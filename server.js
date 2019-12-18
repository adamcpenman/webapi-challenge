const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const projectsRouter = require('./Projects/projects');
const actionsRouter = require('./Actions/action');
const { logger } = require('./middleware')

const server = express()


server.use('/api/projects',cors(), projectsRouter)
server.use('/api/projects/:id/actions',cors(), actionsRouter)

server.options('*', cors())
server.use(cors())
server.use(helmet())
server.use(express.json())
server.use(logger())



server.get("/", cors(), (req, res) => {
    console.log("ip:", req.ip)
    res.send("<h2>Adam's WebPT8 API Challenge Sprint</h3>")
})



module.exports = server
