import express, {Router} from 'express'


import productRouters from './routes/products/index'

const port = 3000;
const app = express()

app.get('/',(req, res) =>{
    res.send('Hello world')
})




app.use('/products',productRouters)

app.listen(port, ()=>{
    console.log(`app is listing on port ${port}`)
})