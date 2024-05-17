import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const { _id, title, img, price, description, facility } = serviceData;
  return (
    <div className="mt-10 md:flex mx-auto">
      <div className=" mx-auto text-left">
        <div className="flex mx-auto">
          <div className="w-3/4 ">
          <img src={img} alt="" />
          </div>
          <div className="w-full">
          <div className="rounded-lg bg-base-300 shadow-xl">
              <h1 className="font-bold text-center py-4">Price ${price}</h1>
              <NavLink to={`/checkOut/${_id}`}>
                <button className="btn w-full bg-orange-600 text-white">Proceed Checkout</button>
              </NavLink>
            </div>
          </div>
        </div>


        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-justify">{description}</p>
        {facility.map((serve) => {
          return (
            <div key={serve.name} className=" text-white text-center ">
              <div  className="mb-7 py-7 border-t-8 mt-7 border-amber-600  bg-slate-600">
                <h1 className="font-bold">{serve.name}</h1>
                <p>{serve.details}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* right side */}
      
    </div>
  );
};

export default ServiceDetails;
