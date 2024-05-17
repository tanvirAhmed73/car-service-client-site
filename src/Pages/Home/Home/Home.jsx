import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import ServiceArea from '../ServiceArea/ServiceArea';
import ContactInfo from '../ContactInfo/ContactInfo';
import Team from '../Team/Team';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Home = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
          return null
        }
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceArea></ServiceArea>
            <ContactInfo></ContactInfo>
            <Team></Team>
        </div>
    );
};

export default Home;