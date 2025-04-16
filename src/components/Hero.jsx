import React from "react";
import hero from "./../assets/images/hero.png";
const Hero = () => {
    return (
        <main>
            <div className="hero flex items-center justify-center relative">
                <h1 className="text-[43px] text-[#032433] font-semibold">
                    Why Choose Us
                </h1>
                <button className="px-8 py-2 rounded-md absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#FA1239] text-[15px] font-medium text-white">
                    Home &gt; Why Choose Us
                </button>
            </div>
            <div className="flex items-center py-20 mx-12">
                <div className="flex-1 space-y-6">
                    <p className="text-[38px] text-[#032433] font-semibold">
                        Why a Manually Crafted Resume <br />
                        <span className="text-[#FA1239]">Beats AI</span> and
                        Templates Every Time
                    </p>
                    <p className="text-xl font-semibold text-[#032433]">If your resume sounds like everyone else’s, it won’t get you anywhere.</p>
                    <p className="text-[#032433] text-lg w-[70%] leading-loose">In today’s hyper-competitive job market, using an AI tool or downloading a generic template might seem like the easy fix. But here’s the truth: AI doesn’t understand your career, your achievements, or how hiring really works. And templates? They’re built for speed—not strategy.</p>
                </div>
                <div className="flex-2">
                    <img src={hero} alt="Hero" />
                </div>
            </div>
        </main>
    );
};

export default Hero;
