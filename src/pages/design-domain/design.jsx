import React from 'react'
// import OutlinedButton from '../../components/button/OutlinedButton'
import Logo from '../../components/logo/Logo'
import './design.css'
import '../../assets/fonts/fonts.css'

const design = (props) => {
  return (
    <>
      <Logo />
      <h1 className='mainheading'>Choose your Design sub-domain</h1>
      <div className='gridview1'>
        <div className='box1'>1</div>
        <div className='box1'>2</div>
      </div>
      <div className='boxcenter'>3</div>
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

export default design
