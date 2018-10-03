const baseUrl = 'http://127.0.0.1:8078/'

export default {
  name: 'URL_CONFIG',
  urlList () {
    return {
      user: {
        getUser: baseUrl + 'user/get'
      }
    }
  }
}
