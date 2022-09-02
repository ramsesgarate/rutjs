import { describe, expect, it } from 'vitest'
import { generate } from '.'

describe('Generate', () => {
  it('Verify length for generate', () => {
    const rutLength = generate().length

    expect(rutLength).toBeGreaterThanOrEqual(7)
    expect(rutLength).toBeLessThanOrEqual(9)
  })
})
