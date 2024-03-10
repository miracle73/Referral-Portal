import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../assets/images/navbar.png'
import MobileSideBar from '../../components/MobileSideBar'
import { useNavigate } from 'react-router-dom';

const PersonalTasks = () => {
    const [navbar, setNavbar] = useState(false)
    const sidebarRef = useRef(null);
    const navigate = useNavigate();
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


    return (
        <div className='lg:hidden bg-white max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-start '>
            {navbar &&
                <div className='w-1/2 fixed min-h-screen h-screen' style={{ height: '100vh', top: "0" }} ref={sidebarRef}>
                    <MobileSideBar setNavbar={setNavbar} />
                </div>}
            <div className={` mx-5 flex justify-start  items-center w-full  pt-5`}>
                <div className=''>
                    <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                        <img src={Navbar} />
                    </div>
                </div>
                <div className='w-[95%]'>
                    <p className='text-[24px] max-lg:text-[20px] pt-1 font-[600]  text-[#000000] font-[Poppins] text-center '> View all tasks </p>
                    <p className='text-[16px] max-lg:text-sm pt-2 font-[400]  text-[#000000] font-[Poppins] text-center '> View all your tasks here </p>
                </div>

            </div>

            <p className='mx-5 text-[#000000] text-[20px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[600] font-[Inter] mt-7 '> In Progress Tasks </p>
            <div className='mx-5 w-[95%] px-2 mt-2  '>
                <div className='flex justify-between items-center '>
                    <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[400] font-[Poppins]  '> Onboard 20 Ambassadors </p>
                    <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[400] font-[Poppins]  '> 0/20</p>
                </div>
                <div className='h-5 rounded-lg bg-[#DADFDE] w-full mt-1'>
                    <div className='h-5 rounded-lg bg-[#082C25] mt-1 w-[0%]'></div>
                </div>
            </div>
            <div className='mx-5 w-[95%] px-2 mt-2 '>
                <div className='flex justify-between items-center '>
                    <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[400] font-[Poppins]  '> Users with Virtual Cards </p>
                    <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[400] font-[Poppins]  '> 0/40</p>
                </div>
                <div className='h-5 rounded-lg bg-[#DADFDE] w-full mt-1'>
                    <div className='h-5 rounded-lg bg-[#082C25] mt-1 w-[0%]'></div>
                </div>
            </div>
            <div className='mx-5 w-[95%] px-2 mt-2 '>
                <div className='flex justify-between items-center '>
                    <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[400] font-[Poppins]  '> Refer 50 users </p>
                    <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[400] font-[Poppins]  '> 0/50</p>
                </div>

                <div className='h-5 rounded-lg  bg-[#DADFDE] w-full mt-1'>
                    <div className='h-5 rounded-lg bg-[#082C25] mt-1 w-[0%]'></div>
                </div>
            </div>
            <div className='mx-5 w-[95%] px-2 mt-2 '>
                <div className='flex justify-between items-center '>
                    <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[400] font-[Poppins]  '> 60 User to collect loans </p>
                    <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[400] font-[Poppins]  '> 0/60</p>
                </div>
                <div className='h-5 rounded-lg  bg-[#DADFDE] w-full mt-1'>
                    <div className='h-5 rounded-lg bg-[#082C25] mt-1 w-[0%]'></div>
                </div>
            </div>

            <p className=' mx-5  text-[#000000] text-[20px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[600] font-[Inter] mt-7 '> To-do Tasks </p>
            <div className='mx-5 justify-between flex items-center  w-[95%]'>
                <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2 flex flex-col h-24 gap-8 max-xsm:h-28 '>
                    <div className='flex justify-end items-center'>
                        <div className='flex justify-center gap-2 items-center bg-[#22612A] rounded-md w-12 max-xsm:w-16'>

                            <p className='text-[#FAF9F6] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 20 Points </p>
                        </div>
                    </div>

                    <div className=' ' >
                        <p className='text-[#FF2E3B] text-[12px]  max-md:text-xs  font-[600] font-[Inter] '> Tasks </p>
                        <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[700] font-[Inter] '> Onboard 50 new members</p>

                    </div>
                </div>
                <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2 flex flex-col h-24 gap-8  max-xsm:h-28  '>
                    <div className='flex justify-end items-center'>
                        <div className='flex justify-center gap-2 items-center bg-[#22612A] rounded-md w-12 max-xsm:w-16'>

                            <p className='text-[#FAF9F6] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 20 Points </p>
                        </div>
                    </div>

                    <div className=' ' >
                        <p className='text-[#FF2E3B] text-[12px]  max-md:text-xs  font-[600] font-[Inter] '> Todo </p>
                        <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[700] font-[Inter] '> Get 45 users to get virtual card </p>

                    </div>
                </div>
            </div>
            <div className='mx-5 justify-between flex items-center  w-[95%]'>
                <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2 flex flex-col h-24 gap-8 max-xsm:h-28 '>
                    <div className='flex justify-end items-center'>
                        <div className='flex justify-center gap-2 items-center bg-[#22612A] rounded-md w-12 max-xsm:w-16'>

                            <p className='text-[#FAF9F6] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 20 Points </p>
                        </div>
                    </div>

                    <div className=' ' >
                        <p className='text-[#FF2E3B] text-[12px]  max-md:text-xs  font-[600] font-[Inter] '> Tasks </p>
                        <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[700] font-[Inter] '> Onboard 50 new members </p>

                    </div>
                </div>
                <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2 flex flex-col h-24 gap-8  max-xsm:h-28  '>
                    <div className='flex justify-end items-center'>
                        <div className='flex justify-center gap-2 items-center bg-[#22612A] rounded-md w-12 max-xsm:w-16'>

                            <p className='text-[#FAF9F6] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 20 Points </p>
                        </div>
                    </div>

                    <div className=' ' >
                        <p className='text-[#FF2E3B] text-[12px]  max-md:text-xs  font-[600] font-[Inter] '> Todo </p>
                        <p className='text-[#000000] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[700] font-[Inter] '> Get 45 users to get virtual card </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalTasks
