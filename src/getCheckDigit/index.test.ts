import { describe, it, expect } from 'vitest'
import { getCheckDigit } from '.'

describe('GetCheckDigit', () => {
  it('Validate check Digit', () => {
    expect(getCheckDigit('16245846')).toEqual(9)
    expect(getCheckDigit('10025377')).toEqual(1)
    expect(getCheckDigit('9264930')).toEqual('K')
    expect(getCheckDigit('4433360')).toEqual('0')
  })
})
