import router from './router/index.js'


import express from "express"

const app = express()
const port=8000

app.get('/',(req,res)=>{

    res.send("hello sudhu")
})


app.use(router)




app.listen(port,()=>{
    console.log("Server is running");
})
