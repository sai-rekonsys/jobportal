import React from 'react'

const SignUp = () => {
    const handleSignIn =() =>{

    }
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 '>
        <div className='py-8 px-2 text-grey-800 focus:outline-none'>
            <input type="text" name='text' id='text' placeholder='enter email or username' />
        </div>
        <div className='py-8 px-2 text-grey-800 focus:outline-none'>
            <input type="password" name='pwd' id='pwd' placeholder='Please Enter password' />
        </div>
        <button className='bg-blue px-8 py-2 text-white items-center' onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default SignUp