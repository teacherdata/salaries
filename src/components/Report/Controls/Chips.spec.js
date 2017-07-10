import React from 'react'
import { shallow } from 'enzyme'
import Chips from './Chips'
import Chip from 'material-ui/Chip'

describe('<Chips />', () => {
  function setup(chips = []) {
    const props = {
      chipData: chips,
      onDeleteState: jest.fn()
    }

    return shallow(<Chips {...props} />)
  }

  it('renders without chips', () => {
    setup()
  })

  it('renders with chip', () => {
    const wrapper = setup([
      {
        key: 'CA',
        label: 'California'
      },
      {
        key: 'AZ',
        label: 'Arizona'
      }
    ])
    expect(wrapper.find(<Chip />)).toBeDefined()
  })
})

