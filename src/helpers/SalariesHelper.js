/**
 * Salaries Helper
 *
 * Contains methods to help interact with salary data.
 */
class SalariesHelper {
  constructor (salaries) {
    this.salaries = salaries
  }

  /**
   * Parses a payment series object.
   * @param {object} series The payment series to parse.
   * @returns {array}
   */
  parseSeries (series) {
    let parsed = []

    Object.keys(series).forEach((key) => {
      parsed.push(series[key])
    })

    return parsed
  }

  /**
   * Looks up a state in the salaries data.
   * @todo Return empty objects {} instead of false on failure.
   * @param {string} state The two-digit USPS state code.
   * @returns {object|false}
   */
  getSeries (state) {
    if (state in this.salaries) {
      return this.parseSeries(this.salaries[state])
    } else {
      return false
    }
  }
}

export default SalariesHelper
