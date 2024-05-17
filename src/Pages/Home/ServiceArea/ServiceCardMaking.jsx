import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCardMaking = ({ serviceInfo }) => {
const { _id, service, title, img, price } = serviceInfo;

  return (
    <div className="card w-full mb-3 lg:w-[315px] mx-auto md:w-[340px] bg-base-100 shadow-xl  gap-10">
      <figure>
        <img
          src={img}
          alt="" 
        />
      </figure>
      <div className="">
        <h2 className="card-title">{title}</h2>
        <div className="justify-between flex ">
            <p className="text-orange-600">Price :${price}</p>
            <NavLink to={`/serviceDetails/${_id}`}>
              <button className="btn bg-orange-600 text-white">Book Now</button>
            </NavLink>
        </div>
      </div>
    </div>
  );    
};

export default ServiceCardMaking;
