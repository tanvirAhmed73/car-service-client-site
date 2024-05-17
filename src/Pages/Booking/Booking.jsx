import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Booking = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res =>{
      setData(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //   });
  }, []);

  const handleDelete = (id) =>{
    fetch(`http://localhost:5000/booking/${id}`,{
        method : "DELETE",
    })
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        
    })
}

  const handleConfirm = (id)=>{
    fetch(`http://localhost:5000/booking/${id}`,{
        method : "PATCH",
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        
    })
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
          <tr>
              <th>Service Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                data.map(booking => 
                <BookingRow key={booking._id} handleConfirm={handleConfirm} handleDelete={handleDelete} booking={booking}></BookingRow>
                )
            }
            
          </tbody>
          {/* foot */}
          <tfoot>
            
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Booking;
