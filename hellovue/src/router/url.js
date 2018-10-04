export default {
  name: 'URL_CONFIG',
  urlList () {
    return {
      user: {
        get: '/api/user/get',
        resister: '/api/user/resister'
      },
      system: {}
    }
  }
}
