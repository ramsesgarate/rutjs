import { describe, it, expect } from 'vitest'
import { format } from '.'

describe('Format', () => {
  it('Format rut', () => {
    expect(format('125335667')).toEqual('12.533.566-7')
    expect(format('6045003k')).toEqual('6.045.003-K')
    expect(format('9264930')).toEqual('926.493-0')
  })

  it('Format rut dash alone', () => {
    expect(format('125335667', { dashAlone: true })).toEqual('12533566-7')
    expect(format('6045003k', { dashAlone: true })).toEqual('6045003-K')
    expect(format('9264930', { dashAlone: true })).toEqual('926493-0')
  })
})
