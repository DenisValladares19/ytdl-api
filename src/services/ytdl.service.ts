import ytdl, { videoInfo } from 'ytdl-core'

export class YtdlService {
    getInfo(ytUrl: string): Promise<videoInfo> {
        return ytdl.getInfo(ytUrl)
    }
}
