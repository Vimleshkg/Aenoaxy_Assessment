import React from 'react';
import { FaBriefcase } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Avatar from 'react-avatar';
import { IoBasketballOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { footerData, menuData } from './Constants';
import { useNavigate } from 'react-router-dom';

const SignupPage4 = ({ image }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='flex items-center justify-between border-b shadow-sm'>
        <div className='flex items-center'>
          <img src='dribbleBlackLogo.png' className='w-28 mx-1 md:mx-4 lg:mx-6 cursor-pointer' alt='logo' />
          <ul className='font-medium lg:font-bold text-gray-500 hidden md:flex md:block'>
            {menuData.map((data, index) => <li key={index} className='mx-1 lg:mx-2 cursor-pointer rounded-md p-1 hover:text-black'>{data}</li>)}
          </ul>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center lg:pl-2 font-medium rounded-lg bg-gray-100 lg:mx-3 mx-1 pl-1'>
            <IoSearch className='h-5 text-gray-500 w-5' />
            <input className='m-2 bg-gray-100 outline-none w-16 lg:w-24' type="text" placeholder='Search' />
          </div>
          <FaBriefcase className='w-5 h-5 hover:text-pink-500 cursor-pointer text-gray-400 mx-2 lg:mx-3' />
          <Avatar className='ml-1 mr-1 lg:mr-3 cursor-pointer' size="32" round="100px" src={image} />
          <button className='lg:mx-4 mx-2 p-2 px-4 rounded-lg text-white font-medium bg-pink-500'> Upload </button>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex justify-center w-[55%]'>
          <div className='flex flex-col items-center text-center mt-20'>
            <h1 className='text-3xl sm:text-4xl font-bold'> Please verify your email... </h1>
            <img src='emailLogo.png' className='w-32 h-24 sm:w-44 sm:h-32 my-4 text-gray-400' />
            <div className='text-center sm:text-lg font-medium text-gray-500'>
              <h1> Please verify your email address. We've sent a confirmation email to:</h1>
              <h1 className='font-bold text-black my-3'> account@refero.design</h1>
              <h1> Click the confirmation link in the email to begin using Dribble. </h1>
              <h1>
                Didn't receive the email? Check your Spam folder, it may have been caught by a filter.
                If you still don't see it, you can <span className='text-pink-500 cursor-pointer'> resend the confirmation email. </span>
              </h1>
              <h1 className='my-3'> Wrong email address? <span className='text-pink-500 cursor-pointer' > Change it. </span></h1>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-100 mt-20 text-sm sm:text-base'>
        <div className='pt-6 grid grid-cols-12'>
          <div className='col-span-4 lg:col-span-3 flex flex-col pr-6 ml-4 lg:ml-16 '>
            <img className='w-28' src="dribble-logo.png" alt="Logo" />
            <h1 className='lg:-mt-4 font-medium hover:text-black text-gray-500'> Dribbble is the world's leading community for creating to share,
              grow, and get hired
            </h1>
            <div className='flex my-6'>
              <IoBasketballOutline className='mx-1 sm:mr-2 h-5 w-5' />
              <FaTwitter className=' mx-1 sm:mx-2 h-5 w-5' />
              <FaSquareFacebook className='mx-1 sm:mx-2 h-5 w-5' />
              <FaInstagram className=' mx-1 sm:mx-2 h-5 w-5' />
              <FaPinterest className='mx-1 sm:mx-2 h-5 w-5' />
            </div>
          </div>
          <div className='col-span-8 lg:col-span-9 mt-11 text-gray-500 flex justify-evenly font-medium'>
            <ul>
              <h1 className='font-bold text-black'> For designers</h1>
              {footerData.ForDesigners.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
            </ul>
            <ul>
              <h1 className='font-bold text-black'> Hire designers</h1>
              {footerData.HireDesigners.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
            </ul>
            <ul className='hidden sm:block'>
              <h1 className='font-bold text-black'> Company</h1>
              {footerData.Company.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
            </ul>
            <ul className='hidden md:block'>
              <h1 className='font-bold text-black'> Directories</h1>
              {footerData.Directories.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
            </ul>
            <ul className='hidden md:block'>
              <h1 className='font-bold text-black'> Design Resources</h1>
              {footerData.DesignResources.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
            </ul>
          </div>
        </div>
        <div className='mx-12 py-8 mt-12 border-t-2 text-gray-500 flex justify-between font-medium'>
          <h1> @ 2023 Dribbble. All rights reserved.</h1>
          <h1 className='sm:flex items-center hidden sm:block'> <span className='text-black mr-1'> 20,501,853 </span> shots dibbbled <IoBasketballOutline className='text-pink-600 h-5 w-5  ml-1' /> </h1>
        </div>
      </div>
    </div>
  )
}

export default SignupPage4;
