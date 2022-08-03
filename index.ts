import { env } from './src/config'
import app from './src/app'

// run server
app.listen(env.port, () => {
    console.log(`Server started => http://localhost:${env.port}${env.context}`)
})
