const json_server=require('json-server')
const movieServer=json_server.create()
const middleware=json_server.defaults()
const router=json_server.router('db.json')
const cors=require('cors')
movieServer.use(cors())
movieServer.use(middleware)
movieServer.use(router)

const PORT=8000
movieServer.listen(PORT,()=>{
    console.log(`Movie server started at port number ${PORT}.....`);
})