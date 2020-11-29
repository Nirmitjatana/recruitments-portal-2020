import React from 'react'
// import OutlinedButton from '../../components/button/OutlinedButton'
import Logo from '../../components/logo/Logo'
import './tech.css'
import '../../assets/fonts/fonts.css'

const tech = (props) => {
  return (
    <>
      <Logo />
      <h1 className='mainheading'>Choose your Technical sub-domain</h1>
      <div className='gridview'>
        <div className='box'>1</div>
        <div className='box'>2</div>
        <div className='box'>3</div>
        <div className='box'>4</div>
        <div className='box'>5</div>
        <div className='box'>6</div>
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

export default tech
