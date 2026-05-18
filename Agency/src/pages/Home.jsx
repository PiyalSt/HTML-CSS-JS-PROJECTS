import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import heroImage from '../assets/HeroImage.png'
import Button from '../components/Button'
import CustomerImg from '../assets/customer.png'
import StarImg from '../assets/star.png'
import { Link } from 'react-router'

const Home = () => {
    
    const useCounter = (limit, speed) => {

        const [counter, setCounter] = useState(0)

        useEffect(() => {
            const stopInterval = setInterval(() => {

                setCounter((prev) => {
                    if(prev >= limit) {
                        clearInterval(stopInterval)
                        return prev
                    }

                    return prev + 1

                })

            }, [speed])

            return () => clearInterval(stopInterval)

        }, [limit, speed])

        return counter

    }

    

  return (
    <>
        <div id='Homepage'>
            <div id="wrapper">
                <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-20'>
                    <div className='lg:w-160 m-4'>
                        <Title title={'We Help brands with high quality services'} subTitle={"There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."} />
                        <div className='mt-12'>
                            <Button text={'Get Started'} />
                        </div>
                    </div>
                    <div className='img'>
                        <img src={heroImage} alt="" />
                    </div>
                </div>

                <div className='bg-[#F8F6FE] rounded-2xl px-12 py-16 flex gap-12 flex-col md:flex-row text-center justify-between'>
                    <div>
                        <h4 className='font-inter font-medium text-xl md:text-2xl text-primary'>Our Success</h4>
                        <h2 className='font-inter font-semibold text-3xl md:text-4xl text-secondary mt-4'>West cost Brand <br /> makers-Global Edge </h2>
                    </div>
                    <div className='flex gap-24 justify-center flex-wrap'>
                        <div>
                            <h4 className='font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary'>{useCounter(200, 35)} +</h4>
                            <p className='font-inter font-medium text-xl text-textColor mt-5 mb-4'>Customer Satisfied</p>
                            <div>
                                <img src={CustomerImg} alt="customer_image_error" />
                            </div>
                        </div>
                        <div>
                            <h4 className='font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary'>4.5</h4>
                            <p className='font-inter font-medium text-xl text-textColor mt-5 mb-4'>200+ Avg rating</p>
                            <div>
                                <img src={StarImg} alt="customer_image_error" />
                            </div>
                        </div>
                        <div>
                            <h4 className='font-inter font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary'>{useCounter(351, 20)} +</h4>
                            <p className='font-inter font-medium text-xl text-textColor mt-5 mb-4'>Project Delivered</p>
                            <div>
                                <Link className='font-inter font-medium text-xl text-primary underline' to={'/'}>See Work</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
