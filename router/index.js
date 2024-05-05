import express from "express"
import userRouter from './users.js'
const router=express.Router()

router.get('/about',(req,res)=>{
    res.json({
        id:1,
        name:"sudhu"
    })
})


router.get('/about/:user',(req,res)=>{
    res.json({
        id:1,
        name:req.params.user
    })

})

router.use("/family",userRouter)
router.get('*',(req,res)=>
{
    res.send("astriek")
})


export default router;