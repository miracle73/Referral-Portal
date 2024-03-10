import React, { useEffect, useRef, useState, useContext } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { FaPlus } from "react-icons/fa6";
import MobileSideBar from '../../components/MobileSideBar';
import Navbar from '../../assets/images/navbar.png';
import '../../components/Component.css'
import { sendInvite } from '../../actions/AmbassadorActions'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Invite from '../../components/modal/Invite';

const AddAmbassadors = () => {
    const [navbar, setNavbar] = useState(false)
    const sidebarRef = useRef(null);
    const navigate = useNavigate();
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


    const { token } = useContext(AuthContext);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setNavbar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef]);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('logged_in');
        if (!loggedInUser) {

            navigate('/login');
        }
    }, []);


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
        <div className='min-h-screen bg-white flex relative'>
            <div className='w-1/5 max-lg:hidden'>
                <Sidebar />
            </div>
            {navbar &&
                <div className='w-1/2 fixed' ref={sidebarRef}>
                    <MobileSideBar setNavbar={setNavbar} />
                </div>}
            <div className='w-4/5 max-lg:w-full'>
                <div className='max-lg:hidden'>
                    <Header />
                </div>
                <form className='px-10 pb-5' onSubmit={handleSubmit}  >
                    <div className='flex justify-between max-lg:justify-start max-lg:gap-8 items-center'>
                        <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                            <img src={Navbar} />
                        </div>
                        <p className='text-[26px] max-lg:text-xl max-md:text-lg max-sm:text-base  font-[600] text-[#000000] font-[Poppins] my-5'> Add Lead Ambassadors</p>
                        <button className='bg-[#082C25] px-3 py-2 flex justify-center items-center rounded-md gap-2 max-lg:hidden'>
                            <FaPlus className='text-white' />
                            <p className='text-white text-[14px] max-lg:text-xs  max-sm:text-[10px]  font-[400] font-[Rockwell] '> Add </p>
                        </button>
                    </div>
                    <p className='text-[16px] max-lg:text-sm  max-sm:text-xs  font-[300] text-[#575F6E] font-[Roboto] mb-5'> Fill in the data for the lead ambassador. A email will be sent to their address to onboard them. </p>


                    <div className='border rounded-md p-4 pt-3 mt-3'>

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
                    <div className='flex justify-center items-center lg:hidden mt-10'>
                        <button className='bg-[#082C25] px-3 py-2 flex justify-center items-center rounded-md gap-2'>
                            {loading ? (
                                <div className='loader'></div>
                            ) : (
                                <p className='text-white text-[14px] max-lg:text-xs  max-sm:text-[10px]  font-[400] font-[Rockwell] '> Send Invite </p>
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
                {modal && <Invite modal={modal} setModal={setModal} />}
            </div>
        </div>
    )
}


export default AddAmbassadors
