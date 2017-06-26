class SalariesHelper {
  constructor (salaries) {
    this.salaries = salaries
  }

  parseSeries (series) {
    let parsed = []

    Object.keys(series).forEach((key) => {
      parsed.push(series[key])
    })

    return parsed
  }

  getSeries (state) {
    if (state in this.salaries) {
      return this.parseSeries(this.salaries[state])
    } else {
      return false
    }
  }
}

export default SalariesHelper
