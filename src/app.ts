import { env } from './config'
import express from 'express'
import mainRoutes from './routes'
const app = express()

// config routes here
app.use(env.context, mainRoutes)

export default app
