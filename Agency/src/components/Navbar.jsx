import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router'
import Button from './Button'
import { IoMenuSharp } from 'react-icons/io5'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    console.log(isActive);
    

  return (
    <>
        <div id='navbar' className='relative'>
            <div id='wrapper'>
                <div className='flex justify-between items-center mt-5 md:mt-10'>
                    <div className='cursor-pointer'>
                        <Link to={'/'}>
                            <img className='' src={logo} alt="logo_error" />
                        </Link>
                    </div>
                    <div className='hidden lg:flex gap-16 list-none'>
                        <li>
                            <NavLink className={({isActive}) => (
                                `font-inter font-bold text-lg hover:text-primary duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                            )} to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (
                                `font-inter font-bold text-lg hover:text-primary duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                            )} to={'/about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (
                                `font-inter font-bold text-lg hover:text-primary duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                            )} to={'/services'}>Service</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (
                                `font-inter font-bold text-lg hover:text-primary duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                            )} to={'/careers'}>Careers</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (
                                `font-inter font-bold text-lg hover:text-primary duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                            )} to={'/contact'}>Contact</NavLink>
                        </li>
                    </div>
                    <div className='hidden lg:block'>
                        <Button text={'Contact'} />
                    </div>
                    <div className={`lg:hidden ${isActive ? 'text-primary' : 'text-gray-800'}`}>
                        <IoMenuSharp onClick={()=> setIsActive(!isActive)} className='text-4xl cursor-pointer'/>
                    </div>
                </div>
                <div className='block lg:hidden'>
                    {
                        isActive && <>
                            <div className='w-full min-h-screen bg-white absolute left-0 mt-5 list-none flex flex-col gap-4'>
                                <li className='w-full text-center py-2 hover:bg-primary duration-300 group cursor-pointer'>
                                    <NavLink className={({isActive}) => (
                                        `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                                    )} to={'/'}>Home</NavLink>
                                </li>
                                <li className='w-full text-center py-2 hover:bg-primary duration-300 group cursor-pointer'>
                                    <NavLink className={({isActive}) => (
                                        `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                                    )} to={'/about'}>About</NavLink>
                                </li>
                                <li className='w-full text-center py-2 hover:bg-primary duration-300 group cursor-pointer'>
                                    <NavLink className={({isActive}) => (
                                        `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                                    )} to={'/service'}>Service</NavLink>
                                </li>
                                <li className='w-full text-center py-2 hover:bg-primary duration-300 group cursor-pointer'>
                                    <NavLink className={({isActive}) => (
                                        `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                                    )} to={'/careers'}>Careers</NavLink>
                                </li>
                                <li className='w-full text-center py-2 hover:bg-primary duration-300 group cursor-pointer'>
                                    <NavLink className={({isActive}) => (
                                        `font-inter font-bold text-lg group-hover:text-white duration-300 ${isActive ? 'text-primary' : 'text-textColor'}`
                                    )} to={'/contact'}>Contact</NavLink>
                                </li>
                            </div>
                        </> 
                    }
                </div>
            </div>
        </div> 
    </>
  )
}

export default Navbar
