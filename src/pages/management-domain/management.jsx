import React from 'react'
// import OutlinedButton from '../../components/button/OutlinedButton'
import Logo from '../../components/logo/Logo'
import './management.css'
import '../../assets/fonts/fonts.css'
import infoicon from '../../assets/images/infoicon.svg'

const management = (props) => {
  return (
    <>
      <Logo />
      <h1 className='mainheading'>Choose your Management sub-domain</h1>
      <div className='gridview2'>
        <div className='box2'>Sponsorship</div>
        <div className='box2'>Content Writing</div>
        <div className='box2'>Operations</div>
        <div className='box2'>Events</div>
      </div>
      <div className='foot'>
        <div className='center'>
          <button className='primarybutton'>Confirm</button>
        </div>
        <img alt='img' className='infoicon' src={infoicon} />
        <h2 className='footprompt'>You can choose more than one</h2>
      </div>
    </>
  )
}

export default management
