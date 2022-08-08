import { Request } from 'express'
import { ResponseEntity } from '../interfaces/response-entity.interface'
import searchService from '../services/search.service'

class SearchController {
    async search(req: Request, res: ResponseEntity) {
        try {
            if (!req.query.q) {
                throw new Error('Query is required')
            }
            const query: string = req.query.q.toString()
            console.log('query => ', query)
            const result = await searchService.search(query)

            if (!result) {
                throw new Error('No se encontraron resultados')
            }

            res.status(200).json({
                status: 200,
                message: 'success',
                data: result,
            })
        } catch (error: InstanceType<Error>) {
            console.log('this is error => ', error)
            res.status(500).json<[]>({
                status: 500,
                message: error?.message,
                data: [],
            })
        }
    }
}

export default new SearchController()
