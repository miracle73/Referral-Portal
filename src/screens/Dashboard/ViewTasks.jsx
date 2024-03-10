import React, { useState, useEffect, useRef, useContext } from 'react'
import LeadIcon from '../../assets/images/lead.png';
import BinIcon from '../../assets/images/bin.png';
import EditIcon from '../../assets/images/edit.png';
import Navbar from '../../assets/images/navbar.png';
import MobileSideBar from '../../components/MobileSideBar';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ViewTasks = () => {
    const [navbar, setNavbar] = useState(false)
    const sidebarRef = useRef(null);
    const { token, user } = useContext(AuthContext);
    const [userdetail, setUserdetail] = useState(null);
    const [error, setError] = useState(null)
    const navigate = useNavigate();

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


    return (
        <div className='min-h-screen bg-white flex relative lg:hidden'>
            {navbar &&
                <div className='w-1/2 fixed' ref={sidebarRef}>
                    <MobileSideBar setNavbar={setNavbar} />
                </div>}
            <div className='w-4/5 max-lg:w-full'>

                <div className='flex justify-between lg:mx-0 max-lg:justify-start mx-10 items-center max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 max-lg:gap-4'>
                    <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                        <img src={Navbar} />
                    </div>
                    <p className='text-[26px] mx-10  max-lg:text-xl max-md:text-lg max-sm:text-base font-[600] text-[#000000] font-[Poppins] my-5'> View all Tasks </p>


                </div>
                <div className='h-full mx-10 max-lg:mx-8 max-md:mx-5'>

               
                        {/* const createdAtDate = new Date(item.created_at);

                         const formattedDate = createdAtDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }); */}


                            <div className='px-5  sm:w-3/4  max-md:px-4 max-sm:px-3 flex flex-col justify-between h-20 border rounded-md border-[#D0D5DD] my-3 py-2'>
                                <div className='flex justify-between items-center gap-2'>
                                    <div className='flex justify-start  items-center gap-2'>

                                        <div>
                                            <p className='text-[#101928] text-[14px] font-[700] font-[Inter] '> Onboard new members </p>

                                        </div>
                                    </div>


                                    <div className='bg-[#082C25] px-3 py-2 rounded-2xl flex justify-center items-center'>
                                        <p className='text-[#FAF9F6] text-[11px] font-[500] font-[Inter] '> Lead </p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center gap-2'>
                                    <p className='text-[#475367] text-[11px] font-[400] font-[Inter] '> Date Added </p>
                                    <div className='flex justify-between items-center gap-2'>
                                        <p className='text-[#475367] text-[11px] font-[700] font-[Inter] '> 03/01/2024 </p>
                                        <div className='flex justify-center items-center gap-1'>
                                            <img src={BinIcon} />
                                        </div>
                                    </div>
                                </div>

                            </div>

                

                </div>

            </div>
        </div>
    )
}

export default ViewTasks
