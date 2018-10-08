let baseUrl = 'http://localhost:8078/'
const Api = {
  user: {
    get: { url: baseUrl + 'user/get', method: 'get' },
    del: { url: baseUrl + 'user/del', method: 'get' }
  }
}

export default Api
