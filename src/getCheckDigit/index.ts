const CHECK_DIGIT = {
  11: '0',
  10: 'K'
}

function module11 (dni: string): number {
  const dniReverse = dni.split('').map(Number).reverse()
  const total = dniReverse.reduce(
    (acc, cur, index) => acc + cur * (2 + (index % 6)),
    0
  )

  return 11 - (total % 11)
}

export function getCheckDigit (rut: string): string | number {
  const mod11 = module11(rut)

  return CHECK_DIGIT[mod11] || mod11
}
