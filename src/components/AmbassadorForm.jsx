import React, { useState, useContext, useEffect } from 'react'
import './Component.css'
import CancelIcon from '../assets/images/cancel.png'
import { sendInvite } from '../actions/AmbassadorActions'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Invite from './modal/Invite';


const AmbassadorForm = ({ close }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [school, setSchool] = useState('');
    const [department, setDepartment] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [schoolError, setSchoolError] = useState('');
    const [departmentError, setDepartmentError] = useState('');
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        let isValid = true;

        // Reset error messages
        setEmailError('');
        setFirstNameError('');
        setLastNameError('');
        setPhoneNumberError('');
        setSchoolError('');
        setDepartmentError('');

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError('Email is not valid');
            isValid = false;
        }



        if (isValid) {
            const data = {
                email,
                first_name: firstName,
                last_name: lastName,
                phone: phoneNumber,
                school,
                department,
                type: "Lead"
            };

            sendInvite(data, setSuccess, setError, setLoading, token);
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
        // setModal(true)
        navigate("/");
        location.reload();
    }

    return (
        <div className='pl-10 h-full max-lg:pl-0 bg-white pb-10 max-lg:flex max-lg:flex-col max-lg:justify-center '>
            <div className='flex justify-end  px-10 items-center pt-5'>
                
                <img src={CancelIcon} className='w-6' onClick={() => close(false)} />
            </div>
            <p className='text-[20px] pt-1 font-[700]  text-[#242731] font-[Poppins] max-lg:text-center'> Lead Ambassador Info </p>
            <p className='text-[13px] pt-1 max-lg:px-32 max-md:px-18 max-sm:px-10  font-[300] text-[#9bb3e0] font-[Roboto] max-lg:text-center'> Fill in the data for the lead ambassador. A email will be sent to their address to onboard them. </p>
            <div className='flex justify-center items-center'>
            <form className='w-[70%] ' onSubmit={handleSubmit}>
                <div className='border rounded-md p-4 pt-3 mt-3'>
                    <p className='text-[16px] font-[600] text-[#242731] font-[Poppins] max-lg:text-center'> Lead Ambassador Info </p>
                    <p className='text-[8px] pt-2 font-[300] text-[#575F6E] font-[Roboto] max-lg:text-center'> Please fill in the required details </p>
                    <div className='pt-2'>
                        <p className='text-[10px] pt-2  font-[400] text-[#242426] font-[Poppins]'> Lead Ambassador Email Address </p>
                        <input type="text" className=' w-full  email-input text-black border-b-[1px] border-[#E2E4E5]    text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <p className='text-red-500'>{emailError}</p>}
                    </div>
                    <div>
                        <p className='text-[10px] pt-2 font-[400] text-[#242426] font-[Poppins]'>Lead’s First Name</p>
                        <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        {firstNameError && <p className='text-red-500'>{firstNameError}</p>}
                    </div>
                    <div>
                        <p className='text-[10px] pt-2  font-[400] text-[#242426] font-[Poppins]'> Lead’s Last Name</p>
                        <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        {lastNameError && <p className='text-red-500'>{lastNameError}</p>}
                    </div>
                    <div>
                        <p className='text-[10px] pt-2 font-[400] text-[#242426] font-[Poppins]'> Lead’s Phone Number  </p>
                        <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        {phoneNumberError && <p className='text-red-500'>{phoneNumberError}</p>}
                    </div>
                    <div>
                        <p className='text-[10px] pt-2 font-[400] text-[#242426] font-[Poppins]'> Lead’s School </p>
                        <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' value={school} onChange={(e) => setSchool(e.target.value)} />
                        {schoolError && <p className='text-red-500'>{schoolError}</p>}
                    </div>
                    <div>
                        <p className='text-[10px] pt-2  font-[400] text-[#242426] font-[Poppins]'> Lead’s Department </p>
                        <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' value={department} onChange={(e) => setDepartment(e.target.value)} />
                        {departmentError && <p className='text-red-500'>{departmentError}</p>}
                    </div>
                </div>
                <div className='flex justify-start items-center max-lg:justify-center'>
                    <button className='bg-[#082C25] mt-5 w-3/5 py-2 flex justify-center items-center rounded-md' type="submit">
                        {loading ? (
                            <div className='loader'></div>
                        ) : (
                            <p className='text-white text-[14px] font-[400] font-[Inter] '> Send Invite </p>
                        )}

                    </button>
                   
                </div>
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
            {modal && <Invite modal={modal} setModal={setModal} />}
        </div>
    )
}

export default AmbassadorForm
