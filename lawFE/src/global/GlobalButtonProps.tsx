import React  from "react";

interface iBtn{
    h?: string;
    w?: string;
    bg?: string;
    text?: string;
    col?: string;
    font?: string;
}

const GlobalButtonProps:React.FC<iBtn> = ({h,w,bg,text,col,font}) => {
  return (
    <div className={`h-${h} w-${w} bg-${bg} text-${col} justify-center items-center flex rounded-[30px] capitalize text-[13px] font-${font} cursor-pointer`}>
        {text}
    </div>
  )
}

export default GlobalButtonProps