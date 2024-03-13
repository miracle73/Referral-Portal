import React, { useEffect, useState } from 'react'
import BeelsIcon from '../../assets/images/beels.png'
import MailIcon from '../../assets/images/mail.png'
import LockIcon from '../../assets/images/lock.png'
import GoogleIcon from '../../assets/images/google.png'
import Image from '../../assets/images/speaker.png'
import { loginUser } from "../../actions/AuthActions";
import './auth.css'
import { useNavigate } from 'react-router-dom';
import cancelIcon from '../../assets/images/cancel.png';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loggingin, setLoggingin] = useState(false);
  const navigate = useNavigate();
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();

    let isValid = true;

    setEmailError('');
    setPasswordError('');


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Email is not valid');
      isValid = false;
    }


    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      const data = {
        email,
        password,
        type: "Admin"
      };

      loginUser(data, setSuccess, setError, setLoggingin);
    }
  };


  useEffect(() => {
    if (error) {
      setIsErrorVisible(true);
      const timer = setTimeout(() => {
        setIsErrorVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);


  if (success !== null) {
    localStorage.setItem("logged_in", JSON.stringify(success));
    navigate("/");
    location.reload();
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("logged_in")) !== null) {
      navigate("/");
    }
  });
  return (
    <div className='min-h-screen bg-[#B6F485] pt-10 px-10 max-lg:px-8 max-md:px-5 max-sm:px-2'>

      <img src={BeelsIcon} className='' />



      <div className='flex max-lg:flex-col justify-between items-center max-lg:justify-center w-full max-lg:mt-24 max-md:mt-20 max-sm:mt-16'>
        <img src={Image} className='w-[480px] max-lg:hidden' />

        <div className={`bg-[#082C25] h-full   rounded-2xl w-1/2 max-lg:w-3/4 max-md:w-[80%] max-sm:w-[90%] p-5 px-12 max-lg:px-10 max-md:px-8 max-sm:px-6 `}>
          <p className='text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base font-[700] text-white font-[Rockwell] my-4 max-lg:text-center'>Login to your Account</p>
          <form onSubmit={handleLogin}>
            <div className='flex my-4 items-center justify-start gap-2 px-4 max-sm:px-2 py-2 bg-white rounded-lg'>
              <img src={MailIcon} className='' />
              <input type="text" placeholder='Admin Email' className="input max-lg:w-[100%] flex-1" value={email} onChange={(e) => setEmail(e.target.value)} />
            
            </div>
            {emailError && <p className='text-red-500'>{emailError}</p>}
            <div className={`flex my-4 ${emailError|| passwordError && 'my-2'}  items-center justify-start gap-2 px-4 max-sm:px-2 py-2 bg-white rounded-lg`}>
              <img src={LockIcon} className='' />
              <input type="text" placeholder='Password' className="input max-lg:w-[100%] flex-1" value={password} onChange={(e) => setPassword(e.target.value)} />
           
            </div>
            {passwordError && <p className='text-red-500'>{passwordError}</p>}
            <button className={`flex w-full my-4 ${passwordError || emailError && 'my-2'} items-center justify-center gap-2 px-4 py-2 bg-[#3AB54A] rounded-lg`} type="submit">
              {loggingin ? (
                <div className='loader'></div>
              ) : (
                <p className='text-white text-center font-[inter] font-[700] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs'>Login</p>
              )}

            </button>
            {
              isErrorVisible && (
                <>
                  <p className='text-red-500 text-center'>{error} </p>
                  <p className='text-red-500 text-center'> Try again </p>
                </>
              )
            }

          </form>
        </div>
      </div>
    </div>

  )
}

export default Login
