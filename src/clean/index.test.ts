import { describe, expect, it } from 'vitest'
import { clean } from '.'

describe('Clean', () => {
  it('clean the ruts with format', () => {
    expect(clean('6.732.358-0')).toEqual('67323580')
    expect(clean('6.045.003-k')).toEqual('6045003K')
  })

  it('clean the ruts with -', () => {
    expect(clean('1812916-7')).toEqual('18129167')
  })
})
