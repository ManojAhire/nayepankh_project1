import logo from "../assets/icons/logo-AVLW2LLWZkI8v845.avif"
export default function Navbar() {
    const navLinks = [
        {name: "Home", id: "/home"},
        {name: "About Us", id: "/about"},
        {name: "Impact", id: "/impact"},
        {name: "Programs", id: "/programs"},
        {name: "Volunteer", id: "/volunteer"},
        {name: "Events", id: "/events"},
        {name: "Contact", id: "/contact"}
    ]

    return (
        <nav className="flex justify-between px-8 py-4 items-center bg-[#1d1e20]" >

            {/* Logo */}
            <a href="#home" ><img src={logo} alt="NayePankh Logo" className="h-25 w-auto" /></a>

            <ul className=" flex list-none gap-8 items-center text-white" >
                {navLinks.map((item)=> (
                    <li className="hover:text-orange-400 transition-colors duration-200 " key={item.id} >
                        <a href={item.id} className="text-sm" >{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}