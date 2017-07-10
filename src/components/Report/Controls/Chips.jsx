import React, { Component } from 'react'
import Chip from 'material-ui/Chip'

const STYLES = {
  chip: {
    backgroundColor: 'white',
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onTouchTap` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class Chips extends Component {
  constructor(props) {
    super(props)
    this.styles = STYLES
  }

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.props.onDeleteState(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    )
  }

  getChips() {
    if (this.props.chipData && this.props.chipData.length > 0) {
      return this.props.chipData.map(this.renderChip, this)
    }
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.getChips()}
      </div>
    )
  }
}
