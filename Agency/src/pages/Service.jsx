import React from 'react'
import Title from '../components/Title'
import WebDesign from '../assets/web-design.png'
import UiUxDesign from '../assets/UI-UX.png'
import Development from '../assets/development.png'
import Motion from '../assets/motionpng.png'
import Animation from '../assets/animation.png'
import Digital from '../assets/Digital.png'

const Service = () => {
  return (
    <>
        <div id='Service-page'>
            <div id="wrapper" className='pt-40'>
                <div className='flex justify-center'>
                    <div className='text-center w-2xl'>
                        <Title title={'Our Provided Services'} subTitle={'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.'} />
                    </div>
                </div>

                <div className='mt-12 mb-20 flex flex-wrap justify-center lg:justify-between gap-10'>
                    <div className='p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300'>
                        <div className='flex justify-center'>
                            <img src={WebDesign} alt="" />
                        </div>

                        <div className='mt-10 flex flex-col gap-5 text-center'>
                            <h4 className='font-inter font-bold text-2xl text-secondary'>Web Design</h4>
                            <p className='font-inter font-normal text-base text-textColor'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        </div>
                    </div>
                    <div className='p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300'>
                        <div className='flex justify-center'>
                            <img src={UiUxDesign} alt="" />
                        </div>

                        <div className='mt-10 flex flex-col gap-5 text-center'>
                            <h4 className='font-inter font-bold text-2xl text-secondary'>UI/UX Design</h4>
                            <p className='font-inter font-normal text-base text-textColor'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        </div>
                    </div>
                    <div className='p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300'>
                        <div className='flex justify-center'>
                            <img src={Development} alt="" />
                        </div>

                        <div className='mt-10 flex flex-col gap-5 text-center'>
                            <h4 className='font-inter font-bold text-2xl text-secondary'>Web Design</h4>
                            <p className='font-inter font-normal text-base text-textColor'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        </div>
                    </div>
                    <div className='p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300'>
                        <div className='flex justify-center'>
                            <img src={Motion} alt="" />
                        </div>

                        <div className='mt-10 flex flex-col gap-5 text-center'>
                            <h4 className='font-inter font-bold text-2xl text-secondary'>Web Design</h4>
                            <p className='font-inter font-normal text-base text-textColor'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        </div>
                    </div>
                    <div className='p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300'>
                        <div className='flex justify-center'>
                            <img src={Animation} alt="" />
                        </div>

                        <div className='mt-10 flex flex-col gap-5 text-center'>
                            <h4 className='font-inter font-bold text-2xl text-secondary'>Web Design</h4>
                            <p className='font-inter font-normal text-base text-textColor'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        </div>
                    </div>
                    <div className='p-12 max-w-106 rounded-2xl hover:shadow-2xl cursor-pointer duration-300'>
                        <div className='flex justify-center'>
                            <img src={Digital} alt="" />
                        </div>

                        <div className='mt-10 flex flex-col gap-5 text-center'>
                            <h4 className='font-inter font-bold text-2xl text-secondary'>Web Design</h4>
                            <p className='font-inter font-normal text-base text-textColor'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Service 