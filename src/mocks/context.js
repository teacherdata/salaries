import { stub } from 'sinon'

const mixpanel = {
  track: stub()
}

export default { context: { mixpanel } }
