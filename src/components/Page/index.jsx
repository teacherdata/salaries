import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import '../../styles/Page.css'

const Page = (props) => {
  return (
    <div className="Page">
      <Grid fluid>
        <Row>
          <Col xs={12} sm={6}>
            <h1>
              {props.headline}
            </h1>
            <h3 className="subhead">
              {props.subhead}
            </h3>
          </Col>
          <Col xs={12} sm={6}>
            <p className="source">
              {props.source}
            </p>
            <small className="disclaimer">
              {props.disclaimer}
            </small>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

Page.propTypes = {
  headline: PropTypes.string.isRequired,
  subhead: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  disclaimer: PropTypes.string.isRequired
}

export default Page
