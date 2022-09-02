import { getCheckDigit } from '../getCheckDigit/index'
import { clean } from '../clean/index'

function isLengthOk (rut: string): boolean {
  return rut.length >= 7 && rut.length <= 9
}

function checksumIsOk (rut: string): boolean {
  const checkDigit = getCheckDigit(rut.slice(0, -1)).toString()
  return checkDigit === rut.slice(-1)
}

export function isValid (rut: string): boolean {
  rut = clean(rut)
  return isLengthOk(rut) && checksumIsOk(rut)
}
