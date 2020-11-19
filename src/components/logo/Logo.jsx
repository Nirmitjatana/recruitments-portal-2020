import React from 'react'
import logo from '../../assets/images/dsclogo.png'

const Logo = (props) => {
  return (
    <>
      <div className='absolute object-left-top'>
        <img src={logo} style={{ width: '300px', height: 'auto' }} className='p-4' />
      </div>
    </>
  )
}

export default Logo
