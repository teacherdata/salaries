import React from 'react'
import { shallow } from 'enzyme'
import Footer from './'

const PROPS = {
  copyright: 'Et docere et rerum exquirere causas',
  overview: 'Veritas',
  quoteText: 'Ma luna a\'e o na lahui a pau ke ola o ke kanaka',
  quoteCite: 'Scientia est Potentia'
}

const setup = () => {
  return shallow(<Footer {...PROPS} />)
}

it('renders without crashing', () => {
  setup()
})

it('renders the passed content', () => {
  const wrapper = setup()
  const copyright = <small>{PROPS.copyright}</small>
  const overview = <p>{PROPS.overview}</p>
  const quoteText = <blockquote>{PROPS.quoteText}<cite>{PROPS.quoteCite}</cite></blockquote>
  const quoteCite = <cite>{PROPS.quoteCite}</cite>
  expect(wrapper.contains(copyright)).toEqual(true)
  expect(wrapper.contains(overview)).toEqual(true)
  expect(wrapper.contains(quoteText)).toEqual(true)
  expect(wrapper.contains(quoteCite)).toEqual(true)
})
