import { Router } from "express";

// product endpoint
const router = Router()
router.get('/', (req,res)=>{
    res.send('List of products')
})

router.post('/', (req,res)=>{
    res.send('New Product created')
})

router.get('/:id', (req,res)=>{
    console.log(req.params)
    res.send('A product')
})

export default router