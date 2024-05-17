import React from "react";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-white border-8 shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2  lg:text-left mt-5">
          <h1 className="text-xl text-orange-600 font-bold">About Us</h1>
          <h1 className="lg:text-4xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-pretty">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br />
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn mt-4 bg-orange-600 text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
