import React, { useState, useEffect } from 'react'
import LeadIcon from '../assets/images/lead.png';
import BinIcon from '../assets/images/bin.png';
import EditIcon from '../assets/images/edit.png';
import ThreeDotIcon from '../assets/images/three-dot.png';


const LeadAmbassador = ({ icons, name, email, date }) => {
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
                <div className='px-5 flex justify-between items-center bg-[#FAF9F6] h-20 border-b border-[#D0D5DD]'>
                    <div className='flex justify-start  items-center gap-2 w-[20%]'>
                        <div className='h-10 w-10  rounded-md border-[3px] border-[#D0D5DD]'></div>
                        <div className='w-17 h-17 rounded-full'>
                            <img src={LeadIcon} />
                        </div>
                        <div>
                            <p className='text-[#101928] text-[10px] font-[500] font-[Inter] '> {name} </p>
                            <p className='text-[#475367] text-[10px] font-[400] font-[Inter] '> Lead Ambassador </p>
                        </div>


                    </div>
                    <div className='flex justify-center items-center gap-2 w-[20%]'>
                        <p className='text-[#475367] text-[11px] font-[400] font-[Inter] '> {email}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2 w-[20%]'>
                        <div className='bg-[#1671D9] px-3 py-2 rounded-2xl flex justify-center items-center'>
                            <p className='text-[#FAF9F6] text-[11px] font-[500] font-[Inter] '> Recruiter </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 w-[20%]'>
                        <p className='text-[#475367] text-[11px] font-[400] font-[Inter] '> {date} </p>
                    </div>
                    <div className={`flex  ${icons === true ? 'justify-between' : 'justify-start'}  items-center gap-2 w-[20%]`}>
                        <div className='bg-[#E7F6EC] px-3 py-2 rounded-2xl flex justify-center items-center'>
                            <p className='text-[#099137] text-[11px] font-[500] font-[Inter] '> Active </p>
                        </div>
                        {icons === true && (<div className='flex justify-center items-center gap-1'>
                            <img src={EditIcon} />
                            <img src={BinIcon} />
                        </div>)}

                    </div>
                </div>
            )

        }
        else {
            return (
                <>
                
                    <div className='flex justify-between items-center gap-2 sm:w-3/4 mt-7 '>
                        <p className='text-[#101928] text-[11px] font-[400] font-[Inter] '> {email} </p>
                        <img src={ThreeDotIcon} />
                    </div>
                    <div className='px-5 sm:w-3/4  max-md:px-4 max-sm:px-3 flex flex-col justify-between h-20 border rounded-md border-[#D0D5DD] my-3 py-2'>
                        <div className='flex justify-between items-center gap-2'>
                            <div className='flex justify-start  items-center gap-2'>
                                <div className='w-25 h-25 rounded-full'>
                                    <img src={LeadIcon} />
                                </div>
                                <div>
                                    <p className='text-[#101928] text-[10px] font-[500] font-[Inter] '> {name} </p>
                                    <p className='text-[#475367] text-[10px] font-[400] font-[Inter] '> Lead Ambassador </p>
                                </div>
                            </div>


                            <div className='bg-[#082C25] px-3 py-2 rounded-2xl flex justify-center items-center'>
                                <p className='text-[#FAF9F6] text-[11px] font-[500] font-[Inter] '> Lead </p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <p className='text-[#475367] text-[11px] font-[400] font-[Inter] '> Date Added </p>
                            <div className='flex justify-between items-center gap-2'>
                                <p className='text-[#475367] text-[11px] font-[700] font-[Inter] '> {date} </p>
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

export default LeadAmbassador
