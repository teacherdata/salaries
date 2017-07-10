import StateHelper from './StateHelper'

describe('StateHelper', () => {
  const MOCK = {
    AZ: 'Arizona',
    CA: 'California'
  }
  const State = new StateHelper(MOCK)

  describe('getName()', () => {
    it('returns the state name based on the USPS code', () => {
      const result = State.getName('AZ')
      expect(result).toEqual(MOCK.AZ)
    })

    it('returns false for an invalid state key', () => {
      const result = State.getName('FOO')
      expect(result).toBeFalsy()
    })
  })

  describe('getAll()', () => {
    it('returns an array of state objects', () => {
      const result = State.getAll()
      const expected = [
        {
          key: 'AZ',
          label: 'Arizona'
        }, {
          key: 'CA',
          label: 'California'
        }
      ]

      expect(result).toEqual(expect.arrayContaining(expected))
    })
  })

  describe('getByKeys()', () => {
    it('returns the state name based on the USPS code', () => {
      const result = State.getByKeys(['AZ'])
      const expected = [
        {
          key: 'AZ',
          label: 'Arizona'
        }
      ]

      expect(result).toEqual(expected)
    })

    it('properly handles empty requests', () => {
      const result = State.getByKeys([])

      expect(result).toEqual(expect.arrayContaining([]))
    })

    it('properly handles unfound states', () => {
      const result = State.getByKeys(['FOO', 'FAR'])

      expect(result).toEqual(expect.arrayContaining([]))
    })
  })
})
