import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({err, setErr}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    function handleAuth(e) {
        e.preventDefault();
        // Validating fields
        if (!formData.username) setErr("Please fill in the Username field.");
        else if (!formData.email) setErr("Please fill in the Email field.");
        else if (!formData.password) setErr("Please fill in the Password field.");
        else navigate('/signup2');
    }

    function inputChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

  return (
    <form className='mt-10'>
      <div className='my-7'>
        <div className='flex flex-col w-full'>
          <label className='font-bold sm:text-lg'>Username</label>
          <input onChange={inputChange} name="username" className='p-2 rounded-lg bg-gray-100 shadow-sm' type="text" placeholder='Enter Username' />
        </div>
      </div>
      <div className='my-7'>
        <div className='flex flex-col w-full'>
          <label className='font-bold sm:text-lg'>Email</label>
          <input onChange={inputChange} name="email" className='p-2 rounded-lg bg-gray-100 shadow-sm' type="email" placeholder='Enter Email' />
        </div>
      </div>
      <div className='my-7'>
        <div className='flex flex-col w-full'>
          <label className='font-bold sm:text-lg'>Password</label>
          <input onChange={inputChange} name="password" className='p-2 rounded-lg bg-gray-100 shadow-sm' type="password" placeholder='Enter Password' />
        </div>
      </div>
      <div className='flex mb-2 text-slate-500'>
        <div>
          <input id="checkbox" className='h-3 w-3 sm:w-5 sm:h-6' type='checkbox' />
          <label htmlFor="checkbox" className='text-sm sm:text-base font-medium ml-3'>Creating an account means you're okay with our
            <span className='text-purple-700'> Terms of Service Privacy Policy</span>
            and our default <span className='text-purple-700'>Notification Settings</span>
          </label>
        </div>
      </div>
      <button onClick={handleAuth} className='p-2 border-0 my-7 px-5 sm:px-10 font-medium text-white rounded-lg bg-pink-600'>Sign In</button>
      <div className='text-xs sm:text-sm font-medium text-gray-500'>
        <p>This site is protected by reCAPTCHA and the Google <span className='text-purple-700'>Privacy Policy</span> and <span className='text-purple-700'>Terms of Service</span> apply.</p>
      </div>
    </form>
  );
}

export default Login;
