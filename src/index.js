import { module11, clean } from './utils.js'

const CHECK_DIGIT = {
  11: 0,
  10: 'K'
}

class Rut {
  #cleanRegex = /^0+|[^0-9kK]+/g

  constructor(opt) {
    this.opt = opt
  }

  /**
   * Check the length of the RUT
   * @param {String} rut
   * @returns {Boolean}
   */
  #isLengthOk(rut) {
    return rut.length >= 7 && rut.length <= 9
  }

  /**
   * Check the sum with the module 11 algorithm
   * @param { } rut
   * @returns {Boolean}
   */
  #checksumIsOk(rut) {
    const checkDigit = this.getCheckDigit(rut.slice(0, -1))

    return checkDigit == rut.slice(-1)
  }

  /**
   * Format the RUT
   * @param {String | Number} rut
   * @returns {String}
   */
  format(rut) {
    rut = rut.toString()
    return rut.replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4")
  }

  /**
   * Verify that a Chilean RUT is valid
   * @param {String | Number} rut
   * @returns {Boolean}
   */
  isValid(rut) {
    if (!rut) throw new Error('You must enter a rut')

    rut = clean(rut, this.#cleanRegex)
    return this.#isLengthOk(rut) && this.#checksumIsOk(rut)
  }

  /**
   * Verify that a Chilean RUT is valid
   * @param {String} rut
   * @returns {String}
   */
   sanitize(rut) {
    if (!rut) throw new Error('You must enter a rut')

    return clean(rut, cleanRegex)
  }

  /**
   * It allows to obtain the check digit of a rut
   * @param {String | Number} rut
   * @returns {String | Number}
   */
  getCheckDigit(rut) {
    if (!!rut && rut.length >= 6 && rut.length <= 8) {
      const mod11 = module11(rut)
      
      return CHECK_DIGIT[mod11] || mod11
    }

    throw new Error('Unable to get check digit')
  }

  /**
   * Generate a random RUT
   * @returns {String}
   */
  generate() {
    let rut = Math.floor(2e7 * Math.random() + 1e6).toString()
    rut += this.getCheckDigit(rut)

    return this.opt?.format ? this.format(rut) : rut
  }
}

export default function rut(opt) {
  const options = typeof opt === "object" ? opt : {}
  return new Rut(options)
}
