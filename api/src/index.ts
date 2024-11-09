import express, {json, urlencoded} from 'express'
import serverless from "serverless-http";

import productRouters from './routes/products/index.js'
import authRoutes from './routes/auth/index.js'
import ordersRoutes from './routes/orders/index.js'

const port = 3000;
const app = express()
app.use(urlencoded({extended:false}))
app.use(json())
app.use('/products',productRouters)
app.use('/auth',authRoutes)
app.use('/orders',ordersRoutes)

 if (process.env.NODE_ENV === "dev"){
     app.listen(port, () => {
       console.log(`app is listing on port ${port}`);
     });
 }
  export const handler = serverless(app);

