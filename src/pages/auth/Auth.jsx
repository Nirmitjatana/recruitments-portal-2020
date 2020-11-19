import React from 'react'
import OutlinedButton from '../../components/button/OutlinedButton'
import OutlinedTextfield from '../../components/textfield/OutlinedTextfield'

const Auth = (props) => {
  return (
    <>
      <div className='flex flex-col h-full mx-12 sm:mx-40 md:mx-auto md:w-3/6 lg:w-3/6 xl:w-2/6 justify-center items-stretch'>
        <h1 className='mx-auto font-futura text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Confirm your details</h1>
        <OutlinedTextfield
          type='text'
          hint='Registration no.'
          className='mt-8'
        />
        <OutlinedTextfield
          type='text'
          hint='Phone no.'
          className='mt-4'
        />
        <OutlinedTextfield
          type='text'
          hint='Skills'
          className='mt-4'
        />
        <OutlinedTextfield
          type='text'
          hint='Registration no.'
          className='mt-4'
        />
        <textarea className='focus:outline-none border border-plasticblue rounded-md px-2 py-2 resize-none mt-4 h-20' placeholder='Bio' />
        <OutlinedButton className='mt-8 sm:mt-16 mx-auto'>
          Confirm
        </OutlinedButton>
      </div>
    </>
  )
}

export default Auth
