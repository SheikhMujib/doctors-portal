import React from "react";
import Appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
    style={
        {
          background: `url(${Appointment})`
        }
      }
    >
        <div className="hero-content flex-col py-16">
      <div className="text-center">
        <h3 className="text-xl font-bold text-secondary">Contact Us</h3>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>
      <div className="card-body w-96">
        <div className="form-control">
          <input type="email" placeholder="Email Address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Subject" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered textarea-lg w-full">
        </textarea>
        </div>
      </div>
      <input
            className="btn btn-secondary w-40 text-white"
            value="Submit"
            type="submit"
          />
    </div>
    </div>
  );
};

export default ContactUs;
