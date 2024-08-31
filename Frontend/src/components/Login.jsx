import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-700 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg dark:bg-slate-700 dark:text-white">
              Login
            </h3>
            <div className="mt-4 space-y-2 p">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3  py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            {/* passwaor */}
            <div className="mt-4 space-y-2 p">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Password"
                className="w-80 px-3  py-1 border rounded-md outline-none dark:bg-slate-700 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            {/* button  */}
            <div className="flex justify-around mt-4 ">
              <button className="bg-indigo-500 text-white rounded-md px-3 py-1 hover:bg-indigo-700 duration-200">
                Login
              </button>
              <p>
                {" "}
                Not registered ?{" "}
                <Link
                  to={"/signup"}
                  className="underline text-indigo-500 cursor-pointer"
                >
                  Singup
                </Link>
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
