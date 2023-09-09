import { Link } from "react-router-dom"
import logo from "../../assets/medium.png"

const Header = () => {
  return (
    <div className="w-full h-[80px] sticky top-0 flex justify-center items-center bg-[hsl(44,100%,55%)] border-[black] border-b-[1px] z-[10]">
        {/* main */}
        <div className="w-[90%] h-[100%] flex justify-between items-center">
            {/* logo */}
            <img src={logo}/>
            {/* Holder */}
            <div className="flex items-center gap-[20px] text-[14px]">
                <nav>Our story</nav>
                <nav>Membership</nav>
                <nav>Write</nav>
                <nav>Sign In</nav>
                
                <Link to="/register">
              <button className="py-[9px] px-[15px] bg-black text-white rounded-[20px] z-20">Get started</button>
                </Link>
            </div>
        </div>
        {/* main */}
    </div>
  )
}

export default Header