import React from "react";
import reward1 from "./../assets/images/reward1.png";
import reward2 from "./../assets/images/reward2.png";
import reward3 from "./../assets/images/reward3.png";
import reward4 from "./../assets/images/reward4.png";

const Rewards = () => {
    return (
        <section className="bg-[#FA1239] rounded-xl mx-12 mb-44 relative space-y-8 h-[350px]">
            <div className="text-center text-white">
                <h2 className="text-4xl font-semibold py-8">
                    What You Need Is Strategy, Positioning, and Precision.
                </h2>
                <p className="text-lg">
                    At ATS RESUME, every resume is crafted by a seasoned HR
                    professional who understands
                </p>
            </div>
            <div className="grid grid-cols-4 gap-6 px-12 absolute -bottom-36 w-full">
                <div className="bg-white rounded-lg shadow-md flex flex-col items-center gap-6 py-6">
                    <img src={reward1} className="w-fit h-32" alt="Reward" />
                    <p className="text-lg text-[#032433] w-[150px] text-center capitalize leading-relaxed">
                        What recruiters actually look for
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md flex flex-col items-center gap-6 py-6">
                    <img src={reward2} className="w-fit h-32" alt="Reward" />
                    <p className="text-lg text-[#032433] w-[200px] text-center capitalize leading-relaxed">
                        How hiring managers make decisions in 6 seconds or less
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md flex flex-col items-center gap-6 py-6">
                    <img src={reward3} className="w- h-32" alt="Reward" />
                    <p className="text-lg text-[#032433] w-[250px] text-center capitalize leading-relaxed">
                        How ATS software reads and ranks resumes
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md flex flex-col items-center gap-6 py-6">
                    <img src={reward4} className="w-fit h-32" alt="Reward" />
                    <p className="text-lg text-[#032433] w-[250px] text-center capitalize leading-relaxed text-balance">
                        How to turn your experience into value-driven impact
                        statements
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Rewards;
