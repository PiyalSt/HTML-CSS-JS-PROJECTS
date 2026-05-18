import React from 'react'

const Button = ({text}) => {
  return (
    <>
        <div>
            <button className='py-2 px-8 sm:py-3 sm:px-10 md:py-4 md:px-12 bg-primary rounded-xl text-white font-inter font-semibold text-xl cursor-pointer'>{text}</button>
        </div>
    </>
  )
}

export default Button
