import AxiosClient from './../axiosClient/axiosClient'
import { ApiRoutes } from './../../constants/index'

// constants
const apiClient = ({ url = '', config = {} }) => AxiosClient.get(url, config)
const routeGet = ApiRoutes.get

// main
const Get = {
  example: (params = {}) => {
    const url = routeGet.example
    const config = {
      headers: {
        Authorization: ''
      },
      params
    }
    return apiClient({ url, config })
  }
}

export default Get
