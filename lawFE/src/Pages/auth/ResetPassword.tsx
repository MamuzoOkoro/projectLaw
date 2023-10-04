// http://preview.themeforest.net/item/authfy-responsive-login-and-signup-page-template/full_screen_preview/23182208
// import { useState } from "react"
import {BsFacebook, BsTwitter, BsGoogle} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import  {FiKey} from "react-icons/fi"
import { Link } from "react-router-dom"
// import * as yup from "yup"
// import {useForm} from "react-hook-form"
// import {yupResolver} from "@hookform/resolvers/yup"
// import Swal from "sweetalert2"

const ResetPassword = () => {


    // createAuth(formData).then((res)=>{
    //   if(res){
    //     Swal.fire({
    //       title: "you have been registered succesfully😊",
    //       showClass: {
    //         popup: "animate_animated animate_fadeInDown",
    //       },
    //       hideClass: {
    //         popup: "animate_animated animate_fadeOutUp",
    //       },
    //     });
    //     navigate("/sign-in")
    //   }else{
    //     navigate("/")
    //     Swal.fire({
    //       title: "Error occured while registering 😢😢",
    //       showClass: {
    //         popup: "animate_animated animate_fadeInDown",
    //       },
    //       icon: "error",
    //       hideClass: {
    //         popup: "animate_animated animate_fadeOutUp",
    //       },
    //     });
    //   }
    // })


  return (
    // container
    <div className="w-full h-[100vh] flex " 
    >
      {/* cover */}
      <div className="w-full h-[100vh] bg-[#080707] bg-opacity-30 flex flex-col justify-center items-center">

        {/* card */}
        <div className="">

          {/* top */}
          <div className="w-[480px] h-[31px] rounded-t-[10px] bg-[#C5C9CA] flex items-center">
            <div className="w-[13px] h-[13px] bg-blue-500 ml-3 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-[dodgerblue] ml-1 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-rose-500 ml-1 rounded-[50%]"></div>
          </div>

          {/* Box */}
        <div className="w-[480px] flex">

                {/* right */}
            <form className="w-full flex flex-col items-center bg-white justify-center p-7" >
{/* title */}
              <div className="font-bold text-[18px] text-yellow-800 mb-5">Reset Your Password</div>  
{/* email */}
            <div className="border-b-2 h-[40px] w-full mt-6">
           <div className="flex">
           <input className=" w-full outline-none placeholder: text-[13px]" placeholder="Email Address" 
            />
            <FiMail className="text-rose-600 cursor-pointer" />
           </div>
            
            <div className="text-[10px] text-rose-600 text-end italic">Please enter a email!</div>
            </div>
            {/* Button */}
            <button className="w-full bg-[rgb(255,192,23)] h-[40px] rounded-md text-slate-700 text-[14px] font-bold cursor-pointer mt-4 "
            type="submit"
            > Reset password</button>
            </form>

        </div>

        </div>
      </div>
    </div>
  )
}

export default ResetPassword
