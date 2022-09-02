export function format (rut: string): string {
  const rutFormat = rut.length > 7 ? '$1.$2.$3-$4' : '$2.$3-$4'

  return rut.replace(/^(\d{1,2})?(\d{3})(\d{3})(\w{1})$/, rutFormat).toUpperCase()
}
