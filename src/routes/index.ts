import express from 'express'
import downloadRoute from './download.route'
import searchRoute from './search.route'
const router = express.Router()

router.use('/download', downloadRoute)
router.use('/search', searchRoute)

export default router
