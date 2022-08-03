import ytdl, { videoInfo } from 'ytdl-core'

class YtdlService {
    getInfo(ytUrl: string): Promise<videoInfo> {
        return ytdl.getInfo(ytUrl)
    }
}

export default new YtdlService()
