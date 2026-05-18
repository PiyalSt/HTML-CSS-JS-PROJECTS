import React from 'react'

const Title = ({title, subTitle}) => {
  
  return (
    <>
        <div className='flex flex-col gap-6'>
            <h1 className={`font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary`} >{title}</h1>
            <p className='font-inter font-normal text-xs sm:text-sm lg:text-base text-textColor'>{subTitle}</p>
        </div>
    </>
  )
}

export default Title
