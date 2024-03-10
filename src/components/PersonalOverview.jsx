import React from 'react'
import PersonIcon from '../assets/images/icon.png'
import CopyIcon from '../assets/images/copy.png'
import MailIcon from '../assets/images/mail.png'
import FirstIcon from '../assets/images/person.png'
import TelephoneIcon from '../assets/images/telephone.png'
import SecondIcon from '../assets/images/secondicon.png'
import ThirdIcon from '../assets/images/thirdicon.png'
import { TiArrowUp } from "react-icons/ti"
import SubAmbassador from './SubAmbassador'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"


const PersonalOverview = ({ fname, lname, email, accountNumber, dateCreated, pnumber, school, refLink, sub, user }) => {
    const createdDate = new Date(dateCreated);

    const formatDate = createdDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

    return (
        <div className='flex justify-between max-lg:flex-col  mt-5 px-10 max-lg:px-8 max-md:px-6 max-sm:px-4'>
            <div className='w-[45%] max-lg:w-[100%]'>
                <div className=' border border-[#E4E7EC] rounded-md pb-3'>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={PersonIcon} />
                        </div>

                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[400] font-[Inter] '> Beels Account Number </p>
                            <p className='text-[#101928] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> {accountNumber} </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={MailIcon} />
                        </div>

                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[400] font-[Inter] '> Emails </p>
                            <p className='text-[#101928] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> {email} </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={FirstIcon} />
                        </div>

                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[400] font-[Inter] '> First Name </p>
                            <p className='text-[#101928] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '>{fname} </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={FirstIcon} />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[400] font-[Inter] '> Last Name </p>
                            <p className='text-[#101928] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> {lname}</p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={FirstIcon} />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[400] font-[Inter] '> Phone Number </p>
                            <p className='text-[#101928] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> {pnumber} </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={TelephoneIcon} />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[400] font-[Inter] '> School </p>
                            <p className='text-[#101928] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> {school} </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2 border-b border-[#E4E7EC]'>
                        <div className='w-[30%]'>
                            <img src={SecondIcon} />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[400] font-[Inter] '> Ambassador ref link </p>
                            <p className='text-[#AD3307] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> {refLink} </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                    <div className='flex justify-between items-center px-5 py-2'>
                        <div className='w-[30%]'>
                            <img src={ThirdIcon} />
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#667185] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[400] font-[Inter] '> Date Created </p>
                            <p className='text-[#101928] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> {formatDate} </p>
                        </div>
                        <img src={CopyIcon} />
                    </div>
                </div>
                <div className='flex justify-between items-center my-3  max-xsm:flex-wrap '>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] max-sm:w-[32%] max-xsm:w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2'>
                        <p className='text-[#667185] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Transaction </p>
                        <div className='flex justify-start gap-4 items-center flex-wrap' >
                            <p className='text-[#101928] text-[20px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[600] font-[Inter] '> 5,647 </p>
                            <div className='flex justify-center lg:gap-2 px-2  items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] max-sm:w-[32%] max-xsm:w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2'>
                        <p className='text-[#667185] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Revenue </p>
                        <div className='flex justify-start gap-4 items-center flex-wrap' >
                            <p className='text-[#101928] text-[20px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[600] font-[Inter] '> 8,000 </p>
                            <div className='flex justify-center lg:gap-2 px-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] max-sm:w-[32%] max-xsm:w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2'>
                        <p className='text-[#667185] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Clicks </p>
                        <div className='flex justify-start gap-4 items-center flex-wrap' >
                            <p className='text-[#101928] text-[20px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[600] font-[Inter] '> 300 </p>
                            <div className='flex justify-center lg:gap-2 px-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[50%] max-lg:w-[100%]'>
                <div className='border border-[#E4E7EC] bg-[#FAF9F6] rounded-md  pb-2 max-lg:px-2 '>
                    <p className='text-[14px]  font-[500] text-[#667185] font-[Inter] px-2 my-3 max-sm:my-2 '> Sub Ambassador </p>
                    <div className='px-2 flex justify-between items-center py-1 max-lg:hidden'>
                        <div className='flex justify-start items-center gap-2 w-[30%] '>
                            <div className='h-5 w-5  rounded-md border border-[#D0D5DD]'></div>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Name </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]' />
                                <IoIosArrowDown className='text-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Email Address </p>
                        </div>
                        <div className='flex justify-center items-center gap-2 w-[20%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Type </p>
                        </div>
                        <div className='flex justify-center items-center gap-1  w-[15%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Date Added </p>
                            <div>
                                <IoIosArrowUp className='text-[#D0D5DD]' />
                                <IoIosArrowDown className='text-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex justify-end items-center gap-2 w-[15%]'>
                            <p className='text-[#D0D5DD] text-[8px] font-[500] font-[Inter] '> Status </p>
                        </div>


                    </div>
                    {sub?.map((item, index) => {
                        const createdAtDate = new Date(item.created_at);
                        const formattedDate = createdAtDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

                        // Determine if the current item is the last in the array
                        const isLastItem = index === sub.length - 1;

                        return (
                            <SubAmbassador
                                border={!isLastItem} 
                                key={index}
                                icons={true}
                                name={item.first_name + ' ' + item.last_name}
                                email={item.email}
                                date={formattedDate}
                            />
                        );
                    })}


                </div>
                <div className='flex justify-between items-center mt-3 max-xsm:flex-wrap  '>
                    <div className='border border-[#5572a5] bg-[#FAF9F6] w-[30%] max-lg:w-[32%] max-xsm:w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2 flex flex-col gap-16'>
                        <p className='text-[#667185] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Users </p>
                        <div className='flex justify-start gap-4 items-center flex-wrap' >
                            <p className='text-[#101928] text-[20px] max-lg:text-base max-md:text-sm max-sm:text-xs  font-[600] font-[Inter] '> {user?.length} </p>
                            <div className='flex justify-center gap-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] max-lg:w-[32%] max-xsm:w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2 flex flex-col gap-16'>
                        <p className='text-[#667185] text-[14px]  max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Referrals </p>
                        <div className='flex justify-start gap-4 items-center flex-wrap' >
                            <p className='text-[#101928] text-[20px] max-lg:text-base max-md:text-sm max-sm:text-xs  font-[600] font-[Inter] '> 1,000 </p>
                            <div className='flex justify-center gap-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                    <div className='border border-[#E4E7EC] bg-[#FAF9F6] w-[30%] max-lg:w-[32%] max-xsm:w-[45%] mt-2 rounded-md px-3 max-lg:px-2 max-xsm:px-1 py-2 flex flex-col gap-16'>
                        <p className='text-[#667185] text-[14px] max-lg:text-xs max-sm:text-[10px] font-[500] font-[Inter] '> Ambassadors </p>
                        <div className='flex justify-start gap-4 items-center flex-wrap' >
                            <p className='text-[#101928] text-[20px] max-lg:text-base max-md:text-sm max-sm:text-xs font-[600] font-[Inter] '> 300 </p>
                            <div className='flex justify-center gap-2 items-center bg-[#E7F6EC] rounded-md'>
                                <TiArrowUp />
                                <p className='text-[#036B26] text-[12px] max-lg:text-[10px] max-sm:text-[8px] font-[500] font-[Inter] '> 2% </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalOverview
