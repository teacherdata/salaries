import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import META from '../../data/meta'
import Domain from 'material-ui/svg-icons/social/domain'
import '../../styles/Promo.css'

const STYLES = {
  button: {
    fontFamily: "'Quicksand', Verdana, sans-serif",
    textTransform: 'none'
  }
}

function handleCodeClick () {
  window.location = META.authorUrl
}

const Promo = (props) => {
  return (
    <div className="Promo">
      <Grid fluid>
        <Row>
          <Col className="message" xs={8}>
            {props.callToAction}
          </Col>
          <Col xs={4}>
            <div className="btn-wrapper">
              <RaisedButton
                backgroundColor={META.colors.primary}
                icon={<Domain />}
                label={props.ctaButtonText}
                labelColor="white"
                labelPosition="after"
                onClick={handleCodeClick}
                style={STYLES.button}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

Promo.propTypes = {
  callToAction: PropTypes.string.isRequired,
  ctaButtonText: PropTypes.string.isRequired
}

export default Promo
