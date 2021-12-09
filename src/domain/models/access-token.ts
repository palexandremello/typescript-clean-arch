export class AccessToken {
  constructor (public readonly value: string) {}

  static get expirationInMs (): number {
    const minutes = 30
    const seconds = 60
    const miliseconds = 1000
    return minutes * seconds * miliseconds
  }
}
