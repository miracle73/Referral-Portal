import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import BeelsIcon from '../assets/images/beels.png';
import DashboardIcon from '../assets/images/dashboardIcon.png';
import AmbassadorsIcon from '../assets/images/ambassadorsIcon.png';
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = () => {
  const [showAmbassadors, setShowAmbassadors] = useState(true);
  const [activeLink, setActiveLink] = useState('');
  const [secondActiveLink, setSecondActiveLink] = useState('');
  const [thirdActiveLink, setThirdActiveLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewAmbassadorsClick = () => {
    navigate('/dashboard/personal/overview');
    setSecondActiveLink('ViewAmbassadors');
  };

  useEffect(() => {
    const path = location.pathname;
    const paths = [
      '/dashboard/all',
      '/dashboard/personal/overview',
      '/dashboard/personal/ambassadors/chat',
      '/dashboard/personal/user',
      '/dashboard/subambassadors/details',
      '/dashboard/personal/ambassadors',
    ];

    const secondPaths = [
      '/'
    ];
    const thirdPaths = [
      '/dashboard/add-ambassador',
    ]
    if (thirdPaths.includes(path)) {
      setThirdActiveLink('AddAmbassadors');
    } else {
      setThirdActiveLink('');
    }

    if (secondPaths.includes(path)) {
      setActiveLink('dashboard');
    } else {
      setActiveLink('');
    }

    if (paths.includes(path)) {
      setSecondActiveLink('ViewAmbassadors');
    } else {
      setSecondActiveLink('');
    }
 }, [location]); 


  const handleDashboardClick = () => {
    navigate('/');
    setActiveLink('dashboard');
  };

 
  const handleDropdownClick = () => {
    setActiveLink('');
    setShowAmbassadors(!showAmbassadors);
  };

  return (
    <div className='bg-[#F5F5F5] pl-10 pt-10 min-h-screen'>
      <img src={BeelsIcon} className='pb-16' />
      <div className={`flex justify-start rounded-l-md gap-4 items-center py-2 my-4 px-2 ${activeLink === 'dashboard' ? 'bg-[#3AB54A]' : ''}`} onClick={handleDashboardClick}>
        <img src={DashboardIcon} />
        <p className='text-sm font-[700] text-[#667185] font-[Rockwell]'>Dashboard</p>
      </div>
      <div className='flex justify-between items-center px-2 my-4 py-2'>
        <div className={`flex justify-start items-center gap-4`}>
          <img src={AmbassadorsIcon} />
          <p className='text-sm font-[700] text-[#667185] font-[Rockwell]'> Ambassadors</p>
        </div>
        <div onClick={handleDropdownClick}>
          <RiArrowDropDownLine />
        </div>
      </div>
      {showAmbassadors && (
        <div>
          <div className={`flex rounded-l-md justify-start gap-4 items-center px-3 my-3 py-2  ${secondActiveLink === 'ViewAmbassadors' ? 'bg-[#3AB54A]' : ''}`} onClick={handleViewAmbassadorsClick}>
            <div className='w-4 h-4 rounded-full border border-[#667185]'></div>
            <p className='text-sm font-[700] text-[#667185] font-[Rockwell]'>View Ambassadors</p>
          </div>
          <div className={`flex rounded-l-md justify-start gap-4 items-center px-3 py-2 my-3  ${thirdActiveLink === 'AddAmbassadors' ? 'bg-[#3AB54A]' : ''}`} onClick={() => {navigate('/dashboard/add-ambassador'); setThirdActiveLink("AddAmbassadors")}}>
            <div className='w-4 h-4 rounded-full border border-[#667185]'></div>
            <p className='text-sm font-[700] text-[#667185] font-[Rockwell]'>Add Ambassadors</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar;
