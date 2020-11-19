import React from 'react'
import PropTypes from 'proptypes'

const OutlinedTextfield = (props) => {
  return (
    <>
      <input type={props.type} placeholder={props.hint ?? props.placeholder} className={`${props.className} focus:outline-none border-solid rounded-md border-plasticblue border px-2 sm:py-3 py-2`}>
        {props.children}
      </input>
    </>
  )
}

OutlinedTextfield.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

export default OutlinedTextfield
