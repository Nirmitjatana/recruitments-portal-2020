import React from 'react'
// import OutlinedButton from '../../components/button/OutlinedButton'
import Logo from '../../components/logo/Logo'
import './management.css'
import '../../assets/fonts/fonts.css'

const management = (props) => {
  return (
    <>
      <Logo />
      <h1 className='mainheading'>Choose your Management sub-domain</h1>
      <div className='gridview2'>
        <div className='box2'>1</div>
        <div className='box2'>2</div>
        <div className='box2'>3</div>
        <div className='box2'>4</div>
      </div>
      <div className='center'>
        <button className='primarybutton'>Confirm</button>
      </div>
      <div className='foot'>
        <img alt='img' className='infoicon' />
        <h2 className='footprompt'>You can choose more than one</h2>
      </div>
    </>
  )
}

export default management
