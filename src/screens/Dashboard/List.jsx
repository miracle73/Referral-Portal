import React, { useEffect, useRef, useState, useContext } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import LeadAmbassador from '../../components/LeadAmbassador';
import Navbar from '../../assets/images/navbar.png';
import MobileSideBar from '../../components/MobileSideBar';
import { allAmbassadors } from '../../actions/AmbassadorActions';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const List = () => {
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

    useEffect(() => {
        allAmbassadors(token, setUserdetail, setError);
    }, [token]);

    console.log(userdetail?.all);
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
                <div className='flex justify-between lg:mx-0 max-lg:justify-start mx-10 items-center max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 max-lg:gap-4'>
                    <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                        <img src={Navbar} />
                    </div>
                    <p className='text-[26px] mx-10  max-lg:text-xl max-md:text-lg max-sm:text-base font-[600] text-[#000000] font-[Poppins] my-5'> View all Lead Ambassadors</p>
                    <button className='bg-[#082C25] px-3 py-2 flex justify-center items-center rounded-md gap-2 max-lg:hidden'>
                        <FaPlus className='text-white' />
                        <p className='text-white text-[14px]  font-[400] font-[Rockwell] '> Send Invite </p>
                    </button>

                </div>
                <div className='h-full mx-10 max-lg:mx-8 max-md:mx-5'>
                    <div className='px-5 flex justify-between items-center h-20 max-lg:hidden'>
                        <div className='flex justify-start items-center gap-2 w-[20%] '>
                            <div className='h-10 w-10  rounded-md border border-[#FAF9F6]'></div>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Name </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]' />
                                <IoIosArrowDown className='text-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Email Address </p>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Type </p>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Date Added </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]' />
                                <IoIosArrowDown className='text-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[11px] font-[500] font-[Inter] '> Status </p>
                        </div>
                    </div>
                    {userdetail?.all?.map((item, index) => {
                        const createdAtDate = new Date(item.created_at);
                      
                        const formattedDate = createdAtDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });


                        return (
                            <LeadAmbassador
                                key={index}
                                icons={true}
                                name={item.first_name + ' ' + item.last_name}
                                email={item.email}
                                date={formattedDate}
                            />
                        );
                    })}

                </div>

            </div>
        </div>
    )
}

export default List
