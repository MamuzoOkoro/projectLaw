import React from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";


interface iReviews {
    avatar?: any;
    name?: string;
    title?: string;
    text?: string;
    time?: string;
    boxImg?: any;
    txt?: string;

  }

const ReviewProps:React.FC<iReviews> = ({avatar,name,title,text,time,boxImg,txt}) => {
  return (
    <div className="w-[90%] medium:w-[100%]  my-[30px] border-[#d5d4d4ae] border-b-[1px] py-[10px] medium:my-[0px] small: small:py-[1] small:items-center">
        {/* main */}
        <div className="flex w-[100%]">
            {/* left */}
            <div className="">
                {/* hold */}
                <div className="flex items-center gap-[10px]">
                    <img src={avatar} className="w-[25px] h-[25px] object-cover rounded-[50%]"/>
                    <div className="text-[14px] font-[500] ">{name}</div>
                </div>
                <div className="text-[20px] medium:text-[14px] leading-6 font-[600] small:text-[12px] 
                small:w-[100%]
                small:leading-3 w-[90%]">{title}</div>
                <div className="w-[90%] font-[400] text-[#7c7c7c]  my-[10px] leading-4 text-[15px] small:text-[12px] small:w-[100%] small:text ">{text}</div>
                {/* hold */}
                <div className="text-14px flex items-center justify-between w-[95%]">
                    <div className="flex-1 flex small:text-[12px]">{time}  <nav className="ml-[10px] py-[5px] px-[15px] rounded-sm small:text-[12px]">{txt}</nav>
                    </div>
                    <div className="text-[24px] text-[black] font-light small:text-[22px]">
                        <MdOutlineBookmarkAdd/>
                    </div>
                </div>
            </div>
            {/* right */}
       
           <img src={boxImg} className=""/>
           <img src={boxImg} className="medium:hidden hidden small:object-cover w-[40%]"/>
       
        </div>
        {/* main */}
    </div>
  )
}

export default ReviewProps