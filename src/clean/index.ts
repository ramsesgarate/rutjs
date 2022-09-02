export function clean (rut: string, regex: RegExp = /^0+|[^0-9kK]+/g): string {
  return rut.replace(regex, '').toUpperCase()
}
