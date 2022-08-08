import express from 'express'
import YtdlController from '../controllers/ytdl.controller'
const router = express.Router()

router.post('/', YtdlController.getInfo)

export default router
