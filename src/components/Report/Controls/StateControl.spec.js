import React from 'react'
import { shallow } from 'enzyme'
import StateControl from './StateControl'

import * as CONTENT from '../../../content/text'

it('renders without crashing', () => {
  shallow(<StateControl />)
})
