import React from 'react'
import { shallow } from 'enzyme'
import Promo from './'

const PROPS = {
  callToAction: 'Veritas vos liberabit',
  ctaButtonText: 'Ex Scientia Tridens'
}

const setup = () => {
  return shallow(<Promo {...PROPS} />)
}

it('renders without crashing', () => {
  setup()
})
