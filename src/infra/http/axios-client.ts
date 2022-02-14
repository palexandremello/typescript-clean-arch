import { HttpGetClient } from './client'
import axios from 'axios'
export class AxiosHttpClient implements HttpGetClient {
  async get ({ url, params }: HttpGetClient.Params): Promise<any> {
    const response = await axios.get(url, { params })
    return response.data
  }
}
