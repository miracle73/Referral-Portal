import React, {useState, useEffect, useContext} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import ProfileIcon from '../assets/images/profile.png';
import { AuthContext } from '../context/AuthContext';




const Header = () => {
    const { token, user } = useContext(AuthContext);
    const profileImageSrc = user?.business?.image || ProfileIcon;
    return (
        <div className='w-full h-24 bg-[#F5F5F5] flex justify-between items-center px-10 pr-5'>
            <div className='flex justify-start items-center gap-8 w-3/5'>
                <p className='text-[27px] font-[600] text-[#000000] font-[Poppins]'> Dashboard </p>
                <div className='py-2 w-full bg-[#F9FAFB] rounded-md flex justify-start items-center  gap-2 pl-2 '>
                    <IoSearchOutline className='text-black' />
                    <input type='text' placeholder="Search here..." style={{ backgroundColor: '#F9FAFB' }} className='flex-1 rounded-md' />
                </div>
            </div>

            <div className='flex justify-start items-center gap-2 w-1/5'>
                <IoIosNotificationsOutline />
                <div className='w-10 h-10 rounded-full'>
                    <img src={profileImageSrc} />
                </div>
                <div>
                    <p className='text-[12px] font-[500] text-[#101928] font-[Poppins]'> {user?.first_name + '' + user?.last_name} </p>
                    <p className='text-[10px] font-[400] text-[#101928] font-[Poppins]'> {user?.type} </p>
                </div>
                <RiArrowDropDownLine />
            </div>

        </div>
    )
}

export default Header
