import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames/bind'

import './HexTile.css'

// const cx = classNames.bind(style)

const HexTile = ({ q, r }) => (
  <g className="r-axis-same">
    <polygon className="hex" points="105,0 140,60 105,120 35,120 0,60 35,0"></polygon>
    <text className="text" transform="rotate(30)">
      <tspan x="60" y="10" className="q-coord">Q: {q}</tspan>
      <tspan x="60" y="45" className="r-coord">R: {r}</tspan>
    </text>
  </g>
)

HexTile.propTypes = {
}

export default HexTile
