import express from "express"
const router=express.Router()

router.get('/about',(req,res)=>{
    res.json({
        id:1,
        name:"sudhu"
    })
})

export default router;