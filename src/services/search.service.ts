import { ResultSearch } from './../interfaces/ResultSearch'
import { env } from './../config/index'
import Axios from 'axios'

class SearchService {
    async search(query: string) {
        try {
            const url = `${env.BASE_URL_YOUTUBE}search?part=snippet&type=video&q=${query}&key=${env.YOUTUBE_API_KEY}`

            const { data } = await Axios.get<ResultSearch>(url)
            return data
        } catch (error) {
            console.log('this is error => ', error)
            return null
        }
    }
}

export default new SearchService()
