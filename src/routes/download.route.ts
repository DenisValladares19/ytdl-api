import express from 'express'
import YtdlController from '../controllers/ytdl.controller'
const router = express.Router()

router.get('/', YtdlController.getInfo)

export default router
