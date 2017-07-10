import SalariesHelper from './SalariesHelper'

const MOCK = {
  'AL': {
    '1969-70': 1,
    '1979-80': 2,
    '1989-90': 3
  },
  'AK': {
    '1969-70': 1,
    '1979-80': 2,
    '1989-90': 3
  }
}
const Salaries = new SalariesHelper(MOCK);

describe('parseSeries() parses the state salary series', () => {
  it('parses a salaries series object', () => {
    const result = Salaries.parseSeries(MOCK.AL)
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]))
  })
})

describe('getSeries() returns the series object for a state', () => {
  it('returns the data for a valid state', () => {
    const result = Salaries.getSeries('AL')
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]))
  })

  it('returns false for an invalid state', () => {
    const result = Salaries.getSeries('FOO')
    expect(result).toBeFalsy()
  })
})
