import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center  ">
        <div className=" w-[600px]">
          <div className="modal-box dark:bg-slate-700 dark:text-white">
            <h3 className="font-bold text-xl ark:bg-slate-700 dark:text-white">
              Contact Us
            </h3>

            <div className="mt-4 space-y-2 p">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-80 px-3  py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
              />
            </div>
            {/* email */}
            <div className="mt-4 space-y-2 p">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3  py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
              />
            </div>
            {/* passwaor */}
            <div className="mt-4 space-y-2 p  ">
              <span>Message</span>
              <br />
              <textarea
                type="text"
                placeholder="Enter Your Password"
                className="w-80 px-3  py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
              />
            </div>
            {/* button  */}
            <div className=" justify-around mt-4 ">
              <button className="bg-indigo-500 text-white rounded-md px-3 py-1 hover:bg-indigo-700 duration-200">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
