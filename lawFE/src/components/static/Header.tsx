import { Link } from "react-router-dom"
import logo from "../../assets/medium.png"
import GlobalButtonProps from "../../global/GlobalButtonProps"
import { useState } from "react"

const Header = () => {

const [show, setShow]= useState<boolean>(false)

const onShow= ()=>{
    if (window.scrollY >= 100 ) {
        setShow(true)
    } else {
        setShow(false)
    }
}

window.addEventListener("scroll", onShow)

  return (
   <div>
    {
        show ? (
            <div className="w-full h-[80px] flex justify-center items-center bg-white border-[black] border-b-[1px] z-[10] fixed duration-1000 transition-all">
            {/* main */}
            <div className="w-[90%] h-[100%] flex justify-between items-center">
                {/* logo */}
                <img src={logo} className="small:w-[50%]"/>
                {/* Holder */}
                <div className="flex items-center gap-[20px] text-[14px] ">
                    <div className="flex items-center  gap-[20px]  small:hidden">
                    <nav>Our story</nav>
                    <nav>Membership</nav>
                    <nav>Write</nav>
                    <nav>Sign In</nav>
                    </div>
                    
                    <Link to="/register">
                 <GlobalButtonProps h="h-[40px]" w="w-[100px]" text="Get started" bg="bg-green-300" col="text-[white]" font="medium"/>
                    </Link>
                </div>
            </div>
            {/* main */}
        </div>
        ):
        (
            <div className="w-full h-[80px] flex justify-center items-center bg-[hsl(44,100%,55%)] border-[black] border-b-[1px] z-[10]">
            {/* main */}
            <div className="w-[90%] h-[100%] flex justify-between items-center">
                {/* logo */}
                <img src={logo} className="small:w-[50%]"/>
                {/* Holder */}
                <div className="flex items-center gap-[20px] text-[14px] ">
                    <div className="flex items-center  gap-[20px]  small:hidden">
                    <nav>Our story</nav>
                    <nav>Membership</nav>
                    <nav>Write</nav>
                    <nav>Sign In</nav>
                    </div>
                    
                    <Link to="/register">
                 <GlobalButtonProps h="h-[40px]" w="w-[100px]" text="Get started" bg="bg-black" col="text-[white]" font="medium"/>
                    </Link>
                </div>
            </div>
            {/* main */}
        </div>
        )
    }
   </div>
  )
}

export default Header