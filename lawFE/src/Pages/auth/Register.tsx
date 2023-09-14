// http://preview.themeforest.net/item/authfy-responsive-login-and-signup-page-template/full_screen_preview/23182208
// import { useState } from "react"
import { useState } from "react";
import { BsFacebook, BsTwitter, BsGoogle } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "../start/LoadingPage";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { RegisterAPI } from "../../api/authApi";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { name, email, password, confirm } = data;
    setLoading(true);

    RegisterAPI({ name, email, password, confirm }).then((res) => {
    if (res) {
      Swal.fire({
        title: "you have been registered succesfully😊",
        showClass: {
          popup: "animate_animated animate_fadeInDown",
        },
        hideClass: {
          popup: "animate_animated animate_fadeOutUp",
        },
      });
      navigate("/sign-in");
    } else {
      navigate("/register");
      Swal.fire({
        title: "Error occured while registering 😢😢",
        showClass: {
          popup: "animate_animated animate_fadeInDown",
        },
        icon: "error",
        hideClass: {
          popup: "animate_animated animate_fadeOutUp",
        },
      });
    }
  });
});

  return (
    // container
    <div className="w-full h-[100vh] flex ">
      {/* {
    loading && <LoadingPage/>
  } */}
      {/* cover */}
      <div className="w-full h-[100vh] bg-[#080707] bg-opacity-30 flex flex-col justify-center items-center">
        {/* card */}
        <div className="">
          {/* top */}
          <div className="w-[580px] h-[31px] rounded-t-[10px] bg-[#C5C9CA] flex items-center">
            <div className="w-[13px] h-[13px] bg-blue-500 ml-3 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-[dodgerblue] ml-1 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-rose-500 ml-1 rounded-[50%]"></div>
          </div>

          {/* Box */}
          <div className="w-[580px] flex">
            {/* left */}
            <div className="w-[40%] px-7 flex flex-col items-center justify-center bg-[#737171] py-[20px]">
              {/* logo */}
              <div className="">
                <div className="text-[20px] font-bold text-white">AJ-Law</div>
              </div>
              {/* text  */}
              <div className="text-[12px] font-bold text-white mt-8 mb-3">
                Login using social media to get quick access
              </div>
              {/* social Buttons */}
              <div className=" flex items-center justify-center px-2 w-[100%] h-[36px] bg-blue-600 text-[12px] rounded-lg mt-5 text-white cursor-pointer">
                <div className="mr-2">
                  <BsFacebook />
                </div>
                Login with facebook
              </div>

              <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-[dodgerblue] text-[12px] rounded-lg mt-5 text-white cursor-pointer">
                <div className="mr-2">
                  <BsTwitter />
                </div>
                Login with twitter
              </div>

              <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-rose-600 text-[12px] rounded-lg mt-5 text-white cursor-pointer">
                <div className="mr-2">
                  <BsGoogle />
                </div>
                Login with google
              </div>
            </div>

            {/* right */}
            <form
              className="w-[60%] flex flex-col items-center bg-white justify-center p-7"
              onSubmit={onSubmit}
            >
              {/* title */}
              <div className="font-bold text-[18px] text-yellow-800 mb-5">
                Sign Up for Free!
              </div>
              {/* full name */}
              <div className="border-b-2 h-[40px] w-full">
                <input
                  className=" outline-none w-full placeholder: text-[13px]"
                  placeholder="Name"
                  {...register("name")}
                />
                {errors?.name?.message && (
                  <div className="text-[10px] text-rose-600 text-end italic">
                    Please enter a name!!
                  </div>
                )}
              </div>
              {/* email */}
              <div className="border-b-2 h-[40px] w-full mt-6">
                <div className="flex">
                  <input
                    className=" w-full outline-none placeholder: text-[13px]"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                  <FiMail className="text-rose-600 cursor-pointer" />
                </div>

                {errors?.email?.message && (
                  <div className="text-[10px] text-rose-600 text-end italic">
                    Please enter a email!
                  </div>
                )}
              </div>
              {/* password */}
              <div className="border-b-2 h-[43px] w-full mt-6">
                {/* actual inputs */}
                <div className="flex">
                  <input
                    className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2"
                    placeholder="password"
                    {...register("password")}
                  />
                  <FiKey className="text-rose-600 cursor-pointer" />
                </div>
                {/* error */}
              {
                errors?.password?.message &&   <div className="text-[10px] text-rose-600 text-end mb-3 italic">
                Please enter a password!
              </div>
              }
              </div>
              {/* confirm password */}
              <div className="border-b-2 h-[43px] w-full mt-6">
                {/* actual inputs */}
                <div className="flex">
                  <input
                    className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2"
                    placeholder="confirm password"
                    {...register("confirm")}
                  />
                  <FiKey className="text-rose-600 cursor-pointer" />
                </div>
                {/* error */}
              {
                errors?.confirm?.message &&   <div className="text-[10px] text-rose-600 text-end mb-3 italic">
                Please enter a confirm password!
              </div>
              }
              </div>

              {/* Button */}
              <button
                className="w-full bg-[rgb(255,192,23)] h-[40px] rounded-md text-slate-700 text-[14px] font-bold cursor-pointer mt-4 "
                type="submit"
              >
                {" "}
                Sign Up
              </button>

              {/* to Signin */}
              <div className="flex justify-center items-center  mt-4">
                <div className=" text-rose-700 text-[13px]">
                  Already have an account?
                </div>
                <Link to="/sign-in">
                  <div className="text-[13px] ml-2 text-slate-800 font-bold hover:text-rose-700 hover:cursor-pointer hover:underline">
                    Login
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
