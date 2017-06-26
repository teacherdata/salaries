import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import META from '../../data/meta'
import '../../styles/Footer.css'

const STYLES = {
  footer: {
    backgroundColor: META.colors.primary,
    color: 'white'
  }
}

const Footer = (props) => {
  return (
    <div className="Footer" style={STYLES.footer}>
      <Grid fluid>
        <Row>
          <Col xs={12} sm={6}>
            <p>{props.overview}</p>
          </Col>
          <Col xs={12} sm={6}>
            <blockquote>
              {props.quoteText}
              <cite>
                {props.quoteCite}
              </cite>
            </blockquote>
          </Col>
          <Col xs={12}>
            <small>
              {props.copyright}
            </small>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  quoteText: PropTypes.string.isRequired,
  quoteCite: PropTypes.string.isRequired
}

export default Footer
