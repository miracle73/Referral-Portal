import React, { useState, useRef, useEffect, useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import LeadIcon from '../../assets/images/lead.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../assets/images/navbar.png';
import UserPersonalDetailsSub from '../../components/UserPersonalDetailsSub';
import MobileSideBar from '../../components/MobileSideBar';
import { AuthContext } from '../../context/AuthContext';
import { getDashboardDetail } from '../../actions/AmbassadorActions';

const UserPersonalDetails = () => {
    const [activeSection, setActiveSection] = useState('Users');
    const [navbar, setNavbar] = useState(false)
    const { token, user } = useContext(AuthContext);
    const [userdetail, setUserdetail] = useState(null);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const profileImageSrc = user?.business?.image || LeadIcon;

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

        getDashboardDetail(token, setUserdetail, setError);



    }, [token]);

    console.log(userdetail?.users);


    const handleClick = (section) => {
        setActiveSection(section);

        switch (section) {
            case 'Overview':
                navigate('/dashboard/personal/overview');
                break;
            case 'Users':
                navigate('/dashboard/personal/user');
                break;
            case 'Ambassadors':
                navigate('/dashboard/personal/ambassadors');
                break;
            case 'SendMessage':
                navigate('/dashboard/personal/ambassadors/chat');
                break;
            default:
                break;
        }
    };


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
                <div className='flex justify-start lg:mx-0 mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 items-center gap-2'>
                    <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                        <img src={Navbar} />
                    </div>
                 
                   
                </div>
                <div className='flex justify-start items-center gap-4 mx-10  max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4'>
                    <div className='w-17 h-17 rounded-full'>
                        <img src={profileImageSrc} />
                    </div>
                    <div>
                        <p className='text-[#101928] text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[600] font-[Inter] '> {user.first_name} {user.last_name} </p>
                        <p className='text-[#475367] text-[12px] max-md:text-[10px] font-[400] font-[Inter] '> {user.email} </p>
                    </div>
                </div>
                <div className='flex justify-start items-center mx-10 max-lg:mx-8 max-md:mx-6 max-sm:mx-4 gap-12 max-lg:gap-10 max-md:gap-8 max-sm:gap-4 border-b border-[#E4E7EC] mt-5'>
                    {['Overview', 'Users', 'Ambassadors', 'SendMessage'].map(section => {
                  
                        if ((user?.type !== "Admin" && user?.type !== "Lead") && (section === 'Ambassadors' || section === 'SendMessage')) {
                          
                            return null;
                        }

                        return (
                            <div
                                key={section}
                                onClick={() => handleClick(section)}
                                className={`text-[#344054] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] ${activeSection === section ? 'text-red-500 border-b-2 border-red-500' : ''}`}
                            >
                                {section}
                            </div>
                        );
                    })}
                </div>

                <div className=' w-[60%] max-lg:w-[80%] max-lg:mx-8 max-md:mx-6 max-sm:mx-4 mx-10 my-5'>
                    <div className='flex justify-between items-center mt-3 w-full'>
                        <UserPersonalDetailsSub time='This week' users='Total Users' number={userdetail?.users?.length} percent='15%' textColor='text-[#036B26]' bgColor='bg-[#E7F6EC]' />
                        <UserPersonalDetailsSub time='This week' users='Active Users' number={userdetail?.users?.length} percent='6%' textColor='text-[#9E0A05]' bgColor='bg-[#FBEAE9]' />
                    </div>
                    <div className='flex justify-between items-center mt-3 w-full'>
                        <UserPersonalDetailsSub time='This week' users='Retained Users' number={userdetail?.users?.length} percent='15%' textColor='text-[#036B26]' bgColor='bg-[#E7F6EC]' />
                        <UserPersonalDetailsSub time='This week' users='Inactive Users' number={userdetail?.users?.length} percent='6%' textColor='text-[#9E0A05]' bgColor='bg-[#FBEAE9]' />
                    </div>
                    <div className='flex justify-between items-center mt-3 w-full'>
                        <UserPersonalDetailsSub time='Last 30 days' users='Users that have fully Onboarded' number={userdetail?.users?.length} percent='15%' textColor='text-[#036B26]' bgColor='bg-[#E7F6EC]' />
                        <UserPersonalDetailsSub time='Last 30 days' users='Users with Security Token' number={userdetail?.users?.length} percent='9%' textColor='text-[#036B26]' bgColor='bg-[#E7F6EC]' />

                    </div>


                </div>
            </div>
        </div>
    )
}

export default UserPersonalDetails
