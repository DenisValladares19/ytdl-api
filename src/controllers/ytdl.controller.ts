import { Request } from 'express'
import { ResponseEntity } from '../interfaces/response-entity.interface'
import { YtdlService } from '../services/ytdl.service'

class YtdlController {
    constructor(private ytdlService: YtdlService) {}

    async getInfo(req: Request, res: ResponseEntity) {
        try {
            if (!req.body.url) {
                throw new Error('Url is required')
            }

            const info = await this.ytdlService.getInfo(req.body.url)
            console.log('this is info => ', info)

            res.status(200).json({
                status: 200,
                message: 'Success',
                data: info,
            })
        } catch (error) {
            res.status(500).json<string>({
                status: 500,
                message: error as string,
                data: '',
            })
        }
    }
}

export default new YtdlController(new YtdlService())
