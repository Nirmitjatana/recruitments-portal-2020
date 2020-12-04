import React from 'react'
// import OutlinedButton from '../../components/button/OutlinedButton'
import Logo from '../../components/logo/Logo'
import './tech.css'
import '../../assets/fonts/fonts.css'
import infoicon from '../../assets/images/infoicon.svg'

const tech = (props) => {
  return (
    <>
      <Logo />
      <h1 className='mainheading'>Choose your Technical sub-domain</h1>
      <div className='gridview'>
        <div className='box'>Backend</div>
        <div className='box'>Frontend</div>
        <div className='box'>App Development</div>
        <div className='box'>Machine Learning</div>
        <div className='box'>Python</div>
        <div className='box'>Information Security</div>
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

export default tech
