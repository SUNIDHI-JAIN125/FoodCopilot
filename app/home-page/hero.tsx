"use client";
import Image from "next/image";
import Balancer from "react-wrap-balancer";



import { Button } from "@/components/ui/button";


import Logo from "/public/logo.svg";


const Hero = () => {

    return (
     

        <div>
            <div className="flex justify-between  items-center">
              
            </div>
             <Image src={Logo} width={200} height={100} alt="Company Logo" className="" />
            <div className="flex flex-col items-center  text-center">
                <h1 className=" text-black font-sans">
                    <Balancer>   Food-copilot </Balancer>
                </h1>
                <h3 className="text-gray-500">
                    <Balancer>
                    This app helps users efficiently manage their food items, track calories, and plan meals based on available ingredients. It provides personalized recipe suggestions and timely reminders, making meal planning simple and stress-free.
                 </Balancer>
                </h3>
                <div className="not-prose mt-4 flex md:mt-8 bg-black text-white rounded-xl p-1">
                    <Button variant="ghost" asChild>
                        <a href="/user-home" className="text-xl">
                         Go to Dashboard
                        </a>
                    </Button>
                </div>
            </div>
            </div>
    );
};

export default Hero;
