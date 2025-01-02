import React from "react";
import Image from "next/image";

import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import F1 from "@/public/feature1.jpg";
import F2 from "@/public/F2.jpg";
import F3 from "@/public/F3.jpg";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Image src={F1} alt="Food Item Tracking" width={100} height={104} />,
    title: "Food Item Tracking",
    description:
      "Easily track food items with details such as name, quantity, and calorie content. View a list of all food items in a simple, organized table.",
  },
  {
    icon: <Image src={F2} alt="Get Recipes" width={200} height={200} />,
    title: "Get Recipes",
    description:
      "Effortlessly plan your meals around your class schedule. Get personalized recipe suggestions that fit into your college routine, helping you eat healthy and stay energized throughout the day.",
  },
  {
    icon: <Image src={F3} alt="Meal Planning" width={150} height={200} />,
    title: "Meal Planning",
    description:
      "Plan your meals according to your class timings and dietary preferences on your busy days.",
  },
];



const Feature = () => {
  return (
    <Section className="border-b mt-4">
      <Container className="not-prose">
     
        <div className="flex flex-col gap-6 mt-4">
          <h3 className="text-4xl font-serif text-black font-semibold">
            <Balancer>Features -</Balancer>
          </h3>

          <div className="mt-4 grid  gap-6 md:mt-8 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div
                className="flex flex-col w-full gap-4 p-10 border-2 rounded-3xl border-black 
                           transform transition-transform duration-200 hover:scale-105 hover:shadow-xl"
                key={index}
              >
                {icon}
                <h4 className="text-2xl text-primary font-semibold">{title}</h4>
                <p className="text-base text-gray-600 tracking-wide opacity-75 mt-6">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-20 mt-20">
       

          <div className="mt-8 grid gap-20 md:grid-cols-2">
         
            <div
              className="flex flex-col items-start justify-start w-full h-96 gap-4 
                         p-8 bg-white border-b-4  border-b-green-500 shadow-xl 
                         transform transition-transform rounded-xl duration-300  hover:bg-green-50"
                         style={{ boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)' }}  >
              <div className="flex justify-start">
                <span className="text-4xl rounded-full p-3 bg-green-200">🍎</span>
                
              </div>
              <h4 className="text-2xl mt-2 mb-6 font-serif font-semibold text-center text-black">
                Healthy Eating
              </h4>
              <p className="text-base text-start mt-2 text-gray-700 font-sans tracking-wide  leading-7">
                This app helps you focus on eating healthy by providing
                personalized meal plans and calorie tracking for a balanced
                diet.
              </p>
            </div>

            
            <div
              className="flex flex-col items-start justify-start w-full h-96 gap-4 
                         p-8 bg-white border-b-4  border-b-orange-500 shadow-xl 
                         transform transition-transform rounded-xl duration-300  hover:bg-orange-50"
                         style={{ boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)' }}  >
              <div className="flex justify-start">
                <span className="text-4xl rounded-full p-3 bg-orange-200">⏰</span>
              </div>
              <h4 className="text-2xl mt-2 mb-6 font-serif font-semibold text-center text-black">
              Time Management
              </h4>
              <p className="text-base text-start mt-2 text-gray-700 font-sans tracking-wide  leading-7">
            
                Save time by planning your meals efficiently, ensuring you have
                nutritious food ready when you need it.
              </p>
            </div>

         
            <div
              className="flex flex-col items-start justify-start w-full h-96 gap-4 
                         p-8 bg-white border-b-4  border-b-purple-500 shadow-xl 
                         transform transition-transform rounded-xl duration-300  hover:bg-purple-50"
                         style={{ boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)' }}  >
              <div className="flex justify-center space-x-4">
                <span className="text-4xl rounded-full p-3 bg-purple-200">🥗</span>
              </div>
              <h4 className="text-2xl mt-2 mb-6 font-serif font-semibold text-center text-black">
              Customizable Preferences
              </h4>
              <p className="text-base text-start mt-2 text-gray-700 font-sans tracking-wide  leading-7">
            
            
                Tailor the app to your specific needs with options for dietary
                restrictions, favorite cuisines, and more.
              </p>
            </div>

        
            <div
              className="flex flex-col items-start justify-start w-full h-96 gap-4 
                         p-8 bg-white border-b-4  border-b-blue-500 shadow-xl 
                         transform transition-transform rounded-xl duration-300  hover:bg-blue-50"
                         style={{ boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)' }}  >
              <div className="flex justify-center space-x-4">

                <span className="text-4xl rounded-full p-3 bg-blue-200">📱</span>
        
              </div>
              <h4 className="text-2xl mt-2 mb-6 font-serif font-semibold text-center text-black">
                User-Friendly Design
              </h4>
              <p className="text-base text-start mt-2 text-gray-700 font-sans tracking-wide  leading-7">
            
            
                Our intuitive interface makes it easy to navigate, plan, and
                track your meals effortlessly.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
