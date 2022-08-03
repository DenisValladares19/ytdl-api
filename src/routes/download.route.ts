import express from 'express'
import { YtdlController } from '../controllers/ytdl.controller'
const router = express.Router()
const instanceYtdlController = new YtdlController()

router.post('/', instanceYtdlController.getInfo)

export default router
