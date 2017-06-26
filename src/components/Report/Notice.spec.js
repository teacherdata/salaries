import React from 'react'
import { shallow } from 'enzyme'
import Notice from './Notice'

import * as CONTENT from '../../content/text'

it('renders without crashing', () => {
  shallow(<Notice />)
})

it('renders the default notice message', () => {
  const wrapper = shallow(<Notice />)
  const notice = <p>{CONTENT.noStatesNotice}</p>
  expect(wrapper.contains(notice)).toEqual(true)
})

it('renders the passed notice message', () => {
  const message = 'Veritate Duce Progredi'
  const wrapper = shallow(<Notice message={message} />)
  const notice = <p>{message}</p>
  expect(wrapper.contains(notice)).toEqual(true)
})
