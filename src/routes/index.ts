import express from 'express'
import downloadRoute from './download.route'
const router = express.Router()

router.use('/download', downloadRoute)

export default router
