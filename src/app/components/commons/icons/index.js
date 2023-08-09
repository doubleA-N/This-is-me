import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { ICON_SIZE } from './const'

const Icon = ({ alt, className, src, size, onClick }) => {
  return (
    <div className={className || ''}>
      <Image
        alt={alt}
        src={src}
        width={size || ICON_SIZE.default}
        height={size || ICON_SIZE.default}
        onClick={onClick}
        priority
      />
    </div>
  )
}

Icon.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
}

export default Icon
