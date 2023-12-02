import { Response, Request } from "express"
import express from "express"
import cors from "cors"
import userRoute from './routes/users'

const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/',(req:Request, res:Response) => {
  res.send('Hello from My-Project API')
})

app.use('/my-app/api/users', userRoute)

app.listen(9001, () => console.log("Api listen on port 9001"))