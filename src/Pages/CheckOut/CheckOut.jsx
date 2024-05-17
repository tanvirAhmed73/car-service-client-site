import React, { useContext } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const CheckOut = () => {
  const serviceData = useLoaderData();
  const {service_id, title, img, price} = serviceData;
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleSubmit = e =>{
    e.preventDefault()
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const message = form.textArea.value;

    const oderData ={
      firstName, lastName , email, phoneNumber, message, title, img, price
    }

    axios.post('http://localhost:5000/booking', oderData)
    .then(res =>{
      navigate('/booking')
    })


  }

  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <h1 className="text-4xl">{title}</h1>
          <form onSubmit={handleSubmit} className="card-body">
            {/* name */}
            <div className="grid lg:grid-cols-2 gap-4">    
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />   
            </div>
            {/* phone and email */}
            <div className="grid lg:grid-cols-2 gap-4">    
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />   
            </div>
            {/* your message */}
            <div className="grid lg:grid-cols-2 gap-4">    
                <textarea 
                    name="textArea"
                    className="border-2 border-b-slate-750 w-full p-6"
                    placeholder="Enter Your Message" 
                    id="" 
                    cols="30" 
                    rows="10">
                </textarea> 
                <input type="text" defaultValue={price} placeholder="price" disabled className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
                  <input className="btn bg-orange-600 text-white" type="submit" value={'Order Confirm'}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
