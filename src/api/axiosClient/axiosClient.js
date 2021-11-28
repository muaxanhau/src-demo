import axios from 'axios'
import { ApiRoutes } from './../../constants/index'

const AxiosClient = axios.create({
  baseURL: ApiRoutes.baseURL
})

AxiosClient.defaults.headers.common['Content-Type'] = 'application/json'
// AxiosClient.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

AxiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default AxiosClient
