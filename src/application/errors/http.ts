export class ServerError extends Error {
  constructor (error: Error) {
    super('Server failed. try again soon')
    this.name = 'ServerError'
    this.stack = error.stack
  }
}

export class RequiredFieldError extends Error {
  constructor (fieldName: string) {
    super(`the field ${fieldName} is required`)
    this.name = 'RequiredFieldError'
  }
}

export class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}

export class ForbiddenError extends Error {
  constructor () {
    super('Access Denied')
    this.name = 'ForbiddenError'
  }
}
