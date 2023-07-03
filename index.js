const jsonServer = require("json-server")
require("dotenv").config()


const server = jsonServer.create();

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

//use middleware
server.use(middleware)
//use router
server.use(router)

//listen server

server.listen(process.env.port || 8080)