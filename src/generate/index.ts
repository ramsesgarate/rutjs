
import { getCheckDigit } from '../getCheckDigit/index'

export function generate (): string {
  let rut = Math.floor((2e7 * Math.random()) + 1e6).toString()
  rut += getCheckDigit(rut)

  return rut
}
