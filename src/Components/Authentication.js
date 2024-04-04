import React, { useState } from 'react';
import SignupPage1 from './SignupPage1';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const [toggleAuth, setToggleAuth] = useState(false);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    setToggleAuth(prev => !prev);
  }

  return (
    <div className='sm:grid grid-cols-12 h-screen'>
      <div className='hidden sm:block col-span-4 h-screen'>
        <img className='h-screen w-full' src='aenoxySingupImage.jpg' alt='Signup Image' />
      </div>

      <div className='col-span-8 mt-16 sm:mt-0 bg-white flex justify-center items-center'>
        <h1 className='absolute font-medium top-4 sm:top-6 left-[48%] sm:left-[75%] lg:left-[82%]'>
          {!toggleAuth ? 'Already a member? ' : 'New Member? '}
          <span onClick={handleLogin} className='cursor-pointer text-purple-700'>
            {!toggleAuth ? 'Sign In' : 'Sign Up'}
          </span>
        </h1>

        <div className='w-[60%] sm:w-[45%] my-2'>
          <h1 className={'text-2xl sm:text-3xl font-bold ' + (err ? 'mb-4' : '')}>
            {!toggleAuth ? 'Sign up' : 'Sign In'} to Dribble
          </h1>

          {err && <li className='text-red-500 ml-2'>{err}</li>}

          {!toggleAuth ? <SignupPage1 err={err} setErr={setErr} toggleAuth={toggleAuth} /> : <Login err={err} setErr={setErr} />}

        </div>
      </div>
    </div>
  );
};

export default Authentication;
