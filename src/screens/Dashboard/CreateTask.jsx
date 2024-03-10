import React, { useState, useContext, useEffect, useRef } from 'react'
import '../../components/Component.css'
import CancelIcon from '../../assets/images/cancel.png'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../assets/images/navbar.png';
import MobileSideBar from '../../components/MobileSideBar';

const createTask = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(AuthContext);
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [points, setPoints] = useState("")
    const [isLeadAmbassadorSelected, setIsLeadAmbassadorSelected] = useState(false);
    const [isSubAmbassadorSelected, setIsSubAmbassadorSelected] = useState(false);
    const [navbar, setNavbar] = useState(false)
    const sidebarRef = useRef(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('logged_in');
        if (!loggedInUser) {

            navigate('/login');
        }
    }, []);

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
        if (error) {
            setIsErrorVisible(true);
            const timer = setTimeout(() => {
                setIsErrorVisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        console.log(name, description, points)
        console.log('Lead Ambassador Selected:', isLeadAmbassadorSelected);
        console.log('Sub Ambassador Selected:', isSubAmbassadorSelected);

    };

    return (
        <div className='lg:hidden  min-h-screen relative  bg-white pb-10 max-lg:flex max-lg:flex-col'>
            {navbar &&
                <div className='w-1/2 fixed' ref={sidebarRef}>
                    <MobileSideBar setNavbar={setNavbar} />
                </div>}

            <div className='flex justify-start mx-4 my-5 max-lg:my-4 items-center gap-4'>
                <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                    <img src={Navbar} />
                </div>

                <p className='text-[20px] font-[700] text-[#242731] font-[Poppins] '> Create Task </p>
            </div>

            <p className='text-[13px] pt-1 w-[70%]  font-[300] text-[#9bb3e0] font-[Roboto] mx-4'> Fill in the details for the tasks you want to assign. </p>
            <form className='w-[90%] ' onSubmit={handleSubmit}>
                <div className=' p-4 pt-3 mt-3'>
                    <p className='text-[16px] font-[600] text-[#242731] font-[Poppins] '> Task Information </p>
                    <p className='text-[8px] pt-2 font-[300] text-[#343434] font-[Roboto] '> Please fill in the required details </p>
                    <div className='pt-2'>
                        <p className='text-[10px] pt-2  font-[400] text-[#242426] font-[Poppins]'> Name of Tasks </p>
                        <input type="text" className=' w-full md:w-1/2 sm:w-3/4 email-input text-black border-b-[1px] border-[#E2E4E5]    text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' value={name} onChange={(e) => setName(e.target.value)} />

                    </div>
                    <div>
                        <p className='text-[10px] pt-2 font-[400] text-[#242426] font-[Poppins]'> Task Description </p>
                        <input type="text" className=' md:w-1/2 sm:w-3/4    email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' value={description} onChange={(e) => setDescription(e.target.value)} />

                    </div>
                    <div>
                        <p className='text-[10px] pt-2  font-[400] text-[#242426] font-[Poppins]'> How many points do you want to allocate? </p>
                        <input type="text" className=' md:w-1/2 sm:w-3/4  email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' value={points} onChange={(e) => setPoints(e.target.value)} />

                    </div>


                </div>
                <p className='mx-4 text-[13px] pt-1 w-[70%]  font-[300] text-black font-[Roboto] '> Select the Ambassadors you want to reach </p>
                <div className='px-3 mx-4'>
                    <div className='flex justify-start items-center gap-4'>
                        <input type="checkbox" id="leadAmbassador" checked={isLeadAmbassadorSelected} onChange={() => setIsLeadAmbassadorSelected(!isLeadAmbassadorSelected)} />
                        <p className='text-[13px] pt-1 w-[70%]  font-[300] text-black font-[Roboto] '> Lead Ambassador </p>
                    </div>
                    <div className='flex justify-start items-center gap-4'>
                        <input type="checkbox" id="subAmbassador" checked={isSubAmbassadorSelected} onChange={() => setIsSubAmbassadorSelected(!isSubAmbassadorSelected)} />

                        <p className='text-[13px] pt-1 w-[70%]  font-[300] text-black font-[Roboto] '> Sub Ambassador </p>
                    </div>
                </div>
                <div className='flex justify-start items-center max-lg:px-10'>
                    <button className='bg-[#082C25] md:w-[35%] sm:w-[45%]  mt-5 w-3/5 py-2 flex justify-center items-center rounded-md' type="submit">
                        {loading ? (
                            <div className='loader'></div>
                        ) : (
                            <p className='text-white text-[14px] font-[400] font-[Inter] '> Create Task </p>
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
    )
}

export default createTask
