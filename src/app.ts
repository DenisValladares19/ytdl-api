import { env } from './config'
import express from 'express'
import mainRoutes from './routes'
import morgan from 'morgan'
import cors from 'cors'
const app = express()

// middelware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config routes here
app.use(env.context + 'api', mainRoutes)

export default app
