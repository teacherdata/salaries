import React from 'react'
import { shallow } from 'enzyme'
import Controls from './'

describe('<Controls />', () => {
  const SELECTED_STATES = [
    {
      key: 'CA',
      label: 'California'
    },
    {
      key: 'AZ',
      label: 'Arizona'
    }
  ]

  function setup(chips = []) {
    const props = {
      selectedStates: SELECTED_STATES,
      onDeleteState: jest.fn(),
      onControlChange: jest.fn()
    }

    return shallow(<Controls {...props} />)
  }

  it('renders without chips', () => {
    setup()
  })
})
