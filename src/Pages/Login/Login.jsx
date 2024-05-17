import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            
            const userData = {email}
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res => {
              if(res.data.success === true){
                location?.state ? navigate(location.state) : navigate('/') 
              }
            })


            // ...
          })
          .catch((error) => {
            console.log(error)
          });
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
                {/* toDO: IMg */}
                <p>Need to img added</p>


          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <NavLink to={'/signUp'}>
                <p className="text-left text-sm underline">Need to create an account?</p>
              </NavLink>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" name="submit" value={"Login"}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
