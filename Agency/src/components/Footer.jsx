import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
        <div id='footer'>
            <div id='wrapper'>
                <div className='flex flex-col lg:flex-row gap-16 justify-between my-20'>
                    <div className='lg:w-2xl'>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <p className='font-inter font-medium text-base leading-8 mt-6 tracking-wide text-textColor'>
                            I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.
                        </p>
                    </div>

                    <div className='lg:w-2xl flex flex-wrap flex-col lg:flex-row lg:justify-between gap-16'>
                        <div className='text-center'>
                            <h2 className='font-inter font-semibold text-xl'>About</h2>

                            <div className='mt-8 flex flex-col gap-2'>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>About us</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>Features</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>News</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>Careers</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h2 className='font-inter font-semibold text-xl'>Company</h2>

                            <div className='mt-8 flex flex-col gap-2'>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>Our Team</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>Partner With Us</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>FAQ</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>Blog</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h2 className='font-inter font-semibold text-xl'>Support</h2>

                            <div className='mt-8 flex flex-col gap-2'>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>About</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>Support Center</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>Feedback</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>Contact Us</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h2 className='font-inter font-semibold text-xl'>Get in touch</h2>

                            <div className='mt-8 flex flex-col gap-2'>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>info@gmail.com</p>
                                <p className='font-inter font-normal text-base text-textColor hover:text-primary hover:underline duration-300 cursor-pointer'>+88 0121 0212</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='py-12 border-t-2 border-gray-300 text-center'>
                        <h2 className='font-inter font-medium text-textColor'>All credit goes to @agence.com</h2>
                        <p className='font-inter font-normal text-textColor'>&copy; 2026 || Created By <span className='hover:text-primary hover:underline cursor-pointer'>PiyalSt</span> </p>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Footer
