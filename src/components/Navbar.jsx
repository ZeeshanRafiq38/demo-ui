import React from "react";
import vector from "./../assets/images/Vector.png";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-12 bg-white h-[100px]">
            <div className="relative">
                <h2 className="font-bold text-2xl">ATS RESUME</h2>
                <img
                    className="absolute -top-6 -right-6"
                    src={vector}
                    alt="vector"
                />
            </div>
            <div>
                <ul className="flex items-center gap-12 text-[#7E75A7] text-[15px] font-semibold ml-32 ">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="text-[#032433] text-[15px] space-x-4 font-medium">
                <button className="border border-[#032433] rounded-full py-2 px-6 cursor-pointer hover:bg-[#032433] transition-all hover:text-white">
                    Why Choose Us
                </button>
                <button className="bg-[#032433] py-2 px-6 rounded-full font-medium text-white border hover:bg-white transition-all hover:text-[#032433] hover:border-[#032433]">
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
