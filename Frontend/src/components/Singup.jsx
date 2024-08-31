import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Singup() {
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className=" w-[600px]">
          <div className="modal-box dark:bg-slate-700 dark:text-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>

            <h3 className="font-bold text-lg dark:bg-slate-700 dark:text-white">
              SingUp
            </h3>
            {/* name  */}
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
            <div className="mt-4 space-y-2 p">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Password"
                className="w-80 px-3  py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
              />
            </div>
            {/* button  */}
            <div className="flex justify-around mt-4 ">
              <button className="bg-indigo-500 text-white rounded-md px-3 py-1 hover:bg-indigo-700 duration-200">
                Singup
              </button>
              <p>
                {" "}
                Have Account ?{" "}
                <button
                  className="underline text-indigo-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singup;
