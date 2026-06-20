import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icons/logo-AVLW2LLWZkI8v845.avif";

export default function Navbar() {
    const location = useLocation();

    const navLinks = [
        {name: "Home", id: "/"},
        {name: "About Us", id: "/about"},
        {name: "Impact", id: "/impact"},
        {name: "Programs", id: "/programs"},
        {name: "Volunteer", id: "/volunteer"},
        {name: "Events", id: "/events"},
        {name: "Contact", id: "/contact"}
    ];

    return (
        <nav className="flex sticky top-0 z-50 justify-between px-8 py-4 items-center bg-[rgb(38,32,30)]" >

            {/* Logo */}
            <Link to="/" ><img src={logo} alt="NayePankh Logo" className="h-30 mx-25 w-auto" /></Link>

            <ul className=" mx-25 flex list-none gap-8 items-center text-white" >
                {navLinks.map((item)=> {
                    const isActive = location.pathname === item.id;

                    return (
                        <li className="relative group" key={item.id} >
                            <Link
                                to={item.id}
                                className={`font-thin font-poppins leading-{25.2px} text-[14px] pb-1 transition-colors duration-200 ${
                                    isActive ? "text-orange-400" : "hover:text-orange-400"
                                }`}
                            >
                                {item.name}
                            </Link>
                            <span
                                className={`absolute left-0 bottom-0 h-[0.5px] w-full bg-orange-400 transition-transform duration-200 ${
                                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                }`}
                            ></span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}