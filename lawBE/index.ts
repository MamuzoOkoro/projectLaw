import express, { Application } from "express"

const app:Application =express()
const port :number = 2854

const server = app.listen(port,()=>{
    console.log("")
    console.log(`server listening on ${port}`)
})


process.on("uncaughtException",(reason:any)=>{
    console.log("server is shutting down due to caught exception")
    console.log(reason)
})

process.on("unhandledRejection",(error:any)=>{
    console.log("server is shutting down due to unhandled rejection")
    console.log(error)
    server.close(()=>{
        process.exit(1)
    })
})