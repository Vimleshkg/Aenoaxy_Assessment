import React, { useRef, useState } from 'react';
import { BiSolidCameraPlus } from "react-icons/bi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const SignupPage2 = ({ image, setImage }) => {
  const myRef = useRef();
  const navigate = useNavigate();

  function handleUpload(e) {
    e.preventDefault();
    myRef.current.click();
  }

  function uploadImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  function handleClick(e) {
    e.preventDefault();
    navigate('/signup3');
  }

  return (
    <div>
      <div className="sm:absolute flex items-center sm:-mt-5">
        <img
          onClick={() => navigate("/")}
          className="w-[15%] sm:w-[18%] cursor-pointer ml-5 sm:ml-10"
          src="dribble-logo.png"
          alt="Logo"
        />
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-[60%] sm:w-[45%] my-8 sm:my-16'>
          <div>
            <h1 className='text-2xl sm:text-3xl font-bold'>
              Welcome! Let's create your profile
            </h1>
            <p className='text-gray-500 mt-3'> Let others get to know you better! You can do these later</p>
          </div>

          <form className='mt-10'>
            <div className='my-7 flex flex-row items-center'>
              <div>
                <label className='font-bold sm:text-xl mb-4'> Add an Avatar</label>
                <div className='w-28 h-28 sm:w-36 mt-4 sm:h-36 border-2 border-dashed flex justify-center items-center rounded-full'>
                  {image ? <img
                    src={image}
                    className='rounded-full object-cover w-full h-full'
                  />
                    :
                    <BiSolidCameraPlus className='h-5 w-5 text-gray-400'/>
                  }
                </div>
              </div>
              <div className='mx-4 sm:mx-10 mt-7 lg:mt-0'>
                <input
                  onChange={uploadImage}
                  ref={myRef}
                  className='hidden'
                  type='file'
                  accept='image/*'
                />
                <div>
                  <button
                    onClick={handleUpload}
                    className='p-2 px-4 border font-bold rounded-lg'
                  >
                    Choose image
                  </button>
                  <p className='flex font-medium text-gray-400 items-center'> <RiArrowDropRightLine className='h-8 w-8'/> Or choose one of our defaults </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col mt-16 mb-7'>
              <label className='font-bold mb-4 sm:text-xl'>Add Your location</label>
              <input
                id='uploadImage'
                className='p-2 outline-none border-b shadow-sm'
                type='text'
                placeholder='Enter email'
              />
            </div>

            <button onClick={handleClick} className='p-2 border-0 mt-7 mb-2 px-10 sm:px-20 font-medium text-white rounded-lg bg-pink-600'>
              Next
            </button>
            <div className='text-xs pl-6 sm:text-sm font-medium text-gray-500'>
              <p>
                {image ? 'or Press RETURN' : ""}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage2;
