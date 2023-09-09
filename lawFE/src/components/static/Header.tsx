import { Link } from "react-router-dom"
import logo from "../../assets/medium.png"
import GlobalButtonProps from "../../global/GlobalButtonProps"

const Header = () => {
  return (
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

export default Header