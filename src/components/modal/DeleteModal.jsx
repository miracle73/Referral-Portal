
import React from 'react';
import DeleteIcon from '../../assets/images/secondBin.png'
import SecondDeleteIcon from '../../assets/images/ThirdDelete.png'
// { isOpen, onClose, children }
const DeleteModal = () => {
    //  if (!isOpen) {
    //     return null;
    //  }

    return (
        // onClick={onClose}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" >
            {/* onClick={(e) => e.stopPropagation()} */}
            <div class="bg-white p-5 rounded-lg w-1/2 max-w-md" >
                <div className='justify-center flex items-center'>
                    <img src={DeleteIcon} />
                </div>

                <p className='text-[#202020] text-center my-3 text-[20px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[500] font-[Poppins] '> Are you sure you want to delete Oreva Akpotu?</p>
                <p className='text-[#202020] text-center my-3 text-[16px] max-lg:text-sm max-sm:text-xs font-[400] font-[Poppins] '> The system will also delete any details associated with this Lead Ambassador. </p>
                <div className='justify-between flex items-center  mb-4 '>
                    <button className='justify-center border h-10 w-[35%] border-[#D42620]  flex items-center  rounded-md '>
                        <p className='text-[#D42620] text-center text-[14px] max-md:text-xs max-sm:text-[10px] font-[400] font-[Rockwell] '>cancel</p>
                    </button>
                    <button className='justify-center h-10 w-[35%] flex items-center  bg-[#D42620] rounded-md '>
                        <img src={SecondDeleteIcon} />
                        <p className='text-[#FFFFFF] text-center text-[14px] max-md:text-xs max-sm:text-[10px] font-[400] font-[Rockwell] '>Delete</p>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default DeleteModal;
