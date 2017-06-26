import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const states = require('../../../data/states.json')
const items = []

Object.keys(states).forEach((state) => {
  items.push(<MenuItem value={states[state]} key={state} primaryText={`${states[state]}`} />)
})

const STYLES = {
  color: 'white'
}

/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */
class StateControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange = (event, index, value) => {
    this.setState({value})
    this.props.onChange({
      newState: items[index].key
    })
  }

  render() {
    return (
      <div className="control">
        <SelectField
          floatingLabelText="Add State"
          floatingLabelStyle={STYLES}
          maxHeight={200}
          onChange={this.handleChange}
          value={this.state.value}
        >
          {items}
        </SelectField>
      </div>
    )
  }
}

export default StateControl
