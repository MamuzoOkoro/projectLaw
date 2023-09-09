import React from "react";
// import { MdOutlineBookmarkAdd } from "react-icons/md";


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
    <div className="w-[90%] my-[30px] border-[#d5d4d4ae] border-b-[1px] py-[10px]">
        {/* main */}
        <div className="flex">
            {/* left */}
            <div className="">
                {/* hold */}
                <div className="flex items-center gap-[10px]">
                    <img src={avatar} className="w-[25px] h-[25px] object-cover rounded-[50%]"/>
                    <div className="text-[14px] font-[500] ">{name}</div>
                </div>
                <div className="text-[20px] leading-6 font-[600] w-[90%]">{title}</div>
                <div className="w-[90%] font-[400] text-[#7c7c7c] my-[10px] leading-4 text-[15px]">{text}</div>
                {/* hold */}
                <div className="text-14px flex justify-between w-[95%]">
                    <div>{time}  && <nav className="ml-[10px] py-[5px] px-[15px] rounded-sm bg-[#e4e2e2]">{txt}</nav>
                    <div>
                        {/* <MdOutlineBookmarkAdd/> */}
                    </div>
                
                    </div>
                </div>
            </div>
            {/* right */}
            <img src={boxImg} />
        </div>
        {/* main */}
    </div>
  )
}

export default ReviewProps