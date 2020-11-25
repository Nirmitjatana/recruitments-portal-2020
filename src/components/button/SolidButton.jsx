import React from 'react'
import PropTypes from 'proptypes'

const SolidButton = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={`${props.className} p-2 w-32 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-plasticblue text-white text-sm lg:text-base`}>
        {props.children}
      </button>
    </>
  )
}

SolidButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default SolidButton
