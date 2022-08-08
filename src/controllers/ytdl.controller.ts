import { Request } from 'express'
import { ResponseEntity } from '../interfaces/response-entity.interface'
import YtdlService from '../services/ytdl.service'

class YtdlController {
    async getInfo(req: Request, res: ResponseEntity) {
        try {
            console.log(req.body)
            if (!req.body.url) {
                throw new Error('Url is required')
            }
            const info = await YtdlService.getInfo(req.body.url)

            res.status(200).json({
                status: 200,
                message: 'Se obtuvo la información exitosamente',
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

export default new YtdlController()
