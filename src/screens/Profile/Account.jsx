import React, { useState, useRef, useEffect } from 'react'
import CameraIcon from '../../assets/images/camera.png'
import Navbar from '../../assets/images/navbar.png'
import MobileSideBar from '../../components/MobileSideBar'
import { useNavigate } from 'react-router-dom';

const AmbassadorForm = ({ close }) => {
    const [navbar, setNavbar] = useState(false)
    const sidebarRef = useRef(null);
    const [activeSection, setActiveSection] = useState('Account');
    const [imageUploaded, setImageUploaded] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const hiddenFileInput = useRef(null);
    const navigate = useNavigate();

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    useEffect(() => {
        const loggedInUser = localStorage.getItem('logged_in');
        if (!loggedInUser) {
        
          navigate('/login');
        }
     }, []);

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        if (fileUploaded) {
            // Create a URL for the uploaded image
            const url = URL.createObjectURL(fileUploaded);
            setImageUrl(url);
            setImageUploaded(true);
        }
    };

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

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
        <div className='lg:hidden bg-white max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-start '>
            {navbar &&
                <div className='w-1/2 fixed min-h-screen h-screen' style={{ height: '100vh', top: "0" }} ref={sidebarRef}>
                    <MobileSideBar setNavbar={setNavbar} />
                </div>}
            <div className={`mx-5 flex justify-start  items-center  w-full  pt-5`}>
                <div className=''>
                    <div className='lg:hidden' onClick={() => setNavbar(!navbar)}>
                        <img src={Navbar} />
                    </div>
                </div>
                <div className='w-[95%]'>
                    <p className='text-[24px] max-lg:text-[20px] pt-1 font-[600]  text-[#000000] font-[Poppins] text-center '> Profile </p>
                </div>

            </div>
            <div className='mt-5 mx-5  w-[96%] h-16 rounded-[40px] bg-[#EDEDED] flex justify-center items-center '>
                <div className='w-[50%] px-10 flex justify-center items-center' onClick={() => handleSectionClick('Account')}>
                    {activeSection === 'Account' && (
                        <div className='w-[100px] bg-[#FFFFFF] h-8 rounded-[40px] flex justify-center items-center'>
                            <p className='text-[16px] max-lg:text-sm font-[400] text-[#082C25] font-[Poppins] text-center '> Account </p>
                        </div>
                    )}
                    {activeSection !== 'Account' && (
                        <p className='text-[16px] max-lg:text-sm font-[400] text-[#082C25] font-[Poppins] text-center '> Account </p>
                    )}
                </div>
                <div className='w-[50%] px-10 flex justify-center items-center' onClick={() => handleSectionClick('Security')}>
                    {activeSection === 'Security' && (
                        <div className='w-[100px] bg-[#FFFFFF] h-8 rounded-[40px] flex justify-center items-center'>
                            <p className='text-[16px] max-lg:text-sm font-[400] text-[#000000] font-[Poppins] text-center '> Security </p>
                        </div>
                    )}
                    {activeSection !== 'Security' && (
                        <p className='text-[16px] max-lg:text-sm font-[400] text-[#000000] font-[Poppins] text-center '> Security </p>
                    )}
                </div>
            </div>
            <p className=' mx-5  text-[24px] max-lg:text-[20px] pt-5 font-[600] text-[#667185] font-[Poppins] '> Personalize </p>
            <div className='mx-5 flex  justify-start gap-4 items-center py-5'>
                {!imageUploaded && (
                    <div className='h-20 last:only: w-20 rounded-full bg-[#EFEFEF] flex justify-center items-center' onClick={handleClick}>
                        <img src={CameraIcon} />
                    </div>
                )}
                {imageUploaded && (
                    <div className='h-20 last:only: w-20 rounded-full bg-[#EFEFEF] flex justify-center items-center'>
                        <img src={imageUrl || placeholder} alt="Uploaded" className='w-20 rounded-full'/>
                    </div>
                )}
                <p className='text-[20px] max-lg:text-[16px] font-[600] text-[#000000] font-[Poppins]'> {userdetail?.user.first_name} {userdetail?.user.last_name}  </p>
                <input
                    type="file"
                    onChange={handleChange}
                    ref={hiddenFileInput}
                    style={{ display: 'none' }}
                />
            </div>
            <form className='w-[100%]  mx-5'>
                <div className=' px-4'>
                    <div className='pt-2'>
                        <p className='text-[12px] pt-2  font-[700] text-[#242426] font-[Poppins]'> Email Address </p>
                        <input type="text" className=' w-full  email-input text-black border-b-[1px] border-[#E2E4E5]    text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' />
                    </div>
                    <div>
                        <p className='text-[12px] pt-2 font-[700] text-[#242426] font-[Poppins]'> First Name </p>
                        <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' />
                    </div>
                    <div>
                        <p className='text-[12px] pt-2  font-[700] text-[#242426] font-[Poppins]'> Last Name </p>
                        <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' />
                    </div>
                    <div>
                        <p className='text-[12px] pt-2 font-[700] text-[#242426] font-[Poppins]'> Phone Number </p>
                        <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' />
                    </div>
                    <div>
                        <p className='text-[12px] pt-2 font-[700] text-[#242426] font-[Poppins]'> School </p>
                        <input type="text" className='   email-input text-black border-b-[1px] border-[#E2E4E5] w-full text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' />
                    </div>
                    <div>
                        <p className='text-[12px] pt-2  font-[700] text-[#242426] font-[Poppins]'> Department </p>
                        <input type="text" className='  email-input text-black border-b-[1px] border-[#E2E4E5] w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px]' />
                    </div>
                </div>
                <div className=' flex justify-start items-center max-lg:justify-center'>
                    <button className='bg-[#082C25] mt-5 w-3/5 py-3 flex justify-center items-center rounded-md'>
                        <p className='text-white text-[14px] font-[400] font-[Inter] '> Save Changes </p>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AmbassadorForm
