import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

    const {user, loading, logOut} = useContext(AuthContext)

    // 

    const handleLogOut = ()=>{
      logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }


    const links = [
        {id:1, name: "Home", url:'/'},
        {id:2, name: "About", url:'/about'},
        {id:3, name: "Services", url:'/services'},
        {id:4, name: "Blog", url:'/blog'},
        {id:5, name: "Contact", url:'/contact'},
        
    ]
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu gap-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
                links.map(link => 
                <NavLink key={link.id} to={`${link.url}`}><li className="hover:text-blue-600">{link.name}</li></NavLink>
                )
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-14 menu-horizontal px-1">
            {
                links.map(link => 
                <NavLink key={link.id} to={`${link.url}`}><li className="hover:text-blue-600">{link.name}</li></NavLink>
                )
            }
            {
              user?  
              <NavLink to={'/booking'}><li className="hover:text-blue-600">Booking</li></NavLink>
              :
              <NavLink to={'/'}><li className="hover:text-blue-600 hidden">Booking</li></NavLink>
            }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?
          <button onClick={handleLogOut} className="btn bg-orange-600 text-white">LogOut</button>
          :
          <NavLink to={'/login'}>
            <button className="btn bg-orange-600 text-white">Log In</button>
          </NavLink>
        }
      </div>
    </div>
  );
};

export default Navbar;
