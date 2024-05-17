import React from 'react';
import { SlCalender } from "react-icons/sl";
import { MdAddCall } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
const ContactInfo = () => {
    return (
        <div className='md:flex  bg-black w-full justify-around py-10 my-10 text-white'>
            <div className='flex items-center gap-3 justify-center mb-2'>
                <div className='text-orange-600 text-xl'>
                <SlCalender />
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h1 className='font-bold text-xl'>7:00 am - 9:00 pm</h1>
                </div>
            </div>

            <div className='flex items-center gap-3 justify-center mb-2'>
                <div className='text-orange-600 text-xl '>
                <MdAddCall />
                </div>
                <div>
                    <p>Have a question?</p>
                    <h1 className='font-bold text-xl'>+2546 251 2658</h1>
                </div>
            </div>

            <div className='flex items-center gap-3 justify-center mb-2'>
                <div className='text-orange-600 text-xl'>
                <FaMapLocationDot />
                </div>
                <div>
                    <p>Need a repair? our address</p>
                    <h1 className='font-bold text-xl'>Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;