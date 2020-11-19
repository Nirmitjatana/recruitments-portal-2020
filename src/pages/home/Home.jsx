import React from 'react'
import OutlinedButton from '../../components/button/OutlinedButton'
import Logo from '../../components/logo/Logo'
import './home.css'
import '../../assets/fonts/fonts.css'

const Home = (props) => {
  return (
    <>
      <Logo />
      <div className='flex flex-col justify-center items-center h-full'>
        <svg viewBox='0 0 103 16' className='mx-8 md:w-2/6'>
          <text x='0' y='15' className='header-title'>Recruitments</text>
        </svg>
        <svg viewBox='0 0 36 16' className='mx-8 md:w-2/6 text-plasticblue fill-current'>
          <text x='0' y='15' className='header-title'>2020</text>
        </svg>
        <div className='flex mt-20'>
          <OutlinedButton>Log in</OutlinedButton>
          <div className='w-4' />
          <OutlinedButton>Sign up</OutlinedButton>
        </div>
      </div>
    </>
  )
}

export default Home
