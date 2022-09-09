export interface FormatConfig {
  dashAlone: boolean;
}

const formatType = {
  short: { rutFormat: '$1.$2-$3', regexFormat: /^(\d{3})(\d{3})(\w{1})$/ },
  long: { rutFormat: '$1.$2.$3-$4', regexFormat: /^(\d{1,2})?(\d{3})(\d{3})(\w{1})$/ },
  shortSingle: { rutFormat: '$1-$2', regexFormat: /^(\d{6})(\w{1})$/ },
  longSingle: { rutFormat: '$1-$2', regexFormat: /^(\d{7,8})(\w{1})$/ }
}

const getFormatType = (rut, dashAlone) => {
  const typeLength = rut.length > 7 ? 'long' : 'short'
  const isSingle = dashAlone ? 'Single' : ''

  return formatType[`${typeLength}${isSingle}`]
}
export function format (
  rut: string,
  config: FormatConfig = { dashAlone: false }
): string {
  const { dashAlone } = config
  const { regexFormat, rutFormat } = getFormatType(rut, dashAlone)

  return rut
    .replace(regexFormat, rutFormat)
    .toUpperCase()
}
