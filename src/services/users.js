// This service injects the http request wherever we want to use it
const url = 'https://63c5b232f80fabd877ee639a.mockapi.io'

module.exports = (httpClient) => {
  return {
      getAllUsers(name, page = 1, limit = 15) {
        return httpClient.get(`${url}/users/?page=${page}&limit=${limit}&name=${name}`)
      },
      countUsers() {
        return httpClient.get(`${url}/users`)
      }
  }
}
