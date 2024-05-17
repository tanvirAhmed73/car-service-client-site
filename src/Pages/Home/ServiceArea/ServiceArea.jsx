import React, { useEffect, useState } from 'react';
import ServiceCardMaking from './ServiceCardMaking';

const ServiceArea = () => {

    const [serviceData, setServiceData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{
            setServiceData(data)
        })
    },[])
    
    
    return (
        <div className=''>
            {/* title and details */}
            <div className='mx-auto lg:w-3/5 mt-28'>
                <h1 className='text-orange-600 text-xl font-bold'>Service</h1>
                <h1 className='text-3xl font-bold'>Our Service Area</h1>
                <p className='text-center'>
                The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
            </div> 

            {/* card making */}
            <div className='grid mt-3 w-full md:grid-cols-2 lg:grid-cols-3 mx-auto'>
            {
                serviceData.map(service => 
                <ServiceCardMaking
                key={service._id}
                serviceInfo={service}
                >
                </ServiceCardMaking>
            )
            }
            </div>
            
            
        </div>
    );
};

export default ServiceArea;