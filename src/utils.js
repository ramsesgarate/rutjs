export const module11 = (dni) => {
  let rutReverse = dni.split("").map(Number).reverse()
  let total = rutReverse.reduce(
    (acc, cur, index) => acc + cur * (2 + (index % 6)),
    0
  )

  return 11 - (total % 11)
}

export const clean = (rut, regex = /^0+|[^0-9]+/g) => {
  let rutStr = rut.toString()
  
  return rutStr.replace(regex, "").toUpperCase()
}