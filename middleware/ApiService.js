import axios from 'axios'

const client = axios.create({
  baseURL: 'https://xdybi9d97h.execute-api.ap-northeast-1.amazonaws.com/dev',
  json: true,
})
export default {
  async getCustomers() {
    return client({
      method: 'get',
      url: '/brandon/customer',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {},
    })
      .then((req) => {
        return req.data
      })
      .catch((error) => {
        return error.response
      })
  },
  async addCustomer(data) {
    data = JSON.stringify(data)
    return client({
      method: 'post',
      url: '/brandon/customer',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    })
      .then((req) => {
        return req
      })
      .catch((error) => {
        return error.response
      })
  },
  async updateCustomer(data) {
    data = JSON.stringify(data)
    return client({
      method: 'put',
      url: '/brandon/customer',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {},
      data: data,
    })
      .then((req) => {
        return req
      })
      .catch((error) => {
        return error.response
      })
  },
}
