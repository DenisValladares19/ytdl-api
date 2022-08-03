import { env } from './config'
import express from 'express'
import mainRoutes from './routes'
import morgan from 'morgan'
const app = express()

// middelware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config routes here
app.use(env.context, mainRoutes)

export default app
