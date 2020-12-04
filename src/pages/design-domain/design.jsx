import React from 'react'
// import OutlinedButton from '../../components/button/OutlinedButton'
import Logo from '../../components/logo/Logo'
import './design.css'
import '../../assets/fonts/fonts.css'
import infoicon from '../../assets/images/infoicon.svg'

const design = (props) => {
  return (
    <>
      <Logo />
      <h1 className='mainheading'>Choose your Design sub-domain</h1>
      <div className='gridview1'>
        <div className='box1'>Graphic Design</div>
        <div className='box1'>Ui/Ux</div>
      </div>
      <div className='boxcenter'>Video and Motion Graphics</div>
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

export default design
