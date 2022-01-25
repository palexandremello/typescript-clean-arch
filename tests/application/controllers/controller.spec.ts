import { Controller } from '@/application/controllers/'
import {
  ServerError
} from '@/application/errors'
import { HttpResponse } from '../helpers'

jest.mock('@/application/validation/composite')

class ControllerStub extends Controller {
  result: HttpResponse = {
    statusCode: 200,
    data: 'any_data'
  }

  async perfom (httpRequest: any): Promise<HttpResponse> {
    return this.result
  }
}
describe('Controller', () => {
  let sut: ControllerStub

  beforeEach(() => {
    sut = new ControllerStub()
  })

  it('should return 500 if perfom throws', async () => {
    const error = new Error('perfom_error')
    jest.spyOn(sut, 'perfom').mockRejectedValueOnce(error)
    const httpResponse = await sut.handle('any_value')

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: new ServerError(error)
    })
  })
  it('should return same result as perfom', async () => {
    const httpResponse = await sut.handle('any_value')

    expect(httpResponse).toEqual(sut.result)
  })
})
