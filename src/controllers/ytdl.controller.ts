import { Request } from 'express'
import { ResponseEntity } from '../interfaces/response-entity.interface'
import { YtdlService } from '../services/ytdl.service'

export class YtdlController {
    async getInfo(req: Request, res: ResponseEntity) {
        try {
            console.log(req.body)
            if (!req.body.url) {
                throw new Error('Url is required')
            }
            const ytdlService = new YtdlService()
            const info = await ytdlService.getInfo(req.body.url)
            console.log('this is info => ', info)

            res.status(200).json({
                status: 200,
                message: 'Success',
                data: info,
            })
        } catch (error) {
            console.log('this is error => ', error)
            res.status(500).json<string>({
                status: 500,
                message: error as string,
                data: '',
            })
        }
    }
}
