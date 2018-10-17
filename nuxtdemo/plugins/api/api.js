let host = 'http://127.0.0.1:8078/'
const Api = {
  user: {
    get: host + 'user/get',
    add: host + 'user/add',
    del: host + 'user/del',
    page: host + 'user/page'
  }
}

export default Api
