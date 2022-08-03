import { env } from './src/config'
import express from 'express'
import morgan from 'morgan'
import app from './src/app'

// middelware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// run server
app.listen(env.port, () => {
    console.log(`Server started => http://localhost:${env.port}${env.context}`)
})
