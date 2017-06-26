import React from 'react'
import PropTypes from 'prop-types'
import * as CONTENT from '../../content/text'

const EmptyNotice = (props) => {
  return (
    <div className="notice">
      <p>{props.message ? props.message : CONTENT.noStatesNotice}</p>
    </div>
  )
}

EmptyNotice.propTypes = {
  message: PropTypes.string
}

export default EmptyNotice
