import React from 'react'
import { shallow } from 'enzyme'
import Chips from './Chips'

import * as CONTENT from '../../../content/text'

function setup(chips = {}) {
  const props = {
    chipData: chips,
    onDeleteState: jest.fn()
  }

  return shallow(<Chips {...props} />)
}

it('renders without crashing', () => {
  const wrapper = setup()
})
