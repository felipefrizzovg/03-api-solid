export class LateCheckInValidationError extends Error {
  constructor() {
    super(`The Check-In can't be validated after 20 minutes`)
  }
}