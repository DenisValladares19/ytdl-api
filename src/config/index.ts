export const env = {
    port: process.env.PORT || 8086,
    context: process.env.CONTEXT || '/',
    YOUTUBE_API_KEY:
        process.env.YOUTUBE_API_KEY ||
        'AIzaSyARKYo3bevZmjgZExCDxJZdQ52jpvOIyfQ',
    BASE_URL_YOUTUBE:
        process.env.BASE_URL_YOUTUBE ||
        'https://www.googleapis.com/youtube/v3/',
}
