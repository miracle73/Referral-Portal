import React, { useState, useEffect } from 'react';
import LeadIcon from '../assets/images/lead.png';
import EditIcon from '../assets/images/edit.png';
import ThreeDotIcon from '../assets/images/three-dot.png';

const SubAmbassador = ({ border, icons , name, email, date}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const Content = () => {
        if (screenWidth >= 1024) {
            return (
                <div className={`px-2 flex justify-between items-center bg-[#FAF9F6] h-14 ${border === true ? 'border-b border-[#D0D5DD]' : ''}`}>
                    <div className='flex justify-start items-center gap-2 w-[30%]'>
                        <div className='h-5 w-5 rounded-md border border-[#D0D5DD]'></div>
                        <div className='rounded-full'>
                            <img src={LeadIcon} />
                        </div>
                        <div>
                            <p className='text-[#101928] text-[8px] font-[500] font-[Inter] '> {name} </p>
                            <p className='text-[#475367] text-[8px] font-[400] font-[Inter] '> Lead Ambassador </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 w-[20%]'>
                        <p className='text-[#475367] text-[8px] font-[400] font-[Inter] '> {email} </p>
                    </div>
                    <div className='flex justify-center items-center gap-2 w-[20%]'>
                        <div className='bg-[#22612A] p-1 rounded-2xl flex justify-center items-center'>
                            <p className='text-white text-[6px] font-[500] font-[Inter] '> Sub Ambassador </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-1 w-[15%]'>
                        <p className='text-[#475367] text-[8px] font-[400] font-[Inter] '> {date} </p>
                    </div>
                    <div className='flex justify-end items-center gap-2 w-[15%]'>
                        <div className='bg-[#E7F6EC] p-2 rounded-2xl flex justify-center items-center'>
                            <p className='text-[#099137] text-[6px] font-[500] font-[Inter] '> Active </p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <>

                    <div className='flex justify-between items-center gap-2 sm:w-3/4 mt-3 '>
                        <p className='text-[#101928] text-[11px] font-[400] font-[Inter] '> Sandy04@gmail.com </p>
                        <img src={ThreeDotIcon} />
                    </div>
                    <div className='px-5 sm:w-3/4  max-md:px-4 max-sm:px-3 flex flex-col justify-between h-20 border rounded-md border-[#D0D5DD] my-3 py-2'>
                        <div className='flex justify-between items-center gap-2'>
                            <div className='flex justify-start  items-center gap-2'>
                                <div className='w-25 h-25 rounded-full'>
                                    <img src={LeadIcon} />
                                </div>
                                <div>
                                    <p className='text-[#101928] text-[10px] font-[500] font-[Inter] '> Sandra Akpotu </p>
                                    <p className='text-[#475367] text-[10px] font-[400] font-[Inter] '> Lead Ambassador </p>
                                </div>
                            </div>


                            <div className='bg-[#082C25] px-3 py-2 rounded-2xl flex justify-center items-center'>
                                <p className='text-[#FAF9F6] text-[6px] font-[500] font-[Inter] '> Sub Ambassador </p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <p className='text-[#475367] text-[11px] font-[400] font-[Inter] '> Date Added </p>
                            <div className='flex justify-between items-center gap-2'>
                                <p className='text-[#475367] text-[11px] font-[700] font-[Inter] '> 03/01/2024 </p>
                                {icons === true && (<div className='flex justify-center items-center gap-1'>
                                    <img src={EditIcon} />
                                </div>)}
                            </div>
                        </div>

                    </div>
                </>
            )
        }
    }


    return (
       Content()
    )
}

export default SubAmbassador;
