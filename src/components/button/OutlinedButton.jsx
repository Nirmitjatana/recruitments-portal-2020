import React from 'react'
import PropTypes from 'proptypes'

const OutlinedButton = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={`${props.className} focus:outline-none border-solid rounded-md border-plasticblue border p-2 w-32`}>
        {props.children}
      </button>
    </>
  )
}

OutlinedButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default OutlinedButton
