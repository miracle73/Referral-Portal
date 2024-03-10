import React, { useState, useEffect, useRef, useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import LeadIcon from '../../assets/images/lead.png';
import SubAmbassadorOverview from '../../components/SubAmbassadorOverview';
import Navbar from '../../assets/images/navbar.png';
import MobileSideBar from '../../components/MobileSideBar';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getPersonalDetail } from '../../actions/AmbassadorActions'
import { allSubAmbassadors } from '../../actions/AmbassadorActions';
import { getDashboardDetail } from '../../actions/AmbassadorActions';


const SubAmbassadorDetails = () => {
    const [navbar, setNavbar] = useState(false)
    const sidebarRef = useRef(null); 
    const navigate = useNavigate();
    const { token, user } = useContext(AuthContext);
    const [userdetail, setUserdetail] = useState(null);
    const [error, setError] = useState(null)
    const [seconduserdetail, setSecondUserdetail] = useState(null);
    const [seconderror, setSecondError] = useState(null)
    const [thirduserdetail, setThirdUserdetail] = useState(null);
    const [thirderror, setThirdError] = useState(null)
    const profileImageSrc = user?.business?.image || LeadIcon;

    useEffect(() => {
        getPersonalDetail(token, setUserdetail, setError, user?.email);
        getDashboardDetail(token, setThirdUserdetail, setThirdError);
        allSubAmbassadors(token, setSecondUserdetail, setSecondError);


    }, [token]);
    console.log(token, user?.email)
    console.log(userdetail?.user.email);
    console.log(seconduserdetail?.sub);
    console.log(thirduserdetail?.users);

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
        <div className='min-h-screen bg-white flex relative'>
            <div className='w-1/5 max-lg:hidden'>
                <Sidebar />
            </div>
            {navbar &&
                <div className='w-1/2 fixed' ref={sidebarRef}>
                    <MobileSideBar setNavbar={setNavbar}/>
                </div>}
            <div className='w-4/5 max-lg:w-full'>
                <div className='max-lg:hidden'>
                    <Header />
                </div>
                {/* <div className='flex justify-start mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 items-center gap-2'>
                    <img src={Navbar} />
                    <p className='text-[26px] max-lg:text-xl max-md:text-lg max-sm:text-base  font-[600] text-[#000000] font-[Poppins] mx-10 my-5'>Viewing Sub Ambassador</p>
                </div> */}
                <div className='flex justify-between max-lg:justify-start lg:mx-0 mx-10 items-center max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 max-lg:gap-4'>
                    <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                        <img src={Navbar} />
                    </div>
                    <p className='text-[26px]  max-lg:text-xl max-md:text-lg max-sm:text-base font-[600] text-[#000000] font-[Poppins] my-5'> Viewing Sub Ambassadors</p>
                    <button className='bg-[#082C25] px-3 py-2 flex justify-center items-center rounded-md gap-2 max-lg:hidden'>

                        <p className='text-white text-[14px]  font-[400] font-[Rockwell] '> Promote </p>
                    </button>

                </div>
                <div className='flex justify-start items-center gap-4 mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4'>
                    <div className='w-17 h-17 rounded-full'>
                        <img src={profileImageSrc} />
                    </div>
                    <div>
                        <p className='text-[#101928] text-[24px] max-lg:text-lg max-md:text-base max-sm:text-sm  font-[600] font-[Inter] '> {user.first_name} {userdetail?.user.last_name}  </p>
                        <p className='text-[#475367] text-[12px] max-md:text-[10px] font-[400] font-[Inter] '> {user.email} </p>
                    </div>
                </div>
                <div className='flex justify-start items-center mx-10 max-lg:mx-8 max-md:mx-5 my-5 max-lg:my-4 gap-12 border-b border-[#E4E7EC] mt-5'>
                    <div className='border-b border-[#F56630]'>
                        <p className='text-[#F56630] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Overview </p>
                    </div>

                </div>
                <SubAmbassadorOverview fname={userdetail?.user.first_name} lname={userdetail?.user.last_name} email={userdetail?.user.email} accountNumber={userdetail?.user.business.rc_number} dateCreated={userdetail?.user.created_at} pnumber={userdetail?.user.phone} school={userdetail?.user.school} refLink={userdetail?.user.business.acc_number} sub={seconduserdetail?.sub} user={thirduserdetail?.users} />
                <div className='flex justify-center items-center  py-5 lg:hidden'>
                    <button className='bg-[#082C25]  flex justify-center px-3 py-2 items-center rounded-md gap-2 '>

                        <p className='text-white text-[14px]  font-[400] font-[Rockwell] '> Promote </p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SubAmbassadorDetails
