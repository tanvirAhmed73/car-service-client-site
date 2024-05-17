import React from 'react';

const BookingRow = ({booking, handleDelete, handleConfirm}) => {

    const {_id ,img, title, firstName, price, email, state} = booking;

    return (
        
            <tr>
              
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{title}</div>
                  </div>
                </div>
              </td>
                <td>
                    {firstName}        
                </td>
                <td>
                    {email}        
                </td>
                <td>
                    {price}        
                </td>
              <th>
                {
                    state === 'confirm' ?
                    <span className=" bg-green-600 text-white btn-xs">Confirmed</span>
                    :
                    <button onClick={()=>handleConfirm(_id)} className="btn bg-orange-600 text-white btn-xs">Confirm</button>
                }
              </th>
              <th>
                <button onClick={()=>handleDelete(_id)} className="btn bg-red-600 text-white btn-xs">Delete</button>
              </th>
            </tr>
        
    );
};

export default BookingRow;