import express, {json, urlencoded} from 'express'


import productRouters from './routes/products/index.js'
import authRoutes from './routes/auth/index.js'

const port = 3000;
const app = express()
app.use(urlencoded({extended:false}))
app.use(json())
app.use('/products',productRouters)
app.use('/auth',authRoutes)

app.listen(port, ()=>{
    console.log(`app is listing on port ${port}`)
})