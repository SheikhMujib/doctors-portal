import React from "react";
import chair from "../../../assets/images/chair.png"
import bg from "../../../assets/images/bg.png"
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="bg-cover h-[550px]"
    style={
      {
        background: `url(${bg})`
      }
    }
    >
      <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 rounded-lg shadow-2xl" alt="banner"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          My dental health is important for overall wellbeing. I will take steps to protect it. I trust myself to make decisions that are best for my oral hygiene journey.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
