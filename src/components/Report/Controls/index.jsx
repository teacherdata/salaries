import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import META from '../../../data/meta'
import StateControl from './StateControl'
import Chips from './Chips'

const STYLES = {
  backgroundColor: META.colors.primary,
  color: 'white',
  padding: '18px 0'
}

class Controls extends Component {
  render() {
    return (
      <div className="Controls" style={STYLES}>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={4}>
              <StateControl idx={1} onChange={this.props.onControlChange} />
            </Col>
            <Col xs={12} sm={8}>
              <Chips
                chipData={this.props.selectedStates}
                onDeleteState={this.props.onDeleteState}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

Controls.propTypes = {
  selectedStates: PropTypes.array.isRequired,
  onDeleteState: PropTypes.func.isRequired,
  onControlChange: PropTypes.func.isRequired
}

export default Controls
