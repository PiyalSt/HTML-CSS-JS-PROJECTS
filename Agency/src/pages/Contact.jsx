import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'

const Contact = () => {
  return (
    <>
        <div id='Contact-page' className='bg-[#F3F3F3]'>
            <div id='wrapper'>
                <div className='py-40 flex flex-col lg:flex-row justify-between items-center gap-12'>
                    <div className='lg:w-2xl'>
                        <Title title={'We Do design, Code & Development'} subTitle={'I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority. There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.'} />
                    </div>

                    <div className='w-full lg:w-2xl flex flex-col gap-8 px-8 md:px-12 md:py-16 py-12 bg-white rounded-2xl text-center'>
                        <h2 className='font-inter font-bold text-2xl sm:text-3xl text-secondary'>Get a free quote now</h2>
                        <div className='text-start flex flex-col gap-5'>
                            <div>
                                <h4 className='font-inter font-medium text-base text-secondary ml-3'>Name</h4>
                                <input className='w-full px-6 py-4 font-inter font-normal text-base text-textColor border-2 rounded-lg my-2' type="text" placeholder='Enter your name' />
                            </div>
                            <div>
                                <h4 className='font-inter font-medium text-base text-secondary ml-3'>Email</h4>
                                <input className='w-full px-6 py-4 font-inter font-normal text-base text-textColor border-2 rounded-lg my-2' type="email" placeholder='Enter your email' />
                            </div>
                            <div>
                                <h4 className='font-inter font-medium text-base text-secondary ml-3'>Phone</h4>
                                <input className='w-full px-6 py-4 font-inter font-normal text-base text-textColor border-2 rounded-lg my-2' type="number" placeholder='Enter your phone' />
                            </div>
                        </div>
                        <Button text={'Get Pricing Now'} />
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Contact
