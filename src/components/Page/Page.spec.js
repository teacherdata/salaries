import React from 'react'
import { shallow } from 'enzyme'
import Page from './'

const PROPS = {
  headline: 'Fiat lux',
  subhead: 'δωρεαν ελαβετε δωρεαν δοτε',
  source: 'Virtus et Scientia',
  disclaimer: 'Sapientia et Doctrina'
}

const setup = () => {
  return shallow(<Page {...PROPS} />)
}

it('renders without crashing', () => {
  setup()
})

it('renders the passed content', () => {
  const wrapper = setup()
  const headline = <h1>{PROPS.headline}</h1>
  const subhead = <h3 className="subhead">{PROPS.subhead}</h3>
  const source = <p className="source">{PROPS.source}</p>
  const disclaimer = <small className="disclaimer">{PROPS.disclaimer}</small>
  expect(wrapper.contains(headline)).toEqual(true)
  expect(wrapper.contains(subhead)).toEqual(true)
  expect(wrapper.contains(source)).toEqual(true)
  expect(wrapper.contains(disclaimer)).toEqual(true)
})
