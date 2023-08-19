import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, className, label, onClickFunction, type }) => {
  return (
    <div>
      <button type={type} className={className} onClick={onClickFunction}>
        {children}
        <span>{label}</span>
      </button>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  onClickFunction: PropTypes.func,
  type: PropTypes.string,
}

export default Button
