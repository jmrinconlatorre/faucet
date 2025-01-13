import express from 'express'
import { Request, Response } from 'express'
import { request } from 'http'
import cors from 'cors'

const app = express()
const port = 3333

app.use(express.json())
app.use(cors())

app.get('/:p1/:p2', (req: Request, res: Response) => {
  const { p1, p2 } = req.params
  res.send({ p1: p1, p2: p2 })
})

app.post('/', (req: Request, res: Response) => {
  const body = req.body
  //res.send(`{ "message": "Hello from POST", "body": ${JSON.stringify(body)} }`)
  res.send(body)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
