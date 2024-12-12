"use client";

import React from "react";

const Welcome: React.FC = () => {
  
  return (
    <div className="  flex flex-col items-center justify-center  mb-8">
      <h1 className="text-4xl font-bold text-center md:text-start text-p-olivine-950">
        Bienvenido a Med
        <span className=" text-p-harvest-gold-600">Finder</span>
      </h1>
      <h3 className="text-xl text-p-olivine-950 pt-5 w-[70%] text-center ">
        Encuentra los medicamentos que necesitas
      </h3>
      
    </div>
  );
};
export default Welcome;
